---
title: "Exercice 2 : Forces de frottement et étude d'efficacité énergétique"
description: "Application pratique du chapitre Mouvement et interactions"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la transition énergétique des mobilités urbaines, l'étude des forces de frottement est primordiale pour concevoir des véhicules moins énergivores. On s'intéresse ici à un prototype de vélo à assistance électrique (VAE) et à son cycliste, dont la masse totale est $m = 80\text{ kg}$. 

Lors d'un déplacement sur une portion de route horizontale à la vitesse constante $v = 25\text{ km/h}$ (soit environ $6{,}94\text{ m/s}$), le système subit des forces résistantes regroupées sous deux natures principales :
1. **Les frottements mécaniques** (roulement des pneus et frottements internes de la transmission), modélisés par une force constante $\vec{f}_{\text{mech}}$ opposée au mouvement, d'intensité $f_{\text{mech}} = 15\text{ N}$.
2. **Les forces de frottement fluides** (résistance de l'air), dont l'intensité dépend de la vitesse selon la relation :
   $$f_{\text{air}} = k \cdot v^2$$
   où $k = 0{,}22\text{ N}\cdot\text{s}^2\cdot\text{m}^{-2}$ est le coefficient de pénétration dans l'air (lié à la forme et à la surface frontale).

La batterie du VAE délivre une puissance électrique moyenne $P_{\text{batt}} = 250\text{ W}$ au moteur. 

*Donnée complémentaire :* Intensité de la pesanteur $g = 9{,}81\text{ N}\cdot\text{kg}^{-1}$.

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Identification et bilan des forces :** En appliquant le principe d'inertie (première loi de Newton), déterminez la condition vérifiée par la somme des forces agissant sur le système lors du mouvement rectiligne et uniforme. Calculez l'intensité de la force motrice $\vec{F}_{\text{mot}}$ exercée par le système propulsif (pédalage + moteur) pour maintenir cette vitesse constante.
2. **Analyse énergétique et puissance :** Exprimez, puis calculez, la puissance mécanique $P_{\text{mot}}$ réellement fournie pour vaincre l'ensemble des forces résistantes à cette vitesse. 
3. **Étude d'efficacité énergétique :** Définissez le rendement énergétique $\eta$ (êta) de la chaîne de traction du VAE (rapport entre la puissance mécanique utile et la puissance électrique fournie par la batterie). Calculez sa valeur en pourcentage. 
4. **Esprit critique et limites du modèle :** Le constructeur affirme que l'efficacité énergétique pourrait être améliorée de $15\%$ en adoptant une position aérodynamique abaissant le coefficient $k$ à $0{,}18\text{ N}\cdot\text{s}^2\cdot\text{m}^{-2}$. Discutez de la validité et des limites de cette affirmation en confrontant le gain théorique calculé aux contraintes physiologiques et ergonomiques pour le cycliste.

---

### 💡 Indice de méthode

* **Question 1 :** Si le vecteur vitesse du centre d'assiette est constant (mouvement rectiligne et uniforme), que dire de la somme vectorielle des forces (principe d'inertie) ? Projetez cette relation vectorielle sur un axe horizontal orienté dans le sens du mouvement.
* **Question 2 :** La puissance d'une force constante ou agissant dans la direction du mouvement s'exprime par le produit de sa valeur par la vitesse : $P = F \cdot v$. Calculez d'abord l'intensité de la force de frottement de l'air $f_{\text{air}}$ à la vitesse $v = 6{,}94\text{ m/s}$.
* **Question 3 :** Le rendement $\eta$ est un nombre sans dimension (souvent exprimé en pourcentages) défini par $\eta = \frac{P_{\text{utile}}}{P_{\text{reçue}}}$. Veillez à bien identifier quelle grandeur représente l'utilité et laquelle représente la dépense.
* **Question 4 :** Pour analyser les limites d'un modèle physique, posez-vous la question de la "soutenabilité" de l'hypothèse (peut-on maintenir une position aérodynamique extrême indéfiniment sans impacter la fatigue musculaire ou la sécurité visuelle ?).

