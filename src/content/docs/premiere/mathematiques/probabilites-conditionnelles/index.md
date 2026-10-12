---
title: "Cours : Probabilités conditionnelles"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Cours : Probabilités conditionnelles

## 📌 1. Notions clés & Définitions

Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé, où $\Omega$ est l'univers (l'ensemble des issues possibles), $\mathcal{A}$ la tribu des événements, et $P$ une probabilité.

### Définition (Probabilité conditionnelle)
Soient $A$ et $B$ deux événements tels que $P(B) \neq 0$. 
La probabilité de l'événement $A$ sachant que l'événement $B$ est réalisé, notée $P_B(A)$ ou $P(A \mid B)$, est définie par :

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

* **Interprétation intuitive :** Restreindre l'univers $\Omega$ à l'événement $B$ revient à considérer $B$ comme le nouvel univers de référence. La probabilité de $A$ dans ce nouveau contexte est proportionnelle à la probabilité de l'intersection $A \cap B$ rapportée à la probabilité totale de $B$.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Propriétés d'une probabilité conditionnelle
Pour tout événement $B$ de probabilité non nulle, l'application $A \mapsto P(A \mid B)$ est une probabilité sur $\Omega$. Par conséquent, elle vérifie les axiomes usuels des probabilités :
1. Pour tout événement $A$, $0 \le P(A \mid B) \le 1$.
2. $P(\Omega \mid B) = 1$ et $P(\emptyset \mid B) = 0$.
3. Pour tout événement $A$, $P(\bar{A} \mid B) = 1 - P(A \mid B)$.

### B. Formule des probabilités composées (ou multiplication)
De la définition précédente, si $P(B) \neq 0$, on tire immédiatement :
$$P(A \cap B) = P(B) \times P(A \mid B)$$
De même, si $P(A) \neq 0$ :
$$P(A \cap B) = P(A) \times P(B \mid A)$$

### C. Formule des probabilités totales
Soit $(A_1, A_2, \dots, A_n)$ une partition de l'univers $\Omega$ (c'est-à-dire que les événements $A_i$ sont deux à deux disjoints et que leur réunion est $\Omega$), constituée d'événements de probabilités non nulles. 

Pour tout événement $B$ :
$$P(B) = \sum_{i=1}^{n} P(B \cap A_i) = \sum_{i=1}^{n} P(A_i) \times P_A_i(B)$$

Dans le cas particulier (très fréquent en classe de Première) d'un événement $A$ et de son contraire $\bar{A}$ (avec $P(A) \in ]0, 1[$) :
$$P(B) = P(A \cap B) + P(\bar{A} \cap B) = P(A) \times P(A)(B) + P(\bar{A}) \times P_{\bar{A}}(B)$$

---

## 💡 3. Exemple d'application résolu

### Énoncé :
Dans une population, un test dépiste une maladie. 
* 2 % de la population est malade. On note $M$ l'événement « la personne est malade ».
* Si une personne est malade, le test est positif dans 90 % des cas.
* Si une personne n'est pas malade, le test est positif dans 5 % des cas (faux positif). On note $T$ l'événement « le test est positif ».

On choisit une personne au hasard. Déterminer la probabilité qu'elle soit malade et que son test soit positif, puis déterminer la probabilité totale que son test soit positif.

### Résolution rigoureuse :

1. **Traduction des données de l'énoncé :**
   * $P(M) = 0,02$ donc $P(\bar{M}) = 1 - 0,02 = 0,98$.
   * $P_M(T) = 0,90$ (probabilité que le test soit positif sachant que la personne est malade).
   * $P_{\bar{M}}(T) = 0,05$ (probabilité d'un faux positif).

2. **Calcul de la probabilité de l'intersection $P(M \cap T)$ :**
   D'après la formule des probabilités composées :
   $$P(M \cap T) = P(M) \times P_M(T)$$
   $$P(M \cap T) = 0,02 \times 0,90 = 0,018$$
   La probabilité qu'une personne soit malade et ait un test positif est de $0,018$.

3. **Calcul de la probabilité totale $P(T)$ :**
   Les événements $M$ et $\bar{M}$ forment une partition de l'univers. D'après la formule des probabilités totales :
   $$P(T) = P(M \cap T) + P(\bar{M} \cap T)$$
   Calculons d'abord $P(\bar{M} \cap T)$ :
   $$P(\bar{M} \cap T) = P(\bar{M}) \times P_{\bar{M}}(T) = 0,98 \times 0,05 = 0,049$$
   Ainsi :
   $$P(T) = 0,018 + 0,049 = 0,067$$
   La probabilité que le test d'une personne prise au hasard soit positif est de $0,067$ (soit 6,7 %).

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention à l'inversion des conditionnements :** 
  $P_B(A)$ et $P_A(B)$ sont deux nombres généralement **différents**. Confondre $P_M(T)$ (probabilité d'avoir un test positif sachant qu'on est malade) et $P_T(M)$ (probabilité d'être malade sachant que le test est positif) est l'une des erreurs les plus fréquentes.
* **Vérification des arbres de probabilités :** 
  Sur un arbre pondéré, la branche du haut menant à $A$ puis $B$ représente l'intersection $A \cap B$ et sa probabilité se calcule par *produit* le long des branches ($P(A) \times P_A(B)$). Ne pas additionner les probabilités le long d'un même chemin.
* **Somme des branches issues d'un même nœud :** 
  La somme des probabilités des branches qui se séparent d'un même nœud est **toujours égale à 1** (par exemple, $P_A(B) + P_A(\bar{B}) = 1$).
* **Rédaction :** 
  Préciser toujours l'ensemble ou l'événement conditionnant par une phrase claire (« Sachant que l'événement $B$ est réalisé... ») avant d'appliquer les formules pour garantir la rigueur de la copie d'évaluation.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
