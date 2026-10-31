import { Chapter } from '../types';

export const SUPPLEMENTARY_CHAPTERS: Chapter[] = [
  // =========================================================================
  // SECONDE - MATHÉMATIQUES SUPPLÉMENTAIRES
  // =========================================================================
  {
    id: 'math-2nde-probas',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Probabilités & Modélisation d’Événements Aléatoires',
    officialCode: 'MATH-2-04',
    description: 'Univers des possibles, événements élémentaires, équiprobabilité, réunion et intersection, événement contraire et tableaux croisés.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Univers Ω : ensemble de toutes les issues possibles d\'une expérience aléatoire.',
      'Équiprobabilité : Chaque issue a la même probabilité P = 1 / Card(Ω).',
      'Formule fondamentale de réunion : P(A ∪ B) = P(A) + P(B) - P(A ∩ B).',
      'Événement contraire : P(\\bar{A}) = 1 - P(A).'
    ],
    keyFormulas: [
      {
        label: 'Probabilité de la réunion de deux événements',
        formula: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
        explanation: 'Si A et B sont disjoints (incompatibles), P(A ∩ B) = 0 et P(A ∪ B) = P(A) + P(B).'
      },
      {
        label: 'Loi de l\'événement contraire',
        formula: 'P(\\bar{A}) = 1 - P(A)',
        explanation: 'Très utile pour calculer la probabilité d\'obtenir "au moins un succès".'
      }
    ],
    courseSections: [
      {
        title: '1. Vocabulaire des probabilités',
        content: [
          'Deux événements sont incompatibles ou disjoints s\'ils ne peuvent pas se réaliser en même temps : A ∩ B = ∅.',
          'La probabilité de l\'événement certain est 1, et celle de l\'événement impossible est 0.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-probas',
        title: 'Problème Résolu : Tirage dans un jeu de 32 cartes et probabilités de réunions',
        context: 'On tire au hasard une carte d\'un jeu de 32 cartes bien mélangé. A est l\'événement "Tirer un Roi", B est l\'événement "Tirer un Cœur", et C est l\'événement "Tirer une carte noire".',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Calculer les probabilités P(A), P(B), et P(A ∩ B).',
            hints: ['Il y a 4 Rois et 8 Cœurs dans un jeu de 32 cartes. A ∩ B est le Roi de Cœur.'],
            solutionSteps: [
              'Le tirage est équiprobable, l\'univers Ω compte 32 issues.',
              'P(A) = 4 / 32 = 1 / 8 = 0,125.',
              'P(B) = 8 / 32 = 1 / 4 = 0,25.',
              'A ∩ B correspond à la carte unique "Roi de Cœur" : P(A ∩ B) = 1 / 32 = 0,03125.'
            ],
            finalAnswer: 'P(A) = 1/8 ; P(B) = 1/4 ; P(A ∩ B) = 1/32.',
            pointsAllocated: 2
          },
          {
            questionText: '2. En déduire la probabilité de l\'événement A ∪ B "Tirer un Roi ou un Cœur".',
            hints: ['Appliquer la formule d\'addition : P(A ∪ B) = P(A) + P(B) - P(A ∩ B).'],
            solutionSteps: [
              'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
              '= 4/32 + 8/32 - 1/32 = 11 / 32 ≈ 0,34375.'
            ],
            finalAnswer: 'P(A ∪ B) = 11/32 ≈ 34,4 %.',
            pointsAllocated: 2
          },
          {
            questionText: '3. Calculer la probabilité de l\'événement contraire de B, noté non-B, et celle de B ∩ C.',
            hints: ['P(non-B) = 1 - P(B). Une carte de Cœur peut-elle être noire ?'],
            solutionSteps: [
              'P(non-B) = 1 - P(B) = 1 - 8/32 = 24/32 = 3/4 = 0,75.',
              'Les Cœurs sont rouges : l\'événement B ∩ C est impossible (B ∩ C = ∅), donc P(B ∩ C) = 0.'
            ],
            finalAnswer: 'P(non-B) = 3/4 (75 %) et P(B ∩ C) = 0 (incompatibles).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2p-1',
        question: 'Si P(A) = 0,6 et P(B) = 0,5 avec P(A ∩ B) = 0,2, que vaut P(A ∪ B) ?',
        options: ['0,9', '1,1', '0,7', '0,3'],
        correctIndex: 0,
        explanation: 'P(A ∪ B) = 0,6 + 0,5 - 0,2 = 0,9.'
      },
      {
        id: 'q-2p-1b',
        question: 'Si un dé équilibré à 6 faces est lancé, quelle est la probabilité d\'obtenir un nombre pair strictement supérieur à 2 ?',
        options: ['2/6 = 1/3', '3/6 = 1/2', '1/6', '4/6 = 2/3'],
        correctIndex: 0,
        explanation: 'Les issues favorables sont 4 et 6, soit 2 issues sur 6, donc 2/6 = 1/3.'
      },
      {
        id: 'q-2p-1c',
        question: 'Que peut-on affirmer de deux événements incompatibles (ou disjoints) E et F ?',
        options: [
          'Leur intersection est vide : P(E ∩ F) = 0',
          'P(E ∪ F) = 1',
          'P(E) = P(F)',
          'Ils sont toujours indépendants'
        ],
        correctIndex: 0,
        explanation: 'Deux événements disjoints ne peuvent se réaliser simultanément, d\'où P(E ∩ F) = 0.'
      },
      {
        id: 'q-2p-1d',
        question: 'Si la probabilité de gagner à un jeu est de 0,08, quelle est la probabilité de perdre ?',
        options: ['0,92', '0,08', '-0,08', '0,80'],
        correctIndex: 0,
        explanation: 'P(perdre) = 1 - P(gagner) = 1 - 0,08 = 0,92.'
      }
    ]
  },

  {
    id: 'math-2nde-droites',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Équations de Droites & Systèmes Linéaires dans le Plan',
    officialCode: 'MATH-2-05',
    description: 'Équation réduite y = mx + p, coefficient directeur, ordonnée à l’origine, droites parallèles et résolution de systèmes de deux équations à deux inconnues.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Toute droite non verticale admet une équation réduite y = mx + p.',
      'Coefficient directeur m = (y_B - y_A) / (x_B - x_A) (pente).',
      'Deux droites sont parallèles si et seulement si elles ont le même coefficient directeur m = m\'.'
    ],
    keyFormulas: [
      {
        label: 'Coefficient directeur d\'une sécante',
        formula: 'm = \\frac{y_B - y_A}{x_B - x_A}',
        explanation: 'Pente de la droite passant par deux points distincts A et B.'
      },
      {
        label: 'Équation cartésienne générale',
        formula: 'ax + by + c = 0 \\quad (\\text{avec } (a, b) \\neq (0, 0))',
        explanation: 'Vecteur directeur associé : u(-b ; a).'
      }
    ],
    courseSections: [
      {
        title: '1. Systèmes linéaires et intersection',
        content: [
          'Résoudre un système linéaire 2x2 correspond géométriquement à trouver les coordonnées du point d\'intersection de deux droites sécantes.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-droite',
        title: 'Problème Résolu : Équation de droite et intersection de deux droites sécantes',
        context: 'Dans un repère orthonormé, on considère la droite (d1) passant par A(1 ; 3) et B(4 ; 9), et la droite (d2) d\'équation y = -x + 6.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Déterminer l\'équation réduite de la droite (d1).',
            hints: ['Calculer la pente m = (y_B - y_A)/(x_B - x_A), puis déterminer p en utilisant A.'],
            solutionSteps: [
              'm = (9 - 3) / (4 - 1) = 6 / 3 = 2.',
              'L\'équation s\'écrit y = 2x + p. Comme A(1 ; 3) ∈ (d1) : 3 = 2(1) + p ⟺ p = 3 - 2 = 1.',
              'L\'équation réduite est y = 2x + 1.'
            ],
            finalAnswer: '(d1) : y = 2x + 1.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Justifier que les droites (d1) et (d2) sont sécantes.',
            hints: ['Comparer les coefficients directeurs des deux droites.'],
            solutionSteps: [
              'La pente de (d1) est m1 = 2.',
              'La pente de (d2) est m2 = -1.',
              'Comme m1 ≠ m2, les deux droites ne sont pas parallèles : elles sont donc sécantes en un unique point I.'
            ],
            finalAnswer: 'Droites sécantes car m1 ≠ m2 (2 ≠ -1).',
            pointsAllocated: 2
          },
          {
            questionText: '3. Déterminer les coordonnées du point d\'intersection I de (d1) et (d2).',
            hints: ['Résoudre l\'équation 2x + 1 = -x + 6.'],
            solutionSteps: [
              'À l\'intersection : 2x + 1 = -x + 6.',
              '2x + x = 6 - 1 ⟺ 3x = 5 ⟺ x = 5/3.',
              'On calcule y : y = -(5/3) + 6 = -5/3 + 18/3 = 13/3.'
            ],
            finalAnswer: 'Point d\'intersection I(5/3 ; 13/3).',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2d-1',
        question: 'Les droites d1 : y = 3x - 1 et d2 : y = 3x + 5 sont-elles parallèles ?',
        options: ['Oui, car elles ont le même coefficient directeur m = 3', 'Non, car p ≠ p\'', 'Elles sont perpendiculaires', 'Elles se coupent en x = 0'],
        correctIndex: 0,
        explanation: 'Deux droites non verticales sont strictement parallèles si et seulement si leurs pentes m sont égales.'
      },
      {
        id: 'q-2d-1b',
        question: 'Quel est le vecteur directeur de la droite d\'équation cartésienne 3x - 2y + 4 = 0 ?',
        options: ['u(2 ; 3)', 'u(-2 ; 3)', 'u(3 ; -2)', 'u(3 ; 2)'],
        correctIndex: 0,
        explanation: 'Pour ax + by + c = 0, un vecteur directeur est u(-b ; a) = (-(-2) ; 3) = (2 ; 3).'
      },
      {
        id: 'q-2d-1c',
        question: 'Quelle est l\'équation d\'une droite verticale passant par le point A(5 ; -2) ?',
        options: ['x = 5', 'y = -2', 'y = 5x - 2', 'x = -2'],
        correctIndex: 0,
        explanation: 'Une droite verticale a pour équation générale x = constante, ici x = 5.'
      },
      {
        id: 'q-2d-1d',
        question: 'Que vaut l\'ordonnée à l\'origine de la droite d\'équation 2x + 4y - 8 = 0 ?',
        options: ['y = 2', 'y = -2', 'y = 4', 'y = 8'],
        correctIndex: 0,
        explanation: 'Pour x = 0 : 4y - 8 = 0 ⟺ 4y = 8 ⟺ y = 2.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - PHYSIQUE-CHIMIE SUPPLÉMENTAIRES
  // =========================================================================
  {
    id: 'pc-2nde-solutions',
    subjectId: 'physique-chimie',
    gradeLevel: '2nde',
    title: 'Solutions Aqueuses, Concentrations & Dilution',
    officialCode: 'PC-2-03',
    description: 'Soluté, solvant, concentration en masse Cm = m/V, concentration molaire C = n/V, facteur de dilution F et protocole expérimental de fiole jaugée.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Concentration en masse : C_m = m_{soluté} / V_{solution} (en g/L).',
      'Concentration molaire : C = n_{soluté} / V_{solution} (en mol/L). Relation : C_m = C × M.',
      'Loi de conservation lors d\'une dilution : n_{mère} = n_{fille} <=> C_m × V_m = C_f × V_f.',
      'Facteur de dilution : F = C_m / C_f = V_f / V_m > 1.'
    ],
    keyFormulas: [
      {
        label: 'Concentration molaire et massique',
        formula: 'C = \\frac{n}{V} \\quad ; \\quad C_m = \\frac{m}{V} = C \\cdot M',
        explanation: 'Relie la concentration chimique à la masse molaire M de l\'espèce.'
      },
      {
        label: 'Principe de conservation lors de la dilution',
        formula: 'C_{mère} \\cdot V_{mère} = C_{fille} \\cdot V_{fille}',
        explanation: 'La quantité de matière de soluté prélevée reste inchangée par ajout d\'eau distillée.'
      }
    ],
    courseSections: [
      {
        title: '1. Verrerie de précision pour une dilution',
        content: [
          'Pour réaliser une dilution précise au laboratoire :',
          '1° Pipette jaugée munie d\'une pro-pipette pour prélever le volume V_mère.',
          '2° Fiole jaugée de volume V_fille dans laquelle on introduit le prélèvement.',
          '3° Compléter avec de l\'eau distillée jusqu\'au trait de jauge puis homogénéiser.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-dilution',
        title: 'Problème Résolu : Préparation et protocole expérimental d\'une solution étalon',
        context: 'On dispose d\'une solution mère de sulfate de cuivre de concentration C_m = 0,200 mol/L. On souhaite préparer V_f = 100,0 mL d\'une solution fille de concentration C_f = 0,020 mol/L. Masse molaire du sulfate de cuivre anhydre : M = 159,6 g/mol.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Calculer le facteur de dilution F et le volume V_m de solution mère à prélever.',
            hints: ['F = C_m / C_f = V_f / V_m.'],
            solutionSteps: [
              'F = C_m / C_f = 0,200 / 0,020 = 10 (dilution par 10).',
              'V_m = V_f / F = 100,0 mL / 10 = 10,0 mL.'
            ],
            finalAnswer: 'Facteur de dilution F = 10 ; volume à prélever V_m = 10,0 mL.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Décrire précisément le protocole expérimental en précisant la verrerie de précision requise.',
            hints: ['Mentionner la pipette jaugée, la poire d\'aspiration, la fiole jaugée et le trait de jauge.'],
            solutionSteps: [
              '1) Verser un peu de solution mère dans un bécher de garde propre et sec.',
              '2) À l\'aide d\'une pipette jaugée de 10,0 mL munie d\'une propipette, prélever 10,0 mL de solution mère (bas du ménisque sur le trait de jauge).',
              '3) Transférer le prélèvement dans une fiole jaugée de 100,0 mL.',
              '4) Ajouter de l\'eau distillée jusqu\'aux deux tiers et agiter pour homogénéiser.',
              '5) Compléter à l\'eau distillée goutte à goutte jusqu\'au trait de jauge, boucher et retourner la fiole plusieurs fois.'
            ],
            finalAnswer: 'Protocole avec pipette jaugée de 10 mL et fiole jaugée de 100 mL.',
            pointsAllocated: 2
          },
          {
            questionText: '3. Calculer la concentration en masse (titre massique) C_m_f de la solution fille préparée.',
            hints: ['C_m_f = C_f × M.'],
            solutionSteps: [
              'C_m_f = C_f × M = 0,020 mol/L × 159,6 g/mol = 3,192 g/L.'
            ],
            finalAnswer: 'C_m_f ≈ 3,19 g·L⁻¹.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2pc-sol',
        question: 'Quelle verrerie doit-on obligatoirement utiliser pour préparer une solution étalon par dilution ?',
        options: ['Une pipette jaugée et une fiole jaugée', 'Un bécher et une éprouvette graduée', 'Un erlenmeyer et un entonnoir', 'Une burette et un verre de montre'],
        correctIndex: 0,
        explanation: 'Seules la pipette jaugée et la fiole jaugée offrent la précision de classe A exigée.'
      },
      {
        id: 'q-2pc-sol-b',
        question: 'Lors d\'une dilution, que devient la quantité de matière de soluté dissous ?',
        options: ['Elle se conserve rigoureusement : n_mère = n_fille', 'Elle est divisée par deux', 'Elle est multipliée par le volume d\'eau', 'Elle s\'annule'],
        correctIndex: 0,
        explanation: 'L\'ajout d\'eau distillée ne modifie pas le nombre de moles de soluté déjà prélevées.'
      },
      {
        id: 'q-2pc-sol-c',
        question: 'Si on dissout 5,0 g de sel dans 250 mL d\'eau, quelle est la concentration en masse Cm ?',
        options: ['20 g/L', '1,25 g/L', '50 g/L', '0,02 g/L'],
        correctIndex: 0,
        explanation: 'V = 250 mL = 0,250 L. Cm = m / V = 5,0 / 0,250 = 20 g/L.'
      },
      {
        id: 'q-2pc-sol-d',
        question: 'Comment lit-on correctement le niveau d\'un liquide dans une fiole jaugée ?',
        options: [
          'Le bas du ménisque doit être tangent au trait de jauge, l\'œil à hauteur du trait',
          'Le haut du ménisque doit toucher le trait',
          'En regardant par-dessus la fiole',
          'Peu importe, le niveau est toujours plat'
        ],
        correctIndex: 0,
        explanation: 'Pour éviter l\'erreur de parallaxe, l\'œil doit être rigoureusement au niveau du trait et viser le bas du ménisque concave.'
      }
    ]
  },

  {
    id: 'pc-2nde-mouvement',
    subjectId: 'physique-chimie',
    gradeLevel: '2nde',
    title: 'Modélisation des Mouvements & Principe d’Inertie',
    officialCode: 'PC-2-04',
    description: 'Système, référentiels terrestre et géocentrique, vecteur vitesse instantanée, chronophotographie et première loi de Newton (principe d’inertie).',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Un mouvement est toujours relatif au référentiel d\'étude choisi (ex: référentiel terrestre pour une voiture sur route).',
      'Vecteur vitesse instantanée : tangent à la trajectoire dans le sens du mouvement, de valeur v = d / Δt.',
      'Principe d\'inertie : Si les forces exercées sur un système se compensent (Σ F = 0), alors le système est soit au repos, soit en mouvement rectiligne uniforme.'
    ],
    keyFormulas: [
      {
        label: 'Première loi de Newton (Principe d\'inertie)',
        formula: '\\sum \\vec{F}_{ext} = \\vec{0} \\iff \\vec{v} = \\vec{\\text{constante}}',
        explanation: 'Mouvement rectiligne uniforme ou immobilité si les forces se compensent.'
      }
    ],
    courseSections: [
      {
        title: '1. Types de mouvements',
        content: [
          '• Rectiligne uniforme : trajectoire droite et vitesse constante.',
          '• Circulaire uniforme : trajectoire en cercle et valeur de la vitesse constante (direction du vecteur vitesse variable).',
          '• Rectiligne accéléré : vitesse croissante le long d\'une droite.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2pc-inertie',
        title: 'Problème Résolu : Analyse chronophotographique et principe d\'inertie',
        context: 'On étudie la chronophotographie de la chute d\'un parachutiste de masse m = 80 kg. Deux phases sont observées : la phase 1 où les points s\'espacent de plus en plus, et la phase 2 où l\'intervalle entre deux positions successives distantes de 10 m est constant (Δt = 0,50 s).',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Qualifier le mouvement du parachutiste lors de la phase 1 et comparer le poids P aux forces de frottement de l\'air F_air.',
            hints: ['Les positions s\'espacent pour une même durée : la vitesse augmente.'],
            solutionSteps: [
              'Dans la phase 1, la distance entre positions successives augmente à intervalles de temps réguliers : le mouvement est rectiligne accéléré.',
              'Comme la vitesse varie, les forces ne se compensent pas (contraposée du principe d\'inertie).',
              'Le poids P est strictement supérieur aux frottements de l\'air : P > F_air.'
            ],
            finalAnswer: 'Mouvement rectiligne accéléré ; P > F_air.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Dans la phase 2, calculer la vitesse limite v_lim atteinte par le parachutiste.',
            hints: ['v = d / Δt avec d = 10 m et Δt = 0,50 s.'],
            solutionSteps: [
              'v_lim = d / Δt = 10 m / 0,50 s = 20 m/s (soit 72 km/h).'
            ],
            finalAnswer: 'v_lim = 20 m/s (72 km/h).',
            pointsAllocated: 2
          },
          {
            questionText: '3. En appliquant le principe d\'inertie, déterminer la valeur de la force de frottement exercée par l\'air sur le parachutiste en phase 2 (on prend g = 9,81 m/s²).',
            hints: ['Le mouvement étant rectiligne uniforme, ΣF = 0.'],
            solutionSteps: [
              'En phase 2, la vitesse est constante et la trajectoire est une droite : le mouvement est rectiligne uniforme.',
              'D\'après le principe d\'inertie, les forces se compensent : P + F_air = 0 ⟺ F_air = P = m × g.',
              'F_air = 80 kg × 9,81 m/s² = 784,8 N vers le haut.'
            ],
            finalAnswer: 'F_air = 785 N orientée verticalement vers le haut.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2pc-in',
        question: 'Un palet de curling glisse en ligne droite à vitesse constante sur une glace sans frottement. Quelles forces s\'exercent sur lui ?',
        options: ['Le poids et la réaction normale du support, qui se compensent exactement', 'Aucune force', 'Une force motrice vers l\'avant', 'Uniquement son énergie cinétique'],
        correctIndex: 0,
        explanation: 'Le palet subit son poids P et la réaction normale du sol R, verticales et opposées (P + R = 0).'
      },
      {
        id: 'q-2pc-in-b',
        question: 'Dans un mouvement circulaire uniforme à vitesse v constante, pourquoi les forces ne se compensent-elles PAS ?',
        options: [
          'Parce que la direction du vecteur vitesse change à chaque instant (accélération centripète)',
          'Parce que le cercle n\'a pas de début',
          'Parce que la vitesse est nulle',
          'Parce que la masse augmente'
        ],
        correctIndex: 0,
        explanation: 'Le principe d\'inertie exige que le vecteur vitesse soit rigoureusement constant (norme ET direction). En virage, la direction tourne, donc ΣF ≠ 0.'
      },
      {
        id: 'q-2pc-in-c',
        question: 'Quel référentiel est le plus approprié pour étudier le mouvement d\'un satellite géostationnaire autour de la Terre ?',
        options: ['Le référentiel géocentrique', 'Le référentiel terrestre', 'Le référentiel héliocentrique', 'Le référentiel de Copernic'],
        correctIndex: 0,
        explanation: 'Le référentiel géocentrique (centre de la Terre et 3 étoiles lointaines) est galiléen pour étudier les orbites terrestres.'
      },
      {
        id: 'q-2pc-in-d',
        question: 'Sur une chronophotographie à pas de temps constant, si les points se rapprochent les uns des autres, le mouvement est :',
        options: ['Ralenti (décéléré)', 'Accéléré', 'Uniforme', 'Immobile'],
        correctIndex: 0,
        explanation: 'Des distances décroissantes parcourues en un même laps de temps traduisent une vitesse qui diminue.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - SVT SUPPLÉMENTAIRES
  // =========================================================================
  {
    id: 'svt-2nde-biodiversite',
    subjectId: 'svt',
    gradeLevel: '2nde',
    title: 'Biodiversité, Sélection Naturelle & Dérive Génétique',
    officialCode: 'SVT-2-02',
    description: 'Les 3 échelles de la biodiversité (écosystèmes, espèces, allèles), mutations aléatoires, sélection naturelle sous pression environnementale et dérive génétique dans les petites populations.',
    estimatedMinutes: 40,
    summaryHighlights: [
      '3 niveaux de biodiversité : diversité des écosystèmes, diversité des espèces, diversité génétique intraspécifique (allèles).',
      'Les mutations de l\'ADN créent de nouveaux allèles au hasard.',
      'Sélection naturelle : les allèles conférant un avantage reproductif dans un milieu donné voient leur fréquence augmenter au fil des générations.',
      'Dérive génétique : variation aléatoire de la fréquence des allèles due au hasard de la reproduction, particulièrement marquée dans les petites populations.'
    ],
    keyFormulas: [
      {
        label: 'Mécanismes d\'évolution des fréquences alléliques',
        formula: '\\Delta f_{\\text{allèle}} = f_{\\text{sélection naturelle}} + f_{\\text{dérive génétique}} + f_{\\text{mutations}}',
        explanation: 'Conduit à l\'adaptation des espèces ou à la spéciation.'
      }
    ],
    courseSections: [
      {
        title: '1. La sélection naturelle en action (ex: phalène du bouleau)',
        content: [
          'La forme sombre de la phalène du bouleau a été favorisée en Angleterre lors de l\'industrialisation car elle était camouflée sur les troncs couverts de suie, échappant aux prédateurs.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2svt-derive',
        title: 'Problème Résolu : Évolution des fréquences alléliques (Sélection naturelle vs Dérive génétique)',
        context: 'On étudie la résistance d\'une population d\'insectes ravageurs à un insecticide chimique, ainsi que l\'évolution d\'un gène neutre dans une population insulaire isolée.',
        difficulty: 'Moyen',
        points: 6,
        questions: [
          {
            questionText: '1. Dans une zone traitée régulièrement par un insecticide, la proportion d\'insectes résistants passe de 0,1 % à 92 % en 5 ans. Expliquer ce résultat par le mécanisme de sélection naturelle.',
            hints: ['La mutation de résistance préexistait-elle ou a-t-elle été causée par le traitement ?'],
            solutionSteps: [
              'La mutation conférant la résistance préexistait par hasard dans la population avant tout traitement chimique (mutation spontanée rare à 0,1 %).',
              'L\'insecticide agit comme une puissante pression de sélection environnementale éliminant préférentiellement les individus sensibles.',
              'Les insectes résistants survivent mieux et se reproduisent davantage (meilleur succès reproducteur), transmettant l\'allèle avantageux à leur descendance.',
              'La fréquence de l\'allèle de résistance augmente de façon directionnelle et rapide au fil des générations.'
            ],
            finalAnswer: 'Sélection naturelle directionnelle favorisant les individus porteurs de l\'allèle mutant de résistance.',
            pointsAllocated: 2
          },
          {
            questionText: '2. Sur une île isolée, un typhon décime 95 % des individus d\'une population d\'oiseaux sans lien avec leurs capacités physiques. L\'allèle pourpre, rare auparavant, devient fixé à 100 %. Identifier ce mécanisme.',
            hints: ['Penser à la réduction brutale de l\'effectif (goulot d\'étranglement génétique).'],
            solutionSteps: [
              'Il s\'agit de la dérive génétique accélérée par un effet de goulot d\'étranglement.',
              'La mortalité due au typhon est totalement aléatoire et indépendante de la valeur adaptative des allèles.',
              'Dans le très faible échantillon de survivants fortuits, l\'allèle pourpre se trouvait surreprésenté par simple hasard.',
              'La dérive génétique entraîne la fixation ou la perte d\'allèles de façon purement stochastique dans les petites populations.'
            ],
            finalAnswer: 'Dérive génétique par effet de goulot d\'étranglement.',
            pointsAllocated: 2
          },
          {
            questionText: '3. Rappeler les trois échelles d\'observation de la biodiversité.',
            hints: ['De l\'échelle planétaire à l\'échelle moléculaire des gènes.'],
            solutionSteps: [
              '1° La diversité des écosystèmes (forêts, récifs coralliens, toundra, savanes...).',
              '2° La diversité des espèces (biodiversité spécifique : nombre d\'espèces coexistant dans un milieu).',
              '3° La diversité génétique au sein de chaque espèce (variété des allèles et des patrimoines génétiques individuels).'
            ],
            finalAnswer: 'Diversité des écosystèmes, diversité des espèces, diversité génétique alléliques.',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-2svt-bio',
        question: 'Quelle est la source première de toute la diversité alléliques chez les êtres vivants ?',
        options: ['Les mutations de la séquence d\'ADN', 'La respiration cellulaire', 'La dérive génétique', 'Le climat'],
        correctIndex: 0,
        explanation: 'Seules les mutations de l\'ADN créent de nouveaux allèles originaux.'
      },
      {
        id: 'q-2svt-bio-b',
        question: 'Dans quel type de population la dérive génétique a-t-elle les effets les plus rapides et marqués ?',
        options: [
          'Dans les populations de très petite taille',
          'Dans les populations de millions d\'individus',
          'Chez les bactéries uniquement',
          'Dans les océans ouverts'
        ],
        correctIndex: 0,
        explanation: 'Le hasard de l\'échantillonnage des allèles lors de la reproduction est d\'autant plus influent que l\'effectif reproducteur est restreint.'
      },
      {
        id: 'q-2svt-bio-c',
        question: 'Qu\'est-ce que la sélection naturelle ?',
        options: [
          'La reproduction différentielle d\'individus sous l\'effet de pressions environnementales',
          'Une volonté consciente des animaux de s\'adapter',
          'L\'apparition ordonnée de mutations positives',
          'La destruction volontaire des forêts'
        ],
        correctIndex: 0,
        explanation: 'Les individus porteurs d\'allèles avantageux dans leur milieu laissent en moyenne plus de descendants viables.'
      },
      {
        id: 'q-2svt-bio-d',
        question: 'Comment définit-on classiquement une espèce biologique ?',
        options: [
          'Un ensemble d\'individus capables de se reproduire entre eux et d\'engendrer une descendance fertile',
          'Des animaux ayant exactement la même couleur',
          'Des êtres vivants vivant dans le même pays',
          'Des cellules sans noyau'
        ],
        correctIndex: 0,
        explanation: 'Le critère d\'interfécondité avec descendance fertile définit l\'espèce selon Ernst Mayr.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - MATHÉMATIQUES SUPPLÉMENTAIRES
  // =========================================================================
  {
    id: 'math-1ere-trigo',
    subjectId: 'maths',
    gradeLevel: '1ere',
    title: 'Trigonométrie Circulaire & Cercle Trigonométrique',
    officialCode: 'MATH-1-04',
    description: 'Enroulement de la droite numérique, radian, cosinus et sinus, relation cos²(x) + sin²(x) = 1, valeurs remarquables et équations trigonométriques.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Le radian est l\'unité de mesure d\'angle telle qu\'un tour complet vaut 2π radians = 360°.',
      'Pour tout réel x : cos²(x) + sin²(x) = 1.',
      'Parité : cos(-x) = cos(x) (fonction paire) et sin(-x) = -sin(x) (fonction impaire).',
      'Valeurs remarquables : cos(π/6) = √3/2, sin(π/6) = 1/2 ; cos(π/4) = sin(π/4) = √2/2 ; cos(π/3) = 1/2, sin(π/3) = √3/2.'
    ],
    keyFormulas: [
      {
        label: 'Identité trigonométrique pythagoricienne',
        formula: '\\cos^2(x) + \\sin^2(x) = 1',
        explanation: 'Vraie pour tout réel x, découle du théorème de Pythagore sur le cercle unité.'
      },
      {
        label: 'Angles associés',
        formula: '\\cos(x + \\pi) = -\\cos(x) \\quad ; \\quad \\sin(x + \\pi) = -\\sin(x)',
        explanation: 'Symétrie par rapport au centre du cercle trigonométrique.'
      }
    ],
    courseSections: [
      {
        title: '1. Résolution d\'équations cos(x) = a et sin(x) = b',
        content: [
          'cos(x) = cos(α) <=> x = α + 2kπ ou x = -α + 2kπ (avec k ∈ ℤ).',
          'sin(x) = sin(α) <=> x = α + 2kπ ou x = π - α + 2kπ (avec k ∈ ℤ).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-trigo',
        title: 'Exercice Type Bac : Équations trigonométriques et lecture du cercle',
        context: 'Soit la fonction f définie sur ]-π ; π] par f(x) = 2 cos(x) - 1. On étudie ses zéros et son signe sur cet intervalle fondamental.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: 'Question 1 : Résoudre dans ]-π ; π] l\'équation f(x) = 0.',
            hints: ['Isoler cos(x) : cos(x) = 1/2.', 'Quels angles du cercle trigonométrique ont pour abscisse 1/2 ?'],
            solutionSteps: [
              '2 cos(x) - 1 = 0 <=> cos(x) = 1/2.',
              'Sur le cercle trigonométrique, les deux points d\'abscisse 1/2 correspondent aux angles π/3 et -π/3.',
              'Comme l\'intervalle de travail est ]-π ; π], les deux solutions sont bien -π/3 et π/3.'
            ],
            finalAnswer: 'S = {-π/3 ; π/3}',
            pointsAllocated: 2,
            bacTrap: 'Ne pas oublier la solution négative -π/3 : la fonction cosinus est paire, cos(-x) = cos(x) !'
          },
          {
            questionText: 'Question 2 : En déduire la résolution dans ]-π ; π] de l\'inéquation 2 cos(x) - 1 ≥ 0.',
            hints: ['L\'inéquation équivaut à cos(x) ≥ 1/2.', 'Repérer sur le cercle trigonométrique la portion d\'abscisse supérieure ou égale à 1/2.'],
            solutionSteps: [
              '2 cos(x) - 1 ≥ 0 <=> cos(x) ≥ 1/2.',
              'Sur l\'intervalle ]-π ; π], les réels dont le cosinus est supérieur ou égal à 1/2 forment l\'arc centré sur 0.',
              'Cet arc s\'étend de -π/3 inclus à π/3 inclus.'
            ],
            finalAnswer: 'S = [-π/3 ; π/3]',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Calculer les valeurs exactes de sin(7π/6) et cos(5π/4) à l\'aide des angles associés.',
            hints: ['7π/6 = π + π/6 et 5π/4 = π + π/4.', 'Utiliser sin(π + x) = -sin(x) et cos(π + x) = -cos(x).'],
            solutionSteps: [
              'sin(7π/6) = sin(π + π/6) = -sin(π/6) = -1/2.',
              'cos(5π/4) = cos(π + π/4) = -cos(π/4) = -√2/2.'
            ],
            finalAnswer: 'sin(7π/6) = -1/2  et  cos(5π/4) = -√2/2',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-1trigo-1',
        question: 'Quelle est la valeur exacte de sin(5π/6) ?',
        options: ['1/2', '-1/2', '√3/2', '-√3/2'],
        correctIndex: 0,
        explanation: '5π/6 = π - π/6. Donc sin(5π/6) = sin(π - π/6) = sin(π/6) = 1/2.'
      },
      {
        id: 'q-1trigo-2',
        question: 'Si cos(x) = -3/5 et x ∈ [π/2 ; π], quelle est la valeur exacte de sin(x) ?',
        options: ['4/5', '-4/5', '16/25', '2/5'],
        correctIndex: 0,
        explanation: 'cos²(x) + sin²(x) = 1 => sin²(x) = 1 - 9/25 = 16/25. Comme x ∈ [π/2 ; π], sin(x) ≥ 0, donc sin(x) = 4/5.'
      },
      {
        id: 'q-1trigo-3',
        question: 'Quelle est l\'expression simplifiée de cos(π - x) ?',
        options: ['-cos(x)', 'cos(x)', '-sin(x)', 'sin(x)'],
        correctIndex: 0,
        explanation: 'Par symétrie axiale par rapport à l\'axe des ordonnées sur le cercle trigonométrique, cos(π - x) = -cos(x).'
      },
      {
        id: 'q-1trigo-4',
        question: 'Combien de solutions possède l\'équation sin(x) = -1/2 sur l\'intervalle [0 ; 2π[ ?',
        options: [
          '2 solutions (7π/6 et 11π/6)',
          '1 seule solution',
          '4 solutions',
          'Aucune solution'
        ],
        correctIndex: 0,
        explanation: 'Les angles de [0 ; 2π[ ayant une ordonnée de -1/2 sont π + π/6 = 7π/6 et 2π - π/6 = 11π/6.'
      }
    ]
  },

  {
    id: 'math-1ere-scalaire',
    subjectId: 'maths',
    gradeLevel: '1ere',
    title: 'Produit Scalaire dans le Plan & Applications',
    officialCode: 'MATH-1-05',
    description: 'Définitions du produit scalaire (géométrique, projection orthogonale, coordonnées cartésiennes), orthogonalité, et théorème d’Al-Kashi (loi des cosinus).',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Forme géométrique : u · v = ||u|| × ||v|| × cos(θ).',
      'Forme cartésienne dans un repère orthonormé : u(x ; y) · v(x\' ; y\') = x x\' + y y\'.',
      'Critère d\'orthogonalité : Deux vecteurs u et v sont orthogonaux si et seulement si u · v = 0.',
      'Théorème d\'Al-Kashi : Dans tout triangle ABC, a² = b² + c² - 2 b c cos(A).'
    ],
    keyFormulas: [
      {
        label: 'Produit scalaire en coordonnées',
        formula: '\\vec{u} \\cdot \\vec{v} = x x\' + y y\'',
        explanation: 'Dans un repère orthonormé (O, i, j).'
      },
      {
        label: 'Théorème d\'Al-Kashi (Pythagore généralisé)',
        formula: 'BC^2 = AB^2 + AC^2 - 2 \\, AB \\cdot AC \\cos(\\widehat{BAC})',
        explanation: 'Permet de calculer une longueur ou un angle dans n\'importe quel triangle.'
      }
    ],
    courseSections: [
      {
        title: '1. Projection orthogonale',
        content: [
          'Si H est le projeté orthogonal de C sur la droite (AB) : vec(AB) · vec(AC) = vec(AB) · vec(AH) = AB × AH si même sens, et -AB × AH si sens opposés.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-scalaire-1',
        title: 'Exercice Type Bac : Al-Kashi, produit scalaire et projection orthogonale',
        context: 'Soit un triangle ABC dans le plan tel que AB = 5, AC = 8 et BC = 7.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: 'Question 1 : À l\'aide du théorème d\'Al-Kashi, déterminer la valeur exacte de cos(BAC) et en déduire la mesure de l\'angle BAC en degrés.',
            hints: ['BC² = AB² + AC² - 2 × AB × AC × cos(BAC).', 'Isoler cos(BAC).'],
            solutionSteps: [
              'Al-Kashi dans ABC : BC² = AB² + AC² - 2 AB · AC cos(BAC).',
              '7² = 5² + 8² - 2 × 5 × 8 × cos(BAC).',
              '49 = 25 + 64 - 80 cos(BAC) = 89 - 80 cos(BAC).',
              '80 cos(BAC) = 89 - 49 = 40 => cos(BAC) = 40 / 80 = 1/2.',
              'Comme 0° ≤ BAC ≤ 180°, BAC = 60° (ou π/3 rad).'
            ],
            finalAnswer: 'cos(BAC) = 1/2 => BAC = 60°',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Calculer la valeur exacte du produit scalaire vec(AB) · vec(AC).',
            hints: ['vec(AB) · vec(AC) = AB × AC × cos(BAC).'],
            solutionSteps: [
              'vec(AB) · vec(AC) = ||vec(AB)|| × ||vec(AC)|| × cos(BAC).',
              'vec(AB) · vec(AC) = 5 × 8 × (1/2) = 20.'
            ],
            finalAnswer: 'vec(AB) · vec(AC) = 20',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Soit H le projeté orthogonal du point C sur la droite (AB). Calculer la distance AH.',
            hints: ['Par projection orthogonale, vec(AB) · vec(AC) = vec(AB) · vec(AH).', 'Comme cos(BAC) > 0, H est du même côté que B par rapport à A.'],
            solutionSteps: [
              'L\'angle BAC étant aigu (60°), H appartient à la demi-droite [AB).',
              'Donc vec(AB) · vec(AC) = AB × AH.',
              'On a 20 = 5 × AH => AH = 20 / 5 = 4.'
            ],
            finalAnswer: 'AH = 4',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-1scal-1',
        question: 'Si u(3 ; 4) et v(-4 ; 3), quelle est la valeur de u · v ?',
        options: ['0 (vecteurs orthogonaux)', '25', '-24', '7'],
        correctIndex: 0,
        explanation: 'x x\' + y y\' = 3×(-4) + 4×3 = -12 + 12 = 0. Les vecteurs sont donc orthogonaux.'
      },
      {
        id: 'q-1scal-2',
        question: 'Dans un repère orthonormé, quelle est la norme du vecteur u(-3 ; 4) ?',
        options: ['5', '7', '1', '25'],
        correctIndex: 0,
        explanation: '||u|| = √((-3)² + 4²) = √(9 + 16) = √25 = 5.'
      },
      {
        id: 'q-1scal-3',
        question: 'Que devient le théorème d\'Al-Kashi a² = b² + c² - 2bc cos(A) lorsque le triangle est rectangle en A ?',
        options: [
          'Le théorème de Pythagore a² = b² + c²',
          'a² = (b + c)²',
          'a = b + c',
          'a² = b² - c²'
        ],
        correctIndex: 0,
        explanation: 'Si le triangle est rectangle en A, l\'angle A vaut 90° et cos(90°) = 0, le terme en cosinus s\'annule : on retrouve exactement Pythagore !'
      },
      {
        id: 'q-1scal-4',
        question: 'Si deux vecteurs u et v sont colinéaires et de sens opposés, que vaut u · v ?',
        options: [
          '- ||u|| × ||v||',
          '||u|| × ||v||',
          '0',
          '1'
        ],
        correctIndex: 0,
        explanation: 'L\'angle entre u et v vaut π rad (180°), et cos(π) = -1. Donc u · v = - ||u|| × ||v||.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - MATHÉMATIQUES SUPPLÉMENTAIRES
  // =========================================================================
  {
    id: 'math-term-integration',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Primitives, Calcul Intégral & Équations Différentielles',
    officialCode: 'MATH-T-03',
    description: 'Primitives usuelles, intégrale définie d\'une fonction continue, intégration par parties (IPP), valeur moyenne et équations différentielles y\' = ay + b.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Si F est une primitive de f sur [a, b], l\'intégrale de f de a à b vaut F(b) - F(a).',
      'Interprétation géométrique : Pour f continue et positive, l\'intégrale représente l\'aire du domaine délimité par Cf, l\'axe (Ox) et les droites x=a et x=b.',
      'Formule d\'Intégration Par Parties (IPP) : ∫ u\'v = [uv] - ∫ uv\'.',
      'Solutions de y\' = ay : y(t) = C · e^(at) avec C ∈ ℝ.'
    ],
    keyFormulas: [
      {
        label: 'Théorème fondamental de l\'intégration',
        formula: '\\int_a^b f(t)\\,dt = [F(t)]_a^b = F(b) - F(a)',
        explanation: 'Lien fondamental entre dérivation et calcul d\'aire.'
      },
      {
        label: 'Formule d\'Intégration Par Parties (IPP)',
        formula: '\\int_a^b u\'(t)v(t)\\,dt = [u(t)v(t)]_a^b - \\int_a^b u(t)v\'(t)\\,dt',
        explanation: 'Règle ALPES pour choisir la fonction à dériver.'
      },
      {
        label: 'Solution générale de y\' = ay + b (a ≠ 0)',
        formula: 'y(t) = C \\, e^{at} - \\frac{b}{a} \\quad (C \\in \\mathbb{R})',
        explanation: 'Somme de la solution générale de l\'équation homogène et d\'une solution particulière constante.'
      }
    ],
    courseSections: [
      {
        title: '1. Valeur moyenne d\'une fonction',
        content: [
          'La valeur moyenne de f sur [a, b] est donnée par : μ = (1 / (b - a)) ∫_a^b f(t) dt.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-ipp',
        title: 'Exercice Type Bac : IPP, valeur moyenne et équation différentielle',
        context: 'On considère la fonction f définie sur [1 ; e] par f(x) = x ln(x), et l\'intégrale I = ∫_1^e x ln(x) dx.',
        difficulty: 'Type Bac',
        points: 7,
        questions: [
          {
            questionText: 'Question 1 : À l\'aide d\'une intégration par parties, calculer la valeur exacte de l\'intégrale I.',
            hints: ['Règle ALPES : dériver ln(x) et primitiver x.', 'Poser v(x) = ln(x) et u\'(x) = x.'],
            solutionSteps: [
              'On pose : v(x) = ln(x) => v\'(x) = 1/x.',
              'On pose : u\'(x) = x => u(x) = 1/2 x².',
              'Les fonctions u et v sont de classe C¹ sur [1 ; e].',
              'IPP : I = [1/2 x² ln(x)]_1^e - ∫_1^e 1/2 x² × (1/x) dx.',
              '[1/2 x² ln x]_1^e = 1/2 e² ln(e) - 1/2 (1)² ln(1) = 1/2 e² - 0 = e²/2.',
              '∫_1^e 1/2 x dx = [1/4 x²]_1^e = 1/4 e² - 1/4.',
              'I = e²/2 - (e²/4 - 1/4) = e²/4 + 1/4 = (e² + 1) / 4.'
            ],
            finalAnswer: 'I = (e² + 1) / 4 ≈ 2,097',
            pointsAllocated: 3
          },
          {
            questionText: 'Question 2 : Déterminer la valeur moyenne μ de la fonction f sur l\'intervalle [1 ; e].',
            hints: ['Formule : μ = (1 / (b - a)) ∫_a^b f(x) dx.', 'Ici a = 1 et b = e.'],
            solutionSteps: [
              'μ = (1 / (e - 1)) × I.',
              'μ = (1 / (e - 1)) × ((e² + 1) / 4) = (e² + 1) / (4(e - 1)).',
              'Numériquement : (7,389 + 1) / (4 × 1,718) ≈ 8,389 / 6,873 ≈ 1,221.'
            ],
            finalAnswer: 'μ = (e² + 1) / (4(e - 1)) ≈ 1,22',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Résoudre sur ℝ l\'équation différentielle (E) : y\' + 2y = 6 avec la condition initiale y(0) = 5.',
            hints: ['(E) s\'écrit y\' = -2y + 6. Forme générale y(t) = C e^(at) - b/a.', 'Utiliser y(0) = 5 pour déterminer la constante C.'],
            solutionSteps: [
              'L\'équation s\'écrit sous forme standard : y\' = -2y + 6 (a = -2 et b = 6).',
              'La solution générale est de la forme y(t) = C e^(-2t) - (6 / -2) = C e^(-2t) + 3.',
              'Condition initiale y(0) = 5 : C e^0 + 3 = 5 => C + 3 = 5 => C = 2.',
              'La solution unique est donc : y(t) = 2 e^(-2t) + 3.'
            ],
            finalAnswer: 'y(t) = 2 e^(-2t) + 3',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-ipp-1',
        question: 'Quelle est la solution générale de l\'équation différentielle y\' = -2y + 6 ?',
        options: [
          'y(t) = C e^(-2t) + 3',
          'y(t) = C e^(2t) - 3',
          'y(t) = 3 e^(-2t)',
          'y(t) = -2t + 6'
        ],
        correctIndex: 0,
        explanation: 'a = -2 et b = 6. Solution : C e^(at) - b/a = C e^(-2t) - 6/(-2) = C e^(-2t) + 3.'
      },
      {
        id: 'q-ipp-2',
        question: 'Que vaut l\'intégrale ∫_0^1 e^(2x) dx ?',
        options: [
          '(e² - 1) / 2',
          'e² - 1',
          '2 (e² - 1)',
          'e² / 2'
        ],
        correctIndex: 0,
        explanation: 'Une primitive de e^(2x) est 1/2 e^(2x). Donc [1/2 e^(2x)]_0^1 = 1/2 e² - 1/2 e^0 = (e² - 1)/2.'
      },
      {
        id: 'q-ipp-3',
        question: 'Dans la formule d\'intégration par parties ∫ u\'v = [uv] - ∫ uv\', que représente la règle mnémotechnique "ALPES" ?',
        options: [
          'L\'ordre de priorité pour choisir la fonction v à dériver (Arcs, Log, Polynôme, Exp, Sin/Cos)',
          'Les noms des mathématiciens ayant inventé l\'intégrale',
          'La liste des conditions d\'existence des primitives',
          'La méthode de calcul d\'un volume de révolution'
        ],
        correctIndex: 0,
        explanation: 'ALPES permet d\'ordonner le choix de v(x) : Arcsin/Arccos, Logarithme, Polynômes, Exponentielle, Sinus/Cosinus.'
      },
      {
        id: 'q-ipp-4',
        question: 'Si f est une fonction continue et impaire sur [-a ; a], que vaut l\'intégrale ∫_{-a}^a f(t) dt ?',
        options: [
          '0',
          '2 ∫_0^a f(t) dt',
          'f(a) - f(-a)',
          'a²'
        ],
        correctIndex: 0,
        explanation: 'L\'aire sous la courbe d\'une fonction impaire sur un intervalle centré en 0 se compense parfaitement : l\'intégrale est nulle.'
      }
    ]
  },

  {
    id: 'math-term-loi-binomiale',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Loi Binomiale & Échantillonnage',
    officialCode: 'MATH-T-06',
    description: 'Épreuve et schéma de Bernoulli, loi binomiale B(n, p), coefficients binomiaux, espérance E(X) = np, variance, et théorème de Moivre-Laplace.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Une épreuve de Bernoulli est une expérience aléatoire n\'ayant que deux issues : Succès (S) de probabilité p, et Échec (E) de probabilité 1 - p.',
      'Un schéma de Bernoulli est la répétition de n épreuves de Bernoulli identiques et indépendantes.',
      'La variable aléatoire X comptant le nombre de succès suit la loi binomiale B(n, p).',
      'Espérance : E(X) = n · p. Variance : V(X) = n · p · (1 - p).'
    ],
    keyFormulas: [
      {
        label: 'Probabilité de k succès',
        formula: 'P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k} \\quad (k \\in \\{0, 1, \\dots, n\\})',
        explanation: 'Avec (n choose k) le nombre de chemins à k succès dans l\'arbre.'
      },
      {
        label: 'Espérance et écart-type de B(n, p)',
        formula: 'E(X) = n p \\quad ; \\quad \\sigma(X) = \\sqrt{n p (1 - p)}',
        explanation: 'Valeur moyenne théorique espérée sur un grand nombre d\'épreuves.'
      }
    ],
    courseSections: [
      {
        title: '1. Propriétés des coefficients binomiaux',
        content: [
          'Symétrie : (n choose k) = (n choose n-k).',
          'Formule de Pascal : (n choose k) + (n choose k+1) = (n+1 choose k+1).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-binom',
        title: 'Exercice Type Bac : Contrôle qualité et échantillonnage industriel',
        context: 'Une chaîne de production fabrique des composants électroniques. La probabilité qu\'un composant soit défectueux est p = 0,02. On prélève au hasard un lot de n = 50 composants. Le stock étant très grand, ce tirage est assimilé à un tirage avec remise. Soit X la variable aléatoire comptant le nombre de pièces défectueuses.',
        difficulty: 'Type Bac',
        points: 6,
        questions: [
          {
            questionText: 'Question 1 : Justifier que X suit une loi binomiale et préciser ses paramètres ainsi que son espérance E(X).',
            hints: ['Vérifier les critères du schéma de Bernoulli : répétition, indépendance, 2 issues.'],
            solutionSteps: [
              'On répète n = 50 fois de manière identique et indépendante une épreuve de Bernoulli à deux issues (S : la pièce est défectueuse, de probabilité p = 0,02 ; E : la pièce est conforme).',
              'X compte le nombre de succès (pièces défectueuses).',
              'Donc X suit la loi binomiale B(n = 50 ; p = 0,02).',
              'L\'espérance est : E(X) = n × p = 50 × 0,02 = 1. En moyenne, un lot contient 1 pièce défectueuse.'
            ],
            finalAnswer: 'X ~ B(50 ; 0,02) et E(X) = 1',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Calculer la probabilité que le lot contienne exactement 2 pièces défectueuses, arrondie à 10⁻⁴.',
            hints: ['Formule : P(X = 2) = binom(50, 2) × p² × (1-p)⁴⁸.'],
            solutionSteps: [
              'P(X = 2) = (50 × 49 / 2) × (0,02)² × (0,98)⁴⁸.',
              'binom(50, 2) = 1225.',
              'P(X = 2) = 1225 × 0,0004 × (0,98)⁴⁸ ≈ 1225 × 0,0004 × 0,3792 ≈ 0,1858.'
            ],
            finalAnswer: 'P(X = 2) ≈ 0,1858 (soit 18,58%)',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Calculer la probabilité que le lot contienne au moins une pièce défectueuse P(X ≥ 1).',
            hints: ['Passer par l\'événement contraire : P(X ≥ 1) = 1 - P(X = 0).'],
            solutionSteps: [
              'L\'événement contraire de "au moins une pièce défectueuse" est "aucune pièce défectueuse" (X = 0).',
              'P(X = 0) = (1 - 0,02)⁵⁰ = (0,98)⁵⁰ ≈ 0,3642.',
              'P(X ≥ 1) = 1 - P(X = 0) = 1 - 0,3642 = 0,6358.'
            ],
            finalAnswer: 'P(X ≥ 1) ≈ 63,58%',
            pointsAllocated: 2,
            bacTrap: 'Ne tentez pas de sommer P(X=1) + ... + P(X=50) ! Le passage à l\'événement contraire est indispensable.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-bin-1',
        question: 'Pour une loi binomiale B(100 ; 0,3), quelle est l\'espérance E(X) ?',
        options: ['30', '0,3', '70', '21'],
        correctIndex: 0,
        explanation: 'E(X) = n · p = 100 × 0,3 = 30.'
      },
      {
        id: 'q-bin-2',
        question: 'Pour une variable aléatoire X suivant B(n, p), quelle est la formule de sa variance V(X) ?',
        options: [
          'V(X) = n p (1 - p)',
          'V(X) = n p',
          'V(X) = √(n p)',
          'V(X) = n² p'
        ],
        correctIndex: 0,
        explanation: 'La variance d\'une loi binomiale vaut n × p × (1 - p). Son écart-type en est la racine carrée.'
      },
      {
        id: 'q-bin-3',
        question: 'Que vaut le coefficient binomial binom(5, 2) ?',
        options: ['10', '20', '5', '120'],
        correctIndex: 0,
        explanation: 'binom(5, 2) = (5 × 4) / (2 × 1) = 20 / 2 = 10.'
      },
      {
        id: 'q-bin-4',
        question: 'Quelle condition est indispensable pour qu\'une expérience répétée constitue un schéma de Bernoulli ?',
        options: [
          'Les épreuves doivent être identiques et indépendantes entre elles',
          'Le nombre d\'épreuves n doit obligatoirement dépasser 30',
          'La probabilité p doit valoir exactement 0,5',
          'Les tirages doivent impérativement être effectués sans remise'
        ],
        correctIndex: 0,
        explanation: 'Un schéma de Bernoulli exige que la probabilité p de succès reste rigoureusement constante à chaque épreuve (indépendance).'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - PHYSIQUE-CHIMIE SUPPLÉMENTAIRES
  // =========================================================================
  {
    id: 'pc-term-doppler',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Ondes et Effet Doppler : Astrophysique & Vélocimétrie',
    officialCode: 'PC-T-04',
    description: 'Décalage en fréquence d’une onde émise par une source en mouvement relatif, décalage vers le rouge (redshift) et mesure de vitesse par effet Doppler.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Effet Doppler : Modification de la fréquence reçue par un observateur lorsque la source de l\'onde et l\'observateur sont en mouvement relatif.',
      'Source se rapprochant : La longueur d\'onde apparente diminue, la fréquence reçue augmente (son plus aigu, décalage vers le bleu *blueshift*).',
      'Source s\'éloignant : Longueur d\'onde apparente augmente, fréquence diminue (son plus grave, décalage vers le rouge *redshift*).',
      'Preuve de l\'expansion de l\'Univers par Edwin Hubble grâce au décalage spectral des galaxies lointaines.'
    ],
    keyFormulas: [
      {
        label: 'Décalage fréquentiel Doppler pour un rapprochement',
        formula: 'f_{reçue} = f_0 \\cdot \\frac{c}{c - v_{source}} \\iff \\frac{\\Delta f}{f_0} \\approx \\frac{v}{c}',
        explanation: 'Valable pour v << c.'
      }
    ],
    courseSections: [
      {
        title: '1. Applications médicales et technologiques',
        content: [
          'L\'échographie Doppler permet de mesurer en temps réel la vitesse d\'écoulement des hématies dans les artères.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-pc-doppler',
        title: 'Exercice Type Bac : Vélocimétrie sonore et Redshift astrophysique',
        context: 'Partie 1 : Une ambulance émet un signal sonore de fréquence propre f₀ = 1000 Hz et se déplace en ligne droite à v = 34 m/s (soit ~122 km/h). La célérité du son dans l\'air est c = 340 m/s.\nPartie 2 : En astrophysique, le décalage spectral de la raie d\'hydrogène Hα (λ₀ = 656,3 nm) d\'une galaxie lointaine est mesuré à λ_obs = 678,0 nm.',
        difficulty: 'Type Bac',
        points: 7,
        questions: [
          {
            questionText: 'Question 1 : Calculer la fréquence f_reçue perçue par un piéton immobile sur le trottoir pendant que l\'ambulance s\'approche.',
            hints: ['Comme la source s\'approche : f_reçue = f₀ × (c / (c - v)).'],
            solutionSteps: [
              'En phase d\'approche, les fronts d\'ondes se compriment en avant du véhicule.',
              'f_reçue = f₀ × (c / (c - v)).',
              'f_reçue = 1000 × (340 / (340 - 34)) = 1000 × (340 / 306) ≈ 1111 Hz.',
              'Le piéton perçoit un son plus aigu que le son émis.'
            ],
            finalAnswer: 'f_reçue ≈ 1111 Hz',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Calculer la fréquence f\'_reçue perçue par le piéton après que l\'ambulance l\'a dépassé et qu\'elle s\'éloigne.',
            hints: ['En phase d\'éloignement, le dénominateur devient (c + v).'],
            solutionSteps: [
              'En phase d\'éloignement : f\'_reçue = f₀ × (c / (c + v)).',
              'f\'_reçue = 1000 × (340 / (340 + 34)) = 1000 × (340 / 374) ≈ 909 Hz.',
              'Le son perçu devient nettement plus grave.'
            ],
            finalAnswer: 'f\'_reçue ≈ 909 Hz',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 3 : Déterminer la vitesse de récession radiale v_gal de la galaxie observée par rapport à la Terre (c = 3,00 × 10⁸ m/s).',
            hints: ['Formule Doppler non relativiste : |Δλ| / λ₀ = v / c.', 'Δλ = λ_obs - λ₀.'],
            solutionSteps: [
              'Δλ = 678,0 - 656,3 = +21,7 nm. Il y a décalage vers les grandes longueurs d\'onde (redshift), la galaxie s\'éloigne.',
              'Δλ / λ₀ = v_gal / c.',
              'v_gal = c × (Δλ / λ₀) = 3,00 × 10⁸ × (21,7 / 656,3) ≈ 3,00 × 10⁸ × 0,03306.',
              'v_gal ≈ 9,92 × 10⁶ m/s (soit environ 9 920 km/s).'
            ],
            finalAnswer: 'v_gal ≈ 9,92 × 10⁶ m/s (~9 920 km/s)',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-dop-1',
        question: 'En astrophysique, que démontre l\'observation du "redshift" (décalage vers le rouge) des spectres de galaxies lointaines ?',
        options: [
          'Que les galaxies s\'éloignent de nous (expansion de l\'Univers)',
          'Que les galaxies se rapprochent',
          'Que les étoiles sont plus froides',
          'Que la vitesse de la lumière ralentit'
        ],
        correctIndex: 0,
        explanation: 'Un décalage vers les grandes longueurs d\'onde (vers le rouge) prouve l\'éloignement de la source.'
      },
      {
        id: 'q-dop-2',
        question: 'Quand une source sonore s\'approche d\'un observateur immobile, que fait la fréquence perçue ?',
        options: [
          'Elle augmente (le son est perçu plus aigu)',
          'Elle diminue (le son est perçu plus grave)',
          'Elle reste rigoureusement constante',
          'Elle tombe immédiatement à zéro'
        ],
        correctIndex: 0,
        explanation: 'La longueur d\'onde apparente diminue, donc la fréquence f = c/λ augmente : le son est plus aigu.'
      },
      {
        id: 'q-dop-3',
        question: 'Dans les radars routiers ou l\'échographie Doppler médicale, le décalage en fréquence Δf est proportionnel à :',
        options: [
          'La vitesse relative de la cible',
          'La masse du véhicule ou de l\'organe',
          'L\'indice de réfraction du milieu',
          'La température ambiante'
        ],
        correctIndex: 0,
        explanation: 'Δf / f₀ ≈ 2 v / c (pour un aller-retour réfléchi), donc le décalage fréquentiel est directement proportionnel à la vitesse.'
      },
      {
        id: 'q-dop-4',
        question: 'Parmi les ondes suivantes, lesquelles sont soumises à l\'effet Doppler ?',
        options: [
          'Toutes les ondes (mécaniques, sonores, et électromagnétiques / lumineuses)',
          'Seulement les ondes sonores audibles',
          'Seulement la lumière visible',
          'Seulement les ondes de surface à l\'eau'
        ],
        correctIndex: 0,
        explanation: 'L\'effet Doppler est un phénomène ondulatoire universel commun aux ondes acoustiques et aux ondes électromagnétiques.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - SVT SUPPLÉMENTAIRES
  // =========================================================================
  {
    id: 'svt-term-meiose-diversite',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'Génétique et Diversité : Méiose et Brassages Génétiques',
    officialCode: 'SVT-T-03',
    description: 'La méiose comme source de variabilité génétique : brassage interchromosomique en anaphase I, brassage intrachromosomique (crossing-over) en prophase I et fécondation.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'La méiose produit 4 gamètes haploïdes (n) à partir d\'une cellule mère diploïde (2n).',
      'Brassage intrachromosomique : en Prophase I, les chromosomes homologues s\'apparient en bivalents et peuvent échanger des fragments de chromatides (crossing-over au niveau de chiasmas).',
      'Brassage interchromosomique : en Anaphase I, la disjonction aléatoire et indépendante de chaque paire de chromosomes produit 2^n combinaisons possibles.',
      'La fécondation amplifie cette diversité en réunissant au hasard deux gamètes parmi des millions.'
    ],
    keyFormulas: [
      {
        label: 'Nombre de combinaisons possibles de gamètes (sans crossing-over)',
        formula: '2^n \\quad (\\text{pour l\'espèce humaine } 2^{23} \\approx 8{,}4 \\times 10^6)',
        explanation: 'La fécondation porte le nombre théorique de génotypes uniques à plus de (2²³)² ≈ 7 × 10¹⁴.'
      }
    ],
    courseSections: [
      {
        title: '1. Analyse d\'un croisement-test (test-cross)',
        content: [
          'Le croisement d\'un individu hétérozygote avec un homozygote récessif permet de déterminer directement les proportions de gamètes produits.',
          'Si 4 phénotypes équiprobables (25% chacun) : les gènes sont indépendants (portés par des paires de chromosomes distinctes).',
          'Si les phénotypes parentaux sont majoritaires et les recombinés minoritaires : les gènes sont liés (sur le même chromosome, séparés par crossing-over).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-svt-testcross',
        title: 'Exercice Type Bac : Interprétation d\'un test-cross et carte génétique',
        context: 'Chez la Drosophile (Drosophila melanogaster), on étudie la transmission de deux gènes : la couleur du corps (allèles gris b+ dominant / noir b récessif) et la longueur des ailes (ailes longues vg+ dominant / vestigiales vg récessif).\nOn réalise un croisement-test (test-cross) entre une femelle de génération F1 [corps gris, ailes longues] et un mâle double récessif [corps noir, ailes vestigiales].\nLa descendance obtenue comporte 2000 individus répartis ainsi :\n- [corps gris, ailes longues] : 832 drosophiles\n- [corps noir, ailes vestigiales] : 828 drosophiles\n- [corps gris, ailes vestigiales] : 172 drosophiles\n- [corps noir, ailes longues] : 168 drosophiles.',
        difficulty: 'Type Bac',
        points: 7,
        questions: [
          {
            questionText: 'Question 1 : Calculer les pourcentages des différents phénotypes et déduire si les deux gènes sont liés ou indépendants.',
            hints: ['Sommer les phénotypes parentaux d\'une part et recombinés d\'autre part.', 'Comparer à l\'hypothèse d\'équiprobabilité 25/25/25/25.'],
            solutionSteps: [
              'Phénotypes parentaux : (832 + 828) / 2000 = 1660 / 2000 = 83,0%.',
              'Phénotypes recombinés : (172 + 168) / 2000 = 340 / 2000 = 17,0%.',
              'Si les gènes étaient indépendants, on observerait 4 phénotypes équiprobables (25% chacun).',
              'Les phénotypes parentaux étant très nettement majoritaires (83% >> 17%), les deux gènes sont situés sur la même paire de chromosomes homologues : ils sont génétiquement liés.'
            ],
            finalAnswer: 'Gènes liés (83% parentaux / 17% recombinés)',
            pointsAllocated: 2
          },
          {
            questionText: 'Question 2 : Expliquer le mécanisme cellulaire à l\'origine des phénotypes recombinés et préciser à quel stade précis de la méiose il survient.',
            hints: ['Mentionner le brassage intrachromosomique, le crossing-over et les chiasmas.'],
            solutionSteps: [
              'Les phénotypes recombinés proviennent de gamètes possédant une nouvelle combinaison d\'allèles (b+, vg ou b, vg+).',
              'Ces combinaisons résultent d\'un brassage intrachromosomique (crossing-over).',
              'Ce phénomène se produit en Prophase I de méiose, lorsque les chromosomes homologues sont étroitement appariés en bivalents (tétrades).',
              'Des cassures et soudures croisées de chromatides non-sœurs s\'effectuent au niveau de zones de contact appelées chiasmas, conduisant à un échange réciproque de segments de chromatides.'
            ],
            finalAnswer: 'Crossing-over entre chromatides non-sœurs en Prophase I de méiose.',
            pointsAllocated: 3
          },
          {
            questionText: 'Question 3 : Déterminer la distance génétique séparant le gène b du gène vg sur le chromosome, exprimée en centimorgans (cM).',
            hints: ['Par définition, 1% de recombinaison correspond à une distance génétique de 1 cM.'],
            solutionSteps: [
              'Le taux de recombinaison est : r = (Nombre de recombinés / Nombre total) × 100 = (340 / 2000) × 100 = 17,0%.',
              'Une fréquence de recombinaison de 1% équivaut à 1 centimorgan (cM).',
              'Par conséquent, la distance génétique entre le locus du gène b et le locus du gène vg est de 17 cM.'
            ],
            finalAnswer: 'Distance = 17 cM',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-mei-1',
        question: 'À quel stade précis de la méiose se déroule le crossing-over (brassage intrachromosomique) ?',
        options: ['En Prophase I', 'En Métaphase II', 'En Anaphase I', 'En Télophase II'],
        correctIndex: 0,
        explanation: 'Le crossing-over se produit lors de l\'appariement étroit des chromosomes homologues en Prophase I.'
      },
      {
        id: 'q-mei-2',
        question: 'Quel événement de la méiose est responsable du brassage interchromosomique ?',
        options: [
          'La séparation aléatoire et indépendante des chromosomes homologues en Anaphase I',
          'La réplication de l\'ADN en phase S',
          'La condensation des chromosomes en Prophase II',
          'L\'alignement des chromosomes en Métaphase II'
        ],
        correctIndex: 0,
        explanation: 'En Anaphase I, chaque chromosome d\'une paire migre vers l\'un ou l\'autre pôle cellulaire de manière totalement indépendante des autres paires.'
      },
      {
        id: 'q-mei-3',
        question: 'Combien de types de gamètes génétiquement distincts un individu humain peut-il produire par le SEUL brassage interchromosomique ?',
        options: [
          '2²³ soit environ 8,4 millions',
          '23 types',
          '46 types',
          'Environ 1 000 types'
        ],
        correctIndex: 0,
        explanation: 'Avec 23 paires de chromosomes, la disjonction indépendante produit 2²³ ≈ 8,388,608 combinaisons possibles.'
      },
      {
        id: 'q-mei-4',
        question: 'Dans un croisement-test (test-cross) impliquant deux gènes indépendants, quelles sont les proportions phénotypiques attendues dans la descendance ?',
        options: [
          '25% - 25% - 25% - 25% (4 phénotypes équiprobables)',
          '9/16 - 3/16 - 3/16 - 1/16',
          '50% parentaux et 50% d\'un seul type',
          '75% dominant et 25% récessif'
        ],
        correctIndex: 0,
        explanation: 'Si les gènes sont indépendants, le parent F1 produit 4 types de gamètes en proportions rigoureusement égales (1/4 chacun).'
      }
    ]
  }
];
