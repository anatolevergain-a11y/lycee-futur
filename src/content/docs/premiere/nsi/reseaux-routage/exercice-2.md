---
title: "Exercice 2 : Acheminement des paquets sur les réseaux locaux"
description: "Application pratique du chapitre Réseaux informatiques et routage"
---

### 🌐 Contexte & Données scientifiques

Dans une architecture de réseau local filaire de type Ethernet ($\text{IEEE 802.3}$), l'acheminement des unités de données s'appuie sur deux niveaux d'abstraction du modèle OSI :
1. **La couche 3 (Réseau) :** gère l'adressage logique global via le protocole $\text{IP}$ (ici $\text{IPv4}$). Deux hôtes communiquent directement si et seulement s'ils appartiennent au même sous-réseau, condition déterminée par l'application d'un masque de sous-réseau par un « ET logique » bit à bit.
2. **La couche 2 (Liaison de données) :** gère l'acheminement physique direct au sein du réseau local au moyen de trames Ethernet et d'adresses physiques $\text{MAC}$ (sur $48 \text{ bits}$, notées en hexadécimal). L'équipement central est le **commutateur** (*switch*), qui aiguille les trames port par port grâce à une table d'apprentissage dynamique (table d'adresses $\text{MAC}$ ou table CAM).

Lorsqu'une machine source souhaite transmettre un paquet $\text{IP}$ à une machine de son propre sous-réseau, elle doit encapsuler ce paquet dans une trame Ethernet. Pour découvrir l'adresse $\text{MAC}$ de destination associée à l'adresse $\text{IPv4}$ cible, elle utilise le protocole de résolution d'adresses **$\text{ARP}$** (*Address Resolution Protocol*).

#### Paramètres du réseau expérimental étudié
Un laboratoire de recherche dispose d'un réseau local en étoile constitué d'un commutateur à $4 \text{ ports}$ ($P_1, P_2, P_3, P_4$) interconnectant trois stations de travail et une passerelle par défaut.

| Machine | Nom d'hôte | Port commutateur | Adresse $\text{IPv4}$ | Adresse $\text{MAC}$ |
| :--- | :--- | :--- | :--- | :--- |
| Station 1 | $M_1$ | $P_1$ | $192.168.1.18 / 27$ | `00:1A:2B:3C:4D:01` |
| Station 2 | $M_2$ | $P_2$ | $192.168.1.42 / 27$ | `00:1A:2B:3C:4D:02` |
| Station 3 | $M_3$ | $P_3$ | $192.168.1.25 / 27$ | `00:1A:2B:3C:4D:03` |
| Passerelle | $R_1$ | $P_4$ | $192.168.1.30 / 27$ | `00:1A:2B:3C:4D:FE` |

*Données protocolaires :*
- En-tête Ethernet standard : $14 \text{ octets}$ (sans préambule) + Séquence de contrôle $\text{FCS}$ : $4 \text{ octets}$. Charge utile minimale : $46 \text{ octets}$.
- En-tête $\text{IPv4}$ minimal (sans options) : $20 \text{ octets}$.
- Message de requête/réponse $\text{ARP}$ : $28 \text{ octets}$ (complété par bourrage/padding à $46 \text{ octets}$ pour satisfaire la taille minimale de trame).

---

### ❓ Énoncé

#### Question 1 : Vérification de l'appartenance au domaine de diffusion local
1. Donnez la notation binaire du masque de sous-réseau correspondant au préfixe $/27$, puis déterminez l'adresse du sous-réseau et l'adresse de diffusion (*broadcast*) associée à la machine $M_1$.
2. En explicitant le calcul du « ET logique », déterminez si $M_1$ peut émettre directement vers $M_3$ sans solliciter la passerelle $R_1$. Montrez rigoureusement qu'il en va différemment pour une communication entre $M_1$ et $M_2$.

#### Question 2 : Dynamique d'apprentissage du commutateur et protocole ARP
Au temps $t_0 = 0 \text{ s}$, les caches $\text{ARP}$ de toutes les machines ainsi que la table $\text{MAC}$ du commutateur sont rigoureusement vides. La machine $M_1$ émet un paquet $\text{IP}$ contenant un message applicatif vers la machine $M_3$.
1. Détaillez la première trame émise par $M_1$ sur le port $P_1$ (type de protocole, adresse $\text{MAC}$ source, adresse $\text{MAC}$ destination).
2. Précisez la décision d'acheminement prise par le commutateur à la réception de cette première trame et donnez l'état de sa table d'adresses $\text{MAC}$ immédiatement après cette opération.
3. Décrivez la trame de réponse émise par $M_3$ ainsi que le comportement du commutateur lors de sa transmission vers $M_1$.

#### Question 3 : Rendement de transmission et surcharge protocolaire (*Overhead*)
La machine $M_1$ transmet finalement à $M_3$ une charge utile applicative de $d = 64 \text{ octets}$ transportée dans un paquet $\text{IPv4}$ standard.
1. Calculez la taille totale en octets de la trame Ethernet transportant cette donnée (en tenant compte de l'en-tête, des données $\text{IP}$ et du champ $\text{FCS}$).
2. Définissez et calculez l'efficacité protocolaire $\eta$ de cette transmission, définie par le rapport entre la quantité de données utiles applicatives et la quantité totale d'octets émis sur le support physique pour cette seule trame :
   $$\eta = \frac{d}{\text{Taille totale de la trame}}$$
3. Si l'on intègre l'étape de résolution préalable $\text{ARP}$ (requête émise + réponse reçue), déterminez le coût total réel en octets injectés sur le réseau pour transmettre ces $64 \text{ octets}$ de données.

#### Question 4 : Analyse critique et limites du modèle
Dans les réseaux de grande taille, le maintien des tables $\text{MAC}$ et l'usage de requêtes en diffusion (*broadcast*) posent des contraintes matérielles et de sécurité :
1. Les entrées d'une table $\text{MAC}$ ont une durée de vie limitée (*aging time*, typiquement $300 \text{ s}$). Quel compromis technique justifie de ne pas conserver indéfiniment une entrée apprise dans la table d'un commutateur ?
2. Quelle serait la conséquence sur le comportement du commutateur si un attaquant saturait délibérément la mémoire de la table d'adresses $\text{MAC}$ avec de fausses adresses (attaque par inondation de table $\text{CAM}$) ?

---

### 💡 Indice de méthode

- **Pour la Question 1 :** Convertissez uniquement le dernier octet des adresses $\text{IP}$ en binaire ($8 \text{ bits}$). Le préfixe $/27$ signifie que les $27$ premiers bits de l'adresse globale sont fixés à $1$ pour le masque ; le dernier octet comporte donc $3 \text{ bits}$ pour la partie réseau et $5 \text{ bits}$ pour la partie hôte ($27 - 24 = 3$).
- **Pour la Question 2 :** Distinguez bien une diffusion de niveau 2 (adresse $\text{FF:FF:FF:FF:FF:FF}$) et une diffusion de niveau 3. Le commutateur n'interprète pas les paquets $\text{IP}$ : il lit l'adresse $\text{MAC}$ source pour *apprendre* et l'adresse $\text{MAC}$ destination pour *commuter*. S'il ignore où se trouve la destination, il inonde (*flood*) tous les ports sauf le port entrant.
- **Pour la Question 3 :** N'oubliez aucun en-tête dans l'encapsulation : $\text{Trame} = \text{En-tête Ethernet} + \text{En-tête IP} + d + \text{FCS}$. Vérifiez si la somme atteint la taille minimale imposée par la norme Ethernet ($64 \text{ octets}$ du champ $\text{MAC}$ au champ $\text{FCS}$).

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Analyse de l'adressage $\text{IPv4}$

1. **Masque et adresses caractéristiques :**
   - Le préfixe $/27$ correspond à $27$ bits consécutifs à $1$ suivis de $5$ bits à $0$.
   - Écriture binaire du masque :
     $$11111111.11111111.11111111.11100000_2$$
     Soit en notation décimale pointée : $255.255.255.224$.
   - Analysons le dernier octet de $M_1$ ($18$) :
     $$18 = 00010010_2$$
   - Calcul du dernier octet de l'adresse réseau par ET logique :
     $$00010010_2 \ \& \ 11100000_2 = 00000000_2 = 0$$
     L'adresse du sous-réseau est donc : **$192.168.1.0 / 27$**.
   - L'adresse de diffusion (*broadcast*) s'obtient en positionnant les $5$ bits d'hôte à $1$ :
     $$00011111_2 = 31$$
     L'adresse de diffusion est donc : **$192.168.1.31$**.
   - La plage d'adresses d'hôtes assignables s'étend de $192.168.1.1$ à $192.168.1.30$.

2. **Appartenance au sous-réseau :**
   - Pour $M_3$ ($192.168.1.25$) :
     $$25 = 00011001_2 \implies 00011001_2 \ \& \ 11100000_2 = 00000000_2 = 0$$
     $M_1$ et $M_3$ ont la même adresse de sous-réseau ($192.168.1.0/27$). $M_1$ peut donc contacter $M_3$ **directement au niveau 2** (liaison locale).
   - Pour $M_2$ ($192.168.1.42$) :
     $$42 = 00101010_2 \implies 00101010_2 \ \& \ 11100000_2 = 00100000_2 = 32$$
     L'adresse réseau de $M_2$ est $192.168.1.32/27 \neq 192.168.1.0/27$. $M_1$ et $M_2$ sont sur deux sous-réseaux logiques distincts ; toute communication entre eux nécessite l'intervention d'un routeur (la passerelle $R_1$).

---

#### Question 2 : Résolution $\text{ARP}$ et commutation

1. **Première trame émise par $M_1$ :**
   - $M_1$ ne connaissant pas l'adresse physique de $M_3$, elle émet une requête **$\text{ARP}$** (*Who has 192.168.1.25? Tell 192.168.1.18*).
   - Paramètres de la trame Ethernet :
     - Type de protocole : `0x0806` ($\text{ARP}$).
     - Adresse $\text{MAC}$ source : `00:1A:2B:3C:4D:01` (adresse de $M_1$).
     - Adresse $\text{MAC}$ destination : `FF:FF:FF:FF:FF:FF` (diffusion générale de niveau 2).

2. **Traitement par le commutateur :**
   - **Apprentissage :** Le commutateur lit la source `00:1A:2B:3C:4D:01` sur le port $P_1$ et enregistre cette association dans sa table.
   - **Acheminement :** L'adresse de destination étant l'adresse de diffusion `FF:FF:FF:FF:FF:FF`, le commutateur réémet la trame sur **l'ensemble des autres ports actifs**, à savoir $P_2, P_3$ et $P_4$ (mécanisme de *flooding*).
   - État de la table $\text{MAC}$ :
     | Adresse MAC | Port |
     | :--- | :--- |
     | `00:1A:2B:3C:4D:01` | $P_1$ |

3. **Réponse de $M_3$ et acheminement :**
   - $M_2$ et $R_1$ ignorent la requête (l'IP ciblée ne leur correspondant pas). $M_3$ reconnaît son adresse $\text{IP}$ et répond par un paquet $\text{ARP Reply}$ unitaire (*unicast*).
   - Paramètres de la trame de réponse :
     - $\text{MAC}$ source : `00:1A:2B:3C:4D:03`.
     - $\text{MAC}$ destination : `00:1A:2B:3C:4D:01`.
   - À l'entrée sur le port $P_3$, le commutateur associe `00:1A:2B:3C:4D:03` au port $P_3$.
   - Ayant déjà appris que `00:1A:2B:3C:4D:01` est sur le port $P_1$, le commutateur transmet la trame **uniquement sur le port $P_1$** (filtrage et redirection ciblée, aucun flooding).

---

#### Question 3 : Calcul d'overhead et d'efficacité

1. **Taille de la trame de données :**
   - Données applicatives : $d = 64 \text{ octets}$.
   - En-tête $\text{IPv4}$ : $20 \text{ octets}$.
   - En-tête Ethernet + $\text{FCS}$ : $14 + 4 = 18 \text{ octets}$.
   - Taille totale de la trame :
     $$L_{\text{trame}} = 14 \text{ octets} + 20 \text{ octets} + 64 \text{ octets} + 4 \text{ octets} = 102 \text{ octets}$$
   *(Cette valeur est supérieure au minimum requis de $64 \text{ octets}$ pour une trame Ethernet, aucun bourrage n'est donc nécessaire).*

2. **Efficacité protocolaire :**
   $$\eta = \frac{64 \text{ octets}}{102 \text{ octets}} \approx 0{,}6275 \quad \text{soit} \quad 62{,}75 \text{ \%}$$
   *Nuance :* Près de $37{,}25 \text{ \%}$ du débit utile est consommé par les couches d'encapsulation ($\text{L2}$ et $\text{L3}$). Pour de petits messages, l'overhead est significatif.

3. **Coût réel incluant la phase d'initialisation $\text{ARP}$ :**
   - Une trame $\text{ARP}$ comprend $14 \text{ octets}$ (en-tête Ethernet) $+ 28 \text{ octets}$ (corps $\text{ARP}$) $+ 18 \text{ octets}$ de bourrage (*padding*) $+ 4 \text{ octets}$ ($\text{FCS}$) $= 64 \text{ octets}$.
   - Requête $\text{ARP}$ : $64 \text{ octets}$.
   - Réponse $\text{ARP}$ : $64 \text{ octets}$.
   - Trame de données : $102 \text{ octets}$.
   - Volume total injecté sur le support :
     $$V_{\text{total}} = 64 + 64 + 102 = 230 \text{ octets}$$
   Le rendement effectif pour cette première transmission chute temporairement à $\frac{64}{230} \approx 27{,}83 \text{ \%}$.

---

#### Question 4 : Analyse critique et limites du modèle

1. **Compromis sur la durée de vie des tables $\text{MAC}$ (*Aging Time*) :**
   - **Mobilité et réadressage :** Si une machine est débranchée d'un port pour être connectée à un autre, une entrée permanente entraînerait une rupture de connectivité (les trames continueraient d'être envoyées sur l'ancien port).
   - **Ressources mémoire finies :** La mémoire $\text{CAM}$ du commutateur est limitée. Purger les entrées inactives évite la saturation par des équipements temporaires.
   - **Contrepartie :** Un délai d'expiration trop court augmente la fréquence des inondations (*flooding*) lorsque le trafic reprend.

2. **Attaque par inondation de table $\text{CAM}$ (*MAC Flooding*) :**
   - Si la table $\text{CAM}$ est saturée par des milliers de fausses adresses $\text{MAC}$, le commutateur ne peut plus mémoriser de nouvelles associations légitimes.
   - Par conception de sécurité de repli (*fail-open*), pour ne pas bloquer les communications, le commutateur se met à commuter par inondation systématique (*flooding*) : il se comporte alors comme un simple **concentrateur** (*hub*).
   - **Conséquence :** La séparation des flux est rompue, ce qui permet à une machine malveillante d'écouter l'ensemble du trafic du réseau local par écoute passive (*sniffing*).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
