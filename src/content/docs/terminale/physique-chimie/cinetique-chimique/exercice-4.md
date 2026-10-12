---
title: "Exercice 4 : Vieillissement des batteries au lithium"
description: "Application pratique du chapitre Cinétique chimique"
---

### 🌐 Contexte concret

Les batteries lithium-ion équipent la majorité de nos appareils électroniques portables et des véhicules électriques. Cependant, elles subissent un vieillissement inévitable, lié à des réactions chimiques parasites internes. L'une des principales causes de dégradation est la formation et la croissance progressive d'une couche de passivation, appelée interface solide-électrolyte (SEI), à la surface de l'électrode négative. 

Ce phénomène consomme des ions lithium ($Li^+$) et augmente la résistance interne de la batterie, réduisant ainsi sa capacité maximale au fil du temps. Des études cinétiques montrent que l'épaisseur $e(t)$ de cette couche SEI croît souvent selon une loi parabolique en raison du mécanisme de diffusion : 

$$e(t)^2 = k \cdot t$$

où $k$ est une constante cinétique dépendante de la température et $t$ le temps de fonctionnement.

---

### ❓ Énoncé

1. **Rappel de cours :** Définir la vitesse volumique de disparition d'une espèce chimique en solution. Comment cette vitesse évolue-t-elle généralement au cours du temps lors d'une transformation chimique ? Justifier à l'aide des facteurs cinétiques.
2. **Exploitation de la loi de vieillissement :** On s'intéresse à l'évolution de l'épaisseur $e(t)$ de la couche SEI. Exprimer l'épaisseur $e(t)$ en fonction du temps $t$, de la constante $k$, et préciser l'unité de $k$ dans le Système International (SI).
3. **Approche différentielle :** Déterminer l'expression de la vitesse de croissance de la couche SEI, notée $v_{croissance}(t) = \frac{de(t)}{dt}$, en fonction de $k$ et de $t$. Comment évolue cette vitesse au cours du temps ? Quel impact cela a-t-il sur la cinétique de dégradation de la batterie ?
4. **Influence de la température :** La constante cinétique $k$ suit une loi d'Arrhenius : $k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$. Expliquer pourquoi laisser un smartphone en plein soleil (température élevée) accélère son vieillissement.

---

### 💡 Indice

* **Question 2 :** Pensez à appliquer la fonction racine carrée aux deux membres de l'équation $e(t)^2 = k \cdot t$ et faites une analyse dimensionnelle pour l'unité.
* **Question 3 :** Dérivez l'expression de $e(t)$ obtenue à la question précédente par rapport au temps $t$. Rappel mathématique : $\frac{d}{dt}(\sqrt{t}) = \frac{1}{2\sqrt{t}}$.
* **Question 4 :** Analysez l'effet d'une augmentation de la température $T$ sur le terme exponentiel de la loi d'Arrhenius, puis reliez cela à la valeur de $k$ et à la vitesse de réaction.

---

### 📋 Correction détaillée pas à pas

#### 1. Rappel de cours sur la vitesse de réaction
* **Définition :** Soit une espèce chimique $A$ en solution. La vitesse volumique $v(t)$ de disparition de l'espèce $A$ à l'instant $t$ est définie par la relation :
  $$v(t) = -\frac{1}{V} \cdot \frac{dn_A}{dt} = -\frac{d[A]}{dt}$$
  où $[A]$ représente la concentration molaire de l'espèce $A$ (en $mol \cdot L^{-1}$ ou $mol \cdot m^{-3}$) et $t$ le temps (en $s$).
* **Évolution au cours du temps :** Au cours d'une transformation chimique, la vitesse de réaction diminue généralement au fil du temps. 
* **Justification :** Cette diminution s'explique par l'**effet des facteurs cinétiques**, en particulier l'évolution des concentrations des réactifs. Au fur et à mesure que la réaction avance, les réactifs sont consommés, donc leurs concentrations diminuent. Selon la loi de vitesse, la fréquence des chocs efficaces entre entités réactives diminue, ce qui ralentit la réaction.

---

#### 2. Expression de l'épaisseur et unité de $k$
* À partir de l'équation de la couche SEI : $e(t)^2 = k \cdot t$, en prenant la racine carrée (l'épaisseur étant une grandeur positive), on obtient :
  $$e(t) = \sqrt{k \cdot t} = \sqrt{k} \cdot \sqrt{t}$$
* **Recherche de l'unité de $k$ :** 
  Dans le Système International, l'épaisseur $e(t)$ s'exprime en mètres ($m$) et le temps $t$ en secondes ($s$).
  D'après l'équation initiale : $k = \frac{e(t)^2}{t}$.
  L'unité de $k$ est donc :
  $$\text{Unité}(k) = \frac{m^2}{s} \quad (\text{ou } m^2 \cdot s^{-1})$$

---

#### 3. Vitesse de croissance de la couche SEI
* En dérivant l'expression de $e(t) = \sqrt{k} \cdot t^{\frac{1}{2}}$ par rapport au temps $t$, on obtient la vitesse de croissance :
  $$v_{croissance}(t) = \frac{de(t)}{dt} = \sqrt{k} \cdot \frac{1}{2\sqrt{t}} = \frac{\sqrt{k}}{2\sqrt{t}}$$
* **Évolution et impact :** 
  Puisque le temps $t$ est au dénominateur et croît, la vitesse de croissance $v_{croissance}(t)$ **diminue au cours du temps** ($\lim_{t \to +\infty} v_{croissance}(t) = 0$). 
  *Impact :* La couche SEI se forme très rapidement au début de la vie de la batterie, puis le processus de dégradation se ralentit considérablement. C'est un phénomène protecteur partiel, bien que la résistance continue d'augmenter lentement.

---

#### 4. Influence de la température (Loi d'Arrhenius)
* L'expression de la constante cinétique est $k(T) = A \cdot e^{-\frac{E_a}{R \cdot T}}$ avec $E_a > 0$.
* Lorsque la température $T$ augmente (par exemple, un smartphone exposé au soleil) :
  1. Le quotient $\frac{E_a}{R \cdot T}$ diminue.
  2. Par conséquent, $-\frac{E_a}{R \cdot T}$ augmente (devient moins négatif).
  3. La fonction exponentielle $e^{-\frac{E_a}{R \cdot T}}$ augmente donc fortement.
* **Conclusion :** La constante de vitesse $k$ augmente avec la température. D'après l'expression de l'épaisseur $e(t) = \sqrt{k \cdot t}$, une augmentation de $k$ entraîne une augmentation de l'épaisseur de la couche SEI pour un même temps $t$. La batterie vieillit donc beaucoup plus vite à haute température.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
