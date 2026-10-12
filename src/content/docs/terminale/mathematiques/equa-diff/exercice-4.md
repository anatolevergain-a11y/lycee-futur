---
title: "Exercice 4 : Décroissance radioactive des déchets"
description: "Application pratique du chapitre Équations différentielles"
---

### 🌐 Contexte concret

La gestion des déchets radioactifs est un enjeu environnemental et scientifique majeur. Certains isotopes radioactifs présents dans ces déchets, comme le Césium $137$ ($^{137}\text{Cs}$), se désintègrent au cours du temps de manière spontanée. 

En physique, la loi de la désintégration radioactive énonce que la vitesse de désintégration (c'est-à-dire la dérivée de la quantité de matière par rapport au temps) est proportionnelle à la quantité de matière radioactive restante. 

Dans cet exercice, nous modélisons la quantité d'un déchet radioactif (exprimée en kilogrammes) en fonction du temps $t$ (exprimé en années) à l'aide d'une équation différentielle.

---

### ❓ Énoncé

Soit $m(t)$ la masse de matière radioactive d'un échantillon (en kg) à l'instant $t$ (en années), avec $t \ge 0$. 
On admet que la fonction $m$ est dérivable sur $[0 ; +\infty[$ et qu'elle satisfait l'équation différentielle $(E)$ :
$$(E) \quad : \quad m'(t) = - \lambda m(t)$$
où $\lambda$ est une constante réelle strictement positive appelée constante radioactive. Pour le Césium $137$, on estime $\lambda \approx 0{,}023$.

1. **Résolution de l'équation :** Déterminer l'expression générale de la fonction $m(t)$ en fonction de $t$, sachant que la masse initiale à l'instant $t = 0$ est notée $m_0$ (où $m_0 > 0$).
2. **Détermination de la constante :** On dispose initialement de $100\text{ kg}$ de Césium $137$. Écrire l'expression exacte de $m(t)$ dans ce cas précis.
3. **Application - Demi-vie :** La période radioactive (ou demi-vie) $T$ d'un radioisotope est définie comme le temps nécessaire pour que la masse initiale soit divisée par $2$. Calculer la valeur approchée de la demi-vie du Césium $137$ à l'année près.
4. **Projection environnementale :** Au bout de combien d'années la masse initiale de $100\text{ kg}$ de Césium $137$ passera-t-elle sous le seuil critique de $1\text{ kg}$ ?

---

### 💡 Indice

- **Question 1 :** Le cours indique que les solutions de l'équation différentielle $y' = ay$ sont de la forme $y(t) = C e^{at}$. Identifiez ici la valeur de $a$.
- **Question 2 :** Utilisez la condition initiale $m(0) = 100$ pour déterminer la constante d'intégration.
- **Question 3 :** Traduisez mathématiquement la phrase "la masse est divisée par $2$" par une équation liant $m(T)$, $m_0$ et $\lambda$, puis utilisez la fonction logarithme népérien ($\ln$).
- **Question 4 :** Posez une inéquation avec la fonction $m(t)$ trouvée à la question 2 et résolvez-la en isolant l'inconnue $t$.

---

### 📋 Correction détaillée pas à pas

#### 1. Expression générale de la fonction $m(t)$
L'équation différentielle est de la forme $m'(t) = - \lambda m(t)$, soit $m'(t) + \lambda m(t) = 0$.
D'après le cours de Terminale sur les équations différentielles du premier ordre $y' = ay$, les solutions sont de la forme :
$$m(t) = C e^{-\lambda t}$$
où $C$ est une constante réelle. 
À l'instant $t = 0$, on a $m(0) = C e^{0} = C$. 
Or, l'énoncé indique que $m(0) = m_0$. On en déduit que $C = m_0$.
Ainsi, l'expression générale est :
$$\boxed{m(t) = m_0 e^{-\lambda t}}$$

#### 2. Expression de $m(t)$ pour le Césium 137
On nous donne $\lambda \approx 0{,}023$ et la masse initiale $m_0 = 100\text{ kg}$. 
En remplaçant ces valeurs dans l'expression précédente, on obtient :
$$\boxed{m(t) = 100 e^{-0{,}023 t}}$$

#### 3. Calcul de la demi-vie $T$
Par définition, la demi-vie $T$ est l'instant pour lequel la masse radioactive a diminué de moitié :
$$m(T) = \frac{m_0}{2}$$
En utilisant notre modèle avec $m_0 = 100$, on cherche $T$ tel que $m(T) = 50$ :
$$100 e^{-0{,}023 T} = 50$$
On simplifie en divisant par $100$ :
$$e^{-0{,}023 T} = \frac{1}{2}$$
On applique la fonction $\ln$ (logarithme népérien) de chaque côté :
$$\ln\left(e^{-0{,}023 T}\right) = \ln\left(\frac{1}{2}\right)$$
$$-0{,}023 T = -\ln(2)$$
$$T = \frac{\ln(2)}{0{,}023}$$
À l'aide d'une calculatrice :
$$T \approx \frac{0{,}6931}{0{,}023} \approx 30{,}13\text{ ans}$$
La demi-vie du Césium $137$ est donc d'environ **$30$ ans**.

#### 4. Temps nécessaire pour passer sous le seuil de $1\text{ kg}$
On cherche l'instant $t_1$ pour lequel la masse devient inférieure à $1\text{ kg}$ :
$$m(t_1) < 1$$
$$100 e^{-0{,}023 t_1} < 1$$
$$e^{-0{,}023 t_1} < \frac{1}{100}$$
En appliquant la fonction $\ln$ (strictement croissante sur $]0 ; +\infty[$) :
$$\ln\left(e^{-0{,}023 t_1}\right) < \ln\left(\frac{1}{100}\right)$$
$$-0{,}023 t_1 < \ln(1) - \ln(100)$$
$$-0{,}023 t_1 < 0 - \ln(100)$$
Puisque $-0{,}023 < 0$, lorsqu'on divise par ce nombre, le sens de l'inégalité change :
$$t_1 > \frac{-\ln(100)}{-0{,}023}$$
$$t_1 > \frac{\ln(100)}{0{,}023}$$
Calculons la valeur numérique :
$$t_1 > \frac{4{,}605}{0{,}023} \approx 200{,}2\text{ ans}$$
Il faudra donc attendre **$201$ ans** pour que la quantité de Césium $137$ passe sous le seuil de $1\text{ kg}$.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
