import React, { useState, useEffect, useRef } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, playFeedback } from '../audio.js';
import { poly } from '../mathData.js';

/* =========================================================================
   REAL-WORLD INSPIRED SIMULATION STATIONS (Grade 7/8 Math Level)
   Aligned with the Story Phase & Leo/Zara's Math Adventures
   ========================================================================= */

const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: School Roof Solar Panel Array",
      realWorldTag: "☀️ SOLAR POWER GRID",
      desc: "Solar Engineer Leo is building a rooftop solar array of area x² + 5x + 6 m². It uses 1 master inverter tile (x²), 5 connecting line strips (x), and 6 micro-solar cells (units). Adjust the array's width and height so all panels fit into a rectangular grid!",
      c1: 5, c0: 6, icon: "☀️", type: "tiles",
      unitName: "meters",
      hint: "Find two dimensions that add to 5 line strips and multiply to 6 micro-cells."
    },
    {
      id: 2,
      title: "Activity 2: Basketball Court Floor Tiles",
      realWorldTag: "🏀 SPORTS FACILITY TILING",
      desc: "Builder Zara is tiling a school basketball court of total area x² + 7x + 12 ft². Using 1 center court tile (x²), 7 boundary strips (x), and 12 corner tiles, find the court's length and width!",
      c1: 7, c0: 12, icon: "🏀", type: "tiles",
      unitName: "feet",
      hint: "Strips = sum (a + b) and corner tiles = product (a × b). Try factor pairs of 12!"
    },
    {
      id: 3,
      title: "Activity 3: Science Lab Square Skylight",
      realWorldTag: "🏛️ ARCHITECTURAL DESIGN",
      desc: "Architect Leo is designing a glass skylight with area x² + 6x + 9 sq ft. Because it is a perfect square skylight, both the width and height must be equal! Find its side length.",
      c1: 6, c0: 9, icon: "🪟", type: "tiles",
      unitName: "feet",
      hint: "When width = height, a = b. What number adds to itself to make 6?"
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Bakery Gift Box Packing (Common Factor HCF)",
      realWorldTag: "🧁 BAKERY LOGISTICS",
      desc: "Chef Leo baked 12x chocolate rolls and 18 vanilla muffins (expression: 12x + 18). Tap a factor to find the Highest Common Factor (HCF) of identical gift boxes he can pack!",
      terms: [{ c: 12, e: 1 }, { c: 18, e: 0 }],
      choices: [{ l: "2 boxes", c: 2, e: 0 }, { l: "3 boxes", c: 3, e: 0 }, { l: "6 boxes (HCF)", c: 6, e: 0 }, { l: "4 boxes", c: 4, e: 0 }],
      icon: "🧁", type: "hcf",
      contextNote: "Find the maximum identical gift boxes (HCF) so no cakes are left over!"
    },
    {
      id: 2,
      title: "Activity 2: Park Fountain Lawn Border (Difference of Two Squares)",
      realWorldTag: "🏞️ TOWN PARK DESIGN",
      desc: "Park Director Zara has a square park of side x (area x² m²) with a central square fountain of side 7 (area 49 m²). The lawn area is x² − 49. Adjust p and q in (px − q)(px + q) to calculate the perimeter fence lengths where middle terms cancel!",
      P: 1, Q: 7, icon: "🏞️", type: "dots",
      contextNote: "Difference of two squares formula: a² − b² = (a − b)(a + b)"
    },
    {
      id: 3,
      title: "Activity 3: Cargo Container Storage Grid (Sum & Product)",
      realWorldTag: "📦 FREIGHT TERMINAL GRID",
      desc: "Logistics Manager Leo is arranging a cargo grid of area x² + 7x + 12. Tap the factor pair whose product equals 12 storage crates and whose sum equals 7 boundary markers!",
      b: 7, c: 12, icon: "📦", type: "sumprod",
      contextNote: "Product = 12, Sum = 7 → (x + p)(x + q)"
    }
  ],
  3: [
    {
      id: 1,
      title: "Activity 1: Bridge Suspension Cables (Common Factor Gap)",
      realWorldTag: "🌉 CIVIL ENGINEERING DETECTIVE",
      desc: "Case File #1: Structural Inspector Zara must divide 8x² + 12x kN of cable tension into 4x equal main cable bundles: 8x² + 12x = 4x( ___ x + ___ ). Divide each term by 4x to solve the missing numbers!",
      expr: "8x² + 12x", method: "Common Factor (HCF)",
      parts: ["4x (", 0, "x +", 1, ")"], answers: [2, 3], swap: false,
      hint: "Divide 8x² by 4x = ?  and divide 12x by 4x = ?",
      proof: "Check by expanding: 4x × 2x = 8x² and 4x × 3 = 12x ✓ Each bundle carries (2x + 3) kN!",
      icon: "🌉", type: "gaps"
    },
    {
      id: 2,
      title: "Activity 2: Fruit Orchard Tree Layout (Sum & Product Gap)",
      realWorldTag: "🌳 BOTANICAL FARM DETECTIVE",
      desc: "Case File #2: Farmer Leo planted 20 fruit trees in a rectangular plot of area x² + 9x + 20: (x + ___ )(x + ___ ). Find two numbers with product 20 and sum 9!",
      expr: "x² + 9x + 20", method: "Sum & Product Trinomial",
      parts: ["( x +", 0, ")( x +", 1, ")"], answers: [4, 5], swap: true,
      hint: "Factor pairs of 20: 1×20, 2×10, 4×5. Which pair adds to 9?",
      proof: "Check: 4 + 5 = 9 and 4 × 5 = 20 ✓ The orchard grid is (x + 4) by (x + 5) rows!",
      icon: "🌳", type: "gaps"
    },
    {
      id: 3,
      title: "Activity 3: Museum Hall Renovation Check (Verify by Expanding)",
      realWorldTag: "🏛️ CONSTRUCTION AUDIT DETECTIVE",
      desc: "Case File #3: Inspector Zara is auditing a museum room expansion: (x + 6)(x − 4) = x² + ___ x − ___ . Expand to verify the contractor's net area polynomial!",
      expr: "(x + 6)(x − 4)", method: "Expand to Verify",
      parts: ["x² +", 0, "x −", 1], answers: [2, 24], swap: false,
      hint: "Middle term coefficient: 6 + (−4) = 2. Last term: 6 × 4 = 24.",
      proof: "Check: x² + 6x − 4x − 24 = x² + 2x − 24 ✓ Contractor estimate verified!",
      icon: "🔬", type: "gaps"
    }
  ]
};

