---
title: "Exercice 1 : Bilan radiatif terrestre et facteurs de variabilité du climat"
description: "Application pratique du chapitre Le système climatique terrestre"
---

### 🌐 Contexte & Données scientifiques

Le système climatique terrestre est régi par des flux d'énergie dont la quantification précise permet de comprendre le bilan radiatif de la Terre et les mécanismes du réchauffement global. La puissance radiative solaire reçue au sommet de l'atmosphère est mesurée par la constante solaire $E_0 \approx 1361 \text{ W}\cdot\text{m}^{-2}$. 

Cependant, la Terre n'interceptant le rayonnement que par sa section circulaire ($\pi R_T^2$) et émettant de l'énergie sur toute sa surface sphérique ($4\pi R_T^2$), la puissance solaire moyenne reçue par unité de surface est divisée par 4. Une partie de ce rayonnement incident est immédiatement réfléchie vers l'espace par l'albédo terrestre noté $\alpha$.

Le tableau ci-dessous présente l'évolution estimée de deux paramètres clés du système climatique entre l'époque préindustrielle (1750) et la période actuelle (2020) :

| Paramètre | Époque préindustrielle (1750) | Période actuelle (2020) |
| :--- | :---: | :---: |
| Albédo moyen terrestre ($\alpha$) | $0,30$ | $0,29$ |
| Concentration en $\text{CO}_2$ ($\text{ppm}$) | $280$ | $415$ |
| Forçage radiatif anthropique total ($F$) | $0 \text{ W}\cdot\text{m}^{-2}$ | $+2,72 \text{ W}\cdot\text{m}^{-2}$ |

*Note scientifique : Le forçage radiatif représente la perturbation du bilan radiatif au sommet de l'atmosphère, exprimée en $\text{W}\cdot\text{m}^{-2}$. Une valeur positive indique un déséquilibre tendant vers un réchauffement du système.*

---

### ❓ Énoncé

1. **Calculer** la puissance radiative solaire moyenne reçue par unité de surface au sommet de l'atmosphère, notée $E_e$, puis déterminer la puissance réellement absorbée par la surface terrestre pour l'époque préindustrielle et la période actuelle.
2. **Expliquer** par quel mécanisme physique une variation de l'albédo de $0,30$ à $0,29$ (comme observé par certains satellites au cours des dernières décennies, lié notamment à la diminution de la couverture neigeuse et glaciaire) influence le bilan radiatif. **Discuter** de la nature de cette rétroaction (positive ou négative).
3. À partir de la loi de Stefan-Boltzmann, la température radiative de la Terre $T_s$ en l'absence d'effet de serre s'exprime par la relation :
   $$T_s = \left( \frac{E_{\text{absorbée}}}{\sigma} \right)^{\frac{1}{4}}$$
   où $\sigma = 5,67 \times 10^{-8} \text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-4}$ est la constante de Stefan-Boltzmann.
   **Calculer** la température théorique $T_s$ pour la période actuelle. **Comparer** cette valeur à la température moyenne réelle mesurée à la surface de la Terre ($T_{\text{réelle}} \approx 15^\circ\text{C}$ ou $288,15 \text{ K}$) et **analyser** la limite de ce modèle climatique simple.
4. **Démontrer** comment l'intégration du forçage radiatif anthropique $F$ modifie l'équilibre thermique du système, et **discuter** des incertitudes scientifiques associées à la modélisation de la sensibilité climatique à long terme.

---

### 💡 Indice de méthode

* **Question 1 :** Rappelez-vous que la surface d'interception d'une sphère est un disque ($\pi R^2$) tandis que sa surface d'émission est celle d'une sphère ($4\pi R^2$). La puissance absorbée correspond à la fraction du rayonnement solaire qui n'est *pas* réfléchie par l'albédo : $E_{\text{absorbée}} = E_e \times (1 - \alpha)$.
* **Question 2 :** Analysez le terme $(1 - \alpha)$. Si l'albédo diminue, la part d'énergie absorbée augmente. Reliez cela au concept de boucle de rétroaction (effet amplificateur ou atténuateur).
* **Question 3 :** Veillez à bien convertir les températures en kelvins si nécessaire, et rappelez-vous que ce modèle ne prend pas en compte l'absorption et la réémission des gaz à effet de serre vers la surface.
* **Question 4 :** Un forçage radiatif $F$ s'ajoute directement au bilan énergétique net au sommet de l'atmosphère. Gardez à l'esprit que les modèles climatiques intègrent des rétroactions complexes (vapeur d'eau, nuages) qui génèrent des marges d'incertitude quant à l'élévation future exacte des températures.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la puissance solaire reçue et absorbée
* **Puissance solaire moyenne reçue ($E_e$) :**
  La constante solaire $E_0$ frappe la surface de la Terre selon sa section géométrique ($\pi R_T^2$), mais se répartit sur toute la surface de la sphère ($4\pi R_T^2$) :
  $$E_e = \frac{E_0}{4} = \frac{1361}{4} = 340,25 \text{ W}\cdot\text{m}^{-2}$$

