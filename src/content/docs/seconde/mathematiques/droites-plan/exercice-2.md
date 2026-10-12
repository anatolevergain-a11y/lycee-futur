---
title: "Exercice 2 : Pente et coefficient directeur en topographie"
description: "Application pratique du chapitre Droites dans le plan"
---

### 🌐 Contexte & Données scientifiques

En topographie et en génie civil, la caractérisation de la pente d'un terrain est une étape fondamentale pour l'aménagement d'infrastructures (routes, voies ferrées, canalisations d'assainissement). 

Deux notions mathématiques et techniques sont couramment employées pour exprimer cette inclinaison :
1. **Le coefficient directeur** (ou taux de variation) issu de la géométrie analytique, noté $a$ dans l'équation réduite d'une droite $y = ax + b$. Il s'exprime sans unité et correspond au rapport entre le dénivelé vertical et le déplacement horizontal.
2. **La pente en pourcentage** ($\text{pente}_{\%}$), largement utilisée sur le terrain, définie par le rapport de la dénivelée sur la distance horizontale, multiplié par $100$.

Considérons un projet de tracé routier rectiligne flanc de coteau. Les relevés topographiques réalisés par un géomètre-expert établissent un profil en long simplifié. Dans un repère orthonormé $(O; \vec{i}, \vec{j})$ où l'unité graphique représente $100 \text{ m}$ sur le terrain, le profil du terrain naturel est modélisé par une droite $(\mathcal{D})$ passant par deux bornes topographiques :
* Le point $A$ d'abscisse $x_A = 0,5$ (soit $50 \text{ m}$ du point origine) et d'altitude $y_A = 1,2$ (soit $120 \text{ m}$ au-dessus du niveau de référence).
* Le point $B$ d'abscisse $x_B = 2,5$ (soit $250 \text{ m}$ du point origine) et d'altitude $y_B = 1,8$ (soit $180 \text{ m}$ au-dessus du niveau de référence).

Cependant, les normes de sécurité routière imposent des contraintes strictes : pour les véhicules lourds, une pente longitudinale ne doit généralement pas excéder $7\%$ ($\text{pente} = 0,07$) afin d'éviter la surconsommation, l'usure prématurée des freins et les risques de perte de contrôle. De plus, les incertitudes de mesure sur le terrain induisent une tolérance de $\pm 0,2\%$ sur l'estimation des pentes.

---

### ❓ Énoncé

1. **Modélisation mathématique :** Déterminer l'équation réduite de la droite $(\mathcal{D})$ modélisant le profil du terrain naturel entre les points $A$ et $B$. Préciser son coefficient directeur $a$.
2. **Interprétation topographique :** Calculer la pente de ce tronçon routier en pourcentage. 
3. **Analyse critique et contraintes normatives :** Le projet routier actuel respecte-t-il la norme de sécurité fixée à un maximum de $7\%$ ? Justifier la réponse en tenant compte de l'incertitude de mesure topographique de $\pm 0,2\%$.
4. **Optimisation géométrique :** Pour respecter impérativement la norme de sécurité en conservant le point de départ $A(0,5 ; 1,2)$, quelle doit être l'altitude maximale du point d'arrivée $B'$ situé à la même abscisse $x_{B'} = 2,5$ ?

---

### 💡 Indice de méthode

* Pour la question 1, rappelez-vous que le coefficient directeur $a$ d'une droite passant par deux points $A(x_A ; y_A)$ et $B(x_B ; y_B)$ (avec $x_A \neq x_B$) se calcule par la formule :
  $$a = \frac{y_B - y_A}{x_B - x_A}$$
