---
title: "Exercice 2 : Loi d'Ohm et protection des circuits électriques domestiques"
description: "Application pratique du chapitre Transformations nucléaires et électricité"
---

### 🌐 Contexte & Données scientifiques

Dans une installation domestique française, l'alimentation électrique est standardisée à une tension efficace $U_{\text{eff}} \approx 230 \text{ V}$ (courant alternatif sinusoïdal de fréquence $50 \text{ Hz}$). Pour concevoir et sécuriser un circuit, les électriciens et ingénieurs modélisent les appareils par leur résistance électrique $R$ (en ohms, notée $\Omega$).

La sécurité des biens et des personnes repose sur l'utilisation d'appareils de protection, principalement les disjoncteurs divisionnaires magnétothermiques. Un disjoncteur est caractérisé par un calibre maximal $I_{\text{max}}$ (en ampères, noté $\text{A}$). Si l'intensité $I$ du courant traversant le circuit dépasse ce seuil par effet Joule ou en raison d'un défaut (court-circuit), le dispositif ouvre le circuit pour éviter l'échauffement excessif des conducteurs, susceptible de provoquer un incendie.

Cependant, le choix du calibre d'un disjoncteur implique un compromis technico-économique : un calibre trop faible provoque des coupures intempestives lors du démarrage simultané de plusieurs appareils (courants d'appel transitoires), tandis qu'un calibre trop élevé retarde la coupure, exposant l'isolant des câbles à des températures critiques.

Considérons une ligne électrique domestique protégée par un disjoncteur de calibre $I_{\text{max}} = 16 \text{ A}$. Cette ligne alimente une prise multiple sur laquelle sont branchés les trois appareils suivants en fonctionnement simultané :
1. Un radiateur d'appoint modélisé par une résistance ohmique pure $R_1 = 46 \text{ }\Omega$.
2. Un four à micro-ondes modélisé par une résistance équivalente $R_2 = 69 \text{ }\Omega$.
3. Une bouilloire électrique modélisée par une résistance équivalente $R_3 = 57,5 \text{ }\Omega$.

*Donnée utile :* En régime sinusoïdal, la loi d'Ohm s'applique aux valeurs efficaces : $U_{\text{eff}} = R_{\text{eq}} \times I_{\text{eff}}$.

---

### ❓ Énoncé

