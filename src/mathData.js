/* =========================================================================
   MATH DATA & PROCEDURAL QUESTION GENERATOR
   Procedurally generates unbounded non-repeating Grade 8 factorisation questions
   Every option carries its expanded coefficients so distractors are verified
   to be mathematically different from the correct answer.
   ========================================================================= */

export const WESTERN_NAMES = [
  "Leo", "Emma", "Alex", "Oliver", "Sophia", "Jack", "Maya", "Lucas",
  "Ethan", "Chloe", "Noah", "Liam", "Harper", "Ava", "Mason", "Ella",
  "James", "Mia", "Logan", "Charlotte"
];

export const PRACTICE_WORLDS = [
  { id: 0, name: "Tile Town", icon: "🧱", range: "Q1–10", arch: ['hcfNum'] },
  { id: 1, name: "Bracket Bakery", icon: "🥖", range: "Q11–20", arch: ['hcfNum', 'hcfVar'] },
  { id: 2, name: "Expand Express", icon: "🚂", range: "Q21–30", arch: ['expand', 'hcfVar'] },
  { id: 3, name: "Pair Palace", icon: "🏰", range: "Q31–40", arch: ['trinomPos'] },
  { id: 4, name: "Mirror Mountain", icon: "🪞", range: "Q41–50", arch: ['dots'] },
  { id: 5, name: "Grouping Galaxy", icon: "🌌", range: "Q51–60", arch: ['group'] },
  { id: 6, name: "Negative Nest", icon: "🕸️", range: "Q61–70", arch: ['trinomNeg'] },
  { id: 7, name: "Square Plaza", icon: "🟦", range: "Q71–80", arch: ['perfect'] },
  { id: 8, name: "Factor Canyon", icon: "🏜️", range: "Q81–90", arch: ['dotsCoef', 'dotsHcf'] },
  { id: 9, name: "Factor Citadel", icon: "👑", range: "Q91–100", arch: ['dotsHcf', 'quad', 'trinomNeg', 'hcfVar', 'group', 'perfect'] }
];

/* ---------- helpers ---------- */
const MINUS = '−';
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randSign = (pNeg = 0.5) => (Math.random() < pNeg ? -1 : 1);
const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));
const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/** poly([[coef, 'x²'], [coef, 'x'], [coef, '']]) -> "2x² − 3x + 5" */
export function poly(terms) {
  let out = '';
  terms.forEach(([c, v]) => {
    if (c === 0) return;
    const abs = Math.abs(c);
    const body = v === '' ? String(abs) : (abs === 1 ? v : `${abs}${v}`);
    if (out === '') out = (c < 0 ? MINUS : '') + body;
    else out += (c < 0 ? ` ${MINUS} ` : ' + ') + body;
  });
  return out || '0';
}
const bin = (a, b, v = 'x') => poly([[a, v], [b, '']]);
const quadStr = (A, B, C) => poly([[A, 'x²'], [B, 'x'], [C, '']]);
const fmtN = n => (n < 0 ? `${MINUS}${Math.abs(n)}` : String(n));

const prod = (p, q, r, s) => [p * r, p * s + q * r, q * s];

const opt = (label, co, partial = false) => ({ label, co, partial });
const facG = (p, q, r, s) => opt(`(${bin(p, q)})(${bin(r, s)})`, prod(p, q, r, s));
const fac = (p, q) => facG(1, p, 1, q);
const sameCo = (a, b) => a && b && a.length === b.length && a.every((v, i) => v === b[i]);

function finish({ name, prompt, rule, correct, wrongs, explanation, diagramData }) {
  const seen = new Set([correct.label]);
  const picked = [];
  for (const w of wrongs) {
    if (!w || seen.has(w.label)) continue;
    if (!w.partial && sameCo(w.co, correct.co)) continue;
    seen.add(w.label);
    picked.push(w);
    if (picked.length === 3) break;
  }
  if (picked.length < 3) return null;
  const all = shuffle([correct, ...picked]);
  return {
    name,
    prompt,
    rule,
    options: all.map(o => o.label),
    correctIndex: all.indexOf(correct),
    explanation,
    diagramData
  };
}

/* ---------- archetypes ---------- */
const RULES = {
  hcf: 'COMMON FACTOR RULE',
  expand: 'EXPAND & CHECK RULE',
  trinom: 'SUM & PRODUCT RULE',
  dots: 'a² − b² RULE',
  group: 'GROUPING RULE',
  perfect: 'PERFECT SQUARE RULE',
  quad: 'CROSS-CHECK RULE'
};

