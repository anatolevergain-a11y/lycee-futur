---
title: "Exercice 2 : Spéciation et histoire évolutive du vivant"
description: "Application pratique du chapitre Génétique et évolution des populations"
---

### 🌐 Contexte & Données scientifiques

La spéciation sympatrique et allopatrique repose sur des modifications progressives des fréquences alléliques au sein des populations, modélisées par la génétique des populations. 

Considérons une population ancestrale de lézards (*Podarcis sicula*) insulaire. Suite à la montée des eaux, un archipel se forme, isolant géographiquement la population initiale en deux sous-populations distinctes sur les îles $A$ et $B$. On s'intéresse à un gène impliqué dans la coloration phénotypique, présentant deux allèles $M$ (dominant, favorisant le camouflage sur roches sombres) et $m$ (récessif, favorisant le camouflage sur roches claires).

Les relevés de terrain et l'analyse par électrophorèse réalisés sur plusieurs générations permettent d'établir les effectifs génotypiques pour ce locus dans la population de l'île $A$ :
*   Effectif total de la population de l'île $A$ : $N_A = 1200$ individus.
*   Nombre d'homozygotes $MM$ : $N_{MM} = 300$
*   Nombre d'hétérozygotes $Mm$ : $N_{Mm} = 600$
*   Nombre d'homozygotes $mm$ : $N_{mm} = 300$

Par ailleurs, l'analyse biométrique et génétique de la divergence morphologique entre les îles $A$ et $B$ suggère un taux de substitution neutre estimé à $\mu = 10^{-8}$ mutations par nucléotide et par génération. Le temps de divergence estimé $t$ entre les deux populations est de $2 \times 10^5$ générations.

---

### ❓ Énoncé

1. **Calculs et équilibre :** Calculez les fréquences alléliques et génotypiques observées dans la population de l'île $A$. À l'aide du test du $\chi^2$ (ou par application directe du modèle), déterminez si cette population est à l'équilibre de Hardy-Weinberg pour ce locus précis. ($p$-valeur seuil de $5\%$, $\chi^2_{0.05, 1} = 3.84$).
2. **Analyse évolutive :** Si la population était effectivement à l'équilibre, explicitez les conditions théoriques sous-jacentes requises. En réalité, le milieu de l'île $A$ subit une forte prédation visuelle. Discutez de la validité biologique de l'hypothèse de neutralité sélective dans ce contexte précis, en abordant la notion de compromis évolutif (*trade-off*).
3. **Modélisation moléculaire :** En considérant le taux de substitution neutre $\mu$, calculez la distance génétique $D$ (exprimée en nombre moyen de substitutions par site) entre les populations des îles $A$ et $B$ après $2 \times 10^5$ générations, sachant que le modèle moléculaire s'écrit sous la forme $D = 2\mu t$ dans le cas d'une divergence neutre stricte.
4. **Esprit critique et limites du modèle :** Le calcul précédent repose sur l'horloge moléculaire stricte. Quelles sont les limites scientifiques et méthodologiques de l'utilisation de ce modèle pour dater des évènements de spéciation récents ? Discutez notamment de la stochasticité de la dérive génétique et de la sélection potentielle sur les gènes étudiés.

---

### 💡 Indice de méthode

*   *Question 1 :* Exprimez d'abord les fréquences alléliques $p$ (pour $M$) et $q$ (pour $m$) à partir des effectifs génotypiques. Calculez ensuite les effectifs théoriques attendus sous l'hypothèse de Hardy-Weinberg ($p^2$, $2pq$, $q^2$) avant d'appliquer la formule du $\chi^2$ :
    $$\chi^2 = \sum \frac{(Observed - Expected)^2}{Expected}$$
*   *Question 3 :* Appliquez simplement l'application numérique avec les données de l'énoncé en veillant à la rigueur des unités.
*   *Question 4 :* Mobilisez vos connaissances sur les limites des modèles théoriques en biologie évolutive (neutralité vs sélection, hétérogénéité des taux de mutation selon les régions du génome).

---

### 📋 Correction détaillée pas à pas

#### 1. Calculs et test de Hardy-Weinberg
*   **Fréquences génotypiques observées ($D_{obs}, H_{obs}, R_{obs}$) :**
    *   Fréquence de $MM$ ($D$) : $D = \frac{300}{1200} = 0.25$
    *   Fréquence de $Mm$ ($H$) : $H = \frac{600}{1200} = 0.50$
    *   Fréquence de $mm$ ($R$) : $R = \frac{300}{1200} = 0.25$

