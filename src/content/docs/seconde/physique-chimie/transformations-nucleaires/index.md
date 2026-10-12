---
title: "Cours : Transformations nucléaires et électricité"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

*   **Structure de l'atome et du noyau :** 
    Un atome est constitué d'un noyau central autour duquel gravitent des électrons. Le noyau atomique est composé de nucléons : des protons (chargés positivement) et des neutrons (électriquement neutres). Le nombre de protons est le numéro atomique, noté $Z$. Le nombre total de nucléons est le nombre de masse, noté $A$. Un nucléide est caractérisé par son symbole $^A_Z\text{X}$.

*   **Isotopes :** 
    Des noyaux isotopes sont des noyaux qui possèdent le même nombre de protons $Z$ (donc le même élément chimique) mais un nombre de neutrons différent (donc un nombre de masse $A$ différent).

*   **Radioactivité :** 
    La radioactivité est une transformation nucléaire naturelle et spontanée au cours de laquelle un noyau instable (dit noyau père) se désintègre en un noyau plus stable (dit noyau fils) en émettant un rayonnement (particules $\alpha$, $\beta^-$, $\beta^+$ ou rayonnement électromagnétique $\gamma$) et de l'énergie. Cette désintégration est aléatoire et inéluctable pour un noyau donné.

*   **Lois de conservation (lois de Soddy) :** 
    Au cours d'une transformation nucléaire, il y a conservation :
    - du nombre de charges (ou nombre de protons) $Z$ ;
    - du nombre de nucléons $A$.

*   **Courant électrique et tension :** 
    - L'intensité du courant électrique $I$ (en ampères, $\text{A}$) mesure le débit de charge électrique qui traverse une section de conducteur.
    - La tension électrique $U$ (en volts, $\text{V}$) entre deux points mesure la différence d'état électrique (ou différence de potentiel) entre ces deux points.

---

## 📐 2. Formules et Propriétés fondamentales

*   **Représentation symbolique d'un noyau :**
    $$^A_Z\text{X}$$
    Où $\text{X}$ est le symbole chimique, $A$ le nombre de masse et $Z$ le numéro atomique. Le nombre de neutrons $N$ s'obtient par la relation :
    $$N = A - Z$$

*   **Équation d'une désintégration nucléaire :**
    Soit la désintégration générale d'un noyau père $^A_Z\text{X}$ donnant un noyau fils $^A_1_{Z_1}\text{Y}$ et une particule $^A_2_{Z_2}\text{P}$ :
    $$^A_Z\text{X} \longrightarrow \phantom{i}^{A_1}_{Z_1}\text{Y} + \phantom{i}^{A_2}_{Z_2}\text{P}$$
    Les lois de conservation s'écrivent :
    $$\begin{cases} 
    A = A_1 + A_2 \\ 
    Z = Z_1 + Z_2 
    \end{cases}$$

*   **Quantité d'électricité :**
    La charge électrique $Q$ (en coulombs, $\text{C}$) transportée par un courant d'intensité $I$ (en ampères, $\text{A}$) constante pendant une durée $\Delta t$ (en secondes, $\text{s}$) est donnée par :
    $$Q = I \times \Delta t$$

*   **Loi d'Ohm dans un resistor :**
    La tension $U$ aux bornes d'un resistor de résistance $R$ (en ohms, $\Omega$) parcouru par un courant d'intensité $I$ est :
    $$U = R \times I$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Le noyau de carbone 14, noté $^{14}_{\ 6}\text{C}$, est radioactif $\beta^-$. Il se désintègre en un noyau d'azote ($\text{N}$) en émettant un électron (noté $^0_{-1}\text{e}$). 
1. Écrire l'équation de cette désintégration nucléaire.
2. Vérifier les lois de conservation.

**Résolution :**
1. L'équation de la désintégration s'écrit sous la forme générale :
   $$^{14}_{\ 6}\text{C} \longrightarrow \phantom{i}^A_Z\text{N} + \phantom{i}^0_{-1}\text{e}$$
   
2. Appliquons les lois de conservation de Soddy pour déterminer $A$ et $Z$ du noyau d'azote :
   - Conservation du nombre de masse $A$ :
     $$14 = A + 0 \implies A = 14$$
   - Conservation du nombre de charge $Z$ :
     $$6 = Z + (-1) \implies Z = 6 - (-1) = 7$$

   Le noyau fils est donc le $^{14}_{\ 7}\text{N}$. 

   L'équation bilan complète et équilibrée est :
   $$^{14}_{\ 6}\text{C} \longrightarrow \phantom{i}^{14}_{\ 7}\text{N} + \phantom{i}^0_{-1}\text{e}$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention au sens des flèches et des charges :** 
    Lorsqu'un électron (ou particule $\beta^-$) est émis, sa charge est de $-1$ et son nombre de masse est $0$. Ne pas oublier le signe "moins" dans $^0_{-1}\text{e}$, qui est indispensable pour vérifier la conservation de $Z$.

*   **Confusion entre fusion et fission :** 
    Ne pas confondre la radioactivité (désintégration spontanée d'un noyau instable) avec la fission (éclatement d'un noyau lourd provoqué par un neutron) et la fusion (union de deux noyaux légers).

*   **Rigueur dans les unités et conversions :** 
    Dans la formule $Q = I \times \Delta t$, veillez impérativement à exprimer l'intensité $I$ en ampères ($\text{A}$) et la durée $\Delta t$ en secondes ($\text{s}$) pour obtenir une charge $Q$ en coulombs ($\text{C}$). Si $\Delta t$ est donnée en minutes ou en heures, la conversion est obligatoire.

*   **Écriture des équations :** 
    Vérifiez toujours systématiquement vos équations nucléaires en faisant la somme des $A$ en haut de chaque côté de la flèche, puis la somme des $Z$ en bas. Les deux bilans doivent être strictement égaux.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
