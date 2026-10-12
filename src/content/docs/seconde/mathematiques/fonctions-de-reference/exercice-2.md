---
title: "Exercice 2 : Modélisation de coûts de production"
description: "Application pratique du chapitre Fonctions de référence"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'analyse économique et industrielle d'une entreprise éco-responsable spécialisée dans la fabrication de composants pour l'énergie solaire, la direction cherche à modéliser ses coûts de production en fonction des volumes fabriqués. La modélisation mathématique permet d'anticiper la rentabilité, mais elle repose nécessairement sur des hypothèses simplificatrices qu'il convient d'analyser avec rigueur.

Soit $x$ la quantité de milliers de composants produits par mois, avec $x \in [0 ; 10]$. 

Le coût total de production $C(x)$, exprimé en milliers d'euros, est modélisé par la fonction définie sur l'intervalle $[0 ; 10]$ par :
$$C(x) = x^2 - 2x + 9$$

D'un point de vue économique, on distingue généralement :
1. **Les coûts fixes** ($C(0)$), qui englobent les dépenses incompressibles (maintenance des infrastructures, salaires administratifs, amortissement des machines) indépendantes du volume de production.
2. **Les coûts variables**, qui dépendent directement du volume produit (matières premières, énergie).

Dans la réalité industrielle, ce modèle quadratique est une approximation valable sur une plage de production donnée. Il ne prend toutefois pas en compte les ruptures de charge (heures supplémentaires, saturation des lignes de production) qui entraînent des surcoûts non linéaires pour des volumes extrêmes, ni les économies d'échelle à très grande échelle.

---

### ❓ Énoncé

1. **Analyse des coûts fixes :** Déterminer le montant des coûts fixes de l'entreprise selon ce modèle. Ce résultat mathématique est-il en adéquation totale avec la réalité d'une usine à l'arrêt ($x = 0$) ? Justifier la nuance.
2. **Étude de fonction et manipulation algébrique :** 
   a. É crire la fonction $C(x)$ sous sa forme canonique en utilisant l'identité remarquable adéquate.
   b. En déduire rigoureusement le volume de production $x_0$ pour lequel le coût total est minimal, ainsi que la valeur de ce coût minimal.
3. **Modélisation du coût moyen :** Le coût moyen unitaire de production $Cm(x)$ (en milliers d'euros par millier de pièces) est défini pour $x > 0$ par $Cm(x) = \frac{C(x)}{x}$.
   Exprimer $Cm(x)$ et calculer le coût moyen pour une production de $3$ milliers de composants.
4. **Esprit critique et compromis économique :** L'entreprise vend chaque millier de composants au prix fixe de $4$ milliers d'euros. Le chiffre d'affaires mensuel est donc donné par $R(x) = 4x$. 
   Déterminer par le calcul l'intervalle de production pour lequel l'entreprise réalise un bénéfice (c'est-à-dire un chiffre d'affaires strictement supérieur au coût total). Discuter des risques liés à une production positionnée aux bornes de cet intervalle.

---

### 💡 Indice de méthode

* **Question 1 :** Évaluez $C(0)$. Réfléchissez ensuite à ce qu'implique la fermeture temporaire d'une usine (maintenance minimale, contrats de sécurisation) par rapport à un modèle purement algébrique.
* **Question 2 :** Pour obtenir la forme canonique d'un polynôme du second degré $ax^2 + bx + c$, on utilise le début du développement de $(x - \alpha)^2$. Ici, observez que $x^2 - 2x = (x-1)^2 - 1$.
* **Question 3 :** Procédez par substitution algébrique en divisant l'expression de $C(x)$ par $x$, puis simplifiez la fraction obtenue.
* **Question 4 :** Poser l'inéquation du bénéfice revient à résoudre $R(x) > C(x)$, soit $4x > x^2 - 2x + 9$. Ramenez tous les termes du même côté pour étudier un polynôme ou utiliser une factorisation par le calcul de racines.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse des coûts fixes
* **Calcul mathématique :** 
  Les coûts fixes correspondent au coût de production pour une quantité nulle, soit $C(0)$.
  $$C(0) = 0^2 - 2(0) + 9 = 9$$
  Le modèle attribue des coûts fixes de $9$ milliers d'euros, soit $9\,000$ €.
* **Analyse critique :** 
  Mathématiquement, $C(0) = 9$. Dans la réalité industrielle, ce modèle est une idéalisation. Même si l'entreprise ne produit rien ($x = 0$), des coûts irrécupérables ou de maintenance d'urgence subsistent, mais ils ne suivent pas strictement une fonction continue évaluée en zéro. De plus, licencier puis réembaucher du personnel en cas d'arrêt total engendrerait des coûts de transaction non modélisés ici. Le modèle possède donc une limite de validité aux abords de $x = 0$.

#### 2. Étude de fonction et minimum
* **a. Forme canonique :**
  Partons de l'expression de $C(x)$ :
  $$C(x) = x^2 - 2x + 9$$
  On reconnait le début de l'identité remarquable $(x-1)^2 = x^2 - 2x + 1$. On peut donc écrire :
  $$C(x) = (x^2 - 2x + 1) - 1 + 9$$
  $$C(x) = (x - 1)^2 + 8$$
* **b. Recherche du minimum :**
  Pour tout nombre réel $x$, un carré est toujours positif ou nul :
  $$(x - 1)^2 \ge 0$$
  Par conséquent, en ajoutant $8$ de chaque côté :
  $$(x - 1)^2 + 8 \ge 8$$
  Soit $C(x) \ge 8$. 
  Ce minimum est atteint si et seulement si le terme carré s'annule, c'est-à-dire :
  $$x - 1 = 0 \iff x = 1$$
  **Conclusion :** Le coût total minimal est de $8$ milliers d'euros (soit $8\,000$ €) et il est atteint pour une production de $x_0 = 1$ (soit $1\,000$ composants).

#### 3. Modélisation du coût moyen
* **Expression algébrique :**
  Pour $x \in ]0 ; 10]$, le coût moyen unitaire est :
  $$Cm(x) = \frac{C(x)}{x} = \frac{x^2 - 2x + 9}{x} = x - 2 + \frac{9}{x}$$
