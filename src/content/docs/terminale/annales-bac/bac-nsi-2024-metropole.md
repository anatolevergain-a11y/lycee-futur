---
title: "Bac NSI 2024 - Métropole"
description: "Sujet officiel type Bac NSI entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

**Épreuve du Baccalauréat Général**  
**Spécialité : Numérique et Sciences Informatiques (NSI)**  
**Classe de Terminale**  

---

### Exercice 1 : Bases de données relationnelles et requêtes SQL (8 points)

Une entreprise de location de matériel informatique gère son parc et ses clients à l'aide d'une base de données relationnelle. Le schéma relationnel est le suivant :

*   **Client** ($\underline{\text{id\_client}}$, nom, prenom, ville, date_inscription)
*   **Materiel** ($\underline{\text{id\_materiel}}$, designation, type, prix_journalier)
*   **Location** ($\underline{\text{id\_location}}$, $\text{id\_client}^*$, $\text{id\_materiel}^*$, date_debut, nb_jours)

*Note : Les attributs soulignés représentent les clés primaires, et les attributs suivis d'une astérisque représentent les clés étrangères.*

1.  **[1 pt]** Préciser le domaine (ou type) des attributs `id_client` et `prix_journalier`.
2.  **[2 pts]** Écrire une requête SQL permettant d'obtenir la liste de tous les clients (nom et prénom) habitant dans la ville de `"Lyon"`.
3.  **[2 pts]** Écrire une requête SQL permettant d'afficher les désignations et les prix journaliers des matériels dont le type est `"ordinateur"` et dont le `prix_journalier` est strictement inférieur à $50 \text{ \euro}$.
4.  **[3 pts]** Écrire une requête SQL avec une jointure permettant d'obtenir les noms des clients ainsi que les dates de début des locations qu'ils ont effectuées pour un matériel dont la désignation est `"MacBook Pro"`.

---

### Exercice 2 : Algorithmique sur les graphes et algorithme de Dijkstra (12 points)

On s'intéresse au réseau de fibre optique reliant $5$ nœuds d'un campus universitaire : $A$, $B$, $C$, $D$ et $E$. 
Le tableau ci-dessous représente les poids (en millisecondes de latence) des liaisons directes entre les différents routeurs. La valeur $\infty$ (infini) indique qu'il n'y a pas de liaison directe.

| De \ Vers | A | B | C | D | E |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **A** | 0 | 4 | 2 | $\infty$ | $\infty$ |
| **B** | 4 | 0 | 1 | 5 | $\infty$ |
| **C** | 2 | 1 | 0 | 8 | 10 |
| **D** | $\infty$ | 5 | 8 | 0 | 2 |
| **E** | $\infty$ | $\infty$ | 10 | 2 | 0 |

1.  **[2 pts]** Représenter ce graphe sous forme d'un dictionnaire en Python où les clés sont les sommets et les valeurs sont des dictionnaires des voisins associés à leur poids.
2.  **[4 pts]** Appliquer l'algorithme de Dijkstra pour trouver le plus court chemin (en termes de latence totale) reliant le routeur source $A$ à tous les autres routeurs du campus. 
    *On détaillera les étapes successives dans un tableau d'avancement.*
3.  **[3 pts]** En déduire le chemin optimal pour aller de $A$ à $E$ ainsi que la latence totale correspondante.
4.  **[3 pts]** Écrire en langage Python une fonction récursive ou itérative `voisins_accessibles(graphe, sommet, max_latence, visites)` qui renvoie la liste de tous les sommets accessibles depuis un `sommet` donné sans dépasser un cumul de `max_latence`.

---
## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

En tant qu'examinateur officiel, voici les éléments clés attendus lors de la correction des copies de ce sujet de Baccalauréat :

*   **Pour l'Exercice 1 (SQL) :** 
    *   *Piège classique :* Oublier la casse des chaînes de caractères (ex: `"Lyon"` vs `"lyon"`) ou omettre les guillemets simples.
    *   *Jointures :* Les correcteurs pénalisent l'utilisation de jointures implicites (WHERE table1.id = table2.id) au profit des jointures explicites normalisées (`JOIN ... ON ...`). Veillez à bien préfixer les attributs ambigus (ex: `Client.nom`).
*   **Pour l'Exercice 2 (Graphes / Dijkstra) :**
    *   *Tableau de Dijkstra :* Chaque colonne doit représenter un sommet. Chaque ligne doit correspondre à l'exploration du sommet choisi (celui ayant la distance provisoire minimale non encore visité). L'oubli de la mise à jour des sommets adjacents entraîne une perte immédiate de points.
    *   *Code Python :* La gestion des structures de données récursives ou itératives (comme les ensembles de sommets visités) doit être rigoureuse pour éviter les boucles infinies sur les graphes non orientés ou cycliques.

---
## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction de l'Exercice 1 : Bases de données relationnelles et requêtes SQL (/8)

