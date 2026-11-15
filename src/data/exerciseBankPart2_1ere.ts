import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_PART2_1ERE: BankExerciseItem[] = [
  // --- 1ERE MATHS (11 new exercises) ---
  {
    id: 'ex-1m-p2-1',
    targetChapterId: 'math-1ere-second-degre',
    title: 'Balistique Virtuelle & Parabole de Saut en Battle Royale',
    context: 'Un joueur saute d\'une falaise avec un grappin propulseur. Sa hauteur h(x) (en mètres) à la distance horizontale x (en mètres) est modélisée par h(x) = -0,25x^2 + 2x + 12.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'gaming',
    themeLabel: '🎮 Battle Royale & Parabole',
    questions: [
      {
        questionText: '1. Calculer la hauteur de la falaise d\'où le joueur s\'élance (x = 0).',
        hints: ['Calculer h(0).'],
        solutionSteps: ['h(0) = -0,25(0)^2 + 2(0) + 12 = 12 mètres.'],
        finalAnswer: 'Hauteur initiale = 12 mètres.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Déterminer l\'altitude maximale atteinte par le joueur lors de son saut.',
        hints: ['Sommet en α = -b / (2a) = -2 / (2 * -0,25) = 4.'],
        solutionSteps: [
          'α = -2 / (-0,5) = 4 mètres.',
          'h(4) = -0,25(16) + 2(4) + 12 = -4 + 8 + 12 = 16 mètres.'
        ],
        finalAnswer: 'Altitude maximale = 16 mètres (atteinte à x = 4 m).',
        pointsAllocated: 3
      },
      {
        questionText: '3. Résoudre h(x) = 0 pour déterminer la distance horizontale totale d\'atterrissage.',
        hints: ['Δ = b^2 - 4ac = 4 - 4(-0,25)(12) = 4 + 12 = 16 = 4^2.'],
        solutionSteps: [
          'Δ = 2^2 - 4 * (-0,25) * 12 = 4 + 12 = 16.',
          'x = (-2 - 4) / (-0,5) = -6 / -0,5 = 12 m (l\'autre racine x = (-2 + 4)/(-0,5) = -4 est rejetée car x ≥ 0).'
        ],
        finalAnswer: 'Distance totale d\'atterrissage = 12 mètres.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1m-p2-2',
    targetChapterId: 'math-1ere-variations-derivation',
    title: 'Dérivée & Coût Marginal d’un Fabricant de Puces IA',
    context: 'Le coût total de production de x centaines de puces IA est C(x) = 2x^3 - 9x^2 + 12x + 10 (en milliers d\'euros).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '💻 Semi-conducteurs & Dérivation',
    questions: [
      {
        questionText: '1. Calculer la fonction dérivée C\'(x) représentant le coût marginal.',
        hints: ['(2x^3)\' = 6x^2, (-9x^2)\' = -18x.'],
        solutionSteps: [
          'C\'(x) = 6x^2 - 18x + 12.'
        ],
        finalAnswer: 'C\'(x) = 6x^2 - 18x + 12.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Factoriser C\'(x) et dresser le tableau de variations de la fonction coût C sur [0 ; 5].',
        hints: ['C\'(x) = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2).'],
        solutionSteps: [
          'Racines de x^2 - 3x + 2 : x = 1 et x = 2.',
          'C\'(x) > 0 sur [0 ; 1[, C\'(x) < 0 sur ]1 ; 2[, C\'(x) > 0 sur ]2 ; 5].',
          'C est croissante sur [0 ; 1], décroissante sur [1 ; 2], puis croissante sur [2 ; 5].'
        ],
        finalAnswer: 'C\'(x) = 6(x - 1)(x - 2) ; extremums locaux en x = 1 et x = 2.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1m-p2-3',
    targetChapterId: 'math-1ere-exponentielle',
    title: 'Refroidissement d’une Pâte Thermique de Processeur Gamer',
    context: 'Après une session intense d\'overclocking, la température T(t) en °C du processeur évolue selon T(t) = 30 + 55 * e^(-0,1t) avec t en minutes.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'gaming',
    themeLabel: '🎮 Hardware PC & Exponentielle',
    questions: [
      {
        questionText: '1. Quelle est la température du processeur à l\'arrêt du jeu (t = 0) ?',
        hints: ['e^0 = 1.'],
        solutionSteps: ['T(0) = 30 + 55 * 1 = 85 °C.'],
        finalAnswer: 'T(0) = 85 °C.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Vers quelle température finale le processeur se stabilise-t-il après un temps très long ?',
        hints: ['lim e^(-0,1t) = 0 quand t -> +∞.'],
        solutionSteps: ['Quand t -> +∞, e^(-0,1t) -> 0, donc T(t) -> 30 °C (température ambiante du boîtier).'],
        finalAnswer: 'T_limite = 30 °C.',
        pointsAllocated: 2
      },
      {
        questionText: '3. Calculer la dérivée T\'(t) et justifier que le refroidissement est continu.',
        hints: ['T\'(t) = 55 * (-0,1) * e^(-0,1t).'],
        solutionSteps: [
          'T\'(t) = -5,5 * e^(-0,1t).',
          'Pour tout t, e^(-0,1t) > 0, donc T\'(t) < 0 strictement.',
          'La température décroît de façon continue vers 30 °C.'
        ],
        finalAnswer: 'T\'(t) = -5,5 e^(-0,1t) < 0 (décroissance stricte).',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1m-p2-4',
    targetChapterId: 'math-1ere-suites',
    title: 'Calcul de la Portée d’un Signal Starlink par Suite Géométrique',
    context: 'Un signal satellite perd 10% de sa puissance à chaque traversée d\'une couche atmosphérique dense. Puissance initiale P0 = 500 Watts.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'space',
    themeLabel: '🚀 Satellites & Suite Géométrique',
    questions: [
      {
        questionText: '1. Exprimer Pn+1 en fonction de Pn et en déduire la nature de la suite (Pn).',
        hints: ['Perdre 10% revient à multiplier par 1 - 0,10 = 0,90.'],
        solutionSteps: [
          'Pn+1 = Pn - 0,10 Pn = 0,90 Pn.',
          'Il s\'agit d\'une suite géométrique de premier terme P0 = 500 W et de raison q = 0,90.'
        ],
        finalAnswer: 'Suite géométrique de raison q = 0,90 et P0 = 500 W.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Donner l\'expression explicite de Pn en fonction de n et calculer la puissance restante P4 après 4 couches.',
        hints: ['Pn = P0 * q^n.', 'Calculer 500 * (0,90)^4.'],
        solutionSteps: [
          'Pn = 500 * (0,90)^n.',
          'P4 = 500 * (0,90)^4 = 500 * 0,6561 = 328,05 W.'
        ],
        finalAnswer: 'Pn = 500 · (0,90)^n ; P4 ≈ 328,1 W.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-p2-5',
    targetChapterId: 'math-1ere-scalaire',
    title: 'Amarrage Spatiale : Calcul d’Angle par Produit Scalaire',
    context: 'Deux modules de station orbitale ont pour vecteurs de guidage u(3 ; 4) et v(4 ; -3). On teste leur alignement pour l\'amarrage.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'space',
    themeLabel: '🛰️ Station Spatiale & Orthogonalité',
    questions: [
      {
        questionText: '1. Calculer le produit scalaire u · v sous forme analytique.',
        hints: ['u · v = xx\' + yy\'.'],
        solutionSteps: [
          'u · v = 3 * 4 + 4 * (-3) = 12 - 12 = 0.'
        ],
        finalAnswer: 'u · v = 0.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle est la disposition angulaire des deux axes de guidage ?',
        hints: ['Un produit scalaire nul entre deux vecteurs non nuls signifie l\'orthogonalité.'],
        solutionSteps: [
          'Comme u ≠ 0 et v ≠ 0 et u · v = 0, les vecteurs u et v sont orthogonaux (angle droit de 90°).'
        ],
        finalAnswer: 'Les deux axes sont strictement perpendiculaires (angle de 90°).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1m-p2-6',
    targetChapterId: 'math-1ere-trigo',
    title: 'Rotation d’une Caméra de Surveillance 360°',
    context: 'La caméra effectue une rotation d\'un angle orienté α = 5π/3 radians. On cherche ses coordonnées sur le cercle trigonométrique.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '📹 Vidéosurveillance & Trigonométrie',
    questions: [
      {
        questionText: '1. Exprimer 5π/3 sous la forme 2π - θ pour trouver sa mesure principale.',
        hints: ['5/3 = 2 - 1/3.'],
        solutionSteps: [
          '5π/3 = 2π - π/3.',
          'La mesure principale dans ]-π ; π] est donc -π/3.'
        ],
        finalAnswer: 'Mesure principale = -π/3 radians.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Déterminer les valeurs exactes de cos(5π/3) et sin(5π/3).',
        hints: ['cos(-x) = cos(x) et sin(-x) = -sin(x).', 'cos(π/3) = 1/2 et sin(π/3) = √3/2.'],
        solutionSteps: [
          'cos(5π/3) = cos(-π/3) = cos(π/3) = 1/2.',
          'sin(5π/3) = sin(-π/3) = -sin(π/3) = -√3/2.'
        ],
        finalAnswer: 'cos(5π/3) = 1/2 et sin(5π/3) = -√3/2.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1m-p2-7',
    targetChapterId: 'math-1ere-probas-cond',
    title: 'Fiabilité d’un Système de Reconnaissance Faciale IA',
    context: 'Un système biométrique identifie 5% d\'individus inscrits sur liste noire (N). Le système sonne (A) avec une sensibilité de 96% si la personne est fichée, mais déclenche 2% de fausses alertes sur les personnes innocentes.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'tech',
    themeLabel: '🤖 Biométrie & Probabilités Conditionnelles',
    questions: [
      {
        questionText: '1. Calculer la probabilité totale qu\'une alerte retentisse P(A).',
        hints: ['P(A) = P(N ∩ A) + P(non N ∩ A).', 'P(N) = 0,05 ; P(non N) = 0,95.'],
        solutionSteps: [
          'P(N ∩ A) = 0,05 * 0,96 = 0,048.',
          'P(non N ∩ A) = 0,95 * 0,02 = 0,019.',
          'P(A) = 0,048 + 0,019 = 0,067 (6,7%).'
        ],
        finalAnswer: 'P(A) = 0,067 (6,7%).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Si l\'alarme sonne, quelle est la probabilité que la personne soit réellement fichée P(N | A) ?',
        hints: ['P(N | A) = P(N ∩ A) / P(A).'],
        solutionSteps: [
          'P(N | A) = 0,048 / 0,067 ≈ 0,7164.'
        ],
        finalAnswer: 'P(N | A) ≈ 71,6%.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-p2-8',
    targetChapterId: 'math-1ere-variables-aleatoires',
    title: 'Espérance & Tarification d’une Assurance Smartphone',
    context: 'Un assureur propose un contrat annuel à 30 €. En cas d\'écran cassé (proba 0,10), il rembourse 120 €. En cas de vol (proba 0,02), il rembourse 400 €.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '📱 Assurance Smartphone & Espérance',
    questions: [
      {
        questionText: '1. Calculer le coût moyen remboursé par l\'assureur par contrat (espérance des sinistres E(S)).',
        hints: ['E(S) = 120 * 0,10 + 400 * 0,02.'],
        solutionSteps: [
          'E(S) = 12 + 8 = 20 €.'
        ],
        finalAnswer: 'E(S) = 20 €.',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire le bénéfice moyen de l\'assureur par contrat vendu.',
        hints: ['Prix de la cotisation - coût moyen des sinistres.'],
        solutionSteps: [
          'Bénéfice = 30 € - 20 € = 10 € par contrat.'
        ],
        finalAnswer: 'Bénéfice net moyen = 10 € par client.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1m-p2-9',
    targetChapterId: 'math-1ere-second-degre',
    title: 'Discriminant Négatif & Étude du Signe d’un Rendement',
    context: 'Le rendement thermique d\'un moteur électrique est proportionnel à R(x) = -3x^2 + 6x - 5.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '⚡ Moteur Électrique & Discriminant',
    questions: [
      {
        questionText: '1. Calculer le discriminant Δ de ce trinôme.',
        hints: ['Δ = b^2 - 4ac avec a = -3, b = 6, c = -5.'],
        solutionSteps: [
          'Δ = 6^2 - 4 * (-3) * (-5) = 36 - 60 = -24 < 0.'
        ],
        finalAnswer: 'Δ = -24 < 0.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel est le signe de R(x) sur ℝ ? Admet-il des racines réelles ?',
        hints: ['Comme Δ < 0, le trinôme n\'a aucune racine réelle et garde constamment le signe de a.'],
        solutionSteps: [
          'Puisque Δ < 0 et a = -3 < 0, R(x) est strictement négatif pour tout x ∈ ℝ et ne s\'annule jamais dans ℝ.'
        ],
        finalAnswer: 'Strictement négatif sur ℝ ; aucune racine réelle.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1m-p2-10',
    targetChapterId: 'math-1ere-suites',
    title: 'Somme des N Premiers Entiers & Tournoi d’Esport',
    context: 'Dans un tournoi de jeu vidéo à round-robin (chacun rencontre tout le monde une fois), il y a n = 16 équipes engagées.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'gaming',
    themeLabel: '🏆 Esport & Somme d’une Suite Arithmétique',
    questions: [
      {
        questionText: '1. Rappeler la formule de la somme des entiers de 1 à k : S = k(k+1)/2.',
        hints: ['Chaque équipe joue avec les 15 autres.'],
        solutionSteps: [
          'Le nombre de matchs uniques entre 16 équipes est la somme 15 + 14 + ... + 1 = 15 * 16 / 2.'
        ],
        finalAnswer: 'Formule : S = k(k + 1) / 2.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer le nombre total de matchs à organiser durant ce tournoi.',
        hints: ['15 * 16 / 2.'],
        solutionSteps: [
          'Total = 15 * 16 / 2 = 15 * 8 = 120 matchs.'
        ],
        finalAnswer: '120 matchs au total.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-p2-11',
    targetChapterId: 'math-1ere-variations-derivation',
    title: 'Équation de Tangente Horizontale & Sommet de Parabole',
    context: 'Soit la fonction f(x) = 2x^2 - 8x + 5. On cherche en quel point la courbe admet une tangente horizontale (pente nulle).',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '📐 Tangente & Nombre Dérivé Nul',
    questions: [
      {
        questionText: '1. Calculer f\'(x) et résoudre f\'(x) = 0.',
        hints: ['f\'(x) = 4x - 8.'],
        solutionSteps: [
          'f\'(x) = 4x - 8.',
          '4x - 8 = 0 <=> x = 2.'
        ],
        finalAnswer: 'x = 2.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Donner l\'équation complète de cette tangente horizontale.',
        hints: ['y = f(2).'],
        solutionSteps: [
          'f(2) = 2(4) - 8(2) + 5 = 8 - 16 + 5 = -3.',
          'La tangente a pour équation y = -3.'
        ],
        finalAnswer: 'y = -3.',
        pointsAllocated: 2
      }
    ]
  },

  // --- 1ERE PHYSIQUE-CHIMIE (11 new exercises) ---
  {
    id: 'ex-1pc-p2-1',
    targetChapterId: 'pc-1ere-suivi-reaction-avancement',
    title: 'Synthèse du Savon par Saponification & Suivi Chimique',
    context: 'La saponification de l\'oléine (triglycéride) par la soude concentrée produit du savon et du glycérol. On mélange n1 = 0,20 mol d\'oléine et n2 = 0,90 mol de soude (rapport 1 pour 3).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧼 Chimie Organique & Saponification',
    questions: [
      {
        questionText: '1. Écrire la relation stœchiométrique et déterminer le réactif limitant.',
        hints: ['1 Oléine + 3 HO- -> 1 Glycérol + 3 Savon.', 'Comparer n1/1 et n2/3.'],
        solutionSteps: [
          'n1 / 1 = 0,20 mol.',
          'n2 / 3 = 0,90 / 3 = 0,30 mol.',
          'Comme 0,20 < 0,30, l\'oléine est le réactif limitant et x_max = 0,20 mol.'
        ],
        finalAnswer: 'L\'oléine est le réactif limitant (x_max = 0,20 mol).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quelle quantité de matière de savon est produite à l\'état final ?',
        hints: ['n(savon) = 3 * x_max.'],
        solutionSteps: [
          'n(savon) = 3 * 0,20 = 0,60 mol.'
        ],
        finalAnswer: 'n(savon) = 0,60 mol.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-p2-2',
    targetChapterId: 'pc-1ere-acide-base-ph',
    title: 'Auto-Ionisation de l’Eau & Produit Ionique Ke',
    context: 'À 25 °C, l\'eau pure subit la réaction d\'autoprotolyse : 2 H2O (l) = H3O+ (aq) + HO- (aq) avec Ke = [H3O+][HO-] = 1,0 * 10^-14.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '💧 Eau Pure & Produit Ionique',
    questions: [
      {
        questionText: '1. Pourquoi le pH de l\'eau pure à 25 °C vaut-il exactement 7,0 ?',
        hints: ['Par neutralité électrique : [H3O+] = [HO-].', '[H3O+]^2 = Ke.'],
        solutionSteps: [
          'Dans l\'eau pure : [H3O+] = [HO-].',
          'Donc [H3O+]^2 = 1,0 * 10^-14 <=> [H3O+] = 1,0 * 10^-7 mol/L.',
          'pH = -log(1,0 * 10^-7) = 7,0.'
        ],
        finalAnswer: 'pH = 7,0 car [H3O+] = 10^-7 mol/L.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Dans une solution d\'eau de Javel où [HO-] = 1,0 * 10^-3 mol/L, calculer [H3O+] puis le pH.',
        hints: ['[H3O+] = Ke / [HO-].'],
        solutionSteps: [
          '[H3O+] = (1,0 * 10^-14) / (1,0 * 10^-3) = 1,0 * 10^-11 mol/L.',
          'pH = -log(1,0 * 10^-11) = 11,0.'
        ],
        finalAnswer: '[H3O+] = 10^-11 mol/L et pH = 11,0 (très basique).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-p2-3',
    targetChapterId: 'pc-1ere-oxydoreduction',
    title: 'Pile à Combustible Hydrogène d’un Bus Écologique',
    context: 'La pile d\'un bus urbain fonctionne grâce aux couples H+ / H2 et O2 / H2O.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '🚌 Mobilité Propre & Pile H2',
    questions: [
      {
        questionText: '1. Écrire les demi-équations à l\'anode (oxydation de H2) et à la cathode (réduction de O2).',
        hints: ['H2 -> 2 H+ + 2 e-.', 'O2 + 4 H+ + 4 e- -> 2 H2O.'],
        solutionSteps: [
          'Anode : H2 -> 2 H+ + 2 e- (x2).',
          'Cathode : O2 + 4 H+ + 4 e- -> 2 H2O.'
        ],
        finalAnswer: 'Anode : 2 H2 -> 4 H+ + 4 e- ; Cathode : O2 + 4 H+ + 4 e- -> 2 H2O.',
        pointsAllocated: 4
      },
      {
        questionText: '2. En déduire l\'équation bilan globale. Quel est l\'unique déchet produit par le pot d\'échappement ?',
        hints: ['Sommer les deux demi-équations.'],
        solutionSteps: [
          '2 H2 + O2 -> 2 H2O.',
          'Le seul produit rejeté à l\'échappement est de l\'eau liquide/vapeur, zéro polluant toxique !'
        ],
        finalAnswer: '2 H2 + O2 -> 2 H2O ; rejet exclusif de vapeur d\'eau.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-p2-4',
    targetChapterId: 'pc-1ere-structure-matiere',
    title: 'Structure de Lewis & Apolarité du Dioxyde de Carbone (CO2)',
    context: 'Le CO2 (C : Z=6, O : Z=8) est un gaz à effet de serre majeur. On étudie sa géométrie et sa polarité.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🌍 Climat & Géométrie Moléculaire',
    questions: [
      {
        questionText: '1. Donner le schéma de Lewis du CO2 et identifier les liaisons doubles.',
        hints: ['O=C=O avec 2 doublets non liants sur chaque oxygène.'],
        solutionSteps: [
          'L\'atome de carbone central forme une double liaison avec chaque oxygène : O=C=O.',
          'Chaque oxygène conserve 2 doublets non liants.'
        ],
        finalAnswer: 'O = C = O (2 doubles liaisons liantes, 4 doublets non liants au total).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi la molécule de CO2 est-elle apolaire bien que ses liaisons C=O soient fortement polarisées ?',
        hints: ['Molécule linéaire : symétrie des moments dipolaires opposés.'],
        solutionSteps: [
          'La géométrie est rigoureusement linéaire (angle de 180°).',
          'Les deux dipôles de liaison C->O ont la même intensité mais sont de sens opposés : leur somme vectorielle est nulle.',
          'Le barycentre des charges partielles positives coïncide avec celui des charges négatives au centre de l\'atome de carbone : la molécule est donc apolaire.'
        ],
        finalAnswer: 'Molécule linéaire symétrique : les moments dipolaires s\'annulent vectoriellement.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-p2-5',
    targetChapterId: 'pc-1ere-mvt-energie',
    title: 'Énergie Potentielle Élastique d’un Trampoline',
    context: 'Un gymnaste comprime les ressorts d\'un trampoline d\'une distance x = 0,40 m. La raideur équivalente est k = 5 000 N/m.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🤸 Gymnastique & Ressorts',
    questions: [
      {
        questionText: '1. Rappeler la formule de l\'énergie potentielle élastique Ep_el d\'un ressort comprimé.',
        hints: ['Ep_el = 0,5 * k * x^2.'],
        solutionSteps: [
          'Ep_el = 0,5 * k * x^2.'
        ],
        finalAnswer: 'Ep_el = 1/2 · k · x^2.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer l\'énergie stockée dans les ressorts du trampoline.',
        hints: ['0,5 * 5000 * 0,40^2.'],
        solutionSteps: [
          'Ep_el = 0,5 * 5000 * (0,40)^2 = 2500 * 0,16 = 400 Joules.'
        ],
        finalAnswer: 'Ep_el = 400 Joules.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1pc-p2-6',
    targetChapterId: 'pc-1ere-ondes-meca',
    title: 'Fréquence Harmonique d’une Corde de Guitare Électrique',
    context: 'Une corde de guitare en acier de longueur L = 65 cm vibre à son mode fondamental avec une fréquence f1 = 440 Hz (Note La3).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '🎸 Musique & Ondes Stationnaires',
    questions: [
      {
        questionText: '1. Quelle est la longueur d\'onde λ1 du mode fondamental de vibration ?',
        hints: ['Pour un mode fondamental sur une corde fixée aux deux bouts : L = λ / 2.'],
        solutionSteps: [
          'L = λ1 / 2 <=> λ1 = 2 * L = 2 * 0,65 m = 1,30 m.'
        ],
        finalAnswer: 'λ1 = 1,30 mètre.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la célérité v de propagation de l\'onde sur la corde.',
        hints: ['v = λ * f.'],
        solutionSteps: [
          'v = λ1 * f1 = 1,30 * 440 = 572 m/s.'
        ],
        finalAnswer: 'v = 572 m/s.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-p2-7',
    targetChapterId: 'pc-1ere-couleurs-spectrophotometrie',
    title: 'Couleur Complémentaire & Teinte d’une Solution de Sulfate de Cuivre',
    context: 'Une solution aqueuse de sulfate de cuivre (CuSO4) présente un pic d\'absorption très marqué dans le rouge-orangé (λ ≈ 600 - 650 nm).',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🎨 Couleur Complémentaire & Étoile des Couleurs',
    questions: [
      {
        questionText: '1. Pourquoi la solution apparaît-elle bleue-cyan à l\'œil nu ?',
        hints: ['La couleur observée est la couleur complémentaire de la lumière absorbée.'],
        solutionSteps: [
          'La solution absorbe les radiations rouges et oranges de la lumière blanche.',
          'La couleur transmise qui parvient à nos yeux est la couleur complémentaire du rouge, c\'est-à-dire le cyan/bleu.'
        ],
        finalAnswer: 'La solution transmet la couleur complémentaire du rouge absorbé (le cyan).',
        pointsAllocated: 3
      },
      {
        questionText: '2. À quelle longueur d\'onde doit-on régler un spectrophotomètre pour doser cette solution avec la sensibilité maximale ?',
        hints: ['À la longueur d\'onde du maximum d\'absorption λ_max.'],
        solutionSteps: [
          'On règle le spectrophotomètre sur le maximum d\'absorption (λ_max ≈ 650 nm) pour maximiser le coefficient d\'absorption molaire ε et obtenir la plus grande sensibilité de mesure.'
        ],
        finalAnswer: 'À λ_max (environ 650 nm dans le rouge-orangé).',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1pc-p2-8',
    targetChapterId: 'pc-1ere-electricite-puissance',
    title: 'Fusible & Disjoncteur Thermique dans une Cuisine',
    context: 'Sur une ligne protégée par un disjoncteur 16 A sous 230 V, on branche simultanément une bouilloire (2 000 W) et un grille-pain (1 500 W).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '⚡ Installation Électrique & Disjoncteur',
    questions: [
      {
        questionText: '1. Calculer la puissance totale appelée par les deux appareils.',
        hints: ['P_totale = P1 + P2.'],
        solutionSteps: ['P_totale = 2000 + 1500 = 3 500 W.'],
        finalAnswer: 'P_totale = 3 500 W (3,5 kW).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer l\'intensité totale I_totale. Le disjoncteur 16 A va-t-il disjoncter ?',
        hints: ['I = P / U.', 'Comparer à 16 A.'],
        solutionSteps: [
          'I_totale = 3500 / 230 ≈ 15,22 A.',
          'Comme 15,22 A < 16 A, le courant reste inférieur au calibre de déclenchement : le disjoncteur ne saute pas.'
        ],
        finalAnswer: 'I ≈ 15,2 A < 16 A : le disjoncteur ne saute pas (fonctionnement normal).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1pc-p2-9',
    targetChapterId: 'pc-1ere-acide-base-ph',
    title: 'Mesure du pH de la Pluie Acide & Impact Environnemental',
    context: 'Dans une région industrielle, des oxydes d\'azote et de soufre solubilisés dans l\'eau de pluie donnent un pH de 4,30 (pluie normale à pH 5,60 due au CO2 dissous).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🌧️ Environnement & Pluies Acides',
    questions: [
      {
        questionText: '1. Calculer [H3O+] pour une pluie normale (pH = 5,60) et pour cette pluie acide (pH = 4,30).',
        hints: ['[H3O+] = 10^(-pH).'],
        solutionSteps: [
          'Pluie normale : [H3O+] = 10^(-5,60) ≈ 2,51 * 10^-6 mol/L.',
          'Pluie acide : [H3O+] = 10^(-4,30) ≈ 5,01 * 10^-5 mol/L.'
        ],
        finalAnswer: 'Normale : 2,5 µmol/L ; Acide : 50 µmol/L.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Par quel facteur l\'acidité a-t-elle augmenté ?',
        hints: ['Rapport 5,01 * 10^-5 / 2,51 * 10^-6 ou 10^(5,60 - 4,30).'],
        solutionSteps: [
          'Facteur = 10^(5,60 - 4,30) = 10^(1,30) ≈ 20 fois plus acide !'
        ],
        finalAnswer: 'L\'acidité est multipliée par 20.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-p2-10',
    targetChapterId: 'pc-1ere-oxydoreduction',
    title: 'Corrosion d’une Coque de Bateau & Anode Sacrificielle en Zinc',
    context: 'Pour protéger la coque en fer d\'un navire de la rouille dans l\'eau de mer, les marins vissent des blocs de zinc sacrificiels.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '⚓ Marine & Protection Cathodique',
    questions: [
      {
        questionText: '1. Pourquoi le zinc s\'oxyde-t-il préférentiellement au fer ?',
        hints: ['Le zinc est un réducteur plus fort que le fer (potentiel standard plus bas).'],
        solutionSteps: [
          'Le zinc est un métal plus réducteur que le fer (E°(Zn2+/Zn) = -0,76 V contre E°(Fe2+/Fe) = -0,44 V). Il cède ses électrons en priorité et se corrode à la place de l\'acier de la coque.'
        ],
        finalAnswer: 'Le zinc est un réducteur plus fort qui s\'oxyde en premier (protection cathodique).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Écrire la demi-équation d\'oxydation du zinc sacrificiel.',
        hints: ['Zn -> Zn2+ + 2 e-.'],
        solutionSteps: ['Zn (s) -> Zn2+ (aq) + 2 e-.'],
        finalAnswer: 'Zn (s) -> Zn2+ (aq) + 2 e-.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1pc-p2-11',
    targetChapterId: 'pc-1ere-mvt-energie',
    title: 'Puissance d’une Éolienne Offshore & Énergie Cinétique du Vent',
    context: 'L\'air a une masse volumique ρ = 1,2 kg/m^3. Une éolienne de pales de rayon R = 50 m capte un vent de vitesse v = 10 m/s (36 km/h).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '💨 Énergie Éolienne & Puissance',
    questions: [
      {
        questionText: '1. Calculer la surface balayée S = π R^2 par le rotor.',
        hints: ['S = π * 50^2.'],
        solutionSteps: ['S = π * 2500 ≈ 7 854 m^2.'],
        finalAnswer: 'S ≈ 7 854 m^2.',
        pointsAllocated: 3
      },
      {
        questionText: '2. La puissance cinétique du vent traversant cette surface est P_vent = 0,5 * ρ * S * v^3. Calculer cette puissance en MW.',
        hints: ['0,5 * 1,2 * 7854 * (10)^3.'],
        solutionSteps: [
          'P_vent = 0,5 * 1,2 * 7854 * 1000 = 4 712 400 W ≈ 4,71 MW.'
        ],
        finalAnswer: 'P_vent ≈ 4,71 MW.',
        pointsAllocated: 4
      }
    ]
  },

  // --- 1ERE SVT (12 new exercises) ---
  {
    id: 'ex-1svt-p2-1',
    targetChapterId: 'svt-1ere-mitose-adn',
    title: 'Télomères & Vieillissement Cellulaire (Limite de Hayflick)',
    context: 'À chaque réplication de l\'ADN, les extrémités des chromosomes (les télomères) raccourcissent, menant les cellules à la sénescence après environ 50 divisions.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🧬 Biologie Cellulaire & Télomères',
    questions: [
      {
        questionText: '1. Quelle enzyme spécialisée réactive la longueur des télomères dans les cellules cancéreuses immortelles ?',
        hints: ['Télomérase.'],
        solutionSteps: [
          'La télomérase est une transcriptase inverse capable de rallonger les télomères en ajoutant des répétitions TTAGGG, conférant une prolifération indéfinie.'
        ],
        finalAnswer: 'La télomérase.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi les cellules somatiques normales n\'expriment-elles généralement pas cette enzyme ?',
        hints: ['Mécanisme anti-tumoral naturel limitant le nombre de divisions possibles.'],
        solutionSteps: [
          'C\'est une barrière protectrice essentielle contre le cancer : en limitant le nombre de divisions possibles, l\'organisme empêche la prolifération incontrôlée de cellules altérées.'
        ],
        finalAnswer: 'Protection naturelle anti-tumorale (limite de Hayflick).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-p2-2',
    targetChapterId: 'svt-1ere-immunite-innee',
    title: 'Diapédèse des Leucocytes lors de l’Infection',
    context: 'Lors d\'une agression bactérienne cutanée, les polynucléaires neutrophiles quittent les vaisseaux sanguins pour rejoindre le foyer infectieux.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🛡️ Immunologie & Diapédèse',
    questions: [
      {
        questionText: '1. Comment appelle-t-on la traversée de la paroi des capillaires sanguins par les globules blancs ?',
        hints: ['La d...'],
        solutionSteps: [
          'Ce processus actif de déformation et d\'infiltration entre les cellules endothéliales est la diapédèse.'
        ],
        finalAnswer: 'La diapédèse.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel signal chimique guide les globules blancs vers le lieu exact de l\'infection ?',
        hints: ['Chimiotactisme par les chimiokines.'],
        solutionSteps: [
          'Le chimiotactisme : les leucocytes migrent en remontant le gradient de concentration des molécules chimio-attractantes (chimiokines) libérées par les cellules lésées et les bactéries.'
        ],
        finalAnswer: 'Le chimiotactisme guidé par les chimiokines.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1svt-p2-3',
    targetChapterId: 'svt-1ere-enzymes',
    title: 'Thermostabilité de la Taq Polymérase en Test PCR',
    context: 'Les tests PCR Covid-19 utilisent la Taq polymérase extraite de la bactérie thermophile Thermus aquaticus vivant dans les geysers de Yellowstone.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🔬 Biotechnologie & PCR',
    questions: [
      {
        questionText: '1. À quelle température s\'effectue l\'étape de dénaturation de l\'ADN lors d\'un cycle PCR ?',
        hints: ['Autour de 95 °C.'],
        solutionSteps: [
          'La dénaturation thermique rompant les liaisons hydrogène pour séparer les deux brins s\'effectue à environ 95 °C.'
        ],
        finalAnswer: '95 °C.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi une enzyme humaine ordinaire comme l\'ADN polymérase classique ne conviendrait-elle pas ?',
        hints: ['Dénaturation et perte irréversible de fonction au-dessus de 45-50 °C.'],
        solutionSteps: [
          'Une ADN polymérase humaine serait immédiatement dénaturée et détruite à 95 °C, nécessitant de réinjecter de l\'enzyme fraîche à chaque cycle. La Taq polymérase est thermostable et résiste à ces températures extrêmes.'
        ],
        finalAnswer: 'Dénaturation immédiate des enzymes humaines à 95 °C.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-p2-4',
    targetChapterId: 'svt-1ere-structure-globe',
    title: 'Discontinuité de Gutenberg & Vitesse des Ondes S',
    context: 'À 2 900 km de profondeur, les ondes sismiques P chutent brutalement de 13,7 à 8,1 km/s, et les ondes S s\'interrompent complètement.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🌍 Structure Terrestre & Noyau Terrestre',
    questions: [
      {
        questionText: '1. Quel nom porte cette discontinuité majeure située à 2 900 km ?',
        hints: ['Discontinuité de G...'],
        solutionSteps: [
          'C\'est la discontinuité de Gutenberg, qui sépare le manteau inférieur du noyau externe.'
        ],
        finalAnswer: 'La discontinuité de Gutenberg.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi les ondes S s\'arrêtent-elles net à cette frontière ?',
        hints: ['Les ondes S ne se propagent que dans les solides.'],
        solutionSteps: [
          'Les ondes S de cisaillement ne peuvent pas traverser les fluides : leur disparition totale prouve que le noyau externe est à l\'état liquide (alliage de fer et nickel en fusion).'
        ],
        finalAnswer: 'Le noyau externe est liquide, or les ondes S ne traversent pas les liquides.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-p2-5',
    targetChapterId: 'svt-1ere-immunite-adaptative',
    title: 'Structure d’un Anticorps : Régions Variables et Constantes',
    context: 'Une molécule d\'immunoglobuline G (IgG) en forme de "Y" est constituée de 4 chaînes polypeptidiques : 2 chaînes lourdes (H) et 2 chaînes légères (L).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🔬 Anticorps & Paratope',
    questions: [
      {
        questionText: '1. Combien de sites de fixation de l\'antigène (paratopes) une molécule d\'IgG possède-t-elle ?',
        hints: ['Au bout des deux bras du Y.'],
        solutionSteps: [
          'Chaque bras du Y possède un site de liaison spécifique formé par les domaines variables de la chaîne lourde et de la chaîne légère : une IgG possède donc 2 paratopes identiques.'
        ],
        finalAnswer: '2 sites de liaison (bivalence de l\'anticorps).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel rôle joue la partie constante (Fc, pied du Y) de l\'anticorps ?',
        hints: ['Fixation aux récepteurs des phagocytes pour déclencher l\'opsonisation.'],
        solutionSteps: [
          'La région constante Fc est reconnue par les récepteurs membranaires des cellules immunitaires (phagocytes, cellules NK) et active le système du complément pour détruire le pathogène neutralisé.'
        ],
        finalAnswer: 'Reconnaissance par les phagocytes et déclenchement de la destruction du complexe immun.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-p2-6',
    targetChapterId: 'svt-1ere-ecosystemes-services-interactions',
    title: 'Mutualisme Plante-Champignon : Les Mycorhizes',
    context: 'Plus de 80% des plantes terrestres vivent en symbiose racinaire avec des champignons filamenteux du sol formant des mycorhizes.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'ecologie',
    themeLabel: '🍄 Forêt & Réseau Mycorhizien',
    questions: [
      {
        questionText: '1. Que fournit le champignon à la plante dans cette symbiose ?',
        hints: ['Eau et sels minéraux (phosphates, azote) puisés dans un volume de sol immense.'],
        solutionSteps: [
          'Le réseau dense de filaments mycéliens explore un volume de sol 100 fois supérieur aux racines, apportant à la plante de l\'eau et des minéraux difficilement accessibles (notamment phosphore et azote).'
        ],
        finalAnswer: 'Eau et sels minéraux (phosphore, azote).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Que donne la plante au champignon en échange ?',
        hints: ['Matière organique issue de la photosynthèse.'],
        solutionSteps: [
          'La plante hétérotrophe en sous-sol donne au champignon des glucides (sucres) issus de sa photosynthèse foliaire.'
        ],
        finalAnswer: 'Matière organique carbonée (glucides de la photosynthèse).',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1svt-p2-7',
    targetChapterId: 'svt-1ere-genetique-sante-antibiotiques',
    title: 'Antibiogramme & Mesure du Diamètre d’Inhibition',
    context: 'Sur une boîte de Pétri ensemencée de staphylocoques dorés, on dépose 4 pastilles d\'antibiotiques (Pénicilline, Tétracycline, Vancomycine, Rifampicine).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧫 Microbiologie & Antibiogramme',
    questions: [
      {
        questionText: '1. Que traduit une zone claire sans colonie (auréole d\'inhibition) autour d\'une pastille d\'antibiotique ?',
        hints: ['La bactérie est sensible et ne peut pas pousser à proximité du disque.'],
        solutionSteps: [
          'La zone circulaire claire montre que l\'antibiotique diffuse dans la gélose et inhibe la multiplication bactérienne : plus le diamètre est grand, plus la souche est sensible.'
        ],
        finalAnswer: 'Sensibilité de la bactérie à l\'antibiotique (inhibition de la croissance).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Si les colonies poussent jusqu\'au contact direct de la pastille de Pénicilline (diamètre nul), quel est le diagnostic ?',
        hints: ['Résistance totale.'],
        solutionSteps: [
          'L\'absence de zone d\'inhibition indique que la souche bactérienne est totalement résistante à la pénicilline (par exemple par production de bêta-lactamase).'
        ],
        finalAnswer: 'Bactérie résistante à la pénicilline.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1svt-p2-8',
    targetChapterId: 'svt-1ere-mitose-adn',
    title: 'ADN Polymérase & Système de Réparation Mismatch (MMR)',
    context: 'L\'ADN polymérase commet environ 1 erreur pour 100 000 bases répliquées. Grâce à son activité de relecture 3\'->5\' et aux enzymes MMR, le taux final d\'erreur tombe à 1 sur 1 milliard.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🧬 Réplication & Fidélité de l’ADN',
    questions: [
      {
        questionText: '1. Par quel facteur le système de réparation améliore-t-il la fidélité de réplication ?',
        hints: ['10^9 / 10^5.'],
        solutionSteps: [
          '10^9 / 10^5 = 10^4 = 10 000 fois plus fidèle !'
        ],
        finalAnswer: 'Fidélité améliorée d\'un facteur 10 000 (10^4).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle pathologie humaine grave survient lorsque les gènes du système MMR sont mutés (Syndrome de Lynch) ?',
        hints: ['Prédisposition héréditaire au cancer colorectal.'],
        solutionSteps: [
          'L\'accumulation massive d\'erreurs de réplication non réparées entraîne une instabilité des microsatellites et une prédisposition héréditaire majeure aux cancers (notamment le cancer colorectal héréditaire).'
        ],
        finalAnswer: 'Prédisposition accrue aux cancers (syndrome de Lynch).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-p2-9',
    targetChapterId: 'svt-1ere-structure-globe',
    title: 'Discontinuité de Lehmann & Graine Terrestre Solide',
    context: 'Inge Lehmann découvre en 1936 une augmentation brutale de la vitesse des ondes P à 5 150 km de profondeur, révélant la graine solide au centre de la Terre.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🌍 Géophysique & Graine Terrestre',
    questions: [
      {
        questionText: '1. Pourquoi la graine centrale de la Terre est-elle solide malgré une température supérieure à 5 000 °C ?',
        hints: ['Effet de la pression gigantesque au centre de la Terre.'],
        solutionSteps: [
          'La pression phénoménale au centre de la Terre (plus de 3,5 millions d\'atmosphères) compacte les atomes de fer et relève le point de fusion au-dessus de la température réelle, forçant le fer à cristalliser sous forme solide.'
        ],
        finalAnswer: 'La pression colossale maintient le fer à l\'état solide malgré la chaleur.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel phénomène géophysique protecteur pour l\'atmosphère terrestre est généré par les mouvements de convection du noyau liquide entourant la graine ?',
        hints: ['Effet dynamo produisant le champ magnétique terrestre.'],
        solutionSteps: [
          'L\'effet dynamo : la convection du fer liquide conducteur génère le champ magnétique terrestre (magnétosphère) qui nous protège du vent solaire.'
        ],
        finalAnswer: 'Le champ magnétique terrestre (magnétosphère).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-p2-10',
    targetChapterId: 'svt-1ere-immunite-innee',
    title: 'Fièvre & Rôle Adaptatif des Pyrogènes',
    context: 'Lors d\'une grippe, des cytokines pyrogènes (comme l\'IL-1 et le TNF-alpha) décalent le thermostat hypothalamique de 37 °C à 39 °C.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🌡️ Thermorégulation & Fièvre',
    questions: [
      {
        questionText: '1. Citer deux effets bénéfiques de la fièvre modérée pour combattre l\'infection.',
        hints: ['Ralentissement de la réplication des virus et accélération de la mobilité des globules blancs.'],
        solutionSteps: [
          '1. Ralentissement de la multiplication des bactéries et virus qui ont un optimum thermique strict à 37 °C.',
          '2. Stimulation de l\'activité enzymatique des globules blancs et accélération de la phagocytose et de la prolifération des lymphocytes.'
        ],
        finalAnswer: 'Freinage de la prolifération des microbes et activation accélérée des leucocytes.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi faut-il néanmoins surveiller et traiter une fièvre excessive dépassant 40 °C ?',
        hints: ['Risque de dénaturation des protéines cérébrales et de convulsions fébriles.'],
        solutionSteps: [
          'Au-dessus de 40 °C, les risques de convulsions fébriles, de déshydratation aiguë et de dénaturation des protéines neuronales deviennent critiques.'
        ],
        finalAnswer: 'Risque de convulsions et de lésions neuronales par surchauffe.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1svt-p2-11',
    targetChapterId: 'svt-1ere-ecosystemes-services-interactions',
    title: 'Bioaccumulation du Mercure dans les Poissons Carnivores',
    context: 'Le mercure déversé en mer est transformé en méthylmercure par les bactéries et s\'accumule le long de la chaîne trophique (phytoplancton -> zooplancton -> petits poissons -> thons/requins).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🐟 Océans & Bioamplification Trophique',
    questions: [
      {
        questionText: '1. Comment appelle-t-on l\'amplification continue de la concentration d\'un polluant à chaque étage de la chaîne alimentaire ?',
        hints: ['La bioamplification (ou bioaccumulation).'],
        solutionSteps: [
          'Ce phénomène est la bioamplification (ou biomagnification) : les polluants liposolubles non biodégradables ne sont pas éliminés et se concentrent de plus en plus chez les super-prédateurs au sommet de la chaîne.'
        ],
        finalAnswer: 'La bioamplification trophique.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi recommande-t-on aux femmes enceintes de limiter leur consommation de grands poissons carnivores comme l\'espadon ou le requin ?',
        hints: ['Toxicité neurologique du mercure pour le cerveau du fœtus.'],
        solutionSteps: [
          'Le méthylmercure traverse la barrière placentaire et s\'avère hautement neurotoxique pour le développement cérébral du fœtus.'
        ],
        finalAnswer: 'Protection du système nerveux fœtal contre la neurotoxicité du mercure.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-p2-12',
    targetChapterId: 'svt-1ere-genetique-sante-antibiotiques',
    title: 'Phagothérapie & Virus Bactériophages comme Alternative',
    context: 'Face aux bactéries multi-résistantes, la recherche développe des virus bactériophages capables de cibler et détruire exclusivement des bactéries pathogènes.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🦠 Biotechnologie & Bactériophages',
    questions: [
      {
        questionText: '1. Quel est l\'avantage majeur d\'un bactériophage par rapport à un antibiotique à large spectre pour le microbiote ?',
        hints: ['Ciblage ultra-spécifique épargnant les bonnes bactéries de la flore intestinale.'],
        solutionSteps: [
          'Le phage ne s\'attaque qu\'à l\'espèce bactérienne hôte pour laquelle il a une affinité de récepteur, laissant totalement intact le microbiote intestinal bénéfique.'
        ],
        finalAnswer: 'Spécificité absolue épargnant la flore saine du microbiote.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Comment le bactériophage détruit-il la bactérie cible à la fin de son cycle lytique ?',
        hints: ['Lyse de la membrane et explosion cellulaire libérant de nouveaux virions.'],
        solutionSteps: [
          'Après avoir détourné la machinerie bactérienne pour se répliquer, le phage produit des endolysines qui perforent la paroi cellulaire et provoquent l\'explosion osmotique (lyse) de la bactérie.'
        ],
        finalAnswer: 'Lyse enzymatique de la paroi provoquant l\'explosion de la cellule bactérienne.',
        pointsAllocated: 3
      }
    ]
  }
];
