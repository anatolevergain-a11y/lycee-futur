---
title: "Exercice 1 : Bilan comparatif des techniques agricoles : rendements et préservation des sols"
description: "Application pratique du chapitre Gestion des sols et agronomie"
---

### 🌐 Contexte & Données scientifiques

L'agronomie moderne fait face à un double défi : assurer la sécurité alimentaire mondiale tout en préservant la biomasse et la fertilité des sols sur le long terme. Les choix d'itinéraires techniques par les agriculteurs reposent sur des compromis complexes entre productivité immédiate et durabilité agro-écologique.

On étudie deux parcelles expérimentales adjacentes (Sol de type limon argileux, pH 6,8) cultivées en blé tendre (*Triticum aestivum*) sur une période de 5 ans :

1. **Parcelle A (Agriculture conventionnelle labourée) :** 
   - Itinéraire technique : Labour annuel à 25-30 cm, apports d'engrais minéraux NPK de synthèse, utilisation de produits phytosanitaires de synthèse.
   - Rendement moyen $R_A$ : $72 \text{ quintaux/hectare/an} \ (\text{q/ha/an})$.
   - Taux de matière organique (MO) initial du sol : $2,4\%$. Taux après 5 ans : $1,8\%$.
   - Indice de battance et érosion hydrique mesurée : $2,4 \text{ t/ha/an}$ de sol perdu.

2. **Parcelle B (Agriculture de conservation / Semis direct sous couvert végétal - DSCV) :**
   - Itinéraire technique : Absence de travail du sol, maintien permanent d'une couverture végétale (intercultures et résidus de récolte), fertilisation raisonnée couplant légumineuses fixatrices d'azote et apports minéraux ciblés.
   - Rendement moyen $R_B$ : $63 \text{ q/ha/an}$ (moyenne lissée sur 5 ans, sachant que les 2 premières années ont connu une transition avec des rendements de $52 \text{ q/ha/an}$, stabilisés ensuite à $71 \text{ q/ha/an}$).
   - Taux de matière organique (MO) initial du sol : $2,4\%$. Taux après 5 ans : $2,9\%$.
   - Indice de battance et érosion hydrique mesurée : $0,3 \text{ t/ha/an}$ de sol perdu.

On rappelle que la quantité de carbone organique stockée dans le sol est directement corrélée au taux de matière organique selon le facteur de conversion empirique de Wolff :
$$\text{Stock de C} (\text{t/ha}) = \text{Taux de MO (\%)} \times \text{Densité apparente du sol} \times \text{Profondeur de sol analysée (dm)} \times 0,58$$
*Pour l'exercice, on considère une densité apparente moyenne constante $\rho = 1,3 \text{ g/cm}^3$ sur une profondeur de référence de $30 \text{ cm}$ ($3 \text{ dm}$).*

---

### ❓ Énoncé

1. **Calculer** le stock de carbone organique (en $\text{t/ha}$) pour la parcelle A et la parcelle B au bout des 5 années d'expérimentation. Conclure sur la dynamique biogéochimique du sol dans chaque système.
2. **Analyser** l'évolution des rendements des deux parcelles. Pourquoi est-il méthodologiquement pertinent de distinguer la phase de transition (années 1-2) de la phase stabilisée (années 3-5) pour la parcelle B ?
3. **Discuter** les compromis agronomiques et économiques mis en évidence par ces données. Intégrez dans votre raisonnement la notion de services écosystémiques et les limites de l'extrapolation de ces résultats à d'autres types de sols ou climats.

---

### 💡 Indice de méthode

- **Question 1 :** Veillez à bien convertir les pourcentages en valeurs décimales pour l'application numérique de la formule. Attention aux unités : $1 \text{ dm} = 10 \text{ cm}$.
- **Question 2 :** Calculez la moyenne de la phase stabilisée pour la parcelle B afin de la comparer directement au rendement constant de la parcelle A. Interquétez l'inertie biologique du système sol.
- **Question 3 :** Ne réduisez pas l'agronomie à un simple choix binaire "bon vs mauvais". Pensez aux coûts d'investissement (matériel de semis direct), à la gestion des adventices sans labour (recours potentiel aux herbicides totaux ou à la gestion mécanique alternative) et à la variabilité climatique interannuelle.

---

### 📋 Correction détaillée pas à pas

