---
title: "Cours : Produit scalaire"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Cours : Produit scalaire

## 📌 1. Notions clés & Définitions

Le produit scalaire est une opération algébrique définie sur l'ensemble des vecteurs du plan (ou de l'espace). À deux vecteurs, il associe un nombre réel.

### Définition géométrique (avec les normes et l'angle)
Soit $\vec{u}$ et $\vec{v}$ deux vecteurs du plan. 
* Si l'un des vecteurs est nul, alors $\vec{u}rop \vec{v} = 0$.
* Si les deux vecteurs sont non nuls, en considérant des représentants $\vec{u} = \vec{AB}$ et $\vec{v} = \vec{AC}$, le produit scalaire $\vec{u} \cdot \vec{v}$ est le nombre réel défini par :
$$\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\vec{u}, \vec{v})$$

### Définition analytique (dans un repère orthonormal)
Dans un repère orthonormal $(O; \vec{i}, \vec{j})$, si $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$, alors le produit scalaire est donné par la formule algébrique :
$$\vec{u} \cdot \vec{v} = xx' + yy'$$

---

## 📐 2. Formules et Propriétés fondamentales

### A. Propriétés algébriques
Pour tous vecteurs $\vec{u}, \vec{v}, \vec{w}$ et tout réel $k$ :
1. **Symétrie :** $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$
2. **Bilinéarité :** 
   * $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}$
   * $(k\vec{u}) \cdot \vec{v} = \vec{u} \cdot (k\vec{v}) = k(\vec{u} \cdot \vec{v})$

### B. Lien avec l'orthogonalité
Deux vecteurs $\vec{u}$ et $\vec{v}$ sont **orthogonaux** si et seulement si leur produit scalaire est nul :
$$\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0$$

### C. Norme et carré scalaire
Le produit scalaire d'un vecteur par lui-même est appelé le carré scalaire. Il est égal au carré de la norme du vecteur :
$$\vec{u} \cdot \vec{u} = \|\vec{u}\|^2$$

### D. Projeté orthogonal
Soit $\vec{u} = \vec{AB}$ et $\vec{v} = \vec{AC}$ deux vecteurs non nuls. Si $H$ est le projeté orthogonal du point $C$ sur la droite $(AB)$, alors :
$$\vec{AB} \cdot \vec{AC} = \vec{AB} \cdot \vec{AH}$$
Le signe de ce produit scalaire dépend du sens des vecteurs $\vec{AB}$ et $\vec{AH}$.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Dans un repère orthonormal $(O; \vec{i}, \vec{j})$, on considère les points $A(1; 2)$, $B(4; 3)$ et $C(2; 5)$.
1. Calculer le produit scalaire $\vec{AB} \cdot \AC$.
2. Le triangle $ABC$ est-il rectangle en $A$ ?

**Correction détaillée :**

1. **Calcul des coordonnées des vecteurs $\vec{AB}$ et $\vec{AC}$ :**
   * Pour $\vec{AB}$ : 
     $$\vec{AB}\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix} = \begin{pmatrix} 4 - 1 \\ 3 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$$
   * Pour $\vec{AC}$ : 
     $$\vec{AC}\begin{pmatrix} x_C - x_A \\ y_C - y_A \end{pmatrix} = \begin{pmatrix} 2 - 1 \\ 5 - 2 \end{pmatrix} = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$$

   Application de la formule analytique du produit scalaire :
   $$\vec{AB} \cdot \vec{AC} = (3 \times 1) + (1 \times 3) = 3 + 3 = 6$$

2. **Nature du triangle $ABC$ en $A$ :**
   Pour que le triangle $ABC$ soit rectangle en $A$, il faut et il suffit que les vecteurs $\vec{AB}$ et $\vec{AC}$ soient orthogonaux, c'est-à-dire que $\vec{AB} \cdot \vec{AC} = 0$.
   Or, $\vec{AB} \cdot \vec{AC} = 6 \neq 0$.
   Les vecteurs ne sont donc pas orthogonaux. Par conséquent, **le triangle $ABC$ n'est pas rectangle en $A$**.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Confusion de nature :** Le produit scalaire de deux vecteurs est un **nombre réel** (un scalaire), et non un vecteur. Écrire $\vec{u} \cdot \vec{v} = \vec{w}$ constitue une erreur fondamentale.
* **Oubli du repère orthonormal :** La formule analytique $\vec{u} \cdot \vec{v} = xx' + yy'$ n'est valable **que** dans un repère **orthonormal**. Dans un repère orthogonal non normé ou quelconque, cette formule est fausse.
* **Propriété de nullité :** $\vec{u} \cdot \vec{v} = 0$ n'implique pas nécessairement que $\vec{u} = \vec{0}$ ou $\vec{v} = \vec{0}$. Cela signifie simplement que les vecteurs sont orthogonaux.
* **Conseil rédactionnel :** Pour démontrer qu'un triangle est rectangle en géométrie analytique, explicitez clairement le calcul du produit scalaire des deux vecteurs formant l'angle, puis concluez explicitement en citant le théorème d'orthogonalité.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
