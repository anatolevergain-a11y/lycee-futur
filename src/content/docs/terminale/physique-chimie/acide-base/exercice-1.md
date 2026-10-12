---
title: "Exercice 1 : Calcul du pH de solutions aqueuses"
description: "Application pratique du chapitre Transformations acide-base et pH"
---

### 🌐 Contexte & Données scientifiques

En analyse chimique et en génie des thechniques industrielles ou environnementales, la maîtrise et la mesure du pH (potentiel Hydrogène) sont cruciales. Toutefois, l'utilisation des modèles simplifiés de la chimie des solutions (solutions idéales, approximations des équilibres) nécessite de garder un esprit critique face aux limites expérimentales.

Soit une solution aqueuse d'acide éthanoïque ($\text{CH}_3\text{COOH}$) de concentration en quantité de matière apportée $C = 1,0 \times 10^{-2} \text{ mol}\cdot\text{L}^{-1}$ à la température de $25 \text{ }^\circ\text{C}$.

Données à $25 \text{ }^\circ\text{C}$ :
- Produit ionique de l'eau : $K_e = 10^{-14}$ (soit $\text{p}K_e = 14,0$).
- Couple acide/base $\text{CH}_3\text{COOH}_{(aq)} / \text{CH}_3\text{COO}^-_{(aq)}$ : $\text{p}K_a = 4,8$ (soit $K_a \approx 1,6 \times 10^{-5}$).
- On rappelle la définition du pH : $\text{pH} = -\log\left(\frac{[\text{H}_3\text{O}^+]}{c^\circ}\right)$, avec $c^\circ = 1 \text{ mol}\cdot\text{L}^{-1}$ (grandeur sans dimension).

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Écriture et modélisation :** Écrire l'équation de la réaction chimique modélisant la transformation de l'acide éthanoïque avec l'eau. Expliciter les hypothèses simplificatrices usuelles menant à l'expression de la constante d'acidité $K_a$ en fonction de $C$, $[\text{H}_3\text{O}^+]$ et du taux d'avancement final $\tau$.
2. **Calcul de pH sous hypothèse :** En faisant l'hypothèse que la transformation est peu avancée ($\tau \ll 1$), établir l'expression littérale du pH de cette solution en fonction de $\text{p}K_a$ et de $C$. Calculer la valeur numérique du pH.
3. **Analyse critique du modèle :** Valider a posteriori l'hypothèse $\tau \ll 1$ à l'aide des résultats précédents. Quel constat formule-t-on quant à la rigueur de l'approximation pour cette concentration ?
4. **Limite du modèle :** Que deviendrait l'expression simplifiée du pH si la concentration $C$ était abaissée à $1,0 \times 10^{-7} \text{ mol}\cdot\text{L}^{-1}$ ? Discuter de la validité physique et chimique du résultat calculé par le modèle dans ces conditions de forte dilution.

---

### 💡 Indice de méthode

- Pour la question 2, dressez un tableau d'avancement en concentration (ou en quantité) pour exprimer les concentrations effectives des espèces à l'équilibre chimique.
- N'oubliez pas que la vérification d'une hypothèse scientifique (comme $\tau < 0,05$ ou $5\%$) est une démarche indispensable avant de valider définitivement une valeur numérique.

---

### 📋 Correction détaillée pas à pas

#### 1. Écriture de la réaction et expression de $K_a$
L'équation de la réaction acido-basique modélisant la mise en solution de l'acide éthanoïque est :
$$\text{CH}_3\text{COOH}_{(aq)} + \text{H}_2\text{O}_{(l)} \rightleftarrows \text{CH}_3\text{COO}^-_{(aq)} + \text{H}_3\text{O}^+_{(aq)}$$

La constante d'acidité associée au couple s'écrit :
$$K_a = \frac{[\text{CH}_3\text{COO}^-]_{\text{eq}} \cdot [\text{H}_3\text{O}^+]_{\text{eq}}}{[\text{CH}_3\text{COOH}]_{\text{eq}} \cdot c^\circ}$$

