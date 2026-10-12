---
title: "Cours : Fonctions polynômes du second degré"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Une fonction polynôme du second degré est une fonction $f$ définie sur l'ensemble des nombres réels $\mathbb{R}$ par une expression de la forme :

$$f(x) = ax^2 + bx + c$$

où $a$, $b$ et $c$ sont des nombres réels donnés, avec la condition impérative $a \neq 0$.

*   **Forme développée (ou canonique) :** L'écriture $ax^2 + bx + c$ est la forme développée et ordonnée.
*   **Représentation graphique :** Dans un repère orthormé, la courbe représentative d'une fonction polynôme du second degré est une **parabole**.
*   **Discriminant :** Pour étudier les racines (ou zéros) d'un tel polynôme, on calcule un nombre fondamental appelé le discriminant, noté $\Delta$ (lettre grecque delta), défini par :
    $$\Delta = b^2 - 4ac$$

---

## 📐 2. Formules et Propriétés fondamentales

### A. Allure de la parabole et variations
Le sens de variation de la fonction $f$ dépend exclusivement du signe du coefficient $a$ :
*   Si $a > 0$, la parabole est tournée vers le haut. La fonction est décroissante puis croissante. Elle admet un **minimum**.
*   Si $a < 0$, la parabole est tournée vers le bas. La fonction est croissante puis décroissante. Elle admet un **maximum**.

### B. Forme canonique
Toute fonction polynôme du second degré peut s'écrire sous la forme dite **canonique** :
$$f(x) = a(x - \alpha)^2 + \beta$$
Les coordonnées du sommet $S$ de la parabole sont $(\alpha ; \beta)$, avec :
$$\alpha = -\frac{b}{2a} \quad \text{et} \quad \beta = f(\alpha) = -\frac{\Delta}{4a}$$

### C. Racines et factorisation selon le signe de $\Delta$
Le nombre de solutions de l'équation $ax^2 + bx + c = 0$ dépend du signe du discriminant $\Delta = b^2 - 4ac$ :

1.  **Si $\Delta > 0$ (Deux solutions réelles) :**
    L'équation admet deux solutions distinctes :
    $$x_1 = \frac{-b - \sqrt{\Delta}}{2a} \quad \text{et} \quad x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$
    La fonction se factorise sous la forme : $f(x) = a(x - x_1)(x - x_2)$.

2.  **Si $\Delta = 0$ (Une solution réelle double) :**
    L'équation admet une unique solution (racine double) :
    $$x_0 = \frac{-b}{2a}$$
    La fonction se factorise sous la forme : $f(x) = a(x - x_0)^2$.

3.  **Si $\Delta < 0$ (Aucune solution réelle) :**
    L'équation n'admet aucune solution dans $\mathbb{R}$.
    Il n'existe pas de factorisation dans $\mathbb{R}$ sous forme de produit de facteurs du premier degré.

### D. Signe du trinôme
Pour tout $x \in \mathbb{R}$, le signe de $f(x)$ est du signe de $a$ à l'extérieur des racines (si $\Delta > 0$), et du signe de $a$ partout ailleurs (sauf en $x_0$ où il s'annule si $\Delta = 0$).

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Soit la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = 2x^2 - 8x + 6$.
1. Calculer le discriminant de $f$.
2. Déterminer les racines de $f$ et donner sa forme factorisée.
3. Préciser les variations de $f$ et les coordonnées de son sommet.

**Résolution :**
1. **Calcul du discriminant :**
   Ici, $a = 2$, $b = -8$ et $c = 6$.
   $$\Delta = b^2 - 4ac = (-8)^2 - 4 \times 2 \times 6 = 64 - 48 = 16$$
   Comme $\Delta > 16 > 0$, l'équation $f(x) = 0$ admet deux solutions distinctes.

2. **Calcul des racines et factorisation :**
   $$\sqrt{\Delta} = \sqrt{16} = 4$$
   $$x_1 = \frac{-(-8) - 4}{2 \times 2} = \frac{8 - 4}{4} = \frac{4}{4} = 1$$
   $$x_2 = \frac{-(-8) + 4}{2 \times 2} = \frac{8 + 4}{4} = \frac{12}{4} = 3$$
   Les racines sont $1$ et $3$. La forme factorisée est :
   $$f(x) = 2(x - 1)(x - 3)$$

3. **Sommet et variations :**
   Puisque $a = 2 > 0$, la parabole est tournée vers le haut et admet un minimum.
   L'abscisse du sommet est :
   $$\alpha = -\frac{b}{2a} = -\frac{-8}{2 \times 2} = \frac{8}{4} = 2$$
   L'ordonnée du sommet est :
   $$\beta = f(2) = 2(2)^2 - 8(2) + 6 = 2(4) - 16 + 6 = 8 - 16 + 6 = -2$$
   Le sommet de la parabole est le point $S(2 ; -2)$.
   La fonction est décroissante sur l'intervalle $(-\infty ; 2]$, puis croissante sur l'intervalle $[2 ; +\infty)$.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Oublier de vérifier que $a \neq 0$ :** Si $a = 0$, l'expression $ax^2 + bx + c$ redevient une fonction affine. Ce n'est plus un polynôme du second degré, les formules avec le discriminant ne s'appliquent pas.
*   **Erreurs de signes avec le coefficient $b$ ou le terme $4ac$ :** Soyez extrêmement rigoureux lors du calcul de $\Delta = b^2 - 4ac$, notamment lorsque $b$ ou $a$ ou $c$ sont négatifs (attention aux doubles moins). Par exemple, $(-8)^2$ donne $64$ et non $-64$.
*   **Confondre racines et sommet :** Les racines sont les antécédents pour lesquels $f(x) = 0$ (intersection avec l'axe des abscisses), tandis que le sommet correspond aux extremums globaux de la fonction. Ne confondez pas la formule de $\alpha$ ($-\frac{b}{2a}$) avec celle des racines.
*   **Rédaction de la forme factorisée :** N'oubliez jamais de réécrire le coefficient $a$ devant la factorisation $a(x - x_1)(x - x_2)$. Oublier le facteur $a$ est l'une des erreurs les plus fréquentes en évaluation.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
