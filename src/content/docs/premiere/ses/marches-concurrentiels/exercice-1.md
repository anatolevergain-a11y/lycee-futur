---
title: "Exercice 1 : Fonctionnement du marché concurrentiel (Offre / Demande)"
description: "Application pratique du chapitre Marchés et prix"
---

### 🌐 Contexte & Données scientifiques

En sciences économiques, le modèle de l'équilibre concurrentiel est un outil théorique (fondé sur les hypothèses du modèle de concurrence pure et parfaite de Léon Walras et Alfred Marshall) qui permet d'analyser la formation des prix par la confrontation de l'offre et de la demande. 

Soit le marché du blé tendre (marché standardisé par excellence) dans une zone géographique donnée. Les économistes estiment, pour une période $t$, les fonctions linéaires d'offre et de demande agrégées de la manière suivante :

- Fonction de demande : $D(P) = -150P + 4500$
- Fonction d'offre : $S(P) = 250P - 500$

Où :
- $P$ représente le prix d'une tonne de blé en euros (€).
- $D(P)$ représente la quantité demandée en milliers de tonnes.
- $S(P)$ représente la quantité offerte en milliers de tonnes.

*Note de rigueur scientifique :* Ce modèle repose sur des hypothèses fortes (atomicité, homogénéité, fluidité, transparence, mobilité) rarement réunies à l'état pur dans la réalité empirique. De plus, l'élasticité de l'offre et de la demande à court terme est souvent faible en agriculture en raison des cycles biologiques de production, ce qui peut générer des surajustements par les prix (phénomène de type "cobweb" ou théorème toile d'araignée).

---

### ❓ Énoncé

1. **Calcul de l'équilibre :** Déterminez algébriquement le prix d'équilibre $P^*$ sur ce marché ainsi que la quantité d'équilibre $Q^*$.
2. **Analyse du déséquilibre :** Supposons que, suite à une intervention publique ou à un accord interprofessionnel, le prix soit fixé de manière réglementaire à $P_1 = 15\,€$ la tonne. Calculez les quantités offertes et demandées à ce prix. Qualifiez la situation de marché observée (pénurie ou excédent) et chiffrez-la.
3. **Étude d'un choc exogène :** Une sécheresse exceptionnelle réduit la récolte. La nouvelle fonction d'offre devient $S'(P) = 250P - 1500$. Calculez le nouveau prix d'équilibre $P^{**}$ et commentez l'évolution par rapport à la situation initiale.
4. **Esprit critique :** Discutez de la pertinence de ce modèle mathématique pour rendre compte de la réalité des marchés agricoles contemporains, en intégrant la notion d'asymétrie d'information ou d'externalités.

---

### 💡 Indice de méthode

- **Pour la question 1 :** Rappelez la condition fondamentale d'équilibre sur un marché concurrentiel, à savoir l'égalité entre l'offre et la demande ($D(P) = S(P)$).
- **Pour la question 2 :** Injectez la valeur de $P_1$ dans les fonctions $D(P)$ et $S(P)$. Comparez les résultats : si $S > D$, il y a un excédent ; si $D > S$, il y a une pénurie.
- **Pour la question 3 :** Procédez de la même manière qu'à la question 1 en remplaçant l'ancienne fonction d'offre par la nouvelle $S'(P)$.
- **Pour la question 4 :** Interrogez-vous sur la validité des hypothèses du modèle (le blé est-il un produit parfaitement homogène à l'échelle mondiale ? Les producteurs ont-ils une information parfaite sur le climat futur ?).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de l'équilibre initial
À l'équilibre concurrentiel, la quantité demandée est égale à la quantité offerte :
$$D(P^*) = S(P^*)$$

En remplaçant par les équations :
$$-150P^* + 4500 = 250P^* - 500$$

Regroupons les termes en $P^*$ d'un côté et les constantes de l'autre :
$$4500 + 500 = 250P^* + 1500P^*$$
$$5000 = 400P^*$$

Isolons $P^*$ :
$$P^* = \frac{5000}{400} = 12,5$$
Le prix d'équilibre est donc de **$12,5\,€$ par tonne**.

Pour trouver la quantité d'équilibre $Q^*$, injectons $P^*$ dans l'une ou l'autre des fonctions (vérifions avec les deux) :
- Via la demande : $D(12,5) = -150(12,5) + 4500 = -1875 + 4500 = 2625$
- Via l'offre : $S(12,5) = 250(12,5) - 500 = 3125 - 500 = 2625$

La quantité d'équilibre est de **$2625$ milliers de tonnes** (soit 2,625 millions de tonnes).

#### 2. Analyse du déséquilibre (Prix fixé à $P_1 = 15\,€$)
Calculons la demande et l'offre pour $P_1 = 15$ :
- Demande : $D(15) = -150(15) + 4500 = -2250 + 4500 = 2250$ milliers de tonnes.
- Offre : $S(15) = 250(15) - 500 = 3750 - 500 = 3250$ milliers de tonnes.

*Analyse :* À ce prix de $15\,€$ (supérieur au prix d'équilibre), l'offre ($3250$) est supérieure à la demande ($2250$). 
Nous sommes en situation **d'excédent** (ou de surproduction). 
L'ampleur de cet excédent est de :
$$S(15) - D(15) = 3250 - 2250 = 1000 \text{ milliers de tonnes}$$
*Limite économique :* Dans un marché de concurrence pure et parfaite, la libre flexibilité des prix devrait entraîner une baisse du prix vers $P^*$ pour résorber cet excédent. Si le prix est maintenu artificiellement (prix plancher), cela nécessite une intervention externe (stockage public, subventions à l'exportation).

#### 3. Étude du choc exogène sur l'offre
La nouvelle fonction d'offre est $S'(P) = 250P - 1500$ (choc d'offre négatif, la production est plus coûteuse ou plus rare pour chaque niveau de prix). 
L'équilibre se lit toujours par l'égalité $D(P) = S'(P)$ :
$$-150P + 4500 = 250P - 1500$$
$$4500 + 1500 = 250P + 150P$$
$$6000 = 400P^{**}$$
$$P^{**} = \frac{6000}{400} = 15$$

Le nouveau prix d'équilibre est de **$15\,€$ la tonne** (et la quantité échangée devient $D(15) = 2250$ milliers de tonnes). 
*Commentaire :* Une diminution de l'offre (déplacement de la courbe vers la gauche) entraîne mathématiquement une hausse du prix d'équilibre et une baisse des quantités échangées. C'est la retranscription microéconomique de la loi de l'offre et de la demande face à un aléa climatique.

#### 4. Discussion critique du modèle
Le modèle offre-demande fournit un cadre d'analyse puissant mais présente des limites épistémologiques et empiriques :
- **Hypothèse d'homogénéité :** Le blé n'est pas un produit uniforme (blé meunier, blé feed pour le bétail, agriculture biologique vs conventionnelle), ce qui fragmente le marché en une multitude de sous-marchés interconnectés mais distincts.
- **Asymétrie d'information :** Sur les marchés agricoles, les producteurs disposent rarement d'une information parfaite sur la demande mondiale future au moment de planter, ce qui génère des anticipations parfois erronées (cycles conjoncturels).
- **Externalités et interventions :** L'intervention publique (PAC en Europe, subventions, normes environnementales) et la présence de grands négociants mondiaux (oligopoles d'intermédiation) modifient la libre formation des prix, s'éloignant ainsi du modèle idéal-typique de la concurrence pure et parfaite.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
