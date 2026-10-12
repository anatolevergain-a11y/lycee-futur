---
title: "Exercice 1 : Facteurs de production, progrès technique et productivité globale (PGF)"
description: "Application pratique du chapitre Sources et limites de la croissance économique"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'analyse comptable et théorique de la croissance économique, l'économiste Robert Solow a formalisé l'approche de la fonction de production macroéconomique. La croissance du PIB ne s'explique pas uniquement par l'accumulation quantitative des facteurs de production (travail et capital), mais aussi par une hausse de leur efficacité combinée, mesurée par la Productivité Globale des Facteurs (PGF).

Le tableau ci-dessous présente des données macroéconomiques fictives mais inspirées des tendances observées dans les économies développées (inspirées de la méthodologie de l'OCDE) pour une économie $E$ entre l'année $N$ et l'année $N+10$.

| Indicateur macroéconomique | Année $N$ | Année $N+10$ | Taux de croissance global sur la période (%) |
| :--- | :---: | :---: | :---: |
| **PIB ($Y$)** (en milliards d'euros constants) | 2 000 | 2 500 | + 25,0 % |
| **Volume du facteur travail ($L$)** (en millions d'heures travaillées) | 40 000 | 42 000 | + 5,0 % |
| **Stock de capital fixe ($K$)** (en milliards d'euros constants) | 5 000 | 6 000 | + 20,0 % |

*Note méthodologique :* On pose traditionnellement la fonction de production de type Cobb-Douglas sous la forme :
$$Y = A \cdot K^{\alpha} \cdot L^{1-\alpha}$$
Où :
*   $Y$ est la production (PIB) ;
*   $K$ est le stock de capital physique ;
*   $L$ est le volume de travail ;
*   $A$ représente la Productivité Globale des Facteurs (PGF), traduisant le progrès technique et l'efficacité organisationnelle ;
*   $\alpha$ et $(1-\alpha)$ représentent respectivement les élasticités de la production par rapport au capital et au travail. Pour cette économie, on retiendra l'hypothèse standard où $\alpha = 0,3$ et $(1-\alpha) = 0,7$.

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Calcul et mesure :** Calculez le taux de croissance annuel moyen (TCAM) ou, par approximation linéaire à des fins d'analyse, décomposez la contribution relative de chaque facteur. Plus précisément, déterminez la part de la croissance du PIB attribuable à la croissance du capital et à celle du travail, en utilisant les pondérations de la fonction de production ($\alpha = 0,3$ et $1-\alpha = 0,7$).
2. **Analyse de la PGF :** Par application de la comptabilité de la croissance (résidu de Solow), calculez le taux de croissance global de la Productivité Globale des Facteurs ($A$) sur la période entre l'année $N$ et l'année $N+10$.
3. **Esprit critique et limites du modèle :** Le calcul de la PGF est souvent qualifié par les économistes de « mesure de notre ignorance ». En vous appuyant sur vos connaissances et les limites intrinsèques de cet outil statistique, expliquez pourquoi l'augmentation de $A$ ne reflète pas uniquement le « progrès technique » au sens strict (innovations technologiques majeures).
4. **Prospective et soutenabilité :** Discutez brièvement du compromis entre l'accumulation extensive des facteurs (hausse de $K$ et $L$) et l'accumulation intensive (hausse de $A$) face aux contraintes écologiques contemporaines (transition énergétique).

---

### 💡 Indice de méthode

*   **Pour la question 1 & 2 :** En log-linéaire ou en taux de variation, la fonction de Cobb-Douglas se dérive ainsi : 
    $$\frac{\Delta Y}{Y} \approx \alpha \frac{\Delta K}{K} + (1-\alpha) \frac{\Delta L}{L} + \frac{\Delta A}{A}$$
    exprimant que le taux de croissance du PIB est la somme pondérée de la croissance du capital, du travail, et du résidu (PGF).
*   **Pour la question 3 :** Sondez ce que le résidu capture par construction mathématique : erreurs de mesure, variations de la qualité du capital ou du travail (capital humain non mesuré), gains d'organisation, effets de composition sectorielle, etc.
*   **Pour la question 4 :** Mobilisez la notion de rendements factoriels décroissants (notamment sur le capital) et la nécessité d'une croissance intensive pour découpler croissance économique et pressions environnementales.

---

### 📋 Correction détaillée pas à pas

#### **1. Contribution des facteurs de production à la croissance**
À partir de la relation de comptabilité de la croissance issue de la fonction de Cobb-Douglas, la croissance de la production est approchée par la formule :
$$\frac{\Delta Y}{Y} = \alpha \left(\frac{\Delta K}{K}\right) + (1-\alpha) \left(\frac{\Delta L}{L}\right) + \frac{\Delta A}{A}$$

*   **Taux de croissance du PIB ($\frac{\Delta Y}{Y}$) :** $\frac{2500 - 2000}{2000} = +25\%$
*   **Taux de croissance du capital ($\frac{\Delta K}{K}$) :** $\frac{6000 - 5000}{5000} = +20\%$
*   **Taux de croissance du travail ($\frac{\Delta L}{L}$) :** $\frac{42000 - 40000}{40000} = +5\%$

Calculons la contribution pondérée des facteurs quantitatifs :
*   **Contribution du capital :** $\alpha \times \frac{\Delta K}{K} = 0,3 \times 20\% = 6\%$ (exprimé en points de pourcentage de croissance du PIB).
*   **Contribution du travail :** $(1-\alpha) \times \frac{\Delta L}{L} = 0,7 \times 5\% = 3,5\%$.

L'accumulation conjointe du capital et du travail contribue donc à hauteur de $6\% + 3,5\% = 9,5\text{ points}$ de croissance sur la période (soit une explication de $\frac{9,5}{25} = 38\%$ de la croissance totale par les facteurs quantitatifs).

---

#### **2. Calcul du taux de croissance de la PGF (Résidu de Solow)**
Par différence, on isole le taux de croissance de la PGF ($\frac{\Delta A}{A}$) :
$$\frac{\Delta A}{A} = \frac{\Delta Y}{Y} - \left[ \alpha \left(\frac{\Delta K}{K}\right) + (1-\alpha) \left(\frac{\Delta L}{L}\right) \right]$$

$$\frac{\Delta A}{A} = 25\% - (6\% + 3,5\%)$$
$$\frac{\Delta A}{A} = 25\% - 9,5\% = 15,5\%$$

Le taux de croissance global de la Productivité Globale des Facteurs sur la période est de **$+15,5 \%$**. Le progrès technique et les gains d'efficacité globale expliquent la majeure partie ($62\%$) de la croissance économique de cette économie.

---

#### **3. Esprit critique : Les limites de la PGF comme mesure du progrès technique**
Qualifier la PGF de « progrès technique » relève d'un raccourci pédagogique qu'il convient de nuancer scientifiquement pour plusieurs raisons :
*   **Un « résidu » statistique :** Par construction, $A$ n'est pas mesurée directement ; elle correspond à tout ce qui n'est pas expliqué par la quantité de capital et de travail. Elle absorbe donc toutes les erreurs de mesure des statistiques nationales.
*   **L'effet de la qualité des facteurs (capital humain) :** Si la main-d'œuvre gagne en qualification (formation, santé) sans que cela ne se voie dans le volume brut des heures ($L$), cette amélioration qualitative est capturée par la PGF.
*   **Les externalités et gains organisationnels :** Une meilleure allocation des ressources entre les secteurs d'activité, des réformes institutionnelles ou des innovations managériales (ex: lean management, flexibilité) augmentent l'efficacité sans relever strictement de la technologie de production.

---

#### **4. Prospective et soutenabilité : Accumulation extensive vs intensive**
Le modèle montre que la croissance repose ici majoritairement sur les gains de PGF (+15,5 %) plutôt que sur l'accumulation brute de facteurs. 
*   **L'impasse de la croissance extensive :** S'appuyer uniquement sur l'accumulation quantitative de capital ($K$) et de travail ($L$) se heurte à la loi des rendements factoriels décroissants et à des limites écologiques strictes (épuisement des ressources naturelles, émissions de gaz à effet de serre liées à l'intrant capital/énergie).
*   **Le rôle pivot de la PGF :** La croissance intensive (portée par le progrès technique) est théoriquement la clé du « découplage » entre la croissance économique et la consommation de ressources. Toutefois, l'histoire économique montre que le progrès technique engendre parfois des effets rebonds (paradoxe de Jevons), où l'efficacité accrue d'une ressource conduit paradoxalement à une augmentation de sa consommation globale, posant la question de la soutenabilité forte de ce modèle.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
