---
title: "Cours : Photographie numérique et Objets connectés"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

* **Pixel :** Contraction de *picture element*, il constitue la plus petite unité spatiale d'une image numérique. Chaque pixel possède une position ($x, y$) et une couleur codée informatiquement.
* **Matrice de Bayer :** Grille de filtres colorés (RVB : Rouge, Vert, Bleu) placée devant le capteur CCD ou CMOS d'un appareil photo numérique. Elle permet de reconstituer la couleur de chaque pixel par interpolation (dématriçage).
* **Définition d'une image :** Nombre total de pixels composant l'image, exprimé sous la forme $L \times H$ (Largeur $\times$ Hauteur).
* **Résolution :** Finesse de reproduction des détails, souvent exprimée en pixels par pouce ($\text{PPI}$ ou $\text{DPI}$).
* **Profondeur de couleur (ou dynamique) :** Nombre de bits utilisés pour coder la couleur de chaque pixel. Par exemple, un codage sur $8 \text{ bits}$ par canal (RVB) utilise $24 \text{ bits}$ au total par pixel.
* **Objet connecté :** Appareil électronique doté d'une capacité de calcul, de capteurs (pour mesurer son environnement), d'actuateurs et d'une interface de communication (Wi-Fi, Bluetooth, 4G/5G) lui permettant d'échanger des données avec un réseau ou d'autres objets.
* **Réseau d'objets et IoT :** L'Internet des Objets désigne l'interconnexion entre des objets physiques et Internet, permettant la collecte, le traitement et l'action à distance.

---

## 📐 2. Formules et Propriétés fondamentales

* **Nombre total de pixels ($N$) :**
  $$N = L \times H$$
  Où $L$ est la largeur en pixels et $H$ la hauteur en pixels.

* **Poids (ou taille) d'une image non compressée ($T$) :**
  $$T = N \times P$$
  Où $N$ est le nombre total de pixels et $P$ la profondeur de couleur (en octets).

* **Conversion des unités informatiques :**
  * $1 \text{ octet} = 8 \text{ bits}$
  * $1 \text{ Ko} (Kio) = 1024 \text{ octets}$
  * $1 \text{ Mo} (Mio) = 1024 \text{ Ko}$

* **Débit de transmission d'un objet connecté ($D$) :**
  $$D = \frac{V}{\Delta t}$$
  Où $V$ représente le volume de données transmises (en bits ou octets) et $\Delta t$ la durée de transmission (en secondes).

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un appareil photo numérique capture une image dont la définition est de $4000 \times 3000 \text{ pixels}$. Chaque pixel est codé sur $3 \text{ octets}$. 
1. Calculer le nombre total de pixels de cette image.
2. Calculer la taille de l'image en octets, puis en mégaoctets ($\text{Mo}$).

**Résolution :**

1. **Calcul du nombre total de pixels ($N$) :**
   $$N = L \times H$$
   $$N = 4000 \times 3000 = 12\,000\,000 \text{ pixels}$$
   L'image possède donc $12 \text{ millions de pixels}$ (soit $12 \text{ Mégapixels}$).

2. **Calcul de la taille de l'image ($T$) :**
   $$T = N \times P$$
   $$T = 12\,000\,000 \times 3 = 36\,000\,000 \text{ octets}$$
   
   Convertissons cette valeur en mégaoctets ($\text{Mo}$, en utilisant $1 \text{ Mo} = 10^6 \text{ octets}$ ou $1 \text{ Mio} = 1024^2 \text{ octets}$) :
   $$T = \frac{36\,000\,000}{10^6} = 36 \text{ Mo}$$
   *(Ou en unités binaires : $\frac{36\,000\,000}{1024^2} \approx 34,34 \text{ Mio}$)*.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention aux unités (bits vs octets) :** C'est l'erreur la plus fréquente. Si une profondeur de couleur est donnée en *bits*, il faut penser à la diviser par $8$ pour obtenir des *octets* avant de calculer la taille finale en octets.
* **Confondre Définition et Résolution :** Ne dites jamais qu'une image a une "résolution de $1920 \times 1080$ pixels". Il s'agit de sa **définition**. La résolution dépend de la taille physique sur laquelle l'image est affichée ou imprimée.
* **Compression d'image :** Rappelez-vous que les formules ci-dessus s'appliquent aux images brutes (non compressées). Des formats comme le JPEG utilisent des algorithmes de compression (avec perte) qui réduisent considérablement la taille du fichier par rapport à la valeur théorique calculée.
* **Objets connectés et vie privée :** Dans les questions de cours rédactionnelles, veillez à bien nuancer les aspects technologiques des objets connectés en mentionnant les enjeux éthiques liés à la collecte massive de données personnelles et à la cybersécurité.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
