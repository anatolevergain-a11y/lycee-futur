---
title: "Cours : Suites numériques"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Fiche de Cours : Suites Numériques

## 📌 1. Notions clés & Définitions

Une **suite numérique** est une fonction définie sur l'ensemble des entiers naturels $\mathbb{N}$ (ou sur une partie de $\mathbb{N}$, comme $\mathbb{N}$) à valeurs dans l'ensemble des nombres réels $\mathbb{R}$. 

À tout entier $n$, la suite associe un nombre réel noté $u_n$, appelé **terme de rang $n$** (ou terme général). La suite elle-même est notée $(u_n)_{n \in \mathbb{N}}$ ou simplement $(u_n)$.

### Modes de génération d'une suite :
1. **Formule explicite :** Le terme $u_n$ est exprimé directement en fonction de $n$. 
   * *Exemple :* $u_n = 2n^2 + 3n - 1$.
2. **Relation de récurrence :** Le ou les premiers termes sont donnés, et chaque terme est défini en fonction du ou des précédents.
   * *Exemple :* $u_0 = 1$ et pour tout $n \in \mathbb{N}$, $u_{n+1} = 2u_n + 3$.

### Variations d'une suite :
Soit $(u_n)$ une suite numérique.
* La suite $(u_n)$ est **croissante** si, pour tout entier $n$, $u_{n+1} \ge u_n$.
* La suite $(u_n)$ est **décroissante** si, pour tout entier $n$, $u_{n+1} \le u_n$.
* La suite $(u_n)$ est **constante** si, pour tout entier $n$, $u_{n+1} = u_n$.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Les suites arithmétiques
Une suite $(u_n)$ est arithmétique s'il existe un nombre réel $r$, appelé **raison**, tel que pour tout entier $n$ :
$$u_{n+1} = u_n + r$$

* **Formule explicite :** 
  Pour tous entiers $n$ et $p$ (avec $n \ge p$) :
  $$u_n = u_p + (n - p)r$$
  En particulier, si le premier terme est $u_0$ : $u_n = u_0 + nr$.

* **Somme de termes consécutifs :**
  La somme $S$ de $k$ termes consécutifs d'une suite arithmétique est donnée par :
  $$S = \text{Nombre de termes} \times \frac{\text{1er terme} + \text{dernier terme}}{2}$$
  De 0 à $n$ :
  $$\sum_{i=0}^{n} u_i = (n + 1) \frac{u_0 + u_n}{2}$$

---

### B. Les suites géométriques
Une suite $(u_n)$ est géométrique s'il existe un nombre réel $q$, appelé **raison**, tel que pour tout entier $n$ :
$$u_{n+1} = q \times u_n$$

* **Formule explicite :** 
  Pour tous entiers $n$ et $p$ (avec $n \ge p$) :
  $$u_n = u_p \times q^{n - p}$$
  En particulier, si le premier terme est $u_0$ : $u_n = u_0 \times q^n$.

* **Somme de termes consécutifs :**
  Si $q \neq 1$, la somme $S$ de $n+1$ termes consécutifs (de $u_0$ à $u_n$) s'exprime par :
  $$\sum_{i=0}^{n} u_i = u_0 \frac{1 - q^{n+1}}{1 - q} = \text{1er terme} \times \frac{1 - q^{\text{nombre de termes}}}{1 - q}$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Soit $(u_n)$ une suite arithmétique de raison $r = 3$ et de premier terme $u_0 = 2$.
1. Calculer $u_1$ et $u_5$.
2. Exprimer $u_n$ en fonction de $n$.
3. Calculer la somme $S = u_0 + u_1 + \dots + u_{10}$.

**Correction :**
1. **Calcul de $u_1$ et $u_5$ :**
   * $u_1 = u_0 + r = 2 + 3 = 5$.
   * Par récurrence ou formule explicite, $u_5 = u_0 + 5r = 2 + 5 \times 3 = 2 + 15 = 17$.

2. **Expression de $u_n$ en fonction de $n$ :**
   La suite étant arithmétique de premier terme $u_0$ et de raison $r$ :
   $$u_n = u_0 + nr = 2 + 3n$$

3. **Calcul de la somme $S$ :**
   La somme comporte $11$ termes (de $u_0$ à $u_{10}$). On utilise la formule :
   $$S = (\text{nombre de termes}) \times \frac{u_0 + u_{10}}{2}$$
   * On calcule d'abord $u_{10}$ : $u_{10} = 2 + 3 \times 10 = 32$.
   * On applique la formule :
     $$S = 11 \times \frac{2 + 32}{2} = 11 \times \frac{34}{2} = 11 \times 17 = 187$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Confondre expression explicite et relation de récurrence :** 
  Écrire $u_n = 3n + 2$ est une définition explicite. Écrire $u_{n+1} = u_n + 3$ est une relation de récurrence qui nécessite de connaître au moins un terme initial pour définir la suite de manière unique.
* **Erreur dans le nombre de termes pour une somme :** 
  Le nombre de termes dans la somme allant de $u_p$ à $u_n$ (avec $n \ge p$) est toujours égal à **$(n - p) + 1$** et non pas simplement $n - p$. Par exemple, de $u_1$ à $u_{10}$, il y a $10 - 1 + 1 = 10$ termes.
* **Étude du signe pour la variation :** 
  Pour étudier le sens de variation d'une suite $(u_n)$, privilégiez l'étude du signe de la différence $u_{n+1} - u_n$. Si la suite est à terms strictement positifs, le quotient $\frac{u_{n+1}}{u_n}$ comparé à $1$ est également une méthode efficace (particulièrement pour les suites géométriques).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
