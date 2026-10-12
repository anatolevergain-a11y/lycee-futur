---
title: "Cours : Droites dans le plan"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Dans un repère orthonormé $(O; \vec{i}, \vec{j})$ du plan :

*   **Équation cartésienne d'une droite :** 
    Toute droite $\mathcal{D}$ du plan admet une équation cartésienne de la forme :
    $$ax + by + c = 0$$
    où $a$, $b$ et $c$ sont des réels, avec $(a, b) \neq (0, 0)$.

*   **Vecteur directeur :** 
    Un vecteur non nul $\vec{u}$ est un vecteur directeur de la droite $\mathcal{D}$ si la direction de $\vec{u}$ est celle de la droite $\mathcal{D}$. 
    Si $\mathcal{D}$ a pour équation cartésienne $ax + by + c = 0$, alors le vecteur $\vec{u}(-b ; a)$ est un vecteur directeur de $\mathcal{D}$.

*   **Équation réduite d'une droite :** 
    Si une droite n'est pas verticale, elle admet une équation réduite unique de la forme :
    $$y = mx + p$$
    où $m$ est le **coefficient directeur** (ou pente) et $p$ est l'**ordonnée à l'origine**.

---

## 📐 2. Formules et Propriétés fondamentales

*   **Pente d'une droite passant par deux points :**
    Soient $A(x_A ; y_A)$ et $B(x_B ; y_B)$ deux points distincts avec $x_A \neq x_B$. Le coefficient directeur $m$ de la droite $(AB)$ se calcule par la formule :
    $$m = \frac{y_B - y_A}{x_B - x_A}$$

*   **Condition de parallélisme :**
    Deux droites $\mathcal{D}$ et $\mathcal{D}'$ de coefficients directeurs respectifs $m$ et $m'$ sont parallèles si et seulement si :
    $$m = m'$$
    Avec des vecteurs directeurs $\vec{u}$ et $\vec{u}'$, elles sont parallèles si et seulement si les vecteurs sont colinéaires (leur déterminant est nul).

*   **Condition d'alignement de trois points :**
    Trois points $A$, $B$ et $C$ du plan sont alignés si et seulement si les vecteurs $\vec{AB}$ et $\vec{AC}$ sont colinéaires.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Dans un repère orthonormé, on considère les points $A(1 ; 2)$ et $B(3 ; 6)$.
1. Déterminer le coefficient directeur de la droite $(AB)$.
2. En déduire l'équation réduite de la droite $(AB)$.

**Correction détaillée :**
1. Les abscisses de $A$ et $B$ sont distinctes ($1 \neq 3$), donc la droite $(AB)$ possède une équation réduite de la forme $y = mx + p$.
   Calculons le coefficient directeur $m$ à l'aide de la formule :
   $$m = \frac{y_B - y_A}{x_B - x_A} = \frac{6 - 2}{3 - 1} = \frac{4}{2} = 2$$
   Le coefficient directeur de la droite $(AB)$ est donc $m = 2$.

2. L'équation de la droite est de la forme $y = 2x + p$.
   Pour déterminer l'ordonnée à l'origine $p$, on utilise les coordonnées du point $A(1 ; 2)$ qui vérifient l'équation de la droite :
   $$y_A = 2x_A + p$$
   $$2 = 2(1) + p$$
   $$2 = 2 + p$$
   $$p = 0$$
   L'équation réduite de la droite $(AB)$ est donc :
   $$y = 2x$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention aux droites verticales :** 
    N'utilisez jamais la forme $y = mx + p$ pour une droite verticale (par exemple, l'axe des ordonnées). Une droite verticale a une équation de la forme $x = k$ (où $k$ est une constante). Son coefficient directeur $m$ n'existe pas (division par zéro dans la formule).

*   **Confusion entre équation cartésienne et réduite :**
    Soyez rigoureux sur la formulation demandée dans la question. Si on vous demande une *équation cartésienne*, le résultat doit être sous la forme $ax + by + c = 0$ (avec tout du même côté et zéro de l'autre).

*   **Vérification systématique :**
    Après avoir trouvé l'équation d'une droite passant par deux points $A$ et $B$, testez toujours vos résultats en remplaçant $x$ par l'abscisse de $B$. Vous devez retrouver l'ordonnée de $B$. C'est un réflexe indispensable pour s'auto-corriger en évaluation.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
