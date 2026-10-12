---
title: "Exercice 2 : Régulation du rythme cardiaque et de la ventilation"
description: "Application pratique du chapitre Corps humain, exercice physique et santé"
---

### 🌐 Contexte & Données scientifiques

Lors d'un effort physique, l'organisme humain doit adapter ses grandes fonctions vitales pour répondre à l'augmentation substantielle des besoins énergétiques des cellules musculaires squelettiques en contraction. Cette adaptation se traduit notamment par une modification synchrone du rythme cardiaque ($RC$, en $\text{battements}\cdot\text{min}^{-1}$) et du débit ventilatoire ($\dot{V}_E$, en $\text{L}\cdot\text{min}^{-1}$).

Le tableau ci-dessous présente des mesures physiologiques moyennes réalisées chez un individu sain de $20\text{ ans}$, au repos puis lors de trois paliers d'exercice sur ergocycle d'intensités croissantes. L'intensité de l'exercice est exprimée en pourcentage de la Puissance Maximale Aérobie ($\text{PMA}$).

| Paramètre mesuré | Repos | Palier 1 ($40\% \text{ de la PMA}$) | Palier 2 ($70\% \text{ de la PMA}$) | Palier 3 ($100\% \text{ de la PMA}$) |
| :--- | :---: | :---: | :---: | :---: |
| Fréquence cardiaque ($RC$ en $\text{battements}\cdot\text{min}^{-1}$) | $70$ | $110$ | $150$ | $190$ |
| Volume d'éjection systolique ($VES$ en $\text{mL}\cdot\text{battement}^{-1}$) | $70$ | $95$ | $115$ | $120$ |
| Débit ventilatoire ($\dot{V}_E$ en $\text{L}\cdot\text{min}^{-1}$) | $10$ | $35$ | $75$ | $130$ |
| Concentration artérielle en $\text{O}_2$ ($\text{CaO}_2$ en $\text{mL}\cdot\text{L}^{-1}$) | $200$ | $200$ | $195$ | $190$ |

*Note méthodologique : Le débit cardiaque ($\dot{Q}$, en $\text{L}\cdot\text{min}^{-1}$) se calcule selon la relation :*
$$\dot{Q} = \frac{RC \times VES}{1000}$$

---

### ❓ Énoncé

1. **Calcul et analyse du système cardiovasculaire :** À l'aide de la formule fournie, calculez le débit cardiaque $\dot{Q}$ pour chaque état (Repos et Paliers $1$ à $3$). Commentez l'évolution conjointe du rythme cardiaque et du volume d'éjection systolique face à l'accroissement de l'effort.
2. **Mise en relation des fonctions :** Calculez le volume d'air ventilé par battement cardiaque (rapport $\dot{V}_E / RC$) pour le repos et le palier $3$. Démontrez quantitativement l'ajustement couplé des appareils respiratoire et circulatoire.
3. **Esprit critique et limites du modèle :** La concentration artérielle en dioxygène ($\text{CaO}_2$) diminue légèrement lors des efforts intenses (Palier $2$ et $3$). Sachant que la consommation globale en dioxygène ($\dot{V}\text{O}_2$) augmente considérablement, formulez une hypothèse scientifique expliquant ce paradoxe apparent et discutez de la limite physiologique de l'adaptation respiratoire.

---

### 💡 Indice de méthode

* **Question 1 :** Veillez à bien homogénéiser les unités. Le produit $RC \times VES$ s'exprime en $\text{mL}\cdot\text{min}^{-1}$, il faut donc diviser par $1000$ pour obtenir un résultat en $\text{L}\cdot\text{min}^{-1}$.
* **Question 2 :** Pour la mise en relation, analysez si l'augmentation des deux grands paramètres (cardiaque et ventilatoire) est linéaire ou si elle présente des ruptures de pente.
* **Question 3 :** Ne considérez pas les valeurs biologiques comme figées. Pensez au temps de transit des hématies dans les capillaires pulmonaires et aux contraintes mécaniques exercées sur la barrière alvéolo-capillaire lors d'une hyperventilation extrême.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul du débit cardiaque et analyse
*Rappel de la formule :* $\dot{Q} = \frac{RC \times VES}{1000}$

