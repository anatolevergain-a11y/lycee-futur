---
title: "Exercice 1 : Parcours en largeur (BFS) et parcours en profondeur (DFS)"
description: "Application pratique du chapitre Algorithmique sur les graphes"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'analyse des réseaux de télécommunication ou de la modélisation de processus biologiques, les graphes constituent un outil mathématique fondamental. Un graphe $G = (V, E)$ est défini par un ensemble de sommets $V$ (ou nœuds) et un ensemble d'arêtes $E$ (ou arcs si le graphe est orienté). 

Pour explorer ces structures, deux algorithmes fondamentaux se distinguent par leur stratégie de parcours :
1. Le **parcours en largeur** (*Breadth-First Search* ou BFS), qui explore le graphe niveau par niveau en se basant sur une structure de données de type **file** (FIFO : *First In, First Out*).
2. Le **parcours en profondeur** (*Depth-First Search* ou DFS), qui explore le graphe en s'enfonçant le plus loin possible le long de chaque branche avant de rétrograder (*backtracking*), utilisant généralement une structure de **pile** (LIFO : *Last In, First Out*) ou la récursivité.

Considérons un réseau de $V = \{A, B, C, D, E, F\}$ modélisant des serveurs interconnectés. L'ensemble des connexions (non orientées) $E$ est défini par la liste d'adjacence suivante, où les voisins de chaque sommet sont listés par ordre alphabétique :
- $A : [B, C]$
- $B : [A, D, E]$
- $C : [A, F]$
- $D : [B]$
- $E : [B, F]$
- $F : [C, E]$

### ❓ Énoncé

1. **Représentation et complexité :** En analysant la structure de données utilisée, rappelez la complexité temporelle théorique dans le pire des cas d'un parcours BFS et d'un parcours DFS pour un graphe représenté par ses listes d'adjacence, en fonction du nombre de sommets $|V|$ et d'arêtes $|E|$. Justifiez brièvement.
2. **Application du BFS :** À partir du sommet source $A$ et en respectant strictement l'ordre alphabétique pour le dépilage des voisins, donnez l'ordre d'exploration des sommets par l'algorithme BFS. Précisez l'état de la file à chaque étape clé (insertion et retrait).
3. **Application du DFS :** Toujours à partir du sommet source $A$ et en respectant l'ordre alphabétique des voisins, donnez l'ordre d'exploration des sommets par l'algorithme DFS (version iterative ou récursive).
4. **Analyse critique des compromis :** Supposons que l'on cherche à trouver le plus court chemin (en nombre de sauts) entre le serveur $A$ et le serveur $F$. Lequel des deux parcours (BFS ou DFS) garantit cette optimalité ? Discutez des limites de l'autre parcours dans ce contexte précis en termes de complexité spatiale.

---

### 💡 Indice de méthode

- **Pour le BFS :** Utilisez un tableau pour suivre l'état des sommets (visités ou non) et une file (première entrée, première sortie). N'oubliez pas de marquer un sommet comme visité dès son *ajout* à la file, et non lors de son retrait, pour éviter les doublons dus aux cycles.
- **Pour le DFS :** Utilisez une pile. Le dernier sommet empilé est le premier exploré. L'ordre alphabétique des voisins impose de les empiler de manière à ce que le plus petit (ex. $B$ avant $C$) soit traité en premier (donc empilé en dernier si l'on respecte une insertion de droite à gauche).
- **Pour l'analyse de complexité :** Exprimez toujours le temps et l'espace en notation grand $O$, par exemple $\mathcal{O}(|V| + |E|)$.

---

### 📋 Correction détaillée pas à pas

#### 1. Représentation et complexité
Pour un graphe représenté par ses listes d'adjacence :
- Le **BFS** visite chaque sommet une seule fois et parcourt chaque arête deux fois (dans un graphe non orienté). Sa complexité temporelle est de $\mathcal{O}(|V| + |E|)$. En espace, la file peut contenir au pire tous les sommets d'un même niveau, soit $\mathcal{O}(|V|)$.
- Le **DFS** visite également chaque sommet et chaque arête. Sa complexité temporelle est donc de $\mathcal{O}(|V| + |E|)$. En espace, la pile de récursivité ou la pile explicite peut atteindre la profondeur maximale du graphe, soit dans le pire des cas (graphe linéaire) $\mathcal{O}(|V|)$.

