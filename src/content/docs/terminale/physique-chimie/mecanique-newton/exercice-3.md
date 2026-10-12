---
title: "Exercice 3 : Conservation du moment cinétique"
description: "Application pratique du chapitre Mouvement dans un champ uniforme"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude des mouvements dans un champ de pesanteur uniforme, l'analyse vectorielle ne se limite pas à la dynamique translationnelle (via le PFD). L'étude du moment cinétique offre une perspective énergétique et géométrique puissante, notamment pour analyser l'évolution temporelle de systèmes en rotation ou soumis à des forces centrales (ou quasi-centrales).

Considérons un dispositif de laboratoire modélisant un projectile (assimilé à un point matériel $M$ de masse $m$) lancé depuis l'origine $O$ du repère cartésien $(O, \vec{i}, \vec{j}, \vec{k})$ avec un vecteur vitesse initiale $\vec{v}_0$ situé dans le plan $(O, \vec{i}, \vec{j})$. Le champ de pesanteur est uniforme : $\vec{g} = -g \vec{j}$, avec $g \approx 9,81 \, \mathrm{m \cdot s^{-2}}$.

Toutefois, les mesures expérimentales de haute précision montrent des écarts systématiques entre le modèle idéal (chapeau parabolique sans frottement) et la réalité observée, en raison de l'interaction avec la masse d'air (frottements fluides) et de la rotondité de la Terre (qui induit une variation locale de la direction de $\vec{g}$, négligeable sur de courtes distances mais structurante à grande échelle). Cet exercice propose d'étudier le moment cinétique du système dans le cadre du modèle standard, tout en discutant la portée et les limites de conservation de cette grandeur.

**Données et constantes :**
* Masse du projectile : $m = 0,200 \, \mathrm{kg}$
* Vitesse initiale : $v_0 = 15,0 \, \mathrm{m \cdot s^{-1}}$
* Angle de tir par rapport à l'horizontale : $\alpha = 45^\circ$
* Vecteur position initiale : $\vec{OM}(0) = \vec{0}$
* On négligera dans un premier temps toute action de l'air.

---

### ❓ Énoncé

