---
title: "Exercice 1 : Photons et quantification des niveaux d'énergie"
description: "Application pratique du chapitre Physique quantique et effet photoélectrique"
---

### 🌐 Contexte & Données scientifiques

L'étude des spectres d'émission et d'absorption des éléments chimiques a conduit, au début du XXe siècle, à l'abandon progressif de la physique classique au profit du modèle quantique. Dans le modèle de Bohr, appliqué à l'atome d'hydrogène (et étendu aux ions hydrogénoïdes), l'énergie de l'électron n'est pas continue mais quantifiée. 

Lorsqu'un atome absorbe un photon d'énergie strictement égale à la différence d'énergie entre deux niveaux quantifiés $E_i$ et $E_f$ (avec $E_f > E_i$), l'électron effectue une transition vers un état excité. Inversement, lors de la désexcitation, un photon est émis.

La spectroscopie moderne utilise ces principes pour l'analyse chimique, mais l'interprétation des signaux expérimentaux nécessite de prendre en compte les limites des modèles théoriques (élargissement spectral, interactions avec l'environnement, incertitudes instrumentales).

**Données physiques et constantes fondamentales :**
* Constante de Planck : $h \approx 6{,}626 \times 10^{-34} \text{ J}\cdot\text{s}$
* Célébration de la lumière dans le vide : $c \approx 3{,}00 \times 10^8 \text{ m}\cdot\text{s}^{-1}$
* Unité électronvolt : $1 \text{ eV} = 1{,}602 \times 10^{-19} \text{ J}$
* Énergies des niveaux quantifiés de l'atome d'hydrogène (modèle de Bohr) : 
  $$E_n = -\frac{13{,}6}{n^2} \text{ eV} \quad \text{avec } n \in \mathbb{N}^*$$

---

### ❓ Énoncé

1. **Analyse énergétique d'une transition :** Calculer, en électronvolts ($\text{eV}$) puis en joules ($\text{J}$), l'énergie du photon nécessaire pour provoquer une transition de l'électron de l'atome d'hydrogène depuis son état fondamental ($n = 1$) vers le premier état excité ($n = 2$).
2. **Caractérisation de la radiation :** En déduire la longueur d'onde $\lambda$ dans le vide (exprimée en nanomètres) de cette radiation. À quel domaine du spectre électromagnétique cette radiation appartient-elle ?
3. **Limite d'ionisation et hypothèse du modèle :** Déterminer l'énergie minimale (en $\text{eV}$) qu'un photon incident doit posséder pour ioniser un atome d'hydrogène initialement au repos dans son état fondamental. Discuter brièvement de la pertinence du modèle de Bohr pour des atomes polyélectroniques.
4. **Analyse critique et confrontation à l'expérience :** Dans une expérience de décharge gaz-hydrogène, on observe que certaines raies spectrales théoriquement prévues par le calcul possèdent une largeur non nulle ($\Delta\lambda \approx 0{,}05 \text{ nm}$). Proposer deux causes physiques distinctes susceptibles d'expliquer cet écart entre le modèle idéal (niveaux strictement stationnaires) et la mesure expérimentale.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez la relation de quantification des niveaux d'énergie de Bohr : $\Delta E = E_f - E_i$. Veillez à bien identifier $E_1$ et $E_2$.
* **Question 2 :** Reliez l'énergie du photon à sa longueur d'onde via la relation de Planck-Einstein : $E = \frac{hc}{\lambda}$. Isolez $\lambda$.
* **Question 3 :** L'ionisation correspond à l'arrachement complet de l'électron, ce qui équivaut mathématiquement à un état final de niveau quantique $n \to +\infty$.
* **Question 4 :** Mobilisez vos connaissances sur l'agitation thermique (effet Doppler) et la durée de vie finie des états excités (principe d'incertitude de Heisenberg).

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse énergétique de la transition ($n = 1 \to n = 2$)
L'énergie de la transition est donnée par la variation d'énergie entre le niveau final ($n = 2$) et le niveau initial ($n = 1$) :
$$\Delta E = E_2 - E_1$$

En appliquant la formule de Bohr :
* $E_1 = -\frac{13{,}6}{1^2} = -13{,}6 \text{ eV}$
* $E_2 = -\frac{13{,}6}{2^2} = -\frac{13{,}6}{4} = -3{,}40 \text{ eV}$

On calcule alors la différence :
$$\Delta E = -3{,}40 - (-13{,}6) = +10{,}2 \text{ eV}$$

Conversion en joules ($\text{J}$) :
$$\Delta E = 10{,}2 \times 1{,}602 \times 10^{-19} \approx 1{,}63 \times 10^{-18} \text{ J}$$

#### 2. Caractérisation de la radiation associée
L'énergie du photon absorbé est égale à la variation d'énergie de l'atome ($\Delta E = E_{\text{photon}}$). Or, $E_{\text{photon}} = \frac{hc}{\lambda}$. On en déduit la longueur d'onde :
$$\lambda = \frac{hc}{\Delta E}$$

A.N. :
$$\lambda = \frac{6{,}626 \times 10^{-34} \times 3{,}00 \times 10^8}{1{,}63 \times 10^{-18}} \approx 1{,}219 \times 10^{-7} \text{ m} = 122 \text{ nm}$$

Cette radiation se situe dans le domaine des **ultraviolets** (plus précisément dans la série de Lyman).

#### 3. Limite d'ionisation et discussion du modèle
L'ionisation correspond au passage de l'électron du niveau $n = 1$ vers le niveau $n = +\infty$ (où l'énergie de l'électron lié est nulle, l'électron étant infiniment éloigné du proton).
$$E_{\text{ionisation}} = E_{\infty} - E_1 = 0 - (-13{,}6 \text{ eV}) = 13{,}6 \text{ eV}$$

* **Discussion sur le modèle :** Le modèle de Bohr, bien que performant pour l'atome d'hydrogène (un système mono-électronique), échoue à prédire rigoureusement les niveaux d'énergie des atomes polyélectroniques. En effet, il néglige les interactions électrostatiques répulsives entre les électrons ainsi que les effets quantiques relativistes et de spin, nécessitant le passage à la mécanique quantique ondulatoire (équation de Schrödinger).

#### 4. Analyse critique de l'élargissement spectral
L'écart entre le modèle théorique (raies infiniment fines) et la mesure expérimentale ($\Delta\lambda \neq 0$) s'explique par plusieurs facteurs physiques :
1. **L'élargissement thermique (effet Doppler) :** Les atomes du gaz sont en mouvement thermique incessant. Selon que l'atome se rapproche ou s'éloigne du détecteur lors de l'émission du photon, la fréquence perçue est modifiée par effet Doppler, entraînant un étalement statistique des longueurs d'onde mesurées.
2. **L'élargissement naturel (principe d'incertitude) :** Un état excité a une durée de vie $\Delta t$ finie. D'après la relation d'indétermination de Heisenberg ($\Delta E \cdot \Delta t \gtrsim \hbar$), l'énergie de l'état excité possède une incertitude intrinsèque, ce qui se traduit par une incertitude sur l'énergie du photon émis et donc une largeur spectrale non nulle.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
