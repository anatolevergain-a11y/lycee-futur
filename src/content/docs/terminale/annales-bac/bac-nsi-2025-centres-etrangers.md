---
title: "Bac NSI 2025 - Centres Étrangers"
description: "Sujet officiel type Bac NSI entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

### Exercice 1 : Sécurité des données et Cryptographie RSA (8 points)

Le système de chiffrement RSA repose sur la difficulté de factoriser de grands nombres premiers. On souhaite implémenter et manipuler une clé RSA simplifiée.

1. **Calculs préliminaires :**
   On choisit deux nombres premiers distincts $p = 3$ et $q = 11$.
   Calculer le module $n$ et l'indicatrice d'Euler $\phi(n)$ (notée aussi $\varphi(n)$).

2. **Choix des exposants :**
   On choisit un exposant de chiffrement $e = 7$.
   Justifier que $e$ est premier avec $\phi(n)$.

3. **Détermination de la clé privée :**
   L'exposant de déchiffrement $d$ est l'inverse de $e$ modulo $\phi(n)$, c'est-à-dire qu'il vÃ©rifie :
   $$e \times d \equiv 1 \pmod{\phi(n)}$$
   À l'aide d'essais successifs ou de l'algorithme d'Euclide étendu, déterminer la valeur de $d$ comprise entre $1$ et $\phi(n)$.

4. **Chiffrement et déchiffrement :**
   On souhaite chiffrer le message numérique $m = 5$.
   Le message chiffré $c$ est donné par la formule :
   $$c = m^e \pmod n$$
   Calculer la valeur de $c$.

5. **Implémentation en Python :**
   Écrire une fonction Python `chiffrer_dechiffrer(message, exposant, module)` qui prend en arguments un entier (message ou message chiffré) et retourne le résultat de l'exponentiation modulaire $m^{\text{exposant}} \pmod{\text{module}}$.

---

### Exercice 2 : Structures de données – Piles et Files (12 points)

Dans cet exercice, on s'intéresse à la manipulation de structures linéaires de données. On dispose d'une classe `File` déjà implémentée en Python avec les méthodes suivantes :
- `__init__(self)` : crée une file vide.
- `est_vide(self)` : renvoie un booléen indiquant si la file est vide.
- `enfiler(self, x)` : ajoute l'élément $x$ à la fin de la file.
- `defiler(self)` : retire et renvoie l'élément situé au début de la file.

On dispose également d'une classe `Pile` avec les méthodes usuelles :
- `__init__(self)` : crée une pile vide.
- `est_vide(self)` : renvoie un booléen.
- `empiler(self, x)` : ajoute $x$ au sommet.
- `depiler(self)` : retire et renvoie le sommet de la pile.

#### Partie A : Manipulation de files
1. On considère une file `f` initialement vide. On exécute les instructions suivantes :
   ```python
   f.enfiler(3)
   f.enfiler(7)
   a = f.defiler()
   f.enfiler(5)
   b = f.defiler()
   ```
   Donner les valeurs respectives des variables `a` et `b`.

2. Écrire une fonction en Python `taille_file(f)` qui prend en paramètre une `File` `f` et qui renvoie le nombre d'éléments qu'elle contient. 
   *Note : La fonction doit laisser la file `f` dans son état initial à la fin de son exécution.*

#### Partie B : Inversion d'une structure à l'aide d'une pile
On souhaite vider une file dans une pile de sorte que l'ordre des éléments soit inversé, ou manipuler des structures croisées.

3. Écrire une fonction `inverser_file(f)` qui prend une `File` `f` en argument et renvoie une nouvelle `File` dont les éléments sont dans l'ordre inverse de la file initiale, en utilisant obligatoirement une ou plusieurs structures de type `Pile` comme variables intermédiaires.

4. Écrire une fonction `est_palindrome_file(f)` qui prend une `File` `f` d'entiers ou de caractères en argument et renvoie `True` si la suite des éléments forme un palindrome (c'est-à-dire se lit de la même manière dans les deux sens), et `False` sinon. Vous pouvez utiliser des piles et/ou des files auxiliaires.

