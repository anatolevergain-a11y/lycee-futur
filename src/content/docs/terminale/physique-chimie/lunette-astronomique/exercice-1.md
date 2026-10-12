---
title: "Exercice 1 : Grossissement et foyer d'une lunette afocale"
description: "Application pratique du chapitre Lunette astronomique et optique géométrique"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la conception d'un instrument d'optique destiné à l'observation astronomique amateur de terrain, on étudie une lunette afocale modélisée dans l'approximation de Gauss. 

Une lunette afocale est constituée de deux lentilles minces convergentes coaxiales : 
- L'**objectif**, de centre optique $O_1$ et de distance focale $f'_1 > 0$.
- L'**oculaire**, de centre optique $O_2$ et de distance focale $f'_2 > 0$.

Le terme « afocal » qualifie un système optique pour lequel l'image d'un objet situé à l'infini est rejetée à l'infini. Ce choix technologique permet de ne pas fatiguer l'œil de l'observateur, qui observe sans effort d'accommodation.

**Données constructeur et caractéristiques mesurées :**
- Distance focale de l'objectif : $f'_1 = 800 \text{ cm}$
- Distance focale de l'oculaire : $f'_2 = 50 \text{ mm}$
- Diamètre de l'objectif : $D_1 = 80 \text{ mm}$
- Le milieu ambiant est l'air ($n \approx 1$).

En pratique, les instruments réels font face à des compromis : l'augmentation du grossissement se fait souvent au détriment de la luminosité de l'image, du champ visuel et de la mise en évidence d'aberrations chromatiques ou géométriques (sphériques) que le modèle de Gauss ne permet pas de prédire.

---

### ❓ Énoncé

1. Rappeler la définition et les propriétés géométriques d'un système optique afocal en termes de positionnement du foyer image de l'objectif par rapport au foyer objet de l'oculaire. En déduire la longueur $L$ (ou intervalle optique) de la lunette.
2. Établir l'expression littérale du grossissement commercial $G$ de la lunette afocale en fonction des distances focales $f'_1$ et $f'_2$. Calculer sa valeur numérique.
3. Un élève affirme que « plus le grossissement est grand, plus l'image perçue est lumineuse et détaillée ». À l'aide de considérations énergétiques (éclairement) et des limites du modèle, analyser de manière critique cette affirmation.
4. On souhaite observer un cratère lunaire sous un diamètre apparent initial $\alpha = 5,0 \times 10^{-3} \text{ rad}$. Calculer le diamètre apparent $\alpha'$ de l'image vue à travers la lunette. Discuter de la faisabilité d'une observation de qualité si l'on augmentait la focale de l'oculaire à $f'_2 = 200 \text{ mm}$ avec le même objectif.

---

### 💡 Indice de méthode

- **Question 1 :** Pensez à la condition de conjugaison pour qu'un faisceau parallèle entrant ressorte parallèle. Le plan focal image de la première lentille doit coïncider avec le plan focal objet de la seconde.
- **Question 2 :** Le grossissement $G$ est défini par le rapport $\frac{\alpha'}{\alpha}$, où $\alpha'$ est le diamètre apparent de l'image à travers l'instrument et $\alpha$ le diamètre apparent de l'objet vu à l'œil nu. Utilisez les relations de conjugaison et les théorèmes de Thalès dans l'approximation des petits angles ($\tan(\theta) \approx \theta$).
- **Question 3 :** Distinguez le pouvoir séparateur (lié à la diffraction et au diamètre $D_1$) de la luminosité (liée à la surface collectrice de l'objectif et au diamètre de la pupille de sortie).
- **Question 4 :** Veillez à la cohérence des unités, notamment lors du passage des millimètres aux centimètres.

---

### 📋 Correction détaillée pas à pas

#### 1. Condition d'afocalité et longueur de la lunette
Pour qu'un système constitué de deux lentilles convergentes soit afocal, un faisceau de lumière cylindrique (provenant d'un objet à l'infini) doit ressortir du système sous forme d'un faisceau également cylindrique. 
Le foyer image $F'_1$ de l'objectif et le foyer objet $F_2$ de l'oculaire doivent donc être confondus. 
La longueur $L$ de la lunette (distance séparant les deux centres optiques $O_1$ et $O_2$) s'exprime ainsi :
$$L = \overline{O_1O_2} = O_1F'_1 + F'_1O_2 = f'_1 + f'_2$$
*A.N. :* 
Convertissons $f'_1$ et $f'_2$ dans la même unité (en mètres) :
$f'_1 = 800 \text{ cm} = 8,0 \text{ m}$
$f'_2 = 50 \text{ mm} = 0,050 \text{ m}$
$$L = 8,0 + 0,050 = 8,05 \text{ m}$$

#### 2. Expression et calcul du grossissement $G$
Soit un objet étendu à l'infini vu sous un angle $\alpha$ depuis l'objectif. Dans l'approximation de Gauss et pour les petits angles ($\tan \alpha \approx \alpha$), la taille de l'image intermédiaire intermédiaire $A_1B_1$ dans le plan focal commun vaut :
$$A_1B_1 = f'_1 \cdot \alpha$$
Cette image intermédiaire sert d'objet pour l'oculaire. Le diamètre apparent $\alpha'$ de l'image définitive vue à travers l'oculaire s'exprime par :
$$\alpha' \approx \tan \alpha' = \frac{A_1B_1}{f'_2} = \frac{f'_1 \cdot \alpha}{f'_2}$$
Le grossissement $G$ est par définition le rapport :
$$G = \frac{\alpha'}{\alpha} = \frac{f'_1}{f'_2}$$
*A.N. :*
$$G = \frac{8,0}{0,050} = 160$$
Le grossissement de la lunette est de $160$ (sans unité).

#### 3. Analyse critique de l'affirmation de l'élève
L'affirmation de l'élève est partiellement erronée et nécessite d'être nuancée :
- **Sur le plan du détail (pouvoir séparateur) :** Augmenter le grossissement ne crée pas de détails supplémentaires. Le niveau de détail est fixé par le diamètre de l'objectif $D_1$ via le critère de diffraction (limite de Rayleigh). Si le grossissement est trop élevé par rapport au diamètre, l'image devient "floue" (grossissement inutile).
- **Sur le plan de la luminosité :** L'éclairement de l'image rétinienne dépend de la surface de la pupille de sortie et du diamètre de l'objectif, mais l'augmentation du grossissement étale la même quantité de lumière sur une surface plus grande sur la rétine. Par conséquent, **la luminosité de l'image diminue** lorsque le grossissement augmente. L'affirmation est donc fausse concernant la luminosité.

#### 4. Calcul du diamètre apparent $\alpha'$ et discussion sur la modification de focale
Le diamètre apparent de l'image s'obtient via la définition du grossissement :
$$\alpha' = G \cdot \alpha$$
*A.N. :*
$$\alpha' = 160 \times 5,0 \times 10^{-3} = 0,80 \text{ rad}$$
Si l'on modifie la focale de l'oculaire pour l'amener à $f'_2 = 200 \text{ mm} = 0,20 \text{ m}$ :
Le nouveau grossissement devient $G' = \frac{8,0}{0,20} = 40$.
Le grossissement est divisé par $4$, ce qui rendrait l'image quatre fois plus lumineuse, mais le détail angulaire serait moins grand ($\alpha' = 0,20 \text{ rad}$). En pratique, le choix de $f'_2$ est un compromis technologique dicté par la nature de l'astre observé, la turbulence atmosphérique locale et le confort visuel recherché.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
