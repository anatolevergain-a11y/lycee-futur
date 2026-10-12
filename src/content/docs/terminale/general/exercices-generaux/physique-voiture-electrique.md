---
title: "Défi Mobilité Verte : Bilan énergétique et autonomie d'un véhicule électrique"
description: "Étudiez le fonctionnement d'un accumulateur Li-ion, calculez les pertes par effet Joule et déterminez l'autonomie réelle ainsi que le temps de recharge d'une voiture électrique."
---

### 🌐 Contexte moderne & concret

Dans le cadre de la transition énergétique, les constructeurs automobiles électrifient massivement leur parc. Au cœur de cette révolution technologique, le pack de batterie lithium-ion constitue un organe critique dont il faut optimiser le stockage, la dissipation thermique et le rendement de conversion. Pour un ingénieur, concilier vitesse de recharge, autonomie sur autoroute et maîtrise des pertes par effet Joule représente un véritable défi d'ingénierie physique.

---

### ❓ Énoncé

Une berline électrique de dernière génération roule à une vitesse constante $v = 110\text{ km}\cdot\text{h}^{-1}$ sur une autoroute rectiligne et horizontale.

**Données du véhicule et de l'environnement :**
* Énergie totale stockée par la batterie pleinement chargée : $\mathcal{E}_{\text{tot}} = 60{,}0\text{ kWh}$
* Tension nominale aux bornes du pack de batterie : $U = 400\text{ V}$
* Résistance interne équivalente du pack complet : $r = 0{,}080\ \Omega$
* Puissance mécanique nécessaire pour maintenir la vitesse de $110\text{ km}\cdot\text{h}^{-1}$ : $P_{\text{meca}} = 18{,}0\text{ kW}$
* Rendement global de la chaîne de transmission électrique (onduleur + moteur électrique) : $\eta_{\text{chaine}} = 0{,}90$ (soit $90\%$)

#### Questions

1. **Puissance et courant de décharge**  
   Déterminer la puissance électrique $P_{\text{elec}}$ que la batterie doit délivrer au groupe motopropulseur pour maintenir cette vitesse. En déduire la valeur de l'intensité $I$ du courant électrique débité par la batterie, en considérant que la tension $U$ reste stable à $400\text{ V}$.

2. **Dissipation thermique et rendement de l'accumulateur**  
   Calculer la puissance dissipée par effet Joule $P_{\text{Joule}}$ à l'intérieur du pack de batterie lors de ce régime de croisière. Définir puis calculer le rendement énergétique $\eta_{\text{bat}}$ du pack de batterie seul pendant ce trajet.

3. **Autonomie sur autoroute**  
   Le système de gestion électronique (BMS) bloque la décharge à $10\%$ afin de préserver la durée de vie des cellules chimiques (la plage utilisable est donc de $100\%$ à $10\%$, soit $90\%$ de $\mathcal{E}_{\text{tot}}$). En tenant compte de la puissance électrique totale puisée dans la batterie ($P_{\text{tot}} = P_{\text{elec}} + P_{\text{Joule}}$), calculer la durée maximale $\Delta t$ de ce trajet, puis en déduire l'autonomie $d$ (en kilomètres) du véhicule à cette vitesse.

4. **Recharge ultra-rapide**  
   Le conducteur s'arrête sur une station équipée d'une borne ultra-rapide (superchargeur) délivrant une puissance constante de recharge $P_{\text{charge}} = 120\text{ kW}$ sous une tension moyenne de $400\text{ V}$.  
   Calculer l'intensité $I_{\text{charge}}$ fournie par la borne, puis la durée $\Delta t_{\text{charge}}$ (en minutes) nécessaire pour recharger la batterie de $10\%$ à $80\%$ de sa capacité totale (en supposant un rendement de charge de $100\%$).

---

### 💡 Indice

* Pour la question 1, rappelez-vous que le rendement de la chaîne cinématique relie la puissance mécanique utile à la puissance électrique consommée : $\eta = \frac{P_{\text{utile}}}{P_{\text{fournie}}}$.
* Pour la question 2, la résistance interne est parcourue par le courant total $I$ débité par le pack. La puissance chimique totale libérée est la somme de la puissance électrique utile fournie et des pertes thermiques internes.
* Pour la question 4, faites attention aux conversions d'unités pour la durée : $1\text{ kWh} = 3{,}6 \times 10^6\text{ J}$ ou travaillez directement en heures à partir de puissances en $\text{kW}$.

---

### 📋 Correction détaillée

#### 1. Puissance électrique et intensité du courant débité

* **Calcul de la puissance électrique $P_{\text{elec}}$ fournie par la batterie :**  
Le rendement de la chaîne de motorisation s'écrit :
$$\eta_{\text{chaine}} = \frac{P_{\text{meca}}}{P_{\text{elec}}}$$

