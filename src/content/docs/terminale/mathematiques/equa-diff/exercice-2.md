---
title: "Exercice 2 : Modélisation de la décroissance radioactive"
description: "Application pratique du chapitre Équations différentielles"
---

### 🌐 Contexte & Données scientifiques

La décroissance radioactive est un processus stochastique au niveau individuel (chaque noyau atomique instable a une probabilité constante de se désintégrer par unité de temps), mais qui se manifeste de manière déterministe à l'échelle macroscopique en raison du nombre considérable de noyaux concernés (généralement de l'ordre du nombre d'Avogadro).

Soit $N(t)$ le nombre de noyaux radioactifs non désintégrés d'un échantillon donné à l'instant $t$ (exprimé en secondes). Le modèle macroscopique standard postule que la vitesse de désintégration $\frac{\mathrm{d}N}{\mathrm{d}t}$ est strictement proportionnelle au nombre de noyaux présents à cet instant. 

Considérons l'isotope du Carbone 14 (${}^{14}\text{C}$), couramment utilisé en datation archéologique :
* **Demi-vie (ou période radioactive) $T_{1/2}$ :** Durée au bout de laquelle la moitié des noyaux initiaux s'est désintégrée. Pour le ${}^{14}\text{C}$, $T_{1/2} \approx 5730$ ans (avec une incertitude expérimentale de $\pm 40$ ans).
* **Activité initiale mesurée :** En archéologie, l'analyse des limites du modèle montre que le rapport isotopique ${}^{14}\text{C}/{}^{12}\text{C}$ dans l'atmosphère n'a pas été rigoureusement constant au cours des millénaires (en raison des variations du champ magnétique terrestre et de l'activité solaire). Des courbes de calibration (comme la base de données internationale *IntCal*) sont donc indispensables pour corriger les âges bruts.

---

### ❓ Énoncé

On modélise l'évolution du nombre de noyaux de ${}^{14}\text{C}$ par la fonction $N$ définie et dérivable sur $[0 ; +\infty[$.

1. **Mise en équation :** En traduisant mathématiquement l'hypothèse physique selon laquelle le taux de variation relatif $\frac{N'(t)}{N(t)}$ est une constante négative notée $-\lambda$ (où $\lambda > 0$ est la constante radioactive), établir que la fonction $N$ vérifie l'équation différentielle :
   $$(E) \quad N'(t) + \lambda N(t) = 0$$
   Résoudre cette équation différentielle et exprimer $N(t)$ en fonction du temps $t$, de la constante radioactive $\lambda$ et du nombre initial de noyaux $N_0 = N(0)$.

2. **Lien avec la demi-vie :** Démontrer que la constante radioactive $\lambda$ est liée à la période radioactive $T_{1/2}$ par la relation :
   $$\lambda = \frac{\ln(2)}{T_{1/2}}$$
   Calculer la valeur numérique de $\lambda$ (en $\text{an}^{-1}$).

3. **Application à la datation :** Un échantillon de bois prélevé sur un site archéologique présente une activité radioactive due au ${}^{14}\text{C}$ réduite de $35\%$ par rapport à un échantillon vivant de référence (c'est-à-dire que $N(t) = 0{,}65 \, N_0$). 
   Déterminer l'âge estimé de l'échantillon.

4. **Analyse critique du modèle :** L'incertitude sur la mesure de la quantité résiduelle de ${}^{14}\text{C}$ est estimée à $\pm 2\%$. En utilisant un encadrement ou un calcul de différentiation, discuter de la pertinence et des limites de cette méthode de datation pour des échantillons organiques vieux de plus de $50\,000$ ans.

---

### 💡 Indice de méthode

* **Question 1 :** Révisez la forme générale des solutions des équations différentielles linéaires homogènes du premier ordre à coefficients constants : $y' + ay = 0$.
* **Question 2 :** Utilisez la définition de la demi-vie : à l'instant $t = T_{1/2}$, le nombre de noyaux est égal à $\frac{N_0}{2}$. Appliquez ensuite la fonction logarithme népérien.
* **Question 3 :** Posez l'équation $N(t) = 0{,}65 \, N_0$ en utilisant l'expression explicite de $N(t)$, puis isolez la variable $t$.
* **Question 4 :** Observez le comportement mathématique de la fonction $N(t)$ lorsque $t$ devient très grand ($t > 9 \, T_{1/2}$) et considérez le rapport signal/bruit dans les mesures physiques.

---

### 📋 Correction détaillée pas à pas

#### 1. Mise en équation et résolution
* **Mise en mise en place :** L'énoncé indique que la vitesse de désintégration $\frac{\mathrm{d}N}{\mathrm{d}t}$ (soit $N'(t)$) est proportionnelle à $N(t)$ avec un coefficient de proportionnalité négatif $-\lambda$ ($\lambda > 0$) :
  $$N'(t) = -\lambda N(t) \iff N'(t) + \lambda N(t) = 0$$