function genHcfNum(name) {
  for (let t = 0; t < 40; t++) {
    const k = randInt(2, 9), a = randInt(1, 5), b = randInt(1, 7) * randSign(0.3);
    if (gcd(a, Math.abs(b)) !== 1) continue;
    const lin = (kk, aa, bb) => opt(kk === 1 ? `(${bin(aa, bb)})` : `${kk}(${bin(aa, bb)})`, [0, kk * aa, kk * bb]);
    const expr = bin(k * a, k * b);
    const correct = lin(k, a, b);
    const wrongs = [lin(k, a, -b), lin(k, a, k * b), lin(k, b, a), lin(k, a, b + 1)];
    const d = [2, 3, 5, 7].find(x => k % x === 0 && x < k);
    if (d) { const w = lin(d, (k / d) * a, (k / d) * b); w.partial = true; wrongs.unshift(w); }
    const q = finish({
      name,
      prompt: `${name} wants to factorise ${expr} fully. Which answer is correct?`,
      rule: RULES.hcf,
      correct,
      wrongs,
      explanation: `The HCF of ${Math.abs(k * a)}x and ${Math.abs(k * b)} is ${k}, so ${expr} = ${correct.label}.`,
      diagramData: { mode: 'hcf', terms: [`${k * a === 1 ? '' : k * a}x`, String(Math.abs(k * b))], sign: b < 0 ? MINUS : '+' }
    });
    if (q) return q;
  }
  return null;
}

function genHcfVar(name) {
  for (let t = 0; t < 40; t++) {
    const g = Math.random() < 0.2 ? 1 : randInt(2, 6);
    const a = randInt(1, 4), b = randInt(1, 6) * randSign(0.3);
    if (gcd(a, Math.abs(b)) !== 1) continue;
    const gx = g === 1 ? 'x' : `${g}x`;
    const vl = (gg, cc, dd) => opt(`${gg === 1 ? 'x' : `${gg}x`}(${bin(cc, dd)})`, [gg * cc, gg * dd, 0]);
    const expr = poly([[g * a, 'x²'], [g * b, 'x']]);
    const correct = vl(g, a, b);
    const wrongs = [vl(g, a, -b), vl(g, a, g * b), vl(g, b, a), vl(g, a, b + 1)];
    if (g > 1) {
      const p1 = opt(`x(${bin(g * a, g * b)})`, [g * a, g * b, 0], true);
      const p2 = opt(`${g}(${poly([[a, 'x²'], [b, 'x']])})`, [g * a, g * b, 0], true);
      wrongs.unshift(p1, p2);
    }
    const q = finish({
      name,
      prompt: `${name} wants to factorise ${expr} fully. Which answer is correct?`,
      rule: RULES.hcf,
      correct,
      wrongs,
      explanation: `The HCF of ${g * a}x² and ${Math.abs(g * b)}x is ${gx}, so ${expr} = ${correct.label}.`,
      diagramData: { mode: 'hcf', terms: [`${g * a === 1 ? '' : g * a}x²`, `${Math.abs(g * b) === 1 ? '' : Math.abs(g * b)}x`], sign: b < 0 ? MINUS : '+' }
    });
    if (q) return q;
  }
  return null;
}

function genExpand(name) {
  for (let t = 0; t < 40; t++) {
    const p = randInt(1, 8) * randSign(0.4), q = randInt(1, 8) * randSign(0.4);
    if (p + q === 0) continue;
    const mk = (A, B, C) => opt(quadStr(A, B, C), [A, B, C]);
    const correct = mk(1, p + q, p * q);
    const wrongs = [mk(1, 0, p * q), mk(1, p + q, p + q), mk(1, p * q, p + q), mk(1, p + q, -p * q), mk(1, p * q, p * q)];
    const f = `(${bin(1, p)})(${bin(1, q)})`;
    const qn = finish({
      name,
      prompt: `${name} needs to expand ${f}. Which expression is equal to it?`,
      rule: RULES.expand,
      correct,
      wrongs,
      explanation: `Multiply every term: x² + (${fmtN(p)} + ${fmtN(q)})x + (${fmtN(p)} × ${fmtN(q)}) = ${correct.label}.`,
      diagramData: { mode: 'expand', p, q }
    });
    if (qn) return qn;
  }
  return null;
}

