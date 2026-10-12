---
title: "Exercice 2 : Forces évolutives et sélection naturelle"
description: "Application pratique du chapitre Biodiversité, état et dynamique"
---

### 🌐 Contexte & Données scientifiques

La compréhension de la dynamique de la biodiversité à l'échelle intraspécifique repose sur l'étude des variations de la fréquence des allèles au sein des populations. L'une des principales forces évolutives modifiant ces fréquences est la **sélection naturelle**, formalisée par la valeur sélective (ou *fitness*, notée $w$).

Considérons une population d'insectes, le charançon de la courge (*Anasa tristis*), vivant dans une région soumise à l'introduction d'un insecticide de synthèse. Un gène impliqué dans la détoxication de cette molécule présente deux allèles :
*   L'allèle ancestral sensible ($S$).
*   L'allèle muté conférant une résistance ($R$).

Un suivi scientifique mené sur 5 générations successives ($G_0$ à $G_4$) après l'épandage de l'insecticide a permis de quantifier la fréquence de l'allèle $R$ (notée $p$) ainsi que la taille efficace de la population ($N$). Les conditions environnementales ont induit un coût métabolique pour les individus porteurs de l'allèle $R$ en l'absence d'insecticide, mais un avantage décisif en sa présence.

Le tableau ci-dessous résume l'évolution de la fréquence $p$ de l'allèle $R$ :

| Génération | Fréquence de l'allèle $R$ ($p$) | Pression de l'insecticide |
| :---: | :---: | :---: |
| $G_0$ | $0,05$ | Forte (Traitement initial) |
| $G_1$ | $0,22$ | Forte |
| $G_2$ | $0,58$ | Forte |
| $G_3$ | $0,85$ | Intermédiaire (Réduction des doses) |
| $G_4$ | $0,88$ | Nulle (Arrêt des traitements) |

*Note méthodologique : La valeur sélective $w$ d'un génotype quantifie sa capacité relative à survivre et à se reproduire. Dans un modèle de sélection directionnelle simple, la variation de la fréquence alllélique entre la génération $t$ et la génération $t+1$ obéit à des pressions sélectives mesurables, bien que soumises à des stochasticités environnementales et démographiques.*

---

### ❓ Énoncé

1. **Analyser** l'évolution de la fréquence de l'allèle $R$ entre les générations $G_0$ et $G_2$. Qualifiez la force évolutive à l'œuvre en justifiant à partir des données du tableau.
2. **Calculer** le taux de variation global de la fréquence de l'allèle $R$ entre $G_0$ et $G_4$, puis décrivez l'inflexion observée entre $G_3$ et $G_4$. Formulez une hypothèse biologique rigoureuse expliquant ce ralentissement, en introduisant la notion de *compromis évolutif* (coût de la résistance).
3. **Discuter** des limites du modèle déterministe de la sélection naturelle face aux forces stochastiques (comme la dérive génétique), en particulier si la taille de la population $N$ venait à diminuer drastiquement suite à l'action de l'insecticide.

---

### 💡 Indice de méthode

*   **Question 1 :** Pour qualifier l'évolution, observez le sens de variation (croissance/décroissance) de $p$. Reliez cela à la présence de la contrainte environnementale (l'insecticide).
*   **Question 2 :** Le taux de variation s'calcule par la formule $\tau = \frac{p_{final} - p_{initial}}{p_{initial}} \times 100$. Pour le compromis, pensez au fait qu'un allèle conférant un avantage dans un milieu donné peut s'avérer défavorable ou coûteux énergétiquement dans un autre.
*   **Question 3 :** Rappelez la définition de la dérive génétique (fluctuation aléatoire des fréquences alléliques, d'autant plus forte que $N$ est petit) et confrontez-la à la sélection naturelle.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse de l'évolution entre $G_0$ et $G_2$ et identification de la force évolutive
*   **Observation :** La fréquence $p$ de l'allèle $R$ passe de $0,05$ (soit $5\%$) en $G_0$ à $0,58$ (soit $58\%$) en $G_2$. On constate une augmentation rapide et exponentielle de la fréquence de cet allèle.
*   **Interprétation scientifique :** Cette modification orientée des fréquences alléliques sous l'effet d'une pression de l'environnement (l'insecticide) caractérise la **sélection naturelle**. 
*   **Justification :** Les individus porteurs de l'allèle $R$ possèdent une valeur sélective ($w$) supérieure à celle des individus homozygotes $S/S$ dans cet environnement précis : ils survivent mieux et se reproduisent davantage. L'allèle $R$ est donc "sélectionné positivement".

#### 2. Calcul du taux de variation et analyse du compromis évolutif
*   **Calcul du taux de variation global ($\tau$) entre $G_0$ et $G_4$ :**
    $$\tau = \frac{p(G_4) - p(G_0)}{p(G_0)} \times 100 = \frac{0,88 - 0,05}{0,05} \times 100 = \frac{0,83}{0,05} \én \times 100 = +1660\%$$
    La fréquence de l'allèle a été multipliée par plus de 17 en 4 générations.
*   **Analyse de l'inflexion ($G_3$ à $G_4$) :** Entre $G_3$ et $G_4$, alors que l'insecticide est totalement retiré, la fréquence de $R$ stagne presque ($0,85$ à $0,88$), la pente de progression s'annule presque.
*   **Hypothèse et compromis évolutif (*trade-off*) :** En l'absence d'insecticide, l'allèle $R$ confère souvent un désavantage métabolique (par exemple, une production d'enzymes de détoxication coûteuse en énergie et en ressources au détriment de la croissance ou de la fertilité). La stabilisation ou le ralentissement de la progression suggère un changement de direction de la sélection : l'avantage comparatif de $R$ disparaît, illustrant un **compromis évolutif** entre résistance et valeur sélective globale dans un milieu sans stress toxique.

#### 3. Discussion critique : Sélection naturelle vs Dérive génétique
*   **Limites du modèle :** Le raisonnement précédent suppose un modèle purement déterministe où seule la sélection agit. Cependant, l'utilisation massive d'un insecticide provoque souvent un *goulot d'étranglement démographique* (forte mortalité, réduction drastique de la taille efficace $N$ de la population).
*   **Impact de la dérive génétique :** Lorsque $N$ est faible, la **dérive génétique** (fluctuation aléatoire liée au hasard de la reproduction et de l'échantillonnage des gamètes) prend une importance majeure. Des allèles avantageux peuvent ainsi être perdus par pur hasard, ou des allèles délétères fixés. 
*   **Conclusion scientifique rigoureuse :** L'évolution réelle de la biodiversité intraspécifique ne rel jamais d'une force unique. Elle résulte de l'interaction complexe et simultanée entre des forces adaptatives (sélection naturelle) et des forces stochastiques (dérive génétique, mutations), dont l'importance relative dépend étroitement de la taille de la population.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
