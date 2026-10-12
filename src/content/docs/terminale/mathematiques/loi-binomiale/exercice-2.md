---
title: "Exercice 2 : Loi forte des grands nombres"
description: "Application pratique du chapitre Lois de probabilité et Loi Binomiale"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du contrôle qualité de la production de composants semi-conducteurs destinés à l'industrie automobile, un équipementier étudie un lot de puces électroniques. Les spécifications techniques exigent un taux de défectuosité inférieur à $5\ 000$ parties par million, soit une proportion maximale de pièces défectueuses $\p = 0,005$ ($0,5\,\%$).

L'analyse exhaustive de la production journalière (plus de $100\ 000$ unités) étant destructive et économiquement non viable, le contrôle qualité repose sur l'inspection d'échantillons aléatoires. On suppose que la production est suffisamment importante pour assimiler les tirages successifs à des tirages successifs avec remise, ce qui permet de modéliser le nombre $X_n$ de pièces défectueuses dans un échantillon de taille $n$ par une **loi binomiale** $\mathcal{B}(n, p)$.

La fréquence observée de pièces défectueuses sur un échantillon de taille $n$ est notée $\bar{X}_n = \frac{X_n}{n}$. L'objectif de cet exercice est d'analyser le comportement de cette variable aléatoire lorsque la taille de l'échantillon $n$ augmente, afin d'illustrer la **loi forte des grands nombres**. Cette loi mathématique formalise la stabilisation de la fréquence observée autour de l'espérance mathématique (la probabilité théorique $p$), tout en posant la question cruciale du compromis entre la précision statistique recherchée et les contraintes industrielles (coût d'échantillonnage, délai d'analyse).

---

### ❓ Énoncé

Soit $X_n$ une variable aléatoire suivant une loi binomiale $\mathcal{B}(n, p)$ avec $p = 0,005$. On définit la fréquence empirique des pièces défectueuses par $F_n = \frac{X_n}{n}$.