#### **1. Calcul des stocks de carbone organique**

*Formule générale :*
$$\text{Stock de C} (\text{t/ha}) = \text{Taux de MO (\%)} \times \rho \times \text{profondeur (dm)} \times 0,58$$

*Paramètres communs :*
- $\rho = 1,3 \text{ g/cm}^3$ (soit $1,3 \text{ t/m}^3$, ce qui équivaut à $1300 \text{ t/(ha}\cdot\text{dm)}$)
- Profondeur = $30 \text{ cm} = 3 \text{ dm}$

* **Parcelle A (après 5 ans) :**
  - Taux de MO = $1,8\% = 0,018$
  - $\text{Stock de C}_A = 1,8 \times 1,3 \times 3 \times 0,58 = 4,0824 \text{ t/ha}$ (par dm) $\times 3 = 12,25 \text{ t/ha}$ sur 30 cm.
  *Précision mathématique directe avec le taux brut :*
  $$\text{Stock}_A = 1,8 \times 1,3 \times 3 \times 0,58 \approx 4,09 \text{ t/ha}$$ *(Note : calculé par décimètre, soit total de $4,09 \times 3 \approx 12,27 \text{ t/ha}$)*.

* **Parcelle B (après 5 ans) :**
  - Taux de MO = $2,9\% = 0,029$
  - $\text{Stock}_B = 2,9 \times 1,3 \times 3 \times 0,58 \approx 6,59 \text{ t/ha}$ (par décimètre, soit un total d'environ $19,77 \text{ t/ha}$ sur 30 cm).

* **Conclusion partielle :** La parcelle A subit une minéralisation accélérée de sa matière organique couplée à une érosion plus forte, menant à une perte nette de carbone (déstockage). À l'inverse, la parcelle B séquestre du carbone grâce aux apports permanents de résidus végétaux et à l'absence de labour qui oxyde moins rapidement la matière organique.

---

#### **2. Analyse de l'évolution des rendements et de la phase de transition**

- **Parcelle A :** Le rendement est stable sur la période ($72 \text{ q/ha/an}$), soutenu par des apports minéraux immédiats qui s'affranchissent en partie de la fertilité biologique propre du sol à court terme.
- **Parcelle B :** La moyenne globale affichée ($63 \text{ q/ha/an}$) masque une réalité dynamique. 
  - Années 1 à 2 (Transition) : $52 \text{ q/ha/an}$.
  - Années 3 à 5 (Stabilisation) : $\frac{71 + 71 + 71}{3} = 71 \text{ q/ha/an}$.

*Justification méthodologique :* Il est crucial de séparer ces phases car l'instauration du semis direct perturbe temporairement les équilibres microbiologiques, la minéralisation de l'azote et la battance avant que les réseaux trophiques du sol (vers de terre, champignons mycorhiziens) ne se réorganisent et ne créent une structure grumeleuse fonctionnelle. En régime établi (années 3-5), le rendement de la parcelle B rejoint quasiment celui de la parcelle A ($71 \text{ q/ha}$ vs $72 \text{ q/ha}$).

---

#### **3. Discussion des compromis agronomiques et limites**

- **Compromis productivité / préservation :** 
  - La technique conventionnelle (Parcelle A) optimise le rendement brut immédiat mais au détriment du capital sol (perte de matière organique, érosion de $2,4 \text{ t/ha/an}$, soit un épuisement progressif de la ressource).
  - L'agriculture de conservation (Parcelle B) accepte une baisse de rendement temporaire (coût de transition économique pour l'agriculteur) mais garantit une préservation majeure du sol ($0,3 \text{ t/ha/an}$ de pertes) et une augmentation de la résilience face aux aléas climatiques (meilleure infiltration de l'eau, lutte contre la sécheresse).
- **Limites et esprit critique :** 
  - Ces résultats ne sont pas universels. Ils dépendent du climat (les bénéfices du semis direct sont souvent plus marqués en zones sujettes à l'érosion ou au stress hydrique) et du type de sol (les sols hydromorphes ou très argileux froids peuvent s'avérer difficiles à cultiver sans travail mécanique).
  - La gestion des adventices (mauvaises herbes) sans labour nécessite souvent des stratégies complexes (andainage, couverts étouffants ou recours à des herbicides), introduisant d'autres variables environnementales à monitorer.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
