---
title: "Exercice 2 : Mouvement de particules chargées"
description: "Application pratique du chapitre Mouvement dans un champ uniforme"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'analyse spectroscopique par spectrométrie de masse (technique MALDI-TOF ou séparation isotopique), il est nécessaire de trier des ions selon leur rapport masse sur charge $\frac{m}{q}$. Pour ce faire, on utilise traditionnellement un sélecteur de vitesse ou un analyseur à déflexion électrostatique. 

Considérons une source d'ions produisant des ions $^6\text{Li}^+$ et $^7\text{Li}^+$ initialement au repos (ou dont la vitesse initiale est négligeable devant celle acquise après accélération). Ces ions pénètrent dans une zone d'analyse où règne un champ électrique uniforme.

**Données physiques et constantes fondamentales :**
* Masse d'un ion lithium-6 : $m_1 \approx 6,015 \text{ u} \approx 9,99 \times 10^{-27} \text{ kg}$
* Masse d'un ion lithium-7 : $m_2 \approx 7,016 \text{ u} \approx 1,16 \times 10^{-26} \text{ kg}$
* Charge élémentaire : $e \approx 1,602 \times 10^{-19} \text{ C}$
* Charge de l'ion (monovalent) : $q = +e$
* Tension d'accélération : $U_0 = 5,00 \times 10^{3} \text{ V}$
* Caractéristiques du condensateur de déflexion (champ uniforme) : longueur des armatures $L = 10,0 \text{ cm}$, distance entre les armatures $d = 2,00 \text{ cm}$, tension appliquée entre les armatures $U = 400 \text{ V}$.

*Note critique sur le modèle :* Dans le modèle standard d'étude, on néglige l'action de la pesanteur devant les forces électrostatiques (ce qui sera vérifié par le calcul). De plus, on suppose le champ électrique strictement uniforme entre les plaques et nul à l'extérieur, négligeant ainsi les effets de bords aux extrémités du condensateur, lesquels induisent des incertitudes expérimentales sur la trajectoire réelle des ions.

---

### ❓ Énoncé

1. **Établissement du modèle cinétique :** En appliquant le théorème de l'énergie cinétique entre la source (vitesse nulle) et l'entrée de la zone de déflexion, exprimer la vitesse d'un ion de masse $m$ et de charge $q$ en fonction de $U_0$, $m$ et $q$. Calculer numériquement les vitesses $v_1$ et $v_2$ des ions $^6\text{Li}^+$ et $^7\text{Li}^+$.
2. **Étude dynamique dans le champ défléchissant :** Dans le repère $(O, \vec{x}, \vec{y})$ lié au dispositif (avec $\vec{E} = -\frac{U}{d}\vec{y}$), établir les équations horaires du mouvement de l'ion dans la zone de déflexion ($0 \le x \le L$).
3. **Détermination de la déviation :** En déduire l'équation de la trajectoire $y(x)$ sous la forme d'une parabole, puis calculer la déviation verticale $y_L = y(L)$ à la sortie des plaques pour chacun des deux isotopes.
4. **Analyse critique et faisabilité :** Discuter de la pertinence de ce dispositif pour séparer efficacement ces deux isotopes. Quel est l'impact pratique des effets de bords du champ électrique sur la résolution de l'analyseur ?

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez la conservation de l'énergie mécanique ou le théorème de l'énergie cinétique ($\Delta E_c = W_{\text{forces}}$). Le travail de la force électrostatique lors d'une accélération sous une tension $U_0$ s'écrit $W = qU_0$.
* **Questions 2 & 3 :** Appliquez la seconde loi de Newton (principe fondamental de la dynamique) en faisant l'inventaire des forces. Projetez l'équation vectorielle dans le référentiel galiléen du laboratoire supposé tel. Éliminez le temps $t$ entre les équations horaires $x(t)$ et $y(t)$ pour obtenir l'équation de la trajectoire.
* **Question 4 :** Comparez l'écart absolu des positions de sortie $\Delta y = y_{L,1} - y_{L,2}$ avec la taille du faisceau ionique initial ou la résolution du détecteur.

---

### 📋 Correction détaillée pas à pas

#### 1. Vitesse d'accélération des ions
Soit un ion de masse $m$ et de charge $q = +e$. Le travail de la force électrostatique lors de la traversée de la zone d'accélération sous la tension $U_0$ est :
$$W_{AB}(\vec{F}_e) = qU_0$$

