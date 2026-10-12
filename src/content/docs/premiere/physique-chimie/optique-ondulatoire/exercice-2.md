---
title: "Exercice 2 : Spectrophotométrie et dosage"
description: "Application pratique du chapitre Lumière : ondes et particules"
---

### 🌐 Contexte & Données scientifiques

La spectrophotométrie d'absorption UV-visible est une méthode d'analyse non destructive largement employée en chimie analytique et en biologie. Elle repose sur l'interaction entre la matière et le rayonnement électromagnétique considéré ici sous son aspect ondulatoire (longueur d'onde $\lambda$) et corpusculaire (photons d'énergie $E = h\nu = \frac{hc}{\lambda}$).

Lorsqu'un faisceau de lumière monochromatique d'intensité incidente $I_0$ traverse une solution contenant une espèce chimique colorée (ou absorbante) de concentration molaire $C$, une partie de la lumière est absorbée. L'intensité transmise $I$ est mesurée par le détecteur. 

On définit l'**absorbance** $A$ par la relation :
$$A = -\log\left(\frac{I}{I_0}\right)$$

Pour des solutions diluées (généralement $C < 1{,}0 \times 10^{-2}\text{ mol}\cdot\text{L}^{-1}$), l'absorbance obéit à la **loi de Beer-Lambert** :
$$A = \varepsilon \cdot l \cdot C$$

*   $\varepsilon$ : coefficient d'extinction molaire (en $\text{L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1}$), caractéristique de l'espèce chimique à une longueur d'onde donnée.
*   $l$ : longueur de la cuve traversée par le rayonnement (souvent $l = 1{,}0\text{ cm}$).
*   $C$ : concentration molaire de l'espèce absorbante (en $\text{mol}\cdot\text{L}^{-1}$).

Dans le cadre d'un contrôle qualité en industrie agroalimentaire, un technicien souhaite déterminer la concentration en ions permanganate $\text{MnO}_4^-_{(aq)}$ dans un antiseptique commercial. Les ions permanganate présentent un maximum d'absorption dans le visible à la longueur d'onde $\lambda = 525\text{ nm}$ (couleur verte-jaune, ce qui confère à la solution sa couleur violette caractéristique par transmission).

Cependant, l'utilisation de modèles simplifiés comme la loi de Beer-Lambert comporte des limites méthodologiques et expérimentales qu'il convient d'analyser :
1. **La limite de linéarité :** Aux fortes concentrations, la distance moyenne entre entités absorbantes diminue, modifiant leur environnement électrostatique et entraînant des déviations par rapport à la loi (saturation du signal).
2. **Les incertitudes instrumentales :** Au-delà d'une absorbance de $A = 1{,}5$ (soit une transmission inférieure à $3\,\%$), le bruit de fond du détecteur photoélectrique devient du même ordre de grandeur que le signal transmis, augmentant drastiquement l'incertitude relative sur la mesure. En deçà de $A = 0{,}05$, l'incertitude relative liée à la lecture du spectrophotomètre devient également prépondérante.

---

### ❓ Énoncé

1. **Analyse spectrale et choix du modèle :** Justifier brièvement pourquoi le technicien doit régler le spectrophotomètre sur la longueur d'onde $\lambda = 525\text{ nm}$ plutôt qu'à $400\text{ nm}$ pour réaliser ce dosage.
2. **Exploitation de la courbe d'étalonnage :** Le technicien réalise une gamme d'étalonnage et mesure l'absorbance $A$ de solutions filles de concentration connue. Les points expérimentaux permettent d'établir l'équation de la régression linéaire (modèle affine) dans le domaine de valabilité : 
   $$A = 2{,}15 \times 10^3 \cdot C$$ 
   Le produit commercial, après une dilution au 1/50^{e}, présente une absorbance mesurée $A_{\text{mes}} = 0{,}78$. Déterminer la concentration molaire $C_{\text{com}}$ en ions permanganate dans le produit commercial non dilué.
3. **Esprit critique et limites de mesure :** Un flacon du même produit, conservé à la lumière et ayant subi une légère évaporation non mesurée, présente une absorbance brute de $A' = 1{,}85$ (dans les mêmes conditions de cuve). Le technicien peut-il appliquer directement la relation linéaire précédente pour trouver la nouvelle concentration ? Discuter de la valabilité de cette mesure en argumentant sur les incertitudes instrumentales et les limites physico-chimiques du modèle.

---

### 💡 Indice de méthode

*   **Question 1 :** Rappelez-vous qu'un spectrophotomètre mesure l'absorption maximale d'une espèce colorée. Quelle est la relation entre la couleur perçue (complémentaire) et la longueur d'onde absorbée ?
*   **Question 2 :** Utilisez l'équation littérale de la droite d'étalonnage pour exprimer $C$ en fonction de $A$ et $\varepsilon \cdot l$. N'oubliez pas de prendre en compte le facteur de dilution.
*   **Question 3 :** Comparez la valeur de $A'$ aux seuils critiques de linéarité et de sensibilité des détecteurs mentionnés dans le texte d'introduction ($A > 1{,}5$).

---

### 📋 Correction détaillée pas à pas

1. **Justification du choix de la longueur d'onde :**
   Les ions permanganate $\text{MnO}_4^-$ absorbent fortement dans le domaine vert du spectre visible (autour de $525\text{ nm}$). C'est cette absorption sélective qui donne la couleur violette par complémentarité (le violet étant la couleur transmise/diffusée lorsque le vert est absorbé). Pour maximiser la sensibilité du dosage, on se place toujours à la longueur d'onde du maximum d'absorption ($\lambda_{\text{max}}$) car c'est là que le coefficient d'extinction molaire $\varepsilon$ est le plus grand, rendant la variation de l'absorbance la plus sensible aux variations de concentration.

2. **Détermination de la concentration commerciale :**
   *   D'après la loi de Beer-Lambert et l'équation de la régression linéaire fournie ($A = \varepsilon \cdot l \cdot C$), on a pour la solution diluée :
       $$A_{\text{mes}} = 2{,}15 \times 10^3 \cdot C_{\text{diluée}}$$
   *   Exprimons la concentration de la solution diluée :
       $$C_{\text{diluée}} = \frac{A_{\text{mes}}}{2{,}15 \times 10^3} = \frac{0{,}78}{2{,}15 \times 10^3} \approx 3{,}63 \times 10^{-4}\text{ mol}\cdot\text{L}^{-1}$$
   *   Puisque la solution a été diluée $50$ fois ($F = 50$), la concentration initiale $C_{\text{com}}$ du produit commercial est :
       $$C_{\text{com}} = F \times C_{\text{diluée}} = 50 \times 3{,}63 \times 10^{-4} \approx 1{,}82 \times 10^{-2}\text{ mol}\cdot\text{L}^{-1}$$

3. **Analyse critique de la mesure $A' = 1{,}85$ :**
   *   *Limite instrumentale :* Une absorbance de $A' = 1{,}85$ correspond à une transmission lumineuse très faible ($\frac{I}{I_0} = 10^{-1{,}85} \approx 0{,}014$, soit environ $1{,}4\,\%$ de lumière transmise). Comme indiqué dans les données, au-delà de $A = 1{,}5$, le signal transmis est du même ordre de grandeur que le bruit de fond électronique du détecteur. L'incertitude relative sur la mesure devient alors inacceptable.
   *   *Limite du modèle :* À forte concentration (ce que traduit cette absorbance élevée), la distance intermoléculaire diminue, ce qui modifie les interactions électrostatiques entre les entités chimiques. La proportionnalité linéaire de la loi de Beer-Lambert n'est plus rigoureusement vérifiée (déviations physico-chimiques).
   *   *Conclusion critique :* Le technicien **ne peut pas** appliquer directement la relation linéaire. Il doit obligatoirement diluer à nouveau l'échantillon (par exemple au $1/2$) afin de ramener l'absorbance mesurée dans la zone de validité du modèle (entre $0{,}1$ et $1{,}0$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
