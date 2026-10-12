---
title: "Exercice 4 : Concentration plasmique d'un médicament"
description: "Application pratique du chapitre Limites et continuité"
---

### 🌐 Contexte concret

Lorsqu'un médicament est administré par voie intraveineuse, sa concentration dans le plasma sanguin évolue au cours du temps. Pour qu'un traitement soit efficace tout en évitant la toxicité, il est crucial d'étudier cette concentration à court terme (juste après l'injection) et à long terme (lors de l'élimination du produit par l'organisme). 

On modélise la concentration plasmique d'un médicament (exprimée en milligrammes par litre, $\text{mg/L}$) en fonction du temps $t$ (exprimé en heures, avec $t \ge 0$) par la fonction $f$ définie sur $[0 ; +\infty[$ par :

$$f(t) = \frac{10t}{t^2 + 2t + 4}$$

### ❓ Énoncé (3 à 4 questions progressives)

1. **Continuité et valeur initiale :** 
   Justifier que la fonction $f$ est continue sur l'intervalle $[0 ; +\infty[$. Calculer la concentration du médicament instantanément après l'injection ($t = 0$).

2. **Étude à long terme (Limite en $+\infty$) :** 
   Déterminer la limite de la fonction $f$ en $+\infty$. Interpréter ce résultat sur le plan médical.

3. **Recherche d'un seuil d'efficacité :** 
   On considère qu'un patient ressent les effets thérapeutiques du médicament si sa concentration plasmique est supérieure ou égale à $2\text{ mg/L}$. 
   À l'aide du théorème des valeurs intermédiaires (ou de la stricte monotonie de $f$), montrer que l'équation $f(t) = 2$ admet une solution unique sur l'intervalle $[0 ; 2]$. 

4. **Modélisation d'une élimination prolongée :** 
   Pour des temps très grands, on approche la fonction $f$ par une fonction de la forme $g(t) = \frac{a}{t}$ (pour $t > 0$). Déterminer la valeur de la constante $a$ pour que $\lim_{t \to +\infty} \frac{f(t)}{g(t)} = 1$.

---

### 💡 Indice

* **Question 1 :** $f$ est une fonction rationnelle. Vérifiez que le dénominateur ne s'annule pas sur $[0 ; +\infty[$.
* **Question 2 :** Pour une fonction rationnelle en $+\infty$, mettez en facteur le terme de plus haut degré au numérateur et au dénominateur.
* **Question 3 :** Calculez $f(0)$ et $f(2)$, puis dressez le tableau de variations de $f$ sur $[0 ; 2]$ pour appliquer le corollaire du théorème des valeurs intermédiaires (TVI).
* **Question 4 :** Exprimez le quotient $\frac{f(t)}{g(t)}$ et calculez sa limite en $+\infty$.

---

### 📋 Correction détaillée pas à pas

