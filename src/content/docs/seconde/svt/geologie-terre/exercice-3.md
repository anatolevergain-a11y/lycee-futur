---
title: "Exercice 3 : Érosion, altération et dynamique des paysages"
description: "Application pratique du chapitre La Terre, un objet géologique vivant"
---

### 🌐 Contexte & Données scientifiques

Les paysages terrestres actuels sont le fruit d'une lutte permanente entre deux dynamiques antagonistes : l'endogenèse (soulèvement tectonique, volcanisme) qui crée du relief, et l'exogenèse (altération et érosion) qui tend à l'aplanir. L'altération correspond à la modification chimique et physique des roches en place, tandis que l'érosion désigne l'ensemble des processus de mobilisation et de transport de ces produits par des agents (eau, vent, glace).

Dans les bassins versants alpins, l'étude quantitative du bilan sédimentaire est un enjeu majeur pour comprendre la dynamique des paysages et gérer les risques naturels. 

Considérons un bassin versant montagnard d'une superficie $S = 150\text{ km}^2$. 
Une station hydrométrique située à l'exutoire de ce bassin mesure en continu le débit liquide et la charge en suspension (quantité de matière minérale solide transportée par unité de volume d'eau). 

Les mesures géologiques et géochimiques fournissent les données moyennes annuelles suivantes :
* **Précipitations moyennes :** $P = 1,4\text{ m/an}$
* **Débit solide en suspension mesuré à l'exutoire :** $Q_s = 45\,000\text{ tonnes/an}$
* **Denudation chimique estimée (ions dissous exportés) :** $Q_d = 15\,000\text{ tonnes/an}$
* **Masse volumique moyenne de la roche saine (gneiss/schistes) :** $\rho = 2,7\text{ g/cm}^3$

*Donnée complémentaire :* La relation mathématique reliant la masse de roche érodée ($M$), sa masse volumique ($\rho$) et le volume équivalent ($V$) est $V = \frac{M}{\rho}$.

---

### ❓ Énoncé

1. **Calculer** la perte d'épaisseur moyenne du bassin versant par érosion mécanique et chimique cumulée, exprimée en millimètres par an ($\text{mm/an}$).
2. **Expliquer** la distinction fondamentale entre le processus d'altération et le processus d'érosion, en illustrant votre propos avec les données de l'énoncé.
3. **Discuter** de la représentativité et des limites méthodologiques de ce calcul global pour estimer la vitesse de recul des reliefs à l'échelle d'une vie humaine.

---

### 💡 Indice de méthode

* **Question 1 :** Convertissez d'abord la masse totale exportée (solides + dissous) en kg, puis déterminez le volume correspondant en $\text{m}^3$ à l'aide de la masse volumique $\rho$ (attention aux unités : $1\text{ g/cm}^3 = 10^3\text{ kg/m}^3$). Rapportez ensuite ce volume à la surface du bassin $S$ pour obtenir une épaisseur, puis convertissez le résultat en millimètres.
* **Question 2 :** Mobilisez les définitions rigoureuses du cours. Le terme "mécanique" (particules en suspension) renvoie souvent à l'érosion au sens strict, tandis que le terme "chimique" (ions dissous) est le résultat direct de l'altération chimique des minéraux.
* **Question 3 :** Interrogez-vous sur la permanence du taux d'érosion dans le temps (phénomène linéaire vs paroxystique) et sur la différence entre une moyenne spatiale globale et la réalité locale des versants.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la vitesse de denudation globale
* **Étape a : Calcul de la masse totale annuelle exportée ($M_{\text{tot}}$)**
  Le bassin perd de la matière sous deux formes (solide et dissoute) :
  $$M_{\text{tot}} = Q_s + Q_d = 45\,000 + 15\,000 = 60\,000\text{ tonnes/an}$$
  Convertissons cette masse en kilogrammes ($1\text{ tonne} = 10^3\text{ kg}$) :
  $$M_{\text{tot}} = 60\,000 \times 10^3\text{ kg/an} = 6 \times 10^7\text{ kg/an}$$

