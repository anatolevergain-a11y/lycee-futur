---
title: "Exercice : Statistiques et probabilités"
description: "Démonstration appliquée : Analyse des données d'écoute Spotify"
---

### 🌐 Contexte

Chaque année au mois de décembre, la plateforme de streaming musical **Spotify** dévoile l'opération *Spotify Wrapped*, permettant aux utilisateurs d'analyser leurs habitudes d'écoute : temps passé, genres préférés, titres favoris. Ces statistiques reposent sur des algorithmes de recommandation et de traitement de données massives (*Big Data*). 

Dans cet exercice, nous allons analyser un échantillon de données issues des habitudes d'écoute d'un lycéen de Seconde pour comprendre les indicateurs de position et de dispersion, puis évaluer le comportement du mode de lecture aléatoire (*Shuffle*).

---

### ❓ Énoncé

Une utilisatrice souhaite analyser les $20$ morceaux les plus écoutés de sa playlist annuelle. Les durées de ces morceaux (exprimées en secondes) ont été relevées et ordonnées par ordre croissant dans la série statistique suivante :

$$130~;~140~;~150~;~160~;~160~;~170~;~175~;~180~;~180~;~185~;~190~;~195~;~200~;~210~;~210~;~220~;~230~;~240~;~250~;~275$$

#### 1. Indicateurs statistiques de base
a) Déterminer l'étendue $E$ de cette série statistique.  
b) Calculer la durée moyenne $\bar{x}$ (en secondes) d'un morceau de cette playlist. Convertir ce résultat en minutes et secondes.

#### 2. Médiane et quartiles
a) Déterminer la médiane $Me$, le premier quartile $Q_1$ et le troisième quartile $Q_3$ de cette série statistique.  
b) Calculer l'écart interquartile de la série.  
c) Interpréter les valeurs de la médiane et de $Q_1$ dans le contexte des écoutes de l'utilisatrice.

#### 3. Modélisation probabiliste du mode « Aléatoire » (*Shuffle*)
L'utilisatrice lance la lecture d'un morceau au hasard parmi ces $20$ titres (situation d'équiprobabilité).  
Ces $20$ morceaux sont classés selon deux critères : leur genre musical et leur durée.
- $10$ morceaux sont du **Rap**, dont $4$ ont une durée strictement supérieure à $190\text{ s}$.
- $6$ morceaux sont de la **Pop**, dont $3$ ont une durée strictement supérieure à $190\text{ s}$.
- $4$ morceaux sont de l'**Électro**, dont $2$ ont une durée strictement supérieure à $190\text{ s}$.

On définit les événements suivants :
- $R$ : « Le titre tiré est un morceau de Rap » ;
- $L$ : « Le titre tiré est long (durée strictement supérieure à $190\text{ s}$) ».

a) Vérifier que la probabilité de l'événement $L$ est $P(L) = 0{,}45$.  
b) Définir par une phrase l'événement $R \cap L$ et calculer sa probabilité.  
c) Calculer la probabilité que le morceau tiré soit du Rap **ou** qu'il soit long, notée $P(R \cup L)$.

---

### 💡 Indice

1. Pour la moyenne : additionner toutes les valeurs et diviser par l'effectif total $N = 20$.
2. Pour les quartiles dans le programme de Seconde :
   - $Q_1$ correspond à la valeur au rang supérieur ou égal à $\frac{N}{4}$.
   - $Q_3$ correspond à la valeur au rang supérieur ou égal à $\frac{3N}{4}$.
   - Pour la médiane $Me$, comme $N = 20$ est pair, prendre la demi-somme des valeurs de rangs $10$ et $11$.
3. Penser à dresser un tableau à double entrée croisant les genres (Rap, Pop, Électro) et la durée ($\le 190\text{ s}$ ou $> 190\text{ s}$) pour visualiser l'univers. Utiliser la formule fondamentale :  
$$P(R \cup L) = P(R) + P(L) - P(R \cap L)$$

---

### 📋 Correction détaillée

#### 1. Indicateurs statistiques de base

**a) Étendue $E$ :**  
L'étendue est la différence entre la valeur maximale et la valeur minimale de la série :
$$E = x_{\max} - x_{\min} = 275 - 130 = 145\text{ s}$$
L'écart entre le morceau le plus long et le plus court est de **$145$ secondes** (soit $2\text{ min }25\text{ s}$).

