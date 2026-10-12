---
title: "Exercice 2 : Résolution d'équations quadratiques dans le bâtiment"
description: "Application pratique du chapitre Fonctions polynômes du second degré"
---

### 🌐 Contexte & Données scientifiques

Dans le secteur du bâtiment et des travaux publics (BTP), l'optimisation des matériaux et la maîtrise de la résistance des structures font appel à la modélisation mathématique. Considérons la phase de conception d'une poutre en béton armé ou le profil d'une tranchée d'assainissement. 

Pour des raisons d'écoulement des fluides et de répartition des charges, le profil transversal d'une cunette (fossé maçonné) d'évacuation des eaux pluviales est modélisé par une parabole. Dans un repère orthonormé $(O; \vec{i}, \vec{j})$, la forme intérieure de ce canal est donnée par la fonction $f$ définie sur l'intervalle $[-1,5 ; 1,5]$ par :

$$f(x) = a x^2 + c$$

où $x$ représente la largeur par rapport à l'axe de symétrie et $f(x)$ la profondeur, toutes deux exprimées en mètres ($m$). 

Des relevés topographiques et des contraintes normatives (norme NF P 98-335) imposent les paramètres suivants :
* La profondeur maximale au centre ($x = 0$) est de $0,80 \text{ m}$, ce qui fixe $c = -0,80$.
* La largeur totale au niveau du sol de référence ($f(x) = 0$) est exigée à $2,00 \text{ m}$ (soit des points de débouché situés à $x = -1,00 \text{ m}$ et $x = 1,00 \text{ m}$).

Cependant, sur un chantier réel, les tolérances de terrassement admettent une incertitude de mesure de $\pm 5 \text{ cm}$. Par ailleurs, les ingénieurs doivent déterminer précisément à quelles distances du centre la profondeur de la cunette atteint exactement $0,50 \text{ m}$ pour y ancrer des profilés métalliques de renforcement.

---

### ❓ Énoncé

1. En utilisant les données topographiques nominales ($f(1) = 0$ et $f(0) = -0,80$), déterminer la valeur exacte du coefficient $a$ de la fonction polynôme $f$. Vérifier la cohérence physique du signe de $a$ obtenu par rapport à la concavité de la parabole observée sur le terrain.

2. Écrire l'équation modélisant la recherche des abscisses $x$ pour lesquelles la profondeur de la cunette est de $0,50 \text{ m}$ (sous la surface de référence $f(x) = 0$). Résoudre cette équation algébriquement dans $\mathbb{R}$ et donner les solutions arrondies au centimètre près.

3. En raison des aléas de chantier, le coefficient réel $a$ mesuré après le passage de l'engin de terrassement s'avère être légèrement différent de la valeur théorique, estimé à $a_{\text{mesuré}} = 0,75 \text{ m}^{-1}$. 
   Calculer l'impact de cette variation sur la largeur réelle de la cunette au niveau du sol ($f(x) = 0$). Discuter, d'un point de vue critique, si cette Écart est acceptable au regard des tolérances normatives du BTP fixées à $\pm 5 \text{ cm}$.

4. Proposer une analyse critique du modèle mathématique $f(x) = ax^2 + c$ : sachant qu'un matériau réel possède une épaisseur et que les parois ne sont pas de simples courbes mathématiques sans dimension, identifiez une limite majeure de cette modélisation pour un conducteur de travaux.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez les conditions aux limites fournies dans l'énoncé. Évaluez $f(1)$ en remplaçant $x$ par $1$ dans l'expression générale pour isoler $a$.
* **Question 2 :** Posez l'équation $f(x) = -0,50$ (attention au sens de la hauteur dans le repère choisi) ou formulez l'équation équivalente en ramenant le polynôme sous la forme $ax^2 + bx + c = 0$. Le calcul du discriminant $\Delta = b^2 - 4ac$ vous permettra de conclure.
* **Question 3 :** Modifiez la valeur de $a$ dans l'équation initiale $f(x) = 0$ et résolvez la nouvelle équation pour trouver les nouvelles bornes de largeur. Comparez la différence obtenue avec le seuil de tolérance de $0,05 \text{ m}$.
* **Question 4 :** Interrogez-vous sur la transition entre un modèle idéal continu (mathématique) et la matière discrète ou manufacturée (béton, armatures en acier, tassement du sol).

