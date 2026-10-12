---
title: "Exercice : Mouvement dans un champ uniforme"
description: "Démonstration appliquée : Mise en orbite de satellites de télécommunication Starlink"
---

### 🌐 Contexte

La constellation **Starlink**, développée par l'entreprise SpaceX, vise à fournir un accès à Internet à haut débit via un réseau de milliers de petits satellites placés en orbite terrestre basse (LEO - *Low Earth Orbit*). Contrairement aux satellites géostationnaires situés à $36\,000\text{ km}$, les satellites Starlink évoluent à une altitude beaucoup plus faible, typiquement $h = 550\text{ km}$.

Pour atteindre cette altitude, le lanceur Falcon 9 libère le satellite avec une vitesse initiale adaptée. Dans cette étude, nous allons modéliser la phase finale de mise en orbite circulaire en considérant, par simplification locale, que le champ de pesanteur terrestre $\vec{g}$ est uniforme au voisinage de l'altitude du satellite. 

**Données utiles :**
*   Intensité du champ de pesanteur terrestre au sol : $g_0 = 9{,}81\text{ m}\cdot\text{s}^{-2}$
*   Rayon de la Terre : $R_T = 6\,400\text{ km}$
*   Altitude du satellite Starlink : $h = 550\text{ km}$
*   On rappelle que la valeur du champ de pesanteur à l'altitude $h$ s'exprime par la relation : $g(h) = g_0 \left(\frac{R_T}{R_T + h}\right)^2$

---

### ❓ Énoncé

1. **Établissement du modèle et conditions initiales :** 
   Dans un repère cartésien $(O, \vec{x}, \vec{y}, \vec{z})$ géocentrique local, le satellite est assimilé à un point matériel $M$ de masse $m$. À l'instant $t = 0\text{ s}$, le satellite est lâché depuis le point $M_0$ de coordonnées $(x_0 = 0, y_0 = 0, z_0 = h)$ avec un vecteur vitesse initiale $\vec{v}_0 = v_0 \vec{i}$ (mouvement horizontal). 
   En appliquant la deuxième loi de Newton, établir les équations horaires du mouvement du satellite $x(t)$, $y(t)$ et $z(t)$ dans l'hypothèse où le champ de pesanteur $\vec{g}$ est considéré uniforme.

2. **Équation de la trajectoire :** 
   En déduire l'équation cartésienne de la trajectoire du satellite dans le plan $(O, \vec{x}, \vec{z})$ et identifier la nature de cette trajectoire.

3. **Condition de mise en orbite circulaire :** 
   Pour qu'un satellite de masse $m$ décrive un mouvement circulaire uniforme de rayon $R = R_T + h$ autour de la Terre, la force gravitationnelle doit fournir la force centripète nécessaire. En assimilant localement le champ de pesanteur au champ de gravitation, exprimez la vitesse orbitale théorique $v_{orb}$ en fonction de $g(h)$ et $R$. Calculez sa valeur numérique.

4. **Analyse critique du modèle :** 
   Le satellite Starlink est éjecté par le lanceur avec une vitesse réelle $v_0 = 7{,}5\text{ km}\cdot\text{s}^{-1}$. En comparant cette valeur à $v_{orb}$, qualitativement, que se passerait-il si le champ de pesanteur terrestre n'était pas central mais rigoureusement uniforme sur une grande distance ?

---

### 💡 Indice

*   **Question 1 :** Pensez à l'inventaire des forces. Le système n'est soumis qu'à son poids $\vec{P} = m\vec{g}$. Projetez cette relation vectorielle sur les axes du repère.
*   **Question 2 :** Pour trouver l'équation de la trajectoire $z(x)$, isolez le temps $t$ dans l'expression de $x(t)$ puis injectez-le dans l'expression de $z(t)$.
*   **Question 3 :** Exprimez l'accélération d'un mouvement circulaire uniforme en coordonnées de Frenet, puis appliquez le PFD.
*   **Question 4 :** Regardez la forme de la trajectoire trouvée à la question 2 (parabole) et comparez-la à un cercle ou une ellipse.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Établissement des équations horaires
*   **Système étudié :** Le satellite Starlink (assimilé à un point matériel $M$ de masse $m$).
*   **Référentiel :** Terrestre (supposé galiléen pour cette étude locale).
*   **Bilan des forces :** Le satellite est uniquement soumis à son poids $\vec{P} = m\vec{g}$ (on néglige les frottements atmosphériques à cette altitude).
*   **Deuxième loi de Newton (PFD) :**
    $$\sum \vec{F}_{ext} = m \vec{a} \implies m\vec{g} = m\vec{a} \implies \vec{a} = \vec{g}$$

