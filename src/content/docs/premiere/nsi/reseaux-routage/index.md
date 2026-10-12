---
title: "Cours : Réseaux informatiques et routage"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

* **Modèle en couches (Modèle Internet / TCP-IP)** : Découpage conceptuel des protocoles réseau en quatre niveaux fonctionnels :
  * **Couche Application** (HTTP, DNS, FTP) : gère les données de haut niveau directement accessibles par l'utilisateur ou le logiciel.
  * **Couche Transport** (TCP, UDP) : assure la communication de bout en bout entre processus applicatifs (ports).
    * *TCP (Transmission Control Protocol)* : fiable, orienté connexion, garantit la réception et l'ordonnancement par acquittement ($ACK$).
    * *UDP (User Datagram Protocol)* : non fiable, en mode non connecté, privilégie la vitesse et la faible latence.
  * **Couche Réseau / Internet** (IPv4, IPv6) : gère l'adressage logique et l'acheminement des données d'une machine source vers une machine destination à travers différents réseaux interconnectés.
  * **Couche Accès réseau** (Ethernet, Wi-Fi) : gère la transmission physique des bits sur le média et l'adressage matériel (adresses MAC).

* **Encapsulation / Décapsulation** : Processus d'emboîtement des unités de données. Lors de l'émission, chaque couche ajoute un en-tête (*header*) spécifique aux données provenant de la couche supérieure. Les PDU (*Packet Data Unit*) successives sont :
  $$\text{Donnees (Application)} \longrightarrow \text{Segment (TCP/UDP)} \longrightarrow \text{Paquet (IP)} \longrightarrow \text{Trame (Ethernet)}$$
  À la réception, les en-têtes sont retirés séquentiellement : c'est la décapsulation.

* **Adresse IPv4** : Identifiant logique unique attribué à une interface réseau, codé sur $32 \text{ bits}$ (soit $4 \text{ octets}$), traditionnellement écrit en notation décimale pointée ($X.X.X.X$, avec $0 \le X \le 255$).

* **Masque de sous-réseau** : Chaîne de $32 \text{ bits}$ découpant une adresse IP en deux zones :
  * La partie **Réseau** (*NetID*) : identifie le réseau ou sous-réseau.
  * La partie **Hôte** (*HostID*) : identifie la machine sur ce réseau.
  Le masque est composé d'une suite continue de $1$ binaires suivie d'une suite de $0$ binaires. La notation CIDR (ex: $/24$) indique le nombre de bits à $1$ consécutifs.

* **Équipements d'interconnexion** :
  * **Commutateur (Switch)** : Équipement de couche 2 (Liaison). Il achemine les trames au sein d'un même réseau local (LAN) en utilisant une table de commutation associant adresses MAC et ports physiques.
  * **Routeur (Router)** : Équipement de couche 3 (Réseau). Doté d'au moins deux interfaces réseau distinctes, il interconnecte différents réseaux et détermine la route à emprunter pour acheminer les paquets IP.

---

## 📐 2. Formules et Propriétés fondamentales

### Décomposition d'un sous-réseau IPv4

Pour un réseau défini par une adresse IP et un masque de notation $/n$ ($n \in \{0, \dots, 32\}$) :

* **Nombre de bits attribués à la partie hôte** :
  $$h = 32 - n$$

* **Capacité d'adressage totale du bloc** :
  $$N_{\text{total}} = 2^{h} = 2^{32 - n}$$

* **Nombre d'adresses d'hôtes configurables** :
  Deux adresses sont strictement réservées au sein de chaque sous-réseau :
  1. L'adresse où tous les bits d'hôte sont à $0$ (Adresse Réseau).
  2. L'adresse où tous les bits d'hôte sont à $1$ (Adresse de Diffusion / *Broadcast*).
  $$N_{\text{utilisables}} = 2^{32 - n} - 2$$

### Calculs logiques d'adressage

Soit $A_{\text{IP}}$ l'adresse de la machine et $M$ le masque de sous-réseau associés :

* **Adresse Réseau** : obtenue par l'opération logique ET bit à bit (opérateur $\text{AND}$) :
  $$A_{\text{reseau}} = A_{\text{IP}} \text{ AND } M$$

* **Adresse de Diffusion (*Broadcast*)** : obtenue en mettant tous les bits de la partie hôte à $1$ :
  $$A_{\text{broadcast}} = A_{\text{reseau}} \text{ OR } (\text{NOT } M)$$

### Principe de décision d'acheminement local vs routé

Soit une machine source $S$ d'adresse $A_S$, de masque $M_S$ et de passerelle par défaut $P$. $S$ souhaite émettre un paquet vers une machine destination $D$ d'adresse $A_D$ :

1. La machine $S$ calcule le réseau de destination perçu :
   $$R_{\text{test}} = A_D \text{ AND } M_S$$