---

### 📋 Correction détaillée pas à pas

1. **Détermination du coefficient $a$ :**
   La fonction est de la forme $f(x) = a x^2 - 0,80$.
   L'énoncé indique que pour une largeur de $1,00 \text{ m}$, la profondeur atteint le niveau de référence, soit $f(1) = 0$.
   Substituons $x = 1$ :
   $$a(1)^2 - 0,80 = 0$$
   $$a - 0,80 = 0 \implies a = 0,80 \text{ m}^{-1}$$
   *Analyse critique :* Le coefficient $a$ est strictement positif ($a > 0$), ce qui correspond à une parabole tournée vers le haut ($\cup$). Cela est cohérent avec la géométrie d'une cunette devant recueillir l'eau en son point le plus bas ($x = 0$).

2. **Résolution pour une profondeur de $0,50 \text{ m}$ :**
   La surface de référence étant à $0$, une profondeur de $0,50 \text{ m}$ sous cette référence correspond à une ordonnée $f(x) = -0,50 \text{ m}$.
   L'équation à résoudre est donc :
   $$0,80 x^2 - 0,80 = -0,50$$
   En regroupant tous les termes du même côté pour se ramener à une équation du second degré standard :
   $$0,80 x^2 - 0,80 + 0,50 = 0$$
   $$0,80 x^2 - 0,30 = 0$$
   Il s'agit d'une équation incomplète où $b = 0$. On peut l'isoler directement :
   $$0,80 x^2 = 0,30$$
   $$x^2 = \frac{0,30}{0,80} = \frac{3}{8} = 0,375$$
   Les solutions sont :
   $$x_1 = -\sqrt{0,375} \approx -0,6123 \text{ m} \quad \text{et} \quad x_2 = \sqrt{0,375} \approx 0,6123 \text{ m}$$
   Arrondies au centimètre près, les positions pour ancrer les profilés métalliques sont situées à $\pm 0,61 \text{ m}$ du centre de la cunette.

3. **Impact de la variation de $a$ et analyse de tolérance :**
   Avec le paramètre mesuré $a_{\text{mesuré}} = 0,75 \text{ m}^{-1}$, la fonction devient $f_{\text{mesurée}}(x) = 0,75 x^2 - 0,80$.
   Recherchons la nouvelle largeur au niveau du sol, c'est-à-dire les racines de $f_{\text{mesurée}}(x) = 0$ :
   $$0,75 x^2 - 0,80 = 0 \implies x^2 = \frac{0,80}{0,75} = \frac{8}{15} \approx 1,3333$$
   $$x = \pm \sqrt{\frac{8}{15}} \approx \pm 1,1547 \text{ m}$$
   La demi-largeur théorique était de $1,00 \text{ m}$, elle est ici de $1,15 \text{ m}$ (la largeur totale passe de $2,00 \text{ m}$ à environ $2,31 \text{ m}$). 
   *Évaluation critique :* L'écart sur la demi-largeur est de $|1,1547 - 1,00| \approx 0,1547 \text{ m}$, soit environ $15,5 \text{ cm}$. Cette valeur dépasse largement la tolérance normative autorisée de $\pm 5 \text{ cm}$ ($\pm 0,05 \text{ m}$). Le modèle met en évidence un défaut de terrassement inacceptable : le lot de travaux doit être rejeté ou corrigé avant coulage du béton, car cela impacterait l'emprise foncière et le coffrage ultérieur.

4. **Limites du modèle mathématique :**
   Le modèle polynomial néglige plusieurs réalités physiques du BTP :
   * **L'épaisseur des parois :** La fonction $f$ ne modélise que la ligne neutre ou la surface intérieure. Or, le béton possède une épaisseur constante (par exemple $15 \text{ cm}$), ce requiert de calculer une seconde courbe parallèle, ce qui complexifie l'équation (décalage de normale à la courbe).
   * **Les irrégularités du matériau :** Le sol meuble sur lequel repose la structure subit des tassements différentiels non modélisés par une parabole idéale. 
   * **Conclusion scientifique :** Le modèle mathématique est un outil d'aide à la conception et au dimensionnement global, mais il doit impérativement être complété par des coefficients de sécurité et des contrôles topographiques in situ pour valider la conformité réglementaire.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
