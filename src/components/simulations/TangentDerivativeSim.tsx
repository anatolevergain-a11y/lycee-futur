import React, { useState } from 'react';
import { RotateCcw, Info, Sliders, CheckCircle2 } from 'lucide-react';

interface TangentDerivativeSimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

export const TangentDerivativeSim: React.FC<TangentDerivativeSimProps> = ({ onGainXp }) => {
  // Point x0 where tangent is examined (-2.5 to 2.5)
  const [x0, setX0] = useState<number>(0.8);
  // Secant step h (0.01 to 2.0) to visualize secant becoming tangent as h -> 0
  const [h, setH] = useState<number>(0.5);
  // Choice of function: cubic polynomial f(x) = x^3 - 3x + 1 or parabola or exp
  const [funcType, setFuncType] = useState<'cubic' | 'parabola' | 'exp'>('cubic');
  const [showSecant, setShowSecant] = useState<boolean>(true);

  // Evaluate f(x)
  const f = (x: number): number => {
    if (funcType === 'cubic') return (x * x * x) / 3 - x + 1;
    if (funcType === 'parabola') return 0.5 * x * x - 1;
    return Math.exp(x * 0.7) - 1.5;
  };

  // Derivative f'(x)
  const fPrime = (x: number): number => {
    if (funcType === 'cubic') return x * x - 1;
    if (funcType === 'parabola') return x;
    return 0.7 * Math.exp(x * 0.7);
  };

  // Derivative second f''(x) for convexity
  const fSecond = (x: number): number => {
    if (funcType === 'cubic') return 2 * x;
    if (funcType === 'parabola') return 1;
    return 0.49 * Math.exp(x * 0.7);
  };

  const y0 = f(x0);
  const slopeTangent = fPrime(x0);
  const convexity = fSecond(x0);

  // Secant slope: (f(x0 + h) - f(x0)) / h
  const x1 = x0 + h;
  const y1 = f(x1);
  const slopeSecant = (y1 - y0) / h;

  // Coordinate transforms for SVG
  const svgW = 560;
  const svgH = 320;
  const xMin = -3.5;
  const xMax = 3.5;
  const yMin = -2.5;
  const yMax = 4.5;

  const toPxX = (x: number) => ((x - xMin) / (xMax - xMin)) * svgW;
  const toPxY = (y: number) => svgH - ((y - yMin) / (yMax - yMin)) * svgH;

  // Build curve points
  const curvePts: [number, number][] = [];
  for (let x = xMin; x <= xMax; x += 0.05) {
    curvePts.push([toPxX(x), toPxY(f(x))]);
  }
  const curvePath = `M ${curvePts.map((p) => `${p[0]},${p[1]}`).join(' L ')}`;

  // Tangent line: y = f'(x0)(x - x0) + f(x0)
  const tanXStart = x0 - 2.0;
  const tanXEnd = x0 + 2.0;
  const tanYStart = slopeTangent * (tanXStart - x0) + y0;
  const tanYEnd = slopeTangent * (tanXEnd - x0) + y0;

  // Secant line through A(x0, y0) and B(x0+h, y1)
  const secXStart = x0 - 1.5;
  const secXEnd = x1 + 1.5;
  const secYStart = slopeSecant * (secXStart - x0) + y0;
  const secYEnd = slopeSecant * (secXEnd - x0) + y0;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
            <span>MATHÉMATIQUES TERMINALE & 1ÈRE SPÉ</span>
            <span aria-hidden="true">·</span>
            <span>SIMULATEUR DE DÉRIVATION & TANGENTE</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Nombre dérivé comme limite du taux de variation & Convexité
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={funcType}
            onChange={(e) => setFuncType(e.target.value as any)}
            className="text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <option value="cubic">Polynôme cubique f(x) = x³/3 - x + 1</option>
            <option value="parabola">Parabole f(x) = 0.5x² - 1</option>
            <option value="exp">Exponentielle f(x) = e^(0.7x) - 1.5</option>
          </select>
          <button
            onClick={() => setShowSecant(!showSecant)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
              showSecant
                ? 'bg-amber-500/10 border-amber-500 text-amber-700 dark:text-amber-400'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
            }`}
          >
            Sécante AB {showSecant ? 'Active' : 'Masquée'}
          </button>
        </div>
      </div>

      {/* SVG Canvas Stage */}
      <div className="p-6 bg-slate-950 text-white relative">
        <div className="relative w-full h-80 bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-full">
            {/* Grid & Axes */}
            <line
              x1={0}
              y1={toPxY(0)}
              x2={svgW}
              y2={toPxY(0)}
              stroke="#475569"
              strokeWidth="1.5"
            />
            <line
              x1={toPxX(0)}
              y1={0}
              x2={toPxX(0)}
              y2={svgH}
              stroke="#475569"
              strokeWidth="1.5"
            />

            {/* Function Curve */}
            <path
              d={curvePath}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
            />

            {/* Secant Line (amber) */}
            {showSecant && (
              <line
                x1={toPxX(secXStart)}
                y1={toPxY(secYStart)}
                x2={toPxX(secXEnd)}
                y2={toPxY(secYEnd)}
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />
            )}

            {/* Tangent Line (rose) */}
            <line
              x1={toPxX(tanXStart)}
              y1={toPxY(tanYStart)}
              x2={toPxX(tanXEnd)}
              y2={toPxY(tanYEnd)}
              stroke="#f43f5e"
              strokeWidth="2.5"
            />

            {/* Point A(x0, y0) */}
            <circle
              cx={toPxX(x0)}
              cy={toPxY(y0)}
              r={5}
              className="fill-sky-400 stroke-white stroke-2"
            />
            <text
              x={toPxX(x0) - 15}
              y={toPxY(y0) - 10}
              className="fill-sky-400 text-[11px] font-bold font-mono"
            >
              A({x0.toFixed(2)}, {y0.toFixed(2)})
            </text>

            {/* Point B(x0 + h, f(x0 + h)) for secant */}
            {showSecant && (
              <g>
                <circle
                  cx={toPxX(x1)}
                  cy={toPxY(y1)}
                  r={4}
                  className="fill-amber-400 stroke-white stroke-1"
                />
                <text
                  x={toPxX(x1) + 8}
                  y={toPxY(y1) + 4}
                  className="fill-amber-400 text-[10px] font-mono"
                >
                  B(x₀+h)
                </text>
              </g>
            )}

            {/* Inflection Point at x = 0 for cubic */}
            {funcType === 'cubic' && (
              <g>
                <circle cx={toPxX(0)} cy={toPxY(1)} r={4} fill="#a855f7" />
                <text x={toPxX(0) + 8} y={toPxY(1) - 4} className="fill-purple-400 text-[9px] font-bold font-mono">
                  Point d'inflexion I(0, 1) [f''(0)=0]
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Live Mathematical Indicators */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Abscisse x₀</div>
            <div className="text-white font-bold">{x0.toFixed(2)}</div>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Nombre dérivé f'(x₀)</div>
            <div className="text-rose-400 font-bold">{slopeTangent.toFixed(3)}</div>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Taux d'accroissement Δy/h</div>
            <div className="text-amber-400 font-bold">{slopeSecant.toFixed(3)}</div>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Convexité f''(x₀)</div>
            <div className={`font-bold ${convexity >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {convexity >= 0 ? 'Convexe (f\'\' ≥ 0)' : 'Concave (f\'\' < 0)'}
            </div>
          </div>
        </div>
      </div>

      {/* Sliders Deck */}
      <div className="p-6 bg-slate-50 dark:bg-slate-950/40 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Point de contact de la tangente (x₀)</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{x0.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="-2.2"
            max="2.2"
            step="0.05"
            value={x0}
            onChange={(e) => setX0(+e.target.value)}
            className="w-full accent-sky-600 cursor-pointer"
          />
          <p className="text-[11px] text-slate-500 mt-1">Glissez x₀ pour observer l'inclinaison de la tangente et le signe de f'(x₀).</p>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Pas h (Rapprochement du point B vers A)</span>
            <span className="font-mono font-bold text-amber-600 dark:text-amber-400">h = {h.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0.02"
            max="1.5"
            step="0.02"
            value={h}
            onChange={(e) => setH(+e.target.value)}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <p className="text-[11px] text-slate-500 mt-1">Quand h tend vers 0, la droite sécante se confond avec la tangente !</p>
        </div>
      </div>

      {/* Tangent Equation Banner */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-sky-50/50 dark:bg-sky-950/20 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
          <span>
            Équation exacte de la tangente :{' '}
            <code className="font-mono bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 font-bold">
              y = {slopeTangent.toFixed(2)} (x - {x0.toFixed(2)}) + {y0.toFixed(2)}
            </code>
          </span>
        </div>
      </div>
    </div>
  );
};
