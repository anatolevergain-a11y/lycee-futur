---
title: "Exercice 1 : Premier principe de la thermodynamique et énergie interne"
description: "Application pratique du chapitre Thermodynamique et transferts thermiques"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'optimisation des systèmes thermodynamiques embarqués, on s'intéresse au comportement d'un gaz supposé parfait, enfermé dans un cylindre muni d'un piston mobile sans frottement. Ce dispositif modélise le cylindre d'un moteur thermique ou d'un compresseur industriel. 

Le système étudié est constitué de $n = 0{,}50\text{ mol}$ d'un gaz parfait monoatomique (pour lequel la capacité thermique molaire à volume constant est $C_v = \frac{3}{2}R$, avec $R = 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$).

Initialement, le gaz se trouve dans l'état $\text{A}$ caractérisé par :
- Une pression $P_{\text{A}} = 1{,}0\times 10^5\text{ Pa}$
- Un volume $V_{\text{A}} = 1{,}2\times 10^{-2}\text{ m}^3$
- Une température $T_{\text{A}}$

Le gaz subit une compression isotherme réversible jusqu'à l'état $\text{B}$ où son volume est divisé par $3$ ($V_{\text{B}} = \frac{V_{\text{A}}}{3}$). 

*Note scientifique et esprit critique :* Dans les conditions réelles d'exploitation industrielle, les transformations ne sont jamais rigoureusement isothermes (des gradients de température apparaissent) ni strictement réversibles (dissipation visqueuse, frottements fluides). Le modèle idéal que nous utilisons ici constitue une approximation asymptotique qui permet d'établir une borne supérieure de performance, dont il conviendra d'analyser les limites.

---

### ❓ Énoncé

1. Déterminer la température initiale $T_{\text{A}}$ du gaz dans l'état $\text{A}$, puis calculer le volume $V_{\text{B}}$ et la pression $P_{\text{B}}$ de l'état $\text{B}$.
2. Rappeler l'expression de la variation d'énergie interne $\Delta U_{\text{A}\to\text{B}}$ d'un gaz parfait pour une transformation isotherme. Justifier rigoureusement ce résultat à l'aide des lois de Joule.
3. Exprimer et calculer le travail $W_{\text{A}\to\text{B}}$ reçu par le gaz au cours de cette compression isotherme réversible. On rappelle que pour une transformation réversible, $P_{\text{ext}} = P_{\text{gaz}}$.
4. En déduire, en appliquant le premier principe de la thermodynamique, la quantité de chaleur $Q_{\text{A}\to\text{B}}$ échangée par le gaz avec son milieu extérieur. Discuter de la faisabilité pratique d'une telle transformation en temps fini et de ses implications énergétiques.

---

### 💡 Indice de méthode

- **Question 1 :** Utilisez l'équation d'état des gaz parfaits $P V = n R T$. Pour la transformation isotherme, exploitez la constance du produit $P \cdot V$ (loi de Boyle-Mariotte).
- **Question 2 :** Pour un gaz parfait, l'énergie interne ne dépend que de la température (première loi de Joule). Si la température est constante, que peut-on déduire de $\Delta U$ ?
- **Question 3 :** Partez de la définition générale du travail élémentaire $\delta W = -P_{\text{ext}} \, dV$. Exprimez $P$ en fonction de $V$ grâce à la loi des gaz parfaits avant d'intégrer entre $V_{\text{A}}$ et $V_{\text{B}}$.
- **Question 4 :** Le premier principe s'écrit $\Delta U = W + Q$. Isolez $Q$. Pour l'esprit critique, pensez aux transferts thermiques nécessaires pour maintenir la température constante malgré le travail mécanique fourni au gaz.

---

### 📋 Correction détaillée pas à pas

#### 1. Détermination des états $\text{A}$ et $\text{B}$
* **Température $T_{\text{A}}$ :**
  D'après l'équation d'état des gaz parfaits :
  $$P_{\text{A}}V_{\text{A}} = n R T_{\text{A}} \implies T_{\text{A}} = \frac{P_{\text{A}}V_{\text{A}}}{n R}$$
  A.N. : 
  $$T_{\text{A}} = \frac{1{,}0\times 10^5 \times 1{,}2\times 10^{-2}}{0{,}50 \times 8{,}314} \approx 288{,}7\text{ K} \quad (\text{soit } 15{,}5\text{ }^\circ\text{C})$$

