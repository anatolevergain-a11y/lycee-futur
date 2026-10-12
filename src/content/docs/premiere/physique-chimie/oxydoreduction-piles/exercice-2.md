---
title: "Exercice 2 : Principes d'oxydoréduction et stockage d'énergie"
description: "Application pratique du chapitre Oxydoréduction et énergie chimique"
---

### 🌐 Contexte & Données scientifiques

La transition énergétique actuelle repose en grande partie sur le développement de systèmes de stockage électrochimique performants. Parmi eux, l'accumulateur au lithium-ion ($Li-ion$) est omniprésent, mais son bilan environnemental et sa criticité d'approvisionnement incitent à étudier des alternatives, telles que la batterie sodium-ion ($Na-ion$) ou les piles à combustible à dihydrogène.

Le principe fondamental de ces technologies repose sur des réactions d'oxydoréduction spontanées (en mode générateur) ou forcées (en mode récepteur). 

Considérons une demi-pile mettant en jeu le couple oxydant/réducteur du sodium métallique et de ses ions, modélisé par le couple $Na^+_{(aq)} / Na_{(s)}$ et le couple du dioxygène $O_2_{(g)} / H_2O_{(l)}$ en milieu acide.

**Données thermodynamiques et physiques à $298\text{ K}$ :**
*   Potentiel standard de réduction du couple $Na^+_{(aq)} / Na_{(s)}$ : $E^\circ(Na^+/Na) = -2{,}71\text{ V}$
*   Potentiel standard de réduction du couple $O_2_{(g)} / H_2O_{(l)}$ : $E^\circ(O_2/H_2O) = +1{,}23\text{ V}$
*   Constante de Faraday : $F \approx 96500\text{ C}\cdot\text{mol}^{-1}$
*   Masse molaire du sodium : $M(Na) = 23{,}0\text{ g}\cdot\text{mol}^{-1}$

Il est rappelé que la capacité massique $C_m$ d'un matériau d'électrode se calcule par la relation :
$$C_m = \frac{n(e^-) \cdot F}{m_{actif}}$$
où $n(e^-)$ est la quantité d'électrons échangée et $m_{actif}$ la masse du réactif engagé.

---

### ❓ Énoncé

1.  **Modélisation microscopique :** Écrire les demi-équations électroniques associées aux deux couples présentés dans le contexte, en précisant s'il s'agit d'une oxydation ou d'une réduction. En déduire l'équation bilan de la réaction chimique globale modélisant le fonctionnement du système thermodynamique.
2.  **Analyse énergétique :** Calculer la force électromotrice standard $E^\circ$ de cette pile potentielle. Commenter ce résultat quant à la spontanéité de la réaction thermodynamique.
3.  **Performance et stockage :** Calculer la capacité massique théorique $C_m$ (exprimée en $\text{A}\cdot\text{h}\cdot\text{kg}^{-1}$) du sodium métallique utilisé comme réactif réducteur. 
4.  **Esprit critique et limites du modèle :** En pratique, l'utilisation du sodium métallique pur dans un dispositif électrochimique présente des défis technologiques majeurs (réaction violente avec l'eau, formation de dendrites provoquant des courts-circuits internes). De plus, la tension réelle mesurée aux bornes d'un accumulateur diffère de sa valeur théorique calculée en circuit ouvert (phénomène de surtension et résistance interne). Discutez brièvement de l'écart entre la modélisation thermodynamique idéale et la faisabilité industrielle.

---

### 💡 Indice de méthode

*   **Question 1 :** Respectez rigoureusement la conservation de la charge électrique et des éléments chimiques. L'oxydation libère des électrons (du côté des réducteurs), la réduction les consomme (du côté des oxydants).
*   **Question 2 :** La force électromotrice standard d'une pile est définie par $E^\circ = E^\circ(\text{cathode}) - E^\circ(\text{anode})$, l'anode étant le siège de l'oxydation et la cathode le siège de la réduction. Une valeur strictement positive indique une réaction spontanée dans le sens direct.
*   **Question 3 :** Exprimez la masse $m$ en fonction de la quantité de matière $n(Na)$ et de la masse molaire $M(Na)$. Attention à la conversion des coulombs en Ampères-heures ($\text{A}\cdot\text{h}$ sachant que $1\text{ A}\cdot\text{h} = 3600\text{ C}$).

