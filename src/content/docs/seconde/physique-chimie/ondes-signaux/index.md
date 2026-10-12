---
title: "Cours : Ondes et signaux"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Physique-Chimie - Seconde : Ondes et signaux

## 📌 1. Notions clés & Définitions

*   **Signal (lumineux ou sonore) :** Variation d'une grandeur physique (champ électromagnétique ou pression de l'air) porteuse d'informations. Il peut se propager dans le vide (pour la lumière) ou dans un milieu matériel.
*   **Perturbation :** Modification temporaire de l'état d'un milieu matériel par rapport à son état d'équilibre.
*   **Onde mécanique progressive :** Propagation d'une perturbation dans un milieu matériel sans transport net de matière, mais avec transport d'énergie.
*   **Onde électromagnétique :** Onde ne nécessitant pas de milieu matériel pour se propager (elle se propage dans le vide). Exemple : la lumière, les ondes radio, les rayons X.
*   **Double périodicité des ondes périodiques :**
    *   *Périodicité temporelle ($T$) :* Plus courte durée au bout de laquelle un point du milieu retrouve le même état de vibration (en secondes, $\text{s}$).
    *   *Périodicité spatiale ou Longueur d'onde ($\lambda$) :* Plus petite distance séparant deux points du milieu se trouvant dans le même état de vibration à un instant donné (en mètres, $\text{m}$).
*   **Fréquence ($f$) :** Nombre de périodes par seconde. Elle s'exprime en Hertz ($\text{Hz}$).
*   **Célérité ($v$ ou $c$) :** Vitesse de propagation de l'onde dans un milieu donné (en mètres par seconde, $\text{m}\cdot\text{s}^{-1}$).

---

## 📐 2. Formules et Propriétés fondamentales

### A. Vitesse de propagation (Célérité)
La célérité d'une onde se calcule par le rapport de la distance parcourue $d$ sur la durée de parcours $\Delta t$ :

$$v = \frac{d}{\Delta t}$$

*   $v$ : célérité en $\text{m}\cdot\text{s}^{-1}$
*   $d$ : distance en $\text{m}$
*   $\Delta t$ : durée en $\text{s}$

### B. Lien entre fréquence et période
La fréquence $f$ et la période temporelle $T$ sont inverses l'une de l'autre :

$$f = \frac{1}{T} \quad \text{et} \quad T = \frac{1}{f}$$

*   $f$ : fréquence en $\text{Hz}$ (ou $\text{s}^{-1}$)
*   $T$ : période en $\text{s}$

### C. Relation fondamentale d'une onde périodique
Pour une onde sinusoïdale se propageant à la célérité $v$, la longueur d'onde $\lambda$ est liée à la période $T$ (ou à la fréquence $f$) par la relation :

$$\lambda = v \times T = \frac{v}{f}$$

*   $\lambda$ : longueur d'onde en $\text{m}$
*   $v$ : célérité en $\text{m}\cdot\text{s}^{-1}$
*   $T$ : période en $\text{s}$
*   $f$ : fréquence en $\text{Hz}$

### D. Cas particulier de la lumière
Dans le vide (et par approximation dans l'air), la lumière se propage à une célérité notée $c$, universellement constante :

$$c \approx 3,00 \times 10^8 \; \text{m}\cdot\text{s}^{-1}$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un sonar émet une impulsion ultrasonore dans l'eau de mer. L'onde se propage, se réfléchit sur un obstacle situé au fondo de l'océan et revient vers l'émetteur. La durée mesurée entre l'émission et la réception du signal réfléchi est $\Delta t = 0{,}140 \; \text{s}$. 
On donne la célérité des ultrasons dans l'eau de mer : $v = 1500 \; \text{m}\cdot\text{s}^{-1}$.
Calculer la profondeur $d$ de l'océan à cet endroit.

**Résolution :**

1.  *Analyse du parcours de l'onde :* L'onde fait un aller-retour. Elle parcourt donc deux fois la distance $d$ (la profondeur) : 
    $$\text{Distance totale parcourue} = 2 \times d$$

2.  *Application de la formule de la célérité :*
    $$v = \frac{2d}{\Delta t}$$

3.  *Isolation de l'inconnue ($d$) :*
    $$2d = v \times \Delta t \implies d = \frac{v \times \Delta t}{2}$$

4.  *A.N. (Aplication Numérique) :*
    $$d = \frac{1500 \times 0{,}140}{2}$$
    $$d = \frac{210}{2} = 105 \; \text{m}$$

**Réponse :** La profondeur de l'océan à cet endroit est de $105 \; \text{m}$.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention aux unités (Conversion) :** 
    *   Les temps doivent impérativement être en secondes ($\text{s}$). Pensez à convertir les millisecondes ($\text{ms}$) : $1 \; \text{ms} = 10^{-3} \; \text{s}$.
    *   Les distances doivent être en mètres ($\text{m}$). Pensez à convertir les kilomètres ($\text{km}$) ou les nanomètres ($\text{nm}$, très fréquents en optique).
*   **Le piège de l'aller-retour :** Pour les exercices de type échographie, sonar ou radar (effet Doppler ou mesure de distance par écho), l'énoncé donne souvent le temps total d'un **aller-retour**. Il ne faut pas oublier de diviser le temps par 2 (ou la distance totale par 2) selon le raisonnement.
*   **Confusion entre $T$ et $\lambda$ sur un graphique :** 
    *   Sur un axe temporel ($t$ en abscisse), la grandeur mesurée est la **période temporelle $T$**.
    *   Sur un axe spatial ($x$ en abscisse à un instant donné), la grandeur mesurée est la **longueur d'onde $\lambda$**.
*   **Rigor dans la rédaction :** Veillez à bien expliciter les formules littérales avant de procéder aux applications numériques, et indiquez toujours les unités à la fin de chaque résultat intermédiaire ou final.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
