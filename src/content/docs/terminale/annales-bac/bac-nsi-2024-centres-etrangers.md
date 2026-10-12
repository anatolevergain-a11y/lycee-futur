---
title: "Bac NSI 2024 - Centres Étrangers"
description: "Sujet officiel type Bac NSI entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

Le sujet est composé de trois exercices indépendants couvrant les thèmes majeurs du programme de Numérique et Sciences Informatiques (NSI) de Terminale Générale.

---

### Exercice 1 : Programmation Orientée Objet (6 points)

On souhaite concevoir une application de gestion de stock pour une librairie en ligne à l'aide de la Programmation Orientée Objet (POO) en Python.

1. Écrire la classe `Livre` dont le constructeur `__init__` prend en paramètres un titre (`str`), un auteur (`str`), un prix en euros (`float`) et un nombre d'exemplaires en stock (`int`). Ces attributs seront nommés respectivement `titre`, `auteur`, `prix` et `stock`.
2. Ajouter à la classe `Livre` une méthode d'instance `__str__(self)` qui renvoie une chaîne de caractères lisible sous le format suivant : 
   `"Titre: [titre], Auteur: [auteur], Prix: [prix] EUR, Stock: [stock]"` (on veillera à utiliser des chaînes de caractères standard sans accents dans le code si nécessaire pour éviter les erreurs d'encodage).
3. Écrire une méthode `vendre(self, quantite)` qui décrémente le stock du livre de la quantité demandée. Si le stock est insuffisant (c'est-à-dire si `quantite > self.stock`), la méthode ne modifie pas le stock et lève une exception de type `ValueError` avec un message explicite.
4. On souhaite maintenant créer une classe fille `LivreSolde` qui hérite de la classe `Livre`. Cette classe possède un attribut supplémentaire `remise` (en pourcentage, par exemple `20` pour $20 \text{ \%}$). 
   - Écrire le constructeur de `LivreSolde` en faisant appel au constructeur de la classe mère.
   - Redéfinir la méthode pour calculer le prix afin qu'elle renvoie le prix initial diminué de la remise.

---

### Exercice 2 : Récursivité (6 points)

La récursivité est un concept fondamental en informatique. On s'intéresse dans cet exercice à des fonctions manipulant des chaînes de caractères et des listes.

1. Écrire une fonction récursive en Python nommée `est_palindrome(chaine)` qui prend en paramètre une chaîne de caractères `chaine` et renvoie `True` si cette chaîne est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche, en ignorant les espaces et la casse si possible, ou plus simplement sur une chaîne sans espaces ni majuscules), et `False` sinon.
   *Exemple :* `est_palindrome("ressasser")` renvoie `True`.
2. Justifier la terminaison de la fonction précédente en explicitant le variant de boucle ou la mesure de récurrence (le paramètre qui diminue à chaque appel récursif).
3. On considère la fonction récursive suivante :
   ```python
   def mystere(n):
       if n == 0:
           return 0
       elif n == 1:
           return 1
       else:
           return mystere(n - 1) + mystere(n - 2)
   ```
   - Quel est le résultat de l'appel `mystere(5)` ? Détailler les étapes.
   - Quel est le nom usuel de la suite mathématique ainsi calculée ?
   - Expliquer pourquoi cette implémentation naïve est inefficace pour de grandes valeurs de $n$ (par exemple $n = 50$) et proposer une solution pour y remédier (mémoïsation ou programmation dynamique).

---

### Exercice 3 : Algorithmique - Le Tri Fusion (8 points)

Le tri fusion est un algorithme de tri efficace basé sur le principe "diviser pour régner".

1. Le tri fusion repose sur une fonction auxiliaire essentielle appelée `fusion(T1, T2)` qui prend en paramètres deux tableaux (ou listes) triés `T1` et `T2` et renvoie un nouveau tableau trié contenant tous les éléments de `T1` et `T2`.
   Écrire en Python la fonction `fusion(T1, T2)`.
2. À l'aide de la fonction `fusion`, écrire la fonction récursive `tri_fusion(T)` qui prend un tableau `T` en paramètre et renvoie un nouveau tableau trié par ordre croissant.
   *Indice :* Si le tableau a une longueur inférieure ou égale à $1$, il est déjà trié. Sinon, on le sépare en deux moitiés, on trie récursivement chaque moitié, puis on fusionne les deux moitiés triées.
3. Quel est le nombre d'appels récursifs (ou la hauteur de l'arbre des appels) pour un tableau de taille $n$ ?
4. En déduire la complexité temporelle dans le pire des cas de l'algorithme du tri fusion, en grand $\mathcal{O}$. Justifier brièvement.

