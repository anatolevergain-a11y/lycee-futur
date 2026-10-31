import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, SkipForward, Volume2, VolumeX, Sparkles, CheckCircle2, Clock, Zap, BookOpen } from 'lucide-react';
import { CURRICULUM_CHAPTERS } from '../../data/curriculum';

interface PomodoroTimerProps {
  onGainXp: (amount: number, reason: string) => void;
}

type TimerMode = 'work' | 'shortBreak' | 'longBreak';

const MODE_CONFIGS: Record<TimerMode, { label: string; durationMinutes: number; badgeColor: string }> = {
  work: { label: 'Session de Révision', durationMinutes: 25, badgeColor: 'text-sky-600 dark:text-sky-400' },
  shortBreak: { label: 'Pause Courte', durationMinutes: 5, badgeColor: 'text-emerald-600 dark:text-emerald-400' },
  longBreak: { label: 'Pause Longue', durationMinutes: 15, badgeColor: 'text-amber-600 dark:text-amber-400' }
};

export const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ onGainXp }) => {
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [selectedChapterTitle, setSelectedChapterTitle] = useState<string>('Mathématiques : Dérivation & TVI');
  const [completedSessionsCount, setCompletedSessionsCount] = useState<number>(() => {
    const saved = localStorage.getItem('lycee_futur_pomodoro_count');
    return saved ? parseInt(saved, 10) : 2;
  });

  // Web Audio API synthesized soft chime (no external mp3 dependency)
  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {
      console.warn('AudioContext chime not available', e);
    }
  };

  // Timer tick effect
  useEffect(() => {
    let interval: any = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      playChime();

      if (mode === 'work') {
        const nextCount = completedSessionsCount + 1;
        setCompletedSessionsCount(nextCount);
        localStorage.setItem('lycee_futur_pomodoro_count', nextCount.toString());
        onGainXp(25, `Session Pomodoro 25 min accomplie (${selectedChapterTitle})`);

        // Suggest short or long break
        if (nextCount % 4 === 0) {
          switchMode('longBreak');
        } else {
          switchMode('shortBreak');
        }
      } else {
        switchMode('work');
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode, completedSessionsCount, selectedChapterTitle, onGainXp]);

  const switchMode = (newMode: TimerMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(MODE_CONFIGS[newMode].durationMinutes * 60);
  };

  const toggleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(MODE_CONFIGS[mode].durationMinutes * 60);
  };

  const skipInterval = () => {
    setIsRunning(false);
    if (mode === 'work') {
      switchMode('shortBreak');
    } else {
      switchMode('work');
    }
  };

  // Formatting mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Progress percentage
  const totalSeconds = MODE_CONFIGS[mode].durationMinutes * 60;
  const progressPercent = ((totalSeconds - timeLeft) / totalSeconds) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
          <span>MÉTHODE D'ORGANISATION SCIENTIFIQUE</span>
          <span aria-hidden="true">·</span>
          <span>TECHNIQUE POMODORO DU BACCALAURÉAT</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
          Minuteur de Révision Pomodoro (25/5 min)
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-2xl">
          Maximisez votre concentration avec des cycles de travail intense de 25 minutes suivis de pauses régulières. Cette technique empêche la fatigue cognitive et booste la mémorisation pour le Bac.
        </p>
      </div>

      {/* Main Timer Stage */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm flex flex-col items-center space-y-6">
        {/* Mode Selector Segmented Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            onClick={() => switchMode('work')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              mode === 'work'
                ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Travail (25 min)
          </button>
          <button
            onClick={() => switchMode('shortBreak')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              mode === 'shortBreak'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Pause Courte (5 min)
          </button>
          <button
            onClick={() => switchMode('longBreak')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              mode === 'longBreak'
                ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Pause Longue (15 min)
          </button>
        </div>

        {/* Circular Countdown Progress Ring */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background track circle */}
            <circle
              cx="50"
              cy="50"
              r="44"
              className="text-slate-100 dark:text-slate-800"
              strokeWidth="5"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Animated progress circle */}
            <circle
              cx="50"
              cy="50"
              r="44"
              className={`transition-all duration-300 ${
                mode === 'work'
                  ? 'text-sky-500'
                  : mode === 'shortBreak'
                  ? 'text-emerald-500'
                  : 'text-amber-500'
              }`}
              strokeWidth="5"
              strokeDasharray={276.46}
              strokeDashoffset={276.46 - (276.46 * progressPercent) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>

          {/* Time digits */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs uppercase font-semibold tracking-wider text-slate-400">
              {MODE_CONFIGS[mode].label}
            </span>
            <span className="text-5xl font-black font-mono tracking-tight text-slate-900 dark:text-white my-1">
              {formattedTime}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Clock className="w-3 h-3" />
              <span>{isRunning ? 'Session en cours' : 'En pause'}</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={resetTimer}
            className="p-3 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Réinitialiser le temps"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={toggleStartPause}
            className={`px-8 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-2 text-white shadow-md transition-all ${
              isRunning
                ? 'bg-amber-600 hover:bg-amber-700'
                : mode === 'work'
                ? 'bg-sky-600 hover:bg-sky-700'
                : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Mettre en pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Démarrer le cycle</span>
              </>
            )}
          </button>

          <button
            onClick={skipInterval}
            className="p-3 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Passer à l'intervalle suivant"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Association with a Chapter Goal */}
        <div className="w-full pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-sky-500" />
              <span>Objectif de cette session d'étude :</span>
            </span>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-1 text-[11px] hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              title="Activer/Désactiver le signal sonore"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-sky-500" />
                  <span>Sonnerie activée</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span>Silencieux</span>
                </>
              )}
            </button>
          </div>

          <select
            value={selectedChapterTitle}
            onChange={(e) => setSelectedChapterTitle(e.target.value)}
            className="w-full text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
          >
            {CURRICULUM_CHAPTERS.map((chap) => (
              <option key={chap.id} value={`${chap.officialCode} : ${chap.title}`}>
                [{chap.gradeLevel.toUpperCase()}] {chap.officialCode} - {chap.title}
              </option>
            ))}
          </select>
        </div>

        {/* Session Stats Bar */}
        <div className="w-full grid grid-cols-3 gap-3 pt-2 text-center text-xs">
          <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Cycles du jour</div>
            <div className="text-lg font-black font-mono text-slate-900 dark:text-white mt-0.5">
              {completedSessionsCount} 🍅
            </div>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Temps Focus</div>
            <div className="text-lg font-black font-mono text-sky-600 dark:text-sky-400 mt-0.5">
              {completedSessionsCount * 25} min
            </div>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Gain Révision</div>
            <div className="text-lg font-black font-mono text-amber-500 mt-0.5">
              +{completedSessionsCount * 25} XP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
