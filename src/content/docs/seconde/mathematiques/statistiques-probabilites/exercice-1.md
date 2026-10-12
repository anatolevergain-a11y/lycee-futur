---
title: "Exercice 1 : Analyse de séries statistiques et indicateurs de dispersion"
description: "Application pratique du chapitre Statistiques et probabilités"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la transition énergétique et de l'optimisation des réseaux de transport d'électricité, l'analyse de la variabilité de la production d'énergie est un enjeu mathématique et industriel majeur. On s'intéresse à la production journalière (exprimée en mégawattheures, $\text{MWh}$) de deux parcs éoliens terrestres, situés dans des zones aux régimes climatiques différents, sur une période d'observation de $10$ jours consécutifs au mois de novembre.

Soit $X$ la série statistique représentant la production du **Parc Alpha** et $Y$ celle du **Parc Beta**. 

Les relevés journaliers (données brutes arrondies à l'unité) sont les suivants :
*   **Parc Alpha ($X$) :** $45, 48, 50, 52, 53, 53, 55, 57, 60, 62$
*   **Parc Beta ($Y$) :** $20, 35, 40, 50, 55, 55, 60, 70, 85, 80$

Bien que les moyennes arithmétiques de ces deux parcs soient proches, l'étude de la seule tendance centrale (moyenne ou médiane) s'avère insuffisante pour les ingénieurs gestionnaires de réseau. En effet, l'intermittence des énergies renouvelables impose d'analyser la dispersion (mesurée par l'écart-type et l'écart interquartile) afin d'évaluer les risques de surproduction ou de déficit par rapport à la demande, et d'ajuster les coûts de stockage ou d'interconnexion.

---

### ❓ Énoncé

1. **Calcul des indicateurs de position :** Calculer la moyenne $\overline{X}$ et la médiane $Me_X$ pour le Parc Alpha, ainsi que la moyenne $\overline{Y}$ et la médiane $Me_Y$ pour le Parc Beta. Que peut-on conclure quant à une première comparaison sommaire de ces deux parcs ?
2. **Analyse de la dispersion (étendue et écart interquartile) :** Déterminer l'étendue ainsi que les premier et troisième quartiles ($Q_1$ et $Q_3$) pour chaque série. En déduire l'écart interquartile $E_Q$ de chaque parc et comparer leur variabilité centrale.
3. **Calcul de l'écart-type (dispersion globale) :** Calculer la variance $V(X)$ et l'écart-type $\sigma(X)$ du Parc Alpha (on arrondira les résultats au centième). Sachant que l'écart-type du Parc Beta est $\sigma(Y) \approx 19,21$, quel parc présente la production la plus stable ?
4. **Esprit critique et modélisation :** Un gestionnaire de réseau doit choisir un parc prioritaire pour alimenter une ville dont la consommation est constante et égale à $53\text{ MWh/jour}$. En se basant sur les indicateurs calculés et en discutant des limites des modèles statistiques sur une période d'observation aussi courte ($10$ jours), argumentez sur le choix du parc en prenant en compte le compromis entre rendement moyen et risque de rupture d'approvisionnement.

---

### 💡 Indice de méthode

*   **Moyenne :** $\overline{X} = \frac{1}{N} \sum_{i=1}^{N} x_i$
*   **Médiane :** Valeur qui partage la série ordonnée en deux effectifs égaux. Si l'effectif $N$ est pair, la médiane est la demi-somme des valeurs de rang $\frac{N}{2}$ et $\frac{N}{2}+1$.
*   **Quartiles :** Pour une série de taille $N$, le quartile $Q_1$ est la valeur de rang $\lceil \frac{N}{4} \rceil$ (ou méthode proportionnelle) et l'écart interquartile est défini par $E_Q = Q_3 - Q_1$.
*   **Variance et Écart-type :** 
    $$V(X) = \frac{1}{N} \sum_{i=1}^{N} (x_i - \overline{X})^2 = \left(\frac{1}{N} \sum_{i=1}^{N} x_i^2\right) - (\overline{X})^2$$
    L'écart-type est la racine carrée de la variance : $\sigma(X) = \sqrt{V(X)}$.

---

### 📋 Correction détaillée pas à pas

#### 1. Indicateurs de position
*   **Pour le Parc Alpha ($X$) :**
    *   Effectif $N = 10$.
    *   Moyenne : 
        $$\overline{X} = \frac{45 + 48 + 50 + 52 + 53 + 53 + 55 + 57 + 60 + 62}{10} = \frac{535}{10} = 53{,}5\text{ MWh}$$
    *   Médiane : Les valeurs sont déjà rangées par ordre croissant. Les termes de rang $\frac{10}{2} = 5$ et $6$ sont tous deux égaux à $53$. 
        $$Me_X = \frac{53 + 53}{2} = 53\text{ MWh}$$

*   **Pour le Parc Beta ($Y$) :**
    *   Rangeons d'abord la série par ordre croissant (attention, la donnée initiale comportait une inversion entre le 8ème et le 9ème terme) : 
        $20, 35, 40, 50, 55, 55, 60, 70, 80, 85$.
    *   Moyenne : 
        $$\overline{Y} = \frac{20 + 35 + 40 + 50 + 55 + 55 + 60 + 70 + 80 + 85}{10} = \frac{550}{10} = 55\text{ MWh}$$
    *   Médiane : Les termes de rang $5$ et $6$ sont respectivement $55$ et $55$.
        $$Me_Y = \frac{55 + 55}{2} = 55\text{ MWh}$$

*   *Conclusion intermédiaire :* Les deux parcs affichent des performances globales quasi-identiques si l'on s'en tient uniquement aux indicateurs de position ($\overline{X} \approx \overline{Y}$ et $Me_X \approx Me_Y$).

---

#### 2. Indicateurs de dispersion (Étendue et Écart interquartile)
*   **Parc Alpha ($X$) :**
    *   Étendue : $\text{Max} - \text{Min} = 62 - 45 = 17\text{ MWh}$.
    *   Quartiles : $N = 10$. $\frac{10}{4} = 2{,}5$, donc $Q_1$ est la 3ème valeur, soit $50$. 
        $3 \times \frac{10}{4} = 7{,}5$, donc $Q_3$ est la 8ème valeur, soit $57$.
        $$E_Q(X) = Q_3 - Q_1 = 57 - 50 = 7\text{ MWh}$$

*   **Parc Beta ($Y$) (série ordonnée : $20, 35, 40, 50, 55, 55, 60, 70, 80, 85$) :**
    *   Étendue : $85 - 20 = 65\text{ MWh}$.
    *   Quartiles : $Q_1$ est la 3ème valeur ($40$) et $Q_3$ est la 8ème valeur ($70$).
        $$E_Q(Y) = Q_3 - Q_1 = 70 - 40 = 30\text{ MWh}$$

*   *Comparaison :* L'étendue et l'écart interquartile du Parc Beta sont nettement supérieurs à ceux du Parc Alpha ($30$ contre $7$). La production du Parc Beta est donc beaucoup plus dispersée autour de sa valeur centrale.

---

#### 3. Écart-type du Parc Alpha
*   Calculons d'abord la somme des carrés des valeurs pour le Parc Alpha :
    $$\sum x_i^2 = 45^2 + 48^2 + 50^2 + 52^2 + 53^2 + 53^2 + 55^2 + 57^2 + 60^2 + 62^2$$
    $$\sum x_i^2 = 2025 + 2304 + 2500 + 2704 + 2809 + 2809 + 3025 + 3249 + 3600 + 3844 = 28869$$
*   Variance $V(X)$ :
    $$V(X) = \frac{28869}{10} - (53{,}5)^2 = 2886{,}9 - 2862{,}25 = 24{,}65$$
*   Écart-type $\sigma(X)$ :
    $$\sigma(X) = \sqrt{24{,}65} \approx 4{,}96\text{ MWh}$$
*   *Comparaison de la stabilité :* On a $\sigma(X) \approx 4{,}96\text{ MWh}$ et $\sigma(Y) \approx 19{,}21\text{ MWh}$. L'écart-type de Beta étant près de quatre fois supérieur à celui d'Alpha, **le Parc Alpha est statistiquement beaucoup plus stable** et prévisible que le Parc Beta.

---

#### 4. Esprit critique et modélisation
*   **Analyse du choix du parc :** La consommation étant fixée à $53\text{ MWh/jour}$, le **Parc Alpha** semble plus pertinent pour un approvisionnement en flux tendu. Sa production fluctue peu (écart-type faible de $4{,}96\text{ MWh}$) et sa médiane est exactement de $53\text{ MWh}$, ce qui garantit que la moitié des jours observés, la production a atteint ou dépassé la demande, avec un risque de déficit limité.
*   **Limites scientifiques et épistémologiques du modèle :** 
    1.  *Biais temporel :* Une période d'observation de $10$ jours est scientifiquement insuffisante pour caractériser un climat ou un gisement éolien. Elle ne prend pas en compte la saisonnalité (vents d'hiver vs d'été) ni les phénomènes météorologiques extrêmes (tempêtes ou anticyclones prolongés).
    2.  *Non-linéarité des coûts :* Le modèle statistique ne quantifie pas l'impact économique. Si le Parc Beta présente une forte dispersion, il atteint aussi des pics à $85\text{ MWh}$, ce qui génère un surplus pouvant être valorisé financièrement ou stocké, contrairement à Alpha dont le rendement maximal reste plafonné à $62\text{ MWh}$. Le choix dépend donc du coût du stockage de l'énergie et des pénalités en cas de rupture de charge, illustrant le compromis classique entre *sécurité d'approvisionnement* et *opportunité de rendement*.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
