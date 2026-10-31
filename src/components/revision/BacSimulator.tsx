import React, { useState } from 'react';
import { UserProgress } from '../../types';
import { Award, Calculator, CheckCircle2, TrendingUp, Info } from 'lucide-react';

interface BacSimulatorProps {
  progress: UserProgress;
  onSaveNotes: (notes: Record<string, number>) => void;
  onGainXp: (amount: number, reason: string) => void;
}

// Official French Baccalauréat weighting (Total coefficient = 100)
// Épreuves terminales (60%):
// - Spécialité 1: Coef 16
// - Spécialité 2: Coef 16
// - Philosophie: Coef 8
// - Grand Oral: Coef 10
// - Français écrit: Coef 5 (épreuve anticipée 1ère)
// - Français oral: Coef 5 (épreuve anticipée 1ère)
// Contrôle Continu (40%):
// - Histoire-Géo: Coef 6
// - LVA: Coef 6
// - LVB: Coef 6
// - Enseignement Scientifique: Coef 6
// - EPS: Coef 6
// - Spécialité abandonnée en 1ère: Coef 8
// - EMC: Coef 2

interface ExamItem {
  id: string;
  name: string;
  coef: number;
  category: 'Épreuves Terminales (60%)' | 'Contrôle Continu (40%)';
  defaultNote: number;
}

const DEFAULT_SUBJECTS: ExamItem[] = [
  { id: 'spe1', name: 'Spécialité 1 (ex: Mathématiques)', coef: 16, category: 'Épreuves Terminales (60%)', defaultNote: 15.5 },
  { id: 'spe2', name: 'Spécialité 2 (ex: Physique-Chimie / SVT)', coef: 16, category: 'Épreuves Terminales (60%)', defaultNote: 14.5 },
  { id: 'philo', name: 'Philosophie', coef: 8, category: 'Épreuves Terminales (60%)', defaultNote: 13.0 },
  { id: 'grand_oral', name: 'Grand Oral', coef: 10, category: 'Épreuves Terminales (60%)', defaultNote: 16.0 },
  { id: 'fr_ecrit', name: 'Français Écrit (1ère)', coef: 5, category: 'Épreuves Terminales (60%)', defaultNote: 13.5 },
  { id: 'fr_oral', name: 'Français Oral (1ère)', coef: 5, category: 'Épreuves Terminales (60%)', defaultNote: 15.0 },
  { id: 'hist_geo', name: 'Histoire-Géographie', coef: 6, category: 'Contrôle Continu (40%)', defaultNote: 14.0 },
  { id: 'lva', name: 'Langue Vivante A (Anglais)', coef: 6, category: 'Contrôle Continu (40%)', defaultNote: 16.0 },
  { id: 'lvb', name: 'Langue Vivante B (Espagnol/Allemand)', coef: 6, category: 'Contrôle Continu (40%)', defaultNote: 13.5 },
  { id: 'ens_sci', name: 'Enseignement Scientifique', coef: 6, category: 'Contrôle Continu (40%)', defaultNote: 16.5 },
  { id: 'eps', name: 'Éducation Physique & Sportive (EPS)', coef: 6, category: 'Contrôle Continu (40%)', defaultNote: 14.0 },
  { id: 'spe_1ere', name: 'Spécialité suivie uniquement en 1ère', coef: 8, category: 'Contrôle Continu (40%)', defaultNote: 15.0 },
  { id: 'emc', name: 'Enseignement Moral et Civique (EMC)', coef: 2, category: 'Contrôle Continu (40%)', defaultNote: 15.0 }
];

