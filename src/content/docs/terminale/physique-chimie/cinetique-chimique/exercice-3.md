---
title: "Exercice 3 : Catalyse et applications industrielles"
description: "Application pratique du chapitre Cinétique chimique"
---

### 🌐 Contexte & Données scientifiques

L’industrie chimique moderne cherche constamment à concislier performance économique, transition énergétique et chimie verte. La synthèse industrielle de l'ammoniac ($\text{NH}_3$), procédé Haber-Bosch mis au point au début du XXe siècle, illustre parfaitement ces compromis. 

À l’état standard, la réaction de synthèse s'écrit :
$$\text{N}_2\text{(g)} + 3\,\text{H}_2\text{(g)} \rightleftharpoons 2\,\text{NH}_3\text{(g)}$$

Cette réaction est exothermique ($\Delta_r H^\circ < 0$). Sur le plan thermodynamique, la formation de l'ammoniac est favorisée par des températures basses et des pressions élevées. Cependant, à basse température, la cinétique de la réaction est extrêmement lente en raison de la forte énergie de liaison de la molécule de diazote ($\text{N} \equiv \text{N}$, $E_{\text{liaison}} = 945\,\text{kJ}\cdot\text{mol}^{-1}$).

Pour rendre le procédé viable industriellement, on utilise un catalyseur hétérogène à base de fer enrichi en oxydes de potassium et d'aluminium. Les conditions opératoires industrielles usuelles sont un compromis technologique et économique :
*   **Température :** $400\,^\circ\text{C}$ à $500\,^\circ\text{C}$
*   **Pression :** $150\,\text{MPa}$ à $250\,\text{MPa}$ ($150$ à $250\,\text{bar}$)

La vitesse volumique de formation de l'ammoniac en réacteur continu peut être modélisée par une loi empirique dépendante de la température $T$ et de l'activité des espèces. On étudie ici l'impact de la température et du catalyseur sur le temps de demi-réaction $t_{1/2}$ et sur l'énergie d'activation $E_a$ de la réaction.

Données cinétiques mesurées en laboratoire (volume réactionnel constant, mélange stœchiométrique initial) :

| Température $T$ ($^\circ\text{C}$) | Sans catalyseur : $t_{1/2}$ (heures) | Avec catalyseur au Fer : $t_{1/2}$ (secondes) |
| :---: | :---: | :---: |
| $300$ | $1,2 \times 10^5$ | $3,6 \times 10^3$ |
| $400$ | $4,5 \times 10^3$ | $1,8 \times 10^2$ |
| $500$ | $2,1 \times 10^2$ | $1,2 \times 10^1$ |

---

### ❓ Énoncé

1. **Analyse cinétique et thermodynamique :** À partir du contexte, expliquer pourquoi les conditions thermodynamiques optimales (basses températures) s'opposent aux impératifs cinétiques, et préciser par quel mécanisme microscopique le catalyseur permet de résoudre ce paradoxe sans modifier la constante d'équilibre $K(T)$.
2. **Exploitation des données et loi d'Arrhenius :** Définir l'énergie d'activation $E_a$. À l'aide des données du tableau pour la réaction catalysée, calculer la valeur de l'énergie d'activation $E_a$ entre $300\,^\circ\text{C}$ et $500\,^\circ\text{C}$, en supposant la constante de vitesse proportionnelle à l'inverse du temps de demi-réaction ($k \propto \frac{1}{t_{1/2}}$). On donne la constante des gaz parfaits $R = 8,314\,\text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$.
3. **Esprit critique et compromis industriel :** Discuter des limites de l'utilisation d'une température élevée ($500\,^\circ\text{C}$) en termes de rendement thermodynamique et d'impact énergétique, malgré son intérêt cinétique manifeste.

---

### 💡 Indice de méthode

