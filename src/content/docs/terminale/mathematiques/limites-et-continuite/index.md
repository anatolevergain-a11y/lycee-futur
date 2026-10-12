---
title: "Cours : Limites et continuité"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Fiche de Cours : Limites et continuité

## 📌 1. Notions clés & Définitions

### A. Limite d'une fonction en l'infini
*   **Limite finie :** On dit qu'une fonction $f$ admet pour limite le nombre réel $L$ en $+\infty$ si tout intervalle ouvert contenant $L$ contient toutes les valeurs de $f(x)$ pour $x$ suffisamment grand. On note :
    $$\lim_{x \to +\infty} f(x) = L$$

*   **Limite infinie :** On dit que $f(x)$ tend vers $+\infty$ lorsque $x$ tend vers $+\infty$ si tout intervalle de la forme $1; A[$, avec $A > 0$, contient toutes les valeurs de $f(x)$ pour $x$ suffisamment grand. On note :
    $$\lim_{x \to +\infty} f(x) = +\infty$$

### B. Limite d'une fonction en un point
Soit $x_0$ un nombre réel et $f$ une fonction définie sur un intervalle ouvert contenant $x_0$ (sauf éventuellement en $x_0$).
On définit de manière analogue la limite de $f(x)$ lorsque $x$ tend vers $x_0$, qui peut être finie ou infinie. On peut également définir des limites à gauche ($x < x_0$) et à droite ($x > x_0$).

### C. Continuité
*   **Définition intuitive :** Une fonction est continue sur un intervalle si sa courbe représentative peut être tracée sans lever le crayon.
*   **Définition mathématique :** Soit $f$ une fonction définie sur un intervalle $I$ et $x_0 \in I$. On dit que $f$ est **continue en $x_0$** si :
    $$\lim_{x \to x_0} f(x) = f(x_0)$$
*   **Continuité sur un intervalle :** Une fonction est dite continue sur un intervalle $I$ si elle est continue en tout point de $I$.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Opérations sur les limites
Les règles usuelles d'addition, de multiplication et de quotient s'appliquent, sous réserve de ne pas rencontrer de formes indéterminées.

*   **Formes indéterminées (FI) admises au programme de Terminale :**
    1. Somme : $+\infty - (-\infty)$ (ou $+\infty + (-\infty)$)
    2. Produit : $0 \times (\pm \infty)$
    3. Quotient : $\frac{0}{0}$ et $\frac{\pm \infty}{\pm \infty}$

### B. Théorèmes fondamentaux de la continuité

*   **Théorème des Valeurs Intermédiaires (TVI) :**
    Soit $f$ une fonction définie et **continue** sur un intervalle $[a, b]$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe au moins un réel $c \in [a, b]$ tel que :
    $$f(c) = k$$

*   **Corollaire du TVI (Théorème de la bijection) :**
    Si $f$ est une fonction continue et **strictement monotone** sur un intervalle $[a, b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet **une unique** solution $c$ dans $[a, b]$.

### C. Théorèmes de comparaison (Limites)
*   **Théorème des gendarmes :**
    Soient $f, g, h$ trois fonctions définies sur un intervalle. Si pour tout $x$ au voisinage d'un réel $x_0$ (ou de $\pm \infty$), on a :
    $$g(x) \le f(x) \le h(x)$$
    Et si $\lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = L$ (où $L$ est un réel), alors :
    $$\lim_{x \to x_0} f(x) = L$$

---

## 💡 3. Exemple d'application résolu

**Problème :** 
Soit la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = x^3 + 3x - 1$.
Démontrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$ sur $\mathbb{R}$, puis donner un encadrement de $\alpha$ à $10^{-1}$ près.

**Résolution rigoureuse :**

1. **Continuité :**
   La fonction $f$ est une fonction polynôme, elle est donc dérivable et **continue** sur $\mathbb{R}$, et en particulier sur l'intervalle $[0, 1]$.

2. **Monotonie :**
   Calculons la dérivée de $f$ pour étudier ses variations :
   $$f'(x) = 3x^2 + 3$$
   Pour tout $x \in \mathbb{R}$, $x^2 \ge 0$, donc $3x^2 + 3 \ge 3 > 0$.
   La fonction $f$ est donc **strictement croissante** sur $\mathbb{R}$.

3. **Application du Corollaire du TVI :**
   * $f(0) = 0^3 + 3(0) - 1 = -1$
   * $f(1) = 1^3 + 3(1) - 1 = 3$
   * $0$ est compris entre $f(0)$ ($ -1$) et $f(1)$ ($3$).

   Puisque $f$ est continue et strictement croissante sur $[0, 1]$, d'après le corollaire du théorème des valeurs intermédiaires, l'équation $f(x) = 0$ admet une unique solution $\alpha$ dans l'intervalle $[0, 1]$.

4. **Encadrement par balayage :**
   À l'aide de la calculatrice ou d'un script Python :
   * $f(0,3) = -0,873 < 0$
   * $f(0,4) = -0,736 < 0$
   * $f(0,3) = -0,873$ et $f(0,4) = -0,736$ (erreur, reprenons plus haut : $f(0)=-1$, $f(0,5) = -0,375$, $f(0,3) = -1+...$ recalculons proprement)
   * $f(0) = -1$
   * $f(1) = 3$
   * $f(0,3) = (0,3)^3 + 3(0,3) - 1 = 0,027 + 0,9 - 1 = -0,073$
   * $f(0,4) = (0,4)^3 + 3(0,4) - 1 = 0,064 + 1,2 - 1 = 0,264$
   
   On a $f(0,3) < 0$ et $f(0,4) > 0$.
   L'encadrement de $\alpha$ à $10^{-1}$ près est donc :
   $$0,3 < \alpha < 0,4$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Piège 1 (Oublier les hypothèses du TVI) :** Ne jamais appliquer le théorème des valeurs intermédiaires ou son corollaire sans avoir explicitement vérifié et rédigé que la fonction est **continue** sur l'intervalle considéré. C'est l'exigence majeure des examinateurs.
*   **Piège 2 (Rédaction des formes indéterminées) :** Écrire des égalités aberrantes telles que « $\infty - \infty = 0$ » ou « $\frac{0}{0} = 1$ » est lourdement sanctionné. Une forme indéterminée nécessite une transformation algébrique préalable (factorisation par le terme prédominant, quantité conjuguée, etc.).
*   **Conseil méthodologique :** Pour lever une indétermination sur une fonction rationnelle en l'infini, pensez systématiquement à factoriser le numérateur et le dénominateur par leur terme de plus haut degré.
*   **Vocabulaire rigoureux :** On dit qu'une suite ou une fonction *tend vers* une limite, mais qu'elle *vaut* une image en un point précis. Veillez à ne pas confondre $\lim_{x \to x_0} f(x)$ et $f(x_0)$ (la fonction n'est d'ailleurs pas obligée d'être définie en $x_0$ pour admettre une limite en $x_0$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
