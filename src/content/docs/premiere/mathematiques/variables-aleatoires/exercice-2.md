---
title: "Exercice 2 : Variance et écart-type de portefeuilles financiers"
description: "Application pratique du chapitre Variables aléatoires réelles"
---

### 🌐 Contexte & Données scientifiques

En gestion de patrimoine et en ingénierie financière, la modélisation probabiliste est un outil fondamental pour formaliser l'arbitrage entre la rentabilité espérée d'un investissement et le risque qui lui est inhérent. Soit un investisseur disposant d'un capital initial qu'il souhaite allouer entre différents actifs financiers (actions, obligations, matières premières). 

La rentabilité future d'un actif n'est pas connue avec certitude ; elle est modélisée mathématiquement par une variable aléatoire réelle $X$. L'espérance mathématique $E(X)$ représente le rendement moyen escompté, tandis que la variance $V(X)$ (et son écart-type $\sigma(X) = \sqrt{V(X)}$) mesure la dispersion des résultats autour de cette moyenne, constituant ainsi la quantification statistique du risque financier.

Considérons deux portefeuilles d'investissement distincts, notés $P_1$ et $P_2$, composés d'actifs dont les rentabilités annuelles en pourcentage (exprimées en $\text{\%}$) dépendent de l'état conjoncturel de l'économie à l'horizon d'un an. On modélise l'économie par trois états possibles : *Récession*, *Stabilité* et *Croissance*.

Le tableau ci-dessous répertorie les lois de probabilité des rentabilités $X_1$ (pour le portefeuille $P_1$) et $X_2$ (pour le portefeuille $P_2$) :

| État de l'économie | Probabilité $P(S = s)$ | Rentabilité de $P_1$ ($X_1$ en $\text{\%}$) | Rentabilité de $P_2$ ($X_2$ en $\text{\%}$) |
| :--- | :---: | :---: | :---: |
| Récession ($s_1$) | $0{,}20$ | $-5 \text{ \%}$ | $2 \text{ \%}$ |
| Stabilité ($s_2$) | $0{,}50$ | $8 \text{ \%}$ | $6 \text{ \%}$ |
| Croissance ($s_3$) | $0{,}30$ | $15 \text{ \%}$ | $10 \text{ \%}$ |

*Note méthodologique et limites du modèle :* Ce type de modèle probabiliste repose sur l'hypothèse stationnaire que les lois de probabilité passées ou estimées reflètent l'avenir, ce qui constitue une simplification de la réalité économique complexe. De plus, la variance pénalise de la même manière les écarts positifs (gains supérieurs aux prévisions) et les écarts négatifs (pertes), ce qui amène certains analystes à nuancer son utilisation exclusive comme mesure unique du risque.

---

### ❓ Énoncé

1. **Calcul des espérances :** Calculer l'espérance mathématique $E(X_1)$ et l'espérance mathématique $E(X_2)$ de chaque portefeuille. Interpréter ces valeurs dans le contexte financier.
2. **Calcul des variances :** Calculer la variance $V(X_1)$ et la variance $V(X_2)$ pour chaque portefeuille en détaillant les calculs.
3. **Analyse du risque et de la rentabilité :** Déterminer l'écart-type $\sigma(X_1)$ et $\sigma(X_2)$. En comparant les couples $(\text{Espérance}, \text{Écart-type})$ des deux portefeuilles, quel choix un investisseur rationnel devrait-il effectuer selon son aversion au risque ?
4. **Esprit critique et diversification :** Un troisième portefeuille $P_3$ est constitué par une combinaison linéaire équipondérée des deux portefeuilles précédents, définie par $X_3 = 0{,}5 X_1 + 0{,}5 X_2$. Sachant que l'espérance est de $E(X_3) = 6{,}85 \text{ \%}$ et que son écart-type s'élève à $\sigma(X_3) \approx 3{,}21 \text{ \%}$, expliquez par quel mécanisme mathématique et économique la combinaison d'actifs peut parfois réduire le risque global par rapport à la détention d'actifs isolés.

---

### 💡 Indice de méthode

* **Espérance :** Pour une variable aléatoire $X$ prenant les valeurs $x_i$ avec les probabilités $p_i$, l'espérance se calcule par la formule :
  $$E(X) = \sum_{i} p_i x_i$$
* **Variance (formule de König-Huygens) :** L'utilisation de cette formule simplifie souvent les calculs :
  $$V(X) = E(X^2) - (E(X))^2 \quad \text{avec} \quad E(X^2) = \sum_{i} p_i x_i^2$$
* **Écart-type :** Il correspond à la racine carrée de la variance : $\sigma(X) = \sqrt{V(X)}$, exprimée dans la même unité que la variable (ici, en $\text{\%}$).

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Calcul des espérances mathématiques
L'espérance représente le rendement moyen escompté à long terme pour chaque portefeuille.

