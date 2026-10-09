/* =========================================================================
   OFFLINE AUDIO GENERATION SCRIPT (ElevenLabs "Alice" pipeline)
   Voice: Alice (ID: Xb7hH8MSUJpSbSDYk0k2)
   Generates MP3 audio for:
   - Wonder, Story, Simulation Guidance & Reflection phases
   - All 100 Practice Questions across 10 Worlds
   - All 100 Practice Question Hints across 10 Worlds
   ========================================================================= */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { QUESTION_BANK } from '../src/questionBank.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'assets', 'audio');
const MAP_FILE = path.join(ROOT, 'src', 'audioMap.js');

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
const MODEL_ID = 'eleven_multilingual_v2';

const VOICE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true }
};

// Base lesson phrases
const basePhrases = [
  // Wonder Phase
  { key: 'wonder_1', style: 'emphasis', text: "Zara snapped one big square tile, five long strips, and six small tiles into one perfect rectangle. Its sides are x plus 2 and x plus 3. So x squared plus 5 x plus 6 equals x plus 2, times x plus 3!" },
  { key: 'wonder_2', style: 'question', text: "How can we find the sides of a rectangle when we only know its area?" },

  // Story Phase (Slides 1 to 8)
  { key: 'story_1', style: 'statement', text: "Multiplying builds things. Three times four gives twelve. Algebra does it too: x plus 2, times x plus 3, builds x squared plus 5 x plus 6. Factorising does the reverse. It un-multiplies an expression back into its factors!" },
  { key: 'story_2', style: 'emphasis', text: "An expression is made of terms joined by plus or minus signs. In 6 x squared plus 9 x, the terms are 6 x squared and 9 x. A factor divides a term exactly. 6 x squared is 2 times 3 times x times x, and 9 x is 3 times 3 times x. So both terms share 3 and x!" },
  { key: 'story_3', style: 'statement', text: "Find the highest common factor of all the terms, write it outside the bracket, and put what is left inside. For 6 x plus 9, the common factor is 3, so 6 x plus 9 equals 3, times 2 x plus 3. Always check by expanding!" },
  { key: 'story_4', style: 'statement', text: "With four terms, group them in pairs and take out each pair's common factor. x y plus 3 x plus 2 y plus 6 becomes x times y plus 3, plus 2 times y plus 3. Now y plus 3 is common to both, so we get x plus 2, times y plus 3." },
  { key: 'story_5', style: 'celebration', text: "When one perfect square is taken away from another, the middle terms cancel when you expand. a minus b, times a plus b, equals a squared minus b squared. So x squared minus 49 equals x minus 7, times x plus 7, because 49 is 7 squared!" },
  { key: 'story_6', style: 'emphasis', text: "To factorise x squared plus b x plus c, find two numbers that multiply to c and add to b. For x squared plus 7 x plus 12, we need product 12 and sum 7. That's 3 and 4. So the answer is x plus 3, times x plus 4." },
  { key: 'story_7', style: 'encouragement', text: "Sometimes both numbers are the same. x squared plus 6 x plus 9 equals x plus 3, all squared. Signs matter too: a positive c means both numbers share a sign, and a negative c means they have opposite signs." },
  { key: 'story_8', style: 'celebration', text: "Awesome job! You now know four factorising methods and how to check them by expanding. Now step into the lab to build rectangles from tiles, choose the right method, and play factor detective!" },

  // Real-World Simulation Guidance (3 Stations × 3 Activities)
  { key: 'sim_1', style: 'instruction', text: "Station 1: Grid Builder. Use the width and height steppers to tile real-world solar arrays, basketball courts, and skylights into perfect rectangles!" },
  { key: 'sim_1_1', style: 'instruction', text: "Solar Panel Grid. Adjust the width and height to fit 1 main inverter panel, 5 line strips, and 6 micro-cells into a rectangle of area x squared plus 5 x plus 6 square meters." },
  { key: 'sim_1_2', style: 'instruction', text: "Basketball Court Tiling. Find the court dimensions for area x squared plus 7 x plus 12 square feet using 1 court tile, 7 boundary strips, and 12 corner tiles." },
  { key: 'sim_1_3', style: 'instruction', text: "Science Lab Skylight. Find the side lengths of a square glass skylight with total area x squared plus 6 x plus 9 square feet." },

  { key: 'sim_2', style: 'instruction', text: "Station 2: Factor Lab. Apply the 4 factorising methods to real-world bakery packing, park fountains, and freight grids!" },
  { key: 'sim_2_1', style: 'instruction', text: "Bakery Gift Packing. Find the Highest Common Factor of identical gift boxes Chef Leo can pack for 12 x rolls and 18 muffins." },
  { key: 'sim_2_2', style: 'instruction', text: "Park Fountain Lawn. Find the perimeter fence factors for a park lawn of area x squared minus 49 square meters using the difference of two squares." },
  { key: 'sim_2_3', style: 'instruction', text: "Freight Cargo Grid. Select the factor pair with product 12 crates and sum 7 markers to organize the storage grid." },

  { key: 'sim_3', style: 'instruction', text: "Station 3: Factor Detective. Solve engineering and farming case files by filling in missing factor values and verifying by expanding!" },
  { key: 'sim_3_1', style: 'instruction', text: "Bridge Suspension Cables Case. Divide 8 x squared plus 12 x kN of cable tension into 4 x main cable bundles." },
  { key: 'sim_3_2', style: 'instruction', text: "Fruit Orchard Case. Find the tree grid dimensions for 20 fruit trees planted in an area of x squared plus 9 x plus 20." },
  { key: 'sim_3_3', style: 'instruction', text: "Museum Hall Renovation Audit. Expand x plus 6 times x minus 4 to verify the contractor's net area polynomial." },

  // Reflection & Feedback Lines
  { key: 'reflect_1', style: 'thinking', text: "Great work completing the module! In your own words, explain what factorising means, and show one example using a method you learned." },
  { key: 'fb_correct_1', style: 'celebration', text: "Correct! Excellent factorising!" },
  { key: 'fb_correct_2', style: 'celebration', text: "Brilliant! You found the factors!" },
  { key: 'fb_wrong_1', style: 'encouragement', text: "Not quite! Check the explanation and try again." },
  { key: 'sim_win', style: 'celebration', text: "Awesome! You solved the simulation layout!" },
  { key: 'sim_try', style: 'encouragement', text: "Not quite. Check the hint and try again!" },
  { key: 'done_1', style: 'celebration', text: "Outstanding reflection! Lesson complete!" }
];

