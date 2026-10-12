---
title: "Exercice 3 : Application à la géométrie analytique"
description: "Application pratique du chapitre Produit scalaire"
---

### 🌐 Contexte & Données scientifiques

En géométrie analytique plane, le produit scalaire constitue un outil algébrique puissant pour caractériser l'orthogonalité et résoudre des problèmes métriques sans recourir nécessairement à la trigonométrie. Dans le cadre de la modélisation de structures industrielles ou architecturales, l'utilisation d'un repère orthonormé $(O; \vec{i}, \vec{j})$ permet de traduire des propriétés géométriques en équations algébriques. 

Considérons une plaque de matériau composite dont la forme est modélisée dans un repère orthonormal. Les ingénieurs doivent valider la position d'un point de fixation critique $M$ par rapport à un axe de contrainte linéaire et s'assurer de l'orthogonalité de certains renforts structurels. L'incertitude liée aux mesures topographiques initiales est estimée à $\pm 0{,}05\text{ m}$, ce qui impose d'analyser la robustesse des calculs de coordonnées face à ces variations expérimentales.

---

### ❓ Énoncé

Dans un repère orthonormal $(O; \vec{i}, \vec{j})$ du plan, on considère les points $A(1 ; 2)$, $B(5 ; -1)$ et $C(2 ; 5)$. Soit $\mathcal{D}$ la droite passant par $A$ et de vecteur directeur $\vec{u}(-2 ; 3)$.

1. Déterminer une équation cartésienne de la droite $\mathcal{D}$. En déduire un vecteur normal $\vec{n}$ à la droite $\mathcal{D}$.
2. Calculer le produit scalaire $\vec{AB} \cdot \vec{AC}$. Interpréter géométriquement le signe de ce résultat concernant la nature du triangle $ABC$.
3. Soit $H$ le projeté orthogonal du point $B$ sur la droite $\mathcal{D}$. En utilisant l'expression analytique du produit scalaire, déterminer les coordonnées exactes du point $H$.
4. *Esprit critique et analyse de modèle :* En raison d'une incertitude de mesure, les coordonnées du point $B$ sont en réalité $B(5 \pm 0{,}05 ; -1 \pm 0{,}05)$. Évaluer l'impact maximal de cette incertitude sur le calcul de la distance $BH$ et discuter de la fiabilité du modèle géométrique pour le positionnement industriel.

---

### 💡 Indice de méthode

* **Question 1 :** Un vecteur normal $\vec{n}(a ; b)$ à une droite dont on connaît un vecteur directeur $\vec{u}(-2 ; 3)$ vérifie la condition d'orthogonalité $\vec{u} \cdot \vec{n} = 0$.
* **Question 2 :** Exprimez les coordonnées des vecteurs $\vec{AB}$ et $\vec{AC}$, puis utilisez la formule analytique du produit scalaire dans un repère orthonormal : $\vec{u} \cdot \vec{v} = xx' + yy'$.
* **Question 3 :** Le point $H$ appartient à la droite $\mathcal{D}$, donc ses coordonnées vérifient l'équation de la droite. De plus, les vecteurs $\vec{AH}$ et $\vec{u}$ sont colinéaires, ou de manière équivalente, le vecteur $\vec{BH}$ est orthogonal au vecteur directeur $\vec{u}$ de $\mathcal{D}$.
* **Question 4 :** Étudiez la propagation des erreurs en considérant les pires cas d'incertitude sur les coordonnées de $B$ par differentialité ou encadrement.

---

### 📋 Correction détaillée pas à pas

#### 1. Équation cartésienne de $\mathcal{D}$ et vecteur normal
Soit $M(x ; y)$ un point du plan. Le point $M$ appartient à la droite $\mathcal{D}$ passant par $A(1 ; 2)$ de vecteur directeur $\vec{u}(-2 ; 3)$ si et seulement si les vecteurs $\vec{AM}$ et $\vec{u}$ sont colinéaires.

On a $\vec{AM}(x - 1 ; y - 2)$. La condition de colinéarité s'écrit (déterminant nul) :
$3(x - 1) - (-2)(y - 2) = 0$
$$3x - 3 + 2y - 4 = 0$$
$$3x + 2y - 7 = 0$$

Une équation cartésienne de $\mathcal{D}$ est donc $3x + 2y - 7 = 0$.
D'après le cours, pour une droite d'équation cartésienne $ax + by + c = 0$, un vecteur normal est $\vec{n}(a ; b)$. 
Ici, un vecteur normal à $\mathcal{D}$ est **$\vec{n}(3 ; 2)$**. *(Vérification : $\vec{u} \cdot \vec{n} = (-2)\times 3 + 3\times 2 = -6 + 6 = 0$, les vecteurs sont bien orthogonaux).*

---

#### 2. Calcul du produit scalaire $\vec{AB} \cdot \vec{AC}$
Déterminons d'abord les coordonnées des vecteurs $\vec{AB}$ et $\vec{AC}$ :
* $\vec{AB}\begin{pmatrix} 5 - 1 \\ -1 - 2 \end{pmatrix} = \vec{AB}(4 ; -3)$
* $\vec{AC}\begin{pmatrix} 2 - 1 \\ 5 - 2 \end{pmatrix} = \vec{AC}(1 ; 3)$

Calculons le produit scalaire analytiquement :
$$\vec{AB} \cdot \vec{AC} = (4 \times 1) + (-3 \times 3) = 4 - 9 = -5$$

