---
title: "Cours : Fonction logarithme népérien"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

### Définition par bijection réciproque
La fonction exponentielle, notée $\exp : x \mapsto e^x$, est continue et strictement croissante sur $\mathbb{R}$. Elle réalise donc une bijection de $\mathbb{R}$ sur $]0, +\infty[$.

> **Définition :**  
> On appelle **fonction logarithme népérien**, notée $\ln$, la bijection réciproque de la fonction exponentielle.  
> Elle est définie sur $]0, +\infty[$ et à valeurs dans $\mathbb{R}$.

$$\begin{aligned}
\ln : ]0, +\infty[ &\longrightarrow \mathbb{R} \\
x &\longmapsto \ln(x)
\end{aligned}$$

### Relations fondamentales
Pour tout réel $x \in ]0, +\infty[$ et tout réel $y \in \mathbb{R}$ :
$$\ln(x) = y \iff x = e^y$$

Il en découle immédiatement les identités suivantes :
* Pour tout $x \in \mathbb{R}$ : $\ln(e^x) = x$
* Pour tout $x \in ]0, +\infty[$ : $e^{\ln(x)} = x$

### Valeurs particulières
* $\ln(1) = 0 \quad (\text{car } e^0 = 1)$
* $\ln(e) = 1 \quad (\text{car } e^1 = e)$

---

## 📐 2. Formules et Propriétés fondamentales

### Propriétés algébriques
Pour tous réels $a > 0$ et $b > 0$ :

* **Relation fonctionnelle fondamentale :**
  $$\ln(a \times b) = \ln(a) + \ln(b)$$
* **Logarithme d'un inverse :**
  $$\ln\left(\frac{1}{b}\right) = -\ln(b)$$
* **Logarithme d'un quotient :**
  $$\ln\left(\frac{a}{b}\right) = \ln(a) - \ln(b)$$
* **Logarithme d'une puissance ($n \in \mathbb{Z}$) :**
  $$\ln(a^n) = n\ln(a)$$
* **Logarithme d'une racine carrée :**
  $$\ln(\sqrt{a}) = \frac{1}{2}\ln(a)$$

### Analyse : Dérivation et Sens de variation
* **Dérivabilité :** La fonction $\ln$ est dérivable sur $]0, +\infty[$.
* **Dérivée :** Pour tout $x \in ]0, +\infty[$ :
  $$\ln'(x) = \frac{1}{x}$$
* **Sens de variation :** Pour tout $x > 0$, $\frac{1}{x} > 0$. La fonction $\ln$ est donc **strictement croissante** sur $]0, +\infty[$.
* **Conséquences pour la comparaison :** Pour tous $a, b \in ]0, +\infty[$ :
  $$\ln(a) = \ln(b) \iff a = b$$
  $$\ln(a) < \ln(b) \iff a < b$$
* **Signe :**
  * Si $x \in ]0, 1[$, alors $\ln(x) < 0$.
  * Si $x = 1$, alors $\ln(x) = 0$.
  * Si $x \in ]1, +\infty[$, alors $\ln(x) > 0$.

### Dérivée de la composée $\ln(u)$
Soit $u$ une fonction dérivable et **strictement positive** sur un intervalle $I$.  
La fonction $f = \ln \circ\, u$ est dérivable sur $I$, et pour tout $x \in I$ :
$$(\ln(u(x)))' = \frac{u'(x)}{u(x)}$$

