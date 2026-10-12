---
title: "Exercice 1 : Résolution de problèmes de rentabilité commerciale"
description: "Application pratique du chapitre Équations et inéquations"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude de la viabilité d'une entreprise produisant des objets éco-conçus, la direction financière modélise l'équilibre économique par des fonctions mathématiques. 

Soit $x$ le nombre d'objets produits et commercialisés par mois, avec $x \in [0\,;\,5000]$.

1. **Modélisation des coûts totaux :**
   Les coûts totaux de production $C(x)$ (exprimés en euros) se composent de coûts fixes (frais de structure, location des machines) et de coûts variables (matières premières, main-d'œuvre directe) proportionnels à la quantité produite. L'analyse comptable permet d'établir l'expression affine :
   $$C(x) = 15\,x + 12\,000$$

2. **Modélisation du chiffre d'affaires :**
   Le chiffre d'affaires $R(x)$ (exprimé en euros) correspond aux ventes réalisées. Dans un marché concurrentiel, le prix de vente unitaire est fixé à $25 \text{ €}$. On a donc :
   $$R(x) = 25\,x$$

3. **Modélisation du bénéfice :**
   Le bénéfice net mensuel $B(x)$ est défini par la différence entre le chiffre d'affaires et les coûts totaux :
   $$B(x) = R(x) - C(x)$$

*Note critique sur le modèle :* Ce modèle linéaire suppose que le coût unitaire de production et le prix de vente restent constants, quelle que soit la quantité produite. En réalité, des économies d'échelle peuvent réduire les coûts unitaires pour de très grands volumes, ou à l'inverse, des surcoûts liés à la saturation des lignes de production peuvent apparaître. De plus, l'hypothèse selon laquelle toute la production est nécessairement vendue au prix unique est une idéalisation qu'il convient de nuancer face aux fluctuations de la demande.

---

### ❓ Énoncé

1. **Expression algébrique du bénéfice :**
   Démontrer que l'expression du bénéfice mensuel $B(x)$ en fonction de la quantité $x$ d'objets vendus est donnée par :
   $$B(x) = 10\,x - 12\,000$$

2. **Seuil de rentabilité (ou point mort) :**
   Déterminer par le calcul le nombre minimal d'objets que l'entreprise doit vendre par mois pour dégager un bénéfice strictement positif ($B(x) > 0$).

3. **Objectif financier :**
   Résoudre l'inéquation $B(x) \ge 8\,000$. Interpréter le résultat obtenu dans le contexte économique de l'entreprise.

4. **Analyse critique et limites :**
   La capacité maximale de production de l'atelier est de $3\,000 \text{ objets}$ par mois. En calculant le bénéfice maximal théorique atteignable, discutez de la pertinence de ce modèle pour une stratégie à long terme.

---

### 💡 Indice de méthode

* **Question 1 :** Substituez les expressions de $R(x)$ et $C(x)$ dans la formule du bénéfice $B(x) = R(x) - C(x)$, en veillant à bien utiliser des parenthèses autour de l'expression de $C(x)$ pour éviter les erreurs de signe.
* **Questions 2 & 3 :** Il s'agit de résoudre respectivement une inéquation stricte ($B(x) > 0$) et une inéquation large ($B(x) \ge 8\,000$). Isolez l'inconnue $x$ en appliquant les règles de conservation des inégalités (addition, soustraction et division par un nombre strictement positif).
* **Question 4 :** Calculez $B(3000)$ et réfléchissez aux autres facteurs non pris en compte par une simple modélisation mathématique linéaire (ex: saturation du marché, investissements futurs).

---

### 📋 Correction détaillée pas à pas

1. **Expression algébrique du bénéfice :**
   Par définition, le bénéfice est la différence entre les recettes (chiffre d'affaires) et les dépenses (coûts totaux) :
   $$B(x) = R(x) - C(x)$$
   En remplaçant $R(x)$ et $C(x)$ par leurs expressions respectives :
   $$B(x) = 25\,x - (15\,x + 12\,000)$$
   On supprime les parenthèses en changeant les signes à l'intérieur :
   $$B(x) = 25\,x - 15\,x - 12\,000$$
   En réduisant les termes en $x$, on obtient bien :
   $$B(x) = 10\,x - 12\,000$$

2. **Seuil de rentabilité :**
   L'entreprise est rentable si le bénéfice est strictement positif, soit $B(x) > 0$.
   Résolvons l'inéquation :
   $$10\,x - 12\,000 > 0$$
   $$10\,x > 12\,000$$
   $$x > \frac{12\,000}{10}$$
   $$x > 1\,200$$
   Puisque $x$ représente un nombre d'objets (qui doit être un nombre entier dans ce contexte, bien que le modèle soit continu), l'entreprise doit vendre **au moins $1\,201 \text{ objets}$** par mois pour commencer à réaliser des bénéfices. (Pour $x = 1\,200$, le bénéfice est nul : c'est le point mort).

3. **Objectif financier :**
   On cherche les valeurs de $x$ telles que le bénéfice soit supérieur ou égal à $8\,000 \text{ €}$ :
   $$B(x) \ge 8\,000$$
   $$10\,x - 12\,000 \ge 8\,000$$
   $$10\,x \ge 8\,000 + 12\,000$$
   $$10\,x \ge 20\,000$$
   $$x \ge \frac{20\,000}{10}$$
   $$x \ge 2\,000$$
   *Interprétation :* L'entreprise doit produire et vendre au moins $2\,000 \text{ objets}$ par mois pour atteindre ou dépasser son objectif de $8\,000 \text{ €}$ de bénéfice net.

4. **Analyse critique et limites :**
   Calculons le bénéfice pour la capacité maximale de production, soit $x = 3\,000$ :
   $$B(3\,000) = 10 \times 3\,000 - 12\,000 = 30\,000 - 12\,000 = 18\,000 \text{ €}$$
   Le bénéfice maximal théorique est de $18\,000 \text{ €}$ par mois.
   *Esprit critique :* Ce modèle mathématique linéaire présente des limites qu'un gestionnaire doit considérer. D'une part, il suppose une demande infinie au même prix : vendre $3\,000 \text{ objets}$ implique que le marché peut les absorber, ce qui nécessite une étude de marché préalable. D'autre part, atteindre la pleine capacité ($3\,000 \text{ objets}$) peut engendrer des coûts cachés (usure prématurée du matériel, heures supplémentaires non modélisées). Le modèle est donc un outil d'aide à la décision précieux mais indicatif, valable uniquement sur un intervalle de production donné.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
