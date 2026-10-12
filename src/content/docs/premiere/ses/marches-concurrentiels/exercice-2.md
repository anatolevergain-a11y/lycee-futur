---
title: "Exercice 2 : Impact des taxes, subventions et prix plafonds"
description: "Application pratique du chapitre Marchés et prix"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la transition écologique, les pouvoirs publics cherchent à modifier les incitations sur le marché du logement et de l'énergie. Nous étudions ici le marché fictif mais réaliste de la rénovation thermique des logements individuels (mesurée en milliers d'unités par an) dans une région française. 

Par simplification, les fonctions de demande et d'offre sur ce marché sont modélisées par des relations linéaires. 
Soit $P$ le prix d'une rénovation (en milliers d'euros) et $Q$ la quantité de rénovations demandées ou offertes (en milliers).

Les fonctions initiales du marché sont les suivantes :
* **Fonction de demande :** $Q_d = 120 - 2P$
* **Fonction d'offre :** $Q_s = 3P - 30$

Face à l'urgence climatique et à la précarité énergétique, l'État envisage deux types d'interventions publiques alternatives :
1. **Option A (Subvention) :** L'octroi d'une subvention unitaire $s = 5$ (soit $5\,000$ €) versée aux entreprises pour chaque rénovation effectuée, afin de stimuler l'offre.
2. **Option B (Prix plafond) :** L'instauration d'un prix plafond réglementaire $P_{max} = 26$ (soit $26\,000$ €) pour rendre les travaux plus abordables pour les ménages.

