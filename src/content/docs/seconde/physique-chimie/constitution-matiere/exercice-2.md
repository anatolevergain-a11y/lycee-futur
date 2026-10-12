---
title: "Exercice 2 : Identification d'espèces chimiques et normes de sécurité"
description: "Application pratique du chapitre Constitution et transformations de la matière"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la modernisation d'un laboratoire de chimie de lycée, l'équipe technique doit vérifier la nature et la pureté de trois flacons d'étiquetage incertain, répertoriés $A$, $B$ et $C$. Ces flacons contiennent des liquides purs à $20\,^\circ\text{C}$ : soit de l'éthanol, soit du cyclohexane, soit de l'eau distillée. 

Pour identifier ces espèces sans risque majeur pour l'opérateur et l'environnement, le technicien dispose de deux types de données :
1. **Des mesures physiques macroscopiques** (densité par rapport à l'eau, température d'ébullition sous pression atmosphérique normale).
2. **Des données de sécurité** issues du Système Général Harmonisé (SGH / CLP) relatives à la manipulation de ces solvants organiques.

Le tableau ci-dessous rassemble les données bibliographiques de référence ainsi que les résultats expérimentaux obtenus lors des tests en laboratoire.

| Espèce chimique | Formule brute | Masse molaire $M$ ($\text{g}\cdot\text{mol}^{-1}$) | Densité $d$ à $20\,^\circ\text{C}$ | Température d'ébullition $T_{\text{éb}}$ ($^\circ\text{C}$) | Pictogrammes de sécurité SGH associés |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Eau** | $\text{H}_2\text{O}$ | $18,02$ | $1,00$ | $100$ | Aucun |
| **Éthanol** | $\text{C}_2\text{H}_6\text{O}$ | $46,07$ | $0,79$ | $78,3$ | ![SGH02](https://upload.wikimedia.org/wikipedia/commons/6/6f/GHS-pictogram-flame.svg) |
| **Cyclohexane**| $\text{C}_6\text{H}_{12}$ | $84,16$ | $0,78$ | $80,7$ | ![SGH02](https://upload.wikimedia.org/wikipedia/commons/6/6f/GHS-pictogram-flame.svg) ![SGH07](https://upload.wikimedia.org/wikipedia/commons/8/87/GHS-pictogram-exclam.svg) ![SGH08](https://upload.wikimedia.org/wikipedia/commons/9/9c/GHS-pictogram-silhouette.svg) ![SGH09](https://upload.wikimedia.org/wikipedia/commons/d/d8/GHS-pictogram-envir.svg) |

**Données expérimentales obtenues pour les flacons inconnus :**
* **Flacon A** : $m = 39,5\text{ g}$ mesurés pour un volume $V = 50,0\text{ mL}$. $T_{\text{éb}}$ mesurée : $78\,^\circ\text{C}$ ($\pm 1\,^\circ\text{C}$).
* **Flacon B** : $m = 50,0\text{ g}$ mesurés pour un volume $V = 50,0\text{ mL}$. $T_{\text{éb}}$ mesurée : $100\,^\circ\text{C}$ ($\pm 1\,^\circ\text{C}$).
* **Flacon C** : $m = 39,0\text{ g}$ mesurés pour un volume $V = 50,0\text{ mL}$. $T_{\text{éb}}$ mesurée : $81\,^\circ\text{C}$ ($\pm 1\,^\circ\text{C}$).

*Note critique :* Bien que l'éthanol et le cyclohexane possèdent des densités très proches à $20\,^\circ\text{C}$ ($0,79$ vs $0,78$), leurs propriétés toxicologiques et environnementales diffèrent drastiquement. L'analyse ne peut donc se baser sur une seule grandeur physique en raison des incertitudes de mesure instrumentales.

---

### ❓ Énoncé

1. **Calcul et identification rigoureuse :** 
   Calculer la masse volumique $\rho$ (en $\text{g}\cdot\text{mL}^{-1}$) puis la densité $d$ de chaque flacon ($A$, $B$ et $C$) à partir des données expérimentales. En vous aidant également des températures d'ébullition, identifiez formellement l'espèce chimique contenue dans chaque flacon.

2. **Analyse critique des limites expérimentales :** 
   Les densités expérimentales des flacons $A$ et $C$ sont extrêmement proches ($0,79$ et $0,78$). Expliquez en quoi l'utilisation d'une seule grandeur (la densité) aurait pu conduire à une erreur d'identification, et justifiez la nécessité de croiser les sources de données (ici, couplage densité et température d'ébullition).

3. **Interprétation des normes de sécurité (SGH) :** 
   Le cyclohexane (Flacon C) présente quatre pictogrammes de sécurité différents (SGH02, SGH07, SGH08, SGH09), tandis que l'éthanol (Flacon A) n'en présente qu'un seul (SGH02). 
   En analysant ces symboles, expliquez pourquoi le choix d'utiliser l'éthanol comme solvant pédagogique en lycée est souvent privilégié par rapport au cyclohexane, tout en discutant le compromis entre "risque zéro" (chimiquement impossible) et "gestion raisonnée du risque".

4. **Quantité de matière et composition microscopique :** 
   Calculer la quantité de matière $n$ (en moles) d'espèces chimiques présente dans un échantillon de $V = 10,0\text{ mL}$ de l'éthanol contenu dans le flacon $A$.

---

### 💡 Indice de méthode

* **Question 1 :** Rappelez la formule de la masse volumique $\rho = \frac{m}{V}$, puis déduisez la densité $d = \frac{\rho}{\rho_{\text{eau}}}$ sachant que $\rho_{\text{eau}} = 1,00\text{ g}\cdot\text{mL}^{-1}$ à $20\,^\circ\text{C}$. Comparez ensuite vos résultats avec le tableau de référence.
* **Question 2 :** Prenez en compte les chiffres significatifs et les incertitudes de mesure en verrerie (une éprouvette graduée ou une pipette a une incertitude). Deux valeurs numériques très proches peuvent-elles être discriminées sans un second critère physique ?
* **Question 3 :** Le pictogramme SGH08 (silhouette) indique des dangers graves pour la santé (cancérogène, mutagène ou toxique pour la reproduction), et le SGH09 indique un danger pour l'environnement aquatique. Mettez en balance la toxicité chronique et l'aspect pratique des manipulations.
* **Question 4 :** Utilisez la masse volumique pour trouver la masse de l'échantillon, puis appliquez la relation $n = \frac{m}{M}$ en utilisant la masse molaire $M$ fournie dans le tableau.

---

### 📋 Correction détaillée pas à pas

#### **1. Calculs et identification des flacons**
La masse volumique $\rho$ d'un échantillon s'exprime par la relation :
$$\rho = \frac{m}{V}$$
La densité $d$ d'un liquide par rapport à l'eau est le rapport de sa masse volumique sur celle de l'eau ($\rho_{\text{eau}} = 1,00\text{ g}\cdot\text{mL}^{-1}$) :
$$d = \frac{\rho}{\rho_{\text{eau}}}$$

* **Pour le Flacon A :**
  $$\rho_A = \frac{39,5\text{ g}}{50,0\text{ mL}} = 0,790\text{ g}\cdot\text{mL}^{-1} \implies d_A = 0,79$$
  La température d'ébullition mesurée est de $78\,^\circ\text{C}$ (valeur tabulée : $78,3\,^\circ\text{C}$).
  * **Identification :** Il s'agit de **l'éthanol**.

* **Pour le Flacon B :**
  $$\rho_B = \frac{50,0\text{ g}}{50,0\text{ mL}} = 1,00\text{ g}\cdot\text{mL}^{-1} \implies d_B = 1,00$$
  La température d'ébullition mesurée est de $100\,^\circ\text{C}$ (valeur tabulée : $100\,^\circ\text{C}$).
  * **Identification :** Il s'agit de **l'eau**.

* **Pour le Flacon C :**
  $$\rho_C = \frac{39,0\text{ g}}{50,0\text{ mL}} = 0,780\text{ g}\cdot\text{mL}^{-1} \implies d_C = 0,78$$
  La température d'ébullition mesurée est de $81\,^\circ\text{C}$ (valeur tabulée : $80,7\,^\circ\text{C}$).
  * **Identification :** Il s'agit du **cyclohexane**.

---

#### **2. Analyse critique des limites expérimentales**
Les densités de l'éthanol ($0,79$) et du cyclohexane ($0,78$) sont extrêmement proches. Dans des conditions expérimentales réelles de lycée, l'incertitude sur la mesure de la masse (balance au centigramme) et du volume (éprouvette) ne permet pas de différencier rigoureusement ces deux valeurs avec une certitude absolue. 
Se baser uniquement sur la densité aurait introduit un risque élevé de confusion. C'est pourquoi **le croisement des méthodes d'identification** (en l'occurrence, l'ajout d'une grandeur thermodynamique discriminante, la température d'ébullition) est indispensable en science expérimentale pour valider une hypothèse avec rigueur.

---

#### **3. Interprétation des normes de sécurité (SGH)**
* L'éthanol présente le pictogramme SGH02 (inflammable), ce qui impose des règles de manipulation simples (éloigner des flammes, manipuler sous hotte si nécessaire).
* Le cyclohexane cumule des dangers beaucoup plus sévères : inflammabilité (SGH02), toxicité cutanée/irritation (SGH07), danger grave pour la santé à long terme (SGH08 - effet narcotique et suspecté d'être toxique) et toxicité aiguë/chronique pour les organismes aquatiques (SGH09).
* **Compromis pédagogique :** En enseignement secondaire, le principe de précaution incite à bannir ou limiter drastiquement les substances classées SGH08 et SGH09 lorsque des alternatives moins toxiques (comme l'éthanol ou l'eau) permettent d'atteindre les objectifs pédagogiques du programme. Le risque zéro n'existe pas en chimie, mais la gestion du risque consiste à minimiser la dangerosité tout en conservant la pertinence scientifique de l'expérience.

---

#### **4. Quantité de matière dans l'échantillon d'éthanol**
1. **Détermination de la masse de l'échantillon d'éthanol ($V = 10,0\text{ mL}$) :**
   En utilisant la masse volumique de l'éthanol $\rho_{\text{éthanol}} = 0,79\text{ g}\cdot\text{mL}^{-1}$ :
   $$m = \rho \times V = 0,79\text{ g}\cdot\text{mL}^{-1} \times 10,0\text{ mL} = 7,9\text{ g}$$

2. **Calcul de la quantité de matière $n$ :**
   À l'aide de la formule liant la masse $m$ et la masse molaire $M$ ($\text{C}_2\text{H}_6\text{O} : M = 46,07\text{ g}\cdot\text{mol}^{-1}$) :
   $$n = \frac{m}{M} = \frac{7,9\text{ g}}{46,07\text{ g}\cdot\text{mol}^{-1}} \approx 0,17\text{ mol}$$

*La quantité de matière d'éthanol dans ces $10,0\text{ mL}$ est donc de $0,17\text{ mol}$ (valeur arrondie à deux chiffres significatifs en cohérence avec la précision de la mesure de masse volumique).*

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
