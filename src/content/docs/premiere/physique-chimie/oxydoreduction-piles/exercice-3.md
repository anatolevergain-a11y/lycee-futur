---
title: "Exercice 3 : Phénomène de corrosion et protection des matériaux"
description: "Application pratique du chapitre Oxydoréduction et énergie chimique"
---

### 🌐 Contexte & Données scientifiques

La corrosion des métaux, et en particulier la rouille du fer, représente un défi économique et sécuritaire majeur. Ce phénomène spontané est une réaction d'oxydoréduction thermodynamiquement favorable entre le métal et les oxydants présents dans l'environnement (dioxygène $O_{2(g)}$ et ions oxonium $H^+_{(aq)}$ en milieu acide).

Pour protéger les infrastructures (ponts, coques de navires, canalisations), différentes stratégies électrochimiques sont employées. L'une d'elles consiste à relier le métal à protéger (par exemple, le fer $Fe$) à un métal plus réducteur, appelé « anode sacrificielle » (souvent le zinc $Zn$ ou le magnésium $Mg$).

Afin d'évaluer la faisabilité et l'efficacité d'une protection cathodique par anode de zinc, on dispose des potentiels standard de réduction du système à $25\text{ }^\circ\text{C}$ :
* Couple $Fe^{2+}_{(aq)} / Fe_{(s)}$ : $E^\circ(Fe^{2+}/Fe) = -0,44\text{ V}$
* Couple $Zn^{2+}_{(aq)} / Zn_{(s)}$ : $E^\circ(Zn^{2+}/Zn) = -0,76\text{ V}$
* Couple $O_{2(g)} / H_2O_{(l)}$ (en milieu neutre) : $E^\circ(O_2/H_2O) = +1,23\text{ V}$

*Données physiques et constantes :*
* Constante de Faraday : $F \approx 96500\text{ C}\cdot\text{mol}^{-1}$
* Masse Molaire du zinc : $M(Zn) = 65,4\text{ g}\cdot\text{mol}^{-1}$
* Masse Molaire du fer : $M(Fe) = 55,8\text{ g}\cdot\text{mol}^{-1}$

---

### ❓ Énoncé

1. **Modélisation thermodynamique :** En se basant sur les potentiels standard fournis, écrire l'équation de la réaction d'oxydation spontanée du fer en milieu oxygéné menant à la formation d'ions fer (II). Préciser l'oxydant et le réducteur.
2. **Principe de l'anode sacrificielle :** Expliquer, à l'aide des potentiels standard et d'arguments cinétiques/thermodynamiques, pourquoi la fixation d'un bloc de zinc sur une coque en fer protège cette dernière de l'oxydation, quitte à ce que le zinc se corrode préférentiellement.
3. **Dimensionnement et limites du modèle :** Une coque de navire subit une perte en fer estimée en moyenne à $m(Fe) = 112\text{ g}$ par an par zone immergée. 
   * Calculer la masse minimale de zinc $m(Zn)$ qu'il est théoriquement nécessaire de consommer chaque année pour assurer cette protection cathodique.
   * *Esprit critique :* Pourquoi ce calcul théorique ne représente-t-il qu'une limite basse (sous-estimation de la masse réelle de zinc à installer sur le navire) ? Citer au moins deux facteurs négligés par ce modèle massique simplificateur.

---

### 💡 Indice de méthode

