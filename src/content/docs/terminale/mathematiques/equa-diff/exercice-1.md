---
title: "Exercice 1 : Équations du type $y' = ay + b$"
description: "Application pratique du chapitre Équations différentielles"
---

### 🌐 Contexte & Données scientifiques

L'étude de la décroissance radioactive de certains radionucléides et de leur devenir dans l'environnement nécessite l'utilisation de modèles mathématiques continus. Considérons un bassin aquatique contaminé par un isotope radioactif, par exemple le Césium-137 ($^{137}\text{Cs}$), dont la période radioactive (ou demi-vie) est $T_{1/2} \approx 30,1$ ans.

Soit $Q(t)$ la quantité totale de $^{137}\text{Cs}$ présente dans le bassin à l'instant $t$ (exprimé en années), avec $t \ge 0$. 
Les variations de cette quantité obéissent à deux phénomènes concomitants :
1. **La désintégration naturelle** : proportionnelle à la quantité présente, régie par la constante radioactive $\lambda > 0$, telle que $\lambda = \frac{\ln(2)}{T_{1/2}}$.
2. **Un apport anthropique ou sédimentaire constant** : un flux extérieur constant $S$ (en becquerels par an ou en masse par an) pénètre de façon continue dans le bassin.

Sous l'hypothèse d'un mélange homogène et instantané dans tout le volume d'eau, l'évolution de la quantité $Q(t)$ est modélisée par l'équation différentielle linéaire du premier ordre suivante :

$$Q'(t) = -\lambda Q(t) + S$$

Dans le cadre d'une étude d'impact environnemental, les autorités doivent évaluer la pertinence d'un modèle théorique face aux incertitudes de mesure sur le terrain (marge d'erreur estimée à $\pm 5\%$ sur les flux d'entrée $S$) et analyser la pertinence à long terme de ce type d'équilibre dynamique.

---

### ❓ Énoncé

1. **Résolution générale** : Résoudre l'équation différentielle homogène associée, puis déterminer l'expression générale des solutions de l'équation différentielle $(E) : y' = -\lambda y + S$, où $\lambda$ et $S$ sont des constantes strictement positives.
2. **Condition initiale et modélisation** : À l'instant initial $t = 0$, la quantité mesurée de $^{137}\text{Cs}$ est $Q_0$. Exprimer la solution particulière $Q(t)$ en fonction de $\lambda$, $S$, $Q_0$ et $t$.
3. **Analyse asymptotique et esprit critique** : 
   - Déterminer la limite de $Q(t)$ lorsque $t$ tend vers $+\infty$. Cette limite dépend-elle de la condition initiale $Q_0$ ? Discuter de la pertinence de ce résultat pour la gestion à long terme du site.
   - On pose $S = 100$ Bq/an et $\lambda \approx 0,023$ an$^{-1}$. Si une incertitude de $\pm 5\%$ grève l'estimation du flux $S$, évaluer l'impact maximal de cette incertitude sur la valeur de la limite à l'équilibre.

---

### 💡 Indice de méthode

* **Rappel de cours** : Les solutions de l'équation différentielle $y' = ay + b$ (avec $a \neq 0$) sur $\mathbb{R}$ sont de la forme $y(t) = C e^{at} - \frac{b}{a}$, où $C$ est une constante réelle déterminée par la condition initiale.
* **Esprit critique** : Pour analyser l'impact d'une incertitude sur un paramètre, calculez la dérivée ou étouffez l'encadrement mathématique de la solution stationnaire (limite en $+\infty$) en fonction des bornes de l'intervalle de confiance du paramètre.

---

### 📋 Correction détaillée pas à pas

#### 1. Résolution de l'équation différentielle
L'équation $(E)$ est de la forme $y' = ay + b$ avec $a = -\lambda$ et $b = S$. Comme $\lambda > 0$, on a bien $a \neq 0$.
L'équation homogène associée est $y' = -\lambda y$.
Les solutions de cette équation homogène sur $\mathbb{R}$ sont les fonctions de la forme :
$$y_h(t) = C e^{-\lambda t}, \quad C \in \mathbb{R}$$

Recherchons une solution particulière sous forme de fonction constante $y_p(t) = k$. 
En injectant $y_p$ dans $(E)$, on obtient :
$$0 = -\lambda k + S \implies k = \frac{S}{\lambda}$$

La solution générale de l'équation $(E)$ est donc la somme de la solution homogène et de la solution particulière :
$$Q(t) = C e^{-\lambda t} + \frac{S}{\lambda}, \quad C \in \mathbb{R}$$

#### 2. Détermination de la solution particulière avec condition initiale
À l'instant $t = 0$, on a $Q(0) = Q_0$. Utilisons cette condition pour déterminer la constante $C$ :
$$Q(0) = C e^{0} + \frac{S}{\lambda} = C + \frac{S}{\lambda}$$
En posant $Q(0) = Q_0$, il vient :
$$C + \frac{S}{\lambda} = Q_0 \implies C = Q_0 - \frac{S}{\lambda}$$

La solution particulière modélisant la quantité de $^{137}\text{Cs}$ est donc :
$$Q(t) = \left( Q_0 - \frac{S}{\lambda} \right) e^{-\lambda t} + \frac{S}{\lambda}$$

#### 3. Analyse asymptotique et esprit critique
* **Étude de la limite** :
Calculons la limite de $Q(t)$ lorsque $t \to +\infty$. 
Puisque $\lambda > 0$, on a $\lim_{t \to +\infty} e^{-\lambda t} = 0$. Par conséquent :
$$\lim_{t \to +\infty} Q(t) = \frac{S}{\lambda}$$
* **Discussion** : Cette limite ne dépend effectivement pas de la condition initiale $Q_0$. Mathématiquement, le système présente un **état stationnaire** (ou régime permanent) où la désintégration radioactive compense exactement l'apport exogène $S$. 
* **Limites du modèle** : D'un point de vue critique, ce modèle suppose que les paramètres $S$ et $\lambda$ restent rigoureusement constants sur des échelles de temps séculaires. Or, dans la réalité environnementale, les flux anthropiques fluctuent et les conditions climatiques ou géologiques peuvent modifier le taux de transfert, introduisant des biais que ce modèle déterministe simple ne capture pas.

* **Propagation des incertitudes** :
Le flux $S$ est estimé à $100$ Bq/an avec une incertitude de $\pm 5\%$. 
L'intervalle de confiance pour $S$ est donc $[95 \,;\, 105]$.
La valeur nominale de la limite est :
$$L_{\text{nom}} = \frac{100}{0,023} \approx 4347,8 \text{ Bq}$$
Avec les bornes de l'incertitude :
- Borne inférieure : $L_{\text{min}} = \frac{95}{0,023} \approx 4130,4 \text{ Bq}$
- Borne supérieure : $L_{\text{max}} = \frac{105}{0,023} \approx 4565,2 \text{ Bq}$

On constate que l'incertitude relative sur le paramètre d'entrée ($5\%$) se propage linéairement sur la valeur d'équilibre du système ($\pm 5\%$ également, soit un écart total d'environ $434,8$ Bq). Cette quantification est indispensable pour les décideurs politiques afin d'éviter toute surinterprétation d'une valeur numérique théorique présentée comme absolue.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
