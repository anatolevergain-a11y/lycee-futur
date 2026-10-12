---
title: "Exercice 4 : Impact environnemental des data centers"
description: "Application pratique du chapitre Internet et Réseaux sociaux"
---

### 🌐 Contexte concret

Derrière l'expression magique « le Cloud » se cache une réalité physique massive : des millions de serveurs informatiques stockés dans d'immenses bâtiments appelés *data centers* (centres de données). Chaque requête sur un moteur de recherche, chaque vidéo en streaming et chaque message envoyé traverse le réseau pour être traité et stocké dans ces infrastructures. 

Ces équipements consomment énormément d'électricité, non seulement pour faire fonctionner les processeurs, mais aussi pour alimenter les systèmes de climatisation indispensables pour éviter la surchauffe. En tant qu'élèves de Seconde en SNT, il est essentiel de comprendre l'empreinte environnementale de nos usages numériques quotidiens.

---

### ❓ Énoncé

1. **Calcul de consommation :** Un data center de taille moyenne consomme $150\text{ GWh}$ (gigawattheures) d'électricité par an. Sachant qu'un foyer français moyen (hors chauffage électrique) consomme environ $2\text{ MWh}$ (mégawattheures) par an, calculez le nombre de foyers équivalent que représente la consommation de ce data center.
   *(Rappel : $1\text{ GWh} = 1000\text{ MWh}$)*

2. **Impact climatique :** En France, l'intensité carbonique de l'électricité est d'environ $55\text{ g}$ de $\text{CO}_2$ par kilowatt-heure ($\text{kWh}$ produit). Si ce même data center était implanté en Pologne, où l'électricité dépend massivement du charbon, cette intensité monterait à $700\text{ g de }\text{CO}_2/\text{kWh}$. Calculez la masse de $\text{CO}_2$ émise (en tonnes) pour une année de fonctionnement dans chacun de ces deux pays.

3. **Le défi de la chaleur fatale :** Les serveurs rejetant de la chaleur, certains data centers essayent de valoriser cette « chaleur fatale » pour chauffer des bâtiments urbains. Si $20\text{ \%}$ de l'énergie consommée par le data center de la question 1 est récupérée sous forme de chaleur pour chauffer des logements, quelle quantité d'énergie (en $\text{GWh}$) est ainsi valorisée ?

---

### 💡 Indice

* **Question 1 :** Pensez à convertir toutes vos grandeurs dans la même unité (les mégawattheures, $\text{MWh}$) avant d'effectuer la division.
* **Question 2 :** Attention aux unités ! Il faut d'abord convertir la consommation annuelle de gigawattheures en kilowattheures ($\text{kWh}$), car l'empreinte carbone est donnée par $\text{kWh}$. Ensuite, divisez par $1\,000\,000$ pour obtenir des tonnes.
* **Question 3 :** Calculer $20\text{ \%}$ d'une quantité revient à multiplier cette quantité par $0,2$.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de l'équivalent en foyers

* **Étape 1 :** Convertissons la consommation du data center en $\text{MWh}$ pour qu'elle soit dans la même unité que celle des foyers.
  $$\text{Consommation} = 150\text{ GWh} = 150 \times 1\,000\text{ MWh} = 150\,000\text{ MWh}$$

* **Étape 2 :** Divisons cette consommation totale par celle d'un foyer moyen.
  $$\text{Nombre de foyers} = \frac{150\,000\text{ MWh}}{2\text{ MWh/foyer}} = 75\,000\text{ foyers}$$

* **Conclusion :** Un seul data center de taille moyenne consomme autant d'électricité qu'une ville d'environ $75\,000$ habitants (comme une ville de la taille de Pau ou de Bourges).

---

#### 2. Calcul des émissions de $\text{CO}_2$

* **Étape 1 :** Exprimons la consommation annuelle en $\text{kWh}$.
  Sachant que $1\text{ GWh} = 1\,000\,000\text{ kWh}$ :
  $$\text{Consommation en kWh} = 150\text{ GWh} \times 1\,000\,000 = 150\,000\,000\text{ kWh}$$

* **Étape 2 :** Calculons les émissions pour la France ($55\text{ g de }\text{CO}_2/\text{kWh}$).
  $$\text{Masse de }\text{CO}_2 = 150\,000\,000 \times 55 = 8\,250\,000\,000\text{ grammes}$$
  Convertissons en tonnes (sachant qu'$1\text{ tonne} = 1\,000\,000\text{ g}$) :
  $$\text{Masse en tonnes (France)} = \frac{8\,250\,000\,000}{1\,000\,000} = 8\,250\text{ tonnes de }\text{CO}_2$$

* **Étape 3 :** Calculons les émissions pour la Pologne ($700\text{ g de }\text{CO}_2/\text{kWh}$).
  $$\text{Masse de }\text{CO}_2 = 150\,000\,000 \times 700 = 105\,000\,000\,000\text{ grammes}$$
  $$\text{Masse en tonnes (Pologne)} = \frac{105\,000\,000\,000}{1\,000\,000} = 105\,000\text{ tonnes de }\text{CO}_2$$

* **Conclusion :** À performance technique égale, l'impact carbone d'un data center dépend énormément du mix énergétique du pays où il est implanté. En Pologne, il émet plus de 12 fois plus de $\text{CO}_2$ qu'en France en raison du recours massif au charbon.

---

#### 3. Valorisation de la chaleur fatale

* **Étape 1 :** Appliquons le pourcentage de récupération ($20\text{ \%}$) à la consommation totale du data center.
  $$\text{Énergie valorisée} = 150\text{ GWh} \times 0,2 = 30\text{ GWh}$$

* **Conclusion :** $30\text{ GWh}$ d'énergie thermique, qui auraient sinon été perdus dans l'atmosphère, peuvent ainsi être récupérés pour alimenter un réseau de chauffage urbain, illustrant une démarche de transition écologique dans la conception des infrastructures du numérique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
