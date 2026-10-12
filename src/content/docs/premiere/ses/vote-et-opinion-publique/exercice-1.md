---
title: "Exercice 1 : Mesure de l'opinion par sondages et biais"
description: "Application pratique du chapitre Vote et opinion publique"
---

### 🌐 Contexte & Données scientifiques

En sociologie politique et en statistique appliquée, la mesure empirique de « l'opinion publique » repose principalement sur la méthode des sondages. Si cette technique prétend refléter l'état des représentations d'une population à un instant $t$, sa validité scientifique dépend d'hypothèses méthodologiques strictes : représentativité de l'échantillon, formulation neutre des questions et prise en compte de la marge d'erreur.

On s'intéresse ici à une enquête menée auprès d'un échantillon de $n = 1\,000\text{ individus}$, représentatif de la population française âgée de 18 ans et plus (méthode des quotas par sexe, âge, CSP et région). 

Deux instituts d'études interrogent simultanément deux échantillons distincts de même taille ($n = 1\,000$) sur les politiques environnementales, mais emploient des libellés différents :

* **Sondage A (Institut Alpha) :**  
  *Question :* « Êtes-vous favorable ou opposé à une hausse de la fiscalité sur les carburants pour financer la transition écologique ? »  
  *Résultats :* Favorable : $46{,}0\text{ \%}$ ; Opposé : $54{,}0\text{ \%}$.
* **Sondage B (Institut Beta) :**  
  *Question :* « Êtes-vous favorable ou opposé à un investissement accru de l’État dans les transports propres financé par une contribution écologique sur les énergies fossiles ? »  
  *Résultats :* Favorable : $58{,}0\text{ \%}$ ; Opposé : $42{,}0\text{ \%}$.

#### Rappels statistiques sur l'intervalle de confiance
Dans le cadre d'un échantillonnage probabiliste aléatoire simple sans remise, pour une proportion observée $p$ sur une taille d'échantillon $n$ (avec $n \ge 30$, $np \ge 5$ et $n(1-p) \ge 5$), la marge d'erreur théorique $e$ au seuil de confiance de $95\text{ \%}$ s'exprime par :

$$e = 1{,}96 \times \sqrt{\frac{p(1 - p)}{n}}$$

L'intervalle de confiance est alors donné par :

$$I_{95\%} = \left[ p - e \,;\, p + e \right]$$

*Remarque méthodologique :* Bien que la méthode des quotas ne réponde pas rigoureusement à la théorie des probabilités (absence de tirage équiprobable), la profession applique conventionnellement ces marges d'erreur comme repère d'incertitude minimale.

---

### ❓ Énoncé

1. **Incertitude statistique et significativité (Sondage A) :**  
   a) Calculez la marge d'erreur $e$ associée à la proportion de personnes favorables ($p = 0{,}46$) dans le Sondage A, au seuil de confiance de $95\text{ \%}$. Arrondissez à $0{,}1\text{ point de pourcentage près}$.  
   b) Déterminez l'intervalle de confiance pour les répondants favorables et pour les répondants opposés. Peut-on affirmer, avec un risque d'erreur de $5\text{ \%}$, que l'opposition à cette mesure est majoritaire dans la population mère ?

2. **Effet de cadrage et biais de formulation :**  
   Comparez les résultats du Sondage A et du Sondage B. En mobilisant les concepts d'« effet de formulation » (*framing effect*) et d'orientation normative des questions, expliquez l'écart de $12\text{ points de pourcentage}$ observé entre les taux d'adhésion.

3. **Discussion critique des postulats du sondage :**  
   Dans son article princeps « L'opinion publique n'existe pas » (1973), le sociologue Pierre Bourdieu énonce trois postulats implicites contestables au fondement des sondages :
   * Tout le monde peut avoir une opinion ;
   * Toutes les opinions se valent ;
   * Il y a un consensus sur les questions qui méritent d'être posées.  
   
   À la lumière de ces postulats et des limites de la méthode des quotas, discutez la thèse selon laquelle un sondage *mesure* l'opinion publique plutôt qu'il ne la *construit*.

---

### 💡 Indice de méthode

* Pour la **question 1**, utilisez la formule fournie avec $n = 1\,000$ et $p = 0{,}46$. Comparez la borne supérieure de l'intervalle des « favorables » avec la borne inférieure de celui des « opposés » : s'il n'y a aucun chevauchement, l'écart est statistiquement significatif au seuil choisi.
* Pour la **question 2**, analysez les champs lexicaux des deux questions : soulignez la divergence entre les termes à connotation négative (« hausse de la fiscalité », « carburants » qui renvoie au quotidien contraint) et les termes valorisants ou neutres (« investissement », « transports propres », « contribution »).
* Pour la **question 3**, veillez à ne pas rejeter en bloc l'utilité des sondages, mais confrontez la posture positiviste (le sondage comme thermomètre social) à la posture constructiviste (le sondage comme agrégation artificielle d'opinions non informées ou imposées par l'agenda médiatique).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul des marges d'erreur et interprétation (Sondage A)

**a) Calcul de la marge d'erreur $e$ pour $p = 0{,}46$ et $n = 1\,000$ :**

Appliquons la formule :

$$e = 1{,}96 \times \sqrt{\frac{0{,}46 \times (1 - 0{,}46)}{1\,000}} = 1{,}96 \times \sqrt{\frac{0{,}46 \times 0{,}54}{1\,000}}$$

