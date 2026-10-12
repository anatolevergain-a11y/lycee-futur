---
title: "Exercice : Le climat de la Terre"
description: "Démonstration appliquée : Bilan radiatif et modélisation du réchauffement climatique"
---

### 🌐 Contexte

Le climat de la Terre est régulé par des équilibres énergétiques précis, souvent modélisés à l'aide de bilans radiatifs. La température de surface de notre planète dépend principalement de l'énergie solaire reçue, de l'albédo terrestre et de l'effet de serre naturel, lequel est aujourd'hui amplifié par les activités anthropiques (émissions de gaz à effet de serre). 

Dans cet exercice, nous allons étudier un modèle simple de la Terre (modèle radiatif à une couche atmosphérique) pour comprendre comment l'augmentation du taux de dioxyde de carbone ($\text{CO}_2$) perturbe le bilan radiatif et conduit au réchauffement climatique actuel.

---

### ❓ Énoncé

1. **Rappel du modèle planétaire sans atmosphère :** 
   En considérant la Terre comme un corps noir parfait recevant un flux solaire incident (constante solaire $S = 1362 \text{ W}\cdot\text{m}^{-2}$) et ayant un albédo moyen $a = 0{,}30$, calculez la température théorique de surface de la Terre $T_s$ en l'absence d'atmosphère. 
   *(Rappel : La surface de réception d'un disque planétaire est $\pi R^2$ et la surface d'émission de la sphère est $4\pi R^2$.)*

2. **Introduction de l'effet de serre :** 
   L'atmosphère réelle absorbe une partie du rayonnement infrarouge émis par la surface et réémet ce rayonnement dans toutes les directions, notamment vers le sol (flux atmosphérique descendant $F_{\text{atm}}$). 
   Exprimez le bilan radiatif de la surface de la Terre en régime stationnaire en fonction du flux solaire absorbé ($F_{\text{abs}}$), du rayonnement émis par la surface ($F_{\text{surf}}$) et de $F_{\text{atm}}$.

3. **Impact d'une perturbation anthropique :** 
   Suite à l'augmentation des concentrations de $\text{CO}_2$ liée aux activités humaines, la capacité d'absorption de l'atmosphère augmente, ce qui a pour effet d'accroître le flux descendant $F_{\text{atm}}$. 
   Expliquez qualitativement, à l'aide du concept de bilan radiatif, pourquoi cette modification entraîne une augmentation de la température moyenne de la surface terrestre $T_s$.

4. **Modélisation et esprit critique :** 
   Les modèles climatiques numériques (utilisés par le GIEC) intègrent des boucles de rétroaction (feedbacks), comme la rétroaction de la vapeur d'eau ou celle de la glace-albédo. 
   Définissez brièvement la boucle de rétroaction glace-albédo et indiquez si elle amplifie ou atténue le réchauffement initial.

---

### 💡 Indice

- **Question 1 :** Utilisez la loi de Stefan-Boltzmann ($F = \sigma T^4$, avec $\sigma = 5{,}67 \times 10^{-8} \text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-4}$) et l'égalité entre la puissance absorbée par la Terre et la puissance rayonnée.
- **Question 2 :** À l'équilibre, l'énergie totale reçue par la surface est égale à l'énergie totale perdue par la surface.
- **Question 3 :** Pensez à la différence entre l'énergie entrante et l'énergie sortante (le "forçage radiatif").
- **Question 4 :** Rappelez-vous que la glace a un albédo élevé (réfléchit beaucoup la lumière) contrairement à l'océan ou la roche.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Calcul de la température de surface sans atmosphère
* **Puissance solaire reçue par le disque terrestre :** 
  $$P_{\text{reçue}} = S \times \pi R^2$$
* **Puissance solaire absorbée (en tenant compte de l'albédo $a$) :** 
  $$P_{\text{absorbée}} = S \times (1 - a) \times \pi R^2$$
* **Puissance émise par la surface sphérique de la Terre (loi de Stefan-Boltzmann) :** 
  $$P_{\text{émise}} = (4\pi R^2) \times (\sigma T_s^4)$$
* À l'équilibre thermique, $P_{\text{absorbée}} = P_{\text{émise}}$ :
  $$S \times (1 - a) \times \pi R^2 = 4\pi R^2 \times \sigma T_s^4$$
  En simplifiant par $\pi R^2$, on obtient le flux moyen absorbé :
  $$\frac{S}{4} (1 - a) = \sigma T_s^4$$
* **Application numérique :**
  $$\frac{1362}{4} \times (1 - 0{,}30) = 340{,}5 \times 0{,}70 = 238{,}35 \text{ W}\cdot\text{m}^{-2}$$
  $$T_s^4 = \frac{238{,}35}{5{,}67 \times 10^{-8}} \approx 4{,}20 \times 10^9$$
  $$T_s = (4{,}20 \times 10^9)^{1/4} \approx 255 \text{ K}$$
  Soit $T_s \approx -18 \, ^\circ\text{C}$. *(Sans atmosphère, la Terre serait une planète gelée).*

#### 2. Bilan radiatif de la surface avec effet de serre
À l'équilibre stationnaire, la somme des flux énergétiques reçus par la surface est égale au flux émis par cette même surface :
$$F_{\text{abs}} + F_{\text{atm}} = F_{\text{surf}}$$
Avec :
- $F_{\text{abs}} = \frac{S}{4} (1 - a)$ (flux solaire absorbé par le sol)
- $F_{\text{atm}}$ (rayonnement infrarouge renvoyé par l'atmosphère vers le sol)
- $F_{\text{surf}} = \sigma T_s^4$ (rayonnement total émis par la surface terrestre vers l'espace et l'atmosphère)

#### 3. Explication de l'impact de l'augmentation du $\text{CO}_2$
Lorsque la concentration en $\text{CO}_2$ augmente, l'atmosphère absorbe plus efficacement le rayonnement infrarouge terrestre et réémet un flux descendant $F_{\text{atm}}$ plus important vers la surface. 
Le bilan radiatif de la surface est momentanément déséquilibré : $F_{\text{abs}} + F_{\text{atm\_nouveau}} > F_{\text{surf}}$. 
La surface reçoit plus d'énergie qu'elle n'en émet, ce qui entraîne son réchauffement progressif ($T_s$ augmente) jusqu'à ce qu'un nouvel équilibre soit atteint (grâce à une augmentation de $F_{\text{surf}} = \sigma T_s^4$).

#### 4. La rétroaction glace-albédo
* **Définition :** C'est un mécanisme climatique où la fonte de la glace et de la neige (provoquée par le réchauffement initial) remplace des surfaces claires à fort albédo par des surfaces sombres (océans ou sols nus) à faible albédo.
* **Effet :** Ces surfaces sombres absorbent davantage le rayonnement solaire, ce qui accentue le réchauffement global. 
* **Conclusion :** Il s'agit d'une **rétroaction positive** (un effet qui amplifie la cause initiale).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
