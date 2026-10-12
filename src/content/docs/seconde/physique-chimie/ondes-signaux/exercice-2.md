---
title: "Exercice 2 : Ondes sonores, fréquence et décibels"
description: "Application pratique du chapitre Ondes et signaux"
---

### 🌐 Contexte & Données scientifiques

L'audition humaine est un système sensoriel complexe capable de percevoir des vibrations mécaniques de l'air, appelées ondes sonores. Ces ondes se caractérisent physiquement par leur fréquence $f$ (exprimée en hertz, $\text{Hz}$) et leur niveau d'intensité sonore $L$ (exprimé en décibels, $\text{dB}$). 

Cependant, la perception auditive humaine est loin d'être linéaire. D'une part, l'échelle des décibels est une échelle logarithmique liée à la sensibilité de l'oreille. D'autre part, l'oreille humaine ne perçoit pas toutes les fréquences avec la même efficacité : sa sensibilité est maximale dans la zone des fréquences médiales (entre $1000\text{ Hz}$ et $4000\text{ Hz}$), ce qui correspond aux fréquences de la voix humaine.

Dans le cadre de l'étude de l'acoustique environnementale et de la santé publique, les autorités sanitaires fixent des seuils d'exposition pour prévenir les traumatismes auditifs (otologiques). La mise en place de politiques de prévention ou d'isolation acoustique (dans les salles de concert ou les habitations) repose sur des compromis technologiques et économiques complexes : l'efficacité totale de l'isolation a un coût financier et environnemental élevé, nécessitant de définir des seuils de tolérance d'exposition mesurés et discutés scientifiquement.

**Données et formulaire :**
* Célérité du son dans l'air à $20\text{^\circ}C$ : $v = 343\text{ m}\cdot\text{s}^{-1}$
* Définition de la période $T$ associée à une fréquence $f$ : 
  $$T = \frac{1}{f}$$
* Relation entre la longueur d'onde $\lambda$, la célérité $v$ et la fréquence $f$ : 
  $$\lambda = \frac{v}{f}$$
* Échelle logarithmique du niveau d'intensité sonore (rappel qualitatif en classe de Seconde : l'addition de deux sources sonores identiques de même niveau $L$ augmente ce niveau de $+3\text{ dB}$, et non de son double).

---

### ❓ Énoncé

1. **Analyse spectrale d'un signal musical :** Un diapason étalon émet un son pur à une fréquence $f_1 = 440\text{ Hz}$ (le *La* de référence). Un synthétiseur émet un second son de fréquence $f_2 = 220\text{ Hz}$. 
   Calculer la période temporelle $T_1$ du son émis par le diapason ainsi que la longueur d'onde $\lambda_2$ du son émis par le synthétiseur dans l'air. Comment qualifie-t-on la relation de hauteur entre ces deux notes en acoustique musicale ?

2. **Propagation et limites du modèle :** Un observateur se situe à une distance $d = 343\text{ m}$ d'une estéro-batterie (source sonore). 
   Calculer le temps mis par le son pour parcourir cette distance. Pourquoi peut-on affirmer que ce calcul repose sur un modèle idéal ? Citez deux grandeurs physiques influençant la réalité de cette propagation en milieu extérieur.

3. **Étude énergétique et exposition sonore :** Lors d'un concert, le niveau d'intensité sonore mesuré à proximité d'une estrade est de $L_1 = 90\text{ dB}$. 
   Si l'on double le nombre de sources sonores identiques (par exemple en faisant jouer deux groupes d'instruments similaires produisant la même intensité), le niveau sonore passe à $L_2 = 93\text{ dB}$. 
   Sachant que la réglementation du travail fixe à $80\text{ dB}$ (sur 8 heures) le seuil à partir duquel le port de protections auditives est obligatoire, discutez de la pertinence de se fier uniquement à une mesure en décibels pour évaluer le risque de fatigue auditive, en intégrant la notion de fréquence.

---

### 💡 Indice de méthode

