---
title: "Exercice 2 : Algorithme de Dijkstra pour la recherche du plus court chemin"
description: "Application pratique du chapitre Algorithmique sur les graphes"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'optimisation des réseaux de télécommunications maillés, la modélisation topologique est généralement représentée par un graphe pondéré orienté $G = (S, A)$, où $S$ désigne l'ensemble des sommets (les routeurs) et $A$ l'ensemble des arcs (les liaisons physiques). Chaque arc $e = (u, v) gère un poids $w(e) \in \mathbb{R}^{*+}$ représentant la métrique de coût, calculée ici en millisecondes ($\text{ms}$) pour quantifier la latence de propagation du signal.

Considérons un sous-réseau critique composé de $5$ routeurs identifiés par l'ensemble $S = \{A, B, C, D, E\}$. Les mesures empiriques de la latence entre ces différents nœuds sont répertoriées dans la matrice des coûts d'adjacence du système. Le routeur $A$ est défini comme la source ($\text{SRC}$) pour l'acheminement des paquets de données vers le routeur cible $E$ ($\text{DST}$).

Afin d'évaluer la robustesse du protocole, nous formalisons le graphe par les listes d'adjacence pondérées suivantes :
- $A \to (B, 4\text{ ms}), (C, 2\text{ ms})$
- $B \to (C, 1\text{ ms}), (D, 5\text{ ms})$
- $C \to (B, 3\text{ ms}), (D, 8\text{ ms}), (E, 10\text{ ms})$
- $D \to (E, 2\text{ ms})$
- $E \to \emptyset$

Il est important de noter que ces poids de latence sont basés sur des moyennes temporelles observées sur une fenêtre glissante de $60 \text{ s}$. Par conséquent, ils ne prennent pas en compte les micro-congestions instantanées, introduisant une incertitude inhérente au modèle théorique face à la réalité dynamique du réseau.

---

### ❓ Énoncé

1. **Formalisation et Représentation :** Proposer une représentation en Python de ce graphe sous forme de dictionnaire de dictionnaires, où les clés sont les sommets et les valeurs associées sont des dictionnaires des voisins et de leurs poids respectifs.

2. **Application algorithmique :** Appliquer manuellement l'algorithme de Dijkstra pour déterminer le chemin minimisant la latence totale du sommet $A$ vers tous les autres sommets du graphe. On formalisera la démarche en dressant un tableau d'avancement rigoureux (comprenant les colonnes : *Étape*, *Sommet courant*, *Distances minimales provisoires/définitives*, et *Prédécesseurs*).

3. **Analyse de complexité :** En considérant un graphe général d'ordre $V = |S|$ (nombre de sommets) et de taille $E = |A|$ (nombre d'arcs), rappelez la complexité temporelle de l'algorithme de Dijkstra selon le type de structure de données utilisé pour implémenter la file de priorité (tableau non ordonné versus tas min). Discutez de l'impact de ce choix pour un réseau à grande échelle où $V \gg 10^5$.

4. **Esprit critique et Limites du modèle :** Le modèle mathématique suppose que les poids $w(e)$ sont statiques et strictement positifs ($\forall e \in A, w(e) > 0$). Que se passerait-il si une liaison subissait une perturbation dynamique provoquant un poids négatif (par exemple, un mécanisme de compensation de charge instable) ? Justifiez la limite théorique de l'algorithme de Dijkstra dans ce cas précis.

---

### 💡 Indice de méthode

- **Pour la question 2 :** Veillez à bien maintenir un ensemble (ou une liste) des sommets visités afin de ne pas retraiter un sommet dont la distance minimale est déjà définitivement fixée. À chaque étape, sélectionnez le sommet non visité possédant la distance provisoire minimale.
- **Pour la question 4 :** Rappelez l'hypothèse fondamentale de la *propriété de sous-structure optimale* gloutonne inhérente à l'algorithme de Dijkstra : un chemin le plus court ne peut être étendu par des arêtes de poids négatif sans invalider l'hypothèse de non-décroissance monotone des distances validées.

