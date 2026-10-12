---
title: "Cours : Statistiques et probabilités"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Fiche de Cours : Statistiques et probabilités (Classe de Seconde)

## 📌 1. Notions clés & Définitions

### Statistiques descriptives
* **Population :** Ensemble des éléments (les "individus") sur lesquels porte une étude statistique.
* **Caractère :** Propriété étudiée sur cette population. Il peut être :
  * **Qualitatif** (ex. : couleur des yeux, PCS).
  * **Quantitatif** (ex. : taille, note, âge) : discret (valeurs isolées) ou continu (regroupé en classes).
* **Effectif ($n_i$) :** Nombre d'individus associés à une valeur ou une classe donnée. L'effectif total est noté $N$.
* **Fréquence ($f_i$) :** Rapport entre l'effectif d'une valeur et l'effectif total $N$. Elle s'exprime sous forme de décimal, de fraction ou de pourcentage.

### Probabilités
* **Expérience aléatoire :** Expérience reproductible dont les résultats possibles (issues) sont connus à l'avance, mais dont on ne peut prédire avec certitude lequel se produira.
* **Univers ($\Omega$) :** Ensemble de toutes les issues possibles d'une expérience aléatoire.
* **Événement ($A$) :** Partie (sous-ensemble) de l'univers $\Omega$.
* **Probabilité d'un événement $P(A)$ :** Nombre réel compris entre $0$ et $1$ qui quantifie la chance qu'a l'événement $A$ de se réaliser.

---

## 📐 2. Formules et Propriétés fondamentales

### 1. Statistiques à une variable

* **Fréquence :**
  $$f_i = \frac{n_i}{N}$$
  *(avec $\sum n_i = N$ et $\sum f_i = 1$ ou $100\%$)*

* **Moyenne pondérée ($\bar{x}$) :**
  $$\bar{x} = \frac{n_1 x_1 + n_2 x_2 + \dots + n_k x_k}{N} = \frac{1}{N} \sum_{i=1}^{k} n_i x_i$$
  où les $x_i$ sont les valeurs et les $n_i$ les effectifs associés.

* **Médiane ($Me$) :**
  Valeur qui partage la série statistique ordonnée en deux groupes de même effectif (50% des effectifs inférieurs ou égaux à $Me$, 50% supérieurs ou égaux).

* **Étendue ($E$) :**
  Différence entre la plus grande et la plus petite valeur de la série :
  $$E = x_{\max} - x_{\min}$$

* **Quartiles ($Q_1$ et $Q_3$) :**
  * Le premier quartile $Q_1$ est la plus petite valeur telle qu'au moins 25% des effectifs lui soient inférieurs ou égaux.
  * Le troisième quartile $Q_3$ est la plus petite valeur telle qu'au moins 75% des effectifs lui soient inférieurs ou égaux.

---

### 2. Calcul des Probabilités

* **Propriétés de base :**
  * Pour tout événement $A$, $0 \le P(A) \le 1$.
  * La somme des probabilités de toutes les issues élémentaires de l'univers $\Omega$ est égale à $1$.
  * Si $A$ et $B$ sont deux événements incompatibles ($A \cap B = \emptyset$), alors :
    $$P(A \cup B) = P(A) + P(B)$$

* **Événement contraire ($\bar{A}$) :**
  L'événement contraire de $A$ est l'événement qui se réalise si et seulement si $A$ ne se réalise pas.
  $$P(\bar{A}) = 1 - P(A)$$

* **Équiprobabilité :**
  Si toutes les issues de l'univers $\Omega$ ont la même probabilité de se réaliser (loi équirépartie), alors pour tout événement $A$ :
  $$P(A) = \frac{\text{Nombre d'issues favorables à } A}{\text{Nombre total d'issues de } \Omega}$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un professeur de mathématiques analyse les notes (sur 20) obtenues par une classe de Seconde lors d'un contrôle :
$$\text{Notes } (x_i) : 8, 10, 12, 14, 16$$
$$\text{Effectifs } (n_i) : 2, 6, 10, 5, 2$$

1. Calculer l'effectif total $N$.
2. Calculer la moyenne de la classe $\bar{x}$.
3. Déterminer la médiane $Me$ et l'étendue $E$ de cette série.

---

**Correction :**

1. **Calcul de l'effectif total $N$ :**
   $$N = \sum n_i = 2 + 6 + 10 + 5 + 2 = 25$$
   L'effectif total est de $25$ élèves.

2. **Calcul de la moyenne $\bar{x}$ :**
   $$\bar{x} = \frac{(2 \times 8) + (6 \times 10) + (10 \times 12) + (5 \times 14) + (2 \times 16)}{25}$$
   $$\bar{x} = \frac{16 + 60 + 120 + 70 + 32}{25} = \frac{298}{25} = 11,92$$
   La moyenne de la classe est de $11,92$ sur 20.

3. **Détermination de la médiane et de l'étendue :**
   * **Étendue :**
     $$E = x_{\max} - x_{\min} = 16 - 8 = 8$$
   * **Médiane :**
     L'effectif total est $N = 25$ (impair). On calcule $\frac{N+1}{2} = \frac{26}{2} = 13$.
     La médiane est donc la $13^{\text{e}}$ valeur de la série ordonnée.
     * Effectifs cumulés croissants :
       * Note 8 : 2 élèves (cumul : 2)
       * Note 10 : 6 élèves (cumul : $2 + 6 = 8$)
       * Note 12 : 10 élèves (cumul : $8 + 10 = 18$)
     La $13^{\text{e}}$ valeur se trouve dans le groupe des notes 12.
     Donc, $Me = 12$.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention au calcul de la moyenne :** Ne jamais calculer la moyenne des notes sans tenir compte des effectifs (ou des fréquences). Oublier de multiplier chaque valeur par son effectif $n_i$ avant de diviser par $N$ est une erreur classique.
* **Confusion entre moyenne et médiane :** La moyenne est sensible aux valeurs extrêmes (les "valeurs aberrantes"), contrairement à la médiane. En présence de telles valeurs, la médiane est un indicateur de position souvent plus représentatif.
* **Rédaction en probabilités :** 
  * Un résultat de probabilité doit toujours être compris entre $0$ et $1$ (ou exprimé en pourcentage entre $0\%$ et $100\%$). Une probabilité négative ou strictement supérieure à $1$ (ou supérieure à $100$) indique une erreur de calcul.
  * Ne pas confondre un événement $A$ (qui est un ensemble d'issues) et sa probabilité $P(A)$ (qui est un nombre). On écrit $P(A) = 0{,}3$ et non $A = 0{,}3$.
* **Justifications rigoureuses :** Pour le calcul des quartiles ou de la médiane, veillez à bien mentionner le tri préalable de la série par ordre croissant.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
