---
title: "Exercice 1 : Calculs de pourcentages et ordres de grandeur"
description: "Application pratique du chapitre Nombres et calculs"
---

### 🌐 Contexte & Données scientifiques

La transition énergétique actuelle pose la question de l'optimisation des modes de transport. L'analyse de l'efficacité énergétique ne se limite pas à la consommation directe d'un véhicule ; elle doit intégrer le rendement global de la chaîne de conversion de l'énergie, ainsi que l'impact de la fabrication des infrastructures et du stockage.

Considérons une flotte de véhicules utilitaires légers. Une entreprise souhaite comparer l'utilisation de véhicules thermiques traditionnels à des véhicules électriques (VE). 

Les données scientifiques et techniques fournies par le constructeur et l'Agence de l'Environnement et de la Maîtrise de l'Énergie (ADEME) sont les suivantes :
* **Véhicule Thermique (VT) :** Consommation moyenne de carburant de $6{,}5\text{ L aux } 100\text{ km}$. La combustion d'un litre de gazole émet $2{,}68\text{ kg de CO}_2$.
* **Véhicule Électrique (VE) :** Consommation électrique moyenne de $18\text{ kWh aux } 100\text{ km}$ mesurée à la roue. 
* **Rendement du réseau et de la recharge :** Le rendement global entre la production d'électricité et son stockage effectif dans la batterie est estimé à $80\text{ \%}$ (pertes liées au transport et au chargeur).
* **Facteur d'émission de l'électricité :** En France, l'intensité carbonique moyenne de la production électrique est de $56\text{ g de CO}_2\text{ par kWh}$.

*Note méthodologique : L'analyse ci-dessous se restreint à la phase d'utilisation ("du puits à la roue" pour l'électricité et "du puits au réservoir" pour le thermique, en négligeant l'impact de la fabrication des batteries dans un premier temps par souci de simplification de modèle).*

---

### ❓ Énoncé

1. **Calcul d'ordre de grandeur :** En posant les calculs mentalement ou à l'aide d'estimations rapides, déterminer un ordre de grandeur de la masse de $\text{CO}_2$ émise par le Véhicule Thermique pour un parcours de $100\text{ km}$.
2. **Calcul de proportionnalité et pourcentages :** Calculer précisément l'émission réelle de $\text{CO}_2$ (en $\text{kg}$) pour le Véhicule Thermique sur un trajet de $15\text{ 000 km}$ (distance annuelle moyenne).
3. **Modélisation et rendement :** 
   * a) En tenant compte du rendement de la chaîne de recharge ($80\text{ \%}$), calculer la quantité réelle d'électricité (en $\text{kWh}$) qu'il faut prélever sur le réseau pour que le Véhicule Électrique parcoure $100\text{ km}$.
   * b) En déduire la masse de $\text{CO}_2$ émise indirectement par le Véhicule Électrique pour $100\text{ km}$, puis pour $15\text{ 000 km}$.
4. **Esprit critique et limites du modèle :** 
   * a) Calculer le pourcentage de réduction des émissions de $\text{CO}_2$ du VE par rapport au VT sur l'année.
   * b) Discuter de la pertinence de ce résultat au regard de l'hypothèse simplificatrice concernant la fabrication des véhicules et de la variabilité temporelle du mix énergétique.

---

### 💡 Indice de méthode

* Pour un ordre de grandeur, arrondissez les valeurs numériques à des nombres simples (par exemple, $2{,}68 \approx 3$ et $6{,}5 \in [6 ; 7]$) avant de multiplier.
* Un rendement de $80\text{ \%}$ signifie que l'énergie utile est égale à $80\text{ \%}$ de l'énergie prélevée. Attention au sens du calcul : si l'on connaît l'énergie utile (à la roue), l'énergie prélevée est *supérieure*.
* Pour calculer un pourcentage d'évolution (ou de réduction) entre une valeur initiale $V_i$ et une valeur finale $V_f$, on utilise la formule :
  $$\text{Taux de variation} = \frac{V_f - V_i}{V_i}$$

---

