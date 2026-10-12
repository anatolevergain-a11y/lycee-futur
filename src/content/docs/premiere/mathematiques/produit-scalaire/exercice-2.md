---
title: "Exercice 2 : Projections orthogonales et ingénierie"
description: "Application pratique du chapitre Produit scalaire"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la conception d'un système de freinage magnétique pour les trains à grande vitesse, les ingénieurs étudient la composante utile d'une force de répulsion. Soit un aimant permanent embarqué sous le bogie d'une rame, générant une force $\vec{F}$ constante en norme, modélisée dans un repère orthonormé $(O; \vec{i}, \vec{j})$.

En raison de la géométrie de la voie et des tolérances de fabrication, le vecteur force $\vec{F}$ fait un angle $\alpha$ avec le plan horizontal de déplacement de la rame, défini par le vecteur unitaire $\vec{u}$. Pour optimiser l'efficacité énergétique du système, seule la composante colinéaire à la direction du mouvement contribue au freinage (travail moteur ou résistant), tandis que la composante orthogonale génère des contraintes mécaniques sur les rails sans effet propulsif direct. 

Les données initiales du bureau d'études sont les suivantes :
* La norme de la force est $\|\vec{F}\| = 1,2 \times 10^4\text{ N}$.
* Le vecteur directeur du rail est $\vec{u} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
* Le vecteur force mesuré sur un banc d'essai est $\vec{F} = \begin{pmatrix} F_x \\ F_y \end{pmatrix}$ avec $F_x = 1,0 \times 10^4\text{ N}$ et $F_y = 6,67 \times 10^3\text{ N}$ (valeurs soumises à une incertitude de mesure instrumentale de $\pm 2\,\%$).

L'objectif de cet exercice est d'analyser la pertinence du modèle par le calcul vectoriel et d'évaluer l'impact des incertitudes de mesure sur les décisions d'ingénierie.

---

### ❓ Énoncé

1. **Modélisation géométrique :** Exprimer la force utile $\vec{F}_{\text{utile}}$ (projetée orthogonalement sur la direction du mouvement portée par $\vec{u}$) en fonction du produit scalaire $\vec{F} \cdot \vec{u}$ et du vecteur $\vec{u}$. Calculer la valeur numérique de cette force utile.
2. **Analyse énergétique :** Le travail $W$ de cette force lors d'un déplacement élémentaire $\vec{AB} = d \cdot \vec{u}$ (avec $d = 15\text{ m}$) est défini par le produit scalaire $\vec{F} \cdot \vec{AB}$. Calculer ce travail en joules (J). 
3. **Esprit critique et incertitudes :** En tenant compte de l'incertitude de $\pm 2\,\%$ sur la mesure de $\|\vec{F}\|$, déterminer l'intervalle de confiance de la force utile calculée à la question 1. En tant qu'ingénieur, quel compromis proposez-vous si le seuil critique de sécurité exige une force utile minimale de $9,8 \times 10^3\text{ N}$ ?

---

### 💡 Indice de méthode

* **Question 1 :** Rappelez-vous que la projection orthogonale d'un vecteur $\vec{F}$ sur une droite dirigée par un vecteur unitaire $\vec{u}$ s'exprime par $\vec{F}_{\text{utile}} = (\vec{F} \cdot \vec{u})\vec{u}$. Utilisez ensuite la formule analytique du produit scalaire dans un repère orthonormal.
* **Question 2 :** Le travail d'une force constante le long d'un vecteur déplacement est une application directe de la définition géométrique ou algébrique du produit scalaire.
* **Question 3 :** Propaguez l'incertitude relative maximale sur la norme ou sur les composantes pour encadrer la valeur obtenue, puis comparez rigoureusement ce résultat au seuil requis en évitant tout biais d'affirmation dogmatique.

---

### 📋 Correction détaillée pas à pas

1. **Modélisation géométrique de la force utile :**
   La force utile correspond à la composante colinéaire de $\vec{F}$ dans la direction du rail $\vec{u}$. Par définition de la projection orthogonale, le vecteur projeté est :
   $$\vec{F}_{\text{utile}} = (\vec{F} \cdot \vec{u})\vec{u}$$
   Exprimons le produit scalaire à l'aide des coordonnées dans le repère $(O; \vec{i}, \vec{j})$ :
   $$\vec{F} \cdot \vec{u} = F_x \times 1 + F_y \times 0 = F_x$$
   A.N. : $\vec{F} \cdot \vec{u} = 1,0 \times 10^4\text{ N}$.
   Par conséquent, la force utile s'écrit :
   $$\vec{F}_{\text{utile}} = (1,0 \times 10^4)\vec{u}$$
   Sa norme est donc $\|\vec{F}_{\text{utile}}\| = 1,0 \times 10^4\text{ N}$.

2. **Analyse énergétique (Calcul du travail) :**
   Le travail $W$ de la force $\vec{F}$ pour un déplacement $\vec{AB} = d \cdot \vec{u}$ est donné par :
   $$W = \vec{F} \cdot \vec{AB} = \vec{F} \cdot (d \cdot \vec{u}) = d \times (\vec{F} \cdot \vec{u})$$
   A.N. : 
   $$W = 15 \times (1,0 \times 10^4) = 1,5 \times 10^5\text{ J}$$
   Le système fournit donc un travail de $1,5 \times 10^5\text{ Joules}$ sur la distance considérée.

3. **Analyse critique et gestion des incertitudes :**
   L'incertitude instrumentale de $\pm 2\,\%$ sur la mesure de la force implique que la norme $\|\vec{F}\|$, et par conséquent la composante mesurée $F_x$, est entachée d'une erreur relative du même ordre de grandeur (en supposant l'angle mesuré avec une précision supérieure ou négligeable dans un premier modèle d'approche).
   Calculons les bornes de l'intervalle de confiance pour la force utile :
   * Borne inférieure : $1,0 \times 10^4 \times (1 - 0,02) = 9,8 \times 10^3\text{ N}$.
   * Borne supérieure : $1,0 \times 10^4 \times (1 + 0,02) = 1,02 \times 10^4\text{ N}$.

   **Discussion critique pour l'ingénieur :** 
   Le seuil critique de sécurité exigé est de $9,8 \times 10^3\text{ N}$. La valeur nominale calculée est supérieure ($1,0 \times 10^4\text{ N}$), ce qui valide *a priori* le système. Toutefois, la borne inférieure de l'intervalle de confiance coïncide exactement avec le seuil critique limite. 
   Du point de vue de la sécurité des systèmes industriels, un modèle dont la borne basse atteint le seuil critique présente un risque inacceptable de non-conformité en raison des aléas de fabrication et d'usure. Il convient donc de recommander une modification du design (par exemple, augmenter légèrement l'intensité du champ magnétique nominal de $\approx 3$ à $5\,\%$) afin de déplacer l'intervalle de confiance entièrement au-dessus du seuil de sécurité, malgré le surcoût énergétique induit.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
