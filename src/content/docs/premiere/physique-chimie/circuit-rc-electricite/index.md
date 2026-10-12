---
title: "Cours : Circuits électriques et condensateurs (RC)"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Un condensateur est un dipôle électrique passif constitué de deux armatures conductrices (les électrodes) séparées par un isolant (le diélectrique). 

* **Capacité d'un condensateur ($C$)** : Elle caractérise l'aptitude du condensateur à stocker de la charge électrique pour une tension donnée. Elle s'exprime en farads ($\text{F}$).
* **Charge électrique ($q(t)$)** : Exprimée en coulombs ($\text{C}$), elle est liée à l'intensité du courant $i(t)$ traversant le circuit par la relation fondamentale :
  $$i(t) = \frac{\mathrm{d}q(t)}{\mathrm{d}t}$$
* **Relation charge-tension** : La charge portée par l'armature positive est proportionnelle à la tension $u_C(t)$ à ses bornes :
  $$q(t) = C \cdot u_C(t)$$
* **Le dipôle RC** : C'est l'association en série d'un conducteur ohmique de résistance $R$ et d'un condensateur de capacité $C$. L'étude de ce circuit permet de comprendre les régimes transitoires en électricité.

---

## 📐 2. Formules et Propriétés fondamentales

### 2.1. Évolution de la tension lors de la charge d'un condensateur
Soumis à un échelon de tension $E$ (générateur idéal de tension), la tension $u_C(t)$ aux bornes du condensateur obéit à l'équation différentielle suivante :
$$\tau \frac{\mathrm{d}u_C(t)}{\mathrm{d}t} + u_C(t) = E$$

La solution générale de cette équation est de la forme :
$$u_C(t) = E \cdot \left(1 - e^{-\frac{t}{\tau}}\right)$$

### 2.2. Constante de temps $\tau$
La grandeur $\tau$ est la **constante de temps** du circuit RC. Son expression est :
$$\tau = R \cdot C$$
* **Unité** : $R$ en ohms ($\Omega$), $C$ en farads ($\text{F}$), donc $\tau$ en secondes ($\text{s}$).
* **Propriété clé** : Au bout d'une durée $t = \tau$, le condensateur est chargé à environ $63\%$ de sa valeur maximale ($E$). Au bout d'une durée $t = 5\tau$, le régime permanent est considéré comme atteint ($u_C \approx 0{,}993 \cdot E$, soit $993\%$).

### 2.3. Évolution de la tension lors de la décharge
Si le condensateur préalablement chargé sous une tension $E$ est déchargé à travers le conducteur ohmique, l'équation différentielle devient :
$$\tau \frac{\mathrm{d}u_C(t)}{\mathrm{d}t} + u_C(t) = 0$$

La solution est :
$$u_C(t) = E \cdot e^{-\frac{t}{\tau}}$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On considère un circuit RC série comprenant un conducteur ohmique de résistance $R = 10 \text{ k}\Omega$ et un condensateur de capacité $C = 47 \mu\text{F}$. Le circuit est alimenté par un générateur de tension idéale de f.e.m. $E = 5 \text{ V}$. Le condensateur est initialement déchargé.

1. Calculer la constante de temps $\tau$ du circuit.
2. Déterminer la valeur de la tension aux bornes du condensateur à l'instant $t = \tau$.

**Résolution :**
1. Conversion des unités dans le Système International :
   - $R = 10 \text{ k}\Omega = 10 \times 10^3 \text{ }\Omega = 10^4 \text{ }\Omega$
   - $C = 47 \mu\text{F} = 47 \times 10^{-6} \text{ F}$
   
   Calcul de $\tau$ :
   $$\tau = R \cdot C = 10^4 \times 47 \times 10^{-6} = 0{,}47 \text{ s}$$

2. Calcul de $u_C(\tau)$ :
   D'après le cours, lors de la charge, on a la relation :
   $$u_C(t) = E \cdot \left(1 - e^{-\frac{t}{\tau}}\right)$$
   Pour $t = \tau$ :
   $$u_C(\tau) = E \cdot \left(1 - e^{-\frac{\tau}{\tau}}\right) = E \cdot (1 - e^{-1})$$
   A.N. : 
   $$u_C(\tau) = 5 \cdot (1 - e^{-1}) \approx 5 \cdot (1 - 0{,}368) = 5 \cdot 0{,}632 = 3{,}16 \text{ V}$$
   La tension aux bornes du condensateur vaut environ $3{,}16 \text{ V}$ au bout d'une constante de temps.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention aux unités (conversions)** : C'est l'erreur la plus fréquente en évaluation. Il faut impérativement convertir la résistance en ohms ($\Omega$), la capacité en farads ($\text{F}$) et le temps en secondes ($\text{s}$) pour obtenir $\tau$ en secondes. Les préfixes usuels à maîtriser sont le milliseconde ($\text{ms} = 10^{-3} \text{ s}$), le microfarad ($\mu\text{F} = 10^{-6} \text{ F}$) et le kilooctet ou kilohm ($\text{k}\Omega = 10^3 \text{ }\Omega$).
* **Sens du courant et convention récepteur** : Soyez rigoureux sur l'orientation du schéma électrique. Pour un condensateur, on utilise la convention récepteur : la flèche de la tension $u_C$ est de sens opposé à celle de l'intensité $i$.
* **Analyse graphique de $\tau$** : Graphiquement, pour trouver $\tau$ sur une courbe représentant $u_C(t)$ en fonction du temps lors d'une charge, on peut utiliser la méthode de la tangente à l'origine : la tangente à la courbe à $t = 0$ intersecte l'asymptote horizontale $u_C = E$ à l'instant $t = \tau$. Ne confondez pas cette méthode géométrique avec la lecture de la valeur à $63\%$.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
