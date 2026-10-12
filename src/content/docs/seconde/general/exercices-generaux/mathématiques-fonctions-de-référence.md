---
title: "Exercice : Fonctions de référence"
description: "Démonstration appliquée : Modélisation de la trajectoire d'une fusée SpaceX"
---

### 🌐 Contexte

Lors des tests de développement du lanceur lourd *Starship*, l'entreprise aérospatiale SpaceX réalise des vols suborbitaux à haute altitude (appelés *high-altitude hop tests*). Le prototype décolle verticalement, atteint un point culminant (l'apogée), coupe ses moteurs principaux puis redescend de manière contrôlée vers sa zone d'atterrissage.

Dans le cadre d'un vol d'essai d'une durée totale de 10 minutes, les ingénieurs modélisent l'altitude $h(t)$ (exprimée en kilomètres) de la fusée en fonction du temps écoulé $t$ (exprimé en minutes depuis le décollage) par la fonction :
$$h(t) = -0{,}4(t - 5)^2 + 10$$
définie sur l'intervalle $[0 \,;\, 10]$.

Cette fonction dérive directement de la **fonction carré** $x \mapsto x^2$, étudiée en classe de Seconde.

---

### ❓ Énoncé

1. **Forme développée et conditions initiales**
   a) Développer et réduire l'expression de $h(t)$.  
   b) Calculer $h(0)$ et $h(10)$. Interpréter concrètement ces deux résultats dans le contexte du vol.

2. **Étude des variations et point culminant**  
   a) Rappeler le sens de variation de la fonction de référence $x \mapsto x^2$ sur $\mathbb{R}$.  
   b) En déduire le sens de variation de la fonction $h$ sur l'intervalle $[0 \,;\, 5]$, puis sur $[5 \,;\, 10]$.  
   c) Dresser le tableau de variations complet de la fonction $h$ sur $[0 \,;\, 10]$ et préciser l'altitude maximale atteinte ainsi que l'instant correspondant.

3. **Traversée de la couche nuageuse**  
   Le jour du tir, une nappe de nuages denses est située à une altitude de $6{,}4\text{ km}$.  
   Déterminer par le calcul les instants précis $t$ où le lanceur se situe exactement à cette altitude, c'est-à-dire résoudre dans $[0 \,;\, 10]$ l'équation :
   $$h(t) = 6{,}4$$

4. **Durée de visibilité**  
   À l'aide d'une inéquation, déterminer l'intervalle de temps durant lequel la fusée évolue au-dessus de cette couche nuageuse ($h(t) \ge 6{,}4$). Quelle est la durée totale de cette phase ?

---

### 💡 Indice

* **Pour la question 1 :** Utilisez l'identité remarquable $(a - b)^2 = a^2 - 2ab + b^2$ avant de distribuer le coefficient $-0{,}4$.
* **Pour la question 2 :** Observez que pour tout réel $t$, $(t - 5)^2 \ge 0$. Quel est l'effet de la multiplication par un nombre négatif ($-0{,}4$) sur le sens des inégalités ?
* **Pour la question 3 :** Isolez le terme $(t - 5)^2$ pour vous ramener à une équation du type $X^2 = k$ avec $k > 0$, dont les solutions sont $X = \sqrt{k}$ et $X = -\sqrt{k}$.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Forme développée et conditions initiales

**a) Développer et réduire $h(t)$ :**

On applique l'identité remarquable $(t - 5)^2 = t^2 - 10t + 25$ :
$$h(t) = -0{,}4\left(t^2 - 10t + 25\right) + 10$$

On développe en distribuant $-0{,}4$ :
$$h(t) = -0{,}4t^2 + (-0{,}4 \times -10t) + (-0{,}4 \times 25) + 10$$
$$h(t) = -0{,}4t^2 + 4t - 10 + 10$$
$$h(t) = -0{,}4t^2 + 4t$$

**b) Calculs et interprétation :**
* Pour $t = 0$ :
  $$h(0) = -0{,}4(0)^2 + 4(0) = 0\text{ km}$$
* Pour $t = 10$ :
  $$h(10) = -0{,}4(10)^2 + 4(10) = -0{,}4(100) + 40 = -40 + 40 = 0\text{ km}$$

**Interprétation :** 
À $t = 0\text{ min}$, l'altitude est nulle : cela correspond au pas de tir lors du décollage.  
À $t = 10\text{ min}$, l'altitude est à nouveau nulle : cela correspond au retour sur Terre et au posé sur la zone d'atterrissage.

---

#### 2. Étude des variations et point culminant

