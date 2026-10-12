---
title: "Exercice 1 : Masse volumique et flotabilité des matériaux"
description: "Application pratique du chapitre Description des systèmes physiques"
---

### 🌐 Contexte & Données scientifiques

En science des matériaux et en génie maritime, la caractérisation d'un corps passe par l'étude de sa masse volumique, notée $\rho$ (rho). Cette grandeur macroscopique permet de relier la masse $m$ d'un échantillon à son volume $V$ selon la relation :

$$\rho = \frac{m}{V}$$

La condition physique régissant la flottaison d'un objet homogène non arrimé dans un fluide (comme l'eau) dépend principalement du rapport entre sa masse volumique $\rho_{\text{objet}}$ et celle du fluide environnant $\rho_{\text{fluide}}$. 

Toutefois, les applications industrielles (conception navale, éco-matériaux) nécessitent de nuancer cette approche théorique. Les données fournies ci-dessous intègrent des conditions expérimentales standard ($T = 20 \text{ \degree C}$, $P = 1 \text{ atm}$) et soulignent les limites des modèles parfaits.

*   **Masse volumique de l'eau douce de référence :** $\rho_{\text{eau}} = 1,00 \times 10^3 \text{ kg} \cdot \text{m}^{-3}$
*   **Masse volumique de l'eau de mer (salinité moyenne) :** $\rho_{\text{mer}} \approx 1,025 \times 10^3 \text{ kg} \cdot \text{m}^{-3}$ (variable selon la température et la latitude).
*   **Données expérimentales pour trois matériaux candidats à la conception d'une bouée de prélèvement océanographique :**
    *   **Matériau A (Polyéthylène haute densité - PEHD plein) :** $\rho_A = 960 \text{ kg} \cdot \text{m}^{-3}$ (Incertitude de mesure $\pm 5 \text{ kg} \cdot \text{m}^{-3}$).
    *   **Matériau B (Aluminium marin - alliage 5083) :** $\rho_B = 2,66 \times 10^3 \text{ kg} \cdot \text{m}^{-3}$.
    *   **Matériau C (Bois de balsa traité, poreux) :** $\rho_C$ variable, mesurée à $160 \text{ kg} \cdot \text{m}^{-3}$ à l'état sec, mais susceptible d'absorber jusqu'à $15 \%$ de son volume en eau après une immersion prolongée.

---

### ❓ Énoncé

1. Définir, à l'aide d'une phrase rigoureuse, ce que représente la valeur numérique de la masse volumique du matériau A, puis calculer le volume occupé par une masse $m_A = 480 \text{ g}$ de ce matériau.
2. Un technicien affirme : *"Un objet coule systématiquement dans l'eau dès lors que sa masse volumique est supérieure à celle de l'eau"*. En exploitant les données du **Matériau B**, analysez la validité de cette affirmation pour un bloc massif, puis discutez de la limite de ce modèle en considérant la géométrie de l'objet (exemple d'une coque de navire creuse).
3. On souhaite concevoir un corps flotteur cylindrique à l'aide du **Matériau C** (balsa). Le volume total du cylindre est $V_{\text{total}} = 2,0 \times 10^{-3} \text{ m}^3$. 
   * a. Calculer la masse du cylindre à l'état sec.
   * b. En déduire si le cylindre flotte dans l'eau douce. Justifier par un calcul d'ordre de grandeur.
4. **Esprit critique et prospective :** En tenant compte de la contrainte d'absorption d'eau du matériau C après plusieurs semaines d'immersion, calculez la nouvelle masse volumique apparente du matériau. Le flotteur conservera-t-il sa capacité à flotter ? Quels compromis technologiques un ingénieur doit-il arbitrer dans ce choix de matériau ?

---

### 💡 Indice de méthode

