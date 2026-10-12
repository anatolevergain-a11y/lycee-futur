---
title: "Cours : Biodiversité, état et dynamique"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

La **biodiversité** (contraction de *biodiversité* ou diversité biologique) désigne la variété de tous les êtres vivants sur Terre. Elle ne se limite pas au nombre d'espèces, mais s'apprécie à trois emboîtements d'échelles indissociables :

1. **La diversité des écosystèmes (macro-échelle) :** 
   Elle correspond à la variété des milieux naturels présents sur la planète (forêts, récifs coralliens, déserts, tourbières, etc.) ainsi qu'aux interactions complexes qui s'y jouent entre les êtres vivants (biocénose) et entre ces derniers et leur environnement physico-chimique (biotope).

2. **La diversité spécifique (échelle intermédiaire) :** 
   Elle désigne la richesse en **espèces** différentes au sein d'un milieu ou de la biosphère. Une espèce se définit généralement selon le concept biologique de l'espèce de Ernst Mayr : un ensemble d'individus interféconds dont la descendance est elle-même fertile, et isolés reproductivement d'autres groupes.

3. **La diversité génétique (micro-échelle) :** 
   Elle correspond à la variété des **allèles** (versions d'un même gène) au sein d'une même population ou d'une même espèce. C'est le support fondamental de l'adaptation évolutive.

---
**Dynamique de la biodiversité :**
La biodiversité n'est pas un état figé, c'est une dynamique temporelle et spatiale. Elle résulte d'un équilibre permanent entre :
* L'**apparition de la diversité** par le jeu de la spéciation (mutation, sélection naturelle, dérive génétique).
* La **disparition de la diversité** par les extinctions (naturelles ou anthropiques).

Au cours des temps géologiques, la Terre a connu cinq crises majeures d'extinction de masse, suivies de phases de diversification. Actuellement, l'analyse scientifique documente une érosion rapide de la biodiversité imputable aux activités humaines, qualifiée par certains biologistes de "sixième extinction de masse".

---

## 📐 2. Formules et Propriétés fondamentales

Pour quantifier et étudier la biodiversité, les écologues utilisent des indices mathématiques rigoureux.

### A. Mesure de la diversité spécifique : L'indice de Shannon ($H'$)
L'indice de Shannon permet de mesurer la diversité spécifique d'un peuplement en tenant compte à la fois de la **richesse spécifique** (nombre d'espèces) et de l'**équitabilité** (répartition des abondances entre ces espèces).

$$H' = -\sum_{i=1}^{S} p_i \log_2(p_i)$$

* Où :
  * $S$ est la richesse spécifique (nombre total d'espèces observées).
  * $p_i$ est la proportion relative de l'espèce $i$ par rapport au nombre total d'individus ($N$), soit $p_i = \frac{n_i}{N}$.
  * $\log_2$ est le logarithme en base 2 (l'unité est le **bit**).

* **Propriété :** 
  * $H'$ est minimal ($H' = 0$) lorsqu'il n'y a qu'une seule espèce ($S=1$).
  * $H'$ est maximal ($H'_{max} = \log_2(S)$) lorsque toutes les espèces ont exactement le même nombre d'individus (équitabilité maximale).

### B. Équitabilité de Piélou ($E$)
L'équitabilité permet de normaliser l'indice de Shannon pour comparer des peuplements de richesses différentes.

$$E = \frac{H'}{H'_{max}} = \frac{H'}{\log_2(S)}$$

* $E$ varie entre $0$ et $1$. 
* $E \to 1$ : les espèces ont des effectifs équivalents.
* $E \to 0$ : le peuplement est dominé par un très petit nombre d'espèces.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On étudie deux parcelles forestières $A$ et $B$ de même superficie. Chacune contient un total de $N = 100$ arbres, répartis en différentes espèces.

* **Parcelle A :** 4 espèces différentes ($S = 4$), avec les effectifs suivants :
  * Espèce 1 : 85 individus
  * Espèce 2 : 5 individus
  * Espèce 3 : 5 individus
  * Espèce 4 : 5 individus

* **Parcelle B :** 4 espèces différentes ($S = 4$), avec les effectifs suivants :
  * Espèce 1 : 25 individus
  * Espèce 2 : 25 individus
  * Espèce 3 : 25 individus
  * Espèce 4 : 25 individus

Calculez l'indice de Shannon ($H'$) pour la parcelle A et concluez sur la structure de ces deux biodiversités.

**Résolution :**

1. **Calcul pour la parcelle A :**
   * $p_1 = \frac{85}{100} = 0{,}85 \implies p_1 \log_2(0{,}85) \approx 0{,}85 \times (-0{,}234) = -0{,}199$
   * $p_2 = p_3 = p_4 = \frac{5}{100} = 0{,}05 \implies p_i \log_2(0{,}05) = 0{,}05 \times (-4{,}322) = -0{,}216$ (pour chacune des 3 espèces, soit $-0{,}216 \times 3 = -0{,}648$)

   Application de la formule :
   $$H'_A = - [(-0{,}199) + (-0{,}648)] = 0{,}847 \text{ bits}$$

2. **Calcul pour la parcelle B (cas d'équiprépartition) :**
   * $p_1 = p_2 = p_3 = p_4 = \frac{25}{100} = 0{,}25$
   * $H'_B = - \sum_{i=1}^{4} 0{,}25 \log_2(0{,}25) = - 4 \times (0{,}25 \times (-2)) = - 4 \times (-0{,}5) = 2{,}00 \text{ bits}$$
   *(On remarque que $H'_{max} = \log_2(4) = 2$ bits, donc $E_B = 1$).*

**Conclusion :**
Bien que les deux parcelles présentent la même **richesse spécifique** ($S = 4$), la parcelle B possède un indice de Shannon nettement supérieur ($2{,}00$ contre $0{,}847$). La parcelle B présente une diversité bien plus équilibrée, tandis que la parcelle A est ultra-dominée par l'espèce 1. Cela démontre la nécessité de coupler richesse et équitabilité pour évaluer l'état d'un écosystème.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

1. **Confusion entre les niveaux de la biodiversité :**
   * *Piège :* Confondre diversité génétique et diversité spécifique. Dire qu'"un écosystème a une forte biodiversité génétique" est un abus de langage. La diversité génétique s'applique à une *espèce* ou une *population* (variations d'allèles), tandis que la diversité spécifique s'applique à un *peuplement* ou un *écosystème*.
   * *Conseil :* Ciblez précisément l'échelle spatiale ou biologique lorsque vous rédigez votre copie (moléculaire/individuelle pour la génétique, spécifique pour l'espèce, écosystémique pour les milieux).

2. **Croire que la biodiversité est statique :**
   * *Piège :* Penser qu'un "bon" écosystème est un écosystème qui ne change pas. 
   * *Conseil :* Rappelez toujours que la biodiversité est en perpétuelle **dynamique**. Les successions écologiques (ex: reconquête végétale après un incendie) montrent que les peuplements évoluent naturellement au cours du temps.

3. **Assimiler "richesse spécifique" et "biodiversité globale" :**
   * *Piège :* Compter uniquement le nombre d'espèces pour évaluer la santé d'un milieu. Une forêt abritant 10 espèces dont 99 % des arbres appartiennent à une seule espèce est beaucoup moins résiliente qu'une forêt où ces 10 espèces sont équitablement réparties. Utilisez l'indice de Shannon dans vos analyses si les données le permettent.

4. **Erreurs méthodologiques en écologie évolutive :**
   * *Piège :* Utiliser un vocabulaire téléologique (ex: "l'animal s'adapte *pour* survivre"). 
   * *Conseil :* Restez rigoureux : les mutations génétiques sont aléatoires et antérieures à la sélection. Ce sont les pressions de sélection de l'environnement qui filtrent les individus porteurs d'allèles conférant un avantage reproductif dans les conditions données.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
