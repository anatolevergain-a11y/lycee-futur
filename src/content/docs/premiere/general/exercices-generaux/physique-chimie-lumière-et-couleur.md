---
title: "Exercice : Lumière et couleur"
description: "Démonstration appliquée : Technologies d'écrans OLED et micro-LED"
---

### 🌐 Contexte

Les téléviseurs et smartphones récents ont progressivement abandonné le traditionnel rétroéclairage des dalles LCD au profit de technologies dites émissives : l'**OLED** (*Organic Light-Emitting Diode*) et, plus récemment, le **micro-LED**. 

Contrairement aux technologies LCD où un filtre à cristaux liquides bloque ou laisse passer la lumière blanche d'un rétroéclairage permanent, chaque pixel d'un écran OLED ou micro-LED est composé de trois sous-pixels indépendants (Rouge, Vert, Bleu) qui émettent directement leur propre lumière. Cette innovation permet d'obtenir des contrastes dits « infinis », des noirs absolus et une consommation électrique réduite, tout en soulevant des questions d'ergonomie visuelle, notamment face à l'exposition prolongée à la lumière bleue.

**Données et constantes :**
* Célérité de la lumière dans le vide : $c = 3{,}00 \times 10^8 \text{ m}\cdot\text{s}^{-1}$
* Constante de Planck : $h = 6{,}63 \times 10^{-34} \text{ J}\cdot\text{s}$
* Charge élémentaire : $e = 1{,}60 \times 10^{-19} \text{ C}$, d'où $1 \text{ eV} = 1{,}60 \times 10^{-19} \text{ J}$
* Domaine du visible : radiations de longueurs d'onde dans le vide comprises entre $400 \text{ nm}$ et $800 \text{ nm}$.

---

### ❓ Énoncé

#### Question 1 : Synthèse additive et contraste
1. Rappeler le principe de la **synthèse additive** et préciser les trois couleurs primaires associées.
2. Pour afficher un pixel d'un **jaune éclatant**, indiquer l'état (allumé à saturation ou éteint) de chacun des trois sous-pixels (Rouge, Vert, Bleu).
3. Expliquer pourquoi un écran OLED ou micro-LED consomme nettement moins d'énergie qu'un écran LCD classique lorsqu'il affiche une image à dominante noire (comme en « mode sombre »).

#### Question 2 : Énergie des photons émis
Un sous-pixel bleu micro-LED émet une radiation lumineuse monochromatique de longueur d'onde dans le vide $\lambda_B = 450 \text{ nm}$.
1. Justifier l'appartenance de cette radiation au domaine du visible.
2. Calculer la fréquence $\nu_B$ de cette onde lumineuse.
3. Déterminer l'énergie $E_B$ d'un photon associé à cette radiation, d'abord en joules ($\text{J}$), puis en électron-volts ($\text{eV}$).

#### Question 3 : Prévention citoyenne et lumière bleue
Le sous-pixel rouge émet quant à lui à une longueur d'onde $\lambda_R = 630 \text{ nm}$.
1. Calculer l'énergie $E_R$ (en $\text{eV}$) d'un photon émis par le sous-pixel rouge.
2. En comparant $E_B$ et $E_R$, expliquer d'un point de vue physique pourquoi la lumière bleue est plus susceptible d'induire un stress photochimique sur les cellules de la rétine.
3. Quel réglage logiciel les fabricants d'écrans mettent-ils en place dans les modes « Confort des yeux » ou « Nocturne » pour limiter ce phénomène ?

#### Question 4 : Interaction lumière-matière (Synthèse soustractive)
Un utilisateur porte des lunettes de protection dont les verres se comportent comme un filtre **jaune parfait** (qui absorbe intégralement la lumière bleue et transmet le rouge et le vert).
L'écran affiche une zone de couleur **magenta**.
* Quelle couleur sera perçue par l'utilisateur à travers ses verres protecteurs ? Justifier rigoureusement le raisonnement à l'aide de la synthèse soustractive.

---

### 💡 Indice

* **Question 1 :** Pensez aux combinaisons deux à deux des lumières primaires et à la façon dont le noir est généré si chaque sous-pixel est une source de lumière autonome.
* **Question 2 :** La relation liant fréquence et longueur d'onde est $\nu = \frac{c}{\lambda}$. L'énergie d'un photon s'écrit $E = h \cdot \nu = \frac{h \cdot c}{\lambda}$. Attention à la conversion des nanomètres en mètres : $1 \text{ nm} = 10^{-9} \text{ m}$.
* **Question 4 :** Décomposez d'abord la lumière émise par l'écran (magenta) en ses composantes primaires. Identifiez ensuite quelle composante est bloquée (absorbée) par le filtre jaune.

---

### 📋 Correction détaillée

#### 1. Synthèse additive et contraste

1. **Principe :** La synthèse additive consiste à superposer des faisceaux lumineux colorés pour obtenir une nouvelle couleur perçue par l'œil humain (stimulant les trois types de cônes de la rétine : S, M et L).  
   Les trois couleurs primaires de la synthèse additive sont le **Rouge**, le **Vert** et le **Bleu** (RVB).

