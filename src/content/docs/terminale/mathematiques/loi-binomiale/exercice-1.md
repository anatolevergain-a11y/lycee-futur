---
title: "Exercice 1 : Schéma de Bernoulli et répétition d'épreuves indépendantes"
description: "Application pratique du chapitre Lois de probabilité et Loi Binomiale"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du contrôle de qualité dans l'industrie aéronautique, l'entreprise *AeroContrôle* fabrique des composants électroniques embarqués soumis à des contraintes thermiques et vibratoires extrêmes. Un lot important de micro-capteurs de pression est analysé. 

D'après les données statistiques historiques de l'entreprise et les tests de validation en laboratoire, la probabilité qu'un composant prélevé au hasard présente un défaut de soudure invisible à l'œil nu, mais détectable par tomographie aux rayons X, est estimée à $p = 0{,}04$.

Pour optimiser les coûts de la chaîne de production tout en garantissant un niveau de sûreté maximal, le service qualité procède à des contrôles par échantillonnage. On prélève au hasard un échantillon de $n$ composants dans le stock. Vu le volume très important de la production, ces tirages peuvent être assimilés à des tirages successifs avec remise.

Néanmoins, les ingénieurs qualité doivent s'interroger sur la pertinence du modèle : si l'hypothèse d'indépendance des tirages est mathématiquement commode, elle suppose que les défaillances proviennent de causes aléatoires isolées et non d'une dérive systémique de la machine de soudage (ce qui invaliderait l'hypothèse d'une probabilité $p$ constante).

### ❓ Énoncé

On considère un échantillon de $n = 50$ micro-capteurs prélevés de manière indépendante. Soit $X$ la variable aléatoire représentant le nombre de capteurs défectueux dans cet échantillon.

1. Justifier rigoureusement que la loi de probabilité suivie par $X$ est une loi binomiale, dont on précisera les paramètres $n$ et $p$. Écrire l'expression générale de la probabilité $P(X = k)$ pour un entier $k$ compris entre $0$ et $50$.
2. Calculer la probabilité, arrondie à $10^{-4}$ près, qu'exactement deux capteurs soient défectueux dans l'échantillon.
3. Le cahier des charges impose que la probabilité d'accepter un lot contenant plus de $10\ \%$ de pièces défectueuses soit inférieure à $5\ %$. À l'aide d'une calculatrice ou d'un outil numérique, déterminer la probabilité que l'échantillon contienne plus de $5$ pièces défectueuses ($X > 5$). Le lot satisfait-il au cahier des charges ?
4. **Esprit critique :** Discuter des limites du modèle binomial si l'on augmentait la taille de l'échantillon à $n = 5000$ composants, sachant que la production s'effectue par lots continus sur une machine unique sujette à l'usure thermique.

---

### 💡 Indice de méthode

* **Question 1 :** Pour caractériser un schéma de Bernoulli, vérifiez l'existence d'une épreuve élémentaire à deux issues (succès/échec), la constance de la probabilité $p$ et l'indépendance des répétitions.
* **Question 2 :** Utilisez la formule des probabilités pour une loi binomiale : 
  $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$$
* **Question 3 :** Pensez à utiliser l'événement contraire pour calculer $P(X > 5) = 1 - P(X \le 5)$. 
* **Question 4 :** Interrogez-vous sur la constance de $p$ au cours du temps (non-stationnarité) et sur l'hypothèse d'indépendance lorsque $n$ devient grand face à la taille totale de la production sans remise.

---

### 📋 Correction détaillée pas à pas

#### 1. Justification du modèle binomial et paramètres
Pour définir la variable aléatoire $X$, analysons l'expérience aléatoire :
* On répète $n = 50$ fois de manière identique et indépendante une même épreuve élémentaire.
* Chaque épreuve consiste à prélever un micro-capteur. Elle comporte deux issues :
  * Le "succès" $S$ : "le capteur est défectueux", de probabilité $p = 0{,}04$.
  * L'"échec" $\bar{S}$ : "le capteur est conforme", de probabilité $1 - p = 1 - 0{,}04 = 0{,}96$.
* La variable aléatoire $X$ compte le nombre de succès (de capteurs défectueux) sur les $50$ épreuves.

Par conséquent, $X$ suit la **loi binomiale** de paramètres $n = 50$ et $p = 0{,}04$, notée $\mathcal{B}(50, 0{,}04)$.

Pour tout entier $k \in \{0, 1, \dots, 50\}$, l'expression de la probabilité est :
$$P(X = k) = \binom{50}{k} (0{,}04)^k (0{,}96)^{50-k}$$

#### 2. Calcul de $P(X = 2)$
Appliquons la formule précédente pour $k = 2$ :
$$P(X = 2) = \binom{50}{2} (0{,}04)^2 (0{,}96)^{50-2}$$
* Calculons le coefficient binomial : $\binom{50}{2} = \frac{50 \times 49}{2} = 1225$.
* Calculons $(0{,}04)^2 = 0{,}0016$.
* Calculons $(0{,}96)^{48} \approx 0{,}147209$.

En effectuant le produit :
$$P(X = 2) = 1225 \times 0{,}0016 \times (0{,}96)^{48} \approx 1225 \times 0{,}0016 \times 0{,}147209 \approx 0{,}2883$$

La probabilité qu'exactement deux capteurs soient défectueux est d'environ **$0{,}2883$** (soit $28{,}83\%$).

#### 3. Évaluation du cahier des charges ($P(X > 5)$)
On cherche à calculer la probabilité d'avoir strictement plus de $5$ capteurs défectueux, c'est-à-dire $P(X > 5)$.
Par passage à l'événement contraire :
$$P(X > 5) = 1 - P(X \le 5) = 1 - \sum_{k=0}^{5} P(X = k)$$

À l'aide de la calculatrice ou d'un outil de calcul numérique :
* $P(X \le 5) = P(X=0) + P(X=1) + P(X=2) + P(X=3) + P(X=4) + P(X=5)$
* $P(X \le 5) \approx 0{,}9861$

Donc :
$$P(X > 5) = 1 - 0{,}9861 = 0{,}0139$$

**Conclusion critique :** La probabilité d'observer plus de $5$ pièces défectueuses (ce qui représente $10\%$ de l'échantillon de $50$ pièces) est de $0{,}0139$, soit $1{,}39\%$. 
Cette valeur étant inférieure au seuil maximal autorisé de $5\%$, **le lot satisfait rigoureusement au cahier des charges** imposé par l'entreprise.

#### 4. Analyse critique des limites du modèle
Si l'on augmentait la taille de l'échantillon à $n = 5000$ composants, plusieurs limites scientifiques et méthodologiques apparaîtraient :
1. **L'hypothèse d'indépendance et de constance de $p$ :** Dans un processus industriel réel, les machines subissent de l'usure thermique ou mécanique. Si la machine se dérègle au cours de la production (phénomène de non-stationnarité), la probabilité $p$ n'est plus constante ($p$ devient une fonction du temps $t$). Les épreuves ne sont alors plus indépendantes, ce qui invalide mathématiquement l'utilisation stricte de la loi binomiale.
2. **Le mode de tirage :** Si les $5000$ pièces sont prélevées sans remise dans un stock de taille finie comparable (par exemple $N = 20000$ pièces), la composition du stock varie de manière significative à chaque prélèvement. Dans ce cas rigoureux, la loi appropriée n'est plus la loi binomiale, mais la **loi hypergéométrique**. Néanmoins, si le stock est infiniment grand devant l'échantillon ($N \gg n$), l'approximation binomiale reste acceptable.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
