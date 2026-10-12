---
title: "Exercice 4 : Rendement maximal d'une éolienne"
description: "Application pratique du chapitre Dérivation et applications"
---

### 🌐 Contexte concret

Les énergies renouvelables jouent un rôle primordial dans la transition énergétique. Le rendement d'une éolienne dépend fortement de la vitesse du vent. Les ingénieurs modélisent la puissance électrique $P$ (exprimée en mégawatts, MW) délivrée par une éolienne en fonction de la vitesse du vent $v$ (exprimée en mètres par seconde, m/s). 

Pour une éolienne donnée, des mesures en soufflerie ont permis d'établir que la puissance $P(v)$ est modélisée par la fonction définie sur l'intervalle $[0 ; 25]$ par :
$$P(v) = -0,02v^3 + 0,9v^2$$

Au-delà de $25\text{ m/s}$, l'éolienne est mise en sécurité et s'arrête (donc $P(v) = 0$). Dans cet exercice, nous allons utiliser la dérivation pour déterminer à quelle vitesse du vent l'éolienne produit un rendement (une puissance) maximal.

---

### ❓ Énoncé

1. **Calcul de valeurs et sens physique :** Calculer la puissance fournie par l'éolienne pour un vent de $10\text{ m/s}$. 
2. **Étude de la fonction dérivée :** Calculer la dérivée $P'(v)$ de la fonction $P$ pour tout réel $v \in [0 ; 25]$.
3. **Recherche du maximum :** Étudier le signe de $P'(v)$ sur l'intervalle $[0 ; 25]$ et dresser le tableau de variations de la fonction $P$.
4. **Conclusion pour l'ingénieur :** En déduire la vitesse du vent pour laquelle la puissance de l'éolienne est maximale, ainsi que la valeur de cette puissance maximale.

---

### 💡 Indice

* **Question 1 :** Il suffit de substituer $v$ par $10$ dans l'expression de $P(v)$.
* **Question 2 :** Utilisez les formules de dérivation usuelles, notamment la dérivée d'une fonction de la forme $v^n$ (où $n$ est un entier).
* **Question 3 :** Le signe d'un polynôme du second degré $at^2 + bt + c$ s'étudie à l'aide de ses racines (valeurs pour lesquelles il s'annule).
* **Question 4 :** Le sommet du tableau de variations (maximum de la fonction) correspond au point où la dérivée s'annule en changeant de signe (passant de positive à négative).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la puissance pour $v = 10\text{ m/s}$
Remplaçons $v$ par $10$ dans l'expression de $P(v)$ :
$$P(10) = -0,02 \times (10)^3 + 0,9 \times (10)^2$$
$$P(10) = -0,02 \times 1000 + 0,9 \times 100$$
$$P(10) = -20 + 90 = 70$$
**Conclusion :** Pour un vent soufflant à $10\text{ m/s}$, l'éolienne délivre une puissance de $70\text{ MW}$.

#### 2. Calcul de la fonction dérivée $P'(v)$
La fonction $P$ est dérivable sur $[0 ; 25]$ en tant que fonction polynôme. Dérivons terme à terme :
* La dérivée de $-0,02v^3$ est $-0,02 \times (3v^2) = -0,06v^2$.
* La dérivée de $0,9v^2$ est $0,9 \times (2v) = 1,8v$.

Ainsi, pour tout $v \in [0 ; 25]$ :
$$P'(v) = -0,06v^2 + 1,8v$$

#### 3. Étude du signe de $P'(v)$ et tableau de variations
Factorisons l'expression de $P'(v)$ pour étudier plus facilement son signe :
$$P'(v) = v(-0,06v + 1,8)$$

Cherchons les racines de $P'(v) = 0$ :
$v = 0 \quad \text{ou} \quad -0,06v + 1,8 = 0 \iff 1,8 = 0,06v \iff v = \frac{1,8}{0,06} = 30$

Cependant, la valeur $v = 30$ est hors de notre intervalle d'étude $[0 ; 25]$. 
Sur l'intervalle $[0 ; 25]$, le terme $(-0,06v + 1,8)$ s'annule pour $v = 30$, mais pour $v \in [0 ; 25]$, ce terme est strictement positif (par exemple, pour $v = 0$, il vaut $1,8$ et pour $v = 25$, il vaut $-0,06(25) + 1,8 = 0,3$).
Plus rigoureusement, le polynôme $-0,06v^2 + 1,8v$ est du signe opposé à $a$ ($a = -0,06 < 0$) à l'extérieur des racines ($0$ et $30$). Sur $[0 ; 25]$, il est donc positif entre $0$ et $25$.

* $P'(0) = 0$
* Pour tout $v \in ]0 ; 25]$, $P'(v) > 0$ (car $v > 0$ et $-0,06v + 1,8 > 0$).

**Tableau de variations :**
* $P(0) = -0,02(0)^3 + 0,9(0)^2 = 0$
* $P(25) = -0,02(25)^3 + 0,9(25)^2 = -0,02(15625) + 0,9(625) = -312,5 + 562,5 = 250$

La fonction $P$ est donc strictement croissante sur l'intervalle $[0 ; 25]$.

#### 4. Conclusion pour l'ingénieur
Puisque la fonction $P$ est strictement croissante sur $[0 ; 25]$, la puissance est maximale atteinte à la borne supérieure de l'intervalle, c'est-à-dire pour une vitesse de vent de **$25\text{ m/s}$**.

La puissance maximale que cette éolienne peut produire avant sa mise en sécurité est de :
$$P(25) = 250\text{ MW}$$

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
