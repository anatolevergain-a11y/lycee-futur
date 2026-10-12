---
title: "Exercice 2 : Coordonnées et vecteurs de déplacement GPS"
description: "Application pratique du chapitre Géométrie repérée et vecteurs"
---

### 🌐 Contexte & Données scientifiques

Les systèmes de géolocalisation par satellites (type GPS, Galileo) reposent sur un repérage mathématique rigoureux de la surface terrestre. Pour des applications locales (comme la cartographie d'une randonnée ou le guidage de véhicules autonomes sur de courtes distances), il est fréquent d'approximer la surface de la Terre par un plan muni d'un repère orthonormé $(O, \vec{i}, \vec{j})$, où l'unité graphique représente des kilomètres.

Considérons une zone d'intervention de secours en montagne modélisée dans un tel repère. Un drone de reconnaissance doit se rendre d'un point de départ $A$ (base avancée) vers un point $B$ (zone de recherche), puis de $B$ vers un point $C$ (station météo en altitude). 

Cependant, la modélisation mathématique linéaire comporte des limites physiques :
1. **L'approximation plane :** Assimiler la sphère terrestre à un plan induit une erreur de mesure non négligeable sur les grandes distances, mais acceptable (erreur $< 0{,}1\,\%$) pour des déplacements inférieurs à $20\,\text{km}$.
2. **Le relief :** Les coordonnées fournies initialement ne tiennent pas compte de la pente topographique réelle. Le vecteur mathématique de déplacement dans le plan horizontal doit être corrigé du dénivelé vertical pour estimer l'énergie réelle consommée par le drone.

Les coordonnées des points dans le repère $(O, \vec{i}, \vec{j})$ (exprimées en kilomètres) sont les suivantes :
* $A(1{,}5 ; 2{,}0)$
* $B(9{,}5 ; 8{,}0)$
* $C(5{,}5 ; 11{,}0)$

---

### ❓ Énoncé

1. **Calcul vectoriel de base :** Déterminer les coordonnées du vecteur de déplacement $\vec{u} = \overrightarrow{AB}$ du drone entre la base $A$ et la zone de recherche $B$. En déduire la distance horizontale parcourue lors de cette première phase (arrondie au mètre près).
2. **Composition des déplacements :** Le plan de vol prévoie un second trajet de $B$ vers $C$ modélisé par le vecteur $\vec{v} = \overrightarrow{BC}$. Calculer les coordonnées de $\vec{v}$. Si le drone effectuait un vol direct de $A$ vers $C$, quel serait le vecteur de déplacement global $\overrightarrow{AC}$ ? Vérifier par le calcul la relation de Chasles.
3. **Analyse critique et contrainte physique :** Le constructeur du drone indique qu'une batterie pleine permet de parcourir une distance maximale de $12\,\text{km}$ en air calme, avec une tolérance de sécurité de $10\,\%$. Le trajet complet $A \to B \to C$ respecte-t-il cette contrainte de sécurité ? Justifier rigoureusement à l'aide des normes vectorielles.
4. **Modélisation de l'effet du vent :** Lors du vol de $A$ vers $B$, un vent latéral exerce une force constante modélisée par le vecteur $\vec{w}(-0{,}5 ; 0{,}3)$. Le vecteur déplacement réel du drone devient alors $\vec{u}_{\text{réel}} = \vec{u} + \vec{w}$. Calculer les nouvelles coordonnées d'arrivée du drone si celui-ci ne corrige pas sa trajectoire. Comment cette dérive mathématique illustre-t-elle la nécessité d'un système de guidage en temps réel ?

---

### 💡 Indice de méthode

* **Question 1 :** Pour un vecteur $\overrightarrow{AB}$ défini par $A(x_A ; y_A)$ et $B(x_B ; y_B)$, les coordonnées sont $\left(x_B - x_A \,;\, y_B - y_A\right)$. La norme (distance) s'obtient par $\|\overrightarrow{AB}\| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.
* **Question 2 :** La relation de Chasles s'écrit vectoriellement $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}$. L'addition de vecteurs s'effectue en additionnant leurs coordonnées respectives.
* **Question 3 :** Calculez la distance $\|\overrightarrow{AB}\|$, puis $\|\overrightarrow{BC}\|$. Sommez ces distances pour obtenir le parcours total et comparez-le à la limite opérationnelle de la batterie diminuée de sa marge de sécurité.
* **Question 4 :** L'addition de vecteurs $\vec{u} + \vec{w}$ s'obtient en additionnant les abscisses entre elles et les ordonnées entre elles. Pour trouver la nouvelle position d'arrivée $B'$, partez des coordonnées de $A$ et ajoutez les coordonnées du vecteur réel $\vec{u}_{\text{réel}}$.

---

### 📋 Correction détaillée pas à pas

#### 1. Coordonnées et norme du vecteur $\vec{u} = \overrightarrow{AB}$
Par definition, les coordonnées du vecteur $\overrightarrow{AB}$ sont :
$$\overrightarrow{AB} \begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$$
En remplacant par les valeurs de $A(1{,}5 ; 2{,}0)$ et $B(9{,}5 ; 8{,}0)$ :
$$\overrightarrow{AB} \begin{pmatrix} 9{,}5 - 1{,}5 \\ 8{,}0 - 2{,}0 \end{pmatrix} = \begin{pmatrix} 8{,}0 \\ 6{,}0 \end{pmatrix}$$

La distance horizontale $\|\overrightarrow{AB}\}$ se calcule par la formule de la norme dans un repère orthonormé :
$$\|\overrightarrow{AB}\| = \sqrt{8{,}0^2 + 6{,}0^2} = \sqrt{64 + 36} = \sqrt{100} = 10{,}0\,\text{km}$$
La distance horizontale parcourue est exactement de $10{,}0\,\text{km}$.

