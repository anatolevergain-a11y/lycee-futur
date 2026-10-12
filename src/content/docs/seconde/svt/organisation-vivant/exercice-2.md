---
title: "Exercice 2 : ADN et biodiversité au niveau moléculaire"
description: "Application pratique du chapitre L'organisation fonctionnelle du vivant"
---

### 🌐 Contexte & Données scientifiques

À l'échelle moléculaire, la biodiversité trouve son origine dans la diversité des séquences de nucléotides constituant la molécule d'ADN. L'ADN est un polymère constitué de l'enchaînement de quatre types de nucléotides différents, caractérisés par leur base azotée : l'Adénine (A), la Thymine (T), la Cytosine (C) et la Guanine (G). 

Chez les organismes eucaryotes, l'information génétique portée par l'ADN est transcrite en ARN messager, puis traduite en protéines, lesquelles déterminent les caractères macroscopiques. Toutefois, l'analyse comparée des génomes met en évidence que la quantité d'ADN ne corrèle pas strictement avec la complexité morphologique d'un organisme (paradoxe de la valeur C). 

Le tableau ci-dessous présente un extrait de séquence nucléotidique du gène codant pour une protéine impliquée dans la pigmentation (la tyrosinase) chez trois souches d'une même espèce végétale hypothétique (*Planta vulgaris*), ainsi que les taux de mutation mesurés *in situ*.

| Souche | Extrait de la séquence d'ADN transcrite ($5' \rightarrow 3'$) | Longueur totale du gène (pb) | Taux d'erreur de réplication estimé |
| :--- | :--- | :--- | :--- |
| **Référence (S0)** | <code>ATG - GGC - CCT - AAG - TTA</code> | $1200$ | $1 \times 10^{-9}$ erreurs/pb/génération |
| **Mutante A (S1)** | <code>ATG - GGC - CCT - AGG - TTA</code> | $1200$ | $1,2 \times 10^{-9}$ erreurs/pb/génération |
| **Mutante B (S2)** | <code>ATG - GGC - CCC - AAG - TTA</code> | $1200$ | $9 \times 10^{-10}$ erreurs/pb/génération |

*Note méthodologique : Les mutations ponctuelles observées résultent d'erreurs stochastiques lors de la réplication semi-conservative de l'ADN par l'ADN polymérase. L'impact phénotypique dépend de la nature du codon modifié et du code génétique universel.*

---

### ❓ Énoncé

1. **Analyser** comparativement les extraits de séquences d'ADN des souches S1 et S2 par rapport à la souche de référence S0 en identifiant précisément la nature de la modification moléculaire pour chaque cas.
2. **Calculer** le nombre moyen théorique de mutations par génération pour l'ensemble du génome de la souche S0, sachant que la taille totale de son haploïde est estimée à $3 \times 10^8$ paires de bases (pb). Discuter de la pertinence de ce calcul déterministe face à la réalité biologique.
3. **Expliquer** comment une modification minime au niveau moléculaire (un seul nucléotide changé) peut générer de la biodiversité tout en soulignant les limites de l'utilisation de la séquence d'ADN seule pour prédire le phénotype d'un organisme.

---

### 💡 Indice de méthode

* **Question 1 :** Alignez les séquences codon par codon. Repérez le doublet ou le triplet qui diffère de la référence S0 et qualifiez le changement (substitution, insertion, délétion) ainsi que sa position exacte.
* **Question 2 :** Utilisez une relation de proportionnalité simple en multipliant la taille du génome par le taux d'erreur par paire de base. Interprétez ce chiffre en termes d'incertitude statistique.
* **Question 3 :** Mobilisez vos connaissances sur la redondance du code génétique (code dégénéré) et rappelez qu'un génotype ne s'exprime pas dans le vide : l'environnement module l'expression phénotypique.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse comparative des séquences moléculaires
* **Pour la souche S1 :**
  * S0 : `... CCT - AAG - TTA ...`
  * S1 : `... CCT - AGG - TTA ...`
  * *Analyse :* Au niveau du 4ème codon, le nucléotide Adénine (A) en position 11 est remplacé par une Guanine (G). Il s'agit d'une **substitution**.
* **Pour la souche S2 :**
  * S0 : `... GGC - CCT - AAG ...`
  * S2 : `... GGC - CCC - AAG ...`
  * *Analyse :* Au niveau du 3ème codon, la Thymine (T) en position 9 est remplacée par une Cytosine (C). Il s'agit également d'une **substitution**.

#### 2. Calcul du nombre moyen de mutations et esprit critique
* **Calcul :**
  $$\text{Nombre de mutations} = \text{Taille du génome} \times \text{Taux d'erreur}$$
  $$\text{Nombre de mutations} = (3 \times 10^8 \text{ pb}) \times (1 \times 10^{-9} \text{ erreurs/pb/génération})$$
  $$\text{Nombre de mutations} = 3 \times 10^{-1} = 0,3 \text{ mutation par génération}$$
* **Esprit critique et limites du modèle :** 
  Ce résultat de $0,3$ mutation par génération est une *moyenne statistique*. Biologiquement, un individu entier ne peut pas porter "0,3" mutation : cela signifie que statistiquement, environ 30 % des individus de cette génération porteront une nouvelle mutation spontanée, tandis que 70 % n'en porteront aucune. De plus, ce modèle suppose un taux d'erreur homogène sur tout le génome, ce qui est scientifiquement faux (certaines régions, comme les séquences répétées, sont des "points chauds" de mutation), et il néglige l'efficacité des systèmes biochimiques de réparation de l'ADN (enzymes de relecture).

#### 3. Lien entre molécule d'ADN et biodiversité : nuances et complexité
* Une modification de la séquence nucléotidique (mutation) modifie la séquence de l'ARN messager transcrit. Selon le code génétique, cela peut (ou non, en raison de la dégénérescence du code) modifier la séquence en acides aminés de la protéine. La structure tridimensionnelle et la fonction de la protéine en sont affectées, ce qui se traduit par un nouveau caractère phénotypique macroscopique : c'est l'une des sources majeures de la biodiversité moléculaire.
* **Limites du modèle génotypique :** Prédire le phénotype uniquement à partir de la séquence d'ADN est réductionniste. D'une part, des mécanismes épigénétiques (méthylation de l'ADN, modification des histones) peuvent moduler l'expression des gènes sans modifier la séquence. D'autre part, l'environnement (température, nutrition, interactions biotiques) joue un rôle crucial dans la réalisation du phénotype, démontrant que l'ADN seul ne suffit pas à définir l'organisme vivant.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
