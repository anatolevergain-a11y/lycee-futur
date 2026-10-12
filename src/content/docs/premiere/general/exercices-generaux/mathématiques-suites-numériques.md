---
title: "Exercice : Suites numériques"
description: "Démonstration appliquée : Calcul du barème de l'impôt sur le revenu et inflation"
---

### 🌐 Contexte

En France, l'impôt sur le revenu est progressif par tranches : chaque tranche de revenu est imposée à un taux spécifique. Le seuil de la première tranche (seuil d'entrée dans l'impôt) délimite les personnes non imposables de celles soumises au taux marginal de $11\,\%$.

En période d'inflation, si les salaires augmentent pour compenser la hausse des prix mais que les tranches de l'impôt restent fixes, un contribuable peut voir son imposition augmenter sans que son pouvoir d'achat réel n'ait progressé : c'est l'effet d'éviction fiscale ou « impôt caché ». Pour éviter ce phénomène, l'État revalorise généralement chaque année les seuils du barème en fonction de l'inflation prévisionnelle.

Dans cet exercice, on modélise l'évolution du revenu d'un salarié et celle du seuil d'imposition sur plusieurs années consécutives à partir de l'année 2024 ($n = 0$).

---

### ❓ Énoncé

Pour l'année 2024 (notée $n = 0$), le seuil d'entrée dans la première tranche d'imposition est fixé à $S_0 = 11\,294\text{ \euro}$.  
On prévoit une inflation annuelle stable de $2\,\%$. Par conséquent, chaque année, le seuil d'imposition est revalorisé de $2\,\%$. On note $S_n$ la valeur de ce seuil à l'année $2024 + n$.

Par ailleurs, un contribuable perçoit en 2024 un revenu net imposable de $R_0 = 11\,000\text{ \euro}$. Il bénéficie d'une augmentation contractuelle fixe de $250\text{ \euro}$ par an. On note $R_n$ son revenu net imposable à l'année $2024 + n$.

1. **Étude du barème fiscal (suite $S_n$)**  
   a. Justifier que la suite $(S_n)$ est une suite géométrique. Préciser sa raison $q$.  
   b. Exprimer $S_n$ en fonction de $n$.  
   c. Calculer le montant du seuil prévu pour l'année 2028 (arrondir à l'euro près).

2. **Étude des revenus du salarié (suite $R_n$)**  
   a. Justifier que la suite $(R_n)$ est une suite arithmétique. Préciser sa raison $r$.  
   b. Exprimer $R_n$ en fonction de $n$.  
   c. Calculer le revenu prévisionnel de ce contribuable en 2028.

3. **Scénario 1 : Gel du barème fiscal**  
   Supposons que l'État décide de ne pas revaloriser le barème (le seuil reste constant à $S_0 = 11\,294\text{ \euro}$ pour tout $n$).  
   Déterminer, par le calcul, à partir de quelle année ce contribuable deviendra imposable.

4. **Scénario 2 : Barème indexé sur l'inflation**  
   Dans la réalité où le seuil est indexé à $2\,\%$ par an :  
   a. Calculer $S_n - R_n$ pour les années $n \in \{0, 1, 2, 3, 4\}$.  
   b. Le contribuable devient-il imposable au cours de cette période de 4 ans ?  
   c. Conclure sur le rôle citoyen et économique de l'indexation du barème sur l'inflation.

---

### 💡 Indice

- Une hausse en pourcentage de $t\,\%$ correspond à une multiplication par le coefficient multiplicateur $C = 1 + \dfrac{t}{100}$.
- Une augmentation absolue d'une valeur fixe correspond à l'addition d'une constante.
- Un contribuable est imposable dès lors que son revenu dépasse le seuil : $R_n > S_n$.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Étude du barème fiscal (suite $(S_n)$)

a. **Nature de la suite $(S_n)$ :**  
Une augmentation de $2\,\%$ correspond à la multiplication par le coefficient multiplicateur :
$$C = 1 + \frac{2}{100} = 1{,}02$$
Chaque terme se déduit du précédent par la relation :
$$S_{n+1} = 1{,}02 \times S_n$$
La suite $(S_n)$ est donc une **suite géométrique** de premier terme $S_0 = 11\,294$ et de raison $q = 1{,}02$.

b. **Expression de $S_n$ en fonction de $n$ :**  
D'après la formule du terme général d'une suite géométrique, pour tout entier naturel $n$ :
$$S_n = S_0 \times q^n$$
$$S_n = 11\,294 \times 1{,}02^n$$

