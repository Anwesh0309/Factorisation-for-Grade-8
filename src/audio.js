/* =========================================================================
   STRICT SINGLE-TRACK AUDIO ENGINE (Zero Audio Overlap Guarantee)
   Voice: Alice (ID: Xb7hH8MSUJpSbSDYk0k2)
   Model: eleven_multilingual_v2
   ========================================================================= */
export const VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2";

export const STYLE_SETTINGS = {
  celebration: { stability: 0.12, similarity_boost: 0.45, style: 0.75, rate: 1.06, pitch: 1.2 },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, rate: 1.0, pitch: 1.1 },
  question: { stability: 0.20, similarity_boost: 0.55, style: 0.55, rate: 0.98, pitch: 1.08 },
  emphasis: { stability: 0.16, similarity_boost: 0.50, style: 0.60, rate: 0.95, pitch: 1.05 },
  thinking: { stability: 0.24, similarity_boost: 0.60, style: 0.35, rate: 0.90, pitch: 0.95 },
  instruction: { stability: 0.20, similarity_boost: 0.55, style: 0.50, rate: 1.0, pitch: 1.0 },
  statement: { stability: 0.20, similarity_boost: 0.55, style: 0.50, rate: 1.0, pitch: 1.0 }
};

export let audioMuted = false;
let ttsVoice = null;
let currentAudioElement = null;
let currentQueue = 0;

const API_KEY = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_ELEVENLABS_API_KEY) || '';
const MODEL_ID = "eleven_multilingual_v2";
const dynamicCache = new Map();

function pickVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  return (
    voices.find(v => /female|alice|zira|samantha|victoria|google us english/i.test(v.name)) ||
    voices.find(v => v.lang && v.lang.startsWith('en')) ||
    voices[0]
  );
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    ttsVoice = pickVoice();
  };
  ttsVoice = pickVoice();
}

export function setMuted(m) {
  audioMuted = m;
  if (m) stopNarration();
}

/** Stop all running HTML5 Audio and Web Speech Synthesis immediately */
export function stopNarration() {
  currentQueue++; // Invalidate all ongoing queues
  if (currentAudioElement) {
    try {
      currentAudioElement.pause();
      currentAudioElement.currentTime = 0;
    } catch (e) {}
    currentAudioElement = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

function playUrl(url, queueId) {
  return new Promise((resolve) => {
    if (queueId !== currentQueue || audioMuted) return resolve(false);

    const audio = new Audio(url);
    currentAudioElement = audio;

    const cleanup = () => {
      audio.onended = null;
      audio.onerror = null;
      if (currentAudioElement === audio) {
        currentAudioElement = null;
      }
    };

    audio.onended = () => {
      cleanup();
      resolve(true);
    };

    audio.onerror = () => {
      cleanup();
      resolve(false);
    };

    audio.play().then(() => {
      if (queueId !== currentQueue || audioMuted) {
        try { audio.pause(); } catch (e) {}
        cleanup();
        resolve(false);
      }
    }).catch(() => {
      cleanup();
      resolve(false);
    });
  });
}

async function fetchDynamicUrl(seg) {
  if (!API_KEY || !seg.text) return null;
  if (dynamicCache.has(seg.text)) return dynamicCache.get(seg.text);
  const cfg = STYLE_SETTINGS[seg.style] || STYLE_SETTINGS.statement;
  try {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`, {
      method: 'POST',
      headers: { 'xi-api-key': API_KEY, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
      body: JSON.stringify({
        text: seg.text,
        model_id: MODEL_ID,
        voice_settings: {
          stability: cfg.stability,
          similarity_boost: cfg.similarity_boost,
          style: cfg.style,
          use_speaker_boost: true
        }
      })
    });
    if (!res.ok) return null;
    const url = URL.createObjectURL(await res.blob());
    dynamicCache.set(seg.text, url);
    return url;
  } catch (e) {
    return null;
  }
}

export function speakSegment(seg, queueId) {
  return new Promise(async (resolve) => {
    if (queueId !== currentQueue || audioMuted || !seg || !seg.text) return resolve();

    // 1) Pre-generated static mp3
    if (seg.file) {
      const ok = await playUrl(seg.file, queueId);
      if (ok || queueId !== currentQueue || audioMuted) return resolve();
    }

    if (queueId !== currentQueue || audioMuted) return resolve();

    // 2) Dynamic ElevenLabs request
    const dyn = await fetchDynamicUrl(seg);
    if (queueId !== currentQueue || audioMuted) return resolve();

    if (dyn) {
      const ok = await playUrl(dyn, queueId);
      if (ok || queueId !== currentQueue || audioMuted) return resolve();
    }

    if (queueId !== currentQueue || audioMuted) return resolve();

    // 3) Browser speech synthesis fallback (only if queue is STILL active)
    fallbackSpeech(seg, queueId).then(resolve);
  });
}

function fallbackSpeech(seg, queueId) {
  return new Promise((resolve) => {
    if (queueId !== currentQueue || audioMuted || typeof window === 'undefined' || !('speechSynthesis' in window) || !seg.text) {
      return resolve();
    }

    try {
      window.speechSynthesis.cancel();
      const cfg = STYLE_SETTINGS[seg.style] || STYLE_SETTINGS.statement;
      const utter = new SpeechSynthesisUtterance(seg.text);
      if (ttsVoice) utter.voice = ttsVoice;
      utter.rate = cfg.rate;
      utter.pitch = cfg.pitch;
      utter.volume = 1;

      utter.onend = resolve;
      utter.onerror = resolve;

      if (queueId === currentQueue && !audioMuted) {
        window.speechSynthesis.speak(utter);
      } else {
        resolve();
      }
    } catch (e) {
      resolve();
    }
  });
}

function preload(seg) {
  if (!seg) return;
  if (seg.file) {
    try { const a = new Audio(); a.preload = 'auto'; a.src = seg.file; } catch (e) {}
  }
}

export async function narrate(segments, autoplay = true) {
  if (!autoplay || audioMuted) return;
  stopNarration();
  const myQueue = currentQueue;
  const segList = Array.isArray(segments) ? segments : [segments];

  for (let i = 0; i < segList.length; i++) {
    if (myQueue !== currentQueue || audioMuted) return;
    preload(segList[i + 1]);
    await speakSegment(segList[i], myQueue);
    if (myQueue !== currentQueue || audioMuted) return;
  }
}

export function playFeedback(entry) {
  if (!entry) return;
  narrate(entry, true);
}

export const say = text => ({ text, style: 'statement' });
export const ask = text => ({ text, style: 'question' });
export const cheer = text => ({ text, style: 'celebration' });
export const emphasize = text => ({ text, style: 'emphasis' });
export const think = text => ({ text, style: 'thinking' });
export const celebrate = text => ({ text, style: 'celebration' });
export const instruct = text => ({ text, style: 'encouragement' });
