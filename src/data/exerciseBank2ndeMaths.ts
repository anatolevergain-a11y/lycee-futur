import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_2NDE_MATHS: BankExerciseItem[] = [
  {
    id: 'ex-2m-bank-1',
    targetChapterId: 'math-2nde-arithmetique',
    title: 'Arithmétique & Cryptage d’un Pass Joueur',
    context: 'Un serveur Discord de gaming génère un jeton sécurisé basé sur le produit P = 2^4 * 3^2 * 5 * 11. On cherche à analyser ses diviseurs et vérifier son intégrité.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'gaming',
    themeLabel: '🎮 Sécurité & Gaming',
    questions: [
      {
        questionText: '1. Calculer la valeur exacte de P et déterminer son nombre total de diviseurs positifs.',
        hints: ['Pour n = p^a * q^b * r^c, le nombre de diviseurs est (a+1)(b+1)(c+1)...', 'Ici les exposants sont 4, 2, 1, 1.'],
        solutionSteps: [
          'Calcul direct : P = 16 * 9 * 5 * 11 = 144 * 55 = 7920.',
          'Formule du nombre de diviseurs : N = (4 + 1)(2 + 1)(1 + 1)(1 + 1) = 5 * 3 * 2 * 2 = 60 diviseurs.'
        ],
        finalAnswer: 'P = 7920 et P possède 60 diviseurs positifs distincts.',
        pointsAllocated: 3,
        bacTrap: 'Ne pas oublier d\'ajouter 1 à chaque exposant dans la formule !'
      },
      {
        questionText: '2. Montrer que la fraction 7920 / 4950 est réductible et donner sa forme irréductible simplifiée.',
        hints: ['Décomposer 4950 en produit de facteurs premiers.', '4950 = 495 * 10 = 5 * 99 * 2 * 5 = 2 * 3^2 * 5^2 * 11.'],
        solutionSteps: [
          'Décomposition de 4950 : 4950 = 2 * 3^2 * 5^2 * 11.',
          'Quotient : 7920 / 4950 = (2^4 * 3^2 * 5 * 11) / (2 * 3^2 * 5^2 * 11).',
          'En simplifiant par 2 * 3^2 * 5 * 11 = 990, il reste 2^3 / 5 = 8 / 5 = 1,6.'
        ],
        finalAnswer: '7920 / 4950 = 8 / 5 (qui est un nombre décimal égal à 1,6).',
        pointsAllocated: 4,
        bacTrap: '8/5 a un dénominateur qui est une puissance de 5, c\'est donc bien un élément de 𝔻.'
      }
    ]
  },
  {
    id: 'ex-2m-bank-2',
    targetChapterId: 'math-2nde-arithmetique',
    title: 'Irrationalité & Calcul Littéral en Design 3D',
    context: 'Un infographiste conçoit un logo composé d\'un carré de côté 1 et de sa diagonale. On étudie le nombre A = (3 + √2)^2 - 6√2.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'tech',
    themeLabel: '💻 Graphisme & Algèbre',
    questions: [
      {
        questionText: '1. Développer et simplifier l\'expression A = (3 + √2)^2 - 6√2.',
        hints: ['Utiliser l\'identité remarquable (a + b)^2 = a^2 + 2ab + b^2.', '(√2)^2 = 2.'],
        solutionSteps: [
          '(3 + √2)^2 = 3^2 + 2 * 3 * √2 + (√2)^2 = 9 + 6√2 + 2 = 11 + 6√2.',
          'Donc A = 11 + 6√2 - 6√2 = 11.'
        ],
        finalAnswer: 'A = 11 (qui est un entier naturel ℕ).',
        pointsAllocated: 2
      },
      {
        questionText: '2. À quel plus petit ensemble de nombres A appartient-il ?',
        hints: ['11 est un entier positif sans virgule.'],
        solutionSteps: [
          '11 est un entier naturel positif.',
          'Le plus petit ensemble contenant 11 est donc ℕ.'
        ],
        finalAnswer: 'A ∈ ℕ (ensemble des entiers naturels).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-bank-3',
    targetChapterId: 'math-2nde-fonctions',
    title: 'Optimisation de FPS sur Carte Graphique',
    context: 'Le nombre de trames par seconde (FPS) généré par un GPU en fonction de sa fréquence d’overclocking x (en GHz, pour x ∈ [2 ; 5]) est modélisé par f(x) = -10x^2 + 80x - 40.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'gaming',
    themeLabel: '🎮 Hardware & FPS',
    questions: [
      {
        questionText: '1. Calculer le nombre de FPS pour une fréquence de base x = 2 GHz et x = 4 GHz.',
        hints: ['Remplacer x par 2 puis par 4 dans l\'expression de f(x).'],
        solutionSteps: [
          'Pour x = 2 : f(2) = -10(2^2) + 80(2) - 40 = -40 + 160 - 40 = 80 FPS.',
          'Pour x = 4 : f(4) = -10(4^2) + 80(4) - 40 = -160 + 320 - 40 = 120 FPS.'
        ],
        finalAnswer: 'f(2) = 80 FPS et f(4) = 120 FPS.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Vérifier que pour tout x ∈ [2 ; 5], f(x) = -10(x - 4)^2 + 120. En déduire la fréquence optimale et le FPS maximal.',
        hints: ['Développer la forme canonique -10(x - 4)^2 + 120 et comparer avec f(x).', 'Un carré est toujours positif ou nul.'],
        solutionSteps: [
          '-10(x^2 - 8x + 16) + 120 = -10x^2 + 80x - 160 + 120 = -10x^2 + 80x - 40, ce qui correspond bien à f(x).',
          'Puisque (x - 4)^2 ≥ 0, -10(x - 4)^2 ≤ 0, donc f(x) ≤ 120 pour tout x.',
          'Le maximum est atteint lorsque (x - 4)^2 = 0, c\'est-à-dire pour x = 4 GHz.'
        ],
        finalAnswer: 'Fréquence optimale = 4 GHz, procurant un maximum de 120 FPS.',
        pointsAllocated: 5,
        bacTrap: 'Ne pas oublier de justifier que le maximum est atteint pour x = 4 qui est bien dans l\'intervalle [2 ; 5].'
      }
    ]
  },
  {
    id: 'ex-2m-bank-4',
    targetChapterId: 'math-2nde-fonctions',
    title: 'Fonctions de Référence : Trajectoire d’un Saut en Parkour',
    context: 'Un traceur de parkour saute entre deux toits. La hauteur h(x) (en mètres) au sol dépend de la distance horizontale x (en mètres) : h(x) = -(x - 3)^2 + 5 pour x ∈ [0 ; 6].',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏃 Parkour & Extrêmes',
    questions: [
      {
        questionText: '1. Identifier la fonction de référence associée à h(x) et donner le sommet de la parabole.',
        hints: ['La fonction fait intervenir la fonction carré X ↦ X^2.', 'La forme a(x - α)^2 + β a pour sommet S(α, β).'],
        solutionSteps: [
          'La fonction de référence est la fonction carré x ↦ x^2.',
          'L\'expression h(x) est sous forme canonique avec α = 3 et β = 5. Le sommet est S(3 ; 5).'
        ],
        finalAnswer: 'Fonction carré ; sommet S(3 ; 5).',
        pointsAllocated: 3
      },
      {
        questionText: '2. À quelle hauteur le traceur prend-il son impulsion (x = 0) et à quelle distance touche-t-il le sol (h(x) = 0, approché ou exact) ?',
        hints: ['Calculer h(0).', 'Pour h(x) = 0 : -(x - 3)^2 + 5 = 0 <=> (x - 3)^2 = 5.'],
        solutionSteps: [
          'h(0) = -(0 - 3)^2 + 5 = -9 + 5 = -4 (au niveau du sol de référence z = 0, il démarre à 0 si le toit est à 1 m, ici impulsion à h(0) = -4 m sous le toit de référence ou toit initial à x = 1 : h(1) = 1 m).',
          'Pour h(x) = 0 : (x - 3)^2 = 5 <=> x - 3 = √5 (car x ≥ 3 pour la réception), soit x = 3 + √5 ≈ 5,24 m.'
        ],
        finalAnswer: 'h(0) = -4 m (ou départ toit) et impact à x = 3 + √5 ≈ 5,24 m.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-bank-5',
    targetChapterId: 'math-2nde-vecteurs',
    title: 'Navigation Spatiale : Alignement de Satellites Starlink',
    context: 'Dans le plan orbital rapporté à un repère orthonormé, trois satellites de télécommunication ont pour coordonnées A(-2 ; 3), B(2 ; 1) et C(10 ; -3). On souhaite vérifier s\'ils sont alignés pour transmettre un laser de communication.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'space',
    themeLabel: '🚀 Satellites & Rayon Laser',
    questions: [
      {
        questionText: '1. Déterminer les coordonnées des vecteurs AB et AC.',
        hints: ['Formule : AB = (xB - xA ; yB - yA).'],
        solutionSteps: [
          'Vecteur AB : (2 - (-2) ; 1 - 3) = (4 ; -2).',
          'Vecteur AC : (10 - (-2) ; -3 - 3) = (12 ; -6).'
        ],
        finalAnswer: 'Vecteur AB(4 ; -2) et Vecteur AC(12 ; -6).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer le déterminant des vecteurs AB et AC. Les trois satellites sont-ils alignés ?',
        hints: ['det(u, v) = x * y\' - y * x\'.', 'Deux vecteurs sont colinéaires si et seulement si leur déterminant est nul.'],
        solutionSteps: [
          'det(AB, AC) = (4) * (-6) - (-2) * (12) = -24 - (-24) = -24 + 24 = 0.',
          'Le déterminant est nul, les vecteurs AB et AC sont colinéaires.',
          'Puisqu\'ils partagent le point A, les points A, B et C sont alignés.'
        ],
        finalAnswer: 'det(AB, AC) = 0 : les 3 satellites sont parfaitement alignés.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-bank-6',
    targetChapterId: 'math-2nde-vecteurs',
    title: 'Vecteurs & Force de Portance sur Drone FPV',
    context: 'Un drone de course subit deux forces dans le plan : son vecteur de poussée P(3 ; 5) et la résistance du vent V(-1 ; -2).',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'tech',
    themeLabel: '🚁 Drones & Forces',
    questions: [
      {
        questionText: '1. Calculer les coordonnées du vecteur résultant R = P + V.',
        hints: ['Additionner terme à terme les abscisses et les ordonnées.'],
        solutionSteps: [
          'xR = xP + xV = 3 + (-1) = 2.',
          'yR = yP + yV = 5 + (-2) = 3.',
          'Donc R(2 ; 3).'
        ],
        finalAnswer: 'R(2 ; 3).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Le pilote applique un vecteur de compensation C tel que R + C = 0. Déterminer les coordonnées de C.',
        hints: ['C est l\'opposé du vecteur R : C = -R.'],
        solutionSteps: [
          'R + C = 0 <=> C = -R.',
          'xC = -2 et yC = -3.'
        ],
        finalAnswer: 'C(-2 ; -3).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-bank-7',
    targetChapterId: 'math-2nde-probas',
    title: 'Loot Box & Rareté d’un Skin Légendaire',
    context: 'Dans un jeu multijoueur, une boîte mystère contient 70% d\'objets Communs (C), 25% d\'objets Rares (R) et 5% d\'objets Légendaires (L). Un joueur ouvre successivement 2 boîtes de façon indépendante.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'gaming',
    themeLabel: '🎮 Loot Box & Probabilités',
    questions: [
      {
        questionText: '1. Quelle est la probabilité d\'obtenir au moins un objet Légendaire en ouvrant 2 boîtes ?',
        hints: ['Passer par l\'événement contraire : "n\'obtenir aucun objet légendaire".', 'P(aucun L) = (1 - 0,05)^2.'],
        solutionSteps: [
          'Probabilité de ne pas avoir de légendaire à une ouverture : P(non L) = 1 - 0,05 = 0,95.',
          'Par indépendance, sur 2 ouvertures : P(aucun L) = 0,95 * 0,95 = 0,9025.',
          'Donc P(au moins un L) = 1 - 0,9025 = 0,0975 (soit 9,75%).'
        ],
        finalAnswer: 'P = 0,0975 (soit 9,75% de chance).',
        pointsAllocated: 4,
        bacTrap: 'Ne pas faire 0,05 + 0,05 = 0,10, car les tirages sont indépendants !'
      },
      {
        questionText: '2. Calculer la probabilité d\'obtenir exactement un objet Rare et un objet Commun.',
        hints: ['Il y a deux ordres possibles : (R puis C) ou (C puis R).'],
        solutionSteps: [
          'P(R puis C) = 0,25 * 0,70 = 0,175.',
          'P(C puis R) = 0,70 * 0,25 = 0,175.',
          'Probabilité totale : 0,175 + 0,175 = 0,35 (soit 35%).'
        ],
        finalAnswer: 'P = 0,35 (35%).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-bank-8',
    targetChapterId: 'math-2nde-droites',
    title: 'Trajectoire de Deux Voitures Autonomes & Point d’Intersection',
    context: 'Sur un circuit d\'essai de véhicules autonomes, deux trajectoires rectilignes sont repérées dans un plan. La voiture Alpha suit la droite (d1) : y = 2x - 3 et la voiture Bêta suit (d2) : 3x + 2y - 8 = 0.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🚗 Véhicules Autonomes & Droites',
    questions: [
      {
        questionText: '1. Donner le coefficient directeur de (d1) et déterminer celui de (d2). Les deux droites sont-elles sécantes ?',
        hints: ['Exprimer (d2) sous forme réduite y = mx + p.', 'Deux droites sont sécantes si leurs coefficients directeurs sont différents.'],
        solutionSteps: [
          'Pour (d1) : coefficient directeur m1 = 2.',
          'Pour (d2) : 2y = -3x + 8 <=> y = -1,5x + 4. Donc m2 = -1,5.',
          'Puisque m1 ≠ m2 (2 ≠ -1,5), les droites (d1) et (d2) ne sont pas parallèles : elles sont donc sécantes.'
        ],
        finalAnswer: 'm1 = 2 et m2 = -1,5 ; sécantes car m1 ≠ m2.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer les coordonnées du point d\'intersection I des deux trajectoires pour éviter la collision.',
        hints: ['Résoudre le système ou poser 2x - 3 = -1,5x + 4.'],
        solutionSteps: [
          '2x - 3 = -1,5x + 4 <=> 3,5x = 7 <=> x = 7 / 3,5 = 2.',
          'En remplaçant x = 2 dans (d1) : y = 2(2) - 3 = 4 - 3 = 1.',
          'Vérification dans (d2) : 3(2) + 2(1) - 8 = 6 + 2 - 8 = 0. Valide.'
        ],
        finalAnswer: 'Point d\'intersection I(2 ; 1).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-bank-9',
    targetChapterId: 'math-2nde-variations-extremums',
    title: 'Optimisation de la Surface d’un Panneau Solaire',
    context: 'Un architecte bioclimatique dispose d\'un câble d\'encadrement de 20 mètres pour fabriquer un panneau solaire rectangulaire de largeur x (en m) et de longueur L(x). On étudie la surface S(x) = x(10 - x).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '☀️ Panneaux Solaires & Surface',
    questions: [
      {
        questionText: '1. Quel est l\'intervalle de définition de x ? Dresser le tableau de signes de S(x).',
        hints: ['Une distance est positive et le demi-périmètre vaut 10.', 'S(x) = 0 pour x = 0 ou x = 10.'],
        solutionSteps: [
          'x doit être positif et inférieur à 10 m (demi-périmètre), donc x ∈ ]0 ; 10[.',
          'Racines de S(x) : x = 0 et x = 10. Le coefficient devant x^2 est négatif (-1), donc S(x) > 0 sur ]0 ; 10[.'
        ],
        finalAnswer: 'x ∈ ]0 ; 10[ et S(x) est strictement positif sur cet intervalle.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Montrer que S(x) = -(x - 5)^2 + 25. En déduire les dimensions qui maximisent la surface d\'énergie produite.',
        hints: ['Développer -(x - 5)^2 + 25.', 'Un carré étant positif, le maximum vaut 25.'],
        solutionSteps: [
          '-(x^2 - 10x + 25) + 25 = -x^2 + 10x = x(10 - x) = S(x).',
          '-(x - 5)^2 ≤ 0 donc S(x) ≤ 25 pour tout x.',
          'Le maximum est atteint quand x - 5 = 0, soit x = 5 m. La longueur vaut alors 10 - 5 = 5 m (un carré).'
        ],
        finalAnswer: 'Dimensions optimales : carré de 5 m sur 5 m pour une surface maximale de 25 m².',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-bank-10',
    targetChapterId: 'math-2nde-statistiques',
    title: 'Analyse Statistique des Temps en E-Sport (Sim Racing)',
    context: 'Lors d\'une qualification en Sim Racing, une équipe relève les temps au tour (en secondes) de 11 pilotes : 88, 89, 90, 91, 91, 92, 93, 94, 96, 98, 105.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏎️ Sim Racing & Statistiques',
    questions: [
      {
        questionText: '1. Calculer la moyenne des temps au tour (arrondie au dixième).',
        hints: ['Sommer tous les temps et diviser par l\'effectif total N = 11.'],
        solutionSteps: [
          'Somme = 88 + 89 + 90 + 91 + 91 + 92 + 93 + 94 + 96 + 98 + 105 = 1027.',
          'Moyenne = 1027 / 11 ≈ 93,36 s.'
        ],
        finalAnswer: 'Moyenne ≈ 93,4 secondes.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Déterminer la médiane Me, le premier quartile Q1 et le troisième quartile Q3 de la série.',
        hints: ['L\'effectif est 11 (impair) : le rang de la médiane est (11+1)/2 = 6e valeur.', 'Q1 : rang 11/4 = 2,75 -> 3e valeur. Q3 : rang 3*11/4 = 8,25 -> 9e valeur.'],
        solutionSteps: [
          'Valeurs triées : 88, 89, 90, 91, 91, [92], 93, 94, 96, 98, 105.',
          '6e valeur : Médiane = 92 s.',
          'Rang de Q1 : 11 * 0,25 = 2,75 -> on prend la 3e valeur : Q1 = 90 s.',
          'Rang de Q3 : 11 * 0,75 = 8,25 -> on prend la 9e valeur : Q3 = 96 s.'
        ],
        finalAnswer: 'Me = 92 s, Q1 = 90 s, Q3 = 96 s (Écart interquartile = 6 s).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-bank-11',
    targetChapterId: 'math-2nde-equations-inequations',
    title: 'Équation-Produit & Seuil de Rentabilité d’un Streamer',
    context: 'Le bénéfice net mensuel B(x) d\'une chaîne Twitch en fonction du nombre de centaines d\'abonnés x (x ≥ 0) est donné par B(x) = (2x - 6)(15 - x) en centaines d\'euros.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'gaming',
    themeLabel: '📹 Streaming & Bénéfices',
    questions: [
      {
        questionText: '1. Résoudre l\'équation B(x) = 0 pour déterminer les seuils d\'équilibre (bénéfice nul).',
        hints: ['Un produit de facteurs est nul si et seulement si au moins l\'un des facteurs est nul.'],
        solutionSteps: [
          '(2x - 6)(15 - x) = 0 <=> 2x - 6 = 0 ou 15 - x = 0.',
          '2x = 6 <=> x = 3.',
          '15 - x = 0 <=> x = 15.'
        ],
        finalAnswer: 'S = {3 ; 15} (soit 300 abonnés et 1500 abonnés).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Dresser le tableau de signes de B(x) sur [0 ; 20] et déterminer pour quel nombre d\'abonnés la chaîne est strictement bénéficiaire.',
        hints: ['Étudier le signe de (2x - 6) et celui de (15 - x).', 'Appliquer la règle des signes.'],
        solutionSteps: [
          '2x - 6 est négatif pour x < 3, nul en 3, positif pour x > 3.',
          '15 - x est positif pour x < 15, nul en 15, négatif pour x > 15.',
          'Le produit B(x) est donc positif strictement sur ]3 ; 15[.'
        ],
        finalAnswer: 'Bénéficiaire pour x ∈ ]3 ; 15[, soit entre 300 et 1500 abonnés.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-bank-12',
    targetChapterId: 'math-2nde-geometrie-reperee',
    title: 'Radar Maritime & Périmètre de Sécurité d’un Cargo',
    context: 'Dans un repère orthonormé d\'une zone portuaire (unité : mille nautique), un cargo est au point A(1 ; 2) et une balise de signalisation est au point B(7 ; 10).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '⚓ Navigation & Distance',
    questions: [
      {
        questionText: '1. Calculer la distance exacte AB séparant le cargo de la balise.',
        hints: ['Formule : AB = √((xB - xA)^2 + (yB - yA)^2).'],
        solutionSteps: [
          'xB - xA = 7 - 1 = 6.',
          'yB - yA = 10 - 2 = 8.',
          'AB = √(6^2 + 8^2) = √(36 + 64) = √100 = 10 milles nautiques.'
        ],
        finalAnswer: 'AB = 10 milles nautiques.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Déterminer les coordonnées du point M, milieu du segment [AB], où sera largué un capteur météo.',
        hints: ['Formule du milieu : M((xA + xB)/2 ; (yA + yB)/2).'],
        solutionSteps: [
          'xM = (1 + 7) / 2 = 8 / 2 = 4.',
          'yM = (2 + 10) / 2 = 12 / 2 = 6.'
        ],
        finalAnswer: 'M(4 ; 6).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-bank-13',
    targetChapterId: 'math-2nde-algo-python',
    title: 'Algorithmique Python : Simulation de Lancer de Dés en JDR',
    context: 'Dans un jeu de rôle (JDR), on écrit un script Python pour simuler N lancers d\'un dé à 20 faces (D20) et compter les "coups critiques" (résultat = 20).',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'gaming',
    themeLabel: '🎲 Python & Algorithmique',
    questions: [
      {
        questionText: '1. Quelle bibliothèque Python doit-on importer et quelle fonction permet de générer un entier entre 1 et 20 inclus ?',
        hints: ['Module standard pour l\'aléatoire : random.', 'randint(a, b) inclut les deux bornes.'],
        solutionSteps: [
          'On importe le module random : import random.',
          'La fonction random.randint(1, 20) génère un entier pseudo-aléatoire compris entre 1 et 20 inclus.'
        ],
        finalAnswer: 'import random et random.randint(1, 20).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Compléter l\'algorithme suivant pour qu\'il renvoie la proportion de coups critiques : \ndef simuler(N):\n    critiques = 0\n    for i in range(...):\n        d = random.randint(1, 20)\n        if ...:\n            critiques += 1\n    return ...',
        hints: ['Boucle de 0 à N : range(N).', 'Condition de succès : d == 20.', 'Proportion : critiques / N.'],
        solutionSteps: [
          'range(N) répète l\'opération N fois.',
          'La condition if d == 20 teste l\'obtention du coup critique.',
          'On retourne la fréquence observée : critiques / N.'
        ],
        finalAnswer: 'for i in range(N): / if d == 20: / return critiques / N (théoriquement proche de 1/20 = 0,05).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-2m-bank-14',
    targetChapterId: 'math-2nde-arithmetique',
    title: 'Démonstration : Somme de Deux Nombres Impairs',
    context: 'On souhaite démontrer rigoureusement une propriété arithmétique fondamentale utilisée dans les protocoles de parité des cartes mémoires.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'tech',
    themeLabel: '🔐 Démonstration & Parité',
    questions: [
      {
        questionText: '1. Soient a et b deux entiers impairs. Exprimer a et b en fonction de deux entiers k et k\'.',
        hints: ['Par définition, un nombre impair s\'écrit 2k + 1 avec k ∈ ℤ.'],
        solutionSteps: [
          'Puisque a est impair, il existe un entier k ∈ ℤ tel que a = 2k + 1.',
          'Puisque b est impair, il existe un entier k\' ∈ ℤ tel que b = 2k\' + 1.'
        ],
        finalAnswer: 'a = 2k + 1 et b = 2k\' + 1 avec k, k\' ∈ ℤ.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Démontrer que la somme a + b est toujours un nombre pair.',
        hints: ['Calculer a + b et factoriser par 2.'],
        solutionSteps: [
          'a + b = (2k + 1) + (2k\' + 1) = 2k + 2k\' + 2.',
          'On factorise par 2 : a + b = 2(k + k\' + 1).',
          'En posant K = k + k\' + 1 (qui est un entier relatif), on a a + b = 2K, ce qui est la définition même d\'un nombre pair.'
        ],
        finalAnswer: 'a + b = 2(k + k\' + 1) = 2K : la somme de deux impairs est toujours paire.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-bank-15',
    targetChapterId: 'math-2nde-fonctions',
    title: 'Tableau de Valeurs & Encadrement de Racines',
    context: 'On considère la fonction g(x) = x^3 - 3x - 1 définie sur ℝ. On cherche à localiser une solution de l\'équation g(x) = 0.',
    difficulty: 'Moyen',
    points: 6,
    themeTag: 'science',
    themeLabel: '📐 Analyse & Balayage',
    questions: [
      {
        questionText: '1. Calculer g(1) et g(2). Que remarque-t-on sur les signes de ces deux images ?',
        hints: ['Remplacer x par 1 puis par 2.'],
        solutionSteps: [
          'g(1) = 1^3 - 3(1) - 1 = 1 - 3 - 1 = -3 < 0.',
          'g(2) = 2^3 - 3(2) - 1 = 8 - 6 - 1 = +1 > 0.',
          'On remarque que g(1) < 0 et g(2) > 0 : la fonction change de signe.'
        ],
        finalAnswer: 'g(1) = -3 et g(2) = 1 (changement de signe).',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire qu\'il existe au moins une solution de g(x) = 0 dans l\'intervalle [1 ; 2].',
        hints: ['La courbe de g est continue (sans saut) et passe d\'une valeur négative à positive.'],
        solutionSteps: [
          'La fonction g est polynomiale, sa courbe représentative ne présente aucune rupture.',
          'Puisque g(1) < 0 et g(2) > 0, la courbe traverse l\'axe des abscisses au moins une fois entre 1 et 2.'
        ],
        finalAnswer: 'Il existe une solution α ∈ [1 ; 2] telle que g(α) = 0 (environ 1,88).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-bank-16',
    targetChapterId: 'math-2nde-vecteurs',
    title: 'Parallélogramme & Somme Vectorielle dans un Terrain de Football',
    context: 'Dans le repère d\'un terrain de football, trois joueurs sont placés en A(1 ; 1), B(5 ; 2) et C(6 ; 6). Un quatrième joueur D doit se placer pour que ABCD soit un parallélogramme.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '⚽ Football & Parallélogramme',
    questions: [
      {
        questionText: '1. Rappeler l\'égalité vectorielle caractérisant le parallélogramme ABCD.',
        hints: ['Attention à l\'ordre des sommets : AB = DC ou AD = BC.'],
        solutionSteps: [
          'Pour que le quadrilatère ABCD soit un parallélogramme, il faut et il suffit que le vecteur AB soit égal au vecteur DC (ou AD = BC).'
        ],
        finalAnswer: 'Vecteur AB = Vecteur DC.',
        pointsAllocated: 2,
        bacTrap: 'Ne pas écrire AB = CD, car cela formerait un sablier croisé ABDC !'
      },
      {
        questionText: '2. Calculer les coordonnées du vecteur AB puis déterminer celles du point D(xD ; yD).',
        hints: ['AB(xB - xA ; yB - yA) = DC(xC - xD ; yC - yD).'],
        solutionSteps: [
          'AB(5 - 1 ; 2 - 1) = AB(4 ; 1).',
          'DC(6 - xD ; 6 - yD).',
          'Par égalité : 6 - xD = 4 <=> xD = 6 - 4 = 2.',
          '6 - yD = 1 <=> yD = 6 - 1 = 5.'
        ],
        finalAnswer: 'D(2 ; 5).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-2m-bank-17',
    targetChapterId: 'math-2nde-droites',
    title: 'Alignement & Équation Cartésienne de Trajectoire Laser',
    context: 'Un système optique émet un faisceau laser passant par les points A(-1 ; 5) et B(3 ; -3). On cherche son équation cartésienne ax + by + c = 0.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🔦 Optique & Équation Cartésienne',
    questions: [
      {
        questionText: '1. Déterminer un vecteur directeur de la droite (AB) et calculer sa pente (coefficient directeur).',
        hints: ['Vecteur directeur u = AB.', 'Pente m = (yB - yA) / (xB - xA).'],
        solutionSteps: [
          'AB(3 - (-1) ; -3 - 5) = AB(4 ; -8).',
          'Pente m = -8 / 4 = -2.'
        ],
        finalAnswer: 'Vecteur directeur u(4 ; -8) et coefficient directeur m = -2.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Donner l\'équation réduite de (AB) puis une équation cartésienne simplifiée.',
        hints: ['y = -2x + p, remplacer par les coordonnées de A(-1 ; 5).', 'ax + by + c = 0.'],
        solutionSteps: [
          '5 = -2(-1) + p <=> 5 = 2 + p <=> p = 3. Équation réduite : y = -2x + 3.',
          'En regroupant : 2x + y - 3 = 0.'
        ],
        finalAnswer: 'Équation réduite : y = -2x + 3 ; équation cartésienne : 2x + y - 3 = 0.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-bank-18',
    targetChapterId: 'math-2nde-probas',
    title: 'Arbre Pondéré : Diagnostic Anti-Triche en E-Sport',
    context: 'Une ligue d\'e-sport teste un nouvel algorithme anti-triche. 2% des joueurs utilisent un cheat. L\'algorithme détecte le cheat avec une fiabilité de 98%, mais commet 1% de fausses accusations sur les joueurs réguliers.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'gaming',
    themeLabel: '🎮 Anti-Cheat & Arbre Pondéré',
    questions: [
      {
        questionText: '1. Représenter la situation sous forme d\'arbre pondéré et calculer la probabilité qu\'un joueur soit cheaté ET détecté positif.',
        hints: ['P(T) = 0,02 ; P(D|T) = 0,98.', 'P(T ∩ D) = P(T) * P(D|T).'],
        solutionSteps: [
          'P(T) = 0,02 (tricheur) et P(non T) = 0,98 (honnête).',
          'P(D sachant T) = 0,98 et P(D sachant non T) = 0,01.',
          'P(T ∩ D) = 0,02 * 0,98 = 0,0196.'
        ],
        finalAnswer: 'P(T ∩ D) = 0,0196 (soit 1,96%).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Calculer la probabilité totale qu\'un joueur soit détecté positif par l\'algorithme.',
        hints: ['Formule des probabilités totales : P(D) = P(T ∩ D) + P(non T ∩ D).'],
        solutionSteps: [
          'P(non T ∩ D) = 0,98 * 0,01 = 0,0098.',
          'P(D) = 0,0196 + 0,0098 = 0,0294 (soit 2,94%).'
        ],
        finalAnswer: 'P(D) = 0,0294 (2,94% de détections globales).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2m-bank-19',
    targetChapterId: 'math-2nde-equations-inequations',
    title: 'Inéquation & Dimensionnement d’un Datacenter Vert',
    context: 'Un centre de données écologique utilise des panneaux solaires et un appoint de réseau. Le coût de fonctionnement horaire C(x) en fonction du nombre de serveurs actifs x (en dizaines) vérifie l\'inéquation C(x) ≤ 150 avec C(x) = 3x + 30.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'ecologie',
    themeLabel: '🌱 Datacenter & Inéquation',
    questions: [
      {
        questionText: '1. Résoudre l\'inéquation 3x + 30 ≤ 150 dans ℝ.',
        hints: ['Soustraire 30 des deux côtés puis diviser par 3.'],
        solutionSteps: [
          '3x + 30 ≤ 150 <=> 3x ≤ 120.',
          'En divisant par 3 (nombre strictement positif, le sens de l\'inégalité ne change pas) : x ≤ 40.'
        ],
        finalAnswer: 'S = ]-∞ ; 40].',
        pointsAllocated: 2
      },
      {
        questionText: '2. Quel est le nombre maximal de serveurs individuels pouvant être alimentés tout en respectant ce budget ?',
        hints: ['x représente le nombre de dizaines de serveurs.'],
        solutionSteps: [
          'x maximal = 40 dizaines de serveurs.',
          'Nombre total = 40 * 10 = 400 serveurs.'
        ],
        finalAnswer: '400 serveurs maximum.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2m-bank-20',
    targetChapterId: 'math-2nde-variations-extremums',
    title: 'Extremums & Portée Maximale d’un Canon à Confettis',
    context: 'Lors d\'une finale de coupe d\'Europe, un canon projette des confettis. La trajectoire du centre de masse est modélisée par f(x) = -0,2x^2 + 2x + 1,5 où x est la distance horizontale (m).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'cinema',
    themeLabel: '🎉 Événementiel & Parabole',
    questions: [
      {
        questionText: '1. Donner la hauteur initiale des confettis à la sortie du canon (x = 0).',
        hints: ['Calculer f(0).'],
        solutionSteps: [
          'f(0) = -0,2(0)^2 + 2(0) + 1,5 = 1,5 m.'
        ],
        finalAnswer: 'Hauteur initiale = 1,5 mètre.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Déterminer la forme canonique de f(x) et en déduire la hauteur maximale atteinte par les confettis.',
        hints: ['Factoriser par -0,2 : -0,2(x^2 - 10x) + 1,5.', 'x^2 - 10x = (x - 5)^2 - 25.'],
        solutionSteps: [
          'f(x) = -0,2[(x - 5)^2 - 25] + 1,5 = -0,2(x - 5)^2 + 5 + 1,5 = -0,2(x - 5)^2 + 6,5.',
          'Puisque -0,2(x - 5)^2 ≤ 0, la hauteur maximale est de 6,5 m, atteinte à x = 5 m.'
        ],
        finalAnswer: 'Hauteur maximale = 6,5 mètres, atteinte à 5 mètres du canon.',
        pointsAllocated: 5
      }
    ]
  }
];