---

## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

En tant qu'examinateur officiel, voici les éléments clés qui distinguent une copie excellente d'une copie moyenne :

1. **En Programmation Orientée Objet (POO) :**
   - *Piège classique :* Oublier le paramètre `self` dans la définition des méthodes de classe. C'est une faute éliminatoire sur la syntaxe de base.
   - *Héritage :* Pour `LivreSolde`, l'utilisation correcte de `super().__init__(...)` est valorisée. Redéfinir le prix ou calculer un prix soldé doit se faire proprement via une méthode `get_prix()` ou une propriété.
2. **En Récursivité :**
   - *Condition d'arrêt :* C'est le premier point regardé par le correcteur. Une fonction récursive sans cas de base (ou avec un cas de base mal géré provoquant une récursion infinie) perd immédiatement tous les points de la question.
   - *Complexité de Fibonacci :* Bien identifier que la version naïve a une complexité exponentielle $\mathcal{O}(2^n)$ en raison des recalculs redondants.
3. **Sur le Tri Fusion :**
   - *Gestion des indices :* Lors du découpage de la liste (ex: `milieu = len(T) // 2`), attention aux erreurs d'indiçage (`[:milieu]` et `[milieu:]`).
   - *Complexité :* Ne pas se contenter de donner $\mathcal{O}(n \log n)$, il faut expliquer d'où vient le $\log n$ (hauteur de l'arbre) et le $n$ (coût linéaire de la fusion à chaque niveau).

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction - Exercice 1 : POO (6 points)

