---
title: "Cours : Patrimoine génétique et santé"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Fiche de Cours : Patrimoine génétique et santé

## 📌 1. Notions clés & Définitions

*   **Patrimoine génétique (ou génome) :** Ensemble de l'information génétique portée par l'ADN d'un organisme. Chez l'espèce humaine, il est réparti dans le noyau de chaque cellule somatique sous la forme de 23 paires de chromosomes.
*   **Mutation :** Modification aléatoire de la séquence des nucléotides de la molécule d'ADN. Les mutations peuvent être ponctuelles (substitution, insertion, délétion d'un ou plusieurs nucléotides) ou chromosomiques. Elles constituent la source principale de la diversité génétique, mais peuvent aussi altérer le fonctionnement cellulaire.
*   **Allèle :** Version différente d'un même gène, caractérisée par une séquence nucléotidique spécifique. Les mutations sont à l'origine de nouveaux allèles.
*   **Facteurs environnementaux :** Éléments extérieurs au patrimoine génétique (mode de vie, alimentation, exposition aux UV, tabac, agents infectieux, etc.) susceptibles d'influencer l'état de santé ou d'induire des modifications de l'ADN.
*   **Multifactoriel :** Se dit d'une pathologie (comme certains cancers ou maladies cardiovasculaires) dont le développement résulte d'une interaction complexe entre la prédisposition génétique de l'individu et des facteurs environnementaux.
*   **Phénotype :** Ensemble des caractères observables d'un individu, à différentes échelles (macroscopique, cellulaire et moléculaire). Il dépend du génotype et des interactions avec l'environnement :
    $$\text{Phénotype} = f(\text{Génotype}, \text{Environnement})$$

---

## 📐 2. Formules et Propriétés fondamentales

### A. Fréquence et taux de mutation
Le taux de mutation spontanée s'exprime généralement par le nombre d'erreurs de réplication par nucléotide et par génération cellulaire. Soit $N$ le nombre total de nucléotides et $n$ le nombre de mutations observées :
$$\tau = \frac{n}{N}$$
Bien que des mécanismes enzymatiques de réparation de l'ADN existent (ex. : ADN polymérases dotées d'une activité exonucléasique 3'->5', systèmes de réparation par excision), certaines lésions persistent et deviennent des mutations transmissibles lors de la division cellulaire.

### B. Équilibre de Hardy-Weinberg (Modèle théorique de génétique des populations)
Dans une population idéale, de taille infinie, sans mutation, sans migration, sans sélection et avec une reproduction aléatoire (panmixie), les fréquences alléliques et génotypiques restent constantes d'une génération à l'autre.
Pour un gène à deux allèles ($A$ de fréquence $p$ et $a$ de fréquence $q$) :
$$p + q = 1$$
Les fréquences des génotypes sont données par le développement du binôme :
$$(p + q)^2 = p^2 + 2pq + q^2 = 1$$
*   Fréquence du génotype homozygote $AA$ : $p^2$
*   Fréquence du génotype hétérozygote $Aa$ : $2pq$
*   Fréquence du génotype homozygote $aa$ : $q^2$

### C. Risque multifactoriel et probabilités conditionnelles
La probabilité $P$ de développer une pathologie multifactorielle dépend de la présence d'allèles à risque ($G$) et d'une exposition environnementale ($E$) :
$$P(\text{Maladie}) = P(\text{Maladie} \mid G \cap E) \cdot P(G \cap E) + \dots$$
L'analyse statistique de cohortes permet d'évaluer le **risque relatif** ($RR$) :
$$RR = \frac{I_{\text{exposés}}}{I_{\text{non-exposés}}}$$
où $I$ représente l'incidence de la maladie dans la population considérée.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On étudie une maladie génétique monogénique récessive rare. Dans une population, la fréquence de l'allèle muté $a$ (responsable de la maladie) est estimée à $q = 0,01$. 
En supposant que la population est à l'équilibre de Hardy-Weinberg, calculez :
1. La fréquence de l'allèle normal $A$.
2. La proportion d'individus hétérozygotes (porteurs sains) dans cette population.
3. La proportion d'individus malades.

**Résolution rigoureuse :**

1. **Calcul de la fréquence de l'allèle normal ($p$) :**
   La somme des fréquences alléliques pour un locus à deux allèles est égale à 1 :
   $$p + q = 1$$
   On isole $p$ :
   $$p = 1 - q = 1 - 0,01 = 0,99$$
   *La fréquence de l'allèle normal $A$ est donc de $0,99$ (soit $99\,\%$).*

2. **Calcul de la proportion d'individus hétérozygotes ($2pq$) :**
   D'après le modèle de Hardy-Weinberg, la fréquence des hétérozygotes (génotype $Aa$) est :
   $$2pq = 2 \times 0,99 \times 0,01$$
   $$2pq = 0,0198$$
   *La proportion d'individus porteurs sains est de $0,0198$, soit environ $1,98\,\%$.*

3. **Calcul de la proportion d'individus malades ($q^2$) :**
   La maladie étant récessive, seuls les homozygotes mutants ($aa$) développent la pathologie. Leur fréquence est :
   $$q^2 = (0,01)^2 = 0,0001$$
   *La proportion d'individus malades est de $0,0001$, soit $0,01\,\%$ (ou 1 sur 10 000).*

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Piège 1 : Confondre génotype et phénotype.** 
    *Conseil :* Rappelez-vous toujours que le phénotype s'observe (à l'échelle macroscopique, cellulaire ou moléculaire) tandis que le génotype se déduit ou se lit sur une séquence d'ADN. Un individu hétérozygote pour une maladie récessive a un génotype muté pour un allèle, mais un phénotype sain.
*   **Piège 2 : Déterministes absolus vs probabilités.**
    *Conseil :* Pour les maladies génétiques monogéniques (ex. : mucoviscidose, chorée de Huntington), le déterminisme génétique est fort. En revanche, pour les pathologies multifactorielles (cancers, maladies cardiovasculaires), un allèle de prédisposition n'entraîne pas systématiquement la maladie ; il augmente une probabilité en interaction avec l'environnement. Évitez les formulations trop simplistes du type « le gène de la maladie ».
*   **Piège 3 : Oublier les unités ou les échelles dans les calculs.**
    *Conseil :* Soyez rigoureux lors du passage des fréquences (comprises entre 0 et 1) aux pourcentages (exprimés sur 100). Vérifiez systématiquement que la somme des fréquences génotypiques est bien égale à 1.
*   **Piège 4 : Négliger l'impact des agents mutagènes.**
    *Conseil :* Veillez à bien distinguer l'origine spontanée des mutations (erreurs de réplication de l'ADN polymérase) de l'origine induite par des agents physiques (rayonnements UV, ionisants) ou chimiques (agents alkylants, hydrocarbures aromatiques polycycliques), qui augmentent la fréquence des mutations.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
