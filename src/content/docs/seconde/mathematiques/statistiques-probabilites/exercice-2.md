---
title: "Exercice 2 : Probabilités dans les contrôles de qualité"
description: "Application pratique du chapitre Statistiques et probabilités"
---

### 🌐 Contexte & Données scientifiques

Dans les processus de fabrication industrielle à grande échelle, le contrôle de qualité est un enjeu économique et sanitaire majeur. L'inspection exhaustive de chaque produit (contrôle destructif ou coût prohibitif) étant impossible, les industriels recourent à l'échantillonnage probabiliste. 

Considérons une entreprise produisant des micro-capteurs destinés à l'industrie automobile. Soit $E$ l'événement « le capteur présente un défaut de fabrication » et $T$ l'événement « le test de qualité en usine déclare le capteur défectueux ». 

En raison des limites physiques des capteurs optiques et des incertitudes de mesure sur les lignes d'assemblage à cadences élevées, le test n'est pas infaillible. D'après les relevés statistiques de la chaîne de production :
* La proportion réelle de capteurs défectueux sortant des chaînes est de $p = 2\,\%$, soit $P(E) = 0{,}02$.
* La probabilité qu'un capteur réellement défectueux soit détecté comme tel par le test est de $95\,\%$.
* La probabilité qu'un capteur sain soit déclaré défectueux à tort (faux positif) est de $3\,\%$.

---

### ❓ Énoncé

1. **Modélisation :** Représenter cette situation à l'aide d'un arbre pondéré de probabilités en définissant clairement les événements et leurs probabilités associées.
2. **Calcul de probabilité conjointe :** Calculer la probabilité qu'un capteur soit à la fois sain et déclaré défectueux par le test.
3. **Probabilité totale :** Démontrer que la probabilité qu'un capteur quelconque soit déclaré défectueux par le test est $P(T) = 0{,}0484$.
4. **Analyse critique et compromis industriel :** 
   Un client achète un lot de capteurs déclarés défectueux par le test de l'usine pour analyse. Quelle est la probabilité que ce capteur soit *réellement* défectueux ? 
   À partir de ce résultat, discutez des limites du modèle de contrôle : quel est l'impact économique et industriel d'un taux élevé de faux positifs pour une entreprise ?

---

### 💡 Indice de méthode

* Pour la **question 1**, utilisez les notations $E$ et $\bar{E}$ (événement contraire). Les branches du second niveau de l'arbre dépendent des probabilités conditionnelles données dans le texte (par exemple, « sachant que le capteur est défectueux... » s'écrit $P_E(T)$).
* Pour la **question 3**, mobilisez la formule des probabilités totales en identifiant les deux configurations possibles menant à l'événement $T$.
* Pour la **question 4**, calculez une probabilité conditionnelle « à l'envers » ($P_T(E)$) à l'aide des résultats précédents. Interprétez la valeur obtenue au regard des exigences de fiabilité industrielle.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation par un arbre pondéré
Définissons les notations :
* $E$ : « Le capteur est défectueux », de probabilité $P(E) = 0{,}02$. Son événement contraire $\bar{E}$ (« le capteur est sain ») a pour probabilité $P(\bar{E}) = 1 - 0{,}02 = 0{,}98$.
* $T$ : « Le capteur est déclaré défectueux par le test ».

D'après l'énoncé, nous disposons des probabilités conditionnelles suivantes :
* $P_E(T) = 0{,}95$ (probabilité que le test soit positif sachant le capteur défectueux).
* Par conséquent, $P_E(\bar{T}) = 1 - 0{,}95 = 0{,}05$ (faux négatif).
* $P_{\bar{E}}(T) = 0{,}03$ (probabilité que le test soit positif sachant le capteur sain, soit le taux de faux positif).
* Par conséquent, $P_{\bar{E}}(\bar{T}) = 1 - 0{,}03 = 0{,}97$.

#### 2. Calcul de la probabilité conjointe
Nous cherchons la probabilité que le capteur soit à la fois sain ($\bar{E}$) et déclaré défectueux ($T$), c'est-à-dire $P(\bar{E} \cap T)$.
D'après la formule des probabilités composées :
$$P(\bar{E} \cap T) = P(\bar{E}) \times P_{\bar{E}}(T)$$
$$P(\bar{E} \cap T) = 0{,}98 \times 0{,}03 = 0{,}0294$$
Il y a donc $2{,}94\,\%$ de chance qu'un capteur soit sain tout en étant rejeté à tort par le test.

#### 3. Probabilité totale de l'événement $T$
Les événements $E$ et $\bar{E}$ forment une partition de l'univers. D'après la formule des probabilités totales :
$$P(T) = P(E \cap T) + P(\bar{E} \cap T)$$

Calculons d'abord $P(E \cap T)$ :
$$P(E \cap T) = P(E) \times P_E(T) = 0{,}02 \times 0{,}95 = 0{,}0190$$

En sommant les deux contributions :
$$P(T) = 0{,}0190 + 0{,}0294 = 0{,}0484$$
La probabilité qu'un capteur soit déclaré défectueux par le contrôle qualité est bien de $0{,}0484$ (soit $4{,}84\,\%$).

#### 4. Analyse critique et compromis industriel
Nous cherchons à évaluer la fiabilité du test du point de vue de la décision finale, c'est-à-dire la probabilité conditionnelle $P_T(E)$ :
$$P_T(E) = \frac{P(E \cap T)}{P(T)} = \frac{0{,}0190}{0{,}0484} \approx 0{,}3926$$

Soit environ **$39{,}3\,\%$**. 

**Analyse critique :** 
Malgré un test semblant performant en apparence ($95\,\%$ de détection des vrais défauts et seulement $3\,\%$ de faux positifs), **la probabilité qu'un capteur rejeté par le test soit réellement défectueux n'est que de $39{,}3\,\%$**. Cela s'explique par la rareté initiale du défaut ($p = 2\,\%$ sur la chaîne) : le nombre de faux positifs ($3\,\%$ des $98\,\%$ de pièces saines, soit $0{,}0294$) est supérieur au nombre de vrais positifs ($95\,\%$ des $2\,\%$ de pièces défectueuses, soit $0{,}0190$).

* **Conséquence industrielle et économique :** Un seuil de faux positifs de $3\,\%$ conduit à jeter ou à soumettre à une analyse humaine (coûteuse) un volume important de pièces parfaitement saines. L'industriel fait face à un compromis complexe :
  1. *Réduire les faux positifs* pour éviter le gaspillage de matière première et les coûts de re-test, ce qui risque d'augmenter les faux négatifs (laisser passer des capteurs défectueux chez le client final, risquant des rappels industriels majeurs).
  2. *Améliorer la précision intrinsèque du capteur de mesure*, ce qui implique des investissements technologiques plus lourds.
Le modèle probabiliste montre ici qu'un test mathématiquement « bon » individuellement peut s'avérer trompeur à l'échelle globale en raison des proportions de la population testée.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