**Interprétation géométrique :** 
Puisque le produit scalaire $\vec{AB} \cdot \vec{AC}$ est négatif ($\vec{AB} \cdot \vec{AC} = -5 < 0$), l'angle $\widehat{BAC}$ est obtus ($\pi/2 < \widehat{BAC} < \pi$). Le triangle $ABC$ n'est donc pas rectangle en $A$.

---

#### 3. Coordonnées du projeté orthogonal $H$ de $B$ sur $\mathcal{D}$
Le point $H$ appartient à la droite $\mathcal{D}$, ses coordonnées $(x_H ; y_H)$ vérifient donc :
$$3x_H + 2y_H - 7 = 0 \quad \text{(Équation 1)}$$

De plus, $H$ est le projeté orthogonal de $B$ sur $\mathcal{D}$, ce qui signifie que le vecteur $\vec{BH}$ est orthogonal au vecteur directeur $\vec{u}(-2 ; 3)$ de la droite, soit $\vec{BH} \cdot \vec{u} = 0$.
Exprimons le fait que $H$ appartient à $\mathcal{D}$ sous forme vectorielle : puisque $\vec{AH}$ est colinéaire à $\vec{u}(-2 ; 3)$, il existe un réel $k$ tel que :
$$\begin{cases} x_H - 1 = -2k \\ y_H - 2 = 3k \end{cases} \implies \begin{cases} x_H = 1 - 2k \\ y_H = 2 + 3k \end{cases}$$

Substituons ces expressions dans l'équation cartésienne de $\mathcal{D}$ (Équation 1) :
$$3(1 - 2k) + 2(2 + 3k) - 7 = 0$$
$$3 - 6k + 4 + 6k - 7 = 0$$
$$0 = 0$$
*Remarque méthodologique :* L'annulation de $k$ dans la résolution directe indique que la paramétrisation doit être injectée dans la condition d'orthogonalité $\vec{BH} \cdot \vec{u} = 0$ plutôt que dans l'équation de la droite (ce qui est une tautologie). Reprenons :

Exprimons $\vec{BH}$ en fonction de $k$ :
* $B(5 ; -1)$ et $H(1 - 2k ; 2 + 3k)$
* $\vec{BH}\begin{pmatrix} (1 - 2k) - 5 \\ (2 + 3k) - (-1) \end{pmatrix} = \vec{BH}(-4 - 2k ; 3 + 3k)$

La condition d'orthogonalité avec $\vec{u}(-2 ; 3)$ donne :
$$\vec{BH} \cdot \vec{u} = 0 \iff (-2)(-4 - 2k) + 3(3 + 3k) = 0$$
$$8 + 4k + 9 + 9k = 0$$
$$13k + 17 = 0 \implies k = -\frac{17}{13}$$

Calculons les coordonnées de $H$ :
* $x_H = 1 - 2\left(-\frac{17}{13}\right) = 1 + \frac{34}{13} = \frac{47}{13}$
* $y_H = 2 + 3\left(-\frac{17}{13}\right) = 2 - \frac{51}{13} = \frac{25}{13}$

Les coordonnées exactes du point $H$ sont **$\left(\frac{47}{13} ; \frac{25}{13}\right)$**.

---

#### 4. Analyse critique du modèle face aux incertitudes de mesure
L'incertitude sur les coordonnées de $B$ est de $\Delta = 0{,}05\text{ m}$. Cela signifie que $B$ appartient à un domaine carré de dimensions $0{,}1 \times 0{,}1$. 
La distance $BH$ est la distance du point $B$ à la droite $\mathcal{D}$ d'équation $3x + 2y - 7 = 0$.
Rappelons la formule de la distance d'un point $B(x_B ; y_B)$ à une droite $ax + by + c = 0$ :
$$d(B, \mathcal{D}) = \frac{|ax_B + by_B + c|}{\sqrt{a^2 + b^2}}$$

Ici, avec $a = 3$, $b = 2$, $c = -7$ et $B(5 ; -1)$ :
$$BH = \frac{|3(5) + 2(-1) - 7|}{\sqrt{3^2 + 2^2}} = \frac{|15 - 2 - 7|}{\sqrt{9 + 4}} = \frac{|6}{\sqrt{13}} = \frac{6}{\sqrt{13}} \approx 1{,}664\text{ m}$$

En tenant compte de l'incertitude $\delta x = \pm 0{,}05$ et $\delta y = \pm 0{,}05$, évaluons l'effet sur le numérateur $N = 3x_B + 2y_B - 7$ :
Dans le pire des cas (cumul des erreurs allant dans le même sens) :
$$\Delta N = |3(\pm 0{,}05) + 2(\pm 0{,}05)| = 3(0{,}05) + 2(0{,}05) = 0{,}25$$

L'impact maximal sur la distance est donc :
$$\Delta(BH) = \frac{\Delta N}{\sqrt{13}} = \frac{0{,}25}{\sqrt{13}} \approx 0{,}069\text{ m}$$

**Discussion critique :** 
L'incertitude de mesure initiale ($\pm 0{,}05\text{ m}$) se propage et génère une incertitude sur la distance $BH$ d'environ $\pm 0{,}07\text{ m}$. Dans un contexte industriel où la tolérance d'assemblage est stricte (par exemple inférieure au millimètre), ce modèle géométrique brut montre ses limites si les données d'entrée ne sont pas consolidées par des capteurs de plus haute précision. Le modèle mathématique est exact, mais sa *validité empirique* est subordonnée à la qualité métrologique des données initiales.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
