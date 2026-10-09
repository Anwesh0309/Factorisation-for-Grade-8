/* Generates the 8 story-panel illustrations (public/assets/images/slideN.svg) */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets', 'images');
fs.mkdirSync(out, { recursive: true });

let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const F = "font-family=\"'Trebuchet MS','Arial Rounded MT Bold',Arial,sans-serif\" font-weight=\"900\"";

const bg = () => {
  let s = `<defs>
  <radialGradient id="bg" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="#3b1d8f"/><stop offset=".5" stop-color="#1a0f4e"/><stop offset="1" stop-color="#080520"/></radialGradient>
  <radialGradient id="neb1"><stop offset="0" stop-color="#ec4899" stop-opacity=".35"/><stop offset="1" stop-color="#ec4899" stop-opacity="0"/></radialGradient>
  <radialGradient id="neb2"><stop offset="0" stop-color="#38bdf8" stop-opacity=".3"/><stop offset="1" stop-color="#38bdf8" stop-opacity="0"/></radialGradient>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<rect width="1024" height="1024" fill="url(#bg)"/>
<circle cx="120" cy="880" r="330" fill="url(#neb1)"/><circle cx="930" cy="140" r="300" fill="url(#neb2)"/>`;
  for (let i = 0; i < 150; i++) {
    const r = rnd() < 0.1 ? 3 : rnd() * 1.6 + 0.5;
    s += `<circle cx="${(rnd() * 1024).toFixed(0)}" cy="${(rnd() * 1024).toFixed(0)}" r="${r.toFixed(1)}" fill="#fff" opacity="${(0.3 + rnd() * 0.7).toFixed(2)}"/>`;
  }
  return s;
};
const T = (x, y, t, size, fill = '#fff', extra = '') =>
  `<text x="${x}" y="${y}" ${F} font-size="${size}" fill="${fill}" text-anchor="middle" dominant-baseline="middle" ${extra}>${t}</text>`;
const rect = (x, y, w, h, fill, stroke = '#ffffff99', sw = 3, rx = 6) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const PUR = '#7c3aed', CYA = '#0ea5e9', GOLD = '#facc15', ROSE = '#f43f5e', GRN = '#22c55e';

/* area model helper: width = x + a, height = x + b, scaled */
function areaModel(ox, oy, X, U, a, b, showUnitGrid = true, labels = true) {
  let s = rect(ox, oy, X, X, PUR) + T(ox + X / 2, oy + X / 2, 'x²', X * 0.32);
  for (let i = 0; i < a; i++) s += rect(ox + X + i * U, oy, U, X, CYA, '#e0f2fe', 2, 2);
  for (let j = 0; j < b; j++) s += rect(ox, oy + X + j * U, X, U, CYA, '#e0f2fe', 2, 2);
  if (showUnitGrid) for (let i = 0; i < a; i++) for (let j = 0; j < b; j++) s += rect(ox + X + i * U, oy + X + j * U, U, U, GOLD, '#78350f', 2, 2);
  if (labels) {
    s += T(ox + X / 2, oy - 26, 'x', 34, GOLD) + T(ox + X + (a * U) / 2, oy - 26, a, 34, '#fb7185');
    s += T(ox - 30, oy + X / 2, 'x', 34, GOLD) + T(ox - 30, oy + X + (b * U) / 2, b, 34, '#fb7185');
  }
  return s;
}

const slides = [];

