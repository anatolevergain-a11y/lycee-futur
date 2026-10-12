---
title: "Exercice 2 : Onde sinusoïdale et fréquence"
description: "Application pratique du chapitre Trigonométrie et fonctions associées"
---

### 🌐 Contexte & Données scientifiques

En acoustique et en traitement du signal, l'étude des ondes sonores pures repose sur la modélisation mathématique par des fonctions trigonométriques. Une onde sinusoïdale modélise la variation de la pression acoustique $s(t)$ en fonction du temps $t$ (exprimé en secondes). 

Considérons un signal acoustique émis lors du $La_3$ étalon, utilisé pour l'accord des instruments de musique. La fréquence fondamentale théorique de cette note est fixée à $f = 440\text{ Hz}$ dans le système international. Cependant, dans les conditions réelles d'enregistrement (présence de bruit thermique, imperfections des capteurs piézoélectriques), le signal reçu par un microphone subit une atténuation d'amplitude et une incertitude temporelle de phase.

Le modèle mathématique retenu pour la tension électrique $u(t)$ (en volts) délivrée par le microphone est le suivant :
$$u(t) = A \cos(\omega t + \varphi)$$

Avec les paramètres suivants issus de la mesure expérimentale :
*   $A = 2,5\text{ V}$ (amplitude maximale du signal).
*   $\omega = 880\pi\text{ rad}\cdot\text{s}^{-1}$ (pulsation du signal).
*   $\varphi \in [-\pi, \pi]$ la phase à l'origine, estimée à $\frac{\pi}{3}\text{ rad}$ à l'instant $t = 0$.

*Note critique sur le modèle :* Ce modèle suppose un milieu idéal sans dispersion et néglige l'amortissement géométrique de l'onde. En pratique, l'amplitude $A$ n'est pas strictement constante mais décroît lentement selon une enveloppe exponentielle $A(t) = A_0 e^{-\lambda t}$, que nous approximation ici par une constante sur un court intervalle de temps.

---

### ❓ Énoncé

1. **Analyse fréquentielle :** Rappeler la relation mathématique entre la pulsation $\omega$ et la fréquence $f$ du signal. En déduire la fréquence $f$ de l'onde étudiée et la comparer à la valeur théorique du $La_3$ ($440\text{ Hz}$). Conclure sur la validité du modèle face aux incertitudes instrumentales.
2. **Résolution d'équation :** Déterminer l'ensemble des instants $t \in [0 ; 0,01]$ pour lesquels la tension du signal s'annule, c'est-à-dire $u(t) = 0$.
3. **Étude d'extremum et encadrement :** Calculer la valeur exacte de la tension $u(t)$ à l'instant $t_1 = \frac{1}{440}\text{ s}$. Proposer une analyse critique de l'impact d'une incertitude de mesure de $\Delta t = 10^{-4}\text{ s}$ sur la valeur de $u(t)$ obtenue.
4. **Modélisation et déphasage :** On souhaite comparer ce signal avec un second signal $v(t) = 2,5 \cos\left(880\pi t - \frac{\pi}{6}\right)$. Déterminer le déphasage entre ces deux ondes et calculer le retard temporel correspondant.

---

### 💡 Indice de méthode

*   *Question 1 :* Utilisez la formule fondamentale liant la pulsation $\omega$ (en $\text{rad}\cdot\text{s}^{-1}$) et la fréquence $f$ (en $\text{Hz}$), à savoir $\omega = 2\pi f$.
*   *Question 2 :* Ramenez l'équation $u(t) = 0$ à la résolution d'une équation trigonométrique élémentaire du type $\cos(X) = 0$, puis isolez $t$ en tenant compte de la stricte minoration et majoration de l'intervalle $[0 ; 0,01]$.
*   *Question 3 :* Pour l'analyse d'incertitude, calculez la variation maximale $\Delta u \approx \left| u'(t_1) \right| \times \Delta t$ en utilisant la dérivée de la fonction, ou évaluez l'écart par un encadrement direct.
*   *Question 4 :* Le déphasage $\Delta\phi$ entre deux signaux de même pulsation s'obtient par la différence de leurs phases à l'origine. Le retard temporel $\tau$ est lié au déphasage par la relation $\Delta\phi = -\omega \tau$.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse fréquentielle
Par définition, la pulsation $\omega$ d'une fonction sinusoïdale est reliée à sa fréquence $f$ par la relation :
$$\omega = 2\pi f$$
En isolant $f$, on obtient :
$$f = \frac{\omega}{2\pi}$$
En injectant la valeur du modèle $\omega = 880\pi$ :
$$f = \frac{880\pi}{2\pi} = 440\text{ Hz}$$
**Conclusion scientifique :** La fréquence calculée est exactement de $440\text{ Hz}$, ce qui correspond rigoureusement à la fréquence théorique du $La_3$. Le modèle mathématique est donc en adéquation parfaite avec la physique du son émis, bien que la mesure réelle puisse fluctuer de $\pm 0,5\text{ Hz}$ en raison de la température ambiante influençant la célérité du son dans l'air.

