---
title: "Exercice : Types de données et listes"
description: "Démonstration appliquée : Gestion des inventaires dans les jeux vidéo RPG"
---

### 🌐 Contexte

Dans le développement de jeux vidéo de type RPG (Role Playing Game), la gestion rigoureuse des données est cruciale. Chaque joueur dispose d'un inventaire pour stocker ses objets (armes, potions, armures). En NSI, nous modélisons cet inventaire sous la forme d'une **liste de dictionnaires** (ou d'une liste de listes) en Python.

Imaginons que nous développons le système d'inventaire d'un héros. Chaque objet est représenté par un dictionnaire contenant son nom (de type `str`), son type (de type `str`), sa valeur en pièces d'or (de type `int`) et un booléen indiquant s'il est équipé ou non (de type `bool`).

Voici l'état initial de l'inventaire dans notre programme Python :

```python
inventaire_heros = [
    {"nom": "Épée rouillée", "type": "arme", "valeur": 15, "equipe": False},
    {"nom": "Potion de soin", "type": "consommable", "valeur": 25, "equipe": False},
    {"nom": "Bouclier en bois", "type": "armure", "valeur": 40, "equipe": True},
    {"nom": "Potion de mana", "type": "consommable", "valeur": 30, "equipe": False}
]
```

### ❓ Énoncé

1. **Question 1 :** Écrire une fonction Python `compter_objets_type(inventaire, type_objet)` qui prend en paramètre l'inventaire et une chaîne de caractères représentant un type (par exemple `"consommable"`), et qui retourne le nombre total d'objets de ce type dans l'inventaire.
2. **Question 2 :** Écrire une fonction Python `calculer_valeur_totale(inventaire)` qui calcule et retourne la somme des valeurs de tous les objets présents dans l'inventaire.
3. **Question 3 :** Le héros souhaite trier son inventaire pour retrouver plus facilement ses objets. Écrire une fonction `trier_inventaire_par_valeur(inventaire)` qui retourne un *nouvel* inventaire trié par ordre décroissant de la valeur des objets (du plus cher au moins cher), sans modifier la liste initiale.
4. **Question 4 :** Formalisons mathématiquement la complexité. Si l'inventaire contient $n$ objets, quelle est la complexité en temps dans le pire des cas de la fonction de tri (Question 3) si l'on utilise un tri par insertion, et comment l'exprime-t-on avec la notation grand $O$ ?

### 💡 Indice

- **Q1 & Q2 :** Pensez à parcourir la liste avec une boucle `for` classique ou par indice. À chaque itération, accédez à la valeur associée aux clés du dictionnaire (ex: `objet["valeur"]`).
- **Q3 :** Pour ne pas modifier la liste originale, commencez par faire une copie de la liste. En Python, la méthode `.sort()` modifie la liste en place, tandis que la fonction `sorted()` renvoie une nouvelle liste. Vous pouvez utiliser le paramètre `key` de `sorted()` associé à une fonction anonyme (`lambda`).
- **Q4 :** Rappelez-vous qu'un tri par insertion compare chaque élément aux éléments déjà triés de la sous-liste. Dans le pire des cas, pour $n$ éléments, le nombre d'opérations est proportionnel à $n^2$.

### 📋 Correction détaillée (Pas à pas)

#### Correction de la Question 1

Pour compter les objets d'un type donné, on initialise un compteur à $0$, puis on parcourt chaque dictionnaire de la liste. Si la valeur associée à la clé `"type"` correspond au type recherché, on incrémente le compteur.

```python
def compter_objets_type(inventaire, type_objet):
    compteur = 0
    for objet in inventaire:
        if objet["type"] == type_objet:
            compteur = compteur + 1
    return compteur
```

#### Correction de la Question 2

Pour calculer la valeur totale, on initialise un accumulateur à $0$. On parcourt la liste des objets et on ajoute la valeur associée à la clé `"valeur"` de chaque dictionnaire à notre accumulateur.

```python
def calculer_valeur_totale(inventaire):
    valeur_totale = 0
    for objet in inventaire:
        valeur_totale += objet["valeur"]
    return valeur_totale
```

#### Correction de la Question 3

Pour trier les objets par valeur décroissante sans modifier la liste d'origine, on utilise la fonction intégrée `sorted()`. On utilise une fonction `lambda` pour indiquer à Python que le tri doit s'effectuer sur la clé `"valeur"` des dictionnaires. Le paramètre `reverse=True` permet d'obtenir un ordre décroissant.

```python
def trier_inventaire_par_valeur(inventaire):
    # sorted() crée une nouvelle liste, contrairement à .sort()
    return sorted(inventaire, key=lambda obj: obj["valeur"], reverse=True)
```

#### Correction de la Question 4

Dans le pire des cas (par exemple, si l'inventaire est trié dans l'ordre strictement inverse), un algorithme de tri par insertion réalise un nombre d'opérations proportionnel à la somme des entiers de $1$ à $n-1$. 

Le nombre total d'opérations élémentaires (comparaisons et décalages) s'exprime mathématiquement par :

$$\sum_{i=1}^{n-1} i = \frac{n(n-1)}{2} = \frac{n^2 - n}{2}$$

En notation grand $O$, les termes de plus bas degrés et les constantes multiplicatives sont ignorés. La complexité temporelle dans le pire des cas est donc de :

$$O(n^2)$$

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
