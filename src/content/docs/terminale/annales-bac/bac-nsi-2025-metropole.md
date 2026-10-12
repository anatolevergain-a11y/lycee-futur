---
title: "Bac NSI 2025 - Métropole"
description: "Sujet officiel type Bac NSI entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

Le sujet est composé de trois exercices indépendants couvrant les thèmes majeurs du programme de Terminale NSI : la Programmation Orientée Objet (POO), la Récursivité et l'algorithme de Tri Fusion.

---

### Exercice 1 : Programmation Orientée Objet et Gestion de Données (7 points)

Une entreprise souhaite modéliser son parc informatique à l'aide de la Programmation Orientée Objet (POO) en Python. 

1. **(1 point)** Définir la classe `Machine` dont le constructeur `__init__` prend en paramètres l'adresse IP (`ip`, de type chaîne de caractères) et la mémoire RAM en gigaoctets (`ram`, de type entier). Par défaut, un attribut booléen `en_fonction` sera initialisé à `False`.

2. **(2 points)** Ajouter à la classe `Machine` une méthode `allumer(self)` qui modifie l'attribut `en_fonction` à `True` si la machine était éteinte, et affiche un message indiquant que la machine démarre. Si elle était déjà allumée, la méthode affiche un message prévenant de l'état actuel.

3. **(2 points)** On souhaite créer une classe fille `Serveur` qui hérite de `Machine`. Le constructeur de `Serveur` prendra en paramètre l'adresse IP, la RAM, ainsi qu'une liste de services hébergés (`services`, de type liste de chaînes de caractères). Utiliser la fonction `super()` pour initialiser les attributs hérités.

4. **(2 points)** Écrire une méthode `ajouter_service(self, nouveau_service)` dans la classe `Serveur` qui ajoute `nouveau_service` à la liste des services si celui-ci n'y figure pas déjà.

---

### Exercice 2 : Algorithmique Récursive (6 points)

On s'intéresse au calcul de suites logiques et à la manipulation de chaînes de caractères par récursivité.

1. **(2 points)** Écrire en Python une fonction récursive `compte_caractere(chaine, caractere)` qui prend en paramètre une chaîne de caractères `chaine` et un caractère `caractere`, et qui renvoie le nombre d'occurrences de ce caractère dans la chaîne. Aucune boucle (`for`, `while`) n'est autorisée.

