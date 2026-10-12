---
title: "Exercice 3 : Inéquations et contraintes budgétaires"
description: "Application pratique du chapitre Équations et inéquations"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la transition énergétique et de l'aménagement des territoires, les collectivités territoriales doivent fréquemment arbitrer entre plusieurs politiques d'investissement. Cet exercice propose d'analyser la modélisation mathématique d'une contrainte budgétaire et environnementale liée à la rénovation thermique de bâtiments publics.

Une municipalité souhaite optimiser l'isolation thermique d'un groupe scolaire pour réduire ses émissions de gaz à effet de serre. Deux types d'interventions sont envisagés :
1. **L'isolation des murs par l'extérieur (IME)**, dont le coût d'investissement est estimé à $120 \text{ € par m}^2$. D'après les études thermiques, chaque mètre carré ainsi isolé permet d'économiser $15 \text{ kg équivalent CO}_2$ par an.
2. **Le remplacement des menuiseries par du triple vitrage (MV)**, facturé forfaitairement à $400 \text{ € par fenêtre}$ posée. Chaque fenêtre remplacée permet d'éviter l'émission de $120 \text{ kg équivalent CO}_2$ par an.

Le conseil municipal fixe les contraintes suivantes pour l'année en cours :
* Un budget maximal d'investissement $B = 30\,000 \text{ €}$.
* Un objectif environnemental minimal à atteindre : éviter au moins $3\,000 \text{ kg équivalent CO}_2$ par an.
* Des impératifs techniques du bâtiment imposent d'installer au moins $10$ fenêtres neuves.

On note $x$ la surface en mètres carrés de murs isolés ($x \in \mathbb{N}$) et $y$ le nombre de fenêtres remplacées ($y \in \mathbb{N}$).

---

### ❓ Énoncé

1. **Modélisation :** Traduire les contraintes budgétaires, environnementales et techniques sous la forme d'un système de trois inéquations à deux inconnues $x$ et $y$.
2. **Résolution graphique et algébrique :** On décide de fixer le nombre de fenêtres remplacées à $y = 15$. 
   Déterminer par le calcul l'intervalle dans lequel doit se situer la surface $x$ de murs à isoler pour satisfaire à la fois la contrainte budgétaire et l'objectif environnemental.
3. **Analyse critique du modèle :** 
   Si la municipalité choisit d'isoler $x = 100 \text{ m}^2$ de murs et de remplacer $y = 20$ fenêtres, le respect des contraintes est-il assuré ? Quel est le coût total réel et la réduction des émissions obtenue ?
4. **Optimisation sous contrainte :** 
   Dans l'hypothèse où le coût de la main-d'œuvre venait à augmenter de $10\%$ pour l'isolation des murs (faisant passer le coût de l'IME à $132 \text{ € par m}^2$), exprimez la nouvelle inéquation budgétaire et discutez de la flexibilité du modèle initial face à cette incertitude économique.

---

### 💡 Indice de méthode

* **Pour la question 1 :** Traduisez chaque contrainte textuelle ("au plus", "au moins") par une inégalité mathématique ($<$ ou $\leqslant$, $>$ ou $\geqslant$). Veillez à bien homogénéiser les grandeurs et les unités.
* **Pour la question 2 :** Remplacez $y$ par $15$ dans les inéquations obtenues à la question 1, puis résolvez chaque inéquation séparément pour $x$ avant de trouver l'intersection des solutions.
* **Pour la question 3 :** Testez les valeurs de $x$ et $y$ dans les expressions algébriques du modèle, puis confrontez le résultat mathématique aux limites de la modélisation (les paramètres climatiques réels ou l'effet rebond ne sont par exemple pas pris en compte).

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation du problème
* **Contrainte budgétaire :** Le coût total ne doit pas dépasser le budget alloué.
  $$120x + 400y \leqslant 30\,000$$
* **Contrainte environnementale :** La réduction des émissions de $\text{CO}_2$ doit être supérieure ou égale à l'objectif.
  $$15x + 120y \geqslant 3\,000$$
* **Contrainte technique :** Le nombre minimal de fenêtres est fixé.
  $$y \geqslant 10$$

#### 2. Résolution pour $y = 15$
En posant $y = 15$, les inéquations deviennent :
* **Inéquation 1 (Budget) :**
  $$120x + 400(15) \leqslant 30\,000$$
  $$120x + 6\,000 \leqslant 30\,000$$
  $$120x \leqslant 24\,000$$
  $$x \leqslant \frac{24\,000}{120}$$
  $$x \leqslant 200$$

* **Inéquation 2 (Environnement) :**
  $$15x + 120(15) \geqslant 3\,000$$
  $$15x + 1\,800 \geqslant 3\,000$$
  $$15x \geqslant 1\,200$$
  $$x \geqslant \frac{1\,200}{15}$$
  $$x \geqslant 80$$

* **Vérification de la contrainte technique :** On a bien $y = 15 \geqslant 10$ (la condition est respectée).
* **Conclusion pour $x$ :** La surface de murs à isoler doit satisfaire l'encadrement $80 \leqslant x \leqslant 200$ (avec $x \in \mathbb{N}$).

#### 3. Analyse critique du modèle pour $x = 100$ et $y = 20$
* **Vérification du budget :**
  $$\text{Coût} = 120 \times 100 + 400 \times 20 = 12\,000 + 8\,000 = 20\,000 \text{ €}$$
  Puisque $20\,000 \leqslant 30\,000$, **la contrainte budgétaire est respectée**. La municipalité réalise même une économie de $10\,000 \text{ €}$ sur son enveloppe initiale.
* **Vérification de l'objectif environnemental :**
  $$\text{Réduction de }\text{CO}_2 = 15 \times 100 + 120 \times 20 = 1\,500 + 2\,400 = 3\,900 \text{ kg d'équivalent CO}_2\text{/an}$$
  Puisque $3\,900 \geqslant 3\,000$, **l'objectif environnemental est atteint et dépassé**.
* **Esprit critique :** Ce modèle mathématique est déterministe et linéaire. En réalité, les gains énergétiques dépendent de variables aléatoires ou non-linéaires (météorologie hivernale, comportement des usagers du bâtiment, vieillissement des matériaux). De plus, l'impact carbone de la fabrication des matériaux eux-mêmes ("bilan carbone gris") n'est pas intégré dans ce calcul de flux annuel.

#### 4. Impact d'une hausse des coûts (Robustesse du modèle)
Si le coût de l'isolation des murs augmente de $10\%$, son nouveau prix unitaire devient :
$$120 \times \left(1 + \frac{10}{100}\right) = 120 \times 1{,}10 = 132 \text{ € par m}^2$$
* **Nouvelle inéquation budgétaire :**
  $$132x + 400y \leqslant 30\,000$$
* **Discussion sur la flexibilité :** 
  Pour un même projet ($x = 100$ et $y = 20$), le nouveau coût serait de $132 \times 100 + 400 \times 20 = 13\,200 + 8\,000 = 21\,200 \text{ €}$. Le projet reste finançable. 
  Cependant, si la municipalité cherchait à saturer exactement son budget initial avec les anciennes valeurs limites, cette hausse de $10\%$ rendrait certaines combinaisons initialement valides impossibles à réaliser. Cela montre la nécessité d'intégrer une marge de sécurité (ou *tampon budgétaire*) lors de la phase de planification pour parer aux incertitudes économiques.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
