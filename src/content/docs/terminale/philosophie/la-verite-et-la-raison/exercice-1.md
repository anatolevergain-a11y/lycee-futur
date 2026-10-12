---
title: "Exercice 1 : Démontrer et croire : les limites du savoir scientifique"
description: "Application pratique du chapitre La Vérité et la Raison"
---

### 🌐 Contexte & Données scientifiques

En épistémologie, la distinction entre la croyance (même fondée ou intime) et la démonstration scientifique repose sur la méthode expérimentale, la falsifiabilité (Karl Popper) et l'analyse statistique des risques. Face à des enjeux complexes (sanitaires, environnementaux ou technologiques), la science ne produit pas des « vérités absolues » au sens dogmatique, mais des modèles probabilistes soumis à l'incertitude.

Considérons un test de dépistage d'une maladie rare au sein d'une population. Les données épidémiologiques et métrologiques sont les suivantes :
* Prévalence de la maladie dans la population : $1 \text{ personne sur } 1000$, soit une probabilité a priori $P(M) = 0{,}001$.
* Sensibilité du test (probabilité que le test soit positif si la personne est malade) : $P(T^+ \mid M) = 0{,}99$ (soit $99 \text{ \%}$).
* Spécificité du test (probabilité que le test soit négatif si la personne est saine) : $P(T^- \mid \overline{M}) = 0{,}98$ (soit $98 \text{ \%}$, ce qui implique un taux de faux positifs de $2 \text{ \%}$, soit $P(T^+ \mid \overline{M}) = 0{,}02$).

Soit $M$ l'événement « la personne est malade » et $T^+$ l'événement « le test est positif ». 

---

### ❓ Énoncé

1. **Analyse logique et probabiliste :** En utilisant le théorème de Bayes, calculez la probabilité qu'une personne soit réellement malade sachant que son test est positif, notée $P(M \mid T^+)$. Exprimez le résultat en pourcentage.
2. **Interprétation critique :** Ce résultat contredit souvent l'intuition première (qui assimile rapidité du test et certitude absolue). Comment cette distorsion entre la croyance spontanée en l'infaillibilité de la technique et la démonstration mathématique éclaire-t-elle la notion de « limite du savoir scientifique » ?
3. **Limites épistémologiques du modèle :** Si l'on modifie la sensibilité ou que l'on applique ce test à une population où la maladie est encore plus rare (par exemple $1 \text{ sur } 10000$), que se passe-t-il pour la valeur prédictive positive ? En quoi cela démontre-t-il qu'un fait scientifique brut n'a de sens qu'au sein d'un modèle théorique et contextuel ?
4. **Dissertation synthétique :** Dans quelle mesure la science se distingue-t-elle de la croyance non pas par l'absence totale d'erreur ou d'incertitude, mais par sa méthode même pour quantifier et réduire cette incertitude ?

---

### 💡 Indice de méthode

* **Pour la question 1 :** Rappelez la formule de Bayes pour deux événements $A$ et $B$ : 
  $$P(A \mid B) = \frac{P(B \mid A) \times P(A)}{P(B)}$$
  Pensez à décomposer $P(B)$ (ou $P(T^+$)) à l'aide de la formule des probabilités totales :
  $$P(T^+) = P(T^+ \mid M) \times P(M) + P(T^+ \mid \overline{M}) \times P(\overline{M})$$
* **Pour la question 2 & 3 :** Ne confondez pas la *fiabilité intrinsèque* d'un instrument (mesurée par sa sensibilité et sa spécificité) et la *valeur de la preuve* pour un individu donné dans un contexte donné. La raison scientifique intègre l'erreur là où la croyance cherche des certitudes.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la probabilité conditionnelle $P(M \mid T^+)$
Appliquons la formule des probabilités totales pour déterminer la probabilité globale d'obtenir un test positif $P(T^+)$ :
$$P(T^+) = P(T^+ \mid M) \times P(M) + P(T^+ \mid \overline{M}) \times P(\overline{M})$$

D'après les données de l'énoncé :
* $P(M) = 0{,}001$ donc $P(\overline{M}) = 1 - 0{,}001 = 0{,}999$
* $P(T^+ \mid M) = 0{,}99$
* $P(T^+ \mid \overline{M}) = 0{,}02$

Calculons $P(T^+)$ :
$$P(T^+) = (0{,}99 \times 0{,}001) + (0{,}02 \times 0{,}999)$$
$$P(T^+) = 0{,}00099 + 0{,}01998 = 0{,}02097$$

Appliquons ensuite le théorème de Bayes pour trouver $P(M \mid T^+)$ :
$$P(M \mid T^+) = \frac{P(T^+ \mid M) \times P(M)}{P(T^+)} = \frac{0{,}00099}{0{,}02097} \approx 0{,}0472$$

Soit environ $4{,}72 \text{ \%}$. 

*Conclusion partielle :* Si une personne a un test positif, il y a moins de $5 \text{ \%}$ de chances qu'elle soit réellement malade, malgré un test ayant une spécificité de $98 \text{ \%}$ et une sensibilité de $99 \text{ \%}$.

#### 2. Interprétation critique : l'illusion de la certitude
Spontanément, l'esprit humain tend à confondre la performance d'un outil ($99 \text{ \%}$ de réussite) avec la certitude du diagnostic individuel. C'est un biais cognitif inhérent à la croyance dogmatique ou intuitive. 
D'un point de vue épistémologique, cet exercice montre que **le savoir scientifique n'est pas une intuition immédiate**, mais une construction rationnelle médiatisée par les mathématiques. La science démontre ici ses propres limites : un résultat brut (un test positif) n'apporte pas une vérité absolue, mais une information probabiliste qui doit être replacée dans le contexte global de la population (la prévalence).

#### 3. Limites épistémologiques et variabilité des modèles
Si la maladie devient encore plus rare, par exemple avec une prévalence de $P(M) = 0{,}0001$ ($1 \text{ sur } 10000$), le nombre de faux positifs (généré par les $2 \text{ \%}$ d'erreurs sur une immense masse de personnes saines) devient infiniment supérieur au nombre de vrais malades. La valeur prédictive positive chute alors de manière drastique sous les $1 \text{ \%}$.
Cela démontre qu'un modèle scientifique n'est jamais valide « en soi » et de manière absolue : sa pertinence dépend d'hypothèses initiales, de paramètres contextuels et d'un cadre rigoureux. Le savoir scientifique progresse précisément en reconnaissant et en formalisant ces limites, contrairement à la croyance qui simplifie le réel pour le rendre rassurant.

#### 4. Dissertation synthétique (pistes de réflexion)
* **Thèse :** La science se sépare de la croyance par l'exigence de la **démonstration** et de la **vérification empirique**. Elle ne postule pas des dogmes indiscutables, mais élabore des modèles révisables.
* **Nuance :** Pour autant, la science comporte des limites internes (incertitudes de mesure, limites statistiques comme le montre le théorème de Bayes, complexité des systèmes étudiés). 
* **Synthèse :** La supériorité de la démarche rationnelle sur la croyance ne réside pas dans son infaillibilité, mais dans sa capacité méthodique à intégrer l'erreur, à quantifier le doute et à soumettre ses propres modèles à la critique universelle. La raison scientifique transforme l'incertitude en un objet de savoir maîtrisable, là où la croyance cherche à l'annuler par conviction.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
