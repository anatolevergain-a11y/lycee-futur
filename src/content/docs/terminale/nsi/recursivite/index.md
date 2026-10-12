---
title: "Cours : Récursivité et divise pour régner"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

La récursivité est un concept fondamental en informatiques où une fonction s'appelle elle-meme pour resoudre une instance d'un probleme en se basant sur des instances plus petites de ce meme probleme.

- **Fonction recursive** : Fonction qui comporte au moins un appel a elle-meme dans son propre corps.
- **Cas de base (ou condition d'arret)** : Condition qui permet a la fonction de cesser les appels recursifs et de renvoyer un resultat direct. Tout algorithme recursif doit posseder au moins un cas de base pour eviter une boucle infinie (et un debordement de pile, ou *stack overflow*).
- **Cas recursif** : Partie de la fonction ou le probleme est decompose en un ou plusieurs sous-problemes plus simples, resolus par des appels recursifs.
- **Paradigme "Divise pour regner" (*Divide and Conquer*)** : Methode de conception d'algorithmes reposant sur trois etapes :
  1. *Diviser* : Decouper le probleme initial en sous-problemes de meme type mais de taille inferieure.
  2. *Regner* : Resoudre les sous-problemes recursivement (si les sous-problemes sont assez petits, les resoudre directement via les cas de base).
  3. *Combiner* : Fusionner les solutions des sous-problemes pour obtenir la solution du probleme initial.

---

## 📐 2. Formules et Propriétés fondamentales

L'analyse de la complexite d'un algorithme recursif ou base sur le principe "divise pour regner" s'appuie sur la resolution d'equations de recurrence.

### Equation de recurrence generale
Pour un algorithme qui divise un probleme de taille $n$ en $a$ sous-problemes de taille $\frac{n}{b}$, avec un cout de division et de combinaison en $f(n)$, le temps d'execution $T(n)$ est modelise par :

$$T(n) = a \cdot T\left(\frac{n}{b}\right) + f(n)$$

### Exemples fondamentaux

1. **Recherche dichotomique (Divise pour regner lineaire)** :
   $$T(n) = T\left(\frac{n}{2}\right) + \mathcal{O}(1)$$
   La complexite temporelle est en $\mathcal{O}(\log_2(n))$.

2. **Tri fusion (*Mergesort*)** :
   $$T(n) = 2 \cdot T\left(\frac{n}{2}\right) + \mathcal{O}(n)$$
   La complexite temporelle est en $\mathcal{O}(n \log_2(n))$.

3. **Pile d'execution (Espace memoire)** :
   La profondeur maximale de la pile d'appels est directement liee au nombre d'appels imbriques. Pour une recursivite lineaire simple, la complexite spatiale est en $\mathcal{O}(n)$ en raison du stockage des contextes d'appels successifs.

---

## 💡 3. Exemple d'application résolu

### Calcul recursif de la factorielle
La factorielle d'un entier naturel $n$, noteee $n!$, est definie par $n! = n \times (n-1)!$ avec $0! = 1$.

#### Code en Python
```python
def factorielle(n: int) -> int:
    """Calcule la factorielle d'un entier n de maniere recursive."""
    # Cas de base
    if n == 0:
        return 1
    # Cas recursif
    else:
        return n * factorielle(n - 1)
```

#### Demonstration du deroulement pour $n = 3$
1. `factorielle(3)` appelle `3 * factorielle(2)`
2. `factorielle(2)` appelle `2 * factorielle(1)`
3. `factorielle(1)` appelle `1 * factorielle(0)`
4. `factorielle(0)` renvoie `1` (Cas de base)
5. Remontee de la pile :
   - `factorielle(1)` renvoie $1 \times 1 = 1$
   - `factorielle(2)` renvoie $2 \times 1 = 2$
   - `factorielle(3)` renvoie $3 \times 2 = 6$
6. Resultat final : $6$.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

- **Oubli du cas de base** : C'est l'erreur classique entrainant une erreur de type `RecursionError` en Python (depassement de la profondeur maximale de pile). Verifiez toujours que chaque appel se rapproche strictement du cas de base.
- **Mauvaise convergence** : S'assurer que le parametre d'appel diminue (ou augmente vers une limite) a chaque etape (par exemple, passer de $n$ a $n-1$ ou $\frac{n}{2}$).
- **Effets de bord et mutabilite** : Attention aux structures de donnees modifiables (listes en Python) passees en argument. La recursivite pure prefere l'immutabilite pour eviter des modifications inattendues de l'etat global.
- **Conseil evaluation** : Lors d'un exercice sur le "divise pour regner", veillez a bien expliciter les trois etapes (Division, Resolution, Combinaison) et sachez retrouver ou utiliser le Master Theorem (ou arbre de recurrence) pour justifier la complexite.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
