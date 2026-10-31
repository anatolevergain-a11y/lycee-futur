import React, { useState } from 'react';
import { Flame, Waves, Activity, Info, Droplet } from 'lucide-react';

interface SubductionSimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

export const SubductionSim: React.FC<SubductionSimProps> = ({ onGainXp }) => {
  const [slabAngle, setSlabAngle] = useState<number>(45); // 30 to 70 deg
  const [plateAge, setPlateAge] = useState<number>(80); // 20 to 120 Ma (older = denser)
  const [hydrationLevel, setHydrationLevel] = useState<number>(85); // 40 to 100%
  const [showSeismicPlane, setShowSeismicPlane] = useState<boolean>(true);
  const [showDehydration, setShowDehydration] = useState<boolean>(true);
  const [showMagmaAscent, setShowMagmaAscent] = useState<boolean>(true);

  // Density calculation: older plate cools down and becomes denser than asthenosphere (3.25 g/cm3)
  const lithoDensity = 3.0 + (plateAge / 120) * 0.35; // 3.05 to 3.35 g/cm3
  const isUnstable = lithoDensity > 3.25;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
      {/* Simulation Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span>SVT TERMINALE SPÉ</span>
            <span aria-hidden="true">·</span>
            <span>SIMULATEUR DE GÉODYNAMIQUE & SUBDUCTION</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Zone de Subduction, Plan de Wadati-Benioff et Magmatisme
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-500">Stabilité gravitaire :</span>
          <span className={`font-semibold ${isUnstable ? 'text-rose-500' : 'text-amber-500'}`}>
            {isUnstable ? 'Instable (Plongeante, d > 3,25)' : 'Flottante (d ≤ 3,25)'}
          </span>
        </div>
      </div>

      {/* Geological Cross-Section Visual Stage */}
      <div className="p-6 bg-slate-950 text-white relative">
        <div className="relative w-full h-80 bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
          <svg viewBox="0 0 600 320" className="w-full h-full">
            <defs>
              <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="mantleWedge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#854d0e" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Ocean Water on Left */}
            <rect x="0" y="30" width="220" height="40" fill="url(#oceanGrad)" />
            <text x="50" y="52" className="fill-sky-200 text-[10px] font-sans">
              Océan Pacifique
            </text>

            {/* Overriding Continental Plate on Right */}
            <path
              d="M 220 70 L 600 70 L 600 130 L 290 130 Z"
              fill="#475569"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            {/* Continental Mountain/Volcanic Arc Profile */}
            <path
              d="M 220 70 Q 250 68 280 50 Q 330 35 370 20 Q 385 10 400 30 Q 440 60 480 68 L 600 70"
              fill="#64748b"
              opacity="0.8"
            />
            <text x="430" y="55" className="fill-slate-200 text-[10px] font-semibold">
              Croûte Continentale (Granite)
            </text>

            {/* Explosive Volcano Top */}
            <polygon points="385,15 400,32 370,32" fill="#ef4444" />
            {showMagmaAscent && (
              <g>
                {/* Smoke / Eruption cloud */}
                <circle cx="385" cy="5" r="8" fill="#94a3b8" opacity="0.6" />
                <circle cx="392" cy="0" r="6" fill="#cbd5e1" opacity="0.7" />
                <text x="360" y="-8" className="fill-rose-400 text-[9px] font-bold font-mono">
                  Volcanisme explosif (Andésite)
                </text>
              </g>
            )}

            {/* Oceanic Trench (Fosse océanique) */}
            <path
              d="M 0 70 L 190 70 Q 210 75 220 95 L 340 310"
              fill="none"
              stroke="#0284c7"
              strokeWidth="4"
            />
            <text x="140" y="95" className="fill-sky-400 text-[9px] font-bold font-mono">
              Fosse océanique
            </text>

            {/* Subducting Lithospheric Slab (Descending Oceanic Plate) */}
            <path
              d="M 0 70 L 190 70 Q 215 76 225 100 L 350 320 L 310 320 L 180 120 Q 170 100 0 100 Z"
              fill="#1e293b"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <text x="50" y="118" className="fill-sky-300 text-[10px] font-medium">
              Lithosphère océanique plongeante (Basalte + Gabbro)
            </text>

            {/* Mantle Asthenosphere Wedge */}
            <path
              d="M 230 110 L 290 130 L 600 130 L 600 320 L 360 320 Z"
              fill="url(#mantleWedge)"
              opacity="0.4"
            />
            <text x="450" y="170" className="fill-amber-300 text-[11px] font-semibold">
              Manteau Asthénosphérique (Péridotite)
            </text>

            {/* Dehydration of subducting crust (Water droplets H2O rising) */}
            {showDehydration && (
              <g>
                <circle cx="260" cy="170" r="3" fill="#38bdf8" className="animate-pulse" />
                <circle cx="280" cy="195" r="3.5" fill="#38bdf8" className="animate-pulse" />
                <circle cx="300" cy="225" r="3" fill="#38bdf8" className="animate-pulse" />
                <text x="210" y="210" className="fill-sky-300 text-[9px] font-bold font-mono">
                  Libération H₂O (Métamorphisme HP-BT)
                </text>
              </g>
            )}

            {/* Partial Melting Zone (Fusion partielle) in mantle wedge */}
            {showMagmaAscent && (
              <g>
                <ellipse cx="370" cy="160" rx="30" ry="18" fill="#f97316" opacity="0.75" />
                <text x="330" y="155" className="fill-white text-[9px] font-bold">
                  Fusion partielle
                </text>
                <text x="330" y="167" className="fill-amber-100 text-[8px]">
                  du manteau hydraté
                </text>

                {/* Magma Conduit ascending towards volcano */}
                <path
                  d="M 370 145 Q 380 90 385 35"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3.5"
                  strokeDasharray="4 2"
                />
              </g>
            )}

            {/* Wadati-Benioff Seismic Focal Points along the slab */}
            {showSeismicPlane && (
              <g>
                {[
                  { x: 215, y: 95, depth: 15 },
                  { x: 235, y: 130, depth: 40 },
                  { x: 260, y: 175, depth: 85 },
                  { x: 285, y: 220, depth: 140 },
                  { x: 310, y: 265, depth: 210 },
                  { x: 335, y: 305, depth: 320 }
                ].map((eq, i) => (
                  <g key={i}>
                    <circle cx={eq.x} cy={eq.y} r={4.5} fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
                    <text x={eq.x + 8} y={eq.y + 3} className="fill-rose-300 text-[8px] font-mono">
                      {eq.depth} km
                    </text>
                  </g>
                ))}
                <text x="200" y="280" className="fill-rose-400 text-[10px] font-bold font-mono">
                  Plan de Wadati-Benioff (Séismes)
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Live Geodynamic Indicators */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Âge de la plaque</div>
            <div className="text-white font-bold">{plateAge} Ma (Millions d'années)</div>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Densité lithosphérique</div>
            <div className="text-sky-400 font-bold">{lithoDensity.toFixed(2)} g/cm³ (d_asthé = 3,25)</div>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Angle de plongement</div>
            <div className="text-amber-400 font-bold">{slabAngle}° (Plan Benioff)</div>
          </div>
          <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
            <div className="text-slate-400 text-[10px]">Profondeur de fusion</div>
            <div className="text-rose-400 font-bold">~ 90 - 120 km</div>
          </div>
        </div>
      </div>

      {/* Control sliders */}
      <div className="p-6 bg-slate-50 dark:bg-slate-950/40 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Âge de la croûte océanique</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{plateAge} Ma</span>
          </div>
          <input
            type="range"
            min="20"
            max="120"
            value={plateAge}
            onChange={(e) => setPlateAge(+e.target.value)}
            className="w-full accent-sky-600 cursor-pointer"
          />
          <p className="text-[11px] text-slate-500 mt-1">Plus la plaque vieillit, plus elle refroidit et devient dense.</p>
        </div>

        <div>
          <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
            <span>Angle d'inclinaison de subduction</span>
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400">{slabAngle}°</span>
          </div>
          <input
            type="range"
            min="30"
            max="65"
            value={slabAngle}
            onChange={(e) => setSlabAngle(+e.target.value)}
            className="w-full accent-sky-600 cursor-pointer"
          />
          <p className="text-[11px] text-slate-500 mt-1">Pente du plan de Benioff</p>
        </div>

        <div className="flex flex-col justify-center space-y-2">
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showSeismicPlane}
              onChange={(e) => setShowSeismicPlane(e.target.checked)}
              className="rounded accent-sky-600"
            />
            <span>Foyers sismiques de Wadati-Benioff</span>
          </label>
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showDehydration}
              onChange={(e) => setShowDehydration(e.target.checked)}
              className="rounded accent-sky-600"
            />
            <span>Déshydratation des minéraux (H₂O)</span>
          </label>
          <label className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showMagmaAscent}
              onChange={(e) => setShowMagmaAscent(e.target.checked)}
              className="rounded accent-sky-600"
            />
            <span>Fusion partielle & Volcanisme</span>
          </label>
        </div>
      </div>
    </div>
  );
};