D'après le théorème de l'énergie cinétique entre la source (vitesse initiale négligeable, $E_{c,\text{init}} = 0$) et l'entrée du dispositif :
$$\frac{1}{2} m v^2 = qU_0 \implies v = \sqrt{\frac{2qU_0}{m}}$$

* **A.N. pour l'ion $^6\text{Li}^+$ ($m_1$) :**
$$v_1 = \sqrt{\frac{2 \times 1,602 \times 10^{-19} \times 5,00 \times 10^3}{9,99 \times 10^{-27}}} \approx 1,27 \times 10^6 \text{ m}\cdot\text{s}^{-1}$$

* **A.N. pour l'ion $^7\text{Li}^+$ ($m_2$) :**
$$v_2 = \sqrt{\frac{2 \times 1,602 \times 10^{-19} \times 5,00 \times 10^3}{1,16 \times 10^{-26}}} \approx 1,17 \times 10^6 \text{ m}\cdot\text{s}^{-1}$$

#### 2. Équations horaires du mouvement
Le système étudié est l'ion {Li$^+$}, référentiel du laboratoire supposé galiléen. La seule force prise en compte est la force électrostatique $\vec{F}_e = q\vec{E}$ (le poids étant négligeable devant la force électrique, car $P/F_e \approx mg / (qE) \sim 10^{-13}$).

Le champ électrique entre les plaques est $\vec{E} = \left(0, -\frac{U}{d}, 0\right)$.
D'après la seconde loi de Newton :
$$m\vec{a} = q\vec{E} \implies \vec{a} = \begin{pmatrix} 0 \\ -\frac{qU}{md} \\ 0 \end{pmatrix}$$

En tenant compte des conditions initiales à l'entrée du champ ($t=0$, $\vec{r}_0 = \vec{0}$ et $\vec{v}_0 = (v_0, 0, 0)$) :
* **Vecteur vitesse :**
$$\vec{v}(t) = \begin{pmatrix} v_0 \\ -\frac{qU}{md} t \\ 0 \end{pmatrix}$$

* **Vecteur position :**
$$\vec{r}(t) = \begin{pmatrix} v_0 t \\ -\frac{qU}{2md} t^2 \\ 0 \end{pmatrix}$$

#### 3. Équation de la trajectoire et déviation
À partir de l'équation sur l'axe $x$, on exprime le temps $t$ :
$$t = \frac{x}{v_0}$$

On substitue cette expression dans l'équation de l'axe $y$ :
$$y(x) = -\frac{qU}{2md} \left(\frac{x}{v_0}\right)^2$$

En remplaçant $v_0^2$ par son expression $\frac{2qU_0}{m}$ issue de la première question :
$$y(x) = -\frac{qU}{2md} \cdot \frac{m}{2qU_0} x^2 = -\frac{U}{4d U_0} x^2$$

Calculons la déviation verticale à la sortie des plaques ($x = L = 0,10 \text{ m}$) :
$$y_L = -\frac{400}{4 \times 0,0200 \times 5000} \times (0,10)^2 = -1,00 \times 10^{-2} \text{ m} = -1,00 \text{ cm}$$

*Remarque scientifique importante :* La déviation $y_L$ ne dépend ni de la masse $m$ ni de la charge $q$ de l'ion dans ce modèle simple, car la vitesse initiale dépendait elle-même de la masse ($v_0 \propto 1/\sqrt{m}$) ce qui compense exactement le terme inertiel dans la déflexion transversale. Ce dispositif particulier ne permet donc **pas** une séparation isotopique efficace. Un analyseur magnétique (force de Lorentz) ou un sélecteur de vitesse combiné serait nécessaire.

#### 4. Analyse critique et limites du modèle
* **Faisabilité :** Le calcul montre que $y_L$ est identique pour les deux isotopes dans un champ purement électrostatique avec la même tension d'accélération. L'hypothèse d'un tri isotopique par simple déflexion électrostatique est invalidée par le formalisme mathématique.
* **Limites du modèle :** En réalité, les franges du champ (effets de bords aux extrémités des armatures) font que le champ électrique n'est pas brusquement nul à $x=0$ et $x=L$. Cela introduit une incertitude sur la longueur effective $L$ du champ, provoquant un élargissement des impacts sur le détecteur et réduisant la résolution instrumentale (capacité à distinguer $^6\text{Li}$ de $^7\text{Li}$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
