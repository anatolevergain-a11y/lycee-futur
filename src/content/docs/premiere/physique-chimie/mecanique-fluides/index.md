---
title: "Cours : Mouvement et forces en mécanique"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Physique-Chimie - Première Générale
## Chapitre : Mouvement et forces en mécanique

---

## 📌 1. Notions clés & Définitions

Pour étudier le mouvement d'un système, il est indispensable de définir rigoureusement le cadre de l'étude (en référence à la mécanique classique newtonienne).

*   **Référentiel :** Solide par rapport auquel on étudie le mouvement d'un système. Il est muni d'un repère d'espace (pour positionner les points) et d'une origine des temps (un chronomètre). 
    *   *Référentiel terrestre :* Lié à la Terre, adapté aux mouvements à sa surface.
    *   *Référentiel géocentrique :* Dont l'origine est le centre de la Terre et les axes orientés vers des étoiles fixes, adapté à l'étude des satellites.
    *   *Référentiel héliocentrique :* Dont l'origine est le centre du Soleil et les axes orientés vers des étoiles fixes, adapté à l'étude des planètes du système solaire.
*   **Vecteur position $\vec{OM}(t)$ :** Vecteur reliant l'origine du repère $O$ au position du système $M$ à l'instant $t$. Ses coordonnées $(x(t), y(t), z(t))$ dépendent du temps.
*   **Vecteur vitesse $\vec{v}(t)$ :** Il caractérise la variation de la position du système au cours du temps. Il est, à tout instant, tangent à la trajectoire et orienté dans le sens du mouvement.
*   **Vecteur variation de vitesse $\Delta\vec{v}(t)$ :** Représente la variation du vecteur vitesse entre deux instants voisins. Il est indispensable pour mettre en évidence l'action d'une force.
*   **Force $\vec{F}$ :** Modélisation d'une action mécanique exercée sur un système (contact ou à distance). Elle est caractérisée par son point d'application, sa direction, son sens et sa valeur (en Newtons, $\text{N}$).
*   **Principe d'inertie (Première loi de Newton) :** Dans un référentiel galiléen, si les forces qui s'exercent sur un système se compensent ($\sum \vec{F}_{\text{ext}} = \vec{0}$), alors le vecteur vitesse $\vec{v}$ du centre de masse du système est constant ($\vec{v} = \vec{cte}$, mouvement rectiligne uniforme ou repos). *Réciproquement*, si le mouvement n'est ni rectiligne ni uniforme, les forces ne se compensent pas.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Cinématique du point

*   **Vecteur vitesse moyenne entre deux instants $t_i$ et $t_{i+1}$ :**
    $$\vec{v}_{i} \approx \frac{\vec{OM}_{i+1} - \vec{OM}_{i-1}}{t_{i+1} - t_{i-1}}$$
    *(Note : en pratique sur un enregistrement temporel à intervalle $\tau$, $\vec{v}_i \approx \frac{M_{i-1}M_{i+1}}{2\tau}$)*

*   **Vecteur vitesse instantanée au point $M_i$ :**
    $$\vec{v}(t_i) = \frac{d\vec{OM}}{dt}\Big|_{t_i}$$
    Ses coordonnées cartésiennes s'expriment par :
    $$v_x(t) = \frac{dx}{dt}, \quad v_y(t) = \frac{dy}{dt}$$

*   **Vecteur variation de vitesse au point $M_i$ :**
    $$\Delta\vec{v}_i = \vec{v}_{i+1} - \vec{v}_{i-1}$$

### B. Lien qualitatif entre forces et mouvement

*   **Relation fondamentale (Approche de la deuxième loi de Newton) :**
    Le vecteur variation de vitesse $\Delta\vec{v}$ d'un système entre deux instants proches est colinéaire à la somme des forces $\sum \vec{F}_{\text{ext}}$ exercées sur ce système.
    $$\Delta\vec{v} \propto \sum \vec{F}_{\text{ext}}$$
    *Conséquence directe :* La direction et le sens de la variation du vecteur vitesse renseignent directement sur la direction et le sens de la résultante des forces appliquées.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un palet de suif de masse $m = 200\,\text{g}$ glisse sur une table horizontale verglacée (frottements négligés). À l'instant $t_1$, son vecteur vitesse vaut $\vec{v}_1 = 2{,}0\,\text{m}\cdot\text{s}^{-1}$ selon l'axe $(Ox)$. À l'instant $t_2 = t_1 + \tau$ (avec $\tau = 40\,\text{ms}$), il arrive en $M_2$. L'unique force verticale (poids $\vec{P}$ et réaction normale du support $\vec{R}$) se compensent ($\vec{P} + \vec{R} = \vec{0}$).
1. Quelles sont les forces s'exerçant sur le palet ? Que peut-on dire de leur somme ?
2. Quelle est la nature du mouvement du palet ?

**Correction rédigée :**
1. Le palet est soumis à :
   * Son poids $\vec{P}$, vertical vers le bas.
   * La réaction du support $\vec{R}$, verticale vers le haut.
   Puisque les frottements sont négligés et que le mouvement est horizontal, ces deux forces s'annulent : $\vec{P} + \vec{R} = \vec{0}$. La somme des forces extérieures est donc nulle : 
   $$\sum \vec{F}_{\text{ext}} = \vec{0}$$
2. D'après le principe d'inertie (première loi de Newton), la somme des forces extérieures étant nulle dans le référentiel terrestre supposé galiléen, le vecteur vitesse du système est constant ($\vec{v} = \vec{cte}$). Le mouvement du palet est donc **rectiligne et uniforme**.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Confondre vitesse et variation de vitesse :** Ce n'est pas parce qu'un objet va vite que la somme des forces est grande. La variation de vitesse ($\Delta\vec{v}$) dépend du *changement* de vitesse (en norme ou en direction), pas de la vitesse instantanée elle-même. Un objet peut se déplacer très vite avec des forces qui se compensent (mouvement rectiligne uniforme).
*   **Oublier le référentiel :** Toute description du mouvement et l'application des lois de la mécanique doivent obligatoirement mentionner le référentiel d'étude (et préciser s'il est considéré comme galiléen).
*   **Erreurs sur les unités :** 
    *   Les distances doivent être en mètres ($\text{m}$).
    *   Les durées en secondes ($\text{s}$). Attention aux millisecondes ($\text{ms} = 10^{-3}\,\text{s}$).
    *   Les vitesses en mètres par seconde ($\text{m}\cdot\text{s}^{-1}$).
*   **Construction graphique (vecteurs) :** Pour tracer $\Delta\vec{v}_i = \vec{v}_{i+1} - \vec{v}_{i-1}$, veillez à bien reporter les vecteurs à partir d'un même point ou à utiliser la relation de Chasles rigoureusement, en respectant l'échelle indiquée.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