*   **Fréquences alléliques ($p$ et $q$) :**
    *   $p = D + \frac{H}{2} = 0.25 + \frac{0.50}{2} = 0.50$
    *   $q = R + \frac{H}{2} = 0.25 + \frac{0.50}{2} = 0.50$
    *(Vérification : $p + q = 1$, ce qui est exact).*

*   **Fréquences et effectifs attendus sous Hardy-Weinberg ($E$) :**
    *   Fréquence attendue de $MM$ : $p^2 = (0.5)^2 = 0.25 \rightarrow E_{MM} = 0.25 \times 1200 = 300$
    *   Fréquence attendue de $Mm$ : $2pq = 2(0.5)(0.5) = 0.50 \rightarrow E_{Mm} = 0.50 \times 1200 = 600$
    *   Fréquence attendue de $mm$ : $q^2 = (0.5)^2 = 0.25 \rightarrow E_{mm} = 0.25 \times 1200 = 300$

*   **Calcul du $\chi^2$ :**
    Les effectifs observés sont strictement égaux aux effectifs théoriques. Par conséquent :
    $$\chi^2 = 0$$
    La valeur calculée ($\chi^2 = 0$) est inférieure au seuil critique au seuil de $5\%$ pour $1$ degré de liberté ($3.84$). **On ne rejette pas l'hypothèse de Hardy-Weinberg.** La population est statistiquement à l'équilibre pour ce locus à cette génération.

#### 2. Analyse évolutive et conditions de l'équilibre
*   **Conditions théoriques :** L'atteinte de l'équilibre de Hardy-Weinberg implique une population infinie (absence de dérive), panmictique (reproduction aléatoire), sans mutation, sans flux migratoire et en **absence de sélection naturelle**.
*   **Discussion critique et *trade-off* :** L'énoncé indique une forte prédation visuelle et un avantage du camouflage (allèles $M$ ou $m$ selon le substrat). Or, la sélection naturelle modifie les fréquences alléliques, ce qui devrait théoriquement rompre l'équilibre de Hardy-Weinberg. 
    *   *Limite du modèle / compromis :* Il est possible que l'on observe un équilibre apparent si la population est à l'équilibre de migration-sélection, ou si le locus étudié est effectivement neutre (le phénotype étant sous le contrôle d'autres gènes pléiotropes non analysés ici). Un compromis (*trade-off*) existe souvent entre la survie face à la prédation et l'efficacité reproductrice, stabilisant le polymorphisme sans nécessairement invalider instantanément les proportions génotypiques si la pression de sélection est faible ou récente.

#### 3. Modélisation moléculaire de la divergence
*   Application de la formule de la distance génétique neutre :
    $$D = 2\mu t$$
*   Données : $\mu = 10^{-8}$ substitutions/site/génération et $t = 2 \times 10^5$ générations.
    $$D = 2 \times (10^{-8}) \times (2 \times 10^5)$$
    $$D = 4 \times 10^{-3} = 0.004 \text{ substitution par site}$$
*   Il y a en moyenne $4$ différences observées pour $1000$ nucléotides entre les génomes des deux sous-populations pour les régions neutres.

#### 4. Esprit critique et limites du modèle de l'horloge moléculaire
*   **Stochasticité de la dérive :** Le modèle $D = 2\mu t$ est une espérance mathématique. En réalité, la fixation des mutations par dérive génétique est un processus stochastique (aléatoire). Les taux de fixation varient d'une région du génome à l'autre.
*   **Sélection non neutre :** Si les gènes étudiés sont soumis à la sélection naturelle (comme suggéré par la pression de prédation sur la couleur), le taux de substitution s'écarte du taux de mutation neutre $\mu$. La sélection positive accélère la fixation, tandis que la sélection purificatrice la ralentit, faussant l'estimation temporelle $t$ si l'on applique aveuglément l'horloge moléculaire.
*   **Complexité de la démographie :** Le modèle suppose des tailles de populations constantes, ce qui est rarement le cas lors d'une spéciation (goulots d'étranglement, effet fondateur lors de la colonisation des îles $A$ et $B$). L'estimation de $t$ comporte donc une incertitude méthodologique majeure qu'il convient de nuancer par l'utilisation conjointe de plusieurs marqueurs indépendants (ADN mitochondrial, nucléaire, génomique entière).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
