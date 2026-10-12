---
title: "Exercice 3 : Évolution de populations et modèle logistique"
description: "Application pratique du chapitre Équations différentielles"
---

### 🌐 Contexte & Données scientifiques

En dynamique des populations, le modèle de Malthus (croissance exponentielle) suppose un taux de reproduction per capita constant, ce qui conduit à une croissance infinie, incompatible avec la réalité biophysique des écosystèmes (limitation des ressources, de l'espace, impact de la prédation). 

Pour affiner cette approche, le mathématicien Pierre François Verhulst a proposé en 1838 le **modèle logistique**. Ce modèle suppose que le taux de croissance instantané diminue de manière linéaire à mesure que la population s'approche d'une capacité limite de l'environnement, notée $K$ (souvent appelée "charge utile" ou *carrying capacity*).

Soit $N(t)$ l'effectif d'une population à l'instant $t$ (exprimé en années). L'évolution de $N$ est régie par l'équation différentielle non linéaire :
$$\frac{dN}{dt} = r N(t) \left(1 - \frac{N(t)}{K}\intrinsic\right)$$

Où :
- $r > 0$ représente le taux intrinsèque de croissance de la population en l'absence de contraintes.
- $K > 0$ est la capacité maximale d'accueil du milieu.

*Données de terrain (étude simulée sur une réserve naturelle de cervidés) :*
- Capacité limite estimée du milieu : $K = 5000$ individus.
- Taux intrinsèque de croissance : $r = 0,2$ an$^{-1}$.
- Population initiale en $t = 0$ : $N(0) = 500$ individus.

---

### ❓ Énoncé

1. **Analyse qualitative de l'équation :** 
   Sans résoudre l'équation différentielle, déterminer les solutions constantes (ou états d'équilibre) du système. Étudier le signe de $\frac{dN}{dt}$ selon les valeurs de $N(t)$ sur l'intervalle $[0, +\infty[$ et en déduire le sens de variation de la fonction $N$.

2. **Linéarisation et résolution :** 
   On pose, pour $N(t) \neq 0$, $z(t) = \frac{1}{N(t)}$. 
   Montrer que la fonction $z$ vérifie une équation différentielle linéaire du premier ordre à coefficients constants de la forme $z' + az = b$, où $a$ et $b$ sont des constantes à exprimer en fonction de $r$ et $K$. En déduire l'expression générale de $z(t)$, puis celle de $N(t)$ en tenant compte de la condition initiale $N(0) = 500$.

3. **Étude asymptotique et esprit critique :**
   Calculer la limite de $N(t)$ lorsque $t$ tend vers $+\infty$. Commenter ce résultat au regard des hypothèses biologiques du modèle. Déterminer mathématiquement l'instant $t_1$ pour lequel le taux de croissance de la population est maximal (point d'inflexion de la courbe).

---

### 💡 Indice de méthode

- **Question 1 :** Un état d'équilibre correspond à une population dont l'effectif ne varie pas au cours du temps, soit $\frac{dN}{dt} = 0$.
- **Question 2 :** Calculez la dérivée de $z(t)$ par rapport à $t$ en utilisant la règle de dérivation des fonctions composées : $z'(t) = -\frac{N'(t)}{(N(t))^2}$. Injectez ensuite l'équation logistique de départ dans cette expression.
- **Question 3 :** Pour le point d'inflexion, étudiez la dérivée seconde de $N$ ou cherchez quand la vitesse de croissance $\frac{dN}{dt}$ est maximale (dérivez l'expression de la vitesse par rapport à $N$).

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse qualitative de l'équation
Les états d'équilibre de la population correspondent aux situations où l'effectif se stabilise, c'est-à-dire $\frac{dN}{dt} = 0$.
L'équation s'écrit :
$$r N(t) \left(1 - \frac{N(t)}{K}\right) = 0$$
Puisque $r > 0$, les solutions constantes sont $N(t) = 0$ (extinction de la population) et $N(t) = K = 5000$ (saturation du milieu).

