---
title: "Exercice 1 : Optimisation de rendements industriels"
description: "Application pratique du chapitre Dérivation et applications"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la transition énergétique et de l'optimisation des procédés chimiques industriels, la synthèse de l'ammoniac ($\text{NH}_3$) ou la production de biocarburants nécessitent un contrôle rigoureux des réacteurs catalytiques. 

Considérons une unité pilote de production chimique. Des campagnes de mesures empiriques, menées sous une pression constante de $15\text{ MPa}$ et une température régulée de $450\text{ }\text{°C}$, ont permis de modéliser le taux de conversion chimique $R(x)$ (exprimé en pourcentage de réactifs transformés) en fonction du débit d'alimentation en réactifs, noté $x$ (exprimé en $\text{m}^3\text{/h}$).

Le modèle mathématique validé par le service R&D pour ce réacteur s'écrit, sur l'intervalle d'exploitation sécuritaire $[1 ; 10]$ :
$$R(x) = -2x^3 + 21x^2 - 36x + 10$$

Toutefois, les ingénieurs rappellent que ce modèle polynomial est une approximation locale. Il ne prend pas en compte les fluctuations thermiques mineures ni l'usure progressive du catalyseur, ce qui introduit une incertitude estimée à $\pm 3\text{ \%}$ sur les valeurs réelles mesurées en continu. Par ailleurs, un débit trop faible nuit à la rentabilité globale de l'usine, tandis qu'un débit trop élevé augmente les risques de contraintes thermiques et de pertes non converties.

---

### ❓ Énoncé

1. **Calcul de variation et modélisation :**
   Déterminer la fonction dérivée $R'$ de la fonction $R$ sur l'intervalle $[1 ; 10]$. Expliciter l'ensemble des variations de $R$ sur cet intervalle à l'aide d'un tableau de variations rigoureux.

2. **Recherche de l'optimum technique :**
   Calculer le débit d'alimentation $x$ qui permet d'atteindre le rendement maximal théorique du réacteur. Justifier la réponse par l'étude du signe de la dérivée.

3. **Analyse critique des contraintes industrielles :**
   Les contraintes de maintenance imposent un seuil minimal de rendement de $50\text{ \%}$ pour que l'exploitation soit économiquement viable. 
   À l'aide du théorème des valeurs intermédiaires (ou d'une résolution algébrique rigoureuse), déterminer l'amplitude de l'intervalle de débit pour lequel l'industriel atteint ou dépasse ce seuil de rentabilité.

4. **Esprit critique et limites du modèle :**
   En tenant compte de l'incertitude de $\pm 3\text{ \%}$ inhérente aux mesures physiques sur site et des limites du modèle polynomial, l'ingénieur peut-il recommander de régler le débit exactement à la valeur optimale trouvée à la question 2 ? Argumenter en mobilisant les notions d'intervalle de confiance et de robustesse du système.

---

### 💡 Indice de méthode

