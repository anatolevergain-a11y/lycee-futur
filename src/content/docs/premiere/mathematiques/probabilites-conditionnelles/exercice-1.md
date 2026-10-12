---
title: "Exercice 1 : Arbres pondérés et formule de Bayes"
description: "Application pratique du chapitre Probabilités conditionnelles"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du contrôle de qualité en santé publique, l'évaluation de la fiabilité des tests de dépistage constitue un enjeu majeur. On s'intéresse à un test sérologique de dépistage d'une pathologie virale émergeante dans une population donnée. 

Les données épidémiologiques et métrologiques validées par les autorités sanitaires sont les suivantes :
* **Prévalence** : La proportion réelle de personnes infectées dans la population cible est de $p = 0{,}02$ (soit $2\,\%$).
* **Sensibilité du test** ($\text{Se}$) : La probabilité qu'un individu malade ait un test positif est de $0{,}95$.
* **Spécificité du test** ($\text{Sp}$) : La probabilité qu'un individu sain ait un test négatif est de $0{,}90$.

*Note méthodologique :* Un test parfait aurait une sensibilité et une spécificité égales à $1$. En réalité, tout test de mesure ou de diagnostic présente des compromis techniques : augmenter la sensibilité au détriment de la spécificité génère un taux plus élevé de faux positifs, ce qui peut saturer les structures de confirmation et induire une anxiété injustifiée, tandis qu'une faible sensibilité génère des faux négatifs dangereux pour la santé publique.

---

### ❓ Énoncé

Soit $M$ l'événement « l'individu est effectivement infecté par la pathologie » et $T$ l'événement « le test de dépistage est positif ». On note $\bar{M}$ et $\bar{T}$ les événements contraires respectifs.

1. **Modélisation :** Traduire les données de l'énoncé en probabilities (marginales et conditionnelles), puis représenter cette situation à l'aide d'un arbre pondéré.
2. **Calcul de probabilité conjointe :** Calculer la probabilité qu'un individu pris au hasard dans la population soit infecté *et* obtienne un test positif.
3. **Probabilité totale :** Démontrer que la probabilité totale qu'un individu obtienne un test positif est $P(T) = 0{,}116$.
4. **Esprit critique et Bayes :** Calculer la probabilité qu'un individu dont le test est positif soit *effectivement* malade, c'est-à-dire $P_T(M)$. Commenter ce résultat au regard de la spécificité du test et de la faible prévalence de la maladie.

---

### 💡 Indice de méthode

* Pour la **question 1**, rappelez-vous qu'un arbre pondéré se construit en plaçant les probabilités de la loi marginale au premier niveau, et les probabilités conditionnelles au deuxième niveau. La somme des probabilités issues d'un même nœud est toujours égale à $1$.
* Pour la **question 3**, utilisez la formule des probabilités totales en identifiant les deux chemins de l'arbre qui mènent à l'événement $T$.
* Pour la **question 4**, l'application de la formule de Bayes découle directement de la définition d'une probabilité conditionnelle : 
  $$P_T(M) = \frac{P(M \cap T)}{P(T)}$$
  Analysez si un résultat surprenant (contre-intuitif) émerge de ce calcul.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation et arbre pondéré
D'après l'énoncé, nous traduisons les hypothèses ainsi :
* La prévalence : $P(M) = 0{,}02$, donc $P(\bar{M}) = 1 - 0{,}02 = 0{,}98$.
* La sensibilité : $P_M(T) = 0{,}95$, donc $P_M(\bar{T}) = 1 - 0{,}95 = 0{,}05$.
* La spécificité : $P_{\bar{M}}(\bar{T}) = 0{,}90$, donc $P_{\bar{M}}(T) = 1 - 0{,}90 = 0{,}10$ (ce qui correspond au taux de faux positifs).

L'arbre pondéré s'articule de la manière suivante :
```text
                  /--- (0.95) --- T   : M ∩ T
      /-- (0.02) -
     /            \--- (0.05) --- T_bar : M ∩ T_bar
    - 
     \            /--- (0.10) --- T   : M_bar ∩ T
      \-- (0.98) -
                  \--- (0.90) --- T_bar : M_bar ∩ T_bar
```

#### 2. Probabilité de l'événement conjoint $M \cap T$
La probabilité de l'intersection de deux événements se calcule à l'aide de la formule des probabilités composées :
$$P(M \cap T) = P(M) \times P_M(T)$$
$$P(M \cap T) = 0{,}02 \times 0{,}95 = 0{,}019$$
Il y a donc $1{,}9\,\%$ de la population totale qui est à la fois infectée et testée positive.

#### 3. Probabilité totale de l'événement $T$
Les événements $M$ et $\bar{M}$ forment une partition de l'univers. D'après la formule des probabilités totales :
$$P(T) = P(M \cap T) + P(\bar{M} \cap T)$$
Calculons d'abord le second terme (les faux positifs) :
$$P(\bar{M} \cap T) = P(\bar{M}) \times P_{\bar{M}}(T) = 0{,}98 \times 0{,}10 = 0{,}098$$
En additionnant les deux :
$$P(T) = 0{,}019 + 0{,}098 = 0{,}116$$
La probabilité qu'un individu pris au hasard ait un test positif est de $0{,}116$ (soit $11{,}6\,\%$).

#### 4. Formule de Bayes et analyse critique
La probabilité recherchée est $P_T(M)$. Par définition des probabilités conditionnelles :
$$P_T(M) = \frac{P(M \cap T)}{P(T)}$$
En remplaçant par les valeurs calculées aux questions précédentes :
$$P_T(M) = \frac{0{,}019}{0{,}116} \approx 0{,}1638$$
Soit environ $16{,}4\,\%$.

**Analyse scientifique et esprit critique :**
Malgré un test de haute performance (une sensibilité de $95\,\%$ et une spécificité de $90\,\%$), la probabilité qu'un individu ayant un test positif soit réellement malade n'est que de $16{,}4\,\%$. 
Ce résultat, mathématiquement rigoureux, s'explique par la **faible prévalence** de la maladie ($2\,\%$). Le nombre de faux positifs ($0{,}098 \times \text{effectif}$) lamine mathématiquement le nombre de vrais positifs ($0{,}019 \times \text{effectif}$) parce que la population saine est numériquement très supérieure à la population malade. 

*Limites et compromis :* Ce modèle montre qu'en situation de dépistage massif d'une maladie rare, un test positif isolé ne pose pas un diagnostic définitif. Il nécessite impérativement un second test de confirmation (plus spécifique ou fondé sur une autre technologie, type RT-PCR) afin d'éviter les erreurs de prise en charge médicale, illustrant l'importance cruciale de coupler l'analyse statistique aux décisions de santé publique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
