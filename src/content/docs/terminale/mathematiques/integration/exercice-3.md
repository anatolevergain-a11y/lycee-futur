---
title: "Exercice 3 : Inégalités de la moyenne et intégration par parties"
description: "Application pratique du chapitre Calcul intégral"
---

### 🌐 Contexte & Données scientifiques

En analyse fonctionnelle et en physique mathématique, l'évaluation directe de certaines intégrales définies s'avère impossible par la recherche d'une primitive explicite (notamment lorsque les fonctions en jeu ne possèdent pas de primitives exprimables à l'aide des fonctions usuelles). Il est alors nécessaire de recourir à des méthodes d'approximation rigoureuses, telles que l'intégration par parties (IPP) pour structurer l'expression, combinée aux théorèmes de majoration issus de l'inégalité de la moyenne.

Considérons la fonction $f$ définie sur l'intervalle $[0, 1]$ par :
$$f(x) = x^2 e^{-x^2}$$

Ce type de fonction intervient, entre autres, dans l'étude des distributions de probabilité (comme la loi normale centrée réduite) et en physique statistique. L'objectif de cet exercice est d'encadrer l'intégrale $I = \int_{0}^{1} x^2 e^{-x^2} \, dx$ sans pouvoir en calculer la valeur exacte par une primitive simple. Les modèles numériques montrent que l'utilisation de minorations et majorations polynomiales permet d'atteindre une précision contrôlée, indispensable dans les algorithmes de calcul scientifique où le compromis entre coût calculatoire (complexité) et précision est permanent.

---

### ❓ Énoncé

Soit l'intégrale $I = \int_{0}^{1} x^2 e^{-x^2} \, dx$.

1. À l'aide d'une intégration par parties judicieusement choisie, exprimer l'intégrale $I$ en fonction d'une autre intégrale faisant intervenir la fonction exponentielle.
2. Établir, pour tout $x \in [0, 1]$, un encadrement simple de la fonction $e^{-x^2}$ en utilisant les propriétés usuelles de la fonction exponentielle et la positivité de $x^2$. En déduire, par application de l'inégalité de la moyenne, un premier encadrement de l'intégrale $I$.
3. Afin d'affiner cet encadrement, on considère la fonction $g$ définie sur $[0, 1]$ par $g(x) = e^{-x^2} - (1 - x^2)$. Étudier les variations de $g$ sur $[0, 1]$ et en déduire une nouvelle inégalité liant $e^{-x^2}$ et un polynôme de degré 4.
4. En combinant l'intégration par parties de la question 1 et l'inégalité obtenue à la question 3, proposer un encadrement raffiné de $I$ d'amplitude inférieure à $0{,}05$. Discuter de l'intérêt et des limites de cette approche polynomiale par rapport à un calcul numérique itératif (méthode des rectangles ou des trapèzes).

---

### 💡 Indice de méthode

* **Pour la question 1 :** Écrivez $x^2 e^{-x^2}$ sous la forme $x \times \left(x e^{-x^2}\right)$. Remarquez que la seconde partie se dérive facilement de la fonction $e^{-x^2}$. Posez $u'(x) = x$ et $v(x) = e^{-x^2}$ (ou l'inverse, selon la stratégie d'intégration par parties).
* **Pour l'inégalité de la moyenne :** Rappelez-vous que si $m \le f(x) \le M$ sur un intervalle $[a, b]$ avec $a < b$, alors :
  $$m(b-a) \le \int_{a}^{b} f(x) \, dx \le M(b-a)$$
* **Pour la question 4 :** Veillez à bien reporter l'inégalité polynomiale dans l'intégrale obtenue via l'IPP, et calculez explicitement les intégrales de polynômes, qui sont exactes et immédiates.

---

### 📋 Correction détaillée pas à pas

#### 1. Intégration par parties
Posons l'intégrale :
$$I = \int_{0}^{1} x \left( x e^{-x^2} \right) dx$$
Utilisons la méthode de l'intégration par parties. Posons :
* $u(x) = -\frac{1}{2} e^{-x^2}$, de sorte que $u'(x) = x e^{-x^2}$
* $v(x) = x$, de sorte que $v'(x) = 1$

Les fonctions $u$ et $v$ ainsi que leurs dérivées sont de classe $\mathcal{C}^0$ sur $[0, 1]$. Appliquons la formule d'intégration par parties :
$$\int_{a}^{b} u'(x)v(x) \, dx = [u(x)v(x)]_{a}^{b} - \int_{a}^{b} u(x)v'(x) \, dx$$

Ici :
$$I = \left[ -\frac{1}{2} x e^{-x^2} \right]_{0}^{1} - \int_{0}^{1} \left( -\frac{1}{2} e^{-x^2} \right) \times 1 \, dx$$
$$I = \left( -\frac{1}{2} \times 1 \times e^{-1} - 0 \right) + \frac{1}{2} \int_{0}^{1} e^{-x^2} \, dx$$
$$I = -\frac{1}{2e} + \frac{1}{2} \int_{0}^{1} e^{-x^2} \, dx$$

*Analyse : Le problème du calcul de $I$ est ainsi ramené au calcul de l'intégrale de $e^{-x^2}$ (qui est reliée à la fonction d'erreur $\text{erf}$ en mathématiques appliquées, non exprimable avec les fonctions usuelles).*

---

#### 2. Premier encadrement par l'inégalité de la moyenne
Sur l'intervalle $[0, 1]$, pour tout $x$, on a $x^2 \ge 0$. Par décroissance de la fonction exponentielle sur $\mathbb{R}$, on a :
$$\forall x \in [0, 1], \quad 0 \le x^2 \implies e^{-x^2} \le e^0 = 1$$
De plus, comme $x^2 \le 1$ sur $[0, 1]$, on a $-x^2 \ge -1$, donc par croissance de l'exponentielle :
$$e^{-1} \le e^{-x^2}$$
Ainsi, pour tout $x \in [0, 1]$ :
$$e^{-1} \le e^{-x^2} \le 1$$