/* 1. Multiply <-> un-multiply */
slides.push(() => {
  let s = '';
  // left: 3x4 number grid
  for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) s += rect(110 + i * 56, 250 + j * 56, 50, 50, GOLD, '#92400e', 3, 8);
  s += T(222, 450, '3 × 4 = 12', 46, '#fde68a');
  // right: tile rectangle (x+2)(x+3)
  s += areaModel(610, 230, 130, 50, 2, 3, true, false);
  s += T(675, 200, 'x + 2', 34, GOLD) + T(555, 395, 'x + 3', 34, GOLD, 'transform="rotate(-90 555 395)"');
  s += T(765, 560, 'x² + 5x + 6', 44, '#a5f3fc');
  // arrows
  s += `<g filter="url(#glow)"><path d="M380 330 H520" stroke="${GRN}" stroke-width="12" fill="none"/><path d="M505 305 L545 330 L505 355Z" fill="${GRN}"/>
  <path d="M520 400 H380" stroke="${ROSE}" stroke-width="12" fill="none"/><path d="M395 375 L355 400 L395 425Z" fill="${ROSE}"/></g>`;
  s += T(450, 285, 'EXPAND', 32, '#86efac') + T(450, 450, 'FACTORISE', 32, '#fda4af');
  s += T(512, 110, 'Multiply  ⇄  Un-multiply', 60, '#fff', 'filter="url(#glow)"');
  s += T(512, 880, 'Factorising finds the factors!', 46, GOLD);
  return s;
});

/* 2. Terms & factors: factor trees */
slides.push(() => {
  let s = T(512, 110, '6x² + 9x', 90, GOLD, 'filter="url(#glow)"');
  const node = (x, y, t, fill = '#4c1d95', col = '#fff') => `<circle cx="${x}" cy="${y}" r="42" fill="${fill}" stroke="#ddd6fe" stroke-width="4"/>` + T(x, y, t, 36, col);
  const line = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#c4b5fd" stroke-width="5"/>`;
  // tree 1 : 6x^2 = 2 x 3 x x x x
  s += line(270, 300, 160, 440) + line(270, 300, 380, 440) + line(160, 440, 100, 580) + line(160, 440, 220, 580) + line(380, 440, 340, 580) + line(380, 440, 430, 580);
  s += node(270, 270, '6x²', '#6d28d9') + node(160, 440, '6', '#4c1d95') + node(380, 440, 'x²', '#4c1d95');
  s += node(100, 610, '2', '#0c4a6e') + node(220, 610, '3', '#854d0e', GOLD);
  s += node(340, 610, 'x', '#854d0e', GOLD) + node(430, 610, 'x', '#854d0e', GOLD);
  // tree 2 : 9x = 3 x 3 x x
  s += line(750, 300, 650, 440) + line(750, 300, 850, 440) + line(650, 440, 590, 580) + line(650, 440, 710, 580);
  s += node(750, 270, '9x', '#6d28d9') + node(650, 440, '9', '#4c1d95') + node(850, 440, 'x', '#854d0e', GOLD);
  s += node(590, 610, '3', '#854d0e', GOLD) + node(710, 610, '3', '#0c4a6e');
  s += `<rect x="60" y="690" width="904" height="130" rx="32" fill="#1e0e45" stroke="${GOLD}" stroke-width="5" filter="url(#glow)"/>`;
  s += T(512, 730, 'Shared factors are gold:  3  and  x', 44, '#fde68a') + T(512, 785, 'HCF = 3x', 62, GOLD);
  return s;
});

/* 3. Common factor area model 3(2x+3) */
slides.push(() => {
  let s = T(512, 100, '6x + 9  =  3(2x + 3)', 80, GOLD, 'filter="url(#glow)"');
  const x = 70, h = 190, ox = 150, oy = 330;
  for (let i = 0; i < 2; i++) { s += rect(ox + i * (x + 12), oy, x, h, CYA, '#e0f2fe', 4, 6) + T(ox + i * (x + 12) + x / 2, oy + h / 2, 'x', 54); }
  s += rect(ox + 2 * (x + 12), oy, 190, h, GOLD, '#92400e', 4, 6) + T(ox + 2 * (x + 12) + 95, oy + h / 2, '3', 60, '#78350f');
  s += `<path d="M ${ox - 30} ${oy} V ${oy + h}" stroke="${ROSE}" stroke-width="8"/>` + T(ox - 70, oy + h / 2, '3', 62, '#fb7185');
  s += `<path d="M ${ox} ${oy - 30} H ${ox + 2 * (x + 12) + 190}" stroke="${GRN}" stroke-width="8"/>` + T(ox + 262, oy - 62, '2x + 3', 54, '#86efac');
  s += T(300, 640, '3 × 2x = 6x', 52, '#a5f3fc') + T(740, 640, '3 × 3 = 9', 52, '#a5f3fc');
  s += `<rect x="130" y="710" width="764" height="130" rx="32" fill="#064e3b" stroke="${GRN}" stroke-width="5"/>` + T(512, 775, '✓  Check by expanding: 6x + 9', 56, '#bbf7d0');
  s += T(512, 920, 'Common factor first!', 50, GOLD);
  return s;
});

