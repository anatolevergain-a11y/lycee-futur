---
title: "Exercice 4 : Statistiques de matchs de e-sport"
description: "Application pratique du chapitre Statistiques et probabilités"
---

### 🌐 Contexte concret

Le e-sport (sport électronique) est un secteur en plein essor où l'analyse de données est devenue primordiale pour les équipes professionnelles. Un entraîneur de l'équipe française de *League of Legends* "Karmine Corp" souhaite analyser les performances de son joueur vedette sur les 20 derniers matchs de la saison. 

Le tableau ci-dessous répertorie le nombre de *Kills* (éliminations) réalisés par ce joueur par match :

| Nombre de Kills ($x_i$) | 2 | 4 | 5 | 7 | 10 | 12 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Effectif ($n_i$)** | 1 | 3 | 5 | 6 | 4 | 1 |

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Question 1 :** Calculer le nombre total de matchs joués et vérifier la cohérence avec l'énoncé. Déterminer l'effectif total $N$.
2. **Question 2 :** Calculer le nombre moyen de kills par match réalisé par ce joueur. Arrondir le résultat au centième.
3. **Question 3 :** Déterminer la médiane, ainsi que le premier quartile $Q_1$ et le troisième quartile $Q_3$ de cette série statistique. Interpréter brièvement la médiane dans le contexte de l'exercice.
4. **Question 4 :** L'entraîneur considère qu'un match est "remarquable" si le joueur réalise un nombre de kills supérieur ou égal à $Q_3$. Quel est le pourcentage de matchs remarquables joués par ce joueur ?

---

### 💡 Indice

- **Pour la moyenne ($\bar{x}$) :** Pensez à utiliser la formule de la moyenne pondérée : $\bar{x} = \frac{n_1x_1 + n_2x_2 + \dots + n_px_p}{N}$.
- **Pour la médiane :** Listez ou visualisez les valeurs dans l'ordre croissant en tenant compte des effectifs cumulés croissants pour trouver la position du milieu ($\frac{N+1}{2}$).
- **Pour les quartiles :** Calculez $\frac{N}{4}$ pour $Q_1$ et $\frac{3N}{4}$ pour $Q_3$.

---

### 📋 Correction détaillée pas à pas

#### **Question 1 : Calcul de l'effectif total**
L'effectif total $N$ correspond à la somme de tous les effectifs $n_i$ :
$$N = 1 + 3 + 5 + 6 + 4 + 1 = 20$$
Le joueur a donc bien disputé **20 matchs**, ce qui est cohérent avec l'énoncé.

---

#### **Question 2 : Calcul de la moyenne**
La moyenne pondérée $\bar{x}$ se calcule en multipliant chaque valeur par son effectif, en additionnant le tout, puis en divisant par l'effectif total $N$ :

$$\bar{x} = \frac{(2 \times 1) + (4 \times 3) + (5 \times 5) + (7 \times 6) + (10 \times 4) + (12 \times 1)}{20}$$

$$\bar{x} = \frac{2 + 12 + 25 + 42 + 40 + 12}{20}$$

$$\bar{x} = \frac{133}{20} = 6,65$$

Le joueur réalise en moyenne **6,65 kills par match**.

---

#### **Question 3 : Médiane et Quartiles**
Pour trouver la médiane et les quartiles, calculons d'abord les **effectifs cumulés croissants (ECC)** :

| Nombre de Kills ($x_i$) | 2 | 4 | 5 | 7 | 10 | 12 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Effectif ($n_i$)** | 1 | 3 | 5 | 6 | 4 | 1 |
| **ECC** | **1** | **4** | **9** | **15** | **19** | **20** |

* **Médiane ($Me$) :** 
  L'effectif total est $N = 20$ (pair). La médiane se situe entre la $10^{\text{ème}}$ et la $11^{\text{ème}}$ valeur. 
  D'après les ECC, la $9^{\text{ème}}$ valeur est 5, et la $10^{\text{ème}}$ ainsi que la $11^{\text{ème}}$ valeur valent **7**.
  Donc, $Me = 7$.
  *Interprétation :* 50 % des matchs ont été joués avec 7 kills ou moins, et 50 % des matchs avec 7 kills ou plus.

* **Premier quartile ($Q_1$) :** 
  On calcule $\frac{N}{4} = \frac{20}{4} = 5$. Le premier quartile est la $5^{\text{ème}}$ valeur de la série.
  D'après les ECC, la $5^{\text{ème}}$ valeur est **5**. Donc $Q_1 = 5$.

* **Troisième quartile ($Q_3$) :** 
  On calcule $\frac{3N}{4} = \frac{3 \times 20}{4} = 15$. Le troisième quartile est la $15^{\text{ème}}$ valeur de la série.
  D'après les ECC, la $15^{\text{ème}}$ valeur correspond exactement à **7**. Donc $Q_3 = 7$.

---

#### **Question 4 : Pourcentage de matchs remarquables**
Un match est remarquable si le nombre de kills est supérieur ou égal à $Q_3$, c'est-à-dire supérieur ou égal à 7 ($x_i \ge 7$).

Regardons les effectifs des valeurs supérieures ou égales à 7 :
- Pour $x = 7$ : 6 matchs
- Pour $x = 10$ : 4 matchs
- Pour $x = 12$ : 1 match

Le nombre total de matchs remarquables est donc :
$$6 + 4 + 1 = 11 \text{ matchs}$$

Pour calculer le pourcentage associé :
$$\text{Pourcentage} = \frac{11}{20} \times 100 = 55\ \%$$

Le joueur réalise des matchs remarquables dans **55 %** des cas.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
