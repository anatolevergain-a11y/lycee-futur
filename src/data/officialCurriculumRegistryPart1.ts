import { Chapter } from '../types';

export const OFFICIAL_REGISTRY_PART1: Chapter[] = [
  // =========================================================================
  // SECONDE - MATHS : ÉQUATIONS ET INÉQUATIONS
  // =========================================================================
  {
    id: 'math-2nde-equations-inequations',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Équations & Inéquations : 1er Degré, Équations-Produits et Tableaux de Signes',
    officialCode: 'MATH-2-06',
    description: 'Résolution méthodique des équations du premier degré ax + b = c, équations se ramenant au produit nul (ax + b)(cx + d) = 0, inéquations du premier degré, étude du signe d\'un binôme affine et construction de tableaux de signes pour les quotients et produits.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Propriété du produit nul : Un produit de facteurs est nul si et seulement si au moins l\'un des facteurs est nul : A × B = 0 ⇔ A = 0 ou B = 0.',
      'Inégalité et multiplication : Lorsqu\'on multiplie ou divise les deux membres d\'une inéquation par un nombre strictement négatif, on doit impérativement changer le sens de l\'inégalité.',
      'Règle du signe de ax + b : ax + b s\'annule en x = -b/a ; il est du signe de a à droite de cette racine, et du signe de -a à gauche.',
      'Valeur interdite d\'un quotient : Le dénominateur ne doit jamais être nul. Elle est signalée par une double barre dans le tableau de signes.'
    ],
    keyFormulas: [
      {
        label: 'Produit nul',
        formula: '(a x + b)(c x + d) = 0 \\iff a x + b = 0 \\quad \\text{ou} \\quad c x + d = 0',
        explanation: 'Permet de résoudre des équations de degré 2 factorisables.'
      },
      {
        label: 'Signe du binôme ax + b (a > 0)',
        formula: 'x < -\\frac{b}{a} \\implies a x + b < 0 \\quad ; \\quad x > -\\frac{b}{a} \\implies a x + b > 0',
        explanation: 'Du signe opposé à a avant la racine, du signe de a après la racine.'
      }
    ],
    courseSections: [
      {
        title: '1. Méthode pour résoudre une inéquation-produit ou quotient',
        content: [
          '1. Transposer tous les termes dans le membre de gauche pour avoir 0 à droite.',
          '2. Réduire au même dénominateur ou factoriser au maximum pour n\'avoir que des facteurs affines.',
          '3. Identifier les racines de chaque facteur et les valeurs interdites éventuelles.',
          '4. Ordonner toutes les valeurs critiques sur la première ligne du tableau.',
          '5. Remplir les lignes de signes puis déterminer la ligne bilan par la règle des signes (+ par - donne -).'
        ],
        proTip: 'Ne jamais faire de "produit en croix" avec une inéquation : cela fait perdre le signe de l\'inconnue !'
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-gaming-loot-threshold',
        title: 'Exercice Type Seconde : Seuil de Rentabilité d\'un Season Pass de Jeu Vidéo',
        context: 'Un joueur de jeu vidéo compétitif hésite à souscrire à un Season Pass coûtant 30 €. Sans Pass, chaque pack cosmétique coûte 4,50 €. Avec le Pass, chaque pack bénéficie d\'une réduction et ne coûte que 2,00 €. On cherche à partir de combien de packs n achetés le Pass devient strictement plus économique.',
        difficulty: 'Facile',
        points: 5,
        themeTag: 'gaming',
        themeLabel: '🎮 Gaming & Optimisation de Budget',
        questions: [
          {
            questionText: '1. Exprimer le coût total C1(n) sans Pass et C2(n) avec le Pass en fonction du nombre de packs n.',
            hints: ['C1 est proportionnel, C2 comporte un coût fixe initial de 30 €.'],
            solutionSteps: [
              'Sans pass : C1(n) = 4,50 × n.',
              'Avec pass : C2(n) = 30 + 2,00 × n.'
            ],
            finalAnswer: 'C1(n) = 4,5n et C2(n) = 2n + 30',
            pointsAllocated: 2
          },
          {
            questionText: '2. Poser et résoudre l\'inéquation C2(n) < C1(n) pour trouver le seuil de rentabilité.',
            hints: ['Rassembler les termes en n d\'un côté de l\'inégalité.'],
            solutionSteps: [
              'On cherche n entier tel que 30 + 2n < 4,5n.',
              '30 < 4,5n - 2n <=> 30 < 2,5n.',
              'n > 30 / 2,5 = 12.',
              'Comme l\'inégalité est stricte, le pass devient rentable dès n = 13 packs.'
            ],
            finalAnswer: 'Rentable à partir de n = 13 packs cosmétiques',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-eq-1',
        question: 'Quelles sont les solutions de l\'équation (3x - 6)(2x + 8) = 0 ?',
        options: ['x = 2 et x = -4', 'x = -2 et x = 4', 'x = 2 et x = 4', 'x = 6 et x = -8'],
        correctIndex: 0,
        explanation: '3x - 6 = 0 => x = 2 ; 2x + 8 = 0 => 2x = -8 => x = -4.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - MATHS : GÉOMÉTRIE REPÉRÉE
  // =========================================================================
  {
    id: 'math-2nde-geometrie-reperee',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Géométrie Repérée : Coordonnées, Milieu et Distance dans le Plan',
    officialCode: 'MATH-2-07',
    description: 'Repère orthonormé (O; i, j), coordonnées d\'un point, coordonnées du milieu d\'un segment, formule de la distance euclidienne entre deux points, démonstrations géométriques (triangle rectangle avec Pythagore, losange, parallélogramme).',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Repère orthonormé : Les axes sont perpendiculaires et possèdent la même unité de longueur.',
      'Milieu d\'un segment [AB] : Ses coordonnées sont les moyennes arithmétiques : xM = (xA + xB)/2 et yM = (yA + yB)/2.',
      'Distance euclidienne AB : AB = √[(xB - xA)² + (yB - yA)²]. Formule valable UNIQUEMENT dans un repère orthonormé.',
      'Caractérisation du parallélogramme : ABCD est un parallélogramme si et seulement si ses diagonales [AC] et [BD] ont le même milieu.'
    ],
    keyFormulas: [
      {
        label: 'Distance entre deux points A et B',
        formula: 'AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}',
        explanation: 'Application directe du théorème de Pythagore dans le plan repéré.'
      },
      {
        label: 'Milieu M du segment [AB]',
        formula: 'x_M = \\frac{x_A + x_B}{2} \\quad ; \\quad y_M = \\frac{y_A + y_B}{2}',
        explanation: 'Coordonnées de l\'isobarycentre des extrémités.'
      }
    ],
    courseSections: [
      {
        title: '1. Preuves géométriques par le calcul',
        content: [
          '• Pour prouver qu\'un triangle ABC est rectangle en A : calculer AB², AC² et BC², puis vérifier que BC² = AB² + AC² (Réciproque de Pythagore).',
          '• Pour prouver qu\'un quadrilatère ABCD est un parallélogramme : vérifier que Milieu([AC]) = Milieu([BD]).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-space-drone-coords',
        title: 'Exercice Type Seconde : Trajectoire et Guidage d\'un Rover Martien',
        context: 'Un rover d\'exploration martienne part de la base Alpha A(-4 ; 3) et doit rejoindre une station d\'analyse géologique B(8 ; -2), repérée en kilomètres dans la grille cartographique locale.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'space',
        themeLabel: '🚀 Mission Martienne & Cartographie',
        questions: [
          {
            questionText: '1. Calculer la distance à vol d\'oiseau AB séparant le rover de sa destination.',
            hints: ['Utiliser la formule de distance avec xA = -4, yA = 3, xB = 8, yB = -2.'],
            solutionSteps: [
              'AB = √[(8 - (-4))² + (-2 - 3)²].',
              'AB = √[(12)² + (-5)²] = √[144 + 25] = √169 = 13 km.'
            ],
            finalAnswer: 'Distance AB = 13 km',
            pointsAllocated: 3
          },
          {
            questionText: '2. Le rover s\'arrête à mi-chemin M pour déployer son antenne relais. Quelles sont les coordonnées du point M ?',
            hints: ['M est le milieu de [AB].'],
            solutionSteps: [
              'xM = (-4 + 8) / 2 = 4 / 2 = 2.',
              'yM = (3 + (-2)) / 2 = 1 / 2 = 0,5.'
            ],
            finalAnswer: 'M(2 ; 0,5)',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-geom-1',
        question: 'Quelle est la distance entre les points A(1 ; 2) et B(4 ; 6) ?',
        options: ['5', '7', '√7', '25'],
        correctIndex: 0,
        explanation: 'AB = √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9+16] = √25 = 5 (triangle 3-4-5 classique).'
      }
    ]
  },

  // =========================================================================
  // SECONDE - MATHS : ALGORITHMIQUE ET PROGRAMMATION EN PYTHON
  // =========================================================================
  {
    id: 'math-2nde-algo-python',
    subjectId: 'maths',
    gradeLevel: '2nde',
    title: 'Algorithmique & Programmation en Python : Variables, Boucles et Fonctions',
    officialCode: 'MATH-2-08',
    description: 'Affectation de variables, types de données (int, float, bool, str), conditions avec if / elif / else, boucle bornée for avec range(), boucle non-bornée while (algorithme de seuil) et définition de fonctions réutilisables en Python (def / return).',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Affectation = : Ne désigne pas une égalité mathématique, mais le stockage d\'une valeur dans une case mémoire (ex: a = a + 1 incrémente a de 1).',
      'Boucle bornée for i in range(n) : Exécute le bloc n fois, pour i allant de 0 à n - 1.',
      'Boucle non-bornée while condition : Répète le bloc tant que la condition reste vraie (idéale pour les algorithmes de recherche de seuil).',
      'Fonction def f(x): : Doit comporter une instruction return pour renvoyer le résultat calculé.'
    ],
    keyFormulas: [
      {
        label: 'Fonction de seuil en Python',
        formula: '\\text{while } u < S : \\quad u = a \\cdot u + b \\quad ; \\quad n = n + 1',
        explanation: 'Structure standard pour déterminer le premier entier n dépassant un seuil S.'
      }
    ],
    courseSections: [
      {
        title: '1. Comprendre l\'indentation et les pièges classiques',
        content: [
          '• En Python, les blocs de code sont délimités par l\'indentation (4 espaces).',
          '• Ne confondez pas "print(x)" (affiche à l\'écran) et "return x" (renvoie la valeur pour qu\'elle soit utilisable par le programme).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-python-esport-rank',
        title: 'Exercice Type Seconde : Algorithme de Simulation d\'XP d\'un Joueur en Python',
        context: 'Un joueur débute avec 100 points de réputation. Chaque victoire rapporte 15% de points supplémentaires plus un bonus fixe de 20 points. On souhaite créer un script Python qui calcule le nombre de victoires nécessaires pour atteindre le rang "Diamant" fixé à 1 000 points.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'gaming',
        themeLabel: '🎮 Script Python & Simulation de Matchs',
        questions: [
          {
            questionText: '1. Compléter le code de la boucle conditionnelle pour déterminer le nombre de matchs n nécessaires :',
            hints: ['Initialiser points = 100 et n = 0, puis faire progresser tant que points < 1000.'],
            solutionSteps: [
              'points = 100',
              'n = 0',
              'while points < 1000:',
              '    points = points * 1.15 + 20',
              '    n = n + 1',
              'print("Nombre de victoires requises :", n)'
            ],
            finalAnswer: 'Algorithme while points < 1000 avec incrémentation de n',
            pointsAllocated: 3
          },
          {
            questionText: '2. En exécutant manuellement pour les 2 premières victoires, donner la valeur des points après chaque match.',
            hints: ['Calculer 100 × 1,15 + 20 puis recommencer.'],
            solutionSteps: [
              'Après 1 match : points = 100 × 1,15 + 20 = 115 + 20 = 135 points.',
              'Après 2 matchs : points = 135 × 1,15 + 20 = 155,25 + 20 = 175,25 points.'
            ],
            finalAnswer: 'Match 1 : 135 pts ; Match 2 : 175,25 pts',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-py-1',
        question: 'Combien de fois la boucle "for k in range(2, 6):" est-elle exécutée ?',
        options: ['4 fois (valeurs 2, 3, 4, 5)', '6 fois', '5 fois', '3 fois'],
        correctIndex: 0,
        explanation: 'range(start, stop) s\'arrête à stop - 1. Les valeurs prises par k sont 2, 3, 4, 5, soit exactement 4 itérations.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - PHYSIQUE-CHIMIE : CORPS PURS ET MÉLANGES
  // =========================================================================
  {
    id: 'pc-2nde-corps-purs-melanges',
    subjectId: 'physique-chimie',
    gradeLevel: '2nde',
    title: 'Corps Purs et Mélanges : Masse Volumique, Identification & Chromatographie',
    officialCode: 'PC-2-05',
    description: 'Différence entre corps purs et mélanges (homogènes et hétérogènes), composition de l\'air, masse volumique ρ = m/V, identification d\'espèces chimiques par leurs grandeurs physiques caractéristiques (températures de changement d\'état, masse volumique, indice de réfraction) et chromatographie sur couche mince (CCM).',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Corps pur : Substance constituée d\'une seule espèce chimique. Ses changements d\'état à pression constante ont lieu à température constante (palier thermique).',
      'Mélange : Présence d\'au moins deux espèces chimiques différentes. Aucun palier strict lors du changement d\'état.',
      'Masse volumique : Grandeur caractéristique ρ = m / V (en g/mL, g/cm³ ou kg/m³).',
      'Chromatographie sur couche mince (CCM) : Technique de séparation et d\'identification basée sur la différence d\'affinité des composés entre la phase fixe et la phase mobile (éluant).'
    ],
    keyFormulas: [
      {
        label: 'Masse volumique',
        formula: '\\rho = \\frac{m}{V} \\quad (\\text{Eau pure : } \\rho = 1{,}00 \\text{ g/mL} = 1000 \\text{ kg/m}^3)',
        explanation: 'm en kg et V en m³ (SI) ou m en g et V en mL.'
      },
      {
        label: 'Rapport frontal en chromatographie',
        formula: 'R_f = \\frac{h}{H} = \\frac{\\text{distance parcourue par la tache}}{\\text{distance parcourue par l\'éluant}}',
        explanation: 'Grandeur sans unité comprise entre 0 et 1, caractéristique d\'une espèce pour un éluant donné.'
      }
    ],
    courseSections: [
      {
        title: '1. Identification par les tests physico-chimiques',
        content: [
          '• Test au sulfate de cuivre anhydre : passe du blanc au bleu en présence d\'eau.',
          '• Test à l\'eau de chaux : se trouble (précipité blanc) en présence de dioxyde de carbone CO2.',
          '• Test à la bûchette incandescente : se rallume en présence de dioxygène O2.',
          '• Test à la flamme : "pop" sonore en présence de dihydrogène H2.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-gold-crown-density',
        title: 'Exercice Type Seconde : Détection d\'une Fraude de Bijouterie par la Masse Volumique',
        context: 'Un collectionneur achète une statuette antique supposée être en or massif (ρor = 19,3 g/cm³). Pour vérifier son authenticité sans l\'abîmer, il la pèse : m = 347,4 g. Il l\'immerge ensuite dans une éprouvette graduée contenant initialement 50,0 mL d\'eau : le niveau monte à 72,0 mL.',
        difficulty: 'Facile',
        points: 5,
        themeTag: 'cinema',
        themeLabel: '🎬 Enquête Archéologique & Fraude',
        questions: [
          {
            questionText: '1. Déterminer le volume V de la statuette par la méthode de déplacement d\'eau.',
            hints: ['V = V_final - V_initial.'],
            solutionSteps: [
              'V = 72,0 mL - 50,0 mL = 22,0 mL = 22,0 cm³.'
            ],
            finalAnswer: 'V = 22,0 cm³',
            pointsAllocated: 2
          },
          {
            questionText: '2. Calculer la masse volumique de la statuette et conclure sur la pureté de l\'or.',
            hints: ['Calculer ρ = m / V et comparer à 19,3 g/cm³.'],
            solutionSteps: [
              'ρ = 347,4 g / 22,0 cm³ = 15,79 g/cm³.',
              'Comme 15,79 g/cm³ < 19,3 g/cm³, la statuette n\'est pas en or pur.',
              'Il s\'agit d\'un alliage moins dense (probablement doré en surface avec un cœur en plomb ou en cuivre).'
            ],
            finalAnswer: 'ρ = 15,8 g/cm³ : statuette non authentique',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-mel-1',
        question: 'Sur un chromatogramme, une substance inconnue X donne deux taches distinctes. On en déduit que :',
        options: ['X est un mélange composé d\'au moins deux espèces', 'X est un corps pur', 'La chromatographie a échoué', 'L\'éluant est saturé'],
        correctIndex: 0,
        explanation: 'Un corps pur ne donne qu\'une seule tache. L\'apparition de deux taches prouve la présence de deux constituants différents.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - PHYSIQUE-CHIMIE : TRANSFORMATIONS CHIMIQUES & NUCLÉAIRES
  // =========================================================================
  {
    id: 'pc-2nde-transformations-chimiques-nucleaires',
    subjectId: 'physique-chimie',
    gradeLevel: '2nde',
    title: 'Transformations Chimiques & Nucléaires : Équations, Stœchiométrie et Isotopes',
    officialCode: 'PC-2-06',
    description: 'Distinction entre transformation physique (changement d\'état), chimique (réorganisation atomique, réactifs -> produits) et nucléaire (modification du noyau atomique). Conservation des éléments et de la charge (Lavoisier), équilibrage stœchiométrique, isotopes et réactions de fusion/fission stellaire.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Transformation chimique : Des liaisons se rompent et de nouvelles se forment, mais la nature des noyaux atomiques reste intacte.',
      'Loi de Lavoisier : Rien ne se perd, rien ne se crée, tout se transforme. Le nombre de chaque type d\'atome et la charge électrique totale sont conservés.',
      'Transformation nucléaire : Modification de la structure du noyau (perte ou gain de protons/neutrons). L\'identité des éléments chimiques change !',
      'Isotopes : Noyaux ayant le même nombre de protons Z mais un nombre de neutrons N (et donc de nucléons A) différent (ex: Carbone 12 et Carbone 14).'
    ],
    keyFormulas: [
      {
        label: 'Lois de Soddy (réactions nucléaires)',
        formula: '\\sum A_{\\text{réactifs}} = \\sum A_{\\text{produits}} \\quad \\text{et} \\quad \\sum Z_{\\text{réactifs}} = \\sum Z_{\\text{produits}}',
        explanation: 'Conservation stricte du nombre de nucléons A et de la charge électrique Z.'
      },
      {
        label: 'Combustion complète d\'un alcane',
        formula: 'C_n H_{2n+2} + \\left(\\frac{3n+1}{2}\\right) O_2 \\longrightarrow n CO_2 + (n+1) H_2 O',
        explanation: 'Produit exclusivement du CO2 et de l\'eau liquide.'
      }
    ],
    courseSections: [
      {
        title: '1. Comparer les 3 échelles d\'énergie',
        content: [
          '• Physique : Faible énergie (quelques kJ/mol, ex : fusion de la glace).',
          '• Chimique : Moyenne énergie (quelques centaines de kJ/mol, ex : flamme de méthane).',
          '• Nucléaire : Énergie colossale (millions de fois supérieure, ex : fusion de l\'hydrogène au cœur du Soleil).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-star-fusion',
        title: 'Exercice Type Seconde : Fusion Stellaire au Cœur du Soleil',
        context: 'Au cœur du Soleil, à 15 millions de degrés, la réaction nucléaire de fusion entre deux isotopes de l\'hydrogène, le deutérium (²₁H) et le tritium (³₁H), forme un noyau d\'hélium (⁴₂He) et éjecte une particule secondaire.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'space',
        themeLabel: '🚀 Astrophysique & Énergie Stellaire',
        questions: [
          {
            questionText: '1. Écrire l\'équation nucléaire complète et identifier la particule éjectée à l\'aide des lois de conservation de Soddy.',
            hints: ['Poser ²₁H + ³₁H -> ⁴₂He + A_z X.'],
            solutionSteps: [
              'Conservation du nombre de nucléons A : 2 + 3 = 4 + A => A = 1.',
              'Conservation du nombre de charge Z : 1 + 1 = 2 + Z => Z = 0.',
              'La particule de symbole ¹₀n est un neutron.'
            ],
            finalAnswer: '²₁H + ³₁H -> ⁴₂He + ¹₀n (un neutron)',
            pointsAllocated: 3
          },
          {
            questionText: '2. Pourquoi cette réaction dégage-t-elle une énergie incommensurablement plus grande qu\'une réaction chimique classique ?',
            hints: ['Mentionner la perte de masse transformée en énergie via E = mc².'],
            solutionSteps: [
              'Dans une réaction chimique, seule l\'énergie de liaison des électrons périphériques est mise en jeu (quelques eV).',
              'Dans une réaction nucléaire de fusion, une fraction de la masse des nucléons est directement convertie en énergie rayonnante selon la formule d\'Einstein E = Δm · c², libérant des millions d\'électron-volts (MeV) par réaction.'
            ],
            finalAnswer: 'Conversion directe de masse en énergie (E = mc²)',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-nuc-1',
        question: 'Quel est le nombre de neutrons dans le noyau de carbone 14 (¹⁴₆C) ?',
        options: ['8 neutrons', '6 neutrons', '14 neutrons', '2 neutrons'],
        correctIndex: 0,
        explanation: 'N = A - Z = 14 - 6 = 8 neutrons.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - SVT : LA DYNAMIQUE DE LA TERRE & TECTONIQUE DES PLAQUES
  // =========================================================================
  {
    id: 'svt-2nde-dynamique-terre-plaques',
    subjectId: 'svt',
    gradeLevel: '2nde',
    title: 'La Dynamique de la Terre : Structure Interne, Tectonique des Plaques, Séismes & Volcans',
    officialCode: 'SVT-2-05',
    description: 'Modèle en couches concentriques de la Terre (croûte continentale/océanique, manteau lithosphérique et asthénosphérique, noyau), lithosphère rigide découpée en plaques tectoniques mobiles sur l\'asthénosphère ductile, divergence (dorsales océaniques) et convergence (subduction, collision orogénique), origine des séismes et du volcanisme.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Lithosphère : Enveloppe externe rigide d\'environ 100 km d\'épaisseur, comprenant la croûte et le manteau supérieur lithosphérique.',
      'Asthénosphère : Partie ductile du manteau sous-jacent permettant le déplacement lent des plaques lithosphériques (quelques cm par an).',
      'Limites divergentes : Écartement des plaques au niveau des dorsales avec création de nouvelle croûte océanique (accrétion magmatique).',
      'Limites convergentes : Subduction d\'une plaque océanique dense sous une autre plaque, générant fosses marines, séismes profonds et volcanisme explosif.'
    ],
    keyFormulas: [
      {
        label: 'Vitesse de déplacement d\'une plaque',
        formula: 'v = \\frac{d}{\\Delta t} \\quad (\\text{Ordre de grandeur : } 1 \\text{ à } 10 \\text{ cm/an})',
        explanation: 'Calculée grâce aux anomalies magnétiques du plancher océanique ou aux mesures GPS satellites.'
      }
    ],
    courseSections: [
      {
        title: '1. Mécanisme de déclenchement d\'un séisme',
        content: [
          '1. Accumulation continue de contraintes tectoniques élastiques au niveau d\'une faille bloquée.',
          '2. Rupture brutale des roches au foyer (hypocentre) lorsque la contrainte dépasse la résistance.',
          '3. Propagation d\'ondes sismiques (P, S, de surface) dans toutes les directions.',
          '4. Secousses maximales ressenties en surface à la verticale du foyer : l\'épicentre.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-gps-iceland',
        title: 'Exercice Type Seconde : Mesure GPS de l\'Ouverture de l\'Océan Atlantique en Islande',
        context: 'L\'Islande est traversée par le rift de la dorsale médio-atlantique. Deux balises GPS fixes situées de part et d\'autre de la faille indiquent un éloignement relatif de 46 mm en 2 ans.',
        difficulty: 'Facile',
        points: 5,
        themeTag: 'ecologie',
        themeLabel: '🌱 Géophysique & Tectonique Active',
        questions: [
          {
            questionText: '1. Calculer la vitesse d\'expansion océanique annuelle en cm/an.',
            hints: ['v = d / t avec d en cm.'],
            solutionSteps: [
              '46 mm = 4,6 cm.',
              'v = 4,6 cm / 2 ans = 2,3 cm/an.'
            ],
            finalAnswer: 'v = 2,3 cm/an',
            pointsAllocated: 2
          },
          {
            questionText: '2. En supposant cette vitesse constante, calculer l\'élargissement de l\'Atlantique sur une période de 10 millions d\'années (en km).',
            hints: ['Multiplier la vitesse par 10 000 000 ans puis convertir les cm en km.'],
            solutionSteps: [
              'd = 2,3 cm/an × 10 000 000 ans = 23 000 000 cm.',
              '23 000 000 cm = 230 000 m = 230 km.',
              'L\'océan Atlantique s\'élargit d\'environ 230 kilomètres tous les 10 millions d\'années.'
            ],
            finalAnswer: 'Distance = 230 km',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-tec-1',
        question: 'Quelle couche sépare la lithosphère rigide de l\'asthénosphère ductile ?',
        options: ['La LVZ (Low Velocity Zone) vers 100 km de profondeur', 'La discontinuité de Moho', 'Le noyau externe liquide', 'La fosse océanique'],
        correctIndex: 0,
        explanation: 'La LVZ marque une chute de vitesse des ondes sismiques liée à un comportement thermique plus ductile des roches.'
      }
    ]
  },

  // =========================================================================
  // SECONDE - SVT : PROCRÉATION ET SANTÉ
  // =========================================================================
  {
    id: 'svt-2nde-procreation-sexualite-sante',
    subjectId: 'svt',
    gradeLevel: '2nde',
    title: 'Procréation & Santé : Hormones Sexuelles, Contraception et PMA',
    officialCode: 'SVT-2-06',
    description: 'Fonctionnement des appareils reproducteurs féminin et masculin, rétrocontrôles hormonaux de l\'axe hypothalamo-hypophysaire (GnRH, LH, FSH), cycle ovarien et utérin, testostérone, œstrogènes et progestérone, modes d\'action de la contraception hormonale préventive et d\'urgence, Procréation Médicalement Assistée (FIVETE, ICSI).',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Appareil masculin : Production continue de spermatozoïdes dès la puberté stimulée par la testostérone sécrétée par les cellules interstitielles de Leydig.',
      'Appareil féminin : Fonctionnement cyclique synchronisé (28 jours en moyenne) entre l\'ovaire (phase folliculaire, ovulation le 14e jour déclenchée par le pic de LH, phase lutéale) et la muqueuse utérine.',
      'Pilule contraceptive oestroprogestative : Maintient un taux constant d\'hormones de synthèse qui exerce un rétrocontrôle négatif bloquant le pic de LH/FSH : absence d\'ovulation, glaire cervicale imperméable.',
      'PMA : Ensemble des techniques biomédicales (insémination intra-utérine, FIV, ICSI) permettant d\'aider les couples infertiles à concevoir.'
    ],
    keyFormulas: [
      {
        label: 'Axe gonadotrope',
        formula: '\\text{Hypothalamus (GnRH)} \\longrightarrow \\text{Hypophyse (LH, FSH)} \\longrightarrow \\text{Gonades (Stéroïdes sexuels)}',
        explanation: 'Contrôlé par rétroaction hormonale négative (et rétrocontrôle positif temporaire de l\'œstradiol déclenchant l\'ovulation).'
      }
    ],
    courseSections: [
      {
        title: '1. Comprendre l\'action des contraceptifs hormonaux',
        content: [
          '• Blocage de l\'ovulation : Par inhibition de la sécrétion de LH et FSH.',
          '• Épaississement de la glaire cervicale : Bloque le passage des spermatozoïdes.',
          '• Atrophie de l\'endomètre : Empêche la nidation embryonnaire éventuelle.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-2nde-pma-icsi',
        title: 'Exercice Type Seconde : Analyse d\'un Protocole de Fécondation In Vitro avec ICSI',
        context: 'Un couple consulte un centre de PMA suite à un spermogramme révélant une très faible mobilité et un nombre insuffisant de spermatozoïdes chez l\'homme (oligoasthénozoospermie sévère). L\'équipe médicale préconise une ICSI (Injection Intracytoplasmique de Spermatozoïde).',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'science',
        themeLabel: '🧬 Procréation Médicalement Assistée & Santé',
        questions: [
          {
            questionText: '1. Pourquoi la fécondation in vitro classique (FIV) sans micro-injection aurait-elle eu une faible chance de réussite dans cette situation ?',
            hints: ['La FIV classique exige que le spermatozoïde traverse spontanément la zone pellucide de l\'ovocyte.'],
            solutionSteps: [
              'En FIV classique, les spermatozoïdes sont simplement mis en présence de l\'ovocyte dans une boîte de culture.',
              'Si les spermatozoïdes sont peu nombreux et peu mobiles, ils ne parviennent pas à franchir la zone pellucide protectrice de l\'ovocyte.',
              'L\'ICSI contourne cette barrière en injectant directement à l\'aide d\'une micro-pipette un spermatozoïde unique au cœur du cytoplasme ovocytaire.'
            ],
            finalAnswer: 'Impossibilité pour les spermatozoïdes peu mobiles de perforer la zone pellucide',
            pointsAllocated: 3
          },
          {
            questionText: '2. Quel traitement hormonal la femme doit-elle recevoir avant la ponction des ovocytes ?',
            hints: ['Mentionner la stimulation ovarienne par injections de FSH.'],
            solutionSteps: [
              'Elle reçoit une stimulation ovarienne par injections d\'hormone folliculo-stimulante (FSH).',
              'Cela permet la maturation simultanée de plusieurs follicules ovariens (au lieu d\'un seul) afin de récolter un nombre suffisant d\'ovocytes matures lors de la ponction.'
            ],
            finalAnswer: 'Traitement à base de FSH pour recruter et faire mûrir plusieurs follicules',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-pro-1',
        question: 'Quel événement hormonal direct provoque l\'ovulation le 14e jour du cycle ?',
        options: ['Un pic massif de sécrétion de LH (hormone lutéinisante)', 'Une chute brutale de la progestérone', 'Une disparition de la testostérone', 'Une absence totale de GnRH'],
        correctIndex: 0,
        explanation: 'Le pic de LH (déclenché par le rétrocontrôle positif d\'œstradiol élevé) est le signal biologique déclencheur de la rupture du follicule ovarien.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - PC : SUIVI RÉACTION & AVANCEMENT
  // =========================================================================
  {
    id: 'pc-1ere-suivi-reaction-avancement',
    subjectId: 'physique-chimie',
    gradeLevel: '1ere',
    title: 'Suivi Temporel d\'une Réaction Chimique : Tableau d\'Avancement & Réactif Limitant',
    officialCode: 'PC-1-06',
    description: 'Notion d\'avancement x de réaction (en mol), avancement maximal xmax, réactif limitant, construction rigoureuse du tableau d\'avancement, composition du système à l\'état final et bilan de matière pour les mélanges stœchiométriques.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Avancement x (en mol) : Grandeur qui quantifie la progression d\'une réaction chimique. À l\'état initial, x = 0.',
      'Réactif limitant : Réactif entièrement consommé en premier, qui stoppe la réaction.',
      'Avancement maximal xmax : La plus petite des valeurs x pour laquelle la quantité de matière d\'un des réactifs s\'annule : xmax = min(n0(A)/a, n0(B)/b).',
      'Mélange stœchiométrique : Les quantités initiales de réactifs respectent exactement les coefficients de l\'équation bilan : n0(A)/a = n0(B)/b. Tous les réactifs sont épuisés simultanément à la fin.'
    ],
    keyFormulas: [
      {
        label: 'Détermination du réactif limitant',
        formula: 'a A + b B \\longrightarrow c C + d D \\implies x_{\\max} = \\min\\left(\\frac{n_0(A)}{a}, \\frac{n_0(B)}{b}\\right)',
        explanation: 'Le réactif associé au plus petit rapport initial / coefficient est limitant.'
      },
      {
        label: 'Quantité de matière restante à l\'état x',
        formula: 'n(A) = n_0(A) - a \\cdot x \\quad ; \\quad n(C) = n_0(C) + c \\cdot x',
        explanation: 'Bilan de matière ligne par ligne du tableau d\'avancement.'
      }
    ],
    courseSections: [
      {
        title: '1. Méthode universelle du tableau d\'avancement',
        content: [
          '1. Vérifier que l\'équation chimique est parfaitement équilibrée en éléments et en charges.',
          '2. Calculer les quantités de matière initiales n0 en mol (via n = m/M ou n = C·V).',
          '3. Remplir la ligne état initial (x = 0), état intermédiaire (x) et état final (xmax).',
          '4. Poser les deux hypothèses de disparition pour calculer xmax1 et xmax2 et retenir le minimum.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-spacex-methalox',
        title: 'Exercice Type Première : Bilan de Combustion du Moteur Raptor de Starship',
        context: 'Le moteur spatial Raptor de SpaceX fonctionne avec un mélange méthane / oxygène liquide (Méthalox). L\'équation de combustion est : CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(g). Dans une micro-chambre de test, on injecte n0(CH4) = 5,0 mol et n0(O2) = 8,0 mol.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'space',
        themeLabel: '🚀 Propulsion Spatiale & Stœchiométrie',
        questions: [
          {
            questionText: '1. Déterminer le réactif limitant et la valeur de l\'avancement maximal xmax.',
            hints: ['Calculer xmax si CH4 s\'annule, puis si O2 s\'annule.'],
            solutionSteps: [
              'Hypothèse 1 (CH4 limitant) : 5,0 - 1·x = 0 => xmax1 = 5,0 mol.',
              'Hypothèse 2 (O2 limitant) : 8,0 - 2·x = 0 => xmax2 = 8,0 / 2 = 4,0 mol.',
              'Comme 4,0 < 5,0, le réactif limitant est le dioxygène O2 et xmax = 4,0 mol.'
            ],
            finalAnswer: 'O2 limitant, xmax = 4,0 mol',
            pointsAllocated: 3
          },
          {
            questionText: '2. Établir le bilan de matière complet à l\'état final (quantités de chaque espèce en mol).',
            hints: ['Remplacer x par 4,0 mol dans chaque case de l\'état final.'],
            solutionSteps: [
              'n_final(CH4) = 5,0 - 1 × 4,0 = 1,0 mol restant.',
              'n_final(O2) = 8,0 - 2 × 4,0 = 0 mol (entièrement consommé).',
              'n_final(CO2) = 0 + 1 × 4,0 = 4,0 mol formées.',
              'n_final(H2O) = 0 + 2 × 4,0 = 8,0 mol formées.'
            ],
            finalAnswer: '1,0 mol CH4 ; 0 mol O2 ; 4,0 mol CO2 ; 8,0 mol H2O',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-avan-1',
        question: 'Pour la réaction 2 Al + 3 Cl2 -> 2 AlCl3 avec 4 mol de Al et 9 mol de Cl2, qui est le réactif limitant ?',
        options: ['L\'aluminium Al (xmax = 2 mol)', 'Le chlore Cl2 (xmax = 3 mol)', 'Les deux en proportions stœchiométriques', 'Le produit AlCl3'],
        correctIndex: 0,
        explanation: 'Pour Al : 4 / 2 = 2 mol. Pour Cl2 : 9 / 3 = 3 mol. Le plus petit rapport est 2 mol, donc Al est limitant.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - PC : RÉACTIONS ACIDO-BASIQUES & PH
  // =========================================================================
  {
    id: 'pc-1ere-acide-base-ph',
    subjectId: 'physique-chimie',
    gradeLevel: '1ere',
    title: 'Réactions Acido-Basiques : Couples Acide/Base, Transfert de Proton et Mesure du pH',
    officialCode: 'PC-1-07',
    description: 'Définition d\'un acide et d\'une base selon Brönsted, transfert d\'ion hydrogène H⁺ (proton), couples acide/base conjugués AH/A⁻, espèces amphotères (comme l\'eau H2O), relation fondamentale entre pH et concentration en ions oxonium [H3O⁺], et mesure par papier pH ou pH-mètre.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Acide de Brönsted : Espèce chimique capable de céder au moins un proton H⁺ (ex: CH3COOH, HCl).',
      'Base de Brönsted : Espèce chimique capable de capter au moins un proton H⁺ (ex: NH3, HO⁻, CH3COO⁻).',
      'Équation acido-basique : Transfert de proton entre l\'acide du couple 1 et la base du couple 2 : AH1 + A2⁻ ⇄ A1⁻ + AH2.',
      'Définition du pH : Mesure de l\'acidité d\'une solution aqueuse : pH = -log10([H3O⁺]/C°) et [H3O⁺] = C° · 10^(-pH).'
    ],
    keyFormulas: [
      {
        label: 'Relation pH et concentration en H3O⁺',
        formula: '\\text{pH} = -\\log_{10}\\left(\\frac{[H_3O^+]}{C^\\circ}\\right) \\iff [H_3O^+] = C^\\circ \\cdot 10^{-\\text{pH}}',
        explanation: 'C° = 1 mol/L (concentration standard). pH sans unité, [H3O⁺] en mol/L.'
      },
      {
        label: 'Produit ionique de l\'eau (à 25 °C)',
        formula: 'K_e = [H_3O^+] \\cdot [HO^-] = 1{,}0 \\times 10^{-14} \\implies \\text{pH}_{\\text{neutre}} = 7{,}0',
        explanation: 'Valable dans toute solution aqueuse à 25 °C.'
      }
    ],
    courseSections: [
      {
        title: '1. Reconnaître les couples conjugués usuels',
        content: [
          '• Acide éthanoïque / Ion éthanoate : CH3COOH / CH3COO⁻',
          '• Ion ammonium / Ammoniac : NH4⁺ / NH3',
          '• Eau comme acide : H2O / HO⁻ (ion hydroxyde)',
          '• Eau comme base : H3O⁺ / H2O (ion oxonium)'
        ],
        proTip: 'L\'eau H2O est une espèce amphotère (ou ampholyte) car elle peut se comporter à la fois comme un acide et comme une base selon son partenaire de réaction.'
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-energy-drink-ph',
        title: 'Exercice Type Première : Acidité d\'une Boisson Énergétique Monster / Red Bull',
        context: 'Une canette de boisson énergisante contient de l\'acide citrique. Un technicien de laboratoire mesure au pH-mètre une valeur pH = 2,70 à 25 °C.',
        difficulty: 'Facile',
        points: 5,
        themeTag: 'sport',
        themeLabel: '🏎️ Nutrition Sportive & Acidité',
        questions: [
          {
            questionText: '1. Calculer la concentration molaire en ions oxonium [H3O⁺] dans cette boisson.',
            hints: ['Utiliser [H3O⁺] = 10^(-pH).'],
            solutionSteps: [
              '[H3O⁺] = 10^(-2,70) mol/L.',
              '[H3O⁺] = 2,00 × 10⁻³ mol/L = 2,0 mmol/L.'
            ],
            finalAnswer: '[H3O⁺] = 2,0 × 10⁻³ mol/L',
            pointsAllocated: 2
          },
          {
            questionText: '2. Si le sportif dilue sa boisson au dixième avec de l\'eau pure, quelle sera la nouvelle valeur du pH ?',
            hints: ['Quand la concentration est divisée par 10, le pH augmente de 1 unité.'],
            solutionSteps: [
              '[H3O⁺]\' = [H3O⁺] / 10 = 2,0 × 10⁻⁴ mol/L.',
              'pH\' = -log(2,0 × 10⁻⁴) = -(-3,70) = 3,70.',
              'Une dilution d\'un facteur 10 augmente le pH d\'exactement une unité.'
            ],
            finalAnswer: 'Nouveau pH = 3,70',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-ph-1',
        question: 'Si le pH d\'une solution passe de 3 à 5, la concentration en ions oxonium [H3O⁺] a été :',
        options: ['Divisée par 100', 'Diminuée de 2 mol/L', 'Multipliée par 100', 'Divisée par 2'],
        correctIndex: 0,
        explanation: 'ΔpH = +2 correspond à une division de la concentration par 10² = 100.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - SVT : ÉCOSYSTÈMES ET SERVICES
  // =========================================================================
  {
    id: 'svt-1ere-ecosystemes-services-interactions',
    subjectId: 'svt',
    gradeLevel: '1ere',
    title: 'Écosystèmes & Services Écosystémiques : Flux de Matière, Énergie et Résilience',
    officialCode: 'SVT-1-05',
    description: 'Structure d\'un écosystème (biocénose et biotope), réseaux trophiques, productivité primaire et biomasse, cycles biogéochimiques (carbone, azote), services écosystémiques rendus à l\'humanité (approvisionnement, régulation, culturels) et perturbation/résilience écologique face aux activités humaines.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Écosystème = Biotope (milieu physique physico-chimique) + Biocénose (communauté des êtres vivants en interaction).',
      'Producteurs primaires autotrophes (végétaux chlorophylliens) : Convertissent l\'énergie solaire en énergie chimique par photosynthèse, fixant le carbone minéral en matière organique.',
      'Pertes trophiques : À chaque niveau trophique (producteur -> consommateur I -> consommateur II), environ 90% de l\'énergie est dissipée sous forme de respiration et chaleur (rendement écologique de ~10%).',
      'Services de régulation : Séquestration du carbone forestier, filtration de l\'eau par les zones humides, pollinisation des cultures par les insectes sauvages.'
    ],
    keyFormulas: [
      {
        label: 'Rendement écologique de production',
        formula: 'R = \\frac{\\text{Biomasse produite au niveau } n+1}{\\text{Biomasse consommée du niveau } n} \\approx 10\\%',
        explanation: 'Explique pourquoi les chaînes trophiques dépassent rarement 4 ou 5 maillons.'
      }
    ],
    courseSections: [
      {
        title: '1. Les quatre catégories de services écosystémiques',
        content: [
          '• Services d\'approvisionnement : Bois, eau douce, denrées alimentaires, molécules thérapeutiques.',
          '• Services de régulation : Climat, inondations, érosion des sols, qualité de l\'air.',
          '• Services de soutien : Pédogenèse, recyclage des nutriments, photosynthèse.',
          '• Services culturels : Valeur récréative, esthétique et touristique.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-amazon-carbon-sink',
        title: 'Exercice Type Première : Bilan Carbone et Résilience d\'une Forêt Primaire',
        context: 'Une forêt tropicale humide capte 14,0 tonnes de CO2 atmosphérique par hectare et par an via la photosynthèse brute de sa canopée. En contrepartie, la respiration cellulaire de l\'ensemble des végétaux, animaux et décomposeurs du sol rejette 11,2 tonnes de CO2/ha/an.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'ecologie',
        themeLabel: '🌱 Climat & Séquestration du Carbone',
        questions: [
          {
            questionText: '1. Calculer la productivité nette de l\'écosystème forestier (quantité nette de CO2 stockée par an et par hectare).',
            hints: ['P_nette = Flux absorbé - Flux rejeté.'],
            solutionSteps: [
              'P_nette = 14,0 t/ha/an - 11,2 t/ha/an = +2,8 tonnes de CO2/ha/an.',
              'Comme la productivité nette est positive, cette forêt se comporte comme un "puits de carbone" actif.'
            ],
            finalAnswer: '+2,8 tonnes de CO2 / ha / an (puits de carbone)',
            pointsAllocated: 3
          },
          {
            questionText: '2. En cas de déforestation par brûlis sur 5 000 hectares, évaluer l\'impact immédiat sur le bilan d\'émissions de gaz à effet de serre.',
            hints: ['Perte de la capacité de stockage et combustion de la biomasse accumulée.'],
            solutionSteps: [
              '1. Perte du puits annuel : 5 000 ha × 2,8 t = 14 000 tonnes de CO2 qui ne sont plus absorbées chaque année.',
              '2. Libération massive immédiate du stock de carbone accumulé dans les troncs et le sol par combustion directe.',
              'Conclusion : L\'écosystème bascule instantanément d\'un rôle de puits protecteur à celui d\'émetteur massif de GES.'
            ],
            finalAnswer: 'Perte d\'absorption de 14 000 t CO2/an + rejet immédiat du stock',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-eco-1',
        question: 'Quel est le rôle prépondérant des décomposeurs (bactéries, champignons, lombrics) dans le sol ?',
        options: ['Recycler la nécromasse en matière minérale réutilisable par les plantes', 'Produire de la chlorophylle', 'Bloquer le cycle de l\'azote', 'Consommer le dioxygène de l\'atmosphère'],
        correctIndex: 0,
        explanation: 'Les décomposeurs minéralisent la matière organique morte, refermant les cycles biogéochimiques.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - SVT : GÉNÉTIQUE ET SANTÉ
  // =========================================================================
  {
    id: 'svt-1ere-genetique-sante-antibiotiques',
    subjectId: 'svt',
    gradeLevel: '1ere',
    title: 'Génétique & Santé : Altérations du Génome, Cancers et Antibiorésistance',
    officialCode: 'SVT-1-06',
    description: 'Mutations germinales et somatiques, agents mutagènes (UV, benzène, tabac), gènes de prédisposition, oncogènes et gènes suppresseurs de tumeurs (p53), apparition et sélection naturelle des bactéries résistantes aux antibiotiques par pression sélective.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Mutations germinales : Touchent les cellules sexuelles (gamètes), transmissibles à la descendance (maladies héréditaires comme la mucoviscidose).',
      'Mutations somatiques : Touchent les cellules d\'un tissu donné de l\'individu (non transmissibles), pouvant conduire à la cancérisation.',
      'Cancérogenèse : Processus multi-étapes combinant mutations d\'oncogènes (qui stimulent la prolifération incontrôlée) et d\'anti-oncogènes comme p53 (gardiens du génome induisant normalement l\'apoptose).',
      'Antibiorésistance : Les mutations conférant une résistance aux antibiotiques apparaissent spontanément et au hasard. L\'utilisation excessive d\'antibiotiques constitue une pression de sélection qui élimine les bactéries sensibles et sélectionne les mutants résistants.'
    ],
    keyFormulas: [
      {
        label: 'Sélection darwinienne des résistances',
        formula: '\\text{Population bactérienne hétérogène} + \\text{Antibiotique} \\implies \\text{Survie exclusive des mutants résistants}',
        explanation: 'L\'antibiotique ne provoque pas la mutation, il la sélectionne.'
      }
    ],
    courseSections: [
      {
        title: '1. Prévenir l\'échappement bactérien',
        content: [
          '• Respecter impérativement la durée des traitements prescrits.',
          '• Ne jamais utiliser d\'antibiotiques contre une infection virale (inutiles contre les virus).',
          '• Alterner les familles thérapeutiques en milieu hospitalier (antibiogramme).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-antibiogram-hospital',
        title: 'Exercice Type Première : Analyse d\'un Antibiogramme de Staphylococcus Aureus Résistant',
        context: 'Dans un service hospitalier, on étudie une souche bactérienne de Staphylocoque doré isolée chez un patient. On dépose sur une boîte de culture des pastilles imbibées de quatre antibiotiques différents (Pénicilline, Érythromycine, Tétracycline, Vancomycine) et on mesure le diamètre de la zone d\'inhibition (halo clair sans croissance bactérienne).',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'science',
        themeLabel: '🧬 Microbiologie Médicale & Antibiogrammes',
        questions: [
          {
            questionText: '1. Pour la Pénicilline, le diamètre d\'inhibition est de 0 mm (les bactéries poussent au contact direct de la pastille). Interpréter ce résultat.',
            hints: ['Diamètre nul = aucune efficacité inhibitrice.'],
            solutionSteps: [
              'Le diamètre d\'inhibition nul indique que la molécule antibiotique n\'exerce aucun effet toxique ou bloquant sur la souche bactérienne.',
              'La souche est donc totalement résistante à la pénicilline (par exemple par production d\'une enzyme bêta-lactamase qui détruit l\'antibiotique).'
            ],
            finalAnswer: 'Souche résistante à la pénicilline (efficacité nulle)',
            pointsAllocated: 3
          },
          {
            questionText: '2. Pour la Vancomycine, la zone d\'inhibition atteint un diamètre de 28 mm (très supérieur au seuil critique de 18 mm). Que doit prescrire le médecin ?',
            hints: ['Comparer le diamètre mesuré au diamètre critique de sensibilité.'],
            solutionSteps: [
              'Le diamètre mesuré (28 mm) est largement supérieur au diamètre critique (18 mm).',
              'Cela signifie que la souche bactérienne est hautement sensible à la Vancomycine.',
              'Le médecin doit prescrire la Vancomycine pour traiter efficacement l\'infection du patient.'
            ],
            finalAnswer: 'Prescription de la Vancomycine (souche hautement sensible)',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-med-1',
        question: 'Pourquoi les antibiotiques sont-ils inefficaces contre la grippe ou la bronchiolite ?',
        options: ['Parce que ce sont des infections causées par des virus et non des bactéries', 'Parce que les virus sont trop gros', 'Parce que les antibiotiques ne fonctionnent que dans l\'eau', 'Parce que le foie les détruit instantanément'],
        correctIndex: 0,
        explanation: 'Les antibiotiques ciblent des structures cellulaires bactériennes (paroi, ribosomes bactériens) absentes chez les virus.'
      }
    ]
  }
];
