---
title: "Exercice : Nourrir l'humanité et gestion des sols"
description: "Démonstration appliquée : Empreinte carbone et agriculture de précision"
---

### 🌐 Contexte

Face au défi de nourrir près de 10 milliards d'êtres humains d'ici 2050 sans dégrader davantage la biosphère, la gestion des agrosystèmes est au cœur des enjeux contemporains. L'agriculture intensive conventionnelle repose largement sur des intrants de synthèse (engrais minéraux, produits phytosanitaires, carburants fossiles pour la mécanisation). 

Parmi eux, la synthèse industrielle d'engrais azotés par le procédé *Haber-Bosch* consomme d'importantes quantités de gaz naturel fossile selon la réaction :
$$\text{N}_2\text{ (g)} + 3\,\text{H}_2\text{ (g)} \longrightarrow 2\,\text{NH}_3\text{ (g)}$$
Au champ, l'épandage d'azote en excès stimule des bactéries dénitrifiantes du sol, libérant du protoxyde d'azote ($\text{N}_2\text{O}$), un gaz à effet de serre dont le pouvoir de réchauffement global est environ 273 fois supérieur à celui du dioxyde de carbone ($\text{CO}_2$).

L'**agriculture de précision** mobilise les nouvelles technologies (capteurs au sol, imagerie satellite par indice de végétation NDVI, pulvérisation modulée assistée par GPS) afin d'adapter l'apport d'intrants aux besoins réels et localisés de la plante, parcelle par parcelle.

#### Données d'étude : Comparaison sur une exploitation céréalière de $100\text{ ha}$ de blé tendre

| Paramètre agronomique et énergétique | Conduite Conventionnelle | Conduite « Agriculture de précision » |
| :--- | :---: | :---: |
| **Dose d'engrais azoté minéral** | $180\text{ kg N}\cdot\text{ha}^{-1}$ | $135\text{ kg N}\cdot\text{ha}^{-1}$ |
| **Facteur d'émission de l'engrais azoté** (fabrication + émissions sol en $\text{N}_2\text{O}$) | $4{,}2\text{ kg équivalent CO}_2\cdot(\text{kg N})^{-1}$ | $4{,}2\text{ kg équivalent CO}_2\cdot(\text{kg N})^{-1}$ |
| **Consommation de carburant (GNR)** | $90\text{ L}\cdot\text{ha}^{-1}$ | $75\text{ L}\cdot\text{ha}^{-1}$ |
| **Facteur d'émission du carburant** | $3{,}1\text{ kg équivalent CO}_2\cdot\text{L}^{-1}$ | $3{,}1\text{ kg équivalent CO}_2\cdot\text{L}^{-1}$ |
| **Rendement en grains** | $7{,}5\text{ t}\cdot\text{ha}^{-1}$ | $7{,}8\text{ t}\cdot\text{ha}^{-1}$ |

---

### ❓ Énoncé

1. **Mécanismes biogéochimiques et climat (Mobilisation des connaissances)**  
   Expliquez pourquoi l'apport d'engrais azotés de synthèse dans un agrosystème contribue significativement à l'empreinte carbone globale, en distinguant l'étape industrielle de fabrication et l'étape d'utilisation au niveau du sol.