#### 2. Résolution de $u(t) = 0$ sur $[0 ; 0,01]$
L'équation s'écrit :
$$2,5 \cos\left(880\pi t + \frac{\pi}{3}\right) = 0$$
Puisque $2,5 \neq 0$, cela équivaut à :
$$\cos\left(880\pi t + \frac{\pi}{3}\right) = 0$$
Les solutions de l'équation $\cos(X) = 0$ sont de la forme $X = \frac{\pi}{2} + k\pi$ avec $k \in \mathbb{Z}$. Ainsi :
$$880\pi t + \frac{\pi}{3} = \frac{\pi}{2} + k\pi$$
Divisons l'ensemble de l'égalité par $\pi$ ($\pi \neq 0$) :
$$880 t + \frac{1}{3} = \frac{1}{2} + k$$
Isolons $880t$ :
$$880 t = \frac{1}{2} - \frac{1}{3} + k = \frac{1}{6} + k$$
$$t = \frac{1}{5280} + \frac{k}{880}$$
Recherchons les valeurs de $k \in \mathbb{Z}$ telles que $t \in [0 ; 0,01]$ :
$$0 \le \frac{1}{5280} + \frac{k}{880} \le 0,01$$
En multipliant par $5280$ :
$$0 \le 1 + 6k \le 52,8$$
$$-1 \le 6k \le 51,8$$
$$-\frac{1}{6} \le k \le \frac{51,8}{6} \approx 8,63$$
Puisque $k$ est un entier ($k \in \mathbb{Z}$), les valeurs possibles pour $k$ sont $k \in \{0, 1, 2, 3, 4, 5, 6, 7, 8\}$.
Les instants d'annulation du signal sur cet intervalle sont donc obtenus pour ces 9 valeurs de $k$. Par exemple, pour $k=0$ : $t = \frac{1}{5280}\text{ s} \approx 1,89 \times 10^{-4}\text{ s}$.

#### 3. Calcul de $u(t_1)$ et analyse d'incertitude
À l'instant $t_1 = \frac{1}{440}\text{ s}$ :
$$u\left(\frac{1}{440}\right) = 2,5 \cos\left(880\pi \times \frac{1}{440} + \frac{\pi}{3}\right)$$
$$u\left(\frac{1}{440}\right) = 2,5 \cos\left(2\pi + \frac{\pi}{3}\right)$$
La fonction cosinus étant $2\pi$-périodique :
$$\cos\left(2\pi + \frac{\pi}{3}\right) = \cos\left(\frac{\pi}{3}\right) = \frac{1}{2}$$
Ainsi :
$$u\left(\frac{1}{440}\right) = 2,5 \times 0,5 = 1,25\text{ V}$$

*Analyse critique des limites (incertitude de mesure) :*
Si l'appareil de mesure possède une incertitude temporelle $\Delta t = 10^{-4}\text{ s}$, l'erreur commise sur la tension peut être approchée par la différentielle $\Delta u \approx |u'(t_1)| \cdot \Delta t$.
La dérivée est $u'(t) = -2,5 \times 880\pi \sin\left(880\pi t + \frac{\pi}{3}\right)$.
En $t_1$ : 
$$u'\left(\frac{1}{440}\right) = -2200\pi \sin\left(\frac{\pi}{3}\right) = -2200\pi \times \frac{\sqrt{3}}{2} = -1100\sqrt{3}\pi \approx -5986\text{ V}\cdot\text{s}^{-1}$$
L'incertitude sur la tension est donc de l'ordre de $\Delta u \approx 5986 \times 10^{-4} \approx 0,60\text{ V}$. 
**Bilan critique :** Une incertitude infime sur le temps ($0,1\text{ ms}$) entraîne une variation de tension de près de $0,60\text{ V}$ (soit près de $24\%$ de l'amplitude totale). Cela illustre la nécessité d'utiliser des horloges d'échantillonnage à haute précision en traitement numérique du signal.

#### 4. Étude du déphasage
Le premier signal a pour phase $\varphi_1 = \frac{\pi}{3}$ et le second $\varphi_2 = -\frac{\pi}{6}$.
Le déphasage $\Delta\phi$ entre les deux ondes est :
$$\Delta\phi = \varphi_2 - \varphi_1 = -\frac{\pi}{6} - \frac{\pi}{3} = -\frac{\pi}{6} - \frac{2\pi}{6} = -\frac{3\pi}{6} = -\frac{\pi}{2}\text{ rad}$$
Les deux signaux sont en quadrature de phase (décalés d'un quart de période). 
Le retard temporel $\tau$ correspondant se calcule via la relation $\Delta\phi = -\omega \tau$ :
$$-\frac{\pi}{2} = -880\pi \tau \implies \tau = \frac{\pi}{2 \times 880\pi} = \frac{1}{1760}\text{ s} \approx 5,68 \times 10^{-4}\text{ s}$$
Le second signal présente donc un retard temporel de $\approx 0,57\text{ ms}$ par rapport au premier.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
