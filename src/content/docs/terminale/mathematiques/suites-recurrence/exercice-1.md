---
title: "Exercice 1 : Démonstration par récurrence en arithmétique"
description: "Application pratique du chapitre Suites et raisonnement par récurrence"
---

### 🌐 Contexte & Données scientifiques

En arithmétique modulaire et dans l'étude des polynômes à coefficients entiers, le raisonnement par récurrence constitue un outil fondamental pour établir des propriétés valables pour tout entier naturel $n \in \mathbb{N}$. 

Considérons la suite d'entiers définie par une relation de récurrence non linéaire d'ordre $1$, souvent rencontrée lors de l'analyse de modèles dynamiques discrets ou d'algorithmes de cryptographie basés sur la complexité arithmétique :

$$u_0 = 2 \quad \text{et pour tout } n \in \mathbb{N}, \quad u_{n+1} = 3u_n + 2^n$$

L'analyse de ce type de suite permet d'observer la croissance comparée d'une composante géométrique de raison $3$ et d'une composante géométrique de raison $2$. Toutefois, l'intuition empirique ne saurait suffire en mathématiques : seule une démonstration rigoureuse permet de valider une conjecture générale. Les limites des modèles discrets résident souvent dans leur capacité à diverger rapidement, nécessitant une maîtrise absolue des techniques de majoration et de récurrence.

---

### ❓ Énoncé

Soit la suite $(u_n)_{n \in \mathbb{N}}$ définie par $u_0 = 2$ et, pour tout $n \in \mathbb{N}$, $u_{n+1} = 3u_n + 2^n$.

1. Calculer les termes $u_1$, $u_2$ et $u_3$ sous forme fractionnaire ou entière. Émettre une conjecture concernant l'expression explicite de $u_n$ en fonction de $n$.
2. Démontrer par récurrence que pour tout $n \in \mathbb{N}$, l'expression explicite conjecturée à la question précédente est exacte.
3. Soit $S_n = \sum_{k=0}^{n} u_k$ la somme des $n+1$ premiers termes de la suite. À l'aide de la relation de récurrence et des propriétés de linéarité, exprimer $S_n$ en fonction de $n$ sous une forme factorisée.
4. Discuter brièvement de la pertinence asymptotique de ce modèle si $u_n$ représentait le coût (en $\text{k}\epsilon$) d'un processus itératif dont les ressources doublent à chaque étape ($\text{terme } 2^n$) tout en subissant une inflation structurelle de $300\%$ ($\text{facteur } 3$).

---

### 💡 Indice de méthode

* **Pour l'initialisation ($\mathcal{P}(0)$)** : Vérifiez soigneusement que la formule proposée donne bien la valeur initiale $u_0 = 2$.
* **Pour l'hérédité ($\mathcal{P}(n) \implies \mathcal{P}(n+1)$)** : Supposons la propriété vraie à un rang $n$ fixé ($\text{Hypothèse de récurrence}$). Utilisez ensuite la relation de définition de $u_{n+1}$ pour y injecter l'hypothèse de récurrence, puis factorisez habilement pour faire apparaître l'expression au rang $n+1$.
* **Pour les sommes** : Exprimez $2^n$ ou $u_k$ en utilisant la relation $u_{k+1} - 3u_k = 2^k$, ce qui permet d'utiliser une somme télescopique.

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Calcul des premiers termes et conjecture

Calculons les premiers termes de la suite $(u_n)_{n \in \mathbb{N}}$ :
* Pour $n = 0$ : $u_0 = 2$ (donnée)
* Pour $n = 1$ : $u_1 = 3u_0 + 2^0 = 3(2) + 1 = 6 + 1 = 7$
* Pour $n = 2$ : $u_2 = 3u_1 + 2^1 = 3(7) + 2 = 21 + 2 = 23$
* Pour $n = 3$ : $u_3 = 3u_2 + 2^2 = 3(23) + 4 = 69 + 4 = 73$

