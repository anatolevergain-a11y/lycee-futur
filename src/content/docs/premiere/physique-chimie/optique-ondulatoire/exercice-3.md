---
title: "Exercice 3 : Émissions de photons et niveaux d'énergie"
description: "Application pratique du chapitre Lumière : ondes et particules"
---

### 🌐 Contexte & Données scientifiques

L'étude des spectres d'émission et d'absorption des éléments chimiques a constitué l'une des pierres angulaires du développement de la physique quantique au début du XXe siècle. Le modèle de Bohr, puis la mécanique ondulatoire, ont permis de formaliser l'idée que l'énergie d'un système lié (comme un atome) est quantifiée.

Lorsqu'un atome subit une désexcitation d'un niveau d'énergie supérieur $E_{sup}$ vers un niveau d'énergie inférieur $E_{inf}$, il émet un photon dont l'énergie $\Delta E$ est rigoureusement égale à la différence entre ces deux niveaux, conformément à la relation de Planck-Einstein :

$$\Delta E = E_{sup} - E_{inf} = h \cdot \nu = \frac{h \cdot c}{\lambda}$$

*Données physiques et constantes fondamentales :*
* Constante de Planck : $h \approx 6,626 \times 10^{-34} \text{ J}\cdot\text{s}$
* Célérité de la lumière dans le vide : $c \approx 3,00 \times 10^8 \text{ m}\cdot\text{s}^{-1}$
* 1 électronvolt ($\text{eV}$) $\approx 1,602 \times 10^{-19} \text{ J}$
* Domaine du visible : longueurs d'onde $\lambda$ comprises approximativement entre $400 \text{ nm}$ (violet) et $800 \text{ nm}$ (rouge).

Dans le cadre de l'analyse spectrale, l'utilisation de ce modèle permet d'identifier la composition chimique d'étoiles lointaines ou de gaz en laboratoire. Néanmoins, l'interprétation rigoureuse des spectres réels doit intégrer des limites expérimentales (élargissement des raies spectrales dû à l'effet Doppler, incertitudes de mesure sur les intensités lumineuses) et des considérations thermodynamiques (populations des niveaux excités selon la loi de Boltzmann).

---

### ❓ Énoncé

On considère un gaz rare dont les quatre premiers niveaux d'énergie électroniques sont donnés par les valeurs suivantes, exprimées en électronvolts ($\text{eV}$) par rapport à l'état fondamental ($E_1 = 0 \text{ eV}$) :
* $E_1 = 0,00 \text{ eV}$ (état fondamental)
* $E_2 = 3,02 \text{ eV}$
* $E_3 = 4,86 \text{ eV}$
* $E_4 = 5,54 \text{ eV}$

**1.** Rappeler l'expression littérale reliant la variation d'énergie $\Delta E$ d'une transition entre deux niveaux à la longueur d'onde $\lambda$ du photon émis, en précisant les unités légales du Système International (SI). Calculer en Joules $(\text{J})$ l'énergie correspondant au niveau $E_3$.

**2.** Déterminer toutes les transitions possibles lors d'une désexcitation de ce système depuis le niveau $E_4$ jusqu'à l'état fondamental $E_1$. Calculer, pour chacune de ces transitions, la longueur d'onde (en nanomètres) du photon émis.

**3.** Parmi les radiations émises calculées à la question précédente, identifier celle(s) qui appartient (appartiennent) au domaine visible. Discuter de la pertinence de ce modèle théorique simple pour analyser le spectre d'émission réel d'une lampe à décharge contenant ce gaz, en mentionnant au moins un facteur physique susceptible de modifier ou d'élargir les raies observées expérimentalement.

---

### 💡 Indice de méthode

* **Question 1 :** Veillez à convertir l'énergie de l'électronvolt ($\text{eV}$) vers le Joule ($\text{J}$) en utilisant la charge élémentaire comme facteur de conversion ($1 \text{ eV} = 1,602 \times 10^{-19} \text{ J}$).
* **Question 2 :** Listez l'ensemble des chemins de désexcitation possibles (directs ou intermédiaires) depuis $E_4$. Pour chaque transition, calculez $\Delta E$ en Joules avant d'isoler $\lambda$.
* **Question 3 :** Convertissez les longueurs d'onde obtenues en nanomètres ($\text{nm}$) pour les comparer à l'intervalle $[400 \text{ nm} ; 800 \text{ nm}]$. Pour la discussion critique, songez aux interactions entre les atomes du gaz ou à leur agitation thermique.

---

### 📋 Correction détaillée pas à pas

