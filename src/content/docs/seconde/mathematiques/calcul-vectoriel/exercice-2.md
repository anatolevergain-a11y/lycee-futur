---
title: "Exercice 2 : Colinéarité et alignement en modélisation 2D"
description: "Application pratique du chapitre Calcul vectoriel avancé"
---

### 🌐 Contexte & Données scientifiques

En géométrie analytique et en infographie 2D, la modélisation de trajectoires ou de structures repose souvent sur l'utilisation de repères orthonormés $(O; \vec{i}, \vec{j})$. L'étude de l'alignement de points est une problématique fondamentale pour vérifier l'intégrité géométrique d'éléments virtuels ou réels (par exemple, le positionnement de capteurs le long d'une poutre ou la trajectoire rectiligne d'un projectile).

Considérons un plan muni d'un repère orthonormé $(O; \vec{i}, \vec{j})$. Les unités de longueur sont exprimées en mètres ($\text{m}$). 

Dans le cadre d'un contrôle qualité sur une chaîne de fabrication de profilés métalliques, un technicien relève les coordonnées de trois points d'ancrage $A$, $B$ et $C$ dans le plan de coupe :
* Le point d'ancrage initial $A$ a pour coordonnées $(-1{,}50 \text{ m}, 2{,}00 \text{ m})$.
* Le point intermédiaire $B$ a pour coordonnées $(1{,}00 \text{ m}, 3{,}20 \text{ m})$.
* Le point final théorique $C$ a pour coordonnées $(4{,}50 \text{ m}, 4{,}80 \text{ m})$.

Cependant, les instruments de mesure employés possèdent une incertitude de $\pm 0{,}05 \text{ m}$ sur chaque coordonnée. L'analyse mathématique doit donc intégrer cette réalité expérimentale pour statuer sur la tolérance d'alignement.

---

### ❓ Énoncé

1. Calculer les coordonnées des vecteurs $\vec{AB}$ et $\vec{AC}$ dans la base $(\vec{i}, \vec{j})$.
2. Démontrer que les points $A$, $B$ et $C$ sont alignés en utilisant le critère analytique de colinéarité des vecteurs.
3. Le modèle théorique exige que le point $C$ soit parfaitement aligné avec $(AB)$. Compte tenu de l'incertitude de mesure de $\pm 0{,}05 \text{ m}$, formulez une critique scientifique sur la certitude absolue de cet alignement en évaluant l'impact d'une variation maximale sur les coordonnées de $C$.

---

### 💡 Indice de méthode

* **Question 1 :** Pour tout couple de points $M(x_M, y_M)$ et $N(x_N, y_N)$, les coordonnées du vecteur $\vec{MN}$ sont données par $\vec{MN}\begin{pmatrix} x_N - x_M \\ y_N - y_M \end{pmatrix}$.
* **Question 2 :** Deux vecteurs non nuls $\vec{u}\begin{pmatrix} X \\ Y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} X' \\ Y' \end{pmatrix}$ sont colinéaires si et seulement si leur déterminant est nul, c'est-à-dire $XY' - YX' = 0$. Concluez quant à l'alignement des points $A$, $B$ et $C$.
* **Question 3 :** Testez les cas extrêmes des coordonnées de $C$ (par exemple $x_C + 0{,}05$ et $y_C - 0{,}05$) pour observer si le déterminant reste rigoureusement nul ou s'il s'en écarte.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul des coordonnées des vecteurs $\vec{AB}$ et $\vec{AC}$

Appliquons la formule de calcul des coordonnées d'un vecteur à partir de celles de son origine et de son extrémité :
* Pour le vecteur $\vec{AB}$ :
$$\vec{AB}\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix} = \begin{pmatrix} 1{,}00 - (-1{,}50) \\ 3{,}20 - 2{,}00 \end{pmatrix} = \begin{pmatrix} 2{,}50 \\ 1{,}20 \end{pmatrix}$$

* Pour le vecteur $\vec{AC}$ :
$$\vec{AC}\begin{pmatrix} x_C - x_A \\ y_C - y_A \end{pmatrix} = \begin{pmatrix} 4{,}50 - (-1{,}50) \\ 4{,}80 - 2{,}00 \end{pmatrix} = \begin{pmatrix} 6{,}00 \\ 2{,}80 \end{pmatrix}$$

#### 2. Démonstration de l'alignement par la colinéarité

Calculons le déterminant des vecteurs $\vec{AB}$ et $\vec{AC}$ pour vérifier leur colinéarité :
$$\det(\vec{AB}, \vec{AC}) = X_{AB} \times Y_{AC} - Y_{AB} \times X_{AC}$$
$$\det(\vec{AB}, \vec{AC}) = (2{,}50 \times 2{,}80) - (1{,}20 \times 6{,}00)$$
$$\det(\vec{AB}, \vec{AC}) = 7{,}00 - 7{,}20 = -0{,}20$$

Le déterminant est égal à $-0{,}20$, ce qui est strictement différent de $0$. 
Par conséquent, les vecteurs $\vec{AB}$ et $\vec{AC}$ **ne sont pas colinéaires**. Les points $A$, $B$ et $C$ **ne sont donc pas alignés** dans le modèle mathématique strict basé sur ces relevés.

#### 3. Analyse critique et prise en compte des incertitudes de mesure

Le calcul précédent montre un léger écart à l'alignement parfait (déterminant de $-0{,}20$ au lieu de $0$). Cependant, l'énoncé rappelle une incertitude expérimentale de $\pm 0{,}05 \text{ m}$. 

Testons l'hypothèse d'une variation des mesures dans la limite des incertitudes pour le point $C(4{,}50 \pm 0{,}05 \,;\, 4{,}80 \pm 0{,}05)$. Supposons par exemple un relevé entaché d'erreur menant à $C'\left(4{,}45 \text{ m} \,;\, 4{,}85 \text{ m}\right)$.
Le vecteur $\vec{AC'}$ devient alors :
$$\vec{AC'}\begin{pmatrix} 4{,}45 - (-1{,}50) \\ 4{,}85 - 2{,}00 \end{pmatrix} = \begin{pmatrix} 5{,}95 \\ 2{,}85 \end{pmatrix}$$

Calculons le nouveau déterminant :
$$\det(\vec{AB}, \vec{AC'}) = (2{,}50 \times 2{,}85) - (1{,}20 \times 5{,}95) = 7{,}125 - 7{,}14 = -0{,}015$$

Bien que l'écart diminue, il convient de noter qu'en sciences expérimentales, une affirmation dogmatique d'alignement ou de non-alignement ne peut être prononcée sans analyser l'intervalle de confiance. Ici, l'imperfection du modèle numérique ou la précision des instruments ne permet pas de garantir avec une certitude absolue que les points ne sont pas alignés aux incertitudes près. Un compromis entre tolérance métrologique et exigence de modélisation est donc nécessaire pour valider la pièce.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
