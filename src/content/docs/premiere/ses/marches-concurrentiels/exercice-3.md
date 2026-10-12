---
title: "Exercice 3 : Analyse des défaillances du marché et externalités"
description: "Application pratique du chapitre Marchés et prix"
---

### 🌐 Contexte & Données scientifiques

En Économie, une défaillance de marché survient lorsque l'allocation libre des ressources par le marché ne conduit pas à une situation optimale au sens de Pareto (efficacité collective). Les externalités constituent l'une de ces défaillances majeures. Une externalité (ou effet externe) se définit comme l'effet positif ou négatif exercé par l'activité d'un agent économique sur le bien-être d'un autre agent, sans que cet effet ne fasse l'objet d'une compensation monétaire sur un marché.

Considérons le marché de la production d'acier dans une économie industrialisée. La production génère non seulement de l'acier échangé sur le marché, mais également des émissions polluantes ayant un impact sanitaire et environnemental.

Le tableau ci-dessous formalise la situation par l'analyse des coûts marginaux ($Cm$) et de la disposition marginale à payer ($DMP$ ou bénéfice marginal $Bm$) pour différents niveaux de production (en milliers de tonnes) :

| Quantité $Q$ (milliers de tonnes) | Coût Privé Marginal $Cm_{privé}$ (en €/tonne) | Coût Social Marginal $Cm_{social}$ (en €/tonne) | Bénéfice Marginal $Bm$ (en €/tonne) |
| :---: | :---: | :---: | :---: |
| **10** | 120 | 200 | 250 |
| **20** | 150 | 230 | 220 |
| **30** | 180 | 260 | 190 |
| **40** | 210 | 290 | 160 |
| **50** | 240 | 320 | 130 |

*Note méthodologique : Le coût social marginal intègre le coût privé supporté par le producteur et le coût externe (ex. : dommages environnementaux et sanitaires) supporté par la collectivité :* 
$$Cm_{social} = Cm_{privé} + Cm_{externe}$$

---

### ❓ Énoncé

1. **Caractérisation de l'externalité :** À partir du tableau, qualifiez la nature de cette externalité (positive ou négative). Justifiez votre réponse à l'aide des données chiffrées et de la distinction entre coût privé et coût social.
2. **Équilibre de marché (situation non régulée) :** Déterminez la quantité d'acier produite et le prix d'équilibre sur un marché de concurrence parfaite en l'absence d'intervention publique. Expliquez la règle de décision du producteur privé (*optimum microéconomique*).
3. **Optimum social :** Déterminez le niveau de production socialement optimal. En comparant cette valeur à celle de la question 2, démontrez l'existence d'une inefficacité de marché (surproduction ou sous-production).
4. **Évaluation d'une politique publique :** Pour corriger cette défaillance, l'État envisage d'instaurer une taxe unitaire (dite "taxe pigouvienne"). Quel doit être le montant de cette taxe par tonne pour atteindre l'optimum social au niveau de production déterminé à la question 3 ? Discutez des limites pratiques de sa mise en œuvre (difficulté d'évaluation monétaire du dommage, acceptabilité sociale).

---

### 💡 Indice de méthode

* **Question 1 :** Observez l'écart entre le coût supporté par l'agent économique individuel et le coût global supporté par la société. 
* **Question 2 & 3 :** Sur un marché, l'équilibre privé est atteint lorsque l'utilité marginale (le bénéfice marginal $Bm$) est égale au coût privé marginal ($Cm_{privé}$). L'optimum social requiert l'égalité entre le bénéfice marginal et le coût social marginal ($Cm_{social}$). Recherchez la quantité $Q$ pour laquelle $Bm = Cm_{privé}$ d'une part, et $Bm = Cm_{social}$ d'autre part.
* **Question 4 :** La taxe pigouvienne vise à internaliser l'externalité négative en augmentant le coût privé de manière à ce qu'il coïncide avec le coût social au niveau de production optimal. Calculez l'écart marginal exact au niveau de production cible.

---

### 📋 Correction détaillée pas à pas

#### 1. Caractérisation de l'externalité
L'analyse des données montre que pour chaque niveau de production, le **Coût Social Marginal ($Cm_{social}$)** est strictement supérieur au **Coût Privé Marginal ($Cm_{privé}$)**. 
Par exemple, pour $Q = 30$ milliers de tonnes : 
$$Cm_{externe} = Cm_{social} - Cm_{privé} = 260 - 180 = 80 \text{ €/tonne}$$
Il s'agit d'une **externalité négative de production**. L'activité de production d'acier engendre des nuisances (pollution) non tarifées, imposant un coût à des tiers sans compensation financière.

#### 2. Équilibre de marché (situation non régulée)
En l'absence de régulation, les producteurs maximisent leur profit en produisant jusqu'au point où leur coût privé marginal est égal au bénéfice marginal (qui correspond à la demande sur un marché concurrentiel) : 
$$Bm = Cm_{privé}$$
En consultant le tableau :
* Pour $Q = 30$ : $Bm = 190$ et $Cm_{privé} = 180$ (il est rationnel de produire plus).
* Pour $Q = 40$ : $Bm = 160$ et $Cm_{privé} = 210$ (le coût dépasse le bénéfice).
Par interpolation ou lecture directe, l'équilibre de marché non régulé s'établit pour une quantité **$Q_{marché} = 35$ milliers de tonnes** environ (ou se situe précisément entre 30 et 40, avec un prix d'équilibre proche de $175$ €). *Simplification pédagogique sur les paliers discrets :* À $Q = 30$, $Bm (190) > Cm_{privé} (180)$ ; à $Q = 40$, $Bm (160) < Cm_{privé} (210)$. Le marché tende spontanément vers une surproduction par rapport à l'intérêt collectif.

#### 3. Optimum social
L'optimum social est atteint lorsque le coût total pour la collectivité de la dernière unité produite est égal au bénéfice marginal qu'elle procure :
$$Bm = Cm_{social}$$
Recherchons cette égalité dans le tableau :
* À **$Q = 20$ milliers de tonnes** : 
  $$Bm = 220 \text{ €/tonne} \quad \text{et} \quad Cm_{social} = 230 \text{ €/tonne}$$
* À **$Q = 10$ milliers de tonnes** : 
  $$Bm = 250 \text{ €/tonne} \quad \text{et} \quad Cm_{social} = 200 \text{ €/tonne}$$

*Analyse critique des données discrètes :* L'optimum social théorique se situe entre 10 et 20 milliers de tonnes (exactement là où $Bm = Cm_{social}$). Le marché libre, en produisant $35$ milliers de tonnes, génère donc une **surproduction manifeste** : des unités sont produites alors même que leur coût pour la société excède la valeur qu'elles procurent aux consommateurs.

#### 4. Évaluation d'une politique publique (Taxe pigouvienne)
Pour inciter les producteurs à internaliser le coût externe, l'État peut appliquer une taxe unitaire $T$ égale au coût externe marginal à l'optimum social. 
* *Limites et complexité de mise en œuvre :* 
  1. **Asymétrie d'information :** Il est difficile pour les pouvoirs publics de mesurer avec exactitude le $Cm_{externe}$ réel, les entreprises ayant incitation à exagérer le coût de la régulation.
  2. **Acceptabilité sociale et compromis macroéconomiques :** Une telle taxe augmente les coûts de production, ce qui peut réduire la compétitivité-prix internationale de la filière acier et menacer l'emploi local à court terme, illustrant le arbitrage complexe entre efficacité environnementale et objectifs macroéconomiques d'emploi.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
