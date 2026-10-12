---
title: "Exercice 1 : Lois de Kepler et trajectoires de satellites"
description: "Application pratique du chapitre Mouvement dans un champ uniforme"
---

### 🌐 Contexte & Données scientifiques

L'étude du mouvement des satellites artificiels autour de la Terre repose sur la modélisation de la gravitation universelle et l'application des lois de Newton. Bien que le champ de pesanteur terrestre ne soit strictement uniforme qu'au voisinage immédiat de la surface de la Terre, l'étude des satellites défileurs ou géostationnaires met en jeu des orbites circulaires ou elliptiques où l'approximation d'un champ central newtonien est rigoureuse.

Afin d'analyser la faisabilité et la pertinence de la mise en orbite d'un satellite d'observation, on étudie le cas d'un satellite de masse $m$ placé en orbite circulaire à une altitude $h$ constante au-dessus de l'équateur terrestre.

**Données et constantes physiques :**
* Masse de la Terre : $M_T = 5,97 \times 10^{24}\text{ kg}$
* Rayon moyen de la Terre : $R_T = 6,37 \times 10^{3}\text{ km}$
* Constante de gravitation universelle : $G = 6,67 \times 10^{-11}\text{ N}\cdot\text{m}^2\cdot\text{kg}^{-2}$
* Période de rotation propre de la Terre (jour sidéral) : $T_S = 86 164\text{ s}$

*Note épistémologique et critique :* Dans les applications industrielles (comme le système GPS ou Galileo), les ingénieurs ne peuvent se contenter du modèle képlérien idéal. Ils doivent intégrer des corrections issues de la théorie de la relativité générale (effets cinématiques et gravitationnels sur les horloges embarquées), ainsi que des perturbations aérodynamiques résiduelles dues aux couches hautes de l'atmosphère (thermosphère), dont la densité varie selon l'activité solaire.

---

### ❓ Énoncé

1. Dans le référentiel géocentrique, supposé galiléen, établir l'expression vectorielle de la force de gravitation exercée par la Terre sur le satellite, puis appliquer la deuxième loi de Newton pour démontrer que le mouvement du centre de masse du satellite est nécessairement uniforme et circulaire, sous réserve d'une condition initiale sur sa vitesse.
2. Établir l'expression de la vitesse orbitale $v$ du satellite en fonction de $G$, $M_T$, $R_T$ et de l'altitude $h$. Calculer cette vitesse pour un satellite placé à une altitude $h = 700\text{ km}$ (orbite basse, type Sentinel).
3. Déduire de l'étude précédente la troisième loi de Kepler (relation entre la période de révolution $T$ et le rayon orbital $r$). Calculer la période de révolution $T$ de ce même satellite et exprimer le résultat en minutes.
4. Un cahier des charges impose à un satellite de télécommunication d'être géostationnaire (c'est-à-dire fixe dans le référentiel terrestre, lui-même géocentrique non galiléen, ou de période égale à $T_S$ dans le référentiel géocentrique galiléen). 
   * Déterminer par le calcul l'altitude $h_G$ requise. 
   * Discuter de manière critique des avantages technologiques et des limites opérationnelles (latence, couverture des hautes latitudes, coût énergétique du lancement) de ce type d'orbite par rapport à une constellation de satellites en orbite basse (LEO).

---

### 💡 Indice de méthode

* **Question 1 :** Projetez l'équation vectorielle de la dynamique dans le repère de Frenet $(\vec{u}_t, \vec{u}_n)$. Rappelez l'expression de l'accélération dans ce repère pour une trajectoire circulaire.
* **Question 2 & 3 :** Veillez à bien homogénéiser les unités dans le système international (convertir les kilomètres en mètres) avant tout calcul numérique. Le rayon orbital $r$ est la distance entre le centre de la Terre et le satellite ($r = R_T + h$).
* **Question 4 :** Pour la recherche de l'altitude géostationnaire, partez de la relation liant la période $T$ au rayon orbital $r$ établie à la question 3, puis isolez $h_G$. Pour l'analyse critique, mobilisez des arguments croisant physique, économie des transports spatiaux et contraintes de télécommunication.

---

### 📋 Correction détaillée pas à pas

#### 1. Nature du mouvement du satellite
Dans le référentiel géocentrique (supposé galiléen), la seule force extérieure exercée sur le satellite de masse $m$ est la force de gravitation universelle :
$$\vec{F} = -G \frac{M_T m}{r^2} \vec{u}_r$$
où $r = R_T + h$ est la distance entre le centre de la Terre et le satellite, et $\vec{u}_r$ le vecteur unitaires dirigé du centre de la Terre vers le satellite.

