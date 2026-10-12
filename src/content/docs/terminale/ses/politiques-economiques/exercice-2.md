---
title: "Exercice 2 : Lutte contre le chômage et politiques de l'emploi"
description: "Application pratique du chapitre Action publique et politiques économiques"
---

### 🌐 Contexte & Données scientifiques

Face à la persistance du chômage, les autorités publiques disposent de deux leviers macroéconomiques principaux : les **politiques de l'emploi** (visant à agir directement sur le marché du travail par la formation, l'appariement ou le coût du travail) et les **politiques conjoncturelles** (budgétaires ou monétaires). 

Considérons une économie fictive, mais étayée par des mécanismes macroéconomiques inspirés de faits stylisés observés dans la zone euro. Soit $Y$ le PIB, $U$ le taux de chômage, et $\pi$ le taux d'inflation. L'État souhaite évaluer l'impact d'une baisse ciblée des cotisations sociales patronales sur les bas salaires (politique de baisse du coût du travail) combinée à une politique de formation professionnelle renforcée.

Les données macroéconomiques ex ante sont les suivantes :
*   Taux de chômage initial : $U_0 = 8{,}5\ \%$ de la population active.
*   Élasticité de l'emploi total $E$ par rapport au coût salarial réel $w$ : $\varepsilon_{E/w} = -0{,}6$.
*   Coût budgétaire de la mesure d'allègement de charges : $\Delta B = 0{,}8\ \%$ du PIB.
*   Taux de chômage structurel (ou NAIRU) estimé : $U^* = 7{,}2\ \%$.

Cependant, l'analyse économique rigoureuse impose de prendre en compte les effets secondaires et les limites structurelles de telles politiques :
1.  **Effets d'aubaine, de substitution et de déplacement** : une subvention à l'embauche peut financer des embauches qui auraient eu lieu de toute façon (aubaine), ou substituer des travailleurs non qualifiés à d'autres sans modifier le volume global d'emploi.
2.  **Le compromis inflation/chômage (Courbe de Phillips augmentée)** : 
    $$\pi_t = \pi^e_t - \beta (U_t - U^*) + \epsilon_t$$
    où $\pi^e$ représente l'inflation anticipée et $\beta parameter$ mesure la sensibilité de l'inflation à l'écart de chômage.

---

### ❓ Énoncé

1. **Calcul et analyse de l'impact direct :** En supposant une baisse exogène du coût salarial réel $w$ de $5\ \%$ grâce à la politique d'allègement de charges, calculez le taux de variation en pourcentage de l'emploi total $\frac{\Delta E}{E}$. Discutez de la pertinence de l'élasticité $\varepsilon_{E/w}$ selon la qualification des travailleurs concernés.
2. **Évaluation d'efficacité et arbitrages :** Le gouvernement espère une réduction du taux de chômage proportionnelle à la hausse de l'emploi. Expliquez pourquoi, en raison de la variation de la population active (effet de découragement vs effet de participation) et des effets de bouclage macroéconomique, la baisse effective du chômage $U$ peut être inférieure aux prévisions initiales.
3. **Contrainte budgétaire et soutenabilité :** Exposez le dilemme auquel fait face l'action publique entre politique budgétaire de soutien à l'emploi (creusement du déficit public) et impératif de stabilité macroéconomique, en mobilisant la notion de multiplicateur budgétaire.

---

### 💡 Indice de méthode

*   **Question 1 :** Utilisez la définition mathématique de l'élasticité : 
    $$\varepsilon_{E/w} = \frac{\% \Delta E}{\% \Delta w}$$
    isolez $\% \Delta E$. Pour la discussion, songez à la substituabilité entre facteurs de production (capital/travail) selon les secteurs d'activité.
*   **Question 2 :** Ne confondez pas *emploi* et *chômage au sens du BIT*. Le taux de chômage dépend du nombre de chômeurs rapporté à la population active. Une politique attractive peut inciter des inactifs à intégrer le marché du travail, augmentant temporairement la population active.
*   **Question 3 :** Rappelez qu'un allègement de cotisations sociales constitue un prélèvement en moins pour l'État (baisse des recettes publiques). Songez aux effets multiplicateurs keynésiens et aux contreparties exigées (ex : investissement, embauches effectives).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul et analyse de l'impact direct sur l'emploi
*   *Formule de l'élasticité :*
    $$\varepsilon_{E/w} = \frac{\frac{\Delta E}{E}}{\frac{\Delta w}{w}}$$
*   *Application numérique :*
    On cherche $\% \Delta E = \frac{\Delta E}{E}$. On sait que $\varepsilon_{E/w} = -0{,}6$ et que $\% \Delta w = -5\ \%$ (soit $-0{,}05$).
    $$\% \Delta E = -0{,}6 \times (-0{,}05) = +0{,}03 \text{ soit } +3\ \%$$
*   *Analyse critique :* 
    Une baisse du coût salarial réel de $5\ \%$ génère théoriquement une hausse de l'emploi de $3\ \%$. Toutefois, sur un plan scientifique, cette élasticité est une **moyenne macroéconomique**. En réalité, l'élasticité de l'emploi au coût du travail est plus forte pour les bas salaires (travailleurs peu qualifiés) que pour les hauts salaires. De plus, cela suppose ceteris paribus : si la demande globale est atone, les entreprises n'embauchent pas, même si le travail est moins cher.

#### 2. Évaluation d'efficacité et limites de la baisse du chômage
*   *Le lien entre emploi et chômage :*
    Une augmentation de l'emploi de $3\ \%$ ne se traduit pas mécaniquement par une baisse de $3\ \%$ du taux de chômage. 
    Le taux de chômage est défini par :
    $$U = \frac{C}{PA}$$
    (où $C$ est le nombre de chômeurs et $PA$ la population active).
*   *Les limites du modèle simple :*
    *   **Effet de participation (ou de retour à l'emploi) :** L'amélioration conjoncturelle peut inciter des "travailleurs découragés" (inactifs) à s'inscrire à nouveau comme demandeurs d'emploi. La population active ($PA$) augmente, ce qui peut atténuer, voire annuler statistiquement la baisse du taux de chômage $U$.
    *   **Effets pervers qualitatifs :** Les subventions ciblées sur les bas salaires peuvent créer des "effets de trappe à low-cost", incitant les entreprises à maintenir des emplois à faible productivité plutôt qu'à investir dans du capital humain ou technologique à forte valeur ajoutée.

#### 3. Contrainte budgétaire et soutenabilité macroéconomique
*   *Le compromis de politique économique :*
    La mesure coûte $\Delta B = 0{,}8\ \%$ du PIB pour les finances publiques. Il s'agit d'une **politique budgétaire dérogatoire** (diminution des recettes fiscales/sociales).
*   *L'arbitrage efficacité / soutenabilité :*
    *   Si le **multiplicateur budgétaire** associé à cette mesure est supérieur à 1, la hausse de l'activité induite générera des rentrées fiscales supplémentaires (via la TVA, l'impôt sur les sociétés) qui amortiront le coût initial pour le déficit public.
    *   Cependant, si les entreprises se contentent de capter l'effet d'aubaine sans modifier leurs volumes d'embauche de net (effet d'aubaine pur), le coût budgétaire net pèse sur la dette publique sans contrepartie macroéconomique suffisante, posant la question de la **soutenabilité de la dette** à moyen terme et du respect des règles européennes de gouvernance économique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
