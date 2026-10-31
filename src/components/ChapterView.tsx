import React, { useState } from 'react';
import { Chapter, UserProgress } from '../types';
import { MathFormula, FormattedMathText } from './common/MathFormula';
import {
  BookOpen,
  HelpCircle,
  FileCheck2,
  CheckCircle,
  ArrowLeft,
  Lightbulb,
  AlertTriangle,
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FlaskConical
} from 'lucide-react';

interface ChapterViewProps {
  chapter: Chapter;
  progress: UserProgress;
  onBack: () => void;
  onOpenSimulation: (simulationId: string) => void;
  onUpdateChapterProgress: (
    chapterId: string,
    updates: { courseRead?: boolean; exerciseCompletedId?: string; quizScore?: number }
  ) => void;
  onGainXp: (amount: number, reason: string) => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  progress,
  onBack,
  onOpenSimulation,
  onUpdateChapterProgress,
  onGainXp
}) => {
  const [activeTab, setActiveTab] = useState<'course' | 'exercises' | 'quiz'>('course');

  // Exercise state: revealed hints and revealed solutions
  const [revealedHints, setRevealedHints] = useState<Record<string, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const chapterStatus = progress.completedChapters[chapter.id] || {
    courseRead: false,
    exercisesCompleted: [],
    quizScore: undefined
  };

  const toggleHint = (qKey: string, maxHints: number) => {
    setRevealedHints((prev) => {
      const current = prev[qKey] || 0;
      const next = current < maxHints ? current + 1 : current;
      return { ...prev, [qKey]: next };
    });
  };

  const toggleSolution = (qKey: string, exId: string) => {
    const isNowRevealed = !revealedSolutions[qKey];
    setRevealedSolutions((prev) => ({ ...prev, [qKey]: isNowRevealed }));

    if (isNowRevealed && !chapterStatus.exercisesCompleted.includes(exId)) {
      onUpdateChapterProgress(chapter.id, { exerciseCompletedId: exId });
      onGainXp(40, `Exercice corrigé étudié (${chapter.title})`);
    }
  };

  const handleMarkCourseRead = () => {
    if (!chapterStatus.courseRead) {
      onUpdateChapterProgress(chapter.id, { courseRead: true });
      onGainXp(50, `Cours maîtrisé : ${chapter.title}`);
    }
  };

  const handleSelectQuizAnswer = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitQuiz = () => {
    let scoreCount = 0;
    chapter.quiz.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        scoreCount++;
      }
    });

    const percent = Math.round((scoreCount / chapter.quiz.length) * 100);
    setQuizSubmitted(true);
    onUpdateChapterProgress(chapter.id, { quizScore: percent });
    onGainXp(percent, `Score Quiz ${percent}% (${chapter.title})`);
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setQuizSubmitted(false);
  };

  const subjectLabel =
    chapter.subjectId === 'maths'
      ? 'Mathématiques'
      : chapter.subjectId === 'physique-chimie'
      ? 'Physique-Chimie'
      : 'SVT';

  return (
    <div className="space-y-6">
      {/* Top back button and title */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour à la liste des cours</span>
        </button>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="uppercase text-sky-600 dark:text-sky-400 font-bold">{subjectLabel}</span>
              <span aria-hidden="true">·</span>
              <span>Classe de {chapter.gradeLevel.toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span>Code officiel : {chapter.officialCode}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {chapter.title}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl">
              {chapter.description}
            </p>
          </div>

          {/* Quick Simulation Launcher Button if Available */}
          {chapter.simulationId && (
            <button
              onClick={() => onOpenSimulation(chapter.simulationId!)}
              className="px-4 py-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
            >
              <FlaskConical className="w-4 h-4" />
              <span>Ouvrir la Simulation Laboratoire</span>
            </button>
          )}
        </div>
      </div>

      {/* Tabs navigation: 3 Clean Segments */}
      <div className="flex items-center border-b border-slate-200 dark:border-slate-800 gap-6 text-sm font-medium">
        <button
          onClick={() => setActiveTab('course')}
          className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'course'
              ? 'border-sky-600 text-sky-600 dark:text-sky-400 font-bold'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>1. Cours & Synthèse Officielle</span>
          {chapterStatus.courseRead && (
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 inline ml-1" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('exercises')}
          className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'exercises'
              ? 'border-sky-600 text-sky-600 dark:text-sky-400 font-bold'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FileCheck2 className="w-4 h-4" />
          <span>2. Exercices Types Bac Corrigés ({chapter.exercises.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'quiz'
              ? 'border-sky-600 text-sky-600 dark:text-sky-400 font-bold'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>3. Auto-Évaluation Express</span>
          {chapterStatus.quizScore !== undefined && (
            <span className="text-xs font-mono text-emerald-500 font-semibold ml-1">
              ({chapterStatus.quizScore}%)
            </span>
          )}
        </button>
      </div>

      {/* Tab 1: Course & Key Formulas */}
      {activeTab === 'course' && (
        <div className="space-y-6">
          {/* Summary Highlights */}
          <div className="p-4 bg-sky-50/70 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40 rounded-xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300 mb-2">
              L'essentiel du programme en 4 points clés
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {chapter.summaryHighlights.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold font-mono">0{i + 1}.</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Formulas Section */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
              Formules et théorèmes cardinaux à retenir
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {chapter.keyFormulas.map((f, i) => (
                <div
                  key={i}
                  className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl"
                >
                  <div className="text-xs font-semibold text-slate-500 mb-1">{f.label}</div>
                  <div className="my-1.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-sky-700 dark:text-sky-300">
                    <MathFormula formula={f.formula} />
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                    <FormattedMathText text={f.explanation} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Course Sections */}
          <div className="space-y-6">
            {chapter.courseSections.map((sec, sIdx) => (
              <div
                key={sIdx}
                className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {sec.title}
                </h3>
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {sec.example && (
                  <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
                    <span className="font-bold text-slate-900 dark:text-slate-100">
                      {sec.example.title} :{' '}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 font-mono">
                      {sec.example.text}
                    </span>
                  </div>
                )}

                {sec.proTip && (
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-900/40 text-xs flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-amber-900 dark:text-amber-200">
                      <strong>Conseil méthodologique Bac : </strong>
                      {sec.proTip}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mark as read action */}
          <div className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-600 dark:text-slate-400">
              Avez-vous bien assimilé les notions de ce cours ?
            </span>
            <button
              onClick={handleMarkCourseRead}
              className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
                chapterStatus.courseRead
                  ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-sky-600 hover:bg-sky-700 text-white'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{chapterStatus.courseRead ? 'Cours validé (+50 XP)' : 'Marquer comme lu (+50 XP)'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Solved Exercises with progressive hints and official scoring */}
      {activeTab === 'exercises' && (
        <div className="space-y-6">
          {chapter.exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm"
            >
              {/* Exercise Header */}
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-950/30">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-sky-600 dark:text-sky-400">{exercise.difficulty}</span>
                    <span aria-hidden="true">·</span>
                    <span>Barème : {exercise.points} points</span>
                    {exercise.themeLabel && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 px-2 py-0.5 rounded-md border border-violet-200 dark:border-violet-800/60">
                          {exercise.themeLabel}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {exercise.title}
                  </h3>
                </div>
              </div>

              {/* Context Statement */}
              <div className="p-5 bg-slate-50/20 dark:bg-slate-950/20 border-b border-slate-100 dark:border-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {exercise.context}
              </div>

              {/* Questions List */}
              <div className="p-5 space-y-6">
                {exercise.questions.map((q, qIdx) => {
                  const qKey = `${exercise.id}-${qIdx}`;
                  const currentHintLevel = revealedHints[qKey] || 0;
                  const isSolutionVisible = !!revealedSolutions[qKey];

                  return (
                    <div
                      key={qIdx}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-sm font-semibold text-slate-900 dark:text-white">
                          {q.questionText}
                        </div>
                        <span className="text-xs font-mono text-slate-500 shrink-0">
                          [{q.pointsAllocated} pts]
                        </span>
                      </div>

                      {/* Hints Section */}
                      <div className="space-y-2">
                        {currentHintLevel > 0 && (
                          <div className="p-3 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 rounded-lg space-y-1.5 text-xs text-amber-900 dark:text-amber-200">
                            {q.hints.slice(0, currentHintLevel).map((hint, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2">
                                <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                                <span>
                                  <strong>Indice {hIdx + 1} : </strong>
                                  {hint}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-3">
                          {currentHintLevel < q.hints.length && (
                            <button
                              onClick={() => toggleHint(qKey, q.hints.length)}
                              className="text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                            >
                              <Lightbulb className="w-3 h-3" />
                              <span>
                                {currentHintLevel === 0 ? 'Afficher un indice' : 'Indice suivant'}
                              </span>
                            </button>
                          )}

                          <button
                            onClick={() => toggleSolution(qKey, exercise.id)}
                            className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline ml-auto flex items-center gap-1"
                          >
                            <span>{isSolutionVisible ? 'Masquer la correction' : 'Voir le corrigé détaillé'}</span>
                            {isSolutionVisible ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Detailed Solution Accordion */}
                      {isSolutionVisible && (
                        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                            Corrigé pas à pas rédigé & barème officiel :
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
                            {q.solutionSteps.map((step, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2">
                                <span className="text-sky-500">➔</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Final Answer */}
                          <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 font-bold flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>Résultat : {q.finalAnswer}</span>
                          </div>

                          {/* Bac Trap alert if present */}
                          {q.bacTrap && (
                            <div className="p-2.5 bg-rose-50 dark:bg-rose-950/40 rounded-lg border border-rose-200 dark:border-rose-800 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2">
                              <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                              <span>
                                <strong>Le piège classique au Bac : </strong>
                                {q.bacTrap}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Interactive Self-Assessment Quiz */}
      {activeTab === 'quiz' && (
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-6 shadow-sm">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Quiz de validation : Testez vos connaissances en 2 minutes
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Répondez aux questions pour mesurer votre maîtrise de ce chapitre et gagner des points d'XP.
            </p>
          </div>

          <div className="space-y-6">
            {chapter.quiz.map((q, idx) => {
              const selectedOpt = userAnswers[q.id];
              const isCorrect = selectedOpt === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 space-y-3"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {idx + 1}. {q.question}
                  </div>

                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200';

                      if (quizSubmitted) {
                        if (oIdx === q.correctIndex) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 font-bold';
                        } else if (selectedOpt === oIdx) {
                          btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-900 dark:text-rose-200';
                        }
                      } else if (selectedOpt === oIdx) {
                        btnStyle = 'border-sky-500 bg-sky-50 dark:bg-sky-950 text-sky-900 dark:text-sky-200 font-semibold';
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleSelectQuizAnswer(q.id, oIdx)}
                          className={`w-full text-left p-3 text-xs rounded-lg border transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {quizSubmitted && oIdx === q.correctIndex && (
                            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div
                      className={`p-3 rounded-lg text-xs leading-relaxed ${
                        isCorrect
                          ? 'bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-rose-50/80 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-800'
                      }`}
                    >
                      <strong>{isCorrect ? 'Correct !' : 'Explication :'} </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quiz Action Bar */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            {!quizSubmitted ? (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(userAnswers).length < chapter.quiz.length}
                className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Valider mes réponses et calculer mon score
              </button>
            ) : (
              <div className="flex items-center gap-3 w-full justify-between">
                <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  Résultat enregistré : Score de {chapterStatus.quizScore ?? 0}%
                </div>
                <button
                  onClick={handleResetQuiz}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                >
                  Recommencer le quiz
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