*Note méthodologique : Les modèles économiques simplifiés permettent d'isoler l'effet théorique d'une politique, mais l'analyse empirique doit toujours intégrer les limites comportementales des agents (élasticités, anticipation des prix, effets d'aubaine) et les coûts administratifs de mise en œuvre.*

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Équilibre de marché initial :** Déterminez par le calcul le prix d'équilibre $P^*$ et la quantité d'équilibre $Q^*$ sur ce marché en l'absence de toute intervention publique. Représentez graphiquement la situation (on posera $P$ en ordonnée et $Q$ en abscisse).
2. **Impact d'une subvention (Option A) :** L'État met en place la subvention $s = 5$ versée aux producteurs. 
   a. Expliquez par quel mécanisme économique cette subvention modifie l'équation de l'offre. Déduisez-la nouvelle fonction d'offre $Q_s'$.
   b. Calculez le nouveau prix payé par les consommateurs, le prix reçu par les producteurs, ainsi que la nouvelle quantité échangée.
3. **Impact d'un prix plafond (Option B) :** L'État renonce à la subvention et opte pour la fixation d'un prix plafond $P_{max} = 26$.
   a. Calculez les quantités demandées et offertes à ce prix réglementaire.
   b. Qualifiez la situation de marché ainsi créée et calculez l'ampleur du déséquilibre.
4. **Esprit critique et compromis de politique économique :** En comparant les résultats des questions 2 et 3, discutez des avantages et des limites de ces deux instruments. Pourquoi la théorie économique montre-t-elle qu'un prix plafond génère des rationnements que la subvention évite, tout en soulignant la question du coût budgétaire pour le contribuable ?

---

### 💡 Indice de méthode

* **Pour l'équilibre (Q1) :** Posez l'égalité entre la quantité demandée et la quantité offerte ($Q_d = Q_s$). Résolvez l'équation pour trouver $P^*$, puis réinjectez cette valeur dans l'une des deux fonctions pour trouver $Q^*$.
* **Pour la subvention (Q2) :** Une subvention unitaire $s$ reçue par le producteur réduit son coût marginal. Le prix perçu par le producteur devient $P + s$ (ou le prix payé par l'acheteur est $P_A$ et celui perçu par le vendeur est $P_V = P_A + s$). Modifiez l'offre en remplaçant $P$ par $(P + s)$ ou exprimez l'offre en fonction de $P_V$.
* **Pour le prix plafond (Q3) :** Remplacez $P$ par $P_{max}$ directement dans les fonctions de demande et d'offre. Comparez $Q_d$ et $Q_s$. Si $Q_d > Q_s$, il y a une pénurie (excès de demande).

---

### 📋 Correction détaillée pas à pas

#### 1. Équilibre initial
À l'équilibre, l'offre est égale à la demande : 
$$Q_d = Q_s$$
$$120 - 2P = 3P - 30$$

Résolvons l'équation pour trouver le prix d'équilibre $P^*$ :
$$120 + 30 = 3P + 2P$$
$$150 = 5P \implies P^* = \frac{150}{5} = 30$$
Le prix d'équilibre initial est de $30$ (soit $30\,000$ €).

Pour trouver la quantité d'équilibre $Q^*$, injectons $P^*$ dans la fonction de demande :
$$Q^* = 120 - 2(30) = 120 - 60 = 60$$
La quantité d'équilibre est de $60$ (soit $60\,000$ rénovations).

#### 2. Impact de la subvention (Option A)
a. La subvention de $s = 5$ réduit les coûts de production. Pour chaque niveau de production, le producteur est disposé à vendre à un prix brut inférieur de $5$ unités. La nouvelle équation de l'offre s'établit en remplaçant $P$ par $P - s$ (prix payé par le consommateur) du côté des vendeurs, ou plus rigoureusement en écrivant que l'offre s'exprime par rapport au prix perçu par le producteur $P_v = P_d + 5$.
Reprenons l'offre initiale $Q_s = 3P - 30$. Avec la subvention, l'offre devient :
$$Q_s' = 3(P + 5) - 30 = 3P + 15 - 30 = 3P - 15$$

b. Le nouveau marché s'équilibre là où la demande $Q_d$ rencontre la nouvelle offre $Q_s'$ :
$$120 - 2P = 3P - 15$$
$$120 + 15 = 3P + 2P$$
$$135 = 5P \implies P_{consommateur} = 27$$

Le nouveau prix payé par les consommateurs est donc de $27$ (soit $27\,000$ €).
Le prix reçu par les producteurs est $P_{producteur} = P_{consommateur} + s = 27 + 5 = 32$ (soit $32\,000$ €).
La nouvelle quantité échangée est :
$$Q' = 120 - 2(27) = 120 - 54 = 66$$ (ou via l'offre : $3(32) - 30 = 96 - 30 = 66$).
La quantité de rénovations augmente de $60$ à $66$ milliers.

#### 3. Impact du prix plafond (Option B)
a. L'État fixe un prix maximal $P_{max} évalué à $26$. Testons ce prix dans les deux fonctions :
* **Quantité demandée :** 
  $$Q_d = 120 - 2(26) = 120 - 52 = 68$$
* **Quantité offerte :** 
  $$Q_s = 3(26) - 30 = 78 - 30 = 48$$

b. À ce prix plafond de $26$, la quantité demandée ($68$ milliers) est supérieure à la quantité offerte ($48$ milliers). 
Nous sommes en situation de **pénurie** (ou d'excès de demande). 
L'ampleur du déséquilibre est de :
$$Q_d - Q_s = 68 - 48 = 20$$
Il manque $20\,000$ unités de rénovation par rapport à la demande des ménages au prix légal.

#### 4. Analyse critique et compromis de politique économique
L'analyse de ces deux politiques met en évidence des arbitrages fondamentaux en économie publique :
* **Le prix plafond (Option B)** vise un objectif social d'accessibilité (protéger le pouvoir d'achat des ménages face à la cherté des travaux). Cependant, le modèle montre son inefficacité allocative : en fixant un prix artificiellement bas, il décourage l'offre (baisse de $60$ à $48$ milliers) tout en stimulant la demande. Cela génère un rationnement (pénurie de $20$ milliers) qui nécessite de mettre en place des critères de sélection non marchands (listes d'attente, risque de marché noir ou de baisse de la qualité des travaux).
* **La subvention (Option A)** résout le problème de l'incitation par les prix : elle stimule simultanément la production (hausse à $66$ milliers) et réduit le prix final pour le consommateur ($27$ au lieu de $30$). Néanmoins, elle présente un coût budgétaire certain pour l'État (le coût total pour les finances publiques s'élève à $s \times Q' = 5 \times 66 = 330$ millions d'euros), ce qui soulève la question de son financement (impôts futurs ou alourdissement de la dette publique). 

*Conclusion scientifique :* Le choix d'un instrument dépend de la hiérarchie des objectifs publics (équité d'accès versus efficacité incitative) et de la soutenabilité budgétaire, tout en gardant à l'esprit que les élasticités réelles de la demande et de l'offre peuvent différer de ce modèle linéaire théorique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
