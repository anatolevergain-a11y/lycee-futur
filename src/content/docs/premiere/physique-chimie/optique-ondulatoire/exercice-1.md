---
title: "Exercice 1 : Modèle ondulateur de la lumière et couleurs"
description: "Application pratique du chapitre Lumière : ondes et particules"
---

### 🌐 Contexte & Données scientifiques

En spectroscopie et dans l'industrie des affichages numériques, la modélisation de la lumière par son caractère ondulatoire est primordiale. Une onde lumineuse monochromatique se caractérise dans le vide (ou dans l'air, en première approximation) par sa longueur d'onde $\lambda$ et sa fréquence $v$. 

La relation fondamentale reliant ces grandeurs à la célérité de la lumière $c$ est :
$$c = \lambda \cdot v$$

Dans le cadre de l'étude de la vision humaine et des technologies d'affichage (RVB : Rouge, Vert, Bleu), on cherche à analyser les radiations émises par une diode électroluminescente (DEL) RVB haut de gamme utilisée dans un écran de studio. 

Données scientifiques et constantes :
* Célérité de la lumière dans le vide : $c = 3,00 \times 10^8 \text{ m}\cdot\text{s}^{-1}$
* Constante de Planck : $h = 6,626 \times 10^{-34} \text{ J}\cdot\text{s}$
* Domaine du visible : de $\lambda_{\text{violet}} \approx 400 \text{ nm}$ à $\lambda_{\text{rouge}} \approx 800 \text{ nm}$.
* Énergie d'un photon : $E = h \cdot v = \frac{h \cdot c}{\lambda}$

*Note critique sur les modèles :* Le modèle ondulatoire explique parfaitement les phénomènes de diffraction et d'interférences, mais s'avère insuffisant pour décrire l'interaction matière-lumière lors de l'émission ou de l'absorption (effet photoélectrique), nécessitant alors le modèle corpusculaire (les photons). Les ingénieurs doivent constamment croiser ces deux approches complémentaires et non exclusives.

---

### ❓ Énoncé

1. **Analyse spectrale :** Une sous-unité de l'écran émet une radiation monochromatique dont la fréquence mesurée est $v = 5,45 \times 10^{14} \text{ Hz}$. Calculer la longueur d'onde $\lambda$ de cette radiation en nanomètres. À quelle couleur visible (dans le référentiel trichromatique standard) peut-on associer cette radiation ?
2. **Bilan énergétique quantifié :** En utilisant le modèle corpusculaire complémentaire, calculez l'énergie $E$ d'un photon associé à cette radiation, exprimée en joules (J) puis en électronvolts (eV), sachant que $1 \text{ eV} = 1,60 \times 10^{-19} \text{ J}$.
3. **Limite métrologique et incertitude :** Le spectromètre utilisé pour la mesure de la fréquence possède une incertitude relative de $\frac{\Delta v}{v} = 0,5\,\%$. En considérant $c$ comme une constante exacte, calculez l'incertitude absolue $\Delta \lambda$ commise sur la détermination de la longueur d'onde. Concluez quant à la précision de l'identification de la couleur.
4. **Esprit critique et choix technologiques :** Un fabricant affirme que pour doubler l'énergie lumineuse perçue par l'œil sans changer la couleur, il suffit de doubler la fréquence de l'onde lumineuse émise. En vous appuyant sur vos connaissances et sur les données du visible, discutez de la viabilité physique et biologique de cette affirmation.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez la relation de conjugaison des grandeurs ondulatoires $c = \lambda \cdot v$ en veillant à bien convertir les unités dans le Système International (SI) avant de revenir aux nanomètres ($1 \text{ nm} = 10^{-9} \text{ m}$).
* **Question 2 :** Appliquez directement la formule de Planck $E = h \cdot v$ ou $E = \frac{h \cdot c}{\lambda}$. Pour la conversion en eV, effectuez une division par la valeur de la charge élémentaire.
* **Question 3 :** En mathématiques et en physique, l'incertitude relative d'un produit ou d'un quotient s'obtient par la somme des incertitudes relatives. Ici, $\frac{\Delta \lambda}{\lambda} = \frac{\Delta v}{v}$ car $c$ et $h$ sont des constantes.
* **Question 4 :** Interrogez-vous sur la définition physique d'une couleur (liée à $\lambda$ ou $v$) et sur le domaine d'existence de la lumière visible par l'œil humain. Doubler la fréquence d'une onde visible la fait-elle rester dans le spectre visible ?

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la longueur d'onde et identification de la couleur
D'après le modèle ondulateur, la relation entre la célérité, la longueur d'onde et la fréquence est :
$$c = \lambda \cdot v \iff \lambda = \frac{c}{v}$$

