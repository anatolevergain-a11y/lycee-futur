---
title: "Exercice : Bases de données SQL"
description: "Démonstration appliquée : Gestion du catalogue de films d'une plateforme de streaming"
---

### 🌐 Contexte moderne & concret

Dans le cadre de ta spécialité Numérique et Sciences Informatiques (NSI) en classe de Première, tu intègres l'équipe technique d'une nouvelle plateforme de streaming vidéo éco-responsable et européenne, *GreenStream*. 

Ton rôle consiste à administrer et interroger la base de données relationnelle qui gère le catalogue des films. Pour cela, tu disposes d'une table principale nommée `films` contenant les informations suivantes :

- `id` : Identifiant unique du film (Entier, Clé primaire)
- `titre` : Titre du film (Chaîne de caractères)
- `realisateur` : Nom et prénom du réalisateur (Chaîne de caractères)
- `annee` : Année de sortie (Entier)
- `genre` : Genre principal du film (Chaîne de caractères)
- `duree` : Durée du film en minutes (Entier)
- `note_spectateurs` : Note moyenne attribuée par les utilisateurs sur une échelle de $0$ à $5$ (Nombre décimal)

---

### ❓ Énoncé (3 à 4 questions progressives)

Écris les requêtes en langage SQL permettant de répondre aux besoins suivants de l'équipe éditoriale :

1. **Question 1 :** L'équipe souhaite afficher l'ensemble des informations de tous les films disponibles dans le catalogue. Rédige la requête SQL correspondante.
2. **Question 2 :** Un utilisateur recherche des films de science-fiction (`'Science-Fiction'`). Affiche uniquement le titre et l'année de sortie de ces films.
3. **Question 3 :** Le responsable des acquisitions souhaite analyser les classiques. Affiche le titre, le réalisateur et l'année des films sortis avant l'année $2000$, classés du plus ancien au plus récent.
4. **Question 4 :** Pour une thématique « Chefs-d'œuvre », la plateforme met en avant les films dont la note des spectateurs est strictement supérieure à $4.2$ **et** dont la durée est supérieure ou égale à $120$ minutes. Écris la requête pour récupérer ces films.

---

### 💡 Indice

- Pour la **question 1**, pense à l'étoile (`*`) qui permet de sélectionner toutes les colonnes d'une table.
- Pour la **question 2**, n'oublie pas d'utiliser la clause `WHERE` pour filtrer selon une valeur textuelle (entre quotes `'...'`).
- Pour la **question 3**, la clause `ORDER BY` permet de trier les résultats. Le tri croissant est le mode par défaut.
- Pour la **question 4**, l'opérateur logique `AND` te permet de combiner plusieurs conditions dans la clause `WHERE`.

---

### 📋 Correction détaillée (Pas à pas)

#### Correction de la Question 1
Pour récupérer l'intégralité des données de la table `films`, on utilise la commande de projection de base (`SELECT`) combinée au caractère générique `*` qui désigne toutes les colonnes.

```sql
SELECT * 
FROM films;
```
*Explication :* On demande au SGBD (Système de Gestion de Base de Données) de retourner toutes les lignes (`*`) de la table `films`.

---

#### Correction de la Question 2
Ici, nous devons faire un **filtrage** (avec `WHERE`) et une **projection restreinte** (uniquement `titre` et `annee`).

```sql
SELECT titre, annee 
FROM films 
WHERE genre = 'Science-Fiction';
```
*Explication :* On sélectionne uniquement les colonnes `titre` et `annee`. La condition `WHERE genre = 'Science-Fiction'` permet de ne garder que les lignes dont le genre correspond exactement à la chaîne de caractères recherchée.

---

#### Correction de la Question 3
Cette question introduit une condition temporelle (strictement inférieur à $2000$) ainsi qu'un tri (du plus ancien au plus récent, soit croissant).

```sql
SELECT titre, réalisateur, annee 
FROM films 
WHERE annee < 2000 
ORDER BY annee ASC;
```
*Explication :* 
- `WHERE annee < 2000` filtre les films sortis au XXe siècle (ou avant).
- `ORDER BY annee ASC` (ou simplement `ORDER BY annee`) trie le résultat par ordre croissant (`ASC` pour *Ascending*) de l'attribut `annee`.

---

#### Correction de la Question 4
Il s'agit de combiner deux critères de sélection à l'aide d'un opérateur logique booléen.

```sql
SELECT titre, genre, note_spectateurs, duree 
FROM films 
WHERE note_spectateurs > 4.2 
  AND duree >= 120;
```
*Explication :* 
- La condition `note_spectateurs > 4.2` isole les films très bien notés.
- La condition `duree >= 120` isole les films longs (2 heures ou plus).
- L'opérateur `AND` exige que **les deux** conditions soient vraies simultanément pour qu'un film apparaisse dans le résultat.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
