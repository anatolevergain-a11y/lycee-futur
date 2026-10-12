---
title: "Exercice : Le temps et les roches"
description: "Démonstration appliquée : Datation isotopique et transition énergétique (Géothermie)"
---

### 🌐 Contexte

Dans le cadre de la transition énergétique et du développement des énergies renouvelables, l'exploitation de la géothermie profonde (ou géothermie haute énergie) représente une alternative prometteuse pour la production d'électricité et de chaleur. Cette technique consiste à exploiter la chaleur naturelle des roches de la croûte continentale, souvent issues de la mise en place de plutons granitiques. 

Pour évaluer la viabilité et la durabilité d'une centrale géothermique sur un site donné, les géologues doivent dater avec précision la mise en place de ces réservoirs magmatiques et comprendre l'histoire thermique du socle rocheux. 

Vous disposez d'un échantillon de granite prélevé dans la région des Boucles de la Roanne. L'objectif est de déterminer l'âge de cristallisation de ce granite grâce à la méthode de datation radiométrique ${}^{87}\text{Rb}-{}^{87}\text{Sr}$, puis d'analyser son potentiel thermique pour un projet de géothermie.

---

### ❓ Énoncé

1. **Rappel des principes :** Rappeler brièvement le principe de la datation isotopique (notion de couple père-fils) et écrire la loi mathématique reliant le nombre d'atomes radiogéniques au temps $t$ et à la constante de désintégration $\lambda$.
2. **Exploitation des données isotopiques :** À partir de l'analyse par spectrométrie de masse d'un échantillon global de granite et de ses minéraux isolés (biotite, feldspath potassique, plagioclase), les rapports isotopiques mesurés sont portés sur un diagramme isochrone. Expliquer comment l'équation de la droite isochrone permet d'isoler l'âge $t$ du système.
3. **Calcul d'âge :** La pente $m$ de la droite isochrone obtenue est $m = 0{,}0125$. La constante de désintégration du ${}^{87}\text{Rb}$ est $\lambda = 1{,}42 \times 10^{-11} \text{ an}^{-1}$. 
   Calculer l'âge $t$ du granite en millions d'années (Ma). *(On rappelle que pour de faibles valeurs de $t$, $\text{e}^{\lambda t} - 1 \approx \lambda t$)*.
4. **Application géothermique :** Le granite daté a une concentration initiale élevée en éléments radioactifs (notamment le ${}^{87}\text{Rb}$, mais aussi l'uranium et le thorium). En lien avec la désintégration radioactive au sein de la croûte continentale, expliquez en quoi l'âge et la nature de ce granite en font une source de chaleur pérenne pertinente pour la transition énergétique.

---

### 💡 Indice

- **Question 1 :** Pensez à la formule de décroissance radioactive : $N(t) = N(0) \cdot \mathrm{e}^{-\lambda t}$, en sachant que le nombre d'atomes fils radiogéniques formés est égal à la différence entre les atomes fils actuels et les atomes fils initiaux.
- **Question 2 :** Divisez l'ensemble des termes de l'équation bilan par le nombre d'atomes de l'isotope stable référence, ici le ${}^{86}\text{Sr}$, pour faire apparaître les rapports mesurables $\left(\frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}}\right)$ et $\left(\frac{{}^{87}\text{Rb}}{{}^{86}\text{Sr}}\right)$.
- **Question 3 :** La pente de la droite isochrone est mathématiquement reliée à l'âge du système par la relation $m = \mathrm{e}^{\lambda t} - 1$. Utilisez l'approximation fournie.
- **Question 4 :** La géothermie liée aux granites repose sur la désintégration naturelle des éléments radioactifs. Réfléchissez à la source de l'énergie thermique des roches profondes.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Rappel des principes de la datation isotopique
La datation radiométrique repose sur la désintégration radioactive spontanée d'un isotope père instable en un isotope fils stable à un rythme constant, indépendant des conditions physico-chimiques extérieures (pression, température).
La loi de décroissance radioactive s'écrit :
$$N_{\text{père}}(t) = N_{\text{père}}(0) \cdot \mathrm{e}^{-\lambda t}$$
Où :
- $N_{\text{père}}(t)$ est le nombre d'atomes pères restants à l'instant $t$.
- $N_{\text{père}}(0)$ est le nombre initial d'atomes pères à $t = 0$ (lors de la fermeture du système).
- $\lambda$ est la constante de désintégration propre au couple isotopique (en $\text{an}^{-1}$).
- $t$ est le temps écoulé depuis la fermeture du système (en années).

