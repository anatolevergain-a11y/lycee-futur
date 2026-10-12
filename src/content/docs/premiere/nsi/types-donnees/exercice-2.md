---
title: "Exercice 2 : Formats de compression sans perte et avec perte"
description: "Application pratique du chapitre Représentation des données"
---

### 🌐 Contexte & Données scientifiques

En science informatique, la compression de données vise à réduire l'espace de stockage nécessaire ou la bande passante requise pour la transmission d'un fichier. On distingue deux grandes familles d'algorithmes :
1. **La compression sans perte (lossless)** : Elle garantit une restitution bit-à-bit rigoureuse des données d'origine après décompression ($data_{initiale} = data_{restaurée}$).
2. **La compression avec perte (lossy)** : Elle accepte une altération irréversible d'une partie de l'information, jugée non pertinente ou imperceptible pour le système sensoriel humain, afin d'obtenir des taux de compression nettement supérieurs.

Considérons une image numérique fixe au format bitmap non compressé (RVB 24 bits par pixel) représentant un paysage marin uniforme de $1920 \times 1080$ pixels. 

Soit $T_0$ la taille initiale du fichier brut en octets.
La taille de l'image brute s'exprime par la formule :
$$T_0 = \text{Nombre de pixels} \times \text{Profondeur de couleur}$$

Dans notre cas :
$$\text{Nombre de pixels} = 1920 \times 1080 = 2\,073\,600 \text{ pixels}$$
$$\text{Profondeur de couleur} = 24 \text{ bits} = 3 \text{ octets}$$
$$T_0 = 2\,073\,600 \times 3 = 6\,220\,800 \text{ octets} \approx 6,22 \text{ Mo}$$

Cette image subit deux traitements distincts :
- **Traitement A (Sans perte - type PNG)** : Application d'un algorithme combinant le filtrage prédictif et le codage de Huffman. La taille du fichier obtenu est $T_A = 4,15 \text{ Mo}$.
- **Traitement B (Avec perte - type JPEG)** : Application d'une quantification par blocs de $8 \times 8$ pixels après transformation cosinus discrète (TCD). La taille du fichier obtenu est $T_B = 0,62 \text{ Mo}$.

---

### ❓ Énoncé

1. **Calcul du taux de compression** : Définir mathématiquement le taux de compression $TC$ en pourcentage (ou rapport de compression), puis calculer la valeur de $TC$ pour les traitements A et B.
2. **Analyse de l'entropie et de la redondance** : Expliquer pourquoi le traitement A (sans perte) parvient à réduire la taille du fichier malgré l'absence de suppression de données, en faisant référence à la notion de redondance statistique spatiale.
3. **Étude du compromis qualité/poids** : Le traitement B réduit la taille d'un facteur 10 par rapport au fichier brut. Discuter des limites de ce modèle de compression si l'image initiale contenait des micro-texturages complexes ou des tracés vectoriels fins (ex. : un schéma technique ou du texte), en mobilisant l'esprit critique sur la nature irréversible de la transformation.
4. **Modélisation de transmission** : On souhaite transmettre cette image via un réseau canal dont le débit utile est $D = 1,5 \text{ Mo/s}$ (Mégaoctets par seconde). Calculer le temps de transmission $t_0$, $t_A$ et $t_B$ pour chacun des états ($T_0$, $T_A$ et $T_B$). Conclure sur l'impact opérationnel des formats.

---

### 💡 Indice de méthode

* *Question 1* : Le taux de compression s'exprime classiquement par le rapport $\frac{T_{\text{compressé}}}{T_{\text{initial}}}$ ou par la réduction relative $\left(1 - \frac{T_{\text{compressé}}}{T_{\text{initial}}}\right) \times 100$. Veillez à bien homogénéiser les unités.
* *Question 2* : Songez aux pixels adjacents dans un paysage marin (ciel, mer) : leurs valeurs RVB sont souvent très proches, ce qui crée une redondance exploitable par des codages par plage (RLE) ou des dictionnaires.
* *Question 3* : La compression JPEG supprime des fréquences spatiales élevées (souvent associées aux contours nets et aux transitions franches). Analysez l'impact visuel de cette perte sur des artefacts de quantification ("blocs").
* *Question 4* : Appliquez la relation fondamentale liant la taille $T$, le débit $D$ et le temps $t$ : $t = \frac{T}{D}$.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul du taux de compression
Le taux de compression brut peut être défini par le facteur de réduction :
$$\tau = \left(1 - \frac{T_{\text{compressé}}}{T_0}\right) \times 100$$