#### 2. Application du BFS (Sommet de départ : $A$)
*Règle : File FIFO, ordre alphabétique des voisins.*
- **Initialisation :** On enfile $A$. Visités : $\{A\}$. File : `[A]`
- **Étape 1 :** On défile $A$. Ses voisins non visités sont $B$ et $C$ (par ordre alphabétique). On les enfile. 
  - Visités : $\{A, B, C\}$
  - File : `[B, C]`
  - Ordre de visite actuel : $A$
- **Étape 2 :** On défile $B$. Ses voisins sont $A$ (déjà visité), $D$ et $E$. On enfile $D$ puis $E$.
  - Visités : $\{A, B, C, D, E\}$
  - File : `[C, D, E]`
  - Ordre de visite actuel : $A, B$
- **Étape 3 :** On défile $C$. Ses voisins sont $A$ (visité) et $F$. On enfile $F$.
  - Visités : $\{A, B, C, D, E, F\}$
  - File : `[D, E, F]`
  - Ordre de visite actuel : $A, B, C$
- **Étape 4, 5, 6 :** On défile $D$, puis $E$, puis $F$. Leurs voisins respectifs sont déjà tous visités.
  - File finale : `[]`

**Ordre final BFS :** $\$A \rightarrow B \rightarrow C \rightarrow D \rightarrow E \rightarrow F\$$

#### 3. Application du DFS (Sommet de départ : $A$)
*Règle : Pile LIFO, exploration en profondeur, ordre alphabétique.*
- **Initialisation :** On empile $A$. Visités : $\{A\}$. Pile : `[A]`
- **Étape 1 :** On dépile $A$. On examine ses voisins non visités ($B$ et $C$). Pour les traiter par ordre alphabétique (visiter $B$ en premier), on empile $C$ puis $B$.
  - Visités : $\{A, B, C\}$
  - Pile : `[C, B]` (sommet à droite ou à gauche selon la convention, ici sommet à droite $B$)
  - Ordre : $A$
- **Étape 2 :** On dépile $B$. Ses voisins non visités sont $D$ et $E$. On empile $E$ puis $D$ (pour visiter $D$ en premier).
  - Visités : $\{A, B, C, D, E\}$
  - Pile : `[C, E, D]`
  - Ordre : $A, B$
- **Étape 3 :** On dépile $D$. Aucun voisin non visité.
  - Ordre : $A, B, D$
- **Étape 4 :** On dépile $E$. Son voisin non visité est $F$. On empile $F$.
  - Visités : $\{A, B, C, D, E, F\}$
  - Pile : `[C, F]`
  - Ordre : $A, B, D, E$
- **Étape 5 :** On dépile $F$. Ses voisins ($C$ et $E$) sont déjà visités.
  - Ordre : $A, B, D, E, F$
- **Étape 6 :** On dépile $C$. Ses voisins sont déjà visités.
  - Ordre final : $A, B, D, E, F, C$

**Ordre final DFS :** $\$A \rightarrow B \rightarrow D \rightarrow E \rightarrow F \rightarrow C\$$

#### 4. Analyse critique des compromis
- **Optimalité du plus court chemin :** C'est le **parcours en largeur (BFS)** qui garantit de trouver le plus court chemin en nombre d'arêtes dans un graphe non pondéré. En effet, il explore les sommets par vagues concentriques successives (distance 1, puis 2, etc.).
- **Limites du DFS :** Le **DFS ne garantit en aucun cas** de trouver le chemin le plus court. Il s'engage dans une branche et peut parcourir une grande partie du graphe avant d'atteindre la cible par un chemin long. De plus, dans un graphe infini ou très profond, le DFS risque de s'engager dans une branche infinie sans jamais trouver la solution, alors que le BFS l'atteindrait si elle existe à un niveau fini. Cependant, le DFS est souvent privilégié pour la détection de cycles ou le calcul de composantes connexes car sa mise en œuvre récursive est particulièrement économe en code.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
