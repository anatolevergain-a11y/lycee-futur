---
title: "Exercice 2 : Protocole HTTPS, signatures numériques et certificats"
description: "Application pratique du chapitre Cryptographie et sécurité des données"
---

### 🌐 Contexte & Données scientifiques

Le protocole HTTPS (*HyperText Transfer Protocol Secure*) est l'élément fondamental de la sécurisation des échanges sur le Web. Il repose sur l'association de deux technologies : le protocole de transport sécurisé TLS (*Transport Layer Security*, qui succède à SSL) et le protocole applicatif HTTP. 

L'établissement d'une connexion HTTPS sécurisée nécessite une phase initiale de négociation, appelée *handshake* TLS. Au cours de cette phase, le serveur web authentifie son identité auprès du client (le navigateur) au moyen d'un **certificat numérique** émis par une Autorité de Certification (AC) reconnue. Ce certificat contient notamment la clé publique du serveur et est authentifié par une **signature numérique**.

Considérons un système de signature numérique asymétrique fondé sur le schéma RSA. Soit un message $M$ (ou un haché cryptographique de ce message $H(M)$). 
* La fonction de hachage utilisée est SHA-256, produisant une empreinte de taille fixe $L_H = 256 \text{ bits}$.
* La clé privée de l'Autorité de Certification est notée $d_{\text{AC}}$ et sa clé publique $e_{\text{AC}}$, associées au module $n_{\text{AC}}$ tel que la taille de la clé est $K_{\text{size}} = 3072 \text{ bits}$.

Dans un contexte industriel, la sécurité d'un tel système repose sur l'intégrité de la chaîne de certification, mais aussi sur des compromis stricts entre la sécurité algorithmique (longueur des clés), la latence réseau (temps de calcul et taille des paquets transmis lors du *handshake*) et la consommation énergétique des processeurs.

---

### ❓ Énoncé

1. **Analyse du mécanisme de hachage et du chiffrement asymétrique :** 
   Expliquer pourquoi le certificat d'un serveur ne se contente pas d'être chiffré directement avec la clé privée de l'Autorité de Certification, mais fait l'objet du chiffrement d'une empreinte (haché) par cette même clé privée. On exprimera la complexité et les gains en termes de performance.

2. **Vérification logique d'une signature :**
   Soit un certificat simplifié dont l'empreinte calculée par le client est $H(C) = \text{0x4A6F}$ (exprimée ici en hexadécimal pour l'exemple). Le client reçoit la signature numérique $S$ transmise par le serveur. Rappeler mathématiquement comment le client procède à la vérification de $S$ à l'aide de la clé publique $(e_{\text{AC}}, n_{\text{AC}})$ de l'AC. 

3. **Analyse critique de la chaîne de confiance et des compromis de sécurité :**
   Le protocole HTTPS repose sur un modèle hiérarchique où les navigateurs intègrent par défaut un magasin (*store*) contenant des centaines de racines d'Autorités de Certification tierces. 
   Discuter des limites de ce modèle centralisé face aux attaques par compromission d'une AC, en intégrant la notion de compromis entre facilité d'usage pour l'utilisateur non averti et surface d'attaque globale.

---

### 💡 Indice de méthode