* **Pour le traitement A (sans perte) :**
  $$\tau_A = \left(1 - \frac{4,15}{6,22}\right) \times 100 \approx (1 - 0,667) \times 100 \approx 33,3\%$$
  Le fichier a été réduit d'environ un tiers.

* **Pour le traitement B (avec perte) :**
  $$\tau_B = \left(1 - \frac{0,62}{6,22}\right) \times 100 \approx (1 - 0,0997) \times 100 \approx 90,0\%$$
  Le fichier a été réduit de $90\%$, soit un facteur de compression de $\frac{6,22}{0,62} \approx 10$.

#### 2. Analyse de l'entropie et de la redondance (Traitement A)
Un fichier bitmap brut stocke chaque pixel indépendamment, sans tenir compte des corrélations spatiales locales. Dans une image réelle, un pixel est fortement corrélé à ses voisins immédiats (un pixel bleu de mer est très probablement suivi d'un autre pixel bleu ou de nuance très proche). 
L'algorithme sans perte exploite cette **redondance statistique**. En utilisant des méthodes de prédiction (le pixel $N$ est codé par rapport à sa différence avec le pixel $N-1$) combinées à un codage de Huffman (qui attribue des mots binaires courts aux motifs fréquents et longs aux motifs rares), on diminue l'entropie apparente de l'information sans détruire le moindre bit : l'intégrité mathématique est préservée.

#### 3. Étude du compromis qualité/poids (Traitement B)
Le format JPEG (traitement B) utilise la Transformation Cosinus Discrète (TCD) et une **matrice de quantification** qui supprime définitivement les détails de haute fréquence spatiale (changements brusques de luminance/chrominance). 
* **Limites sur des documents techniques ou du texte** : Les contours de caractères ou les lignes de schémas techniques sont caractérisés par des fréquences spatiales élevées. La suppression de ces fréquences par le format JPEG génère des **artefacts de mosaiquage** (effet de bloc) et un flou prononcé (contour baveux), rendant parfois le texte illisible. 
* **Esprit critique** : Ce compromis est acceptable pour de la photographie grand public (où l'œil humain est naturellement peu sensible aux variations subtiles de hautes fréquences dans le bruit visuel), mais scientifiquement inadapté à l'imagerie médicale (radiographie) ou à la CAO (Conception Assistée par Ordinateur) où chaque pixel a une valeur fonctionnelle exacte.

#### 4. Modélisation de transmission
En utilisant la formule $t = \frac{T}{D}$ avec $D = 1,5 \text{ Mo/s}$ :

* **Temps initial ($T_0 = 6,22 \text{ Mo}$) :**
  $$t_0 = \frac{6,22}{1,5} \approx 4,15 \text{ secondes}$$

* **Temps avec compression sans perte ($T_A = 4,15 \text{ Mo}$) :**
  $$t_A = \frac{4,15}{1,5} \approx 2,77 \text{ secondes}$$

* **Temps avec compression avec perte ($T_B = 0,62 \text{ Mo}$) :**
  $$t_B = \frac{0,62}{1,5} \approx 0,41 \text{ seconde}$$

* **Conclusion opérationnelle** : La compression réduit significativement la latence de transmission réseau. Toutefois, il convient de nuancer : le temps global de traitement informatique doit inclure le coût algorithmique de la compression/décompression par le processeur (CPU), bien que pour des images fixes courantes, ce temps de calcul soit aujourd'hui négligeable devant le gain de bande passante réseau.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