c. **Calcul pour 2028 :**  
L'année 2028 correspond à $n = 2028 - 2024 = 4$.
$$S_4 = 11\,294 \times 1{,}02^4$$
$$S_4 \approx 11\,294 \times 1{,}082432 \approx 12\,225{,}00\text{ \euro}$$
En 2028, le seuil d'entrée dans la première tranche sera d'environ **$12\,225\text{ \euro}$**.

---

#### 2. Étude des revenus du salarié (suite $(R_n)$)

a. **Nature de la suite $(R_n)$ :**  
Le revenu augmente chaque année d'une somme fixe de $250\text{ \euro}$. Ainsi, pour tout entier naturel $n$ :
$$R_{n+1} = R_n + 250$$
La suite $(R_n)$ est donc une **suite arithmétique** de premier terme $R_0 = 11\,000$ et de raison $r = 250$.

b. **Expression de $R_n$ en fonction de $n$ :**  
D'après la formule du terme général d'une suite arithmétique :
$$R_n = R_0 + n \times r$$
$$R_n = 11\,000 + 250n$$

c. **Calcul pour 2028 :**  
Pour l'année 2028 ($n = 4$) :
$$R_4 = 11\,000 + 250 \times 4 = 11\,000 + 1\,000 = 12\,000\text{ \euro}$$
Le revenu net imposable du contribuable en 2028 sera de **$12\,000\text{ \euro}$**.

---

#### 3. Scénario 1 : Gel du barème fiscal

Si le barème est gelé, le seuil d'imposition reste fixé à $S_0 = 11\,294\text{ \euro}$.  
Le salarié devient imposable dès que son revenu dépasse ce montant, soit lorsque :
$$R_n > 11\,294$$
$$11\,000 + 250n > 11\,294$$
$$250n > 11\,294 - 11\,000$$
$$250n > 294$$
$$n > \frac{294}{250} = 1{,}176$$

Comme $n$ est un entier naturel, la plus petite valeur possible est $n = 2$.  
$n = 2$ correspond à l'année $2024 + 2 = 2026$.

**Conclusion :** Si le barème avait été gelé, ce contribuable serait devenu imposable dès **2026** ($R_2 = 11\,500\text{ \euro} > 11\,294\text{ \euro}$).

---

#### 4. Scénario 2 : Barème indexé sur l'inflation

a. **Calcul des écarts $S_n - R_n$ :**  
Dressons un tableau des valeurs de $n=0$ à $n=4$ (arrondies à l'unité) :

| Année | $n$ | Seuil $S_n$ (en €) | Revenu $R_n$ (en €) | Écart $S_n - R_n$ (en €) |
| :---: | :-: | :----------------: | :-----------------: | :----------------------: |
| 2024  | 0   | $11\,294$          | $11\,000$           | $+294$                   |
| 2025  | 1   | $11\,520$          | $11\,250$           | $+270$                   |
| 2026  | 2   | $11\,750$          | $11\,500$           | $+250$                   |
| 2027  | 3   | $11\,985$          | $11\,750$           | $+235$                   |
| 2028  | 4   | $12\,225$          | $12\,000$           | $+225$                   |

*Détail des calculs de $S_n$ :*  
- $S_1 = 11\,294 \times 1{,}02 \approx 11\,519{,}88 \approx 11\,520$  
- $S_2 = 11\,519{,}88 \times 1{,}02 \approx 11\,750{,}28 \approx 11\,750$  
- $S_3 = 11\,750{,}28 \times 1{,}02 \approx 11\,985{,}28 \approx 11\,985$  
- $S_4 \approx 12\,225$

b. **Analyse de l'imposition :**  
Pour chaque année de $n = 0$ à $n = 4$, on constate que $S_n > R_n$, c'est-à-dire que le seuil d'imposition reste strictement supérieur au revenu annuel.  
Le contribuable **ne devient donc pas imposable** au cours de cette période.

c. **Interprétation citoyenne :**  
L'indexation du barème sur l'inflation permet d'adapter l'impôt à l'érosion monétaire. Elle empêche des ménages aux revenus modestes de basculer dans l'impôt uniquement parce que leurs salaires ont suivi l'inflation générale. Ce mécanisme préserve ainsi la justice fiscale et le pouvoir d'achat réel des citoyens.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
