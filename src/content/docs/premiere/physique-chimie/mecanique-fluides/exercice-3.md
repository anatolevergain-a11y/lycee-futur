---
title: "Exercice 3 : Conservation de l'énergie mécanique"
description: "Application pratique du chapitre Mouvement et forces en mécanique"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude des transferts énergétiques en classe de Première, l'analyse d'un système réel nécessite d'établir des modèles simplificateurs tout en quantifiant leurs limites. 

Considérons un prototype de montagne russe testé en laboratoire. Une nacelle de masse $m = 250\text{ kg}$ est lâchée sans vitesse initiale depuis un point $A$ situé à une altitude $h_A = 20{,}0\text{ m}$ au-dessus du sol. Elle se déplace sur une piste verticalement plane. Au cours de son mouvement, elle passe par un point $B$ situé à une altitude $h_B = 5{,}0\text{ m}$, où sa vitesse mesurée par un système de capteurs laser est $v_B = 15{,}0\text{ m}\cdot\text{s}^{-1}$.

En physique, l'énergie mécanique $E_m$ d'un système est la somme de son énergie cinétique $E_c$ et de son énergie potentielle de pesanteur $E_{pp}$ :
$$E_m = E_c + E_{pp} = \frac{1}{2}mv^2 + mgz$$
*(avec $g = 9{,}81\text{ m}\cdot\text{s}^{-2}$, intensité de la pesanteur locale).*

L'application rigoureuse du principe de conservation de l'énergie mécanique suppose l'absence de forces non conservatrices (comme les forces de frottement solide ou fluide). Toutefois, les mesures expérimentales révèlent souvent des écarts qu'il convient d'analyser de manière critique, en distinguant la modélisation théorique de la réalité mesurée.

---

### ❓ Énoncé

1. **Modélisation théorique :** En supposant le système conservatif (absence totale de frottements et résistance de l'air négligeable), exprimer littéralement puis calculer l'énergie mécanique $E_{m,A}$ de la nacelle au point $A$, en prenant le sol comme référence des énergies potentielles ($z = 0$). En déduire la vitesse théorique $v_{B,\text{th}}$ de la nacelle au point $B$.
2. **Analyse critique des résultats :** Comparer la vitesse théorique $v_{B,\text{th}}$ obtenue à la question précédente avec la vitesse mesurée expérimentalement $v_B = 15{,}0\text{ m}\cdot\text{s}^{-1}$. Calculer l'écart relatif en pourcentage. Quel(s) phénomène(s) physique(s) non pris en compte dans le modèle initial peut (peuvent) expliquer cet écart ?
3. **Quantification des pertes :** Calculer la variation d'énergie mécanique $\Delta E_m = E_{m,B} - E_{m,A}$ entre les points $A$ et $B$ en utilisant la vitesse mesurée. À quelle grandeur physique cette variation est-elle directement reliée ?
4. **Prospective et limites :** Si la nacelle poursuivait sa course sur une portion horizontale rugueuse, comment évoluerait son énergie mécanique ? Discuter de l'intérêt d'utiliser un modèle conservateur pour le dimensionnement initial d'une attraction par rapport à sa validation finale de sécurité.

---

### 💡 Indice de méthode

* **Pour la question 1 :** Pensez à l'état initial de la nacelle (vitesse nulle) pour simplifier l'expression de l'énergie cinétique. L'altitude initiale donne directement l'énergie potentielle.
* **Pour la question 2 :** L'écart relatif se calcule par la formule $\frac{|valeur_{\text{mesurée}} - valeur_{\text{théorique}}|}{valeur_{\text{théorique}}} \times 100$. Interrogez-vous sur la nature des forces qui s'exercent sur un mobile en mouvement dans l'air.
* **Pour la question 3 :** Calculez $E_{m,A}$ et $E_{m,B}$ en utilisant la vitesse expérimentale pour $E_{m,B}$. Le théorème de l'énergie cinétique ou le travail des forces non conservatrices vous aidera à interpréter le signe de $\Delta E_m$.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation théorique
* **Calcul de l'énergie mécanique au point $A$ ($E_{m,A}$) :**
  Au point $A$, la nacelle est lâchée sans vitesse initiale, donc $v_A = 0\text{ m}\cdot\text{s}^{-1}$, ce qui implique $E_{c,A} = 0\text{ J}$.
  L'énergie potentielle de pesanteur est $E_{pp,A} = mgz_A = mgh_A$.
  $$E_{m,A} = E_{c,A} + E_{pp,A} = 0 + 250 \times 9{,}81 \times 20{,}0 = 49\,050\text{ J} = 49{,}1\text{ kJ}$$
  Puisque le système est supposé conservatif, l'énergie mécanique se conserve : $E_{m,B} = E_{m,A} = 49\,050\text{ J}$.

* **Calcul de la vitesse théorique au point $B$ ($v_{B,\text{th}}$) :**
  Au point $B$ :
  $$E_{m,B} = \frac{1}{2}mv_{B,\text{th}}^2 + mgh_B = E_{m,A}$$
  $$\frac{1}{2}mv_{B,\text{th}}^2 = E_{m,A} - mgh_B$$
  $$v_{B,\text{th}} = \sqrt{\frac{2(E_{m,A} - mgh_B)}{m}} = \sqrt{2\left(\frac{E_{m,A}}{m} - gh_B\right)}$$
  Application numérique :
  $$v_{B,\text{th}} = \sqrt{2 \left( \frac{49050}{250} - 9{,}81 \times 5{,}0 \right)} = \sqrt{2 (196{,}2 - 49{,}05)} = \sqrt{2 \times 147{,}15} = \sqrt{294{,}3} \approx 17{,}2\text{ m}\cdot\text{s}^{-1}$$

#### 2. Analyse critique des résultats
* **Calcul de l'écart relatif :**
  $$\text{Écart} = \frac{|15{,}0 - 17{,}2|}{17{,}2} \times 100 = \frac{2{,}2}{17{,}2} \times 100 \approx 12{,}8\%$$
* **Analyse critique :**
  La vitesse mesurée est inférieure à la vitesse théorique ($15{,}0\text{ m}\cdot\text{s}^{-1} < 17{,}2\text{ m}\cdot\text{s}^{-1}$). Cet écart de près de $13\%$ est significatif et dépasse les incertitudes instrumentales habituelles. Il met en évidence les limites du modèle du système conservatif. En réalité, des forces non conservatrices s'exercent sur la nacelle :
  - Les frottements solides au niveau des rails (contacts roues-piste).
  - Les forces de frottement fluide exercées par l'air (résistance de l'air).
  Ces forces réalisent un travail résistant qui dissipa une partie de l'énergie mécanique sous forme d'énergie thermique.

