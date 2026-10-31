import { Chapter } from '../types';

export const ADVANCED_CHAPTERS: Chapter[] = [
  // =========================================================================
  // TERMINALE - MATHÉMATIQUES : LIMITES & CROISSANCES COMPARÉES
  // =========================================================================
  {
    id: 'math-term-suites-limites',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Limites de Fonctions, Asymptotes & Croissances Comparées',
    officialCode: 'MATH-T-04',
    description: 'Théorèmes de comparaison et d\'encadrement (gendarmes), opérations sur les limites, formes indéterminées, asymptotes horizontales, verticales et obliques.',
    estimatedMinutes: 50,
    summaryHighlights: [
      '4 formes indéterminées fondamentales : ∞ - ∞, 0 × ∞, 0/0, ∞/∞.',
      'Théorème d\'encadrement (des gendarmes) : Si g(x) ≤ f(x) ≤ h(x) et lim g = lim h = L, alors lim f = L.',
      'Asymptote horizontale : si lim_{x→±∞} f(x) = L, la droite y = L est asymptote horizontale.',
      'Asymptote verticale : si lim_{x→a} f(x) = ±∞, la droite x = a est asymptote verticale.',
      'Croissances comparées : L\'exponentielle l\'emporte sur toute puissance, qui l\'emporte sur le logarithme en +∞.'
    ],
    keyFormulas: [
      {
        label: 'Croissances comparées en +∞',
        formula: '\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty \\quad ; \\quad \\lim_{x \\to +\\infty} \\frac{\\ln x}{x^n} = 0 \\quad (n > 0)',
        explanation: 'Permet de lever instantanément les indéterminations sans dériver.'
      },
      {
        label: 'Limite en 0 de x^n ln(x)',
        formula: '\\lim_{x \\to 0^+} x^n \\ln x = 0 \\quad (n > 0)',
        explanation: 'La puissance de x domine le logarithme au voisinage de 0.'
      }
    ],
    courseSections: [
      {
        title: '1. Méthodes pour lever les formes indéterminées',
        content: [
          '• Pour un quotient de polynômes en ±∞ : factoriser par le terme de plus haut degré au numérateur et au dénominateur.',
          '• Pour des expressions avec racines carrées : multiplier et diviser par la quantité conjuguée.',
          '• Pour des fonctions transcendantes : utiliser les croissances comparées ou le taux d\'accroissement.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-lim-bac',
        title: 'Problème Type Bac : Étude asymptotique et croissances comparées',
        context: 'Soit la fonction f définie sur ]0 ; +∞[ par f(x) = (2x - 1) e^(-x) + 3.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. Déterminer la limite de f en 0 par valeurs supérieures.',
            hints: ['Calculer séparément la limite de 2x - 1 et de e^(-x) en 0.'],
            solutionSteps: [
              'lim_{x→0^+} (2x - 1) = -1.',
              'lim_{x→0^+} e^(-x) = e^0 = 1.',
              'Par produit : lim_{x→0^+} (2x - 1) e^(-x) = -1 × 1 = -1.',
              'Puis par somme avec 3 : lim_{x→0^+} f(x) = -1 + 3 = 2.'
            ],
            finalAnswer: 'lim_{x→0^+} f(x) = 2 (pas d\'asymptote verticale en 0).',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Développer l\'expression (2x - 1) e^(-x) et déterminer la limite de f en +∞.',
            hints: ['Écrire 2x e^(-x) = 2 (x / e^x) et utiliser la croissance comparée.'],
            solutionSteps: [
              'f(x) = 2x e^(-x) - e^(-x) + 3 = 2 (x / e^x) - e^(-x) + 3.',
              'Par croissance comparée : lim_{x→+∞} (e^x / x) = +∞, donc lim_{x→+∞} (x / e^x) = 0.',
              'De plus, lim_{x→+∞} e^(-x) = 0.',
              'Par somme : lim_{x→+∞} f(x) = 2(0) - 0 + 3 = 3.'
            ],
            finalAnswer: 'lim_{x→+∞} f(x) = 3.',
            pointsAllocated: 1.5,
            bacTrap: 'Citer explicitement la croissance comparée au Bac pour obtenir la totalité des points.'
          },
          {
            questionText: '3. En déduire l\'existence d\'une asymptote à la courbe Cf en +∞ et préciser sa position relative par rapport à Cf.',
            hints: ['Étudier le signe de f(x) - 3.'],
            solutionSteps: [
              'Comme lim_{x→+∞} f(x) = 3, la droite (D) d\'équation y = 3 est asymptote horizontale à Cf en +∞.',
              'Position relative : f(x) - 3 = (2x - 1) e^(-x).',
              'Comme e^(-x) > 0 pour tout x, f(x) - 3 est du signe de 2x - 1.',
              'Pour x > 1/2, 2x - 1 > 0 donc Cf est au-dessus de (D). Pour 0 < x < 1/2, Cf est en-dessous de (D).'
            ],
            finalAnswer: 'Asymptote horizontale y = 3 ; Cf au-dessus pour x > 0,5.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Calculer la dérivée f\'(x) et dresser le tableau de variations complet de f sur ]0 ; +∞[.',
            hints: ['Utiliser la formule (uv)\' = u\'v + uv\'.'],
            solutionSteps: [
              'f est dérivable sur ]0 ; +∞[ comme produit et somme de fonctions dérivables.',
              'u(x) = 2x - 1 => u\'(x) = 2.',
              'v(x) = e^(-x) => v\'(x) = -e^(-x).',
              'f\'(x) = 2 e^(-x) + (2x - 1)(-e^(-x)) = e^(-x) [2 - (2x - 1)] = e^(-x) (3 - 2x).',
              'Comme e^(-x) > 0, f\'(x) est du signe de 3 - 2x. f\'(x) s\'annule en x = 3/2 = 1,5.',
              'f est strictement croissante sur ]0 ; 1,5] puis strictement décroissante sur [1,5 ; +∞[.',
              'Maximum atteint en x = 1,5 : f(1,5) = (3 - 1) e^(-1,5) + 3 = 2 e^(-1,5) + 3 ≈ 3,446.'
            ],
            finalAnswer: 'f\'(x) = (3 - 2x) e^(-x), maximum en 1,5 égal à 2e^(-1,5) + 3.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-lim-1',
        question: 'Que vaut lim_{x → +∞} (3x² - 5) / (2x² + 7x) ?',
        options: ['3/2', '+∞', '0', '-5/7'],
        correctIndex: 0,
        explanation: 'En l\'infini, la limite d\'une fonction rationnelle est égale à la limite du quotient des termes de plus haut degré : lim (3x² / 2x²) = 3/2.'
      },
      {
        id: 'q-lim-2',
        question: 'Quelle est la limite de e^(2x) / x quand x tend vers +∞ ?',
        options: ['+∞ (par croissance comparée)', '0', '2', '1'],
        correctIndex: 0,
        explanation: 'L\'exponentielle l\'emporte toujours sur les puissances de x en +∞.'
      },
      {
        id: 'q-lim-3',
        question: 'Si lim_{x → 2} f(x) = -∞, quelle est la conséquence géométrique pour Cf ?',
        options: [
          'La droite x = 2 est une asymptote verticale',
          'La droite y = 2 est une asymptote horizontale',
          'La courbe coupe l\'axe des abscisses en 2',
          'La fonction n\'est pas continue en 0'
        ],
        correctIndex: 0,
        explanation: 'Une limite infinie en un point fini x = a définit une asymptote verticale d\'équation x = a.'
      },
      {
        id: 'q-lim-4',
        question: 'Que vaut lim_{x → 0, x > 0} (sin x) / x ?',
        options: ['1', '0', '+∞', 'N\'existe pas'],
        correctIndex: 0,
        explanation: 'C\'est le nombre dérivé de la fonction sinus en 0 : sin\'(0) = cos(0) = 1.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - MATHÉMATIQUES : GÉOMÉTRIE DANS L'ESPACE
  // =========================================================================
  {
    id: 'math-term-vecteurs-espace',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Géométrie Vectorielle dans l’Espace & Équations de Plans',
    officialCode: 'MATH-T-05',
    description: 'Repère orthonormé (O, i, j, k), produit scalaire dans l’espace, vecteur normal à un plan, équation cartésienne ax + by + cz + d = 0, et représentation paramétrique de droites.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Produit scalaire dans l\'espace : u(x ; y ; z) · v(x\' ; y\' ; z\') = x x\' + y y\' + z z\'.',
      'Orthogonalité : u et v sont orthogonaux si et seulement si u · v = 0.',
      'Un vecteur non nul n(a ; b ; c) est normal à un plan P si et seulement si P admet une équation cartésienne de la forme ax + by + cz + d = 0.',
      'Représentation paramétrique d\'une droite passant par A(x_A ; y_A ; z_A) et dirigée par u(a ; b ; c) : x = x_A + at, y = y_A + bt, z = z_A + ct (t ∈ ℝ).'
    ],
    keyFormulas: [
      {
        label: 'Équation cartésienne d\'un plan dans l\'espace',
        formula: 'ax + by + cz + d = 0 \\quad (\\vec{n}(a, b, c) \\neq \\vec{0})',
        explanation: 'Le vecteur n(a ; b ; c) est orthogonal à tout vecteur directeur du plan.'
      },
      {
        label: 'Représentation paramétrique d\'une droite',
        formula: '\\begin{cases} x = x_A + a t \\\\ y = y_A + b t \\\\ z = z_A + c t \\end{cases} \\quad (t \\in \\mathbb{R})',
        explanation: 'Caractérise l\'ensemble des points M tels que AM = t · u.'
      }
    ],
    courseSections: [
      {
        title: '1. Position relative de droites et de plans',
        content: [
          '• Une droite de vecteur directeur u est parallèle à un plan de vecteur normal n ssi u · n = 0.',
          '• Deux plans sont perpendiculaires ssi leurs vecteurs normaux respectifs sont orthogonaux : n₁ · n₂ = 0.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-espace-bac',
        title: 'Problème Type Bac : Intersection d\'une droite et d\'un plan',
        context: 'Dans un repère orthonormé (O, i, j, k), on considère le plan P d\'équation 2x - y + 3z - 5 = 0 et la droite D passant par A(1 ; -2 ; 3) et dirigée par u(3 ; 2 ; -1).',
        difficulty: 'Type Bac',
        points: 5,
        questions: [
          {
            questionText: '1. Justifier que la droite D et le plan P sont sécants.',
            hints: ['Calculer le produit scalaire entre le vecteur directeur u et le vecteur normal n(2 ; -1 ; 3).'],
            solutionSteps: [
              'Le plan P admet pour vecteur normal n(2 ; -1 ; 3).',
              'La droite D a pour vecteur directeur u(3 ; 2 ; -1).',
              'u · n = 3(2) + 2(-1) + (-1)(3) = 6 - 2 - 3 = 1 ≠ 0.',
              'Comme u · n ≠ 0, la droite D n\'est pas parallèle au plan P : ils sont donc sécants en un point unique H.'
            ],
            finalAnswer: 'u · n = 1 ≠ 0 donc D et P sont sécants.',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Donner une représentation paramétrique de la droite D.',
            hints: ['Écrire le système x = x_A + at, y = y_A + bt, z = z_A + ct.'],
            solutionSteps: [
              'A(1 ; -2 ; 3) et u(3 ; 2 ; -1).',
              'Pour tout point M(x ; y ; z) ∈ D, il existe un réel t tel que :',
              'x = 1 + 3t',
              'y = -2 + 2t',
              'z = 3 - t'
            ],
            finalAnswer: 'x = 1+3t, y = -2+2t, z = 3-t (t ∈ ℝ).',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Déterminer les coordonnées exactes du point d\'intersection H entre D et P.',
            hints: ['Injecter les expressions paramétriques de x, y, z dans l\'équation cartésienne du plan P.'],
            solutionSteps: [
              '2(1 + 3t) - (-2 + 2t) + 3(3 - t) - 5 = 0.',
              '2 + 6t + 2 - 2t + 9 - 3t - 5 = 0.',
              '(6 - 2 - 3)t + (2 + 2 + 9 - 5) = 0.',
              '1t + 8 = 0 => t = -8.',
              'On remplace t = -8 dans les coordonnées de D :',
              'x_H = 1 + 3(-8) = 1 - 24 = -23.',
              'y_H = -2 + 2(-8) = -2 - 16 = -18.',
              'z_H = 3 - (-8) = 3 + 8 = 11.'
            ],
            finalAnswer: 'Point d\'intersection H(-23 ; -18 ; 11).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-esp-1',
        question: 'Quel est un vecteur normal au plan d\'équation 3x - 4y + z - 7 = 0 ?',
        options: ['n(3 ; -4 ; 1)', 'n(3 ; 4 ; 1)', 'n(-7 ; 1 ; -4)', 'n(1 ; 1 ; 1)'],
        correctIndex: 0,
        explanation: 'Les coefficients devant x, y, z donnent directement les coordonnées du vecteur normal : (3 ; -4 ; 1).'
      },
      {
        id: 'q-esp-2',
        question: 'Deux plans sont parallèles si et seulement si :',
        options: [
          'Leurs vecteurs normaux sont colinéaires',
          'Leurs vecteurs normaux sont orthogonaux',
          'Leur produit scalaire vaut 1',
          'Ils passent par l\'origine O'
        ],
        correctIndex: 0,
        explanation: 'Des plans parallèles ont des directions orthogonales identiques, donc leurs vecteurs normaux sont colinéaires.'
      },
      {
        id: 'q-esp-3',
        question: 'Quelle est la norme du vecteur u(2 ; -3 ; 6) ?',
        options: ['7', '√49 = 7', '11', '√17'],
        correctIndex: 0,
        explanation: '||u|| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.'
      },
      {
        id: 'q-esp-4',
        question: 'Le point M(1 ; 2 ; -1) appartient-il au plan P : x + 2y + 3z - 2 = 0 ?',
        options: [
          'Oui, car 1 + 2(2) + 3(-1) - 2 = 1 + 4 - 3 - 2 = 0',
          'Non, car le résultat vaut 1',
          'Uniquement si t = 0',
          'Impossible à savoir sans droite'
        ],
        correctIndex: 0,
        explanation: 'Les coordonnées vérifient exactement l\'équation cartésienne : 1 + 4 - 3 - 2 = 0.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - PHYSIQUE-CHIMIE : THERMODYNAMIQUE
  // =========================================================================
  {
    id: 'pc-term-thermo',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Thermodynamique : Bilans Thermiques & Transferts d’Énergie',
    officialCode: 'PC-T-05',
    description: 'Premier principe de la thermodynamique, énergie interne U, capacité thermique massique, modes de transfert thermique (conduction, convection, rayonnement) et loi de refroidissement de Newton.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Premier principe : Pour un système fermé au repos macroscopique, ΔU = W + Q.',
      'Variation d\'énergie interne d\'un corps incompressible (solide/liquide) : ΔU = m · c · ΔT = C · (T_f - T_i).',
      '3 modes de transfert thermique : Conduction (contact direct de proche en proche), Convection (mouvement macroscopique de fluide), Rayonnement (ondes électromagnétiques sans support matériel).',
      'Loi de refroidissement de Newton : Le flux thermique surfacique est proportionnel à l\'écart de température : Φ = h · S · (T - T_ext).'
    ],
    keyFormulas: [
      {
        label: 'Variation d\'énergie interne sans changement d\'état',
        formula: '\\Delta U = m \\cdot c \\cdot (T_f - T_i) = C \\cdot \\Delta T',
        explanation: 'm en kg, c en J/(kg·K), températures en Kelvin ou Celsius.'
      },
      {
        label: 'Équation différentielle de Newton pour la température',
        formula: '\\frac{dT}{dt} + \\frac{1}{\\tau} T = \\frac{1}{\\tau} T_{ext} \\quad (\\tau = \\frac{m c}{h S})',
        explanation: 'Évolution exponentielle vers la température ambiante T(t) = T_ext + (T₀ - T_ext) e^(-t/τ).'
      }
    ],
    courseSections: [
      {
        title: '1. Le temps caractéristique tau',
        content: [
          'Le temps caractéristique τ = (m c) / (h S) dépend de la masse, de la capacité thermique, du coefficient d\'échange h et de la surface de contact S.',
          'Au bout de t = 5τ, le système a pratiquement atteint l\'équilibre thermique avec son environnement (plus de 99%).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-pc-thermo-bac',
        title: 'Problème Type Bac : Refroidissement d\'une tasse de thé',
        context: 'Une tasse contenant m = 250 g d\'eau à T₀ = 85 °C est posée dans une pièce à T_ext = 20 °C. Capacité thermique de l\'eau : c = 4180 J/(kg·K). Le temps caractéristique est mesuré : τ = 1500 s (25 min).',
        difficulty: 'Type Bac',
        points: 5,
        questions: [
          {
            questionText: '1. Établir l\'expression horaire de la température T(t) du thé au cours du temps.',
            hints: ['Résoudre l\'équation différentielle dT/dt + T/τ = T_ext/τ avec T(0) = T₀.'],
            solutionSteps: [
              'La solution générale est T(t) = T_ext + C e^(-t/τ).',
              'À t = 0 : T(0) = T_ext + C = T₀ => C = T₀ - T_ext.',
              'D\'où T(t) = T_ext + (T₀ - T_ext) e^(-t/τ).',
              'Application : T(t) = 20 + (85 - 20) e^(-t/1500) = 20 + 65 e^(-t/1500).'
            ],
            finalAnswer: 'T(t) = 20 + 65 e^(-t/1500).',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Calculer la température du thé au bout de 15 minutes (t = 900 s).',
            hints: ['Remplacer t = 900 dans l\'expression de T(t).'],
            solutionSteps: [
              't = 15 min = 15 × 60 = 900 s.',
              'T(900) = 20 + 65 e^(-900 / 1500) = 20 + 65 e^(-0,60).',
              'Or e^(-0,60) ≈ 0,5488.',
              'T(900) = 20 + 65 × 0,5488 ≈ 20 + 35,67 = 55,7 °C.'
            ],
            finalAnswer: 'T(15 min) ≈ 55,7 °C.',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Calculer l\'énergie thermique Q perdue par l\'eau entre t = 0 et t = 900 s.',
            hints: ['Utiliser Q = ΔU = m c (T_f - T_i).'],
            solutionSteps: [
              'm = 250 g = 0,250 kg.',
              'ΔT = 55,7 - 85,0 = -29,3 °C.',
              'Q = m × c × ΔT = 0,250 × 4180 × (-29,3) = 1045 × (-29,3) ≈ -30619 J ≈ -30,6 kJ.',
              'Le système a cédé 30,6 kJ au milieu extérieur.'
            ],
            finalAnswer: 'Q_cédé ≈ 30,6 kJ (ou ΔU = -30,6 kJ).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-th-1',
        question: 'Quel mode de transfert thermique peut s\'effectuer dans le vide absolu spatial ?',
        options: ['Le rayonnement', 'La conduction', 'La convection', 'Aucun transfert'],
        correctIndex: 0,
        explanation: 'Le rayonnement thermique se propage sous forme d\'ondes électromagnétiques et n\'a besoin d\'aucun support matériel (contrairement à la conduction et convection).'
      },
      {
        id: 'q-th-2',
        question: 'Si un système reçoit un travail W = +50 J et cède de la chaleur Q = -20 J, sa variation d\'énergie interne vaut :',
        options: ['ΔU = +30 J', 'ΔU = -70 J', 'ΔU = +70 J', 'ΔU = -30 J'],
        correctIndex: 0,
        explanation: 'Premier principe : ΔU = W + Q = +50 + (-20) = +30 J.'
      },
      {
        id: 'q-th-3',
        question: 'Dans la loi de Newton, qu\'arrive-t-il lorsque la surface d\'échange S est doublée ?',
        options: [
          'Le temps caractéristique τ est divisé par 2 (refroidissement 2 fois plus rapide)',
          'Le temps caractéristique τ est doublé',
          'La température finale est plus basse',
          'La capacité thermique c change'
        ],
        correctIndex: 0,
        explanation: 'τ = (m c) / (h S). Si S double, τ est divisé par deux : les échanges thermiques sont accélérés.'
      },
      {
        id: 'q-th-4',
        question: 'Quelle est la relation entre température en Kelvin (T) et température en Celsius (θ) ?',
        options: ['T(K) = θ(°C) + 273,15', 'T(K) = θ(°C) - 273,15', 'T(K) = θ(°C) × 273', 'T(K) = θ(°C) / 100'],
        correctIndex: 0,
        explanation: '0 °C correspond à 273,15 K. Le zéro absolu théorique est 0 K = -273,15 °C.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - SVT : IMMUNITÉ ADAPTATIVE & ANTICORPS
  // =========================================================================
  {
    id: 'svt-term-immunite-adaptative',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'Le Système Immunitaire Adaptatif : Sélection Clonale & Anticorps',
    officialCode: 'SVT-T-04',
    description: 'Lymphocytes B et récepteurs BCR, lymphocytes T4 et T8 (TCR), sélection clonale, plasmocytes, complexe antigène-anticorps, cytotoxicité et mémoire immunitaire.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'L\'immunité adaptative est propre aux vertébrés : spécifique de l\'antigène, diversifiée et dotée d\'une mémoire immunitaire.',
      'Lymphocytes B (LB) : reconnaissent directement l\'antigène natif via leurs anticorps membranaires (BCR). Après sélection clonale, ils se différencient en plasmocytes sécréteurs d\'anticorps circulants.',
      'Lymphocytes T (LT) : nécessitent la présentation de l\'antigène par une cellule présentatrice (CPA) sur le complexe majeur d\'histocompatibilité (CMH).',
      'LT4 : pivot central de la réponse adaptative (sécrétion d\'interleukine 2 stimulant LB et LT8).',
      'LT8 : se différencient en lymphocytes T cytotoxiques (LTC) qui détruisent les cellules infectées par libération de perforines et induction de l\'apoptose.'
    ],
    keyFormulas: [
      {
        label: 'Structure en Y d\'une immunoglobuline (anticorps)',
        formula: '2 \\, \\text{chaînes lourdes (H)} + 2 \\, \\text{chaînes légères (L)} \\longrightarrow 2 \\, \\text{sites de fixation}',
        explanation: 'Les domaines variables déterminent la spécificité antigénique absolue.'
      }
    ],
    courseSections: [
      {
        title: '1. Neutralisation par le complexe immun',
        content: [
          'La liaison spécifique anticorps-antigène forme un réseau insoluble appelé complexe immun.',
          'Ce complexe neutralise le pouvoir pathogène du virus ou de la toxine et facilite son élimination par phagocytose grâce aux récepteurs de la fraction constante Fc sur les macrophages (opsonisation).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-svt-elisa-bac',
        title: 'Problème Type Bac : Principe du test de dépistage ELISA',
        context: 'On utilise un test immuno-enzymatique ELISA indirect pour détecter la présence d\'anticorps anti-VIH dans le sérum d\'un patient.',
        difficulty: 'Type Bac',
        points: 5,
        questions: [
          {
            questionText: '1. Décrire les étapes clés du protocole expérimental ELISA indirect.',
            hints: ['Au fond des puits se trouvent des antigènes viraux fixés. Que cherche-t-on dans le sérum ?'],
            solutionSteps: [
              '1° Les puits de la microplaque sont tapissés d\'antigènes viraux fixés.',
              '2° On ajoute le sérum du patient : si le patient possède des anticorps spécifiques, ils se lient aux antigènes.',
              '3° Lavage pour éliminer les anticorps libres non fixés.',
              '4° Ajout d\'anticorps secondaires anti-immunoglobulines humaines couplés à une enzyme.',
              '5° Nouveau lavage puis ajout du substrat incolore : l\'enzyme le transforme en produit coloré.'
            ],
            finalAnswer: 'Fixation antigénique, capture des anticorps spécifiques, révélation enzymatique.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Pourquoi une étape de lavage rigoureux est-elle indispensable entre chaque étape ?',
            hints: ['Que se passerait-il si des anticorps enzymatiques libres restaient au fond du puits ?'],
            solutionSteps: [
              'Le lavage élimine toutes les molécules libres non fixées spécifiquement.',
              'Sans lavage efficace, les anticorps secondaires enzymatiques resteraient dans le puits et réagiraient avec le substrat, provoquant un faux positif (coloration en l\'absence d\'anticorps du patient).'
            ],
            finalAnswer: 'Éviter les faux positifs en éliminant les molécules non liées.',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Expliquer le principe de la mémoire immunitaire exploitée par les vaccins.',
            hints: ['Comparer la réponse primaire (lente) et la réponse secondaire (rapide et amplifiée).'],
            solutionSteps: [
              'Lors d\'un premier contact avec l\'antigène (ou un vaccin), des clones de lymphocytes B et T mémoires à longue durée de vie sont formés.',
              'Lors d\'un contact ultérieur avec le pathogène réel, ces cellules mémoires réagissent quasi instantanément : la production d\'anticorps est beaucoup plus rapide, massive et durable.',
              'Le pathogène est neutralisé avant l\'apparition des symptômes de la maladie.'
            ],
            finalAnswer: 'Sélection de cellules mémoires induisant une réponse secondaire immédiate et amplifiée.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-imm-1',
        question: 'Quelles cellules immunitaires sécrètent les anticorps circulants dans le sang ?',
        options: ['Les plasmocytes', 'Les globules rouges', 'Les macrophages', 'Les plaquettes'],
        correctIndex: 0,
        explanation: 'Les plasmocytes sont le stade de différenciation terminale des lymphocytes B activés.'
      },
      {
        id: 'q-imm-2',
        question: 'Quel est le rôle pivot fondamental des lymphocytes T CD4 (LT4) ?',
        options: [
          'Sécréter de l\'interleukine 2 pour stimuler la prolifération des LB et LT8',
          'Ingérer les bactéries par phagocytose',
          'Produire directement de l\'histamine',
          'Fabriquer le mucus respiratoire'
        ],
        correctIndex: 0,
        explanation: 'Les LT4 sont les chefs d\'orchestre de l\'immunité adaptative via l\'interleukine.'
      },
      {
        id: 'q-imm-3',
        question: 'Par quel mécanisme les lymphocytes T cytotoxiques (LTC) détruisent-ils les cellules infectées ?',
        options: [
          'En perforant la membrane (perforine) et en induisant l\'apoptose (mort cellulaire programmée)',
          'En les avalant par phagocytose',
          'En sécrétant des antibiotiques',
          'Par décharge électrique'
        ],
        correctIndex: 0,
        explanation: 'Le baiser de la mort du LTC libère perforine et granzymes qui déclenchent le suicide cellulaire.'
      },
      {
        id: 'q-imm-4',
        question: 'Qu\'appelle-t-on le « complexe immun » ?',
        options: [
          'L\'association stœchiométrique spécifique entre anticorps et antigènes',
          'Le noyau des globules blancs',
          'Une infection bactérienne grave',
          'La moelle osseuse'
        ],
        correctIndex: 0,
        explanation: 'Le réseau tridimensionnel anticorps-antigènes forme le complexe immun précipité.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - MATHÉMATIQUES : PROBABILITÉS CONDITIONNELLES
  // =========================================================================
  {
    id: 'math-1ere-probas-cond',
    subjectId: 'maths',
    gradeLevel: '1ere',
    title: 'Probabilités Conditionnelles & Formule des Probabilités Totales',
    officialCode: 'MATH-1-06',
    description: 'Conditionnement, notation P_A(B), arbre pondéré, indépendance de deux événements et formule des probabilités totales.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Probabilité de B sachant A : P_A(B) = P(A ∩ B) / P(A) (avec P(A) > 0).',
      'Indépendance : Deux événements A et B sont indépendants si et seulement si P(A ∩ B) = P(A) × P(B) <=> P_A(B) = P(B).',
      'Règles de l\'arbre pondéré : (1) La somme des probabilités issues d\'un même nœud vaut 1 ; (2) La probabilité d\'une feuille est le produit des probabilités du chemin.',
      'Formule des probabilités totales : Si A₁, A₂, ..., A_n forment une partition de l\'univers Ω, alors P(B) = Σ P(A_i ∩ B) = Σ P(A_i) × P_{A_i}(B).'
    ],
    keyFormulas: [
      {
        label: 'Définition de la probabilité conditionnelle',
        formula: 'P_A(B) = \\frac{P(A \\cap B)}{P(A)} \\iff P(A \\cap B) = P(A) \\cdot P_A(B)',
        explanation: 'Fondement de tous les calculs sur arbres pondérés.'
      },
      {
        label: 'Formule des probabilités totales (partition à 2 événements A et non-A)',
        formula: 'P(B) = P(A \\cap B) + P(\\bar{A} \\cap B) = P(A) \\cdot P_A(B) + P(\\bar{A}) \\cdot P_{\\bar{A}}(B)',
        explanation: 'Somme des probabilités de tous les chemins menant à l\'événement B.'
      }
    ],
    courseSections: [
      {
        title: '1. Attention aux faux amis en probabilité',
        content: [
          'Ne pas confondre P_A(B) (sachant A) et P_B(A) (sachant B) !',
          'Exemple médical classique : La probabilité d\'être positif sachant qu\'on est malade n\'est PAS la probabilité d\'être malade sachant qu\'on est testé positif !'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-probas-totales',
        title: 'Problème Type Bac : Fiabilité d\'un test de dépistage',
        context: 'Une maladie touche 1% de la population (P(M) = 0,01). Un test donne un résultat positif avec une sensibilité P_M(T) = 0,99 et une spécificité P_{non-M}(non-T) = 0,98.',
        difficulty: 'Type Bac',
        points: 5,
        questions: [
          {
            questionText: '1. Calculer la probabilité qu\'une personne saine soit faussement testée positive P_{non-M}(T).',
            hints: ['P_{non-M}(T) = 1 - P_{non-M}(non-T).'],
            solutionSteps: [
              'P_{non-M}(T) = 1 - 0,98 = 0,02 (2% de faux positifs).'
            ],
            finalAnswer: 'P_{non-M}(T) = 0,02.',
            pointsAllocated: 1
          },
          {
            questionText: '2. En utilisant la formule des probabilités totales, calculer la probabilité qu\'une personne prise au hasard soit testée positive P(T).',
            hints: ['P(T) = P(M ∩ T) + P(non-M ∩ T).'],
            solutionSteps: [
              'P(M ∩ T) = P(M) × P_M(T) = 0,01 × 0,99 = 0,0099.',
              'P(non-M ∩ T) = P(non-M) × P_{non-M}(T) = 0,99 × 0,02 = 0,0198.',
              'P(T) = 0,0099 + 0,0198 = 0,0297 (soit 2,97%).'
            ],
            finalAnswer: 'P(T) = 0,0297.',
            pointsAllocated: 2
          },
          {
            questionText: '3. Calculer la probabilité qu\'une personne soit réellement malade sachant qu\'elle a un test positif P_T(M). Commenter.',
            hints: ['P_T(M) = P(M ∩ T) / P(T).'],
            solutionSteps: [
              'P_T(M) = P(M ∩ T) / P(T) = 0,0099 / 0,0297 = 1/3 ≈ 0,333 (soit 33,3%).',
              'Bien que le test soit fiable à 99%, une personne positive n\'a qu\'une chance sur trois d\'être malade en raison de la rareté de la maladie dans la population globale (paradoxe des faux positifs).'
            ],
            finalAnswer: 'P_T(M) ≈ 33,3%. Paradoxe des faux positifs dû à la faible prévalence.',
            pointsAllocated: 2,
            bacTrap: 'Ne confondez jamais P_M(T) (99%) et P_T(M) (33,3%) !'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-prob-1',
        question: 'Si deux événements A et B sont indépendants avec P(A) = 0,4 et P(B) = 0,5, que vaut P(A ∩ B) ?',
        options: ['0,20', '0,90', '0,10', '0'],
        correctIndex: 0,
        explanation: 'Par définition de l\'indépendance : P(A ∩ B) = P(A) × P(B) = 0,4 × 0,5 = 0,20.'
      },
      {
        id: 'q-prob-2',
        question: 'Que vaut toujours la somme des probabilités des branches issues d\'un même nœud dans un arbre pondéré ?',
        options: ['1', '0,5', 'P(Ω)', '100'],
        correctIndex: 0,
        explanation: 'Les événements issus d\'un nœud forment une partition : la somme de leurs probabilités conditionnelles est égale à 1.'
      },
      {
        id: 'q-prob-3',
        question: 'Si A et B sont deux événements disjoints non impossibles, peuvent-ils être indépendants ?',
        options: [
          'Non, car P(A ∩ B) = 0 alors que P(A) × P(B) > 0',
          'Oui, toujours',
          'Uniquement si P(A) = P(B)',
          'Cela dépend de l\'univers'
        ],
        correctIndex: 0,
        explanation: 'Deux événements disjoints s\'excluent mutuellement : savoir que l\'un se produit assure que l\'autre ne se produit pas, ils sont donc fortement dépendants !'
      },
      {
        id: 'q-prob-4',
        question: 'Si P_A(B) = 0,7, que vaut P_A(non-B) ?',
        options: ['0,3', '0,7', '1,7', 'Impossible à déterminer sans P(A)'],
        correctIndex: 0,
        explanation: 'La loi des contraires s\'applique au conditionnement : P_A(non-B) = 1 - P_A(B) = 1 - 0,7 = 0,3.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - SVT : AGROSYSTÈMES & FLUX DE MATIÈRE
  // =========================================================================
  {
    id: 'svt-2nde-agrosystemes',
    subjectId: 'svt',
    gradeLevel: '2nde',
    title: 'Agrosystèmes : Flux de Matière, Énergie et Pratiques Durables',
    officialCode: 'SVT-2-03',
    description: 'Structure comparée des écosystèmes naturels et des agrosystèmes, biomasse, intrants (engrais, produits phytosanitaires, eau), bilan exportations/pertes et agroécologie.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Un agrosystème est un écosystème géré par l\'humain pour la production de biomasse alimentaire, industrielle ou énergétique.',
      'Dans un écosystème naturel, les cycles biogéochimiques sont quasi-fermés (recyclage naturel par les décomposeurs).',
      'Dans un agrosystème, la récolte constitue une exportation massive de matière minérale (N, P, K) et d\'énergie, imposant des intrants.',
      'L\'impact environnemental de l\'agriculture intensive : eutrophisation des eaux (excès de nitrates et phosphates) et baisse de biodiversité.',
      'L\'agroécologie cherche à restaurer les équilibres écologiques : légumineuses fixatrices d\'azote, auxiliaires de culture, rotation des cultures.'
    ],
    keyFormulas: [
      {
        label: 'Rendement écologique de conversion énergétique',
        formula: 'R = \\frac{E_{\\text{biomasse produite}}}{E_{\\text{solaire reçue}}} \\times 100 \\quad (R < 1\\%)',
        explanation: 'Seule une infime fraction de l\'énergie solaire interceptée est convertie en biomasse par photosynthèse.'
      },
      {
        label: 'Bilan de matière d\'un agrosystème',
        formula: '\\Delta M = M_{\\text{intrants}} - (M_{\\text{exportée (récolte)}} + M_{\\text{pertes/lessivage}})',
        explanation: 'Un agrosystème équilibré évite le surdosage d\'intrants pour limiter le lessivage vers les nappes phréatiques.'
      }
    ],
    courseSections: [
      {
        title: '1. Comparaison écosystème naturel vs agrosystème',
        content: [
          '• Écosystème naturel : grande biodiversité spécifique et génétique, chaînes trophiques interconnectées (réseaux), recyclage quasi intégral de la matière organique par les décomposeurs du sol.',
          '• Agrosystème conventionnel : souvent monoculture à faible diversité génétique, chaînes trophiques courtes et simplifiées, récolte exportatrice de biomasse empêchant le recyclage naturel.',
          '• Dépendance aux intrants : eau d\'irrigation, engrais de synthèse (ammonitrates, phosphates), produits phytosanitaires (herbicides, insecticides, fongicides), carburants pour les machines agricoles.'
        ]
      },
      {
        title: '2. Enjeux agroécologiques et durabilité',
        content: [
          '• Eutrophisation : prolifération d\'algues vertes suite à l\'apport massif de nitrates et phosphates dans les cours d\'eau et littoraux, entraînant une hypoxie et la mort de la faune aquatique.',
          '• Alternatives durables : engrais verts, culture de fabacées (symbiose avec Rhizobium pour fixer l\'azote atmosphérique N2 sans engrais minéral), lutte biologique par les prédateurs naturels de ravageurs.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-agrosyst-bac',
        title: 'Exercice Type Seconde : Bilan comparatif d\'un élevage bovin et d\'une culture de blé',
        context: 'Pour produire 1 kg de protéines bovines, un bétail ingère en moyenne 7 kg de protéines végétales. On étudie le rendement et l\'impact de deux régimes alimentaires.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Expliquer pourquoi la production de viande génère une perte énergétique considérable par rapport à la consommation directe de végétaux.',
            hints: ['Penser aux pertes métaboliques le long des maillons d\'une chaîne trophique (respiration, déjections).'],
            solutionSteps: [
              'À chaque maillon de la chaîne alimentaire (passage du producteur primaire au consommateur primaire), environ 90 % de l\'énergie ingérée est dissipée sous forme de chaleur (respiration cellulaire, maintien de la température corporelle) et rejetée dans les excrétats.',
              'Le bétail utilise la majeure partie de la biomasse végétale consommée pour son propre métabolisme basal et ses déplacements, et non pour la synthèse de tissu musculaire exploitable.'
            ],
            finalAnswer: 'Pertes thermodynamiques inhérentes au métabolisme animal (rendement trophique moyen de 10 %).',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Calculer la surface de sol mobilisée pour nourrir un individu consommant 50 kg de bœuf par an sachant qu\'1 hectare produit 5 tonnes de fourrage équivalent végétal et qu\'il faut 8 kg d\'aliments végétaux par kg de bœuf.',
            hints: ['Calculer d\'abord la masse de végétaux nécessaire, puis convertir en surface (hectares).'],
            solutionSteps: [
              'Masse végétale requise : 50 kg × 8 = 400 kg de végétaux.',
              'Rendement à l\'hectare : 5 000 kg / ha.',
              'Surface requise : 400 / 5 000 = 0,08 ha = 800 m².'
            ],
            finalAnswer: '0,08 hectare (soit 800 m²) uniquement pour la portion bovine annuelle.',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Décrire le phénomène d\'eutrophisation des eaux continentales consécutif à l\'utilisation excessive d\'engrais azotés.',
            hints: ['Établir la chaîne causale : nitrates -> algues -> décomposition bactérienne -> dioxygène.'],
            solutionSteps: [
              '1) Lessivage des nitrates excédentaires du sol vers les cours d\'eau et étangs.',
              '2) Prolifération explosive de phytoplancton et algues en surface.',
              '3) Mort des algues et prolifération des bactéries décomposeuses aérobies au fond de l\'eau.',
              '4) Chute drastique de la concentration en O2 dissous (hypoxie puis anoxie), asphyxiant poissons et macro-invertébrés.'
            ],
            finalAnswer: 'Rupture de l\'équilibre trophique par anoxie liée à la surconsommation bactérienne d\'O2.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Proposer deux leviers agroécologiques permettant de réduire le recours aux intrants de synthèse.',
            hints: ['Penser aux légumineuses et aux haies.'],
            solutionSteps: [
              '1) Intégration de légumineuses (luzerne, trèfle, pois) en rotation : leur symbiose racinaire avec des bactéries Rhizobium fixe le diazote N2 de l\'air, enrichissant naturellement le sol en azote organique.',
              '2) Maintien de haies bocagères et bandes enherbées : elles hébergent des prédateurs naturels de ravageurs (coccinelles contre pucerons) et limitent l\'érosion et le ruissellement des nitrates vers les cours d\'eau.'
            ],
            finalAnswer: 'Symbioses fixatrices d\'azote et auxiliaires de biocontrôle favorisés par les infrastructures agroécologiques.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-agro-1',
        question: 'Quelle est la principale différence entre un écosystème naturel et un agrosystème ?',
        options: [
          'L\'agrosystème exporte de la biomasse et nécessite des intrants',
          'L\'agrosystème ne dépend pas de l\'énergie solaire',
          'Dans un agrosystème, il n\'y a aucune photosynthèse',
          'Un agrosystème présente toujours une biodiversité supérieure'
        ],
        correctIndex: 0,
        explanation: 'La récolte exporte de la biomasse, brisant le cycle fermé de la matière et imposant l\'apport d\'intrants minéraux.'
      },
      {
        id: 'q-agro-2',
        question: 'Quel gaz atmosphérique les bactéries Rhizobium des nodosités de légumineuses sont-elles capables de fixer ?',
        options: ['Le diazote N2', 'Le dioxyde de carbone CO2', 'Le dioxygène O2', 'Le méthane CH4'],
        correctIndex: 0,
        explanation: 'Rhizobium possède la nitrogénase qui brise la triple liaison N≡N pour fabriquer de l\'ammoniac assimilable.'
      },
      {
        id: 'q-agro-3',
        question: 'Quel est l\'effet immédiat du lessivage massif des nitrates sur un écosystème aquatique ?',
        options: [
          'La prolifération des producteurs primaires (algues)',
          'Une augmentation immédiate du dioxygène en profondeur',
          'La stérilisation complète de l\'eau',
          'L\'acidification volcanique de l\'eau'
        ],
        correctIndex: 0,
        explanation: 'Les nitrates constituent un nutriment limitant : leur afflux provoque un "bloom" algal de surface.'
      },
      {
        id: 'q-agro-4',
        question: 'Le rendement trophique moyen d\'un niveau à l\'autre d\'une chaîne alimentaire est de l\'ordre de :',
        options: ['10 %', '50 %', '90 %', '100 %'],
        correctIndex: 0,
        explanation: 'Environ 90 % de l\'énergie est dissipée à chaque échelon par respiration cellulaire et déchets métaboliques.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - PHYSIQUE-CHIMIE : STRUCTURE & POLARITÉ DES MOLÉCULES
  // =========================================================================
  {
    id: 'pc-1ere-structure-matiere',
    subjectId: 'physique-chimie',
    gradeLevel: '1ere',
    title: 'Structure, Géométrie et Polarité des Entités Chimiques',
    officialCode: 'PC-1-03',
    description: 'Schéma de Lewis, règle de l’octet et du duet, modèle VSEPR (Gillespie), électronégativité de Pauling, moment dipolaire et solubilité.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Schéma de Lewis : représentation des doublets liants (liaisons covalentes) et des doublets non liants des atomes.',
      'Modèle VSEPR : répulsion mutuelle minimale des doublets d\'électrons autour de l\'atome central.',
      'Géométries moléculaires clés : linéaire (CO2, 180°), triangulaire plane (BF3, 120°), tétraédrique (CH4, 109,5°), pyramidale à base triangulaire (NH3, 107°), coudée (H2O, 104,5°).',
      'Liaison polarisée : différence d\'électronégativité Δχ > 0,4 entre deux atomes liés.',
      'Molécule polaire : le barycentre des charges partielles positives G+ ne coïncide pas avec celui des charges négatives G-.'
    ],
    keyFormulas: [
      {
        label: 'Condition de liaison polarisée',
        formula: '\\Delta \\chi = |\\chi_A - \\chi_B| \\ge 0{,}4 \\implies A^{\\delta+} - B^{\\delta-}',
        explanation: 'Si Δχ ≥ 0,4, les électrons de liaison sont déplacés vers l\'atome le plus électronégatif.'
      },
      {
        label: 'Moment dipolaire résultant',
        formula: '\\vec{p} = \\sum_{i} \\vec{p}_i = q \\cdot \\vec{d} \\neq \\vec{0} \\iff \\text{Molécule polaire}',
        explanation: 'Une molécule symétrique (ex: CCl4, CO2) a un moment dipolaire global nul malgré des liaisons fortement polarisées.'
      }
    ],
    courseSections: [
      {
        title: '1. Schéma de Lewis et VSEPR',
        content: [
          '• Chaque atome tend à acquérir une configuration stable en gaz noble (règle du duet pour H, règle de l\'octet pour C, N, O, F, Cl...).',
          '• Géométrie selon le nombre de doublets (liants n et non-liants m autour du centre) : type AX_n E_m.',
          '• AX2 (linéaire), AX3 (triangulaire), AX4 (tétraédrique), AX3E1 (pyramidale), AX2E2 (coudée).'
        ]
      },
      {
        title: '2. Polarité et solvants',
        content: [
          '• Règle de solubilité empirique : les composés polaires et ioniques se dissolvent préférentiellement dans les solvants polaires (ex: eau, éthanol).',
          '• Les composés apolaires (ex: huiles, hydrocarbures) se dissolvent dans les solvants apolaires (ex: cyclohexane).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-vsepr-bac',
        title: 'Problème Résolu : Géométrie et polarité comparées de CO2, H2O et CCl4',
        context: 'On étudie trois molécules d\'usage courant. Données d\'électronégativité : χ(H) = 2,2 ; χ(C) = 2,5 ; χ(Cl) = 3,0 ; χ(O) = 3,4.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Déterminer le schéma de Lewis et la géométrie VSEPR de la molécule d\'eau H2O.',
            hints: ['L\'oxygène (Z=8) a 6 électrons de valence. Combien de liaisons simples et de doublets non liants ?'],
            solutionSteps: [
              'L\'atome d\'oxygène central possède 6 électrons de valence. Il partage 2 électrons avec 2 atomes d\'hydrogène (2 doublets liants) et conserve 4 électrons non engagés (2 doublets non liants).',
              'Notation VSEPR : type AX2E2.',
              'La répulsion entre les 4 doublets adopte un arrangement tétraédrique, conférant à la molécule une géométrie coudée (angle H-O-H d\'environ 104,5°).'
            ],
            finalAnswer: 'Schéma de Lewis avec 2 doublets liants et 2 doublets non liants sur O ; géométrie coudée (AX2E2).',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Justifier que la liaison O-H est polarisée, puis prouver que la molécule d\'eau est polaire.',
            hints: ['Calculer la différence d\'électronégativité, puis placer les barycentres G+ et G-.'],
            solutionSteps: [
              'Δχ(O-H) = 3,4 - 2,2 = 1,2 > 0,4 : la liaison O-H est fortement polarisée, l\'atome d\'oxygène porte une charge partielle 2δ- et chaque H porte δ+.',
              'Le barycentre G- des charges négatives est situé sur le noyau d\'oxygène.',
              'Le barycentre G+ des charges positives est situé au milieu du segment joignant les deux atomes d\'hydrogène.',
              'Comme la molécule est coudée, G+ et G- sont distincts (G+ ≠ G-). Le moment dipolaire global est non nul : l\'eau est une molécule polaire.'
            ],
            finalAnswer: 'L\'eau est polaire car ses dipôles de liaison ne s\'annulent pas en raison de sa géométrie coudée.',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Représenter la géométrie de la molécule de dioxyde de carbone CO2 et expliquer pourquoi elle est apolaire malgré deux liaisons C=O très polarisées.',
            hints: ['Notation VSEPR de CO2 (type AX2). Que dire de la symétrie des deux dipôles ?'],
            solutionSteps: [
              'Le carbone central est lié par deux doubles liaisons aux oxygènes sans doublet non liant (type AX2). La géométrie est rigoureusement linéaire (angle de 180°).',
              'Chaque liaison C=O est polarisée (Δχ = 3,4 - 2,5 = 0,9) avec une charge partielle δ+ sur le carbone et δ- sur chaque oxygène.',
              'Les deux vecteurs moments dipolaires sont colinéaires, de même norme mais de sens strictement opposés : leur somme vectorielle est nulle.',
              'Le barycentre des charges positives (sur C) coïncide exactement avec le barycentre des charges négatives (milieu des deux O, sur C).'
            ],
            finalAnswer: 'CO2 est apolaire car la géométrie linéaire entraîne l\'annulation vectorielle des moments dipolaires (G+ = G-).',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Prédire si le tétrachlorométhane CCl4 est miscible à l\'eau ou au cyclohexane.',
            hints: ['Déterminer d\'abord la polarité de CCl4 (géométrie tétraédrique AX4 symétrique).'],
            solutionSteps: [
              'Dans CCl4, le carbone est entouré de 4 liaisons C-Cl disposées aux sommets d\'un tétraèdre régulier (type AX4). Par symétrie sphérique, les 4 dipôles s\'annulent : CCl4 est apolaire.',
              'L\'eau est un solvant très polaire (liaisons hydrogène), tandis que le cyclohexane est apolaire (forces de van der Waals de London).',
              'Selon le principe de solubilité ("qui se ressemble se dissout"), le tétrachlorométhane apolaire est insoluble dans l\'eau mais hautement miscible au cyclohexane.'
            ],
            finalAnswer: 'CCl4 est apolaire : il est non miscible à l\'eau et parfaitement miscible au cyclohexane.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-vsepr-1',
        question: 'Quelle est la géométrie de la molécule d\'ammoniac NH3 selon le modèle VSEPR ?',
        options: [
          'Pyramidale à base triangulaire (AX3E1)',
          'Tétraédrique (AX4)',
          'Triangulaire plane (AX3)',
          'Linéaire (AX2)'
        ],
        correctIndex: 0,
        explanation: 'L\'azote porte 3 doublets liants et 1 doublet non liant (AX3E1), ce qui donne une pyramide trigonale.'
      },
      {
        id: 'q-vsepr-2',
        question: 'Pourquoi la molécule de méthane CH4 est-elle apolaire ?',
        options: [
          'Par symétrie tétraédrique, le barycentre des charges + coïncide avec celui des charges -',
          'Parce que le carbone ne possède aucun électron',
          'Parce que les liaisons C-H sont métalliques',
          'Parce que le méthane est un gaz'
        ],
        correctIndex: 0,
        explanation: 'La symétrie tétraédrique parfaite fait coïncider G+ et G- au centre de l\'atome de carbone.'
      },
      {
        id: 'q-vsepr-3',
        question: 'Parmi ces atomes, quel est le plus électronégatif selon l\'échelle de Pauling ?',
        options: ['Fluor (F)', 'Chlore (Cl)', 'Oxygène (O)', 'Carbone (C)'],
        correctIndex: 0,
        explanation: 'Le fluor est l\'élément le plus électronégatif du tableau périodique (valeur environ 4,0).'
      },
      {
        id: 'q-vsepr-4',
        question: 'Quel type de solvant dissout le plus efficacement les cristaux de chlorure de sodium (NaCl) ?',
        options: [
          'Un solvant polaire protique comme l\'eau',
          'Un solvant apolaire comme l\'hexane',
          'L\'huile d\'olive',
          'Le benzène'
        ],
        correctIndex: 0,
        explanation: 'Les molécules dipolaires d\'eau solvatent et séparent efficacement les ions Na+ et Cl- par interactions ion-dipôle.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - PHYSIQUE-CHIMIE : ONDES MÉCANIQUES PROGRESSIVES
  // =========================================================================
  {
    id: 'pc-1ere-ondes-meca',
    subjectId: 'physique-chimie',
    gradeLevel: '1ere',
    title: 'Ondes Mécaniques Progressives Périodiques & Acoustique',
    officialCode: 'PC-1-04',
    description: 'Propagation d’une perturbation sans transport de matière, retard temporel, périodicité spatiale (longueur d’onde λ) et temporelle (période T), niveau sonore en décibels.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Une onde mécanique progressive est la propagation d\'une perturbation locale dans un milieu matériel élastique, avec transport d\'énergie mais sans transport de matière.',
      'Onde transversale (déplacement perpendiculaire à la propagation, ex: corde) vs onde longitudinale (déplacement parallèle, ex: onde sonore).',
      'Double périodicité : période temporelle T (en s) et période spatiale ou longueur d\'onde λ (en m), reliées par λ = v × T = v / f.',
      'Deux points séparés par une distance d = k × λ sont en phase ; s\'ils sont séparés par (k + 1/2) λ, ils sont en opposition de phase.',
      'Niveau d\'intensité sonore L en dB : échelle logarithmique L = 10 log(I / I0) avec I0 = 1,0 × 10^-12 W/m² (seuil d\'audibilité).'
    ],
    keyFormulas: [
      {
        label: 'Relation fondamentale de la longueur d\'onde',
        formula: '\\lambda = v \\cdot T = \\frac{v}{f}',
        explanation: 'λ est la distance parcourue par l\'onde pendant une période temporelle T à la célérité v.'
      },
      {
        label: 'Retard temporel τ entre deux points M et M\'',
        formula: '\\tau = \\frac{M M\'}{v} = \\frac{d}{v} \\implies s_{M\'}(t) = s_M(t - \\tau)',
        explanation: 'Le point récepteur M\' reproduit le mouvement de la source M avec un décalage temporel τ.'
      },
      {
        label: 'Niveau d\'intensité sonore (décibels)',
        formula: 'L = 10 \\log_{10} \\left( \\frac{I}{I_0} \\right) \\quad \\text{avec } I_0 = 1{,}0 \\times 10^{-12} \\text{ W}\\cdot\\text{m}^{-2}',
        explanation: 'Multiplier l\'intensité sonore par 2 augmente le niveau sonore de +3 dB (car 10 log 2 ≈ 3).'
      }
    ],
    courseSections: [
      {
        title: '1. Caractéristiques de l\'onde progressive',
        content: [
          '• Célérité v : dépend des propriétés mécaniques du milieu (densité, rigidité, température) mais pas de l\'amplitude de l\'onde.',
          '• Dans l\'air à 20°C, la vitesse du son est d\'environ 340 m/s. Dans l\'eau liquide, elle vaut environ 1 500 m/s.',
          '• L\'atténuation : atténuation géométrique (dispersion de l\'énergie sur des surfaces d\'onde de plus en plus grandes) et par absorption dans le milieu.'
        ]
      },
      {
        title: '2. Acoustique physiologique et niveau sonore',
        content: [
          '• Domaine audible pour l\'oreille humaine : de 20 Hz (sons très graves) à 20 000 Hz (sons très aigus).',
          '• Seuil de douleur acoustique : vers 120 dB (correspond à une intensité I = 1 W/m²).',
          '• Si n sources sonores identiques non cohérentes émettent ensemble : I_total = n × I_source.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-ondes-bac',
        title: 'Problème Résolu : Mesure par ultrasons et acoustique d\'une salle de concert',
        context: 'Un émetteur et un récepteur ultrasonore sont placés face à un écran réflecteur. Vitesse du son dans l\'air à 20°C : v = 340 m/s. Seuil d\'audibilité I0 = 1,0 × 10^-12 W/m².',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Une onde ultrasonore a une fréquence f = 40 kHz. Calculer sa période T et sa longueur d\'onde λ dans l\'air.',
            hints: ['T = 1 / f et λ = v / f. Attention aux unités (kHz -> Hz).'],
            solutionSteps: [
              'f = 40 kHz = 40 × 10^3 Hz = 4,0 × 10^4 Hz.',
              'Période : T = 1 / f = 1 / (4,0 × 10^4) = 2,5 × 10^-5 s = 25 µs.',
              'Longueur d\'onde : λ = v / f = 340 / (4,0 × 10^4) = 8,5 × 10^-3 m = 8,5 mm.'
            ],
            finalAnswer: 'T = 25 µs et λ = 8,5 mm.',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Le signal est réfléchi par un obstacle situé à une distance D = 1,70 m de l\'émetteur-récepteur. Déterminer le retard temporel Δt mesuré entre l\'émission et la réception de l\'écho.',
            hints: ['L\'onde effectue un aller-retour : la distance parcourue est 2D.'],
            solutionSteps: [
              'Distance totale parcourue par le train d\'ondes : d = 2 × D = 2 × 1,70 = 3,40 m.',
              'Retard temporel : Δt = d / v = 3,40 / 340 = 0,010 s = 10 ms.'
            ],
            finalAnswer: 'Δt = 10 millisecondes (1,0 × 10^-2 s).',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Un instrument de musique génère un niveau sonore L1 = 70 dB à 5 mètres. Calculer l\'intensité sonore correspondante I1.',
            hints: ['Utiliser la réciproque de la fonction logarithme décimal : I = I0 × 10^(L / 10).'],
            solutionSteps: [
              'L = 10 log(I1 / I0) ⟺ L / 10 = log(I1 / I0) ⟺ I1 / I0 = 10^(L / 10).',
              'I1 = I0 × 10^(70 / 10) = 1,0 × 10^-12 × 10^7 = 1,0 × 10^-5 W/m².'
            ],
            finalAnswer: 'I1 = 1,0 × 10^-5 W·m^-2.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Deux musiciens jouent simultanément la même partition avec la même intensité I1. Calculer le nouveau niveau sonore global L_global. Les décibels s\'additionnent-ils directement ?',
            hints: ['Ce sont les intensités physiques (W/m²) qui s\'additionnent, PAS les décibels !'],
            solutionSteps: [
              'Les sources étant indépendantes, les intensités s\'additionnent : I_total = 2 × I1 = 2,0 × 10^-5 W/m².',
              'L_total = 10 log(2 × I1 / I0) = 10 [log 2 + log(I1 / I0)] = 10 log 2 + L1.',
              'Comme 10 log 2 ≈ 10 × 0,301 = 3,01 dB :',
              'L_total ≈ 70 + 3 = 73 dB.'
            ],
            finalAnswer: 'L_total = 73 dB. Les décibels ne s\'additionnent jamais : doubler l\'intensité sonore n\'ajoute que +3 dB.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-ondes-1',
        question: 'Que transporte une onde mécanique en se propageant dans un fluide ?',
        options: [
          'De l\'énergie sans transport global de matière',
          'De la matière et des molécules d\'eau',
          'Uniquement de la masse',
          'Du vide absolu'
        ],
        correctIndex: 0,
        explanation: 'La perturbation transmet de l\'énergie d\'un point à un autre alors que les particules du milieu oscillent autour de leur position d\'équilibre.'
      },
      {
        id: 'q-ondes-2',
        question: 'Si la distance entre deux points d\'un milieu vaut d = 3 λ, dans quel état de vibration se trouvent-ils ?',
        options: [
          'En phase',
          'En opposition de phase',
          'En quadrature de phase',
          'Au repos absolu'
        ],
        correctIndex: 0,
        explanation: 'Deux points séparés par un nombre entier de longueurs d\'onde (d = k λ avec k=3) vibrent rigoureusement en phase.'
      },
      {
        id: 'q-ondes-3',
        question: 'Si le niveau sonore passe de 60 dB à 63 dB, par quel facteur l\'intensité acoustique (en W/m²) a-t-elle été multipliée ?',
        options: ['Par 2', 'Par 3', 'Par 10', 'Par 1000'],
        correctIndex: 0,
        explanation: 'Une élévation de +3 dB correspond exactement au doublement de la puissance acoustique (10 log 2 ≈ 3 dB).'
      },
      {
        id: 'q-ondes-4',
        question: 'L\'onde sonore dans l\'air est une onde :',
        options: [
          'Longitudinale (compression / dilatation axiale)',
          'Transversale (ondulation perpendiculaire)',
          'Électromagnétique',
          'Gravitationnelle'
        ],
        correctIndex: 0,
        explanation: 'Le son dans l\'air se propage par compressions et décompressions successives dans la direction même de propagation (onde longitudinale).'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - SVT : LES ENZYMES
  // =========================================================================
  {
    id: 'svt-1ere-enzymes',
    subjectId: 'svt',
    gradeLevel: '1ere',
    title: 'Les Enzymes : Catalyseurs Biologiques Spécifiques',
    officialCode: 'SVT-1-03',
    description: 'Double spécificité (de substrat et d’action), site actif (acides aminés de fixation et catalytiques), cinétique enzymatique michaelienne (Vmax, Km), facteurs environnementaux (pH, température).',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Une enzyme est une protéine catalytique qui accélère la vitesse d\'une réaction biochimique sans modifier l\'équilibre ni être consommée.',
      'Double spécificité enzymatique : spécificité de substrat (reconnaissance d\'une molécule précise) et spécificité d\'action (type de réaction catalysée).',
      'Le site actif est une cavité tridimensionnelle comprenant des acides aminés de liaison (ajustement induit) et des acides aminés catalytiques.',
      'Cinétique michaelienne : à concentration de substrat croissante, la vitesse initiale vi plafonne à une vitesse maximale Vmax par saturation des sites actifs.',
      'Sensibilité environnementale : chaque enzyme a un optimum de température (dénaturation thermique irréversible au-delà de 50-60°C) et un optimum de pH.'
    ],
    keyFormulas: [
      {
        label: 'Équation générale de la catalyse enzymatique',
        formula: 'E + S \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} [ES] \\xrightarrow{k_{cat}} E + P',
        explanation: 'Formation transitoire du complexe enzyme-substrat [ES] avant libération du produit P et régénération de l\'enzyme libre E.'
      },
      {
        label: 'Vitesse initiale maximale (saturation)',
        formula: 'V_{\\max} = k_{cat} \\cdot [E]_{\\text{total}} \\quad \\text{quand } [ES] = [E]_{\\text{total}}',
        explanation: 'La vitesse maximale est proportionnelle à la quantité totale d\'enzyme présente dans le milieu réactionnel.'
      }
    ],
    courseSections: [
      {
        title: '1. Architecture moléculaire du site actif',
        content: [
          '• Repliement spatial de la chaîne polypeptidique créant une poche tridimensionnelle complémentaire du substrat.',
          '• Liaisons faibles : liaisons hydrogène, liaisons ioniques, interactions hydrophobes maintenant le substrat dans une géométrie favorable.',
          '• Abaissement de l\'énergie d\'activation : l\'enzyme stabilise l\'état de transition de la réaction.'
        ]
      },
      {
        title: '2. Facteurs modifiant l\'activité enzymatique',
        content: [
          '• Température : l\'élévation thermique accélère les chocs efficaces jusqu\'à l\'optimum (ex: 37°C chez l\'humain), puis dénature la structure tertiaire par rupture des liaisons faibles.',
          '• pH : modifie l\'état d\'ionisation des résidus d\'acides aminés du site actif (ex: pepsine gastrique optimale à pH 2, amylase salivaire à pH 7).',
          '• Mutations génétiques : un changement d\'un seul acide aminé dans le site actif peut inactiver totalement la protéine.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-enzymes-bac',
        title: 'Exercice Type Première : Étude cinétique et mutagénèse de la lactase',
        context: 'La lactase intestinale hydrolyse le lactose en glucose et galactose. On mesure la vitesse initiale de dégradation en fonction de [Lactose] chez des individus normaux et mutés.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Expliquer pourquoi la courbe de la vitesse initiale vi en fonction de la concentration en substrat présente un palier (vitesse maximale Vmax).',
            hints: ['Que deviennent les sites actifs des molécules d\'enzyme quand le substrat est en très grand excès ?'],
            solutionSteps: [
              'Aux faibles concentrations en substrat [S], de nombreuses enzymes ont leur site actif inoccupé : la vitesse vi est limitée par la fréquence des collisions efficaces E + S (phase linéaire).',
              'Aux fortes concentrations en substrat, chaque molécule d\'enzyme est continuellement engagée dans un complexe [ES] : les sites actifs sont tous saturés.',
              'Même si l\'on augmente encore [S], la vitesse ne peut plus augmenter car le facteur limitant est désormais la concentration totale en enzyme [E]tot.'
            ],
            finalAnswer: 'Le palier Vmax traduit le phénomène de saturation de l\'ensemble des sites actifs de l\'enzyme.',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Si l\'on double la concentration d\'enzyme dans la solution tout en maintenant une concentration saturante en lactose, que devient la valeur de Vmax ? Justifier.',
            hints: ['Relier Vmax à [E]totale par la formule Vmax = kcat × [E]tot.'],
            solutionSteps: [
              'À saturation de substrat, la vitesse maximale est directement proportionnelle au nombre d\'enzymes actives : Vmax = kcat × [E]tot.',
              'Doubler la quantité d\'enzymes double le nombre de complexes [ES] fonctionnant simultanément.',
              'Par conséquent, Vmax est rigoureusement doublée.'
            ],
            finalAnswer: 'La vitesse maximale Vmax est doublée (multipliée par 2).',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Chez un patient intolérant au lactose, le gène de la lactase porte une mutation faux-sens remplaçant un acide aspartique par une alanine en position 179 au cœur du site catalytique. Expliquer la perte d\'activité.',
            hints: ['Comparer la structure et les propriétés chimiques de l\'aspartate (acide) et de l\'alanine (apolaire neutre).'],
            solutionSteps: [
              'L\'acide aspartique porte une chaîne latérale carboxylate -COO^- ionisée, capable d\'agir comme donneur/accepteur de protons indispensables à la catalyse de rupture de la liaison osidique.',
              'L\'alanine possède un groupement méthyle -CH3 hydrophobe, court et électriquement neutre, totalement incapable de participer à ce transfert de proton.',
              'Bien que le lactose puisse encore se fixer, la réaction d\'hydrolyse ne peut plus avoir lieu : l\'enzyme perd son pouvoir catalytique.'
            ],
            finalAnswer: 'Perte de la fonction acide catalytique indispensable à la scission de la liaison glycosidique du lactose.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Pourquoi une ébullition à 100°C inactive-t-elle définitivement la lactase même après refroidissement de la solution à 37°C ?',
            hints: ['Distinguer liaisons covalentes peptidiques et liaisons faibles maintenant la structure tertiaire.'],
            solutionSteps: [
              'À 100°C, l\'agitation thermique rompt les liaisons faibles (hydrogène, hydrophobes, ioniques) qui stabilisent le repliement tridimensionnel (structure tertiaire) de la protéine.',
              'La conformation du site actif est irréversiblement détruite (dénaturation thermique avec pelote statistique désordonnée).',
              'Lors du retour à 37°C, la protéine ne retrouve pas sa conformation native correcte : les sites actifs sont anéantis.'
            ],
            finalAnswer: 'Dénaturation thermique irréversible par destruction de la conformation tridimensionnelle du site actif.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-enz-1',
        question: 'Comment agit une enzyme sur une réaction chimique ?',
        options: [
          'Elle abaisse l\'énergie d\'activation et accélère la réaction',
          'Elle déplace l\'état d\'équilibre final de la réaction',
          'Elle est consommée comme réactif stoéchiométrique',
          'Elle augmente la température du milieu'
        ],
        correctIndex: 0,
        explanation: 'L\'enzyme est un biocatalyseur : elle abaisse la barrière énergétique sans être consommée.'
      },
      {
        id: 'q-enz-2',
        question: 'Que désigne la double spécificité des enzymes ?',
        options: [
          'Spécificité de substrat et spécificité d\'action',
          'Spécificité de masse et spécificité de volume',
          'Spécificité pour l\'ADN et spécificité pour l\'ARN',
          'Spécificité jour et nuit'
        ],
        correctIndex: 0,
        explanation: 'Elle ne catalyse qu\'une seule transformation chimique précise sur un substrat chimique précis.'
      },
      {
        id: 'q-enz-3',
        question: 'Dans la cinétique michaelienne, à quoi correspond la vitesse maximale Vmax ?',
        options: [
          'À la saturation de la totalité des sites actifs enzymatiques',
          'À la destruction de l\'enzyme',
          'À l\'épuisement total du substrat',
          'À la température d\'ébullition'
        ],
        correctIndex: 0,
        explanation: 'Quand toutes les molécules d\'enzyme sont liées au substrat ([ES] = [E]tot), la vitesse atteint son plafond Vmax.'
      },
      {
        id: 'q-enz-4',
        question: 'Quelle est la conséquence d\'une élévation thermique à 90°C sur une enzyme humaine ?',
        options: [
          'La dénaturation de sa structure tertiaire et la perte de son activité',
          'Le doublement infini de son efficacité catalytique',
          'Sa transformation en molécule d\'ADN',
          'L\'inversion de sa spécificité de substrat'
        ],
        correctIndex: 0,
        explanation: 'La chaleur rompt les liaisons de faible énergie qui maintiennent le repliement actif de la protéine.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - SVT : STRUCTURE DU GLOBE TERRESTRE & SISMOLOGIE
  // =========================================================================
  {
    id: 'svt-1ere-structure-globe',
    subjectId: 'svt',
    gradeLevel: '1ere',
    title: 'Structure & Dynamique du Globe Terrestre : Sismologie et Modèle PREM',
    officialCode: 'SVT-1-04',
    description: 'Propagation des ondes sismiques P et S, discontinuités de Moho, Gutenberg et Lehmann, lithosphère cassante et asthénosphère ductile, modèle PREM.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Les ondes sismiques P (ondes premières, longitudinales de compression) traversent solides et liquides.',
      'Les ondes sismiques S (ondes secondaires, transversales de cisaillement) ne se propagent que dans les milieux solides rigides.',
      'Discontinuité du Moho (entre 7 km sous océans et 30-70 km sous continents) : sépare la croûte (basalte/gabbro ou granite) du manteau lithosphérique (péridotite).',
      'LVZ (Low Velocity Zone vers 100-150 km) : ralentissement des ondes marquant la transition entre la lithosphère rigide cassante et l\'asthénosphère ductile déformable.',
      'Discontinuité de Gutenberg (2 900 km) : frontière manteau inférieur solide / noyau externe liquide (arrêt des ondes S, zone d\'ombre).',
      'Discontinuité de Lehmann (5 150 km) : sépare le noyau externe liquide de la graine solide.'
    ],
    keyFormulas: [
      {
        label: 'Vitesse des ondes de compression P',
        formula: 'v_P = \\sqrt{\\frac{K + \\frac{4}{3}\\mu}{\\rho}}',
        explanation: 'K est le module d\'incompressibilité, µ le module de cisaillement et ρ la masse volumique.'
      },
      {
        label: 'Vitesse des ondes de cisaillement S',
        formula: 'v_S = \\sqrt{\\frac{\\mu}{\\rho}} \\quad (\\mu = 0 \\text{ dans un liquide} \\implies v_S = 0)',
        explanation: 'Un fluide n\'opposant aucune résistance au cisaillement (µ = 0), les ondes S sont arrêtées à la limite manteau-noyau (2 900 km).'
      }
    ],
    courseSections: [
      {
        title: '1. Les enveloppes concentriques de la Terre',
        content: [
          '• Croûte continentale : épaisseur 30 à 70 km, densité moyenne 2,7, roches magmatiques et métamorphiques (granitoïdes dominants).',
          '• Croûte océanique : épaisseur 6 à 10 km, densité moyenne 2,9, basaltes en coussins et gabbros.',
          '• Manteau : péridotite, densité de 3,3 à 5,5, subdivisé en manteau supérieur et inférieur.',
          '• Noyau : alliage fer-nickel, liquide à l\'extérieur, solide au centre (graine).'
        ]
      },
      {
        title: '2. Lithosphère et asthénosphère',
        content: [
          '• Définition thermique : la limite lithosphère-asthénosphère correspond conventionnellement à l\'isotherme 1 300°C.',
          '• Comportement mécanique : les plaques lithosphériques rigides glissent sur l\'asthénosphère ductile animée de lents mouvements de convection thermique.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-prem-bac',
        title: 'Problème Résolu : Exploitation d\'un sismogramme et découverte du noyau terrestre',
        context: 'Lors d\'un séisme majeur, les sismologues constatent qu\'entre 105° et 142° de distance épicentrale, aucun sismomètre n\'enregistre d\'ondes P directes, et au-delà de 105°, aucune onde S n\'est jamais reçue.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Rappeler la nature mécanique des ondes sismiques P et S et leur comportement lors de la traversée d\'un milieu liquide.',
            hints: ['P = compression/dilatation ; S = cisaillement. Les liquides résistent-ils au cisaillement ?'],
            solutionSteps: [
              'Les ondes P sont des ondes longitudinales de compression-dilatation : elles déforment le volume de la matière et se propagent dans les solides, les liquides et les gaz.',
              'Les ondes S sont des ondes transversales de cisaillement : elles déforment la matière perpendiculairement au sens de propagation sans changer son volume.',
              'Un liquide n\'ayant aucune rigidité élastique au cisaillement (module de cisaillement nul), les ondes S ne peuvent absolument pas s\'y propager.'
            ],
            finalAnswer: 'Les ondes P traversent solides et liquides ; les ondes S s\'arrêtent net à l\'entrée d\'un milieu liquide.',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. En déduire l\'état physique du manteau terrestre jusqu\'à 2 900 km et celui du noyau externe situé immédiatement sous la discontinuité de Gutenberg.',
            hints: ['Les ondes S traversent tout le manteau mais disparaissent brutalement à 2 900 km.'],
            solutionSteps: [
              'Comme les ondes S se propagent de la surface jusqu\'à 2 900 km de profondeur, l\'intégralité du manteau terrestre (supérieur et inférieur) est à l\'état solide.',
              'À 2 900 km de profondeur, les ondes S sont brutalement arrêtées : le noyau externe est donc constitué d\'un matériau liquide (fer et nickel fondus).'
            ],
            finalAnswer: 'Manteau solide et noyau externe liquide.',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Expliquer géométriquement l\'existence de la "zone d\'ombre" sismique pour les ondes P entre 105° et 142° de distance angulaire.',
            hints: ['Penser à la réfraction des ondes P par la diminution brutale de vitesse à l\'interface manteau solide / noyau liquide.'],
            solutionSteps: [
              'En pénétrant dans le noyau liquide à 2 900 km, la vitesse des ondes P chute brutalement (de ~13,7 km/s à ~8,1 km/s) car le liquide est plus compressible.',
              'Selon les lois de Snell-Descartes de la réfraction sismique, les rayons sismiques P sont fortement déviés vers l\'intérieur (vers la normale).',
              'Cette forte réfraction crée un cône d\'ombre en surface entre 105° et 142° où aucun rayon P direct ne peut émerger.'
            ],
            finalAnswer: 'Réfraction des ondes P vers la normale due au ralentissement brutal à la frontière manteau-noyau.',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Comment a-t-on prouvé en 1936 que la graine au cœur de la Terre (au-delà de 5 150 km) était solide ?',
            hints: ['Découverte d\'Inge Lehmann : réflexion et conversion d\'ondes P en ondes S au centre.'],
            solutionSteps: [
              'Inge Lehmann a détecté des ondes P réfléchies et transmises très faibles dans la zone d\'ombre.',
              'De plus, à la traversée de la graine solide, une partie des ondes P se convertit en ondes S (ondes PKJKP), prouvant que la matière y retrouve une rigidité et un module de cisaillement positif.',
              'La graine centrale est donc solide (sous l\'effet d\'une pression gigantesque de plus de 330 GPa).'
            ],
            finalAnswer: 'Observation de réflexions et de conversions P-S au niveau de la discontinuité de Lehmann à 5 150 km.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-prem-1',
        question: 'Quelle discontinuité sépare la croûte terrestre du manteau supérieur ?',
        options: [
          'La discontinuité de Mohorovičić (Moho)',
          'La discontinuité de Gutenberg',
          'La discontinuité de Lehmann',
          'La faille de San Andreas'
        ],
        correctIndex: 0,
        explanation: 'Le Moho marque le saut de densité et de vitesse sismique entre les roches de la croûte et la péridotite du manteau.'
      },
      {
        id: 'q-prem-2',
        question: 'À quelle profondeur se situe la discontinuité de Gutenberg marquant l\'entrée dans le noyau externe liquide ?',
        options: ['2 900 km', '30 km', '100 km', '5 150 km'],
        correctIndex: 0,
        explanation: 'À 2 900 km de profondeur, les ondes S s\'éteignent net marquant le sommet du noyau externe.'
      },
      {
        id: 'q-prem-3',
        question: 'Quelle roche constitue la quasi-totalité du manteau terrestre ?',
        options: ['La péridotite', 'Le granite', 'Le calcaire', 'Le basalte'],
        correctIndex: 0,
        explanation: 'La péridotite est une roche ultrabasique riche en olivine et pyroxènes constituant le manteau.'
      },
      {
        id: 'q-prem-4',
        question: 'Quelle est la principale différence mécanique entre lithosphère et asthénosphère ?',
        options: [
          'La lithosphère est rigide et cassante, l\'asthénosphère est ductile et déformable',
          'La lithosphère est liquide, l\'asthénosphère est un gaz',
          'La lithosphère est au centre de la Terre',
          'Il n\'y a aucune différence'
        ],
        correctIndex: 0,
        explanation: 'La lithosphère se fracture sous les contraintes (séismes), tandis que l\'asthénosphère flue lentement par déformation plastique.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - SVT : RÉFLEXE MYOTATIQUE & SYNAPSE NEUROMUSCULAIRE
  // =========================================================================
  {
    id: 'svt-term-reflexe-myotatique',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'Le Réflexe Myotatique & la Communication Nerveuse Motrice',
    officialCode: 'SVT-T-04',
    description: 'Arc réflexe monosynaptique, potentiel d’action (loi du tout ou rien), codage en fréquence, transmission synaptique chimique (acétylcholine) et sommation spatio-temporelle.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Le réflexe myotatique est la contraction réflexe involontaire d\'un muscle squelettique en réponse à son propre étirement (rôle postural fondamental).',
      'Arc réflexe monosynaptique : fuseau neuromusculaire (récepteur) -> fibre sensitive Ia (voie afférente) -> ganglion spinal -> synapse spinale excitatrice directe -> motoneurone alpha (voie efférente) -> plaque motrice (effecteur).',
      'Innervation réciproque : inhibition simultanée du muscle antagoniste via un interneurone inhibiteur spinal.',
      'Potentiel d\'action (PA) : dépolarisation transitoire de +100 mV d\'amplitude constante (loi du tout ou rien).',
      'Codage du message : codé en modulation de fréquence de potentiels d\'action le long de l\'axone, et en concentration de neurotransmetteur (acétylcholine) dans la fente synaptique.'
    ],
    keyFormulas: [
      {
        label: 'Vitesse de conduction de l\'influx afférent Ia',
        formula: 'v = \\frac{d}{\\Delta t} \\approx 70 \\text{ à } 120 \\text{ m/s}',
        explanation: 'Les fibres sensitives Ia sont de gros calibre et myélinisées (conduction saltatoire de nœud de Ranvier en nœud de Ranvier).'
      },
      {
        label: 'Intégration neuronale (sommation)',
        formula: 'V_m(t) = \\sum_{i} \\text{PPSE}_i(t) + \\sum_{j} \\text{PPSI}_j(t) \\ge V_{\\text{seuil}} \\implies \\text{Émission de PA}',
        explanation: 'Le segment initial du motoneurone intègre algébriquement potentiels postsynaptiques excitateurs et inhibiteurs.'
      }
    ],
    courseSections: [
      {
        title: '1. L\'arc réflexe spinal monosynaptique',
        content: [
          '• Étirement brutal du tendon (ex: tendon rotulien ou achilléen) perçu par les mécanorécepteurs du fuseau neuromusculaire.',
          '• Naissance de potentiels d\'action conduits par les axones sensitifs Ia cheminant dans le nerf rachidien, entrant dans la moelle épinière par la racine dorsale (corps cellulaire dans le ganglion spinal).',
          '• Dans la substance grise de la moelle, connexion monosynaptique directe avec le motoneurone alpha de la corne ventrale.',
          '• Trajet efférent via la racine ventrale pour innerver les fibres musculaires du muscle étiré, provoquant sa contraction réflexe.'
        ]
      },
      {
        title: '2. Fonctionnement de la synapse neuromusculaire',
        content: [
          '• Arrivée du train de PA au bouton terminal présynaptique : ouverture de canaux calcium Ca2+ voltage-dépendants.',
          '• Exocytose des vésicules synaptiques libérant l\'acétylcholine (ACh) dans la fente.',
          '• Fixation de l\'ACh sur ses récepteurs nicotiniques postsynaptiques (canaux Na+ chimio-dépendants) déclenchant un potentiel de plaque motrice puis la contraction.',
          '• Dégradation rapide de l\'ACh par l\'acétylcholinestérase pour permettre le relâchement.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-reflexe-bac',
        title: 'Problème Type Bac : Électromyogramme du réflexe achilléen et effet d\'une toxine synaptique',
        context: 'On percute le tendon d\'Achille d\'un sujet à t = 0 ms. Des électrodes placées sur le muscle soléaire enregistrent la réponse électrique. La distance parcourue par l\'influx aller-retour est de 1,60 m.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: '1. La réponse musculaire (potentiel global d\'action) apparaît sur l\'électromyogramme avec un temps de latence de 32 ms. Sachant que le délai synaptique médullaire est estimé à 2 ms, calculer la vitesse moyenne de propagation de l\'influx nerveux.',
            hints: ['Temps de conduction pure = temps total - délai synaptique. v = distance / temps.'],
            solutionSteps: [
              'Temps consacré exclusivement à la propagation nerveuse : Δt_conduction = 32 ms - 2 ms = 30 ms = 0,030 s.',
              'Distance aller-retour le long du nerf sciatique : d = 1,60 m.',
              'Vitesse moyenne : v = d / Δt_conduction = 1,60 / 0,030 ≈ 53,3 m/s.'
            ],
            finalAnswer: 'Vitesse de propagation de l\'ordre de 53,3 m/s (conforme aux fibres myélinisées des mammifères).',
            pointsAllocated: 1.5
          },
          {
            questionText: '2. Expliquer comment l\'intensité d\'étirement mécanique du muscle est codée le long de la fibre sensitive afférente Ia.',
            hints: ['Un potentiel d\'action a une amplitude invariable (loi du tout ou rien). Comment varie le train d\'ondes ?'],
            solutionSteps: [
              'Le potentiel d\'action individuel obéit à la loi du tout ou rien : son amplitude (~100 mV) et sa durée (~1 ms) sont strictement invariables.',
              'Une augmentation de l\'étirement mécanique entraîne une plus grande dépolarisation du récepteur sensoriel.',
              'Cette intensité accrue est codée au niveau de l\'axone par une augmentation de la fréquence d\'émission des potentiels d\'action (codage en modulation de fréquence).'
            ],
            finalAnswer: 'L\'information d\'intensité est codée en modulation de fréquence de potentiels d\'action.',
            pointsAllocated: 1.5
          },
          {
            questionText: '3. Pourquoi la contraction du muscle extenseur s\'accompagne-t-elle nécessairement du relâchement simultané du muscle fléchisseur antagoniste ?',
            hints: ['Préciser le rôle de l\'interneurone inhibiteur spinal dans le circuit médullaire.'],
            solutionSteps: [
              'Pour que le membre puisse bouger efficacement, le muscle opposé (antagoniste) ne doit pas s\'opposer au mouvement.',
              'La fibre afférente Ia émet une collatérale axonale dans la moelle qui fait synapse avec un interneurone inhibiteur.',
              'Cet interneurone libère un neurotransmetteur inhibiteur (GABA ou glycine) qui hyperpolarise le motoneurone du muscle antagoniste (PPSI).',
              'Le motoneurone du muscle antagoniste est réduit au silence : le muscle se relâche (innervation réciproque de Sherrington).'
            ],
            finalAnswer: 'Inhibition du motoneurone antagoniste par un interneurone inhibiteur spinal (innervation réciproque).',
            pointsAllocated: 1.5
          },
          {
            questionText: '4. Le curare est une toxine qui se lie aux récepteurs nicotiniques de l\'acétylcholine sur la membrane musculaire sans ouvrir le canal sodique. Déduire ses effets sur le réflexe myotatique et la survie.',
            hints: ['Le curare agit comme un antagoniste compétitif bloquant la transmission neuromusculaire.'],
            solutionSteps: [
              'En occupant le site de liaison de l\'acétylcholine sur la membrane musculaire postsynaptique, le curare empêche l\'entrée d\'ions Na+ dépolarisants.',
              'Aucun potentiel d\'action musculaire ne peut être déclenché : la transmission est totalement rompue.',
              'Le réflexe myotatique est aboli, provoquant une paralysie musculaire flasque généralisée.',
              'Sans assistance ventilatoire mécanique, la paralysie des muscles respiratoires (notamment le diaphragme) entraîne la mort par asphyxie.'
            ],
            finalAnswer: 'Abolition du réflexe et paralysie flasque mortelle par blocage de la plaque motrice musculaire.',
            pointsAllocated: 1.5
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-ref-1',
        question: 'Pourquoi qualifie-t-on l\'arc du réflexe myotatique de monosynaptique ?',
        options: [
          'Il n\'y a qu\'une seule synapse dans la moelle entre le neurone sensitif et le motoneurone',
          'Il ne possède qu\'un seul axone dans tout le corps',
          'Il ne fonctionne qu\'une seule fois par jour',
          'Il utilise un seul type d\'ion chimique'
        ],
        correctIndex: 0,
        explanation: 'La voie excitatrice directe ne comporte qu\'une seule jonction synaptique centrale dans le système nerveux.'
      },
      {
        id: 'q-ref-2',
        question: 'Où se situe le corps cellulaire des neurones sensitifs (fibres afférentes Ia) ?',
        options: [
          'Dans le ganglion spinal de la racine dorsale',
          'Dans la corne ventrale de la moelle',
          'Dans le cortex moteur cérébral',
          'À l\'intérieur du muscle lui-même'
        ],
        correctIndex: 0,
        explanation: 'Les corps cellulaires des neurones en T sensitifs sont logés dans le ganglion spinal de la racine dorsale.'
      },
      {
        id: 'q-ref-3',
        question: 'Quel neurotransmetteur assure la transmission chimique à la jonction neuromusculaire ?',
        options: ['L\'acétylcholine', 'La dopamine', 'La sérotonine', 'L\'adrénaline'],
        correctIndex: 0,
        explanation: 'L\'acétylcholine est le neurotransmetteur exclusif des motoneurones squelettiques chez les vertébrés.'
      },
      {
        id: 'q-ref-4',
        question: 'Comment est codée l\'intensité de la stimulation le long d\'une fibre nerveuse myélinisée ?',
        options: [
          'En fréquence de potentiels d\'action d\'amplitude constante',
          'En amplitude de potentiels d\'action (hauteur des pics)',
          'En vitesse de circulation des molécules de glucose',
          'En coloration de la membrane cellulaire'
        ],
        correctIndex: 0,
        explanation: 'L\'amplitude du PA étant invariable (loi du tout ou rien), c\'est la fréquence d\'émission qui traduit l\'intensité.'
      }
    ]
  }
];