* **Pour la question 1 :** Utilisez les formules usuelles de dérivation des fonctions polynômes (notamment $(x^n)' = n x^{n-1}$). Le tableau de variations doit comporter la ligne du signe de $R'(x)$ et celle des variations de $R(x)$.
* **Pour la question 2 :** L'optimisation d'une fonction dérivable sur un intervalle fermé passe par l'annulation de sa dérivée. Pensez à vérifier le discriminant du polynôme du second degré obtenu pour $R'(x)$.
* **Pour la question 3 :** Posez l'inéquation $R(x) \ge 50$ et factorisez l'expression polynomiale en remarquant une racine évidente.
* **Pour la question 4 :** Ne raisonnez pas de manière purement théorique : un optimum mathématique strict n'est pas nécessairement stable ou réalisable dans l'incertitude d'un milieu industriel réel.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la dérivée et variations
La fonction $R$ est définie et dérivable sur $[1 ; 10]$ en tant que fonction polynôme.
Calculons sa dérivée $R'(x)$ :
$$R'(x) = -2(3x^2) + 21(2x) - 36(1) + 0$$
$$R'(x) = -6x^2 + 42x - 36$$

Étudions le signe de $R'(x)$ en recherchant ses racines (discriminant $\Delta$) :
$$\Delta = 42^2 - 4(-6)(-36) = 1764 - 864 = 900$$
Puisque $\Delta > 0$, il existe deux racines réelles distinctes :
$$x_1 = \frac{-42 - \sqrt{900}}{2(-6)} = \frac{-42 - 30}{-12} = \frac{-72}{-12} = 6$$
$$x_2 = \frac{-42 + \sqrt{900}}{2(-6)} = \frac{-42 + 30}{-12} = \frac{-12}{-12} = 1$$

Le coefficient dominant de $R'(x)$ étant $a = -6 < 0$, la parabole est tournée vers le bas. Par conséquent, $R'(x)$ est positive entre ses racines et négative à l'extérieur.

* **Signe de $R'(x)$ sur $[1 ; 10]$ :**
  * Pour $x \in [1 ; 6[$, $R'(x) > 0$ (la fonction est strictement croissante).
  * Pour $x = 1$ et $x = 6$, $R'(x) = 0$.
  * Pour $x \in ]6 ; 10]$, $R'(x) < 0$ (la fonction est strictement décroissante).

#### 2. Recherche de l'optimum technique
D'après le tableau de variations établi à la question précédente, la fonction $R$ admet un maximum global sur $[1 ; 10]$ atteint en $x = 6$.
Calculons la valeur de ce rendement maximal :
$$R(6) = -2(6^3) + 21(6^2) - 36(6) + 10$$
$$R(6) = -2(216) + 21(36) - 216 + 10$$
$$R(6) = -432 + 756 - 216 + 10 = 118\text{ \%}$$
*(Note scientifique : Un rendement théorique de $118\text{ \%}$ mathématique met en évidence les limites physiques du modèle polynomial extrapolé en dehors de sa zone stricte de validité, un phénomène fréquent en modélisation empirique).*

Le débit optimal théorique est donc de **$6\text{ m}^3\text{/h}$**.

#### 3. Analyse de la viabilité économique
L'industriel recherche les débits $x$ tels que $R(x) \ge 50$.
$$-2x^3 + 21x^2 - 36x + 10 \ge 50 \iff -2x^3 + 21x^2 - 36x - 40 \ge 0$$

Testons une racine évidente pour le polynôme $P(x) = -2x^3 + 21x^2 - 36x - 40$ :
Pour $x = 4$ : 
$$P(4) = -2(64) + 21(16) - 36(4) - 40 = -128 + 334 - 144 - 40 = 0$$
$4$ est donc une racine évidente. On peut factoriser $P(x)$ par $(x - 4)$ :
$$P(x) = (x - 4)(-2x^2 + 13x + 10)$$

Étudions le second facteur $-2x^2 + 13x + 10$ via son discriminant :
$$\Delta = 13^2 - 4(-2)(10) = 169 + 80 = 249$$
$\sqrt{249} \approx 15{,}78$. Les racines sont :
$$x_3 = \frac{-13 - 15{,}78}{-4} \approx 7{,}19$$
$$x_4 = \frac{-13 + 15{,}78}{-4} \approx -0{,}70 \text{ (hors domaine)}$$

En dressant un tableau de signes sur l'intervalle d'étude $[1 ; 10]$, l'inéquation $R(x) \ge 50$ est vérifiée pour **$x \in [4 ; 7{,}19]$**. L'industriel dispose donc d'une plage de fonctionnement viable comprise entre $4\text{ m}^3\text{/h}$ et environ $7{,}19\text{ m}^3\text{/h}$.

#### 4. Esprit critique et limites du modèle
Du point de vue de la rigueur scientifique, il est **déconseillé** de régler le réacteur strictement à la valeur idéale de $6\text{ m}^3\text{/h}$ pour les raisons suivantes :
1. **Incertitude de mesure ($\pm 3\text{ \%}$) :** Le système de régulation industrielle possède une incertitude. Si la mesure réelle fluctue, un fonctionnement au sommet de la courbe (où la dérivée est nulle) signifie que la moindre variation de débit entraîne une baisse immédiate et non compensée du rendement.
2. **Sensibilité locale :** Autour de $x = 6$, la courbe est très "plate" ( tangente horizontale ). Une stratégie d'ingénierie robuste privilégie souvent un fonctionnement légèrement en deçà ou au-delà de l'optimum mathématique strict pour garantir la stabilité du procédé face aux perturbations externes (variations de température, qualité des réactifs).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