* Pour le passage aux pourcentages (question 2), veillez à bien observer les unités de terrain ($\text{mètres}$) par rapport aux unités du repère. Le coefficient directeur représente un rapport de déplacements exprimés dans la *même* unité.
* Pour l'analyse critique (question 3), l'intervalle de confiance lié à l'incertitude doit être comparé à la valeur limite réglementaire.
* Pour la dernière question (4), traduisez la condition de pente maximale par une inéquation ou une égalité sur le coefficient directeur recherché $a'$.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation mathématique
Le profil du terrain est modélisé par une droite $(\mathcal{D})$ d'équation réduite de la forme $y = ax + b$.
Les coordonnées des points $A$ et $B$ dans le repère sont $A(0,5 ; 1,2)$ et $B(2,5 ; 1,8)$.
Le coefficient directeur $a$ se calcule ainsi :
$$a = \frac{y_B - y_A}{x_B - x_A} = \frac{1,8 - 1,2}{2,5 - 0,5} = \frac{0,6}{2} = 0,3$$

Le coefficient directeur de la droite $(\mathcal{D})$ est donc $a = 0,3$.
Pour trouver l'ordonnée à l'origine $b$, on utilise les coordonnées du point $A$ :
$$y_A = a \cdot x_A + b \implies 1,2 = 0,3 \times 0,5 + b \implies 1,2 = 0,15 + b \implies b = 1,05$$
L'équation réduite de la droite $(\mathcal{D})$ est :
$$y = 0,3x + 1,05$$

#### 2. Interprétation topographique
Le coefficient directeur $a = 0,3$ signifie que pour une augmentation d'une unité sur l'axe des abscisses (soit $100 \text{ m}$ sur le terrain), l'altitude augmente de $0,3$ unité (soit $30 \text{ m}$ sur le terrain).
La pente en pourcentage ($\text{pente}_{\%}$) est définie par le rapport de la dénivelée sur la distance horizontale, exprimé en pourcentage. 
Ici, la dénivelée est $y_B - y_A = 0,6 \text{ unités} = 60 \text{ m}$, et la distance horizontale est $x_B - x_A = 2 \text{ unités} = 200 \text{ m}$.
$$\text{pente}_{\%} = \left( \frac{60 \text{ m}}{200 \text{ m}} \right) \times 100 = 0,3 \times 100 = 30\%$$
*(On remarque que la pente en pourcentage correspond simplement au coefficient directeur multiplié par $100$ lorsque les axes sont à la même échelle).*

#### 3. Analyse critique et contraintes normatives
La pente calculée est de $30\%$. La norme de sécurité impose un maximum de $7\%$. 
Même en tenant compte de l'incertitude maximale de mesure de $\pm 0,2\%$, la pente réelle se situe au minimum dans l'intervalle $[29,8\% ; 30,2\%]$.
**Conclusion :** Le profil actuel du terrain naturel ne respecte absolument pas la norme de sécurité routière. La pente est plus de quatre fois supérieure au seuil maximal toléré. Un aménagement lourd (terrassement, déblais/remblais ou création de lacets) est donc inévitable pour rendre la voie praticable, ce qui engendre des arbitrages complexes entre coûts financiers, impact environnemental et faisabilité technique.

#### 4. Optimisation géométrique
Pour que la route respecte la norme de sécurité, le coefficient directeur $a'$ de la nouvelle droite doit être au maximum de $0,07$ (ce qui correspond à $7\%$).
Le point de départ $A(0,5 ; 1,2)$ est fixe. L'abscisse du point d'arrivée $B'$ reste $x_{B'} = 2,5$.
Exprimons l'altitude maximale $y_{B'}$ autorisée avec une pente limite :
$$a' = \frac{y_{B'} - y_A}{x_{B'} - x_A} \leq 0,07$$
En prenant le cas limite $a' = 0,07$ :
$$\frac{y_{B'} - 1,2}{2,5 - 0,5} = 0,07$$
$$\frac{y_{B'} - 1,2}{2} = 0,07$$
$$y_{B'} - 1,2 = 0,07 \times 2$$
$$y_{B'} - 1,2 = 0,14$$
$$y_{B'} = 1,34$$

Dans le système d'unités du terrain, l'altitude du point d'arrivée $B'$ ne doit pas dépasser $134 \text{ m}$ (au lieu de $180 \text{ m}$ initialement), ce qui implique une importante opération de déblai (excavation d'une tranche de $46 \text{ m}$ de hauteur en fin de tronçon).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
