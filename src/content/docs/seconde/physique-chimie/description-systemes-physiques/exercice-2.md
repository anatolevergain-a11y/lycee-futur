---
title: "Exercice 2 : Pression dans les fluides et plongée sous-marine"
description: "Application pratique du chapitre Description des systèmes physiques"
---

### 🌐 Contexte & Données scientifiques

En plongée sous-marine, la compréhension des variations de pression est un impératif de sécurité vital. Contrairement à l'air, l'eau est un fluide quasi-incompressible dont la masse volumique est nettement supérieure à celle de l'atmosphère. 

Lors de la descente, le plongeur subit une augmentation de la pression hydrostatique qui s'ajoute à la pression atmosphérique régnant à la surface. L'analyse rigoureuse de ce système physique permet d'anticiper les effets physiologiques de la pression sur les gaz et les tissus corporels (loi de Boyle-Mariotte, solubilité des gaz).

**Données et constantes physiques :**
* Pression atmosphérique normale de surface : `$P_0 = 1{,}013 \times 10^5 \text{ Pa}$` (souvent arrondie à `$1{,}0 \text{ bar}$` dans la pratique, avec `$1 \text{ bar} = 10^5 \text{ Pa}$`).
* Masse volumique de l'eau de mer : `$\rho = 1{,}025 \times 10^3 \text{ kg} \cdot \text{m}^{-3}$`.
* Intensité de la pesanteur terrestre : `$g = 9{,}81 \text{ N} \cdot \text{kg}^{-1}$`.
* Modèle de la pression hydrostatique : la variation de pression `$P(z)$` à une profondeur (ou immersion) `$z$` (en mètres) est régie par la relation fondamentale de la statique des fluides :
  $$P(z) = P_0 + \rho \cdot g \cdot z$$

*Note critique sur le modèle :* Ce modèle suppose que la masse volumique `$\rho$` est constante (fluide rigoureusement incompressible) et que le champ de pesanteur `$g$` est uniforme. Bien que scientifiquement robuste pour les profondeurs usuelles de plongée de loisir (`$z \le 60 \text{ m}$`), il néglige les variations locales de salinité et de température de l'eau, qui influencent marginalement la masse volumique `$\rho$`.

---

### ❓ Énoncé

1. **Analyse dimensionnelle et ordre de grandeur :** Rappeler l'expression littérale de la pression hydrostatique. Vérifier par une analyse dimensionnelle que le terme `$\rho \cdot g \cdot z$` est homogène à une pression (exprimée en Pascals, `$\text{Pa}$`).
2. **Calcul de pression absolue :** Un plongeur s'immerge à une profondeur `$z = 30 \text{ m}$` en mer. 
   * a. Calculer la pression hydrostatique exercée par l'eau seule à cette profondeur.
   * b. En déduire la pression absolue totale subie par le plongeur, exprimée en Pascals, puis en bars.
3. **Application de la règle pratique des plongeurs :** Les manuels de plongée affirment souvent qu'une variation de profondeur de `$10 \text{ m}$` en eau de mer correspond à une augmentation de pression d'environ `$1 \text{ bar}$`. 
   * a. À l'aide des données de l'exercice, calculez la pression exercée pour une profondeur de `$10 \text{ m}$` selon le modèle physique exact.
   * b. Discutez de la validité, des limites et de l'intérêt pédagogique/pratique de cette règle empirique du "bar par dizaine de mètres" face au calcul exact.
4. **Conséquence sur un système gazeux :** Avant la plongée, un bloc de plongée rigide contient un volume d'air `$V_1 = 12 \text{ L}$` à la pression de surface `$P_1 = 1{,}0 \text{ bar}$`. En admettant que la température reste constante, quel serait le volume théorique qu'occuperait cette même quantité de gaz si elle était soumise à la pression régnant à `$30 \text{ m}$` de profondeur ? Commentez ce résultat au regard de la physiologie humaine.

---

### 💡 Indice de méthode

* **Question 1 :** Exprimez les unités de chaque grandeur en unités du Système International (SI) : `$\rho$` en `$\text{kg} \cdot \text{m}^{-3}$`, `$g$` en `$\text{m} \cdot \text{s}^{-2}$` (ou `$\text{N} \cdot \text{kg}^{-1}$`), et `$z$` en `$\text{m}$`. Rappelez qu'un Pascal équivaut à un Newton par mètre carré (`$\text{N} \cdot \text{m}^{-2}$`).
* **Question 2 :** Veillez à bien distinguer la pression *hydrostatique* (liée uniquement à la hauteur d'eau) de la pression *absolue* (qui prend en compte l'atmosphère au-dessus de la surface).
* **Question 3 :** Faites le rapport entre la variation de pression pour `$10 \text{ m}$` et `$1 \text{ bar}$` (`$10^5 \text{ Pa}$`) pour quantifier l'écart relatif.
* **Question 4 :** Utilisez la loi de Boyle-Mariotte étudiée dans le chapitre sur les systèmes gazeux : le produit de la pression par le volume reste constant pour une quantité de matière et une température données (`$P_1 \cdot V_1 = P_2 \cdot V_2$`).

---

### 📋 Correction détaillée pas à pas

