---
title: "Exercice 1 : Forme algébrique et géométrique des complexes"
description: "Application pratique du chapitre Nombres complexes (Option Maths Expertes)"
---

### 🌐 Contexte & Données scientifiques

En mathématiques appliquées et en physique (notamment en électrocinétique et en traitement du signal), l'utilisation des nombres complexes permet de modéliser des grandeurs oscillantes et de simplifier la résolution d'équations différentielles. L'analyse géométrique de ces nombres offre une interprétation visuelle des transformations du plan.

Soit $\mathbb{C}$ le corps des nombres complexes. On munit le plan complexe d'un repère orthonormal direct $(O; \vec{u}, \vec{v})$. 
Considérons un système dynamique dont l'état à un instant donné est représenté par un nombre complexe $z$. Afin d'étudier la stabilité de ce système soumis à une perturbation, on introduit une transformation géométrique complexe.

Soit $z \in \mathbb{C} \setminus \{i\}$. On définit la fonction de transfert $f$ par :
$$f(z) = \frac{z + 2i}{z - i}$$

Dans cet exercice, nous allons analyser les propriétés algébriques de cette transformation, identifier ses invariants et étudier l'ensemble des points du plan dont l'image vérifie certaines contraintes physiques de stabilité (par exemple, un amortissement pur).

---

### ❓ Énoncé

1. **Forme algébrique et conditions d'existence :**
   Déterminer l'ensemble de définition $\mathcal{D}$ de la fonction $f$. Pour tout $z = x + iy$ (avec $(x, y) \in \mathbb{R}^2$ et $z \notin \{i\}$), exprimer la forme algébrique de $f(z)$, notée $X + iY$, en fonction de $x$ et $y$.

2. **Interprétation géométrique des arguments :**
   Montrer que pour tout $z \neq i$ et $z \neq -2i$, le module et un argument de $f(z)$ peuvent s'interpréter à l'aide des affixes des points du plan complexe. En déduire l'ensemble $\mathcal{E}_1$ des points $M$ d'affixe $z$ tels que $f(z)$ soit un nombre réel strictement négatif.

3. **Étude d'un invariant et contrainte de stabilité :**
   Rechercher les points fixes de la transformation $f$, c'est-à-dire les nombres complexes $z$ tels que $f(z) = z$. 

4. **Analyse critique d'un modèle :**
   Dans le cadre d'un modèle d'oscillateur harmonique amorti, la condition critique de résonance impose que $|f(z)| = 1$. Déterminer géométriquement l'ensemble $\mathcal{E}_2$ des points $M(z)$ satisfaisant cette condition. Discuter des limites de ce modèle mathématique lorsque $z \to i$, sachant que les composants physiques réels possèdent des résistances non nulles empêchant une divergence infinie.

---

### 💡 Indice de méthode

* **Question 1 :** Pour obtenir la forme algébrique d'un quotient complexe, multipliez le numérateur et le dénominateur par le **conjugué** du dénominateur. Veillez à bien séparer la partie réelle de la partie imaginaire.
* **Question 2 :** Pensez à relier les termes $z - i$ et $z + (-2i)$ aux distances entre les points $M(z)$, $A(i)$ et $B(-2i)$. Utilisez ensuite les propriétés algébriques de l'argument d'un quotient : $\arg\left(\frac{z_1}{z_2}\right) \equiv \arg(z_1) - \arg(z_2) \pmod{2\pi}$.
* **Question 3 :** Résolvez l'équation $f(z) = z$ en vous ramenant à une équation polynomiale de degré 2 dans $\mathbb{C}$.
* **Question 4 :** Traduisez la condition $|f(z)| = 1$ en une égalité de distances dans le plan complexe.

---

### 📋 Correction détaillée pas à pas

#### 1. Forme algébrique de $f(z)$

L'expression de $f(z)$ est définie pour $z - i \neq 0$, soit $z \neq i$. L'ensemble de définition est donc $\mathcal{D} = \mathbb{C} \setminus \{i\}$.

Posons $z = x + iy$ avec $(x, y) \in \mathbb{R}^2$ et $(x, y) \neq (0, 1)$.
Substituons $z$ dans l'expression de $f(z)$ :
$$f(z) = \frac{(x + iy) + 2i}{(x + iy) - i} = \frac{x + i(y + 2)}{x + i(y - 1)}$$

Pour mettre ce nombre complexe sous forme algébrique $X + iY$, on multiplie le numérateur et le dénominateur par le conjugué du dénominateur, c'est-à-dire $x - i(y - 1)$ :
$$f(z) = \frac{[x + i(y + 2)][x - i(y - 1)]}{[x + i(y - 1)][x - i(y - 1)]}$$

Le dénominateur devient un nombre réel (carré du module) :
$$\text{Dénominateur} = x^2 + (y - 1)^2$$

Développons le numérateur :
$$\text{Numérateur} = x[x - i(y - 1)] + i(y + 2)[x - i(y - 1)]$$
$$\text{Numérateur} = x^2 - ix(y - 1) + ixy + (y + 2)(y - 1)$$
$$\text{Numérateur} = x^2 - ixy + ix + ixy + y^2 - y + 2y - 2$$
$$\text{Numérateur} = x^2 + y^2 + y - 2 + i(x)$$

En séparant la partie réelle et la partie imaginaire, on obtient :
$$f(z) = \frac{x^2 + y^2 + y - 2}{x^2 + (y - 1)^2} + i \frac{x}{x^2 + (y - 1)^2}$$

---

#### 2. Interprétation géométrique et ensemble $\mathcal{E}_1$

