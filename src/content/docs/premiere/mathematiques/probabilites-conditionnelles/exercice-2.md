---
title: "Exercice 2 : Interprétation des tests de dépistage médical"
description: "Application pratique du chapitre Probabilités conditionnelles"
---

### 🌐 Contexte & Données scientifiques

L'évaluation de l'efficacité d'un test de dépistage médical constitue un enjeu majeur de santé publique, nécessitant une analyse rigoureuse des données probabilistes. Aucun test diagnostique n'est parfait : il existe toujours un compromis entre la sensibilité (capacité à détecter les malades) et la spécificité (capacité à identifier les sains), souvent compliquées par la prévalence de la pathologie dans la population cible.

Considérons un test de dépistage sérologique (par exemple, pour une pathologie virale chronique) dont les caractéristiques métrologiques et épidémiologiques sont les suivantes :
* La prévalence de la maladie dans la population générale étudiée est de $1\ \%$ ; soit, pour un individu tiré au hasard, la probabilité d'être porteur du virus $P(M) = 0{,}01$.
* La **sensibilité** du test est de $98\ \%$ : si une personne est malade, la probabilité que le test soit positif est de $0{,}98$. On la note $P_M(T) = 0{,}98$.
* La **spécificité** du test est de $95\ \%$ : si une personne est saine, la probabilité que le test soit négatif est de $0{,}95$. On en déduit le taux de faux positifs : si une personne est saine, la probabilité que le test soit faussement positif est de $P_{\bar{M}}(T) = 1 - 0{,}95 = 0{,}05$.

*Note méthodologique :* En situation de dépistage de masse, la faible prévalence induit un phénomène mathématique contre-intuitif mais mesurable, où le nombre de faux positifs peut rivaliser avec le nombre de vrais positifs, soulevant des questions complexes d'éthique, d'anxiété induite chez les patients et de coûts socio-économiques pour le système de santé.

---

### ❓ Énoncé

On choisit au hasard un individu dans cette population et on considère les événements suivants :
* $M$ : « L'individu est porteur de la maladie. »
* $T$ : « Le test de dépistage est positif. »

On note $\bar{M}$ l'événement contraire de $M$ (l'individu est sain) et $\bar{T}$ l'événement contraire de $T$ (le test est négatif).

1. Traduire les données de l'énoncé en utilisant la notation des probabilités et des probabilités conditionnelles, puis représenter cette situation à l'aide d'un arbre pondéré.
2. Calculer la probabilité que l'individu soit malade et que son test soit positif. En déduire la probabilité totale qu'un individu pris au hasard ait un test positif, notée $P(T)$.
3. Calculer la probabilité qu'un individu soit réellement malade sachant que son test est positif, c'est-à-dire $P_T(M)$. Exprimer le résultat sous forme de pourcentage arrondi au dixième.
4. **Analyse critique et esprit scientifique :** Comment qualifiez-vous le résultat obtenu à la question précédente au regard de la sensibilité élevée ($98\ \%$) du test ? Discuter de l'intérêt d'un tel test en dépistage de masse (population générale) par rapport à une population ciblée à haut risque (par exemple, prévalence de $20\ \%$).

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez les définitions du cours. La sensibilité correspond à $P(T \mid M)$ et le taux de faux positifs à $P(T \mid \bar{M})$.
* **Question 2 :** Pour l'intersection, utilisez la formule de multiplication : $P(A \cap B) = P(A) \times P_A(B)$. Pour la probabilité totale, appliquez la formule des probabilités totales en sommant les chemins de l'arbre qui mènent à $T$.
* **Question 3 :** Utilisez la définition formelle d'une probabilité conditionnelle : $P_T(M) = \frac{P(M \cap T)}{P(T)}$.
* **Question 4 :** Mettez en balance la valeur intrinsèque du test (performances biologiques) et sa valeur prédictive réelle en fonction de la prévalence (paramètre contextuel).

---

