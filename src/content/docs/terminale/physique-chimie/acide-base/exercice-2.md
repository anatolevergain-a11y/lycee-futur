---
title: "Exercice 2 : Titrage pH-métrique et conductimétrique d'un produit commercial"
description: "Application pratique du chapitre Transformations acide-base et pH"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du contrôle de qualité en industrie chimique, l'étiquetage des solutions commerciales doit être vérifié avec rigueur. On s'intéresse ici à un détartrant ménager liquide dont le principe actif est l'acide chlorhydrique ($\text{HCl}$). L'étiquette du produit indique un pourcentage massique en acide chlorhydrique de $p = 23{,}0\,\%$ et une densité $d = 1{,}12$.

Cependant, les conditions de stockage et le vieillissement du produit peuvent entraîner des variations de concentration. Deux méthodes instrumentales sont mises en œuvre pour déterminer la concentration molaire effective en ions oxonium $[\text{H}_3\text{O}^+]$ de la solution commerciale diluée : le titrage pH-métrique et le titrage conductimétrique.

**Données physico-chimiques à $25\,\circ\text{C}$ :**
* Masse molaire de l'acide chlorhydrique : $M(\text{HCl}) = 36{,}46\,\text{g}\cdot\text{mol}^{-1}$
* Masse volumique de l'eau pure : $\rho_0 = 1{,}00 \times 10^3\,\text{g}\cdot\text{L}^{-1}$
* Conductivités molaires ioniques $\lambda$ à dilution infinie :
  * $\lambda(\text{H}_3\text{O}^+) = 35{,}0 \times 10^{-3}\,\text{S}\cdot\text{m}^2\cdot\text{mol}^{-1}$
  * $\lambda(\text{Cl}^-) = 7{,}63 \times 10^{-3}\,\text{S}\cdot\text{m}^2\cdot\text{mol}^{-1}$
  * $\lambda(\text{Na}^+) = 5{,}01 \times 10^{-3}\,\text{S}\cdot\text{m}^2\cdot\text{mol}^{-1}$
  * $\lambda(\text{HO}^-) = 19{,}8 \times 10^{-3}\,\text{S}\cdot\text{m}^2\cdot\text{mol}^{-1}$

---

### ❓ Énoncé