Soit $A$ le point d'affixe $z_A = i$ et $B$ le point d'affixe $z_B = -2i$. 
L'expression de $f(z)$ se réécrit :
$$f(z) = \frac{z - (-2i)}{z - i} = \frac{z - z_B}{z - z_A}$$

* **Module :** $|f(z)| = \left|\frac{z - z_B}{z - z_A}\right| = \frac{|z - z_B|}{|z - z_A|} = \frac{BM}{AM}$
* **Argument :** $\arg(f(z)) = \arg\left(\frac{z - z_B}{z - z_A}\right) \equiv (\vec{u}, \vec{AM}) - (\vec{u}, \vec{BM}) \pmod{2\pi}$

Dire que $f(z)$ est un nombre réel strictement négatif signifie que :
1. Sa partie imaginaire est nulle : $\frac{x}{x^2 + (y - 1)^2} = 0$, ce qui implique $x = 0$ (avec $y \neq 1$).
2. Sa partie réelle est strictement négative : $\frac{x^2 + y^2 + y - 2}{x^2 + (y - 1)^2} < 0$.

Puisque $x = 0$, la condition sur la partie réelle se réduit à :
$$\frac{0^2 + y^2 + y - 2}{0^2 + (y - 1)^2} < 0 \iff \frac{y^2 + y - 2}{(y - 1)^2} < 0$$

Le dénominateur $(y - 1)^2$ étant strictement positif pour $y \neq 1$, le signe de $f(z)$ dépend uniquement du numérateur $y^2 + y - 2$.
 cherchons les racines de $y^2 + y - 2 = 0$. Le discriminant est $\Delta = 1^2 - 4(1)(-2) = 9$.
Les racines sont :
$$y_1 = \frac{-1 - 3}{2} = -2 \quad \text{et} \quad y_2 = \frac{-1 + 3}{2} = 1$$

Le trinôme est négatif entre ses racines, soit pour $y \in ]-2, 1[$. 
Comme $y = 1$ est exclu (car $z \neq i$), l'ensemble $\mathcal{E}_1$ correspond au **segment $[AB]$ privé du point $A(i)$**, c'est-à-dire l'ensemble des points $M(0; y)$ avec $y \in [-2, 1[$.

---

#### 3. Recherche des points fixes

Un point fixe vérifie l'équation $f(z) = z$, soit :
$$\frac{z + 2i}{z - i} = z$$

Sous réserve que $z \neq i$, on multiplie par $(z - i)$ :
$$z + 2i = z(z - i)$$
$$z + 2i = z^2 - iz$$

En regroupant tous les termes dans le même membre :
$$z^2 - z(1 + i) - 2i = 0$$

Calculons le discriminant $\Delta$ de cette équation du second degré à coefficients complexes :
$$\Delta = [-(1 + i)]^2 - 4(1)(-2i) = (1 + i)^2 + 8i$$
$$\Delta = (1 + 2i - 1) + 8i = 2i + 8i = 10i$$

Cherchons une racine carrée complexe de $\Delta = 10i$. Soit $\delta = u + iv$ (avec $u, v \in \mathbb{R}$) telle que $\delta^2 = 10i$.
Cela se traduit par le système :
1. $\text{Re}(\delta^2) = u^2 - v^2 = 0$
2. $\text{Im}(\delta^2) = 2uv = 10 \implies uv = 5$
3. $|\delta|^2 = u^2 + v^2 = |10i| = 10$

En additionnant (1) et (3) : $2u^2 = 10 \implies u^2 = 5 \implies u = \pm \sqrt{5}$.
En soustrayant (1) de (3) : $2v^2 = 10 \implies v^2 = 5 \implies v = \pm \sqrt{5}$.
Puisque $uv = 5 > 0$, $u$ et $v$ sont de même signe. Une solution est donc :
$$\delta = \sqrt{5} + i\sqrt{5}$$

Les solutions de l'équation sont :
$$z_1 = \frac{(1 + i) + (\sqrt{5} + i\sqrt{5})}{2} = \frac{1 + \sqrt{5}}{2} + i \frac{1 + \sqrt{5}}{2}$$
$$z_2 = \frac{(1 + i) - (\sqrt{5} + i\sqrt{5})}{2} = \frac{1 - \sqrt{5}}{2} + i \frac{1 - \sqrt{5}}{2}$$

Le système possède donc deux états invariants distincts.

---

#### 4. Analyse critique du modèle et condition d'amplitude

La condition $|f(z)| = 1$ se traduit géométriquement par :
$$\frac{BM}{AM} = 1 \iff BM = AM$$

L'ensemble $\mathcal{E}_2$ est par conséquent la **médiatrice du segment $[AB]$**. 
Les points $A$ et $B$ ayant pour affixes respectives $i$ et $-2i$, le milieu du segment $[AB]$ a pour affixe $\frac{i + (-2i)}{2} = -\frac{i}{2}$.
Le vecteur $\vec{AB}$ a pour affixe $-2i - i = -3i$. La médiatrice est donc une droite horizontale d'équation $y = -\frac{1}{2}$.

* **Limites du modèle physique :** 
  Mathématiquement, lorsque le point $M$ s'approche indéfiniment de $A(i)$, le dénominateur $|z - i|$ tend vers $0$, ce qui théoriquement conduit à une amplification infinie de la fonction de transfert ($|f(z)| \to +\infty$). 
  Cependant, sur le plan physique, aucun système réel ne peut tolérer une énergie infinie. Les frottements, la résistance électrique intrinsèque des composants et la saturation des matériaux introduisent une borne supérieure infranchissable. Le modèle mathématique idéalisé doit donc être nuancé par l'introduction d'un facteur d'amortissement réel non nul.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
