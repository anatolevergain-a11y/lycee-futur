---
title: "Exercice 2 : Accessibilité et principes du design responsive"
description: "Application pratique du chapitre Langages du Web (HTML & CSS)"
---

### 🌐 Contexte & Données scientifiques

L'accès universel au Web constitue l'un des fondements du projet d'Internet. Toutefois, l'hétérogénéité des équipements (smartphones, tablettes, ordinateurs de bureau, lecteurs d'écran pour malvoyants) impose aux concepteurs de respecter des normes strictes de conception.

Selon l'Organisation Mondiale de la Santé (OMS), plus de $1 \text{ milliard}$ de personnes vivent avec une forme de handicap, dont environ $217 \text{ millions}$ souffrent d'une déficience visuelle modérée à sévère. Sur le plan technique, l'accessibilité numérique (souvent abrégée en *a11y*) repose sur la sémantique du code HTML et la structuration des styles CSS.

Par ailleurs, l'analyse du trafic web mondial montre une domination des supports mobiles. La distribution des largeurs d'écran des utilisateurs se répartit selon le modèle statistique simplifié suivant :
- Écrans mobiles : $W_{\text{mobile}} \le 480 \text{ px}$ (représentant environ $58 \, \%$ du trafic).
- Écrans tablettes : $480 \text{ px} < W_{\text{tablette}} \le 1024 \text{ px}$ (environ $12 \, \%$ du trafic).
- Écrans de bureau : $W_{\text{bureau}} > 1024 \text{ px}$ (environ $30 \, \%$ du trafic).

Pour adapter une page web à cette diversité, le développeur utilise des **media queries** en CSS, qui conditionnent l'application de règles de style à des paramètres matériels :

```css
/* Exemple de règle pour les écrans étroits */
@media screen and (max-width: 480 px) {
    body {
        font-size: 16 px;
    }
}
```

Néanmoins, la mise en place d'un design responsive et accessible génère des arbitrages complexes (compromis entre le temps de chargement des ressources graphiques, la complexité du code et l'exhaustivité de la compatibilité avec les technologies d'assistance).

---

### ❓ Énoncé

1. **Analyse sémantique et accessibilité :** 
   Soit un extrait de code HTML destiné à présenter un graphique statistique sur le site d'un service public :
   ```html
   <div class="image-container">
       <img src="statistiques_ventes.png" width="800">
   </div>
   ```
   En l'état, ce code présente une lacune majeure au regard des critères d'accessibilité (WCAG). Identifiez cette lacune et proposez une correction rigoureuse en justifiant son utilité pour les utilisateurs aveugles ou malvoyants.

2. **Logique des unités relatives en CSS :**
   Un élève souhaite définir la taille de police d'un paragraphe. Il hésite entre une unité absolue ($\text{px}$) et une unité relative ($\text{rem}$ ou $\%$) pour garantir la lisibilité sur différents types d'écrans. 
   Sachant qu'un navigateur initialise généralement sa taille de police de base à $16 \text{ px}$ ($1\text{ rem} = 16 \text{ px}$), calculez la taille réelle affichée si l'on applique la règle CSS :
   $$T_{\text{finale}} = 1.25 \times 16 \text{ px}$$
   Expliquez pourquoi l'utilisation d'unités relatives favorise l'accessibilité visuelle par rapport aux pixels fixes.

3. **Modélisation d'une Media Query :**
   À partir des données de répartition du trafic, un webmestre souhaite appliquer une mise en page en colonne unique (pour les petits écrans) dès lors que la largeur disponible est inférieure ou égale à la médiane de la plage mobile-tablette, définie mathématiquement par :
   $$W_{\text{seuil}} = \frac{480 + 1024}{2} \text{ px}$$
   Calculez cette valeur $W_{\text{seuil}}$ et rédigez la règle CSS `@media` correspondante.

4. **Esprit critique et limites du modèle :**
   Le design responsive cherche à s'adapter à toutes les résolutions. Toutefois, un site web entièrement responsive peut parfois imposer un temps de calcul (rendu par le navigateur) ou un volume de données supérieur lors du chargement initial. 
   Discutez brièvement du compromis technologique entre la *flexibilité d'affichage* (confort utilisateur) et la *performance technique* (notamment dans les zones à faible débit internet, souvent appelées "zones blanches").

---

### 💡 Indice de méthode

- **Question 1 :** Pensez à l'attribut HTML qui permet de fournir une alternative textuelle aux éléments visuels non textuels.
- **Question 2 :** Effectuez le produit mathématique simple demandé et reliez la notion d'élasticité de l'affichage aux préférences système de l'utilisateur (zoom navigateur).
- **Question 3 :** Calculez la moyenne arithmétique demandée en respectant les unités (`px`), puis transposez le résultat dans la syntaxe d'une *media query* CSS (`max-width`).
- **Question 4 :** Pour votre argumentation, mobilisez la notion de coût environnemental et de contrainte matérielle (bande passante, puissance processeur des smartphones bas de gamme).

---

### 📋 Correction détaillée pas à pas

1. **Correction de la lacune sémantique :**
   * *Lacune identifiée :* La balise `<img>` est dépourvue de l'attribut `alt` (alternative textuelle). De plus, l'utilisation d'un contrainte `<div>` générique n'apporte aucune sémantique structurelle.
   * *Proposition de correction :*
     ```html
     <figure>
         <img src="statistiques_ventes.png" alt="Graphique en barres représentant l'augmentation de 15 % des ventes en ligne entre 2022 et 2023." width="800">
         <figcaption>Évolution annuelle des ventes</figcaption>
     </figure>
     ```
   * *Justification :* Les lecteurs d'écran utilisés par les personnes malvoyantes ne peuvent interpréter une image raster. L'attribut `alt` permet de restituer vocalement ou en braille la description textuelle du contenu informationnel de l'image.

2. **Calcul de la taille de police et unités relatives :**
   * *Application numérique :* 
     $$T_{\text{finale}} = 1.25 \times 16 \text{ px} = 20 \text{ px}$$
   * *Analyse critique :* Si l'utilisateur modifie la taille de référence de son navigateur (par exemple pour l'établir à $20 \text{ px}$ pour des raisons de confort visuel), un élément défini en $1.25 \text{ rem}$ s'adaptera automatiquement ($1.25 \times 20 \text{ px} = 25 \text{ px}$). À l'inverse, une valeur fixe en pixels (ex: $20 \text{ px}$ stricts) ignorerait ce réglage d'accessibilité, nuisant à l'ergonomie.

3. **Calcul du seuil et rédaction de la Media Query :**
   * *Calcul mathématique :*
     $$W_{\text{seuil}} = \frac{480 + 1024}{2} = \frac{1504}{2} = 752 \text{ px}$$
   * *Traduction en code CSS :*
     ```css
     @media screen and (max-width: 752 px) {
         .conteneur-principal {
             display: flex;
             flex-direction: column;
         }
     }
     ```

4. **Discussion critique (compromis performance / accessibilité) :**
   * *Analyse :* Le design responsive implique souvent le téléchargement d'éléments lourds (comme des images haute résolution) qui sont ensuite masqués ou redimensionnés par CSS via la propriété `display: none` ou `srcset`. 
   * *Limites :* Pour un utilisateur se connectant via un réseau mobile à faible débit (réseau 3G ou zone rurale isolée), charger des données superflues pénalise l'accès au service. Le compromis scientifique et technique consiste donc à coupler le design responsive (CSS) avec une stratégie d'optimisation des flux (redimensionnement côté serveur, formats d'image modernes comme le WebP, et chargement conditionnel via l'attribut `loading="lazy"`). L'accessibilité ne se limite pas au handicap visuel, elle intègre aussi la fracture numérique matérielle et géographique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
