---
title: "Exercice 2 : Combustion et empreinte carbone de carburants"
description: "Application pratique du chapitre Modélisation des transformations chimiques"
---

### 🌐 Contexte & Données scientifiques

La transition énergétique du secteur des transports soulève des questions complexes où l'analyse scientifique doit dépasser les slogans simplistes. L'évaluation de l'impact environnemental d'un carburant ne se limite pas à la simple mesure du dioxyde de carbone ($\text{CO}_2$) émis lors de son utilisation au pot d'échappement. Elle nécessite une approche globale, souvent dite « du puits à la roue » (*well-to-wheel*), qui intègre son mode de production, son transport et son efficacité énergétique.

Pour modéliser la phase d'utilisation, on étudie la combustion complète de deux hydrocarbures saturés (alcanes) :
1. L'octane ($\text{C}_8\text{H}_{18}$), molécule modèle représentative de l'essence fossile conventionnelle.
2. Le cyclohexane ($\text{C}_6\text{H}_{12}$), cyclane parfois utilisé comme étalon ou intermédiaire pétrochimique.

Les données thermodynamiques et stœchiométriques utiles sont regroupées ci-dessous :

*   Masses molaires atomiques : 
    *   $M(\text{C}) = 12{,}0 \text{ g}\cdot\text{mol}^{-1}$
    *   $M(\text{H}) = 1{,}0 \text{ g}\cdot\text{mol}^{-1}$
    *   $M(\text{O}) = 16{,}0 \text{ g}\cdot\text{mol}^{-1}$
*   Pouvoir calorifique massique (énergie libérée par kilogramme de carburant brûlé) :
    *   Pouvoir calorifique de l'octane : $\text{PC}(\text{octane}) \approx 44{,}4 \text{ MJ}\cdot\text{kg}^{-1}$
*   Données réglementaires : 
    *   La combustion complète d'un mole de tout alcane ou cycloalcane ne produit que du dioxyde de carbone $\text{CO}_2$ et de l'eau $\text{H}_2\text{O}$.

---

### ❓ Énoncé

1. **Modélisation de la transformation :** 
   Écrire l'équation chimique modélisant la combustion complète de l'octane ($\text{C}_8\text{H}_{18}$) dans le dioxyde de carbone ($\text{O}_2$). Ajuster les nombres stœchiométriques en respectant la conservation des éléments chimiques.

2. **Quantification molaire :** 
   À partir de l'équation précédente, déterminer la masse de dioxyde de carbone $\text{CO}_2$ émise lors de la combustion complète de $1{,}00 \text{ kg}$ d'octane. Exprimer le résultat en grammes ($\text{g}$).

