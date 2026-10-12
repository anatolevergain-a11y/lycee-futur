---
title: "Bac NSI 2026 - Métropole (Sujet Officiel)"
description: "Sujet officiel type Bac NSI entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

**ÉPREUVE DE L'ENSEIGNEMENT DE SPÉCIALITÉ**
**Numérique et Sciences Informatiques (NSI)**
**Classe de Terminale de la Voie Générale**
**Durée de l'épreuve : 3 heures 30**

*L'usage de la calculatrice n'est pas autorisé.*
*Le sujet est composé de trois exercices indépendants.*

---

### Exercice 1 : Bases de données et langage SQL (7 points)

Une agence de voyages gère sa clientèle, ses destinations et ses réservations à l'aide d'une base de données relationnelle. Le schéma relationnel est le suivant :

*   `client` ($\underline{\text{id\_client}}$, nom, prenom, ville, date_inscription)
*   `destination` ($\underline{\text{id\_destination}}$, pays, ville, tarif)
*   `reservation` ($\underline{\text{id\_reservation}}$, $\text{id\_client}^*$, $\text{id\_destination}^*$, date_res, nb_personnes)

*(Note : les attributs soulignés représentent les clés primaires, et les astérisques les clés étrangères référençant les tables correspondantes).*

1. Écrire la requête SQL permettant de créer la table `destination`, en veillant à choisir des types adaptés (les identifiants sont des entiers, les pays et villes des chaînes de caractères, et le tarif un nombre décimal).
2. Écrire une requête SQL permettant d'ajouter une colonne `email` de type `TEXT` dans la table `client`.
3. Écrire la requête SQL qui affiche le nom et le prénom de tous les clients habitant dans la ville de `"Lyon"`.
4. Écrire la requête SQL qui permet d'obtenir le tarif moyen des destinations proposées dans le pays `"Japon"`.
5. Écrire la requête SQL qui affiche le nom, le prénom des clients ainsi que la ville de destination pour toutes les réservations enregistrées.

---

### Exercice 2 : Algorithmique - Graphes et plus court chemin (7 points)

L'agence de voyages souhaite proposer à ses clients un outil de calcul d'itinéraire pour relier différentes villes européennes par le train. Le réseau ferroviaire est modélisé par un graphe pondéré où les sommets représentent les villes et les arêtes représentent les liaisons directes, le poids de chaque arête correspondant à la durée du trajet en minutes.

On considère le dictionnaire d'adjacence suivant en Python représentant ce graphe :

```python
reseau = {
    "Paris": {"Londres": 150, "Bruxelles": 90, "Lyon": 120},
    "Londres": {"Paris": 150, "Bruxelles": 120},
    "Bruxelles": {"Paris": 90, "Londres": 120, "Amsterdam": 110},
    "Lyon": {"Paris": 120, "Marseille": 90},
    "Amsterdam": {"Bruxelles": 110},
    "Marseille": {"Lyon": 90}
}
```

1. Le graphe est-il orienté ? Justifier à l'aide du dictionnaire fourni.
2. Dessiner schématiquement le graphe correspondant.
3. On souhaite implémenter l'algorithme de Dijkstra pour trouver le trajet le plus rapide (en termes de durée) au départ de `"Paris"`.
   Donner l'état final du dictionnaire des distances minimales et celui des prédécesseurs après l'exécution complète de l'algorithme de Dijkstra en partant de `"Paris"`.
4. Écrire en langage Python une fonction `duree_minimale(graphe, depart, arrivee)` qui prend en paramètres le dictionnaire du graphe, une ville de départ et une ville d'arrivée, et qui renvoie la durée minimale du trajet entre ces deux sommets (on suppose l'existence des sommets dans le graphe).

---

### Exercice 3 : Programmation Orientée Objet (6 points)

Pour gérer son catalogue de séjours, l'agence de voyages décide d'utiliser la Programmation Orientée Objet (POO).

1. Écrire en Python une classe `Sejour` possédant les attributs d'instance suivants :
   - `destination` (chaîne de caractères)
   - `prix_base` (nombre flottant)
   - `places_dispo` (entier)

2. Ajouter à cette classe un constructeur (`__init__`) qui initialise ces trois attributs lors de la création d'un objet. Il devra également lever une exception (`ValueError`) si le prix de base est négatif ou nul.

3. Ajouter une méthode `reserver(self, nb)` qui prend en paramètre un nombre de places `nb` (entier). Cette méthode doit :
   - Vérifier s'il y a assez de places disponibles (`places_dispo`).
   - Si oui, déduire `nb` des places disponibles et renvoyer le prix total de la réservation ($nb \times \text{prix\_base}$).
   - Si non, afficher un message d'erreur et renvoyer `False`.

4. On souhaite créer une classe fille `Sejour Luxe` qui hérite de `Sejour`. Un séjour de luxe possède un attribut supplémentaire `options_incluses` (liste de chaînes de caractères). Écrire la classe `SejourLuxe` en veillant à utiliser correctement la fonction `super()`.

---

## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

*   **Exercice 1 (SQL) :** Attention à bien respecter la syntaxe des types SQL (`INTEGER`, `VARCHAR`, `REAL` ou `FLOAT`). Pour la jointure (question 5), l'oubli des conditions de correspondance entre clés primaires et étrangères est l'erreur la plus fréquente.
*   **Exercice 2 (Graphes) :** Bien expliciter les étapes de l'algorithme de Dijkstra (file de priorité ou tableau des distances visitées). En Python, veillez à manipuler correctement les dictionnaires pour éviter les erreurs de type `KeyError`.
*   **Exercice 3 (POO) :** Ne pas oublier le paramètre `self` dans toutes les méthodes de la classe. L'utilisation de `super().__init__(...)` est indispensable pour l'héritage.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction de l'Exercice 1 : Bases de données et langage SQL