* **Résolution :** Les solutions de l'équation différentielle linéaire homogène du premier ordre $y' + ay = 0$ (où ici $a = \lambda$) sont de la forme :
  $$N(t) = C e^{-\lambda t}$$
  où $C$ est une constante réelle déterminée par les conditions initiales.
  À $t = 0$, $N(0) = C e^{0} = C$. Or $N(0) = N_0$, donc $C = N_0$.
  La solution unique est donc :
  $$N(t) = N_0 e^{-\lambda t}$$

#### 2. Lien avec la demi-vie
Par définition de la demi-vie $T_{1/2}$, on a la relation :
$$N(T_{1/2}) = \frac{N_0}{2}$$
En injectant cette condition dans l'expression de $N(t)$ :
$$N_0 e^{-\lambda T_{1/2}} = \frac{N_0}{2}$$
Puisque $N_0 > 0$, on peut diviser les deux membres par $N_0$ :
$$e^{-\lambda T_{1/2}} = \frac{1}{2}$$
En appliquant le logarithme népérien à chaque membre :
$$\ln\left(e^{-\lambda T_{1/2}}\right) = \ln\left(\frac{1}{2}\right) \iff -\lambda T_{1/2} = -\ln(2)$$
$$\lambda = \frac{\ln(2)}{T_{1/2}}$$
* **Application numérique :** Avec $T_{1/2} = 5730$ ans :
  $$\lambda = \frac{\ln(2)}{5730} \approx 1{,}2098 \times 10^{-4} \text{ an}^{-1}$$

#### 3. Application à la datation
L'échantillon a perdu $35\%$ de son ${}^{14}\text{C}$, il lui en reste donc $100\% - 35\% = 65\%$. On cherche l'instant $t_1$ tel que :
$$N(t_1) = 0{,}65 \, N_0$$
Soit :
$$N_0 e^{-\lambda t_1} = 0{,}65 \, N_0 \iff e^{-\lambda t_1} = 0{,}65$$
En appliquant le logarithme népérien :
$$-\lambda t_1 = \ln(0{,}65) \iff t_1 = -\frac{\ln(0{,}65)}{\lambda}$$
En remplaçant $\lambda$ par $\frac{\ln(2)}{T_{1/2}}$ :
$$t_1 = T_{1/2} \times \frac{-\ln(0{,}65)}{\ln(2)} = 5730 \times \frac{-\ln(0{,}65)}{\ln(2)} \approx 5730 \times \frac{0{,}43078}{0{,}69315} \approx 3560 \text{ ans}$$
L'échantillon est âgé d'environ $3560$ ans.

#### 4. Analyse critique du modèle
* **Limites mathématiques et asymptotiques :** La fonction $N(t) = N_0 e^{-\lambda t}$ est strictement décroissante et tend vers $0$ lorsque $t$ tend vers $+\infty$, mais elle ne s'annule jamais mathématiquement. 
* **Limites métrologiques (bruit de fond) :** Au bout de $8$ à $9$ demi-vies (soit environ $45\,000$ à $50\,000$ ans), la quantité de ${}^{14}\text{C}$ résiduelle devient inférieure à $0{,}4\%$ de la valeur initiale. Cette infime quantité devient du même ordre de grandeur que les fluctuations du bruit de fond radioactif naturel et des contaminations exogènes (ex. : infiltration de carbone récent).
* **Impact d'une incertitude de $\pm 2\%$ :** Si la mesure expérimentale est entachée d'une incertitude, l'inversion de la fonction logarithme amplifie l'incertitude sur l'âge calculé pour les échantillons très anciens, rendant la méthode inopérante au-delà de $60\,000$ ans, d'où la nécessité de croiser ces résultats avec d'autres méthodes radiométriques (ex: potassium-argon).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
