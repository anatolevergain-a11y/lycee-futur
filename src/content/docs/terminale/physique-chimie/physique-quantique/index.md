---
title: "Cours : Physique quantique et effet photoélectrique"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

Au début du $XX^{\text{e}}$ siècle, l'étude du rayonnement thermique et de l'interaction entre la lumière et la matière a mis en échec la physique classique (fondée sur la nature strictement ondulatoire de la lumière). L'interprétation de l'effet photoélectrique par Albert Einstein en $1905$ a marqué l'acte de naissance de la physique quantique.

*   **Effet photoélectrique :** Il s'agit de l'émission d'électrons par un matériau (généralement un métal) soumis à l'éclairage d'un rayonnement électromagnétique (lumière) de fréquence suffisante. Les électrons ainsi émis sont appelés des *photoélectrons*.
*   **Photon :** En physique quantique, le rayonnement électromagnétique n'est pas seulement une onde continue, il est constitué de paquets d'énergie élémentaires indivisibles appelés photons. Le photon est une particule de masse nulle et de charge nulle, se déplaçant dans le vide à la vitesse de la lumière $c$.
*   **Constante de Planck ($h$) :** Constante fondamentale de la physique quantique, notée $h \approx 6{,}626 \times 10^{-34} \text{ J}\cdot\text{s}$.
*   **Fréquence seuil ($\nu_s$ ou $f_s$) :** Fréquence minimale du rayonnement incident en dessous de laquelle aucun électron ne peut être arraché du métal, quelle que soit la durée de l'exposition ou l'intensité de la source lumineuse.
*   **Travail d'extraction ($W_0$ ou $E_s$) :** Énergie minimale qu'il faut fournir à un électron pour l'extraire du réseau cristallin du métal.

---

## 📐 2. Formules et Propriétés fondamentales

1.  **Énergie d'un photon :**
    L'énergie $E$ transportée par un unique photon dépend de la fréquence $\nu$ de la radiation associée :
    $$E = h \nu$$
    En utilisant la relation entre la longueur d'onde dans le vide $\lambda$, la fréquence $\nu$ et la celerité de la lumière $c$ ($\lambda = \frac{c}{\nu}$), on obtient :
    $$E = \frac{h c}{\lambda}$$
    *Avec :*
    *   $E$ en joules ($\text{J}$) ou en électronvolts ($\text{eV}$)
    *   $h \approx 6{,}626 \times 10^{-34} \text{ J}\cdot\text{s}$
    *   $\nu$ en hertz ($\text{Hz}$)
    *   $c \approx 3{,}00 \times 10^8 \text{ m/s}$
    *   $\lambda$ en mètres ($\text{m}$)

2.  **Conversion d'unités (Joules et Électronvolts) :**
    En physique atomique et quantique, l'énergie est souvent exprimée en électronvolts ($\text{eV}$). Par définition :
    $$1 \text{ eV} = 1{,}602 \times 10^{-19} \text{ J}$$

