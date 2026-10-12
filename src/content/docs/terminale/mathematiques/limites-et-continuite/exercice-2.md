---
title: "Exercice 2 : Théorème des valeurs intermédiaires"
description: "Application pratique du chapitre Limites et continuité"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude de la dynamique des populations et de la gestion des ressources halieutiques, la modélisation de la croissance d'une espèce de poissons pélagiques est un enjeu économique et écologique majeur. Les biologistes marins utilisent souvent des modèles mathématiques continus pour estimer l'évolution de la biomasse d'un stock. 

Soit $f$ la fonction représentant le taux de variation net de la biomasse d'une population (en milliers de tonnes par an) en fonction de la biomasse $x$ présente dans l'écosystème (exprimée en dizaines de milliers de tonnes). 

Des campagnes de mesure menées entre 2018 et 2023 ont permis d'établir que, pour $x \in [0, 5]$, la fonction $f$ est modelée par l'expression suivante :
$$f(x) = x^3 - 6x^2 + 8x - 1$$

Dans ce modèle, l'équilibre de la population (stabilité où le taux de variation net est nul) est atteint lorsque $f(x) = 0$. Cependant, les mesures de terrain comportent une incertitude systématique estimée à $\pm 0,1$ en raison des marges d'erreur inhérentes au sonar et aux campagnes de chalutage scientifique. L'analyse mathématique rigoureuse doit donc composer avec ces limites empiriques.

---

### ❓ Énoncé

1. **Justification de la continuité :** Préciser la nature de la fonction $f$ sur l'intervalle $[0, 5]$ et en déduire si le Théorème des Valeurs Intermédiaires (TVI) est applicable pour tout réel $k$ compris entre $f(0)$ et $f(5)$.
2. **Recherche de racines et unicité :** Calculer les images $f(0)$, $f(1)$, $f(3)$ et $f(5)$. En déduire, à l'aide du corollaire du TVI (théorème de la bijection), l'existence et l'unicité d'une valeur $x_0 \in [1, 3]$ telle que $f(x_0) = 0$.
3. **Encadrement par dichotomie :** À l'aide de calculs successifs, déterminer un encadrement de la solution $x_0$ d'amplitude inférieure à $0,25$.
4. **Analyse critique du modèle :** En tenant compte de l'incertitude de mesure empirique ($\pm 0,1$) sur les valeurs de $f$, discutez la pertinence d'obtenir un encadrement de $x_0$ à l'échelle décimale près dans un contexte de gestion halieutique.

---

### 💡 Indice de méthode

* **Question 1 & 2 :** Pour appliquer le Théorème des Valeurs Intermédiaires (et son corollaire strict), vérifiez impérativement deux hypothèses : la **continuité** de la fonction sur l'intervalle considéré et la **stricte monotonie** (calcul de la dérivée $f'$) si l'on souhaite garantir l'unicité.
* **Question 3 :** La méthode de dichotomie consiste à diviser l'intervalle en son milieu, calculer l'image de ce milieu, et conserver le sous-intervalle où les bornes ont des images de signes contraires.
* **Question 4 :** Mettez en perspective la précision mathématique pure et la réalité métrologique des données de terrain. Un modèle mathématique est une idéalisation qu'il convient de nuancer face aux incertitudes expérimentales.

---

### 📋 Correction détaillée pas à pas

#### 1. Justification de la continuité et applicabilité du TVI
La fonction $f$ est définie sur $[0, 5]$ par $f(x) = x^3 - 6x^2 + 8x - 1$.
* Il s'agit d'une fonction **polynôme**. Or, les fonctions polynômes sont dérivables, et par conséquent **continues**, sur $\mathbb{R}$, et en particulier sur l'intervalle fermé et borné $[0, 5]$.
* Le Théorème des Valeurs Intermédiaires (TVI) s'applique donc : pour tout réel $k$ compris entre $f(0)$ et $f(5)$, il existe (au moins) un réel $c \in [0, 5]$ tel que $f(c) = k$.

#### 2. Recherche de racines et unicité sur $[1, 3]$
Calculons les images des valeurs remarquables :
* $f(0) = 0^3 - 6(0)^2 + 8(0) - 1 = -1$
* $f(1) = 1^3 - 6(1)^2 + 8(1) - 1 = 1 - 6 + 8 - 1 = 2$
* $f(3) = 3^3 - 6(3)^2 + 8(3) - 1 = 27 - 54 + 24 - 1 = -4$
* $f(5) = 5^3 - 6(5)^2 + 8(5) - 1 = 125 - 150 + 40 - 1 = 14$

