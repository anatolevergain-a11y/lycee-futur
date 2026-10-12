---
title: "Exercice : Vecteurs et déplacements"
description: "Démonstration appliquée : Planification du trajet d'un drone de livraison en ville"
---

### 🌐 Contexte moderne & concret

Dans le cadre du développement de la logistique urbaine intelligente, une entreprise de livraison teste l'utilisation de drones autonomes pour désengorger le trafic routier. Pour programmer le vol d'un drone, les ingénieurs utilisent un repère orthonormé $(O, \vec{i}, \vec{j})$ où l'unité représente $100$ mètres sur le terrain. 

Le drone doit partir d'un entrepôt central $E$, récupérer un colis médical d'urgence à la pharmacie $P$, le livrer à un patient à domicile $D$, puis retourner à sa base $B$ (qui est aussi l'entrepôt $E$). 

Les coordonnées des différents points dans le plan sont les suivantes :
* L'entrepôt $E(1 ; 2)$
* La pharmacie $P(5 ; 5)$
* Le domicile $D(9 ; 2)$
* La base de recharge $B(1 ; 2)$

### ❓ Énoncé (3 à 4 questions progressives)

1. **Modélisation du premier trajet :** Calculer les coordonnées du vecteur $\overrightarrow{EP}$ représentant le premier déplacement du drone de l'entrepôt à la pharmacie.
2. **Anticipation de la trajectoire :** Le plan de vol prévoit que le vecteur de déplacement de la pharmacie au domicile est $\overrightarrow{PD} = \begin{pmatrix} 4 \\ -3 \end{pmatrix}$. Déterminer par le calcul les coordonnées exactes du point $D$ (domicile du patient), et vérifier qu'elles correspondent bien aux données de l'énoncé.
3. **Relation de Chasles et vol de retour :** Le drone doit maintenant retourner de son point de livraison $D$ à sa base $B$. 
   a) Exprimer le déplacement total du drone pour l'ensemble de la mission sous la forme d'une somme vectorielle.
   b) Calculer les coordonnées du vecteur $\overrightarrow{DB}$.
4. **Optimisation énergétique :** Pour des raisons de sécurité, le constructeur indique qu'un vol rectiligne ne doit pas dépasser une distance équivalente à $600$ mètres. Le trajet de retour $\overrightarrow{DB}$ respecte-t-il cette norme de sécurité ? (*Rappel : dans le repère, $1$ unité $= 100$ mètres*).

### 💡 Indice

* **Question 1 :** Pour calculer les coordonnées d'un vecteur $\overrightarrow{AB}$ connaissant $A(x_A ; y_A)$ et $B(x_B ; y_B)$, utilisez la formule $\begin{pmatrix} x_B - x_A \\ y_B - y_A \end{pmatrix}$.
* **Question 2 :** Si $\overrightarrow{PD} = \begin{pmatrix} x_D - x_P \\ y_D - y_P \end{pmatrix}$, alors vous pouvez poser une équation simple pour trouver $x_D$ et $y_D$.
* **Question 3 :** Pensez à la relation de Chasles pour le trajet complet. Pour le vecteur $\overrightarrow{DB}$, appliquez la même méthode qu'à la question 1 en inversant le départ et l'arrivée.
* **Question 4 :** La distance $AB$ correspond à la norme du vecteur $\overrightarrow{AB}$, calculée par la formule $\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$. N'oubliez pas de convertir en mètres !

### 📋 Correction détaillée (Pas à pas)

1. **Calcul du vecteur $\overrightarrow{EP}$ :**
   Les coordonnées de l'entrepôt sont $E(1 ; 2)$ et celles de la pharmacie sont $P(5 ; 5)$.
   $$\overrightarrow{EP} = \begin{pmatrix} x_P - x_E \\ y_P - y_E \end{pmatrix} = \begin{pmatrix} 5 - 1 \\ 5 - 2 \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}$$
   Le premier déplacement s'effectue donc de $4$ unités vers l'est et de $3$ unités vers le nord.

2. **Vérification des coordonnées du point $D$ :**
   On sait que $\overrightarrow{PD} = \begin{pmatrix} 4 \\ -3 \end{pmatrix}$ et $P(5 ; 5)$. Soit $D(x_D ; y_D)$.
   Par définition des coordonnées d'un vecteur :
   $$\begin{cases} x_D - x_P = 4 \\ y_D - y_P = -3 \end{cases} \iff \begin{cases} x_D - 5 = 4 \\ y_D - 5 = -3 \end{cases}$$
   $$\iff \begin{cases} x_D = 4 + 5 = 9 \\ y_D = -3 + 5 = 2 \end{cases}$$
   Les coordonnées du domicile sont donc $D(9 ; 2)$, ce qui est bien cohérent avec l'énoncé.

3. **Trajet total et vecteur de retour $\overrightarrow{DB}$ :**
   a) Le trajet complet consiste à aller de $E$ à $P$, puis de $P$ à $D$, et enfin de $D$ à $B$. Par la relation de Chasles, le déplacement global est représenté par le vecteur somme :
   $$\vec{u}_{total} = \overrightarrow{EP} + \overrightarrow{PD} + \overrightarrow{DB}$$
   *(Note : Comme le drone revient à son point de départ $E = B$, ce vecteur total est en réalité nul).*

   b) Calculons les coordonnées du vecteur de retour $\overrightarrow{DB}$ avec $D(9 ; 2)$ et $B(1 ; 2)$ :
   $$\overrightarrow{DB} = \begin{pmatrix} x_B - x_D \\ y_B - y_D \end{pmatrix} = \begin{pmatrix} 1 - 9 \\ 2 - 2 \end{pmatrix} = \begin{pmatrix} -8 \\ 0 \end{pmatrix}$$

4. **Vérification de la norme (sécurité) :**
   La distance du vol de retour $DB$ se calcule grâce à la formule de la distance (norme du vecteur $\overrightarrow{DB}$) :
   $$DB = \sqrt{(x_B - x_D)^2 + (y_B - y_D)^2} = \sqrt{(-8)^2 + 0^2} = \sqrt{64} = 8 \text{ unités}$$
   Puisque $1$ unité représente $100$ mètres, la distance réelle est de :
   $$8 \times 100 = 800 \text{ mètres}$$
   **Conclusion :** Le trajet de retour mesure $800$ mètres. Il dépasse la limite de sécurité fixée à $600$ mètres ($800 > 600$). Le plan de vol doit donc être modifié (par exemple, en ajoutant une station de rechargement intermédiaire) pour valider la mission.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
