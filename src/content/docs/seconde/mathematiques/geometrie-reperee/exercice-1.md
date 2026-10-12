---
title: "Exercice 1 : Bilan de forces en statique"
description: "Application pratique du chapitre Géométrie repérée et vecteurs"
---

### 🌐 Contexte & Données scientifiques

En mécanique du point, l'étude de la statique permet de déterminer les conditions d'équilibre d'un système matériel. Selon la première loi de Newton (principe d'inertie), un système est au repos (ou en mouvement rectiligne uniforme) dans un référentiel galiléen si et seulement si la somme vectorielle des forces $\sum \vec{F}_i$ qui s'exercent sur lui est nulle :
$$\sum \vec{F}_i = \vec{0}$$

Considérons une charge suspendue modélisée par un point matériel $M$ de masse $m = 10\text{ kg}$, maintenue en équilibre par un système de deux câbles idéaux (masses négligeables, inextensibles) fixés à un plafond horizontal. 

Dans le cadre d'un modèle d'étude bidimensionnel, on munit le plan d'un repère orthonormé $(O, \vec{i}, \vec{j})$, où l'axe $(O, \vec{i})$ est horizontal (orienté vers la droite) et l'axe $(O, \vec{j})$ est vertical (orienté vers le haut). L'intensité de la pesanteur est prise égale à $g = 9,81\text{ m}\cdot\text{s}^{-2}$.

Les mesures expérimentales des angles formés par les câbles avec l'horizontale sont entachées d'incertitudes instrumentales liées à la précision du rapporteur numérique :
- Le câble 1 exerce une tension $\vec{T}_1$ dont la ligne d'action fait un angle $\alpha = 30^\circ \pm 0,5^\circ$ avec l'horizontale.
- Le câble 2 exerce une tension $\vec{T}_2$ dont la ligne d'action fait un angle $\beta = 45^\circ \pm 0,5^\circ$ avec l'horizontale.

*Note critique sur le modèle :* Ce modèle néglige la masse des câbles et l'élasticité des matériaux. De plus, l'incertitude sur les angles $\alpha$ et $\beta$ aura une répercussion directe sur l'incertitude du calcul des forces, illustrant la nécessité de confronter tout modèle mathématique aux limites de la mesure physique.

---

### ❓ Énoncé

1. **Modélisation vectorielle :** Exprimer le poids $\vec{P}$ de la charge sous forme vectorielle dans le repère $(O, \vec{i}, \vec{j})$. Établir les coordonnées des vecteurs tensions $\vec{T}_1$ et $\vec{T}_2$ en fonction de leurs normes $T_1 = \|\vec{T}_1\|$ et $T_2 = $\|\vec{T}_2\|$, ainsi que des angles $\alpha$ et $\beta$.
2. **Mise en équation de l'équilibre :** Traduire la condition d'équilibre statique sous la forme d'un système d'équations scalaires liant $T_1$, $T_2$ et les données du problème.
3. **Résolution algébrique :** Résoudre ce système pour déterminer les valeurs exactes, puis approchées, des tensions $T_1$ et $T_2$ (exprimées en Newtons).
4. **Analyse critique et limites du modèle :** En prenant en compte l'incertitude de $\pm 0,5^\circ$ sur la mesure de l'angle $\alpha$ ($\alpha = 30^\circ$), calculez la valeur extrême maximale de $T_1$. Discutez l'impact de cette incertitude sur la marge de sécurité d'un point de rupture de câble donné pour une résistance maximale de $75\text{ N}$.

---

### 💡 Indice de méthode

* **Question 1 :** Pour projeter un vecteur $\vec{T}$ faisant un angle $\theta$ avec l'axe horizontal, utilisez les relations trigonométriques dans un triangle rectangle : la composante horizontale utilise le cosinus et la composante verticale le sinus, en faisant attention au sens des axes.
* **Question 2 & 3 :** Un système vectoriel nul $\vec{U} = x\vec{i} + y\vec{j} = \vec{0}$ équivaut à un système de deux équations scalaires $x = 0$ et $y = 0$. Utilisez une méthode par substitution ou combinaison linéaire.
* **Question 4 :** Pour évaluer la sensibilité du modèle, réitérez le calcul de $T_1$ en remplaçant $\alpha$ par $\alpha + 0,5^\circ$ (soit $30,5^\circ$) et comparez le résultat à la résistance limite du câble.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation vectorielle
* Le poids $\vec{P}$ est dirigé vers le bas (sens contraire de $\vec{j}$) :
  $$\vec{P} = -mg\vec{j} = -(10 \times 9,81)\vec{j} = -98,1\vec{j}$$
  Ses coordonnées sont donc $\vec{P}\begin{pmatrix} 0 \\ -98,1 \end{pmatrix}$.

