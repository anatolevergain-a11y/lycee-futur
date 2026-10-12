---
title: "Exercice 1 : Formes d'inégalités et outils de mesure (Gini, déciles)"
description: "Application pratique du chapitre Inégalités et justice sociale"
---

### 🌐 Contexte & Données scientifiques

L'analyse de la structure sociale et des inégalités économiques repose sur des outils statistiques rigoureux. Pour appréhender la distribution des revenus au sein de la population française, les économistes et sociologues utilisent notamment les déciles et le coefficient de Gini. 

Considérons une population hypothétique mais représentative de $100 \text{ individus}$ (ou ménages) classés par ordre croissant de revenus salariaux et patrimoniaux. La masse totale du revenu disponible s'élève à $300\,000 \text{ €}$. 

L'analyse de la concentration des revenus de cette population fournit les données agrégées suivantes :
* Les $20\%$ les plus pauvres (deux premiers déciles cumulés) perçoivent $8\%$ de la masse totale des revenus.
* Les $50\%$ les plus pauvres (médiane) perçoivent $25\%$ de la masse totale des revenus.
* Le rapport interdécile $\frac{D_9}{D_1}$ est calculé à $5{,}2$.
* La courbe de Lorenz associée à cette distribution s'écarte de la bissectrice de la manière suivante : l'aire située entre la bissectrice (égalité parfaite) et la courbe de Lorenz est évaluée à $0{,}32$, tandis que l'aire totale sous la bissectrice est de $0{,}5$.

---

### ❓ Énoncé

1. **Définition et calcul (Niveau 1) :** Définir ce qu'est le neuvième décile ($D_9$) et le premier décile ($D_1$). En sachant que le revenu seuil du premier décile ($D_1$) s'établit à $1\,200 \text{ €}$ par mois, calculez le revenu seuil du neuvième décile ($D_9$). Interprétez le rapport interdécile $\frac{D_9}{D_1} = 5{,}2$ dans le cadre de ce modèle.
2. **Analyse statistique (Niveau 2) :** Calculez le coefficient de Gini pour cette population à partir des données d'aires fournies. Rappelez la formule générale du coefficient de Gini en fonction de l'aire de concentration.
3. **Esprit critique et limites (Niveau 3) :** À partir des résultats précédents et de vos connaissances, discutez des limites méthodologiques du coefficient de Gini et des déciles. En quoi ces outils statistiques masquent-ils certaines dimensions des inégalités (notamment l'hétérogénéité infradécile et la distinction entre flux de revenus et stock de patrimoine) ?

---

### 💡 Indice de méthode

* **Pour la question 1 :** Rappelez qu'un rapport interdécile compare la valeur seuil séparant les $10\%$ les plus riches des autres ($D_9$) à celle séparant les $10\%$ les plus pauvres du reste de la population ($D_1$). Utilisez l'expression algébrique : $\text{Rapport} = \frac{D_9}{D_1}$.
* **Pour la question 2 :** Le coefficient de Gini ($G$) se calcule par le rapport de l'aire située entre la ligne d'équidistribution parfaite et la courbe de Lorenz (notée $A$) sur l'aire totale située sous la ligne d'équidistribution (notée $A + B$, qui vaut toujours $0{,}5$ dans un repère normé de $1$ par $1$). Soit : $G = \frac{A}{A + B}$.
* **Pour la question 3 :** Songez au fait qu'un indice synthétique agrégé (comme Gini) ne renseigne ni sur la structure des inégalités (haut de distribution vs bas de distribution) ni sur les inégalités multidimensionnelles (logement, santé, éducation).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul et interprétation du rapport interdécile
* **Définition :** Le premier décile ($D_1$) est la valeur du revenu qui sépare les $10\%$ les plus pauvres de la population du reste des $90\%$. Le neuvième décile ($D_9$) est la valeur du revenu qui sépare les $90\%$ les plus modestes des $10\%$ les plus aisés.
* **Calcul du $D_9$ :** 
  L'énoncé donne le rapport interdécile $\frac{D_9}{D_1} = 5{,}2$ et $D_1 = 1\,200 \text{ €}$.
  $$D_9 = 5{,}2 \times D_1$$
  $$D_9 = 5{,}2 \times 1\,200 \text{ €} = 6\,240 \text{ €}$$
* **Interprétation :** Le seuil de revenu des $10\%$ les plus riches est 5,2 fois supérieur à celui des $10\%$ les plus pauvres. Cela met en évidence une forte dispersion des revenus aux extrémités de la distribution, témoignant d'inégalités significatives au sein de cette population.

#### 2. Calcul du coefficient de Gini
* **Rappel théorique :** Le coefficient de Gini ($G$) mesure le degré d'inégalité d'une distribution. Il est défini par la formule :
  $$G = \frac{A}{A + B}$$
  Où $A$ est l'aire entre la bissectrice (égalité parfaite) et la courbe de Lorenz, et $A + B$ représente l'aire sous la bissectrice (égale à $0{,}5$ dans un plan orthonormé normé à $1$).
* **Application numérique :**
  D'après l'énoncé, l'aire $A = 0{,}32$ et l'aire sous la bissectrice $A + B = 0{,}5$.
  $$G = \frac{0{,}32}{0{,}5} = 0{,}64$$
* **Interprétation scientifique :** Le coefficient de Gini varie théoriquement de $0$ (égalité parfaite, où la courbe de Lorenz se confond avec la bissectrice) à $1$ (inégalité maximale, où un seul individu détient la totalité de la masse de revenu). Ici, $G = 0{,}64$, ce qui indique une concentration très élevée des revenus, proche d'une forte inégalité structurelle.

#### 3. Discussion critique des outils de mesure
* **Limites des déciles et du rapport interdécile :** 
  Les déciles ne mesurent que la dispersion relative. Le rapport $\frac{D_9}{D_1}$ présente l'inconvénient majeur de faire abstraction de $80\%$ de la population (les déciles $D_2$ à $D_8$). Il ne renseigne en rien sur ce qui se passe au sommet de la hiérarchie sociale (notamment la concentration extrême au sein du dernier décile, entre le $99^e$ et le $100^e$ centile, souvent captée par les hauts revenus et les ultra-riches).
* **Limites du coefficient de Gini :**
  S'il synthétise l'ensemble de la distribution via la courbe de Lorenz, le coefficient de Gini est insensible aux transferts de revenus s'ils n'altèrent pas le classement ordinal des individus. De plus, c'est un indicateur unidimensionnel : il mesure les inégalités de *flux* (revenus disponibles ou salaires), mais omet les inégalités de *stock* (le patrimoine), lesquelles s'avèrent souvent encore plus concentrées (le patrimoine net des ménages affichant des coefficients de Gini structurellement supérieurs à ceux des revenus).
* **Conclusion nuancée :** Ces outils statistiques sont indispensables pour objectiver les hiérarchies socio-économiques et éclairer la décision publique en matière de justice sociale (redistribution, impôts progressifs, prestations sociales). Néanmoins, leur lecture doit être complétée par d'autres indicateurs (part du top $1\%$, taux de pauvreté monétaire) et par une approche qualitative des inégalités multidimensionnelles (conditions de vie, accès aux services publics).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
