---
title: "Exercice 1 : Analyse de mélanges et dosages quantitatifs"
description: "Application pratique du chapitre Constitution et transformations de la matière"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du contrôle de la qualité de l'eau potable, les services sanitaires mesurent régulièrement la concentration en ions chlorure ($\text{Cl}^-$). Une concentration excessive peut altérer le goût de l'eau et corroder les canalisations, tandis qu'une concentration trop faible ne garantit pas toujours l'absence de certains traitements. 

Pour déterminer la concentration massique en ions chlorure d'un échantillon d'eau minérale, un technicien réalise un titrage par colorimétrie (méthode de Mohr). 

**Données et protocoles :**
* Volume d'eau analysé : $V_0 = 20,0\text{ mL}$.
* Solution titrante : solution de nitrate d'argent $(\text{Ag}^+_{(aq)} + \text{NO}_3^-_{(aq)})$ de concentration connue en ions argent $C_A = 5,00 \times 10^{-2}\text{ mol}\cdot\text{L}^{-1}$.
* L'équation de la réaction support du titrage, supposée totale et rapide, est :
  $$\text{Ag}^+_{(aq)} + \text{Cl}^-_{(aq)} \rightarrow \text{AgCl}_{(s)}$$
* À l'équivalence, le volume de solution titrante versé est $V_{E} = 14,2\text{ mL}$.
* Masses molaires atomiques : $M(\text{Cl}) = 35,5\text{ g}\cdot\text{mol}^{-1}$ ; $M(\text{Ag}) = 107,9\text{ g}\cdot\text{mol}^{-1}$.
* *Norme de potabilité (OMS / Union Européenne) :* La concentration massique maximale recommandée en ions chlorure dans l'eau de consommation est de $250\text{ mg}\cdot\text{L}^{-1}$. 
* *Incertitude de mesure :* La verrerie jaugée utilisée possède une incertitude relative estimée à $\pm 1,5\%$.

---

### ❓ Énoncé

1. **Définition et repérage de l'équivalence :** 
   Expliquer qualitativement ce que représente l'équivalence pour ce système chimique. Préciser quel réactif est limitant avant et après l'équivalence.

2. **Exploitation quantitative du titrage :** 
   En exploitant la stœchiométrie de la réaction, déterminer la quantité de matière d'ions chlorure $n(\text{Cl}^-)$ présente dans le volume $V_0$ d'eau analysé. En déduire la concentration molaire $C$ en ions chlorure de l'eau minérale.

3. **Analyse dimensionnelle et massique :** 
   Calculer la concentration massique $C_m$ en ions chlorure, exprimée en $\text{mg}\cdot\text{L}^{-1}$.

4. **Esprit critique et prise de décision :** 
   En tenant compte de l'incertitude expérimentale de $\pm 1,5\%$ sur la mesure finale, cet échantillon d'eau respecte-t-il la norme de potabilité fixée par l'OMS ? Discutez brièvement des limites de la méthode visuelle par rapport à une méthode instrumentale (conductimétrie ou spectrophotométrie).

---

### 💡 Indice de méthode

* *Question 1 :* À l'équivalence, les réactifs introduits (argent et chlorure) le sont dans les proportions stœchiométriques : ils sont tous les deux totalement consommés.
* *Question 2 :* Établissez un lien d'égalité entre la quantité d'ions $\text{Ag}^+$ versés à l'équivalence et la quantité initiale d'ions $\text{Cl}^-$ présents dans $V_0$, en vous aidant des coefficients stœchiométriques.
* *Question 3 :* Rappelez la relation mathématique liant la concentration massique $C_m$, la concentration molaire $C$ et la masse molaire $M$, en veillant à la cohérence des unités.
* *Question 4 :* Calculez l'intervalle de confiance de la mesure (valeur $\pm 1,5\%$) avant de comparer avec le seuil réglementaire de $250\text{ mg}\cdot\text{L}^{-1}$.

---

### 📋 Correction détaillée pas à pas

1. **Repérage de l'équivalence :**
   * À l'équivalence, les réactifs titrant ($\text{Ag}^+$) et titré ($\text{Cl}^-$) ont été mélangés dans les proportions stœchiométriques de la réaction. 
   * **Avant l'équivalence**, l'ion $\text{Cl}^-$ est en excès par rapport à $\text{Ag}^+$ (qui est le réactif limitant).
   * **Après l'équivalence**, l'ion $\text{Ag}^+$ introduit est en excès (le réactif $\text{Cl}^-$ est totalement consommé).

2. **Détermination de la concentration molaire $C$ :**
   * D'après l'équation de la réaction, la stœchiométrie est de $1:1$. À l'équivalence, on a donc l'égalité des quantités de matière :
     $$n_{\text{versé}}(\text{Ag}^+) = n_{\text{initial}}(\text{Cl}^-)$$
   * La quantité d'ions argent versés vaut :
     $$n(\text{Ag}^+) = C_A \times V_{E} = 5,00 \times 10^{-2} \times 14,2 \times 10^{-3} = 7,10 \times 10^{-4}\text{ mol}$$
   * Par conséquent, $n(\text{Cl}^-) = 7,10 \times 10^{-4}\text{ mol}$ dans le volume $V_0 = 20,0\text{ mL}$.
   * La concentration molaire $C$ en ions chlorure dans l'eau minérale est :
     $$C = \frac{n(\text{Cl}^-)}{V_0} = \frac{7,10 \times 10^{-4}}{20,0 \times 10^{-3}} = 3,55 \times 10^{-2}\text{ mol}\cdot\text{L}^{-1}$$

3. **Calcul de la concentration massique $C_m$ :**
   * La relation entre concentration massique et concentration molaire est $C_m = C \times M(\text{Cl})$.
   * Application numérique :
     $$C_m = 3,55 \times 10^{-2} \times 35,5 = 1,26025\text{ g}\cdot\text{L}^{-1}$$
   * En exprimant le résultat en $\text{mg}\cdot\text{L}^{-1}$ et en respectant les chiffres significatifs (trois chiffres significatifs au vu des données) :
     $$C_m = 1,26 \times 10^{3}\text{ mg}\cdot\text{L}^{-1} = 1260\text{ mg}\cdot\text{L}^{-1}$$

4. **Esprist critique et analyse des limites :**
   * *Prise en compte de l'incertitude :* Avec une incertitude de $\pm 1,5\%$, la valeur réelle de la concentration massique se situe dans l'intervalle :
     $$1260 \times (1 - 0,015) \le C_m \le 1260 \times (1 + 0,015)$$
     Soit environ $[1241\text{ mg}\cdot\text{L}^{-1} ; 1279\text{ mg}\cdot\text{L}^{-1}]$.
   * *Décision sanitaire :* Même en tenant compte des incertitudes de mesure, la concentration mesurée ($> 1240\text{ mg}\cdot\text{L}^{-1}$) dépasse très largement la norme de potabilité fixée à $250\text{ mg}\cdot\text{L}^{-1}$. Cet échantillon ne respecte pas les critères de potabilité de l'OMS (il s'agit vraisemblablement d'une eau minérale très minéralisée ou d'une eau saumâtre, impropre à la consommation quotidienne directe sans traitement).
   * *Limites méthodologiques :* Le repérage visuel (changement de couleur ou apparition d'un précipité) dépend de la sensibilité de l'œil humain, ce qui introduit une subjectivité (erreur systématique potentielle). Une méthode instrumentale (comme le titrage conductimétrique) permettrait d'exploiter des variations de pentes de mesure de manière plus objective, s'affranchissant de l'interprétation humaine d'un virage colorimétrique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
