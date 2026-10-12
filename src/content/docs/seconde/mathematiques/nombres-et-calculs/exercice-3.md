---
title: "Exercice 3 : Analyse de marges d'incertitude dans les mesures"
description: "Application pratique du chapitre Nombres et calculs"
---

### 🌐 Contexte & Données scientifiques

En physique-chimie et dans l'industrie, toute mesure issue d'un instrument est entachée d'une incertitude. Cette incertitude provient des limites de résolution de l'instrument, des conditions environnementales ou de la méthode utilisée. 

Considérons le contrôle qualité de la production de pièces cylindriques destinées à l'industrie aérospatiale. Un atelier produit des axes en alliage de titane dont le diamètre nominal théorique doit être de $d_0 = 12,00\text{ mm}$. 

Pour valider la conformité d'un lot, un opérateur utilise un pied à coulisse numérique dont la précision constructeur annonce une tolérance absolue de $\Delta d = \pm 0,05\text{ mm}$. Ainsi, pour une valeur mesurée $d$, la valeur réelle se trouve nécessairement dans l'intervalle d'incertitude $[d - \Delta d\,;\,d + \Delta d]$.

Cependant, un compromis économique et technique s'impose : resserrer la marge d'incertitude exige des instruments de mesure optiques ou laser de laboratoire (beaucoup plus coûteux et lents), tandis qu'élargir cette marge augmente le risque de défaillance mécanique des pièces assemblées.

---

### ❓ Énoncé

1. **Modélisation par un intervalle :** 
   Un opérateur prélève un axe au hasard et relève une mesure de $d = 11,97\text{ mm}$. 
   Exprimez l'ensemble des valeurs possibles du diamètre réel de cet axe sous la forme d'un encadrement, puis sous la forme d'un intervalle de $\mathbb{R}$.

2. **Propice au contrôle de conformité :** 
   Le cahier des charges impose que le diamètre réel $D$ d'un axe respecte l'exigence stricte : 
   $$11,92\text{ mm} \leqslant D \leqslant 12,08\text{ mm}$$
   Si un axe présente une mesure brute $d = 12,04\text{ mm}$ avec la même incertitude de $\pm 0,05\text{ mm}$, peut-on garantir mathématiquement sa conformité au regard des limites de l'intervalle de confiance ? Justifiez à l'aide des inéquations.

3. **Approche relative et esprit critique :**
   Calculez l'incertitude relative (exprimée en pourcentage) associée à la mesure de l'axe de la question 1, définie par le rapport :
   $$\text{Incertitude relative} = \frac{\Delta d}{d} \times 100$$
   Discutez de l'impact de la valeur mesurée $d$ sur cette incertitude relative, et analysez la limite de ce modèle si l'on cherche à valider des pièces de haute précision.

---

### 💡 Indice de méthode

* **Question 1 :** Rappelez-vous qu'un encadrement de type $a - r \leqslant x \leqslant a + r$ se traduit par l'intervalle $[a - r\,;\,a + r]$.
* **Question 2 :** Pour évaluer la conformité de manière incertaine, déterminez l'intervalle complet des valeurs réelles possibles pour cette mesure, puis comparez cet intervalle aux exigences du cahier des charges.
* **Question 3 :** Veillez à bien substituer les valeurs numériques et à arrondir le résultat final de manière cohérente avec la précision des données d'énoncé.

---

### 📋 Correction détaillée pas à pas

1. **Modélisation de l'intervalle :**
   * *Données :* La mesure brute est $d = 11,97\text{ mm}$ et l'incertitude absolue est $\Delta d = 0,05\text{ mm}$.
   * *Calcul des bornes :*
     * Borne inférieure : $11,97 - 0,05 = 11,92\text{ mm}$
     * Borne supérieure : $11,97 + 0,05 = 12,02\text{ mm}$
   * *Encadrement :* $11,92 \leqslant d_{\text{réel}} \leqslant 12,02$
   * *Intervalle :* $d_{\text{réel}} \in [11,92\,;\,12,02]$

2. **Analyse de la conformité :**
   * *Mesure et incertitude :* Pour $d = 12,04\text{ mm}$, l'intervalle des valeurs réelles possibles est :
     $$[12,04 - 0,05\,;\,12,04 + 0,05] = [11,99\,;\,12,09]$$
   * *Comparaison au cahier des charges :* L'exigence impose que $D \in [11,92\,;\,12,08]$. 
   * *Conclusion critique :* La borne supérieure de notre intervalle de mesure est $12,09\text{ mm}$, ce qui est strictement supérieur à la limite maximale tolérée de $12,08\text{ mm}$. Par conséquent, **on ne peut pas garantir mathématiquement la conformité** de cette pièce : elle fait partie d'une zone d'incertitude où la pièce *peut* être hors tolérance. Dans l'industrie, cette pièce sera généralement rejetée ou soumise à une mesure de second niveau (principe de précaution).

3. **Calcul de l'incertitude relative et analyse :**
   * *Application numérique :* Pour $d = 11,97\text{ mm}$ et $\Delta d = 0,05\text{ mm}$ :
     $$\text{Incertitude relative} = \frac{0,05}{11,97} \times 100 \approx 0,4177\%$$
     Soit environ $0,42\%$.
   * *Analyse critique :* L'incertitude relative dépend directement de la valeur mesurée $d$ (puisque $\Delta d$ est constant pour un instrument donné). Plus la dimension mesurée est petite, plus l'incertitude relative est grande, ce qui fragilise la fiabilité de la mesure. 
   * *Limites du modèle :* Si l'on cherchait à contrôler des micro-composants (par exemple de l'ordre du micromètre), une incertitude instrumentale fixe rendrait ce type d'instrument totalement caduc, imposant un changement de paradigme technologique (et donc des coûts de production plus élevés).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
