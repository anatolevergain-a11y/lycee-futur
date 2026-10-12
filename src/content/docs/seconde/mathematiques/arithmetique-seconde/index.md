---
title: "Cours : Arithmétique et multiples"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

L'arithmétique dans l'ensemble des entiers naturels $\mathbb{N}$ s'intéresse aux relations de divisibilité entre les nombres.

*   **Entiers naturels :** L'ensemble des nombres entiers positifs ou nuls est noté $\mathbb{N} = \{0, 1, 2, 3, \dots\}$.
*   **Diviseur et multiple :** Soient $a$ et $b$ deux entiers naturels, avec $b \neq 0$. 
    Dire que "$b$ divise $a$" signifie que la division euclidienne de $a$ par $b$ a un reste nul. 
    On dit alors que :
    *   $a$ est un **multiple** de $b$.
    *   $b$ est un **diviseur** de $a$.
    *   On note cette relation $b \mid a$.
*   **Nombre pair et nombre impair :**
    *   Un entier $n$ est **pair** s'il est un multiple de $2$, c'est-à-dire qu'il existe un entier $k$ tel que $n = 2k$.
    *   Un entier $n$ est **impair** s'il s'écrit sous la forme $n = 2k + 1$ avec $k \in \mathbb{N}$.
*   **Nombres premiers :** Un nombre premier est un entier naturel qui admet exactement deux diviseurs distincts : $1$ et lui-même (par exemple : $2, 3, 5, 7, 11, 13, \dots$).

---

## 📐 2. Formules et Propriétés fondamentales

*   **Caractérisation algébrique de la divisibilité :**
    Soient $a$ et $b$ deux entiers ($b \neq 0$). 
    $$b \mid a \iff \text{il existe un entier } k \text{ tel que } a = b \times k$$

*   **Division euclidienne :**
    Soient $a$ un entier naturel (le dividende) et $b$ un entier non nul (le diviseur). Il existe un unique couple d'entiers $(q, r)$ tel que :
    $$a = b \times q + r \quad \text{avec} \quad 0 \le r < b$$
    Où $q$ est le quotient et $r$ est le reste. 
    *   Dire que $b$ divise $a$ équivaut à dire que le reste $r$ de la division euclidienne de $a$ par $b$ est égal à $0$.

*   **Critères de divisibilité usuels :**
    Soit $N$ un entier naturel donné par son écriture décimale :
    *   **Par $2$ :** $N$ est divisible par $2$ si et seulement si son chiffre des unités est $0, 2, 4, 6 \text{ ou } 8$.
    *   **Par $5$ :** $N$ est divisible par $5$ si et seulement si son chiffre des unités est $0 \text{ ou } 5$.
    *   **Par $10$ :** $N$ est divisible par $10$ si et seulement si son chiffre des unités est $0$.
    *   **Par $3$ (et $9$) :** $N$ est divisible par $3$ (respectivement $9$) si et seulement si la somme de ses chiffres est un multiple de $3$ (respectivement de $9$).

*   **Propriétés de linéarité de la divisibilité :**
    Si un entier $d$ divise deux entiers $a$ et $b$, alors $d$ divise toute combinaison linéaire de $a$ et $b$, c'est-à-dire que pour tous entiers $u$ et $v$ :
    $$d \mid (u \cdot a + v \cdot b)$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
1. Déterminer si le nombre $a = 1476$ est divisible par $3$, par $4$ et par $5$.
2. Écrire la division euclidienne de $1476$ par $13$.

**Correction détaillée :**
1. 
   * **Divisibilité par $3$ :** Calculons la somme des chiffres de $a$ :
     $$1 + 4 + 7 + 6 = 18$$
     Puisque $18$ est un multiple de $3$ ($18 = 3 \times 6$), alors **$1476$ est divisible par $3$**.
   * **Divisibilité par $4$ :** Le nombre formé par les deux derniers chiffres de $a$ est $76$. Or, $76 = 4 \times 19$, donc $76$ est un multiple de $4$. Par conséquent, **$1476$ est divisible par $4$**.
   * **Divisibilité par $5$ :** Le chiffre des unités de $a$ est $6$, ce qui est différent de $0$ ou $5$. Par conséquent, **$1476$ n'est pas divisible par $5$**.

2. 
   * Effectuons la division euclidienne de $1476$ par $13$. 
   * En posant la division ou à l'aide d'une calculatrice, on cherche le quotient entier $q$ :
     $$1476 \div 13 \approx 113{,}538\dots$$
     On teste $q = 113$ :
     $$13 \times 113 = 1469$$
     Le reste $r$ est donc :
     $$r = 1476 - 1469 = 7$$
   * On vérifie que le reste est strictement inférieur au diviseur ($7 < 13$).
   * L'écriture de la division euclidienne est donc :
     $$1476 = 13 \times 113 + 7$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention au vocabulaire :** Ne pas confondre "diviseur" et "multiple". Dire que $3$ est un diviseur de $12$ est correct ; dire que $3$ est un multiple de $12$ est une erreur grossière.
*   **Reste strictement positif ou nul :** Dans une division euclidienne par $b$, le reste $r$ doit impérativement vérifier l'encadrement $0 \le r < b$. Un reste ne peut jamais être négatif ni supérieur ou égal au diviseur.
*   **Justification des critères :** Aux examens, l'utilisation des critères de divisibilité (comme la somme des chiffres pour $3$) doit être explicitée par une phrase claire (ex: *"La somme des chiffres est..., or ce nombre est un multiple de..."*).
*   **Rédaction rigoureuse :** Pour prouver qu'un entier $A$ est un multiple de $B$, l'objectif est toujours de mettre en évidence une écriture sous la forme $A = B \times k$ où $k$ est un nombre entier.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