1. **Analyse dimensionnelle :**
   * L'expression de la pression hydrostatique est : 
     $$P_{\text{hydro}} = \rho \cdot g \cdot z$$
   * Analysons les dimensions (notées avec des crochets `[...]`) :
     * `$[\rho] = \text{M} \cdot \text{L}^{-3}$` (masse par unité de volume)
     * `$[g] = \text{L} \cdot \text{T}^{-2}$` (accélération)
     * `$[z] = \text{L}$` (longueur)
   * En combinant ces dimensions :
     $$[\rho \cdot g \cdot z] = (\text{M} \cdot \text{L}^{-3}) \cdot (\text{L} \cdot \text{T}^{-2}) \cdot \text{L} = \text{M} \cdot \text{L}^{-1} \cdot \text{T}^{-2}$$
   * Or, une pression est une force par unité de surface : `$P = \frac{F}{S}$`. 
     * Dimension d'une force : `$[F] = \text{M} \cdot \text{L} \cdot \text{T}^{-2}$` (loi de Newton `$F = m \cdot a$`)
     * Dimension d'une surface : `$[S] = \text{L}^2$`
     * Donc `$[P] = \frac{\text{M} \cdot \text{L} \cdot \text{T}^{-2}}{\text{L}^2} = \text{M} \cdot \text{L}^{-1} \cdot \text{T}^{-2}$`.
   * L'analyse dimensionnelle est validée : le terme `$\rho \cdot g \cdot z$` est bien homogène à une pression.

2. **Calcul de pression absolue à `$30 \text{ m}$` :**
   * a. Pression hydrostatique pour `$z = 30 \text{ m}$` :
     $$P_{\text{hydro}} = (1{,}025 \times 10^3 \text{ kg} \cdot \text{m}^{-3}) \times (9{,}81 \text{ N} \cdot \text{kg}^{-1}) \times (30 \text{ m})$$
     $$P_{\text{hydro}} \approx 301 \ 642{,}5 \text{ Pa} \approx 3{,}02 \times 10^5 \text{ Pa}$$
   * b. Pression absolue totale `$P_{\text{abs}}$` :
     $$P_{\text{abs}} = P_0 + P_{\text{hydro}} = 1{,}013 \times 10^5 + 3{,}016 \times 10^5 = 4{,}029 \times 10^5 \text{ Pa}$$
     En convertissant en bars sachant que `$1 \text{ bar} = 10^5 \text{ Pa}$` :
     $$P_{\text{abs}} \approx 4{,}03 \text{ bars}$$

3. **Validation de la règle pratique :**
   * a. Calculons la pression hydrostatique pour `$z = 10 \text{ m}$` :
     $$P_{\text{hydro, 10m}} = 1{,}025 \times 10^3 \times 9{,}81 \times 10 \approx 100 \ 552{,}5 \text{ Pa} \approx 1{,}01 \times 10^5 \text{ Pa} \approx 1{,}01 \text{ bar}$$
   * b. **Esprit critique et analyse du modèle :** La règle empirique qui consiste à compter « `$1 \text{ bar}$` par tranche de `$10 \text{ m}$` » constitue une approximation très commode pour le calcul mental en situation opérationnelle d'urgence sous l'eau. 
     * *Écart et limites :* L'erreur relative commise en arrondissant `$1{,}01 \text{ bar}$` (ou `$1{,}025 \text{ bar}$` selon la salinité exacte) à `$1{,}0 \text{ bar}$` est inférieure à `$3 \%$` à `$10 \text{ m}$`. Cependant, cette erreur s'accumule avec la profondeur. À `$40 \text{ m}$`, l'approximation donne `$4 \text{ bars}$` d'eau `$+\ 1 \text{ bar}$` d'air soit `$5 \text{ bars}$`, alors que le calcul rigoureux donne `$4{,}03 + 1{,}01 = 5{,}04 \text{ bars}$`. 
     * *Conclusion :* Le modèle simplifié est parfaitement valide et sécuritaire pour la plongée de loisir, car les marges de sécurité physiologiques intègrent largement ces incertitudes de calcul mental.

4. **Conséquence sur un système gazeux (Loi de Boyle-Mariotte) :**
   * D'après la loi de Boyle-Mariotte (à température constante) :
     $$P_1 \cdot V_1 = P_2 \cdot V_2$$
   * On cherche `$V_2$`, le volume du gaz à la pression `$P_2 = P_{\text{abs}} \approx 4{,}03 \text{ bars}$` (ou `$4{,}029 \times 10^5 \text{ Pa}$`) :
     $$V_2 = \frac{P_1 \cdot V_1}{P_2} = \frac{1{,}013 \times 10^5 \text{ Pa} \times 12 \text{ L}}{4{,}029 \times 10^5 \text{ Pa}}$$
     $$V_2 \approx 3{,}02 \text{ L}$$
   * *Commentaire physiologique :* Le volume du gaz est divisé par environ `$4$` entre la surface et `$30 \text{ m}$`. Inversement, si un plongeur bloquait sa respiration en remontant de `$30 \text{ m}$` vers la surface, le volume d'air contenu dans ses poumons would be multiplied by `$4$`, entraînant un risque majeur de surpression pulmonaire. C'est pourquoi la règle d'or absolue en plongée est de **ne jamais retenir sa respiration lors de la remontée**.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
