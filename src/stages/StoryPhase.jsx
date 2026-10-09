import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, stopNarration } from '../audio.js';

const STORY_SLIDES = [
  {
    id: 1,
    title: "Multiplying & Un-Multiplying",
    audioKey: "story_1",
    image: "/assets/images/slide1.jpg",
    body: "Multiplying builds things: 3 × 4 gives 12. Algebra does it too: (x + 2)(x + 3) builds x² + 5x + 6. Factorising does the reverse — it un-multiplies an expression back into its factors!",
    quote: "Expand = multiply out.  Factorise = write as a product.",
    bubble: "Factorising is like finding the secret ingredients!"
  },
  {
    id: 2,
    title: "Terms & Factors",
    audioKey: "story_2",
    image: "/assets/images/slide2.jpg",
    body: "An expression is made of terms joined by + or − signs. In 6x² + 9x the terms are 6x² and 9x. A factor divides a term exactly: 6x² = 2 × 3 × x × x and 9x = 3 × 3 × x, so both terms share 3 and x!",
    quote: "Highest Common Factor (HCF) of 6x² and 9x = 3x",
    bubble: "Look for what every term shares!"
  },
  {
    id: 3,
    title: "Method 1: Take Out the Common Factor",
    audioKey: "story_3",
    image: "/assets/images/slide3.jpg",
    body: "Find the HCF of all the terms, write it outside the bracket, and put what is left inside. For 6x + 9 the HCF is 3, so 6x + 9 = 3(2x + 3). Always check by expanding: 3 × 2x + 3 × 3 = 6x + 9 ✓",
    quote: "Common factor first: 12x² + 18x = 6x(2x + 3)",
    bubble: "Pull out the biggest factor, then expand to check!"
  },
  {
    id: 4,
    title: "Method 2: Factorise by Grouping",
    audioKey: "story_4",
    image: "/assets/images/slide4.jpg",
    body: "With four terms, group them in pairs and take out each pair's common factor. xy + 3x + 2y + 6 becomes x(y + 3) + 2(y + 3). Now (y + 3) is common to both, so we get (x + 2)(y + 3).",
    quote: "x(y + 3) + 2(y + 3) = (x + 2)(y + 3)",
    bubble: "If the brackets match, you've grouped correctly!"
  },
  {
    id: 5,
    title: "Method 3: Difference of Two Squares",
    audioKey: "story_5",
    image: "/assets/images/slide5.jpg",
    body: "When one perfect square is subtracted from another, the middle terms cancel when you expand: (a − b)(a + b) = a² − b². So x² − 49 = (x − 7)(x + 7), because 49 is 7²!",
    quote: "a² − b² = (a − b)(a + b)",
    bubble: "Two squares with a minus sign between them — that's the clue!"
  },
  {
    id: 6,
    title: "Method 4: Sum & Product Trinomials",
    audioKey: "story_6",
    image: "/assets/images/slide6.jpg",
    body: "To factorise x² + bx + c, find two numbers that multiply to c and add to b. For x² + 7x + 12 we need product 12 and sum 7 — that's 3 and 4. So x² + 7x + 12 = (x + 3)(x + 4).",
    quote: "Product = c, Sum = b  →  (x + p)(x + q)",
    bubble: "Try factor pairs of c until the sum matches b!"
  },
  {
    id: 7,
    title: "Perfect Squares & Sign Rules",
    audioKey: "story_7",
    image: "/assets/images/slide7.jpg",
    body: "Sometimes both numbers are the same: x² + 6x + 9 = (x + 3)². Signs matter too — a positive c means both numbers share a sign, and a negative c means they have opposite signs.",
    quote: "a² ± 2ab + b² = (a ± b)²",
    bubble: "Same signs for +c, opposite signs for −c!"
  },
  {
    id: 8,
    title: "Step Into the Factor Lab!",
    audioKey: "story_8",
    image: "/assets/images/slide8.jpg",
    body: "Awesome job! You now know four factorising methods and how to check them by expanding. Now step into the lab to build rectangles from tiles, choose the right method, and play factor detective!",
    quote: "Ready to test your factorising skills?",
    bubble: "Click below to enter the interactive lab!"
  }
];

export function StoryPhase({ muted, onDone, onSlideChange }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = STORY_SLIDES[slideIdx];

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(slideIdx + 1, STORY_SLIDES.length);
    }
  }, [slideIdx, onSlideChange]);

  useEffect(() => {
    const audioData = AUDIO_MAP[slide.audioKey];
    if (audioData) {
      narrate(audioData, !muted);
    }
    return () => stopNarration();
  }, [slideIdx, muted]);

  const goNext = () => {
    if (slideIdx < STORY_SLIDES.length - 1) {
      setSlideIdx(i => i + 1);
    } else {
      onDone();
    }
  };

  const goPrev = () => {
    if (slideIdx > 0) setSlideIdx(i => i - 1);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Story Card with Maximum Grade 4 Visual Legibility & Scaled Image */}
      <div className="w-full max-w-5xl max-h-[92vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Left Column: Extra Large Image Illustration */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 h-80 sm:h-[420px] md:h-[450px] w-full bg-black/40 flex items-center justify-center shrink-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Column: Extra Large Typography & Callout Pills */}
        <div className="flex flex-col items-start text-left justify-center gap-4.5 overflow-y-auto max-h-full py-1">
          {/* Slide Title */}
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-amber-400 leading-tight drop-shadow-md">
            {slide.title}
          </h2>

          {/* Body Narrative */}
          <p className="text-slate-100 text-xl sm:text-2xl leading-relaxed font-extrabold drop-shadow-sm">
            {slide.body}
          </p>

          {/* Pull-Quote Sparkle Pill */}
          <div className="w-full bg-[#1e0e45] border-2 border-amber-400/60 rounded-2xl px-6 py-3.5 text-center text-amber-300 font-display font-900 text-lg sm:text-xl flex items-center justify-center gap-3 shadow-lg">
            <span className="shrink-0 text-2xl">✨</span>
            <span className="leading-snug">"{slide.quote}"</span>
            <span className="shrink-0 text-2xl">✨</span>
          </div>

          {/* Mascot Speech Bubble Pill */}
          <div className="flex items-center gap-4 w-full mt-1">
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-4xl shadow-lg shrink-0">
              🦁
            </div>
            <div className="bg-white text-[#0c031d] rounded-2xl px-7 py-3.5 font-display font-900 text-lg sm:text-xl shadow-xl flex-1 text-left leading-snug">
              {slide.bubble}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Row: Back, Dots, Next */}
      <div className="w-full max-w-4xl flex items-center justify-between mt-3 z-20 shrink-0">
        <button
          onClick={goPrev}
          disabled={slideIdx === 0}
          className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/30 text-white font-display font-900 text-xl sm:text-2xl px-10 py-4 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-xl hover:scale-105"
        >
          ← Back
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-3.5">
          {STORY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIdx(i)}
              className={`rounded-full transition-all cursor-pointer ${
                i === slideIdx
                  ? 'w-4.5 h-4.5 bg-amber-400 shadow-[0_0_18px_rgba(250,204,21,0.9)]'
                  : 'w-3.5 h-3.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="btn-gold text-xl sm:text-2xl px-11 py-4 font-900 flex items-center gap-2 shadow-[0_0_35px_rgba(250,204,21,0.85)] hover:scale-105"
        >
          <span>{slideIdx === STORY_SLIDES.length - 1 ? 'Enter Lab 🧪' : 'Next'}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
