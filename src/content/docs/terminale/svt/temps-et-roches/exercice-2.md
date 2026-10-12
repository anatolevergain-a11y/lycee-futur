---
title: "Exercice 2 : Formation et prospection des ressources minérales et énergétiques"
description: "Application pratique du chapitre Chronologie géologique et ressources"
---

### 🌐 Contexte & Données scientifiques

La transition énergétique mondiale vers des technologies à faible émission de carbone (véhicules électriques, éoliennes, panneaux solaires) génère une demande croissante en métaux dits « critiques », tels que le lithium, le cobalt et le nickel. L'évaluation des gisements et la compréhension de leur genèse reposent sur l'analyse fine de la chronologie géologique et des marqueurs géochimiques.

Considérons un bassin sédimentaire endoréique continental (type salar) soumis à des cycles climatiques alternant périodes arides et humides. Ce bassin abrite un gisement de lithium sous forme de saumure enrichie en $Li^+$. 

Pour évaluer la rentabilité économique et l'impact environnemental de l'exploitation de ce gisement, les géologues disposent des données suivantes :
1. **Données géochronologiques et isotopiques (datation $U-Pb$ sur zircons inclus dans les tufs volcaniques encadrants) :** 
   L'âge de la couche source volcanique est estimé à $t_0 = 5,2 \pm 0,1 \text{ Ma}$.
2. **Données hydrogéologiques et cinématiques :** 
   Le volume total estimé de la saumure contenue dans l'aquifère poreux est $V = 4,5 \times 10^9 \text{ m}^3$.
   La concentration moyenne en ions lithium $c(Li^+)$ mesurée dans la saumure est de $0,45 \text{ g/L}$.
3. **Paramètres d'exploitation industrielle :** 
   Le procédé d'extraction par évaporation solaire présente un rendement massique $R = 50\%$. 
   La consommation en eau douce nécessaire pour produire $1 \text{ tonne}$ de carbonate de lithium ($Li_2CO_3$) équivaut à $450 \text{ m}^3$.
   
*Données physico-chimiques :* Masses molaires atomiques : $M(Li) = 6,94 \text{ g/mol}$, $M(C) = 12,01 \text{ g/mol}$, $M(O) = 16,00 \text{ g/mol}$.

---

### ❓ Énoncé

1. **Calcul de ressource extractible :** En déduire la masse totale de carbonate de lithium ($Li_2CO_3$) commercialisable que l'on peut théoriquement extraire de ce gisement, en tenant compte du rendement du procédé. Exprimez le résultat en tonnes.
2. **Analyse temporelle et géodynamique :** Expliquez en quoi la datation radiométrique des tufs volcaniques encadrants (méthode $U-Pb$) permet d'encadrer temporellement la formation du gisement sédimentaire, tout en discutant des limites de cette méthode (hypothèses de fermeture du système isotopique).
3. **Esprit critique et compromis environnemental :** Calculez le volume total d'eau douce consommé pour l'exploitation intégrale de ce gisement. Discutez de la contradiction apparente entre le développement des technologies « vertes » et l'impact local de telle ressource dans une région aride (compromis entre transition globale et gestion locale des ressources).

---

### 💡 Indice de méthode

* **Question 1 :** Procédez par étapes. Calculez d'abord la masse totale de lithium élémentaire dans le bassin, convertissez-la en quantité de matière (moles), déduisez-la pour le $Li_2CO_3$ en utilisant la formule stœchiométrique, puis appliquez le rendement $R$. Attention aux conversions d'unités ($1 \text{ m}^3 = 10^3 \text{ L}$ et $1 \text{ t} = 10^6 \text{ g}$).
* **Question 2 :** Rappelez le principe de la filière $U-Pb$ (désintégration radioactive avec période propre) et l'utilisation du principe de superposition en stratigraphie pour dater les sédiments inter stratifiés.
* **Question 3 :** Mettez en relation le volume d'eau calculé avec les données du milieu (bassin endoréique aride impliquant une ressource en eau restreinte). Utilisez une approche systémique (coûts/bénéfices environnementaux).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la masse extractible de $Li_2CO_3$
* **Étape a : Masse totale de lithium élémentaire ($m_{Li}$) dans l'aquifère**
  Le volume est $V = 4,5 \times 10^9 \text{ m}^3 = 4,5 \times 10^{12} \text{ L}$.
  La concentration est $c(Li^+) = 0,45 \text{ g/L}$.
  $$\text{Masse brute de } Li = V \times c = 4,5 \times 10^{12} \text{ L} \times 0,45 \text{ g/L} = 2,025 \times 10^{12} \text{ g} = 2,025 \times 10^6 \text{ tonnes}$$

