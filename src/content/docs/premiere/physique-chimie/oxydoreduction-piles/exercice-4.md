---
title: "Exercice 4 : Stockage chimique de l'énergie solaire"
description: "Application pratique du chapitre Oxydoréduction et piles"
---

### 🌐 Contexte concret

L'intermittence des énergies renouvelables, comme le solaire, pose le défi majeur du stockage de l'énergie. Une solution d'avenir consiste à utiliser l'électricité produite par des panneaux photovoltaïques pour réaliser l'électrolyse de l'eau, stockant ainsi l'énergie sous forme de dihydrogène ($\text{H}_2$). Ce dihydrogène peut ensuite être réutilisé dans une **pile à combustible** pour produire de l'électricité à la demande, en ne rejetant que de l'eau.

Nous allons étudier ici le fonctionnement d'une telle pile à combustible fonctionnant au méthanol ou à l'hydrogène, modélisée ici par l'oxydation du dihydrogène par le dioxygène.

---

### ❓ Énoncé (3 à 4 questions progressives)

On considère une pile fonctionnant avec du dihydrogène $\text{H}_2(g)$ et du dioxygène $\text{O}_2(g)$. Les deux compartiments sont reliés par un pont salin et un circuit extérieur traversé par un conducteur ohmique.

Les couples oxydant/réducteur mis en jeu sont :
* $\text{O}_2(g) / \text{H}_2\text{O}(l)$
* $\text{H}^+(aq) / \text{H}_2(g)$

**Données :**
* Constante de Faraday : $F = 96500 \text{ C}\cdot\text{mol}^{-1}$
* Quantité d'électricité échangée : $Q = I \times \Delta t$

1. **Écriture des demi-équations :** En sachant que le dihydrogène subit une oxydation à l'anode et que le dioxygène subit une réduction à la cathode, écrire les demi-équations électroniques associées à chaque électrode en milieu acide.
2. **Bilan de la réaction :** En déduire l'équation de la réaction chimique globale qui se produit lors du fonctionnement de cette pile.
3. **Calcul de charge :** La pile alimente un système consommant un courant d'intensité $I = 0{,}50 \text{ A}$ pendant une durée $\Delta t = 2{,}0 \text{ heures}$. Calculer la quantité d'électricité $Q$ débitée, puis en déduire la quantité d'électrons $n(e^-)$ ayant circulé dans le circuit.
4. **Volume de gaz :** En utilisant un tableau d'avancement ou les relations stœchiométriques, déterminer le volume de dihydrogène $\text{H}_2(g)$ consommé pendant cette durée, sachant que le volume molaire des gaz dans les conditions de l'expérience est $V_m = 24{,}0 \text{ L}\cdot\text{mol}^{-1}$.

---

### 💡 Indice

* **Question 1 :** Rappelez-vous qu'une oxydation correspond à une *perte* d'électrons (les électrons sont du côté des produits) et une réduction à un *gain* d'électrons (les électrons sont du côté des réactifs). En milieu acide, l'ajustement des atomes d'hydrogène se fait avec des ions $\text{H}^+$ et celui de l'oxygène avec des molécules $\text{H}_2\text{O}$.
* **Question 2 :** Pour obtenir l'équation bilan, il faut combiner les deux demi-équations de façon à ce que les électrons échangés n'apparaissent plus.
* **Question 3 :** Utilisez la formule $Q = I \times \Delta t$ (en veillant à convertir le temps en secondes). La relation entre la quantité d'électricité $Q$ et la quantité d'électrons $n(e^-)$ fait intervenir la constante de Faraday $F$ : $Q = n(e^-) \times F$.
* **Question 4 :** Reliez la quantité d'électrons $n(e^-)$ à la quantité de dihydrogène consommé $n(\text{H}_2)$ grâce aux coefficients stœchiométriques de la demi-équation de l'anode.

---

### 📋 Correction détaillée pas à pas

#### 1. Écriture des demi-équations électroniques

* **À l'anode (oxydation du dihydrogène) :**
  Le dihydrogène $\text{H}_2$ se transforme en ions $\text{H}^+$.
  $$\text{H}_2(g) \rightleftarrows 2\text{H}^+(aq) + 2e^-$$

* **À la cathode (réduction du dioxygène) :**
  Le dioxygène $\text{O}_2$ se transforme en eau $\text{H}_2\text{O}$.
  $$\text{O}_2(g) + 4\text{H}^+(aq) + 4e^- \rightleftarrows 2\text{H}_2\text{O}(l)$$

---

#### 2. Équation de la réaction globale

Pour éliminer les électrons, on multiplie la demi-équation de l'anode par $2$ et on l'additionne à celle de la cathode :
$$2 \times \left( \text{H}_2(g) \rightarrow 2\text{H}^+(aq) + 2e^- \right)$$
$$\text{O}_2(g) + 4\text{H}^+(aq) + 4e^- \rightarrow 2\text{H}_2\text{O}(l)$$

**Équation bilan :**
$$2\text{H}_2(g) + \text{O}_2(g) \rightarrow 2\text{H}_2\text{O}(l)$$

---

#### 3. Calcul de la quantité d'électricité et d'électrons

* **Calcul de la durée en secondes :**
  $$\Delta t = 2{,}0 \text{ h} = 2{,}0 \times 3600 \text{ s} = 7200 \text{ s}$$

* **Calcul de la quantité d'électricité $Q$ :**
  $$Q = I \times \Delta t = 0{,}50 \times 7200 = 3600 \text{ C}$$

* **Calcul de la quantité d'électrons $n(e^-)$ :**
  On sait que $Q = n(e^-) \times F$, donc :
  $$n(e^-) = \frac{Q}{F} = \frac{3600}{96500} \approx 0{,}0373 \text{ mol}$$

---

#### 4. Détermination du volume de dihydrogène consommé

D'après la demi-équation de l'anode :
$$\text{H}_2(g) \rightleftarrows 2\text{H}^+(aq) + 2e^-$$
On en déduit la relation stœchiométrique entre la quantité de dihydrogène consommée et la quantité d'électrons :
$$n(\text{H}_2) = \frac{n(e^-)}{2}$$
$$n(\text{H}_2) = \frac{0{,}0373}{2} \approx 0{,}01865 \text{ mol}$$

Enfin, pour trouver le volume de gaz correspondant :
$$V(\text{H}_2) = n(\text{H}_2) \times V_m$$
$$V(\text{H}_2) = 0{,}01865 \times 24{,}0 \approx 0{,}448 \text{ L} = 448 \text{ mL}$$

*Réponse :* La pile a consommé $448 \text{ mL}$ de dihydrogène pour produire de l'électricité dans ces conditions.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
