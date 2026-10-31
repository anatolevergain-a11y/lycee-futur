import React from 'react';
import { UserProgress } from '../types';
import { BADGES_LIST } from '../data/flashcards';
import { CURRICULUM_CHAPTERS } from '../data/curriculum';
import { Award, Zap, Flame, Trophy, CheckCircle, BookOpen, Clock, Calendar } from 'lucide-react';

interface StudentProfileProps {
  progress: UserProgress;
  onResetProgress: () => void;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({
  progress,
  onResetProgress
}) => {
  // Rank calculations
  const getRank = (xp: number) => {
    if (xp < 100) return { title: 'Apprenti Scientifique', nextXp: 100, progressPercent: (xp / 100) * 100 };
    if (xp < 300) return { title: 'Chercheur en Herbe', nextXp: 300, progressPercent: ((xp - 100) / 200) * 100 };
    if (xp < 600) return { title: 'As des Épreuves', nextXp: 600, progressPercent: ((xp - 300) / 300) * 100 };
    if (xp < 1000) return { title: 'Major de Promotion', nextXp: 1000, progressPercent: ((xp - 600) / 400) * 100 };
    return { title: 'Légende du Bac Scientifique', nextXp: xp, progressPercent: 100 };
  };

  const rank = getRank(progress.xp);

  // Subject completion stats
  const getSubjectStats = (subId: 'maths' | 'physique-chimie' | 'svt') => {
    const chapters = CURRICULUM_CHAPTERS.filter((c) => c.subjectId === subId);
    let completedCount = 0;
    chapters.forEach((c) => {
      const st = progress.completedChapters[c.id];
      if (st && (st.courseRead || (st.quizScore ?? 0) >= 60)) {
        completedCount++;
      }
    });
    return {
      total: chapters.length,
      completed: completedCount,
      percent: chapters.length > 0 ? Math.round((completedCount / chapters.length) * 100) : 0
    };
  };

  const mathStats = getSubjectStats('maths');
  const pcStats = getSubjectStats('physique-chimie');
  const svtStats = getSubjectStats('svt');

  // Flashcard stats
  const masteredCards = Object.values(progress.flashcardBox).filter((b) => b >= 4).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
          <span>ESPACE PERSONNEL</span>
          <span aria-hidden="true">·</span>
          <span>TABLEAU DE BORD DE PROGRESSION & TROPHÉES</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
          Profil & Statistiques d'Apprentissage
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Suivez votre avancée dans les programmes officiels, vos points d'XP et vos trophées débloqués.
        </p>
      </div>

      {/* Main KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* XP Card */}
        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider">Points d'XP</span>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">
            {progress.xp} <span className="text-xs font-normal text-slate-400">XP</span>
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            Rang actuel : <strong className="text-sky-600 dark:text-sky-400">{rank.title}</strong>
          </div>
        </div>

        {/* Streak Card */}
        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider">Série de travail</span>
            <Flame className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">
            {progress.streakDays} <span className="text-xs font-normal text-slate-400">jours</span>
          </div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
            Actif aujourd'hui !
          </div>
        </div>

        {/* Chapters Mastered Card */}
        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider">Chapitres étudiés</span>
            <BookOpen className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">
            {Object.keys(progress.completedChapters).length}{' '}
            <span className="text-xs font-normal text-slate-400">/ {CURRICULUM_CHAPTERS.length}</span>
          </div>
          <div className="text-[11px] text-slate-500">
            Sur les programmes de Terminale
          </div>
        </div>

        {/* Flashcards in Box 4 */}
        <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-1 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider">Fiches en Boîte 4</span>
            <Trophy className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-black font-mono text-slate-900 dark:text-white">
            {masteredCards} <span className="text-xs font-normal text-slate-400">fiches</span>
          </div>
          <div className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
            Ancrées en mémoire longue
          </div>
        </div>
      </div>

      {/* Rank Progress Bar */}
      <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2 shadow-sm">
        <div className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
          <span>Progression vers le rang supérieur : <strong>{rank.title}</strong></span>
          <span className="font-mono text-sky-600 dark:text-sky-400 font-bold">{progress.xp} / {rank.nextXp} XP</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(100, Math.max(5, rank.progressPercent))}%` }}
          />
        </div>
      </div>

      {/* Subject Progress Breakdown */}
      <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          Maîtrise du Programme par Matière
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Mathématiques', stats: mathStats, color: 'bg-sky-500' },
            { name: 'Physique-Chimie', stats: pcStats, color: 'bg-indigo-500' },
            { name: 'Sciences de la Vie et de la Terre', stats: svtStats, color: 'bg-emerald-500' }
          ].map((sub, i) => (
            <div key={i} className="p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{sub.name}</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">{sub.stats.percent}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${sub.color} rounded-full transition-all duration-300`}
                  style={{ width: `${sub.stats.percent}%` }}
                />
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                {sub.stats.completed} sur {sub.stats.total} chapitres validés
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges and Trophies Showcase */}
      <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>Trophées & Distinctions Honorifiques</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BADGES_LIST.map((badge) => {
            const isUnlocked = badge.condition(progress);
            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-xl border flex items-start gap-3 transition-all ${
                  isUnlocked
                    ? 'border-amber-300 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20 opacity-60'
                }`}
              >
                <div className="text-2xl shrink-0 p-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                  {badge.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{badge.title}</span>
                    {isUnlocked && <CheckCircle className="w-3.5 h-3.5 text-emerald-500 inline" />}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                    {badge.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset progress safety button */}
      <div className="pt-4 flex justify-between items-center text-xs text-slate-400">
        <span>Toutes vos données de progression sont sauvegardées localement dans votre navigateur.</span>
        <button
          onClick={onResetProgress}
          className="text-xs text-rose-500 hover:text-rose-700 underline"
        >
          Réinitialiser ma progression
        </button>
      </div>
    </div>
  );
};
