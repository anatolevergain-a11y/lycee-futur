import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_2NDE_SVT: BankExerciseItem[] = [
  {
    id: 'ex-2svt-bank-1',
    targetChapterId: 'svt-2nde-cellule-metabolisme',
    title: 'Respiration Cellulaire & Rendement Énergétique chez la Levure',
    context: 'En bioréacteur, des levures Saccharomyces cerevisiae sont cultivées en milieu aérobie avec du glucose radioactif. On mesure la consommation de dioxygène et le dégagement de CO2.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🔬 Métabolisme & Mitochondries',
    questions: [
      {
        questionText: '1. Écrire l\'équation globale de la respiration cellulaire à partir d\'une mole de glucose C6H12O6.',
        hints: ['Réactifs : glucose + O2 ; Produits : CO2 + H2O + ATP.'],
        solutionSteps: [
          'Équation équilibrée : C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O + énergie (environ 36-38 ATP).'
        ],
        finalAnswer: 'C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O + 36-38 ATP.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel organite cellulaire est le siège de la respiration cellulaire aérobie ?',
        hints: ['Organite à double membrane possédant des crêtes internes.'],
        solutionSteps: [
          'La mitochondrie est l\'organite spécialisé dans la production d\'ATP par respiration cellulaire.'
        ],
        finalAnswer: 'La mitochondrie.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2svt-bank-2',
    targetChapterId: 'svt-2nde-cellule-metabolisme',
    title: 'Photosynthèse & Chloroplastes chez les Végétaux Verts',
    context: 'On étudie des cellules d\'élodée au microscope optique. Exposées à la lumière, de petites vésicules accumulent de l\'amidon mis en évidence par l\'eau iodée.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🌿 Végétaux & Chlorophylle',
    questions: [
      {
        questionText: '1. Quel est l\'organite renfermant la chlorophylle et responsable de la photosynthèse ?',
        hints: ['Organite vert riche en thylakoïdes.'],
        solutionSteps: [
          'Le chloroplaste est l\'organite cellulaire végétal qui capte l\'énergie lumineuse grâce aux pigments chlorophylliens.'
        ],
        finalAnswer: 'Le chloroplaste.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Écrire l\'équation simplifiée de la photosynthèse.',
        hints: ['6 CO2 + 6 H2O + lumière -> ...'],
        solutionSteps: [
          '6 CO2 + 6 H2O + énergie lumineuse -> C6H12O6 + 6 O2.'
        ],
        finalAnswer: '6 CO2 + 6 H2O -> C6H12O6 + 6 O2.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-3',
    targetChapterId: 'svt-2nde-biodiversite',
    title: 'Sélection Naturelle : Évolution des Phalènes du Bouleau',
    context: 'Lors de la révolution industrielle en Angleterre, la suie des usines de charbon a noirci les troncs de bouleaux. On suit la fréquence des phalènes claires (typica) et sombres (carbonaria).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '🦋 Évolution & Camouflage',
    questions: [
      {
        questionText: '1. Expliquer pourquoi la fréquence de la forme sombre (carbonaria) a explosé dans les zones polluées.',
        hints: ['Pression de prédation par les oiseaux insectivores et camouflage.'],
        solutionSteps: [
          'Sur les troncs noircis par la suie, les papillons sombres étaient camouflés tandis que les papillons clairs étaient facilement repérés et dévorés par les oiseaux.',
          'Les individus sombres ont donc eu un meilleur taux de survie et se sont davantage reproduits (succès reproducteur supérieur).',
          'C\'est le mécanisme de la sélection naturelle.'
        ],
        finalAnswer: 'Avantage sélectif par camouflage face aux prédateurs sur troncs noircis.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Que s\'est-il passé lorsque des filtres à particules ont dépollué l\'air quelques décennies plus tard ?',
        hints: ['Les troncs ont retrouvé leurs lichens clairs.'],
        solutionSteps: [
          'Les lichens clairs ont recolonisé les troncs. Les formes sombres sont redevenues visibles et vulnérables.',
          'La sélection naturelle s\'est inversée en faveur des phalènes claires, dont la fréquence a de nouveau augmenté.'
        ],
        finalAnswer: 'Retour de l\'avantage aux formes claires et diminution de la fréquence des formes sombres.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-4',
    targetChapterId: 'svt-2nde-biodiversite',
    title: 'Dérive Génétique & Effet Fondateur sur une Île Isolée',
    context: 'Un petit groupe de 8 lézards colonise un atoll isolé suite à une tempête. Un allèle récessif rare dans la population source (fréquence 2%) se retrouve à 25% dans le groupe initial.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🦎 Génétique & Dérive',
    questions: [
      {
        questionText: '1. Définir le concept de dérive génétique.',
        hints: ['Variation aléatoire des fréquences alléliques dans une population de taille réduite.'],
        solutionSteps: [
          'La dérive génétique est la modification aléatoire de la fréquence des allèles d\'une génération à l\'autre, indépendamment de la sélection naturelle.',
          'Son impact est particulièrement fort et rapide dans les populations à petit effectif.'
        ],
        finalAnswer: 'Fluctuation aléatoire de la fréquence des allèles dans les petites populations.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Comment appelle-t-on ce cas particulier de dérive génétique lié à la colonisation par un échantillon réduit ?',
        hints: ['Effet f...'],
        solutionSteps: [
          'Ce phénomène est appelé l\'effet fondateur (ou goulot d\'étranglement démographique).'
        ],
        finalAnswer: 'L\'effet fondateur.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2svt-bank-5',
    targetChapterId: 'svt-2nde-agrosystemes',
    title: 'Rendement Énergétique d’une Ferme Verticale Urbaine',
    context: 'Une ferme verticale en hydroponie produit 100 kg de salades par m² et par an avec 95% d\'eau en moins par rapport à un champ traditionnel en plein air.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🌱 Ferme Verticale & Eau',
    questions: [
      {
        questionText: '1. Définir ce qu\'est un agrosystème par comparaison avec un écosystème naturel.',
        hints: ['Écosystème artificiel géré par l\'humain avec des intrants et exportations de biomasse.'],
        solutionSteps: [
          'Un agrosystème est un écosystème modifié et contrôlé par l\'être humain pour produire de la biomasse (aliments, fibres, énergie).',
          'Contrairement aux écosystèmes naturels qui fonctionnent en cycle fermé, l\'agrosystème nécessite des intrants continus (eau, engrais, énergie) pour compenser les matières exportées.'
        ],
        finalAnswer: 'Écosystème anthropisé nécessitant des intrants pour compenser les récoltes exportées.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Citer deux avantages environnementaux de la recirculation d\'eau en circuit fermé.',
        hints: ['Économie d\'eau et absence de lixiviation d\'engrais dans les nappes phréatiques.'],
        solutionSteps: [
          '1. Réduction drastique de la consommation d\'eau douce (jusqu\'à 95% d\'économie).',
          '2. Absence de ruissellement et de pollution des nappes phréatiques par les nitrates ou pesticides (zéro lessivage).'
        ],
        finalAnswer: 'Économie massive de ressource hydrique et zéro pollution des nappes souterraines.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-6',
    targetChapterId: 'svt-2nde-agrosystemes',
    title: 'Biocontrôle & Remplacement des Pesticides par des Coccinelles',
    context: 'Dans un verger bio, un producteur introduit des larves de chrysopes et de coccinelles pour lutter contre les pucerons ravageurs.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'ecologie',
    themeLabel: '🐞 Biocontrôle & Ravageurs',
    questions: [
      {
        questionText: '1. Quel nom donne-t-on à cette méthode de gestion des cultures sans intrants chimiques de synthèse ?',
        hints: ['Lutte b... ou bio...'],
        solutionSteps: [
          'Cette méthode s\'appelle la lutte biologique ou le biocontrôle.'
        ],
        finalAnswer: 'La lutte biologique (ou biocontrôle).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Expliquer l\'intérêt écologique du biocontrôle pour préserver la biodiversité.',
        hints: ['Ciblage spécifique sans tuer les insectes pollinisateurs (comme les abeilles).'],
        solutionSteps: [
          'Les prédateurs naturels ciblent spécifiquement les ravageurs sans accumuler de résidus toxiques dans la chaîne alimentaire ni empoisonner les pollinisateurs indispensables comme les abeilles.'
        ],
        finalAnswer: 'Ciblage spécifique, préservation des pollinisateurs et absence de résidus chimiques toxiques.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-7',
    targetChapterId: 'svt-2nde-effort-musculaire',
    title: 'VO2 max & Débit Cardiaque chez un Cycliste du Tour de France',
    context: 'Un cycliste professionnel a un volume d\'éjection systolique VES = 150 mL par battement et une fréquence cardiaque FC = 180 bpm lors de l\'ascension du mont Ventoux.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '🚴 Tour de France & Débit Cardiaque',
    questions: [
      {
        questionText: '1. Rappeler la formule liant le débit cardiaque Qc, la fréquence cardiaque FC et le VES.',
        hints: ['Qc = FC * VES.'],
        solutionSteps: [
          'Le débit cardiaque est le volume de sang propulsé par minute : Qc = FC * VES.'
        ],
        finalAnswer: 'Qc = FC * VES.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer le débit cardiaque Qc de ce coureur en L/min et le comparer au débit de repos (environ 5 L/min).',
        hints: ['150 mL = 0,150 L.', 'Multiplier par 180 bpm.'],
        solutionSteps: [
          'Qc = 180 * 0,150 = 27,0 L/min.',
          'Comparaison : 27 / 5 = 5,4 fois supérieur au débit cardiaque de repos.'
        ],
        finalAnswer: 'Qc = 27,0 L/min (plus de 5 fois le débit de repos !).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-2svt-bank-8',
    targetChapterId: 'svt-2nde-effort-musculaire',
    title: 'Consommation d’O2 & Dette en Oxygène en Sprint (100 m)',
    context: 'Lors d\'un 100 m couru en moins de 10 secondes, le muscle utilise principalement la voie anaérobie alactique puis lactique avant que la consommation d\'O2 n\'augmente après l\'effort.',
    difficulty: 'Moyen',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏃 Sprint & Voies Énergétiques',
    questions: [
      {
        questionText: '1. Pourquoi la consommation d\'O2 reste-t-elle élevée plusieurs minutes après la fin du sprint (dette d\'O2) ?',
        hints: ['Régénération des réserves de phosphocréatine et élimination de l\'acide lactique par le foie.'],
        solutionSteps: [
          'La consommation post-effort (EPOC ou dette d\'O2) permet de recharger les stocks musculaires de myoglobine et de phosphocréatine, et de métaboliser l\'acide lactique produit dans le foie.'
        ],
        finalAnswer: 'Régénération des réserves d\'ATP/phosphocréatine et dégradation de l\'acide lactique.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle molécule stockée dans le muscle sert de réserve immédiate de glucose ?',
        hints: ['Polymère de glucose musculaire et hépatique.'],
        solutionSteps: [
          'Le glycogène musculaire est le polymère de glucose dégradé lors de la glycogénolyse pour fournir de l\'énergie rapide.'
        ],
        finalAnswer: 'Le glycogène.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-9',
    targetChapterId: 'svt-2nde-dynamique-terre-plaques',
    title: 'Ondes Sismiques P et S & Découverte du Noyau Terrestre',
    context: 'Les stations sismiques mondiales enregistrent les ondes de volume P (compression) et S (cisaillement). Entre 105° et 142° de l\'épicentre d\'un séisme, aucune onde directe n\'arrive (zone d\'ombre).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🌍 Géophysique & Ondes Sismiques',
    questions: [
      {
        questionText: '1. Quelle est la différence fondamentale de propagation entre les ondes P et les ondes S ?',
        hints: ['Les ondes S ne se propagent pas dans les milieux liquides.'],
        solutionSteps: [
          'Les ondes P (premières, longitudinales) se propagent dans les solides et les liquides.',
          'Les ondes S (secondes, transversales de cisaillement) ne se propagent que dans les solides et s\'éteignent dans les fluides liquides.'
        ],
        finalAnswer: 'Les ondes S ne traversent pas les liquides, contrairement aux ondes P.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Qu\'en a déduit le sismologue Richard Oldham concernant le noyau externe de la Terre ?',
        hints: ['Disparition des ondes S directes au-delà de 105°.'],
        solutionSteps: [
          'L\'arrêt total des ondes S directes au-delà de 105° prouve que le noyau externe de la Terre (situé sous la discontinuité de Gutenberg à 2900 km de profondeur) est à l\'état liquide fondu.'
        ],
        finalAnswer: 'Le noyau externe terrestre est liquide.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2svt-bank-10',
    targetChapterId: 'svt-2nde-dynamique-terre-plaques',
    title: 'Vitesse d’Accrétion Océanique & Anomalies Magnétiques',
    context: 'De part et d\'autre de la dorsale médio-atlantique, des bandes d\'inversion du champ magnétique terrestre sont symétriques. Une anomalie datée de 10 millions d\'années (10 Ma) est située à 200 km de l\'axe.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🌊 Dorsale Océanique & Tectonique',
    questions: [
      {
        questionText: '1. Calculer la demi-vitesse d\'expansion d\'une seule plaque en cm/an.',
        hints: ['Formule : v = d / t.', 'Convertir 200 km en cm : 200 * 10^5 cm = 2 * 10^7 cm.', '10 Ma = 10^7 ans.'],
        solutionSteps: [
          'Distance d = 200 km = 200 000 m = 20 000 000 cm = 2 * 10^7 cm.',
          'Temps t = 10 Ma = 10^7 ans.',
          'v_demi = (2 * 10^7 cm) / (10^7 ans) = 2 cm/an.'
        ],
        finalAnswer: 'Demi-vitesse = 2 cm/an.',
        pointsAllocated: 4
      },
      {
        questionText: '2. En déduire la vitesse totale d\'ouverture de l\'océan Atlantique.',
        hints: ['L\'accrétion se produit symétriquement de part et d\'autre de l\'axe : v_totale = 2 * v_demi.'],
        solutionSteps: [
          'v_totale = 2 * 2 cm/an = 4 cm/an.'
        ],
        finalAnswer: 'Vitesse totale d\'ouverture = 4 cm/an.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-11',
    targetChapterId: 'svt-2nde-procreation-sexualite-sante',
    title: 'Rétrocontrôle Ovarien & Pic de LH Déclenchant l’Ovulation',
    context: 'Au 13e jour d\'un cycle menstruel de 28 jours, la concentration d\'œstradiol dépasse un seuil critique de 200 pg/mL pendant plus de 24h, déclenchant une libération massive de gonadostimulines.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'science',
    themeLabel: '🧬 Cycle Féminin & Hormones',
    questions: [
      {
        questionText: '1. Comment s\'appelle le changement de modalité de rétrocontrôle exercé par les œstrogènes sur l\'axe hypothalamo-hypophysaire à ce moment précis ?',
        hints: ['D\'habitude négatif, il devient momentanément positif.'],
        solutionSteps: [
          'Durant la majeure partie de la phase folliculaire, les œstrogènes exercent un rétrocontrôle négatif.',
          'Lorsque la concentration dépasse le seuil critique pré-ovulatoire, le rétrocontrôle devient exceptionnellement positif, déclenchant le pic de sécrétion de LH et de FSH.'
        ],
        finalAnswer: 'Bascule vers un rétrocontrôle positif.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quelle hormone hypophysaire subit le pic le plus spectaculaire, provoquant l\'expulsion de l\'ovocyte (ovulation) ?',
        hints: ['L\'hormone lutéinisante.'],
        solutionSteps: [
          'C\'est le pic de LH (hormone lutéinisante) qui déclenche la rupture du follicule mûr de De Graaf et l\'ovulation 24 à 36 heures plus tard.'
        ],
        finalAnswer: 'Le pic de LH (hormone lutéinisante).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2svt-bank-12',
    targetChapterId: 'svt-2nde-procreation-sexualite-sante',
    title: 'Pilule Œstroprogestative & Blocage de l’Ovulation',
    context: 'La pilule contraceptive combinée classique contient des dérivés synthétiques d\'œstrogènes et de progestérone pris quotidiennement pendant 21 jours.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '💊 Contraception & Régulation Hormonale',
    questions: [
      {
        questionText: '1. Quel mécanisme hormonal permet à ces hormones exogènes de bloquer l\'ovulation ?',
        hints: ['Maintien d\'un rétrocontrôle négatif constant sur l\'hypophyse.'],
        solutionSteps: [
          'La prise continue de faibles doses d\'œstrogènes et de progestérone exerce un rétrocontrôle négatif permanent sur l\'hypothalamus et l\'hypophyse.',
          'Cela empêche toute hausse de GnRH, FSH et LH, supprimant le pic ovulatoire.'
        ],
        finalAnswer: 'Maintien permanent d\'un rétrocontrôle négatif bloquant les pics de FSH et LH.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Citer les deux autres actions contraceptives complémentaires sur la glaire cervicale et l\'endomètre.',
        hints: ['Rendre la glaire imperméable aux spermatozoïdes et empêcher la nidation.'],
        solutionSteps: [
          '1. Épaississement de la glaire cervicale au niveau du col utérin, formant un maillage dense infranchissable pour les spermatozoïdes.',
          '2. Amincissement et atrophie de la muqueuse utérine (endomètre), empêchant toute nidation embryonnaire éventuelle.'
        ],
        finalAnswer: 'Glaire cervicale imperméable aux spermatozoïdes et muqueuse utérine impropre à la nidation.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-13',
    targetChapterId: 'svt-2nde-cellule-metabolisme',
    title: 'Structure de la Double Hélice d’ADN & Complémentarité des Bases',
    context: 'En 1953, Watson, Crick et Rosalind Franklin découvrent la structure tridimensionnelle de l\'ADN. Sur un brin d\'ADN bactérien, on lit la séquence 5\'- ATGCCGTAG - 3\'.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🧬 ADN & Biologie Moléculaire',
    questions: [
      {
        questionText: '1. Écrire la séquence du brin complémentaire en respectant la polarité (3\' vers 5\').',
        hints: ['Règles d\'appariement : A s\'apparie avec T, et C avec G.'],
        solutionSteps: [
          'A <-> T, T <-> A, G <-> C, C <-> G, C <-> G, G <-> C, T <-> A, A <-> T, G <-> C.',
          'Brin complémentaire : 3\'- TACGGCATC - 5\'.'
        ],
        finalAnswer: '3\'- TACGGCATC - 5\'.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle est la nature des liaisons chimiques faibles qui maintiennent les deux brins associés ?',
        hints: ['Liaisons électrostatiques entre atomes d\'hydrogène et azote/oxygène.'],
        solutionSteps: [
          'Ce sont des liaisons hydrogène (2 entre A et T, 3 entre C et G).'
        ],
        finalAnswer: 'Liaisons hydrogène (2 liaisons entre A-T, 3 liaisons entre C-G).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-14',
    targetChapterId: 'svt-2nde-biodiversite',
    title: 'Crise Biologique du Crétacé-Paléogène & Disparition des Dinosaures',
    context: 'Il y a 66 millions d\'années, l\'impact d\'une météorite de 10 km à Chicxulub et d\'intenses éruptions volcaniques dans les trapps du Deccan provoquent une extinction massive.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '☄️ Météorite & Crises de la Biodiversité',
    questions: [
      {
        questionText: '1. Qu\'est-ce qui caractérise une crise biologique majeure à l\'échelle planétaire ?',
        hints: ['Disparition rapide d\'un grand nombre de taxons à l\'échelle du globe dans des milieux variés.'],
        solutionSteps: [
          'Une crise biologique majeure est marquée par une extinction massive et rapide (à l\'échelle des temps géologiques) d\'une proportion considérable d\'espèces animales et végétales, touchant simultanément les milieux continentaux et marins sur toute la planète.'
        ],
        finalAnswer: 'Extinction massive, rapide et mondiale touchant de multiples groupes d\'êtres vivants.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel groupe de vertébrés a connu une radiation adaptative spectaculaire suite à la libération des niches écologiques ?',
        hints: ['Animaux à poils et allaitement.'],
        solutionSteps: [
          'Les mammifères (ainsi que les oiseaux, descendants des dinosaures théropodes) se sont diversifiés de manière exponentielle en occupant les niches écologiques libérées.'
        ],
        finalAnswer: 'Les mammifères (radiation adaptative).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-15',
    targetChapterId: 'svt-2nde-agrosystemes',
    title: 'Cycle de l’Azote & Eutrophisation des Cours d’Eau',
    context: 'L\'épandage excessif de lisier et d\'engrais azotés (nitrates NO3-) sur un bassin versant agricole entraîne la prolifération de marées vertes côtières.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '🌊 Algues Vertes & Eutrophisation',
    questions: [
      {
        questionText: '1. Expliquer la chaîne d\'événements menant de l\'apport de nitrates à l\'asphyxie du milieu aquatique (anoxie).',
        hints: ['Prolifération d\'algues, blocage de la lumière, décomposition par les bactéries consommatrices d\'O2.'],
        solutionSteps: [
          '1. L\'excès de nitrates et de phosphates stimule une prolifération explosive d\'algues vertes de surface.',
          '2. Ces algues meurent et s\'accumulent au fond.',
          '3. Les bactéries décomposeuses dégradent cette biomasse massive en consommant la totalité du dioxygène dissous.',
          '4. Le milieu devient anoxique (privé d\'O2), entraînant la mort des poissons et de la faune benthique.'
        ],
        finalAnswer: 'Prolifération algale -> mort de la biomasse -> décomposition bactérienne hyperconsommatrice d\'O2 -> anoxie mortelle.',
        pointsAllocated: 5
      },
      {
        questionText: '2. Citer une pratique agronomique pour réduire ce lessivage hivernal.',
        hints: ['Semer un couvert végétal entre deux cultures (CIPAN).'],
        solutionSteps: [
          'L\'implantation de Cultures Intermédiaires Pièges À Nitrates (CIPAN) permet aux racines d\'absorber les nitrates résiduels avant les pluies d\'hiver.'
        ],
        finalAnswer: 'Implantation de CIPAN (couvert végétal d\'interculture).',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-bank-16',
    targetChapterId: 'svt-2nde-effort-musculaire',
    title: 'Ventilation Pulmonaire & Échanges Gazeux Alvéolaires',
    context: 'Pendant un sprint, le volume courant VC passe de 0,5 L à 2,5 L et la fréquence respiratoire FR de 15 à 40 cycles/minute.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🫁 Poumons & Débit Ventilatoire',
    questions: [
      {
        questionText: '1. Calculer le débit ventilatoire D_vent au repos puis à l\'effort en L/min.',
        hints: ['Formule : D_vent = VC * FR.'],
        solutionSteps: [
          'Au repos : D_vent = 0,5 * 15 = 7,5 L/min.',
          'À l\'effort : D_vent = 2,5 * 40 = 100 L/min.'
        ],
        finalAnswer: 'Repos : 7,5 L/min ; Effort : 100 L/min (multiplié par plus de 13 !).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Par quel mécanisme physique les gaz respiratoires (O2 et CO2) franchissent-ils la paroi des alvéoles pulmonaires ?',
        hints: ['Mouvement passif selon le gradient de pression partielle.'],
        solutionSteps: [
          'Les gaz traversent la fine membrane alvéolo-capillaire par simple diffusion passive, du milieu où la pression partielle est la plus élevée vers celui où elle est la plus faible.'
        ],
        finalAnswer: 'Diffusion passive selon le gradient de pression partielle.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-bank-17',
    targetChapterId: 'svt-2nde-dynamique-terre-plaques',
    title: 'Points Chauds & Dérive de l’Archipel d’Hawaï',
    context: 'L\'alignement des volcans d\'Hawaï montre des âges croissants vers le nord-ouest. L\'île de Kauai (située à 500 km du volcan actif Kilauea) a un âge volcanique de 5 millions d\'années.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'space',
    themeLabel: '🌋 Volcanisme de Point Chaud',
    questions: [
      {
        questionText: '1. Pourquoi le volcanisme de point chaud permet-il de mesurer la vitesse absolue de déplacement d\'une plaque tectonique ?',
        hints: ['Le panache mantellique profond est considéré comme fixe par rapport à la lithosphère mobile.'],
        solutionSteps: [
          'La source magmatique mantellique profonde (panache de point chaud) est quasi stationnaire.',
          'La plaque lithosphérique Pacifique défile au-dessus de ce chalumeau fixe, créant une chaîne d\'édifices volcaniques dont l\'âge reflète la date de leur passage au-dessus du point chaud.'
        ],
        finalAnswer: 'Le point chaud est fixe et la plaque défile au-dessus, formant une chaîne alignée par ordre d\'âge.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Calculer la vitesse de déplacement de la plaque Pacifique en cm/an.',
        hints: ['Distance = 500 km = 5 * 10^7 cm ; Durée = 5 * 10^6 ans.'],
        solutionSteps: [
          'd = 500 km = 500 000 m = 5 * 10^7 cm.',
          't = 5 Ma = 5 * 10^6 ans.',
          'v = (5 * 10^7) / (5 * 10^6) = 10 cm/an.'
        ],
        finalAnswer: 'v = 10 cm/an vers le Nord-Ouest.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-18',
    targetChapterId: 'svt-2nde-procreation-sexualite-sante',
    title: 'Fécondation In Vitro avec ICSI & PMA',
    context: 'Un couple consulte un centre de Procréation Médicalement Assistée (PMA) en raison d\'une oligospérmie sévère chez l\'homme (très faible mobilité et nombre de spermatozoïdes). L\'équipe médicale propose une FIV avec ICSI.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🔬 PMA & Micro-injection ICSI',
    questions: [
      {
        questionText: '1. En quoi consiste la technique d\'ICSI (Intra-Cytoplasmic Sperm Injection) ?',
        hints: ['Micro-injection directe d\'un seul spermatozoïde sélectionné dans le cytoplasme de l\'ovocyte.'],
        solutionSteps: [
          'Sous contrôle micromanipulateur et microscope, le biologiste injecte directement un unique spermatozoïde sélectionné dans le cytoplasme d\'un ovocyte mature, contournant les anomalies de mobilité ou de pénétration de la zone pellucide.'
        ],
        finalAnswer: 'Micro-injection directe d\'un spermatozoïde unique dans le cytoplasme de l\'ovocyte.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Après combien de jours de culture in vitro l\'embryon (stade blastocyste) est-il généralement transféré dans la cavité utérine ?',
        hints: ['Généralement entre 3 et 5 jours (blastocyste à J5).'],
        solutionSteps: [
          'Le transfert s\'effectue couramment à J5 (stade blastocyste), lorsque l\'embryon compte plus d\'une centaine de cellules et présente un meilleur potentiel d\'implantation.'
        ],
        finalAnswer: 'À J5 (stade blastocyste).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-19',
    targetChapterId: 'svt-2nde-cellule-metabolisme',
    title: 'Fermentation Lactique chez le Muscle Privé d’O2',
    context: 'Lors d\'un effort supramaximal prolongé, l\'apport de dioxygène sanguin devient insuffisant pour satisfaire la demande énergétique de la mitochondrie.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏃 Fermentation & Acide Lactique',
    questions: [
      {
        questionText: '1. Quel processus anaérobie de secours permet au muscle de régénérer le NAD+ pour continuer la glycolyse ?',
        hints: ['Transformation du pyruvate en lactate.'],
        solutionSteps: [
          'La fermentation lactique transforme le pyruvate issu de la glycolyse en acide lactique (ou lactate), permettant de réoxyder le NADH,H+ en NAD+.'
        ],
        finalAnswer: 'La fermentation lactique.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Combien de molécules d\'ATP sont produites par molécule de glucose lors de la fermentation lactique (comparé aux ~36 ATP de la respiration) ?',
        hints: ['Rendement faible : seuls les ATP de la glycolyse sont gagnés.'],
        solutionSteps: [
          'La fermentation lactique ne produit que 2 ATP nets par molécule de glucose, ce qui en fait une voie d\'urgence à très faible rendement énergétique.'
        ],
        finalAnswer: '2 ATP par molécule de glucose.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-20',
    targetChapterId: 'svt-2nde-biodiversite',
    title: 'Diversité des Écosystèmes & Services de la Forêt Amazonienne',
    context: 'La forêt amazonienne abrite plus de 10% de la biodiversité mondiale connue et séquestre des milliards de tonnes de carbone atmosphérique.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'ecologie',
    themeLabel: '🌳 Forêt Tropicale & Climat',
    questions: [
      {
        questionText: '1. Définir les trois niveaux d\'organisation de la biodiversité.',
        hints: ['Écosystèmes, espèces, allèles (génétique).'],
        solutionSteps: [
          '1. La diversité des écosystèmes (milieux de vie et interactions).',
          '2. La diversité des espèces (diversité spécifique).',
          '3. La diversité génétique au sein de chaque espèce (diversité des allèles).'
        ],
        finalAnswer: 'Diversité des écosystèmes, des espèces et génétique (allèles).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Citer deux services écologiques majeurs rendus par la forêt à l\'humanité.',
        hints: ['Régulation du climat (puits de carbone) et réservoir de molécules thérapeutiques.'],
        solutionSteps: [
          '1. Régulation climatique globale et cycle de l\'eau (pompe biotique et puits de carbone).',
          '2. Réservoir de ressources génétiques et pharmacologiques indispensables à la médecine.'
        ],
        finalAnswer: 'Puits de carbone / régulation hydrique et réservoir pharmacologique mondial.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-bank-21',
    targetChapterId: 'svt-2nde-agrosystemes',
    title: 'Rotation des Cultures & Légumineuses Fixatrices d’Azote',
    context: 'Un agriculteur alterne du blé avec de la luzerne et du trèfle (fabacées). Ces plantes possèdent des nodosités racinaires symbiotiques avec la bactérie Rhizobium.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🌱 Symbiose & Fertilité des Sols',
    questions: [
      {
        questionText: '1. Quel gaz atmosphérique les bactéries Rhizobium sont-elles capables de capter et de fixer ?',
        hints: ['Gaz majoritaire de l\'air (78%).'],
        solutionSteps: [
          'Les bactéries Rhizobium captent le diazote atmosphérique (N2) et le transforment en ammonium assimilable par la plante.'
        ],
        finalAnswer: 'Le diazote atmosphérique (N2).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel avantage direct cette rotation apporte-t-elle pour la culture suivante sans engrais minéral ?',
        hints: ['Enrichissement naturel du sol en azote organique.'],
        solutionSteps: [
          'Après récolte de la légumineuse, les résidus racinaires se décomposent et enrichissent naturellement le sol en azote organique, réduisant le recours aux engrais chimiques de synthèse pour le blé suivant.'
        ],
        finalAnswer: 'Enrichissement naturel du sol en azote assimilable et réduction des engrais chimiques.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-bank-22',
    targetChapterId: 'svt-2nde-effort-musculaire',
    title: 'Pression Artérielle & Vasodilatation à l’Effort',
    context: 'Lors d\'un entraînement cardio, la pression artérielle systolique monte de 120 à 160 mmHg, mais la pression diastolique reste stable autour de 80 mmHg grâce à la vasodilatation des artérioles musculaires.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'sport',
    themeLabel: '💓 Système Vasculaire & Effort',
    questions: [
      {
        questionText: '1. Qu\'est-ce que la vasodilatation et quel est son effet sur la résistance vasculaire des muscles actifs ?',
        hints: ['Augmentation du calibre des vaisseaux et baisse de résistance.'],
        solutionSteps: [
          'La vasodilatation est l\'augmentation du diamètre interne des vaisseaux sanguins par relâchement des cellules musculaires lisses de leur paroi.',
          'Elle diminue la résistance à l\'écoulement et décuple l\'apport de sang oxygéné aux fibres musculaires en activité.'
        ],
        finalAnswer: 'Augmentation du diamètre des vaisseaux qui diminue la résistance et booste le débit local.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi les organes non sollicités (viscères, reins) subissent-ils au contraire une vasoconstriction ?',
        hints: ['Redistribution préférentielle du débit sanguin vers les muscles.'],
        solutionSteps: [
          'La vasoconstriction splanchnique détourne le flux sanguin des organes digestifs au repos pour le rediriger massivement vers les muscles striés squelettiques et le cœur.'
        ],
        finalAnswer: 'Pour redistribuer prioritairement le débit sanguin vers les muscles en action.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-bank-23',
    targetChapterId: 'svt-2nde-dynamique-terre-plaques',
    title: 'Discontinuité du Moho & Épaisseur de la Croûte',
    context: 'Andrija Mohorovičić met en évidence en 1909 une discontinuité séparant la croûte terrestre du manteau supérieur. La vitesse des ondes sismiques P y passe brutalement de 6 km/s à plus de 8 km/s.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🏔️ Moho & Structure Terrestre',
    questions: [
      {
        questionText: '1. Comparer l\'épaisseur moyenne de la croûte continentale et de la croûte océanique.',
        hints: ['Croûte océanique : 6-8 km ; Croûte continentale : 30 km (jusqu\'à 70 km sous les chaînes de montagnes).'],
        solutionSteps: [
          'Croûte océanique (basaltes et gabbros) : fine, environ 6 à 10 km.',
          'Croûte continentale (granitique) : épaisse, environ 30 km en plaine et jusqu\'à 70 km sous les racines crustales des montagnes.'
        ],
        finalAnswer: 'Croûte océanique ~ 7 km vs Croûte continentale ~ 30 km (jusqu\'à 70 km sous les Alpes/Himalaya).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quelle roche ultramafique constitue le manteau supérieur situé immédiatement sous le Moho ?',
        hints: ['Roche verte riche en olivine.'],
        solutionSteps: [
          'C\'est la péridotite, roche grenue riche en olivine et pyroxènes.'
        ],
        finalAnswer: 'La péridotite.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-bank-24',
    targetChapterId: 'svt-2nde-procreation-sexualite-sante',
    title: 'Infections Sexuellement Transmissibles (IST) & Préservatif',
    context: 'Le papillomavirus humain (HPV) et le VIH sont deux agents pathogènes sexuellement transmissibles majeurs. Une campagne nationale promeut la vaccination HPV dès le collège.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🛡️ Santé Publique & Prévention IST',
    questions: [
      {
        questionText: '1. Quel est le seul moyen de contraception qui protège simultanément contre les grossesses non prévues et les IST ?',
        hints: ['Contraception mécanique barrière.'],
        solutionSteps: [
          'Le préservatif (externe ou interne) est le seul moyen contraceptif offrant une barrière physique étanche contre la transmission du VIH et des autres IST.'
        ],
        finalAnswer: 'Le préservatif (masculin/externe ou féminin/interne).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel type de cancer fréquent le vaccin contre le HPV permet-il de prévenir efficacement chez les jeunes femmes ?',
        hints: ['Cancer du col de l\'utérus.'],
        solutionSteps: [
          'Le vaccin anti-HPV prévient l\'infection par les souches oncogènes responsables de la quasi-totalité des cancers du col de l\'utérus (ainsi que certains cancers oropharyngés et anaux chez les hommes).'
        ],
        finalAnswer: 'Le cancer du col de l\'utérus.',
        pointsAllocated: 3
      }
    ]
  }
];
