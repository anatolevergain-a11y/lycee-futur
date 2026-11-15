import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, Play } from 'lucide-react';

interface SimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

// 1. CERCLE TRIGONOMÉTRIQUE SIMULATOR
export const TrigCircleSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [angleDeg, setAngleDeg] = useState<number>(45);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  const angleRad = (angleDeg * Math.PI) / 180;
  const cosVal = Math.cos(angleRad);
  const sinVal = Math.sin(angleRad);

  const handleValidate = () => {
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Cercle Trigonométrique : cosinus et sinus');
      setHasCompleted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Mathématiques · Trigonométrie</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cercle Trigonométrique & Projections Cos / Sin</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
              <span>Angle θ :</span>
              <span className="font-bold text-sky-600">{angleDeg}° ({angleRad.toFixed(2)} rad)</span>
            </div>
            <input
              type="range"
              min={0}
              max={360}
              value={angleDeg}
              onChange={(e) => setAngleDeg(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-500">cos(θ) [Abscisse] :</span>
              <span className="font-bold text-sky-600">{cosVal.toFixed(3)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">sin(θ) [Ordonnée] :</span>
              <span className="font-bold text-emerald-600">{sinVal.toFixed(3)}</span>
            </div>
            <div className="flex justify-between text-[11px] text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-1">
              <span>cos²(θ) + sin²(θ) :</span>
              <span className="font-bold text-slate-900 dark:text-white">1,000</span>
            </div>
          </div>

          <button
            onClick={handleValidate}
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Valider l'angle trigonométrique (+30 XP)</span>
          </button>
        </div>

        {/* Trig Circle Visual SVG */}
        <div className="lg:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-center">
          <svg className="w-64 h-64" viewBox="0 0 220 220">
            {/* Axes */}
            <line x1="20" y1="110" x2="200" y2="110" stroke="#475569" strokeWidth="1" />
            <line x1="110" y1="20" x2="110" y2="200" stroke="#475569" strokeWidth="1" />
            {/* Unit circle */}
            <circle cx="110" cy="110" r="80" fill="none" stroke="#64748b" strokeWidth="1.5" />
            {/* Projected points */}
            <line x1="110" y1="110" x2={110 + 80 * cosVal} y2={110 - 80 * sinVal} stroke="#38bdf8" strokeWidth="2" />
            {/* Cos line on x axis */}
            <line x1="110" y1="110" x2={110 + 80 * cosVal} y2="110" stroke="#0ea5e9" strokeWidth="3" />
            {/* Sin line */}
            <line x1={110 + 80 * cosVal} y1="110" x2={110 + 80 * cosVal} y2={110 - 80 * sinVal} stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" />
            {/* Point M */}
            <circle cx={110 + 80 * cosVal} cy={110 - 80 * sinVal} r="5" fill="#f59e0b" />
            <text x="110 + 85 * cosVal" y="105 - 85 * sinVal" fill="#f59e0b" fontSize="10" fontWeight="bold">M</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

// 2. COBWEB PLOT (TOILE D'ARAIGNÉE) SIMULATOR
export const CobwebPlotSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [u0, setU0] = useState<number>(0.2);
  const [paramR, setParamR] = useState<number>(2.8); // Logistic r
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  // Compute first 6 iterations
  const points: number[] = [u0];
  let curr = u0;
  for (let i = 0; i < 6; i++) {
    curr = paramR * curr * (1 - curr);
    points.push(Math.max(0, Math.min(1, curr)));
  }

  const handleValidate = () => {
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Suite Récurrente : convergence par toile d’araignée');
      setHasCompleted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Mathématiques · Analyse Numérique</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Convergence d’une Suite Récurrente (Toile d’Araignée)</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
              <span>Premier terme u0 :</span>
              <span className="font-bold text-sky-600">{u0.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.05}
              max={0.95}
              step={0.05}
              value={u0}
              onChange={(e) => setU0(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
          </div>

          <div>
            <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
              <span>Paramètre r (Suite Logistique) :</span>
              <span className="font-bold text-sky-600">{paramR.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={1.0}
              max={3.8}
              step={0.1}
              value={paramR}
              onChange={(e) => setParamR(Number(e.target.value))}
              className="w-full mt-1 accent-sky-600"
            />
            <div className="text-[10px] text-slate-400 mt-1">
              r &lt; 3 : Point fixe stable · r &gt; 3,5 : Chaos déterministe
            </div>
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1 font-mono text-[11px]">
            {points.slice(0, 5).map((p, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-slate-500">u{idx} :</span>
                <span className="font-bold text-emerald-600">{p.toFixed(4)}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleValidate}
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Valider la convergence (+30 XP)</span>
          </button>
        </div>

        {/* Cobweb Graph SVG */}
        <div className="lg:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-center">
          <svg className="w-64 h-64" viewBox="0 0 200 200">
            {/* Diagonal line y = x */}
            <line x1="20" y1="180" x2="180" y2="20" stroke="#475569" strokeWidth="1" />
            {/* Parabola y = r*x*(1-x) */}
            <path
              d={Array.from({ length: 50 }).reduce((acc: string, _, i) => {
                const x = i / 49;
                const y = paramR * x * (1 - x);
                const svgX = 20 + x * 160;
                const svgY = 180 - y * 160;
                return `${acc} ${i === 0 ? 'M' : 'L'} ${svgX} ${svgY}`;
              }, '')}
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
