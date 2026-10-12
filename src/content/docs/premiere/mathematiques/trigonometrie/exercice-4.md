---
title: "Exercice 4 : Oscillation d'un pont suspendu"
description: "Application pratique du chapitre Trigonométrie et fonctions associées"
---

### 🌐 Contexte concret

Lorsqu'un vent fort souffle perpendiculairement au tablier d'un pont suspendu, celui-ci peut entrer en oscillation. Pour modéliser le déplacement vertical $y$ (en mètres) d'un point particulier du pont en fonction du temps $t$ (en secondes), les ingénieurs utilisent des fonctions trigonométriques. 

On étudie le mouvement de ce pont sur une durée de $10$ secondes, modélisé par la fonction $f$ définie pour tout réel $t \in [0 ; 10]$ par :
$$f(t) = 0{,}5 \cos\left(\frac{\pi}{2} t\right)$$

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Calculs préliminaires :** Déterminer la position initiale du point (à $t = 0$) ainsi que sa position au bout d'une seconde ($t = 1$).
2. **Périodicité et extremum :** Rappeler la période de la fonction $t \mapsto \cos(\omega t)$ puis déterminer l'amplitude maximale des oscillations de ce pont.
3. **Résolution d'équation :** Déterminer tous les instants $t$ de l'intervalle $[0 ; 10]$ où le point repasse par sa position d'équilibre ($y = 0$).
4. **Étude de signe :** Résoudre sur l'intervalle $[0 ; 10]$ l'inéquation $f(t) \ge 0{,}25$, ce qui correspond aux moments où le déplacement vertical dépasse la moitié de l'amplitude maximale.

---

### 💡 Indice

* **Question 1 :** Pensez à utiliser les valeurs remarquables du cosinus pour des angles en radians. Attention au mode de votre calculatrice !
* **Question 2 :** Pour une fonction de la forme $t \mapsto \cos(\omega t)$, la période $T$ est donnée par la formule $T = \frac{2\pi}{\omega}$.
* **Question 3 :** Résoudre $f(t) = 0$ revient à résoudre $\cos\left(\frac{\pi}{2} t\right) = 0$. Pensez au cercle trigonométrique pour trouver les angles dont le cosinus est nul.
* **Question 4 :** L'inéquation se ramène à $\cos\left(\frac{\pi}{2} t\right) \ge \frac{1}{2}$. Servez-vous des angles remarquables sur $[0 ; 2\pi]$ avant d'élargir à l'intervalle d'étude.

---

### 📋 Correction détaillée pas à pas

#### 1. Calculs préliminaires
* **À $t = 0$ s :**
  $$f(0) = 0{,}5 \cos\left(\frac{\pi}{2} \times 0\right) = 0{,}5 \cos(0) = 0{,}5 \times 1 = 0{,}5\text{ m}$$
  Le point est initialement situé à $0{,}5$ mètre au-dessus de sa position d'équilibre.

* **À $t = 1$ s :**
  $$f(1) = 0{,}5 \cos\left(\frac{\pi}{2} \times 1\right) = 0{,}5 \cos\left(\frac{\pi}{2}\right) = 0{,}5 \times 0 = 0\text{ m}$$
  Au bout d'une seconde, le point passe par sa position d'équilibre.

#### 2. Périodicité et amplitude
* La fonction est de la forme $f(t) = A \cos(\omega t)$ avec $\omega = \frac{\pi}{2}$.
  La période $T$ des oscillations est :
  $$T = \frac{2\pi}{\omega} = \frac{2\pi}{\frac{\pi}{2}} = 2\pi \times \frac{2}{\pi} = 4\text{ secondes}$$
  Le mouvement du pont se répète toutes les $4$ secondes.

* Pour tout réel $t$, on sait que $-1 \le \cos\left(\frac{\pi}{2} t\right) \le 1$.
  En multipliant par $0{,}5$, on obtient :
  $$-0{,}5 \le f(t) \le 0{,}5$$
  L'amplitude maximale des oscillations est donc de $0{,}5$ mètre (le pont oscille entre $-0{,}5\text{ m}$ et $+0{,}5\text{ m}$).