Observons les valeurs obtenues :
* $u_0 = 2 = 3^0 + 1$ (ou $2 \times 3^0 - 2^0$... testons d'autres formes)
* $u_1 = 7 = 3^1 + 4$ (non)
Essayons avec des puissances de $3$ et de $2$ :
* $u_0 = 2 = 3^0 + 1$
* $u_1 = 7 = 3^1 + 2^2$... attente d'une régularité :
Regardons $u_n + 2^n$ ou cherchons sous la forme $u_n = A \times 3^n + B \times 2^n$.
Si $u_n = 5 \times 3^n - 3 \times 2^n$ :
* $n = 0 \implies 5(1) - 3(1) = 2 = u_0$
* $n = 1 \flaszh 5(3) - 3(2) = 15 - 6 = 9 \neq 7$ (erreur, ajustons).

Testons plutôt : $u_n = 3^{n+1} - 2^{n+1}$ ?
* $n = 0 \implies 3^1 - 2^1 = 3 - 2 = 1 \neq 2$.

Testons la formule classique : $u_n = 3 \times 3^n - 2^n$ ? Non.
Reprenons les valeurs : $2, 7, 23, 73$.
Remarquons que :
* $u_0 = 3^0 + 1$ ? Non.
Analysons $u_n + 2^n$ :
$u_0 + 2^0 = 3$
$u_1 + 2^1 = 9 = 3^2$
$u_2 + 2^2 = 27 = 3^3$
$u_3 + 2^3 = 81 = 3^4$

On conjecture donc que pour tout $n \in \mathbb{N}$ :
$$u_n + 2^n = 3^{n+1} \quad \text{soit} \quad u_n = 3^{n+1} - 2^n$$

---

#### Question 2 : Démonstration par récurrence

Montrons par récurrence que pour tout $n \in \mathbb{N}$, la proposition $\mathcal{P}(n) : "u_n = 3^{n+1} - 2^n"$ est vraie.

* **Initialisation ($n = 0$)** :
D'une part, $u_0 = 2$.
D'autre part, $3^{0+1} - 2^0 = 3^1 - 1 = 3 - 1 = 2$.
Ainsi, $u_0 = 3^{0+1} - 2^0$. La proposition $\mathcal{P}(0)$ est vraie.

* **Hérédité** :
Soit $n \in \mathbb{N}$ fixé. Supposons que $\mathcal{P}(n)$ soit vraie, c'est-à-dire :
$$u_n = 3^{n+1} - 2^n \quad (\text{Hypothèse de récurrence})$$
Montrons que $\mathcal{P}(n+1)$ est vraie, soit :
$$u_{n+1} = 3^{n+2} - 2^{n+1}$$

Par définition de la suite :
$$u_{n+1} = 3u_n + 2^n$$

En utilisant l'hypothèse de récurrence :
$$u_{n+1} = 3\left(3^{n+1} - 2^n\right) + 2^n$$
$$u_{n+1} = 3 \times 3^{n+1} - 3 \times 2^n + 2^n$$
$$u_{n+1} = 3^{n+2} - 2 \times 2^n$$
$$u_{n+1} = 3^{n+2} - 2^{n+1}$$

La proposition $\mathcal{P}(n+1)$ est donc vraie.

* **Conclusion** :
Par le principe de récurrence, pour tout $n \in \mathbb{N}$, on a :
$$u_n = 3^{n+1} - 2^n$$

---

#### Question 3 : Calcul de la somme $S_n$

Soit $S_n = \sum_{k=0}^{n} u_k$. En remplaçant $u_k$ par son expression explicite :
$$S_n = \sum_{k=0}^{n} \left(3^{k+1} - 2^k\right)$$

Par linéarité de la sommation :
$$S_n = \sum_{k=0}^{n} 3^{k+1} - \sum_{k=0}^{n} 2^k$$

La première somme est une suite géométrique de premier terme $3^1 = 3$ et de raison $3$, comportant $n+1$ termes :
$$\sum_{k=0}^{n} 3^{k+1} = 3 \times \frac{3^{n+1} - 1}{3 - 1} = \frac{3}{2}\left(3^{n+1} - 1\right)$$

La seconde somme est une suite géométrique de premier terme $2^0 = 1$ et de raison $2$, comportant $n+1$ termes :
$$\sum_{k=0}^{n} 2^k = \frac{2^{n+1} - 1}{2 - 1} = 2^{n+1} - 1$$

En combinant les deux résultats :
$$S_n = \frac{3}{2}\left(3^{n+1} - 1\right) - \left(2^{n+1} - 1\right)$$
$$S_n = \frac{3^{n+2} - 3}{2} - 2^{n+1} + 1 = \frac{3^{n+2} - 3 - 2 \times 2^{n+1} + 2}{2}$$
$$S_n = \frac{3^{n+2} - 2^{n+2} - 1}{2}$$

---

#### Question 4 : Discussion critique du modèle

Du point de vue de l'analyse asymptotique, le terme dominant de la suite $u_n = 3^{n+1} - 2^n$ est $3^{n+1}$, car $\lim_{n \to +\infty} \left(\frac{2}{3}\right)^n = 0$. 

Si ce modèle mathématique s'applique à l'évaluation des coûts d'un système informatique ou industriel :
* **Limites du modèle** : Une croissance exponentielle de base $3$ combinée à une base $2$ conduit rapidement à des valeurs très élevées (explosion combinatoire ou financière). Par exemple, pour $n = 10$, $u_{10} = 3^{11} - 2^{10} = 177\,147 - 1\,024 = 176\,123 \text{ k}\epsilon$.
* **Compromis et faisabilité** : Aucun modèle réel ne peut croître indéfiniment de manière exponentielle en raison des contraintes physiques, budgétaires ou matérielles (saturation des capacités, loi des rendements décroissants). Ce type de récurrence n'est donc pertinent que sur un horizon temporel restreint ($n$ petit à moyen), nécessitant l'introduction de termes amortisseurs non linéaires pour des analyses macro-économiques rigoureuses.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
