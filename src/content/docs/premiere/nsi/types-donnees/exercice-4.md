---
title: "Exercice 4 : Format audio MP3 et numérisation"
description: "Application pratique du chapitre Représentation des données"
---

### 🌐 Contexte concret

La numérisation d'un signal audio (comme un morceau de musique ou la voix humaine) repose sur deux étapes fondamentales : l'**échantillonnage** (mesure de l'amplitude du signal à intervalle régulier) et la **quantification** (attribution d'une valeur numérique à chaque échantillon). 

Pour un CD audio standard, les paramètres sont les suivants : une fréquence d'échantillonnage de $44{,}1\text{ kHz}$ et une profondeur de codage de $16\text{ bits}$ par échantillon, le tout en stéréophonie (2 canaux). Cependant, ces fichiers sont trop lourds pour Internet. C'est pourquoi le format **MP3** a été inventé : il utilise une compression avec perte basée sur la psychoacoustique pour réduire considérablement la taille du fichier, souvent dans un rapport de 1 à 10 par rapport au format non compressé (WAV).

---

### ❓ Énoncé

On s'intéresse à l'enregistrement numérique d'un extrait musical.

1. Rappeler la définition et l'unité de la **fréquence d'échantillonnage**. Calculer le nombre d'échantillons capturés en $1\text{ seconde}$ pour une fréquence de $44{,}1\text{ kHz}$.
2. Calculer le débit binaire (en bits par seconde, puis en kilobits par seconde - kbps) d'un flux audio non compressé (PCM) stéréophonie, sachant que la fréquence d'échantillonnage est de $44{,}1\text{ kHz}$ et que la quantification utilise $16\text{ bits}$ par échantillon.
3. En déduire la taille en mégaoctets (Mo) d'un fichier audio non compressé d'une durée de $3\text{ minutes}$. *(On rappelle que $1\text{ Mo} = 10^6\text{ octets}$ ou $2^{20}\text{ octets}$, utilisez $1\text{ Mo} = 10^6\text{ octets}$ pour simplifier).*
4. Si ce même morceau est compressé au format MP3 avec un débit constant de $128\text{ kbps}$, quelle sera la nouvelle taille du fichier en mégaoctets ? Quel est le taux de compression obtenu ?

---

### 💡 Indice

* **Question 1 :** Le préfixe "kilo" en informatique ou dans les unités scientifiques standard vaut $10^3$. Attention au contexte, ici $1\text{ kHz} = 1000\text{ Hz} = 1000\text{ échantillons par seconde}$.
* **Question 2 :** Le débit binaire correspond au nombre de bits transmis ou stockés par seconde. Pensez à multiplier par 2 car le son est en *stéréo* (deux canaux : gauche et droit).
* **Question 3 :** $\text{Taille} = \text{Débit} \times \text{Durée}$. Attention à bien convertir les bits en octets ($1\text{ octet} = 8\text{ bits}$).
* **Question 4 :** Appliquez la même formule de calcul de taille avec le nouveau débit MP3, puis faites le rapport entre la taille non compressée et la taille compressée.

---

### 📋 Correction détaillée pas à pas

#### 1. Fréquence d'échantillonnage et nombre d'échantillons
La **fréquence d'échantillonnage** (notée $f_e$) désigne le nombre de mesures (d'échantillons) prises par seconde sur le signal analogique. Son unité est le Hertz ($\text{Hz}$).
On a $f_e = 44{,}1\text{ kHz} = 44{,}1 \times 10^3\text{ Hz} = 44\,100\text{ Hz}$.
Le nombre d'échantillons $N$ pour une durée $t = 1\text{ s}$ est :
$$N = f_e \times t = 44\,100 \times 1 = 44\,100\text{ échantillons}$$

#### 2. Calcul du débit binaire non compressé
Le débit binaire $D$ se calcule en multipliant la fréquence d'échantillonnage par la profondeur de codage (en bits) et par le nombre de canaux (2 pour la stéréo) :
$$D = f_e \times \text{prof}_1 \times \text{canaux}$$
$$D = 44\,100 \times 16 \times 2 = 1\,411\,200\text{ bits/s}$$
Pour convertir en kilobits par seconde ($\text{kbps}$) avec $1\text{ kb} = 1000\text{ bits}$ :
$$D = \frac{1\,411\,200}{1000} = 1\,411{,}2\text{ kbps}$$

#### 3. Taille du fichier non compressé pour $3\text{ minutes}$
La durée $t$ en secondes est :
$$t = 3 \times 60 = 180\text{ secondes}$$
La taille totale $T$ en bits est le produit du débit par la durée :
$$T_{\text{bits}} = D \times t = 1\,411\,200\text{ bits/s} \times 180\text{ s} = 254\,016\,000\text{ bits}$$
Convertissons cette taille en octets (sachant que $1\text{ octet} = 8\text{ bits}$) :
$$T_{\text{octets}} = \frac{254\,016\,000}{8} = 31\,752\,000\text{ octets}$$
Enfin, convertissons en mégaoctets ($\text{Mo}$) :
$$T_{\text{Mo}} = \frac{31\,752\,000}{10^6} \approx 31{,}75\text{ Mo}$$

#### 4. Taille avec le format MP3 et taux de compression
Avec un débit MP3 de $128\text{ kbps}$ (soit $128\,000\text{ bits/s}$), pour une durée de $180\text{ s}$, la nouvelle taille $T_{\text{MP3}}$ est :
$$T_{\text{MP3 bits}} = 128\,000 \times 180 = 23\,040\,000\text{ bits}$$
En octets :
$$T_{\text{MP3 octets}} = \frac{23\,040\,000}{8} = 2\,880\,000\text{ octets}$$
Soit en mégaoctets :
$$T_{\text{MP3 Mo}} = 2{,}88\text{ Mo}$$
Le **taux de compression** se calcule en comparant les tailles :
$$\text{Taux} = \frac{\text{Taille initiale}}{\text{Taille compressée}} = \frac{31{,}75}{2{,}88} \approx 11{,}02$$
Le fichier MP3 est donc environ $11$ fois plus petit que le fichier original non compressé, ce qui illustre l'efficacité des algorithmes de compression avec perte utilisés dans le format MP3.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
