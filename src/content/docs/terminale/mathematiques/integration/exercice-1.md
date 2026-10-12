---
title: "Exercice 1 : Calcul d'aires et de valeurs moyennes"
description: "Application pratique du chapitre Calcul intégral"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude de la dynamique des populations microbiennes en milieu fermé (bioreacteur), la concentration d'une biomasse est mesurée à intervalles réguliers. Soit $f$ la fonction représentant cette concentration, exprimée en grammes par litre ($\text{g}\cdot\text{L}^{-1}$), en fonction du temps $t$ exprimé en heures ($\text{h}$).

Les observations expérimentales et l'ajustement statistique par la méthode des moindres carrés conduisent à modéliser la concentration de la biomasse sur l'intervalle de temps $[0 ; 10]$ par la fonction $f$ définie par :
$$f(t) = (t + 1)e^{-0{,}2t}$$

*Note méthodologique et limites du modèle :* Ce modèle mathématique (dérivé des lois de croissance de Verhulst modifiées) permet de rendre compte de la phase de croissance exponentielle puis de la phase de ralentissement due à l'épuisement des nutriments. Cependant, il ne prend pas en compte les stochasticités environnementales (variations de température, erreurs de mesure instrumentale estimées ici à $\pm 5\,\%$) ni la phase de mortalité cellulaire au-delà de $t = 10\text{ h}$. L'analyse par le calcul intégral offre un outil prédictif robuste, sous réserve de valider ces hypothèses d'invariance du milieu.

---

### ❓ Énoncé

1. **Calcul de la concentration moyenne :** Déterminer la valeur moyenne de la concentration de la biomasse dans le bioréacteur entre le début de l'expérience ($t = 0$) et la 10ème heure ($t = 10$). On donnera la valeur exacte puis une valeur approchée à $10^{-2}$ près.
2. **Démonstration par intégration par parties :** Établir une primitive de la fonction $f$ sur $[0 ; 10]$ en utilisant la méthode d'intégration par parties.
3. **Analyse d'aire et seuil critique :** Soit $\mathcal{D}$ le domaine du plan délimité par la courbe représentative $\mathcal{C}_f$ de $f$, l'axe des abscisses, et les droites d'équations $t = 0$ et $t = 10$. Calculer l'aire exacte de $\mathcal{D}$ en unités d'aire (u.a.), puis en $\text{g}\cdot\text{h}\cdot\text{L}^{-1}$.
4. **Esprit critique et compromis opérationnel :** Un ingénieur en bioprocédés affirme que *« si la concentration moyenne dépasse $2{,}5\text{ g}\cdot\text{L}^{-1}$ sur la période, le système est thermodynamiquement rentable »*. En tenant compte d'une incertitude systématique de $+5\,\%$ sur les mesures de concentration due à l'étalonnage des capteurs, cette rentabilité est-elle garantie de manière certaine ? Justifier rigoureusement.

---

### 💡 Indice de méthode

* **Pour la valeur moyenne :** Rappeler que la valeur moyenne $\mu$ d'une fonction continue $f$ sur un intervalle $[a ; b]$ est définie par :
  $$\mu = \frac{1}{b - a}\int_{a}^{b} f(t)\,\mathrm{d}t$$
* **Pour l'intégration par parties :** Poser $u(t) = t + 1$ et $v'(t) = e^{-0{,}2t}$, puis appliquer la formule $\int_{a}^{b} u(t)v'(t)\,\mathrm{d}t = [u(t)v(t)]_{a}^{b} - \int_{a}^{b} u'(t)v(t)\,\mathrm{d}t$.
* **Pour l'esprit critique :** Ne pas se limiter à une comparaison stricte de valeurs numériques ; intégrer l'intervalle de confiance (incertitude de mesure) dans la conclusion.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la concentration moyenne
La valeur moyenne $\mu$ de $f$ sur $[0 ; 10]$ est donnée par :
$$\mu = \frac{1}{10 - 0}\int_{0}^{10} f(t)\,\mathrm{d}t = \frac{1}{10}\int_{0}^{10} (t + 1)e^{-0{,}2t}\,\mathrm{d}t$$

