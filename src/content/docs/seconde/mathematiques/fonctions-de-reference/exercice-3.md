---
title: "Exercice 3 : Analyse de fonctions d'offre et de demande"
description: "Application pratique du chapitre Fonctions de référence"
---

### 🌐 Contexte & Données scientifiques

En science économique et en modélisation mathématique des marchés, la régulation des prix repose souvent sur l'analyse des comportements des consommateurs (demande) et des producteurs (offre). 

Considérons un marché concurrentiel fictif mais réaliste d'un produit technologique standardisé (composants électroniques de base). Des études économétriques menées sur ce secteur permettent de modéliser la fonction de demande $d$ et la fonction d'offre $o$ en fonction du prix unitaire $x$ (exprimé en dizaines d'euros) pour un volume de production annuel.

Les fonctions sont définies sur l'intervalle $[0 ; 10]$ par :
*   La fonction de demande $d(x) = \frac{40}{x + 1}$
*   La fonction d'offre $o(x) = 2x^2 + 2$

Toutefois, tout modèle mathématique repose sur des hypothèses simplificatrices (citerne étanche, information parfaite, absence d'externalités). L'analyse critique de ces fonctions montre que pour des prix extrêmes ($x \to 0$ ou $x > 8$), les comportements réels s'écartent significativement de la théorie en raison de la saturation du marché ou de ruptures d'approvisionnement en matières premières.

---

### ❓ Énoncé

1. **Étude des variations et représentation :**
   Identifier les fonctions de référence utilisées pour construire $d$ et $o$. En déduire, en justifiant rigoureusement à l'aide des propriétés de ces fonctions de référence, le sens de variation de $d$ et de $o$ sur l'intervalle $[0 ; 10]$.

2. **Recherche de l'équilibre du marché :**
   Déterminer graphiquement et algébriquement le prix d'équilibre $x_0$ pour lequel l'offre est égale à la demande ($d(x_0) = o(x_0)$). On arrondira le résultat au centime près si nécessaire.

3. **Analyse d'une politique publique de régulation :**
   Le gouvernement envisage d'instaurer une taxe forfaitaire conduisant à fixer un prix plancher de $x_1 = 3$ (soit $30$ €). 
   Calculer le volume de la demande $d(3)$ et celui de l'offre $o(3)$. En déduire l'excédent ou la pénurie générée sur le marché.

4. **Esprit critique et limites du modèle :**
   Expliquer pourquoi un modèle mathématique déterministe ne peut prédire avec certitude le comportement d'un marché à long terme, notamment en citant deux limites économiques ou techniques inhérentes à ce type de modélisation.

---

### 💡 Indice de méthode

*   **Pour la question 1 :** Pensez à décomposer $d(x)$ à l'aide de la fonction inverse $x \mapsto \frac{1}{x}$ et de fonctions affines, et $o(x)$ à l'aide de la fonction carrée $x \mapsto x^2$. Utilisez les théorèmes de composition ou de variation des fonctions de référence.
*   **Pour la question 2 :** Résoudre l'équation $d(x) = o(x)$ revient à chercher une intersection. Mettez l'équation sous la forme d'un polynôme de degré 3 en remarquant une racine évidente ou par factorisation.
*   **Pour la question 3 :** Il s'agit simplement d'évaluer les deux fonctions pour la valeur $x = 3$ et d'analyser la différence algébrique $o(3) - d(3)$.

---

### 📋 Correction détaillée pas à pas

#### 1. Étude des variations
*   **Pour la fonction de demande $d(x) = \frac{40}{x + 1}$ :**
    Cette fonction est de la forme $\frac{k}{u(x)}$ avec $k = 40 > 0$ et $u(x) = x + 1$. 
    La fonction affine $u : x \mapsto x+1$ est strictement croissante sur $[0 ; 10]$ et prend des valeurs strictement positives. 
    La fonction inverse $X \mapsto \frac{1}{X}$ est strictement décroissante sur $]0 ; +\infty[$.
    Par composition, le produit d'une constante positive par une fonction décroissante est une fonction **strictement décroissante**. Ainsi, $d$ est strictement décroissante sur $[0 ; 10]$, ce qui est cohérent en économie : plus le prix augmente, moins la demande est forte.

*   **Pour la fonction d'offre $o(x) = 2x^2 + 2$ :**
    Cette fonction s'appuie sur la fonction carrée $x \mapsto x^2$, qui est strictement croissante sur $[0 ; +\infty[$. 
    En multipliant par $2$ (coefficient positif) puis en ajoutant $2$ (translation verticale), les variations ne sont pas modifiées. Par conséquent, $o$ est **strictement croissante** sur $[0 ; 10]$, traduisant le fait qu'une hausse du prix incite les producteurs à accroître leur production.

#### 2. Recherche de l'équilibre du marché
À l'équilibre, l'offre égale la demande, soit :
$$\frac{40}{x + 1} = 2x^2 + 2$$
En supposant $x \in [0 ; 10]$ (donc $x + 1 \neq 0$), on multiplie par $(x + 1)$ :
$$40 = (2x^2 + 2)(x + 1)$$
$$40 = 2x^3 + 2x^2 + 2x + 2$$
$$2x^3 + 2x^2 + 2x - 38 = 0$$
En simplifiant par $2$ :
$$x^3 + x^2 + x - 19 = 0$$

Par observation ou tâtonnement méthodique (valeurs entières sur $[0 ; 10]$) :
*   Si $x = 2$ : $2^3 + 2^2 + 2 - 19 = 8 + 4 + 2 - 19 = -5 \neq 0$
*   Si $x = 3$ : $3^3 + 3^2 + 3 - 19 = 27 + 9 + 3 - 19 = 20 \neq 0$
*(Note pédagogique : en classe de Seconde, la résolution exacte d'une équation de degré 3 n'est pas exigible ; une résolution graphique ou par balayage à la calculatrice est attendue).*
Graphiquement ou par approximation numérique, la solution unique sur $[0 ; 10]$ est :
$$x_0 \approx 2,21$$
Le prix d'équilibre est donc d'environ $22,10$ €.

#### 3. Analyse de la politique publique (prix plancher $x_1 = 3$)
Evaluons la demande et l'offre pour un prix de $30$ € ($x = 3$) :
*   **Demande :** $d(3) = \frac{40}{3 + 1} = \frac{40}{4} = 10$ (unités)
*   **Offre :** $o(3) = 2(3)^2 + 2 = 2(9) + 2 = 20$ (unités)

**Calcul de l'écart :** 
$o(3) - d(3) = 20 - 10 = +10$.
L'offre étant supérieure à la demande, cette politique de prix plancher génère un **excédent (ou surproduction)** de $10$ unités sur le marché.

#### 4. Esprit critique et limites du modèle
Un modèle mathématique comme celui-ci comporte des limites épistémologiques et pratiques qu'il convient de nuancer :
1.  **L'hypothèse de cétéris paribus (toutes choses égales par ailleurs) :** Le modèle suppose que seuls les prix influencent l'offre et la demande. Or, des facteurs externes (inflation, apparition de produits substituts, pouvoir d'achat, coûts énergétiques des producteurs) modifient continuellement ces fonctions.
2.  **L'inertie temporelle et l'incertitude des mesures :** Les fonctions $d$ et $o$ sont des estimations statistiques basées sur le passé. Les producteurs ne peuvent pas ajuster instantanément leur production (coûts d'ajustement, stocks), ce qui crée des décalages temporels entre la théorie mathématique et la réalité empirique du marché.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
