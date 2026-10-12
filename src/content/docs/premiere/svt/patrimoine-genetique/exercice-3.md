---
title: "Exercice 3 : Résistance bactérienne et usage raisonné des antibiotiques"
description: "Application pratique du chapitre Patrimoine génétique et santé"
---

### 🌐 Contexte & Données scientifiques

L'émergence de la résistance bactérienne aux antibiotiques représente un défi majeur de santé publique et une illustration directe de l'évolution des génomes microbiens par sélection naturelle. Lorsqu'une population bactérienne est exposée à un agent antibactérien, la pression de sélection favorise la survie et la multiplication des individus porteurs de mutations préexistantes ou de gènes de résistance acquis (par conjugaison, transformation ou transduction).

Considérons une souche bactérienne pathogène, *Pseudomonas aeruginosa*, et un antibiotique de la famille des bêta-lactamines. Dans une population sauvage, la fréquence initiale d'allèles conférant une résistance de bas niveau est estimée à $f_0 = 10^{-7}$ (soit une bactérie résistante pour $10^7$ bactéries sensibles).

Une étude épidémiologique et pharmacologique s'intéresse à l'évolution de la concentration minimale inhibitrice (CMI) au cours d'un traitement et aux conséquences d'une interruption prématurée de celui-ci. 

Les données de croissance in vitro en milieu gélosé permettent d'établir le modèle mathématique simplifié de l'évolution de la proportion de bactéries résistantes $P(t)$ dans l'organisme au cours du temps $t$ (exprimé en jours) sous l'effet du traitement :

$$P(t) = \frac{P_0 \cdot e^{s \cdot t}}{1 + P_0 \cdot (e^{s \cdot t} - 1)}$$

Où :
*   $P_0$ est la proportion initiale de mutants résistants.
*   $s$ représente le coefficient de sélection conféré par l'antibiotique ($s = 0,5 \text{ jour}^{-1}$ en présence active du médicament).
*   En l'absence d'antibiotique (ou si la concentration est sub-optimale), les bactéries résistantes présentent souvent un "coût biologique" (ou *fitness cost*), se traduisant par un coefficient de sélection négatif $s' = -0,1 \text{ jour}^{-1}$.

Néanmoins, la modélisation mathématique comporte des limites : elle suppose un milieu homogène et néglige la réponse immunitaire de l'hôte ainsi que la pharmacocinétique complexe (variation de la concentration de l'antibiotique dans les tissus au cours du temps).

---

### ❓ Énoncé