#### 3. Quantification des pertes
* **Calcul de la variation d'énergie mécanique $\Delta E_m$ :**
  Calculons l'énergie mécanique réelle au point $B$ avec la vitesse mesurée :
  $$E_{m,B} = \frac{1}{2}mv_B^2 + mgh_B = \frac{1}{2} \times 250 \times (15{,}0)^2 + 250 \times 9{,}81 \times 5{,}0$$
  $$E_{m,B} = 28\,125 + 12\,262{,}5 = 40\,387{,}5\text{ J}$$
  Variation de l'énergie mécanique :
  $$\Delta E_m = E_{m,B} - E_{m,A} = 40\,387{,}5 - 49\,050 = -8\,662{,}5\text{ J} \approx -8{,}66\times 10^3\text{ J}$$
* **Interprétation scientifique :**
  Cette variation est négative ($\Delta E_m < 0$), ce qui traduit une perte d'énergie mécanique. Théoriquement, cette diminution est exactement égale au travail des forces non conservatrices $\mathcal{W}_{nc}$ (frottements) s'exerçant sur le système entre les points $A$ et $B$ : $\Delta E_m = \mathcal{W}_{nc}$.

#### 4. Prospective et limites
* **Évolution sur une portion horizontale rugueuse :**
  Sur une portion horizontale ($h$ constante, donc $E_{pp}$ constante), si des frottements s'exercent, l'énergie cinétique diminue continuellement puisque $E_m$ diminue ($E_m = E_c + \text{constante}$). La nacelle va donc décélérer jusqu'à s'arrêter complètement.
* **Intérêt des modèles et esprit critique :**
  Le modèle du système conservatif (idéal) est indispensable lors des phases préliminaires de conception (dimensionnement maximal, hauteurs de sécurité) car il offre une majoration simple et rapide des performances énergétiques. Cependant, il est insuffisant pour la validation finale. Les ingénieurs doivent impérativement intégrer des coefficients de correction empiriques ou des modèles thermodynamiques incluant les frottements pour garantir la sécurité réelle des installations avant leur mise en service.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
