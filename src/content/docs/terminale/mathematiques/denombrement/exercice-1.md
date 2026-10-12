---
title: "Exercice 1 : Calculs de combinaisons en génétique"
description: "Application pratique du chapitre Dénombrement et combinaisons"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du diagnostic moléculaire des prédispositions héréditaires au cancer colorectal non polyposique (syndrome de Lynch et formes associées), les laboratoires de génétique médicale utilisent des panels de séquençage ciblé de nouvelle génération (*Next-Generation Sequencing*, NGS).

Un laboratoire hospitalier dispose d'une bibliothèque de référence comportant $25\text{ gènes}$ d'intérêt documentés :
- $5\text{ gènes}$ dits « à haute pénétrance » (notamment les gènes du système de réparation des mésappariements de l'ADN : *MLH1*, *MSH2*, *MSH6*, *PMS2* et *EPCAM*), pour lesquels une mutation confère un risque cumulé élevé de développer une pathologie ;
- $20\text{ gènes}$ dits « à pénétrance modérée ou émergents » (tels que *MUTYH*, *CHEK2*, *APC*, etc.).

Pour des raisons d'allocation budgétaire et de débit analytique sur ses séquenceurs, l'équipe technique conçoit un panel miniaturisé d'analyse préliminaire comprenant un sous-ensemble strict de $6\text{ gènes}$ distincts choisis parmi les $25$. L'ordre d'analyse des gènes sur la puce de capture n'a pas d'influence technique sur le résultat du séquençage.

---

### ❓ Énoncé

1. **Choix global du panel :**  
   Justifier l'utilisation des combinaisons pour ce modèle, puis calculer le nombre total de panels distincts de $6\text{ gènes}$ qu'il est possible de concevoir à partir de cette bibliothèque de $25\text{ gènes}$.

2. **Stratification selon la pénétrance :**  
   Pour garantir la pertinence clinique du test, les biologistes souhaitent évaluer diverses compositions :
   - **a)** Combien de panels différents comportent exactement $2\text{ gènes}$ à haute pénétrance ?
   - **b)** Combien de panels différents comportent au moins $1\text{ gène}$ à haute pénétrance ?

3. **Dénombrement des profils alléliques :**  
   On s'intéresse à un panel spécifique fixé de $6\text{ gènes}$. Pour chaque gène analysé chez un individu, le séquençage classe le statut allélique selon trois modalités exclusives : 
   - homozygote sauvage ($\text{S}$),
   - hétérozygote porteur d'un variant ($\text{H}$),
   - homozygote muté ($\text{M}$).  
   Déterminer le nombre de profils génétiques globaux distincts comportant exactement $2\text{ gènes}$ sous la modalité $\text{H}$, $1\text{ gène}$ sous la modalité $\text{M}$, et le reste sous la modalité $\text{S}$.

4. **Analyse critique et limites du modèle mathématique :**  
   Dans une étude d'association pangénomique (GWAS), si l'on analysait simultanément $k = 100\text{ marqueurs bi-alléliques}$, l'espace des configurations génotypiques potentielles serait égal à $3^{100} \approx 5{,}15 \times 10^{47}$.  
   Expliquer pourquoi, en génétique des populations réelle, le calcul brut de combinaisons d'allèles indépendants surestime considérablement le nombre de profils effectivement observables (on évoquera le phénomène de *déséquilibre de liaison* ou liaison génétique physique).

---

### 💡 Indice de méthode

- Un sous-ensemble de $k$ éléments choisis parmi $n$ sans ordre et sans répétition est une **combinaison**. Le nombre de combinaisons est noté $\binom{n}{k} = \frac{n!}{k!(n-k)!}$.
- Pour dénombrer une condition du type « au moins un », il est souvent plus rapide de dénombrer l'événement contraire (« aucun ») puis de le soustraire à l'univers total.
- Pour la question 3, décomposez le choix du profil en deux étapes indépendantes : d'abord le choix des gènes porteurs de la modalité $\text{H}$, puis le choix de celui porteur de la modalité $\text{M}$.

---

### 📋 Correction détaillée pas à pas

#### Question 1
Un panel est constitué de $6\text{ gènes}$ distincts prélevés parmi les $25\text{ gènes}$ disponibles.  
L'ordre de sélection des gènes n'intervenant pas et chaque gène ne pouvant être sélectionné qu'une seule fois dans le panel, chaque choix correspond mathématiquement à une **partie à $6\text{ éléments}$** (ou combinaison) d'un ensemble à $25\text{ éléments}$.

Le nombre total de panels possibles, noté $N_{\text{total}}$, est :
$$N_{\text{total}} = \binom{25}{6} = \frac{25!}{6! \times (25 - 6)!} = \frac{25 \times 24 \times 23 \times 22 \times 21 \times 20}{6 \times 5 \times 4 \times 3 \times 2 \times 1}$$

Simplifions méthodiquement le quotient :
- $6 \times 4 = 24$, ce qui simplifie le facteur $24$ au numérateur.
- $\frac{25}{5} = 5$.
- $\frac{21}{3} = 7$.
- $\frac{20}{2} = 10$.

