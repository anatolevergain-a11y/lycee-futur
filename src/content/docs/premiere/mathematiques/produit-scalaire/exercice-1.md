---
title: "Exercice 1 : Calcul du travail d'une force"
description: "Application pratique du chapitre Produit scalaire"
---

### 🌐 Contexte & Données scientifiques

En mécanique classique, le travail d'une force constante $\vec{F}$ appliquée à un système ponctuel lors d'un déplacement rectiligne de son point d'application d'un point $A$ vers un point $B$ est défini mathématiquement par le produit scalaire des vecteurs $\vec{F}$ et $\vec{AB}$ :

$$W_{AB}(\vec{F}) = \vec{F} \cdot \vec{AB}$$

Dans le système international d'unités (SI), le travail s'exprime en joules ($\text{J}$), la force en newtons ($\text{N}$) et la distance en mètres ($\text{m}$).

Considérons un chantier de génie civil où l'on souhaite acheminer des matériaux le long d'un plan incliné. Un treuil électrique exerce une force de traction $\vec{F}$ constante pour remonter une charge assimilée à un point matériel $S$ de masse $m = 50\,\text{kg}$. Le plan incliné fait un angle $\alpha = 30^\circ$ par rapport à l'horizontale. La longueur totale du trajet sur le plan incliné est $AB = 10\,\text{m}$.

Cependant, tout modèle physique repose sur des hypothèses simplificatrices qu'il convient d'analyser avec rigueur :
1. **Modèle sans frottement (idéalisation) :** Dans un premier temps, on néglige les forces de frottement entre la charge et le plan. Ce modèle thermodynamique néglige les pertes par dissipation thermique.
2. **Modèle avec frottement (approche réaliste) :** Les interactions électromagnétiques de contact génèrent une force de frottement dynamique $\vec{f}$, opposée au vecteur vitesse, colinéaire au plan et d'intensité constante $f = 25\,\text{N}$. 
3. **Incertitudes de mesure :** L'angle $\alpha$ mesuré par inclinomètre possède une incertitude de $\pm 0,5^\circ$, ce qui impose d'analyser la propagation de cette incertitude sur le calcul énergétique final, enjeu critique pour le dimensionnement réel des installations industrielles et la sécurité des biens.

---

### ❓ Énoncé

1. **Modélisation géométrique et vectorielle :** Dans le repère orthonormé lié au plan incliné, on définit l'axe $(O\vec{i})$ colinéaire au déplacement et orienté de $A$ vers $B$, et l'axe $(O\vec{j})$ orthogonal au plan. Exprimez les composantes cartésiennes du vecteur déplacement $\vec{AB}$ et du vecteur force de traction $\vec{F}$, sachant que cette dernière est parallèle au plan incliné et que son intensité est réglée pour maintenir une vitesse constante ($F = mg \sin(\alpha)$ dans le modèle sans frottement, avec $g \approx 9,81\,\text{m}\cdot\text{s}^{-2}$). Calculez le travail $W_{AB}(\vec{F})$ dans ce cas idéal.

2. **Interprétation énergétique et critique du modèle idéal :** Calculez le travail du poids $\vec{P}$ du système au cours de ce même déplacement. En déduire la variation d'énergie mécanique du système dans le modèle sans frottement, et commentez la pertinence de ce modèle au regard des réalités industrielles.

3. **Prise en compte des frottements :** On intègre à présent la force de frottement $\vec{f}$ d'intensité $f = 25\,\text{N}$. Exprimez le travail de la force de frottement $W_{AB}(\vec{f})$ sur le trajet $AB$. Calculez le travail total exercé sur le système. Quelle conséquence cela implique-t-il sur la puissance minimale requise du moteur du treuil ?

4. **Analyse critique des incertitudes :** En utilisant une approximation linéaire (différentielle) ou un encadrement, étudiez l'impact de l'incertitude sur l'angle $\alpha$ ($\Delta\alpha = 0,5^\circ = \frac{0,5 \pi}{180}\,\text{rad}$) sur le calcul du travail de la force de traction dans le modèle idéal. Discutez de l'importance de cette démarche d'évaluation des risques pour un ingénieur.

---

### 💡 Indice de méthode

- **Rappel du produit scalaire :** Si deux vecteurs sont donnés par leurs normes et l'angle $\theta$ qu'ils forment, alors $\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\theta)$. Si leurs coordonnées cartésiennes dans une base orthonormée sont $(x_1, y_1)$ et $(x_2, y_2)$, alors $\vec{u} \cdot \vec{v} = x_1 x_2 + y_1 y_2$.
- **Travail du poids :** Le travail du poids ne dépend que de la variation d'altitude entre le point de départ et le point d'arrivée : $W_{AB}(\vec{P}) = -mg(z_B - z_A)$.
- **Analyse critique :** Ne confondez pas la valeur mathématique exacte obtenue par le calcul et la réalité physique mesurée, qui est toujours entachée d'incertitudes instrumentales.

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Calcul du travail dans le modèle idéal sans frottement
Dans le repère choisi, le vecteur déplacement a pour norme $\|\vec{AB}\| = 10\,\text{m}$ et est orienté selon $\vec{i}$ :
$$\vec{AB} = \begin{pmatrix} 10 \\ 0 \end{pmatrix}$$

