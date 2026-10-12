---
title: "Exercice 1 : Bilan d'énergie dans la fission et fusion"
description: "Application pratique du chapitre Transformations nucléaires et électricité"
---

### 🌐 Contexte & Données scientifiques

Les réactions nucléaires, qu'il s'agisse de la fission (utilisée dans les réacteurs actuels) ou de la fusion (processus à l'œuvre dans les étoiles et étudié pour de futurs réacteurs), libèrent des quantités d'énergie considérables par rapport aux réactions chimiques. Ces bilans énergétiques se calculent à partir de la variation de masse $\Delta m$ entre les réactifs et les produits, selon la relation d'Einstein :
$$\Delta E = |\Delta m| \cdot c^2$$

Pour analyser rigoureusement ces transformations, on considère les données scientifiques suivantes :

1. **Réaction de fission de l'uranium 235 :**
   $${}^{235}_{\ 92}\text{U} + {}^{1}_{0}\text{n} \longrightarrow {}^{141}_{\ \ 56}\text{Ba} + {}^{92}_{\ 36}\text{Kr} + 3\ {}^{1}_{0}\text{n}$$
   * Masses nucléaires (en $\text{u}$, unité de masse atomique) :
     * $m({}^{235}_{\ 92}\text{U}) = 234{,}9935 \text{ u}$
     * $m({}^{1}_{0}\text{n}) = 1{,}0087 \text{ u}$
     * $m({}^{141}_{\ \ 56}\text{Ba}) = 140{,}9077 \text{ u}$
     * $m({}^{92}_{\ 36}\text{Kr}) = 91{,}8973 \text{ u}$

2. **Réaction de fusion du deutérium et du tritium :**
   $${}^{2}_{1}\text{H} + {}^{3}_{1}\text{H} \longrightarrow {}^{4}_{2}\text{He} + {}^{1}_{0}\text{n}$$
   * Énergie libérée pour une seule fusion : $\Delta E_{\text{fusion}} = 2{,}81 \times 10^{-12} \text{ J}$

3. **Constantes et conversions :**
   * Célérité de la lumière dans le vide : $c = 2{,}998 \times 10^{8} \text{ m}\cdot\text{s}^{-1}$
   * $1 \text{ u} = 1{,}6605 \times 10^{-27} \text{ kg}$
   * $1 \text{ MeV} = 1{,}602 \times 10^{-13} \text{ J}$

*Note critique :* Si le calcul montre un rendement énergétique massique très élevé pour la fusion par rapport aux énergies fossiles, la faisabilité industrielle de cette filière se heurte à des défis technologiques majeurs (confinement du plasma à plus de $10^8 \text{ K}$, résistance des matériaux aux flux de neutrons). Le bilan énergétique brut ne reflète donc pas à lui seul la complexité industrielle et environnementale de la filière.

---

### ❓ Énoncé

1. **Calcul de variation de masse :** Calculer la variation de masse $\Delta m$ (en $\text{kg}$) pour un noyau d'uranium 235 subissant la réaction de fission présentée ci-dessus.
2. **Bilan énergétique de la fission :** En déduire l'énergie $\Delta E_{\text{fission}}$ libérée par la fission d'un noyau d'uranium 235, exprimée en Joules ($\text{J}$) puis en Mégaélectronvolts ($\text{MeV}$).
3. **Comparaison par nucléon :** Calculez l'énergie libérée par nucléon pour la fission de l'uranium 235, puis comparez ce résultat avec l'énergie libérée par nucléon pour la fusion deutérium-tritium ($\approx 3{,}52 \text{ MeV}$ par nucléon). Quel modèle semble, sur le papier, le plus efficace ?
4. **Analyse critique :** Sachant qu'un réacteur à fission produit des déchets radioactifs à long vie dont la gestion pose des questions éthiques et techniques complexes, et que le réacteur à fusion (type ITER) nécessite un apport énergétique massif pour amorcer et maintenir la réaction sans être encore industrialisable, discutez de la pertinence de n'utiliser que le critère énergétique pour classifier ces technologies.

---

### 💡 Indice de méthode

* **Question 1 :** La variation de masse se calcule par la formule $\Delta m = m(\text{produits}) - m(\text{réactifs})$. Veillez à bien additionner toutes les masses molaires ou nucléaires des entités du même côté de l'équation. Convertissez ensuite le résultat de $\text{u}$ en $\text{kg}$.
* **Question 2 :** Appliquez la relation d'Einstein $\Delta E = |\Delta m| \cdot c^2$. Pour convertir des Joules en $\text{MeV}$, utilisez la relation de proportionnalité rappelée dans les données.
* **Question 3 :** Le nombre total de nucléons mis en jeu dans la fission de l'uranium 235 est de $235 + 1 = 236$. Divisez l'énergie totale trouvée à la question 2 par ce nombre. Faites de même pour la fusion (qui implique 5 nucléons au total : 2 pour le deutérium et 3 pour le tritium).

---

### 📋 Correction détaillée pas à pas

1. **Calcul de la variation de masse pour la fission :**
   * Masse des réactifs ($m_{\text{réactifs}}$) :
     $$m_{\text{réactifs}} = m({}^{235}_{\ 92}\text{U}) + m({}^{1}_{0}\text{n}) = 234{,}9935 + 1{,}0087 = 236{,}0022 \text{ u}$$
   * Masse des produits ($m_{\text{produits}}$) :
     $$m_{\text{produits}} = m({}^{141}_{\ \ 56}\text{Ba}) + m({}^{92}_{\ 36}\text{Kr}) + 3 \times m({}^{1}_{0}\text{n})$$
     $$m_{\text{produits}} = 140{,}9077 + 91{,}8973 + (3 \times 1.0087) = 232{,}8051 + 3{,}0261 = 235{,}8312 \text{ u}$$
   * Variation de masse $\Delta m$ :
     $$\Delta m = m_{\text{produits}} - m_{\text{réactifs}} = 235{,}8312 - 236{,}0022 = -0{,}1710 \text{ u}$$
   * Conversion en $\text{kg}$ :
     $$\Delta m = -0{,}1710 \times 1{,}6605 \times 10^{-27} \text{ kg} \approx -2{,}8395 \times 10^{-28} \text{ kg}$$
     La perte de masse est donc de $|\Delta m| = 2{,}8395 \times 10^{-28} \text{ kg}$.

2. **Calcul de l'énergie libérée :**
   * En Joules ($\text{J}$) :
     $$\Delta E_{\text{fission}} = |\Delta m| \cdot c^2 = (2{,}8395 \times 10^{-28}) \times (2{,}998 \times 10^{8})^2$$
     $$\Delta E_{\text{fission}} \approx 2{,}551 \times 10^{-11} \text{ J}$$
   * En Mégaélectronvolts ($\text{MeV}$) :
     $$\Delta E_{\text{fission}} = \frac{2{,}551 \times 10^{-11}}{1{,}602 \times 10^{-13}} \approx 159{,}2 \text{ MeV}$$

3. **Comparaison par nucléon :**
   * Pour la fission de l'uranium 235 (236 nucléons au total dans le système initial) :
     $$\text{Énergie par nucléon} = \frac{159{,}2 \text{ MeV}}{236} \approx 0{,}67 \text{ MeV/nucléon}$$
   * Pour la fusion deutérium-tritium (donnée : $\Delta E_{\text{fusion}} = 2{,}81 \times 10^{-12} \text{ J} = 17{,}54 \text{ MeV}$ pour 5 nucléons) :
     $$\text{Énergie par nucléon} = \frac{17{,}54 \text{ MeV}}{5} \approx 3{,}51 \text{ MeV/nucléon}$$
   * *Conclusion intermédiaire :* Sur le plan purement quantitatif et massique, la fusion est environ 5 fois plus efficace par nucléon que la fission.

4. **Analyse critique et esprit scientifique :**
   * S'appuyer uniquement sur le rendement énergétique brut conduit à occulter des aspects thermodynamiques, économiques et géopolitiques fondamentaux.
   * La fission est technologiquement maîtrisée à grande échelle, mais génère des déchets à très longue durée de vie radiologique et dépend d'une ressource minière limitée (l'uranium naturel).
   * La fusion présente l'avantage théorique de combustibles abondants (dans l'eau pour le deutérium) et de déchets à vie courte, mais les contraintes techniques (maintenir un plasma confiné par champs magnétiques à des températures stellaires) font l'objet de recherches incertaines quant à leur viabilité commerciale à court terme. 
   * Une décision scientifique éclairée ne peut donc se baser que sur une approche systémique (analyse du cycle de vie, gestion des risques, bilan carbone global, et coût d'investissement).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
