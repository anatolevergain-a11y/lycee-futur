import { Chapter } from '../types';

export const COMPLETE_CHAPTERS_PART3: Chapter[] = [
  // =========================================================================
  // TERMINALE - MATHÉMATIQUES : ÉQUATIONS DIFFÉRENTIELLES
  // =========================================================================
  {
    id: 'math-term-equa-diff',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    title: 'Équations Différentielles Linéaires y\' = ay + b & Modélisation',
    officialCode: 'MATH-T-06',
    description: 'Résolution des équations différentielles homogènes y\' = ay et non-homogènes y\' = ay + b, condition initiale de Cauchy, allure des courbes intégrales et applications concrètes (thermique, radioactivité, dynamique des populations).',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Solutions générales de y\' = ay (a ∈ ℝ*) : Fonctions de la forme f(x) = C · e^(ax), où C est une constante réelle arbitraire.',
      'Solutions de y\' = ay + b : Fonctions de la forme f(x) = C · e^(ax) - b/a.',
      'Condition initiale f(x0) = y0 : Permet de fixer de façon unique la constante C (Théorème d\'existence et d\'unicité de Cauchy).',
      'Comportement asymptotique : Si a < 0, e^(ax) tend vers 0 en +∞, donc f(x) converge vers la solution d\'équilibre -b/a.'
    ],
    keyFormulas: [
      {
        label: 'Solution générale de y\' = ay + b',
        formula: 'y(t) = C \\cdot e^{at} - \\frac{b}{a} \\quad (C \\in \\mathbb{R})',
        explanation: '-b/a est la solution constante particulière évidente.'
      },
      {
        label: 'Condition initiale y(0) = y0',
        formula: 'y_0 = C - \\frac{b}{a} \\implies C = y_0 + \\frac{b}{a}',
        explanation: 'Détermination immédiate de la trajectoire unique.'
      },
      {
        label: 'Loi de refroidissement de Newton',
        formula: '\\frac{dT}{dt} = -k (T - T_{\\text{amb}}) \\iff T\'(t) = -k T(t) + k T_{\\text{amb}}',
        explanation: 'La vitesse de refroidissement est proportionnelle à l\'écart de température.'
      }
    ],
    courseSections: [
      {
        title: '1. Méthode pas à pas pour résoudre y\' = ay + b avec condition initiale',
        content: [
          '1. Identifier clairement les coefficients réels a et b.',
          '2. Écrire la forme générale : y(t) = C · e^(at) - b/a.',
          '3. Remplacer t par t0 et y(t0) par y0 pour poser l\'équation en C.',
          '4. Résoudre pour trouver C et réinjecter dans l\'expression de y(t).'
        ],
        proTip: 'Attention au piège de signe : l\'équation doit être sous la forme y\' - ay = b. Si vous avez 2y\' + 6y = 12, commencez par diviser par 2 pour obtenir y\' + 3y = 6, donc a = -3 et b = 6.'
      }
    ],
    exercises: [
      {
        id: 'ex-term-forensics-newton',
        title: 'Exercice Type Bac : Enquête Médico-Légale et Datation de l\'Heure d\'un Décès',
        context: 'Dans une série policière médico-légale, un médecin légiste arrive sur une scène de crime dans une pièce climatisée à température constante Tamb = 20,0 °C. Selon la loi de refroidissement thermique de Newton, la température corporelle T(t) (en °C) de la victime vérifie l\'équation différentielle T\'(t) = -k(T(t) - 20) où k est une constante positive liée aux échanges thermiques.',
        difficulty: 'Type Bac',
        points: 8,
        themeTag: 'cinema',
        themeLabel: '🎬 Enquête Criminelle & Thermodynamique',
        questions: [
          {
            questionText: '1. Donner la forme générale des solutions de l\'équation différentielle T\' + kT = 20k.',
            hints: ['C\'est une équation y\' = ay + b avec a = -k et b = 20k.'],
            solutionSteps: [
              'L\'équation s\'écrit T\'(t) = -k T(t) + 20k.',
              'Ici a = -k et b = 20k. Le rapport -b/a vaut -20k / (-k) = 20.',
              'Les solutions générales sont donc de la forme : T(t) = C · e^(-kt) + 20 (avec C ∈ ℝ).'
            ],
            finalAnswer: 'T(t) = C · e^(-kt) + 20 (C ∈ ℝ)',
            pointsAllocated: 2
          },
          {
            questionText: '2. En posant t = 0 l\'instant du décès (avec une température corporelle vivante normale de 37,0 °C), exprimer T(t) en fonction de t et k.',
            hints: ['Résoudre T(0) = 37.'],
            solutionSteps: [
              'T(0) = C · e^0 + 20 = C + 20 = 37.',
              'Donc C = 37 - 20 = 17.',
              'L\'expression de la température est donc : T(t) = 17 e^(-kt) + 20.'
            ],
            finalAnswer: 'T(t) = 17 e^(-kt) + 20',
            pointsAllocated: 2
          },
          {
            questionText: '3. À son arrivée à 22h00, le légiste mesure une température de 30,2 °C. Une heure plus tard à 23h00, il mesure 28,5 °C. Déterminer la valeur du coefficient k (en h⁻¹).',
            hints: ['Poser le rapport des écarts thermiques sur un intervalle de 1h.'],
            solutionSteps: [
              'Soit t1 l\'instant 22h00 : T(t1) - 20 = 17 e^(-k t1) = 10,2 °C.',
              'À 23h00 (instant t1 + 1) : T(t1 + 1) - 20 = 17 e^(-k (t1 + 1)) = 8,5 °C.',
              'En faisant le quotient : e^(-k) = 8,5 / 10,2 = 5/6 ≈ 0,8333.',
              'Donc -k = ln(8,5 / 10,2) ≈ -0,1823, soit k ≈ 0,182 h⁻¹.'
            ],
            finalAnswer: 'k ≈ 0,182 h⁻¹',
            pointsAllocated: 2
          },
          {
            questionText: '4. Calculer le temps t1 écoulé entre le décès et l\'arrivée du légiste. À quelle heure exacte le crime a-t-il été commis ?',
            hints: ['Utiliser 17 e^(-0,182 t1) = 10,2.'],
            solutionSteps: [
              'e^(-0,182 t1) = 10,2 / 17 = 0,600.',
              '-0,182 t1 = ln(0,600) ≈ -0,5108.',
              't1 = 0,5108 / 0,1823 ≈ 2,80 heures.',
              'Convertissons 2,80 h en heures et minutes : 2 h + 0,80 × 60 min = 2 h 48 min.',
              'Le crime a eu lieu 2 h 48 avant 22h00, soit précisément à 19h12.'
            ],
            finalAnswer: 't1 = 2h48 (Décès survenu à 19h12)',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-math-t-eq1',
        question: 'Quelle est la solution de l\'équation différentielle y\' = -2y avec y(0) = 5 ?',
        options: ['y(t) = 5 e^(-2t)', 'y(t) = -2 e^(5t)', 'y(t) = 5 e^(2t)', 'y(t) = e^(-2t) + 5'],
        correctIndex: 0,
        explanation: 'La solution générale est C · e^(-2t). En t = 0, C · e^0 = C = 5.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - PHYSIQUE-CHIMIE : CIRCUIT RC
  // =========================================================================
  {
    id: 'pc-term-circuit-rc',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Circuits RC : Charge, Décharge du Condensateur & Constante de Temps τ',
    officialCode: 'PC-T-07',
    description: 'Relation charge-tension q = C · uC, intensité i = dq/dt = C · duC/dt, loi des mailles, établissement de l\'équation différentielle du premier ordre RC · duC/dt + uC = E, constante de temps τ = RC et stockage d\'énergie électrostatique Ee = 1/2 C uC².',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Relation fondamentale d\'un condensateur : q(t) = C · uC(t) (q en Coulombs, C en Farads, uC en Volts).',
      'Courant de déplacement : i(t) = dq/dt = C · duC/dt.',
      'Constante de temps caractéristique : τ = R · C (homogène à un temps en secondes).',
      'Au bout de t = τ lors d\'une charge : uC(τ) = 0,63 E (63% de la charge totale atteinte).',
      'Régime permanent : Atteint au bout de t ≥ 5τ (uC ≈ 0,993 E, le condensateur se comporte comme un circuit ouvert, i = 0).'
    ],
    keyFormulas: [
      {
        label: 'Équation différentielle de charge',
        formula: 'R C \\frac{du_C}{dt} + u_C(t) = E \\iff \\tau \\frac{du_C}{dt} + u_C = E',
        explanation: 'Issue de la loi des mailles : uR + uC = E avec uR = R·i.'
      },
      {
        label: 'Tension aux bornes du condensateur (charge)',
        formula: 'u_C(t) = E \\left(1 - e^{-t/\\tau}\\right)',
        explanation: 'Croissance exponentielle asymptotique vers la tension du générateur E.'
      },
      {
        label: 'Énergie électrostatique stockée',
        formula: 'E_e = \\frac{1}{2} C u_C^2 = \\frac{1}{2} \\frac{q^2}{C}',
        explanation: 'Exprimée en Joules (J). Une partie égale de l\'énergie est dissipée en chaleur dans le résistor pendant la charge.'
      }
    ],
    courseSections: [
      {
        title: '1. Méthodes de détermination graphique de la constante de temps τ',
        content: [
          '• Méthode 1 (tangente à l\'origine) : Tracer la tangente à la courbe uC(t) en t = 0. Elle coupe l\'asymptote horizontale uC = E à la date t = τ.',
          '• Méthode 2 (valeur 63%) : Repérer sur l\'axe vertical 0,63 × E. L\'abscisse correspondante sur la courbe donne directement τ.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-fastcharge-smartphone',
        title: 'Problème Résolu : Superchargeur 120W de Smartphone et Dynamique de Charge RC',
        context: 'Les fabricants de smartphones utilisent des circuits de charge rapide à double cellule. Pour simuler l\'étage tampon d\'un accumulateur, on utilise un modèle équivalent constitué d\'un supercondensateur de capacité géante C = 2,5 F en série avec une résistance interne parasite R = 0,80 Ω, alimenté par une tension régulée E = 10,0 V.',
        difficulty: 'Moyen',
        points: 7,
        themeTag: 'tech',
        themeLabel: '⚡ Tech & Superchargeurs de Smartphone',
        questions: [
          {
            questionText: '1. Calculer la constante de temps τ du circuit équivalent de charge.',
            hints: ['τ = R · C.'],
            solutionSteps: [
              'τ = R × C.',
              'τ = 0,80 Ω × 2,5 F = 2,00 secondes.',
              'La constante de temps vaut 2,0 s.'
            ],
            finalAnswer: 'τ = 2,0 s',
            pointsAllocated: 2
          },
          {
            questionText: '2. Déterminer l\'intensité maximale i(0⁺) du courant qui traverse le circuit à la fermeture de l\'interrupteur.',
            hints: ['À t = 0⁺, le condensateur non chargé a uC(0) = 0 V.'],
            solutionSteps: [
              'D\'après la loi des mailles : R · i(t) + uC(t) = E.',
              'À t = 0⁺, uC(0⁺) = 0 V car la tension aux bornes d\'un condensateur est une fonction continue.',
              'Donc R · i(0⁺) = E, soit i(0⁺) = E / R.',
              'i(0⁺) = 10,0 V / 0,80 Ω = 12,5 A.'
            ],
            finalAnswer: 'i(0⁺) = 12,5 A',
            pointsAllocated: 2
          },
          {
            questionText: '3. Calculer l\'énergie totale Ee emmagasinée dans le supercondensateur une fois le régime permanent atteint (t ≥ 10 s).',
            hints: ['En régime permanent, uC = E = 10,0 V.'],
            solutionSteps: [
              'Ee = 1/2 × C × (uC)².',
              'Ee = 0,5 × 2,5 F × (10,0 V)².',
              'Ee = 0,5 × 2,5 × 100 = 125 Joules.',
              'Le condensateur emmagasine une énergie électrostatique de 125 J.'
            ],
            finalAnswer: 'Ee = 125 Joules',
            pointsAllocated: 3
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-pc-t-rc1',
        question: 'Quelle est la valeur de uC à t = 3τ lors de la décharge d\'un condensateur initialement à E ?',
        options: ['uC ≈ 0,05 E (5%)', 'uC ≈ 0,37 E', 'uC = 0', 'uC = 0,63 E'],
        correctIndex: 0,
        explanation: 'Lors de la décharge, uC(t) = E e^(-t/τ). Pour t = 3τ, e^(-3) ≈ 0,0498, soit environ 5% de la tension initiale.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - PHYSIQUE-CHIMIE : CINÉTIQUE CHIMIQUE
  // =========================================================================
  {
    id: 'pc-term-cinetique-chimique',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    title: 'Évolution Temporelle des Systèmes Chimiques & Cinétique d\'Ordre 1',
    officialCode: 'PC-T-08',
    description: 'Facteurs cinétiques (température, concentration des réactifs, solvant, catalyseur), vitesse volumique de disparition et d\'apparition, loi de vitesse d\'ordre 1 v = k · [A], temps de demi-réaction t1/2 et décroissance exponentielle [A](t) = [A]0 · e^(-kt).',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Facteurs cinétiques : L\'élévation de température et l\'augmentation de la concentration augmentent la fréquence des chocs efficaces entre molécules réactives.',
      'Vitesse volumique de disparition d\'un réactif R : v_disp = - d[R]/dt (dérivée opposée de la concentration volumique).',
      'Réaction d\'ordre 1 : La vitesse de disparition est proportionnelle à la concentration restante du réactif : -d[A]/dt = k · [A].',
      'Temps de demi-réaction t1/2 : Durée au bout de laquelle la concentration du réactif limitant est divisée par deux : t1/2 = ln(2) / k. Dans une cinétique d\'ordre 1, t1/2 est strictement indépendant de la concentration initiale [A]0 !'
    ],
    keyFormulas: [
      {
        label: 'Loi cinétique d\'ordre 1',
        formula: '[A](t) = [A]_0 \\cdot e^{-k t}',
        explanation: 'k est la constante de vitesse (exprimée en s⁻¹ ou min⁻¹).'
      },
      {
        label: 'Temps de demi-réaction t1/2',
        formula: 't_{1/2} = \\frac{\\ln(2)}{k} \\approx \\frac{0{,}693}{k}',
        explanation: 'Propriété signature d\'une cinétique d\'ordre 1 : la demi-vie reste constante au cours du temps.'
      }
    ],
    courseSections: [
      {
        title: '1. Méthodes expérimentales pour prouver l\'ordre 1',
        content: [
          '• Méthode graphique 1 : Tracer ln([A]) en fonction du temps t. Si les points s\'alignent sur une droite affine descendante de coefficient directeur -k, la loi est d\'ordre 1.',
          '• Méthode graphique 2 : Vérifier sur le graphe [A] = f(t) que les durées nécessaires pour passer de [A]0 à [A]0/2, puis de [A]0/2 à [A]0/4 sont rigoureusement identiques.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-f1-biofuel',
        title: 'Problème Résolu : Dégradation Thermique d\'un Biocarburant de Formule 1 sous 180 °C',
        context: 'Le règlement de la Formule 1 impose l\'usage d\'un biocarburant de synthèse contenant un ester oxygéné. Dans les conduits proches du turbo où règne une température extrême de 180 °C, cet ester se décompose selon une cinétique d\'ordre 1 avec une constante de vitesse k = 4,62 × 10⁻² s⁻¹.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'sport',
        themeLabel: '🏎️ Formule 1 & Cinétique Chimique',
        questions: [
          {
            questionText: '1. Calculer le temps de demi-réaction t1/2 de ce biocarburant à 180 °C.',
            hints: ['t1/2 = ln(2) / k.'],
            solutionSteps: [
              't1/2 = ln(2) / k = 0,6931 / (4,62 × 10⁻² s⁻¹).',
              't1/2 = 15,0 secondes.',
              'À 180 °C, la moitié des molécules d\'ester est décomposée en seulement 15 secondes.'
            ],
            finalAnswer: 't1/2 = 15,0 s',
            pointsAllocated: 2
          },
          {
            questionText: '2. Un volume de carburant met 45 secondes à traverser l\'échangeur thermique. Déterminer le pourcentage d\'ester résiduel intact à la sortie.',
            hints: ['Remarquer que 45 s = 3 × t1/2 ou calculer e^(-kt).'],
            solutionSteps: [
              'Méthode rapide : 45 s correspond exactement à 3 demi-vies (3 × 15 s).',
              'Après 1 demi-vie : 50% restant.',
              'Après 2 demi-vies : 25% restant.',
              'Après 3 demi-vies : 12,5% restant.',
              'Par le calcul : [A]/[A]0 = e^(-4,62×10⁻² × 45) = e^(-2,079) = 0,125 = 12,5%.',
              'Il ne reste que 12,5% de biocarburant non altéré : le motoriste doit isoler thermiquement la ligne pour éviter la perte de puissance.'
            ],
            finalAnswer: '12,5% restant (ou rapport 0,125)',
            pointsAllocated: 2
          },
          {
            questionText: '3. Expliquer au niveau microscopique pourquoi une baisse de température de 180 °C à 60 °C ralentit considérablement cette réaction néfaste.',
            hints: ['Théorie des collisions et énergie cinétique des réactifs.'],
            solutionSteps: [
              'La température est la mesure microscopique de l\'agitation thermique (énergie cinétique moyenne des molécules).',
              'En abaissant la température, les molécules d\'ester se déplacent moins vite.',
              'La fréquence globale des collisions diminue, et surtout la proportion de chocs dont l\'énergie dépasse l\'énergie d\'activation Ea chute drastiquement.',
              'Le nombre de chocs efficaces par seconde devenant très faible, la décomposition devient négligeable.'
            ],
            finalAnswer: 'Baisse de l\'agitation thermique et raréfaction des chocs d\'énergie supérieure à Ea',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-pc-t-cin1',
        question: 'Dans une cinétique d\'ordre 1, si la concentration initiale du réactif est multipliée par 4, le temps de demi-réaction t1/2 :',
        options: [
          'Reste rigoureusement identique',
          'Est multiplié par 4',
          'Est divisé par 4',
          'Est divisé par 2'
        ],
        correctIndex: 0,
        explanation: 'Pour l\'ordre 1, t1/2 = ln(2)/k ne dépend pas de la concentration initiale [A]0.'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - SVT : CERVEAU ET COMMANDE DU MOUVEMENT
  // =========================================================================
  {
    id: 'svt-term-cerveau-mouvement',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'Le Cerveau et le Mouvement Volontaire : Voies Motrices & Synapses',
    officialCode: 'SVT-T-06',
    description: 'Organisation du cortex moteur primaire, carte motrice (homoncule de Penfield), voies nerveuses descendantes pyramidales et décussation bulbaire, intégration synaptique au niveau du motoneurone spinal (sommation spatiale et temporelle, PPSE / PPSI) et plasticité cérébrale.',
    estimatedMinutes: 50,
    summaryHighlights: [
      'Cortex moteur primaire : Situé en avant du sillon central, chaque région contrôle une partie du corps avec une surface corticale proportionnelle à la finesse motrice (mains et visage surreprésentés sur l\'homoncule).',
      'Croisement des voies motrices (décussation) : Le cortex moteur gauche commande les muscles de la moitié droite du corps et réciproquement.',
      'Intégration du motoneurone spinal : Véritable centre de décision cellulaire, le motoneurone réalise la sommation algébrique (spatiale et temporelle) des potentiels post-synaptiques excitateurs (PPSE) et inhibiteurs (PPSI).',
      'Émission du message moteur : Si le potentiel de membrane au cône d\'émergence dépasse le seuil critique (environ -50 mV), des potentiels d\'action (PA) sont générés et propagés le long du nerf moteur jusqu\'à la jonction neuromusculaire.'
    ],
    keyFormulas: [
      {
        label: 'Seuil d\'émission du PA moteur',
        formula: 'V_m = V_{\\text{repos}} + \\sum \\text{PPSE} - \\sum \\text{PPSI} \\ge -50 \\text{ mV}',
        explanation: 'Loi du tout ou rien : si le seuil est franchi, déclenchement d\'un train de potentiels d\'action.'
      },
      {
        label: 'Codage de la force musculaire',
        formula: '\\text{Intensité de contraction} \\propto \\text{Fréquence des PA} \\times \\text{Nombre d\'unités motrices recrutées}',
        explanation: 'Codage en modulation de fréquence de PA le long de l\'axone.'
      }
    ],
    courseSections: [
      {
        title: '1. Sommation spatiale et sommation temporelle',
        content: [
          '• Sommation spatiale : Addition des signaux arrivant simultanément sur différentes synapses du même motoneurone.',
          '• Sommation temporelle : Addition des signaux arrivant de façon rapprochée dans le temps sur une même synapse avant la repolarisation.'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-esport-reflexes',
        title: 'Problème Résolu : Physiologie des Réflexes et Temps de Réaction d\'un Joueur Esport sur Écran 240 Hz',
        context: 'Dans les compétitions professionnelles de jeux de tir (Valorant, CS2), les joueurs réagissent à des stimuli visuels en moins de 170 ms. On enregistre le parcours de l\'influx nerveux depuis la rétine jusqu\'au déclenchement du clic de la souris par le muscle fléchisseur de l\'index.',
        difficulty: 'Moyen',
        points: 7,
        themeTag: 'gaming',
        themeLabel: '🎮 Esport & Neurophysiologie du Mouvement',
        questions: [
          {
            questionText: '1. Reconstituer la chaîne neuronale complète parcourue par le message nerveux entre la perception d\'un adversaire à l\'écran et le clic de tir.',
            hints: ['Partir des photorécepteurs rétiniens, passer par le cortex visuel, le cortex moteur, la moelle épinière et la jonction musculaire.'],
            solutionSteps: [
              '1. Photorécepteurs de la rétine : conversion de la lumière en message électrique sensoriel.',
              '2. Nerf optique vers le cortex visuel primaire (lobe occipital).',
              '3. Aires associatives et pré-motrices : planification de l\'action de tir.',
              '4. Neurone pyramidal du cortex moteur primaire (qui décusse au niveau du bulbe rachidien).',
              '5. Synapse dans la corne antérieure de la moelle épinière avec le motoneurone spinal.',
              '6. Axone du motoneurone jusqu\'à la plaque motrice du muscle de l\'index (libération d\'acétylcholine et contraction).'
            ],
            finalAnswer: 'Rétine -> Cortex Visuel -> Aires Pré-motrices -> Cortex Moteur -> Bulbe (décussation) -> Motoneurone -> Muscle',
            pointsAllocated: 3
          },
          {
            questionText: '2. Un motoneurone reçoit en 2 millisecondes 4 PPSE de +8 mV chacun et 1 PPSI de -10 mV. Le potentiel de repos est de -70 mV et le seuil d\'excitation est de -50 mV. Un ordre de tir est-il envoyé ?',
            hints: ['Calculer la somme algébrique : V = -70 + (4 × 8) - 10.'],
            solutionSteps: [
              'Sommation spatiale et temporelle :',
              'ΔV = (4 × +8 mV) + (-10 mV) = +32 - 10 = +22 mV.',
              'Le potentiel de membrane atteint : Vm = -70 mV + 22 mV = -48 mV.',
              'Comme -48 mV > -50 mV (seuil dépassé de 2 mV), le motoneurone génère un train de potentiels d\'action.',
              'Conclusion : L\'ordre moteur est déclenché et le muscle de l\'index se contracte pour presser le bouton de tir.'
            ],
            finalAnswer: 'Oui, Vm = -48 mV ≥ -50 mV, émission d\'un potentiel d\'action moteur',
            pointsAllocated: 2
          },
          {
            questionText: '3. Pourquoi l\'entraînement intensif (plasticité cérébrale) permet-il de réduire le temps de réaction de 230 ms à 160 ms chez les professionnels ?',
            hints: ['Mentionner la myélinisation, la synaptogenèse et le renforcement synaptique (LTP).'],
            solutionSteps: [
              'La répétition quotidienne renforce la plasticité synaptique : augmentation du nombre de récepteurs aux neurotransmetteurs (potentialisation à long terme LTP).',
              'Amélioration de la gaine de myéline autour des axones impliqués, augmentant la vitesse de conduction saltatoire.',
              'Automatisation motrice réduisant le temps d\'intégration cognitive dans les aires corticales associatives.'
            ],
            finalAnswer: 'Renforcement synaptique (LTP), myélinisation accrue et automatisation corticale',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-svt-t-mouv1',
        question: 'Où a lieu le croisement (décussation) de la majorité des fibres motrices pyramidales ?',
        options: ['Dans le bulbe rachidien', 'Dans le corps calleux', 'Dans le muscle', 'Dans la rétine'],
        correctIndex: 0,
        explanation: 'Les voies motrices croisent la ligne médiane dans la partie inférieure du tronc cérébral (bulbe rachidien).'
      }
    ]
  },

  // =========================================================================
  // TERMINALE - SVT : LE STRESS ET L'ORGANISME
  // =========================================================================
  {
    id: 'svt-term-stress-organisme',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    title: 'L\'Organisme Face au Stress : Stress Aigu, Axe Corticotrope & Résilience',
    officialCode: 'SVT-T-07',
    description: 'Réponse physiologique au stress aigu : amygdale, système limbique, système nerveux sympathique et libération d\'adrénaline par la médullosurrénale. Axe hypothalamo-hypophyso-surrénalien (CRH, ACTH, cortisol sécrété par la corticosurrénale) et rétrocontrôle négatif de résilience.',
    estimatedMinutes: 45,
    summaryHighlights: [
      'Stress aigu : Réponse stéréotypée et adaptative de l\'organisme face à un stimulus perturbateur (agent stresseur) pour préparer la fuite ou le combat.',
      'Phase d\'alarme (immédiate en quelques secondes) : Activation du système sympathique par le locus coeruleus et libération d\'adrénaline par la médullosurrénale -> augmentation du rythme cardiaque, ventilation accrue et libération de glucose.',
      'Phase de résistance (en quelques minutes/heures) : L\'hypothalamus sécrète la CRH -> stimulation de l\'antéhypophyse qui libère l\'ACTH -> stimulation de la corticosurrénale qui sécrète le cortisol.',
      'Résilience et rétroaction : Le cortisol exerce un rétrocontrôle négatif sur l\'hypothalamus et l\'hypophyse pour stopper la cascade et ramener l\'organisme à l\'homéostasie.'
    ],
    keyFormulas: [
      {
        label: 'Cascade neuroendocrinienne du stress',
        formula: '\\text{Stress} \\to \\text{Hypothalamus (CRH)} \\to \\text{Hypophyse (ACTH)} \\to \\text{Corticosurrénale (Cortisol)}',
        explanation: 'Axe HPA (Hypothalamo-Pituitary-Adrenal).'
      },
      {
        label: 'Rétrocontrôle négatif',
        formula: '[\\text{Cortisol}] \\uparrow \\implies \\text{Sécrétion CRH} \\downarrow \\text{ et ACTH} \\downarrow',
        explanation: 'Frein homéostatique indispensable pour éviter l\'épuisement de l\'organisme.'
      }
    ],
    courseSections: [
      {
        title: '1. Comparaison Adrénaline vs Cortisol',
        content: [
          '• Adrénaline : Neuro-hormone de la médullo-surrénale, action fulgurante (secondes), agit sur les récepteurs adrénergiques cardiaques et vasculaires.',
          '• Cortisol : Hormone stéroïdienne de la cortico-surrénale, action métabolique prolongée (néoglucogenèse hépatique, régulation immunitaire).'
        ]
      }
    ],
    exercises: [
      {
        id: 'ex-term-space-stress',
        title: 'Problème Résolu : Profil Hormonal et Résistance au Stress d\'un Astronaute lors d\'un Tir Spatial',
        context: 'Lors d\'un tir de fusée vers la Station Spatiale Internationale, un astronaute subit une accélération de 4,5 g et une tension psychologique extrême. Des micro-capteurs sous-cutanés analysent en temps réel ses concentrations plasmatiques d\'adrénaline, d\'ACTH et de cortisol.',
        difficulty: 'Moyen',
        points: 6,
        themeTag: 'space',
        themeLabel: '🚀 Mission Spatiale & Endocrinologie du Stress',
        questions: [
          {
            questionText: '1. À T - 10 secondes avant l\'allumage des moteurs, le rythme cardiaque de l\'astronaute bondit de 65 bpm à 140 bpm. Identifier l\'hormone responsable et son origine.',
            hints: ['Action immédiate de la phase d\'alarme.'],
            solutionSteps: [
              'L\'hormone responsable de cette tachycardie fulgurante est l\'adrénaline.',
              'Elle est libérée par la partie centrale de la glande surrénale (la médullo-surrénale) sous l\'impulsion directe des fibres nerveuses du système orthosympathique.'
            ],
            finalAnswer: 'Adrénaline (sécrétée par la médullosurrénale)',
            pointsAllocated: 2
          },
          {
            questionText: '2. Trente minutes après la mise en orbite réussie, on constate un pic très net de cortisol sanguin alors que le danger immédiat est écarté. Expliquer la chaîne hormonale qui a provoqué cette élévation.',
            hints: ['Décrire l\'axe hypothalamo-hypophyso-surrénalien.'],
            solutionSteps: [
              'La perception du stress a stimulé l\'hypothalamus qui a libéré la neurohormone CRH (Corticotropin-Releasing Hormone).',
              'La CRH a stimulé l\'hypophyse antérieure qui a sécrété l\'hormone ACTH dans la circulation générale.',
              'L\'ACTH a stimulé la zone corticale des glandes surrénales (corticosurrénale), entraînant la synthèse et la libération de cortisol.',
              'Ce délai d\'une trentaine de minutes correspond au temps de transmission humorale et de synthèse enzymatique du cortisol.'
            ],
            finalAnswer: 'Axe Hypothalamus (CRH) -> Antéhypophyse (ACTH) -> Corticosurrénale (Cortisol)',
            pointsAllocated: 2
          },
          {
            questionText: '3. Deux heures après l\'amarrage, la concentration de cortisol redescend à sa valeur basale. Schématiser le mécanisme physiologique qui permet ce retour à l\'équilibre.',
            hints: ['Mentionner les récepteurs au cortisol sur l\'hippocampe, l\'hypothalamus et l\'antéhypophyse.'],
            solutionSteps: [
              'Le cortisol circulant se fixe sur des récepteurs spécifiques au niveau de l\'hypothalamus, de l\'antéhypophyse et de l\'hippocampe.',
              'Cette fixation inhibe la sécrétion de CRH et d\'ACTH : c\'est le rétrocontrôle négatif (feed-back négatif).',
              'En l\'absence de nouveau stimulus stresseur, la baisse d\'ACTH stoppe la surproduction de cortisol, restaurant l\'homéostasie physiologique de l\'astronaute.'
            ],
            finalAnswer: 'Rétrocontrôle négatif du cortisol sur l\'hypothalamus et l\'hypophyse',
            pointsAllocated: 2
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q-svt-t-stress1',
        question: 'Quelle structure neuroendocrinienne sécrète la neurohormone CRH ?',
        options: ['L\'hypothalamus', 'L\'hypophyse antérieure', 'La glande thyroïde', 'La médullosurrénale'],
        correctIndex: 0,
        explanation: 'La CRH (Corticotropin Releasing Hormone) est produite par les neurones de l\'hypothalamus.'
      }
    ]
  }
];
