import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_1ERE_PC: BankExerciseItem[] = [
  {
    id: 'ex-1pc-bank-1',
    targetChapterId: 'pc-1ere-suivi-reaction-avancement',
    title: 'Tableau d’Avancement & Réactif Limitant d’un Airbag',
    context: 'Le gonflage instantané d\'un airbag automobile repose sur la décomposition de l\'azoture de sodium : 2 NaN3 (s) -> 2 Na (s) + 3 N2 (g). On introduit n0 = 1,20 mol de NaN3.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🚗 Sécurité Routière & Tableau d’Avancement',
    questions: [
      {
        questionText: '1. Dresser le tableau d\'avancement de la transformation et déterminer l\'avancement maximal x_max.',
        hints: ['À l\'état final : n0(NaN3) - 2 * x_max = 0.'],
        solutionSteps: [
          'À t = 0 : n(NaN3) = 1,20 mol ; n(Na) = 0 ; n(N2) = 0.',
          'En cours : n(NaN3) = 1,20 - 2x ; n(Na) = 2x ; n(N2) = 3x.',
          'À l\'état final supposé total : 1,20 - 2 * x_max = 0 <=> x_max = 0,60 mol.'
        ],
        finalAnswer: 'x_max = 0,60 mol.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer le volume de gaz diazote N2 dégagé dans l\'airbag. Donnée : Vm = 24,0 L/mol à 20 °C.',
        hints: ['n(N2) = 3 * x_max.', 'V(N2) = n(N2) * Vm.'],
        solutionSteps: [
          'Quantité de gaz produit : n(N2) = 3 * 0,60 = 1,80 mol.',
          'Volume du gaz : V = 1,80 * 24,0 = 43,2 L.'
        ],
        finalAnswer: 'V(N2) = 43,2 Litres (gonflage complet en moins de 40 ms).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1pc-bank-2',
    targetChapterId: 'pc-1ere-acide-base-ph',
    title: 'Acide-Base & Acidité d’une Boisson au Cola',
    context: 'Une canette de soda au cola contient de l\'acide phosphorique H3PO4 donnant un pH de 2,40 mesuré au pH-mètre étalonné.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🥤 Soda & Mesure du pH',
    questions: [
      {
        questionText: '1. Rappeler la relation entre le pH et la concentration en ions oxonium [H3O+].',
        hints: ['pH = -log([H3O+] / C0) avec C0 = 1 mol/L.', '[H3O+] = 10^(-pH).'],
        solutionSteps: [
          'Par définition : pH = -log([H3O+] / C0) et [H3O+] = C0 * 10^(-pH).'
        ],
        finalAnswer: '[H3O+] = 10^(-pH) mol/L.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la concentration en ions oxonium [H3O+] dans cette boisson en mol/L.',
        hints: ['Calculer 10^(-2,40).'],
        solutionSteps: [
          '[H3O+] = 10^(-2,40) ≈ 3,98 * 10^-3 mol/L.'
        ],
        finalAnswer: '[H3O+] ≈ 4,0 * 10^-3 mol/L (soit 4,0 mmol/L).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1pc-bank-3',
    targetChapterId: 'pc-1ere-oxydoreduction',
    title: 'Oxydoréduction & Batterie Lithium-Métal',
    context: 'Une demi-pile met en jeu le couple oxydant/réducteur Li+ / Li(s) et le couple Fe3+ / Fe2+. On écrit les demi-équations électroniques.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '🔋 Électrochimie & Couples Redox',
    questions: [
      {
        questionText: '1. Écrire les demi-équations électroniques pour les couples Li+ / Li et Fe3+ / Fe2+.',
        hints: ['Oxydant + n e- = Réducteur.'],
        solutionSteps: [
          'Pour Li+ / Li : Li+ + e- = Li (s).',
          'Pour Fe3+ / Fe2+ : Fe3+ + e- = Fe2+.'
        ],
        finalAnswer: 'Li+ + e- = Li et Fe3+ + e- = Fe2+.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Écrire l\'équation bilan de la réaction spontanée entre le lithium solide Li(s) (réducteur très fort) et les ions Fe3+.',
        hints: ['Oxydation de Li(s) et réduction de Fe3+.'],
        solutionSteps: [
          'Li (s) -> Li+ + e-.',
          'Fe3+ + e- -> Fe2+.',
          'Bilan global : Li (s) + Fe3+ -> Li+ + Fe2+.'
        ],
        finalAnswer: 'Li (s) + Fe3+ -> Li+ + Fe2+.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-bank-4',
    targetChapterId: 'pc-1ere-structure-matiere',
    title: 'Schéma de Lewis, Géométrie VSEPR & Polarité de l’Eau',
    context: 'La molécule d\'eau H2O (H : Z=1, O : Z=8) possède des propriétés uniques fondamentales pour l\'apparition de la vie sur Terre.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '💧 Molécule d’Eau & VSEPR',
    questions: [
      {
        questionText: '1. Établir le schéma de Lewis de la molécule d\'eau (préciser le nombre de doublets liants et non liants).',
        hints: ['O possède 6 électrons de valence, H possède 1 électron de valence. Total = 8 électrons = 4 doublets.'],
        solutionSteps: [
          'L\'atome central d\'oxygène engage 2 liaisons simples avec les atomes d\'hydrogène (2 doublets liants).',
          'Il lui reste 4 électrons non engagés formant 2 doublets non liants.',
          'La molécule possède donc 2 doublets liants et 2 doublets non liants.'
        ],
        finalAnswer: '2 doublets liants (O-H) et 2 doublets non liants sur l\'oxygène.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle est la géométrie spatiale de la molécule (modèle VSEPR AX2E2) et pourquoi est-elle polaire ?',
        hints: ['Répulsion des doublets non liants.', 'L\'oxygène est plus électronégatif que l\'hydrogène et la molécule est coudée.'],
        solutionSteps: [
          'Avec 4 doublets au total (AX2E2), la disposition des paires d\'électrons est tétraédrique, donnant une forme moléculaire coudée (angle ~104,5°).',
          'L\'oxygène (χ = 3,44) est beaucoup plus électronégatif que l\'hydrogène (χ = 2,20). Les liaisons O-H sont fortement polarisées (charges partielles δ- sur O et δ+ sur H).',
          'Puisque la molécule est coudée, les barycentres des charges positives et négatives ne coïncident pas : la molécule possède un moment dipolaire permanent non nul, elle est polaire.'
        ],
        finalAnswer: 'Géométrie coudée (AX2E2) ; polaire car barycentres des charges dissociés.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1pc-bank-5',
    targetChapterId: 'pc-1ere-mvt-energie',
    title: 'Énergie Cinétique & Distance de Freinage d’une Hypercar',
    context: 'Une Bugatti de masse m = 1 950 kg roule à v1 = 100 km/h (27,8 m/s) puis accélère à v2 = 200 km/h (55,6 m/s).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏎️ Vitesse & Énergie Cinétique',
    questions: [
      {
        questionText: '1. Calculer l\'énergie cinétique Ec1 à 100 km/h (27,8 m/s).',
        hints: ['Formule : Ec = 0,5 * m * v^2.'],
        solutionSteps: [
          'Ec1 = 0,5 * 1950 * (27,78)^2 ≈ 0,5 * 1950 * 771,7 ≈ 752 400 J = 752 kJ.'
        ],
        finalAnswer: 'Ec1 ≈ 752 kJ.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Par quel facteur l\'énergie cinétique est-elle multipliée lorsque la vitesse double de 100 à 200 km/h ? En déduire l\'impact sur la distance de freinage.',
        hints: ['Ec est proportionnelle au carré de la vitesse : (2v)^2 = 4 v^2.'],
        solutionSteps: [
          'Puisque Ec dépend de v^2, si la vitesse est multipliée par 2, l\'énergie cinétique est multipliée par 2^2 = 4.',
          'D\'après le théorème de l\'énergie cinétique (W = ΔEc = F * d), la distance d\'arrêt est multipliée par 4.'
        ],
        finalAnswer: 'Multipliée par 4 ; la distance de freinage est quadruplée.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-bank-6',
    targetChapterId: 'pc-1ere-mvt-energie',
    title: 'Théorème de l’Énergie Mécanique & Looping de Montagnes Russes',
    context: 'Un wagon de grand huit de masse m = 500 kg s\'élance sans vitesse initiale depuis une hauteur hA = 30 m au-dessus du sol. On néglige les frottements (g = 9,81 m/s^2).',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'gaming',
    themeLabel: '🎢 Grand Huit & Énergie Mécanique',
    questions: [
      {
        questionText: '1. Justifier la conservation de l\'énergie mécanique Em du wagon tout au long du parcours.',
        hints: ['Le poids est une force conservative et les frottements sont négligés.'],
        solutionSteps: [
          'Le wagon n\'est soumis qu\'à son poids (force conservative) et à la réaction des rails (perpendiculaire au déplacement, donc de travail nul).',
          'En l\'absence de forces non conservatives dissipatives (frottements nuls), l\'énergie mécanique Em = Ec + Epp se conserve rigoureusement.'
        ],
        finalAnswer: 'Conservation de Em car seules des forces conservatives travaillent.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la vitesse du wagon au point B situé au ras du sol (hB = 0 m).',
        hints: ['Em(A) = Em(B) <=> m * g * hA = 0,5 * m * vB^2.'],
        solutionSteps: [
          'm * g * hA = 0,5 * m * (vB)^2.',
          'En simplifiant par m : (vB)^2 = 2 * g * hA = 2 * 9,81 * 30 = 588,6.',
          'vB = √588,6 ≈ 24,26 m/s (soit environ 87,3 km/h).'
        ],
        finalAnswer: 'vB ≈ 24,3 m/s (87,3 km/h).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1pc-bank-7',
    targetChapterId: 'pc-1ere-ondes-meca',
    title: 'Sonar Sous-Marin & Écholocalisation d’un Sous-Marin Nucléaire',
    context: 'Un sous-marin émet une salve ultrasonore de fréquence f = 40 kHz dans l\'eau de mer. La célérité du son dans l\'eau est v = 1 500 m/s. L\'écho réfléchi par un haut-fond est reçu après Δt = 1,20 s.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '⚓ Sonar & Célérité des Ondes',
    questions: [
      {
        questionText: '1. Calculer la longueur d\'onde λ de ces ultrasons dans l\'eau.',
        hints: ['Relation fondamentale : λ = v / f.'],
        solutionSteps: [
          'λ = v / f = 1 500 / 40 000 = 0,0375 m = 3,75 cm.'
        ],
        finalAnswer: 'λ = 3,75 cm.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la distance d séparant le sous-marin de l\'obstacle.',
        hints: ['Attention à l\'aller-retour : l\'onde parcourt 2d en un temps Δt.'],
        solutionSteps: [
          'Distance parcourue par l\'onde aller-retour : D = v * Δt = 1 500 * 1,20 = 1 800 m.',
          'Distance à l\'obstacle : d = D / 2 = 1 800 / 2 = 900 m.'
        ],
        finalAnswer: 'd = 900 mètres.',
        pointsAllocated: 3,
        bacTrap: 'Ne pas oublier de diviser par 2 pour prendre en compte le trajet aller-retour !'
      }
    ]
  },
  {
    id: 'ex-1pc-bank-8',
    targetChapterId: 'pc-1ere-couleurs-spectrophotometrie',
    title: 'Loi de Beer-Lambert & Dosage du Bleu Patenté dans une Boisson Énergétique',
    context: 'On mesure l\'absorbance A d\'une solution de colorant alimentaire bleu patenté V à λ_max = 640 nm dans une cuve de largeur l = 1,0 cm : A = 0,85. La droite d\'étalonnage donne A = 1,70 * 10^4 * C (C en mol/L).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🧪 Spectrophotométrie & Beer-Lambert',
    questions: [
      {
        questionText: '1. Énoncer la loi de Beer-Lambert et préciser la signification de chaque terme.',
        hints: ['A = ε * l * C.'],
        solutionSteps: [
          'A = ε * l * C, où A est l\'absorbance (sans unité), ε le coefficient d\'absorption molaire (L.mol^-1.cm^-1), l la largeur de la cuve (cm), et C la concentration molaire (mol.L^-1).'
        ],
        finalAnswer: 'A = ε · l · C (absorbance proportionnelle à la concentration).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Déterminer la concentration molaire C de ce colorant dans la boisson.',
        hints: ['C = A / pente.'],
        solutionSteps: [
          'C = 0,85 / (1,70 * 10^4) = 5,0 * 10^-5 mol/L.'
        ],
        finalAnswer: 'C = 5,0 * 10^-5 mol/L (50 µmol/L).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1pc-bank-9',
    targetChapterId: 'pc-1ere-electricite-puissance',
    title: 'Effet Joule & Rendement d’une Ligne Électrique Très Haute Tension (THT)',
    context: 'Une ligne électrique de résistance R = 4,0 Ω transporte une puissance P = 400 MW sous une tension U = 400 kV (4,0 * 10^5 V).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '⚡ Haute Tension & Effet Joule',
    questions: [
      {
        questionText: '1. Calculer l\'intensité I du courant circulant dans la ligne.',
        hints: ['P = U * I <=> I = P / U.'],
        solutionSteps: [
          'I = P / U = (400 * 10^6) / (400 * 10^3) = 1 000 A.'
        ],
        finalAnswer: 'I = 1 000 A (1,0 kA).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la puissance dissipée par effet Joule P_joule = R * I^2 et en déduire le pourcentage de perte sur le transport.',
        hints: ['P_joule = 4,0 * (1000)^2.', 'Perte = P_joule / P_totale.'],
        solutionSteps: [
          'P_joule = 4,0 * (1 000)^2 = 4,0 * 10^6 W = 4,0 MW.',
          'Pertes relatives : 4,0 MW / 400 MW = 0,01 = 1,0%.'
        ],
        finalAnswer: 'P_joule = 4 MW (seulement 1% de perte grâce à la très haute tension !).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1pc-bank-10',
    targetChapterId: 'pc-1ere-acide-base-ph',
    title: 'Diagramme de Prédominance de l’Acide Lactique en Médecine Sportive',
    context: 'L\'acide lactique a un pKa de 3,86 à 25 °C pour le couple acide lactique / ion lactate (CH3-CHOH-COOH / CH3-CHOH-COO-). Le pH du sang humain est maintenu à 7,40.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🩸 Sang Humain & Diagramme de Prédominance',
    questions: [
      {
        questionText: '1. Tracer l\'axe de pH et indiquer le domaine de prédominance de l\'acide et de la base conjuguée.',
        hints: ['Si pH < pKa : forme acide prédomine. Si pH > pKa : forme basique prédomine.'],
        solutionSteps: [
          'Pour pH < 3,86 : l\'acide lactique CH3-CHOH-COOH prédomine.',
          'Pour pH = 3,86 : [acide] = [base].',
          'Pour pH > 3,86 : l\'ion lactate CH3-CHOH-COO- prédomine.'
        ],
        finalAnswer: 'Forme acide si pH < 3,86 ; forme basique (lactate) si pH > 3,86.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle forme chimique est ultra-majoritaire dans le sang à pH = 7,40 ?',
        hints: ['Comparer 7,40 et 3,86.'],
        solutionSteps: [
          'pH(sang) = 7,40 >> pKa (3,86). Le rapport [base]/[acide] = 10^(pH - pKa) = 10^(3,54) ≈ 3500.',
          'C\'est donc quasi-exclusivement l\'ion lactate qui circule dans le plasma sanguin.'
        ],
        finalAnswer: 'L\'ion lactate (base conjuguée) est ultra-majoritaire (> 99,9%).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-bank-11',
    targetChapterId: 'pc-1ere-oxydoreduction',
    title: 'Oxydation de l’Aluminium & Protection par Anodisation',
    context: 'Le châssis d\'un MacBook en aluminium réagit avec le dioxygène de l\'air pour former une couche protectrice d\'alumine : 4 Al (s) + 3 O2 (g) -> 2 Al2O3 (s).',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'tech',
    themeLabel: '💻 Design & Couche d’Alumine',
    questions: [
      {
        questionText: '1. Identifier l\'oxydant et le réducteur dans cette transformation.',
        hints: ['L\'oxydant gagne des électrons, le réducteur en cède.'],
        solutionSteps: [
          'Al cède 3 électrons : Al -> Al3+ + 3 e- (réducteur).',
          'O2 capte 4 électrons : O2 + 4 e- -> 2 O2- (oxydant).'
        ],
        finalAnswer: 'Al est le réducteur ; O2 est l\'oxydant.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi cette oxydation spontanée ne détruit-elle pas le métal comme la rouille sur le fer ?',
        hints: ['L\'alumine forme une couche étanche et imperméable (passivation).'],
        solutionSteps: [
          'L\'alumine Al2O3 forme une couche d\'oxyde compacte, adhérente et imperméable à l\'air qui isole le cœur du métal et stoppe la corrosion : c\'est le phénomène de passivation.'
        ],
        finalAnswer: 'Passivation naturelle : couche d\'oxyde compacte et protectrice.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1pc-bank-12',
    targetChapterId: 'pc-1ere-suivi-reaction-avancement',
    title: 'Cinétique d’Effervescence d’un Comprimé d’Alka-Seltzer',
    context: 'La réaction entre l\'hydrogénocarbonate de sodium et l\'acide citrique produit du CO2. On mesure la masse du bécher au cours du temps : m(0) = 152,40 g, m(final) = 151,30 g.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '💊 Pharmacie & Suivi par Masse',
    questions: [
      {
        questionText: '1. Pourquoi la masse du bécher diminue-t-elle au cours de l\'expérience ?',
        hints: ['Le gaz carbonique CO2 s\'échappe dans l\'atmosphère.'],
        solutionSteps: [
          'Le système chimique est ouvert : le dioxygène ou gaz carbonique produit (ici CO2) s\'échappe à l\'extérieur du récipient, diminuant la masse totale mesurée par la balance.'
        ],
        finalAnswer: 'Échappement du gaz CO2 dans l\'atmosphère.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la masse puis la quantité de matière de CO2 dégagé. M(CO2) = 44,0 g/mol.',
        hints: ['Δm = m(0) - m(final).', 'n = m / M.'],
        solutionSteps: [
          'm(CO2) = 152,40 - 151,30 = 1,10 g.',
          'n(CO2) = 1,10 / 44,0 = 0,025 mol = 25 mmol.'
        ],
        finalAnswer: 'm = 1,10 g et n = 25 mmol.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1pc-bank-13',
    targetChapterId: 'pc-1ere-structure-matiere',
    title: 'Liaisons Hydrogène & Cohésion de l’ADN et de l’Éthanol',
    context: 'L\'éthanol (CH3-CH2-OH) a une température d\'ébullition de 78 °C alors que son isomère le méthoxyméthane (CH3-O-CH3) bout à -24 °C sous 1 bar.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧪 Cohésion & Liaisons Hydrogène',
    questions: [
      {
        questionText: '1. Expliquer la différence spectaculaire de température d\'ébullition entre ces deux molécules de même formule brute (C2H6O).',
        hints: ['Présence d\'un groupe -OH permettant d\'établir des liaisons hydrogène intermoléculaires.'],
        solutionSteps: [
          'L\'éthanol possède un groupe hydroxyle -OH dans lequel l\'hydrogène lié à un oxygène très électronégatif peut former de fortes liaisons hydrogène intermoléculaires.',
          'Le méthoxyméthane ne possède que des interactions faibles de Van der Waals (Keesom/Debye).',
          'La rupture des liaisons hydrogène nécessite un apport thermique bien plus important, d\'où une température d\'ébullition beaucoup plus élevée.'
        ],
        finalAnswer: 'Présence de liaisons hydrogène intermoléculaires dans l\'éthanol.',
        pointsAllocated: 4
      },
      {
        questionText: '2. L\'éthanol est-il miscible à l\'eau en toutes proportions ? Justifier.',
        hints: ['Les deux liquides sont polaires et s\'associent par liaisons H.'],
        solutionSteps: [
          'Oui. L\'éthanol et l\'eau sont tous deux des solvants polaires protiques capables d\'échanger mutuellement un vaste réseau de liaisons hydrogène.'
        ],
        finalAnswer: 'Oui, totalement miscible grâce aux liaisons hydrogène mutuelles.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-bank-14',
    targetChapterId: 'pc-1ere-mvt-energie',
    title: 'Accélération & Vecteur Vitesse lors d’un Départ en Formule E',
    context: 'Une monoplace électrique passe de 0 à 100 km/h (27,8 m/s) en ligne droite en une durée Δt = 2,8 s.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏎️ Formule E & Accélération',
    questions: [
      {
        questionText: '1. Calculer la valeur moyenne de l\'accélération a_moy en m/s^2.',
        hints: ['a_moy = Δv / Δt.'],
        solutionSteps: [
          'a_moy = (27,78 - 0) / 2,8 ≈ 9,92 m/s^2.'
        ],
        finalAnswer: 'a_moy ≈ 9,9 m/s^2 (environ 1,01 g, supérieur à la gravité terrestre !).',
        pointsAllocated: 3
      },
      {
        questionText: '2. En supposant l\'accélération constante, quelle distance d a été parcourue pendant ces 2,8 secondes ?',
        hints: ['Pour un mouvement rectiligne uniformément accéléré sans vitesse initiale : d = 0,5 * a * t^2.'],
        solutionSteps: [
          'd = 0,5 * 9,92 * (2,8)^2 = 0,5 * 9,92 * 7,84 ≈ 38,9 m.'
        ],
        finalAnswer: 'd ≈ 38,9 mètres.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-bank-15',
    targetChapterId: 'pc-1ere-ondes-meca',
    title: 'Niveau d’Intensité Sonore & Décibels en Festival Electro',
    context: 'Devant la scène d\'un festival, l\'intensité sonore mesurée est I = 0,10 W/m^2. Le seuil d\'audibilité humaine est I0 = 1,0 * 10^-12 W/m^2.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'cinema',
    themeLabel: '🎧 Festival & Niveau Sonore en dB',
    questions: [
      {
        questionText: '1. Rappeler la définition du niveau d\'intensité sonore L en décibels (dB).',
        hints: ['L = 10 * log(I / I0).'],
        solutionSteps: [
          'L = 10 * log10(I / I0).'
        ],
        finalAnswer: 'L = 10 · log10(I / I0).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer le niveau sonore L en dB et préciser s\'il dépasse le seuil légal de danger auditif (102 dB en France).',
        hints: ['I / I0 = 0,10 / 10^-12 = 10^11.', 'log10(10^11) = 11.'],
        solutionSteps: [
          'I / I0 = 10^-1 / 10^-12 = 10^11.',
          'L = 10 * 11 = 110 dB.',
          '110 dB est largement au-dessus du seuil légal de 102 dB et du seuil de danger (85 dB) : port de bouchons d\'oreilles obligatoire !'
        ],
        finalAnswer: 'L = 110 dB (dépassement dangereux du seuil de sécurité).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1pc-bank-16',
    targetChapterId: 'pc-1ere-couleurs-spectrophotometrie',
    title: 'Synthèse Additive vs Soustractive des Écrans OLED',
    context: 'Un pixel d\'écran de smartphone OLED combine trois sous-pixels lumineux Rouge, Vert et Bleu (RVB). Une imprimante utilise les encres Cyan, Magenta, Jaune.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '📱 Écrans OLED & Couleurs',
    questions: [
      {
        questionText: '1. Quelle couleur perçoit l\'œil humain lorsque les sous-pixels Rouge et Vert sont allumés à intensité maximale (synthèse additive) ?',
        hints: ['R + V = ?'],
        solutionSteps: [
          'En synthèse additive, la superposition de faisceaux lumineux Rouge et Vert stimule les cônes rétiniens pour donner la sensation de Jaune.'
        ],
        finalAnswer: 'Couleur Jaune.',
        pointsAllocated: 3
      },
      {
        questionText: '2. En synthèse soustractive (imprimerie), quelle couleur obtient-on en mélangeant une encre Cyan et une encre Jaune ?',
        hints: ['Le cyan absorbe le rouge, le jaune absorbe le bleu...'],
        solutionSteps: [
          'L\'encre cyan absorbe le rouge et transmet le vert et le bleu.',
          'L\'encre jaune absorbe le bleu et transmet le rouge et le vert.',
          'La seule composante non absorbée et réfléchie par les deux est le Vert.'
        ],
        finalAnswer: 'Couleur Verte.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-bank-17',
    targetChapterId: 'pc-1ere-electricite-puissance',
    title: 'Caractéristique Tension-Courant d’une Cellule Photovoltaïque',
    context: 'Une cellule solaire en plein ensoleillement présente une tension à vide U0 = 0,60 V et un courant de court-circuit Icc = 4,0 A. Le point de puissance maximale (MPP) est obtenu pour U_mp = 0,48 V et I_mp = 3,5 A.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '☀️ Panneau Solaire & Puissance Max',
    questions: [
      {
        questionText: '1. Calculer la puissance électrique crête P_max délivrée par cette cellule au point MPP.',
        hints: ['P = U * I.'],
        solutionSteps: [
          'P_max = U_mp * I_mp = 0,48 V * 3,5 A = 1,68 W.'
        ],
        finalAnswer: 'P_max = 1,68 Watt.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Si un panneau réunit 60 cellules identiques en série, quelle sera sa tension totale et sa puissance totale ?',
        hints: ['En série, les tensions s\'additionnent et le courant reste le même.'],
        solutionSteps: [
          'U_totale = 60 * 0,48 = 28,8 V.',
          'P_totale = 60 * 1,68 W = 100,8 W.'
        ],
        finalAnswer: 'U = 28,8 V et P = 100,8 W.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-bank-18',
    targetChapterId: 'pc-1ere-acide-base-ph',
    title: 'Titrage Conductimétrique de l’Acide Chlorhydrique par la Soude',
    context: 'On titre 20,0 mL d\'acide chlorhydrique (H3O+ + Cl-) par une solution d\'hydroxyde de sodium (Na+ + HO-) de concentration Cb = 0,100 mol/L. Le volume équivalent repéré au minimum de conductivité est V_E = 15,0 mL.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧪 Conductimétrie & Équivalence',
    questions: [
      {
        questionText: '1. Écrire la réaction support de ce titrage.',
        hints: ['Réaction entre H3O+ et HO-.'],
        solutionSteps: [
          'H3O+ (aq) + HO- (aq) -> 2 H2O (l).'
        ],
        finalAnswer: 'H3O+ + HO- -> 2 H2O.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la concentration Ca de la solution d\'acide chlorhydrique.',
        hints: ['À l\'équivalence : Ca * Va = Cb * V_E.'],
        solutionSteps: [
          'À l\'équivalence, les réactifs ont été introduits dans les proportions stœchiométriques : Ca * Va = Cb * V_E.',
          'Ca = (Cb * V_E) / Va = (0,100 * 15,0) / 20,0 = 0,0750 mol/L.'
        ],
        finalAnswer: 'Ca = 0,075 mol/L (75 mmol/L).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1pc-bank-19',
    targetChapterId: 'pc-1ere-oxydoreduction',
    title: 'Dosage de l’Éthanol dans le Sang par Éthylotest Chimique',
    context: 'L\'ancien éthylotest à ballon utilise des ions dichromate Cr2O7^2- (oranges) qui sont réduits en ions chrome Cr3+ (verts) par l\'éthanol CH3-CH2-OH.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'cinema',
    themeLabel: '🚨 Sécurité Routière & Éthylotest',
    questions: [
      {
        questionText: '1. Ajuster la demi-équation du couple Cr2O7^2- / Cr3+ en milieu acide.',
        hints: ['Cr2O7^2- + 14 H+ + 6 e- -> 2 Cr3+ + 7 H2O.'],
        solutionSteps: [
          'Équilibrer le chrome : Cr2O7^2- -> 2 Cr3+.',
          'Équilibrer l\'oxygène avec H2O : Cr2O7^2- -> 2 Cr3+ + 7 H2O.',
          'Équilibrer l\'hydrogène avec H+ : Cr2O7^2- + 14 H+ -> 2 Cr3+ + 7 H2O.',
          'Équilibrer les charges avec les électrons : charge gauche = -2 + 14 = +12 ; charge droite = +6. On ajoute 6 e- à gauche.'
        ],
        finalAnswer: 'Cr2O7^2- + 14 H+ + 6 e- -> 2 Cr3+ + 7 H2O.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quel changement de couleur visuel atteste que l\'automobiliste est positif ?',
        hints: ['Cr2O7^2- est orange, Cr3+ est vert.'],
        solutionSteps: [
          'La réduction des ions dichromate oranges en ions chrome III verts entraîne un virage net de la couleur du tube de l\'orange vers le vert.'
        ],
        finalAnswer: 'Virage de l\'orange au vert.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1pc-bank-20',
    targetChapterId: 'pc-1ere-mvt-energie',
    title: 'Force de Frottement Fluide & Vitesse Terminale d’une Balle de Tennis',
    context: 'Une balle de tennis de masse m = 58 g lâchée sans vitesse initiale subit une traînée de l\'air F = 0,0012 * v^2 (g = 9,81 m/s^2).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '🎾 Tennis & Vitesse Terminale',
    questions: [
      {
        questionText: '1. Calculer le poids P de la balle.',
        hints: ['m = 0,058 kg.', 'P = m * g.'],
        solutionSteps: [
          'P = 0,058 * 9,81 ≈ 0,569 N.'
        ],
        finalAnswer: 'P ≈ 0,569 N.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la vitesse limite v_lim atteinte en chute verticale lorsque la traînée compense exactement le poids.',
        hints: ['P = 0,0012 * (v_lim)^2.'],
        solutionSteps: [
          '(v_lim)^2 = 0,569 / 0,0012 ≈ 474,17.',
          'v_lim = √474,17 ≈ 21,78 m/s.'
        ],
        finalAnswer: 'v_lim ≈ 21,8 m/s (environ 78,4 km/h).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1pc-bank-21',
    targetChapterId: 'pc-1ere-suivi-reaction-avancement',
    title: 'Synthèse de l’Arôme de Banane & Rendement Chimique',
    context: 'L\'acétate d\'isoamyle (arôme de banane) est obtenu par estérification : acide acétique + alcool isoamylique -> ester + eau. À partir de 0,50 mol de réactifs équimolaires, on recueille m_exp = 45,5 g d\'ester (M = 130 g/mol).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🍌 Arômes & Rendement Chimique',
    questions: [
      {
        questionText: '1. Calculer la masse théorique maximale m_th d\'ester si la réaction était totale (x_max = 0,50 mol).',
        hints: ['m_th = n_max * M.'],
        solutionSteps: [
          'm_th = 0,50 mol * 130 g/mol = 65,0 g.'
        ],
        finalAnswer: 'm_th = 65,0 g.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer le rendement r de cette synthèse d\'estérification.',
        hints: ['r = m_exp / m_th.'],
        solutionSteps: [
          'r = 45,5 / 65,0 = 0,70 = 70%.'
        ],
        finalAnswer: 'Rendement r = 70% (classique pour un alcool primaire).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1pc-bank-22',
    targetChapterId: 'pc-1ere-ondes-meca',
    title: 'Ondes Sismiques & Retard Temporel entre Stations',
    context: 'Un séisme sous-marin génère une onde P de célérité v = 6,0 km/s. La station B est située à d = 180 km plus loin du foyer que la station A.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🌊 Sismologie & Retard d’Onde',
    questions: [
      {
        questionText: '1. Calculer le retard temporel τ entre l\'enregistrement du signal à la station A et à la station B.',
        hints: ['τ = d / v.'],
        solutionSteps: [
          'τ = 180 km / 6,0 km/s = 30 secondes.'
        ],
        finalAnswer: 'τ = 30 secondes.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Si le séisme déclenche un tsunami dans l\'eau côtière se déplaçant à 720 km/h (200 m/s), combien de temps met la vague pour franchir ces mêmes 180 km ?',
        hints: ['t = distance / vitesse.', 'Convertir 180 km en mètres.'],
        solutionSteps: [
          't = 180 000 m / 200 m/s = 900 secondes = 15 minutes.'
        ],
        finalAnswer: 't = 15 minutes (les ondes sismiques P arrivent donc 14 min 30 s avant la vague de tsunami, permettant l\'alerte précoce).',
        pointsAllocated: 2
      }
    ]
  }
];
