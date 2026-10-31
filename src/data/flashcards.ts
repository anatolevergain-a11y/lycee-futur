import { Flashcard, Badge } from '../types';

export const FLASHCARD_DECK: Flashcard[] = [
  // Maths
  {
    id: 'fc-m1',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    chapterTitle: 'Dérivation & TVI',
    question: 'Quelle est la condition nécessaire et suffisante pour qu\'une fonction deux fois dérivable soit convexe sur I ?',
    answer: 'La dérivée seconde f\'\'(x) doit être positive ou nulle sur tout l\'intervalle I (f\'\'(x) ≥ 0). Équivalent à f\' croissante sur I.',
    formula: 'f\'\'(x) \\ge 0 \\quad \\forall x \\in I',
    mnemonic: 'Convexe = Courbe en forme de Cuve (tournée vers le ciel).'
  },
  {
    id: 'fc-m2',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    chapterTitle: 'Logarithme Népérien',
    question: 'Quelle est la limite de x ln(x) quand x tend vers 0 par valeurs supérieures ?',
    answer: 'La limite est égale à 0 (croissance comparée : le monôme x domine ln(x) en 0).',
    formula: '\\lim_{x \\to 0^+} x \\ln x = 0',
    mnemonic: 'Le polynôme est toujours le boss face au logarithme !'
  },
  {
    id: 'fc-m3',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    chapterTitle: 'Intégration & Primitives',
    question: 'Quelle est la formule d\'intégration par parties (IPP) ?',
    answer: 'L\'intégrale de u\'v est égale au crochet [uv] moins l\'intégrale de uv\'.',
    formula: '\\int_a^b u\'(x)v(x)\\,dx = [u(x)v(x)]_a^b - \\int_a^b u(x)v\'(x)\\,dx',
    mnemonic: 'Règle ALPES pour choisir qui dériver (v) : Arc, Logarithme, Polynôme, Exponentielle, Sinus/Cos.'
  },
  {
    id: 'fc-m4',
    subjectId: 'maths',
    gradeLevel: 'terminale',
    chapterTitle: 'Probabilités & Loi Binomiale',
    question: 'Quelle est l\'espérance E(X) et la variance V(X) d\'une variable aléatoire suivant une loi binomiale B(n, p) ?',
    answer: 'Espérance : E(X) = n · p. Variance : V(X) = n · p · (1 - p). Écart-type : σ = √(V(X)).',
    formula: 'E(X) = n p \\quad ; \\quad V(X) = n p (1 - p)'
  },

  // Physique-Chimie
  {
    id: 'fc-pc1',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    chapterTitle: 'Titrage Acido-Basique',
    question: 'Définir l\'équivalence d\'un titrage acido-basique.',
    answer: 'C\'est l\'état du système où les réactifs titré et titrant ont été mélangés dans les proportions stœchiométriques de la réaction support.',
    formula: '\\frac{n_{titré}}{a} = \\frac{n_{titrant, versé}(E)}{b}',
    mnemonic: 'À l\'équivalence, aucun réactif n\'est en excès : ils disparaissent ensemble !'
  },
  {
    id: 'fc-pc2',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    chapterTitle: 'Mécanique Newtonienne',
    question: 'Énoncer la 2ème loi de Newton pour un système de masse m constante.',
    answer: 'Dans un référentiel galiléen, la somme vectorielle des forces extérieures exercées sur le système est égale au produit de sa masse par son vecteur accélération.',
    formula: '\\sum \\vec{F}_{ext} = m \\cdot \\vec{a}_G'
  },
  {
    id: 'fc-pc3',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    chapterTitle: 'Optique Géométrique',
    question: 'Quelle est la relation de conjugaison de Descartes pour une lentille mince convergente ?',
    answer: '1/OA\' - 1/OA = 1/f\' avec OA\' la position algébrique de l\'image, OA la position de l\'objet et f\' la distance focale image.',
    formula: '\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f\'}'
  },
  {
    id: 'fc-pc4',
    subjectId: 'physique-chimie',
    gradeLevel: 'terminale',
    chapterTitle: 'Effet Doppler',
    question: 'Comment varie la fréquence perçue d\'une onde lorsque la source se rapproche de l\'observateur immobile ?',
    answer: 'La longueur d\'onde apparente diminue, donc la fréquence perçue f_recue est plus élevée que la fréquence émise f_0 (le son est plus aigu, ou décalé vers le bleu pour la lumière).',
    formula: 'f_{reçue} = f_0 \\cdot \\frac{c}{c - v_{source}}'
  },

  // SVT
  {
    id: 'fc-svt1',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    chapterTitle: 'Expression du Génome',
    question: 'Quels sont les trois codons STOP universels qui arrêtent la traduction de l\'ARNm ?',
    answer: 'UAA, UAG et UGA.',
    mnemonic: 'UAA (U Are Away), UAG (U Are Gone), UGA (U Go Away).'
  },
  {
    id: 'fc-svt2',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    chapterTitle: 'Tectonique des Plaques',
    question: 'Pourquoi la lithosphère océanique finit-elle par entrer en subduction ?',
    answer: 'En s\'éloignant de la dorsale, elle se refroidit et s\'épaissit par sous-accrétion mantellique. Sa densité moyenne dépasse celle de l\'asthénosphère (d > 3,25), créant une instabilité gravitaire.',
    formula: '\\rho_{litho} > \\rho_{asthé} \\implies \\text{Subduction}'
  },
  {
    id: 'fc-svt3',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    chapterTitle: 'Immunologie',
    question: 'Quelles sont les deux chaînes constituant un anticorps circulant (immunoglobuline) ?',
    answer: 'Deux chaînes lourdes (H) identiques et deux chaînes légères (L) identiques, reliées par des ponts disulfures. Les extrémités variables forment les sites de liaison avec l\'antigène.',
    mnemonic: 'Forme caractéristique en "Y" avec deux sites de reconnaissance identiques.'
  },
  {
    id: 'fc-svt4',
    subjectId: 'svt',
    gradeLevel: 'terminale',
    chapterTitle: 'Génétique & Méiose',
    question: 'À quelle phase de la méiose se déroule le crossing-over (brassage intrachromosomique) ?',
    answer: 'En Prophase I de la méiose, lors de l\'appariement des chromosomes homologues en bivalents (tétrades), avec formation de chiasmas.',
    mnemonic: 'Prophase I = Partage et Proximité des chromatides homologues.'
  }
];