* **Volume $V_{\text{B}}$ :**
  L'énoncé indique que le volume est divisé par $3$ :
  $$V_{\text{B}} = \frac{V_{\text{A}}}{3} = \frac{1{,}2\times 10^{-2}}{3} = 4{,}0\times 10^{-3}\text{ m}^3$$

* **Pression $P_{\text{B}}$ :**
  La transformation étant isotherme ($T_{\text{A}} = T_{\text{B}}$), la loi de Boyle-Mariotte s'applique :
  $$P_{\text{A}}V_{\text{A}} = P_{\text{B}}V_{\text{B}} \implies P_{\text{B}} = P_{\text{A}} \times \frac{V_{\text{A}}}{V_{\text{B}}} = 3 P_{\text{A}}$$
  A.N. : 
  $$P_{\text{B}} = 3 \times 1{,}0\times 10^5 = 3{,}0\times 10^5\text{ Pa}$$

---

#### 2. Variation d'énergie interne $\Delta U_{\text{A}\to\text{B}}$
Pour un gaz parfait, la première loi de Joule énonce que l'énergie interne $U$ ne dépend que de sa température : $U = n C_v T$.
La transformation étant isotherme ($T_{\text{B}} = T_{\text{A}}$), la température du système ne varie pas. Par conséquent :
$$\Delta U_{\text{A}\to\text{B}} = n C_v (T_{\text{B}} - T_{\text{A}}) = 0\text{ J}$$

---

#### 3. Calcul du travail $W_{\text{A}\to\text{B}}$
Le travail élémentaire reçu par le système lors d'une variation de volume $dV$ est :
$$\delta W = -P_{\text{ext}} \, dV$$
Puisque la transformation est supposée réversible, l'équilibre mécanique est permanent, ce qui implique $P_{\text{ext}} = P_{\text{gaz}}$. En utilisant l'équation des gaz parfaits ($P = \frac{nRT}{V}$), on obtient :
$$W_{\text{A}\to\text{B}} = -\int_{V_{\text{A}}}^{V_{\text{B}}} \frac{n R T}{V} \, dV$$
La température $T$ étant constante et homogène à $T_{\text{A}}$ :
$$W_{\text{A}\to\text{B}} = -n R T_{\text{A}} \ln\left(\frac{V_{\text{B}}}{V_{\text{A}}}\right)$$
A.N. : 
$$W_{\text{A}\to\text{B}} = -0{,}50 \times 8{,}314 \times 288{,}7 \times \ln\left(\frac{1}{3}\right)$$
$$W_{\text{A}\to\text{B}} = -1199{,}3 \times (-1{,}0986) \approx +1317\text{ J}$$
Le travail est positif, ce qui est cohérent pour une compression : le milieu extérieur fournit de l'énergie mécanique au système.

---

#### 4. Quantité de chaleur $Q_{\text{A}\to\text{B}}$ et analyse critique
* **Calcul de $Q_{\text{A}\to\text{B}}$ :**
  D'après le premier principe de la thermodynamique appliqué à la transformation fermée :
  $$\Delta U_{\text{A}\to\text{B}} = W_{\text{A}\to\text{B}} + Q_{\text{A}\to\text{B}}$$
  Comme $\Delta U_{\text{A}\to\text{B}} = 0$, on en déduit :
  $$Q_{\text{A}\to\text{B}} = -W_{\text{A}\to\text{B}} \approx -1317\text{ J}$$

* **Analyse critique et limites du modèle :**
  Le gaz reçoit du travail mécanique ($W > 0$) qu'il restitue intégralement sous forme de transfert thermique vers l'extérieur ($Q < 0$), maintenant ainsi sa température constante. 
  - *Faisabilité :* Une compression isotherme rigoureuse exigerait une transformation infiniment lente (quasi-statique) pour que les échanges thermiques avec l'extérieur compensent instantanément l'échauffement lié au travail reçu. 
  - *En pratique :* Dans un compresseur réel fonctionnant à cadence élevée, les échanges thermiques ne sont pas assez rapides (le milieu extérieur n'a pas le temps d'évacuer toute la chaleur). La transformation tend alors vers une adiabatique irréversible, augmentant la température et la pression finale au-delà des prévisions de ce modèle idéal, ce qui nécessite une dépense énergétique additionnelle à l'usinage.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
