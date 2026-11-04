import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_1ERE_MATHS: BankExerciseItem[] = [
  {
    id: 'ex-1m-bank-1',
    targetChapterId: 'math-1ere-second-degre',
    title: 'Trajectoire de Missile & Collision en E-Sport',
    context: 'Dans un jeu tactique multijoueur, la trajectoire d\'une grenade parabolique est donnée par h(x) = -x^2 + 8x - 7, où x est la distance au sol en mètres.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'gaming',
    themeLabel: '🎮 Parabole & Discriminant',
    questions: [
      {
        questionText: '1. Calculer le discriminant Δ du trinôme et déterminer les points d\'impact au sol (h(x) = 0).',
        hints: ['Δ = b^2 - 4ac avec a = -1, b = 8, c = -7.', 'x = (-b ± √Δ) / 2a.'],
        solutionSteps: [
          'Δ = 8^2 - 4 * (-1) * (-7) = 64 - 28 = 36 = 6^2.',
          'Puisque Δ > 0, deux racines réelles distinctes :',
          'x1 = (-8 + 6) / (2 * -1) = -2 / -2 = 1.',
          'x2 = (-8 - 6) / (2 * -1) = -14 / -2 = 7.'
        ],
        finalAnswer: 'Δ = 36 ; la grenade décolle à x = 1 m et retombe au sol à x = 7 m.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Déterminer l\'abscisse et la hauteur maximale atteinte par la grenade.',
        hints: ['Le sommet est en α = -b / (2a).', 'Calculer h(α).'],
        solutionSteps: [
          'Abscisse du sommet : α = -8 / (2 * -1) = 4 m.',
          'Hauteur maximale : h(4) = -(4^2) + 8(4) - 7 = -16 + 32 - 7 = 9 m.'
        ],
        finalAnswer: 'Sommet S(4 ; 9) : hauteur maximale de 9 mètres à 4 mètres du tireur.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1m-bank-2',
    targetChapterId: 'math-1ere-second-degre',
    title: 'Inéquation Quadratique & Vitesse Limite en Formule 1',
    context: 'L\'adhérence des pneus d\'une F1 sous la pluie exige que le coefficient de glissement G(v) = 2v^2 - 14v + 20 reste négatif ou nul (G(v) ≤ 0, v en dizaines de km/h).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '🏎️ Formule 1 & Inéquation',
    questions: [
      {
        questionText: '1. Factoriser le trinôme 2v^2 - 14v + 20 en calculant son discriminant.',
        hints: ['a = 2, b = -14, c = 20.', 'Δ = b^2 - 4ac.'],
        solutionSteps: [
          'Δ = (-14)^2 - 4 * 2 * 20 = 196 - 160 = 36 = 6^2.',
          'Racines : v1 = (14 - 6) / 4 = 8 / 4 = 2 ; v2 = (14 + 6) / 4 = 20 / 4 = 5.',
          'Forme factorisée : 2(v - 2)(v - 5).'
        ],
        finalAnswer: '2(v - 2)(v - 5) avec racines v = 2 et v = 5.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Dresser le tableau de signes et donner la plage de vitesses autorisées (en km/h).',
        hints: ['Un trinôme est du signe de a à l\'extérieur des racines.', 'Ici a = 2 > 0.'],
        solutionSteps: [
          'Le trinôme est négatif ou nul entre les racines car a = 2 > 0.',
          'G(v) ≤ 0 pour v ∈ [2 ; 5].',
          'En multipliant par 10 : plage de 20 km/h à 50 km/h.'
        ],
        finalAnswer: 'v ∈ [20 ; 50] km/h.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-3',
    targetChapterId: 'math-1ere-variations-derivation',
    title: 'Dérivée & Vitesse Instantanée d’une Fusée Falcon 9',
    context: 'L\'altitude z(t) (en mètres) d\'un lanceur orbital pendant les premières secondes de vol est modélisée par z(t) = 3t^3 + 5t^2 pour t ∈ [0 ; 10].',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'space',
    themeLabel: '🚀 Dérivation & Vitesse Instantanée',
    questions: [
      {
        questionText: '1. Calculer la fonction dérivée z\'(t) qui représente la vitesse instantanée v(t) de la fusée.',
        hints: ['(t^n)\' = n * t^(n-1).', '(3t^3)\' = 9t^2.'],
        solutionSteps: [
          'z\'(t) = 3 * (3t^2) + 5 * (2t) = 9t^2 + 10t.'
        ],
        finalAnswer: 'v(t) = z\'(t) = 9t^2 + 10t (en m/s).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la vitesse instantanée de la fusée à t = 5 s et à t = 10 s.',
        hints: ['Remplacer t par 5 puis par 10 dans z\'(t).'],
        solutionSteps: [
          'v(5) = 9(5^2) + 10(5) = 9(25) + 50 = 225 + 50 = 275 m/s (environ 990 km/h).',
          'v(10) = 9(100) + 100 = 1000 m/s (Mach 3).'
        ],
        finalAnswer: 'v(5) = 275 m/s et v(10) = 1 000 m/s.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-4',
    targetChapterId: 'math-1ere-variations-derivation',
    title: 'Équation de la Tangente & Pente d’une Piste de Ski',
    context: 'La coupe d\'une piste de snowboard suit la courbe de f(x) = x^3 - 6x^2 + 9x + 2. On souhaite installer un tremplin tangent au point d\'abscisse a = 2.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'sport',
    themeLabel: '🏂 Tangente & Pente',
    questions: [
      {
        questionText: '1. Déterminer f\'(x) puis calculer f(2) et f\'(2).',
        hints: ['Dérivée d\'un polynôme terme à terme.', 'f\'(x) = 3x^2 - 12x + 9.'],
        solutionSteps: [
          'f\'(x) = 3x^2 - 12x + 9.',
          'f(2) = 2^3 - 6(2^2) + 9(2) + 2 = 8 - 24 + 18 + 2 = 4.',
          'f\'(2) = 3(4) - 12(2) + 9 = 12 - 24 + 9 = -3.'
        ],
        finalAnswer: 'f(2) = 4 et f\'(2) = -3.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Donner l\'équation de la tangente (T) à la courbe au point d\'abscisse 2.',
        hints: ['Formule du cours : y = f\'(a)(x - a) + f(a).'],
        solutionSteps: [
          'y = f\'(2)(x - 2) + f(2).',
          'y = -3(x - 2) + 4 = -3x + 6 + 4 = -3x + 10.'
        ],
        finalAnswer: 'y = -3x + 10.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-5',
    targetChapterId: 'math-1ere-exponentielle',
    title: 'Croissance Virale d’une Vidéo TikTok & Fonction Exponentielle',
    context: 'Le nombre de vues V(t) (en milliers) d\'un clip viral t jours après sa publication est modélisé par V(t) = 5 * e^(0,4t) pour t ≥ 0.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '📱 Réseaux Sociaux & Exponentielle',
    questions: [
      {
        questionText: '1. Combien de vues la vidéo compte-t-elle à la publication (t = 0) et après 5 jours (e^2 ≈ 7,389) ?',
        hints: ['e^0 = 1.', 'V(5) = 5 * e^(0,4 * 5) = 5 * e^2.'],
        solutionSteps: [
          'V(0) = 5 * e^0 = 5 * 1 = 5 milliers (soit 5 000 vues).',
          'V(5) = 5 * e^2 ≈ 5 * 7,389 = 36,945 milliers (soit environ 36 950 vues).'
        ],
        finalAnswer: 'V(0) = 5 000 vues et V(5) ≈ 36 950 vues.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la dérivée V\'(t) et justifier que le nombre de vues est strictement croissant sur [0 ; +∞[.',
        hints: ['(e^(kx))\' = k * e^(kx).', 'Pour tout X, e^X > 0.'],
        solutionSteps: [
          'V\'(t) = 5 * (0,4 * e^(0,4t)) = 2 * e^(0,4t).',
          'Pour tout réel t, l\'exponentielle est strictement positive : e^(0,4t) > 0.',
          'Puisque 2 > 0, on a V\'(t) > 0 pour tout t ≥ 0.',
          'La fonction V est donc strictement croissante sur [0 ; +∞[.'
        ],
        finalAnswer: 'V\'(t) = 2e^(0,4t) > 0 : croissance exponentielle stricte.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-6',
    targetChapterId: 'math-1ere-exponentielle',
    title: 'Refroidissement d’un Réacteur Nucléaire & Décroissance',
    context: 'La température d\'une barre de combustible T(t) en °C après coupure d\'urgence suit T(t) = 25 + 300 * e^(-0,05t), où t est en minutes.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '⚛️ Nucléaire & Décroissance Exponentielle',
    questions: [
      {
        questionText: '1. Quelle est la température initiale à t = 0 et vers quelle température tend la barre à très long terme ?',
        hints: ['e^0 = 1.', 'Quand t -> +∞, e^(-0,05t) -> 0.'],
        solutionSteps: [
          'T(0) = 25 + 300 * e^0 = 25 + 300 = 325 °C.',
          'Lorsque t tend vers +∞, lim e^(-0,05t) = 0.',
          'Donc lim T(t) = 25 + 0 = 25 °C (température de la cuve de refroidissement).'
        ],
        finalAnswer: 'T(0) = 325 °C et limite = 25 °C.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la vitesse de refroidissement initiale T\'(0) en °C/min.',
        hints: ['T\'(t) = 300 * (-0,05) * e^(-0,05t).'],
        solutionSteps: [
          'T\'(t) = -15 * e^(-0,05t).',
          'À t = 0 : T\'(0) = -15 * e^0 = -15 °C/min.'
        ],
        finalAnswer: 'T\'(0) = -15 °C/min.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-7',
    targetChapterId: 'math-1ere-suites',
    title: 'Suite Géométrique : Capacité Résiduelle d’une Batterie Tesla',
    context: 'Une batterie de voiture électrique perd 2% de sa capacité restante chaque année. Sa capacité initiale est u0 = 80 kWh. On pose un = capacité après n années.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🔋 Batterie & Suite Géométrique',
    questions: [
      {
        questionText: '1. Justifier que (un) est une suite géométrique de raison q que l\'on précisera.',
        hints: ['Baisser de 2% revient à multiplier par 1 - 0,02 = 0,98.'],
        solutionSteps: [
          'un+1 = un - 0,02 * un = un * (1 - 0,02) = 0,98 * un.',
          'Il s\'agit d\'une suite géométrique de premier terme u0 = 80 et de raison q = 0,98.'
        ],
        finalAnswer: 'Suite géométrique de raison q = 0,98 et premier terme u0 = 80.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Exprimer un en fonction de n et calculer la capacité restante après 8 ans (garantie constructeur).',
        hints: ['un = u0 * q^n.', 'Calculer 80 * 0,98^8.'],
        solutionSteps: [
          'Formule explicite : un = 80 * (0,98)^n.',
          'Pour n = 8 : u8 = 80 * (0,98)^8 ≈ 80 * 0,85076 ≈ 68,06 kWh.'
        ],
        finalAnswer: 'un = 80 * 0,98^n ; u8 ≈ 68,1 kWh (soit 85,1% de sa capacité initiale, au-dessus du seuil de garantie de 70%).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-8',
    targetChapterId: 'math-1ere-suites',
    title: 'Suite Arithmétique & Épargne pour un Setup Gaming',
    context: 'Un lycéen met de côté 50 € le premier mois, puis augmente son versement de 15 € chaque mois suivant : v0 = 50, v1 = 65, v2 = 80...',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'gaming',
    themeLabel: '💻 Épargne & Suite Arithmétique',
    questions: [
      {
        questionText: '1. Exprimer vn en fonction de n et calculer la somme versée au 12e mois (v11).',
        hints: ['Formule arithmétique : vn = v0 + n * r avec r = 15.'],
        solutionSteps: [
          'vn = 50 + 15n.',
          'Pour le 12e mois (n = 11) : v11 = 50 + 15 * 11 = 50 + 165 = 215 €.'
        ],
        finalAnswer: 'vn = 50 + 15n et v11 = 215 €.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer le montant total épargné au bout de la première année (somme S = v0 + v1 + ... + v11).',
        hints: ['Formule de la somme : (nombre de termes) * (premier + dernier) / 2.'],
        solutionSteps: [
          'Nombre de termes = 12.',
          'S = 12 * (v0 + v11) / 2 = 6 * (50 + 215) = 6 * 265 = 1 590 €.'
        ],
        finalAnswer: 'S = 1 590 €.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1m-bank-9',
    targetChapterId: 'math-1ere-scalaire',
    title: 'Produit Scalaire & Travail d’une Force de Traction de Navire',
    context: 'Un remorqueur tire un porte-conteneurs sur une distance d = AB = 500 m avec une force de traction F d\'intensité 2,0 * 10^5 N formant un angle θ = 30° avec la direction du déplacement.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🚢 Génie Maritime & Travail Mécanique',
    questions: [
      {
        questionText: '1. Rappeler la définition géométrique du produit scalaire F · AB faisant intervenir le cosinus de l\'angle.',
        hints: ['F · AB = ||F|| * ||AB|| * cos(F, AB).'],
        solutionSteps: [
          'Le produit scalaire de deux vecteurs u et v vaut : u · v = ||u|| * ||v|| * cos(u, v).'
        ],
        finalAnswer: 'F · AB = ||F|| * ||AB|| * cos(θ).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer le travail mécanique W = F · AB en Joules (J) puis en MégaJoules (MJ). Donnée : cos(30°) = √3 / 2 ≈ 0,866.',
        hints: ['W = (2,0 * 10^5) * 500 * (√3 / 2).'],
        solutionSteps: [
          'W = 2,0 * 10^5 * 500 * (√3 / 2) = 10^8 * (√3 / 2) ≈ 8,66 * 10^7 J.',
          'En MégaJoules : W ≈ 86,6 MJ.'
        ],
        finalAnswer: 'W ≈ 8,66 * 10^7 J = 86,6 MJ.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1m-bank-10',
    targetChapterId: 'math-1ere-scalaire',
    title: 'Orthogonalité & Forme Analytique du Produit Scalaire',
    context: 'Dans un repère orthonormé, deux drones de surveillance suivent des trajectoires de vecteurs directeurs u(2k - 1 ; 4) et v(3 ; -6). On cherche k pour que leurs trajectoires soient perpendiculaires.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🚁 Drones & Orthogonalité',
    questions: [
      {
        questionText: '1. Énoncer la condition d\'orthogonalité de deux vecteurs à l\'aide du produit scalaire.',
        hints: ['Deux vecteurs non nuls sont orthogonaux si et seulement si leur produit scalaire est nul.'],
        solutionSteps: [
          'u et v sont orthogonaux si et seulement si u · v = 0.'
        ],
        finalAnswer: 'u · v = 0.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer l\'expression analytique de u · v et en déduire la valeur du paramètre k.',
        hints: ['u · v = x * x\' + y * y\'.'],
        solutionSteps: [
          'u · v = (2k - 1) * 3 + 4 * (-6) = 6k - 3 - 24 = 6k - 27.',
          'Pour que u ⊥ v : 6k - 27 = 0 <=> 6k = 27 <=> k = 27 / 6 = 4,5.'
        ],
        finalAnswer: 'k = 4,5.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1m-bank-11',
    targetChapterId: 'math-1ere-trigo',
    title: 'Cercle Trigonométrique & Oscillations d’un Bras Robotique',
    context: 'Un bras robotique tourne d\'un angle x = 7π / 6 rad. On étudie ses coordonnées sur le cercle trigonométrique unitaire.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '🤖 Robotique & Cercle Trigonométrique',
    questions: [
      {
        questionText: '1. Décomposer l\'angle 7π / 6 sous la forme π + θ et en déduire dans quel quadrant il se situe.',
        hints: ['7/6 = 1 + 1/6.'],
        solutionSteps: [
          '7π / 6 = π + π/6.',
          'Puisque π/6 est dans le 1er quadrant, π + π/6 se situe dans le 3e quadrant (abscisse négative et ordonnée négative).'
        ],
        finalAnswer: '7π/6 = π + π/6 (3e quadrant).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Déterminer les valeurs exactes de cos(7π/6) et sin(7π/6).',
        hints: ['cos(π + x) = -cos(x) et sin(π + x) = -sin(x).', 'cos(π/6) = √3/2 et sin(π/6) = 1/2.'],
        solutionSteps: [
          'cos(7π/6) = cos(π + π/6) = -cos(π/6) = -√3 / 2.',
          'sin(7π/6) = sin(π + π/6) = -sin(π/6) = -1 / 2.'
        ],
        finalAnswer: 'cos(7π/6) = -√3 / 2 et sin(7π/6) = -1/2.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-12',
    targetChapterId: 'math-1ere-trigo',
    title: 'Résolution d’Équation Trigonométrique pour un Signal Périodique',
    context: 'La tension d\'un onduleur solaire obéit à l\'équation 2 * cos(2x) - 1 = 0 sur l\'intervalle [0 ; π].',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'ecologie',
    themeLabel: '⚡ Signal Solaire & Trigonométrie',
    questions: [
      {
        questionText: '1. Isoler cos(2x) et donner les angles fondamentaux du cercle trigonométrique ayant cette valeur.',
        hints: ['2 cos(2x) = 1 <=> cos(2x) = 1/2.', 'cos(θ) = 1/2 pour θ = π/3 ou θ = -π/3 modulo 2π.'],
        solutionSteps: [
          '2 cos(2x) - 1 = 0 <=> cos(2x) = 1/2.',
          'Sur [-π ; π], cos(θ) = 1/2 donne θ = π/3 ou θ = -π/3.'
        ],
        finalAnswer: 'cos(2x) = 1/2 ; angles de base : ±π/3 [2π].',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire l\'ensemble des solutions de l\'équation pour x ∈ [0 ; π].',
        hints: ['Si 2x = π/3 + 2kπ, alors x = π/6 + kπ.', 'Si 2x = -π/3 + 2kπ, alors x = -π/6 + kπ.'],
        solutionSteps: [
          'Pour k = 0 dans la 1re famille : x = π / 6 (appartient à [0 ; π]).',
          'Pour k = 1 dans la 2e famille : x = -π/6 + π = 5π / 6 (appartient à [0 ; π]).',
          'Les autres valeurs de k sortent de l\'intervalle [0 ; π].'
        ],
        finalAnswer: 'S = { π/6 ; 5π/6 }.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1m-bank-13',
    targetChapterId: 'math-1ere-probas-cond',
    title: 'Arbre Pondéré & Détection d’Intrusion Cybernétique',
    context: 'Un pare-feu de cybersécurité analyse des requêtes réseau : 10% des requêtes proviennent d\'une adresse IP suspecte (S). 95% des paquets suspects contiennent du code malveillant (M). 2% des requêtes saines (non S) contiennent par erreur un faux positif malveillant.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'tech',
    themeLabel: '🔒 Cybersécurité & Bayes',
    questions: [
      {
        questionText: '1. Calculer la probabilité totale P(M) qu\'une requête soit identifiée comme malveillante.',
        hints: ['Formule des probabilités totales : P(M) = P(S ∩ M) + P(non S ∩ M).'],
        solutionSteps: [
          'P(S) = 0,10 et P(non S) = 0,90.',
          'P(S ∩ M) = P(S) * P(M|S) = 0,10 * 0,95 = 0,095.',
          'P(non S ∩ M) = P(non S) * P(M|non S) = 0,90 * 0,02 = 0,018.',
          'P(M) = 0,095 + 0,018 = 0,113.'
        ],
        finalAnswer: 'P(M) = 0,113 (soit 11,3%).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Un paquet est signalé malveillant par l\'antivirus. Quelle est la probabilité conditionnelle qu\'il provienne effectivement d\'une IP suspecte P(S|M) ?',
        hints: ['P(S|M) = P(S ∩ M) / P(M).'],
        solutionSteps: [
          'P(S|M) = 0,095 / 0,113 ≈ 0,8407.'
        ],
        finalAnswer: 'P(S|M) ≈ 0,841 (soit 84,1% de certitude).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-14',
    targetChapterId: 'math-1ere-variables-aleatoires',
    title: 'Loi de Probabilité, Espérance & Rentabilité d’un Stand de Kermesse',
    context: 'À un stand de jeu, le joueur paie 3 € pour lancer une fléchette. Il gagne 10 € (bénéfice net +7 €) avec probabilité 0,1 ; gagne 5 € (bénéfice net +2 €) avec probabilité 0,3 ; et ne gagne rien (bénéfice net -3 €) avec probabilité 0,6. Soit X le gain net du joueur.',
    difficulty: 'Facile',
    points: 7,
    themeTag: 'gaming',
    themeLabel: '🎯 Jeux & Espérance de Gain',
    questions: [
      {
        questionText: '1. Donner l\'ensemble des valeurs prises par la variable aléatoire X et dresser sa loi de probabilité.',
        hints: ['X(Ω) = {-3 ; 2 ; 7}. Vérifier que la somme des probabilités est égale à 1.'],
        solutionSteps: [
          'Valeurs possibles du gain net : -3 €, +2 €, +7 €.',
          'P(X = -3) = 0,6.',
          'P(X = 2) = 0,3.',
          'P(X = 7) = 0,1.',
          'Somme : 0,6 + 0,3 + 0,1 = 1,0.'
        ],
        finalAnswer: 'Loi : P(X = -3) = 0,6 ; P(X = 2) = 0,3 ; P(X = 7) = 0,1.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer l\'espérance mathématique E(X). Le jeu est-il favorable au joueur ou à l\'organisateur ?',
        hints: ['Formule : E(X) = Σ xi * P(X = xi).'],
        solutionSteps: [
          'E(X) = (-3) * 0,6 + (2) * 0,3 + (7) * 0,1.',
          'E(X) = -1,8 + 0,6 + 0,7 = -0,5 €.',
          'Puisque E(X) < 0, le joueur perd en moyenne 0,50 € par partie : le jeu est favorable à l\'organisateur.'
        ],
        finalAnswer: 'E(X) = -0,50 € (jeu défavorable au joueur, stand rentable pour l\'organisateur).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-15',
    targetChapterId: 'math-1ere-variables-aleatoires',
    title: 'Variance, Écart-Type & Risque d’un Portefeuille Crypto',
    context: 'Un investisseur modélise le rendement hebdomadaire Y d\'un token : Y = -10% avec proba 0,2 ; Y = 0% avec proba 0,5 ; Y = +20% avec proba 0,3.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'tech',
    themeLabel: '📊 Cryptomonnaies & Volatilité',
    questions: [
      {
        questionText: '1. Calculer l\'espérance mathématique E(Y) du rendement en %.',
        hints: ['E(Y) = (-10 * 0,2) + (0 * 0,5) + (20 * 0,3).'],
        solutionSteps: [
          'E(Y) = -2 + 0 + 6 = +4%.'
        ],
        finalAnswer: 'E(Y) = +4%.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer l\'espérance des carrés E(Y^2), la variance V(Y) et l\'écart-type σ(Y).',
        hints: ['E(Y^2) = Σ yi^2 * P(Y = yi).', 'V(Y) = E(Y^2) - [E(Y)]^2.', 'σ = √V.'],
        solutionSteps: [
          'E(Y^2) = (-10)^2 * 0,2 + 0^2 * 0,5 + 20^2 * 0,3 = 100 * 0,2 + 400 * 0,3 = 20 + 120 = 140.',
          'Variance : V(Y) = E(Y^2) - [E(Y)]^2 = 140 - 4^2 = 140 - 16 = 124.',
          'Écart-type : σ(Y) = √124 ≈ 11,14%.'
        ],
        finalAnswer: 'V(Y) = 124 et écart-type σ(Y) ≈ 11,1%.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1m-bank-16',
    targetChapterId: 'math-1ere-second-degre',
    title: 'Résolution d’Équations Bicarrées en Physique des Particules',
    context: 'En mécanique quantique simplifiée, l\'énergie d\'un état stationnaire satisfait l\'équation x^4 - 5x^2 + 4 = 0.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '⚛️ Physique Quantique & Équation Bicarrée',
    questions: [
      {
        questionText: '1. En effectuant le changement de variable X = x^2, résoudre l\'équation en X.',
        hints: ['X^2 - 5X + 4 = 0.', 'Racines évidentes ou discriminant.'],
        solutionSteps: [
          'L\'équation devient X^2 - 5X + 4 = 0.',
          'Δ = (-5)^2 - 4 * 1 * 4 = 25 - 16 = 9 = 3^2.',
          'X1 = (5 - 3) / 2 = 1 ; X2 = (5 + 3) / 2 = 4.'
        ],
        finalAnswer: 'X = 1 ou X = 4.',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire l\'ensemble complet des solutions réelles de l\'équation initiale en x.',
        hints: ['x^2 = 1 <=> x = ±1.', 'x^2 = 4 <=> x = ±2.'],
        solutionSteps: [
          'x^2 = 1 donne x = -1 ou x = 1.',
          'x^2 = 4 donne x = -2 ou x = 2.',
          'Les 4 solutions sont réelles.'
        ],
        finalAnswer: 'S = { -2 ; -1 ; 1 ; 2 }.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-17',
    targetChapterId: 'math-1ere-variations-derivation',
    title: 'Optimisation du Volume d’un Emballage Éco-Conçu',
    context: 'On fabrique une boîte sans couvercle à partir d\'une feuille de carton carrée de 12 cm de côté en découpant quatre carrés de côté x (en cm) aux coins. Volume V(x) = 4x^3 - 48x^2 + 144x pour x ∈ ]0 ; 6[.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'ecologie',
    themeLabel: '📦 Packaging & Dérivation',
    questions: [
      {
        questionText: '1. Déterminer V\'(x) et factoriser l\'expression.',
        hints: ['V\'(x) = 12x^2 - 96x + 144.', 'Factoriser par 12.'],
        solutionSteps: [
          'V\'(x) = 12x^2 - 96x + 144 = 12(x^2 - 8x + 12).',
          'Racines de x^2 - 8x + 12 : Δ = 64 - 48 = 16 ; x1 = (8 - 4)/2 = 2 et x2 = (8 + 4)/2 = 6.',
          'V\'(x) = 12(x - 2)(x - 6).'
        ],
        finalAnswer: 'V\'(x) = 12(x - 2)(x - 6).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Dresser le tableau de variations sur ]0 ; 6[ et calculer le volume maximal.',
        hints: ['V\'(x) > 0 pour x ∈ ]0 ; 2[ et V\'(x) < 0 pour x ∈ ]2 ; 6[.'],
        solutionSteps: [
          'Sur ]0 ; 2[, V\'(x) > 0 donc V est croissante.',
          'Sur ]2 ; 6[, V\'(x) < 0 donc V est décroissante.',
          'Le maximum est atteint en x = 2 cm.',
          'V(2) = 4(8) - 48(4) + 144(2) = 32 - 192 + 288 = 128 cm^3.'
        ],
        finalAnswer: 'Maximum en x = 2 cm avec un volume maximal de 128 cm^3 (128 mL).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-18',
    targetChapterId: 'math-1ere-suites',
    title: 'Suite Arithmético-Géométrique : Épuration d’un Lac Pollué',
    context: 'Un lac contient 100 tonnes de polluant. Chaque semaine, la station d\'épuration élimine 20% du polluant présent, mais les rejets industriels ajoutent 8 tonnes : c0 = 100 et cn+1 = 0,8 cn + 8.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'ecologie',
    themeLabel: '🌊 Dépollution & Suite Arithmético-Géométrique',
    questions: [
      {
        questionText: '1. On pose vn = cn - 40. Démontrer que (vn) est une suite géométrique dont on précisera le premier terme v0 et la raison q.',
        hints: ['vn+1 = cn+1 - 40 = 0,8 cn + 8 - 40 = 0,8 cn - 32 = 0,8(cn - 40).'],
        solutionSteps: [
          'vn+1 = cn+1 - 40 = (0,8 cn + 8) - 40 = 0,8 cn - 32.',
          'En factorisant par 0,8 : vn+1 = 0,8 * (cn - 40) = 0,8 * vn.',
          'La suite (vn) est donc géométrique de raison q = 0,8.',
          'Premier terme : v0 = c0 - 40 = 100 - 40 = 60.'
        ],
        finalAnswer: '(vn) est géométrique de raison q = 0,8 et v0 = 60.',
        pointsAllocated: 4
      },
      {
        questionText: '2. En déduire l\'expression de cn en fonction de n et la limite de cn quand n tend vers +∞.',
        hints: ['vn = v0 * q^n.', 'cn = vn + 40.', 'lim (0,8)^n = 0 car 0 < 0,8 < 1.'],
        solutionSteps: [
          'vn = 60 * (0,8)^n.',
          'Comme cn = vn + 40, on a cn = 40 + 60 * (0,8)^n.',
          'Puisque -1 < 0,8 < 1, lim (0,8)^n = 0 quand n -> +∞.',
          'Par suite, lim cn = 40 tonnes.'
        ],
        finalAnswer: 'cn = 40 + 60 * (0,8)^n ; le niveau de polluant se stabilise à terme à 40 tonnes.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-19',
    targetChapterId: 'math-1ere-scalaire',
    title: 'Théorème d’Al-Kashi & Télémétrie Laser Militaire',
    context: 'Un télémètre laser mesure la distance à deux cibles A et B depuis la base O : OA = 400 m, OB = 700 m et l\'angle AÔB = 60°.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🎯 Télémétrie & Al-Kashi',
    questions: [
      {
        questionText: '1. Énoncer le théorème d\'Al-Kashi (loi des cosinus) pour la distance AB.',
        hints: ['AB^2 = OA^2 + OB^2 - 2 * OA * OB * cos(AÔB).'],
        solutionSteps: [
          'Dans le triangle OAB : AB^2 = OA^2 + OB^2 - 2 * OA * OB * cos(AÔB).'
        ],
        finalAnswer: 'AB^2 = OA^2 + OB^2 - 2 * OA * OB * cos(60°).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la distance exacte AB séparant les deux cibles. Donnée : cos(60°) = 0,5.',
        hints: ['AB^2 = 400^2 + 700^2 - 2 * 400 * 700 * 0,5.'],
        solutionSteps: [
          'OA^2 = 160 000 ; OB^2 = 490 000.',
          '2 * OA * OB * 0,5 = 400 * 700 = 280 000.',
          'AB^2 = 160 000 + 490 000 - 280 000 = 370 000.',
          'AB = √370 000 = 100 * √37 ≈ 608,28 m.'
        ],
        finalAnswer: 'AB ≈ 608,3 mètres.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1m-bank-20',
    targetChapterId: 'math-1ere-probas-cond',
    title: 'Indépendance de Deux Événements en Match de Ligue des Champions',
    context: 'Dans un grand club de football, la probabilité de marquer en première mi-temps est P(A) = 0,60. La probabilité d\'encaisser un but est P(B) = 0,30. On constate que la probabilité d\'observer les deux événements simultanément est P(A ∩ B) = 0,18.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '⚽ Football & Indépendance Probabiliste',
    questions: [
      {
        questionText: '1. Rappeler la condition mathématique nécessaire et suffisante pour que deux événements A et B soient indépendants.',
        hints: ['P(A ∩ B) = P(A) * P(B).'],
        solutionSteps: [
          'Deux événements A et B sont dits indépendants au sens des probabilités si et seulement si P(A ∩ B) = P(A) * P(B).'
        ],
        finalAnswer: 'P(A ∩ B) = P(A) * P(B).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Les deux événements sont-ils indépendants ? Justifier par un calcul.',
        hints: ['Calculer le produit P(A) * P(B) et comparer à 0,18.'],
        solutionSteps: [
          'P(A) * P(B) = 0,60 * 0,30 = 0,18.',
          'Puisque P(A ∩ B) = 0,18 = P(A) * P(B), l\'égalité est vérifiée.',
          'Les deux événements sont donc stochastiquement indépendants.'
        ],
        finalAnswer: 'Oui, indépendants car P(A)*P(B) = 0,18 = P(A ∩ B).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1m-bank-21',
    targetChapterId: 'math-1ere-trigo',
    title: 'Formules d’Addition et de Duplication du Cosinus',
    context: 'En traitement du son numérique, la superposition d\'harmoniques fait appel aux identités cos(2a) = 2 cos^2(a) - 1. On cherche la valeur exacte de cos(π/12).',
    difficulty: 'Approfondissement',
    points: 8,
    themeTag: 'science',
    themeLabel: '🎵 Acoustique & Duplication',
    questions: [
      {
        questionText: '1. Écrire π/12 sous la forme d\'une différence de deux angles remarquables (par exemple π/3 - π/4 ou π/4 - π/6).',
        hints: ['π/3 - π/4 = 4π/12 - 3π/12 = π/12.'],
        solutionSteps: [
          '4π / 12 - 3π / 12 = π / 12, donc π / 12 = π/3 - π/4.'
        ],
        finalAnswer: 'π/12 = π/3 - π/4.',
        pointsAllocated: 2
      },
      {
        questionText: '2. En utilisant cos(a - b) = cos(a)cos(b) + sin(a)sin(b), donner la valeur exacte simplifiée de cos(π/12).',
        hints: ['cos(π/3) = 1/2, sin(π/3) = √3/2, cos(π/4) = sin(π/4) = √2/2.'],
        solutionSteps: [
          'cos(π/12) = cos(π/3) cos(π/4) + sin(π/3) sin(π/4).',
          'cos(π/12) = (1/2) * (√2/2) + (√3/2) * (√2/2) = √2 / 4 + √6 / 4 = (√6 + √2) / 4.'
        ],
        finalAnswer: 'cos(π/12) = (√6 + √2) / 4.',
        pointsAllocated: 6
      }
    ]
  },
  {
    id: 'ex-1m-bank-22',
    targetChapterId: 'math-1ere-exponentielle',
    title: 'Équations & Inéquations avec l’Exponentielle',
    context: 'On résout dans ℝ l\'équation e^(2x) - 3 e^x + 2 = 0 intervenant dans la modélisation cinétique de réactions enzymatiques.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🔬 Cinétique & Équation Exponentielle',
    questions: [
      {
        questionText: '1. En posant X = e^x, quelle équation polynomiale du second degré obtient-on ?',
        hints: ['e^(2x) = (e^x)^2 = X^2.'],
        solutionSteps: [
          'Puisque e^(2x) = (e^x)^2 = X^2, l\'équation devient X^2 - 3X + 2 = 0.'
        ],
        finalAnswer: 'X^2 - 3X + 2 = 0.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Trouver les valeurs de X puis en déduire les solutions réelles x.',
        hints: ['Racines de X^2 - 3X + 2 : X = 1 et X = 2.', 'e^x = 1 <=> x = 0 ; e^x = 2 <=> x = ln(2).'],
        solutionSteps: [
          'X^2 - 3X + 2 = (X - 1)(X - 2) = 0 <=> X = 1 ou X = 2.',
          'Cas 1 : e^x = 1 <=> x = 0.',
          'Cas 2 : e^x = 2 <=> x = ln(2) ≈ 0,693.'
        ],
        finalAnswer: 'S = { 0 ; ln(2) }.',
        pointsAllocated: 5
      }
    ]
  }
];