3. **Analyse énergétique et comparative :** 
   Un véhicule thermique consomme en moyenne $7{,}0 \text{ L}$ d'essence aux $100 \text{ km}$. On assimilera cette essence à de l'octane pur (masse volumique de l'octane : $\rho = 0{,}70 \text{ g}\cdot\text{cm}^{-3}$). 
   Calculer la masse de $\text{CO}_2$ rejetée par ce véhicule pour parcourir $100 \text{ km}$.

4. **Esprit critique et limites du modèle :** 
   Un constructeur automobile affirme qu'un véhicule électrique alimenté par une électricité d'origine nucléaire émet $0 \text{ g}$ de $\text{CO}_2$ « à l'usage ». 
   En adoptant une démarche scientifique rigoureuse, expliquez pourquoi cette affirmation, bien que mathématiquement exacte pour l'utilisation directe, présente une limite conceptuelle majeure quant à l'évaluation globale de l'empreinte carbone.

---

### 💡 Indice de méthode

*   *Question 1 :* Procédez par étapes pour l'ajustement stœchiométrique : équilibrez d'abord l'élément carbone $\text{C}$, puis l'élément hydrogène $\text{H}$, et enfin l'élément oxygène $\text{O}$ en dernier.
*   *Question 2 :* Calculez d'abord la quantité de matière (en moles) d'octane dans $1{,}00 \text{ kg}$, puis utilisez les proportions de l'équation bilan pour trouver la quantité de $\text{CO}_2$ produite, avant de convertir en masse.
*   *Question 3 :* Pensez à convertir le volume de carburant en masse à l'aide de la masse volumique ($\rho = \frac{m}{V}$).
*   *Question 4 :* Interrogez-vous sur le cycle de vie complet du système technique (extraction des matières premières, fabrication des batteries, recyclage, construction des infrastructures de production d'énergie).

---

### 📋 Correction détaillée pas à pas

#### 1. Équation de la combustion complète de l'octane
La combustion complète d'un hydrocarbure ($\text{C}_x\text{H}_y$) réagit avec le dioxyde de carbone ($\text{O}_2$) pour former exclusivement du dioxyde de carbone ($\text{CO}_2$) et de l'eau ($\text{H}_2\text{O}$).

L'équation non ajustée s'écrit :
$$\text{C}_8\text{H}_{18\text{ (l)}} + \text{O}_{2\text{ (g)}} \longrightarrow \text{CO}_{2\text{ (g)}} + \text{H}_2\text{O}_{\text{ (g)}}$$

*   **Ajustement de l'élément carbone :** L'octane possède $8$ atomes de carbone, il faut donc $8$ molécules de $\text{CO}_2$ :
    $$\text{C}_8\text{H}_{18\text{ (l)}} + \text{O}_{2\text{ (g)}} \longrightarrow 8\,\text{CO}_{2\text{ (g)}} + \text{H}_2\text{O}_{\text{ (g)}}$$
*   **Ajustement de l'élément hydrogène :** L'octane possède $18$ atomes d'hydrogène. Chaque molécule d'eau en contient $2$, il faut donc $9$ molécules de $\text{H}_2\text{O}$ ($9 \times 2 = 18$) :
    $$\text{C}_8\text{H}_{18\text{ (l)}} + \text{O}_{2\text{ (g)}} \longrightarrow 8\,\text{CO}_{2\text{ (g)}} + 9\,\text{H}_2\text{O}_{\text{ (g)}}$$
*   **Ajustement de l'élément oxygène :** Du côté des produits, nous avons $(8 \times 2) + (9 \times 1) = 16 + 9 = 25$ atomes d'oxygène, soit $\frac{25}{2}$ molécules de $\text{O}_2$.

L'équation bilan stœchiométrique finale est :
$$\text{C}_8\text{H}_{18\text{ (l)}} + \frac{25}{2}\,\text{O}_{2\text{ (g)}} \longrightarrow 8\,\text{CO}_{2\text{ (g)}} + 9\,\text{H}_2\text{O}_{\text{ (g)}}$$
*(Il est également possible de multiplier tous les coefficients par $2$ pour n'avoir que des nombres entiers).*

---

#### 2. Masse de $\text{CO}_2$ émise par $1{,}00 \text{ kg}$ d'octane
*   **Étape A : Calcul de la masse molaire de l'octane ($M_{\text{octane}}$)**
    $$M(\text{C}_8\text{H}_{18}) = (8 \times M(\text{C})) + (18 \times M(\text{H}))$$
    $$M(\text{C}_8\text{H}_{18}) = (8 \times 12{,}0) + (18 \times 1{,}0) = 96{,}0 + 18{,}0 = 114{,}0 \text{ g}\cdot\text{mol}^{-1}$$

*   **Étape B : Calcul de la quantité de matière d'octane dans $1{,}00 \text{ kg}$ ($1000 \text{ g}$)**
    $$n(\text{C}_8\text{H}_{18}) = \frac{m}{M} = \frac{1000 \text{ g}}{114{,}0 \text{ g}\cdot\text{mol}^{-1}} \approx 8{,}772 \text{ mol}$$

*   **Étape C : Détermination de la quantité de matière de $\text{CO}_2$ produite**
    D'après les coefficients stœchiométriques de l'équation : $1 \text{ mole}$ d'octane consommée produit $8 \text{ moles}$ de $\text{CO}_2$.
    $$n(\text{CO}_2) = 8 \times n(\text{C}_8\text{H}_{18}) = 8 \times 8{,}772 \text{ mol} \approx 70{,}18 \text{ mol}$$

*   **Étape D : Conversion en masse de $\text{CO}_2$**
    La masse molaire du dioxyde de carbone est : $M(\text{CO}_2) = 12{,}0 + (2 \times 16{,}0) = 44{,}0 \text{ g}\cdot\text{mol}^{-1}$.
    $$m(\text{CO}_2) = n(\text{CO}_2) \times M(\text{CO}_2) = 70{,}18 \text{ mol} \times 44{,}0 \text{ g}\cdot\text{mol}^{-1} \approx 3088 \text{ g} \approx 3{,}09 \text{ kg}$$
    *Conclusion :* La combustion complète de $1{,}00 \text{ kg}$ d'octane rejette environ $3{,}09 \text{ kg}$ de $\text{CO}_2$.

---

#### 3. Masse de $\text{CO}_2$ rejetée aux $100 \text{ km}$ pour un véhicule thermique
*   **Étape A : Calcul de la masse de carburant consommée pour $100 \text{ km}$**
    Le volume consommé est $V = 7{,}0 \text{ L} = 7{,}0 \text{ dm}^3 = 7000 \text{ cm}^3$.
    La masse volumique est $\rho = 0{,}70 \text{ g}\cdot\text{cm}^{-3}$.
    $$m = \rho \times V = 0{,}70 \text{ g}\cdot\text{cm}^{-3} \times 7000 \text{ cm}^3 = 4900 \text{ g} = 4{,}9 \text{ kg}$$

*   **Étape B : Calcul de la masse de $\text{CO}_2$ associée**
    D'après la question précédente, $1 \text{ kg}$ d'octane produit $3{,}088 \text{ kg}$ de $\text{CO}_2$.
    $$m(\text{CO}_2)_{\text{total}} = 4{,}9 \text{ kg} \times 3{,}088 \text{ kg}\cdot\text{kg}^{-1} \approx 15{,}1 \text{ kg}$$
    *Conclusion :* Ce véhicule émet environ $15 \text{ kg}$ de $\text{CO}_2$ tous les $100 \text{ km}$ uniquement par la combustion du carburant.

---

#### 4. Analyse critique et limites du modèle « zéro émission »
L'affirmation selon laquelle un véhicule électrique émet $0 \text{ g}$ de $\text{CO}_2$ est **scientifiquement exacte** si l'on restreint strictement le système étudié au fonctionnement du véhicule en phase roulante (au niveau du moteur et de l'absence de pot d'échappement). 

Cependant, d'un point de vue scientifique et systémique, cette affirmation comporte plusieurs limites majeures :
1.  **L'analyse du cycle de vie (ACV) :** La fabrication de la batterie (extraction du lithium, du cobalt, du nickel, raffinage, assemblage) et la construction du véhicule automobile nécessitent de l'énergie, souvent fossile à l'échelle mondiale, générant des émissions substantielles de $\text{CO}_2$ en amont.
2.  **La source de production de l'électricité :** Bien que l'énergie nucléaire n'émette pas directement de $\text{CO}_2$ lors de la fission dans le réacteur, la chaîne complète (extraction de l'uranium, enrichissement, construction et démantèlement des centrales, traitement des déchets) présente une empreinte non nulle, bien que très inférieure à celle des énergies fossiles.
3.  *Bilan :* Le modèle mathématique simplificateur « d'émissions nulles » occulte les transferts de pollution (délocalisation des émissions de la route vers les sites industriels et d'extraction). Une évaluation rigoureuse impose de raisonner en termes d'impact global et non sectoriel.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
