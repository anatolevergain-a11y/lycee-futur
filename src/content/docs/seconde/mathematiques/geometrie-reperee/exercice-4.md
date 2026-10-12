---
title: "Exercice 4 : Cartographie de zones d'inondation"
description: "Application pratique du chapitre Géométrie repérée et vecteurs"
---

### 🌐 Contexte concret

Dans le cadre d'un plan de prévention des risques naturels, la mairie d'une commune souhaite modéliser l'extension d'une zone inondable suite à la crue d'une rivière. 

À l'aide d'un repère orthonormé $(O, \vec{i}, \vec{j})$ où l'unité représente $100$ mètres, les services techniques ont relevé la position de plusieurs points stratégiques :
* La station de pompage $P$ de coordonnées $(1 ; 2)$.
* Le pont historique $H$ de coordonnées $(5 ; 4)$.
* Une borne de balisage $B$ de coordonnées $(3 ; -1)$.
* Un refuge pour la faune $R$ dont les coordonnées seront déterminées dans l'exercice.

---

### ❓ Énoncé

1. Calculer la distance séparant la station de pompage $P$ du pont historique $H$ (arrondir au mètre près).
2. La borne de balisage $B$ sert de milieu au segment $[PR'$. Un technicien cherche les coordonnées du point $R'$ qui symétrique de $പോ$ ($P$) par rapport à $B$. Déterminer les coordonnées de $R'$.
3. Un drone de surveillance suit une trajectoire rectiligne modélisée par le vecteur $\vec{u} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$. Il part du point $P$ et s'arrête à un point $M$. Sachant que son déplacement est défini par $\vec{PM} = 3\vec{u}$, déterminer les coordonnées du point d'atterrissage $M$.
4. On souhaite implanter une balise de secours $S$ alignée avec $P$ et $H$, telle que le pont $H$ soit exactement le milieu du segment $[PS]$. Calculer les coordonnées de la balise $S$.

---

### 💡 Indice

* **Question 1 :** Utilisez la formule du cours donnant la distance entre deux points dans un repère orthonormé : $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.
* **Question 2 :** Si $B$ est le milieu du segment $[PR']$, alors les coordonnées de $B$ sont la moyenne des coordonnées de $P$ et de $R'$.
* **Question 3 :** Exprimez les coordonnées du vecteur $\vec{PM}$ en fonction des coordonnées de $P$ $(x_P, y_P)$ et de $M$ $(x_M, y_M)$, puis utilisez l'égalité vectorielle.
* **Question 4 :** Traduisez l'information " $H$ est le milieu de $[PS]$" par une relation vectorielle ou par les formules du milieu.

---

### 📋 Correction détaillée pas à pas

#### **1. Calcul de la distance $PH$**
Dans le repère orthonormé $(O, \vec{i}, \vec{j})$, on utilise la formule de la distance :
$$PH = \sqrt{(x_H - x_P)^2 + (y_H - y_P)^2}$$

En remplacant par les coordonnées de $P(1 ; 2)$ et $H(5 ; 4)$ :
$$PH = \sqrt{(5 - 1)^2 + (4 - 2)^2}$$
$$PH = \sqrt{(4)^2 + (2)^2}$$
$$PH = \sqrt{16 + 4} = \sqrt{20}$$

Puisque l'unité représente $100$ mètres :
$$PH = \sqrt{20} \times 100 \approx 4,472 \times 100 \approx 447 \text{ mètres}.$$
*La distance entre la station de pompage et le pont est d'environ $447$ mètres.*

---

#### **2. Coordonnées du point $R'$ (symétrique de $P$ par rapport à $B$)**
Puisque $B$ est le milieu du segment $[PR']$, les formules du milieu s'écrivent :
$$x_B = \frac{x_P + x_{R'}}{2} \quad \text{et} \quad y_B = \frac{y_P + y_{R'}}{2}$$

En remplaçant par les valeurs connues ($P(1 ; 2)$ et $B(3 ; -1)$) :
$$3 = \frac{1 + x_{R'}}{2} \quad \text{et} \quad -1 = \frac{2 + y_{R'}}{2}$$

Résolvons pour $x_{R'}$ :
$$6 = 1 + x_{R'} \implies x_{R'} = 5$$

Résolvons pour $y_{R'}$ :
$$ -2 = 2 + y_{R'} \implies y_{R'} = -4$$

*Les coordonnées du point $R'$ sont donc $(5 ; -4)$.*

---

#### **3. Coordonnées du point d'atterrissage $M$**
Soit $M(x_M ; y_M)$. Le vecteur $\vec{PM}$ a pour coordonnées :
$$\vec{PM} = \begin{pmatrix} x_M - x_P \\ y_M - y_P \end{pmatrix} = \begin{pmatrix} x_M - 1 \\ y_M - 2 \end{pmatrix}$$

On sait que $\vec{PM} = 3\vec{u}$ avec $\vec{u} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$. 
Calculons les coordonnées de $3\vec{u}$ :
$$3\vec{u} = \begin{pmatrix} 3 \times 2 \\ 3 \times 3 \end{pmatrix} = \begin{pmatrix} 6 \\ 9 \end{pmatrix}$$

Par identification des coordonnées :
$$\begin{cases} x_M - 1 = 6 \\ y_M - 2 = 9 \end{cases} \implies \begin{cases} x_M = 7 \\ y_M = 11 \end{cases}$$

*Le drone atterrit au point $M$ de coordonnées $(7 ; 11)$.*

---

#### **4. Coordonnées de la balise de secours $S$**
Puisque le pont $H$ est le milieu du segment $[PS]$, on peut utiliser directement les formules du milieu avec $S(x_S ; y_S)$ :
$$x_H = \frac{x_P + x_S}{2} \quad \text{et} \quad y_H = \frac{y_P + y_S}{2}$$

En remplaçant par les coordonnées de $P(1 ; 2)$ et $H(5 ; 4)$ :
$$5 = \frac{1 + x_S}{2} \quad \text{et} \quad 4 = \frac{2 + y_S}{2}$$

Résolvons pour $x_S$ :
$$10 = 1 + x_S \implies x_S = 9$$

Résolvons pour $y_S$ :
$$8 = 2 + y_S \implies y_S = 6$$

*La balise de secours $S$ doit être implantée aux coordonnées $(9 ; 6)$.*

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
