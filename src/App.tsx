/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  GradeLevel,
  SubjectId,
  Chapter,
  UserProgress
} from './types';
import { CURRICULUM_CHAPTERS } from './data/curriculum';
import { ChapterView } from './components/ChapterView';
import { TitrationSim } from './components/simulations/TitrationSim';
import { ProjectileSim } from './components/simulations/ProjectileSim';
import { OpticsSim } from './components/simulations/OpticsSim';
import { DnaTranslationSim } from './components/simulations/DnaTranslationSim';
import { SubductionSim } from './components/simulations/SubductionSim';
import { TangentDerivativeSim } from './components/simulations/TangentDerivativeSim';
import { FlashcardDeck } from './components/revision/FlashcardDeck';
import { BacSimulator } from './components/revision/BacSimulator';
import { FormulaSheet } from './components/revision/FormulaSheet';
import { DiagnosticQuiz } from './components/revision/DiagnosticQuiz';
import { PomodoroTimer } from './components/revision/PomodoroTimer';
import { StudentProfile } from './components/StudentProfile';

import {
  BookOpen,
  FlaskConical,
  FileCheck2,
  Brain,
  User,
  Sun,
  Moon,
  Zap,
  Flame,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  Layers,
  Award,
  Search,
  Gamepad2,
  Rocket,
  Smartphone,
  Trophy,
  Film,
  Leaf,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  X,
  LayoutGrid,
  List
} from 'lucide-react';

const INITIAL_PROGRESS: UserProgress = {
  xp: 120,
  level: 1,
  streakDays: 4,
  lastStudyDate: new Date().toISOString().split('T')[0],
  completedChapters: {
    'math-term-deriv-tvi': {
      courseRead: true,
      exercisesCompleted: ['ex-math-tvi-1'],
      quizScore: 100,
      bestQuizScore: 100
    }
  },
  unlockedBadgeIds: ['b-welcome'],
  flashcardBox: {
    'fc-m1': 3,
    'fc-pc1': 2,
    'fc-svt1': 4
  },
  bacSimulatorNotes: {}
};

