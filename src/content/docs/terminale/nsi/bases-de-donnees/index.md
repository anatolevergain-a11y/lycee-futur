---
title: "Cours : Bases de données relationnelles SQL"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Cours : Bases de données relationnelles SQL

## 📌 1. Notions clés & Définitions

Une **base de données relationnelle** (BDR) est un ensemble structuré de données organisé selon le modèle relationnel, formalisé par Edgar F. Codd en 1970. Ce modèle repose sur la théorie mathématique des relations (ensembles de tuples).

*   **Relation (ou Table) :** Un ensemble de lignes (ou **tuples**, ou **enregistrements**) partageant les mêmes attributs.
*   **Attribut (ou Colonne) :** Une caractéristique mesurable ou descriptive d'une relation, associée à un domaine (type de données : entier, chaîne de caractères, booléen, etc.).
*   **Clé primaire (Primary Key) :** Un attribut ou un ensemble minimal d'attributs dont la valeur identifie de manière unique chaque tuple de la relation. Aucune valeur ne peut être nulle (`NULL`).
*   **Clé étrangère (Foreign Key) :** Un attribut (ou ensemble d'attributs) dans une relation qui fait référence à la clé primaire d'une autre relation (ou de la même). Elle garantit l'**intégrité référée**.
*   **Schéma relationnel :** L'ensemble des noms des relations et de leurs attributs typés, décrivant la structure statique de la base de données.
*   **SQL (*Structured Query Language*) :** Le langage normalisé de requêtes déclaratif permettant de manipuler et d'interroger les données d'une BDR.

---

## 📐 2. Formules et Propriétés fondamentales

Le modèle relationnel obéit à des contraintes mathématiques strictes garantissant la cohérence des données.

### Les propriétés fondamentales d'une relation :
1. Pas de doublon de tuple : Une relation est un ensemble (au sens mathématique), les tuples sont donc distincts.
2. Pas d'ordre significatif des tuples : Les lignes ne sont pas ordonnées.
3. Pas d'ordre significatif des attributs : Les colonnes sont identifiées par leur nom et non par leur position.
4. Atomicité des valeurs : Chaque intersection (tuple $\times$ attribut) contient une valeur atomique (indivisible) appartenant au domaine de l'attribut (première forme normale - 1NF).

### Algèbre relationnelle (fondements théoriques de SQL) :
Les requêtes SQL reposent sur les opérateurs de l'algèbre relationnelle :
*   **Sélection ($\sigma$) :** Filtre les tuples selon un prédicat $P$.
    $$\sigma_{condition}(R)$$
*   **Projection ($\pi$) :** Extrait un sous-ensemble d'attributs.
    $$\pi_{attributs}(R)$$
*   **Produit cartésien ($\times$) et Jointure ($\bowtie$) :** Combine les tuples de deux relations selon une condition d'jointure.

### Syntaxe générale d'une requête SQL de sélection (SPJ : Select-Project-Join) :
$$
\text{SELECT } A_1, A_2, \dots, A_n \\
\text{FROM } R_1 \text{ JOIN } R_2 \text{ ON } \text{condition} \\
\text{WHERE } \text{prédicat} \\
\text{GROUP BY } \dots \\
\text{HAVING } \dots \\
\text{ORDER BY } \dots;
$$

---

## 💡 3. Exemple d'application résolu

Soit le schéma relationnel suivant, représentant une bibliothèque :
*   `Auteur` ($\underline{id\_auteur}$, nom, prenom)
*   `Livre` ($\underline{id\_livre}$, titre, annee, #id_auteur)

*(Note : le symbole $\underline{\text{souligné}}$ désigne la clé primaire, et le préfixe `#` désigne une clé étrangère).*

### Problème :
Écrire la requête SQL permettant d'obtenir la liste des titres de livres écrits par des auteurs nommés 'Hugo', triés par année décroissante.

### Résolution :
Il est nécessaire d'effectuer une jointure entre les tables `Livre` et `Auteur` pour lier un livre à son auteur, d'appliquer un filtre sur le nom, puis un tri.

```sql
SELECT Livre.titre 
FROM Livre 
JOIN Auteur ON Livre.id_auteur = Auteur.id_auteur 
WHERE Auteur.nom = 'Hugo' 
ORDER BY Livre.annee DESC;
```

*Analyse de la requête :*
1. **`FROM Livre JOIN Auteur ...`** : Réalise le produit cartésien restreint (jointure interne) des deux tables en faisant correspondre les identifiants d'auteurs.
2. **`WHERE Auteur.nom = 'Hugo'`** : Filtre les enregistrements pour ne garder que ceux dont l'auteur s'appelle Hugo (Sélection).
3. **`SELECT Livre.titre`** : Ne conserve que l'attribut `titre` dans le résultat final (Projection).
4. **`ORDER BY Livre.annee DESC`** : Trie les résultats par ordre décroissant selon l'année de parution.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention aux valeurs `NULL` :** Une valeur `NULL` représente une information manquante ou inconnue. Elle ne peut pas être comparée avec les opérateurs classiques (`=`, `!=`). Il faut impérativement utiliser les opérateurs `IS NULL` ou `IS NOT NULL`.
*   **Oubli des conditions de jointure (Produit cartésien non intentionnel) :** Lors d'une requête interrogeant plusieurs tables sans clause `JOIN ... ON` (ou sans condition de jointure dans le `WHERE`), le SGBD renvoie le produit cartésien (toutes les combinaisons possibles), ce qui génère des résultats erronés et sature la mémoire pour de grands volumes de données.
*   **Confondre `WHERE` et `HAVING` :** 
    *   `WHERE` filtre les lignes *avant* le regroupement (`GROUP BY`).
    *   `HAVING` filtre les groupes *après* l'application de fonctions d'agrégation (comme `SUM`, `COUNT`, `AVG`).
*   **Respect de la casse et des types :** En SQL, les mots-clés ne sont pas sensibles à la casse, mais les noms de tables, de colonnes (selon le SGBD) et les chaînes de caractères le sont (ex: `'Hugo'` $\neq$ `'hugo'`).
*   **Conseil d'expert pour l'épreuve pratique ou écrite :** Commencez toujours par identifier les tables nécessaires (pour le `FROM`/`JOIN`), puis posez les critères de filtrage (`WHERE`), et enfin déterminez les colonnes à afficher (`SELECT`).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
