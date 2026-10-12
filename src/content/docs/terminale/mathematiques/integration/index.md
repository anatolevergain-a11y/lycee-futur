---
title: "Cours : Calcul intégral"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

### A. Intégrale d'une fonction continue et positive
Soit $f$ une fonction continue et positive sur un intervalle fermé $[a, b]$ (avec $a < b$), et $\mathcal{C}_f$ sa courbe représentative dans un repère orthogonal. 
L'intégrale de $a$ à $b$ de la fonction $f$, notée **$\int_{a}^{b} f(x) \, dx$**, est définie graphiquement comme **l'aire** (exprimée en unités d'aire) du domaine plan délimité par :
- la courbe $\mathcal{C}_f$,
- l'axe des abscisses ($y = 0$),
- les droites verticales d'équations $x = a$ et $x = b$.

$$\int_{a}^{b} f(x) \, dx \geqslant 0 \quad \text{si } f \geqslant 0 \text{ sur } [a, b]$$

*Note historique et notation :* Le symbole $\int$ est un "S" allongeant (pour *Summa*, somme en latin), introduit par Gottfried Wilhelm Leibniz. Le symbole $dx$ indique la variable par rapport à laquelle on intègre.

### B. Lien fondamental avec les primitives
Le théorème fondamental de l'analyse fait le lien entre calcul différentiel et calcul intégral :

> **Définition (Primitive) :** Soit $f$ une fonction définie sur un intervalle $I$. On appelle **primitive** de $f$ sur $I$ toute fonction $F$ dérivable sur $I$ telle que pour tout $x \in I$, $F'(x) = f(x)$.

> **Théorème (Calcul d'une intégrale par une primitive) :** Si $f$ est une fonction continue sur un intervalle $[a, b]$ et si $F$ est *une* primitive quelconque de $f$ sur $[a, b]$, alors :
> $$\int_{a}^{b} f(x) \, dx = \left[ F(x) \right]_{a}^{b} = F(b) - F(a)$$

---

## 📐 2. Formules et Propriétés fondamentales

### A. Propriétés algébriques

Soit $f$ et $g$ deux fonctions continues sur $[a, b]$ et $\alpha, \beta$ deux nombres réels.

1. **Linéarité :**
   $$\int_{a}^{b} \left( \alpha f(x) + \beta g(x) \right) dx = \alpha \int_{a}^{b} f(x) \, dx + \beta \int_{a}^{b} g(x) \, dx$$

2. **Relation de Chasles :**
   Pour tout réel $c$ appartenant à l'intervalle $[a, b]$ :
   $$\int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx$$

3. **Inversion des bornes :**
   $$\int_{b}^{a} f(x) \, dx = - \int_{a}^{b} f(x) \, dx$$

4. **Intégrale sur un intervalle réduit :**
   $$\int_{a}^{a} f(x) \, dx = 0$$

### B. Propriétés d'ordre

1. **Positivité :** Si $f$ est continue sur $[a, b]$ avec $a \le b$ et si, pour tout $x \in [a, b]$, $f(x) \ge 0$, alors :
   $$\int_{a}^{b} f(x) \, dx \ge 0$$

2. **Croissance de l'intégrale :** Si, pour tout $x \in [a, b]$, $f(x) \le g(x)$, alors :
   $$\int_{a}^{b} f(x) \, dx \le \int_{a}^{b} g(x) \, dx$$

3. **Inégalité de la moyenne / Valeur moyenne :**
   La **valeur moyenne** $\mu$ d'une fonction $f$ sur $[a, b]$ (avec $a < b$) est définie par :
   $$\mu = \frac{1}{b - a} \int_{a}^{b} f(x) \, dx$$
   Si $m \le f(x) \le M$ pour tout $x \in [a, b]$, alors :
   $$m(b - a) \le \int_{a}^{b} f(x) \, dx \le M(b - a)$$

### C. Méthode avancée : Intégration par parties (IPP)
Si $u$ et $v$ sont deux fonctions dérivables sur $[a, b]$, dont les dérivées $u'$ et $v'$ sont continues sur $[a, b]$, alors :
$$\int_{a}^{b} u(x)v'(x) \, dx = \left[ u(x)v(x) \right]_{a}^{b} - \int_{a}^{b} u'(x)v(x) \, dx$$

---

## 💡 3. Exemple d'application résolu

**Problème :** 
Calculer la valeur exacte de l'intégrale suivante :
$$I = \int_{1}^{e} x^2 \ln(x) \, dx$$

**Résolution :**
On utilise la méthode d'intégration par parties. Posons :
- $u(x) = \ln(x) \implies u'(x) = \frac{1}{x}$
- $v'(x) = x^2 \implies v(x) = \frac{x^3}{3}$

Les fonctions $u$ et $v$ ainsi que leurs dérivées sont continues sur $[1, e]$. Appliquons la formule de l'intégration par parties :
$$I = \left[ \frac{x^3}{3} \ln(x) \right]_{1}^{e} - \int_{1}^{e} \frac{x^3}{3} \times \frac{1}{x} \, dx$$

$$I = \left( \frac{e^3}{3} \ln(e) \right) - \left( \frac{1^3}{3} \ln(1) \right) - \int_{1}^{e} \frac{x^2}{3} \, dx$$

Sachant que $\ln(e) = 1$ et $\ln(1) = 0$ :
$$I = \frac{e^3}{3} - 0 - \left[ \frac{x^3}{9} \_{1}^{e} \right$$

$$I = \frac{e^3}{3} - \left( \frac{e^3}{9} - \frac{1^3}{9} \right)$$

$$I = \frac{e^3}{3} - \frac{e^3}{9} + \frac{1}{9}$$

En réduisant au même dénominateur :
$$I = \frac{3e^3 - e^3 + 1}{9} = \frac{2e^3 + 1}{9}$$

**Réponse :** 
$$I = \frac{2e^3 + 1}{9}$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

1. **Attention au domaine de définition lors d'une IPP :** Ne choisissez jamais une fonction dont la primitive ou la dérivée présente une singularité (division par zéro, logarithme de zéros ou de nombres négatifs) sur l'intervalle d'intégration.
2. **Le signe d'une intégrale :** Une intégrale **peut être négative** si la fonction prend des valeurs négatives sur l'intervalle, ou si la borne inférieure est strictement supérieure à la borne supérieure ($a > b$). Ne confondez pas *intégrale* et *aire* géométrique pure.
3. **Imprécision dans la rédaction de la primitive :** Lors du calcul $\int_{a}^{b} f(x) \, dx = [F(x)]_a^b$, il n'est **pas nécessaire** d'ajouter la constante $+C$. En effet, $(F(b) + C) - (F(a) + C) = F(b) - F(a)$, le $C$ s'annule systématiquement.
4. **Unités d'aire (U.A.) :** Si l'énoncé demande explicitement le calcul d'une aire délimitée par une courbe, l'intégrale donne un résultat en unités d'aire. N'oubliez pas de multiplier par l'aire d'un carreau du repère (produit des normes $\|\vec{i}\| \times \|\vec{j}\|$).
5. **Vérification à la calculatrice :** En fin d'épreuve, utilisez la fonctionnalité numérique de votre calculatrice (touche $\int$ ou `fnInt`) pour vérifier l'ordre de grandeur de votre résultat exact.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
