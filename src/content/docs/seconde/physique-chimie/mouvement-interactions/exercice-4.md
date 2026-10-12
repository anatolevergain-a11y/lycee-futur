---
title: "Exercice 4 : Sécurité lors d'un choc automobile"
description: "Application pratique du chapitre Mouvement et interactions"
---

### 🌐 Contexte concret

Lors d'un accident de la route, la violence du choc dépend fortement de la vitesse du véhicule et de sa décélération. Pour comprendre l'importance du port de la ceinture de sécurité et des zones de déformation des véhicules, nous allons étudier le mouvement d'une voiture testée lors d'un crash-test. 

La voiture aborde un mur à une vitesse constante. Au moment de l'impact ($t = 0\text{ s}$), elle commence à freiner brutalement sous l'effet du choc. Le tableau ci-dessous donne la position du centre de masse $G$ du véhicule en fonction du temps $t$ pendant la phase de choc.

| Date $t$ (en ms) | Position $x$ (en m) |
| :---: | :---: |
| 0 | 0,00 |
| 20 | 0,90 |
| 40 | 1,60 |
| 60 | 2,10 |
| 80 | 2,40 |
| 100 | 2,50 |

---

### ❓ Énoncé

1. **Calcul de vitesse :** Calculer la vitesse instantanée $v_2$ du véhicule à la date $t_2 = 40\text{ ms}$.
2. **Caractérisation du mouvement :** Comment évolue la valeur de la vitesse au cours du temps lors de ce choc ? En déduire la nature du mouvement du véhicule.
3. **Approche dynamique :** D'après le principe d'inertie (ou première loi de Newton), que se passerait-il pour un passager non attaché à l'intérieur du véhicule au moment de l'impact ?
4. **Sécurité routière :** Expliquer brièvement pourquoi les constructeurs automobiles intègrent des zones "déformables" à l'avant des voitures (le capot qui se froisse).

---

### 💡 Indice

* **Question 1 :** Pour calculer la vitesse instantanée $v_2$ à l'instant $t_2$, on utilise l'approximation de la vitesse moyenne sur un petit intervalle encadrant $t_2$ :
  $$v_2 \approx \frac{x_3 - x_1}{t_3 - t_1}$$
  Attention aux unités : convertissez les millisecondes (ms) en secondes (s) et les mètres (m) restent en mètres.
* **Question 2 :** Calculez les vitesses à différents instants pour comparer leur évolution.
* **Question 3 & 4 :** Pensez au principe d'inertie : un objet en mouvement tend à conserver son mouvement rectiligne uniforme si aucune force ne s'exerce sur lui.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la vitesse instantanée $v_2$ à $t_2 = 40\text{ ms}$
Pour calculer la vitesse instantanée à la date $t_2$ (située entre $t_1 = 20\text{ ms}$ et $t_3 = 60\text{ ms}$), on utilise la formule :
$$v_2 \approx \frac{x_3 - x_1}{t_3 - t_1}$$

- $x_1 = 0,90\text{ m}$ à $t_1 = 20\text{ ms} = 20 \times 10^{-3}\text{ s}$
- $x_3 = 2,10\text{ m}$ à $t_3 = 60\text{ ms} = 60 \times 10^{-3}\text{ s}$

Application numérique :
$$v_2 \approx \frac{2,10 - 0,90}{60 \times 10^{-3} - 20 \times 10^{-3}} = \frac{1,20}{40 \times 10^{-3}} = \frac{1,20}{0,040} = 30\text{ m/s}$$

La vitesse instantanée du véhicule à $t = 40\text{ ms}$ est de $30\text{ m/s}$ (soit $108\text{ km/h}$).

---

#### 2. Caractérisation du mouvement
Si l'on calcule de la même manière les autres vitesses :
- À $t_1 = 20\text{ ms}$ : $v_1 = \frac{x_2 - x_0}{t_2 - t_0} = \frac{1,60 - 0,00}{40 \times 10^{-3}} = 40\text{ m/s}$
- À $t_4 = 80\text{ ms}$ : $v_4 = \frac{x_5 - x_3}{t_5 - t_3} = \frac{2,50 - 2,10}{100 \times 10^{-3} - 60 \times 10^{-3}} = \frac{0,40}{0,040} = 10\text{ m/s}$

On constate que la valeur de la vitesse diminue au cours du temps (elle passe de $40\text{ m/s}$ à $10\text{ m/s}$). 
Le mouvement du véhicule est donc **rectiligne décéléré** (ou retardé).

---

#### 3. Approche dynamique et principe d'inertie
D'après le **principe d'inertie**, tout corps persévère en son état de repos ou de mouvement rectiligne uniforme si les forces qui s'exercent sur lui se compensent.

Au moment du choc, le véhicule subit une force de freinage extrême exercée par le mur. En revanche, **le passager non attaché**, par inertie, continue de se déplacer à la vitesse qu'il avait avant l'impact ($40\text{ m/s}$) en ligne droite. Il va donc être projeté violemment vers l'avant du véhicule (pare-brise ou tableau de bord) jusqu'à ce qu'un obstacle l'arrête. C'est le rôle de la ceinture de sécurité d'exercer cette force indispensable pour modifier son mouvement.

---

#### 4. Rôle des zones déformables
Les zones déformables à l'avant du véhicule permettent d'**augmenter la durée du choc** ($\Delta t$). 

En physique, pour une variation de vitesse donnée, plus le choc est long, plus la décélération (et donc la force subie par les passagers) est faible, d'après la relation fondamentale de la dynamique ($\sum \vec{F} = m \cdot \vec{a}$). Cela permet de sauver des vies en réduisant les traumatismes liés à la décélération brutale.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