* **Étape b : Quantité de matière de lithium ($n_{Li}$) et stœchiométrie du $Li_2CO_3$**
  La masse molaire du lithium est $M(Li) = 6,94 \text{ g/mol}$.
  $$n_{Li} = \frac{2,025 \times 10^{12} \text{ g}}{6,94 \text{ g/mol}} \approx 2,918 \times 10^{11} \text{ mol}$$
  La formule chimique du carbonate de lithium est $Li_2CO_3$, ce qui indique qu'il faut 2 moles de $Li$ pour former 1 mole de $Li_2CO_3$.
  $$n_{Li_2CO_3 \text{ brut}} = \frac{n_{Li}}{2} = \frac{2,918 \times 10^{11}}{2} = 1,459 \times 10^{11} \text{ mol}$$

* **Étape c : Masse de $Li_2CO_3$ commercialisable (avec rendement $R = 50\%$)**
  La masse molaire du carbonate de lithium est :
  $$M(Li_2CO_3) = (2 \times 6,94) + 12,01 + (3 \times 16,00) = 13,88 + 12,01 + 48,00 = 73,89 \text{ g/mol}$$
  La masse brute théorique de $Li_2CO_3$ est :
  $$m_{\text{théorique}} = n_{Li_2CO_3 \text{ brut}} \times M(Li_2CO_3) = 1,459 \times 10^{11} \text{ mol} \times 73,89 \text{ g/mol} = 1,078 \times 10^{13} \text{ g} = 1,078 \times 10^7 \text{ tonnes}$$
  En appliquant le rendement d'extraction $R = 50\%$ :
  $$m_{\text{extractible}} = 1,078 \times 10^7 \text{ t} \times 0,50 = 5,39 \times 10^6 \text{ tonnes de } Li_2CO_3$$

#### 2. Analyse temporelle et géodynamique
* **Principe chronologique :** Les tufs volcaniques sus-jacents et sous-jacents aux couches sédimentaires riches en saumures fournissent des âges radiométriques absolus (grâce au système $U-Pb$ mesuré dans les zircons, minéraux particulièrement résistants). Par application du **principe de superposition** et de recoupement, le dépôt du bassin sédimentaire est encadré entre ces âges (autour de $5,2 \text{ Ma}$).
* **Limites scientifiques :** La datation $U-Pb$ repose sur l'hypothèse fondamentale d'un **système clos** depuis la cristallisation du zircon (aucun apport ni perte de plomb ou d'uranium). De plus, l'âge du tuf correspond au moment de l'éruption volcanique et non directement au moment du dépôt des saumures évaporitiques, introduisant un décalage temporel potentiel qu'il faut évaluer par la sédimentologie.

#### 3. Esprit critique et compromis environnemental
* **Calcul de la consommation en eau :** 
  Pour $5,39 \times 10^6 \text{ t}$ de $Li_2CO_3$ extraites :
  $$\text{Volume d'eau} = 5,39 \times 10^6 \text{ t} \times 450 \text{ m}^3/\text{t} = 2,425 \times 10^9 \text{ m}^3$$
* **Discussion critique :** Ce calcul met en lumière un paradoxe majeur de la transition écologique : la lutte contre le changement climatique global (via l'électrification des mobilités) nécessite des ressources minérales dont l'extraction engendre des impacts locaux majeurs. Dans les régions endoréiques arides (souvent des déserts salés), l'évaporation massive de milliards de mètres cubes d'eau douce induit un stress hydrique sévère pour les écosystèmes locaux et les populations autochtones. La viabilité d'une ressource ne se mesure donc pas seulement à son volume géologique brut (ici $\approx 5,4 \text{ Mt}$), mais à son **bilan environnemental global** (coûts énergétiques, empreinte hydrique, acceptabilité sociale), incitant la recherche à développer des procédés d'extraction directe (DLE) plus économes en eau.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