#### 3. Instants de passage par la position d'équilibre ($y = 0$)
On cherche $t \in [0 ; 10]$ tel que $f(t) = 0$, soit :
$$0{,}5 \cos\left(\frac{\pi}{2} t\right) = 0 \iff \cos\left(\frac{\pi}{2} t\right) = 0$$

Sur le cercle trigonométrique, le cosinus d'un angle est nul si cet angle est de la forme $\frac{\pi}{2} + k\pi$ avec $k \in \mathbb{Z}$. Ainsi :
$$\frac{\pi}{2} t = \frac{\pi}{2} + k\pi$$

En divisant toute l'équation par $\frac{\pi}{2}$ (ce qui équivaut à multiplier par $\frac{2}{\pi}$), on obtient :
$$t = 1 + 2k \quad \text{avec } k \in \mathbb{Z}$$

Cherchons les valeurs de $k$ telles que $0 \le 1 + 2k \le 10$ :
$$-1 \le 2k \le 9 \iff -0{,}5 \le k \le 4{,}5$$
Comme $k$ est un entier ($k \in \mathbb{Z}$), les valeurs possibles pour $k$ sont $0, 1, 2, 3$ et $4$.

* Pour $k = 0 : t = 1 + 2(0) = 1$
* Pour $k = 1 : t = 1 + 2(1) = 3$
* Pour $k = 2 : t = 1 + 2(2) = 5$
* Pour $k = 3 : t = 1 + 2(3) = 7$
* Pour $k = 4 : t = 1 + 2(4) = 9$

Le pont repasse par sa position d'équilibre aux instants $t = 1\text{ s}$, $t = 3\text{ s}$, $t = 5\text{ s}$, $t = 7\text{ s}$ et $t = 9\text{ s}$.

#### 4. Résolution de l'inéquation $f(t) \ge 0{,}25$
On cherche $t \in [0 ; 10]$ tel que :
$$0{,}5 \cos\left(\frac{\pi}{2} t\right) \ge 0{,}25 \iff \cos\left(\frac{\pi}{2} t\right) \ge \frac{0{,}25}{0{,}5} \iff \cos\left(\frac{\pi}{2} t\right) \ge \frac{1}{2}$$

Posons $X = \frac{\pi}{2} t$. Sur un tour complet, $\cos(X) \ge \frac{1}{2}$ pour $X \in \left[-\frac{\pi}{3} ; \frac{\pi}{3}\right]$.

En tenant compte de la périodicité et de l'intervalle $[0 ; 10]$ pour $t$ (donc $X \in [0 ; 5\pi]$), on résout par périodes successives pour $\frac{\pi}{2} t$ :
1. Pour la 1ère période : $\left[0 ; \frac{\pi}{3}\right]$ ce qui donne $t \in \left[0 ; \frac{2}{3}\right]$.
2. Pour la 2e période (autour de $2\pi$) : $2\pi - \frac{\pi}{3} \le \frac{\pi}{2} t \le 2\pi + \frac{\pi}{3}$, soit $\frac{5\pi}{3} \le \frac{\pi}{2} t \le \frac{7\pi}{3}$, ce qui donne $t \in \left[\frac{10}{3} ; \frac{14}{3}\right]$.
3. Pour la 3e période (autour de $4\pi$) : $4\pi - \frac{\pi}{3} \le \frac{\pi}{2} t \le 4\pi + \frac{\pi}{3}$, soit $\frac{11\pi}{3} \le \frac{\pi}{2} t \le \frac{13\pi}{3}$, ce qui donne $t \in \left[\frac{22}{3} ; \frac{26}{3}\right]$.
*(La 4e période dépasse la valeur $t = 10$, car $\frac{\pi}{2} t \le 6\pi \implies t \le 12$, mais s'arrête à $10$)*.

En intersection avec l'intervalle $[0 ; 10]$, l'ensemble des solutions est :
$$S = \left[0 ; \frac{2}{3}\right] \cup \left[\frac{10}{3} ; \frac{14}{3}\right] \cup \left[\frac{22}{3} ; \frac{26}{3}\right]$$

*(Soit environ $[0 ; 0{,}67] \cup [3{,}33 ; 4{,}67] \cup [7{,}33 ; 8{,}67]$ en secondes).*

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