1. Rappeler la loi d'Ohm régissant une résistance électrique et expliciter l'unité de chaque grandeur en précisant le nom des unités dans le Système International.
2. Calculer l'intensité efficace du courant $I_1$ traversant le radiateur lorsqu'il est branché seul sur cette ligne. Le disjoncteur se déclenche-t-il ?
3. En considérant que les appareils sont branchés en dérivation (montage standard des installations domestiques), exprimer puis calculer la résistance équivalente $R_{\text{eq}}$ de l'ensemble des trois appareils fonctionnant simultanément. En déduire l'intensité totale $I_{\text{total}}$ du courant circulant dans la ligne.
4. **Esprit critique :** Le calcul précédent repose sur un modèle linéaire simple. Discutez de la validité de ce modèle en explicitant au moins deux limites physiques ou hypothèses simplificatrices inhérentes à une installation réelle (on pourra s'interroger sur la nature des charges, la résistance des câbles de raccordement ou la stabilité de la tension du réseau).

---

### 💡 Indice de méthode

* **Question 1 :** Veillez à bien distinguer la grandeur physique (symbole en italique), son unité (symbole en romain avec `\text{...}`) et le nom de cette unité.
* **Question 2 & 3 :** Utilisez la loi d'Ohm $U = R \times I$ transformée pour isoler l'intensité $I = \frac{U}{R}$. Pour des conducteurs ohmiques en dérivation, la conductance totale s'additionne : $\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$.
* **Question 4 :** Pour l'analyse critique, songez aux caractéristiques des moteurs (inductance), à l'effet Joule dans les fils de cuivre de l'installation (pertes en ligne) et aux tolérances des composants.

---

### 📋 Correction détaillée pas à pas

1. **Rappel de la loi d'Ohm et des unités :**
   La relation mathématique liant la tension $U$ aux bornes d'un conducteur ohmique, la résistance $R$ de celui-ci et l'intensité $I$ du courant qui le traverse est :
   $$U = R \times I$$
   * $U$ : tension électrique en volts ($\text{V}$).
   * $R$ : résistance électrique en ohms ($\Omega$).
   * $I$ : intensité du courant électrique en ampères ($\text{A}$).

2. **Calcul pour le radiateur seul :**
   Appliquons la loi d'Ohm en utilisant les valeurs efficaces du réseau domestique :
   $$I_1 = \frac{U_{\text{eff}}}{R_1}$$
   A.N. : 
   $$I_1 = \frac{230 \text{ V}}{46 \text{ }\Omega} = 5,0 \text{ A}$$
   *Comparaison :* L'intensité calculée ($5,0 \text{ A}$) est strictement inférieure au seuil maximal du disjoncteur ($16 \text{ A}$). Par conséquent, **le disjoncteur ne se déclenche pas**.

3. **Calcul pour les trois appareils en fonctionnement simultané :**
   Dans une installation domestique, les prises sont branchées en dérivation, ce qui signifie que chaque appareil est soumis à la même tension $U_{\text{eff}} = 230 \text{ V}$.
   L'intensité totale $I_{\text{total}}$ est la somme des intensités traversant chaque appareil (loi des nœuds) :
   $$I_{\text{total}} = I_1 + I_2 + I_3$$
   Calculons chaque intensité individuelle :
   * $I_1 = \frac{230}{46} = 5,0 \text{ A}$
   * $I_2 = \frac{230}{69} \approx 3,33 \text{ A}$
   * $I_3 = \frac{230}{57,5} = 4,0 \text{ A}$
   
   Somme des intensités :
   $$I_{\text{total}} = 5,0 + 3,33 + 4,0 = 12,33 \text{ A}$$
   
   *Alternative par la résistance équivalente $R_{\text{eq}}$ :*
   $$\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} = \frac{1}{46} + \frac{1}{69} + \frac{1}{57,5} \approx 0,02173 + 0,01449 + 0,01739 \approx 0,05361 \text{ }\Omega^{-1}$$
   $$R_{\text{eq}} = \frac{1}{0,05361} \approx 18,65 \text{ }\Omega$$
   On vérifie l'intensité totale :
   $$I_{\text{total}} = \frac{U_{\text{eff}}}{R_{\text{eq}}} = \frac{230}{18,65} \approx 12,33 \text{ A}$$
   *Conclusion :* $12,33 \text{ A} < 16 \text{ A}$. Le disjoncteur protège efficacement la ligne et ne se déclenche pas en régime établi.

4. **Analyse critique et limites du modèle :**
   Bien que le calcul théorique indique un fonctionnement sécurisé ($12,33 \text{ A} < 16 \text{ A}$), ce modèle présente plusieurs limites scientifiques qu'il convient de nuancer :
   * **Nature inductive ou capacitive des charges :** Le modèle assimile tous les appareils à de simples résistances ohmiques ($R$). Or, un four à micro-ondes ou la résistance ventilée d'un radiateur comporte des moteurs ou des transformateurs (charges inductives). Cela introduit un déphasage entre tension et intensité (facteur de puissance $\cos(\varphi) < 1$), ce qui peut modifier l'appel de courant réel.
   * **Courants d'appel transitoires :** Au moment de la mise sous tension (fermeture du circuit), certains appareils (comme les moteurs ou les éléments chauffants à froid) subissent un pic transitoire d'intensité très supérieur à leur valeur nominale, pouvant ponctuellement dépasser $16 \text{ A}$ et provoquer un déclenchement instantané (magnétique) injustifié du disjoncteur.
   * **Résistance des câbles et échauffement (Effet Joule) :** Les conducteurs reliant le tableau électrique aux prises possèdent eux-mêmes une résistance non nulle (faible, mais réelle). Le passage du courant génère des pertes par effet Joule ($P = r \times I^2$), entraînant une chute de tension en bout de ligne et un échauffement des câbles que le modèle idéal néglige.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
