---
title: "Exercice 2 : Analyse des modèles climatiques et marges d'incertitude"
description: "Application pratique du chapitre Le système climatique terrestre"
---

### 🌐 Contexte & Données scientifiques

Les modèles climatiques globaux (ou MCG, en anglais *General Circulation Models*) sont des outils mathématiques et informatiques indispensables pour simuler la dynamique du système climatique terrestre et projeter son évolution future. Ils reposent sur la résolution numérique des équations de la physique (thermodynamique, mécanique des fluides, transfert radiatif) appliquées à l'atmosphère, à l'océan, à la cryosphère et à la biosphère.

Cependant, la complexité des rétroactions (ou *feedbacks*) biogéochimiques et physiques induit des marges d'incertitude. Le tableau ci-dessous présente les projections de l'élévation de la température globale moyenne de surface ($\Delta T$) par rapport à la période préindustrielle, pour l'année 2100, selon différents scénarios socio-économiques du GIEC (rapport AR6) dits SSP (*Shared Socioeconomic Pathways*), ainsi que l'incertitude associée liée à la sensibilité climatique du modèle.

| Scénario SSP | Forçage radiatif en 2100 ($W \cdot m^{-2}$) | $\Delta T$ moyen projeté en 2100 ($^\circ C$) | Intervalle d'incertitude (1 écart-type) ($^\circ C$) |
| :--- | :---: | :---: | :---: |
| **SSP1-1.9** | $+1,9$ | $+1,4$ | $[+1,0 ; +1,8]$ |
| **SSP1-2.6** | $+2,6$ | $+1,8$ | $[+1,3 ; +2,4]$ |
| **SSP2-4.5** | $+4,5$ | $+2,7$ | $[+2,1 ; +3,5]$ |
| **SSP5-8.5** | $+8,5$ | $+4,4$ | $[+3,3 ; +5,7]$ |

*Rappel de cours :* Le forçage radiatif ($\Delta F$) quantifie la perturbation du bilan radiatif au sommet de la troposphère, exprimée en $W \cdot m^{-2}$. La sensibilité climatique à l'équilibre ($S$) est définie conventionnellement par la relation approchée :
$$\Delta T = \lambda \cdot \Delta F$$
où $\lambda$ représente le paramètre de sensibilité climatique globale ($en\ K \cdot m^2 \cdot W^{-1}$).

---

### ❓ Énoncé

1. **(Restitution et analyse)** En exploitant les données du tableau, calculez la valeur du paramètre de sensibilité climatique $\lambda$ (supposé constant en première approximation) pour le scénario SSP2-4.5 en utilisant les valeurs centrales. Exprimez le résultat avec l'unité appropriée.
2. **(Esprit critique et modélisation)** L'intervalle d'incertitude associé à chaque projection ne provient pas d'une erreur de calcul numérique, mais de la représentation imparfaite des processus physiques complexes au sein des modèles (comme la rétroaction des nuages). À partir des données du scénario SSP5-8.5, calculez l'amplitude relative de l'incertitude par rapport à la valeur centrale (exprimée en pourcentage). Discutez de l'impact de cette incertitude sur la prise de décision politique et économique.
3. **(Démarche scientifique)** Un critique affirme que « puisque les modèles comportent des incertitudes, ils ne sont pas scientifiquement fiables pour guider les politiques d'atténuation ». En mobilisant vos connaissances sur la validation des modèles (notamment le *hindcasting* ou rétro-prédiction) et les données du document, réfutez ou nuancer scientifiquement cette affirmation.

---

### 💡 Indice de méthode

* **Question 1 :** Réarrangez la formule $\Delta T = \lambda \cdot \Delta F$ pour isoler $\lambda$. Veillez à bien reporter les valeurs du tableau correspondant au scénario demandé.
* **Question 2 :** L'amplitude de l'intervalle d'incertitude se calcule en faisant la différence entre la borne supérieure et la borne inférieure (ou en exprimant l'écart par rapport à la moyenne). L'amplitude relative correspond au rapport de cette incertitude sur la valeur centrale, multiplié par 100.
* **Question 3 :** Sondez la différence entre *incertitude épistémique* (limite des connaissances/modélisation) et *invalidité*. Rappelez comment les climatologues testent la robustesse des modèles sur les climats passés avant de les projeter dans le futur.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul du paramètre de sensibilité climatique ($\lambda$) pour le scénario SSP2-4.5
* **Formule littérale :**
  $$\lambda = \frac{\Delta T}{\Delta F}$$
