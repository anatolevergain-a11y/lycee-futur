---
title: "Cours : Fonctions de référence"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Une **fonction de référence** est une fonction usuelle, simple et omniprésente en mathématiques, dont les propriétés (ensemble de définition, variations, représentation graphique) sont connues et démontrées une fois pour toutes. Elles servent de briques élémentaires pour étudier des fonctions plus complexes par des opérations algébriques ou des compositions.

Pour le programme de mathématiques de la classe de Seconde, on étudie principalement cinq fonctions de référence :

1. **La fonction linéaire** : $f(x) = mx$ (où $m$ est un réel donné).
2. **La fonction affine** : $f(x) = mx + p$ (où $m$ et $p$ sont des réels).
3. **La fonction carré** : $f(x) = x^2$.
4. **La fonction inverse** : $f(x) = \frac{1}{x}$.
5. **La fonction racine carrée** : $f(x) = \sqrt{x}$.

---

## 📐 2. Formules et Propriétés fondamentales

Voici un récapitulatif rigoureux des caractéristiques de chaque fonction de référence.

### A. La fonction carré
* **Ensemble de définition** : $\mathbb{D} = \mathbb{R}$ (ou $]-\infty ; +\infty[$).
* **Définition** : À tout nombre réel $x$, elle associe son carré $x^2$.
* **Variations** :
  * Strictement décroissante sur l'intervalle $]-\infty ; 0]$.
  * Strictement croissante sur l'intervalle $[0 ; +\infty[$.
* **Représentation graphique** : Une **parabole** symétrique par rapport à l'axe des ordonnées.
* **Tableau de variations** :
  $$\begin{array}{|c|-\infty0+\infty} \hline
  x & -\infty & & 0 & & +\infty \\ \hline
  & +\infty & & & & +\infty \\
  f(x) & & \searrow & & \swarrow & \\
  & & & 0 & & \\ \hline
  \end{array}$$

### B. La fonction inverse
* **Ensemble de définition** : $\mathbb{D} = \mathbb{R}^* = ]-\infty ; 0[ \cup ]0 ; +\infty[$ (la division par $0$ est interdite).
* **Définition** : À tout nombre réel $x$ non nul, elle associe son inverse $\frac{1}{x}$.
* **Variations** :
  * Strictement décroissante sur $]-\infty ; 0[$.
  * Strictement décroissante sur $]0 ; +\infty[$. *(Attention : elle n'est pas décroissante sur $\mathbb{R}^*$ tout entier, car $-1 < 1$ mais $\frac{1}{-1} = -1$ et $\frac{1}{1} = 1$, donc $-1 < 1$).*
* **Représentation graphique** : Une **hyperbole** symétrique par rapport à l'origine du repère $(0;0)$.

### C. La fonction racine carrée
* **Ensemble de définition** : $\mathbb{D} = [0 ; +\infty[$ (la racine carrée d'un nombre négatif n'est pas définie dans $\mathbb{R}$).
* **Définition** : À tout nombre réel positif $x$, elle associe sa racine carrée $\sqrt{x}$.
* **Variations** :
  * Strictement croissante sur $[0 ; +\infty[$.
* **Représentation graphique** : Une courbe qui part de l'origine $(0;0)$ et croît vers les $y$ positifs.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = x^2$. 
Comparer $f(-3)$ et $f(-2)$ en justifiant rigoureusement à l'aide des propriétés du cours.

**Résolution :**
1. **Identifier la fonction et son intervalle d'étude :**
   La fonction $f$ est la fonction carré. Nous souhaitons comparer les images de $x_1 = -3$ et $x_2 = -2$.
   Ces deux nombres appartiennent tous les deux à l'intervalle $]-\infty ; 0]$.
2. **Appliquer le théorème de variation :**
   D'après le cours, la fonction carré est *strictement décroissante* sur l'intervalle $]-\infty ; 0]$.
3. **Conclure sur l'ordre des images :**
   La fonction décroissante inverse l'ordre des inégalités. 
   On sait que :
   $$-3 < -2$$
   Puisque la fonction est strictement décroissante sur cet intervalle, on en déduit que :
   $$f(-3) > f(-2)$$
   *Vérification par le calcul :* $f(-3) = (-3)^2 = 9$ et $f(-2) = (-2)^2 = 4$. Or, $9 > 4$, ce qui est cohérent.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

1. **Ne pas confondre l'ensemble de définition :** 
   * Pour la fonction inverse, l'interdiction de diviser par $0$ exclue $0$ ($\mathbb{R}^*$). 
   * Pour la fonction racine carrée, l'argument sous la racine doit être positif ou nul ($[0 ; +\infty[$). Oublier de préciser le domaine de définition lors d'une étude de fonction est une erreur sanctionnée.
2. **Erreur de manipulation sur les variations de la fonction inverse :**
   Dire que la fonction inverse est « décroissante sur $\mathbb{R}^*$ » est **faussement rigoureux**. Elle est décroissante sur $]-\infty ; 0[$ et décroissante sur $]0 ; +\infty[$, mais un nombre négatif est toujours strictement inférieur à un nombre positif (ex: $-5 < 2$), alors que leurs images respectives ne respectent pas cette décroissance globale trans-intervalle (car $-\frac{1}{5} < \frac{1}{2}$). On étudie toujours la monotonie *intervalle par intervalle*.
3. **Attention aux confusions algébriques :**
   $$\sqrt{a+b} \neq \sqrt{a} + \sqrt{b}$$
   La fonction racine carrée ne "distribue" pas sur l'addition. Ne l'affirmez jamais sans démonstration.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