#### 2. Composition des déplacements et relation de Chasles
Calculons les coordonnées de $\vec{v} = \overrightarrow{BC}$ avec $B(9{,}5 ; 8{,}0)$ et $C(5{,}5 ; 11{,}0)$ :
$$\overrightarrow{BC} \begin{pmatrix} 5{,}5 - 9{,}5 \\ 11{,}0 - 8{,}0 \end{pmatrix} = \begin{pmatrix} -4{,}0 \\ 3{,}0 \end{pmatrix}$$

Le déplacement global $\overrightarrow{AC}$ se déduit par la relation de Chasles : $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}$.
En sommant les coordonnées :
$$\overrightarrow{AC} = \begin{pmatrix} 8{,}0 \\ 6{,}0 \end{pmatrix} + \begin{pmatrix} -4{,}0 \\ 3{,}0 \end{pmatrix} = \begin{pmatrix} 8{,}0 + (-4{,}0) \\ 6{,}0 + 3{,}0 \end{pmatrix} = \begin{pmatrix} 4{,}0 \\ 9{,}0 \end{pmatrix}$$
*Vérification directe à partir des points $A(1{,}5 ; 2{,}0)$ et $C(5{,}5 ; 11{,}0)$ :*
$$\overrightarrow{AC} \begin{pmatrix} 5{,}5 - 1{,}5 \\ 11{,}0 - 2{,}0 \end{pmatrix} = \begin{pmatrix} 4{,}0 \\ 9{,}0 \end{pmatrix}$$
Le résultat est cohérent et valide la relation de Chasles.

#### 3. Analyse critique de l'autonomie et de la sécurité
Calculons la distance du second tronçon $\|\overrightarrow{BC}\|$ :
$$\|\overrightarrow{BC}\| = \sqrt{(-4{,}0)^2 + 3{,}0^2} = \sqrt{16 + 9} = \sqrt{25} = 5{,}0\,\text{km}$$

La distance totale du parcours $A \to B \to C$ est la somme des distances des deux segments :
$$D_{\text{totale}} = \|\overrightarrow{AB}\| + \|\overrightarrow{BC}\| = 10{,}0 + 5{,}0 = 15{,}0\,\text{km}$$

Analysons maintenant la contrainte de la batterie :
* Autonomie maximale brute : $12\,\text{km}$.
* Marge de sécurité de $10\,\%$, ce qui signifie que l'utilisation maximale tolérée pour garantir le retour sans panne est de :
  $$12 \times (1 - 0{,}10) = 12 \times 0{,}90 = 10{,}8\,\text{km}$$

Puisque $D_{\text{totale}} = 15{,}0\,\text{km}$ est strictement supérieur à l'autonomie sécurisée ($10{,}8\,\text{km}$), **le trajet complet ne respecte pas la contrainte de sécurité**. Le modèle mathématique démontre qu'une recharge intermédiaire ou un allègement de la mission est indispensable pour écarter tout risque de crash.

#### 4. Modélisation de l'effet du vent et limites du modèle
Le vecteur déplacement réel en présence du vent $\vec{w}(-0{,}5 ; 0{,}3)$ est :
$$\vec{u}_{\text{réel}} = \overrightarrow{AB} + \vec{w} = \begin{pmatrix} 8{,}0 \\ 6{,}0 \end{pmatrix} + \begin{pmatrix} -0{,}5 \\ 0{,}3 \end{pmatrix} = \begin{pmatrix} 7{,}5 \\ 6{,}3 \end{pmatrix}$$

Si le drone part de $A(1{,}5 ; 2{,}0)$ et subit ce vecteur sans correction de cap, sa position réelle d'arrivée $B'$ a pour coordonnées :
$$x_{B'} = x_A + 7{,}5 = 1{,}5 + 7{,}5 = 9{,}0$$
$$y_{B'} = y_A + 6{,}3 = 2{,}0 + 6{,}3 = 8{,}3$$
Le drone arrive donc au point $B'(9{,}0 ; 8{,}3)$ au lieu du point théorique $B(9{,}5 ; 8{,}0)$. 

**Analyse critique :** Cette divergence met en évidence les limites d'un modèle géométrique purement statique. Dans la réalité physique, les perturbations extérieures (vent, courants, variations de densité de l'air) modifient continuellement la trajectoire. Cela démontre la nécessité d'implémenter des boucles de rétroaction (type algorithmes de correction par GPS différentiel) qui recalculent en temps réel les vecteurs de correction pour s'ajuster aux aléas du terrain.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