1. **Établissement du vecteur position et de la vitesse.** En appliquant la deuxième loi de Newton au système dans le référentiel terrestre supposé galiléen, déterminer les expressions littérales et numériques des coordonnées du vecteur position $\vec{OM}(t)$ et du vecteur vitesse $\vec{v}(t)$ dans la base cartésienne.
2. **Expression du moment cinétique.** Définir le vecteur moment cinétique $\vec{L}_O(m)$ du projectile par rapport au point $O$ à tout instant $t$. Exprimer ses composantes en fonction du temps $t$.
3. **Analyse de la conservation.** Calculer la dérivée temporelle du moment cinétique $\frac{d\vec{L}_O}{dt}$ par application du théorème du moment cinétique. En déduire la grandeur physique qui se conserve au cours du mouvement et expliciter l'hypothèse physique fondamentale du modèle qui garantit cette conservation.
4. **Esprit critique et limites du modèle.** Dans une démarche expérimentale rigoureuse, un capteur optique relève une légère dérive temporelle de la composante selon $\vec{k}$ du moment cinétique, incompatible avec la stricte conservation théorique établie à la question 3. Discutez de deux facteurs expérimentaux ou physiques réels, absents du modèle idéal, susceptibles d'expliquer cet écart mesuré.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez le PFD en projection cartésienne, puis intégrez deux fois par rapport au temps en tenant compte des conditions initiales $\vec{v}(0)$ et $\vec{OM}(0)$.
* **Question 2 :** Le moment cinétique par rapport au point $O$ est défini par le produit vectoriel $\vec{L}_O(m) = \vec{OM}(t) \wedge \vec{p}(t)$, où $\vec{p}(t) = m\vec{v}(t)$ est la quantité de mouvement.
* **Question 3 :** Le théorème du moment cinétique s'écrit $\frac{d\vec{L}_O}{dt} = \sum \vec{M}_O(\vec{F}_{\text{ext}})$. Calculez le moment de la force poids par rapport au point $O$.
* **Question 4 :** Interrogez la nature du champ de forces (est-il strictement uniforme à l'échelle des incertitudes ?) et l'influence de l'environnement (fluide, frottements, forces de Coriolis dans un référentiel terrestre non strictement galiléen).

---

### 📋 Correction détaillée pas à pas

#### 1. Établissement du vecteur position et de la vitesse
Dans le référentiel terrestre supposé galiléen, la seule force agissant sur le projectile est son poids $\vec{P} = m\vec{g} = -mg\vec{j}$ (dans le cadre du modèle du champ de pesanteur uniforme).
D'après la deuxième loi de Newton :
$$\sum \vec{F}_{\text{ext}} = m\vec{a} \implies m\vec{g} = m\frac{d\vec{v}}{dt} \implies \frac{d\vec{v}}{dt} = \vec{g}$$

Par projection sur les axes $(Ox)$ et $(Oy)$ :
* Suivant $x$ : $\frac{dv_x}{dt} = 0 \implies v_x(t) = v_0 \cos(\alpha)$
* Suivant $y$ : $\frac{dv_y}{dt} = -g \implies v_y(t) = -gt + v_0 \sin(\alpha)$

En intégrant à nouveau et en tenant compte des conditions initiales $\vec{OM}(0) = \vec{0}$ :
* $x(t) = (v_0 \cos\alpha) t$
* $y(t) = -\frac{1}{2}gt^2 + (v_0 \sin\alpha) t$

A.N. : $v_0 \cos(45^\circ) = v_0 \sin(45^\circ) = 15,0 \times \frac{\sqrt{2}}{2} \approx 10,6 \, \mathrm{m \cdot s^{-1}}$.

#### 2. Expression du moment cinétique
Le moment cinétique du projectile par rapport au point $O$ est :
$$\vec{L}_O(t) = \vec{OM}(t) \wedge \vec{p}(t) = \vec{OM}(t) \wedge (m\vec{v}(t))$$

Exprimons les vecteurs :
* $\vec{OM}(t) = x(t)\vec{i} + y(t)\vec{j} + 0\vec{k}$
* $\vec{v}(t) = v_x(t)\vec{i} + v_y(t)\vec{j} + 0\vec{k}$

Le produit vectoriel se calcule par le déterminant :
$$\vec{L}_O(t) = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ x(t) & y(t) & 0 \\ m v_x(t) & m v_y(t) & 0 \end{vmatrix}$$

Seule la composante selon $\vec{k}$ est non nulle :
$$L_{O,z}(t) = x(t) \cdot (m v_y(t)) - y(t) \cdot (m v_x(t))$$
$$L_{O,z}(t) = m \left[ (v_0 \cos\alpha) t \left(-gt + v_0 \sin\alpha\right) - \left(-\frac{1}{2}gt^2 + v_0 \sin\alpha \, t\right) (v_0 \cos\alpha) \right]$$

En développant et simplifiant :
$$L_{O,z}(t) = m v_0 \cos\alpha \left( -gt^2 + v_0 \sin\alpha \, t + \frac{1}{2}gt^2 - v_0 \sin\alpha \, t \right) = m v_0 \cos\alpha \left( -\frac{1}{2}gt^2 \right)$$
Soit :
$$\vec{L}_O(t) = -\frac{1}{2} m g v_0 t^2 \cos\alpha \, \vec{k}$$

#### 3. Analyse de la conservation
Le théorème du théorème du moment cinétique appliqué au point $O$ s'écrit :
$$\frac{d\vec{L}_O}{dt} = \sum \vec{M}_O(\vec{F}_{\text{ext}}) = \vec{OM} \wedge \vec{P}$$

Calculons le moment de la force poids :
$$\vec{M}_O(\vec{P}) = \vec{OM} \wedge (m\vec{g}) = (x\vec{i} + y\vec{j}) \wedge (-mg\vec{j}) = -mgx(\vec{i} \wedge \vec{j}) = -mgx\vec{k}$$

Puisque $\vec{M}_O(\vec{P}) \neq \vec{0}$ de manière générale (car $x(t) \neq 0$ pour $t > 0$), **le moment cinétique $\vec{L}_O$ ne se conserve pas au cours du temps**. 
*Hypothèse fondamentale :* La force poids possède un moment non nul par rapport au point $O$ car la ligne d'action du poids ne passe pas par l'origine $O$ (sauf à l'instant initial $t=0$). C'est l'application d'un couple de forces extérieur (ici, le moment du poids) qui fait varier le moment cinétique, de la même manière qu'une force extérieure fait varier la quantité de mouvement.

#### 4. Esprit critique et limites du modèle
L'observation d'une dérive expérimentale de la composante $L_{O,z}$ par rapport au modèle théorique invite à questionner les approximations du modèle physique :
1. **L'influence des forces de frottement fluide de l'air :** Dans la réalité, l'air exerce une force de trainée $\vec{f} = -\frac{1}{2} \rho C_x S \|\vec{v}\| \vec{v}$. Cette force non conservative possède un moment par rapport à $O$ qui s'ajoute à celui du poids, modifiant ainsi l'évolution temporelle de $\vec{L}_O$.
2. **Le caractère non galiléen du référentiel terrestre :** Le référentiel terrestre est en réalité en rotation propre (effet de la rotation de la Terre). Pour être rigoureux, il faudrait appliquer la dynamique dans un référentiel non galiléen en y incluant les forces d'inertie (notamment la force de Coriolis $\vec{F}_{\text{cor}} = -2m(\vec{\Omega} \wedge \vec{v})$). Le moment de cette force d'inertie modifie également la composante du moment cinétique mesurée en laboratoire.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