En choisissant un repère $(O, \vec{x}, \vec{z})$ où $\vec{g}$ est vertical et dirigé vers le bas selon l'axe $-\vec{z}$ :
$$\vec{g} = \begin{pmatrix} 0 \\ 0 \\ -g(h) \end{pmatrix}$$

Les conditions initiales à $t = 0\text{ s}$ sont :
*   Positions : $x_0 = 0$, $y_0 = 0$, $z_0 = h$
*   Vitesses : $v_{0x} = v_0$, $v_{0y} = 0$, $v_{0z} = 0$

Par intégrations successives de l'accélération $\vec{a} = \frac{d\vec{v}}{dt}$ puis de la vitesse $\vec{v} = \frac{d\vec{OM}}{dt}$, on obtient les équations horaires :
$$
\begin{cases}
x(t) = v_0 t \\
y(t) = 0 \\
z(t) = -\frac{1}{2}g(h)t^2 + h
\end{cases}
$$

#### 2. Équation de la trajectoire
Exprimons le temps $t$ à partir de l'équation de $x(t)$ :
$$t = \frac{x}{v_0}$$

Substituons cette expression dans l'équation de $z(t)$ :
$$z(x) = -\frac{1}{2}g(h)\left(\frac{x}{v_0}\right)^2 + h$$

$$z(x) = -\frac{g(h)}{2v_0^2} x^2 + h$$

**Nature de la trajectoire :** C'est une équation de la forme $z = ax^2 + b$. La trajectoire du satellite dans ce modèle est donc un **arc de parabole**.

#### 3. Condition de mise en orbite circulaire
Pour une orbite circulaire de rayon $R = R_T + h$, le vecteur accélération dans la base de Frenet s'écrit avec une composante normale uniquement :
$$a_N = \frac{v_{orb}^2R}{R} = \frac{v_{orb}^2}{R}$$

D'après la deuxième loi de Newton, la force responsable de cette accélération centripète est la force gravitationnelle, dont l'intensité locale est donnée par $m \cdot g(h)$ :
$$m \cdot g(h) = m \frac{v_{orb}^2}{R}$$

En simplifiant par la masse $m$ :
$$v_{orb} = \sqrt{g(h) \cdot R}$$

*   **Application numérique :**
    1. Calculons d'abord $g(h)$ :
       $$g(h) = 9{,}81 \times \left(\frac{6400}{6400 + 550}\right)^2 = 9{,}81 \times \left(\frac{6400}{6950}\right)^2 \approx 8{,}31\text{ m}\cdot\text{s}^{-2}$$
    2. Calculons $v_{orb}$ avec $R = 6950\text{ km} = 6{,}95 \times 10^6\text{ m}$ :
       $$v_{orb} = \sqrt{8{,}31 \times 6{,}95 \times 10^6} = \sqrt{57\,754\,500} \approx 7\,600\text{ m}\cdot\text{s}^{-1} = 7{,}6\text{ km}\cdot\text{s}^{-1}$$

#### 4. Analyse critique du modèle
La vitesse réelle d'éjection fournie par la fusée est $v_0 = 7{,}5\text{ km}\cdot\text{s}^{-1}$, ce qui est très proche de la vitesse orbitale calculée $v_{orb} \approx 7{,}6\text{ km}\cdot\text{s}^{-1}$. 

Cependant, dans le modèle du **champ uniforme**, la trajectoire trouvée est une parabole. Une parabole finit inévitablement par intersecter le sol ($z = 0$) lorsque $x$ augmente. Par conséquent, dans un champ uniforme, le satellite finirait par s'écraser sur Terre. 

C'est ici que l'approximation du champ uniforme trouve ses limites : en réalité, le champ de pesanteur (gravitationnel) est **radial** (il pointe toujours vers le centre de la Terre). C'est cette rotondité de la Terre et la nature centrale de la force qui permettent au vecteur $\vec{g}$ de tourner en même temps que le satellite, courbant la trajectoire en un cercle (ou une ellipse) fermé, assurant ainsi la mise en orbite permanente de la constellation Starlink.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
