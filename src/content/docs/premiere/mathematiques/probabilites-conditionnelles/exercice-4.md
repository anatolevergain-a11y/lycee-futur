---
title: "Exercice 4 : Stratégies dans les jeux en ligne"
description: "Application pratique du chapitre Probabilités conditionnelles"
---

### 🌐 Contexte concret

Dans un jeu vidéo de stratégie en ligne très populaire, un joueur participe à des tournois. Avant chaque partie, il doit choisir sa classe de personnage : **Mage ($M$)** ou **Guerrier ($G$)**. 

L'expérience montre que :
* Le joueur choisit le personnage Mage dans $60\%$ des cas, et le personnage Guerrier dans $40\%$ des cas.
* Lorsqu'il choisit le Mage, la probabilité qu'il remporte la partie est de $0,7$.
* Lorsqu'il choisit le Guerrier, la probabilité qu'il remporte la partie est de $0,4$.

On note les événements suivants :
* $M$ : « Le joueur choisit la classe Mage »
* $G$ : « Le joueur choisit la classe Guerrier »
* $V$ : « Le joueur remporte la partie »
* $\bar{V}$ : « Le joueur perd la partie »

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Représentation :** Traduire les informations de l'énoncé à l'aide d'un arbre pondéré de probabilités.
2. **Calcul simple :** Calculer la probabilité que le joueur choisisse un Mage et remporte la partie.
3. **Probabilité totale :** Démontrer que la probabilité de remporter une partie est $P(V) = 0,58$.
4. **Probabilité conditionnelle :** Le joueur vient de gagner sa partie. Sachant cela, quelle est la probabilité qu'il ait choisi la classe Mage ? Arrondir au millième.

---

### 💡 Indice

* **Question 1 :** Rappelez-vous qu'à partir de chaque nœud, la somme des probabilités des branches descendantes est toujours égale à $1$. Utilisez les notations $P_M(V)$ pour la probabilité de $V$ sachant $M$.
* **Question 2 :** Utilisez la formule de la probabilité d'une intersection : $P(A \cap B) = P(A) \times P_A(B)$.
* **Question 3 :** Pensez à utiliser la formule des probabilités totales en partitionnant l'univers selon les deux choix de classes possibles ($M$ et $G$).
* **Question 4 :** Par définition, la probabilité conditionnelle recherchée est $P_V(M) = \frac{P(M \cap V)}{P(V)}$.

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Arbre pondéré de probabilités

D'après l'énoncé, nous avons :
* $P(M) = 0,6$ et $P(G) = 0,4$ (première partition de l'arbre).
* Sachant qu'il a choisi $M$, la probabilité de gagner est $P_M(V) = 0,7$, donc la probabilité de perdre est $P_M(\bar{V}) = 1 - 0,7 = 0,3$.
* Sachant qu'il a choisi $G$, la probabilité de gagner est $P_G(V) = 0,4$, donc la probabilité de perdre est $P_G(\bar{V}) = 1 - 0,4 = 0,6$.

Représentation schématique (arbre) :
```text
                  /--- (0,7) --- V
        /-- (0,6) -- M
       /          \--- (0,3) --- Vbar
--- Start
       \          /--- (0,4) --- V
        \-- (0,4) -- G
                  \--- (0,6) --- Vbar
```

#### Question 2 : Probabilité de l'intersection

On cherche la probabilité de l'événement $M \cap V$ (« le joueur choisit le Mage **et** gagne »).
D'après le cours sur les probabilités conditionnelles :
$$P(M \cap V) = P(M) \times P_M(V)$$
$$P(M \cap V) = 0,6 \times 0,7 = 0,42$$

La probabilité que le joueur choisisse un Mage et remporte la partie est donc de **$0,42$**.

#### Question 3 : Probabilité totale

Les événements $M$ et $G$ forment une partition de l'univers (le joueur choisit soit l'un, soit l'autre, de manière exclusive). D'après la formule des probabilités totales :
$$P(V) = P(M \cap V) + P(G \cap V)$$

Calculons d'abord $P(G \cap V)$ :
$$P(G \cap V) = P(G) \times P_G(V) = 0,4 \times 0,4 = 0,16$$

Maintenant, additionnons les deux probabilités :
$$P(V) = 0,42 + 0,16 = 0,58$$

La probabilité que le joueur remporte une partie est bien **$0,58$**.

#### Question 4 : Probabilité conditionnelle inverse

On cherche à calculer $P_V(M)$, c'est-à-dire la probabilité qu'il ait choisi le Mage sachant qu'il a gagné :
$$P_V(M) = \frac{P(M \cap V)}{P(V)}$$

En remplaçant par les valeurs obtenues aux questions précédentes :
$$P_V(M) = \frac{0,42}{0,58} \approx 0,724137...$$

Arrondi au millième, on obtient **$0,724$**.

**Conclusion :** Si le joueur gagne sa partie, il y a environ $72,4\%$ de chances qu'il ait opté pour la classe Mage.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
