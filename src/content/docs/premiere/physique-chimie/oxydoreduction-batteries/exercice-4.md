---
title: "Exercice 4 : Stockage chimique des énergies renouvelables"
description: "Application pratique du chapitre Oxydoréduction et batteries"
---

### 🌐 Contexte concret

Le développement massif des énergies renouvelables intermittentes (solaire, éolien) pose le défi majeur du stockage de l'électricité. Lorsque la production dépasse la consommation, une solution prometteuse est l'électrolyse de l'eau pour produire du dihydrogène $\text{H}_2(\text{g})$. Ce gaz peut ensuite être stocké puis utilisé dans une pile à combustible pour restituer de l'électricité à la demande, sans émettre de gaz à effet de serre.

Dans cette fiche, nous étudions le fonctionnement d'une **pile à combustible à hydrogène et oxygène** fonctionnant en milieu acide.

---

### ❓ Énoncé

Les deux couples oxydant/réducteur mis en jeu dans la pile à combustible sont :
* $\text{O}_2(\text{g}) / \text{H}_2\text{O}(\text{l})$
* $\text{H}^+(\text{aq}) / \text{H}_2(\text{g})$

1. Rappeler la définition d'une oxydation et d'une réduction en termes de transfert d'électrons.
2. Écrire les demi-équations électroniques associées à chaque couple en précisant s'il s'agit d'une oxydation ou d'une réduction.
3. En déduire l'équation bilan de la réaction chimique qui se produit lors du fonctionnement de la pile à combustible.
4. Sachant que le débit de dihydrogène injecté dans la pile est $V(\text{H}_2) = 2,4\text{ L}$ par minute (dans les conditions où le volume molaire vaut $V_m = 24\text{ L}\cdot\text{mol}^{-1}$), calculer l'intensité $I$ du courant électrique débité par la pile. 
   *Donnée : la charge d'une mole d'électrons est la constante de Faraday $F = 96500\text{ C}\cdot\text{mol}^{-1}$.*

---

### 💡 Indice

* **Question 2 :** Pour équilibrer une demi-équation en milieu acide, commencez par ajuster l'élément chimique principal, puis l'oxygène avec $\text{H}_2\text{O}$, l'hydrogène avec les ions $\text{H}^+$, et enfin la charge globale avec les électrons $e^-$.
* **Question 4 :** Calculez d'abord la quantité de matière de $\text{H}_2$ consommée par minute, puis reliez-la à la quantité d'électrons échangés grâce à la demi-équation. L'intensité est la quantité d'électricité échangée par unité de temps ($I = \frac{Q}{\Delta t}$).

---

### 📋 Correction détaillée pas à pas

#### 1. Définitions des termes fondamentaux
* Une **oxydation** est une réaction chimique au cours de laquelle il y a **perte d'électrons**. Le réactif qui subit une oxydation est le réducteur.
* Une **réduction** est une réaction chimique au cours de laquelle il y a **gain d'électrons**. Le réactif qui subit une réduction est l'oxydant.

---

#### 2. Écriture des demi-équations électroniques

* **Couple $\text{H}^+(\text{aq}) / \text{H}_2(\text{g})$ :**
  Le dihydrogène $\text{H}_2$ est le réducteur, il cède des électrons. C'est le siège d'une **oxydation** (qui se produit à l'anode de la pile).
  $$\text{H}_2(\text{g}) = 2\text{H}^+(\text{aq}) + 2e^-$$

* **Couple $\text{O}_2(\text{g}) / \text{H}_2\text{O}(\text{l})$ :**
  Le dioxygène $\text{O}_2$ est l'oxydant, il capte des électrons. C'est le siège d'une **réduction** (qui se produit à la cathode de la pile).
  $$\text{O}_2(\text{g}) + 4\text{H}^+(\text{aq}) + 4e^- = 2\text{H}_2\text{O}(\text{l})$$

---

#### 3. Équation bilan de la pile à combustible

Pour obtenir l'équation bilan, il faut additionner les deux demi-équations en s'assurant que le nombre d'électrons échangés soit le même. Multiplions la première demi-équation par 2 :

$$2 \times (\text{H}_2(\text{g}) = 2\text{H}^+(\text{aq}) + 2e^-)$$
$$\text{O}_2(\text{g}) + 4\text{H}^+(\text{aq}) + 4e^- = 2\text{H}_2\text{O}(\text{l})$$

En additionnant et en simplifiant les $4\text{H}^+$ et les $4e^-$ de part et d'autre, on obtient l'équation bilan :
$$2\text{H}_2(\text{g}) + \text{O}_2(\text{g}) \longrightarrow 2\text{H}_2\text{O}(\text{l})$$

---

#### 4. Calcul de l'intensité du courant électrique

* **Étape a :** Calculons la quantité de matière de dihydrogène consommée par minute ($\Delta t = 1\text{ min} = 60\text{ s}$) :
  $$n(\text{H}_2) = \frac{V(\text{H}_2)}{V_m} = \frac{2,4}{24} = 0,10\text{ mol}$$

* **Étape b :** D'après la demi-équation d'oxydation de l'hydrogène, une mole de $\text{H}_2$ libère $2$ moles d'électrons. La quantité d'électrons $n(e^-)$ échangée par minute est donc :
  $$n(e^-) = 2 \times n(\text{H}_2) = 2 \times 0,10 = 0,20\text{ mol}$$

* **Étape c :** La charge électrique totale $Q$ transportée par ces électrons pendant la durée $\Delta t$ est :
  $$Q = n(e^-) \times F = 0,20 \times 96500 = 19300\text{ C}$$

* **Étape d :** L'intensité du courant $I$ est définie par $I = \frac{Q}{\Delta t}$ :
  $$I = \frac{19300}{60} \approx 322\text{ A}$$

*Réponse : L'intensité du courant électrique débité par la pile est d'environ $322\text{ A}$.*

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
