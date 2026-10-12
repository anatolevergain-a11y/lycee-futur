---
title: "Exercice 1 : Modèle relationnel : clés primaires et étrangères"
description: "Application pratique du chapitre Bases de données relationnelles SQL"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'optimisation des flux logistiques d'une entreprise de bio-informatique gérant la distribution de réactifs biologiques à l'échelle européenne, on étudie la structuration d'une base de données relationnelle. Le système actuel souffre d'une redondance excessive des données, entraînant des anomalies de mise à jour et un coût de stockage en mémoire non négligeable. 

Soit un ensemble de données initiales concernant les laboratoires clients, les commandes passées et les produits chimiques référencés. Pour garantir l'intégrité référentielle et satisfaire les formes normales (jusqu'à la troisième forme normale - 3NF), le modèle relationnel suivant est proposé :

* $\text{Client}(\underline{\text{id\_client}}, \text{nom\_labo}, \text{ville}, \text{code\_pays})$
* $\text{Produit}(\underline{\text{id\_produit}}, \text{nom\_commercial}, \text{masse\_molaire}, \text{stock})$
* $\text{Commande}(\underline{\text{id\_commande}}, \text{date\_commande}, \text{id\_client}^*)$
* $\text{LigneCommande}(\underline{\text{id\_commande}^, \text{id\_produit}^*}, \text{quantite})$

*Note : Les attributs soulignés constituent la clé primaire de la relation. Les attributs suivis d'un astérisque ($^*$) sont des clés étrangères.*

L'analyse empirique des performances montre qu'un stockage non normalisé augmente le volume des données de $\Delta V = 35\%$ en raison de la duplication des chaînes de caractères (noms de laboratoires et adresses). Cependant, la normalisation à l'extrême (multiplication des jointures) induit une complexité temporelle accrue lors des requêtes d'agrégation, complexité estimée en $\mathcal{O}(n \log n)$ au lieu de $\mathcal{O}(n)$ pour des tables dénormalisées, selon le volume $n$ des enregistrements.

---

### ❓ Énoncé

1. **Définition et identification formelle** : Définissez rigoureusement le rôle mathématique et logique d'une clé primaire et d'une clé étrangère. En vous basant sur le schéma relationnel ci-dessus, identifiez les domaines et les contraintes d'intégrité associés à la clé étrangère de la relation $\text{Commande}$.
2. **Anomalies de mise à jour** : Expliquez, à l'aide d'un contre-exemple théorique, pourquoi l'absence de clé étrangère et la présence de redondances (par exemple, stocker le nom du laboratoire directement dans la table $\text{Commande}$) peuvent générer une anomalie de modification (ou de mise à jour).
3. **Modélisation d'une association N-M** : Justifiez l'utilisation de la relation intermédiaire $\text{LigneCommande}$ (souvent appelée table de jonction) pour lier $\text{Commande}$ et $\text{Produit}$. Quel est la nature de sa clé primaire et pourquoi est-elle composée ?
4. **Évaluation critique et compromis** : Un administrateur de base de données (DBA) suggère de supprimer la clé étrangère `id_client` dans la table $\text{Commande}$ pour accélérer les insertions massives de données lors des pics d'activité (gains mesurés : $-12\%$ de temps processeur). Discutez des compromis entre la performance d'écriture (INSERT) et l'intégrité des données (ACID), en argumentant sur les risques encourus.

---

### 💡 Indice de méthode

* **Question 1** : Rappelez qu'une clé primaire garantit l'unicité et la non-nullité ($\text{NOT NULL}$) d'un tuple. La clé étrangère établit un pont logique en vérifiant l'appartenance des valeurs à l'ensemble des valeurs de la clé primaire référencée (intégrité référentielle).
* **Question 2** : Raisonnez par l'absurde : si un laboratoire change de nom et que cette information est dupliquée sur 10 000 lignes de commandes sans contrainte relationnelle, que se passe-t-il si une seule mise à jour échoue ?
* **Question 3** : Une commande peut contenir plusieurs produits, et un produit peut appartenir à plusieurs commandes. C'est une association de cardinalité $(0,N)$ des deux côtés, mathématiquement impossible à représenter par un simple attribut scalaire dans un modèle relationnel strict.
* **Question 4** : Posez l'équation du compromis entre la garantie mathématique de cohérence de l'information et la volatilité/performance brute du système de gestion de base de données (SGBD).

