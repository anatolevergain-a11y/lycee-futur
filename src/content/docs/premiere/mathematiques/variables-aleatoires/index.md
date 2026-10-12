---
title: "Cours : Variables aléatoires réelles"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Dans le cadre de la modelisation d'une experience aleatoire sur un univers $\Omega$, une variable aleatoire reelle fait le lien entre les resultats bruts de l'experience et des valeurs numeriques.

*   **Variable aleatoire reelle (v.a.r.) :** 
    Soit $\Omega$ l'univers associe a une experience aleatoire (muni d'une probabilite $P$). Une variable aleatoire reelle $X$ est une application de $\Omega$ vers $\mathbb{R}$ qui a chaque issue $\omega \in \Omega$ associe un nombre reel $X(\omega)$.

*   **Loi de probabilite :** 
    La loi de probabilite d'une variable aleatoire $X$ (prise sur un univers fini) est l'ensemble des valeurs $x_i$ que $X$ peut prendre, associees a leurs probabilites respectives $P(X = x_i)$. Elle se presente generalement sous la forme d'un tableau :

| $x_i$ | $x_1$ | $x_2$ | $\dots$ | $x_n$ |
| :---: | :---: | :---: | :---: | :---: |
| $P(X = x_i)$ | $p_1$ | $p_2$ | $\dots$ | $p_n$ |

    *Condition fondamentale :* La somme de toutes les probabilites vaut $1$, soit $\sum_{i=1}^{n} p_i = 1$.

*   **Esperance mathematique :** 
    L'esperance $E(X)$ represente la valeur moyenne que l'on peut s'attendre a observer si l'experience est repetee un grand nombre de fois. 
    $$E(X) = \sum_{i=1}^{n} x_i P(X = x_i) = x_1p_1 + x_2p_2 + \dots + x_np_n$$

*   **Variance et Ecart-type :** 
    *   La **variance** $V(X)$ (ou $\sigma^2(X)$) mesure la dispersion des valeurs prises par $X$ autour de son esperance.
    *   L'**ecart-type** $\sigma(X)$ est la racine carree de la variance. Il s'exprime dans la meme unite que la variable $X$.

---

## 📐 2. Formules et Propriétés fondamentales

### Formules de la Variance
Il existe deux expressions equivalentes pour calculer la variance d'une variable aleatoire $X$ :
1.  **Formule de definition :**
    $$V(X) = \sum_{i=1}^{n} P(X = x_i) \times (x_i - E(X))^2$$
2.  **Formule de Koenig-Huygens (plus pratique en calcul) :**
    $$V(X) = E(X^2) - (E(X))^2$$
    *Note :* $E(X^2) = \sum_{i=1}^{n} x_i^2 P(X = x_i)$.

### Ecart-type
$$\sigma(X) = \sqrt{V(X)}$$

### Linearite de l'esperance
Soient $X$ et $Y$ deux variables aleatoires definies sur le meme univers, et soient $a$ et $b$ deux nombres reels constants. Alors :
$$E(aX + b) = aE(X) + b$$
$$E(X + Y) = E(X) + E(Y)$$

---

## 💡 3. Exemple d'application résolu

**Enonce :**
On considere un jeu de de de six faces, equilibre. Le joueur lance le de :
*   S'il obtient un $6$, il gagne $10 \text{ euros}$.
*   S'il obtient un nombre pair autre que $6$ (c'est-a-dire $2$ ou $4$), il ne gagne rien et ne perd rien ($0 \text{ euro}$).
*   S'il obtient un nombre impair ($1$, $3$ ou $5$), il perd $4 \text{ euros}$ (ce qui correspond a un gain de $-4 \text{ euros}$).

Soit $X$ la variable aleatoire representant le gain algebrique du joueur (en euros).
1. Determiner la loi de probabilite de $X$.
2. Calculer l'esperance mathematique de $X$ et interpreter le resultat.
3. Calculer la variance et l'ecart-type de $X$.

**Correction :**

