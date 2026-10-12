---
title: "Exercice 4 : Stockage d'images sous forme de matrices"
description: "Application pratique du chapitre Structures de données : Listes et Tableaux"
---

### 🌐 Contexte concret

En Numérique et Sciences Informatiques (NSI), la manipulation de données multidimensionnelles est une compétence fondamentale. Une image numérique en noir et blanc (niveau de gris) peut être vue mathématiquement comme une matrice, c'est-à-dire un tableau à deux dimensions (une liste de listes en Python). 

Chaque case de la matrice correspond à un pixel, et sa valeur entière (généralement comprise entre $0$ et $255$) représente sa luminosité :
* $0$ représente le noir absolu ($\text{min}$).
* $255$ représente le blanc absolu ($\text{max}$).

Dans le cadre du programme de Première NSI, nous allons manipuler cette structure de données pour analyser et transformer une image simple.

---

### ❓ Énoncé

Soit une image carrée de $3 \times 3$ pixels représentée en Python par la matrice (liste de listes) suivante :

```python
image = [
    [255, 100, 0],
    [100, 255, 100],
    [0, 100, 255]
]
```

1. **Accès aux données :** Écrire l'instruction Python permettant de récupérer la valeur du pixel situé à la deuxième ligne et troisième colonne. Quelle est cette valeur ?
2. **Parcours :** Écrire une fonction Python `luminosite_moyenne(img)` qui prend en paramètre une image sous forme de matrice carrée de taille $N \times N$ et retourne la luminosité moyenne de l'image (la moyenne arithmétique de toutes les valeurs de la matrice).
3. **Transformation (Négatif) :** Le négatif d'une image en niveau de gris s'obtient en remplaçant chaque valeur de pixel $p$ par $255 - p$. Écrire une fonction `negatif_image(img)` qui renvoie une *nouvelle* matrice représentant le négatif de l'image.
4. **Complexité :** Quelle est la complexité en temps de la fonction `negatif_image` en fonction du nombre de pixels $P$ de l'image ? Justifiez brièvement.

---

### 💡 Indice

* **Question 1 :** Attention aux indices en Python qui commencent toujours à $0$. Le premier indice désigne la ligne, le second la colonne.
* **Question 2 :** Pour parcourir une matrice (tableau à 2 dimensions), vous aurez besoin de deux boucles `for` imbriquées : une pour les lignes et une pour les colonnes. Pensez à accumuler la somme des pixels et à compter le nombre total de pixels.
* **Question 3 :** Veillez à bien créer une *nouvelle* structure (par exemple par compréhension de liste ou en partant d'une liste vide) pour ne pas modifier l'image initiale (effet de bord).

---

### 📋 Correction détaillée pas à pas

#### 1. Accès aux données
En Python, l'accès à un élément d'une liste de listes s'écrit `matrice[ligne][colonne]`. 
* La deuxième ligne correspond à l'indice $1$.
* La troisième colonne correspond à l'indice $2$.

L'instruction est donc :
```python
valeur = image[1][2]
```
En consultant notre matrice, `image[1][2]` vaut **$100$**.

---

#### 2. Calcul de la luminosité moyenne
Pour calculer la moyenne, il faut sommer toutes les valeurs contenues dans la matrice et diviser cette somme par le nombre total de pixels. Pour une matrice $N \times N$, le nombre total de pixels est $N^2$ (ou plus généralement $\text{lignes} \times \text{colonnes}$).

```python
def luminosite_moyenne(img):
    somme = 0
    nb_pixels = 0
    for ligne in img:
        for pixel in ligne:
            somme += pixel
            nb_pixels += 1
    return somme / nb_pixels
```
*Application numérique rapide sur notre exemple :*
La somme vaut $255+100+0+100+255+100+0+100+255 = 1165$. Il y a $9$ pixels. La moyenne est $\frac{1165}{9} \approx 129.44$.

---

#### 3. Transformation en négatif
Pour chaque pixel $p$, on applique la formule $255 - p$. On peut utiliser une structure de compréhension de liste imbriquée, très idiomatique en Python, ou une double boucle classique.

**Méthode avec compréhension de liste :**
```python
def negatif_image(img):
    return [[255 - pixel for pixel in ligne] for ligne in img]
```

**Vérification sur l'exemple :**
La matrice résultante est :
```python
[
    [0, 155, 255],
    [155, 0, 155],
    [255, 155, 0]
]
```

---

#### 4. Analyse de la complexité
Soit $P$ le nombre total de pixels de l'image. 
Si l'image est de dimensions $N \times N$, alors $P = N^2$.

La fonction `negatif_image` utilise une double boucle (ou une compréhension imbriquée) qui visite exactement une fois chaque pixel de la matrice pour lui appliquer une opération arithmétique élémentaire en temps constant $O(1)$.

* **Complexité en temps :** $\mathcal{O}(P)$ (ou $\mathcal{O}(N^2)$), car le nombre d'opérations est directement proportionnel au nombre de pixels de l'image.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
