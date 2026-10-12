---
title: "Exercice : Algorithmes de tri"
description: "Démonstration appliquée : Classement des joueurs (Système Elo sur Valorant)"
---

### 🌐 Contexte

Dans les jeux vidéo compétitifs contemporains comme *Valorant*, le système d'appariement (*matchmaking*) repose sur un score de compétence appelé **Elo** (ou *MMR* pour *Matchmaking Rating*). À la fin de chaque acte compétitif, le jeu doit établir le tableau d'honneur des meilleurs joueurs d'un serveur (le rang *Radiant*).

Pour afficher ce classement en temps réel ou ordonner les participants d'un tournoi e-sport, les serveurs exécutent des algorithmes de tri. En classe de Première NSI, deux algorithmes de référence sont au programme : le **tri par sélection** et le **tri par insertion**. 

On modélise un groupe de joueurs par une liste de dictionnaires Python, où chaque dictionnaire contient le pseudo du joueur et son score Elo actuel :

```python
joueurs = [
    {"pseudo": "Jett_99", "elo": 1420},
    {"pseudo": "SovaArrow", "elo": 1650},
    {"pseudo": "ViperMain", "elo": 1210},
    {"pseudo": "ReynaGod", "elo": 1580},
    {"pseudo": "OmenTP", "elo": 1340}
]
```

L'objectif est d'ordonner ces joueurs par **ordre décroissant** de score Elo (du plus haut au plus bas score).

---

### ❓ Énoncé

#### Question 1 : Tracé d'exécution (Tri par sélection)
On applique l'algorithme du **tri par sélection** pour ordonner la liste des scores suivante par ordre décroissant :  
$$L = [1420, 1650, 1210, 1580, 1340]$$

Donner l'état de la liste $L$ à la fin de chaque étape de la boucle principale (après chaque échange). Préciser à chaque tour la valeur maximale recherchée dans la partie non encore triée.

#### Question 2 : Implémentation en Python (Tri par insertion)
Le serveur reçoit régulièrement de nouveaux joueurs et préfère utiliser le **tri par insertion**, particulièrement efficace lorsque les données arrivent au fil de l'eau.

Écrire une fonction Python `tri_insertion_elo(tab)` qui prend en paramètre une liste de dictionnaires `tab` (structurée comme dans le contexte) et qui la trie **en place** par ordre **décroissant** selon la clé `'elo'`. La fonction ne renvoie rien (`None`) car elle modifie directement la liste passée en argument.

