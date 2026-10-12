---
title: "Exercice 2 : Modélisation de placements financiers et inflation"
description: "Application pratique du chapitre Suites numériques"
---

### 🌐 Contexte & Données scientifiques

En gestion de patrimoine et en science économique, l'évaluation de la rentabilité d'un placement financier ne peut se faire sans intégrer le phénomène de l'**inflation**, qui correspond à la perte de valeur theórique de la monnaie au fil du temps. 

Considérons un épargnant qui place un capital initial $C_0 = 10\,000\text{ \u20ac}$ sur un livret d'épargne réglementé au 1er janvier de l'année $N$. Le taux d'intérêt annuel brut nominal de ce placement est fixé à $t = 2{,}5\text{ \%}$, versé et capitalisé chaque année à date anniversaire. 

Cependant, l'économie subit une inflation annuelle moyenne estimée à $i = 1{,}8\text{ \%}$. Cela signifie que le pouvoir d'achat d'un euro diminue chaque année, ou formulé autrement, qu'un panier de biens de consommation voit son coût augmenter au taux $i$.

Soit $C_n$ le capital nominal (en euros) disponible sur le compte au bout de $n$ années. 
Soit $P_n$ le pouvoir d'achat réel de ce capital exprimé en euros constants de l'année $N$ (c'est-à-dire corrigé de l'inflation).

Les économistes modélisent souvent l'évolution du pouvoir d'achat en définissant le taux d'intérêt réel $r$ approximé par la relation de Fisher : $r \approx t - i$, ou de manière plus rigoureuse, en actualisant le capital nominal par le facteur d'inflation $(1 + i)^n$.

---

### ❓ Énoncé

1. **Modélisation nominale :** Exprimer $C_{n+1}$ en fonction de $C_n$. En déduire la nature de la suite $(C_n)$ ainsi que l'expression explicite de $C_n$ en fonction de $n$. Calculer le capital nominal obtenu au bout de $10$ ans (on arrondira au centime près).
2. **Prise en compte de l'inflation :** Le pouvoir d'achat réel $P_n$ du capital à l'année $n$ est donné par la relation :
   $$P_n = \frac{C_n}{(1 + i)^n}$$
   Montrer que la suite $(P_n)$ est géométrique. Préciser sa raison et son premier terme $P_0$.
3. **Analyse critique et pouvoir d'achat :** Calculer $P_{10}$. En comparant $P_{10}$ et $C_0$, l'épargnant a-t-il réellement enrichi son patrimoine en terme de pouvoir d'achat ? Quel est le taux de croissance réel de ce placement ?
4. **Prospective et limite du modèle :** Si l'inflation venait à s'établir durablement à $i = 2{,}6\text{ \%}$ (soit un taux supérieur au taux nominal du placement), que dire de la monotonie de la suite $(P_n)$ ? Discuter des limites de ce modèle déterministe face aux fluctuations réelles des marchés financiers et de l'économie.

---

### 💡 Indice de méthode

* **Question 1 :** Identifiez l'effet d'une augmentation de $2{,}5\text{ \%}$ sur une quantité. Il s'agit d'une application directe des suites géométriques.
* **Question 2 :** Exprimez $P_{n+1}$ en fonction de $P_n$ en remplaçant $C_{n+1}$ par son expression en fonction de $C_n$, puis simplifiez le quotient $\frac{P_{n+1}}{P_n}$.
* **Question 3 & 4 :** Soyez rigoureux sur l'arrondi et l'interprétation. Une suite géométrique de raison $q$ est croissante si $q > 1$, décroissante si $0 < q < 1$.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation nominale
Une augmentation de $2{,}5\text{ \%}$ correspond à une multiplication par un coefficient multiplicateur de $1 + \frac{2{,}5}{100} = 1{,}025$.
Le capital à l'année $n+1$ est donc égal au capital de l'année $n$ augmenté de $2{,}5\text{ \%}$ :
$$C_{n+1} = 1{,}025 \times C_n$$
La suite $(C_n)$ est donc **géométrique** de raison $q_C = 1{,}025$ et de premier terme $C_0 = 10\,000$.

Son expression explicite en fonction de $n$ est :
$$C_n = C_0 \times (q_C)^n = 10\,000 \times (1{,}025)^n$$

Au bout de $10$ ans ($n = 10$) :
$$C_{10} = 10\,000 \times (1{,}025)^{10} \approx 12\,800{,}85\text{ \u20ac}$$
*(Valeur exacte : $12800{,}845...$)*

#### 2. Prise en compte de l'inflation
exprimons $P_{n+1}$ en fonction de $P_n$ :
$$P_{n+1} = \frac{C_{n+1}}{(1 + i)^{n+1}} = \frac{1{,}025 \times C_n}{(1 + i)^n \times (1 + i)} = \left( \frac{1{,}025}{1 + i} \right) \times \frac{C_n}{(1 + i)^n}$$
En remplaçant $i$ par $1{,}8\text{ \%} = 0{,}018$, on a $1 + i = 1{,}018$. Ainsi :
$$P_{n+1} = \left( \frac{1{,}025}{1{,}018} \right) \times P_n$$
La suite $(P_n)$ est donc **géométrique** de raison $q_P = \frac{1{,}025}{1{,}018} \approx 1{,}00688$ et de premier terme :
$$P_0 = \frac{C_0}{(1 + i)^0} = C_0 = 10\,000\text{ \u20ac}$$

#### 3. Analyse critique et pouvoir d'achat
Calculons le pouvoir d'achat au bout de $10$ ans :
$$P_{10} = \frac{C_{10}}{(1 + 0{,}018)^{10}} = \frac{12\,800{,}85}{(1{,}018)^{10}} \approx \frac{12\,800{,}85}{1{,}19509} \approx 10\,711{,}08\text{ \u20ac}$$

**Analyse critique :** Bien que le capital nominal ait augmenté (passant de $10\,000\text{ \u20ac}$ à $12\,800{,}85\text{ \u20ac}$), le pouvoir d'achat réel $P_{10}$ est d'environ $10\,711{,}08\text{ \u20ac}$ en euros constants de l'année $N$. 
Puisque $P_{10} > P_0$, l'épargnant a tout de même augmenté son patrimoine réel : le rendement du placement a été supérieur à l'inflation. Le taux de croissance réel annuel est approché par la raison moins un, soit $q_P - 1 \approx +0{,}69\text{ \%}$ par an.

#### 4. Prospective et limite du modèle
Si l'inflation passe à $i = 2{,}6\text{ \%}$, la raison de la suite $(P_n)$ devient :
$$q_P = \frac{1{,}025}{1{,}026} \approx 0{,}9990$$
Puisque $0 < q_P < 1$, la suite $(P_n)$ serait **strictement décroissante**. Malgré des intérêts perçus, le pouvoir d'achat du capital diminuerait chaque année.

**Limites scientifiques du modèle :** 
* **Déterminisme vs Aléa :** Ce modèle suppose des taux $t$ et $i$ constants sur toute la période, ce qui est contredit par la réalité économique où l'inflation et les taux directeurs fluctuent continuellement.
* **Fiscalité :** Le modèle ne prend pas en compte les prélèvements sociaux et l'impôt sur le revenu (flat tax ou barème progressif) qui s'appliquent sur les intérêts bruts, réduisant encore le rendement net réel.
* **hétérogénéité de l'inflation :** L'indice des prix à la consommation (IPC) est une moyenne nationale ; l'inflation ressentie par un ménage dépend de sa structure de consommation propre (logement, énergie, alimentation), s'écartant ainsi de la modélisation macroéconomique globale.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