export const BacSimulator: React.FC<BacSimulatorProps> = ({
  progress,
  onSaveNotes,
  onGainXp
}) => {
  const [notes, setNotes] = useState<Record<string, number>>(() => {
    const saved = { ...progress.bacSimulatorNotes };
    DEFAULT_SUBJECTS.forEach((sub) => {
      if (saved[sub.id] === undefined) {
        saved[sub.id] = sub.defaultNote;
      }
    });
    return saved;
  });

  const handleNoteChange = (subId: string, val: number) => {
    const clamped = Math.max(0, Math.min(20, Math.round(val * 10) / 10));
    setNotes((prev) => ({ ...prev, [subId]: clamped }));
  };

  // Compute weighted average
  let totalPoints = 0;
  let totalCoef = 0;
  DEFAULT_SUBJECTS.forEach((sub) => {
    const note = notes[sub.id] ?? sub.defaultNote;
    totalPoints += note * sub.coef;
    totalCoef += sub.coef;
  });

  const weightedAverage = totalCoef > 0 ? totalPoints / totalCoef : 0;

  // Mention calculation
  let mention = 'Sans Mention (Admis)';
  let mentionColor = 'text-slate-700 dark:text-slate-300';
  let badgeColor = 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200';

  if (weightedAverage < 10) {
    mention = 'Non Admis (Rattrapage si ≥ 8,0)';
    mentionColor = 'text-rose-600 dark:text-rose-400';
    badgeColor = 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200';
  } else if (weightedAverage >= 16) {
    mention = 'Mention Très Bien 🌟';
    mentionColor = 'text-amber-500';
    badgeColor = 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300';
  } else if (weightedAverage >= 14) {
    mention = 'Mention Bien ✨';
    mentionColor = 'text-sky-600 dark:text-sky-400';
    badgeColor = 'bg-sky-100 text-sky-900 dark:bg-sky-950 dark:text-sky-300';
  } else if (weightedAverage >= 12) {
    mention = 'Mention Assez Bien 👍';
    mentionColor = 'text-emerald-600 dark:text-emerald-400';
    badgeColor = 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300';
  }

  const handleSaveSimulation = () => {
    onSaveNotes(notes);
    onGainXp(30, 'Simulation de notes du Bac sauvegardée');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
          <span>SIMULATEUR OFFICIEL</span>
          <span aria-hidden="true">·</span>
          <span>CALCULATEUR DE MOYENNE DU BACCALAURÉAT (COEF 100)</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
          Simulateur & Stratégie du Baccalauréat
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-2xl">
          Ajustez vos estimations de notes sur les épreuves terminales et le contrôle continu pour calculer votre moyenne prévisionnelle, votre mention et optimiser votre stratégie de révision.
        </p>
      </div>

      {/* Main KPI Summary Banner */}
      <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl border border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-6">
        <div>
          <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
            Moyenne Générale Estimée du Bac
          </div>
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-4xl md:text-5xl font-black font-mono tracking-tight text-white">
              {weightedAverage.toFixed(2)}
            </span>
            <span className="text-xl text-slate-400 font-mono">/ 20</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className={`text-xs px-2.5 py-1 rounded-md font-bold ${badgeColor}`}>
              {mention}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Total : {totalPoints.toFixed(1)} / 2000 points
            </span>
          </div>
        </div>

        <div className="text-xs space-y-1.5 text-slate-300 border-l border-slate-800 pl-6 max-w-xs">
          <div className="flex justify-between">
            <span className="text-slate-400">Mention Assez Bien :</span>
            <strong className="font-mono text-emerald-400">≥ 12,0 / 20</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Mention Bien :</span>
            <strong className="font-mono text-sky-400">≥ 14,0 / 20</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Mention Très Bien :</span>
            <strong className="font-mono text-amber-400">≥ 16,0 / 20</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Félicitations du Jury :</span>
            <strong className="font-mono text-purple-400">≥ 18,0 / 20</strong>
          </div>
        </div>
      </div>

      {/* Inputs categorized by official categories */}
      {(['Épreuves Terminales (60%)', 'Contrôle Continu (40%)'] as const).map((cat) => (
        <div
          key={cat}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm"
        >
          <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {cat}
            </h3>
            <span className="text-xs text-slate-500 font-mono">
              Total coefficients : {cat.includes('60%') ? '60' : '40'}
            </span>
          </div>

          <div className="p-4 divide-y divide-slate-100 dark:divide-slate-800">
            {DEFAULT_SUBJECTS.filter((s) => s.category === cat).map((sub) => {
              const currentNote = notes[sub.id] ?? sub.defaultNote;
              return (
                <div
                  key={sub.id}
                  className="py-3 flex flex-wrap items-center justify-between gap-4"
                >
                  <div className="min-w-[200px]">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {sub.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      Coefficient : <strong>{sub.coef}</strong> (Points : {(currentNote * sub.coef).toFixed(1)})
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="0.5"
                      value={currentNote}
                      onChange={(e) => handleNoteChange(sub.id, +e.target.value)}
                      className="w-32 sm:w-44 accent-sky-600 cursor-pointer"
                    />
                    <div className="flex items-center gap-1 font-mono">
                      <input
                        type="number"
                        min="0"
                        max="20"
                        step="0.5"
                        value={currentNote}
                        onChange={(e) => handleNoteChange(sub.id, +e.target.value)}
                        className="w-14 p-1 text-center font-bold text-xs rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white"
                      />
                      <span className="text-xs text-slate-400">/20</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSaveSimulation}
          className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Enregistrer ma simulation (+30 XP)</span>
        </button>
      </div>
    </div>
  );
};
