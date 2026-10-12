---
title: "Exercice 1 : Principe d'inertie et étude de trajectoires"
description: "Application pratique du chapitre Mouvement et interactions"
---

### 🌐 Contexte & Données scientifiques

L'étude des mouvements dans les champs de pesanteur ou lors de phases de vol rectiligne constitue un enjeu majeur pour comprendre la dynamique des objets. Nous nous proposons d'analyser le mouvement d'un drone de livraison utilisé pour acheminer du matériel médical d'urgence en zone enclavée. 

Le système étudié est le drone, de masse $m = 4,20\text{ kg}$ (batterie et charge utile incluses). Les mesures cinématiques ont été réalisées à partir de l'exploitation d'une vidéo par un logiciel de suivi de mouvement. 

Les conditions de l'expérience et les données retenues sont les suivantes :
*   Le vecteur accélération de la pesanteur est noté $\vec{g}$, avec une norme $g = 9,81\text{ m}\cdot\text{s}^{-2}$.
*   Dans une première phase de vol horizontale à altitude constante ($z = 50\text{ m}$), les moteurs du drone exercent une force de propulsion $\vec{F}$ qui compense exactement les forces de frottement de l'air $\vec{f}$. La vitesse du drone est constante et vaut $v_x = 12,0\text{ m}\cdot\text{s}^{-1}$.
*   Dans une seconde phase, les moteurs sont coupés pour étudier un largage par inertie. La modélisation mathématique du mouvement est alors soumise à une incertitude : négliger les frottements fluides à cette vitesse induit une erreur relative estimée à $4\%$ sur la portée calculée du colis.

---

### ❓ Énoncé

