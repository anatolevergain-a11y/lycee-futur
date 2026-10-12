---
title: "Cours : Oxydoréduction et batteries"
description: "Synthèse officielle du cours et formules essentielles."
---

## 📌 1. Notions clés & Définitions

Une réaction d'oxydoréduction est une transformation chimique caractérisée par un **transfert d'électrons** entre deux espèces chimiques.

*   **Oxydant ($\text{Ox}$)** : Espèce chimique capable de **capter** un ou plusieurs électrons ($e^-$).
*   **Réducteur ($\text{Red}$)** : Espèce chimique capable de **céder** un ou plusieurs électrons ($e^-$).
*   **Couple oxydant/réducteur** : Noté $\text{Ox}/\text{Red}$, il est relié par une demi-équation électronique de la forme :
    $$\text{Ox} + n\,e^- \rightleftharpoons \text{Red}$$
*   **Oxydation** : Réoxidation d'une espèce chimique par **perte** d'électrons (le réducteur subit une oxydation). C'est une réaction qui se produit à l'**anode** dans une pile.
*   **Réduction** : Réduction d'une espèce chimique par **gain** d'électrons (l'oxydant subit une réduction). C'est une réaction qui se produit à la **cathode** dans une pile.
*   **Batterie / Pile** : Système électrochimique qui convertit de l'énergie chimique en énergie électrique grâce à des réactions d'oxydoréduction spontanées. Elle est constituée de deux demi-piles reliées par un pont salin (ou un séparateur) et un circuit extérieur.

---

## 📐 2. Formules et Propriétés fondamentales

*   **Méthode d'équilibrage d'une demi-équation redox** en milieu aqueux :
    1. Équilibrer l'élément chimique central (autre que $\text{H}$ et $\text{O}$).
    2. Équilibrer l'oxygène $\text{O}$ en ajoutant des molécules d'eau $\text{H}_2\text{O}$.
    3. Équilibrer l'hydrogène $\text{H}$ en ajoutant des ions hydrogène $\text{H}^+$.
    4. Équilibrer la charge électrique en ajoutant des électrons $e^-$.

*   **Équation bilan** : 
    Elle s'obtient en additionnant deux demi-équations (l'une écrite dans le sens de la réduction, l'autre dans le sens de l'oxydation) de manière à ce qu'aucun électron n'apparaisse dans le bilan global.

*   **Quantité d'électricité $Q$ débitée par une pile** :
    $$Q = I \times \Delta t = n(e^-) \times F$$
    *   $Q$ : Quantité d'électricité en coulombs ($\text{C}$)
    *   $I$ : Intensité du courant en ampères ($\text{A}$)
    *   $\Delta t$ : Durée de fonctionnement en secondes ($\text{s}$)
    *   $n(e^-)$ : Quantité d'électrons échangés en moles ($\text{mol}$)
    *   $F$ : Constante de Faraday ($\approx 96\,500 \text{ C}\cdot\text{mol}^{-1}$)

*   **Capacité d'une batterie** :
    Souvent exprimée en Ampères-heures ($\text{A}\cdot\text{h}$) :
    $$Q_{\max} = n(e^-)_{\max} \times F$$

---

## 💡 3. Exemple d'application résolu (Pas à pas)

**Énoncé :**
On étudie la pile $\text{Zn}/\text{Cu}$. Les couples en présence sont $\text{Zn}^{2+}_{(aq)}/\text{Zn}_{(s)}$ et $\text{Cu}^{2+}_{(aq)}/\text{Cu}_{(s)}$. 
Écrire les demi-équations aux électrodes sachant que le zinc est oxydé par les ions cuivre $\text{Cu}^{2+}$. En déduire l'équation bilan de la réaction.

**Résolution :**

*   **Étape 1 : Identifier les réactifs et les sens des demi-équations.**
    *   Le texte indique que le zinc $\text{Zn}_{(s)}$ est oxydé (il perd des électrons). C'est le réducteur du couple $\text{Zn}^{2+}/\text{Zn}$.
    *   Les ions cuivre $\text{Cu}^{2+}$ subissent donc la réduction (ils gagnent des électrons). C'est l'oxydant du couple $\text{Cu}^{2+}/\text{Cu}$.

*   **Étape 2 : Écrire la demi-équation de réduction (à la cathode).**
    $$\text{Cu}^{2+}_{(aq)} + 2\,e^- \rightleftharpoons \text{Cu}_{(s)}$$

*   **Étape 3 : Écrire la demi-équation d'oxydation (à l'anode).**
    On écrit le couple du zinc dans le sens de l'oxydation (de droite à gauche) :
    $$\text{Zn}_{(s)} \rightleftharpoons \text{Zn}^{2+}_{(aq)} + 2\,e^-$$

*   **Étape 4 : Établir l'équation bilan.**
    On additionne les deux demi-équations en s'assurant que le nombre d'électrons cédés est égal au nombre d'électrons captés. Ici, il y a $2\,e^-$ de chaque côté, les électrons s'éliminent directement :
    $$\text{Zn}_{(s)} + \text{Cu}^{2+}_{(aq)} \rightarrow \text{Zn}^{2+}_{(aq)} + \text{Cu}_{(s)}$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour les examens

1.  **Attention au sens des flèches :** 
    Une demi-équation s'écrit avec un signe $\rightleftharpoons$ (équilibre), mais l'équation bilan d'une pile ou d'une réaction acido-basique/redox imposée utilise une flèche simple $\rightarrow$ dans le sens de la transformation spontanée étudiée.
2.  **Oublier la conservation de la charge :** 
    Vérifiez toujours que la somme des charges de part et d'autre de votre demi-équation est identique grâce à l'ajout des électrons $e^-$.
3.  **Confusion Anode / Cathode (Le piège classique) :** 
    *   À l'**anode**, il y a toujours **A**noxydation (Oxydation commence par une voyelle, Anode aussi).
    *   À la **cathode**, il y a toujours **Ré**duction (Réduction commence par une consonne, Cathode aussi).
    *   *Dans une pile (générateur)* : l'anode est la borne négative (pôle $-$) et la cathode est la borne positive (pôle $+$).
4.  **Unités pour le calcul de $Q$ :** 
    Pour utiliser la formule $Q = I \times \Delta t$, veillez à convertir l'intensité $I$ en **Ampères** et le temps $\Delta t$ en **secondes** pour obtenir des Coulombs.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