### 📋 Correction détaillée pas à pas

#### 1. Ordre de grandeur pour le Véhicule Thermique ($100\text{ km}$)
Pour obtenir un ordre de grandeur rapide :
* Consommation : $\approx 7\text{ L}$ pour $100\text{ km}$.
* Émission par litre : $\approx 3\text{ kg de CO}_2\text{/L}$.
* Calcul estimé : $7 \times 3 = 21\text{ kg de CO}_2$.
L'ordre de grandeur est d'environ $20\text{ à } 22\text{ kg de CO}_2$ pour $100\text{ km}$.

#### 2. Calcul précis des émissions du Véhicule Thermique ($15\text{ 000 km}$)
* **Pour $100\text{ km}$ :**
  $$\text{Masse} = 6{,}5 \times 2{,}68 = 17{,}42\text{ kg de CO}_2$$
* **Pour $15\text{ 000 km}$ :** Le trajet représente $\frac{15\text{ 000}}{100} = 150$ blocs de $100\text{ km}$.
  $$\text{Masse}_{\text{total, VT}} = 17{,}42 \times 150 = 2\text{ 613\text{ kg de CO}_2}$$

#### 3. Calcul pour le Véhicule Électrique
* **a) Énergie prélevée sur le réseau pour $100\text{ km}$ :**
  Soit $E$ l'énergie prélevée. Le rendement est de $80\text{ \%}$ (soit $0{,}8$), ce qui signifie que :
  $$\text{Énergie utile} = 0{,}8 \times E$$
  On sait que l'énergie utile à la roue est de $18\text{ kWh}$. Donc :
  $$18 = 0{,}8 \times E \implies E = \frac{18}{0{,}8} = \frac{18}{\frac{4}{5}} = 18 \times \frac{5}{4} = \frac{90}{4} = 22{,}5\text{ kWh}$$
  Il faut donc prélever $22{,}5\text{ kWh}$ sur le réseau.

* **b) Émissions indirectes de $\text{CO}_2$ :**
  * Pour $100\text{ km}$ ($22{,}5\text{ kWh}$ avec un facteur de $56\text{ g/kWh}$) :
    $$\text{Masse} = 22{,}5 \times 56 = 1\text{ 260\text{ g}} = 1{,}26\text{ kg de CO}_2$$
  * Pour $15\text{ 000 km}$ :
    $$\text{Masse}_{\text{total, VE}} = 1{,}26 \times 150 = 189\text{ kg de CO}_2$$

#### 4. Esprit critique et limites du modèle
* **a) Pourcentage de réduction :**
  Calculons le taux de variation des émissions du VE par rapport au VT :
  $$\text{Taux} = \frac{V_f - V_i}{V_i} = \frac{189 - 2\text{ 613}}{2\text{ 613}} = \frac{-2\text{ 424}}{2\text{ 613}} \approx -0{,}9276$$
  Soit une **réduction d'environ $92{,}8\text{ \%}$** des émissions à l'usage en faveur du véhicule électrique dans ces conditions.

* **b) Discussion scientifique :**
  Ce résultat, mathématiquement exact selon le modèle choisi, appelle plusieurs nuances scientifiques fondamentales :
  1. *L'analyse du cycle de vie (ACV) :* Ce calcul ignore la phase de fabrication (extraction du lithium, du cobalt, de l'aluminium, assemblage de la batterie). La production d'un véhicule électrique génère initialement une dette carbone nettement supérieure à celle d'un véhicule thermique.
  2. *La variabilité du mix énergétique :* Le facteur de $56\text{ g/kWh}$ est une moyenne française (fortement nucléarisée). Dans un pays dont l'électricité est produite majoritairement à partir de charbon ou de gaz, ce facteur peut dépasser $700\text{ g/kWh}$, modifiant radicalement le ratio d'efficacité.
  3. *L'effet rebond et la charge marginale :* Le modèle suppose un coût carbone moyen de l'électricité, alors que la recharge aux heures de forte pointe peut solliciter des centrales thermiques d'appoint, augmentant l'impact marginal réel.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
