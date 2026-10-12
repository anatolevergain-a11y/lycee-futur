---
title: "Bac NSI 2024 - Épreuve Écrite"
description: "Sujet officiel type Bac NSI entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

### Exercice 1 : Bases de données et requêtes SQL (8 points)

Une bibliothèque municipale gère son catalogue d'ouvrages et ses adhérents à l'aide d'une base de données relationnelle. Le schéma relationnel est le suivant :

*   $\text{AUTEUR}(\underline{\text{id\_auteur}}, \text{nom}, \text{prenom}, \text{pays\_origine})$
*   $\text{LIVRE}(\underline{\text{id\_livre}}, \text{titre}, \text{annee\_publication}, \text{id\_auteur}, \text{genre})$
*   $\text{ADHERENT}(\underline{\text{id\_adherent}}, \text{nom}, \text{prenom}, \text{date\_adhesion})$
*   $\text{EMPRUNT}(\underline{\text{id\_emprunt}}, \text{id\_livre}, \text{id\_adherent}, \text{date\_emprunt}, \text{date\_retour\_effective})$

**Questions :**

1.  Expliquer le rôle des attributs soulignés $\underline{\text{id\_auteur}}$ et $\underline{\text{id\_livre}}$. Comment qualifie-t-on l'attribut $\text{id\_auteur}$ présent dans la relation $\text{LIVRE}$ ? *(2 points)*
2.  Écrire une requête SQL permettant d'afficher les noms et prénoms de tous les auteurs dont le pays d'origine est $\text{'France'}$. *(2 points)*
3.  Écrire une requête SQL permettant d'obtenir le titre et l'année de publication de tous les livres du genre $\text{'Science-Fiction'}$, triés par ordre décroissant de l'année de publication. *(2 points)*
4.  Écrire une requête SQL utilisant une jointure pour afficher les titres des livres empruntés par l'adhérent dont le nom est $\text{'Durand'}$ et dont le prénom est $\text{'Alice'}$. *(2 points)*

---

### Exercice 2 : Algorithmique sur les Graphes (12 points)

Un réseau de distribution d'électricité est modélisé par un graphe non orienté et pondéré $G = (V, E)$.
*   L'ensemble des sommets $V = \{A, B, C, D, E, F\}$ représente des postes de transformation.
*   L'ensemble des arêtes $E$ représente les lignes électriques, et le poids de chaque arête correspond à sa longueur en kilomètres.

Le tableau des poids des arêtes est le suivant :

| Liaison | Poids (en $\text{km}$) |
| :--- | :--- |
| $(A, B)$ | $4$ |
| $(A, C)$ | $2$ |
| $(B, C)$ | $1$ |
| $(B, D)$ | $5$ |
| $(C, D)$ | $8$ |
| $(C, E)$ | $10$ |
| $(D, E)$ | $2$ |
| $(D, F)$ | $6$ |
| $(E, F)$ | $3$ |

**Questions :**

1.  **Représentation en Python :** 
    Donner la représentation de ce graphe sous forme de dictionnaire d'adjacence en Python, où les clés sont les sommets et les valeurs sont des listes (ou dictionnaires) des voisins associés aux poids des arêtes. *(2 points)*

2.  **Parcours dans le graphe :**
    *   Donner l'ordre de visite des sommets lors d'un parcours en largeur (BFS) à partir du sommet $A$, en supposant que les voisins sont visités par ordre alphabétique croissant. *(2 points)*
    *   Donner l'ordre de visite des sommets lors d'un parcours en profondeur (DFS) à partir du sommet $A$, en respectant la même règle d'ordre alphabétique. *(2 points)*

3.  **Algorithme de Dijkstra :**
    Appliquer l'algorithme de Dijkstra pour trouver le plus court chemin (en termes de distance totale) entre le sommet $A$ et tous les autres sommets du graphe.
    *   Présenter les étapes intermédiaires sous forme de tableau (ou liste des distances minimales et des prédécesseurs). *(4 points)*
    *   Donner le chemin optimal final pour aller de $A$ à $F$ ainsi que sa longueur totale. *(2 points)*