Il vient :
$$N_{\text{total}} = 5 \times 23 \times 22 \times 7 \times 10 = 177\,100$$

Il existe donc **$177\,100\text{ panels}$** distincts de $6\text{ gènes}$.

---

#### Question 2

##### a) Exactement 2 gènes à haute pénétrance
La constitution d'un tel panel correspond à deux choix successifs et indépendants (principe multiplicatif) :
1. Choisir $2\text{ gènes}$ parmi les $5\text{ gènes}$ à haute pénétrance : $\binom{5}{2}$ possibilités.
2. Compléter le panel en choisissant les $4\text{ gènes}$ restants parmi les $20\text{ gènes}$ à pénétrance modérée : $\binom{20}{4}$ possibilités.

Calcul des coefficients binomiaux :
$$\binom{5}{2} = \frac{5 \times 4}{2 \times 1} = 10$$
$$\binom{20}{4} = \frac{20 \times 19 \times 18 \times 17}{4 \times 3 \times 2 \times 1} = \frac{116\,280}{24} = 4\,845$$

Le nombre de panels comportant exactement $2\text{ gènes}$ à haute pénétrance est :
$$N_{(2)} = \binom{5}{2} \times \binom{20}{4} = 10 \times 4\,845 = 48\,450\text{ panels}$$

##### b) Au moins 1 gène à haute pénétrance
L'événement contraire de « comporter au moins un gène à haute pénétrance » est « ne comporter aucun gène à haute pénétrance », c'est-à-dire sélectionner l'intégralité des $6\text{ gènes}$ parmi les $20\text{ gènes}$ à pénétrance modérée.

Calcul du nombre de panels sans gène à haute pénétrance ($N_{(0)}$) :
$$N_{(0)} = \binom{20}{6} = \frac{20 \times 19 \times 18 \times 17 \times 16 \times 15}{6 \times 5 \times 4 \times 3 \times 2 \times 1} = 38\,760$$

Par passage au complémentaire :
$$N_{(\ge 1)} = N_{\text{total}} - N_{(0)} = 177\,100 - 38\,760 = 138\,340$$

Il existe donc **$138\,340\text{ panels}$** contenant au moins un gène à haute pénétrance (soit environ $78{,}1\text{ \%}$ des configurations possibles).

---

#### Question 3
Le panel de $6\text{ gènes}$ est désormais fixé : notons-le $\{G_1, G_2, G_3, G_4, G_5, G_6\}$.  
Un profil correspond à une attribution d'un état ($\text{H}$, $\text{M}$ ou $\text{S}$) à chacun des $6\text{ gènes}$.

On cherche le nombre de distributions comportant :
- $2\text{ statuts H}$,
- $1\text{ statut M}$,
- et par déduction $6 - (2 + 1) = 3\text{ statuts S}$.

La construction d'une telle distribution s'effectue en étapes ordonnées :
1. Choisir l'ensemble des $2\text{ gènes}$ qui portent la modalité $\text{H}$ parmi les $6$ :
   $$\binom{6}{2} = \frac{6 \times 5}{2 \times 1} = 15\text{ choix}$$
2. Parmi les $4\text{ gènes}$ restants, choisir le gène unique portant la modalité $\text{M}$ :
   $$\binom{4}{1} = 4\text{ choix}$$
3. Les $3\text{ gènes}$ restants reçoivent obligatoirement la modalité $\text{S}$ :
   $$\binom{3}{3} = 1\text{ choix}$$

D'après le principe multiplicatif, le nombre de profils génétiques répondant à cette contrainte est :
$$N_{\text{profils}} = \binom{6}{2} \times \binom{4}{1} \times \binom{3}{3} = 15 \times 4 \times 1 = 60$$

Il existe **$60\text{ profils génotypiques distincts}$** présentant cette répartition.

---

#### Question 4
Le calcul combinatoire classique repose sur l'hypothèse sous-jacente d'**indépendance stochastique** entre les loci : on suppose que l'état allélique d'un gène n'influence pas celui d'un autre (brassage interchromosomique libre et absence de liaison).

Cependant, en biologie moléculaire :
1. **Liaison génétique et déséquilibre de liaison (*Linkage Disequilibrium*, LD) :** Deux gènes situés sur le même chromosome (synténie) et physiquement proches sont très rarement séparés par des événements de recombinaison homologue (enjambements / *crossing-over*) lors de la méiose. Ils ont tendance à être transmis ensemble sous forme de blocs d'haplotypes. Certains génotypes théoriques ont donc une probabilité quasi nulle d'apparaître, réduisant considérablement la diversité observable par rapport au dénombrement théorique $3^n$.
2. **Conséquence statistique :** Cette réduction de l'espace effectif des configurations est un compromis critique pour les généticiens. D'un côté, elle diminue la dimensionnalité réelle des analyses statistiques ; d'un autre côté, elle induit une forte corrélation entre tests multiples, rendant indispensable l'utilisation de corrections statistiques complexes (comme le contrôle du taux de faux positifs par la méthode de Benjamini-Hochberg plutôt que la correction trop conservatrice de Bonferroni).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
