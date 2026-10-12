---
title: "Cours : Représentation des données"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

En informatique, toute information traitée par un système numérique (texte, image, son, nombre) est universellement représentée sous forme binaire, c'est-à-dire par une suite de chiffres (bits), valant $0$ ou $1$.

*   **Bit (Binary digIT) :** Plus petite unité d'information d'un système numérique, pouvant prendre la valeur logique $0$ ou $1$.
*   **Octet (Byte) :** Groupement de $8$ bits. Il permet de coder $2^8 = 256$ valeurs différentes (de $0$ à $255$).
*   **Entiers naturels :** Les nombres entiers positifs ou nuls. En machine, ils sont codés sur un nombre fixe de bits ($8$, $16$, $32$ ou $64$ bits), ce qui induit une limite supérieure de représentation.
*   **Entiers relatifs :** Les nombres entiers positifs et négatifs. Leur représentation standard en mémoire utilise la technique du **complément à deux**, qui permet de simplifier les opérations arithmétiques pour le processeur.
*   **Caractères :** Représentés par des normes de codage associant un nombre (un code) à un graphème. La norme historique est l'ASCII (sur $7$ bits, étendu à $8$), supplantée aujourd'hui par **Unicode** (souvent encodé en **UTF-8**), qui permet de représenter des caractères de toutes les langues du monde en utilisant un nombre variable d'octets ($1$ à $4$).
*   **Flottants (Nombres à virgule) :** Représentation approchée des nombres réels normalisée par l'IEEE 754, décomposée en signe, mantexte (ou mantisse) et exposant.

---

## 📐 2. Formules et Propriétés fondamentales

### 1. Changements de bases (Binaire / Décimal / Hexadécimal)

*   **Du binaire vers le décimal :**
    Soit un nombre binaire $b_n b_{n-1} \dots b_1 b_0$ de $n+1$ bits. Sa valeur décimale $D$ est donnée par la somme pondérée des puissances de $2$ :
    $$D = \sum_{i=0}^{n} b_i \cdot 2^i = b_n \cdot 2^n + b_{n-1} \cdot 2^{n-1} + \dots + b_1 \cdot 2^1 + b_0 \cdot 2^0$$

*   **Capacité de représentation :**
    Avec $n$ bits, on peut représenter $2^n$ valeurs distinctes. Pour des entiers naturels, l'intervalle des valeurs représentables est :
    $$[0, 2^n - 1]$$

### 2. Représentation des entiers relatifs (Complément à deux)

Sur $n$ bits, le bit de poids fort ($b_{n-1}$) indique le signe :
*   Si $b_{n-1} = 0$, le nombre est positif (intervalle $[0, 2^{n-1}-1]$).
*   Si $b_{n-1} = 1$, le nombre est négatif (intervalle $[-2^{n-1}, -1]$).

Pour obtenir l'opposé d'un nombre en complément à deux :
1. Inverser tous les bits ($0$ devient $1$, et $1$ devient $0$).
2. Ajouter $1$ au résultat binaire obtenu.

---

## 💡 3. Exemple d'application résolu

**Problème :**
1. Convertir le nombre décimal $13$ en écriture binaire sur $8$ bits.
2. Déterminer la représentation de son opposé ($-13$) en complément à deux sur $8$ bits.
3. Exprimer ce même nombre $13$ en écriture hexadécimale.

**Résolution :**

1. **Conversion de $13_{10}$ en binaire :**
   On procède par divisions successives par $2$ (ou par soustraction des puissances de $2$) :
   * $13 = 8 + 4 + 0 + 1 = 1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0$
   * Sur $8$ bits, en complétant par des zéros à gauche :
     $$00001101_2$$

2. **Calcul de $-13$ en complément à deux sur $8$ bits :**
   * Étape 1 : Inversion des bits de $00001101$ :
     $$11110010$$
   * Étape 2 : Ajout de $1$ :
     $$11110010 + 1_2 = 11110011_2$$
   * La représentation de $-13$ sur $8$ bits est donc **$11110011_2$**.

3. **Conversion de $13_{10}$ en hexadécimal :**
   * On regroupe les bits par blocs de $4$ (tétrades) en partant de la droite :
     $0000$ (poids fort) et $1101$ (poids faible).
   * $0000_2 = 0_{16}$
   * $1101_2 = 13_{10} = \text{D}_{16}$ (rappel : A=10, B=11, C=12, D=13, E=14, F=15).
   * Le résultat est **$\text{0D}_{16}$**.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention au dépassement d'entier (*overflow*) :** Lors d'opérations arithmétiques, si le résultat dépasse la capacité du nombre de bits réservé (par exemple, $255 + 1$ sur un octet non signé), la valeur boucle à $0$ (ou génère une erreur matérielle), ce qui fausse les calculs.
*   **Ne pas confondre indices et puissances :** Dans la formule de conversion, le bit $b_0$ correspond à la puissance $2^0$ (et non $2^1$). Veillez à bien aligner les indices lors de l'écriture des calculs.
*   **Complément à deux et taille des bits :** La valeur d'un nombre négatif en complément à deux *dépend strictement du nombre de bits*. Par exemple, $-1$ sur $4$ bits s'écrit $1111_2$, mais sur $8$ bits, il s'écrit $11111111_2$. Prêtez toujours attention à la dimension annoncée dans l'énoncé.
*   **Saisie des caractères :** Rappelez-vous qu'en UTF-8, un caractère accentué ou un émoji n'occupe pas forcément un seul octet, contrairement à la table ASCII historique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
