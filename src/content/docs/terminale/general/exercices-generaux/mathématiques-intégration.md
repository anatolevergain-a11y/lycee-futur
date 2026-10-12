---
title: "Exercice : Intégration"
description: "Démonstration appliquée : Calcul de la consommation électrique d'un data center d'IA"
---

### 🌐 Contexte

Avec l'explosion des modèles d'intelligence artificielle générative (type LLM), les besoins en puissance de calcul (GPU) des *data centers* atteignent des sommets. La consommation électrique de ces infrastructures varie fortement au cours de la journée en fonction des requêtes des utilisateurs et des phases d'entraînement des modèles. 

On modélise la puissance instantanée absorbée par un data center sur une période de $24$ heures par une fonction $P$, exprimée en mégawatts (MW). Cette puissance est donnée par la fonction définie sur l'intervalle $[0 ; 24]$ par :

$$P(t) = (t + 2) e^{-0{,}1 t} + 5$$

où $t$ représente le temps écoulé en heures depuis minuit ($t = 0$ correspond à minuit, et $t = 24$ au minuit suivant).

L'objectif de cet exercice est d'étudier cette consommation et de calculer l'énergie totale consommée sur une journée, exprimée en mégawattheures (MWh), sachant que l'énergie $E$ est définie par l'intégrale de la puissance sur le temps :
$$E = \int_{0}^{24} P(t) \, dt$$

---

### ❓ Énoncé

1. **Étude de la fonction puissance :**
   Calculer la dérivée $P'(t)$ de la fonction $P$ pour tout $t \in [0 ; 24]$. En déduire les variations de la fonction $P$ sur cet intervalle et interpréter ce résultat dans le contexte du data center.

2. **Technique d'intégration :**
   Soit la fonction $F$ définie sur $[0 ; 24]$ par $F(t) = (-10t - 120) e^{-0{,}1 t}$.
   Démontrer que $F$ est une primitive de la fonction $t \mapsto (t + 2) e^{-0{,}1 t}$ sur $[0 ; 24]$.

3. **Calcul de la consommation énergétique journalière :**
   À l'aide des questions précédentes, calculer l'énergie totale $E$ consommée par le data center sur les $24$ heures de la journée. Donner la valeur exacte en MWh, puis une valeur arrondie au dixième.

4. **Sensibilisation citoyenne et transition écologique :**
   Sachant qu'un foyer français moyen consomme environ $4{,}5\text{ MWh}$ d'électricité par an (hors chauffage), combien de foyers équivaut la consommation journalière de ce data center ? 
   *(On arrondira au nombre entier le plus proche).*

---

### 💡 Indice

* **Question 1 :** Pensez à utiliser la formule de dérivation d'un produit $(u \times v)' = u'v + uv'$.
* **Question 2 :** Dérivez la fonction $F(t)$ et montrez que vous retrouvez bien l'expression $(t + 2) e^{-0{,}1 t}$. N'oubliez pas la linéarité de l'intégration pour la constante $+ 5$.
* **Question 3 :** Utilisez la relation fondamentale : $\int_{a}^{b} f(t) \, dt = [F(t)]_{a}^{b} = F(b) - F(a)$.
* **Question 4 :** Ramenez la consommation annuelle du foyer à une échelle journalière, ou calculez la consommation annuelle du data center en multipliant par $365$.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Étude de la fonction puissance
La fonction $P$ est définie sur $[0 ; 24]$ par $P(t) = (t + 2) e^{-0{,}1 t} + 5$.
Posons $u(t) = t + 2$ et $v(t) = e^{-0{,}1 t}$. On a $u'(t) = 1$ et $v'(t) = -0{,}1 e^{-0{,}1 t}$.
En utilisant la formule de dérivation d'un produit $(uv)' = u'v + uv'$ :

$$P'(t) = 1 \times e^{-0{,}1 t} + (t + 2) \times (-0{,}1 e^{-0{,}1 t}) + 0$$
$$P'(t) = e^{-0{,}1 t} [1 - 0{,}1(t + 2)]$$
$$P'(t) = e^{-0{,}1 t} [1 - 0{,}1t - 0{,}2]$$
$$P'(t) = e^{-0{,}1 t} (0{,}8 - 0{,}1t)$$

