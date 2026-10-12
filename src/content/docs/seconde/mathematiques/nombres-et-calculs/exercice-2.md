---
title: "Exercice 2 : Modélisation financière et pouvoir d'achat"
description: "Application pratique du chapitre Nombres et calculs"
---

### 🌐 Contexte & Données scientifiques

En science économique, l'analyse de l'évolution du pouvoir d'achat repose sur la distinction fondamentale entre la **valeur nominale** (exprimée dans la monnaie courante d'une année donnée) et la **valeur réelle** (corrigée des variations du niveau général des prix, c'est-à-dire de l'inflation).

Pour modéliser l'évolution temporelle des prix, l'Institut National de la Statistique et des Études Économiques (INSEE) utilise l'Indice des Prix à la Consommation (IPC). Soit $P_0$ le niveau des prix à une année de référence $t_0$ (où l'indice vaut 100) et $P_n$ le niveau des prix à l'année $t_n$. 

Soit $W_n$ le salaire nominal (net d'impôts, avant correction) d'un ménage à l'année $t_n$. Le pouvoir d'achat de ce salaire, exprimé en euros constants de l'année de référence $t_0$, se calcule par la relation :

$$W_{\text{réel}} = W_n \times \frac{100}{\text{IPC}_n}$$

Considérons un ménage français dont le salaire net mensuel nominal est passé de $W_0 = 1\,800\text{ \euro}$ en 2010 ($t_0 = 2010$, $\text{IPC}_{2010} = 100$) à $W_{2023} = 2\,150\text{ \euro}$ en 2023. Selon les séries chronologiques de l'INSEE, l'Indice des Prix à la Consommation s'établit à $\text{IPC}_{2023} = 124,5$ en 2023 (base 100 en 2010).

Toutefois, l'utilisation d'un indice agrégé comme l'IPC présente des limites méthodologiques : il reflète un « panier moyen » de consommation qui ne coïncide pas nécessairement avec la structure de dépenses spécifique d'un ménage donné (par exemple, la pondération des dépenses contraintes comme le logement et l'énergie varie selon les déciles de revenus).

---

### ❓ Énoncé

1. **Calcul d'évolution nominale et réelle :** 
   Déterminer le taux d'évolution global du salaire nominal entre 2010 et 2023. En déduire, à l'aide de la formule du pouvoir d'achat, le salaire réel du ménage en 2023 (exprimé en euros constants de 2010). Arrondir au centime d'euro près.

2. **Analyse critique de la variation :** 
   Comparer le taux d'évolution du salaire nominal et le taux d'inflation mesuré par l'IPC entre 2010 et 2023. Le pouvoir d'achat de ce ménage a-t-il augmenté, stagné ou diminué sur cette période ? Justifier par le calcul d'un taux d'évolution.

3. **Modélisation prospective et limites :** 
   Un modèle linéaire simple postule que le salaire nominal augmentera chaque année de $1,5\%$ par rapport à l'année précédente, tandis que l'inflation annuelle moyenne est estimée de manière hypothétique à $2\%$ par an. 
   Exprimer le salaire nominal $W_n$ et l'indice des prix $\text{IPC}_n$ en fonction du nombre d'années $n$ écoulées depuis 2023. Discuter brièvement de la pertinence de ce modèle à long terme (notamment la stabilité des hypothèses).

---

### 💡 Indice de méthode

* **Taux d'évolution :** Pour calculer le taux d'évolution en pourcentage entre une valeur initiale $V_i$ et une valeur finale $V_f$, on utilise la formule :
  $$\text{Taux} = \frac{V_f - V_i}{V_i} \times 100$$
* **Puissances et suites géométriques :** Une augmentation annuelle de $t\%$ correspond à une multiplication par le coefficient multiplicateur $C = 1 + \frac{t}{100}$. Ainsi, après $n$ années, une grandeur $X_0$ devient $X_n = X_0 \times C^n$.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul du salaire réel en 2023
* **Taux d'évolution du salaire nominal :**
  La valeur initiale est $W_{2010} = 1\,800$ et la valeur finale est $W_{2023} = 2\,150$.
  $$\text{Taux} = \frac{2\,150 - 1\,800}{1\,800} \times 100 = \frac{350}{1\,800} \times 100 \approx 19,44\%$$
  Le salaire nominal a augmenté de $19,44\%$ (arrondi au centième).

* **Calcul du salaire réel (en euros constants de 2010) :**
  En appliquant la formule fournie avec $\text{IPC}_{2023} = 124,5$ :
  $$W_{\text{réel}} = 2\,150 \times \frac{100}{124,5} = \frac{215\,000}{124,5} \approx 1\,726,91\text{ \euro}$$
  En 2023, avec son salaire de $2\,150\text{ \euro}$, le ménage achète l'équivalent de ce qu'il aurait pu acheter avec $1\,726,91\text{ \euro}$ en 2010.

#### 2. Analyse comparative du pouvoir d'achat
* **Taux d'inflation global :**
  L'IPC passe de $100$ en 2010 à $124,5$ en 2023. Le taux d'inflation global est donc de :
  $$\frac{124,5 - 100}{100} \times 100 = 24,5\%$$

* **Évolution du pouvoir d'achat :**
  Le salaire nominal a progressé de $19,44\%$, tandis que le niveau général des prix (l'inflation) a augmenté de $24,5\%$. 
  Calculons le taux d'évolution du salaire réel ($W_{\text{réel}}$ par rapport à $W_{2010}$) :
  $$\frac{1\,726,91 - 1\,800}{1\,800} \times 100 = \frac{-73,09}{1\,800} \times 100 \approx -4,06\%$$
  **Conclusion critique :** Le pouvoir d'achat de ce ménage a **diminué d'environ $4,06\%$** entre 2010 et 2023. Bien que la valeur nominale du salaire ait augmenté, elle n'a pas compensé la hausse des prix. Cet exemple illustre qu'une augmentation nominale positive ne garantit pas une amélioration des conditions de vie matérielles.

#### 3. Modélisation prospective et limites
* **Expression de $W_n$ et $\text{IPC}_n$ en fonction de $n$ :**
  * Le salaire nominal subit une hausse annuelle de $1,5\%$, soit un coefficient multiplicateur de $1\,015$. En partant de $W_0 = 2\,150$ en 2023 ($n=0$) :
    $$W_n = 2\,150 \times (1,015)^n$$
  * L'indice des prix subit une hausse annuelle de $2\%$, soit un coefficient multiplicateur de $1,02$. En partant de $\text{IPC}_0 = 124,5$ en 2023 :
    $$\text{IPC}_n = 124,5 \times (1,02)^n$$

* **Limites scientifiques du modèle :**
  Ce modèle repose sur des hypothèses de taux de croissance constants, ce qui est mathématiquement commode mais économiquement irréaliste à long terme. En effet :
  1. **Non-linéarité économique :** L'inflation et les salaires dépendent de chocs exogènes imprévisibles (crises énergétiques, tensions géopolitiques, politiques monétaires des banques centrales).
  2. **Effet de ciseaux :** Comme la base de l'indice des prix croît plus vite ($2\%$) que celle du salaire ($1,5\%$), le modèle prédit une érosion continue et inéluctable du pouvoir d'achat, négligeant les éventuelles revalorisations salariales correctives ou les gains de productivité sectoriels.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
