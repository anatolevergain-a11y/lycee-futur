---
title: "Cours : Dénombrement et combinaisons"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Le dénombrement est une branche des mathematiques qui consiste a compter le nombre d'elements dans un ensemble fini. En classe de Terminale, les outils de denombrement permettent de resoudre des problemes de probabilite discrete.

* **Ensemble fini :** Soit $E$ un ensemble. Son cardinal, note $\text{card}(E)$ ou $|E|$, represente le nombre d'elements qu'il contient.
* **P-uplet (ou arrangement avec repetition) :** Etant donne un ensemble $E$ de cardinal $n$ et un entier $p \ge 1$, un $p$-uplet (ou arrangement avec repetition) est une suite ordonnee de $p$ elements de $E$ (avec repetition possible).
* **Permutation :** Une permutation d'un ensemble de $n$ elements est un $n$-uplet ordonne de ces $n$ elements distincts (sans repetition).
* **Arrangement :** Un arrangement de $p$ elements pris parmi $n$ ($p \le n$) est un $p$-uplet d'elements *distincts* de $E$ pris en compte dans un ordre determine.
* **Combinaison :** Une combinaison de $p$ elements pris parmi $n$ ($p \le n$) est une partie (un sous-ensemble) de $E$ contenant $p$ elements. L'ordre des elements n'a pas d'importance et il n'y a pas de repetition.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Factorielle
Pour tout entier naturel $n \ge 1$, la factorielle de $n$, note $n!$, est le produit des $n$ premiers entiers naturels non nuls :
$$n! = n \times (n-1) \times (n-2) \times \dots \times 1$$
Par convention, $0! = 1$.

### B. Nombre de $p$-uplets
Le nombre de $p$-uplets d'un ensemble de cardinal $n$ est :
$$n^p$$

### C. Nombre de permutations
Le nombre de permutations d'un ensemble de $n$ elements est :
$$n!$$

### D. Nombre d'arrangements
Le nombre d'arrangements de $p$ elements pris parmi $n$ est :
$$A_n^p = \frac{n!}{(n-p)!}$$

### E. Nombre de combinaisons (Coefficients binomiaux)
Le nombre de combinaisons de $p$ elements pris parmi $n$ est note $\binom{n}{p}$ (se lit "p parmi n") :
$$\binom{n}{p} = \frac{A_n^p}{p!} = \frac{n!}{p!(n-p)!}$$

### F. Propriétés fondamentales des coefficients binomiaux
* **Symetrie :** Pour tout entier $n$ et tout $p$ tel que $0 \le p \le n$,
  $$\binom{n}{p} = \binom{n}{n-p}$$
* **Formule de Pascal :** Pour tout entier $n \ge 1$ et tout $p$ tel que $1 \le p \le n$,
  $$\binom{n}{p} = \binom{n-1}{p-1} + \binom{n-1}{p}$$
* **Somme des coefficients binomiaux :** Pour tout entier $n \ge 0$,
  $$\sum_{p=0}^{n} \binom{n}{p} = 2^n$$

---

## 💡 3. Exemple d'application résolu

**Enonce :**
Une urne contient $10$ boules indiscernables au toucher : $4$ rouges et $6$ noires. On tire simultanément et au hasard $3$ boules de l'urne.
1. Quel est le nombre total de tirages possibles ?
2. Quel est le nombre de tirages contenant exactement $2$ boules rouges et $1$ boule noire ?
3. En déduire la probabilité de cet évènement.

**Correction :**
1. **Nombre total de tirages :**
   Les tirages sont simultanés, ce qui signifie qu'il n'y a ni ordre ni remise. Il s'agit de choisir $3$ boules parmi $10$. Le nombre de tirages est donc une combinaison :
   $$\binom{10}{3} = \frac{10!}{3!(10-3)!} = \frac{10 \times 9 \times 8}{3 \times 2 \times 1} = 120$$
   Il y a $120$ tirages possibles.

2. **Nombre de tirages favorables :**
   On souhaite obtenir $2$ boules rouges parmi les $4$ disponibles, et $1$ boule noire parmi les $6$ disponibles.
   * Le nombre de choix pour les boules rouges est $\binom{4}{2}$.
   * Le nombre de choix pour les boules noires est $\binom{6}{1}$.
   
   D'apres le principe multiplicatif, le nombre de tirages favorables est :
   $$\binom{4}{2} \times \binom{6}{1} = \left(\frac{4 \times 3}{2 \times 1}\right) \times 6 = 6 \times 6 = 36$$

3. **Calcul de la probabilite :**
   La probabilite $P$ est le rapport entre le nombre de cas favorables et le nombre de cas possibles (situation d'equiprobabilite) :
   $$P = \frac{36}{120} = \frac{3}{10} = 0{,}3$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Ordre ou pas ordre ?** C'est la question fondamentale a se poser en debut d'exercice. 
  * Si l'ordre importe (ex: podium, code secret, classement) $\rightarrow$ **Arrangement** ou **$p$-uplet**.
  * Si l'ordre n'importe pas (ex: main de cartes, tirage simultane) $\rightarrow$ **Combinaison**.
* **Avec ou sans remise ?**
  * Avec remise (ex: tirages successifs avec remise) $\rightarrow$ **$p$-uplet** ($n^p$).
  * Sans remise (ex: tirage simultane ou successif sans remise) $\rightarrow$ **Arrangement** ou **Combinaison**.
* **Attention aux notations :** Ne confondez pas la notation $\binom{n}{p}$ avec une fraction. Il s'agit d'un nombre entier. De plus, $\binom{n}{0} = 1$ et $\binom{n}{n} = 1$, ce sont des valeurs a connaitre par coeur pour eviter de bloquer lors des calculs.
* **Redaction :** Lors d'une epreuve, explicitez toujours la nature du tirage (simultane, successif avec ou sans remise) avant d'appliquer une formule. Cela justifie le choix de l'outil mathematique aupres du correcteur.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