1. **Loi de probabilite de $X$ :**
   Les issues possibles pour le de sont $\{1, 2, 3, 4, 5, 6\}$, toutes de probabilite $\frac{1}{6}$.
   *   Si le resultat est $6$, $X = 10$ (probabilite $\frac{1}{6}$).
   *   Si le resultat est $2$ ou $4$, $X = 0$ (probabilite $\frac{2}{6} = \frac{1}{3}$).
   *   Si le resultat est $1$, $3$ ou $5$, $X = -4$ (probabilite $\frac{3}{6} = \frac{1}{2}$).

   Tableau de la loi de probabilite :
| $x_i$ | $-4$ | $0$ | $10$ |
| :---: | :---: | :---: | :---: |
| $P(X = x_i)$ | $\frac{1}{2}$ | $\frac{1}{3}$ | $\frac{1}{6}$ |

   *Verification :* $\frac{1}{2} + \frac{1}{3} + \frac{1}{6} = \frac{3}{6} + \frac{2}{6} + \frac{1}{6} = \frac{6}{6} = 1$. La loi est correcte.

2. **Calcul de l'esperance :**
   $$E(X) = (-4) \times \frac{1}{2} + 0 \times \frac{1}{3} + 10 \times \frac{1}{6}$$
   $$E(X) = -2 + 0 + \frac{10}{6} = -2 + \frac{5}{3} = \frac{-6 + 5}{3} = -\frac{1}{3} \approx -0,33 \text{ euros}$$
   *Interpretation :* $E(X) \approx -0,33 \text{ euros}$. Le jeu est defavorable au joueur. En moyenne, sur un grand nombre de parties, le joueur perd environ $0,33 \text{ euros}$ (soit environ $33 \text{ centimes}$) par partie.

3. **Calcul de la variance et de l'ecart-type :**
   Calculons d'abord $E(X^2)$ :
   $$E(X^2) = (-4)^2 \times \frac{1}{2} + 0^2 \times \frac{1}{3} + 10^2 \times \frac{1}{6}$$
   $$E(X^2) = 16 \times \frac{1}{2} + 0 + 100 \times \frac{1}{6} = 8 + \frac{100}{6} = 8 + \frac{50}{3} = \frac{24 + 50}{3} = \frac{74}{3}$$

   Utilisons la formule de Koenig-Huygens pour la variance :
   $$V(X) = E(X^2) - (E(X))^2$$
   $$V(X) = \frac{74}{3} - \left(-\frac{1}{3}\right)^2 = \frac{74}{3} - \frac{1}{9} = \frac{222}{9} - \frac{1}{9} = \frac{221}{9} \approx 24,56$$

   L'ecart-type est la racine carree de la variance :
   $$\sigma(X) = \sqrt{\frac{221}{9}} = \frac{\sqrt{221}}{3} \approx 4,96 \text{ euros}$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Oublier de verifier la somme des probabilites :** 
    Commencez toujours par verifier que la somme des $P(X = x_i)$ est strictement egale à $1$. Si ce n'est pas le cas, l'erreur de calcul ou de modelisation est manifeste.
*   **Confondre $E(X^2)$ et $(E(X))^2$ :** 
    C'est l'erreur classique lors de l'application de la formule de Koenig-Huygens. Rappelez-vous que $E(X^2)$ est la moyenne des carrees (on eleve les valeurs $x_i$ au carre *avant* de multiplier par les probabilites), tandis que $(E(X))^2$ est le carre de la moyenne obtenue precedemment.
*   **Redaction rigoureuse de l'esperance :** 
    L'esperance n'est pas necessairement une valeur que la variable aleatoire peut prendre (dans l'exemple precedent, $E(X) = -\frac{1}{3}$, une valeur impossible pour un unique lancer). Evitez d'interpreter l'esperance comme un "resultat attendu" au sens strict, mais bien comme une *moyenne statistique a long terme*.
*   **Unites :** 
    Pensez a bien preciser les unites dans les conclusions sur l'esperance et l'ecart-type des v.a.r. quantifiant des grandeurs physiques ou monetaires.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
