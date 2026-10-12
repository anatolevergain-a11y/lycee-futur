---
title: "Exercice 1 : Norme d'un vecteur et résultante de forces"
description: "Application pratique du chapitre Calcul vectoriel avancé"
---

### 🌐 Contexte & Données scientifiques

En physique-chimie et en ingénierie, la modélisation vectorielle est un outil fondamental pour étudier l'équilibre des systèmes mécaniques. Toutefois, tout modèle mathématique repose sur des hypothèses simplificatrices qu'il convient d'analyser avec rigueur.

Considérons une passerelle piétonne suspendue, soumise à l'action de deux haubans principaux exerçant des forces de traction $\vec{F}_1$ et $\vec{F}_2$ sur un point d'attache central $O$. Dans un repère orthonormé direct $(O, \vec{i}, \vec{j})$, d'axes orientés respectivement vers l'est et vers le zénith, les forces sont exprimées en newtons ($\text{N}$).

Les mesures expérimentales, entachées d'incertitudes liées aux capteurs de tension, fournissent les coordonnées suivantes :
* $\vec{F}_1 = \begin{pmatrix} 3000 \\ 4000 \end{pmatrix} \text{ N}$
* $\vec{F}_2 = \begin{pmatrix} -1000 \\ 6000 \end{pmatrix} \text{ N}$

L'ingénieur cherche à déterminer la force totale (ou résultante) s'exerçant sur le point d'attache afin de dimensionner la résistance des matériaux. Néanmoins, ce modèle statique en deux dimensions néglige les efforts tridimensionnels (vents latéraux) et les variations thermiques, introduisant des limites inhérentes à la modélisation.

---

### ❓ Énoncé

1. **Calcul des normes individuelles :** Calculer la norme de chacun des vecteurs $\vec{F}_1$ et $\vec{F}_2$. Interpréter physiquement ces valeurs.
2. **Détermination de la résultante :** Exprimer le vecteur de la force résultante $\vec{R} = \vec{F}_1 + \vec{F}_2$ sous forme de coordonnées, puis calculer sa norme $\|\vec{R}\|$.
3. **Analyse critique des hypothèses :** Si la résistance maximale admissible du point d'attache $O$ est fixée par le fabricant à $9500 \text{ N}$ sous peine de déformation plastique, le système est-il considéré comme sûr selon ce modèle ? Discuter de la pertinence de se fier uniquement à une modélisation mathématique déterministe face aux incertitudes expérimentales.

---

### 💡 Indice de méthode

* Pour calculer la norme d'un vecteur $\vec{u} = \begin{pmatrix} x \\ y \end{pmatrix}$, on utilise la formule de la distance euclidienne issue du théorème de Pythagore : $\|\vec{u}\| = \sqrt{x^2 + y^2}$.
* L'addition vectorielle s'effectue composante par composante : si $\vec{u} = \begin{pmatrix} x_1 \\ y_1 \end{pmatrix}$ et $\vec{v} = \begin{pmatrix} x_2 \\ y_2 \end{pmatrix}$, alors $\vec{u} + \vec{v} = \begin{pmatrix} x_1 + x_2 \\ y_1 + y_2 \end{pmatrix}$.
* Pour l'esprit critique, pensez à comparer la valeur numérique obtenue au seuil critique en tenant compte du fait que toute mesure physique comporte une marge d'erreur.

---

### 📋 Correction détaillée pas à pas

**1. Calcul des normes des vecteurs $\vec{F}_1$ et $\vec{F}_2$**

La norme d'un vecteur représente ici l'intensité de la force exercée.
Pour $\vec{F}_1 = \begin{pmatrix} 3000 \\ 4000 \end{pmatrix} \text{ N}$ :
$$\|\vec{F}_1\| = \sqrt{3000^2 + 4000^2} = \sqrt{9\,000\,000 + 16\,000\,000} = \sqrt{25\,000\,000} = 5000 \text{ N}$$

Pour $\vec{F}_2 = \begin{pmatrix} -1000 \\ 6000 \end{pmatrix} \text{ N}$ :
$$\|\vec{F}_2\| = \sqrt{(-1000)^2 + 6000^2} = \sqrt{1\,000\,000 + 36\,000\,000} = \sqrt{37\,000\,000} \approx 6082,76 \text{ N}$$

*Interprétation physique :* Le premier hauban exerce une traction de $5000 \text{ N}$ et le second de $6082,76 \text{ N}$. Ces valeurs quantifient l'effort mécanique subi par la structure à l'endroit des ancrages.

**2. Détermination de la résultante $\vec{R}$ et de sa norme**

La force résultante $\vec{R}$ est la somme vectorielle des forces appliquées en $O$ :
$$\vec{R} = \vec{F}_1 + \vec{F}_2 = \begin{pmatrix} 3000 + (-1000) \\ 4000 + 6000 \end{pmatrix} = \begin{pmatrix} 2000 \\ 10000 \end{pmatrix} \text{ N}$$

Calculons à présent sa norme $\|\vec{R}\|$ :
$$\|\vec{R}\| = \sqrt{2000^2 + 10000^2} = \sqrt{4\,000\,000 + 100\,000\,000} = \sqrt{104\,000\,000} \approx 10198,04 \text{ N}$$

La résultante des forces appliquées au point d'attache a une intensité d'environ $10198 \text{ N}$.

**3. Analyse critique des résultats et des limites du modèle**

* Comparaison avec le seuil : La norme de la force résultante ($10198 \text{ N}$) est supérieure à la résistance maximale admissible par le fabricant ($9500 \text{ N}$). D'un point de vue purement déterministe, **le modèle indique que le système n'est pas sûr** et qu'un risque de rupture ou de déformation plastique existe.

* Limites et esprit critique : 
  1. *Incertitudes de mesure :* Les coordonnées de $\vec{F}_1$ et $\vec{F}_2$ proviennent de capteurs. Si ces mesures comportent une incertitude de $\pm 5\%$, la norme réelle pourrait être légèrement inférieure ou supérieure, modifiant la conclusion dans les cas limites.
  2. *Simplification du modèle :* Le calcul se place dans le plan ($2\text{D}$), alors qu'une structure réelle subit des forces tridimensionnelles ($\text{3D}$) ainsi que des contraintes dynamiques (vents, passage de piétons induisant des vibrations) et non pas seulement statiques. 
  3. *Compromis technico-économique :* En ingénierie, les coefficients de sécurité ne reposent pas uniquement sur un calcul brut, mais intègrent des marges pour parer aux aléas. Ce résultat suggère la nécessité de renforcer les haubans ou de modifier l'angle d'attache pour réduire l'intensité de la résultante.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
