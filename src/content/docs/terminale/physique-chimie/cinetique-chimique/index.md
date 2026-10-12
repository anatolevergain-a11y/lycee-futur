---
title: "Cours : Cinétique chimique"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

La cinétique chimique est l'étude quantitative de l'évolution des systèmes chimiques au cours du temps. Contrairement à la thermodynamique (qui s'intéresse à l'état final d'un système à l'équilibre), la cinétique s'intéresse à la vitesse à laquelle les réactions se produisent.

*   **Temps de demi-réaction ($t_{1/2}$) :** Le temps de demi-réaction est défini comme la durée au bout de laquelle l'avancement de la réaction $x(t)$ atteint la moitié de son avancement final $x_f$ (ou maximal $x_{max}$ dans le cas d'une réaction totale).
    $$x(t_{1/2}) = \frac{x_f}{2}$$
*   **Vitesse volumique de réaction ($v$) :** Pour un système siège d'une transformation chimique isochore (de volume $V$ constant), la vitesse volumique de réaction à un instant $t$ est définie par la dérivée temporelle de l'avancement divisée par le volume $V$ du système :
    $$v(t) = \frac{1}{V} \frac{dx}{dt}$$
    Son unité usuelle est le $\text{mol}\cdot\text{m}^{-3}\cdot\text{s}^{-1}$ ou $\text{mol}\cdot\text{L}^{-1}\cdot\text{min}^{-1}$.
*   **Facteur cinétique :** Un facteur cinétique est un paramètre physique ou chimique qui modifie la vitesse d'une transformation chimique. Les principaux facteurs cinétiques sont :
    *   La température du milieu réactionnel.
    *   La concentration initiale des réactifs.
    *   La présence d'un catalyseur (qui accélère la réaction sans modifier l'état d'équilibre final).

---

## 📐 2. Formules et Propriétés fondamentales

### A. Expression de la vitesse en fonction des concentrations
Soit une réaction chimique modélisée par l'équation bilan :
$$\alpha A + \beta B \rightarrow \gamma C + \delta D$$

La vitesse volumique de réaction peut s'exprimer à l'aide de la concentration molaire des réactifs ou des produits. Pour un réactif $A$ (dont le coefficient stoechiométrique est $\alpha$) :
$$v(t) = -\frac{1}{\alpha} \frac{d[A]}{dt}$$
*(Le signe moins est nécessaire car la concentration d'un réactif décroît au cours du temps, ce qui rend la dérivée négative, alors qu'une vitesse est par définition positive ou nulle).*

### B. Dégénérescence de l'ordre
Pour déterminer l'ordre d'une réaction par rapport à un réactif lorsque la cinétique dépend de plusieurs espèces, on utilise la méthode de la dégénérescence de l'ordre. Elle consiste à placer tous les autres réactifs en **excès stoechiométrique**, à l'exception de celui dont on souhaite étudier l'ordre. Ainsi, la concentration des réactifs en excès reste pratiquement constante au cours du temps.

### C. Lois de vitesse et temps de demi-réaction

| Ordre de la réaction | Loi de vitesse (ex: pour $A \rightarrow \text{produits}$) | Équation différentielle | Évolution temporelle de $[A](t)$ | Temps de demi-réaction ($t_{1/2}$) |
| :---: | :---: | :---: | :---: | :---: |
| **0** | $v = k$ | $-\frac{d[A]}{dt} = k$ | $[A](t) = [A]_0 - k \cdot t$ | $t_{1/2} = \frac{[A]_0}{2k}$ |
| **1** | $v = k[A]$ | $-\frac{d[A]}{dt} = k[A]$ | $[A](t) = [A]_0 \cdot e^{-k \cdot t}$ | $t_{1/2} = \frac{\ln(2)}{k}$ |
| **2** | $v = k[A]^2$ | $-\frac{d[A]}{dt} = k[A]^2$ | $\frac{1}{[A](t)} = \frac{1}{[A]_0} + k \cdot t$ | $t_{1/2} = \frac{1}{k[A]_0}$ |

*Note : $k$ est la constante de vitesse, qui dépend de la température (loi d'Arrhenius).*

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
La décomposition thermique de l'azométhane $\text{CH}_3\text{N}_2\text{CH}_3$ en phase gaz est une réaction d'ordre 1. La constante de vitesse à une température donnée vaut $k = 2,5 \times 10^{-4} \text{ s}^{-1}$.
Calculer le temps de demi-réaction $t_{1/2}$ de cette transformation.

**Résolution :**
1. **Identifier la nature de la cinétique :** L'énoncé indique qu'il s'agit d'une réaction d'ordre 1.
2. **Mobiliser la formule adéquate :** Pour une réaction d'ordre 1, le temps de demi-réaction ne dépend pas de la concentration initiale $[A]_0$ et s'exprime par la relation :
   $$t_{1/2} = \frac{\ln(2)}{k}$$
3. **Application numérique :**
   $$t_{1/2} = \frac{\ln(2)}{2,5 \times 10^{-4} \text{ s}^{-1}}$$
   $$t_{1/2} \approx \frac{0,6931}{2,5 \times 10^{-4}} \approx 2772,6 \text{ s}$$
4. **Conclusion :** Le temps de demi-réaction est de l'ordre de $2,78 \times 10^3 \text{ s}$ (soit environ 46 minutes).

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention aux unités dans les calculs de vitesse :** Veillez à bien homogénéiser les unités de volume (souvent le litre $L$ dans les concentrations et le mètre cube $m^3$ dans le Système International) et de temps (secondes ou minutes).
*   **Ne pas confondre ordre global et ordre partiel :** L'ordre global d'une réaction est la somme des ordres partiels par rapport à chaque réactif intervenant dans la loi de vitesse.
*   **Le signe de la vitesse :** Une vitesse de réaction est **toujours positive** ($v \ge 0$). N'oubliez jamais le signe "$-$" devant la dérivée de la concentration d'un réactif.
*   **Graphiques et tangentes :** Pour déterminer graphiquement une vitesse à un instant $t$, il faut tracer la **tangente** à la courbe représentant l'avancement (ou la concentration) en ce point, et calculer son coefficient directeur. Ne confondez pas la pente de la sécante (qui donne une vitesse moyenne) et la pente de la tangente (qui donne la vitesse instantanée).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