1. **Création de la table `destination` (1.5 point)**
   ```sql
   CREATE TABLE destination (
       id_destination INTEGER PRIMARY KEY,
       pays TEXT,
       ville TEXT,
       tarif REAL
   );
   ```
   *(Barème : 0.5 pt pour les noms, 0.5 pt pour les types, 0.5 pt pour la clé primaire)*

2. **Ajout d'une colonne (1 point)**
   ```sql
   ALTER TABLE client ADD COLUMN email TEXT;
   ```
   *(Barème : 0.5 pt pour `ALTER TABLE`, 0.5 pt pour la syntaxe correcte)*

3. **Sélection simple avec filtre (1 point)**
   ```sql
   SELECT nom, prenom FROM client WHERE ville = 'Lyon';
   ```
   *(Barème : 0.5 pt pour `SELECT nom, prenom`, 0.5 pt pour le `WHERE`)*

4. **Fonction d'agrégation (1.5 point)**
   ```sql
   SELECT AVG(tarif) FROM destination WHERE pays = 'Japon';
   ```
   *(Barème : 1 pt pour l'utilisation de `AVG(tarif)`, 0.5 pt pour le filtre sur le pays)*

5. **Requête avec jointure (2 points)**
   ```sql
   SELECT client.nom, client.prenom, destination.ville 
   FROM client 
   JOIN reservation ON client.id_client = reservation.id_client 
   JOIN destination ON reservation.id_destination = destination.id_destination;
   ```
   *(Barème : 1 pt pour la sélection des attributs, 1 pt pour les jointures correctes)*

---

### Correction de l'Exercice 2 : Algorithmique - Graphes et plus court chemin

1. **Nature du graphe (1 point)**
   Le graphe est **non orienté**. En effet, si l'on regarde le dictionnaire, `"Paris"` a une liaison vers `"Londres"` de poids $150$, et `"Londres"` a également une liaison vers `"Paris"` du même poids, ce qui est vrai pour toutes les arêtes bidirectionnelles.
   *(Barème : 0.5 pt pour la réponse, 0.5 pt pour la justification)*

2. **Schéma du graphe (1.5 point)**
   *(Le schéma représente 6 sommets reliés par des arêtes pondérées selon le dictionnaire. Les élèves doivent tracer les sommets Paris, Londres, Bruxelles, Lyon, Amsterdam, Marseille avec les poids associés).*
   *(Barème : 0.5 pt par composante majeure respectée)*

3. **État final de Dijkstra depuis `"Paris"` (2 points)**
   - Distances minimales :
     `{"Paris": 0, "Bruxelles": 90, "Lyon": 120, "Londres": 150, "Amsterdam": 200, "Marseille": 210}`
   - Prédécesseurs :
     `{"Paris": None, "Bruxelles": "Paris", "Lyon": "Paris", "Londres": "Paris", "Amsterdam": "Bruxelles", "Marseille": "Lyon"}`
   *(Barème : 1 pt pour les distances, 1 pt pour les prédécesseurs)*

4. **Fonction Python Dijkstra simplifiée (2.5 points)**
   *Note : On accepte une implementation complète ou l'utilisation d'une structure adaptée.*
   ```python
   def duree_minimale(graphe, depart, arrivee):
       distances = {sommet: float('inf') for sommet in graphe}
       distances[depart] = 0
       a_visiter = list(graphe.keys())
       
       while a_visiter:
           # Trouver le sommet non visite avec la plus petite distance
           courant = min(a_visiter, key=lambda sommet: distances[sommet])
           if courant == arrivee:
               return distances[arrivee]
           
           a_visiter.remove(courant)
           
           for voisin, poids in graphe[courant].items():
               distance_alternative = distances[courant] + poids
               if distance_alternative < distances[voisin]:
                   distances[voisin] = distance_alternative
                   
       return distances[arrivee]
   ```
   *(Barème : 0.5 pt pour l'initialisation, 1 pt pour la boucle de parcours, 1 pt pour la mise à jour et le retour)*

---

### Correction de l'Exercice 3 : Programmation Orientée Objet

1. **Création de la classe `Sejour` et du constructeur (2 points)**
   ```python
   class Sejour:
       def __init__(self, destination, prix_base, places_dispo):
           if prix_base <= 0:
               raise ValueError("Le prix de base doit etre strictement positif.")
           self.destination = destination
           self.prix_base = prix_base
           self.places_dispo = places_dispo
   ```
   *(Barème : 0.5 pt pour la classe et le constructeur, 1 pt pour l'affectation des attributs, 0.5 pt pour la gestion de l'exception)*

2. **Méthode `reserver` (2 points)**
   ```python
       def reserver(self, nb):
           if nb <= self.places_dispo:
               self.places_dispo -= nb
               return nb * self.prix_base
           else:
               print("Erreur : Nombre de places insuffisant.")
               return False
   ```
   *(Barème : 1 pt pour la condition de vérification, 0.5 pt pour la mise à jour, 0.5 pt pour les retours)*

3. **Héritage et classe `SejourLuxe` (2 points)**
   ```python
   class SejourLuxe(Sejour):
       def __init__(self, destination, prix_base, places_dispo, options_incluses):
           super().__init__(destination, prix_base, places_dispo)
           self.options_incluses = options_incluses
   ```
   *(Barème : 1 pt pour la syntaxe de l'héritage, 1 pt pour l'appel à `super()` et l'initialisation du nouvel attribut)*