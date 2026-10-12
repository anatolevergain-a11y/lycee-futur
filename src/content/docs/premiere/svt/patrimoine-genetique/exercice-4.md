---
title: "Exercice 4 : Mutations génétiques dues aux UV"
description: "Application pratique du chapitre Patrimoine génétique et santé"
---

### 🌐 Contexte concret

Les rayonnements ultraviolets (UV) présents dans la lumière du Soleil sont connus pour être génotoxiques. Une exposition excessive et non protégée au soleil peut altérer l'ADN des cellules de la peau (les kérationocytes) et conduire, à terme, à l'apparition de cancers cutanés, comme les mélanomes ou les carcinomes. 

Nous cherchons à comprendre comment l'énergie des UV modifie chimiquement la molécule d'ADN et quelles en sont les conséquences moléculaires et cellulaires.

---

### ❓ Énoncé

1. **Question 1 :** Expliquer l'effet chimique direct des rayonnements UV sur la molécule d'ADN en se basant sur la structure des brins d'ADN.
2. **Question 2 :** Le gène suppresseur de tumeurs *TP53* code pour la protéine p53, essentielle pour stopper le cycle cellulaire en cas d'ADN endommagé. Chez un patient ayant développé un cancer de la peau, on compare la séquence d'un allèle sain et d'un allèle muté du gène *TP53*.
   
   * Extrait de l'ADN sain : `5' - ATGGCC-3'`
   * Extrait de l'ADN muté : `5' - ATGG**T**C-3'`

   Déterminer le type de mutation subie par cet ADN et préciser sa nature exacte.
3. **Question 3 :** À l'aide d'un codon de l'ARNm, sachant que le brin transcrit de l'ADN sain est `3' - TCCCGG - 5'`, déduire la séquence des acides aminés correspondante. Expliquer pourquoi une telle mutation peut perturber gravement le fonctionnement de la cellule.

---

### 💡 Indice

* *Question 1 :* Pensez aux bases azotées pyrimidiques situées côte à côte sur un même brin d'ADN (notamment la Thymine). Les UV apportent de l'énergie qui favorise la création de liaisons covalentes anormales entre elles.
* *Question 2 :* Comparez nucléotide par nucléotide les deux séquences proposées pour identifier ce qui a été ajouté, retiré ou remplacé.
* *Question 3 :* Rappelez-vous le principe de la transcription (ADN $\rightarrow$ ARNm par complémentarité) puis de la traduction (ARNm $\rightarrow$ chaîne protéique grâce au code génétique). Une modification de la séquence peut changer la structure tridimensionnelle de la protéine p53.

---

### 📋 Correction détaillée pas à pas

#### Correction de la Question 1
Les rayonnements UV (notamment les UV-B) possèdent une énergie absorbée par les bases azotées de l'ADN, en particulier les **Thymines ($T$)**. 
Lorsqu'deux thymines sont adjacentes sur un même brin, l'énergie des UV provoque la formation d'une liaison covalente anormale entre elles, créant ce que l'on appelle un **dimère de thymine**. 
Cette anomalie stérique déforme la double hélice d'ADN, bloquant temporairement la réplication cellulaire et la transcription.

#### Correction de la Question 2
* Comparons les deux séquences :
  * Séquence saine : `5' - A T G G **C** C - 3'`
  * Séquence mutée : `5' - A T G G **T** C - 3'`
* On observe le remplacement du nucléotide Cytosine ($C$) par un Thymine ($T$) en 5ème position.
* Il s'agit d'une **substitution**. Plus précisément, c'est une mutation ponctuelle induite par l'erreur des systèmes de réparation face aux lésions causées par les UV.

#### Correction de la Question 3
1. **Transcription du brin sain** ($3' - T C C C G G - 5'$ donne par complémentarité l'ARNm $5'$ - $A G G G C C - 3'$).
2. **Découpage en codons** : $AGG$ et $GCC$.
3. **Conséquence fonctionnelle :** 
   Si la mutation modifie un codon, elle peut changer la nature d'un acide aminé dans la protéine p53 (mutation faux-sens) ou introduire un codon stop prématuré (mutation non-sens). 
   Puisque la protéine p53 est le "gardien du génome" (elle déclenche la mort cellulaire ou répare l'ADN), une mutation altérant sa forme tridimensionnelle l'empêche de fonctionner. La cellule endommagée continue de se diviser de manière anarchique, ce qui constitue le début du processus tumoral (cancer).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
