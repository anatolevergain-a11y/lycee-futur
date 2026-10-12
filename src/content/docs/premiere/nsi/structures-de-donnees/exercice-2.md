---
title: "Exercice 2 : Tableaux croisés et matrices"
description: "Application pratique du chapitre Structures de données linéaires"
---

### 🌐 Contexte & Données scientifiques

En NSI, la manipulation de structures de données linéaires à deux dimensions (tableaux de tableaux ou listes de listes) permet de modéliser des matrices mathématiques ou des grilles de données tabulées. Néanmoins, l'implémentation naïve en Python sous forme de `list[list[T]]` présente des limites en termes contiguës de mémoire et de complexité algorithmique, comparativement à des bibliothèques spécialisées comme `NumPy`.

Considérons l'analyse radiométrique d'une image satellitaire simplifiée de $N \times M$ pixels. Chaque pixel possède une intensité lumineuse codée sur un niveau de gris compris entre $0$ et $255$. Cette grille est représentée en mémoire par une liste de listes Python :

$$\text{Image} = \begin{pmatrix} 
120 & 130 & 145 \\ 
110 & 125 & 140 \\ 
95 & 105 & 115 
\end{pmatrix}$$

L'accès à un élément de la ligne $i$ et de la colonne $j$ s'écrit mathématiquement $A_{i,j}$ et se traduit en Python par l'expression `A[i][j]`. 

Cependant, un compromis doit être analysé : si la structure de liste de listes offre une grande souplesse syntaxique, elle induit une indirection mémoire (les lignes sont stockées à des emplacements épars, reliées par des pointeurs), réduisant l'efficacité du cache processeur.

---

### ❓ Énoncé

1. **Représentation et initialisation :** Écrire une fonction Python `creer_matrice(n: int, m: int, valeur_par_defaut: int) -> list[list[int]]` qui génère une matrice de dimensions $n$ lignes et $m$ colonnes initialisée avec une valeur par défaut. *Attention au piège classique de l'initialisation par multiplication de listes en Python (`[[val]*m]*n`). Analysez la criticité de cette méthode.*
2. **Parcours et transformation :** Écrire une fonction `transposer(matrice: list[list[int]]) -> list[list[int]]` qui retourne la matrice transposée $A^T$, définie par $(A^T)_{i,j} = A_{j,i}$.
3. **Analyse de données par voisinage :** Dans le cadre du traitement d'image, on souhaite appliquer un filtre de moyenne glissante $3 \times 3$ sur les pixels internes (hors bordures). Écrire une fonction `filtrer_moyenne(matrice: list[list[int]]) -> list[list[float]]` qui remplace chaque valeur intérieure par la moyenne arithmétique de ses 8 voisins immédiats et d'elle-même.
4. **Esprit critique et complexité :** En évaluant la taille $N$ des données, discutez de la pertinence d'utiliser une structure de type `list[list[int]]` par rapport à un tableau unidimensionnel plat (`list[int]`) ou contigu en mémoire, en motivant votre réponse par la notion de complexité spatiale et temporelle.

---

### 💡 Indice de méthode

* **Question 1 :** Pour éviter que modifier une ligne ne modifie par ricochet toutes les autres (effet de bord lié aux références d'objets mutables en Python), privilégiez une construction par compréhension de liste : `[[val for _ in range(m)] for _ in range(n)]`.
* **Question 2 :** Les dimensions de la matrice transposée sont $M \times N$ si la matrice d'origine est de taille $N \times M$. Vos boucles doivent itérer sur les indices de colonnes puis de lignes.
* **Question 3 :** Pour un élément situé en $(i, j)$, les voisins s'étendent de $i-1$ à $i+1$ et de $j-1$ à $j+1$. Soyez rigoureux sur les conditions aux limites pour éviter les erreurs de type `IndexError`.

---

### 📋 Correction détaillée pas à pas

#### 1. Initialisation sécurisée de la matrice
Le piège syntaxique majeur en Python réside dans l'utilisation de l'opérateur `*` sur les listes mutables. 

$$\text{L'expression } \texttt{[[0]*m]*n} \text{ copie des références vers une unique liste de taille } m.$$

```python
def creer_matrice(n: int, m: int, valeur_par_defaut: int) -> list[list[int]]:
    # Utilisation d'une compréhension de liste imbriquée pour instancier des objets distincts en mémoire
    return [[valeur_par_defaut for _ in range(m)] for _ in range(n)]
```
*Analyse critique :* Cette méthode garantit l'indépendance des lignes en mémoire, évitant ainsi des mutations involontaires.

#### 2. Transposition de la matrice
La transposition consiste à échanger les lignes et les colonnes. Si la matrice initiale a pour dimensions $N \times M$, la matrice résultat aura pour dimensions $M \times N$.

```python
def transposer(matrice: list[list[int]]) -> list[list[float]]:
    if not matrice or not matrice[0]:
        return []
    n = len(matrice)
    m = len(matrice[0])
    
    # Création de la matrice cible de dimensions m x n
    transposee = creer_matrice(m, n, 0)
    
    for i in range(n):
        for j in range(m):
            transposee[j][i] = matrice[i][j]
            
    return transposee
```

#### 3. Filtre de moyenne glissante
Pour chaque pixel interne (de la ligne $1$ à $N-2$ et de la colonne $1$ à $M-2$), on somme les 9 valeurs du voisinage et on divise par $9$.

```python
def filtrer_moyenne(matrice: list[list[int]]) -> list[list[float]]:
    n = len(matrice)
    m = len(matrice[0])
    # On initialise une matrice de même taille avec des zéros
    resultat = [[float(matrice[i][j]) for j in range(m)] for i in range(n)]
    
    for i in range(1, n - 1):
        for j in range(1, m - 1):
            somme = 0
            # Voisinage 3x3
            for di in (-1, 0, 1):
                for dj in (-1, 0, 1):
                    somme += matrice[i + di][j + dj]
            resultat[i][j] = somme / 9.0
            
    return resultat
```

#### 4. Analyse critique et complexité
* **Complexité temporelle :** Pour un parcours complet de la matrice, la complexité est de $\mathcal{O}(N \times M)$, ce qui est asymptotiquement optimal pour des données structurées en grille.
* **Complexité spatiale et limites du modèle :** En Python, une `list[list[int]]` est un tableau de pointeurs vers d'autres listes. Chaque entier en Python est un objet complet (encapsulé, environ 28 octets minimum). 
  * *Inconvénient :* S'agissant d'un stockage non contigu, les défauts de cache (*cache misses*) pénalisent les performances lors du traitement de matrices massives (ex: imagerie médicale ou géospatiale).
  * *Alternative :* L'utilisation d'un tableau unidimensionnel aplati (`list[int]`) couplé à un adressage par indexation linéaire ($i \times M + j$) ou l'utilisation de modules tiers écrits en C (comme `NumPy`) permet un stockage contigu en mémoire, optimisant drastiquement la localité spatiale des références et réduisant l'empreinte mémoire superflue.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
