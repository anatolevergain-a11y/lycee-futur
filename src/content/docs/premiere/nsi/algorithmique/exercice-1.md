---
title: "Exercice 1 : Algorithmes de tri (tri par sélection, tri à bulles)"
description: "Application pratique du chapitre Algorithmique élémentaire"
---

### 🌐 Contexte concret

Dans le cadre de la gestion d'une bibliothèque numérique, vous êtes chargé(e) d'optimiser l'affichage d'une liste de livres. Les livres sont actuellement désordonnés et stockés dans un tableau selon leur nombre de pages. Pour permettre aux utilisateurs de trouver rapidement les livres les plus courts ou les plus longs, vous devez implémenter et comprendre le fonctionnement des algorithmes de tri vus en cours de NSI : le **tri par sélection** et le **tri à bulles**.

Soit le tableau initial de notes ou de pages à trier : 
$$T = [7, 3, 5, 2, 8$$]

---

### ❓ Énoncé

1. **Question 1 :** Appliquer manuellement la première étape (le premier parcours complet) du **tri par sélection** sur le tableau $T$. Donnez l'état du tableau après cette première étape.
2. **Question 2 :** Appliquer manuellement la première étape (le premier parcours complet) du **tri à bulles** sur le tableau $T$ (en faisant "remonter" les plus grandes valeurs vers la fin). Donnez l'état du tableau après cette première étape.
3. **Question 3 :** Compléter la fonction Python ci-dessous qui réalise un **tri par sélection** en ordre croissant.

```python
def tri_selection(t):
    n = len(t)
    for i in range(n - 1):
        min_idx = i
        for j in range(..., ...):
            if t[j] < t[min_idx]:
                min_idx = j
        # Échange
        t[i], t[min_idx] = t[min_idx], t[i]
    return t
```

4. **Question 4 :** Quelle est la complexité en temps au pire des cas pour ces deux algorithmes, et pourquoi ?

---

### 💡 Indice

- **Pour le tri par sélection :** À chaque tour $i$, on cherche le plus petit élément dans la sous-liste allant de l'indice $i$ jusqu'à la fin du tableau, puis on l'échange avec l'élément en position $i$.
- **Pour le tri à bulles :** On compare les éléments adjacents deux à deux ($t[j]$ et $t[j+1]$) et on les échange s'ils sont dans le mauvais ordre. Le plus grand élément "flotte" naturellement vers la fin du tableau à la fin du premier parcours.
- **Pour le code Python (Q3) :** Réfléchissez bien aux bornes de la seconde boucle `for` pour ne parcourir que la partie non triée du tableau.

---

### 📋 Correction détaillée pas à pas

#### Correction Question 1 : Tri par sélection (1ère étape)
Le tableau initial est $T = [7, 3, 5, 2, 8]$.
* On cherche le plus petit élément dans tout le tableau $[7, 3, 5, 2, 8]$. C'est le nombre $2$ (situé à l'indice $3$).
* On l'échange avec le premier élément du tableau ($7$).
* **État du tableau après la 1ère étape :** 
  $$T = [2, 3, 5, 7, 8]$$
*(Note : Le plus petit élément est maintenant à sa place définitive).*

#### Correction Question 2 : Tri à bulles (1ère étape)
Le tableau initial est $T = [7, 3, 5, 2, 8]$.
On compare les éléments adjacents de gauche à droite :
* On compare $7$ et $3$ : $7 > 3$, on échange $\rightarrow [3, 7, 5, 2, 8]$
* On compare $7$ et $5$ : $7 > 5$, on échange $\rightarrow [3, 5, 7, 2, 8]$
* On compare $7$ et $2$ : $7 > 2$, on échange $\rightarrow [3, 5, 2, 7, 8]$
* On compare $7$ et $8$ : $7 < 8$, pas d'échange $\rightarrow [3, 5, 2, 7, 8]$
* **État du tableau après la 1ère étape :** 
  $$T = [3, 5, 2, 7, 8]$$
*(Note : Le plus grand élément, $8$, a "bulé" jusqu'à la fin du tableau).*

#### Correction Question 3 : Code Python du tri par sélection
Pour compléter la fonction, la sous-boucle doit parcourir les éléments situés après l'indice $i$ jusqu'à la fin du tableau (indice $n$).

```python
def tri_selection(t):
    n = len(t)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):  # <-- Correction ici
            if t[j] < t[min_idx]:
                min_idx = j
        # Échange
        t[i], t[min_idx] = t[min_idx], t[i]
    return t
```

#### Correction Question 4 : Complexité
La complexité en temps au pire des cas (et même dans le cas moyen) pour le tri par sélection et le tri à bulles est de **$\mathcal{O}(n^2)$** (en $n$ au carré), où $n$ est la taille du tableau.

**Justification :** 
Ces deux algorithmes utilisent deux boucles imbriquées (une boucle principale et une boucle interne qui parcourent toutes deux environ $n$ éléments). Le nombre total d'opérations (comparaisons et échanges) est proportionnel à :
$$\sum_{i=1}^{n-1} i = \frac{n(n-1)}{2} = \frac{n^2 - n}{2}$$
Ce qui donne une complexité asymptotique de $\mathcal{O}(n^2)$.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
