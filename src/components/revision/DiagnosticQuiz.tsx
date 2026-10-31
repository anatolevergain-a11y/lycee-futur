import React, { useState } from 'react';
import { UserProgress } from '../../types';
import { Target, CheckCircle, ArrowRight, Sparkles, BookOpen, RotateCcw } from 'lucide-react';

interface DiagnosticQuizProps {
  progress: UserProgress;
  onSavePlan: (plan: { weakChapters: string[]; suggestedFocus: string; generatedAt: string }) => void;
  onGainXp: (amount: number, reason: string) => void;
}

interface DiagnosticQuestion {
  id: string;
  subject: 'maths' | 'physique-chimie' | 'svt';
  topic: string;
  chapterTitle: string;
  question: string;
  options: string[];
  correctIndex: number;
}

const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'd-1',
    subject: 'maths',
    topic: 'TVI et Stricte Monotonie',
    chapterTitle: 'Dérivation, Convexité et TVI',
    question: 'Pour démontrer qu\'une équation f(x) = k admet une UNIQUE solution sur [a, b], quelle condition est requise en plus de la continuité ?',
    options: [
      'f doit être strictement monotone sur [a, b]',
      'f doit être paire ou impaire',
      'f doit être convexe sur [a, b]',
      'f doit s\'annuler en a et b'
    ],
    correctIndex: 0
  },
  {
    id: 'd-2',
    subject: 'maths',
    topic: 'Croissances comparées logarithme',
    chapterTitle: 'La Fonction Logarithme Népérien',
    question: 'Que vaut lim_{x -> +∞} (ln x) / x² ?',
    options: ['+∞', '1', '0', 'N\'existe pas'],
    correctIndex: 2
  },
  {
    id: 'd-3',
    subject: 'physique-chimie',
    topic: 'Stœchiométrie à l\'équivalence',
    chapterTitle: 'Dosage par Titrage Acido-Basique & pH-métrie',
    question: 'Si on titre un volume V_A = 20 mL d\'acide par de la soude C_B = 0,10 mol/L avec V_E = 10 mL, que vaut C_A ?',
    options: ['0,050 mol/L', '0,10 mol/L', '0,20 mol/L', '0,50 mol/L'],
    correctIndex: 0
  },
  {
    id: 'd-4',
    subject: 'physique-chimie',
    topic: 'Lois de Newton & Balistique',
    chapterTitle: 'Mouvement dans un Champ de Pesanteur Uniforme (Balistique)',
    question: 'En négligeant la résistance de l\'air, quelle est la trajectoire d\'un projectile lancé avec une vitesse v₀ non verticale ?',
    options: ['Une droite', 'Une parabole', 'Une ellipse', 'Une hyperbole'],
    correctIndex: 1
  },
  {
    id: 'd-5',
    subject: 'svt',
    topic: 'Code Génétique & Codons',
    chapterTitle: 'Expression du Patrimoine Génétique & Traduction',
    question: 'Quelle est la particularité d\'une mutation « silencieuse » de l\'ADN ?',
    options: [
      'Elle introduit un codon STOP',
      'Elle modifie la séquence d\'acides aminés de la protéine',
      'Elle ne modifie aucun acide aminé grâce à la dégénérescence du code',
      'Elle détruit le ribosome'
    ],
    correctIndex: 2
  },
  {
    id: 'd-6',
    subject: 'svt',
    topic: 'Magmatisme de Subduction',
    chapterTitle: 'La Dynamique de la Lithosphère & Zones de Subduction',
    question: 'Quelle est la cause directe de la fusion partielle de la péridotite en zone de subduction ?',
    options: [
      'Une hausse brutale de température',
      'L\'hydratation du manteau par l\'eau issue de la déshydratation de la plaque plongeante',
      'Une décompression adiabatique sans eau',
      'L\'attraction gravitationnelle lunaire'
    ],
    correctIndex: 1
  }
];

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({
  progress,
  onSavePlan,
  onGainXp
}) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelect = (qId: string, optIdx: number) => {
    if (isCompleted) return;
    setAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleFinish = () => {
    const wrongChapters: string[] = [];
    let mathScore = 0;
    let pcScore = 0;
    let svtScore = 0;

    DIAGNOSTIC_QUESTIONS.forEach((q) => {
      const isOk = answers[q.id] === q.correctIndex;
      if (!isOk) {
        if (!wrongChapters.includes(q.chapterTitle)) {
          wrongChapters.push(q.chapterTitle);
        }
      } else {
        if (q.subject === 'maths') mathScore++;
        if (q.subject === 'physique-chimie') pcScore++;
        if (q.subject === 'svt') svtScore++;
      }
    });

    let suggested = 'Profil équilibré : consolidez les exercices types Bac.';
    if (mathScore <= 1 && mathScore <= pcScore && mathScore <= svtScore) {
      suggested = 'Priorité d\'étude : Renforcez l\'analyse mathématique (TVI et limites logarithmiques).';
    } else if (pcScore <= 1 && pcScore <= mathScore && pcScore <= svtScore) {
      suggested = 'Priorité d\'étude : Pratiquez les simulations de titrage acido-basique et les bilans newtoniens.';
    } else if (svtScore <= 1) {
      suggested = 'Priorité d\'étude : Révisez la génétique moléculaire et le schéma bilan de subduction.';
    }

    const plan = {
      weakChapters: wrongChapters,
      suggestedFocus: suggested,
      generatedAt: new Date().toLocaleDateString('fr-FR')
    };

    setIsCompleted(true);
    onSavePlan(plan);
    onGainXp(60, 'Diagnostic personnalisé de positionnement complété');
  };

  const resetDiagnostic = () => {
    setAnswers({});
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
          <span>DIAGNOSTIC D'APPRENTISSAGE</span>
          <span aria-hidden="true">·</span>
          <span>POSITIONNEMENT & RECOMMANDATIONS SUR-MESURE</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
          Test de Positionnement Personnalisé
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-2xl">
          Évaluez vos compétences scientifiques en 6 questions ciblées pour générer votre feuille de route de révision sur-mesure.
        </p>
      </div>

      {!isCompleted ? (
        <div className="space-y-4">
          {DIAGNOSTIC_QUESTIONS.map((q, qIdx) => (
            <div
              key={q.id}
              className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 shadow-sm"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold uppercase text-sky-600 dark:text-sky-400">
                  {q.subject === 'maths' ? 'Maths' : q.subject === 'physique-chimie' ? 'Physique-Chimie' : 'SVT'}
                </span>
                <span>Question {qIdx + 1} / {DIAGNOSTIC_QUESTIONS.length}</span>
              </div>

              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                {q.question}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelect(q.id, oIdx)}
                    className={`p-3 text-left text-xs rounded-lg border transition-all ${
                      answers[q.id] === oIdx
                        ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 font-semibold'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-end pt-2">
            <button
              onClick={handleFinish}
              disabled={Object.keys(answers).length < DIAGNOSTIC_QUESTIONS.length}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
            >
              <Target className="w-4 h-4" />
              <span>Générer mon plan de révision (+60 XP)</span>
            </button>
          </div>
        </div>
      ) : (
        /* Results and Generated Roadmap */
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Diagnostic validé avec succès
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Votre Programme de Révision Recommandé
              </h3>
            </div>
            <button
              onClick={resetDiagnostic}
              className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Repasser le test</span>
            </button>
          </div>

          {/* Strategic Advice */}
          <div className="p-4 bg-sky-50 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/40 rounded-xl text-xs text-slate-800 dark:text-slate-200 leading-relaxed space-y-1">
            <div className="font-bold text-sky-900 dark:text-sky-300 flex items-center gap-1.5 text-sm">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Diagnostic Stratégique :</span>
            </div>
            <p>{progress.personalizedPlan?.suggestedFocus}</p>
          </div>

          {/* Recommended Chapters to review */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
              Chapitres prioritaires à consolider en premier :
            </h4>
            {progress.personalizedPlan?.weakChapters && progress.personalizedPlan.weakChapters.length > 0 ? (
              <div className="space-y-2">
                {progress.personalizedPlan.weakChapters.map((chapTitle, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-sky-500" />
                      <span className="font-semibold text-slate-900 dark:text-white">{chapTitle}</span>
                    </div>
                    <span className="text-rose-500 font-mono font-medium">Recommandé</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-900 dark:text-emerald-200 font-medium">
                Excellent niveau d'ensemble ! Tous les concepts testés sont maîtrisés. Continuez avec les exercices approfondis types Bac.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
