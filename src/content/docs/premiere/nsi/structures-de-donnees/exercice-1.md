---
title: "Exercice 1 : Gestion des piles et files en algorithmique"
description: "Application pratique du chapitre Structures de données linéaires"
---

### 🌐 Contexte & Données scientifiques

En informatique, les structures de données linéaires formalisent la manière dont les informations sont stockées et manipulées en mémoire. Parmi elles, les **piles** (abréviation du LIFO : *Last In, First Out*) et les **files** (FIFO : *First In, First Out*) répondent à des contraintes d'accès rigoureuses qui conditionnent l'efficacité algorithmique.

Considérons le traitement de flux de données asynchrones dans un système embarqué ou un serveur de requêtes. Soit $N$ le nombre d'opérations élémentaires (insertion et suppression) effectuées sur la structure. 
* Dans une pile, l'insertion (empilement ou `push`) et la suppression (dépilement ou `pop`) s'effectuent sur le même élément terminal (le sommet). 
* Dans une file, l'insertion s'effectue à une extrémité (queue) et la suppression à l'autre (tête).

L'analyse de complexité en pire des cas (*worst-case complexity*) montre que l'utilisation d'une liste chaînée pour implémenter ces structures garantit des opérations en temps constant $O(1)$. En revanche, une implémentation naïve par tableau dynamique de taille fixe engendre un coût amorti dépendant des réallocations mémorielles, modélisé par la fonction de coût :

