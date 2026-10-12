---
title: "Cours : Structures hiérarchiques : Arbres et Graphes"
description: "Synthèse officielle du cours et formules essentielles."
---

## 📌 1. Notions clés & Définitions

Dans le programme de NSI de Terminale, les structures de données non linéaires permettent de modéliser des relations complexes entre des objets.

### 🌳 Les Arbres (Trees)
Un **arbre** est une structure hiérarchique constituée de nœuds.
*   **Nœud racine** : L'unique nœud d'où part l'arbre (sans parent).
*   **Nœud interne** : Nœud possédant au moins un enfant.
*   **Feuille (nœud externe)** : Nœud ne possédant aucun enfant.
*   **Arbre binaire** : Arbre dans lequel chaque nœud possède au maximum deux enfants, généralement appelés *fils gauche* et *fils droit*.
*   **Arbre binaire de recherche (ABR)** : Arbre binaire vérifiant la propriété : pour tout nœud, les clés du sous-arbre gauche sont strictement inférieures à la clé du nœud, et celles du sous-arbre droit sont supérieures ou égales.

### 🕸️ Les Graphes (Graphs)
Un **graphe** est un ensemble de sommets (ou nœuds) reliés par des arêtes (graphe non orienté) ou des arcs (graphe orienté).
*   **Sommet (vertex)** : Entité de base du graphe.
*   **Arête / Arc** : Connexion entre deux sommets (avec un coût/poids optionnel dans un graphe pondéré).
*   **Chemin** : Suite de sommets adjacents.
*   **Cycle** : Chemin dont le sommet de départ et d'arrivée sont confondus.
*   **Représentation en Python** : 
    *   Matrice d'adjacence ($M[i][j]$ indique s'il y a un lien entre $i$ et $j$).
    *   Liste d'adjacence (dictionnaire associant à chaque sommet la liste de ses voisins).

---

## 📐 2. Formules et Propriétés fondamentales

### Pour les Arbres Binaires :
*   **Taille** d'un arbre (nombre de nœuds) :
    $$\text{taille}(A) = 1 + \text{taille}(\text{fils\_gauche}) + \text{taille}(\text{fils\_droit})$$
*   **Hauteur** $h$ d'un arbre (longueur du plus long chemin de la racine à une feuille) :
    $$\text{hauteur}(A) = 1 + \max(\text{hauteur}(\text{fils\_gauche}), \text{hauteur}(\text{fils\_droit}))$$
    *(Par convention, un arbre vide a une hauteur de $-1$ ou $0$ selon les sources, un arbre réduit à un seul nœud a une hauteur de $0$)*.
*   **Nombre de nœuds d'un arbre binaire parfait de hauteur $h$** :
    $$N = 2^{h+1} - 1$$
*   **Complexité des opérations sur un ABR équilibré** : 
    Recherche, insertion et suppression en $\mathcal{O}(\log_2 N)$. Si l'ABR est filiforme (dégénéré), la complexité pire des cas tombe à $\mathcal{O}(N)$.

### Pour les Graphes :
*   Dans un graphe non orienté, la somme des degrés de tous les sommets est égale à deux fois le nombre d'arêtes :
    $$\sum_{v \in V} \text{deg}(v) = 2 \times |E|$$
*   **Parcours en largeur (BFS - Breadth-First Search)** : Utilise une **file** (FIFO). Permet de trouver le plus court chemin dans un graphe non pondéré.
*   **Parcours en profondeur (DFS - Depth-First Search)** : Utilise une **pile** (LIFO) ou la récursivité.
*   **Algorithme de Dijkstra** : Permet de trouver les plus plus courts chemins depuis une source dans un graphe à poids positif. Complexité avec une file de priorité : $\mathcal{O}((V + E) \log V)$.

---

## 💡 3. Exemple d'application résolu (Pas à pas)

**Problème :** Écrire une fonction récursive en Python qui calcule la taille d'un arbre binaire représenté par une classe `Noeud`.

### Code Python :
```python
class Noeud:
    def __init__(self, valeur, gauche=None, droit=None):
        self.valeur = valeur
        self.gauche = gauche
        self.droit = droit

def taille(arbre):
    # Cas de base : si l'arbre est vide, sa taille est 0
    if arbre is None:
        return 0
    # Cas récursif : 1 (la racine) + taille(gauche) + taille(droit)
    return 1 + taille(arbre.gauche) + taille(arbre.droit)
```

### Explication pas à pas :
1.  **Condition d'arrêt (Base case)** : Si le nœud transmis est `None`, la fonction retourne $0$. Cela évite les erreurs de type `AttributeError`.
2.  **Étape récursive** : Si le nœud existe, il compte pour $1$. On ajoute ensuite la taille de son sous-arbre gauche (en appelant récursivement la fonction) et la taille de son sous-arbre droit.
3.  **Remontée** : La pile d'appels se dépile en sommant les résultats de chaque sous-arbre jusqu'à obtenir la taille totale.

---

## ⚠️ 4. Pièges fréquents & Conseils pour les examens

1.  **Attention à la récursivité infinie sur les graphes !**
    *   *Piège* : Contrairement aux arbres qui n'ont pas de cycles, un graphe peut en contenir. Si vous écrivez un parcours DFS sur un graphe sans marquer les sommets visités (`visite`), votre programme plantera par dépassement de pile (`RecursionError`).
    *   *Conseil* : Maintenez toujours un ensemble (`set`) ou un tableau `visite` des sommets déjà explorés.
2.  **Hauteur vs Taille d'un arbre :**
    *   Ne confondez pas le nombre de nœuds (**taille**) et le nombre d'arêtes du plus long chemin (**hauteur**). Un arbre à un seul nœud a une taille de $1$ et une hauteur de $0$.
3.  **Complexité de l'ABR :**
    *   Ne dites jamais qu'un ABR garantit une recherche en $\mathcal{O}(\log N)$. C'est vrai *uniquement* s'il est équilibré. S'il est déséquilibré (ex: construit à partir d'une liste triée), sa complexité est $\mathcal{O}(N)$.
4.  **Vocabulaire des graphes :**
    *   Soyez rigoureux entre graphe *orienté* (arcs, prédécesseurs/successeurs) et *non orienté* (arêtes, voisins).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