2. **Bilan carbone comparatif (Application numérique)**  
   Calculez, pour l'ensemble de l'exploitation de $100\text{ ha}$, la quantité totale de gaz à effet de serre (en tonnes d'équivalent $\text{CO}_2$, notée $\text{t}\,\text{CO}_{2\text{eq}}$) émise au cours d'une campagne par l'utilisation conjointe de l'engrais azoté et du carburant, pour la conduite conventionnelle puis pour l'agriculture de précision.

3. **Indicateur d'efficacité environnementale (Raisonnement scientifique)**  
   Déterminez l'empreinte carbone par tonne de blé produite ($\text{kg}\,\text{CO}_{2\text{eq}}\cdot\text{t}^{-1}$) pour chaque mode de gestion. Déduisez-en le gain écologique relatif permis par l'agriculture de précision.

4. **Regard critique et vision globale (Synthèse citoyenne)**  
   À l'aide de vos connaissances, montrez en quoi l'agriculture de précision protège également la qualité des sols et des hydrosystèmes locaux, tout en discutant au moins une limite (technologique, économique ou écologique) de cette approche face aux principes de l'agroécologie.

---

### 💡 Indice

* Pour la question 2, effectuez le calcul séparé pour l'engrais et le carburant à l'échelle d'un hectare, additionnez-les, puis multipliez par la surface totale ($100\text{ ha}$) avant de convertir les kilogrammes en tonnes ($1\text{ t} = 1\,000\text{ kg}$).
* Pour la question 3, l'empreinte unitaire s'obtient en divisant les émissions totales générées sur un hectare par le rendement à l'hectare.
* Pour la question 4, pensez au cycle de l'azote au-delà du volet atmosphérique : que devient l'ion nitrate ($\text{NO}_3^-$) non absorbé par les racines vis-à-vis des nappes phréatiques ? Pensez aussi à la dépendance technologique et aux intrants qui restent chimiques.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Contribution des engrais azotés à l'empreinte carbone

L'impact carbone de l'azote de synthèse s'articule en deux étapes distinctes :

* **Amont industriel (fabrication) :**  
  La production d'ammoniac ($\text{NH}_3$) par le procédé *Haber-Bosch* nécessite du dihydrogène ($\text{H}_2$), majoritairement extrait par vaporeformage du méthane fossile ($\text{CH}_4$). Cette réaction fortement endothermique exige des pressions ($150\text{ à }250\text{ bars}$) et des températures ($400\text{ à }500^\circ\text{C}$) élevées, libérant de grandes quantités de dioxyde de carbone ($\text{CO}_2$).
* **Au champ (sol) :**  
  Une fois épandus, les ions minéraux ($\text{NH}_4^+$ et $\text{NO}_3^-$) sont soumis à l'action des micro-organismes du sol. Lorsque les apports dépassent la capacité d'absorption des plantes, les bactéries dénitrifiantes transforment le nitrate en conditions d'anoxie partielle, générant un sous-produit gazeux : le protoxyde d'azote ($\text{N}_2\text{O}$). Avec un pouvoir de réchauffement global près de 300 fois supérieur au $\text{CO}_2$, même de faibles pertes gazeuses alourdissent lourdement le bilan radiatif planétaire.

---

#### 2. Calcul comparatif des émissions totales sur 100 hectares

Calculons les émissions à l'hectare pour chaque conduite :

##### A. Conduite conventionnelle
* **Émissions liées à l'engrais :**
  $$E_{\text{engrais, conv}} = 180\text{ kg N}\cdot\text{ha}^{-1} \times 4{,}2\text{ kg}\,\text{CO}_{2\text{eq}}\cdot(\text{kg N})^{-1} = 756\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{ha}^{-1}$$
* **Émissions liées au carburant :**
  $$E_{\text{carburant, conv}} = 90\text{ L}\cdot\text{ha}^{-1} \times 3{,}1\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{L}^{-1} = 279\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{ha}^{-1}$$
* **Total par hectare :**
  $$E_{\text{ha, conv}} = 756 + 279 = 1\,035\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{ha}^{-1}$$
* **Total pour l'exploitation ($100\text{ ha}$) :**
  $$E_{\text{total, conv}} = 1\,035 \times 100 = 103\,500\text{ kg}\,\text{CO}_{2\text{eq}} = 103{,}5\text{ t}\,\text{CO}_{2\text{eq}}$$

##### B. Conduite « Agriculture de précision »
* **Émissions liées à l'engrais :**
  $$E_{\text{engrais, préc}} = 135\text{ kg N}\cdot\text{ha}^{-1} \times 4{,}2\text{ kg}\,\text{CO}_{2\text{eq}}\cdot(\text{kg N})^{-1} = 567\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{ha}^{-1}$$
* **Émissions liées au carburant :**
  $$E_{\text{carburant, préc}} = 75\text{ L}\cdot\text{ha}^{-1} \times 3{,}1\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{L}^{-1} = 232{,}5\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{ha}^{-1}$$
* **Total par hectare :**
  $$E_{\text{ha, préc}} = 567 + 232{,}5 = 799{,}5\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{ha}^{-1}$$
* **Total pour l'exploitation ($100\text{ ha}$) :**
  $$E_{\text{total, préc}} = 799{,}5 \times 100 = 79\,950\text{ kg}\,\text{CO}_{2\text{eq}} = 79{,}95\text{ t}\,\text{CO}_{2\text{eq}}$$

**Bilan :** L'agriculture de précision permet d'éviter l'émission de :
$$103{,}5 - 79{,}95 = 23{,}55\text{ t}\,\text{CO}_{2\text{eq}}\text{ par an (soit une réduction de } \approx 22{,}8\%).$$

---

#### 3. Empreinte carbone par tonne de blé et gain écologique

Calculons le ratio d'émissions par unité de biomasse récoltée :

* **Conduite conventionnelle :**
  $$\text{Empreinte}_{\text{conv}} = \frac{1\,035\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{ha}^{-1}}{7{,}5\text{ t}\cdot\text{ha}^{-1}} = 138\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{t}^{-1}\text{ de blé}$$
* **Agriculture de précision :**
  $$\text{Empreinte}_{\text{préc}} = \frac{799{,}5\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{ha}^{-1}}{7{,}8\text{ t}\cdot\text{ha}^{-1}} \approx 102{,}5\text{ kg}\,\text{CO}_{2\text{eq}}\cdot\text{t}^{-1}\text{ de blé}$$

* **Calcul du gain relatif :**
  $$\text{Gain} = \frac{138 - 102{,}5}{138} \times 100 \approx 25{,}7\%$$

**Conclusion :** Grâce à un léger gain de rendement (dû à un apport synchronisé qui limite la verse et le stress nutritif) couplé à une baisse nette des intrants, l'empreinte carbone par tonne de grain diminue de près de **$26\%$**. L'efficacité éco-énergétique de l'agrosystème est significativement augmentée.

---

#### 4. Synthèse critique : Bénéfices et limites

* **Bénéfices environnementaux annexes :**
  * **Préservation des eaux souterraines et des sols :** L'ajustement strict des doses de nitrate ($\text{NO}_3^-$) limite le reliquat azoté post-récolte. L'anion nitrate étant très soluble et repoussé par le complexe argilo-humique (chargé négativement), la réduction des excès prévient son lessivage vers les nappes phréatiques, réduisant l'eutrophisation des cours d'eau et des zones côtières.
  * **Santé des sols :** Moins de passages motorisés inutiles et guidage GPS évitent le tassement excessif des sols, préservant la porosité, la circulation de l'eau et la faune endogée (vers de terre).

* **Limites de l'agriculture de précision :**
  * **Persistance du modèle d'intrants de synthèse :** Elle optimise l'usage des engrais et pesticides de synthèse sans s'en affranchir. Contrairement à l'agroécologie (cultures associées, légumineuses fixatrices de $\text{N}_2$, agroforesterie, rotation longue), elle ne restaure pas les cycles biogéochimiques naturels autonomes.
  * **Coût et dépendance technologique :** Ces technologies requièrent des investissements financiers lourds (capteurs, guidage RTK, drones), inaccessibles pour de nombreuses exploitations du Sud global.
  * **Bilan matière du numérique :** La fabrication des équipements électroniques (métaux rares, capteurs) génère elle-même une empreinte écologique et minière non négligeable.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
