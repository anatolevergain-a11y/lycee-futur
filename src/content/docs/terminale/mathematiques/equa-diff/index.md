---
title: "Cours : Équations différentielles"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Une **équation différentielle** est une équation dont l'inconnue est une fonction (souvent notée $y$ ou $y(x)$), et qui met en relation cette fonction et ses dérivées successives ($y', y'', \dots$).

*   **Ordre d'une équation différentielle :** L'ordre d'une équation différentielle correspond à l'ordre maximal de dérivation qui y figure. En classe de Terminale, nous étudions principalement les équations différentielles du premier ordre (faisant intervenir $y$ et $y'$) et du second ordre à coefficients constants (faisant intervenir $y$, $y'$ et $y''$).
*   **Solution d'une équation différentielle :** C'est toute fonction $y$, dérivable sur un intervalle $I$, qui vérifie l'égalité de l'équation pour tout réel de $I$.
*   **Condition initiale :** La résolution générale d'une équation différentielle fait apparaître une ou plusieurs constantes arbitraires. Une condition initiale (ou condition aux limites) permet de déterminer de manière unique cette ou ces constantes, et ainsi de trouver une **solution particulière**.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Équations différentielles du premier ordre

#### 1. Cas général homogène : $y' + a(x)y = 0$
Soit $a$ une fonction continue sur un intervalle $I$. Les solutions de l'équation différentielle $y' + a(x)y = 0$ sur $I$ sont les fonctions $y$ définies par :
$$y(x) = C e^{-A(x)}$$
où $C$ est une constante réelle quelconque et $A$ est une primitive de la fonction $a$ sur $I$.

#### 2. Cas particulier fondamental au programme : $y' = ay + b$ (avec $a$ et $b$ réels, $a \neq 0$)
L'équation $y' = ay + b$ est une équation linéaire du premier ordre à coefficients constants.
*   **Solution générale :** L'ensemble des solutions sur $\mathbb{R}$ est donné par la formule :
    $$y(x) = C e^{ax} - \frac{b}{a}$$
    où $C \in \mathbb{R}$.
*   **Cas particulier $y' = ay$ ($b = 0$) :** Les solutions sont de la forme $y(x) = C e^{ax}$.

---

### B. Équations différentielles du second ordre à coefficients constants

#### Forme générale : $ay'' + by' + cy = 0$
Où $a, b, c$ sont des nombres réels, avec $a \neq 0$.

Pour résoudre cette équation, on introduit l'**équation caractéristique** associée :
$$ar^2 + br + c = 0$$

On calcule le discriminant $\Delta = b^2 - 4ac$ :

1.  **Si $\Delta > 0$ :** L'équation caractéristique admet deux solutions réelles distinctes $r_1$ et $r_2$.
    La solution générale est de la forme :
    $$y(x) = \lambda e^{r_1 x} + \mu e^{r_2 x}$$
    où $\lambda$ et $\mu$ sont deux constantes réelles.

2.  **Si $\Delta = 0$ :** L'équation caractéristique admet une racine réelle double $r_0 = -\frac{b}{2a}$.
    La solution générale est de la forme :
    $$y(x) = (\lambda x + \mu) e^{r_0 x}$$
    où $\lambda$ et $\mu$ sont deux constantes réelles.

3.  **Si $\Delta < 0$ :** L'équation caractéristique admet deux solutions complexes conjuguées $r_1 = \alpha + i\beta$ et $r_2 = \alpha - i\beta$ (avec $\alpha, \beta \in \mathbb{R}, \beta \neq 0$).
    La solution générale à valeurs réelles est de la forme :
    $$y(x) = e^{\alpha x} (\lambda \cos(\beta x) + \mu \sin(\beta x))$$
    où $\lambda$ et $\mu$ sont deux constantes réelles.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Résoudre sur $\mathbb{R}$ l'équation différentielle $(E) : y' - 2y = 3$, puis déterminer la solution $f$ vérifiant la condition initiale $f(0) = 1$.

**Résolution :**

1.  **Identification de la forme :**
    L'équation $(E)$ est de la forme $y' = ay + b$ avec $a = 2$ et $b = 3$.

2.  **Recherche de la solution générale :**
    D'après le cours, les solutions de $y' = 2y + 3$ sont de la forme :
    $$y(x) = C e^{2x} - \frac{3}{2}, \quad \text{avec } C \in \mathbb{R}$$

3.  **Utilisation de la condition initiale :**
    On cherche $C$ tel que $f(0) = 1$ :
    $$f(0) = C e^{2(0)} - \frac{3}{2} = 1$$
    $$C \times 1 - \frac{3}{2} = 1$$
    $$C = 1 + \frac{3}{2} = \frac{5}{2}$$

4.  **Conclusion :**
    La solution unique recherchée est la fonction $f$ définie sur $\mathbb{R}$ par :
    $$f(x) = \frac{5}{2} e^{2x} - \frac{3}{2}$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Oubli de la constante $C$ (ou $\lambda, \mu$) :** Ne pas oublier que la solution générale d'une équation différentielle comporte une (ou plusieurs) constante(s) réelle(s). Une réponse sans constante est une solution particulière, pas la solution générale.
*   **Erreur de signe dans l'exponentielle :** Pour $y' = ay$, la solution est $Ce^{ax}$ et non $Ce^{-ax}$ (le signe moins intervient dans le cas général avec $a(x)$, mais pour une constante $a$, le coefficient reste $a$).
*   **Vérification systématique :** Prenez l'habitude, lors d'une évaluation, de dériver votre solution trouvée et de la réinjecter dans l'équation de départ pour vérifier l'égalité. C'est un moyen infaillible d'autocontrôle.
*   **Rédaction rigoureuse :** 
    *   Précisez toujours l'ensemble ou l'intervalle sur lequel les solutions sont valables.
    *   Explicitez clairement l'utilisation des conditions initiales pour justifier la valeur de la constante.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
