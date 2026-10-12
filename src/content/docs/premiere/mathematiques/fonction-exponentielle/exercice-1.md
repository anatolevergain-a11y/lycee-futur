---
title: "Exercice 1 : Modélisation du refroidissement d'un matériau"
description: "Application pratique du chapitre Fonction exponentielle"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'élaboration de pièces métalliques destinées à l'industrie aérospatiale, le contrôle de la vitesse de refroidissement d'un alliage d'aluminium est une étape critique pour garantir ses propriétés mécaniques (limite élastique, ductilité). 

Lors de sa sortie du four, un bloc d'aluminium présente une température initiale homogène notée $T_0$. Il est alors placé dans une enceinte thermorégulée maintenue à une température ambiante constante $T_{\text{amb}} = 20 \text{ °C}$.

La modélisation thermodynamique de ce phénomène, connue sous le nom de **loi de refroidissement de Newton**, établit que le taux de variation de la température du matériau est proportionnel à la différence entre sa température instantanée et celle de l'environnement. 

Des mesures expérimentales menées en laboratoire permettent d'ajuster ce modèle théorique. On note $T(t)$ la température du matériau (en $\text{°C}$) en fonction du temps $t$ (en minutes). Le modèle mathématique retenu est de la forme :

$$T(t) = A + B e^{-kt}$$