function trinomBuilder(name, p, q) {
  const expr = quadStr(1, p + q, p * q);
  const correct = fac(p, q);
  const wrongs = [fac(-p, -q), fac(p, -q), fac(-p, q), fac(p + 1, q - 1), fac(p, q + 1)]
    .filter(w => !/\(x\)/.test(w.label) && !w.label.includes('(x)'));
  // other factor pairs of the same product (right product, wrong sum)
  const c = p * q;
  for (let m = 1; m <= Math.abs(c); m++) {
    if (c % m === 0) wrongs.push(fac(m, c / m), fac(-m, -c / m));
  }
  return finish({
    name,
    prompt: `${name} wants to factorise ${expr}. Which answer is correct?`,
    rule: RULES.trinom,
    correct,
    wrongs,
    explanation: `Find two numbers with sum ${fmtN(p + q)} and product ${fmtN(p * q)}: ${fmtN(p)} and ${fmtN(q)}. So ${expr} = ${correct.label}.`,
    diagramData: { mode: 'area', p, q, expr }
  });
}

function genTrinomPos(name) {
  for (let t = 0; t < 40; t++) {
    const q = trinomBuilder(name, randInt(1, 9), randInt(1, 9));
    if (q) return q;
  }
  return null;
}

function genTrinomNeg(name) {
  for (let t = 0; t < 60; t++) {
    const p = randInt(1, 9) * randSign(0.5), q = randInt(1, 9) * randSign(0.5);
    if (p > 0 && q > 0) continue;
    if (p + q === 0) continue;
    const r = trinomBuilder(name, p, q);
    if (r) return r;
  }
  return null;
}

function genDots(name) {
  const n = randInt(2, 12);
  const correct = fac(-n, n);
  const expr = quadStr(1, 0, -n * n);
  return finish({
    name,
    prompt: `${name} wants to factorise ${expr}. Which answer is correct?`,
    rule: RULES.dots,
    correct,
    wrongs: [fac(-n, -n), fac(n, n), facG(1, -n * n, 1, n * n), fac(-n * n, 1)],
    explanation: `${expr} is a difference of two squares: x² − ${n}² = (x − ${n})(x + ${n}).`,
    diagramData: { mode: 'dots', a: 'x', b: n }
  });
}

function genDotsCoef(name) {
  for (let t = 0; t < 40; t++) {
    const p = randInt(2, 6), q = randInt(2, 9);
    if (gcd(p, q) !== 1) continue;
    const expr = quadStr(p * p, 0, -q * q);
    const correct = facG(p, -q, p, q);
    const r = finish({
      name,
      prompt: `${name} wants to factorise ${expr}. Which answer is correct?`,
      rule: RULES.dots,
      correct,
      wrongs: [facG(p, -q, p, -q), facG(p, q, p, q), facG(p * p, -q, p * p, q), facG(p, -q * q, p, q * q)],
      explanation: `${expr} = (${p}x)² − ${q}² = (${bin(p, -q)})(${bin(p, q)}).`,
      diagramData: { mode: 'dots', a: `${p}x`, b: q }
    });
    if (r) return r;
  }
  return null;
}

function genDotsHcf(name) {
  const k = randInt(2, 5), n = randInt(2, 6);
  const expr = quadStr(k, 0, -k * n * n);
  const mk = (label, co, partial = false) => opt(label, co, partial);
  const base = prod(1, -n, 1, n);
  const correct = mk(`${k}(x ${MINUS} ${n})(x + ${n})`, base.map(v => v * k));
  return finish({
    name,
    prompt: `${name} wants to factorise ${expr} fully. Which answer is correct?`,
    rule: RULES.dots,
    correct,
    wrongs: [
      mk(`${k}(x² ${MINUS} ${n * n})`, base.map(v => v * k), true),
      mk(`${k}(x ${MINUS} ${n})(x ${MINUS} ${n})`, prod(1, -n, 1, -n).map(v => v * k)),
      mk(`${k}(x + ${n})(x + ${n})`, prod(1, n, 1, n).map(v => v * k)),
      mk(`(${k}x ${MINUS} ${n})(${k}x + ${n})`, prod(k, -n, k, n))
    ],
    explanation: `Take out ${k} first: ${expr} = ${k}(x² ${MINUS} ${n * n}), then use a² − b²: ${correct.label}.`,
    diagramData: { mode: 'hcf', terms: [`${k}x²`, String(k * n * n)], sign: MINUS }
  });
}

