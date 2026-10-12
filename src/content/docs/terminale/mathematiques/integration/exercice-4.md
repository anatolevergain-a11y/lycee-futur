---
title: "Exercice 4 : Valorisation d'un actif financier sur la durée"
description: "Application pratique du chapitre Calcul intégral"
---

### 🌐 Contexte concret

En économie et en finance, la valeur d'un actif (comme une entreprise, une machine ou un portefeuille d'actions) évolue au cours du temps. Pour estimer sa valeur globale sur une période donnée, les analystes financiers ne se contentent pas de regarder sa valeur à un instant $T$. Ils calculent la **valeur actualisée continue** de ses flux de revenus ou sa valeur moyenne capitalisée sur une période, faisant ainsi intervenir le calcul intégral.

Considérons une entreprise dont le flux de revenus continus (exprimé en milliers d'euros par an) à l'instant $t$ (en années) est modélisé par la fonction $f$ définie sur l'intervalle $[0 ; 5]$ par :
$$f(t) = (10 + 2t)e^{0,1t}$$

L'objectif de cet exercice est d'étudier l'évolution de ce revenu et de calculer la valeur totale générée par cet actif entre $t = 0$ et $t = 5$ ans.

---

### ❓ Énoncé

1. **Étude du flux de revenus :** Calculer la dérivée $f'(t)$ de la fonction $f$ et déterminer le sens de variation du flux de revenus sur l'intervalle $[0 ; 5]$. Interpréter économiquement ce résultat.
2. **Calcul de la valeur totale :** La valeur totale $V$ générée par l'actif entre $t = 0$ et $t = 5$ est donnée par l'intégrale :
   $$V = \int_{0}^{5} f(t) \, dt$$
   À l'aide d'une intégration par parties, calculer la valeur exacte de $V$, puis donner une valeur arrondie à l'euro près.
3. **Valeur moyenne :** Calculer la valeur moyenne $\mu$ de ce flux de revenus sur les 5 premières années.

---

### 💡 Indice

* **Question 1 :** Utilisez la règle de dérivation d'un produit $(u \times v)' = u'v + uv'$ avec $u(t) = 10 + 2t$ et $v(t) = e^{0,1t}$.
* **Question 2 :** Pour calculer l'intégrale $\int_{0}^{5} (10 + 2t)e^{0,1t} \, dt$, posez :
  * $u(t) = 10 + 2t \implies u'(t) = ?$
  * $v'(t) = e^{0,1t} \implies v(t) = ?$
  Puis appliquez la formule d'intégration par parties : $\int_{a}^{b} u(t)v'(t) \, dt = [u(t)v(t)]_{a}^{b} - \int_{a}^{b} u'(t)v(t) \, dt$.
* **Question 3 :** Rappelez-vous que la valeur moyenne d'une fonction $f$ sur $[a ; b]$ est définie par $\mu = \frac{1}{b-a} \int_{a}^{b} f(t) \, dt$.

---

### 📋 Correction détaillée pas à pas

#### **1. Étude du flux de revenus**

La fonction $f$ est définie sur $[0 ; 5]$ par $f(t) = (10 + 2t)e^{0,1t}$.
Il s'agit du produit de deux fonctions dérivables sur $\mathbb{R}$ :
* $u(t) = 10 + 2t \implies u'(t) = 2$
* $v(t) = e^{0,1t} \implies v'(t) = 0,1e^{0,1t}$

En appliquant la formule de la dérivée d'un produit :
$$f'(t) = u'(t)v(t) + u(t)v'(t)$$
$$f'(t) = 2 \times e^{0,1t} + (10 + 2t) \times 0,1e^{0,1t}$$
$$f'(t) = e^{0,1t} \left[ 2 + 0,1(10 + 2t) \right]$$
$$f'(t) = e^{0,1t} \left[ 2 + 1 + 0,2t \right]$$
$$f'(t) = (3 + 0,2t)e^{0,1t}$$

Pour tout $t \in [0 ; 5]$, on a $e^{0,1t} > 0$ et $(3 + 0,2t) > 0$.
Par conséquent, $f'(t) > 0$ sur $[0 ; 5]$.

* **Interprétation :** La fonction $f$ est strictement croissante sur $[0 ; 5]$. Cela signifie que les revenus générés par l'actif augmentent continuellement au cours des 5 années.

---

#### **2. Calcul de la valeur totale $V$**

On cherche à calculer :
$$V = \ utilisons la méthode d'intégration par parties sur l'intégrale \int_{0}^{5} (10 + 2t)e^{0,1t} \, dt$$

Posons :
* $u(t) = 10 + 2t \implies u'(t) = 2$
* $v'(t) = e^{0,1t} \implies v(t) = \frac{1}{0,1}e^{0,1t} = 10e^{0,1t}$

Les fonctions $u$ et $v$ ainsi que leurs dérivées sont continues sur $[0 ; 5]$. Appliquons la formule d'intégration par parties :
$$V = \left[ (10 + 2t) \times 10e^{0,1t} \right]_{0}^{5} - \int_{0}^{5} 2 \times 10e^{0,1t} \, dt$$
$$V = \left[ (100 + 20t)e^{0,1t} \right]_{0}^{5} - \int_{0}^{5} 20e^{0,1t} \, dt$$

Calculons maintenant la primitive de $20e^{0,1t}$, qui est $\frac{20}{0,1}e^{0,1t} = 200e^{0,1t}$ :
$$V = \left[ (100 + 20t)e^{0,1t} - 200e^{0,1t} \right]_{0}^{5}$$
$$V = \left[ (100 + 20t - 200)e^{0,1t} \right]_{0}^{5}$$
$$V = \left[ (20t - 100)e^{0,1t} \right]_{0}^{5}$$

Évaluons cette expression entre les bornes $0$ et $5$ :
* Pour $t = 5$ : $(20(5) - 100)e^{0,1(5)} = (100 - 100)e^{0,5} = 0 \times e^{0,5} = 0$
* Pour $t = 0$ : $(20(0) - 100)e^{0,1(0)} = -100 \times e^{0} = -100 \times 1 = -100$

Par conséquent :
$$V = 0 - (-100) = 100$$

* **Conclusion :** Étant donné que $f(t)$ est en milliers d'euros, la valeur totale générée par l'actif sur les 5 ans est de $100$ milliers d'euros, soit **100 000 €**.

---

#### **3. Calcul de la valeur moyenne**

La valeur moyenne $\mu$ du flux de revenus sur l'intervalle $[0 ; 5]$ est donnée par la formule :
$$\mu = \frac{1}{5 - 0} \int_{0}^{5} f(t) \, dt$$
$$\mu = \frac{1}{5} V$$
$$\mu = \frac{100}{5} = 20$$

* **Interprétation :** La valeur moyenne du flux de revenus est de $20$ milliers d'euros par an, soit **20 000 € par an** sur la période de 5 ans.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
