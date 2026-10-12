---
title: "Exercice 2 : Diffraction et limites de résolution d'images"
description: "Application pratique du chapitre Lunette astronomique et optique géométrique"
---

### 🌐 Contexte & Données scientifiques

En optique géométrique, l'approximation des rayons lumineux permet de construire les images sans se soucier de la nature ondulatoire de la lumière. Cependant, lorsqu'un système optique vise à observer des objets lointains ou de petite taille (comme une lunette astronomique), la diffraction par les ouvertures limitantes (le diamètre de l'objectif) impose une limite fondamentale à la finesse des détails observables : la **limite de résolution**.

La théorie ondulatoire montre qu'une source lumineuse ponctuelle n'a pas pour image un point, mais une tache de diffraction (tache d'Airy). Selon le critère de Rayleigh, deux sources ponctuelles distinctes sont considérées comme résolues si le maximum de la tache de diffraction de l'une coïncide avec le premier minimum de l'autre. 

Pour une ouverture circulaire de diamètre $D$, l'écart angulaire minimal $\theta_{\min}$ (exprimé en radians) sous lequel deux points peuvent être distingués est donné par la relation :
$$\theta_{\min} \approx 1{,}22 \frac{\lambda}{D}$$

**Données et constantes :**
* Longueur d'onde de la lumière dans le vide (domaine visible central) : $\lambda = 550 \text{ nm}$
* Diamètre de l'objectif d'une lunette astronomique d'amateur haut de gamme : $D_1 = 100 \text{ mm}$
* Diamètre de l'objectif du Télescope Spatial James Webb (JWST, optique de type similaire pour l'analyse) ou d'un grand télescope terrestre équivalent : $D_2 = 6{,}5 \text{ m}$ (considéré ici en visible pour la comparaison, bien que le JWST travaille en infrarouge).
* Distance Terre-Lune : $d \approx 3{,}84 \times 10^5 \text{ km}$

---

### ❓ Énoncé

1. **Calcul d'ordre de grandeur :** Calculer le pouvoir de résolution angulaire $\theta_{\min}$ (en radians puis en arcsecondes) pour la lunette d'amateur de diamètre $D_1 = 100 \text{ mm}$. *Rappel : $1^{\circ} = 3600 \text{ arcsecondes}$ et $1 \text{ rad} = \left(\frac{180}{\pi}\right)^{\circ}$.*
2. **Application astronomique :** En déduire la distance minimale $L$ entre deux cratères lunaires que cette lunette peut espérer distinguer. Discuter de la validité de ce résultat au regard des conditions atmosphériques terrestres (la turbulence atmosphérique).
3. **Analyse comparative des modèles :** Pour s'affranchir des limites de résolution, les ingénieurs augmentent le diamètre $D$ des collecteurs ou placent les télescopes dans l'espace. Calculer le diamètre $D_3$ qu'une lunette devrait théoriquement posséder pour résoudre un détail de $1 \text{ m}$ sur la surface de la Lune. 
4. **Esprit critique et compromis technologiques :** Discuter des limites de faisabilité technique et économique associées à la fabrication d'une lunette (ou d'une lentille) de diamètre $D_3$. Pourquoi l'industrie optique et spatiale privilégie-t-elle les télescopes réflecteurs (miroirs) aux lunettes (lentilles) pour les grands diamètres ?

---

### 💡 Indice de méthode

* **Question 1 :** Veillez à homogénéiser toutes les grandeurs dans le Système International ($\text{mètres}$ pour les longueurs) avant d'appliquer la formule du critère de Rayleigh.
* **Question 2 :** Assimilez l'écart angulaire $\theta_{\min}$ à un petit angle, ce qui permet d'utiliser l'approximation $\tan(\theta) \approx \theta \approx \frac{L}{d}$ (avec $\theta$ en radians).
* **Question 3 :** Réarrangez la formule littérale pour exprimer $D_3$ en fonction de $\lambda$, $L$ et $d$, en identifiant correctement la relation géométrique entre la résolution linéaire et angulaire.
* **Question 4 :** Mobilisez vos connaissances sur les défauts optiques des lentilles (aberrations chromatiques et géométriques) ainsi que sur les contraintes mécaniques liées à la pesanteur (déformation des verres par leur propre poids).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul du pouvoir de résolution angulaire pour la lunette $D_1$
À partir du critère de Rayleigh, on calcule l'écart angulaire minimal :
$$\theta_{\min} = 1{,}22 \frac{\lambda}{D_1}$$
A.N. avec $\lambda = 550 \times 10^{-9} \text{ m}$ et $D_1 = 0{,}100 \text{ m}$ :
$$\theta_{\min} = 1{,}22 \times \frac{550 \times 10^{-9}}{0{,}100} = 6{,}71 \times 10^{-6} \text{ rad}$$