* **Question 1 :** Identifie d'abord les deux demi-équations électroniques impliquées (l'oxydation du métal fer et la réduction du dioxygène en milieu neutre/aqueux), puis combine-les pour éliminer les électrons.
* **Question 2 :** Classe les réducteurs potentiels ($Fe$ et $Zn$) selon leur pouvoir réducteur croissant (lié à la valeur algébrique de leur potentiel standard). Lequel cède ses électrons en premier ?
* **Question 3 :** Établis un tableau d'avancement ou utilise l'égalité des quantités d'électrons échangés ($n(e^-)$) entre les demi-réactions d'oxydation du zinc et du fer pour relier leurs variations de quantité de matière. Pour l'esprit critique, interroge-toi sur l'uniformité du courant de corrosion et les réactions parasites (comme l'évolution de dihydrogène).

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation de la corrosion du fer
Les espèces en présence susceptibles de réagir sont le fer solide $Fe_{(s)}$ (réducteur) et le dioxygène dissous $O_{2(g)}$ (oxydant).
* Demi-équation du couple $O_{2(g)} / H_2O_{(l)}$ en milieu neutre :
  $$O_{2(g)} + 4\,H^+_{(aq)} + 4\,e^- \rightleftharpoons 2\,H_2O_{(l)}$$
  *(Note : En milieu neutre ou basique, on ajuste souvent avec les ions $OH^-$, mais le bilan formel conduit au même transfert d'électrons).*
* Demi-équation du couple $Fe^{2+}_{(aq)} / Fe_{(s)}$ (oxydation) :
  $$Fe_{(s)} \rightleftharpoons Fe^{2+}_{(aq)} + 2\,e^-$$

Pour obtenir l'équation bilan, on multiplie la seconde demi-équation par 2 afin d'égaliser le nombre d'électrons échangés ($4\,e^-$) :
$$2\,Fe_{(s)} + O_{2(g)} + 4\,H^+_{(aq)} \rightarrow 2\,Fe^{2+}_{(aq)} + 2\,H_2O_{(l)}$$
* **Oxydant :** le dioxygène $O_{2(g)}$ (qui subit une réduction).
* **Réducteur :** le fer $Fe_{(s)}$ (qui subit une oxydation).

#### 2. Principe de l'anode sacrificielle
D'après les potentiels standard de réduction :
* $E^\circ(Zn^{2+}/Zn) = -0,76\text{ V}$
* $E^\circ(Fe^{2+}/Fe) = -0,44\text{ V}$

Puisque $E^\circ(Zn^{2+}/Zn) < E^\circ(Fe^{2+}/Fe)$, le zinc possède un pouvoir réducteur supérieur à celui du fer (il cède plus facilement ses électrons). 
Thermodynamiquement, en cas de couplage électrique direct entre le zinc et le fer en milieu corrosif, c'est le zinc qui s'oxyde préférentiellement selon :
$$Zn_{(s)} \rightarrow Zn^{2+}_{(aq)} + 2\,e^-$$
Les électrons libérés par l'oxydation du zinc affluent vers le fer, maintenant ce dernier sous forme réduite ou l'empêchant de s'oxyder. Le zinc « se sacrifie » en s'usant à la place du fer.

#### 3. Dimensionnement et limites du modèle
* **Calcul de la masse minimale de zinc :**
  La masse de fer oxydée est $m(Fe) = 112\text{ g}$.
  La quantité de matière de fer correspondante est :
  $$n(Fe) = \frac{m(Fe)}{M(Fe)} = \frac{112}{55,8} \approx 2,01\text{ mol}$$

  L'oxydation du fer libère 2 moles d'électrons par mole de $Fe$ oxydé (ou le fer passe de l'état 0 à +II). La quantité d'électrons échangés est :
  $$n(e^-) = 2 \times n(Fe) \approx 4,02\text{ mol}$$

  L'oxydation du zinc fournit également 2 moles d'électrons par mole de $Zn$ oxydé ($Zn \rightarrow Zn^{2+} + 2\,e^-$). La quantité de zinc nécessaire est donc stœchiométriquement égale à la quantité de fer "protégé" :
  $$n(Zn) = n(Fe) \approx 2,01\text{ mol}$$

  La masse minimale de zinc théorique est alors :
  $$m(Zn) = n(Zn) \times M(Zn) = 2,01 \times 65,4 \approx 131\text{ g}$$

* **Analyse critique et limites du modèle :**
  Ce résultat de $131\text{ g}$ est une limite basse (modèle idéal). En réalité, les ingénieurs doivent installer une masse de zinc nettement supérieure (souvent multipliée par un facteur 2 à 3) pour plusieurs raisons scientifiques :
  1. **Réactions parasites (cinétique et concurrence) :** En milieu marin, la réduction des ions $H^+$ ou $H_2O$ en dihydrogène $H_2$ peut consommer une partie des électrons fournis par l'anode sans participer directement à la protection, augmentant la consommation de zinc.
  2. **Passivation et usure non uniforme :** L'anode ne s'use pas de manière homogène sur toute sa surface (phénomène de creusement, résistance de contact ohmique de l'eau de mer). De plus, des produits de corrosion peuvent s'accumuler et diminuer l'efficacité du transfert de charge.
  3. **Facteurs environnementaux :** La salinité, la température, la vitesse d'écoulement de l'eau et le pH influencent fortement les vitesses cinétiques des réactions électrochimiques, rendant le modèle thermodynamique statique insuffisant pour prédire la durée de vie réelle sans marges de sécurité empiriques.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
