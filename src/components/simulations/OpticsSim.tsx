import React, { useState } from 'react';
import { RotateCcw, Info, ZoomIn, Eye } from 'lucide-react';

interface OpticsSimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

export const OpticsSim: React.FC<OpticsSimProps> = ({ onGainXp }) => {
  // Focal length f' (cm) > 0 for convergent lens
  const [focalLength, setFocalLength] = useState<number>(10);
  // Object position OA (cm) <= -2 (placed before lens)
  const [objectPositionOA, setObjectPositionOA] = useState<number>(-25);
  // Object height AB (cm)
  const [objectHeightAB, setObjectHeightAB] = useState<number>(4);

  // Descartes Conjugation Formula: 1/OA' - 1/OA = 1/f' => 1/OA' = 1/f' + 1/OA
  // OA' = (f' * OA) / (f' + OA)
  const denom = focalLength + objectPositionOA;
  const isVirtualImage = objectPositionOA > -focalLength; // when |OA| < f', magnifying glass mode!
  const isAtInfinity = Math.abs(denom) < 0.1;

  let imagePositionOA_prime = 0;
  let gamma = 1;
  let imageHeightA_prime_B_prime = 0;

  if (!isAtInfinity) {
    imagePositionOA_prime = (focalLength * objectPositionOA) / denom;
    gamma = imagePositionOA_prime / objectPositionOA;
    imageHeightA_prime_B_prime = gamma * objectHeightAB;
  }

  // SVG parameters
  const svgW = 620;
  const svgH = 320;
  const originX = 310;
  const originY = 160;
  const scale = 7; // pixels per cm

  const toPxX = (cmX: number) => originX + cmX * scale;
  const toPxY = (cmY: number) => originY - cmY * scale; // invert Y for SVG

  // Coordinates
  const O_px = { x: originX, y: originY };
  const F_px = { x: toPxX(-focalLength), y: originY };
  const Fprime_px = { x: toPxX(focalLength), y: originY };
  const A_px = { x: toPxX(objectPositionOA), y: originY };
  const B_px = { x: toPxX(objectPositionOA), y: toPxY(objectHeightAB) };

  // Image coords
  const Aprime_px = { x: toPxX(imagePositionOA_prime), y: originY };
  const Bprime_px = { x: toPxX(imagePositionOA_prime), y: toPxY(imageHeightA_prime_B_prime) };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
            <span>PHYSIQUE TERMINALE & 1ÈRE SPÉ</span>
            <span aria-hidden="true">·</span>
            <span>BANC D'OPTIQUE GÉOMÉTRIQUE</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Lentilles minces convergentes & Relation de Descartes
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-500">Nature de l'image :</span>
          <span className={`font-semibold ${isVirtualImage ? 'text-amber-500' : 'text-emerald-500'}`}>
            {isVirtualImage ? 'Image Virtuelle (Loupe)' : 'Image Réelle (Projetable)'}
          </span>
        </div>
      </div>

      {/* Interactive Optical Bench Viewport */}
      <div className="p-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="relative w-full h-80 bg-slate-900/90 rounded-lg border border-slate-800 overflow-hidden">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-full">
            {/* Optical Axis */}
            <line
              x1={20}
              y1={originY}
              x2={svgW - 20}
              y2={originY}
              stroke="#64748b"
              strokeWidth="1.5"
            />
            {/* Direction arrow on optical axis */}
            <polygon
              points={`${svgW - 22},${originY - 4} ${svgW - 14},${originY} ${svgW - 22},${originY + 4}`}
              fill="#64748b"
            />
            <text x={svgW - 40} y={originY - 8} className="fill-slate-400 text-[10px] font-mono">
              + Axe
            </text>

            {/* Convergent Lens at origin (double arrow) */}
            <line
              x1={originX}
              y1={25}
              x2={originX}
              y2={svgH - 25}
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            {/* Top arrow head (convergent) */}
            <polyline
              points={`${originX - 6},${35} ${originX},${25} ${originX + 6},${35}`}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            {/* Bottom arrow head (convergent) */}
            <polyline
              points={`${originX - 6},${svgH - 35} ${originX},${svgH - 25} ${originX + 6},${svgH - 35}`}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            <text x={originX + 8} y={35} className="fill-sky-400 text-[10px] font-mono font-bold">
              (L)
            </text>

            {/* Optical Center O */}
            <circle cx={originX} cy={originY} r={3} fill="#38bdf8" />
            <text x={originX + 4} y={originY + 16} className="fill-sky-400 text-[11px] font-bold font-mono">
              O
            </text>

            {/* Foyer Objet F & Foyer Image F' */}
            <circle cx={F_px.x} cy={F_px.y} r={3.5} fill="#f59e0b" />
            <text x={F_px.x - 5} y={F_px.y + 16} className="fill-amber-400 text-[11px] font-bold font-mono">
              F
            </text>
            <circle cx={Fprime_px.x} cy={Fprime_px.y} r={3.5} fill="#f59e0b" />
            <text x={Fprime_px.x - 5} y={Fprime_px.y + 16} className="fill-amber-400 text-[11px] font-bold font-mono">
              F'
            </text>

            {/* Object Arrow AB (blue) */}
            <line
              x1={A_px.x}
              y1={A_px.y}
              x2={B_px.x}
              y2={B_px.y}
              stroke="#3b82f6"
              strokeWidth="3.5"
            />
            <polygon
              points={`${B_px.x - 5},${B_px.y + 8} ${B_px.x},${B_px.y} ${B_px.x + 5},${B_px.y + 8}`}
              fill="#3b82f6"
            />
            <text x={A_px.x - 8} y={A_px.y + 16} className="fill-blue-400 text-[11px] font-bold font-mono">
              A
            </text>
            <text x={B_px.x - 10} y={B_px.y - 4} className="fill-blue-400 text-[11px] font-bold font-mono">
              B
            </text>

            {/* RAY 1: Parallel to axis from B -> lens at (O, yB) -> passes through F' */}
            <line
              x1={B_px.x}
              y1={B_px.y}
              x2={originX}
              y2={B_px.y}
              stroke="#ef4444"
              strokeWidth="1.5"
            />
            <line
              x1={originX}
              y1={B_px.y}
              x2={svgW - 20}
              y2={B_px.y + ((originY - B_px.y) / (Fprime_px.x - originX)) * (svgW - 20 - originX)}
              stroke="#ef4444"
              strokeWidth="1.5"
            />
            {/* Virtual ray back extension if virtual */}
            {isVirtualImage && (
              <line
                x1={originX}
                y1={B_px.y}
                x2={Bprime_px.x}
                y2={Bprime_px.y}
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            )}

            {/* RAY 2: Passing through Optical Center O without deviation */}
            <line
              x1={B_px.x}
              y1={B_px.y}
              x2={svgW - 20}
              y2={originY + ((originY - B_px.y) / (originX - B_px.x)) * (svgW - 20 - originX)}
              stroke="#10b981"
              strokeWidth="1.5"
            />
            {isVirtualImage && (
              <line
                x1={B_px.x}
                y1={B_px.y}
                x2={Bprime_px.x}
                y2={Bprime_px.y}
                stroke="#10b981"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            )}

            {/* Image Arrow A'B' */}
            {!isAtInfinity && (
              <g>
                <line
                  x1={Aprime_px.x}
                  y1={Aprime_px.y}
                  x2={Bprime_px.x}
                  y2={Bprime_px.y}
                  stroke={isVirtualImage ? '#f59e0b' : '#ec4899'}
                  strokeWidth="3"
                  strokeDasharray={isVirtualImage ? '4 3' : 'none'}
                />
                <circle
                  cx={Bprime_px.x}
                  cy={Bprime_px.y}
                  r={4}
                  fill={isVirtualImage ? '#f59e0b' : '#ec4899'}
                />
                <text
                  x={Aprime_px.x + 4}
                  y={Aprime_px.y + (imageHeightA_prime_B_prime < 0 ? -6 : 16)}
                  className={`text-[11px] font-bold font-mono ${
                    isVirtualImage ? 'fill-amber-400' : 'fill-pink-400'
                  }`}
                >
                  A'
                </text>
                <text
                  x={Bprime_px.x + 6}
                  y={Bprime_px.y + 4}
                  className={`text-[11px] font-bold font-mono ${
                    isVirtualImage ? 'fill-amber-400' : 'fill-pink-400'
                  }`}
                >
                  B'
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Live Calculation Bar */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Position Objet OA</div>
            <div className="text-white font-bold">{objectPositionOA.toFixed(1)} cm</div>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Position Image OA'</div>
            <div className="text-pink-400 font-bold">
              {isAtInfinity ? '± ∞' : `${imagePositionOA_prime.toFixed(1)} cm`}
            </div>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Grandissement γ</div>
            <div className="text-emerald-400 font-bold">
              {isAtInfinity ? '—' : gamma.toFixed(2)}
            </div>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Vergence C = 1/f'</div>
            <div className="text-sky-400 font-bold">{(100 / focalLength).toFixed(1)} δ (dioptries)</div>
          </div>
        </div>
      </div>

      {/* Sliders Deck */}
      <div className="p-6 bg-slate-50 dark:bg-slate-950/40 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Position de l'objet A (OA)</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{objectPositionOA} cm</span>
          </div>
          <input
            type="range"
            min="-35"
            max="-3"
            value={objectPositionOA}
            onChange={(e) => setObjectPositionOA(+e.target.value)}
            className="w-full accent-sky-600 cursor-pointer"
          />
          <p className="text-[11px] text-slate-500 mt-1">Glissez avant F (-10cm) pour former une image réelle ou après F pour une loupe.</p>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Distance focale de la lentille (f')</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{focalLength} cm</span>
          </div>
          <input
            type="range"
            min="6"
            max="18"
            value={focalLength}
            onChange={(e) => setFocalLength(+e.target.value)}
            className="w-full accent-sky-600 cursor-pointer"
          />
          <p className="text-[11px] text-slate-500 mt-1">Distance OF' = OF = f'</p>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Hauteur de l'objet (AB)</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{objectHeightAB} cm</span>
          </div>
          <input
            type="range"
            min="1"
            max="7"
            value={objectHeightAB}
            onChange={(e) => setObjectHeightAB(+e.target.value)}
            className="w-full accent-sky-600 cursor-pointer"
          />
          <p className="text-[11px] text-slate-500 mt-1">Taille du segment objet perpendiculaire à l'axe</p>
        </div>
      </div>

      {/* Descartes Formula Recap */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-sky-50/50 dark:bg-sky-950/20 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
          <span>
            Formule de Descartes vérifiée :{' '}
            <code className="font-mono bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 font-bold">
              1/OA' - 1/OA = 1/{imagePositionOA_prime.toFixed(1)} - 1/({objectPositionOA}) = {(1/focalLength).toFixed(3)} = 1/{focalLength}
            </code>
          </span>
        </div>
      </div>
    </div>
  );
};
