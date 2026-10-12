---
title: "Exercice : Équations différentielles"
description: "Démonstration appliquée : Modélisation de la charge d'une batterie rapide de station service"
---

### 🌐 Contexte moderne & concret

Avec l'essor de la mobilité électrique, les stations-service traditionnelles se métamorphosent en stations de recharge ultra-rapide. Ces chargeurs haute puissance permettent de recharger une batterie de véhicule électrique de $10\%$ à $80\%$ en un temps record. 

Cependant, pour préserver la durée de vie des cellules chimiques de la batterie et éviter la surchauffe, la puissance de charge est régulée : la vitesse de charge est proportionnelle au pourcentage manquant pour atteindre la charge maximale ($100\%$). 

On modélise le niveau de charge de la batterie par une fonction $f(t)$, représentant le pourcentage de charge à l'instant $t$ (exprimé en minutes), avec $f(0) = 10$ (la charge initiale est de $10\%$).

---

### ❓ Énoncé

Soit $f$ une fonction dérivable sur $[0, +\infty[$, représentant le pourcentage de charge d'une batterie en fonction du temps $t$ (en minutes). La loi physique de régulation se traduit par l'équation différentielle suivante, valable pour tout $t \ge 0$ :

$$(E) \quad : \quad f'(t) + 0{,}1 f(t) = 10$$

Avec la condition initiale $f(0) = 10$.

1. **Résolution de l'équation homogène :** 
   Déterminer l'ensemble des solutions de l'équation différentielle sans second membre associée à $(E)$, c'est-à-dire :
   $$(E_0) \quad : \quad y' + 0{,}1 y = 0$$

2. **Recherche d'une solution particulière :** 
   Montrer que la fonction constante $y_p(t) = 100$ est une solution particulière de l'équation $(E)$.

3. **Solution générale et condition initiale :** 
   En déduire l'expression de la fonction $f(t)$ pour tout $t \ge 0$, en utilisant la condition initiale $f(0) = 10$.

4. **Application citoyenne et énergétique :** 
   Déterminer le temps nécessaire pour que la batterie atteigne le seuil de $80\%$ de charge, requis pour reprendre la route. *(On arrondira à la minute près).*

---

### 💡 Indice

1. Pour l'équation $(E_0)$, rappelez-vous que les solutions de $y' + ay = 0$ sont de la forme $y(t) = C e^{-at}$ où $C$ est une constante réelle.
2. Pour la solution particulière, testez une fonction constante $y_p(t) = k$ en la réinjectant dans l'équation $(E)$ pour trouver la valeur de $k$.
3. La solution générale de $(E)$ est la somme de la solution générale de $(E_0)$ et d'une solution particulière de $(E)$. Utilisez $f(0) = 10$ pour déterminer la constante d'intégration.
4. Pour la dernière question, vous devez résoudre l'équation $f(t) = 80$ en utilisant la fonction logarithme népérien ($\ln$).

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Résolution de l'équation homogène $(E_0)$
L'équation sans second membre associée est :
$$(E_0) \quad : \quad y' + 0{,}1 y = 0$$
soit $y' = -0{,}1 y$.
D'après le cours de Terminale, les solutions de cette équation différentielle linéaire du premier ordre sont de la forme :
$$y(t) = C e^{-0{,}1 t}$$
où $C$ est une constante réelle arbitraire.

#### 2. Recherche d'une solution particulière de $(E)$
Cherchons une solution particulière sous la forme d'une fonction constante, c'est-à-dire $y_p(t) = k$, où $k$ est un nombre réel.
Sa dérivée est $y_p'(t) = 0$.
Réinjectons $y_p$ et $y_p'$ dans l'équation $(E)$ :
$$0 + 0{,}1 \times k = 10$$
$$k = \frac{10}{0{,}1}$$
$$k = 100$$
La fonction $y_p(t) = 100$ est donc bien une solution particulière de l'équation $(E)$.

#### 3. Solution générale et condition initiale
La solution générale de l'équation avec second membre $(E)$ est la somme de la solution générale de $(E_0)$ et de la solution particulière $y_p$ :
$$f(t) = C e^{-0{,}1 t} + 100$$
où $C$ est un réel.

Utilisons maintenant la condition initiale $f(0) = 10$ pour déterminer la valeur de $C$ :
$$f(0) = C e^{-0{,}1 \times 0} + 100 = 10$$
$$C e^0 + 100 = 10$$
$$C + 100 = 10$$
$$C = 10 - 100$$
$$C = -90$$

Ainsi, l'expression de la fonction $f(t)$ modélisant la charge de la batterie est :
$$f(t) = 100 - 90 e^{-0{,}1 t}$$

#### 4. Calcul du temps de charge rapide ($80\%$)
Nous cherchons l'instant $t_1$ (en minutes) tel que $f(t_1) = 80$.
$$100 - 90 e^{-0{,}1 t_1} = 80$$
isolons l'exponentielle :
$$-90 e^{-0{,}1 t_1} = 80 - 100$$
$$-90 e^{-0{,}1 t_1} = -20$$
$$e^{-0{,}1 t_1} = \frac{20}{90} = \frac{2}{9}$$

Appliquons la fonction logarithme népérien $(\ln)$ de chaque côté pour éliminer l'exponentielle :
$$\ln\left(e^{-0{,}1 t_1}\right) = \ln\left(\frac{2}{9}\right)$$
$$-0{,}1 t_1 = \ln\left(\frac{2}{9}\right)$$
$$t_1 = \frac{\ln\left(\frac{2}{9}\right)}{-0{,}1}$$
$$t_1 = -10 \ln\left(\frac{2}{9}\right)$$

À l'aide d'une calculatrice :
$$t_1 = 10 \ln\left(\frac{9}{2}\right) \approx 10 \times 1{,}4917 \approx 14{,}9 \text{ minutes}$$

**Conclusion :** Il faut environ **$15$ minutes** pour recharger la batterie de $10\%$ à $80\%$, ce qui correspond parfaitement aux standards actuels des bornes de recharge ultra-rapide sur autoroute.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
