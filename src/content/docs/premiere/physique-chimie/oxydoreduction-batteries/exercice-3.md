---
title: "Exercice 3 : Piles à hydrogène pour les trains"
description: "Application pratique du chapitre Oxydoréduction et batteries"
---

### 🌐 Contexte concret

La transition écologique du réseau ferroviaire pousse les constructeurs à remplacer les locomotives diesel par des rames équipées de **piles à hydrogène**. Ces piles convertissent directement l'énergie chimique en énergie électrique grâce à une réaction d'oxydoréduction entre le dihydrogène $H_{2(g)}$ (combustible) et le dioxygène $O_{2(g)}$ (comburant). 

L'un des avantages majeurs de cette technologie, testée notamment sur les lignes régionales en Allemagne et en France, est son "zéro émission" direct, puisque le seul sous-produit rejeté est de la vapeur d'eau.

Nous allons étudier le fonctionnement thermodynamique et chimique d'une telle pile à hydrogène fonctionnant en milieu acide.

---

### ❓ Énoncé

Les espèces chimiques mises en jeu dans la pile sont : $H_{2(g)}$, $H^+_{(aq)}$, $O_{2(g)}$ et $H_2O_{(l)}$. Les couples oxydant/réducteur associés sont $H^+_{(aq)} / H_{2(g)}$ et $O_{2(g)} / H_2O_{(l)}$.

1. **Identification des espèces :** Rappeler la définition d'un oxydant et d'un réducteur. Identifier, pour chaque couple, l'oxydant et le réducteur.
2. **Demi-équations électroniques :** Écrire la demi-équation électronique associée à chaque couple en milieu acide. Préciser s'il s'agit d'une oxydation ou d'une réduction.
3. **Bilan de la pile :** En déduire l'équation bilan de la réaction chimique qui se produit dans la pile lorsqu'elle débite du courant.
4. **Aspect quantitatif :** Un train régional consomme une masse $m(H_2) = 5{,}0\text{ kg}$ de dihydrogène pour un trajet donné. Calculer la quantité de matière $n(H_2)$ initiale, puis déterminer la quantité d'électricité $Q$ (en Coulomb, puis en Ampère-heure) maximale que cette pile peut débiter.
   *Données :* 
   - $M(H) = 1{,}0\text{ g}\cdot\text{mol}^{-1}$
   - Constante de Faraday : $F = 96500\text{ C}\cdot\text{mol}^{-1}$
   - Charge d'une mole d'électrons : $1\text{ F} = N_A \times e$

---

### 💡 Indice

1. *Rappel de cours :* Un oxydant capte un ou plusieurs électrons, tandis qu'un réducteur en cède.
2. *Méthode :* Équilibrez d'abord l'élément chimique principal (autre que $H$ et $O$), puis ajustez les atomes d'oxygène $O$ avec des molécules d'eau $H_2O$, les atomes d'hydrogène $H$ avec des ions $H^+$, et enfin la charge électrique avec des électrons $e^-$.
3. *Bilan :* Le nombre d'électrons cédés à l'anode doit être égal au nombre d'électrons captés à la cathode.
4. *Quantité d'électricité :* $Q = n(e^-) \times F$. Attention au lien stœchiométrique entre $H_2$ et les électrons échangés. $1\text{ Ah} = 3600\text{ C}$.

---

### 📋 Correction détaillée pas à pas

#### 1. Identification des espèces
* **Définition :** Un **oxydant** est une espèce chimique capable de *capter* un ou plusieurs électrons. Un **réducteur** est une espèce chimique capable de *céder* un ou plusieurs électrons.
* Pour le couple $H^+_{(aq)} / H_{2(g)}$ : l'oxydant est l'ion $H^+$ et le réducteur est le dihydrogène $H_2$.
* Pour le couple $O_{2(g)} / H_2O_{(l)}$ : l'oxydant est le dioxygène $O_2$ et le réducteur est l'eau $H_2O$.

#### 2. Demi-équations électroniques
* À l'anode (siège de l'oxydation du dihydrogène) :
  $$H_{2(g)} = 2\,H^+_{(aq)} + 2\,e^-$$
  *(C'est bien une oxydation car il y a perte d'électrons).*

* À la cathode (siège de la réduction du dioxygène) :
  $$O_{2(g)} + 4\,H^+_{(aq)} + 4\,e^- = 2\,H_2O_{(l)}$$
  *(C'est bien une réduction car il y a gain d'électrons).*

#### 3. Équation bilan de la pile
Pour obtenir l'équation bilan sans électrons libres, il faut multiplier la première demi-équation par $2$ afin d'égaliser le nombre d'électrons échangés ($4$ électrons de chaque côté) :
$$2\,H_{2(g)} \rightarrow 4\,H^+_{(aq)} + 4\,e^-$$
$$O_{2(g)} + 4\,H^+_{(aq)} + 4\,e^- \rightarrow 2\,H_2O_{(l)}$$

En additionnant les deux demi-équations, les ions $H^+$ et les électrons $e^-$ se simplifient :
$$2\,H_{2(g)} + O_{2(g)} \rightarrow 2\,H_2O_{(l)}$$

#### 4. Aspect quantitatif
* **Quantité de matière de dihydrogène :**
  La masse molaire moléculaire du dihydrogène est $M(H_2) = 2 \times M(H) = 2{,}0\text{ g}\cdot\text{mol}^{-1}$.
  $$n(H_2) = \frac{m(H_2)}{M(H_2)} = \frac{5{,}0 \times 10^3\text{ g}}{2{,}0\text{ g}\cdot\text{mol}^{-1}} = 2500\text{ mol}$$

* **Quantité d'électricité maximale $Q$ :**
  D'après la demi-équation d'oxydation, **1 mole de $H_2$ libère 2 moles d'électrons**.
  La quantité de matière d'électrons échangés est donc :
  $$n(e^-) = 2 \times n(H_2) = 2 \times 2500 = 5000\text{ mol}$$

  La quantité d'électricité $Q$ correspond à la charge totale portée par ces électrons :
  $$Q = n(e^-) \times F = 5000\text{ mol} \times 96500\text{ C}\cdot\text{mol}^{-1} = 4{,}825 \times 10^8\text{ C}$$

  Convertissons cette valeur en Ampères-heures ($\text{Ah}$) :
  $$Q = \frac{4{,}825 \times 10^8}{3600} \approx 134\,028\text{ Ah} \approx 1{,}3 \times 10^5\text{ Ah}$$

> **Conclusion :** La consommation de $5\text{ kg}$ de dihydrogène permet de débiter une quantité d'électricité colossale d'environ $134\,000\text{ Ah}$, alimentant ainsi efficacement les moteurs électriques de la rame ferroviaire.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
