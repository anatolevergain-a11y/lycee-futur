---
title: "Exercice 1 : Lois de Newton appliquées au mouvement rectiligne"
description: "Application pratique du chapitre Mouvement et forces en mécanique"
---

### 🌐 Contexte & Données scientifiques

L'étude des mouvements rectilignes au moyen des lois de Newton trouve de nombreuses applications dans les systèmes de transport modernes, notamment en matière de sécurité routière et d'efficacité énergétique. Considérons un prototype de véhicule électrique urbain de masse $m = 1200\text{ kg}$ (batteries incluses) effectuant un test de freinage d'urgence sur une piste horizontale rectiligne.

À l'instant $t = 0\text{ s}$, le véhicule roule à une vitesse initiale $v_0 = 54\text{ km/h}$ dans le sens de l'axe $(Ox)$ orienté horizontalement. Le conducteur (ou le système de freinage autonome) enclenche le freinage maximal. 

Afin de modéliser rigoureusement le mouvement, les ingénieurs doivent composer avec plusieurs forces et approximations :
1. **Le poids** $\vec{P}$ et la **réaction normale du support** $\vec{R}_N$ se compensent strictement selon l'axe vertical ($\vec{P} + \vec{R}_N = \vec{0}$).
2. **L'action de freinage** est modélisée par une force constante $\vec{F}_f = -F_f \vec{i}$ avec $F_f = 4800\text{ N}$.
3. **Les forces de frottement de l'air** et de roulement ne sont pas strictement constantes. Toutefois, dans la plage de vitesse considérée et pour simplifier le modèle cinématique initial, elles sont regroupées en une force équivalente $\vec{f} = -fv \vec{i}$ (où $f = 50\text{ kg}\cdot\text{s}^{-1}$ est un coefficient aérodynamique et visqueux effectif).

*Données et incertitudes :* La masse $m$ est connue à $\pm 1\%$ près. Les mesures de vitesse comportent une incertitude instrumentale inhérente aux capteurs embarqués. L'analyse critique de ces modèles idéalisés permettra d'évaluer la pertinence de la deuxième loi de Newton face à la complexité du réel.

---

### ❓ Énoncé

1. **Analyse vectorielle et équation différentielle :** Dans le référentiel terrestre supposé galiléen, faire le bilan des forces extérieures s'exerçant sur le véhicule. En appliquant la deuxième loi de Newton, établir l'équation différentielle vérifiée par la vitesse $v(t)$ du centre de masse du véhicule le long de l'axe $(Ox)$.

2. **Résolution et étude de la vitesse :** Dans un premier temps, on néglige les frottements fluides ($f = 0$). Intégrer l'équation différentielle obtenue pour exprimer la vitesse $v(t)$ en fonction du temps. Calculer l'instant $t_1$ où le véhicule s'arrête complètement.

3. **Prise en compte du modèle réel et esprit critique :** On réintègre à présent le terme de frottement fluide ($f \neq 0$). L'équation différentielle s'écrit alors :
   $$m \frac{dv}{dt} = -F_f - fv$$
   Vérifier par dérivation que la solution générale de cette équation s'écrit sous la forme :
   $$v(t) = \left(v_0 + \frac{F_f}{f}\right) e^{-\frac{f}{m}t} - \frac{F_f}{f}$$
   Discuter de l'intérêt et des limites de ce modèle par rapport au cas précédent ($f=0$).

---

### 💡 Indice de méthode

* **Question 1 :** Projetez vectoriellement la relation fondamentale de la dynamique (RFD) sur l'axe $(Ox)$ en tenant compte des signes (orientations des vecteurs).
* **Question 2 :** Une accélération constante conduit, par primitive, à une variation linéaire de la vitesse. Veillez à convertir homogènement les unités ($v_0$ en $\text{m}\cdot\text{s}^{-1}$).
* **Question 3 :** Pour vérifier une solution proposée d'une équation différentielle, dérivez cette expression par rapport au temps $t$ et injectez-la dans les deux membres de l'équation différentielle pour vérifier l'égalité.

