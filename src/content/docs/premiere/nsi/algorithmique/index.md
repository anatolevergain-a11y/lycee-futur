---
title: "Cours : Algorithmique élémentaire"
description: "Synthèse officielle du cours et formules essentielles."
---

## 📌 1. Notions clés & Définitions

En Numérique et Sciences Informatiques (NSI) en classe de Première, l'algorithmique élémentaire formalise la résolution de problèmes par une suite finie d'opérations.

*   **Algorithme :** Suite finie et non ambigüe d'instructions et d'opérations permettant de résoudre un problème donné.
*   **Complexité d'un algorithme :** Mesure des ressources (temps et espace mémoire) nécessaires pour exécuter l'algorithme en fonction de la taille $n$ des données d'entrée.
*   **Complexité en temps $T(n)$ :** Évaluation du nombre d'opérations élémentaires (affectations, comparaisons, opérations arithmétiques) exécutées par l'algorithme.
*   **Recherche séquentielle (ou linéaire) :** Parcours séquentiel d'une structure de données (comme une liste) du premier au dernier élément pour trouver une valeur cible.
*   **Recherche dichotomique :** Algorithme de recherche efficace dans un tableau **trié**, consistant à diviser l'intervalle de recherche par deux à chaque étape.

---

## 📐 2. Formules et Propriétés fondamentales

### Complexité des algorithmes de parcours de listes
Pour une liste de taille $n$ :
*   **Recherche séquentielle :**
    *   Complexité au pire des cas : $O(n)$ (l'élément n'est pas présent ou est à la fin).
    *   Complexité au meilleur des cas : $O(1)$ (l'élément est le premier).
*   **Recherche dichotomique :**
    *   Condition préalable : Le tableau doit être trié par ordre croissant ou décroissant.
    *   Complexité au pire des cas : $O(\log_2(n))$. 
    *   *Justification :* À chaque étape, la taille du sous-tableau est divisée par 2. Le nombre d'étapes $k$ pour arriver à un seul élément vérifie $n / 2^k = 1$, soit $k = \log_2(n)$.

---

## 💡 3. Exemple d'application résolu (Pas à pas)

**Problème :** Écrire et analyser la complexité d'une fonction Python implémentant la recherche dichotomique pour trouver l'indice d'une valeur `cible` dans un tableau trié `T`.

### Code Python :
```python
def recherche_dichotomique(T, cible):
    gauche = 0
    droite = len(T) - 1
    
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if T[milieu] == cible:
            return milieu  # Élément trouvé
        elif T[milieu] < cible:
            gauche = milieu + 1  # On cherche dans la moitié droite
        else:
            droite = milieu - 1  # On cherche dans la moitié gauche
            
    return -1  # Élément non trouvé
```

### Résolution pas à pas (avec $T = [2, 5, 8, 12, 16, 23]$ et `cible = 12`) :
1. **Initialisation :** `gauche = 0`, `droite = 5`.
2. **Itération 1 :** 
   - `milieu = (0 + 5) // 2 = 2`. 
   - `T[2] = 8`. Comme $8 < 12$, on pose `gauche = 2 + 1 = 3`.
3. **Itération 2 :** 
   - `milieu = (3 + 5) // 2 = 4`. 
   - `T[4] = 16`. Comme $16 > 12$, on pose `droite = 4 - 1 = 3`.
4. **Itération 3 :** 
   - `milieu = (3 + 3) // 2 = 3`. 
   - `T[3] = 12`. La valeur correspond à la `cible`, la fonction retourne l'indice `3`.

---

## ⚠️ 4. Pièges fréquents & Conseils pour les examens

*   **Piège 1 (Dichotomie) :** Oublier de vérifier si le tableau est trié avant d'appliquer une recherche dichotomique. La dichotomie sur un tableau non trié conduit à des résultats faux.
*   **Piège 2 (Indices) :** Attention aux erreurs de type *Off-by-one* (décalage de 1). Les indices en Python vont de $0$ à $n-1$. Une mauvaise gestion des bornes `gauche` et `droite` (ex: `gauche = milieu` au lieu de `gauche = milieu + 1`) peut entraîner une **boucle infinie**.
*   **Conseil 1 (Rédaction) :** Pour prouver la complexité d'un algorithme itératif, comptez le nombre de tours de boucle en fonction de $n$.
*   **Conseil 2 (Terminaison) :** Pour justifier qu'un algorithme se termine (boucle `while`), identifiez un **variant de boucle** (une quantité entière strictement positive qui décroît strictement à chaque tour).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
