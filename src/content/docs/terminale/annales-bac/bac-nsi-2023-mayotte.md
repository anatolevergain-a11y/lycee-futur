---
title: "Bac NSI 2023 - Mayotte"
description: "Sujet officiel type Bac NSI entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

### Exercice 1 : Chiffrement RSA et Arithmétique (9 points)

Le système de chiffrement RSA repose sur la difficulté de factoriser de grands nombres premiers. On se propose d'étudier un exemple simplifié avec de petits nombres.

1. **Calcul préliminaire :**
   On choisit deux nombres premiers distincts $p = 3$ et $q = 11$.
   Calculer le module de chiffrement $n$ ainsi que l'indicatrice d'Euler $\phi(n) = (p-1)(q-1)$.

2. **Choix de la clé publique :**
   On choisit un exposant de chiffrement $e = 7$. Justifier que $e$ est premier avec $\phi(n)$. Quel est le couple constituant la clé publique ?

3. **Calcul de la clé privée :**
   L'exposant de déchiffrement $d$ est l'inverse de $e$ modulo $\phi(n)$, c'est-à-dire l'entier $d$ tel que $e \times d \equiv 1 \pmod{\phi(n)}$ avec $0 < d < \phi(n)$.
   Déterminer la valeur de $d$. (On pourra tester les valeurs successives de $d$).

4. **Chiffrement d'un message :**
   On souhaite chiffrer un message représenté par l'entier $m = 2$.
   Le message chiffré $c$ s'obtient par la formule $c = m^e \pmod n$.
   Calculer la valeur de $c$.

5. **Implémentation en Python :**
   Écrire une fonction Python `chiffrer(m, e, n)` qui prend en arguments le message $m$, la clé publique $e$ et le module $n$, et qui renvoie le message chiffré $c$. On pourra utiliser l'opérateur modulo `%` et l'exponentiation.

---

### Exercice 2 : Structures de données : Piles et Files (11 points)

Pour cet exercice, on s'intéresse à deux structures de données linéaires fondamentales : les **piles** (LIFO : *Last In, First Out*) et les **files** (FIFO : *First In, First Out*).

On dispose d'une classe Python `File` dont l'interface est la suivante :
- `File()` : crée une file vide.
- `est_vide()` : renvoie un booléen indiquant si la file est vide.
- `enfiler(element)` : ajoute l'élément à la fin de la file.
- `defiler()` : retire et renvoie l'élément situé au début de la file.
- `taille()` : renvoie le nombre d'éléments dans la file.

De même, on dispose d'une classe `Pile` avec l'interface classique :
- `Pile()` : crée une pile vide.
- `est_vide()` : renvoie un booléen indiquant si la pile est vide.
- `empiler(element)` : ajoute l'élément au sommet de la pile.
- `depiler()` : retire et renvoie l'élément situé au sommet de la pile.
- `taille()` : renvoie le nombre d'éléments dans la pile.

1. **Manipulation de base :**
   On considère une file `f` initialement vide sur laquelle on effectue la séquence d'opérations suivante :
   ```python
   f.enfiler(5)
   f.enfiler(8)
   x = f.defiler()
   f.enfiler(12)
   y = f.defiler()
   ```
   Quelles sont les valeurs des variables $x$ et $y$ ? Quel est l'état final de la file `f` ?

2. **Inverser une file à l'aide d'une pile :**
   Écrire une fonction en Python `inverser_file(f)` qui prend en paramètre une `File` `f` et qui renvoie une **nouvelle** `File` contenant les éléments de `f` mais dans l'ordre inverse. Vous utiliserez obligatoirement une structure de `Pile` intermédiaire.

3. **Complexité :**
   Quelle est la complexité en temps de la fonction `inverser_file` en fonction du nombre $N$ d'éléments de la file ? Justifiez brièvement.

4. **Implémentation d'une file avec deux piles :**
   On souhaite implémenter une structure de file en utilisant uniquement deux objets de type `Pile`, que l'on nommera `pile_entree` et `pile_sortie`.
   Expliquez textuellement comment réaliser l'opération `enfiler(element)` et l'opération `defiler()` selon cette stratégie.

---

## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

En tant qu'examinateur du Baccalauréat NSI, voici les points de vigilance majeurs pour évaluer ce sujet :

1. **Sur le Chiffrement RSA (Exercice 1) :**
   - **Piège classique :** Confondre l'indicatrice d'Euler $\phi(n) = (p-1)(q-1)$ avec le produit $p \times q$. Veillez à bien retrancher $1$ à chaque nombre premier.
   - **Justification de la coprimalité :** Deux nombres sont premiers entre eux si leur plus grand commun diviseur (PGCD) est égal à $1$. Pour $e=7$ et $\phi(n)=20$, $20 = 7 \times 2 + 6$, $7 = 6 \times 1 + 1$, donc le PGCD vaut $1$.
   - **Recherche de $d$ :** L'équation $7 \times d \equiv 1 \pmod{20}$ se résout mentalement ou par essais successifs : $7 \times 3 = 21 = 20 \times 1 + 1$, donc $d = 3$.

2. **Sur les Piles et Files (Exercice 2) :**
   - **Respect des interfaces :** Les correcteurs sanctionnent l'utilisation d'attributs internes (comme `.items` ou `.tableau`) si la consigne n'autorise que les méthodes officielles (`enfiler`, `defiler`, `empiler`, `depiler`, `est_vide`). Utilisez **uniquement** l'API fournie.
   - **Algorithmique des piles/files :** Pour inverser une file avec une pile, le passage par la pile inverse l'ordre FIFO en LIFO, puis un second transfert (ou un parcours judicieux) permet de retrouver la bonne structure.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction Exercice 1 : Chiffrement RSA (9 points)

