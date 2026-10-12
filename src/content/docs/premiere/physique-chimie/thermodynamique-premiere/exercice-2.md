---
title: "Exercice 2 : Bilan d'énergie lors d'un changement d'état"
description: "Application pratique du chapitre Aspects énergétiques des transformations"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la transition énergétique, l'optimisation des systèmes thermiques domestiques ou industriels repose sur une compréhension rigoureuse des transferts thermiques associés aux changements d'état. L'utilisation de pompes à chaleur (PAC) ou de matériaux à changement de phase (MCP) pour le stockage thermique illustre l'importance de quantifier ces énergies.

Considérons un dispositif expérimental de laboratoire simulant un chauffe-eau thermodynamique. On cherche à vaporiser une masse $m = 500 \text{ g}$ d'un fluide frigorigène (le tétrafluoroéthane, ou R-134a) initialement à l'état liquide, maintenu à sa température de vaporisation sous pression atmosphérique, soit $T_{\text{vap}} = -26{,}1 \text{ °C}$.

**Données et propriétés physico-chimiques du fluide R-134a :**
* Masse molaire : $M = 102{,}03 \text{ g}\cdot\text{mol}^{-1}$
* Capacité thermique massique du liquide : $c_{\text{liq}} = 1{,}39 \text{ J}\cdot\text{g}^{-1}\cdot\text{K}^{-1}$
* Capacité thermique massique du gaz : $c_{\text{gaz}} = 0{,}70 \text{ J}\cdot\text{g}^{-1}\cdot\text{K}^{-1}$
* Énergie massique de vaporisation (chaleur latente) à $T_{\text{vap}}$ : $L_{\text{vap}} = 216 \text{ kJ}\cdot\text{kg}^{-1}$

*Remarque critique sur le modèle :* Les grandeurs tabulées telles que $L_{\text{vap}}$ sont mesurées sous des conditions de pression et de température thermodynamiques quasi-statiques. Dans les conditions industrielles réelles, les pertes thermiques vers le milieu extérieur et les irréversibilités du système conduisent systématiquement à un rendement inférieur à l'idéal théorique.

---

### ❓ Énoncé

1. **Définition et analyse dimensionnelle :** Rappeler l'expression littérale permettant de calculer l'énergie thermique $Q$ nécessaire au changement d'état d'un corps pur de masse $m$ à température constante, en fonction de l'énergie massique de changement d'état. Vérifier l'homogénéité de la formule par une analyse dimensionnelle.
2. **Calcul du bilan énergétique :** Calculer l'énergie thermique $Q_{\text{vap}}$ qu'il faut fournir au système pour vaporiser totalement la masse $m = 500 \text{ g}$ de R-134a à sa température de vaporisation. Exprimer le résultat en kilojoules ($\text{kJ}$).
3. **Analyse d'un protocole expérimental :** Lors de l'expérience, le dispositif de chauffage électrique utilisé a une puissance nominale $P = 150 \text{ W}$. Le système met une durée $\Delta t = 820 \text{ s}$ pour réaliser cette vaporisation complète à partir du liquide saturé. 
   Déterminer l'énergie réelle $Q_{\text{exp}}$ fournie par le dispositif, puis calculer le rendement énergétique $\eta$ de ce transfert.
4. **Esprit critique et limites du modèle :** Discuter des sources d'écart possibles entre l'énergie théorique $Q_{\text{vap}}$ et l'énergie réelle $Q_{\text{exp}}$. Proposer une hypothèse permettant d'expliquer pourquoi ce rendement n'est pas égal à $100 \text{ \%}$.

---

### 💡 Indice de méthode

