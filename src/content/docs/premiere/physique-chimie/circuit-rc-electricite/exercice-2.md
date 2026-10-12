---
title: "Exercice 2 : Applications des circuits de filtrage en audio"
description: "Application pratique du chapitre Circuits électriques et condensateurs (RC)"
---

### 🌐 Contexte & Données scientifiques

Dans la chaîne de reproduction sonore, les haut-parleurs électrodynamiques sont spécialisés selon les bandes de fréquences qu'ils restituent le plus fidèlement. Un haut-parleur d'aigu (appelé *tweeter*) est fragile et ne peut supporter des signaux de basse fréquence de forte puissance, qui provoquent des élongations mécaniques excessives de sa bobine. 

Pour protéger le *tweeter* et répartir l'énergie du signal audio issu de l'amplificateur, on utilise un filtre passif rudimentaire constitué d'un condensateur de capacité $C$ monté en série avec le haut-parleur. Le *tweeter* est assimilé, en première approximation, à un resistor de résistance pure $R = 8{,}0 \text{ }\Omega$ (impédance nominale standard en électroacoustique).

Le circuit ainsi formé est un dipôle $RC$ série alimenté par une tension sinusoïdale $e(t)$ délivrée par l'amplificateur. 

**Données et modèle d'étude :**
*   Résistance équivalente du haut-parleur : $R = 8{,}0 \text{ }\Omega$
*   Capacité du condensateur : $C = 4{,}7 \text{ }\mu\text{F}$
*   Fréquence de coupure théorique d'un tel filtre du premier ordre : $f_c = \frac{1}{2 \pi R C}$
*   *Note critique sur le modèle* : Assimiler un haut-parleur à une simple résistance $R$ est un modèle idéal. En réalité, la bobine mobile présente une inductance non nulle ($L$) et des phénomènes mécaniques et thermiques interviennent, modifiant l'impédance complexe selon la fréquence. Ce modèle reste néanmoins pertinent pour une première approche pédagogique du filtrage.

---

### ❓ Énoncé

1. Établir l'équation différentielle régissant la tension aux bornes du haut-parleur $u_R(t)$, sachant que la tension aux bornes du condensateur est notée $u_C(t)$ et que la tension totale d'entrée est $e(t) = u_R(t) + u_C(t)$.
2. Calculer la valeur de la fréquence de coupure $f_c$ de ce filtre. Commenter la pertinence de cette valeur vis-à-vis du domaine audible humain ($[20 \text{ Hz} ; 20 \text{ kHz}]$).
3. On injecte un signal sonore complexe composé de deux fréquences pures : $f_1 = 500 \text{ Hz}$ (médium-grave) et $f_2 = 8000 \text{ Hz}$ (aigu). En analysant qualitativement l'expression de l'impédance du condensateur $Z_C = \frac{1}{C \omega}$ (avec $\omega = 2 \pi f$), expliquer quel signal est majoritairement transmis au *tweeter*.
4. Discuter des limites de ce filtre passif du premier ordre : pourquoi un seul condensateur est-il insuffisant pour obtenir une séparation parfaite des fréquences dans une enceinte acoustique haut de gamme ?

---

### 💡 Indice de méthode

*   **Question 1 :** Exprimez l'intensité du courant $i(t)$ traversant le circuit série en fonction de la tension $u_R(t)$ et de $R$, puis reliez $i(t)$ à la charge $q(t)$ du condensateur et à $u_C(t)$. Utilisez ensuite la loi d'additivité des tensions.
*   **Question 2 :** Veillez à convertir toutes les unités dans le Système International (notamment le microfarad en farad : $1 \text{ }\mu\text{F} = 10^{-6} \text{ F}$) avant d'appliquer l'expression littérale de $f_c$.
*   **Question 3 :** Étudiez le comportement limite du condensateur ($\omega \to 0$ et $\omega \to +\infty$) face aux variations rapides ou lentes de la tension.

---

### 📋 Correction détaillée pas à pas

