---
title: "Exercice 1 : Fonctionnement et bilan des piles chimiques"
description: "Application pratique du chapitre Oxydoréduction et énergie chimique"
---

### 🌐 Contexte & Données scientifiques

Les piles électrochimiques sont des dispositifs convertissant de l'énergie chimique en énergie électrique par le biais de réactions d'oxydoréduction spontanées. L'étude thermodynamique et cinétique de ces systèmes permet d'évaluer leur performance énergétique, bien que les modèles théoriques doivent être confrontés aux réalités industrielles et expérimentales (surmensions, résistances internes, compromis massiques).

Considérons une pile Daniell modifiée, associant une lame de zinc et une lame de cuivre immergées dans des solutions ioniques respectives. 

**Données et constantes thermodynamiques à $298\text{ K}$ :**
* Couple oxydant/réducteur 1 : $\text{Zn}^{2+}_{(aq)} / \text{Zn}_{(s)}$
* Couple oxydant/réducteur 2 : $\text{Cu}^{2+}_{(aq)} / \text{Cu}_{(s)}$
* Concentration initiale des ions métalliques : $[\text{Zn}^{2+}]_i = [\text{Cu}^{2+}]_i = 1,0\text{ mol}\cdot\text{L}^{-1}$
* Volume des solutions dans chaque demi-pile : $V = 100\text{ mL}$
* Constante de Faraday : $F \approx 96\,485\text{ C}\cdot\text{mol}^{-1}$
* Masses molaires atomiques : $M(\text{Zn}) = 65,4\text{ g}\cdot\text{mol}^{-1}$ ; $M(\text{Cu}) = 63,5\text{ g}\cdot\text{mol}^{-1}$
* Potentiels standard de réduction : $E^\circ(\text{Zn}^{2+}/\text{Zn}) = -0,76\text{ V}$ ; $E^\circ(\text{Cu}^{2+}/\text{Cu}) = +0,34\text{ V}$

---

### ❓ Énoncé

1. À partir des potentiels standard de réduction, déterminer le sens d'évolution spontanée du système chimique et identifier les électrodes (anode et cathode) de la pile. Écrire les demi-équations électroniques ainsi que l'équation bilan de la réaction chimique fonctionnelle.
2. La pile débite un courant électrique d'intensité constante $I = 45\text{ mA}$ pendant une durée $\Delta t = 2\,000\text{ s}$. Calculer la quantité d'électricité $Q$ débitée, puis déterminer la variation de quantité de matière d'ions cuivre $\Delta n(\text{Cu}^{2+})$ et la variation de masse de l'électrode de zinc au cours de cette durée.
3. En supposant que le volume de la solution reste constant et que les ions $\text{Cu}^{2+}$ sont le réactif limitant de la transformation totale, calculer la durée maximale théorique $\Delta t_{\text{max}}$ de fonctionnement de cette pile.
4. *Esprit critique et analyse du modèle :* Dans la pratique industrielle, la tension mesurée aux bornes d'une telle pile en fonctionnement est systématiquement inférieure à la valeur théorique calculée à partir des potentiels standard (fem initiale $\approx 1,10\text{ V}$). Citer deux facteurs physiques ou chimiques responsables de cet écart et expliquer en quoi l'optimisation d'une pile grand public relève d'un compromis multicritère (masse, coût, impact environnemental, puissance).

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez la règle du "gamma" ou comparez les potentiels : l'oxydant le plus fort réagit avec le réducteur le plus fort. L'oxydation a toujours lieu à l'anode (pôle négatif) et la réduction à la cathode (pôle positif).
* **Question 2 :** Rappelez la relation liant la charge $Q$, l'intensité $I$ et la durée $\Delta t$ ($Q = I \cdot \Delta t$). Utilisez ensuite un tableau d'avancement et le lien avec la constante de Faraday $F$ (quantité d'électricité par mole d'électrons échangés).
* **Question 3 :** Exprimez l'avancement maximal $x_{\text{max}}$ en fonction de la quantité initiale du réactif limitant, puis reliez-le à la charge maximale $Q_{\text{max}}$.
* **Question 4 :** Pensez aux chutes ohmiques internes (résistance de l'électrolyte et des ponts salins), aux phénomènes de polarisation aux électrodes, ainsi qu'aux contraintes d'écoconception (ressources critiques comme le cuivre ou le zinc).

---

### 📋 Correction détaillée pas à pas

1. **Polarité et équation bilan :**
   * Comparaison des potentiels standard : $E^\circ(\text{Cu}^{2+}/\text{Cu}) > E^\circ(\text{Zn}^{2+}/\text{Zn})$.
   * L'ion $\text{Cu}^{2+}$ est un oxydant plus fort que $\text{Zn}^{2+}$, il va donc oxyder le métal zinc $\text{Zn}$.
   * **Oxydation (anode, pôle $(-)$) :** $\text{Zn}_{(s)} \rightleftharpoons \text{Zn}^{2+}_{(aq)} + 2\,e^{-}$
   * **Réduction (cathode, pôle $(+$)) :** $\text{Cu}^{2+}_{(aq)} + 2\,e^{-} \rightleftharpoons \text{Cu}_{(s)}$
   * **Équation bilan :** 
     $$\text{Zn}_{(s)} + \text{Cu}^{2+}_{(aq)} \rightarrow \text{Zn}^{2+}_{(aq)} + \text{Cu}_{(s)}$$

2. **Calculs de charge et variations de matière :**
   * Quantité d'électricité débitée :
     $$Q = I \cdot \Delta t = 45 \times 10^{-3}\text{ A} \times 2\,000\text{ s} = 90\text{ C}$$
   * La relation entre la quantité d'électrons échangés $n(e^-)$ et $Q$ est $Q = n(e^-) \cdot F$, soit :
     $$n(e^-) = \frac{Q}{F} = \frac{90}{96\,485} \approx 9,33 \times 10^{-4}\text{ mol}$$
   * D'après la stœchiométrie de la réaction, la consommation des ions $\text{Cu}^{2+}$ vérifie : 
     $$|\Delta n(\text{Cu}^{2+})| = \frac{n(e^-)}{2} = \frac{9,33 \times 10^{-4}}{2} = 4,66 \times 10^{-4}\text{ mol}$$
   * Pour l'électrode de zinc (qui est consommée car elle subit l'oxydation) :
     $$\Delta n(\text{Zn}) = -\frac{n(e^-)}{2} = -4,66 \times 10^{-4}\text{ mol}$$
     Soit une variation de masse :
     $$\Delta m(\text{Zn}) = \Delta n(\text{Zn}) \cdot M(\text{Zn}) = -4,66 \times 10^{-4} \times 65,4 \approx -0,030\text{ g} = -30\text{ mg}$$

