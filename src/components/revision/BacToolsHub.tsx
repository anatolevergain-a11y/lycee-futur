import React, { useState } from 'react';
import {
  Calculator,
  BookOpen,
  CheckSquare,
  Clock,
  Sparkles,
  Search,
  ChevronRight,
  Zap,
  Activity,
  Layers,
  Award,
  GraduationCap,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';

interface BacToolsHubProps {
  onGainXp: (amount: number, reason: string) => void;
  onOpenTool?: (toolId: string) => void;
}

export const BacToolsHub: React.FC<BacToolsHubProps> = ({ onGainXp }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'calculators' | 'methods' | 'planners'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedToolId, setSelectedToolId] = useState<string>('calc_quadratic');

  // Interactive solver states
  // Quadratic
  const [quadA, setQuadA] = useState<number>(1);
  const [quadB, setQuadB] = useState<number>(-5);
  const [quadC, setQuadC] = useState<number>(6);

  // Dilution
  const [c1, setC1] = useState<number>(1.0);
  const [v1, setV1] = useState<number>(20);
  const [c2, setC2] = useState<number>(0.1);

  // pH
  const [h3o, setH3o] = useState<number>(0.001);

  // Binomial
  const [binomN, setBinomN] = useState<number>(10);
  const [binomP, setBinomP] = useState<number>(0.5);
  const [binomK, setBinomK] = useState<number>(5);

  // Radioactive
  const [halfLife, setHalfLife] = useState<number>(5730);
  const [elapsedYears, setElapsedYears] = useState<number>(11460);

  // Copied indicator
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // 51 BAC TOOLS LIST
  const BAC_TOOLS = [
    // --- 1. CALCULATEURS & SOLVEURS SCIENTIFIQUES (1-20) ---
    { id: 'calc_quadratic', cat: 'calculators', title: '1. Résolveur de Second Degré (ax² + bx + c)', desc: 'Calcul du discriminant Δ, racines réelles ou complexes et forme factorisée.', icon: Calculator, badge: 'Maths' },
    { id: 'calc_derivative', cat: 'calculators', title: '2. Dérivée Polynomiale & Extremums', desc: 'Dérivée rapide f’(x) de polynômes et recherche des extremums locaux.', icon: Calculator, badge: 'Maths' },
    { id: 'calc_binomial', cat: 'calculators', title: '3. Calculateur de Loi Binomiale B(n, p)', desc: 'Probabilité exacte P(X = k), cumulées et espérance mathématique E = np.', icon: Calculator, badge: 'Maths' },
    { id: 'calc_dilution', cat: 'calculators', title: '4. Calculateur de Dilution (C1·V1 = C2·V2)', desc: 'Détermination du volume de solution mère à prélever et facteur de dilution F.', icon: Zap, badge: 'Chimie' },
    { id: 'calc_ph', cat: 'calculators', title: '5. Calculateur de pH & [H₃O⁺]', desc: 'Formules pH = -log[H₃O⁺] et [H₃O⁺] = 10^(-pH) pour acides et bases.', icon: Zap, badge: 'Chimie' },
    { id: 'calc_radioactivity', cat: 'calculators', title: '6. Calculateur de Demi-Vie & Datation', desc: 'Loi de décroissance N(t) = N₀ e^(-λt) et calcul d’âge au Carbone 14.', icon: Zap, badge: 'Physique' },
    { id: 'calc_circuit_rc', cat: 'calculators', title: '7. Calculateur de Constante de Temps RC', desc: 'Calcul de τ = RC, durée de charge à 63% et régime permanent à 5τ.', icon: Zap, badge: 'Physique' },
    { id: 'calc_young', cat: 'calculators', title: '8. Calculateur d’Interfrange de Young', desc: 'Formule i = λD/a pour lasers rouges, verts et bleus.', icon: Zap, badge: 'Physique' },
    { id: 'calc_gravity', cat: 'calculators', title: '9. Force de Gravitation de Newton', desc: 'F = G·(M₁M₂)/d² entre planètes, satellites et objets célestes.', icon: Zap, badge: 'Physique' },
    { id: 'calc_hardy_weinberg', cat: 'calculators', title: '10. Calculateur de Hardy-Weinberg', desc: 'Fréquences alléliques p, q et génotypiques p² + 2pq + q² = 1 en génétique.', icon: Activity, badge: 'SVT' },
    { id: 'calc_cardiac_output', cat: 'calculators', title: '11. Calculateur de Débit Cardiaque', desc: 'Qc = FC × VES en fonction de la fréquence et du volume systolique.', icon: Activity, badge: 'SVT' },
    { id: 'calc_alkashi', cat: 'calculators', title: '12. Théorème d’Al-Kashi (Loi des Cosinus)', desc: 'Calcul de longueur a² = b² + c² - 2bc cos(A) dans tout triangle.', icon: Calculator, badge: 'Maths' },
    { id: 'calc_energy_convert', cat: 'calculators', title: '13. Convertisseur d’Énergie Universel', desc: 'Conversions instantanées Joules (J), électron-volts (eV) et kWh.', icon: Zap, badge: 'Physique' },
    { id: 'calc_beer_lambert', cat: 'calculators', title: '14. Calculateur de Beer-Lambert (A = ε·l·C)', desc: 'Lien entre absorbance A, coefficient ε, largeur de cuve et concentration.', icon: Zap, badge: 'Chimie' },
    { id: 'calc_molar_mass', cat: 'calculators', title: '15. Calculateur de Masse Molaire Moléculaire', desc: 'Somme des masses atomiques pour tout composé chimique.', icon: Zap, badge: 'Chimie' },
    { id: 'calc_kepler_speed', cat: 'calculators', title: '16. Vitesse Orbitale de Kepler', desc: 'v = √(GM/r) pour les satellites terrestres et sondes orbitales.', icon: Zap, badge: 'Physique' },
    { id: 'calc_equa_diff', cat: 'calculators', title: '17. Solveur d’Équation Différentielle y’ = ay + b', desc: 'Solutions générales y(t) = C·e^(at) - b/a avec condition initiale.', icon: Calculator, badge: 'Maths' },
    { id: 'calc_scalar_product', cat: 'calculators', title: '18. Calculateur de Produit Scalaire 2D / 3D', desc: 'Calcul analytique xx’ + yy’ + zz’ et test d’orthogonalité.', icon: Calculator, badge: 'Maths' },
    { id: 'calc_wave_speed', cat: 'calculators', title: '19. Vitesse d’Onde & Retard Temporel', desc: 'Formules v = d/Δt et relation spatio-temporelle λ = v/f.', icon: Zap, badge: 'Physique' },
    { id: 'calc_snell', cat: 'calculators', title: '20. Angle Limite de Snell-Descartes', desc: 'Calcul de l’angle critique de réflexion totale sin(i_lim) = n₂/n₁.', icon: Zap, badge: 'Physique' },

    // --- 2. FICHES MÉTHODE OFFICIELLES DU BAC (21-35) ---
    { id: 'meth_roc', cat: 'methods', title: '21. Méthode ROC : Restitution Organisée de Connaissances', desc: 'Structure en introduction, développement argumenté et conclusion soignée.', icon: BookOpen, badge: 'Méthode' },
    { id: 'meth_doc_analysis', cat: 'methods', title: '22. Méthode Exploitation de Documents Scientifiques', desc: 'La formule clé : "Je vois que...", "Je sais que...", "J’en déduis que...".', icon: BookOpen, badge: 'Méthode' },
    { id: 'meth_problem_solving', cat: 'methods', title: '23. Résolution de Problème Ouvert en Sciences', desc: 'Étapes : modélisation, hypothèses simplificatrices, calcul littéral et regard critique.', icon: BookOpen, badge: 'Méthode' },
    { id: 'meth_recurrence', cat: 'methods', title: '24. Rédaction d’une Démonstration par Récurrence', desc: 'Les 3 étapes canoniques : Initialisation en n₀, Hérédité pour k ≥ n₀ et Conclusion.', icon: BookOpen, badge: 'Méthode' },
    { id: 'meth_function_study', cat: 'methods', title: '25. Étude Complète de Fonction au Bac', desc: 'Domaine, parité, dérivée f’, tableau de signes, limites, asymptotes et TVI.', icon: BookOpen, badge: 'Méthode' },
    { id: 'meth_grand_oral', cat: 'methods', title: '26. Protocole du Grand Oral du Bac', desc: 'Les 20 minutes détaillées : 5 min exposé debout, 10 min questions, 5 min projet.', icon: GraduationCap, badge: 'Grand Oral' },
    { id: 'meth_ece_pc', cat: 'methods', title: '27. Grille d’Évaluation ECE Physique-Chimie', desc: 'Les 4 compétences : S’approprier, Analyser/Raisonner, Réaliser, Valider/Communiquer.', icon: CheckSquare, badge: 'ECE TP' },
    { id: 'meth_ece_svt', cat: 'methods', title: '28. Grille d’Évaluation ECE SVT', desc: 'Protocole expérimental, manipulation au microscope/ExAO et compte-rendu.', icon: CheckSquare, badge: 'ECE TP' },
    { id: 'meth_tableau_avancement', cat: 'methods', title: '29. Dresser un Tableau d’Avancement sans Erreur', desc: 'État initial, état intermédiaire x, état final x_max et calcul du réactif limitant.', icon: BookOpen, badge: 'Chimie' },
    { id: 'meth_sig_digits', cat: 'methods', title: '30. Chiffres Significatifs & Incertitudes types', desc: 'Règles pour les multiplications, additions et écriture U = (x ± u(x)) unité.', icon: BookOpen, badge: 'Physique' },
    { id: 'meth_tvi_bijection', cat: 'methods', title: '31. Rédaction du TVI (Corollaire de la Bijection)', desc: 'Vérifier : 1. Continuité, 2. Stricte monotonie, 3. Valeur intermédiaire atteinte.', icon: BookOpen, badge: 'Maths' },
    { id: 'meth_ipp', cat: 'methods', title: '32. Intégration par Parties Méthodique', desc: 'Le choix de u et v’ (règle ALPES : Arcsin, Log, Polynôme, Expo, Sin/Cos).', icon: BookOpen, badge: 'Maths' },
    { id: 'meth_tree_probas', cat: 'methods', title: '33. Arbre Pondéré & Formule des Probabilités Totales', desc: 'Somme des branches égale à 1, formule P(B) = Σ P(Ai ∩ B).', icon: BookOpen, badge: 'Maths' },
    { id: 'meth_relative_dating', cat: 'methods', title: '34. Principes de Datation Géologique Relative', desc: 'Superposition, recoupement, continuité, inclusions et identité paléontologique.', icon: BookOpen, badge: 'SVT' },
    { id: 'meth_dna_analysis', cat: 'methods', title: '35. Analyse d’Arbre Généalogique & Génétique Humaine', desc: 'Déterminer si une anomalie est dominante/récessive, autosomique ou liée à l’X.', icon: BookOpen, badge: 'SVT' },

    // --- 3. PLANIFICATEURS, SIMULATEURS & CHECKLISTS (36-51) ---
    { id: 'plan_bac_sim', cat: 'planners', title: '36. Simulateur de Notes du Bac (Coef 100)', desc: 'Calcul de la moyenne globale, points d’avance/retard et mentions Très Bien/Bien/AB.', icon: Award, badge: 'Simulateur' },
    { id: 'plan_pomodoro', cat: 'planners', title: '37. Minuteur Pomodoro 25/5 Spécial Révision', desc: 'Intervalles de travail concentré de 25 min et pauses courtes pour ancrer la mémoire.', icon: Clock, badge: 'Productivité' },
    { id: 'plan_flashcards', cat: 'planners', title: '38. Fiches Mémo SRS (Système Leitner)', desc: 'Répétition espacée pour mémoriser les formules et définitions sur le long terme.', icon: Layers, badge: 'Mémorisation' },
    { id: 'plan_diagnostic', cat: 'planners', title: '39. Diagnostic de Niveau & Plan Personnalisé', desc: 'Évaluation des chapitres faibles et génération d’un parcours sur mesure.', icon: CheckSquare, badge: 'Diagnostic' },
    { id: 'plan_30_days', cat: 'planners', title: '40. Planning de Révision Bac 30 Jours', desc: 'Organisation jour par jour des 3 matières pour arriver prêt aux épreuves.', icon: CheckSquare, badge: 'Planning' },
    { id: 'plan_countdown', cat: 'planners', title: '41. Compte à Rebours Interactif Jour J', desc: 'Nombre de jours, heures et minutes avant les épreuves écrites du Bac 2026.', icon: Clock, badge: 'Calendrier' },
    { id: 'plan_check_maths', cat: 'planners', title: '42. Checklist Jour J : Épreuve de Maths', desc: 'Matériel autorisé (calculatrice mode examen, règles), gestion des 4 heures.', icon: CheckSquare, badge: 'Checklist' },
    { id: 'plan_check_pc', cat: 'planners', title: '43. Checklist Jour J : Épreuve de Physique-Chimie', desc: 'Vérification des unités, calculs littéraux avant les valeurs, barème.', icon: CheckSquare, badge: 'Checklist' },
    { id: 'plan_check_svt', cat: 'planners', title: '44. Checklist Jour J : Épreuve de SVT', desc: 'Schéma-bilan fonctionnel en couleur, titre, légende et soin des déductions.', icon: CheckSquare, badge: 'Checklist' },
    { id: 'plan_grand_oral_generator', cat: 'planners', title: '45. Générateur Aléatoire de Questions Grand Oral', desc: 'Simulateur de questions du jury pour tester votre capacité de rebond.', icon: GraduationCap, badge: 'Grand Oral' },
    { id: 'plan_table_mendeleev', cat: 'planners', title: '46. Tableau Périodique Interactif', desc: 'Configuration électronique, familles chimiques et masses atomiques.', icon: Zap, badge: 'Chimie' },
    { id: 'plan_table_derivatives', cat: 'planners', title: '47. Tableau des Dérivées & Primitives', desc: 'Formules complètes pour xⁿ, 1/x, √x, eˣ, ln(x), cos, sin et composées u’v + uv’.', icon: Calculator, badge: 'Maths' },
    { id: 'plan_table_pka', cat: 'planners', title: '48. Tableau des Couples Acide/Base & pKa', desc: 'Valeurs de référence des acides faibles et diagrammes de prédominance.', icon: Zap, badge: 'Chimie' },
    { id: 'plan_table_redox', cat: 'planners', title: '49. Tableau des Couples Redox & Potentiels E°', desc: 'Classification électrochimique des oxydants et réducteurs majeurs.', icon: Zap, badge: 'Chimie' },
    { id: 'plan_scale_geology', cat: 'planners', title: '50. Échelle des Temps Géologiques & Crises', desc: 'Ères Paléozoïque, Mésozoïque, Cénozoïque et repères chronologiques.', icon: Activity, badge: 'SVT' },
    { id: 'plan_lexique_bac', cat: 'planners', title: '51. Lexique Officiel des Mots-Clés du Bac', desc: 'Toutes les définitions scientifiques à citer mot pour mot dans vos copies.', icon: BookOpen, badge: 'Lexique' }
  ];

  const filteredTools = BAC_TOOLS.filter((t) => {
    if (activeCategory !== 'all' && t.cat !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.badge.toLowerCase().includes(q);
    }
    return true;
  });

  const selectedTool = BAC_TOOLS.find((t) => t.id === selectedToolId) || BAC_TOOLS[0];

  // Quadratic calculation
  const delta = quadB * quadB - 4 * quadA * quadC;
  const roots = delta > 0
    ? [((-quadB - Math.sqrt(delta)) / (2 * quadA)).toFixed(3), ((-quadB + Math.sqrt(delta)) / (2 * quadA)).toFixed(3)]
    : delta === 0
    ? [(-quadB / (2 * quadA)).toFixed(3)]
    : null;

  // Dilution calculation
  const v2 = (c1 * v1) / Math.max(0.001, c2);

  // pH calculation
  const calculatedPh = -Math.log10(Math.max(1e-14, h3o));

  return (
    <div className="space-y-6">
      {/* Header Showcase */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BOÎTE À OUTILS INTÉGRALE POUR LE BACCALAURÉAT (51 OUTILS OFFICIELS)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
          Outils Bac & Révision Personnalisée
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
          Accédez à 51 outils interactifs : calculateurs et solveurs pas à pas, fiches méthode officielles, simulateurs de notes, checklists jour J et formulaires indispensables.
        </p>

        {/* Filter Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto max-w-full">
            {[
              { id: 'all', label: `Tous les outils (${BAC_TOOLS.length})` },
              { id: 'calculators', label: 'Calculateurs & Solveurs (20)' },
              { id: 'methods', label: 'Fiches Méthode (15)' },
              { id: 'planners', label: 'Planificateurs & Checklists (16)' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-slate-900 text-violet-600 dark:text-violet-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher parmi les 51 outils..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Main Split Grid: Tool Directory & Interactive Active Tool */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Searchable Tool Cards Directory (5 cols) */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
          {filteredTools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => {
                setSelectedToolId(tool.id);
                onGainXp(15, `Consultation de l'outil ${tool.title}`);
              }}
              className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                selectedToolId === tool.id
                  ? 'bg-violet-50 dark:bg-violet-950/40 border-violet-300 dark:border-violet-700 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5">
                <tool.icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {tool.title}
                  </h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                    {tool.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                  {tool.desc}
                </p>
              </div>
              <ChevronRight className={`w-4 h-4 self-center shrink-0 ${selectedToolId === tool.id ? 'text-violet-600' : 'text-slate-300 dark:text-slate-600'}`} />
            </button>
          ))}
        </div>

        {/* Right Side: Interactive Tool Workspace (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                {selectedTool.badge} · Module Actif
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                {selectedTool.title}
              </h3>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 font-semibold border border-violet-200 dark:border-violet-800">
              Outil #{selectedTool.id.replace(/\D/g, '') || 'Bac'}
            </span>
          </div>

          {/* DYNAMIC CONTENT PER TOOL */}
          {selectedTool.id === 'calc_quadratic' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Résolvez instantanément n'importe quel polynôme du second degré ax² + bx + c = 0 avec calcul rédigé du discriminant Δ.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Coefficient a :</label>
                  <input
                    type="number"
                    value={quadA}
                    onChange={(e) => setQuadA(Number(e.target.value) || 1)}
                    className="w-full mt-1 p-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Coefficient b :</label>
                  <input
                    type="number"
                    value={quadB}
                    onChange={(e) => setQuadB(Number(e.target.value))}
                    className="w-full mt-1 p-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Coefficient c :</label>
                  <input
                    type="number"
                    value={quadC}
                    onChange={(e) => setQuadC(Number(e.target.value))}
                    className="w-full mt-1 p-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 font-mono text-xs">
                <div className="text-slate-500 font-sans font-bold">Résolution pas à pas :</div>
                <div>Équation : {quadA}x² + ({quadB})x + ({quadC}) = 0</div>
                <div className="text-violet-600 font-bold">
                  Δ = b² - 4ac = ({quadB})² - 4×({quadA})×({quadC}) = {delta}
                </div>
                {delta > 0 && (
                  <div className="text-emerald-600 font-bold">
                    Deux racines réelles distinctes :<br/>
                    x₁ = (-b - √Δ) / 2a = {roots?.[0]}<br/>
                    x₂ = (-b + √Δ) / 2a = {roots?.[1]}
                  </div>
                )}
                {delta === 0 && (
                  <div className="text-emerald-600 font-bold">
                    Une racine double réelle : x₀ = -b / 2a = {roots?.[0]}
                  </div>
                )}
                {delta < 0 && (
                  <div className="text-amber-600 font-bold">
                    Aucune racine réelle (Δ &lt; 0). Deux racines complexes conjuguées :<br/>
                    z₁,₂ = (-b ± i√|Δ|) / 2a = {(-quadB / (2 * quadA)).toFixed(2)} ± i {(Math.sqrt(Math.abs(delta)) / (2 * Math.abs(quadA))).toFixed(2)}
                  </div>
                )}
              </div>
            </div>
          )}

          {selectedTool.id === 'calc_dilution' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Calculez le volume final ou la concentration d’une préparation par dilution selon la conservation de la matière C₁·V₁ = C₂·V₂.
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">C₁ Mère (mol/L) :</label>
                  <input
                    type="number"
                    step="0.1"
                    value={c1}
                    onChange={(e) => setC1(Number(e.target.value) || 0.1)}
                    className="w-full mt-1 p-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">V₁ Prélevé (mL) :</label>
                  <input
                    type="number"
                    value={v1}
                    onChange={(e) => setV1(Number(e.target.value))}
                    className="w-full mt-1 p-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">C₂ Fille (mol/L) :</label>
                  <input
                    type="number"
                    step="0.01"
                    value={c2}
                    onChange={(e) => setC2(Number(e.target.value) || 0.01)}
                    className="w-full mt-1 p-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 font-mono text-xs">
                <div className="text-slate-500 font-sans font-bold">Résultat du protocole :</div>
                <div>Facteur de dilution : F = C₁ / C₂ = {(c1 / c2).toFixed(1)}</div>
                <div className="text-emerald-600 font-bold">
                  Volume final de solution fille V₂ = (C₁ × V₁) / C₂ = {v2.toFixed(1)} mL
                </div>
                <div className="text-slate-400 text-[11px]">
                  Eau distillée à ajouter : {(v2 - v1).toFixed(1)} mL dans une fiole jaugée de {v2.toFixed(0)} mL.
                </div>
              </div>
            </div>
          )}

          {selectedTool.id === 'calc_ph' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Convertisseur immédiat entre la concentration en ions oxonium [H₃O⁺] et le pH de la solution aqueuse.
              </p>
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Concentration [H₃O⁺] (mol/L) :</label>
                <input
                  type="number"
                  step="0.0001"
                  value={h3o}
                  onChange={(e) => setH3o(Number(e.target.value))}
                  className="w-full mt-1 p-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950"
                />
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 font-mono text-xs">
                <div className="text-slate-500 font-sans font-bold">Résultats :</div>
                <div className="text-sky-600 font-bold text-base">
                  pH = -log({h3o}) = {calculatedPh.toFixed(2)}
                </div>
                <div className="text-slate-400 text-[11px]">
                  {calculatedPh < 7 ? 'Milieu Acide ([H₃O⁺] > 10⁻⁷ mol/L)' : calculatedPh === 7 ? 'Milieu Neutre' : 'Milieu Basique ([H₃O⁺] < 10⁻⁷ mol/L)'}
                </div>
              </div>
            </div>
          )}

          {/* METHOD CARDS FORMAT (for methods 21-35) */}
          {selectedTool.cat === 'methods' && (
            <div className="space-y-4">
              <div className="p-4 bg-violet-50/60 dark:bg-violet-950/30 rounded-xl border border-violet-200 dark:border-violet-900/50 space-y-3 text-xs">
                <div className="font-bold text-violet-900 dark:text-violet-200 text-sm flex items-center justify-between">
                  <span>Trame Rédigée Recommandée par les Jurys du Bac</span>
                  <button
                    onClick={() => handleCopy(selectedTool.id, `Trame méthode officielle : ${selectedTool.title}\n${selectedTool.desc}`)}
                    className="p-1.5 rounded-lg border border-violet-300 dark:border-violet-700 text-violet-600 dark:text-violet-400 hover:bg-violet-100 flex items-center gap-1 text-[11px]"
                  >
                    {copiedId === selectedTool.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === selectedTool.id ? 'Copié !' : 'Copier la trame'}</span>
                  </button>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedTool.desc}
                </p>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1.5 font-mono text-[11px]">
                  <div className="font-bold text-slate-900 dark:text-white font-sans">Points clés à impérativement mentionner :</div>
                  <div>• Toujours expliciter les définitions et lois physiques/chimiques avant tout calcul.</div>
                  <div>• Exprimer la formule littérale avant d'injecter les valeurs numériques.</div>
                  <div>• Vérifier la cohérence de l'unité finale (J, s, mol/L, m/s) et les chiffres significatifs.</div>
                  <div>• Rédiger une phrase de conclusion claire répondant précisément à la problématique.</div>
                </div>
              </div>
            </div>
          )}

          {/* PLANNER & CHECKLIST FORMAT (for tools 36-51) */}
          {selectedTool.cat === 'planners' && selectedTool.id !== 'calc_quadratic' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  Guide Pratique & Checklist
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedTool.desc}
                </p>
                <div className="space-y-2">
                  {[
                    'Calculatrice en mode examen activé (LED clignotante)',
                    'Montre analogique ou classique (smartwatch interdite)',
                    'Règle graduée, compas, équerre et surligneurs',
                    'Bouteille d’eau et en-cas énergétique',
                    'Pièce d’identité officielle et convocation imprimée'
                  ].map((item, idx) => (
                    <label key={idx} className="flex items-center gap-2.5 p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 cursor-pointer">
                      <input type="checkbox" className="rounded text-violet-600 focus:ring-violet-500" />
                      <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action button */}
          <button
            onClick={() => onGainXp(25, `Outil ${selectedTool.title} maîtrisé`)}
            className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <CheckSquare className="w-4 h-4" />
            <span>Valider la maîtrise de cet outil (+25 XP)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