Étudions le signe de $\frac{dN}{dt}$ pour $N(t) \in [0, +\infty[$ :
- Si $0 < N(t) < K$, alors $\left(1 - \frac{N(t)}{K}\right) > 0$, donc $\frac{dN}{dt} > 0$ : la population est **croissante**.
- Si $N(t) > K$, alors $\left(1 - \frac{N(t)}{K}\right) < 0$, donc $\frac{dN}{dt} < 0$ : la population est **décroissante** (pression excessive sur les ressources).
- Si $N(t) = K$, $\frac{dN}{dt} = 0$ : la population est stationnaire.

#### 2. Linéarisation et résolution
Soit $z(t) = \frac{1}{N(t)}$. Dérivons $z$ par rapport à $t$ :
$$z'(t) = -\frac{N'(t)}{(N(t))^2}$$
En remplaçant $N'(t)$ par l'expression du modèle logistique :
$$z'(t) = -\frac{r N(t) \left(1 - \frac{N(t)}{K}\right)}{(N(t))^2} = -\frac{r}{N(t)} \left(1 - \frac{N(t)}{K}\right)$$
Comme $\frac{1}{N(t)} = z(t)$, il vient :
$$z'(t) = -r z(t) \left(1 - z(t)K\right) \quad \text{soit} \quad z'(t) = -rz(t) + \frac{r}{K}$$
On obtient une équation différentielle linéaire du premier ordre :
$$z'(t) + rz(t) = \frac{r}{K}$$

La solution générale de l'équation homogène $z' + rz = 0$ est :
$$z_h(t) = C e^{-rt} \quad (C \in \mathbb{R})$$
Une solution particulière évidente sous forme de constante $z_p$ est obtenue en posant $z' = 0$ :
$$rz_p = \frac{r}{K} \implies z_p = \frac{1}{K}$$
La solution générale est donc :
$$z(t) = C e^{-rt} + \frac{1}{K}$$

Utilisons la condition initiale $N(0) = 500$, ce qui implique $z(0) = \frac{1}{500}$ :
$$z(0) = C e^{0} + \frac{1}{5000} = \frac{1}{500}$$
$$C = \frac{1}{500} - \frac{1}{5000} = \frac{10}{5000} - \frac{1}{5000} = \frac{9}{5000}$$

Ainsi, $z(t) = \frac{9}{5000}e^{-0,2t} + \frac{1}{5000}$.
En revenant à $N(t) = \frac{1}{z(t)}$ :
$$N(t) = \frac{5000}{1 + 9e^{-0,2t}}$$

#### 3. Étude asymptotique et esprit critique
- **Limite à l'infini :**
  $$\lim_{t \to +\infty} e^{-0,2t} = 0 \implies \lim_{t \to +\infty} N(t) = \frac{5000}{1 + 0} = 5000 = K$$
  *Analyse critique :* Mathématiquement et biologiquement, la population se stabilise asymptotiquement autour de la capacité porteuse $K$. Le modèle évite l'aberration de Malthus. Toutefois, ce modèle déterministe suppose $K$ constant, ce qui est une idéalisation : en écologie réelle, $ fluctuate$ en fonction des aléas climatiques ou des perturbations anthropiques.

- **Recherche du taux de croissance maximal (point d'inflexion) :**
  Le taux de croissance est maximal lorsque sa dérivée par rapport à $t$ s'annule, ce qui correspond géographiquement au point d'inflexion de la courbe logistique, atteint lorsque la population atteint exactement la moitié de sa capacité maximale, soit :
  $$N(t_1) = \frac{K}{2} = \frac{5000}{2} = 2505 \text{ (ou } 2500 \text{)}$$
  Résolvons $N(t_1) = 2500$ :
  $$\frac{5000}{1 + 9e^{-0,2t_1}} = 2500 \iff 1 + 9e^{-0,2t_1} = 2 \iff 9e^{-0,2t_1} = 1$$
  $$e^{-0,2t_1} = \frac{1}{9} \iff -0,2t_1 = \ln\left(\frac{1}{9}\right) = -\ln(9)$$
  $$t_1 = \frac{\ln(9)}{0,2} = 5 \ln(9) \approx 10,99 \text{ ans}$$
  *Esprit critique :* C'est à cet instant précis que la gestion de la réserve (par exemple, un quota de prélèvement ou de chasse) doit être particulièrement vigilante, car la biomasse se renouvelle le plus rapidement.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
