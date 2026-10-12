---
title: "Exercice 1 : Capteurs CCD, définition et profondeur de couleur"
description: "Application pratique du chapitre Photographie numérique et Objets connectés"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la modernisation d'un réseau de stations météorologiques connectées (IoT), on étudie l'intégration d'un capteur photographique numérique de type CCD (Charged-Coupled Device) destiné à l'observation automatisée de la couverture nuageuse. 

L'architecture d'un capteur CCD repose sur une matrice de photodiodes, convertissant une quantité de lumière (photons) en signal électrique. Pour obtenir une image couleur, chaque photodiode est généralement recouverte d'un filtre coloré (rouge, vert ou bleu selon une matrice de Bayer). 

Afin d'optimiser la transmission des données par le réseau sans fil (contraintes de bande passante et de consommation énergétique), les ingénieurs doivent évaluer précisément le volume de données brutes généré par une prise de vue.

**Données techniques du constructeur :**
* Dimensions de la matrice active : $4000$ pixels de largeur sur $3000$ pixels de hauteur.
* Codage informatique : Le système utilise une profondeur de couleur de $24 \text{ bits}$ par pixel (soit $8 \text{ bits}$ par canal RVB : Rouge, Vert, Bleu).
* Fréquence d'acquisition : $1 \text{ image toutes les heures}$.
* Facteur de compression sans perte (format PNG envisagé) : $0{,}6$ (le fichier compressé pèse $60\%$ du fichier brut).

---

### ❓ Énoncé

1. **Calcul de la définition et du nombre de pixels**
   Déterminer la définition totale de ce capteur (exprimée en mégapixels, notée $\text{Mpx}$). *Rappel : $1 \text{ Mpx} = 10^6 \text{ pixels}$.*

2. **Évaluation du poids d'une image brute**
   Calculer la taille (le "poids") informatique d'une image non compressée, d'abord en bits, puis en mégaoctets ($\text{Mo}$). 
   *Rappels utiles : $1 \text{ octet} = 8 \text{ bits}$ et $1 \text{ Mo} = 10^6 \text{ octets}$.*

3. **Impact de la compression et analyse du compromis technique**
   En tenant compte du facteur de compression sans perte, calculez la taille finale d'une image. 
   Si la station dispose d'une enveloppe de transmission quotidienne limitée à $200 \text{ Mo}$, déterminez si le rythme d'acquisition d'une image par heure est soutenable. Discutez des limites de ce modèle si l'on augmentait la fréquence d'acquisition à une image par minute.

---

### 💡 Indice de méthode

* **Question 1 :** Multipliez le nombre de pixels sur la largeur par le nombre de pixels sur la hauteur pour obtenir le nombre total de pixels, puis convertissez en mégapixels.
* **Question 2 :** Multipliez le nombre total de pixels par le nombre de bits nécessaires pour coder un pixel. Utilisez ensuite les puissances de dix pour effectuer les conversions d'unités ($1 \text{ octet} = 8 \text{ bits}$).
* **Question 3 :** Appliquez le taux de compression à la taille brute pour trouver le volume d'une image, puis calculez le volume total généré sur une journée de $24 \text{ heures}$. Comparez ce résultat à la limite autorisée en formulant une hypothèse critique sur les compromis entre qualité scientifique et contraintes techniques.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la définition du capteur
Le capteur comporte une largeur de $L = 4000 \text{ pixels}$ et une hauteur de $H = 3000 \text{ pixels}$.
Le nombre total de pixels $N$ de l'image est donné par le produit :
$$N = L \times H = 4000 \times 3000 = 12\,000\,000 \text{ pixels}$$

En convertissant en mégapixels ($\text{Mpx}$ sachant que $1 \text{ Mpx} = 10^6 \text{ pixels}$ ou $1\,000\,000 \text{ pixels}$) :
$$N = \frac{12\,000\,000}{10^6} = 12 \text{ Mpx}$$
La définition de l'appareil est donc de $12 \text{ mégapixels}$.

#### 2. Évaluation du poids d'une image brute
Chaque pixel est codé sur une profondeur de couleur de $24 \text{ bits}$. 
La taille totale $T_{\text{brute}}$ en bits pour une image est :
$$T_{\text{brute\_bits}} = N \times \text{profondeur}$$
$$T_{\text{brute\_bits}} = 12\,000\,000 \times 24 = 288\,000\,000 \text{ bits}$$

Convertissons cette valeur en octets sachant que $1 \text{ octet} = 8 \text{ bits}$ :
$$T_{\text{brute\_octets}} = \frac{288\,000\,000}{8} = 36\,000\,000 \text{ octets}$$

Enfin, convertissons en mégaoctets ($\text{Mo}$) en utilisant la convention décimale ($1 \text{ Mo} = 10^6 \text{ octets}$) :
$$T_{\text{brute\_Mo}} = \frac{36\,000\,000}{10^6} = 36 \text{ Mo}$$
Une image brute non compressée pèse $36 \text{ Mo}$.

#### 3. Impact de la compression et analyse critique
Le facteur de compression sans perte est de $0{,}6$. La taille d'une image compressée $T_{\text{comp}}$ est donc :
$$T_{\text{comp}} = 36 \text{ Mo} \times 0{,}6 = 21{,}6 \text{ Mo}$$

La station effectue une acquisition par heure, soit $24 \text{ images}$ par jour. Le volume total de données journalier $V_{\text{total}}$ est :
$$V_{\text{total}} = 24 \times 21{,}6 \text{ Mo} = 518{,}4 \text{ Mo}$$

**Analyse critique :**
L'enveloppe de transmission quotidienne autorisée est de $200 \text{ Mo}$. Or, le volume calculé ($518{,}4 \text{ Mo}$) dépasse largement cette limite. Le rythme d'acquisition d'une image par heure **n'est donc pas soutenable** avec les contraintes réseau actuelles.

*Pistes de compromis pour les ingénieurs (esprit critique) :*
* Réduire la définition spatiale (sous-échantillonnage de la matrice CCD).
* Augmenter le taux de compression (utiliser une compression avec perte de type JPEG, au risque de dégrader les détails fins utiles à l'analyse scientifique des nuages).
* Diminuer la fréquence d'acquisition ou adapter la connectivité de l'objet connecté (passer à une liaison 4G/5G ou par satellite, ce qui engendre un coût énergétique et financier accru).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
