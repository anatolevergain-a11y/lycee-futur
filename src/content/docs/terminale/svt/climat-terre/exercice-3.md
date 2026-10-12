---
title: "Exercice 3 : Rôle des puits de carbone (océans, forêts) et cycles biogeochimiques"
description: "Application pratique du chapitre Le système climatique terrestre"
---

### 🌐 Contexte & Données scientifiques

Les flux de carbone entre les différents réservoirs terrestres (atmosphère, biosphère, hydrosphère, lithosphère) sont régis par des processus biologiques, chimiques et physiques. Depuis l'ère préindustrielle, les activités humaines (combustion d'énergies fossiles, déforestation) injectent massivement du dioxyde de carbone ($CO_2$) dans l'atmosphère, modifiant l'équilibre dynamique du cycle biogéochimique du carbone.

Heureusement, une fraction significative de ces émissions anthropiques est absorbée par les « puits de carbone » naturels, principalement les océans et les écosystèmes terrestres (forêts). 

Le tableau ci-dessous résume les flux annuels moyens estimés pour la décennie récente (données inspirées du *Global Carbon Project*) :

| Réservoir / Flux | Valeur (en Gt $C \cdot \text{an}^{-1}$) | Incertitude associée |
| :--- | :--- | :--- |
| Émissions anthropiques (fossiles + ciment) | $+10,0$ | $\pm 0,5$ |
| Émissions liées aux changements d'affectation des sols (déforestation) | $+1,5$ | $\pm 0,7$ |
| Augmentation du stock atmosphérique | $+5,1$ | $\pm 0,2$ |
| Puits océanique | ? | $\pm 0,5$ |
| Puits terrestre (résiduel) | ? | $\pm 0,9$ |

*Note scientifique : Les flux sont exprimés en gigatonnes de carbone ($\text{Gt C}$). $1\ \text{Gt C} = 10^{15}\ \text{g de C}$. Pour convertir une masse de carbone en masse de $CO_2$, on utilise le rapport molaire des masses molaires : $\mathcal{M}(CO_2) \approx 44\ \text{g}\cdot\text{mol}^{-1}$ et $\mathcal{M}(C) \approx 12\ \text{g}\cdot\text{mol}^{-1}$, soit un facteur multiplicatif d'environ $3,67$.*

Dans l'océan, la séquestration repose notamment sur la **pompe physique** (solubilité du $CO_2$ selon la loi de Henry et circulation thermohaline) et la **pompe biologique** (fixation du $CO_2$ photosynthétique par le phytoplancton et sédimentation des coques calcaires et de la matière organique). 

Cependant, l'augmentation de la $P_{CO_2}$ atmosphérique modifie la chimie des océans (acidification) et pose la question de la saturation progressive de ces puits, incitant à analyser rigoureusement leur pérennité.

---

### ❓ Énoncé

1. **Calcul et bilan global :** À partir des données du tableau, calculez l'intensité des puits océanique et terrestre. Exprimez le bilan global des flux entrants et sortants pour l'atmosphère et discutez de la notion de « puits résiduel ».
2. **Analyse mécanistique (Océan) :** Expliquez par des équations chimiques adaptées l'impact de l'absorption océanique de $CO_2$ sur le pH de l'eau de mer (acidification). En quoi cette modification physico-chimique constitue-t-elle une rétroaction négative ou une limite potentielle pour l'efficacité future de ce puits ?
3. **Esprit critique et modélisation (Forêts) :** On entend souvent l'argument selon lequel « planter des arbres en zones tempérées compense immédiatement les émissions industrielles ». En mobilisant vos connaissances sur le cycle du carbone forestier, discutez de la validité à long terme de cette affirmation en intégrant les notions de saturation du puits, de réversibilité (incendies, déperi-ssements liés au stress hydrique) et d'albédo.

---

### 💡 Indice de méthode

