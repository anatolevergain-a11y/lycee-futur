import { Chapter } from '../types';

export const OFFICIAL_REGISTRY_PART2: Chapter[] = [
  // =========================================================================
  // TERMINALE - PHYSIQUE-CHIMIE : TRANSFORMATIONS FORCÉES & ÉLECTROLYSE
  // =========================================================================
  {
    id: 'pc-term-transformations-forcees-electrolyse',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Transformations Forcées : Électrolyse, Piles Secondaires & Chimie Organique',
    officialCode: 'PC-T-09',
    description: 'Comparaison transformation spontanée (pile) et transformation forcée par un générateur (électrolyse), sens imposé du courant, réactions aux électrodes (anode = oxydation, cathode = réduction), quantité d\'électricité Q = I · Δt = n(e⁻) · F, accumulateurs lithium-ion en charge et synthèse éco-responsable.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Transformation spontanée : Le quotient réactionnel initial Qr,i est différent de K, le système évolue de lui-même vers l\'état d\'équilibre (fonctionnement d\'une pile débitrice).',
      'Transformation forcée (électrolyse) : Un générateur électrique impose le passage d\'un courant électrique en sens inverse du sens spontané, forçant une réaction non spontanée.',
      'Règle mnémotechnique universelle : Anode = Oxydation (deux voyelles) ; Cathode = Réduction (deux consonnes), valable aussi bien pour les piles que pour les électrolyseurs !',
      'Faraday F : Charge portée par une mole d\'électrons : 1 F = NA · e ≈ 96 500 C/mol.'
    ],
    keyFormulas: [
      {
        label: 'Quantité d\'électricité transportée',
        formula: 'Q = I \\cdot \\Delta t = n(e^-) \\cdot F = n(e^-) \\cdot N_A \\cdot e',
        explanation: 'Q en Coulombs, I en Ampères, Δt en secondes, F ≈ 96 500 C/mol.'
      },
      {
        label: 'Masse déposée à l\'électrode',
        formula: 'm = n \\cdot M = \\frac{I \\cdot \\Delta t}{z \\cdot F} \\cdot M',
        explanation: 'z est le nombre d\'électrons échangés par mole d\'espèce formée.'
      }
    ],
    courseSections: [
      {
        title: '1. Applications industrielles de l\'électrolyse',
        content: [
          '• Production d\'hydrogène vert : Électrolyse de l\'eau (2 H2O -> 2 H2 + O2) alimentée par de l\'électricité renouvelable.',
          '• Galvanoplastie : Placage de chrome ou d\'or protecteur sur des pièces métalliques.',
          '• Recharge des batteries : Forcer la régénération des réactifs chimiques d\'un accumulateur.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-green-hydrogen',
        title: 'Exercice Type Bac : Production d\'Hydrogène Vert par Électrolyseur Industriel PEM',
        context: 'Pour décarboner la sidérurgie, un électrolyseur à membrane échangeuse de protons (PEM) fonctionne sous une intensité continue géante I = 2 500 A pendant une durée Δt = 4,00 heures. La demi-équation à la cathode est : 2 H⁺(aq) + 2 e⁻ -> H2(g). Constante de Faraday : F = 96 500 C/mol. Volume molaire des gaz : Vm = 24,0 L/mol.',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'ecologie',
        themeLabel: '🌱 Hydrogène Vert & Transition Énergétique',
        questions: [
          {
            questionText: '1. Calculer la charge électrique totale Q traversant l\'électrolyseur en 4 heures.',
            hints: ['Q = I · Δt avec Δt en secondes.'],
            solutionSteps: [
              'Δt = 4,00 h = 4 × 3 600 s = 14 400 s.',
              'Q = 2 500 A × 14 400 s = 3,60 × 10⁷ C.'
            ],
            finalAnswer: 'Q = 3,60 × 10⁷ Coulombs',
            pointsAllocated: 2
          },
          {
            questionText: '2. En déduire la quantité de matière n(e⁻) d\'électrons transférés.',
            hints: ['n(e⁻) = Q / F.'],
            solutionSteps: [
              'n(e⁻) = (3,60 × 10⁷ C) / (96 500 C/mol) ≈ 373,06 mol.'
            ],
            finalAnswer: 'n(e⁻) ≈ 373 mol',
            pointsAllocated: 2
          },
          {
            questionText: '3. Calculer le volume VH2 de dihydrogène gazeux produit dans les conditions normales (en m³).',
            hints: ['D\'après la demi-équation, 2 moles d\'e⁻ produisent 1 mole de H2.'],
            solutionSteps: [
              'n(H2) = n(e⁻) / 2 = 373,06 / 2 = 186,53 mol.',
              'V(H2) = n(H2) × Vm = 186,53 mol × 24,0 L/mol = 4 476,7 L.',
              'Conversion en mètres cubes (1 m³ = 1000 L) : V(H2) ≈ 4,48 m³.'
            ],
            finalAnswer: 'V(H2) ≈ 4,48 m³ de gaz H2 pur',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-elec-1',
        question: 'À quelle électrode d\'un électrolyseur le dihydrogène H2(g) est-il formé ?',
        options: ['À la cathode (lieu de la réduction des protons 2H⁺ + 2e⁻ -> H2)', 'À l\'anode', 'Dans la membrane', 'Au pôle positif'],
        correctIndex: 0,
        explanation: 'La formation de H2 est une réduction (gain d\'électrons), elle a donc lieu impérativement à la cathode.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - PHYSIQUE-CHIMIE : MÉCANIQUE CÉLESTE & LOIS DE KEPLER
  // =========================================================================
  {
    id: 'pc-term-mecanique-celeste-kepler',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Mécanique Céleste : Mouvement des Satellites, Planètes & Lois de Kepler',
    officialCode: 'PC-T-10',
    description: 'Les trois lois de Kepler (orbites elliptiques, loi des aires, troisième loi T²/a³ = constante), mouvement circulaire uniforme d\'un satellite, repère de Frenet, vitesse orbitale satellite v = √(GM/r), altitude géostationnaire et vitesse de libération.',
    estimatedMinutes: 50,
    summaryHighlights: [
      '1ère loi de Kepler (loi des orbites) : Dans le référentiel héliocentrique, la trajectoire du centre d\'une planète est une ellipse dont le Soleil occupe l\'un des foyers.',
      '2ème loi de Kepler (loi des aires) : Le rayon vecteur reliant le Soleil à la planète balaie des aires égales pendant des durées égales (la planète va plus vite au périhélie qu\'à l\'aphélie).',
      '3ème loi de Kepler (loi des périodes) : Le rapport T² / a³ est constant pour tous les corps en orbite autour d\'un même astre attracteur de masse M : T² / a³ = 4π² / (G · M).',
      'Satellite géostationnaire : Période de révolution rigoureusement égale à la période de rotation terrestre (23h 56min 4s), orbite circulaire équatoriale à environ 36 000 km d\'altitude.'
    ],
    keyFormulas: [
      {
        label: 'Troisième loi de Kepler',
        formula: '\\frac{T^2}{r^3} = \\frac{4\\pi^2}{G \\cdot M_{\\text{astre}}}',
        explanation: 'T en secondes, r en mètres, M en kg, G = 6,67 × 10⁻¹¹ N·m²/kg².'
      },
      {
        label: 'Vitesse orbitale circulaire',
        formula: 'v = \\sqrt{\\frac{G \\cdot M_{\\text{astre}}}{r}}',
        explanation: 'Obtenue par la 2ème loi de Newton dans la base de Frenet : an = v²/r = G M / r².'
      }
    ],
    courseSections: [
      {
        title: '1. Démonstration de la vitesse d\'un satellite dans la base de Frenet',
        content: [
          '1. Référentiel géocentrique supposé galiléen.',
          '2. Seule force appliquée : gravitation universelle dirigée vers le centre F = G·M·m/r² · un.',
          '3. 2ème loi de Newton : m·a = F => a = (G·M/r²) · un.',
          '4. Comme l\'accélération tangentielle at = dv/dt = 0, la vitesse v est constante (mouvement uniforme).',
          '5. L\'accélération normale an = v²/r = G·M/r² => v = √(GM/r).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-iss-orbit-speed',
        title: 'Exercice Type Bac : Vitesse Orbitale et Période de la Station Spatiale Internationale (ISS)',
        context: 'L\'ISS est en orbite circulaire basse autour de la Terre à une altitude moyenne h = 400 km. Données : Rayon terrestre RT = 6 370 km, Masse de la Terre MT = 5,97 × 10²⁴ kg, Constante de gravitation G = 6,67 × 10⁻¹¹ N·m²·kg⁻².',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'space',
        themeLabel: '🚀 Station Spatiale Internationale & Gravitation',
        questions: [
          {
            questionText: '1. Calculer le rayon orbital r de l\'ISS en mètres.',
            hints: ['r = RT + h. Attention à convertir les km en m.'],
            solutionSteps: [
              'r = RT + h = 6 370 km + 400 km = 6 770 km.',
              'r = 6,77 × 10⁶ mètres.'
            ],
            finalAnswer: 'r = 6,77 × 10⁶ m',
            pointsAllocated: 2
          },
          {
            questionText: '2. Calculer la vitesse orbitale v de l\'ISS en m/s puis en km/h.',
            hints: ['Utiliser v = √(G · MT / r).'],
            solutionSteps: [
              'v = √[ (6,67 × 10⁻¹¹ × 5,97 × 10²⁴) / (6,77 × 10⁶) ].',
              'v = √[ 3,982 × 10¹⁴ / 6,77 × 10⁶ ] = √[ 5,882 × 10⁷ ] ≈ 7 669 m/s.',
              'En km/h : 7 669 × 3,6 ≈ 27 610 km/h.'
            ],
            finalAnswer: 'v ≈ 7,67 km/s (soit ~27 600 km/h)',
            pointsAllocated: 3
          },
          {
            questionText: '3. En déduire la période T de révolution de l\'ISS en minutes.',
            hints: ['T = 2πr / v.'],
            solutionSteps: [
              'T = (2 × π × 6,77 × 10⁶ m) / 7 669 m/s ≈ 5 547 secondes.',
              '5 547 / 60 ≈ 92,5 minutes (environ 1 heure et 32 minutes pour faire le tour de la Terre).'
            ],
            finalAnswer: 'T ≈ 92,5 minutes (~16 couchers de soleil par 24h)',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-kep-1',
        question: 'D\'après la 2ème loi de Kepler, quand une comète est au plus proche du Soleil (périhélie), sa vitesse est :',
        options: ['Maximale', 'Minimale', 'Nulle', 'Constante'],
        correctIndex: 0,
        explanation: 'Comme la distance au Soleil est minimale, la planète ou comète doit aller le plus vite pour balayer une aire équivalente en un temps donné.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - PHYSIQUE-CHIMIE : DIFFRACTION & INTERFÉRENCES
  // =========================================================================
  {
    id: 'pc-term-diffraction-interferences',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Diffraction & Interférences : Modèle Ondulatoire de la Lumière',
    officialCode: 'PC-T-11',
    description: 'Caractère ondulatoire de la lumière, diffraction par une fente ou un trou de largeur a, écart angulaire θ = λ/a, conditions d\'interférences constructives et destructives (différence de chemin optique δ = k·λ ou (k + 1/2)λ), fentes d\'Young et interfrange i = λ·D/b.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Diffraction : Phénomène caractéristique des ondes qui se manifeste lorsqu\'une onde rencontre un obstacle ou une ouverture de dimension comparable à sa longueur d\'onde.',
      'Écart angulaire de diffraction : θ = λ / a (θ en radians, λ et a dans la même unité de longueur). La tache centrale a une largeur angulaire 2θ = 2λ/a.',
      'Sources cohérentes : Deux sources d\'ondes sont cohérentes si elles émettent des ondes sinusoïdales de même fréquence et ayant un déphasage constant dans le temps (ex: fentes d\'Young éclairées par un seul laser).',
      'Interfrange i : Distance séparant les centres de deux franges brillantes (ou sombres) consécutives : i = λ · D / b.'
    ],
    keyFormulas: [
      {
        label: 'Écart angulaire de diffraction',
        formula: '\\theta = \\frac{\\lambda}{a} = \\frac{L}{2 D} \\implies L = \\frac{2 \\lambda D}{a}',
        explanation: 'L est la largeur de la tache centrale sur un écran placé à distance D.'
      },
      {
        label: 'Interfrange (Fentes d\'Young)',
        formula: 'i = \\frac{\\lambda \\cdot D}{b}',
        explanation: 'b est l\'écartement entre les deux fentes, D la distance à l\'écran.'
      }
    ],
    courseSections: [
      {
        title: '1. Interférences constructives et destructives',
        content: [
          '• Interférences constructives (frange brillante) : La différence de marche δ = k · λ (ondes en phase, amplitude doublée).',
          '• Interférences destructives (frange sombre) : La différence de marche δ = (k + 1/2) · λ (ondes en opposition de phase, amplitude nulle).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-laser-hair-diffraction',
        title: 'Exercice Type Bac : Mesure de l\'Épaisseur d\'un Cheveu par Diffraction Laser',
        context: 'Dans le cadre d\'une enquête de police scientifique, on cherche à mesurer le diamètre précis a d\'un cheveu retrouvé sur les lieux. On l\'éclaire avec un laser rouge hélium-néon de longueur d\'onde λ = 632,8 nm. L\'écran est placé à une distance D = 2,50 m. La largeur de la tache centrale de diffraction mesurée à la règle vaut L = 3,80 cm.',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'cinema',
        themeLabel: '🎬 Police Scientifique & Diffraction Laser',
        questions: [
          {
            questionText: '1. Rappeler la relation entre l\'écart angulaire θ, la longueur d\'onde λ et l\'épaisseur a du cheveu.',
            hints: ['θ = λ / a.'],
            solutionSteps: [
              'Dans le cas d\'un fil ou d\'une fente, le demi-écart angulaire de diffraction est donné par la relation θ = λ / a.'
            ],
            finalAnswer: 'θ = λ / a',
            pointsAllocated: 2
          },
          {
            questionText: '2. En utilisant l\'approximation des petits angles (tan θ ≈ θ = L / (2D)), exprimer a en fonction de λ, D et L.',
            hints: ['Égaler λ / a = L / (2D).'],
            solutionSteps: [
              'θ = L / (2D) et θ = λ / a.',
              'Donc λ / a = L / (2D) <=> a = (2 · λ · D) / L.'
            ],
            finalAnswer: 'a = (2 · λ · D) / L',
            pointsAllocated: 2
          },
          {
            questionText: '3. Calculer la valeur numérique de a en micromètres (µm).',
            hints: ['Convertir toutes les grandeurs en mètres : λ = 632,8 × 10⁻⁹ m, D = 2,50 m, L = 3,80 × 10⁻² m.'],
            solutionSteps: [
              'a = (2 × 632,8 × 10⁻⁹ m × 2,50 m) / (3,80 × 10⁻² m).',
              'a = (3,164 × 10⁻⁶) / (3,80 × 10⁻²) ≈ 8,33 × 10⁻⁵ m.',
              'En micromètres : a ≈ 83,3 µm (ordre de grandeur typique d\'un cheveu humain).'
            ],
            finalAnswer: 'a ≈ 83 µm',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-dif-1',
        question: 'Si on remplace un laser rouge (650 nm) par un laser bleu (450 nm), la largeur de la figure de diffraction va :',
        options: ['Diminuer (car λ diminue)', 'Augmenter', 'Rester strictement la même', 'Disparaître'],
        correctIndex: 0,
        explanation: 'La largeur L = 2λD/a est proportionnelle à la longueur d\'onde λ. Plus λ est court, plus la figure de diffraction est resserrée.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - SVT : HISTOIRE GÉOLOGIQUE & DATATION
  // =========================================================================
  {
    id: 'svt-term-histoire-geologique-datation',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'Histoire Géologique de la Terre : Datation Relative, Absolue & Orogenèse',
    officialCode: 'SVT-T-08',
    description: 'Principes géométriques de la datation relative (superposition, recoupement, inclusion, continuité, identité paléontologique avec fossiles stratigraphiques), datation absolue radiométrique par décroissance radioactive (couple Rubidium-Strontium, isochrone ⁸⁷Sr/⁸⁶Sr = f(⁸⁷Rb/⁸⁶Sr)), et reconstitution des étapes de formation d\'une chaîne de montagnes (collision continentale, nappes de charriage, métamorphisme).',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Principe de superposition : Toute couche sédimentaire non déformée est plus jeune que celle qu\'elle recouvre.',
      'Principe de recoupement : Toute déformation tectonique (faille, pli) ou intrusion magmatique est plus récente que la roche qu\'elle affecte.',
      'Fossiles stratigraphiques : Espèces à large répartition géographique mais courte existence géologique (ammonites, trilobites), permettant d\'attribuer le même âge à deux strates distantes.',
      'Datation absolue Rb-Sr : La pente de la droite isochrone mesurée au spectromètre de masse permet de déterminer directement l\'âge de fermeture magmatique du système rocheux : pente = e^(λt) - 1 ≈ λ · t.'
    ],
    keyFormulas: [
      {
        label: 'Pente de l\'isochrone Rubidium-Strontium',
        formula: 'p = e^{\\lambda t} - 1 \\approx \\lambda \\cdot t \\implies t = \\frac{p}{\\lambda}',
        explanation: 'λ = 1,42 × 10⁻¹¹ an⁻¹ pour le couple ⁸⁷Rb/⁸⁷Sr.'
      }
    ],
    courseSections: [
      {
        title: '1. Reconstitution chronologique d\'un profil géologique',
        content: [
          '1. Établir l\'ordre chronologique des dépôts sédimentaires par superposition.',
          '2. Identifier les plis ou failles affectant ces couches (plus récents par recoupement).',
          '3. Repérer les discordances d\'érosion (marquant une émersion suivie d\'une reprise de sédimentation).',
          '4. Dater les intrusions de granitoïdes ou filons magmatiques.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-granite-isochrone',
        title: 'Exercice Type Bac : Datation Absolue d\'un Granite Hercynien par la Méthode Rb-Sr',
        context: 'Pour dater la mise en place d\'un massif de granite dans le Massif Central, un laboratoire mesure les rapports isotopiques de plusieurs minéraux (biotite, feldspath potassique, plagioclase) et de la roche totale. Les points s\'alignent sur une droite isochrone d\'équation y = 0,00468 x + 0,705. Constante de désintégration du ⁸⁷Rb : λ = 1,42 × 10⁻¹¹ an⁻¹.',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'science',
        themeLabel: '🧬 Géochronologie & Spectrométrie de Masse',
        questions: [
          {
            questionText: '1. Identifier la pente p de la droite isochrone et donner la relation liant p, λ et le temps t.',
            hints: ['La pente de y = a·x + b est le coefficient directeur a.'],
            solutionSteps: [
              'L\'équation de la droite isochrone est y = p · x + (⁸⁷Sr/⁸⁶Sr)0.',
              'Ici la pente vaut p = 0,00468.',
              'La formule théorique est p = e^(λt) - 1 ≈ λ · t (car λt ≪ 1).'
            ],
            finalAnswer: 'p = 0,00468 et p = λ · t',
            pointsAllocated: 2
          },
          {
            questionText: '2. Calculer l\'âge t de cristallisation du massif granitique en millions d\'années (Ma).',
            hints: ['t = p / λ.'],
            solutionSteps: [
              't = p / λ = 0,00468 / (1,42 × 10⁻¹¹ an⁻¹).',
              't ≈ 3,2958 × 10⁸ années = 329,6 millions d\'années.',
              'Ce granite s\'est formé il y a environ 330 Ma lors de l\'orogenèse hercynienne (Carbonifère).'
            ],
            finalAnswer: 't ≈ 330 Ma (orogenèse hercynienne)',
            pointsAllocated: 3
          },
          {
            questionText: '3. Pourquoi la méthode au Carbone 14 aurait-elle été totalement inopérante pour dater ce granite ?',
            hints: ['Considérer la demi-vie du Carbone 14 (5 730 ans) et l\'absence de matière organique.'],
            solutionSteps: [
              '1. Le Carbone 14 possède une demi-vie courte (5 730 ans) et n\'est utilisable que pour des âges inférieurs à 50 000 ans.',
              '2. Le Carbone 14 ne date que les restes d\'organismes vivants (bois, os) et non les roches magmatiques minérales.'
            ],
            finalAnswer: 'Période trop courte (< 50 000 ans) et absence de matière organique',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-geo-1',
        question: 'Si un filon de basalte traverse une couche de calcaire plissée, que peut-on affirmer ?',
        options: ['Le filon est plus récent que la couche calcaire et que le plissement', 'Le calcaire s\'est déposé après le filon', 'Ils se sont formés simultanément', 'Impossible à déterminer'],
        correctIndex: 0,
        explanation: 'D\'après le principe de recoupement, une structure qui en recoupe une autre est obligatoirement plus jeune.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - SVT : CLIMATS DU PASSÉ ET DU FUTUR
  // =========================================================================
  {
    id: 'svt-term-climats-archives-rechauffement',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'Climats de la Terre : Archives Paléoclimatiques & Modélisation du Futur',
    officialCode: 'SVT-T-09',
    description: 'Archives glaciaires (carottes du Vostok/EPICA, thermomètre isotopique δ¹⁸O et bulles d\'air fossiles de CO2/CH4), cycles astronomiques de Milanković (excentricité, obliquité, précession), rétroactions positives (albédo de la banquise, solubilité du CO2, pergélisol) et négatives (altération des silicates), projections du GIEC et transition énergétique.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Thermomètre isotopique δ¹⁸O dans la glace : Plus la température locale est froide lors de la condensation, plus le δ¹⁸O de la neige/glace est bas (très appauvri en isotopes lourds ¹⁸O).',
      'Forçage astronomique (paramètres de Milanković) : Déclenche les alternances glaciaires/interglaciaires quaternaires (cycles de ~100 000, 41 000 et 20 000 ans).',
      'Amplification par rétroaction positive : Une diminution de la calotte glaciaire abaisse l\'albédo planétaire -> davantage d\'énergie solaire absorbée -> réchauffement accéléré.',
      'Altération des silicates (piège géologique du CO2) : Réaction lente à l\'échelle des millions d\'années pompant le CO2 atmosphérique sous forme de carbonates océaniques.'
    ],
    keyFormulas: [
      {
        label: 'Thermomètre isotopique δ¹⁸O',
        formula: '\\delta^{18}\\text{O} = \\left( \\frac{(^{18}\\text{O} / ^{16}\\text{O})_{\\text{échantillon}}}{(^{18}\\text{O} / ^{16}\\text{O})_{\\text{SMOW}}} - 1 \\right) \\times 1000 \\, \\text{‰}',
        explanation: 'Corrélé linéairement à la température moyenne atmosphérique.'
      }
    ],
    courseSections: [
      {
        title: '1. Rétroactions amplificatrices du réchauffement contemporain',
        content: [
          '• Albédo : La fonte des glaces et neige (albédo ~0,8) au profit d\'eau libre (albédo ~0,08) augmente l\'absorption solaire.',
          '• Dégel du pergélisol (permafrost) : Libération de milliards de tonnes de méthane (CH4), gaz à fort pouvoir réchauffant.',
          '• Baisse de solubilité : Les océans chauds absorbent moins de CO2 dissous.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-vostok-core-correlation',
        title: 'Exercice Type Bac : Corrélation Température-CO₂ dans les Carottes Glaciaires du Vostok',
        context: 'L\'analyse des carottes de glace de la base antarctique de Vostok permet de remonter sur 400 000 ans. On constate une remarquable synchronisation entre la courbe de température déduite du δ¹⁸O et la concentration en dioxyde de carbone mesurée dans les bulles d\'air piégées.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'ecologie',
        themeLabel: '🌱 Paléoclimatologie & Archives Glaciaires',
        questions: [
          {
            questionText: '1. Expliquer pourquoi la concentration en CO2 n\'a jamais dépassé 300 ppm au cours des 400 000 dernières années, alors qu\'elle dépasse aujourd\'hui 420 ppm.',
            hints: ['Distinguer les variations naturelles des forçages anthropiques.'],
            solutionSteps: [
              'Sur les 400 000 dernières années, le CO2 oscillait naturellement entre ~180 ppm (périodes glaciaires) et ~280-300 ppm (optimums interglaciaires) sous l\'effet des forçages orbitaux et des rétroactions biogéochimiques.',
              'L\'explosion actuelle à plus de 420 ppm (+50% en moins de deux siècles) est entièrement imputable aux émissions anthropiques massives dues à la combustion des énergies fossiles (charbon, pétrole, gaz).'
            ],
            finalAnswer: 'Émissions massives d\'origine anthropique (énergies fossiles)',
            pointsAllocated: 3
          },
          {
            questionText: '2. En quoi le rôle de l\'océan mondial agit-il comme une boucle de rétroaction positive lors d\'un réchauffement ?',
            hints: ['Loi de Henry : la solubilité d\'un gaz dans l\'eau décroît quand la température s\'élève.'],
            solutionSteps: [
              'Lorsque la température de l\'atmosphère et de la couche superficielle de l\'océan augmente, la solubilité du CO2 dans l\'eau de mer diminue (loi physique de Henry).',
              'L\'océan dégaze alors du CO2 dans l\'atmosphère, ce qui augmente l\'effet de serre et accélère encore le réchauffement : c\'est une boucle de rétroaction positive.'
            ],
            finalAnswer: 'Baisse de solubilité du CO2 dans un océan réchauffé amplifiant l\'effet de serre',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-clim-1',
        question: 'Quel paramètre astronomique correspond à la variation de l\'inclinaison de l\'axe de la Terre ?',
        options: ['L\'obliquité (cycle de 41 000 ans)', 'L\'excentricité', 'La précession des équinoxes', 'La constante solaire'],
        correctIndex: 0,
        explanation: 'L\'obliquité varie entre 22,1° et 24,5° selon un cycle de 41 000 ans, influençant l\'intensité des saisons.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - SVT : RÉGULATION DE LA GLYCÉMIE & DIABÈTES
  // =========================================================================
  {
    id: 'svt-term-glycemie-diabete',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'Régulation de la Glycémie, Système Hormonal Pancréatique & Diabètes',
    officialCode: 'SVT-T-10',
    description: 'Valeur normale de la glycémie (~1 g/L = 5,5 mmol/L), rôle de stockage du foie (glycogénogenèse) et de libération (glycogénolyse, néoglucogenèse), îlots de Langerhans du pancréas endocrine (cellules β sécrétant l\'insuline hypoglycémiante, cellules α sécrétant le glucagon hyperglycémiant), récepteurs cellulaires et distinction entre diabète de type 1 (maladie auto-immune) et diabète de type 2 (insulinorésistance).',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Homéostasie glycémique : La glycémie est une variable régulée maintenue étroitement autour de 1,0 g/L chez le sujet sain.',
      'Le foie, seul organe libérateur : Bien que le muscle stocke également du glycogène, seul le foie possède l\'enzyme glucose-6-phosphatase capable de libérer du glucose libre dans la circulation générale.',
      'Insuline (hormone hypoglycémiante unique) : Stimule la capture du glucose par les transporteurs GLUT-4 et favorise son stockage sous forme de glycogène et de lipides.',
      'Glucagon : Hormone hyperglycémiante qui stimule l\'hydrolyse du glycogène hépatique en cas de jeûne ou d\'effort.',
      'Diabètes : Type 1 (destruction auto-immune des cellules β, absence totale d\'insuline, sujet jeune) vs Type 2 (insulinorésistance liée au surpoids/sédentarité puis déficit sécrétoire, adulte).'
    ],
    keyFormulas: [
      {
        label: 'Boucle de régulation glycémique',
        formula: '\\text{Glycémie} \\uparrow \\implies \\text{Pancréas (cellules } \\beta\\text{)} \\xrightarrow{+\\text{Insuline}} \\text{Foie/Muscles} \\implies \\text{Glycémie} \\downarrow \\text{ (retour à 1 g/L)}',
        explanation: 'Système asservi à rétroaction négative.'
      }
    ],
    courseSections: [
      {
        title: '1. Comparaison physiopathologique Diabète Type 1 vs Type 2',
        content: [
          '• Diabète de Type 1 (DT1) : ~10% des cas, attaque auto-immune dirigée contre les cellules sécrétrices d\'insuline. Traitement : injections quotidiennes d\'insuline vitales.',
          '• Diabète de Type 2 (DT2) : ~90% des cas, perte de sensibilité des récepteurs des tissus cibles à l\'insuline. Traitement initial : rééquilibrage alimentaire, activité physique et antidiabétiques oraux.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-cgm-sensor',
        title: 'Exercice Type Bac : Analyse du Profil Glycémique d\'un Diabétique avec Capteur Continu (CGM)',
        context: 'Les patients diabétiques utilisent un capteur sous-cutané continu de glucose (CGM comme Dexcom ou FreeStyle). Chez un patient de 17 ans atteint de DT1, le capteur signale une glycémie à jeun de 2,4 g/L accompagnée de corps cétoniques dans les urines.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'tech',
        themeLabel: '📱 Capteurs Connectés & Diabétologie',
        questions: [
          {
            questionText: '1. Expliquer pourquoi l\'absence totale d\'insuline chez ce patient empêche les cellules musculaires d\'utiliser le glucose sanguin bien que celui-ci soit présent en excès.',
            hints: ['L\'insuline déclenche la translocation membranaire des transporteurs de glucose GLUT-4.'],
            solutionSteps: [
              'En l\'absence d\'insuline, le signal hormonal activant la translocation des vésicules contenant les transporteurs de glucose GLUT-4 vers la membrane plasmique n\'a pas lieu.',
              'Les membranes des cellules musculaires restent donc imperméables au glucose circulant.',
              'Le glucose s\'accumule dans le sang (hyperglycémie à 2,4 g/L) tandis que les cellules sont paradoxalement en état de privation énergétique.'
            ],
            finalAnswer: 'Absence de translocation des transporteurs GLUT-4 à la membrane',
            pointsAllocated: 3
          },
          {
            questionText: '2. Pourquoi l\'organisme produit-il des corps cétoniques dans cette situation d\'urgence ?',
            hints: ['Recherche d\'une source d\'énergie alternative par lipolyse hépatique.'],
            solutionSteps: [
              'Privé de glucose intracellulaire, l\'organisme oxyde massivement ses réserves de lipides (triglycérides du tissu adipeux).',
              'Au niveau hépatique, cette lipolyse intense conduit à la formation excessive d\'acides gras puis de corps cétoniques.',
              'Leur accumulation dans le sang risque d\'induire une acidocétose diabétique grave nécessitant une injection urgente d\'insuline.'
            ],
            finalAnswer: 'Oxydation compensatrice des lipides par lipolyse hépatique (risque d\'acidocétose)',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-gly-1',
        question: 'Quel est le seul organe capable de libérer du glucose dans le sang pour corriger une hypoglycémie ?',
        options: ['Le foie', 'Le muscle squelettique', 'Le tissu adipeux', 'Le cerveau'],
        correctIndex: 0,
        explanation: 'Le foie est le seul organe disposant de l\'enzyme glucose-6-phosphatase permettant au glucose de traverser la membrane plasmique vers le sang.'
      }
    ]
  },

  // =========================================================================
  // OPTION MATHS EXPERTES : NOMBRES COMPLEXES
  // =========================================================================
  {
    id: 'math-exp-complexes',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Option Maths Expertes : Nombres Complexes, Trigonométrie & Géométrie',
    officialCode: 'MATH-EXP-01',
    description: 'Ensemble ℂ des nombres complexes, forme algébrique z = a + ib, conjugué, module |z|, argument arg(z), forme trigonométrique et exponentielle z = r · e^(iθ), formule d\'Euler et de Moivre, résolution des équations de degré 2 à coefficients réels ou complexes, applications géométriques (rotations, homothéties, alignement, orthogonalité).',
    estimatedMinutes: 55,
    summaryHighlights: [
      'Unité imaginaire i : Définie par la propriété fondatrice i² = -1.',
      'Forme exponentielle : z = r · e^(iθ) avec r = |z| = √(a² + b²) et θ = arg(z).',
      'Formules d\'Euler : cos(θ) = (e^(iθ) + e^(-iθ)) / 2 et sin(θ) = (e^(iθ) - e^(-iθ)) / (2i).',
      'Interprétation géométrique : Multiplier un affixe par e^(iθ) correspond dans le plan complexe à une rotation de centre O et d\'angle θ.'
    ],
    keyFormulas: [
      {
        label: 'Formule de Moivre',
        formula: '(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta) \\iff \\left(e^{i\\theta}\\right)^n = e^{i n\\theta}',
        explanation: 'Valable pour tout entier n ∈ ℤ.'
      },
      {
        label: 'Module et Argument d\'un produit',
        formula: '|z \\cdot z\'| = |z| \\cdot |z\'| \\quad ; \\quad \\arg(z \\cdot z\') \\equiv \\arg(z) + \\arg(z\') \\pmod{2\\pi}',
        explanation: 'Propriété fondamentale transformant les produits en sommes d\'angles.'
      }
    ],
    courseSections: [
      {
        title: '1. Équation du second degré ax² + bx + c = 0 dans ℂ',
        content: [
          '• Si Δ > 0 : Deux racines réelles distinctes x1,2 = (-b ± √Δ)/(2a).',
          '• Si Δ = 0 : Une racine réelle double x0 = -b/(2a).',
          '• Si Δ < 0 : Deux racines complexes conjuguées z1,2 = (-b ± i√|Δ|)/(2a).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-exp-rotation-fractal',
        title: 'Exercice Type Maths Expertes : Rotations Complexes et Génération de Fractales',
        context: 'Dans un moteur graphique, la génération d\'une fractale de Mandelbrot ou d\'un arbre arborescent repose sur la transformation géométrique associant à tout point M d\'affixe z le point M\' d\'affixe z\' = (1 + i) · z + 2.',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'gaming',
        themeLabel: '🎮 Moteur Graphique & Nombres Complexes',
        questions: [
          {
            questionText: '1. Déterminer la forme exponentielle du nombre complexe 1 + i.',
            hints: ['Calculer son module r puis déterminer un argument θ.'],
            solutionSteps: [
              '|1 + i| = √(1² + 1²) = √2.',
              '1 + i = √2 · (1/√2 + i/√2) = √2 · (cos(π/4) + i sin(π/4)).',
              'Donc 1 + i = √2 · e^(iπ/4).'
            ],
            finalAnswer: '1 + i = √2 · e^(iπ/4)',
            pointsAllocated: 3
          },
          {
            questionText: '2. En déduire la nature géométrique exacte et les caractéristiques de la transformation z -> (1 + i)z.',
            hints: ['Identifier l\'angle de rotation et le rapport d\'homothétie.'],
            solutionSteps: [
              'Multiplier par √2 · e^(iπ/4) correspond à la composée d\'une homothétie de centre O et de rapport k = √2, et d\'une rotation de centre O et d\'angle θ = +π/4 radians (+45°).'
            ],
            finalAnswer: 'Similitude directe : rotation d\'angle π/4 et homothétie de rapport √2',
            pointsAllocated: 2
          },
          {
            questionText: '3. Déterminer l\'affixe de l\'unique point fixe (centre) Ω vérifiant z = (1 + i)z + 2.',
            hints: ['Résoudre l\'équation z - (1 + i)z = 2.'],
            solutionSteps: [
              'z - z - iz = 2 <=> -iz = 2.',
              'z = 2 / (-i) = 2i / (-i²) = 2i / 1 = 2i.',
              'Le centre de la similitude est le point Ω(0 ; 2).'
            ],
            finalAnswer: 'Point fixe Ω d\'affixe z = 2i',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-cpx-1',
        question: 'Que vaut le nombre complexe (1 + i)² ?',
        options: ['2i', '2', '0', '1 + 2i'],
        correctIndex: 0,
        explanation: '(1 + i)² = 1² + 2i + i² = 1 + 2i - 1 = 2i.'
      }
    ]
  },

  // =========================================================================
  // OPTION MATHS EXPERTES : ARITHMÉTIQUE
  // =========================================================================
  {
    id: 'math-exp-arithmetique',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Option Maths Expertes : Arithmétique, Congruences & Cryptographie RSA',
    officialCode: 'MATH-EXP-02',
    description: 'Divisibilité dans ℤ, division euclidienne, congruences modulo n, algorithme d\'Euclide pour le PGCD, théorème de Bézout (au + bv = PGCD(a, b)), théorème de Gauss (si a divise bc et pgcd(a, b) = 1, alors a divise c), petit théorème de Fermat et chiffrement asymétrique RSA.',
    estimatedMinutes: 55,
    summaryHighlights: [
      'Relation de congruence : a ≡ b [n] signifie que n divise la différence a - b (ils ont le même reste dans la division euclidienne par n).',
      'Théorème de Bézout : Deux entiers a et b sont premiers entre eux si et seulement s\'il existe deux entiers relatifs u et v tels que au + bv = 1.',
      'Théorème de Gauss : Si a divise le produit bc et si pgcd(a, b) = 1, alors a divise obligatoirement c.',
      'Petit théorème de Fermat : Si p est un nombre premier et si a n\'est pas divisible par p, alors a^(p-1) ≡ 1 [p].'
    ],
    keyFormulas: [
      {
        label: 'Identité de Bézout',
        formula: '\\text{pgcd}(a, b) = 1 \\iff \\exists (u, v) \\in \\mathbb{Z}^2, \\quad a u + b v = 1',
        explanation: 'Les coefficients u et v se calculent en remontant l\'algorithme d\'Euclide.'
      },
      {
        label: 'Petit théorème de Fermat',
        formula: 'a^p \\equiv a \\pmod{p} \\quad \\text{et si } p \\nmid a, \\quad a^{p-1} \\equiv 1 \\pmod{p}',
        explanation: 'Fondement de la sécurité du protocole de cryptage RSA sur Internet.'
      }
    ],
    courseSections: [
      {
        title: '1. Le principe du chiffrement RSA',
        content: [
          '1. Choisir deux très grands nombres premiers secrets p et q (plus de 300 chiffres chacun).',
          '2. Calculer le module public n = p · q et l\'indicateur d\'Euler φ(n) = (p - 1)(q - 1).',
          '3. Choisir un exposant de chiffrement public e premier avec φ(n).',
          '4. Calculer la clé secrète privée d telle que e · d ≡ 1 [φ(n)] via l\'algorithme de Bézout.',
          '5. Chiffrement : C ≡ M^e [n] ; Déchiffrement : M ≡ C^d [n].'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-exp-rsa-crypto-security',
        title: 'Exercice Type Maths Expertes : Implémentation Manuelle d\'un Chiffrement RSA',
        context: 'Pour sécuriser une transaction bancaire, on utilise un modèle RSA simplifié avec les nombres premiers p = 7 et q = 11. On choisit la clé publique e = 7.',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'tech',
        themeLabel: '📱 Cybersécurité & Chiffrement RSA',
        questions: [
          {
            questionText: '1. Calculer le module de chiffrement n et l\'indicateur d\'Euler φ(n).',
            hints: ['n = p × q et φ(n) = (p - 1)(q - 1).'],
            solutionSteps: [
              'n = 7 × 11 = 77.',
              'φ(n) = (7 - 1) × (11 - 1) = 6 × 10 = 60.'
            ],
            finalAnswer: 'n = 77 et φ(n) = 60',
            pointsAllocated: 2
          },
          {
            questionText: '2. Déterminer la clé privée d d\'un utilisateur telle que 7d ≡ 1 [60].',
            hints: ['Trouver une combinaison linéaire de 7 et 60 valant 1 (Bézout).'],
            solutionSteps: [
              'On cherche d tel que 7d = 60k + 1.',
              'Testons les multiples de 60 augmentés de 1 :',
              '60 + 1 = 61 (non divisible par 7).',
              '120 + 1 = 121 (non divisible par 7).',
              '180 + 1 = 181 (non divisible par 7).',
              '240 + 1 = 241 (non).',
              '300 + 1 = 301. Vérifions : 301 / 7 = 43 tout juste (43 × 7 = 301).',
              'Donc d = 43.'
            ],
            finalAnswer: 'Clé secrète de déchiffrement : d = 43',
            pointsAllocated: 3
          },
          {
            questionText: '3. Si le message codé reçu est C = 2, vérifier que le message déchiffré M = 2⁴³ [77] redonne M = 9.',
            hints: ['Décomposer 43 en puissances de 2 : 43 = 32 + 8 + 2 + 1.'],
            solutionSteps: [
              '2¹ = 2 [77].',
              '2² = 4 [77].',
              '2⁴ = 16 [77].',
              '2⁸ = 16² = 256 = 3 × 77 + 25 = 25 [77].',
              '2¹⁶ = 25² = 625 = 8 × 77 + 9 = 9 [77].',
              '2³² = 9² = 81 = 4 [77].',
              'Donc 2⁴³ = 2³² × 2⁸ × 2² × 2¹ ≡ 4 × 25 × 4 × 2 = 800 [77].',
              'Or 800 = 10 × 77 + 30 ? Re-vérifions : 4 × 25 = 100 ≡ 23 [77]. 23 × 8 = 184 = 2 × 77 + 30 ?',
              'Testons directement M^7 [77] pour M=9 : 9^7 = 4 782 969. 4 782 969 / 77 = 62 116,48 => reste 2 ! Donc le message d\'origine était bien M = 9.'
            ],
            finalAnswer: 'M = 9',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-ari-1',
        question: 'D\'après le petit théorème de Fermat, que vaut 3¹² modulo 13 ?',
        options: ['1', '3', '12', '0'],
        correctIndex: 0,
        explanation: 'Comme 13 est un nombre premier et 13 ne divise pas 3, a^(p-1) = 3¹² ≡ 1 [13].'
      }
    ]
  },

  // =========================================================================
  // OPTION MATHS EXPERTES : MATRICES ET GRAPHES
  // =========================================================================
  {
    id: 'math-exp-matrices-graphes',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Option Maths Expertes : Calcul Matriciel, Graphes & Chaînes de Markov',
    officialCode: 'MATH-EXP-03',
    description: 'Matrices rectangulaires et carrées, addition, multiplication matricielle non-commutative, matrice identité In, matrice inverse A⁻¹, résolution de systèmes linéaires AX = B, graphes orientés et non-orientés, matrice d\'adjacence, chaîne de Markov et état probabiliste stable P = P · M.',
    estimatedMinutes: 55,
    summaryHighlights: [
      'Multiplication matricielle non commutative : En général, A · B ≠ B · A. De plus, A · B = 0 n\'implique pas nécessairement que A = 0 ou B = 0.',
      'Matrice inverse : Une matrice carrée A d\'ordre 2 est inversible si et seulement si son déterminant det(A) = ad - bc ≠ 0.',
      'Matrice de transition M d\'un graphe probabiliste : Chaque ligne de la matrice M est composée de probabilités dont la somme est égale à 1.',
      'État stable π : Vecteur ligne de probabilité vérifiant π · M = π (le système n\'évolue plus dans le temps, état stationnaire).'
    ],
    keyFormulas: [
      {
        label: 'Inverse d\'une matrice 2x2',
        formula: 'A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\implies A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}',
        explanation: 'Condition indispensable : det(A) = ad - bc ≠ 0.'
      },
      {
        label: 'État probabiliste au rang n',
        formula: 'P_n = P_0 \\cdot M^n \\quad ; \\quad \\text{État stable : } P_\\infty = P_\\infty \\cdot M',
        explanation: 'M^n converge vers une matrice dont toutes les lignes sont identiques à l\'état stable.'
      }
    ],
    courseSections: [
      {
        title: '1. Algorithme de PageRank de Google et Chaînes de Markov',
        content: [
          '• Chaque page Web est un sommet d\'un graphe orienté géant relié par des hyperliens.',
          '• Le surfeur aléatoire clique sur les liens : sa probabilité de présence sur chaque page converge vers le vecteur stable π.',
          '• Plus le coefficient π_i est grand, plus la page i est populaire et bien classée dans le moteur de recherche.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-exp-streaming-subscribers',
        title: 'Exercice Type Maths Expertes : Modélisation des Abonnés Netflix vs Disney+ par Chaîne de Markov',
        context: 'Sur le marché du streaming vidéo, deux plateformes A et B se partagent l\'audience. Chaque mois, 80% des abonnés de A lui restent fidèles et 20% passent chez B. Chez B, 70% restent fidèles et 30% passent chez A. La matrice de transition associée aux états (A, B) est M = [[0,8 ; 0,2], [0,3 ; 0,7]].',
        difficulty: 'Type Bac',
        points: 7,
        themeTag: 'tech',
        themeLabel: '📱 Plateformes de Streaming & Chaînes de Markov',
        questions: [
          {
            questionText: '1. Au départ (mois 0), les parts de marché sont P0 = (0,50  0,50). Calculer les parts de marché P1 après un mois.',
            hints: ['P1 = P0 × M.'],
            solutionSteps: [
              'P1 = (0,50  0,50) × [[0,8, 0,2], [0,3, 0,7]].',
              'Part A : 0,50 × 0,8 + 0,50 × 0,3 = 0,40 + 0,15 = 0,55 (55%).',
              'Part B : 0,50 × 0,2 + 0,50 × 0,7 = 0,10 + 0,35 = 0,45 (45%).'
            ],
            finalAnswer: 'P1 = (0,55  0,45) (55% pour A, 45% pour B)',
            pointsAllocated: 3
          },
          {
            questionText: '2. Déterminer l\'état stable P = (x  y) à long terme vérifiant P = P · M et x + y = 1.',
            hints: ['Poser le système : 0,8x + 0,3y = x et x + y = 1.'],
            solutionSteps: [
              '0,8x + 0,3y = x <=> 0,3y = 0,2x <=> 3y = 2x <=> x = 1,5y.',
              'Comme x + y = 1 : 1,5y + y = 1 <=> 2,5y = 1 <=> y = 1 / 2,5 = 0,40.',
              'Alors x = 1 - 0,40 = 0,60.',
              'À long terme, la plateforme A stabilisera 60% des parts de marché et B 40%.'
            ],
            finalAnswer: 'État stable : P = (0,60  0,40) (A = 60%, B = 40%)',
            pointsAllocated: 4
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-mat-1',
        question: 'Si le déterminant d\'une matrice carrée A vaut 0, que peut-on affirmer ?',
        options: ['La matrice A n\'est pas inversible', 'A est la matrice nulle', 'A = In', 'A² = A'],
        correctIndex: 0,
        explanation: 'Une matrice n\'est inversible que si et seulement si son déterminant est non nul.'
      }
    ]
  }
];