Le nombre d'atomes fils radiogéniques $N_{\text{fils}}^*$ produits est égal à la quantité de pères désintégrés :
$$N_{\text{fils}}^* = N_{\text{père}}(0) - N_{\text{père}}(t) = N_{\text{père}}(t) \cdot (\mathrm{e}^{\lambda t} - 1)$$

---

#### 2. Équation de la droite isochrone
Pour le couple ${}^{87}\text{Rb}$ (père) / ${}^{87}\text{Sr}$ (fils), l'isotope stable de référence est ${}^{86}\text{Sr}$. À tout instant $t$, la quantité totale d'isotope ${}^{87}\text{Sr}$ mesurée dans un minéral est la somme du strontium initial et du strontium radiogénique :
$${}^{87}\text{Sr}(t) = {}^{87}\text{Sr}_{\text{initial}} + {}^{87}\text{Sr}^*$$

En divisant tous les termes par le nombre d'atomes de l'isotope stable ${}^{86}\text{Sr}$ (qui ne varie pas au cours du temps), on obtient l'équation mathématique d'une droite affine $y = ax + b$ :

$$\left(\frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}}\right)_{\text{mesuré}} = \left(\frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}}\right)_{\text{initial}} + \left(\frac{{}^{87}\text{Rb}}{{}^{86}\text{Sr}}\right) \cdot (\mathrm{e}^{\lambda t} - 1)$$

Cette équation montre que sur un diagramme isochrone où :
- L'ordonnée $y$ est $\left(\frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}}\right)$
- L'abscisse $x$ est $\left(\frac{{}^{87}\text{Rb}}{{}^{86}\text{Sr}}\right)$

Tous les minéraux d'un même roche, formés en même temps avec le même rapport initial $\left(\frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}}\right)_{\text{initial}}$, s'alignent le long d'une droite dont **la pente $m$ est égale à $\mathrm{e}^{\lambda t} - 1$**.

---

#### 3. Calcul de l'âge du granite
D'après le cours et la question précédente, la pente de la droite isochrone est :
$$m = \mathrm{e}^{\lambda t} - 1$$

En utilisant l'approximation pour les faibles valeurs de $t$ ($\mathrm{e}^{\lambda t} - 1 \approx \lambda t$), on obtient :
$$m \approx \lambda t \implies t \approx \frac{m}{\lambda}$$

A.élus-nous application numérique avec les données de l'énoncé ($m = 0{,}0125$ et $\lambda = 1{,}42 \times 10^{-11} \text{ an}^{-1}$) :
$$t = \frac{0{,}0125}{1{,}42 \times 10^{-11}}$$

$$t \approx 8{,}799 \times 10^{8} \text{ ans}$$

Soit, en millions d'années :
$$t \approx 880 \text{ Ma}$$

Le granite s'est donc mis en place il y a environ **$880$ millions d'années** (au Protérozoïque).

---

#### 4. Lien avec la transition énergétique et la géothermie
L'âge de $880 \text{ Ma}$ et la nature granitique de cette roche en font une cible intéressante pour la géothermie profonde (systèmes géothermaux stimulés ou EGS) pour plusieurs raisons :
1. **La radiogénéricité de la croûte continentale :** Les granites sont des roches riches en éléments radioactifs (Uranium, Thorium, et Rubidium). La désintégration radioactive lente mais continue de ces éléments au cours des temps géologiques libère de l'énergie thermique (radiochronologie et flux de chaleur radiogénique). 
2. **La pérennité de la ressource :** Même si le pluton granitique est ancien, il continue de produire de la chaleur par désintégration radioactive, agissant comme une "batterie thermique" naturelle de socle. Couplé à un gradient géothermique classique, un tel réservoir permet, via un système de circulation d'eau forcée (injection et récupération d'eau sous pression), de capter une eau à haute température pour alimenter des réseaux de chaleur urbains ou produire de l'électricité bas-carbone.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
