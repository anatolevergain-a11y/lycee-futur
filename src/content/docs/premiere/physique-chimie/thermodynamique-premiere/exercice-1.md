---
title: "Exercice 1 : Enthalpie de réaction et pouvoir calorifique des combustibles"
description: "Application pratique du chapitre Aspects énergétiques des transformations"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la transition énergétique, l'analyse thermodynamique des combustibles est primordiale pour comparer leur efficacité et leur impact environnemental. On s'intéresse ici à la combustion complète du propane ($\text{C}_3\text{H}_8\text{(g)}$), un gaz de pétrole liquéfié (GPL), souvent utilisé comme alternative aux combustibles liquides ou solides dans les zones non raccordées au gaz naturel.

La combustion complète du propane s'écrit selon l'équation bilan suivante :
$$\text{C}_3\text{H}_8\text{(g)} + 5\text{ O}_2\text{(g)} \longrightarrow 3\text{ CO}_2\text{(g)} + 4\text{ H}_2\text{O}\text{(l)}$$

**Données thermodynamiques et physico-chimiques à $298\text{ K}$ :**
*   Enthalpie molaire standard de réaction : $\Delta_r H^\circ = -2220 \text{ kJ}\cdot\text{mol}^{-1}$
*   Masse molaire du propane : $M(\text{C}_3\text{H}_8) = 44,1 \text{ g}\cdot\text{mol}^{-1}$
*   Masse volumique du propane liquide à $15^\circ\text{C}$ : $\rho = 0,51 \text{ kg}\cdot\text{L}^{-1}$
*   Capacité thermique massique de l'eau : $c_{\text{eau}} = 4,18 \text{ kJ}\cdot\text{kg}^{-1}\cdot^\circ\text{C}^{-1}$

*Note critique :* Le pouvoir calorifique d'un combustible quantifie l'énergie libérée par unité de masse ou de volume lors d'une combustion complète. Toutefois, l'utilisation pratique de cette énergie en milieu industriel ou domestique est toujours soumise à des pertes thermiques par les parois des chaudières, ce qui limite le rendement effectif des installations (généralement compris entre $85\,\%$ et $95\,\%$ pour les équipements modernes à condensation).

---

### ❓ Énoncé

1. Définir le pouvoir calorifique massique (souvent noté $PC$) d'un combustible à partir de son enthalpie molaire standard de réaction et de sa masse molaire. Calculer la valeur de $PC$ pour le propane (exprimée en $\text{kJ}\cdot\text{g}^{-1}$).
2. Un foyer domestique utilise une bouteille de propane contenant $m = 13 \text{ kg}$ de combustible. Déterminer l'énergie thermique totale $Q_{\text{th}}$ théoriquement libérable lors de la combustion complète de cette bouteille.
3. On souhaite chauffer $V = 200 \text{ L}$ d'eau (soit une masse $m_{\text{eau}} = 200 \text{ kg}$) de $15^\circ\text{C}$ à $75^\circ\text{C}$ à l'aide de cette bouteille de propane. En supposant un rendement thermique de la chaudière de $\eta = 82\,\%$, calculer la masse de propane réellement consommée pour cette opération.
4. Discuter brièvement de l'écart entre le modèle thermodynamique idéal (rendement de $100\,\%$) et la réalité expérimentale/industrielle, en citant deux facteurs limitants autres que les pertes thermiques par les parois.

---

### 💡 Indice de méthode

*   **Question 1 :** Le pouvoir calorifique massique représente l'énergie libérée par gramme de combustible. Pensez au signe de l'enthalpie de réaction : l'énergie thermique libérée est une grandeur positive. Utilisez la relation entre quantité de matière ($n$), masse ($m$) et masse molaire ($M$).
*   **Question 2 :** Multipliez le pouvoir calorifique massique par la masse totale de propane contenue dans la bouteille. Veillez à l'homogénéité des unités (passage des kilogrammes aux grammes ou adaptation directe).
*   **Question 3 :** Exprimez d'abord l'énergie utile $Q_{\text{utile}}$ nécessaire pour élever la température de l'eau en utilisant la relation $Q_{\text{utile}} = m_{\text{eau}} \cdot c_{\text{eau}} \cdot \Delta T$. Déduisez-en l'énergie thermique totale à fournir en tenant compte du rendement $\eta$, puis calculez la masse correspondante.
*   **Question 4 :** Interrogez-vous sur l'état physique des produits de la réaction (notamment l'eau formée sous forme de vapeur ou liquide) et sur l'exhaustivité de la réaction (combustion incomplète).

