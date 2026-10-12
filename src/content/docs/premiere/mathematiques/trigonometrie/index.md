---
title: "Cours : Trigonométrie et fonctions associées"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Cours : Trigonométrie et fonctions associées

## 📌 1. Notions clés & Définitions

### Le cercle trigonométrique
Le plan muni d'un repère orthonormé $(O, \vec{i}, \vec{j})$ est orienté. Le **cercle trigonométrique** est le cercle de centre $O$ et de rayon $1$, orienté dans le sens direct (sens antihoraire).

### Enroulement de la droite numérique
À tout réel $x$ de la droite numérique, on associe un unique point $M$ du cercle trigonométrique par un procédé d'enroulement de la droite autour du cercle. La longueur de l'arc intercepté correspond à la valeur absolue de $x$.

### Radian
Le **radian** est l'unité de mesure d'angle telle que la longueur d'un arc de cercle de rayon $R$ intercepté par un angle de $\theta$ radians est égale à $\theta \times R$. Pour un cercle trigonométrique ($R=1$), la mesure en radians d'un angle correspond à la longueur de l'arc associé.
- Un tour complet correspond à $2\pi$ radians (soit $360^\circ$).
- Un angle plat correspond à $\pi$ radians (soit $180^\circ$).

### Cosinus et Sinus d'un réel
Pour tout nombre réel $x$ associé au point $M$ du cercle trigonométrique :
- Le **cosinus** de $x$, noté $\cos(x)$, est l'abscisse du point $M$.
- Le **sinus** de $x$, noté $\sin(x)$, est l'ordonnée du point $M$.

Par définition, pour tout réel $x$ :
$$\cos^2(x) + \sin^2(x) = 1$$
$$-1 \leq \cos(x) \leq 1 \quad \text{et} \quad -1 \leq \sin(x) \leq 1$$

---

## 📐 2. Formules et Propriétés fondamentales

### 2.1. Valeurs remarquables à connaître

| $x$ (radians) | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$\cos(x)$** | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| **$\sin(x)$** | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ |

### 2.2. Symétries et angles associés
Grâce aux symétries dans le cercle trigonométrique, on établit les relations suivantes pour tout réel $x$ :

* **Opposés ($x$ et $-x$) :**
  $$\cos(-x) = \cos(x)$$
  $$\sin(-x) = -\sin(x)$$

* **Supplémentaires ($x$ et $\pi - x$) :**
  $$\cos(\pi - x) = -\cos(x)$$
  $$\sin(\pi - x) = \sin(x)$$

* **Anti-supplémentaires ($x$ et $\pi + x$) :**
  $$\cos(\pi + x) = -\cos(x)$$
  $$\sin(\pi + x) = -\sin(x)$$

* **Complémentaires ($x$ et $\frac{\pi}{2} - x$) :**
  $$\cos\left(\frac{\pi}{2} - x\right) = \sin(x)$$
  $$\sin\left(\frac{\pi}{2} - x\right) = \cos(x)$$

### 2.3. Périodicité
Les fonctions cosinus et sinus sont **périodiques de période $2\pi$** :
$$\cos(x + 2k\pi) = \cos(x) \quad \text{et} \quad \sin(x + 2k\pi) = \sin(x) \quad (\text{avec } k \in \mathbb{Z})$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Résoudre dans l'intervalle $[-\pi; \pi]$ l'équation trigonométrique :
$$\cos(x) = \frac{1}{2}$$

**Résolution :**
1. **Recherche d'une solution particulière :**
   D'après le tableau des valeurs remarquables, on sait que :
   $$\cos\left(\frac{\pi}{3}\right) l= \frac{1}{2}$$
   Donc $x_1 = \frac{\pi}{3}$ est une solution.

2. **Utilisation des symétries du cercle :**
   La fonction cosinus étant paire, on a également :
   $$\cos\left(-\frac{\pi}{3}\right) = \cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$$
   Donc $x_2 = -\frac{\pi}{3}$ est une seconde solution.

3. **Vérification de l'intervalle :**
   Les solutions trouvées $\frac{\pi}{3}$ et $-\frac{\pi}{3}$ appartiennent bien toutes les deux à l'intervalle demandé $[-\pi; \pi]$.

**Conclusion :**
L'ensemble des solutions de l'équation dans $[-\pi; \pi]$ est :
$$S = \left\{ -\frac{\pi}{3} ; \frac{\pi}{3} \right\}$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention aux unités de mesure :** Vérifiez toujours si votre calculatrice est configurée en **radians** (rad) et non en degrés (deg) lors des évaluations.
* **Ne pas confondre parité et périodicité :** 
  - $\cos(-x) = \cos(x)$ (propriété de parité, le cosinus est une fonction paire).
  - $\cos(x + 2\pi) = \cos(x)$ (propriété de périodicité).
* **Rédaction des ensembles de solutions :** Lorsque l'on résout une équation sur $\mathbb{R}$, n'oubliez pas d'ajouter la période $2k\pi$ ($k \in \mathbb{Z}$) à vos solutions. Si l'intervalle est restreint (ex: $[0; 2\pi[$ ou $[-\pi; \pi]$), listez uniquement les valeurs appartenant strictement à cet intervalle.
* **Erreurs de signes avec les angles associés :** Visualisez toujours mentalement (ou au brouillon) un cercle trigonométrique pour vérifier le signe du cosinus ou du sinus lors de l'application des formules de transformation (comme $\pi - x$ ou $-x$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