2. **Alternative décisionnelle** :
   * **Cas direct (même réseau local)** : Si $R_{\text{test}} = (A_S \text{ AND } M_S)$, la transmission est directe. Le paquet est encapsulé dans une trame adressée directement à l'adresse MAC de $D$ (obtenue par le protocole ARP).
   * **Cas indirect (réseau distant)** : Si $R_{\text{test}} \neq (A_S \text{ AND } M_S)$, le paquet IP conserve l'IP source $A_S$ et l'IP destination $A_D$, mais il est encapsulé dans une trame adressée à l'adresse MAC de la passerelle par défaut $P$.

---

## 💡 3. Exemple d'application résolu

### Énoncé

Un administrateur réseau configure une machine cliente avec les paramètres suivants :
* **Adresse IPv4** : $192.168.10.100$
* **Masque de sous-réseau** : $255.255.255.192$ (notation $/26$)
* **Passerelle par défaut (*Gateway*)** : $192.168.10.65$

1. Déterminer l'adresse du réseau auquel appartient cette machine.
2. Déterminer l'adresse de diffusion (*broadcast*) de ce réseau.
3. Préciser la plage d'adresses IP assignables aux hôtes et le nombre maximal d'hôtes.
4. La machine émettrice souhaite communiquer avec un serveur d'adresse IP $192.168.10.150$. Indiquer si la communication nécessite l'intervention de la passerelle.

---

### Résolution détaillée

#### 1. Calcul de l'adresse réseau
Le masque est $/26$, les 3 premiers octets ($24 \text{ bits}$) sont identiques. Analysons le quatrième octet :
* Quatrième octet de l'adresse IP : $100_{10} = 01100100_2$
* Quatrième octet du masque : $192_{10} = 11000000_2$

Appliquons l'opérateur logique ET bit à bit ($\text{AND}$) sur le quatrième octet :
$$\begin{array}{r@{\quad}l}
  01100100_2 & (100) \\
\text{AND}\; 11000000_2 & (192) \\
\hline
  01000000_2 & (64)
\end{array}$$

L'adresse du réseau est donc :
$$A_{\text{reseau}} = 192.168.10.64$$

#### 2. Calcul de l'adresse de diffusion
Le masque possède $26 \text{ bits}$ à $1$, il reste donc :
$$h = 32 - 26 = 6 \text{ bits d'hote}$$
Pour obtenir l'adresse de broadcast, fixons les $6$ derniers bits à $1$ :
$$01000000_2 \text{ (base reseau)} \longrightarrow 01111111_2 = 64 + 32 + 16 + 8 + 4 + 2 + 1 = 127_{10}$$

L'adresse de diffusion est donc :
$$A_{\text{broadcast}} = 192.168.10.127$$

#### 3. Plage d'adresses disponibles et capacité
* Première adresse disponible : $A_{\text{reseau}} + 1 = 192.168.10.65$
* Dernière adresse disponible : $A_{\text{broadcast}} - 1 = 192.168.10.126$
* Nombre de machines configurables :
  $$N_{\text{utilisables}} = 2^{6} - 2 = 64 - 2 = 62 \text{ machines}$$

#### 4. Analyse de la destination $192.168.10.150$
Déterminons le sous-réseau perçu pour la destination par application du masque source :
* Quatrième octet de la cible : $150_{10} = 10010110_2$
* Calcul :
$$\begin{array}{r@{\quad}l}
  10010110_2 & (150) \\
\text{AND}\; 11000000_2 & (192) \\
\hline
  10000000_2 & (128)
\end{array}$$

Le réseau de destination calculé est $192.168.10.128 \neq 192.168.10.64$.
Les deux adresses n'appartiennent pas au même sous-réseau logique. **L'intervention de la passerelle par défaut ($192.168.10.65$) est donc obligatoire** pour router le paquet vers sa destination.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Oubli de la soustraction des deux adresses réservées** : Pour tout sous-réseau $/n$, la formule du nombre de machines utilisables est impérativement $2^{32-n} - 2$. Ne jamais compter l'adresse réseau (tout à $0$) ni l'adresse de broadcast (tout à $1$).
* **Confusion entre Switch et Routeur** :
  * Un commutateur lit l'en-tête de la couche 2 (adresse MAC) et ne modifie pas les trames.
  * Un routeur lit l'en-tête de la couche 3 (adresse IP), décrémente le TTL (*Time To Live*), et ré-encapsule le paquet dans une nouvelle trame avec de nouvelles adresses MAC source et destination.
* **Erreur d'inversion TCP / UDP** :
  * Retenir que TCP offre un flux intègre et ordonné au prix d'un surcoût temporel (idéal pour le Web, le transfert de fichiers, les emails).
  * Retenir qu'UDP n'offre aucun contrôle d'erreur ni de réémission, mais délivre un débit continu avec un temps de latence minimal (idéal pour le streaming en direct ou le jeu vidéo en temps réel).
* **Application erronée du masque lors du test de routage** : Lors d'un test d'appartenance au réseau local, c'est **le masque de la machine émettrice** qui doit être appliqué à l'IP de la machine cible pour vérifier si le résultat coïncide avec son propre réseau.
* **Conversion binaire rigoureuse** : Les erreurs de calcul proviennent quasi systématiquement du dernier octet. Il est recommandé de poser explicitement la conversion binaire sur la copie pour sécuriser les points.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
