---
title: "Cours : Thermodynamique et transferts thermiques"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Thermodynamique et transferts thermiques

## 📌 1. Notions clés & Définitions

La thermodynamique est la science qui étudie les transferts d'énergie et les transformations d'état de la matière. Au programme de Terminale, l'étude se restreint principalement aux systèmes macroscopiques fermés ou ouverts.

* **Système thermodynamique :** Objet ou portion de l'univers que l'on isole par une frontière (fictive ou réelle) pour en étudier les propriétés.
    * *Système fermé :* N'échange que de l'énergie (chaleur ou travail) avec son milieu extérieur, mais aucune matière.
    * *Système ouvert :* Échange à la fois de la matière et de l'énergie avec l'extérieur.
    * *Système isolé :* N'échange ni matière ni énergie avec son milieu extérieur.
* **Énergie interne ($U$) :** Grandeur macroscopique traduisant l'énergie microscopique totale du système (somme de l'énergie cinétique microscopique liée à l'agitation thermique et de l'énergie potentielle d'interaction entre entités). Elle s'exprime en Joules ($\text{J}$).
* **Transfert thermique (ou Chaleur, noté $Q$) :** Mode de transfert d'énergie entre un système et son milieu extérieur motivé exclusivement par une **différence de température**.
* **Travail ($W$) :** Mode de transfert d'énergie macroscopique associé à un déplacement sous l'effet d'une force ou à une variation de volume (forces de pression).
* **Premier principe de la thermodynamique :** Toute variation de l'énergie interne $\Delta U$ d'un système au cours d'une transformation est égale à la somme des énergies échangées avec le milieu extérieur sous forme de travail $W$ et de transfert thermique $Q$ :
  $$\Delta U = W + Q$$

Les transferts thermiques s'effectuent selon trois modes principaux :
1. **La conduction :** Transfert thermique par contact direct, sans déplacement global de matière, par propagation proche en proche de l'agitation thermique (dominant dans les solides).
2. **La convection :** Transfert thermique associé à un déplacement global de matière (fluides : liquides ou gaz).
3. **Le rayonnement :** Transfert thermique par émission et absorption d'ondes électromagnétiques (nécessite aucun milieu matériel).

---

## 📐 2. Formules et Propriétés fondamentales

### A. Capacité thermique et flux thermique
* **Capacité thermique (ou thermique massique $c$) :** Quantité d'énergie nécessaire pour élever la température d'une unité de masse d'une substance de un Kelvin (ou un degré Celsius). 
  Pour un corps de masse $m$ et de capacité thermique massique $c$ (en $\text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$), lors d'un changement de température sans changement d'état :
  $$Q = m \cdot c \cdot (T_f - T_i) = m \cdot c \cdot \Delta T$$
  *(Note : $\Delta T$ en Kelvin ou en ${}^{\circ}\text{C}$ ont la même valeur numérique).*

* **Flux thermique ($\Phi$) :** Quantité d'énergie thermique transférée par unité de temps à travers une surface. Il s'exprime en Watts ($\text{W}$).
  $$\Phi = \frac{Q}{\Delta t}$$

### B. Loi de Fourier de la conduction thermique (1D)
Pour un mur plan d'épaisseur $e$, de surface $S$ et de conductivité thermique $\lambda$ (en $\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$), soumis à une différence de température $\Delta T = T_2 - T_1$ entre ses deux faces, le flux thermique traversant le milieu stationnaire est donné par :
$$\Phi = \frac{\lambda \cdot S}{e} \cdot (T_{\text{chaud}} - T_{\text{froid}})$$

* **Résistance thermique ($R_{\text{th}}$) :** Par analogie avec la loi d'Ohm en électricité, on définit la résistance thermique d'une paroi par :
  $$R_{\text{th}} = \frac{e}{\lambda \cdot S}$$
  Le flux thermique s'écrit alors :
  $$\Phi = \frac{T_{\text{chaud}} - T_{\text{froid}}}{R_{\text{th}}}$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On souhaite évaluer les pertes thermiques à travers une vitre simple en verre d'une épaisseur $e = 4,0\text{ mm}$ et de surface $S = 1,5\text{ m}^2$. 
La température intérieure est de $T_i = 20,{}^{\circ}\text{C}$ et la température extérieure est de $T_e = 5,{}^{\circ}\text{C}$.
Donnée : La conductivité thermique du verre est $\lambda = 1,2\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$.

1. Calculer la résistance thermique $R_{\text{th}}$ de cette vitre.
2. En déduire le flux thermique $\Phi$ traversant la vitre.
3. Quelle est l'énergie thermique perdue à travers cette vitre en une journée (24 heures) ?

**Résolution :**

1. **Calcul de la résistance thermique :**
   La formule est $R_{\text{th}} = \frac{e}{\lambda \cdot S}$.
   * Conversion des unités : $e = 4,0\text{ mm} = 4,0 \times 10^{-3}\text{ m}$.
   * $R_{\text{th}} = \frac{4,0 \times 10^{-3}}{1,2 \times 1,5} = \frac{4,0 \times 10^{-3}}{1,8} \approx 2,22 \times 10^{-3}\text{ K}\cdot\text{W}^{-1}$.

2. **Calcul du flux thermique :**
   $$\Phi = \frac{T_i - T_e}{R_{\text{th}}} = \frac{20 - 5}{2,22 \times 10^{-3}} = \frac{15}{2,22 \times 10^{-3}} \approx 6,75 \times 10^3\text{ W} = 6,75\text{ kW}$$

3. **Calcul de l'énergie perdue en 24 h :**
   L'énergie est $Q = \Phi \cdot \Delta t$.
   * $\Delta t = 24 \text{ h} = 24 \times 3600\text{ s} = 86400\text{ s}$.
   * $Q = 6750 \times 86400 \approx 5,83 \times 10^8\text{ J}$.
   * En kilowattheures ($\text{kWh}$) : $Q = \frac{5,83 \times 10^8}{3,6 \times 10^6} \approx 162\text{ kWh}$.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention aux unités de température :** Pour les calculs de différences de température ($\Delta T$), l'utilisation du Kelvin ou du degré Celsius est indifférente ($\Delta T(K) = \Delta T({}^{\circ}\text{C})$). En revanche, si une formule implique une température absolue isolée (ce qui est rare au programme de Terminale, mais utile en thermodynamique avancée), l'utilisation du Kelvin ($T(K) = \theta({}^{\circ}\text{C}) + 273,15$) est impérative.
* **Homogénéité des unités :** Veillez à convertir systématiquement toutes les données dans le Système International (SI) avant tout calcul :
  * Épaisseur $e$ en mètres ($\text{m}$).
  * Surface $S$ en mètres carrés ($\text{m}^2$).
  * Temps $\Delta t$ en secondes ($\text{s}$).
* **Confusion entre Énergie et Flux :** 
  * Le flux thermique ($\Phi$) s'exprime en Watts ($\text{W}$ ou $\text{J}\cdot\text{s}^{-1}$).
  * Une énergie ($Q$ ou $\Delta U$) s'exprime en Joules ($\text{J}$) ou en kilowattheures ($\text{kWh}$). Ne pas confondre puissance/flux et énergie.
* **Signe des transferts d'énergie :** Respectez la convention de signe : un système qui reçoit de l'énergie (travail ou chaleur) a un terme positif, un système qui cède de l'énergie a un terme négatif.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
