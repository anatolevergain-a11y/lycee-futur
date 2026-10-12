---
title: "Exercice 3 : Encodage des caractères (ASCII, UTF-8)"
description: "Application pratique du chapitre Représentation des données"
---

### 🌐 Contexte & Données scientifiques

En informatique, les ordinateurs ne manipulent que des nombres binaires (suites de $0$ et de $1$). Pour stocker et échanger du texte, il est donc nécessaire de normaliser une correspondance entre des symboles graphiques (lettres, chiffres, signes de ponctuation, symboles mathématiques) et des valeurs numériques.

Historiquement, la norme **ASCII** (*American Standard Code for Information Interchange*), publiée en 1963, utilise des mots de $7 \text{ bits}$ pour coder $2^7 = 128$ caractères. Bien que suffisante pour l'anglais de base, cette table présente une limite structurelle majeure : l'absence de caractères accentués et de symboles non latins. 

Pour répondre aux besoins internationaux, la norme **UTF-8** (*Unicode Transformation Format - 8 bits*) a été introduite. UTF-8 est un encodage à **taille variable** :
- Les caractères de la plage ASCII (de $\text{U+0000}$ à $\text{U+007F}$) sont codés sur **un seul octet** ($8 \text{ bits}$) et sont strictement identiques à l'ASCII, garantissant une rétrocompatibilité totale.
- Les caractères situés au-delà sont encodés sur **2, 3 ou 4 octets** selon leur position dans la table Unicode.

Soit $C$ un caractère dont le point de code Unicode nécessite $n$ octets en UTF-8. Le tableau ci-dessous indique la structure des octets générés :

