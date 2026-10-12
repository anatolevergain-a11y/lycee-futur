---
title: "Exercice 2 : Suivi temporel d'une transformation"
description: "Application pratique du chapitre Cinétique chimique"
---

### 🌐 Contexte & Données scientifiques

L'oxydation des ions iodure $I^-$ par les ions peroxodisulfate $S_2O_8^{2-}$ est une réaction lente et totale, souvent utilisée pour étudier les facteurs cinétiques et réaliser des suivis temporels au lycée. L'équation modélisant la transformation chimique est la suivante :

$$S_2O_8^{2-}(aq) + 2 \, I^-(aq) \rightarrow 2 \, SO_4^{2-}(aq) + I_2(aq)$$

Dans le cadre d'une démarche expérimentale rigoureuse, un binôme d'élèves réalise le suivi temporel de cette réaction par **spectrophotométrie**. La seule espèce colorée du milieu réactionnel est le diiode $I_2(aq)$, qui présente une coloration jaune-brun. 

**Données et protocole expérimental :**
* À l'instant $t = 0\text{ s}$, on mélange un volume $V_1 = 50,0\text{ mL}$ d'une solution aqueuse d'iodure de potassium de concentration $C_1 = 0,10\text{ mol}\cdot\text{L}^{-1}$ avec un volume $V_2 = 50,0\text{ mL}$ d'une solution aqueuse de peroxodisulfate de potassium de concentration $C_2 = 5,0 \times 10^{-3}\text{ mol}\cdot\text{L}^{-1}$.
* Le volume total du mélange réactionnel est $V = V_1 + V_2 = 100,0\text{ mL}$.
* La température du milieu est maintenue constante à $25\text{ }^\circ\text{C}$.
* Loi de Beer-Lambert : l'absorbance $A$ mesurée à la longueur d'onde adéquate est directement proportionnelle à la concentration molaire en diiode $[I_2]$ dans la cuve spectrophotométrique, soit $A = k \cdot [I_2]$ avec $k = 500\text{ L}\cdot\text{mol}^{-1}$ (pour une longueur de cuve $l = 1,0\text{ cm}$).
* *Attention critique :* La loi de Beer-Lambert n'est rigoureusement linéaire que pour des solutions diluées (généralement $A \le 1,5$ à $2,0$). Au-delà, des déviations instrumentales et physico-chimiques (phénomènes de diffusion, interactions intermoléculaires) apparaissent, constituant une limite à la validité du modèle.

---

### ❓ Énoncé

1. **Étude stœchiométrique préliminaire :** Dresser le tableau d'avancement de la transformation chimique en fonction de l'avancement $x(t)$ (exprimé en moles). Déterminer le réactif limitant et calculer la valeur de l'avancement maximal $x_{max}$.
2. **Exploitation des mesures :** Exprimer l'avancement $x(t)$ de la réaction à un instant $t$ en fonction de l'absorbance $A(t)$, du coefficient $k$ et du volume total $V$. Calculer l'avancement final $x_f$ en supposant la transformation totale.
3. **Notion de vitesse et temps de demi-réaction :** Définir graphiquement ou par le calcul le temps de demi-réaction $t_{1/2}$. En exploitant les données cinétiques, comment l'évolution de la vitesse volumique de réaction au cours du temps illustre-t-elle la loi de cinétique chimique relative aux concentrations des réactifs ?
4. **Analyse critique et limites du modèle :** Un élève suggère d'augmenter la température du bain thermostaté à $60\text{ }^\circ\text{C}$ pour accélérer la mesure et terminer le TP plus rapidement. Discuter de la pertinence de cette proposition en évaluant le compromis entre gain cinétique (facteur cinétique) et validité thermodynamique/expérimentale du protocole.

---

### 💡 Indice de méthode

* **Question 1 :** Calculez les quantités de matière initiales des réactifs introduits $n_0(S_2O_8^{2-})$ et $n_0(I^-)$. Pensez à bien diviser par le volume total pour le tableau si vous travaillez en concentrations, ou travaillez directement en moles ($V$ total = $0,100\text{ L}$).
* **Question 2 :** Utilisez la définition de la concentration $[I_2](t) = \frac{n(I_2)_{formé}}{V} = \frac{x(t)}{V}$. Injectez ensuite cette expression dans la relation de la loi de Beer-Lambert $A(t) = k \cdot [I_2](t)$.
* **Question 3 :** Le temps de demi-réaction $t_{1/2}$ correspond à l'instant où l'avancement atteint la moitié de sa valeur finale : $x(t_{1/2}) = \frac{x_f}{2}$ (ou $A(t_{1/2}) = \frac{A_{max}}{2}$ vu la proportionnalité). Rappelez que la vitesse volumique est proportionnelle à la dérivée de l'avancement par rapport au temps : $v(t) = \frac{1}{V} \cdot \frac{dx}{dt}$.
* **Question 4 :** Réfléchissez aux limites de la trempe thermique implicite, à la stabilité des espèces chimiques en solution à chaud (risques de décomposition thermique des peroxodisulfates ou évaporation du diiode), et à la précision des mesures si la réaction devient quasi-instantanée.

---

### 📋 Correction détaillée pas à pas

#### 1. Étude stœchiométrique préliminaire
* **Calcul des quantités de matière initiales :**
  * $n_0(S_2O_8^{2-}) = C_2 \times V_2 = 5,0 \times 10^{-3}\text{ mol}\cdot\text{L}^{-1} \times 0,0500\text{ L} = 2,5 \times 10^{-4}\text{ mol}$ ($0,25\text{ mmol}$)
  * $n_0(I^-) = C_1 \times V_1 = 0,10\text{ mol}\cdot\text{L}^{-1} \times 0,0500\text{ L} = 5,0 \times 10^{-3}\text{ mol}$ ($5,0\text{ mmol}$)

