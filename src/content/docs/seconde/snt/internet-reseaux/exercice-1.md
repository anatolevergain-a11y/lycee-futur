---
title: "Exercice 1 : Architecture des réseaux et protocoles IP/TCP"
description: "Application pratique du chapitre Internet et Réseaux sociaux"
---

### 🌐 Contexte & Données scientifiques

L’Internet repose sur une architecture décentralisée formalisée par le modèle DoD (TCP/IP). Contrairement au réseau téléphonique commuté (circuit virtuel unique), Internet utilise la **commutation par paquets**. Un fichier numérique transmis entre une machine source et une machine destination est fragmenté en plusieurs segments. Chaque segment est encapsulé dans un paquet IP (Internet Protocol) muni d'une adresse source et d'une adresse destination.

Considérons un réseau de télécommunications simplifié où un message numérique de taille totale $S = 12\,000$ octets doit être transmis d'un serveur situé à Paris vers un terminal à Tokyo. 
Pour acheminer ce message, le protocole TCP (Transmission Control Protocol) segmente les données en $N$ paquets de données utiles de taille constante $L_d = 1\,000$ octets. 
Chaque paquet IP ajoute un en-tête de taille fixe $L_e = 40$ octets.

La liaison physique est caractérisée par les paramètres suivants :
* Débit nominal de la ligne : $D = 10\text{ Mbit/s}$ ($1\text{ Mbit} = 10^6\text{ bits}$).
* Vitesse de propagation du signal dans la fibre optique : $v = 2 \times 10^8\text{ m/s}$.
* Distance géographique Paris-Tokyo (en ligne brisée via les câbles sous-marins) : $d = 12\,000\text{ km}$.
* Le trajet traverse $R = 15$ routeurs intermédiaires. Chaque routeur applique un temps de traitement (mise en mémoire tampon et lecture de l'en-tête IP) estimé à $T_r = 0{,}5\text{ ms}$ par paquet.

*Rappel des unités :* $1\text{ octet} = 8\text{ bits}$.

---

### ❓ Énoncé

1. **Calcul de la structure des données :** Déterminer le nombre $N$ de paquets nécessaires pour transmettre le message, ainsi que la taille totale $L_p$ (en octets, puis en bits) d'un paquet IP unique incluant son en-tête.
2. **Analyse de la latence (Temps de propagation) :** Calculer le temps de propagation minimal $T_{\text{prop}}$ d'un paquet entre Paris et Tokyo. Discuter brièvement de la limite physique absolue de cette vitesse (constante universelle).
3. **Modélisation du temps de transmission :** Calculer le temps de transmission pur $T_{\text{trans}}$ d'un paquet sur la liaison (temps nécessaire pour placer tous les bits du paquet sur le canal à la vitesse du débit $D$). En déduire le temps total d'acheminement d'un paquet unique du serveur au terminal, en tenant compte des routeurs.
4. **Esprit critique et limites du modèle :** Le calcul précédent suppose un canal parfait et sans congestion. Dans la réalité d'Internet, le protocole TCP gère la perte éventuelle de paquets par acquittement (mécanisme ARQ). Si un paquet est corrompu ou perdu, son temps de trajet est multiplié par un facteur $3$. Quel est l'impact sur l'efficacité globale du réseau si le taux de perte binaire engendre une perte de $5\%$ des paquets ?

---

### 💡 Indice de méthode

* **Question 1 :** Divisez la taille totale du message par la charge utile d'un paquet. N'oubliez pas d'ajouter l'en-tête pour obtenir la taille totale du paquet. Convertissez les octets en bits en multipliant par 8 ($\times 8$).
* **Question 2 :** Utilisez la relation cinématique classique $t = \frac{d}{v}$ en veillant à homogénéiser les unités (mètres et secondes).
* **Question 3 :** Le temps de transmission $T_{\text{trans}}$ est le rapport entre la taille du paquet en bits et le débit $D$ en bits par seconde ($\text{bit/s}$). Le temps total cumule propagation, transmission et temps de traitement aux routeurs ($R \times T_r$).
* **Question 4 :** Calculez l'espérance mathématique du temps de parcours en pondérant le temps nominal et le temps en cas de perte par les probabilités respectives ($95\%$ de réussite, $5\%$ d'échec).