A.N. :
$$\lambda = \frac{3,00 \times 10^8}{5,45 \times 10^{14}} \approx 5,50 \times 10^{-7} \text{ m}$$

En convertissant en nanomètres ($1 \text{ nm} = 10^{-9} \text{ m}$) :
$$\lambda = 550 \text{ nm}$$

*Analyse :* Une longueur d'onde de $550 \text{ nm}$ se situe dans le jaune-vert. C'est précisément la zone du spectre visible où l'œil humain possède sa sensibilité lumineuse maximale (courbe de vision photopique).

---

#### 2. Calcul de l'énergie d'un photon
L'énergie d'un photon associé à cette onde s'obtient via la relation de Planck-Einstein :
$$E = h \cdot v$$

A.N. (en Joules) :
$$E = 6,626 \times 10^{-34} \times 5,45 \times 10^{14} \approx 3,61 \times 10^{-19} \text{ J}$$

Conversion en électronvolts (eV) :
$$E_{\text{eV}} = \frac{3,61 \times 10^{-19}}{1,60 \times 10^{-19}} \approx 2,26 \text{ eV}$$

---

#### 3. Analyse de l'incertitude de mesure
La relation liant $\lambda$ et $v$ étant $\lambda = \frac{c}{v}$ (où $c$ est une constante), l'incertitude relative sur $\lambda$ est égale à l'incertitude relative sur $v$ :
$$\frac{\Delta \lambda}{\lambda} = \frac{\Delta v}{v} = 0,005$$

L'incertitude absolue sur la longueur d'onde $\Delta \lambda$ est donc :
$$\Delta \lambda = \lambda \times 0,005 = 550 \times 0,005 = 2,75 \text{ nm}$$

*Conclusion critique :* La longueur d'onde mesurée est donc de $\lambda = (550 \pm 3) \text{ nm}$. Cette incertitude est faible devant l'étendue du spectre visible, ce qui valide une identification rigoureuse de la couleur verte.

---

#### 4. Discussion critique de l'affirmation du fabricant
* **Sur le plan physique :** L'énergie d'un photon est effectivement proportionnelle à la fréquence ($E = h \cdot v$). Si l'on double la fréquence $v$, on double l'énergie *individuelle* de chaque photon. 
* **Sur le plan de la couleur :** Doubler la fréquence ($v' = 2v$) signifierait diviser par deux la longueur d'onde ($\lambda' = \frac{\lambda}{2} = 275 \text{ nm}$). Or, $275 \text{ nm}$ se situe dans le domaine des **ultraviolets**, invisible pour l'œil humain. La couleur ne serait donc plus perçue comme la même (elle disparaîtrait du spectre visible).
* **Sur le plan biologique et technologique :** L'intensité lumineuse perçue (luminosité) ne dépend pas de l'énergie d'un seul photon, mais du **flux photonique** (le nombre de photons émis par seconde). Pour doubler l'intensité lumineuse sans changer la couleur, il faut doubler le nombre de photons émis par seconde, et non modifier leur fréquence. 

*Bilan :* L'affirmation du fabricant est scientifiquement erronée et témoigne d'une confusion entre l'énergie individuelle d'une particule (fréquence) et l'intensité globale d'une source lumineuse (nombre de photons).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
