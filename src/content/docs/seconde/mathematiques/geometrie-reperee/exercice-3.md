---
title: "Exercice 3 : Modélisation graphique de trajectoires"
description: "Application pratique du chapitre Géométrie repérée et vecteurs"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude des mobilités urbaines et de la sécurité routière, la modélisation mathématique des trajectoires de véhicules est un enjeu fondamental. Un système de transport intelligent (STI) enregistre la position d'un véhicule autonome d'essai sur une portion d'essai rectiligne en zone contrôlée. 

Dans un repère orthonormé $(O; \vec{i}, \vec{j})$ du plan, où l'unité graphique représente $1$ mètre, la position du véhicule est relevée à intervalles réguliers. Les relevés cinématiques permettent d'isoler le passage du véhicule par trois points caractéristiques du plan : 
* Le point $A(1 ; 2)$, correspondant au déclenchement d'un freinage d'urgence.
* Le point $B(5 ; 6)$, correspondant au milieu de la phase de décélération.
* Le point $C(9 ; 10)$, correspondant à l'immobilisation complète du véhicule.

Cependant, les capteurs embarqués (GPS différentiel et centrales inertielles) présentent une incertitude de mesure estimée à $\pm 0{,}1\text{ m}$. De plus, la modélisation par une trajectoire rectiligne suppose l'absence de dévers de la route et de vent latéral, ce qui constitue une idéalisation physique qu'il conviendra d'analyser.

---

### ❓ Énoncé

1. **Représentation et alignement :**
   Placer les points $A$, $B$ et $C$ dans le repère. Calculer les coordonnées des vecteurs $\vec{AB}$ et $\vec{AC}$. Que peut-on en déduire sur la nature de la trajectoire modélisée par ces trois points ?

2. **Caractérisation vectorielle :**
   Soit $M(x ; y)$ un point quelconque du plan. Déterminer une relation vectorielle liant $\vec{AM}$ et $\vec{AB}$, puis en déduire l'équation cartésienne de la droite $(\Delta)$ modélisant la trajectoire du véhicule.

3. **Validation du modèle et gestion des incertitudes :**
   Un poste de contrôle secondaire enregistre un point de passage de repli $P(7 ; 7{,}05)$. En utilisant l'équation de la droite $(\Delta)$, déterminez si ce point appartient strictement à la trajectoire modélisée. 
   Au vu de l'incertitude métrologique des capteurs ($\pm 0{,}1\text{ m}$), ce modèle mathématique peut-il être validé pour cette position ? Concluez sur les limites de la modélisation géométrique face à la mesure physique.

---

### 💡 Indice de méthode

* **Question 1 :** Pour des points $A(x_A ; y_A)$ et $B(x_B ; y_B)$, le vecteur $\vec{AB}$ a pour coordonnées $(x_B - x_A ; y_B - y_A)$. Deux vecteurs $\vec{u}(X ; Y)$ et $\vec{v}(X' ; Y')$ sont colinéaires si et seulement si leur déterminant est nul : $XY' - YX' = 0$.
* **Question 2 :** L'appartenance d'un point $M(x ; y)$ à la droite $(AB)$ se traduit par la colinéarité des vecteurs $\vec{AM}$ et $\vec{AB}$.
* **Question 3 :** Testez les coordonnées du point $P$ dans l'équation cartésienne obtenue. Pour l'analyse critique, confrontez l'écart algébrique constaté avec la tolérance instrumentale fournie dans le contexte.

---

### 📋 Correction détaillée pas à pas

#### 1. Nature de la trajectoire
Calculons les coordonnées des vecteurs $\vec{AB}$ et $\vec{AC}$ :
* Pour $\vec{AB}$ :
  $$\vec{AB} = \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix} = \begin{pmatrix} 5 - 1 \\ 6 - 2 \end{pmatrix} = \begin{pmatrix} 4 \\ 4 \end{pmatrix}$$
* Pour $\vec{AC}$ :
  $$\vec{AC} = \begin{pmatrix} x_C - x_A \\ y_C - y_A \end{pmatrix} = \begin{pmatrix} 9 - 1 \\ 10 - 2 \end{pmatrix} = \begin{pmatrix} 8 \\ 8 \end{pmatrix}$$

Testons la colinéarité de ces deux vecteurs à l'aide du déterminant :
$$\det(\vec{AB}, \vec{AC}) = (4 \times 8) - (4 \times 8) = 32 - 32 = 0$$

Le déterminant étant nul, les vecteurs $\vec{AB}$ et $\vec{AC}$ sont colinéaires ($\vec{AC} = 2\vec{AB}$). Par conséquent, les points $A$, $B$ et $C$ sont alignés. **La trajectoire modélisée est donc rectiligne.**

---

#### 2. Équation cartésienne de la trajectoire
Soit $M(x ; y)$ un point du plan. Le point $M$ appartient à la droite $(AB)$ si et seulement si les vecteurs $\vec{AM}$ et $\vec{AB}$ sont colinéaires.
* Coordonnées de $\vec{AM}$ : 
  $$\vec{AM} = \begin{pmatrix} x - 1 \\ y - 2 \end{pmatrix}$$

Exprimons la condition de colinéarité via le déterminant nul :
$$\det(\vec{AM}, \vec{AB}) = 0$$
$$(x - 1) \times 4 - (y - 2) \times 4 = 0$$

En développant et simplifiant par $4$ :
$$4(x - 1) - 4(y - 2) = 0 \iff x - 1 - y + 2 = 0 \iff x - y + 1 = 0$$

L'équation cartésienne de la droite $(\Delta)$ modélisant la trajectoire est :
$$(\Delta) : x - y + 1 = 0$$

---

#### 3. Validation du modèle et analyse critique
Testons les coordonnées du point $P(7 ; 7{,}05)$ dans l'équation de $(\Delta)$ :
$$x_P - y_P + 1 = 7 - 7{,}05 + 1 = 0{,}95$$

Puisque $0{,}95 \neq 0$, le point $P$ n'appartient **pas** strictement à la droite $(\Delta)$. Mathématiquement, le modèle rejette cette position.

**Analyse critique et limites du modèle :**
Cependant, l'analyse scientifique ne se limite pas à une stricte dichotomie binaire (vrai/faux). Le texte indique une incertitude de mesure des capteurs de $\pm 0{,}1\text{ m}$. 
* L'écart mesuré entre la position théorique sur la droite et la position enregistrée $P$ est de $0{,}05\text{ m}$ (soit $5\text{ cm}$ en projection orthogonale).
* Cet écart ($0{,}05\text{ m}$) est inférieur à l'incertitude instrumentale maximale ($\pm 0{,}1\text{ m}$).

**Conclusion pédagogique :** Bien que le point $P$ ne satisfasse pas rigoureusement l'équation mathématique idéale, **le modèle ne peut pas être invalidé** sur cette seule base. L'erreur constatée est imputable aux bruits de mesure des capteurs et non nécessairement à une rupture de la trajectoire rectiligne. En sciences, un modèle est validé s'il rend compte des observations aux incertitudes de mesure près.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
