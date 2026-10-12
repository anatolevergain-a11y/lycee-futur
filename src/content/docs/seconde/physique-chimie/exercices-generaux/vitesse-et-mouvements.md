---
title: "Exercice : Vitesse et mouvements"
description: "Démonstration appliquée : Analyse de la vitesse de pointe lors d'une course de Formule E"
---

### 🌐 Contexte moderne & concret

La Formule E représente le sommet du sport automobile électrique. Disputée sur des circuits urbains tracés au cœur de grandes métropoles (comme Paris, Monaco ou New York), elle allie performance technologique et transition écologique. 

Lors de l'E-Prix de Monaco, une monoplace Gen3 atteint le bout de la célèbre ligne droite avant le virage de *Nouvelle Chicane*. Pour étudier la performance de ce véhicule et sensibiliser les élèves aux enjeux de la sécurité routière et de la gestion de l'énergie, nous allons analyser une portion de sa course à l'aide de la notion de vitesse.

---

### ❓ Énoncé (3 à 4 questions progressives)

Un pilote de Formule E parcourt une portion rectiligne de la piste. Un système de chronométrage par balise enregistre les données suivantes :
- À l'instant $t_1 = 0\text{ s}$, la voiture se trouve au niveau de la balise $A$ à une position $x_A = 0\text{ m}$.
- À l'instant $t_2 = 2,5\text{ s}$, la voiture franchit la balise $B$ située à une position $x_B = 225\text{ m}$.

**1.** Qualifie le mouvement de la Formule E sur cette portion de droite (vitesse et trajectoire). Justifie ta réponse d'après le texte.

**2.** Rappelle la formule mathématique permettant de calculer la vitesse moyenne $v$ d'un objet en précisant les unités légales du Système International (S.I.).

**3.** Calcule la vitesse moyenne de la Formule E entre les balises $A$ et $B$. Exprime le résultat en mètres par seconde ($\text{m}\cdot\text{s}^{-1}$), puis convertis-le en kilomètres par heure ($\text{km}\cdot\text{h}^{-1}$).

**4.** À l'approche du virage, le pilote doit freiner. La vitesse maximale autorisée et sécuritaire dans cette portion technique est de $120\text{ km}\cdot\text{h}^{-1}$. Le pilote a-t-il respecté cette consigne de sécurité à la sortie de la portion $AB$ ?

---

### 💡 Indice

- **Question 1 :** Observe bien la forme de la trajectoire (droite) et regarde si la distance parcourue est proportionnelle au temps (vitesse constante).
- **Question 2 :** Pense au rapport entre la distance parcourue ($\Delta d$) et la durée du parcours ($\Delta t$).
- **Question 3 :** Pour convertir des $\text{m}\cdot\text{s}^{-1}$ en $\text{km}\cdot\text{h}^{-1}$, rappelle-toi qu'il faut multiplier par $3,6$.
- **Question 4 :** Compare la valeur obtenue à la question 3 (qui est une vitesse *moyenne*, mais qui donne un ordre de grandeur de la vitesse atteinte) avec la limite autorisée.

---

### 📋 Correction détaillée (Pas à pas)

#### **1. Qualification du mouvement**
- **Trajectoire :** Le texte indique que la monoplace se déplace sur une "portion rectiligne". La trajectoire est donc une **droite** : le mouvement est **rectiligne**.
- **Vitesse :** La voiture parcourt $225\text{ m}$ en $2,5\text{ s}$ de manière régulière. On considère ici que sa valeur de vitesse est constante (ou que l'on étudie la vitesse moyenne). Le mouvement est qualifié de **rectiligne uniforme** (si la vitesse est constante) ou simplement rectiligne.

#### **2. Rappel de la formule de la vitesse**
La vitesse moyenne $v$ d'un mobile se calcule grâce à la relation :
$$v = \frac{d}{\Delta t}$$

*   $v$ : vitesse moyenne en mètres par seconde ($\text{m}\cdot\text{s}^{-1}$)
*   $d$ : distance parcourue en mètres ($\text{m}$)
*   $\Delta t$ : durée du parcours en secondes ($\text{s}$)

#### **3. Calcul de la vitesse moyenne**
- **Calcul de la distance $d$ :**
  $$d = x_B - x_A = 225 - 0 = 225\text{ m}$$

- **Calcul de la durée $\Delta t$ :**
  $$\Delta t = t_2 - t_1 = 2,5 - 0 = 2,5\text{ s}$$

- **Application numérique en $\text{m}\cdot\text{s}^{-1}$ :**
  $$v = \frac{225}{2,5} = 90\text{ m}\cdot\text{s}^{-1}$$

- **Conversion en $\text{km}\cdot\text{h}^{-1}$ :**
  Pour passer des $\text{m}\cdot\text{s}^{-1}$ aux $\text{km}\cdot\text{h}^{-1}$, on multiplie par $3,6$ :
  $$v = 90 \times 3,6 = 324\text{ km}\cdot\text{h}^{-1}$$
  *(La Formule E roule ici à une vitesse impressionnante de $324\text{ km}\cdot\text{h}^{-1}$, ce qui est tout à fait cohérent avec les performances réelles de la Gen3 sur circuit).*

#### **4. Comparaison avec la vitesse limite**
La vitesse moyenne calculée est de $324\text{ km}\cdot\text{h}^{-1}$, ce qui est largement supérieur à la limite de sécurité fixée à $120\text{ km}\cdot\text{h}^{-1}$. 
De plus, la vitesse de pointe (instantanée) en fin de ligne droite est encore plus élevée que cette vitesse moyenne. Le pilote **n'a donc pas encore entamé son freinage** sur cette portion et doit impérativement décélérer immédiatement après la balise $B$ pour aborder le virage en toute sécurité.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
