---
title: "Exercice 2 : Capteurs IoT et communication radiofréquence"
description: "Application pratique du chapitre Photographie numérique et Objets connectés"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du déploiement d'une agriculture connectée, une exploitation viticole souhaite installer un réseau de capteurs IoT (Internet des Objets) pour surveiller en temps réel l'hygrométrie (humidité) des sols et prévenir le stress hydrique des vignes. 

Chaque station de mesure est équipée d'un capteur hygrométrique et d'un module de communication radiofréquence (LoRaWAN). Les données mesurées sont stockées localement sous forme de trames numériques avant d'être transmises à une passerelle centrale.

Afin de dimensionner correctement le système et d'évaluer sa viabilité énergétique et temporelle, nous disposons des données techniques suivantes :

* **Taille d'une mesure :** Une trame de données brute pèse $32 \text{ octets}$.
* **Fréquence d'échantillonnage :** Le capteur effectue une mesure toutes les $15 \text{ minutes}$.
* **Débit utile de la liaison radio :** $50 \text{ bit/s}$ (bits par seconde) dans les conditions de propagation locales.
* **Consommation énergétique du module radio :** 
  * En émission : $I_{\text{ém}} = 40 \text{ mA}$ sous une tension $U = 3{,}3 \text{ V}$.
  * En veille (*sleep*) : $I_{\text{veille}} = 1 \text{ }\mu\text{A}$ sous $U = 3{,}3 \text{ V}$.
* **Capacité de la batterie :** $Q = 2400 \text{ mAh}$ (accumulateur Lithium-ion).

*Rappel de cours :* $1 \text{ octet} = 8 \text{ bits}$.

---

### ❓ Énoncé