3.  **Relation d'Einstein pour l'effet photoélectrique (Conservation de l'énergie) :**
    Lorsqu'un photon interagit avec un électron du métal, il lui transmet la totalité de son énergie $E$. Une partie de cette énergie sert à arracher l'électron ($W_0$), et le reste est converti en énergie cinétique maximale ($E_{c,\text{max}}$) pour l'électron émis :
    $$E = W_0 + E_{c,\text{max}}$$
    Soit sous forme développée :
    $$h \nu = W_0 + E_{c,\text{max}}$$

4.  **Expression du travail d'extraction et de la fréquence seuil :**
    À la fréquence seuil $\nu_s$, l'énergie du photon est tout juste égale au travail d'extraction, et l'électron est émis avec une énergie cinétique nulle :
    $$h \nu_s = W_0$$
    On peut ainsi exprimer la longueur d'onde seuil $\lambda_s$ :
    $$\lambda_s = \frac{c}{\nu_s} = \frac{h c}{W_0}$$

5.  **Bilan énergétique complet :**
    L'énergie cinétique maximale d'un photoélectron s'écrit donc :
    $$E_{c,\text{max}} = h \nu - W_0 = h \left( \nu - \nu_s \right) = h c \left( \frac{1}{\lambda} - \frac{1}{\lambda_s} \right)$$
    *Condition d'émission :* L'effet photoélectrique n'a lieu que si $\nu > \nu_s$ (ce qui équivaut à $\lambda < \lambda_s$).

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On éclaire une plaque de potassium avec un rayonnement lumineux de longueur d'onde $\lambda = 400 \text{ nm}$. Le travail d'extraction du potassium vaut $W_0 = 2{,}20 \text{ eV}$.
1. Calculer l'énergie d'un photon incident en joules, puis en électronvolts.
2. Déterminer la longueur d'onde seuil $\lambda_s$ du potassium.
3. Prévoir si l'effet photoélectrique aura lieu et, le cas échéant, calculer l'énergie cinétique maximale des électrons émis.

*Données :* $h = 6{,}63 \times 10^{-34} \text{ J}\cdot\text{s}$ ; $c = 3{,}00 \times 10^8 \text{ m/s}$ ; $1 \text{ eV} = 1{,}60 \times 10^{-19} \text{ J}$.

**Résolution :**

1. **Énergie d'un photon incident :**
   $$\begin{aligned}
   E &= \frac{h c}{\lambda} \\
   E &= \frac{6{,}63 \times 10^{-34} \times 3{,}00 \times 10^8}{400 \times 10^{-9}} \\
   E &\approx 4{,}97 \times 10^{-19} \text{ J}
   \end{aligned}$$
   Convertissons cette énergie en électronvolts :
   $$E = \frac{4{,}97 \times 10^{-19}}{1{,}60 \times 10^{-19}} \approx 3{,}11 \text{ eV}$$

2. **Longueur d'onde seuil $\lambda_s$ :**
   Le travail d'extraction en joules vaut :
   $$W_0 = 2{,}20 \times 1,60 \times 10^{-19} = 3{,}52 \times 10^{-19} \text{ J}$$
   La relation liant $\lambda_s$ et $W_0$ est :
   $$\begin{aligned}
   \lambda_s &= \frac{h c}{W_0} \\
   \lambda_s &= \frac{6{,}63 \times 10^{-34} \times 3{,}00 \times 10^8}{3{,}52 \times 10^{-19}} \\
   \lambda_s &\approx 5{,}65 \times 10^{-7} \text{ m} = 565 \text{ nm}
   \end{aligned}$$

3. **Bilan et énergie cinétique maximale :**
   On compare la longueur d'onde incidente à la longueur d'onde seuil : on a $\lambda = 400 \text{ nm}$ et $\lambda_s = 565 \text{ nm}$, donc $\lambda < \lambda_s$ (ou de manière équivalente, $E = 3{,}11 \text{ eV} > W_0 = 2{,}20 \text{ eV}$).
   **L'effet photoélectrique a donc bien lieu.**
   Calculons l'énergie cinétique maximale :
   $$\begin{aligned}
   E_{c,\text{max}} &= E - W_0 \\
   E_{c,\text{max}} &= 3{,}11 - 2{,}20 = 0{,}91 \text{ eV}
   \end{aligned}$$
   En joules :
   $$E_{c,\text{max}} = 0{,}91 \times 1{,}60 \times 10^{-19} \approx 1{,}46 \times 10^{-19} \text{ J}$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention aux unités (Le piège classique) :** Dans la formule $E_{c,\text{max}} = h\nu - W_0$, il est impératif d'utiliser des grandeurs homogènes. Si $h\nu$ est en joules, $W_0$ doit impérativement être en joules (et non en $\text{eV}$). Convertir systématiquement en joules avant d'effectuer les soustractions, sauf si tous les termes sont déjà homogènes en $\text{eV}$.
*   **Confusion entre intensité lumineuse et énergie du photon :** Augmenter l'intensité lumineuse d'une source (à $\lambda$ fixe) revient à augmenter le *nombre* de photons émis par seconde, mais cela ne modifie en rien l'énergie $E$ d'un photon individuel. Si la fréquence est inférieure au seuil ($\nu < \nu_s$), doubler l'intensité lumineuse ne provoquera toujours aucun effet photoélectrique.
*   **Sens de l'inégalité pour l'émission :** Ne pas inverser les critères. L'émission d'électrons nécessite :
    *   $\nu > \nu_s$ (Fréquence supérieure au seuil)
    *   $\lambda < \lambda_s$ (Longueur d'onde inférieure au seuil)
*   **Terminologie rigoureuse :** Préciser qu'il s'agit d'une énergie cinétique *maximale* ($E_{c,\text{max}}$). En effet, les électrons situés plus profondément dans le métal subissent des collisions lors de leur sortie et perdent une partie de leur énergie cinétique ; tous n'émergent donc pas avec la même énergie.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
