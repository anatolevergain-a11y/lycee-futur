---
title: "Exercice 2 : Cycle de l'azote et de l'eau dans le secteur agricole"
description: "Application pratique du chapitre Gestion des sols et agronomie"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la gestion agronomique des sols cultivés, l'optimisation de la nutrition azotée des cultures entre en tension directe avec la préservation de la ressource en eau. L'azote ($\text{N}$) est un facteur limitant majeur de la productivité primaire nette aérienne en agriculture intensive. Il est principalement apporté sous forme d'engrais minéraux (synthétisés par le procédé Haber-Bosch) ou organiques (effluents d'élevage).

Dans le sol, l'ion ammonium ($\text{NH}_4^+$), peu mobile car adsorbé sur le complexe argilo-humique, subit sous l'action de bactéries chimiolithotrophes (genre *Nitrosomonas* puis *Nitrobacter*) une oxydation biologique appelée **nitrification** :

$$\text{NH}_4^+ + 1,5 \, \text{O}_2 \xrightarrow{ \text{Nitrosomonas} } \text{NO}_2^- + \text{H}_2\text{O} + 2 \, \text{H}^+$$
$$\text{NO}_2^- + 0,5 \, \text{O}_2 \xrightarrow{ \text{Nitrobacter} } \text{NO}_3^-$$

L'ion nitrate ($\text{NO}_3^-$), anion soluble et peu retenu par le sol, est directement assimilable par les végétaux. Toutefois, sa forte solubilité le rend vulnérable au phénomène de **lixiviation** (lessivage par l'eau d'infiltration gravitaire), menaçant les nappes phréatiques (eutrophisation, seuil de potabilité fixé à $50 \, \text{mg/L de } \text{NO}_3^-$ par la directive européenne).

**Données expérimentales sur une parcelle de blé tendre (*Triticum aestivum*) :**
*   **Apport azoté total ($A$) :** $180 \, \text{kg N}\cdot\text{ha}^{-1}$ (sous forme $\text{NH}_4\text{NO}_3$).
*   **Prélèvement par la culture récoltée ($P$) :** $140 \, \text{kg N}\cdot\text{ha}^{-1}$.
*   **Minéralisation nette de l'humus ($M$) :** $50 \, \text{kg N}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$.
*   **Volatilisations gazeuses et immobilisation microbienne ($V$) :** Estimées à $25 \, \text{kg N}\cdot\text{ha}^{-1}$.
*   **Précipitations efficaces ($P_{\text{eff}}$) durant la période de drainage :** $300 \, \text{mm}$ (soit $3000 \, \text{m}^3\cdot\text{ha}^{-1}$).
*   **Volume utile du sol exploré par les racines :** $2000 \, \text{m}^3\cdot\text{ha}^{-1}$ pour une humidité à la capacité au champ.

---

### ❓ Énoncé

1. **Bilan quantitatif (Calcul) :** À partir de l'équation de conservation de la masse d'azote dans le sol, calculez le reliquat azoté potentiel sous forme de nitrates ($R_{\text{fin}}$) présent dans la solution du sol après la récolte. Exprimez ce résultat en $\text{kg N}\cdot\text{ha}^{-1}$.
2. **Modélisation du risque environnemental (Raisonnement) :** En faisant l'hypothèse simplificatrice que la totalité de ce reliquat résiduel est dissoute et entraînée par l'eau de drainage, calculez la concentration moyenne en ions nitrates (exprimée en $\text{mg/L}$) dans l'eau d'infiltration. Discutez de la validité de cette hypothèse au regard des processus biochimiques du sol.
3. **Analyse critique et compromis agronomique (Esprit critique) :** Pour limiter ce transfert vers les hydrosystèmes, un agriculteur envisage d'implanter un couvert végétal intermédiaire piège à nitrates (CIPAN) ou de fractionner ses apports d'engrais. En vous appuyant sur les données, analysez les limites biophysiques et économiques de ces stratégies face à l'incertitude climatique (variabilité des précipitations).

---

### 💡 Indice de méthode

*   **Question 1 :** Posez le bilan sous la forme d'une équation différentielle simplifiée ou d'un bilan comptable : $R_{\text{fin}} = \text{Stocks initiaux (ou apports)} + \text{Entrées} - \text{Sorties}$. Considérez ici : $R_{\text{fin}} = A + M - P - V$.
*   **Question 2 :** Convertissez la masse d'azote en masse d'ions nitrates ($\text{NO}_3^-$) en tenant compte des masses molaires respectives ($M(\text{N}) = 14 \, \text{g/mol}$ et $M(\text{O}) = 16 \, \text{g/mol}$). Rapportez ensuite cette masse au volume d'eau de drainage ($3000 \, \text{m}^3$).
*   **Question 3 :** Ne cherchez pas une réponse binaire ("oui/non"). Mettez en balance l'efficacité épuratoire d'un couvert végétal (qui consomme de l'eau et de l'azote) et le risque de faim d'azote ou de déficit hydrique pour la culture suivante en zone semi-aride.

