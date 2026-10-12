---
title: "Exercice : Mouvement et interactions"
description: "Démonstration appliquée : Analyse du freinage automatique d'une voiture autonome"
---

### 🌐 Contexte

Les véhicules à conduite autonome de dernière génération intègrent des dispositifs de sécurité active capables de réagir plus vite qu'un conducteur humain. Grâce à un ensemble de caméras, radars et capteurs LIDAR, l'ordinateur de bord surveille la trajectoire et déclenche le freinage d'urgence autonome (*AEB : Autonomous Emergency Braking*) lorsqu'un obstacle est identifié.

Dans une zone urbaine limitée à $50\text{ km}\cdot\text{h}^{-1}$, un véhicule autonome circule en ligne droite à vitesse maximale autorisée. Soudain, un piéton s'engage sur la chaussée à une distance $D = 22{,}0\text{ m}$ devant le véhicule. 

Le système décompose la séquence de freinage en deux étapes :
1. **Phase 1 (Temps de détection et d'activation mécanique) :** Le véhicule continue sur sa lancée à vitesse constante pendant une durée $\Delta t_1 = 0,20\text{ s}$.
2. **Phase 2 (Freinage effectif) :** Les freins s'enclenchent ; le véhicule parcourt une distance de freinage $d_2 = 14{,}0\text{ m}$ jusqu'à l'arrêt complet.

---

### ❓ Énoncé

1. **Système, référentiel et vitesse initiale**  
   Préciser le **système étudié** ainsi que le **référentiel** le plus adapté pour cette étude. Convertir ensuite la vitesse initiale $v_0 = 50\text{ km}\cdot\text{h}^{-1}$ en mètres par seconde ($\text{m}\cdot\text{s}^{-1}$).

2. **Caractérisation du mouvement**  
   Pour chacune des deux phases (phase 1 puis phase 2), qualifier la nature du mouvement du véhicule en justifiant précisément vos réponses à l'aide des termes appropriés du cours (trajectoire et évolution de la vitesse).

3. **Distance d'arrêt et sécurité du piéton**  
   a. Calculer la distance de réaction $d_1$ parcourue par le véhicule durant la phase 1.  
   b. En déduire la distance d'arrêt totale $d_{\text{arrêt}}$. Le choc avec le piéton a-t-il été évité ?

4. **Bilan des forces et principe d'inertie**  
   Lors de la phase 2 (freinage effectif) :  
   a. Dresser l'inventaire des forces extérieures qui s'exercent sur la voiture (on modélisera les frottements de la route par une force unique $\vec{f}$ opposée au déplacement).  
   b. À l'aide du principe d'inertie (ou de sa contraposée), expliquer pourquoi la vitesse de la voiture diminue lors de cette phase.

---

### 💡 Indice

* Pour convertir une vitesse de $\text{km}\cdot\text{h}^{-1}$ en $\text{m}\cdot\text{s}^{-1}$, rappelle-toi qu'il y a $3\,600\text{ s}$ dans $1\text{ h}$ et $1\,000\text{ m}$ dans $1\text{ km}$ : il suffit de diviser par $3{,}6$.
* Pendant un mouvement uniforme, la relation liant la vitesse, la distance et la durée est $d = v \times \Delta t$.
* Le principe d'inertie indique qu'un corps persévère dans un état de repos ou de mouvement rectiligne uniforme si et seulement si les forces qui s'exercent sur lui se compensent.

---

### 📋 Correction détaillée

#### 1. Système, référentiel et conversion de vitesse

* **Système étudié :** Le véhicule autonome (modélisé par son centre de masse ou un point matériel).
* **Référentiel :** Le **référentiel terrestre**, supposé galiléen à l'échelle de l'expérience, fixé au sol/à la route.
* **Conversion de la vitesse :**  
  $$v_0 = \frac{50\text{ km}}{1\text{ h}} = \frac{50 \times 10^3\text{ m}}{3\,600\text{ s}} \approx 13{,}89\text{ m}\cdot\text{s}^{-1}$$  
  Avec deux chiffres significatifs (comme $50\text{ km}\cdot\text{h}^{-1}$) :  
  $$v_0 \approx 14\text{ m}\cdot\text{s}^{-1} \quad (\text{ou } 13{,}9\text{ m}\cdot\text{s}^{-1})$$

---

#### 2. Caractérisation de la nature du mouvement

* **Phase 1 (Temps de réaction/activation) :**  
  * La trajectoire est une ligne droite : le mouvement est **rectiligne**.  
  * La vitesse reste constante ($v = v_0$) : le mouvement est **uniforme**.  
  * **Conclusion :** Le mouvement est **rectiligne uniforme**.

* **Phase 2 (Freinage effectif) :**  
  * La trajectoire reste en ligne droite : le mouvement est **rectiligne**.  
  * La valeur de la vitesse passe de $v_0$ à $0\text{ m}\cdot\text{s}^{-1}$ : la vitesse diminue, le mouvement est **ralenti** (ou décéléré).  
  * **Conclusion :** Le mouvement est **rectiligne ralenti**.

---

#### 3. Distance d'arrêt totale et sécurité

**a. Calcul de la distance $d_1$ (phase 1) :**  
Le mouvement étant rectiligne uniforme à la vitesse $v_0$ :  
$$d_1 = v_0 \times \Delta t_1$$  
$$d_1 = 13{,}89\text{ m}\cdot\text{s}^{-1} \times 0{,}20\text{ s} \approx 2{,}78\text{ m}$$

**b. Distance totale d'arrêt $d_{\text{arrêt}}$ :**  
La distance totale d'arrêt est la somme de la distance parcourue pendant le temps de réaction et de la distance de freinage :  
$$d_{\text{arrêt}} = d_1 + d_2$$  
$$d_{\text{arrêt}} = 2{,}78\text{ m} + 14{,}0\text{ m} = 16{,}78\text{ m} \approx 16{,}8\text{ m}$$

* **Conclusion :**  
  La distance séparant la voiture du piéton était de $D = 22{,}0\text{ m}$.  
  Comme $d_{\text{arrêt}} < D$ ($16{,}8\text{ m} < 22{,}0\text{ m}$), le véhicule s'immobilise environ $5{,}2\text{ m}$ avant le piéton. **Le choc est donc évité avec succès.**

---

#### 4. Bilan des forces et principe d'inertie

**a. Inventaire des forces extérieures :**  
Sur la chaussée horizontale, le véhicule est soumis à trois forces :
1. **Le poids $\vec{P}$** : action à distance exercée par la Terre (verticale, orientée vers le bas).
2. **La réaction normale du support $\vec{R}_N$** : action de contact de la route (verticale, orientée vers le haut), qui empêche le véhicule de s'enfoncer.
3. **La force de freinage/frottement $\vec{f}$** : action mécanique de contact exercée par la route sur les pneus (horizontale, de sens opposé au vecteur vitesse $\vec{v}$).

```text
              ^ R_N
              |
      <---    +----->  v (sens du déplacement)
       f      |
              v P
```

**b. Application du principe d'inertie :**  
* Selon la verticale, les deux forces se compensent :  
  $$\vec{P} + \vec{R}_N = \vec{0}$$
* Selon l'horizontale, il n'y a aucune force motrice vers l'avant, mais il subsiste la force de frottement $\vec{f}$ orientée vers l'arrière :  
  $$\sum \vec{F} = \vec{P} + \vec{R}_N + \vec{f} = \vec{f} \neq \vec{0}$$
* Les forces extérieures ne se compensant pas ($\sum \vec{F} \neq \vec{0}$), d'après la **contraposée du principe d'inertie**, le vecteur vitesse du véhicule ne peut pas rester constant. La force résultante $\vec{f}$ étant opposée au sens de déplacement, elle est responsable de la diminution de la valeur de la vitesse jusqu'à l'arrêt.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
