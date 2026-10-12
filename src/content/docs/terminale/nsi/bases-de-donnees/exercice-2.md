---
title: "Exercice 2 : Requêtes SQL de sélection, jointure et mise à jour"
description: "Application pratique du chapitre Bases de données relationnelles SQL"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'optimisation logistique d'une flotte de véhicules de service éco-responsables, une agence publique gère un système de gestion de base de données relationnelles (SGBDR). Le modèle relationnel retenu repose sur deux tables distinctes : `vehicule` et `intervention`.

La table `vehicule` stocke les caractéristiques intrinsèques des véhicules, notamment leur empreinte carbone théorique et leur statut opérationnel. La table `intervention` enregistre les opérations de maintenance préventive ou corrective, associées à un coût financier et à une durée d'immobilisation.

Schéma textuel du schéma relationnel :
*   $\text{vehicule}(\underline{\text{id\_v}}, \text{modele}, \text{annee}, \text{emission\_co2}, \text{statut})$
*   $\text{intervention}(\underline{\text{id\_i}}, \#\text{id\_v}, \text{date\_inter}, \text{cout}, \text{duree\_jours})$

Les données manipulées sont soumises à des incertitudes de mesure, notamment concernant l'estimation des émissions réelles de $\text{CO}_2$ en conditions réelles d'usage par rapport aux données constructeur (écart souvent constaté de l'ordre de $+15\ \%$ à $+30\ \%$). Par ailleurs, toute mise à jour des coûts doit intégrer un compromis entre la rigueur budgétaire et la traçabilité des interventions de maintenance pour garantir la sécurité de la flotte.

---

### ❓ Énoncé

1. **Sélection simple et filtrage :** 
   Écrire une requête SQL permettant d'afficher le modèle et l'année des véhicules dont le taux d'émission de $\text{CO}_2$ est strictement inférieur à $120\text{ g/km}$ et dont le statut est actuellement `'Actif'`.

2. **Jointure et agrégation :** 
   Écrire une requête SQL permettant d'obtenir, pour chaque véhicule (affichage de son identifiant $\text{id\_v}$ et de son modèle), le coût total cumulé de ses interventions ($\sum \text{cout}$). On veillera à inclure l'ensemble des véhicules, y compris ceux n'ayant subi aucune intervention (utilisation d'une jointure externe adaptée).

3. **Analyse critique des performances :** 
   Soit la requête de jointure $Q$ reliant les tables `vehicule` et `intervention` sur l'attribut commun `id_v`. Si la table `intervention` contient $N$ tuples et la table `vehicule` contient $M$ tuples, exprimer la complexité temporelle théorique naïve d'une jointure par produit cartésien suivie d'une sélection en $O(\dots)$. Quel mécanisme d'indexation SQL permet d'optimiser cette opération ?

4. **Mise à jour (Update) et intégrité :** 
   Suite à une réévaluation tarifaire des pièces détachées, l'administration décide d'augmenter de $5\ \%$ le coût de toutes les interventions dont la durée dépasse ou égale $3$ jours. Écrire la requête SQL de mise à jour correspondante.

---

### 💡 Indice de méthode

*   **Pour la question 1 :** Utilisez les clauses `SELECT`, `FROM`, et `WHERE` en combinant les opérateurs logiques (`AND`).
*   **Pour la question 2 :** Pour ne pas omettre les véhicules sans intervention, privilégiez une jointure externe (`LEFT JOIN`). L'agrégation nécessite l'utilisation de la fonction `SUM()` associée à une clause `GROUP BY`.
*   **Pour la question 3 :** Rappelez-vous qu'un produit cartésien associe chaque ligne de la première table à chaque ligne de la seconde.
*   **Pour la question 4 :** La structure d'une mise à jour SQL s'articule autour de la commande `UPDATE ... SET ... WHERE ...`. Veillez à exprimer mathématiquement l'augmentation (multiplier par $1,05$).

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Sélection et filtrage
Pour extraire les informations demandées, on sélectionne les attributs `modele` et `annee` dans la table `vehicule` en posant deux conditions sur les attributs `emission_co2` et `statut`.

```sql
SELECT modele, annee 
FROM vehicule 
WHERE emission_co2 < 120 
  AND statut = 'Actif';
```
*Commentaire scientifique :* Ce filtrage permet de cibler instantanément la sous-population de véhicules respectant les seuils normatifs écologiques fixés par le cahier des charges.

#### Question 2 : Jointure externe et agrégation
Afin de lister tous les véhicules (même ceux sans intervention, dont le coût total sera alors `NULL` ou $0$ selon l'implémentation du SGBDR), on utilise un `LEFT JOIN` en partant de la table `vehicule`.

```sql
SELECT v.id_v, v.modele, SUM(i.cout) AS cout_total
FROM vehicule v
LEFT JOIN intervention i ON v.id_v = i.id_v
GROUP BY v.id_v, v.modele;
```
*Justification pédagogique :* L'oubli de la jointure externe (`LEFT JOIN` au lieu d'un `INNER JOIN` implicite) aurait exclu de l'analyse les véhicules les plus fiables (zéro intervention), biaisant ainsi l'étude statistique globale sur le coût d'entretien de la flotte.

#### Question 3 : Analyse de complexité
Un produit cartésien entre la table `vehicule` ($M$ lignes) et la table `intervention` ($N$ lignes) génère un espace de recherche intermédiaire de $M \times N$ tuples. La complexité temporelle naïve est donc en $\mathcal{O}(M \times N)$. 

Pour optimiser cette recherche, le SGBDR utilise des **index** (généralement des arbres B-Bags) sur les clés étrangères (`#id_v`) et primaires (`id_v`), ramenant la complexité de la jointure à $\mathcal{O}(M + N)$ dans les cas optimaux de correspondance par hachage ou fusion triée.

#### Question 4 : Mise à jour conditionnelle
La requête de mise à jour modifie la table `intervention` en recalculant l'attribut `cout` pour les lignes vérifiant la condition sur la durée.

```sql
UPDATE intervention 
SET cout = cout * 1.05 
WHERE duree_jours >= 3;
```
*Analyse critique :* Multiplier par $1{,}05$ revient à appliquer une hausse uniforme de $5\ \%$. D'un point de vue économique, cette modélisation linéaire suppose que l'inflation des coûts touche de manière homogène toutes les interventions longues, ce qui constitue une hypothèse simplificatrice qu'il convient de nuancer face à la réalité des marchés de pièces détachées.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