Convertissons cette valeur en arcsecondes ($\text{arcsec}$) :
$$\theta_{\min} (\text{deg}) = 6{,}71 \times 10^{-6} \times \frac{180}{\pi} \approx 3{,}84 \times 10^{-4} \text{ deg}$$
$$\theta_{\min} (\text{arcsec}) = 3{,}84 \times 10^{-4} \times 3600 \approx 1{,}38 \text{ arcsec}$$

#### 2. Distance minimale entre deux cratères et analyse critique
En utilisant l'approximation des petits angles, l'arc $\theta_{\min}$ sous-tend une distance linéaire $L$ à la distance $d$ :
$$\theta_{\min} \approx \frac{L}{d} \implies L = \theta_{\min} \times d$$
A.N. avec $d = 3{,}84 \times 10^8 \text{ m}$ :
$$L = 6{,}71 \times 10^{-6} \times 3{,}84 \times 10^8 \approx 2577 \text{ m} \approx 2{,}6 \text{ km}$$

* **Discussion critique :** Ce résultat théorique ne tient compte que de la diffraction. En pratique, sur Terre, la **turbulence atmosphérique** (les mouvements de convection des masses d'air de températures différentes) perturbe les front d'ondes lumineux. La résolution réelle observée depuis le sol est généralement limitée par le "seeing" atmosphérique à environ $1 \text{ arcsec}$ dans les meilleurs sites, ce qui rend illusoire l'obtention de la limite théorique pure avec une petite lunette, sauf à utiliser des techniques d'optique adaptative.

#### 3. Calcul du diamètre $D_3$ requis pour résoudre $1 \text{ m}$ sur la Lune
On cherche le diamètre $D_3$ permettant d'atteindre une résolution linéaire $L' = 1 \text{ m}$ à la distance $d$. 
L'angle minimal correspondant est $\theta'_{\min} = \frac{L'}{d}$.
En combinant avec la formule de la diffraction :
$$\frac{L'}{d} = 1{,}22 \frac{\lambda}{D_3} \implies D_3 = 1{,}22 \frac{\lambda \cdot d}{L'}$$
A.N. :
$$D_3 = 1{,}22 \times \frac{(550 \times 10^{-9}) \times (3{,}84 \times 10^8)}{1}$$
$$D_3 = 1{,}22 \times 211{,}2 \approx 257{,}7 \text{ m}$$
Il faudrait un instrument d'environ $258 \text{ m}$ de diamètre.

#### 4. Analyse critique, limites de faisabilité et choix technologiques
* **Faisabilité technique et économique :** Fabriquer une lentille (dioptre) de $258 \text{ m}$ de diamètre est techniquement impossible à l'heure actuelle. Une lentille ne peut être soutenue que par sa périphérie. Par conséquent, sous l'effet de son propre poids, un verre de grande taille fléchit, ce qui détruit la qualité de l'image (aberrations géométriques majeures). De plus, la traversée de l'épaisseur du verre entraîne une absorption de la lumière et des **aberrations chromatiques** (les différentes longueurs d'onde ne convergent pas au même foyer).
* **Pourquoi les télescopes (réflecteurs) ?** Pour s'affranchir de ces limites, l'astronomie moderne utilise des miroirs (télescopes) :
  1. Un miroir peut être soutenu par toute sa face arrière, éliminant les problèmes de flexion excessive.
  2. La réflexion se fait sur la surface du miroir : la lumière ne traverse pas le matériau, ce qui supprime l'aberration chromatique.
  3. Il est possible de segmenter les grands miroirs (ex: JWST ou E-ELT) et d'utiliser l'optique active pour corriger en temps réel les défauts de surface.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