---

## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

*   **Concernant le SQL :** 
    *   *Piège classique :* Oublier la jointure explicite (`JOIN ... ON ...`) ou utiliser l'ancienne syntaxe implicite avec des virgules dans le `FROM`. Exigez la norme SQL moderne.
    *   *Casse :* Veillez à respecter les majuscules pour les mots-clés SQL (`SELECT`, `FROM`, `WHERE`, `JOIN`, `ON`, `ORDER BY`, `DESC`) même si les correcteurs tolèrent la minusculisation, la rigueur formelle est valorisée.
*   **Concernant les Graphes :**
    *   *Parcours :* Rappelez bien que le parcours en largeur utilise une **file** (FIFO) et le parcours en profondeur utilise une **pile** (LIFO) ou la récursivité. Un oubli dans l'ordre alphabétique des voisins retire immédiatement des points.
    *   *Dijkstra :* Le tableau d'état doit être rigoureusement tenu à jour (Sommet visité, Distance courante, Prédécesseur). Toute erreur de calcul de poids se répercute sur la suite, d'où l'importance de détailler chaque étape.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction de l'Exercice 1 : Bases de données et requêtes SQL (/8)

1.  **Rôle des clés et qualification :** *(2 points)*
    *   Les attributs soulignés $\underline{\text{id\_auteur}}$ et $\underline{\text{id\_livre}}$ sont les **clés primaires** de leurs relations respectives. Elles permettent d'identifier de manière unique chaque enregistrement (tuple) dans la table. *(1 point)*
    *   L'attribut $\text{id\_auteur}$ présent dans la relation $\text{LIVRE}$ est une **clé étrangère**. Elle fait référence à la clé primaire de la relation $\text{AUTEUR}$ pour établir une association entre un livre et son auteur. *(1 point)*

2.  **Requête 1 : Auteurs français** *(2 points)*
    ```sql
    SELECT nom, prenom 
    FROM AUTEUR 
    WHERE pays_origine = 'France';
    ```
    *(Barème : 0.5 pt pour SELECT, 0.5 pt pour FROM, 1 pt pour la condition WHERE correcte).*

3.  **Requête 2 : Livres de Science-Fiction triés** *(2 points)*
    ```sql
    SELECT titre, annee_publication 
    FROM LIVRE 
    WHERE genre = 'Science-Fiction' 
    ORDER BY annee_publication DESC;
    ```
    *(Barème : 1 pt pour la sélection et la condition, 1 pt pour le tri décroissant `ORDER BY ... DESC`).*

