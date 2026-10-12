---
title: "Exercice 3 : Sécurité routière : distances d'arrêt et énergie cinétique"
description: "Application pratique du chapitre Mouvement et interactions"
---

### 🌐 Contexte & Données scientifiques

La sécurité routière repose en grande partie sur la modélisation physique du mouvement des véhicules lors d'une situation d'urgence. La distance nécessaire pour immobiliser un véhicule, appelée **distance d'arrêt ($d_a$)**, se décompose en deux phases distinctes :

1. **La phase de réaction :** Le conducteur perçoit le danger et transmet l'ordre de freiner. Durant ce temps de réaction ($\Delta t$), le véhicule poursuit son mouvement à vitesse constante ($v$). La distance parcourue est la **distance de réaction ($d_r$)**.
2. **La phase de freinage :** Le système de freinage est actionné, convertissant l'énergie cinétique du véhicule en énergie thermique par frottement. La distance parcourue pendant cette décélération est la **distance de freinage ($d_f$)**.

La distance d'arrêt s'exprime donc par la relation :
$$d_a = d_r + d_f$$

**Données et paramètres du modèle :**
* Masse du véhicule chargé : $m = 1200\text{ kg}$
* Temps de réaction moyen d'un conducteur en bonne santé et vigilant : $\Delta t = 1,0\text{ s}$
* Accélération de la pesanteur (mentionnée pour référence) : $g = 9,81\text{ m}\cdot\text{s}^{-2}$
* Profil de la route : route horizontale et sèche (coefficient d'adhérence pneu-sol optimal).

*Note scientifique et critique :* Le modèle physique idéal suppose un temps de réaction constant et une décélération uniforme. En réalité, le temps de réaction varie fortement selon la fatigue, l'âge, l'attention ou l'absorption de substances (alcool, médicaments). De même, l'efficacité du freinage dépend de l'état des pneumatiques, de l'usure des freins et des conditions météorologiques, introduisant des incertitudes importantes dans la prédiction réelle de l'accident.

---

### ❓ Énoncé

Un automobiliste roule sur une route départementale à une vitesse réglementaire $v_1 = 80\text{ km}\cdot\text{h}^{-1}$.

1. **Conversion et analyse cinématique :** Convertir la vitesse $v_1$ en $\text{m}\cdot\text{s}^{-1}$. Calculer la distance de réaction $d_r$ parcourue par le véhicule durant le temps de réaction du conducteur.
2. **Approche énergétique :** Exprimer puis calculer l'énergie cinétique $E_c$ du véhicule à cette vitesse. 
3. **Application du théorème de l'énergie cinétique :** Sachant que la force de freinage constante exercée par le véhicule a une valeur $F = 6,0 \times 10^3\text{ N}$, déterminer la distance de freinage $d_f$ en appliquant le travail de cette force sur la distance $d_f$ (on rappelle que le travail d'une force constante lors d'un déplacement rectiligne est $W = -F \times d_f$). En déduire la distance d'arrêt totale $d_a$.
4. **Esprit critique et modélisation :** L'automobiliste augmente sa vitesse de $20\%$ pour atteindre $96\text{ km}\cdot\text{h}^{-1}$. Sans refaire tous les calculs intermédiaires de manière exhaustive, analyser l'impact qualitatif et quantitatif de cette augmentation sur l'énergie cinétique et sur la distance d'arrêt. Discuter de la pertinence de la limitation de vitesse au regard de la non-linéarité des lois physiques.

---

### 💡 Indice de méthode

* **Question 1 :** Pour convertir des $\text{km}\cdot\text{h}^{-1}$ en $\text{m}\cdot\text{s}^{-1}$, divisez par $3,6$. Utilisez ensuite la formule du mouvement uniforme : $d_r = v \times \Delta t$.
* **Question 2 :** La formule de l'énergie cinétique est $E_c = \frac{1}{2} m v^2$, avec $m$ en $\text{kg}$ et $v$ en $\text{m}\cdot\text{s}^{-1}$.
* **Question 3 :** La variation d'énergie cinétique entre le début et la fin du freinage est égale à la somme des travaux des forces s'exerçant sur le système (ici, le travail de la force de freinage : $\Delta E_c = W(\vec{F})$). Comme le véhicule s'arrête, son énergie cinétique finale est nulle.
* **Question 4 :** Observez la dépendance mathématique de l'énergie cinétique (et donc de la distance de freinage) par rapport à la vitesse ($v^2$). Une augmentation linéaire de la vitesse n'entraîne pas une augmentation linéaire de l'énergie.

---

### 📋 Correction détaillée pas à pas

#### 1. Conversion de vitesse et distance de réaction
* **Conversion de $v_1$ :**
  $$v_1 = \frac{80}{3,6} \approx 22,2\text{ m}\cdot\text{s}^{-1}$$

* **Calcul de $d_r$ :**
  Pendant le temps de réaction $\Delta t = 1,0\text{ s}$, le mouvement est uniforme :
  $$d_r = v_1 \times \Delta t = 22,2 \times 1,0 = 22,2\text{ m}$$
  *Le véhicule parcourt plus de 22 mètres avant même que le conducteur ne commence à freiner.*

#### 2. Calcul de l'énergie cinétique
L'énergie cinétique du véhicule à $80\text{ km}\cdot\text{h}^{-1}$ est :
$$E_c = \frac{1}{2} m v_1^2$$
$$E_c = \frac{1}{2} \times 1200 \times (22,2)^2$$
$$E_c = 600 \times 493,8 \approx 2,96 \times 10^5\text{ J} \quad (\text{ou } 296\text{ kJ})$$

#### 3. Distance de freinage et distance d'arrêt
D'après le théorème de l'énergie cinétique entre le début du freinage (vitesse $v_1$) et l'arrêt complet (vitesse nulle, $E_{c,\text{finale}} = 0$) :
$$\Delta E_c = E_{c,\text{finale}} - E_{c,\text{initiale}} = 0 - E_c = -E_c$$
Le travail de la force de freinage constante $\vec{F}$ sur la distance de freinage $d_f$ est $W(\vec{F}) = -F \times d_f$ (force opposée au mouvement).
En égalisant les deux expressions :
$$-F \times d_f = -E_c \implies F \times d_f = E_c$$
$$d_f = \frac{E_c}{F}$$
A.N. :
$$d_f = \frac{2,96 \times 10^5}{6,0 \times 10^3} \approx 49,3\text{ m}$$

La **distance d'arrêt totale** est la somme des deux distances :
$$d_a = d_r + d_f = 22,2 + 49,3 = 71,5\text{ m}$$

#### 4. Analyse critique et impact de l'excès de vitesse
* **Analyse quantitative :** 
  Si la vitesse augmente de $20\%$, le nouveau facteur multiplicatif de la vitesse est $1,20$. 
  L'énergie cinétique et la distance de freinage (qui lui est proportionnelle) sont fonction de $v^2$. Le nouveau facteur est donc $(1,20)^2 = 1,44$, soit une **augmentation de $44\%$** de l'énergie cinétique et de la distance de freinage.
  
* **Discussion scientifique et sociétale :** 
  Cet exercice met en évidence les limites de la perception humaine face aux lois physiques. Une augmentation de vitesse en apparence modeste (+16 km/h) engendre une augmentation très importante de la distance d'arrêt (qui passe, avec le nouveau calcul, à environ $93\text{ m}$). 
  De plus, ce modèle présente des limites : il ne prend pas en compte l'état de la route (aquaplaning), la fatigue du conducteur (qui augmente $\Delta t$) ou l'échauffement des freins qui peut réduire leur efficacité ($F$). La sécurité routière ne relève donc pas d'une simple équation déterministe, mais d'une gestion des risques intégrant des marges de sécurité indispensables.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
