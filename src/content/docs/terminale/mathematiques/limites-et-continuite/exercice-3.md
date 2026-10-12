---
title: "Exercice 3 : Modélisation de saturation de systèmes"
description: "Application pratique du chapitre Limites et continuité"
---

### 🌐 Contexte & Données scientifiques

En dynamique des populations et en biochimie, l'évolution de certains systèmes contraints par des ressources limitées ne suit pas une croissance exponentielle indéfinie. Le modèle de Verhulst (ou croissance logistique), introduit au XIXe siècle, ainsi que la cinétique enzymatique de Michaelis-Menten, traduisent une saturation progressive du système. 

Considérons une population microbienne (ou la vitesse d'une réaction enzymatique) dont l'évolution est modélisée par la fonction $f$, définie sur $[0, +\infty[$ par :
$$f(t) = \frac{K \cdot f_0 \cdot e^{rt}}{K + f_0(e^{rt} - 1)}$$

Où :
- $t$ représente le temps (en heures).
- $f(t)$ est la mesure de la biomasse (en grammes).
- $f_0 = f(0) = 10\text{ g}$ est la biomasse initiale mesurée à $t = 0$.
- $r = 0,2\text{ h}^{-1}$ est le taux intrinsèque de croissance, estimé dans des conditions optimales en laboratoire (avec une incertitude de mesure évaluée à $\pm 5\%$).
- $K = 500\text{ g}$ représente la capacité de charge du milieu (saturation), c'est-à-dire la limite structurelle que le système ne peut dépasser en raison de l'épuisement des nutriments et de l'accumulation toxique des déchets métaboliques.

En contrepartie, ce modèle mathématique repose sur l'hypothèse d'un milieu homogène et d'une température constante, ce qui constitue une idéalisation. L'analyse asymptotique de ce modèle permet d'évaluer la pertinence de la saturation face aux contraintes énergétiques du système.

---

### ❓ Énoncé

1. **Continuité et validité du modèle :** Démontrer que pour tout $t \in [0, +\0[$ et compte tenu des valeurs de $K$ et $f_0$, le dénominateur de la fonction $f(t)$ ne s'annule jamais. En déduire que la fonction $f$ est continue sur $[0, +\infty[$.
2. **Analyse de la saturation (Limite à l'infini) :** Déterminer mathématiquement la limite de la fonction $f lorsque $t$ tend vers $+\infty$. Interpréter ce résultat de manière critique au regard de la notion de capacité de charge $K$ et des limites biologiques du modèle.
3. **Étude de variation et seuil critique :** Calculer la dérivée $f'(t)$ pour tout $t \in [0, +\infty[$. Étudier le sens de variation de la fonction $f$ et déterminer à quel instant $t_i$ le taux de croissance de la biomasse est maximal (point d'inflexion du modèle).
4. **Esprit critique et compromis coût/bénéfice :** En biotechnologie industrielle, maintenir un réacteur biologique à proximité immédiate de sa capacité de charge $K$ engendre des coûts énergétiques disproportionnés (agitation, oxygénation) et un risque accru de contamination pour un gain de biomasse marginal. Déterminer par le calcul l'instant $t_{90}$ où le système atteint $90\%$ de sa capacité de charge $K$. Discuter de l'intérêt opérationnel d'arrêter le cycle de production à cet instant plutôt que de tendre asymptotiquement vers $K$.

---

### 💡 Indice de méthode

- **Question 1 :** Étudiez le signe de $e^{rt} - 1$ pour $t \geq 0$ et montrez que le dénominateur reste strictement supérieur à une constante strictement positive. Utilisez ensuite les théorèmes généraux sur la continuité des fonctions composées, quotients et exponentielles.
- **Question 2 :** Pour lever l'indétermination liée aux exponentielles, factorisez le numérateur et le dénominateur par $e^{rt}$, puis simplifiez l'expression avant de passer à la limite.
- **Question 3 :** Exprimez $f(t)$ sous une forme plus simple, par exemple $f(t) = \frac{K}{1 + \left(\frac{K-f_0}{f_0}\right)e^{-rt}}$, afin de faciliter le calcul de la dérivée première et de l'étude de son signe.
- **Question 4 :** Résolvez l'équation $f(t) = 0{,}9K$ en utilisant la fonction logarithme népérien $\ln$. Pour l'argument critique, mettez en balance la loi des rendements décroissants et l'asymptote horizontale.

---

### 📋 Correction détaillée pas à pas

#### 1. Continuité et validité du modèle
Soit le dénominateur $D(t) = K + f_0(e^{rt} - 1)$. 
Puisque $t \in [0, +\infty[$ et que le taux de croissance $r = 0{,}2 > 0$, la fonction exponentielle est strictement croissante. 
Pour $t \geq 0$, on a :
$$t \geq 0 \implies e^{rt} \geq e^0 = 1 \implies e^{rt} - 1 \geq 0$$
Les paramètres initiaux étant strictement positifs ($K = 500$ et $f_0 = 10$), on en déduit que :
$$D(t) \geq K + f_0(0) = K = 500 > 0$$
Le dénominateur ne s'annule jamais sur $[0, +\infty[$. 
La fonction $f$ est définie comme le quotient d'une fonction exponentielle continue par une fonction affine d'une exponentielle ne s'annulant pas. Par application des théorèmes généraux sur les opérations et la composition des fonctions continues, $f$ est **continue sur $[0, +\infty[$**.

#### 2. Analyse de la saturation (Limite à l'infini)
Exprimons $f(t)$ en factorisant par $e^{rt}$ au numérateur et au dénominateur pour lever l'indétermination du type $\left[\frac{\infty}{\infty}\right]$ :
$$f(t) = \frac{K \cdot f_0 \cdot e^{rt}}{e^{rt}\left(K \cdot e^{-rt} + f_0(1 - e^{-rt})\right)} = \frac{K \cdot f_0}{K \cdot e^{-rt} + f_0(1 - e^{-rt})}$$
Lorsque $t$ tend vers $+\infty$ :
- $\lim_{t \to +\infty} e^{-rt} = 0$ (car $r > 0$).
Par passage à la limite :
$$\lim_{t \to +\infty} f(t) = \frac{K \cdot f_0}{0 + f_0(1 - 0)} = \frac{K \cdot f_0}{f_0} = K$$
**Interprétation critique :** Mathématiquement, la courbe représentative de $f$ admet une asymptote horizontale d'équation $y = K$ en $+\infty$. Biologiquement, cela signifie que le système sature : la biomasse tend vers la capacité maximale du milieu $K = 500\text{ g}$. Cependant, ce modèle suppose implicitement des conditions environnementales stationnaires à l'infini, ce qui est une idéalisation physique irréalisable (vieillissement du milieu, mutations).

#### 3. Étude de variation et seuil critique
Pour simplifier les dérivations, réécrivons $f(t)$ sous la forme :
$$f(t) = \frac{K}{1 + A \cdot e^{-rt}} \quad \text{avec} \quad A = \frac{K - f_0}{f_0} = \frac{500 - 10}{10} = 49$$
La fonction est de la forme $\frac{K}{u(t)}$ avec $u(t) = 1 + A e^{-rt}$. Sa dérivée est :
$$f'(t) = -K \cdot \frac{-r A e^{-rt}}{(1 + A e^{-rt})^2} = \frac{r K A e^{-rt}}{(1 + A e^{-rt})^2}$$
Puisque $r > 0$, $K > 0$, $A > 0$ et que l'exponentielle est strictement positive, **$f'(t) > 0$ pour tout $t \in [0, +\infty[$**. La fonction $f$ est strictement croissante.

*Recherche du point d'inflexion ($t_i$) :* Le taux de croissance de la biomasse est maximal là où $f'(t)$ atteint son maximum, ce qui correspond à l'annulation de la dérivée seconde $f''(t)$ (changement de concavité, le système passe d'une croissance accélérée à une croissance ralentie). 
En résolvant $f'(t) = \frac{rK}{A} e^{rt} \dots$ ou par symétrie de la fonction logistique par rapport à sa valeur médiane $\frac{K}{2}$ :
$$f(t_i) = \frac{K}{2} = 250\text{ g}$$
$$\frac{500}{1 + 49 e^{-rt_i}} = 250 \implies 1 + 49 e^{-rt_i} = 2 \implies e^{-rt_i} = \frac{1}{49}$$
En appliquant le logarithme népérien :
$$-rt_i = \ln\left(\frac{1}{49}\right) = -\ln(49) \implies t_i = \frac{\ln(49)}{r} = \frac{2 \ln(7)}{0{,}2} = 10 \ln(7) \approx 19{,}46\text{ heures}$$

#### 4. Esprit critique et compromis coût/bénéfice
Recherchons l'instant $t_{90}$ tel que $f(t_{90}) = 0{,}9 \times K = 450\text{ g}$ :
$$\frac{500}{1 + 49 e^{-rt_{90}}} = 450 \implies 1 + 49 e^{-rt_{90}} = \frac{500}{450} = \frac{10}{9}$$
$$49 e^{-rt_{90}} = \frac{10}{9} - 1 = \frac{1}{9} \implies e^{-rt_{90}} = \frac{1}{441}$$
En passant au logarithme népérien :
$$-rt_{90} = \ln\left(\frac{1}{441}\right) = -\ln(441) \implies t_{90} = \frac{\ln(441)}{r} = \frac{\ln(441)}{0{,}2} = 5 \ln(441) \approx 30{,}94\text{ heures}$$

**Discussion critique :**
Atteindre $90\%$ de la capacité de charge demande environ $30{,}94\text{ heures}$. Pour combler les $10\%$ restants et tendre asymptotiquement vers $K$, le système nécessiterait un temps théoriquement infini (et en pratique, une augmentation exponentielle des coûts énergétiques pour oxygéner et brasser un milieu hautement dense, s'exposant en outre à un risque de pollution par les métabolites secondaires). 
D'un point de vue technologique et économique, **l'optimisation du rendement impose d'interrompre le processus dès l'atteinte de $t_{90}$** (ou peu après), illustrant concrètement l'application des limites de suites et de fonctions à la prise de décision industrielle.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
