---
title: "Exercice 2 : Rendement des panneaux solaires photovoltaïques"
description: "Application pratique du chapitre Physique quantique et effet photoélectrique"
---

### 🌐 Contexte & Données scientifiques

L'effet photoélectrique, mis en évidence par Albert Einstein en 1905, constitue le principe fondamental de conversion de l'énergie lumineuse en énergie électrique au sein d'une cellule photovoltaïque. Lorsqu'un matériau semiconducteur est éclairé par un rayonnement électromagnétique dont la fréquence dépasse un seuil caractéristique, des électrons sont arrachés, créant ainsi un courant électrique.

Cependant, le rendement global d'un panneau solaire commercial standard (silicium cristallin) plafonne généralement entre $15 \text{ \%}$ et $22 \text{ \%}$ sous des conditions de test standard (STC). Cet exercice propose d'analyser les facteurs physiques et quantiques limitant cette efficacité énergétique, en s'affranchissant des visions purement technologiques pour analyser le problème par la physique des ondes et des photons.

**Données et constantes physiques :**
* Constante de Planck : $h \approx 6{,}626 \times 10^{-34} \text{ J}\cdot\text{s}$
* Célébration de la lumière dans le vide : $c \approx 3{,}00 \times 10^8 \text{ m}\cdot\text{s}^{-1}$
* Charge élémentaire : $e \approx 1{,}60 \times 10^{-19} \text{ C}$
* Puissance surfacique radiative reçue au sol (ensoleillement maximal standard) : $P_{\text{reçue}} \approx 1000 \text{ W}\cdot\text{m}^{-2}$
* Longueur d'onde maximale (seuil photoélectrique) du silicium pur : $\lambda_{\text{seuil}} \approx 1100 \text{ nm}$
* Bande interdite (gap) du silicium à $T = 300 \text{ K}$ : $E_g \approx 1{,}12 \text{ eV}$

---

### ❓ Énoncé

1. **Analyse énergétique du photon incident :**
   Calculer, en joules puis en électronvolts ($\text{eV}$), l'énergie d'un photon appartenant à la partie visible du spectre solaire, pris pour référence à une longueur d'onde $\lambda = 550 \text{ nm}$. Comparer cette énergie à la bande interdite $E_g$ du silicium. Quel est le devenir qualitatif de l'excès d'énergie pour les photons dont l'énergie est supérieure à $E_g$ ?

2. **Étude du seuil photoélectrique et de la tension maximale :**
   En déduire la fréquence minimale $\nu_{\text{seuil}}$ et la longueur d'onde maximale $\lambda_{\text{seuil}}$ permettant d'observer l'effet photoélectrique dans le silicium. Expliquer pourquoi les photons infrarouges de longueur d'onde $\lambda > 1100 \text{ nm}$ ne contribuent pas à la production d'électricité dans ce matériau.

3. **Modélisation du rendement quantique et énergétique :**
   On considère un panneau solaire en silicium d'une surface utile $S = 1{,}6 \text{ m}^2$. Soumis à un éclairement de $P_{\text{reçue}} = 1000 \text{ W}\cdot\text{m}^{-2}$, ce panneau délivre une puissance électrique maximale $P_{\text{élec}} = 240 \text{ W}$.
   Calculer le rendement énergétique global $\eta$ de ce dispositif. Discuter brièvement de l'écart entre cette valeur expérimentale et les limites théoriques du modèle (notamment la limite de Shockley-Queisser).

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez la relation de Planck-Einstein liant l'énergie $E$ d'un photon à la longueur d'onde $\lambda$ : $E = \frac{h \cdot c}{\lambda}$. Pour la conversion d'unités, rappelez-vous que $1 \text{ eV} = 1{,}60 \times 10^{-19} \text{ J}$.
* **Question 2 :** Le seuil photoélectrique correspond à l'énergie minimale nécessaire pour arracher un électron de la bande de valence à la bande de conduction, soit $E_{\text{min}} = E_g$.
* **Question 3 :** Le rendement énergétique $\eta$ se définit comme le rapport entre la puissance électrique utile fournie et la puissance radiative incidente totale reçue sur la surface du panneau : $\eta = \frac{P_{\text{élec}}}{P_{\text{incidente}}}$.

---

### 📋 Correction détaillée pas à pas