### Limites aux bornes
$$\lim_{x \to 0^+} \ln(x) = -\infty \quad (\text{la droite d'équation } x = 0 \text{ est asymptote verticale})$$
$$\lim_{x \to +\infty} \ln(x) = +\infty$$

### Croissances comparées et limites indéterminées usuelles
Pour tout entier naturel non nul $n$ ($n \in \mathbb{N}^*$) :

* En $+\infty$ :
  $$\lim_{x \to +\infty} \frac{\ln(x)}{x^n} = 0$$
* En $0$ :
  $$\lim_{x \to 0^+} x^n \ln(x) = 0$$
* Taux d'accroissement en $1$ (respectivement en $0$) :
  $$\lim_{x \to 1} \frac{\ln(x)}{x - 1} = 1 \quad \iff \quad \lim_{h \to 0} \frac{\ln(1+h)}{h} = 1$$

---

## 💡 3. Exemple d'application résolu

### Énoncé
Soit la fonction $f$ définie sur $]0, +\infty[$ par :
$$f(x) = 2x - 1 - \ln(x)$$

1. Déterminer les limites de $f$ en $0$ et en $+\infty$.
2. Calculer la dérivée $f'$, étudier son signe et dresser le tableau de variations complet de $f$.
3. En déduire le signe de $f(x)$ sur $]0, +\infty[$.

---

### Solution rédigée

#### 1. Limites aux bornes
* **Limite en $0$ :**
  $$\lim_{x \to 0^+} (2x - 1) = -1 \quad \text{et} \quad \lim_{x \to 0^+} \ln(x) = -\infty \implies \lim_{x \to 0^+} (-\ln(x)) = +\infty$$
  Par somme de limites :
  $$\lim_{x \to 0^+} f(x) = +\infty$$
  La courbe représentative de $f$ admet la droite d'équation $x = 0$ pour asymptote verticale.

* **Limite en $+\infty$ :**
  On observe une forme indéterminée du type « $\infty - \infty$ ». On factorise par $x$ pour tout $x > 0$ :
  $$f(x) = x \left(2 - \frac{1}{x} - \frac{\ln(x)}{x}\right)$$
  D'après les croissances comparées : $\lim_{x \to +\infty} \frac{\ln(x)}{x} = 0$.  
  De plus : $\lim_{x \to +\infty} \frac{1}{x} = 0$.  
  Ainsi :
  $$\lim_{x \to +\infty} \left(2 - \frac{1}{x} - \frac{\ln(x)}{x}\right) = 2$$
  Comme $\lim_{x \to +\infty} x = +\infty$, par produit :
  $$\lim_{x \to +\infty} f(x) = +\infty$$

#### 2. Dérivée et variations
La fonction $f$ est dérivable sur $]0, +\infty[$ comme somme de fonctions dérivables. Pour tout $x \in ]0, +\infty[$ :
$$f'(x) = 2 - 0 - \frac{1}{x} = \frac{2x - 1}{x}$$

Puisque $x > 0$, le dénominateur est strictement positif. Le signe de $f'(x)$ dépend uniquement du numérateur :
* $2x - 1 > 0 \iff x > \frac{1}{2}$
* $2x - 1 = 0 \iff x = \frac{1}{2}$
* $2x - 1 < 0 \iff 0 < x < \frac{1}{2}$

On calcule la valeur de l'extremum :
$$f\left(\frac{1}{2}\right) = 2\left(\frac{1}{2}\right) - 1 - \ln\left(\frac{1}{2}\right) = 1 - 1 - (-\ln(2)) = \ln(2)$$

**Tableau de variations :**

| $x$ | $0$ | | $\frac{1}{2}$ | | $+\infty$ |
| :---: | :--- | :---: | :---: | :---: | :--- |
| Signe de $f'(x)$ | | $-$ | $0$ | $+$ | |
| Variations de $f$ | $+\infty$ | $\searrow$ | $\ln(2)$ | $\nearrow$ | $+\infty$ |

#### 3. Signe de $f(x)$
D'après l'étude des variations, $f$ admet un minimum absolu sur $]0, +\infty[$ atteint en $x = \frac{1}{2}$.  
Ce minimum vaut $f\left(\frac{1}{2}\right) = \ln(2)$.  
Or $2 > 1$, donc $\ln(2) > 0$.  
Le minimum étant strictement positif, on conclut que :
$$\forall x \in ]0, +\infty[, \quad f(x) > 0$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Ensemble de définition :**  
  $\ln(A)$ n'existe que si et seulement si $A > 0$ (strictement). Avant de résoudre une équation comme $\ln(x+1) + \ln(x-2) = 0$, cherchez toujours le domaine de validité : ici $x > -1$ et $x > 2$, soit $x \in ]2, +\infty[$.

* **Faux réflexes algébriques (Erreurs graves) :**
  * $\ln(a + b) \neq \ln(a) + \ln(b)$
  * $\ln(a \times b) \neq \ln(a) \times \ln(b)$
  * $\frac{\ln(a)}{\ln(b)} \neq \ln(a) - \ln(b)$
  * $(\ln(x))^n \neq n\ln(x)$ (attention à la distinction entre $\ln(x^n) = n\ln(x)$ et $(\ln(x))^n$).

* **Oubli de la dérivée interne :**  
  La dérivée de $\ln(u)$ est $\frac{u'}{u}$, et non $\frac{1}{u}$. N'oubliez pas de vérifier et mentionner que $u(x) > 0$ sur l'intervalle d'étude.

* **Croissances comparées :**  
  Il est impératif de citer explicitement le théorème des « croissances comparées » lors de l'évaluation du baccalauréat lorsque vous utilisez $\lim_{x \to +\infty} \frac{\ln(x)}{x} = 0$ ou $\lim_{x \to 0^+} x\ln(x) = 0$.

* **Résolution d'inéquations :**  
  La fonction $\ln$ étant strictement croissante, $\ln(u) \leqslant \ln(v) \iff u \leqslant v$ (avec $u > 0$ et $v > 0$). Cependant, faites attention au signe de $\ln(a)$ lorsque vous divisez par cette quantité : si $0 < a < 1$, alors $\ln(a) < 0$, ce qui inverse le sens de l'inégalité.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
