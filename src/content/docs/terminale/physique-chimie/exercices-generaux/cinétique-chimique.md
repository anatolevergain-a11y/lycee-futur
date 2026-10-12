---
title: "Exercice : Cinétique chimique"
description: "Démonstration appliquée : Vitesse de dégradation des plastiques biodégradables en mer"
---

### 🌐 Contexte moderne & concret

Face à la pollution plastique des océans, l'industrie développe des biopolymères dits "biodégradables", tels que l'acide polylactique (PLA) ou le polyhydroxyalcanoate (PHA). L'objectif est de remplacer les plastiques conventionnels par des matériaux qui se dégradent naturellement sous l'action des micro-organismes marins. 

Cependant, la promesse d'une dégradation rapide est souvent mise à l'épreuve par les conditions réelles des milieux marins (température, salinité, luminosité). Pour évaluer l'efficacité réelle de ces matériaux, les chimistes étudient la cinétique de leur dégradation par hydrolyse enzymatique. 

Dans cet exercice, nous étudions la disparition d'un film plastique biodégradable de concentration massique $C(t)$ immergé dans de l'eau de mer à température constante. L'analyse expérimentale montre que la vitesse de disparition de ce plastique suit une loi cinétique d'ordre 1 par rapport à la concentration du polymère : 

$$\frac{dC(t)}{dt} = -k \cdot C(t)$$

Où $k$ est la constante de vitesse de dégradation (en $\text{jour}^{-1}$).

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Établissement de la loi horaire :** En résolvant l'équation différentielle, établir l'expression de la concentration $C(t)$ du plastique en fonction du temps $t$, de la concentration initiale $C_0 = C(0)$ et de la constante de vitesse $k$.
2. **Notion de temps de demi-réaction :** Définir le temps de demi-réaction $t_{1/2}$ et montrer que, pour une réaction d'ordre 1, $t_{1/2}$ s'exprime par la relation :
   $$t_{1/2} = \frac{\ln(2)}{k}$$
   Commenter le fait que $t_{1/2}$ ne dépende pas de la concentration initiale $C_0$.
3. **Exploitation des données expérimentales :** En eau de mer tempérée (zones tropicales, $T = 25 \, ^\circ\text{C}$), on mesure un temps de demi-réaction du PHA de $45 \, \text{jours}$. 
   * Calcule la valeur de la constante de vitesse $k$ (préciser l'unité).
   * Détermine le pourcentage de plastique initial $C(t)/C_0$ qui subsiste après $1 \, \text{an}$ ($365 \, \text{jours}$) d'immersion.
4. **Esprit critique et citoyen :** Dans les eaux froides des grands fonds ou des mers polaires ($T = 5 \, ^\circ\text{C}$), la valeur de $k$ est divisée par $10$. Quel est l'impact de la température sur la dégradation du plastique en mer ? En déduire la limite de la solution des "bioplastiques" face à la pollution des abysses.

---

### 💡 Indice

* **Question 1 :** Pense à séparer les variables (les termes en $C$ d'un côté, les termes en $t$ de l'autre) avant d'intégrer entre $0$ et $t$.
* **Question 2 :** Par définition, à $t = t_{1/2}$, la concentration du réactif a diminué de moitié par rapport à sa valeur initiale.
* **Question 3 :** Utilise la fonction logarithme népérien ($\ln$) pour isoler $k$, puis applique l'expression de $C(t)$ trouvée à la question 1.
* **Question 4 :** Relie la constante de vitesse au temps nécessaire pour que le plastique disparaisse. Pense aux ordres de grandeur géologiques ou écologiques.

---

### 📋 Correction détaillée (Pas à pas)

1. **Établissement de la loi horaire :**
   Partons de l'équation différentielle donnée :
   $$\frac{dC(t)}{dt} = -k \cdot C(t)$$
   Séparons les variables $C$ et $t$ :
   $$\frac{dC(t)}{C(t)} = -k \, dt$$
   Intégrons cette expression entre l'instant initial $t = 0$ (où la concentration vaut $C_0$) et l'instant $t$ (où la concentration vaut $C(t)$) :
   $$\int_{C_0}^{C(t)} \frac{dC}{C} = \int_{0}^{t} -k \, dt$$
   $$\ln\left(\frac{C(t)}{C_0}\right) = -k \cdot t$$
   En appliquant la fonction exponentielle des deux côtés, on obtient la loi horaire de la concentration :
   $$C(t) = C_0 \cdot e^{-k \cdot t}$$

2. **Notion de temps de demi-réaction :**
   Par définition, le temps de demi-réaction $t_{1/2}$ est l'instant pour lequel la concentration du réactif est égale à la moitié de sa concentration initiale :
   $$C(t_{1/2}) = \frac{C_0}{2}$$
   Réinjectons cette condition dans la loi horaire :
   $$\frac{C_0}{2} = C_0 \cdot e^{-k \cdot t_{1/2}}$$
   En simplifiant par $C_0$ :
   $$\frac{1}{2} = e^{-k \cdot t_{1/2}}$$
   Passons au logarithme népérien de chaque membre :
   $$\ln\left(\frac{1}{2}\right) = -k \cdot t_{1/2}$$
   Comme $\ln(1/2) = -\ln(2)$, il vient :
   $$-\ln(2) = -k \cdot t_{1/2} \implies t_{1/2} = \frac{\ln(2)}{k}$$
   *Commentaire :* L'expression de $t_{1/2}$ ne contient pas $C_0$. Pour une cinétique d'ordre 1, le temps nécessaire pour que la moitié du plastique disparaisse est indépendant de la quantité initiale de plastique présente dans l'eau.

3. **Exploitation des données expérimentales :**
   * *Calcul de la constante $k$ :*
     À partir de la formule précédente, on a :
     $$k = \frac{\ln(2)}{t_{1/2}} = \frac{\ln(2)}{45} \approx 1{,}54 \times 10^{-2} \, \text{jour}^{-1}$$
   * *Pourcentage de plastique subsistant après 1 an ($365 \, \text{jours}$) :*
     Utilisons la loi horaire :
     $$\frac{C(365)}{C_0} = e^{-k \cdot 365} = e^{-1{,}54 \times 10^{-2} \times 365} = e^{-5{,}621} \approx 3{,}61 \times 10^{-3}$$
     Soit en pourcentage :
     $$\text{Pourcentage restant} \approx 0{,}36 \, \%$$
     Après un an en eau chaude, il ne reste que $0{,}36 \, \%$ du PHA initial (il est quasi totalement dégradé).

4. **Esprit critique et citoyen :**
   * *Impact de la température :* Si $k$ est divisé par $10$ en eau froide ($k' = 1{,}54 \times 10^{-3} \, \text{jour}^{-1}$), le nouveau temps de demi-réaction devient :
     $$t'_{1/2} = \frac{\ln(2)}{1{,}54 \times 10^{-3}} \approx 450 \, \text{jours}$$
   * *Conclusion citoyenne :* Les plastiques dits "biodégradables" le sont efficacement dans des conditions spécifiques (chaleur, activité microbienne forte des eaux de surface). Dans les grands fonds marins ou les mers froides, leur vitesse de dégradation chute drastiquement. Ils persistent donc plusieurs années, voire décennies, et constituent toujours une menace pour la faune marine. Les bioplastiques ne sont pas une solution miracle universelle contre la pollution des océans ; la priorité reste la réduction drastique de notre consommation de plastique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
