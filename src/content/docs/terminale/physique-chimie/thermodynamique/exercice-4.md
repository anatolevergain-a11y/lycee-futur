---
title: "Exercice 4 : Dissipation thermique des processeurs IA"
description: "Application pratique du chapitre Thermodynamique et transferts thermiques"
---

### 🌐 Contexte concret

Avec l'essor fulgurant de l'intelligence artificielle générative, les centres de données (datacenters) abritent des milliers de processeurs spécialisés (GPU) effectuant des milliards d'opérations par seconde. Cette puissance de calcul phénoménale s'accompagne d'un défi physique majeur : la dissipation thermique. 

Un GPU haut de gamme consomme une puissance électrique $P_{el} = 700\text{ W}$ sous une tension continue. Presque la totalité de cette énergie électrique est convertie thermiquement par effet Joule au sein du silicium. Pour éviter la destruction du composant, la chaleur doit être évacuée efficacement vers l'extérieur grâce à un système de refroidissement (radiateur en cuivre et caloducs).

On s'intéresse dans cet exercice à l'évacuation de cette chaleur par conduction thermique au travers de la semelle en cuivre du radiateur qui surmonte le processeur.

*Données et caractéristiques du système :*
* Surface de contact entre le processeur et le radiateur : $S = 10\text{ cm}^2 = 1,0 \times 10^{-3}\text{ m}^2$
* Épaisseur de la semelle en cuivre : $e = 2,0\text{ mm} = 2,0 \times 10^{-3}\text{ m}$
* Conductivité thermique du cuivre : $\lambda = 380\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$
* Température maximale admissible de la jonction du processeur : $T_1 = 85\ \text{°C}$

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Bilan énergétique et flux thermique :** En supposant que tout le processeur dissipe sa puissance électrique sous forme thermique et que le régime permanent est établi, déterminer la valeur du flux thermique $5\Phi$ (en Watts) traversant la semelle en cuivre.
2. **Loi de Fourier et gradient de température :** Rappeler l'expression de la loi de Fourier régissant la conduction thermique à travers une paroi plane en régime permanent. Exprimer, puis calculer, la différence de température $\Delta T = T_1 - T_2$ entre les deux faces de la semelle en cuivre ($T_1$ étant la température du processeur et $T_2$ celle du radiateur).
3. **Température de la face externe :** En déduire la température $T_2$ (en °C) de la face externe du radiateur en contact avec l'air.
4. **Résistance thermique :** Définir la résistance thermique $R_{th}$ (en $\text{K}\cdot\text{W}^{-1}$) de cette semelle de cuivre et calculer sa valeur. Commenter l'intérêt d'utiliser un matériau à forte conductivité thermique comme le cuivre.

---

### 💡 Indice

* **Q1 :** Rappelez-vous du principe de conservation de l'énergie en régime permanent : toute l'énergie électrique injectée dans le processeur doit être évacuée sous forme de chaleur.
* **Q2 :** La loi de Fourier s'exprime par $\Phi = -\lambda S \frac{\mathrm{d}T}{\mathrm{d}x}$. Pour une paroi plane d'épaisseur $e$, on approche le gradient $\frac{\mathrm{d}T}{\mathrm{d}x}$ par $\frac{T_2 - T_1}{e}$. Attention aux unités (convertissez tout en unités S.I.).
* **Q4 :** Par analogie avec la loi d'Ohm en électricité ($U = R \cdot I$), la thermique définit la relation $\Delta T = R_{th} \cdot \Phi$.

---

### 📋 Correction détaillée pas à pas

#### 1. Bilan énergétique et flux thermique
En régime permanent, le système (le processeur) n'accumule plus d'énergie thermique : sa température est constante. Par conséquent, la puissance thermique $\Phi$ évacuée par conduction à travers le système de refroidissement est égale à la puissance électrique consommée par le processeur :
$$\Phi = P_{el} = 700\text{ W}$$
Le flux thermique traversant la semelle est donc de **$700\text{ W}$**.

#### 2. Loi de Fourier et différence de température
La loi de Fourier régissant la conduction thermique monodimensionnelle à travers une paroi plane s'écrit :
$$\Phi = -\lambda S \frac{\mathrm{d}T}{\mathrm{d}x}$$
En régime permanent, le flux est constant et le profil de température est linéaire à travers l'épaisseur $e$ de la semelle. On peut donc approcher le gradient de température par :
$$\frac{\mathrm{d}T}{\mathrm{d}x} \approx \frac{T_2 - T_1}{e}$$
Ainsi, le flux thermique devient :
$$\Phi = \lambda S \frac{T_1 - T_2}{e}$$
exprimant ainsi que la chaleur circule des zones chaudes vers les zones froides. 
En isolant la différence de température $\Delta T = T_1 - T_2$ :
$$\Delta T = \frac{\Phi \cdot e}{\lambda \cdot S}$$
A.N. :
$$\Delta T = \frac{700 \times 2,0 \times 10^{-3}}{380 \times 1,0 \times 10^{-3}}$$
$$\Delta T = \frac{1,4}{0,38} \approx 3,68\text{ K}$$
La différence de température entre les deux faces de la semelle en cuivre est d'environ **$3,7\text{ K}$** (ou $3,7\ \text{°C}$).

#### 3. Température de la face externe
La différence de température est $\Delta T = T_1 - T_2 = 3,68\text{ K}$. Sachant que les variations en Kelvin sont égales aux variations en Celsius ($\Delta T = \Delta \theta$), et que $T_1 = 85\ \text{°C}$ :
$$T_2 = T_1 - 3,68$$
$$T_2 = 85 - 3,68 = 81,32\ \text{°C}$$
La face externe du radiateur est donc à une température de **$81\ \text{°C}$** (en arrondissant au degré près).

#### 4. Résistance thermique et commentaire
Par analogie avec la loi d'Ohm en électricité ($U = R_{elec} \cdot I$), on définit la résistance thermique $R_{th}$ d'un milieu par la relation :
$$\Delta T = R_{th} \cdot \Phi$$
En identifiant avec l'expression trouvée à la question 2 ($\Delta T = \frac{e}{\lambda S} \Phi$), on obtient :
$$R_{th} = \frac{e}{\lambda S}$$
A.N. :
$$R_{th} = \frac{2,0 \times 10^{-3}}{380 \times 1,0 \times 10^{-3}} = \frac{2,0 \times 10^{-3}}{0,38} \approx 5,26 \times 10^{-3}\text{ K}\cdot\text{W}^{-1}$$
**Commentaire :** Plus la conductivité thermique $\lambda$ du matériau est grande, plus la résistance thermique $R_{th}$ est faible. Une faible résistance thermique garantit que la chaleur s'évacue facilement sans provoquer d'accumulation thermique majeure ($\Delta T$ faible) entre le composant fragile et l'extérieur. C'est pourquoi le cuivre ($\lambda$ élevé) est privilégié pour les interfaces thermiques critiques des GPU d'IA.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
