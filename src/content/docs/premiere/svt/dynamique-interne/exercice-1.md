---
title: "Exercice 1 : Tectonique des plaques et bilan thermique interne"
description: "Application pratique du chapitre La dynamique interne de la Terre"
---

### 🌐 Contexte & Données scientifiques

La Terre dissipe en permanence de l'énergie thermique vers l'espace. Ce flux thermique superficiel moyen est estimé à $Q = 87\text{ mW}\cdot\text{m}^{-2}$ en moyenne à la surface du globe. Pour une surface terrestre totale d'environ $A = 5{,}1 \times 10^{14}\text{ m}^2$, la puissance thermique totale évacuée par la Terre est de l'ordre de $P_{\text{totale}} \approx 4{,}4 \times 10^{13}\text{ W}$.

Cette dissipation thermique est le moteur principal de la tectonique des plaques, via la convection mantellique. Deux sources principales alimentent ce bilan thermique :
1. **La chaleur primordiale**, résiduelle de l'accrétion planétaire et de la différenciation du noyau il y a 4,5 milliards d'années.
2. **La radioactivité naturelle**, principalement due à la désintégration des isotopes pères à longue période (uranium $238\text{U}$ et $235\text{U}$, thorium $232\text{Th}$, et potassium $40\text{K}$) contenus majoritairement dans la croûte et le manteau.

Des mesures géochimiques et géophysiques couplées à des modèles numériques permettent d'estimer que la puissance radiogénique actuelle de la Terre est de $P_{\text{rad}} \approx 2{,}0 \times 10^{13}\text{ W}$ (avec une incertitude estimée à $\pm 0{,}5 \times 10^{13}\text{ W}$ en raison de l'hétérogénéité de la composition crustale et mantellique).

Toutefois, la mesure précise du flux thermique se heurte à des limites méthodologiques : les forages profonds sont rares (le record mondial, le Kola SG-3 en Russie, atteint 12,2 km, soit moins de 0,2 % du rayon terrestre) et les mesures en milieu océanique sont perturbées par la circulation hydrothermale crustale. Les scientifiques doivent donc croiser données de terrain, mesures satellitaires et modèles analogiques ou numériques, dont la validité dépend des hypothèses de départ.

---

### ❓ Énoncé

1. **Calculer** la part (en pourcentage) de la puissance thermique actuelle qui est assurée par la désintégration radioactive, en utilisant la valeur centrale de $P_{\text{rad}}$ et la puissance totale $P_{\text{totale}}$. Explicitez votre démarche.
2. **Discuter** de l'évolution temporelle de cette source radiogénique sachant que la demi-vie ($t_{1/2}$) de l'uranium 238 est d'environ 4,5 milliards d'années. Précisez si la Terre d'il y a 3 milliards d'années dégageait une puissance interne supérieure ou inférieure à celle d'aujourd'hui, et justifiez les limites de l'extrapolation d'un tel modèle à l'échelle de l'Hadéen.
3. **Mettre en relation** ce bilan thermique et la tectonique des plaques : expliquez comment le déséquilibre entre la chaleur produite en profondeur et la chaleur évacuée en surface entretient la convection mantellique.
4. **Analyser de manière critique** l'affirmation suivante : *"La tectonique des plaques est un processus éternel tant que la Terre possédera un noyau chaud."* Appuyez-vous sur la notion de refroidissement séculaire et sur les limites des connaissances actuelles concernant la transition vers un régime tectonique stagnant (type Vénus).

---

### 💡 Indice de méthode

* **Question 1 :** Rappelez la formule du calcul d'un pourcentage : $\text{Part (\%)} = \left(\frac{P_{\text{rad}}}{P_{\text{totale}}}\right) \times 100$. Veillez à bien homogénéiser les unités si nécessaire (ici, les deux puissances sont en Watts).
* **Question 2 :** La loi de décroissance radioactive suit une cinétique exponentielle. Si la quantité d'éléments radioactifs diminue au cours du temps, la puissance radiogénique $P_{\text{rad}}(t)$ était donc plus élevée par le passé ($P_{\text{rad}}(t) = P_0 \cdot 2^{-t/t_{1/2}}$).
* **Question 3 :** Songez aux transferts thermiques : conduction versus convection. Le manteau, bien que solide, se comporte à l'échelle géologique comme un fluide visqueux mis en mouvement par des gradients de température (thermo-convection).
* **Question 4 :** Pour l'esprit critique, interrogez-vous sur le devenir de la lithosphère et de l'eau sur les temps long. Les modèles géodynamiques actuels reposent sur des paramétrages dont les conditions initiales de la Terre primitive restent sujettes à débat scientifique.

