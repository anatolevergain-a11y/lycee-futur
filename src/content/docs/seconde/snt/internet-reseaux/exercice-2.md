---
title: "Exercice 2 : Analyse des graphes de réseaux sociaux"
description: "Application pratique du chapitre Internet et Réseaux sociaux"
---

### 🌐 Contexte & Données scientifiques

En science des réseaux, les plateformes numériques sont modélisées par des **graphes** $G = (V, E)$, où $V$ représente l'ensemble des utilisateurs (les sommets ou nœuds) et $E$ l'ensemble des relations unidirectionnelles ou bidirectionnelles entre ces utilisateurs (les arêtes ou liens). 

L'analyse de ces graphes permet d'étudier la structure de l'information et les dynamiques d'influence. Considérons un réseau social d'entreprise ou une plateforme de microblogging modélisée par un graphe non orienté de $N = 6$ utilisateurs (notés de $A$ à $F$). La matrice d'adjacence $M$ associée à ce graphe est définie par :

$$M_{i,j} = \begin{cases} 1 & \text{s'il existe une relation directe entre } i \text{ et } j \\ 0 & \text{sinon} \end{cases}$$

Le tableau des connexions directes (voisinage) se lit ainsi :
* **A** est connecté à : B, C
* **B** est connecté à : A, C, D
* **C** est connecté à : A, B, D
* **D** est connecté à : B, C, E
* **E** est connecté à : D, F
* **F** est connecté à : E

Néanmoins, la modélisation mathématique par graphe présente des **limites épistémologiques majeures** : elle réduit la complexité des interactions humaines (intensité de la relation, valence émotionnelle, contexte conversationnel) à une binarité (lien présent/absent). De plus, l'utilisation de métriques globales ne garantit pas la neutralité algorithmique, les graphes observés étant souvent des sous-échantillons biaisés par les politiques d'accès aux données des interfaces de programmation (API) des plateformes.

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Représentation et formalisation :** Établir la matrice d'adjacence $M$ du graphe $G$ décrit dans le contexte. En déduire visuellement ou par le calcul le degré $d(v)$ de chaque sommet $v \in V$ (le nombre de connexions directes).
2. **Centralité et influence :** Le **degré de centralité** ($C_d$) d'un sommet est défini par $C_d(v) = \frac{d(v)}{N - 1}$, où $N$ est le nombre total de sommets. Calculer le degré de centralité des utilisateurs $C$ et $E$. Interpréter ces résultats en termes de position stratégique dans le réseau.
3. **Chemins et connectivité :** Déterminer la distance géodésique (le plus court chemin en nombre d'arêtes) entre l'utilisateur $A$ et l'utilisateur $F$. Quel est le diamètre du graphe (la plus grande distance géodésique entre toutes les paires de sommets possibles) ?
4. **Esprit critique et limites du modèle :** Un algorithme de recommandation utilise le degré de centralité élevé d'un utilisateur pour diffuser un contenu viral. Discutez des limites de cette stratégie en considérant d'une part l'efficacité technique de propagation, et d'autre part le risque de création de "chambres d'écho" (*echo chambers*) et de polarisation des opinions.

---

### 💡 Indice de méthode

* **Question 1 :** Pour construire la matrice d'adjacence, tracez un tableau à double entrée de lignes et colonnes étiquetées de $A$ à $F$. Le degré d'un sommet correspond simplement à la somme des valeurs de sa ligne (ou de sa colonne) dans un graphe non orienté.
* **Question 2 :** Appliquez rigoureusement la formule en veillant à identifier la valeur de $N$ (effectif total des sommets). Attention au dénominateur qui normalise la métrique entre $0$ et $1$.
* **Question 3 :** Pour trouver le plus court chemin, dessinez schématiquement le graphe au brouillon en plaçant les sommets de $A$ à $F$ selon leurs connexions. Testez les chemins successifs (ex: $A \to \dots \to F$).
* **Question 4 :** Mobilisez l'idée de compromis (*trade-off*) : maximiser la vitesse de diffusion s'accompagne souvent d'une homogénéisation de l'information et d'une réduction de la diversité cognitive au sein du réseau.

---

### 📋 Correction détaillée pas à pas

#### 1. Représentation et formalisation
La matrice d'adjacence $M$ de taille $6 \times 6$ s'écrit (les lignes et colonnes suivent l'ordre alphabétique de $A$ à $F$) :

$$M = \begin{pmatrix} 
0 & 1 & 1 & 0 & 0 & 0 \\ 
1 & 0 & 1 & 1 & 0 & 0 \\ 
1 & 1 & 0 & 1 & 0 & 0 \\ 
0 & 1 & 1 & 0 & 1 & 0 \\ 
0 & 0 & 0 & 1 & 0 & 1 \\ 
0 & 0 & 0 & 0 & 1 & 0 
\end{pmatrix}$$

En sommant les coefficients de chaque ligne, on obtient les degrés $d(v)$ :
* $d(A) = 2$ (connecté à B, C)
* $d(B) = 3$ (connecté à A, C, D)
* $d(C) = 3$ (connecté à A, B, D)
* $d(D) = 3$ (connecté à B, C, E)
* $d(E) = 2$ (connecté à D, F)
* $d(F) = 1$ (connecté à E)

#### 2. Centralité et influence
Le nombre total de sommets est $N = 6$. Le dénominateur de normalisation est donc $N - 1 = 5$.

* Pour l'utilisateur $C$ : $d(C) = 3$, d'où :
  $$C_d(C) = \frac{3}{5} = 0,6$$
* Pour l'utilisateur $E$ : $d(E) = 2$, d'où :
  $$C_d(E) = \frac{2}{5} = 0,4$$

**Interprétation :** L'utilisateur $C$ est connecté à 60 % des autres membres potentiels du réseau, ce qui lui confère une position de carrefour ou de "hub" local plus importante que l'utilisateur $E$ (40 %). $C$ a structurellement un meilleur potentiel de diffusion rapide de l'information au sein de ce sous-réseau.

#### 3. Chemins et connectivité
En traçant le graphe d'après les connexions : 
- $A$ est relié à $B$ et $C$.
- $B$ et $C$ sont reliés entre eux et à $D$.
- $D$ est relié à $E$.
- $E$ est relié à $F$.

Pour aller de $A$ à $F$, un chemin possible est : 
$$A \to B \to D \to E \to F$$ 
Ce chemin comporte 4 arêtes, donc la distance géodésique minimale est de **4**. 
*(On obtient la même longueur via $A \to C \to D \to E \to F$)*.

Le diamètre du graphe correspond à la plus grande distance entre deux sommets, ici entre $A$ et $F$ (ou $C$ et $F$), soit **4**.

#### 4. Esprit critique et limites du modèle
Si un algorithme cible prioritairement les nœuds à forte centralité (comme $B, C, D$) pour maximiser l'efficacité quantitative de la diffusion (atteindre un maximum de personnes en un minimum de temps), il se heurte à plusieurs limites scientifiques et sociétales :
* **Biais de non-représentation :** Le degré de centralité ne mesure pas la *qualité* ou la *diversité* de la connexité, mais seulement sa quantité brute. Un utilisateur très connecté peut n'interagir qu'avec un groupe homogène.
* **Chambres d'écho et polarisation :** En sur-sollicitant les hubs pour diffuser une information, l'algorithme accélère la formation de bulles informationnelles où l'information circule en circuit fermé, renforçant les biais de confirmation et réduisant l'exposition des utilisateurs à des points de vue contradictoires. 
* **Fragilité structurelle :** Un réseau dont la diffusion repose uniquement sur quelques nœuds centraux est efficace en fonctionnement nominal, mais extrêmement vulnérable à la suppression ou à la défection de ces quelques sommets (attaque ciblée).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
