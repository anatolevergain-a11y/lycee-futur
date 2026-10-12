---
title: "Exercice : Probabilités conditionnelles"
description: "Démonstration appliquée : Algorithme de recommandation TikTok"
---

### 🌐 Contexte

L'algorithme de recommandation de la plateforme TikTok (le flux *« Pour toi »* ou *For You Page*) repose sur l'analyse continue des comportements des utilisateurs : temps de visionnage, partages, commentaires et répétitions de lecture.

Lorsqu'un créateur publie une vidéo, l'algorithme la soumet d'abord à un petit échantillon test d'utilisateurs. En fonction des signaux captés, l'algorithme décide ou non de propulser la vidéo à grande échelle dans le fil *« Pour toi »*. Cependant, l'algorithme n'est pas infaillible : il peut amplifier des vidéos de faible qualité (buzz éphémère, piège à clics) ou, à l'inverse, ignorer des contenus qualitatifs.

On étudie la performance de cet algorithme de détection sur l'ensemble des vidéos publiées.

---

### ❓ Énoncé

D'après les analyses internes d'une agence de marketing digital :
* Seules $20\,\%$ des vidéos publiées sont considérées comme étant de « haute qualité » (temps de rétention élevé, contenu soigné).
* Si une vidéo est de haute qualité, la probabilité que l'algorithme la propulse dans le fil *« Pour toi »* est de $0{,}85$.
* Si une vidéo n'est pas de haute qualité, la probabilité que l'algorithme la propulse tout de même dans le fil *« Pour toi »* (effet de surprise, « clickbait ») est de $0{,}10$.

On choisit au hasard une vidéo publiée sur la plateforme et on note :
* $Q$ l'événement : « La vidéo est de haute qualité ».
* $F$ l'événement : « La vidéo est propulsée dans le fil *Pour toi* ».

1. Traduire les données de l'énoncé à l'aide de probabilités, puis modéliser la situation par un arbre pondéré complet.
2. Calculer la probabilité que la vidéo soit de haute qualité **et** qu'elle soit propulsée dans le fil *« Pour toi »*.
3. Justifier que la probabilité globale qu'une vidéo soit propulsée dans le fil *« Pour toi »* est égale à $P(F) = 0{,}25$.
4. Un utilisateur regarde une vidéo qui lui a été recommandée dans son fil *« Pour toi »*. Quelle est la probabilité que cette vidéo soit réellement de haute qualité ? Arrondir au centième si nécessaire et commenter ce résultat.

---

### 💡 Indice

* **Question 1 :** Identifie bien les probabilités conditionnelles données par le texte ($P_Q(F)$ et $P_{\overline{Q}}(F)$). La somme des probabilités issues d'un même nœud vaut toujours $1$.
* **Question 2 :** Utilise la formule de l'intersection : $P(Q \cap F) = P(Q) \times P_Q(F)$.
* **Question 3 :** Applique la **formule des probabilités totales** associée à la partition formée par $Q$ et son événement contraire $\overline{Q}$.
* **Question 4 :** On cherche à inverser le conditionnement : on veut calculer $P_F(Q)$. Rappelle-toi de la définition : $P_F(Q) = \dfrac{P(Q \cap F)}{P(F)}$.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Modélisation et arbre pondéré

D'après l'énoncé :
* La proportion de vidéos de haute qualité est de $20\,\%$, donc :
  $$P(Q) = 0{,}20 \quad \text{et} \quad P(\overline{Q}) = 1 - 0{,}20 = 0{,}80$$
* Sachant que la vidéo est de haute qualité, la probabilité qu'elle soit propulsée est de $0{,}85$, soit :
  $$P_Q(F) = 0{,}85 \quad \text{d'où} \quad P_Q(\overline{F}) = 1 - 0{,}85 = 0{,}15$$
* Sachant que la vidéo n'est pas de haute qualité, la probabilité qu'elle soit propulsée est de $0{,}10$, soit :
  $$P_{\overline{Q}}(F) = 0{,}10 \quad \text{d'où} \quad P_{\overline{Q}}(\overline{F}) = 1 - 0{,}10 = 0{,}90$$

On représente ces informations sous la forme d'un arbre pondéré :

```text
               --- (0,85) ---> F
             /
   --- (0,20) ---> Q
 /           \
/              --- (0,15) ---> F̄
\
 \             --- (0,10) ---> F
  \          /
   --- (0,80) ---> Q̄
             \
               --- (0,90) ---> F̄
```

---

#### 2. Calcul de $P(Q \cap F)$

L'événement $Q \cap F$ correspond à l'intersection : « La vidéo est de haute qualité **et** elle est propulsée dans le fil *Pour toi* ».

D'après la formule des probabilités composées :
$$P(Q \cap F) = P(Q) \times P_Q(F)$$

En remplaçant par les valeurs numériques :
$$P(Q \cap F) = 0{,}20 \times 0{,}85 = 0{,}17$$

La probabilité qu'une vidéo soit de haute qualité et recommandée est donc de **$0{,}17$** (soit $17\,\%$).

---

#### 3. Calcul de $P(F)$ par la formule des probabilités totales

Les événements $Q$ et $\overline{Q}$ forment une partition de l'univers (car $Q \cap \overline{Q} = \emptyset$ et $Q \cup \overline{Q} = \Omega$, avec des probabilités non nulles).

D'après la **formule des probabilités totales** :
$$P(F) = P(Q \cap F) + P(\overline{Q} \cap F)$$
$$P(F) = P(Q) \times P_Q(F) + P(\overline{Q}) \times P_{\overline{Q}}(F)$$

Calculons la seconde branche :
$$P(\overline{Q} \cap F) = P(\overline{Q}) \times P_{\overline{Q}}(F) = 0{,}80 \times 0{,}10 = 0{,}08$$

On en déduit :
$$P(F) = 0{,}17 + 0{,}08 = 0{,}25$$

Une vidéo prise au hasard sur la plateforme a donc **$25\,\%$** de chances d'apparaître dans le flux *« Pour toi »*.

---

#### 4. Calcul de la probabilité conditionnelle $P_F(Q)$ et interprétation

On cherche la probabilité que la vidéo soit de haute qualité **sachant qu'elle a été propulsée dans le fil *« Pour toi »***. Il s'agit de la probabilité conditionnelle $P_F(Q)$.

Par définition :
$$P_F(Q) = \frac{P(Q \cap F)}{P(F)}$$

En utilisant les résultats précédents :
$$P_F(Q) = \frac{0{,}17}{0{,}25} = \frac{17}{25} = 0{,}68$$

**Interprétation :**
Lorsqu'un utilisateur voit une vidéo recommandée par l'algorithme, il n'y a que **$68\,\%$** de chances qu'elle soit réellement de haute qualité (environ $2$ chances sur $3$). 

Ce phénomène illustre le **paradoxe des faux positifs** : bien que l'algorithme soit performant pour repérer les vidéos de qualité ($85\,\%$ de réussite), la masse écrasante de vidéos ordinaires sur la plateforme ($80\,\%$ de la totalité) fait qu'une part importante ($32\,\%$) des vidéos recommandées correspond en réalité à des contenus de moindre qualité mis en avant par accident ou par des mécaniques de piège à clics.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