*   *Question 1 :* Veillez à convertir toutes les données dans les unités du Système International ($\text{kg}$ et $\text{m}^3$) avant d'effectuer les calculs littéraux transposés.
*   *Question 2 :* Distinguez bien la notion de **corps pur massif** de celle de **système ouvert ou creux** (présence d'air enfermé modifiant la masse volumique globale du système).
*   *Question 3 & 4 :* La masse totale d'un système composite (bois + eau absorbée) est la somme des masses de chaque constituant. La conservation du volume total est supposée pour simplifier le modèle.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse du Matériau A et calcul du volume
*   **Définition rigoureuse :** La masse volumique $\rho_A = 960 \text{ kg} \cdot \text{m}^{-3}$ signifie qu'un volume de $1 \text{ m}^3$ de polyéthylène haute densité possède une masse de $960 \text{ kg}$.
*   **Conversion des unités :** 
    $$m_A = 480 \text{ g} = 480 \times 10^{-3} \text{ kg} = 0,480 \text{ kg}$$
*   **Calcul du volume $V_A$ :** 
    À partir de la formule $\rho_A = \frac{m_A}{V_A}$, on isole $V_A$ :
    $$V_A = \frac{m_A}{\rho_A} = \frac{0,480 \text{ kg}}{960 \text{ kg} \cdot \text{m}^{-3}} = 5,00 \times 10^{-4} \text{ m}^3$$
    *(Soit $0,500 \text{ L}$).*

#### 2. Analyse critique de l'affirmation sur le Matériau B
*   **Analyse du bloc massif :** La masse volumique de l'aluminium marin est $\rho_B = 2660 \text{ kg} \cdot \text{m}^{-3}$. Puisque $\rho_B > \rho_{\text{eau}}$ ($2660 > 1000$), un bloc massif de ce matériau coule effectivement. L'affirmation est donc vraie **pour un système homogène et massif**.
*   **Limite du modèle géométrique :** Ce modèle omet l'influence de la forme. Si l'aluminium est mis en forme de coque creuse (contenant un grand volume d'air, dont $\rho_{\text{air}} \approx 1,2 \text{ kg} \cdot \text{m}^{-3}$), la masse volumique *moyenne* du système (coque + air intérieur) devient inférieure à celle de l'eau. C'est le principe de flottaison des navires en acier ou en aluminium. Le modèle simple basé uniquement sur la nature chimique du matériau montre ici ses limites.

#### 3. Étude du flotteur en bois de balsa (Matériau C)
*   **a. Masse du cylindre à l'état sec :**
    $$\rho_C = \frac{m_C}{V_{\text{total}}} \implies m_C = \rho_C \times V_{\text{total}}$$
    $$m_C = 160 \text{ kg} \cdot \text{m}^{-3} \times 2,0 \times 10^{-3} \text{ m}^3 = 0,320 \text{ kg} \text{ (soit } 320 \text{ g)}$$
*   **b. Condition de flottaison :**
    Puisque $\rho_C = 160 \text{ kg} \cdot \text{m}^{-3} < \rho_{\text{eau}} = 1000 \text{ kg} \cdot \text{m}^{-3}$, le cylindre de balsa sec **flotte** dans l'eau douce.

#### 4. Analyse prospective et prise en compte des limites expérimentales
*   **Calcul de la masse d'eau absorbée :**
    Le matériau absorbe $15 \%$ de son volume en eau. Le volume d'eau absorbée $V_{\text{eau}}$ est :
    $$V_{\text{eau}} = 0,15 \times V_{\text{total}} = 0,15 \times 2,0 \times 10^{-3} \text{ m}^3 = 3,0 \times 10^{-4} \text{ m}^3$$
    La masse de cette eau absorbée est :
    $$m_{\text{eau}} = \rho_{\text{eau}} \times V_{\text{eau}} = 1000 \text{ kg} \cdot \text{m}^{-3} \times 3,0 \times 10^{-4} \text{ m}^3 = 0,300 \text{ kg} \text{ (soit } 300 \text{ g)}$$
*   **Nouvelle masse totale et nouvelle masse volumique apparente $\rho_{\text{app}}$ :**
    $$m_{\text{total\_biboulé}} = m_C + m_{\text{eau}} = 0,320 \text{ kg} + 0,300 \text{ kg} = 0,620 \text{ kg}$$
    $$\rho_{\text{app}} = \frac{m_{\text{total\_biboulé}}}{V_{\text{total}}} = \frac{0,620 \text{ kg}}{2,0 \times 10^{-3} \text{ m}^3} = 310 \text{ kg} \cdot \text{m}^{-3}$$
*   **Conclusion sur la flottaison :** 
    On observe que $\rho_{\text{app}} = 310 \text{ kg} \cdot \text{m}^{-3} < \rho_{\text{eau}} = 1000 \text{ kg} \cdot \text{m}^{-3}$. **Le flotteur continue de flotter**, mais sa ligne de flottaison s'est enfoncée (il s'immerge davantage).
*   **Arbitrage et compromis (Esprit critique) :** 
    Bien que le balsa soit un matériau biosourcé et léger (avantage écologique et économique), sa porosité pose un problème de durabilité à long terme (vieillissement, modification de la masse, risque de perte de flottaison en cas d' saturation supérieure à $100\%$). L'ingénieur doit donc arbitrer entre l'utilisation d'un matériau brut léger mais vulnérable, et l'application d'un revêtement imperméable (vernis, résine), ce qui alourdit le bilan environnemental et financier du produit.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