**a) Propriétés de la fonction carré :**  
La fonction de référence $f(x) = x^2$ est :
* strictement décroissante sur $]-\infty \,;\, 0]$ ;
* strictement croissante sur $[0 \,;\, +\infty[$.

**b) Variations de $h$ :**  
Soient deux réels $t_1$ et $t_2$ tels que $0 \le t_1 < t_2 \le 5$.
1. On retranche $5$ : $-5 \le t_1 - 5 < t_2 - 5 \le 0$.
2. La fonction carré est strictement décroissante sur $]-\infty \,;\, 0]$, donc l'ordre s'inverse :
   $$(t_1 - 5)^2 > (t_2 - 5)^2$$
3. On multiplie par $-0{,}4 < 0$, ce qui inverse à nouveau le sens de l'inégalité :
   $$-0{,}4(t_1 - 5)^2 < -0{,}4(t_2 - 5)^2$$
4. On ajoute $10$ :
   $$-0{,}4(t_1 - 5)^2 + 10 < -0{,}4(t_2 - 5)^2 + 10 \iff h(t_1) < h(t_2)$$

La fonction $h$ conserve l'ordre de départ : elle est donc **strictement croissante** sur $[0 \,;\, 5]$.

Par un raisonnement symétrique, pour $5 \le t_1 < t_2 \le 10$, $(t_1 - 5)$ et $(t_2 - 5)$ sont positifs. La fonction carré conserve l'ordre, puis la multiplication par $-0{,}4$ l'inverse. Ainsi, la fonction $h$ est **strictement décroissante** sur $[5 \,;\, 10]$.

**c) Tableau de variations et extremum :**

Pour tout réel $t$, on a $(t - 5)^2 \ge 0$.  
En multipliant par $-0{,}4$, on obtient $-0{,}4(t - 5)^2 \le 0$.  
En ajoutant $10$, on obtient $h(t) \le 10$.  
L'égalité $h(t) = 10$ est atteinte lorsque $t - 5 = 0$, soit $t = 5$.

Le tableau de variations de $h$ sur $[0 \,;\, 10]$ est :

| $t$ | $0$ | | $5$ | | $10$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Variations de $h$ | $0$ | $\nearrow$ | $10$ | $\searrow$ | $0$ |

**Conclusion physique :**  
La fusée atteint son apogée (altitude maximale) au bout de **$5\text{ minutes}$**, à une altitude de **$10\text{ kilomètres}$**.

---

#### 3. Traversée de la couche nuageuse

On cherche les valeurs de $t \in [0 \,;\, 10]$ telles que $h(t) = 6{,}4$.

$$ -0{,}4(t - 5)^2 + 10 = 6{,}4 $$
$$ -0{,}4(t - 5)^2 = 6{,}4 - 10 $$
$$ -0{,}4(t - 5)^2 = -3{,}6 $$

On divise chaque membre par $-0{,}4$ :
$$ (t - 5)^2 = \frac{-3{,}6}{-0{,}4} $$
$$ (t - 5)^2 = 9 $$

D'après le cours sur la fonction carré, une équation de la forme $X^2 = k$ (avec $k > 0$) admet deux solutions : $X = \sqrt{k}$ et $X = -\sqrt{k}$.  
Ici, $X = t - 5$ et $k = 9$, d'où $\sqrt{9} = 3$.

Deux cas se présentent :
$$\begin{aligned}
t - 5 = 3 \quad &\text{ou} \quad t - 5 = -3 \\
t = 3 + 5 \quad &\text{ou} \quad t = -3 + 5 \\
t = 8 \quad &\text{ou} \quad t = 2
\end{aligned}$$

Les deux solutions $2$ et $8$ appartiennent bien à l'intervalle $[0 \,;\, 10]$.  
**Conclusion :** La fusée traverse la couche nuageuse à **$t = 2\text{ min}$** (phase d'ascension) et à **$t = 8\text{ min}$** (phase de descente).

---

#### 4. Durée de visibilité au-dessus des nuages

On cherche les valeurs de $t \in [0 \,;\, 10]$ telles que :
$$h(t) \ge 6{,}4$$

En reprenant les étapes algébriques précédentes :
$$-0{,}4(t - 5)^2 + 10 \ge 6{,}4$$
$$-0{,}4(t - 5)^2 \ge -3{,}6$$

En divisant par $-0{,}4$ (nombre strictement négatif), on change le sens de l'inégalité :
$$(t - 5)^2 \le 9$$

Or, pour un réel $X$, $X^2 \le 9 \iff -3 \le X \le 3$.  
En posant $X = t - 5$ :
$$-3 \le t - 5 \le 3$$

On ajoute $5$ à chaque membre :
$$-3 + 5 \le t \le 3 + 5$$
$$2 \le t \le 8$$

L'ensemble des solutions est l'intervalle $[2 \,;\, 8]$.

**Durée totale :**  
$$\Delta t = 8 - 2 = 6\text{ minutes}$$

Le prototype évolue au-dessus de la couche nuageuse entre la 2ᵉ et la 8ᵉ minute de vol, soit pendant une durée totale de **$6\text{ minutes}$**.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
