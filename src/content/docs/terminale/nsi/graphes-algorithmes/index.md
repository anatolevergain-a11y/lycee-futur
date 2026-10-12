---
title: "Cours : Algorithmique sur les graphes"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Un graphe est une structure de donnees abstraite permettant de modeliser des reseaux, des relations ou des deplacements. Il est constitue d'entites et de liaisons entre ces entites.

*   **Graphe ($G = (V, E)$)** : Un graphe est un couple forme d'un ensemble $V$ (de l'anglais *Vertices*, appele l'ensemble des **sommets**) et d'un ensemble $E$ (de l'anglais *Edges*, appele l'ensemble des **aretes** ou des **arcs**).
*   **Graphe non oriente** : Les aretes n'ont pas de direction. Si une arete relie le sommet $u$ au sommet $v$, elle permet de circuler dans les deux sens ($u \leftrightarrow v$).
*   **Graphe oriente** : Les aretes, appelees **arcs**, possedent une direction. Un arc va d'un sommet source vers un sommet destination ($u \to v$).
*   **Graphe pondere (ou comble)** : Un poids (ou un cout, une distance) est associe a chaque arete ou arc.
*   **Ordre du graphe** : Il correspond au nombre de sommets, note $N = |V|$.
*   **Taille du graphe** : Il correspond au nombre d'aretes ou d'arcs, note $M = |E|$.
*   **Voisinage** : Dans un graphe non oriente, un sommet $v$ est un voisin de $u$ s'il existe une arete entre $u$ et $v$. L'ensemble des voisins d'un sommet $u$ est note $N(u)$.
*   **Degre d'un sommet** : Dans un graphe non oriente, c'est le nombre de voisins de ce sommet (ou le nombre d'aretes incidentes a ce sommet). Dans un graphe oriente, on distingue le **degre entrant** (nombre d'arcs arrivant au sommet) et le **degre sortant** (nombre d'arcs quittant le sommet).
*   **Chemin et Chaine** : 
    *   Une **chaine** est une suite de sommets relies par des aretes (dans un graphe non oriente).
    *   Un **chemin** est une suite de sommets relies par des arcs (dans un graphe oriente).
    *   La **longueur** d'un chemin ou d'une chaine correspond au nombre d'aretes (ou arcs) qui le composent (ou a la somme des poids dans le cas d'un graphe pondere).
*   **Cycle** : Un chemin (ou une chaine) dont le sommet de depart et le sommet d'arrivee sont identiques.
*   **Connexite** : Un graphe non oriente est dit **connexe** s'il existe un chemin entre toute paire de sommets distincts.

---

## 📐 2. Formules et Propriétés fondamentales

### Représentations en mémoire

1.  **Matrice d'adjacence ($M$)** :
    Pour un graphe de $N$ sommets, c'est une matrice carre de taille $N \times N$ telle que :
    $$M[i][j] = 
    \begin{cases} 
    1 \text{ (ou le poids)} & \text{s'il existe une arete/arc de } i \text{ a } j \\ 
    0 & \text{sinon} 
    \end{cases}$$
    *   **Propriete** : La matrice d'adjacence d'un graphe non oriente est symetrique par rapport a sa diagonale principale.

2.  **Liste d'adjacence** :
    Chaque sommet est associe a la liste de ses voisins (ou des sommets accessibles directement par un arc). En Python, cela se modelise generalement par un dictionnaire dont les cles sont les sommets et les valeurs sont des listes (ou ensembles) de sommets adjacents.

### Algorithmes fondamentaux

*   **Parcours en largeur ($BFS$ - *Breadth-First Search*)** :
    *   Explore le graphe niveau par niveau en s'eloignant progressivement du sommet de depart.
    *   Utilise une structure de donnees de type **file** (FIFO : *First In, First Out*).
    *   Permet de trouver le plus court chemin (en nombre d'aretes) dans un graphe non pondere.
    *   **Complexite temporelle** : $\mathcal{O}(V + E)$ avec une liste d'adjacence.

*   **Parcours en profondeur ($DFS$ - *Depth-First Search*)** :
    *   Explore le graphe en allant le plus loin possible le long d'une branche avant de retrograder (*backtracking*).
    *   Utilise une structure de donnees de type **pile** (LIFO : *Last In, First Out*) ou la pile d'appels de la recursion.
    *   Permet de detecter des cycles ou de determiner les composantes connexes.
    *   **Complexite temporelle** : $\mathcal{O}(V + E)$ avec une liste d'adjacence.

*   **Recherche de chemins (Dijkstra)** :
    *   Permet de trouver le plus court chemin d'un sommet source vers tous les autres sommets dans un graphe pondere **ne comportant pas de poids negatif**.
    *   Utilise une file de priorite.
    *   **Complexite temporelle** : $\mathcal{O}((V + E) \log V)$ en utilisant un tas min.

---

## 💡 3. Exemple d'application résolu

**Problématique :**
On considere un graphe non oriente represente par sa liste d'adjacence en Python. Ecrire une fonction implementant le parcours en largeur pour determiner si un sommet cible est accessible depuis un sommet de depart.

**Code Python :**

```python
from collections import deque

def est_accessible(graphe, depart, cible):
    """
    Determine si la cible est accessible depuis le depart 
    via un parcours en largeur (BFS).
    """
    if depart == cible:
        return True
        
    file = deque([depart])
    visites = {depart}
    
    while len(file) > 0:
        courant = file.popleft()
        
        if courant == cible:
            return True
            
        for voisin in graphe[courant]:
            if voisin not in visites:
                visites.add(voisin)
                file.append(voisin)
                
    return False

# Exemple de graphe sous forme de liste d'adjacence
mon_graphe = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Test de la fonction
resultat = est_accessible(mon_graphe, 'A', 'F')
print(resultat)  # Affiche True
```

**Explication de la resolution :**
1. On initialise une file avec le sommet de depart et un ensemble de sommets visites pour eviter les boucles infinies (visites multiples).
2. Tant que la file n'est pas vide, on retire le premier element (`popleft`).
3. Si cet element est la cible, on retourne `True`.
4. Sinon, on parcourt tous ses voisins non visites, on les marque comme visites et on les ajoute a la fin de la file.
5. Si la file est vide sans avoir trouve la cible, cela signifie que le sommet n'est pas accessible, on retourne `False`.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Oubli de l'ensemble des sommets visites :** C'est l'erreur classique en algorithmique des graphes. Sans marquage des sommets dejà visites, un graphe contenant un cycle entrainera une **boucle infinie** et un depassement de pile (*stack overflow*) en recursif.
*   **Confusion entre Matrice et Liste d'adjacence :** Veillez a bien adapter la complexite de vos algorithmes. Pour un graphe parseme (peu d'aretes), la liste d'adjacence est preferable en memoire ($\mathcal{O}(V + E)$) contrairement a la matrice d'adjacence qui coute systematiquement $\mathcal{O}(V^2)$.
*   **Algorithme de Dijkstra et poids negatifs :** Rappelez-vous que l'algorithme de Dijkstra **ne fonctionne pas** si le graphe contient des aretes a poids negatif. Un contre-exemple peut vous etre demande le jour de l'evaluation.
*   **Sens des arcs dans un graphe oriente :** Lors de l'ecriture des voisins, assurez-vous de respecter la direction des arcs $u \to v$ (le voisin $v$ doit etre accessible depuis $u$, mais la reciproque n'est pas vraie).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
