---
title: "Exercice 1 : Structure sémantique des pages web"
description: "Application pratique du chapitre Langages du Web (HTML & CSS)"
---

### 🌐 Contexte & Données scientifiques

L'accès universel au Web et l'augmentation constante du volume de données imposent une rigueur accrue dans la conception des pages. Selon les recommandations du W3C (*World Wide Web Consortium*) et les critères d'accessibilité (RGAA en France), l'utilisation d'un balisage sémantique en HTML5 (balises `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) ne relève pas d'un simple choix esthétique, mais d'une nécessité technique et ergonomique.

D'après une étude empirique menée sur un échantillon représentatif de $N = 10\,000$ sites web institutionnels :
- Le temps moyen de chargement d'une page structurée de manière sémantique est de $\bar{t}_1 = 1{,}2 \text{ s}$, avec une consommation moyenne de données de $D_1 = 800 \text{ kio}$.
- Les pages utilisant massivement des conteneurs génériques (type `<div>` et `<span>`) sans sémantique affichent un taux d'erreur de lecture par les technologies d'assistance (lecteurs d'écran pour malvoyants) de $E_1 = 34\,\%$, contre seulement $E_2 = 4\,\%$ pour les pages sémantiques.

Soit $C$ le coût cognitif et énergétique de traitement d'une requête web, modélisé par la relation :
$$C = \alpha \cdot D + \beta \cdot E$$
où $D$ représente le volume de données en kilo-octets ($\text{kio}$), $E$ le taux d'erreur d'accessibilité (en pourcentage), et $\alpha, \beta$ des coefficients de pondération strictement positifs.

### ❓ Énoncé

1. **Analyse critique des modèles :** Expliquer en quoi l'utilisation de balises sémantiques plutôt que de simples balises génériques (`<div>`) modifie la variable $E$ dans le modèle de coût $C$. Quelles sont les limites inhérentes à une modélisation mathématique de l'accessibilité web ?
2. **Écriture de code et structure :** Rédiger le squelette d'un document HTML5 valide représentant un article de blog scientifique. Ce document devra obligatoirement intégrer les balises sémantiques suivantes : un en-tête de page, une barre de navigation, un contenu principal, un article comprenant lui-même une section, et un pied de page.
3. **Application numérique :** On pose $\alpha = 0{,}05 \text{ points}\cdot\text{kio}^{-1}$ et $\beta = 1{,}5 \text{ points}\cdot\text{pourcentage}^{-1}$. Calculer le coût $C_1$ d'une page non sémantique ($D_1 = 950 \text{ kio}$, $E_1 = 35\,\%$) et le coût $C_2$ d'une page sémantique optimisée ($D_2 = 800 \text{ kio}$, $E_2 = 4\,\%$). Conclure sur le compromis technologique observé.
4. **Prospective et nuance :** Discuter du compromis entre la rigueur du balisage sémantique (qui demande un temps de conception humain accru) et l'automatisation par des outils de génération de code. 

### 💡 Indice de méthode

- *Pour la question 1 :* Pensez à la distinction entre la structure compréhensible par une machine (ou un algorithme de référencement) et la simple mise en forme visuelle.
- *Pour la question 2 :* Respectez scrupuleusement l'imbrication logique : `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`. N'oubliez pas la structure de base (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
- *Pour la question 3 :* Appliquez directement la formule littérale en substituant les valeurs numériques fournies, sans oublier de mentionner l'homogénéité des unités.

### 📋 Correction détaillée pas à pas

1. **Analyse critique des modèles :**
   Les balises sémantiques (`<nav>`, `<article>`, etc.) confèrent un sens explicite au contenu, ce qui permet aux moteurs de indexation et aux technologies d'assistance de cibler immédiatement l'information pertinente. Cela réduit drastiquement le taux d'erreur $E$. 
   *Limites du modèle :* Quantifier l'accessibilité par un pourcentage $E$ est une réduction mathématique complexe. L'expérience utilisateur est qualitative et dépend de multiples facteurs subjectifs (matériel de l'utilisateur, handicap spécifique, contexte de navigation) qu'une équation linéaire ne peut totalement capturer.

2. **Écriture de code et structure :**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>La sémantique Web</title>
</head>
<body>
    <header>
        <h1>Portail Scientifique</h1>
        <nav>
            <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#articles">Articles</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>L'importance du HTML5</h2>
            <section>
                <p>Le contenu de la section scientifique...</p>
            </section>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2023 - Éducation Nationale</p>
    </footer>
</body>
</html>
```

3. **Application numérique :**
   - Calcul pour la page non sémantique ($C_1$) :
     $$C_1 = \alpha \cdot D_1 + \beta \cdot E_1$$
     $$C_1 = (0{,}05 \times 950) + (1{,}5 \times 35)$$
     $$C_1 = 47{,}5 + 52{,}5 = 100 \text{ points}$$

   - Calcul pour la page sémantique ($C_2$) :
     $$C_2 = \alpha \cdot D_2 + \beta \cdot E_2$$
     $$C_2 = (0{,}05 \times 800) + (1{,}5 \times 4)$$
     $$C_2 = 40 + 6 = 46 \text{ points}$$

   *Conclusion :* Le coût global $C$ est nettement inférieur pour la page sémantique ($46 < 100$). Cela démontre scientifiquement que la rigueur structurelle améliore l'efficacité globale (moindre coût combiné des données et des erreurs d'accessibilité).

4. **Prospective et nuance :**
   Si la rigueur sémantique présente un net avantage pour l'accessibilité et la performance à long terme, elle engendre un coût de développement initial (formation des équipes, temps de rédaction). À l'inverse, l'utilisation d'outils automatisés ou de frameworks générant du code non sémantique accélère la production initiale mais génère une dette technique et environnementale. Le choix d'architecture web repose donc toujours sur un compromis technico-économique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