1. **Calcul du volume de données :** Déterminer la quantité de données (exprimée en octets, puis en bits) générée par un capteur sur une période de $24 \text{ heures}$.
2. **Durée de transmission :** En supposant que la transmission s'effectue en une seule fois par jour pour l'ensemble des données cumulées de ces $24 \text{ heures}$, calculer le temps nécessaire (en secondes) pour émettre ces données à travers le canal radiofréquence, compte tenu du débit utile.
3. **Analyse énergétique et compromis :** 
   * Calculer l'énergie consommée par le module lors de la phase d'émission quotidienne (exprimée en Joules, sachant que l'énergie $E$ se calcule par la formule $E = U \times I \times t$, avec $U$ en volts, $I$ en ampères et $t$ en secondes).
   * Sachant que la consommation en mode veille est quasi-permanente sur la journée, évaluer la durée de vie théorique de la batterie.
4. **Esprit critique et limites du modèle :** Le calcul précédent repose sur un modèle idéal. Discutez de deux facteurs physiques ou techniques réels (liés à l'environnement ou au protocole réseau) susceptibles de réduire significativement l'autonomie réelle du capteur par rapport au résultat théorique.

---

### 💡 Indice de méthode

* **Question 1 :** Calculez d'abord le nombre de mesures effectuées par jour en divisant le nombre de minutes dans une journée par l'intervalle entre chaque mesure. Multipliez ensuite par la taille d'une mesure, puis convertissez les octets en bits en multipliant par $8$.
* **Question 2 :** Utilisez la relation fondamentale liant le volume de données $V$ (en bits), le débit $D$ (en bit/s) et le temps $t$ (en secondes) : $V = D \times t$. Isolez $t$.
* **Question 3 :** Veillez à convertir toutes les unités dans le système international (secondes, ampères, volts) avant d'appliquer la formule de l'énergie. Pour l'autonomie, rappelez-vous que la majeure partie de la journée se passe en mode veille.
* **Question 4 :** Interrogez-vous sur la stabilité d'une liaison radiofréquence en milieu naturel (présence de végétation, météo) et sur la gestion des paquets perdus nécessitant des réémissions.

---

### 📋 Correction détaillée pas à pas

**1. Calcul du volume de données journalier :**
* *Nombre de mesures par jour :* Une journée compte $24 \text{ heures}$, soit $24 \times 60 = 1440 \text{ minutes}$. 
  Le capteur mesurant toutes les $15 \text{ minutes}$, le nombre de mesures $N$ est :
  $$N = \frac{1440}{15} = 96 \text{ mesures/jour}$$
* *Volume en octets :* Chaque mesure pèse $32 \text{ octets}$. Pour $96$ mesures :
  $$V_{\text{octet}} = 96 \times 32 = 3072 \text{ octets}$$
* *Volume en bits :* Sachant que $1 \text{ octet} = 8 \text{ bits}$ :
  $$V_{\text{bit}} = 3072 \times 8 = 24576 \text{ bits}$$

**2. Durée de transmission :**
La formule liant le volume $V$ (en bits), le débit $D$ (en bit/s) et le temps $t$ (en secondes) est $V = D \times t$, soit $t = \frac{V}{D}$.
$$t_{\text{transmission}} = \frac{24576 \text{ bits}}{50 \text{ bit/s}} = 491{,}52 \text{ secondes}$$
Soit environ $8 \text{ minutes et } 11 \text{ secondes}$ d'émission par jour.

**3. Analyse énergétique et autonomie :**
* *Énergie consommée en émission ($E_{\text{ém}}$) :*
  * $U = 3{,}3 \text{ V}$
  * $I_{\text{ém}} = 40 \text{ mA} = 0{,}04 \text{ A}$
  * $t_{\text{ém}} = 491{,}52 \text{ s}$
  
  $$E_{\text{ém}} = U \times I_{\text{ém}} \times t_{\text{ém}} = 3{,}3 \times 0{,}04 \times 491{,}52 \approx 64{,}88 \text{ Joules}$$

* *Consommation en mode veille ($E_{\text{veille}}$) :*
  La journée dure $24 \text{ heures}$, soit $86400 \text{ secondes}$. Le temps en veille est donc quasi-égal à la journée entière ($86400 - 491{,}52 \approx 85908{,}48 \text{ s}$).
  * $I_{\text{veille}} = 1 \text{ }\mu\text{A} = 1 \times 10^{-6} \text{ A}$
  
  $$E_{\text{veille}} = U \times I_{\text{veille}} \times t_{\text{veille}} = 3{,}3 \times 10^{-6} \times 85908{,}48 \approx 0{,}28 \text{ Joules par jour}$$

* *Évaluation de l'autonomie de la batterie :*
  L'énergie totale stockée dans la batterie de $2400 \text{ mAh}$ sous $3{,}3 \text{ V}$ est :
  $$\text{Capacité en Coulombs} = 2400 \times 10^{-3} \text{ A} \times 3600 \text{ s} = 8640 \text{ C}$$
  $$\text{Énergie totale} = Q \times U = (2400 \times 10^{-3} \times 3600) \times 3{,}3 \approx 28512 \text{ Joules}$$
  
  L'énergie quotidienne totale consommée est $E_{\text{total/jour}} = E_{\text{ém}} + E_{\text{veille}} \approx 64{,}88 + 0{,}28 = 65{,}16 \text{ J/jour}$.
  
  $$\text{Autonomie théorique} = \frac{28512 \text{ J}}{65{,}16 \text{ J/jour}} \approx 437 \text{ jours}$$
  Soit environ $1{,}2 \text{ année}$.

**4. Esprit critique et limites du modèle :**
Plusieurs facteurs peuvent altérer la validité de ce modèle théorique optimiste :
* **L'atténuation du signal radio et les réémissions :** En milieu agricole, la végétation (feuillage des vignes qui se développe au printemps) et l'humidité de l'air atténuent les ondes radio. Si le paquet de données n'est pas reçu correctement par la passerelle, le protocole impose souvent une réémission, augmentant directement le temps d'émission $t_{\text{ém}}$ et donc la consommation énergétique.
* **Le vieillissement de la batterie et l'influence thermique :** Le modèle suppose une capacité constante de la batterie. Or, les accumulateurs Lithium-ion voient leurs performances chuter en cas de températures basses (gel hivernal ou nuits fraîches de printemps), ce qui réduit la quantité d'énergie réellement restituable. De plus, l'auto-décharge chimique de la batterie n'a pas été prise en compte.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
