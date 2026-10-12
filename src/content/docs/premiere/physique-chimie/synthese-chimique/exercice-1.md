---
title: "Exercice 1 : Rendement d'une synthèse organique"
description: "Application pratique du chapitre Synthèse et caractérisation d'espèces chimiques"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'industrie pharmaceutique, la synthèse de l'aspirine (acide acétylsalicylique, noté $\text{C}_9\text{H}_8\text{O}_4$) est réalisée par action de l'anhydride éthanoïque sur l'acide salicylique ($\text{C}_7\text{H}_6\text{O}_3$). L'équation de la réaction modélisant cette transformation totale est :

$$\text{C}_7\text{H}_6\text{O}_3\text{ (s)} + \text{C}_4\text{H}_6\text{O}_3\text{ (l)} \rightarrow \text{C}_9\text{H}_8\text{O}_4\text{ (s)} + \text{C}_2\text{H}_4\text{O}_2\text{ (l)}$$

Pour optimiser le protocole expérimental en laboratoire de lycée, un groupe d'élèves réalise la synthèse en introduisant :
- Une masse $m_1 = 3{,}00 \text{ g}$ d'acide salicylique (réactif limitant potentiel).
- Un volume $V_2 = 5{,}00 \text{ mL}$ d'anhydride éthanoïque (réactif introduit en large excès).

Après chauffage, recristallisation et filtration, les élèves obtiennent une masse expérimentale d'aspirine pure séchée $m_{\text{exp}} = 2{,}85 \text{ g}$.

**Données physico-chimiques et annexes :**
- Masses molaires atomiques : $M(\text{H}) = 1{,}0 \text{ g}\cdot\text{mol}^{-1}$ ; $M(\text{C}) = 12{,}0 \text{ g}\cdot\text{mol}^{-1}$ ; $M(\text{O}) = 16{,}0 \text{ g}\cdot\text{mol}^{-1}$.
- Masse volumique de l'anhydride éthanoïque : $\rho_2 = 1{,}08 \text{ g}\cdot\text{mL}^{-1}$.
- *Analyse critique des données :* La pureté du solide obtenu, vérifiée par chromatographie sur couche mince (CCM) et mesure de température de fusion, est estimée à $98\,\%$. 

---

### ❓ Énoncé

1. Calculer la quantité de matière initiale $n_1$ d'acide salicylique et la quantité de matière initiale $n_2$ d'anhydride éthanoïque introduites dans le réacteur. Justifier l'affirmation selon laquelle l'anhydride éthanoïque est introduit en excès.
2. Définir la notion d'avancement maximal $x_{\text{max}}$ et déterminer sa valeur en mol. En déduire la masse maximale théorique $m_{\text{max}}$ d'aspirine que l'on pourrait espérer obtenir si la réaction était totale et le produit récupéré sans perte.
3. Calculer le rendement brut de la synthèse. Comment l'analyse de pureté ($98\,\%$) modifie-t-elle la valeur du rendement en aspirine réellement obtenue ? Proposer une démarche rigoureuse pour corriger ce calcul.
4. D'un point de vue technologique et environnemental, un rendement de $100\,\%$ est-il toujours souhaitable ou même possible en chimie organique industrielle ? Discuter en vous appuyant sur la notion d'équilibre, le coût énergétique des séparations et la gestion des sous-produits.

---

### 💡 Indice de méthode

- **Question 1 :** Utilisez la relation liant la masse molaire, la masse et la quantité de matière, ainsi que celle reliant la masse volumique, le volume et la masse ($\rho = \frac{m}{V}$).
- **Question 2 :** Dressez le tableau d'avancement du système. Le réactif limitant est celui qui s'annule en premier.
- **Question 3 :** Le rendement $\eta$ s'exprime par le rapport entre la quantité de matière réelle (ou la masse réelle corrigée de la pureté) et la quantité maximale théorique. Attention à bien distinguer masse brute obtenue et masse de produit pur.
- **Question 4 :** Mobilisez votre esprit critique : un rendement élevé ne présage ni de la vitesse de réaction, ni de l'impact environnemental (principe de la chimie verte, solvants, traitements des effluents).

---

### 📋 Correction détaillée pas à pas

**1. Calcul des quantités de matière initiales**
*   **Acide salicylique ($\text{C}_7\text{H}_6\text{O}_3$) :**
    La masse molaire est :
    $$M_1 = 7 \times 12{,}0 + 6 \times 1{,}0 + 3 \times 16{,}0 = 84{,}0 + 6{,}0 + 48{,}0 = 138{,}0 \text{ g}\cdot\text{mol}^{-1}$$
    La quantité de matière initiale est :
    $$n_1 = \frac{m_1}{M_1} = \frac{3{,}00}{138{,}0} \approx 2{,}17 \times 10^{-2} \text{ mol}$$