---

## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

### Pour l'examinateur et le candidat :
* **Cryptographie RSA :** Ne pas confondre les opérations arithmétiques du RSA. Le produit $n = p \times q$ sert de module pour les clés publique et privée, tandis que $\phi(n) = (p-1)(q-1)$ sert uniquement à trouver l'exposant secret $d$. Veillez à bien rédiger les congruences.
* **Structures de données (Piles/Files) :** Le piège classique lors de la manipulation de files est la **destruction de la structure** d'origine lorsqu'on utilise `defiler()` sans ré-enfiler les éléments. Les correcteurs sanctionnent lourdement si la file initiale n'est pas restaurée dans les questions demandant explicitement de préserver l'état de la structure.
* **Complexité et modularité :** En Python, les types de base doivent être manipulés via les interfaces des classes fournies et non en accédant aux listes internes de manière indue (encapsulation).

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction de l'Exercice 1 : Sécurité des données et Cryptographie RSA (/8 points)

1. **Calculs préliminaires ($1.5 \text{ points}$) :**
   - On a $p = 3$ et $q = 11$.
   - Le module $n$ est le produit de $p$ et $q$ : 
     $$n = 3 \times 11 = 33$$
   - L'indicatrice d'Euler $\phi(n)$ est donnée par la formule $\phi(n) = (p-1)(q-1)$ :
     $$\phi(n) = (3 - 1) \times (11 - 1) = 2 \times 10 = 20$$
   *(0.75 pt pour $n$, 0.75 pt pour $\phi(n)$)*

2. **Choix des exposants ($1 \text{ point}$) :**
   - On a $e = 7$ et $\phi(n) = 20$.
   - Pour que $e$ soit valide, il faut que $\text{PGCD}(e, \phi(n)) = 1$.
   - Les diviseurs de $7$ sont $1$ et $7$. Comme $7$ ne divise pas $20$ ($20 = 7 \times 2 + 6$), le $\text{PGCD}(7, 20) = 1$.
   - $e$ est donc bien premier avec $\phi(n)$. *(1 pt)*

3. **Détermination de la clé privée ($2 \text{ points}$) :**
   - On cherche $d$ tel que $7 \times d \equiv 1 \pmod{20}$.
   - Testons les valeurs de $d$ de $1$ à $19$ :
     - Si $d = 1$, $7 \times 1 = 7 \equiv 7$
     - Si $d = 2$, $7 \times 2 = 14 \equiv 14$
     - Si $d = 3$, $7 \times 3 = 21 \equiv 1 \pmod{20}$
   - On trouve $d = 3$ (car $21 = 1 \times 20 + 1$). *(2 pts)*

4. **Chiffrement du message ($1.5 \text{ points}$) :**
   - Message $m = 5$, $e = 7$, $n = 33$.
   - $c = 5^7 \pmod{33}$.
   - Calculons par étapes :
     - $5^1 = 5$
     - $5^2 = 25 \equiv 25$
     - $5^3 = 25 \times 5 = 125 = 3 \times 33 + 26 \equiv 26 \equiv -7 \pmod{33}$
     - $5^4 = (5^2)^2 = 25^2 = 625 = 18 \times 33 + 31 \equiv 31 \equiv -2 \pmod{33}$
     - $5^7 = 5^3 \times 5^4 \equiv 26 \times 31 = 806$
     - $806 / 33 = 24.423$, $24 \times 33 = 792$, $806 - 792 = 14$.
     - Donc $c = 14$. *(1.5 pts)*

5. **Implémentation en Python ($2 \text{ points}$) :**
   ```python
   def chiffrer_dechiffrer(message, exposant, module):
       """
       Calcule message**exposant % module de manière efficace.
       """
       return pow(message, exposant, module)
   ```
   *(Accepté également : une boucle `for` avec accumulation et modulo successif pour l'exponentiation rapide. 2 pts pour une fonction correcte utilisant l'exponentiation modulaire intégrée ou codée proprement).*

