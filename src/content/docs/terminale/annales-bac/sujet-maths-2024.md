---
title: "Bac Maths 2024 - Épreuve Écrite"
description: "Sujet officiel type Bac Mathématiques entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

**ÉPREUVE DE MATHÉMATIQUES — SÉRIE GÉNÉRALE**

---

### Exercice 1 : Probabilités (5 points)

Un laboratoire pharmaceutique teste un nouveau test de dépistage pour une maladie. 
Une étude statistique montre que $4\%$ de la population visée est porteuse de cette maladie.

On choisit une personne au hasard dans cette population. On définit les événements suivants :
* $M$ : "La personne est porteuse de la maladie" ;
* $T$ : "Le test est positif".

On note $M$ l'événement contraire de $M$ et $T$ l'événement contraire de $T$.
Les données statistiques fournissent les informations suivantes :
* La probabilité qu'une personne porteuse de la maladie ait un test positif est de $0{,}95$ ;
* La probabilité qu'une personne non porteuse de la maladie ait un test positif est de $0{,}02$.

1. Traduire les données de l'ennoncé à l'aide d'un arbre pondéré.
2. Calculer la probabilité de l'événement $M \cap T$.
3. Démontrer que la probabilité de l'événement $T$ est $P(T) = 0{,}0572$.
4. Le laboratoire affirme qu'un patient dont le test est positif a plus de $90\%$ de chances d'être malade. Cette affirmation est-elle exacte ? Justifier.
5. On choisit au hasard un échantillon de $n$ personnes de manière indépendante. On assimule ce choix à un tirage avec remise. Soit $X$ la variable aléatoire représentant le nombre de personnes porteuses de la maladie dans l'échantillon. 
   On prend $n = 50$. Calculer la probabilité qu'exactement $3$ personnes soient porteuses de la maladie (arrondir au millième).

---

### Exercice 2 : Suites numériques (8 points)

Soit $(u_n)$ la suite définie par $u_0 = 1$ et, pour tout entier naturel $n$ :
$$u_{n+1} = \frac{1}{3}u_n + n - 1$$

1. Calculer $u_1$ et $u_2$.
2. On souhaite étudier le sens de variation de la suite $(u_n)$.
   a. Calculer $u_n - u_{n-1}$ pour $n \ge 1$.
   b. Démontrer par récurrence que pour tout entier naturel $n \ge 3$, on a $u_n \ge 0$.
   c. En déduire le sens de variation de la suite $(u_n)$ à partir du rang $n = 4$.
3. On définit la suite $(v_n)$ pour tout entier naturel $n$ par :
   $$v_n = 4u_n - 6n + 15$$
   a. Démontrer que la suite $(v_n)$ est une suite géométrique de raison $\frac{1}{3}$ dont on précisera le premier terme $v_0$.
   b. Exprimer $v_n$ en fonction de $n$.
   c. En déduire que pour tout entier naturel $n$, on a :
      $$u_n = \frac{19}{4} \left(\frac{1}{3}\right)^n + \frac{3}{2}n - \frac{15}{4}$$
4. Déterminer la limite de la suite $(u_n)$ lorsque $n$ tend vers $+\infty$.

---

### Exercice 3 : Équations différentielles (7 points)

On s'intéresse à la modélisation de la vitesse d'un objet en chute verticale dans un fluide. La vitesse $v(t)$, exprimée en $\text{m}\cdot\text{s}^{-1}$, en fonction du temps $t$ (en secondes), est une fonction dérivable et strictement positive qui vérifie l'équation différentielle (E) :
$$(E) : \quad v'(t) + 2v(t) = 10$$