D'où :
$$P_{\text{elec}} = \frac{P_{\text{meca}}}{\eta_{\text{chaine}}} = \frac{18{,}0\text{ kW}}{0{,}90} = 20{,}0\text{ kW} = 2{,}00 \times 10^4\text{ W}$$

* **Calcul de l'intensité $I$ :**  
La puissance électrique fournie en sortie de batterie s'exprime par la relation :
$$P_{\text{elec}} = U \times I$$

On en déduit l'intensité :
$$I = \frac{P_{\text{elec}}}{U} = \frac{2{,}00 \times 10^4\text{ W}}{400\text{ V}} = 50{,}0\text{ A}$$

Le pack d'accumulateurs débite un courant continu de $50{,}0\text{ A}$.

---

#### 2. Pertes par effet Joule et rendement de l'accumulateur

* **Puissance dissipée par effet Joule :**  
La puissance thermique dissipée au sein du pack en raison de sa résistance interne $r$ est donnée par la loi de Joule :
$$P_{\text{Joule}} = r \times I^2$$

Application numérique :
$$P_{\text{Joule}} = 0{,}080 \times (50{,}0)^2 = 0{,}080 \times 2500 = 200\text{ W} = 0{,}200\text{ kW}$$

* **Rendement intrinsèque $\eta_{\text{bat}}$ du pack :**  
La puissance chimique totale mobilisée par les réactions d'oxydoréduction est :
$$P_{\text{tot}} = P_{\text{elec}} + P_{\text{Joule}} = 20{,}0\text{ kW} + 0{,}200\text{ kW} = 20{,}2\text{ kW}$$

Le rendement de l'accumulateur correspond au rapport de la puissance utile délivrée sur la puissance totale mobilisée :
$$\eta_{\text{bat}} = \frac{P_{\text{elec}}}{P_{\text{tot}}} = \frac{20{,}0}{20{,}2} \approx 0{,}990 \quad \text{soit } 99{,}0\%$$

Ce résultat illustre l'excellent rendement de conversion électrochimique des accumulateurs Li-ion récents.

---

#### 3. Autonomie du véhicule

* **Énergie utilisable :**  
La batterie est déchargée sur une plage de $90\%$ :
$$\mathcal{E}_{\text{utile}} = 0{,}90 \times \mathcal{E}_{\text{tot}} = 0{,}90 \times 60{,}0\text{ kWh} = 54{,}0\text{ kWh}$$

* **Durée de décharge $\Delta t$ :**  
En tenant compte de la puissance totale tirée sur les cellules ($P_{\text{tot}} = 20{,}2\text{ kW}$) :
$$\Delta t = \frac{\mathcal{E}_{\text{utile}}}{P_{\text{tot}}} = \frac{54{,}0\text{ kWh}}{20{,}2\text{ kW}} \approx 2{,}673\text{ h}$$

*(Soit environ $2\text{ h } 40\text{ min}$)*.

* **Distance parcourue (autonomie) :**  
Le véhicule se déplace à une vitesse $v = 110\text{ km}\cdot\text{h}^{-1}$ :
$$d = v \times \Delta t = 110\text{ km}\cdot\text{h}^{-1} \times 2{,}673\text{ h} \approx 294\text{ km}$$

L'autonomie réelle sur autoroute dans ces conditions est d'environ **$294\text{ km}$**.

---

#### 4. Paramètres de la recharge rapide

* **Intensité de charge $I_{\text{charge}}$ :**  
La puissance délivrée sous une tension de $400\text{ V}$ est $P_{\text{charge}} = 120\text{ kW} = 1{,}20 \times 10^5\text{ W}$.  
$$I_{\text{charge}} = \frac{P_{\text{charge}}}{U} = \frac{1{,}20 \times 10^5\text{ W}}{400\text{ V}} = 300\text{ A}$$

Le câble et les connecteurs doivent être spécifiquement refroidis pour supporter un tel courant ($300\text{ A}$).

* **Durée de recharge de $10\%$ à $80\%$ :**  
La variation de charge correspond à une fraction $\Delta \text{SOC} = 80\% - 10\% = 70\% = 0{,}70$.  
L'énergie à transférer est donc :
$$\Delta \mathcal{E}_{\text{charge}} = 0{,}70 \times \mathcal{E}_{\text{tot}} = 0{,}70 \times 60{,}0\text{ kWh} = 42{,}0\text{ kWh}$$

La durée nécessaire s'obtient par :
$$\Delta t_{\text{charge}} = \frac{\Delta \mathcal{E}_{\text{charge}}}{P_{\text{charge}}} = \frac{42{,}0\text{ kWh}}{120\text{ kW}} = 0{,}35\text{ h}$$

Convertissons en minutes :
$$\Delta t_{\text{charge}} = 0{,}35 \times 60\text{ min} = 21{,}0\text{ min}$$

Il faut donc seulement **$21\text{ minutes}$** d'arrêt sur cette borne haute puissance pour récupérer près de $300\text{ km}$ d'autonomie.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