| Nombre d'octets | Structure binaire en UTF-8 | Bits de données disponibles |
| :---: | :--- | :---: |
| **1** | `0xxxxxxx` | $7$ bits |
| **2** | `110xxxxx 10xxxxxx` | $11$ bits |
| **3** | `1110xxxx 10xxxxxx 10xxxxxx` | $16$ bits |
| **4** | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` | $21$ bits |

*Analyse critique :* Le compromis fondamental de l'UTF-8 réside dans l'efficacité spatiale. Il minimise l'empreinte mémoire pour les textes occidentaux (1 octet par caractère), mais induit un surcoût pour les textes en langues asiatiques (souvent 3 octets par caractère), tout en résolvant le problème critique de l'interopérabilité mondiale que l'ASCII ne pouvait traiter.

---

### ❓ Énoncé

1. **Analyse de l'ASCII :** Le caractère `'A'` possède le code décimal $65$. 
   Convertissez cette valeur en écriture binaire sur $7 \text{ bits}$, puis déduisez-en sa représentation exacte sous forme d'un octet en ASCII étendu (où le bit de poids fort est fixé à $0$).

2. **Encodage UTF-8 sur un octet :** En déduire l'octet unique généré par l'encodage UTF-8 du caractère `'A'` (exprimé en hexadécimal).

3. **Encodage UTF-8 multi-octets :** Le caractère accentué `'é'` possède le point de code Unicode $\text{U+00E9}$. 
   - Exprimez cette valeur en base $2$ sur $16 \text{ bits}$.
   - En suivant le modèle de l'UTF-8 pour un codage sur 2 octets ($\text{110xxxxx 10xxxxxx}$), répartissez les bits de données et donnez la séquence des deux octets obtenus en hexadécimal.

4. **Étude d'impact et compromis (Esprit critique) :** 
   Considérons un fichier texte brut de $1000$ caractères composé exclusivement de lettres minuscules non accentuées ('a' à 'z'), et un second fichier de $1000$ caractères composé exclusivement du caractère `'é'`.
   Calculez la taille en octets de chaque fichier stocké en UTF-8. Discutez de l'efficacité de cet encodage selon la nature du corpus textuel traité.

---

### 💡 Indice de méthode

- **Conversion décimal/binaire :** Procédez par divisions successives par $2$ ou utilisez les puissances de $2$ ($1, 2, 4, 8, 16, 32, 64, 128$).
- **Conversion binaire/hexadécimal :** Regroupez les bits par blocs de $4$ (en partant de la droite) pour chaque quartet.
- **Remplissage des masques UTF-8 :** Alignez les bits de gauche à droite de votre valeur binaire dans les positions indiquées par les lettres $x$ du masque de la norme, en complétant par des zéros à gauche si nécessaire.

---

### 📋 Correction détaillée pas à pas

#### 1. Conversion de `'A'` en ASCII
- Le nombre décimal $65$ converti en binaire s'écrit :
  $$65_{10} = 64 + 1 = 2^6 + 2^0 = 1000001_2$$
- Sur $7 \text{ bits}$, on obtient : `1000001`.
- En ASCII standard (ou étendu avec un bit de poids fort à $0$), l'octet complet est :
  $$\text{Byte} = 01000001_2$$

#### 2. Encodage UTF-8 du caractère `'A'`
- Puisque le point de code de `'A'` est inférieur à $\text{U+007F}$, il appartient à la première plage de l'UTF-8. 
- Il est encodé sur **un seul octet** selon le masque `0xxxxxxx`.
- En insérant les $7$ bits de `'A'` (`1000001`) dans le masque :
  $$\text{UTF-8} = 01000001_2$$
- Conversion en hexadécimal : 
  - Quartet de poids fort : $0100_2 = 4_{16}$
  - Quartet de poids faible : $0001_2 = 1_{16}$
  - Résultat : $\mathbf{41_{16}}$ (qui correspond bien au code hexadécimal standard de `'A'`).

#### 3. Encodage UTF-8 du caractère `'é'` ($\text{U+00E9}$)
- **Étape a :** Conversion de $\text{E9}_{16}$ en binaire sur $16 \text{ bits}$.
  $$\text{E} = 1110_2, \quad \text{9} = 1001_2 \implies \text{U+00E9} = 0000000011101001_2$$
  Le nombre de bits significatifs est de $8$ (inférieur à $11$), l'encodage nécessite donc **2 octets**.

- **Étape b :** Application du masque UTF-8 à $2$ octets : `110xxxxx 10xxxxxx`.
  Le masque offre $11$ positions $x$ disponibles. Répartissons nos $11$ bits de données (en complétant par des zéros à gauche si besoin, issus de notre valeur sur $16 \text{ bits}$) :
  Valeur binaire à répartir : `000 11101001`
  - Répartition dans le $1^{er}$ octet (`110xxxxx`) avec les $5$ bits de poids fort (`00011`) :
    $$\text{Octet 1} = 11000011_2 = \text{C3}_{16}$$
  - Répartition dans le $2^e$ octet (`10xxxxxx`) avec les $6$ bits de poids faible (`101001`) :
    $$\text{Octet 2} = 10101001_2 = \text{A9}_{16}$$
  - Séquence finale : $\mathbf{\text{C3 A9}_{16}}$.

#### 4. Étude d'impact et compromis
- **Fichier 1 ($1000$ caractères 'a' à 'z') :**
  Les caractères ASCII occupent $1$ octet chacun en UTF-8.
  $$\text{Taille}_1 = 1000 \times 1 \text{ octet} = 1000 \text{ octets} \ (\approx 1 \text{ Ko})$$
- **Fichier 2 ($1000$ caractères 'é') :**
  Le caractère `'é'` nécessite $2$ octets en UTF-8.
  $$\text{Taille}_2 = 1000 \times 2 \text{ octets} = 2000 \text{ octets} \ (\approx 2 \text{ Ko})$$

- **Analyse critique :** 
  L'UTF-8 démontre ici une asymétrie d'efficacité spatiale. S'il optimise l'espace pour les langues occidentales basées sur l'alphabet latin (en conservant la compacité de l'ASCII), il double l'espace de stockage nécessaire pour des textes comportant de nombreux caractères diacritiques ou non latins par rapport à un encodage théorique à taille fixe de $2$ ou $4$ octets. 
  Cependant, ce surcoût en espace est largement compensé par l'universalité de la norme, l'absence de métadonnées de type d'endianness (contrairement à l'UTF-16) et la robustesse face à la corruption de flux de données (les octets de continuation `10xxxxxx` permettent de resynchroniser facilement la lecture d'un texte tronqué).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
