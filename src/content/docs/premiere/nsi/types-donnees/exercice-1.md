---
title: "Exercice 1 : Codage binaire, hexadécimal et flottants IEEE-754"
description: "Application pratique du chapitre Représentation des données"
---

### 🌐 Contexte & Données scientifiques

En informatique, la représentation des données en mémoire dépend strictement du type de la variable manipulée et des choix architecturaux du matériel. Si les entiers naturels et relatifs bénéficient d'un codage exact en complément à deux, les nombres à virgule nécessitent des compromis rigoureux. 

La norme **IEEE 754** (dans sa version simple précision sur 32 bits) est le standard universellement adopté pour représenter les nombres réels. Cependant, ce modèle introduit une limite intrinsèque majeure : l'impossibilité de représenter de manière exacte une infinité de nombres réels avec un nombre fini de bits. Cela conduit inévitablement à des erreurs d'arrondi.

Considérons un système embarqué de mesure scientifique. Un capteur transmet une valeur sous la forme d'un mot hexadécimal de 32 bits stocké en mémoire : `0x40490FDB`. 

Nous cherchons à analyser la rigueur de cette représentation, à comprendre la structure de la donnée transmise, et à évaluer l'impact des limites de la norme IEEE 754 sur la précision de la mesure.

---

### ❓ Énoncé

1. **Conversion et analyse de base :** Convertir le mot hexadécimal `0x40490FDB` en écriture binaire non signée sur 32 bits.
2. **Décomposition selon la norme IEEE 754 :** En suivant la structure de la norme IEEE 754 simple précision (1 bit de signe $S$, 8 bits d'exposant biaisé $E$, 23 bits de mantisse $M$), identifiez pour ce mot :
   - Le bit de signe $S$ ;
   - L'exposant biaisé $E$ (en binaire et en décimal) ;
   - La mantisse $M$ (en binaire).
3. **Calcul de la valeur décimale :** En appliquant la formule générale de décodage des nombres normaux de l'IEEE 754 :
   $$\text{Valeur} = (-1)^S \times (1 + M) \times 2^{E - \text{biais}}$$
   où le biais est de $127$ et $1 + M$ s'écrit sous forme de fraction binaire, calculez la valeur décimale représentée par ce mot (vous arrondirez le résultat final à $10^{-5}$ près). *Note : le nombre encodé ici correspond à une approximation célèbre en mathématiques.*
4. **Analyse critique et limites :** Expliquez pourquoi l'ordinateur ne peut pas stocker exactement le nombre réel $\pi$ ($\pi \approx 3{,}1415926535...$). Quel est le compromis technique qui a motivé l'adoption de la norme IEEE 754 au détriment d'un stockage algébrique exact ?

---

### 💡 Indice de méthode

* **Question 1 :** Chaque chiffre hexadécimal se convertit directement en un bloc de 4 bits (tétrade). Par exemple, `4` devient `0100` et `0` devient `0000`.
* **Question 2 :** Rappelez-vous que le premier bit (à gauche) est le signe, les 8 suivants forment l'exposant, et les 23 derniers constituent la mantisse.
* **Question 3 :** Pour convertir la mantisse $M = 0{,}b_1b_2...b_{23}$ en décimal, rappelez-vous que $1 + M = 1 + \sum_{i=1}^{23} b_i \times 2^{-i}$. 
* **Question 4 :** Songez au fait que la mémoire d'une machine est finie (discrète) alors que l'ensemble des nombres réels est infini et continu.

---

### 📋 Correction détaillée pas à pas

#### 1. Conversion du mot hexadécimal en binaire
Le mot hexadécimal est `0x40490FDB`. En convertissant chaque chiffre hexadécimal sur 4 bits, nous obtenons :
* `4` $\rightarrow$ `0100`
* `0` $\rightarrow$ `0000`
* `4` $\rightarrow$ `0100`
* `9` $\rightarrow$ `1001`
* `0` $\rightarrow$ `0000`
* `F` $\rightarrow$ `1111`
* `D` $\rightarrow$ `1101`
* `B` $\rightarrow$ `1011`

En regroupant l'ensemble, le mot binaire sur 32 bits est :
$$\underbrace{0}_{\text{S}} \underbrace{10000000}_{\text{E}} \underbrace{10010010000111111011011}_{\text{M}}$$

#### 2. Décomposition selon la norme IEEE 754
D'après la lecture du vecteur binaire ci-dessus :
* **Bit de signe ($S$) :** $0$ (le nombre est positif).
* **Exposant biaisé ($E$) :** `10000000` en binaire. 
  En décimal, $E = 2^7 = 128$.
* **Mantisse ($M$) :** `10010010000111111011011` (partie fractionnaire normalisée).

#### 3. Calcul de la valeur décimale
Appliquons la formule de décodage IEEE 754 :
$$\text{Valeur} = (-1)^S \times (1 + M) \times 2^{E - \text{biais}}$$

* Signe : $(-1)^0 = 1$
* Exposant réel : $E - 127 = 128 - 127 = 1$
* Calcul de $(1 + M)$ en base 10 :
  $1 + \frac{1}{2^1} + \frac{0}{2^2} + \frac{0}{2^3} + \frac{1}{2^4} + \frac{0}{2^5} + \frac{0}{2^6} + \frac{1}{2^7} + \dots$
  En sommant les puissances de 2 correspondantes aux bits positionnés à 1 dans la mantisse, on obtient :
  $$1 + 0{,}5 + 0{,}03125 + 0{,}00390625 + \dots \approx 1{,}57079632675$$

* Calcul final :
  $$\text{Valeur} = 1 \times 1{,}57079632675 \times 2^1 = 3{,}1415926535...$$
  Arrondi à $10^{-5}$ près, le résultat est **$3{,}14159$**. 
  *(Ce nombre correspond à une approximation standard de $\pi$)*.

#### 4. Analyse critique et limites
* **Impossibilité du stockage exact :** Le nombre $\pi$ est irrationnel, ce qui implique son écriture décimale est infinie et non périodique. La norme IEEE 754 en simple précision n'offre que 23 bits pour la mantisse (soit environ 7 à 8 chiffres significatifs décimaux). Il y a donc une perte d'information par **troncature ou arrondi** (erreur d'arrondi machine).
* **Compromis technique :** Représenter un nombre réel de manière algébrique exacte exigerait une quantité de mémoire dynamique potentiellement infinie pour chaque calcul, ce qui rendrait le traitement matériel impossible à des fréquences d'horloge élevées. Le choix de l'IEEE 754 représente un compromis pragmatique : standardiser la taille des données (32 ou 64 bits) pour garantir des performances de calcul matériel (Unité Arithmétique et Logique) extrêmement rapides, au prix d'une incertitude maîtrisée (précision limitée).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
