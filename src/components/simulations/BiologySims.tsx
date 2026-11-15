import React, { useState } from 'react';
import { Activity, Play, CheckCircle2, HeartPulse, Dna, Leaf } from 'lucide-react';

interface SimProps {
  onGainXp?: (amount: number, reason: string) => void;
}

// 1. MYOTATIC REFLEX SIMULATOR
export const MyotaticReflexSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [isStimulated, setIsStimulated] = useState<boolean>(false);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  const handleStrike = () => {
    setIsStimulated(true);
    setTimeout(() => {
      setIsStimulated(false);
    }, 1500);

    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Réflexe Myotatique : fuseau neuromusculaire et motoneurone');
      setHasCompleted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">SVT · Neurophysiologie</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Arc Réflexe Myotatique Monosynaptique (Rotulien)</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <p className="text-slate-600 dark:text-slate-400">
            Percutez le tendon rotulien pour déclencher l'étirement du quadriceps et observer la transmission du message nerveux.
          </p>

          <button
            onClick={handleStrike}
            disabled={isStimulated}
            className="w-full py-3 bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Activity className="w-4 h-4" />
            <span>Percuter le tendon rotulien</span>
          </button>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 text-[11px]">
            <div><strong>1. Fuseau neuromusculaire :</strong> Récepteur sensible à l'étirement.</div>
            <div><strong>2. Fibre Ia :</strong> Conduction centripète vers la corne dorsale.</div>
            <div><strong>3. Synapse centrale :</strong> Monosynaptique excitatrice.</div>
            <div><strong>4. Motoneurone α :</strong> Commande motrice de contraction.</div>
          </div>
        </div>

        {/* Visual Reflex Animation */}
        <div className="lg:col-span-2 bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center">
          <div className="relative w-64 h-44 flex items-center justify-center">
            {/* Leg representation */}
            <div className="w-8 h-28 bg-amber-200/80 rounded-t-lg relative">
              <span className="text-[10px] text-slate-700 font-bold -top-4 absolute">Quadriceps</span>
              {/* Lower leg that kicks */}
              <div
                style={{
                  transformOrigin: 'top center',
                  transform: isStimulated ? 'rotate(-35deg)' : 'rotate(0deg)'
                }}
                className="w-7 h-24 bg-amber-300/80 rounded-b-lg absolute top-24 left-0 transition-transform duration-300 shadow-md"
              >
                <div className="w-10 h-3 bg-slate-600 absolute bottom-0 rounded-r" />
              </div>
            </div>

            {/* Nerve impulses */}
            {isStimulated && (
              <div className="absolute right-4 top-4 p-2 bg-emerald-500/20 border border-emerald-400 rounded text-emerald-400 text-xs font-mono animate-pulse">
                ⚡ Potentiel d'action (v ≈ 75 m/s)
              </div>
            )}
          </div>
          <span className="text-xs text-slate-400 font-mono mt-2">
            {isStimulated ? 'Contraction réflexe du quadriceps (extension de la jambe)' : 'En attente de percussion'}
          </span>
        </div>
      </div>
    </div>
  );
};

