---
title: "Cours : Structures de données linéaires"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

En informatique, une **structure de données** est une manière particulière d'organiser, de stocker et de manipuler des données en mémoire afin de pouvoir les utiliser efficacement. Une structure est dite **linéaire** lorsque ses éléments sont agencés dans une séquence séquentielle, où chaque élément (à l'exception du premier et du dernier) possède un unique prédécesseur et un unique successeur.

Le programme de Numérique et Sciences Informatiques (NSI) de Première se focalise principalement sur deux structures de données linéaires fondamentales : **les piles (stacks)** et **les files (queues)**, ainsi que sur l'abstraction des listes.

*   **Pile (LIFO - *Last In, First Out*) :**
    Une pile est une structure de données linéaire qui fonctionne selon le principe du « dernier arrivé, premier sorti ». Les opérations d'ajout et de retrait s'effectuent exclusivement du même côté, appelé le **sommet** (*top*) de la pile.
    *   *Empiler* (`push`) : Ajoute un élément au sommet de la pile.
    *   *Dépiler* (`pop`) : Retire et renvoie l'élément situé au sommet de la pile.

*   **File (FIFO - *First In, First Out*) :**
    Une file est une structure de données linéaire qui fonctionne selon le principe du « premier arrivé, premier sorti ». Les ajouts s'effectuent d'un côté (la **queue** de la file) et les retraits de l'autre (la **tête** de la file).
    *   *Enfiler* (`enqueue`) : Ajoute un élément à l'arrière de la file.
    *   *Défiler* (`dequeue`) : Retire et renvoie l'élément situé à l'avant de la file.

*   **Interface et Implémentation :**
    Il est primordial de distinguer l'**interface** (les spécifications abstraites des opérations permises) de l'**implémentation** (la manière concrète dont la structure est codée en mémoire, par exemple à l'aide d'un tableau dynamique ou d'une liste chaînée).

---

## 📐 2. Formules et Propriétés fondamentales

### Complexité algorithmique des opérations

L'efficacité des structures de données s'évalue à l'aide de la notation de Landau ($\mathcal{O}$ grand). Soit $n$ le nombre d'éléments contenus dans la structure.

#### 1. Pour une Pile :
*   **Empiler (`push`) :** $\mathcal{O}(1)$ en temps amorti (si implémentée par un tableau dynamique) ou $\mathcal{O}(1)$ strict (si implémentée par une liste chaînée en début).
*   **Dépiler (`pop`) :** $\mathcal{O}(1)$.
*   **Accès au sommet :** $\mathcal{O}(1)$.

#### 2. Pour une File :
Selon l'implémentation choisie, les complexités diffèrent :
*   Si la file est implémentée à l'aide d'un tableau (liste Python) où l'indice $0$ est la tête :
    *   Enfiler : $\mathcal{O}(1)$ (en fin de liste).
    *   Défiler : $\mathcal{O}(n)$ (car il faut décaler tous les éléments d'un cran vers la gauche).
*   Si la file est implémentée de manière optimale (via un pointeur de tête et de queue, ou deux piles, ou un buffer circulaire) :
    *   Enfiler : $\mathcal{O}(1)$.
    *   Défiler : $\mathcal{O}(1)$.

### Propriété mathématique de récurrence (Piles)
Si l'on dispose d'une pile vide $P$ sur laquelle on applique $k$ opérations d'empilement successives d'éléments $e_1, e_2, \dots, e_k$, la séquence de dépilement restitue les éléments dans l'ordre inverse :
$$\text{Dépiler}(P) \rightarrow e_k, \text{ puis } e_{k-1}, \dots, \text{ puis } e_1$$

---

## 💡 3. Exemple d'application résolu

**Problème :** 
Écrire une classe Python représentant une **Pile** utilisant une liste native de Python sous le capot, puis implémenter une fonction permettant de vérifier si une chaîne de caractères contenant des parenthèses est bien parenthésée (ex: `"(())"` est valide, `")("` est invalide).

**Correction :**

```python
class Pile:
    def __init__(self):
        """Initialise une pile vide."""
        self._items = []

     est_vide(self) -> bool:
        """Renvoie True si la pile est vide, False sinon."""
        return len(self._items) == 0

    def empiler(self, item) -> None:
        """Ajoute un élément au sommet de la pile."""
        self._items.append(item)

    def depiler(self):
        """Retire et renvoie l'élément au sommet de la pile."""
        if self.est_vide():
            raise IndexError("Dépilage impossible : la pile est vide.")
        return self._items.pop()


def est_parenthesage_correct(expression: str) -> bool:
    """
    Vérifie si les parenthèses d'une expression sont correctement imbriquées.
    """
    p = Pile()
    for caractere in expression:
        if caractere == '(':
            p.empiler('(')
        elif caractere == ')':
            if p.est_vide():
                return False  # Parenthèse fermante sans ouvrante correspondante
            p.depiler()
            
    # La pile doit être vide à la fin pour que le parenthésage soit valide
    return p.est_vide()

# --- Tests ---
print(est_parenthesage_correct("((a + b) * c)"))  # Renvoie True
print(est_parenthesage_correct("((a + b"))       # Renvoie False
print(est_parenthesage_correct(")a + b("))       # Renvoie False
```

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

1. **Confusion entre LIFO et FIFO :** 
   * *Piège :* Confondre le comportement d'une file d'attente réelle (premier arrivé, premier servi $\rightarrow$ FIFO) et celui d'une pile d'assiettes (on prend la dernière posée $\rightarrow$ LIFO).
   * *Conseil :* Visualisez toujours l'analogie physique lors des épreuves écrites.

2. **Violer l'encapsulation (Interface vs Implémentation) :**
   * *Piège :* En Python, comme les piles et files sont souvent manipulées via des listes (`list`), il est tentant d'utiliser les indices (ex: `ma_pile[0]`) ou d'itérer directement dedans. 
   * *Conseil :* Respectez rigoureusement les méthodes de l'interface (`empiler`, `depiler`, `enfiler`, `defiler`, `est_vide`). Utiliser des méthodes non autorisées lors d'une évaluation est sanctionné.

3. **Ne pas tester si la structure est vide avant un retrait :**
   * *Piège :* Appeler `depiler()` ou `defiler()` sur une structure vide déclenche une exception (erreur d'indice ou `IndexError`).
   * *Conseil :* Vérifiez toujours systématiquement `if not p.est_vide():` avant d'effectuer un retrait, ou gérez l'exception via un bloc `try...except`.

4. **Attention à la complexité des files en Python :**
   * *Piège :* Utiliser `ma_file.pop(0)` pour simuler un défilement sur une liste Python standard. 
   * *Rappel scientifique :* `pop(0)` contraint l'interpréteur à déplacer l'ensemble des éléments restants en mémoire, ce qui engendre une complexité en $\mathcal{O}(n)$ et non en $\mathcal{O}(1)$. Mentionnez cette limite dans vos copies si l'implémentation par tableau simple est abordée.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
