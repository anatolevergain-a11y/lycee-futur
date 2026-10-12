---
title: "Exercice : Oxydoréduction et piles"
description: "Démonstration appliquée : Rendement et recyclage des batteries au lithium"
---

### 🌐 Contexte

Les accumulateurs lithium-ion équipent aujourd'hui la quasi-totalité de nos appareils nomades et des véhicules électriques. Leur essor soulève deux défis majeurs : optimiser leur autonomie énergétique et assurer le recyclage des métaux stratégiques (lithium, cobalt, nickel) en fin de vie pour limiter l'empreinte environnementale de l'extraction minière.

Lors de la décharge d'un accumulateur lithium-ion simplifié au dioxyde de cobalt et lithium ($\text{LiCoO}_2$), des réactions d'oxydoréduction ont lieu aux électrodes. En fin de vie, le recyclage hydrométallurgique permet de récupérer les ions cobalt par une réaction d'oxydoréduction en milieu acide mettant en jeu du peroxyde d'hydrogène.

---

### ❓ Énoncé

#### Données :
- Constante de Faraday : $F = 96\,500\text{ C}\cdot\text{mol}^{-1}$
- Masse molaire du cobalt : $M(\text{Co}) = 58{,}9\text{ g}\cdot\text{mol}^{-1}$
- Masse molaire de l'oxyde de lithium-cobalt : $M(\text{LiCoO}_2) = 97{,}9\text{ g}\cdot\text{mol}^{-1}$
- Couples oxydant/réducteur :
  - Électrode négative : $\text{Li}^+ / \text{LiC}_6$
  - Électrode positive : $\text{CoO}_2 / \text{LiCoO}_2$
  - Procédé de recyclage : $\text{Co}^{3+}(\text{aq}) / \text{Co}^{2+}(\text{aq})$ et $\text{O}_2(\text{g}) / \text{H}_2\text{O}_2(\text{aq})$

---

1. **Fonctionnement de l'accumulateur en décharge**
   Lors de la décharge, l'anode (pôle négatif) est le siège de l'oxydation du graphite litiéré selon la demi-équation :
   $$\text{LiC}_6(\text{s}) \rightleftharpoons \text{Li}^+ + 6\,\text{C}(\text{s}) + \text{e}^-$$
   À la cathode (pôle positif), les ions $\text{Li}^+$ s'insèrent dans le réseau d'oxyde de cobalt selon la demi-équation :
   $$\text{CoO}_2(\text{s}) + \text{Li}^+ + \text{e}^- \rightleftharpoons \text{LiCoO}_2(\text{s})$$
   - Justifier quelle électrode est l'anode et quelle électrode est la cathode à partir des définitions de l'oxydoréduction.
   - Écrire l'équation de la réaction globale de décharge.
   - Indiquer le sens de circulation des électrons dans le circuit extérieur et celui des ions $\text{Li}^+$ dans l'électrolyte.

2. **Capacité électrique et autonomie**
   Une batterie de smartphone contient une masse $m = 4{,}90\text{ g}$ de matériau actif $\text{LiCoO}_2$ entièrement formé en fin de décharge.
   - Calculer la quantité de matière $n(\text{LiCoO}_2)$ correspondante.
   - En déduire la quantité de matière d'électrons $n(\text{e}^-)$ ayant circulé pendant une décharge complète.
   - Calculer la capacité électrique maximale théorique $Q_{\text{max}}$ délivrée par cette batterie, en coulombs ($\text{C}$), puis en milliampères-heures ($\text{mA}\cdot\text{h}$).

3. **Recyclage du cobalt par hydrométallurgie**
   Dans les batteries usagées, le cobalt est présent sous forme d'ions cobalt (III) piégés dans le réseau solide. Pour les dissoudre facilement, on les réduit en ions cobalt (II) solubles à l'aide d'une solution acide de peroxyde d'hydrogène ($\text{H}_2\text{O}_2$).
   - Écrire les demi-équations électroniques associées aux deux couples mis en jeu lors du recyclage.
   - Établir l'équation de la réaction d'oxydoréduction du procédé de dissolution.
   - Expliquer en quoi ce procédé s'inscrit dans une démarche de chimie durable et d'économie circulaire.

---

### 💡 Indice

- **Question 1 :** Retenez le moyen mnémotechnique : **A**node = **O**xydation (deux voyelles) ; **C**athode = **R**éduction (deux consonnes). Les électrons partent toujours de l'électrode où ils sont produits.
- **Question 2 :** Observez le coefficient stœchiométrique des électrons dans la demi-équation à la cathode pour relier $n(\text{e}^-)$ à $n(\text{LiCoO}_2)$. Pour la conversion : $1\text{ A}\cdot\text{h} = 3\,600\text{ C}$.
- **Question 3 :** Dans un couple $\text{Ox}/\text{Red}$, l'oxydant gagne des électrons. Pour combiner deux demi-équations, le nombre d'électrons cédés par le réducteur doit être égal au nombre d'électrons captés par l'oxydant.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Fonctionnement de l'accumulateur en décharge