Étudions les variations de $f$ sur $[1, 3]$ en calculant sa dérivée $f'$ :
$$f'(x) = 3x^2 - 12x + 8$$
Le discriminant de ce polynôme du second degré est :
$$\Delta = (-12)^2 - 4(3)(8) = 144 - 96 = 48$$
Puisque $\Delta > 48 > 0$, la dérivée admet deux racines réelles distinctes. Cependant, étudions le signe de $f'(x)$ sur $[1, 3]$. 
Les racines de $f'$ sont $x_1 = \frac{12 - \sqrt{48}}{6} = 2 - \frac{4\sqrt{3}}{6} \approx 0,85$ et $x_2 \approx 3,15$.
Sur l'intervalle $[1, 3]$, $x_1$ est hors de l'intervalle (ou à sa borne) et $x_2 > 3$. Ainsi, pour tout $x \in [1, 3]$, on constate que $f'(x) < 0$ (par exemple, $f'(1) = 3 - 12 + 8 = -1 < 0$ et $f'(2) = 12 - 24 + 8 = -4 < 0$).
La fonction $f$ est donc **strictement décroissante** sur $[1, 3]$.

Sur l'intervalle $[1, 3]$ :
* $f$ est continue.
* $f$ est strictement monotone (décroissante).
* $f(1) = 2$ et $f(3) = -4$. Le nombre $0$ est compris entre $f(3)$ et $f(1)$ (car $-4 < 0 < 2$).

D'après le **corollaire du TVI (théorème de la bijection)**, il existe un **unique** réel $x_0 \in [1, 3]$ tel que $f(x_0) = 0$.

#### 3. Encadrement par dichotomie
Appliquons l'algorithme de dichotomie sur l'intervalle initial $[1, 3]$ où $f(1) = 2 > 0$ et $f(3) = -4 < 0$ :
* **Étape 1 :** Milieu $m_1 = \frac{1 + 3}{2} = 2$.
  Calcul : $f(2) = 2^3 - 6(2)^2 + 8(2) - 1 = 8 - 24 + 16 - 1 = -1$.
  Comme $f(1) = 2 > 0$ et $f(2) = -1 < 0$, la racine $x_0 \in [1, 2]$. (Amplitude : $1$).

* **Étape 2 :** Milieu $m_2 = \frac{1 + 2}{2} = 1,5$.
  Calcul : $f(1,5) = (1,5)^3 - 6(1,5)^2 + 8(1,5) - 1 = 3,375 - 13,5 + 12 - 1 = 0,875$.
  Comme $f(1,5) = 0,875 > 0$ et $f(2) = -1 < 0$, la racine $x_0 \in [1,5 ; 2]$. (Amplitude : $0,5$).

* **Étape 3 :** Milieu $m_3 = \frac{1,5 + 2}{2} = 1,75$.
  Calcul : $f(1,75) = (1,75)^3 - 6(1,75)^2 + 8(1,75) - 1 \approx 5,359 - 18,375 + 14 - 1 = -0,0156$.
  Comme $f(1,5) = 0,875 > 0$ et $f(1,75) = -0,0156 < 0$, la racine $x_0 \in [1,5 ; 1,75]$.

L'amplitude de l'intervalle final est $1,75 - 1,5 = 0,25$, ce qui répond à la consigne. Un encadrement de $x_0$ est donc **$1,5 \le x_0 \le 1,75$**.

#### 4. Analyse critique du modèle et esprit critique
* **Incertitude métrologique vs Précision mathématique :** Le modèle mathématique fournit une solution approchée $x_0$, mais les données initiales mesurées sur le terrain possèdent une incertitude de $\pm 0,1$. Cela signifie que la courbe réelle $f(x)$ peut osciller dans un "tubage" d'incertitude.
* **Limite de la sur-interprétation :** Chercher à affiner l'encadrement mathématique de $x_0$ à la décimale ou au centième près (par exemple $1,74$ au lieu de $1,75$) perd de son sens pratique si l'erreur de mesure empirique est supérieure à cette variation. 
* **Conclusion scientifique :** Le modèle mathématique valide l'existence d'un seuil critique d'équilibre biologique, mais les gestionnaires de la ressource doivent intégrer ces marges d'erreur dans les quotas de pêche, en évitant le dogmatisme d'une valeur numérique exacte qui n'est qu'une approximation théorique d'un système vivant complexe.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