---

### 📋 Correction détaillée pas à pas

#### 1. Bilan quantitatif du reliquat azoté
Le bilan de l'azote minéral disponible dans le sol se calcule en sommant les flux d'entrées et en soustrayant les flux de sorties du système sol-plante :

$$R_{\text{fin}} = A + M - P - V$$

En remplaçant par les valeurs numériques fournies :
$$R_{\text{fin}} = 180 + 50 - 140 - 25$$
$$R_{\text{fin}} = 230 - 165 = 65 \, \text{kg N}\cdot\text{ha}^{-1}$$

*Interprétation scientifique :* Malgré une fertilisation calculée pour couvrir les besoins de la culture, un surplus de $65 \, \text{kg N}\cdot\text{ha}^{-1}$ demeure dans le sol sous forme minérale, susceptible d'être lixivié si le couvert végétal disparaît.

---

#### 2. Modélisation de la concentration et critique du modèle
*   **Étape A : Conversion de l'azote ($\text{N}$) en ions nitrates ($\text{NO}_3^-$)**
    La masse molaire de l'azote est $M(\text{N}) = 14 \, \text{g/mol}$ et celle de l'oxygène $M(\text{O}) = 16 \, \text{g/mol}$. 
    La masse molaire du nitrate est donc :
    $$M(\text{NO}_3^-) = 14 + (3 \times 16) = 62 \, \text{g/mol}$$
    
    Le facteur de conversion de $\text{N}$ en $\text{NO}_3^-$ est $\frac{62}{14} \approx 4,43$.
    
    La masse totale de nitrates dissous est :
    $$m(\text{NO}_3^-) = 65 \times 4,43 = 2879,5 \, \text{kg}\cdot\text{ha}^{-1}$$

*   **Étape B : Calcul de la concentration dans l'eau de drainage**
    Le volume d'eau de drainage est de $3000 \, \text{m}^3\cdot\text{ha}^{-1}$, soit $3 \cdot 10^6 \, \text{L}\cdot\text{ha}^{-1}$.
    
    $$\text{Concentration} = \frac{2879,5 \, \text{kg}}{3 \cdot 10^6 \, \text{L}} = \frac{2,879 \cdot 10^6 \, \text{g}}{3 \cdot 10^6 \, \text{L}} \approx 0,96 \, \text{g/L} = 960 \, \text{mg/L}$$

*   **Critique de l'hypothèse :** 
    Cette valeur théorique ($960 \, \text{mg/L}$) dépasse largement la norme de potabilité ($50 \, \text{mg/L}$). Toutefois, ce modèle présente des limites majeures :
    1. Il suppose une dissolution instantanée et homogène, sans tenir compte de la cinétique de minéralisation de l'humus résiduel.
    2. Il néglige la **dénitrification** (réduction des $\text{NO}_3^-$ en $\text{N}_2$ ou $\text{N}_2\text{O}$ par des bactéries anaérobies dans les zones hydromorphes), qui soustrait une partie de l'azote du système sous forme gazeuse.
    3. Il ne prend pas en compte l'adsorption faible mais existante des anions sur certains oxydes métalliques du sol.

---

#### 3. Analyse critique et compromis agronomique

L'atténuation de la lixiviation des nitrates met en lumière un compromis complexe entre **performance agronomique, rentabilité économique et écologie des milieux**.

*   **Le recours aux CIPAN (Couverts Pièges à Nitrates) :** 
    Planter une culture intermédiaire (ex: moutarde) après la récolte du blé permet d'absorber le reliquat ($65 \, \text{kg N}\cdot\text{ha}^{-1}$) et de le stocker dans la biomasse végétale, évitant ainsi le drainage hivernal. 
    *   *Limites :* Ce service ecosystemique a un coût énergétique et hydrique. En région à hivers secs, le CIPAN consomme de l'eau utile dans le sol, ce qui peut pénaliser la réserve en eau de la culture principale suivante. De plus, la destruction du couvert au printemps entraîne une minéralisation rapide qui peut libérer l'azote au mauvais moment si le calendrier n'est pas rigoureusement synchronisé avec les besoins du semis suivant.
*   **Le fractionnement des apports et l'incertitude climatique :**
    Diviser l'apport d'engrais en 3 ou 4 applications affine la réponse aux besoins de la plante. 
    *   *Limites :* Cette stratégie se heurte à l'imprédictibilité météorologique. Un épisode de pluie intense imprévu juste après un épandage annule les bénéfices du fractionnement en provoquant un lessivage massif de surface, tandis qu'une sécheresse post-apport bloque l'assimilation racinaire, laissant l'engrais cristallisé et vulnérable dans la couche arable.

**Conclusion scientifique :** La gestion durable des sols ne relève pas d'une application dogmatique de seuils rigides, mais d'une gestion probabiliste des risques prenant en compte la variabilité stochastique du climat et la complexité biochimique du triptyque **sol-plante-eau**.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
