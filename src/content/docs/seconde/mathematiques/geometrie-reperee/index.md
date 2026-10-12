---
title: "Cours : Géométrie repérée et vecteurs"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Dans un plan muni d'un repère orthonormé $(O; \vec{i}, \vec{j})$, la géométrie repérée permet de traduire des problèmes géométriques en outils algébriques, et inversement.

*   **Repère orthonormé (RON) :** Un repère $(O; \vec{i}, \vec{j})$ est dit orthonormé si les axes sont perpendiculaires et si les vecteurs de base $\vec{i}$ et $\vec{j}$ ont pour norme $1$.
*   **Vecteur du plan :** Un vecteur $\vec{u}$ est caractérisé par une direction, un sens et une norme. Il est défini par un déplacement géométrique. Si l'on se donne deux points $A(x_A; y_A)$ et $B(x_B; y_B)$, le vecteur $\vec{AB}$ a pour coordonnées :
    $$\vec{AB} \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$$
*   **Colinéarité de deux vecteurs :** Deux vecteurs non nuls $\vec{u}$ et $\vec{v}$ sont colinéaires s'ils ont la même direction. Analytiquement, cela signifie qu'il existe un réel $k$ tel que $\vec{u} = k\vec{v}$ (ou $\vec{v} = k\vec{u}$).
*   **Déterminant de deux vecteurs :** Soit $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$. Le déterminant de $\vec{u}$ et $\vec{v}$, noté $\det(\vec{u}, \vec{v})$ ou $\begin{vmatrix} x & x' \\ y & y' \end{vmatrix}$, est défini par :
    $$\det(\vec{u}, \vec{v}) = xy' - yx'$$

---

## 📐 2. Formules et Propriétés fondamentales

### A. Distances et Milieu
Soient $A(x_A; y_A)$ et $B(x_B; y_B)$ deux points du plan.
*   **Distance (norme d'un vecteur) :** La distance $AB$ est donnée par la formule de la norme :
    $$AB = \|\vec{AB}\| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$
*   **Coordonnées du milieu :** Le milieu $I$ du segment $[AB]$ a pour coordonnées :
    $$x_I = \frac{x_A + x_B}{2} \quad \text{et} \quad y_I = \frac{y_A + y_B}{2}$$

### B. Opérations sur les vecteurs
Soient $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$, $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ et $k \in \mathbb{R}$.
*   **Somme de vecteurs :** $\vec{u} + \vec{v} \begin{pmatrix} x + x' \\ y + y' \end{pmatrix}$
*   **Multiplication par un scalaire :** $k\vec{u} \begin{pmatrix} kx \\ ky \end{pmatrix}$

### C. Caractérisation analytique du parallélisme et de l'alignement
*   **Colinéarité :** $\vec{u}$ et $\vec{v}$ sont colinéaires **si et seulement si** leur déterminant est nul :
    $$\det(\vec{u}, \vec{v}) = 0 \iff xy' - yx' = 0$$
*   **Alignement de points :** Les points $A$, $B$ et $C$ sont alignés si et seulement si les vecteurs $\vec{AB}$ et $\vec{AC}$ sont colinéaires ($\det(\vec{AB}, \vec{AC}) = 0$).
*   **Parallélisme de droites :** Les droites $(AB)$ et $(CD)$ sont parallèles si et seulement si les vecteurs $\vec{AB}$ et $\vec{CD}$ sont colinéaires.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Dans un repère orthonormé $(O; \vec{i}, \vec{j})$, on considère les points $A(1; 2)$, $B(4; 3)$ et $C(7; 4)$.
1. Calculer les coordonnées du vecteur $\vec{AB}$ et la distance $AB$.
2. Les points $A$, $B$ et $C$ sont-ils alignés ?

**Correction :**

1. **Calcul du vecteur $\vec{AB}$ et de la distance $AB$ :**
   * Coordonnées :
     $$\vec{AB} \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix} = \begin{pmatrix} 4 - 1 \\ 3 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$$
   * Distance $AB$ :
     $$AB = \|\vec{AB}\| = \sqrt{3^2 + 1^2} = \sqrt{9 + 1} = \sqrt{10}$$

2. **Alignement des points $A$, $B$ et $C$ :**
   Pour déterminer si $A$, $B$ et $C$ sont alignés, étudions la colinéarité des vecteurs $\vec{AB}$ et $\vec{AC}$.
   * Calculons d'abord les coordonnées de $\vec{AC}$ :
     $$\vec{AC} \begin{pmatrix} 7 - 1 \\ 4 - 2 \end{pmatrix} = \begin{pmatrix} 6 \\ 2 \end{pmatrix}$$
   * Calculons le déterminant des vecteurs $\vec{AB}\begin{pmatrix} 3 \\ 1 \end{pmatrix}$ et $\vec{AC}\begin{pmatrix} 6 \\ 2 \end{pmatrix}$ :
     $$\det(\vec{AB}, \vec{AC}) = (3 \times 2) - (1 \times 6) = 6 - 6 = 0$$
   * Puisque le déterminant est nul, les vecteurs $\vec{AB}$ et $\vec{AC}$ sont colinéaires ($\vec{AC} = 2\vec{AB}$). Par conséquent, **les points $A$, $B$ et $C$ sont alignés**.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention à l'ordre des points dans un vecteur :** Le vecteur $\vec{AB}$ se calcule par $\text{Fin} - \text{Début}$, soit $(x_B - x_A)$. Inverser l'ordre donne l'opposé $\vec{BA} = -\vec{AB}$, ce qui fausse les calculs de déterminant si l'on n'y prend pas garde.
*   **Confusion entre milieu et longueur :** Pour le milieu, on *additionne* les coordonnées et on *divise par 2* ($\frac{x_A+x_B}{2}$). Pour la distance, on utilise une *soustraction* au carré sous une *racine carrée* ($\sqrt{(x_B-x_A)^2}$). Ne pas mélanger les deux formules.
*   **Rédaction rigoureuse pour la colinéarité :** Ne dites pas « le déterminant est égal à 0 donc les vecteurs sont égaux ». Un déterminant nul indique uniquement la **colinéarité** (la proportionnalité), pas l'égalité des normes ou des sens.
*   **Conseil d'évaluation :** Faites systématiquement un schéma à main levée sur votre brouillon pour visualiser la position relative des points et des vecteurs avant de vous lancer dans les calculs analytiques. Cela permet d'anticiper le résultat (par exemple, un déterminant négatif ou positif selon l'orientation).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