- **Identification des électrodes :**
  - À l'électrode de graphite, l'espèce $\text{LiC}_6$ perd un électron : il s'agit d'une **oxydation**. Par définition, le siège de l'oxydation est l'**anode** (pôle $-$).
  - À l'électrode d'oxyde de cobalt, l'espèce $\text{CoO}_2$ capte un électron : il s'agit d'une **réduction**. Par définition, le siège de la réduction est la **cathode** (pôle $+$).

- **Équation globale de décharge :**
  En sommant les deux demi-équations électroniques membre à membre (les électrons et les ions $\text{Li}^+$ se simplifient) :
  $$\text{LiC}_6(\text{s}) + \text{CoO}_2(\text{s}) \longrightarrow 6\,\text{C}(\text{s}) + \text{LiCoO}_2(\text{s})$$

- **Sens des porteurs de charge :**
  - **Électrons :** Ils sont libérés à l'anode (pôle $-$) et consommés à la cathode (pôle $+$). Ils circulent donc dans le circuit extérieur **de l'électrode négative vers l'électrode positive**.
  - **Ions $\text{Li}^+$ :** Ces cations se déplacent dans l'électrolyte vers la cathode (pôle $+$) où ils sont consommés pour former $\text{LiCoO}_2$, assurant la neutralité électrique locale.

---

#### 2. Capacité électrique et autonomie

- **Quantité de matière de $\text{LiCoO}_2$ :**
  $$n(\text{LiCoO}_2) = \frac{m}{M(\text{LiCoO}_2)} = \frac{4{,}90}{97{,}9} \approx 5{,}01 \times 10^{-2}\text{ mol}$$

- **Quantité d'électrons échangés :**
  D'après la demi-équation à la cathode :
  $$\text{CoO}_2(\text{s}) + \text{Li}^+ + \text{e}^- \rightleftharpoons \text{LiCoO}_2(\text{s})$$
  Pour $1\text{ mol}$ de $\text{LiCoO}_2$ formé, $1\text{ mol}$ d'électrons a circulé. On a donc :
  $$n(\text{e}^-) = n(\text{LiCoO}_2) \approx 5{,}01 \times 10^{-2}\text{ mol}$$

- **Capacité maximale théorique $Q_{\text{max}}$ :**
  La charge totale transportée est donnée par :
  $$Q_{\text{max}} = n(\text{e}^-) \times F$$
  $$Q_{\text{max}} = 5{,}01 \times 10^{-2} \times 96\,500 \approx 4\,830\text{ C}$$

  Conversion en milliampères-heures ($\text{mA}\cdot\text{h}$) :
  $$1\text{ A}\cdot\text{h} = 3\,600\text{ C} \implies 1\text{ C} = \frac{1}{3\,600}\text{ A}\cdot\text{h} = \frac{1\,000}{3\,600}\text{ mA}\cdot\text{h}$$
  $$Q_{\text{max}} = \frac{4\,830}{3\,600} \approx 1{,}34\text{ A}\cdot\text{h} = 1\,340\text{ mA}\cdot\text{h}$$

---

#### 3. Recyclage du cobalt par hydrométallurgie

- **Demi-équations électroniques :**
  - Réduction de l'oxydant $\text{Co}^{3+}$ :
    $$\text{Co}^{3+}(\text{aq}) + \text{e}^- \rightleftharpoons \text{Co}^{2+}(\text{aq})$$
  - Oxydation du réducteur $\text{H}_2\text{O}_2$ (milieu acide) :
    $$\text{H}_2\text{O}_2(\text{aq}) \rightleftharpoons \text{O}_2(\text{g}) + 2\,\text{H}^+(\text{aq}) + 2\,\text{e}^-$$

- **Équation de réaction d'oxydoréduction :**
  Pour équilibrer le transfert d'électrons (2 électrons libérés par $\text{H}_2\text{O}_2$), on multiplie la demi-équation du cobalt par 2 :
  $$2 \times \left( \text{Co}^{3+}(\text{aq}) + \text{e}^- \rightleftharpoons \text{Co}^{2+}(\text{aq}) \right)$$
  $$1 \times \left( \text{H}_2\text{O}_2(\text{aq}) \rightleftharpoons \text{O}_2(\text{g}) + 2\,\text{H}^+(\text{aq}) + 2\,\text{e}^- \right)$$

  En additionnant :
  $$2\,\text{Co}^{3+}(\text{aq}) + \text{H}_2\text{O}_2(\text{aq}) \longrightarrow 2\,\text{Co}^{2+}(\text{aq}) + \text{O}_2(\text{g}) + 2\,\text{H}^+(\text{aq})$$

- **Intérêt écologique et citoyen :**
  - Le cobalt est un métal rare, coûteux et dont l'extraction minière présente de lourds impacts environnementaux et humains.
  - La dissolution sélective par voie redox permet de purifier et recycler le cobalt pour fabriquer de nouvelles cellules de batterie sans réextraire de minerai vierge.
  - L'utilisation de $\text{H}_2\text{O}_2$ est un atout en « chimie verte » car son oxydation ne produit que du dioxygène $\text{O}_2$ et de l'eau (sans rejet gazeux toxique ni sous-produit polluant).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
