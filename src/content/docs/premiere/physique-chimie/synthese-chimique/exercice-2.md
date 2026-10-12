---
title: "Exercice 2 : Techniques d'extraction et de purification en laboratoire"
description: "Application pratique du chapitre Synthèse et caractérisation d'espèces chimiques"
---

### 🌐 Contexte & Données scientifiques

L'isolement d'une espèce chimique synthétisée en laboratoire nécessite souvent le recours à des techniques séparatives basées sur des différences de propriétés physico-chimiques (solubilité, température d'ébullition, affinité pour les phases). 

Considérons la synthèse par voie chimique de l'acide benzoïque ($\text{C}_7\text{H}_6\text{O}_2$), un conservateur alimentaire couramment utilisé. À l'issue de la synthèse, le produit brut se présente sous la forme d'un solide aqueux qu'il convient d'extraire, puis de purifier par **recristallisation** dans l'eau.

Le tableau ci-dessous rassemble les données thermodynamiques et de solubilité nécessaires à l'analyse du protocole :

| Grandeur physique | Valeur / Donnée |
| :--- | :--- |
| Formule brute | $\text{C}_7\text{H}_6\text{O}_2$ |
| Masse molaire $M$ | $122{,}12 \text{ g}\cdot\text{mol}^{-1}$ |
| Solubilité dans l'eau à $20 \text{ }^\circ\text{C}$ | $S_{20} = 2{,}9 \text{ g}\cdot\text{L}^{-1}$ |
| Solubilité dans l'eau à $100 \text{ }^\circ\text{C}$ | $S_{100} = 68{,}0 \text{ g}\cdot\text{L}^{-1}$ |
| Température de fusion $T_{\text{fus}}$ | $122{,}4 \text{ }^\circ\text{C}$ |

*Donnée analytique :* Pour vérifier la pureté du solide obtenu après séchage, un élève réalise une chromatographie sur couche mince (CCM) et une mesure de température de fusion au banc Köfler. Le produit pur fond nettement à $122{,}4 \text{ }^\circ\text{C}$, tandis que le produit brut avant recristallisation présente une plage de fusion s'étalant de $115 \text{ }^\circ\text{C}$ à $120 \text{ }^\circ\text{C}$.

---

### ❓ Énoncé

1. **Justification du protocole thermique :** Un opérateur dissout une masse $m_1 = 10{,}0 \text{ g}$ d'acide benzoïque brut dans un volume $V = 150 \text{ mL}$ d'eau distillée portée à ébullition ($100 \text{ }^\circ\text{C}$). 
   Montrer par le calcul si l'intégralité du solide est initialement soluble à cette température.

2. **Optimisation du rendement et compromis :** La solution précédente est ensuite refroidie à la température de $20 \text{ }^\circ\text{C}$. 
   Calculer la masse maximale $m_{\text{max}}$ d'acide benzoïque susceptible de cristalliser à cette température. Discuter de l'impact d'un refroidissement plus poussé (par exemple dans un bain de glace à $0 \text{ }^\circ\text{C}$, où $S_0 \approx 1{,}7 \text{ g}\cdot\text{L}^{-1}$) sur le compromis entre le rendement de la synthèse et la pureté chimique du produit final.

3. **Analyse critique des points de fusion :** Expliquer l'origine de l'écart entre le comportement thermique du produit brut (plage de fusion de $115 \text{ }^\circ\text{C}$ à $120 \text{ }^\circ\text{C}$) et celui du produit pur. Quel principe de thermodynamique chimique sous-tend cette observation ?

4. **Bilan de la purification :** À l'issue de la filtration sous vide et du séchage, l'élève récupère une masse $m_{\text{exp}} = 6{,}5 \text{ g}$ de cristaux purs. Calculer le rendement global de cette étape de recristallisation, noté $\eta_{\text{recristallisation}}$.

---

### 💡 Indice de méthode

* **Question 1 & 2 :** Comparez la masse introduite (ou la masse maximale soluble) à la valeur du produit $S \times V$ à la température considérée. Veillez à bien homogénéiser les unités (g et L).
* **Question 3 :** Rappelez qu'un réseau cristallin pur possède une énergie de liaison homogène, tandis que la présence d'impuretés perturbe ce réseau, abaissant et élargissant l'intervalle de fusion.
* **Question 4 :** Le rendement $\eta$ s'exprime par le rapport entre la quantité (ou masse) obtenue expérimentalement et la quantité (ou masse) maximale théorique attendue : $\eta = \frac{m_{\text{exp}}}{m_{\text{max}}} \times 100$.

---

### 📋 Correction détaillée pas à pas

1. **Vérification de la dissolution à chaud :**
   À $100 \text{ }^\circ\text{C}$, la solubilité maximale de l'acide benzoïque est de $S_{100} = 68{,}0 \text{ g}\cdot\text{L}^{-1}$. 
   Calculons la masse maximale $m_{\text{max}, 100}$ d'acide benzoïque pouvant se dissoudre dans $V = 150 \text{ mL} = 0{,}150 \text{ L}$ d'eau à cette température :
   $$m_{\text{max}, 100} = S_{100} \times V = 68{,}0 \text{ g}\cdot\text{L}^{-1} \times 0{,}150 \text{ L} = 10{,}2 \text{ g}$$
   Puisque la masse introduite ($10{,}0 \text{ g}$) est inférieure à la masse maximale soluble ($10{,}2 \text{ g}$), **l'intégralité du solide se dissout** dans l'eau bouillante. Cette condition est indispensable pour éliminer par filtration à chaud les éventuelles impuretés insolubles.

2. **Calcul de la masse cristallisée et analyse du compromis :**
   À $20 \text{ }^\circ\text{C}$, la solubilité est $S_{20} = 2{,}9 \text{ g}\cdot\text{L}^{-1}$. 
   La masse restant dissoute dans $0{,}150 \text{ L}$ à l'équilibre thermodynamique est :
   $$m_{\text{dissoute}} = 2{,}9 \text{ g}\cdot\text{L}^{-1} \times 0{,}150 \text{ L} = 0{,}435 \text{ g}$$
   La masse maximale d'acide benzoïque cristallisé est donc :
   $$m_{\text{max}} = m_{\text{initiale}} - m_{\text{dissoute}} = 10{,}0 - 0{,}435 = 9{,}565 \text{ g} \approx 9{,}6 \text{ g}$$
   
   *Discussion critique :* Abaisser la température à $0 \text{ }^\circ\text{C}$ permet de diminuer la solubilité ($1{,}7 \text{ g}\cdot\text{L}^{-1}$) et donc de récupérer une masse théorique légèrement supérieure ($9{,}74 \text{ g}$ au lieu de $9{,}56 \text{ g}$). Cependant, un refroidissement trop brutal ou excessif augmente la viscosité du milieu, favorise la précipitation rapide (et non la recristallisation sélective) et risque de piéger des impuretés solubles au sein du réseau cristallin en formation, **dégradant ainsi la pureté** au profit d'un gain de rendement infime.

3. **Interprétation des plages de fusion :**
   Un corps pur possède une température de changement d'état fixe et thermodynamiquement définie ($122{,}4 \text{ }^\circ\text{C}$ pour l'acide benzoïque). La présence d'impuretés au sein du solide brut perturbe l'agencement régulier du réseau cristallin. Selon les lois de la thermodynamique (abaissement du point de fusion), le mélange commence à fondre à une température inférieure à l'eutectique et s'étale sur une plage d'autant plus large que le taux d'impuretés est élevé. L'affinement de la plage de fusion ($122{,}4 \text{ }^\circ\text{C}$ net) atteste de l'efficacité de la purification.

4. **Calcul du rendement de la recristallisation :**
   Le rendement $\eta_{\text{recristallisation}}$ s'obtient en comparant la masse réellement isolée à la masse maximale théorique calculée à la question 2 :
   $$\eta_{\text{recristallisation}} = \frac{m_{\text{exp}}}{m_{\text{max}}} \times 100 = \frac{6{,}5 \text{ g}}{9{,}565 \text{ g}} \times 100 \approx 68 \text{ %}$$
   *Remarque critique :* Une perte de l'ordre de $32 \text{ \%}$ est inhérente à cette technique, due à la quantité de substance qui demeure nécessairement dissoute dans les eaux-mères à la température de filtration, ainsi qu'aux pertes matérielles lors des transferts successifs. C'est le compromis incontournable de la purification par recristallisation.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
