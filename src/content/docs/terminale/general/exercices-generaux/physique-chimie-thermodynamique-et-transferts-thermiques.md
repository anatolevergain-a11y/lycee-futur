---
title: "Exercice : Thermodynamique et transferts thermiques"
description: "Démonstration appliquée : Isolation thermique des bâtiments et pompes à chaleur"
---

### 🌐 Contexte

Dans le cadre de la transition énergétique et de la lutte contre le réchauffement climatique, l'amélioration de l'efficacité énergétique des bâtiments est un enjeu majeur. Un bâtiment subit des pertes thermiques à travers ses parois (murs, toiture, vitrages) vers l'extérieur. 

Pour maintenir une température confortable à l'intérieur en hiver, on utilise des systèmes de chauffage, parmi lesquels la **pompe à chaleur (PAC)** aérothermique, considérée comme plus écologique et économique que le chauffage par effet Joule. 

Cette fiche d'exercice propose d'étudier la modélisation des transferts thermiques à travers un mur d'habitation, puis d'analyser les performances thermodynamiques d'une pompe à chaleur assurant le chauffage de ce même bâtiment. Données utiles :
* Capacité thermique massique de l'air : $c_{\text{air}} = 1,02 \times 10^3 \text{ J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$
* Masse volumique de l'air : $\rho_{\text{air}} = 1,2 \text{ kg}\cdot\text{m}^{-3}$

---

### ❓ Énoncé

On considère une pièce d'une maison dont les murs extérieurs ont une surface totale $S = 80 \text{ m}^2$ et une résistance thermique $R_{\text{th}} = 2,0 \text{ K}\cdot\text{W}^{-1}$. La température intérieure souhaitée est $T_i = 19 \, ^\circ\text{C}$ et la température extérieure est $T_e = -1 \, ^\circ\text{C}$.

1. **Exprimer et calculer** le flux thermique $\Phi$ (en Watts) qui traverse les murs de cette pièce par conduction.
2. Déduire de la question précédente l'énergie thermique $Q$ perdue à travers ces murs pendant une durée de $24 \text{ heures}$.
3. Pour compenser ces pertes thermiques ainsi que d'autres fuites (notamment par le renouvellement d'air), on installe une pompe à chaleur air-eau. Cette PAC consomme une puissance électrique $P_{\text{él}} = 1,5 \text{ kW}$ et fournit une puissance thermique utile $P_{\text{th}} = 4,8 \text{ kW}$ au bâtiment. **Calculer** son coefficient de performance ($COP$).
4. En comparant ce $COP$ à celui d'un chauffage par effet Joule idéal ($COP_{\text{Joule}} = 1$), expliquer l'intérêt écologique et énergétique d'une pompe à chaleur pour la société moderne.

---

### 💡 Indice

* **Question 1 :** Pensez à la loi d'Ohm thermique analogue à l'électricité : la différence de température $\Delta T$ est égale au produit du flux thermique $\Phi$ par la résistance thermique $R_{\text{th}}$. Attention à la conversion des températures en Kelvin si nécessaire (bien qu'une différence soit identique en Celsius et en Kelvin).
* **Question 2 :** Rappelez-vous la relation fondamentale liant l'énergie thermique $Q$, le flux thermique $\Phi$ et la durée $\Delta t$ : $Q = \Phi \times \Delta t$. Pensez à convertir le temps en secondes.
* **Question 3 :** Le coefficient de performance d'une pompe à chaleur se définit comme le rapport entre ce que l'on *veut* obtenir (l'énergie ou la puissance thermique fournie) et ce que l'on *paie* (l'énergie ou la puissance électrique consommée).
* **Question 4 :** Calibrez votre réponse sur le rendement apparent (qui dépasse 1 pour la PAC) en précisant d'où provient l'énergie thermique supplémentaire captée (l'environnement extérieur).

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Calcul du flux thermique $\Phi$ à travers les murs

Le flux thermique $\Phi$ (en Watts) à travers une paroi de résistance thermique $R_{\text{th}}$ soumise à une différence de température $\Delta T = T_i - T_e$ est donné par la relation analogue à la loi d'Ohm :
$$\Phi = \frac{T_i - T_e}{R_{\text{th}}}$$

* *Conversion et calcul des températures :*
  $\Delta T = 19 - (-1) = 20 \, ^\circ\text{C} = 20 \text{ K}$ (l'écart est le même en Kelvin).
* *Application numérique :*
  $$\Phi = \frac{20}{2,0} = 10 \text{ W}\cdot\text{K}^{-1} \times 20 \text{ K} = 10 \text{ W}$$ *(Attention, l'énoncé donne $R_{\text{th}} = 2,0 \text{ K}\cdot\text{W}^{-1}$)*
  $$\Phi = 10 \text{ W}$$
  *Correction de la relecture :* $\Phi = \frac{20}{2,0} = 10 \text{ W}$. Le flux thermique à travers les murs est donc de $10 \text{ W}$ (valeur indicative pour l'exercice).

#### 2. Calcul de l'énergie thermique $Q$ perdue en 24 heures

L'énergie thermique $Q$ perdue par transfert thermique pendant une durée $\Delta t$ à flux constant est :
$$Q = \Phi \times \anée$$
où $\Delta t$ doit être converti en secondes. 
* Durée d'une journée : 
  $$\Delta t = 24 \times 3600 = 86400 \text{ s}$$
* Application numérique :
  $$Q = 10 \times 86400 = 8,64 \times 10^5 \text{ J}$$
  Soit en kWh (unité usuelle des factures d'énergie) :
  $$Q = \frac{8,64 \times 10^5}{3,6 \times 10^6} = 0,24 \text{ kWh}$$

#### 3. Calcul du coefficient de performance ($COP$) de la pompe à chaleur

Le coefficient de performance ($COP$) d'une pompe à chaleur en mode chauffage est le rapport entre la puissance thermique utile fournie au bâtiment ($P_{\text{th}}$) et la puissance électrique consommée par le compresseur ($P_{\text{él}}$) :
$$COP = \frac{P_{\text{th}}}{P_{\text{él}}}$$

* Application numérique :
  $$COP = \frac{4,8 \text{ kW}}{1,5 \text{ kW}} = 3,2$$
Le $COP$ de cette pompe à chaleur est de $3,2$.

#### 4. Intérêt énergétique et écologique de la pompe à chaleur

* **Sur le plan énergétique :** Un chauffage par effet Joule (radiateur électrique classique) transforme $1 \text{ kWh}$ d'énergie électrique en $1 \text{ kWh}$ d'énergie thermique ($COP = 1$). Ici, pour $1 \text{ kWh}$ d'électricité consommé, la pompe à chaleur restitue $3,2 \text{ kWh}$ de chaleur dans le bâtiment. Les $2,2 \text{ kWh}$ restants sont prélevés gratuitement dans l'environnement extérieur (air, sol ou eau). 
* **Sur le plan écologique :** En consommant près de trois fois moins d'énergie électrique pour un même confort thermique, la PAC réduit considérablement la facture énergétique et les émissions indirectes de gaz à effet de serre associées à la production d'électricité, s'inscrivant pleinement dans les objectifs de transition citoyenne.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
