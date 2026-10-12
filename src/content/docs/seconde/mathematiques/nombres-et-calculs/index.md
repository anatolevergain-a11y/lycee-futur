---
title: "Cours : Nombres et calculs"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

### Les ensembles de nombres
Les nombres sont structurés en ensembles emboîtés, caractérisés par leurs propriétés algébriques :

*   **Entiers naturels ($\mathbb{N}$)** : Ensemble des entiers positifs ou nuls.
    $$\mathbb{N} = \{0, 1, 2, 3, \dots\}$$
*   **Entiers relatifs ($\mathbb{Z}$)** : Ensemble des entiers munis d'un signe positif ou négatif.
    $$\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$$
*   **Nombres décimaux ($\mathbb{D}$)** : Ensemble des nombres pouvant s'écrire sous la forme d'un quotient d'un entier relatif par une puissance de 10. Leur écriture décimale comporte un nombre fini de chiffres après la virgule.
    $$\mathbb{D} = \left\{ \frac{a}{10^n} \;\middle|\; a \in \mathbb{Z}, \, n \in \mathbb{N} \right\}$$
*   **Nombres rationnels ($\mathbb{Q}$)** : Ensemble des nombres pouvant s'écrire comme le quotient de deux entiers, le dénominateur étant non nul. Leur écriture décimale présente un développement périodique infini.
    $$\mathbb{Q} = \left\{ \frac{a}{b} \;\middle|\; a \in \mathbb{Z}, \, b \in \mathbb{Z}^* \right\}$$
*   **Nombres réels ($\mathbb{R}$)** : Ensemble de tous les nombres connus en classe de Seconde, représentant l'abscisse de chaque point d'une droite graduée continue. Il inclut les rationnels et les nombres **irrationnels** (qui ne peuvent pas s'écrire sous forme de fraction, tels que $\sqrt{2}$ ou $\pi$).

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{D} \subset \mathbb{Q} \subset \mathbb{R}$$

### Arithmétique dans $\mathbb{N}$
*   **Divisibilité** : Soient $a \in \mathbb{Z}$ et $b \in \mathbb{Z}^*$. On dit que $b$ divise $a$ (ou que $a$ est un multiple de $b$) s'il existe un entier $k \in \mathbb{Z}$ tel que $a = k \times b$.
*   **Nombre premier** : Un entier naturel $p$ est premier s'il possède exactement deux diviseurs distincts dans $\mathbb{N}$ : $1$ et lui-même. (Exemples : $2, 3, 5, 7, 11, \dots$ ; $1$ n'est pas premier).

### Valeur absolue et intervalles
*   **Valeur absolue** : Pour tout réel $x$, la valeur absolue de $x$, notée $|x|$, est définie par :
    $$|x| = \begin{cases} x & \text{si } x \ge 0 \\ -x & \text{si } x < 0 \end{cases}$$
*   **Interprétation géométrique** : Sur la droite numérique graduée, si $A$ et $B$ ont pour abscisses respectives $a$ et $b$, la distance $AB$ est égale à $|b - a| = |a - b|$.

---

## 📐 2. Formules et Propriétés fondamentales

### Règles de calcul algébrique
Pour tous réels non nuls $a$ et $b$, et pour tous entiers relatifs $n$ et $p$ :

*   **Puissances** :
    $$a^n \times a^p = a^{n+p} \quad ; \quad \frac{a^n}{a^p} = a^{n-p} \quad ; \quad (a^n)^p = a^{np} \quad ; \quad (ab)^n = a^n b^n$$
    $$a^{-n} = \frac{1}{a^n} \quad ; \quad a^0 = 1$$

*   **Racines carrées** (pour $a \ge 0$ et $b > 0$) :
    $$\sqrt{ab} = \sqrt{a} \times \sqrt{b} \quad ; \quad \sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} \quad ; \quad \sqrt{a^2} = |a|$$
    $$\text{Attention : En général, } \sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$$

*   **Identités remarquables** (pour tous réels $a$ et $b$) :
    $$(a + b)^2 = a^2 + 2ab + b^2$$
    $$(a - b)^2 = a^2 - 2ab + b^2$$
    $$(a - b)(a + b) = a^2 - b^2$$

