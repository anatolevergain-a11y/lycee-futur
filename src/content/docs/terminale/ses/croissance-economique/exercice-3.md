---
title: "Exercice 3 : Soutenabilité de la croissance et transition énergétique"
description: "Application pratique du chapitre Sources et limites de la croissance économique"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du débat sur les limites écologiques de la croissance économique, la question de la soutenabilité de la transition énergétique occupe une place centrale. La théorie économique distingue traditionnellement la *soutenabilité faible* (qui fait l'hypothèse d'une substituabilité parfaite entre capital naturel et capital physique/humain, via le progrès technique) et la *soutenabilité forte* (qui pose que certains capitaux naturels sont critiques et insubstituables).

Considérons une économie modélisée par une fonction de production agrégée de type Cobb-Douglas modifiée, intégrant l'énergie $E$ et le stock de capital naturel $N$ :

$$Y = A \cdot K^\alpha \cdot L^\beta \cdot E^\gamma \cdot N^\delta$$

Avec :
- $Y$ : le PIB (croissance économique).
- $A$ : la productivité globale des facteurs (PGF), incluant le progrès technique orienté vers l'efficacité énergétique.
- $K$ : le capital physique et $L$ : le facteur travail.
- $E$ : la consommation d'énergie (exprimée en tep - tonnes équivalent pétrole).
- $N$ : le capital naturel (ressources non renouvelables et services écosystémiques).

Soient les taux de croissance annuels constatés dans cette économie pour la période récente :
- Croissance du PIB ($\hat{Y}$) : $+2,5\%$ par an.
- Croissance de la PGF ($\hat{A}$) : $+1,0\%$ par an.
- Contribution combinée du capital et du travail ($\alpha\hat{K} + \beta\hat{L}$) : $+1,2\%$ par an.
- Intensité énergétique de l'économie (rapport $E/Y$) : elle diminue de $-1,5\%$ par an grâce aux gains d'efficacité énergétique.

---

### ❓ Énoncé

1. **Calcul et analyse de l'évolution énergétique :** À partir des données de croissance, calculez le taux de croissance annuel de la consommation d'énergie ($E$) dans cette économie. Explicitez la formule mathématique sous-jacente en taux de variation.
2. **Dilemme de l'effet rebond (Jevons) :** Si les gains d'efficacité énergétique (baisse de l'intensité énergétique de $1,5\%$ par an) s'accompagnent d'une baisse du coût réel de l'énergie pour les agents économiques, expliquez théoriquement comment cela peut générer un « effet rebond » invalidant partiellement les prévisions de réduction de la consommation absolue d'énergie.
3. **Soutenabilité faible *vs* forte :** En mobilisant les résultats de la question 1 et la notion de substituabilité des formes de capital, discutez si cette trajectoire relève d'une hypothèse de soutenabilité faible ou forte. Quelles sont les limites épistémologiques et biophysiques de cette modélisation ?

---

### 💡 Indice de méthode

- **Question 1 :** Pour additionner ou relier les taux de croissance de variables liées par un produit, utilisez la règle mathématique des taux de croissance approchés (logarithmique) : si $Y = A \cdot X$, alors $\hat{Y} \approx \hat{A} + \hat{X}$. Pensez à exprimer l'intensité énergétique comme $I = \frac{E}{Y}$, ce qui implique $\hat{I} \approx \hat{E} - \hat{Y}$.
- **Question 2 :** Définissez précisément l'effet rebond (direct et indirect) : une plus grande efficacité réduit le prix effectif de l'usage d'une ressource, ce qui peut paradoxalement en accroître la demande globale.
- **Question 3 :** Interprétez la permanence de la croissance du PIB ($+2,5\%$) malgré la transition. La décroissance absolue de l'impact environnemental est-elle garantie par une simple amélioration de l'efficacité (découplage relatif *vs* absolu) ?

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul du taux de croissance de la consommation d'énergie ($E$)

* **Étape 1 : Formalisation mathématique**
  L'intensité énergétique est définie par $I = \frac{E}{Y}$. En taux de variation, cela se traduit par :
  $$\hat{I} \approx \hat{E} - \hat{Y}$$
  On cherche le taux de croissance de la consommation d'énergie, soit $\hat{E}$. On isole donc $\hat{E}$ :
  $$\hat{E} \approx \hat{I} + \hat{Y}$$

* **Étape 2 : Application numérique**
  D'après l'énoncé :
  - La baisse de l'intensité énergétique est de $-1,5\%$ par an, donc $\hat{I} = -0,015$ (ou $-1,5\%$).
  - La croissance du PIB est de $+2,5\%$ par an, donc $\hat{Y} = +0,025$ (ou $+2,5\%$).

  $$\hat{E} = -1,5\% + 2,5\% = +1,0\%$$

* **Interprétation scientifique :**
  Malgré une amélioration de l'efficacité énergétique de l'économie ($1,5\%$ de réduction de l'énergie nécessaire par unité de PIB produite), la consommation *absolue* d'énergie continue d'augmenter de $1,0\%$ par an, en raison de la croissance globale de l'activité économique ($Y$). C'est la distinction fondamentale entre **découplage relatif** (l'intensité baisse) et **découplage absolu** (la quantité totale consommée baisse).

---

#### 2. Analyse du paradoxe de Jevons et de l'effet rebond

* **Mécanisme économique :**
  L'efficacité énergétique réduit la quantité d'énergie nécessaire pour accomplir un service (par exemple, chauffer un bâtiment ou transporter une marchandise). Cela diminue le coût marginal d'utilisation de la ressource. 
  
* **Effet rebond direct et indirect :**
  - *Effet direct :* Le coût du service ayant baissé, la demande pour ce service augmente (ex: on chauffe une plus grande surface ou on roule plus de kilomètres avec un véhicule électrique plus efficient).
  - *Effet indirect :* Les gains pécuniaires réalisés grâce à l'efficacité énergétique sont réalloués par les agents économiques à la consommation d'autres biens et services, lesquels incorporent également de l'énergie dans leur processus de fabrication.

* **Conclusion critique :**
  Par conséquent, le progrès technique (hausse de la PGF $A$) ne suffit pas mécaniquement à réduire les prélèvements sur la nature si l'effet rebond annule, en tout ou partie, les gains d'efficience escomptés.

---

#### 3. Discussion sur la soutenabilité (faible *vs* forte)

* **Cadre de la soutenabilité faible :**
  La trajectoire observée ($\hat{Y} > 0$ couplée à une substitution partielle de l'énergie et une hausse de la PGF) s'inscrit dans le paradigme de la **soutenabilité faible** (inspirée de la règle de Hartwick). Elle suppose que le capital naturel épuisable ou dégradé peut être compensé par l'accumulation de capital physique, humain et par le progrès technique. Le PIB continue de croître (+2,5%).

* **Limites et critique de la soutenabilité forte :**
  Cependant, cette approche se heurte à des limites biophysiques majeures :
  1. *L'hypothèse d'substituabilité parfaite* est contestée par les économistes écologiques (ex: Georgescu-Roegen, Daly). Le capital naturel critique (stabilité climatique, intégrité de la biosphère) ne peut être remplacé par des machines ou du capital humain.
  2. *L'incertitude de mesure* : la fonction de Cobb-Douglas agrégée masque les seuils de rupture (*tipping points*) et l'irreversibilité de certaines dégradations environnementales.
  
  En somme, si les données montrent un découplage relatif (nécessaire à la soutenabilité faible), elles révèlent l'absence de découplage absolu de l'énergie dans le scénario étudié, mettant en lumière l'insuffisance du seul progrès technique face aux exigences biophysiques d'une soutenabilité forte.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