* **Question 1 :** Veillez à bien identifier les formules du cours reliant fréquence, période et longueur d'onde. Attention aux unités : la fréquence doit être en hertz ($\text{Hz}$ ou $\text{s}^{-1}$) pour obtenir un résultat en secondes ou en mètres.
* **Question 2 :** Utilisez la formule de la vitesse moyenne d'un mouvement uniforme ($v = \frac{d}{\Delta t}$). Pour l'esprit critique, pensez aux conditions météorologiques (vent, température).
* **Question 3 :** Analytez l'énoncé : l'échelle des décibels n'est pas linéaire. Pour l'argumentation critique, rappelez-vous que deux sons de même niveau en décibels n'ont pas forcément la même composition fréquentielle, or l'oreille humaine n'est pas endommagée de la même manière par des basses fréquences et par des hautes fréquences.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la période et de la longueur d'onde
* **Calcul de la période $T_1$ du diapason ($f_1 = 440\text{ Hz}$) :**
  $$T_1 = \frac{1}{f_1} = \frac{1}{440} \approx 2{,}27 \times 10^{-3}\text{ s} \quad (\text{soit } 2{,}27\text{ ms})$$

* **Calcul de la longueur d'onde $\lambda_2$ du synthétiseur ($f_2 = 220\text{ Hz}$) :**
  $$\lambda_2 = \frac{v}{f_2} = \frac{343}{220} \approx 1{,}56\text{ m}$$

* **Analyse musicale :** La fréquence $f_2$ est exactement la moitié de la fréquence $f_1$ ($220 = \frac{440}{2}$). En acoustique, le son du synthétiseur est donc situé exactement une **octave** en dessous du *La* 440.

#### 2. Temps de propagation et limites du modèle
* **Calcul du temps de parcours :**
  La relation littérale est $v = \frac{d}{\Delta t}$, soit $\Delta t = \frac{d}{v}$.
  $$\Delta t = \frac{343\text{ m}}{343\text{ m}\cdot\text{s}^{-1}} = 1\text{ s}$$
  Le son met exactement $1$ seconde pour parcourir cette distance.

* **Analyse critique du modèle :** 
  Ce calcul utilise un modèle idéal (milieu homogène, stationnaire et non atténuateur). Dans la réalité, la propagation du son en plein air est influencée par :
  1. *La température de l'air* : la célérité $v$ dépend de la température ($v \approx 20 \times \sqrt{273 + \theta}$), elle n'est donc pas strictement constante à $343\text{ m}\cdot\text{s}^{-1}$ si la température varie.
  2. *Les conditions météorologiques* (le vent et l'humidité) ainsi que *l'atténuation géométrique et atmosphérique* (absorption par l'air et obstacles), qui font que l'énergie de l'onde diminue au cours du trajet.

#### 3. Évaluation du risque et esprit critique
* **Analyse de la mesure en décibels :**
  Le niveau de $93\text{ dB}$ mesuré dépasse largement le seuil réglementaire de $80\text{ dB}$. Le risque de lésion auditive est donc statistiquement avéré pour une exposition prolongée.

* **Discussion scientifique sur les limites du décibel ($\text{dB}$) :**
  Le décibels acoustiques bruts mesurent une intensité globale, mais ne renseignent pas sur le **contenu fréquentiel** du son. 
  * D'une part, l'oreille humaine possède une sensibilité variable selon la fréquence (les courbes d'isosonie montrent qu'elle est beaucoup plus vulnérable aux fréquences comprises entre $2000\text{ Hz}$ et $5000\text{ Hz}$).
  * D'autre part, deux sons ayant le même niveau en décibels (mesurés avec un filtre standard $dB(A)$ qui corrige partiellement cette sensibilité) peuvent avoir des impacts biologiques différents selon qu'ils sont continus, impulsionnels (bruits de choc), ou riches en harmoniques aigus. 
  * *Conclusion critique :* Le décibel est un indicateur quantitatif indispensable mais **insuffisant** à lui seul pour caractériser la gêne réelle ou la dangerosité biologique d'un environnement sonore ; il doit être complété par une analyse spectrale (fréquence par fréquence) et temporelle.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
