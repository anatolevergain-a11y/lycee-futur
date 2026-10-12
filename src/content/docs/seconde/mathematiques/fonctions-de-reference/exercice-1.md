---
title: "Exercice 1 : Trajectoire parabolique en mécanique"
description: "Application pratique du chapitre Fonctions de référence"
---

### 🌐 Contexte & Données scientifiques

En mécanique classique, l'étude du mouvement d'un projectile dans un champ de pesanteur uniforme (en négligeant les frottements de l'air, ce qui constitue une approximation qu'il convient de questionner) montre que la trajectoire suivie par le centre de masse du projectile est une parabole. 

Considérons le lancer d'un ballon lors d'une expérience de laboratoire de physique-mécanique. Le mouvement est étudié dans un repère orthonormal $(O, \vec{i}, \vec{j})$ du plan vertical, où :
- L'axe des abscisses $x$ représente la distance horizontale parcourue (en mètres).
- L'axe des ordonnées $y$ représente la hauteur du ballon par rapport au sol (en mètres).

Sous certaines conditions initiales (vitesse d'éjection, angle de tir et hauteur initiale), la hauteur $y$ du ballon en fonction de la distance horizontale $x$ est modélisée par la fonction $f$ définie sur l'intervalle $[0 ; 12]$ par :

$$f(x) = -0{,}1x^2 + 1{,}2x + 1{,}5$$

**Données et limites du modèle :**
* Le coefficient directeur du terme en $x^2$ est négatif, ce qui traduit la concavité tournée vers le bas de la parabole, cohérente avec l'action de la pesanteur terrestre.
* *Hypothèse et esprit critique :* Ce modèle mathématique polynomial néglige l'frottement fluide de l'air (notamment la force de traînée $F = \frac{1}{2}\rho v^2 S C_x$). Par conséquent, les prédictions obtenues par le calcul théorique comportent une incertitude systématique par rapport à une mesure expérimentale réelle, incertitude d'autant plus grande que la vitesse du projectile est élevée.

---

### ❓ Énoncé

1. **Analyse de la situation initiale :** 
   Déterminer la hauteur à laquelle le ballon est lâché (ou lancé) par l'expérimentateur. En déduire les coordonnées du point de départ.

2. **Étude variationnelle et sommet :**
   À l'aide d'une mise sous forme canonique ou en utilisant les propriétés des fonctions polynômes du second degré, déterminer la hauteur maximale atteinte par le ballon ainsi que la distance horizontale à laquelle cette hauteur maximale est observée.

3. **Résolution d'équation et impact au sol :**
   Le sol est modélisé par la droite horizontale d'équation $y = 0$. Établir l'équation traduisant l'impact du ballon au sol, puis déterminer à quelle distance horizontale $x$ cet impact se produit. (On arrondira le résultat au centimètre près).

4. **Analyse critique du modèle :**
   Un observateur affirme que "le ballon retombe exactement au même angle (en valeur absolue) que son angle de lancer". Sans calcul physique complexe, expliquez en vous appuyant sur la symétrie de la parabole pourquoi cette affirmation est géométriquement fausse dans ce cas précis, et discutez de l'intérêt et des limites de ce modèle mathématique pour un ingénieur.

---

### 💡 Indice de méthode

* **Question 1 :** Quelle est la valeur de la distance horizontale $x$ au moment exact du lancer ? Calculez $f(0)$.
* **Question 2 :** Pour une fonction polynôme du second degré de la forme $f(x) = ax^2 + bx + c$ avec $a < 0$, le sommet de la parabole (qui correspond ici au maximum) est atteint pour l'abscisse $x_s = -\frac{b}{2a}$. 
* **Question 3 :** Résoudre l'équation $f(x) = 0$ revient à chercher les racines de la fonction. Vous pouvez utiliser le discriminant $\Delta = b^2 - 4ac$.
* **Question 4 :** Repensez à l'axe de symétrie de la parabole et comparez la distance horizontale totale parcourue avec la distance à laquelle le sommet est atteint.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse de la situation initiale
La hauteur du ballon en fonction de la distance horizontale est donnée par $f(x) = -0{,}1x^2 + 1{,}2x + 1{,}5$.
Au départ du mouvement, la distance horizontale parcourue est nulle, soit $x = 0$ m.
Calculons la hauteur correspondante :
$$f(0) = -0{,}1(0)^2 + 1{,}2(0) + 1{,}5 = 1{,}5$$
Le ballon est donc lancé à une hauteur de $1{,}5$ mètres. 
Les coordonnées du point de départ dans le repère sont $(0 ; 1{,}5)$.

#### 2. Étude variationnelle et sommet
La fonction $f$ est un polynôme du second degré de la forme $f(x) = ax^2 + bx + c$ avec :
* $a = -0{,}1$
* $b = 1{,}2$
* $c = 1{,}5$

Puisque $a = -0{,}1 < 0$, la parabole admet un maximum. L'abscisse de ce sommet $x_s$ se calcule par la formule du cours :
$$x_s = -\frac{b}{2a} = -\frac{1}{2 \times (-0{,}1)} = -\frac{1{,}2}{-0{,}2} = 6$$
Le ballon atteint sa hauteur maximale à une distance horizontale de $6$ mètres.

Calculons cette hauteur maximale en évaluant $f(6)$ :
$$f(6) = -0{,}1(6)^2 + 1{,}2(6) + 1{,}5$$
$$f(6) = -0{,}1(36) + 7{,}2 + 1{,}5$$
$$f(6) = -3{,}6 + 7{,}2 + 1{,}5 = 5{,}1$$
La hauteur maximale atteinte par le ballon est de **$5{,}1$ mètres**.

#### 3. Résolution d'équation et impact au sol
Le ballon touche le sol lorsque sa hauteur $y$ est nulle, c'est-à-dire lorsque $f(x) = 0$.
$$-0{,}1x^2 + 1{,}2x + 1{,}5 = 0$$

Calculons le discriminant $\Delta$ :
$$\Delta = b^2 - 4ac = (1{,}2)^2 - 4 \times (-0{,}1) \times 1{,}5$$
$$\Delta = 1{,}44 + 0{,}6 = 2{,}04$$
Puisque $\Delta > 0$, l'équation admet deux solutions distinctes :
$$x_1 = \frac{-b - \sqrt{\Delta}}{2a} = \frac{-1{,}2 - \sqrt{2{,}04}}{2 \times (-0{,}1)} = \frac{-1{,}2 - \sqrt{2{,}04}}{-0{,}2}$$
$$x_2 = \frac{-b + \sqrt{\Delta}}{2a} = \frac{-1{,}2 + \sqrt{2{,}04}}{-0{,}2}$$

Calculons les valeurs approchées :
* $\sqrt{2{,}04} \approx 1{,}428$
* $x_1 = \frac{-1{,}2 - 1{,}428}{-0{,}2} = \frac{-2{,}628}{-0{,}2} = 13{,}14$
* $x_2 = \frac{-1{,}2 + 1{,}428}{-0{,}2} = \frac{0{,}228}{-0{,}2} = -1{,}14$

Dans le contexte physique du problème, la distance horizontale $x$ doit être positive ou nulle ($x \ge 0$). La valeur $x_2 = -1{,}14$ est donc rejetée car physiquement absurde (elle correspondrait à un passé fictif du projectile).
Le ballon touche donc le sol à une distance horizontale $x \approx 13{,}14$ mètres (soit $13$ m et $14$ cm).

#### 4. Analyse critique du modèle
* **Sur le plan géométrique :** L'axe de symétrie de la parabole a pour équation $x = x_s = 6$. Le point de départ est à $x = 0$ (soit $6$ unités à gauche de l'axe de symétrie) et le point d'impact est à $x \approx 13{,}14$ (soit $7{,}14$ unités à droite de l'axe de symétrie). La trajectoire n'est donc pas symétrique par rapport au sommet dans l'intervalle $[0 ; 13{,}14]$ en raison de la hauteur initiale ($1{,}5$ m) qui est différente de la hauteur finale ($0$ m). Par conséquent, les pentes de la tangente à la courbe au départ et à l'arrivée sont différentes en valeur absolue, ce qui invalide l'affirmation de l'observateur.
* **Sur le plan scientifique et critique :** Ce modèle mathématique polynomial est une *idéalisation*. En omettant les frottements de l'air et la poussée d'Archimède, il surestime légèrement la portée réelle du ballon. Pour un ingénieur ou un scientifique, ce modèle constitue une première approximation (ordre 1) utile pour concevoir rapidement une trajectoire, mais il doit être complété par des simulations numériques incluant la mécanique des fluides si l'on recherche une précision métrique rigoureuse.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
