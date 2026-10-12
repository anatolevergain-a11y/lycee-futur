---
title: "Exercice 2 : Raison et expérience dans la recherche de la vérité"
description: "Application pratique du chapitre La Vérité et la Raison"
---

### 🌐 Contexte & Données scientifiques

En épistémologie, la question de l'accès à la vérité scientifique oscille traditionnellement entre deux pôles : le rationalisme (qui privilégie la déduction logique et les structures a priori de l'esprit) et l'empirisme (qui fonde la connaissance sur les données des sens et l'expérimentation). L'histoire des sciences montre toutefois que la recherche de la vérité objective réside dans l'articulation complexe entre ces deux instances.

Considérons l'étude de la résonance magnétique nucléaire (RMN) appliquée à la mesure de champs magnétiques ultra-faibles en biophysique. Soit $B$ l'intensité du champ magnétique recherchée (exprimée en tesla, $\text{T}$) et $\nu$ la fréquence de Larmor mesurée par le dispositif expérimental (exprimée en hertz, $\text{Hz}$). 

La relation théorique déduite par la physique quantique (modèle rationaliste) s'écrit :
$$\nu = \frac{\gamma}{2\pi} B$$
Où $\gamma = 2{,}675 \times 10^8 \text{ rad} \cdot \text{s}^{-1} \cdot \text{T}^{-1}$ représente le rapport gyromagnétique du proton.

Cependant, toute mesure empirique est entachée d'incertitudes. Lors d'une campagne de $N = 100$ mesures indépendantes, l'équipe scientifique obtient une valeur moyenne expérimentale $\overline{\nu} = 42{,}58 \times 10^6 \text{ Hz}$, avec un écart-type empirique $\sigma = 0{,}05 \times 10^6 \text{ Hz}$. 

Le modèle théorique pur prédit, pour un champ $B_0 = 1{,}00 \text{ T}$, une fréquence exacte $\nu_{\text{th}} = 42{,}578 \times 10^6 \text{ Hz}$. L'écart relatif entre la théorie et l'expérience s'exprime ainsi :
$$\epsilon = \left| \frac{\overline{\nu} - \nu_{\text{th}}}{\nu_{\text{th}}} \right| \approx 0{,}05 \, \%$$

Ce cas d'étude met en lumière la tension épistémologique : l'accord entre la raison mathématique et l'expérience n'est jamais tautologique, mais probabiliste et soumis aux limites instrumentales.

---

### ❓ Énoncé

1. **Analyse logique du modèle (Rationalisme) :** En partant de l'équation théorique $\nu = \frac{\gamma}{2\pi} B$, calculez la valeur exacte du champ magnétique $B_{\text{th}}$ si la fréquence observée est $\nu_{\text{th}} = 42{,}578 \times 10^6 \text{ Hz}$. Exprimez le résultat avec les unités appropriées.
2. **Critique empirique et traitement de l'incertitude :** À partir des données expérimentales ($\overline{\nu} = 42{,}58 \times 10^6 \text{ Hz}$ et $\sigma = 0{,}05 \times 10^6 \text{ Hz}$ sur $N = 100$ mesures), calculez l'intervalle de confiance à $95 \, \%$ de la mesure, donné par la formule $I_{95} = \left[ \overline{\nu} - 1{,}96 \frac{\sigma}{\sqrt{N}} \, ; \, \overline{\nu} + 1{,}96 \frac{\sigma}{\sqrt{N}} \right]$. 
3. **Confrontation et vérité scientifique :** La valeur théorique $\nu_{\text{th}}$ appartient-elle à cet intervalle de confiance ? Discutez, à partir de ce résultat chiffré, si l'expérience valide la théorie ou si elle se limite à ne pas la réfuter (au sens de Karl Popper).
4. **Synthèse philosophique :** Dans quelle mesure cet exemple technologique illustre-t-il la formule célèbre d'Emmanuel Kant dans la *Critique de la raison pure* : « *L'expérience sans théorie est aveugle, mais la théorie sans l'expérience est impuissante* » ?

---

### 💡 Indice de méthode