1. **Analyse énergétique du photon incident :**
   * L'énergie $E_{\text{ph}}$ d'un photon de longueur d'onde $\lambda = 550 \text{ nm}$ s'exprime par :
     $$E_{\text{ph}} = \frac{h \cdot c}{\lambda}$$
   * A.N. : 
     $$E_{\text{ph}} = \frac{6{,}626 \times 10^{-34} \times 3{,}00 \times 10^8}{550 \times 10^{-9}} \approx 3{,}614 \times 10^{-19} \text{ J}$$
   * Conversion en électronvolts ($\text{eV}$) en divisant par la charge élémentaire $e$ :
     $$E_{\text{ph}} = \frac{3{,}614 \times 10^{-19}}{1{,}60 \times 10^{-19}} \approx 2{,}26 \text{ eV}$$
   * Comparaison : Cette énergie ($2{,}26 \text{ eV}$) est supérieure à la bande interdite du silicium ($E_g = 1{,}12 \text{ eV}$). 
   * **Bilan énergétique et limite du modèle :** L'énergie excédentaire ($\Delta E = E_{\text{ph}} - E_g \approx 1{,}14 \text{ eV}$) n'est pas convertie en énergie électrique. Elle est immédiatement dissipée sous forme de chaleur (agitation thermique par phonons au sein du réseau cristallin). C'est l'une des causes majeures de la perte de rendement des cellules photovoltaïques simples.

2. **Étude du seuil photoélectrique :**
   * La condition minimale pour arracher un électron dans le silicium est que l'énergie du photon incident soit au moins égale au travail de sortie ou gap énergétique $E_g$ :
     $$h \cdot \nu_{\text{seuil}} = E_g \implies \nu_{\text{seuil}} = \frac{E_g}{h}$$
   * A.N. :
     $$E_g = 1{,}12 \times 1.60 \times 10^{-19} = 1{,}792 \times 10^{-19} \text{ J}$$
     $$\nu_{\text{seuil}} = \frac{1{,}792 \times 10^{-19}}{6{,}626 \times 10^{-34}} \approx 2{,}70 \times 10^{14} \text{ Hz}$$
   * Pour la longueur d'onde maximale $\lambda_{\text{seuil}}$ :
     $$\lambda_{\text{seuil}} = \frac{c}{\nu_{\text{seuil}}} = \frac{c \cdot h}{E_g}$$
   * A.N. :
     $$\lambda_{\text{seuil}} = \frac{3{,}00 \times 10^8 \times 6{,}626 \times 10^{-34}}{1{,}792 \times 10^{-19}} \approx 1{,}11 \times 10^{-6} \text{ m} = 1110 \text{ nm}$$
   * **Analyse critique :** Les photons dont la longueur d'onde est supérieure à $1100 \text{ nm}$ possèdent une énergie inférieure à $E_g$. Ils traversent le matériau semiconducteur sans interagir de manière suffisante pour libérer d'électrons : ils ne participent donc pas à l'effet photoélectrique, ce qui constitue une seconde source incontournable de perte inhérente au spectre solaire global.

3. **Modélisation du rendement quantique et énergétique :**
   * La puissance radiative totale reçue par le panneau $P_{\text{incidente}}$ se calcule à partir de l'éclairement et de la surface $S$ :
     $$P_{\text{incidente}} = P_{\text{reçue}} \cdot S$$
   * A.N. :
     $$P_{\text{incidente}} = 1000 \times 1{,}6 = 1600 \text{ W}$$
   * Le rendement énergétique global $\eta$ du panneau est le rapport entre la puissance électrique délivrée et la puissance incidente :
     $$\eta = \frac{P_{\text{élec}}}{P_{\text{incidente}}}$$
   * A.N. :
     $$\eta = \frac{240}{1600} = 0{,}15 \text{ soit } 15 \text{ \%}$$
   * **Esprit critique et limites du modèle :** Un rendement de $15 \text{ \%}$ est cohérent avec les technologies standards. La limite théorique de Shockley-Queisser démontre qu'une cellule à jonction simple en silicium ne peut, pour des raisons purement thermodynamiques et quantiques (liées au compromis entre l'absorption du spectre et la thermalisation des photons énergétiques), excéder un rendement maximal d'environ $33 \text{ \%}$ sous un rayonnement solaire non concentré. De surcroît, les conditions réelles d'exploitation (augmentation de la température du panneau diminuant la tension, réflexions optiques à la surface, résistances séries) abaissent encore cette valeur en pratique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
