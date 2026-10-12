---
title: "Exercice 2 : Données ouvertes (Open Data) et structuration SQL"
description: "Application pratique du chapitre Le Web, les Données et la Géolocalisation"
---

### 🌐 Contexte & Données scientifiques

L’accès libre aux données publiques, ou *Open Data*, constitue un enjeu majeur de la transparence démocratique et de la recherche scientifique. En France, la loi pour une République numérique (2016) impose par principe l'ouverture des données publiques. Toutefois, la mise à disposition de volumes massifs d'informations (par exemple, le Registre National des Immatriculations ou les bases de données géographiques de l'IGN) pose des défis techniques importants en matière de stockage, de structuration et de traitement.

Pour exploiter efficacement ces données tabulaires hétérogènes, on utilise souvent des systèmes de gestion de bases de données relationnelles (SGBDR) et le langage **SQL** (*Structured Query Language*). 

Considérons un extrait simplifié d'une base de données Open Data publiée par une collectivité territoriale concernant les stations de vélos en libre-service. La table se nomme `stations_velos` et contient les attributs suivants :

* `id_station` (Entier) : Identifiant unique de la station.
* `nom_station` (Chaîne de caractères) : Nom usuel de la station.
* `capacite` (Entier) : Nombre maximal de vélos pouvant être accueillis.
* `velos_disponibles` (Entier) : Nombre de vélos présents au moment de la dernière mesure $t_0$.
* `arrondissement` (Entier) : Numéro de l'arrondissement.
* `latitude` (Flottant) : Coordonnée géographique en degrés décimaux (système WGS 84).

Soit $C$ la capacité d'une station et $V$ le nombre de vélos disponibles. On définit le taux d'occupation instantané $T$ (en pourcentage) par la relation :
$$T = \left(\frac{C - V}{C}\fartight) \times 100 \quad \text{si } C > 0$$
*(Note : Ce taux mesure la proportion de vélos empruntés par rapport à la capacité totale).*

---

### ❓ Énoncé

1. **Analyse de structure :** Écrire la requête SQL permettant d'afficher uniquement le nom et la capacité de toutes les stations situées dans l'arrondissement `5`.
2. **Filtrage logique :** On souhaite identifier les stations potentiellement en situation de tension logistique. Proposer une requête SQL qui extrait les stations dont le nombre de vélos disponibles est strictement inférieur à $2$ et dont la capacité est supérieure ou égale à $20$.
3. **Modélisation et calcul :** En supposant que le SGBDR intègre une fonction arithmétique standard, rédiger une requête SQL permettant d'afficher le nom des stations ainsi que leur taux d'occupation $T$ (exprimé en pourcentage), classé par ordre décroissant de ce taux.
4. **Esprit critique et limites :** Le modèle relationnel appliqué à l'Open Data géographique présente des limites épistémologiques et techniques. Expliquez en quelques lignes pourquoi une requête SQL ponctuelle sur le nombre de vélos disponibles ne suffit pas à modéliser fidèlement la qualité du service public de mobilité à l'échelle d'une journée.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez les mots-clés fondamentaux du SQL : `SELECT` (pour les colonnes), `FROM` (pour la table), et `WHERE` (pour la condition de sélection).
* **Question 2 :** L'opérateur logique « ET » s'écrit `AND` en SQL. Les opérateurs de comparaison usuels sont `<`, `>`, `<=`, `>=`.
* **Question 3 :** Pour calculer une nouvelle colonne à partir de données existantes, vous pouvez utiliser des opérations arithmétiques directement dans le `SELECT` (ex: `(col1 - col2) * 100 / col1`). Le tri s'effectue avec la clause `ORDER BY ... DESC`.
* **Question 4 :** Réfléchissez à la *dynamique temporelle* des données (la donnée SQL est un instantané $t_0$) ainsi qu'à la nature complexe des flux humains (variations pendulaires domicile-travail).

---

### 📋 Correction détaillée pas à pas

1. **Requête de sélection simple (Arrondissement 5) :**
   Il s'agit d'extraire des colonnes spécifiques selon un critère géographique (attribut `arrondissement`).
   ```sql
   SELECT nom_station, capacite
   FROM stations_velos
   WHERE arrondissement = 5;
   ```
   *Vérification scientifique :* La clause `WHERE` filtre les lignes selon un prédicat booléen strict, garantissant l'exhaustivité des résultats pour le périmètre demandé.

2. **Requête avec conditions multiples (Tension logistique) :**
   On combine deux conditions à l'aide de l'opérateur `AND` pour cibler les stations presque vides malgré une forte capacité.
   ```sql
   SELECT nom_station, velos_disponibles, capacite
   FROM stations_velos
   WHERE velos_disponibles < 2 AND capacite >= 20;
   ```
   *Analyse :* Cette approche algorithmique permet un traitement automatisé de millions de lignes en quelques millisecondes, illustrant la puissance de l'Open Data structurée pour la maintenance prédictive.

3. **Calcul dérivé et tri (Taux d'occupation) :**
   La formule mathématique $T = \left(\frac{C - V}{C}\right) \times 100$ se traduit directement en syntaxe SQL. Le tri décroissant utilise `DESC`.
   ```sql
   SELECT nom_station, ((capacite - velos_disponibles) * 100.0 / capacite) AS taux_occupation
   FROM stations_velos
   WHERE capacite > 0
   ORDER BY taux_occupation DESC;
   ```
   *(Note méthodologique : On multiplie par `100.0` et non `100` pour forcer une division décimale en informatique, évitant ainsi l'arrondi entier par défaut).*

4. **Esprit critique sur les limites du modèle :**
   Une base de données relationnelle offre une vue **statique** (ou instantanée) d'un phénomène éminemment **dynamique**. 
   * **Limite temporelle :** La requête ne renvoie que l'état du système à la milliseconde de la requête. Elle ne capture ni la vitesse d'appauvrissement du stock de vélos (débit), ni la cyclicité journalière (ex: heures de pointe du matin vs creux de l'après-midi).
   * **Limite spatiale et systémique :** Une station vide à $t_0$ peut être la conséquence d'un événement ponctuel (travaux, manifestation) ou d'une régulation par camion benne en cours. 
   * *Conclusion scientifique :* L'Open Data brute et le SQL sont des outils de description et d'interrogation, mais leur interprétation sociologique ou logistique nécessite des modèles prédictifs temporels plus complexes (analyses de séries chronologiques).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