D'après la deuxième loi de Newton (théorème du centre d'inertie) :
$$\sum \vec{F}_{ext} = m \vec{a} \implies -G \frac{M_T m}{r^2} \vec{u}_r = m \vec{a}$$
En simplifiant par la masse $m$ (masse inerte égale à la masse grave, principe d'équivalence) :
$$\vec{a} = -G \frac{M_T}{r^2} \vec{u}_r$$

Dans le repère de Frenet $(\vec{u}_t, \vec{u}_n)$ lié à la trajectoire, l'accélération s'exprime par :
$$\vec{a} = \frac{dv}{dt} \vec{u}_t + \frac{v^2}{\rho} \vec{u}_n$$
Par identification avec le vecteur accélération centripète (en posant $\vec{u}_n = -\vec{u}_r$ et $\rho = r$) :
* Suivant la tangente : $\frac{dv}{dt} = 0 \implies v = \text{constante}$. Le mouvement est donc **uniforme**.
* Suivant la normale : $\frac{v^2}{r} = G \frac{M_T}{r^2}$.

---

#### 2. Expression et calcul de la vitesse orbitale
De l'égalité précédente, on tire la vitesse orbitale $v$ :
$$v = \sqrt{\frac{G M_T}{r}} = \sqrt{\frac{G M_T}{R_T + h}}$$

*Application numérique pour $h = 700\text{ km} = 7,00 \times 10^5\text{ m}$ :*
* $R_T = 6,37 \times 10^6\text{ m}$
* $r = 6,37 \times 10^6 + 0,70 \times 10^6 = 7,07 \times 10^6\text{ m}$

$$v = \sqrt{\frac{6,67 \times 10^{-11} \times 5,97 \times 10^{24}}{7,07 \times 10^6}} \approx \sqrt{5,632 \times 10^7} \approx 7,50 \times 10^3\text{ m}\cdot\text{s}^{-1}$$
La vitesse orbitale est donc de $7,50\text{ km}\cdot\text{s}^{-1}$.

---

#### 3. Période de révolution et troisième loi de Kepler
La trajectoire étant un cercle de périmètre $P = 2\pi r$ parcouru à la vitesse constante $v$, la période de révolution $T$ est :
$$T = \frac{2\pi r}{v} = 2\pi r \sqrt{\frac{r}{G M_T}} = 2\pi \sqrt{\frac{r^3}{G M_T}}$$
En élevant au carré, on obtient la troisième loi de Kepler :
$$\frac{T^2}{r^3} = \frac{4\pi^2}{G M_T}$$

*Application numérique :*
$$T = 2\pi \sqrt{\frac{(7,07 \times 10^6)^3}{6,67 \times 10^{-11} \times 5,97 \times 10^{24}}} = 2\pi \sqrt{\frac{3,534 \times 10^{20}}{3,98 \times 10^{14}}} = 2\pi \sqrt{8,88 \times 10^5} \approx 5922\text{ s}$$

Soit en minutes :
$$T = \frac{5922}{60} \approx 98,7\text{ min}$$

---

#### 4. Cas du satellite géostationnaire et esprit critique
* **Calcul de l'altitude $h_G$ :**
La période $T$ doit être égale à celle de la Terre, soit $T = T_S = 86 164\text{ s}$.
À partir de la formule de la période :
$$T^2 = \frac{4\pi^2 r^3}{G M_T} \implies r^3 = \frac{T^2 G M_T}{4\pi^2}$$
$$r = \left( \frac{T^2 G M_T}{4\pi^2} \right)^{1/3}$$

$$r = \left( \frac{(86 164)^2 \times 6,67 \times 10^{-11} \times 5,97 \times 10^{24}}{4\pi^2} \right)^{1/3}$$
$$r \approx \left( \frac{7,425 \times 10^9 \times 3,98 \times 10^{14}}{39,478} \right)^{1/3} \approx \left( 7,49 \times 10^{22} \right)^{1/3} \approx 4,22 \times 10^7\text{ m} = 42 200\text{ km}$$

L'altitude $h_G$ est donc :
$$h_G = r - R_T = 42 200 - 6 370 = 35 830\text{ km} \approx 3,58 \times 10^4\text{ km}$$

* **Discussion critique (Avantages vs Limites) :**
  * *Avantages géostationnaires :* Le satellite est fixe par rapport à un observateur terrestre, ce qui simplifie grandement l'orientation des antennes paraboliques grand public et assure une continuité permanente des liaisons sur une large zone (couverture d'un tiers du globe avec seulement trois satellites).
  * *Limites et compromis :* 
    1. **Latence temporelle :** L'altitude élevée ($~36 000\text{ km}$) impose un temps de trajet aller-retour des ondes électromagnétiques d'environ $240\text{ ms}$, pénalisant les communications interactives (visioconférence, jeux en réseau).
    2. **Couverture polaire :** En raison de la position de l'orbite dans le plan de l'équateur, les régions polaires sont mal desservies (angle de visée rasant).
    3. **Coût énergétique :** Mettre un satellite à $36 000\text{ km}$ nécessite des lanceurs beaucoup plus puissants que pour une orbite basse (LEO à $700\text{ km}$), ce qui explique le regain d'intérêt actuel pour les méga-constellations en orbite basse (malgré les problématiques de pollution lumineuse et de gestion des débris spatiaux).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
