---
title: "Exercice 1 : Lithium-ion et recyclage des batteries EV"
description: "Application pratique du chapitre Oxydoréduction et batteries"
---

### 🌐 Contexte concret

Les véhicules électriques (VE) sont au cœur de la transition énergétique. Leur composant le plus stratégique est la batterie Lithium-ion ($\text{Li-ion}$). Lors du fonctionnement d'une telle batterie, les ions lithium $\text{Li}^+$ circulent dans un électrolyte entre les deux électrodes. 

À l'anode, constituée de graphite $\text{C}_6$, le lithium est inséré sous forme de $\text{Li}_x\text{C}_6$. À la cathode, il s'agit souvent d'un oxyde métallique mixte, par exemple le dioxyde de cobalt et de lithium $\text{LiCoO}_2$. 

Face à l'épuisement des ressources en cobalt et en lithium, le recyclage des batteries usagées est devenu un enjeu environnemental et économique majeur. L'une des étapes clés du recyclage hydrométallurgique consiste à lissez les métaux par voie chimique, en réduisant les ions cobalt $\text{Co}^{3+}$ en ions cobalt $\text{Co}^{2+}$ solubles en milieu acide.

---

### ❓ Énoncé

On s'intéresse au fonctionnement d'une batterie $\text{Li-ion}$ et à une étape de son recyclage.

1. **Rappel de cours :** Définir une oxydation et une réduction en termes de perte ou de gain d'électrons.
2. **Fonctionnement (Décharge) :** À la cathode, le matériau actif est $\text{LiCoO}_2$. Lors de la décharge, la réaction globale s'écrit :
   $$\text{Li}_x\text{C}_6 + \text{Li}_{1-x}\text{CoO}_2 \ce{->} \text{C}_6 + \text{LiCoO}_2$$
   Identifier l'espèce qui subit une oxydation et celle qui subit une réduction en déterminant les nombres d'oxydation (ou en s'aidant des demi-équations).
3. **Recyclage :** Pour récupérer le cobalt présent dans $\text{LiCoO}_2$, on traite les cathodes broyées avec une solution d'acide sulfurique contenant du peroxyde d'hydrogène $\text{H}_2\text{O}_2$ (qui joue le rôle de réducteur). Le couple oxydant/réducteur impliqué pour le cobalt est $\text{Co}^{3+}_{(\text{aq})} / \text{Co}^{2+}_{(\text{aq})}$ et celui pour l'oxygène/peroxyde est $\text{O}_{2\text{(g)}} / \text{H}_2\text{O}_2\text{}_{(\text{aq})}$.
   Écrire les deux demi-équations électroniques associées, puis l'équation de la réaction redox qui permet de passer du cobalt(III) au cobalt(II).

---

### 💡 Indice

- **Question 1 :** Pensez au moyen mnémotechnique "OIL RIG" (Oxidation Is Loss, Reduction Is Gain) ou "REGAU" (REduction = GAtn d'Electrons).
- **Question 2 :** L'anode (carbone) perd des électrons (oxydation) tandis que la cathode gagne des électrons. Le lithium passe de l'état neutre (dans l'anode) à l'état ionique $\text{Li}^+$ (dans $\text{LiCoO}_2$).
- **Question 3 :** Écrivez d'abord chaque demi-équation en respectant la conservation de la matière (éléments $O$ et $H$ avec $\text{H}^+$ et $\text{H}_2\text{O}$ en milieu acide) et de la charge. Ensuite, ajustez les coefficients pour que le nombre d'électrons échangés soit le même.

---

### 📋 Correction détaillée pas à pas

#### 1. Définitions
- Une **oxydation** est une **perte** d'électrons.
- Une **réduction** est un **gain** d'électrons.

#### 2. Identification lors de la décharge
Au cours de la décharge, le lithium quitte l'anode en graphite $\text{Li}_x\text{C}_6$ pour aller vers la cathode. 
- L'espèce $\text{Li}_x\text{C}_6$ subit une **oxydation** (les atomes de lithium neutres se transformant en ions $\text{Li}^+$ en libérant des électrons) :
  $$\text{Li}_x\text{C}_6 \ce{->} x\text{Li}^+ + x\text{e}^- + \text{C}_6$$
- L'espèce contenant le cobalt ($\text{Li}_{1-x}\text{CoO}_2$) subit une **réduction** car les ions cobalt captent les électrons libérés par le circuit extérieur pour maintenir la neutralité électrique en intégrant les ions $\text{Li}^+$.

#### 3. Équation de la réaction de recyclage
* **Étape a : Demi-équation du couple du cobalt $\text{Co}^{3+} / \text{Co}^{2+}$**
  Le cobalt passe de l'état $+3$ à l'état $+2$ en gagnant un électron :
  $$\text{Co}^{3+}_{(\text{aq})} + \text{e}^- \ce{<=>} \text{Co}^{2+}_{(\text{aq})}$$
  *(C'est une réduction).*

* **Étape b : Demi-équation du couple $\text{O}_{2\text{(g)}} / \text{H}_2\text{O}_2\text{}_{(\text{aq})}$**
  Le peroxyde d'hydrogène agit comme réducteur et s'oxyde en dioxygènes $\text{O}_2$ en milieu acide :
  $$\text{H}_2\text{O}_2\text{}_{(\text{aq})} \ce{->} \text{O}_{2\text{(g)}} + 2\text{H}^+_{(\text{aq})} + 2\text{e}^-$$
  *(C'est une oxydation).*

* **Étape c : Équation bilan de la réaction redox**
  Pour que le nombre d'électrons cédés soit égal au nombre d'électrons captés, il faut multiplier la première demi-équation par $2$ :
  $$2\text{Co}^{3+}_{(\text{aq})} + 2\text{e}^- \ce{->} 2\text{Co}^{2+}_{(\text{aq})}$$
  $$\text{H}_2\text{O}_2\text{}_{(\text{aq})} \ce{->} \text{O}_{2\text{(g)}} + 2\text{H}^+_{(\text{aq})} + 2\text{e}^-$$

  En additionnant les deux demi-équations, les électrons s'annulent :
  $$2\text{Co}^{3+}_{(\text{aq})} + \text{H}_2\text{O}_2\text{}_{(\text{aq})} \ce{->} 2\text{Co}^{2+}_{(\text{aq})} + \text{O}_{2\text{(g)}} + 2\text{H}^+_{(\text{aq})}$$

Cette réaction permet de transformer le cobalt insoluble de la cathode usagée en ions $\text{Co}^{2+}$ aqueux, facilement récupérables par la suite pour fabriquer de nouvelles batteries $\text{Li-ion}$.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
