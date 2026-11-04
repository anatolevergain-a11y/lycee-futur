import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_1ERE_SVT: BankExerciseItem[] = [
  {
    id: 'ex-1svt-bank-1',
    targetChapterId: 'svt-1ere-mitose-adn',
    title: 'Cycle Cellulaire & Réplication Semi-Conservative de Meselson et Stahl',
    context: 'En 1958, Meselson et Stahl cultivent des bactéries E. coli sur un milieu contenant de l\'azote lourd 15N, puis les transfèrent sur un milieu contenant de l\'azote léger 14N pendant plusieurs cycles.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'science',
    themeLabel: '🧬 Génétique & Expérience Historique',
    questions: [
      {
        questionText: '1. Quelle est la densité de l\'ADN obtenue après une génération (G1) en milieu 14N ? Quel modèle de réplication cela valide-t-il ?',
        hints: ['Après un tour de réplication, chaque molécule d\'ADN est hybride (un brin lourd 15N et un brin léger 14N).'],
        solutionSteps: [
          'Après une génération G1, on observe une seule bande de densité intermédiaire (100% ADN hybride 15N/14N).',
          'Cela élimine immédiatement le modèle conservateur (qui prévoyait 50% léger et 50% lourd) et valide le modèle semi-conservatif.'
        ],
        finalAnswer: '100% ADN hybride de densité intermédiaire ; valide la réplication semi-conservative.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quelles bandes observe-t-on après deux générations (G2) et dans quelles proportions ?',
        hints: ['Séparation des brins hybrides : la moitié donne de l\'ADN léger pur, l\'autre de l\'ADN hybride.'],
        solutionSteps: [
          'À G2, les brins 15N servent de matrice pour former des duplex hybrides (50%), et les brins 14N forment des duplex 100% légers 14N/14N (50%).',
          'On observe donc deux bandes d\'intensité égale : 50% intermédiaire (hybride) et 50% légère.'
        ],
        finalAnswer: '50% ADN léger et 50% ADN hybride (deux bandes égales).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1svt-bank-2',
    targetChapterId: 'svt-1ere-mitose-adn',
    title: 'Phases de la Mitose & Ségrégation des Chromatides Sœurs',
    context: 'Dans une cellule somatique humaine à 2n = 46 chromosomes observée en anaphase de mitose, un poison du fuseau mitotique (la colchicine) bloque la division.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🔬 Microscopie & Mitose',
    questions: [
      {
        questionText: '1. Rappeler l\'ordre chronologique des 4 phases de la mitose.',
        hints: ['Prophase, Métaphase, Anaphase, Télophase (moyen mnémotechnique : PMAT).'],
        solutionSteps: [
          '1. Prophase (condensation de la chromatine, disparition de l\'enveloppe nucléaire).',
          '2. Métaphase (alignement des chromosomes sur la plaque équatoriale).',
          '3. Anaphase (rupture des centromères et migration des chromatides sœurs vers les pôles).',
          '4. Télophase et cytodiérèse (décondensation et séparation en deux cellules filles identiques).'
        ],
        finalAnswer: 'Prophase, Métaphase, Anaphase, Télophase (PMAT).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Combien de chromatides et de molécules d\'ADN chaque cellule fille reçoit-elle à l\'issue d\'une mitose normale ?',
        hints: ['Chaque cellule fille reçoit 46 chromosomes à 1 chromatide.'],
        solutionSteps: [
          'Chaque cellule fille reçoit 46 chromosomes simples (à 1 chromatide), soit exactement 46 molécules d\'ADN, assurant une reproduction conforme du génome.'
        ],
        finalAnswer: '46 chromosomes simples (46 molécules d\'ADN).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-3',
    targetChapterId: 'svt-1ere-immunite-innee',
    title: 'Réaction Inflammatoire Aiguë & Phagocytose lors d’une Blessure',
    context: 'Une écharde infectée par des bactéries pénètre la peau. En quelques minutes, une rougeur, une chaleur, un gonflement (œdème) et une douleur apparaissent.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🛡️ Immunologie & Inflammation',
    questions: [
      {
        questionText: '1. Quels médiateurs chimiques libérés par les mastocytes et les macrophages résidents provoquent la vasodilatation et l\'œdème ?',
        hints: ['Histamine, prostaglandines, cytokines.'],
        solutionSteps: [
          'Les mastocytes et macrophages sentinelles libèrent principalement de l\'histamine et des prostaglandines, augmentant la perméabilité des capillaires sanguins et provoquant le passage de plasma vers les tissus (œdème).'
        ],
        finalAnswer: 'L\'histamine et les prostaglandines.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Décrire les 4 étapes successives de la phagocytose réalisée par les granulocytes et macrophages.',
        hints: ['Adhésion, ingestion/endocytose, digestion lysosomale, rejet des déchets.'],
        solutionSteps: [
          '1. Adhésion (reconnaissance du pathogène par les récepteurs PRR).',
          '2. Ingestion (formation d\'un phagosome entourant la bactérie).',
          '3. Digestion enzymatique (fusion avec les lysosomes contenant des enzymes lytiques).',
          '4. Rejet des débris résiduels par exocytose.'
        ],
        finalAnswer: 'Adhésion, Ingestion, Digestion, Rejet des résidus.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-4',
    targetChapterId: 'svt-1ere-immunite-innee',
    title: 'Anti-Inflammatoires Non Stéroïdiens (AINS) & Action de l’Ibuprofène',
    context: 'Lors d\'une tendinite chez un sportif, le médecin prescrit de l\'ibuprofène pour soulager la douleur et l\'œdème.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'sport',
    themeLabel: '💊 Pharmacologie & Enzymes COX',
    questions: [
      {
        questionText: '1. Quelle enzyme clé de la synthèse des prostaglandines inflammatoires est inhibée par l\'ibuprofène ?',
        hints: ['Cyclo-oxygénase (COX-1 et COX-2).'],
        solutionSteps: [
          'L\'ibuprofène est un inhibiteur compétitif de la cyclo-oxygénase (COX), enzyme catalysant la conversion de l\'acide arachidonique membranaire en prostaglandines pro-inflammatoires.'
        ],
        finalAnswer: 'La cyclo-oxygénase (COX).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi l\'inhibition de cette enzyme atténue-t-elle la douleur ressentie par le patient ?',
        hints: ['Les prostaglandines sensibilisent les nocicepteurs nerveux.'],
        solutionSteps: [
          'Les prostaglandines abaissent le seuil de déclenchement des récepteurs de la douleur (nocicepteurs) aux terminaisons nerveuses libres. En réduisant leur synthèse, l\'ibuprofène diminue le signal nociceptif envoyé au cerveau.'
        ],
        finalAnswer: 'Baisse des prostaglandines qui sensibilisent les nocicepteurs à la douleur.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1svt-bank-5',
    targetChapterId: 'svt-1ere-enzymes',
    title: 'Cinétique Enzymatique de Michaelis-Menten & Vitesse Maximale Vmax',
    context: 'On mesure la vitesse initiale vi de l\'hydrolyse du lactose par la lactase en fonction de la concentration en substrat [S]. La vitesse plafonne à Vmax = 120 µmol/min avec une constante Km = 5,0 mmol/L.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🥛 Lactase & Saturation Enzymatique',
    questions: [
      {
        questionText: '1. Pourquoi la vitesse initiale de réaction plafonne-t-elle à Vmax aux fortes concentrations en substrat ?',
        hints: ['Phénomène de saturation de tous les sites actifs disponibles.'],
        solutionSteps: [
          'Toutes les molécules d\'enzyme ont leur site actif occupé par le substrat sous forme de complexe enzyme-substrat [ES].',
          'Il n\'y a plus de site actif libre disponible : la vitesse devient indépendante de la concentration en substrat (ordre 0).'
        ],
        finalAnswer: 'Saturation de la totalité des sites actifs des enzymes.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle est la vitesse de réaction lorsque [S] = Km ?',
        hints: ['Par définition de la constante de Michaelis : vi = Vmax / 2.'],
        solutionSteps: [
          'D\'après l\'équation de Michaelis-Menten : vi = Vmax * [S] / (Km + [S]).',
          'Si [S] = Km, vi = Vmax * Km / (2Km) = Vmax / 2 = 120 / 2 = 60 µmol/min.'
        ],
        finalAnswer: 'vi = Vmax / 2 = 60 µmol/min.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1svt-bank-6',
    targetChapterId: 'svt-1ere-structure-globe',
    title: 'Modèle PREM & Zone de Moindre Vitesse (LVZ)',
    context: 'Le modèle sismique PREM met en évidence, entre 100 et 220 km de profondeur sous les océans, un ralentissement sensible de la vitesse des ondes S (LVZ : Low Velocity Zone).',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🌍 Modèle PREM & Lithosphère/Asthénosphère',
    questions: [
      {
        questionText: '1. Quelle frontière mécanique majeure la LVZ permet-elle de délimiter ?',
        hints: ['Frontière entre la lithosphère rigide et l\'asthénosphère ductile.'],
        solutionSteps: [
          'La LVZ marque la limite entre la lithosphère cassante et rigide (qui englobe la croûte et le manteau lithosphérique rigide) et l\'asthénosphère sous-jacente, plus chaude et ductile.'
        ],
        finalAnswer: 'Limite lithosphère rigide / asthénosphère ductile.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Pourquoi les ondes S ralentissent-elles dans la LVZ sans toutefois disparaître ?',
        hints: ['Péridotite mantellique ductile avec une infime fraction de fusion partielle interstitielle (~1%).'],
        solutionSteps: [
          'La température de la péridotite y approche son solidus, créant une ductilité accrue et un très faible taux de fusion interstitielle (moins de 1%), suffisant pour amortir les ondes S sans les stopper (car le milieu reste globalement solide).'
        ],
        finalAnswer: 'Milieu solide ductile avec début de plasticité/fusion partielle minime.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-7',
    targetChapterId: 'svt-1ere-immunite-adaptative',
    title: 'Sélection Clonale & Production d’Anticorps par les Plasmocytes',
    context: 'Lors d\'une primo-infection par le virus de la grippe, des lymphocytes B spécifiques de l\'hémagglutinine virale sont activés dans les ganglions lymphatiques.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'science',
    themeLabel: '💉 Vaccin & Sélection Clonale',
    questions: [
      {
        questionText: '1. Décrire les trois étapes clés de la réponse adaptative des lymphocytes B (sélection, prolifération, différenciation).',
        hints: ['Reconnaissance par les BCR, division clonale stimulée par l\'interleukine des LT4, différenciation en plasmocytes.'],
        solutionSteps: [
          '1. Sélection clonale : un lymphocyte B vierge reconnaît spécifiquement l\'antigène natif par ses anticorps membranaires (BCR).',
          '2. Prolifération clonale : sous l\'effet des cytokines sécrétées par les lymphocytes T auxiliaires (LT4), le LB sélectionné se multiplie par mitoses successives.',
          '3. Différenciation : les clones se différencient en lymphocytes B mémoire à longue durée de vie et en plasmocytes sécréteurs d\'anticorps circulants.'
        ],
        finalAnswer: 'Sélection par le BCR -> Prolifération par mitoses -> Différenciation en plasmocytes et LB mémoire.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quel est le rôle d\'un anticorps circulant vis-à-vis d\'un virus libre ? Forme-t-il un complexe immun ?',
        hints: ['Neutralisation par agglutination et facilitation de la phagocytose (opsonisation).'],
        solutionSteps: [
          'L\'anticorps se fixe spécifiquement sur les antigènes viraux par ses sites hypervariables, neutralisant le pouvoir infectieux du virus en l\'empêchant d\'entrer dans les cellules cibles (complexe immun).',
          'La région constante Fc de l\'anticorps recrute ensuite les phagocytes pour éliminer le complexe (opsonisation).'
        ],
        finalAnswer: 'Neutralisation du virus via la formation de complexes immuns et facilitation de la phagocytose.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1svt-bank-8',
    targetChapterId: 'svt-1ere-ecosystemes-services-interactions',
    title: 'Flux d’Énergie & Règle des 10% de Lindeman dans une Forêt Tempérée',
    context: 'Dans une forêt, les producteurs primaires (arbres) captent l\'énergie solaire et fixent 10 000 kJ/m²/an de biomasse végétale nette. On étudie le transfert aux herbivores puis aux carnivores.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🌲 Écosystème & Pyramide Trophique',
    questions: [
      {
        questionText: '1. D\'après la règle empirique de Lindeman, quelle proportion approximative de l\'énergie passe d\'un niveau trophique au niveau supérieur ?',
        hints: ['Règle des 10%.'],
        solutionSteps: [
          'Le rendement écologique moyen de transfert d\'énergie d\'un niveau trophique au suivant est d\'environ 10% (le reste étant dissipé sous forme de chaleur par la respiration cellulaire et les pertes fécales).'
        ],
        finalAnswer: 'Environ 10% d\'énergie transférée.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Calculer l\'énergie disponible pour les herbivores (consommateurs primaires) puis pour les carnivores (consommateurs secondaires).',
        hints: ['10 000 * 0,10 puis re-multiplier par 0,10.'],
        solutionSteps: [
          'Herbivores : 10 000 * 0,10 = 1 000 kJ/m²/an.',
          'Carnivores : 1 000 * 0,10 = 100 kJ/m²/an.'
        ],
        finalAnswer: '1 000 kJ/m²/an pour les herbivores ; 100 kJ/m²/an pour les carnivores.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1svt-bank-9',
    targetChapterId: 'svt-1ere-genetique-sante-antibiotiques',
    title: 'Sélection d’Antibiorésistance sur une Colonie Bactérienne',
    context: 'Dans un hôpital, une infection pulmonaire est traitée à l\'amoxicilline. Une mutation spontanée dans le gène de la bêta-lactamase rend une bactérie sur 10^7 résistante au médicament.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧫 Hôpital & Résistance aux Antibiotiques',
    questions: [
      {
        questionText: '1. L\'antibiotique crée-t-il la mutation de résistance chez la bactérie ? Préciser le rôle exact du traitement.',
        hints: ['La mutation survient au hasard avant tout traitement.'],
        solutionSteps: [
          'Non ! La mutation survient de manière spontanée et aléatoire lors des erreurs de réplication de l\'ADN, indépendamment de la présence de l\'antibiotique.',
          'L\'antibiotique agit uniquement comme une puissante pression de sélection qui élimine les bactéries sensibles et sélectionne le mutant résistant préexistant.'
        ],
        finalAnswer: 'Non : la mutation est aléatoire et préalable ; l\'antibiotique exerce une sélection directionnelle.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Expliquer comment le non-respect de la durée d\'un traitement antibiotique favorise l\'émergence de souches multi-résistantes.',
        hints: ['Interruption prématurée laissant survivre les bactéries les plus tolérantes.'],
        solutionSteps: [
          'Si le patient arrête son traitement dès la disparition des symptômes, les bactéries partiellement résistantes ou les plus tenaces survivent et se multiplient à nouveau, créant une population bactérienne réfractaire à cette molécule.'
        ],
        finalAnswer: 'Survie et dissémination des variants les moins sensibles non totalement éradiqués.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-10',
    targetChapterId: 'svt-1ere-mitose-adn',
    title: 'Mutations Ponctiformes de l’ADN & Drépanocytose',
    context: 'L\'allèle normal de l\'hémoglobine (HbA) possède le codon GAG (acide glutamique) tandis que l\'allèle muté (HbS) possède le codon GTG (valine).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🧬 Mutation Ponctuelle & Maladie Génétique',
    questions: [
      {
        questionText: '1. Identifier la nature exacte de cette mutation ponctuelle.',
        hints: ['Remplacement d\'un nucléotide A par un nucléotide T.'],
        solutionSteps: [
          'Il s\'agit d\'une mutation ponctuelle par substitution d\'une adénine (A) par une thymine (T).'
        ],
        finalAnswer: 'Mutation par substitution (faux-sens).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi qualifie-t-on cette mutation de mutation "faux-sens" ?',
        hints: ['Elle modifie l\'acide aminé incorporé dans la protéine finale.'],
        solutionSteps: [
          'La substitution modifie le codon de l\'ARNm (GAG devient GUG), ce qui entraîne le remplacement de l\'acide glutamique polaire hydrophile par la valine hydrophobe dans la chaîne polypeptidique de globine.',
          'Une mutation qui change la nature d\'un acide aminé est appelée mutation faux-sens.'
        ],
        finalAnswer: 'Elle modifie le sens du codon en codant un acide aminé différent (valine au lieu de glutamate).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-11',
    targetChapterId: 'svt-1ere-structure-globe',
    title: 'Isostasie & Racine Crustale des Alpes selon le Modèle d’Airy',
    context: 'Sous une chaîne de montagnes de relief h = 3 000 m (densité de la croûte dc = 2,7), la croûte s\'enfonce dans le manteau (densité dm = 3,3) pour compenser la charge.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'science',
    themeLabel: '🏔️ Isostasie & Racine Crustale',
    questions: [
      {
        questionText: '1. Énoncer le principe de l\'équilibre isostatique selon le modèle d\'Airy.',
        hints: ['La lithosphère rigide flotte sur l\'asthénosphère ductile comme un iceberg sur l\'eau.'],
        solutionSteps: [
          'Le modèle d\'Airy postule que la croûte de densité constante s\'équilibre par flottaison sur le manteau plus dense.',
          'Tout relief en surface est compensé en profondeur par un épaississement crustal appelé racine crustale.'
        ],
        finalAnswer: 'Flottaison de la croûte sur le manteau avec équilibre des masses au niveau de la surface de compensation.',
        pointsAllocated: 3
      },
      {
        questionText: '2. En utilisant l\'égalité des masses à la surface de compensation dc * (h + r) = dm * r, calculer la profondeur r de la racine crustale.',
        hints: ['r = h * dc / (dm - dc).', 'dm - dc = 3,3 - 2,7 = 0,6.'],
        solutionSteps: [
          'dc * h + dc * r = dm * r <=> h * dc = r * (dm - dc).',
          'r = (3000 * 2,7) / (3,3 - 2,7) = 8100 / 0,6 = 13 500 m = 13,5 km.'
        ],
        finalAnswer: 'Racine crustale r = 13,5 km sous la base normale de la croûte.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-1svt-bank-12',
    targetChapterId: 'svt-1ere-immunite-adaptative',
    title: 'Lymphocytes T Cytotoxiques (CD8) & Destruction de Cellules Cancéreuses',
    context: 'Un lymphocyte T cytotoxique (LTc) reconnaît un peptide antigénique étranger présenté à la surface d\'une cellule tumorale par les molécules du CMH I.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🔬 Immunothérapie & LTc',
    questions: [
      {
        questionText: '1. Quels effecteurs cytotoxiques le lymphocyte T libère-t-il par exocytose orientée pour détruire la cellule cible ?',
        hints: ['Perforines et granzymes.'],
        solutionSteps: [
          'Le LTc libère de la perforine (qui s\'insère dans la membrane de la cellule cible pour former des pores lytiques) et des granzymes (qui s\'infiltrent par ces pores et déclenchent l\'apoptose cellulaire).'
        ],
        finalAnswer: 'Perforines (pores membranaires) et granzymes (déclenchement de l\'apoptose).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Comment la cellule tumorale meurt-elle : par nécrose chaotique ou par mort programmée (apoptose) ?',
        hints: ['Mort cellulaire programmée et propre.'],
        solutionSteps: [
          'Elle meurt par apoptose (mort cellulaire programmée), avec fragmentation ordonnée de son ADN et phagocytose rapide de ses corps apoptotiques sans induire d\'inflammation disséminée.'
        ],
        finalAnswer: 'Par apoptose (mort cellulaire programmée).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-13',
    targetChapterId: 'svt-1ere-ecosystemes-services-interactions',
    title: 'Résilience Écologique après Incendie & Succession Végétale',
    context: 'Après un incendie de forêt méditerranéenne, la recolonisation débute par des plantes pionnières herbacées puis des arbustes pyrophytes (cistes, ajoncs).',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🔥 Feux de Forêt & Résilience Écologique',
    questions: [
      {
        questionText: '1. Définir la résilience d\'un écosystème.',
        hints: ['Capacité à retrouver son état d\'équilibre initial après une perturbation.'],
        solutionSteps: [
          'La résilience écologique est la capacité d\'un écosystème à absorber une perturbation majeure (incendie, tempête, pollution) et à restaurer sa structure et son fonctionnement d\'origine.'
        ],
        finalAnswer: 'Capacité à recouvrer son état d\'équilibre initial après une perturbation.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle est la différence entre succession écologique primaire et secondaire ?',
        hints: ['Présence ou absence préalable de sol.'],
        solutionSteps: [
          'La succession primaire s\'établit sur un milieu stérile vierge de sol (roche nue, lave volcanique récente).',
          'La succession secondaire s\'établit sur un sol déjà existant et enrichi qui a conservé des graines ou des rhizomes après la perturbation.'
        ],
        finalAnswer: 'La succession secondaire démarre sur un sol préexistant (cas d\'un incendie).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-14',
    targetChapterId: 'svt-1ere-genetique-sante-antibiotiques',
    title: 'Proto-Oncogènes, Gènes Suppresseurs de Tumeur & Cancer du Côlon',
    context: 'Le développement d\'un adénocarcinome colorectal résulte d\'une accumulation séquentielle de mutations somatiques : activation de l\'oncogène KRAS et inactivation du gène suppresseur de tumeur TP53.',
    difficulty: 'Moyen',
    points: 8,
    themeTag: 'science',
    themeLabel: '🧬 Cancérologie & Mutations Somatiques',
    questions: [
      {
        questionText: '1. Quel est le rôle normal de la protéine p53 dans une cellule saine subissant des altérations de l\'ADN ?',
        hints: ['Gardienne du génome : blocage du cycle cellulaire en G1 pour réparation ou déclenchement de l\'apoptose.'],
        solutionSteps: [
          'La protéine p53 est le "gardien du génome" : en présence de dommages à l\'ADN, elle bloque le cycle cellulaire en phase G1 pour permettre la réparation de l\'ADN par les enzymes cellulaires.',
          'Si les dégâts sont irréparables, elle déclenche le suicide cellulaire (apoptose).'
        ],
        finalAnswer: 'Arrêt du cycle cellulaire pour réparation de l\'ADN ou induction de l\'apoptose.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Pourquoi une mutation perte de fonction sur TP53 favorise-t-elle l\'échappement tumoral ?',
        hints: ['La cellule endommagée continue de proliférer de manière incontrôlée.'],
        solutionSteps: [
          'Privée de p53 fonctionnelle, la cellule mutée ne s\'arrête plus et n\'entre plus en apoptose : elle se divise continuellement et accumule de nouvelles mutations chromosomiques, formant une tumeur invasive.'
        ],
        finalAnswer: 'Prolifération incontrôlée de cellules anormales sans déclenchement d\'apoptose.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1svt-bank-15',
    targetChapterId: 'svt-1ere-enzymes',
    title: 'Spécificité de Substrat & de Réaction de l’Amylase Salivaire',
    context: 'L\'amylase salivaire hydrolyse l\'amidon en maltose à 37 °C et pH neutre. Placée en présence de saccharose ou de blanc d\'œuf (protéines), aucune réaction ne se produit.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🍞 Digestion & Double Spécificité',
    questions: [
      {
        questionText: '1. Définir la double spécificité des enzymes (spécificité de substrat et spécificité d\'action).',
        hints: ['Une enzyme ne reconnaît qu\'un seul substrat et ne réalise qu\'un seul type de transformation.'],
        solutionSteps: [
          '1. Spécificité de substrat : l\'enzyme ne se lie qu\'à une molécule spécifique dont la conformation tridimensionnelle est complémentaire de son site de liaison.',
          '2. Spécificité d\'action : le site catalytique ne réalise qu\'un type précis de réaction chimique (ici, coupure des liaisons osidiques alpha 1-4).'
        ],
        finalAnswer: 'Reconnaissance exclusive d\'un substrat précis et catalyse d\'une réaction chimique unique.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Que se passe-t-il si l\'on fait bouillir l\'amylase à 100 °C avant l\'expérience ?',
        hints: ['Dénaturation thermique irréversible.'],
        solutionSteps: [
          'À 100 °C, l\'agitation thermique rompt les liaisons hydrogène maintenant la structure tertiaire de la protéine : l\'enzyme est dénaturée.',
          'Son site actif perd sa conformation tridimensionnelle et l\'activité enzymatique est définitivement perdue.'
        ],
        finalAnswer: 'Dénaturation thermique de l\'enzyme et perte irréversible de l\'activité catalytique.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1svt-bank-16',
    targetChapterId: 'svt-1ere-mitose-adn',
    title: 'Caryotype Humain & Trisomie 21 par Non-Disjonction',
    context: 'Un caryotype prénatal révèle la présence de 47 chromosomes chez un fœtus, avec trois chromosomes 21 complets.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '👶 Génétique & Caryotype',
    questions: [
      {
        questionText: '1. Quel accident méiotique lors de la gamétogenèse parentale est à l\'origine de cette anomalie du nombre de chromosomes ?',
        hints: ['Non-disjonction des chromosomes homologues en anaphase I ou des chromatides en anaphase II.'],
        solutionSteps: [
          'Une non-disjonction de la paire de chromosomes 21 lors de l\'anaphase I (ou des chromatides lors de l\'anaphase II) produit un gamète anormal possédant deux chromosomes 21 au lieu d\'un seul.',
          'Sa fécondation avec un gamète normal à 1 chromosome 21 engendre un zygote à trois chromosomes 21.'
        ],
        finalAnswer: 'Non-disjonction méiotique d\'une paire chromosomique en anaphase I ou II.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Comment écrit-on la formule chromosomique standard d\'un garçon atteint de trisomie 21 ?',
        hints: ['47, XY, +21.'],
        solutionSteps: [
          'La notation internationale indique le nombre total de chromosomes, les chromosomes sexuels puis l\'anomalie : 47, XY, +21.'
        ],
        finalAnswer: '47, XY, +21.',
        pointsAllocated: 2
      }
    ]
  },
  {
    id: 'ex-1svt-bank-17',
    targetChapterId: 'svt-1ere-structure-globe',
    title: 'Gradient Géothermique & Convection Mantellique',
    context: 'Dans un puits de forage profond, la température des roches augmente en moyenne de 30 °C par kilomètre de profondeur dans la croûte, mais seulement de 0,5 °C/km dans le manteau convectif.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🌋 Géothermie & Transfert Thermique',
    questions: [
      {
        questionText: '1. Quels sont les deux modes distincts de transfert thermique qui dominent respectivement dans la lithosphère rigide et dans le manteau ductile ?',
        hints: ['Conduction dans le solide rigide, convection avec mouvement de matière dans le fluide visqueux.'],
        solutionSteps: [
          'Dans la lithosphère rigide : transfert par conduction thermique (transfert d\'agitation de proche en proche sans déplacement global de matière, d\'où un fort gradient thermique).',
          'Dans le manteau asthénosphérique ductile : transfert par convection mantellique (mouvements ascendants chauds et descendants froids de matière visqueuse, très efficace pour homogénéiser la température, d\'où un faible gradient adiabatique).'
        ],
        finalAnswer: 'Conduction dans la lithosphère ; Convection dans le manteau asthénosphérique.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quelle est la source d\'énergie thermique interne principale qui entretient la convection de la Terre depuis 4,5 milliards d\'années ?',
        hints: ['Désintégration radioactive des isotopes.', 'Uranium, Thorium, Potassium 40.'],
        solutionSteps: [
          'La désintégration radioactive naturelle des radio-isotopes du manteau et de la croûte (Uranium 238 et 235, Thorium 232, Potassium 40) produit en continu la majorité du flux de chaleur géothermique.'
        ],
        finalAnswer: 'La désintégration radioactive naturelle des roches (U, Th, 40K).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-18',
    targetChapterId: 'svt-1ere-immunite-innee',
    title: 'Récepteurs PRR (Toll-Like Receptors) & Motifs PAMP',
    context: 'Les cellules de l\'immunité innée possèdent des récepteurs TLR capables de reconnaître instantanément les lipopolysaccharides (LPS) des parois bactériennes.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🛡️ Immunité Innée & Récepteurs TLR',
    questions: [
      {
        questionText: '1. Que signifient les acronymes PRR et PAMP en immunologie ?',
        hints: ['PRR : Pattern Recognition Receptors ; PAMP : Pathogen-Associated Molecular Patterns.'],
        solutionSteps: [
          'PRR : Pattern Recognition Receptor (récepteurs de reconnaissance de motifs moléculaires).',
          'PAMP : Pathogen-Associated Molecular Pattern (motifs moléculaires universellement associés aux pathogènes comme le peptidoglycane ou la flagelline).'
        ],
        finalAnswer: 'PRR = Récepteurs de reconnaissance ; PAMP = Motifs moléculaires associés aux pathogènes.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi l\'immunité innée est-elle qualifiée de non spécifique et dépourvue de mémoire ?',
        hints: ['Les récepteurs sont identiques chez tous les individus et ne s\'adaptent pas au fil des expositions.'],
        solutionSteps: [
          'Elle réagit de façon stéréotypée et identique quel que soit le pathogène rencontré, dès la première minute, sans générer de clones mémoire ni d\'amplification lors d\'un contact ultérieur.'
        ],
        finalAnswer: 'Réponse stéréotypée immédiate sans formation de cellules mémoires.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-19',
    targetChapterId: 'svt-1ere-ecosystemes-services-interactions',
    title: 'Pollinisation & Service Écosystémique des Abeilles',
    context: 'Plus de 75% des principales cultures vivrières mondiales (fruits, légumes, oléagineux) dépendent de la pollinisation animale par les insectes.',
    difficulty: 'Facile',
    points: 5,
    themeTag: 'ecologie',
    themeLabel: '🐝 Biodiversité & Pollinisation',
    questions: [
      {
        questionText: '1. À quelle catégorie de services écosystémiques la pollinisation appartient-elle selon l\'ONU ?',
        hints: ['Services d\'approvisionnement, de régulation, de soutien ou culturels.'],
        solutionSteps: [
          'La pollinisation est un service de régulation indispensable au maintien de la production agricole et de la régénération des écosystèmes forestiers.'
        ],
        finalAnswer: 'Service écosystémique de régulation.',
        pointsAllocated: 2
      },
      {
        questionText: '2. Citer deux menaces anthropiques majeures qui pèsent sur les populations d\'abeilles sauvages.',
        hints: ['Pesticides néonicotinoïdes et destruction des haies/habitats.'],
        solutionSteps: [
          '1. L\'utilisation intensive de pesticides neurotoxiques (néonicotinoïdes).',
          '2. La fragmentation et destruction des habitats naturels (arrachage des haies, monoculture).'
        ],
        finalAnswer: 'Pesticides de synthèse et fragmentation des habitats naturels.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-20',
    targetChapterId: 'svt-1ere-genetique-sante-antibiotiques',
    title: 'Transfert Horizontal de Gènes chez les Bactéries (Plasmide)',
    context: 'Dans le microbiote intestinal d\'un patient, une souche d\'E. coli transmet un plasmide portant un gène de résistance aux carbapénèmes à une bactérie Klebsiella pneumoniae via un pilus sexuel.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧬 Microbiologie & Conjugaison Bactérienne',
    questions: [
      {
        questionText: '1. Quel mécanisme de transfert horizontal de gène est illustré par cette transmission via un pilus ?',
        hints: ['Transformation, Transduction ou Conjugaison ?'],
        solutionSteps: [
          'Le transfert direct d\'ADN plasmidique de cellule à cellule par contact direct via un pont cytoplasmique (pilus sexuel) est la conjugaison bactérienne.'
        ],
        finalAnswer: 'La conjugaison bactérienne.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi ce transfert horizontal accélère-t-il considérablement l\'antibiorésistance par rapport aux mutations verticales classiques ?',
        hints: ['Transmission possible entre espèces différentes sans reproduction sexuée.'],
        solutionSteps: [
          'Le transfert horizontal s\'affranchit de la descendance : une bactérie peut transférer un bloc entier de multi-résistances en quelques minutes à des bactéries d\'espèces totalement distinctes.'
        ],
        finalAnswer: 'Dissémination fulgurante de résistances multiples entre espèces bactériennes différentes.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-1svt-bank-21',
    targetChapterId: 'svt-1ere-enzymes',
    title: 'Inhibition Compétitive vs Non Compétitive',
    context: 'En pharmacologie, on développe une molécule thérapeutique bloquant une enzyme cible. Deux types d\'inhibiteurs sont testés in vitro.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧪 Pharmacologie & Inhibiteurs',
    questions: [
      {
        questionText: '1. Où se fixe un inhibiteur compétitif par rapport au substrat naturel ? Que devient Vmax à forte dose de substrat ?',
        hints: ['Il se fixe sur le site actif et entre en compétition directe.'],
        solutionSteps: [
          'L\'inhibiteur compétitif possède une structure analogue au substrat et se lie réversiblement au site actif de l\'enzyme.',
          'Si la concentration en substrat naturel devient extrêmement élevée, le substrat déplace l\'inhibiteur : la vitesse maximale Vmax n\'est pas modifiée (seul le Km apparent augmente).'
        ],
        finalAnswer: 'Fixation sur le site actif ; Vmax reste inchangée à saturation de substrat.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Où se fixe un inhibiteur allostérique (non compétitif) et quel est son impact sur Vmax ?',
        hints: ['Fixation sur un site distinct modifiant la conformation spatiale de l\'enzyme.'],
        solutionSteps: [
          'Il se lie sur un site allostérique distant, déformant la conformation tridimensionnelle du site catalytique.',
          'L\'enzyme perd son efficacité catalytique même saturée en substrat : Vmax diminue irréversiblement ou définitivement.'
        ],
        finalAnswer: 'Fixation sur un site allostérique distinct entraînant une diminution de Vmax.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-22',
    targetChapterId: 'svt-1ere-immunite-adaptative',
    title: 'Mémoire Immunitaire & Efficacité du Rappel Vaccinal',
    context: 'Lors d\'une primo-injection vaccinale, le taux d\'anticorps IgG plasmatiques apparaît après 10 jours. Lors d\'une deuxième injection (rappel) 6 mois plus tard, la réponse est fulgurante.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '💉 Vaccinologie & Réponse Secondaire',
    questions: [
      {
        questionText: '1. Quelles sont les deux caractéristiques fondamentales de la réponse immunitaire secondaire par rapport à la réponse primaire ?',
        hints: ['Beaucoup plus rapide, beaucoup plus intense et durable.'],
        solutionSteps: [
          '1. Rapidité : apparition d\'anticorps en 24 à 48 heures (au lieu de 10 jours).',
          '2. Intensité et affinité : production d\'une quantité d\'anticorps IgG jusqu\'à 100 fois supérieure avec une affinité antigénique accrue.'
        ],
        finalAnswer: 'Réponse beaucoup plus rapide (24-48h) et titre d\'anticorps considérablement plus élevé et durable.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelles cellules spécialisées à longue durée de vie sont responsables de cette mémoire immunitaire ?',
        hints: ['Lymphocytes B et T mémoire.'],
        solutionSteps: [
          'Les lymphocytes B mémoire et les lymphocytes T mémoire (CD4 et CD8), générés lors de la première exposition et conservés pendant des années dans les organes lymphoïdes secondaires.'
        ],
        finalAnswer: 'Les lymphocytes mémoires (LB et LT mémoire).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-1svt-bank-23',
    targetChapterId: 'svt-1ere-structure-globe',
    title: 'Tomographie Sismique & Panaches Mantelliques',
    context: 'La tomographie sismique analyse les anomalies de vitesse résiduelles des ondes P et S (Δv/v en %) par rapport au modèle moyen PREM pour cartographier le manteau profond.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🛰️ Tomographie Sismique & Géodynamique',
    questions: [
      {
        questionText: '1. Que traduit une anomalie de vitesse sismique positive (ondes plus rapides que la moyenne, zone bleue) ?',
        hints: ['Matériel plus froid et plus dense.'],
        solutionSteps: [
          'Une anomalie positive de vitesse (vitesse accélérée) indique un milieu plus froid, plus dense et plus rigide, typique d\'une lithosphère océanique subduite s\'enfonçant dans le manteau.'
        ],
        finalAnswer: 'Matériel rocheux plus froid et dense (plaque plongeante en subduction).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Que traduit une anomalie de vitesse négative (ondes ralenties, zone rouge) ?',
        hints: ['Matériel plus chaud et moins dense ascendant.'],
        solutionSteps: [
          'Une anomalie négative de vitesse indique un matériel rocheux anormalement chaud, moins dense et plus ductile, caractéristique d\'un panache mantellique thermique ascendant (point chaud).'
        ],
        finalAnswer: 'Matériel rocheux anormalement chaud et ductile ascendant (panache thermique).',
        pointsAllocated: 3
      }
    ]
  }
];