* **Application numérique :**
  Pour une production de $3$ milliers de composants ($x = 3$) :
  $$Cm(3) = \frac{3^2 - 2(3) + 9}{3} = \frac{9 - 6 + 9}{3} = \frac{12}{3} = 4$$
  Le coût moyen de fabrication est de $4$ milliers d'euros par millier de composants (soit $4$ € par composant).

#### 4. Esprit critique et compromis économique (Seuil de rentabilité)
* **Résolution de l'inéquation du bénéfice :**
  L'entreprise réalise un bénéfice si le chiffre d'affaires est strictement supérieur au coût total :
  $$R(x) > C(x)$$
  $$4x > x^2 - 2x + 9$$
  En regroupant tous les termes dans le membre de droite :
  $$0 > x^2 - 2x - 4x + 9$$
  $$x^2 - 6x + 9 < 0$$
  On reconnait à nouveau une identité remarquable :
  $$(x - 3)^2 < 0$$
* **Analyse scientifique et limites du modèle :**
  Nous savons qu'un carré dans l'ensemble des nombres réels est toujours positif ou nul : $(x - 3)^2 \ge 0$. 
  L'inéquation $(x - 3)^2 < 0$ n'admet donc **aucune solution réelle**. 
  * **Interprétation économique rigoureuse :** Selon ce modèle mathématique, l'entreprise ne dégage *jamais* un chiffre d'affaires strictement supérieur au coût total, car le coût minimal est de $8$ pour un prix de vente de $4x$ qui plafonne (pour $x=2$, $R(2)=8$, et pour $x=3$, $R(3)=12$ avec $C(3)=12$). 
  Plus précisément, l'équilibre parfait ($R(x) = C(x)$) n'est atteint qu'au point $x = 3$ où $R(3) = 12$ et $C(3) = 12$ (bénéfice nul). Pour tout autre volume, le coût est supérieur ou égal au chiffre d'affaires.
  * **Esprit critique :** Produire exactement $3$ milliers de composants annule la perte, mais ne génère aucune marge bénéficiaire pour réinvestir. Dans la réalité, un gestionnaire averti conclurait que le modèle de coût ou le prix de vente fixé à $4$ k€ est non viable à long terme, car il ne permet pas d'absorber les aléas économiques (inflation des matières premières, pannes).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