// Combine base phrases with all 100 questions and 100 hints
const phrases = [...basePhrases];

QUESTION_BANK.forEach(q => {
  phrases.push({
    key: `q_${q.id}`,
    style: 'question',
    text: `Question ${q.id}: ${q.spokenPrompt}`
  });
  phrases.push({
    key: `q_hint_${q.id}`,
    style: 'instruction',
    text: `Hint for Question ${q.id}: ${q.spokenHint}`
  });
});

function loadEnv() {
  const envPath = path.join(ROOT, '.env.local');
  const env = {};
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
  return env;
}

function writeMap() {
  const obj = {};
  for (const p of phrases) {
    obj[p.key] = { text: p.text, style: p.style, file: `/assets/audio/${p.key}.mp3` };
  }
  const body = `/* =========================================================================
   AUTO-GENERATED by scripts/generate_audio.js — do not edit by hand.
   Audio map containing all Wonder, Story, Simulation, and 100 Practice Questions/Hints
   ========================================================================= */
export const AUDIO_MAP = ${JSON.stringify(obj, null, 2)};
`;
  fs.writeFileSync(MAP_FILE, body);
  console.log(`Wrote ${MAP_FILE} (${phrases.length} entries)`);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const args = process.argv.slice(2);
  writeMap();
  if (args.includes('--map-only')) return;

  const key = loadEnv().VITE_ELEVENLABS_API_KEY || process.env.VITE_ELEVENLABS_API_KEY;
  if (!key) {
    console.error('Missing VITE_ELEVENLABS_API_KEY in .env.local');
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const force = args.includes('--force');

  console.log(`Starting audio generation for ${phrases.length} tracks using ElevenLabs (Voice: ${VOICE_ID})...`);

  let count = 0;
  for (const p of phrases) {
    const file = path.join(OUT_DIR, `${p.key}.mp3`);
    if (!force && fs.existsSync(file)) {
      console.log(`[SKIP] ${p.key}.mp3 already exists`);
      continue;
    }
    try {
      const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`, {
        method: 'POST',
        headers: {
          'xi-api-key': key,
          'Content-Type': 'application/json',
          Accept: 'audio/mpeg'
        },
        body: JSON.stringify({
          text: p.text,
          model_id: MODEL_ID,
          voice_settings: VOICE_SETTINGS[p.style] || VOICE_SETTINGS.statement
        })
      });

      if (!res.ok) {
        console.error(`[FAIL] ${p.key}: ${res.status} ${await res.text()}`);
        continue;
      }
      fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
      count++;
      console.log(`[SAVED (${count}/${phrases.length})] ${p.key}.mp3`);
    } catch (e) {
      console.error(`[ERROR] ${p.key}: ${e.message}`);
    }
    await sleep(350); // Rate limit protection
  }
  console.log(`Audio generation task finished! Processed ${count} new audio files.`);
}

main();