* **Pour le portefeuille $P_1$ ($X_1$) :**
  $$E(X_1) = (0{,}20 \times (-5)) + (0{,}50 \times 8) + (0{,}30 \times 15)$$
  $$E(X_1) = -1{,}0 + 4{,}0 + 4{,}5 = 7{,}5 \text{ \%}$$

* **Pour le portefeuille $P_2$ ($X_2$) :**
  $$E(X_2) = (0{,}20 \times 2) + (0{,}50 \times 6) + (0{,}30 \times 10)$$
  $$E(X_2) = 0{,}4 + 3{,}0 + 3{,}0 = 6{,}4 \text{ \%}$$

*Interprétation :* Le portefeuille $P_1$ offre une rentabilité espérée supérieure ($7{,}5 \text{ \%}$ contre $6{,}4 \text{ \%}$ pour $P_2$).

---

#### Question 2 : Calcul des variances
Utilisons la formule de König-Huygens $V(X) = E(X^2) - (E(X))^2$.

* **Pour le portefeuille $P_1$ :**
  1. Calcul de $E(X_1^2)$ :
     $$E(X_1^2) = (0{,}20 \times (-5)^2) + (0{,}50 \times 8^2) + (0{,}30 \times 15^2)$$
     $$E(X_1^2) = (0{,}20 \times 25) + (0{,}50 \times 64) + (0{,}30 \times 225)$$
     $$E(X_1^2) = 5{,}0 + 32{,}0 + 67{,}5 = 104{,}5$$
  2. Calcul de la variance $V(X_1)$ :
     $$V(X_1) = 104{,}5 - (7{,}5)^2 = 104{,}5 - 56{,}25 = 48{,}25 \text{ (\%)}^2$$

* **Pour le portefeuille $P_2$ :**
  1. Calcul de $E(X_2^2)$ :
     $$E(X_2^2) = (0{,}20 \times 2^2) + (0{,}50 \times 6^2) + (0{,}30 \times 10^2)$$
     $$E(X_2^2) = (0{,}20 \times 4) + (0{,}50 \times 36) + (0{,}30 \times 100)$$
     $$E(X_2^2) = 0{,}8 + 18{,}0 + 30{,}0 = 48{,}8$$
  2. Calcul de la variance $V(X_2)$ :
     $$V(X_2) = 48{,}8 - (6{,}4)^2 = 48{,}8 - 40{,}96 = 7{,}84 \text{ (\%)}^2$$

---

#### Question 3 : Analyse du risque et de l'écart-type
Calculons les écarts-types $\sigma(X) = \sqrt{V(X)}$ :
* $\sigma(X_1) = \sqrt{48{,}25} \approx 6{,}95 \text{ \%}$
* $\sigma(X_2) = \sqrt{7{,}84} = 2{,}80 \text{ \%}$

*Analyse critique :* 
* Le portefeuille $P_1$ est plus rémunérateur mais nettement plus risqué ($\sigma(X_1) \approx 6{,}95 \text{ \%}$) avec une perte potentielle de $-5 \text{ \%}$ en cas de récession.
* Le portefeuille $P_2$ est plus conservateur : sa rentabilité est plus faible ($6{,}4 \text{ \%}$), mais son risque est considérablement réduit ($\sigma(X_2) = 2{,}80 \text{ \%}$) et le rendement reste positif même en période de récession ($2 \text{ \%}$).
* Un investisseur ayant une forte aversion au risque préfèrera $P_2$, tandis qu'un investisseur tolérant le risque pour maximiser son gain potentiel se tournera vers $P_1$. Aucun choix n'est intrinsèquement "meilleur" d'un point de vue scientifique ; il dépend de la fonction d'utilité de l'agent économique.

---

#### Question 4 : Esprit critique et diversification
Le portefeuille $P_3$ présente une espérance de $6{,}85 \text{ \%}$ (supérieure à celle de $P_2$) pour un écart-type de $\approx 3{,}21 \text{ \%}$ (bien inférieur à celui de $P_1$). 

Ce phénomène illustre le principe fondamental de la **diversification financière** (mis en lumière par Harry Markowitz). Mathématiquement, la variance d'une somme de variables aléatoires dépend de la variance de chacune mais aussi de leur covariance (ou corrélation). Si les actifs ne évoluent pas strictement de manière synchronisée (corrélation inférieure à $1$), les fluctuations contraires des uns tendent à compenser les fluctuations des autres. 

*Limites du modèle :* En période de crise systémique majeure, les corrélations entre actifs ont tendance à tendre vers $1$ (phénomène de contagion financière), ce qui réduit temporairement l'efficacité théorique de la diversification par rapport aux prévisions du modèle linéaire.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