1. **Domaine des attributs** *(1 point)*
   * `id_client` : Entier (souvent auto-incrémenté, type `INTEGER` ou `INT`). *(0.5 pt)*
   * `prix_journalier` : Nombre décimal (type `REAL`, `FLOAT` ou `NUMERIC`). *(0.5 pt)*

2. **Liste des clients de Lyon** *(2 points)*
   ```sql
   SELECT nom, prenom 
   FROM Client 
   WHERE ville = 'Lyon';
   ```
   *Barème :* `SELECT nom, prenom` ($0.5$ pt), `FROM Client` ($0.5$ pt), `WHERE ville = 'Lyon'` ($1$ pt).

3. **Matériels de type ordinateur à moins de $50 \text{ \euro}$** *(2 points)*
   ```sql
   SELECT designation, prix_journalier 
   FROM Materiel 
   WHERE type = 'ordinateur' AND prix_journalier < 50;
   ```
   *Barème :* Sélection des bons attributs et de la table ($1$ pt), condition `WHERE` avec l'opérateur logique `AND` et le comparateur $<$ ($1$ pt).

4. **Jointure pour les locations de "MacBook Pro"** *(3 points)*
   ```sql
   SELECT Client.nom, Location.date_debut
   FROM Client
   JOIN Location ON Client.id_client = Location.id_client
   JOIN Materiel ON Location.id_materiel = Materiel.id_materiel
   WHERE Materiel.designation = 'MacBook Pro';
   ```
   *Barème :* Utilisation correcte des jointures pour lier les trois tables ($2$ pt), filtrage correct sur la désignation du matériel ($1$ pt).

---

### Correction de l'Exercice 2 : Algorithmique sur les graphes et Dijkstra (/12)

1. **Représentation du graphe en Python** *(2 points)*
   ```python
   graphe = {
       'A': {'B': 4, 'C': 2},
       'B': {'A': 4, 'C': 1, 'D': 5},
       'C': {'A': 2, 'B': 1, 'D': 8, 'E': 10},
       'D': {'B': 5, 'C': 8, 'E': 2},
       'E': {'C': 10, 'D': 2}
   }
   ```
   *Barème :* Dictionnaire principal avec les 5 sommets ($1$ pt), dictionnaires internes corrects avec les poids associés ($1$ pt).

2. **Tableau d'avancement de l'algorithme de Dijkstra (Source : A)** *(4 points)*

   Sommets visités initialement : $\emptyset$. Distances initiales : $d(A)=0$, $d(B)=\infty$, $d(C)=\infty$, $d(D)=\infty$, $d(E)=\infty$.

| Sommet choisi | $d(A)$ | $d(B)$ | $d(C)$ | $d(D)$ | $d(E)$ | Sommets visités |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **-** | **0** | $\infty$ | $\infty$ | $\infty$ | $\infty$ | $\emptyset$ |
| **A** | **0** | 4 | **2** | $\infty$ | $\infty$ | $\{A\}$ |
| **C** | 0 | **3** | 2 | 10 | 12 | $\{A, C\}$ |
| **B** | 0 | 3 | 2 | **8** | 12 | $\{A, B, C\}$ |
| **D** | 0 | 3 | 2 | 8 | **10** | $\{A, B, C, D\}$ |
| **E** | 0 | 3 | 2 | 8 | 10 | $\{A, B, C, D, E\}$ |

   *Barème :* Initialisation correcte ($1$ pt), étapes d'exploration intermédiaires sans erreur de calcul ($2$ pts), tableau final complet et exact ($1$ pt).

3. **Chemin optimal de A vers E et latence** *(3 points)*
   * En remontant les plus courts chemins depuis le tableau : 
     * Pour aller en $E$, le prédécesseur immédiat est $D$ (distance totale $10$).
     * Pour aller en $D$, le prédécesseur immédiat est $B$ (distance $8$).
     * Pour aller en $B$, le prédécesseur immédiat est $C$ (distance $3$).
     * Pour aller en $C$, le prédécesseur immédiat est $A$ (distance $2$).
   * Le chemin optimal est donc **$A \rightarrow C \rightarrow B \rightarrow D \rightarrow E$**. *(2 pts)*
   * La latence totale est de **$10 \text{ ms}$**. *(1 pt)*

4. **Fonction Python de recherche des voisins accessibles** *(3 points)*
   ```python
   def voisins_accessibles(graphe, sommet, max_latence, visites=None):
       if visites is None:
           visites = set()
       visites.add(sommet)
       
       resultat = []
       for voisin, poids in graphe[sommet].items():
           if poids <= max_latence and voisin not in visites:
               resultat.append(voisin)
               # Appel recursif pour propager si necessaire
               # (ou simple exploration locale selon l'interpretation)
       return resultat
   ```
   *Barème :* Initialisation des paramètres / gestion des visites ($1$ pt), parcours correct des voisins et application de la condition de `max_latence` ($1$ pt), structure de retour correcte ($1$ pt).