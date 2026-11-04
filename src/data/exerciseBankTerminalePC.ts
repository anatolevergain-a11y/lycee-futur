import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_TERMINALE_PC: BankExerciseItem[] = [
  {
    id: 'ex-tpc-bank-1',
    targetChapterId: 'pc-term-titrage',
    title: 'Titrage pH-métrique de l’Acide Acétique dans le Vinaigre Artisanal',
    context: 'On titre Va = 10,0 mL d\'une solution de vinaigre dilué par de la soude (Cb = 0,100 mol/L). Le saut de pH présente un point d\'inflexion à V_E = 14,2 mL et pH_E = 8,7.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🥗 Chimie Analytique & Méthode des Tangentes',
    questions: [
      {
        questionText: '1. Pourquoi le pH à l\'équivalence (pH_E = 8,7) est-il basique et non neutre (pH = 7) ?',
        hints: ['À l\'équivalence, tout l\'acide éthanoïque a été transformé en sa base conjuguée, l\'ion éthanoate CH3COO-.'],
        solutionSteps: [
          'À l\'équivalence, la totalité de l\'acide faible CH3COOH a réagi pour former l\'ion éthanoate CH3COO-, qui est une base faible.',
          'Cette base faible réagit partiellement avec l\'eau selon : CH3COO- + H2O = CH3COOH + HO-, produisant des ions hydroxyde et conférant à la solution un pH basique (> 7).'
        ],
        finalAnswer: 'Présence exclusive de la base faible éthanoate CH3COO- à l\'équivalence.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la concentration molaire Ca de l\'acide acétique dans le vinaigre dilué.',
        hints: ['À l\'équivalence : Ca * Va = Cb * V_E.'],
        solutionSteps: [
          'Ca = (Cb * V_E) / Va = (0,100 * 14,2) / 10,0 = 0,142 mol/L.'
        ],
        finalAnswer: 'Ca = 0,142 mol/L (142 mmol/L).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tpc-bank-2',
    targetChapterId: 'pc-term-mecanique',
    title: 'Balistique & Tir au But lors d’une Séance de Tirs au But',
    context: 'Un ballon de football est frappé depuis l\'origine avec une vitesse initiale v0 = 25,0 m/s sous un angle α = 30,0° au-dessus de l\'horizontale (g = 9,81 m/s^2). La cage de but est située à x = 20,0 m avec une barre transversale à h = 2,44 m.',
    difficulty: 'Type Bac',
    points: 9,
    themeTag: 'sport',
    themeLabel: '⚽ Football & Équations Horaires de Balistique',
    questions: [
      {
        questionText: '1. Établir l\'équation de la trajectoire y(x) en éliminant le temps t entre les équations horaires x(t) = (v0 cos α) t et y(t) = -0,5 g t^2 + (v0 sin α) t.',
        hints: ['t = x / (v0 cos α).', 'Remplacer t dans y(t).', '1 / cos^2 α = 1 + tan^2 α.'],
        solutionSteps: [
          't = x / (v0 cos α).',
          'y(x) = -0,5 g * (x / (v0 cos α))^2 + (v0 sin α) * (x / (v0 cos α)).',
          'y(x) = - g / (2 v0^2 cos^2 α) * x^2 + (tan α) * x.'
        ],
        finalAnswer: 'y(x) = - [ g / (2 v0^2 cos^2 α) ] x^2 + (tan α) x.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Calculer la hauteur y(20) du ballon lorsqu\'il franchit la ligne de but. Le but est-il marqué (y < 2,44 m) ou le ballon passe-t-il au-dessus ?',
        hints: ['v0 = 25, cos(30°) = 0,866, tan(30°) = 0,577.', 'Calculer le terme en x^2.'],
        solutionSteps: [
          'v0^2 cos^2(30°) = 625 * (0,75) = 468,75.',
          'Facteur multiplicatif : 9,81 / (2 * 468,75) = 9,81 / 937,5 ≈ 0,010464.',
          'y(20) = - 0,010464 * (20)^2 + 0,57735 * (20) = - 4,186 + 11,547 = 7,36 m.',
          '7,36 m > 2,44 m : le tir est beaucoup trop haut et s\'envole au-dessus de la barre transversale !'
        ],
        finalAnswer: 'y(20) ≈ 7,36 m : le ballon passe nettement au-dessus de la transversale (but non marqué).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tpc-bank-3',
    targetChapterId: 'pc-term-mecanique-celeste-kepler',
    title: '3e Loi de Kepler & Orbite de la Station Spatiale Internationale (ISS)',
    context: 'L\'ISS gravite à une altitude h = 400 km autour de la Terre (rayon terrestre RT = 6 371 km, masse MT = 5,97 * 10^24 kg, G = 6,67 * 10^-11 N.m^2/kg^2).',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'space',
    themeLabel: '🛰️ ISS & Gravitation Keplerienne',
    questions: [
      {
        questionText: '1. Calculer le rayon orbital r de l\'ISS par rapport au centre de la Terre en mètres.',
        hints: ['r = RT + h. Convertir les kilomètres en mètres.'],
        solutionSteps: [
          'r = 6 371 km + 400 km = 6 771 km = 6,771 * 10^6 m.'
        ],
        finalAnswer: 'r = 6,771 * 10^6 mètres.',
        pointsAllocated: 2
      },
      {
        questionText: '2. En égalant la force de gravitation de Newton à la force centripète m v^2 / r, exprimer puis calculer la vitesse orbitale v de l\'ISS en km/s.',
        hints: ['v = √(G * MT / r).'],
        solutionSteps: [
          'G * MT * m / r^2 = m * v^2 / r <=> v^2 = G * MT / r.',
          'v = √( (6,67 * 10^-11 * 5,97 * 10^24) / (6,771 * 10^6) ) = √( 3,982 * 10^14 / 6,771 * 10^6 ) = √(5,881 * 10^7) ≈ 7669 m/s.',
          'En km/s : v ≈ 7,67 km/s (soit environ 27 600 km/h).'
        ],
        finalAnswer: 'v ≈ 7,67 km/s (27 600 km/h).',
        pointsAllocated: 6
      }
    ]
  },
  {
    id: 'ex-tpc-bank-4',
    targetChapterId: 'pc-term-circuit-rc',
    title: 'Temps de Charge & Flash au Xénon d’un Appareil Photo',
    context: 'Le condensateur d\'un flash photo de capacité C = 220 µF est chargé à travers une résistance R = 1,5 kΩ sous une tension E = 300 V. On étudie la constante de temps τ = R * C.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'tech',
    themeLabel: '📸 Flash Photo & Circuit RC',
    questions: [
      {
        questionText: '1. Calculer la constante de temps τ du circuit en secondes.',
        hints: ['R en ohms (1 500 Ω), C en farads (220 * 10^-6 F).'],
        solutionSteps: [
          'τ = R * C = 1 500 * (220 * 10^-6) = 0,33 s.'
        ],
        finalAnswer: 'τ = 0,33 s (330 millisecondes).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Au bout de quelle durée 5τ le condensateur est-il considéré comme totalement chargé (> 99%) ? Calculer l\'énergie maximale stockée E_c = 0,5 C E^2.',
        hints: ['Durée totale = 5 * τ.', 'E_c = 0,5 * C * E^2.'],
        solutionSteps: [
          'Temps de charge complète : t_charge = 5 * 0,33 s = 1,65 s.',
          'Énergie stockée : E_c = 0,5 * (220 * 10^-6) * (300)^2 = 0,5 * 220 * 10^-6 * 90 000 = 9,9 Joules.'
        ],
        finalAnswer: 'Charge complète en 1,65 s ; énergie stockée = 9,9 Joules (libérée en 1 ms lors du flash).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tpc-bank-5',
    targetChapterId: 'pc-term-cinetique-chimique',
    title: 'Cinétique d’Ordre 1 & Décomposition de l’Eau Oxygénée',
    context: 'La dismutation de l\'eau oxygénée 2 H2O2 -> 2 H2O + O2 catalysée par des ions Fe3+ suit une cinétique d\'ordre 1. Le temps de demi-réaction est t1/2 = 15 minutes.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '⏱️ Temps de Demi-Réaction & Ordre 1',
    questions: [
      {
        questionText: '1. Rappeler la relation entre la constante de vitesse k et le temps de demi-réaction t1/2 pour une réaction d\'ordre 1.',
        hints: ['k = ln(2) / t1/2.'],
        solutionSteps: [
          'Pour un ordre 1 : [A](t) = [A]0 * e^(-kt).',
          'À t1/2, [A] = [A]0 / 2 <=> e^(-k t1/2) = 1/2 <=> k * t1/2 = ln(2).',
          'Donc k = ln(2) / t1/2.'
        ],
        finalAnswer: 'k = ln(2) / t1/2.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer le pourcentage d\'eau oxygénée restante après une durée de t = 45 minutes (soit 3 temps de demi-réaction).',
        hints: ['Après n demi-vies, la quantité restante est divisée par 2^n.'],
        solutionSteps: [
          '45 min = 3 * 15 min = 3 * t1/2.',
          'Fraction restante = (1/2)^3 = 1/8 = 0,125 = 12,5%.'
        ],
        finalAnswer: '12,5% d\'eau oxygénée restante (87,5% consommée).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tpc-bank-6',
    targetChapterId: 'pc-term-doppler',
    title: 'Effet Doppler & Radar Tachymètre de la Gendarmerie',
    context: 'Un radar de contrôle de vitesse routier émet une onde électromagnétique à f0 = 24,125 GHz (c = 3,00 * 10^8 m/s). Le décalage Doppler mesuré sur une voiture en approche est Δf = 4 500 Hz.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'tech',
    themeLabel: '🚨 Radar Routier & Effet Doppler',
    questions: [
      {
        questionText: '1. Établir la formule du décalage Doppler pour un radar à réflexion (aller-retour de l\'onde) : Δf = 2 v f0 / c.',
        hints: ['L\'effet Doppler intervient deux fois : une fois pour la cible réceptrice en mouvement, une fois pour la cible émettrice de l\'écho.'],
        solutionSteps: [
          'Lors de l\'aller, la voiture en mouvement perçoit une fréquence décalée f1 = f0 (1 + v/c).',
          'En réfléchissant l\'onde, elle agit comme une source mobile se déplaçant vers le radar : l\'onde reçue par le radar a une fréquence f2 = f1 / (1 - v/c) ≈ f0 (1 + 2 v/c).',
          'Le décalage fréquentiel mesuré est donc Δf = 2 * (v / c) * f0.'
        ],
        finalAnswer: 'Δf = (2 v / c) · f0.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Calculer la vitesse v du véhicule en m/s puis en km/h. L\'automobiliste est-il en excès de vitesse sur une route limitée à 90 km/h ?',
        hints: ['v = (Δf * c) / (2 * f0).', 'Multiplier par 3,6.'],
        solutionSteps: [
          'v = (4 500 * 3,00 * 10^8) / (2 * 24,125 * 10^9) = (1,35 * 10^12) / (4,825 * 10^10) ≈ 27,98 m/s.',
          'En km/h : v = 27,98 * 3,6 ≈ 100,7 km/h.',
          '100,7 km/h > 90 km/h : l\'automobiliste est en infraction.'
        ],
        finalAnswer: 'v ≈ 100,7 km/h (excès de vitesse caractérisé).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-bank-7',
    targetChapterId: 'pc-term-diffraction-interferences',
    title: 'Interférences Lumineuses à Deux Fentes d’Young avec Laser Vert',
    context: 'Un faisceau laser de longueur d\'onde λ = 532 nm éclaire deux fentes d\'Young parallèles distantes de a = 0,20 mm. L\'écran d\'observation est placé à D = 2,00 m.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🔬 Interférences & Fentes d’Young',
    questions: [
      {
        questionText: '1. Rappeler la formule de l\'interfrange i sur l\'écran en fonction de λ, D et a.',
        hints: ['i = λ * D / a.'],
        solutionSteps: [
          'L\'interfrange i est la distance séparant deux franges brillantes (ou sombres) consécutives : i = (λ * D) / a.'
        ],
        finalAnswer: 'i = (λ · D) / a.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la valeur numérique de l\'interfrange i en millimètres.',
        hints: ['λ = 532 * 10^-9 m ; D = 2,00 m ; a = 0,20 * 10^-3 m.'],
        solutionSteps: [
          'i = (532 * 10^-9 * 2,00) / (0,20 * 10^-3) = (1,064 * 10^-6) / (2,0 * 10^-4) = 5,32 * 10^-3 m = 5,32 mm.'
        ],
        finalAnswer: 'i = 5,32 mm.',
        pointsAllocated: 4
      },
      {
        questionText: '3. Comment évolue l\'interfrange si l\'on rapproche les deux fentes (diminution de a) ?',
        hints: ['i est inversement proportionnel à a.'],
        solutionSteps: [
          'Puisque i est inversement proportionnel à l\'écartement a des fentes, si a diminue, l\'interfrange i augmente (les franges s\'écartent).'
        ],
        finalAnswer: 'L\'interfrange augmente (figure plus étalée).',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-tpc-bank-8',
    targetChapterId: 'pc-term-thermo',
    title: 'Premier Principe & Bilan Thermique d’un Chauffe-Eau Solaire',
    context: 'Un capteur solaire thermique chauffe un ballon d\'eau de volume V = 200 L (masse m = 200 kg) de T1 = 15 °C à T2 = 60 °C en 4 heures. Capacité thermique de l\'eau c_eau = 4 185 J/(kg·K).',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'ecologie',
    themeLabel: '☀️ Énergie Thermique & Premier Principe',
    questions: [
      {
        questionText: '1. Calculer la variation d\'énergie interne ΔU du volume d\'eau.',
        hints: ['ΔU = m * c_eau * (T2 - T1).', 'ΔT = 60 - 15 = 45 °C.'],
        solutionSteps: [
          'ΔT = 60 - 15 = 45 K (ou 45 °C).',
          'ΔU = 200 * 4 185 * 45 = 37 665 000 J ≈ 37,7 MJ.'
        ],
        finalAnswer: 'ΔU ≈ 37,7 MJ.',
        pointsAllocated: 4
      },
      {
        questionText: '2. En déduire la puissance thermique moyenne P_th fournie par le capteur solaire en Watts.',
        hints: ['Δt = 4 h = 4 * 3 600 s = 14 400 s.', 'P = ΔU / Δt.'],
        solutionSteps: [
          'Δt = 4 * 3 600 = 14 400 s.',
          'P_th = 37 665 000 / 14 400 ≈ 2 616 W ≈ 2,62 kW.'
        ],
        finalAnswer: 'P_th ≈ 2,62 kW.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-bank-9',
    targetChapterId: 'pc-term-radioactivite',
    title: 'Loi de Décroissance Radioactive & Datation au Carbone 14 d’un Sarcophage',
    context: 'Un fragment de bois extrait d\'un tombeau égyptien présente une activité A = 3,5 Bq/g de carbone. Un morceau de bois vivant actuel de même masse présente une activité A0 = 14,0 Bq/g. La demi-vie du carbone 14 est t1/2 = 5 730 ans.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '⚰️ Archéologie & Datation Carbone 14',
    questions: [
      {
        questionText: '1. Calculer le rapport A / A0 et déterminer combien de demi-vies se sont écoulées.',
        hints: ['3,5 / 14,0 = 0,25 = 1/4 = (1/2)^2.'],
        solutionSteps: [
          'A / A0 = 3,5 / 14,0 = 0,25 = 1 / 4.',
          'Puisque 1/4 = (1/2)^2, exactement 2 demi-vies se sont écoulées.'
        ],
        finalAnswer: 'A / A0 = 0,25 ; exactement 2 demi-vies écoulées.',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire l\'âge de l\'objet archéologique.',
        hints: ['Âge t = 2 * t1/2.'],
        solutionSteps: [
          't = 2 * 5 730 ans = 11 460 ans.'
        ],
        finalAnswer: 'Âge = 11 460 ans (datation du Néolithique/fin de l\'ère glaciaire).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tpc-bank-10',
    targetChapterId: 'pc-term-transformations-forcees-electrolyse',
    title: 'Électrolyse de l’Eau & Production d’Hydrogène Vert',
    context: 'Un électrolyseur industriel alimenté par des éoliennes fonctionne sous un courant I = 500 A pendant une durée Δt = 2 heures (7 200 s) pour produire du dihydrogène H2 : 2 H+ + 2 e- -> H2. Données : F = 96 500 C/mol, Vm = 24,0 L/mol.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'ecologie',
    themeLabel: '🌱 Hydrogène Vert & Loi de Faraday',
    questions: [
      {
        questionText: '1. Calculer la charge électrique totale Q traversant l\'électrolyseur puis la quantité d\'électrons échangés n(e-).',
        hints: ['Q = I * Δt.', 'n(e-) = Q / F.'],
        solutionSteps: [
          'Q = 500 A * 7 200 s = 3 600 000 C = 3,60 * 10^6 C.',
          'n(e-) = (3,60 * 10^6) / 96 500 ≈ 37,31 mol d\'électrons.'
        ],
        finalAnswer: 'Q = 3,60 · 10^6 C et n(e-) ≈ 37,3 mol.',
        pointsAllocated: 4
      },
      {
        questionText: '2. En utilisant la stœchiométrie (2 e- pour 1 H2), calculer le volume de gaz H2 pur produit.',
        hints: ['n(H2) = n(e-) / 2.', 'V = n * Vm.'],
        solutionSteps: [
          'n(H2) = 37,31 / 2 = 18,65 mol.',
          'V(H2) = 18,65 * 24,0 ≈ 447,7 L.'
        ],
        finalAnswer: 'V(H2) ≈ 448 Litres de dihydrogène.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-bank-11',
    targetChapterId: 'pc-term-optique',
    title: 'Lunette Astronomique & Grossissement de Jupiter',
    context: 'Une lunette afocale utilise un objectif convergent de distance focale f\'1 = 1 000 mm et un oculaire de distance focale f\'2 = 25 mm.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'space',
    themeLabel: '🪐 Astronomie & Lunette Afocale',
    questions: [
      {
        questionText: '1. Que signifie le terme "afocale" pour une lunette astronomique ?',
        hints: ['Un objet à l\'infini donne une image définitive à l\'infini pour un œil sans fatigue.'],
        solutionSteps: [
          'Un système optique afocal donne d\'un objet situé à l\'infini une image définitive également située à l\'infini, ce qui permet à l\'observateur d\'accommoder sans fatigue oculaire (le foyer image de l\'objectif F\'1 est confondu avec le foyer objet de l\'oculaire F2).'
        ],
        finalAnswer: 'Foyer image de l\'objectif confondu avec le foyer objet de l\'oculaire (F\'1 = F2).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer le grossissement angulaire G = f\'1 / f\'2 de cette lunette.',
        hints: ['G = 1 000 / 25.'],
        solutionSteps: [
          'G = 1 000 mm / 25 mm = 40.'
        ],
        finalAnswer: 'Grossissement G = 40 (Jupiter apparaît 40 fois plus gros sous l\'angle visuel).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-bank-12',
    targetChapterId: 'pc-term-piles-electrochimie',
    title: 'Pile Daniell : Capacité Électrique & Usure du Zinc',
    context: 'Une pile Daniell Zn(s) | Zn2+ || Cu2+ | Cu(s) débite un courant constant de 50 mA jusqu\'à disparition complète de son anode en zinc de masse initiale m0 = 6,54 g. M(Zn) = 65,4 g/mol, F = 96 500 C/mol.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'tech',
    themeLabel: '🔋 Pile Daniell & Durée de Vie',
    questions: [
      {
        questionText: '1. Écrire la réaction d\'oxydation à l\'anode et calculer la quantité initiale de zinc n(Zn).',
        hints: ['Zn (s) -> Zn2+ + 2 e-.', 'n = m / M.'],
        solutionSteps: [
          'Anode : Zn (s) -> Zn2+ + 2 e-.',
          'n(Zn) = 6,54 / 65,4 = 0,100 mol.'
        ],
        finalAnswer: 'Zn -> Zn2+ + 2 e- et n(Zn) = 0,100 mol.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la quantité d\'électrons n(e-) échangée, la capacité électrique Q_max en Coulombs et la durée de fonctionnement Δt sous 50 mA.',
        hints: ['n(e-) = 2 * n(Zn).', 'Q = n(e-) * F.', 'Δt = Q / I.'],
        solutionSteps: [
          'n(e-) = 2 * 0,100 = 0,200 mol.',
          'Q_max = 0,200 * 96 500 = 19 300 C.',
          'I = 50 mA = 0,050 A.',
          'Δt = 19 300 / 0,050 = 386 000 s ≈ 107,2 heures (environ 4 jours et demi).'
        ],
        finalAnswer: 'Q_max = 19 300 C et durée de vie Δt ≈ 107 heures.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tpc-bank-13',
    targetChapterId: 'pc-term-mecanique',
    title: 'Mouvement dans un Champ Électrique Uniforme & Tube Cathodique',
    context: 'Un électron (masse m = 9,11 * 10^-31 kg, charge q = -e = -1,60 * 10^-19 C) pénètre à la vitesse vx = 2,0 * 10^7 m/s entre deux plaques distantes de d = 2,0 cm soumises à une tension U = 200 V (champ vertical E = U/d).',
    difficulty: 'Type Bac',
    points: 9,
    themeTag: 'tech',
    themeLabel: '⚡ Champ Électrique & Accélérateur',
    questions: [
      {
        questionText: '1. Calculer la valeur du champ électrique E entre les plaques en V/m.',
        hints: ['E = U / d.', 'Convertir d en mètres : 2,0 cm = 0,020 m.'],
        solutionSteps: [
          'E = 200 V / 0,020 m = 10 000 V/m.'
        ],
        finalAnswer: 'E = 10 000 V/m (ou N/C).',
        pointsAllocated: 3
      },
      {
        questionText: '2. En appliquant la 2e loi de Newton (F = q E = m a), calculer l\'accélération ay subie par l\'électron.',
        hints: ['ay = e * E / m.'],
        solutionSteps: [
          'ay = (1,60 * 10^-19 * 10 000) / (9,11 * 10^-31) = (1,60 * 10^-15) / (9,11 * 10^-31) ≈ 1,76 * 10^15 m/s^2.'
        ],
        finalAnswer: 'ay ≈ 1,76 * 10^15 m/s^2 (déviation colossale due à la masse infime de l\'électron).',
        pointsAllocated: 6
      }
    ]
  },
  {
    id: 'ex-tpc-bank-14',
    targetChapterId: 'pc-term-cinetique-chimique',
    title: 'Facteurs Cinétiques : Température & Catalyseurs',
    context: 'On étudie la réaction entre les ions thiosulfate et l\'acide chlorhydrique formant un précipité jaune de soufre qui opacifie la solution.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🧪 Cinétique & Chocs Efficaces',
    questions: [
      {
        questionText: '1. Comment la hausse de température accélère-t-elle la vitesse d\'une réaction au niveau microscopique ?',
        hints: ['Théorie des collisions : énergie cinétique moyenne des molécules et fréquence des chocs efficaces.'],
        solutionSteps: [
          'Une augmentation de température augmente l\'agitation thermique et l\'énergie cinétique moyenne des molécules réactives.',
          'La proportion de chocs possédant une énergie cinétique supérieure à l\'énergie d\'activation (chocs efficaces) augmente de façon exponentielle, ce qui accélère considérablement la transformation.'
        ],
        finalAnswer: 'Augmentation de l\'agitation thermique et de la fréquence des chocs efficaces.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Citer les trois grandes familles de catalyseurs (homogène, hétérogène, enzymatique).',
        hints: ['Même phase, phase différente, biologique.'],
        solutionSteps: [
          '1. Catalyse homogène : le catalyseur et les réactifs sont dans la même phase (ex : liquide-liquide).',
          '2. Catalyse hétérogène : le catalyseur est dans une phase distincte (ex : solide pour des réactifs gazeux dans un pot d\'échappement catalytique).',
          '3. Catalyse enzymatique : le catalyseur est une macromolécule biologique (protéine).'
        ],
        finalAnswer: 'Catalyse homogène, hétérogène et enzymatique.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tpc-bank-15',
    targetChapterId: 'pc-term-thermo',
    title: 'Loi de Refroidissement de Newton pour un Café Brûlant',
    context: 'Un café servi à 85 °C dans une salle à T_amb = 20 °C refroidit selon dT/dt = -r (T - T_amb) avec r = 0,04 min^-1.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '☕ Loi de Newton & Refroidissement',
    questions: [
      {
        questionText: '1. Résoudre cette équation différentielle pour donner l\'expression analytique de T(t) en fonction du temps t.',
        hints: ['T(t) = T_amb + (T0 - T_amb) * e^(-rt).'],
        solutionSteps: [
          'T(t) = 20 + (85 - 20) * e^(-0,04t) = 20 + 65 * e^(-0,04t).'
        ],
        finalAnswer: 'T(t) = 20 + 65 · e^(-0,04t).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Au bout de combien de minutes le café sera-t-il buvable à 50 °C ?',
        hints: ['20 + 65 e^(-0,04t) = 50 <=> 65 e^(-0,04t) = 30.', 'Prendre le logarithme népérien.'],
        solutionSteps: [
          'e^(-0,04t) = 30 / 65 ≈ 0,4615.',
          '-0,04t = ln(0,4615) ≈ -0,7732.',
          't = 0,7732 / 0,04 ≈ 19,3 minutes.'
        ],
        finalAnswer: 't ≈ 19,3 minutes (environ 19 min 20 s).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tpc-bank-16',
    targetChapterId: 'pc-term-diffraction-interferences',
    title: 'Diffraction de la Lumière par un Cheveu & Mesure de son Épaisseur',
    context: 'Un faisceau laser de longueur d\'onde λ = 632,8 nm éclaire un cheveu calibré de diamètre a. La tache centrale de diffraction observée sur un écran à D = 1,50 m a une largeur L = 2,5 cm.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'cinema',
    themeLabel: '🕵️ Police Scientifique & Diffraction',
    questions: [
      {
        questionText: '1. Rappeler l\'écart angulaire de diffraction θ = λ / a et la relation géométrique tan θ ≈ θ = (L / 2) / D.',
        hints: ['L = 2 λ D / a.'],
        solutionSteps: [
          'Pour les petits angles : θ = λ / a et tan θ ≈ θ = L / (2D).',
          'En égalant les deux expressions : L / (2D) = λ / a <=> a = 2 λ D / L.'
        ],
        finalAnswer: 'a = (2 λ · D) / L.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer le diamètre a du cheveu en micromètres (µm).',
        hints: ['Convertir L en mètres : 2,5 cm = 0,025 m.', 'D = 1,50 m, λ = 632,8 * 10^-9 m.'],
        solutionSteps: [
          'a = (2 * 632,8 * 10^-9 * 1,50) / 0,025 = (1,8984 * 10^-6) / 0,025 = 75,9 * 10^-6 m = 76 µm.'
        ],
        finalAnswer: 'a ≈ 76 µm (épaisseur typique d\'un cheveu humain).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tpc-bank-17',
    targetChapterId: 'pc-term-titrage',
    title: 'Choix de l’Indicateur Coloré lors d’un Titrage Acido-Basique',
    context: 'Pour réaliser un titrage colorimétrique dont le pH à l\'équivalence vaut pH_E = 8,8, le chimiste dispose d\'hélianthine (zone de virage 3,1 - 4,4), de rouge de méthyle (4,2 - 6,2) et de phénolphtaléine (8,2 - 10,0).',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🧪 Indicateur Coloré & Zone de Virage',
    questions: [
      {
        questionText: '1. Quel critère fondamental dicte le choix du bon indicateur coloré pour un titrage ?',
        hints: ['La zone de virage de l\'indicateur coloré doit englober le pH à l\'équivalence.'],
        solutionSteps: [
          'Un indicateur coloré acido-basique convient pour un titrage si et seulement si sa zone de virage contient la valeur du pH à l\'équivalence pH_E.'
        ],
        finalAnswer: 'La zone de virage doit inclure le pH à l\'équivalence.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Quel indicateur parmi les trois doit être sélectionné ici ?',
        hints: ['Comparer 8,8 avec [8,2 - 10,0].'],
        solutionSteps: [
          'Le pH à l\'équivalence est 8,8. La phénolphtaléine vire entre 8,2 et 10,0, intervalle qui englobe parfaitement 8,8.',
          'Elle passera de l\'incolore au rose fuchsia à la goutte près.'
        ],
        finalAnswer: 'La phénolphtaléine.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tpc-bank-18',
    targetChapterId: 'pc-term-circuit-rc',
    title: 'Décharge du Condensateur & Pacemaker Cardiaque',
    context: 'Un stimulateur cardiaque (pacemaker) utilise un condensateur C = 10 µF qui se décharge dans le muscle cardiaque de résistance équivalente R = 500 Ω pour délivrer une impulsion électrique rythmée.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '💓 Cardiologie & Décharge Rapide',
    questions: [
      {
        questionText: '1. Calculer la constante de temps de décharge τ.',
        hints: ['τ = R * C.'],
        solutionSteps: [
          'τ = 500 * (10 * 10^-6) = 5,0 * 10^-3 s = 5,0 ms.'
        ],
        finalAnswer: 'τ = 5,0 millisecondes.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi une valeur de τ aussi courte est-elle indispensable pour un pacemaker ?',
        hints: ['Nécessité de délivrer une impulsion brève et puissante pour stimuler la contraction ventriculaire.'],
        solutionSteps: [
          'Une décharge ultrarapide en quelques millisecondes permet de concentrer l\'énergie sous forme d\'une impulsion brève reproduisant fidèlement le potentiel d\'action cardiaque sans brûler les tissus environnants.'
        ],
        finalAnswer: 'Délivrance d\'une impulsion électrique brève et efficace stimulant la contraction sans lésion.',
        pointsAllocated: 3
      }
    ]
  }
];