$$T(N) = O(1) \text{ (en moyenne)}, \quad \text{mais } T_{pire}(N) = O(N) \text{ lors d'un redimensionnement}$$

L'exercice suivant propose d'analyser le comportement de ces structures face à un protocole de traitement de données structurées.

---

### ❓ Énoncé

Soit une séquence de données radiophoniques ou de paquets réseau représentée par la liste de caractères suivante : 
$$\mathcal{S} = ['A', 'B', 'C', 'D', 'E']$$

Les opérations s'effectuent selon les définitions algorithmiques standard des structures linéaires. On dispose d'une pile vide $\mathcal{P}$ et d'une file vide $\mathcal{F}$.

1. **Simulation séquentielle (Pile) :** On applique successivement les opérations suivantes : empiler 'A', empiler 'B', dépiler, empiler 'C', empiler 'D', puis dépiler deux fois. Donnez l'état final de la pile $\mathcal{P}$ (du sommet vers la base).
2. **Simulation séquentielle (File) :** En partant d'une file vide $\mathcal{F}$, on enfile 'A', on enfile 'B', on défile, puis on enfile 'C' et 'D', et enfin on défile deux fois. Donnez l'état final de la file $\mathcal{F}$ (de la tête vers la queue).
3. **Analyse algorithmique et complexité :** Écrire en langage Python une fonction `inverser_file(file)` qui prend en paramètre une file et utilise **exclusivement** une structure de pile intermédiaire pour en inverser l'ordre des éléments. Justifiez la complexité temporelle et spatiale de votre algorithme en fonction du nombre $n$ d'éléments.
4. **Esprit critique et limites du modèle :** Dans le cadre d'un système critique temps réel (ex: système de freinage autonome ou traitement de données médicales), discutez des limites de l'utilisation d'une file implémentée via un tableau dynamique en mémoire Python par rapport à une liste chaînée, notamment en termes de déterminisme temporel.

---

### 💡 Indice de méthode

* **Pour les questions 1 et 2 :** Tracez rigoureusement l'évolution pas à pas de la structure en représentant graphiquement les ajouts et retraits selon la politique LIFO (dernier entré, premier sorti) pour la pile, et FIFO (premier entré, premier sorti) pour la file.
* **Pour la question 3 :** Rappumez-vous qu'une pile inverse l'ordre des éléments (propriété LIFO). En extrayant tous les éléments d'une file pour les stocker temporairement dans une pile, puis en les remettant dans la file, vous modifiez l'ordre. Répétez cette logique pour obtenir l'inversion complète.
* **Pour la question 4 :** Interrogez-vous sur le coût mémoire et le temps d'exécution non constant (*non-deterministic*) lié au ramasse-miettes (*garbage collector*) et au redimensionnement implicite des listes en Python.

---

### 📋 Correction détaillée pas à pas

#### 1. Simulation de la pile $\mathcal{P}$ (LIFO)
Traçons l'état de la pile (sommet à gauche) :
* Initialisation : $\mathcal{P} = []$
* Empiler 'A' $\rightarrow$ $\mathcal{P} = ['A']$
* Empiler 'B' $\rightarrow$ $\mathcal{P} = ['B', 'A']$
* Dépiler (retire 'B') $\rightarrow$ $\mathcal{P} = ['A']$
* Empiler 'C' $\rightarrow$ $\mathcal{P} = ['C', 'A']$
* Empiler 'D' $\rightarrow$ $\mathcal{P} = ['D', 'C', 'A']$
* Dépiler (retire 'D') $\rightarrow$ $\mathcal{P} = ['C', 'A']$
* Dépiler (retire 'C') $\rightarrow$ $\mathcal{P} = ['A']$

**Résultat 1 :** L'état final de la pile est `['A']` (le sommet contient 'A').

#### 2. Simulation de la file $\mathcal{F}$ (FIFO)
Traçons l'état de la file (tête à gauche, queue à droite) :
* Initialisation : $\mathcal{F} = []$
* Enfiler 'A' $\rightarrow$ $\mathcal{F} = ['A']$
* Enfiler 'B' $\rightarrow$ $\mathcal{F} = ['A', 'B']$
* Défile (retire 'A') $\rightarrow$ $\mathcal{F} = ['B']$
* Enfiler 'C' $\rightarrow$ $\mathcal{F} = ['B', 'C']$
* Enfiler 'D' $\rightarrow$ $\mathcal{F} = ['B', 'C', 'D']$
* Défile (retire 'B') $\rightarrow$ $\mathcal{F} = ['C', 'D']$
* Défile (retire 'C') $\rightarrow$ $\mathcal{F} = ['D']$

**Résultat 2 :** L'état final de la file est `['D']` (la tête et la queue contiennent 'D').

#### 3. Algorithme d'inversion d'une file via une pile
En Python, en supposant l'utilisation d'une interface de type classe ou de listes simulant les structures (où `.append()` et `.pop()` gèrent une pile, et `.pop(0)` gère la tête de file, bien que non optimal) :

```python
def inverser_file(file):
    pile = []
    # 1. On vide la file dans la pile (cela inverse l'ordre)
    while len(file) > 0:
        element = file.pop(0)  # Extraction de la tête de file
        pile.append(element)    # Empilement
        
    # 2. On remet de la pile vers la file
    while len(pile) > 0:
        element = pile.pop()    # Dépilage (dernier entré, premier sorti)
        file.append(element)    # Remise en queue de file
        
    return file
```

* **Complexité temporelle :** Chaque élément est retiré puis inséré deux fois. Pour $n$ éléments, le nombre d'opérations est linéaire : $T(n) = O(n)$.
* **Complexité spatiale :** L'utilisation de la structure auxiliaire `pile` nécessite de stocker $n$ éléments en mémoire de manière transitoire : $S(n) = O(n)$.

#### 4. Discussion critique sur les limites du modèle
Dans un système critique à forte contrainte temporelle (*hard real-time system*), l'utilisation de listes Python pour simuler des files (`pop(0)`) présente une faille conceptuelle majeure : la suppression du premier élément d'un tableau contigu oblige à décaler l'ensemble des $n-1$ éléments en mémoire, induisant une complexité en $T(n) = O(n)$ par opération de défilement. 

De plus, le redimensionnement dynamique des tableaux sous-jacents et l'activité du ramasse-miettes (*garbage collector*) introduisent de l'incertitude (*jitter*) dans les temps de réponse, rendant le système non-déterministe. Pour garantir un temps d'exécution strictement constant $O(1)$ par opération, l'ingénieur privilégiera une **liste chaînée** (où les pointeurs sont modifiés en temps constant sans déplacement physique des données en mémoire) ou un tampon circulaire statique pré-alloué.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