---

### 📋 Correction détaillée pas à pas

1. **Rôle des clés et contraintes** :
   * *Clé primaire* : Attribut (ou ensemble d'attributs) $\text{PK} \subset R$ tel qu'il assure l'unicité de chaque tuple dans la relation et ne peut prendre de valeur nulle ($\forall t \in R, t[\text{PK}] \neq \text{NULL}$).
   * *Clé étrangère* : Attribut $\text{FK} \in R_2$ dont les valeurs doivent obligatoirement correspondre à des valeurs existantes de la clé primaire $\text{PK} \in R_1$ (contrainte d'intégrité référentielle : $\Pi_{\text{FK}}(R_2) \subseteq \Pi_{\text{PK}}(R_1)$).
   * Pour la relation $\text{Commande}$, l'attribut $\text{id\_client}^*$ est une clé étrangère qui référence la clé primaire $\text{id\_client}$ de la relation $\text{Client}$. Son domaine est l'ensemble des identifiants valides présents dans la table $\text{Client}$.

2. **Anomalies de mise à jour** :
   * Supprimons la normalisation en intégrant le champ $\text{nom\_labo}$ dans la table $\text{Commande}$. Si le laboratoire dont l'identifiant est $42$ s'appelle "BioTech Labs" et a passé 500 commandes, son nom est dupliqué 500 fois.
   * *Anomalie de modification* : Si le laboratoire est rebaptisé "BioTech Europe" et que la mise à jour n'affecte que 499 lignes sur 500, la base de données se trouve dans un état incohérent (violation de l'unicité sémantique de l'entité). La clé étrangère et la normalisation évitent cela en stockant le nom à un unique endroit (table $\text{Client}$).

3. **Justification de la table de jonction $\text{LigneCommande}$** :
   * Le modèle relationnel ne gère pas nativement les attributs multivalués ni les associations de type $N-M$ (plusieurs produits par commande, plusieurs commandes pour un produit). 
   * La relation $\text{LigneCommande}$ transforme cette association $N-M$ en deux associations $1-N$. 
   * Sa clé primaire est **composée** de $(\text{id\_commande}, \text{id\_produit})$. Cette composition est mathématiquement nécessaire : un même produit peut apparaître dans plusieurs commandes (donc $\text{id\_produit}$ seul ne suffit pas à identifier une ligne) et une commande comporte plusieurs produits (donc $\text{id\_commande}$ seul ne suffit pas non plus). C'est la concaténation des deux qui garantit l'unicité d'une ligne de commande.

4. **Évaluation critique du compromis (Performance vs Intégrité)** :
   * *Gain à court terme* : Désactiver les contraintes de clés étrangères (ou les ignorer) supprime la surcharge algorithmique liée à la vérification d'existence (`lookup`) dans la table parente $\text{Client}$ lors de chaque instruction `INSERT`, validant le gain de $12\%$ de temps processeur.
   * *Risque et compromis (Esprit critique)* : Ce gain est un **compromis technique à haut risque**. En éliminant l'intégrité référentielle, on s'expose à l'insertion de "tuples orphelins" (commandes rattachées à un $\text{id\_client}$ inexistant). 
   * *Conclusion scientifique* : Si le gain de performance est justifiable dans le cadre d'un traitement par lots (*batch processing*) de données migrées et préalablement nettoyées, la désactivation permanente des contraintes va à l'encontre des propriétés ACID des SGBD relationnels, dégradant la fiabilité intrinsèque de la base de données scientifique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
