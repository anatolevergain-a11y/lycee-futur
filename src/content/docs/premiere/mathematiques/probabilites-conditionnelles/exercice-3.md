---
title: "Exercice 3 : Prise de décision sous incertitude"
description: "Application pratique du chapitre Probabilités conditionnelles"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la gestion des risques sanitaires et industriels, l'évaluation des méthodes de dépistage précoce repose sur des modèles probabilistes. Soit une pathologie rare au sein d'une population, touchant une fraction minime des individus. On souhaite évaluer la pertinence de la mise en place d'un test de dépistage biologique automatisé.

Soit $C$ l'événement « l'individu est porteur de la pathologie » et $T$ l'événement « le test de dépistage est positif ». 
D'après les données épidémiologiques et les spécifications techniques du fabricant du test :
- La prévalence de la maladie dans la population cible est de $P(C) = 0{,}01$ (soit $1\,\%$).
- La sensibilité du test (probabilité qu'il soit positif sachant que l'individu est porteur) est $P_C(T) = 0{,}98$.
- La spécificité du test (probabilité qu'il soit négatif sachant que l'individu est sain) est $P_{\bar{C}}(\bar{T}) = 0{,}95$.

Cependant, toute décision médicale ou industrielle génère des compromis économiques et humains : un faux positif entraîne des examens complémentaires coûteux et une anxiété injustifiée pour le patient, tandis qu'un faux négatif retarde la prise en charge thérapeutique.

---

### ❓ Énoncé

1. **Modélisation :** Représenter cette situation à l'aide d'un arbre pondéré. Calculer la probabilité de l'événement $T$, notée $P(T)$, en détaillant le calcul à l'aide de la formule des probabilités totales.
2. **Analyse critique :** Calculer la probabilité conditionnelle $P_T(C)$, c'est-à-dire la probabilité qu'un individu soit réellement malade sachant que son test est positif. Commenter ce résultat au regard de l'intuition commune et de la rareté de la pathologie.
3. **Prise de décision :** Si le seuil de rentabilité et de pertinence clinique d'un protocole de confirmation (second test plus lourd) exige qu'un patient testé positif ait au moins $20\,\%$ de chances d'être effectivement malade, le test de première intention est-il suffisant pour valider un diagnostic direct ?
4. **Prospective :** Supposons que l'on puisse modifier la technique de laboratoire pour faire passer la spécificité $P_{\bar{C}}(\bar{T})$ à $0{,}99$. Recalculer $P_T(C)$ avec cette nouvelle valeur. Conclure sur l'impact respectif de la sensibilité et de la spécificité dans le cas de pathologies à faible prévalence.

---

### 💡 Indice de méthode

- **Pour la question 1 :** Utilisez l'événement contraire $\bar{C}$ pour déterminer $P(\bar{C})$, puis appliquez la formule des probabilités totales en partitionnant l'univers avec $C$ et $\bar{C}$ : 
  $$P(T) = P(T \cap C) + P(T \cap \bar{C})$$
- **Pour la question 2 :** La définition mathématique d'une probabilité conditionnelle est $P_T(C) = \frac{P(C \cap T)}{P(T)}$. Prenez le temps de bien distinguer $P_C(T)$ (sensibilité) de $P_T(C)$ (valeur prédictive positive).
- **Pour la question 4 :** Observez comment la variation d'un paramètre des spécifications techniques influe directement sur le résultat mathématique, illustrant ainsi la notion de compromis en modélisation.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation par un arbre pondéré et calcul de $P(T)$
D'après l'énoncé, on a :
- $P(C) = 0{,}01$, donc $P(\bar{C}) = 1 - 0{,}01 = 0{,}99$.
- $P_C(T) = 0{,}98$, donc $P_C(\bar{T}) = 1 - 0{,}98 = 0{,}02$.
- $P_{\bar{C}}(\bar{T}) = 0{,}95$, donc $P_{\bar{C}}(T) = 1 - 0{,}95 = 0{,}05$ (taux de faux positifs).

D'après la formule des probabilités totales, les événements $C$ et $\bar{C}$ formant une partition de l'univers :
$$P(T) = P(C \cap T) + P(\bar{C} \cap T)$$
$$P(T) = P(C) \times P_C(T) + P(\bar{C}) \times P_{\bar{C}}(T)$$
$$P(T) = (0{,}01 \times 0{,}98) + (0{,}99 \times 0{,}05)$$
$$P(T) = 0{,}0098 + 0{,}0495 = 0{,}0593$$
La probabilité qu'un individu pris au hasard ait un test positif est donc de $0{,}0593$ (soit $5{,}93\,\%$).

#### 2. Analyse critique de la probabilité conditionnelle $P_T(C)$
Calculons la probabilité qu'un individu soit malade sachant que son test est positif (Valeur Prédictive Positive) :
$$P_T(C) = \frac{P(C \cap T)}{P(T)} = \frac{0{,}0098}{0{,}0593} \approx 0{,}1653$$
Soit environ $16{,}5\,\%$.

**Commentaire critique :** Ce résultat met en évidence un contre-intuitif mathématique puissant. Bien que le test soit extrêmement performant ($98\,\%$ de sensibilité et $95\,\%$ de spécificité), un individu dont le test est positif n'a qu'une chance sur six d'être réellement malade. Cela s'explique mathématiquement par la faiblesse de la prévalence ($1\,\%$) : le nombre de faux positifs (induits par les $5\,\%$ d'erreurs sur la grande masse des individus sains) est numériquement supérieur au nombre de vrais positifs.

#### 3. Prise de décision sous incertitude
Le protocole de confirmation exige un seuil minimal de $20\,\%$ ($0{,}20$) de certitude d'être malade suite à un test positif. 
Or, nous venons de calculer que $P_T(C) \approx 16{,}5\,\%$, ce qui est strictement inférieur à $20\,\%$.

**Conclusion décisionnelle :** Le test de première intention ne suffit pas pour valider un diagnostic direct ou enclencher des traitements lourds. Un protocole de décision rigoureux impose obligatoirement un second test de confirmation (ou une méthode orthogonale) pour lever l'incertitude statistique liée aux faux positifs.

#### 4. Prospective : Amélioration de la spécificité
Modifions les paramètres : la spécificité passe à $P_{\bar{C}}(\bar{T}) = 0{,}99$. 
Le nouveau taux de faux positifs devient : 
$$P_{\bar{C}}(T) = 1 - 0{,}99 = 0{,}01$$

Recalculons la probabilité totale de $T$ :
$$P(T) = (0{,}01 \times 0{,}98) + (0{,}99 \times 0{,}01) = 0{,}0098 + 0{,}0099 = 0{,}0197$$

Calculons la nouvelle valeur prédictive positive $P_T(C)$ :
$$P_T(C) = \frac{0{,}0098}{0{,}0197} \approx 0{,}4975$$
Soit environ $49{,}8\,\%$.

**Conclusion scientifique :** En augmentant la spécificité de seulement $4$ points (de $95\,\%$ à $99\,\%$), la probabilité d'être réellement malade sachant que le test est positif est multipliée par trois (passant de $16{,}5\,\%$ à près de $50\,\%$). Pour les maladies à faible prévalence, l'optimisation de la spécificité est donc un levier stratégique bien plus décisif que l'optimisation de la sensibilité pour fiabiliser la prise de décision sous incertitude.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