1. **Classe `Livre` et constructeur (1.5 point) :**
   ```python
   class Livre:
       def __init__(self, titre, auteur, prix, stock):
           self.titre = titre
           self.auteur = auteur
           self.prix = prix
           self.stock = stock
   ```
   *(Barème : 0.5 pt pour `class`, 0.5 pt pour `__init__`, 0.5 pt pour l'affectation correcte des 4 attributs).*

2. **Méthode `__str__` (1 point) :**
   ```python
       def __str__(self):
           return f"Titre: {self.titre}, Auteur: {self.auteur}, Prix: {self.prix} EUR, Stock: {self.stock}"
   ```
   *(Barème : 0.5 pt pour le nom de la methode spéciale, 0.5 pt pour le format exact demandé).*

3. **Méthode `vendre` (1.5 point) :**
   ```python
       def vendre(self, quantite):
           if quantite > self.stock:
               raise ValueError("Stock insuffisant pour realiser la vente.")
           self.stock -= quantite
   ```
   *(Barème : 0.75 pt pour la vérification de la condition et la levée de l'exception `ValueError`, 0.75 pt pour la mise à jour du stock).*

4. **Classe fille `LivreSolde` (2 points) :**
   ```python
   class LivreSolde(Livre):
       def __init__(self, titre, auteur, prix, stock, remise):
           super().__init__(titre, auteur, prix, stock)
           self.remise = remise

       def prix_solde(self):
           return self.prix * (1 - self.remise / 100)
   ```
   *(Barème : 0.5 pt pour l'héritage `class LivreSolde(Livre)`, 0.75 pt pour l'appel correct à `super().__init__`, 0.75 pt pour la méthode de calcul du prix soldé).*

---

### Correction - Exercice 2 : Récursivité (6 points)

1. **Fonction `est_palindrome` (2 points) :**
   ```python
   def est_palindrome(chaine):
       # Cas de base : une chaine vide ou de 1 caractere est un palindrome
       if len(chaine) <= 1:
           return True
       # Si les caracteres extremes sont differents, ce n'est pas un palindrome
       if chaine[0] != chaine[-1]:
           return False
       # Appel recursif sur la chaine privee de son premier et dernier caractere
       return est_palindrome(chaine[1:-1])
   ```
   *(Barème : 0.75 pt pour le cas de base, 0.75 pt pour la comparaison des extrémités, 0.5 pt pour l'appel récursif).*

2. **Terminaison (1 point) :**
   La longueur de la chaîne `len(chaine)` diminue strictement de $2$ à chaque appel récursif (grâce au découpage `[1:-1]`). Comme elle est minorée par $0$ (cas de base), la récursion se termine nécessairement en un nombre fini d'étapes. *(1 pt pour l'argumentation rigoureuse sur la diminution de la taille).*

3. **Analyse de la fonction `mystere` (3 points) :**
   - **Calcul de `mystere(5)` (1 pt) :**
     - `mystere(0) = 0`, `mystere(1) = 1`
     - `mystere(2) = mystere(1) + mystere(0) = 1 + 0 = 1`
     - `mystere(3) = mystere(2) + mystere(1) = 1 + 1 = 2`
     - `mystere(4) = mystere(3) + mystere(2) = 2 + 1 = 3`
     - `mystere(5) = mystere(4) + mystere(3) = 3 + 2 = 5`
     *(Résultat : $5$)*
   - **Nom de la suite (0.5 pt) :** Il s'agit de la suite de Fibonacci.
   - **Inefficacité et solution (1.5 pt) :** L'implémentation naïve recalcule plusieurs fois les mêmes valeurs (par exemple `mystere(3)` est calculé plusieurs fois dans l'arbre des appels), ce qui conduit à une complexité temporelle exponentielle $\mathcal{O}(2^n)$. Pour y remédier, on utilise la **mémoïsation** (stockage des résultats intermédiaires dans un dictionnaire ou une liste) ou une approche itérative ascendante (programmation dynamique).

---

### Correction - Exercice 3 : Le Tri Fusion (8 points)

1. **Fonction `fusion` (3 points) :**
   ```python
   def fusion(T1, T2):
       i1 = 0
       i2 = 0
       resultat = []
       while i1 < len(T1) and i2 < len(T2):
           if T1[i1] < T2[i2]:
               resultat.append(T1[i1])
               i1 += 1
           else:
               resultat.append(T2[i2])
               i2 += 1
       # Ajout des elements restants s'il y en a
       resultat.extend(T1[i1:])
       resultat.extend(T2[i2:])
       return resultat
   ```
   *(Barème : 1 pt pour l'initialisation des curseurs et de la liste, 1 pt pour la boucle `while` de comparaison, 1 pt pour la gestion des restes et le retour).*

2. **Fonction `tri_fusion` (2.5 points) :**
   ```python
   def tri_fusion(T):
       if len(T) <= 1:
           return T
       milieu = len(T) // 2
       gauche = tri_fusion(T[:milieu])
       droite = tri_fusion(T[milieu:])
       return fusion(gauche, droite)
   ```
   *(Barème : 0.75 pt pour le cas de base, 0.75 pt pour la division du tableau en deux, 1 pt pour les appels récursifs et la fusion).*

3. **Nombre d'appels récursifs / Hauteur (1 point) :**
   À chaque étape, le tableau est divisé par $2$. Le nombre de divisions successives nécessaires pour arriver à des tableaux de taille $1$ est $\log_2(n)$. La hauteur de l'arbre des appels est donc de $\mathcal{O}(\log n)$. *(1 pt)*

4. **Complexité temporelle (1.5 point) :**
   À chaque niveau de l'arbre de récursion, l'opération de fusion parcourt l'ensemble des $n$ éléments, ce qui coûte un temps linéaire $\mathcal{O}(n)$. Comme il y a $\mathcal{O}(\log n)$ niveaux, la complexité totale dans le pire, le meilleur et le moyen des cas est de **$\mathcal{O}(n \log n)$**. *(1 pt pour le résultat $\mathcal{O}(n \log n)$, 0.5 pt pour la justification liant la hauteur et le coût de la fusion).*