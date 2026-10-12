---
title: "Exercice 3 : LMD/LDD et intégrité des données"
description: "Application pratique du chapitre Bases de données relationnelles SQL"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'optimisation du réseau de transport d'une métropole européenne, la gestion des données de trafic en temps réel est confiée à un système centralisé reposant sur un SGBDR (Système de Gestion de Bases de Données Relationnelles). Le système traite un volume moyen de $V = 1.2 \times 10^5$ transactions par heure aux heures de pointe, impliquant des capteurs géolocalisés et des flottes de véhicules.

L'intégrité et la cohérence des données sont des impératifs critiques pour la sécurité et la régulation du trafic. Une défaillance dans la contrainte d'unicité ou d'intégrité référentielle peut corrompre les modèles prédictifs d'affectation des feux tricolores ou fausser les bilans d'émissions de $CO_2$ ($5.4 \text{ g/s}$ par véhicule à l'arrêt). 

Soit le schéma conceptuel partiel initial :
*   $\text{Ligne}(id\_ligne, nom, type\_transport)$
*   $\text{Vehicule}(immatriculation, id\_ligne, annee\_mise\_en\_service, kilometrage)$

Pour répondre aux exigences normatives de traçabilité, l'administration impose d'ajouter une table $\text{Maintenance}$ enregistrant les interventions sur les véhicules, tout en garantissant l'atomicité des transactions et le respect strict des contraintes d'intégrité référentielle ($FOREIGN\ KEY$).

---

### ❓ Énoncé

1. **(LDD)** Rédiger les requêtes SQL permettant de créer la table `Maintenance` sachant qu'un enregistrement de maintenance possède un identifiant unique auto-incrémenté, une date d'intervention, un coût exprimé en euros (avec deux décimales), et qu'il est obligatoirement rattaché à un véhicule existant via son immatriculation. En cas de suppression du véhicule, la traçabilité impose de refuser la suppression si des maintenances y sont rattachées.
2. **(LMD & Intégrité)** Suite à une erreur de saisie, un véhicule immatriculé `"AB-123-CD"` a vu son kilométrage initialement enregistré à $150000\text{ km}$ ramené par erreur à $0\text{ km}$. Écrire la requête SQL corrective permettant de rétablir la valeur exacte tout en s'assurant que le nouveau kilométrage est supérieur ou égal à l'ancien enregistré avant la correction erronée ($150000$).
3. **(Analyse critique et performance)** L'ajout d'une contrainte d'intégrité référentielle et d'index sur de grands volumes de données engendre un compromis complexe entre la sécurité des données et le temps de réponse (latence). Si le temps d'insertion d'une ligne passe de $t_1 = 1.2\text{ ms}$ (sans contrainte d'intégrité) à $t_2 = 3.8\text{ ms}$ (avec intégrité référentielle active et journalisation ACID), calculez l'impact temporel cumulé pour le volume horaire de pointe $V$. Discutez des limites de ce modèle face à l'exigence de temps réel.

---

### 💡 Indice de méthode

*   **Question 1 :** Pensez à utiliser les types de données adaptés en SQL (`SERIAL` ou `AUTO_INCREMENT`, `DATE`, `DECIMAL(10,2)`, `VARCHAR`). La clause d'intégrité référentielle par défaut (sans `ON DELETE CASCADE`) refuse la suppression si des dépendances existent.
*   **Question 2 :** La modification de données se fait via l'instruction `UPDATE`. Pour garantir la condition logique, la clause `WHERE` doit combiner l'identification de la ligne et une vérification d'état.
*   **Question 3 :** Exprimez le surcoût temporel unitaire $\Delta t = t_2 - t_1$, puis multipliez-le par le volume $V$. Pour l'analyse critique, considérez la balance entre la cohérence absolue ( ACID ) et la disponibilité/performance dans les systèmes distribués à grande échelle (théorème CAP).

---

### 📋 Correction détaillée pas à pas

#### 1. Création de la table `Maintenance` (LDD)

```sql
CREATE TABLE Maintenance (
    id_maintenance INT AUTO_INCREMENT PRIMARY KEY,
    immatriculation VARCHAR(9) NOT NULL,
    date_intervention DATE NOT NULL,
    cout DECIMAL(10, 2) CHECK (cout >= 0),
    CONSTRAINT fk_vehicule 
        FOREIGN KEY (immatriculation) 
        REFERENCES Vehicule(immatriculation)
        ON UPDATE CASCADE
        -- Par défaut, ON DELETE RESTRICT est appliqué implicitement 
        -- pour refuser la suppression en cas de dépendance.
);
```
*Justification scientifique :* L'utilisation de `DECIMAL(10,2)` évite les erreurs d'arrondi inhérentes aux types à virgule flottante (`FLOAT`/`DOUBLE`), ce qui est crucial pour la comptabilité analytique. La contrainte `CHECK` garantit la validité physique du coût ($\text{coût} \ge 0$).

#### 2. Correction de données (LMD)

```sql
UPDATE Vehicule 
SET kilometrage = 150000 
WHERE immatriculation = 'AB-123-CD' 
  AND kilometrage = 0;
```
*Justification scientifique :* L'ajout de la condition `AND kilometrage = 0` dans la clause `WHERE` agit comme une barrière logique de sécurité (verrou optimiste applicatif). Elle garantit que la modification n'écrase pas une valeur valide intermédiaire qui aurait été insérée légitimement entre-temps.

#### 3. Analyse d'impact temporel et esprit critique

*   **Calcul du surcoût unitaire :**
    $$\Delta t = t_2 - t_1 = 3.8\text{ ms} - 1.2\text{ ms} = 2.6\text{ ms}$$

*   **Calcul de l'impact temporel cumulé pour le volume horaire $V$ :**
    Pour $V = 1.2 \times 10^5$ transactions par heure :
    $$\text{Temps total perdu} = V \times \Delta t = 1.2 \times 10^5 \times 2.6\text{ ms}$$
    $$\text{Temps total perdu} = 312\,000\text{ ms} = 312\text{ s} \approx 5.2\text{ minutes}$$

    Le système accumule donc un retard de traitement équivalent à $5.2$ minutes de calculs cumulés par heure de pointe uniquement à cause des vérifications d'intégrité et de la journalisation.

*   **Discussion critique :**
    Ce calcul met en évidence un compromis fondamental (*trade-off*) en architecture des données :
    1.  **Sécurité et Intégrité (ACID) :** Garantir une base de données rigoureusement cohérente empêche les "orphelins" de données et assure une traçabilité juridique et technique irréprochable.
    2.  **Performance et Temps Réel :** Dans le contexte des transports intelligents (ITS), une latence accrue peut rendre les données obsolètes au moment où elles sont analysées par les algorithmes de régulation. 

    Face à ces limites, les architectures modernes adoptent parfois une approche assouplie (base de données NoSQL ou cohérence éventuelle - *eventual consistency*) pour l'ingestion brute des capteurs à haute fréquence, couplée à un traitement par batch (par lots) pour les données relationnelles nécessitant une intégrité stricte.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