Pour tout $t \in [0 ; 24]$, l'exponentielle $e^{-0{,}1 t}$ est strictement positive. Le signe de $P'(t)$ dépend donc uniquement de celui du terme $(0{,}8 - 0{,}1t)$ :
* $0{,}8 - 0{,}1t > 0 \iff t < 8$
* $0{,}8 - 0{,}1t < 0 \iff t > 8$

La fonction $P$ est donc **croissante** sur l'intervalle $[0 ; 8]$ et **décroissante** sur l'intervalle $[8 ; 24]$. 
*Interprétation :* La consommation électrique du data center augmente progressivement pour atteindre un pic à $8\text{ h}$ du matin (correspondant au début de la journée de travail et aux premières requêtes massives ensemblencées), avant de diminuer doucement le reste de la journée.

---

#### 2. Démonstration de la primitive
Soit la fonction $F(t) = (-10t - 120) e^{-0{,}1 t}$. Calculons sa dérivée $F'(t)$ en utilisant la dérivée d'un produit :
Posons $u(t) = -10t - 120$ et $v(t) = e^{-0{,}1 t}$. 
On a $u'(t) = -10$ et $v'(t) = -0{,}1 e^{-0{,}1 t}$.

$$F'(t) = u'(t)v(t) + u(t)v'(t)$$
$$F'(t) = -10 e^{-0{,}1 t} + (-10t - 120)(-0{,}1 e^{-0{,}1 t})$$
Factorisons par $e^{-0{,}1 t}$ :
$$F'(t) = e^{-0{,}1 t} \left[ -10 - (-0{,}1)(-10t - 120) \right]$$
$$F'(t) = e^{-0{,}1 t} \left[ -10 + (t + 12) \right]$$
$$F'(t) = e^{-0{,}1 t} (t + 2)$$

Nous avons bien $F'(t) = (t + 2) e^{-0{,}1 t}$, ce qui prouve que $F$ est une primitive de la fonction $t \mapsto (t + 2) e^{-0{,}1 t}$ sur $[0 ; 24]$.

---

#### 3. Calcul de l'énergie totale consommée
L'énergie totale $E$ sur $24$ heures est l'intégrale de la puissance $P(t)$ entre $0$ et $24$ :

$$E = \int_{0}^{24} \left( (t + 2) e^{-0{,}1 t} + 5 \right) dt$$

En utilisant la linéarité de l'intégration et la primitive trouvée aux questions précédentes (notant qu'une primitive de $5$ est $5t$), on a :

$$E = \left[ F(t) + 5t \right]_{0}^{24}$$
$$E = \left[ (-10t - 120) e^{-0{,}1 t} + 5t \right]_{0}^{24}$$

Calculons $E(24)$ et $E(0)$ :
* Pour $t = 24$ :
  $$F(24) + 5(24) = (-10(24) - 120) e^{-2{,}4} + 120 = (-240 - 120) e^{-2{,}4} + 120 = -360 e^{-2{,}4} + 120$$

* Pour $t = 0$ :
  $$F(0) + 5(0) = (-10(0) - 120) e^{0} + 0 = -120 \times 1 = -120$$

Par conséquent :
$$E = \left( -360 e^{-2{,}4} + 120 \right) - (-120)$$
$$E = 240 - 360 e^{-2{,}4}$$

* **Valeur exacte :** $240 - 360 e^{-2{,}4}\text{ MWh}$
* **Valeur approchée :** $240 - 360 \times 0{,}0907 \approx 240 - 32{,}66 \approx 207{,}3\text{ MWh}$

Le data center consomme environ **$207{,}3\text{ MWh}$** par jour.

---

#### 4. Sensibilisation citoyenne et transition écologique
La consommation annuelle d'un foyer français moyen est de $4{,}5\text{ MWh}$. 
La consommation annuelle équivalente du data center est de :
$$207{,}3\text{ MWh/jour} \times 365\text{ jours} \approx 75\,664{,}5\text{ MWh/an}$$

Calculons le nombre de foyers équivalents :
$$\text{Nombre de foyers} = \frac{75\,664{,}5\text{ MWh}}{4{,}5\text{ MWh/foyer}} \approx 16\,814{,}3$$

Ce data center unique consomme autant d'électricité en une seule année qu'environ **$16\,814$ foyers français**. Cet exercice illustre l'enjeu énergétique majeur que représente le développement massif de l'intelligence artificielle, nécessitant de repenser l'efficacité des algorithmes ("Green AI") et le mix énergétique des infrastructures.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
