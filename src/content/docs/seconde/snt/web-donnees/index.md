---
title: "Cours : Le Web, les Données et la Géolocalisation"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Le programme de Sciences Numériques et Technologie (SNT) en classe de Seconde aborde trois piliers fondamentaux d'Internet et de la société numérique : le Web, l'exploitation des données et la géolocalisation.

*   **Le Web (World Wide Web) :** Inventé en 1989 par Tim Berners-Lee au CERN, le Web est un système d'information hypertexte fonctionnant sur Internet. Il permet de consulter, via un navigateur, des pages reliées entre elles par des liens hypertextes. 
*   **Protocole HTTP / HTTPS :** *HyperText Transfer Protocol* (sécurisé par le protocole TLS/SSL pour le 'S'). C'est l'ensemble des règles régissant la communication entre un client (le navigateur) et un serveur Web.
*   **URL (Uniform Resource Locator) :** C'est l'adresse unique d'une ressource sur le Web. Elle se compose généralement d'un protocole, d'un nom de domaine et d'un chemin d'accès.
*   **Donnée (Data) :** Quantité d'information brute, représentée sous une forme numérique (texte, nombre, image, son) susceptible d'être traitée par un ordinateur.
*   **Donnée structurée (ex. format CSV) :** Donnée organisée de manière rigoureuse, souvent sous forme de tableaux où les lignes représentent des enregistrements et les colonnes des attributs. Le format CSV (*Comma-Separated Values*) est un format textuel ouvert représentant des données tabulaires séparées par des caractères (souvent des virgules ou des points-virgules).
*   **Géolocalisation :** Processus permettant de déterminer la position géographique d'un objet ou d'une personne sur la surface de la Terre grâce à un système d'information.
*   **Système GNSS (*Global Navigation Satellite System*) :** Système de posicionnement par satellites. Le plus connu et universellement utilisé est le système américain **GPS** (*Global Positioning System*).

---

## 📐 2. Formules et Propriétés fondamentales

### A. Structure d'une URL
Une URL standard respecte la syntaxe générale suivante :
$$\text{protocole}://\text{nom\_de\_domaine}/\text{chemin/vers/la/ressource}$$

### B. Représentation spatiale : La Géolocalisation par satellites
La position d'un récepteur (comme un smartphone) à la surface de la Terre est exprimée par un couple de coordonnées géographiques :
*   La **latitude** $\varphi$, mesurée en degrés du pôle Sud au pôle Nord ($-90^\circ$ à $+90^\circ$).
*   La **longitude** $\lambda$, mesurée en degrés par rapport au méridien de Greenwich ($-180^\circ$ à $+180^\circ$).

### C. Le principe de la trilatération spatiale
Pour déterminer sa position $(x, y, z)$ et corriger l'horloge de son récepteur, un système GNSS utilise la **trilatération** (et non la triangulation). 
La distance $d$ séparant un satellite d'un récepteur est calculée en mesurant le temps de trajet $\Delta t$ du signal radioélectrique (qui se propage à la vitesse de la lumière $c$) :
$$d = c \times \Delta t$$
Avec $c \approx 3 \times 10^8 \text{ m/s}$ (vitesse de la lumière dans le vide).

Pour obtenir une position tridimensionnelle précise (latitude, longitude, altitude), le récepteur doit recevoir simultanément les signaux d'au moins **4 satellites** :
1.  Un satellite permet de définir une sphère de position.
2.  Deux satellites réduisent l'intersection à un cercle.
3.  Trois satellites réduisent l'intersection à deux points (l'un étant sur la Terre, l'autre dans l'espace, éliminé de facto).
4.  Un **quatrième satellite** est indispensable pour synchroniser l'horloge du récepteur avec les horloges atomiques extrêmement précises des satellites, levant ainsi l'incertitude temporelle.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un récepteur GPS capte le signal d'un satellite. Le signal émis à l'instant $t_1$ est reçu à l'instant $t_2$. On mesure une durée de propagation $\Delta t = t_2 - t_1 = 0,072\text{ secondes}$. 
Calculez la distance $d$ séparant le récepteur de ce satellite, sachant que la vitesse de propagation des ondes électromagnétiques est $c = 3 \times 10^8 \text{ m/s}$. Exprimez le résultat en kilomètres.

**Résolution :**
1.  **Rappel de la formule fondamentale :**
    $$d = c \times \Delta t$$
2.  **Application numérique :**
    $$d = (3 \times 10^8) \times 0,072$$
    $$d = 21,6 \times 10^6 \text{ mètres}$$
3.  **Conversion en kilomètres :**
    $$d = \frac{21,6 \times 10^6}{10^3} = 21\,600 \text{ km}$$

**Réponse :** Le satellite se trouve à une distance de $21\,600\text{ km}$ du récepteur.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Confondre Internet et le Web :** C'est l'erreur classique. *Internet* est le réseau physique mondial d'interconnexion de machines. Le *Web* n'est qu'un service (parmi d'autres, comme le courrier électronique ou le transfert de fichiers FTP) qui fonctionne *sur* Internet.
*   **Confondre géolocalisation par satellites (GNSS) et géolocalisation par réseau cellulaire/Wi-Fi :** Le GPS ne nécessite pas de connexion Internet ou réseau mobile pour fonctionner (le récepteur est purement passif et écoute les ondes des satellites). En revanche, la géolocalisation par les antennes-relais (triangulation GSM) ou par les points d'accès Wi-Fi nécessite une connexion et exploite des bases de données cartographiques.
*   **Trilatération vs Triangulation :** Ne dites jamais qu'un GPS "triangule" votre position en mesurant des angles. Il fait de la *trilatération* en mesurant des **distances** (basées sur des temps de propagation).
*   **Attention aux unités dans les fichiers CSV :** Lors de l'analyse de données géographiques (par exemple des coordonnées de points d'intérêt), veillez à bien identifier le séparateur de colonnes (virgule `,` ou point-virgule `;`) ainsi que le format des nombres décimaux (le point `.` est la norme internationale, mais la virgule `,` est fréquente dans les fichiers francophones).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