1. **Restitution et analyse (Saisie d'informations) :** À partir de vos connaissances et du texte, expliquez par quel mécanisme génétique et cellulaire l'utilisation d'un antibiotique modifie la structure de la population bactérienne, en évitant l'idée simpliste selon laquelle l'antibiotique "crée" la résistance.
2. **Calcul et modélisation :** En utilisant la formule fournie, calculez la proportion de bactéries résistantes $P(t)$ après un traitement efficace de $t = 7$ jours, sachant que $P_0 = 10^{-7}$. Exprimez le résultat sous forme scientifique.
3. **Esprit critique et compromis thérapeutique :** Un patient décide d'interrompre son traitement antibiotique au bout de $3$ jours alors que la charge bactérienne totale a fortement diminué, estimant qu'il est guéri. Discutez des conséquences de cet arrêt prématuré sur la sélection des souches résistantes, en intégrant la notion de coût biologique ($s' = -0,1 \text{ jour}^{-1}$) et les limites d'un modèle purement mathématique face à la complexité biologique in vivo.

---

### 💡 Indice de méthode

*   **Question 1 :** Distinguez bien *l'apparition aléatoire* d'une mutation (indépendante de la présence de l'antibiotique) de la *sélection* (filtration non aléatoire par l'antibiotique).
*   **Question 2 :** Pour le calcul, prenez soin de calculer d'abord l'exposant $s \cdot t$ ($0,5 \times 7$), puis $e^{3,5}$. Utilisez la approximation $1 + P_0(e^{s\cdot t} - 1) \approx 1$ compte tenu de la très faible valeur initiale de $P_0$.
*   **Question 3 :** Analysez la situation sous deux angles : d'une part, la survie différentielle des bactéries partiellement résistantes si la concentration d'antibiotique chute (sous le seuil efficace mais au-dessus de la CMI des mutants) ; d'autre part, les limites du modèle (rôle du système immunitaire qui peut éliminer les bactéries restantes malgré l'arrêt).

---

### 📋 Correction détaillée pas à pas

#### **1. Mécanisme génétique et sélection (Restitution rigoureuse)**
*   **Origine de la variabilité :** Les résistances reposent sur des modifications du patrimoine génétique (mutations ponctuelles de gènes cibles, ou acquisition horizontale de plasmides de résistance). Ces évènements surviennent **aléairement** et indépendamment de l'exposition à l'antibiotique.
*   **Action de l'agent sélectif :** L'antibiotique n'induit pas la mutation. Il agit comme un filtre drastique (pression de sélection) : il élimine les bactéries sensibles (qui meurent ou cessent de se diviser), tandis que les rares bactéries déjà porteuses de la résistance survivent et prolifèrent. La population change donc de profil génétique par sélection naturelle.

#### **2. Calcul de la proportion de résistants après un traitement de 7 jours**
*   **Données :** $P_0 = 10^{-7}$, $s = 0,5 \text{ jour}^{-1}$, $t = 7 \text{ jours}$.
*   **Application numérique de l'exposant :** 
    $$s \cdot t = 0,5 \times 7 = 3,5$$
*   **Calcul du facteur exponentiel :** 
    $$e^{3,5} \approx 33,115$$
*   **Résolution de la formule :**
    $$P(7) = \frac{10^{-7} \times 33,115}{1 + 10^{-7} \times (33,115 - 1)}$$
    Puisque le terme $10^{-7} \times 33,115$ est négligeable devant $1$ ($1 + 3,31 \times 10^{-6} \approx 1$), on simplifie :
    $$P(7) \approx 10^{-7} \times 33,115 \approx 3,31 \times 10^{-6}$$
*   **Conclusion partielle :** La proportion de bactéries résistantes a été multipliée par environ $33$ en 7 jours de traitement, illustrant la sélection rapide des formes résistantes au sein du réservoir bactérien.

#### **3. Discussion critique de l'interruption prématurée du traitement**
*   **Analyse du compromis et du modèle :** 
    *   Si le patient arrête le traitement au bout de $3$ jours, la concentration d'antibiotique dans l'organisme diminue progressivement. 
    *   Durant une phase intermédiaire, la concentration devient "sub-inhibitrice" : elle est trop faible pour tuer les mutants résistants, mais suffisante pour éliminer les dernières bactéries sensibles restantes, levant ainsi la compétition interspécifique/intraspécifique (*fitness cost* atténué).
    *   Le modèle mathématique avec $s' = -0,1$ suggérerait qu'en l'absence totale d'antibiotique, les mutants résistants sont désavantagés face aux souches sauvages. Cependant, **la limite majeure de ce modèle** réside dans le fait qu'in vivo, les bactéries sensibles ont déjà été éradiquées. Les mutants résistants se trouvent donc seuls ou majoritaires dans une niche écologique libérée, ce qui contredit l'hypothèse d'une reconquête immédiate par les souches sensibles.
*   **Nuance scientifique et systémique :** L'arrêt prématuré expose donc à un risque de rechute avec une population bactérienne désormais enrichie en variants résistants. Néanmoins, la réalité clinique est nuancée par l'action du système immunitaire de l'hôte : chez un patient immunocompétent, les défenses immunitaires peuvent suffire à éliminer la charge résiduelle, ce qui explique pourquoi certains arrêts précoces ne mènent pas systématiquement à un échec thérapeutique. C'est tout l'enjeu de la recherche d'une médecine personnalisée basée sur le suivi de la charge microbienne et des biomarqueurs.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
