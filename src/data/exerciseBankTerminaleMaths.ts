import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_TERMINALE_MATHS: BankExerciseItem[] = [
  {
    id: 'ex-tm-bank-1',
    targetChapterId: 'math-term-deriv-tvi',
    title: 'Théorème des Valeurs Intermédiaires (TVI) & Équilibre d’un Marché Crypto',
    context: 'La fonction d\'équilibre offre-demande d\'une bourse crypto est donnée par f(x) = x^3 + 3x - 5 sur l\'intervalle [1 ; 2].',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'tech',
    themeLabel: '📊 Cryptomonnaie & TVI',
    questions: [
      {
        questionText: '1. Étudier la continuité et les variations de la fonction f sur [1 ; 2].',
        hints: ['Polynôme donc continu et dérivable.', 'f\'(x) = 3x^2 + 3 > 0.'],
        solutionSteps: [
          'La fonction f est un polynôme, donc elle est continue et dérivable sur ℝ et en particulier sur [1 ; 2].',
          'f\'(x) = 3x^2 + 3.',
          'Pour tout réel x, 3x^2 ≥ 0, donc f\'(x) ≥ 3 > 0.',
          'La fonction f est donc strictement croissante sur [1 ; 2].'
        ],
        finalAnswer: 'f est continue et strictement croissante sur [1 ; 2].',
        pointsAllocated: 3
      },
      {
        questionText: '2. Démontrer que l\'équation f(x) = 0 admet une unique solution α sur [1 ; 2] et donner un encadrement à 0,1 près.',
        hints: ['Calculer f(1) et f(2).', 'Corollaire du TVI (théorème de la bijection).', 'Tester f(1,1), f(1,2)...'],
        solutionSteps: [
          'f(1) = 1 + 3 - 5 = -1 < 0.',
          'f(2) = 8 + 6 - 5 = 9 > 0.',
          '0 est strictement compris entre f(1) et f(2).',
          'Comme f est continue et strictement croissante sur [1 ; 2], d\'après le corollaire du TVI, l\'équation f(x) = 0 admet une unique solution α dans [1 ; 2].',
          'Balayage : f(1,1) = 1,331 + 3,3 - 5 = -0,369 ; f(1,2) = 1,728 + 3,6 - 5 = +0,328. Donc 1,1 < α < 1,2.'
        ],
        finalAnswer: 'Unique solution α avec 1,1 < α < 1,2 (environ 1,154).',
        pointsAllocated: 5,
        bacTrap: 'Ne pas oublier de préciser "continue" ET "strictement croissante" pour garantir l\'unicité !'
      }
    ]
  },
  {
    id: 'ex-tm-bank-2',
    targetChapterId: 'math-term-deriv-tvi',
    title: 'Convexité & Point d’Inflexion d’une Courbe de Consommation',
    context: 'La consommation énergétique C(t) d\'une usine en fonction du temps t ∈ [0 ; 12] est modélisée par C(t) = -t^3 + 18t^2 + 10t.',
    difficulty: 'Type Bac',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '⚡ Énergie & Convexité',
    questions: [
      {
        questionText: '1. Calculer la dérivée première C\'(t) puis la dérivée seconde C\'\'(t).',
        hints: ['C\'(t) = -3t^2 + 36t + 10.', 'C\'\'(t) = (C\'(t))\'.'],
        solutionSteps: [
          'C\'(t) = -3t^2 + 36t + 10.',
          'C\'\'(t) = -6t + 36 = -6(t - 6).'
        ],
        finalAnswer: 'C\'\'(t) = -6t + 36.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Étudier le signe de C\'\'(t), préciser les intervalles où C est convexe/concave et déterminer les coordonnées du point d\'inflexion.',
        hints: ['C\'\'(t) s\'annule et change de signe en t = 6.'],
        solutionSteps: [
          'Pour t < 6 : C\'\'(t) > 0, donc C est convexe.',
          'Pour t > 6 : C\'\'(t) < 0, donc C est concave.',
          'En t = 6, la dérivée seconde s\'annule en changeant de signe : il y a un point d\'inflexion.',
          'C(6) = -(216) + 18(36) + 60 = -216 + 648 + 60 = 492.'
        ],
        finalAnswer: 'Convexe sur [0 ; 6], concave sur [6 ; 12] ; point d\'inflexion I(6 ; 492).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-bank-3',
    targetChapterId: 'math-term-logarithme',
    title: 'Croissances Comparées & Complexité d’un Algorithme d’IA',
    context: 'L\'efficacité d\'un modèle d\'apprentissage profond dépend de la fonction f(x) = (ln x) / x^2 pour x > 0.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'tech',
    themeLabel: '🧠 IA & Croissances Comparées',
    questions: [
      {
        questionText: '1. Déterminer la limite de f(x) en +∞ en utilisant les théorèmes de croissances comparées.',
        hints: ['Pour tout entier n ≥ 1, lim (ln x) / x^n = 0 quand x -> +∞.'],
        solutionSteps: [
          'D\'après le théorème des croissances comparées du cours de Terminale : lim_{x -> +∞} (ln x) / x^2 = 0.',
          'La puissance de x l\'emporte sur le logarithme à l\'infini.'
        ],
        finalAnswer: 'lim f(x) = 0 en +∞ (l\'axe des abscisses est asymptote horizontale).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la dérivée f\'(x) et dresser le tableau de variations complet de f sur ]0 ; +∞[.',
        hints: ['Formule du quotient : (u/v)\' = (u\'v - uv\') / v^2.', 'u = ln x, v = x^2.'],
        solutionSteps: [
          'u\'(x) = 1/x et v\'(x) = 2x.',
          'f\'(x) = [ (1/x) * x^2 - (ln x) * 2x ] / (x^2)^2 = [ x - 2x ln x ] / x^4 = (1 - 2 ln x) / x^3.',
          'Le dénominateur x^3 est strictement positif sur ]0 ; +∞[.',
          '1 - 2 ln x = 0 <=> ln x = 1/2 <=> x = e^(1/2) = √e.',
          'f\'(x) > 0 pour x < √e (f croissante) et f\'(x) < 0 pour x > √e (f décroissante).',
          'Maximum en x = √e : f(√e) = (1/2) / e = 1 / (2e).'
        ],
        finalAnswer: 'f\'(x) = (1 - 2 ln x) / x^3 ; maximum en x = √e avec f(√e) = 1/(2e).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tm-bank-4',
    targetChapterId: 'math-term-logarithme',
    title: 'Équations & Inéquations avec Logarithme Népérien',
    context: 'On résout dans ]0 ; +∞[ l\'inéquation ln(2x - 1) ≤ ln(x + 3) intervenant dans un seuil d\'alerte de pollution.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '📐 Algèbre & Logarithme',
    questions: [
      {
        questionText: '1. Déterminer l\'ensemble de validité D de cette inéquation.',
        hints: ['La fonction ln n\'est définie que pour des arguments strictement positifs.'],
        solutionSteps: [
          '2x - 1 > 0 <=> x > 1/2.',
          'x + 3 > 0 <=> x > -3.',
          'L\'intersection des deux conditions donne D = ]1/2 ; +∞[.'
        ],
        finalAnswer: 'D = ]1/2 ; +∞[.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Résoudre l\'inéquation sur D grâce à la stricte croissance de la fonction ln.',
        hints: ['ln(a) ≤ ln(b) <=> a ≤ b car la fonction ln est strictement croissante sur ℝ*+.'],
        solutionSteps: [
          'Par stricte croissance de ln : 2x - 1 ≤ x + 3.',
          '2x - x ≤ 3 + 1 <=> x ≤ 4.',
          'En recoupant avec le domaine de validité D = ]1/2 ; +∞[ : x ∈ ]1/2 ; 4].'
        ],
        finalAnswer: 'S = ]1/2 ; 4].',
        pointsAllocated: 4,
        bacTrap: 'Ne pas oublier de restreindre au domaine de validité D : les nombres ≤ 1/2 sont exclus !'
      }
    ]
  },
  {
    id: 'ex-tm-bank-5',
    targetChapterId: 'math-term-integration',
    title: 'Intégration par Parties & Débit d’un Serveur Streaming',
    context: 'L\'énergie consommée par un serveur de streaming vidéo pendant une durée T = 1 heure est donnée par l\'intégrale I = ∫[0 à 1] (2x + 1) * e^(-x) dx.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'tech',
    themeLabel: '💻 Streaming & Intégration par Parties',
    questions: [
      {
        questionText: '1. Énoncer la formule d\'intégration par parties pour deux fonctions u et v dérivables.',
        hints: ['∫ u\' v = [u v] - ∫ u v\'.'],
        solutionSteps: [
          '∫[a à b] u(x) v\'(x) dx = [u(x) v(x)][a à b] - ∫[a à b] u\'(x) v(x) dx.'
        ],
        finalAnswer: '∫ u v\' dx = [u v] - ∫ u\' v dx.',
        pointsAllocated: 2
      },
      {
        questionText: '2. En posant u(x) = 2x + 1 et v\'(x) = e^(-x), calculer la valeur exacte de l\'intégrale I.',
        hints: ['u\'(x) = 2.', 'v(x) = -e^(-x).'],
        solutionSteps: [
          'u(x) = 2x + 1 => u\'(x) = 2.',
          'v\'(x) = e^(-x) => v(x) = -e^(-x).',
          'I = [ -(2x + 1) e^(-x) ][0 à 1] - ∫[0 à 1] 2 * (-e^(-x)) dx.',
          'Crochet : -(3)e^(-1) - [ -(1)e^0 ] = -3/e + 1.',
          'Deuxième intégrale : ∫[0 à 1] -2 e^(-x) dx = [ 2 e^(-x) ][0 à 1] = 2/e - 2.',
          'I = (-3/e + 1) - (2/e - 2) = -3/e + 1 - 2/e + 2 = 3 - 5/e.'
        ],
        finalAnswer: 'I = 3 - 5/e ≈ 1,161.',
        pointsAllocated: 6
      }
    ]
  },
  {
    id: 'ex-tm-bank-6',
    targetChapterId: 'math-term-integration',
    title: 'Calcul d’Aire & Rendement d’une Voilure d’Hydroptère',
    context: 'Le profil d\'une dérive d\'hydroptère de course est délimité par les courbes f(x) = 4 - x^2 et g(x) = 3x pour x ∈ [0 ; 1]. L\'aire du profil est l\'intégrale A = ∫[0 à 1] (f(x) - g(x)) dx.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '⛵ Voile & Calcul d’Aire',
    questions: [
      {
        questionText: '1. Vérifier que pour tout x ∈ [0 ; 1], f(x) ≥ g(x).',
        hints: ['Étudier la différence f(x) - g(x) = -x^2 - 3x + 4.'],
        solutionSteps: [
          'f(x) - g(x) = -x^2 - 3x + 4.',
          'Racines du trinôme : Δ = 9 - 4(-1)(4) = 25 ; x1 = (3 - 5)/(-2) = 1 ; x2 = (3 + 5)/(-2) = -4.',
          'Puisque le coefficient devant x^2 est négatif, le trinôme est positif entre ses racines, donc sur [0 ; 1].',
          'Ainsi f(x) ≥ g(x) sur [0 ; 1].'
        ],
        finalAnswer: 'f(x) ≥ g(x) sur [0 ; 1].',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer l\'aire A en unités d\'aire.',
        hints: ['Primitive de -x^2 - 3x + 4 : -x^3/3 - 1,5x^2 + 4x.'],
        solutionSteps: [
          'A = ∫[0 à 1] (-x^2 - 3x + 4) dx = [ -x^3 / 3 - 3x^2 / 2 + 4x ][0 à 1].',
          'En 1 : -1/3 - 3/2 + 4 = (-2 - 9 + 24) / 6 = 13 / 6.',
          'En 0 : 0.',
          'A = 13 / 6 ≈ 2,17 unités d\'aire.'
        ],
        finalAnswer: 'Aire A = 13 / 6 u.a. (environ 2,17 u.a.).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-bank-7',
    targetChapterId: 'math-term-loi-binomiale',
    title: 'Loi Binomiale & Contrôle Qualité de Satellites Spatiaux',
    context: 'Une ligne robotique assemble des capteurs solaires avec une probabilité de défaut p = 0,02. On prélève au hasard un lot de n = 50 capteurs indépendants. Soit X le nombre de capteurs défectueux.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'space',
    themeLabel: '🛰️ Aérospatial & Loi Binomiale',
    questions: [
      {
        questionText: '1. Justifier que X suit une loi binomiale dont on précisera les paramètres n et p.',
        hints: ['Répétition de n épreuves de Bernoulli identiques et indépendantes à deux issues (succès = défectueux).'],
        solutionSteps: [
          'L\'expérience consiste en la répétition de 50 tirages identiques et indépendants d\'un capteur (avec remise ou tirage dans une grande population assimilable à une remise).',
          'Chaque tirage n\'a que deux issues : "défectueux" (succès avec probabilité p = 0,02) ou "conforme" (échec avec q = 0,98).',
          'La variable aléatoire X comptant le nombre de succès suit donc la loi binomiale B(n = 50, p = 0,02).'
        ],
        finalAnswer: 'X ~ B(50 ; 0,02).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la probabilité d\'avoir aucun capteur défectueux P(X = 0), puis au moins un défectueux P(X ≥ 1) à 10^-3 près.',
        hints: ['P(X = 0) = (0,98)^50.', 'P(X ≥ 1) = 1 - P(X = 0).'],
        solutionSteps: [
          'P(X = 0) = (50 0) * (0,02)^0 * (0,98)^50 = (0,98)^50 ≈ 0,364.',
          'P(X ≥ 1) = 1 - P(X = 0) = 1 - 0,364 = 0,636.'
        ],
        finalAnswer: 'P(X = 0) ≈ 0,364 (36,4%) et P(X ≥ 1) ≈ 0,636 (63,6%).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tm-bank-8',
    targetChapterId: 'math-term-suites-recurrence',
    title: 'Démonstration par Récurrence : Majoration d’une Suite Logistique',
    context: 'Soit la suite (un) définie par u0 = 1 et un+1 = √(2un + 3). On souhaite prouver que pour tout entier naturel n, 0 ≤ un ≤ 3.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '📐 Récurrence & Convergence',
    questions: [
      {
        questionText: '1. Réaliser l\'initialisation de la propriété P(n) : "0 ≤ un ≤ 3" pour n = 0.',
        hints: ['Vérifier que u0 vérifie l\'encadrement.'],
        solutionSteps: [
          'Pour n = 0 : u0 = 1.',
          'On a bien 0 ≤ 1 ≤ 3.',
          'La propriété P(0) est donc vraie.'
        ],
        finalAnswer: 'P(0) est vérifiée car u0 = 1 ∈ [0 ; 3].',
        pointsAllocated: 2
      },
      {
        questionText: '2. Réaliser l\'hérédité et conclure la démonstration par récurrence.',
        hints: ['Supposer 0 ≤ un ≤ 3.', 'Montrer que 0 ≤ √(2un + 3) ≤ 3.'],
        solutionSteps: [
          'Hypothèse de récurrence : Supposons que pour un entier k ≥ 0 fixé, P(k) soit vraie, c\'est-à-dire 0 ≤ uk ≤ 3.',
          'Alors : 2 * 0 + 3 ≤ 2uk + 3 ≤ 2 * 3 + 3, soit 3 ≤ 2uk + 3 ≤ 9.',
          'Par stricte croissance de la fonction racine carrée sur [0 ; +∞[ : √3 ≤ √(2uk + 3) ≤ √9.',
          'Comme 0 ≤ √3 et √9 = 3, on en déduit que 0 ≤ uk+1 ≤ 3.',
          'P(k+1) est donc vraie.',
          'Conclusion : La propriété est initialisée en n=0 et héréditaire pour tout k ≥ 0, elle est donc vraie pour tout n ∈ ℕ : pour tout n, 0 ≤ un ≤ 3.'
        ],
        finalAnswer: 'Démonstration complète : la suite est bornée par 0 et 3 pour tout n ∈ ℕ.',
        pointsAllocated: 6
      }
    ]
  },
  {
    id: 'ex-tm-bank-9',
    targetChapterId: 'math-term-geometrie-espace',
    title: 'Géométrie dans l’Espace & Équation Cartésienne de Plan d’un Pare-Feu',
    context: 'Dans un repère orthonormé (O, i, j, k), un plan de sécurité (P) passe par le point A(2 ; -1 ; 3) et admet pour vecteur normal n(3 ; -2 ; 4).',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'tech',
    themeLabel: '🛡️ Cybersécurité 3D & Vecteur Normal',
    questions: [
      {
        questionText: '1. Donner la forme générale de l\'équation cartésienne d\'un plan de vecteur normal n(a ; b ; c).',
        hints: ['ax + by + cz + d = 0.'],
        solutionSteps: [
          'L\'équation cartésienne d\'un plan de vecteur normal n(a ; b ; c) est de la forme ax + by + cz + d = 0 avec (a, b, c) ≠ (0, 0, 0).'
        ],
        finalAnswer: 'ax + by + cz + d = 0.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Déterminer l\'équation cartésienne exacte du plan (P). Le point B(4 ; 2 ; 1) appartient-il à ce plan ?',
        hints: ['3x - 2y + 4z + d = 0. Remplacer x, y, z par les coordonnées de A.', 'Tester les coordonnées de B.'],
        solutionSteps: [
          'Avec n(3 ; -2 ; 4), l\'équation s\'écrit 3x - 2y + 4z + d = 0.',
          'Comme A(2 ; -1 ; 3) ∈ (P) : 3(2) - 2(-1) + 4(3) + d = 0 <=> 6 + 2 + 12 + d = 0 <=> 20 + d = 0 <=> d = -20.',
          'Équation : 3x - 2y + 4z - 20 = 0.',
          'Test pour B(4 ; 2 ; 1) : 3(4) - 2(2) + 4(1) - 20 = 12 - 4 + 4 - 20 = -8 ≠ 0.',
          'Le point B n\'appartient pas au plan (P).'
        ],
        finalAnswer: '3x - 2y + 4z - 20 = 0 ; B n\'appartient pas au plan car le résultat vaut -8 ≠ 0.',
        pointsAllocated: 6
      }
    ]
  },
  {
    id: 'ex-tm-bank-10',
    targetChapterId: 'math-term-denombrement',
    title: 'Combinatoire & Sécurité d’un Mot de Passe Maître',
    context: 'Un système d\'authentification génère des clés de sécurité de 8 caractères distincts choisis parmi les 26 lettres minuscules et les 10 chiffres (36 caractères au total).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🔐 Cybersécurité & Arrangements',
    questions: [
      {
        questionText: '1. Quel est le nombre total de clés possibles si les caractères doivent être distincts et que l\'ordre compte ?',
        hints: ['Arrangement de 8 éléments parmi 36 : A(36, 8) = 36! / (36 - 8)!.'],
        solutionSteps: [
          'Comme l\'ordre importe et que les caractères sont sans répétition, il s\'agit d\'un arrangement de 8 parmi 36.',
          'A(36, 8) = 36 * 35 * 34 * 33 * 32 * 31 * 30 * 29 ≈ 1,22 * 10^12 clés.'
        ],
        finalAnswer: 'A(36, 8) ≈ 1,22 * 10^12 clés possibles.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Combien de codes comporteraient exactement 5 lettres et 3 chiffres (l\'ordre comptant toujours) ?',
        hints: ['Choisir les 5 positions des lettres parmi 8 : (8 5), puis arranger 5 lettres parmi 26 et 3 chiffres parmi 10.'],
        solutionSteps: [
          'Choix des 5 positions des lettres : (8 5) = 56.',
          'Arrangement des 5 lettres distinctes parmi 26 : A(26, 5) = 26 * 25 * 24 * 23 * 22 = 7 893 600.',
          'Arrangement des 3 chiffres distincts parmi 10 : A(10, 3) = 10 * 9 * 8 = 720.',
          'Total = 56 * 7 893 600 * 720 ≈ 3,18 * 10^11 codes.'
        ],
        finalAnswer: 'Environ 3,18 * 10^11 codes (soit environ 26% des combinaisons totales).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tm-bank-11',
    targetChapterId: 'math-term-equa-diff',
    title: 'Équation Différentielle y’ = ay + b & Vitesse d’une Moto Électrique',
    context: 'La vitesse v(t) d\'un prototype lors de son accélération vérifie l\'équation différentielle v\'(t) + 0,1 v(t) = 8 avec v(0) = 0 (vitesse nulle au départ).',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'sport',
    themeLabel: '🏍️ Moto Électrique & Équation Différentielle',
    questions: [
      {
        questionText: '1. Mettre l\'équation sous la forme v\' = ay + b et donner la solution générale de cette équation différentielle.',
        hints: ['v\' = -0,1 v + 8.', 'Solutions générales : v(t) = C * e^(at) - b/a.'],
        solutionSteps: [
          'v\' = -0,1 v + 8, avec a = -0,1 et b = 8.',
          'Solution particulière constante : v_p = -b / a = -8 / (-0,1) = 80.',
          'Les solutions générales sont de la forme v(t) = C * e^(-0,1t) + 80, où C est une constante réelle.'
        ],
        finalAnswer: 'v(t) = C · e^(-0,1t) + 80.',
        pointsAllocated: 4
      },
      {
        questionText: '2. En utilisant la condition initiale v(0) = 0, déterminer la constante C et calculer la vitesse limite maximale.',
        hints: ['v(0) = C + 80 = 0 <=> C = -80.', 'Quand t -> +∞, e^(-0,1t) -> 0.'],
        solutionSteps: [
          'v(0) = C * e^0 + 80 = C + 80 = 0 => C = -80.',
          'L\'expression unique est v(t) = 80 * (1 - e^(-0,1t)).',
          'Lorsque t tend vers +∞, lim e^(-0,1t) = 0, donc lim v(t) = 80 m/s (environ 288 km/h).'
        ],
        finalAnswer: 'v(t) = 80(1 - e^(-0,1t)) ; vitesse limite = 80 m/s (288 km/h).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-bank-12',
    targetChapterId: 'math-exp-complexes',
    title: 'Nombres Complexes : Forme Exponentielle & Fractale de Julia',
    context: 'Dans le plan complexe d\'un générateur de fractales, on considère le nombre complexe z = 1 + i√3.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'gaming',
    themeLabel: '🎮 Fractales & Forme Exponentielle',
    questions: [
      {
        questionText: '1. Calculer le module |z| et un argument θ de z.',
        hints: ['|z| = √(a^2 + b^2).', 'cos θ = a/|z|, sin θ = b/|z|.'],
        solutionSteps: [
          '|z| = √(1^2 + (√3)^2) = √(1 + 3) = √4 = 2.',
          'cos θ = 1/2 et sin θ = √3/2.',
          'Donc θ = π/3 [2π].'
        ],
        finalAnswer: '|z| = 2 et arg(z) = π/3 rad.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Écrire z sous forme exponentielle et calculer z^6.',
        hints: ['z = r * e^(iθ).', '(r * e^(iθ))^n = r^n * e^(inθ).', 'e^(i 2π) = 1.'],
        solutionSteps: [
          'Forme exponentielle : z = 2 * e^(i π/3).',
          'z^6 = (2 * e^(i π/3))^6 = 2^6 * e^(i 6π/3) = 64 * e^(i 2π).',
          'Comme e^(i 2π) = cos(2π) + i sin(2π) = 1 + 0 = 1, on a z^6 = 64 (un réel pur positif).'
        ],
        finalAnswer: 'z = 2e^(i π/3) et z^6 = 64 (réel pur).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-bank-13',
    targetChapterId: 'math-exp-arithmetique',
    title: 'Arithmétique, Théorème de Bézout & Déverrouillage d’un Coffre',
    context: 'Un mécanisme d\'engrenages s\'enclenche si l\'on trouve deux entiers x et y vérifiant l\'équation diophantienne 17x + 29y = 1.',
    difficulty: 'Approfondissement',
    points: 8,
    themeTag: 'cinema',
    themeLabel: '🕵️ Enquête & Théorème de Bézout',
    questions: [
      {
        questionText: '1. Justifier que l\'équation 17x + 29y = 1 admet des solutions entières en calculant le PGCD(17, 29).',
        hints: ['Algorithme d\'Euclide ou remarquer que 17 et 29 sont deux nombres premiers distincts.'],
        solutionSteps: [
          '17 et 29 sont deux nombres premiers distincts, ils sont donc premiers entre eux : PGCD(17, 29) = 1.',
          'D\'après le théorème de Bézout, il existe un couple d\'entiers relatifs (x, y) tel que 17x + 29y = 1.'
        ],
        finalAnswer: 'PGCD(17, 29) = 1 : existence garantie par le théorème de Bézout.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Déterminer une solution particulière (x0, y0) par remontée de l\'algorithme d\'Euclide.',
        hints: ['29 = 17 * 1 + 12.', '17 = 12 * 1 + 5.', '12 = 5 * 2 + 2.', '5 = 2 * 2 + 1.'],
        solutionSteps: [
          'Euclide : 29 = 17(1) + 12 ; 17 = 12(1) + 5 ; 12 = 5(2) + 2 ; 5 = 2(2) + 1.',
          'Remontée : 1 = 5 - 2(2).',
          'Or 2 = 12 - 5(2) => 1 = 5 - 2(12 - 5*2) = 5(5) - 2(12).',
          'Or 5 = 17 - 12 => 1 = 5(17 - 12) - 2(12) = 5(17) - 7(12).',
          'Or 12 = 29 - 17 => 1 = 5(17) - 7(29 - 17) = 12(17) - 7(29).',
          'On a donc : 17 * (12) + 29 * (-7) = 1.'
        ],
        finalAnswer: 'Solution particulière : x0 = 12 et y0 = -7 (17*12 + 29*(-7) = 204 - 203 = 1).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tm-bank-14',
    targetChapterId: 'math-exp-matrices-graphes',
    title: 'Chaîne de Markov : Migration d’Utilisateurs entre TikTok et YouTube',
    context: 'Chaque mois, 15% des utilisateurs de la plateforme A migrent vers B, et 10% des utilisateurs de B migrent vers A. Matrice de transition M = [[0,85, 0,15], [0,10, 0,90]].',
    difficulty: 'Approfondissement',
    points: 8,
    themeTag: 'tech',
    themeLabel: '📱 Réseaux Sociaux & Chaînes de Markov',
    questions: [
      {
        questionText: '1. Écrire le système d\'équations définissant l\'état stationnaire (stable) π = [x, y] vérifiant π M = π et x + y = 1.',
        hints: ['x * 0,85 + y * 0,10 = x et x + y = 1.'],
        solutionSteps: [
          'π M = π donne le système :',
          '0,85x + 0,10y = x <=> -0,15x + 0,10y = 0 <=> 1,5x = y.',
          'Avec la condition de probabilité totale : x + y = 1.'
        ],
        finalAnswer: 'y = 1,5x et x + y = 1.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Résoudre le système et donner les parts de marché d\'équilibre à long terme.',
        hints: ['Remplacer y par 1,5x dans x + y = 1.'],
        solutionSteps: [
          'x + 1,5x = 1 <=> 2,5x = 1 <=> x = 1 / 2,5 = 0,40.',
          'y = 1 - 0,40 = 0,60.'
        ],
        finalAnswer: 'État stable π = [0,40 ; 0,60] : 40% sur A et 60% sur B.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-bank-15',
    targetChapterId: 'math-term-suites-limites',
    title: 'Théorème d’Encadrement (Théorème des Gendarmes)',
    context: 'On étudie la convergence de la suite définie pour n ≥ 1 par un = (n + (-1)^n) / (2n + 1).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '📐 Analyse & Théorème des Gendarmes',
    questions: [
      {
        questionText: '1. Sachant que pour tout n ∈ ℕ, -1 ≤ (-1)^n ≤ 1, encadrer un par deux suites rationnelles.',
        hints: ['Ajouter n puis diviser par le terme strictement positif (2n + 1).'],
        solutionSteps: [
          '-1 ≤ (-1)^n ≤ 1.',
          'n - 1 ≤ n + (-1)^n ≤ n + 1.',
          'Comme 2n + 1 > 0 pour n ≥ 1 : (n - 1) / (2n + 1) ≤ un ≤ (n + 1) / (2n + 1).'
        ],
        finalAnswer: '(n - 1)/(2n + 1) ≤ un ≤ (n + 1)/(2n + 1).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la limite des deux suites encadrantes et en déduire la limite de un.',
        hints: ['Factoriser par le terme de plus haut degré n au numérateur et dénominateur.'],
        solutionSteps: [
          'lim (n - 1) / (2n + 1) = lim (n / 2n) = 1/2 quand n -> +∞.',
          'lim (n + 1) / (2n + 1) = lim (n / 2n) = 1/2 quand n -> +∞.',
          'D\'après le théorème d\'encadrement (théorème des gendarmes), la suite (un) converge vers 1/2.'
        ],
        finalAnswer: 'lim un = 1/2 (d\'après le théorème des gendarmes).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tm-bank-16',
    targetChapterId: 'math-term-vecteurs-espace',
    title: 'Représentation Paramétrique de Droite Spatiale & Collision de Drones',
    context: 'Dans l\'espace, le drone A suit la droite (D1) : x = 1 + 2t, y = 3 - t, z = 4 + 3t (t ∈ ℝ). Le drone B suit la droite (D2) : x = -3 + k, y = 5 + 2k, z = -2 + 4k (k ∈ ℝ).',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'tech',
    themeLabel: '🚁 Drones 3D & Intersection de Droites',
    questions: [
      {
        questionText: '1. Donner un vecteur directeur u1 de (D1) et u2 de (D2). Sont-ils colinéaires ?',
        hints: ['Les coefficients des paramètres t et k donnent les composantes du vecteur directeur.'],
        solutionSteps: [
          'u1(2 ; -1 ; 3) et u2(1 ; 2 ; 4).',
          'Rapport des coordonnées : 2/1 ≠ -1/2 (2 ≠ -0,5).',
          'Les vecteurs ne sont pas colinéaires : les droites ne sont pas parallèles.'
        ],
        finalAnswer: 'u1(2 ; -1 ; 3) et u2(1 ; 2 ; 4) non colinéaires (droites non parallèles).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Résoudre le système pour déterminer si les deux trajectoires se coupent en un point commun.',
        hints: ['Poser 1 + 2t = -3 + k et 3 - t = 5 + 2k, trouver t et k puis vérifier dans l\'équation en z.'],
        solutionSteps: [
          'Système : k = 2t + 4.',
          'Dans y : 3 - t = 5 + 2(2t + 4) = 5 + 4t + 8 = 4t + 13 <=> 5t = -10 <=> t = -2.',
          'Alors k = 2(-2) + 4 = 0.',
          'Vérification dans z : z1 = 4 + 3(-2) = -2 ; z2 = -2 + 4(0) = -2. L\'égalité est vérifiée !',
          'Point d\'intersection : x = 1 + 2(-2) = -3 ; y = 3 - (-2) = 5 ; z = -2.'
        ],
        finalAnswer: 'Les droites sont sécantes au point I(-3 ; 5 ; -2).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tm-bank-17',
    targetChapterId: 'math-term-loi-binomiale',
    title: 'Loi des Grands Nombres & Stabilisation des Fréquences en Algorithme de Monte-Carlo',
    context: 'Un algorithme de Monte-Carlo estime la valeur de π en tirant n points aléatoires dans un carré [0 ; 1]² et en comptant la proportion de points tombant dans le quart de disque unitaire.',
    difficulty: 'Type Bac',
    points: 7,
    themeTag: 'tech',
    themeLabel: '💻 Monte-Carlo & Grands Nombres',
    questions: [
      {
        questionText: '1. Quelle est la probabilité théorique p qu\'un point tiré uniformément dans le carré tombe à l\'intérieur du quart de disque unitaire ?',
        hints: ['Aire du quart de disque de rayon 1 = π * 1^2 / 4.', 'Aire du carré = 1 * 1 = 1.'],
        solutionSteps: [
          'Aire du carré = 1^2 = 1.',
          'Aire du quart de disque = (π * r^2) / 4 = π / 4.',
          'La probabilité est le rapport des aires : p = (π / 4) / 1 = π / 4 ≈ 0,7854.'
        ],
        finalAnswer: 'p = π / 4.',
        pointsAllocated: 3
      },
      {
        questionText: '2. En énonçant la loi des grands nombres, expliquer pourquoi la fréquence observée Fn converge vers π/4 lorsque n devient arbitrairement grand.',
        hints: ['La moyenne empirique converge en probabilité vers l\'espérance théorique quand n -> +∞.'],
        solutionSteps: [
          'D\'après la loi des grands nombres, la fréquence empirique d\'un événement au cours de répétitions d\'épreuves de Bernoulli indépendantes converge presque sûrement vers sa probabilité théorique p.',
          'En multipliant par 4 la fréquence observée Fn des points dans le quart de cercle, on obtient une estimation approchée de plus en plus précise de π quand n -> +∞.'
        ],
        finalAnswer: 'Convergence de Fn vers p = π/4 garantie par la loi des grands nombres (stabilisation statistique).',
        pointsAllocated: 4
      }
    ]
  }
];