---

### Correction de l'Exercice 2 : Structures de données – Piles et Files (/12 points)

#### Partie A : Manipulation de files ($4 \text{ points}$)
1. **Suivi d'exécution ($2 \text{ points}$) :**
   - `f.enfiler(3)` -> File : `[3]`
   - `f.enfiler(7)` -> File : `[3, 7]`
   - `a = f.defiler()` -> Retire `3`. `a = 3`. File : `[7]`
   - `f.enfiler(5)` -> File : `[7, 5]`
   - `b = f.defiler()` -> Retire `7`. `b = 7`. File : `[5]`
   - **Résultat :** `a = 3` et `b = 7`. *(1 pt pour a, 1 pt pour b)*

2. **Fonction `taille_file(f)` ($2 \text{ points}$) :**
   ```python
   def taille_file(f):
       f_aux = File()
       c = 0
       # Vidage de f dans f_aux tout en comptant
       while not f.est_vide():
           element = f.defiler()
           f_aux.enfiler(element)
           c += 1
       # Restauration de f dans son état initial
       while not f_aux.est_vide():
           f.enfiler(f_aux.defiler())
       return c
   ```
   *(Barème : 1 pt pour le comptage et le transfert, 1 pt pour la restauration obligatoire de la file initiale).*

#### Partie B : Inversion et Algorithmique avancée ($8 \text{ points}$)
3. **Fonction `inverser_file(f)` ($4 \text{ points}$) :**
   Pour inverser une file, on peut passer par une pile intermédiaire (le premier entré dans la file sera le premier sorti de la file, donc empilé en premier, et en le dépilant on obtiendra l'ordre inverse).
   ```python
   def inverser_file(f):
       p = Pile()
       f_aux = File()
       f_resultat = File()
       
       # 1. Transférer f vers une pile p et une file auxiliaire pour préserver f
       while not f.est_vide():
           val = f.defiler()
           p.empiler(val)
           f_aux.enfiler(val)
           
       # Restaurer f
       while not f_aux.est_vide():
           f.enfiler(f_aux.defiler())
           
       # 2. Dépiler p pour remplir la nouvelle file (ordre inversé)
       while not p.est_vide():
           f_resultat.enfiler(p.depiler())
           
       return f_resultat
   ```
   *(Barème : 2 pts pour l'utilisation logique de la Pile permettant l'inversion, 2 pts pour la propreté du code et la préservation de la file d'origine).*

4. **Fonction `est_palindrome_file(f)` ($4 \text{ points}$) :**
   Une file est un palindrome si, lorsqu'on la lit du début à la fin, la séquence est identique à la lecture de la fin au début. En utilisant une pile et une file auxiliaire, on peut comparer les éléments dans les deux sens, ou copier dans une liste/tableau (si toléré, mais l'esprit NSI privilégie les structures abstraites). Faisons une solution 100% Piles/Files :
   ```python
   def est_palindrome_file(f):
       f_aux = File()
       p = Pile()
       est_pal = True
       
       # Copie de f dans f_aux et p
       while not f.est_vide():
           val = f.defiler()
           f_aux.enfiler(val)
           p.empiler(val)
           
       # Restauration de f et vérification simultanée
       # La file donne l'ordre initial, la pile donne l'ordre inverse (dernier entré, premier sorti)
       while not f_aux.est_vide():
           elt_file = f_aux.defiler()
           elt_pile = p.depiler()
           
           if elt_file != elt_pile:
               est_pal = False
               
           f.enfiler(elt_file)  # Restauration de f
           
       return est_pal
   ```
   *(Barème : 2 pts pour l'idée astucieuse de comparer File (FIFO) et Pile (LIFO), 2 pts pour la restauration de la file initiale et la gestion correcte du booléen de retour).*