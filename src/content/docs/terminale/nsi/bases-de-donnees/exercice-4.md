---
title: "Exercice 4 : Gestion de comptes utilisateurs sécurisés"
description: "Application pratique du chapitre Bases de données SQL"
---

### 🌐 Contexte concret

Dans le cadre du développement d'une application web moderne, vous êtes chargé(e) de concevoir et d'interroger la base de données relationnelle stockant les informations des utilisateurs. Pour garantir la sécurité, les mots de passe ne sont jamais stockés en clair, mais sous forme de condensats (ou *hash*) obtenus via une fonction cryptographique (par exemple, SHA-256 ou Argon2).

La base de données repose sur une relation unique nommée `Utilisateur` dont le schéma relationnel est le suivant :

$$\text{Utilisateur}(\underline{\text{id\_user}}, \text{nom}, \text{email}, \text{password\_hash}, \text{date\_inscription}, \text{actif})$$

*   `id\_user` : Clé primaire (entier auto-incrémenté).
*   `nom` : Chaîne de caractères (le nom d'utilisateur).
*   `email` : Chaîne de caractères (unique pour chaque utilisateur).
*   `password\_hash` : Chaîne de caractères (le haché du mot de passe).
*   `date\_inscription` : Date à laquelle le compte a été créé.
*   `actif` : Booléen (`1` ou `TRUE` si le compte est actif, `0` ou `FALSE` s'il est désactivé).

---

### ❓ Énoncé

Écrivez les requêtes SQL permettant de réaliser les opérations suivantes :

1.  **Création de la table :** Rédiger l'instruction SQL permettant de créer la table `Utilisateur` avec les types de données adaptés et les contraintes d'intégrité nécessaires (`PRIMARY KEY`, `UNIQUE`, `NOT NULL`).
2.  **Insertion de données :** Écrire la requête permettant d'insérer un nouvel utilisateur (nom : "Alice", email : "alice@nsi.fr", hash : "e3b0c442...", date : "2023-10-01", actif : vrai).
3.  **Authentification :** Écrire la requête permettant de récupérer les informations de l'utilisateur dont l'adresse email est `"alice@nsi.fr"` et dont le compte est actif, afin de vérifier son mot de passe côté application.
4.  **Mise à jour de sécurité :** Écrire la requête permettant de désactiver (passer le champ `actif` à faux) tous les utilisateurs dont le nom contient ou est égal à une chaîne spécifique, par exemple pour une opération de modération (ex: désactiver l'utilisateur dont l'`id_user` est `42`).

---

### 💡 Indice

*   *Question 1 :* Pensez aux types SQL classiques : `INTEGER`, `VARCHAR(n)`, `DATE`, `BOOLEAN`. La contrainte `UNIQUE` évite les doublons d'emails.
*   *Question 2 :* L'ordre des colonnes doit correspondre à l'ordre des valeurs fournies dans la clause `VALUES`.
*   *Question 3 :* Utilisez la clause `WHERE` combinée avec l'opérateur logique `AND` pour filtrer sur l'email et l'état du compte.
*   *Question 4 :* L'instruction de modification d'enregistrement en SQL utilise le verbe `UPDATE` associé à `SET` et `WHERE`.

---

### 📋 Correction détaillée pas à pas

#### 1. Création de la table `Utilisateur`

Pour créer la table, nous traduisons le schéma relationnel en SQL en choisissant les types appropriés pour chaque attribut et en posant les contraintes d'intégrité :

```sql
CREATE TABLE Utilisateur (
    id_user INTEGER PRIMARY KEY AUTOINCREMENT,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(64) NOT NULL,
    date_inscription DATE NOT NULL,
    actif BOOLEAN NOT NULL DEFAULT 1
);
```
*Commentaire du professeur :* L'utilisation de `AUTOINCREMENT` (ou `SERIAL` selon le SGBD) délègue la gestion des identifiants uniques au système. La contrainte `UNIQUE` sur l'email est indispensable pour la sécurité et l'unicité des comptes.

---

#### 2. Insertion d'un nouvel utilisateur

Pour insérer un enregistrement, on utilise la commande `INSERT INTO` en spécifiant la table, les colonnes concernées, puis les valeurs associées :

```sql
INSERT INTO Utilisateur (nom, email, password_hash, date_inscription, actif) 
VALUES ('Alice', 'alice@nsi.fr', 'e3b0c442...', '2023-10-01', 1);
```
*Commentaire du professeur :* On ne précise pas `id_user` car celui-ci est généré automatiquement par la base de données. Les chaînes de caractères sont encadrées par des apostrophes `'`.

---

#### 3. Requête d'authentification

Lorsqu'un utilisateur tente de se connecter, le serveur récupère le haché stocké en base correspondant à son email (à condition que le compte soit actif) pour le comparer au haché du mot de passe saisi :

```sql
SELECT password_hash 
FROM Utilisateur 
WHERE email = 'alice@nsi.fr' AND actif = 1;
```
*Commentaire du professeur :* En NSI, il est fondamental de comprendre que **le mot de passe en clair ne transite jamais par une requête de sélection**. On récupère uniquement le condensat (`password_hash`) pour effectuer la vérification en Python (par exemple avec la bibliothèque `hashlib` ou `argon2`).

---

#### 4. Mise à jour de sécurité (Désactivation d'un compte)

Pour modifier une ou plusieurs valeurs dans une table, on utilise l'instruction `UPDATE` couplée à `SET` :

```sql
UPDATE Utilisateur 
SET actif = 0 
WHERE id_user = 42;
```
*Commentaire du professeur :* Attention à ne jamais oublier la clause `WHERE` lors d'un `UPDATE`. Sans elle, tous les utilisateurs de la table auraient été désactivés, ce qui constituerait un incident critique pour l'application !

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
