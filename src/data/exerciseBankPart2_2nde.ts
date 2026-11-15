import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_PART2_2NDE: BankExerciseItem[] = [
  // --- 2NDE MATHS (11 new exercises) ---
  {
    id: 'ex-2m-p2-1',
    targetChapterId: 'math-2nde-arithmetique',
    title: 'Arithmétique & Sécurité d’un Code PIN de Carte Bancaire',
    context: 'Un protocole de carte bancaire vérifie la somme des chiffres pondérés : pour un code [c1, c2, c3, c4], la clé de parité vérifie 3c1 + 7c2 + c3 + 5c4 ≡ 0 [10].',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '💳 Cryptographie & Arithmétique',
    questions: [
      {
        questionText: '1. Pour le code 4 - 8 - 2 - x, déterminer la valeur du chiffre de contrôle x compris entre 0 et 9.',
        hints: ['Calculer la somme partielle 3(4) + 7(8) + 1(2) + 5x.', 'Résoudre la congruence modulo 10.'],
        solutionSteps: [
          'Somme partielle : 3*4 + 7*8 + 2 = 12 + 56 + 2 = 70.',
          'L\'équation devient 70 + 5x ≡ 0 [10].',
          'Puisque 70 ≡ 0 [10], on a 5x ≡ 0 [10].',
          'Pour x ∈ {0, 1, ..., 9}, les multiples de 5 se terminant par 0 sont x = 0 ou x = 2, 4, 6, 8 (tous les pairs).'
        ],
        finalAnswer: 'x peut être tout chiffre pair : {0, 2, 4, 6, 8}.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Si l\'on impose de plus que x soit un nombre premier, quelle est l\'unique valeur possible pour x ?',
        hints: ['Le seul nombre premier pair est 2.'],
        solutionSteps: [
          'Parmi les entiers pairs {0, 2, 4, 6, 8}, 0 n\'est pas premier, 4, 6 et 8 sont composés.',
          'Le seul nombre premier pair est 2.'
        ],
        finalAnswer: 'x = 2.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-p2-2',
    targetChapterId: 'math-2nde-fonctions',
    title: 'Analyse d’Audience : Pic de Connexions sur Twitch',
    context: 'Le nombre de spectateurs simultanés S(t) (en milliers) sur un live esport entre 18h et 24h (t ∈ [0 ; 6]) est modélisé par S(t) = -2t^2 + 12t + 10.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'gaming',
    themeLabel: '🎮 Twitch & Variations',
    questions: [
      {
        questionText: '1. Calculer le nombre de spectateurs au début du stream (t = 0) et après 3 heures (t = 3).',
        hints: ['Remplacer t par 0 puis par 3 dans S(t).'],
        solutionSteps: [
          'S(0) = -2(0) + 12(0) + 10 = 10 milliers (10 000 spectateurs).',
          'S(3) = -2(9) + 12(3) + 10 = -18 + 36 + 10 = 28 milliers (28 000 spectateurs).'
        ],
        finalAnswer: 'S(0) = 10 000 et S(3) = 28 000 spectateurs.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Montrer que S(t) = -2(t - 3)^2 + 28. À quelle heure le pic d\'audience est-il atteint et quel est son effectif maximal ?',
        hints: ['Développer la forme canonique.', 't = 0 correspond à 18h.'],
        solutionSteps: [
          '-2(t^2 - 6t + 9) + 28 = -2t^2 + 12t - 18 + 28 = -2t^2 + 12t + 10 = S(t).',
          'Puisque -(t - 3)^2 ≤ 0, le maximum est 28, atteint pour t = 3.',
          '18h + 3h = 21h (heure de grande écoute).'
        ],
        finalAnswer: 'Pic à 21h00 avec 28 000 spectateurs.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-p2-3',
    targetChapterId: 'math-2nde-vecteurs',
    title: 'Changement de Cap d’un Voilier du Vendée Globe',
    context: 'Dans le repère de la course, le voilier suit un premier vecteur déplacement u(15 ; 20) puis un second v(-5 ; 12) (en milles nautiques).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '⛵ Vendée Globe & Somme Vectorielle',
    questions: [
      {
        questionText: '1. Calculer les coordonnées du vecteur déplacement total w = u + v.',
        hints: ['Additionner les coordonnées x et y.'],
        solutionSteps: [
          'xw = 15 + (-5) = 10.',
          'yw = 20 + 12 = 32.',
          'w(10 ; 32).'
        ],
        finalAnswer: 'w(10 ; 32).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la norme ||w|| du déplacement total (distance à vol d\'oiseau parcourue).',
        hints: ['||w|| = √(x^2 + y^2).'],
        solutionSteps: [
          '||w|| = √(10^2 + 32^2) = √(100 + 1024) = √1124 ≈ 33,53 milles.'
        ],
        finalAnswer: 'Distance totale ≈ 33,5 milles nautiques.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-p2-4',
    targetChapterId: 'math-2nde-droites',
    title: 'Intersection de Trajectoires de Satellites en Orbite Basse',
    context: 'Deux satellites suivent des trajectoires modélisées par les droites (D1) : y = 3x - 5 et (D2) : y = -2x + 10.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'space',
    themeLabel: '🛰️ Satellites & Équations de Droites',
    questions: [
      {
        questionText: '1. Justifier que ces deux droites sont sécantes.',
        hints: ['Comparer les coefficients directeurs.'],
        solutionSteps: [
          'Le coefficient directeur de (D1) est m1 = 3.',
          'Le coefficient directeur de (D2) est m2 = -2.',
          'Comme m1 ≠ m2, les droites ne sont pas parallèles et se coupent en un point unique.'
        ],
        finalAnswer: 'Sécantes car m1 (3) ≠ m2 (-2).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer les coordonnées exactes du point d\'intersection I.',
        hints: ['Poser 3x - 5 = -2x + 10.'],
        solutionSteps: [
          '3x - 5 = -2x + 10 <=> 5x = 15 <=> x = 3.',
          'En remplaçant : y = 3(3) - 5 = 9 - 5 = 4.'
        ],
        finalAnswer: 'Point d\'intersection I(3 ; 4).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-p2-5',
    targetChapterId: 'math-2nde-probas',
    title: 'Tirage de Cartes Rares dans Pokémon TCG',
    context: 'Un booster contient 10 cartes : 6 communes, 3 peu communes et 1 holographique rare. On tire 2 cartes au hasard sans remise.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'gaming',
    themeLabel: '🃏 Cartes Pokémon & Dénombrement',
    questions: [
      {
        questionText: '1. Quelle est la probabilité d\'obtenir la carte holographique dès la première carte tirée ?',
        hints: ['1 carte rare parmi 10.'],
        solutionSteps: [
          'P = 1 / 10 = 0,10 (10%).'
        ],
        finalAnswer: 'P = 1/10 = 0,10 (10%).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Quelle est la probabilité de n\'obtenir aucune carte holographique sur les 2 premières cartes ?',
        hints: ['Premier tirage non rare : 9/10 ; second tirage non rare : 8/9.'],
        solutionSteps: [
          'P(non rare puis non rare) = (9/10) * (8/9) = 8/10 = 0,80.'
        ],
        finalAnswer: 'P = 0,80 (80%).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-2m-p2-6',
    targetChapterId: 'math-2nde-statistiques',
    title: 'Analyse des Scores d’une Équipe d’E-Sport sur Valorant',
    context: 'Sur 9 rounds, le nombre de frags réalisés par le carry de l\'équipe est : 1, 2, 2, 3, 3, 4, 4, 5, 8.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'gaming',
    themeLabel: '🎮 Valorant & Statistiques',
    questions: [
      {
        questionText: '1. Calculer la moyenne des frags par round.',
        hints: ['Sommer les valeurs et diviser par 9.'],
        solutionSteps: [
          'Somme = 1 + 2 + 2 + 3 + 3 + 4 + 4 + 5 + 8 = 32.',
          'Moyenne = 32 / 9 ≈ 3,56 frags/round.'
        ],
        finalAnswer: 'Moyenne ≈ 3,56.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Déterminer la médiane et l\'étendue de cette série.',
        hints: ['L\'effectif est 9, la médiane est la 5e valeur.', 'Étendue = max - min.'],
        solutionSteps: [
          'Série ordonnée : 1, 2, 2, 3, [3], 4, 4, 5, 8.',
          '5e valeur : Médiane = 3 frags.',
          'Étendue = 8 - 1 = 7 frags.'
        ],
        finalAnswer: 'Médiane = 3 ; Étendue = 7.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-p2-7',
    targetChapterId: 'math-2nde-equations-inequations',
    title: 'Rentabilité d’un Atelier d’Impression 3D',
    context: 'Le coût unitaire de fabrication de figurines baisse avec la quantité q : le bénéfice net est B(q) = (q - 20)(100 - q) en euros.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🖨️ Impression 3D & Inéquation',
    questions: [
      {
        questionText: '1. Résoudre l\'équation B(q) = 0 pour déterminer les seuils de rentabilité.',
        hints: ['Un produit est nul si l\'un des facteurs est nul.'],
        solutionSteps: [
          '(q - 20)(100 - q) = 0 <=> q = 20 ou q = 100.'
        ],
        finalAnswer: 'q = 20 ou q = 100 figurines.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pour quelles quantités produites l\'atelier réalise-t-il un bénéfice strictement positif (B(q) > 0) ?',
        hints: ['Tableau de signes ou parabole tournée vers le bas.'],
        solutionSteps: [
          'Le coefficient devant q^2 est -1 < 0.',
          'Le produit est strictement positif entre les racines 20 et 100.',
          'Donc pour q ∈ ]20 ; 100[.'
        ],
        finalAnswer: 'Entre 21 et 99 figurines produites.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-p2-8',
    targetChapterId: 'math-2nde-geometrie-reperee',
    title: 'Périmètre d’un Triangle de Balises GPS Marines',
    context: 'Trois balises GPS ont pour coordonnées A(0 ; 0), B(3 ; 4) et C(6 ; 0) en kilomètres.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '📍 GPS & Distances Cartésiennes',
    questions: [
      {
        questionText: '1. Calculer la distance AB.',
        hints: ['AB = √((3-0)^2 + (4-0)^2).'],
        solutionSteps: [
          'AB = √(3^2 + 4^2) = √(9 + 16) = √25 = 5 km.'
        ],
        finalAnswer: 'AB = 5 km.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer BC et AC, puis donner la nature exacte du triangle ABC.',
        hints: ['BC = √((6-3)^2 + (0-4)^2).', 'AC = 6 - 0 = 6 km.'],
        solutionSteps: [
          'BC = √(3^2 + (-4)^2) = √25 = 5 km.',
          'AC = 6 km.',
          'Puisque AB = BC = 5 km ≠ AC, le triangle est isocèle en B.'
        ],
        finalAnswer: 'Triangle isocèle en B (AB = BC = 5 km, AC = 6 km).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-p2-9',
    targetChapterId: 'math-2nde-algo-python',
    title: 'Algorithme Python : Recherche du Seuil d’Épargne',
    context: 'Un compte épargne rapporte 3% d\'intérêts par an. On dépose 1 000 €. On cherche après combien d\'années le capital dépasse 1 500 €.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🐍 Python & Boucle While',
    questions: [
      {
        questionText: '1. Écrire la condition de la boucle while en Python pour simuler cette croissance.',
        hints: ['Tant que le capital est inférieur à 1 500 : while capital < 1500.'],
        solutionSteps: [
          'capital = 1000',
          'annees = 0',
          'while capital < 1500:',
          '    capital = capital * 1.03',
          '    annees += 1'
        ],
        finalAnswer: 'while capital < 1500: capital *= 1.03; annees += 1.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Après 14 ans, 1000 * 1,03^14 ≈ 1512,6 €. Combien d\'années sont nécessaires au minimum ?',
        hints: ['1000 * 1,03^13 ≈ 1468,5 €.'],
        solutionSteps: [
          'À n = 13 ans : capital ≈ 1468,5 € (< 1500).',
          'À n = 14 ans : capital ≈ 1512,6 € (≥ 1500).'
        ],
        finalAnswer: '14 années sont nécessaires.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-p2-10',
    targetChapterId: 'math-2nde-variations-extremums',
    title: 'Optimisation de la Portée d’un Émetteur Wi-Fi',
    context: 'L\'intensité du signal Wi-Fi I(d) à une distance d (en mètres) d\'un mur porteur est modélisée par I(d) = -(d - 6)^2 + 36 pour d ∈ [0 ; 12].',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '📶 Wi-Fi & Extremum',
    questions: [
      {
        questionText: '1. Déterminer la distance d_opt où le signal est maximal et donner cette intensité maximale.',
        hints: ['Un carré est toujours positif ou nul : -(d-6)^2 ≤ 0.'],
        solutionSteps: [
          'Puisque -(d - 6)^2 ≤ 0, I(d) ≤ 36.',
          'Le maximum 36 est atteint lorsque d - 6 = 0, soit d = 6 mètres.'
        ],
        finalAnswer: 'd = 6 mètres pour une intensité maximale de 36 u.a.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pour quelles distances d le signal s\'annule-t-il totalement (I(d) = 0) ?',
        hints: ['-(d - 6)^2 + 36 = 0 <=> (d - 6)^2 = 36.'],
        solutionSteps: [
          '(d - 6)^2 = 36 <=> d - 6 = 6 ou d - 6 = -6.',
          'd = 12 m ou d = 0 m.'
        ],
        finalAnswer: 'd = 0 m et d = 12 m.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-p2-11',
    targetChapterId: 'math-2nde-arithmetique',
    title: 'Multiples & Synchronisation de Feux Tricolores Intelligents',
    context: 'Deux feux de circulation passent au vert respectivement toutes les 45 secondes et toutes les 60 secondes. Ils viennent de passer au vert simultanément à 8h00.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '🚦 Smart City & PPCM',
    questions: [
      {
        questionText: '1. Calculer le plus petit commun multiple PPCM(45, 60).',
        hints: ['45 = 3^2 * 5 et 60 = 2^2 * 3 * 5.', 'Prendre les plus grands exposants.'],
        solutionSteps: [
          '45 = 9 * 5 = 3^2 * 5.',
          '60 = 4 * 15 = 2^2 * 3 * 5.',
          'PPCM(45, 60) = 2^2 * 3^2 * 5 = 4 * 9 * 5 = 180 secondes.'
        ],
        finalAnswer: 'PPCM = 180 secondes (soit 3 minutes).',
        pointsAllocated: 4
      },
      {
        questionText: '2. À quelle heure exacte repasseront-ils au vert ensemble pour la première fois ?',
        hints: ['Ajouter 3 minutes à 8h00.'],
        solutionSteps: [
          '8h00 + 3 minutes = 8h03.'
        ],
        finalAnswer: '8h03 et 00 seconde.',
        pointsAllocated: 2
      }
    ]
  },

  // --- 2NDE PHYSIQUE-CHIMIE (11 new exercises) ---
  {
    id: 'ex-2pc-p2-1',
    targetChapterId: 'pc-2nde-atome-mole',
    title: 'Quantité de Caféine dans un Espresso Double',
    context: 'Une tasse d\'espresso contient m = 160 mg de caféine de formule brute C8H10N4O2. Données : M(C)=12, M(H)=1, M(N)=14, M(O)=16 g/mol.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '☕ Chimie du Quotidien & Mole',
    questions: [
      {
        questionText: '1. Calculer la masse molaire M de la caféine.',
        hints: ['8*12 + 10*1 + 4*14 + 2*16.'],
        solutionSteps: [
          'M = 8*12 + 10*1 + 4*14 + 2*16 = 96 + 10 + 56 + 32 = 194 g/mol.'
        ],
        finalAnswer: 'M = 194 g/mol.',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire la quantité de matière n de caféine ingérée (en mmol).',
        hints: ['n = m / M avec m en grammes (0,160 g).'],
        solutionSteps: [
          'm = 160 mg = 0,160 g.',
          'n = 0,160 / 194 ≈ 8,25 * 10^-4 mol = 0,825 mmol.'
        ],
        finalAnswer: 'n ≈ 0,825 mmol.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-p2-2',
    targetChapterId: 'pc-2nde-lumiere-snell',
    title: 'Réfraction dans l’Eau d’une Piscine Olympique',
    context: 'Un plongeur éclaire la surface depuis le fond de l\'eau (n_eau = 1,33) vers l\'air (n_air = 1,00) avec un angle d\'incidence i1 = 30°.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '🏊 Natation & Snell-Descartes',
    questions: [
      {
        questionText: '1. Calculer l\'angle de réfraction i2 dans l\'air.',
        hints: ['n_eau * sin(i1) = n_air * sin(i2).', 'sin(30°) = 0,5.'],
        solutionSteps: [
          '1,33 * sin(30°) = 1,00 * sin(i2).',
          'sin(i2) = 1,33 * 0,5 = 0,665.',
          'i2 = arcsin(0,665) ≈ 41,7°.'
        ],
        finalAnswer: 'i2 ≈ 41,7°.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Pourquoi l\'angle de réfraction est-il plus grand que l\'angle d\'incidence ?',
        hints: ['La lumière passe d\'un milieu plus réfringent vers un milieu moins réfringent.'],
        solutionSteps: [
          'Le rayon s\'écarte de la normale car l\'air a un indice de réfraction plus faible que l\'eau (milieu moins réfringent).'
        ],
        finalAnswer: 'Écartement de la normale car n_air < n_eau.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-p2-3',
    targetChapterId: 'pc-2nde-solutions',
    title: 'Sérum Physiologique & Concentration Massique',
    context: 'Une dosette de sérum physiologique de 10 mL contient du chlorure de sodium (NaCl) à la concentration en masse Cm = 9,0 g/L.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🏥 Pharmacie & Sérum Physiologique',
    questions: [
      {
        questionText: '1. Calculer la masse m de sel dissous dans cette dosette de 10 mL.',
        hints: ['m = Cm * V.', 'Convertir 10 mL en L : 0,010 L.'],
        solutionSteps: [
          'V = 10 mL = 0,010 L.',
          'm = 9,0 g/L * 0,010 L = 0,090 g = 90 mg.'
        ],
        finalAnswer: 'm = 90 mg de NaCl.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Sachant que M(NaCl) = 58,5 g/mol, calculer la concentration molaire C.',
        hints: ['C = Cm / M.'],
        solutionSteps: [
          'C = 9,0 / 58,5 ≈ 0,154 mol/L = 154 mmol/L.'
        ],
        finalAnswer: 'C ≈ 0,154 mol/L (isotonique au plasma sanguin).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-p2-4',
    targetChapterId: 'pc-2nde-mouvement',
    title: 'Accélération d’un Sprinter lors du Départ des Blocs',
    context: 'Un sprinter passe de 0 à 10 m/s en 2,0 secondes lors des 15 premiers mètres d\'un 100 mètres.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏃 Sprint & Accélération Moyenne',
    questions: [
      {
        questionText: '1. Calculer l\'accélération moyenne a_moy du sprinter.',
        hints: ['a_moy = (v_final - v_initial) / Δt.'],
        solutionSteps: [
          'a_moy = (10 - 0) / 2,0 = 5,0 m/s^2.'
        ],
        finalAnswer: 'a_moy = 5,0 m/s^2.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Exprimer sa vitesse de 10 m/s en km/h.',
        hints: ['Multiplier par 3,6.'],
        solutionSteps: [
          'v = 10 * 3,6 = 36 km/h.'
        ],
        finalAnswer: 'v = 36 km/h.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-p2-5',
    targetChapterId: 'pc-2nde-spectres-etoiles',
    title: 'Spectre Solaire & Température de Surface du Soleil',
    context: 'Le maximum d\'émission du Soleil est mesuré à λ_max = 502 nm (dans le vert). Constante de Wien b = 2,898 * 10^-3 m.K.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'space',
    themeLabel: '☀️ Soleil & Loi de Wien',
    questions: [
      {
        questionText: '1. Rappeler la loi de Wien liant λ_max et T.',
        hints: ['λ_max * T = b.'],
        solutionSteps: [
          'λ_max * T = 2,898 * 10^-3 m.K.'
        ],
        finalAnswer: 'λ_max · T = 2,898 · 10^-3 m·K.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la température de surface T du Soleil en Kelvins.',
        hints: ['λ_max = 502 * 10^-9 m.'],
        solutionSteps: [
          'T = (2,898 * 10^-3) / (502 * 10^-9) ≈ 5 773 K.'
        ],
        finalAnswer: 'T ≈ 5 770 K (environ 5 500 °C).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-2pc-p2-6',
    targetChapterId: 'pc-2nde-forces-principe-inertie',
    title: 'Poids d’un Astronaute sur Mars vs sur Terre',
    context: 'Un astronaute et sa combinaison ont une masse totale m = 120 kg. Sur Terre g_T = 9,81 N/kg ; sur Mars g_M = 3,71 N/kg.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'space',
    themeLabel: '🚀 Mission Mars & Poids',
    questions: [
      {
        questionText: '1. La masse de l\'astronaute change-t-elle sur Mars ? Justifier.',
        hints: ['La masse est une grandeur intrinsèque liée à la quantité de matière.'],
        solutionSteps: [
          'Non. La masse est invariante : elle vaut toujours 120 kg sur Terre, sur Mars ou dans le vide.'
        ],
        finalAnswer: 'Non, la masse reste strictement égale à 120 kg.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer son poids sur Terre P_T puis sur Mars P_M.',
        hints: ['P = m * g.'],
        solutionSteps: [
          'Sur Terre : P_T = 120 * 9,81 = 1 177,2 N.',
          'Sur Mars : P_M = 120 * 3,71 = 445,2 N (près de 3 fois plus léger !).'
        ],
        finalAnswer: 'P_T ≈ 1 177 N et P_M ≈ 445 N.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2pc-p2-7',
    targetChapterId: 'pc-2nde-corps-purs-melanges',
    title: 'Identification d’un Polymère Plastique par Flottaison',
    context: 'Un laboratoire teste un échantillon de plastique de masse m = 18,4 g et de volume V = 20,0 cm^3 dans l\'eau salée (ρ_eau_salée = 1,05 g/cm^3).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '♻️ Recyclage & Densité des Plastiques',
    questions: [
      {
        questionText: '1. Calculer la masse volumique ρ du plastique.',
        hints: ['ρ = m / V.'],
        solutionSteps: [
          'ρ = 18,4 / 20,0 = 0,92 g/cm^3.'
        ],
        finalAnswer: 'ρ = 0,92 g/cm^3 (polyéthylène basse densité PE-BD).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Ce plastique flottera-t-il sur l\'eau salée ? Justifier.',
        hints: ['Comparer la masse volumique du plastique à celle de l\'eau salée.'],
        solutionSteps: [
          '0,92 g/cm^3 < 1,05 g/cm^3. Comme sa masse volumique est plus faible que celle du liquide, le plastique flotte.'
        ],
        finalAnswer: 'Oui, il flotte car ρ_plastique < ρ_eau_salée.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-p2-8',
    targetChapterId: 'pc-2nde-transformations-chimiques-nucleaires',
    title: 'Combustion Complète du Méthane dans une Chaudière Gaz',
    context: 'La combustion du gaz de ville s\'écrit : CH4 (g) + 2 O2 (g) -> CO2 (g) + 2 H2O (g). On brûle n(CH4) = 5,0 mol de méthane.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🔥 Énergie & Combustion',
    questions: [
      {
        questionText: '1. Quelle quantité de dioxygène O2 est requise pour cette combustion complète ?',
        hints: ['Rapport stœchiométrique 1 pour 2.'],
        solutionSteps: [
          'D\'après les coefficients : n(O2) = 2 * n(CH4) = 2 * 5,0 = 10,0 mol.'
        ],
        finalAnswer: 'n(O2) = 10,0 mol.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel volume de CO2 est produit à 20 °C (Vm = 24,0 L/mol) ?',
        hints: ['n(CO2) = n(CH4) = 5,0 mol. V = n * Vm.'],
        solutionSteps: [
          'V(CO2) = 5,0 * 24,0 = 120 Litres.'
        ],
        finalAnswer: 'V(CO2) = 120 L.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-p2-9',
    targetChapterId: 'pc-2nde-atome-mole',
    title: 'Atome d’Argon & Stabilité des Gaz Nobles',
    context: 'L\'argon (Z = 18) est utilisé dans le double vitrage thermique isolant en raison de son inertie chimique totale.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '💡 Gaz Nobles & Règle de l’Octet',
    questions: [
      {
        questionText: '1. Écrire la configuration électronique de l\'atome d\'argon.',
        hints: ['Z = 18 : remplir 1s, 2s, 2p, 3s, 3p.'],
        solutionSteps: [
          '1s^2 2s^2 2p^6 3s^2 3p^6.'
        ],
        finalAnswer: '1s^2 2s^2 2p^6 3s^2 3p^6.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi l\'argon ne forme-t-il aucune liaison chimique naturelle ?',
        hints: ['Couche externe saturée à 8 électrons (octet).'],
        solutionSteps: [
          'Sa couche externe n = 3 possède 8 électrons (octet complet saturé). Sa stabilité énergétique est maximale, il ne gagne, ne perd ni ne partage d\'électrons.'
        ],
        finalAnswer: 'Couche de valence saturée à 8 électrons (gaz noble inerte).',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2pc-p2-10',
    targetChapterId: 'pc-2nde-forces-principe-inertie',
    title: 'Traction d’un Skieur Nautique à Vitesse Constante',
    context: 'Un skieur nautique de 70 kg est tiré en ligne droite à vitesse constante v = 45 km/h par un câble exerçant une force de traction horizontale T = 250 N.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏄 Ski Nautique & Bilan des Forces',
    questions: [
      {
        questionText: '1. D\'après le principe d\'inertie, que peut-on affirmer sur la résultante des forces s\'exerçant sur le skieur ?',
        hints: ['Mouvement rectiligne uniforme.'],
        solutionSteps: [
          'Le mouvement est rectiligne uniforme dans le référentiel terrestre. D\'après le principe d\'inertie, les forces qui s\'exercent sur lui se compensent parfaitement (somme vectorielle nulle).'
        ],
        finalAnswer: 'La somme vectorielle des forces est nulle (Σ F = 0).',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire la valeur de la force de frottement exercée par l\'eau et l\'air.',
        hints: ['La force de frottement compense la force de traction T.'],
        solutionSteps: [
          'F_frott = T = 250 N, opposée au sens du mouvement.'
        ],
        finalAnswer: 'F_frott = 250 N.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-p2-11',
    targetChapterId: 'pc-2nde-transformations-chimiques-nucleaires',
    title: 'Fission de l’Uranium 235 dans un Réacteur EPR',
    context: 'Un neutron lent percute un noyau d\'uranium 235 : 1_0 n + 235_92 U -> 94_38 Sr + 140_54 Xe + x 1_0 n.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '⚛️ Nucléaire EPR & Fission',
    questions: [
      {
        questionText: '1. Appliquer les lois de conservation de Soddy pour déterminer le nombre x de neutrons libérés.',
        hints: ['Conservation de A : 1 + 235 = 94 + 140 + x*1.'],
        solutionSteps: [
          'Conservation du nombre de masse A : 1 + 235 = 236.',
          'À droite : 94 + 140 + x = 234 + x.',
          '236 = 234 + x <=> x = 2 neutrons.'
        ],
        finalAnswer: 'x = 2 neutrons libérés.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Pourquoi cette libération de neutrons permet-elle une réaction en chaîne ?',
        hints: ['Chaque neutron émis peut induire la fission d\'autres noyaux d\'U 235.'],
        solutionSteps: [
          'Les neutrons émis vont à leur tour percuter d\'autres noyaux fissiles d\'uranium 235, amplifiant la réaction de manière continue (réaction en chaîne contrôlée par les barres de commande en bore).'
        ],
        finalAnswer: 'Les neutrons produits déclenchent de nouvelles fissions en cascade.',
        pointsAllocated: 3
      }
    ]
  },

  // --- 2NDE SVT (11 new exercises) ---
  {
    id: 'ex-2svt-p2-1',
    targetChapterId: 'svt-2nde-cellule-metabolisme',
    title: 'Autotrophie vs Hétérotrophie chez l’Euglène',
    context: 'L\'euglène est un micro-organisme unicellulaire capable de réaliser la photosynthèse à la lumière, mais pouvant aussi consommer de la matière organique à l\'obscurité.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🔬 Euglène & Métabolisme Mixotrophe',
    questions: [
      {
        questionText: '1. Définir ce qu\'est une cellule autotrophe.',
        hints: ['Capacité à fabriquer sa propre matière organique à partir de matière minérale et d\'énergie lumineuse.'],
        solutionSteps: [
          'Une cellule autotrophe est capable de produire sa propre matière organique (comme les sucres) à partir de substances minérales simples (eau, CO2, sels minéraux) en utilisant une source d\'énergie externe (généralement la lumière par photosynthèse).'
        ],
        finalAnswer: 'Cellule synthétisant sa matière organique à partir de matière minérale et de lumière.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel terme qualifie le mode de nutrition où l\'organisme doit prélever de la matière organique préexistante ?',
        hints: ['Hétérotrophe.'],
        solutionSteps: [
          'Ce mode de nutrition est l\'hétérotrophie (cas des animaux, champignons et cellules humaines).'
        ],
        finalAnswer: 'L\'hétérotrophie.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-p2-2',
    targetChapterId: 'svt-2nde-biodiversite',
    title: 'Spéciation Allopatrique des Pinsons des Galápagos',
    context: 'Sur différentes îles de l\'archipel des Galápagos, les pinsons étudiés par Darwin présentent des formes de bec adaptées à des régimes alimentaires différents (graines dures, insectes, nectar).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🐦 Évolution & Pinsons de Darwin',
    questions: [
      {
        questionText: '1. Quel facteur géographique initial est nécessaire à une spéciation allopatrique ?',
        hints: ['Isolement géographique.'],
        solutionSteps: [
          'La séparation spatiale d\'une population initiale par une barrière géographique infranchissable (ici la mer entre les îles) empêchant tout flux de gènes (isolement reproducteur).'
        ],
        finalAnswer: 'L\'isolement géographique.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Comment la sélection naturelle a-t-elle façonné les becs des pinsons sur chaque île ?',
        hints: ['Les individus dotés du bec le plus efficace pour la ressource locale se nourrissent mieux et se reproduisent plus.'],
        solutionSteps: [
          'Sur une île avec des graines grosses et dures, les oiseaux aux becs épais et puissants ont un avantage alimentaire, survivent mieux et transmettent leurs allèles à leur descendance, fixant progressivement cette morphologie.'
        ],
        finalAnswer: 'Sélection des allèles conférant un bec adapté à la nourriture dominante de chaque île.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2svt-p2-3',
    targetChapterId: 'svt-2nde-agrosystemes',
    title: 'Empreinte Hydrique de la Viande Bovine vs Légumineuses',
    context: 'Selon la FAO, il faut en moyenne 15 000 litres d\'eau pour produire 1 kg de viande de bœuf, contre seulement 1 500 litres pour 1 kg de lentilles.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'ecologie',
    themeLabel: '🌱 Écologie & Empreinte Hydrique',
    questions: [
      {
        questionText: '1. Pourquoi la production animale consomme-t-elle beaucoup plus de ressources végétales et d\'eau que la consommation directe de plantes ?',
        hints: ['Rendement trophique : perte d\'énergie à chaque niveau de la chaîne alimentaire.'],
        solutionSteps: [
          'L\'animal consomme d\'immenses volumes de céréales et de fourrage tout au long de sa vie, qui ont eux-mêmes nécessité de grandes quantités d\'eau d\'irrigation. Une grande partie de l\'énergie ingérée par l\'animal est dissipée sous forme de chaleur et d\'excréments (rendement trophique ~10%).'
        ],
        finalAnswer: 'Pertes énergétiques et hydriques cumulées le long de la chaîne trophique.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Par quel facteur l\'empreinte en eau est-elle divisée en remplaçant 1 kg de bœuf par 1 kg de lentilles ?',
        hints: ['15 000 / 1 500.'],
        solutionSteps: [
          '15 000 / 1 500 = 10 fois moins d\'eau consommée.'
        ],
        finalAnswer: 'Divisée par 10.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-p2-4',
    targetChapterId: 'svt-2nde-effort-musculaire',
    title: 'Fréquence Cardiaque Maximale & Règle d’Astrand',
    context: 'Un lycéen de 16 ans prépare une épreuve d\'endurance en cours d\'EPS. On estime sa Fréquence Cardiaque Maximale (FCM).',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'sport',
    themeLabel: '❤️ Cardio & Formule d’Astrand',
    questions: [
      {
        questionText: '1. Calculer la FCM théorique selon la formule empirique FCM = 220 - âge.',
        hints: ['220 - 16.'],
        solutionSteps: [
          'FCM = 220 - 16 = 204 battements par minute (bpm).'
        ],
        finalAnswer: 'FCM = 204 bpm.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Pourquoi est-il dangereux de maintenir un effort à 100% de sa FCM sur une longue durée ?',
        hints: ['Acidose lactique, baisse du remplissage ventriculaire et épuisement cardiaque.'],
        solutionSteps: [
          'À fréquence maximale, le temps de diastole (remplissage du cœur) devient trop court, le volume d\'éjection systolique chute, et l\'acidose lactique musculaire devient intolérable.'
        ],
        finalAnswer: 'Remplissage cardiaque insuffisant et risque d\'acidose lactique sévère.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-p2-5',
    targetChapterId: 'svt-2nde-dynamique-terre-plaques',
    title: 'Séisme de magnitude 7 & Faille Décrochante de San Andreas',
    context: 'La faille de San Andreas en Californie est une frontière de plaques coulissante (décrochante) séparant la plaque Pacifique de la plaque Nord-Américaine.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🌍 Géologie & Faille Transformante',
    questions: [
      {
        questionText: '1. Quel type de mouvement relatif s\'opère au niveau d\'une faille transformante/décrochante ?',
        hints: ['Coulissage horizontal sans création ni destruction de lithosphère.'],
        solutionSteps: [
          'Les deux plaques glissent horizontalement l\'une contre l\'autre dans des sens opposés sans création de croûte (pas de dorsale) ni destruction (pas de subduction).'
        ],
        finalAnswer: 'Coulissage horizontal latéral (mouvement décrochant).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi les séismes y sont-ils souvent violents mais avec des foyers peu profonds ?',
        hints: ['Friction cassante dans la croûte rigide superficielle (< 20 km).'],
        solutionSteps: [
          'Le blocage mécanique de la faille accumule des contraintes élastiques intenses dans la partie cassante de la croûte supérieure (moins de 20 km). Lors de la rupture brutale, l\'énergie sismique est libérée très près de la surface.'
        ],
        finalAnswer: 'Rupture élastique brutale dans la croûte superficielle cassante.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-p2-6',
    targetChapterId: 'svt-2nde-procreation-sexualite-sante',
    title: 'Cryptorchidie & Régulation Thermique de la Spermatogenèse',
    context: 'Les testicules humains sont logés dans les bourses (scrotum) à l\'extérieur de la cavité abdominale, où la température est de 34,5 °C.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🔬 Reproduction Humaine & Température',
    questions: [
      {
        questionText: '1. Pourquoi la spermatogenèse nécessite-t-elle une température inférieure à 37 °C ?',
        hints: ['La chaleur corporelle bloque la méiose des cellules souches de spermatozoïdes.'],
        solutionSteps: [
          'Les enzymes de la méiose et de la maturation des spermatozoïdes sont thermosensibles et nécessitent une température comprise entre 34 °C et 35 °C.'
        ],
        finalAnswer: 'Les étapes de la spermatogenèse sont inhibées à la température corporelle interne de 37 °C.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelles cellules testiculaires sécrètent la testostérone ?',
        hints: ['Cellules interstitielles de Leydig.'],
        solutionSteps: [
          'Ce sont les cellules interstitielles de Leydig, situées entre les tubes séminifères.'
        ],
        finalAnswer: 'Les cellules de Leydig.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-p2-7',
    targetChapterId: 'svt-2nde-cellule-metabolisme',
    title: 'Osmose & Turgescence des Cellules d’Oignon Rouge',
    context: 'Des cellules d\'épiderme d\'oignon rouge sont placées dans une solution d\'eau salée très concentrée (milieu hypertonique à 10% NaCl).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🔬 Microscopie & Plasmolyse',
    questions: [
      {
        questionText: '1. Quel phénomène d\'écoulement de l\'eau observe-t-on ?',
        hints: ['L\'eau sort de la cellule vers le milieu le plus concentré : osmose.'],
        solutionSteps: [
          'Par osmose, l\'eau diffuse passivement du compartiment le moins concentré en soluté (la vacuole intracellulaire) vers le plus concentré (le milieu extracellulaire hypertonique).'
        ],
        finalAnswer: 'L\'osmose (sortie d\'eau de la vacuole).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel est l\'état de la cellule : turgescente ou plasmolysée ?',
        hints: ['La membrane plasmique se décolle de la paroi végétale rigide.'],
        solutionSteps: [
          'La vacuole rétrécit et la membrane plasmique se rétracte de la paroi pectocellulosique : la cellule est plasmolysée.'
        ],
        finalAnswer: 'Cellule plasmolysée.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2svt-p2-8',
    targetChapterId: 'svt-2nde-biodiversite',
    title: 'Dimorphisme Sexuel & Sélection Sexuelle chez le Paon',
    context: 'Le paon mâle déploie une roue somptueuse de plumes colorées mais très encombrante face aux prédateurs.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🦚 Évolution & Sélection Sexuelle',
    questions: [
      {
        questionText: '1. Quel mécanisme évolutif explique le maintien de cette parure coûteuse ?',
        hints: ['Sélection sexuelle (préférence des femelles pour les mâles vigoureux).'],
        solutionSteps: [
          'C\'est la sélection sexuelle : les femelles choisissent préférentiellement les mâles aux plumes les plus régulières et éclatantes (théorie du handicap signalant une excellente santé génétique et parasitaire).'
        ],
        finalAnswer: 'La sélection sexuelle.',
        pointsAllocated: 3
      },
      {
        questionText: '2. En quoi la sélection sexuelle peut-elle s\'opposer à la sélection de survie ?',
        hints: ['Visibilité pour les prédateurs.'],
        solutionSteps: [
          'La queue volumineuse ralentit le vol et attire les prédateurs, réduisant la survie brute mais augmentant considérablement le succès d\'accouplement (succès reproducteur).'
        ],
        finalAnswer: 'Compromis évolutif : handicap de survie mais succès reproducteur accru.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-p2-9',
    targetChapterId: 'svt-2nde-agrosystemes',
    title: 'Effet de Serre & Cultures Sous Serre en Maraîchage',
    context: 'Une serre agricole utilise du verre transparent au rayonnement visible solaire mais opaque aux rayons infrarouges thermiques réémis par le sol.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'ecologie',
    themeLabel: '🍅 Maraîchage & Effet de Serre',
    questions: [
      {
        questionText: '1. Expliquer le principe physique du piège thermique sous serre.',
        hints: ['La lumière visible entre, le sol chauffe et émet des infrarouges bloqués par le verre.'],
        solutionSteps: [
          'Le rayonnement solaire visible à courte longueur d\'onde traverse le verre et réchauffe le sol. Le sol réémet de l\'énergie sous forme d\'infrarouges thermiques à grande longueur d\'onde, qui sont piégés par le vitrage.'
        ],
        finalAnswer: 'Piégeage du rayonnement infrarouge thermique par les parois de verre.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel est l\'avantage agronomique pour les cultures en saison froide ?',
        hints: ['Maintien d\'une température optimale pour la croissance végétale.'],
        solutionSteps: [
          'Prolongation de la période de culture et accélération de la photosynthèse grâce à une température douce constante à l\'abri du gel.'
        ],
        finalAnswer: 'Protection contre le gel et accélération de la croissance des fruits et légumes.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-p2-10',
    targetChapterId: 'svt-2nde-effort-musculaire',
    title: 'Courbatures & Micro-Lésions Musculaires après Musculation',
    context: 'Après une séance de musculation excentrique (squats lourds), un sportif ressent des courbatures 24 à 48 heures plus tard (DOMS).',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'sport',
    themeLabel: '🏋️ Musculation & Fibres Musculaires',
    questions: [
      {
        questionText: '1. Les courbatures sont-elles causées par une accumulation d\'acide lactique ? Justifier.',
        hints: ['Non ! Le lactate est éliminé du sang en moins d\'une heure après l\'effort.'],
        solutionSteps: [
          'Non, c\'est une idée reçue. L\'acide lactique est entièrement évacué du muscle par la circulation sanguine en moins d\'une heure.',
          'Les courbatures résultent de micro-déchirures au niveau des sarcomères (stries Z) déclenchant une réaction inflammatoire réparatrice différée.'
        ],
        finalAnswer: 'Faux : les courbatures sont dues à des micro-lésions des myofibrilles et non au lactate.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel processus cellulaire assure la reconstruction et le renforcement des fibres musculaires (hypertrophie) ?',
        hints: ['Activation des cellules satellites musculaires et synthèse protéique.'],
        solutionSteps: [
          'Les cellules satellites musculaires fusionnent avec les fibres abîmées et augmentent la synthèse de filaments d\'actine et de myosine, rendant le muscle plus résistant et plus volumineux.'
        ],
        finalAnswer: 'Activation des cellules satellites et synthèse de nouvelles myofibrilles.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2svt-p2-11',
    targetChapterId: 'svt-2nde-dynamique-terre-plaques',
    title: 'Failles Normales vs Failles Inverses en Géologie',
    context: 'En géologie structurale, on distingue les failles normales formées en contexte d\'extension des failles inverses formées en compression.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🏔️ Tectonique & Types de Failles',
    questions: [
      {
        questionText: '1. Dans quel contexte tectonique (divergence ou convergence) observe-t-on des failles normales ?',
        hints: ['Les failles normales étirent la croûte : contexte d\'extension/divergence.'],
        solutionSteps: [
          'Les failles normales caractérisent un régime d\'extension tectonique (divergence), comme dans les rifts continentaux et les dorsales océaniques.'
        ],
        finalAnswer: 'Contexte d\'extension / divergence (rifts et dorsales).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel type de faille provoque un raccourcissement horizontal et un empilement de couches rocheuses en chaîne de montagne ?',
        hints: ['Failles inverses.'],
        solutionSteps: [
          'Ce sont les failles inverses (et les chevauchements/nappes de charriage), caractéristiques de la convergence et de la collision continentale.'
        ],
        finalAnswer: 'Les failles inverses (contexte de compression).',
        pointsAllocated: 2
      }
    ]
  }
];
