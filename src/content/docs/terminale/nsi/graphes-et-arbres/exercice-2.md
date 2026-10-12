---
title: "Exercice 2 : Modélisation des réseaux sociaux"
description: "Application pratique du chapitre Structures hiérarchiques : Arbres et Graphes"
---

### 🌐 Contexte concret

Dans le cadre de l'étude des plateformes web en Numérique et Sciences Informatiques (NSI), les réseaux sociaux sont naturellement modélisés à l'aide de **graphes**. 

Soit un réseau social représenté par un graphe $G = (V, E)$, où :
- L'ensemble des sommets $V$ représente les utilisateurs (notés de $A$ à $F$).
- L'ensemble des arêtes $E$ représente les relations d'amitié (considérées comme non orientées et mutuelles).

On donne la liste d'adjacence suivante qui modélise le réseau :
```python
reseau = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}
```

---

### ❓ Énoncé

1. **Représentation et vocabulaire :** Dessinez mentalement le graphe ou décrivez sa structure. Quel est le degré de l'utilisateur $B$ ? Que représente ce degré dans le contexte du réseau social ?
2. **Implémentation en Python :** Écrivez une fonction Python `amis_communs(graphe, utilisateur1, utilisateur2)` qui prend en paramètre le dictionnaire représentant le graphe et deux utilisateurs (chaînes de caractères), et qui retourne la liste des amis qu'ils ont en commun.
3. **Exploration (Parcours) :** En partant de l'utilisateur $A$, donnez l'ordre de visite des sommets lors d'un parcours en largeur (BFS - *Breadth-First Search*), en supposant que l'on trie les voisins par ordre alphabétique en cas d'égalité.
4. **Algorithmique avancée :** On souhaite mesurer l'influence d'un utilisateur en calculant la distance maximale entre cet utilisateur et n'importe quel autre membre du réseau (excentricité). Écrivez une fonction utilisant un parcours pour trouver la distance la plus courte entre deux utilisateurs $u$ et $v$.

---

### 💡 Indice

- **Question 1 :** Le degré d'un sommet correspond au nombre d'arêtes qui y sont connectées. Dans un dictionnaire, c'est simplement la longueur de la liste associée à la clé.
- **Question 2 :** Pensez aux opérations sur les ensembles (*sets* en Python) ou à une compréhension de liste pour trouver l'intersection des listes d'amis des deux utilisateurs.
- **Question 3 :** Le parcours en largeur utilise une **file** (structure FIFO : *First In, First Out*). N'oubliez pas de marquer les sommets visités pour éviter les boucles.
- **Question 4 :** La plus courte distance entre deux sommets dans un graphe non pondéré se calcule efficacement à l'aide d'un parcours en largeur (BFS), car chaque niveau représente un incrément de distance de $1$.

---

### 📋 Correction détaillée pas à pas

#### 1. Représentation et vocabulaire
L'utilisateur $B$ est relié aux sommets $A$, $D$ et $E$ (comme le montre la liste `['A', 'D', 'E']`). 
- Le **degré** de $B$ est donc $\text{deg}(B) = 3$.
- **Interprétation :** Dans ce réseau social, cela signifie que l'utilisateur $B$ possède $3$ amis connectés directement sur la plateforme.

---

#### 2. Implémentation en Python (Amis communs)
Pour trouver les amis communs, il suffit de récupérer la liste des amis de chaque utilisateur et de trouver leur intersection. L'utilisation des types `set` en Python est idéale ici.

```python
def amis_communs(graphe, utilisateur1, utilisateur2):
    # Conversion des listes d'amis en ensembles (sets)
    amis_1 = set(graphe[utilisateur1])
    amis_2 = set(graphe[utilisateur2])
    
    # Intersection des deux ensembles
    return list(amis_1.intersection(amis_2))

# Exemple d'utilisation :
# amis_communs(reseau, 'A', 'E') -> retourne ['B'] car B est ami avec A et E.
```

---

#### 3. Exploration par parcours en largeur (BFS)
Appliquons un parcours en largeur (BFS) à partir de $A$, en alphabetisant les voisins :
- **File :** `['A']` | **Visités :** `{'A'}`
- On retire $A$. Ses voisins sont $B$ et $C$.
  - **File :** `['B', 'C']` | **Visités :** `{'A', 'B', 'C'}`
- On retire $B$. Ses voisins sont $A$ (déjà visité), $D$ et $E$.
  - **File :** `['C', 'D', 'E']` | **Visités :** `{'A', 'B', 'C', 'D', 'E'}`
- On retire $C$. Ses voisins sont $A$ (visité) et $F$.
  - **File :** `['D', 'E', 'F']` | **Visités :** `{'A', 'B', 'C', 'D', 'E', 'F'}`
- On retire $D, E, F$ (leurs voisins sont déjà tous visités).

**Ordre de visite :** $A \rightarrow B \rightarrow C \rightarrow D \rightarrow E \rightarrow F$

---

#### 4. Calcul de la plus courte distance (BFS)
Le BFS permet de trouver le chemin le plus court en nombre d'arêtes dans un graphe non pondéré. On stocke la distance dans une structure adaptée (ou un dictionnaire).

```python
from collections import deque

def plus_courte_distance(graphe, depart, arrivee):
    if depart == arrivee:
        return 0
        
    file = deque([(depart, 0)])  # Stocke un tuple (sommet, distance)
    visites = {depart}
    
    while file:
        sommet_actuel, distance = file.popleft()
        
        for voisin in graphe[sommet_actuel]:
            if voisin == arrivee:
                return distance + 1
            if voisin not in visites:
                visites.add(voisin)
                file.append((voisin, distance + 1))
                
    return -1  # Si aucun chemin n'existe
```

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
