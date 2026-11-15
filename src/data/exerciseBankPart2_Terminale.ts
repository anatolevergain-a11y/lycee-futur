import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_PART2_TERMINALE: BankExerciseItem[] = [
  // --- TERMINALE MATHS (12 new exercises) ---
  {
    id: 'ex-tm-p2-1',
    targetChapterId: 'math-term-deriv-tvi',
    title: 'Théorème des Valeurs Intermédiaires & Modélisation de Propagation Épidémique',
    context: 'Le taux de reproduction effectif d\'un variant viral en fonction du taux de couverture vaccinale x ∈ [0 ; 1] est R(x) = 4 - 3x - x^3.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🧬 Épidémiologie & TVI',
    questions: [
      {
        questionText: '1. Étudier les variations de R sur [0 ; 1].',
        hints: ['R\'(x) = -3 - 3x^2.'],
        solutionSteps: [
          'R\'(x) = -3 - 3x^2 = -3(1 + x^2).',
          'Pour tout réel x, 1 + x^2 ≥ 1 > 0, donc R\'(x) ≤ -3 < 0.',
          'La fonction R est strictement décroissante sur [0 ; 1].'
        ],
        finalAnswer: 'R est strictement décroissante sur [0 ; 1].',
        pointsAllocated: 3
      },
      {
        questionText: '2. Montrer que l\'équation R(x) = 1 (seuil d\'extinction de l\'épidémie) admet une unique solution α sur [0 ; 1] et donner sa valeur exacte.',
        hints: ['Calculer R(0) et R(1).', 'Tester x = 1.'],
        solutionSteps: [
          'R(0) = 4 - 0 - 0 = 4.',
          'R(1) = 4 - 3 - 1 = 0.',
          '1 ∈ [0 ; 4]. Comme R est continue et strictement décroissante, d\'après le corollaire du TVI, il existe un unique α tel que R(α) = 1.',
          'R(x) = 1 <=> 4 - 3x - x^3 = 1 <=> x^3 + 3x - 3 = 0. En x = 0,8 : R(0,8) = 4 - 2,4 - 0,512 = 1,088 ; en x = 0,9 : R(0,9) = 4 - 2,7 - 0,729 = 0,571.',
          'La valeur est environ α ≈ 0,818 (soit 81,8% de couverture vaccinale pour bloquer le virus).'
        ],
        finalAnswer: 'Unique solution α ≈ 0,82 (environ 82% de couverture vaccinale requise).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tm-p2-2',
    targetChapterId: 'math-term-logarithme',
    title: 'Décroissance d’un Signal Sonore & Échelle Logarithmique',
    context: 'L\'atténuation A(x) en décibels à x mètres d\'une enceinte de concert est modélisée par A(x) = 100 - 20 * ln(x + 1) pour x ≥ 0.',
    difficulty: 'Type Bac',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🔊 Acoustique & Logarithme Népérien',
    questions: [
      {
        questionText: '1. Calculer le niveau sonore au contact de l\'enceinte (x = 0) et à 10 mètres (ln(11) ≈ 2,398).',
        hints: ['ln(1) = 0.'],
        solutionSteps: [
          'A(0) = 100 - 20 * ln(1) = 100 dB.',
          'A(10) = 100 - 20 * ln(11) = 100 - 20 * 2,398 = 100 - 47,96 ≈ 52,0 dB.'
        ],
        finalAnswer: 'A(0) = 100 dB et A(10) ≈ 52 dB.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Déterminer la distance x à laquelle le niveau sonore passe sous le seuil de conversation calme de 40 dB.',
        hints: ['100 - 20 ln(x + 1) < 40 <=> 20 ln(x + 1) > 60 <=> ln(x + 1) > 3.'],
        solutionSteps: [
          'ln(x + 1) > 3 <=> x + 1 > e^3.',
          'Comme e^3 ≈ 20,0855, on a x > e^3 - 1 ≈ 19,09 m.'
        ],
        finalAnswer: 'À plus de e^3 - 1 ≈ 19,1 mètres de l\'enceinte.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-p2-3',
    targetChapterId: 'math-term-integration',
    title: 'Valeur Moyenne & Consommation d’une Voiture Électrique sur Autoroute',
    context: 'La puissance instantanée appelée P(t) en kW sur un trajet d\'une heure (t ∈ [0 ; 1]) est P(t) = 15 + 10 t^2.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🚗 Véhicule Électrique & Valeur Moyenne',
    questions: [
      {
        questionText: '1. Rappeler la formule de la valeur moyenne d\'une fonction f sur [a ; b] : μ = 1/(b - a) ∫[a à b] f(t) dt.',
        hints: ['Ici a = 0 et b = 1, donc b - a = 1.'],
        solutionSteps: [
          'μ = 1 / (1 - 0) * ∫[0 à 1] (15 + 10 t^2) dt = ∫[0 à 1] (15 + 10 t^2) dt.'
        ],
        finalAnswer: 'μ = 1/(b - a) · ∫[a à b] f(t) dt.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la puissance moyenne consommée par le moteur sur ce trajet d\'une heure.',
        hints: ['Primitive de 15 + 10t^2 : 15t + 10t^3 / 3.'],
        solutionSteps: [
          '∫[0 à 1] (15 + 10 t^2) dt = [ 15t + 10 t^3 / 3 ][0 à 1] = 15 + 10/3 = 55 / 3 ≈ 18,33 kW.'
        ],
        finalAnswer: 'P_moyenne = 55/3 ≈ 18,3 kW (énergie totale = 18,3 kWh).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-p2-4',
    targetChapterId: 'math-term-loi-binomiale',
    title: 'Test Antidopage aux JO : Répétition d’Épreuves & Faux Positifs',
    context: 'Un test antidopage a une spécificité de 99% (1% de faux positifs). On teste n = 20 athlètes propres indépendants. X est le nombre de faux positifs observés.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'sport',
    themeLabel: '🥇 Jeux Olympiques & Loi Binomiale',
    questions: [
      {
        questionText: '1. Justifier la loi suivie par X et donner ses paramètres.',
        hints: ['20 épreuves indépendantes avec proba d\'erreur p = 0,01.'],
        solutionSteps: [
          'Chaque athlète propre a une probabilité p = 0,01 d\'être faussement positif, de façon indépendante.',
          'X compte le nombre de succès (ici faux positifs) : X ~ B(20 ; 0,01).'
        ],
        finalAnswer: 'X ~ B(20 ; 0,01).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la probabilité qu\'au moins un athlète innocent soit faussement accusé P(X ≥ 1).',
        hints: ['P(X ≥ 1) = 1 - P(X = 0) = 1 - (0,99)^20.'],
        solutionSteps: [
          'P(X = 0) = (0,99)^20 ≈ 0,8179.',
          'P(X ≥ 1) = 1 - 0,8179 = 0,1821 (soit 18,2%).'
        ],
        finalAnswer: 'P(X ≥ 1) ≈ 18,2% (d\'où l\'obligation légale d\'analyser un échantillon B de confirmation).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tm-p2-5',
    targetChapterId: 'math-term-suites-recurrence',
    title: 'Suite Récurrente Homographique : Algorithme de Racine Carrée de Héron',
    context: 'Pour approcher √2, on utilise la suite un+1 = 0,5 * (un + 2/un) avec u0 = 2.',
    difficulty: 'Approfondissement',
    points: 8,
    themeTag: 'science',
    themeLabel: '📐 Algorithme de Héron & Convergence Quadratique',
    questions: [
      {
        questionText: '1. Calculer les valeurs exactes fractionnaires de u1 et u2.',
        hints: ['u1 = 0,5 * (2 + 1) = 3/2 = 1,5.', 'u2 = 0,5 * (3/2 + 2/(3/2)).'],
        solutionSteps: [
          'u1 = 0,5 * (2 + 2/2) = 0,5 * 3 = 3/2 = 1,5.',
          'u2 = 0,5 * (3/2 + 4/3) = 0,5 * (9/6 + 8/6) = 0,5 * (17/6) = 17/12 ≈ 1,41667.'
        ],
        finalAnswer: 'u1 = 3/2 et u2 = 17/12 ≈ 1,4167.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Comparer u2 à la valeur réelle de √2 ≈ 1,41421. Quelle est la précision atteinte en seulement 2 étapes ?',
        hints: ['17/12 - √2.'],
        solutionSteps: [
          '17/12 ≈ 1,41667.',
          'Erreur = 1,41667 - 1,41421 ≈ 0,0024 (précision au millième en seulement deux itérations !).'
        ],
        finalAnswer: 'Erreur inférieure à 0,0025 (précision supérieure à 2 décimales exactes).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-p2-6',
    targetChapterId: 'math-term-geometrie-espace',
    title: 'Distance d’un Point à un Plan dans un Moteur Graphique 3D',
    context: 'Dans un jeu vidéo 3D, le sol est modélisé par le plan (P) : 2x - y + 2z - 6 = 0. Le centre de la hitbox d\'un personnage est au point S(1 ; 2 ; 5).',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'gaming',
    themeLabel: '🎮 Moteur de Jeu 3D & Distance Point-Plan',
    questions: [
      {
        questionText: '1. Rappeler la formule de la distance d\'un point S(x0, y0, z0) au plan ax + by + cz + d = 0 : d(S, P) = |ax0 + by0 + cz0 + d| / √(a^2 + b^2 + c^2).',
        hints: ['a = 2, b = -1, c = 2, d = -6.'],
        solutionSteps: [
          'Norme du vecteur normal : √(2^2 + (-1)^2 + 2^2) = √(4 + 1 + 4) = √9 = 3.'
        ],
        finalAnswer: 'Norme du vecteur normal ||n|| = 3.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la distance exacte du personnage au sol.',
        hints: ['Numérateur : |2(1) - 1(2) + 2(5) - 6|.'],
        solutionSteps: [
          'Numérateur : |2 - 2 + 10 - 6| = |4| = 4.',
          'd(S, P) = 4 / 3 ≈ 1,33 mètre.'
        ],
        finalAnswer: 'Distance = 4/3 m ≈ 1,33 mètre.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tm-p2-7',
    targetChapterId: 'math-term-denombrement',
    title: 'Combinaisons de Pokémons dans une Équipe Compétitive VGC',
    context: 'Un dresseur doit sélectionner une équipe de 4 Pokémon parmi 10 Pokémon pré-entraînés disponibles.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'gaming',
    themeLabel: '🎮 Compétition Pokémon & Combinaisons',
    questions: [
      {
        questionText: '1. L\'ordre de sélection des 4 membres de l\'équipe importe-t-il ? Quel outil de dénombrement utilise-t-on ?',
        hints: ['L\'ordre n\'a pas d\'importance dans la composition d\'une équipe.'],
        solutionSteps: [
          'L\'ordre de choix des 4 Pokémon n\'a aucune influence sur l\'équipe finale : il s\'agit d\'une combinaison sans répétition de 4 éléments parmi 10.'
        ],
        finalAnswer: 'L\'ordre n\'importe pas : combinaison (10 parmi 4).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer le nombre d\'équipes distinctes possibles (10 4).',
        hints: ['10! / (4! * 6!) = (10 * 9 * 8 * 7) / (4 * 3 * 2 * 1).'],
        solutionSteps: [
          '(10 * 9 * 8 * 7) / (24) = 5040 / 24 = 210 équipes.'
        ],
        finalAnswer: '210 équipes différentes possibles.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-p2-8',
    targetChapterId: 'math-term-equa-diff',
    title: 'Équation Différentielle de Décharge Électrique dans un Défibrillateur',
    context: 'La tension u(t) aux bornes d\'un défibrillateur cardiaque vérifie u\'(t) + 200 u(t) = 0 avec u(0) = 2 000 V.',
    difficulty: 'Type Bac',
    points: 7,
    themeTag: 'science',
    themeLabel: '💓 Défibrillateur & Équation Différentielle Homogène',
    questions: [
      {
        questionText: '1. Donner la forme générale des solutions de l\'équation différentielle y\' + ay = 0.',
        hints: ['y(t) = C * e^(-at).'],
        solutionSteps: ['u(t) = C * e^(-200t) avec C ∈ ℝ.'],
        finalAnswer: 'u(t) = C · e^(-200t).',
        pointsAllocated: 3
      },
      {
        questionText: '2. En utilisant la condition initiale u(0) = 2 000 V, expliciter u(t) et calculer la tension restante après t = 5 ms (0,005 s).',
        hints: ['200 * 0,005 = 1.', 'e^(-1) = 1/e ≈ 0,368.'],
        solutionSteps: [
          'u(0) = C * e^0 = C = 2000 V.',
          'u(t) = 2000 * e^(-200t).',
          'À t = 0,005 s : u(0,005) = 2000 * e^(-1) = 2000 / e ≈ 735,8 V.'
        ],
        finalAnswer: 'u(t) = 2 000 e^(-200t) ; u(5 ms) ≈ 736 V.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-p2-9',
    targetChapterId: 'math-exp-complexes',
    title: 'Racines n-ièmes de l’Unité & Synthèse Vocale Harmonique',
    context: 'En traitement du signal musical, on résout l\'équation complexe z^3 = 1 dans ℂ.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🎵 Traitement du Son & Racines de l’Unité',
    questions: [
      {
        questionText: '1. Donner les 3 racines cubiques de 1 sous forme exponentielle : e^(i 2kπ/3) pour k ∈ {0, 1, 2}.',
        hints: ['Pour k = 0, 1, 2.'],
        solutionSteps: [
          'z0 = e^0 = 1.',
          'z1 = e^(i 2π/3).',
          'z2 = e^(i 4π/3) = e^(-i 2π/3).'
        ],
        finalAnswer: 'z0 = 1, z1 = e^(i 2π/3) (noté j), z2 = e^(-i 2π/3) (noté j^2).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Donner la forme algébrique exacte de ces trois solutions et vérifier que leur somme est nulle (1 + j + j^2 = 0).',
        hints: ['cos(2π/3) = -1/2, sin(2π/3) = √3/2.'],
        solutionSteps: [
          'z1 = -1/2 + i √3/2.',
          'z2 = -1/2 - i √3/2.',
          'Somme : 1 + (-1/2 + i √3/2) + (-1/2 - i √3/2) = 1 - 1 + 0 = 0.'
        ],
        finalAnswer: '1, -1/2 + i√3/2, -1/2 - i√3/2 ; somme = 0.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-p2-10',
    targetChapterId: 'math-exp-arithmetique',
    title: 'Petit Théorème de Fermat & Test de Primalité pour Clé RSA',
    context: 'Le protocole HTTPS repose sur le Petit Théorème de Fermat : si p est premier et a non divisible par p, alors a^(p-1) ≡ 1 [p].',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🔐 Cryptographie RSA & Petit Théorème de Fermat',
    questions: [
      {
        questionText: '1. Calculer le reste de la division euclidienne de 2^12 par 13.',
        hints: ['13 est un nombre premier et 2 n\'est pas multiple de 13.'],
        solutionSteps: [
          'Puisque p = 13 est un nombre premier et que 13 ne divise pas 2, d\'après le petit théorème de Fermat : 2^(13 - 1) = 2^12 ≡ 1 [13].'
        ],
        finalAnswer: 'Le reste vaut 1.',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire le reste de 2^25 divisé par 13.',
        hints: ['2^25 = (2^12)^2 * 2.'],
        solutionSteps: [
          '2^25 = (2^12)^2 * 2^1.',
          'Comme 2^12 ≡ 1 [13], (2^12)^2 ≡ 1^2 ≡ 1 [13].',
          'Donc 2^25 ≡ 1 * 2 ≡ 2 [13].'
        ],
        finalAnswer: 'Le reste vaut 2.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-p2-11',
    targetChapterId: 'math-term-suites-limites',
    title: 'Croissance Comparée Exponentielle vs Polynôme à l’Infini',
    context: 'On étudie la limite quand x -> +∞ de f(x) = (e^x - 5x^4) / (2 e^x + 1) modélisant la saturation d\'une intelligence artificielle générative.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🤖 Modèles d’IA & Limites de Fonctions',
    questions: [
      {
        questionText: '1. Factoriser le numérateur et le dénominateur par le terme dominant e^x.',
        hints: ['e^x (1 - 5x^4 / e^x) / [ e^x (2 + 1 / e^x) ].'],
        solutionSteps: [
          'f(x) = [ e^x * (1 - 5 * (x^4 / e^x)) ] / [ e^x * (2 + e^(-x)) ].',
          'En simplifiant par e^x ≠ 0 : f(x) = (1 - 5 * x^4 / e^x) / (2 + e^(-x)).'
        ],
        finalAnswer: 'f(x) = (1 - 5 x^4 e^(-x)) / (2 + e^(-x)).',
        pointsAllocated: 3
      },
      {
        questionText: '2. En utilisant le théorème des croissances comparées (lim x^n / e^x = 0 quand x -> +∞), déterminer la limite de f(x).',
        hints: ['x^4 / e^x -> 0 et e^(-x) -> 0.'],
        solutionSteps: [
          'D\'après les croissances comparées, lim_{x->+∞} x^4 / e^x = 0.',
          'De plus, lim_{x->+∞} e^(-x) = 0.',
          'Numérateur -> 1 - 0 = 1.',
          'Dénominateur -> 2 + 0 = 2.',
          'Donc lim f(x) = 1/2.'
        ],
        finalAnswer: 'lim f(x) = 1/2 en +∞ (asymptote horizontale y = 0,5).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-p2-12',
    targetChapterId: 'math-exp-matrices-graphes',
    title: 'Graphe & Matrice d’Adjacence d’un Réseau d’Amis Réseaux Sociaux',
    context: 'Un mini-réseau social compte 3 membres A, B, C. A est ami avec B et C ; B est ami avec A ; C est ami avec A.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '👥 Graphes & Algorithmes de Réseau',
    questions: [
      {
        questionText: '1. Écrire la matrice d\'adjacence M de ce graphe non orienté d\'ordre 3.',
        hints: ['M[i][j] = 1 si une arête relie i et j, 0 sinon.'],
        solutionSteps: [
          'Ligne 1 (A) : 0, 1, 1.',
          'Ligne 2 (B) : 1, 0, 0.',
          'Ligne 3 (C) : 1, 0, 0.'
        ],
        finalAnswer: 'M = [[0, 1, 1], [1, 0, 0], [1, 0, 0]].',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer M^2 pour connaître le nombre de chemins de longueur 2 reliant les sommets.',
        hints: ['Multiplier la matrice M par elle-même.'],
        solutionSteps: [
          'Ligne 1 * Col 1 = 0*0 + 1*1 + 1*1 = 2 (chemins A->B->A et A->C->A).',
          'M^2 = [[2, 0, 0], [0, 1, 1], [0, 1, 1]].'
        ],
        finalAnswer: 'M^2 = [[2, 0, 0], [0, 1, 1], [0, 1, 1]].',
        pointsAllocated: 3
      }
    ]
  },

  // --- TERMINALE PHYSIQUE-CHIMIE (11 new exercises) ---
  {
    id: 'ex-tpc-p2-1',
    targetChapterId: 'pc-term-mecanique',
    title: 'Vitesse de Libération de la Terre & Fusée Lunaire Artemis',
    context: 'Pour échapper définitivement à l\'attraction terrestre sans propulsion ultérieure, la sonde Artemis doit dépasser la vitesse de libération v_lib = √(2 G MT / RT). MT = 5,97 * 10^24 kg, RT = 6,37 * 10^6 m, G = 6,67 * 10^-11 N.m^2/kg^2.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'space',
    themeLabel: '🚀 Mission Artemis & Vitesse de Libération',
    questions: [
      {
        questionText: '1. Justifier par un bilan d\'énergie mécanique (Em ≥ 0 à l\'infini) l\'expression de la vitesse de libération.',
        hints: ['Em = 0,5 m v^2 - G MT m / RT ≥ 0.'],
        solutionSteps: [
          'À l\'infini, l\'énergie potentielle est nulle. Pour que la vitesse reste positive ou nulle (le projectile s\'échappe), l\'énergie mécanique totale doit être positive ou nulle : Em = 0,5 m v^2 - G MT m / RT ≥ 0.',
          'À la limite : 0,5 m (v_lib)^2 = G MT m / RT <=> v_lib = √(2 G MT / RT).'
        ],
        finalAnswer: 'v_lib = √(2 G MT / RT).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Calculer la valeur numérique de v_lib en km/s.',
        hints: ['Calculer 2 * 6,67*10^-11 * 5,97*10^24 / (6,37*10^6).'],
        solutionSteps: [
          'Numérateur = 7,964 * 10^14.',
          'Fraction = (7,964 * 10^14) / (6,37 * 10^6) ≈ 1,25 * 10^8.',
          'v_lib = √(1,25 * 10^8) ≈ 11 180 m/s = 11,2 km/s.'
        ],
        finalAnswer: 'v_lib ≈ 11,2 km/s (environ 40 300 km/h).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-p2-2',
    targetChapterId: 'pc-term-thermo',
    title: 'Rendement du Cycle de Carnot pour une Centrale Géothermique',
    context: 'Une centrale géothermique puise de la vapeur d\'eau chaude à T_chaude = 250 °C (523 K) et rejette la chaleur dans une rivière à T_froide = 20 °C (293 K).',
    difficulty: 'Type Bac',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '🌋 Géothermie & Théorème de Carnot',
    questions: [
      {
        questionText: '1. Rappeler la formule du rendement maximal théorique de Carnot : η_Carnot = 1 - T_froide / T_chaude (températures absolues en Kelvins).',
        hints: ['Attention à bien convertir en Kelvins ! T(K) = T(°C) + 273,15.'],
        solutionSteps: [
          'T_chaude = 250 + 273 = 523 K.',
          'T_froide = 20 + 273 = 293 K.',
          'η_Carnot = 1 - 293 / 523.'
        ],
        finalAnswer: 'η = 1 - (T_froide / T_chaude).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer le rendement maximal de cette centrale géothermique en %.',
        hints: ['1 - 293/523 ≈ 1 - 0,560.'],
        solutionSteps: [
          'η_Carnot = 1 - 0,5602 = 0,4398 = 44,0%.'
        ],
        finalAnswer: 'Rendement maximal théorique = 44%.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-p2-3',
    targetChapterId: 'pc-term-circuit-rc',
    title: 'Filtre Passe-Bas RC & Fréquence de Coupure Audio',
    context: 'Un filtre audio supprime les bruits parasites aigus avec une résistance R = 1,0 kΩ et un condensateur C = 100 nF. Fréquence de coupure fc = 1 / (2π RC).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🎧 Son Numérique & Filtre Audio RC',
    questions: [
      {
        questionText: '1. Calculer la constante de temps τ = RC de ce filtre.',
        hints: ['R = 1 000 Ω, C = 100 * 10^-9 F.'],
        solutionSteps: [
          'τ = 1000 * (100 * 10^-9) = 1,0 * 10^-4 s = 100 µs.'
        ],
        finalAnswer: 'τ = 1,0 · 10^-4 s (0,1 ms).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la fréquence de coupure fc en Hertz.',
        hints: ['fc = 1 / (2 * π * τ).'],
        solutionSteps: [
          'fc = 1 / (2 * 3,1416 * 10^-4) = 10 000 / 6,2832 ≈ 1 592 Hz.'
        ],
        finalAnswer: 'fc ≈ 1,59 kHz (laisse passer les basses et médiums, atténue les aigus).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-p2-4',
    targetChapterId: 'pc-term-titrage',
    title: 'Titrage par Précipitation de Mohr des Chlorures de l’Eau de Mer',
    context: 'Pour doser les ions Cl- d\'une eau côtière, on verse une solution de nitrate d\'argent (Ag+ + NO3-) en présence d\'ions chromate comme indicateur de fin de réaction.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '🌊 Océanographie & Titrage de Mohr',
    questions: [
      {
        questionText: '1. Écrire la réaction de précipitation entre les ions argent et les ions chlorure.',
        hints: ['Formation du précipité blanc de chlorure d\'argent AgCl (s).'],
        solutionSteps: [
          'Ag+ (aq) + Cl- (aq) -> AgCl (s).'
        ],
        finalAnswer: 'Ag+ + Cl- -> AgCl (s).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Comment repère-t-on l\'équivalence avec l\'indicateur chromate ?',
        hints: ['Apparition d\'un précipité rouge brique de chromate d\'argent Ag2CrO4 dès que tous les Cl- ont précipité.'],
        solutionSteps: [
          'Dès que la totalité des ions Cl- a réagi pour former le précipité blanc d\'AgCl, la première goutte excédentaire d\'Ag+ réagit avec le chromate CrO4^2- pour former un précipité rouge brique d\'Ag2CrO4.'
        ],
        finalAnswer: 'Apparition du précipité rouge brique caractéristique de Ag2CrO4.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-p2-5',
    targetChapterId: 'pc-term-doppler',
    title: 'Échographie Doppler Médicale & Vitesse du Flux Sanguin dans l’Aorte',
    context: 'Une sonde médicale émet des ultrasons à f0 = 5,0 MHz (c = 1 540 m/s dans les tissus mous). Le décalage Doppler mesuré sur les globules rouges est Δf = 3,5 kHz sous un angle θ = 45°.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🩺 Échographie Doppler Cardiaque',
    questions: [
      {
        questionText: '1. Rappeler la formule du Doppler médical avec angle d\'inclinaison : Δf = (2 v f0 cos θ) / c.',
        hints: ['cos(45°) = √2 / 2 ≈ 0,707.'],
        solutionSteps: [
          'Δf = (2 * v * f0 * cos θ) / c <=> v = (Δf * c) / (2 * f0 * cos θ).'
        ],
        finalAnswer: 'v = (Δf · c) / (2 f0 · cos θ).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la vitesse découlement sanguin v en m/s.',
        hints: ['Δf = 3 500 Hz ; f0 = 5,0 * 10^6 Hz ; c = 1 540 m/s ; cos(45°) = 0,707.'],
        solutionSteps: [
          'Numérateur = 3500 * 1540 = 5 390 000.',
          'Dénominateur = 2 * (5,0 * 10^6) * 0,7071 = 7 071 000.',
          'v = 5 390 000 / 7 071 000 ≈ 0,762 m/s.'
        ],
        finalAnswer: 'v ≈ 0,76 m/s (vitesse normale dans l\'aorte).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tpc-p2-6',
    targetChapterId: 'pc-term-diffraction-interferences',
    title: 'Spectrographe Astronomique & Réseau de Diffraction',
    context: 'Un spectrographe utilise un réseau plan comptant N = 600 traits par millimètre pour décomposer la lumière stellaire.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'space',
    themeLabel: '🔭 Astrophysique & Réseau de Diffraction',
    questions: [
      {
        questionText: '1. Calculer le pas du réseau a (distance entre deux fentes consécutives) en mètres.',
        hints: ['a = (1 * 10^-3 m) / 600.'],
        solutionSteps: [
          'a = 10^-3 / 600 ≈ 1,667 * 10^-6 m = 1,67 µm.'
        ],
        finalAnswer: 'a ≈ 1,67 µm.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pour l\'ordre p = 1, la formule du réseau sous incidence normale s\'écrit sin θ = p λ / a. Calculer l\'angle de déviation θ pour la raie rouge à λ = 656 nm.',
        hints: ['sin θ = (656 * 10^-9) / (1,667 * 10^-6).'],
        solutionSteps: [
          'sin θ = 656 / 1667 ≈ 0,3935.',
          'θ = arcsin(0,3935) ≈ 23,2°.'
        ],
        finalAnswer: 'θ ≈ 23,2°.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tpc-p2-7',
    targetChapterId: 'pc-term-cinetique-chimique',
    title: 'Loi de Vitesse d’Ordre 2 & Réaction d’Estérification',
    context: 'Une réaction d\'ordre 2 par rapport à un réactif A vérifie la relation 1/[A]t - 1/[A]0 = k * t. À t = 0, [A]0 = 0,50 mol/L ; après 20 min, [A] = 0,25 mol/L.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '⏱️ Cinétique d’Ordre 2 & Pente 1/[A]',
    questions: [
      {
        questionText: '1. Calculer la constante de vitesse k en L/(mol·min).',
        hints: ['1/0,25 - 1/0,50 = 4 - 2 = 2.', 'k = 2 / 20.'],
        solutionSteps: [
          '1/[A] - 1/[A]0 = 1/0,25 - 1/0,50 = 4,0 - 2,0 = 2,0 L/mol.',
          'k = 2,0 / 20 min = 0,10 L/(mol·min).'
        ],
        finalAnswer: 'k = 0,10 L·mol^-1·min^-1.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quel graphique linéaire permet de prouver expérimentalement qu\'une réaction est d\'ordre 2 ?',
        hints: ['Tracé de 1/[A] en fonction du temps t.'],
        solutionSteps: [
          'Le tracé de 1/[A] en fonction du temps t donne une droite affine de coefficient directeur égal à la constante de vitesse k.'
        ],
        finalAnswer: 'La droite 1/[A] = f(t) de pente positive k.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-p2-8',
    targetChapterId: 'pc-term-transformations-forcees-electrolyse',
    title: 'Purification du Cuivre Industriel par Électroraffinage',
    context: 'Pour purifier du cuivre à 99,99%, on réalise une électrolyse à anode soluble en cuivre brut dans un bain de sulfate de cuivre avec un courant I = 200 A pendant 5 heures (18 000 s). M(Cu) = 63,5 g/mol, F = 96 500 C/mol.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'tech',
    themeLabel: '🏭 Métallurgie & Anode Soluble',
    questions: [
      {
        questionText: '1. Écrire la réaction de réduction du cuivre à la cathode : Cu2+ + 2 e- -> Cu (s).',
        hints: ['Gain de 2 électrons.'],
        solutionSteps: ['Cathode : Cu2+ (aq) + 2 e- -> Cu (s).'],
        finalAnswer: 'Cu2+ + 2 e- -> Cu (s).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la masse de cuivre pur déposée à la cathode.',
        hints: ['Q = I * t = 200 * 18000 = 3,6 * 10^6 C.', 'n(e-) = Q / F.', 'm = (n(e-) / 2) * M(Cu).'],
        solutionSteps: [
          'Q = 200 * 18 000 = 3 600 000 C.',
          'n(e-) = 3 600 000 / 96 500 ≈ 37,30 mol.',
          'n(Cu) = 37,30 / 2 = 18,65 mol.',
          'm(Cu) = 18,65 * 63,5 ≈ 1 184 g ≈ 1,18 kg.'
        ],
        finalAnswer: 'm(Cu) ≈ 1,18 kg de cuivre ultra-pur.',
        pointsAllocated: 6
      }
    ]
  },
  {
    id: 'ex-tpc-p2-9',
    targetChapterId: 'pc-term-radioactivite',
    title: 'Tomographie par Émission de Positons (TEP Scan) au Fluor 18',
    context: 'En médecine nucléaire, le Fluor 18 (18_9 F, demi-vie t1/2 = 110 minutes) subit une radioactivité bêta plus (β+) en émettant un positon (0_+1 e).',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🏥 Médecine Nucléaire & TEP Scan',
    questions: [
      {
        questionText: '1. Écrire l\'équation nucléaire de désintégration du Fluor 18 en appliquant les lois de Soddy.',
        hints: ['18_9 F -> A_Z X + 0_+1 e + neutrino.', 'Conservation de A et Z.'],
        solutionSteps: [
          'A = 18 - 0 = 18.',
          'Z = 9 - 1 = 8 (Élément Oxygène O).',
          '18_9 F -> 18_8 O + 0_+1 e + ν_e.'
        ],
        finalAnswer: '18_9 F -> 18_8 O + 0_+1 e + ν (Oxygène 18).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Que devient le positon lorsqu\'il rencontre un électron du tissu cérébral ? Pourquoi cela permet-il l\'imagerie TEP ?',
        hints: ['Annihilation matière-antimatière produisant 2 photons gamma émis à 180°.'],
        solutionSteps: [
          'L\'annihilation du positon et de l\'électron convertit leur masse en deux photons gamma hautement énergétiques émis en ligne droite dans deux directions opposées (à 180°). Des détecteurs en anneau localisent précisément l\'origine de l\'émission.'
        ],
        finalAnswer: 'Annihilation électron-positon libérant deux photons gamma à 180° détectés par la caméra.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-p2-10',
    targetChapterId: 'pc-term-piles-electrochimie',
    title: 'Force Électromotrice & Potentiel d’une Batterie Lithium-Fer-Phosphate (LiFePO4)',
    context: 'Une cellule LiFePO4 délivre une tension nominale stable U = 3,20 V et possède une capacité C = 100 Ah (Ampères-heures).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '🔋 Batterie Stationnaire & Énergie en Wh',
    questions: [
      {
        questionText: '1. Calculer l\'énergie électrique stockée E_stockée en Watt-heures (Wh) puis en Joules.',
        hints: ['E(Wh) = U * C(Ah).', '1 Wh = 3 600 Joules.'],
        solutionSteps: [
          'E = 3,20 V * 100 Ah = 320 Wh.',
          'En Joules : 320 * 3 600 = 1 152 000 J = 1,15 MJ.'
        ],
        finalAnswer: 'E = 320 Wh = 1,15 MJ.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel avantage de sécurité la technologie LFP offre-t-elle par rapport aux batteries lithium-ion classiques NMC ?',
        hints: ['Stabilité thermique élevée et absence de risque d\'emballement thermique spontané.'],
        solutionSteps: [
          'La liaison fer-phosphate (Fe-P-O) est chimiquement très forte : elle ne libère pas de dioxygène en cas de surchauffe ou de perforation, éliminant le risque d\'incendie par emballement thermique.'
        ],
        finalAnswer: 'Très haute stabilité thermique (aucun risque d\'emballement ou d\'incendie).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tpc-p2-11',
    targetChapterId: 'pc-term-optique',
    title: 'Miroir Primaire Parabolique du Télescope Spatial James Webb',
    context: 'Le télescope James Webb utilise un miroir concave en béryllium doré de diamètre D = 6,5 m pour collecter le rayonnement infrarouge des premières galaxies.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'space',
    themeLabel: '🔭 Télescope Webb & Infrarouge',
    questions: [
      {
        questionText: '1. Pourquoi le miroir est-il recouvert d\'une fine couche d\'or pur de 100 nm ?',
        hints: ['L\'or possède un pouvoir réflecteur exceptionnel (> 98%) dans le domaine infrarouge.'],
        solutionSteps: [
          'L\'or réfléchit plus de 98% de la lumière infrarouge (entre 0,6 et 28 µm), ce qui est optimal pour observer les objets lointains dont la lumière a subi un décalage vers le rouge (redshift) cosmologique.'
        ],
        finalAnswer: 'Réflectivité maximale de l\'or dans l\'infrarouge (> 98%).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi le télescope doit-il être maintenu à une température inférieure à -230 °C (40 K) grâce à son bouclier thermique ?',
        hints: ['Pour éviter que le rayonnement thermique du télescope lui-même n\'aveugle ses capteurs.'],
        solutionSteps: [
          'À température ambiante, le télescope émettrait lui-même son propre rayonnement thermique infrarouge (loi de Planck), saturant ses détecteurs hypersensibles.'
        ],
        finalAnswer: 'Élimination du bruit thermique émis par les instruments eux-mêmes.',
        pointsAllocated: 3
      }
    ]
  },

  // --- TERMINALE SVT (12 new exercises) ---
  {
    id: 'ex-tsvt-p2-1',
    targetChapterId: 'svt-term-expression-genome',
    title: 'Système CRISPR-Cas9 & Ciseaux Moléculaires',
    context: 'Découvert par Emmanuelle Charpentier et Jennifer Doudna, le système CRISPR-Cas9 permet d\'éditer le génome en guidant l\'endonucléase Cas9 par un petit ARN guide (ARNg).',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'science',
    themeLabel: '✂️ Génie Génétique & CRISPR-Cas9',
    questions: [
      {
        questionText: '1. Quel rôle joue l\'ARN guide (ARNg) dans la précision de la coupure de l\'ADN ?',
        hints: ['Complémentarité de bases avec la séquence d\'ADN cible.'],
        solutionSteps: [
          'L\'ARNg contient une séquence d\'une vingtaine de nucléotides complémentaire de la région cible de l\'ADN à modifier. Il guide l\'enzyme Cas9 avec une précision absolue par simple appariement de bases.'
        ],
        finalAnswer: 'Guidage par hybridation complémentaire spécifique avec la séquence cible.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Que fait l\'enzyme Cas9 une fois positionnée sur la séquence cible ?',
        hints: ['Coupure double-brin de l\'hélice d\'ADN.'],
        solutionSteps: [
          'Cas9 est une nucléase qui réalise une coupure nette double-brin de l\'ADN, forçant la cellule à réparer la brèche (ce qui permet d\'insérer ou d\'inactiver un gène précis).'
        ],
        finalAnswer: 'Coupure double-brin de l\'ADN permettant l\'inactivation ou l\'insertion d\'un gène.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-2',
    targetChapterId: 'svt-term-tectonique',
    title: 'Moteur de la Subduction : Rôle du Slab Pull & Densification',
    context: 'En vieillissant, la lithosphère océanique se refroidit par le haut : son manteau lithosphérique s\'épaissit et sa densité globale finit par dépasser celle de l\'asthénosphère sous-jacente.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🌍 Manteau & Traction de Plaque Plongeante',
    questions: [
      {
        questionText: '1. À partir de quel âge (environ) une lithosphère océanique devient-elle plus dense que l\'asthénosphère (instabilité gravitaire) ?',
        hints: ['Environ 30 à 40 millions d\'années.'],
        solutionSteps: [
          'Vers 30 à 40 Ma, le refroidissement lithosphérique fait plonger l\'isotherme 1300 °C. L\'épaississement de la péridotite lithosphérique dense fait que la densité moyenne de la plaque dépasse la densité de l\'asthénosphère (3,25 contre 3,20).'
        ],
        finalAnswer: 'Vers 30 à 40 millions d\'années (instabilité gravitaire).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Pourquoi la métamorphisation en éclogite dense dans le manteau accentue-t-elle le phénomène de traction (slab pull) ?',
        hints: ['L\'éclogite a une densité très élevée (~3,5 g/cm^3) qui tire toute la plaque vers le bas.'],
        solutionSteps: [
          'La transformation des minéraux hydratés en grenat et jadéite (éclogite très dense d ≈ 3,5) alourdit considérablement le panneau plongeant, créant une force de traction gravitaire descendante majeure (slab pull) qui entraîne toute la plaque océanique.'
        ],
        finalAnswer: 'L\'éclogite dense (d ≈ 3,5) amplifie la traction gravitaire descendante (slab pull).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-3',
    targetChapterId: 'svt-term-meiose-diversite',
    title: 'Fécondation & Amplification Combinatoire de la Diversité Zygote',
    context: 'Chez l\'être humain à n = 23 paires de chromosomes, le brassage interchromosomique seul permet 2^23 gamètes distincts par individu.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '👶 Génétique & Nombre de Zygotes Possibles',
    questions: [
      {
        questionText: '1. Calculer le nombre théorique de combinaisons de zygotes possibles par la rencontre aléatoire de deux gamètes de parents distincts (hors crossing-over).',
        hints: ['(2^23) * (2^23) = 2^46.'],
        solutionSteps: [
          '2^23 ≈ 8,388 * 10^6 gamètes chez le père.',
          '2^23 ≈ 8,388 * 10^6 gamètes chez la mère.',
          'Nombre de zygotes uniques possibles = 2^23 * 2^23 = 2^46 ≈ 7,04 * 10^13 (plus de 70 000 milliards de combinaisons !).'
        ],
        finalAnswer: '2^46 ≈ 7 · 10^13 (plus de 70 000 milliards de combinaisons différentes).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Pourquoi le brassage intrachromosomique (crossing-over) rend-il ce nombre virtuellement infini ?',
        hints: ['Possibilité quasi-illimitée d\'échanges de portions de chromatides.'],
        solutionSteps: [
          'Les crossing-over s\'effectuent à des points de cassure aléatoires au niveau de milliers de gènes, générant une infinité de nouvelles combinaisons alléliques au sein de chaque chromosome.'
        ],
        finalAnswer: 'Recombinaison aléatoire continue à l\'intérieur de chaque paire de chromosomes.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-4',
    targetChapterId: 'svt-term-reflexe-myotatique',
    title: 'Innervation Réciproque & Rôle de l’Interneurone Inhibiteur',
    context: 'Lors du réflexe rotulien, pendant que le muscle quadriceps extenseur se contracte, le muscle ischio-jambier antagoniste fléchisseur se relâche simultanément.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '🦵 Neurophysiologie & Innervation Réciproque',
    questions: [
      {
        questionText: '1. Quel neurone relais de la moelle épinière permet d\'inhiber la contraction du muscle antagoniste ?',
        hints: ['Un interneurone inhibiteur à GABA ou glycine.'],
        solutionSteps: [
          'La fibre sensitive Ia se ramifie dans la moelle épinière et fait synapse avec un interneurone inhibiteur. Celui-ci sécrète un neurotransmetteur inhibiteur (GABA ou glycine) qui hyperpolarise le motoneurone du muscle fléchisseur antagoniste.'
        ],
        finalAnswer: 'L\'interneurone inhibiteur médullaire.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Pourquoi ce relâchement du muscle antagoniste est-il indispensable à la réalisation du mouvement ?',
        hints: ['Éviter le blocage de l\'articulation par opposition simultanée des forces.'],
        solutionSteps: [
          'Si les deux muscles opposés se contractaient en même temps, l\'articulation du genou serait verrouillée et aucun mouvement d\'extension ne pourrait avoir lieu.'
        ],
        finalAnswer: 'Permet le mouvement fluide sans blocage mécanique de l\'articulation.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-5',
    targetChapterId: 'svt-term-cerveau-mouvement',
    title: 'GABA, Récepteurs GABA-A & Action des Somnifères (Benzodiazépines)',
    context: 'Les anxiolytiques et somnifères de type benzodiazépine augmentent l\'effet du neurotransmetteur inhibiteur GABA au niveau des synapses cérébrales.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧠 Pharmacologie Cérébrale & Synapses',
    questions: [
      {
        questionText: '1. Quel ion pénètre dans le neurone post-synaptique lors de l\'ouverture du canal récepteur GABA-A ?',
        hints: ['Ion chlorure Cl- chargé négativement.'],
        solutionSteps: [
          'Le récepteur GABA-A est un canal ionique sélectif aux ions chlorure Cl-. L\'afflux d\'ions Cl- négatifs fait chuter le potentiel de membrane sous -70 mV : c\'est une hyperpolarisation (Potentiel Post-Synaptique Inhibiteur ou PPSI).'
        ],
        finalAnswer: 'Les ions chlorure Cl- (provoquant une hyperpolarisation inhibitrice).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Pourquoi cette hyperpolarisation diminue-t-elle l\'excitabilité des circuits neuronaux ?',
        hints: ['Elle éloigne le potentiel de membrane du seuil d\'excitation (-50 mV).'],
        solutionSteps: [
          'En rendant l\'intérieur de la cellule plus négatif, l\'hyperpolarisation éloigne le neurone du seuil de dépolarisation nécessaire au déclenchement d\'un potentiel d\'action : le neurone devient moins réactif, entraînant sédation et apaisement de l\'anxiété.'
        ],
        finalAnswer: 'Éloignement du seuil de déclenchement du potentiel d\'action (effet sédatif).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-6',
    targetChapterId: 'svt-term-glycemie-diabete',
    title: 'Capteur de Glucose Continu Sous-Cutané & Pompe à Insuline Connectée',
    context: 'Les personnes atteintes de diabète de type 1 utilisent désormais des capteurs interstitiels qui mesurent la glycémie toutes les 5 minutes et pilotent une boucle fermée (pancréas artificiel).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '📱 Pancréas Artificiel & Boucle Fermée',
    questions: [
      {
        questionText: '1. Dans quel compartiment liquide le capteur sous-cutané mesure-t-il le glucose ?',
        hints: ['Liquide interstitiel du tissu sous-cutané et non directement le sang intraveineux.'],
        solutionSteps: [
          'Le capteur à micro-filament mesure le glucose présent dans le liquide interstitiel qui baigne les cellules du tissu adipeux sous-cutané (avec un léger décalage physiologique de quelques minutes par rapport au sang).'
        ],
        finalAnswer: 'Le liquide interstitiel sous-cutané.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Comment l\'algorithme de la pompe ajuste-t-il le débit d\'insuline en cas de menace d\'hypoglycémie (< 0,70 g/L) ?',
        hints: ['Coupure automatique de la perfusion d\'insuline basale.'],
        solutionSteps: [
          'L\'algorithme prédictif suspend immédiatement l\'injection basale d\'insuline pour permettre à la glycémie de remonter spontanément grâce à la production de glucose par le foie.'
        ],
        finalAnswer: 'Arrêt automatique de l\'injection d\'insuline pour prévenir le coma hypoglycémique.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-7',
    targetChapterId: 'svt-term-stress-organisme',
    title: 'Système Nerveux Parasympathique & Nerf Vague (Ralentisseur Cardiaque)',
    context: 'Après une situation de panique, le retour au calme s\'effectue grâce à l\'acétylcholine libérée par les terminaisons du nerf vague (nerf crânien X).',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🧘 Relaxation & Nerf Vague Parasympathique',
    questions: [
      {
        questionText: '1. Quel est l\'effet de l\'acétylcholine sur les cellules pacemaker du nœud sinusal du cœur ?',
        hints: ['Ralentissement de la fréquence cardiaque (bradycardie).'],
        solutionSteps: [
          'L\'acétylcholine hyperpolarise les cellules nodales cardiaques en ouvrant des canaux potassium K+, ralentissant le rythme spontané des dépolarisations : la fréquence cardiaque baisse.'
        ],
        finalAnswer: 'Ralentissement de la fréquence cardiaque (effet chronotrope négatif).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle technique respiratoire permet de stimuler volontairement le tonus vagal ?',
        hints: ['Cohérence cardiaque ou expiration lente et profonde.'],
        solutionSteps: [
          'Une expiration prolongée et ralentie (cohérence cardiaque à 6 respirations par minute) active le baroréflexe et stimule le nerf vague, induisant un apaisement immédiat.'
        ],
        finalAnswer: 'Expiration lente et profonde (cohérence cardiaque).',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-8',
    targetChapterId: 'svt-term-histoire-geologique-datation',
    title: 'Fossiles Stratigraphiques Repères : Ammonites & Foraminifères',
    context: 'Pour dater une strate sédimentaire sans méthode radiométrique, les géologues recherchent des fossiles stratigraphiques d\'ammonites.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🦴 Paléontologie & Datation Relative',
    questions: [
      {
        questionText: '1. Quelles sont les trois caractéristiques obligatoires d\'un bon fossile stratigraphique ?',
        hints: ['Courte durée d\'existence de l\'espèce, grande extension géographique mondiale, abondance numérique.'],
        solutionSteps: [
          '1. Une courte durée d\'existence à l\'échelle géologique (évolution rapide).',
          '2. Une très vaste répartition géographique mondiale (organismes marins pélagiques).',
          '3. Une grande abondance numérique facilitant sa découverte dans les roches.'
        ],
        finalAnswer: 'Courte durée géologique, vaste répartition mondiale, grande abondance.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quel principe géologique permet d\'affirmer que deux couches rocheuses distantes de 500 km contenant la même espèce d\'ammonite ont le même âge ?',
        hints: ['Principe d\'identité paléontologique.'],
        solutionSteps: [
          'C\'est le principe d\'identité paléontologique : deux strates contenant la même association de fossiles stratigraphiques ont le même âge géologique, quelle que soit leur nature pétrographique.'
        ],
        finalAnswer: 'Le principe d\'identité paléontologique.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-9',
    targetChapterId: 'svt-term-climats-archives-rechauffement',
    title: 'Cycles de Milankovitch : Excentricité, Obliquité et Précession',
    context: 'Les grandes glaciations du Quaternaire sont rythmées par les variations périodiques des paramètres orbitaux de la Terre.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🌍 Astronomie & Paramètres de Milankovitch',
    questions: [
      {
        questionText: '1. Associer chaque paramètre orbital à sa période dominante : Excentricité (forme de l\'ellipse), Obliquité (inclinaison de l\'axe), Précession des équinoxes.',
        hints: ['100 000 ans, 41 000 ans, 23 000 ans.'],
        solutionSteps: [
          'Excentricité : cycle principal de 100 000 ans (et 400 000 ans).',
          'Obliquité : cycle de 41 000 ans (variation de l\'inclinaison de 22,1° à 24,5°).',
          'Précession des équinoxes : cycle d\'environ 21 000 à 23 000 ans.'
        ],
        finalAnswer: 'Excentricité (100 ka), Obliquité (41 ka), Précession (23 ka).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quelle condition d\'ensoleillement estival dans l\'hémisphère Nord favorise le déclenchement d\'une période glaciaire ?',
        hints: ['Étés frais ne permettant pas à la neige hivernale de fondre complètement.'],
        solutionSteps: [
          'Des étés frais aux hautes latitudes nord empêchent la fonte complète des couches de neige accumulées l\'hiver : la glace s\'épaissit d\'année en année, augmente l\'albédo et déclenche l\'inlandsis glaciaire.'
        ],
        finalAnswer: 'Étés frais aux hautes latitudes nord empêchant la fonte des neiges.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-10',
    targetChapterId: 'svt-term-plantes-angiospermes',
    title: 'Vaisseaux Conducteurs de Sève : Xylème (Brute) vs Phloème (Élaborée)',
    context: 'Un chêne centenaire de 30 mètres puise l\'eau du sol et la transporte jusqu\'aux feuilles sommitales sous une tension négative immense.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🌳 Botanique & Transport des Sèves',
    questions: [
      {
        questionText: '1. Quel tissu conducteur tubulaire rigide renforcé de lignine transporte la sève brute (eau et ions minéraux) des racines vers les feuilles ?',
        hints: ['Le xylème.'],
        solutionSteps: [
          'Le xylème est formé de cellules mortes aux parois épaissies par de la lignine imperméable, formant de véritables canalisations rigides capables de résister à de fortes dépressions.'
        ],
        finalAnswer: 'Le xylème.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel phénomène physique au niveau des stomates foliaires est le moteur principal de l\'ascension de la sève brute ?',
        hints: ['La transpiration foliaire (évaporation de l\'eau créant une tension d\'aspiration continue).'],
        solutionSteps: [
          'L\'évaporation de l\'eau par les stomates des feuilles (transpiration foliaire) crée une puissante tension d\'aspiration transmise de proche en proche dans toute la colonne d\'eau grâce aux liaisons hydrogène entre molécules d\'eau (théorie de la cohésion-tension).'
        ],
        finalAnswer: 'La transpiration foliaire créant une tension d\'aspiration continue.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-11',
    targetChapterId: 'svt-term-immunite-adaptative',
    title: 'Complexe Majeur d’Histocompatibilité (CMH I et CMH II) & Rejet de Greffe',
    context: 'Avant une greffe rénale, on réalise un groupage HLA (Human Leukocyte Antigen, nom du CMH humain) pour trouver le donneur le plus compatible possible avec le receveur.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🏥 Transplantation & Molécules du CMH',
    questions: [
      {
        questionText: '1. Sur quelles cellules de l\'organisme trouve-t-on les molécules du CMH de classe I ?',
        hints: ['Sur toutes les cellules nucléées de l\'organisme.'],
        solutionSteps: [
          'Le CMH I est exprimé à la surface de toutes les cellules possédant un noyau (à l\'exception notable des hématies anucléées), servant de carte d\'identité du soi.'
        ],
        finalAnswer: 'Sur la quasi-totalité des cellules nucléées de l\'organisme.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi des lymphocytes T du receveur attaquent-ils le greffon si les allèles HLA diffèrent (rejet aigu) ?',
        hints: ['Reconnaissance allogénique : les molécules CMH du donneur sont reconnues comme des molécules étrangères.'],
        solutionSteps: [
          'Les molécules HLA étrangères du donneur sont reconnues directement comme non-soi par les récepteurs TCR des lymphocytes T du receveur, déclenchant une attaque cytotoxique massive contre les vaisseaux du greffon.'
        ],
        finalAnswer: 'Reconnaissance du CMH du donneur comme antigène étranger déclenchant l\'attaque par les LT.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-p2-12',
    targetChapterId: 'svt-term-genetique-populations',
    title: 'Avantage Hétérozygote & Maintien de l’Allèle de la Drépanocytose en Zone de Paludisme',
    context: 'En Afrique subsaharienne, la fréquence de l\'allèle mutant de l\'hémoglobine HbS atteint jusqu\'à 20% malgré la gravité de la drépanocytose chez les homozygotes HbS/HbS.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🦟 Évolution & Sélection Balancée Paludisme',
    questions: [
      {
        questionText: '1. Quel parasite est responsable du paludisme et quel avantage les individus hétérozygotes HbA/HbS possèdent-ils ?',
        hints: ['Plasmodium falciparum ; résistance naturelle accrue au paludisme sans développer la drépanocytose sévère.'],
        solutionSteps: [
          'Le parasite est Plasmodium falciparum, transmis par l\'anophèle.',
          'Les globules rouges des hétérozygotes HbA/HbS hébergent plus difficilement le parasite et se déforment prématurément pour être éliminés par la rate, leur conférant une protection naturelle majeure contre les formes mortelles de paludisme.'
        ],
        finalAnswer: 'Plasmodium falciparum ; les hétérozygotes résistent au paludisme mortel.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Comment la sélection naturelle maintient-elle cet allèle morbide dans la population (sélection équilibrée ou balancée) ?',
        hints: ['Les hétérozygotes ont une valeur sélective (fitness) supérieure à la fois aux homozygotes sains (qui meurent du paludisme) et aux homozygotes malades.'],
        solutionSteps: [
          'Les homozygotes sains HbA/HbA sont décimés par le paludisme infantile.',
          'Les homozygotes malades HbS/HbS souffrent de drépanocytose sévère.',
          'Les hétérozygotes HbA/HbS survivent mieux aux deux menaces et ont le meilleur taux de reproduction : la sélection naturelle stabilise la fréquence de l\'allèle à un niveau élevé.'
        ],
        finalAnswer: 'Survie supérieure des hétérozygotes (sélection balancée / avantage hétérozygote).',
        pointsAllocated: 4
      }
    ]
  }
];