---

### 📋 Correction détaillée pas à pas

#### 1. Représentation en Python

```python
graphe = {
    'A': {'B': 4, 'C': 2},
    'B': {'C': 1, 'D': 5},
    'C': {'B': 3, 'D': 8, 'E': 10},
    'D': {'E': 2},
    'E': {}
}
```

#### 2. Tableau d'avancement de l'algorithme de Dijkstra

Initialisation : $\text{Dist}(A) = 0\text{ ms}$, et pour tout autre sommet $s \neq A$, $\text{Dist}(s) = +\infty$.

| Étape | Sommet sélectionné | Visités | $\text{Dist}(A)$ | $\text{Dist}(B)$ | $\text{Dist}(C)$ | $\text{Dist}(D)$ | $\text{Dist}(E)$ | Prédécesseurs |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | - | $\emptyset$ | $0$ | $+\infty$ | $+\infty$ | $+\infty$ | $+\infty$ | $\text{Init}$ |
| 1 | $A$ | $\{A\}$ | $0$ | $4$ | $2$ | $+\infty$ | $+\infty$ | $B \leftarrow A, C \leftarrow A$ |
| 2 | $C$ | $\{A, C\}$ | $0$ | $\min(4, 2+3) = 4$ | $2$ | $\min(+\infty, 2+8) = 10$ | $\min(+\infty, 2+10) = 12$ | $B \leftarrow A, D \leftarrow C, E \leftarrow C$ |
| 3 | $B$ | $\{A, C, B\}$| $0$ | $4$ | $2$ | $\min(10, 4+5) = 9$ | $12$ | $D \leftarrow B$ |
| 4 | $D$ | $\{A, C, B, D\}$| $0$ | $4$ | $2$ | $9$ | $\min(12, 9+2) = 11$ | $E \leftarrow D$ |
| 5 | $E$ | $\{A, C, B, D, E\}$| $0$ | $4$ | $2$ | $9$ | $11$ | Final |

Le chemin le plus court de $A$ vers $E$ est $A \to C \to B \to D \to E$ pour une latence totale cumulée de $11 \text{ ms}$ (notons qu'un chemin alternatif $A \to C \to E$ existe avec un coût de $2 + 10 = 12 \text{ ms}$, il est donc correctement rejeté par l'algorithme au profit du premier).

#### 3. Analyse de complexité

- **Avec un tableau non ordonné** (recherche linéaire du minimum) : la complexité en temps est de $\mathcal{O}(V^2 + E)$.
- **Avec un tas min** (file de priorité binaire) : la complexité en temps est de $\mathcal{O}((V + E) \log V)$.

**Discussion critique :** Pour un réseau à grande échelle où $V \ge 10^5$, l'utilisation d'un tableau non ordonné conduit à un nombre d'opérations de l'ordre de $(10^5)^2 = 10^{10}$, ce qui s'avère prohibitif en temps de calcul réel. L'utilisation d'un tas min réduit drastiquement cette charge, rendant l'algorithme parfaitement viable pour des applications de routage dynamique (type OSPF).

#### 4. Analyse critique des limites du modèle

Si un arc possède un poids strictement négatif ($w(e) < 0$), l'algorithme glouton de Dijkstra perd sa correction mathématique. En effet, Dijkstra suppose que lorsqu'un sommet est extrait de la file avec une distance minimale provisoire, cette distance est définitive car aucun chemin futur ne pourra l'améliorer (les poids étant positifs, rajouter un arc ne peut qu'augmenter ou stabiliser la distance). 

En présence de poids négatifs, un chemin apparemment plus long initialement pourrait devenir le plus court grâce à l'arc négatif rencontré ultérieurement. Pour traiter ce cas de figure, il faudrait recourir à l'algorithme de Bellman-Ford, au détriment toutefois d'une complexité temporelle accrue ($\mathcal{O}(V \times E)$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
