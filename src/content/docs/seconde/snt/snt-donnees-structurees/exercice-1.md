---
title: "Exercice 1 : Format CSV et analyse de tables de données"
description: "Application pratique du chapitre Données structurées et traitement"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude de la transition énergétique et de l'analyse spatiale, les services statistiques fournissent des données géographiques et démographiques sous forme de fichiers textuels légers, le plus souvent au format **CSV** (*Comma-Separated Values*). 

Considérons un extrait de table de données concernant quatre communes françaises. Les données sont structurées de la manière suivante : chaque ligne représente un enregistrement (une commune) et chaque colonne représente un attribut (le nom, la région, la population, la superficie, et le nombre de bornes de recharge pour véhicules électriques).

Voici le contenu brut du fichier `mobilite_urbaine.csv` :

```csv
commune,region,population,superficie_km2,bornes_recharge
Nantes,Pays de la Loire,320000,65.19,145
Lyon,Auvergne-Rhône-Alpes,522228,47.87,280
Brest,Bretagne,139619,49.51,60
Strasbourg,Grand Est,287228,78.26,210
```

L'analyse de ces données brutes nécessite de comprendre la syntaxe du format CSV (séparateurs, en-têtes, typage des données) ainsi que les limites inhérentes à l'utilisation de ratios statistiques bruts pour la prise de décision publique (par exemple, l'équité territoriale face à la simple densité).

---

### ❓ Énoncé

1. **Analyse syntaxique du format :** En observant la structure du fichier `mobilite_urbaine.csv`, identifiez le caractère utilisé comme séparateur de champs (délimiteur) et le rôle de la première ligne. Précisez quel est le type informatique (chaîne de caractères, entier, nombre à virgule flottante) implicite de chaque colonne pour l'enregistrement concernant la commune de Nantes.

2. **Traitement algorithmique et calcul de densité :** 
   Le gestionnaire souhaite analyser la densité de population de chaque commune, définie par la formule mathématique :
   $$d = \frac{N}{S}$$
   où $N$ représente la population totale et $S$ la superficie en $\text{km}^2$. 
   Écrivez, sous forme de tableau ou de liste, les valeurs de densité $d$ obtenues pour les quatre communes (arrondies à l'unité près).

3. **Indicateur d'équipement et esprit critique :** 
   On définit le taux d'équipement $T$ en infrastructures de recharge comme le nombre de bornes pour $1000 \text{ habitants}$, exprimé par :
   $$T = \frac{B}{N} \times 1000$$
   où $B$ est le nombre de bornes de recharge et $N$ la population. Calculez ce taux $T$ pour Lyon et pour Brest (arrondi à deux décimales). 
   *Question critique :* Discutez des limites de l'utilisation exclusive de cet indicateur quantitatif ($T$) pour évaluer la pertinence de la politique de transition écologique d'un territoire. Quels autres facteurs qualitatifs ou contextuels faudrait-il impérativement intégrer pour affiner l'analyse ?

---

### 💡 Indice de méthode

* **Question 1 :** Observez attentivement les virgules qui séparent les valeurs textuelles et numériques. Rappelez-vous qu'en informatique, un fichier CSV ne contient par défaut que des caractères textuels ; le typage (conversion en `int` ou `float`) est opéré lors du chargement dans un tableau de données (comme avec le module `csv` ou la bibliothèque `pandas` en Python).
* **Question 2 :** Veillez à bien identifier les attributs correspondants dans chaque ligne (`population` divisée par `superficie_km2`). Posez l'opération mathématique avec rigueur.
* **Question 3 :** Attention aux unités ! La formule demande un ratio pour $1000 \text{ habitants}$. Pour l'esprit critique, interrogez-vous sur la répartition spatiale intra-muros des bornes, la puissance de charge, ou encore le type de flotte automobile locale (part des véhicules électriques par rapport aux hybrides ou thermiques).

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse syntaxique du format
* **Séparateur :** Le caractère utilisé pour séparer les colonnes (les champs) est la virgule (`,`), ce qui justifie l'acronyme CSV (*Comma-Separated Values*).
* **Rôle de la première ligne :** La première ligne (`commune,region,population,superficie_km2,bornes_recharge`) constitue l'**en-tête** (*header*). Elle nomme les variables et sert de référence pour accéder aux données par leur nom dans un traitement automatisé.
* **Typage pour la commune de Nantes (`Nantes,Pays de la Loire,320000,65.19,145`) :**
  - `commune` : `str` (Chaîne de caractères) = `"Nantes"`
  - `region` : `str` (Chaîne de caractères) = `"Pays de la Loire"`
  - `population` : `int` (Entier) = $320000$
  - `superficie_km2` : `float` (Flottant / nombre décimal) = $65.19 \text{ km}^2$
  - `bornes_recharge` : `int` (Entier) = $145$

#### 2. Calcul de la densité de population ($d = \frac{N}{S}$)
Appliquons la formule pour chaque commune :
* **Nantes :** $d = \frac{320000}{65.19} \approx 4908{,}81 \implies \mathbf{4909 \text{ hab./km}^2}$
* **Lyon :** $d = \frac{522228}{47.87} \approx 10909{,}30 \implies \mathbf{10909 \text{ hab./km}^2}$
* **Brest :** $d = \frac{139619}{49.51} \approx 2820{,}02 \implies \mathbf{2820 \text{ hab./km}^2}$
* **Strasbourg :** $d = \frac{287228}{78.26} \approx 3670{,}05 \implies \mathbf{3670 \text{ hab./km}^2}$

#### 3. Calcul du taux d'équipement $T$ et esprit critique
* **Pour Lyon :**
  $$T_{\text{Lyon}} = \frac{280}{522228} \times 1000 \approx 0{,}536 \implies \mathbf{0{,}54 \text{ bornes pour } 1000 \text{ habitants}}$$

* **Pour Brest :**
  $$T_{\text{Brest}} = \frac{60}{139619} \times 1000 \approx 0{,}430 \implies \mathbf{0{,}43 \text{ bornes pour } 1000 \text{ habitants}}$$

* **Analyse critique :** 
  L'indicateur quantitatif $T$ suggère que Lyon est légèrement mieux dotée que Brest en matière d'infrastructures de recharge par habitant. Cependant, se limiter à ce ratio présente plusieurs biais scientifiques et méthodologiques majeurs :
  1. **L'hétérogénéité spatiale :** Le nombre brut de bornes ne renseigne en rien sur leur accessibilité géographique (effet de concentration au centre-ville versus désertification dans les zones périphériques ou périurbaines).
  2. **La performance technique :** Une borne de recharge rapide (courant continu > $150 \text{ kW}$) n'a pas la même efficacité systémique qu'une borne de recharge lente (courant alternatif $22 \text{ kW}$). Le fichier CSV ne donne aucune information sur la puissance unitaire.
  3. **Le taux d'usage réel :** Le ratio est calculé sur la population totale et non sur le parc effectif de véhicules électriques immatriculés dans la zone, ce qui fausse la mesure de la satisfaction de la demande réelle. 

  *Conclusion :* Un traitement de données rigoureux nécessite de croiser les tables CSV (par exemple, en ajoutant les données d'immatriculation des véhicules) et de nuancer les indicateurs statistiques par des critères qualitatifs pour éviter des conclusions hâtives en politique publique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