/* 4. Grouping 2x2 grid */
slides.push(() => {
  let s = T(512, 100, 'xy + 3x + 2y + 6', 80, GOLD, 'filter="url(#glow)"');
  const ox = 290, oy = 290, w = 230, g = 12;
  const cells = [['xy', PUR], ['3x', CYA], ['2y', CYA], ['6', '#ca8a04']];
  cells.forEach(([t, c], k) => { const cx = ox + (k % 2) * (w + g), cy = oy + Math.floor(k / 2) * (w + g); s += rect(cx, cy, w, w, c, '#ffffffaa', 5, 22) + T(cx + w / 2, cy + w / 2, t, 80); });
  s += T(ox + w / 2, oy - 40, 'x', 54, GOLD) + T(ox + w + g + w / 2, oy - 40, '3', 54, '#fb7185');
  s += T(ox - 50, oy + w / 2, 'y', 54, GOLD) + T(ox - 50, oy + w + g + w / 2, '2', 54, '#fb7185');
  s += `<path d="M${ox} ${oy - 90} H${ox + 2 * w + g}" stroke="${GRN}" stroke-width="6"/>`;
  s += T(ox + w + g / 2, oy - 130, '(y + 3)', 46, '#86efac');
  s += T(512, 880, '(x + 2)(y + 3)', 78, '#a5f3fc', 'filter="url(#glow)"');
  return s;
});

/* 5. Difference of two squares */
slides.push(() => {
  let s = T(512, 100, 'a² − b² = (a − b)(a + b)', 70, GOLD, 'filter="url(#glow)"');
  // left L shape
  s += `<path d="M90 280 H330 V420 H470 V560 H90 Z" fill="${PUR}" stroke="#ddd6fe" stroke-width="5"/>`;
  s += `<rect x="330" y="280" width="140" height="140" fill="none" stroke="${ROSE}" stroke-width="6" stroke-dasharray="14 10"/>` + T(400, 350, '7²', 54, '#fda4af');
  s += T(210, 480, 'x² − 49', 56) + T(290, 245, 'x', 44, GOLD) + T(55, 420, 'x', 44, GOLD);
  s += `<g filter="url(#glow)"><path d="M500 420 H560" stroke="${GRN}" stroke-width="12"/><path d="M548 396 L586 420 L548 444Z" fill="${GRN}"/></g>`;
  // right rectangle (x-7) by (x+7)
  s += rect(610, 330, 150, 120, PUR, '#ddd6fe', 5, 4) + rect(760, 330, 100, 120, CYA, '#e0f2fe', 5, 4);
  s += T(685, 390, 'x−7', 40) + T(810, 390, '7', 44);
  s += `<path d="M610 480 H860" stroke="${GRN}" stroke-width="6"/>` + T(735, 520, 'x + 7', 48, '#86efac');
    s += T(512, 700, 'Cut and slide the strip!', 48, '#c4b5fd');
  s += `<rect x="150" y="760" width="724" height="130" rx="32" fill="#1e0e45" stroke="${GOLD}" stroke-width="5" filter="url(#glow)"/>` + T(512, 825, 'x² − 49 = (x − 7)(x + 7)', 60, GOLD);
  return s;
});