### 📋 Correction détaillée pas à pas

#### 1. Traduction des données et représentation par un arbre pondéré
D'après l'énoncé, nous disposons des probabilités suivantes :
* $P(M) = 0{,}01$ (donc $P(\bar{M}) = 1 - 0{,}01 = 0{,}99$)
* $P_M(T) = 0{,}98$ (donc $P_M(\bar{T}) = 1 - 0{,}98 = 0{,}02$)
* $P_{\bar{M}}(\bar{T}) = 0{,}95$ (donc $P_{\bar{M}}(T) = 1 - 0{,}95 = 0{,}05$)

L'arbre pondéré se structure ainsi :
```text
                  /--- (0,98) --- T  : "Test positif"
        /-- M (0,01)
       /          \--- (0,02) --- T_bar : "Test négatif"
-- (Racine)
       \          /--- (0,05) --- T  : "Test positif"
        \-- M_bar (0,99)
                  \--- (0,95) --- T_bar : "Test négatif"
```

#### 2. Calcul de $P(M \cap T)$ et de $P(T)$
* La probabilité que l'individu soit malade et ait un test positif est :
  $$P(M \cap T) = P(M) \times P_M(T) = 0{,}01 \times 0{,}98 = 0{,}00098$$

* D'après la formule des probabilités totales, la probabilité que le test soit positif correspond à la somme des probabilités des deux chemins menant à $T$ :
  $$P(T) = P(M \cap T) + P(\bar{M} \cap T)$$
  Calculons d'abord le second terme :
  $$P(\bar{M} \cap T) = P(\bar{M}) \times P_{\bar{M}}(T) = 0{,}99 \times 0{,}05 = 0{,}0495$$
  Ainsi :
  $$P(T) = 0{,}00098 + 0{,}0495 = 0{,}05048$$

#### 3. Calcul de la probabilité conditionnelle $P_T(M)$
La probabilité qu'un individu soit malade sachant que son test est positif est :
$$P_T(M) = \frac{P(M \cap T)}{P(T)} = \frac{0{,}00098}{0{,}05048} \approx 0{,}01941$$

Soit environ **$1{,}9\ \%$**.

#### 4. Analyse critique et interprétation scientifique
* **Paradoxe apparent :** Bien que le test possède une excellente sensibilité ($98\ \%$), un individu dont le test est positif n'a en réalité que $1{,}9\ \%$ de chance d'être réellement malade. Ce résultat contre-intuitif s'explique mathématiquement par le fait que la population saine est infiniment plus nombreuse que la population malade (prévalence de $1\ \%$). Par conséquent, le nombre de faux positifs ($4{,}95\ \%$ de la population totale) lamine le nombre de vrais positifs ($0{,}098\ \%$ de la population totale).
* **Limites et compromis du dépistage de masse :** Appliquer ce test en population générale génère une proportion massive de faux positifs, entraînant une anxiété injustifiée pour les patients, des examens de confirmation superflus et un coût économique élevé pour la collectivité. 
* **Impact de la population cible :** Si le test est appliqué à une population à haut risque où la prévalence est de $20\ \%$ ($P(M) = 0{,}20$), un nouveau calcul (laissant $P_M(T)=0{,}98$ et $P_{\bar{M}}(T)=0{,}05$) donnerait :
  * $P(M \cap T) = 0{,}20 \times 0{,}98 = 0{,}196$
  * $P(\bar{M} \cap T) = 0{,}80 \times 0{,}05 = 0{,}040$
  * $P(T) = 0{,}196 + 0{,}040 = 0{,}236$
  * $P_T(M) = \frac{0{,}196}{0{,}236} \in \approx 83{,}1\ \%$
  
  La valeur prédictive positive passe ainsi de $1{,}9\ \%$ à plus de $83\ \%$. Cela démontre l'importance cruciale de cibler médicalement les populations à tester pour garantir l'efficacité clinique et coût-efficacité des stratégies de santé publique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