1. **Exploitation théorique de l'étiquette :** À partir des données de l'étiquette ($p$ et $d$), calculer la concentration molaire théorique $C_0$ de la solution commerciale d'acide chlorhydrique. Justifier chaque étape du calcul.
2. **Préparation de la solution :** Pour des raisons de sécurité et de domaine de validité des capteurs, la solution commerciale est diluée $100$ fois pour obtenir une solution notée $S_A$ de volume $V_A = 20{,}0\,\text{mL}$. Écrire l'équation de la réaction support du titrage de cette solution par une solution aqueuse d'hydroxyde de sodium ($\text{Na}^+_{(aq)} + \text{HO}^-_{(aq)}$) de concentration molaire $C_B = 1{,}00 \times 10^{-1}\,\text{mol}\cdot\text{L}^{-1}$. Montrer que cette transformation est totale.
3. **Analyse comparative des méthodes de titrage :** 
   * Dans le cas du **titrage pH-métrique**, le volume équivalent $V_{E, \text{pH}}$ trouvé est de $12{,}5\,\text{mL}$. En déduire la concentration molaire $C_A$ de la solution diluée, puis la valeur expérimentale $C_{0,\text{exp}}$ de la solution commerciale. Calculer l'écart relatif par rapport à la valeur théorique $C_0$ et discuter des sources d'incertitudes expérimentales.
   * Dans le cas du **titrage conductimétrique**, la courbe $G = f(V_B)$ présente une rupture de pente. Expliquer qualitativement l'évolution de la conductivité de la solution au cours de l'ajout de la base (avant et après l'équivalence) en lien avec les mobilités ioniques.

---

### 💡 Indice de méthode

* **Question 1 :** Reliez la masse $m_{\text{solute}}$ d'une masse $m_{\text{solution}}$ de produit à sa densité $d$. Exprimez ensuite la quantité de matière dans un litre de solution.
* **Question 2 :** Calculez la constante d'équilibre $K$ de la réaction acido-basique en utilisant le produit ionique de l'eau $K_e = 10^{-14}$ à $25\,\circ\text{C}$. Une valeur de $K > 10^4$ valide l'hypothèse d'une transformation totale.
* **Question 3 :** À l'équivalence, exploitez l'égalité des quantités de matière des réactifs introduits dans les proportions stœchiométriques. Pour la conductimétrie, pensez à la loi de Kohlrausch : $\sigma = \sum C_i \lambda_i$. L'ion $\text{H}_3\text{O}^+$ possède une conductivité molaire ionique particulièrement élevée en raison d'un mécanisme de transfert de proton particulier (effet Grotthuss).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la concentration molaire théorique $C_0$
Considérons un volume $V = 1{,}00\,\text{L}$ de solution commerciale.
* La masse de ce litre de solution est :
  $$m_{\text{solution}} = d \times \rho_0 \times V = 1{,}12 \times 1{,}00 \times 10^3\,\text{g}\cdot\text{L}^{-1} \times 1{,}00\,\text{L} = 1120\,\text{g}$$
* La masse de chlorure d'hydrogène pur $\text{HCl}$ dissous dans ce litre est déterminée par le pourcentage massique $p$ :
  $$m_{\text{HCl}} = p \times m_{\text{solution}} = 0{,}230 \times 1120 = 257{,}6\,\text{g}$$
* La concentration molaire $C_0$ de la solution commerciale est donc :
  $$C_0 = \frac{n_{\text{HCl}}}{V} = \frac{m_{\text{HCl}}}{M(\text{HCl}) \times V} = \frac{257{,}6}{36{,}46 \times 1{,}00} \approx 7{,}07\,\text{mol}\cdot\text{L}^{-1}$$

#### 2. Équation de la réaction et modélisation
L'acide chlorhydrique est un acide fort, totalement dissocié dans l'eau. L'ion hydroxyde $\text{HO}^-$ est une base forte. La réaction support du titrage est la réaction de neutralisation :
$$\text{H}_3\text{O}^+_{(aq)} + \text{HO}^-_{(aq)} \rightarrow 2\,\text{H}_2\text{O}_{(l)}$$

La constante d'équilibre associée à cette réaction s'écrit :
$$K = \frac{1}{[\text{H}_3\text{O}^+][\text{HO}^-]} = \frac{1}{K_e} = \frac{1}{10^{-14}} = 10^{14}$$
Puisque $K > 10^4$, **la transformation est totale et quantitative**, ce qui valide son utilisation pour un titrage.

#### 3. Exploitation des titrages
* **Titrage pH-métrique :**
  À l'équivalence, les réactifs ont été mélangés dans les proportions stœchiométriques :
  $$n(\text{H}_3\text{O}^+)_{\text{initial}} = n(\text{HO}^-)_{\text{versé}}$$
  Soit $C_A \times V_A = C_B \times V_{E, \text{pH}}$
  $$C_A = \frac{C_B \times V_{E, \text{pH}}}{V_A} = \frac{1{,}00 \times 10^{-1} \times 12{,}5 \times 10^{-3}}{20{,}0 \times 10^{-3}} = 6{,}25 \times 10^{-2}\,\text{mol}\cdot\text{L}^{-1}$$

  La solution commerciale ayant été diluée $100$ fois :
  $$C_{0,\text{exp}} = 100 \times C_A = 6{,}25\,\text{mol}\cdot\text{L}^{-1}$$

  * **Analyse critique et écart relatif :**
    $$\text{Écart relatif} = \frac{|C_{0,\text{exp}} - C_0|}{C_0} = \frac{|6{,}25 - 7{,}07|}{7{,}07} \approx 11{,}6\,\%$$
    Cet écart supérieur à $10\,\%$ ne peut être attribué uniquement aux incertitudes instrumentales. Il met en évidence une **limite du modèle de l'étiquette** : les produits commerciaux subissent des dégradations (volatilité du chlorure d'hydrogène gazeux dissous $\text{HCl}_{(aq)}$) ou l'incertitude sur la valeur de la densité fournie par le fabricant, qui est une grandeur macroscopique sujette à variation thermique.

* **Titrage conductimétrique (analyse qualitative) :**
  * **Avant l'équivalence :** On ajoute des ions $\text{Na}^+$ et $\text{HO}^-$. Les ions $\text{HO}^-$ réagissent immédiatement avec les ions $\text{H}_3\text{O}^+$ (fortement conducteurs) pour donner de l'eau. Les ions $\text{H}_3\text{O}^+$ sont remplacés par des ions $\text{Na}^+$ dont la conductivité molaire ionique est nettement plus faible ($\lambda(\text{Na}^+) < \lambda(\text{H}_3\text{O}^+)$). **La conductivité de la solution diminue donc.**
  * **Après l'équivalence :** Il n'y a plus d'ions $\text{H}_3\text{O}^+$. L'ajout de la solution titrante apporte des ions $\text{Na}^$ et des ions $\text{HO}^-$ qui s'accumulent. **La conductivité de la solution augmente.**
  Le volume équivalent est repéré par le minimum de la courbe $\sigma = f(V_B)$, matérialisant l'intersection des deux droites de régression linéaire.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
