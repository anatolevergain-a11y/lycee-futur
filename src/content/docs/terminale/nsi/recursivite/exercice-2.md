---
title: "Exercice 2 : Algorithme du tri fusion et complexité algorithmique"
description: "Application pratique du chapitre Récursivité et divise pour régner"
---

### 🌐 Contexte & Données scientifiques

Le traitement de volumes massifs de données nécessite des algorithmes de tri efficaces dont les performances théoriques garantissent l'extensibilité (*scalability*). Contrairement aux tris quadratiques (comme le tri par insertion ou le tri à bulles) dont la complexité en temps dans le pire des cas est en $\mathcal{O}(n^2)$, le paradigme "divise pour régner" (*divide and conquer*) permet de concevoir des algorithmes en $\mathcal{O}(n \log_2 n)$.

L'algorithme du **tri fusion** (*merge sort*) repose sur trois étapes récursives fondamentales :
1. **Diviser** : Diviser la liste non triée en deux sous-listes de tailles approximativement égales.
2. **Régner** : Trier récursivement ces deux sous-listes. Si la sous-liste est de taille $0$ ou $1$, elle est considérée comme déjà triée (cas de base).
3. **Combiner** : Fusionner les deux sous-listes triées en une seule liste globale triée.

Soit $T(n)$ le nombre d'opérations élémentaires nécessaires pour trier un tableau de taille $n$. L'équation de récurrence régissant le tri fusion s'établit comme suit :

$$T(n) = 
\begin{cases} 
\mathcal{O}(1) & \text{si } n \le 1 \\
2 T\left(\frac{n}{2}\) + \mathcal{O}(n) & \text{si } n > 1 
\end{cases}$$

où le terme $2 T\left(\frac{n}{2}\right)$ correspond au coût de la résolution des deux sous-problèmes, et $\mathcal{O}(n)$ représente le coût linéaire de la fusion des deux sous-listes.

---

### ❓ Énoncé

1. **Analyse de la fusion (Conquérir) :** Écrire en langage Python une fonction récursive ou itérative `fusion(gauche, droite)` qui prend en paramètres deux listes de nombres triées `gauche` et `droite`, et renvoie une unique liste triée contenant tous les éléments des deux listes d'origine. Évaluer la complexité temporelle de cette seule fonction de fusion pour deux listes de taille respective $n_1$ et $n_2$.

2. **Implémentation du tri fusion :** À l'aide de la fonction précédente, écrire la fonction principale `tri_fusion(tableau)` qui implémente l'algorithme du tri fusion selon le paradigme "divise pour régner". On pourra utiliser l'opérateur de découpe de liste (*slicing*) en Python (`tableau[:milieu]` et `tableau[milieu:]`).

3. **Démystification par l'arbre de récursivité :** En explicitant la hauteur de l'arbre des appels récursifs pour une entrée de taille $n$ (supposée être une puissance de $2$), démontrer par le calcul que la complexité temporelle globale de l'algorithme dans le pire des cas est de $\mathcal{O}(n \log_2 n)$.

4. **Analyse critique des compromis spatiaux et temporels :** Contrairement au tri par insertion qui s'effectue "en place" avec une complexité spatiale auxiliaire de $\mathcal{O}(1)$, le tri fusion standard nécessite la création de nouvelles structures de données lors des fusions. Discuter quantitativement des implications de cette complexité spatiale en $\mathcal{O}(n)$ sur la gestion de la mémoire vive (RAM) lors du traitement de flux de données massifs (par exemple, $n = 10^8$ entiers de $64$ bits).

---

### 💡 Indice de méthode