---

### 📋 Correction détaillée pas à pas

#### **1. Calcul de la part de la puissance radiogénique**
* **Formule :**
  $$\text{Part radiogénique} = \frac{P_{\text{rad}}}{P_{\text{totale}}} \times 100$$
* **Application numérique :**
  $$\text{Part radiogénique} = \frac{2{,}0 \times 10^{13}\text{ W}}{4{,}4 \times 10^{13}\text{ W}} \times 100 \approx 45{,}5\%$$
* **Conclusion partielle :** Environ $45\%$ à $50\%$ (si l'on intègre les incertitudes) de l'énergie thermique évacuée par la Terre provient de la désintégration radioactive actuelle. Le reste correspond à la libération de la chaleur primordiale.

#### **2. Évolution temporelle et limites du modèle radiogénique**
* **Démonstration :** Les isotopes radioactifs se désintègrent au cours du temps selon une loi exponentielle décroissante. Il y a 4,5 milliards d'années (soit une durée égale à une demi-vie de l' $^{238}\text{U}$), la quantité d'isotopes pères était deux fois plus importante qu'aujourd'hui. Par conséquent, la puissance radiogénique était considérablement plus élevée dans le passé géologique (environ le double au début du Protérozoïque).
* **Esprit critique et limites :** Extrapoler cette loi linéaire ou exponentielle simple aux tout premiers temps de la Terre (Hadéen) comporte des biais majeurs. D'une part, la composition initiale exacte de la Terre accrétée reste hypothétique (modèles cosmochimiques des chondrites). D'autre part, une production radiogénique excessive aurait impliqué un manteau entièrement fondu (océan de magma), modifiant radicalement les régimes de transfert thermique par rapport au manteau convectif actuel.

#### **3. Relation entre bilan thermique et convection mantellique**
* Le manteau terrestre est un milieu solide silicaté soumis à de fortes pressions et températures, mais doué d'une plasticité (viscosité élevée) à l'échelle des temps géologiques.
* La base du manteau (au contact du noyau) et la production interne par radioactivité créent un **gradient thermique** : la température est plus élevée en profondeur qu'en surface.
* Ce déséquilibre thermique engendre des variations de densité (dilatation thermique : le matériel chaud est moins dense et tend à s'élever, tandis que le matériel froid de la lithosphère plonge par *slab pull*). Ce mouvement de matière à l'état solide est la **convection mantellique**, qui dissipe l'énergie thermique interne et entraîne passivement ou activement les plaques lithosphériques en surface.

#### **4. Analyse critique de l'affirmation sur la pérennité de la tectonique des plaques**
* **Argumentation scientifique :** L'affirmation lie la tectonique des plaques au "noyau chaud". Or, le moteur de la convection mantellique (et donc de la tectonique) dépend couplé du refroidissement du noyau *et* de la diminution de la puissance radiogénique mantellique. 
* **Nuance et limites des modèles :** Au fur et à mesure que la Terre se refroidit (refroidissement séculaire), le manteau s'appauvrit en éléments radioactifs et sa viscosité augmente. Certains modèles géodynamiques suggèrent qu'en dessous d'un certain seuil de flux thermique, la convection mantellique ne sera plus suffisante pour fracturer la lithosphère et vaincre sa résistance mécanique. La Terre pourrait alors évoluer vers un mode de géodynamique de type "stagnant lid" (couvercle stagnant), semblable à celui observé aujourd'hui sur Vénus ou Mars. 
* **Conclusion critique :** Affirmer que le processus est "éternel" est scientifiquement abusif ; la tectonique des plaques est un état géodynamique transitoire dans l'histoire thermique d'une planète tellurique, dont la fin est inéluctable à l'échelle des temps astronomiques, bien que les modélisations actuelles comportent encore d'importantes marges d'incertitude quant aux seuils rhéologiques exacts.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