* *Question 1 :* Pensez à comparer la taille des données brutes d'un certificat moderne (plusieurs kilo-octets) avec la taille d'une empreinte SHA-256 ($256 \text{ bits}$). Rappelez la complexité temporelle des algorithmes de chiffrement asymétrique (exponentiation modulaire) par rapport à la taille des données.
* *Question 2 :* La signature numérique $S$ est calculée par l'émetteur via $S = H(C)^{d_{\text{AC}}} \pmod{n_{\text{AC}}}$. Pour vérifier, le récepteur doit appliquer la transformation inverse utilisant la clé publique.
* *Question 3 :* Analysez le principe du "maillon le plus faible" (*weakest link*). Si une seule AC parmi les centaines présentes dans le magasin de confiance est compromise, quel est l'impact sur l'ensemble du système de validation des certificats ?

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse du mécanisme de hachage et du chiffrement asymétrique
* **Problématique :** Le chiffrement asymétrique (type RSA) est extrêmement coûteux en ressources processeur (opérations d'exponentiation modulaire sur de grands entiers, par exemple $3072 \text{ bits}$). De plus, les algorithmes de chiffrement asymétrique possèdent des limites strictes sur la taille maximale des blocs de données pouvant être chiffrés directement.
* **Solution par le hachage :** Plutôt que de chiffrer l'intégralité du certificat $C$ (qui pèse plusieurs kilo-octets), on applique une fonction de hachage cryptographique (ex: SHA-256) qui réduit le certificat à une empreinte de taille fixe : 
  $$H(C) \text{ de taille } L_H = 256 \text{ bits}$$
  L'Autorité de Certification chiffre ensuite uniquement cette empreinte de $256 \text{ bits}$ avec sa clé privée $d_{\text{AC}}$.
* **Gains et complexité :** 
  * *Performance :* Le temps de calcul pour chiffrer/déchiffrer un bloc réduit de $256 \text{ bits}$ est de plusieur ordres de grandeur inférieur à celui requis pour un document complet de plusieurs kilo-octets.
  * *Intégrité :* Grâce à la propriété de résistance aux collisions des fonctions de hachage, toute modification infime du certificat $C$ modifierait radicalement son empreinte $H(C)$, rendant la signature invalide.

#### 2. Vérification logique d'une signature
* **Principe de vérification :** 
  À la réception du certificat $C$ et de sa signature $S$, le navigateur du client procède en deux étapes :
  1. Il recalcule lui-même l'empreinte du certificat reçu en appliquant la fonction de hachage : $H_{\text{local}} = H(C)$.
  2. Il déchiffre la signature $S$ reçue en utilisant la clé publique $(e_{\text{AC}}, n_{\text{AC}})$ de l'Autorité de Certification obtenue depuis son magasin de confiance :
     $$H_{\text{dechiffre}} = S^{e_{\text{AC}}} \pmod{n_{\text{AC}}}$$
* **Validation :** 
  Le client compare $H_{\text{local}}$ et $H_{\text{dechiffre}}$. 
  Si $H_{\text{local}} \equiv H_{\text{dechiffre}} \pmod{n_{\text{AC}}}$, alors l'authenticité (la signature provient bien de l'AC) et l'intégrité (le certificat n'a pas été altéré) sont mathématiquement garanties.

#### 3. Analyse critique de la chaîne de confiance et des compromis de sécurité
* **Le modèle hiérarchique et ses vulnérabilités :** 
  Le modèle des AC repose sur une confiance transitive : si le navigateur fait confiance à l'AC racine, il fait confiance à tous les certificats émis par cette AC (ou par ses sous-AC). 
* **Limites et surface d'attaque :**
  * *Principe du maillon faible :* Le système de sécurité global est aussi sûr que son AC la moins bien sécurisée. Si une seule des centaines d'AC intégrées par défaut dans un système d'exploitation est compromise (attaque informatique, compromission physique, ou contrainte étatique), un acteur malveillant peut générer un certificat valide pour n'importe quel nom de domaine (par exemple, `falsifie.com` usurpant l'identité d'une banque).
  * *Compromis ergonomie / sécurité :* Pour qu'un utilisateur non averti puisse naviguer sans alertes de sécurité bloquantes à chaque connexion, les éditeurs de navigateurs pré-installent une liste vaste et hétérogène d'AC. Cela favorise l'utilisabilité (*usability*) au détriment d'une réduction drastique de la surface d'attaque.
* **Pistes d'évolution (limites du modèle actuel) :** 
  Des mécanismes modernes de transparence des certificats (*Certificate Transparency*, CT) tentent de pallier ces incertitudes en obligeant l'enregistrement public de tout certificat émis dans des registres append-only infalsifiables, permettant ainsi de détecter rapidement des émissions illégitimes.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