* **Étape b : Calcul du volume annuel de roche enlevée ($V_{\text{an}}$)**
  La masse volumique de la roche est $\rho = 2,7\text{ g/cm}^3 = 2,7 \times 10^3\text{ kg/m}^3$.
  En utilisant la relation $V = \frac{M}{\rho}$ :
  $$V_{\text{an}} = \frac{6 \times 10^7}{2,7 \times 10^3} \approx 22\,222\text{ m}^3/\text{an}$$

* **Étape c : Calcul de l'abaissement moyen de la surface (denudation $h$)**
  Ce volume est prélevé uniformément sur toute la surface du bassin $S = 150\text{ km}^2 = 150 \times 10^6\text{ m}^2$.
  L'épaisseur moyenne $h$ perdue par an est :
  $$h = \frac{V_{\text{an}}}{S} = \frac{22\,222\text{ m}^3}{150 \times 10^6\text{ m}^2} \approx 1,48 \times 10^{-4}\text{ m/an}$$
  Convertissons cette valeur en millimètres par an ($\text{1 m} = 1000\text{ mm}$) :
  $$h = 1,48 \times 10^{-4} \times 10^3 = 0,148\text{ mm/an}$$ *(soit environ $0,15\text{ mm/an}$ ou $15\text{ cm par siècle}$)*.

---

#### 2. Distinction entre altération et érosion
* **L'altération** correspond aux transformations physico-chimiques des roches mères sous l'action de l'eau, de l'atmosphère et de la biosphère. Elle désagrège la roche et transforme ses minéraux primaires (ex. : feldspaths) en minéraux secondaires (ex. : argiles) tout en libérant des ions en solution. Les $15\,000\text{ tonnes/an}$ d'ions dissous ($Q_d$) mesurés à l'exutoire témoignent directement de cette altération chimique en amont.
* **L'érosion** (au sens strict de la dynamique externe mécanique) englobe le détachement et le transport des particules solides par un agent dynamique (ici, le réseau hydrographique). Les $45\,000\text{ tonnes/an}$ de matière en suspension ($Q_s$) correspondent à cette phase de transport de débris préalablement fracturés et altérés.
* **Bilan :** L'altération prépare le matériel, l'érosion le déplace. Les deux processus agissent de concert pour façonner le paysage, la part chimique représentant ici $25\%$ de la perte totale de matière de ce bassin versant.

---

#### 3. Limites méthodologiques et esprit critique
L'estimation obtenue de $\approx 0,15\text{ mm/an}$ est une valeur moyenne globale qui présente plusieurs limites scientifiques importantes :
1. **L'hypothèse d'uniformité spatiale :** Le calcul suppose que l'érosion est homogène sur tout le bassin. En réalité, les crêtes subissent une érosion mécanique différente des fonds de vallée, et les pentes fortes (> $30^\circ$) érodent beaucoup plus vite que les zones plates.
2. **La variabilité temporelle et l'effet des crises géologiques :** L'érosion ne se fait pas de manière linéaire et continue. Un seul événement climatique extrême (orage violent, crue centennale ou épisode de gel/dégel intense) peut transporter en quelques heures une fraction majeure du sédiment annuel. Les mesures basées sur une ou deux années hydrologiques peuvent donc sous-estimer ou surestimer la tendance à long terme.
3. **Le stockage intermédiaire :** Une partie des sédiments arrimés aux sommets ne sort pas immédiatement du bassin ; elle est stockée temporairement dans les talus, les cônes de déjection ou les terrasses alluviales. L'exutoire ne mesure que ce qui sort, pas nécessairement ce qui a été érodé des versants la même année.
4. **Conclusion critique :** Extrapoler cette valeur à l'échelle d'une vie humaine pour prédire l'évolution d'un paysage relève d'un modèle simplificateur. Les géomorphologues utilisent ces bilans avec précaution, en les couplant à des méthodes de datation (cosmonucléides) pour intégrer des échelles de temps géologiques (millénaires).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
