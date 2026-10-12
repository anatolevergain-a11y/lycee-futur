---
title: "Exercice 1 : Étude de comportement asymptotique"
description: "Application pratique du chapitre Limites et continuité"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la gestion des ressources halieutiques et de la modélisation dynamique des populations, l'étude de la croissance d'une espèce de poissons introduite dans un écosystème fermé nécessite l'utilisation d'outils mathématiques rigoureux. 

Soit $N(t)$ l'effectif d'une population de poissons, exprimé en milliers d'individus, en fonction du temps $t$ exprimé en années ($t \ge 0$). L'évolution de cette population est soumise à des facteurs environnementaux limitants (compétition intraspécifique pour la nourriture, espace vital restreint, prédation). 

Le modèle mathématique retenu, dérivé de l'équation logistique de Verhulst, est défini par la fonction $f$ sur l'intervalle $[0, +\infty[$ :
$$f(t) = \frac{12}{1 + 3e^{-0.5t}}$$

Cependant, les biologistes rappellent que tout modèle théorique comporte des incertitudes de paramétrage (les coefficients $0,5$ et $3$ étant issus d'estimations statistiques comportant une marge d'erreur de $\pm 5\%$) et ne peut intégrer l'ensemble des perturbations stochastiques du milieu naturel (climatiques ou épidémiologiques). L'analyse asymptotique de ce modèle permet néanmoins d'évaluer la viabilité à long terme du système.

---

### ❓ Énoncé

1. **Continuité et état initial :** Démontrer que la fonction $f$ est continue sur $[0, +\infty[$. Calculer la population initiale $f(0)$ et interpréter ce résultat dans le contexte biologique.
2. **Comportement asymptotique (Capacité charge) :** Déterminer la limite de la fonction $f$ lorsque $t$ tend vers $+\infty$. En déduire l'existence d'une asymptote horizontale pour la courbe représentative de $f$ et donner sa signification pour l'écosystème.
3. **Sens de variation :** Calculer la dérivée $f'(t)$ pour tout $t \in [0, +\infty[$. Étudier son signe et dresser le tableau de variations complet de la fonction $f$. Comment ce résultat se traduit-il biologiquement ?
4. **Analyse critique du modèle :** Un gestionnaire de réserve affirme que la population atteindra strictement $11$ milliers d'individus au bout de $5$ ans. À l'aide d'un calcul rigoureux et en tenant compte de l'incertitude de $\pm 5\%$ sur les paramètres du modèle, discutez la recevabilité scientifique de cette prédiction.

---

### 💡 Indice de méthode

* **Pour la question 1 :** Utilisez les théorèmes généraux sur la continuité (composée, quotient, somme de fonctions continues ne s'annulant pas au dénominateur).
* **Pour la question 2 :** Analysez la limite de l'exponentielle $\lim_{t \to +\infty} e^{-0.5t}$, puis appliquez les opérations algébriques sur les limites.
* **Pour la question 3 :** Utilisez la formule de dérivation d'un quotient $\left(\frac{1}{u}\right)' = -\frac{u'}{u^2}$ ou l'expression sous forme de produit.
* **Pour la question 4 :** Calculez $f(5)$ avec la valeur exacte, puis évaluez l'impact d'une variation de $5\%$ sur le paramètre ou la valeur finale pour exercer votre esprit critique face à la modélisation déterministe.

---

### 📋 Correction détaillée pas à pas

#### 1. Continuité et état initial
* **Continuité :** 
Pour tout $t \in [0, +\infty[$, l'expression $-0.5t$ est une fonction affine, donc continue. La fonction exponentielle $x \mapsto e^x$ est continue sur $\mathbb{R}$, par composition, $t \mapsto e^{-0.5t}$ est continue sur $[0, +\infty[$. 
Par opérations algébriques, le dénominateur $g(t) = 1 + 3e^{-0.5t}$ est continu et ne s'annule jamais sur $[0, +\infty[$ (car $e^{-0.5t} > 0$, donc $g(t) \ge 1 > 0$). 
Par conséquent, par quotient, la fonction $f$ est **continue sur $[0, +\infty[$.**

* **Population initiale :**
$$f(0) = \frac{12}{1 + 3e^{0}} = \frac{12}{1 + 3(1)} = \frac{12}{4} = 3$$
**Interprétation :** À la date $t = 0$ (lancement de l'observation), la population est de $3$ milliers d'individus, soit $3000$ poissons.

#### 2. Comportement asymptotique
Étudions la limite de $f(t)$ lorsque $t \to +\infty$ :
* On sait que $\lim_{t \to +\infty} -0.5t = -\infty$.
* Or, $\lim_{X \to -\infty} e^X = 0$, donc par composition : $\lim_{t \to +\infty} e^{-0.5t} = 0$.
* Par produit et somme : $\lim_{t \to +\infty} (1 + 3e^{-0.5t}) = 1 + 3(0) = 1$.
* Enfin, par quotient :
$$\lim_{t \to +\infty} f(t) = \frac{12}{1} = 12$$

**Conséquence graphique et biologique :** 
La droite d'équation $y = 12$ est **asymptote horizontale** à la courbe représentative de $f$ en $+\infty$. 
Biologiquement, cela signifie que malgré la croissance initiale, l'écosystème possède une *capacité de charge* maximale de $12$ milliers d'individus. La population se stabilise asymptotiquement sans dépasser ce seuil en raison des résistances du milieu.

#### 3. Sens de variation
La fonction $f$ est dérivable sur $[0, +\infty[$ comme quotient de fonctions dérivables dont le dénominateur ne s'annule pas.
Posons $f(t) = 12(1 + 3e^{-0.5t})^{-1}$.
En utilisant la formule $(u^n)' = n \cdot u' \cdot u^{n-1}$ :
$$f'(t) = 12 \times (-1) \times (-0.5 \times 3e^{-0.5t}) \times (1 + 3e^{-0.5t})^{-2}$$
$$f'(t) = \frac{12 \times 1,5e^{-0.5t}}{(1 + 3e^{-0.5t})^2} = \frac{18e^{-0.5t}}{(1 + 3e^{-0.5t})^2}$$

* **Étude du signe :**
  - Pour tout $t \in [0, +\infty[$, $e^{-0.5t} > 0$, donc $18e^{-0.5t} > 0$.
  - Pour tout $t \in [0, +\infty[$, $(1 + 3e^{-0.5t})^2 > 0$ (carré d'un nombre non nul).
  
Par conséquent, pour tout $t \in [0, +\infty[$, $f'(t) > 0$.

* **Tableau de variations :**
La fonction $f$ est strictement croissante sur $[0, +\infty[$. Elle part de $3$ et tend vers $12$. 
* **Traduction biologique :** La population croît continûment au cours du temps, son taux de croissance s'amenuisant à mesure qu'elle s'approche de sa capacité limite de $12$ milliers d'individus.

#### 4. Analyse critique du modèle
* **Calcul de $f(5)$ :**
$$f(5) = \frac{12}{1 + 3e^{-0.5 \times 5}} = \frac{12}{1 + 3e^{-2.5}}$$
À l'aide d'une calculatrice, sachant que $e^{-2.5} \approx 0,08208$ :
$$f(5) \approx \frac{12}{1 + 3(0,08208)} = \frac{12}{1 + 0,24624} = \frac{12}{1,24624} \approx 9,63 \text{ milliers d'individus}$$

* **Discussion scientifique :** 
L'affirmation du gestionnaire (qui prédit $11$ milliers d'individus) est mathématiquement fausse selon ce modèle déterministe, puisque $f(5) \approx 9,63$. 
Cependant, l'esprit critique scientifique impose de nuancer ce constat :
1. *Incertitude des paramètres :* Si les coefficients du modèle comportent une incertitude de $\pm 5\%$, la courbe théorique est en réalité un fuseau de probabilités et non une ligne unique.
2. *Limites du modèle :* Le modèle logistique suppose des conditions environnementales strictement constantes (température, absence de prédateurs extérieurs, ressources stables). En milieu naturel, des variations stochastiques invalident l'exactitude à la décimale près de toute prévision à long terme. Le modèle doit donc être perçu comme une **tendance macroscopique** et non comme une vérité absolue.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
