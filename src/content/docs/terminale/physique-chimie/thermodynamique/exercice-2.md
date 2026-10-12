---
title: "Exercice 2 : Transferts thermiques par conduction, convection et rayonnement"
description: "Application pratique du chapitre Thermodynamique et transferts thermiques"
---

### 🌐 Contexte & Données scientifiques

L'étude des transferts thermiques est un enjeu majeur de la transition énergétique, notamment dans le secteur du bâtiment. On s'intéresse ici à la caractérisation thermique d'une paroi plane isolante et au bilan radiatif d'une surface extérieure soumise au rayonnement solaire.

Considérons un mur composite vertical de surface $S = 15,0\text{ m}^2$, constituant la façade d'un bâtiment. Ce mur est constitué d'une seule couche de béton cellulaire d'épaisseur $e = 20\text{ cm}$ et de conductivité thermique $\lambda = 0,15\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$.

Dans un modèle simplifié stationnaire, le transfert à travers la paroi s'effectue par conduction pure au sein du matériau, couplé à des transferts par convection et rayonnement au niveau des interfaces (air intérieur et air extérieur). 

Données et grandeurs physiques :
*   Température de l'air intérieur : $T_{\text{int}} = 19,0\text{ °C}$
*   Température de l'air extérieur : $T_{\text{ext}} = -5,0\text{ °C}$
*   Coefficient d'échange thermique superficiel intérieur : $h_{\text{int}} = 8,0\text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-1}$
*   Coefficient d'échange thermique superficiel extérieur (incluant convection et rayonnement linéarisé) : $h_{\text{ext}} = 25\text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-1}$
*   Flux surfacique reçu par rayonnement solaire incident sur la face externe : $\Phi_{\text{solaire}} = 120\text{ W}\cdot\text{m}^{-2}$ (on supposera un coefficient d'absorption globale de la surface externe $\alpha = 0,60$).

*Note scientifique : Les coefficients d'échange $h$ sont des grandeurs empiriques modélisant de manière macroscopique des phénomènes complexes (couches limites convectives turbulentes ou laminaires, et transferts radiatifs non-linéaires régis par la loi de Stefan-Boltzmann). Leur utilisation constitue une approximation utile mais comporte des incertitudes expérimentales notables (de l'ordre de 10 à 20 %). De plus, l'hypothèse d'un régime stationnaire est une idéalisation mathématique ; les conditions réelles sont intrinsèquement instationnaires (inertie thermique).*

---

### ❓ Énoncé

1. **Modélisation par analogie électrique :** Définir la résistance thermique superficielle intérieure $R_{\text{th,int}}$, la résistance thermique par conduction du mur $R_{\text{th,mur}}$, et la résistance thermique superficielle extérieure $R_{\text{th,ext}}$ (exprimées en $\text{K}\cdot\text{W}^{-1}$). Calculer leurs valeurs numériques.
2. **Calcul du flux thermique net :** En négligeant dans un premier temps le rayonnement solaire ($\Phi_{\text{solaire}} = 0$), calculer le flux thermique total $\Phi$ (en Watts) traversant la paroi en régime permanent. En déduire les températures de surface interne ($T_{\text{si}}$) et externe ($T_{\text{se}}$) du mur.
3. **Impact du rayonnement solaire :** On réintègre à présent le flux solaire absorbé sur la face externe. Établir l'expression littérale du nouveau bilan thermique à la surface extérieure en régime permanent. Calculer la nouvelle température de surface externe $T_{\text{se}}'$. 
4. **Analyse critique et limites du modèle :** Discuter l'impact du rayonnement solaire sur les déperditions thermiques du bâtiment à partir des résultats précédents. Quelles sont les limites majeures de ce modèle stationnaire unidirectionnel face à des conditions météorologiques réelles ?

---

### 💡 Indice de méthode