#### 1. Expression littérale et conversion d'énergie

L'énergie d'un photon émis lors d'une transition entre deux niveaux est :
$$\Delta E = \frac{h \cdot c}{\lambda}$$

En isolant la longueur d'onde $\lambda$ :
$$\lambda = \frac{h \cdot c}{\Delta E}$$
*Unités SI :* $h$ en $\text{J}\cdot\text{s}$, $c$ en $\text{m}\cdot\text{s}^{-1}$, $\Delta E$ en $\text{J}$, et $\lambda$ en $\text{m}$.

Pour le niveau $E_3 = 4,86 \text{ eV}$, la conversion en Joules s'effectue ainsi :
$$E_3 = 4,86 \times (1,602 \times 10^{-19} \text{ J})$$
$$E_3 \approx 7,79 \times 10^{-19} \text{ J}$$

---

#### 2. Transitions possibles depuis $E_4$ et calcul des longueurs d'onde

Les chemins de désexcitation possibles à partir du niveau $E_4$ vers les niveaux inférieurs ($E_3, E_2, E_1$) ou par étapes intermédiaires sont les suivants :

* **Transition $E_4 \rightarrow E_1$ (saut direct) :**
  $$\Delta E = E_4 - E_1 = 5,54 - 0,00 = 5,54 \text{ eV} = 5,54 \times 1,602 \times 10^{-19} = 8,875 \times 10^{-19} \text{ J}$$
  $$\lambda_1 = \frac{(6,626 \times 10^{-34}) \times (3,00 \times 10^8)}{8,875 \times 10^{-19}} \approx 2,24 \times 10^{-7} \text{ m} = 224 \text{ nm}$$

* **Transition $E_4 \rightarrow E_3$ :**
  $$\Delta E = 5,54 - 4,86 = 0,68 \text{ eV} = 1,089 \times 10^{-19} \text{ J}$$
  $$\lambda_2 = \frac{(6,626 \times 10^{-34}) \times (3,00 \times 10^8)}{1,089 \times 10^{-19}} \approx 1,83 \times 10^{-6} \text{ m} = 1830 \text{ nm} \text{ (Domaine infrarouge)}$$

* **Transition $E_4 \rightarrow E_2$ :**
  $$\Delta E = 5,54 - 3,02 = 2,52 \text{ eV} = 4,037 \times 10^{-19} \text{ J}$$
  $$\lambda_3 = \frac{(6,626 \times 10^{-34}) \times (3,00 \times 10^8)}{4,037 \times 10^{-19}} \approx 4,92 \times 10^{-7} \text{ m} = 492 \text{ nm}$$

* *D'autres transitions intermédiaires sont possibles si l'atome passe par $E_3$ ou $E_2$ :*
  * **$E_3 \rightarrow E_1$ :** $\Delta E = 4,86 \text{ eV} \rightarrow \lambda \approx 255 \text{ nm}$
  * **$E_3 \rightarrow E_2$ :** $\Delta E = 4,86 - 3,02 = 1,84 \text{ eV} \rightarrow \lambda \approx 675 \text{ nm}$
  * **$E_2 \rightarrow E_1$ :** $\Delta E = 3,02 \text{ eV} \rightarrow \lambda \approx 411 \text{ nm}$

---

#### 3. Analyse critique et appartenance au domaine visible

Parmi l'ensemble des radiations calculées :
* $\lambda = 492 \text{ nm}$ ($E_4 \rightarrow E_2$) se situe dans le domaine du visible (vert-bleu).
* $\lambda = 675 \text{ nm}$ ($E_3 \rightarrow E_2$) se situe dans le domaine du visible (rouge).
* $\lambda = 411 \text{ nm}$ ($E_2 \rightarrow E_1$) se situe à la limite du visible et du violet.

**Discussion critique du modèle :**
Ce modèle à niveaux d'énergie discrets offre une approximation satisfaisante pour comprendre l'origine quantique des raies spectrales. Cependant, l'analyse expérimentale d'une lampe réelle montre des limites :
1. **Élargissement Doppler et collisionnel :** En raison de l'agitation thermique des atomes et de leurs interactions (collisions au sein du gaz), les raies ne sont pas infiniment fines mais présentent un profil de Gauss ou de Lorentz.
2. **Structure fine et hyperfine :** Les niveaux d'énergie ne sont pas de simples valeurs scalaires uniques ; des effets magnétiques internes (couplage spin-orbite) subdivisent ces niveaux en sous-niveaux très proches, complexifiant le spectre réel par rapport au modèle idéal proposé.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
