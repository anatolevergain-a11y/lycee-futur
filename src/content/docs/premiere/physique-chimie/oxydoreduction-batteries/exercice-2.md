---
title: "Exercice 2 : Corrosion des structures métalliques en mer"
description: "Application pratique du chapitre Oxydoréduction et batteries"
---

### 🌐 Contexte concret

Les structures en acier (alliage principalement composé de fer $Fe$) plongées en milieu marin subissent une dégradation progressive appelée corrosion. En présence d'eau salée (qui joue le rôle d'électrolyte) et de dioxygène dissous $O_2(aq)$, le fer métallique s'oxyde pour former de la rouille. Pour protéger ces structures (comme les piliers de plateformes pétrolières ou les coques de bateaux), on utilise parfois une technique dite de "protection cathodique" en y attachant des anodes sacrificielles en zinc. 

Nous allons étudier ici le mécanisme chimique de cette corrosion et comprendre le rôle protecteur du zinc.

Données utiles :
* Couples oxydant/réducteur potentiels : $O_2(aq) / H_2O$, $Fe^{2+}(aq) / Fe(s)$, $Zn^{2+}(aq) / Zn(s)$.
* Le fer $Fe(s)$ se transforme d'abord en ions ferreux $Fe^{2+}(aq)$.

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Identification des espèces :** Définir ce qu'est un oxydant et un réducteur selon le programme de Première. Identifier parmi les espèces chimiques du texte ($Fe(s)$, $O_2(aq)$, $H_2O$) celle qui joue le rôle de réducteur et celle qui joue le rôle d'oxydant lors de la corrosion du fer.
2. **Demi-équations électroniques :** Écrire la demi-équation électronique associée au couple du fer $Fe^{2+}(aq) / Fe(s)$ et celle associée au couple du dioxygène en milieu acide/neutre $O_2(aq) / H_2O$ (l'eau intervenant du côté des produits). Préciser pour chacune s'il s'agit d'une oxydation ou d'une réduction.
3. **Bilan redox :** En déduire l'équation de la réaction d'oxydoréduction modélisant la corrosion du fer par le dioxygène.
4. **Protection cathodique :** Le zinc $Zn(s)$ a un potentiel standard d'oxydoréduction inférieur à celui du fer. Si l'on fixe un bloc de zinc sur la structure en acier, lequel des deux métaux va s'oxyder préférentiellement ? Justifier et expliquer pourquoi on qualifie cette méthode d'"anode sacrificielle".

---

### 💡 Indice

* **Question 1 & 2 :** Rappelle-toi qu'un oxydant *capte* des électrons (réduction) et qu'un réducteur *cède* des électrons (oxydation). Équilibre d'abord les éléments chimiques (hors $H$ et $O$), puis les atomes d'hydrogène avec $H^+$ (ou $H_2O$) et enfin les charges avec les électrons $e^-$.
* **Question 3 :** Pour obtenir l'équation bilan, il faut additionner les deux demi-équations de façon à ce que le nombre d'électrons cédés soit égal au nombre d'électrons captés.
* **Question 4 :** Plus un réducteur a un pouvoir réducteur fort (potentiel bas), plus il réagit facilement. Le zinc va "se sacrifier" à la place du fer.

---

### 📋 Correction détaillée pas à pas

#### 1. Identification des espèces
* Un **oxydant** est une espèce chimique capable de **capter** un ou plusieurs électrons.
* Un **réducteur** est une espèce chimique capable de **céder** un ou plusieurs électrons.
* Dans le texte, le **fer métallique $Fe(s)$** cède des électrons : il joue le rôle de **réducteur**.
* Le **dioxygène $O_2(aq)$** capte des électrons : il joue le rôle d'**oxydant**.

#### 2. Demi-équations électroniques
* Pour le couple du fer (oxydation du fer en ions ferreux) :
  $$Fe(s) \rightleftharpoons Fe^{2+}(aq) + 2\,e^-$$
  Il s'agit d'une **oxydation** (perte d'électrons).

* Pour le couple du dioxygène (réduction du dioxygène en eau) :
  $$O_2(aq) + 4\,H^+(aq) + 4\,e^- \rightleftharpoons 2\,H_2O(l)$$
  Il s'agit d'une **réduction** (gain d'électrons).

#### 3. Bilan redox
Pour obtenir l'équation de la réaction, le nombre d'électrons échangés doit être le même. Multiplions la première demi-équation par $2$ :
$$2 \times \left[ Fe(s) \rightleftharpoons Fe^{2+}(aq) + 2\,e^- \right]$$
Ce qui donne :
$$2\,Fe(s) \rightleftharpoons 2\,Fe^{2+}(aq) + 4\,e^-$$

En additionnant cette demi-équation avec celle du dioxygène, les $4\,e^-$ s'annulent :
$$2\,Fe(s) + O_2(aq) + 4\,H^+(aq) \longrightarrow 2\,Fe^{2+}(aq) + 2\,H_2O(l)$$
*Remarque : Les ions $Fe^{2+}$ formés réagiront ensuite avec d'autres espèces pour former la rouille hydratée.*

#### 4. Protection cathodique
* Le zinc $Zn(s)$ possède un potentiel standard inférieur à celui du fer ($E^\circ(Zn^{2+}/Zn) < E^\circ(Fe^{2+}/Fe)$). Cela signifie que **le zinc est un réducteur plus fort que le fer**.
* C'est donc le zinc qui va s'oxyder préférentiellement à la place du fer :
  $$Zn(s) \longrightarrow Zn^{2+}(aq) + 2\,e^-$$
* Le zinc se corrode "à la place" de la structure en acier, protégeant ainsi cette dernière : c'est pour cela qu'on le qualifie d'**anode sacrificielle**. Il faudra simplement remplacer ce bloc de zinc périodiquement.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