où $A$, $B$ et $k$ sont des constantes réelles strictement positives qui dépendent des caractéristiques physiques du matériau (capacité thermique, masse, surface d'échange) et des conditions de l'enceinte.

Les relevés expérimentaux fournissent les données suivantes :
* À l'instant initial $t = 0 \text{ min}$ (sortie du four), la température du matériau est $T(0) = 520 \text{ °C}$.
* À long terme, lorsque le temps $t$ tend vers l'infini, la température du matériau tend vers celle de l'enceinte, soit $20 \text{ °C}$.
* Au bout de $t = 10 \text{ min}$, la température mesurée est de $T(10) = 220 \text{ °C}$.

*Note critique sur le modèle :* Bien que rigoureux mathématiquement, ce modèle suppose un coefficient d'échange thermique constant et une température ambiante rigoureusement stable. En réalité, les variations locales de convection thermique et l'incertitude des capteurs (estimée à $\pm 1,5 \text{ °C}$) imposent d'analyser les résultats avec un esprit critique quant à leur validité absolue.

---

### ❓ Énoncé

1. En exploitant les données du texte et les limites mathématiques du modèle, déterminer la valeur exacte des constantes $A$ et $B$.
2. Exprimer $T(t)$ en fonction de $t$, puis déterminer la valeur exacte du coefficient de refroidissement $k$, avant d'en donner un arrondi au millième. Préciser l'unité de $k$.
3. Un opérateur doit manipuler la pièce dès que sa température descend en dessous de $60 \text{ °C}$ pour des raisons de sécurité thermique. Déterminer par le calcul, à la minute près, l'instant à partir duquel cette condition est remplie.
4. **Esprit critique :** Le cahier des charges industriel impose que la pièce soit refroidie à moins de $60 \text{ °C}$ en un temps inférieur ou égal à $25 \text{ min}$. Compte tenu de l'incertitude expérimentale de $\pm 1,5 \text{ °C}$ sur la mesure de la température, le modèle garantit-il de manière absolue le respect de ce critère de sécurité ? Justifier la réponse par une analyse logique.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez la limite de la fonction lorsque $t$ tend vers $+\infty$ pour trouver $A$, sachant que $e^{-kt} \to 0$ pour $k > 0$. Utilisez ensuite la condition initiale $T(0)$ pour trouver $B$.
* **Question 2 :** Réinjectez les valeurs de $A$ et $B$, puis utilisez l'information $T(10) = 220$ et les propriétés de la fonction logarithme népérien ($\ln$) pour isoler $k$.
* **Question 3 :** Posez une inéquation (ou une équation) avec la condition $T(t) < 60$ et résolvez-la à l'aide de la fonction $\ln$.
* **Question 4 :** Calculez la température théorique à $t = 25 \text{ min}$ et intégrez la marge d'incertitude pour voir si le seuil critique des $60 \text{ °C}$ peut être dépassé en pratique.

---

### 📋 Correction détaillée pas à pas

#### 1. Détermination des constantes $A$ et $B$
* **Calcul de $A$ :**
  Physiquement, lorsque le temps s'élève indéfiniment ($t \to +\infty$), le matériau atteint l'équilibre thermique avec son milieu extérieur. Mathématiquement, comme $k > 0$, on a $\lim_{t \to +\infty} e^{-kt} = 0$.
  Par conséquent :
  $$\lim_{t \to +\infty} T(t) = \lim_{t \to +\infty} (A + B e^{-kt}) = A + B \times 0 = A$$
  L'énoncé indique que la température ambiante est de $20 \text{ °C}$, donc :
  $$A = 20$$

* **Calcul de $B$ :**
  On utilise la condition initiale à $t = 0 \text{ min}$ :
  $$T(0) = 520$$
  En remplaçant $t$ par $0$ dans l'expression du modèle avec $A = 20$ :
  $$20 + B e^{-k \times 0} = 520$$
  $$20 + B \times 1 = 520$$
  $$B = 520 - 20 = 500$$

Le modèle s'écrit donc désormais : $T(t) = 20 + 500 e^{-kt}$.

---

#### 2. Détermination du coefficient $k$
On utilise la donnée expérimentale à $t = 10 \text{ min}$ : $T(10) = 220$.
$$20 + 500 e^{-10k} = 220$$
$$500 e^{-10k} = 220 - 20$$
$$500 e^{-10k} = 200$$
$$e^{-10k} = \frac{200}{500} = \frac{2}{5} = 0{,}4$$

Pour résoudre cette équation, on applique la fonction logarithme népérien ($\ln$), qui est la bijection réciproque de la fonction exponentielle :
$$\ln(e^{-10k}) = \ln(0{,}4)$$
$$-10k = \ln(0{,}4)$$
$$k = -\frac{\ln(0{,}4)}{10}$$

Calcul numérique :
$$k = -\frac{-0{,}9163}{10} \approx 0{,}09163$$
Au millième, on obtient : $k \approx 0{,}092$.
*Unité du coefficient $k$ :* Puisque l'argument de l'exponentielle ($-kt$) doit être sans dimension, et que $t$ est exprimé en minutes ($\text{min}$), le coefficient $k$ s'exprime en **$\text{min}^{-1}$** (ou par minute).

---

#### 3. Détermination de l'instant de manipulation
On cherche le plus petit temps $t$ tel que $T(t) < 60$ :
$$20 + 500 e^{-kt} < 60$$
$$500 e^{-kt} < 40$$
$$e^{-kt} < \frac{40}{500} = 0{,}08$$

En appliquant la fonction $\ln$ (strictement croissante sur $]0 ; +\infty[$), le sens de l'inégalité est conservé :
$$\ln(e^{-kt}) < \ln(0{,}08)$$
$$-kt < \ln(0{,}08)$$

Comme $k > 0$, diviser par $-k$ inverse le sens de l'inégalité :
$$t > \frac{\ln(0{,}08)}{-k}$$

En remplaçant $k$ par son expression exacte $-\frac{\ln(0{,}4)}{10}$ :
$$t > \frac{\ln(0{,}08)}{-\left(-\frac{\ln(0{,}4)}{10}\right)} = \frac{10 \ln(0{,}08)}{\ln(0{,}4)}$$

Calcul numérique :
$$t > \frac{10 \times (-2{,}5257)}{-0{,}9163} \approx \frac{-25{,}257}{-0{,}9163} \approx 27{,}56 \text{ min}$$

À la minute près, l'opérateur ne peut manipuler la pièce qu'à partir de **$28 \text{ min}$** (car à $t = 27 \text{ min}$, la température est encore légèrement supérieure à $60 \text{ °C}$).

---

#### 4. Analyse critique et limites du modèle
Calculons d'abord la température théorique prédite par le modèle à l'échéance exigée de $t = 25 \text{ min}$ :
$$T(25) = 20 + 500 e^{-0{,}09163 \times 25} = 20 + 500 e^{-2{,}29075} \approx 20 + 500 \times 0{,}1011 \approx 70{,}55 \text{ °C}$$

À $t = 25 \text{ min}$, la température théorique est d'environ $70{,}6 \text{ °C}$, ce qui est supérieur au seuil de $60 \text{ °C}$. Le modèle indique donc que le critère de refroidissement n'est **pas** respecté à $25 \text{ min}$ (puisque le seuil n'est atteint qu'à environ $27{,}6 \text{ min}$).

*Prise en compte de l'incertitude expérimentale :*
L'incertitude des capteurs est de $\pm 1{,}5 \text{ °C}$. De plus, un modèle mathématique n'est qu'une approximation idéalisée de la réalité physique (négligeant par exemple les micro-variations de ventilation de l'enceinte). 
Même en considérant l'hypothèse la plus favorable où la température réelle serait plus basse de $1{,}5 \text{ °C}$ par rapport au modèle, la température serait de $70{,}6 - 1{,}5 = 69{,}1 \text{ °C}$, ce qui reste largement au-dessus du seuil de sécurité de $60 \text{ °C}$. 

**Conclusion scientifique :** Le modèle mathématique démontre de manière robuste que le critère de $25 \text{ min}$ n'est pas rempli. Toutefois, l'esprit critique impose de rappeler qu'une décision industrielle ne doit pas reposer uniquement sur une courbe théorique, mais être validée par des mesures empiriques in situ, en raison des incertitudes inhérentes aux conditions de fabrication.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