* **Au repos :**
  $$\dot{Q}_{\text{repos}} = \frac{70 \times 70}{1000} = \frac{4900}{1000} = 4{,}9 \text{ L}\cdot\text{min}^{-1}$$

* **Au palier 1 ($40\% \text{ PMA}$) :**
  $$\dot{Q}_{1} = \frac{110 \times 95}{1000} = \frac{10450}{1000} = 10{,}45 \text{ L}\cdot\text{min}^{-1}$$

* **Au palier 2 ($70\% \text{ PMA}$) :**
  $$\dot{Q}_{2} = \frac{150 \times 115}{1000} = \frac{17250}{1000} = 17{,}25 \text{ L}\cdot\text{min}^{-1}$$

* **Au palier 3 ($100\% \text{ PMA}$) :**
  $$\dot{Q}_{3} = \frac{190 \times 120}{1000} = \frac{22800}{1000} = 22{,}8 \text{ L}\cdot\text{min}^{-1}$$

*Analyse :* Le débit cardiaque est multiplié par près de $4{,}7$ entre le repos et l'effort maximal. Cet accroissement résulte de la double augmentation du rythme cardiaque ($RC$ multiplié par $2{,}7$) et du volume d'éjection systolique ($VES$ multiplié par $1{,}7$). Toutefois, on observe que le $VES$ atteint un plateau dès le palier $2$ ($115$ puis $120 \text{ mL}\cdot\text{battement}^{-1}$), signifiant que seule l'accélération du rythme cardiaque permet d'augmenter le débit cardiaque lors des intensités maximales.

#### 2. Couplage cardio-respiratoire
Calculons le volume d'air ventilé par battement cardiaque ($\dot{V}_E / RC$) :
* **Au repos :**
  $$\frac{\dot{V}_E}{RC} = \frac{10 \text{ L}\cdot\text{min}^{-1}}{70 \text{ battements}\cdot\text{min}^{-1}} \approx 0{,}143 \text{ L}\cdot\text{battement}^{-1} \text{ (soit } 143 \text{ mL per battement)}$$

* **Au palier 3 ($100\% \text{ PMA}$) :**
  $$\frac{\dot{V}_E}{RC} = \frac{130 \text{ L}\cdot\text{min}^{-1}}{190 \text{ battements}\cdot\text{min}^{-1}} \approx 0{,}684 \text{ L}\cdot\text{battement}^{-1} \text{ (soit } 684 \text{ mL per battement)}$$

*Démonstration :* Le rapport $\dot{V}_E / RC$ est multiplié par près de $4{,}8$. Cela démontre un couplage neuro-hormonal très strict : les centres bulbaires commandent de manière synchrone l'augmentation de l'activité cardiaque et de la ventilation pulmonaire afin d'éviter toute rupture dans les échanges gazométriques au niveau des alvéoles pulmonaires et des tissus musculaires.

#### 3. Analyse critique de la concentration artérielle en $\text{O}_2$ ($\text{CaO}_2$)
* **Hypothèse explicative :** Bien que la ventilation augmente massivement ($\times 13$), la baisse de la $\text{CaO}_2$ (de $200$ à $190 \text{ mL}\cdot\text{L}^{-1}$) suggère que lors d'un exercice intense, le temps de transit des globules rouges dans les capillaires pulmonaires est tellement réduit que l'oxygénation complète de l'hémoglobine peut être légèrement compromise (phénomène de désaturation artérielle à l'exercice intense chez certains sujets).
* **Limite du modèle :** Ce paramètre illustre la complexité des régulations physiologiques : l'organisme privilégie la vitesse de circulation et le débit global ($\dot{Q}$ et $\dot{V}_E$) au détriment d'une saturation alvéolaire optimale à $100\%$. De plus, la baisse du pH sanguin et l'augmentation de la température corporelle (liées à l'effort) modifient l'affinité de l'hémoglobine pour l'oxygène, illustrant un compromis permanent entre coût ventilatoire et efficacité métabolique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