*   **Question 1 :** L'analogie thermo-électrique assimile le flux thermique $Q$ ou $\Phi$ à un courant électrique, et la différence de température $\Delta T$ à une tension. Les résistances thermiques s'expriment respectivement par $R_{\text{th,conv}} = \frac{1}{h \cdot S}$ et $R_{\text{th,cond}} = \frac{e}{\lambda \cdot S}$.
*   **Question 2 :** En régime permanent, les transferts à travers les différentes résistances sont en série. Le flux thermique total s'exprime par la loi d'Ohm thermique : $\Phi = \frac{T_{\text{int}} - T_{\text{ext}}}{R_{\text{total}}}$.
*   **Question 3 :** À la surface externe, la conservation de l'énergie impose que le flux thermique provenant de l'intérieur et traversant le mur soit égal à la somme du flux évacué vers l'air extérieur par convection/rayonnement et du flux solaire absorbé. Attention au sens des flux.
*   **Question 4 :** Pour l'esprit critique, pensez à l'effet de serre, aux ponts thermiques, aux variations journalières (cycle jour/nuit) et à la capacité thermique massique des matériaux (inertie).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul des résistances thermiques
Les expressions littérales et applications numériques pour chaque résistance (pour une surface $S = 15,0\text{ m}^2$) sont :
*   Résistance superficielle intérieure :
    $$R_{\text{th,int}} = \frac{1}{h_{\text{int}} \cdot S} = \frac{1}{8,0 \times 15,0} \approx 8,33 \times 10^{-3}\text{ K}\cdot\text{W}^{-1}$$
*   Résistance thermique par conduction du mur :
    $$R_{\text{th,mur}} = \frac{e}{\lambda \cdot S} = \frac{0,20}{0,15 \times 15,0} = \frac{0,20}{2,25} \approx 8,89 \times 10^{-2}\text{ K}\cdot\text{W}^{-1}$$
*   Résistance superficielle extérieure :
    $$R_{\text{th,ext}} = \frac{1}{h_{\text{ext}} \cdot S} = \frac{1}{25 \times 15,0} \approx 2,67 \times 10^{-3}\text{ K}\cdot\text{W}^{-1}$$

#### 2. Calcul du flux thermique sans rayonnement solaire
En régime permanent, les trois résistances sont traversées par le même flux thermique $\Phi$ et sont montées en série. La résistance thermique totale $R_{\text{total}}$ du système vaut :
$$R_{\text{total}} = R_{\text{th,int}} + R_{\text{th,mur}} + R_{\text{th,ext}}$$
$$R_{\text{total}} = (8,33 \times 10^{-3}) + (8,89 \times 10^{-2}) + (2,67 \times 10^{-3}) \approx 9,99 \times 10^{-2}\text{ K}\cdot\text{W}^{-1}$$

Le flux thermique $\Phi$ est donné par :
$$\Phi = \frac{T_{\text{int}} - T_{\text{ext}}}{R_{\text{total}}} = \frac{19,0 - (-5,0)}{9,99 \times 10^{-2}} = \frac{24,0}{9,99 \times 10^{-2}} \approx 240,3\text{ W}$$

Pour trouver les températures de surface, on utilise la chute de température à travers chaque résistance :
*   Température de surface interne $T_{\text{si}}$ :
    $$T_{\text{int}} - T_{\text{si}} = \Phi \cdot R_{\text{th,int}} \implies T_{\text{si}} = T_{\text{int}} - \Phi \cdot R_{\text{th,int}}$$
    $$T_{\text{si}} = 19,0 - (240,3 \times 8,33 \times 10^{-3}) = 19,0 - 2,00 = 17,0\text{ °C}$$
*   Température de surface externe $T_{\text{se}}$ :
    $$T_{\text{se}} - T_{\text{ext}} = \Phi \cdot R_{\text{th,ext}} \implies T_{\text{se}} = T_{\text{ext}} + \Phi \cdot R_{\text{th,ext}}$$
    $$T_{\text{se}} = -5,0 + (240,3 \times 2,67 \times 10^{-3}) = -5,0 + 0,64 = -4,36\text{ °C}$$

