---
title: "Cours : Calcul vectoriel avancé"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Le calcul vectoriel en classe de Seconde permet de formaliser les notions de déplacement, de direction et de longueur dans le plan muni d'un repère. 

*   **Vecteur :** Un vecteur $\vec{u}$ est caractérisé par trois données :
    1. Une **direction** (celle d'une droite $(AB)$).
    2. Un **sens** (de $A$ vers $B$).
    3. Une **norme** (la longueur du segment $[AB]$, notée $\|\vec{u}\|$).

*   **Égalité de deux vecteurs :** Deux vecteurs $\vec{u}$ et $\vec{v}$ sont égaux si et seulement s'ils ont la même direction, le même sens et la même norme. Géométriquement, cela signifie que le quadrilatère $ABDC$ est un parallélogramme (éventuellement aplati) lorsque $\vec{u} = \overrightarrow{AB}$ et $\vec{v} = \overrightarrow{CD}$.

*   **Vecteur nul :** Le vecteur nul, noté $\vec{0}$, a une norme nulle. Sa direction et son sens ne sont pas définis. On a $\overrightarrow{AA} = \vec{0}$ pour tout point $A$.

*   **Coordonnées d'un vecteur dans un repère :** 
    Dans un repère $(O; \vec{i}, \vec{j})$, si un vecteur $\vec{u}$ est représenté par le bipoint $\overrightarrow{AB}$ avec $A(x_A ; y_A)$ et $B(x_B ; y_B)$, alors les coordonnées de $\vec{u}$ sont :
    $$\vec{u}\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$$

## 📐 2. Formules et Propriétés fondamentales

*   **Relation de Chasles :**
    Pour tous points $A$, $B$ et $C$ du plan, on a l'égalité vectorielle :
    $$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$$

*   **Somme de deux vecteurs :**
    Si $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$, alors la somme $\vec{u} + \vec{v}$ a pour coordonnées :
    $$\vec{u} + \vec{v}\begin{pmatrix} x + x' \\ y + y' \end{pmatrix}$$

*   **Multiplication d'un vecteur par un réel :**
    Soit $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ un vecteur et $k$ un nombre réel. Le vecteur $k\vec{u}$ a pour coordonnées :
    $$k\vec{u}\begin{pmatrix} k \times x \\ k \times y \end{pmatrix}$$
    *   *Propriété géométrique :* Si $k \neq 0$ et $\vec{u} \neq \vec{0}$, les vecteurs $\vec{u}$ et $k\vec{u}$ sont colinéaires (ils ont la même direction).

*   **Colinéarité de deux vecteurs :**
    Deux vecteurs non nuls $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ sont colinéaires si et seulement si leurs coordonnées sont proportionnelles, c'est-à-dire si leur déterminant est nul :
    $$\det(\vec{u}, \vec{v}) = x y' - x' y = 0$$
    *   *Conséquence géométrique :* Deux droites $(AB)$ et $(CD)$ sont parallèles si et seulement si les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{CD}$ sont colinéaires.

*   **Milieu d'un segment :**
    Le milieu $I$ d'un segment $[AB]$ a pour coordonnées :
    $$x_I = \frac{x_A + x_B}{2} \quad \text{et} \quad y_I = \frac{y_A + y_B}{2}$$

## 💡 3. Exemple d'application résolu

**Énoncé :**
Dans un repère orthonormé $(O; \vec{i}, \vec{j})$, on considère les points $A(1 ; 2)$, $B(4 ; 3)$ et $C(7 ; 4)$.
1. Calculer les coordonnées des vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$.
2. Les points $A$, $B$ et $C$ sont-ils alignés ?

**Solution :**
1. *Calcul des coordonnées des vecteurs :*
   Pour $\overrightarrow{AB}$ :
   $$\overrightarrow{AB}\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix} = \begin{pmatrix} 4 - 1 \\ 3 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$$

   Pour $\overrightarrow{AC}$ :
   $$\overrightarrow{AC}\begin{pmatrix} x_C - x_A \\ y_C - y_A \end{pmatrix} = \begin{pmatrix} 7 - 1 \\ 4 - 2 \end{pmatrix} = \begin{pmatrix} 6 \\ 2 \end{pmatrix}$$

2. *Étude de l'alignement :*
   Les points $A$, $B$ et $C$ sont alignés si et seulement si les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires.
   Calculons le déterminant de ces deux vecteurs :
   $$\det(\overrightarrow{AB}, \overrightarrow{AC}) = (3 \times 2) - (1 \times 6) = 6 - 6 = 0$$
   Le déterminant est nul, donc les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont colinéaires. 
   Par conséquent, les points $A$, $B$ et $C$ **sont alignés**.

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention à l'ordre dans la formule des coordonnées :** Le vecteur $\overrightarrow{AB}$ se calcule toujours en faisant "coordonnées de l'arrivée $B$ moins coordonnées du départ $A$". Inverser $A$ et $B$ change le signe du vecteur ($\overrightarrow{BA} = -\overrightarrow{AB}$).
*   **Confusion entre milieu et longueur :** Ne pas confondre la formule du milieu (qui utilise une addition $\frac{x_A + x_B}{2}$) avec la formule de la distance (qui utilise une soustraction au carré sous une racine carrée).
*   **Rédaction de la colinéarité :** Pour prouver que des points $A$, $B$, $C$ et $D$ définissent des droites parallèles $(AB)$ et $(CD)$, calculez explicitement les coordonnées des vecteurs $\overrightarrow{AB}$ et $\overrightarrow{CD}$, puis posez clairement le calcul du déterminant. Concluez toujours en faisant le lien explicite avec la colinéarité.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