#### Question 3 : Invariant de boucle et correction
Pour prouver la correction du tri par insertion, on définit la propriété suivante à l'étape $i$ de la boucle principale :  
$$\mathcal{P}(i) : \text{« Le sous-tableau } tab[0 \dots i-1] \text{ contient les mêmes éléments qu'au départ, rangés par ordre décroissant. »}$$

1. Démontrer l'étape d'**initialisation** (pour $i = 1$).
2. Expliquer brièvement pourquoi l'étape de **conservation** est vérifiée lors de l'insertion de l'élément d'indice $i$.
3. Conclure sur la **terminaison** de l'algorithme lorsque la boucle s'achève pour un tableau de taille $N$.

#### Question 4 : Analyse de complexité et passage à l'échelle
1. Déterminer le nombre d'opérations élémentaires (comparaisons) effectuées par le tri par sélection dans le pire des cas pour une liste de taille $N$. Exprimer ce résultat sous la forme d'un ordre de grandeur en notation grand O : $\mathcal{O}(\dots)$.
2. Si le serveur de jeu doit classer instantanément $N = 100\,000$ joueurs, justifier pourquoi les algorithmes de tri vus en Première ne sont plus adaptés en pratique.

---

### 💡 Indice

* Pour un tri **décroissant**, le tri par sélection cherche le **maximum** (et non le minimum) parmi les éléments restants pour le placer au début.
* Pour le tri par insertion, la clé de comparaison est `tab[j]['elo']`. Pensez à décaler les éléments plus petits vers la droite tant que la valeur à insérer est strictement supérieure.
* Le nombre de comparaisons pour une boucle imbriquée classique est donné par la somme arithmétique :
$$\sum_{k=1}^{N-1} k = 1 + 2 + \dots + (N-1) = \frac{N(N-1)}{2}$$

---

### 📋 Correction détaillée

#### Question 1 : Tracé du tri par sélection (ordre décroissant)
Soit la liste initiale : $L = [1420, 1650, 1210, 1580, 1340]$ de taille $N = 5$.

* **Étape 1 ($i = 0$) :** On cherche le maximum entre les indices $0$ et $4$. Le maximum est $1650$ (indice $1$). On échange $L[0]$ et $L[1]$.  
  $$\rightarrow L = [1650, 1420, 1210, 1580, 1340]$$
* **Étape 2 ($i = 1$) :** On cherche le maximum entre les indices $1$ et $4$. Le maximum est $1580$ (indice $3$). On échange $L[1]$ et $L[3]$.  
  $$\rightarrow L = [1650, 1580, 1210, 1420, 1340]$$
* **Étape 3 ($i = 2$) :** On cherche le maximum entre les indices $2$ et $4$. Le maximum est $1420$ (indice $3$). On échange $L[2]$ et $L[3]$.  
  $$\rightarrow L = [1650, 1580, 1420, 1210, 1340]$$
* **Étape 4 ($i = 3$) :** On cherche le maximum entre les indices $3$ et $4$. Le maximum est $1340$ (indice $4$). On échange $L[3]$ et $L[4]$.  
  $$\rightarrow L = [1650, 1580, 1420, 1340, 1210]$$

Le dernier élément est obligatoirement à sa place. Le tableau est entièrement trié en $N-1 = 4$ étapes.

---

#### Question 2 : Implémentation du tri par insertion en Python

```python
def tri_insertion_elo(tab):
    """
    Trie en place la liste de dictionnaires 'tab' 
    par ordre décroissant de la valeur associée à la clé 'elo'.
    """
    n = len(tab)
    for i in range(1, n):
        element_a_inserer = tab[i]
        j = i - 1
        
        # Pour un ordre décroissant, on décale les éléments
        # dont le score 'elo' est strictement INFÉRIEUR à celui à insérer
        while j >= 0 and tab[j]["elo"] < element_a_inserer["elo"]:
            tab[j + 1] = tab[j]
            j = j - 1
            
        tab[j + 1] = element_a_inserer
```

---

#### Question 3 : Invariant de boucle et correction

1. **Initialisation ($i = 1$) :**  
   Avant d'exécuter la boucle pour $i = 1$, le sous-tableau considéré est $tab[0 \dots 0]$, constitué uniquement du premier élément. Un tableau à un seul élément est trivialement trié. La propriété $\mathcal{P}(1)$ est donc **vraie**.

2. **Conservation :**  
   Supposons qu'au début d'un tour de boucle, le sous-tableau $tab[0 \dots i-1]$ soit trié de manière décroissante.  
   L'algorithme mémorise la valeur de $tab[i]$ dans `element_a_inserer`, puis décale vers la droite tous les éléments de $tab[0 \dots i-1]$ qui sont strictement plus petits que cette valeur.  
   L'élément est ensuite inséré à l'indice $j+1$ libre.  
   Tous les éléments situés à gauche de $j+1$ sont supérieurs ou égaux à l'élément inséré, et tous ceux situés à droite sont inférieurs ou égaux. Le sous-tableau $tab[0 \dots i]$ est donc ordonné de manière décroissante et contient les mêmes éléments qu'au départ. $\mathcal{P}(i+1)$ est vérifiée.

3. **Terminaison :**  
   La boucle `for` s'arrête lorsque l'indice $i$ atteint $N$. Par conséquent, à la sortie de l'algorithme, la propriété $\mathcal{P}(N)$ assure que le sous-tableau $tab[0 \dots N-1]$ (c'est-à-dire l'ensemble du tableau) est trié par ordre décroissant. L'algorithme est correct.

---

#### Question 4 : Complexité et passage à l'échelle

1. **Calcul de complexité du tri par sélection :**  
   Pour un tableau de taille $N$, l'algorithme compare :
   * $N-1$ éléments au premier tour,
   * $N-2$ éléments au deuxième tour,
   * $\dots$
   * $1$ comparaison au dernier tour.

   Le nombre total de comparaisons $C(N)$ est :
   $$C(N) = (N-1) + (N-2) + \dots + 1 = \sum_{k=1}^{N-1} k = \frac{N(N-1)}{2} = \frac{1}{2}N^2 - \frac{1}{2}N$$

   Le terme prépondérant étant proportionnel à $N^2$, la complexité temporelle est **quadratique** :
   $$\mathcal{O}(N^2)$$

2. **Passage à l'échelle ($N = 100\,000$) :**  
   Avec $N = 10^5$, le nombre d'opérations à effectuer est de l'ordre de :
   $$N^2 = (10^5)^2 = 10^{10} \text{ opérations}$$

   Même sur un processeur récent capable d'exécuter environ $10^8$ à $10^9$ opérations de base par seconde, un tel calcul prendrait plusieurs dizaines de secondes, ce qui est incompatible avec la réactivité requise pour un serveur multijoueur.  
   Pour des volumes de données importants, les systèmes réels utilisent des algorithmes plus performants de complexité quasi-linéaire $\mathcal{O}(N \log N)$ (comme le tri fusion ou Timsort, étudiés en classe de Terminale).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