* **Tableau d'avancement :**

| État | Avancement ($mol$) | $S_2O_8^{2-}(aq)$ | $+ \quad 2 \, I^-(aq)$ | $\rightarrow$ | $2 \, SO_4^{2-}(aq)$ | $+ \quad I_2(aq)$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Initial ($t=0$) | $0$ | $n_0(S_2O_8^{2-})$ | $n_0(I^-)$ | | $0$ | $0$ |
| En cours ($t$) | $x(t)$ | $n_0(S_2O_8^{2-}) - x(t)$ | $n_0(I^-) - 2x(t)$ | | $2x(t)$ | $x(t)$ |
| Final ($t_f$) | $x_{max}$ | $n_0(S_2O_8^{2-}) - x_{max}$ | $n_0(I^-) - 2x_{max}$ | | $2x_{max}$ | $x_{max}$ |

* **Détermination du réactif limitant :**
  * Hypothèse 1 : $S_2O_8^{2-}$ est limitant $\Rightarrow n_0(S_2O_8^{2-}) - x_{max} = 0 \Rightarrow x_{max, 1} = 2,5 \times 10^{-4}\text{ mol}$.
  * Hypothèse 2 : $I^-$ est limitant $\Rightarrow n_0(I^-) - 2x_{max} = 0 \Rightarrow x_{max, 2} = \frac{5,0 \times 10^{-3}}{2} = 2,5 \times 10^{-3}\text{ mol}$.

Le plus petit avancement maximal étant $x_{max, 1}$, **le réactif limitant est l'ion peroxodisulfate $S_2O_8^{2-}$**, et $x_{max} = 2,5 \times 10^{-4}\text{ mol}$.

---

#### 2. Exploitation des mesures (Lien entre $A(t)$ et $x(t)$)
D'après le tableau d'avancement, à un instant $t$, la quantité de diiode formée est :
$$n(I_2)_{formé} = x(t)$$

La concentration molaire effective en diiode dans le mélange réactionnel est donc :
$$[I_2](t) = \frac{x(t)}{V_{total}}$$

En appliquant la loi de Beer-Lambert $A(t) = k \cdot [I_2](t)$, il vient :
$$A(t) = k \cdot \frac{x(t)}{V_{total}} \implies x(t) = \frac{A(t) \cdot V_{total}}{k}$$

* **Calcul de l'avancement final $x_f$** (en supposant la transformation totale, soit $x_f = x_{max}$) :
  Il est directement donné par la stœchiométrie : $x_f = 2,5 \times 10^{-4}\text{ mol}$. 
  *(Vérification expérimentale : l'absorbance maximale théorique mesurable serait $A_{max} = \frac{x_{max} \cdot k}{V_{total}} = \frac{2,5 \times 10^{-4} \times 500}{0,100} = 1,25$. Cette valeur est inférieure à $1,5$, ce qui valide l'utilisation de la loi de Beer-Lambert dans son domaine de proportionnalité).*

---

#### 3. Temps de demi-réaction et cinétique
* **Définition :** Le temps de demi-réaction $t_{1/2}$ est la durée au bout de laquelle l'avancement de la réaction a atteint la moitié de sa valeur finale : 
  $$x(t_{1/2}) = \frac{x_f}{2}$$
  Par proportionnalité directe avec l'absorbance, cela correspond à :
  $$A(t_{1/2}) = \frac{A_{max}}{2}$$

* **Analyse critique de la vitesse :** 
  La vitesse volumique de la réaction est définie par $v(t) = \frac{1}{V}\frac{dx}{dt}$, ce qui correspond graphiquement au coefficient directeur de la tangente à la courbe $x(t)$ (ou $A(t)$) à l'instant $t$, à un facteur multiplicatif près. 
  On observe expérimentalement que la pente de la tangente diminue au cours du temps pour devenir nulle en fin de réaction. Cela traduit une **diminution de la vitesse volumique de réaction**. D'un point de vue cinétique, ce phénomène s'explique par la diminution progressive des concentrations des réactifs au cours du temps (loi de cinétique chimique : la vitesse dépend des concentrations des réactifs).

---

#### 4. Analyse critique et limites du modèle (Proposition d'augmentation de la température)
* **Effet sur le système :** Augmenter la température à $60\text{ }^\circ\text{C}$ constitue une modification d'un **facteur cinétique**. Selon la loi d'Arrhenius, l'élévation de la température augmente la valeur de la constante de vitesse $k(T)$, ce qui accélère considérablement la transformation (les collisions entre entités sont plus fréquentes et plus énergétiques).
* **Limites et compromis (Esprit critique) :** 
  * *Faisabilité expérimentale :* Si la réaction devient trop rapide, le suivi temporel manuel par prélèvement ou même par acquisition spectrophotométrique automatique classique devient caduc, car les variations se produisent sur une échelle de temps trop courte pour être mesurées précisément.
  * *Stabilité physico-chimique :* À température élevée, des réactions secondaires parasites peuvent apparaître (comme la décomposition thermique de certaines espèces ou l'altération des coefficients d'extinction molaire par modification de l'équéquilibre chimique ou évaporation partielle du diiode volatile).
  * *Conclusion nuancée :* Le compromis entre rapidité d'acquisition des données et précision métrologique ne valide pas une élévation arbitraire de la température sans réajustement des concentrations initiales.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
