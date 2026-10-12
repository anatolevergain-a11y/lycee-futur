---
title: "Exercice : Polynômes du second degré"
description: "Démonstration appliquée : Optimisation de la surface de panneaux photovoltaïques"
---

### 🌐 Contexte moderne & concret

Dans le cadre de la transition énergétique, une commune souhaite installer une centrale solaire citoyenne sur un terrain rectangulaire inutilisé. Pour maximiser la production d'électricité tout en respectant les normes d'urbanisme, les ingénieurs disposent d'une longueur de clôture de $120\text{ mètres}$ pour entourer la zone des panneaux photovoltaïques. 

L'objectif est de déterminer les dimensions de ce rectangle pour que la surface captant l'énergie solaire soit maximale, réduisant ainsi les coûts d'installation par kilowatt-câblé.

---

### ❓ Énoncé (3 à 4 questions progressives)

Soit $x$ la largeur du rectangle (en mètres).

1. **Mise en inéquation :** Sachant que le périmètre total de la clôture est de $120\text{ mètres}$, exprime la longueur $L$ du rectangle en fonction de $x$. Précise l'ensemble de définition $I$ possible pour la variable $x$.
2. **Modélisation :** Montre que la surface $S(x)$ de la zone photovoltaïque peut être modélisée par la fonction polynôme du second degré :
   $$S(x) = -x^2 + 60x$$
3. **Optimisation :** À l'aide de la forme canonique ou des propriétés du sommet d'une parabole, détermine pour quelle valeur de $x$ la surface $S(x)$ est maximale. Quelle est alors cette surface maximale ?
4. **Interprétation citoyenne :** Quelles sont les dimensions exactes (longueur et largeur) que les services techniques doivent retenir pour ce projet photovoltaïque ?

---

### 💡 Indice

* **Question 1 :** Le périmètre d'un rectangle est donné par la formule $P = 2 \times (\text{longueur} + \text{largeur})$. Utilisez l'information $P = 120$.
* **Question 2 :** L'aire d'un rectangle est $\text{Longueur} \times \text{largeur}$. Remplacez la longueur par l'expression trouvée à la question 1.
* **Question 3 :** Pour une fonction polynôme de la forme $f(x) = ax^2 + bx + c$ avec $a < 0$, le sommet de la parabole donne l'extremum. Son abscisse est $x_0 = -\frac{b}{2a}$.
* **Question 4 :** Relisez bien les questions précédentes pour assembler les dimensions finales.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Mise en inéquation et ensemble de définition
Soit $x$ la largeur du rectangle et $L$ sa longueur (en mètres). 
Le périmètre du rectangle est égal à $120\text{ m}$, donc :
$$2(L + x) en mètres = 120$$
En divisons par $2$ de chaque côté :
$$L + x = 60$$
On en déduit l'expression de la longueur en fonction de $x$ :
$$L = 60 - x$$

**Ensemble de définition :** 
Puisque $x$ et $L$ représentent des dimensions physiques (des longueurs), elles doivent être strictement positives :
* $x > 0$
* $L > 0 \implies 60 - x > 0 \implies x < 60$

L'ensemble de définition de la fonction est donc l'intervalle $I = ]0 ; 60[$.

#### 2. Modélisation de la surface
La surface $S(x)$ du terrain rectangulaire est le produit de sa longueur par sa largeur :
$$S(x) = L \times x$$
En remplaçant $L$ par l'expression trouvée à la question 1 :
$$S(x) = (60 - x)x$$
En développant, on obtient bien la forme polynômiale attendue :
$$S(x) = -x^2 + 60x$$
Il s'agit d'un polynôme du second degré de la forme $ax^2 + bx + c$ avec $a = -1$, $b = 60$ et $c = 0$.

#### 3. Optimisation de la surface
Puisque le coefficient $a = -1$ est strictement négatif ($a < 0$), la parabole représentant la fonction $S$ est tournée vers le bas. La fonction admet donc un maximum atteint en son sommet.

L'abscisse $x_s$ du sommet de la parabole est donnée par la formula du cours :
$$x_s = -\frac{b}{2a}$$
Ici :
$$x_s = -\frac{60}{2 \times (-1)} = \frac{-60}{-2} = 30$$
Cette valeur $30$ appartient bien à l'intervalle de définition $]0 ; 60[$.

Calculons la surface maximale correspondante $S(30)$ :
$$S(30) = -(30)^2 + 60(30) = -900 + 1800 = 900$$
La surface maximale est donc de $900\text{ m}^2$.

#### 4. Interprétation citoyenne
Pour obtenir cette surface maximale de $900\text{ m}^2$ de panneaux photovoltaïques :
* La largeur doit être de $x = 30\text{ mètres}$.
* La longueur correspondante est $L = 60 - x = 60 - 30 = 30\text{ mètres}$.

**Conclusion :** Pour optimiser l'installation de la centrale solaire citoyenne, le terrain doit être un **carré de $30\text{ mètres de côté}$**. Cette configuration mathématique garantit le rendement surfacique maximal avec le budget de clôture imparti.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
