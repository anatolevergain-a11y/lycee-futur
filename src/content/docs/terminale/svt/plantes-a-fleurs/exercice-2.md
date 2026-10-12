---
title: "Exercice 2 : Reproduction sexuée des angiospermes et coévolution avec les pollinisateurs"
description: "Application pratique du chapitre Plantes à fleurs et vie fixée"
---

### 🌐 Contexte & Données scientifiques

Malgré leur immobilité, les plantes à fleurs (Angiospermes) assurent leur reproduction sexuée et la dissémination de leurs gamètes par le biais d'interactions biotiques complexes, souvent qualifiées de coévolution avec les insectes pollinisateurs. Le genre *Ophrys* (Orchidacées) offre un modèle remarquable de mimétisme sexuel (pseudocopulation) : la fleur ne produit aucun nectar, mais émet des phéromones mimant les hormones sexuelles de femelles d'Hyménoptères (ici, l'abeille solitaire *Andrena nigroaenea*), tout en présentant un labelle morphologiquement similaire à l'abdomen de l'insecte femelle.

Une étude écologique menée sur $5$ ans dans le Sud de la France a permis de quantifier le succès reproductif de l'orchidée *Ophrys sphegodes* en fonction de la densité locale de mâles d'*. Andrena nigroaenea*. Les mesures expérimentales et phénologiques ont conduit au recueil des données regroupées dans le **Tableau 1**.

**Tableau 1 :** Paramètres mesurés pour une population d'inter-action *Ophrys sphegodes* - *Andrena nigroaenea*.

| Paramètre mesuré | Valeur moyenne observée | Écart-type observé | Incertitude de mesure |
| :--- | :---: | :---: | :---: |
| Densité de mâles (individus par $\text{m}^2$) | $4{,}2$ | $\pm 1{,}1$ | $\pm 0{,}2$ |
| Taux de pollinisation croisée (% des fleurs) | $68{,}5$ | $\pm 8{,}4$ | $\pm 1{,}5$ |
| Nombre moyen de pollinies exportées par inflorescence | $3{,}2$ | $\pm 0{,}9$ | $\pm 0{,}1$ |
| Coût énergétique biosynthétique des phéromones ($\text{mg de glucose équivalent par jour}$) | $1{,}45$ | $\pm 0{,}30$ | $\pm 0{,}05$ |

*Note méthodologique :* Le taux de pollinisation croisée est estimé par le comptage des pollinies déposées sur le stigmate par rapport au nombre total de fleurs réceptives. La coévolution est dite « généraliste » ou « spécialisée » selon le degré de spécificité chimique et morphologique. Dans le cas d'*Ophrys*, la relation est hautement spécialisée, ce qui interroge sur la vulnérabilité de la plante face aux fluctuations des effectifs du pollinisateur.

---

### ❓ Énoncé

1. **Analyser** les données du **Tableau 1** en qualifiant précisément la nature de l'interaction biotique entre *Ophrys sphegodes* et *Andrena nigroaenea*, en distinguant les avantages immédiats et les coûts métaboliques pour chaque partenaire.
2. **Démontrer**, à l'aide d'un raisonnement logique fondé sur la théorie de la sélection naturelle, en quoi le mimétisme chimique et morphologique d'*Ophrys sphegodes* constitue une réponse évolutive efficace mais potentiellement coûteuse face à la contrainte de la vie fixée.
3. **Calculer** l'efficacité globale de reproduction de la plante, définie par le rapport entre le nombre moyen de graines viables produites par inflorescence ($\text{G}$) et le coût énergétique journalier de production des phéromones ($\text{C}$), sachant qu'une pollinie fructifiée génère en moyenne $4500$ graines viables sous réserve d'un taux de réussite de fécondation de $85\,\%$. Exprimez le résultat avec l'unité appropriée.
4. **Discuter** la validité du modèle de coévolution stricte en soulignant une limite majeure ou un biais méthodologique inhérent aux études observationnelles de terrain de type *in situ* sur ce type d'interaction.

---

### 💡 Indice de méthode

* **Pour la question 1 & 2 :** Mobilisez les concepts de fitness (valeur sélective), de compromis évolutifs (*trade-offs*) et de mutualisme non trophique (tromperie). Veillez à ne pas employer de téléologie (la plante ne « cherche pas » à attirer, elle subit une pression de sélection).
* **Pour la question 3 :** Procédez par étapes. Calculez d'abord le nombre moyen de pollinies effectivement utilisées pour la fécondation à partir du taux de pollinisation croisée et du nombre de pollinies exportées. Multipliez ensuite par le nombre de graines par pollinie et par le taux de réussite. Rapportez enfin cette valeur globale à la variable $\text{C}$.
* **Pour la question 4 :** Interrogez la causalité *vs* la corrélation. Que se passe-t-il si la densité du pollinisateur chute en raison d'un facteur abiotique externe (ex. : pesticides, climat) ?

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse de l'interaction et bilan coûts/bénéfices
* **Nature de l'interaction :** Il s'agit d'une interaction à bénéfice unilatéral pour la plante (exploitation de la pulsion sexuelle du mâle) sans récompense trophique (absence de nectar). Pour l'insecte, l'interaction présente un coût net (perte de temps, énergie dépensée pour la pseudocopulation, absence de gain énergétique en retour). On qualifie cette relation de mutualisme parasitaire ou de tromperie sexuelle.
* **Bilan pour la plante :** 
  * *Bénéfice :* Dissémination croisée du pollen garantissant le brassage génétique sans dépense d'énergie pour la fabrication de nectar.
  * *Coût :* Investissement métabolique constant pour la biosynthèse des composés organiques volatils (phéromones), estimé à $1{,}45 \text{ mg de glucose équivalent par jour}$ (Tableau 1).

#### 2. Démonstration de la réponse évolutive et contrainte de la vie fixée
* La vie fixée empêche les Angiospermes de se déplacer pour trouver un partenaire sexuel. La sélection naturelle favorise donc les individus émettant des signaux attractifs de loin. 
* Les mutations aléatoires ayant conduit à une plus grande similitude chimique (mimétisme des phéromones) et morphologique (labelle) ont maximisé le taux de visites par les mâles d'*. Andrena nigroaenea*. 
* Ce caractère confère un avantage reproductif immédiat (exportation des pollinies), assurant la transmission des allèles correspondants à la génération suivante. Le compromis réside dans le fait qu'une trop grande spécialisation rend la plante totalement dépendante d'une seule espèce vectrice.

#### 3. Calcul de l'efficacité globale de reproduction
* **Étape A : Calcul du nombre moyen de pollinies exportées et utilisées.**
  * Nombre moyen de pollinies exportées par inflorescence ($P_e$) : $3{,}2$.
  * Taux de pollinisation croisée ($\tau$) : $68{,}5\,\%$, soit $0{,}685$.
  * Nombre moyen de pollinies efficaces ($P_{eff}$) :
    $$P_{eff} = P_e \times \tau = 3{,}2 \times 0{,}685 \approx 2{,}192 \text{ pollinies}$$

* **Étape B : Calcul du nombre moyen de graines viables par inflorescence ($\text{G}$).**
  * Nombre de graines par pollinie : $4500$.
  * Taux de réussite de fécondation : $85\,\%$, soit $0{,}85$.
  * Calcul de $\text{G}$ :
    $$\text{G} = P_{eff} \times 4500 \times 0{,}85 = 2{,}192 \times 3825 \approx 8384{,}4 \text{ graines}$$

* **Étape C : Calcul de l'efficacité globale de reproduction ($\text{E}$).**
  * Coût énergétique journalier ($\text{C}$) : $1{,}45 \text{ mg de glucose équivalent par jour}$. 
  * *Hypothèse implicite de calcul :* Si l'on rapporte la production totale de graines à la dépense quotidienne (sur une base normalisée, par exemple par jour de floraison), on obtient :
    $$\text{E} = \frac{\text{G}}{\text{C}} = \frac{8384{,}4 \text{ graines}}{1{,}45 \text{ mg de glucose/jour}} \approx 5782{,}34 \text{ graines} \cdot \text{mg}^{-1} \cdot \text{jour}$$
  * *Résultat final rigoureux :* L'efficacité de reproduction est d'environ $5{,}8 \times 10^3 \text{ graines} \cdot \text{mg}^{-1} \cdot \text{jour}$ (en conservant deux chiffres significatifs cohérents avec les données d'entrée).

#### 4. Discussion critique et limites du modèle
* **Limites méthodologiques :** Les études de terrain *in situ* reposent sur des corrélations observationnelles (densité de mâles *vs* taux de pollinisation). Il est difficile d'isoler expérimentalement la variable « densité de pollinisateurs » des facteurs de confusion environnementaux, tels que la température, l'hygrométrie ou la concurrence visuelle avec d'autres espèces florales en co-floraison.
* **Fragilité évolutive :** La coévolution spécialisée induit un risque écologique majeur (impasse évolutive). En cas de modification abiotique (changement climatique) ou biotique (fragmentation des habitats réduisant les populations d'*Andrena*), l'orchidée ne dispose d'aucune plasticité immédiate (pas de report vers un autre pollinisateur généraliste), ce qui peut conduire à l'extinction locale de la population végétale malgré un taux de succès apparent mesuré en année « normale ».

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
