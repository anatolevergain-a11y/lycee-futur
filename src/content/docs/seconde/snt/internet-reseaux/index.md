---
title: "Cours : Internet et Réseaux sociaux"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Le fonctionnement d'Internet et des réseaux sociaux repose sur des concepts fondamentaux en informatique et en télécommunications qu'il convient de maîtriser rigoureusement.

*   **Internet :** Réseau informatique mondial interconnectant des millions de réseaux publics et privés grâce à une suite de protocoles standardisés (TCP/IP). Il s'agit de l'infrastructure physique et logique permettant l'acheminement des données.
*   **Web (World Wide Web) :** Système hypertexte fonctionnant sur Internet qui permet de consulter des pages via un navigateur à l'aide du protocole HTTP/HTTPS. Le Web est un service fonctionnant *sur* Internet, et non Internet lui-même.
*   **Paquet (Packet) :** Unité de données fondamentale transmise sur Internet. Les messages sont découpés en paquets pour le transport, puis réassemblés à destination. Chaque paquet contient des métadonnées (adresses IP source et destination) et une charge utile (les données proprement dites).
*   **Routeur :** Équipement matériel réseau chargé de diriger les paquets de données d'un réseau à un autre en déterminant le chemin optimal (routage).
*   **Protocole :** Ensemble de règles formelles qui régissent le format et la transmission des données entre appareils informatiques (ex. : IP, TCP, HTTP, DNS).
*   **Réseau social :** Plateforme numérique permettant de mettre en relation des utilisateurs afin de partager des contenus, de créer des interactions sociales et de constituer des communautés virtuelles.
*   **Algorithme de recommandation :** Suite d'instructions automatisées utilisées par les plateformes pour trier, hiérarchiser et suggérer des contenus aux utilisateurs en fonction de leurs données comportementales (historique de navigation, temps de visionnage, interactions).

---

## 📐 2. Formules et Propriétés fondamentales

L'analyse quantitative des réseaux et des transmissions de données repose sur plusieurs principes mathématiques et informatiques.

### A. Adressage IP et espace d'adressage
L'identification des machines sur Internet s'effectue principalement à l'aide d'adresses IP. 
*   En **IPv4**, une adresse est codée sur $4$ octets (soit $32$ bits). Le nombre total d'adresses théoriques disponibles est donné par :
    $$\text{Nombre d'adresses IPv4} = 2^{32} = 4\,294\,967\,296$$
*   En **IPv6**, pour pallier l'épuisement des adresses IPv4, l'adresse est codée sur $16$ octets (soit $128$ bits) :
    $$\text{Nombre d'adresses IPv6} = 2^{128} \approx 3{,}4 \times 10^{38}$$

### B. Débit, temps de transmission et de propagation
Le temps de transfert $t$ d'un fichier de taille $S$ (en octets ou bits) à travers un lien réseau de débit constant $D$ (en bits par seconde, bps) s'exprime par la relation :
$$t = \frac{S}{D}$$

*Attention aux unités :* $1 \text{ octet} = 8 \text{ bits}$. Il est indispensable de convertir la taille $S$ en bits si le débit $D$ est exprimé en bits par seconde.

### C. Graphes et Réseaux sociaux
En mathématiques, un réseau social est modélisé par un **graphe** $G = (V, E)$, où :
*   $V$ représente l'ensemble des sommets (*vertices*), c'est-à-dire les utilisateurs.
*   $E$ représente l'ensemble des arêtes ou arcs (*edges*), c'est-à-dire les relations ou abonnements entre utilisateurs.
La **connectivité** et la **centralité** (mesure du nombre de connexions d'un sommet) sont des propriétés fondamentales analysées pour étudier la propagation de l'information ou l'influence au sein du réseau.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un utilisateur souhaite télécharger une vidéo pédagogique de taille $S = 750 \text{ Mégaoctets (Mo)}$ sur une plateforme en ligne. Sa connexion Internet dispose d'un débit descendant (downlink) $D = 100 \text{ mégabits par seconde (Mbps)}$. 
*(On rappelle que dans ce contexte, $1 \text{ Mo} = 10^6 \text{ octets}$ et $1 \text{ Mbps} = 10^6 \text{ bits par seconde}$.)*

1. Calculer la taille du fichier en bits.
2. Déterminer le temps minimal théorique de téléchargement en secondes, puis en minutes et secondes.

**Résolution :**

*   **Étape 1 : Conversion de la taille du fichier en bits.**
    La taille $S$ est de $750 \text{ Mo}$.
    $$S = 750 \times 10^6 \text{ octets}$$
    Puisque $1 \text{ octet} = 8 \text{ bits}$ :
    $$S_{\text{bits}} = (750 \times 10^6) \times 8 = 6\,000 \times 10^6 \text{ bits} = 6 \times 10^9 \text{ bits} \text{ (ou } 6 \text{ gigabits)}$$

*   **Étape 2 : Calcul du temps de téléchargement.**
    On utilise la formule $t = \frac{S}{D}$ :
    $$t = \frac{6 \times 10^9 \text{ bits}}{100 \times 10^6 \text{ bps}} = \frac{6 \times 10^9}{10^8} = 60 \text{ secondes}$$

*   **Étape 3 : Conversion en minutes et secondes.**
    $$60 \text{ secondes} = 1 \text{ minute}$$

*Réponse :* Le temps minimal théorique nécessaire pour télécharger cette vidéo est de **1 minute**.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

1.  **Confondre Internet et le Web :** C'est l'erreur classique. Internet est l'infrastructure matérielle (les câbles, les routeurs, les protocoles de transport). Le Web n'est qu'une application (les pages consultées via un navigateur) qui utilise Internet.
2.  **Erreurs de conversion d'unités (Octets vs Bits) :** Ne pas multiplier par $8$ lors du passage des mégaoctets aux mégabits est l'erreur de calcul la plus fréquente. Soyez extrêmement rigoureux sur les notations : 
    *   $Mo$ ou $MB$ = Mégaoctets
    *   $Mb$ ou $Mbps$ = Mégabits (ou Mégabits par seconde)
3.  **Croire que les paquets empruntent tous le même chemin :** Sur Internet, les paquets d'un même message sont routés indépendamment les uns des autres. Ils peuvent arriver dans le désordre à destination et sont réassemblés par le protocole TCP.
4.  **Oublier le rôle neutre et technique des protocoles :** Dans les questions de cours ou d'argumentation, distinguez bien la dimension technique (fonctionnement des réseaux, routage, algorithmes) de la dimension sociologique ou juridique (modération, protection des données personnelles, cyberharcèlement). En SNT, l'analyse scientifique doit reposer sur des faits techniques avérés.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