function genGroup(name) {
  for (let t = 0; t < 40; t++) {
    const p = randInt(1, 7), q = randInt(1, 7) * randSign(0.3);
    if (p === Math.abs(q)) continue;
    const co2 = (a, b) => [1, b, a, a * b]; // (x + a)(y + b) -> xy, x, y, const
    const lab = (a, b) => `(x${a < 0 ? ` ${MINUS} ${-a}` : ` + ${a}`})(y${b < 0 ? ` ${MINUS} ${-b}` : ` + ${b}`})`;
    const o = (a, b) => opt(lab(a, b), co2(a, b));
    const expr = poly([[1, 'xy'], [q, 'x'], [p, 'y'], [p * q, '']]);
    const correct = o(p, q);
    const r = finish({
      name,
      prompt: `${name} wants to factorise ${expr} by grouping. Which answer is correct?`,
      rule: RULES.group,
      correct,
      wrongs: [o(q, p), o(-p, -q), o(p, -q), o(-p, q), o(p * q, 1)],
      explanation: `Group: x(y ${q < 0 ? MINUS : '+'} ${Math.abs(q)}) ${p < 0 ? MINUS : '+'} ${Math.abs(p)}(y ${q < 0 ? MINUS : '+'} ${Math.abs(q)}) = ${correct.label}.`,
      diagramData: { mode: 'group', cells: ['xy', `${q}x`, `${p}y`, `${p * q}`] }
    });
    if (r) return r;
  }
  return null;
}

function genPerfect(name) {
  for (let t = 0; t < 40; t++) {
    const s = randSign(0.5);
    let p = 1, q;
    if (Math.random() < 0.5) {
      q = randInt(1, 9);
    } else {
      p = randInt(2, 4); q = randInt(1, 5);
      if (gcd(p, q) !== 1) continue;
    }
    const sq = lab => lab;
    const o = (pp, qq) => opt(`(${bin(pp, qq)})²`, prod(pp, qq, pp, qq));
    const expr = quadStr(p * p, 2 * s * p * q, q * q);
    const correct = o(p, s * q);
    const r = finish({
      name,
      prompt: `${name} wants to factorise ${expr}. Which answer is correct?`,
      rule: RULES.perfect,
      correct,
      wrongs: [
        o(p, -s * q),
        opt(`(${bin(p, q)})(${bin(p, -q)})`, prod(p, q, p, -q)),
        o(p, 2 * s * q),
        o(p * p, s * q),
        o(p, s * q * q)
      ],
      explanation: `${expr} = (${p === 1 ? 'x' : `${p}x`})² ${s < 0 ? MINUS : '+'} 2(${p === 1 ? 'x' : `${p}x`})(${q}) + ${q}², a perfect square: ${correct.label}.`,
      diagramData: { mode: 'square', p, q, s }
    });
    if (r) return sq(r);
  }
  return null;
}

function genQuad(name) {
  for (let t = 0; t < 80; t++) {
    const p = randInt(1, 3), r = randInt(1, 3);
    if (p === 1 && r === 1) continue;
    const q = randInt(1, 6) * randSign(0.4), s = randInt(1, 6) * randSign(0.4);
    if (gcd(p, Math.abs(q)) !== 1 || gcd(r, Math.abs(s)) !== 1) continue;
    const [A, B, C] = prod(p, q, r, s);
    if (B === 0) continue;
    const expr = quadStr(A, B, C);
    const correct = facG(p, q, r, s);
    const x = finish({
      name,
      prompt: `${name} wants to factorise ${expr}. Which answer is correct?`,
      rule: RULES.quad,
      correct,
      wrongs: [facG(p, s, r, q), facG(p, -q, r, -s), facG(p, q, r, -s), facG(p, -q, r, s), facG(1, q, A, s)],
      explanation: `Try factor pairs of ${A}x² and ${fmtN(C)}, then check the middle term by expanding: ${correct.label} gives ${expr}.`,
      diagramData: { mode: 'area', p: '?', q: '?', expr }
    });
    if (x) return x;
  }
  return null;
}

const GENERATORS = {
  hcfNum: genHcfNum, hcfVar: genHcfVar, expand: genExpand,
  trinomPos: genTrinomPos, trinomNeg: genTrinomNeg, dots: genDots,
  dotsCoef: genDotsCoef, dotsHcf: genDotsHcf, group: genGroup,
  perfect: genPerfect, quad: genQuad
};

/** Generate a procedural question for a given world */
export function makeQuestion(worldIndex = 0) {
  const world = PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0];
  for (let i = 0; i < 50; i++) {
    const arch = pick(world.arch);
    const q = GENERATORS[arch](pick(WESTERN_NAMES));
    if (q) return { ...q, world, arch };
  }
  // Absolute fallback (should never happen)
  return { ...genDots('Leo'), world, arch: 'dots' };
}