#### 3. Impact du rayonnement solaire sur la surface externe
Lorsque le rayonnement solaire est pris en compte, le bilan thermique à la surface externe s'écrit (en considérant les flux surfaciques $φ$ en $\text{W}\cdot\text{m}^{-2}$) :
Le flux surfacique traversant le mur de l'intérieur vers l'extérieur, $\varphi_{\text{cond}}$, doit égaler la somme du flux évacué vers l'extérieur par convection/rayonnement ($\varphi_{\text{conv/ray}}$) et du flux solaire absorbé ($\alpha \cdot \Phi_{\text{solaire}}$) :
$$\varphi_{\text{cond}} = h_{\text{ext}}(T_{\text{se}}' - T_{\text{ext}}) - \alpha \cdot \Phi_{\text{solaire}}$$

Or, le flux surfacique de conduction est aussi relié à l'écart global intérieur/extérieur ou calculé via le mur :
$$\varphi_{\text{cond}} = \frac{T_{\text{int}} - T_{\text{se}}'}{R_{\text{th,int}} \cdot S + R_{\text{th,mur}} \cdot S} \text{ (exprimé par unité de surface)}$$

De manière plus directe par nœud thermique (ou en écrivant l'égalité des flux totaux à l'interface externe $\Phi$) :
$$\Phi' = \frac{T_{\text{int}} - T_{\text{ext}}}{R_{\text{th,int}} + R_{\text{th,mur}}} - \dots \text{ (attention aux conventions)}$$

Exprimons l'équilibre du flux total $\Phi'$ traversant le mur :
$$\Phi' = \frac{T_{\text{int}} - T_{\text{se}}'}{R_{\text{th,int}} + R_{\text{th,mur}}}$$
À l'extérieur, ce même flux $\Phi'$ (qui sort du mur) additionné au flux solaire absorbé $P_{\text{abs}} = \alpha \cdot \Phi_{\text{solaire}} \cdot S$ est évacué vers l'air extérieur :
$$\Phi' + \alpha \cdot \Phi_{\text{solaire}} \cdot S = \frac{T_{\text{se}}' - T_{\text{ext}}}{R_{\text{th,ext}}}$$

Calculons d'abord le flux solaire absorbé total :
$$P_{\text{abs}} = 0,60 \times 120 \times 15,0 = 1080\text{ W}$$

En remplaçant $\Phi'$ :
$$\frac{T_{\text{int}} - T_{\text{se}}'}{R_{\text{th,int}} + R_{\text{th,mur}}} + 1080 = \frac{T_{\text{se}}' - T_{\text{ext}}}{R_{\text{th,ext}}}$$

exprimons les résistances globales partielles :
*   $R_1 = R_{\text{th,int}} + R_{\text{th,mur}} = 8,33\times 10^{-3} + 8,89\times 10^{-2} = 9,72\times 10^{-2}\text{ K}\cdot\text{W}^{-1}$
*   $R_2 = R_{\text{th,ext}} = 2,67\times 10^{-3}\text{ K}\cdot\text{W}^{-1}$

L'équation devient :
$$\frac{19,0 - T_{\text{se}}'}{9,72 \times 10^{-2}} + 1080 = \frac{T_{\text{se}}' - (-5,0)}{2,67 \times 10^{-3}}$$

Multiplions par les résistances pour résoudre :
$$195,46 - 10,29 \, T_{\text{se}}' + 1080 = 374,53 \, T_{\text{se}}' + 1872,65$$
*(Note : calcul approché par regroupement)*
Rearrangeons :
$$1275,46 - 1872,65 = (374,53 + 10,29) T_{\text{se}}'$$
$$-597,19 = 384,82 \, T_{\text{se}}'$$
$$T_{\text{se}}' = \frac{-597,19}{384,82} \approx -1,55\text{ °C}$$

*Vérification critique :* La température de surface externe est passée de $-4,36\text{ °C}$ à $-1,55\text{ °C}$. L'apport radiatif du Soleil réchauffe la paroi externe, réduisant ainsi le gradient thermique entre l'intérieur et l'extérieur de la surface, ce qui diminue les déperditions thermiques globales du bâtiment (le flux total $\Phi'$ est réduit).

#### 4. Analyse critique et limites du modèle
*   **Effet bénéfique vs complexe :** Le rayonnement solaire incident réduit les besoins de chauffage en journée (effet d'apport gratuit). Cependant, ce modèle présente de fortes limites :
    1.  *Régime stationnaire vs instationnaire :* Le rayonnement solaire est intermittent (nuages, cycle nycthéméral). La capacité thermique massique (inertie) du béton cellulaire retarde et amortit la transmission de la chaleur (déphasage thermique), ce que ce modèle stationnaire ignore totalement.
    2.  *Linéarisation des échanges :* Le coefficient $h_{\text{ext}}$ englobe convection et rayonnement. Or, le rayonnement obéit à la loi de Stefan-Boltzmann ($\propto T^4$), rendant le problème non-linéaire. L'utilisation d'un $h_{\text{ext}}$ constant est une approximation acceptable pour de faibles écarts de température mais induit une erreur systématique.
    3.  *Conditions aux limites hétérogènes :* Le vent modifie localement le coefficient de convection $h_{\text{ext}}$ (loi de Nusselt dépendante de la vitesse du vent), et l'orientation de la façade change l'intensité réelle du rayonnement reçu au cours de la journée.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