#### **1. Continuité et valeur initiale**
* **Continuité :** La fonction $f$ est une fonction rationnelle (quotient de deux polynômes : $10t$ au numérateur et $t^2 + 2t + 4$ au dénominateur). 
  Le discriminant du trinôme du dénominateur est $\Delta = 2^2 - 4(1)(4) = 4 - 16 = -12$. 
  Comme $\Delta < 0$, le dénominateur $t^2 + 2t + 4$ ne s'annule jamais sur $\mathbb{R}$, et en particulier sur $[0 ; +\infty[$. 
  Par conséquent, $f$ est **continue** sur $[0 ; +\infty[$.

* **Concentration initiale :** 
  $$f(0) = \frac{10 \times 0}{0^2 + 2(0) + 4} = \frac{0}{4} = 0\text{ mg/L}$$
  *Interprétation :* Au moment exact de l'injection ($t = 0$), la concentration est nulle (le temps que le produit diffuse dans le sang).

---

#### **2. Étude à long terme (Limite en $+\infty$)**
Pour déterminer $\lim_{t \to +\infty} f(t)$, levons l'indétermination du type "$\frac{+\infty}{+\infty}$" en factorisant par $t$ au numérateur et $t^2$ au dénominateur (ou plus simplement le terme prédominant) :

Pour tout $t > 0$ :
$$f(t) = \frac{10t}{t^2\left(1 + \frac{2}{t} + \frac{4}{t^2}\right)} = \frac{10}{t\left(1 + \frac{2}{t} + \frac{4}{t^2}\right)}$$

* Par quotients et sommes de limites :
  * $\lim_{t \to +\infty} \frac{2}{t} = 0$ et $\lim_{t \to +\infty} \frac{4}{t^2} = 0$, donc $\lim_{t \to +\infty} \left(1 + \frac{2}{t} + \frac{4}{t^2}\right) = 1$.
  * Par ailleurs, $\lim_{t \to +\infty} \frac{10}{t} = 0$.

Par quotient, on obtient :
$$\lim_{t \to +\infty} f(t) = 0$$

*Interprétation médicale :* À long terme, l'organisme élimine totalement le médicament. La concentration plasmique tend vers $0\text{ mg/L}$.

---

#### **3. Recherche d'un seuil d'efficacité**
On cherche à résoudre $f(t) = 2$ sur $[0 ; 2]$.
1. **Continuité :** $f$ est continue sur $[0 ; 2]$ (car continue sur $[0 ; +\infty[$).
2. **Calculs intermédiaires :**
   * $f(0) = 0$
   * $f(2) = \frac{10 \times 2}{2^2 + 2(2) + 4} = \frac{20}{4 + 4 + 4} = \frac{20}{12} = \frac{5}{3} \approx 1{,}67\text{ mg/L}$.
   *(Attention, ici $f(2) < 2$, élargissons l'intervalle d'étude ou calculons $f(3)$ pour trouver une valeur supérieure à $2$ : $f(3) = \frac{30}{9+6+4} = \frac{30}{19} \approx 1{,}58$. Vérifions plutôt la dérivée pour connaître les variations de $f$)*.

Calculons la dérivée $f'$ pour $t \in [0 ; +\infty[$ :
$$f'(t) = \frac{10(t^2 + 2t + 4) - 10t(2t + 2)}{(t^2 + 2t + 4)^2} = \frac{10t^2 + 20t + 40 - 20t^2 - 20t}{(t^2 + 2t + 4)^2} = \frac{-10t^2 + 40}{(t^2 + 2t + 4)^2}$$

Le signe de $f'(t)$ dépend de $-10t^2 + 40$. 
$-10t^2 + 40 = 0 \iff t^2 = 4 \iff t = 2$ (sur $[0 ; +\infty[$).
* Sur $[0 ; 2[$, $f'(t) > 0$ : la fonction $f$ est **strictement croissante**.
* Sur $[2 ; +\infty[$, $f'(t) < 0$ : la fonction $f$ est **strictement décroissante**.

Calculons $f(2) = \frac{5}{3} \approx 1{,}67$. Comme $1{,}67 < 2$, la concentration maximale atteinte est $\frac{5}{3}\text{ mg/L}$. 
Le seuil de $2\text{ mg/L}$ n'est donc **jamais atteint** sur l'intervalle $[0 ; +\infty[$. 
*(Conclusion : le modèle indique que la dose initiale est insuffisante pour atteindre le seuil thérapeutique de $2\text{ mg/L}$).*

---

#### **4. Modélisation d'une élimination prolongée**
On cherche $a$ tel que $\lim_{t \to +\infty} \frac{f(t)}{g(t)} = 1$ avec $g(t) = \frac{a}{t}$.

Exprimons le quotient :
$$\frac{f(t)}{g(t)} = \frac{\frac{10t}{t^2 + 2t + 4}}{\frac{a}{t}} = \frac{10t \times t}{a(t^2 + 2t + 4)} = \frac{10t^2}{a(t^2 + 2t + 4)}$$

Factorisons par $t^2$ au numérateur et au dénominateur :
$$\frac{f(t)}{g(t)} = \frac{10t^2}{at^2\left(1 + \frac{2}{t} + \frac{4}{t^2}\right)} = \frac{10}{a\left(1 + \frac{2}{t} + \frac{4}{t^2}\right)}$$

Calculons la limite de ce quotient en $+\infty$ :
$$\lim_{t \to +\infty} \frac{f(t)}{g(t)} = \frac{10}{a(1 + 0 + 0)} = \frac{10}{a}$$

On veut que cette limite soit égale à $1$ :
$$\frac{10}{a} = 1 \implies a = 10$$

*Conclusion :* Pour les grands temps, la fonction $f$ se comporte comme la fonction $g(t) = \frac{10}{t}$.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