3. **Durée maximale théorique :**
   * Quantité initiale d'ions $\text{Cu}^{2+}$ (réactif limitant supposé) :
     $$n_i(\text{Cu}^{2+}) = [\text{Cu}^{2+}]_i \times V = 1,0\text{ mol}\cdot\text{L}^{-1} \times 0,100\text{ L} = 0,10\text{ mol}$$
   * L'avancement maximal $x_{\text{max}}$ correspond à l'épuisement total de $\text{Cu}^{2+}$, soit $x_{\text{max}} = 0,10\text{ mol}$.
   * Le nombre total d'électrons pouvant être échangés est $n(e^-)_{\text{max}} = 2 \cdot x_{\text{max}} = 0,20\text{ mol}$.
   * La charge maximale $Q_{\text{max}}$ est donc :
     $$Q_{\text{max}} = n(e^-)_{\text{max}} \cdot F = 0,20 \times 96\,485 = 19\,297\text{ C}$$
   * Enfin, la durée maximale $\Delta t_{\text{max}}$ s'obtient par :
     $$\Delta t_{\text{max}} = \frac{Q_{\text{max}}}{I} = \frac{19\,297}{45 \times 10^{-3}} \approx 428\,822\text{ s} \approx 119\text{ heures}$$

4. **Esprit critique et analyse du modèle :**
   * **Facteurs d'écart (limites du modèle idéal) :** 
     1. *La résistance interne de la pile ($r$)* : le passage du courant génère une chute ohmique (loi d'Ohm $U = E - r \cdot I$), abaissant la tension aux bornes par rapport à la force électromotrice théorique $E$.
     2. *Les surtensions cinétiques et phénomènes de polarisation* : l'épuisement local des réactifs au voisinage immédiat des électrodes et l'accumulation des produits modifient localement les concentrations effectives (ce que traduit quantitativement la loi de Nernst).
   * **Compromis multicritère :** Concevoir une pile industrielle ne se résume pas à maximiser la tension ou la capacité. C'est un arbitrage constant entre la densité énergétique (masse et volume embarqués), le coût des matériaux (ex: terres rares ou métaux précieux), la sécurité (absence de fuites, gestion thermique) et l'empreinte environnementale (recyclabilité et toxicité des composants).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
