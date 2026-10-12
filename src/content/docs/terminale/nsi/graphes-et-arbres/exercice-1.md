---
title: "Exercice 1 : Algorithme de Dijkstra pour les GPS"
description: "Application pratique du chapitre Structures hiérarchiques : Arbres et Graphes"
---

### 🌐 Contexte concret

Dans le cadre de la spécialité Numérique et Sciences Informatiques (NSI) en Terminale, l'étude des graphes orientés et pondérés trouve une application directe et quotidienne dans les systèmes de navigation par satellite (GPS). 

Imaginons un réseau routier simplifié reliant $5$ villes (notées $A, B, C, D, E$). Les routes sont modélisées par des arêtes orientées (ou non, pour faire simple des routes à double sens ici) et le poids de chaque arête représente le **temps de parcours en minutes**. 

Le système embarqué de votre véhicule doit déterminer le plus rapidement possible le chemin le plus court (en termes de durée) entre la ville de départ $A$ et la ville d'arrivée $E$. Le tableau des distances directes (adjacence pondérée) entre les villes est le suivant :

* $A \to B$ : $4$ min
* $A \to C$ : $2$ min
* $B \to C$ : $1$ min
* $B \to D$ : $5$ min
* $C \to D$ : $8$ min
* $C \to E$ : $10$ min
* $D \to E$ : $2$ min

---

### ❓ Énoncé

1. **Modélisation :** Représentez ce réseau routier sous forme de graphe $G = (V, E)$ en précisant l'ensemble des sommets $V$ et l'ensemble des arêtes pondérées $E$.
2. **Initialisation :** Donnez l'état initial des structures de données (le tableau ou le dictionnaire des distances minimales provisoires et des prédécesseurs) nécessaires pour appliquer l'algorithme de Dijkstra en partant du sommet $A$.
3. **Exécution :** Appliquez pas à pas l'algorithme de Dijkstra en indiquant pour chaque étape le sommet sélectionné, la mise à jour des distances des voisins, et le marquage du sommet comme visité.
4. **Conclusion :** Quel est le chemin optimal pour aller de $A$ à $E$ ainsi que la durée totale de ce trajet ?

---

### 💡 Indice

* Pour la **question 1**, pensez à lier chaque paire de villes connectées par un coût.
* Pour les **questions 2 et 3**, souvenez-vous du principe de l'algorithme de Dijkstra : à chaque étape, on choisit le sommet **non visité** qui possède la **distance provisoire la plus faible**, puis on met à jour les distances de ses voisins adjacents non visités via l'inégalité triangulaire : 
$$\text{Si } \text{dist}(u) + \text{poids}(u, v) < \text{dist}(v) \text{ alors } \text{dist}(v) \leftarrow \text{dist}(u) + \text{poids}(u, v)$$

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation du graphe
Le graphe $G = (V, E)$ est défini ainsi :
* Ensemble des sommets $V = \{A, B, C, D, E\}$
* Ensemble des arêtes pondérées $E = \{ (A,B,4), (A,C,2), (B,C,1), (B,D,5), (C,D,8), (C,E,10), (D,E,2) \}$

#### 2. Initialisation
On initialise les distances depuis le sommet de départ $A$ :
* $\text{dist}(A) = 0$
* $\text{dist}(B) = \infty$, $\text{dist}(C) = \infty$, $\text{dist}(D) = \infty$, $\text{dist}(E) = \infty$
* Ensemble des sommets visités $S = \emptyset$
* Dictionnaire des prédécesseurs : $\text{pred} = \{\}$

#### 3. Exécution pas à pas de l'algorithme de Dijkstra

* **Étape 1 :** 
  * Sommets non visités : $A(0), B(\infty), C(\infty), D(\infty), E(\infty)$.
  * On choisit le sommet avec la distance minimale : **$A$** (distance $0$). On le marque comme visité. $S = \{A\}$.
  * On met à jour les voisins de $A$ ($B$ et $C$) :
    * $\text{dist}(B) = \min(\infty, \text{dist}(A) + poids(A,B)) = \min(\infty, 0 + 4) = 4$. $\text{pred}[B] = A$.
    * $\text{dist}(C) = \min(\infty, \text{dist}(A) + poids(A,C)) = \min(\infty, 0 + 2) = 2$. $\text{pred}[C] = A$.

* **Étape 2 :**
  * Sommets non visités : $B(4), C(2), D(\infty), E(\infty)$.
  * On choisit le sommet non visité avec la plus petite distance : **$C$** (distance $2$). On l'ajoute à $S$. $S = \{A, C\}$.
  * On met à jour les voisins non visités de $C$ ($B$, $D$, $E$) :
    * Voisin $B$ : $\text{dist}(C) + poids(C,B) = 2 + 1 = 3$. Comme $3 < 4$, on met à jour $\text{dist}(B) = 3$ et $\text{pred}[B] = C$.
    * Voisin $D$ : $\text{dist}(C) + poids(C,D) = 2 + 8 = 10$. Comme $10 < \infty$, $\text{dist}(D) = 10$, $\text{pred}[D] = C$.
    * Voisin $E$ : $\text{dist}(C) + poids(C,E) = 2 + 10 = 12$. Comme $12 < \infty$, $\text{dist}(E) = 12$, $\text{pred}[E] = C$.

* **Étape 3 :**
  * Sommets non visités : $B(3), D(10), E(12)$.
  * On choisit le sommet non visité avec la plus petite distance : **$B$** (distance $3$). On l'ajoute à $S$. $S = \{A, C, B\}$.
  * On met à jour les voisins non visités de $B$ ($D$) :
    * Voisin $D$ : $\text{dist}(B) + poids(B,D) = 3 + 5 = 8$. Comme $8 < 10$, on met à jour $\text{dist}(D) = 8$ et $\text{pred}[D] = B$.

* **Étape 4 :**
  * Sommets non visités : $D(8), E(12)$.
  * On choisit **$D$** (distance $8$). On l'ajoute à $S$. $S = \{A, C, B, D\}$.
  * On met à jour le voisin non visité de $D$ ($E$) :
    * Voisin $E$ : $\text{dist}(D) + poids(D,E) = 8 + 2 = 10$. Comme $10 < 12$, on met à jour $\text{dist}(E) = 10$ et $\text{pred}[E] = D$.

* **Étape 5 :**
  * Il reste uniquement le sommet **$E$** (distance $10$). On l'ajoute à $S$. Tous les sommets sont visités.

#### 4. Conclusion
* **Durée totale minimale :** $\text{dist}(E) = 10$ minutes.
* **Chemin optimal :** En remontant les prédécesseurs depuis $E$ :
  * $\text{pred}[E] = D$
  * $\text{pred}[D] = B$
  * $\text{pred}[B] = C$
  * $\text{pred}[C] = A$
  
  Le chemin le plus court est donc : **$A \to C \to B \to D \to E$** pour un coût total de $2 + 1 + 5 + 2 = 10$ minutes.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