---

### 📋 Correction détaillée pas à pas

1.  **Calcul du pouvoir calorifique massique ($PC$) du propane :**
    L'enthalpie molaire standard de réaction $\Delta_r H^\circ$ correspond à l'énergie libérée pour une mole de propane consommée. Le pouvoir calorifique massique $PC$ correspond à l'opposé de l'enthalpie de réaction rapportée à la masse molaire :
    $$PC = \frac{-\Delta_r H^\circ}{M(\text{C}_3\text{H}_8)}$$
    Application numérique :
    $$PC = \frac{-(-2220 \text{ kJ}\cdot\text{mol}^{-1})}{44,1 \text{ g}\cdot\text{mol}^{-1}} \approx 50,34 \text{ kJ}\cdot\text{g}^{-1}$$
    *Soit environ $50,3 \text{ kJ}\cdot\text{g}^{-1}$ (ou $50,3 \text{ MJ}\cdot\text{kg}^{-1}$).*

2.  **Calcul de l'énergie thermique totale $Q_{\text{th}}$ pour une bouteille de $13 \text{ kg}$ :**
    La masse de propane est $m = 13 \text{ kg} = 13\,000 \text{ g}$.
    L'énergie libérée est :
    $$Q_{\text{th}} = PC \times m$$
    $$Q_{\text{th}} = 50,34 \text{ kJ}\cdot\text{g}^{-1} \times 13\,000 \text{ g} = 654\,420 \text{ kJ}$$
    *Soit environ $6,54 \times 10^5 \text{ kJ}$ ou $654 \text{ MJ}$.*

3.  **Détermination de la masse de propane consommée pour chauffer l'eau :**
    *   *Étape a :* Calcul de l'énergie utile $Q_{\text{utile}}$ nécessaire pour l'eau :
        $$\Delta T = T_{\text{finale}} - T_{\text{initiale}} = 75 - 15 = 60 \, ^\circ\text{C}$$
        $$Q_{\text{utile}} = m_{\text{eau}} \cdot c_{\text{eau}} \cdot \Delta T$$
        $$Q_{\text{utile}} = 200 \text{ kg} \times 4,18 \text{ kJ}\cdot\text{kg}^{-1}\cdot^\circ\text{C}^{-1} \times 60 \, ^\circ\text{C} = 50\,160 \text{ kJ}$$
    *   *Étape b :* Prise en compte du rendement $\eta$ pour trouver l'énergie totale $Q_{\text{fournie}}$ à prélever du combustible :
        $$\eta = \frac{Q_{\text{utile}}}{Q_{\text{fournie}}} \implies Q_{\text{fournie}} = \frac{Q_{\text{utile}}}{\eta}$$
        $$Q_{\text{fournie}} = \frac{50\,160 \text{ kJ}}{0,82} \approx 61\,170,7 \text{ kJ}$$
    *   *Étape c :* Calcul de la masse de propane $m_{\text{consommee}}$ :
        $$m_{\text{consommee}} = \frac{Q_{\text{fournie}}}{PC} = \frac{61\,170,7 \text{ kJ}}{50,34 \text{ kJ}\cdot\text{g}^{-1}} \approx 1215 \text{ g} = 1,22 \text{ kg}$$
        *Il faut donc consommer environ $1,22 \text{ kg}$ de propane.*

4.  **Discussion critique des limites du modèle :**
    Plusieurs facteurs expliquent l'écart entre la théorie thermodynamique et la réalité :
    *   *L'incomplétude de la combustion :* Dans la pratique, une combustion n'est jamais strictement totale. Il peut se former de petites quantités de monoxyde de carbone ($\text{CO}$) ou de suie ($\text{C}$), ce qui libère moins d'énergie que l'oxydation complète en dioxyde de carbone.
    *   *L'état de l'eau produite :* Selon la température des fumées rejetées, l'eau formée peut rester à l'état de vapeur (si les fumées sont chaudes). La valeur tabulée de $\Delta_r H^\circ$ intègre l'enthalpie de vaporisation de l'eau si l'on considère le pouvoir calorifique inférieur (PCI) ou supérieur (PCS). Si la chaudière ne condense pas les vapeurs d'eau, la chaleur latente de vaporisation n'est pas récupérée, réduisant l'efficacité énergétique globale par rapport au modèle théorique maximal.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
