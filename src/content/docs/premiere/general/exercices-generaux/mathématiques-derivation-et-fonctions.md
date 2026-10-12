---
title: "Exercice : Derivation et fonctions"
description: "Démonstration appliquée : Optimisation du coût d'un abonnement de streaming"
---

### 🌐 Contexte

Dans un marché du numérique en pleine expansion, les plateformes de streaming vidéo font face à des défis économiques et éthiques majeurs. Une jeune coopérative audiovisuelle indépendante souhaite lancer son service d'abonnement sans engagement. 

Fixer un tarif trop bas ne permettrait pas de couvrir les coûts d'infrastructure (serveurs, bande passante) et de rémunérer équitablement les créateurs de contenu. À l'inverse, un tarif trop élevé ferait fuir les utilisateurs vers des offres concurrentes ou vers le piratage.

Une étude de marché a permis de modéliser le bénéfice mensuel net $B(x)$ de la plateforme (exprimé en milliers d'euros) en fonction du prix de l'abonnement mensuel $x$ (exprimé en euros). Cette fonction est définie sur l'intervalle $[5\ ; 16]$ par :

$$B(x) = -x^3 + 24x^2 - 117x - 50$$

---

### ❓ Énoncé

1. **Calcul de la fonction dérivée**  
   Justifier que la fonction $B$ est dérivable sur l'intervalle $[5\ ; 16]$, puis déterminer l'expression de sa fonction dérivée $B'(x)$.

2. **Étude des variations**  
   a. Résoudre dans $\mathbb{R}$ l'équation $B'(x) = 0$.  
   b. Étudier le signe de $B'(x)$ sur l'intervalle $[5\ ; 16]$.  
   c. En déduire le tableau de variations complet de la fonction $B$ sur $[5\ ; 16]$ (on fera figurer les images des bornes et des extremums éventuels).

3. **Optimisation économique**  
   Déterminer le prix mensuel de l'abonnement qui assure à la coopérative un bénéfice maximal. Préciser le montant de ce bénéfice en euros.

4. **Analyse citoyenne et prise de décision**  
   Pour favoriser l'accès à la culture des étudiants et des ménages modestes, le conseil d'administration hésite à plafonner le prix de l'abonnement à $10\ €$.  
   Calculer le bénéfice généré à ce tarif, puis commenter l'arbitrage entre maximisation du profit et accessibilité citoyenne.

---

### 💡 Indice

* Pour la question 1, rappelle-toi que la dérivée d'une somme de fonctions est la somme des dérivées : $(u + v)' = u' + v'$, et que $(x^n)' = n x^{n-1}$.
* Pour la question 2, $B'(x)$ est un trinôme du second degré de la forme $ax^2 + bx + c$. Calcule son discriminant $\Delta = b^2 - 4ac$. Souviens-toi de la règle : un trinôme est du signe de $a$ à l'extérieur de ses racines.

---

### 📋 Correction détaillée

#### 1. Calcul de la dérivée $B'(x)$

La fonction $B$ est une fonction polynôme du troisième degré. Par propriété du cours, toute fonction polynôme est dérivable sur $\mathbb{R}$, donc $B$ est dérivable sur l'intervalle $[5\ ; 16]$.

Pour tout réel $x \in [5\ ; 16]$, on applique les règles usuelles de dérivation :
* La dérivée de $-x^3$ est $-3x^2$
* La dérivée de $24x^2$ est $24 \times 2x = 48x$
* La dérivée de $-117x$ est $-117$
* La dérivée de la constante $-50$ est $0$

On obtient ainsi :
$$B'(x) = -3x^2 + 48x - 117$$

---

#### 2. Variations de la fonction $B$

##### a. Résolution de $B'(x) = 0$
L'équation $-3x^2 + 48x - 117 = 0$ est une équation du second degré avec :
$$a = -3, \quad b = 48, \quad c = -117$$

Calculons le discriminant $\Delta$ :
$$\Delta = b^2 - 4ac = 48^2 - 4 \times (-3) \times (-117)$$
$$\Delta = 2\,304 - 1\,404 = 900$$

Comme $\Delta > 0$, l'équation admet deux racines réelles distinctes :
$$x_1 = \frac{-b + \sqrt{\Delta}}{2a} = \frac{-48 + \sqrt{900}}{2 \times (-3)} = \frac{-48 + 30}{-6} = \frac{-18}{-6} = 3$$
$$x_2 = \frac{-b - \sqrt{\Delta}}{2a} = \frac{-48 - \sqrt{900}}{2 \times (-3)} = \frac{-48 - 30}{-6} = \frac{-78}{-6} = 13$$

Les solutions dans $\mathbb{R}$ sont donc $x = 3$ et $x = 13$.

##### b. Signe de $B'(x)$ sur $[5\ ; 16]$
D'après le cours sur le signe du trinôme du second degré, $B'(x)$ est du signe de $a = -3$ (donc négatif) à l'extérieur des racines, et du signe opposé à $a$ (donc positif) entre les racines.

Ici, l'intervalle d'étude est $[5\ ; 16]$ et la racine $x_1 = 3$ est en dehors de cet intervalle ($3 < 5$). On en déduit :
* Pour tout $x \in [5\ ; 13[$, $B'(x) > 0$
* Pour $x = 13$, $B'(x) = 0$
* Pour tout $x \in ]13\ ; 16]$, $B'(x) < 0$

##### c. Tableau de variations
Calculons les images nécessaires :
* En $x = 5$ :  
  $$B(5) = -(5)^3 + 24 \times (5)^2 - 117 \times 5 - 50 = -125 + 600 - 585 - 50 = -160$$
* En $x = 13$ :  
  $$B(13) = -(13)^3 + 24 \times (13)^2 - 117 \times 13 - 50 = -2\,197 + 4\,056 - 1\,521 - 50 = 288$$
* En $x = 16$ :  
  $$B(16) = -(16)^3 + 24 \times (16)^2 - 117 \times 16 - 50 = -4\,096 + 6\,144 - 1\,872 - 50 = 126$$

On résume les résultats dans le tableau suivant :

| $x$ | $5$ | | $13$ | | $16$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $B'(x)$ | | $+$ | $0$ | $-$ | |
| $B(x)$ | $-160$ | $\nearrow$ | $288$ | $\searrow$ | $126$ |

La fonction $B$ est strictement croissante sur $[5\ ; 13]$ et strictement décroissante sur $[13\ ; 16]$.

---

#### 3. Détermination du prix optimal

D'après le tableau de variations, la fonction $B$ atteint son maximum absolu sur $[5\ ; 16]$ en $x = 13$.

* **Prix optimal :** Le tarif mensuel qui maximise le bénéfice est de **$13\ €$**.
* **Bénéfice maximal :** $B(13) = 288$.  
  Puisque le bénéfice est exprimé en milliers d'euros, le bénéfice maximal est de :
  $$288 \times 1\,000 = 288\,000\text{ euros}$$

---

#### 4. Analyse citoyenne et prise de décision

Calculons le bénéfice correspondant à un tarif de $10\ €$ :
$$B(10) = -(10)^3 + 24 \times (10)^2 - 117 \times 10 - 50$$
$$B(10) = -1\,000 + 2\,400 - 1\,170 - 50 = 180$$

Le bénéfice généré pour un abonnement à $10\ €$ est de **$180\,000\ €$**.

**Commentaire :**  
* Fixer le prix à $10\ €$ plutôt qu'à $13\ €$ engendre un manque à gagner de :
  $$288\,000 - 180\,000 = 108\,000\text{ euros}$$
* Cependant, le bénéfice reste largement positif ($180\,000\ €$), ce qui assure la pérennité économique de la plateforme et le financement de nouveaux contenus.
* D'un point de vue citoyen et solidaire, ce choix stratégique permet de rendre la culture accessible à un public plus jeune ou à budget limité, tout en réduisant le recours aux sites illégaux. Il s'agit d'un compromis responsable entre viabilité économique et mission de service d'intérêt général.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