1. **Analyse de la première phase (Vol stabilisé) :** En appliquant le principe d'inertie, caractériser le vecteur somme des forces $\sum \vec{F}_{\text{ext}}$ s'exerçant sur le drone lors de la phase de vol horizontal à vitesse constante. En déduire la relation vectorielle entre la force de propulsion $\vec{F}$ et les frottements $\vec{f}$.
2. **Étude cinématique de la seconde phase (Chute libre avec vitesse initiale) :** Au moment du largage ($t_0 = 0\text{ s}$), le colis (assimilé à un point matériel) se détache du drone alors positionné à l'altitude $z_0 = 50,0\text{ m}$ avec un vecteur vitesse initial $\vec{v}_0$ horizontal de coordonnées $(v_0, 0)$ avec $v_0 = 12,0\text{ m}\cdot\text{s}^{-1}$. Établir les équations horaires du mouvement $x(t)$ et $z(t)$ dans le repère cartésien $(O, \vec{i}, \vec{k})$ lié à la Terre, en appliquant la seconde loi de Newton (ou en exploitant le principe d'inertie hors phase rectiligne uniforme, selon le référentiel).
3. **Modélisation et esprit critique :** Calculer la portée théorique $x_p$ du colis (distance horizontale parcourue entre le largage et l'impact au sol où $z = 0$). Discuter de la validité du modèle adopté en tenant compte de l'incertitude liée aux frottements de l'air mentionnée dans le contexte, et analyser l'impact opérationnel d'une telle approximation pour un largage de précision médicale.

---

### 💡 Indice de méthode

*   *Question 1 :* Rapponcez l'énoncé mathématique du principe d'inertie (première loi de Newton) pour un référentiel galiléen et un système en mouvement rectiligne uniforme.
*   *Question 2 :* Projetez l'équation vectorielle fondamentale sur les axes d'espace $(Ox)$ et $(Oz)$. Intégrez successivement les composantes de l'accélération en tenant compte des conditions initiales à $t = 0\text{ s}$.
*   *Question 3 :* Résolvez l'équation $z(t) = 0$ pour déterminer l'instant d'impact $t_{\text{chute}}$, puis injectez cette durée dans l'équation horaire $x(t)$. Pour la critique, appliquez l'erreur relative de $4\%$ sur la valeur numérique obtenue afin d'évaluer la zone d'incertitude au sol.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse de la première phase (Vol stabilisé)
*   **Principe physique :** Le vol du drone s'effectue à vitesse constante en ligne droite dans un référentiel terrestre supposé galiléen. Le vecteur vitesse $\vec{v}$ est donc constant ($\vec{v} = \text{constante}$).
*   **Application du principe d'inertie :** D'après le principe d'inertie (première loi de Newton), si le vecteur vitesse du système est constant, alors la somme vectorielle des forces extérieures qui s'exercent sur lui est nulle :
    $$\sum \vec{F}_{\text{ext}} = \vec{0}$$
*   **Bilan et relation :** Les forces en présence sont le poids $\vec{P}$, la force de propulsion $\vec{F}$, la force de sustentation (portance) $\vec{R}$ et les frottements $\vec{f}$. 
    $$\vec{P} + \vec{R} + \vec{F} + \vec{f} = \vec{0}$$
    Projection sur l'axe horizontal du mouvement : $F - f = 0 \iff F = f$. Les vecteurs $\vec{F}$ et $\vec{f}$ sont colinéaires et de sens opposés.

#### 2. Étude cinématique de la seconde phase
*   **Référentiel et Système :** Référentiel terrestre, galiléen pour la durée de l'expérience. Système : le colis de masse $m$.
*   **Bilan des forces (modèle de la chute libre) :** On néglige l'action de l'air devant le poids. La seule force exercée est le poids $\vec{P} = m\vec{g}$.
*   **Application de la relation fondamentale de la dynamique (ou étude de l'accélération) :**
    $$\sum \vec{F}_{\text{ext}} = m\vec{a} \implies m\vec{g} = m\vec{a} \implies \vec{a} = \vec{g}$$
    En projetant dans le repère $(O, \vec{i}, \vec{k})$ où $\vec{k}$ est vertical ascendant :
    *   $a_x(t) = 0$
    *   $a_z(t) = -g$
*   **Obtention des vitesses par intégration :**
    *   $v_x(t) = v_0 = 12,0\text{ m}\cdot\text{s}^{-1}$ (car $v_{0x} = v_0$)
    *   $v_z(t) = -g \cdot t + 0$ (car $v_{0z} = 0$)
*   **Obtention des positions par intégration (Conditions initiales : $x(0) = 0$ et $z(0) = z_0$) :**
    *   $$x(t) = v_0 \cdot t$$
    *   $$z(t) = -\frac{1}{2}g t^2 + z_0$$

#### 3. Modélisation et esprit critique
*   **Calcul de la portée théorique $x_p$ :**
    1. Détermination de l'instant d'impact $t_{\text{chute}}$ lorsque $z(t_{\text{chute}}) = 0$ :
       $$-\frac{1}{2}g t_{\text{chute}}^2 + z_0 = 0 \implies t_{\text{chute}} = \sqrt{\frac{2z_0}{g}}$$
       A.N. : $t_{\text{chute}} = \sqrt{\frac{2 \times 50,0}{9,81}} = \sqrt{10,19} \approx 3,19\text{ s}$.
    2. Calcul de la portée $x_p = x(t_{\text{chute}})$ :
       $$x_p = v_0 \times \sqrt{\frac{2z_0}{g}}$$
       A.N. : $x_p = 12,0 \times 3,19 = 38,28\text{ m}$.
*   **Analyse critique et limites du modèle :**
    *   L'énoncé indique une incertitude relative de $4\%$ due à la non-prise en compte des frottements fluides.
    *   Calcul de l'incertitude absolue $\Delta x$ : 
        $$\Delta x = 4\% \times x_p = 0,04 \times 38,28 \approx 1,53\text{ m}$$
    *   **Discussion scientifique :** Le modèle de la chute libre sans frottement surestime légèrement la portée réelle, car les frottements de l'air tendent à freiner le colis horizontalement. La zone d'impact réelle se situe donc dans un intervalle de confiance estimé à $[36,7\text{ m} ; 38,3\text{ m}]$. Pour une application médicale d'urgence (largage de kits de premiers secours), cette incertitude de plus d'un mètre et demi, combinée aux rafales de vent réelles non modélisées ici, impose une marge de sécurité opérationnelle pour éviter que le matériel ne devienne inaccessible (chute dans un arbre, un cours d'eau, etc.).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
