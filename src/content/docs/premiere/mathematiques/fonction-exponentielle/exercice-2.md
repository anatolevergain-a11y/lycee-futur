---
title: "Exercice 2 : Croissance de bactéries en milieu de culture"
description: "Application pratique du chapitre Fonction exponentielle"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre d'une étude en microbiologie prédictive, on s'intéresse à la cinétique de croissance d'une souche bactérienne (*Escherichia coli*) introduite dans un milieu nutritif liquide thermostaté à $37 \text{ } ^\circ\text{C}$. 

À l'instant initial $t = 0 \text{ h}$ (début de l'observation), la densité de population initiale est mesurée à $N_0 = 1,0 \times 1^3 \text{ bactéries/mL}$. 

En microbiologie, la phase de croissance exponentielle (dite phase trophique) est modélisée par une équation différentielle traduisant le fait que le taux d'accroissement de la population est proportionnel au nombre de bactéries présentes. Sous des conditions environnementales supposées constantes (excès de nutriments, pH régulé, aération optimale), la population de bactéries à l'instant $t$ (exprimé en heures) est modélisée par une fonction $N$ définie sur $[0, +\infty[$ de la forme :
$$N(t) = N_0 \times e^{k \cdot t}$$
où $k$ représente le taux de croissance spécifique de la bactérie (exprimé en $\text{h}^{-1}$).

Des mesures expérimentales menées en laboratoire ont permis d'estimer le taux de croissance à $k \approx 0,462 \text{ h}^{-1}$. 

Cependant, les biologistes rappellent que ce modèle mathématique idéal comporte des limites inhérentes : il ne prend pas en compte l'épuisement progressif du substrat carboné, ni l'accumulation de métabolites toxiques, qui conduisent inévitablement *in fine* à un ralentissement de la croissance (phase stationnaire, puis phase de déclin). L'analyse critique de ce modèle face aux données empiriques constitue un enjeu majeur pour l'optimisation des bio-industries (production de protéines recombinantes, par exemple).

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Vérification et calcul d'état :** En utilisant les paramètres fournis ($N_0 = 10^3$ et $k = 0,462 \text{ h}^{-1}$), calculez la population théorique de bactéries présente dans le milieu après $5 \text{ h}$ de culture. Donnez la valeur arrondie à l'unité près.

2. **Résolution d'équation :** Déterminez algébriquement le temps $t$ (exprimé en heures et minutes) nécessaire pour que la population initiale de bactéries soit exactement multipliée par $10$.

3. **Analyse critique et limites du modèle :** Le milieu de culture utilisé a une capacité de charge maximale estimée empiriquement à $S_{\text{max}} = 10^9 \text{ bactéries/mL}$, seuil au-delà duquel la mortalité cellulaire dépasse le taux de division en raison de la compétition pour les ressources. À l'aide du modèle exponentiel, calculez à quel instant $t_1$ ce seuil serait théoriquement atteint. Discutez de la validité biologique de ce résultat au regard des hypothèses initiales du modèle.

---

### 💡 Indice de méthode

* **Question 1 :** Substituez directement les valeurs de $t$ et $k$ dans l'expression de $N(t)$ et utilisez les propriétés de la fonction exponentielle sur votre calculatrice.
* **Question 2 :** Posez l'équation $N(t) = 10 \times N_0$ puis appliquez la fonction logarithme népérien ($\ln$), qui est la bijection réciproque de la fonction exponentielle, afin de faire "descendre" l'inconnue $t$ de l'exposant.
* **Question 3 :** Résolvez une inéquation similaire à la question 2. Pour l'analyse critique, confrontez la valeur trouvée à la réalité biologique d'un milieu fermé (loi logistique de Verhulst vs croissance exponentielle illimitée).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la population après $5 \text{ h}$
La fonction régissant la croissance est :
$$N(t) = 10^3 \times e^{0,462 \cdot t}$$
Pour $t = 5 \text{ h}$, nous calculons :
$$N(5) = 10^3 \times e^{0,462 \times 5}$$
$$N(5) = 10^3 \times e^{2,31}$$
En utilisant la valeur approchée de $e^{2,31} \approx 10,074$, nous obtenons :
$$N(5) \approx 10^3 \times 10,074 = 10074 \text{ bactéries/mL}$$
*Réponse :* Après $5 \text{ heures}$, le milieu contient environ $10074 \text{ bactéries/mL}$.

#### 2. Temps nécessaire pour multiplier la population par $10$
Nous cherchons l'instant $t$ tel que $N(t) = 10 \times N_0$, c'est-à-dire :
$$10^3 \times e^{0,462 \cdot t} = 10 \times 10^3$$
En simplifiant par $10^3$ (car $N_0 \neq 0$), il vient :
$$e^{0,462 \cdot t} = 10$$
Appliquons la fonction logarithme népérien $\ln$ de part et d'autre de l'égalité :
$$\ln\left(e^{0,462 \cdot t}\right) = \ln(10)$$
Par propriété algébrique ($\ln(e^x) = x$), on obtient :
$$0,462 \cdot t = \ln(10)$$
$$t = \frac{\ln(10)}{0,462}$$
En sachant que $\ln(10) \approx 2,30258$ :
$$t \approx \frac{2,30258}{0,462} \approx 4,984 \text{ h}$$
Convertissons la partie décimale en minutes : $0,984 \times 60 \text{ min} \approx 59 \text{ min}$.
*Réponse :* Il faut environ $4 \text{ h}$ et $59 \text{ min}$ (soit quasiment $5 \text{ h}$, ce qui correspond au temps de génération décimal de la souche) pour multiplier la population par $10$.

#### 3. Analyse du seuil critique et limites du modèle
Cherchons l'instant $t_1$ où $N(t_1) = 10^9$ :
$$10^3 \times e^{0,462 \cdot t_1} = 10^9$$
$$e^{0,462 \cdot t_1} = \frac{10^9}{10^3} = 10^6$$
$$0,462 \cdot t_1 = \ln(10^6) = 6 \cdot \ln(10)$$
$$t_1 = \frac{6 \times \ln(10)}{0,462} \approx \frac{6 \times 2,30258}{0,462} \approx 29,9 \text{ h}$$

*Analyse critique :* 
Le modèle mathématique prédit que la capacité limite de $10^9 \text{ bactéries/mL}$ sera atteinte au bout d'environ $30 \text{ heures}$. 
Cependant, sur le plan scientifique et biologique, **ce résultat est une extrapolation invalide**. En effet, le modèle exponentiel suppose que les conditions environnementales restent infiniment favorables (ressources illimitées). Or, dans un milieu de culture fermé, les nutriments s'épuisent bien avant $30 \text{ h}$ et les déchets toxiques s'accumulent. Le taux $k$ ne reste pas constant ; il diminue pour s'annuler (phase stationnaire) puis devenir négatif (phase de mortalité). 
Un modèle plus réaliste (comme l'équation logistique) aurait été nécessaire pour décrire la dynamique au-delà des premières heures de croissance exponentielle.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
