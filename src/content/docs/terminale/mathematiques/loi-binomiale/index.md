---
title: "Cours : Lois de probabilité et Loi Binomiale"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Cours de Mathématiques – Niveau Terminale
## Chapitre : Lois de probabilité et Loi Binomiale

---

## 📌 1. Notions clés & Définitions

### A. Variable aléatoire discrète
Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé. Une **variable aléatoire discrète** $X$ est une application de $\Omega$ dans $\mathbb{R}$ qui prend un nombre fini ou dénombrable de valeurs, notées $\{x_1, x_2, \dots, x_n\}$.

### B. Loi de probabilité d'une variable aléatoire
La **loi de probabilité** de la variable aléatoire $X$ est la donnée de toutes les probabilités $P(X = x_i)$ pour tout $i$. 
Elle vérifie la condition de normalisation :
$$\sum_{i=1}^{n} P(X = x_i) = 1$$

### C. Espérance, Variance et Écart-type
*   **Espérance mathématique** $E(X)$ (valeur moyenne théorique) :
    $$E(X) = \sum_{i=1}^{n} x_i \cdot P(X = x_i)$$
*   **Variance** $V(X)$ (mesure de dispersion) :
    $$V(X) = E\left[(X - E(X))^2\right] = \sum_{i=1}^{n} (x_i - E(X))^2 \cdot P(X = x_i)$$
    Formule de König-Huygens (très utile en calcul) :
    $$V(X) = E(X^2) - (E(X))^2$$
*   **Écart-type** $\sigma(X)$ :
    $$\sigma(X) = \sqrt{V(X)}$$

### D. Épreuve de Bernoulli et Schéma de Bernoulli
*   Une **épreuve de Bernoulli** est une expérience aléatoire ne comportant que deux issues, traditionnellement appelées « succès » (de probabilité $p$) et « échec » (de probabilité $q = 1-p$).
*   Un **schéma de Bernoulli** consiste en la répétition de $n$ épreuves de Bernoulli *identiques et indépendantes*.

### E. Loi binomiale
La variable aléatoire $X$ comptant le nombre de succès lors de la répétition d'un schéma de Bernoulli de paramètre $n$ (nombre d'épreuves) et $p$ (probabilité de succès) suit la **loi binomiale** de paramètres $n$ et $p$. On la note :
$$X \hookrightarrow \mathcal{B}(n, p)$$

---

## 📐 2. Formules et Propriétés fondamentales

### A. Expression des probabilités (Formule de Bernoulli)
Si $X \hookrightarrow \mathcal{B}(n, p)$, alors pour tout entier $k$ tel que $0 \le k \le n$ :
$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$

Où $\binom{n}{k}$ représente le coefficient binomial (« $k$ parmi $n$ »), défini par :
$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$
Avec les propriétés de symétrie et de récurrence :
*   $\binom{n}{0} = \binom{n}{n} = 1$
*   $\binom{n}{1} = n$
*   $\binom{n}{k} = \binom{n}{n-k}$

### B. Paramètres caractéristiques de la loi binomiale
Si $X \hookrightarrow \mathcal{B}(n, p)$, alors :
*   **Espérance :** 
    $$E(X) = n \cdot p$$
*   **Variance :** 
    $$V(X) = n \cdot p \cdot (1-p)$$
*   **Écart-type :** 
    $$$\sigma(X) = \sqrt{n \cdot p \cdot (1-p)}$$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un tireur à l'arc réussit à atteindre la cible avec une probabilité $p = 0,7$. Il tire 5 flèches de manière indépendante. 
Soit $X$ la variable aléatoire représentant le nombre de tirs réussis.

1. Justifier que $X$ suit une loi binomiale et préciser ses paramètres.
2. Calculer la probabilité qu'il réussie exactement 3 tirs.
3. Calculer l'espérance de $X$ et interpréter le résultat.

---

**Correction rédigée :**

1. **Identification de la loi :**
   * Chaque tir constitue une épreuve de Bernoulli avec deux issues : le succès (« atteindre la cible », $p = 0,7$) et l'échec (« rater la cible », $1 - p = 0,3$).
   * Les $n = 5$ tirs sont répétés de manière identique et de façon indépendante.
   * La variable $X$ compte le nombre de succès.
   * Par conséquent, **$X$ suit la loi binomiale de paramètres $n = 5$ et $p = 0,7$**, notée $X \hookrightarrow \mathcal{B}(5\,;\,0{,}7)$.

2. **Calcul de $P(X = 3)$ :**
   D'après le cours, pour $k = 3$ :
   $$P(X = 3) = \binom{5}{3} \times (0{,}7)^3 \times (0{,}3)^{5-3}$$
   $$P(X = 3) = \binom{5}{3} \times (0{,}7)^3 \times (0{,}3)^2$$
   Calculons le coefficient binomial :
   $$\binom{5}{3} = \frac{5!}{3! \times 2!} = \frac{5 \times 4}{2 \times 1} = 10$$
   Ainsi :
   $$P(X = 3) = 10 \times 0{,}343 \times 0{,}09 = 10 \times 0{,}03087 = 0{,}3087$$
   La probabilité d'exactement 3 réussites est de $0{,}3087$.

3. **Calcul de l'espérance :**
   $$E(X) = n \cdot p = 5 \times 0{,}7 = 3{,}5$$
   *Interprétation :* Sur un grand nombre de séries de 5 tirs, le tireur réussira en moyenne 3,5 tirs par série.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Piège 1 : Confondre les paramètres $p$ et $1-p$.** 
    Veillez à bien identifier ce qui constitue le « succès » (associé à $p$, la puissance de $k$) et l'« échec » (associé à $1-p$, la puissance de $n-k$).
*   **Piège 2 : Utiliser la loi binomiale sans indépendance.** 
    Vérifiez toujours si l'énoncé garantit la répétition *indépendante* des épreuves. S'il s'agit d'un tirage *sans remise* dans une urne, les tirages ne sont pas indépendantes (on utilise alors la loi hypergéométrique, hors programme de terminale standard, ou des probabilités conditionnelles).
*   **Conseil rédactionnel 1 :** 
    Pour toute application de la loi binomiale en évaluation, commencez **toujours** par expliciter clairement les trois conditions :
    1. Nature des épreuves (Bernoulli).
    2. Répétition identique et indépendante ($n$ et $p$).
    3. Définition claire de la variable aléatoire $X$ comme étant un comptage de succès.
*   **Conseil calculatrice :** 
    Maîtrisez l'utilisation des fonctions intégrées de votre calculatrice pour les lois binomiales :
    *   `BinomialeFdp` (ou `binomPdf`) pour $P(X = k)$ (probabilité ponctuelle).
    *   `BinomialeFRép` (ou `binomCdf`) pour $P(X \le k)$ (probabilité cumulée).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