### Propriétés de la valeur absolue et des intervalles
Pour $c \in \mathbb{R}$ et $r \in \mathbb{R}^+$ :
*   $|x - c| \le r \iff c - r \le x \le c + r \iff x \in [c - r \,;\, c + r]$
*   $|x - c| < r \iff c - r < x < c + r \iff x \in \,]c - r \,;\, c + r[$

### Caractérisation des nombres décimaux
Une fraction irréductible $\frac{a}{b}$ (avec $a \in \mathbb{Z}$ et $b \in \mathbb{N}^*$) appartient à $\mathbb{D}$ si et seulement si la décomposition en facteurs premiers du dénominateur $b$ ne contient aucun autre facteur que $2$ et $5$ :
$$b = 2^\alpha \times 5^\beta \quad (\alpha, \beta \in \mathbb{N})$$

---

## 💡 3. Exemple d'application résolu

### Énoncé
1. Soit le nombre réel $A = \frac{\sqrt{72} - 3\sqrt{8}}{\sqrt{2}}$. Simplifier $A$ et déterminer le plus petit ensemble ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{D}$, $\mathbb{Q}$ ou $\mathbb{R}$) auquel il appartient.
2. Démontrer que le rationnel $B = \frac{21}{280}$ est un nombre décimal.
3. Résoudre dans $\mathbb{R}$ l'inéquation $|2x - 6| \le 4$.

---

### Solution détaillée

#### 1. Simplification de $A$
On décompose les radicaux sous la forme $a\sqrt{b}$ :
$$\sqrt{72} = \sqrt{36 \times 2} = \sqrt{36} \times \sqrt{2} = 6\sqrt{2}$$
$$\sqrt{8} = \sqrt{4 \times 2} = \sqrt{4} \times \sqrt{2} = 2\sqrt{2}$$

On substitue dans l'expression de $A$ :
$$A = \frac{6\sqrt{2} - 3(2\sqrt{2})}{\sqrt{2}} = \frac{6\sqrt{2} - 6\sqrt{2}}{\sqrt{2}} = \frac{0}{\sqrt{2}} = 0$$

$0$ est un entier positif ou nul. Le plus petit ensemble contenant $A$ est donc l'ensemble des entiers naturels : **$A \in \mathbb{N}$**.

#### 2. Nature du nombre $B$
Rendons la fraction irréductible en décomposant le numérateur et le dénominateur en facteurs premiers :
*   $21 = 3 \times 7$
*   $280 = 28 \times 10 = (4 \times 7) \times (2 \times 5) = 2^3 \times 5 \times 7$

D'où :
$$B = \frac{3 \times 7}{2^3 \times 5 \times 7} = \frac{3}{2^3 \times 5^1}$$

Le dénominateur de la fraction irréductible ne contient que les facteurs premiers $2$ et $5$.
Par conséquent, **$B \in \mathbb{D}$** (on peut également vérifier que $B = \frac{3}{40} = \frac{3 \times 25}{40 \times 25} = \frac{75}{1000} = 0{,}075$).

#### 3. Résolution de l'inéquation
On factorise par $2$ à l'intérieur de la valeur absolue :
$$|2(x - 3)| \le 4 \iff 2|x - 3| \le 4 \iff |x - 3| \le 2$$

Cette condition traduit que la distance entre $x$ et $3$ est inférieure ou égale à $2$ :
$$-2 \le x - 3 \le 2$$

En ajoutant $3$ à chaque membre de l'encadrement :
$$-2 + 3 \le x \le 2 + 3 \iff 1 \le x \le 5$$

L'ensemble des solutions est l'intervalle : **$S = [1 \,;\, 5]$**.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Confusion sur la racine d'un carré** : Écrire $\sqrt{x^2} = x$ est faux si le signe de $x$ n'est pas précisé. La relation exacte est $\sqrt{x^2} = |x|$. Par exemple, $\sqrt{(-5)^2} = \sqrt{25} = 5 = |-5| \neq -5$.
*   **Fausse linéarité de la racine carrée** : L'égalité $\sqrt{a+b} = \sqrt{a} + \sqrt{b}$ est une erreur courante. 
    Contre-exemple classique : $\sqrt{9 + 16} = \sqrt{25} = 5$, alors que $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$.
*   **Critère d'appartenance à $\mathbb{D}$** : Ne jamais conclure sur la nature décimale d'un quotient avant de l'avoir mis sous forme **irréductible**. 
    Exemple : $\frac{21}{15}$ a un dénominateur multiple de 3, mais $\frac{21}{15} = \frac{7}{5} \in \mathbb{D}$.
*   **Gestion des signes et des parenthèses** : Dans le développement de $-(a - b)^2$, développer d'abord l'identité remarquable entre crochets avant de distribuer le signe négatif :
    $$-(a - b)^2 = -(a^2 - 2ab + b^2) = -a^2 + 2ab - b^2$$
*   **Rigueur sur la valeur absolue** : Rappelez-vous qu'une valeur absolue est **toujours positive ou nulle** ($|x| \ge 0$). L'équation $|x - 4| = -2$ n'admet aucune solution réelle ($S = \emptyset$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