Appliquons l'inégalité de la moyenne sur l'intervalle $[0, 1]$ (de longueur $1 - 0 = 1$) à la fonction $x \mapsto e^{-x^2}$ :
$$\int_{0}^{1} e^{-1} \, dx \le \int_{0}^{1} e^{-x^2} \, dx \le \int_{0}^{1} 1 \, dx$$
$$e^{-1}(1 - 0) \le \int_{0}^{1} e^{-x^2} \, dx \le 1(1 - 0)$$
$$\frac{1}{e} \le \int_{0}^{1} e^{-x^2} \, dx \le 1$$

En reportant cet encadrement dans l'expression de $I$ obtenue à la question 1 ($I = -\frac{1}{2e} + \frac{1}{2} \int_{0}^{1} e^{-x^2} \, dx$) :
$$-\frac{1}{2e} + \frac{1}{2}\left(\frac{1}{e}\right) \le I \le -\frac{1}{2e} + \frac{1}{2}(1)$$
Soit :
$$0 \le I \le \frac{1}{2} - \frac{1}{2e}$$
Numériquement, sachant que $e \approx 2{,}718$, on obtient grossièrement $0 \le I \le 0{,}316$. Cet encadrement est toutefois trop large.

---

#### 3. Étude de la fonction $g$ et raffinement polynomial
Soit $g(x) = e^{-x^2} - (1 - x^2)$ sur $[0, 1]$.
Calculons la dérivée $g'$ :
$$g'(x) = -2x e^{-x^2} - (-2x) = 2x(1 - e^{-x^2})$$
Sur l'intervalle $[0, 1]$, $2x \ge 0$. De plus, pour tout $x \in [0, 1]$, $-x^2 \le 0$, donc $e^{-x^2} \le 1$, ce qui implique $1 - e^{-x^2} \ge 0$.
Par conséquent, pour tout $x \in [0, 1]$, $g'(x) \ge 0$. La fonction $g$ est donc croissante sur $[0, 1]$.

Évaluons $g$ en $0$ :
$$g(0) = e^0 - (1 - 0) = 1 - 1 = 0$$
Puisque $g$ est croissante et que $g(0) = 0$, on en déduit que pour tout $x \in [0, 1]$, $g(x) \ge 0$, c'est-à-dire :
$$e^{-x^2} \ge 1 - x^2$$

Pour obtenir un majorant, rappelons le développement limité ou l'inégalité de Taylor-Lagrange pour l'exponentielle : $e^{-x^2} \le 1 - x^2 + \frac{x^4}{2}$ (admis ou démontrable par l'étude de $h(x) = e^{-x^2} - (1 - x^2 + \frac{x^4}{2})$). Retenons l'encadrement polynomial global sur $[0, 1]$ :
$$1 - x^2 \le e^{-x^2} \le 1 - x^2 + \frac{x^4}{2}$$

---

#### 4. Encadrement final et esprit critique
Intégrons cet encadrement sur $[0, 1]$ :
$$\int_{0}^{1} (1 - x^2) \, dx \le \int_{0}^{1} e^{-x^2} \, dx \le \int_{0}^{1} \left(1 - x^2 + \frac{x^4}{2}\right) dx$$

Calculons la borne inférieure :
$$\left[ x - \frac{x^3}{3} \right]_{0}^{1} = 1 - \frac{1}{3} = \frac{2}{3}$$

Calculons la borne supérieure :
$$\left[ x - \frac{x^3}{3} + \frac{x^5}{10} \right]_{0}^{1} = 1 - \frac{1}{3} + \frac{1}{10} = \frac{30 - 10 + 3}{30} = \frac{23}{30}$$

On a donc :
$$\frac{2}{3} \le \int_{0}^{1} e^{-x^2} \, dx \le \frac{23}{30}$$

En réinjectant cela dans l'expression de $I$ (question 1) :
$$I = -\frac{1}{2e} + \frac{1}{2} \int_{0}^{1} e^{-x^2} \, dx$$
En utilisant les approximations $e \approx 2{,}71828$ (donc $\frac{1}{2e} \approx 0{,}1839$) :
* **Borne inf :** $-\frac{1}{2e} + \frac{1}{2}\left(\frac{2}{3}\right) \approx -0{,}1839 + 0{,}3333 = 0{,}1494$
* **Borne sup :** $-\frac{1}{2e} + \frac{1}{2}\left(\frac{23}{30}\right) \approx -0{,}1839 + 0{,}3833 = 0{,}1994$

L'amplitude de cet encadrement est $0{,}1994 - 0{,}1494 = 0{,}050$, ce qui est très proche de la limite demandée.

* **Discussion critique et limites du modèle :** 
  L'approche analytique par IPP et encadrement polynomial offre l'avantage d'obtenir des bornes exactes démontrables sans erreur d'arrondi machine. Toutefois, elle montre ses limites face à la complexité croissante des fonctions : si l'on souhaitait réduire l'amplitude de l'encadrement à $10^{-6}$, le calcul théorique des majorants successifs deviendrait extrêmement lourd. En ingénierie et en calcul scientifique, on lui préfère souvent des méthodes numériques algorithmiques (comme la méthode de Simpson ou les quadratures de Gauss), qui offrent un meilleur compromis entre complexité de mise en œuvre et précision arbitraire, au prix d'une analyse des erreurs d'arrondi.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