La force de traction $\vec{F}$ est exercée parallèlement au plan incliné pour remonter la charge à vitesse constante. En l'absence de frottement, la composante tangentielle de la force motrice équemple exactement la composante tangentielle du poids :
$$F = mg \sin(\alpha) = 50 \times 9,81 \times \sin(30^\circ) = 490,5 \times 0,5 = 245,25\,\text{N}$$

Le vecteur force est donc :
$$\vec{F} = \begin{pmatrix} 245,25 \\ 0 \end{pmatrix}$$

Le travail de la force $\vec{F}$ est le produit scalaire :
$$W_{AB}(\vec{F}) = \vec{F} \cdot \vec{AB} = (245,25 \times 10) + (0 \times 0) = 2452,5\,\text{J}$$

---

#### Question 2 : Travail du poids et critique du modèle
Le poids $\vec{P}$ a pour composantes dans le repère vertical/horizontal, mais le produit scalaire avec le déplacement sur le plan incliné d'angle $\alpha$ s'obtient via l'angle entre $\vec{P}$ et $\vec{AB}$ qui est de $90^\circ + \alpha$. 
Géométriquement, le travail du poids ne dépend que de la variation d'altitude $\Delta z = AB \sin(\alpha) = 10 \times \sin(30^\circ) = 5\,\text{m}$ :
$$W_{AB}(\vec{P}) = -mg(z_B - z_A) = -50 \times 9,81 \times 5 = -2452,5\,\text{J}$$

Le travail total des forces s'appliquant au système (dans ce modèle idéal) est :
$$W_{\text{total}} = W_{AB}(\vec{F}) + W_{AB}(\vec{P}) = 2452,5 - 2452,5 = 0\,\text{J}$$
Conformément au théorème de l'énergie cinétique, la vitesse étant constante, la variation d'énergie cinétique est nulle. 

*Esprit critique :* Ce modèle est une idéalisation mathématique utile pour appréhender les ordres de grandeur. Cependant, il est scientifiquement invalide en pratique industrielle car il néglige les frottements solides et visqueux, ce qui conduirait à sous-dimensionner le moteur et à compromettre la sécurité du système.

---

#### Question 3 : Intégration des forces de frottement
La force de frottement $\vec{f}$ s'oppose au mouvement. Elle est colinéaire au vecteur $\vec{AB}$ mais de sens contraires :
$$\vec{f} = \begin{pmatrix} -f \\ 0 \end{pmatrix} = \begin{pmatrix} -25 \\ 0 \end{pmatrix}$$

Le travail de la force de frottement est donc :
$$W_{AB}(\vec{f}) = \vec{f} \cdot \vec{AB} = -25 \times 10 = -250\,\text{J}$$

Ce travail négatif traduit une dissipation d'énergie mécanique sous forme thermique (chaleur). Pour remonter la charge à vitesse constante malgré ces frottements, la force motrice $\vec{F}'$ doit vérifier $F' = mg\sin(\alpha) + f = 245,25 + 25 = 270,25\,\text{N}$. 
Le nouveau travail de la force motrice est :
$$W_{AB}(\vec{F}') = 270,25 \times 10 = 2702,5\,\text{J}$$

Sur le plan technologique, le moteur doit donc fournir une puissance supérieure pour compenser cette perte énergétique, illustrant le compromis permanent entre efficacité énergétique et faisabilité mécanique.

---

#### Question 4 : Analyse critique des incertitudes
L'expression littérale du travail de la force motrice dans le modèle idéal est :
$$W(\alpha) = m \cdot g \cdot AB \cdot \sin(\alpha)$$

Pour évaluer l'impact d'une petite variation de l'angle $\Delta\alpha$ sur le travail, on utilise la dérivée par rapport à $\alpha$ (ou approximation par différentielle) :
$$\frac{dW}{d\alpha} = m \cdot g \cdot AB \cdot \cos(\alpha)$$

Ainsi, l'incertitude absolue sur le travail $\Delta W$ due à l'incertitude de l'angle $\Delta\alpha$ (en radians) s'estime par :
$$\Delta W \approx \left| \frac{dW}{d\alpha} \right| \cdot \Delta\alpha = (m \cdot g \cdot AB \cdot \cos(\alpha)) \cdot \Delta\alpha$$

A.N. avec $\Delta\alpha = 0,5^\circ = \frac{0,5 \times \pi}{180} \approx 0,00873\,\text{rad}$ :
$$\Delta W \approx (50 \times 9,81 \times 10 \times \cos(30^\circ)) \times 0,00873$$
$$\Delta W \approx (4905 \times 0,866) \times 0,00873 \approx 4247,7 \times 0,00873 \approx 37,08\,\text{J}$$

*Conclusion scientifique :* Une incertitude de seulement un demi-degré sur la mesure de la pente entraîne une incertitude de plus de $37\,\text{J}$ sur l'évaluation du travail. Cette démarche quantitative d'analyse des erreurs démontre aux élèves qu'un résultat mathématique théorique n'a de valeur scientifique qu'associé à l'étude rigoureuse de sa précision expérimentale.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