1. Exprimer l'espérance $E(F_n)$ et la variance $V(F_n)$ de la fréquence empirique en fonction de $n$ et de $p$. Calculer numériquement l'écart-type de $F_n$ pour un échantillon de taille $n = 1\,000$.
2. À l'aide de l'inégalité de Bienaymé-Tchebychev, déterminer une borne supérieure de la probabilité que la fréquence observée $F_n$ s'écarte de la proportion théorique $p$ d'au moins $0,01$ (soit $1\,\%$) pour un échantillon de taille $n = 1\,000$. Conclure quant à la fiabilité d'un tel échantillon.
3. Énoncer rigoureusement la loi forte des grands nombres appliquée à la suite de variables $(F_n)_{n \ge 1}$. Expliquer pourquoi ce théorème mathématique ne garantit pas qu'un échantillon de taille finie (par exemple $n = 10\,000$) donnera une valeur de $F_n$ strictement égale à $p$, et discuter des limites de ce modèle probabiliste face à des variations de production non stationnaires (usure des machines, dérive thermique).
4. Déterminer, en utilisant l'inégalité de Bienaymé-Tchebychev, la taille minimale de l'échantillon $n$ que l'entreprise doit prélèver pour garantir que la probabilité que $F_n$ s'écarte de $p$ de plus de $0,002$ soit inférieure ou égale à $0,05$ ($5\,\%$ de risque d'erreur). Discuter la faisabilité opérationnelle de ce résultat au regard des coûts industriels.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez les propriétés de linéarité de l'espérance et les formules du cours concernant l'espérance et la variance d'une loi binomiale $\mathcal{B}(n,p)$, en sachant que $F_n = \frac{1}{n}X_n$.
* **Question 2 :** L'inégalité de Bienaymé-Tchebychev s'écrit pour une variable aléatoire $Y$ d'espérance $\mu$ et d'écart-type $\sigma$ : 
  $$P(|Y - \mu| \ge \varepsilon) \le \frac{V(Y)}{\varepsilon^2}$$
* **Question 3 :** Distinguez bien la convergence presque sûre (asymptotique) de la réalité empirique à $n$ fixé, et questionnez l'hypothèse d'indépendance et d'identique distribution (i.i.d.) en milieu industriel réel.
* **Question 4 :** Posez une inéquation d'inconnue $n$ en réutilisant l'inégalité de Bienaymé-Tchebychev avec $\varepsilon = 0,002$ et le majorant $0,05$.

---

### 📋 Correction détaillée pas à pas

#### 1. Espérance, variance et écart-type de la fréquence empirique
Puisque $X_n \sim \mathcal{B}(n, p)$, on sait que :
$$E(X_n) = n \times p \quad \text{et} \quad V(X_n) = n \times p \times (1-p)$$
La fréquence empirique est définie par $F_n = \frac{X_n}{n}$. Par linéarité de l'espérance :
$$E(F_n) = E\left(\frac{X_n}{n}\right) = \frac{1}{n} E(X_n) = \frac{n \times p}{n} = p$$
Pour la variance, en utilisant la propriété $V(aX) = a^2 V(X)$ :
$$V(F_n) = V\left(\frac{X_n}{n}\right) = \frac{1}{n^2} V(X_n) = \frac{n p (1-p)}{n^2} = \frac{p(1-p)}{n}$$
* **Application numérique pour $n = 1\,000$ et $p = 0,005$ :**
  $$V(F_{1000}) = \frac{0,005 \times (1 - 0,005)}{1\,000} = \frac{0,005 \times 0,995}{1\,000} = \frac{0,004\,975}{1\,000} = 4,975 \times 10^{-6}$$
  L'écart-type $\sigma(F_{1000})$ est la racine carrée de la variance :
  $$\sigma(F_{1000}) = \sqrt{4,975 \times 10^{-6}} \approx 0,002\,23$$

#### 2. Utilisation de l'inégalité de Bienaymé-Tchebychev pour $n = 1\,000$
On cherche à évaluer $P(|F_{1000} - p| \ge 0,01)$ avec $\varepsilon = 0,01$.
D'après l'inégalité de Bienaymé-Tchebychev :
$$P(|F_{1000} - E(F_{1000})| \ge \varepsilon) \le \frac{V(F_{1000})}{\varepsilon^2}$$
En remplacant par les valeurs numériques :
$$P(|F_{1000} - 0,005| \ge 0,01) \le \frac{4,975 \times 10^{-6}}{(0,01)^2} = \frac{4,975 \times 10^{-6}}{10^{-4}} = 0,04975$$
Il y a donc au maximum $4,98\,\%$ de chances que la fréquence observée s'écarte de la proportion réelle de plus de $1\,\%$. Ce résultat théorique suggère une incertitude non négligeable pour un échantillon de $1\,000$ pièces, sachant qu'un écart de $1\,\%$ représente le double de la tolérance maximale admise ($0,5\,\%$).

#### 3. Loi forte des grands nombres et limites du modèle
* **Énoncé de la loi forte des grands nombres :** 
  Soit $(X_n)_{n \ge 1}$ une suite de variables aléatoires indépendantes et de même loi, admettant une espérance finie $E(X) = p$. Alors la suite des moyennes empiriques $F_n = \frac{1}{n}\sum_{i=1}^n X_i$ converge **presque sûrement** vers $p$ lorsque $n$ tend vers $+\infty$ :
  $$P\left(\lim_{n \to +\infty} F_n = p\right) = 1$$
* **Analyse critique :** 
  La loi forte est un résultat **asymptotique**. Elle garantit le comportement de la limite lorsque $n$ devient infiniment grand, mais elle ne fournit aucune borne sur l'erreur commise pour un $n$ fini (par exemple $n = 10\,000$). De plus, le modèle mathématique repose sur l'hypothèse forte que $p$ est constant (processus stationnaire). Dans la réalité industrielle, les paramètres de fabrication subissent des dérives (usure des outils de coupe, fluctuations thermiques des machines), ce qui invalide l'hypothèse d'identique distribution des variables au cours du temps.

#### 4. Détermination de la taille minimale de l'échantillon
On cherche $n$ tel que :
$$P(|F_n - p| \ge 0,002) \le 0,05$$
D'après l'inégalité de Bienaymé-Tchebychev :
$$P(|F_n - p| \ge 0,002) \le \frac{V(F_n)}{(0,002)^2} = \frac{\frac{p(1-p)}{n}}{4 \times 10^{-6}} = \frac{0,004\,975}{4 \times 10^{-6} \times n}$$
On souhaite que cette borne supérieure soit inférieure ou égale à $0,05$ :
$$\frac{0,004\,975}{4 \times 10^{-6} \times n} \le 0,05$$
En résolvant cette inéquation pour $n$ :
$$n \ge \frac{0,004\,975}{4 \times 10^{-6} \times 0,05}$$
$$n \ge \frac{0,004\,975}{2 \times 10^{-7}} = 24\,875$$
Il faut donc analyser au minimum **$24\,875$ composants** pour respecter ce cahier des charges statistique. 
* **Compromis technico-économique :** Bien que rigoureux sur le plan statistique, un tel échantillon peut s'avérer absurde ou impossible à mettre en œuvre en pratique si le test est destructif ou très coûteux (chaque test unitaire coûtant du temps et des ressources). L'ingénieur doit donc arbitrer entre la rigueur de la certitude statistique (exiger un $n$ grand) et la faisabilité économique et opérationnelle du contrôle qualité.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
