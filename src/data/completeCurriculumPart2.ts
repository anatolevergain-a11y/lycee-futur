import { Chapter } from '../types';

export const COMPLETE_CHAPTERS_PART2: Chapter[] = [
  // =========================================================================
  // PREMIÈRE - MATHÉMATIQUES : NOMBRE DÉRIVÉ & VARIATIONS
  // =========================================================================
  {
    id: 'math-1ere-variations-derivation',
    subjectId: 'maths',
    gradeLevel: '1ere',
    title: 'Nombre Dérivé, Fonction Dérivée & Étude des Variations',
    officialCode: 'MATH-1-04',
    description: 'Définition du taux de variation et du nombre dérivé f\'(a), équation de la tangente, tableau des dérivées usuelles, règles opératoires (uv, u/v) et théorème fondamental liant le signe de la dérivée aux variations de f.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Nombre dérivé f\'(a) : Limite quand h tend vers 0 du taux d\'accroissement (f(a+h) - f(a))/h.',
      'Équation de la tangente au point d\'abscisse a : y = f\'(a)(x - a) + f(a).',
      'Théorème des variations : Si f\'(x) > 0 sur I, f est strictement croissante ; si f\'(x) < 0, f est strictement décroissante.',
      'Extremum local : Si f\' s\'annule en changeant de signe en x0, alors f admet un extremum local en x0.'
    ],
    keyFormulas: [
      {
        label: 'Équation de la tangente',
        formula: 'y = f\'(a)(x - a) + f(a)',
        explanation: 'Droite d\'approximation affine au voisinage du point A(a, f(a)).'
      },
      {
        label: 'Dérivée d\'un produit et d\'un quotient',
        formula: '(uv)\' = u\'v + uv\' \\quad ; \\quad \\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}',
        explanation: 'Valable pour v non nul. Attention au signe moins dans la formule du quotient.'
      },
      {
        label: 'Dérivées polynomiales usuelles',
        formula: '(x^n)\' = n x^{n-1} \\quad ; \\quad \\left(\\frac{1}{x}\\right)\' = -\\frac{1}{x^2} \\quad ; \\quad (\\sqrt{x})\' = \\frac{1}{2\\sqrt{x}}',
        explanation: 'Bases indispensables pour toute dérivation en Première et Terminale.'
      }
    ],
    courseSections: [
      {
        title: '1. Interprétation géométrique et cinématique',
        content: [
          '• Géométrie : f\'(a) est la pente (coefficient directeur) de la tangente à la courbe Cf au point A(a, f(a)).',
          '• Physique : Si x(t) est la position d\'un mobile en fonction du temps, la dérivée x\'(t) est la vitesse instantanée v(t).'
        ],
        proTip: 'Pour déterminer f\'(a) graphiquement, choisissez deux points précis sur la tangente tracée et calculez Δy / Δx.'
      },
      {
        title: '2. Méthode universelle d\'étude des variations',
        content: [
          '1. Déterminer l\'ensemble de dérivabilité.',
          '2. Calculer f\'(x) en appliquant soigneusement les formules opératoires.',
          '3. Factoriser f\'(x) ou étudier son signe (souvent via un polynôme du second degré ax² + bx + c).',
          '4. Dresser le tableau de variations complet en calculant f(x) aux bornes et aux extremums.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-derivation-gaming',
        title: 'Problème Résolu : Optimisation Mathématique du DPS d\'un Mage dans un Action-RPG',
        context: 'Dans un jeu vidéo compétitif, un joueur peut investir x points d\'amélioration (x ∈ [0 ; 10]) dans un attribut d\'amplification magique. La formule des dégâts nets par seconde (DPS en milliers de points) infligés par son combo est donnée par la fonction f(x) = -2x³ + 27x² - 60x + 100.',
        difficulty: 'Moyen',
        points: 7,
        themeTag: 'gaming',
        themeLabel: '🎮 Théorie du Build & DPS Optimal',
        questions: [
          {
            questionText: '1. Déterminer la fonction dérivée f\'(x) pour tout réel x ∈ [0 ; 10].',
            hints: ['Dériver terme à terme en utilisant (x³)\' = 3x² et (x²)\' = 2x.'],
            solutionSteps: [
              'f(x) = -2x³ + 27x² - 60x + 100.',
              'f\'(x) = -2(3x²) + 27(2x) - 60(1) + 0.',
              'f\'(x) = -6x² + 54x - 60.'
            ],
            finalAnswer: 'f\'(x) = -6x² + 54x - 60',
            pointsAllocated: 2
          },
          {
            questionText: '2. Étudier le signe du trinôme f\'(x) sur l\'intervalle [0 ; 10].',
            hints: ['Mettre -6 en facteur ou calculer le discriminant Δ = b² - 4ac.'],
            solutionSteps: [
              'On factorise par -6 : f\'(x) = -6(x² - 9x + 10).',
              'Calculons le discriminant de x² - 9x + 10 : Δ = (-9)² - 4(1)(10) = 81 - 40 = 41.',
              'Les racines sont x1 = (9 - √41)/2 ≈ 1,29 et x2 = (9 + √41)/2 ≈ 7,71.',
              'Comme le coefficient dominant a = -6 est négatif, la parabole est orientée vers le bas :',
              'f\'(x) < 0 sur [0 ; 1,29[, f\'(x) > 0 sur ]1,29 ; 7,71[, f\'(x) < 0 sur ]7,71 ; 10].'
            ],
            finalAnswer: 'Positif sur ]1,29 ; 7,71[, négatif ailleurs sur [0 ; 10]',
            pointsAllocated: 3
          },
          {
            questionText: '3. En déduire la répartition optimale de points x pour maximiser le DPS du joueur.',
            hints: ['Repérer le changement de signe de f\' de positif à négatif.'],
            solutionSteps: [
              'La dérivée f\' s\'annule en changeant de signe (+ vers -) en x2 ≈ 7,71.',
              'Calcul de la valeur exacte du pic de dégâts : f(7,71) ≈ 324,5 milliers de DPS.',
              'Conclusion gameplay : Le joueur doit allouer 8 points d\'amélioration (l\'entier le plus proche de 7,71) pour obtenir un DPS maximal.'
            ],
            finalAnswer: 'x = 8 points (DPS max ≈ 324 500)',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-math-1-der1',
        question: 'Quelle est la dérivée de la fonction f(x) = (2x + 1)(3x - 4) ?',
        options: ['12x - 5', '6x - 5', '12x + 5', '6x² - 5x - 4'],
        correctIndex: 0,
        explanation: 'En développant f(x) = 6x² - 5x - 4, on dérive : f\'(x) = 12x - 5.'
      },
      {
        id: 'q-math-1-der2',
        question: 'Si f\'(3) = 0 et f\' passe du positif au négatif en 3, que peut-on affirmer ?',
        options: [
          'f admet un maximum local en x = 3',
          'f admet un minimum local en x = 3',
          'f coupe l\'axe des abscisses en 3',
          'La fonction est constante sur ℝ'
        ],
        correctIndex: 0,
        explanation: 'La fonction croît avant 3 puis décroît après 3 : le point d\'abscisse 3 est un sommet (maximum local).'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - MATHÉMATIQUES : VARIABLES ALÉATOIRES & ESPÉRANCE
  // =========================================================================
  {
    id: 'math-1ere-variables-aleatoires',
    subjectId: 'maths',
    gradeLevel: '1ere',
    title: 'Variables Aléatoires Discrètes, Espérance & Écart-Type',
    officialCode: 'MATH-1-05',
    description: 'Modélisation du hasard par une variable aléatoire X, loi de probabilité P(X = xi), espérance mathématique E(X), variance V(X), écart-type σ(X) et linéarité de l\'espérance E(aX + b) = aE(X) + b.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Variable aléatoire X : Fonction qui associe un nombre réel à chaque issue élémentaire de l\'univers Ω.',
      'Loi de probabilité : Tableau donnant les valeurs xi prises par X et les probabilités correspondantes pi = P(X = xi). La somme des pi vaut toujours 1.',
      'Espérance mathématique E(X) = Σ pi xi : Moyenne théorique que l\'on peut espérer obtenir si l\'expérience est répétée un très grand nombre de fois.',
      'Jeu équitable : Un jeu de hasard est dit équitable si son espérance de gain algébrique est nulle (E(X) = 0).'
    ],
    keyFormulas: [
      {
        label: 'Espérance mathématique E(X)',
        formula: 'E(X) = \\sum_{i=1}^{n} p_i x_i = p_1 x_1 + p_2 x_2 + \\dots + p_n x_n',
        explanation: 'Valeur moyenne pondérée par les probabilités.'
      },
      {
        label: 'Variance et Écart-Type',
        formula: 'V(X) = E(X^2) - [E(X)]^2 \\quad ; \\quad \\sigma(X) = \\sqrt{V(X)}',
        explanation: 'Mesure de la dispersion des gains autour de l\'espérance (formule de Koenig-Huygens).'
      },
      {
        label: 'Propriétés de transformation affine',
        formula: 'E(aX + b) = a E(X) + b \\quad ; \\quad V(aX + b) = a^2 V(X) \\quad ; \\quad \\sigma(aX + b) = |a| \\sigma(X)',
        explanation: 'Très utile lors du changement d\'unité ou de tarification.'
      }
    ],
    courseSections: [
      {
        title: '1. Comprendre l\'espérance dans la prise de décision',
        content: [
          '• Si E(X) > 0, l\'expérience est avantageuse pour le joueur à long terme.',
          '• Si E(X) < 0, l\'expérience est défavorable (système des jeux d\'argent commerciaux).',
          '• L\'écart-type quantifie la volatilité ou le risque pris.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-lootbox-probabilites',
        title: 'Exercice Type Première : Modélisation Statistique d\'une Lootbox de Jeu Vidéo F2P',
        context: 'Un jeu multijoueur Free-to-Play propose l\'ouverture d\'un coffre mystère (lootbox) coûtant 500 gemmes virtuelles (valeur 5 €). Le coffre contient un seul objet : 80% de chance d\'obtenir un skin "Commun" (valeur 100 gemmes), 15% pour un skin "Rare" (valeur 600 gemmes), 4% pour un skin "Épique" (valeur 2 000 gemmes) et 1% pour un skin "Légendaire" (valeur 10 000 gemmes). On note X le gain net du joueur (valeur de l\'objet - coût d\'entrée de 500 gemmes).',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'gaming',
        themeLabel: '🎮 Lootboxes & Rentabilité Financière',
        questions: [
          {
            questionText: '1. Déterminer les valeurs possibles prises par la variable aléatoire X et dresser son tableau de loi de probabilité.',
            hints: ['Calculer gain net = valeur remportée - 500.'],
            solutionSteps: [
              'Pour le skin Commun : x1 = 100 - 500 = -400 gemmes (perte nette). Probabilité p1 = 0,80.',
              'Pour le skin Rare : x2 = 600 - 500 = +100 gemmes. Probabilité p2 = 0,15.',
              'Pour le skin Épique : x3 = 2 000 - 500 = +1 500 gemmes. Probabilité p3 = 0,04.',
              'Pour le skin Légendaire : x4 = 10 000 - 500 = +9 500 gemmes. Probabilité p4 = 0,01.',
              'Vérification de la somme des probabilités : 0,80 + 0,15 + 0,04 + 0,01 = 1,00.'
            ],
            finalAnswer: 'X ∈ {-400 ; +100 ; +1500 ; +9500}',
            pointsAllocated: 2
          },
          {
            questionText: '2. Calculer l\'espérance mathématique E(X) de cette variable aléatoire. Interpréter ce résultat.',
            hints: ['E(X) = Σ (xi × pi).'],
            solutionSteps: [
              'E(X) = (-400 × 0,80) + (100 × 0,15) + (1 500 × 0,04) + (9 500 × 0,01).',
              'E(X) = -320 + 15 + 60 + 95 = -150 gemmes.',
              'Interprétation : En moyenne, à chaque ouverture de coffre, le joueur perd 150 gemmes (soit 1,50 €). Le jeu est structurellement défavorable au joueur et assure une marge brute de 30% à l\'éditeur.'
            ],
            finalAnswer: 'E(X) = -150 gemmes (-1,50 € / coffre)',
            pointsAllocated: 2
          },
          {
            questionText: '3. Si un joueur ouvre 100 coffres au cours de l\'année, quelle est son espérance totale de perte ?',
            hints: ['Utiliser la linéarité de l\'espérance pour la somme des 100 ouvertures.'],
            solutionSteps: [
              'Soit S la somme des gains nets sur 100 ouvertures indépendantes : E(S) = 100 × E(X).',
              'E(S) = 100 × (-150) = -15 000 gemmes (soit une perte moyenne nette de 150 €).',
              'Le joueur aura dépensé 500 € pour ne récupérer en moyenne que l\'équivalent de 350 € de skins.'
            ],
            finalAnswer: 'Perte moyenne totale : -15 000 gemmes (-150 €)',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-math-1-var1',
        question: 'Si E(X) = 4 et Y = 3X - 2, que vaut l\'espérance E(Y) ?',
        options: ['10', '12', '14', '2'],
        correctIndex: 0,
        explanation: 'Par linéarité de l\'espérance, E(3X - 2) = 3 E(X) - 2 = 3(4) - 2 = 12 - 2 = 10.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - PHYSIQUE-CHIMIE : SPECTROPHOTOMÉTRIE & BEER-LAMBERT
  // =========================================================================
  {
    id: 'pc-1ere-couleurs-spectrophotometrie',
    subjectId: 'physique-chimie',
    gradeLevel: '1ere',
    title: 'Couleur des Objets, Synthèse Soustractive & Loi de Beer-Lambert',
    officialCode: 'PC-1-04',
    description: 'Absorption de la lumière, cercle chromatique, couleur complémentaire, spectre d\'absorption UV-visible, transmittance T, absorbance A et dosage spectrophotométrique par étalonnage (Loi de Beer-Lambert A = ε · ℓ · C).',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Couleur perçue : Couleur complémentaire de celle qui est principalement absorbée par la solution (opposée sur le cercle chromatique).',
      'Une solution qui absorbe dans le bleu-vert (autour de 480-500 nm) apparaîtra rouge-orangée à l\'œil nu.',
      'Loi de Beer-Lambert : Pour des solutions diluées (C < 0,01 mol/L), l\'absorbance A est strictement proportionnelle à la concentration molaire C : A = k · C.',
      'Choix de la longueur d\'onde de travail λmax : On règle toujours le spectrophotomètre sur la longueur d\'onde où l\'absorbance de l\'espèce est maximale afin de maximiser la sensibilité de la mesure.'
    ],
    keyFormulas: [
      {
        label: 'Loi de Beer-Lambert',
        formula: 'A = \\varepsilon_{\\lambda} \\cdot \\ell \\cdot C = k \\cdot C',
        explanation: 'A sans unité, ε en L/(mol·cm), ℓ épaisseur de la cuve en cm, C en mol/L.'
      },
      {
        label: 'Absorbance et Transmittance',
        formula: 'A = -\\log_{10}(T) = -\\log_{10}\\left(\\frac{I}{I_0}\\right)',
        explanation: 'Plus la solution est opaque et concentrée, plus T diminue et plus A augmente.'
      }
    ],
    courseSections: [
      {
        title: '1. Méthode du dosage par étalonnage spectrophotométrique',
        content: [
          '1. Préparer une échelle de teintes par dilution d\'une solution mère de concentration connue C0.',
          '2. Réaliser le "blanc" avec le solvant pur (eau distillée) pour calibrer le zéro du spectrophotomètre.',
          '3. Mesurer l\'absorbance A des différentes solutions étalons à la longueur d\'onde optimale λmax.',
          '4. Tracer la droite d\'étalonnage A = f(C) passant par l\'origine.',
          '5. Mesurer l\'absorbance Ax de la solution inconnue et lire graphiquement (ou par calcul Ax / k) sa concentration Cx.'
        ],
        proTip: 'Si l\'absorbance mesurée dépasse 2, le détecteur sature et la proportionnalité n\'est plus respectée. Il faut diluer la solution.'
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-oxymetre-applewatch',
        title: 'Problème Résolu : Fonctionnement Optique du Capteur SpO₂ d\'une Montre Connectée',
        context: 'Les montres connectées (Apple Watch, Garmin) mesurent la saturation en oxygène du sang (SpO₂) à l\'aide de micro-LEDs rouge (660 nm) et infrarouge (940 nm). L\'hémoglobine désoxygénée (Hb) absorbe fortement le rouge (εHb = 3 200 L/(mol·cm)), tandis que l\'oxyhémoglobine (HbO₂) absorbe peu le rouge (εHbO2 = 350 L/(mol·cm)). Pour un capillaire de micro-épaisseur ℓ = 0,080 cm, on analyse l\'absorbance du sang d\'un sportif à 660 nm.',
        difficulty: 'Moyen',
        points: 7,
        themeTag: 'tech',
        themeLabel: '📱 Capteurs Optiques & Santé Connectée',
        questions: [
          {
            questionText: '1. Pourquoi le sang artériel riche en dioxygène apparaît-il rouge vif alors que le sang veineux pauvre en oxygène est rouge sombre ?',
            hints: ['Lier l\'absorption des longueurs d\'onde à la couleur complémentaire transmise.'],
            solutionSteps: [
              'L\'oxyhémoglobine absorbe très peu le rouge (faible absorbance à 660 nm) et transmet/diffuse la lumière rouge vers l\'œil de l\'observateur, conférant une couleur rouge éclatante.',
              'L\'hémoglobine désoxygénée absorbe 10 fois plus de lumière dans le rouge, atténuant l\'intensité lumineuse réfléchie, ce qui rend le sang plus sombre.'
            ],
            finalAnswer: 'Hb absorbe le rouge, tandis que HbO2 diffuse le rouge',
            pointsAllocated: 2
          },
          {
            questionText: '2. Un échantillon de sang désoxygéné pur a une concentration CHb = 2,2 × 10⁻³ mol/L. Calculer son absorbance théorique A660 à travers le capillaire (ℓ = 0,080 cm).',
            hints: ['Appliquer Beer-Lambert : A = ε · ℓ · C.'],
            solutionSteps: [
              'A = εHb × ℓ × CHb.',
              'A = 3 200 × 0,080 × (2,2 × 10⁻³).',
              'A = 3 200 × 8,0 × 10⁻² × 2,2 × 10⁻³ = 0,563.',
              'L\'absorbance est donc d\'environ 0,56 (grandeur sans unité).'
            ],
            finalAnswer: 'A660 ≈ 0,56',
            pointsAllocated: 3
          },
          {
            questionText: '3. La montre détecte une absorbance de 0,18. Justifier qualitativement pourquoi cela indique une excellente saturation en dioxygène chez le sportif.',
            hints: ['Comparer 0,18 avec l\'absorbance de l\'échantillon désoxygéné (0,56).'],
            solutionSteps: [
              'L\'absorbance mesurée (0,18) est bien inférieure à celle de l\'hémoglobine désoxygénée pure (0,56).',
              'Cela signifie qu\'une grande proportion des molécules présentes est sous forme d\'oxyhémoglobine HbO2 (qui absorbe très peu le rouge).',
              'La saturation SpO2 est donc élevée (> 95%), attestant d\'une oxygénation sanguine optimale en plein effort.'
            ],
            finalAnswer: 'Faible absorbance = forte proportion d\'oxyhémoglobine (SpO2 > 95%)',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-pc-1-beer1',
        question: 'Une solution qui absorbe principalement le rayonnement jaune-orangé (λ ≈ 590 nm) apparaît :',
        options: ['Bleue (couleur complémentaire)', 'Jaune', 'Verte', 'Noire'],
        correctIndex: 0,
        explanation: 'D\'après le cercle chromatique, la couleur complémentaire du jaune-orangé est le bleu indigo.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - PHYSIQUE-CHIMIE : ÉLECTRICITÉ & EFFET JOULE
  // =========================================================================
  {
    id: 'pc-1ere-electricite-puissance',
    subjectId: 'physique-chimie',
    gradeLevel: '1ere',
    title: 'Énergie & Puissance Électrique, Loi d\'Ohm et Effet Joule',
    officialCode: 'PC-1-05',
    description: 'Tension, intensité, loi d\'Ohm U = R · I, puissance électrique P = U · I, dissipation thermique par effet Joule P = R · I², rendement d\'un convertisseur électrique et dimensionnement des conducteurs.',
    estimatedMinutes: 40,
    summaryHighlights: [
      'Puissance électrique instantanée : P = U · I (P en Watts, U en Volts, I en Ampères).',
      'Loi d\'Ohm pour un conducteur ohmique : U = R · I (U en V, R en Ω, I en A).',
      'Effet Joule : Toute résistance traversée par un courant dissipe de la chaleur sous forme d\'effet Joule à un taux P_Joule = R · I².',
      'Énergie électrique consommée ou fournie : E = P · Δt (E en Joules pour Δt en secondes, ou en kWh si P en kW et t en heures).'
    ],
    keyFormulas: [
      {
        label: 'Puissance et Effet Joule',
        formula: 'P = U \\cdot I = R \\cdot I^2 = \\frac{U^2}{R}',
        explanation: 'Formule combinant la définition de la puissance et la loi d\'Ohm.'
      },
      {
        label: 'Énergie électrique',
        formula: 'E = P \\cdot \\Delta t \\quad (1 \\text{ kWh} = 3{,}6 \\times 10^6 \\text{ J})',
        explanation: 'Conversion classique entre kWh (facturation EDF) et Joules (unité SI).'
      },
      {
        label: 'Rendement énergétique',
        formula: '\\eta = \\frac{E_{\\text{utile}}}{E_{\\text{absorbée}}} = \\frac{P_{\\text{utile}}}{P_{\\text{absorbée}}} < 1',
        explanation: 'Sans unité, toujours inférieur à 100% en raison des pertes thermiques inévitables.'
      }
    ],
    courseSections: [
      {
        title: '1. Gestion thermique des circuits à haute puissance',
        content: [
          '• Lorsque le courant I double, l\'échauffement par effet Joule est multiplié par 4 (car proportionnel à I²).',
          '• Pour réduire les pertes dans les lignes haute tension ou les câbles d\'alimentation, on élève la tension U afin de diminuer I à puissance transportée égale.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-gaming-pc-cooling',
        title: 'Problème Résolu : Bilan Électrique et Refroidissement d\'un PC Gamer Haute Performance',
        context: 'Un PC de jeu équipé d\'une carte graphique ultra-haut de gamme consomme une puissance électrique de 450 W sous une tension stabilisée fournie par le bloc d\'alimentation de 12,0 V. Le câble d\'alimentation interne en cuivre possède une résistance parasite totale R = 0,025 Ω.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'tech',
        themeLabel: '💻 Hardware Gaming & Puissance Électrique',
        questions: [
          {
            questionText: '1. Calculer l\'intensité I du courant électrique qui circule dans le câble d\'alimentation 12 V lors d\'une session de jeu intense.',
            hints: ['Utiliser P = U · I donc I = P / U.'],
            solutionSteps: [
              'I = P / U.',
              'I = 450 W / 12,0 V = 37,5 A.',
              'Une intensité de 37,5 A est très importante (comparable à celle d\'une plaque à induction domestique).'
            ],
            finalAnswer: 'I = 37,5 A',
            pointsAllocated: 2
          },
          {
            questionText: '2. Calculer la puissance thermique PJ dissipée par effet Joule dans le seul câble d\'alimentation.',
            hints: ['Utiliser PJ = R · I².'],
            solutionSteps: [
              'PJ = R × I².',
              'PJ = 0,025 Ω × (37,5 A)².',
              'PJ = 0,025 × 1406,25 ≈ 35,16 W.',
              'Environ 35 W d\'énergie sont transformés en pure chaleur directement dans le connecteur du câble.'
            ],
            finalAnswer: 'PJ ≈ 35,2 W',
            pointsAllocated: 2
          },
          {
            questionText: '3. Si le câble n\'est pas ventilé pendant 30 minutes de jeu, calculer l\'énergie thermique totale dégagée par effet Joule en kJ.',
            hints: ['E = PJ · Δt avec Δt en secondes (30 min = 1 800 s).'],
            solutionSteps: [
              'Δt = 30 × 60 = 1 800 s.',
              'E = 35,16 W × 1 800 s = 63 288 J ≈ 63,3 kJ.',
              'Conclusion hardware : Cette quantité de chaleur justifie l\'utilisation de câbles renforcés de gros diamètre (16 AWG) et de watercooling pour éviter la fonte des connecteurs en plastique.'
            ],
            finalAnswer: 'E ≈ 63,3 kJ',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-pc-1-elec1',
        question: 'Si on multiplie la tension aux bornes d\'un résistor ohmique par 3, sa puissance dissipée est multipliée par :',
        options: ['9', '3', '6', '1/3'],
        correctIndex: 0,
        explanation: 'P = U² / R. Si U est multiplié par 3, U² est multiplié par 3² = 9.'
      }
    ]
  },

  // =========================================================================
  // PREMIÈRE - SVT : IMMUNITÉ ADAPTATIVE & VACCINATION
  // =========================================================================
  {
    id: 'svt-1ere-immunite-adaptative',
    subjectId: 'svt',
    gradeLevel: '1ere',
    title: 'L\'Immunité Adaptative : Cellules, Anticorps et Mémoire Immunitaire',
    officialCode: 'SVT-1-04',
    description: 'Sélection clonale, prolifération et différenciation des lymphocytes B et T, structure et spécificité des anticorps, complexes immuns, lymphocytes T cytotoxiques CD8, mémoire immunitaire et principe d\'action de la vaccination.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Spécificité antigénique : Contrairement à l\'immunité innée, l\'immunité adaptative produit des effecteurs (anticorps ou TCR) dirigés sur mesure contre un seul épitope antigénique précis.',
      'Lymphocytes B (médiation humorale) : Se différencient en plasmocytes qui sécrètent de grandes quantités d\'anticorps circulants.',
      'Anticorps (immunoglobulines) : Molécules en Y composées de 2 chaînes lourdes et 2 chaînes légères, dotées de parties variables spécifiques formant le site de fixation à l\'antigène.',
      'Mémoire immunologique : Une fraction des lymphocytes activés se transforme en cellules mémoires à longue durée de vie, permettant une réponse secondaire beaucoup plus rapide, plus intense et plus durable.'
    ],
    keyFormulas: [
      {
        label: 'Structure de l\'anticorps',
        formula: '\\text{Monomère Ig} = 2 \\times \\text{Chaîne lourde (H)} + 2 \\times \\text{Chaîne légère (L)}',
        explanation: 'Reliées par des ponts disulfures. Deux sites de liaison identiques (bivalence).'
      },
      {
        label: 'Cinétique de la réponse secondaire',
        formula: '\\Delta t_{\\text{secondaire}} \\ll \\Delta t_{\\text{primaire}} \\quad ; \\quad [\\text{Ac}]_{\\text{secondaire}} \\gg [\\text{Ac}]_{\\text{primaire}}',
        explanation: 'La réponse secondaire intervient en 24-48h avec un titre d\'anticorps 100 à 1000 fois supérieur.'
      }
    ],
    courseSections: [
      {
        title: '1. Les trois étapes de la réaction adaptative',
        content: [
          '1. La sélection clonale : Seuls les rares lymphocytes portant le récepteur complémentaire de l\'antigène sont activés.',
          '2. La prolifération clonale : Par mitoses successives sous le contrôle de cytokines (Interleukine-2 sécrétée par les LT auxiliaires CD4).',
          '3. La différenciation : Les LB deviennent plasmocytes (usines à anticorps) ou LB mémoires ; les LT CD8 deviennent LT cytotoxiques tueurs.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-1ere-vaccin-arnm',
        title: 'Problème Résolu : Analyse Biologique de la Réponse Énergique d\'un Vaccin à ARNm',
        context: 'Un laboratoire biomédical développe un vaccin à ARN messager encapsulé dans des nanoparticules lipidiques contre un virus respiratoire émergent. L\'ARNm code pour la protéine de surface "Spike". Lors de la phase d\'essai clinique, on mesure la concentration sérique d\'anticorps neutralisants (en Unités Arbitraires/mL) chez des volontaires après une première dose (J0) puis une dose de rappel (J28).',
        difficulty: 'Moyen',
        points: 7,
        themeTag: 'science',
        themeLabel: '🧬 Biotechnologies & Vaccins ARNm',
        questions: [
          {
            questionText: '1. Expliquer pourquoi l\'organisme synthétise lui-même la protéine antigénique après injection du vaccin à ARNm sans danger d\'infection virale active.',
            hints: ['L\'ARNm est traduit dans le cytosol par les ribosomes sans entrer dans le noyau.'],
            solutionSteps: [
              'L\'ARNm pénètre dans les cellules de l\'hôte (notamment les cellules présentatrices d\'antigènes) et est traduit en protéine Spike par les ribosomes cytosoliques.',
              'L\'ARNm ne contient aucune information génétique permettant la réplication virale complète : le virus ne peut pas se reproduire.',
              'L\'ARNm viral est naturellement dégradé par les enzymes cellulaires en quelques heures/jours, ne laissant que la protéine étrangère qui déclenche l\'immunité.'
            ],
            finalAnswer: 'Traduction cytosolique transitoire sans intégration génomique ni virus vivant',
            pointsAllocated: 2
          },
          {
            questionText: '2. Au jour J14 (après dose 1), le taux d\'anticorps atteint 120 UA/mL. Au jour J35 (7 jours après le rappel de J28), le taux explose à 4 800 UA/mL. Expliquer les mécanismes cellulaires à l\'origine de cette amplification.',
            hints: ['Comparer la réponse primaire (sélection clonale lente) et la réponse secondaire basée sur le pool de lymphocytes mémoires.'],
            solutionSteps: [
              'À la dose 1 (réponse primaire), la sélection clonale parmi un très petit nombre de clones naïfs nécessite un délai de latence de plusieurs jours, produisant un titre d\'anticorps modéré.',
              'Cette première étape a généré un pool massif de lymphocytes B mémoires et T CD4+ mémoires spécifiques.',
              'Lors du rappel (dose 2), la réintroduction de l\'antigène stimule directement ce contingent déjà nombreux de cellules mémoires.',
              'La prolifération et la différenciation en plasmocytes sont quasi-immédiates, entraînant une multiplication par 40 du taux d\'anticorps circulants (4 800 UA/mL).'
            ],
            finalAnswer: 'Différenciation fulgurante des lymphocytes B mémoires spécifiques en plasmocytes',
            pointsAllocated: 3
          },
          {
            questionText: '3. Définir le rôle d\'un "complexe immun" formé entre l\'anticorps et la protéine Spike virale dans l\'élimination finale du pathogène.',
            hints: ['Neutralisation et facilitation de la phagocytose (opsonisation).'],
            solutionSteps: [
              'L\'anticorps bivalent se lie spécifiquement à la protéine Spike, neutralisant sa capacité à se fixer aux récepteurs cellulaires (inhibition de l\'infection).',
              'L\'agglomération forme un complexe antigène-anticorps insoluble appelé "complexe immun".',
              'La partie constante des anticorps est reconnue par les récepteurs membranaires des phagocytes (macrophages/polynucléaires), qui réalisent l\'opsonisation et la destruction complète par phagocytose.'
            ],
            finalAnswer: 'Neutralisation du virus et déclenchement de la phagocytose par opsonisation',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-svt-1-imm1',
        question: 'Quel type cellulaire sécrète activement les anticorps circulants ?',
        options: ['Les plasmocytes (issus des LB)', 'Les lymphocytes T CD8', 'Les macrophages', 'Les hématies'],
        correctIndex: 0,
        explanation: 'Les plasmocytes sont des cellules effectrices hautement différenciées issues de la maturation des lymphocytes B activés.'
      }
    ]
  }
];
