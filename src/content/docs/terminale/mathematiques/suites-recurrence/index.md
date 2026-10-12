---
title: "Cours : Suites et raisonnement par récurrence"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Une suite numérique est une fonction de $\mathbb{N}$ (ou d'une partie de $\mathbb{N}$) dans $\mathbb{R}$. Elle associe à chaque entier $n$ un nombre réel noté $u_n$, appelé terme général de la suite.

Une suite peut être définie de deux manières principales :
- **De manière explicite** : Le terme général $u_n$ est exprime directement en fonction de $n$ (ex: $u_n = 2n + 1$).
- **De manière récurrente** : Le premier terme (ou les premiers termes) est donne, et chaque terme est defini a l'aide du (ou des) precedent(s) (ex: $u_0 = 1$ et $u_{n+1} = 2u_n + 1$).

Le **raisonnement par récurrence** est un mode de démonstration mathématique utilise pour prouver qu'une proposition $P_n$, dependant d'un entier naturel $n$, est vraie pour tout entier $n \ge n_0$. Il repose sur le principe de l'effet domino et se decompose en deux etapes indispensables :
1. **L'initialisation** : On verifie que la proposition est vraie pour le premier rang $n_0$.
2. **L'hérédité** : On démontre que, si la proposition est vraie pour un entier $n \ge n_0$ quelconque (hypothèse de récurrence), alors elle est vraie au rang suivant $n+1$.

---

## 📐 2. Formules et Propriétés fondamentales

### Principe de récurrence
Soit $P_n$ une proposition dependant d'un entier $n \ge n_0$. Si :
1. $P_{n_0}$ est vraie (Initialisation),
2. Pour tout $n \ge n_0$, si $P_n$ est vraie alors $P_{n+1}$ est vraie (Hérédité),

Alors $P_n$ est vraie pour tout $n \ge n_0$.

### Suites arithmétiques
Une suite $(u_n)$ est arithmétique de raison $r \in \mathbb{R}$ si, pour tout entier $n$, on a :
$$u_{n+1} = u_n + r$$

- **Formule explicite** : $u_n = u_p + (n - p)r$
- **Somme de termes consécutifs** : 
$$\sum_{k=0}^{n} u_k = (n + 1) \times \frac{u_0 + u_n}{2} = \text{Nombre de termes} \times \frac{\text{Premier terme} + \text{Dernier terme}}{2}$$

### Suites géométriques
Une suite $(u_n)$ est géométrique de raison $q \in \mathbb{R}$ si, pour tout entier $n$, on a :
$$u_{n+1} = q \times u_n$$

- **Formule explicite** : $u_n = u_p \times q^{n-p}$
- **Somme de termes consécutifs** (si $q \neq 1$) : 
$$\sum_{k=0}^{n} u_k = u_0 \times \frac{1 - q^{n+1}}{1 - q} = \text{Premier terme} \times \frac{1 - q^{\text{Nombre de termes}}}{1 - q}$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Soit la suite $(u_n)$ définie par $u_0 = 0$ et, pour tout entier naturel $n$, $u_{n+1} = \frac{1}{2}u_n + 1$.
Démontrer par récurrence que, pour tout entier naturel $n$, $u_n < 2$.

**Correction rédigée :**

Soit $P_n$ la proposition : "$u_n < 2$". Démontrons par récurrence que $P_n$ est vraie pour tout $n \in \mathbb{N}$.

* **Étape 1 : Initialisation**
Pour $n = 0$, on a $u_0 = 0$. 
Or, $0 < 2$, donc $u_0 < 2$.
La proposition $P_0$ est donc vraie.

* **Étape 2 : Hérédité**
Supposons qu'il existe un entier $n \ge 0$ tel que $P_n$ soit vraie, c'est-à-dire que $u_n < 2$ (hypothèse de récurrence). Montrons que $P_{n+1}$ est vraie, c'est-à-dire que $u_{n+1} < 2$.

Par définition de la suite :
$$u_{n+1} = \frac{1}{2}u_n + 1$$

D'après l'hypothèse de récurrence, nous savons que :
$$u_n < 2$$

Multiplions les deux membres par $\frac{1}{2}$ (qui est positif, donc l'inégalité conserve son sens) :
$$\frac{1}{2}u_n < \frac{1}{2} \times 2$$
$$\frac{1}{2}u_n < 1$$

Ajoutons $1$ de chaque côté :
$$\frac{1}{2}u_n + 1 < 1 + 1$$
$$u_{n+1} < 2$$

La proposition $P_{n+1}$ est donc vraie.

* **Étape 3 : Conclusion**
Le principe de récurrence étant vérifié, la proposition $P_n$ est vraie pour tout entier naturel $n$.
On a donc bien :
$$\forall n \in \mathbb{N}, \quad u_n < 2$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

1. **Ne jamais omettre l'initialisation :** Une récurrence sans initialisation n'a aucune valeur mathématique. C'est l'étape fondamentale qui enclenche l'effet domino.
2. **Rédiger clairement l'hypothèse d'hérédité :** Il faut impérativement formuler l'hypothèse ("*Supposons qu'il existe un entier $n$ tel que...*") avant de l'utiliser. N'écrivez jamais directement $u_{n+1} < 2$ au début de l'hérédité, c'est ce que vous devez **démontrer**.
3. **Attention au sens des inégalités :** Lors des manipulations algébriques dans l'hérédité, veillez à respecter les règles sur les signes (multiplier par un nombre négatif inverse le sens d'une inégalité).
4. **Préciser le domaine de validité :** Si la récurrence commence à un rang $n_0 = 1$ ou $n_0 = 2$, l'initialisation doit se faire à ce rang spécifique et non nécessairement à $0$.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