**b) Durée moyenne $\bar{x}$ :**  
L'effectif total est $N = 20$. La somme de toutes les durées est :
$$\sum x_i = 130 + 140 + 150 + \dots + 250 + 275 = 3\,850\text{ s}$$

La moyenne vaut :
$$\bar{x} = \frac{3\,850}{20} = 192{,}5\text{ s}$$

Pour convertir $192{,}5\text{ s}$ en minutes et secondes :
$$192{,}5 = 3 \times 60 + 12{,}5$$
La durée moyenne d'un titre favori est donc de **$3\text{ minutes et } 12{,}5\text{ secondes}$**.

---

#### 2. Médiane et quartiles

La série de $20$ valeurs est déjà ordonnée.

**a) Détermination des indicateurs :**
- **Médiane ($Me$) :**  
  L'effectif total est pair ($N = 20$). $\frac{N}{2} = 10$.  
  La médiane se situe entre la $10^{\text{e}}$ et la $11^{\text{e}}$ valeur :
  - $10^{\text{e}}$ valeur : $185$
  - $11^{\text{e}}$ valeur : $190$
  $$Me = \frac{185 + 190}{2} = 187{,}5\text{ s}$$

- **Premier quartile ($Q_1$) :**  
  $\frac{N}{4} = \frac{20}{4} = 5$.  
  $Q_1$ est la $5^{\text{e}}$ valeur de la série :
  $$Q_1 = 160\text{ s}$$

- **Troisième quartile ($Q_3$) :**  
  $\frac{3N}{4} = \frac{3 \times 20}{4} = 15$.  
  $Q_3$ est la $15^{\text{e}}$ valeur de la série :
  $$Q_3 = 210\text{ s}$$

**b) Écart interquartile :**  
$$\text{Écart interquartile} = Q_3 - Q_1 = 210 - 160 = 50\text{ s}$$

**c) Interprétation concrète :**
- $Me = 187{,}5\text{ s}$ : Au moins $50\,\%$ des morceaux écoutés durent $187{,}5$ secondes ou moins (et au moins $50\,\%$ durent $187{,}5$ secondes ou plus).
- $Q_1 = 160\text{ s}$ : Au moins $25\,\%$ des morceaux les plus écoutés ont une durée inférieure ou égale à $160$ secondes ($2\text{ min }40\text{ s}$).

---

#### 3. Modélisation probabiliste du mode « Aléatoire »

Dressons un tableau croisé des effectifs pour clarifier la situation :

| Genre | Durée $\le 190\text{ s}$ | Durée $> 190\text{ s}$ ($L$) | Total |
| :--- | :---: | :---: | :---: |
| **Rap ($R$)** | $6$ | $4$ | **$10$** |
| **Pop** | $3$ | $3$ | **$6$** |
| **Électro** | $2$ | $2$ | **$4$** |
| **Total** | **$11$** | **$9$** | **$20$** |

**a) Probabilité de l'événement $L$ :**  
Le nombre de titres ayant une durée strictement supérieure à $190\text{ s}$ est $4 + 3 + 2 = 9$.  
Puisque le choix est équiprobable :
$$P(L) = \frac{\text{Nombre de cas favorables}}{\text{Nombre de cas possibles}} = \frac{9}{20} = 0{,}45$$
On retrouve bien la valeur annoncée.

**b) Événement $R \cap L$ :**  
- **Description :** $R \cap L$ est l'événement : « Le titre tiré est un morceau de Rap **et** il dure strictement plus de $190$ secondes ».
- **Calcul :** D'après les données, il y a $4$ morceaux de Rap dans cette catégorie.
$$P(R \cap L) = \frac{4}{20} = \frac{1}{5} = 0{,}20$$

**c) Probabilité de $R \cup L$ :**  
L'événement $R$ comprend $10$ morceaux, donc $P(R) = \frac{10}{20} = 0{,}50$.  
En appliquant la formule de la probabilité d'une réunion :
$$P(R \cup L) = P(R) + P(L) - P(R \cap L)$$
$$P(R \cup L) = 0{,}50 + 0{,}45 - 0{,}20 = 0{,}75$$

La probabilité que le morceau joué au hasard soit du Rap ou dure plus de $190$ secondes est de **$0{,}75$** (soit $75\,\%$ de chances).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