* Pour les tensions, en étudiant leurs projections géométriques :
  - $\vec{T}_1$ est orienté vers le haut et la gauche : $\vec{T}_1 = -T_1 \cos(\alpha)\vec{i} + T_1 \sin(\alpha)\vec{j}$
    $\vec{T}_1\begin{pmatrix} -T_1 \cos(30^\circ) \\ T_1 \sin(30^\circ) \end{pmatrix} = \begin{pmatrix} -\frac{\sqrt{3}}{2} T_1 \\ \frac{1}{2} T_1 \end{pmatrix}$
  - $\vec{T}_2$ est orienté vers le haut et la droite : $\vec{T}_2 = T_2 \cos(\beta)\vec{i} + T_2 \sin(\beta)\vec{j}$
    $\vec{T}_2\begin{pmatrix} T_2 \cos(45^\circ) \\ T_2 \sin(45^\circ) \end{pmatrix} = \begin{pmatrix} \frac{\sqrt{2}}{2} T_2 \\ \frac{\sqrt{2}}{2} T_2 \end{pmatrix}$

#### 2. Mise en équation de l'équilibre
La condition d'équilibre statique s'écrit :
$$\vec{T}_1 + \vec{T}_2 + \vec{P} = \vec{0}$$

En projetant cette relation vectorielle sur les axes du repère $(O, \vec{i}, \vec{j})$, on obtient le système d'équations scalaires suivant :
$$\begin{cases} -\frac{\sqrt{3}}{2} T_1 + \frac{\sqrt{2}}{2} T_2 = 0 & \text{(selon } \vec{i}\text{)} \\ \frac{1}{2} T_1 + \frac{\sqrt{2}}{2} T_2 - 98,1 = 0 & \text{(selon } \vec{j}\text{)} \end{cases}$$

#### 3. Résolution algébrique
D'après la première ligne du système :
$$\frac{\sqrt{3}}{2} T_1 = \frac{\sqrt{2}}{2} T_2 \implies T_2 = \frac{\sqrt{3}}{\sqrt{2}} T_1 = \sqrt{\frac{3}{2}} T_1$$

Substituons cette expression de $T_2$ dans la deuxième ligne :
$$\frac{1}{2} T_1 + \frac{\sqrt{2}}{2} \left( \sqrt{\frac{3}{2}} T_1 \right) = 98,1$$
$$\frac{1}{2} T_1 + \frac{\sqrt{3}}{2} T_1 = 98,1$$
$$T_1 \left( \frac{1 + \sqrt{3}}{2} \right) = 98,1$$
$$T_1 = \frac{2 \times 98,1}{1 + \sqrt{3}} = \frac{196,2}{1 + \sqrt{3}}$$

En calculant la valeur approchée :
$$T_1 \approx \frac{196,2}{2,732} \approx 71,81\text{ N}$$

Puis, on en déduit $T_2$ :
$$T_2 = \sqrt{1,5} \times 71,81 \approx 1,2247 \times 71,81 \approx 87,95\text{ N}$$

#### 4. Analyse critique et limites du modèle
Si l'on prend en compte l'incertitude de mesure sur l'angle $\alpha$ avec une valeur majorée $\alpha' = 30,5^\circ$ :
$$T_1' = \frac{196,2}{\cos(30,5^\circ) + \sin(30,5^\circ) \times \frac{\sqrt{2}}{\sqrt{3}}} \quad \text{(via reformulation du système)}$$
Plus simplement, refaisons le calcul avec $\alpha' = 30,5^\circ$ et $\beta = 45^\circ$ :
- Selon $\vec{i}$ : $-T_1 \cos(30,5^\circ) + T_2 \cos(45^\circ) = 0 \implies T_2 = T_1 \frac{\cos(30,5^\circ)}{\cos(45^\circ)}$
- Selon $\vec{j}$ : $T_1 \sin(30,5^\circ) + T_2 \sin(45^\circ) = 98,1$

En substituant $T_2$ :
$$T_1 \sin(30,5^\circ) + \left( T_1 \frac{\cos(30,5^\circ)}{\cos(45^\circ)} \right) \sin(45^\circ) = 98,1$$
Puisque $\sin(45^\circ) = \cos(45^\circ)$, les termes se simplifient :
$$T_1 \left( \sin(30,5^\circ) + \cos(30,5^\circ) \right) = 98,1$$
$$T_1 = \frac{98,1}{\sin(30,5^\circ) + \cos(30,5^\circ)} \approx \frac{98,1}{0,5075 + 0,8616} = \frac{98,1}{1,3691} \approx 71,65\text{ N}$$

*Esprit critique :* L'erreur de mesure sur l'angle modifie légèrement la valeur théorique attendue. Cependant, si l'on considère la valeur nominale de $T_1$ ($71,81\text{ N}$), elle est très proche du seuil critique de rupture fixé à $75\text{ N}$. Le coefficient de sécurité du câble ($s = \frac{75}{71,81} \approx 1,04$) est inférieur aux recommandations usuelles en ingénierie (qui exigent généralement $s > 2$ ou $3$). Le modèle montre ici qu'une modification des conditions expérimentales ou une surcharge minime ferait céder l'installation, validant l'importance de coupler mathématiques, physique et gestion du risque.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
