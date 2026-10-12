---
title: "Exercice 1 : Fonctions récursives et pile d'exécutions"
description: "Application pratique du chapitre Récursivité et divise pour régner"
---

### 🌐 Contexte & Données scientifiques

En architecture des ordinateurs et en programmation impérative, l'évaluation des fonctions récursives repose sur l'utilisation d'une structure de données fondamentale : la **pile d'exécutions** (ou *call stack*). Chaque appel récursif empile un nouveau contexte d'exécution (contenant les variables locales, les paramètres et l'adresse de retour). 

Considérons une fonction mathématique classique, définie pour tout entier $n \in \mathbb{N}$:

$$f(n) = \begin{cases} 
1 & \text{si } n = 0 \\
f(n-1) + 2n & \text{si } n > 0 
\end{cases}$$

Dans le modèle d'exécution standard de Python, la profondeur maximale de la pile est limitée par défaut (généralement $1000$ appels) afin de prévenir les dépassements de mémoire tampon (*stack overflow*). L'analyse de la complexité spatiale et temporelle d'un tel algorithme nécessite de quantifier la hauteur maximale de la pile ainsi que le nombre total d'opérations élémentaires.

---

### ❓ Énoncé

1. **Écriture de la fonction :** Écrire en langage Python la fonction récursive `calcul_f(n)` traduisant rigoureusement la définition mathématique de $f(n)$. On veillera à expliciter le cas de base (condition d'arrêt).
2. **Modélisation de la pile :** Représenter sous forme de schémas successifs l'état de la pile d'exécutions lors de l'évaluation de l'appel `calcul_f(3)`. On précisera pour chaque niveau le paramètre d'entrée et la valeur de retour en attente.
3. **Complexité spatiale :** Soit $h(n)$ la hauteur maximale de la pile d'exécutions en fonction de $n$. Justifier par un raisonnement logique l'ordre de grandeur de $h(n)$ en notation $\mathcal{O}(\cdot)$ et discuter des limites de ce modèle pour des valeurs de $n$ supérieures à $10^5$.
4. **Optimisation comparative :** On cherche à évaluer le coût d'une écriture itérative équivalente. Expliquer pourquoi la récursion simple utilisée ici, bien que linéaire en espace, n'illustre pas pleinement le paradigme "divise pour régner", et définir les critères qui distinguent cette récursion terminale (ou linéaire) d'une véritable stratégie "divise pour régner".

---

### 💡 Indice de méthode

* **Question 1 :** Identifiez clairement la condition d'arrêt (le cas de base où $n = 0$) pour éviter une récursion infinie, puis traduisez l'appel récursif pour $n > 0$.
* **Question 2 :** Procédez par étapes chronologiques : l'empilement s'effectue jusqu'à atteindre le cas de base, puis le dépilement propage les résultats intermédiaires de bas en haut.
* **Question 3 :** Reliez la hauteur maximale de la pile au nombre d'appels pendants stockés simultanément en mémoire. Pensez aux contraintes matérielles de la machine (taille de la pile d'appels du système d'exploitation).
* **Question 4 :** Pour le paradigme *divise pour régner* (ex: tri fusion), le problème est généralement divisé en $b$ sous-problèmes de taille $\frac{n}{a}$. Analysez la structure de l'arbre d'appel de la fonction `calcul_f`.

---

### 📋 Correction détaillée pas à pas

#### 1. Écriture de la fonction Python
La traduction directe de la définition par récurrence s'écrit de la manière suivante :

```python
def calcul_f(n: int) -> int:
    """Calcule de manière récursive la valeur de f(n)."""
    # Cas de base (condition d'arrêt)
    if n == 0:
        return 1
    # Cas récursif
    else:
        return calcul_f(n - 1) + 2 * n
```

#### 2. Modélisation de la pile d'exécutions pour `calcul_f(3)`
L'évaluation de `calcul_f(3)` génère la séquence d'appels suivante, visualisée par l'état maximal de la pile (lorsque `calcul_f(0)` est atteint) :

1. `calcul_f(3)` attend le résultat de `calcul_f(2) + 6`
2. `calcul_f(2)` attend le résultat de `calcul_f(1) + 4`
3. `calcul_f(1)` attend le résultat de `calcul_f(0) + 2`
4. `calcul_f(0)` s'évalue immédiatement et retourne $1$.

Le dépilement s'effectue ensuite ainsi :
* `calcul_f(1)` reçoit $1$ et retourne $1 + 2 = 3$.
* `calcul_f(2)` reçoit $3$ et retourne $3 + 4 = 7$.
* `calcul_f(3)` reçoit $7$ et retourne $7 + 6 = 13$.

#### 3. Analyse de la complexité spatiale et limites du modèle
À chaque appel récursif, un nouveau cadre de pile (*stack frame*) est alloué en mémoire pour stocker les variables locales et l'adresse de retour. 
* La hauteur maximale de la pile $h(n)$ est atteinte lorsque l'on arrive au cas de base $n=0$. 
* Le nombre d'appels empilés simultanément est de $n + 1$. 

La complexité en espace est donc de $\mathcal{O}(n)$. 

**Limites du modèle :** 
En Python, la limite de récursion (accessible via `sys.getrecursionlimit()`) est fixée par défaut à $1000$ pour des raisons de sécurité mémorielle. Si l'on tente d'évaluer `calcul_f(10000)`, l'interpréteur lève une exception de type `RecursionError` (*maximum recursion depth exceeded*). Pour s'affranchir de cette limite matérielle et logicielle, il conviendrait soit d'augmenter artificiellement la taille de la pile (ce qui comporte un risque avéré de saturation de la mémoire vive globale, le *stack overflow*), soit de privilégier une approche itérative en $\mathcal{O}(1)$ en espace.

#### 4. Comparaison avec le paradigme "Divise pour régner"
La fonction `calcul_f` met en œuvre une **récursion linéaire** (un seul appel récursif par niveau : `calcul_f(n-1)`). 

* **Divise pour régner :** Ce paradigme algorithmique consiste à diviser un problème en plusieurs sous-problèmes de plus petite taille (généralement au moins deux, comme dans le tri fusion ou la recherche dichotomique), à les résoudre récursivement, puis à combiner leurs solutions.
* **Complexité temporelle :** Ici, le nombre d'opérations est proportionnel à $n$, soit une complexité temporelle en $\mathcal{O}(n)$. Dans un algorithme "divise pour régner" équivalent (basé sur le Master Theorem), la complexité temporelle descend souvent à $\mathcal{O}(n \log n)$. 
* **Conclusion critique :** Traiter cet algorithme sous l'angle du "divise pour régner" serait un abus de langage, car la structure d'appel forme une simple liste chaînée d'opérations et non un arbre de récursion ramifié. L'intérêt algorithmique réside ici dans la démonstration de la correction par récurrence, mais l'efficacité opérationnelle reste strictement linéaire, tant en temps qu'en espace.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
