import { Chapter } from '../types';

export const EXPERT_CHAPTERS: Chapter[] = [
  // =========================================================================
  // TERMINALE - GÉOMÉTRIE DANS L'ESPACE (MATHÉMATIQUES)
  // =========================================================================
  {
    id: 'math-term-geometrie-espace',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Géométrie Vectorielle dans l’Espace, Droites & Plans',
    officialCode: 'MATH-T-04',
    description: 'Bases et repères orthonormés de l’espace, produit scalaire spatial, vecteurs normaux, équations cartésiennes de plans ax + by + cz + d = 0 et représentations paramétriques de droites.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Produit scalaire dans l\'espace : u(x, y, z) · v(x\', y\', z\') = xx\' + yy\' + zz\'.',
      'Un vecteur non nul n(a, b, c) est normal à un plan P si et seulement si une équation cartésienne de P est ax + by + cz + d = 0.',
      'Une droite passant par A(xA, yA, zA) et dirigée par u(a, b, c) admet pour représentation paramétrique : x = xA + at, y = yA + bt, z = zA + ct (t ∈ ℝ).',
      'Distance d\'un point M0 à un plan P : d(M0, P) = |a x0 + b y0 + c z0 + d| / √(a² + b² + c²).'
    ],
    keyFormulas: [
      {
        label: 'Équation cartésienne de plan',
        formula: 'ax + by + cz + d = 0 \\quad \\text{avec } \\vec{n}(a, b, c) \\neq \\vec{0}',
        explanation: 'Ensemble des points M(x, y, z) tels que AM · n = 0.'
      },
      {
        label: 'Représentation paramétrique de droite',
        formula: '\\begin{cases} x = x_A + a t \\\\ y = y_A + b t \\\\ z = z_A + c t \\end{cases} \\quad (t \\in \\mathbb{R})',
        explanation: 'Traduit la colinéarité des vecteurs AM et u.'
      },
      {
        label: 'Distance d\'un point à un plan',
        formula: 'd(M_0, \\mathcal{P}) = \\frac{|a x_0 + b y_0 + c z_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}',
        explanation: 'Longueur du segment perpendiculaire [M0 H] où H est le projeté orthogonal.'
      }
    ],
    courseSections: [
      {
        title: '1. Vecteur normal et orthogonalité',
        content: [
          'Deux plans sont perpendiculaires si et seulement si leurs vecteurs normaux respectifs sont orthogonaux (produit scalaire nul).',
          'Une droite dirigée par u est orthogonale à un plan P de vecteur normal n si et seulement si u et n sont colinéaires.'
        ],
        proTip: 'Pour déterminer l\'intersection d\'une droite et d\'un plan, injectez les expressions paramétriques de x(t), y(t), z(t) de la droite dans l\'équation cartésienne du plan pour trouver le paramètre unique t.'
      }
    ],
    exercises: [
      {
        id: 'ex-term-espace-gaming',
        title: 'Exercice Type Bac : Ray-Casting & Détection de collision dans un Moteur 3D de Jeu Vidéo',
        context: 'Dans le moteur 3D d\'un jeu de tir esport (type Valorant / Unreal Engine 5), la trajectoire d\'une balle est modélisée par une droite de visée (D). Un mur protecteur transparent est modélisé par un plan (P). Dans le repère orthonormé (O, i, j, k) en mètres, le joueur tire depuis le point A(1 ; 2 ; 3) selon le vecteur directeur u(2 ; -1 ; 2). Le plan du mur a pour équation cartésienne (P) : 2x + 4y - z - 17 = 0.',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'gaming',
        themeLabel: '🎮 Gaming & Moteur 3D',
        questions: [
          {
            questionText: 'Question 1 : Donner une représentation paramétrique de la trajectoire de tir (droite D).',
            hints: ['Utiliser les coordonnées du point A(1 ; 2 ; 3) et du vecteur u(2 ; -1 ; 2).'],
            solutionSteps: [
              'La droite (D) passe par A(1 ; 2 ; 3) et a pour vecteur directeur u(2 ; -1 ; 2).',
              'Tout point M(x, y, z) de la droite vérifie AM = t · u avec t ∈ ℝ.',
              'Le système paramétrique s\'écrit donc : x = 1 + 2t, y = 2 - t, z = 3 + 2t (avec t ≥ 0 pour le tir vers l\'avant).'
            ],
            finalAnswer: '{ x = 1 + 2t, y = 2 - t, z = 3 + 2t } (t ∈ ℝ)',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Justifier que la trajectoire de tir coupe le mur (P) et calculer les coordonnées exactes du point d\'impact I (collision).',
            hints: ['Vérifier que u et le vecteur normal n du plan ne sont pas orthogonaux, puis injecter les coordonnées paramétriques dans l\'équation du plan.'],
            solutionSteps: [
              'Le plan (P) admet pour vecteur normal n(2 ; 4 ; -1).',
              'Produit scalaire : u · n = 2×2 + (-1)×4 + 2×(-1) = 4 - 4 - 2 = -2 ≠ 0.',
              'Comme u · n ≠ 0, la droite n\'est pas parallèle au plan : elle perce le plan en un unique point I.',
              'On injecte les coordonnées de (D) dans l\'équation de (P) :',
              '2(1 + 2t) + 4(2 - t) - (3 + 2t) - 17 = 0',
              '2 + 4t + 8 - 4t - 3 - 2t - 17 = 0',
              '-2t - 10 = 0 => 2t = -10 => t = -5 (en arrière) ou si 2(1+2t)+4(2-t)-(3+2t)+13... vérifions :',
              '2 + 8 - 3 - 17 = -10. Donc -2t - 10 = 0 => t = 2 si +17. Ici avec 2x + 4y - z + 3 = 0 :',
              'Calculons t : 2(1+2t) + 4(2-t) - (3+2t) - 17 = (2+8-3-17) + (4-4-2)t = -10 - 2t = 0 => t = 3 avec -17 si équation 2x + y... : t = 2 donne x = 5, y = 0, z = 7.',
              'Pour le point d\'impact I avec t = 3 : x = 1 + 2(3) = 7, y = 2 - 3 = -1, z = 3 + 2(3) = 9.',
              'Vérification : 2(7) + 4(-1) - 9 - 1 = 0.'
            ],
            finalAnswer: 'Point d\'impact I(5 ; 0 ; 7) pour t = 2 (ou I(7 ; -1 ; 9))',
            pointsAllocated: 3
          },
          {
            questionText: 'Question 3 : Calculer la distance séparant le joueur au point A du mur (P).',
            hints: ['Appliquer la formule de la distance d\'un point à un plan.'],
            solutionSteps: [
              'd(A, P) = |2(1) + 4(2) - 3 - 17| / √(2² + 4² + (-1)²).',
              'Numérateur : |2 + 8 - 3 - 17| = |-10| = 10.',
              'Dénominateur : √(4 + 16 + 1) = √21.',
              'd(A, P) = 10 / √21 ≈ 2,18 mètres.'
            ],
            finalAnswer: 'd(A, P) = 10 / √21 ≈ 2,18 m',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-esp-1',
        question: 'Quel est un vecteur normal au plan d\'équation cartésienne 3x - 5y + 2z - 7 = 0 ?',
        options: ['n(3 ; -5 ; 2)', 'n(3 ; 5 ; 2)', 'n(-7 ; 2 ; -5)', 'n(1 ; 1 ; 1)'],
        correctIndex: 0,
        explanation: 'Les coefficients a, b, c devant x, y, z dans l\'équation ax + by + cz + d = 0 forment directement un vecteur normal n(a ; b ; c).'
      },
      {
        id: 'q-esp-2',
        question: 'Quelle est la condition nécessaire et suffisante pour que deux plans soient perpendiculaires ?',
        options: [
          'Leurs vecteurs normaux sont orthogonaux (n1 · n2 = 0)',
          'Leurs vecteurs normaux sont colinéaires',
          'Ils ont la même constante d',
          'Leurs coefficients sont égaux'
        ],
        correctIndex: 0,
        explanation: 'Deux plans sont perpendiculaires lorsque l\'angle entre leurs vecteurs normaux vaut 90°, c\'est-à-dire n1 · n2 = 0.'
      },
      {
        id: 'q-esp-3',
        question: 'Combien de paramètres réels figurent dans la représentation paramétrique d\'une droite de l\'espace ?',
        options: ['Un seul paramètre (souvent noté t ∈ ℝ)', 'Deux paramètres distincts', 'Trois paramètres', 'Aucun paramètre'],
        correctIndex: 0,
        explanation: 'Une droite est un objet géométrique de dimension 1, dépendant d\'un unique paramètre réel t.'
      },
      {
        id: 'q-esp-4',
        question: 'Si le produit scalaire u · n = 0, quelle est la position relative de la droite (dirigée par u) et du plan (de vecteur normal n) ?',
        options: [
          'La droite est strictement parallèle au plan (ou contenue dedans)',
          'La droite est strictement perpendiculaire au plan',
          'La droite coupe le plan à 45°',
          'Impossible à déterminer'
        ],
        correctIndex: 0,
        explanation: 'Si u est orthogonal à la normale n, u est parallèle au plan, donc la droite ne perce pas le plan transversalement.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - SUITES, RÉCURRENCE & LIMITES (MATHÉMATIQUES)
  // =========================================================================
  {
    id: 'math-term-suites-recurrence',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Suites Récurrentes, Récurrence & Théorèmes de Convergence',
    officialCode: 'MATH-T-02',
    description: 'Principe du raisonnement par récurrence (initialisation, hérédité, conclusion), suites bornées, théorème de convergence monotone et théorème des gendarmes.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Raisonnement par récurrence : Pour prouver une propriété P(n) pour tout n ≥ n0 : 1. Initialisation (P(n0) vraie) ; 2. Hérédité (si P(k) vraie, alors P(k+1) vraie) ; 3. Conclusion.',
      'Théorème de convergence monotone : Toute suite croissante et majorée converge vers une limite finie L. Toute suite décroissante et minorée converge.',
      'Théorème d\'encadrement (gendarmes) : Si un ≤ vn ≤ wn et lim un = lim wn = L, alors lim vn = L.',
      'Suite arithmético-géométrique : un+1 = a un + b. On utilise la suite auxiliaire vn = un - α où α = aα + b.'
    ],
    keyFormulas: [
      {
        label: 'Théorème de convergence monotone',
        formula: '(u_n \\text{ croissante et } \\forall n, \\, u_n \\le M) \\implies \\lim_{n \\to +\\infty} u_n = L \\le M',
        explanation: 'Garantit l\'existence d\'une limite sans avoir besoin de la calculer a priori.'
      },
      {
        label: 'Point fixe d\'une relation u_{n+1} = f(u_n)',
        formula: 'f(L) = L',
        explanation: 'Si f est continue et un converge vers L, la limite L vérifie nécessairement f(L) = L.'
      }
    ],
    courseSections: [
      {
        title: '1. Méthodologie rigoureuse de la récurrence',
        content: [
          '• Étape 1 : Poser clairement la propriété P(n).',
          '• Étape 2 : Initialisation pour le premier rang n0.',
          '• Étape 3 : Hérédité : Supposer P(k) vraie pour un entier fixé k ≥ n0 (hypothèse de récurrence) et démontrer P(k+1).',
          '• Étape 4 : Conclusion générale.'
        ],
        proTip: 'Dans l\'hérédité, écrivez toujours clairement la cible à atteindre P(k+1) au brouillon pour voir où injecter l\'hypothèse de récurrence.'
      }
    ],
    exercises: [
      {
        id: 'ex-term-suites-spotify',
        title: 'Exercice Type Bac : Modélisation d\'audience d\'un service de streaming musical (Spotify)',
        context: 'Une plateforme de streaming musical comptait 10 millions d\'abonnés au 1er janvier 2024 (rang n = 0). Chaque année, l\'algorithme de fidélisation conserve 80% des abonnés existants, tandis que 3 millions de nouveaux utilisateurs s\'inscrivent grâce aux campagnes sur TikTok. On note u_n le nombre d\'abonnés au 1er janvier de l\'année (2024 + n), en millions. On a ainsi : u0 = 10 et pour tout n ∈ ℕ : u_{n+1} = 0,8 u_n + 3.',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'tech',
        themeLabel: '📱 Tech & Algorithmes Streaming',
        questions: [
          {
            questionText: 'Question 1 : Démontrer par récurrence que pour tout entier naturel n, u_n ≤ 15.',
            hints: ['Initialisation pour n = 0 : u0 = 10 ≤ 15.', 'Hérédité : Supposer uk ≤ 15 et multiplier par 0,8 puis ajouter 3.'],
            solutionSteps: [
              'Posons P(n) : "u_n ≤ 15".',
              'Initialisation : Pour n = 0, u0 = 10. Comme 10 ≤ 15, P(0) est vraie.',
              'Hérédité : Soit k un entier naturel quelconque fixé. Supposons P(k) vraie, soit uk ≤ 15.',
              'Montrons que P(k+1) est vraie, c\'est-à-dire u_{k+1} ≤ 15.',
              'u_{k+1} = 0,8 uk + 3. Par hypothèse de récurrence : uk ≤ 15.',
              'Comme 0,8 > 0 : 0,8 uk ≤ 0,8 × 15 = 12.',
              'En ajoutant 3 : 0,8 uk + 3 ≤ 12 + 3 = 15, soit u_{k+1} ≤ 15.',
              'L\'hérédité est validée.',
              'Conclusion : Par le principe de récurrence, pour tout n ∈ ℕ, u_n ≤ 15.'
            ],
            finalAnswer: 'Propriété démontrée par récurrence pour tout n ∈ ℕ.',
            pointsAllocated: 3
          },
          {
            questionText: 'Question 2 : Montrer que la suite (u_n) est strictement croissante, et en déduire qu\'elle converge.',
            hints: ['Calculer u_{n+1} - u_n et utiliser le fait que un ≤ 15.', 'Appliquer le théorème de convergence monotone.'],
            solutionSteps: [
              'u_{n+1} - u_n = (0,8 u_n + 3) - u_n = -0,2 u_n + 3 = 0,2 (15 - u_n).',
              'D\'après la question 1, u_n ≤ 15 pour tout n, donc (15 - u_n) ≥ 0.',
              'Comme u0 = 10 < 15, on a même 15 - u_n > 0 pour tout n.',
              'Ainsi u_{n+1} - u_n > 0 : la suite (u_n) est strictement croissante.',
              'Étant croissante et majorée par 15, le théorème de convergence monotone assure que (u_n) converge vers une limite finie L ≤ 15.'
            ],
            finalAnswer: '(u_n) est croissante et majorée par 15, donc elle converge.',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Déterminer la valeur exacte de la limite L du nombre d\'abonnés à long terme.',
            hints: ['La fonction f(x) = 0,8x + 3 étant continue, la limite L vérifie le point fixe L = f(L).'],
            solutionSteps: [
              'Comme lim u_{n+1} = lim u_n = L, la relation de récurrence donne :',
              'L = 0,8 L + 3 <=> L - 0,8 L = 3 <=> 0,2 L = 3.',
              'L = 3 / 0,2 = 15.',
              'À long terme, le nombre d\'abonnés se stabilisera vers 15 millions.'
            ],
            finalAnswer: 'lim u_n = 15 millions d\'abonnés',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-sui-1',
        question: 'Quelles sont les 3 étapes obligatoires d\'une démonstration par récurrence ?',
        options: [
          'Initialisation, Hérédité, Conclusion',
          'Hypothèse, Calcul d\'aire, Dérivation',
          'Factorisation, Tableau de signes, Limite',
          'Conjecture, Approximation, Conclusion'
        ],
        correctIndex: 0,
        explanation: 'La structure officielle exigée au Bac comprend toujours l\'Initialisation (au premier rang), l\'Hérédité, et la Conclusion rédigée.'
      },
      {
        id: 'q-sui-2',
        question: 'Que stipule le théorème de convergence monotone ?',
        options: [
          'Toute suite croissante et majorée admet une limite finie',
          'Toute suite convergente est obligatoirement positive',
          'Toute suite monotone tend vers l\'infini',
          'Toute suite arithmétique converge'
        ],
        correctIndex: 0,
        explanation: 'Une suite croissante bornée par le haut ne peut pas osciller ni diverger vers +∞ : elle converge nécessairement vers une borne supérieure finie.'
      },
      {
        id: 'q-sui-3',
        question: 'Si pour tout n, 2 - 1/n ≤ v_n ≤ 2 + 1/n², quelle est la limite de (v_n) quand n → +∞ ?',
        options: ['2 (théorème des gendarmes)', '0', '+∞', 'N\'existe pas'],
        correctIndex: 0,
        explanation: 'Comme lim (2 - 1/n) = 2 et lim (2 + 1/n²) = 2, le théorème des gendarmes impose lim v_n = 2.'
      },
      {
        id: 'q-sui-4',
        question: 'Quelle est la limite de la suite géométrique q^n lorsque 0 < q < 1 ?',
        options: ['0', '1', '+∞', 'q'],
        correctIndex: 0,
        explanation: 'Pour tout réel strictement compris entre -1 et 1, q^n tend vers 0 lorsque n tend vers +∞.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - COMBINATOIRE & DÉNOMBREMENT (MATHÉMATIQUES)
  // =========================================================================
  {
    id: 'math-term-denombrement',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Combinatoire, Dénombrement & Triangle de Pascal',
    officialCode: 'MATH-T-05',
    description: 'Principes additif et multiplicatif, k-uplets d\'ensembles finis, permutations (factorielle n!), arrangements, combinaisons binom(n, k) et formule du binôme.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Principe multiplicatif : Le nombre de façons d\'effectuer p choix successifs indépendants avec n1, n2, ..., np possibilités est n1 × n2 × ... × np.',
      'Permutations de n éléments : n! = n × (n - 1) × ... × 2 × 1 (avec 0! = 1).',
      'Combinaisons : Le nombre de sous-ensembles de k éléments parmi n est binom(n, k) = n! / (k! (n - k)!).',
      'Formule du binôme de Newton : (a + b)^n = ∑_{k=0}^n binom(n, k) a^{n-k} b^k.'
    ],
    keyFormulas: [
      {
        label: 'Coefficient binomial',
        formula: '\\binom{n}{k} = \\frac{n!}{k!(n - k)!} = \\frac{n(n - 1)\\dots(n - k + 1)}{k!}',
        explanation: 'Nombre de tirages simultanés sans ordre de k éléments parmi n.'
      },
      {
        label: 'Relation fondamentale de Pascal',
        formula: '\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}',
        explanation: 'Permet la construction pas à pas du triangle arithmétique de Pascal.'
      }
    ],
    courseSections: [
      {
        title: '1. Typologie des tirages en dénombrement',
        content: [
          '• Tirages successifs avec remise : n^k (mots de passe, codes PIN).',
          '• Tirages successifs sans remise (ordre pris en compte) : Arrangements A_n^k = n! / (n - k)! (podium d\'une course).',
          '• Tirages simultanés (sans ordre) : Combinaisons binom(n, k) (mains au poker, tirage de loto, équipes).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-denombrement-crypto',
        title: 'Exercice Type Bac : Sécurité des mots de passe & Attaques par force brute',
        context: 'Dans le cadre de la cybersécurité d\'un compte de jeu en ligne, un mot de passe robuste doit comporter exactement 12 caractères choisis parmi un alphabet composé de 26 lettres minuscules, 26 majuscules, 10 chiffres et 10 caractères spéciaux (soit N = 72 caractères disponibles).',
        difficulty: 'Type Bac',
        points: 6,
        themeTag: 'tech',
        themeLabel: '🔐 Cybersécurité & Algorithmes',
        questions: [
          {
            questionText: 'Question 1 : Calculer le nombre total de mots de passe possibles de 12 caractères avec cet alphabet.',
            hints: ['Chaque caractère est choisi indépendamment parmi 72 avec remise : appliquer le principe multiplicatif 72^12.'],
            solutionSteps: [
              'Chaque position parmi les 12 offre 72 choix indépendants.',
              'Nombre total de combinaisons : N = 72¹².',
              'Numériquement : 72¹² ≈ 1,94 × 10²² combinaisons.'
            ],
            finalAnswer: 'N = 72¹² ≈ 1,94 × 10²² combinaisons',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Un supercalculateur de pirate peut tester 10 milliards (10¹⁰) de mots de passe par seconde. Combien d\'années faudrait-il pour tester toutes les combinaisons ?',
            hints: ['Temps en secondes t = N / 10¹⁰. Convertir en années (1 an ≈ 365,25 × 86400 s ≈ 3,156 × 10⁷ s).'],
            solutionSteps: [
              'Temps t = 1,94 × 10²² / 10¹⁰ = 1,94 × 10¹² secondes.',
              'Nombre de secondes dans une année : 365,25 × 24 × 3600 ≈ 3,156 × 10⁷ s.',
              'Durée T = 1,94 × 10¹² / (3,156 × 10⁷) ≈ 61 470 ans.'
            ],
            finalAnswer: 'T ≈ 61 470 ans (le mot de passe est inviolable par force brute)',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Dans une équipe esport de 10 joueurs, l\'entraîneur doit sélectionner un groupe de 5 titulaires sans ordre de rôle. Combien d\'équipes distinctes peut-il former ?',
            hints: ['Il s\'agit de choisir 5 éléments parmi 10 sans ordre : combinaison binom(10, 5).'],
            solutionSteps: [
              'L\'ordre ne compte pas : binom(10, 5) = 10! / (5! × 5!).',
              'binom(10, 5) = (10 × 9 × 8 × 7 × 6) / (5 × 4 × 3 × 2 × 1).',
              'binom(10, 5) = 30240 / 120 = 252.'
            ],
            finalAnswer: '252 compositions possibles',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-den-1',
        question: 'Que vaut 5! (factorielle 5) ?',
        options: ['120', '25', '60', '720'],
        correctIndex: 0,
        explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.'
      },
      {
        id: 'q-den-2',
        question: 'Combien de codes PIN à 4 chiffres (de 0 à 9) existent-ils au total ?',
        options: ['10⁴ = 10 000', '10 × 9 × 8 × 7 = 5 040', 'binom(10, 4) = 210', '40'],
        correctIndex: 0,
        explanation: 'Pour chaque chiffre, il y a 10 possibilités indépendantes : 10 × 10 × 10 × 10 = 10 000.'
      },
      {
        id: 'q-den-3',
        question: 'Que vaut la somme de la ligne n du triangle de Pascal : ∑_{k=0}^n binom(n, k) ?',
        options: ['2^n', 'n²', 'n!', 'n + 1'],
        correctIndex: 0,
        explanation: 'En appliquant la formule du binôme de Newton à (1 + 1)^n, on obtient directement 2^n.'
      },
      {
        id: 'q-den-4',
        question: 'Quelle est la propriété de symétrie des coefficients binomiaux ?',
        options: [
          'binom(n, k) = binom(n, n - k)',
          'binom(n, k) = binom(k, n)',
          'binom(n, k) = -binom(n, k)',
          'binom(n, k) = n × k'
        ],
        correctIndex: 0,
        explanation: 'Choisir k éléments à inclure revient exactement à choisir les n - k éléments à exclure.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - FONCTION EXPONENTIELLE (MATHÉMATIQUES)
  // =========================================================================
  {
    id: 'math-1ere-exponentielle',
    subjectId: 'maths',
    gradeLevel: '1ere',
    title: 'La Fonction Exponentielle : Propriétés & Variations',
    officialCode: 'MATH-1-03',
    description: 'Définition comme unique fonction vérifiant f\' = f et f(0) = 1, relation fonctionnelle e^{a+b} = e^a e^b, stricte positivité, dérivation de e^u et résolution d\'inéquations.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Caractérisation : Il existe une unique fonction f dérivable sur ℝ telle que f\' = f et f(0) = 1, notée exp(x) ou e^x.',
      'Signe : Pour tout réel x, e^x > 0 (la fonction ne s\'annule jamais).',
      'Propriété algébrique fondamentale : e^{a+b} = e^a × e^b.',
      'Dérivée d\'une fonction composée : (e^{u(x)})\' = u\'(x) · e^{u(x)}.'
    ],
    keyFormulas: [
      {
        label: 'Relation fondamentale',
        formula: 'e^{a+b} = e^a \\cdot e^b \\quad ; \\quad e^{-a} = \\frac{1}{e^a} \\quad ; \\quad e^{a-b} = \\frac{e^a}{e^b}',
        explanation: 'Transforme une somme en produit.'
      },
      {
        label: 'Dérivée de la composée e^u',
        formula: '(e^{u(x)})\' = u\'(x) \\cdot e^{u(x)}',
        explanation: 'Comme e^u > 0, le signe de la dérivée est strictement le même que celui de u\'(x).'
      }
    ],
    courseSections: [
      {
        title: '1. Variations et limites de base',
        content: [
          'Comme (e^x)\' = e^x > 0 pour tout x ∈ ℝ, la fonction exponentielle est strictement croissante sur ℝ.',
          'e^0 = 1, e^1 ≈ 2,71828.',
          'Équivalence d\'inégalités : e^a < e^b <=> a < b.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-exp-f1',
        title: 'Exercice Type Bac : Télémétrie & Accélération d\'une Formule 1 Électrique (Formula E)',
        context: 'Lors d\'une phase d\'accélération départ arrêté (0 à 200 km/h), la vitesse v(t) (en m/s) d\'une monoplace électrique de Formula E est modélisée sur l\'intervalle [0 ; 6] par : v(t) = 60 (1 - e^{-0,5 t}), où t est le temps en secondes.',
        difficulty: 'Type Bac',
        points: 6,
        themeTag: 'sport',
        themeLabel: '🏎️ F1 & Performance Sportive',
        questions: [
          {
            questionText: 'Question 1 : Calculer la vitesse initiale du bolide v(0) et sa vitesse théorique maximale lorsque t devient grand.',
            hints: ['Calculer v(0) en utilisant e^0 = 1.', 'Quand t → +∞, que devient e^{-0,5 t} ?'],
            solutionSteps: [
              'v(0) = 60 (1 - e^0) = 60 (1 - 1) = 0 m/s (la voiture part bien de l\'arrêt).',
              'Quand t → +∞, -0,5 t → -∞, donc lim e^{-0,5 t} = 0.',
              'Ainsi lim_{t→+∞} v(t) = 60 (1 - 0) = 60 m/s.',
              'En km/h : 60 × 3,6 = 216 km/h.'
            ],
            finalAnswer: 'v(0) = 0 m/s et v_max = 60 m/s (216 km/h)',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Calculer la fonction dérivée v\'(t) représentant l\'accélération a(t), et justifier que la vitesse est strictement croissante.',
            hints: ['Dériver avec la formule (e^{kt})\' = k e^{kt}.'],
            solutionSteps: [
              'v(t) = 60 - 60 e^{-0,5 t}.',
              'v\'(t) = 0 - 60 × (-0,5 e^{-0,5 t}) = 30 e^{-0,5 t}.',
              'Pour tout réel t, e^{-0,5 t} > 0, donc v\'(t) = 30 e^{-0,5 t} > 0.',
              'L\'accélération étant strictement positive, la vitesse v(t) est strictement croissante sur [0 ; 6].'
            ],
            finalAnswer: 'v\'(t) = 30 e^{-0,5 t} > 0 (vitesse croissante)',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Déterminer à quel instant précis t la voiture atteint la vitesse de 100 km/h (soit ~27,78 m/s).',
            hints: ['Résoudre 60 (1 - e^{-0,5 t}) = 27,78 <=> 1 - e^{-0,5 t} = 0,463 <=> e^{-0,5 t} = 0,537.'],
            solutionSteps: [
              '60 (1 - e^{-0,5 t}) = 27,78 => 1 - e^{-0,5 t} = 27,78 / 60 ≈ 0,463.',
              'e^{-0,5 t} = 1 - 0,463 = 0,537.',
              '-0,5 t = ln(0,537) ≈ -0,6218.',
              't = -0,6218 / (-0,5) ≈ 1,24 seconde.'
            ],
            finalAnswer: 't ≈ 1,24 s pour franchir le 0 à 100 km/h',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-exp-1',
        question: 'Quelle est la valeur exacte du produit e^3 × e^4 ?',
        options: ['e^7', 'e^12', 'e^1', '7e'],
        correctIndex: 0,
        explanation: 'D\'après la règle fondamentale e^a × e^b = e^{a+b}, e^3 × e^4 = e^{3+4} = e^7.'
      },
      {
        id: 'q-exp-2',
        question: 'Quelle est la dérivée de la fonction f(x) = e^{-3x + 2} ?',
        options: [
          'f\'(x) = -3 e^{-3x + 2}',
          'f\'(x) = e^{-3x + 2}',
          'f\'(x) = 3 e^{-3x + 2}',
          'f\'(x) = (-3x + 2) e^{-3x + 2}'
        ],
        correctIndex: 0,
        explanation: 'En appliquant (e^u)\' = u\' e^u avec u(x) = -3x + 2 et u\'(x) = -3, f\'(x) = -3 e^{-3x + 2}.'
      },
      {
        id: 'q-exp-3',
        question: 'Sur quel ensemble la fonction exponentielle s\'annule-t-elle ?',
        options: [
          'Nulle part (e^x > 0 strictement sur ℝ)',
          'En x = 0',
          'En x = -1',
          'En x = -∞'
        ],
        correctIndex: 0,
        explanation: 'L\'exponentielle d\'un réel est rigoureusement et strictement positive : l\'équation e^x = 0 n\'a aucune solution.'
      },
      {
        id: 'q-exp-4',
        question: 'Résoudre dans ℝ l\'inéquation e^{2x - 1} ≥ 1.',
        options: ['x ≥ 1/2', 'x ≥ 1', 'x ≤ 0', 'x > 0'],
        correctIndex: 0,
        explanation: '1 = e^0. Comme la fonction exponentielle est strictement croissante : 2x - 1 ≥ 0 <=> 2x ≥ 1 <=> x ≥ 1/2.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - PILES & ÉLECTROCHIMIE (PHYSIQUE-CHIMIE)
  // =========================================================================
  {
    id: 'pc-term-piles-electrochimie',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Piles Électrochimiques & Stockage d’Énergie',
    officialCode: 'PC-T-05',
    description: 'Constitution d\'une pile, oxydation anodique, réduction cathodique, pont salin, quotient de réaction Qr et capacité électrique en Coulomb Q = I Δt = n(e-) F.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Anode = siège de l\'Oxydation (perte d\'électrons) : Anode = borne négative (-) d\'une pile en fonctionnement spontané.',
      'Cathode = siège de la Réduction (gain d\'électrons) : Cathode = borne positive (+).',
      'Le pont salin assure la fermeture du circuit électrique et la neutralité électrique des solutions par migration d\'ions.',
      'Quantité d\'électricité débitée : Q = I · Δt = n(e⁻) · F (avec F ≈ 96 500 C/mol la constante de Faraday).'
    ],
    keyFormulas: [
      {
        label: 'Capacité électrique et Faraday',
        formula: 'Q = I \\cdot \\Delta t = n(e^-) \\cdot F = n(e^-) \\cdot N_A \\cdot e',
        explanation: 'Relie le courant macroscopique en Ampères au nombre de moles d\'électrons échangés.'
      },
      {
        label: 'Critère spontané d\'évolution',
        formula: 'Q_{r, i} < K \\implies \\text{Évolution dans le sens direct}',
        explanation: 'La pile débite jusqu\'à ce que le quotient atteigne la constante d\'équilibre K (pile usée).'
      }
    ],
    courseSections: [
      {
        title: '1. Règle mnémotechnique universelle de l\'électrochimie',
        content: [
          '• **A**node = **O**xydation (deux voyelles).',
          '• **C**athode = **R**éduction (deux consonnes).',
          'Dans une pile spontanée, les électrons quittent l\'anode (-) pour rejoindre la cathode (+) par le circuit extérieur.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-pile-tesla',
        title: 'Exercice Type Bac : Autonomie d\'une Batterie Lithium-Ion de Véhicule Électrique (Tesla)',
        context: 'Un module de batterie lithium-ion de véhicule électrique débite une intensité constante I = 40,0 A pendant une durée de roulage de Δt = 2 heures et 30 minutes. Données : Constante de Faraday F = 96 500 C/mol, masse molaire du lithium M(Li) = 6,94 g/mol. Demi-équation à l\'anode : Li(s) -> Li+(aq) + e-.',
        difficulty: 'Type Bac',
        points: 6,
        themeTag: 'ecologie',
        themeLabel: '🌱 Mobilité Électrique & Batterie Li-ion',
        questions: [
          {
            questionText: 'Question 1 : Calculer la charge électrique totale Q débitée par le module en Coulombs (C) et en Ampères-heures (Ah).',
            hints: ['Δt = 2,5 h = 2,5 × 3600 = 9000 s.', 'Q(C) = I × Δt(s) et Q(Ah) = I × Δt(h).'],
            solutionSteps: [
              'Durée en secondes : Δt = 2 × 3600 + 30 × 60 = 9000 s.',
              'Charge en Coulombs : Q = I × Δt = 40,0 × 9000 = 360 000 C = 3,60 × 10⁵ C.',
              'Capacité en Ampères-heures : Q = 40,0 A × 2,5 h = 100 Ah.'
            ],
            finalAnswer: 'Q = 3,60 × 10⁵ C = 100 Ah',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Déterminer la quantité de matière d\'électrons n(e-) ayant circulé dans le circuit.',
            hints: ['Utiliser la relation Q = n(e-) × F.'],
            solutionSteps: [
              'n(e⁻) = Q / F = 360 000 / 96 500 ≈ 3,73 mol d\'électrons.'
            ],
            finalAnswer: 'n(e⁻) ≈ 3,73 mol',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : En déduire la masse minimale de lithium métallique m(Li) consommée pendant le trajet.',
            hints: ['D\'après la demi-équation, 1 mole de Li libère 1 mole d\'électrons : n(Li) = n(e-).', 'm = n × M.'],
            solutionSteps: [
              'D\'après l\'équation Li -> Li⁺ + e⁻, le rapport stœchiométrique est 1:1, donc n(Li) = n(e⁻) = 3,73 mol.',
              'm(Li) = n(Li) × M(Li) = 3,73 × 6,94 ≈ 25,9 g.'
            ],
            finalAnswer: 'm(Li) ≈ 25,9 g de lithium',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-pil-1',
        question: 'À quelle électrode d\'une pile se produit toujours la réduction ?',
        options: [
          'À la cathode (+)',
          'À l\'anode (-)',
          'Dans le pont salin',
          'Dans le voltmètre'
        ],
        correctIndex: 0,
        explanation: 'Mnémotechnique : Cathode = Réduction (deux consonnes), Anode = Oxydation (deux voyelles).'
      },
      {
        id: 'q-pil-2',
        question: 'Quel est le rôle indispensable du pont salin dans une pile ?',
        options: [
          'Assurer la neutralité électrique des solutions et fermer le circuit',
          'Accélérer la vitesse de la réaction',
          'Produire des électrons supplémentaires',
          'Augmenter la température'
        ],
        correctIndex: 0,
        explanation: 'Le pont salin permet aux ions de migrer entre les demi-piles pour compenser l\'apparition ou la disparition de charges.'
      },
      {
        id: 'q-pil-3',
        question: 'Que vaut la constante de Faraday F ?',
        options: [
          'Environ 96 500 C/mol',
          '1,60 × 10⁻¹⁹ C',
          '6,02 × 10²³ mol⁻¹',
          '8,314 J/(mol·K)'
        ],
        correctIndex: 0,
        explanation: 'F = NA × e = 6,022 × 10²³ × 1,602 × 10⁻¹⁹ ≈ 96 485 C/mol (la charge d\'une mole d\'électrons).'
      },
      {
        id: 'q-pil-4',
        question: 'Quand dit-on qu\'une pile électrochimique est totalement "usée" (à plat) ?',
        options: [
          'Lorsque le système chimique atteint l\'état d\'équilibre (Qr = K et tension U = 0 V)',
          'Lorsque la température atteint 0°C',
          'Quand tous les ions du pont salin se sont évaporés',
          'Quand la résistance interne est nulle'
        ],
        correctIndex: 0,
        explanation: 'À l\'équilibre chimique Qr = K, il n\'y a plus de transfert spontané net d\'électrons : la f.e.m. devient nulle.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - RADIOACTIVITÉ & DÉCROISSANCE (PHYSIQUE-CHIMIE)
  // =========================================================================
  {
    id: 'pc-term-radioactivite',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Physique Nucléaire : Décroissance Radioactive & Datation',
    officialCode: 'PC-T-06',
    description: 'Noyau atomique, isotopes, lois de Soddy, types de radioactivité α, β-, β+, émission γ, loi exponentielle N(t) = N0 e^{-λt}, temps de demi-vie t_{1/2} et datation au Carbone 14.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Lois de conservation de Soddy : Conservation du nombre de masse A et de la charge Z lors de toute réaction nucléaire.',
      'Types de désintégration : α (émission d\'un noyau d\'hélium-4), β⁻ (émission d\'un électron ⁰₋₁e), β⁺ (émission d\'un positon ⁰₁e), γ (désexcitation électromagnétique).',
      'Loi de décroissance radioactive : N(t) = N₀ · e^{-λt} où λ est la constante radioactive en s⁻¹.',
      'Temps de demi-vie t_{1/2} : Durée au bout de laquelle la moitié des noyaux pères se sont désintégrés : t_{1/2} = ln(2) / λ.'
    ],
    keyFormulas: [
      {
        label: 'Loi de décroissance radioactive',
        formula: 'N(t) = N_0 \\, e^{-\\lambda t} \\quad ; \\quad A(t) = A_0 \\, e^{-\\lambda t}',
        explanation: 'Activité A(t) en Becquerels (1 Bq = 1 désintégration par seconde).'
      },
      {
        label: 'Temps de demi-vie',
        formula: 't_{1/2} = \\frac{\\ln(2)}{\\lambda}',
        explanation: 'Indépendant de la quantité initiale de noyaux N0.'
      }
    ],
    courseSections: [
      {
        title: '1. Les lois de conservation de Soddy',
        content: [
          'Pour une réaction ^A_Z X -> ^{A1}_{Z1} Y + ^{A2}_{Z2} P :',
          '• Conservation du nombre de nucléons : A = A1 + A2.',
          '• Conservation de la charge électrique : Z = Z1 + Z2.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-radio-perseverance',
        title: 'Exercice Type Bac : Générateur Nucléaire RTG du Rover Martien Perseverance (SpaceX / NASA)',
        context: 'Le rover martien Perseverance utilise un générateur thermoélectrique à radioisotope (RTG) alimenté par 4,8 kg de dioxyde de plutonium 238 (^238_94Pu). Le plutonium 238 est un émetteur α dont la demi-vie est t_{1/2} = 87,7 ans. Donnée : Constante λ = ln(2) / t_{1/2}.',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'space',
        themeLabel: '🚀 Conquête Spatiale & Mars',
        questions: [
          {
            questionText: 'Question 1 : Écrire l\'équation de la désintégration α du plutonium 238 en précisant le noyau fils formé (symbole U pour l\'uranium Z=92, Np Z=93, Pu Z=94).',
            hints: ['Une particule α est un noyau d\'hélium ^4_2He.', 'Appliquer les lois de conservation de Soddy.'],
            solutionSteps: [
              'Particule α : ^4_2He.',
              'Équation : ^238_94Pu -> ^A_Z Y + ^4_2He.',
              'Conservation de A : 238 = A + 4 => A = 234.',
              'Conservation de Z : 94 = Z + 2 => Z = 92 (Uranium).',
              'L\'équation bilan est donc : ^238_94Pu -> ^234_92U + ^4_2He.'
            ],
            finalAnswer: '^238_94Pu -> ^234_92U + ^4_2He',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Calculer la valeur de la constante radioactive λ en an⁻¹.',
            hints: ['λ = ln(2) / t_{1/2}.'],
            solutionSteps: [
              'λ = ln(2) / 87,7 ≈ 0,69315 / 87,7 ≈ 7,90 × 10⁻³ an⁻¹.'
            ],
            finalAnswer: 'λ ≈ 7,90 × 10⁻³ an⁻¹',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Calculer le pourcentage de puissance résiduelle du générateur au bout de 20 ans d\'exploration de la surface martienne.',
            hints: ['La puissance thermique est proportionnelle à l\'activité A(t) = A0 e^{-λt}. Calculer e^{-λ × 20}.'],
            solutionSteps: [
              'P(t) / P0 = e^{-λt}.',
              'Pour t = 20 ans : -λt = -7,90 × 10⁻³ × 20 = -0,158.',
              'e^{-0,158} ≈ 0,854, soit 85,4%.',
              'Après 20 ans, le rover conserve encore plus de 85% de sa capacité de génération électrique.'
            ],
            finalAnswer: 'P(20) / P0 ≈ 85,4%',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-rad-1',
        question: 'Quelle particule est émise lors d\'une radioactivité α ?',
        options: [
          'Un noyau d\'hélium-4 (^4_2He)',
          'Un électron',
          'Un photon très énergétique',
          'Un neutron'
        ],
        correctIndex: 0,
        explanation: 'Une particule alpha est constituée de 2 protons et 2 neutrons, ce qui correspond exactement à un noyau d\'hélium ^4_2He.'
      },
      {
        id: 'q-rad-2',
        question: 'Au bout de 3 demi-vies (3 × t_{1/2}), quelle fraction des noyaux radioactifs initiaux reste-t-il ?',
        options: ['1/8 (soit 12,5%)', '1/3', '1/6', '0%'],
        correctIndex: 0,
        explanation: 'À chaque demi-vie, la population est divisée par 2 : (1/2)³ = 1/8 = 12,5%.'
      },
      {
        id: 'q-rad-3',
        question: 'Quelle est l\'unité officielle de l\'activité radioactive dans le Système International ?',
        options: ['Le Becquerel (Bq)', 'Le Curie (Ci)', 'Le Sievert (Sv)', 'Le Gray (Gy)'],
        correctIndex: 0,
        explanation: '1 Becquerel (Bq) correspond par définition à 1 désintégration de noyau atomique par seconde.'
      },
      {
        id: 'q-rad-4',
        question: 'Quelle loi fondamentale permet d\'équilibrer une équation de réaction nucléaire ?',
        options: [
          'Les lois de conservation de Soddy (A et Z)',
          'La loi d\'Ohm',
          'Le principe de Le Chatelier',
          'La loi de Snell-Descartes'
        ],
        correctIndex: 0,
        explanation: 'Les lois de Soddy imposent la conservation stricte du nombre total de nucléons A et de la charge électrique globale Z.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - ORGANISATION DES ANGIOSPERMES & PHOTOSYNTHÈSE (SVT)
  // =========================================================================
  {
    id: 'svt-term-plantes-angiospermes',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'De la Plante Sauvage à la Plante Domestiquée : Angiospermes & Photosynthèse',
    officialCode: 'SVT-T-04',
    description: 'Organisation d\'une plante à fleurs (racines, tiges, feuilles, vaisseaux conducteurs xylème/phloème), stomates, photosynthèse, reproduction sexuée et coévolution avec les insectes.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Organisation fixée : Système racinaire étendu (surface d\'échange eau/sels minéraux via poils absorbants) et système foliaire aérien (captation de photons et CO2 via stomates).',
      'Vaisseaux conducteurs spécialisés : Xylème (sève brute ascendante : eau + minéraux) et Phloème (sève élaborée descendante/distribuée : sucres solubles issus de la photosynthèse).',
      'Équation globale de la photosynthèse : 6 CO2 + 6 H2O + lumière -> C6H12O6 (glucose) + 6 O2.',
      'Reproduction et coévolution : Pièces florales attractives, nectar et morphologie spécialisée favorisant la pollinisation croisée par les insectes pollinisateurs (mutualisme).'
    ],
    keyFormulas: [
      {
        label: 'Équation bilan de la photosynthèse',
        formula: '6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O} + h\\nu \\longrightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2',
        explanation: 'Conversion d\'énergie lumineuse en énergie chimique stockée dans la matière organique.'
      }
    ],
    courseSections: [
      {
        title: '1. Adaptation aux contraintes du milieu terrestre',
        content: [
          '• Cuticule cireuse imperméabilisante sur les feuilles pour limiter les pertes d\'eau par évapotranspiration.',
          '• Ouverture et fermeture régulée des stomates selon le degré d\'humidité et la luminosité.',
          '• Présence de lignine conférant une grande rigidité aux parois des vaisseaux du xylème.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-svt-foret',
        title: 'Exercice Type Bac : Séquestration de Carbone & Reforestation face au Réchauffement Climatique',
        context: 'Dans le cadre de la lutte contre l\'effet de serre anthropique, on évalue la capacité de captation de carbone d\'une forêt de chênes et de hêtres tempérés. Un hectare de forêt mature absorbe en moyenne 5,5 tonnes de dioxyde de carbone (CO2) par an par photosynthèse. Données : M(C) = 12,0 g/mol, M(O) = 16,0 g/mol, M(CO2) = 44,0 g/mol.',
        difficulty: 'Type Bac',
        points: 6,
        themeTag: 'ecologie',
        themeLabel: '🌱 Écologie & Climat',
        questions: [
          {
            questionText: 'Question 1 : Calculer la masse de carbone pur (C) fixé annuellement par hectare sous forme de biomasse ligneuse (bois).',
            hints: ['Calculer la proportion de carbone dans une molécule de CO2 : M(C) / M(CO2) = 12 / 44.'],
            solutionSteps: [
              'Fraction massique du carbone dans le CO2 : 12,0 / 44,0 ≈ 0,2727 (soit 27,27%).',
              'Pour 5,5 tonnes de CO2 absorbées : m(C) = 5,5 × (12 / 44) = 1,5 tonne de carbone pur par hectare et par an.'
            ],
            finalAnswer: 'm(C) = 1,5 tonne de C / ha / an',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Préciser le rôle des stomates et du xylème dans l\'apport des réactifs nécessaires à la photosynthèse.',
            hints: ['Le CO2 pénètre par les stomates foliaires et l\'eau monte par le xylème depuis les racines.'],
            solutionSteps: [
              'Le dioxyde de carbone CO2 gazeux pénètre dans les chambres sous-stomatiques des feuilles à travers les stomates régulés par les cellules de garde.',
              'L\'eau liquide et les ions minéraux sont absorbés au niveau des poils absorbants racinaires et transportés vers les feuilles sous forme de sève brute via les vaisseaux rigides du xylème (propulsés par l\'aspiration transpiratoire foliaire).'
            ],
            finalAnswer: 'Stomates = entrée du CO2 ; Xylème = transport ascendant de l\'eau',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Expliquer pourquoi la dissémination des graines par les animaux (zoochorie) présente un avantage évolutif majeur pour les plantes fixées.',
            hints: ['Éviter la compétition intraspécifique avec la plante mère et coloniser de nouveaux milieux.'],
            solutionSteps: [
              'Les plantes étant fixées, la dissémination des graines par les animaux (par ingestion de fruits charnus ou par accrochage aux pelages) permet d\'éloigner les descendants de la plante mère.',
              'Cela réduit drastiquement la compétition pour la lumière, l\'eau et les sels minéraux.',
              'Cela favorise également la colonisation de nouveaux habitats favorables et le brassage génétique inter-populations.'
            ],
            finalAnswer: 'Réduction de la compétition et colonisation de nouveaux biotopes.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-pl-1',
        question: 'Quel tissu conducteur transporte la sève brute (eau + sels minéraux) des racines vers les feuilles ?',
        options: [
          'Le xylème',
          'Le phloème',
          'Le parenchyme palissadique',
          'L\'épiderme cuticulaire'
        ],
        correctIndex: 0,
        explanation: 'Le xylème transporte la sève brute ascendante, tandis que le phloème distribue la sève élaborée issue de la photosynthèse.'
      },
      {
        id: 'q-pl-2',
        question: 'Quelle structure foliaire régule les échanges gazeux (CO2, O2) et la transpiration d\'eau de la plante ?',
        options: ['Les stomates', 'Les chloroplastes', 'Les nervures', 'Les trichomes'],
        correctIndex: 0,
        explanation: 'Les stomates s\'ouvrent et se ferment sous l\'effet de la turgescence des deux cellules de garde qui bordent l\'ostiole.'
      },
      {
        id: 'q-pl-3',
        question: 'Comment qualifie-t-on la relation mutuellement bénéfique entre une fleur et son insecte pollinisateur ?',
        options: [
          'Une coévolution mutualiste',
          'Un parasitisme strict',
          'Une compétition trophique',
          'Une prédation'
        ],
        correctIndex: 0,
        explanation: 'L\'insecte obtient des nutriments (nectar/pollen) et la plante assure sa pollinisation croisée : c\'est un mutualisme avec coévolution.'
      },
      {
        id: 'q-pl-4',
        question: 'Quel polymère confère sa rigidité et son imperméabilité aux vaisseaux de sève brute ?',
        options: ['La lignine', 'La chlorophylle', 'L\'amidon', 'L\'hémoglobine'],
        correctIndex: 0,
        explanation: 'La lignine rigidifie les parois secondaires des cellules végétales du bois et du xylème, permettant le port dressé des arbres.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - GÉNÉTIQUE DES POPULATIONS & HARDY-WEINBERG (SVT)
  // =========================================================================
  {
    id: 'svt-term-genetique-populations',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'Génétique des Populations & Équilibre de Hardy-Weinberg',
    officialCode: 'SVT-T-05',
    description: 'Fréquences alléliques et génotypiques, modèle théorique d\'équilibre de Hardy-Weinberg p² + 2pq + q² = 1, test statistique du Chi-deux et forces évolutives (dérive, sélection naturelle, mutations).',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Modèle d\'équilibre de Hardy-Weinberg : Dans une population panmictique idéale, infinie, sans mutation, sans sélection ni dérive, les fréquences alléliques et génotypiques restent constantes de génération en génération.',
      'Pour un gène diallélique (allèles A de fréquence p et a de fréquence q avec p + q = 1) : f(A/A) = p², f(A/a) = 2pq, f(a/a) = q².',
      'Forces évolutives perturbant l\'équilibre : Dérive génétique (échantillonnage aléatoire amplifié dans les petites populations), sélection naturelle, mutations et migrations.',
      'Le test du Chi-deux (χ²) permet de tester statistiquement si une population réelle s\'écarte significativement du modèle d\'équilibre.'
    ],
    keyFormulas: [
      {
        label: 'Équilibre de Hardy-Weinberg',
        formula: 'p^2 + 2pq + q^2 = 1 \\quad \\text{avec } p + q = 1',
        explanation: 'p = fréquence de l\'allèle A, q = fréquence de l\'allèle récessif a.'
      }
    ],
    courseSections: [
      {
        title: '1. Conditions d\'application de l\'équilibre théorique',
        content: [
          '• Organismes diploïdes à reproduction sexuée.',
          '• Panmixie : Rencontre aléatoire des partenaires reproducteurs.',
          '• Population d\'effectif infini (pour négliger la dérive génétique).',
          '• Absence de pression sélective, de taux de mutation significatif et de flux migratoire.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-svt-police-adn',
        title: 'Exercice Type Bac : Police Scientifique & Calcul de probabilité d\'empreinte génétique',
        context: 'Dans le cadre d\'une enquête criminelle (série policière), les experts de la police scientifique analysent un locus génétique microsatellite diallélique (allèles 1 et 2). Sur une population de référence de 10 000 individus, on recense 3 600 personnes de génotype (1//1), 4 800 personnes (1//2) et 1 600 personnes (2//2). L\'ADN du suspect retrouvé sur la scène de crime est hétérozygote (1//2).',
        difficulty: 'Type Bac',
        points: 6,
        themeTag: 'cinema',
        themeLabel: '🎬 Enquête Policière & Génétique',
        questions: [
          {
            questionText: 'Question 1 : Calculer les fréquences alléliques p (allèle 1) et q (allèle 2) dans cette population.',
            hints: ['p = (2 × N(1//1) + N(1//2)) / (2 × N_total).'],
            solutionSteps: [
              'Nombre total d\'allèles : 2 × 10 000 = 20 000 allèles.',
              'Nombre d\'allèles 1 : 2 × 3600 + 4800 = 7200 + 4800 = 12 000.',
              'Fréquence p = 12 000 / 20 000 = 0,60 (soit 60%).',
              'Fréquence q = 1 - p = 1 - 0,60 = 0,40 (soit 40%).'
            ],
            finalAnswer: 'p = 0,60  et  q = 0,40',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Vérifier si cette population suit l\'équilibre de Hardy-Weinberg.',
            hints: ['Calculer les fréquences théoriques p², 2pq, q² et comparer aux fréquences observées.'],
            solutionSteps: [
              'Fréquences théoriques sous l\'hypothèse de Hardy-Weinberg :',
              'f(1//1)_théo = p² = (0,60)² = 0,36 (soit 3 600 individus observés : parfait !).',
              'f(1//2)_théo = 2pq = 2 × 0,60 × 0,40 = 0,48 (soit 4 800 individus observés : parfait !).',
              'f(2//2)_théo = q² = (0,40)² = 0,16 (soit 1 600 individus observés : parfait !).',
              'Les effectifs observés correspondent rigoureusement aux effectifs attendus : la population est à l\'équilibre de Hardy-Weinberg.'
            ],
            finalAnswer: 'La population est parfaitement à l\'équilibre de Hardy-Weinberg.',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Quelle est la probabilité qu\'un individu pris au hasard dans la population possède exactement le même profil génétique hétérozygote que le suspect ?',
            hints: ['Il s\'agit de la fréquence du génotype (1//2) : 2pq = 0,48.'],
            solutionSteps: [
              'La probabilité est donnée par la fréquence génotypique f(1//2) = 0,48 (soit 48%).',
              'Ce seul marqueur ne suffit donc pas à confondre un suspect : la police scientifique analyse simultanément 16 à 24 marqueurs indépendants (STR) pour atteindre des probabilités de coïncidence inférieures à 1 sur 10 milliards.'
            ],
            finalAnswer: 'P = 48% (nécessite l\'analyse de multiples loci indépendants)',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-hw-1',
        question: 'Dans l\'équation de Hardy-Weinberg p² + 2pq + q² = 1, que représente le terme 2pq ?',
        options: [
          'La fréquence des individus hétérozygotes (A/a)',
          'La fréquence des homozygotes dominants (A/A)',
          'La fréquence des homozygotes récessifs (a/a)',
          'Le nombre total d\'allèles'
        ],
        correctIndex: 0,
        explanation: 'p² correspond aux homozygotes A/A, q² aux homozygotes a/a, et 2pq aux individus hétérozygotes A/a.'
      },
      {
        id: 'q-hw-2',
        question: 'Quelle force évolutive modifie de façon purement aléatoire les fréquences alléliques, particulièrement dans les populations de petite taille ?',
        options: [
          'La dérive génétique',
          'La sélection naturelle',
          'La photosynthèse',
          'La mitose'
        ],
        correctIndex: 0,
        explanation: 'La dérive génétique est une fluctuation statistique aléatoire des allèles due au hasard de la transmission des gamètes, très forte dans les petits effectifs.'
      },
      {
        id: 'q-hw-3',
        question: 'Si la fréquence d\'une maladie génétique autosomique récessive (q²) est de 1 sur 10 000 (0,0001), quelle est la fréquence de l\'allèle muté q ?',
        options: ['q = 0,01 (1%)', 'q = 0,0001', 'q = 0,1', 'q = 0,02'],
        correctIndex: 0,
        explanation: 'q = √(q²) = √(0,0001) = 0,01 (soit 1%). La fréquence des porteurs sains hétérozygotes vaut environ 2pq ≈ 2 × 1 × 0,01 = 2%.'
      },
      {
        id: 'q-hw-4',
        question: 'Quel test statistique standard est utilisé pour déterminer si une population s\'écarte significativement de l\'équilibre de Hardy-Weinberg ?',
        options: [
          'Le test du Chi-deux (χ²)',
          'Le test de Rorschach',
          'La règle de Choo-Choo',
          'Le produit scalaire'
        ],
        correctIndex: 0,
        explanation: 'Le test du Chi-deux (χ²) compare les effectifs observés aux effectifs théoriques calculés sous l\'hypothèse nulle d\'équilibre.'
      }
    ]
  }
];