const STATIONS = [
  { n: 1, icon: "📐", title: "Station 1: Real-World Grid Builder", sub: "Design plots, courts & panels" },
  { n: 2, icon: "🧪", title: "Station 2: Factor Lab", sub: "Apply the 4 story methods" },
  { n: 3, icon: "🕵️", title: "Station 3: Factor Detective", sub: "Solve case files & verify" }
];

const SIM_BOX = "[&>*]:shrink-0 flex flex-col items-center gap-3.5 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-4 sm:p-5 shadow-xl flex-1 min-h-0 justify-between overflow-y-auto";
const GOLD_BANNER = "w-full bg-cyan-950/90 border-2 border-cyan-400/60 p-3 rounded-2xl flex flex-col items-center fade-in-up shadow-xl shrink-0";
const GOLD_PILL = "w-full min-h-10 px-4 py-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full flex items-center justify-center font-display font-900 text-slate-950 text-base sm:text-lg shadow-lg text-center leading-snug";

const win = muted => { if (!muted) playFeedback(AUDIO_MAP.sim_win); };
const tryAgain = muted => { if (!muted) playFeedback(AUDIO_MAP.sim_try); };

const polyMono = (c, e) => poly([[c, e === 0 ? '' : e === 1 ? 'x' : 'x²']]);
const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