4.  **Requête 3 : Livres empruntés par Alice Durand** *(2 points)*
    ```sql
    SELECT L.titre
    FROM LIVRE L
    JOIN EMPRUNT E ON L.id_livre = E.id_livre
    JOIN ADHERENT A ON E.id_adherent = A.id_adherent
    WHERE A.nom = 'Durand' AND A.prenom = 'Alice';
    ```
    *(Barème : 1 pt pour les jointures correctes entre les trois tables, 1 pt pour la condition sur l'adhérent).*

---

### Correction de l'Exercice 2 : Algorithmique sur les Graphes (/12)

1.  **Représentation en Python :** *(2 points)*
    ```python
    graphe = {
        'A': {'B': 4, 'C': 2},
        'B': {'A': 4, 'C': 1, 'D': 5},
        'C': {'A': 2, 'B': 1, 'D': 8, 'E': 10},
        'D': {'B': 5, 'C': 8, 'E': 2, 'F': 6},
        'E': {'C': 10, 'D': 2, 'F': 3},
        'F': {'D': 6, 'E': 3}
    }
    ```
    *(Barème : 2 pts pour la structure correcte en dictionnaire imbriqué avec sommets et poids).*

2.  **Parcours dans le graphe :** *(4 points)*
    *   **Parcours en largeur (BFS) depuis $A$** *(2 points)* :
        *   File : $[A]$ -> Visité : $A$
        *   Voisins de $A$ : $B, C$ -> File : $[B, C]$
        *   Visite $B$ (voisins $A, C, D$) -> File : $[C, D]$ (car $A$ déjà visité)
        *   Visite $C$ (voisins $A, B, D, E$) -> File : $[D, E]$
        *   Visite $D$ (voisins $B, C, E, F$) -> File : $[E, F]$
        *   Visite $E$ -> File : $[F]$
        *   Visite $F$ -> File : $\emptyset$
        *   *Ordre BFS :* $\mathbf{A, B, C, D, E, F}$ (ou selon l'ordre exact d'enfilement des non-visités : $A, B, C, D, E, F$). *(2 points)*
    *   **Parcours en profondeur (DFS) depuis $A$** *(2 points)* :
        *   Pile : $[A]$
        *   Visite $A$, empile les voisins par ordre alphabétique inverse ou traite le premier alphabétique : $B$ (puis $C$).
        *   *Ordre DFS rigoureux (en partant du plus petit voisin non visité) :* 
            *   $A \rightarrow B \rightarrow C$ (déjà vu $A$, donc $D$) $\rightarrow D \rightarrow E \rightarrow F$.
            *   *Ordre DFS :* $\mathbf{A, B, C, D, E, F}$ (dans ce cas particulier de configuration, l'ordre coïncide, mais la logique de pile doit être respectée). *(2 pts)*

3.  **Algorithme de Dijkstra :** *(6 points)*
    *   **Tableau des étapes (Sommets : A, B, C, D, E, F) :**

| Étape | Sommet courant | $dist(A)$ | $dist(B)$ | $dist(C)$ | $dist(D)$ | $dist(E)$ | $dist(F)$ | Sommets traités |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $0$ | $-$ | $0$ | $\infty$ | $\infty$ | $\infty$ | $\infty$ | $\infty$ | $\emptyset$ |
| $1$ | $A$ | **0** | $4$ ($A$) | $2$ ($A$) | $\infty$ | $\infty$ | $\infty$ | $\{A\}$ |
| $2$ | $C$ | $0$ | $3$ ($C$) | **2** | $10$ ($C$) | $12$ ($C$) | $\infty$ | $\{A, C\}$ |
| $3$ | $B$ | $0$ | **3** | $2$ | $8$ ($B$) | $12$ | $\infty$ | $\{A, C, B\}$ |
| $4$ | $D$ | $0$ | $3$ | $2$ | **8** | $10$ ($D$) | $14$ ($D$) | $\{A, C, B, D\}$ |
| $5$ | $E$ | $0$ | $3$ | $2$ | $8$ | **10** | $13$ ($E$) | $\{A, C, B, D, E\}$ |
| $6$ | $F$ | $0$ | $3$ | $2$ | $8$ | $10$ | **13** | $\{A, C, B, D, E, F\}$ |

*(Note sur les mises à jour : Depuis $D$, $E$ passe à $8 + 2 = 10$, ce qui est mieux que $12$. Depuis $E$, $F$ passe à $10 + 3 = 13$).*
*(Barème tableau : 4 points pour la rigueur des calculs et des mises à jour).*

*   **Chemin optimal final vers $F$ et longueur :** *(2 points)*
    *   La distance minimale pour aller de $A$ à $F$ est de **$13$ km**. *(1 point)*
    *   En remontant les prédécesseurs : $F \leftarrow E \leftarrow D \leftarrow B \leftarrow C \leftarrow A$, le chemin optimal est : 
        $$\mathbf{A \rightarrow C \rightarrow B \rightarrow D \rightarrow E \rightarrow F}$$ 
        *(Vérification des poids : $2 + 1 + 5 + 2 + 3 = 13$).* *(1 point)*