---

### 📋 Correction détaillée pas à pas

1.  **Modélisation microscopique :**
    *   Pour le couple du sodium : le sodium métallique $Na_{(s)}$ subit une oxydation pour donner l'ion sodium $Na^+_{(aq)}$.
        $$Na_{(s)} \rightleftharpoons Na^+_{(aq)} + 1\text{ e}^- \quad (\text{Oxydation})$$
    *   Pour le couple du dioxygène en milieu acide : l'oxydant $O_2_{(g)}$ subit une réduction pour former de l'eau $H_2O_{(l)}$.
        $$O_2_{(g)} + 4\text{ H}^+_{(aq)} + 4\text{ e}^- \rightleftharpoons 2\text{ H}_2\text{O}_{(l)} \quad (\text{Réduction})$$
    *   Pour obtenir l'équation bilan, on multiplie la première demi-équation par $4$ afin d'égaliser les transferts d'électrons :
        $$4\text{ Na}_{(s)} + O_2_{(g)} + 4\text{ H}^+_{(aq)} \longrightarrow 4\text{ Na}^+_{(aq)} + 2\text{ H}_2\text{O}_{(l)}$$

2.  **Analyse énergétique :**
    *   Le réducteur le plus fort ($Na$) subit l'oxydation (anode, potentiel le plus bas : $-2{,}71\text{ V}$).
    *   L'oxydant le plus fort ($O_2$) subit la réduction (cathode, potentiel le plus haut : $+1{,}23\text{ V}$).
    *   La force électromotrice standard $E^\circ$ du système vaut :
        $$E^\circ = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = 1{,}23 - (-2{,}71) = 3{,}94\text{ V}$$
    *   *Conclusion :* $E^\circ > 0$, la constante d'équilibre thermodynamique associée à cette réaction est extrêmement grande ($\mathcal{K} \gg 1$). La transformation chimique modélisée est donc thermodynamiquement totale et spontanée.

3.  **Performance et stockage :**
    *   D'après la demi-équation du sodium, $1\text{ mol}$ de $Na$ libère $1\text{ mol}$ d'électrons ($n(e^-) = n(Na)$).
    *   La quantité d'électricité maximale $Q$ théorique pour une masse $m(Na) = 1\text{ kg} = 1000\text{ g}$ est :
        $$Q = n(e^-) \cdot F = \frac{m(Na)}{M(Na)} \cdot F = \frac{1000}{23{,}0} \times 96500 \approx 4{,}196 \times 10^6\text{ C}$$
    *   Convertissons cette charge en Ampères-heures ($\text{A}\cdot\text{h}$) :
        $$C_m = \frac{4{,}196 \times 10^6}{3600} \approx 1165\text{ A}\cdot\text{h}\cdot\text{kg}^{-1}$$
    *   La capacité massique théorique du sodium est donc d'environ $1{,}16 \times 10^3\text{ A}\cdot\text{h}\cdot\text{kg}^{-1}$.

4.  **Esprit critique et limites du modèle :**
    *   *Écarts modèle/réalité :* Le calcul précédent démontre l'attrait théorique du sodium (capacité élevée, potentiel très réducteur). Toutefois, le modèle thermodynamique suppose des conditions idéales (système à l'équilibre, réactifs purs, absence de réactions secondaires).
    *   *Limites cinétiques et sécuritaires :* Le sodium métallique réagit violemment et de façon exothermique avec l'eau, rendant ce système incompatible avec des électrolytes aqueux sans protections drastiques. De plus, lors des cycles de charge/décharge, la croissance de structures aiguës (dendrites) peut perforer le séparateur et provoquer un court-circuit interne, menant à l'emballement thermique.
    *   *Conclusion critique :* Un modèle scientifique (ici fondé sur les potentiels standard et la stœchiométrie) permet d'identifier des potentialités énergétiques majeures, mais l'ingénierie industrielle doit impérativement intégrer la cinétique chimique, les surtensions ohmiques et la sécurité des matériaux, ce qui explique l'écart entre la performance escomptée par le calcul et la réalité des accumulateurs commercialisés.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