function Stepper({ label, value, onChange, min = 1, max = 9 }) {
  return (
    <div className="flex items-center gap-2 bg-[#14082c] px-3.5 py-2 rounded-xl border border-cyan-400/40 shadow-md">
      <span className="text-xs sm:text-sm font-extrabold text-slate-200">{label}</span>
      <button onClick={() => onChange(Math.max(min, value - 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/25 text-white font-black text-lg cursor-pointer transition flex items-center justify-center">−</button>
      <span className="min-w-[2.4rem] text-center text-sm sm:text-base font-black text-amber-300 bg-amber-400/15 px-2.5 py-1 rounded-lg border border-amber-400/40">{value}</span>
      <button onClick={() => onChange(Math.min(max, value + 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/25 text-white font-black text-lg cursor-pointer transition flex items-center justify-center">+</button>
    </div>
  );
}

/* ---------------- STATION 1: REAL-WORLD GRID TILE BUILDER ---------------- */
function TileBuilder({ act, muted }) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const X = 78, U = 13, ox = 26, oy = 26;
  const strips = a + b, units = a * b;
  const fit = strips === act.c1 && units === act.c0;
  const announced = useRef(false);

  useEffect(() => {
    if (fit && !announced.current) { announced.current = true; win(muted); }
    if (!fit) announced.current = false;
  }, [fit]);

  let status = "Adjust width & height so every tile fits into the grid layout.";
  if (!fit) {
    if (units !== act.c0) status = units > act.c0 ? `Too many micro unit tiles (${units} > ${act.c0}).` : `Need more micro unit tiles (${units} < ${act.c0}).`;
    else status = strips > act.c1 ? `Too many x-strips (${strips} > ${act.c1}).` : `Need more x-strips (${strips} < ${act.c1}).`;
  }

  const Row = ({ color, name, used, need }) => (
    <p className="flex items-center gap-2">
      <span className="inline-block w-4 h-4 rounded-md shadow-sm" style={{ background: color }} />
      <span>{name}:</span>
      <span className={`font-900 ${used === need ? 'text-emerald-300' : 'text-rose-300'}`}>{used} / {need} {used === need ? '✓' : ''}</span>
    </p>
  );

  return (
    <div className={SIM_BOX}>
      <div className="w-full flex items-center justify-between bg-cyan-950/80 border border-cyan-400/30 px-4 py-2 rounded-xl text-xs sm:text-sm font-900 text-cyan-200 shrink-0">
        <span>{act.realWorldTag}</span>
        <span>Target Area: x² + {act.c1}x + {act.c0} sq {act.unitName}</span>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
        <Stepper label="Width = (x +" value={a} onChange={setA} />
        <Stepper label="Height = (x +" value={b} onChange={setB} />
      </div>

      <div className="flex items-center justify-center gap-7 w-full flex-none py-1">
        <svg viewBox="0 0 250 250" style={{ height: "clamp(130px, 26vh, 220px)", width: "auto" }} className="drop-shadow-[0_0_24px_rgba(56,189,248,0.65)] shrink-0">
          <rect x={ox} y={oy} width={X} height={X} fill="#7c3aed" stroke="#ddd6fe" strokeWidth="2.5" />
          <text x={ox + X / 2} y={oy + X / 2} fill="#fff" fontSize="22" fontWeight="900" textAnchor="middle" dominantBaseline="middle">x²</text>
          {Array.from({ length: a }).map((_, i) => (
            <rect key={`v${i}`} x={ox + X + i * U} y={oy} width={U} height={X} fill="#0ea5e9" stroke="#e0f2fe" strokeWidth="1.5" />
          ))}
          {Array.from({ length: b }).map((_, j) => (
            <rect key={`h${j}`} x={ox} y={oy + X + j * U} width={X} height={U} fill="#0ea5e9" stroke="#e0f2fe" strokeWidth="1.5" />
          ))}
          {Array.from({ length: a }).map((_, i) =>
            Array.from({ length: b }).map((__, j) => (
              <rect key={`u${i}-${j}`} x={ox + X + i * U} y={oy + X + j * U} width={U} height={U} fill="#facc15" stroke="#78350f" strokeWidth="1.2" />
            ))
          )}
          <text x={ox + X / 2} y={oy - 9} fill="#facc15" fontSize="14" fontWeight="900" textAnchor="middle">x</text>
          <text x={ox + X + (a * U) / 2} y={oy - 9} fill="#fb7185" fontSize="14" fontWeight="900" textAnchor="middle">+{a}</text>
          <text x={ox - 12} y={oy + X / 2 + 5} fill="#facc15" fontSize="14" fontWeight="900" textAnchor="middle">x</text>
          <text x={ox - 12} y={oy + X + (b * U) / 2 + 5} fill="#fb7185" fontSize="14" fontWeight="900" textAnchor="middle">+{b}</text>
        </svg>

        <div className="flex flex-col gap-2 text-left text-sm sm:text-base font-extrabold text-slate-100 shrink-0 bg-[#13082b]/80 border border-purple-400/30 p-4 rounded-2xl">
          <p className="text-cyan-300 text-xs font-900 uppercase tracking-wider">Tiles used / required</p>
          <Row color="#7c3aed" name="x² Main Tile" used={1} need={1} />
          <Row color="#0ea5e9" name="x Line Strips" used={strips} need={act.c1} />
          <Row color="#facc15" name="Micro Units" used={units} need={act.c0} />
          <div className="pt-1 border-t border-white/10 text-xs text-amber-300 font-bold">
            Current Dimensions: (x + {a}) {act.unitName} × (x + {b}) {act.unitName}
          </div>
        </div>
      </div>

      {fit ? (
        <div className={GOLD_BANNER}>
          <span className="text-xs text-cyan-300 font-900 mb-1 uppercase tracking-wider">🎉 Perfect Layout! Real-World Dimensions Found:</span>
          <div className={GOLD_PILL}>
            x² + {act.c1}x + {act.c0} = (x + {a})(x + {b}){a === b ? ` = (x + ${a})²` : ''} {act.unitName}
          </div>
        </div>
      ) : (
        <div className="w-full p-3 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold text-center shrink-0">
          🧱 {status} <span className="text-amber-300">💡 {act.hint}</span>
        </div>
      )}
    </div>
  );
}

/* ---------------- STATION 2A: BAKERY HCF PACKING LAB ---------------- */
function HcfLab({ act, muted }) {
  const [sel, setSel] = useState(null);
  const expr = poly(act.terms.map(t => [t.c, t.e === 0 ? '' : t.e === 1 ? 'x' : 'x²']));
  let result = null;

  if (sel != null) {
    const ch = act.choices[sel];
    const valid = act.terms.every(t => t.c % ch.c === 0 && t.e >= ch.e);
    if (!valid) {
      result = { kind: 'invalid', text: `${ch.l} does not divide both terms evenly. Choose another factor!` };
    } else {
      const rem = act.terms.map(t => ({ c: t.c / ch.c, e: t.e - ch.e }));
      const inside = poly(rem.map(t => [t.c, t.e === 0 ? '' : t.e === 1 ? 'x' : 'x²']));
      const g = rem.reduce((acc, t) => gcd(acc, t.c), 0);
      const me = Math.min(...rem.map(t => t.e));
      const full = g === 1 && me === 0;
      const left = `${g > 1 ? g : ''}${me > 0 ? 'x' : ''}`;
      result = { kind: full ? 'full' : 'partial', inside, full, left, label: ch.l, boxCount: ch.c, remCakes: rem[0].c, remMuffins: rem[1].c };
    }
  }

  useEffect(() => {
    if (!result) return;
    if (result.kind === 'full') win(muted); else tryAgain(muted);
  }, [sel]);

  return (
    <div className={SIM_BOX}>
      <div className="w-full flex items-center justify-between bg-purple-950/80 border border-purple-400/30 px-4 py-2 rounded-xl text-xs sm:text-sm font-900 text-purple-200 shrink-0">
        <span>{act.realWorldTag}</span>
        <span>{act.contextNote}</span>
      </div>

      <div className="flex flex-col items-center gap-3 w-full flex-none justify-center">
        <div className="flex items-center gap-3 bg-[#14082c] border-2 border-purple-400/50 rounded-2xl px-6 py-3 shadow-lg">
          <span className="text-4xl">{act.icon}</span>
          <span className="font-display font-900 text-2xl sm:text-4xl text-amber-300">{expr}</span>
        </div>
        <p className="text-xs sm:text-sm font-extrabold text-slate-200">How many identical boxes can Chef Leo pack?</p>
        
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {act.choices.map((ch, i) => (
            <button
              key={i}
              onClick={() => setSel(i)}
              className={`px-5 py-3 rounded-2xl font-display font-900 text-base sm:text-lg transition cursor-pointer border-2 shadow-md ${
                sel === i ? 'bg-amber-400 text-slate-950 border-amber-200 scale-105 shadow-xl' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
            >
              {ch.l}
            </button>
          ))}
        </div>

        {result && result.kind !== 'invalid' && (
          <div className="w-full bg-[#14082c]/90 border-2 border-amber-400/40 p-3.5 rounded-2xl text-left text-xs sm:text-sm text-slate-100 flex flex-col gap-2 shadow-md">
            <p className="text-amber-300 font-sans font-900 text-sm">Real-World Packing Breakdown:</p>
            <p>• Number of identical boxes = <span className="text-cyan-300 font-bold">{result.boxCount}</span></p>
            <p>• Contents per box = <span className="text-cyan-300 font-bold">{result.remCakes}x chocolate rolls + {result.remMuffins} vanilla muffins</span></p>
            <div className="bg-amber-400/20 border-2 border-amber-400/60 p-2.5 rounded-xl text-amber-300 font-900 text-sm sm:text-lg text-center">
              Factorised: {expr} = {result.boxCount}({result.inside})
            </div>
          </div>
        )}
      </div>

      {result && (
        <div className={`p-3 rounded-2xl text-xs sm:text-sm font-900 w-full text-center shadow-xl shrink-0 ${
          result.kind === 'full' ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
        }`}>
          {result.kind === 'full' && `🎉 Fully Factorised! ${result.boxCount} is the Highest Common Factor (HCF). Every box gets exactly (${result.inside}) items with zero leftovers!`}
          {result.kind === 'partial' && `Not the HCF! The items inside (${result.inside}) still share a common factor of ${result.left}. Pull out a bigger number of boxes!`}
          {result.kind === 'invalid' && result.text}
        </div>
      )}
    </div>
  );
}

/* ---------------- STATION 2B: PARK FOUNTAIN DIFFERENCE OF TWO SQUARES ---------------- */
function DotsLab({ act, muted }) {
  const [p, setP] = useState(1);
  const [q, setQ] = useState(2);
  const px = p === 1 ? 'x' : `${p}x`;
  const target = poly([[act.P * act.P, 'x²'], [-act.Q * act.Q, '']]);
  const result = poly([[p * p, 'x²'], [-q * q, '']]);
  const ok = p === act.P && q === act.Q;
  const announced = useRef(false);

  useEffect(() => {
    if (ok && !announced.current) { announced.current = true; win(muted); }
    if (!ok) announced.current = false;
  }, [ok]);

  return (
    <div className={SIM_BOX}>
      <div className="w-full flex items-center justify-between bg-cyan-950/80 border border-cyan-400/30 px-4 py-2 rounded-xl text-xs sm:text-sm font-900 text-cyan-200 shrink-0">
        <span>{act.realWorldTag}</span>
        <span>{act.contextNote}</span>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
        <Stepper label="p =" value={p} onChange={setP} max={8} />
        <Stepper label="q =" value={q} onChange={setQ} max={12} />
        <span className="font-display font-900 text-base sm:text-lg text-amber-300">Target Lawn: {target} m²</span>
      </div>

      <div className="flex items-center justify-center gap-4 w-full flex-none">
        <div className="bg-purple-900/60 border-2 border-purple-300/60 rounded-2xl px-5 py-3.5 font-display font-900 text-xl sm:text-2xl text-white">({px} − {q})</div>
        <span className="text-3xl sm:text-4xl">🪞</span>
        <div className="bg-cyan-900/60 border-2 border-cyan-300/60 rounded-2xl px-5 py-3.5 font-display font-900 text-xl sm:text-2xl text-white">({px} + {q})</div>
      </div>

      <div className="w-full bg-[#14082c]/90 border-2 border-amber-400/40 p-3 rounded-2xl text-left text-xs sm:text-sm text-slate-100 flex flex-col gap-1 shrink-0 font-mono">
        <p className="text-amber-300 font-sans font-900 text-xs sm:text-sm">Real-World Expansion Verification:</p>
        <p>1. Outer Lawn + Inner Lawn: <span className="text-emerald-300 font-bold">+{p * q}x</span> and <span className="text-rose-300 font-bold">−{p * q}x</span> → <span className="text-amber-300 font-bold">0 (middle terms cancel! ✨)</span></p>
        <p>2. Fountain Area Subtracted: (−{q}) × ({q}) = <span className="text-cyan-300 font-bold">−{q * q} m²</span></p>
        <div className="bg-amber-400/20 border-2 border-amber-400/60 p-2 rounded-xl text-amber-300 font-900 text-sm sm:text-base text-center font-sans">
          ({px} − {q})({px} + {q}) = {result}
        </div>
      </div>

      {ok ? (
        <div className="p-3 rounded-2xl text-xs sm:text-sm font-900 w-full text-center bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60 shrink-0">
          🎉 Match! Fountain Lawn Area {target} = ({px} − {q})({px} + {q}) meters! The middle terms cancelled perfectly!
        </div>
      ) : (
        <div className="p-3 rounded-2xl text-xs sm:text-sm font-bold w-full text-center bg-amber-950/90 text-amber-200 border border-amber-400/50 shrink-0">
          💡 Need p² = {act.P * act.P} and q² = {act.Q * act.Q} (since fountain side is 7, q² = 49). Your current values: p² = {p * p}, q² = {q * q}.
        </div>
      )}
    </div>
  );
}

/* ---------------- STATION 2C: FREIGHT CARGO SUM & PRODUCT ---------------- */
function pairsFor(c) {
  const out = [];
  for (let m = 1; m <= Math.abs(c); m++) {
    if (Math.abs(c) % m !== 0) continue;
    const n = c / m;
    if (c > 0 && m > n) continue;
    if (c < 0 && m > Math.abs(n)) continue;
    out.push([m, n], [-m, -n]);
  }
  return out;
}
const sgn = n => (n < 0 ? `− ${Math.abs(n)}` : `+ ${n}`);
const fmtM = n => (n < 0 ? `−${Math.abs(n)}` : n);

function SumProdLab({ act, muted }) {
  const [sel, setSel] = useState(null);
  const pairs = pairsFor(act.c);
  const expr = poly([[1, 'x²'], [act.b, 'x'], [act.c, '']]);
  const chosen = sel != null ? pairs[sel] : null;
  const ok = chosen && chosen[0] + chosen[1] === act.b;

  useEffect(() => {
    if (!chosen) return;
    if (ok) win(muted); else tryAgain(muted);
  }, [sel]);

  return (
    <div className={SIM_BOX}>
      <div className="w-full flex items-center justify-between bg-amber-950/80 border border-amber-400/30 px-4 py-2 rounded-xl text-xs sm:text-sm font-900 text-amber-200 shrink-0">
        <span>{act.realWorldTag}</span>
        <span>{act.contextNote}</span>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
        <span className="font-display font-900 text-xl sm:text-2xl text-amber-300">{expr}</span>
        <span className="bg-cyan-400/15 border border-cyan-400/40 text-cyan-200 font-900 text-xs sm:text-sm px-3 py-1 rounded-full">Product (c) = {fmtM(act.c)}</span>
        <span className="bg-amber-400/15 border border-amber-400/40 text-amber-200 font-900 text-xs sm:text-sm px-3 py-1 rounded-full">Sum (b) = {fmtM(act.b)}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full flex-none content-center">
        {pairs.map(([m, n], i) => {
          const s = m + n;
          const active = sel === i;
          return (
            <button
              key={i}
              onClick={() => setSel(i)}
              className={`rounded-2xl border-2 px-3 py-2.5 text-center cursor-pointer transition font-display font-900 ${
                active ? (s === act.b ? 'bg-emerald-600/80 border-emerald-300 scale-105' : 'bg-rose-700/70 border-rose-300') : 'bg-[#14082c] border-purple-400/40 hover:border-cyan-400'
              }`}
            >
              <span className="block text-base sm:text-lg text-white">{fmtM(m)} × {fmtM(n)}</span>
              <span className={`block text-xs ${active ? 'text-white' : 'text-slate-300'}`}>{active ? `Sum = ${fmtM(s)}` : 'Test Sum'}</span>
            </button>
          );
        })}
      </div>

      {chosen && (
        <div className={`p-3 rounded-2xl text-xs sm:text-sm font-900 w-full text-center shadow-xl shrink-0 ${
          ok ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
        }`}>
          {ok
            ? `🎉 Matched! ${fmtM(chosen[0])} + ${fmtM(chosen[1])} = ${fmtM(act.b)} ✓  Grid Dimensions: (x ${sgn(chosen[0])})(x ${sgn(chosen[1])})`
            : `Product is ${act.c}, but sum is ${fmtM(chosen[0] + chosen[1])}. We need sum = ${fmtM(act.b)}. Try another pair!`}
        </div>
      )}
    </div>
  );
}

/* ---------------- STATION 3: REAL-WORLD FACTOR DETECTIVE ---------------- */
function Detective({ act, muted }) {
  const nBlanks = act.answers.length;
  const [vals, setVals] = useState(Array(nBlanks).fill(''));
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const check = () => {
    const nums = vals.map(v => (v === '' ? NaN : Number(v)));
    const direct = nums.every((n, i) => n === act.answers[i]);
    const swapped = act.swap && nums.every((n, i) => n === act.answers[nBlanks - 1 - i]);
    if (direct || swapped) {
      setFeedback({ success: true, text: `🎉 ${act.proof}` });
      win(muted);
    } else {
      setFeedback({ success: false, text: "Not quite correct! Review the steps or tap 💡 Hint for guidance." });
      tryAgain(muted);
    }
  };

  return (
    <div className={SIM_BOX}>
      <div className="w-full flex items-center justify-between bg-indigo-950/80 border border-indigo-400/30 px-4 py-2 rounded-xl text-xs sm:text-sm font-900 text-indigo-200 shrink-0">
        <span>{act.realWorldTag}</span>
        <span>Case File #{act.id}</span>
      </div>

      <div className="flex items-center justify-center gap-6 w-full flex-none">
        <div className="w-24 h-24 rounded-2xl bg-[#14082c] border-2 border-purple-400/50 flex flex-col items-center justify-center shadow-lg shrink-0">
          <span className="text-4xl">{act.icon}</span>
          <span className="text-[10px] font-black text-amber-300 uppercase mt-1">Grade 7 Case</span>
        </div>
        <div className="text-left text-xs sm:text-sm font-extrabold text-slate-100 flex flex-col gap-1.5 shrink-0 bg-[#13082b]/80 border border-purple-400/30 p-3.5 rounded-2xl flex-1">
          <p>• Expression: <span className="text-amber-300 font-900 text-base">{act.expr}</span></p>
          <p>• Story Method: <span className="text-cyan-300 font-900">{act.method}</span></p>
          <p>• Task: <span className="text-white font-900">Fill in the missing integer values</span></p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 flex-wrap w-full shrink-0 font-display font-900 text-2xl sm:text-3xl text-white bg-[#14082c] p-4 rounded-2xl border border-cyan-400/30">
        {act.parts.map((part, i) =>
          typeof part === 'number' ? (
            <input
              key={i}
              type="number"
              value={vals[part]}
              onChange={e => { const nv = [...vals]; nv[part] = e.target.value; setVals(nv); setFeedback(null); }}
              className="bg-[#1e1342] border-2 border-amber-400 rounded-xl w-20 py-2 text-amber-300 font-display font-900 text-2xl text-center outline-none focus:ring-4 focus:ring-amber-400/30 shadow-inner"
              placeholder="?"
            />
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </div>

      <div className="flex items-center gap-3.5 w-full justify-center shrink-0">
        <button onClick={check} className="btn-gold text-sm sm:text-base font-900 px-7 py-3 shadow-lg hover:scale-105 transition cursor-pointer">
          Verify Solution ✨
        </button>
        <button
          onClick={() => setShowHint(h => !h)}
          className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-900 text-xs sm:text-sm px-4 py-3 rounded-xl transition cursor-pointer"
        >
          💡 Hint
        </button>
      </div>

      {showHint && (
        <div className="p-3 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shrink-0">
          💡 {act.hint}
        </div>
      )}

      {feedback && (
        <div className={`p-3 rounded-2xl text-xs sm:text-sm font-900 w-full text-center shadow-xl shrink-0 ${
          feedback.success ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
        }`}>
          {feedback.text}
        </div>
      )}
    </div>
  );
}

/* ---------------- MAIN SIMULATE PHASE COMPONENT ---------------- */
export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);
  const currentActivity = STATION_ACTIVITIES[station][actIdx];

  useEffect(() => {
    const key = `sim_${station}`;
    if (AUDIO_MAP[key]) narrate(AUDIO_MAP[key], !muted);
  }, [station, muted]);

  const nextActivity = () => {
    if (actIdx < 2) setActIdx(i => i + 1);
    else if (station < 3) { setStation(s => s + 1); setActIdx(0); }
    else onNext();
  };

  const prevActivity = () => {
    if (actIdx > 0) setActIdx(i => i - 1);
    else if (station > 1) { setStation(s => s - 1); setActIdx(2); }
  };

  const renderActivity = () => {
    const k = `${station}-${actIdx}`;
    switch (currentActivity.type) {
      case 'tiles': return <TileBuilder key={k} act={currentActivity} muted={muted} />;
      case 'hcf': return <HcfLab key={k} act={currentActivity} muted={muted} />;
      case 'dots': return <DotsLab key={k} act={currentActivity} muted={muted} />;
      case 'sumprod': return <SumProdLab key={k} act={currentActivity} muted={muted} />;
      default: return <Detective key={k} act={currentActivity} muted={muted} />;
    }
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Accent Bar */}
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Real-World Simulation Stations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              {STATIONS.map(st => (
                <button
                  key={st.n}
                  onClick={() => { setStation(st.n); setActIdx(0); }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === st.n
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${
                      station === st.n ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {st.icon}
                    </div>
                    <div>
                      <p className="font-display font-900 text-base sm:text-lg leading-tight">{st.title}</p>
                      <p className="text-xs font-extrabold text-slate-300 mt-0.5">{st.sub}</p>
                    </div>
                  </div>
                  <span className="text-base">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={onNext}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0 gap-3">
                <h3 className="font-display font-900 text-xl sm:text-2xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15 shrink-0">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description */}
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-extrabold mb-3 shrink-0">
                {currentActivity.desc}
              </p>

              {renderActivity()}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-4 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Previous Activity
              </button>
              <button
                onClick={nextActivity}
                className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