*   **Anhydride éthanoïque ($\text{C}_4\text{H}_6\text{O}_3$) :**
    La masse de réactif introduite est :
    $$m_2 = \rho_2 \times V_2 = 1{,}08 \text{ g}\cdot\text{mL}^{-1} \times 5{,}00 \text{ mL} = 5{,}40 \text{ g}$$
    Sa masse molaire est :
    $$M_2 = 4 \times 12{,}0 + 6 \times 1{,}0 + 3 \times 16{,}0 = 48{,}0 + 6{,}0 + 48{,}0 = 102{,}0 \text{ g}\cdot\text{mol}^{-1}$$
    La quantité de matière initiale est :
    $$n_2 = \frac{m_2}{M_2} = \frac{5{,}40}{102{,}0} \approx 5{,}29 \times 10^{-2} \text{ mol}$$

    *Conclusion :* On constate que $n_2 > n_1$. D'après l'équation stœchiométrique (stœchiométrie $1:1$), l'anhydride éthanoïque est bien introduit en excès par rapport à l'acide salicylique, qui constitue le réactif limitant.

**2. Détermination de l'avancement maximal et de la masse théorique**
*   D'après le tableau d'avancement, la réaction étant supposée totale, le réactif limitant ($1$) s'épuise en premier :
    $$n_1 - x_{\text{max}} = 0 \implies x_{\text{max}} = n_1 = 2{,}17 \times 10^{-2} \text{ mol}$$
*   La quantité maximale d'aspirine formée est $n(\text{aspirine})_{\text{max}} = x_{\text{max}}$.
*   La masse molaire de l'aspirine ($\text{C}_9\text{H}_8\text{O}_4$) est :
    $$M(\text{aspirine}) = 9 \times 12{,}0 + 8 \times 1{,}0 + 4 \times 16{,}0 = 108{,}0 + 8{,}0 + 64{,}0 = 180{,}0 \text{ g}\cdot\text{mol}^{-1}$$
*   La masse maximale théorique $m_{\text{max}}$ est donc :
    $$m_{\text{max}} = n(\text{aspirine})_{\text{max}} \times M(\text{aspirine}) = 2{,}17 \times 10^{-2} \times 180{,}0 \approx 3{,}91 \text{ g}$$

**3. Calcul du rendement brut et correction tenant compte de la pureté**
*   *Calcul du rendement brut (en considérant le solide obtenu pur à $100\,\%$) :*
    $$\eta_{\text{brut}} = \frac{m_{\text{exp}}}{m_{\text{max}}} = \frac{2{,}85}{3{,}91} \approx 0{,}729 \text{ soit } 72{,}9\,\%$$
*   *Correction rigoureuse liée à la pureté :*
    Le solide recueilli n'est pas constitué uniquement d'aspirine, sa pureté est de $98\,\%$. La masse réelle d'aspirine pure ($m_{\text{pur}}$) contenue dans les $2{,}85 \text{ g}$ de produit brut est :
    $$m_{\text{pur}} = m_{\text{exp}} \times 0{,}98 = 2{,}85 \times 0{,}98 = 2{,}793 \text{ g}$$
*   Le véritable rendement chimique de la synthèse est donc :
    $$\eta = \frac{m_{\text{pur}}}{m_{\text{max}}} = \frac{2{,}793}{3{,}91} \approx 0{,}714 \text{ soit } 71{,}4\,\%$$
    *Analyse critique :* Ne pas tenir compte de la pureté conduirait à surestimer l'efficacité de la réaction chimique en attribuant la masse des impuretés (traces de réactifs résiduels ou sous-produits adsorbés) à l'espèce chimique désirée.

**4. Discussion scientifique et perspectives industrielles**
Un rendement de $100\,\%$ est une limite idéale rarement atteinte ou recherchée à tout prix en industrie chimique, pour plusieurs raisons fondamentales :
*   **Aspects thermodynamiques et cinétiques :** Certaines réactions sont limitées par des équilibres chimiques. Forcer un rendement total nécessite des excès considérables de réactifs ou l'élimination continue des produits, ce qui augmente le coût énergétique.
*   **Coût énergétique et environnemental :** Pousser une synthèse vers un rendement unitaire exige souvent des étapes de purification supplémentaires (cristallisations répétées, chromatographies, distillation) qui consomment beaucoup d'énergie, de solvants organiques, et génèrent des déchets toxiques (contraire des principes de la *chimie verte*).
*   **Compromis technico-économique :** À l'échelle industrielle, un rendement de $70\,\%$ à $80\,\%$ avec un coût de production bas et un traitement aisé des sous-produits est souvent économiquement plus viable qu'un rendement de $98\,\%$ nécessitant des conditions drastiques et des réactifs onéreux.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
