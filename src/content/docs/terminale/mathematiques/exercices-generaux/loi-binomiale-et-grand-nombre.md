---
title: "Exercice : Loi binomiale et grand nombre"
description: "Démonstration appliquée : Fiabilité des tests de dépistage médicale de masse"
---

### 🌐 Contexte moderne & concret

Lors d'une campagne de dépistage de masse pour une pathologie rare, les autorités sanitaires doivent analyser des millions de tests. La théorie des probabilités, et plus particulièrement la **loi binomiale** couplée à la **loi des grands nombres**, est l'outil mathématique indispensable pour évaluer l'efficacité globale d'une telle campagne, anticiper le taux de faux positifs et dimensionner les capacités des laboratoires d'analyse.

On considère une population dans laquelle la proportion de personnes atteintes par la maladie est $p = 0{,}002$ (soit $0{,}2\,\%$). 
Un test de dépistage est appliqué à cette population. Ses caractéristiques sont les suivantes :
* **Sensibilité ($P(T^+ \mid M)$)** : Si une personne est malade, le test est positif dans $99\,\%$ des cas.
* **Spécificité ($P(T^- \mid \bar{M})$)** : Si une personne n'est pas malade, le test est négatif dans $98\,\%$ des cas.

On prélève au hasard un échantillon de $n$ personnes dans cette grande population, $n$ étant suffisamment grand pour que l'on puisse assimiler ce choix à des tirages successifs indépendants avec remise.

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Calcul de probabilité individuelle :** 
   Montrer que la probabilité qu'un individu pris au hasard dans la population ait un test positif, notée $P(T^+)$, est égale à $0{,}02158$.

2. **Modélisation par la loi binomiale :** 
   On choisit un échantillon de $n = 1000$ personnes. On note $X$ la variable aléatoire représentant le nombre de personnes ayant un test positif dans cet échantillon.
   Justifier que $X$ suit une loi binomiale dont on précisera les paramètres. Calculer la probabilité qu'exactement $20$ personnes aient un test positif (on arrondira le résultat à $10^{-4}$ près).

3. **Espérance et fluctuation :** 
   Calculer l'espérance mathématique $E(X)$ et l'écart-type $\sigma(X)$ de la variable aléatoire $X$ pour un échantillon de $1000$ personnes. Interpréter concrètement la valeur de l'espérance dans le cadre de ce dépistage de masse.

4. **Loi des grands nombres et grand nombre de tests :** 
   La municipalité souhaite tester $N = 100\,000$ personnes. Soit $F_N$ la fréquence de tests positifs observés dans cet échantillon géant. 
   À l'aide de l'inégalité de Bienaymé-Tchebychev ou des grands principes du cours de Terminale sur la loi des grands nombres, expliquer ce que l'on peut affirmer concernant la proportion observée de tests positifs par rapport à la probabilité théorique $P(T^+)$ lorsque $N$ tend vers l'infini.

---

### 💡 Indice

* **Question 1 :** Pensez à utiliser la formule des probabilités totales en partitionnant l'univers selon l'état de santé de la personne (Malade $M$ ou Non malade $\bar{M}$).
* **Question 2 :** Identifiez les conditions d'application d'un schéma de Bernoulli (répétitions d'expériences identiques et indépendantes à deux issues).
* **Question 3 :** Pour une loi binomiale $\mathcal{B}(n, p)$, rappelez-vous que $E(X) = n \times p$ et $\sigma(X) = \sqrt{n \times p \times (1-p)}$.
* **Question 4 :** La loi des grands nombres (Bernoulli) énonce que la fréquence observée tend en probabilité vers l'espérance théorique (la probabilité du succès) lorsque la taille de l'échantillon grandit.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Calcul de la probabilité individuelle $P(T^+)$
Soit $M$ l'événement « la personne est malade » et $\bar{M}$ son événement contraire « la personne n'est pas malade ».
D'après l'énoncé :
* $P(M) = 0{,}002$, donc $P(\bar{M}) = 1 - 0{,}002 = 0{,}998$.
* $P(T^+ \mid M) = 0{,}99$ (Sensibilité).
* $P(T^+ \mid \bar{M}) = 1 - P(T^- \mid \bar{M}) = 1 - 0{,}98 = 0{,}02$ (Taux de faux positifs).

En utilisant la formule des probabilités totales :
$$P(T^+) = P(T^+ \cap M) + P(T^+ \cap \bar{M})$$
$$P(T^+) = P(M) \times P(T^+ \mid M) + P(\bar{M}) \times P(T^+ \mid \bar{M})$$
$$P(T^+) = (0{,}002 \times 0{,}99) + (0{,}998 \times 0{,}02)$$
$$P(T^+) = 0{,}00198 + 0{,}01996 = 0{,}02158$$

La probabilité qu'un individu ait un test positif est bien de $0{,}02158$.

---

#### 2. Modélisation par la loi binomiale
* **Justification :** Le choix de $n = 1000$ personnes de manière indépendante (population très grande) constitue la répétition de $1000$ épreuves de Bernoulli identiques, de paramètre de succès $p' = P(T^+) = 0{,}02158$.
* Ainsi, $X$ suit la **loi binomiale** de paramètres $\mathcal{B}(1000\,;\,0{,}02158)$.
* **Calcul de $P(X = 20)$ :**
  $$P(X = 20) = \binom{1000}{20} (0{,}02158)^{20} (1 - 0{,}02158)^{1000 - 20}$$
  $$P(X = 20) = \binom{1000}{20} (0{,}02158)^{20} (0{,}97842)^{980}$$
  À l'aide de la calculatrice, on obtient :
  $$P(X = 20) \approx 0{,}0881$$
  La probabilité qu'exactement $20$ personnes aient un test positif dans cet échantillon de $1000$ est d'environ $0{,}0881$ (soit $8{,}81\,\%$).

---

#### 3. Espérance et fluctuation
* **Espérance :**
  $$E(X) = n \times p' = 1000 \times 0{,}02158 = 21{,}58$$
  *Interprétation :* Si l'on répète de nombreuses campagnes de tests sur des échantillons de $1000$ personnes, on s'attend à observer en moyenne $21{,}58$ tests positifs par échantillon.
* **Écart-type :**
  $$\sigma(X) = \sqrt{n \times p' \times (1 - p')} = \sqrt{1000 \times 0{,}02158 \times 0{,}97842} = \sqrt{21{,}1143} \approx 4{,}595$$
  Cet écart-type mesure la dispersion du nombre de tests positifs autour de la moyenne attendue dans les échantillons de taille $1000$.

---

#### 4. Loi des grands nombres et grand nombre de tests
Soit $N = 100\,000$ et $F_N = \frac{X_N}{N}$ la fréquence observée des tests positifs sur ce grand échantillon.
D'après la **loi des grands nombres** (ou théorème de Bernoulli), pour tout réel $\varepsilon > 0$ :
$$\lim_{N \to +\infty} P\left(\left| F_N - p' \right| \ge \varepsilon\right) = 0$$

*Conséquence concrète pour le dépistage de masse :* 
Lorsque la municipalité réalise $100\,000$ tests, la fréquence observée $F_N$ des tests positifs va se stabiliser très près de la probabilité théorique $p' = 0{,}02158$. 
On peut ainsi affirmer avec une très forte quasi-certitude que le nombre total de tests positifs se situera très près de $N \times p' = 100\,000 \times 0{,}02158 = 2158$ tests positifs. C'est cette certitude mathématique qui permet aux autorités de commander précisément le nombre de tests de confirmation nécessaires (par PCR par exemple) sans gaspillage de ressources.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