export default function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('lycee_futur_theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Top Nav Active Section
  const [currentSection, setCurrentSection] = useState<
    'curriculum' | 'simulations' | 'exercises' | 'revision' | 'profile'
  >('curriculum');

  // Active Subject Filter in Curriculum
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>('all');

  // Active Grade Level (2nde, 1ère, Terminale)
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('terminale');

  // Currently opened Chapter in full interactive view
  const [openedChapterId, setOpenedChapterId] = useState<string | null>(null);

  // Currently active simulation in Lab view
  const [activeSimulationId, setActiveSimulationId] = useState<string>('titration');

  // Active revision tool tab
  const [activeRevisionTab, setActiveRevisionTab] = useState<
    'flashcards' | 'pomodoro' | 'bac' | 'formulas' | 'diagnostic'
  >('flashcards');

  // Search query for curriculum
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Compact uncluttered view for curriculum (defaults to true for a cleaner, lighter experience)
  const [isCompactView, setIsCompactView] = useState<boolean>(true);

  // Active theme filter for exercises tab
  const [selectedTheme, setSelectedTheme] = useState<string>('all');

  // Exercise accordion state in exercises tab
  const [revealedExHints, setRevealedExHints] = useState<Record<string, number>>({});
  const [revealedExSolutions, setRevealedExSolutions] = useState<Record<string, boolean>>({});

  // User persistent progress
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('lycee_futur_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing progress', e);
      }
    }
    return INITIAL_PROGRESS;
  });

  // Notification toast for XP gains
  const [xpToast, setXpToast] = useState<{ amount: number; reason: string } | null>(null);

  // Sync theme with DOM
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('lycee_futur_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('lycee_futur_theme', 'light');
    }
  }, [isDarkMode]);

  // Sync progress to LocalStorage
  useEffect(() => {
    localStorage.setItem('lycee_futur_progress', JSON.stringify(progress));
  }, [progress]);

  // Gain XP handler
  const handleGainXp = (amount: number, reason: string) => {
    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + amount
    }));
    setXpToast({ amount, reason });
    setTimeout(() => {
      setXpToast(null);
    }, 3500);
  };

  // Update chapter progress
  const handleUpdateChapterProgress = (
    chapterId: string,
    updates: { courseRead?: boolean; exerciseCompletedId?: string; quizScore?: number }
  ) => {
    setProgress((prev) => {
      const existing = prev.completedChapters[chapterId] || {
        courseRead: false,
        exercisesCompleted: []
      };

      const updatedExercises = updates.exerciseCompletedId
        ? Array.from(new Set([...existing.exercisesCompleted, updates.exerciseCompletedId]))
        : existing.exercisesCompleted;

      return {
        ...prev,
        completedChapters: {
          ...prev.completedChapters,
          [chapterId]: {
            courseRead: updates.courseRead !== undefined ? updates.courseRead : existing.courseRead,
            exercisesCompleted: updatedExercises,
            quizScore: updates.quizScore !== undefined ? updates.quizScore : existing.quizScore,
            bestQuizScore:
              updates.quizScore !== undefined
                ? Math.max(existing.bestQuizScore ?? 0, updates.quizScore)
                : existing.bestQuizScore
          }
        }
      };
    });
  };

  // Update flashcard box
  const handleUpdateFlashcardBox = (cardId: string, newBox: number) => {
    setProgress((prev) => ({
      ...prev,
      flashcardBox: {
        ...prev.flashcardBox,
        [cardId]: newBox
      }
    }));
  };

  // Save Bac simulation notes
  const handleSaveBacNotes = (notes: Record<string, number>) => {
    setProgress((prev) => ({
      ...prev,
      bacSimulatorNotes: notes
    }));
  };

  // Save diagnostic plan
  const handleSavePlan = (plan: { weakChapters: string[]; suggestedFocus: string; generatedAt: string }) => {
    setProgress((prev) => ({
      ...prev,
      personalizedPlan: plan
    }));
  };

  // Reset progress
  const handleResetProgress = () => {
    if (window.confirm('Voulez-vous vraiment réinitialiser toutes vos statistiques ?')) {
      setProgress(INITIAL_PROGRESS);
    }
  };

  // Filtered chapters for current selection with instant search
  const filteredChapters = CURRICULUM_CHAPTERS.filter((chap) => {
    if (selectedSubject !== 'all' && chap.subjectId !== selectedSubject) return false;
    if (chap.gradeLevel !== selectedGrade) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = chap.title.toLowerCase().includes(q);
      const matchCode = chap.officialCode.toLowerCase().includes(q);
      const matchDesc = chap.description.toLowerCase().includes(q);
      const matchFormulas = chap.keyFormulas.some((f) =>
        f.label.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q)
      );
      const matchExercise = chap.exercises.some(
        (ex) =>
          ex.title.toLowerCase().includes(q) ||
          ex.context.toLowerCase().includes(q) ||
          (ex.themeLabel && ex.themeLabel.toLowerCase().includes(q))
      );
      return matchTitle || matchCode || matchDesc || matchFormulas || matchExercise;
    }
    return true;
  });

  // Extract all exercises with their parent chapter info for the themed bank
  const allThemedExercises = CURRICULUM_CHAPTERS.flatMap((chap) =>
    chap.exercises.map((ex) => ({
      ...ex,
      chapterId: chap.id,
      chapterTitle: chap.title,
      subjectId: chap.subjectId,
      gradeLevel: chap.gradeLevel,
      officialCode: chap.officialCode
    }))
  );

  const filteredThemedExercises = allThemedExercises.filter((ex) => {
    if (selectedGrade !== ex.gradeLevel) return false;
    if (selectedSubject !== 'all' && ex.subjectId !== selectedSubject) return false;
    if (selectedTheme !== 'all' && ex.themeTag !== selectedTheme) return false;
    return true;
  });

  const openedChapter = CURRICULUM_CHAPTERS.find((c) => c.id === openedChapterId);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* XP Toast Notification */}
      {xpToast && (
        <div className="fixed top-18 right-6 z-50 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2.5 rounded-xl shadow-xl border border-slate-700 dark:border-slate-300 flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-top duration-200">
          <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>
            +{xpToast.amount} XP : {xpToast.reason}
          </span>
        </div>
      )}

      {/* TOP BAR CONTRACT: Single row, 3 distinct zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-8">
          {/* Zone 1: Single text wordmark */}
          <button
            onClick={() => {
              setCurrentSection('curriculum');
              setOpenedChapterId(null);
            }}
            className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2 text-left"
          >
            <span>Lycée Futur</span>
          </button>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => {
                setCurrentSection('curriculum');
                setOpenedChapterId(null);
              }}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 ${
                currentSection === 'curriculum'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              Cours & Programmes
            </button>
            <button
              onClick={() => {
                setCurrentSection('simulations');
                setOpenedChapterId(null);
              }}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 ${
                currentSection === 'simulations'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              Simulateurs Labo
            </button>
            <button
              onClick={() => {
                setCurrentSection('exercises');
                setOpenedChapterId(null);
              }}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 ${
                currentSection === 'exercises'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              Exercices Corrigés
            </button>
            <button
              onClick={() => {
                setCurrentSection('revision');
                setOpenedChapterId(null);
              }}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 ${
                currentSection === 'revision'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              Outils & Bac
            </button>
            <button
              onClick={() => {
                setCurrentSection('profile');
                setOpenedChapterId(null);
              }}
              className={`hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 ${
                currentSection === 'profile'
                  ? 'text-sky-600 dark:text-sky-400 font-bold'
                  : ''
              }`}
            >
              Mon Profil ({progress.xp} XP)
            </button>
          </nav>

          {/* Zone 3: 1 primary action area (Grade Selector + Theme switch) */}
          <div className="flex items-center gap-3 shrink-0">
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value as GradeLevel)}
              className="text-xs font-semibold py-1.5 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="terminale">Terminale Spé</option>
              <option value="1ere">Première Spé</option>
              <option value="2nde">Seconde Générale</option>
            </select>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Changer de thème"
              title={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {/* If a chapter is opened, show ChapterView */}
        {openedChapter ? (
          <ChapterView
            chapter={openedChapter}
            progress={progress}
            onBack={() => setOpenedChapterId(null)}
            onOpenSimulation={(simId) => {
              setActiveSimulationId(simId);
              setCurrentSection('simulations');
              setOpenedChapterId(null);
            }}
            onUpdateChapterProgress={handleUpdateChapterProgress}
            onGainXp={handleGainXp}
          />
        ) : (
          <>
            {/* SECTION: CURRICULUM */}
            {currentSection === 'curriculum' && (
              <div className="space-y-6">
                {/* Clean, Airy Header Control Bar */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>PROGRAMMES OFFICIELS BOEN 2026</span>
                        <span aria-hidden="true">·</span>
                        <span>{filteredChapters.length} CHAPITRES DISPONIBLES</span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-1">
                        Cours & Programmes
                      </h1>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Consultez les leçons avec formules KaTeX, entraînez-vous sur les exercices guidés et testez vos acquis avec les quiz.
                      </p>
                    </div>

                    {/* View Switcher: Vue Aérée (default, uncluttered) vs Vue Détaillée */}
                    <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                      <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                        <button
                          onClick={() => setIsCompactView(true)}
                          className={`px-3 py-1.5 font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                            isCompactView
                              ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                          title="Affichage allégé et direct"
                        >
                          <LayoutGrid className="w-3.5 h-3.5" />
                          <span>Vue Aérée</span>
                        </button>
                        <button
                          onClick={() => setIsCompactView(false)}
                          className={`px-3 py-1.5 font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                            !isCompactView
                              ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                          title="Afficher les résumés détaillés et points clés"
                        >
                          <List className="w-3.5 h-3.5" />
                          <span>Vue Complète</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Search and Filters Bar */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-md">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Rechercher un chapitre, mot-clé, formule..."
                        className="w-full pl-10 pr-9 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Grade Level Selector */}
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/60 self-start lg:self-auto">
                      {[
                        { id: 'terminale', label: 'Terminale' },
                        { id: '1ere', label: 'Première' },
                        { id: '2nde', label: 'Seconde' }
                      ].map((lvl) => (
                        <button
                          key={lvl.id}
                          onClick={() => setSelectedGrade(lvl.id as GradeLevel)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                            selectedGrade === lvl.id
                              ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject Filter Pills */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {[
                      {
                        id: 'all',
                        label: 'Toutes les matières',
                        count: CURRICULUM_CHAPTERS.filter((c) => c.gradeLevel === selectedGrade).length
                      },
                      {
                        id: 'maths',
                        label: 'Mathématiques',
                        count: CURRICULUM_CHAPTERS.filter((c) => c.gradeLevel === selectedGrade && c.subjectId === 'maths').length
                      },
                      {
                        id: 'physique-chimie',
                        label: 'Physique-Chimie',
                        count: CURRICULUM_CHAPTERS.filter((c) => c.gradeLevel === selectedGrade && c.subjectId === 'physique-chimie').length
                      },
                      {
                        id: 'svt',
                        label: 'SVT',
                        count: CURRICULUM_CHAPTERS.filter((c) => c.gradeLevel === selectedGrade && c.subjectId === 'svt').length
                      }
                    ].map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedSubject(sub.id as any)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                          selectedSubject === sub.id
                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                            : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800'
                        }`}
                      >
                        <span>{sub.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          selectedSubject === sub.id
                            ? 'bg-white/20 dark:bg-slate-900/20 text-white dark:text-slate-900'
                            : 'bg-slate-200/80 dark:bg-slate-700 text-slate-500 dark:text-slate-300'
                        }`}>
                          {sub.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chapter Cards Grid */}
                {filteredChapters.length === 0 ? (
                  <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <Search className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Aucun chapitre ne correspond à votre recherche "{searchQuery}"
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedSubject('all');
                      }}
                      className="px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded-lg hover:bg-sky-700 transition-colors"
                    >
                      Réinitialiser les filtres
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredChapters.map((chap) => {
                      const st = progress.completedChapters[chap.id];
                      const isDone = st && (st.courseRead || (st.quizScore ?? 0) >= 60);

                      const subjectBadge =
                        chap.subjectId === 'maths'
                          ? { label: 'Maths', color: 'text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800/60' }
                          : chap.subjectId === 'physique-chimie'
                          ? { label: 'Physique-Chimie', color: 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60' }
                          : { label: 'SVT', color: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60' };

                      // Check if chapter has a themed exercise
                      const themedEx = chap.exercises.find((ex) => ex.themeLabel);

                      return (
                        <div
                          key={chap.id}
                          className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
                        >
                          <div className="space-y-3">
                            {/* Top Row: Clean Subject Tag + Official Code + Status */}
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2">
                                <span className={`font-semibold px-2 py-0.5 rounded-md border text-[11px] ${subjectBadge.color}`}>
                                  {subjectBadge.label}
                                </span>
                                <span className="font-mono text-slate-400 dark:text-slate-500 text-[11px]">
                                  {chap.officialCode}
                                </span>
                              </div>
                              {isDone && (
                                <span className="text-emerald-500 flex items-center gap-1 text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/60">
                                  <CheckCircle className="w-3 h-3" /> Validé
                                </span>
                              )}
                            </div>

                            {/* Chapter Title */}
                            <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                              {chap.title}
                            </h3>

                            {/* Themed Exercise Pill or Lab Tag if present */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              {chap.simulationId && (
                                <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-900/50 flex items-center gap-1">
                                  <FlaskConical className="w-3 h-3" /> Labo Interactif
                                </span>
                              )}
                              {themedEx && (
                                <span className="text-[11px] font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 px-2 py-0.5 rounded border border-violet-200 dark:border-violet-900/50">
                                  {themedEx.themeLabel}
                                </span>
                              )}
                            </div>

                            {/* If NOT compact view, show detailed description and highlights */}
                            {!isCompactView && (
                              <div className="pt-2 space-y-3">
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                  {chap.description}
                                </p>
                                <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                                  {chap.summaryHighlights.slice(0, 2).map((hi, i) => (
                                    <div key={i} className="text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5 line-clamp-1">
                                      <span className="text-sky-500 font-bold">•</span>
                                      <span>{hi}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Card Footer: Duration & Open Button */}
                          <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{chap.estimatedMinutes} min</span>
                              <span aria-hidden="true">·</span>
                              <span>{chap.exercises.length} ex. Bac</span>
                            </div>

                            <button
                              onClick={() => setOpenedChapterId(chap.id)}
                              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                            >
                              <span>Étudier</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* SECTION: SIMULATEURS LABO */}
            {currentSection === 'simulations' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
                    <span>LABORATOIRE INTERACTIF</span>
                    <span aria-hidden="true">·</span>
                    <span>EXPÉRIMENTATIONS & SIMULATIONS EN DIRECT</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                    Laboratoire Virtuel de Sciences
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                    Manipulez les paramètres expérimentaux, visualisez les vecteurs et les équations en temps réel pour comprendre intuitivement les phénomènes physiques, chimiques et biologiques.
                  </p>
                </div>

                {/* Simulation Selector Tabs */}
                <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  {[
                    { id: 'titration', label: '1. Titrage pH-métrique (Chimie)' },
                    { id: 'projectile', label: '2. Balistique & Newton (Physique)' },
                    { id: 'optics', label: '3. Banc d\'Optique (Physique)' },
                    { id: 'translation_dna', label: '4. Traduction & Mutations (SVT)' },
                    { id: 'subduction', label: '5. Zone de Subduction (SVT)' },
                    { id: 'tangent_deriv', label: '6. Tangente & Dérivée (Maths)' }
                  ].map((sim) => (
                    <button
                      key={sim.id}
                      onClick={() => setActiveSimulationId(sim.id)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                        activeSimulationId === sim.id
                          ? 'bg-sky-600 text-white shadow-sm'
                          : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {sim.label}
                    </button>
                  ))}
                </div>

                {/* Render Selected Simulation Component */}
                <div>
                  {activeSimulationId === 'titration' && (
                    <TitrationSim onGainXp={handleGainXp} />
                  )}
                  {activeSimulationId === 'projectile' && (
                    <ProjectileSim onGainXp={handleGainXp} />
                  )}
                  {activeSimulationId === 'optics' && (
                    <OpticsSim onGainXp={handleGainXp} />
                  )}
                  {activeSimulationId === 'translation_dna' && (
                    <DnaTranslationSim onGainXp={handleGainXp} />
                  )}
                  {activeSimulationId === 'subduction' && (
                    <SubductionSim onGainXp={handleGainXp} />
                  )}
                  {activeSimulationId === 'tangent_deriv' && (
                    <TangentDerivativeSim onGainXp={handleGainXp} />
                  )}
                </div>
              </div>
            )}

            {/* SECTION: EXERCICES CORRIGÉS À THÈMES */}
            {currentSection === 'exercises' && (
              <div className="space-y-6">
                {/* Header Showcase */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>BANQUE DE PROBLÈMES TYPES BAC & SUJETS ANCRÉS DANS LE RÉEL</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Exercices à Thèmes Passionnants
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
                    Révisez les mathématiques, la physique-chimie et la SVT à travers les univers qui vous motivent : jeux vidéo, Formule 1, conquête spatiale, streaming, enquêtes policières et transition écologique.
                  </p>

                  {/* Theme Filter Chips */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2.5">
                      Choisir une thématique :
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {[
                        { id: 'all', label: 'Toutes les thématiques', icon: Sparkles },
                        { id: 'gaming', label: '🎮 Gaming & Esport', icon: Gamepad2 },
                        { id: 'space', label: '🚀 Conquête Spatiale', icon: Rocket },
                        { id: 'tech', label: '📱 Tech & Réseaux', icon: Smartphone },
                        { id: 'sport', label: '🏎️ Sport & Performance', icon: Trophy },
                        { id: 'cinema', label: '🎬 Séries & Enquêtes', icon: Film },
                        { id: 'science', label: '🧬 Santé & Biotechnologies', icon: Sparkles },
                        { id: 'ecologie', label: '🌱 Écologie & Climat', icon: Leaf }
                      ].map((th) => (
                        <button
                          key={th.id}
                          onClick={() => setSelectedTheme(th.id)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all flex items-center gap-1.5 ${
                            selectedTheme === th.id
                              ? 'bg-violet-600 text-white shadow-sm font-semibold'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          <span>{th.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Grade and Subject Filters */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                      {[
                        { id: 'terminale', label: 'Terminale' },
                        { id: '1ere', label: 'Première' },
                        { id: '2nde', label: 'Seconde' }
                      ].map((lvl) => (
                        <button
                          key={lvl.id}
                          onClick={() => setSelectedGrade(lvl.id as GradeLevel)}
                          className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                            selectedGrade === lvl.id
                              ? 'bg-white dark:bg-slate-900 text-violet-600 dark:text-violet-400 shadow-sm'
                              : 'text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs">
                      {[
                        { id: 'all', label: 'Toutes' },
                        { id: 'maths', label: 'Maths' },
                        { id: 'physique-chimie', label: 'Physique-Chimie' },
                        { id: 'svt', label: 'SVT' }
                      ].map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setSelectedSubject(sub.id as any)}
                          className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                            selectedSubject === sub.id
                              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* List of Themed Exercises */}
                {filteredThemedExercises.length === 0 ? (
                  <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <Sparkles className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Aucun exercice trouvé pour ce filtre thématique en {selectedGrade.toUpperCase()}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedTheme('all');
                        setSelectedSubject('all');
                      }}
                      className="px-4 py-2 bg-violet-600 text-white text-xs font-semibold rounded-lg hover:bg-violet-700 transition-colors"
                    >
                      Afficher tous les exercices
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredThemedExercises.map((exercise) => {
                      const subjectBadge =
                        exercise.subjectId === 'maths'
                          ? { label: 'Maths', color: 'text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800/60' }
                          : exercise.subjectId === 'physique-chimie'
                          ? { label: 'Physique-Chimie', color: 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/60' }
                          : { label: 'SVT', color: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60' };

                      return (
                        <div
                          key={exercise.id}
                          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all"
                        >
                          {/* Card Top Banner */}
                          <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              {exercise.themeLabel ? (
                                <span className="font-semibold text-violet-700 dark:text-violet-300 bg-violet-100 dark:bg-violet-950/70 px-2.5 py-0.5 rounded-md border border-violet-200 dark:border-violet-800 text-xs flex items-center gap-1.5">
                                  {exercise.themeLabel}
                                </span>
                              ) : (
                                <span className="font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md text-xs">
                                  Type Bac
                                </span>
                              )}
                              <span className={`font-semibold px-2 py-0.5 rounded-md border text-xs ${subjectBadge.color}`}>
                                {subjectBadge.label}
                              </span>
                              <span className="text-xs font-mono text-slate-400">
                                {exercise.officialCode}
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-xs font-semibold text-slate-500">
                                Barème : {exercise.points} points
                              </span>
                              <button
                                onClick={() => setOpenedChapterId(exercise.chapterId)}
                                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                              >
                                <span>Voir le cours</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>

                          {/* Exercise Title and Scenario */}
                          <div className="p-5 space-y-3">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                              {exercise.title}
                            </h3>
                            <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                              {exercise.context}
                            </div>
                          </div>

                          {/* Questions with Interactive Hints & Solutions */}
                          <div className="px-5 pb-5 space-y-4">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Questions guidées & barème ({exercise.questions.length} questions) :
                            </div>

                            {exercise.questions.map((q, qIdx) => {
                              const qKey = `hub-${exercise.id}-${qIdx}`;
                              const currentHintLevel = revealedExHints[qKey] || 0;
                              const isSolutionVisible = !!revealedExSolutions[qKey];

                              return (
                                <div
                                  key={qIdx}
                                  className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                                      {q.questionText}
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 shrink-0">
                                      [{q.pointsAllocated} pts]
                                    </span>
                                  </div>

                                  {/* Hints Section */}
                                  {currentHintLevel > 0 && (
                                    <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 rounded-lg space-y-1.5 text-xs text-amber-900 dark:text-amber-200">
                                      {q.hints.slice(0, currentHintLevel).map((hint, hIdx) => (
                                        <div key={hIdx} className="flex items-start gap-2">
                                          <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                          <span>
                                            <strong>Indice {hIdx + 1} : </strong>
                                            {hint}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  )}

                                  {/* Action Buttons: Hint & Solution */}
                                  <div className="flex items-center gap-3 pt-1">
                                    {currentHintLevel < q.hints.length && (
                                      <button
                                        onClick={() => {
                                          setRevealedExHints((prev) => ({
                                            ...prev,
                                            [qKey]: (prev[qKey] || 0) + 1
                                          }));
                                        }}
                                        className="text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                                      >
                                        <Lightbulb className="w-3 h-3" />
                                        <span>
                                          {currentHintLevel === 0 ? 'Afficher un indice' : 'Indice suivant'}
                                        </span>
                                      </button>
                                    )}

                                    <button
                                      onClick={() => {
                                        const nowVisible = !revealedExSolutions[qKey];
                                        setRevealedExSolutions((prev) => ({
                                          ...prev,
                                          [qKey]: nowVisible
                                        }));
                                        if (nowVisible) {
                                          handleGainXp(40, `Exercice thématique résolu (${exercise.title.slice(0, 30)}...)`);
                                        }
                                      }}
                                      className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline ml-auto flex items-center gap-1"
                                    >
                                      <span>{isSolutionVisible ? 'Masquer le corrigé' : 'Révéler la correction détaillée'}</span>
                                      {isSolutionVisible ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                    </button>
                                  </div>

                                  {/* Detailed Solution Steps */}
                                  {isSolutionVisible && (
                                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                                      <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono bg-slate-50 dark:bg-slate-950/70 p-3.5 rounded-lg border border-slate-200/80 dark:border-slate-800">
                                        <div className="font-sans font-bold text-slate-900 dark:text-white mb-1">
                                          Démarche rédigée pas à pas :
                                        </div>
                                        {q.solutionSteps.map((step, sIdx) => (
                                          <div key={sIdx} className="flex items-start gap-2">
                                            <span className="text-violet-500 font-bold shrink-0">→</span>
                                            <span>{step}</span>
                                          </div>
                                        ))}
                                        <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 font-sans font-semibold text-emerald-600 dark:text-emerald-400">
                                          Conclusion attendue : {q.finalAnswer}
                                        </div>
                                      </div>

                                      {q.bacTrap && (
                                        <div className="p-2.5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 rounded-lg text-xs text-rose-800 dark:text-rose-200 flex items-start gap-2">
                                          <span className="font-bold shrink-0">⚠️ Piège Bac :</span>
                                          <span>{q.bacTrap}</span>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* SECTION: REVISION TOOLS */}
            {currentSection === 'revision' && (
              <div className="space-y-6">
                {/* Secondary Sub-Nav for Revision Tools */}
                <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  {[
                    { id: 'flashcards', label: 'Fiches Mémo (SRS Leitner)' },
                    { id: 'pomodoro', label: 'Minuteur Pomodoro (25/5 min)' },
                    { id: 'bac', label: 'Simulateur du Bac (Coef 100)' },
                    { id: 'formulas', label: 'Formulaire Intégral' },
                    { id: 'diagnostic', label: 'Diagnostic Personnalisé' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveRevisionTab(tab.id as any)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                        activeRevisionTab === tab.id
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Sub-view switcher */}
                {activeRevisionTab === 'flashcards' && (
                  <FlashcardDeck
                    progress={progress}
                    onUpdateFlashcardBox={handleUpdateFlashcardBox}
                    onGainXp={handleGainXp}
                  />
                )}
                {activeRevisionTab === 'pomodoro' && (
                  <PomodoroTimer onGainXp={handleGainXp} />
                )}
                {activeRevisionTab === 'bac' && (
                  <BacSimulator
                    progress={progress}
                    onSaveNotes={handleSaveBacNotes}
                    onGainXp={handleGainXp}
                  />
                )}
                {activeRevisionTab === 'formulas' && <FormulaSheet />}
                {activeRevisionTab === 'diagnostic' && (
                  <DiagnosticQuiz
                    progress={progress}
                    onSavePlan={handleSavePlan}
                    onGainXp={handleGainXp}
                  />
                )}
              </div>
            )}

            {/* SECTION: PROFILE & PROGRESSION */}
            {currentSection === 'profile' && (
              <StudentProfile
                progress={progress}
                onResetProgress={handleResetProgress}
              />
            )}
          </>
        )}
      </main>

      {/* Clean Footer adhering to Section 1.B */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">Lycée Futur</span>
            <span aria-hidden="true">·</span>
            <span>Programmes officiels du Ministère de l'Éducation Nationale</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Mathématiques</span>
            <span>·</span>
            <span>Physique-Chimie</span>
            <span>·</span>
            <span>SVT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
