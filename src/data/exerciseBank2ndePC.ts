import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_2NDE_PC: BankExerciseItem[] = [
  {
    id: 'ex-2pc-bank-1',
    targetChapterId: 'pc-2nde-atome-mole',
    title: 'Quantité de Matière dans la Puce d’un Smartphone',
    context: 'Un microprocesseur moderne contient une fine couche de silicium pur (Si) de masse m = 0,280 g. Données : M(Si) = 28,1 g/mol, NA = 6,022 * 10^23 mol^-1.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '📱 Smartphone & Silicium',
    questions: [
      {
        questionText: '1. Calculer la quantité de matière n de silicium contenue dans cette puce.',
        hints: ['Formule : n = m / M.', 'Vérifier les unités : m en grammes, M en g/mol.'],
        solutionSteps: [
          'n = m / M(Si) = 0,280 / 28,1 = 9,96 * 10^-3 mol.'
        ],
        finalAnswer: 'n ≈ 9,96 * 10^-3 mol (soit 9,96 mmol).',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire le nombre total N d\'atomes de silicium présents.',
        hints: ['Relation : N = n * NA.'],
        solutionSteps: [
          'N = n * NA = 9,964 * 10^-3 * 6,022 * 10^23 = 6,00 * 10^21 atomes.'
        ],
        finalAnswer: 'N ≈ 6,00 * 10^21 atomes de silicium.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-bank-2',
    targetChapterId: 'pc-2nde-atome-mole',
    title: 'Structure Électronique du Carbone & Graphène',
    context: 'Le carbone (Z = 6) est au cœur des nanotechnologies et des raquettes en graphène. On s\'intéresse à son cortège électronique et ses électrons de valence.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'sport',
    themeLabel: '🎾 Matériaux & Graphène',
    questions: [
      {
        questionText: '1. Donner la configuration électronique de l\'atome de carbone dans son état fondamental.',
        hints: ['Règles de remplissage : 1s (2 électrons max), 2s (2 électrons max), 2p (6 électrons max).'],
        solutionSteps: [
          'Z = 6, donc 6 électrons à placer.',
          'Remplissage ordonné : 1s^2 2s^2 2p^2.'
        ],
        finalAnswer: '1s^2 2s^2 2p^2.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Préciser le nombre d\'électrons de valence et en déduire le nombre de liaisons covalentes que peut former le carbone (règle de l\'octet).',
        hints: ['La couche externe est la couche n = 2.', 'Règle de l\'octet : atteindre 8 électrons.'],
        solutionSteps: [
          'Couche externe : 2s^2 2p^2, soit 4 électrons de valence.',
          'Pour acquérir la configuration stable en octet (8 électrons comme le néon), il lui manque 8 - 4 = 4 électrons.',
          'Il forme donc 4 liaisons covalentes (tétravalence).'
        ],
        finalAnswer: '4 électrons de valence ; tétravalent (forme 4 liaisons covalentes).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-bank-3',
    targetChapterId: 'pc-2nde-lumiere-snell',
    title: 'Fibre Optique & Connexion Très Haut Débit',
    context: 'Un signal internet voyage par réflexion totale dans le cœur d\'une fibre optique d\'indice n1 = 1,48 entouré d\'une gaine d\'indice n2 = 1,44. On cherche l\'angle limite de réfraction.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'tech',
    themeLabel: '🌐 Fibre Optique & Réfraction',
    questions: [
      {
        questionText: '1. Énoncer la 2e loi de Snell-Descartes pour la réfraction.',
        hints: ['Fait intervenir n1, sin(i1), n2, sin(i2).'],
        solutionSteps: [
          'Pour un rayon passant d\'un milieu 1 à un milieu 2, la relation s\'écrit : n1 * sin(i1) = n2 * sin(i2).'
        ],
        finalAnswer: 'n1 * sin(i1) = n2 * sin(i2).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer l\'angle d\'incidence critique i_lim au-delà duquel la lumière subit une réflexion totale (pour i2 = 90°).',
        hints: ['sin(90°) = 1.', 'sin(i_lim) = n2 / n1.'],
        solutionSteps: [
          'À la limite : n1 * sin(i_lim) = n2 * sin(90°) = n2 * 1.',
          'sin(i_lim) = n2 / n1 = 1,44 / 1,48 ≈ 0,9730.',
          'i_lim = arcsin(0,9730) ≈ 76,6°.'
        ],
        finalAnswer: 'i_lim ≈ 76,6° (si i > 76,6°, réflexion totale sans perte de signal).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-2pc-bank-4',
    targetChapterId: 'pc-2nde-solutions',
    title: 'Préparation d’une Boisson Isotonique pour le Marathon',
    context: 'Un athlète prépare 500 mL d\'une solution aqueuse de glucose (C6H12O6) à la concentration en masse Cm = 40,0 g/L pour maintenir son énergie en course.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏃 Nutrition Sportive & Solution',
    questions: [
      {
        questionText: '1. Calculer la masse m de glucose pur à peser pour préparer ce bidon de 500 mL.',
        hints: ['Formule : Cm = m / V <=> m = Cm * V.', 'Convertir le volume V en litres : 500 mL = 0,500 L.'],
        solutionSteps: [
          'V = 500 mL = 0,500 L.',
          'm = Cm * V = 40,0 g/L * 0,500 L = 20,0 g.'
        ],
        finalAnswer: 'm = 20,0 g de glucose.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Sachant que M(glucose) = 180,0 g/mol, calculer la concentration molaire C de cette boisson.',
        hints: ['Relation entre concentration massique et molaire : C = Cm / M.'],
        solutionSteps: [
          'C = Cm / M = 40,0 / 180,0 ≈ 0,222 mol/L.'
        ],
        finalAnswer: 'C ≈ 0,222 mol/L (soit 222 mmol/L).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-bank-5',
    targetChapterId: 'pc-2nde-solutions',
    title: 'Protocole de Dilution d’un Désinfectant Médical',
    context: 'Au bloc opératoire, on dispose d\'une solution mère de Dakin à C0 = 0,10 mol/L. On souhaite préparer Vf = 100 mL de solution fille à Cf = 0,020 mol/L.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🏥 Pharmacie & Dilution',
    questions: [
      {
        questionText: '1. Calculer le facteur de dilution F et le volume V0 de solution mère à prélever.',
        hints: ['Conservation de la matière lors d\'une dilution : C0 * V0 = Cf * Vf.', 'F = C0 / Cf = Vf / V0.'],
        solutionSteps: [
          'Facteur de dilution F = C0 / Cf = 0,10 / 0,020 = 5.',
          'Volume à prélever : V0 = Vf / F = 100 mL / 5 = 20 mL.'
        ],
        finalAnswer: 'F = 5 et V0 = 20 mL.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Décrire la verrerie de précision nécessaire pour réaliser cette manipulation en toute sécurité.',
        hints: ['Bécher de transfert, pipette jaugée + pro-pipette, fiole jaugée, pissette d\'eau distillée.'],
        solutionSteps: [
          '1. Verser un peu de solution mère dans un bécher propre.',
          '2. Prélever 20 mL avec une pipette jaugée munie d\'une poire aspirante.',
          '3. Transvaser dans une fiole jaugée de 100 mL.',
          '4. Remplir aux 2/3 d\'eau distillée, agiter, puis ajuster au trait de jauge au ménisque et homogénéiser.'
        ],
        finalAnswer: 'Pipette jaugée de 20 mL et fiole jaugée de 100 mL.',
        pointsAllocated: 4,
        bacTrap: 'Ne jamais prélever directement dans le flacon de la solution mère !'
      }
    ]
  },
  {
    id: 'ex-2pc-bank-6',
    targetChapterId: 'pc-2nde-mouvement',
    title: 'Chronophotographie & Vitesse d’une F1 au Freinage',
    context: 'Sur un circuit de F1, la position d\'une monoplace est relevée toutes les Δt = 0,20 s lors d\'un freinage violent. La distance entre les points M1 et M3 est M1M3 = 18,0 m.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏎️ Formule 1 & Vitesse',
    questions: [
      {
        questionText: '1. Exprimer et calculer la vitesse moyenne v2 au point M2 en m/s.',
        hints: ['Formule : v2 = M1M3 / (2 * Δt).'],
        solutionSteps: [
          'Durée écoulée entre M1 et M3 : Δt_total = 2 * 0,20 s = 0,40 s.',
          'v2 = 18,0 / 0,40 = 45,0 m/s.'
        ],
        finalAnswer: 'v2 = 45,0 m/s.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Convertir cette vitesse en kilomètres par heure (km/h).',
        hints: ['Pour passer de m/s à km/h, multiplier par 3,6.'],
        solutionSteps: [
          'v2 = 45,0 * 3,6 = 162 km/h.'
        ],
        finalAnswer: 'v2 = 162 km/h.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-bank-7',
    targetChapterId: 'pc-2nde-spectres-etoiles',
    title: 'Spectre d’Émission & Détection d’Exoplanètes',
    context: 'Le télescope spatial James Webb capte la raie d\'émission d\'une étoile à λ = 656,3 nm (raie H-alpha de l\'hydrogène). Données : c = 3,00 * 10^8 m/s, h = 6,63 * 10^-34 J.s.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'space',
    themeLabel: '🔭 Télescope Webb & Photons',
    questions: [
      {
        questionText: '1. Dans quel domaine du spectre électromagnétique cette raie se situe-t-elle ?',
        hints: ['Le spectre visible s\'étend de 400 nm (violet) à 800 nm (rouge).'],
        solutionSteps: [
          '656,3 nm est compris entre 400 nm et 800 nm.',
          'Cette longueur d\'onde correspond au domaine visible, plus précisément dans le rouge.'
        ],
        finalAnswer: 'Domaine de la lumière visible (couleur rouge).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer l\'énergie E d\'un photon associé à cette radiation en Joules (J) puis en électron-volts (1 eV = 1,60 * 10^-19 J).',
        hints: ['Relation de Planck-Einstein : E = h * c / λ.', 'Attention : convertir λ en mètres (1 nm = 10^-9 m).'],
        solutionSteps: [
          'λ = 656,3 * 10^-9 m.',
          'E = (6,63 * 10^-34 * 3,00 * 10^8) / (656,3 * 10^-9) = 1,989 * 10^-25 / 6,563 * 10^-7 ≈ 3,03 * 10^-19 J.',
          'En eV : E = 3,03 * 10^-19 / 1,60 * 10^-19 ≈ 1,89 eV.'
        ],
        finalAnswer: 'E ≈ 3,03 * 10^-19 J = 1,89 eV.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2pc-bank-8',
    targetChapterId: 'pc-2nde-forces-principe-inertie',
    title: 'Principe d’Inertie & Capsule Spatiale Crew Dragon',
    context: 'Une capsule spatiale de masse m = 12 500 kg se déplace dans le vide intersidéral loin de tout astre à la vitesse constante v = 7 800 m/s en ligne droite.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'space',
    themeLabel: '🚀 Astronautique & Inertie',
    questions: [
      {
        questionText: '1. Que peut-on dire des forces qui s\'exercent sur la capsule d\'après le principe d\'inertie ?',
        hints: ['Un système a un mouvement rectiligne uniforme si et seulement si les forces se compensent.'],
        solutionSteps: [
          'Le mouvement de la capsule est rectiligne et uniforme dans le référentiel héliocentrique.',
          'D\'après le principe d\'inertie, la somme vectorielle des forces qui s\'exercent sur elle est donc nulle (Σ F = 0) : la capsule est un système pseudo-isolé.'
        ],
        finalAnswer: 'La somme vectorielle des forces est nulle (les forces se compensent ou le système est isolé).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Les moteurs de poussée doivent-ils rester allumés pour maintenir cette vitesse constante dans le vide ? Justifier.',
        hints: ['Dans le vide spatial sans frottement, aucune force n\'est nécessaire pour perpétuer le mouvement.'],
        solutionSteps: [
          'Non. En l\'absence totale de frottements fluides dans le vide spatial, la capsule conserve indéfiniment sa vitesse sans aucune consommation de carburant.'
        ],
        finalAnswer: 'Non, les moteurs sont éteints : le mouvement se maintient par pure inertie.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-bank-9',
    targetChapterId: 'pc-2nde-corps-purs-melanges',
    title: 'Masse Volumique & Détection d’une Pièce en Or Truquée',
    context: 'Un collectionneur achète un lingot supposé en or pur de masse m = 386 g. Immergé dans une éprouvette graduée contenant de l\'eau, le niveau passe de V1 = 50 mL à V2 = 75 mL. Donnée : or pur ρ = 19,3 g/cm^3.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'cinema',
    themeLabel: '🕵️ Enquête & Masse Volumique',
    questions: [
      {
        questionText: '1. Calculer le volume V du lingot en mL puis en cm^3.',
        hints: ['Le volume déplacé est V = V2 - V1.', '1 mL = 1 cm^3.'],
        solutionSteps: [
          'V = V2 - V1 = 75 - 50 = 25 mL.',
          'Puisque 1 mL = 1 cm^3, V = 25 cm^3.'
        ],
        finalAnswer: 'V = 25 cm^3.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la masse volumique expérimentale ρ_exp du lingot et conclure sur son authenticité.',
        hints: ['Formule : ρ = m / V.', 'Comparer avec 19,3 g/cm^3.'],
        solutionSteps: [
          'ρ_exp = m / V = 386 g / 25 cm^3 = 15,44 g/cm^3.',
          '15,44 g/cm^3 est nettement inférieur à la masse volumique de l\'or pur (19,3 g/cm^3).',
          'Le lingot est un faux (probablement du plomb ou du cuivre doré).'
        ],
        finalAnswer: 'ρ_exp = 15,4 g/cm^3 ≠ 19,3 g/cm^3 : le lingot est une contrefaçon.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2pc-bank-10',
    targetChapterId: 'pc-2nde-corps-purs-melanges',
    title: 'Chromatographie sur Couche Mince (CCM) des Colorants de Bonbons',
    context: 'On analyse un bonbon vert par CCM. La ligne de dépôt est à 1,0 cm du bas, le front de l\'éluant monte à 6,0 cm. Le colorant bleu migre à 4,5 cm et le jaune à 3,0 cm.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🍬 Bonbons & Chromatographie',
    questions: [
      {
        questionText: '1. Calculer la distance parcourue par l\'éluant H et le rapport frontal Rf du colorant bleu.',
        hints: ['H = position front - position ligne de dépôt.', 'Rf = h / H.'],
        solutionSteps: [
          'Distance front éluant : H = 6,0 - 1,0 = 5,0 cm.',
          'Distance colorant bleu : h_bleu = 4,5 - 1,0 = 3,5 cm.',
          'Rf(bleu) = 3,5 / 5,0 = 0,70.'
        ],
        finalAnswer: 'Rf(bleu) = 0,70.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi observe-t-on deux taches distinctes lors du développement du bonbon vert ?',
        hints: ['Un mélange de colorants se sépare selon l\'affinité avec la phase fixe et la phase mobile.'],
        solutionSteps: [
          'Le colorant vert du bonbon est un mélange d\'espèces chimiques (bleu brillant et jaune tartrazine).',
          'Chaque espèce possède une solubilité différente dans l\'éluant et une affinité différente avec la plaque de silice, ce qui provoque leur séparation.'
        ],
        finalAnswer: 'Le vert est un mélange homogène de deux espèces chimiques distinctes séparées par l\'éluant.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-2pc-bank-11',
    targetChapterId: 'pc-2nde-transformations-chimiques-nucleaires',
    title: 'Stœchiométrie & Émission de CO2 d’un Moteur Thermique',
    context: 'La combustion complète de l\'octane (essence, C8H18) dans l\'air s\'écrit : 2 C8H18 + 25 O2 -> 16 CO2 + 18 H2O. Une voiture brûle n = 10,0 mol d\'octane.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '🚗 Carbone & Combustion',
    questions: [
      {
        questionText: '1. Quelle quantité de matière de dioxygène O2 est théoriquement consommée ?',
        hints: ['Rapport stœchiométrique : n(O2)/25 = n(C8H18)/2.'],
        solutionSteps: [
          'D\'après les coefficients stœchiométriques : n(O2) = (25 / 2) * n(C8H18).',
          'n(O2) = 12,5 * 10,0 = 125 mol.'
        ],
        finalAnswer: 'n(O2) = 125 mol.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la masse de CO2 rejetée dans l\'atmosphère. Données : M(C) = 12,0 g/mol, M(O) = 16,0 g/mol.',
        hints: ['M(CO2) = 12 + 2*16 = 44,0 g/mol.', 'n(CO2) = (16 / 2) * n(C8H18).'],
        solutionSteps: [
          'n(CO2) formé = (16 / 2) * 10,0 = 80,0 mol.',
          'M(CO2) = 12,0 + 2 * 16,0 = 44,0 g/mol.',
          'm(CO2) = 80,0 * 44,0 = 3520 g = 3,52 kg.'
        ],
        finalAnswer: 'm(CO2) = 3,52 kg de gaz à effet de serre.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2pc-bank-12',
    targetChapterId: 'pc-2nde-transformations-chimiques-nucleaires',
    title: 'Fusion Solaire : Équation Nucléaire au Cœur du Soleil',
    context: 'Dans le cœur du Soleil à 15 millions de degrés, deux noyaux légers d\'hydrogène fusionnent : Deutérium (2_1 H) et Tritium (3_1 H) forment un noyau d\'Hélium 4 (4_2 He) et une particule X.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'space',
    themeLabel: '☀️ Énergie Solaire & Fusion',
    questions: [
      {
        questionText: '1. Énoncer les lois de conservation de Soddy pour une réaction nucléaire.',
        hints: ['Conservation du nombre de masse A et du numéro atomique Z.'],
        solutionSteps: [
          'Loi 1 : Conservation du nombre total de nucléons A.',
          'Loi 2 : Conservation de la charge totale Z.'
        ],
        finalAnswer: 'Conservation de A (nucléons) et de Z (charge électrique).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Identifier la particule X émise (notée A_Z X) en appliquant les lois de Soddy.',
        hints: ['A_gauche = 2 + 3 = 5 ; Z_gauche = 1 + 1 = 2.'],
        solutionSteps: [
          'Conservation de A : 2 + 3 = 4 + A_X <=> A_X = 1.',
          'Conservation de Z : 1 + 1 = 2 + Z_X <=> Z_X = 0.',
          'La particule de symbole 1_0 X possédant 1 nucléon et charge 0 est un neutron (1_0 n).'
        ],
        finalAnswer: 'X = 1_0 n (un neutron).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2pc-bank-13',
    targetChapterId: 'pc-2nde-atome-mole',
    title: 'Isotopes du Carbone & Datation Préhistorique',
    context: 'Le carbone naturel existe sous forme de Carbone 12 (12_6 C) et Carbone 14 (14_6 C). On s\'intéresse à la composition de leurs noyaux.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🦴 Archéologie & Isotopes',
    questions: [
      {
        questionText: '1. Donner le nombre de protons, de neutrons et d\'électrons du Carbone 12.',
        hints: ['Z = 6, A = 12, N = A - Z.'],
        solutionSteps: [
          'Protons = Z = 6.',
          'Électrons = 6 (atome neutre).',
          'Neutrons = A - Z = 12 - 6 = 6.'
        ],
        finalAnswer: '6 protons, 6 neutrons, 6 électrons.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Donner la composition du Carbone 14 et définir ce que sont deux isotopes.',
        hints: ['A = 14 pour le carbone 14.'],
        solutionSteps: [
          'Carbone 14 : 6 protons, 6 électrons, et N = 14 - 6 = 8 neutrons.',
          'Deux isotopes sont des atomes ayant le même numéro atomique Z (même nombre de protons, même élément chimique) mais un nombre de masse A différent (nombre de neutrons différent).'
        ],
        finalAnswer: '6 protons, 8 neutrons, 6 électrons ; isotopes = même Z, différent A.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-bank-14',
    targetChapterId: 'pc-2nde-lumiere-snell',
    title: 'Réfraction & Mirage sur le Bitume en Été',
    context: 'En plein été, l\'air surchauffé au ras du sol a un indice de réfraction n_chaud = 1,00020, tandis que l\'air plus frais au-dessus a un indice n_froid = 1,00029. Un rayon lumineux rase le sol.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🏜️ Mirages & Optique',
    questions: [
      {
        questionText: '1. Vers quel milieu la lumière est-elle courbée : vers l\'air chaud ou l\'air froid ?',
        hints: ['La lumière est toujours déviée vers les milieux d\'indice plus élevé (plus réfringents).'],
        solutionSteps: [
          'L\'air froid possède un indice de réfraction plus élevé (1,00029 > 1,00020).',
          'Le rayon lumineux s\'incurve vers le haut (vers l\'air froid), créant une trajectoire courbe qui donne l\'illusion d\'une flaque d\'eau réfléchissante (mirage inférieur).'
        ],
        finalAnswer: 'Courbée vers le milieu d\'indice le plus fort (air froid vers le haut).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Calculer la vitesse de la lumière dans l\'air chaud. Donnée : c = 2,9979 * 10^8 m/s dans le vide.',
        hints: ['Formule : v = c / n.'],
        solutionSteps: [
          'v = c / n_chaud = 2,9979 * 10^8 / 1,00020 ≈ 2,9973 * 10^8 m/s.'
        ],
        finalAnswer: 'v ≈ 2,9973 * 10^8 m/s.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2pc-bank-15',
    targetChapterId: 'pc-2nde-mouvement',
    title: 'Vecteur Vitesse & Virage d’une Moto en Grand Prix',
    context: 'Une moto aborde une chicane circulaire de rayon R = 50 m à vitesse constante v = 72 km/h. On s\'interroge sur la nature de son accélération.',
    difficulty: 'Moyen',
    points: 6,
    themeTag: 'sport',
    themeLabel: '🏍️ MotoGP & Mouvement Circulaire',
    questions: [
      {
        questionText: '1. Convertir la vitesse de 72 km/h en m/s.',
        hints: ['Diviser par 3,6.'],
        solutionSteps: [
          'v = 72 / 3,6 = 20 m/s.'
        ],
        finalAnswer: 'v = 20 m/s.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Bien que la valeur de la vitesse soit constante, le vecteur vitesse est-il constant ? Justifier.',
        hints: ['Un vecteur a une valeur, une direction et un sens.'],
        solutionSteps: [
          'Non. La direction du vecteur vitesse est à chaque instant tangente au cercle de la trajectoire.',
          'Puisque la trajectoire est une courbe, la direction change continuellement au cours du temps, donc le vecteur vitesse n\'est pas constant.'
        ],
        finalAnswer: 'Non, sa direction varie à chaque instant (mouvement circulaire uniforme, accélération centripète non nulle).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2pc-bank-16',
    targetChapterId: 'pc-2nde-spectres-etoiles',
    title: 'Loi de Wien & Température de surface de Bételgeuse',
    context: 'L\'étoile supergéante rouge Bételgeuse émet son rayonnement maximal à la longueur d\'onde λ_max = 850 nm. Donnée : constante de Wien b = 2,898 * 10^-3 m.K.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'space',
    themeLabel: '✨ Astrophysique & Loi de Wien',
    questions: [
      {
        questionText: '1. Énoncer la loi de déplacement de Wien liant la température T et λ_max.',
        hints: ['λ_max * T = constante.'],
        solutionSteps: [
          'La loi de Wien relie la température absolue de surface T d\'un corps noir à la longueur d\'onde du maximum d\'émission : λ_max * T = 2,898 * 10^-3 m.K.'
        ],
        finalAnswer: 'λ_max * T = 2,898 * 10^-3 m.K.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la température de surface de Bételgeuse en Kelvins (K) puis en degrés Celsius (°C).',
        hints: ['Convertir 850 nm en mètres : 850 * 10^-9 m.', 'T(°C) = T(K) - 273,15.'],
        solutionSteps: [
          'T = (2,898 * 10^-3) / (850 * 10^-9) ≈ 3409 K.',
          'T(°C) = 3409 - 273 ≈ 3136 °C.'
        ],
        finalAnswer: 'T ≈ 3410 K (environ 3140 °C).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-2pc-bank-17',
    targetChapterId: 'pc-2nde-forces-principe-inertie',
    title: 'Gravitation Universelle Terre-Lune & Marées',
    context: 'On étudie l\'interaction gravitationnelle entre la Terre (M_T = 5,97 * 10^24 kg) et la Lune (M_L = 7,35 * 10^22 kg). Distance centre à centre d = 3,84 * 10^8 m. G = 6,67 * 10^-11 N.m^2/kg^2.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'space',
    themeLabel: '🌕 Gravitation & Marées',
    questions: [
      {
        questionText: '1. Donner l\'expression vectorielle ou scalaire de la force de gravitation de Newton.',
        hints: ['F = G * (m1 * m2) / d^2.'],
        solutionSteps: [
          'L\'intensité de la force d\'attraction gravitationnelle entre deux corps ponctuels vaut : F = G * (M_T * M_L) / d^2.'
        ],
        finalAnswer: 'F = G * (M_T * M_L) / d^2.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer la valeur numérique de la force exercée par la Terre sur la Lune.',
        hints: ['Calculer d^2 : (3,84 * 10^8)^2 = 1,47 * 10^17 m^2.'],
        solutionSteps: [
          'F = (6,67 * 10^-11 * 5,97 * 10^24 * 7,35 * 10^22) / (3,84 * 10^8)^2.',
          'Numérateur ≈ 2,927 * 10^37.',
          'Dénominateur ≈ 1,475 * 10^17.',
          'F ≈ 1,98 * 10^20 N.'
        ],
        finalAnswer: 'F ≈ 1,98 * 10^20 Newtons.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-2pc-bank-18',
    targetChapterId: 'pc-2nde-solutions',
    title: 'Échelle de Teinte & Dosage du Fer dans les Épinards',
    context: 'Pour doser les ions fer (Fe2+) dans un extrait d\'épinards, on réalise une échelle de teinte avec des solutions étalons de concentrations connues : 2, 4, 6, 8, 10 mg/L.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '🥗 Nutrition & Échelle de Teinte',
    questions: [
      {
        questionText: '1. Quel principe régit la méthode de dosage par échelle de teinte ?',
        hints: ['L\'intensité de la coloration d\'une solution est proportionnelle à sa concentration massique.'],
        solutionSteps: [
          'Une solution est d\'autant plus intensément colorée que sa concentration en espèce absorbante est élevée (loi de Beer-Lambert qualitative).'
        ],
        finalAnswer: 'Comparaison visuelle de l\'intensité de la couleur avec des témoins de concentration connue.',
        pointsAllocated: 2
      },
      {
        questionText: '2. La couleur de la solution d\'épinard se situe précisément entre le tube à 6 mg/L et le tube à 8 mg/L. Encadrer la concentration en fer.',
        hints: ['Encadrement direct.'],
        solutionSteps: [
          'Par comparaison visuelle sous éclairage uniforme, la concentration est comprise entre 6 mg/L et 8 mg/L (estimation à 7 mg/L ± 1 mg/L).'
        ],
        finalAnswer: '6 mg/L < C(Fe) < 8 mg/L (environ 7 mg/L).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-bank-19',
    targetChapterId: 'pc-2nde-transformations-chimiques-nucleaires',
    title: 'Désintégration Alpha & Détecteur de Fumée Ionique',
    context: 'Certains détecteurs de fumée utilisent une infime source d\'Américium 241 (241_95 Am), qui subit une désintégration radioactive alpha pour donner du Neptunium (Np).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'tech',
    themeLabel: '🚨 Détecteur & Radioactivité Alpha',
    questions: [
      {
        questionText: '1. Quelle est la nature d\'une particule alpha (α) ?',
        hints: ['C\'est un noyau d\'hélium 4 (2 protons et 2 neutrons).'],
        solutionSteps: [
          'Une particule alpha est un noyau d\'hélium 4, noté 4_2 He.'
        ],
        finalAnswer: 'Noyau d\'hélium 4 (4_2 He).',
        pointsAllocated: 2
      },
      {
        questionText: '2. Écrire l\'équation bilan de la désintégration de l\'Américium 241.',
        hints: ['241_95 Am -> A_Z Np + 4_2 He.', 'Appliquer les lois de Soddy.'],
        solutionSteps: [
          'Conservation de A : 241 = A + 4 <=> A = 237.',
          'Conservation de Z : 95 = Z + 2 <=> Z = 93.',
          'L\'élément Z = 93 est le Neptunium (Np).'
        ],
        finalAnswer: '241_95 Am -> 237_93 Np + 4_2 He.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-2pc-bank-20',
    targetChapterId: 'pc-2nde-forces-principe-inertie',
    title: 'Chute avec Frottements d’un Parachutiste & Vitesse Limite',
    context: 'Un parachutiste de masse m = 80 kg saute d\'un avion. Avant d\'ouvrir son parachute, il subit son poids P et une force de traînée de l\'air F_frott = k * v^2.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '🪂 Parachutisme & Vitesse Limite',
    questions: [
      {
        questionText: '1. Calculer le poids P du parachutiste sur Terre (g = 9,81 N/kg).',
        hints: ['Formule : P = m * g.'],
        solutionSteps: [
          'P = 80 * 9,81 = 784,8 N.'
        ],
        finalAnswer: 'P ≈ 785 N.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Lorsque la vitesse limite v_lim est atteinte, le mouvement devient rectiligne uniforme. Sachant que k = 0,25 N.s^2/m^2, calculer v_lim.',
        hints: ['Au régime limite, les forces se compensent : P = F_frott.', '785 = 0,25 * (v_lim)^2.'],
        solutionSteps: [
          'D\'après le principe d\'inertie, à vitesse constante : P = k * (v_lim)^2.',
          '(v_lim)^2 = P / k = 784,8 / 0,25 = 3139,2.',
          'v_lim = √3139,2 ≈ 56,0 m/s.'
        ],
        finalAnswer: 'v_lim ≈ 56 m/s (environ 202 km/h).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-2pc-bank-21',
    targetChapterId: 'pc-2nde-corps-purs-melanges',
    title: 'Point de Fusion & Test de Pureté de l’Aspirine',
    context: 'Un laboratoire pharmaceutique synthétise de l\'aspirine (acide acétylsalicylique). Pour vérifier sa pureté, un chimiste utilise un banc Kofler.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'science',
    themeLabel: '💊 Pharmacie & Banc Kofler',
    questions: [
      {
        questionText: '1. Qu\'est-ce que la température de fusion d\'une espèce chimique ?',
        hints: ['Température du passage de l\'état solide à liquide à pression atmosphérique.'],
        solutionSteps: [
          'La température de fusion Tf est la température à laquelle coexistent les phases solide et liquide sous une pression donnée.'
        ],
        finalAnswer: 'Température de transition solide -> liquide.',
        pointsAllocated: 2
      },
      {
        questionText: '2. L\'échantillon fond net à 135 °C. La littérature indique 135 °C pour l\'aspirine pure. Que peut-on conclure ?',
        hints: ['Un corps pur présente une fusion nette à température constante.'],
        solutionSteps: [
          'L\'échantillon fond à la température exacte de référence avec un palier net.',
          'On en conclut que l\'aspirine synthétisée est pure.'
        ],
        finalAnswer: 'L\'aspirine est pure.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-2pc-bank-22',
    targetChapterId: 'pc-2nde-lumiere-snell',
    title: 'Dispersion de la Lumière Blanche par un Prisme',
    context: 'Isaac Newton envoie un faisceau de lumière solaire à travers un prisme en verre. Le faisceau s\'étale en un arc-en-ciel continu.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🌈 Prisme & Spectre Visible',
    questions: [
      {
        questionText: '1. Pourquoi le verre est-il qualifié de milieu dispersif ?',
        hints: ['Son indice de réfraction dépend de la fréquence (ou longueur d\'onde) de la lumière.'],
        solutionSteps: [
          'Un milieu est dit dispersif lorsque sa célérité et son indice de réfraction n dépendent de la fréquence (ou de la longueur d\'onde dans le vide) de l\'onde lumineuse qui le traverse.'
        ],
        finalAnswer: 'Son indice n dépend de la longueur d\'onde λ.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Sachant que n(bleu) > n(rouge), quelle radiation est la plus déviée par le prisme ?',
        hints: ['D\'après la loi de Snell-Descartes, plus n est grand, plus la déviation est forte.'],
        solutionSteps: [
          'Puisque n(bleu) > n(rouge), l\'angle de réfraction est plus petit pour le bleu.',
          'La lumière bleue est donc plus déviée que la lumière rouge à chaque dioptre du prisme.'
        ],
        finalAnswer: 'La radiation bleue est la plus déviée.',
        pointsAllocated: 3
      }
    ]
  }
];