2. **Affichage du jaune :**  
   D'après les règles de la trichromie :
   $$\text{Rouge} + \text{Vert} = \text{Jaune}$$
   Pour obtenir un pixel jaune éclatant :
   * Sous-pixel **Rouge** : **Allumé** au maximum (intensité 100 %) ;
   * Sous-pixel **Vert** : **Allumé** au maximum (intensité 100 %) ;
   * Sous-pixel **Bleu** : **Éteint** (intensité 0 %).

3. **Efficacité énergétique et noir absolu :**  
   * Sur un écran **LCD**, le rétroéclairage blanc reste allumé en continu derrière la dalle ; pour afficher du noir, les cristaux liquides doivent bloquer la lumière (bloquage imparfait entraînant une fuite de lumière et une consommation constante).
   * Sur un écran **OLED/micro-LED**, chaque diode est sa propre source. Pour afficher du noir, les trois sous-pixels sont **physiquement éteints**. Aucun courant ne les traverse : la consommation électrique est alors nulle pour ces pixels et le noir obtenu est absolu (taux de contraste théoriquement infini).

---

#### 2. Énergie des photons émis par le sous-pixel bleu

1. **Domaine du visible :**  
   On a $\lambda_B = 450 \text{ nm}$.  
   Or, le domaine visible s'étend de $400 \text{ nm}$ à $800 \text{ nm}$.  
   Comme $400 \text{ nm} \le 450 \text{ nm} \le 800 \text{ nm}$, cette radiation appartient bien au domaine visible (dans la zone des bleus).

2. **Calcul de la fréquence $\nu_B$ :**  
   La relation entre célérité, longueur d'onde et fréquence est :
   $$\nu_B = \frac{c}{\lambda_B}$$
   Avec $\lambda_B = 450 \text{ nm} = 450 \times 10^{-9} \text{ m}$ :
   $$\nu_B = \frac{3{,}00 \times 10^8}{450 \times 10^{-9}} \approx 6{,}67 \times 10^{14} \text{ Hz}$$

3. **Calcul de l'énergie du photon $E_B$ :**  
   D'après la relation de Planck-Einstein :
   $$E_B = h \cdot \nu_B = \frac{h \cdot c}{\lambda_B}$$
   * **En joules ($\text{J}$) :**
     $$E_B = 6{,}63 \times 10^{-34} \times 6{,}67 \times 10^{14} \approx 4{,}42 \times 10^{-19} \text{ J}$$
   * **En électron-volts ($\text{eV}$) :**
     $$E_B = \frac{4{,}42 \times 10^{-19} \text{ J}}{1{,}60 \times 10^{-19} \text{ J}\cdot\text{eV}^{-1}} \approx 2{,}76 \text{ eV}$$

---

#### 3. Prévention citoyenne et lumière bleue

1. **Calcul de l'énergie $E_R$ du photon rouge :**  
   $$\lambda_R = 630 \text{ nm} = 630 \times 10^{-9} \text{ m}$$
   $$E_R = \frac{h \cdot c}{\lambda_R} = \frac{6{,}63 \times 10^{-34} \times 3{,}00 \times 10^8}{630 \times 10^{-9}} \approx 3{,}16 \times 10^{-19} \text{ J}$$
   En électron-volts :
   $$E_R = \frac{3{,}16 \times 10^{-19}}{1{,}60 \times 10^{-19}} \approx 1{,}97 \text{ eV}$$

2. **Comparaison et impact biologique :**  
   On constate que $E_B > E_R$ ($2{,}76 \text{ eV} > 1{,}97 \text{ eV}$).  
   L'énergie d'un photon est inversement proportionnelle à sa longueur d'onde ($E \propto \frac{1}{\lambda}$). Les radiations de courtes longueurs d'onde (bleu/violet) transportent des quanta d'énergie plus élevés. Cette énergie plus importante rend les photons bleus plus susceptibles d'induire des réactions photochimiques oxydatives au niveau des cellules rétiniennes et de perturber la sécrétion de mélatonine (hormone du sommeil).

3. **Réglage logiciel :**  
   Le mode « Confort des yeux » ou « Nocturne » **réduit l'intensité d'alimentation des sous-pixels bleus** tout en conservant ou accentuant les sous-pixels rouges et verts, ce qui donne à l'écran une teinte chaude (jaunâtre/orangée) moins agressive pour le système circadien.

---

#### 4. Interaction lumière-matière (Synthèse soustractive)

1. **Composition de la lumière incidente émise par l'écran :**  
   Une zone magenta est créée par la superposition des lumières primaires rouge et bleue :
   $$\text{Lumière émise} = \text{Rouge} + \text{Bleu}$$

2. **Action du filtre (synthèse soustractive) :**  
   Un filtre jaune absorbe sa couleur complémentaire, c'est-à-dire la lumière **bleue**, et transmet les lumières rouge et verte :
   * Radiation bleue : **absorbée** par le filtre ;
   * Radiation rouge : **transmise** par le filtre.

3. **Couleur perçue :**  
   Seule la radiation **rouge** traverse le verre et atteint l'œil de l'observateur. La zone magenta apparaîtra donc **rouge**.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