1. **Établissement de l'équation différentielle :**
   D'après la loi d'additivité des tensions dans le circuit $RC$ série :
   $$e(t) = u_R(t) + u_C(t)$$
   Le courant $i(t)$ circulant dans le résistor de résistance $R$ et dans le condensateur de capacité $C$ est lié à la tension aux bornes du résistor par la loi d'Ohm :
   $$u_R(t) = R \cdot i(t)$$
   Par ailleurs, la relation caractéristique du condensateur est :
   $$i(t) = \frac{d q(t)}{dt} = C \frac{d u_C(t)}{dt}$$
   En combinant ces expressions, on obtient :
   $$u_R(t) = R C \frac{d u_C(t)}{dt}$$
   Puisque $u_C(t) = e(t) - u_R(t)$, en dérivant par rapport au temps :
   $$\frac{d u_C(t)}{dt} = \frac{d e(t)}{dt} - \frac{d u_R(t)}{dt}$$
   En remplaçant dans l'expression précédente, il vient l'équation différentielle en fonction de la tension de sortie $u_R(t)$ :
   $$u_R(t) = R C \left( \frac{d e(t)}{dt} - \frac{d u_R(t)}{dt} \right)$$
   Soit sous forme canonique :
   $$R C \frac{d u_R(t)}{dt} + u_R(t) = R C \frac{d e(t)}{dt}$$

2. **Calcul et analyse de la fréquence de coupure :**
   A.perts des valeurs numériques fournies : $R = 8{,}0 \text{ }\Omega$ et $C = 4{,}7 \times 10^{-6} \text{ F}$.
   $$f_c = \frac{1}{2 \pi R C} = \frac{1}{2 \pi \times 8{,}0 \times 4{,}7 \times 10^{-6}}$$
   $$f_c \approx \frac{1}{2{,}362 \times 10^{-4}} \approx 4230 \text{ Hz} \quad (\text{soit } 4{,}2 \text{ kHz})$$
   *Commentaire critique* : Cette fréquence se situe dans la partie supérieure du spectre audible. Le filtre laisse passer les fréquences supérieures à $f_c$ et atténue celles inférieures. $4{,}2 \text{ kHz}$ est une valeur typique pour séparer les médiums des aigus, protégeant ainsi efficacement le *tweeter* des énergicides basses et moyennes fréquences. Toutefois, la pente d'atténuation du premier ordre ($-20 \text{ dB/décade}$) n'est pas suffisamment raide pour éliminer totalement toute énergie en dessous de $f_c$, ce qui impose des compromis sur la puissance admissible réelle du haut-parleur.

3. **Analyse du comportement face aux fréquences $f_1$ et $f_2$ :**
   L'impédance (ou résistance apparente en régime sinusoïdal) d'un condensateur s'exprime par $Z_C = \frac{1}{C \omega} = \frac{1}{2 \pi f C}$.
   *   Pour $f_1 = 500 \text{ Hz}$ (fréquence basse) : $Z_{C1} \approx \frac{1}{2 \pi \times 500 \times 4{,}7 \times 10^{-6}} \approx 67{,}7 \text{ }\Omega$.
   *   Pour $f_2 = 8000 \text{ Hz}$ (fréquence haute) : $Z_{C2} \approx \frac{1}{2 \pi \times 8000 \times 4{,}7 \times 10^{-6}} \approx 4{,}2 \text{ }\Omega$.
   
   Le condensateur offre une résistance au passage du courant beaucoup plus faible pour les hautes fréquences ($4{,}2 \text{ }\Omega$) que pour les basses fréquences ($67{,}7 \text{ }\Omega$). Par conséquent, selon le diviseur de tension, la majeure partie de la tension $e(t)$ à $8000 \text{ Hz}$ se retrouve aux bornes du haut-parleur $R$, tandis que le signal à $500 \text{ Hz}$ est fortement atténué aux bornes de ce même haut-parleur. Le *tweeter* restitue donc préférentiellement l'aigu ($f_2$).

4. **Discussion sur les limites du modèle (Esprit critique) :**
   Un filtre du premier ordre (un seul condensateur) présente une atténuation de $-20 \text{ dB par décade}$ au-delà de la fréquence de coupure. 
   *   **Limite technique** : La transition entre les fréquences atténuées et les fréquences transmises n'est pas "mur", c'est-à-dire qu'il reste une quantité non négligeable d'énergie à $2 \text{ kHz}$ ou $3 \text{ kHz}$ qui parvient au *tweeter*, risquant de générer de la distorsion ou d'altérer sa durée de vie à forte puissance.
   *   **Compromis coût / complexité** : Pour améliorer les performances, les fabricants utilisent des filtres d'ordre supérieur (ordre 2 avec des bobines inductives, ordre 3, etc.) qui augmentent la pente d'atténuation (ex: $-40 \text{ dB/décade}$ ou plus), au détriment du coût des composants, de leur encombrement et des pertes énergétiques par effet Joule dans les bobines additionnelles.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
