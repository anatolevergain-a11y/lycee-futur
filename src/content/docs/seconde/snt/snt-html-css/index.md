---
title: "Cours : Langages du Web (HTML & CSS)"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Le Web repose sur un ensemble de technologies normalisées par le W3C (World Wide Web Consortium). Parmi elles, deux langages fondamentaux permettent de structurer et de mettre en forme les pages web affichées par les navigateurs :

*   **HTML (HyperText Markup Language) :** Langage de balisage conçu pour représenter les pages web. Il définit la **structure** et le **contenu** sémantique d'une page (textes, images, liens, formulaires).
*   **Balise (ou *Tag*) :** Élément du code HTML entouré de chevrons (par exemple, `<p>` et `</p>`). La plupart des balises fonctionnent par pair (une balise ouvrante et une balise fermante).
*   **CSS (Cascading Style Sheets - Feuilles de style en cascade) :** Langage informatique qui décrit la **présentation** des documents HTML (couleurs, polices, mise en page, disposition).
*   **Sélecteur CSS :** Motif permettant de cibler un ou plusieurs éléments HTML dans une page afin de leur appliquer des règles de style.
*   **Séparation du fond et de la forme :** Principe fondamental du développement web moderne consistant à isoler le contenu (HTML) de sa mise en style (CSS).

---

## 📐 2. Formules et Propriétés fondamentales

Bien que les langages du web relèvent de l'informatique textuelle et non des mathématiques pures, leur syntaxe et leur logique obéissent à des règles formelles strictes que l'on peut formaliser.

Soit un document HTML modélisé par un ensemble hiérarchique d'éléments $E = \{e_1, e_2, \dots, e_n\}$. 

Une balise HTML générale s'écrit sous la forme structurelle suivante :
$$\text{<balise attribute="\text{valeur}">} \text{ Contenu } \text{</balise>}$$

Une règle de style CSS s'applique selon le formalisme logique suivant :
$$\text{sélecteur } \{ \text{ propriété} : \text{valeur} ; \}$$

Les propriétés géométriques et visuelles fondamentales en CSS incluent :
*   `color` : Définit la couleur du texte.
*   `background-color` : Définit la couleur d'arriere-plan d'un élément.
*   `font-size` : Définit la taille de la police, souvent exprimee en pixels ($\text{px}$) ou en pourcentage ($\text{\%}$).
*   `margin` : Gere l'espace exterieur autour d'un element.
*   `padding` : Gere l'espace interieur entre le contenu et la bordure d'un element.

---

## 💡 3. Exemple d'application résolu

**Problématique :** Écrire un fichier HTML minimaliste contenant un titre principal et un paragraphe, associés à une feuille de style CSS externe qui modifie la couleur de fond de la page en gris clair, centre le titre et l'affiche en bleu.

### 1. Le code HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ma page web</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Bienvenue sur mon site</h1>
    <p>Ceci est un paragraphe redige en langage HTML.</p>
</body>
</html>
```

### 2. Le code CSS (`style.css`)

```css
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

h1 {
    color: #0056b3;
    text-align: center;
}

p {
    font-size: 16px;
    color: #333333;
}
```

**Analyse de la résolution :**
1. Le fichier HTML structure le document en balises sémantiques (`<h1>` pour le titre, `<p>` pour le paragraphe).
2. La ligne `<link rel="stylesheet" href="style.css">` dans l'en-tête (`<head>`) permet d'importer le fichier de style externe.
3. Dans le fichier CSS, le sélecteur `body` cible l'ensemble de la page pour modifier sa couleur de fond (`background-color`).
4. Le sélecteur `h1` cible spécifiquement le titre pour lui attribuer une couleur bleue et un centrage horizontal.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Oubli de fermeture des balises :** C'est l'erreur la plus courante en HTML. Chaque balise ouverte (ex: `<p>`) doit impérativement être fermée (ex: `</p>`), à l'exception des balises dites "orphelines" ou "auto-fermantes" (comme `<br>` ou `<img>`).
*   **Confusion entre HTML et CSS :** Ne placez jamais de balises de mise en forme visuelle (comme `<font>` ou des attributs de couleur obsolètes) directement dans le HTML. Utilisez exclusivement le CSS pour le design.
*   **Syntaxe CSS incorrecte :** N'oubliez pas les deux-points `:` entre la propriété et la valeur, ni le point-virgule `;` à la fin de chaque déclaration de style.
*   **Chemin d'accès aux fichiers :** Lors de l'association du CSS au HTML via la balise `<link>`, vérifiez scrupuleusement le nom du fichier dans l'attribut `href="..."`. Une simple erreur de casse (majuscule/minuscule) empêchera le style de s'appliquer.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
