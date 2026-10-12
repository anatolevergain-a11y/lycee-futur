---
title: "Exercice 3 : Principes physiques du positionnement par satellites"
description: "Application pratique du chapitre Le Web, les Données et la Géolocalisation"
---

### 🌐 Contexte & Données scientifiques

Le système de positionnement par satellites (comme le système européen Galileo ou le GPS américain) repose sur la mesure précise du temps de parcours d'un signal radioélectrique émis par un satellite pour atteindre un récepteur (par exemple, un smartphone). 

Les ondes électromagnétiques, transportant les données de position et de temps du satellite, se propagent dans le vide et dans l'atmosphère à une vitesse proche de celle de la lumière dans le vide, notée $c$.

Données physiques et techniques :
* Vitesse de la lumière dans le vide : $c \approx 3{,}00 \times 10^8 \text{ m/s}$ (soit $300 000 \text{ km/s}$).
* Altitude moyenne d'une orbite de navigation (type Galileo) : $h \approx 23 222 \text{ km}$.
* Incertitude temporelle standard d'un récepteur grand public : $\Delta t = 10 \text{ nanosecondes}$ ($10 \times 10^{-9} \text{ s}$).
* Un récepteur a besoin théoriquement d'au moins $N$ satellites pour déterminer sa position exacte en 3D (latitude, longitude, altitude) et corriger l'écart de son horloge interne.

---

### ❓ Énoncé

1. **Calcul de distance (Modélisation simple)** : 
   Un satellite envoie un signal qui met $\Delta T = 77{,}4 \text{ millisecondes}$ ($77{,}4 \times 10^{-3} \text{ s}$) pour parvenir jusqu'au récepteur au sol. En faisant l'hypothèse simplificatrice d'une propagation en ligne droite à la vitesse $c$, calculez la distance $d$ séparant le satellite du récepteur. Exprimez le résultat en kilomètres.

2. **Analyse de l'incertitude de mesure** : 
   En raison de perturbations atmosphériques (traversée de l'ionosphère et de la troposphère) et d'imprécisions horlogères, la mesure du temps est entachée d'une incertitude. Calculez l'erreur de distance $\Delta d$ induite par une incertitude temporelle de $\Delta t = 10 \text{ ns}$. Qu'en déduisez-vous quant à la nécessité d'utiliser des horloges atomiques à bord des satellites ?

3. **Complexité géométrique et nombre de sources** : 
   Pour déterminer une position dans l'espace à trois dimensions $(x, y, z)$, un système mathématique d'intersection de sphères est utilisé. Expliquez pourquoi un récepteur a besoin d'au moins 4 satellites (et non 3) pour obtenir une géolocalisation terrestre fiable et précise.

---

### 💡 Indice de méthode

* **Question 1 :** Rappelez la relation fondamentale entre la distance $d$, la vitesse $v$ (ici $c$) et le temps $t$ ($d = v \times t$). Veillez à bien convertir toutes les unités dans le système international avant de calculer.
* **Question 2 :** Appliquez la même formule de propagation en remplaçant le temps global par l'incertitude temporelle $\Delta t$. Pensez à convertir les nanosecondes en secondes ($1 \text{ ns} = 10^{-9} \text{ s}$).
* **Question 3 :** Réfléchissez au nombre d'inconnues dans le système d'équations du récepteur. Outre les coordonnées spatiales $(x, y, z)$, l'horloge électronique bas de gamme du récepteur souffre d'un décalage temporel permanent par rapport au temps universel des satellites.

---

### 📋 Correction détaillée pas à pas

#### **1. Calcul de la distance satellite-récepteur**
* **Formule physique :** La distance $d$ parcourue par une onde électromagnétique se calcule par la relation :
  $$d = c \times \Delta T$$
* **Application numérique :** 
  * $c = 3{,}00 \times 10^8 \text{ m/s}$
  * $\Delta T = 77{,}4 \text{ ms} = 77{,}4 \times 10^{-3} \text{ s}$
  $$d = (3{,}00 \times 10^8) \times (77{,}4 \times 10^{-3})$$
  $$d = 23 220 000 \text{ mètres}$$
* **Conversion :** En exprimant cette distance en kilomètres :
  $$d = 23 220 \text{ km}$$
* *Commentaire scientifique :* Cette valeur est cohérente avec l'altitude des orbites des satellites de navigation, démontrant la validité de l'ordre de grandeur du temps de trajet mesuré.

---

#### **2. Analyse de l'incertitude de mesure**
* **Formule de l'erreur :** L'incertitude sur la distance $\Delta d$ due à l'incertitude sur le temps $\Delta t$ s'obtient de la même manière :
  $$\Delta d = c \times \Delta t$$
* **Application numérique :**
  * $\Delta t = 10 \text{ ns} = 10 \times 10^{-9} \text{ s}$
  $$\Delta d = (3{,}00 \times 10^8) \times (10 \times 10^{-9})$$
  $$\Delta d = 3 \text{ mètres}$$
* **Conclusion critique :** Une infime erreur de $10$ nanosecondes sur la mesure du temps engendre une erreur de $3$ mètres sur la position au sol. C'est pourquoi les satellites embarquent des horloges atomiques extrêmement stables (précision de l'ordre de la nanoseconde ou moins), et que les récepteurs au sol doivent compenser mathématiquement leurs propres dérives temporelles.

---

#### **3. Complexité géométrique et nombre de satellites**
* **Raisonnement mathématique :** 
  Pour se localiser dans l'espace, le récepteur doit déterminer quatre inconnues : ses trois coordonnées spatiales $(x, y, z)$ et le décalage temporel $\delta t$ entre son horloge interne (peu précise) et le temps de référence universel des satellites.
* **Résolution par intersection :**
  * Chaque satellite donne une sphère de position dont il est le centre, et dont le rayon est $R = c \times (\text{temps mesuré + décalage})$.
  * Mathématiquement, pour résoudre un système à **4 inconnues** $(x, y, z, \delta t)$, il faut au minimum **4 équations indépendantes**.
  * Par conséquent, 3 satellites suffiraient si l'horloge du récepteur était parfaite, mais **4 satellites sont rigoureusement indispensables** en pratique pour lever l'incertitude sur le temps du récepteur.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