* **Pour la question 1 :** Procédez par isolation de la variable recherchée ($B$) à partir de l'équation littérale avant d'effectuer l'application numérique. Veillez à la rigueur des unités du Système International (SI).
* **Pour la question 2 :** Respectez l'ordre des opérations mathématiques à l'intérieur des crochets. Calculez d'abord l'erreur standard de la moyenne $\frac{\sigma}{\sqrt{N}}$ avant de la multiplier par le facteur de confiance $1{,}96$.
* **Pour la question 3 :** Ne confondez pas « vérité absolue » et « cohérence empirique provisoire ». En épistémologie des sciences, une adéquation numérique n'établit pas une vérité définitive, mais une robustesse statistique face aux erreurs de mesure.

---

### 📋 Correction détaillée pas à pas

1. **Calcul de la valeur théorique du champ magnétique :**
   À partir de l'équation $\nu = \frac{\gamma}{2\pi} B$, isolons $B$ :
   $$B = \frac{2\pi \nu}{\gamma}$$
   Effectuons l'application numérique pour $\nu_{\text{th}} = 42{,}578 \times 10^6 \text{ Hz}$ et $\gamma = 2{,}675 \times 10^8 \text{ rad} \cdot \text{s}^{-1} \cdot \text{T}^{-1}$ :
   $$B_{\text{th}} = \frac{2 \times \pi \times 42{,}578 \times 10^6}{2{,}675 \times 10^8} \approx 0{,}9999 \text{ T}$$
   Le modèle rationaliste prédit donc un champ magnétique de $0{,}9999 \text{ T}$ (soit $1{,}00 \text{ T}$ en arrondissant aux chiffres significatifs).

2. **Calcul de l'intervalle de confiance empirique :**
   Calculons d'abord l'erreur type de la moyenne :
   $$\frac{\sigma}{\sqrt{N}} = \frac{0{,}05 \times 10^6}{\sqrt{100}} = \frac{0{,}05 \times 10^6}{10} = 0{,}005 \times 10^6 \text{ Hz} = 5 \times 10^3 \text{ Hz} = 0{,}005 \times 10^6 \text{ Hz}$$
   Multiplions par le facteur $1{,}96$ :
   $$1{,}96 \times 0{,}005 \times 10^6 = 0{,}0098 \times 10^6 \text{ Hz} = 0{,}0098 \times 10^6 \text{ Hz}$$
   L'intervalle de confiance $I_{95}$ est donc :
   $$I_{95} = \left[ 42{,}58 \times 10^6 - 0{,}0098 \times 10^6 \, ; \, 42{,}58 \times 10^6 + 0{,}0098 \times 10^6 \right]$$
   $$I_{95} = \left[ 42{,}5702 \times 10^6 \text{ Hz} \, ; \, 42{,}5898 \times 10^6 \text{ Hz} \right]$$

3. **Confrontation et statut de la vérité :**
   La valeur théorique attendue est $\nu_{\text{th}} = 42{,}578 \times 10^6 \text{ Hz}$. 
   Constatons que $42{,}578 \times 10^6$ appartient bien à l'intervalle $\left[ 42{,}5702 \times 10^6 \, ; \, 42{,}5898 \times 10^6 \right]$. 
   *Portée épistémologique :* Cet accord ne prouve pas de manière dogmatique que la théorie est « vraie » dans l'absolu. Selon le critère de falsifiabilité de Karl Popper, l'expérience ne fait que corroborer provisoirement le modèle mathématique. Si la valeur était sortie de l'intervalle, la théorie aurait été réfutée ; puisqu'elle y est, la théorie demeure scientifiquement valide *jusqu'à nouvel ordre*, sous réserve d'instruments de mesure plus précis.

4. **Synthèse philosophique (Kant) :**
   L'exercice démontre que la raison pure (le calcul de $\nu$ par les équations de la physique quantique) fournit un cadre formel rigoureux, mais qui resterait abstrait et vide sans la confrontation au réel. Inversement, les données brutes de l'expérience (les $100$ mesures entachées d'une dispersion $\sigma$) ne signifieraient rien sans un concept mathématique et un modèle théorique pour les interpréter et calculer un intervalle de confiance. La vérité scientifique n'est donc ni un pur produit de l'esprit (rationalisme dogmatique) ni une simple accumulation de faits sensibles (empirisme naïf), mais le produit dialectique de leur coopération critique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
