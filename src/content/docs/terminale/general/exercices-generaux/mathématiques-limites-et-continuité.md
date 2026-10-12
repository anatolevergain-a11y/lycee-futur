---
title: "Exercice : Limites et continuité"
description: "Démonstration appliquée : Modélisation de la croissance démographique mondiale"
---

### 🌐 Contexte

Au XXIe siècle, la modélisation mathématique de la population mondiale est un outil crucial pour les politiques de développement durable et la gestion des ressources. Pour éviter une croissance infinie et irréaliste, les démographes utilisent souvent le **modèle de Verhulst** (ou modèle logistique). 

On étudie l'évolution de la population mondiale (en milliards d'habitants) à partir de l'année $2020$. Le temps $t$ (exprimé en années) est mesuré depuis l'an $2020$, de sorte que l'année $2020$ correspond à $t = 0$. 

La population $f(t)$ est modélisée par la fonction définie sur $[0, +\infty[$ par :
$$f(t) = \frac{12}{1 + 5e^{-0,02t}}$$

En tant que citoyen éclairé et mathématicien, vous allez analyser ce modèle pour comprendre le comportement à long terme de la population mondiale.

---

### ❓ Énoncé

1. **Continuité et état initial :** Démontrer que la fonction $f$ est continue sur $[0, +\infty[$. Calculer la population mondiale estimée en $2020$ selon ce modèle et interpréter ce résultat.
2. **Sens de variation :** Calculer la dérivée $f'(t)$ pour tout $t \in [0, +\infty[$. En déduire le sens de variation de la fonction $f$ et interpréter ce résultat dans le contexte du réchauffement démographique.
3. **Limite à l'infini (Capacité d'charge) :** Déterminer la limite de $f(t)$ lorsque $t$ tend vers $+\infty$. Comment nomme-t-on cette valeur asymptotique en écologie/démographie ?
4. **Seuil critique :** À l'aide d'une inéquation, déterminer à partir de quelle année le modèle prévoit que la population mondiale dépassera les $10$ milliards d'habitants.

---

### 💡 Indice

* **Question 1 :** Utilisez les théorèmes généraux sur la continuité (somme, produit, quotient, fonction composée avec l'exponentielle).
* **Question 2 :** Rappelez que la fonction $u \mapsto e^u$ est dérivable et que $(e^{at})' = a e^{at}$. Étudiez ensuite le signe de chaque facteur de $f'(t)$.
* **Question 3 :** Pensez à la limite de $e^{-0,02t}$ quand $t \to +\infty$. Une forme indéterminée se lève facilement ici en factorisant ou par analyse de la limite du dénominateur.
* **Question 4 :** Résolvez l'inéquation $f(t) \ge 10$ en utilisant la fonction logarithme népérien ($\ln$), qui est la bijection réciproque de la fonction exponentielle.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Continuité et état initial
* **Continuité :** 
  Pour tout $t \in [0, +\infty[$, la fonction $t \mapsto -0,02t$ est affine, donc continue. Par composition, la fonction $t \mapsto e^{-0,02t}$ est continue sur $[0, +\infty[$. 
  Par opérations algébriques, le dénominateur $1 + 5e^{-0,02t}$ est continu et ne s'annule jamais sur $[0, +\infty[$ (car $e^{-0,02t} > 0$). 
  Par conséquent, $f$ est **continue sur $[0, +\infty[$** en tant que quotient de fonctions continues.
* **État initial ($t = 0$, année 2020) :**
  $$f(0) = \frac{12}{1 + 5e^{0}} = \frac{12}{1 + 5 \times 1} = \frac{12}{6} = 2$$
  *Interprétation :* Selon ce modèle, la population mondiale de référence en $2020$ est de $2$ milliards d'habitants (ce chiffre est une simplification mathématique du modèle servant de point de départ, et non la réalité démographique exacte, qui sert à étalonner la formule).

#### 2. Sens de variation
La fonction $f$ est de la forme $\frac{12}{u}$, avec $u(t) = 1 + 5e^{-0,02t}$. 
Sa dérivée est donc $-12 \times \frac{u'(t)}{(u(t))^2}$.
Calculons $u'(t)$ :
$$u'(t) = 5 \times (-0,02) e^{-0,02t} = -0,1 e^{-0,02t}$$
Ainsi :
$$f'(t) = -12 \times \frac{-0,1 e^{-0,02t}}{(1 + 5e^{-0,02t})^2} = \frac{1,2 e^{-0,02t}}{(1 + 5e^{-0,02t})^2}$$
* **Signe de $f'(t)$ :**
  Pour tout $t \in [0, +\infty[$ :
  - Le numérateur contient $1,2 > 0$ et $e^{-0,02t} > 0$, donc $1,2 e^{-0,02t} > 0$.
  - Le dénominateur $(1 + 5e^{-0,02t})^2$ est un carré, donc strictement positif.
  Par conséquent, pour tout $t \ge 0$, $f'(t) > 0$.
* *Interprétation :* La fonction $f$ est **strictement croissante** sur $[0, +\infty[$. La population mondiale augmente continuellement au fil des années selon ce modèle.

#### 3. Limite à l'infini (Capacité de charge)
Calculons la limite de $f(t)$ lorsque $t$ tend vers $+\infty$ :
* On sait que $\lim_{t \to +\infty} -0,02t = -\infty$.
* Or, $\lim_{X \to -\infty} e^X = 0$, donc $\lim_{t \to +\infty} e^{-0,02t} = 0$.
* Par produit et somme : $\lim_{t \to +\infty} (1 + 5e^{-0,02t}) = 1 + 5(0) = 1$.
* Enfin, par quotient :
  $$\lim_{t \to +\infty} f(t) = \frac{12}{1} = 12$$
* *Interprétation :* $\lim_{t \to +\infty} f(t) = 12$. La droite d'équation $y = 12$ est une asymptote horizontale pour la courbe représentative de $f$ en $+\infty$. En démographie, cette valeur de $12$ milliards représente la **capacité maximale de charge** de la Terre estimée par le modèle (seuil limite des ressources disponibles).

#### 4. Seuil critique
Cherchons $t$ tel que $f(t) \ge 10$ :
$$\frac{12}{1 + 5e^{-0,02t}} \ge 10$$
Comme le dénominateur est strictement positif, on peut multiplier par $(1 + 5e^{-0,02t})$ :
$$12 \ge 10(1 + 5e^{-0,02t})$$
$$12 \ge 10 + 50e^{-0,02t}$$
$$2 \ge 50e^{-0,02t}$$
$$\frac{2}{50} \ge e^{-0,02t} \implies e^{-0,02t} \le 0,04$$
Appliquons la fonction $\ln$ (strictement croissante sur $]0, +\infty[$) de chaque côté :
$$\ln(e^{-0,02t}) \le \ln(0,04)$$
$$-0,02t \le \ln(0,04)$$
En divisant par $-0,02$ (ce qui inverse le sens de l'inégalité car $-0,02 < 0$) :
$$t \ge \frac{\ln(0,04)}{-0,02}$$
Calculons la valeur numérique :
$$t \ge \frac{-3,2188}{-0,02} \approx 160,94$$
Puisque $t$ représente le nombre d'années écoulées depuis $2020$ :
$$2020 + 160,94 = 2180,94$$
* *Interprétation :* Le modèle prédit que la population mondiale dépassera le seuil critique des $10$ milliards d'habitants au cours de l'année **2180**.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