---

### 📋 Correction détaillée pas à pas

#### 1. Bilan des forces et application de la deuxième loi de Newton
Dans le référentiel terrestre (galiléen pour la durée de l'expérience), les forces s'exerçant sur le système $\{ \text{véhicule} \}$ sont :
- Le poids : $\vec{P} = m\vec{g}$
- La réaction normale du sol : $\vec{R}_N$
- La force de freinage : $\vec{F}_f = -F_f \vec{i}$
- Les forces de frottement : $\vec{f} = -fv \vec{i}$

D'après la deuxième loi de Newton (RFD) :
$$\sum \vec{F}_{\text{ext}} = m \vec{a}$$
$$\vec{P} + \vec{R}_N + \vec{F}_f + \vec{f} = m \frac{d\vec{v}}{dt}$$

En projetant cette relation vectorielle sur l'axe $(Ox)$ horizontal orienté dans le sens du mouvement :
- $P_x = 0$ et $R_{Nx} = 0$ (car perpendiculaires à l'axe)
- $F_{fx} = -F_f$
- $fx = -fv$
- $a_x = \frac{dv}{dt}$

On obtient l'équation différentielle générale :
$$m \frac{dv}{dt} = -F_f - fv$$

---

#### 2. Cas idéal sans frottement fluide ($f = 0$)
Si l'on pose $f = 0$, l'équation différentielle se simplifie en :
$$m \frac{dv}{dt} = -F_f \implies \frac{dv}{dt} = -\frac{F_f}{m}$$

L'accélération est constante : $a = -\frac{4800}{1200} = -4,0\text{ m}\cdot\text{s}^{-2}$.
La vitesse initiale est $v_0 = 54\text{ km/h} = \frac{54}{3,6} = 15,0\text{ m}\cdot\text{s}^{-1}$.

En intégrant par rapport au temps :
$$v(t) = -\frac{F_f}{m} t + v_0$$

Le véhicule s'immobilise à l'instant $t_1$ tel que $v(t_1) = 0$ :
$$-\frac{F_f}{m} t_1 + v_0 = 0 \implies t_1 = \frac{m \cdot v_0}{F_f}$$
A.N. : 
$$t_1 = \frac{1200 \times 15,0}{4800} = 3,75\text{ s}$$

---

#### 3. Modèle réel avec frottement fluide et esprit critique
Vérifions la solution proposée $v(t) = \left(v_0 + \frac{F_f}{f}\right) e^{-\frac{f}{m}t} - \frac{F_f}{f}$.
Calculons la dérivée $\frac{dv}{dt}$ :
$$\frac{dv}{dt} = \left(v_0 + \frac{F_f}{f}\right) \left(-\frac{f}{m}\right) e^{-\frac{f}{m}t}$$

Multiplions par $m$ :
$$m \frac{dv}{dt} = -f \left(v_0 + \frac{F_f}{f}\right) e^{-\frac{f}{m}t} = -f v(t) - F_f$$
On retrouve bien l'équation différentielle de départ : $m \frac{dv}{dt} = -F_f - fv$.

* **Analyse critique et limites du modèle :** 
  - Le modèle sans frottement ($f=0$) surestime la simplicité du phénomène physique : l'arrêt est brutal (décélération constante), ce qui néglige l'augmentation relative de la résistance de l'air ou la complexité des contacts pneumatiques-chaussée à haute vitesse.
  - Le modèle avec frottement fluide ($f \neq 0$) est mathématiquement plus robuste mais repose sur un paramètre $f$ empirique. En réalité, les frottements aérodynamiques dépendent plutôt du carré de la vitesse ($v^2$), ce qui rendrait l'équation non-linéaire (équation de Riccati) et nécessiterait des méthodes de résolution numérique (comme la méthode d'Euler). 
  - Enfin, l'incertitude sur la masse $m$ ($\pm 1\%$) et l'usure des plaquettes de frein modifient la force $F_f$ en conditions réelles, illustrant l'écart permanent entre le modèle théorique et la mesure expérimentale.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