D'après le tableau d'avancement pour un volume $V$ de solution :
- $[\text{H}_3\text{O}^+]_{\text{eq}} = \frac{x_{\text{eq}}}{V}$
- $[\text{CH}_3\text{COO}^-]_{\text{eq}} = \frac{x_{\text{eq}}}{V}$
- $[\text{CH}_3\text{COOH}]_{\text{eq}} = \frac{C \cdot V - x_{\text{eq}}}{V} = C - \frac{x_{\text{eq}}}{V} = C - [\text{H}_3\text{O}^+]_{\text{eq}}$

Le taux d'avancement final est $\tau = \frac{x_{\text{eq}}}{x_{\text{max}}} = \frac{x_{\text{eq}}}{C \cdot V}$, d'où $[\text{H}_3\text{O}^+]_{\text{eq}} = C \cdot \tau$.

#### 2. Calcul du pH sous l'hypothèse $\tau \ll 1$
Si la transformation est peu avancée ($\tau \ll 1$ soit $[\text{CH}_3\text{COOH}]_{\text{eq}} \approx C$), l'expression de $K_a$ devient :
$$K_a \approx \frac{C^2 \cdot \tau^2}{C} = C \cdot \tau^2 \quad \text{ou} \quad K_a \approx \frac{[\text{H}_3\text{O}^+]^2}{C}$$

En réarrangeant pour exprimer $[\text{H}_3\text{O}^+]$ :
$$[\text{H}_3\text{O}^+] = \sqrt{K_a \cdot C}$$

En appliquant le $-\log$ :
$$\text{pH} = -\log\left(\sqrt{K_a \cdot C}\right) = -\frac{1}{2}\log(K_a) - \frac{1}{2}\log(C)$$
$$\text{pH} = \frac{1}{2}\text{p}K_a - \frac{1}{2}\log(C)$$

Application numérique avec $\text{p}K_a = 4,8$ et $C = 1,0 \times 10^{-2} \text{ mol}\cdot\text{L}^{-1}$ :
$$\text{pH} = \frac{1}{2}(4,8) - \frac{1}{2}\log(1,0 \times 10^{-2}) = 2,4 - \frac{1}{2}(-2,0) = 2,4 + 1,0 = 3,4$$

#### 3. Analyse critique du modèle et validation de l'hypothèse
Vérifions l'hypothèse $\tau \ll 1$ :
$$[\text{H}_3\text{O}^+] = 10^{-\text{pH}} = 10^{-3,4} \approx 3,98 \times 10^{-4} \text{ mol}\cdot\text{L}^{-1}$$
$$\tau = \frac{[\text{H}_3\text{O}^+]}{C} = \frac{3,98 \times 10^{-4}}{1,0 \times 10^{-2}} = 3,98 \times 10^{-2} = 3,98 \text{ \%}$$

Puisque $\tau \approx 4 \% < 5 \text{ \%}$, l'hypothèse $\tau \ll 1$ est mathématiquement et chimiquement acceptable. Le modèle simplifié est donc validé avec une incertitude inhérente aux mesures de pH usuelles (généralement $\pm 0,1$ unité pH).

#### 4. Limite du modèle pour les solutions très diluées
Si $C = 1,0 \times 10^{-7} \text{ mol}\cdot\text{L}^{-1}$, la formule simplifiée $\text{pH} = \frac{1}{2}\text{p}K_a - \frac{1}{2}\log(C)$ donnerait :
$$\text{pH} = 2,4 - \frac{1}{2}(-7,0) = 2,4 + 3,5 = 5,9$$

**Esprit critique :** Une solution aqueuse d'un acide (fût-il faible), aussi diluée soit-elle, ne saurait présenter un pH supérieur à $7,0$ à $25 \text{ }^\circ\text{C}$ (ce qui indiquerait un caractère basique). 
Ce résultat aberrant met en évidence les limites du modèle simplifié : il néglige systématiquement l'autoprotolyse de l'eau ($\text{2 H}_2\text{O}_{(l)} \rightleftarrows \text{H}_3\text{O}^+_{(aq)} + \text{OH}^-_{(aq)}$). Pour des solutions extrêmement diluées, les ions $\text{H}_3\text{O}^+$ provenant de l'eau ne sont plus négligeables devant ceux apportés par l'acide. Il conviendrait alors de résoudre une équation du second, voire du troisième degré, tout en tenant compte de l'électroneutralité de la solution.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