* **Puissance absorbée ($E_{\text{absorbée}}$) :**
  Elle dépend de l'albédo $\alpha$ selon la formule $E_{\text{absorbée}} = E_e \times (1 - \alpha)$.
  * *Époque préindustrielle ($\alpha = 0,30$) :*
    $$E_{\text{absorbée, 1750}} = 340,25 \times (1 - 0,30) = 340,25 \times 0,70 = 238,18 \text{ W}\cdot\text{m}^{-2}$$
  * *Période actuelle ($\alpha = 0,29$) :*
    $$E_{\text{absorbée, 2020}} = 340,25 \times (1 - 0,29) = 340,25 \times 0,71 = 241,58 \text{ W}\cdot\text{m}^{-2}$$

#### 2. Analyse de la variation de l'albédo et de la rétroaction
Une diminution de l'albédo (passant de $0,30$ à $0,29$) signifie que la surface terrestre réfléchit moins de rayonnement solaire vers l'espace et en absorbe davantage. 
* **Boucle de rétroaction :** Il s'agit d'une **rétroaction positive**. En effet, le réchauffement climatique entraîne la fonte des glaces et des neiges (surfaces à fort albédo, $\alpha \approx 0,8$), remplacées par de l'océan ou de la roche (surfaces à faible albédo, $\alpha \in [0,1 ; 0,4]$). Cette baisse de l'albédo accroît l'absorption de l'énergie solaire, ce qui amplifie le réchauffement initial.

#### 3. Calcul de la température théorique et limites du modèle
* **Application numérique pour 2020 :**
  $$T_s = \left( \frac{241,58}{5,67 \times 10^{-8}} \right)^{\frac{1}{4}} = \left( 4,2607 \times 10^9 \right)^{\frac{1}{4}} \approx 255,2 \text{ K}$$
  Soit $T_s \approx 255,2 - 273,15 = -18^\circ\text{C}$.

* **Comparaison et analyse critique :**
  La température théorique trouvée est de $-18^\circ\text{C}$, alors que la température réelle mesurée à la surface est de $+15^\circ\text{C}$, soit un écart de $+33^\circ\text{C}$. 
  * *Limite du modèle :* Ce modèle planétaire radiatif simple ne tient pas compte de l'atmosphère opaque aux infrarouges terrestres. Les gaz à effet de serre (vapeur d'eau, $\text{CO}_2$, $\text{CH}_4$, etc.) absorbent le rayonnement infrarouge émis par la surface et le réémettent en partie vers le bas, constituant l'effet de serre naturel indispensable à la vie sur Terre.

#### 4. Intégration du forçage radiatif et incertitudes
* **Modification du bilan :**
  Le forçage radiatif anthropique ($F = +2,72 \text{ W}\cdot\text{m}^{-2}$ en 2020) s'ajoute au flux net reçu. Le système n'est plus à l'équilibre radiatif : il emmagasine de l'énergie excédentaire (absorbée à plus de $90\%$ par les océans, provoquant leur réchauffement thermique).
* **Incertitudes scientifiques :**
  Bien que les lois physiques de radiation soient rigoureuses, la prédiction exacte de la température future comporte des incertitudes. Celles-ci résident principalement dans :
  1. *Les rétroactions complexes* (notamment le rôle ambigu des nuages, qui peuvent à la fois réfléchir le rayonnement solaire - effet refroidissant - et piéger les infrarouges - effet réchauffoyant).
  2. *L'incertitude socio-économique* liée aux trajectoires futures des émissions de gaz à effet de serre par l'humanité.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
