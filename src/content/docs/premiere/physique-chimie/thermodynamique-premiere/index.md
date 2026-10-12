---
title: "Cours : Aspects énergétiques des transformations"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Les transformations chimiques s'accompagnent systématiquement d'un transfert d'énergie avec le milieu extérieur, le plus souvent sous forme de chaleur (transfert thermique).

*   **Transformation exothermique :** Une transformation chimique est dite exothermique lorsqu'elle s'accompagne d'une **libération** d'énergie thermique vers le milieu extérieur. La température du milieu réactionnel augmente.
*   **Transformation endothermique :** Une transformation chimique est dite endothermique lorsqu'elle s'accompagne d'une **absorption** d'énergie thermique en provenance du milieu extérieur. La température du milieu réactionnel diminue.
*   **Transformation athermique :** Une transformation est athermique si les échanges thermiques avec le milieu extérieur sont négligeables.
*   **Énergie molaire de réaction ($\Delta_r H$ ou $E$) :** C'est l'énergie échangée par mole de système transformé dans les conditions stœchiométriques. Elle s'exprime en $\text{kJ/mol}$.

## 📐 2. Formules et Propriétés fondamentales

Lors d'une transformation chimique, le transfert thermique $Q$ (en Joules, $\text{J}$) échangé à pression constante est relié à l'avancement de la réaction ou à la quantité de matière par les relations suivantes :

*   **Expression générale du transfert thermique :**
    $$Q = n_{\text{ref}} \times \Delta_r H$$
    Où :
    *   $n_{\text{ref}}$ est la quantité de matière (en $\text{mol}$) liée à l'avancement.
    *   $\Delta_r H$ est l'énergie molaire de réaction (en $\text{kJ/mol}$).

*   **Variation de température du milieu réactionnel :**
    Le transfert thermique entraîne une variation de la température du mélange réactionnel, supposé de capacité thermique massique $c$ et de masse $m$ (ou de capacité thermique globale $C = m \times c$) :
    $$Q = m \times c \times (T_{\text{finale}} - T_{\text{initiale}}) = m \times c \times \Delta T$$
    Où :
    *   $m$ est la masse de la solution ou du mélange (en $\text{g}$ ou $\text{kg}$).
    *   $c$ est la capacité thermique massique (en $\text{J}\cdot\text{g}^{-1}\cdot\text{K}^{-1}$ ou $\text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$).
    *   $\Delta T$ est la variation de température (en $\text{K}$ ou $\text{}^{\circ}\text{C}$).

*   **Règle de signe fondamentale :**
    *   Pour un système chimique, si la transformation est **exothermique**, le système libère de l'énergie : $Q_{\text{systeme}} < 0$ (donc $\Delta_r H < 0$).
    *   Pour un système chimique, si la transformation est **endothermique**, le système absorbe de l'énergie : $Q_{\text{systeme}} > 0$ (donc $\Delta_r H > 0$).

## 💡 3. Exemple d'application résolu

**Énoncé :**
On réalise la dissolution de $x = 0,10 \text{ mol}$ de nitrate d'ammonium $\text{NH}_4\text{NO}_3\text{(s)}$ dans un volume $V = 100 \text{ mL}$ d'eau. La température initiale de la solution est $T_i = 20,0 \text{ }^{\circ}\text{C}$ et la température finale est $T_f = 16,5 \text{ }^{\circ}\text{C}$.
1. La dissolution est-elle endothermique ou exothermique ?
2. Calculer le transfert thermique $Q$ échangé par la solution, sachant que la capacité thermique massique de la solution est $c = 4,18 \text{ J}\cdot\text{g}^{-1}\cdot\text{K}^{-1}$ et que la masse de la solution est $m = 100 \text{ g}$.
3. En déduire l'énergie molaire de dissolution $\Delta_{\text{diss}} H$ de ce sel.

**Correction :**
1. La température de la solution diminue ($T_f < T_i$). Le milieu réactionnel a donc absorbé de l'énergie thermique. La transformation est **endothermique**.
2. Le transfert thermique reçu par la solution est :
   $$Q_{\text{sol}} = m \times c \times (T_f - T_i)$$
   A.N. :
   $$Q_{\text{sol}} = 100 \times 4,18 \times (16,5 - 20,0)$$
   $$Q_{\text{sol}} = 100 \times 4,18 \times (-3,5) = -1463 \text{ J} = -1,46 \text{ kJ}$$
3. L'énergie échangée par le système chimique est l'opposée de celle échangée par la solution (conservation de l'énergie) :
   $$Q_{\text{chim}} = -Q_{\text{sol}} = +1463 \text{ J} = +1,46 \text{ kJ}$$
   L'énergie molaire de dissolution $\Delta_{\text{diss}} H$ pour $n = 0,10 \text{ mol}$ est :
   $$\Delta_{\text{diss}} H = \frac{Q_{\text{chim}}}{n}$$
   A.N. :
   $$\Delta_{\text{diss}} H = \frac{1,46}{0,10} = +14,6 \text{ kJ}\cdot\text{mol}^{-1}$$

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention au système étudié :** Ne pas confondre l'énergie du *système chimique* (les réactifs et les produits) et l'énergie perçue par le *milieu extérieur* (la solution, le thermomètre, la pièce). Si la température monte, le système chimique cède de la chaleur ($Q_{\text{chim}} < 0$), mais la solution la reçoit ($Q_{\text{sol}} > 0$).
*   **Rigueur sur les unités :** Veillez à bien convertir les masses en grammes ($\text{g}$), les capacités thermiques en $\text{J}\cdot\text{g}^{-1}\cdot\text{K}^{-1}$ et les énergies en Joules ($\text{J}$) ou KiloJoules ($\text{kJ}$) avant d'effectuer les applications numériques.
*   **Signe de $\Delta_r H$ :** Une réaction exothermique possède **toujours** une énergie molaire de réaction négative ($\Delta_r H < 0$), car le système perd de l'énergie au profit de l'extérieur. Ne pas lier machinalement le signe "moins" à une perte de sens physique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
