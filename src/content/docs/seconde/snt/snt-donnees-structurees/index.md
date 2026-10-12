---
title: "Cours : Données structurées et traitement"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Dans le cadre du programme de Sciences Numériques et Technologie (SNT) en classe de Seconde, la manipulation de l'information repose sur la compréhension de la structure des données.

* **Donnée :** Quantité d'information brute, sans contexte particulier. Elle peut être de type numérique (entier, décimal), textuel (chaîne de caractères) ou booléen (vrai/faux).
* **Donnée structurée :** Donnée organisée selon un modèle formel facilitant son stockage, sa recherche, sa mise à jour et son traitement automatique. 
* **Tableau de données (ou table) :** Structure bidimensionnelle composée de **lignes** (les enregistrements ou $n$-uplets) et de **colonnes** (les attributs ou champs). Chaque colonne possède un nom et un type de données unique.
* **Format CSV (Comma-Separated Values) :** Format textuel ouvert très couramment utilisé pour représenter des données tabulaires. Les valeurs y sont séparées par un caractère délimiteur (généralement la virgule `,`, le point-virgule `;` ou la tabulation).
* **Index :** Position d'un élément dans une structure séquentielle (comme une liste ou une ligne de tableau). En informatique, l'indexation débute généralement à $0$.

---

## 📐 2. Formules et Propriétés fondamentales

Soit une table de données comportant $L$ lignes (hors en-tête) et $C$ colonnes.

* **Dimension de la table :** Le volume global des attributs se calcule par le produit $L \times C$.
* **Structure d'un fichier CSV :** 
  La première ligne correspond généralement à l'en-tête (les noms des $C$ attributs) :
  $$\text{Attribut}_1, \text{Attribut}_2, \dots, \text{Attribut}_C$$
  Les lignes suivantes ($L$ lignes) contiennent les valeurs effectives :
  $$\text{Valeur}_{1,1}, \text{Valeur}_{1,2}, \dots, \text{Valeur}_{1,C}$$

* **Sélection et Filtrage :**
  Soit $T$ une table. 
  - Le **filtrage** consiste à sélectionner un sous-ensemble de lignes vérifiant une condition logique (par exemple : $\text{colonne}_1 > \text{valeur}$).
  - La **projection** consiste à sélectionner un sous-ensemble de colonnes.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On dispose d'un extrait de fichier CSV nommé `villes.csv` contenant la population de quelques communes françaises :

```csv
Nom;Departement;Population
Paris;75;2165423
Lyon;69;518635
Marseille;13;861635
Lille;59;233098
```

1. Identifier le nombre de lignes $L$ et de colonnes $C$ de cette table (hors en-tête).
2. Écrire l'expression logique permettant de filtrer les villes dont la population est strictement supérieure à $500\,000$ habitants.

**Correction :**

1. 
   - L'en-tête est : `Nom;Departement;Population` (donc $C = 3$ colonnes).
   - Les lignes de données sont au nombre de $4$ (Paris, Lyon, Marseille, Lille). Ainsi, $L = 4$.
   - La dimension utile de la table est $4 \times 3$.

2. 
   En langage naturel, la condition de filtrage s'écrit : 
   $$\text{Population} > 500000$$
   Les enregistrements satisfaisant cette condition dans la table sont Paris ($2\,165\,423$), Lyon ($518\,635$) et Marseille ($861\,635$).

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention aux types de données :** Dans un fichier CSV, toutes les valeurs sont lues initialement comme du texte (chaînes de caractères). Pour effectuer des calculs statistiques (moyenne, somme, maximum) sur une colonne numérique (comme une population ou un prix), il est indispensable de convertir explicitement les données en types numériques (entiers ou nombres à virgule flottante).
* **Le choix du délimiteur :** En France, le séparateur `,` est souvent utilisé comme séparateur décimal dans les nombres (ex: $12{,}5$). Par conséquent, les fichiers CSV francisés privilégient le point-virgule `;` comme séparateur de colonnes pour éviter les conflits de lecture. Veillez à bien identifier le délimiteur lors de l'importation d'un fichier.
* **Confondre index et taille :** Si une table ou une liste possède $N$ éléments, les index valides vont de $0$ à $N-1$. Accéder à l'index $N$ provoque une erreur de dépassement (index out of bounds).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
