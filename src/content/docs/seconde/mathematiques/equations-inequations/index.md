---
title: "Cours : Équations et inéquations"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Une **equation** est une egalite entre deux expressions mathematiques contenant une ou plusieurs lettres appelees **inconnues** (generalement notees $x$). 

* **Resoudre** une equation, c'est trouver toutes les valeurs de l'inconnue pour lesquelles l'egalite est vraie. Chacune de ces valeurs est une **solution** de l'equation.
* L'ensemble de toutes les solutions d'une equation est note generalement $\mathcal{S}$.

Une **inequation** est une inegalite (utilisant les symboles $<$, $>$, $\le$ ou $\ge$) entre deux expressions contenant une ou plusieurs inconnues.

* **Resoudre** une ineuation, c'est determiner toutes les valeurs de l'inconnue pour lesquelles l'inegalite est verifiee.

Une **equation du premier degre** a une inconnue est une equation pouvant se ramener a la forme canonique :
$$ax + b = 0$$
ou $a$ et $b$ sont des nombres reels donnes, avec $a \neq 0$.

Deux equations (ou inequations) sont dites **equivalentes** si elles ont exactement le meme ensemble de solutions.

---

## 📐 2. Proprietes fondamentales

La resolution d'equations et d'inequations repose sur l'application de regles garantissant l'obtention d'equations ou d'inequations equivalentes.

### A. Proprietes des egalites (pour les equations)
On ne change pas l'ensemble des solutions d'une equation si l'on applique les transformations suivantes :
1. **Ajouter ou soustraire** un meme nombre (ou une meme expression dependant de l'inconnue) aux deux membres d'une equation :
   Si $A = B$, alors $A + C = B + C$.
2. **Multiplier ou diviser** les deux membres d'une equation par un meme nombre **non nul** $k$ :
   Si $A = B$ et $k \neq 0$, alors $kA = kB$ et $\frac{A}{k} = \frac{B}{k}$.

### B. Proprietes des inegalites (pour les inequations)
1. On peut ajouter ou soustraire un meme nombre aux deux membres d'une inequation sans changer le sens de l'inegalite :
   Si $A < B$, alors $A + C < B + C$.
2. On peut **multiplier ou diviser** les deux membres d'une inequation par un meme nombre **strictement positif** $k$ ($k > 0$) sans changer le sens de l'inegalite :
   Si $A < B$ et $k > 0$, alors $kA < kB$.
3. ⚠️ **Attention particuliere :** Si l'on multiplie ou divise les deux membres d'une inequation par un meme nombre **strictement negatif** $k$ ($k < 0$), **le sens de l'inegalite est inverse** :
   Si $A < B$ et $k < 0$, alors $kA > kB$.

### C. Regle du produit nul
Un produit de facteurs est nul si et seulement si l'un au moins de ses facteurs est nul. 
Soit $A$ et $B$ deux expressions :
$$A \times B = 0 \iff A = 0 \text{ ou } B = 0$$
Cette propriete est fondamentale pour resoudre des equations de degre superieur a un apres factorisation.

---

## 💡 3. Exemple d'application resolu

**Enonce :**
Resoudre dans $\mathbb{R}$ l'inequation suivante :
$$-3x + 5 \le 2x - 4$$

**Resolution pas a pas :**

1. *Isoler les termes en $x$ dans le membre de gauche* en soustrayant $2x$ aux deux membres :
$$-3x - 2x + 5 \le -4$$
$$-5x + 5 \le -4$$

2. *Isoler le terme en $x$* en soustrayant $5$ aux deux membres :
$$-5x \le -4 - 5$$
$$-5x \le -9$$

3. *Diviser par le coefficient de $x$* (qui est $-5$, un nombre strictement negatif). 
Rappel : On doit **inverser le sens de l'inegalite**.
$$x \ge \frac{-9}{-5}$$
$$x \ge \frac{9}{5}$$

**Conclusion :**
L'ensemble des solutions de l'inequation est l'intervalle $\mathcal{S} = \left[\frac{9}{5}, +\infty\right[$ (ou $[1{,}8, +\infty[$).

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Oubli d'inversion du sens de l'inegalite :** C'est l'erreur la plus classique. Lors d'une division ou d'une multiplication par un nombre negatif, pensez systematiquement a changer le sens du symbole ($\le$ devient $\ge$, $<$ devient $>$, etc.).
* **Erreurs de signes lors des transferts de membres :** Lorsque l'on fait passer un terme d'un membre a l'autre, son signe change (ex: $+ 5$ devient $- 5$). Ne confondez pas cette regle d'addition/soustraction avec la multiplication.
* **Division par zero :** Il est strictement interdit de diviser par $0$. Veillez a bien preciser les valeurs interdites si l'inconnue apparait au denominateur (notion approfondie en fin de seconde / premiere).
* **Redaction de la solution :** Ne vous limitez pas a ecrire $x = 3$ ou $x \ge 2$. Concluez toujours clairement en ecrivant l'ensemble des solutions sous forme d'intervalle ou sous la phrase "L'ensemble des solutions est...".

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
