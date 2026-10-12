---
title: "Exercice 2 : Suites arithmético-géométriques et modélisation économique"
description: "Application pratique du chapitre Suites et raisonnement par récurrence"
---

### 🌐 Contexte & Données scientifiques

En sciences économiques et de gestion, la modélisation de l'évolution du capital d'une entreprise ou de la valeur d'un investissement fait fréquemment appel aux suites numériques. Toutefois, les modèles purement linéaires (arithmétiques) ou exponentiels (géométriques) s'avèrent souvent insuffisants pour rendre compte de dynamiques réelles soumises à la fois à un taux de rendement et à des flux extérieurs constants (apports, prélèvements, frais de gestion).

Considérons une entreprise qui place une partie de sa trésorerie sur un fonds d'investissement. 
Soit $u_n$ la valeur de ce placement (exprimée en milliers d'euros) au bout de $n$ années, avec $n \in \mathbb{N}$.

Les observations financières et les termes du contrat permettent d'établir les hypothèses suivantes pour l'horizon de placement considéré :
1. Le capital initial placé l'année $n=0$ est de $u_0 = 100 \text{ k€}$.
2. Chaque année, le capital restant acquiert un taux d'intérêt annuel brut de $5 \text{ \%}$, soit un coefficient multiplicateur de $1{,}05$.
3. En raison de frais de gestion fixes et d'une stratégie de réinvestissement ou de prélèvement, l'entreprise retire chaque année un montant constant de $4 \text{ k€}$ à la fin de chaque période, et ce, indépendamment du rendement.

Ce type de dynamique est modélisé par une suite arithmético-géométrique définie par la relation de récurrence :
$$u_{n+1} = 1{,}05 u_n - 4 \quad \text{pour tout } n \in \mathbb{N}$$

L'objectif de cette étude est d'analyser la viabilité de ce placement à long terme, d'en démontrer les propriétés par récurrence, et d'évaluer les limites inhérentes à ce modèle mathématique face aux incertitudes économiques.

---

### ❓ Énoncé

1. **Calculs préliminaires et observation :**
   Calculer la valeur du placement aux années $n=1$ et $n=2$ (exprimées en milliers d'euros). Ce premier aperçu permet-il d'émettre une conjecture intuitive sur la tendance à long terme du capital ($u_n$ augmente indéfiniment, stagne, ou diminue) ?

2. **Démonstration par récurrence d'un majorant / minorant :**
   À l'aide d'un raisonnement par récurrence, démontrer que pour tout entier $n \in \mathbb{N}$, on a l'inégalité :
   $$u_n > 80$$

3. **Linéarisation de la récurrence par l'introduction d'une suite auxiliaire :**
   Soit $(v_n)_{n \in \mathbb{N}}$ la suite définie pour tout $n \in \mathbb{N}$ par :
   $$v_n = u_n - 80$$
   a. Démontrer que la suite $(v_n)$ est une suite géométrique dont on précisera le premier terme $v_0$ et la raison.
   b. Exprimer $v_n$ puis $u_n$ en fonction de $n$.
   c. En déduire le comportement limite de la suite $(u_n)$ lorsque $n$ tend vers $+\infty$ (limite mathématique).

4. **Analyse critique du modèle économique :**
   En pratique, un taux d'intérêt de $5 \text{ \%}$ n'est jamais garanti sur le long terme en raison de la volatilité des marchés financiers. 
   Si le taux annuel brut passe de $5 \text{ \%}$ à $3 \text{ \%}$ à partir de l'année $n=5$ (les frais fixes restant inchangés à $4 \text{ k€}$), calculer la nouvelle valeur $u_6$. Discuter brièvement de la robustesse du modèle face aux fluctuations exogènes.

---

### 💡 Indice de méthode

* **Pour la question 2 (Récurrence) :** Veillez à bien rédiger les trois étapes fondamentales : l'initialisation (vérifier la propriété pour $n=0$), l'hérédité (supposer la propriété vraie au rang $n$ et la démontrer au rang $n+1$ en utilisant la monotonie de la fonction associée ou les règles sur les inégalités), et enfin la conclusion.
* **Pour la question 3.a :** Calculez $v_{n+1}$ en fonction de $u_{n+1}$, puis remplacez $u_{n+1}$ par son expression en fonction de $u_n$. Enfin, exprimez $u_n$ en fonction de $v_n$ pour faire apparaître $v_n$ dans le membre de droite.
* **Pour la question 4 :** Ne réutilisez pas la formule générale trouvée à la question 3.b, car la relation de récurrence est modifiée à partir du rang $n=5$. Appliquez directement la nouvelle relation de transition sur la valeur $u_5$.

---

### 📋 Correction détaillée pas à pas

#### 1. Calculs préliminaires et observation
* Pour $n=0$, $u_0 = 100$.
* Pour $n=1$ :
  $$u_1 = 1{,}05 u_0 - 4 = 1{,}05 \times 100 - 4 = 105 - 4 = 101 \text{ k€}$$
* Pour $n=2$ :
  $$u_2 = 1{,}05 u_1 - 4 = 1{,}05 \times 101 - 4 = 106{,}05 - 4 = 102{,}05 \text{ k€}$$

**Analyse :** Entre l'année $0$ et l'année $2$, le capital augmente légèrement (de $100$ à $102{,}05 \text{ k€}$). Toutefois, la croissance ralentit ($+1 \text{ k€}$ entre l'an $0$ et l'an $1$, puis $+1{,}05 \text{ k€}$ entre l'an $1$ et l'an $2$). On peut conjecturer que le capital tend vers une valeur seuil ou progresse très lentement, car les intérêts générés ($5 \text{ \%}$ de $100 \text{ k€} = 5 \text{ k€}$) couvrent à peine le prélèvement annuel de $4 \text{ k€}$.

---

#### 2. Démonstration par récurrence que $u_n > 80$ pour tout $n \in \mathbb{N}$
Soit la propriété $\mathcal{P}(n) : "u_n > 80"$. Démontrons par récurrence que $\mathcal{P}(n)$ est vraie pour tout $n \in \mathbb{N}$.

* **Initialisation :** 
  Pour $n=0$, on a $u_0 = 100$. 
  Comme $100 > 80$, la proposition $\mathcal{P}(0)$ est vraie.

* **Hérédité :** 
  Soit $ fixé un entier $n \in \mathbb{N}$. Supposons que $\mathcal{P}(n)$ est vraie, c'est-à-dire que $u_n > 80$ (hypothèse de récurrence). Démontrons que $\mathcal{P}(n+1)$ est vraie, soit $u_{n+1} > 80$.
  
  Par hypothèse de récurrence :
  $$u_n > 80$$
  Multiplions les deux membres par $1{,}05$ (nombre strictement positif, l'ordre est conservé) :
  $$1{,}05 u_n > 1{,}05 \times 80$$
  $$1{,}05 u_n > 84$$
  Soustrayons $4$ aux deux membres :
  $$1{,}05 u_n - 4 > 84 - 4$$
  $$u_{n+1} > 80$$
  
  La proposition $\mathcal{P}(n+1)$ est donc vraie.

* **Conclusion :** 
  Par le principe de récurrence, $\mathcal{P}(n)$ est vraie pour tout $n \in \mathbb{N}$, ce qui signifie que :
  $$\forall n \in \mathbb{N}, \quad u_n > 80$$

---

#### 3. Étude de la suite auxiliaire $(v_n)$

* **a. Nature de la suite $(v_n)$ :**
  exprimons $v_{n+1}$ en fonction de $v_n$ pour tout $n \in \mathbb{N}$ :
  $$v_{n+1} = u_{n+1} - 80$$
  Or, $u_{n+1} = 1{,}05 u_n - 4$. Donc :
  $$v_{n+1} = (1{,}05 u_n - 4) - 80 = 1{,}05 u_n - 84$$
  exprimons $u_n$ en fonction de $v_n$ sachant que $v_n = u_n - 80 \iff u_n = v_n + 80$ :
  $$v_{n+1} = 1{,}05 (v_n + 80) - 84$$
  $$v_{n+1} = 1{,}05 v_n + 1{,}05 \times 80 - 84$$
  Or, $1{,}05 \times 80 = 84$. Ainsi :
  $$v_{n+1} = 1{,}05 v_n + 84 - 84 = 1{,}05 v_n$$
  
  La suite $(v_n)$ est donc une **suite géométrique de raison $q = 1{,}05$**.
  Son premier terme est :
  $$v_0 = u_0 - 80 = 100 - 80 = 20 \text{ k€}$$

* **b. Expression de $v_n$ puis de $u_n$ en fonction de $n$ :**
  Puisque $(v_n)$ est géométrique, pour tout $n \in \mathbb{N}$ :
  $$v_n = v_0 \times q^n = 20 \times (1{,}05)^n$$
  
  Comme $u_n = v_n + 80$, on en déduit l'expression explicite de $u_n$ :
  $$u_n = 20 \times (1{,}05)^n + 80 \quad \text{pour tout } n \in \mathbb{N}$$

* **c. Comportement limite de la suite $(u_n)$ :**
  Étudions la limite de $(1{,}05)^n$ lorsque $n$ tend vers $+\infty$.
  Puisque la raison $q = 1{,}05 > 1$, on a :
  $$\lim_{n \to +\infty} (1{,}05)^n = +\infty$$
  Par opérations sur les limites (produit par $20$ puis ajout de $80$) :
  $$\lim_{n \to +\infty} u_n = +\infty$$
  
  **Interprétation économique :** À long terme, sous l'hypothèse d'un taux constant de $5 \text{ \%}$, les intérêts générés dépassent largement le prélèvement annuel fixe de $4 \text{ k€}$. Le capital croît donc indéfiniment de manière exponentielle.

---

#### 4. Analyse critique du modèle économique (Changement de régime)

* Supposons que le taux d'intérêt brut chute à $3 \text{ \%}$ (coefficient multiplicateur $1{,}03$) à partir de l'année $n=5$.
* Calculons d'abord la valeur du capital à l'année $n=5$ avec le modèle initial :
  $$u_5 = 20 \times (1{,}05)^5 + 80$$
  En effectuant l'application numérique :
  $$(1{,}05)^5 \approx 1{,}27628$$
  $$u_5 \approx 20 \times 1{,}27628 + 80 \approx 25{,}53 + 80 = 105{,}53 \text{ k€}$$
* Appliquons ensuite la nouvelle relation de récurrence pour calculer $u_6$ :
  $$u_6 = 1{,}03 u_5 - 4$$
  $$u_6 = 1{,}03 \times 105{,}53 - 4 \approx 108{,}696 - 4 = 104{,}696 \text{ k€}$$

**Discussion critique :** 
On observe qu'entre l'année $5$ et l'année $6$, malgré un apport en capital plus élevé, la valeur du placement diminue (elle passe de $105{,}53 \text{ k€}$ à environ $104{,}70 \text{ k€}$). 
Ce cas d'étude met en lumière la **limite des modèles déterministes à paramètres constants**. En économie, les taux de rendement sont aléatoires. Une baisse durable du taux d'intérêt (ici $3 \text{ \%}$ au lieu de $5 \text{ \%}$) génère des intérêts annuels de $105{,}53 \times 0{,}03 \approx 3{,}17 \text{ k€}$, ce qui devient inférieur au prélèvement de $4 \text{ k€}$. Le modèle mathématique montre alors que le capital commence à se désaccumuler, illustrant la fragilité des stratégies financières face aux chocs exogènes.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