/* 6. Trinomial x^2+7x+12 */
slides.push(() => {
  let s = T(512, 100, 'x² + 7x + 12', 90, GOLD, 'filter="url(#glow)"');
  s += areaModel(250, 270, 190, 54, 3, 4, true, false);
  // widths: a=3 -> 162 ; b=4 -> 216 ; need labels
  s += T(345, 235, 'x', 42, GOLD) + T(440 + 81, 235, '3', 42, '#fb7185');
  s += T(205, 365, 'x', 42, GOLD) + T(205, 460 + 108, '4', 42, '#fb7185');
  s += `<rect x="620" y="300" width="330" height="360" rx="28" fill="#1e0e45" stroke="${GRN}" stroke-width="5"/>`;
  s += T(785, 360, '3 + 4 = 7', 50, '#fde68a') + T(785, 450, '3 × 4 = 12', 50, '#a5f3fc') + T(785, 560, '(x+3)(x+4)', 46, '#86efac');
  s += T(300, 840, 'Sum = b', 56, GOLD) + T(740, 840, 'Product = c', 56, GOLD);
  return s;
});

/* 7. Perfect square */
slides.push(() => {
  let s = T(512, 100, 'x² + 6x + 9 = (x + 3)²', 74, GOLD, 'filter="url(#glow)"');
  s += areaModel(260, 300, 220, 66, 3, 3, true, false);
  s += T(370, 262, 'x', 44, GOLD) + T(480 + 99, 262, '3', 44, '#fb7185') + T(215, 410, 'x', 44, GOLD) + T(215, 520 + 99, '3', 44, '#fb7185');
  s += T(370, 410, 'x²', 80) + T(580, 410, '3x', 40) + T(370, 620, '3x', 40) + T(580, 620, '9', 60, '#78350f');
  s += `<rect x="130" y="780" width="764" height="150" rx="32" fill="#1e0e45" stroke="${GOLD}" stroke-width="5" filter="url(#glow)"/>`;
  s += T(512, 830, 'a² + 2ab + b² = (a + b)²', 54, '#fde68a') + T(512, 890, 'a² − 2ab + b² = (a − b)²', 56, '#a5f3fc');
  return s;
});

/* 8. Lab */
slides.push(() => {
  let s = T(512, 110, 'The Factor Lab', 96, GOLD, 'filter="url(#glow)"');
  // flask
  s += `<path d="M450 260 H574 V420 L700 660 Q730 720 670 740 H354 Q294 720 324 660 L450 420Z" fill="#0ea5e955" stroke="#7dd3fc" stroke-width="8"/>`;
  s += `<path d="M360 600 H664 L700 665 Q725 715 672 730 H352 Q299 715 324 665Z" fill="#22d3ee" opacity=".7"/>`;
  s += rect(430, 640, 46, 46, PUR, '#fff', 3, 4) + rect(490, 640, 46, 46, CYA, '#fff', 3, 4) + rect(550, 640, 46, 46, GOLD, '#fff', 3, 4);
  s += T(512, 530, '(x + p)(x + q)', 40, '#fff');
  // tool badges
  const badges = [['HCF', 90, 800], ['Group', 300, 800], ['a² − b²', 520, 800], ['Sum × Prod', 760, 800]];
  badges.forEach(([t, x, y], i) => { const w = i === 3 ? 230 : 190; s += `<rect x="${x}" y="${y}" width="${w}" height="90" rx="28" fill="#1e0e45" stroke="${[GOLD, GRN, ROSE, '#38bdf8'][i]}" stroke-width="5"/>` + T(x + w / 2, y + 45, t, 36, '#fff'); });
  s += T(512, 950, '🔍 Always check by expanding!', 44, '#a5f3fc');
  s += T(160, 300, '+', 90, '#a78bfa') + T(870, 330, '×', 90, '#f9a8d4') + T(130, 560, '²', 110, '#67e8f9') + T(890, 590, '−', 110, '#fde68a');
  return s;
});

slides.forEach((fn, i) => {
  seed = 7 + i * 13;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">${bg()}${fn()}</svg>`;
  fs.writeFileSync(path.join(out, `slide${i + 1}.svg`), svg);
});
console.log('wrote', slides.length, 'story images');
