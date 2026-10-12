---
title: "Exercice 1 : Étude quantitative de la biodiversité locale"
description: "Application pratique du chapitre Biodiversité, état et dynamique"
---

### 🌐 Contexte & Données scientifiques

En écologie, la quantification de la biodiversité est une étape méthodologique complexe mais indispensable pour évaluer l'état de santé d'un écosystème et mesurer l'impact des activités anthropiques. Contrairement à une idée reçue, la biodiversité ne se résume pas au simple dénombrement des espèces présentes (la richesse spécifique), mais intègre aussi l'abondance relative de chacune d'elles.

Pour estimer la taille d'une population animale terrestre mobile sans perturber durablement son milieu, les écologues utilisent fréquemment la méthode de capture-marquage-recapture (CMR), formalisée par l'indice de Lincoln-Petersen. 

Considérons une étude menée dans une ripisylve (forêt riveraine) en bordure de la Loire, visant à estimer l'effectif total d'une population de Tritons palmés (*Lissotriton helveticus*). 

*   **Jour 1 ($t_1$) :** Une première campagne de piégeage non blessant permet de capturer, marquer (par un marquage cutané inoffensif et temporaire) puis relâcher $M$ individus. On pose $M = 120$.
*   **Jour 8 ($t_2$) :** Une seconde campagne de piégeage est réalisée dans les mêmes conditions. On capture un total de $n$ individus, parmi lesquels $k$ portent la marque du premier jour. On relève $n = 85$ et $k = 12$.

L'estimation statistique de la taille totale de la population $N$ repose sur l'hypothèse (modèle) que la proportion d'individus marqués dans le second échantillon ($k/n$) est statistiquement égale à la proportion d'individus marqués dans l'ensemble de la population ($M/N$). 

Mathématiquement, le modèle s'écrit :
$$\frac{k}{n} \approx \frac{M}{N} \implies N \approx \frac{M \times n}{k}$$

Cependant, l'utilisation de ce modèle repose sur des conditions d'application strictes (population fermée, marquage indélébile et n'altérant pas la survie, probabilité de capture identique pour chaque individu) qui ne sont jamais totalement vérifiées dans la nature, introduisant ainsi une incertitude de mesure qu'il convient d'analyser.

---

### ❓ Énoncé

1. **Calcul et modélisation :** En appliquant la formule de Lincoln-Petersen issue du texte, calculez l'estimation de l'effectif total ($N$) de la population de Tritons palmés sur le site d'étude. Arrondissez le résultat à l'unité supérieure.
2. **Analyse critique des hypothèses :** L'une des hypothèses fondamentales du modèle CMR est que le marquage ne modifie en rien le comportement des individus ni leur vulnérabilité à la prédation ou au piégeage. 
   * Expliquez quel biais statistique (surestimation ou sous-estimation de $N$) serait généré si le marquage rendait les tritons plus visibles aux prédateurs entre $t_1$ et $t_2$.
   * Justifiez votre raisonnement en analysant l'impact de ce phénomène sur la valeur de $k$ mesurée lors du jour 2.
3. **Approche comparative et compromis méthodologique :** Pour évaluer la biodiversité végétale du même site, les écologues n'utilisent pas la méthode CMR, mais la méthode des relevés par placettes (quadrats) avec estimation du recouvrement par des indices d'abondance-dominance (comme l'échelle de Braun-Blanquet).
   * Expliquez pourquoi la méthode CMR est inadaptée aux végétaux fixés.
   * Discutez brièvement de la difficulté de définir objectivement des limites spatiales rigoureuses pour un écosystème naturel, soulignant ainsi la limite conceptuelle de la notion de "biodiversité locale".

---

### 💡 Indice de méthode

*   **Question 1 :** Veillez à bien identifier les termes de la formule $N = \frac{M \times n}{k}$ avec les données textuelles ($M = 120$, $n = 85$, $k = 12$). Respectez les règles mathématiques de proportionnalité.
*   **Question 2 :** Raisonnez par l'absurde ou par l'impact direct : si des individus marqués disparaissent prématurément, que devient le nombre $k$ d'individus retrouvés au $t_2$ ? Reportez ensuite cette variation de $k$ dans la formule fractionnaire de $N$.
*   **Question 3 :** Pensez à la mobilité des organismes étudiés (animaux *vs* végétaux) et aux échelles spatiales d'observation (continuité des milieux naturels *vs* discontinuité des découpages humains).

---

### 📋 Correction détaillée pas à pas

#### **1. Calcul de l'effectif de la population ($N$)**
*   **Formule du modèle :**
    $$N = \frac{M \times n}{k}$$
*   **Application numérique :**
    $$N = \frac{120 \times 85}{12}$$
    $$N = \frac{10200}{12}$$
    $$N = 850$$
*   **Conclusion :** L'estimation statistique de la taille de la population de Tritons palmés sur ce site est de $850$ individus. *(Note : s'agissant d'un modèle stochastique, cette valeur est une estimation ponctuelle entachée d'un intervalle de confiance).*

#### **2. Analyse critique des hypothèses et des biais**
*   Si le marquage augmente la vulnérabilité des tritons (par exemple, en les rendant plus repérables par des prédateurs comme des oiseaux ou des couleuvres), la mortalité des individus marqués sera supérieure à celle des individus non marqués entre $t_1$ et $t_2$.
*   Par conséquent, le nombre d'individus marqués recapturés lors du second échantillonnage ($k$) sera anormalement bas ($k$ diminue).
*    математиquement, dans la formule $N = \frac{M \times n}{k}$, $k$ se trouve au dénominateur. Une diminution de la valeur du dénominateur (toutes choses égales par ailleurs) entraîne une **augmentation mathématique de la valeur de $N$**.
*   **Biais induit :** Ce phénomène conduit à une **surestimation** de l'effectif réel de la population.

#### **3. Approche comparative et limites méthodologiques**
*   **Inadéquation de la CMR pour les végétaux :** Les plantes sont des organismes sessiles (fixés). Elles ne se déplacent pas, ce qui rend caduque l'hypothèse de mélange aléatoire des individus indispensable au succès du piégeage à deux temps (recapture). De plus, la notion d'"individu" est parfois difficile à cerner chez les végétaux en raison du clonage (stolons, rhizomes).
*   **Limite conceptuelle de la "biodiversité locale" :** Les écosystèmes naturels ne présentent pas de frontières franches ou étanches ; ils forment des continuités écologiques (écotones). Par conséquent, délimiter une "biodiversité locale" relève d'un choix méthodologique humain (arbitraire spatial) et non d'une discontinuité biologique absolue. Toute mesure quantitative dépend donc de l'échelle spatiale choisie par l'observateur.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
