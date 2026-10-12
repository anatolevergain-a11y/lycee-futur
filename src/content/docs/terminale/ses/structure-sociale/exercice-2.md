---
title: "Exercice 2 : Mobilité sociale intergénérationnelle et fluidité sociale"
description: "Application pratique du chapitre Structure sociale et mobilités"
---

### 🌐 Contexte & Données scientifiques

L'analyse de la structure sociale nécessite de distinguer deux concepts fondamentaux souvent confondus dans le débat public : la **mobilité observée** (ou brute) et la **fluidité sociale** (ou chances relatives). 

La mobilité observée mesure les changements de position sociale entre les parents et leurs enfants, en tenant compte des transformations globales de la structure socioprofessionnelle (notamment la tertiarisation et la \text{salariarisation} de l'économie). À l'inverse, la fluidité sociale s'affranchit de ces mutations macro-structurelles pour évaluer l'égalité des chances, c'est-à-dire la probabilité relative pour des individus d'origines sociales différentes d'accéder à une position donnée.

Le tableau ci-dessous, inspiré des enquêtes FQP (Formation et Qualification Professionnelle) de l'INSEE, présente une version simplifiée d'une table de mobilité intergénérationnelle (données fictives mais macro-économiquement cohérentes pour des hommes de $40$ à $59$ ans). Les effectifs sont exprimés en milliers.

| Groupe socioprofessionnel du père $\backslash$ du fils | Cadres et professions intellectuelles supérieures ($\text{CPIS}$) | Professions intermédiaires ($\text{PI}$) | Employés et ouvriers ($\text{EO}$) | **Total Pères** |
| :--- | :---: | :---: | :---: | :---: |
| **Cadres et professions intellectuelles supérieures ($\text{CPIS}$)** | $120$ | $80$ | $50$ | $\mathbf{250}$ |
| **Professions intermédiaires ($\text{PI}$)** | $90$ | $150$ | $110$ | $\mathbf{350}$ |
| **Employés et ouvriers ($\text{EO}$)** | $90$ | $120$ | $190$ | $\mathbf{400}$ |
| **Total Fils** | $\mathbf{300}$ | $\mathbf{350}$ | $\mathbf{350}$ | $\mathbf{1000}$ |

*Note de lecture : $120$ milliers de fils de cadres sont eux-mêmes cadres. La population totale étudiée est de $1000$ milliers ($1 \text{ million}$).*

---

### ❓ Énoncé

1. **Calcul et distinction des mobilités :** Calculez le taux global de mobilité brute. Distinguez ensuite la part de cette mobilité imputable à la **mobilité structurelle** de celle imputable à la **mobilité nette** (ou circulaire). Vous expliciterez la formule mathématique utilisée.
2. **Analyse des chances relatives :** Calculez les chances d'accéder au groupe des $\text{CPIS}$ pour un fils de $\text{CPIS}$ par rapport à un fils d'$\text{EO}$. Quel concept statistique formalise cet écart et quelles sont les limites méthodologiques de son interprétation ?
3. **Esprit critique et limites des indicateurs :** Expliquez pourquoi une augmentation du taux de mobilité brute observée ne témoigne pas nécessairement d'une amélioration de la fluidité sociale (égalité des chances). Vous mobiliserez pour cela la notion de « structure des opportunités ».

---

### 💡 Indice de méthode

* **Question 1 :** Pour la mobilité brute, sommez l'ensemble des individus situés hors de la diagonale de la table (immobilité). Pour la mobilité structurelle, calculez la variation absolue des marges (totaux lignes et colonnes) en divisant par $2$. La relation fondamentale est : $\text{Mobilité brute} = \text{Mobilité structurelle} + \text{Mobilité nette}$.
* **Question 2 :** Utilisez les rapports de chances (ou *odds ratio* implicites) en comparant les probabilités conditionnelles d'accès au groupe cible selon l'origine sociale.
* **Question 3 :** Songez aux effets de structure : si le nombre de postes de cadres augmente considérablement d'une génération à l'autre, mécaniquement, des individus issus de classes populaires y accèdent (mobilité structurelle) sans que la distance sociale relative entre les groupes ne se soit nécessairement réduite.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul et distinction des mobilités
* **Mobilité brute (ou observée) :** 
Elle correspond à la somme de tous les individus dont le groupe socioprofessionnel diffère de celui de leur père (hors de la diagonale du tableau : $80 + 50 + 90 + 110 + 90 + 120 = 540$ milliers).
$$\text{Taux de mobilité brute} = \frac{\text{Somme des mobiles}}{\text{Effectif total}} = \frac{540}{1000} = 54\text{ \%}$$

* **Mobilité structurelle :** 
Elle est liée aux modifications de la structure des emplois entre les deux générations. On la calcule en faisant la moitié de la somme des valeurs absolues des différences entre les effectifs marges des pères et des fils :
  - Pour les $\text{CPIS}$ : $|250 - 300| = 50$
  - Pour les $\text{PI}$ : $|350 - 350| = 0$
  - Pour les $\text{EO}$ : $|400 - 350| = 50$
$$\text{Mobilité structurelle} = \frac{50 + 0 + 50}{2} = 50 \text{ milliers}$$
Soit un taux de $\frac{50}{1000} = 5\text{ \%}$.

* **Mobilité nette (ou circulaire) :** 
Elle représente les échanges purs de position sociale, indépendants des modifications structurelles :
$$\text{Mobilité nette} = \text{Mobilité brute} - \text{Mobilité structurelle} = 54\text{ \%} - 5\text{ \%} = 49\text{ \%}$$

#### 2. Analyse des chances relatives
* **Probabilité d'accès pour un fils de $\text{CPIS}$ :** 
$$\text{P}(\text{Fils CPIS} \mid \text{Père CPIS}) = \frac{120}{250} = 0{,}48 \text{ (soit } 48\text{ \%)}$$
* **Probabilité d'accès pour un fils d'$\text{EO}$ :** 
$$\text{P}(\text{Fils CPIS} \mid \text{Père EO}) = \frac{90}{400} = 0{,}225 \text{ (soit } 22{,}5\text{ \%)}$$
* **Rapport des chances (risque relatif) :** 
$$\frac{0{,}48}{0{,}225} \approx 2{,}13$$
Un fils de cadre a ainsi un peu plus de $2$ fois plus de chances d'accéder au groupe des $\text{CPIS}$ qu'un fils d'employé ou d'ouvrier. 

* **Limites méthodologiques :** Ces calculs bruts ne constituent pas un *odds ratio* strict (qui neutraliserait les effets de structure de manière plus rigoureuse). De plus, ces tables agrégées masquent l'hétérogénéité interne des groupes (par exemple, être fils d'ouvrier qualifié vs non-qualifié, ou le fait que les catégories regroupent des réalités salariales et patrimoniales très diverses).

#### 3. Esprit critique et limites des indicateurs
La distinction entre mobilité observée et fluidité sociale est cruciale pour l'analyse sociologique. Un taux de mobilité brute élevé peut tout à fait coexister avec une société très rigide (faible fluidité). 

* **L'illusion de la meritocratie par la structure :** Si la proportion de postes de cadres augmente fortement d'une génération à l'autre (phénomène de tertiarisation), l'économie "tire" mécaniquement des enfants de milieux populaires vers les classes supérieures, augmentant la mobilité brute. 
* **La persistance des inégalités relatives :** Pour autant, les chances relatives d'accéder aux positions dominantes selon l'origine sociale peuvent rester inchangées si les barrières symboliques, culturelles (capital culturel selon P. Bourdieu) et économiques (investissement dans le capital humain, autocensure) demeurent stables. 

Ainsi, la science économique et sociologique conclut que la **mobilité observée** renseigne sur la dynamique macro-économique des emplois, tandis que la **fluidité sociale** mesure véritablement le degré d'ouverture et d'égalité des chances d'une structure sociale donnée.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