// 2. BLOOD GLUCOSE SIMULATOR
export const BloodGlucoseSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [glycemia, setGlycemia] = useState<number>(1.00); // g/L
  const [hormoneState, setHormoneState] = useState<'insuline' | 'glucagon' | 'equilibre'>('equilibre');
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);

  const handleMeal = () => {
    setGlycemia(1.65);
    setHormoneState('insuline');
    setTimeout(() => {
      setGlycemia(1.00);
      setHormoneState('equilibre');
    }, 2000);
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Régulation de la Glycémie : insuline et stockage hépatique');
      setHasCompleted(true);
    }
  };

  const handleSport = () => {
    setGlycemia(0.70);
    setHormoneState('glucagon');
    setTimeout(() => {
      setGlycemia(1.00);
      setHormoneState('equilibre');
    }, 2000);
    if (!hasCompleted && onGainXp) {
      onGainXp(30, 'Simulation Régulation de la Glycémie : glucagon et glycogénolyse');
      setHasCompleted(true);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">SVT · Endocrinologie</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Boucle de Régulation Homéostasique de la Glycémie</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <div className="flex gap-2">
            <button
              onClick={handleMeal}
              className="flex-1 py-2 px-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors"
            >
              Repas Glucidique (+ Sucre)
            </button>
            <button
              onClick={handleSport}
              className="flex-1 py-2 px-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition-colors"
            >
              Effort Physique (- Sucre)
            </button>
          </div>

          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 font-mono">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Glycémie actuelle :</span>
              <span className={`text-base font-bold ${glycemia > 1.2 ? 'text-amber-500' : glycemia < 0.8 ? 'text-rose-500' : 'text-emerald-500'}`}>
                {glycemia.toFixed(2)} g/L
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Sécrétion active :</span>
              <span className="font-bold text-sky-600">
                {hormoneState === 'insuline' ? 'Insuline (Cellules β)' : hormoneState === 'glucagon' ? 'Glucagon (Cellules α)' : 'Équilibre basale'}
              </span>
            </div>
          </div>
        </div>

        {/* Graphic Organ Flow */}
        <div className="lg:col-span-2 bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between items-center text-center">
          <div className="flex justify-around items-center w-full max-w-md my-auto">
            {/* Pancreas */}
            <div className="p-3 bg-yellow-950/40 border border-yellow-500/40 rounded-xl text-yellow-300 text-xs">
              <span className="font-bold block">Pancréas endocrine</span>
              <span className="text-[10px] text-slate-400">Îlots de Langerhans</span>
            </div>

            {/* Bloodstream arrow */}
            <div className="text-xs font-mono text-slate-400">
              {hormoneState === 'insuline' && <span className="text-emerald-400 font-bold">→ Insuline →</span>}
              {hormoneState === 'glucagon' && <span className="text-amber-400 font-bold">→ Glucagon →</span>}
              {hormoneState === 'equilibre' && <span>↔ Normoglycémie (1 g/L) ↔</span>}
            </div>

            {/* Liver */}
            <div className="p-3 bg-rose-950/40 border border-rose-500/40 rounded-xl text-rose-300 text-xs">
              <span className="font-bold block">Foie (Tissu cible)</span>
              <span className="text-[10px] text-slate-400">
                {hormoneState === 'insuline' ? 'Glycogénogenèse' : hormoneState === 'glucagon' ? 'Glycogénolyse' : 'Stock tampon'}
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-400 font-mono mt-3">
            Consigne homéostasique : maintien de la glycémie à 1,00 g/L (5,5 mmol/L).
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. MITOSIS SIMULATOR
export const CellCycleMitosisSim: React.FC<SimProps> = ({ onGainXp }) => {
  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const phases = ['Interphase', 'Prophase', 'Métaphase', 'Anaphase', 'Télophase'];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">SVT · Biologie Cellulaire</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Les 4 Phases de la Mitose Cellulaire</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-2">Choisir l'étape :</span>
            <div className="flex flex-col gap-1.5">
              {phases.map((ph, idx) => (
                <button
                  key={ph}
                  onClick={() => setPhaseIndex(idx)}
                  className={`p-2 rounded text-left font-semibold transition-colors ${
                    phaseIndex === idx ? 'bg-sky-600 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {idx === 0 ? '0. ' : `${idx}. `}{ph}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Phase visual display */}
        <div className="lg:col-span-2 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-center items-center text-center">
          <div className="w-48 h-48 rounded-full border-2 border-slate-600 flex items-center justify-center relative p-3">
            {phaseIndex === 0 && (
              <div className="text-xs text-slate-400">
                <span className="text-sky-400 font-bold block mb-1">Interphase (Phase S)</span>
                Duplication de l'ADN, chromatine décondensée dans le noyau.
              </div>
            )}
            {phaseIndex === 1 && (
              <div className="text-xs text-slate-400">
                <span className="text-amber-400 font-bold block mb-1">Prophase</span>
                Condensation des chromosomes à 2 chromatides, disparition de l'enveloppe nucléaire.
              </div>
            )}
            {phaseIndex === 2 && (
              <div className="text-xs text-slate-400">
                <span className="text-emerald-400 font-bold block mb-1">Métaphase</span>
                Alignement des centromères sur la plaque équatoriale du fuseau mitotique.
              </div>
            )}
            {phaseIndex === 3 && (
              <div className="text-xs text-slate-400">
                <span className="text-rose-400 font-bold block mb-1">Anaphase</span>
                Rupture des centromères et migration des chromatides sœurs vers les 2 pôles.
              </div>
            )}
            {phaseIndex === 4 && (
              <div className="text-xs text-slate-400">
                <span className="text-violet-400 font-bold block mb-1">Télophase</span>
                Décondensation des chromosomes et cytodiérèse : formation de 2 cellules filles identiques à 2n chromosomes.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