2. **(1 point)** Quel est le cas de base (ou condition d'arrêt) de cette fonction récursive ? Quel est le traitement effectué lors de l'appel récursif ?

3. **(3 points)** On définit la suite d'entiers de Hofstadter-Conway par les relations suivantes :
   - $C(1) = 1$
   - $C(2) = 1$
   - $C(n) = C(C(n - 1)) + C(n - C(n - 1))$ pour $n > 2$.
   
   Écrire la fonction Python `hofstadter(n)` qui calcule le $n$-ième terme de cette suite de manière récursive. *Note : on pourra supposer $n$ strictement positif.*

---

### Exercice 3 : Diviser pour régner - Le Tri Fusion (7 points)

Le tri fusion est un algorithme classique reposant sur le paradigme « Diviser pour régner ».

1. **(2 points)** Expliquer en quelques lignes le principe général de l'algorithme du tri fusion.

2. **(3 points)** Écrire une fonction `fusion(t1, t2)` qui prend en paramètres deux tableaux triés `t1` et `t2` d'entiers, et qui renvoie un nouveau tableau trié contenant tous les éléments de `t1` et `t2`.

3. **(2 points)** En déduire (ou écrire) la fonction récursive `tri_fusion(t)` qui prend un tableau `t` en paramètre et renvoie un nouveau tableau trié. Quelle est la complexité temporelle théorique de cet algorithme dans le pire des cas ? Justifier brièvement.

---

## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

En tant qu'examinateur du Baccalauréat, voici les points de vigilance majeurs observés lors de la correction des copies de NSI :

1. **En POO (Exercice 1) :**
   - **Piège classique :** Oublier le paramètre `self` dans la définition des méthodes de classe. C'est une erreur éliminatoire sur la syntaxe de base de Python.
   - **Héritage :** L'utilisation correcte de `super().__init__(ip, ram)` est indispensable. Redéfinir les attributs un par un sans `super()` fait perdre des points.

2. **En Récursivité (Exercice 2) :**
   - **Absence de boucle :** Pour la question 1, l'utilisation d'une boucle `for` ou `while` annule immédiatement les points attribués, la consigne interdisant formellement l'itératif.
   - **Cas d'arrêt :** Veillez à toujours tester la chaîne vide `""` comme cas de base pour éviter les récursions infinies (`RecursionError`).

3. **En Tri Fusion (Exercice 3) :**
   - **Gestion des tableaux vides :** Dans la fonction `fusion`, attention aux indices et aux tableaux dont l'un se vide avant l'autre. Le parcours doit s'adapter proprement (utilisation de conditions `if / elif / else` ou de boucles `while` avec des indices de lecture).
   - **Complexité :** Ne pas se contenter de donner $O(n \log n)$ : il faut expliquer la récurrence ($2T(n/2) + O(n)$) liée à l'arbre de récursion.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction de l'Exercice 1 : Programmation Orientée Objet (7 points)

1. **Définition de la classe `Machine` (1 point)**
   - Déclaration correcte de la classe et du constructeur : **0,5 pt**
   - Initialisation des attributs `ip`, `ram` et `en_fonction = False` : **0,5 pt**
   ```python
   class Machine:
       def __init__(self, ip: str, ram: int):
           self.ip = ip
           self.ram = ram
           self.en_fonction = False
   ```

2. **Méthode `allumer` (2 points)**
   - Test logique sur l'état de la machine (`self.en_fonction`) : **1 pt**
   - Modification de l'attribut et affichage des messages adaptés : **1 pt**
   ```python
       def allumer(self):
           if not self.en_fonction:
               self.en_fonction = True
               print(f"La machine {self.ip} démarre.")
           else:
               print(f"La machine {self.ip} est déjà en fonction.")
   ```

3. **Classe fille `Serveur` (2 points)**
   - Syntaxe d'héritage `class Serveur(Machine):` : **0,5 pt**
   - Appel correct à `super().__init__(ip, ram)` : **1 pt**
   - Ajout et initialisation de l'attribut `services` : **0,5 pt**
   ```python
   class Serveur(Machine):
       def __init__(self, ip: str, ram: int, services: list):
           super().__init__(ip, ram)
           self.services = services
   ```

4. **Méthode `ajouter_service` (2 points)**
   - Vérification de l'appartenance (`in`) : **1 pt**
   - Ajout effectif dans la liste (`append`) si absent : **1 pt**
   ```python
       def ajouter_service(self, nouveau_service: str):
           if nouveau_service not in self.services:
               self.services.append(nouveau_service)
   ```

---

### Correction de l'Exercice 2 : Algorithmique Récursive (6 points)

1. **Fonction récursive `compte_caractere` (2 points)**
   - Cas de base (chaîne vide renvoyant $0$) : **0,5 pt**
   - Comparaison du premier caractère : **0,5 pt**
   - Appel récursif sur le reste de la chaîne (`chaine[1:]`) avec addition : **1 pt**
   ```python
   def compte_caractere(chaine: str, caractere: str) -> int:
       if chaine == "":
           return 0
       if chaine[0] == caractere:
           return 1 + compte_caractere(chaine[1:], caractere)
       else:
           return 0 + compte_caractere(chaine[1:], caractere)
   ```

2. **Analyse du cas de base (1 point)**
   - Le cas de base est la chaîne vide `""`. **0,5 pt**
   - Le traitement récursif consiste à réduire la taille de la chaîne à chaque étape en l'analurant par son premier caractère et en relançant la fonction sur la tranche `chaine[1:]`. **0,5 pt**

3. **Suite de Hofstadter-Conway (3 points)**
   - Gestion des cas de base $n = 1$ et $n = 2$ : **1 pt**
   - Traduction rigoureuse de la formule mathématique récursive : **2 pts**
   ```python
   def hofstadter(n: int) -> int:
       if n == 1 or n == 2:
           return 1
       return hofstadter(hofstadter(n - 1)) + hofstadter(n - hofstadter(n - 1))
   ```

---

### Correction de l'Exercice 3 : Diviser pour régner - Le Tri Fusion (7 points)

1. **Principe général du Tri Fusion (2 points)**
   - **Diviser :** Couper le tableau non trié en deux sous-tableaux de tailles approximativement égales. **0,75 pt**
   - **Régner :** Trier récursivement ces deux sous-tableaux (jusqu'à obtenir des tableaux de taille $1$ ou $0$, considérés comme triés). **0,75 pt**
   - **Fusionner :** Assembler les deux sous-tableaux triés en un unique tableau globalement trié. **0,5 pt**

2. **Fonction `fusion(t1, t2)` (3 points)**
   - Initialisation d'un tableau résultat et des indices de parcours : **1 pt**
   - Boucle de comparaison des têtes de tableaux : **1 pt**
   - Ajout des éléments restants de l'un ou l'autre tableau : **1 pt**
   ```python
   def fusion(t1: list, t2: list) -> list:
       res = []
       i, j = 0, 0
       while i < len(t1) and j < len(t2):
           if t1[i] <= t2[j]:
               res.append(t1[i])
               i += 1
           else:
               res.append(t2[j])
               j += 1
       # Ajout des éléments finaux restants
       res.extend(t1[i:])
       res.extend(t2[j:])
       return res
   ```

3. **Fonction `tri_fusion` et Complexité (2 points)**
   - Implémentation de la division et appel récursif : **1 pt**
   - Complexité et justification : **1 pt**
     * **Code :**
     ```python
     def tri_fusion(t: list) -> list:
         if len(t) <= 1:
             return t
         milieu = len(t) // 2
         gauche = tri_fusion(t[:milieu])
         droite = tri_fusion(t[milieu:])
         return fusion(gauche, droite)
     ```
     * **Justification de la complexité :** L'algorithme divise le problème par $2$ à chaque étape (hauteur de l'arbre $\log_2(n)$) et effectue un travail linéaire $O(n)$ de fusion à chaque niveau. La complexité temporelle est donc de $\mathcal{O}(n \log n)$ dans le pire, le meilleur et le cas moyen.