1. Déterminer l'ensemble des solutions de l'équation différentielle homogène associée à $(E)$.
2. Démontrer que la fonction constante $v_0$ définie par $v_0(t) = 5$ est une solution particulière de $(E)$.
3. En déduire la solution générale de l'équation différentielle $(E)$.
4. Sachant qu'à l'instant initial $t = 0$, l'objet est lâché sans vitesse initiale (soit $v(0) = 0$), déterminer l'expression de $v(t)$ pour tout $t \ge 0$.
5. Étudier le sens de variation de la fonction $v$ sur $[0, \, +\infty[$. Interpréter physiquement ce résultat.
6. Déterminer la limite de la vitesse lorsque le temps $t$ tend vers $+\infty$. Cette limite est appelée "vitesse limite".

---
---

## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

* **Exercice 1 (Probabilités) :** 
  * *Piège classique :* Confondre probabilité conditionnelle et intersection dans l'arbre. Bien veiller à écrire $P_M(T) = 0{,}95$ et non pas $P(M \cap T)$.
  * *Barème :* La question 4 (probabilité conditionnelle inversée) rapporte souvent beaucoup de points (1 pt). Il faut rédiger rigoureusement avec la formule de Bayes ou le quotient $P(M \cap T) / P(T)$.
* **Exercice 2 (Suites) :**
  * *Piège classique :* Dans la récurrence (Q2.b), attention à l'initialisation qui doit se faire au rang $n=3$ comme demandé, et non $n=0$.
  * *Barème :* La question de la démonstration par récurrence est notée sur $2$ points stricts (Initialisation : $0{,}5$ pt ; Hérédité : $1$ pt ; Conclusion : $0{,}5$ pt).
* **Exercice 3 (Équations différentielles) :**
  * *Piège classique :* Oublier de justifier l'unicité de la solution grâce à la condition initiale $v(0) = 0$ pour trouver la constante d'intégration $K$.
  * *Barème :* L'interprétation physique (sens de variation et limite) compte pour $1{,}5$ point. Ne pas se contenter du calcul brut, il faut lier aux notions de physique (vitesse limite).

---
---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction de l'Exercice 1 (5 points)

1. **Arbre pondéré :**
   * Branches de premier niveau : $M$ (probabilité $0{,}04$) et $M$ (probabilité $0{,}96$).
   * Branches issues de $M$ : $T$ (probabilité $0{,}95$) et $T$ (probabilité $1 - 0{,}95 = 0{,}05$).
   * Branches issues de $M$ : $T$ (probabilité $0{,}02$) et $T$ (probabilité $1 - 0{,}02 = 0{,}98$).
   *(0,75 pt)*

2. **Calcul de $P(M \cap T)$ :**
   $$P(M \cap T) = P(M) \times P_M(T) = 0{,}04 \times 0{,}95 = 0{,}038$$
   *(0,75 pt)*

3. **Démontrer que $P(T) = 0{,}0572$ :**
   D'après la formule des probabilités totales, les événements $M$ et $M$ forment une partition de l'univers :
   $$P(T) = P(M \cap T) + P(M \cap T)$$
   $$P(T) = 0{,}038 + P(M) \times P_{\bar{M}}(T) = 0{,}038 + (0{,}96 \times 0{,}02)$$
   $$P(T) = 0{,}038 + 0{,}0192 = 0{,}0572$$
   *(1 pt)*

4. **Vérification de l'affirmation du laboratoire :**
   On cherche la probabilité conditionnelle qu'un patient soit malade sachant que son test est positif, soit $P_T(M)$ :
   $$P_T(M) = \frac{P(M \cap T)}{P(T)} = \frac{0{,}038}{0{,}0572} \approx 0{,}6643$$
   Soit environ $66{,}43\%$. 
   Cette probabilité est bien inférieure à $90\%$. L'affirmation du laboratoire est donc **inexacte**.
   *(1 pt)*

5. **Calcul de probabilité avec la loi binomiale :**
   Le choix de $50$ personnes de manière indépendante avec une probabilité de succès $p = 0{,}04$ est assimilé à un schéma de Bernoulli. La variable aléatoire $X$ suit la loi binomiale $\mathcal{B}(50, \, 0{,}04)$.
   On cherche $P(X = 3)$ :
   $$P(X = 3) = \binom{50}{3} \times (0{,}04)^3 \times (1 - 0{,}04)^{50-3}$$
   $$P(X = 3) = \frac{50 \times 49 \times 48}{3 \times 2 \times 1} \times (0{,}04)^3 \times (0{,}96)^{47}$$
   $$P(X = 3) = 19600 \times 0{,}000064 \times 0{,}14715 \approx 0{,}184$$
   *(1,5 pt)*

---

### Correction de l'Exercice 2 (8 points)

1. **Calcul de $u_1$ et $u_2$ :**
   * $u_1 = \frac{1}{3}u_0 + 0 - 1 = \frac{1}{3}(1) - 1 = -\frac{2}{3}$ *(0,5 pt)*
   * $u_2 = \frac{1}{3}u_1 + 1 - 1 = \frac{1}{3}\left(-\frac{2}{3}\right) = -\frac{2}{9}$ *(0,5 pt)*

2. **Étude de la suite :**
   a. $u_n - u_{n-1}$ pour $n \ge 1$ : 
      $$u_n - u_{n-1} = \left(\frac{1}{3}u_{n-1} + n - 2\right) - u_{n-1} = -\frac{2}{3}u_{n-1} + n - 2$$ *(0,5 pt)*
   b. **Démontrer par récurrence que pour tout $n \ge 3$, $u_n \ge 0$ :**
      * *Initialisation :* Pour $n = 3$, $u_3 = \frac{1}{3}u_2 + 2 - 1 = \frac{1}{3}\left(-\frac{2}{9}\right) + 1 = -\frac{2}{27} + \frac{27}{27} = \frac{25}{27}$. 
        On a bien $u_3 \ge 0$. L'initialisation est vraie. *(0,5 pt)*
      * *Hérédité :* Soit un entier $k \ge 3$. Supposons que $u_k \ge 0$. Montrons que $u_{k+1} \ge 0$.
        Par définition, $u_{k+1} = \frac{1}{3}u_k + k - 1$.
        Puisque $k \ge 3$, on a $k - 1 \ge 2 > 0$. 
        De plus, par hypothèse de récurrence, $\frac{1}{3}u_k \ge 0$.
        La somme de deux nombres positifs étant positive, $u_{k+1} \ge 0$. *(0,75 pt)*
      * *Conclusion :* La propriété est vraie au rang $3$ et est héréditaire. Par conséquent, pour tout $n \ge 3$, $u_n \ge 0$. *(0,25 pt)*
   c. **Sens de variation à partir du rang $n = 4$ :**
      Pour tout $n \ge 4$, on a $n \ge 4$, donc $n - 2 \ge 2$. 
      Puisque pour $n \ge 3$ (donc pour $n-1 \ge 3$), $u_{n-1} \ge 0$, on a $-\frac{2}{3}u_{n-1} \le 0$.
      Ainsi, pour $n \ge 4$, $u_n - u_{n-1} = -\frac{2}{3}u_{n-1} + n - 2 \ge 0$ (somme d'un terme négatif petit en valeur absolue et d'un entier supérieur ou égal à $2$).
      La suite $(u_n)$ est donc **croissante** à partir du rang $4$. *(1 pt)*

3. **Étude de la suite auxiliaire $(v_n)$ :**
   a. **Démontrer que $(v_n)$ est géométrique :**
      $$v_{n+1} = 4u_{n+1} - 6(n+1) + 15 = 4\left(\frac{1}{3}u_n + n - 1\right) - 6n - 6 + 15$$
      $$v_{n+1} = \frac{4}{3}u_n + 4n - 4 - 6n + 9 = \frac{4}{3}u_n - 2n + 5$$
      exprimons $\frac{1}{3}v_n$ :
      $$\frac{1}{3}v_n = \frac{1}{3}(4u_n - 6n + 15) = \frac{4}{3}u_n - 2n + 5$$
      On a bien $v_{n+1} = \frac{1}{3}v_n$. 
      La suite $(v_n)$ est géométrique de raison $q = \frac{1}{3}$.
      Premier terme : $v_0 = 4u_0 - 6(0) + 15 = 4(1) + 15 = 19$. *(1,5 pt)*
   b. **Expression de $v_n$ :**
      $$v_n = v_0 \times q^n = 19 \left(\frac{1}{3}\right)^n$$ *(0,5 pt)*
   c. **Expression de $u_n$ :**
      Puisque $v_n = 4u_n - 6n + 15$, on a :
      $$4u_n = v_n + 6n - 15 \implies u_n = \frac{1}{4}v_n + \frac{3}{2}n - \frac{15}{4}$$
      En remplaçant $v_n$ :
      $$u_n = \frac{19}{4} \left(\frac{1}{3}\right)^n + \frac{3}{2}n - \frac{15}{4}$$ *(0,75 pt)*

4. **Limite de la suite $(u_n)$ :**
   * Comme $-1 < \frac{1}{3} < 1$, on a $\lim_{n \to +\infty} \left(\frac{1}{3}\right)^n = 0$, donc $\lim_{n \to +\infty} \frac{19}{4}\left(\frac{1}{3}\right)^n = 0$.
   * De plus, $\lim_{n \to +\infty} \left(\frac{3}{2}n - \frac{15}{4}\right) = +\infty$.
   Par somme, **$\lim_{n \to +\infty} u_n = +\infty$**. *(0,75 pt)*

---

### Correction de l'Exercice 3 (7 points)

1. **Équation homogène associée :**
   L'équation homogène est $v'(t) + 2v(t) = 0$, soit $v'(t) = -2v(t)$.
   Les solutions de cette équation sur $\mathbb{R}$ sont de la forme :
   $$v_h(t) = K e^{-2t} \quad \text{où } K \in \mathbb{R}$$ *(1 pt)*

2. **Solution particulière de $(E)$ :**
   Soit $v_0(t) = 5$ une fonction constante. Sa dérivée est $v_0'(t) = 0$.
   Remplaçons dans $(E)$ :
   $$0 + 2 \times (5) = 10$$
   L'égalité est vérifiée, donc $v_0$ est bien une solution particulière de $(E)$. *(1 pt)*

3. **Solution générale de $(E)$ :**
   La solution générale est la somme de la solution homogène et d'une solution particulière :
   $$v(t) = v_h(t) + v_0(t) = K e^{-2t} + 5 \quad \text{où } K \in \mathbb{R}$$ *(1 pt)*

4. **Détermination de la constante avec la condition initiale :**
   On sait que $v(0) = 0$. Utilisons l'expression générale :
   $$v(0) = K e^{0} + 5 = K + 5$$
   Puisque $v(0) = 0$, on a $K + 5 = 0 \implies K = -5$.
   La solution recherchée est donc :
   $$v(t) = -5 e^{-2t} + 5 = 5\left(1 - e^{-2t}\right)$$ *(1,5 pt)*

5. **Sens de variation et interprétation physique :**
   * Calculons la dérivée $v'(t)$ :
     $$v'(t) = 5 \times (-(-2)e^{-2t}) = 10 e^{-2t}$$
     Pour tout $t \ge 0$, $e^{-2t} > 0$, donc $v'(t) > 0$.
     La fonction $v$ est **strictement croissante** sur $[0, \, +\infty[$. *(0,75 pt)*
   * *Interprétation physique :* La vitesse de l'objet augmente au cours du temps sous l'effet de l'accélération, tout en voyant son taux d'accroissement diminuer progressivement. *(0,75 pt)*

6. **Limite de la vitesse (vitesse limite) :**
   $$\lim_{t \to +\infty} -2t = -\infty \quad \text{donc} \quad \lim_{t \to +\infty} e^{-2t} = 0$$
   Par conséquent :
   $$\lim_{t \to +\infty} v(t) = 5 \times (1 - 0) = 5 \text{ m}\cdot\text{s}^{-1}$$
   La vitesse limite de l'objet est de $5 \text{ m}\cdot\text{s}^{-1}$. *(1 pt)*