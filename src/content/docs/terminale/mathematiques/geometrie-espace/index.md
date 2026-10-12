---
title: "Cours : Géométrie dans l'espace"
description: "Synthèse officielle du cours et formules essentielles."
---

## 📌 1. Notions clés & Définitions

Dans l'espace muni d'un repère orthonormé $(O; \vec{i}, \vec{j}, \vec{k})$, la géométrie analytique permet de résoudre des problèmes d'incidence et d'orthogonalité.

*   **Vecteur normal à un plan :** Un vecteur non nul $\vec{n}$ est dit normal à un plan $\mathcal{P}$ si la droite dirigée par $\vec{n}$ est orthogonale au plan $\mathcal{P}$.
*   **Représentation paramétrique d'une droite :** Définie par un point $A(x_A, y_A, z_A)$ et un vecteur directeur non nul $\vec{u}(α, β, γ)$. Tout point $M(x, y, z)$ de la droite vérifie un système liant les coordonnées à un paramètre réel $t$.
*   **Équation cartésienne d'un plan :** Tout plan $\mathcal{P}$ possède une équation de la forme $ax + by + cz + d = 0$, où $a$, $b$ et $c$ ne sont pas tous nuls. Le vecteur $\vec{n}(a; b; c)$ est alors un vecteur normal à ce plan.
*   **Orthogonalité et parallélisme :** 
    *   Deux droites sont parallèles si leurs vecteurs directeurs sont colinéaires.
    *   Deux plans sont parallèles si leurs vecteurs normaux sont colinéaires.
    *   Une droite et un plan sont orthogonaux si le vecteur directeur de la droite est colinéaire au vecteur normal du plan.

---

## 📐 2. Formules et Propriétés fondamentales

*   **Représentation paramétrique d'une droite $(\Delta)$ passant par $A(x_A, y_A, z_A)$ de vecteur directeur $\vec{u}(\alpha; \beta; \gamma)$ :**
    $$(D) : \begin{cases} x = x_A + \alpha t \\ y = y_A + \beta t \\ z = z_A + \gamma t \end{cases} \quad (t \in \mathbb{R})$$

*   **Équation cartésienne d'un plan $\mathcal{P}$ passant par $A(x_A, y_A, z_A)$ et de vecteur normal $\vec{n}(a; b; c)$ :**
    $$a(x - x_A) + b(y - y_A) + c(z - z_A) = 0$$
    Ce qui donne après simplification une équation de la forme : $ax + by + cz + d = 0$.

*   **Distance d'un point $M_0(x_0, y_0, z_0)$ à un plan $\mathcal{P}$ d'équation $ax + by + cz + d = 0$ :**
    $$d(M_0, \mathcal{P}) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$$

*   **Produit scalaire dans l'espace :**
    Si $\vec{u}(x; y; z)$ et $\vec{u'}(x'; y'; z')$, alors :
    $$\vec{u} \cdot \vec{u'} = xx' + yy' + zz' = \|\vec{u}\| \|\vec{u'}\| \cos(\vec{u}, \vec{u'})$$
    Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul : $\vec{u} \cdot \vec{u'} = 0$.

---

## 💡 3. Exemple d'application résolu (Pas à pas)

**Énoncé :**
Dans un repère orthonormé, on considère le point $A(1; -1; 2)$ et le plan $\mathcal{P}$ d'équation $2x - y + 2z - 3 = 0$.
1. Déterminer une représentation paramétrique de la droite $\Delta$ passant par $A$ et orthogonale au plan $\mathcal{P}$.
2. Déterminer les coordonnées du point $H$, intersection de la droite $\Delta$ et du plan $\mathcal{P}$.

**Résolution :**

*   **Étape 1 : Trouver la représentation paramétrique de $\Delta$.**
    Puisque $\Delta$ est orthogonale au plan $\mathcal{P}$, son vecteur directeur $\vec{u}$ peut être choisi comme le vecteur normal du plan $\mathcal{P}$, soit $\vec{n}(2; -1; 2)$.
    La droite $\Delta$ passe par $A(1; -1; 2)$ et a pour vecteur directeur $\vec{u}(2; -1; 2)$. Sa représentation paramétrique est donc :
    $$(\Delta) : \begin{cases} x = 1 + 2t \\ y = -1 - t \\ z = 2 + 2t \end{cases} \quad (t \in \mathbb{R})$$

*   **Étape 2 : Déterminer les coordonnées du point d'intersection $H$.**
    Le point $H$ appartient à $\Delta$, donc ses coordonnées vérifient le système précédent pour un certain réel $t$. De plus, $H$ appartient au plan $\mathcal{P}$, donc ses coordonnées vérifient l'équation du plan.
    On substitue $x$, $y$ et $z$ dans l'équation de $\mathcal{P}$ :
    $$2(1 + 2t) - (-1 - t) + 2(2 + 2t) - 3 = 0$$
    $$2 + 4t + 1 + t + 4 + 4t - 3 = 0$$
    $$9t + 4 = 0 \implies t = -\frac{4}{9}$$

*   **Étape 3 : Calculer les coordonnées exactes de $H$.**
    On remplace $t = -\frac{4}{9}$ dans le système de $\Delta$ :
    *   $x = 1 + 2\left(-\frac{4}{9}\right) = 1 - \frac{8}{9} = \frac{1}{9}$
    *   $y = -1 - \left(-\frac{4}{9}\right) = -1 + \frac{4}{9} = -\frac{5}{9}$
    *   $z = 2 + 2\left(-\frac{4}{9}\right) = 2 - \frac{8}{9} = \frac{10}{9}$
    
    *Conclusion :* Le point d'intersection est $H\left(\frac{1}{9} ; -\frac{5}{9} ; \frac{10}{9}\right)$. *(Ce point $H$ est le projeté orthogonal de $A$ sur $\mathcal{P}$).*

---

## ⚠️ 4. Pièges fréquents & Conseils pour les examens

*   **Attention aux confusions de vecteurs :** Le vecteur normal d'un plan $\vec{n}(a;b;c)$ est le vecteur *directeur* d'une droite orthogonale à ce plan, mais ce n'est **pas** un vecteur directeur du plan lui-même (un plan a besoin de *deux* vecteurs directeurs non colinéaires).
*   **Ne mélangez pas les paramètres :** Si vous devez étudier l'intersection de deux droites, **utilisez deux paramètres différents** (par exemple $t$ et $k$) pour leurs représentations paramétriques respectives avant de poser un système.
*   **Vérification systématique :** Lorsque vous trouvez un point d'intersection entre une droite et un plan, injectez toujours les coordonnées trouvées dans l'équation du plan pour vérifier que le résultat est bien égal à 0. C'est un excellent moyen d'éviter les erreurs de calcul.
*   **Rédaction rigoureuse :** Précisez toujours clairement la nature des objets mathématiques manipulés (ex: *"Soit $\vec{u}$ un vecteur directeur de la droite..."*) avant d'appliquer les formules.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
