---
title: "Exercice : Ondes mécaniques"
description: "Démonstration appliquée : Fonctionnement des casques anti-bruit passifs et actifs"
---

### 🌐 Contexte moderne & concret

Dans notre monde moderne, la pollution sonore est omniprésente (transports en commun, open spaces, voyages en avion). Pour y faire face, les casques audio dits "anti-bruit" ou à "réduction de bruit" sont devenus des accessoires indispensables. On distingue deux technologies principales :
1. **L'isolation passive** : Elle repose sur la nature des matériaux utilisés (mousses à mémoire de forme, coques étanches) qui font obstacle à la propagation de l'onde sonore par réflexion et absorption.
2. **La réduction active du bruit (ANC - *Active Noise Control*)** : Elle utilise l'électronique. Un microphone capte le bruit extérieur, un processeur analyse ce signal et crée un **signal acoustique secondaire destructeur**, injecté dans le haut-parleur du casque en même temps que le bruit. 

Ce phénomène physique fascinant repose sur la **superposition des ondes** et les **interférences destructives**.

---

### ❓ Énoncé (3 à 4 questions progressives)

**Données et rappels utiles :**
- Célérité du son dans l'air : $v = 340 \, \text{m}\cdot\text{s}^{-1}$
- Fréquence moyenne d'un bourdonnement de moteur d'avion (bruit grave) : $f = 170 \, \text{Hz}$

1. **Caractérisation de l'onde sonore :** Rappeler ce qu'est une onde mécanique progressive et déterminer la longueur d'onde $\lambda$ du son émis par le moteur d'avion dans l'air.
2. **Le principe passif :** Expliquer qualitativement comment un matériau isolant (isolation passive) atténue l'amplitude d'une onde mécanique sonore.
3. **Le principe actif (Interférences) :** Pour annuler le bruit extérieur grâce à la technologie active, le haut-parleur du casque doit émettre une onde acoustique de même fréquence, de même amplitude, mais en opposition de phase. Quel doit être le retard temporel $\Delta t$ (ou déphasage en pratique) appliqué par le processeur entre l'onde du bruit captée et l'onde anti-bruit émise pour obtenir une interférence totalement destructive pour le signal de fréquence $f = 170 \, \text{Hz}$ ?
4. **Limite technologique :** Pourquoi la réduction active du bruit est-elle très efficace sur les sons graves (basse fréquence comme les moteurs) mais beaucoup moins performante sur les sons aigus (haute fréquence comme des voix aiguës ou des bris de verre) ?

---

### 💡 Indice

- **Question 1 :** Utilisez la relation fondamentale liant la célérité $v$, la fréquence $f$ et la longueur d'onde $\lambda$ : $v = \lambda \cdot f$.
- **Question 3 :** Deux ondes en opposition de phase sont décalées d'une demi-période $\frac{T}{2}$ (ou d'une phase de $\pi$ radians). Exprimez d'abord la période $T$ du signal, puis déduisez-en le retard $\Delta t$.
- **Question 4 :** Pensez à la taille de la longueur d'onde des sons aigus comparée aux dimensions de l'oreille ou du capteur, ainsi qu'au temps de calcul (latence) du processeur.

---

### 📋 Correction détaillée (Pas à pas)

1. **Caractérisation de l'onde sonore :**
   Une onde mécanique progressive est le déplacement d'une perturbation dans un milieu matériel, s'accompagnant d'un transport d'énergie sans transport de matière. 
   La relation entre la célérité $v$, la fréquence $f$ et la longueur d'onde $\lambda$ est :
   $$v = \lambda \cdot f$$
   On isole la longueur d'onde $\lambda$ :
   $$\lambda = \frac{v}{f}$$
   A.N. : 
   $$\lambda = \frac{340}{170} = 2,0 \, \text{m}$$
   La longueur d'onde de ce bruit de moteur est donc de $2,0 \, \text{m}$.

2. **Le principe passif :**
   L'isolation passive agit par **réflexion** et **dissipation**. Lorsque l'onde sonore llega à la surface de la coque rigide du casque, une partie de l'énergie est réfléchie vers l'extérieur. La partie qui pénètre dans les mousses poreuses subit des frottements visqueux. L'énergie mécanique de l'onde est alors convertie en énergie thermique (chaleur) par frottement, ce qui réduit fortement l'amplitude de l'onde sonore avant qu'elle n'atteigne le tímpan.

3. **Le principe actif (Interférences) :**
   Pour obtenir des interférences **totalement destructives**, l'onde incidente (le bruit) et l'onde secondaire (l'anti-bruit) doivent arriver en même point avec la même amplitude, la même fréquence, mais en **opposition de phase** (décalage de $\pi$ radians).
   La période $T$ de l'onde est :
   $$T = \frac{1}{f} = \frac{1}{170} \approx 5,88 \times 10^{-3} \, \text{s} = 5,88 \, \text{ms}$$
   Le retard temporel $\Delta t$ nécessaire pour créer une opposition de phase correspond à une demi-période :
   $$\Delta t = \frac{T}{2} = \frac{5,88 \times 10^{-3}}{2} \approx 2,94 \times 10^{-3} \, \text{s} = 2,94 \, \text{ms}$$
   Le processeur doit donc appliquer un retard de $2,94 \, \text{ms}$ (associé à une inversion de signe du signal) pour détruire cette composante du bruit.

4. **Limite technologique :**
   Les sons aigus ont des **fréquences élevées** ($f$ grand) et donc des **longueurs d'onde $\lambda$ très faibles** (par exemple, pour $f = 3400 \, \text{Hz}$, $\lambda = 0,1 \, \text{m} = 10 \, \text{cm}$). 
   Pour ces ondes, le temps de traitement électronique (la latence du micro, du processeur et du haut-parleur) devient trop important face à la courte période de l'onde. De plus, les variations spatiales du champ acoustique sont si rapides à petite échelle qu'il est très difficile de synchroniser parfaitement l'opposition de phase partout autour du tympan. C'est pourquoi le système actif est réservé aux bruits graves (basses fréquences), tandis que les aigus sont traités par l'isolation passive.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
