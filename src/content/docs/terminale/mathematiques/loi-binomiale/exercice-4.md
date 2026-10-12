---
title: "Exercice 4 : Tests A/B en marketing digital"
description: "Application pratique du chapitre Lois de probabilité et Loi Binomiale"
---

### 🌐 Contexte concret

En marketing digital, un **test A/B** est une méthode d'expérimentation qui consiste à comparer deux versions d'une page web ou d'une publicité (version A et version B) afin de déterminer laquelle génère le meilleur taux de conversion (par exemple, l'achat d'un produit).

Une entreprise de e-commerce souhaite tester une nouvelle ergonomie pour sa page de paiement (Version B) par rapport à l'ancienne (Version A, considérée comme la référence). 
* La version A est présentée à un échantillon de $n_A = 100$ visiteurs indépendants.
* La version B est présentée à un échantillon de $n_B = 100$ visiteurs indépendants.

On constate que sur la version A, $20$ visiteurs effectuent un achat, soit un taux de conversion observé de $20\%$. L'équipe marketing souhaite évaluer la performance de la version B en modélisant statistiquement le comportement des internautes.

---

### ❓ Énoncé

On s'intéresse désormais uniquement à la **version B**. On suppose que chaque visiteur a, de manière indépendante, la même probabilité $p = 0{,}25$ d'effectuer un achat sur cette nouvelle page (objectif fixé par l'équipe). On prélève un échantillon de $n = 100$ visiteurs.

Soit $X$ la variable aléatoire qui compte le nombre de visiteurs effectuant un achat parmi les $100$ testés.

1. **Justifier** que la variable aléatoire $X$ suit une loi binomiale dont on précisera les paramètres $n$ et $p$.
2. **Calculer** la probabilité exacte que $30$ visiteurs exactement effectuent un achat, c'est-à-dire $P(X = 30)$. *On donnera le résultat arrondi au millième.*
3. **Calculer** la probabilité que le nombre de clients acheteurs soit supérieur ou égal à $20$ et inférieur ou égal à $30$, soit $P(20 \le X \le 30)$. *On pourra s'aider de la calculatrice.*
4. **Déterminer** l'espérance $E(X)$ de cette variable aléatoire et interpréter ce résultat dans le contexte du marketing digital.

---

### 💡 Indice

* **Question 1 :** Pour qu'une variable suive une loi binomiale, il faut identifier une répétition d'expériences identiques et indépendantes à deux issues (succès/échec).
* **Question 2 :** Rappelez-vous la formule générale de la loi binomiale : 
  $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
* **Question 3 :** Utilisez la fonction de cumul de votre calculatrice (souvent appelée `BinomFRep` ou `binomcdf`).
* **Question 4 :** L'espérance d'une loi binomiale de paramètres $n$ et $p$ se calcule simplement par le produit $n \times p$.

---

### 📋 Correction détaillée pas à pas

#### 1. Justification de la loi de $X$
L'expérience consiste à observer $100$ visiteurs de manière indépendante. Pour chaque visiteur, il y a deux issues possibles : 
* Le "succès" : le visiteur effectue un achat (probabilité $p = 0{,}25$).
* L' "échec" : le visiteur n'effectue pas d'achat (probabilité $1 - p = 0{,}75$).

Puisque l'échantillon est de taille $n = 100$ et que les tirages sont assimilés à des tirages avec remise (population très grande), **la variable aléatoire $X$ suit la loi binomiale de paramètres $n = 100$ et $p = 0{,}25$**, que l'on note :
$$X \sim \mathcal{B}(100, 0{,}25)$$

---

#### 2. Calcul de $P(X = 30)$
D'après le cours, pour une variable $X \sim \mathcal{B}(n, p)$, la probabilité d'obtenir $k$ succès est :
$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$

Ici, pour $k = 30$, $n = 100$ et $p = 0{,}25$ :
$$P(X = 30) = \binom{100}{30} \times 0{,}25^{30} \times (0{,}75)^{70}$$

À l'aide de la calculatrice, on obtient :
$$P(X = 30) \approx 0{,}037$$
Il y a environ $3{,}7\%$ de chance que exactement $30$ visiteurs achètent sur la nouvelle page.

---

#### 3. Calcul de $P(20 \le X \le 30)$
On cherche la probabilité cumulée :
$$P(20 \le X \le 30) = P(X \le 30) - P(X \nin 19)$$
*(ou en additionnant les probabilités individuelles de $20$ à $30$, ce qui est fastidieux sans calculatrice).*

À l'aide de la fonction cumulée de la loi binomiale de la calculatrice (`BinomFRep(100, 0.25, 20, 30)`) :
$$P(20 \le X \le 30) \approx 0{,}809$$
La probabilité que le nombre d'acheteurs se situe entre $20$ et $30$ est d'environ $80{,}9\%$.

---

#### 4. Calcul et interprétation de l'espérance $E(X)$
Pour une loi binomiale $\mathcal{B}(n, p)$, l'espérance mathématique est donnée par la formule :
$$E(X) = n \times p$$

Ici :
$$E(X) = 100 \times 0{,}25 = 25$$

**Interprétation marketing :** 
Si l'entreprise renouvelle l'expérience un grand nombre de fois avec des échantillons de $100$ visiteurs sous l'hypothèse où le taux de conversion est de $25\%$, elle peut s'attendre en moyenne à ce que **$25$ visiteurs** effectuent un achat par échantillon. 

*Note pour l'analyse A/B :* Puisque la version A générait $20$ acheteurs sur $100$ (soit $20\%$), et que l'espérance de la version B est de $25$ acheteurs ($25\%$), la nouvelle ergonomie semble prometteuse, sous réserve de confirmer ces résultats par des tests statistiques plus poussés (comme un intervalle de fluctuation ou de confiance).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