---

### 📋 Correction détaillée pas à pas

#### 1. Bilan des forces et intensité de la force motrice
Le système (Vélo + Cycliste) est en mouvement rectiligne et uniforme à la vitesse $v = 25\text{ km/h} \approx 6{,}94\text{ m/s}$. D'après le **principe d'inertie** (première loi de Newton), la somme vectorielle des forces extérieures s'exerçant sur le système est nulle :
$$\sum \vec{F}_{\text{ext}} = \vec{F}_{\text{mot}} + \vec{P} + \vec{R} + \vec{f}_{\text{mech}} + \vec{f}_{\text{air}} = \vec{0}$$

En projetant cette relation sur un axe horizontal orienté dans le sens du mouvement :
$$F_{\text{mot}} - f_{\text{mech}} - f_{\text{air}} = 0 \implies F_{\text{mot}} = f_{\text{mech}} + f_{\text{air}}$$

Calculons préalablement la force de frottement de l'air :
$$f_{\text{air}} = k \cdot v^2 = 0{,}22 \times (6{,}94)^2 \approx 0{,}22 \times 48{,}16 \approx 10{,}59\text{ N}$$

On en déduit l'intensité de la force motrice :
$$F_{\text{mot}} = 15 + 10{,}59 = 25{,}59\text{ N}$$

#### 2. Puissance mécanique motrice
La puissance mécanique $P_{\text{mot}}$ nécessaire pour maintenir le mouvement à vitesse constante compense exactement les pertes dues aux frottements. Elle s'exprime par :
$$P_{\text{mot}} = F_{\text{mot}} \cdot v$$
$$P_{\text{mot}} = 25{,}59\text{ N} \times 6{,}94\text{ m/s} \approx 177{,}6\text{ W}$$

#### 3. Efficacité énergétique (rendement)
Le rendement $\eta$ de la chaîne de traction évalue la capacité à transformer l'énergie électrique de la batterie en énergie mécanique utile pour avancer :
$$\eta = \frac{P_{\text{utile}}}{P_{\text{reçue}}} = \frac{P_{\text{mot}}}{P_{\text{batt}}}$$
$$\eta = \frac{177{,}6}{250} \approx 0{,}7104$$

Soit un rendement de **$71{,}0\text{ \%}$**. (Les $29\%$ restants sont dissipés en chaleur dans le moteur, l'électronique de puissance et la transmission).

#### 4. Analyse critique et limites du modèle
* **Calcul avec le nouveau coefficient $k' = 0{,}18$ :**
  La nouvelle force de l'air devient $f'_{\text{air}} = 0{,}18 \times (6{,}94)^2 \approx 8{,}67\text{ N}$.
  La nouvelle force motrice nécessaire est $F'_{\text{mot}} = 15 + 8{,}67 = 23{,}67\text{ N}$.
  La nouvelle puissance mécanique utile est $P'_{\text{mot}} = 23{,}67 \times 6{,}94 \approx 164{,}3\text{ W}$.
  Le nouveau rendement global apparent du système passe à $\eta' = \frac{164{,}3}{250} \approx 65{,}7\%$ (la puissance électrique fournie restant la même, la machine consomme moins d'énergie de la batterie pour avancer).

* **Esprit critique :**
  L'affirmation du constructeur est mathématiquement correcte du point de vue de la mécanique des fluides : réduire la surface frontale diminue la force de traînée. Cependant, ce modèle présente des **limites biomécaniques et ergonomiques** importantes :
  1. *Confort et sécurité :* Adopter une position aérodynamique (type vélo de course) réduit la visibilité du cycliste en milieu urbain dense et augmente les tensions cervicales et lombaires.
  2. *Hypothèse de constance :* Le modèle suppose $k$ constant, or la morphologie humaine n'est pas rigide ; de plus, en milieu urbain, les phases d'accélération et de freinage fréquents rendent l'aérodynamisme moins prépondérant que les pertes par inertie (liées à la masse $m$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
