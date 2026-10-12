---
title: "Exercice 1 : Forme canonique et paraboles d'optimisation"
description: "Application pratique du chapitre Fonctions polynômes du second degré"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'évaluation environnementale et économique d'un procédé industriel de fabrication de matériaux isolants, l'étude de la consommation énergétique et des rejets thermiques est primordiale. Soit $x$ la quantité produite d'un certain matériau, exprimée en tonnes par jour, avec $x \in [0 ; 10]$.

Les ingénieurs ont modélisé le bénéfice net journalier $B(x)$, exprimé en milliers d'euros ($\text{k\texte{ \euro}}$), par la fonction suivante :
$$B(x) = -2x^2 + 16x - 24$$

Cependant, ce modèle mathématique repose sur des hypothèses simplificatrices : il ne prend pas en compte les coûts fixes de maintenance imprévue ni la saturation des capacités de stockage au-delà de $8 \text{ tonnes/jour}$. L'analyse rigoureuse de cette fonction par la forme canonique permettra d'évaluer la viabilité économique de ce procédé tout en mesurant les limites du modèle.

---

### ❓ Énoncé

1. Développer, pour tout $x \in \mathbb{R}$, l'expression $-2(x - 4)^2 + 8$ et vérifier qu'elle coïncide avec l'expression de $B(x)$. Nommer cette forme.
2. Déterminer algébriquement la quantité $x$ à produire pour maximiser le bénéfice journalier. Quel est ce bénéfice maximal ? Justifier à l'aide des propriétés du cours sur les fonctions polynômes du second degré.
3. Résoudre l'inéquation $B(x) \ge 0$ sur l'intervalle $[0 ; 10]$. Interpréter le résultat sur le plan économique et discuter de la pertinence du modèle pour $x > 8$.
4. Un ingénieur suggère d'ajouter une taxe carbone proportionnelle à la production, modifiant le bénéfice net par la fonction $B_t(x) = B(x) - 2x$. Sans refondre tous les calculs, déterminer le nouvel optimum de production et analyser l'impact de cette taxe sur le seuil de rentabilité.

---

### 💡 Indice de méthode

* **Question 1 :** Pour identifier la forme canonique $a(x-\alpha)^2 + \beta$, développez l'expression proposée par une double distributivité ou en utilisant une identité remarquable.
* **Question 2 :** Le signe du coefficient $ُa$ dicte les variations de la parabole. Son sommet $(\alpha, \beta)$ fournit directement l'extremum recherché.
* **Question 3 :** Utilisez la forme factorisée ou la forme canonique pour résoudre l'inéquation. Pensez à relier la variable mathématique $x$ aux contraintes physiques du domaine de définition.
* **Question 4 :** Regroupez les termes de même degré pour exprimer $B_t(x)$ sous la forme d'un nouveau polynôme du second degré, puis réappliquez la méthode de mise sous forme canonique.

---

### 📋 Correction détaillée pas à pas

#### 1. Développement et identification de la forme canonique
Soit l'expression $E(x) = -2(x - 4)^2 + 8$. Développons-la étape par étape :
$$E(x) = -2(x^2 - 8x + 16) + 8$$
$$E(x) = -2x^2 + 16x - 32 + 8$$
$$E(x) = -2x^2 + 16x - 24$$

On observe que $E(x) = B(x)$. 
Cette écriture $-2(x - 4)^2 + 8$ est appelée la **forme canonique** de la fonction polynôme du second degré $B$. Ici, $a = -2$, $\alpha = 4$ et $\beta = 8$.

---

#### 2. Détermination de l'optimum de production
La fonction $B$ est sous la forme canonique $B(x) = a(x - \alpha)^2 + \beta$ avec $a = -2$, $\alpha = 4$ et $\beta = 8$.
Comme $a = -2 < 0$, la parabole est tournée vers le bas : la fonction admet un maximum atteint en $x = \alpha$.

* **Quantité optimale :** $x = 4 \text{ tonnes/jour}$.
* **Bénéfice maximal :** $B(4) = \beta = 8 \text{ k\texte{ \euro}}$ (soit $8000 \text{ \euro}$).

*Analyse critique :* Ce résultat mathématique fournit une cible précise. Toutefois, en conditions réelles, la transition vers ce point exact comporte des incertitudes de mesure (fluctuation de la qualité des matières premières, consommation énergétique variable des machines).

---

#### 3. Résolution de l'inéquation et analyse du modèle
Nous cherchons à résoudre $B(x) \ge 0$, c'est-à-dire :
$$-2(x - 4)^2 + 8 \ge 0$$
$$-2(x - 4)^2 \ge -8$$
$$(x - 4)^2 \le 4$$

Cette inéquation équivaut à :
$$-2 \le x - 4 \le 2$$
En ajoutant $4$ à chaque membre :
$$2 \le x \le 6$$

* **Interprétation économique :** L'entreprise réalise un bénéfice positif ou nul (seuil de rentabilité atteint) pour une production comprise entre $2 \text{ tonnes}$ et $6 \text{ tonnes}$ par jour.
* **Limites du modèle pour $x > 8$ :** Pour $x = 9$, $B(9) = -2(9)^2 + 16(9) - 24 = -162 + 144 - 24 = -42 \text{ k\texte{ \euro}}$. Le modèle mathématique prédit des pertes abyssales. En réalité, le domaine d'étude est restreint à $[0 ; 10]$, mais les hypothèses de départ ne prenaient pas en compte la saturation des infrastructures. Le modèle devient caduc aux extrêmes car les coûts logistiques augmentent de manière non linéaire.

---

#### 4. Impact de la taxe carbone
La nouvelle fonction de bénéfice est :
$$B_t(x) = (-2x^2 + 16x - 24) - 2x$$
$$B_t(x) = -2x^2 + 14x - 24$$

Mettons $B_t(x)$ sous forme canonique en factorisant par $a = -2$ :
$$B_t(x) = -2 \left( x^2 - 7x + 12 \pright)$$
Utilisons l'identité remarquable sur le début du développement ($x^2 - 7x = \left(x - \frac{7}{2}\right)^2 - \frac{49}{4}$) :
$$B_t(x) = -2 \left[ \left(x - \frac{7}{2}\right)^2 - \frac{49}{4} + \frac{48}{4} \right]$$
$$B_t(x) = -2 \left[ \left(x - 3{,}5\right)^2 - \frac{1}{4} \right]$$
$$B_t(x) = -2(x - 3{,}5)^2 + \frac{1}{2}$$

* **Nouvel optimum :** La production qui maximise le bénéfice sous contrainte de taxe carbone est maintenant de $3{,}5 \text{ tonnes/jour}$ (au lieu de $4$), pour un bénéfice maximal réduit à $0{,}5 \text{ k\texte{ \euro}}$ (soit $500 \text{ \euro}$).
* **Analyse du compromis :** Cette modélisation montre qu'une taxe proportionnelle décourage l'intensification de la production (baisse de l'optimum de $0{,}5 \text{ tonne}$) tout en réduisant drastiquement la marge bénéficiaire de l'industriel, illustrant le arbitrage complexe entre régulation environnementale et viabilité économique des entreprises.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