* **Question 1 :** Pour fusionner efficacement deux listes déjà triées sans effectuer de tris superflus, maintenez deux indices (pointeurs) positionnés au début de chaque liste. À chaque étape, comparez les éléments pointés et ajoutez le plus petit à la liste résultat en incrémentant l'indice correspondant.
* **Question 2 :** Veillez à bien identifier le **cas de base** (condition d'arrêt de la récursivité) : si le tableau a une longueur inférieure ou égale à $1$, il est déjà trié.
* **Question 3 :** Visualisez l'arbre de récursivité : à chaque niveau de l'arbre, la taille des sous-problèmes est divisée par $2$. Quel est le nombre de niveaux pour arriver à des sous-problèmes de taille $1$ ? Quel est le volume de travail cumulé à chaque niveau pour réaliser les fusions ?
* **Question 4 :** Rappelez-vous qu'un entier de $64$ bits occupe $8$ octets en mémoire. Calculez l'empreinte mémoire induite par la duplication des structures et évaluez la limite physique d'une machine standard.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse et code de la fonction de fusion
La fonction de fusion combine deux listes triées en parcourant simultanément leurs éléments.

```python
def fusion(gauche: list, droite: list) -> list:
    resultat = []
    i = 0  # Indice pour la liste 'gauche'
    j = 0  # Indice pour la liste 'droite'

    # Tant qu'il reste des éléments dans les deux listes
    while i < len(gauche) and j < len(droite):
        if gauche[i] <= droite[j]:
            resultat.append(gauche[i])
            i += 1
        else:
            resultat.append(droite[j])
            j += 1

    # Ajouter les éléments restants (l'une des listes est vide)
    resultat.extend(gauche[i:])
    resultat.extend(droite[j:])
    
    return resultat
```
**Complexité de la fusion :** Si $n_1 = \text{len(gauche)}$ et $n_2 = \text{len(droite)}$, la boucle `while` s'exécute au maximum $n_1 + n_2$ fois. La complexité temporelle de la fonction `fusion` est donc linéaire : $\mathcal{O}(n_1 + n_2)$, soit $\mathcal{O}(n)$ où $n$ est la taille totale des données à fusionner.

#### 2. Implémentation du tri fusion
```python
def tri_fusion(tableau: list) -> list:
    # Cas de base : un tableau de 0 ou 1 élément est déjà trié
    if len(tableau) <= 1:
        return tableau
    
    # Diviser
    milieu = len(tableau) // 2
    gauche = tableau[:milieu]
    droite = tableau[milieu:]
    
    # Régner (appels récursifs)
    gauche_triee = tri_fusion(gauche)
    droite_triee = tri_fusion(droite)
    
    # Combiner
    return fusion(gauche_triee, droite_triee)
```

#### 3. Démonstration de la complexité temporelle par l'arbre de récursivité
Soit $n$ la taille du tableau d'entrée (avec $n = 2^k$).
* **Hauteur de l'arbre :** À chaque étape, la taille du problème est divisée par $2$. Le nombre de divisions successives nécessaires pour atteindre un sous-problème de taille $1$ (le cas de base) est l'exposant $k$, soit $\log_2(n)$. L'arbre possède donc $\log_2(n) + 1$ niveaux (numérotés de $0$ à $\log_2(n)$).
* **Travail par niveau :** 
  - Au niveau $0$ (racine), il y a $1$ problème de taille $n$. Le coût de fusion est de $\mathcal{O}(n)$.
  - Au niveau $1$, il y a $2$ problèmes de taille $\frac{n}{2}$. Le coût cumulé des fusions est $2 \times \mathcal{O}\left(\frac{n}{2}\right) = \mathcal{O}(n)$.
  - De manière générale, à un niveau $p$ quelconque ($0 \le p \le \log_2(n)$), il y a $2^p$ sous-problèmes de taille $\frac{n}{2^p}$. Le coût total des fusions pour ce niveau est :
    $$2^p \times \mathcal{O}\left(\frac{n}{2^p}\right) = \mathcal{O}(n)$$
* **Coût global :** En sommant le coût de fusion sur l'ensemble des $\log_2(n)$ niveaux de l'arbre, on obtient :
  $$\text{Complexité totale} = (\text{Nombre de niveaux}) \times (\text{Coût par niveau}) = \log_2(n) \times \mathcal{O}(n) = \mathcal{O}(n \log_2 n)$$

#### 4. Analyse critique des compromis spatiaux et temporels
* **Complexité spatiale (Mémoire) :** Contrairement au tri par insertion qui réorganise les éléments *in situ* ($\mathcal{O}(1)$ en espace auxiliaire), le tri fusion alloue de nouvelles listes à chaque étape de découpe et de fusion. 
* **Application numérique :** Soit un ensemble de $n = 10^8$ entiers stockés au format standard de $64 \text{ bits}$ ($8 \text{ octets}$).
  - Volume de données brut : $10^8 \times 8 \text{ octets} = 8 \times 10^8 \text{ octets} \approx 762{,}94 \text{ Mio}$.
  - En raison de la création récursive de sous-listes et des copies successives lors de l'étape de fusion, l'empreinte mémoire maximale de l'algorithme atteint un ordre de grandeur de $\mathcal{O}(n)$, nécessitant l'allocation de tampons mémoires temporaires équivalents à la taille du jeu de données initial (soit une surconsommation critique de l'ordre de plusieurs centaines de mébioctets, voire gigaoctets selon les surcouches du ramasse-miettes de l'interpréteur Python).
* **Limites et compromis :** Bien que le tri fusion surpasse les algorithmes en $\mathcal{O}(n^2)$ sur le plan temporel pour de grands $n$, sa complexité spatiale en $\mathcal{O}(n)$ le rend difficilement applicable sans adaptations sur des systèmes à mémoire contrainte (systèmes embarqués) ou pour des flux de données dépassant la capacité de la mémoire vive, nécessitant alors le recours à des variantes de tri externe (*External Sorting*).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