export const BADGES_LIST: Badge[] = [
  {
    id: 'b-welcome',
    title: 'Premier Pas Scientifique',
    description: 'A commencé son exploration sur Lycée Futur.',
    icon: '🚀',
    category: 'xp',
    condition: (p) => p.xp >= 50
  },
  {
    id: 'b-streak-3',
    title: 'Régularité de Fer',
    description: '3 jours consécutifs de travail et de révision.',
    icon: '🔥',
    category: 'streak',
    condition: (p) => p.streakDays >= 3
  },
  {
    id: 'b-sim-master',
    title: 'Chercheur de Laboratoire',
    description: 'A expérimenté au moins 2 simulations scientifiques.',
    icon: '🔬',
    category: 'science',
    condition: (p) => p.xp >= 150
  },
  {
    id: 'b-math-ace',
    title: 'As des Dérivées & TVI',
    description: 'A réussi un quiz de Mathématiques avec 100% de bonnes réponses.',
    icon: '📐',
    category: 'maths',
    condition: (p) => Object.values(p.completedChapters).some((c) => (c.bestQuizScore ?? 0) >= 100)
  },
  {
    id: 'b-flashcard-box4',
    title: 'Mémoire Photographico-Leitner',
    description: 'A fait passer au moins 3 fiches mémo dans la boîte de maîtrise ultime.',
    icon: '🧠',
    category: 'mastery',
    condition: (p) => Object.values(p.flashcardBox).filter((b) => b >= 4).length >= 3
  },
  {
    id: 'b-major-promo',
    title: 'Majeur de Promotion Lycée Futur',
    description: 'A atteint plus de 1000 points d\'expérience XP.',
    icon: '👑',
    category: 'xp',
    condition: (p) => p.xp >= 1000
  }
];
