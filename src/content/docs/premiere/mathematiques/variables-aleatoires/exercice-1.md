---
title: "Exercice 1 : Espérance mathématique et gestion des risques"
description: "Application pratique du chapitre Variables aléatoires réelles"
---

### 🌐 Contexte & Données scientifiques

La gestion des risques industriels et environnementaux repose sur l'analyse probabiliste des événements rares. Considérons une entreprise exploitant un site de stockage chimique soumis à un aléa sismique. 

D'après les données historiques de sismicité régionale et les études géotechniques menées par le Bureau de Recherches Géologiques et Minières (BRGM), la probabilité qu'un séisme majeur d'intensité supérieure ou égale au seuil critique $V_6$ survienne sur la période d'exploitation (fixée à $1 \text{ an}$) est estimée à $p = 0{,}02$.

En l'absence de dispositif de renforcement parasismique, un tel événement entraîne une catastrophe environnementale et économique dont le coût global estimé (dommages matériels, arrêt d'activité, contentieux et dépollution) s'élève à $C_{\text{sinistre}} = 15 \text{ M€}$ ($15 \times 10^6 \text{ €}$).

L'entreprise étudie la mise en place d'un plan de prévention parasismique. Ce dispositif réduit la probabilité d'occurrence d'un sinistre majeur à $p' = 0{,}004$, mais engendre un coût fixe annuel d'investissement et de maintenance de $I = 150 \text{ 000 €}$.