*   *Question 1 :* Pensez à relier la vitesse macroscopique à l'énergie d'activation (loi d'Arrhenius) et rappelez qu'un catalyseur accélère autant la réaction directe que la réaction inverse.
*   *Question 2 :* Exprimez la loi d'Arrhenius sous la forme $\ln\left(\frac{k_2}{k_1}\right) = -\frac{E_a}{R} \left(\frac{1}{T_2} - \frac{1}{T_1}\right)$. Veillez à convertir les températures en Kelvin et à exprimer $t_{1/2}$ dans une unité cohérente (le rapport des temps inverse le rapport des constantes de vitesse).
*   *Question 3 :* Mettez en balance l'effet de la température sur la cinétique (loi de van 't Hoff / Arrhenius) et sur l'équilibre chimique (loi de déplacement d'équilibre pour une réaction exothermique).

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse cinétique, thermodynamique et rôle du catalyseur
*   **Contradiction thermo-cinétique :** La réaction de synthèse est exothermique ($\Delta_r H^\circ < 0$). Selon la loi de van 't Hoff, une élévation de température déplace l'équilibre dans le sens endothermique, ce qui diminue le taux d'avancement final (rendement thermodynamique plus faible). Inversement, abaisser la température déplace l'équilibre vers la formation de $\text{NH}_3$, mais l'énergie cinétique moyenne des molécules devient insuffisante pour franchir la barrière d'activation élevée, rendant la cinétique nulle à l'échelle humaine.
*   **Rôle du catalyseur :** Le catalyseur offre un nouveau chemin réactionnel comportant plusieurs étapes élémentaires dont les énergies d'activation sont individuellement plus faibles. Il diminue l'énergie d'activation globale $E_a$. 
*   **Impact thermodynamique :** Le catalyseur accélère de la même manière la réaction directe et la réaction inverse. Il permet d’atteindre l’état d’équilibre plus rapidement, mais **ne modifie en aucun caso la composition du système à l'équilibre**, ni la constante d'équilibre $K(T)$.

#### 2. Calcul de l'énergie d'activation $E_a$
L'énergie d'activation caractérise la sensibilité de la constante de vitesse $k$ à la température, selon la loi d'Arrhenius :
$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

Pour une cinétique d'ordre global donné, le temps de demi-réaction est inversement proportionnel à la constante de vitesse ($t_{1/2} \propto \frac{1}{k}$). On peut donc écrire :
$$\frac{k(T_2)}{k(T_1)} = \frac{t_{1/2}(T_1)}{t_{1/2}(T_2)} = \exp\left[-\frac{E_a}{R} \left(\frac{1}{T_2} - \frac{1}{T_1}\right)\right]$$

Appliquons cette relation entre $T_1 = 300\,^\circ\text{C} = 573,15\,\text{K}$ et $T_2 = 500\,^\circ\text{C} = 773,15\,\text{K}$ pour la réaction **catalysée** :
*   $t_{1/2}(T_1) = 3,6 \times 10^3\,\text{s}$
*   $t_{1/2}(T_2) = 1,2 \times 10^1\,\text{s}$

En appliquant le logarithme népérien :
$$\ln\left(\frac{t_{1/2}(300^\circ\text{C})}{t_{1/2}(500^\circ\text{C})}\right) = -\frac{E_a}{R} \left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

$$\ln\left(\frac{3,6 \times 10^3}{1,2 \times 10^1}\right) = \ln(300) \approx 5,704$$

Le terme entre parenthèses est :
$$\left(\frac{1}{773,15} - \frac{1}{573,15}\right) \approx 1,293 \times 10^{-3} - 1,745 \times 10^{-3} = -4,519 \times 10^{-4}\,\text{K}^{-1}$$

On isole $E_a$ :
$$5,704 = -\frac{E_a}{8,314} \times (-4,519 \times 10^{-4})$$

$$E_a = \frac{5,704 \times 8,314}{4,519 \times 10^{-4}} \approx 1,05 \times 10^5\,\text{J}\cdot\text{mol}^{-1} = 105\,\text{kJ}\cdot\text{mol}^{-1}$$

*Conclusion scientifique :* L'énergie d'activation de la réaction catalysée est de l'ordre de $105\,\text{kJ}\cdot\text{mol}^{-1}$ (elle serait significativement plus élevée sans catalyseur).

#### 3. Analyse critique du compromis industriel
*   **Limites de la température élevée :** Si $500\,^\circ\text{C}$ permet d'obtenir un temps de demi-réaction très court ($12\,\text{s}$ contre $3600\,\text{s}$ à $300\,^\circ\text{C}$), cela se fait au détriment du rendement. En raison du caractère exothermique de la synthèse, la constante d'équilibre $K$ diminue lorsque $T$ augmente. À $500\,^\circ\text{C}$, le taux de conversion par passage dans le réacteur est plus faible qu'à $400\,^\circ\text{C}$.
*   **Compromis technologique :** L'industrie utilise donc une température intermédiaire (autour de $450\,^\circ\text{C}$) combinée à des recyclages de gaz non réagis et à des séparations par condensation de l'ammoniac. De plus, opérer à haute température engendre des coûts énergétiques importants et accélère le vieillissement (frittage) du catalyseur, illustrant la nécessité permanente d'optimiser les procédés chimiques sous contraintes économiques et environnementales.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