1. **Calcul préliminaire :** *(1,5 point)*
   - Le module $n$ est le produit de $p$ et $q$ : 
     $$n = p \times q = 3 \times 11 = 33$$
   - L'indicatrice d'Euler $\phi(n)$ est donnée par la formule :
     $$\phi(n) = (p-1)(q-1) = (3-1)(11-1) = 2 \times 10 = 20$$
   *(0,75 pt pour $n$, 0,75 pt pour $\phi(n)$)*.

2. **Choix de la clé publique :** *(1,5 point)*
   - On vérifie que $e = 7$ est premier avec $\phi(n) = 20$. 
     Les diviseurs de $7$ sont $1$ et $7$. $7$ ne divise pas $20$. Leurs seuls facteurs communs est $1$ (ou $\text{PGCD}(7, 20) = 1$). $e$ est donc bien premier avec $\phi(n)$.
   - La clé publique est le couple $(e, n)$, soit **$(7, 33)$**.
   *(0,75 pt pour la justification, 0,75 pt pour le couple)*.

3. **Calcul de la clé privée :** *(2 points)*
   - On cherche $d$ tel que $7 \times d \equiv 1 \pmod{20}$ avec $0 < d < 20$.
   - Testons les valeurs :
     - Si $d = 1$, $7 \times 1 = 7 \equiv 7 \pmod{20}$
     - Si $d = 2$, $7 \times 2 = 14 \equiv 14 \pmod{20}$
     - Si $d = 3$, $7 \times 3 = 21 = 20 \times 1 + 1 \equiv 1 \pmod{20}$
   - La valeur de l'exposant de déchiffrement est donc **$d = 3$**.
   *(2 points pour la méthode et le résultat explicité)*.

4. **Chiffrement d'un message :** *(2 points)*
   - La formule du chiffré est $c = m^e \pmod n$.
   - Avec $m = 2$, $e = 7$ et $n = 33$ :
     $$c = 2^7 \pmod{33}$$
     $$2^7 = 128$$
     Division euclidienne de $128$ par $33$ : $128 = 3 \times 33 + 29$ (car $3 \times 33 = 99$, $128 - 99 = 29$).
   - Le message chiffré est **$c = 29$**.
   *(1 pt pour l'application numérique, 1 pt pour le calcul du modulo)*.

5. **Implémentation en Python :** *(2 points)*
   ```python
   def chiffrer(m, e, n):
       """Renvoie le message chiffre c a partir de m, e et n."""
       return (m ** e) % n
   ```
   *(1 pt pour la signature et la structure, 1 pt pour l'utilisation correcte de l'exponentiation et du modulo)*.

---

### Correction Exercice 2 : Structures de données (11 points)

1. **Manipulation de base :** *(3 points)*
   - Initialisation : `f` est vide.
   - `f.enfiler(5)` $\rightarrow$ File : `[5]`
   - `f.enfiler(8)` $\rightarrow$ File : `[5, 8]`
   - `x = f.defiler()` $\rightarrow$ Retire le premier élément (`5`). Variable **$x = 5$**. File : `[8]`
   - `f.enfiler(12)` $\rightarrow$ File : `[8, 12]`
   - `y = f.defiler()` $\rightarrow$ Retire le premier élément (`8`). Variable **$y = 8$**. File : `[12]`
   - **État final de la file `f`** : contient l'élément `[12]`.
   *(1 pt pour $x$, 1 pt pour $y$, 1 pt pour l'état final de la file)*.

2. **Inverser une file à l'aide d'une pile :** *(4 points)*
   ```python
   def inverser_file(f):
       p = Pile()
       f_temp = File() # Pour stocker temporairement si on veut vider f sans la perdre
       # On recopie f dans f_temp tout en empilant les elements
       while not f.est_vide():
           val = f.defiler()
           p.empiler(val)
           f_temp.enfiler(val)
       
       # On restitue f_temp a f pour ne pas corrompre l'argument d'origine
       while not f_temp.est_vide():
           f.enfiler(f_temp.defiler())
           
       # On cree la nouvelle file inversee
       f_inverse = File()
       while not p.est_vide():
           f_inverse.enfiler(p.depiler())
           
       return f_inverse
   ```
   *(Acceptation d'autres variantes valides respectant l'encapsulation).*
   *(2 pts pour l'utilisation correcte de la pile pour inverser l'ordre, 1 pt pour la gestion de la file de départ, 1 pt pour la création et le renvoi de la nouvelle file).*

3. **Complexité :** *(2 points)*
   - La complexité en temps est **linéaire**, soit **$\mathcal{O}(N)$**, où $N$ est le nombre d'éléments de la file.
   - **Justification :** Chaque élément de la file est défilé, empilé, dédepilé et enfilé un nombre constant de fois (parcours séquentiels indépendants de la taille imbriquée, pas de boucles imbriquées dépendant de $N$).
   *(1 pt pour la notation $\mathcal{O}(N)$, 1 pt pour la justification claire)*.

4. **Implémentation d'une file avec deux piles :** *(2 points)*
   - **Opération `enfiler(element)` :** On empile systématiquement l'élément entrant dans `pile_entree`. (Complexité $\mathcal{O}(1)$).
   - **Opération `defiler()` :** 
     - Si `pile_sortie` n'est pas vide, on dépile directement son sommet (qui correspond au premier élément entré, grâce à la double inversion).
     - Si `pile_sortie` est vide, on transvase tous les éléments de `pile_entree` vers `pile_sortie` en les dépilant un par un de `pile_entree` pour les empiler dans `pile_sortie`. Ensuite, on dépile le sommet de `pile_sortie`.
   *(1 pt pour la stratégie de l'enfilage, 1 pt pour la gestion du transvasement lors du défilage).*