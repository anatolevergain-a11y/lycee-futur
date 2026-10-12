---
title: "Cours : Mouvement dans un champ uniforme"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

*   **Champ uniforme :** Un champ (qu'il soit gravitationnel ou électrostatique) est dit uniforme si ses caractéristiques (direction, sens et norme) sont rigoureusement les mêmes en tout point de l'espace considéré.
*   **Référentiel d'étude :** Pour l'étude des mouvements à la surface de la Terre, on utilise quasi-exclusivement le référentiel terrestre, considéré comme galiléen pour des durées et des distances compatibles avec les expériences usuelles.
*   **Système :** Un objet ponctuel de masse $m$ (et éventuellement de charge électrique $q$) dont on étudie le mouvement du centre de masse $\text{G}$.
*   **Champ de pesanteur uniforme $\vec{g}$ :** Au voisinage de la surface de la Terre, le champ de pesanteur est assimilé à un champ uniforme. Sa direction est verticale, son sens est dirigé vers le centre de la Terre, et sa norme est $g \approx 9{,}81 \text{ m}\cdot\text{s}^{-2}$.
*   **Champ électrostatique uniforme $\vec{E}$ :** Créé par exemple entre deux plaques planes et parallèles (condensateur plan), il est caractérisé par un vecteur $\vec{E}$ constant en tout point situé entre les plaques.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Deuxième loi de Newton (Principe Fondamental de la Dynamique)
Dans un référentiel galiléen, la somme vectorielle des forces $\sum \vec{F}_{\text{ext}}$ agissant sur un système de masse $m$ constante est liée à l'accélération $\vec{a}_{\text{G}}$ de son centre de masse par la relation :
$$\sum \vec{F}_{\text{ext}} = m \vec{a}_{\text{G}}$$

### B. Application au champ de pesanteur uniforme (Chute libre)
Si l'on néglige les frottements de l'air, la seule force agissant sur le système est son poids $\vec{P} = m\vec{g}$.

1.  **Accélération :**
    $$m\vec{g} = m\vec{a} \implies \vec{a} = \vec{g}$$
    L'accélération du système est constante et égale au champ de pesanteur.

2.  **Vitesse :** Par intégration de l'accélération par rapport au temps :
    $$\vec{v}(t) = \vec{g}t + \vec{v}_0$$
    où $\vec{v}_0$ est le vecteur vitesse initiale.

3.  **Position :** Par intégration de la vitesse par rapport au temps :
    $$\vec{OM}(t) = \frac{1}{2}\vec{g}t^2 + \vec{v}_0t + \vec{OM}_0$$
    où $\vec{OM}_0$ est le vecteur position initiale.

### C. Application au champ électrostatique uniforme
Une particule de masse $m$ et de charge $q$ soumise uniquement à la force électrostatique $\vec{F}_e = q\vec{E}$ (on néglige souvent le poids devant la force électrostatique pour les particules microscopiques comme l'électron ou le proton) :

1.  **Accélération :**
    $$q\vec{E} = m\vec{a} \implies \vec{a} = \frac{q}{m}\vec{E}$$

2.  **Nature de la trajectoire :**
    *   Dans le cas d'un champ de pesanteur (ou électrostatique) avec une vitesse initiale non colinéaire au champ, la trajectoire est **plane** et sa représentation mathématique dans un repère cartésien est une **parabole**.
    *   Les équations horaires s'obtiennent en projetant vectoriellement les relations sur les axes du repère d'espace $(Ox, Oy)$.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un projectile de masse $m$ est lancé depuis l'origine $\text{O}(x_0=0, y_0=0)$ avec une vitesse initiale $\vec{v}_0$ faisant un angle $\alpha$ avec l'horizontale. On étudie son mouvement dans un champ de pesanteur uniforme $\vec{g}$, en négligeant l'action de l'air.

**Résolution :**

1.  **Bilan des forces et Référentiel :**
    Référentiel terrestre supposé galiléen. Le système est le projectile. La seule force est le poids $\vec{P} = m\vec{g}$.

2.  **Application de la 2ème loi de Newton :**
    $$m\vec{g} = m\vec{a} \implies \vec{a} = \vec{g}$$
    Projection dans un repère $(O, \vec{i}, \vec{j})$ orthonormé avec $\vec{g}(0, -g)$ :
    *   $a_x(t) = 0$
    *   $a_y(t) = -g$

3.  **Coordonnées du vecteur vitesse :**
    *   $v_x(t) = v_0 \cos(\alpha)$
    *   $v_y(t) = -gt + v_0 \sin(\alpha)$

4.  **Coordonnées du vecteur position (Équations horaires) :**
    En tenant compte des conditions initiales $\text{O}(0,0)$ :
    *   $x(t) = (v_0 \cos(\alpha)) t$
    *   $y(t) = -\frac{1}{2}gt^2 + (v_0 \sin(\alpha)) t$

5.  **Équation de la trajectoire $y(x)$ :**
    On exprime le temps $t$ à partir de l'équation en $x$ : $t = \frac{x}{v_0 \cos(\alpha)}$.
    On substitue cette expression dans l'équation de $y(t)$ :
    $$y(x) = -\frac{1}{2}g \left(\frac{x}{v_0 \cos(\alpha)}\right)^2 + (v_0 \sin(\alpha)) \left(\frac{x}{v_0 \cos(\alpha)}\right)$$
    $$y(x) = -\frac{g}{2v_0^2 \cos^2(\alpha)} x^2 + (\tan(\alpha)) x$$
    C'est bien l'équation mathématique d'une parabole ($y = ax^2 + bx$).

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Conditions initiales :** Ne pas se tromper dans les signes lors de la projection des vecteurs $\vec{v}_0$, $\vec{OM}_0$ et $\vec{g}$ ou $\vec{E}$. Écrivez toujours explicitement les coordonnées des vecteurs à $t = 0$.
*   **Unités et homogénéité :** Veillez à utiliser le Système International (mètres, secondes, kilogrammes, coulombs, volts par mètre). Pensez à vérifier l'homogénéité des formules intermédiaires.
*   **Oubli de la constante d'intégration :** Lors du passage de l'accélération à la vitesse, puis de la vitesse à la position, l'oubli des constantes d'intégration (qui correspondent aux conditions initiales $\vec{v}_0$ et $\vec{OM}_0$) est une source majeure d'erreurs.
*   **Nature du champ :** Ne confondez pas champ uniforme et champ gravitationnel universel (loi de gravitation de Newton en $1/r^2$), qui n'est pas uniforme. Le champ uniforme est une approximation valable uniquement au voisinage de la surface de la Terre.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
