import { Chapter } from '../types';

export const COMPLETE_CHAPTERS_PART1: Chapter[] = [
  // =========================================================================
  // SECONDE - VARIATIONS DE FONCTIONS & EXTREMUMS (MATHS)
  // =========================================================================
  {
    id: 'math-2nde-variations-extremums',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Variations de Fonctions, Tableaux de Signes & Extremums',
    officialCode: 'MATH-2-04',
    description: 'Définition d’une fonction croissante et décroissante, construction de tableaux de variations, recherche du maximum et minimum, résolution graphique d’inéquations f(x) ≤ k et f(x) ≤ g(x).',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Fonction croissante sur I : Pour tous a, b ∈ I, si a < b alors f(a) ≤ f(b) (l\'ordre des images est conservé).',
      'Fonction décroissante sur I : Pour tous a, b ∈ I, si a < b alors f(a) ≥ f(b) (l\'ordre des images est inversé).',
      'Maximum M sur I : f(x) ≤ M pour tout x ∈ I, et il existe un x0 tel que f(x0) = M.',
      'Résolution graphique de f(x) < g(x) : Ensemble des abscisses x pour lesquelles la courbe Cf est strictement en-dessous de Cg.'
    ],
    keyFormulas: [
      {
        label: 'Taux de variation',
        formula: 'T(a, b) = \\frac{f(b) - f(a)}{b - a}',
        explanation: 'Si T(a,b) > 0 pour tous a ≠ b, alors f est strictement croissante.'
      },
      {
        label: 'Fonction carrée x²',
        formula: 'x < 0 \\implies x^2 \\text{ décroissante} \\quad ; \\quad x > 0 \\implies x^2 \\text{ croissante}',
        explanation: 'Le minimum absolu est atteint en x = 0 (valeur 0).'
      }
    ],
    courseSections: [
      {
        title: '1. Méthode pour dresser un tableau de variations',
        content: [
          '• Repérer l\'ensemble de définition [a ; b].',
          '• Identifier les abscisses des extremums locaux (sommets ou creux de la courbe).',
          '• Dessiner les flèches montantes pour les intervalles de croissance et descendantes pour la décroissance.',
          '• Inscrire scrupuleusement les valeurs exactes des images aux extrémités des flèches.'
        ],
        proTip: 'Ne confondez jamais "tableau de signes" (où f(x) est positif ou négatif) et "tableau de variations" (où f monte ou descend).'
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-variations-gaming',
        title: 'Exercice Type Seconde : Optimisation du DPS d\'un Mage dans un RPG Multijoueur',
        context: 'Dans un jeu de rôle fantastique, la quantité de dégâts par seconde f(x) infligée par un sort dépend de la distance x (en mètres) séparant le joueur de la cible (pour x ∈ [2 ; 12]). L\'expression du sort est modélisée par f(x) = -(x - 7)² + 36.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'gaming',
        themeLabel: '🎮 RPG & Optimisation de Dégâts',
        questions: [
          {
            questionText: 'Question 1 : Justifier que pour tout x ∈ [2 ; 12], f(x) ≤ 36.',
            hints: ['Un carré est toujours positif ou nul : (x - 7)² ≥ 0.'],
            solutionSteps: [
              'Pour tout réel x, (x - 7)² ≥ 0.',
              'En multipliant par -1 : -(x - 7)² ≤ 0.',
              'En ajoutant 36 : -(x - 7)² + 36 ≤ 36.',
              'Ainsi f(x) ≤ 36 pour tout x ∈ [2 ; 12].'
            ],
            finalAnswer: 'f(x) ≤ 36 pour tout x ∈ [2 ; 12]',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : En déduire la distance optimale x à laquelle le joueur doit se placer pour maximiser ses dégâts, ainsi que la valeur maximale du DPS.',
            hints: ['Pour quelle valeur de x a-t-on f(x) = 36 ?'],
            solutionSteps: [
              'f(x) = 36 <=> -(x - 7)² + 36 = 36 <=> -(x - 7)² = 0 <=> x = 7 mètres.',
              'Comme f(x) ≤ 36 et f(7) = 36, le maximum absolu est 36 dégâts/seconde, atteint à une distance de 7 mètres.'
            ],
            finalAnswer: 'Distance optimale : x = 7 m (DPS max = 36)',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Résoudre l\'inéquation f(x) ≥ 20 pour déterminer la zone de distance efficace du sort.',
            hints: ['-(x - 7)² + 36 ≥ 20 <=> (x - 7)² ≤ 16.'],
            solutionSteps: [
              '-(x - 7)² + 36 ≥ 20 <=> 16 ≥ (x - 7)².',
              'Comme 16 = 4², cela équivaut à -4 ≤ x - 7 ≤ 4.',
              'En ajoutant 7 : 7 - 4 ≤ x ≤ 7 + 4 <=> 3 ≤ x ≤ 11 mètres.'
            ],
            finalAnswer: 'Zone efficace : x ∈ [3 ; 11] mètres',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-var-1',
        question: 'Si une fonction f est strictement décroissante sur [1 ; 5], que peut-on dire de f(2) et f(4) ?',
        options: ['f(2) > f(4)', 'f(2) < f(4)', 'f(2) = f(4)', 'Impossible à savoir'],
        correctIndex: 0,
        explanation: 'Une fonction décroissante inverse l\'ordre des images : comme 2 < 4, alors f(2) > f(4).'
      },
      {
        id: 'q-var-2',
        question: 'Que représente le sommet S de la parabole de f(x) = (x - 3)² + 5 ?',
        options: ['Un minimum absolu en (3 ; 5)', 'Un maximum absolu en (-3 ; 5)', 'Un zéro de la fonction', 'Une asymptote'],
        correctIndex: 0,
        explanation: 'Comme le carré (x - 3)² ≥ 0, la plus petite valeur possible est 5, atteinte lorsque x = 3.'
      },
      {
        id: 'q-var-3',
        question: 'Graphiquement, comment résout-on l\'équation f(x) = k ?',
        options: [
          'En cherchant les abscisses des points d\'intersection entre Cf et la droite horizontale y = k',
          'En regardant où la courbe coupe l\'axe vertical',
          'En calculant f(k)',
          'En mesurant la pente'
        ],
        correctIndex: 0,
        explanation: 'Les solutions sont les abscisses x des points où la courbe rencontre la droite d\'ordonnée fixe y = k.'
      },
      {
        id: 'q-var-4',
        question: 'Sur quel intervalle la fonction inverse f(x) = 1/x est-elle décroissante ?',
        options: ['Sur ]-∞ ; 0[ et sur ]0 ; +∞[ séparément', 'Sur ℝ tout entier', 'Sur aucun intervalle', 'Uniquement sur [0 ; 1]'],
        correctIndex: 0,
        explanation: 'La fonction inverse est strictement décroissante sur chacun de ses deux intervalles de définition, mais pas sur leur réunion globale.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - STATISTIQUES DESCRIPTIVES (MATHS)
  // =========================================================================
  {
    id: 'math-2nde-statistiques',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Statistiques Descriptives : Médiane, Quartiles & Diagrammes en Boîte',
    officialCode: 'MATH-2-05',
    description: 'Effectifs cumulés, moyenne pondérée, médiane Me, premier et troisième quartiles Q1/Q3, étendue, écart interquartile Q3 - Q1 et tracé des diagrammes en boîte (boîtes à moustaches).',
    estimatedMinutes: 35,
    summaryHighlights: [
      'Moyenne pondérée : x̄ = (∑ ni xi) / N.',
      'Médiane Me : Valeur qui partage la série ordonnée en deux sous-groupes de même effectif (au moins 50% des valeurs ≤ Me).',
      'Premier quartile Q1 : Plus petite valeur de la série ordonnée telle qu\'au moins 25% des données soient inférieures ou égales à Q1.',
      'Troisième quartile Q3 : Plus petite valeur telle qu\'au moins 75% des données soient inférieures ou égales à Q3.',
      'L\'écart interquartile Q3 - Q1 mesure la dispersion des 50% centraux et n\'est pas sensible aux valeurs extrêmes aberrantes.'
    ],
    keyFormulas: [
      {
        label: 'Moyenne pondérée',
        formula: '\\bar{x} = \\frac{\\sum_{i=1}^p n_i x_i}{N} \\quad \\text{avec } N = \\sum n_i',
        explanation: 'Indicateur de position sensible aux valeurs extrêmes.'
      },
      {
        label: 'Écart interquartile',
        formula: 'EI = Q_3 - Q_1',
        explanation: 'Largeur de la boîte centrale contenant 50% de la population.'
      }
    ],
    courseSections: [
      {
        title: '1. Comparaison Moyenne vs Médiane',
        content: [
          'La moyenne est affectée par les valeurs très grandes ou très petites (ex. : les très hauts salaires tirent le salaire moyen vers le haut).',
          'La médiane est un indicateur robuste : elle sépare fidèlement la population en deux moitiés égales (50% au-dessus, 50% en-dessous).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-stats-esport',
        title: 'Exercice Type Seconde : Analyse de la Latence (Ping) d\'un Serveur de Jeu Esport',
        context: 'Un joueur compétitif teste la latence (ping en millisecondes) de sa connexion sur 12 parties en ligne classées. Voici les valeurs obtenues par ordre croissant : 18, 19, 21, 22, 22, 25, 27, 28, 30, 31, 45, 96.',
        difficulty: 'Facile',
        points: 5,
        themeTag: 'gaming',
        themeLabel: '🎮 Connexion Réseau & Latence Esport',
        questions: [
          {
            questionText: 'Question 1 : Calculer le ping moyen du joueur sur l\'ensemble des 12 parties.',
            hints: ['Faire la somme des 12 valeurs et diviser par 12.'],
            solutionSteps: [
              'Somme S = 18 + 19 + 21 + 22 + 22 + 25 + 27 + 28 + 30 + 31 + 45 + 96 = 384 ms.',
              'Moyenne x̄ = 384 / 12 = 32 ms.'
            ],
            finalAnswer: 'Ping moyen : x̄ = 32 ms',
            pointsAllocated: 1.5
          },
          {
            questionText: 'Question 2 : Déterminer la médiane Me ainsi que les quartiles Q1 et Q3 de cette série.',
            hints: ['N = 12 est pair : médiane entre la 6e et la 7e valeur.', 'Q1 rang = 12 × 0,25 = 3e valeur. Q3 rang = 12 × 0,75 = 9e valeur.'],
            solutionSteps: [
              'Effectif total N = 12. 12 / 2 = 6. La médiane est la moyenne entre la 6e valeur (25 ms) et la 7e valeur (27 ms) : Me = (25 + 27) / 2 = 26 ms.',
              '12 × 0,25 = 3 : le premier quartile Q1 est la 3e valeur, soit Q1 = 21 ms.',
              '12 × 0,75 = 9 : le troisième quartile Q3 est la 9e valeur, soit Q3 = 30 ms.'
            ],
            finalAnswer: 'Me = 26 ms, Q1 = 21 ms, Q3 = 30 ms',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Expliquer pourquoi la médiane (26 ms) décrit mieux l\'expérience réelle du joueur que la moyenne (32 ms).',
            hints: ['Repérer la présence d\'un pic isolé de lag (96 ms).'],
            solutionSteps: [
              'La dernière partie a subi un pic de lag isolé à 96 ms (valeur atypique ou "outlier").',
              'Cette valeur tire artificiellement la moyenne vers le haut (32 ms).',
              'En revanche, la médiane (26 ms) et l\'écart interquartile (30 - 21 = 9 ms) montrent que dans au moins 75% des parties, le ping était inférieur ou égal à 30 ms, offrant une excellente fluidité.'
            ],
            finalAnswer: 'La médiane est insensible aux lags isolés et reflète fidèlement la stabilité du réseau.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-stat-1',
        question: 'Pour une série ordonnée de 15 valeurs, quel rang correspond exactement à la médiane ?',
        options: ['La 8e valeur', 'La 7e valeur', 'La 7,5e valeur', 'La moyenne des 15'],
        correctIndex: 0,
        explanation: '15 / 2 = 7,5. La 8e valeur laisse 7 données en-dessous et 7 données au-dessus : c\'est la médiane.'
      },
      {
        id: 'q-stat-2',
        question: 'Quel pourcentage minimal des données se trouve toujours entre le 1er quartile Q1 et le 3e quartile Q3 ?',
        options: ['50%', '25%', '75%', '95%'],
        correctIndex: 0,
        explanation: 'Par définition, au moins 50% des valeurs sont comprises entre Q1 (25e percentile) et Q3 (75e percentile).'
      },
      {
        id: 'q-stat-3',
        question: 'Quelle est la définition de l\'étendue d\'une série statistique ?',
        options: ['Valeur maximale - Valeur minimale', 'Q3 - Q1', 'Moyenne - Médiane', 'Somme des effectifs'],
        correctIndex: 0,
        explanation: 'L\'étendue est l\'écart total entre la plus grande valeur et la plus petite valeur de la série.'
      },
      {
        id: 'q-stat-4',
        question: 'Dans un diagramme en boîte (boîte à moustaches), que représentent les extrémités des "moustaches" ?',
        options: [
          'Le minimum et le maximum de la série (hors valeurs aberrantes)',
          'La moyenne et la médiane',
          '0 et 100',
          'Q1 et Q3'
        ],
        correctIndex: 0,
        explanation: 'Les deux extrémités correspondent aux valeurs minimale et maximale de la série observée.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - SPECTRES D'ÉMISSION & ABSORPTION D'ÉTOILES (PHYSIQUE-CHIMIE)
  // =========================================================================
  {
    id: 'pc-2nde-spectres-etoiles',
    subjectId: 'physique-chimie',
    gradeLevel: '2nde',
    title: 'Émission & Absorption de la Lumière : Spectres & Température des Étoiles',
    officialCode: 'PC-2-03',
    description: 'Spectres continus d’origine thermique, influence de la température (loi de Wien), spectres de raies d’émission et d’absorption, et composition chimique de l’atmosphère stellaire.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Un corps chaud émet un spectre continu d\'origine thermique dont le domaine s\'enrichit vers le violet quand la température s\'élève.',
      'Un gaz sous faible pression et à haute température émet un spectre de raies d\'émission caractéristique de ses atomes.',
      'Un gaz froid traversé par une lumière blanche absorbe exactement les radiations qu\'il est capable d\'émettre (spectre de raies d\'absorption).',
      'Les raies sombres observées dans le spectre du Soleil (raies de Fraunhofer) permettent d\'identifier les éléments chimiques présents dans son atmosphère.'
    ],
    keyFormulas: [
      {
        label: 'Loi de déplacement de Wien',
        formula: '\\lambda_{max} \\cdot T = 2{,}898 \\times 10^{-3} \\; \\text{m} \\cdot \\text{K}',
        explanation: 'Relie la longueur d\'onde d\'émission maximale à la température de surface en Kelvin.'
      },
      {
        label: 'Conversion Celsius - Kelvin',
        formula: 'T(\\text{K}) = \\theta(^\\circ\\text{C}) + 273{,}15',
        explanation: 'Le zéro absolu correspond à 0 K (-273,15 °C).'
      }
    ],
    courseSections: [
      {
        title: '1. Identification des éléments chimiques des étoiles',
        content: [
          'Chaque atome possède une carte d\'identité spectrale unique (signature de raies).',
          'En comparant les longueurs d\'onde des raies noires du spectre d\'une étoile aux raies d\'émission d\'éléments mesurés en laboratoire (hydrogène, hélium, fer), les astrophysiciens découvrent la composition exacte de l\'étoile.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-spectres-jameswebb',
        title: 'Exercice Type Seconde : Température de Bételgeuse & Atmosphère d\'une Exoplanète',
        context: 'L\'étoile supergéante rouge Bételgeuse (dans la constellation d\'Orion) présente un pic d\'émission thermique à la longueur d\'onde λ_max = 828 nm (dans le proche infrarouge). Donnée : Constante de Wien k = 2,898 × 10⁻³ m·K. 1 nm = 10⁻⁹ m.',
        difficulty: 'Type Bac',
        points: 6,
        themeTag: 'space',
        themeLabel: '🚀 Astrophysique & Télescope Spatial',
        questions: [
          {
            questionText: 'Question 1 : Convertir la longueur d\'onde λ_max en mètres.',
            hints: ['Multiplier par 10⁻⁹.'],
            solutionSteps: [
              'λ_max = 828 nm = 828 × 10⁻⁹ m = 8,28 × 10⁻⁷ m.'
            ],
            finalAnswer: 'λ_max = 8,28 × 10⁻⁷ m',
            pointsAllocated: 1.5
          },
          {
            questionText: 'Question 2 : Calculer la température de surface T de Bételgeuse en Kelvin, puis en degrés Celsius.',
            hints: ['Appliquer la loi de Wien : T = k / λ_max.', 'θ(°C) = T(K) - 273,15.'],
            solutionSteps: [
              'D\'après la loi de Wien : T = (2,898 × 10⁻³) / (8,28 × 10⁻⁷) ≈ 3 500 K.',
              'En degrés Celsius : θ = 3500 - 273,15 ≈ 3 227 °C.'
            ],
            finalAnswer: 'T ≈ 3 500 K (soit environ 3 227 °C)',
            pointsAllocated: 2.5
          },
          {
            questionText: 'Question 3 : Lors du transit d\'une exoplanète devant son étoile hôte, le télescope spatial détecte deux raies d\'absorption intenses à 589,0 nm et 589,6 nm. Quel élément chimique est présent dans l\'atmosphère de l\'exoplanète ? (Hydrogène : 656 nm ; Sodium : doublet à 589 nm ; Hélium : 587 nm).',
            hints: ['Comparer les longueurs d\'onde observées au doublet caractéristique du sodium.'],
            solutionSteps: [
              'Les deux raies sombres à 589,0 nm et 589,6 nm constituent le fameux "doublet D du sodium".',
              'Cette signature spectrale prouve irréfutablement la présence de vapeur de sodium (Na) dans l\'atmosphère de l\'exoplanète.'
            ],
            finalAnswer: 'Présence de vapeur de Sodium (Na).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-sp-1',
        question: 'Comment évolue la couleur globale d\'une étoile lorsque sa température de surface augmente ?',
        options: [
          'Elle passe du rouge à l\'orange, puis jaune, blanc et enfin bleu',
          'Elle passe du bleu vers le rouge',
          'Elle devient toujours verte',
          'La couleur ne change pas'
        ],
        correctIndex: 0,
        explanation: 'Plus un corps est chaud, plus son pic d\'émission se décale vers les courtes longueurs d\'onde (bleu/ultraviolet).'
      },
      {
        id: 'q-sp-2',
        question: 'Qu\'observe-t-on dans le spectre d\'une lampe à vapeur de mercure ou de néon ?',
        options: [
          'Un spectre de raies d\'émission discontinues sur fond noir',
          'Un arc-en-ciel continu parfait',
          'Un spectre entièrement noir',
          'De la lumière blanche uniforme'
        ],
        correctIndex: 0,
        explanation: 'Un gaz basse pression excité électriquement n\'émet que des photons d\'énergies discrètes bien précises.'
      },
      {
        id: 'q-sp-3',
        question: 'Quel domaine de longueurs d\'onde correspond à la lumière visible par l\'œil humain ?',
        options: ['Entre 400 nm et 800 nm environ', 'Entre 10 nm et 100 nm', 'Supérieur à 1 mm', 'Entre 1 km et 10 km'],
        correctIndex: 0,
        explanation: 'Le spectre visible s\'étend approximativement de 400 nm (violet) à 800 nm (rouge sombre).'
      },
      {
        id: 'q-sp-4',
        question: 'Que représentent les raies de Fraunhofer observées dans le spectre du Soleil ?',
        options: [
          'Des raies d\'absorption créées par les gaz de son atmosphère',
          'Des défauts du télescope',
          'Des émissions de poussières lunaires',
          'Des comètes en transit'
        ],
        correctIndex: 0,
        explanation: 'La photosphère solaire émet un spectre continu chaud qui traverse la chromosphère plus froide, créant des raies d\'absorption.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - FORCES & PRINCIPE D'INERTIE (PHYSIQUE-CHIMIE)
  // =========================================================================
  {
    id: 'pc-2nde-forces-principe-inertie',
    subjectId: 'physique-chimie',
    gradeLevel: '2nde',
    title: 'Modélisation des Actions Mécaniques & Principe d’Inertie',
    officialCode: 'PC-2-04',
    description: 'Vecteur force (point d’application, direction, sens, norme), loi de gravitation universelle de Newton, poids P = mg et première loi de Newton (principe d’inertie).',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Une action mécanique est modélisée par une force F caractérisée par : un point d\'application, une direction, un sens et une valeur en Newtons (N).',
      'Loi de gravitation universelle : F_grav = G · (mA · mB) / d² (attractive le long de la droite AB).',
      'Poids d\'un corps : P = m · g (vertical descendant, g ≈ 9,81 N/kg sur Terre).',
      'Principe d\'inertie (1ère loi de Newton) : Si les forces qui s\'exercent sur un système se compensent (∑ F = 0), alors le système est soit immobile, soit en mouvement rectiligne uniforme.'
    ],
    keyFormulas: [
      {
        label: 'Poids d\'un objet',
        formula: 'P = m \\cdot g',
        explanation: 'm en kg, g en N/kg (ou m/s²), P en Newtons.'
      },
      {
        label: 'Principe d\'inertie',
        formula: '\\sum \\vec{F} = \\vec{0} \\iff \\vec{v} = \\vec{\\text{cste}} \\; (\\text{immobile ou MRU})',
        explanation: 'La réciproque et la contraposée sont également fondamentales.'
      }
    ],
    courseSections: [
      {
        title: '1. Contraposée du principe d\'inertie',
        content: [
          'Si la trajectoire n\'est pas une droite ou si la vitesse n\'est pas constante (accélération, virage, freinage), alors les forces appliquées NE se compensent PAS (∑ F ≠ 0).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-inertie-spacex',
        title: 'Exercice Type Seconde : Vol Inertiel d\'une Capsule SpaceX Crew Dragon vers l\'ISS',
        context: 'Après l\'extinction complète de ses moteurs, une capsule spatiale de masse m = 12 500 kg se déplace en ligne droite à la vitesse constante v = 7,66 km/s dans l\'espace lointain, hors de toute atmosphère et loin de toute planète.',
        difficulty: 'Facile',
        points: 5,
        themeTag: 'space',
        themeLabel: '🚀 Capsule Spatiale & Vol Inertiel',
        questions: [
          {
            questionText: 'Question 1 : Qualifiez le mouvement de la capsule spatiale dans ce référentiel.',
            hints: ['La trajectoire est une droite et la vitesse est constante.'],
            solutionSteps: [
              'La trajectoire est une ligne droite : le mouvement est rectiligne.',
              'La vitesse est constante (7,66 km/s) : le mouvement est uniforme.',
              'Le mouvement est donc un mouvement rectiligne uniforme (MRU).'
            ],
            finalAnswer: 'Mouvement rectiligne uniforme (MRU).',
            pointsAllocated: 1.5
          },
          {
            questionText: 'Question 2 : En appliquant le principe d\'inertie, que peut-on déduire de la somme des forces s\'exerçant sur la capsule ? Les moteurs doivent-ils rester allumés pour maintenir cette vitesse ?',
            hints: ['Principe d\'inertie : MRU équivaut à forces qui se compensent.'],
            solutionSteps: [
              'D\'après le principe d\'inertie (1ère loi de Newton), comme le système est en mouvement rectiligne uniforme, la somme vectorielle des forces qui s\'exercent sur lui est rigoureusement nulle : ∑ F = 0.',
              'Aucune force n\'est requise pour maintenir la vitesse dans le vide spatial : les moteurs peuvent rester totalement éteints. La capsule conserve sa vitesse indéfiniment par inertie.'
            ],
            finalAnswer: '∑ F = 0. Les moteurs restent éteints pour économiser le carburant.',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : La capsule allume ensuite ses propulseurs latéraux pour effectuer un virage d\'amarrage. Les forces se compensent-elles encore ?',
            hints: ['Appliquer la contraposée du principe d\'inertie : la trajectoire n\'est plus rectiligne.'],
            solutionSteps: [
              'Pendant le virage, la trajectoire s\'incurve : le mouvement n\'est plus rectiligne.',
              'Par la contraposée du principe d\'inertie, les forces ne se compensent plus (∑ F ≠ 0).',
              'La poussée latérale des propulseurs crée une force nette responsable du changement de direction.'
            ],
            finalAnswer: 'Non, les forces ne se compensent plus car la trajectoire est courbée.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-ine-1',
        question: 'Quelle est la conséquence directe du principe d\'inertie si un palet de hockey glisse sans frottement sur la glace ?',
        options: [
          'Il poursuit sa trajectoire rectiligne à vitesse rigoureusement constante',
          'Il s\'arrête immédiatement',
          'Il accélère tout seul',
          'Il décrit un cercle parfait'
        ],
        correctIndex: 0,
        explanation: 'Le poids et la réaction de la glace se compensent : sans frottement, le mouvement reste rectiligne uniforme.'
      },
      {
        id: 'q-ine-2',
        question: 'Quelle est l\'unité légale de la force dans le Système International ?',
        options: ['Le Newton (N)', 'Le Joule (J)', 'Le Watt (W)', 'Le Kilogramme (kg)'],
        correctIndex: 0,
        explanation: 'Une force se mesure en Newtons (N) à l\'aide d\'un dynamomètre.'
      },
      {
        id: 'q-ine-3',
        question: 'Si un parachutiste descend en ligne droite à vitesse constante de 50 km/h, que vaut la résistance de l\'air par rapport à son poids ?',
        options: [
          'La résistance de l\'air compense exactement son poids (forces égales et opposées)',
          'La résistance de l\'air est nulle',
          'Le poids est dix fois plus fort',
          'La vitesse augmente'
        ],
        correctIndex: 0,
        explanation: 'En mouvement rectiligne uniforme, la somme des forces est nulle : frottement de l\'air vers le haut = poids vers le bas.'
      },
      {
        id: 'q-ine-4',
        question: 'Que devient le poids d\'un astronaute de 80 kg sur la Lune où g_Lune = 1,6 N/kg ?',
        options: ['128 N (environ 6 fois moins que sur Terre)', '800 N', '0 N', '80 kg'],
        correctIndex: 0,
        explanation: 'P = m × g = 80 × 1,6 = 128 N (sur Terre, son poids serait d\'environ 80 × 9,81 ≈ 785 N).'
      }
    ]
  },

  // =========================================================================
  // SECONDE - EFFORT PHYSIQUE, COEUR & SANTÉ (SVT)
  // =========================================================================
  {
    id: 'svt-2nde-effort-musculaire',
    subjectId: 'svt',
    gradeLevel: '2nde',
    title: 'L’Effort Physique & la Santé : Réponses Physiologiques & VO2 max',
    officialCode: 'SVT-2-04',
    description: 'Modifications physiologiques à l’effort (fréquence cardiaque, débit ventilatoire, pression artérielle), approvisionnement des muscles en dioxygène et nutriments, et VO2 max.',
    estimatedMinutes: 35,
    summaryHighlights: [
      'Lors d\'un effort physique, la consommation de dioxygène (VO2) et de nutriments (glucose) par les muscles augmente fortement pour produire de l\'ATP.',
      'Réponses physiologiques d\'adaptation : Augmentation conjointe de la Fréquence Cardiaque (FC) et de la Fréquence Respiratoire (FR).',
      'Débit ventilatoire : D_v = FR · V_courant (en L/min) ; Débit cardiaque : D_c = FC · V_éjection_systolique (en L/min).',
      'VO2 max : Volume maximal de dioxygène qu\'un individu peut consommer par unité de temps lors d\'un effort maximal.'
    ],
    keyFormulas: [
      {
        label: 'Débit cardiaque',
        formula: 'D_c = \\text{FC} \\times \\text{VES}',
        explanation: 'FC en battements/min, VES en litres par battement, Dc en L/min.'
      },
      {
        label: 'Débit ventilatoire',
        formula: 'D_v = \\text{FR} \\times V_t',
        explanation: 'FR en cycles/min, Vt (volume courant) en litres par cycle.'
      }
    ],
    courseSections: [
      {
        title: '1. Redistribution du débit sanguin à l\'effort',
        content: [
          'Au repos, les muscles ne reçoivent qu\'environ 15 à 20% du débit sanguin total.',
          'À l\'effort maximal, grâce à la vasodilatation des artérioles musculaires et à la vasoconstriction des organes digestifs, les muscles reçoivent plus de 80% du débit cardiaque !'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-svt-marathon',
        title: 'Exercice Type Seconde : Évaluation Physiologique d\'un Athlète de Demi-Fond (800m)',
        context: 'Un élève de seconde mesure ses paramètres physiologiques avant et pendant un test d\'effort sur tapis de course. Au repos : Fréquence cardiaque FC = 65 bpm, Volume d\'éjection systolique VES = 70 mL. À l\'effort maximal : FC = 185 bpm, VES = 120 mL.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'sport',
        themeLabel: '🏎️ Athlétisme & Performance Cardiaque',
        questions: [
          {
            questionText: 'Question 1 : Calculer le débit cardiaque du coureur au repos et à l\'effort en L/min.',
            hints: ['Dc = FC × VES. Convertir les mL en Litres (1 L = 1000 mL).'],
            solutionSteps: [
              'Au repos : VES = 70 mL = 0,070 L. Dc_repos = 65 × 0,070 = 4,55 L/min.',
              'À l\'effort : VES = 120 mL = 0,120 L. Dc_effort = 185 × 0,120 = 22,2 L/min.'
            ],
            finalAnswer: 'Dc_repos = 4,55 L/min et Dc_effort = 22,2 L/min (multiplié par ~5)',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Expliquer pourquoi la consommation de dioxygène plafonne à la valeur VO2 max même si l\'intensité de la course continue d\'augmenter.',
            hints: ['Identifier les facteurs limitants : capacité maximale de pompage du cœur et surface d\'échange alvéolaire.'],
            solutionSteps: [
              'Le cœur atteint sa fréquence cardiaque maximale théorique (FC_max ≈ 220 - âge) et ne peut plus éjecter davantage de sang par minute.',
              'Le système cardio-respiratoire (diffusion alvéolo-capillaire et transport par l\'hémoglobine) est saturé à 100%.',
              'Au-delà de VO2 max, le surcroît d\'énergie ne peut être fourni que par la filière anaérobie (fermentation lactique avec fatigue musculaire rapide).'
            ],
            finalAnswer: 'Saturation cardio-respiratoire limitant le transport maximal de dioxygène.',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Quels sont les bienfaits d\'un entraînement d\'endurance régulier sur le muscle cardiaque ?',
            hints: ['Épaississement du myocarde, augmentation du VES et diminution de la FC de repos.'],
            solutionSteps: [
              'L\'entraînement régulier hypertrophie le myocarde (cœur d\'athlète plus volumineux et plus puissant).',
              'Le volume d\'éjection systolique au repos augmente nettement.',
              'Par conséquent, pour maintenir le même débit cardiaque de repos, la fréquence cardiaque baisse (bradycardie de repos : ~45-50 bpm chez les sportifs entraînés), ce qui économise le cœur.'
            ],
            finalAnswer: 'Augmentation du VES et baisse de la fréquence cardiaque au repos.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-eff-1',
        question: 'Comment évolue la pression artérielle systolique lors d\'un effort physique ?',
        options: [
          'Elle augmente pour assurer une perfusion musculaire accrue',
          'Elle chute à zéro',
          'Elle reste rigoureusement constante',
          'Elle diminue de moitié'
        ],
        correctIndex: 0,
        explanation: 'L\'augmentation du débit cardiaque entraîne une hausse de la pression artérielle systolique durant l\'exercice.'
      },
      {
        id: 'q-eff-2',
        question: 'Quelle molécule organique est principalement dégradée par les cellules musculaires en présence de dioxygène pour produire de l\'ATP ?',
        options: ['Le glucose', 'L\'urée', 'Le cholestérol', 'L\'amidon non digéré'],
        correctIndex: 0,
        explanation: 'La respiration cellulaire oxyde le glucose : C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O + 36 ATP.'
      },
      {
        id: 'q-eff-3',
        question: 'Quelle est la formule approchée pour estimer la Fréquence Cardiaque Maximale (FC_max) d\'un être humain ?',
        options: ['220 - âge (en années)', '100 + âge', '50 × âge', '120 bpm constant'],
        correctIndex: 0,
        explanation: 'La règle classique d\'Astrand estime FC_max ≈ 220 - âge (ex: 204 bpm pour un lycéen de 16 ans).'
      },
      {
        id: 'q-eff-4',
        question: 'Vers quels organes le flux sanguin est-il préférentiellement réduit lors d\'une course à pied intense ?',
        options: [
          'Le système digestif (estomac, intestins) et les reins',
          'Le cerveau',
          'Les muscles des jambes',
          'Le cœur'
        ],
        correctIndex: 0,
        explanation: 'Une vasoconstriction périphérique détourne le sang des viscères digestifs au profit des muscles squelettiques en action.'
      }
    ]
  }
];