* **Question 1 :** Posez l'équation de conservation de la masse du carbone dans l'atmosphère. La somme des sources doit égaler la somme des puits et de l'accumulation atmosphérique. Attention à bien distinguer les sources (positives pour l'atmosphère) des puits (négatifs pour l'atmosphère).
* **Question 2 :** Réactivez vos connaissances de spécialité Physique-Chimie sur les équilibres acido-basiques ($CO_2$ dissous, acide carbonique $H_2CO_3$, ions bicarbonate $HCO_3^-$ et ions carbonate $CO_3^{2-}$). Pensez au sort des organismes à coquille calcaire ($CaCO_3$).
* **Question 3 :** Ne vous limitez pas à la photosynthèse brute ($6\,CO_2 + 6\,H_2O \rightarrow C_6H_{12}O_6 + 6\,O_2$). Intégrez le métabolisme global de l'écosystème (respiration, décomposition des sols) et les rétroactions biophysiques (modification de l'albédo par le couvert forestier boréal ou tempéré).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul et bilan global
* **Équation de conservation pour l'atmosphère :**
  $$\text{Accumulation atmosphérique} = \sum \text{Sources} - \sum \text{Puits}$$
  Soit :
  $$\Delta \text{Atmosphère} = (\text{Émissions fossiles} + \text{Changements d'affectation des sols}) - (\text{Puits océanique} + \text{Puits terrestre})$$

* **Application numérique :**
  Les émissions totales anthropiques s'élèvent à :
  $$\text{Émissions totales} = 10,0 + 1,5 = 11,5\ \text{Gt C}\cdot\text{an}^{-1}$$

  L'accumulation atmosphérique étant de $+5,1\ \text{Gt C}\cdot\text{an}^{-1}$, la quantité totale de carbone absorbée par les puits naturels est :
  $$\sum \text{Puits} = 11,5 - 5,1 = 6,4\ \text{Gt C}\cdot\text{an}^{-1}$$

  En répartissant selon les estimations empiriques des modèles biogéochimiques actuels :
  * Le puits océanique absorbe environ $2,6\ \text{Gt C}\cdot\text{an}^{-1}$.
  * Le puits terrestre absorbe donc :
    $$\text{Puits terrestre} = 6,4 - 2,6 = 3,8\ \text{Gt C}\cdot\text{an}^{-1}$$

* **Discussion scientifique :** Le terme « puits terrestre résiduel » désigne la part du carbone absorbée par la biosphère continentale qui excède les pertes par déforestation. Ce stockage s'explique principalement par la *fertilisation carbonée* (l'augmentation du $CO_2$ stimule la photosynthèse nette de certaines plantes) et le reboisement dans les régions nordiques. Cependant, ce flux comporte une forte incertitude ($\pm 0,9\ \text{Gt C}\cdot\text{an}^{-1}$), soulignant la complexité à mesurer précisément l'hétérogénéité des sols et des forêts à l'échelle planétaire.

---

#### 2. Analyse mécanistique (Océan)
* **Processus chimiques de l'acidification :**
  Lorsque le $CO_2$ atmosphérique se dissout dans l'eau de mer, il réagit avec les molécules d'eau pour former de l'acide carbonique :
  $$CO_2\text{(aq)} + H_2O\text{(l)} \rightleftharpoons H_2CO_3\text{(aq)}$$
  Cet acide carbonique se dissocie ensuite en libérant des ions oxonium (ou protons $H^+$), ce qui entraîne une baisse du pH :
  $$H_2CO_3\text{(aq)} \rightleftharpoons HCO_3^-(aq) + H^+(aq)$$
  Une partie de ces ions $H^+$ réagit avec les ions carbonate $CO_3^{2-}$ naturellement présents pour former des ions bicarbonate $HCO_3^-$ :
  $$H^+(aq) + CO_3^{2-}(aq) \rightleftharpoons HCO_3^-(aq)$$

* **Conséquences et limites du puits océanique :**
  La diminution de la concentration en ions carbonate $CO_3^{2-}$ s'avère critique pour les organismes marins calcifiants (coraux, coccolithophores, foraminifères) qui utilisent le calcium $Ca^{2+}$ et les carbonates pour édifier leur squelette ou leur coquille selon l'équilibre :
  $$Ca^{2+} + CO_3^{2-} \rightleftharpoons CaCO_3$$
  De plus, la solubilité du $CO_2$ dépend de la température (loi de Henry) : plus l'océan se réchauffe (dans le cadre du réchauffement climatique global), moins il est capable de dissoudre du gaz carbonique. L'efficacité de la pompe physique tend donc à diminuer, constituant une **rétroaction positive** (l'élévation de température réduit la capacité de puits de l'océan, amplifiant l'accumulation de $CO_2$ atmosphérique).

---

#### 3. Esprit critique et modélisation (Forêts)
* **Nuance de l'argument de compensation forestière :**
  Affirmer que la simple plantation d'arbres compense *immédiatement* et *définitivement* les émissions industrielles relève d'une vision simpliste du cycle biogéochimique pour plusieurs raisons fondamentales :
  1. **Cinétique de stockage :** Un jeune plant absorbe très peu de carbone par rapport à un écosystème forestier mature. Le pic d'absorption maximale s'étale sur des décennies, alors que les émissions industrielles sont immédiates.
  2. **Réversibilité et permanence du stockage :** Le carbone séquestré dans la biomasse végétale et les sols n'est pas stocké de manière définitive (contrairement à la lithosphère à long terme). En cas de sécheresse intense, de pathogènes ou d'incendies de forêt (amplifiés par le changement climatique), la biomasse brûle ou se décompose rapidement, relâchant massivement le $CO_2$ stocké vers l'atmosphère (le puits se transforme alors temporairement en source nette).
  3. **Saturation du puits :** Une forêt ne grandit pas indéfiniment. Une fois le stade climax atteint, la biomasse brute se stabilise : la quantité de carbone fixée par photosynthèse équivaut à celle relâchée par la respiration cellulaire et la décomposition de la litière. Le flux net tend vers zéro.
  4. **Effet albédo :** Dans les régions boréales, remplacer une étendue de neige (albédo élevé, réfléchissant le rayonnement solaire) par une forêt de conifères sombre (albédo faible, absorbant l'énergie solaire) induit une rétroaction thermique locale de réchauffement qui peut parfois contrebalancer le bénéfice climatique de la séquestration du carbone.

* **Conclusion critique :** Les puits de carbone forestiers et océaniques sont indispensables pour atténuer la vitesse du changement climatique, mais ils ne constituent en aucun cas une alternative à la réduction drastique des émissions à la source. Leur capacité d'absorption est limitée, saturable et vulnérable aux perturbations climatiques elles-mêmes induites par l'anthropocène.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