$$e = 1{,}96 \times \sqrt{\frac{0{,}2484}{1\,000}} = 1{,}96 \times \sqrt{0{,}0002484} \approx 1{,}96 \times 0{,}01576 \approx 0{,}03089$$

Exprimée en points de pourcentage, la marge d'erreur est d'environ :

$$e \approx 3{,}1\text{ points de pourcentage}$$

**b) Intervalles de confiance à $95\text{ \%}$ :**

* Pour les répondants **favorables** ($p_1 = 46{,}0\text{ \%}$) :
  $$I_{\text{favorables}} = [46{,}0 - 3{,}1 \,;\, 46{,}0 + 3{,}1] = [42{,}9\text{ \%} \,;\, 49{,}1\text{ \%}]$$

* Pour les répondants **opposés** ($p_2 = 54{,}0\text{ \%}$) :
  La variance $p(1-p)$ étant identique car $0{,}54 \times 0{,}46 = 0{,}2484$, la marge d'erreur est également de $3{,}1\text{ points}$.
  $$I_{\text{opposés}} = [54{,}0 - 3{,}1 \,;\, 54{,}0 + 3{,}1] = [50{,}9\text{ \%} \,;\, 57{,}1\text{ \%}]$$

**Interprétation statistique :**  
La borne supérieure de l'intervalle des favorables ($49{,}1\text{ \%}$) est strictement inférieure à la borne inférieure de l'intervalle des opposés ($50{,}9\text{ \%}$). Les deux intervalles de confiance ne se chevauchent pas. Sous l'hypothèse de validité du modèle d'échantillonnage, on peut affirmer avec un degré de confiance de $95\text{ \%}$ (soit un risque d'erreur $\alpha = 5\text{ \%}$) que l'opposition est réellement majoritaire au sein de la population étudiée pour cette formulation spécifique.

---

#### 2. Analyse de l'effet de formulation (*framing effect*)

L'écart de $12\text{ points}$ entre le taux d'approbation du Sondage A ($46{,}0\text{ \%}$) et celui du Sondage B ($58{,}0\text{ \%}$) illustre la sensibilité des enquêtés au cadre cognitif imposé par l'enquêteur.

* **Coût individuel direct versus finalité collective vertueuse :**  
  Dans le Sondage A, l'accent est mis sur la contrainte financière immédiate (« hausse de la fiscalité sur les carburants »). Les termes mobilisés activent chez l'enquêté la perception d'une perte de pouvoir d'achat direct et individualisé, ce qui génère une aversion à la taxe.
* **Légitimation de l'action publique :**  
  Dans le Sondage B, le terme « investissement » suggère une création de valeur future positive. Le terme « contribution » atténue la dimension punitive de l'impôt (« fiscalité »), et l'expression « transports propres » fournit une justification environnementale concrète et valorisante.
* **Biais d'acquiescement et désirabilité sociale :**  
  Les individus ont tendance à approuver des propositions formulées de manière positive lorsqu'elles mobilisent des valeurs consensuelles (le progrès écologique, la propreté). 

*Conclusion méthodologique :* L'opinion mesurée ne préexiste pas de façon autonome ; elle est en partie le produit de la grille de questionnement appliquée.

---

#### 3. Analyse sociologique : mesure objective ou construction d'un artefact ?

L'analyse sociologique invite à nuancer l'idée que le sondage opérerait comme une simple « photographie » neutre de la société.

1. **La déconstruction des postulats (Bourdieu) :**
   * *L'illusion de la compétence politique universelle :* Les sondages forcent souvent les individus à choisir entre « d'accord » et « pas d'accord », occultant les mécanismes de cens caché (Daniel Gaxie). Les catégories populaires ou les moins diplômées expriment plus fréquemment une non-réponse ou un sentiment d'incompétence statutaire, souvent neutralisés par le traitement statistique (redressement ou élimination des « sans opinion »).
   * *L'agrégation d'opinions de forces inégales :* Additionner l'opinion d'un militant écologiste informé et celle d'un individu indifférent ayant répondu au hasard suppose que chaque réponse possède le même poids sociologique et la même intensité politique, ce qui constitue une fiction arithmétique.
   * *L'imposition de la problématique :* La question posée est définie par les commanditaires du sondage (médias, partis, cabinets ministériels). Elle postule que le sujet constitue une préoccupation centrale pour les citoyens, alors qu'il reflète d'abord l'agenda politique des élites.

2. **Limites techniques de l'échantillonnage par quotas :**  
   Contrairement au tirage aléatoire, la méthode des quotas repose sur le choix non probabiliste des répondants par les enquêteurs (souvent via des panels en ligne indemnisés). Bien qu'elle garantisse une ressemblance sociodémographique de surface, elle sélectionne un profil particulier d'enquêtés (individus connectés, plus politisés ou motivés par les récompenses), introduisant un biais de sélection difficilement quantifiable.

**Synthèse :**  
Les sondages ne capturent pas une « opinion publique » homogène et substantielle. Ils construisent un agrégat statistique d'attitudes individuelles, contextuelles et labiles. Utilisés avec rigueur (en comparant les tendances longues et en neutralisant les effets de formulation), ils constituent des indicateurs utiles de l'état du débat public ; isolés ou érigés en verdict démocratique absolu, ils risquent d'imposer un artefact méthodologique comme une vérité sociologique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
