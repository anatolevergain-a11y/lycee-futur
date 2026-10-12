---
title: "Exercice 2 : Analyse de rythmes et fréquences en acoustique"
description: "Application pratique du chapitre Arithmétique et multiples"
---

### 🌐 Contexte & Données scientifiques

En acoustique musicale et numérique, l'analyse des signaux périodiques repose fondamentalement sur la théorie des nombres, et plus particulièrement sur l'étude des multiples et des diviseurs. Lorsqu'deux instruments jouent simultanément, ou lorsqu'un signal audio numérique est échantillonné, des phénomènes de superposition d'ondes apparaissent. 

Considérons un système de synthèse sonore numérique analysant deux signaux périodiques purs émis par des oscillateurs. Le premier oscillateur $A$ émet une impulsion tous les $T_A = 12 \text{ ms}$ (millisecondes). Le second oscillateur $B$ émet une impulsion tous les $T_B = 18 \text{ ms}$. 

Dans le cadre d'un traitement informatique en temps réel, l'alignement temporel parfait des impulsions des deux oscillateurs détermine la périodicité globale du motif sonore complexe ainsi créé. Toutefois, les horloges matérielles réelles présentent une incertitude de mesure (gigue ou *jitter*) estimée à $\pm 0{,}5 \text{ ms}$ par période, ce qui soulève la question de la stabilité réelle du modèle arithmétique théorique face aux contraintes physiques de la mesure.

---

### ❓ Énoncé

1. Déterminer la plus petite période temporelle strictement positive, notée $T_{AB}$, à laquelle les impulsions des deux oscillateurs $A$ et $B$ se produisent simultanément. Exprimer le résultat en millisecondes.
2. En déduire le nombre d'impulsions émises respectivement par l'oscillateur $A$ et par l'oscillateur $B$ entre deux coïncidences parfaites consécutives (la coïncidence initiale à $t = 0 \text{ ms}$ étant exclue du décompte final).
3. Soit une fenêtre d'enregistrement numérique d'une durée totale de $1 \text{ seconde}$. Combien de coïncidences parfaites d'impulsions ce signal théorique comporte-t-il sur cette durée ?
4. *Esprit critique et limites du modèle :* En tenant compte de l'incertitude expérimentale (gigue de $\pm 0{,}5 \text{ ms}$ sur chaque période), discutez de la pertinence de l'observation de ces coïncidences dans un dispositif de laboratoire réel.

---

### 💡 Indice de méthode

* Pour la question 1, rappelez-vous qu'une coïncidence temporelle correspond à un multiple commun des deux périodes individuelles $T_A$ et $T_B$. La plus petite coïncidence non nulle correspond mathématiquement au **Plus Petit Commun Multiple (PPCM)** de ces deux entiers.
* Pour la question 3, veillez à effectuer une conversion rigoureuse des unités de temps (de la seconde vers la milliseconde) avant d'effectuer la division euclidienne ou la recherche de multiples.

---

### 📋 Correction détaillée pas à pas

1. **Recherche de la plus petite période de coïncidence $T_{AB}$ :**
   Les impulsions se produisent aux instants qui sont à la fois des multiples de $12$ et de $18$. Nous cherchons donc le $\text{PPCM}(12, 18)$.
   Décomposons les nombres $12$ et $18$ en produits de facteurs premiers :
   $$12 = 2^2 \times 3^1$$
   $$18 = 2^1 \times 3^2$$
   Le PPCM s'obtient en prenant le produit de tous les facteurs premiers intervenant dans les décompositions, affectés de leur plus grand exposant :
   $$\text{PPCM}(12, 18) = 2^2 \times 3^2 = 4 \times 9 = 36$$
   La plus petite période de coïncidence est donc :
   $$T_{AB} = 36 \text{ ms}$$

2. **Calcul du nombre d'impulsions par période de coïncidence :**
   Sur une durée de $36 \text{ ms}$ :
   * L'oscillateur $A$ émet une impulsion tous les $12 \text{ ms}$. Le nombre d'impulsions émises (hors origine) est :
     $$\frac{36}{12} = 3 \text{ impulsions}$$
   * L'oscillateur $B$ émet une impulsion tous les $18 \text{ ms}$. Le nombre d'impulsions émises (hors origine) est :
     $$\frac{36}{18} = 2 \text{ impulsions}$$
   L'oscillateur $A$ aura donc émis $3$ impulsions et l'oscillateur $B$ aura émis $2$ impulsions entre deux coïncidences parfaites.

3. **Nombre de coïncidences sur une durée de $1 \text{ seconde}$ :**
   Convertissons la durée totale en millisecondes :
   $$1 \text{ s} = 1000 \text{ ms}$$
   Les coïncidences se produisent aux instants $t$ qui sont des multiples de $36 \text{ ms}$ (en excluant $t = 0 \text{ ms}$ si l'on considère les coïncidences strictement positives, ou en l'incluant selon la formulation, ici le nombre de coïncidences strictement positives est recherché). 
   Nous cherchons le nombre d'entiers naturels $k \ge 1$ tels que :
   $$k \times 36 \le 1000$$
   Effectuons la division euclidienne de $1000$ par $36$ :
   $$1000 = 27 \times 36 + 28$$
   Le quotient est $27$. Il se produit donc **$27$ coïncidences parfaites** au cours de cette seconde d'enregistrement (aux instants $36 \text{ ms}$, $72 \text{ ms}$, ..., $972 \text{ ms}$).

4. **Analyse critique et limites du modèle :**
   Le modèle arithmétique rigoureux prédit une coïncidence mathématique exacte tous les $36 \text{ ms}$. Cependant, l'énoncé indique une incertitude de mesure (gigue) de $\pm 0{,}5 \text{ ms}$ par période. 
   * Pour l'oscillateur $A$, la durée réelle de trois périodes peut varier entre $3 \times (12 - 0{,}5) = 34{,}5 \text{ ms}$ et $3 \times (12 + 0{,}5) = 37{,}5 \text{ ms}$.
   * Pour l'oscillateur $B$, la durée réelle de deux périodes peut varier entre $2 \times (18 - 0{,}5) = 35{,}0 \text{ ms}$ et $2 \times (18 + 0{,}5) = 38{,}0 \text{ ms}$.
   Les intervalles de tolérance temporelle des deux signaux s'intersectent ($[34{,}5 ; 37{,}5]$ et $[35{,}0 ; 38{,}0]$). Par conséquent, la coïncidence théorique à $36 \text{ ms}$ ne se produira pas nécessairement à un instant mathématiquement ponctuel, mais pourra être "brouillée" ou étalée dans une fenêtre temporelle d'incertitude. 
   En acoustique expérimentale, un modèle arithmétique pur doit donc être complété par une analyse statistique des erreurs pour valider si les coïncidences observées sont significatives ou si elles relèvent du bruit de mesure.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
