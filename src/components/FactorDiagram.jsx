import React from 'react';

const fmt = n => (typeof n === 'number' && n < 0 ? `−${Math.abs(n)}` : n);

export function FactorDiagram({ diagramData, size = 180 }) {
  if (!diagramData) return null;
  const { mode } = diagramData;
  const wrap = (children, glow = 'rgba(250,204,21,0.35)') => (
    <div className="flex flex-col items-center justify-center my-2">
      <svg width={size} height={size} viewBox="0 0 200 200" style={{ filter: `drop-shadow(0 0 16px ${glow})` }}>
        {children}
      </svg>
    </div>
  );
  const label = (x, y, t, fill = '#facc15', fs = 15) => (
    <text x={x} y={y} fill={fill} fontSize={fs} fontWeight="900" textAnchor="middle" dominantBaseline="middle">{t}</text>
  );

  if (mode === 'hcf') {
    const [t1, t2] = diagramData.terms;
    return wrap(
      <g>
        <rect x="14" y="40" width="74" height="56" rx="14" fill="rgba(139,92,246,0.35)" stroke="#a78bfa" strokeWidth="3" />
        <rect x="112" y="40" width="74" height="56" rx="14" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" strokeWidth="3" />
        {label(51, 68, t1, '#ffffff', 20)}
        {label(149, 68, t2, '#ffffff', 20)}
        {label(100, 68, diagramData.sign, '#facc15', 26)}
        <path d="M51 100 L100 140 M149 100 L100 140" stroke="#facc15" strokeWidth="3" strokeDasharray="5 4" fill="none" />
        <rect x="46" y="140" width="108" height="36" rx="18" fill="#0c0520" stroke="#f43f5e" strokeWidth="3" strokeDasharray="5 3" />
        {label(100, 158, 'HCF = ?', '#fb7185', 20)}
      </g>
    );
  }

  if (mode === 'area' || mode === 'square') {
    const isSq = mode === 'square';
    const P = isSq ? (diagramData.p === 1 ? '' : diagramData.p) : null;
    const tl = isSq ? (diagramData.p === 1 ? 'x²' : `${diagramData.p * diagramData.p}x²`) : 'x²';
    const mid = isSq ? `${diagramData.p * diagramData.q}x` : '?x';
    const br = isSq ? `${diagramData.q * diagramData.q}` : '?';
    const topR = isSq ? `${fmt(diagramData.s * diagramData.q)}` : '?';
    const topL = isSq ? `${P}x` : 'x';
    const sideL = topL;
    return wrap(
      <g>
        <rect x="40" y="30" width="86" height="86" fill="rgba(139,92,246,0.45)" stroke="#a78bfa" strokeWidth="3" />
        <rect x="126" y="30" width="46" height="86" fill="rgba(56,189,248,0.35)" stroke="#38bdf8" strokeWidth="3" />
        <rect x="40" y="116" width="86" height="46" fill="rgba(56,189,248,0.35)" stroke="#38bdf8" strokeWidth="3" />
        <rect x="126" y="116" width="46" height="46" fill="rgba(250,204,21,0.4)" stroke="#facc15" strokeWidth="3" />
        {label(83, 73, tl, '#ffffff', 22)}
        {label(149, 73, mid, '#ffffff', 16)}
        {label(83, 139, mid, '#ffffff', 16)}
        {label(149, 139, br, '#ffffff', 18)}
        {label(83, 18, topL, '#facc15', 16)}
        {label(149, 18, topR, '#f43f5e', 16)}
        {label(22, 73, sideL, '#facc15', 16)}
        {label(22, 139, topR, '#f43f5e', 16)}
        {label(100, 183, isSq ? 'a perfect square?' : 'Area = the expression', '#cbd5e1', 11)}
      </g>
    );
  }

  if (mode === 'dots') {
    const { a, b } = diagramData;
    return wrap(
      <g>
        <path d="M30 30 H100 V90 H170 V170 H30 Z" fill="rgba(139,92,246,0.45)" stroke="#a78bfa" strokeWidth="3" />
        <rect x="100" y="30" width="70" height="60" fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="6 4" />
        {label(135, 60, `${b}²`, '#fb7185', 20)}
        {label(100, 120, `${a}² − ${b}²`, '#ffffff', 20)}
        {label(100, 17, a, '#facc15', 17)}
        {label(14, 100, a, '#facc15', 17)}
        {label(135, 105 + 0, '', '#fff')}
        {label(100, 186, 'cut out a small square', '#cbd5e1', 11)}
      </g>
    );
  }

  if (mode === 'group') {
    const [c1, c2, c3, c4] = diagramData.cells.map(c => String(c).replace('-', '−'));
    const cell = (x, y, t, col) => (
      <g>
        <rect x={x} y={y} width="62" height="62" rx="8" fill={col} stroke="#ffffff55" strokeWidth="2" />
        {label(x + 31, y + 31, t, '#ffffff', 18)}
      </g>
    );
    return wrap(
      <g>
        {cell(38, 34, c1, 'rgba(139,92,246,0.5)')}
        {cell(100, 34, c2, 'rgba(56,189,248,0.4)')}
        {cell(38, 96, c3, 'rgba(56,189,248,0.4)')}
        {cell(100, 96, c4, 'rgba(250,204,21,0.45)')}
        {label(69, 18, '?', '#f43f5e', 16)}
        {label(131, 18, '?', '#f43f5e', 16)}
        {label(20, 65, '?', '#f43f5e', 16)}
        {label(20, 127, '?', '#f43f5e', 16)}
        {label(100, 180, 'four terms → 2 × 2 grid', '#cbd5e1', 11)}
      </g>
    );
  }

  if (mode === 'expand') {
    const { p, q } = diagramData;
    const b = n => `(x ${n < 0 ? '−' : '+'} ${Math.abs(n)})`;
    return wrap(
      <g>
        <rect x="8" y="60" width="84" height="46" rx="23" fill="rgba(139,92,246,0.4)" stroke="#a78bfa" strokeWidth="3" />
        <rect x="108" y="60" width="84" height="46" rx="23" fill="rgba(56,189,248,0.35)" stroke="#38bdf8" strokeWidth="3" />
        {label(50, 83, b(p), '#ffffff', 17)}
        {label(150, 83, b(q), '#ffffff', 17)}
        <path d="M50 56 Q100 8 150 56" stroke="#facc15" strokeWidth="3" fill="none" strokeDasharray="5 4" />
        <path d="M50 110 Q100 168 150 110" stroke="#4ade80" strokeWidth="3" fill="none" strokeDasharray="5 4" />
        {label(100, 34, '× every term', '#facc15', 12)}
        {label(100, 150, '4 products', '#4ade80', 12)}
        {label(100, 186, 'Expand = multiply out', '#cbd5e1', 11)}
      </g>
    );
  }
  return null;
}
