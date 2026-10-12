---
title: "Exercice 1 : Constante de temps de charge d'un condensateur"
description: "Application pratique du chapitre Circuits électriques et condensateurs (RC)"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude des systèmes électriques dynamiques, le dipôle $RC$ (association en série d'une résistance $R$ et d'un condensateur de capacité $C$) constitue un modèle fondamental en physique. Ce circuit est notamment utilisé pour la temporisation dans les systèmes embarqués, le filtrage de signaux ou encore l'accumulation d'énergie de courte durée.

Considérons un circuit série comprenant un générateur idéal de tension de force électromotrice $E$, un conducteur ohmique de résistance $R$ et un condensateur initialement déchargé de capacité $C$. À l'instant $t = 0 \text{ s}$, on ferme l'interrupteur. 

L'équation différentielle régissant l'évolution de la tension $u_c(t)$ aux bornes du condensateur s'établit à partir de la loi des mailles et de la relation constitutive du condensateur $q(t) = C \cdot u_c(t)$, avec l'intensité $i(t) = \frac{\mathrm{d}q(t)}{\mathrm{d}t}$ :

$$\tau \frac{\mathrm{d}u_c(t)}{\mathrm{d}t} + u_c(t) = E$$

où $\tau = R \cdot C$ représente la **constante de temps** du circuit.

**Données expérimentales et constructeur :**
*   Force électromotrice du générateur : $E = 5{,}0 \text{ V}$
*   Résistance nominale : $R = 10{,}0 \text{ k}\Omega$ (tolérance constructeur de $\pm 5\,\%$)
*   Capacité nominale : $C = 470 \text{ }\mu\text{F}$ (tolérance constructeur de $\pm 20\,\%$)
*   Appareil de mesure : oscilloscope numérique dont l'incertitude-type sur la lecture des tensions est estimée à $\pm 0{,}1 \text{ V}$ et sur le temps à $\pm 1\,\%$.

---

### ❓ Énoncé

1. **Analyse dimensionnelle et signification physique :** 
   En utilisant l'analyse dimensionnelle, démontrer que le produit $R \cdot C$ est homogène à une durée (exprimée en secondes). Calculer la valeur théorique nominale de la constante de temps $\tau$ du circuit.

2. **Établissement de la solution et état caractéristique :** 
   La résolution de l'équation différentielle conduit à l'expression de la tension :
   $$u_c(t) = E \cdot \left(1 - e^{-\frac{t}{\tau}}\right)$$
   Démontrer par le calcul que lorsque le temps $t$ est égal à la constante de temps $\tau$, la tension aux bornes du condensateur atteint environ $63\,\%$ de sa valeur maximale $E$.

3. **Exploitation graphique et incertitudes :** 
   Lors du protocole expérimental, les élèves relèvent une valeur mesurée de la constante de temps $\tau_{\text{exp}} = 4{,}9 \text{ s}$. 
   Calculer l'écart relatif entre la valeur nominale calculée à la question 1 et la valeur expérimentale $\tau_{\text{exp}}$. À la lumière des tolérances des composants fournies dans le contexte, cet écart permet-il de remettre en cause la validité du modèle théorique $RC$ ? Justifier la réponse avec rigueur.

---

### 💡 Indice de méthode

*   *Question 1 :* Exprimez la dimension des grandeurs $R$ (loi d'Ohm $U = R \cdot I$) et $C$ ($I = \frac{\mathrm{Q}}{\Delta t}$ et $Q = C \cdot U$) en fonction des unités fondamentales du système international (secondes, ampères, volts, coulombs).
*   *Question 2 :* Calculez le rapport $\frac{u_c(\tau)}{E}$ en remplaçant $t$ par $\tau$ dans l'expression littérale, puis évaluez la valeur numérique de $1 - e^{-1}$.
*   *Question 3 :* L'écart relatif se calcule par la formule $\frac{|\text{Valeur expérimentale} - \text{Valeur théorique}|}{\text{Valeur théorique}}$. Pensez à exploiter les intervalles d'incertitude liés aux tolérances de fabrication des composants (résistance et condensateur).

---

### 📋 Correction détaillée pas à pas

1. **Analyse dimensionnelle et calcul de $\tau$ :**
   *   D'après la loi d'Ohm, $U = R \cdot I \implies [R] = \frac{[U]}{[I]}$.
   *   Pour le condensateur, $q = C \cdot U \implies [C] = \frac{[I] \cdot [T]}{[U]}$ (sachant que $[Q] = [I] \cdot [T]$).
   *   En effectuant le produit : 
       $$[R \cdot C] = \frac{[U]}{[I]} \cdot \frac{[I] \cdot [T]}{[U]} = [T]$$
       Le produit $R \cdot C$ est bien homogène à un temps (exprimé en secondes).
   *   A.N. : $R = 10{,}0 \cdot 10^3 \text{ }\Omega$ et $C = 470 \cdot 10^{-6} \text{ F}$.
       $$\tau = 10{,}0 \cdot 10^3 \times 470 \cdot 10^{-6} = 4{,}70 \text{ s}$$

2. **Démonstration de l'état caractéristique à $t = \tau$ :**
   *   Evaluons $u_c(t)$ pour $t = \tau$ :
       $$u_c(\tau) = E \cdot \left(1 - e^{-\frac{\tau}{\tau}}\right) = E \cdot \left(1 - e^{-1}\right)$$
   *   Mathématiquement, $e^{-1} \approx 0{,}368$.
       $$u_c(\tau) = E \cdot (1 - 0{,}368) = E \cdot 0{,}632$$
   *   La tension atteint donc $63{,}2\,\%$ (souvent arrondi à $63\,\%$) de la tension maximale $E$. 
   *   A.N. : $u_c(\tau) = 5{,}0 \times 0{,}632 \approx 3{,}2 \text{ V}$.

3. **Analyse critique de l'écart et limites du modèle :**
   *   Calcul de l'écart relatif entre la valeur expérimentale ($\tau_{\text{exp}} = 4{,}9 \text{ s}$) et la valeur nominale ($\tau_{\text{th}} = 4{,}7 \text{ s}$) :
       $$\text{Écart relatif} = \frac{|4{,}9 - 4{,}7|}{4{,}7} = \frac{0{,}2}{4{,}7} \approx 4{,}3\,\%$$
   *   **Analyse critique :** Cet écart apparent de $4{,}3\,\%$ est inférieur aux incertitudes cumulées des composants. En effet, la résistance a une tolérance de $\pm 5\,\%$ et le condensateur de $\pm 20\,\%$. L'intervalle de confiance théorique de la constante de temps englobe largement la valeur mesurée. 
   *   Par conséquent, cet écart ne remet en aucun cas en cause la validité du modèle physique $RC$. Il illustre au contraire la nécessité de prendre en compte les incertitudes métrologiques et les tolérances industrielles en sciences expérimentales, évitant ainsi tout dogmatisme sur l'égalité stricte entre théorie nominale et mesure brute.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
