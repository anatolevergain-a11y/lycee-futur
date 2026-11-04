import { SolvedExercise } from '../types';

export interface BankExerciseItem extends SolvedExercise {
  targetChapterId: string;
}

export const EXERCISE_BANK_TERMINALE_SVT: BankExerciseItem[] = [
  {
    id: 'ex-tsvt-bank-1',
    targetChapterId: 'svt-term-meiose-diversite',
    title: 'Brassage Interchromosomique & Intrachromosomique (Crossing-Over) chez la Drosophile',
    context: 'Chez la mouche drosophile, on croise des femelles hétérozygotes pour deux gènes liés (corps gris/noir et ailes longues/vestigiales) avec des mâles double récessifs. On obtient 42% de phénotypes parentaux [e+, vg+], 42% [e, vg], 8% [e+, vg] et 8% [e, vg+].',
    difficulty: 'Type Bac',
    points: 9,
    themeTag: 'science',
    themeLabel: '🪰 Génétique Formelle & Crossing-Over',
    questions: [
      {
        questionText: '1. Identifier les gamètes recombinés et calculer le pourcentage de recombinaison.',
        hints: ['Les phénotypes minoritaires correspondent aux gamètes issus de crossing-over.'],
        solutionSteps: [
          'Les phénotypes minoritaires non parentaux sont [e+, vg] (8%) et [e, vg+] (8%).',
          'Fréquence totale des recombinés : 8% + 8% = 16%.'
        ],
        finalAnswer: 'Recombinés = 16% (soit une distance génétique de 16 cM entre les deux locus).',
        pointsAllocated: 4
      },
      {
        questionText: '2. À quelle phase précise de la méiose se déroule le crossing-over (enjambement) responsable de ces formes recombinées ?',
        hints: ['Prophase I de méiose, lors de l\'appariement des bivalents.'],
        solutionSteps: [
          'Le brassage intrachromosomique par crossing-over se produit lors de la prophase I de méiose, lorsque les chromosomes homologues s\'apparient en tétrades (bivalents) et forment des chiasmas où s\'échangent des fragments de chromatides non-sœurs.'
        ],
        finalAnswer: 'En prophase I de méiose.',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-2',
    targetChapterId: 'svt-term-genetique-populations',
    title: 'Modèle de Hardy-Weinberg & Fréquence de la Mucoviscidose',
    context: 'Dans la population européenne, 1 enfant sur 2 500 naît atteint de mucoviscidose (maladie autosomique récessive due à l\'allèle m). On suppose la population à l\'équilibre de Hardy-Weinberg.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🧬 Génétique des Populations & Hardy-Weinberg',
    questions: [
      {
        questionText: '1. Calculer la fréquence q de l\'allèle morbide récessif m.',
        hints: ['q^2 = 1 / 2 500.', 'q = √(1/2500) = 1/50.'],
        solutionSteps: [
          'Fréquence des homozygotes malades : f(m/m) = q^2 = 1 / 2 500 = 0,0004.',
          'Fréquence de l\'allèle m : q = √0,0004 = 0,02 = 1 / 50.'
        ],
        finalAnswer: 'q = 0,02 (soit 2%).',
        pointsAllocated: 3
      },
      {
        questionText: '2. En déduire la fréquence p de l\'allèle sain (p = 1 - q) et la proportion d\'individus porteurs sains hétérozygotes (2pq) dans la population.',
        hints: ['p = 1 - 0,02 = 0,98.', 'Calculer 2 * p * q.'],
        solutionSteps: [
          'p = 1 - 0,02 = 0,98.',
          'Fréquence des hétérozygotes sains : 2pq = 2 * 0,98 * 0,02 = 0,0392 ≈ 4% (soit environ 1 personne sur 25 !).'
        ],
        finalAnswer: '2pq ≈ 0,039 (environ 1 personne sur 25 est porteuse saine de la mutation).',
        pointsAllocated: 5,
        bacTrap: 'Ne pas confondre la fréquence d\'un allèle (q) et la fréquence d\'un génotype (q^2 ou 2pq) !'
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-3',
    targetChapterId: 'svt-term-reflexe-myotatique',
    title: 'Arc Réflexe Myotatique & Vitesse de Conduction du Message Nerveux',
    context: 'La percussion du tendon rotulien déclenche la contraction réflexe du muscle quadriceps. La distance aller-retour entre le tendon et la moelle épinière est d = 1,40 m. Le délai mesuré à l\'électromyogramme est Δt = 20,0 ms.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'sport',
    themeLabel: '🏃 Neurophysiologie & Réflexe Rotulien',
    questions: [
      {
        questionText: '1. Décrire les 5 éléments anatomiques constitutifs de l\'arc réflexe myotatique monosynaptique.',
        hints: ['Récepteur, voie afférente, centre d\'intégration, voie efférente, effecteur.'],
        solutionSteps: [
          '1. Récepteur sensoriel : fuseau neuromusculaire étiré par le choc.',
          '2. Voie sensitive afférente : fibre nerveuse sensitive Ia.',
          '3. Centre intégrateur : moelle épinière (substance grise, synapse unique).',
          '4. Voie motrice efférente : motoneurone alpha sortant par la racine ventrale.',
          '5. Effecteur : plaque motrice du muscle extenseur qui se contracte.'
        ],
        finalAnswer: 'Fuseau neuromusculaire -> Fibre Ia sensitive -> Moelle épinière -> Motoneurone alpha -> Muscle strié.',
        pointsAllocated: 4
      },
      {
        questionText: '2. En retranchant 1,0 ms pour le délai de transmission synaptique, calculer la vitesse moyenne de conduction du potentiel d\'action le long des fibres myélinisées en m/s.',
        hints: ['Temps de conduction axonal = 20,0 - 1,0 = 19,0 ms = 0,019 s.', 'v = d / t.'],
        solutionSteps: [
          'Temps pur de propagation nerveuse : t = 19,0 ms = 0,019 s.',
          'Vitesse v = 1,40 m / 0,019 s ≈ 73,7 m/s (environ 265 km/h).'
        ],
        finalAnswer: 'v ≈ 74 m/s (fibres nerveuses rapides myélinisées).',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-4',
    targetChapterId: 'svt-term-cerveau-mouvement',
    title: 'Plasticité Cérébrale & Rééducation après un AVC',
    context: 'Après un Accident Vasculaire Cérébral (AVC) ayant lésé l\'aire motrice primaire gauche, un patient hémiplégique droit suit une rééducation intensive. L\'IRM fonctionnelle (IRMf) révèle une réorganisation corticale 6 mois plus tard.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧠 Neurobiologie & Plasticité Corticale',
    questions: [
      {
        questionText: '1. Définir le concept de plasticité cérébrale.',
        hints: ['Capacité du cerveau à remodeler ses réseaux neuronaux et créer de nouvelles synapses en réponse à l\'apprentissage ou aux lésions.'],
        solutionSteps: [
          'La plasticité cérébrale est la capacité dynamique du cortex cérébral à modifier son organisation fonctionnelle, à créer de nouvelles synapses (synaptogenèse) et à réallouer des territoires neuronaux adjacents en réponse à l\'apprentissage, à l\'entraînement ou à une lésion.'
        ],
        finalAnswer: 'Capacité dynamique du réseau de neurones à se réorganiser et établir de nouvelles connexions synaptiques.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Comment l\'IRMf permet-elle de visualiser cette réorganisation fonctionnelle ?',
        hints: ['Mesure du signal BOLD : afflux local de sang oxygéné dans les zones actives.'],
        solutionSteps: [
          'L\'IRMf mesure les variations locales de débit et d\'oxygénation sanguine (signal BOLD) : les neurones recrutés consomment plus d\'oxygène, montrant une activation des zones motrices péritumorales ou de l\'hémisphère controlatéral lors du mouvement de la main.'
        ],
        finalAnswer: 'Mesure de l\'oxygénation sanguine locale (signal BOLD) révélant l\'activation des zones relais.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-5',
    targetChapterId: 'svt-term-glycemie-diabete',
    title: 'Régulation de la Glycémie & Diabète de Type 1 vs Type 2',
    context: 'Un patient jeune présente une glycémie à jeun de 3,2 g/L associée à une polyuro-polydipsie et un amaigrissement rapide. Le dosage d\'anticorps anti-îlots est positif.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🩸 Pancréas & Diabète de Type 1',
    questions: [
      {
        questionText: '1. De quel type de diabète s\'agit-il et quel est son mécanisme auto-immun ?',
        hints: ['Destruction des cellules bêta des îlots de Langerhans par les lymphocytes T cytotoxiques.'],
        solutionSteps: [
          'Il s\'agit d\'un Diabète de Type 1 (DT1), insulinodépendant.',
          'C\'est une maladie auto-immune où les lymphocytes T cytotoxiques du patient détruisent sélectivement les cellules bêta des îlots de Langerhans du pancréas endocrine, conduisant à une carence absolue en insuline.'
        ],
        finalAnswer: 'Diabète de type 1 : destruction auto-immune des cellules bêta productrices d\'insuline.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Pourquoi l\'insuline est-elle la seule hormone hypoglycémiante de l\'organisme ? Citer ses tissus cibles majeurs.',
        hints: ['Foie, muscles, tissu adipeux (stockage sous forme de glycogène et triglycérides).'],
        solutionSteps: [
          'L\'insuline stimule la captation cellulaire du glucose via les transporteurs GLUT4, favorise la glycogénogenèse hépatique et musculaire, et inhibe la glycogénolyse et néoglucogenèse.',
          'Ses organes cibles majeurs sont le foie, les muscles squelettiques et le tissu adipeux.'
        ],
        finalAnswer: 'Elle ordonne le stockage hépatique/musculaire (glycogène) et adipocytaire du glucose.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-6',
    targetChapterId: 'svt-term-stress-organisme',
    title: 'Axe Corticotrope (CRH-ACTH-Cortisol) & Stress Chronique',
    context: 'Lors d\'un examen stressant, l\'organisme réagit d\'abord par une phase d\'alarme (adrénaline), puis par une phase de résistance médiée par le cortisol.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🧠 Système Neuroendocrinien & Stress',
    questions: [
      {
        questionText: '1. Décrire la cascade hormonale de l\'axe hypothalamo-hypophyso-corticosurrénalien (axe corticotrope).',
        hints: ['Hypothalamus sécrète CRH -> Hypophyse sécrète ACTH -> Corticosurrénale sécrète Cortisol.'],
        solutionSteps: [
          '1. L\'hypothalamus stimulera la libération de neurohormone CRH.',
          '2. La CRH stimule l\'hypophyse antérieure qui libère de l\'ACTH dans le sang.',
          '3. L\'ACTH stimule la glande corticosurrénale qui sécrète le cortisol (glucocorticoïde).'
        ],
        finalAnswer: 'Hypothalamus (CRH) -> Hypophyse (ACTH) -> Corticosurrénale (Cortisol).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quel rétrocontrôle le cortisol exerce-t-il sur l\'hypothalamus et l\'hippocampe pour rétablir l\'équilibre (résilience) ? Que se passe-t-il en stress chronique ?',
        hints: ['Rétrocontrôle négatif.', 'En stress chronique, épuisement des récepteurs hippocampiques.'],
        solutionSteps: [
          'Le cortisol exerce un rétrocontrôle négatif sur l\'hypothalamus et l\'hypophyse pour couper sa propre sécrétion une fois le danger écarté.',
          'En stress chronique, le taux continuellement élevé de cortisol altère les récepteurs hippocampiques : le rétrocontrôle est débordé, maintenant l\'organisme en hyper-alerte avec immunosuppression et fatigue nerveuse.'
        ],
        finalAnswer: 'Rétrocontrôle négatif pour clore la réponse ; altéré en stress chronique par épuisement des récepteurs.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-7',
    targetChapterId: 'svt-term-histoire-geologique-datation',
    title: 'Datation Absolue au Rubidium-Strontium (87Rb - 87Sr) par Droite Isochrone',
    context: 'Pour dater un granite hercynien, on mesure les rapports isotopiques 87Sr/86Sr en fonction de 87Rb/86Sr sur plusieurs minéraux (biotite, feldspath, roche totale). La pente de la droite isochrone est a = 0,00435. Constante de désintégration λ = 1,42 * 10^-11 an^-1.',
    difficulty: 'Approfondissement',
    points: 9,
    themeTag: 'science',
    themeLabel: '🪨 Géochronologie & Droite Isochrone',
    questions: [
      {
        questionText: '1. Énoncer l\'équation de la droite isochrone liant la pente a à l\'âge t : a = e^(λ t) - 1 ≈ λ * t.',
        hints: ['87Sr/86Sr = (87Rb/86Sr) * (e^(λ t) - 1) + (87Sr/86Sr)0.'],
        solutionSteps: [
          'L\'équation de désintégration du 87Rb en 87Sr rapportée à l\'isotope stable 86Sr donne une droite de pente a = e^(λ t) - 1.',
          'Puisque λ t << 1, on effectue le développement limité a ≈ λ * t <=> t ≈ a / λ.'
        ],
        finalAnswer: 't = ln(a + 1) / λ ≈ a / λ.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Calculer l\'âge t du granite en millions d\'années (Ma).',
        hints: ['t = 0,00435 / (1,42 * 10^-11).'],
        solutionSteps: [
          't = 0,00435 / (1,42 * 10^-11) ≈ 3,063 * 10^8 ans = 306 Ma.'
        ],
        finalAnswer: 't ≈ 306 millions d\'années (Carbonifère, orogenèse hercynienne).',
        pointsAllocated: 5
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-8',
    targetChapterId: 'svt-term-climats-archives-rechauffement',
    title: 'Archives Glaciaires de Vostok : δ18O & Températures Passées',
    context: 'Les carottes de glace de Vostok en Antarctique contiennent des bulles d\'air piégées et de la glace dont on mesure le δ18O sur 420 000 ans.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'ecologie',
    themeLabel: '❄️ Paléoclimat & Carottes de Glace',
    questions: [
      {
        questionText: '1. Comment le δ18O de la glace polaire est-il corrélé à la température moyenne atmosphérique ?',
        hints: ['Thermomètre isotopique : plus il fait froid, plus les précipitations polaires sont appauvries en isotope lourd 18O (δ18O plus négatif).'],
        solutionSteps: [
          'Le fractionnement isotopique lors de l\'évaporation et des condensations successives fait que les nuages se délestent préférentiellement en 18O au cours de leur trajet vers les pôles.',
          'Plus la température polaire est basse, plus les neiges sont appauvries en 18O : une valeur de δ18O fortement négative indique une période glaciaire froide.'
        ],
        finalAnswer: 'Relation linéaire directe : un δ18O bas (très négatif) correspond à un climat glaciaire froid.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quelle corrélation majeure observe-t-on entre la teneur en CO2 piégé dans les bulles et la courbe des températures au cours des 4 derniers cycles glaciaires/interglaciaires ?',
        hints: ['Synchronisme remarquable entre CO2 et température avec effet d\'amplification radiative.'],
        solutionSteps: [
          'On observe un synchronisme parfait : les maxima de température coïncident avec les pics de concentration en CO2 et CH4 (environ 280 ppm en interglaciaire contre 180 ppm au plus fort des glaciations), montrant que les gaz à effet de serre amplifient considérablement les variations orbitales de Milankovitch.'
        ],
        finalAnswer: 'Synchronisme étroit : les hausses de CO2 amplifient et accompagnent les réchauffements interglaciaires.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-9',
    targetChapterId: 'svt-term-expression-genome',
    title: 'Épissage Alternatif & Complexité du Protéome Humain',
    context: 'Le génome humain ne compte qu\'environ 20 000 gènes codants, mais notre organisme synthétise plus de 100 000 protéines distinctes.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🧬 Transcription & Épissage Alternatif',
    questions: [
      {
        questionText: '1. Quel mécanisme moléculaire permet à un seul gène pré-messager de produire plusieurs protéines différentes ?',
        hints: ['Épissage a...'],
        solutionSteps: [
          'L\'épissage alternatif des pré-ARNm permet de conserver ou d\'exciser différents exons en plus de l\'élimination systématique des introns.',
          'Différentes combinaisons d\'exons créent ainsi plusieurs molécules d\'ARNm matures à partir du même transcrit primaire.'
        ],
        finalAnswer: 'L\'épissage alternatif.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quelle est la différence entre un intron et un exon ?',
        hints: ['Les introns sont excisés, les exons codent la séquence polypeptidique finale.'],
        solutionSteps: [
          'Les introns sont des séquences non codantes intercalaires éliminées lors de la maturation nucléaire.',
          'Les exons sont les séquences conservées qui se raboutent pour constituer l\'ARNm mature traduit par les ribosomes.'
        ],
        finalAnswer: 'Les introns sont éliminés lors de l\'épissage ; les exons sont conservés et traduits.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-10',
    targetChapterId: 'svt-term-tectonique',
    title: 'Métamorphisme Hydrothermal de la Croûte Océanique & Subduction',
    context: 'En s\'éloignant de la dorsale, les basaltes et gabbros chauds sont hydratés par l\'eau de mer (métamorphisme hydrothermal : faciès schiste vert à chlorite/actinote). Lors de la subduction, ils passent dans le faciès schiste bleu puis éclogite.',
    difficulty: 'Type Bac',
    points: 8,
    themeTag: 'science',
    themeLabel: '🌊 Géodynamique & Métamorphisme de Subduction',
    questions: [
      {
        questionText: '1. Sous quelles conditions de Température et de Pression s\'effectue la transition vers le faciès Schiste Bleu puis Éclogite ?',
        hints: ['Haute Pression et Basse Température (HP-BT).'],
        solutionSteps: [
          'L\'enfoncement rapide de la lithosphère plongeante froide et dense dans le manteau l\'expose à une pression colossale alors qu\'elle reste relativement froide : c\'est le métamorphisme de Haute Pression - Basse Température (HP-BT).'
        ],
        finalAnswer: 'Conditions de Haute Pression et Basse Température (HP - BT).',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quelle conséquence cruciale la déshydratation des schistes bleus (libération d\'eau) a-t-elle sur le manteau chevauchant situé au-dessus ?',
        hints: ['Hydratation de la péridotite et déclenchement de la fusion partielle.'],
        solutionSteps: [
          'L\'eau libérée par les transformations métamorphiques monte et hydrate la péridotite du manteau lithosphérique supérieur de la plaque chevauchante.',
          'Cette hydratation abaisse le solidus de la péridotite, provoquant sa fusion partielle à l\'origine du magmatisme explosif d\'arc de subduction.'
        ],
        finalAnswer: 'Abaissement du solidus de la péridotite mantellique et déclenchement de sa fusion partielle.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-11',
    targetChapterId: 'svt-term-plantes-angiospermes',
    title: 'Organisation des Angiospermes & Coévolution Plante-Pollinisateur',
    context: 'L\'orchidée Comète de Madagascar (Angraecum sesquipedale) possède un éperon nectarifère de 30 cm de profondeur. Darwin prédit en 1862 l\'existence d\'un papillon géant inconnu.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'ecologie',
    themeLabel: '🌺 Angiospermes & Coévolution Darwinienne',
    questions: [
      {
        questionText: '1. Comment appelle-t-on l\'évolution conjointe et réciproque de deux espèces interagissant étroitement au fil des générations ?',
        hints: ['Coévolution.'],
        solutionSteps: [
          'Ce phénomène est appelé la coévolution : les adaptations de l\'orchidée (sélectionnant les papillons à longue trompe capables de transporter son pollen) et celles de l\'insecte (sélectionnant les individus capables d\'atteindre le nectar sucré au fond) se renforcent mutuellement.'
        ],
        finalAnswer: 'La coévolution.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel insecte réel découvert 40 ans plus tard valida la prédiction géniale de Darwin ?',
        hints: ['Le sphinx de Morgan (Xanthopan morganii praedicta).'],
        solutionSteps: [
          'Le papillon de nuit Xanthopan morganii praedicta, un sphinx nocturne doté d\'une trompe enroulée de 30 cm de long parfaitement ajustée à l\'éperon de la fleur.'
        ],
        finalAnswer: 'Le sphinx Xanthopan morganii praedicta doté d\'une trompe de 30 cm.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-12',
    targetChapterId: 'svt-term-expression-genome',
    title: 'Code Génétique, Dégénérescence & Traduction sur les Ribosomes',
    context: 'Le code génétique utilise 64 codons pour coder 20 acides aminés et les signaux d\'arrêt.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🧬 Code Génétique Universel',
    questions: [
      {
        questionText: '1. Que signifie le fait que le code génétique soit "dégénéré" (ou redondant) ?',
        hints: ['Plusieurs codons différents peuvent spécifier le même acide aminé.'],
        solutionSteps: [
          'Le code est dit dégénéré car il existe 61 codons codants pour seulement 20 acides aminés : plusieurs triplets distincts codent pour le même acide aminé (par exemple 6 codons pour la leucine).'
        ],
        finalAnswer: 'Plusieurs codons synonymes peuvent coder pour un même acide aminé.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Donner le codon d\'initiation universel et l\'acide aminé correspondant.',
        hints: ['AUG code pour la méthionine.'],
        solutionSteps: [
          'Le codon d\'initiation de la traduction est AUG, qui code pour la méthionine (Met).'
        ],
        finalAnswer: 'Codon AUG (Méthionine).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-13',
    targetChapterId: 'svt-term-meiose-diversite',
    title: 'Anomalies de la Méiose & Duplications Géniques : Famille des Globines',
    context: 'Chez les vertébrés, les gènes de l\'hémoglobine (alpha, bêta, gamma, fœtale) sont regroupés en familles multigéniques issues d\'un gène ancestral unique.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🧬 Duplication Génique & Familles Multigéniques',
    questions: [
      {
        questionText: '1. Quel événement méiotique anormal est responsable de la duplication d\'un gène sur le même chromosome ?',
        hints: ['Crossing-over inégal en prophase I.'],
        solutionSteps: [
          'Un crossing-over inégal dû à un mauvais alignement des chromatides homologues en prophase I produit une chromatide recevant deux copies du gène (duplication) et une chromatide avec délétion.'
        ],
        finalAnswer: 'Un crossing-over inégal lors de la prophase I.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Comment les copies dupliquées deviennent-elles ensuite des gènes aux fonctions différenciées (famille multigénique) ?',
        hints: ['Accumulation indépendante de mutations au cours de l\'évolution.'],
        solutionSteps: [
          'Chaque copie accumule des mutations ponctuelles indépendantes sans compromettre la survie de l\'organisme (puisque l\'autre copie assure la fonction vitale initiale), permettant l\'émergence de nouvelles propriétés biologiques.'
        ],
        finalAnswer: 'Accumulation indépendante de mutations sur les copies dupliquées.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-14',
    targetChapterId: 'svt-term-glycemie-diabete',
    title: 'Insulino-Résistance & Diabète de Type 2 chez l’Adulte',
    context: 'Un patient de 52 ans en surpoids présente une glycémie à jeun de 1,45 g/L et une insulinémie élevée. Les cellules hépatiques et musculaires répondent faiblement à l\'insuline.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'science',
    themeLabel: '🏥 Diabète de Type 2 & Insulino-Résistance',
    questions: [
      {
        questionText: '1. Quel est le défaut cellulaire initial responsable du Diabète de Type 2 ?',
        hints: ['Perte de sensibilité des récepteurs à l\'insuline des tissus cibles (insulino-résistance).'],
        solutionSteps: [
          'L\'insulino-résistance : les récepteurs à l\'insuline des cellules musculaires, hépatiques et adipocytaires deviennent moins réceptifs au signal hormonal, empêchant l\'internalisation correcte du glucose.'
        ],
        finalAnswer: 'L\'insulino-résistance des tissus cibles (foie et muscles).',
        pointsAllocated: 3
      },
      {
        questionText: '2. Pourquoi l\'insulinémie est-elle anormalement élevée au début de la maladie avant de s\'effondrer des années plus tard ?',
        hints: ['Hyperinsulinisme compensatoire du pancréas puis épuisement des cellules bêta.'],
        solutionSteps: [
          'Le pancréas surproduit d\'abord massivement de l\'insuline (hyperinsulinisme) pour compenser la résistance tissulaire et maintenir une glycémie normale.',
          'Après des années de sur-sollicitation, les cellules bêta s\'épuisent (insulinonécessité tardive).'
        ],
        finalAnswer: 'Hyperinsulinisme compensatoire initial puis épuisement fonctionnel des cellules bêta.',
        pointsAllocated: 4
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-15',
    targetChapterId: 'svt-term-stress-organisme',
    title: 'Système Nerveux Sympathique & Libération d’Adrénaline en Phase d’Alarme',
    context: 'Face à un danger immédiat (saut en parachute), la fréquence cardiaque bondit à 170 bpm, la pression artérielle grimpe et les pupilles se dilatent en moins d\'une seconde.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'sport',
    themeLabel: '⚡ Adrénaline & Phase d’Alarme',
    questions: [
      {
        questionText: '1. Quelle glande endocrine libère l\'adrénaline directement dans le sang lors de la phase d\'alarme du stress ?',
        hints: ['Partie centrale de la glande surrénale.'],
        solutionSteps: [
          'La médullosurrénale (partie centrale des glandes surrénales) sous le contrôle direct des voies nerveuses sympathiques.'
        ],
        finalAnswer: 'La médullosurrénale.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Quel est le bénéfice adaptatif immédiat de cette réponse physiologique pour l\'organisme ?',
        hints: ['Préparation réflexe à l\'attaque ou à la fuite (Fight or Flight).'],
        solutionSteps: [
          'La réaction "combat ou fuite" (Fight or Flight) décuple instantanément l\'apport de sang oxygéné et de glucose aux muscles squelettiques et au cerveau pour assurer une survie immédiate.'
        ],
        finalAnswer: 'Préparation maximale et instantanée des muscles et du cerveau au combat ou à la fuite.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-16',
    targetChapterId: 'svt-term-histoire-geologique-datation',
    title: 'Principes de Datation Relative en Géologie Structurale',
    context: 'Sur une coupe géologique de falaise côtière, une faille normale F recoupe une strate sédimentaire calcaire C, elle-même surmontée en discordance par des grès récents G.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🪨 Datation Relative & Principes Géologiques',
    questions: [
      {
        questionText: '1. Énoncer le principe de recoupement en géologie.',
        hints: ['Toute structure géologique qui en recoupe une autre lui est postérieure.'],
        solutionSteps: [
          'Le principe de recoupement stipule qu\'une structure tectonique (faille, pli) ou une intrusion magmatique qui recoupe ou déforme une formation géologique est plus récente (postérieure) que la structure affectée.'
        ],
        finalAnswer: 'Toute structure qui en recoupe une autre est plus récente que celle-ci.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Ordonner chronologiquement les trois événements (dépôt du calcaire C, jeu de la faille F, dépôt des grès G).',
        hints: ['La faille recoupe le calcaire mais est scellée par les grès.'],
        solutionSteps: [
          '1. Dépôt de la strate calcaire C (la plus ancienne).',
          '2. Jeu de la faille normale F qui affecte et décale le calcaire C.',
          '3. Érosion puis dépôt en discordance des grès récents G qui recouvrent la faille sans être affectés (le plus récent).'
        ],
        finalAnswer: '1. Dépôt de C -> 2. Faille F -> 3. Dépôt des grès G.',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-17',
    targetChapterId: 'svt-term-climats-archives-rechauffement',
    title: 'Boucles de Rétroaction Positive du Climat : Albédo & Dégel du Pergélisol',
    context: 'La fonte de la calotte glaciaire arctique abaisse l\'albédo moyen de la surface de 0,8 à 0,1, tandis que le permafrost de Sibérie commence à dégeler.',
    difficulty: 'Moyen',
    points: 7,
    themeTag: 'ecologie',
    themeLabel: '🌍 Climat & Rétroactions Positives',
    questions: [
      {
        questionText: '1. Expliquer la boucle de rétroaction positive liée à l\'albédo lors de la fonte de la banquise.',
        hints: ['Moins de glace blanche -> plus d\'océan sombre absorbant le rayonnement solaire -> hausse de température -> plus de fonte.'],
        solutionSteps: [
          'La glace blanche réfléchit l\'essentiel du rayonnement solaire (albédo ~ 0,8).',
          'En fondant, elle laisse place à l\'eau de mer sombre qui absorbe plus de 90% de l\'énergie solaire (albédo ~ 0,1).',
          'L\'océan se réchauffe, ce qui amplifie à son tour la fonte des glaces : c\'est une rétroaction amplificatrice (positive).'
        ],
        finalAnswer: 'Baisse d\'albédo -> plus d\'absorption solaire -> réchauffement accru -> fonte accélérée.',
        pointsAllocated: 4
      },
      {
        questionText: '2. Quel puissant gaz à effet de serre piégé dans la matière organique du permafrost risque d\'être libéré massivement lors de son dégel ?',
        hints: ['Méthane (CH4).'],
        solutionSteps: [
          'Le méthane (CH4), produit par la décomposition bactérienne anaérobie de la matière organique dégelée, dont le pouvoir réchauffant global est près de 30 fois supérieur au CO2 sur 100 ans.'
        ],
        finalAnswer: 'Le méthane (CH4).',
        pointsAllocated: 3
      }
    ]
  },
  {
    id: 'ex-tsvt-bank-18',
    targetChapterId: 'svt-term-immunite-adaptative',
    title: 'Anticorps Monoclonaux Thérapeutiques en Cancérologie',
    context: 'En oncologie, le Trastuzumab (Herceptin) est un anticorps monoclonal ciblant spécifiquement le récepteur HER2 surexprimé à la surface des cellules de certains cancers du sein.',
    difficulty: 'Facile',
    points: 6,
    themeTag: 'science',
    themeLabel: '🔬 Biomédecine & Anticorps Monoclonaux',
    questions: [
      {
        questionText: '1. Qu\'est-ce qu\'un anticorps monoclonal par opposition à un sérum polyclonal ?',
        hints: ['Produit par un seul clone cellulaire et dirigé contre un unique épitope antigénique.'],
        solutionSteps: [
          'Un anticorps monoclonal est produit in vitro par un clone unique de plasmocytes (hybridomes) : toutes les molécules d\'anticorps sont rigoureusement identiques et ciblent exclusivement le même épitope antigénique spécifique.'
        ],
        finalAnswer: 'Anticorps issus d\'un seul clone de plasmocytes ciblant un épitope unique.',
        pointsAllocated: 3
      },
      {
        questionText: '2. Citer deux modes d\'action anticancéreux du Trastuzumab.',
        hints: ['Blocage du récepteur de prolifération et signalement aux cellules NK immunitaires (ADCC).'],
        solutionSteps: [
          '1. Blocage stérique de la fixation du ligand stimulant sur HER2, stoppant les signaux intracellulaires de division.',
          '2. Recrutement des cellules Natural Killer (NK) par leur partie Fc, déclenchant la cytotoxicité à médiation cellulaire dépendante des anticorps (ADCC).'
        ],
        finalAnswer: 'Blocage du signal de prolifération cellulaire et activation de la destruction par les cellules NK (ADCC).',
        pointsAllocated: 3
      }
    ]
  }
];