* **Application numérique :**
  Pour le scénario SSP2-4.5 :
  $$\Delta T = +2,7\ ^\circ\text{C} \quad \text{et} \quad \Delta F = 4,5\ \text{W}\cdot\text{m}^{-2}$$
  $$\lambda = \frac{2,7}{4,5} = 0,6\ ^\circ\text{C}\cdot\text{W}^{-1}\cdot\text{m}^2 \quad (\text{ou } 0,6\ \text{K}\cdot\text{m}^2\cdot\text{W}^{-1})$$
* **Interprétation scientifique :** Un forçage radiatif supplémentaire d'un watt par mètre carré induit, selon ce scénario et ce modèle moyen, une augmentation de la température de surface de $0,6\ ^\circ\text{C}$.

#### 2. Analyse de l'incertitude et de sa portée décisionnelle
* **Calcul de l'amplitude de l'incertitude pour le scénario SSP5-8.5 :**
  La valeur centrale est $+4,4\ ^\circ\text{C}$ avec un intervalle $[+3,3\ ; +5,7]$.
  L'étendue de l'intervalle est :
  $$\text{Étendue} = 5,7 - 3,3 = 2,4\ ^\circ\text{C}$$
  L'écart absolu maximal par rapport à la valeur centrale est de $\pm 1,3\ ^\circ\text{C}$ ($5,7 - 4,4 = 1,3$ et $4,4 - 3,3 = 1,1$; par convention d'un écart-type symétrique, on retient une incertitude de $\pm 1,25\ ^\circ\text{C}$ ou l'amplitude totale).
  Calculons l'incertitude relative (demi-amplitude de l'intervalle divisée par la valeur centrale) :
  $$\text{Incertitude relative} = \frac{5,7 - 3,3}{2 \times 4,4} = \frac{2,4}{8,8} \approx 0,273 \text{ soit } 27,3\%$$
* **Esprit critique et nuance :** 
  Une incertitude de près de $\pm 30\%$ sur la température en 2100 illustre la complexité du système Terre. Toutefois, loin de disqualifier les modèles, cette fourchette explicite les risques. Pour un décideur, gérer cette incertitude ne signifie pas attendre la certitude absolue (ce qui est épistémologiquement impossible en science du système complexe), mais appliquer le *principe de précaution* : même l'hypothèse basse du scénario SSP5-8.5 ($+3,3\ ^\circ\text{C}$) dépasse les seuils critiques des accords internationaux (limitation à $+1,5\ ^\circ\text{C}$ ou $+2\ ^\circ\text{C}$).

#### 3. Réfutation argumentée de la critique sur la fiabilité des modèles
* **Argument épistémologique :** L'existence d'une marge d'incertitude est inhérente à toute modélisation scientifique d'un système ouvert et complexe (non-linéarité des rétroactions, ex: albédo de la glace, cycle du carbone). Elle traduit notre connaissance en cours d'affinement et non une absence de rigueur.
* **Validation empirique (*Hindcasting*) :** Les climatologues ne se contentent pas de projeter l'avenir ; ils testent la robustesse de leurs modèles en les faisant tourner en sens inverse (*rétro-prédiction*) sur les climats passés (ex: maximum glaciaire, anomalies thermiques post-volcaniques). Les modèles ayant démontré leur capacité à reproduire les climats historiques passés sans ajustement *ad hoc* massifs, leur robustesse est scientifiquement établie, bien que des marges d'erreur subsistent sur la quantification exacte à long terme. Les modèles constituent donc des outils prédictifs probabilistes indispensables et scientifiquement valides.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
