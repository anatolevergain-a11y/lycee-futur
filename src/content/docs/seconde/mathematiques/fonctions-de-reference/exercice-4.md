---
title: "Exercice 4 : Refroidissement d'un processeur PC"
description: "Application pratique du chapitre Fonctions de référence"
---

### 🌐 Contexte concret

Lorsqu'un ordinateur effectue des tâches lourdes (jeu vidéo, rendu 3D), son processeur (CPU) chauffe. Pour éviter la surchauffe et les dommages matériels, le système de ventilation s'active. 

On modélise la température $T$ (en degrés Celsius) du processeur en fonction du temps $t$ (en minutes) écoulé après la fermeture d'un jeu exigeant, par la fonction $f$ définie sur l'intervalle $[0 ; 10]$ par :

$$f(t) = 2(t - 3)^2 + 35$$

### ❓ Énoncé

1. **Calcul initial :** Quelle est la température du processeur au moment exact où l'on ferme le jeu ($t = 0$) ? Quelle est sa température après 3 minutes ?
2. **Variation et extremum :** En utilisant les propriétés des fonctions de référence, indiquez le sens de variation de la fonction $f$ sur l'intervalle $[0 ; 3]$, puis sur $[3 ; 10]$. Quel est le minimum de cette fonction et pour quelle valeur est-il atteint ?
3. **Seuil de sécurité :** Le constructeur indique que le processeur fonctionne de manière optimale en dessous de $53\,^\circ\text{C}$. Résolvez par le calcul l'inéquation $f(t) \le 53$ pour déterminer pendant combien de temps (ou à partir de quel moment) le processeur retrouve une température optimale.

---

### 💡 Indice

* **Question 1 :** Remplacez simplement la variable $t$ par les valeurs $0$ puis $3$ dans l'expression de $f(t)$.
* **Question 2 :** L'expression $f(t) = 2(t - 3)^2 + 35$ est de la forme $a(x - \alpha)^2 + \beta$. C'est la forme canonique d'une fonction polynôme du second degré, que l'on étudie à partir de la fonction de référence $x \mapsto x^2$. Rappelez-vous comment les variations d'une fonction carré sont affectées par une translation et une multiplication par un nombre positif.
* **Question 3 :** Remplacez $f(t)$ par $53$, puis ramenez l'inéquation à une forme factorisable en utilisant une identité remarquable (ou en reconnaissant le lien avec la fonction carré).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul initial
* **À $t = 0$ (fermeture du jeu) :**
  On calcule $f(0)$ :
  $$f(0) = 2(0 - 3)^2 + 35$$
  $$f(0) = 2(-3)^2 + 35$$
  $$f(0) = 2(9) + 35 = 18 + 35 = 53$$
  La température initiale du processeur est de $53\,^\circ\text{C}$.

* **À $t = 3$ (après 3 minutes) :**
  On calcule $f(3)$ :
  $$f(3) = 2(3 - 3)^2 + 35$$
  $$f(3) = 2(0)^2 + 35 = 0 + 35 = 35$$
  La température du processeur après 3 minutes est de $35\,^\circ\text{C}$.

---

#### 2. Variation et extremum
L'expression de $f(t)$ est $2(t - 3)^2 + 35$. Elle se déduit de la fonction de référence $u \mapsto u^2$ par des transformations successives (translation horizontale de 3 unités vers la droite, multiplication par 2, puis translation verticale de 35 unités vers le haut).

* **Sur l'intervalle $[0 ; 3]$ :** 
  La fonction carré $u \mapsto u^2$ est strictement décroissante sur l'intervalle négatif ou nul. Ici, lorsque $t$ varie de $0$ à $3$, $(t - 3)$ varie de $-3$ à $0$ tout en restant négatif. 
  Par conséquent, la fonction $f$ est **strictement décroissante** sur $[0 ; 3]$.

* **Sur l'intervalle $[3 ; 10]$ :** 
  Lorsque $t$ varie de $3$ à $10$, $(t - 3)$ varie de $0$ à $7$ en étant positif. Sur cet intervalle, la fonction carré est strictement croissante.
  Par conséquent, la fonction $f$ est **strictement croissante** sur $[3 ; 10]$.

* **Extremum :** 
  Puisque $(t - 3)^2 \ge 0$ pour tout réel $t$, on a :
  $$2(t - 3)^2 + 35 \ge 35$$
  Le **minimum** de la fonction $f$ est donc de $35$. Il est atteint pour $t = 3$ (ce qui correspond à la température minimale de $35\,^\circ\text{C}$ calculée à la question 1). *Note : Ce modèle mathématique montre une remontée de température après 3 min, ce qui est une simplification de la modélisation sur cet intervalle.*

---

#### 3. Seuil de sécurité
On cherche à résoudre l'inéquation $f(t) \le 53$ sur $[0 ; 10]$ :
$$2(t - 3)^2 + 35 \le 53$$

On soustrait 35 de chaque côté :
$$2(t - 3)^2 \le 53 - 35$$
$$2(t - 3)^2 \le 18$$

On divise par 2 :
$$(t - 3)^2 \le 9$$

On ramène tout du même côté pour utiliser une identité remarquable ($a^2 - b^2 = (a-b)(a+b)$) ou on applique la propriété de la fonction carré :
$$(t - 3)^2 - 9 \le 0$$
$$(t - 3)^2 - 3^2 \le 0$$
$$[(t - 3) - 3][(t - 3) + 3] \le 0$$
$$(t - 6)(t) \le 0$$
$$t(t - 6) \le 0$$

Étudions le signe du produit $t(t - 6)$ sur l'intervalle $[0 ; 10]$ à l'aide d'un tableau de signes :
* $t = 0$ pour $t = 0$
* $t - 6 = 0$ pour $t = 6$

Le polynôme du second degré est négatif ou nul entre ses racines :
Le produit est négatif pour $t \in [0 ; 6]$.

**Conclusion :** Le processeur retrouve une température inférieure ou égale au seuil de sécurité de $53\,^\circ\text{C}$ durant les 6 premières minutes suivant la fermeture du jeu (soit sur l'intervalle de temps $[0 ; 6]$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