---

### 📋 Correction détaillée pas à pas

#### 1. Structure des données
* **Nombre de paquets $N$ :**
  La taille totale des données est $S = 12\,000$ octets et chaque paquet transporte $L_d = 1\,000$ octets.
  $$N = \frac{12\,000}{1\,000} = 12\text{ paquets}$$

* **Taille d'un paquet IP $L_p$ :**
  Chaque paquet comprend les données utiles et l'en-tête :
  $$L_p = L_d + L_e = 1\,000 + 40 = 1\,040\text{ octets}$$
  En convertissant en bits :
  $$L_{p,\text{bits}} = 1\,040 \times 8 = 8\,320\text{ bits}$$

#### 2. Temps de propagation
* Conversion de la distance en mètres : $d = 12\,000\text{ km} = 12\,000 \times 10^3\text{ m} = 1{,}2 \times 10^7\text{ m}$.
* Application de la formule de la vitesse de propagation :
  $$T_{\text{prop}} = \frac{d}{v} = \frac{1{,}2 \times 10^7}{2 \times 10^8} = 0{,}06\text{ s} = 60\text{ ms}$$
* *Note scientifique :* Cette vitesse ($\approx 66\,\%$ de la vitesse de la lumière dans le vide $c$) est une limite physique indépassable dictée par l'indice de réfraction du cœur de la fibre optique en silice.

#### 3. Temps de transmission et d'acheminement
* **Temps de transmission $T_{\text{trans}}$ :**
  Le débit est $D = 10\text{ Mbit/s} = 10 \times 10^6\text{ bit/s} = 10^7\text{ bit/s}$.
  $$T_{\text{trans}} = \frac{L_{p,\text{bits}}}{D} = \frac{8\,320}{10^7} = 0{,}000832\text{ s} = 0{,}832\text{ ms}$$

* **Temps total d'acheminement d'un paquet ($T_{\text{total}}$) :**
  Il additionne la transmission, la propagation et le temps cumulé dans les $R = 15$ routeurs :
  $$T_{\text{total}} = T_{\text{trans}} + T_{\text{prop}} + (R \times T_r)$$
  $$T_{\text{total}} = 0{,}832\text{ ms} + 60\text{ ms} + (15 \times 0{,}5\text{ ms})$$
  $$T_{\text{total}} = 0{,}832 + 60 + 7{,}5 = 68{,}332\text{ ms}$$

#### 4. Analyse critique et impact des pertes (Modèle stochastique simple)
* En situation réelle, le taux de perte de $5\%$ signifie que sur 100 paquets, 95 arrivent du premier coup et 5 nécessitent une retransmission (ce qui triple leur temps de trajet selon l'hypothèse).
* Calculons le temps moyen pondéré d'un paquet $T_{\text{moyen}}$ :
  $$T_{\text{moyen}} = (0{,}95 \times T_{\text{total}}) + (0{,}05 \times 3 \times T_{\text{total}})$$
  $$T_{\text{moyen}} = T_{\text{total}} \times (0{,}95 + 0{,}15) = 1{,}10 \times T_{\text{total}}$$
  $$T_{\text{moyen}} = 1{,}10 \times 68{,}332\text{ ms} \approx 75{,}17\text{ ms}$$
* **Conclusion critique :** Malgré un taux de perte relativement faible ($5\%$), l'architecture TCP/IP, par son mécanisme de retransmission garantissant la fiabilité, augmente la latence moyenne de $10\%$. Cela illustre un compromis fondamental en infographie et réseaux : le **compromis entre la fiabilité absolue des données** (garantie par TCP) et la **vitesse de transmission** (recherchée par les protocoles de type UDP utilisés pour la vidéo en direct).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