#### 2. Recherche d'une primitive par intégration par parties
Soit $I = \int_{0}^{10} (t + 1)e^{-0{,}2t}\,\mathrm{d}t$.
Posons :
* $u(t) = t + 1 \implies u'(t) = 1$
* $v'(t) = e^{-0{,}2t} \implies v(t) = -\frac{1}{0{,}2}e^{-0{,}2t} = -5e^{-0{,}2t}$

Les fonctions $u$ et $v$ ainsi que leurs dérivées sont continues sur $[0 ; 10]$. D'après la formule d'intégration par parties :
$$I = \left[ -5(t + 1)e^{-0{,}2t} \right]_{0}^{10} - \int_{0}^{10} 1 \times (-5e^{-0{,}2t})\,\mathrm{d}t$$
$$I = \left[ -5(t + 1)e^{-0{,}2t} \right]_{0}^{10} + 5 \int_{0}^{10} e^{-0{,}2t}\,\mathrm{d}t$$

Calculons la seconde partie (primitive de $e^{-0{,}2t}$ qui est $-5e^{-0{,}2t}$) :
$$I = \left[ -5(t + 1)e^{-0{,}2t} - 25e^{-0{,}2t} \itude \right]_{0}^{10}$$
En factorisant par $-5e^{-0{,}2t}$ :
$$I = \left[ -5(t + 1 + 5)e^{-0{,}2t} \right]_{0}^{10} = \left[ -5(t + 6)e^{-0{,}2t} \itude \right]_{0}^{10}$$

Évaluons aux bornes :
* Pour $t = 10$ : $-5(10 + 6)e^{-0{,}2 \times 10} = -5(16)e^{-2} = -80e^{-2}$
* Pour $t = 0$ : $-5(0 + 6)e^{0} = -30(1) = -30$

Par conséquent :
$$I = (-80e^{-2}) - (-30) = 30 - 80e^{-2}$$

La valeur moyenne $\mu$ est donc :
$$\mu = \frac{1}{10}(30 - 80e^{-2}) = 3 - 8e^{-2}$$
Valeur approchée : $3 - 8(0{,}1353) \approx 3 - 1{,}0825 = 1{,}9175 \approx 1{,}92\text{ g}\cdot\text{L}^{-1}$.

#### 3. Calcul de l'aire du domaine $\mathcal{D}$
Puisque pour tout $t \in [0 ; 10]$, $f(t) \ge 0$, l'aire $\mathcal{A}$ du domaine $\mathcal{D}$ (exprimée en $\text{g}\cdot\text{h}\cdot\text{L}^{-1}$ compte tenu des unités des axes) est égale à l'intégrale de $f$ sur $[0 ; 10]$ :
$$\mathcal{A} = \int_{0}^{10} f(t)\,\mathrm{d}t = I = 30 - 80e^{-2}\text{ u.a.}$$
Valeur approchée : $\mathcal{A} \approx 30 - 10{,}83 = 19{,}17\text{ g}\cdot\text{h}\cdot\text{L}^{-1}$.

#### 4. Analyse critique et compromis opérationnel
La valeur moyenne calculée théoriquement est de $\mu \approx 1{,}92\text{ g}\cdot\text{L}^{-1}$. 
Le seuil de rentabilité fixé par l'ingénieur est de $2{,}5\text{ g}\cdot\text{L}^{-1}$. 
À première vue, $\mu < 2{,}5$, le système ne serait pas rentable. 

Cependant, l'énoncé intègre une **incertitude de mesure systématique de $+5\,\%$** liée à l'étalonnage des capteurs. 
* Si l'on applique cette majoration maximale aux données mesurées, la concentration moyenne réelle pourrait atteindre :
  $$\mu_{\text{max}} = 1{,}92 \times (1 + 0{,}05) = 1{,}92 \times 1{,}05 \approx 2{,}02\text{ g}\cdot\text{L}^{-1}$$
Même avec l'hypothèse la plus favorable de l'incertitude de mesure (+5 %), la concentration moyenne maximale estimée ($\approx 2{,}02\text{ g}\cdot\text{L}^{-1}$) reste nettement inférieure au seuil critique requis de $2{,}5\text{ g}\cdot\text{L}^{-1}$. 

*Conclusion scientifique :* L'affirmation de l'ingénieur est infirmée par le modèle. La rentabilité thermodynamique **n'est pas garantie**, et l'écart est trop important pour être imputé aux seules incertitudes instrumentales. Une modification des paramètres du bioreacteur (apport de nutriments) s'avère nécessaire.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
