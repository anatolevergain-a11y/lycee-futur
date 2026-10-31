import { Chapter } from '../types';
import { SUPPLEMENTARY_CHAPTERS } from './supplementaryCurriculum';
import { ADVANCED_CHAPTERS } from './advancedCurriculum';
import { EXPERT_CHAPTERS } from './expertCurriculum';
import { COMPLETE_CHAPTERS_PART1 } from './completeCurriculumPart1';
import { COMPLETE_CHAPTERS_PART2 } from './completeCurriculumPart2';
import { COMPLETE_CHAPTERS_PART3 } from './completeCurriculumPart3';
import { OFFICIAL_REGISTRY_PART1 } from './officialCurriculumRegistryPart1';
import { OFFICIAL_REGISTRY_PART2 } from './officialCurriculumRegistryPart2';

export const CURRICULUM_CHAPTERS: Chapter[] = [
  // =========================================================================
  // SECONDE (2nde) - MATHÉMATIQUES
  // =========================================================================
  {
    id: 'math-2nde-arithmetique',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Ensembles de Nombres, Arithmétique & Nombres Premiers',
    officialCode: 'MATH-2-01',
    description: 'Ensembles fondamentaux ℕ, ℤ, 𝔻, ℚ, ℝ, parité, divisibilité, décomposition en facteurs premiers et démonstration de l’irrationalité de √2.',
    estimatedMinutes: 35,
    summaryHighlights: [
      'Emboîtement des ensembles : ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ ⊂ ℝ.',
      'Un nombre pair s\'écrit sous la forme 2k et un nombre impair 2k + 1 (avec k ∈ ℤ).',
      'Théorème fondamental de l\'arithmétique : Tout entier supérieur ou égal à 2 se décompose de manière unique en un produit de nombres premiers.',
      'Démonstration par l\'absurde : √2 est irrationnel (ne peut pas s\'écrire sous forme d\'une fraction irréductible a/b).'
    ],
    keyFormulas: [
      {
        label: 'Forme d\'un nombre décimal',
        formula: 'x = \\frac{a}{10^n} = \\frac{a}{2^p \\cdot 5^q} \\quad (a \\in \\mathbb{Z}, \\, n, p, q \\in \\mathbb{N})',
        explanation: 'Un rationnel est décimal si son dénominateur irréductible ne contient que 2 et 5.'
      },
      {
        label: 'Identités remarquables de Seconde',
        formula: '(a+b)^2 = a^2 + 2ab + b^2 \\quad ; \\quad (a-b)(a+b) = a^2 - b^2',
        explanation: 'Fondamentales pour le développement et la factorisation rapide.'
      }
    ],
    courseSections: [
      {
        title: '1. Les ensembles de nombres',
        content: [
          '• Entiers naturels ℕ : {0, 1, 2, 3, ...}',
          '• Entiers relatifs ℤ : {..., -2, -1, 0, 1, 2, ...}',
          '• Nombres décimaux 𝔻 : nombres ayant une écriture décimale finie, s\'écrivant a / 10^n.',
          '• Nombres rationnels ℚ : quotients de deux entiers a / b (avec b ≠ 0).',
          '• Nombres réels ℝ : ensemble de tous les nombres rationnels et irrationnels (comme π ou √2).'
        ]
      },
      {
        title: '2. Nombres premiers et décomposition',
        content: [
          'Un entier n ≥ 2 est dit premier s\'il ne possède que deux diviseurs distincts : 1 et lui-même (2, 3, 5, 7, 11, 13, 17, 19, 23...).',
          'La décomposition en produit de facteurs premiers permet de simplifier rapidement les fractions et de trouver les diviseurs communs.'
        ],
        proTip: 'Pour prouver qu\'un nombre N est premier, il suffit de tester sa divisibilité par tous les nombres premiers inférieurs ou égaux à √N.'
      }
    ],
    exercises: [
      {
        id: 'ex-math-2nde-1',
        title: 'Problème Résolu : Décomposition, simplification de radicaux et preuve d\'irrationalité',
        context: 'On étudie le nombre N = 504 et le rapport r = 504 / 840, puis l\'écriture de radicaux.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Donner la décomposition en produit de facteurs premiers de 504 et de 840.',
            hints: ['Diviser successivement par 2, puis 3, 5, 7.'],
            solutionSteps: [
              '504 = 2 × 252 = 2² × 126 = 2³ × 63 = 2³ × 3² × 7.',
              '840 = 2 × 420 = 2² × 210 = 2³ × 105 = 2³ × 3 × 5 × 7.'
            ],
            finalAnswer: '504 = 2³ × 3² × 7 et 840 = 2³ × 3 × 5 × 7.',
            pointsAllocated: 2
          },
          {
            questionText: '2. En déduire la forme irréductible de la fraction 504 / 840 et préciser si ce nombre est décimal.',
            hints: ['Simplifier les facteurs premiers communs 2³, 3 et 7.'],
            solutionSteps: [
              '504 / 840 = (2³ × 3² × 7) / (2³ × 3 × 5 × 7) = 3 / 5.',
              '3 / 5 = 6 / 10 = 0,6.',
              'Son dénominateur irréductible est 5 (puissance de 5) : 3/5 est un nombre décimal (3/5 ∈ 𝔻).'
            ],
            finalAnswer: '504 / 840 = 3/5 = 0,6 ∈ 𝔻 (nombre décimal).',
            pointsAllocated: 2
          },
          {
            questionText: '3. Écrire le nombre √504 sous la forme a√b avec a et b entiers, b le plus petit possible.',
            hints: ['Sortir les carrés parfaits de la racine carrée.'],
            solutionSteps: [
              '√504 = √(2³ × 3² × 7) = √(2² × 2 × 3² × 7).',
              '= 2 × 3 × √(2 × 7) = 6√14.'
            ],
            finalAnswer: '√504 = 6√14 avec b = 14 sans facteur carré.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2m-1',
        question: 'Le nombre 1/3 appartient-il à l\'ensemble des décimaux 𝔻 ?',
        options: [
          'Oui, car 1/3 = 0,33',
          'Non, car son écriture décimale est infinie périodique (1/3 ∈ ℚ mais 1/3 ∉ 𝔻)',
          'Non, car 1/3 est un irrationnel',
          'Oui, car 1 et 3 sont des entiers'
        ],
        correctIndex: 1,
        explanation: '1/3 n\'admet pas d\'écriture décimale finie, 3 n\'étant pas décomposable en produit de puissances de 2 et 5.'
      },
      {
        id: 'q-2m-1b',
        question: 'Quelle est la décomposition en facteurs premiers de 180 ?',
        options: ['2² × 3² × 5', '2³ × 3 × 5', '2 × 3³ × 5', '10 × 18'],
        correctIndex: 0,
        explanation: '180 = 4 × 45 = 2² × 9 × 5 = 2² × 3² × 5.'
      },
      {
        id: 'q-2m-1c',
        question: 'Si le produit de deux entiers relatifs est impair, que peut-on en déduire sur ces entiers ?',
        options: [
          'Les deux entiers sont nécessairement impairs',
          'Au moins l\'un des deux est pair',
          'Leur somme est toujours paire',
          'L\'un est pair et l\'autre est impair'
        ],
        correctIndex: 0,
        explanation: 'Si l\'un des deux entiers était pair, le produit comporterait un facteur 2 et serait donc pair.'
      },
      {
        id: 'q-2m-1d',
        question: 'Quel est le plus petit ensemble de nombres auquel appartient le nombre -15/3 ?',
        options: ['ℤ (entiers relatifs)', 'ℕ (entiers naturels)', 'ℚ (rationnels)', '𝔻 (décimaux)'],
        correctIndex: 0,
        explanation: '-15 / 3 = -5, qui est un entier négatif, donc son ensemble minimal est ℤ.'
      }
    ]
  },

  {
    id: 'math-2nde-fonctions',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Généralités sur les Fonctions & Fonctions de Référence',
    officialCode: 'MATH-2-02',
    description: 'Notion de fonction, ensemble de définition, tableau de signes, variations et étude des fonctions carré x ↦ x² et inverse x ↦ 1/x.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Image et antécédents : f(x) = y (y est l\'unique image de x ; x est un antécédent de y).',
      'Fonction croissante sur I : Si a < b, alors f(a) ≤ f(b) (l\'ordre est conservé).',
      'Fonction carrée x ↦ x² : strictement décroissante sur ]-∞ ; 0] et strictement croissante sur [0 ; +∞[. Parabole symétrique par rapport à l\'axe (Oy).',
      'Fonction inverse x ↦ 1/x : définie sur ℝ* = ]-∞ ; 0[ ∪ ]0 ; +∞[, strictement décroissante sur chacun de ces deux intervalles.'
    ],
    keyFormulas: [
      {
        label: 'Taux de variation entre a et b',
        formula: '\\tau = \\frac{f(b) - f(a)}{b - a}',
        explanation: 'Si τ > 0 sur I, la fonction est croissante sur I.'
      },
      {
        label: 'Symétries des fonctions paires et impaires',
        formula: 'f(-x) = f(x) \\, (\\text{Paire}) \\quad ; \\quad f(-x) = -f(x) \\, (\\text{Impaire})',
        explanation: 'Parité = symétrie axiale par rapport à (Oy) ; Imparité = symétrie centrale par rapport à l\'origine O.'
      }
    ],
    courseSections: [
      {
        title: '1. Variations d\'une fonction',
        content: [
          'Dire que f est strictement croissante sur un intervalle I signifie que pour tous réels a et b de I, si a < b alors f(a) < f(b).',
          'Dire que f est strictement décroissante sur I signifie que si a < b alors f(a) > f(b) (l\'ordre est inversé).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-math-2nde-fnc',
        title: 'Problème Résolu : Étude algébrique et graphique de la fonction carré',
        context: 'Soit la fonction carrée f(x) = x² définie sur ℝ. On souhaite résoudre des inéquations et encadrer des images.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Déterminer l\'ensemble des solutions de l\'inéquation x² ≤ 9.',
            hints: ['Passer 9 à gauche et factoriser comme une différence de carrés : x² - 3² ≤ 0.'],
            solutionSteps: [
              'x² ≤ 9 ⟺ x² - 9 ≤ 0 ⟺ (x - 3)(x + 3) ≤ 0.',
              'Les racines sont -3 et 3. Un tableau de signes montre que le produit est négatif ou nul entre les racines.',
              'L\'ensemble des solutions est l\'intervalle fermé S = [-3 ; 3].'
            ],
            finalAnswer: 'S = [-3 ; 3].',
            pointsAllocated: 2
          },
          {
            questionText: '2. Si x ∈ [-4 ; 3], déterminer le meilleur encadrement possible de f(x) = x².',
            hints: ['Attention : l\'intervalle contient 0 où le carré atteint son minimum absolu.'],
            solutionSteps: [
              'Pour tout x ∈ ℝ, x² ≥ 0, et comme 0 ∈ [-4 ; 3], la valeur minimale atteinte est 0 (en x = 0).',
              'Sur [-4 ; 0], la fonction carrée décroît de (-4)² = 16 à 0² = 0.',
              'Sur [0 ; 3], elle croît de 0 à 3² = 9.',
              'La valeur maximale est donc max(16, 9) = 16.'
            ],
            finalAnswer: '0 ≤ x² ≤ 16, soit f(x) ∈ [0 ; 16].',
            pointsAllocated: 2
          },
          {
            questionText: '3. Résoudre dans ℝ l\'inéquation x² > 16.',
            hints: ['x² > 16 ⟺ |x| > 4.'],
            solutionSteps: [
              'x² > 16 ⟺ x² - 16 > 0 ⟺ (x - 4)(x + 4) > 0.',
              'Le produit de facteurs est strictement positif à l\'extérieur des racines -4 et 4.'
            ],
            finalAnswer: 'S = ]-∞ ; -4[ ∪ ]4 ; +∞[.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2m-2',
        question: 'Si x ∈ [-4 ; -2], quel est l\'encadrement de x² ?',
        options: ['[4 ; 16]', '[16 ; 4]', '[-16 ; -4]', '[0 ; 16]'],
        correctIndex: 0,
        explanation: 'Sur ]-∞ ; 0], la fonction carrée est strictement décroissante. Donc -4 ≤ x ≤ -2 implique (-2)² ≤ x² ≤ (-4)², soit 4 ≤ x² ≤ 16.'
      },
      {
        id: 'q-2m-2b',
        question: 'Quel est le domaine de définition de la fonction inverse g(x) = 1 / (x - 2) ?',
        options: ['ℝ \\ {2}', 'ℝ \\ {0}', '[2 ; +∞[', 'ℝ'],
        correctIndex: 0,
        explanation: 'Le dénominateur s\'annule en x = 2, valeur interdite.'
      },
      {
        id: 'q-2m-2c',
        question: 'La courbe représentative d\'une fonction impaire admet comme élément de symétrie :',
        options: [
          'Le centre d\'origine O du repère',
          'L\'axe des ordonnées (Oy)',
          'L\'axe des abscisses (Ox)',
          'La droite d\'équation y = x'
        ],
        correctIndex: 0,
        explanation: 'Pour une fonction impaire f(-x) = -f(x), la courbe est symétrique par rapport à l\'origine O.'
      },
      {
        id: 'q-2m-2d',
        question: 'Si une fonction f est strictement décroissante sur [1 ; 5] avec f(1) = 7 et f(5) = -2, que peut-on dire de f(3) ?',
        options: ['-2 < f(3) < 7', 'f(3) > 7', 'f(3) < -2', 'f(3) = 2,5'],
        correctIndex: 0,
        explanation: 'Comme 1 < 3 < 5 et que f est strictement décroissante, l\'ordre est inversé : f(5) < f(3) < f(1).'
      }
    ]
  },

  {
    id: 'math-2nde-vecteurs',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Géométrie Vectorielle & Repérage dans le Plan',
    officialCode: 'MATH-2-03',
    description: 'Vecteurs du plan, translation, coordonnées cartésiennes, colinéarité, milieu d’un segment et calcul de distance euclidienne.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Un vecteur est caractérisé par une direction, un sens et une norme (longueur).',
      'Relation de Chasles : Pour tous points A, B, C du plan, vec(AB) + vec(BC) = vec(AC).',
      'Critère de colinéarité : Deux vecteurs u(x; y) et v(x\'; y\') sont colinéaires si et seulement si leur déterminant est nul : x·y\' - x\'·y = 0.'
    ],
    keyFormulas: [
      {
        label: 'Condition de colinéarité (Déterminant)',
        formula: '\\det(\\vec{u}, \\vec{v}) = x \\cdot y\' - x\' \\cdot y = 0',
        explanation: 'Prouve que deux droites sont parallèles ou que trois points sont alignés.'
      },
      {
        label: 'Distance entre deux points A et B',
        formula: 'AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}',
        explanation: 'Dans un repère orthonormé (O, i, j).'
      }
    ],
    courseSections: [
      {
        title: '1. Coordonnées et alignement',
        content: [
          'Soient A(x_A ; y_A) et B(x_B ; y_B). Le vecteur AB a pour coordonnées (x_B - x_A ; y_B - y_A).',
          'Le milieu I du segment [AB] a pour coordonnées : ((x_A + x_B) / 2 ; (y_A + y_B) / 2).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-vec',
        title: 'Problème Résolu : Configuration géométrique et parallélogramme',
        context: 'Dans un repère orthonormé (O, i, j), on donne les points A(1 ; 2), B(4 ; 8), C(7 ; 5) et D(x_D ; y_D).',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Calculer les coordonnées du vecteur vec(AB) et sa norme euclidienne AB.',
            hints: ['vec(AB) = (x_B - x_A ; y_B - y_A) et AB = √(x² + y²).'],
            solutionSteps: [
              'vec(AB) = (4 - 1 ; 8 - 2) = (3 ; 6).',
              'AB = √(3² + 6²) = √(9 + 36) = √45 = √(9 × 5) = 3√5.'
            ],
            finalAnswer: 'vec(AB) = (3 ; 6) et AB = 3√5 ≈ 6,71.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Déterminer les coordonnées du point D tel que ABCD soit un parallélogramme.',
            hints: ['ABCD est un parallélogramme si et seulement si vec(AB) = vec(DC).'],
            solutionSteps: [
              'vec(DC) = (x_C - x_D ; y_C - y_D) = (7 - x_D ; 5 - y_D).',
              'vec(AB) = vec(DC) ⟺ 7 - x_D = 3 et 5 - y_D = 6.',
              'x_D = 7 - 3 = 4 et y_D = 5 - 6 = -1.'
            ],
            finalAnswer: 'D(4 ; -1).',
            pointsAllocated: 2
          },
          {
            questionText: '3. Calculer les coordonnées du centre I de ce parallélogramme.',
            hints: ['I est le milieu de la diagonale [AC] (ou de [BD]).'],
            solutionSteps: [
              'x_I = (x_A + x_C) / 2 = (1 + 7) / 2 = 8 / 2 = 4.',
              'y_I = (y_A + y_C) / 2 = (2 + 5) / 2 = 7 / 2 = 3,5.'
            ],
            finalAnswer: 'I(4 ; 3,5).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2m-3',
        question: 'Les vecteurs u(2 ; -5) et v(-6 ; 15) sont-ils colinéaires ?',
        options: [
          'Oui, car v = -3 × u (ou 2×15 - (-5)×(-6) = 30 - 30 = 0)',
          'Non, car les signes sont opposés',
          'Non, car le déterminant vaut 60',
          'Impossible à déterminer sans repère'
        ],
        correctIndex: 0,
        explanation: 'Le produit en croix donne 2 × 15 - (-5) × (-6) = 30 - 30 = 0 : les vecteurs sont donc colinéaires et de sens opposés.'
      },
      {
        id: 'q-2m-3b',
        question: 'Quelle est la relation de Chasles pour trois points quelconques M, N, P ?',
        options: [
          'vec(MN) + vec(NP) = vec(MP)',
          'vec(MN) + vec(MP) = vec(NP)',
          'vec(MN) - vec(NP) = vec(MP)',
          'vec(MN) × vec(NP) = vec(MP)'
        ],
        correctIndex: 0,
        explanation: 'La relation de Chasles stipule que le point intermédiaire N se neutralise dans la somme vectorielle.'
      },
      {
        id: 'q-2m-3c',
        question: 'Soit A(-2 ; 3) et B(4 ; -1). Quelles sont les coordonnées du milieu K de [AB] ?',
        options: ['K(1 ; 1)', 'K(2 ; 2)', 'K(3 ; -2)', 'K(6 ; -4)'],
        correctIndex: 0,
        explanation: 'x_K = (-2 + 4)/2 = 1 et y_K = (3 + (-1))/2 = 1.'
      },
      {
        id: 'q-2m-3d',
        question: 'Si vec(u) = (3 ; -4), quelle est la norme ||vec(u)|| ?',
        options: ['5', '7', '1', '25'],
        correctIndex: 0,
        explanation: '||vec(u)|| = √(3² + (-4)²) = √(9 + 16) = √25 = 5.'
      }
    ]
  },

  // =========================================================================
  // SECONDE (2nde) - PHYSIQUE-CHIMIE
  // =========================================================================
  {
    id: 'pc-2nde-atome-mole',
    subjectId: 'physique-chimie',
    gradeLevel: '2nde',
    title: 'De l’Atome aux Molécules & la Quantité de Matière',
    officialCode: 'PC-2-01',
    description: 'Structure de l\'atome (protons, neutrons, électrons), configuration électronique en couches 1s 2s 2p, la mole et la constante d\'Avogadro.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Un atome est constitué d\'un noyau central (protons + neutrons) autour duquel gravitent des électrons. L\'atome est électriquement neutre.',
      'La mole est l\'unité de quantité de matière contenant N_A = 6,02 × 10²³ entités.',
      'Relation fondamentale reliant masse et mole : n = m / M.'
    ],
    keyFormulas: [
      {
        label: 'Quantité de matière et masse molaire',
        formula: 'n = \\frac{m}{M} \\iff m = n \\cdot M',
        explanation: 'n en mol, masse m en g, masse molaire M en g/mol.'
      },
      {
        label: 'Nombre d\'entités N et constante d\'Avogadro',
        formula: 'N = n \\cdot N_A \\quad (N_A \\approx 6{,}022 \\times 10^{23} \\text{ mol}^{-1})',
        explanation: 'Permet de passer de l\'échelle macroscopique à l\'échelle microscopique.'
      }
    ],
    courseSections: [
      {
        title: '1. Le cortège électronique et la stabilité',
        content: [
          'Les électrons occupent des sous-couches 1s, 2s, 2p, 3s, 3p...',
          'Règle de l\'octet et du duet : les atomes cherchent à acquérir la configuration stable du gaz noble le plus proche (2 ou 8 électrons de valence) en formant des liaisons covalentes ou des ions.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-pc-2nde-mole',
        title: 'Problème Résolu : Analyse quantitative d\'un principe actif (Paracétamol)',
        context: 'Un comprimé pharmaceutique contient m = 500 mg de paracétamol de formule brute C8H9NO2. Données molaires : M(C) = 12,0 g/mol, M(H) = 1,0 g/mol, M(N) = 14,0 g/mol, M(O) = 16,0 g/mol. Constante d\'Avogadro : N_A = 6,022 × 10²³ mol⁻¹.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Calculer la masse molaire moléculaire M du paracétamol C8H9NO2.',
            hints: ['Sommer les masses molaires atomiques de chaque élément : 8 C, 9 H, 1 N, 2 O.'],
            solutionSteps: [
              'M(C8H9NO2) = 8 × M(C) + 9 × M(H) + 1 × M(N) + 2 × M(O)',
              '= 8 × 12,0 + 9 × 1,0 + 14,0 + 2 × 16,0',
              '= 96,0 + 9,0 + 14,0 + 32,0 = 151,0 g/mol.'
            ],
            finalAnswer: 'M = 151,0 g·mol⁻¹.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Déterminer la quantité de matière n de paracétamol contenue dans ce comprimé de 500 mg.',
            hints: ['Convertir préalablement la masse en grammes (500 mg = 0,500 g), puis n = m / M.'],
            solutionSteps: [
              'm = 500 mg = 500 × 10⁻³ g = 0,500 g.',
              'n = m / M = 0,500 / 151,0 ≈ 3,311 × 10⁻³ mol = 3,31 mmol.'
            ],
            finalAnswer: 'n ≈ 3,31 × 10⁻³ mol (soit 3,31 mmol).',
            pointsAllocated: 2
          },
          {
            questionText: '3. En déduire le nombre total N de molécules de paracétamol ingérées par le patient.',
            hints: ['Utiliser la constante d\'Avogadro : N = n × N_A.'],
            solutionSteps: [
              'N = n × N_A = 3,311 × 10⁻³ mol × 6,022 × 10²³ mol⁻¹.',
              'N ≈ 1,99 × 10²¹ molécules.'
            ],
            finalAnswer: 'N ≈ 1,99 × 10²¹ molécules de paracétamol.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2pc-1',
        question: 'Quelle est la masse d\'une demi-mole (0,50 mol) d\'eau pure H2O ? (M(H)=1, M(O)=16 g/mol)',
        options: ['9,0 g', '18 g', '36 g', '4,5 g'],
        correctIndex: 0,
        explanation: 'M(H2O) = 2×1 + 16 = 18 g/mol. m = n × M = 0,50 × 18 = 9,0 g.'
      },
      {
        id: 'q-2pc-1b',
        question: 'Combien d\'électrons au maximum peut contenir la sous-couche électronique 2p ?',
        options: ['6 électrons', '2 électrons', '8 électrons', '10 électrons'],
        correctIndex: 0,
        explanation: 'Une sous-couche p comporte 3 cases quantiques pouvant chacune accueillir 2 électrons de spin opposé, soit 6 électrons.'
      },
      {
        id: 'q-2pc-1c',
        question: 'Que représente le nombre de masse A dans la notation d\'un noyau atomique ?',
        options: [
          'Le nombre total de nucléons (protons + neutrons)',
          'Le nombre de protons uniquement',
          'Le nombre d\'électrons',
          'La masse en kilogrammes'
        ],
        correctIndex: 0,
        explanation: 'Dans la notation nucléaire, Z est le numéro atomique (protons) et A est le nombre de nucléons.'
      },
      {
        id: 'q-2pc-1d',
        question: 'Quelle est la configuration électronique fondamentale de l\'atome d\'oxygène (Z = 8) ?',
        options: ['1s² 2s² 2p⁴', '1s² 2s⁴ 2p²', '1s² 2s² 2p⁶', '1s⁴ 2s⁴'],
        correctIndex: 0,
        explanation: 'L\'oxygène possède 8 électrons répartis selon : 1s² (2 électrons) puis 2s² 2p⁴ (6 électrons de valence).'
      }
    ]
  },

  {
    id: 'pc-2nde-lumiere-snell',
    subjectId: 'physique-chimie',
    gradeLevel: '2nde',
    title: 'Propagation de la Lumière & Lois de Snell-Descartes',
    officialCode: 'PC-2-02',
    description: 'Réfraction et réflexion de la lumière, indice de réfraction d\'un milieu transparent, angle limite et réflexion totale.',
    estimatedMinutes: 35,
    summaryHighlights: [
      'La lumière se propage en ligne droite dans un milieu transparent, homogène et isotrope à la vitesse c = 3,00 × 10⁸ m/s dans le vide.',
      'Indice de réfraction : n = c / v (sans unité, n ≥ 1).',
      'Deuxième loi de Snell-Descartes pour la réfraction : n₁ · sin(i₁) = n₂ · sin(i₂).'
    ],
    keyFormulas: [
      {
        label: 'Loi de Snell-Descartes pour la réfraction',
        formula: 'n_1 \\sin(i_1) = n_2 \\sin(i_2)',
        explanation: 'i₁ = angle d\'incidence, i₂ = angle de réfraction (mesurés par rapport à la normale).'
      },
      {
        label: 'Angle limite de réflexion totale (si n₁ > n₂)',
        formula: '\\sin(i_{lim}) = \\frac{n_2}{n_1}',
        explanation: 'Au-delà de cet angle, aucun rayon n\'est réfracté : principe de la fibre optique.'
      }
    ],
    courseSections: [
      {
        title: '1. Réfraction et déviation',
        content: [
          'La réfraction est le changement de direction subi par un faisceau lumineux lorsqu\'il traverse le dioptre séparant deux milieux d\'indices optiques distincts.',
          'Si la lumière passe d\'un milieu moins réfringent vers un milieu plus réfringent (n₁ < n₂), le rayon réfracté se rapproche de la normale (i₂ < i₁).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-pc-2nde-snell',
        title: 'Problème Résolu : Réfraction et guidage par réflexion totale dans un barreau de verre',
        context: 'Un rayon monochromatique se propage dans un barreau de verre d\'indice n1 = 1,50 entouré d\'air (n2 = 1,00). On étudie la réfraction à l\'entrée et la condition de réflexion totale sur les parois latérales.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Un rayon pénètre depuis l\'air dans le verre sous un angle d\'incidence i1 = 30,0°. Calculer l\'angle de réfraction i2 dans le verre.',
            hints: ['Appliquer la loi de Snell-Descartes : n_air × sin(i1) = n_verre × sin(i2).'],
            solutionSteps: [
              '1,00 × sin(30,0°) = 1,50 × sin(i2).',
              'sin(i2) = sin(30,0°) / 1,50 = 0,500 / 1,50 ≈ 0,3333.',
              'i2 = arcsin(0,3333) ≈ 19,5°.'
            ],
            finalAnswer: 'i2 ≈ 19,5° (le rayon se rapproche de la normale car n_verre > n_air).',
            pointsAllocated: 2
          },
          {
            questionText: '2. Déterminer l\'angle limite de réfraction i_lim lorsque la lumière tente de passer du verre (n1 = 1,50) vers l\'air (n2 = 1,00).',
            hints: ['À l\'angle limite, l\'angle réfracté dans l\'air vaut i2 = 90° (sin 90° = 1).'],
            solutionSteps: [
              'n1 × sin(i_lim) = n2 × sin(90°) = 1,00 × 1.',
              'sin(i_lim) = 1,00 / 1,50 = 2/3 ≈ 0,6667.',
              'i_lim = arcsin(0,6667) ≈ 41,8°.'
            ],
            finalAnswer: 'i_lim ≈ 41,8°.',
            pointsAllocated: 2
          },
          {
            questionText: '3. Si le rayon heurte la paroi interne du verre sous un angle θ = 60,0°, que devient la lumière ? En déduire une application technologique.',
            hints: ['Comparer l\'angle θ à l\'angle limite i_lim calculé précédemment.'],
            solutionSteps: [
              'L\'angle d\'incidence θ = 60,0° est strictement supérieur à l\'angle limite i_lim (41,8°).',
              'La réfraction est impossible : 100 % de l\'énergie lumineuse est réfléchie à l\'intérieur du verre.',
              'C\'est le phénomène de réflexion totale, principe fondamental du confinement et de la transmission de l\'information par fibre optique.'
            ],
            finalAnswer: 'Réflexion totale sans perte de signal (principe de la fibre optique à saut d\'indice).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2pc-2',
        question: 'Dans quelle condition le phénomène de réflexion totale peut-il se produire ?',
        options: [
          'Uniquement si le rayon passe d\'un milieu plus réfringent vers un milieu moins réfringent (n₁ > n₂) avec un angle i₁ > i_lim',
          'Uniquement si n₁ < n₂',
          'À n\'importe quel angle dans l\'air',
          'Seulement à incidence normale i₁ = 0°'
        ],
        correctIndex: 0,
        explanation: 'La réflexion totale requiert que la lumière passe d\'un milieu plus lent vers un milieu plus rapide (n₁ > n₂) avec un angle supérieur à l\'angle critique.'
      },
      {
        id: 'q-2pc-2b',
        question: 'Quelle est la vitesse de la lumière dans le vide ?',
        options: ['3,00 × 10⁸ m/s', '3,00 × 10⁵ m/s', '340 m/s', '1,50 × 10⁸ m/s'],
        correctIndex: 0,
        explanation: 'La célérité de la lumière dans le vide c est d\'environ 300 000 km/s soit 3,00 × 10⁸ m/s.'
      },
      {
        id: 'q-2pc-2c',
        question: 'Si l\'indice d\'un plexiglas vaut n = 1,50, quelle est la vitesse v de la lumière dans ce matériau ?',
        options: ['2,00 × 10⁸ m/s', '4,50 × 10⁸ m/s', '3,00 × 10⁸ m/s', '1,00 × 10⁸ m/s'],
        correctIndex: 0,
        explanation: 'Par définition n = c / v ⟺ v = c / n = 3,00 × 10⁸ / 1,50 = 2,00 × 10⁸ m/s.'
      },
      {
        id: 'q-2pc-2d',
        question: 'Selon la première loi de Snell-Descartes pour la réflexion, que vaut l\'angle de réflexion r par rapport à l\'angle d\'incidence i ?',
        options: ['r = i', 'r = 2i', 'r = 90° - i', 'r = i / 2'],
        correctIndex: 0,
        explanation: 'Le rayon réfléchi appartient au plan d\'incidence et l\'angle de réflexion est rigoureusement égal à l\'angle d\'incidence : r = i.'
      }
    ]
  },

  // =========================================================================
  // SECONDE (2nde) - SVT
  // =========================================================================
  {
    id: 'svt-2nde-cellule-metabolisme',
    subjectId: 'svt',
    gradeLevel: '2nde',
    title: 'L’Organisation Fonctionnelle du Vivant & Métabolismes Cellulaires',
    officialCode: 'SVT-2-01',
    description: 'La cellule comme unité structurale et fonctionnelle de tous les êtres vivants, métabolisme autotrophe (photosynthèse) et hétérotrophe (respiration).',
    estimatedMinutes: 35,
    summaryHighlights: [
      'Tous les êtres vivants sont constitués d\'une ou plusieurs cellules délimitées par une membrane plasmique.',
      'Les cellules eucaryotes possèdent des organites compartimentés (noyau, mitochondries, chloroplastes chez les végétaux).',
      'Autotrophie : Les cellules chlorophylliennes produisent leur propre matière organique à partir d\'énergie lumineuse et de minéraux (photosynthèse).',
      'Hétérotrophie : Les cellules tirent leur énergie de la dégradation de molécules organiques préexistantes (respiration cellulaire mitochondriale).'
    ],
    keyFormulas: [
      {
        label: 'Équation bilan de la photosynthèse',
        formula: '6 \\, \\text{CO}_2 + 6 \\, \\text{H}_2\\text{O} + \\text{Lumière} \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6 \\, \\text{O}_2',
        explanation: 'Conversion de l\'énergie lumineuse en énergie chimique stockée dans le glucose.'
      },
      {
        label: 'Équation bilan de la respiration cellulaire',
        formula: '\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6 \\, \\text{O}_2 \\longrightarrow 6 \\, \\text{CO}_2 + 6 \\, \\text{H}_2\\text{O} + \\text{Énergie (ATP)}',
        explanation: 'Dégradation complète du glucose dans les mitochondries.'
      }
    ],
    courseSections: [
      {
        title: '1. Unité et diversité cellulaire',
        content: [
          'La molécule universelle porteuse de l\'information génétique est l\'ADN, présent chez tous les organismes vivants (preuve de l\'origine commune de la vie sur Terre).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-svt-2nde-meta',
        title: 'Problème Résolu : Étude ExAO des métabolismes cellulaires (Levures vs Euglènes)',
        context: 'On place une suspension de levures hétérotrophes dans une enceinte hermétique avec du glucose en alternant obscurité et lumière, puis on compare avec des cellules d\'euglènes vertes.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Chez les levures, la concentration en O2 dissous chute de façon continue et celle de CO2 augmente, que l\'enceinte soit éclairée ou non. Interpréter ce résultat.',
            hints: ['La levure possède-t-elle des pigments photosynthétiques ?'],
            solutionSteps: [
              'Les levures sont des cellules hétérotrophes dépourvues de chloroplastes et de chlorophylle.',
              'Elles ne peuvent pas réaliser la photosynthèse et leur métabolisme ne dépend pas de la lumière.',
              'Elles réalisent exclusivement la respiration cellulaire aérobie dans leurs mitochondries, consommant continuellement de l\'O2 et rejetant du CO2.'
            ],
            finalAnswer: 'Respiration cellulaire permanente et indépendante de l\'éclairement.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Chez les euglènes vertes à la lumière, on observe une augmentation de l\'O2 et une diminution du CO2. Identifier la réaction prédominante et écrire son équation bilan.',
            hints: ['Quel métabolisme produit du dioxygène en présence de lumière ?'],
            solutionSteps: [
              'À la lumière, la photosynthèse réalisée dans les chloroplastes est plus intense que la respiration cellulaire mitochondriale.',
              'Le flux net se traduit par une consommation de CO2 et un dégagement d\'O2.',
              'Équation bilan : 6 CO2 + 6 H2O + photons -> C6H12O6 + 6 O2.'
            ],
            finalAnswer: 'Photosynthèse prédominante : 6 CO2 + 6 H2O -> C6H12O6 + 6 O2.',
            pointsAllocated: 2
          },
          {
            questionText: '3. Que se passe-t-il immédiatement pour les euglènes dès qu\'on éteint la lumière ? Justifier.',
            hints: ['Sans photons, la photosynthèse s\'arrête net, mais quel organite continue de fonctionner ?'],
            solutionSteps: [
              'À l\'obscurité, la phase photochimique de la photosynthèse s\'arrête instantanément par absence de photons.',
              'Les mitochondries continuent en revanche d\'assurer la respiration cellulaire pour fournir l\'ATP nécessaire à la survie de la cellule.',
              'Le profil s\'inverse : la concentration d\'O2 diminue et celle de CO2 augmente.'
            ],
            finalAnswer: 'Arrêt de la photosynthèse et révélation de la respiration cellulaire (consommation d\'O2, rejet de CO2).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2svt-1',
        question: 'Quel organite cellulaire est le siège exclusif de la photosynthèse chez les végétaux ?',
        options: ['Le chloroplaste', 'La mitochondrie', 'L\'appareil de Golgi', 'Le ribosome'],
        correctIndex: 0,
        explanation: 'Le chloroplaste renferme la chlorophylle capable de capter les photons lumineux.'
      },
      {
        id: 'q-2svt-1b',
        question: 'Quel organite est le siège de la respiration cellulaire aérobie chez tous les eucaryotes ?',
        options: ['La mitochondrie', 'Le lysosome', 'Le réticulum endoplasmique', 'La vacuole'],
        correctIndex: 0,
        explanation: 'Les crêtes mitochondriales hébergent la chaîne respiratoire et l\'ATP synthase.'
      },
      {
        id: 'q-2svt-1c',
        question: 'Une cellule autotrophe pour le carbone est une cellule qui :',
        options: [
          'Synthétise sa matière organique à partir de matière minérale (CO2, H2O) et de lumière',
          'Doit obligatoirement consommer d\'autres êtres vivants',
          'Ne respire jamais',
          'Ne possède pas d\'ADN'
        ],
        correctIndex: 0,
        explanation: 'L\'autotrophie désigne la capacité de fabriquer ses propres constituants carbonés à partir de carbone minéral.'
      },
      {
        id: 'q-2svt-1d',
        question: 'Quelle molécule universelle porte l\'information génétique chez tous les êtres vivants ?',
        options: ['L\'ADN', 'L\'ATP', 'Le glycogène', 'L\'hémoglobine'],
        correctIndex: 0,
        explanation: 'L\'acide désoxyribonucléique (ADN) est le support universel du code génétique.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE (1ère Spécialité) - MATHÉMATIQUES
  // =========================================================================
  {
    id: 'math-1ere-second-degre',
    subjectId: 'maths',
    gradeLevel: '1ere',
    title: 'Polynômes du Second Degré & Équations Quadratiques',
    officialCode: 'MATH-1-01',
    description: 'Forme canonique ax² + bx + c = a(x - α)² + β, discriminant Δ = b² - 4ac, factorisation, racines réelles et signe d’un trinôme.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Forme canonique : P(x) = a(x - α)² + β avec α = -b/(2a) et β = P(α) = -Δ/(4a). Le sommet de la parabole est S(α ; β).',
      'Si Δ > 0 : deux racines réelles distinctes x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a).',
      'Si Δ = 0 : une racine double x₀ = -b/(2a).',
      'Si Δ < 0 : aucune racine réelle dans ℝ.',
      'Règle du signe : Le trinôme ax² + bx + c est toujours du signe de a à l\'extérieur des racines (et du signe de -a entre les racines si Δ > 0).'
    ],
    keyFormulas: [
      {
        label: 'Discriminant d\'un trinôme',
        formula: '\\Delta = b^2 - 4ac',
        explanation: 'Conditionne le nombre d\'intersections de la parabole avec l\'axe (Ox).'
      },
      {
        label: 'Formule des racines réelles (si Δ > 0)',
        formula: 'x_{1, 2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}',
        explanation: 'Factorisation : P(x) = a(x - x₁)(x - x₂).'
      }
    ],
    courseSections: [
      {
        title: '1. Forme canonique et extremum',
        content: [
          'Le trinôme ax² + bx + c admet un extremum en x = α = -b / (2a).',
          'Si a > 0, les branches de la parabole sont tournées vers le haut et β est un minimum absolu.',
          'Si a < 0, les branches sont tournées vers le bas et β est un maximum absolu.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-quad',
        title: 'Problème Résolu : Étude complète d\'un trinôme du second degré',
        context: 'Soit le polynôme du second degré P(x) = 2x² - 5x + 2 défini sur ℝ.',
        difficulty: 'Type Bac',
        points: 6,
        themeTag: 'gaming',
        themeLabel: '🎮 Gaming & Trajectoires 2D',
        questions: [
          {
            questionText: '1. Calculer le discriminant Δ de P(x), donner ses racines réelles et sa forme factorisée.',
            hints: ['a = 2, b = -5, c = 2. Calculer Δ = b² - 4ac.'],
            solutionSteps: [
              'Δ = (-5)² - 4 × 2 × 2 = 25 - 16 = 9 = 3² > 0.',
              'Comme Δ > 0, P(x) admet deux racines réelles distinctes :',
              'x₁ = (-(-5) - 3) / (2 × 2) = (5 - 3) / 4 = 2/4 = 1/2.',
              'x₂ = (-(-5) + 3) / (2 × 2) = (5 + 3) / 4 = 8/4 = 2.',
              'Forme factorisée : P(x) = a(x - x₁)(x - x₂) = 2(x - 1/2)(x - 2) = (2x - 1)(x - 2).'
            ],
            finalAnswer: 'Δ = 9, racines x₁ = 1/2 et x₂ = 2 ; P(x) = 2(x - 1/2)(x - 2).',
            pointsAllocated: 2
          },
          {
            questionText: '2. Dresser le tableau de signes de P(x) et en déduire l\'ensemble des solutions de l\'inéquation 2x² - 5x + 2 ≥ 0.',
            hints: ['Un trinôme est du signe de a à l\'extérieur des racines.'],
            solutionSteps: [
              'Le coefficient dominant est a = 2 > 0.',
              'Le trinôme est donc strictement positif pour x ∈ ]-∞ ; 1/2[ et x ∈ ]2 ; +∞[, nul en 1/2 et 2, et strictement négatif sur ]1/2 ; 2[.',
              'Pour l\'inéquation 2x² - 5x + 2 ≥ 0, on retient les zones positives ou nulles.'
            ],
            finalAnswer: 'S = ]-∞ ; 1/2] ∪ [2 ; +∞[.',
            pointsAllocated: 2
          },
          {
            questionText: '3. Déterminer les coordonnées du sommet S de la parabole représentative de P et préciser la valeur minimale atteinte par P(x).',
            hints: ['L\'abscisse du sommet vaut α = -b / (2a) et son ordonnée β = P(α).'],
            solutionSteps: [
              'α = -(-5) / (2 × 2) = 5/4 = 1,25.',
              'β = P(5/4) = 2(5/4)² - 5(5/4) + 2 = 2(25/16) - 25/4 + 2 = 25/8 - 50/8 + 16/8 = -9/8 = -1,125.',
              'Comme a > 0, la parabole est orientée vers le haut : β = -9/8 est le minimum absolu de P.'
            ],
            finalAnswer: 'Sommet S(5/4 ; -9/8) ; minimum absolu égal à -9/8 (soit -1,125).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-1m-1',
        question: 'Quel est le signe du trinôme f(x) = -3x² + 2x - 5 sur ℝ ?',
        options: [
          'Toujours strictement négatif sur ℝ (car a = -3 < 0 et Δ < 0)',
          'Toujours strictement positif',
          'Positif entre ses racines',
          'Il s\'annule deux fois'
        ],
        correctIndex: 0,
        explanation: 'Δ = 2² - 4(-3)(-5) = 4 - 60 = -56 < 0. Comme a = -3 < 0, la parabole est entièrement sous l\'axe (Ox), donc f(x) < 0 pour tout x ∈ ℝ.'
      },
      {
        id: 'q-1m-1b',
        question: 'Si un trinôme ax² + bx + c admet deux racines réelles x₁ et x₂, que vaut toujours leur produit x₁ × x₂ ?',
        options: ['c / a', '-b / a', 'b² - 4ac', '-c / a'],
        correctIndex: 0,
        explanation: 'D\'après les relations de Viète, la somme des racines vaut S = -b/a et leur produit vaut P = c/a.'
      },
      {
        id: 'q-1m-1c',
        question: 'Pour quelle valeur de k l\'équation x² - 6x + k = 0 admet-elle une unique racine réelle double ?',
        options: ['k = 9', 'k = -9', 'k = 36', 'k = 0'],
        correctIndex: 0,
        explanation: 'Une racine double impose Δ = 0 : (-6)² - 4(1)(k) = 0 ⟺ 36 - 4k = 0 ⟺ k = 9.'
      },
      {
        id: 'q-1m-1d',
        question: 'Quelle est la forme canonique de f(x) = x² - 4x + 7 ?',
        options: ['(x - 2)² + 3', '(x - 4)² + 7', '(x + 2)² - 3', '(x - 2)² + 7'],
        correctIndex: 0,
        explanation: 'x² - 4x + 7 = (x² - 4x + 4) - 4 + 7 = (x - 2)² + 3.'
      }
    ]
  },

  {
    id: 'math-1ere-suites',
    subjectId: 'maths',
    gradeLevel: '1ere',
    title: 'Suites Numériques : Arithmétiques et Géométriques',
    officialCode: 'MATH-1-02',
    description: 'Mode de génération explicite et récurrent, suites arithmétiques de raison r, suites géométriques de raison q, et sommes de termes consécutifs.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Suite arithmétique : u_{n+1} = u_n + r. Formule explicite : u_n = u_0 + n·r.',
      'Suite géométrique : v_{n+1} = q · v_n. Formule explicite : v_n = v_0 · q^n.',
      'Somme des premiers entiers : 1 + 2 + ... + n = n(n+1)/2.',
      'Somme des puissances géométriques : 1 + q + q² + ... + q^n = (1 - q^{n+1}) / (1 - q) (si q ≠ 1).'
    ],
    keyFormulas: [
      {
        label: 'Terme général d\'une suite arithmétique',
        formula: 'u_n = u_p + (n - p) \\cdot r \\quad ; \\quad u_n = u_0 + n \\cdot r',
        explanation: 'Progression linéaire régulière.'
      },
      {
        label: 'Terme général d\'une suite géométrique',
        formula: 'v_n = v_p \\cdot q^{n - p} \\quad ; \\quad v_n = v_0 \\cdot q^n',
        explanation: 'Croissance ou décroissance exponentielle discrète.'
      }
    ],
    courseSections: [
      {
        title: '1. Somme de termes consécutifs',
        content: [
          'Pour une suite arithmétique : Somme = (Nombre de termes) × ((Premier terme + Dernier terme) / 2).',
          'Pour une suite géométrique : Somme = (Premier terme) × ((1 - q^{nb}) / (1 - q)).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-suites-1',
        title: 'Problème Résolu : Modélisation d\'un capital et comparaison de placements',
        context: 'Un capital initial C₀ = 2 000 € est placé le 1er janvier 2024 à un taux annuel à intérêts composés de 3,5% par an. On note C_n le capital au bout de n années.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. Justifier la nature de la suite (C_n) et exprimer C_n en fonction de n.',
            hints: ['Augmenter de 3,5% revient à multiplier chaque année par le coefficient multiplicateur 1 + 3,5/100 = 1,035.'],
            solutionSteps: [
              'Chaque année, le capital subit une hausse de 3,5 % : C_{n+1} = C_n + 0,035 C_n = 1,035 × C_n.',
              'La suite (C_n) est donc une suite géométrique de premier terme C₀ = 2 000 et de raison q = 1,035.',
              'Formule explicite : C_n = C₀ × q^n = 2 000 × (1,035)^n.'
            ],
            finalAnswer: 'Suite géométrique de raison q = 1,035 ; C_n = 2000 × (1,035)^n.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Calculer le capital C₁₀ obtenu au bout de 10 ans (arrondi au centime d\'euro).',
            hints: ['Calculer 2000 × (1,035)¹⁰.'],
            solutionSteps: [
              'C₁₀ = 2 000 × (1,035)¹⁰.',
              '(1,035)¹⁰ ≈ 1,41059876.',
              'C₁₀ ≈ 2 000 × 1,41059876 ≈ 2 821,20 €.'
            ],
            finalAnswer: 'C₁₀ ≈ 2 821,20 € (gain net de 821,20 € d\'intérêts).',
            pointsAllocated: 2
          },
          {
            questionText: '3. Déterminer à partir de quelle année le capital initial aura doublé (C_n ≥ 4 000 €).',
            hints: ['Résoudre (1,035)^n ≥ 2 en testant à la calculatrice ou avec le logarithme.'],
            solutionSteps: [
              '2 000 × (1,035)^n ≥ 4 000 ⟺ (1,035)^n ≥ 2.',
              'Avec n = 20 : (1,035)²⁰ ≈ 1,9898 < 2.',
              'Avec n = 21 : (1,035)²¹ ≈ 2,0594 ≥ 2.',
              'Le capital double donc au bout de 21 ans (soit en 2024 + 21 = 2045).'
            ],
            finalAnswer: 'n = 21 ans (en l\'an 2045).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-1m-2',
        question: 'Que vaut la somme S = 1 + 2 + 3 + ... + 100 ?',
        options: ['5050', '5000', '5100', '10100'],
        correctIndex: 0,
        explanation: 'Formule de Gauss : n(n+1)/2 = 100 × 101 / 2 = 5050.'
      },
      {
        id: 'q-1m-2b',
        question: 'Si (u_n) est arithmétique avec u₃ = 11 et r = 4, que vaut u₀ ?',
        options: ['-1', '3', '7', '-5'],
        correctIndex: 0,
        explanation: 'u_n = u₀ + n×r ⟺ u₃ = u₀ + 3×4 ⟺ 11 = u₀ + 12 ⟺ u₀ = 11 - 12 = -1.'
      },
      {
        id: 'q-1m-2c',
        question: 'Quelle est la limite en +∞ de la suite géométrique v_n = 50 × (0,85)^n ?',
        options: ['0', '+∞', '50', '0,85'],
        correctIndex: 0,
        explanation: 'Comme la raison vérifie -1 < q < 1 (|0,85| < 1), lim (0,85)^n = 0, donc lim v_n = 0.'
      },
      {
        id: 'q-1m-2d',
        question: 'Que vaut la somme géométrique 1 + 2 + 4 + 8 + 16 + 32 + 64 ?',
        options: ['127', '128', '126', '63'],
        correctIndex: 0,
        explanation: 'Somme des 7 premiers termes de raison 2 : (1 - 2⁷) / (1 - 2) = (1 - 128) / (-1) = 127.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE (1ère Spécialité) - PHYSIQUE-CHIMIE
  // =========================================================================
  {
    id: 'pc-1ere-oxydoreduction',
    subjectId: 'physique-chimie',
    gradeLevel: '1ere',
    title: 'Réactions d’Oxydoréduction & Titrages Colorimétriques',
    officialCode: 'PC-1-01',
    description: 'Couples oxydant/réducteur, écriture des demi-équations électroniques, tableau d\'avancement, réactif limitant et équivalence d\'un titrage d\'oxydoréduction.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Un oxydant est une espèce chimique capable de capter un ou plusieurs électrons : Ox + n e⁻ ⇄ Red.',
      'Un réducteur est une espèce chimique capable de céder un ou plusieurs électrons.',
      'Méthode d\'équilibrage des demi-équations en milieu acide : (1) Éléments autres que O et H, (2) Oxygène avec H2O, (3) Hydrogène avec H+, (4) Charges avec e⁻.',
      'À l\'équivalence, n(Ox)/a = n(Red)/b : changement de couleur spontané sans indicateur (ex: permanganate violet devenant incolore).'
    ],
    keyFormulas: [
      {
        label: 'Demi-équation électronique générique',
        formula: '\\text{Ox} + n \\, e^- \\rightleftharpoons \\text{Red}',
        explanation: 'La réduction correspond au gain d\'électrons.'
      },
      {
        label: 'Relation à l\'équivalence redox',
        formula: '\\frac{n_1(E)}{a} = \\frac{n_2(E)}{b} \\iff \\frac{C_1 V_1}{a} = \\frac{C_2 V_{E}}{b}',
        explanation: 'Pour une réaction a Ox₁ + b Red₂ -> a Red₁ + b Ox₂.'
      }
    ],
    courseSections: [
      {
        title: '1. Équilibrage des réactions redox en milieu acide',
        content: [
          'Exemple classique du couple MnO4- / Mn2+ :',
          'MnO4- + 8 H+ + 5 e- ⇄ Mn2+ + 4 H2O.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-redox',
        title: 'Problème Résolu : Titrage du fer(II) par les ions permanganate',
        context: 'On dose V_Red = 20,0 mL d\'une solution de sulfate de fer(II) Fe²⁺ par une solution de permanganate de potassium (K⁺ + MnO₄⁻) de concentration C_Ox = 0,020 mol/L. Le virage persistant au rose-violet est obtenu pour V_E = 15,0 mL.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. Écrire les demi-équations électroniques associées aux couples MnO₄⁻/Mn²⁺ et Fe³⁺/Fe²⁺, puis l\'équation d\'oxydoréduction globale du titrage.',
            hints: ['Équilibrer l\'oxygène avec H2O et l\'hydrogène avec H+. Multiplier la demi-équation du fer par 5 pour égaliser les électrons.'],
            solutionSteps: [
              'Couple MnO₄⁻/Mn²⁺ (réduction de l\'oxydant) : MnO₄⁻ + 8 H⁺ + 5 e⁻ ⇄ Mn²⁺ + 4 H₂O.',
              'Couple Fe³⁺/Fe²⁺ (oxydation du réducteur) : Fe²⁺ ⇄ Fe³⁺ + e⁻ (multipliée par 5).',
              'Équation globale bilan : MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ ⟶ Mn²⁺ + 5 Fe³⁺ + 4 H₂O.'
            ],
            finalAnswer: 'MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ ⟶ Mn²⁺ + 5 Fe³⁺ + 4 H₂O.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Définir l\'équivalence d\'un titrage et donner la relation entre les quantités de matière n(MnO₄⁻)_E et n(Fe²⁺)_0.',
            hints: ['À l\'équivalence, les réactifs ont été introduits dans les proportions stœchiométriques.'],
            solutionSteps: [
              'L\'équivalence est l\'état où les réactifs titrant et titré sont intégralement consommés dans les proportions stœchiométriques de l\'équation.',
              'D\'après les coefficients stœchiométriques : n(Fe²⁺)_0 / 5 = n(MnO₄⁻)_E / 1.',
              'Soit n(Fe²⁺)_0 = 5 × n(MnO₄⁻)_E.'
            ],
            finalAnswer: 'n(Fe²⁺)_0 = 5 × C_Ox × V_E.',
            pointsAllocated: 2
          },
          {
            questionText: '3. Calculer la concentration molaire C_Red en ions Fe²⁺ de la solution titrée.',
            hints: ['C_Red = (5 × C_Ox × V_E) / V_Red.'],
            solutionSteps: [
              'C_Red = (5 × 0,020 mol/L × 15,0 mL) / 20,0 mL.',
              'C_Red = (0,100 × 15,0) / 20,0 = 1,50 / 20,0 = 0,075 mol/L.'
            ],
            finalAnswer: 'C_Red = 0,075 mol·L⁻¹ (soit 7,5 × 10⁻² mol/L).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-1pc-1',
        question: 'Dans une réaction d\'oxydoréduction, que subit l\'oxydant ?',
        options: [
          'Il gagne des électrons : il est réduit',
          'Il perd des électrons : il est oxydé',
          'Il perd des protons H+',
          'Il devient un gaz'
        ],
        correctIndex: 0,
        explanation: 'L\'oxydant capte des électrons lors d\'une réduction (OIL RIG : Oxidation Is Loss, Reduction Is Gain).'
      },
      {
        id: 'q-1pc-1b',
        question: 'Combien d\'électrons sont échangés dans la demi-équation du couple dichromate Cr₂O₇²⁻ / Cr³⁺ ?',
        options: ['6 électrons', '2 électrons', '3 électrons', '14 électrons'],
        correctIndex: 0,
        explanation: 'Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ ⇄ 2 Cr³⁺ + 7 H₂O : 6 électrons sont nécessaires pour équilibrer les charges.'
      },
      {
        id: 'q-1pc-1c',
        question: 'Lors d\'un titrage, comment repère-t-on l\'équivalence sans pH-mètre si le titrant est le permanganate MnO₄⁻ ?',
        options: [
          'Par l\'apparition d\'une coloration violette persistante dans le bécher',
          'Par l\'extinction d\'une flamme',
          'Par la mesure de la masse du bécher',
          'Par l\'apparition d\'un précipité blanc'
        ],
        correctIndex: 0,
        explanation: 'Tant qu\'il reste du réducteur, MnO₄⁻ est réduit en Mn²⁺ incolore. Dès l\'équivalence dépassée, la goutte de MnO₄⁻ colore durablement la solution en rose-violet.'
      },
      {
        id: 'q-1pc-1d',
        question: 'Quel est l\'état d\'oxydation (degré) du carbone dans le dioxyde de carbone CO₂ ?',
        options: ['+IV', '+II', '-II', '0'],
        correctIndex: 0,
        explanation: 'Chaque oxygène étant à -II (-4 au total), le carbone compense pour la neutralité : n.o.(C) = +IV.'
      }
    ]
  },

  {
    id: 'pc-1ere-mvt-energie',
    subjectId: 'physique-chimie',
    gradeLevel: '1ere',
    title: 'Mouvements, Forces & Théorème de l’Énergie Cinétique',
    officialCode: 'PC-1-02',
    description: 'Travail d’une force constante W_AB(F) = F · AB · cos(α), force conservative, énergie cinétique Ec = 1/2 m v² et Théorème de l’Énergie Cinétique (TEC).',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Travail d\'une force constante : W_AB(F) = F · AB · cos(α). Si W > 0, travail moteur ; si W < 0, travail résistant.',
      'Travail du poids : W_AB(P) = m · g · (y_A - y_B) (indépendant du chemin suivi, le poids est une force conservative).',
      'Théorème de l\'énergie cinétique : ΔEc = Ec(B) - Ec(A) = Σ W_AB(Forces extérieures).'
    ],
    keyFormulas: [
      {
        label: 'Théorème de l\'Énergie Cinétique (TEC)',
        formula: '\\Delta E_c = \\frac{1}{2} m v_B^2 - \\frac{1}{2} m v_A^2 = \\sum W_{AB}(\\vec{F})',
        explanation: 'Relie la variation de vitesse aux travaux des forces appliquées.'
      },
      {
        label: 'Travail du poids dans un champ de pesanteur',
        formula: 'W_{AB}(\\vec{P}) = m \\cdot g \\cdot (z_A - z_B)',
        explanation: 'Positif en descente (moteur), négatif en montée (résistant).'
      }
    ],
    courseSections: [
      {
        title: '1. Énergie mécanique et forces non conservatives',
        content: [
          'Si seules des forces conservatives travaillent, l\'énergie mécanique se conserve : Em = Ec + Epp = cte.',
          'En présence de frottements f : ΔEm = W_AB(f) < 0 (dissipation thermique).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-tec',
        title: 'Problème Résolu : Descente d\'un toboggan avec et sans frottements (TEC)',
        context: 'Un lugeur de masse m = 70 kg s\'élance sans vitesse initiale (v_A = 0) depuis le sommet A d\'une piste de hauteur h = 20 m. On prend g = 9,81 m/s².',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. En supposant les frottements nuls, calculer la vitesse théorique v_B au bas de la piste en appliquant le Théorème de l\'Énergie Cinétique.',
            hints: ['La réaction du support est perpendiculaire au déplacement (travail nul). Seul le poids travaille : W(P) = m g h.'],
            solutionSteps: [
              'Système : le lugeur. Référentiel terrestre supposé galiléen.',
              'Forces appliquées : le poids P et la réaction normale du sol Rn (W(Rn) = 0 car Rn ⊥ déplacement).',
              'ΔEc = Ec(B) - Ec(A) = 1/2 m v_B² - 0 = W(P) = m g h.',
              'v_B² = 2 g h ⟺ v_B = √(2 g h).',
              'v_B = √(2 × 9,81 × 20) = √392,4 ≈ 19,81 m/s (soit ~71,3 km/h).'
            ],
            finalAnswer: 'v_B ≈ 19,8 m/s (ou 71,3 km/h).',
            pointsAllocated: 2
          },
          {
            questionText: '2. En réalité, un radar mesure la vitesse au point B à v_réel = 16,0 m/s. Expliquer cette différence et calculer la variation d\'énergie mécanique ΔEm.',
            hints: ['L\'écart est dû aux frottements de l\'air et de la neige. ΔEm = Em(B) - Em(A).'],
            solutionSteps: [
              'Em(A) = Epp(A) + Ec(A) = m g h + 0 = 70 × 9,81 × 20 = 13 734 J.',
              'Em(B) = Epp(B) + Ec(B) = 0 + 1/2 m v_réel² = 1/2 × 70 × (16,0)² = 35 × 256 = 8 960 J.',
              'ΔEm = Em(B) - Em(A) = 8 960 - 13 734 = -4 774 J.'
            ],
            finalAnswer: 'ΔEm = -4 774 J (perte d\'énergie mécanique dissipée en chaleur).',
            pointsAllocated: 2
          },
          {
            questionText: '3. Sachant que la piste a une longueur totale L = 80 m, calculer l\'intensité moyenne de la force de frottement f opposée au mouvement.',
            hints: ['W(f) = -f × L = ΔEm.'],
            solutionSteps: [
              'D\'après le théorème de l\'énergie mécanique : W(f) = ΔEm = -4 774 J.',
              'La force de frottement f étant opposée au déplacement : W(f) = -f × L.',
              '-f × 80 = -4 774 ⟺ f = 4 774 / 80 ≈ 59,7 N.'
            ],
            finalAnswer: 'Force de frottement moyenne f ≈ 59,7 N.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-1pc-2',
        question: 'Le travail d\'une force perpendiculaire au vecteur déplacement à chaque instant est :',
        options: [
          'Toujours nul car cos(90°) = 0',
          'Toujours positif',
          'Égal à m·g·h',
          'Égal à l\'énergie potentielle'
        ],
        correctIndex: 0,
        explanation: 'W = F · d · cos(90°) = 0 : une force perpendiculaire à la trajectoire ne modifie pas la valeur de la vitesse.'
      },
      {
        id: 'q-1pc-2b',
        question: 'Si la vitesse d\'un véhicule est multipliée par 3, par combien son énergie cinétique Ec est-elle multipliée ?',
        options: ['Par 9', 'Par 3', 'Par 6', 'Par 27'],
        correctIndex: 0,
        explanation: 'Comme Ec = 1/2 m v², l\'énergie cinétique dépend du carré de la vitesse : (3v)² = 9 v².'
      },
      {
        id: 'q-1pc-2c',
        question: 'Quelle est la condition pour que l\'énergie mécanique Em d\'un système soit rigoureusement constante ?',
        options: [
          'Que les seules forces qui travaillent soient conservatives (ou forces non conservatives de travail nul)',
          'Que la vitesse du système soit nulle',
          'Que la gravité soit absente',
          'Que le mouvement soit rectiligne uniforme'
        ],
        correctIndex: 0,
        explanation: 'En l\'absence de travail de forces non conservatives (comme les frottements), ΔEm = 0.'
      },
      {
        id: 'q-1pc-2d',
        question: 'Le travail du poids lors d\'un déplacement horizontal est :',
        options: ['Nul', 'Positif', 'Négatif', 'Égal à m·g'],
        correctIndex: 0,
        explanation: 'W(P) = m g (zA - zB) = 0 car l\'altitude ne varie pas (le poids est orthogonal au déplacement horizontal).'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE (1ère Spécialité) - SVT
  // =========================================================================
  {
    id: 'svt-1ere-mitose-adn',
    subjectId: 'svt',
    gradeLevel: '1ere',
    title: 'Division Cellulaire par Mitose & Réplication de l’ADN',
    officialCode: 'SVT-1-01',
    description: 'Le cycle cellulaire (phases G1, S, G2, M), réplication semi-conservative de l’ADN par l’ADN polymérase et étapes de la mitose conforme.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Le cycle cellulaire comprend l\'interphase (G1, S, G2) et la mitose (M).',
      'Phase S : Réplication semi-conservative de l\'ADN prouvée par l\'expérience de Meselson et Stahl (chaque molécule fille conserve un brin matrice originel).',
      'Les 4 phases de la mitose : Prophase (condensation), Métaphase (plaque équatoriale), Anaphase (séparation des chromatides sœurs), Télophase (décondensation et cytodiérèse).',
      'La mitose est une reproduction conforme : elle maintient le caryotype et la séquence génétique à l\'identique.'
    ],
    keyFormulas: [
      {
        label: 'Quantité d\'ADN au cours du cycle cellulaire',
        formula: 'Q \\, (G_1) \\xrightarrow{\\text{Phase S}} 2Q \\, (G_2) \\xrightarrow{\\text{Anaphase}} Q \\, (\\text{Cellules filles})',
        explanation: 'Doublement de la quantité d\'ADN en phase S puis partage équitable en mitose.'
      }
    ],
    courseSections: [
      {
        title: '1. Les yeux de réplication',
        content: [
          'L\'ADN polymérase écarte les deux brins de l\'hélice parentale et synthétise deux nouveaux brins complémentaires selon la règle A-T et C-G.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-mitose',
        title: 'Problème Résolu : Analyse historique de l\'expérience de Meselson et Stahl',
        context: 'Des bactéries E. coli cultivées sur un milieu lourd (¹⁵N) pendant plusieurs générations sont transférées sur un milieu léger contenant de l\'azote ordinaire (¹⁴N). L\'ADN est extrait et analysé par centrifugation sur gradient de chlorure de césium.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. À la génération 0 (G0), l\'ADN donne une bande unique lourde. Après un cycle de réplication (G1) sur milieu ¹⁴N, on observe une seule bande de densité intermédiaire. Quel modèle de réplication cela valide-t-il ?',
            hints: ['Penser aux 3 modèles hypothétiques : conservatif, semi-conservatif, dispersif.'],
            solutionSteps: [
              'Si la réplication était conservative, la molécule parentale resterait intacte (bande lourde ¹⁵N) et la nouvelle molécule serait entièrement légère (bande légère ¹⁴N). On aurait deux bandes distinctes.',
              'L\'observation d\'une unique bande hybride prouve que chaque molécule d\'ADN fille est composée pour moitié d\'azote lourd et pour moitié d\'azote léger.',
              'Ce résultat réfute le modèle conservatif et est parfaitement cohérent avec le modèle semi-conservatif.'
            ],
            finalAnswer: 'Réfutation du modèle conservatif et validation du modèle semi-conservatif.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Prédire le résultat obtenu après deux cycles de réplication (G2) sur milieu léger ¹⁴N selon le modèle semi-conservatif.',
            hints: ['Chaque molécule hybride de G1 donne une molécule hybride et une molécule légère.'],
            solutionSteps: [
              'À G1, 100 % des molécules sont hybrides (¹⁵N-¹⁴N).',
              'À G2, les brins légers ¹⁴N servent de matrice pour synthétiser un brin léger : cela crée des molécules 100 % légères (¹⁴N-¹⁴N).',
              'Les brins lourds ¹⁵N servent de matrice pour synthétiser un brin léger : cela recrée des molécules hybrides (¹⁵N-¹⁴N).',
              'On obtient exactement 50 % de molécules hybrides et 50 % de molécules légères, matérialisées par deux bandes d\'intensité égale (légère et intermédiaire).'
            ],
            finalAnswer: 'Deux bandes d\'égale intensité : 50 % d\'ADN léger (¹⁴N-¹⁴N) et 50 % d\'ADN hybride (¹⁵N-¹⁴N).',
            pointsAllocated: 2
          },
          {
            questionText: '3. Quelle proportion de molécules d\'ADN hybrides subsiste-t-il après 4 générations (G4) sur milieu léger ?',
            hints: ['Le nombre de brins lourds initiaux reste constant (égal à 2 pour une molécule d\'origine), alors que le nombre total de molécules double à chaque génération (2^n).'],
            solutionSteps: [
              'Au bout de 4 générations, une molécule initiale a produit 2⁴ = 16 molécules d\'ADN.',
              'Seules 2 molécules contiennent encore l\'un des deux brins originels lourds ¹⁵N (les 14 autres sont entièrement légères).',
              'Proportion d\'hybrides : 2 / 16 = 1 / 8 = 12,5 %.'
            ],
            finalAnswer: '12,5 % (1/8 de molécules hybrides, 87,5 % de molécules légères).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-1svt-1',
        question: 'À quelle phase de la mitose les chromatides sœurs de chaque chromosome se séparent-elles ?',
        options: ['Anaphase', 'Prophase', 'Métaphase', 'Télophase'],
        correctIndex: 0,
        explanation: 'En anaphase, les centromères se clivent et les microtubules tractent chaque chromatide vers un pôle opposé.'
      },
      {
        id: 'q-1svt-1b',
        question: 'Durant quelle phase du cycle cellulaire a lieu la réplication de l\'ADN ?',
        options: ['La phase S (Synthèse) de l\'interphase', 'La prophase de mitose', 'La phase G1', 'La cytodiérèse'],
        correctIndex: 0,
        explanation: 'La réplication semi-conservative de l\'ADN se déroule exclusivement au cours de la phase S de l\'interphase.'
      },
      {
        id: 'q-1svt-1c',
        question: 'Quelle enzyme catalyse l\'incorporation des désoxyribonucléotides complémentaires lors de la réplication ?',
        options: ['L\'ADN polymérase', 'L\'ARN polymérase', 'L\'amylase', 'La ligase uniquement'],
        correctIndex: 0,
        explanation: 'L\'ADN polymérase synthétise le nouveau brin en appariant A avec T et C avec G.'
      },
      {
        id: 'q-1svt-1d',
        question: 'En métaphase, comment sont disposés les chromosomes condensés à deux chromatides ?',
        options: [
          'Alignés au niveau du plan équatorial de la cellule',
          'Dispersés dans le cytoplasme sans enveloppe',
          'Regroupés aux deux pôles opposés',
          'Enfermés dans deux noyaux distincts'
        ],
        correctIndex: 0,
        explanation: 'La plaque équatoriale métaphasique correspond à l\'alignement précis des centromères au centre du fuseau mitotique.'
      }
    ]
  },

  {
    id: 'svt-1ere-immunite-innee',
    subjectId: 'svt',
    gradeLevel: '1ere',
    title: 'Le Système Immunitaire Inné & la Réaction Inflammatoire',
    officialCode: 'SVT-1-02',
    description: 'Immunité innée universelle, cellules sentinelles (macrophages, mastocytes), médiateurs chimiques de l’inflammation (histamine) et phagocytose.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'L\'immunité innée est la première ligne de défense de l\'organisme : rapide, stéréotypée et sans apprentissage préalable.',
      'Les cellules sentinelles reconnaissent des motifs moléculaires conservés (PAMP) grâce à leurs récepteurs PRR (comme les récepteurs Toll).',
      '4 symptômes cardinaux de l\'inflammation : Rougeur, Chaleur, Gonflement (œdème) et Douleur.',
      'Phagocytose en 4 étapes : Adhésion, Ingestion, Digestion enzymatique (lysosomes) et Rejet des débris.'
    ],
    keyFormulas: [
      {
        label: 'Cascade des médiateurs de l\'inflammation',
        formula: '\\text{Cellules sentinelles} \\xrightarrow{\\text{PRR/PAMP}} \\text{Histamine, Prostaglandines} \\longrightarrow \\text{Vasodilatation + Diapédèse}',
        explanation: 'Attire les granulocytes et monocytes circulants vers le tissu infecté.'
      }
    ],
    courseSections: [
      {
        title: '1. Action des anti-inflammatoires (ex: aspirine, ibuprofène)',
        content: [
          'Les anti-inflammatoires non stéroïdiens (AINS) inhibent l\'enzyme cyclo-oxygénase (COX), bloquant ainsi la synthèse des prostaglandines responsables de la vasodilatation et de la douleur.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-phago',
        title: 'Problème Résolu : Physiologie de la réaction inflammatoire aiguë et pharmacologie des AINS',
        context: 'Une épine souillée pénètre le derme d\'un doigt. En moins de deux heures, la zone devient rouge, chaude, enflée et douloureuse.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Relier les 4 symptômes cardinaux de l\'inflammation aiguë (rougeur, chaleur, gonflement, douleur) aux mécanismes vasculaires et chimiques induits par les cellules sentinelles.',
            hints: ['Penser à l\'action de l\'histamine et des prostaglandines sur le calibre des vaisseaux et les terminaisons nerveuses.'],
            solutionSteps: [
              'Rougeur et Chaleur : causées par la vasodilatation artériolaire locale induite par l\'histamine, augmentant l\'afflux sanguin riche en globules rouges chauds.',
              'Gonflement (œdème) : causé par l\'augmentation de la perméabilité capillaire qui laisse fuiter le plasma sanguin vers le tissu conjonctif.',
              'Douleur : résulte de la compression mécanique des terminaisons nerveuses par l\'œdème et de la stimulation directe des nocicepteurs par les prostaglandines et la bradykinine.'
            ],
            finalAnswer: 'Vasodilatation (rougeur/chaleur), perméabilité capillaire (œdème) et stimulation des nocicepteurs par les prostaglandines (douleur).',
            pointsAllocated: 2
          },
          {
            questionText: '2. Décrire la diapédèse et les 4 étapes successives de la phagocytose par laquelle les macrophages éliminent les bactéries.',
            hints: ['La diapédèse permet la traversée de l\'endothélium. Ensuite : adhésion, ingestion, digestion, rejet.'],
            solutionSteps: [
              'Diapédèse : passage actif des granulocytes et monocytes du sang vers le tissu infecté en s\'insinuant entre les cellules endothéliales vasculaires.',
              'Étape 1 - Adhésion : fixation des récepteurs PRR du phagocyte sur les motifs PAMP de la bactérie.',
              'Étape 2 - Ingestion : émission de pseudopodes entourant la bactérie pour former une vésicule (phagosome).',
              'Étape 3 - Digestion : fusion du phagosome avec les lysosomes contenant des enzymes hydrolytiques et des dérivés réactifs de l\'oxygène.',
              'Étape 4 - Rejet : exocytose des résidus bactériens non digérés.'
            ],
            finalAnswer: 'Adhésion, Ingestion (phagosome), Digestion enzymatique (phagolysosome) et Rejet des débris.',
            pointsAllocated: 2
          },
          {
            questionText: '3. Expliquer le mode d\'action biochimique de l\'ibuprofène (AINS) prescrit pour soulager le patient.',
            hints: ['Quel enzyme de synthèse des prostaglandines est inhibée par les AINS ?'],
            solutionSteps: [
              'L\'ibuprofène est un inhibiteur compétitif de la cyclo-oxygénase (COX-1 et COX-2).',
              'La COX est l\'enzyme catalysant la conversion de l\'acide arachidonique en prostaglandines pro-inflammatoires.',
              'En bloquant la COX, l\'ibuprofène supprime la synthèse des prostaglandines, diminuant la vasodilatation, l\'œdème et la sensibilisation des récepteurs de la douleur.'
            ],
            finalAnswer: 'Inhibition de l\'enzyme cyclo-oxygénase (COX) stoppant la production de prostaglandines.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-1svt-2',
        question: 'Comment les anti-inflammatoires comme l\'ibuprofène soulagent-ils la douleur ?',
        options: [
          'En inhibant l\'enzyme COX productrice de prostaglandines pro-inflammatoires',
          'En détruisant directement les bactéries pathogènes',
          'En bloquant la réplication de l\'ADN',
          'En détruisant les globules blancs'
        ],
        correctIndex: 0,
        explanation: 'L\'inhibition de la cyclo-oxygénase (COX) empêche la formation de prostaglandines, réduisant la vasodilatation et la stimulation des nocicepteurs de la douleur.'
      },
      {
        id: 'q-1svt-2b',
        question: 'Quelles cellules immunitaires résidentes du tissu sont les premières à détecter les agents pathogènes ?',
        options: ['Les cellules sentinelles (macrophages, cellules dendritiques, mastocytes)', 'Les lymphocytes T cytotoxiques', 'Les hématies (globules rouges)', 'Les plaquettes'],
        correctIndex: 0,
        explanation: 'Les cellules sentinelles montent la garde dans les tissus et sonnent l\'alerte par leurs médiateurs chimiques.'
      },
      {
        id: 'q-1svt-2c',
        question: 'Qu\'appelle-t-on la diapédèse lors de la réaction inflammatoire ?',
        options: [
          'La traversée de la paroi des vaisseaux sanguins par les leucocytes',
          'La division par mitose des bactéries',
          'La destruction des globules rouges',
          'L\'élévation thermique de la fièvre'
        ],
        correctIndex: 0,
        explanation: 'La diapédèse désigne la migration des granulocytes et monocytes hors de la circulation vers le tissu enflammé.'
      },
      {
        id: 'q-1svt-2d',
        question: 'Que reconnaissent spécifiquement les récepteurs PRR (Pattern Recognition Receptors) des cellules sentinelles ?',
        options: [
          'Des motifs moléculaires bactériens très conservés appelés PAMP',
          'Les hormones du stress',
          'Les groupes sanguins ABO',
          'Le cholestérol sanguin'
        ],
        correctIndex: 0,
        explanation: 'Les PRR reconnaissent des motifs moléculaires généraux partagés par de nombreux microbes (PAMP, ex: peptidoglycane, lipopolysaccharide).'
      }
    ]
  },

  // =========================================================================
  // TERMINALE (Tle Spécialité) - MATHÉMATIQUES
  // =========================================================================
  {
    id: 'math-term-deriv-tvi',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Dérivation, Convexité et Théorème des Valeurs Intermédiaires (TVI)',
    officialCode: 'MATH-T-01',
    description: 'Étude locale et globale des fonctions : dérivée seconde, convexité, point d’inflexion et résolution approchée d’équations par le TVI.',
    estimatedMinutes: 45,
    simulationId: 'tangent_deriv',
    summaryHighlights: [
      'Une fonction f est convexe sur I <=> sa courbe est au-dessus de toutes ses tangentes <=> f\'\'(x) ≥ 0 sur I.',
      'Point d\'inflexion : point où la courbe traverse sa tangente (f\'\' s\'annule en changeant de signe).',
      'Corollaire du TVI : Si f est continue et strictement monotone sur [a, b], l\'équation f(x) = k admet une unique solution α dans [a, b].'
    ],
    keyFormulas: [
      {
        label: 'Équation de la tangente en x₀',
        formula: 'y = f\'(x_0)(x - x_0) + f(x_0)',
        explanation: 'Pente f\'(x₀) et passage par le point (x₀, f(x₀)).'
      },
      {
        label: 'Critère de convexité (dérivée seconde)',
        formula: 'f\'\'(x) \\ge 0 \\quad \\forall x \\in I \\iff f \\text{ est convexe sur } I',
        explanation: 'f\'\'(x) ≤ 0 caractérise une fonction concave.'
      }
    ],
    courseSections: [
      {
        title: '1. Convexité et concavité',
        content: [
          'Soit f une fonction deux fois dérivable sur un intervalle I.',
          'Si f\'\'(x) ≥ 0 pour tout x ∈ I, f est convexe sur I.',
          'Si f\'\'(x) ≤ 0 pour tout x ∈ I, f est concave sur I.',
          'Un point d\'inflexion I(x₀, f(x₀)) apparaît lorsque f\'\'(x₀) = 0 et f\'\' change de signe.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-math-tvi-1',
        title: 'Problème Type Bac : Étude complète de convexité, tangente et TVI',
        context: 'Soit la fonction f définie sur ℝ par f(x) = x³ - 3x + 1. On note Cf sa courbe représentative dans un repère orthonormé.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. Calculer la dérivée f\'(x) et la dérivée seconde f\'\'(x) pour tout x ∈ ℝ.',
            hints: ['Rappel de cours : (x^n)\' = n x^(n-1). Pour f\'\'(x), dériver l\'expression trouvée pour f\'(x).'],
            solutionSteps: [
              'f est un polynôme donc deux fois dérivable sur ℝ.',
              'f\'(x) = 3x² - 3 = 3(x² - 1) = 3(x - 1)(x + 1).',
              'f\'\'(x) = (3x² - 3)\' = 6x.'
            ],
            finalAnswer: 'f\'(x) = 3x² - 3 et f\'\'(x) = 6x.',
            pointsAllocated: 1.5,
            bacTrap: 'Factoriser f\'(x) facilite immédiatement l\'étude du signe des variations.'
          },
          {
            questionText: '2. Étudier le signe de f\'\'(x). En déduire les intervalles de convexité/concavité et les coordonnées du point d\'inflexion I de Cf.',
            hints: ['6x s\'annule et change de signe en 0.'],
            solutionSteps: [
              'Pour x < 0, 6x < 0 donc f\'\'(x) < 0 : f est concave sur ]-∞ ; 0].',
              'Pour x > 0, 6x > 0 donc f\'\'(x) > 0 : f est convexe sur [0 ; +∞[.',
              'f\'\' s\'annule en 0 en changeant de signe. Le point d\'inflexion est I(0 ; f(0)) = I(0 ; 1).'
            ],
            finalAnswer: 'Concave sur ]-∞ ; 0], convexe sur [0 ; +∞[, point d\'inflexion I(0 ; 1).',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Déterminer l\'équation réduite de la tangente (T) à Cf au point d\'inflexion I.',
            hints: ['Appliquer la formule y = f\'(x₀)(x - x₀) + f(x₀) avec x₀ = 0.'],
            solutionSteps: [
              'x₀ = 0, f(0) = 1.',
              'f\'(0) = 3(0)² - 3 = -3.',
              'Équation de la tangente : y = f\'(0)(x - 0) + f(0) = -3x + 1.'
            ],
            finalAnswer: 'y = -3x + 1 (la tangente traverse la courbe en I).',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Démontrer que l\'équation f(x) = 0 admet une unique solution α dans l\'intervalle [1 ; 2], puis donner un encadrement de α d\'amplitude 10⁻².',
            hints: ['Citer les 3 conditions du corollaire du TVI : continuité, stricte monotonie, et changement de signe.'],
            solutionSteps: [
              '1° Continuité : f est continue sur [1 ; 2] car c\'est une fonction polynomiale.',
              '2° Stricte monotonie : pour tout x ∈ ]1 ; 2], x > 1 donc x² - 1 > 0, d\'où f\'(x) > 0. f est strictement croissante sur [1 ; 2].',
              '3° Encadrement : f(1) = 1³ - 3(1) + 1 = -1 < 0 et f(2) = 2³ - 3(2) + 1 = 8 - 6 + 1 = 3 > 0. Le réel 0 est compris entre f(1) et f(2).',
              'D\'après le corollaire du TVI, l\'équation f(x) = 0 admet une unique solution α ∈ [1 ; 2].',
              'Par balayage à la calculatrice : f(1,53) ≈ -0,011 < 0 et f(1,54) ≈ +0,032 > 0, d\'où 1,53 < α < 1,54.'
            ],
            finalAnswer: 'Existence et unicité prouvées par le TVI. Encadrement : 1,53 < α < 1,54.',
            pointsAllocated: 1.5,
            bacTrap: 'Oublier la stricte monotonie ne prouve que l\'existence et fait perdre des points au Bac !'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-math-1',
        question: 'Si f\'\'(x) ≤ 0 sur [a, b], que peut-on affirmer de la courbe de f ?',
        options: [
          'La courbe est sous toutes ses tangentes (f est concave)',
          'La courbe est au-dessus de ses tangentes',
          'La fonction est strictement croissante',
          'La fonction s\'annule en 0'
        ],
        correctIndex: 0,
        explanation: 'Une dérivée seconde négative caractérise une fonction concave, dont la courbe reste sous ses tangentes.'
      },
      {
        id: 'q-math-2',
        question: 'Quelle condition garantit l\'UNICITÉ de la solution d\'une équation f(x) = k sur un intervalle [a, b] ?',
        options: [
          'La stricte monotonie de f sur [a, b]',
          'La continuité seule',
          'Le fait que f soit paire',
          'La dérivabilité en 0'
        ],
        correctIndex: 0,
        explanation: 'La continuité garantit l\'existence de la solution, mais c\'est la stricte monotonie (strictement croissante ou décroissante) qui assure qu\'elle est unique.'
      },
      {
        id: 'q-math-3',
        question: 'Au point d\'inflexion d\'une courbe représentative, quelle est la position de la tangente ?',
        options: [
          'La tangente traverse la courbe',
          'La tangente est toujours horizontale',
          'La tangente ne touche jamais la courbe',
          'La tangente est verticale'
        ],
        correctIndex: 0,
        explanation: 'Au point d\'inflexion, la courbure s\'inverse (passage de concave à convexe ou vice-versa), la tangente traverse donc la courbe.'
      },
      {
        id: 'q-math-4',
        question: 'La fonction exponentielle f(x) = e^x est-elle convexe ou concave sur ℝ ?',
        options: [
          'Strictement convexe sur ℝ (car f\'\'(x) = e^x > 0)',
          'Strictement concave sur ℝ',
          'Convexe sur ]-∞ ; 0] et concave ensuite',
          'Ni l\'un ni l\'autre'
        ],
        correctIndex: 0,
        explanation: 'exp\'\'(x) = exp(x) > 0 pour tout réel x, la fonction exponentielle est donc strictement convexe sur ℝ.'
      }
    ]
  },

  {
    id: 'math-term-logarithme',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'La Fonction Logarithme Népérien & Croissances Comparées',
    officialCode: 'MATH-T-02',
    description: 'Bijection réciproque de l\'exponentielle, propriétés algébriques fondamentales, limites aux bornes et croissances comparées.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'ln(x) est définie et strictement croissante sur ]0 ; +∞[.',
      'ln(1) = 0 et ln(e) = 1. Relation réciproque : ln(e^x) = x et e^(ln x) = x (pour x > 0).',
      'Propriété algébrique centrale : ln(a × b) = ln(a) + ln(b).',
      'Croissances comparées : lim_{x→+∞} (ln x) / x = 0.'
    ],
    keyFormulas: [
      {
        label: 'Dérivée de ln(u)',
        formula: '(\\ln u)\' = \\frac{u\'}{u} \\quad (u(x) > 0)',
        explanation: 'Fondamentale pour l\'étude des variations de fonctions logarithmiques.'
      },
      {
        label: 'Croissance comparée en +∞',
        formula: '\\lim_{x \\to +\\infty} \\frac{\\ln x}{x^n} = 0 \\quad (n > 0)',
        explanation: 'Toute puissance positive de x l\'emporte sur le logarithme à l\'infini.'
      }
    ],
    courseSections: [
      {
        title: '1. Propriétés algébriques',
        content: [
          'ln(a / b) = ln(a) - ln(b).',
          'ln(a^n) = n · ln(a) pour tout n ∈ ℤ.',
          'ln(√a) = 1/2 · ln(a).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-math-ln',
        title: 'Problème Type Bac : Modélisation démographique et résolution d\'inéquations logarithmiques',
        context: 'Une population de micro-organismes augmente de 4 % par heure. L\'effectif initial est N₀ = 1 000 individus. On note N_n l\'effectif après n heures.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. Exprimer N_n en fonction de n et calculer l\'effectif au bout de 12 heures.',
            hints: ['Une hausse de 4 % correspond à une multiplication par 1,04.'],
            solutionSteps: [
              'N_{n+1} = 1,04 × N_n. C\'est une suite géométrique de premier terme N₀ = 1 000 et de raison q = 1,04.',
              'Formule explicite : N_n = 1 000 × (1,04)^n.',
              'Pour n = 12 : N₁₂ = 1 000 × (1,04)¹² ≈ 1 000 × 1,60103 ≈ 1 601 individus.'
            ],
            finalAnswer: 'N_n = 1000 × (1,04)^n et N₁₂ ≈ 1 601 micro-organismes.',
            pointsAllocated: 2
          },
          {
            questionText: '2. En utilisant les propriétés du logarithme népérien, déterminer à partir de combien d\'heures la population initiale aura triplé (N_n ≥ 3 000).',
            hints: ['1000 × (1,04)^n ≥ 3000 ⟺ 1,04^n ≥ 3. Appliquer la fonction ln strictement croissante sur ]0 ; +∞[.'],
            solutionSteps: [
              '1,04^n ≥ 3 ⟺ ln(1,04^n) ≥ ln(3) ⟺ n × ln(1,04) ≥ ln(3).',
              'Comme 1,04 > 1, ln(1,04) > 0 : on divise par ln(1,04) sans inverser l\'inégalité :',
              'n ≥ ln(3) / ln(1,04).',
              'Calcul numérique : ln(3) ≈ 1,09861 et ln(1,04) ≈ 0,03922.',
              'n ≥ 1,09861 / 0,03922 ≈ 28,01. Comme n est un entier d\'heures, n = 29 heures.'
            ],
            finalAnswer: 'n = 29 heures (soit 1 jour et 5 heures).',
            pointsAllocated: 2
          },
          {
            questionText: '3. Résoudre sur ]0 ; +∞[ l\'équation 2 (ln x)² - 5 ln x + 2 = 0.',
            hints: ['Poser le changement de variable X = ln(x) pour se ramener à une équation du second degré.'],
            solutionSteps: [
              'En posant X = ln(x), l\'équation devient 2X² - 5X + 2 = 0.',
              'Discriminant : Δ = (-5)² - 4(2)(2) = 25 - 16 = 9 = 3².',
              'Racines : X₁ = (5 - 3) / 4 = 1/2 et X₂ = (5 + 3) / 4 = 2.',
              'On revient à x avec la bijection exponentielle :',
              'ln(x) = 1/2 ⟺ x = e^(1/2) = √e.',
              'ln(x) = 2 ⟺ x = e².'
            ],
            finalAnswer: 'S = { √e ; e² }.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-ln-1',
        question: 'Quelle est la valeur exacte de ln(e⁵) - ln(e²) ?',
        options: ['3', 'e³', '10', '5/2'],
        correctIndex: 0,
        explanation: 'ln(e⁵) = 5 et ln(e²) = 2. D\'où 5 - 2 = 3.'
      },
      {
        id: 'q-ln-1b',
        question: 'Quelle est la dérivée de la fonction f(x) = ln(3x² + 1) sur ℝ ?',
        options: ['6x / (3x² + 1)', '1 / (3x² + 1)', '6x', '3 / (3x² + 1)'],
        correctIndex: 0,
        explanation: '(ln u)\' = u\' / u avec u(x) = 3x² + 1 et u\'(x) = 6x.'
      },
      {
        id: 'q-ln-1c',
        question: 'Que vaut la limite lim_{x→+∞} (ln x) / x ?',
        options: ['0', '+∞', '1', '-∞'],
        correctIndex: 0,
        explanation: 'Théorème des croissances comparées : la fonction identité domine le logarithme en +∞.'
      },
      {
        id: 'q-ln-1d',
        question: 'Pour quelles valeurs réelles de x l\'expression ln(x - 4) est-elle définie ?',
        options: [']4 ; +∞[', '[4 ; +∞[', 'ℝ \\ {4}', ']0 ; +∞['],
        correctIndex: 0,
        explanation: 'Le logarithme népérien n\'est défini que pour un argument strictement positif : x - 4 > 0 ⟺ x > 4.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE (Tle Spécialité) - PHYSIQUE-CHIMIE
  // =========================================================================
  {
    id: 'pc-term-titrage',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Dosage par Titrage Acido-Basique & pH-métrie',
    officialCode: 'PC-T-01',
    description: 'Principe du titrage direct, saut de pH, méthode des tangentes parallèles, dérivée dpH/dVB et choix d’indicateur coloré.',
    estimatedMinutes: 50,
    simulationId: 'titration',
    summaryHighlights: [
      'Réaction support totale, rapide et univoque.',
      'À l\'équivalence stœchiométrique : n_A / a = n_B(E) / b <=> C_A · V_A = C_B · V_E.',
      'Repérage graphique de V_E par l\'extremum de la dérivée dpH/dV_B ou par la méthode des tangentes.'
    ],
    keyFormulas: [
      {
        label: 'Relation à l\'équivalence acido-basique',
        formula: 'C_A \\cdot V_A = C_B \\cdot V_E \\iff C_A = \\frac{C_B \\cdot V_E}{V_A}',
        explanation: 'Pour un monoacide dosé par une monobase forte (NaOH).'
      },
      {
        label: 'Définition du pH',
        formula: 'pH = -\\log_{10} \\left( \\frac{[H_3O^+]}{c^\\circ} \\right)',
        explanation: 'c° = 1 mol/L.'
      }
    ],
    courseSections: [
      {
        title: '1. Méthode des tangentes parallèles',
        content: [
          'On trace deux tangentes à la courbe pH = f(V_B) parallèles entre elles, situées de part et d\'autre du saut de pH.',
          'La droite équidistante coupe la courbe au point d\'équivalence E(V_E ; pH_E).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-pc-tit-t',
        title: 'Problème Type Bac : Titrage pH-métrique de l\'acide éthanoïque d\'un vinaigre commercial',
        context: 'On titre un volume V_A = 10,0 mL d\'acide éthanoïque CH3COOH par une solution d\'hydroxyde de sodium (Na⁺ + HO⁻) de concentration C_B = 0,100 mol/L. Le saut de pH donne un volume équivalent V_E = 12,5 mL et un pH_E = 8,7.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. Écrire l\'équation de la réaction support de titrage et justifier qu\'elle peut servir de réaction de dosage.',
            hints: ['L\'acide cède un proton à l\'ion hydroxyde. Quels sont les 3 critères d\'une réaction de titrage ?'],
            solutionSteps: [
              'Équation acido-basique : CH3COOH(aq) + HO⁻(aq) ⟶ CH3COO⁻(aq) + H2O(l).',
              'Cette réaction est : (1) Totale (constante de réaction K = 10^(14 - 4,8) = 10^9,2 >> 10⁴), (2) Rapide (quasi-instantanée), et (3) Univoque (pas de réaction parasite).'
            ],
            finalAnswer: 'CH3COOH + HO⁻ ⟶ CH3COO⁻ + H2O (réaction totale, rapide et unique).',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Déterminer la concentration molaire C_A de la solution d\'acide.',
            hints: ['À l\'équivalence stœchiométrique : C_A × V_A = C_B × V_E.'],
            solutionSteps: [
              'À l\'équivalence : n(acide initial) = n(base versée) ⟺ C_A × V_A = C_B × V_E.',
              'C_A = (C_B × V_E) / V_A = (0,100 mol/L × 12,5 mL) / 10,0 mL = 1,25 / 10,0 = 0,125 mol/L.'
            ],
            finalAnswer: 'C_A = 0,125 mol·L⁻¹.',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. À la demi-équivalence (V_B = V_E / 2 = 6,25 mL), le pH mesuré est de 4,75. En déduire la valeur du pKa du couple CH3COOH / CH3COO⁻.',
            hints: ['À la demi-équivalence, la moitié de l\'acide a été transformée en sa base conjuguée : [acide] = [base].'],
            solutionSteps: [
              'D\'après la relation d\'Henderson-Hasselbalch : pH = pKa + log([CH3COO⁻] / [CH3COOH]).',
              'À V_B = V_E / 2, la moitié de l\'acide CH3COOH a réagi, donc [CH3COO⁻] = [CH3COOH].',
              'Le quotient vaut 1, et log(1) = 0, d\'où pH = pKa = 4,75.'
            ],
            finalAnswer: 'pKa = 4,75.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Choisir l\'indicateur coloré adapté pour un titrage colorimétrique parmi : Hélianthine (zone de virage 3,1 - 4,4), Bleu de bromothymol (6,0 - 7,6), Phénolphtaléine (8,2 - 10,0). Justifier.',
            hints: ['La zone de virage de l\'indicateur doit impérativement englober le pH à l\'équivalence pH_E.'],
            solutionSteps: [
              'Le pH mesuré à l\'équivalence est basique : pH_E = 8,7 (due à la présence de la base conjuguée ion éthanoate).',
              'L\'hélianthine (3,1 - 4,4) vire bien trop tôt.',
              'Le BBT (6,0 - 7,6) ne couvre pas 8,7.',
              'La zone de virage de la phénolphtaléine (8,2 - 10,0) contient la valeur pH_E = 8,7 : c\'est l\'indicateur parfaitement adapté.'
            ],
            finalAnswer: 'La phénolphtaléine car sa zone de virage [8,2 ; 10,0] englobe le pH à l\'équivalence (pH_E = 8,7).',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-tit-1',
        question: 'À l\'équivalence d\'un titrage acide fort par base forte à 25°C, le pH vaut :',
        options: ['pH = 7,0', 'pH = 0', 'pH = 14', 'pH = 4,75'],
        correctIndex: 0,
        explanation: 'Les ions H3O+ et HO- ont réagi pour ne laisser que de l\'eau neutre (pH = 7,0).'
      },
      {
        id: 'q-tit-1b',
        question: 'Comment repère-t-on le volume équivalent V_E sur la courbe dérivée dpH/dV_B ?',
        options: [
          'Par le pic (extremum) de la dérivée',
          'Par l\'annulation de la dérivée',
          'Par l\'ordonnée à l\'origine',
          'Par l\'asymptote horizontale'
        ],
        correctIndex: 0,
        explanation: 'La dérivée est maximale là où la pente de la courbe pH est la plus abrupte (point d\'inflexion du saut de pH).'
      },
      {
        id: 'q-tit-1c',
        question: 'Que vaut le pH d\'une solution aqueuse d\'acide chlorhydrique de concentration C = 1,0 × 10⁻³ mol/L ?',
        options: ['3,0', '1,0', '7,0', '11,0'],
        correctIndex: 0,
        explanation: 'Pour un acide fort dissocié totalement : pH = -log(1,0 × 10⁻³) = 3,0.'
      },
      {
        id: 'q-tit-1d',
        question: 'À la demi-équivalence d\'un titrage d\'acide faible par une base forte, quelle relation est toujours vérifiée ?',
        options: ['pH = pKa', 'pH = 7,0', 'pH = 14 - pKa', '[acide] = 0'],
        correctIndex: 0,
        explanation: 'À la demi-équivalence, les concentrations de l\'acide et de sa base conjuguée sont strictement égales, d\'où pH = pKa.'
      }
    ]
  },

  {
    id: 'pc-term-mecanique',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Mouvement dans un Champ de Pesanteur Uniforme (Balistique)',
    officialCode: 'PC-T-02',
    description: 'Deuxième loi de Newton, équations horaires, trajectoire parabolique et conservation de l’énergie mécanique.',
    estimatedMinutes: 50,
    simulationId: 'projectile',
    summaryHighlights: [
      'Deuxième loi de Newton : Σ F_ext = m · a_G.',
      'En chute libre sans frottement : a(t) = g (accélération indépendante de la masse).',
      'Trajectoire parabolique : y(x) = -(g / (2 v₀² cos² α)) x² + (tan α) x + h₀.'
    ],
    keyFormulas: [
      {
        label: 'Équations horaires de la position',
        formula: 'x(t) = (v_0 \\cos\\alpha) t \\quad ; \\quad y(t) = -\\frac{1}{2} g t^2 + (v_0 \\sin\\alpha) t + h_0',
        explanation: 'Obtenues par double intégration du vecteur accélération.'
      },
      {
        label: 'Portée maximale au sol (pour h₀ = 0)',
        formula: 'X_{max} = \\frac{v_0^2 \\sin(2\\alpha)}{g}',
        explanation: 'Maximale pour α = 45°.'
      }
    ],
    courseSections: [
      {
        title: '1. Intégration des équations du mouvement',
        content: [
          'a_x = 0 => v_x = v₀ cos(α) => x(t) = v₀ cos(α) t.',
          'a_y = -g => v_y = -g t + v₀ sin(α) => y(t) = -1/2 g t² + v₀ sin(α) t + h₀.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-pc-meca-t',
        title: 'Problème Type Bac : Tir balistique d\'un ballon et franchissement d\'obstacle',
        context: 'Un ballon de football est frappé depuis le sol (h₀ = 0) avec une vitesse initiale v₀ = 20,0 m/s sous un angle α = 30,0° par rapport à l\'horizontale. On néglige tout frottement. Accélération de la pesanteur : g = 9,81 m/s².',
        difficulty: 'Type Bac',
        points: 6,
        themeTag: 'sport',
        themeLabel: '⚽ Football & Coup Franc Balistique',
        questions: [
          {
            questionText: '1. Établir les équations horaires x(t) et y(t) du mouvement du centre de gravité du ballon en appliquant la 2e loi de Newton.',
            hints: ['Projeter la relation fondamentale ΣF = m a sur les axes (Ox) horizontal et (Oy) vertical ascendant.'],
            solutionSteps: [
              'Système {ballon}, référentiel terrestre galiléen. La seule force appliquée est le poids P = m g.',
              '2e loi de Newton : m a = m g ⟺ a = g, avec a_x = 0 et a_y = -g.',
              'Par intégration avec les conditions initiales v₀(v₀ cos α ; v₀ sin α) :',
              'v_x(t) = v₀ cos α et v_y(t) = -g t + v₀ sin α.',
              'Deuxième intégration avec x(0) = 0 et y(0) = 0 :',
              'x(t) = (v₀ cos α) t et y(t) = -1/2 g t² + (v₀ sin α) t.'
            ],
            finalAnswer: 'x(t) = (20 cos 30°) t ≈ 17,32 t ; y(t) = -4,905 t² + 10,0 t.',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Déterminer l\'altitude maximale atteinte par le ballon (la flèche H) ainsi que l\'instant t_S correspondant.',
            hints: ['Au sommet de la trajectoire, la composante verticale de la vitesse s\'annule : v_y(t_S) = 0.'],
            solutionSteps: [
              'v_y(t_S) = 0 ⟺ -g t_S + v₀ sin α = 0 ⟺ t_S = (v₀ sin α) / g.',
              't_S = (20,0 × sin 30,0°) / 9,81 = 10,0 / 9,81 ≈ 1,019 s.',
              'Altitude au sommet H = y(t_S) = -1/2 g t_S² + (v₀ sin α) t_S = (v₀ sin α)² / (2g).',
              'H = 10,0² / (2 × 9,81) = 100 / 19,62 ≈ 5,10 m.'
            ],
            finalAnswer: 't_S ≈ 1,02 s et Flèche H ≈ 5,10 mètres.',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Calculer la portée X_max (distance horizontale où le ballon retouche le sol y = 0).',
            hints: ['Résoudre y(t) = 0 avec t > 0, puis injecter dans x(t).'],
            solutionSteps: [
              'y(t) = t (-1/2 g t + v₀ sin α) = 0.',
              'L\'impact au sol a lieu à t_sol = 2 t_S = 2 × 1,019 = 2,038 s.',
              'Portée X_max = x(t_sol) = (v₀ cos α) × (2 v₀ sin α / g) = (v₀² sin 2α) / g.',
              'X_max = (20,0² × sin 60,0°) / 9,81 = (400 × 0,866) / 9,81 ≈ 35,3 m.'
            ],
            finalAnswer: 'Portée X_max ≈ 35,3 mètres au bout de t = 2,04 s.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Un mur de défenseurs de 1,90 m de haut est placé à 9,15 m du tireur. Le ballon franchit-il le mur ? Justifier par le calcul.',
            hints: ['Calculer l\'instant t_mur où x(t) = 9,15 m, puis calculer y(t_mur).'],
            solutionSteps: [
              'x(t_mur) = 9,15 m ⟺ t_mur = 9,15 / (v₀ cos 30°) = 9,15 / 17,32 ≈ 0,528 s.',
              'Hauteur du ballon : y(0,528) = -4,905 × (0,528)² + 10,0 × (0,528).',
              'y(0,528) = -1,368 + 5,283 = 3,91 m.',
              'Comme 3,91 m > 1,90 m, le ballon passe largement au-dessus du mur (marge de ~2 m).'
            ],
            finalAnswer: 'Oui, le ballon passe à 3,91 m de haut, soit 2,01 m au-dessus de la tête des défenseurs.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-meca-t',
        question: 'Si on double la masse d\'un projectile en chute libre sans frottement, sa trajectoire :',
        options: ['Reste exactement identique', 'Est divisée par 2', 'Est doublée', 'Devient rectiligne'],
        correctIndex: 0,
        explanation: 'm·a = m·g => a = g, la masse se simplifie !'
      },
      {
        id: 'q-meca-tb',
        question: 'Pour quelle valeur de l\'angle de tir initial α la portée horizontale est-elle maximale sur terrain plat ?',
        options: ['45°', '30°', '60°', '90°'],
        correctIndex: 0,
        explanation: 'La formule de portée contient sin(2α), maximal pour 2α = 90° soit α = 45°.'
      },
      {
        id: 'q-meca-tc',
        question: 'Quelle est la valeur de l\'accélération horizontale a_x d\'un projectile en chute libre ?',
        options: ['0 m/s²', '9,81 m/s²', '-9,81 m/s²', 'Variable avec le temps'],
        correctIndex: 0,
        explanation: 'Le poids étant purement vertical, aucune force n\'agit horizontalement : la vitesse v_x est constante et a_x = 0.'
      },
      {
        id: 'q-meca-td',
        question: 'Au sommet de la trajectoire parabolique d\'un projectile, que vaut sa vitesse ?',
        options: ['v = v₀ cos(α) (non nulle)', 'v = 0 m/s', 'v = v₀ sin(α)', 'v = g × t'],
        correctIndex: 0,
        explanation: 'Seule la composante verticale v_y s\'annule au sommet ; la composante horizontale v_x = v₀ cos(α) reste active.'
      }
    ]
  },

  {
    id: 'pc-term-optique',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Lunette Astronomique & Lentilles Minces Convergentes',
    officialCode: 'PC-T-03',
    description: 'Modèle des lentilles minces, formule de conjugaison de Descartes, grandissement et système afocal.',
    estimatedMinutes: 40,
    simulationId: 'optics',
    summaryHighlights: [
      'Relation de Descartes : 1/OA\' - 1/OA = 1/f\'.',
      'Grandissement : γ = A\'B\' / AB = OA\' / OA.',
      'Lunette afocale : le foyer image F\'₁ de l\'objectif coïncide avec le foyer objet F₂ de l\'oculaire.'
    ],
    keyFormulas: [
      {
        label: 'Formule de conjugaison de Descartes',
        formula: '\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f\'}',
        explanation: 'Grandeurs algébriques orientées dans le sens de la lumière.'
      },
      {
        label: 'Grossissement d\'une lunette afocale',
        formula: 'G = \\frac{f\'_1}{f\'_2}',
        explanation: 'Rapport des distances focales objectif / oculaire.'
      }
    ],
    courseSections: [
      {
        title: '1. Rayons caractéristiques',
        content: [
          '• Rayon parallèle à l\'axe optique émerge en passant par F\'.',
          '• Rayon passant par le centre optique O n\'est pas dévié.',
          '• Rayon passant par F émerge parallèlement à l\'axe optique.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-pc-opt-t',
        title: 'Problème Type Bac : Étude optique d\'une lunette astronomique afocale',
        context: 'Une lunette astronomique est constituée d\'un objectif L1 de distance focale f\'₁ = 800 mm et d\'un oculaire L2 de distance focale f\'₂ = 20,0 mm.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. Rappeler ce que signifie le terme "afocal" pour une lunette et déterminer la distance O1O2 séparant les centres optiques des deux lentilles.',
            hints: ['Dans un système afocal, le foyer image F\'1 de l\'objectif coïncide avec le foyer objet F2 de l\'oculaire.'],
            solutionSteps: [
              'Une lunette est dite afocale si un objet situé à l\'infini donne une image finale à l\'infini (l\'astronome observe sans accommoder, évitant toute fatigue oculaire).',
              'Cette condition impose que le foyer image F\'1 de L1 soit confondu avec le foyer objet F2 de L2.',
              'Distance entre les lentilles : O1O2 = O1F\'1 + F2O2 = f\'1 + f\'2 = 800 mm + 20,0 mm = 820 mm (soit 82,0 cm).'
            ],
            finalAnswer: 'O1O2 = 82,0 cm (somme des distances focales f\'1 + f\'2).',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Calculer le grossissement G de cette lunette.',
            hints: ['G = θ\' / θ = f\'1 / f\'2.'],
            solutionSteps: [
              'Le grossissement angulaire d\'une lunette afocale est donné par G = f\'1 / f\'2.',
              'G = 800 mm / 20,0 mm = 40.'
            ],
            finalAnswer: 'G = 40 (l\'astre apparaît 40 fois plus grand angulairement).',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. La Lune a un diamètre apparent θ = 0,50° (environ 8,7 × 10⁻³ rad) vue à l\'œil nu. Calculer le diamètre de l\'image intermédiaire A1B1 formée dans le plan focal de l\'objectif.',
            hints: ['tan(θ) ≈ θ = A1B1 / f\'1.'],
            solutionSteps: [
              'Dans l\'approximation des petits angles : tan(θ) ≈ θ (en radians).',
              'A1B1 = f\'1 × θ = 800 mm × 8,7 × 10⁻³ rad ≈ 6,98 mm.'
            ],
            finalAnswer: 'A1B1 ≈ 7,0 mm.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. En déduire le diamètre apparent θ\' sous lequel l\'observateur voit la Lune à travers la lunette.',
            hints: ['θ\' = G × θ.'],
            solutionSteps: [
              'θ\' = G × θ = 40 × 0,50° = 20,0°.',
              'En radians : θ\' = 40 × 8,7 × 10⁻³ ≈ 0,35 rad.'
            ],
            finalAnswer: 'Diamètre apparent final θ\' = 20,0°.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-opt-t',
        question: 'Pour une lunette afocale, où se forme l\'image finale d\'un astre à l\'infini ?',
        options: [
          'À l\'infini (pour une observation sans fatigue oculaire)',
          'Sur l\'oculaire',
          'Au centre optique O',
          'À 25 cm de l\'œil'
        ],
        correctIndex: 0,
        explanation: 'Un système afocal forme d\'un objet à l\'infini une image finale à l\'infini, permettant à l\'œil d\'observer sans accommoder.'
      },
      {
        id: 'q-opt-tb',
        question: 'Si f\' = +20 cm et OA = -30 cm, quelle est la position OA\' de l\'image selon la formule de Descartes ?',
        options: ['+60 cm', '+12 cm', '-12 cm', '+50 cm'],
        correctIndex: 0,
        explanation: '1/OA\' = 1/f\' + 1/OA = 1/20 - 1/30 = (3-2)/60 = 1/60 ⟹ OA\' = +60 cm.'
      },
      {
        id: 'q-opt-tc',
        question: 'Si le grandissement transversal vaut γ = -2, que peut-on dire de l\'image ?',
        options: [
          'Elle est inversée et deux fois plus grande que l\'objet',
          'Elle est droite et deux fois plus petite',
          'Elle est virtuelle et à l\'infini',
          'Elle a la même taille que l\'objet'
        ],
        correctIndex: 0,
        explanation: 'γ < 0 signifie que l\'image est renversée par rapport à l\'objet, et |γ| = 2 signifie qu\'elle mesure le double de sa taille.'
      },
      {
        id: 'q-opt-td',
        question: 'Quelle est la vergence C d\'une lentille mince convergente de distance focale f\' = 50 cm ?',
        options: ['+2,0 dioptries (δ)', '+0,02 δ', '+50 δ', '-2,0 δ'],
        correctIndex: 0,
        explanation: 'C = 1 / f\' avec f\' en mètres : C = 1 / 0,50 m = +2,0 dioptries.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE (Tle Spécialité) - SVT
  // =========================================================================
  {
    id: 'svt-term-expression-genome',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'Expression du Patrimoine Génétique & Traduction',
    officialCode: 'SVT-T-01',
    description: 'Transcription de l’ADN en ARNm, épissage alternatif, code génétique et traduction par les ribosomes.',
    estimatedMinutes: 45,
    simulationId: 'translation_dna',
    summaryHighlights: [
      'Transcription dans le noyau : l\'ARN polymérase synthétise l\'ARN pré-messager complémentaire du brin matrice.',
      'Épissage alternatif : un gène peut produire plusieurs protéines différentes.',
      'Le code génétique est universel et dégénéré (61 codons pour 20 acides aminés + 3 codons STOP).'
    ],
    keyFormulas: [
      {
        label: 'Complémentarité des bases nucléotidiques',
        formula: 'A_{ADN} \\leftrightarrow U_{ARN} \\quad ; \\quad T_{ADN} \\leftrightarrow A_{ARN} \\quad ; \\quad C \\leftrightarrow G',
        explanation: 'L\'uracile U remplace la thymine T.'
      }
    ],
    courseSections: [
      {
        title: '1. Traduction ribosomale',
        content: [
          'Initiation au codon AUG (Méthionine), élongation, puis terminaison aux codons STOP (UAA, UAG, UGA).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-svt-gene-t',
        title: 'Problème Type Bac : Du gène à la protéine - La mutation drépanocytaire HbS',
        context: 'Le gène codant la sous-unité β de l\'hémoglobine humaine normale (allèle HbA) possède la séquence suivante sur le brin non transcrit (codant) au niveau des codons 4 à 8 : 5\'- CCT GAG GAG AAG TCT -3\'. Chez un patient drépanocytaire (allèle HbS), le codon 6 devient GTG.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. Déterminer la séquence de l\'ARNm messager correspondant pour l\'allèle normal HbA et pour l\'allèle muté HbS.',
            hints: ['L\'ARNm est identique au brin codant non transcrit en remplaçant T par U.'],
            solutionSteps: [
              'Allèle normal HbA : 5\'- CCU GAG GAG AAG UCU -3\'.',
              'Allèle muté HbS : 5\'- CCU GUG GAG AAG UCU -3\'.'
            ],
            finalAnswer: 'ARNm HbA : ...GAG... ; ARNm HbS : ...GUG... en position 6.',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. En utilisant le code génétique (GAG = Acide glutamique Glu, GUG = Valine Val), caractériser la mutation et son impact sur la séquence polypeptidique.',
            hints: ['Distinguer mutation silencieuse, faux-sens et non-sens.'],
            solutionSteps: [
              'Au niveau génétique : substitution ponctuelle d\'un nucléotide adénine A par une thymine T au codon 6.',
              'Au niveau protéique : remplacement d\'un acide glutamique (Glu) hydrophile et chargé négativement par une valine (Val) hydrophobe.',
              'Il s\'agit d\'une mutation faux-sens avec altération de la chaîne bêta.'
            ],
            finalAnswer: 'Mutation faux-sens : substitution de l\'acide glutamique par la valine (Glu6Val).',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Expliquer comment cette modification ponctuelle altère la solubilité de l\'hémoglobine et provoque la déformation en faucille des globules rouges (hématies).',
            hints: ['La valine hydrophobe crée une zone d\'adhérence hydrophobe avec les molécules voisines en hypoxie.'],
            solutionSteps: [
              'La valine hydrophobe en surface crée une zone d\'affinité anormale lorsque la pression en oxygène diminue (hypoxie).',
              'Les tétramères d\'hémoglobine HbS désoxygénés s\'agrègent en longues fibres cristallines insolubles à l\'intérieur de l\'hématie.',
              'Ces polymères déforment rigoureusement la cellule en forme de faucille (drépanocyte), fragilisant la membrane (hémolyse et anémie) et obstruant les capillaires sanguins (crises vaso-occlusives douloureuses).'
            ],
            finalAnswer: 'Polymérisation de l\'HbS en fibres insolubles et falciformation des hématies.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Expliquer le rôle de l\'épissage alternatif dans l\'expression d\'autres gènes eucaryotes.',
            hints: ['Un seul gène peut coder pour plusieurs protéines distinctes selon les exons retenus.'],
            solutionSteps: [
              'Dans le noyau, l\'ARN pré-messager subit l\'épissage : les introns sont excisés et les exons sont raboutés.',
              'L\'épissage alternatif permet de conserver différentes combinaisons d\'exons.',
              'À partir d\'un seul et même gène d\'ADN, une cellule peut donc produire plusieurs ARNm matures différents et coder pour une diversité de protéines aux fonctions variées.'
            ],
            finalAnswer: 'L\'épissage alternatif permet à un gène unique de coder plusieurs protéines différentes.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-svt-t-1',
        question: 'Quel codon est le codon d\'initiation universel de la traduction ?',
        options: ['AUG', 'UAA', 'UAG', 'CUG'],
        correctIndex: 0,
        explanation: 'AUG code pour la Méthionine et débute toute chaîne polypeptidique.'
      },
      {
        id: 'q-svt-t-1b',
        question: 'Où se déroule la traduction de l\'ARNm en protéine dans la cellule eucaryote ?',
        options: ['Dans le cytoplasme (sur les ribosomes)', 'Dans le nucléole', 'Dans la membrane plasmique', 'Dans la paroi végétale'],
        correctIndex: 0,
        explanation: 'La transcription a lieu dans le noyau, puis l\'ARNm migre vers le cytoplasme pour être traduit par les ribosomes.'
      },
      {
        id: 'q-svt-t-1c',
        question: 'Que signifie que le code génétique est dit "dégénéré" ou redondant ?',
        options: [
          'Plusieurs codons différents peuvent coder pour le même acide aminé',
          'Un même codon code pour plusieurs acides aminés distincts',
          'Il s\'use avec le vieillissement',
          'Il ne fonctionne pas chez les virus'
        ],
        correctIndex: 0,
        explanation: 'Il existe 61 codons codants pour seulement 20 acides aminés, donc la plupart des acides aminés sont spécifiés par plusieurs codons.'
      },
      {
        id: 'q-svt-t-1d',
        question: 'Que provoquent les codons non-sens ou STOP (UAA, UAG, UGA) lors de la traduction ?',
        options: [
          'La dissociation du ribosome et la libération de la protéine néosynthétisée',
          'L\'incorporation d\'une valine',
          'La duplication de l\'ADN',
          'La destruction de la cellule'
        ],
        correctIndex: 0,
        explanation: 'Les codons STOP ne correspondent à aucun ARNt : ils recrutent un facteur de terminaison qui libère la chaîne peptidique.'
      }
    ]
  },

  {
    id: 'svt-term-tectonique',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'La Dynamique de la Lithosphère & Zones de Subduction',
    officialCode: 'SVT-T-02',
    description: 'Instabilité gravitaire de la lithosphère océanique âgée, plan de Wadati-Benioff, métamorphisme HP-BT et fusion partielle du manteau.',
    estimatedMinutes: 45,
    simulationId: 'subduction',
    summaryHighlights: [
      'Moteur : La lithosphère océanique en vieillissant refroidit et sa densité dépasse celle de l\'asthénosphère (d > 3,25).',
      'Plan de Wadati-Benioff : alignement incliné des foyers sismiques.',
      'Métamorphisme de subduction : libération d\'eau qui hydrate le manteau chevauchant, abaissant son solidus et provoquant sa fusion partielle.'
    ],
    keyFormulas: [
      {
        label: 'Condition de subduction gravitaire',
        formula: '\\rho_{lithosphère} > \\rho_{asthénosphère} \\approx 3{,}25 \\text{ g/cm}^3',
        explanation: 'Atteint après environ 30 à 40 millions d\'années.'
      }
    ],
    courseSections: [
      {
        title: '1. Genèse du magmatisme d\'arc',
        content: [
          'L\'eau libérée par les schistes bleus et éclogites hydrate la péridotite mantellique chevauchante vers 100 km de profondeur, induisant sa fusion partielle.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-svt-sub-t',
        title: 'Problème Type Bac : Métamorphisme de subduction et magmatisme de zone de convergence',
        context: 'Dans le massif alpin du Queyras et du Mont Viso, on trouve des métagabbros à glaucophane (schistes bleus) et des éclogites à grenat et jadéite.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. Expliquer pourquoi une lithosphère océanique âgée entre spontanément en subduction.',
            hints: ['Relier le refroidissement continu de la lithosphère au cours de son éloignement de la dorsale à son épaississement et sa densité.'],
            solutionSteps: [
              'En s\'éloignant de la dorsale océanique, la lithosphère océanique se refroidit par conduction thermique.',
              'L\'isotherme 1 300°C s\'enfonce, épaississant le manteau lithosphérique péridotitique dense (d ≈ 3,3).',
              'Au-delà de ~30 millions d\'années, la densité globale de la plaque dépasse celle de l\'asthénosphère sous-jacente (d > 3,25).',
              'Ce déséquilibre isostatique crée une force de traction gravitaire négative amorçant et entretenant la subduction.'
            ],
            finalAnswer: 'Instabilité gravitaire due au refroidissement et à la surdensité de la lithosphère océanique âgée.',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Décrire la succession métamorphique minéralogique subie par les roches de la croûte océanique plongeante (du schiste vert à l\'éclogite).',
            hints: ['Pression croissante et température modérée (gradient HP-BT).'],
            solutionSteps: [
              '1) Hydrothermalisme océanique près de la dorsale : métagabbro à chlorite et actinote (faciès schiste vert).',
              '2) Début d\'enfouissement en subduction (30-50 km) : apparition du glaucophane bleu par déshydratation (faciès schiste bleu).',
              '3) Enfouissement profond (> 60-80 km) : formation de grenat et de jadéite (pyroxène sodique) sans minéraux hydratés (faciès éclogite).'
            ],
            finalAnswer: 'Schiste vert ⟶ Schiste bleu (glaucophane) ⟶ Éclogite (grenat + jadéite) sous gradient HP-BT.',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Quel est le rôle déterminant de la déshydratation de la plaque plongeante dans le déclenchement du volcanisme explosif de subduction ?',
            hints: ['La péridotite mantellique chevauchante est-elle sèche ou hydratée ? Quel effet l\'eau a-t-elle sur le solidus ?'],
            solutionSteps: [
              'Les réactions minéralogiques de subduction libèrent de grandes quantités d\'eau minérale liée.',
              'Cette eau monte et percole à travers le coin de manteau chevauchant situé vers 80 à 100 km de profondeur.',
              'L\'hydratation abaisse la température de fusion de la péridotite (le solidus hydraté croise le géotherme).',
              'Il en résulte une fusion partielle de la péridotite produisant un magma andésitique hydraté riche en silice et en gaz, responsable d\'un volcanisme explosif.'
            ],
            finalAnswer: 'L\'eau abaisse le solidus de la péridotite chevauchante, déclenchant sa fusion partielle vers 100 km.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Que prouve la présence actuelle d\'éclogites au cœur de la chaîne de montagnes alpine ?',
            hints: ['L\'éclogite s\'est formée à plus de 70 km sous terre : comment peut-elle se retrouver à 3 000 m d\'altitude ?'],
            solutionSteps: [
              'L\'éclogite démontre qu\'un fragment de plancher océanique a d\'abord été subduit à très haute pression (> 2 GPa, > 70 km).',
              'La subduction s\'est ensuite bloquée par l\'arrivée de la marge continentale peu dense (collision alpine).',
              'Les contraintes compressives et l\'érosion ont exhumé ces roches de haute pression à l\'air libre, constituant la signature indélébile de la fermeture d\'un ancien océan alpin.'
            ],
            finalAnswer: 'Témoin de la fermeture d\'un ancien océan par subduction suivie de collision continentale et exhumation tectonique.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-svt-t-2',
        question: 'Quel est le déclencheur fondamental de la fusion partielle de la péridotite en subduction ?',
        options: [
          'L\'apport d\'eau libérée par la déshydratation de la plaque plongeante',
          'Une hausse soudaine de température',
          'Une décompression adiabatique sèche',
          'La désintégration radioactive'
        ],
        correctIndex: 0,
        explanation: 'L\'hydratation abaisse la température de fusion (solidus hydraté) de la péridotite mantellique.'
      },
      {
        id: 'q-svt-t-2b',
        question: 'Qu\'indique l\'alignement incliné des séismes selon le plan de Wadati-Benioff ?',
        options: [
          'Le plongement rigide et cassant de la plaque lithosphérique plongeante',
          'L\'axe d\'une dorsale sous-marine',
          'Le centre du noyau terrestre',
          'Une éruption volcanique de surface'
        ],
        correctIndex: 0,
        explanation: 'Les séismes profonds se produisent au sein de la lithosphère froide et cassante qui s\'enfonce dans le manteau chaud ductile.'
      },
      {
        id: 'q-svt-t-2c',
        question: 'Quel minéral bleu caractéristique indique le faciès métamorphique de schiste bleu ?',
        options: ['Le glaucophane', 'La chlorite', 'L\'olivine', 'La calcite'],
        correctIndex: 0,
        explanation: 'Le glaucophane est une amphibole sodique bleue caractéristique de la haute pression et basse température.'
      },
      {
        id: 'q-svt-t-2d',
        question: 'Quel type de volcanisme est typiquement associé aux zones de subduction ?',
        options: [
          'Un volcanisme explosif (andésite, dacite, rhyolite) riche en gaz et en silice',
          'Un volcanisme effusif basaltique très fluide',
          'Des geysers de glace uniquement',
          'Aucun volcanisme'
        ],
        correctIndex: 0,
        explanation: 'Les magmas de subduction sont visqueux et riches en eau dissoute, provoquant de violentes éruptions explosives.'
      }
    ]
  },
  ...SUPPLEMENTARY_CHAPTERS,
  ...ADVANCED_CHAPTERS,
  ...EXPERT_CHAPTERS,
  ...COMPLETE_CHAPTERS_PART1,
  ...COMPLETE_CHAPTERS_PART2,
  ...COMPLETE_CHAPTERS_PART3,
  ...OFFICIAL_REGISTRY_PART1,
  ...OFFICIAL_REGISTRY_PART2
];
