---
title: "Cours : Dérivation et applications"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Fiche de Cours : Dérivation et applications

## 📌 1. Notions clés & Définitions

La dérivation est un outil fondamental de l'analyse mathématique qui permet d'étudier localement les variations d'une fonction numérique.

* **Nombre dérivé en un point :** 
  Soit $f$ une fonction définie sur un intervalle $I$ et $x_0 \in I$. On dit que $f$ est dérivable en $x_0$ si le taux d'accroissement de $f$ en $x_0$ admet une limite finie lorsque $h$ tend vers 0. 
  Ce nombre limite, s'il existe, est noté $f'(x_0)$.

* **Interprétation géométrique :**
  Le nombre dérivé $f'(x_0)$ est le **coefficient directeur de la tangente** à la courbe représentative de $f$ au point d'abscisse $x_0$.

* **Fonction dérivée :**
  Si $f$ est dérivable en tout point d'un intervalle $I$, la fonction qui à tout $x \in I$ associe $f'(x)$ est appelée la fonction dérivée de $f$ sur $I$, notée $f'$.

* **Lien entre dérivée et sens de variation :**
  Soit $f$ une fonction dérivable sur un intervalle $I$.
  * Si $f'(x) \ge 0$ pour tout $x \in I$ (avec annulation seulement en des points isolés), alors $f$ est **croissante** sur $I$.
  * Si $f'(x) \le 0$ pour tout $x \in I$ (avec annulation seulement en des points isolés), alors $f$ est **décroissante** sur $I$.
  * Si $f'(x) = 0$ pour tout $x \in I$, alors $f$ est **constante** sur $I$.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Taux d'accroissement
Pour $h \neq 0$, le taux d'accroissement de $f$ entre $x_0$ et $x_0 + h$ est donné par :
$$\tau(h) = \frac{f(x_0 + h) - f(x_0)}{h}$$
Et on a : $f'(x_0) = \lim_{h \to 0} \tau(h)$.

### B. Équation de la tangente
L'équation réduite de la tangente à la courbe $\mathcal{C}_f$ au point d'abscisse $x_0$ est :
$$y = f'(x_0)(x - x_0) + f(x_0)$$

### C. Dérivées des fonctions usuelles

| Fonction $f(x)$ | Domaine de définition $I$ | Dérivée $f'(x)$ | Domaine de dérivabilité |
| :--- | :--- | :--- | :--- |
| $k$ (constante) | $\mathbb{R}$ | $0$ | $\mathbb{R}$ |
| $x$ | $\mathbb{R}$ | $1$ | $\mathbb{R}$ |
| $x^n$ ($n \in \mathbb{N}^*$) | $\mathbb{R}$ | $n x^{n-1}$ | $\mathbb{R}$ |
| $\frac{1}{x}$ | $\mathbb{R}^*$ | $-\frac{1}{x^2}$ | $\mathbb{R}^*$ |
| $\sqrt{x}$ | $[0, +\infty[$ | $\frac{1}{2\sqrt{x}}$ | $]0, +\infty[$ |

### D. Opérations sur les dérivées
Soient $u$ et $v$ deux fonctions dérivables sur un intervalle $I$, et $k$ un réel.

* **Somme :** $(u + v)' = u' + v'$
* **Produit par un réel :** $(k \times u)' = k \times u'$
* **Produit :** $(u \times v)' = u'v + uv'$
* **Inverse :** $\left(\frac{1}{v}\right)' = -\frac{v'}{v^2}$ (sur les intervalles où $v$ ne s'annule pas)
* **Quotient :** $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ (sur les intervalles où $v$ ne s'annule pas)

---

## 💡 3. Exemple d'application résolu

**Problème :**
Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = 2x^3 - 3x^2 - 12x + 5$.
1. Calculer la dérivée $f'(x)$ de la fonction $f$.
2. Déterminer le sens de variation de $f$ sur $\mathbb{R}$.
3. Déterminer l'équation de la tangente à la courbe de $f$ au point d'abscisse $x_0 = 0$.

**Résolution rigoureuse :**

1. **Calcul de la dérivée :**
   La fonction $f$ est une fonction polynôme, elle est donc dérivable sur $\mathbb{R}$.
   Pour tout $x \in \mathbb{R}$ :
   $$f'(x) = 2(3x^2) - 3(2x) - 12(1) + 0$$
   $$f'(x) = 6x^2 - 6x - 12$$

2. **Étude du signe de $f'(x)$ et sens de variation :**
   On cherche les racines du trinôme du second degré $6x^2 - 6x - 12$.
   Calcul du discriminant $\Delta$ :
   $$\Delta = (-6)^2 - 4 \times 6 \times (-12) = 36 + 288 = 324$$
   Puisque $\Delta > 0$, il y a deux racines distinctes :
   $$x_1 = \frac{-(-6) - \sqrt{324}}{2 \times 6} = \frac{6 - 18}{12} = \frac{-12}{12} = -1$$
   $$x_2 = \frac{-(-6) + \sqrt{324}}{2 \times 6} = \frac{6 + 18}{12} = \frac{24}{12} = 2$$
   
   Le coefficient principal du trinôme est $a = 6 > 0$. Le trinôme est donc positif à l'extérieur de ses racines et négatif entre ses racines.
   * Sur $]-\infty, -1]$, $f'(x) \ge 0$, donc $f$ est **croissante**.
   * Sur $[-1, 2]$, $f'(x) \le 0$, donc $f$ est **décroissante**.
   * Sur $[2, +\infty[$, $f'(x) \ge 0$, donc $f$ est **croissante**.

3. **Équation de la tangente en $x_0 = 0$ :**
   La formule est $y = f'(0)(x - 0) + f(0)$.
   * Calcul de $f(0) = 2(0)^3 - 3(0)^2 - 12(0) + 5 = 5$.
   * Calcul de $f'(0) = 6(0)^2 - 6(0) - 12 = -12$.
   
   L'équation de la tangente est donc :
   $$y = -12(x - 0) + 5 \iff y = -12x + 5$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Confondre $f(x_0)$ et $f'(x_0)$ :** Dans l'équation de la tangente, $f(x_0)$ est l'ordonnée à l'origine (ou intervient dans le calcul de celle-ci) tandis que $f'(x_0)$ est la pente (le coefficient directeur). Ne les inversez pas.
* **Oublier de préciser le domaine de dérivabilité :** Avant de dériver une fonction ou d'appliquer des formules sur les quotients/racines, veillez à mentionner les intervalles sur lesquels la fonction est dérivable (interdiction de diviser par 0 ou d'annuler l'intérieur d'une racine carrée).
* **Erreurs de signe avec les quotients :** Dans la formule de dérivation d'un quotient $\left(\frac{u}{v}\right)'$, le numérateur est $u'v - uv'$. L'ordre des termes est crucial en raison du signe « moins ».
* **Rédaction rigoureuse pour les variations :** N'affirmez pas qu'une fonction est croissante sans avoir explicitement calculé la dérivée, étudié son signe, et rédigé clairement la conclusion en citant le théorème du cours.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