* *Question 1 :* Utilisez la relation fondamentale liant l'énergie, la masse et l'énergie massique. Pensez à exprimer chaque grandeur avec ses unités légales du Système International (SI).
* *Question 2 :* Veillez à convertir la masse en kilogrammes ($\text{kg}$) afin de l'harmoniser avec l'unité de l'énergie massique de vaporisation exprimée en $\text{kJ}\cdot\text{kg}^{-1}$.
* *Question 3 :* Rappelez le lien entre la puissance électrique $P$, l'énergie $E$ (ou $Q$) et la durée $\Delta t$ par la relation $E = P \times \Delta t$. Le rendement se définit par le rapport entre l'énergie utile (théorique) et l'énergie reçue (réelle).
* *Question 4 :* Interrogez-vous sur le devenir de la chaleur : tout le flux thermique généré par la résistance traverse-t-il exclusivement le fluide ? Quid des parois du réceptacle ?

---

### 📋 Correction détaillée pas à pas

1. **Analyse dimensionnelle et expression littérale :**
   L'énergie thermique $Q$ nécessaire pour changer l'état d'une masse $m$ d'une substance à température constante est donnée par la relation :
   $$Q = m \times L_{\text{vap}}$$
   * Analyse dimensionnelle :
     * La masse $[m]$ a pour dimension la masse ($\text{M}$).
     * L'énergie massique de vaporisation $[L_{\text{vap}}]$ a pour dimension $\text{énergie} \times \text{masse}^{-1}$, soit $\text{M}\cdot\text{L}^2\cdot\text{T}^{-2}\cdot\text{M}^{-1} = \text{L}^2\cdot\text{T}^{-2}$ (ce qui correspond à des $\text{J}\cdot\text{kg}^{-1}$).
     * Le produit donne donc une dimension d'énergie ($\text{M}\cdot\text{L}^2\cdot\text{T}^{-2}$), ce qui correspond bien à des Joules ($\text{J}$). La formule est homogène.

2. **Calcul de l'énergie théorique de vaporisation $Q_{\text{vap}}$ :**
   * Données : $m = 500 \text{ g} = 0{,}500 \text{ kg}$ et $L_{\text{vap}} = 216 \text{ kJ}\cdot\text{kg}^{-1} = 216 \times 10^3 \text{ J}\cdot\text{kg}^{-1}$.
   * Application numérique :
     $$Q_{\text{vap}} = 0{,}500 \times (216 \times 10^3)$$
     $$Q_{\text{vap}} = 108 \times 10^3 \text{ J} = 108 \text{ kJ}$$
   L'énergie théorique nécessaire est de $108 \text{ kJ}$.

3. **Détermination de l'énergie réelle et du rendement $\eta$ :**
   * L'énergie électrique réellement consommée (et donc fournie au système par effet Joule) s'exprime par :
     $$Q_{\text{exp}} = P \times \Delta t$$
     $$Q_{\text{exp}} = 150 \text{ W} \times 820 \text{ s} = 123000 \text{ J} = 123 \text{ kJ}$$
   * Le rendement énergétique $\eta$ du transfert se calcule en faisant le rapport entre l'énergie utile (théorique pour accomplir la transition d'état) et l'énergie réellement consommée :
     $$\eta = \frac{Q_{\text{vap}}}{Q_{\text{exp}}} = \frac{108 \text{ kJ}}{123 \text{ kJ}} \approx 0{,}878$$
   Soit un rendement de l'ordre de $87{,}8 \text{ \%}$.

4. **Analyse critique et limites :**
   Le rendement calculé est inférieur à $100 \text{ \%}$ ($\eta \approx 87{,}8 \text{ \%}$). Plusieurs facteurs scientifiques permettent d'expliquer cet écart :
   * **Pertes thermiques (dissipation) :** Une partie de l'énergie thermique produite par la résistance n'est pas transférée au fluide R-134a, mais dissipée vers l'air ambiant à travers les parois du calorimètre ou du récipient non parfaitement isolant.
   * **Capacité thermique des équipements :** Une fraction de l'énergie fournie a servi à élever la température du conteneur lui-même (la cuve, la sonde thermique, la résistance) jusqu'à l'équilibre thermique, ce que le modèle simple ne prend pas en compte.
   * **Incertitudes expérimentales :** Les mesures de masse, de puissance électrique et de durée comportent des incertitudes-types qui se propagent sur le calcul final du rendement.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