On note $X$ la variable aléatoire représentant le coût total annuel (en euros) lié au risque sismique pour l'entreprise **sans** le dispositif de prévention, et $Y$ la variable aléatoire représentant le coût total annuel (en euros) supporté par l'entreprise **avec** le dispositif de prévention (incluant l'investissement).

---

### ❓ Énoncé

1. Définir la loi de probabilité de la variable aléatoire $X$ (sans prévention) en explicitant ses valeurs possibles et leurs probabilités associées. Calculer l'espérance mathématique $E(X)$.
2. Définir la loi de probabilité de la variable aléatoire $Y$ (avec prévention). Les coûts d'investissement étant certains, exprimer $Y$ en fonction de l'aléa du sinistre, puis calculer son espérance mathématique $E(Y)$.
3. Comparer les espérances mathématiques $E(X)$ et $E(Y)$. D'un point de vue strictement actuariel (fondé sur la moyenne à long terme), le dispositif de prévention est-il financièrement avantageux ?
4. **Esprit critique :** L'espérance mathématique fournit une aide à la décision fondée sur la loi des grands nombres, mais elle gomme la variabilité et l'incertitude. Discutez des limites de ce modèle probabiliste en répondant aux deux points suivants :
   - Qu'en est-il de la réalité pour une entreprise sur une période courte (par exemple $1 \text{ an}$) ?
   - Quels autres facteurs non monétaires et incertitudes méthodologiques (biais d'estimation de $p$ ou de $C_{\text{sinistre}}$) les décideurs doivent-ils intégrer au-delà du strict calcul de l'espérance ?

---

### 💡 Indice de méthode

* **Pour les lois de probabilité :** Identifiez clairement les scénarios possibles (survenue ou non du sinistre) pour chaque situation. La somme des probabilités de chaque loi doit être égale à $1$.
* **Pour l'espérance :** Appliquez la formule générale $E(Z) = \sum_{i} z_i P(Z = z_i)$. Veillez à bien intégrer le coût de l'investissement initial dans tous les scénarios de la variable $Y$.
* **Pour l'esprit critique :** Rappelez-vous que l'espérance mathématique est une valeur moyenne théorique sur un grand nombre d'itérations. Elle ne garantit rien pour une année isolée, où l'écart entre la réalité et la moyenne peut être très élevé (risque de ruine ou d'investissement « à fonds perdus »).

---

### 📋 Correction détaillée pas à pas

#### 1. Loi de probabilité et espérance de $X$ (sans prévention)

Sans dispositif de prévention, l'entreprise s'expose à deux scénarios sur une période d'un an :
* **Scénario 1 :** Aucun séisme majeur ne survient (probabilité $1 - p = 1 - 0{,}02 = 0{,}98$). Le coût pour l'entreprise est de $0 \text{ €}$.
* **Scénario 2 :** Un séisme majeur survient (probabilité $p = 0{,}02$). Le coût est de $C_{\text{sinistre}} = 15 \text{ 000 000 \text{ €}}$.

La variable aléatoire $X$ prend donc les valeurs $0$ et $15 \text{ 000 000}$. Sa loi de probabilité est donnée par le tableau suivant :

| $x_i$ | $0$ | $15 \text{ 000 000}$ |
| :---: | :---: | :---: |
| $P(X = x_i)$ | $0{,}98$ | $0{,}02$ |

Calculons l'espérance mathématique de $X$ :
$$E(X) = (0 \times 0{,}98) + (15 \text{ 000 000} \times 0{,}02)$$
$$E(X) = 0 + 300 \text{ 000} = 300 \text{ 000 \text{ €}}$$

*Interprétation :* En moyenne, sur le long terme, le coût annuel induit par ce risque s'élève à $300 \text{ 000 \text{ €}}$ par an.

---

#### 2. Loi de probabilité et espérance de $Y$ (avec prévention)

Avec le dispositif de prévention, l'entreprise paie de manière certaine l'investissement $I = 150 \text{ 000 \text{ €}}$, quel que soit l'état de la nature. Les scénarios deviennent :
* **Scénario 1 :** Aucun séisme majeur ne survient (probabilité $1 - p' = 1 - 0{,}004 = 0{,}996$). Le coût total est uniquement l'investissement : $150 \text{ 000 \text{ €}}$.
* **Scénario 2 :** Un séisme majeur survient malgré tout (probabilité $p' = 0{,}004$). Le coût total est la somme de l'investissement et du sinistre réduit : $150 \text{ 000} + 15 \text{ 000 000 = 15 \text{ 150 000 \text{ €}}$.

La variable aléatoire $Y$ prend les valeurs $150 \text{ 000}$ et $15 \text{ 150 000}$. Sa loi de probabilité est :

| $y_i$ | $150 \text{ 000}$ | $15 \text{ 150 000}$ |
| :---: | :---: | :---: |
| $P(Y = y_i)$ | $0{,}996$ | $0{,}004$ |

Calculons l'espérance mathématique de $Y$ :
$$E(Y) = (150 \text{ 000} \text{ €} \times 0{,}996) + (15 \text{ 150 000} \text{ €} \times 0{,}004)$$
$$E(Y) = 149 \text{ 400} + 60 \text{ 600} = 210 \text{ 000 \text{ €}}$$

---

#### 3. Comparaison actuarielle

On constate que :
$$E(Y) = 210 \text{ 000 \text{ €}} < E(X) = 300 \text{ 000 \text{ €}}$$

D'un point de vue strictement actuariel (fondé sur l'optimisation de l'espérance mathématique des coûts), le dispositif de prévention est **financièrement avantageux**. Il permet de réduire le coût moyen annuel attendu de $90 \text{ 000 \text{ €}}$ ($300 \text{ 000} - 210 \text{ 000}$).

---

#### 4. Analyse critique et limites du modèle

* **La temporalité et la loi des grands nombres :** 
  L'espérance mathématique est une valeur théorique limite (loi des grands nombres) qui ne s'observe que sur un grand nombre d'années ou un grand nombre de structures similaires. Pour une entreprise individuelle raisonnant sur une période d'un an, $X$ et $Y$ ne prennent jamais la valeur de leur espérance ($300 \text{ 000 \text{ €}}$ ou $210 \text{ 000 \text{ €}}$). En réalité, l'entreprise dépensera soit très peu ($0 \text{ €}$ ou $150 \text{ 000 \text{ €}}$), soit une somme colossale en cas de sinistre ($15 \text{ M€}$). Une entreprise de taille modeste pourrait faire face à un risque de faillite (risque de ruinabilité) si le sinistre survient dès la première année, indépendamment de la rentabilité calculée à long terme.

* **Incertitudes des données et facteurs non monétaires :**
  - **Biais d'estimation :** Les probabilités $p$ et $p'$ reposent sur des modèles historiques et géologiques incertains. Une modification minime de $p$ (par exemple suite au changement climatique ou à une réévaluation de la sismicité de la faille) modifie radicalement le calcul. De même, $C_{\text{sinistre}}$ est une estimation difficile à chiffrer précisément (notamment pour les dommages immatériels ou l'atteinte à la réputation).
  - **Facteurs non monétaires :** Le modèle mathématique ne quantifie pas la perte de vies humaines, les blessés, ou l'impact écologique irréversible. L'éthique, la responsabilité sociétale des entreprises (RSE) et la réglementation légale imposent souvent des seuils de sécurité incompressibles, rendant le choix de la prévention obligatoire indépendamment de sa seule rentabilité financière.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
