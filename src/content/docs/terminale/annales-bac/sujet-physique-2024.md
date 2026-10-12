---
title: "Bac Physique-Chimie 2024 - Épreuve Écrite"
description: "Sujet officiel type Bac Physique-Chimie entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

**ÉPREUVE DE PHYSIQUE-CHIMIE**
**Série :** Baccalauréat Général
**Durée de l'épreuve :** 3h30
**Coefficient :** 16

---

### EXERCICE 1 : Suivi cinétique et modélisation de la décomposition de l'eau oxygénée (7 points)

L'eau oxygénée (ou solution aqueuse de peroxyde d'hydrogène $H_2O_2$) se décompose lentement selon la réaction d'équation :

$$2\,H_2O_{2\text{(aq)}} \longrightarrow O_{2\text{(g)}} + 2\,H_2O_{\text{(l)}}$$

Cette transformation est totale et lente. Pour étudier sa cinétique, on introduit un volume $V = 100\text{ mL}$ d'une solution commerciale d'eau oxygénée diluée. À l'aide d'un capteur de pression, on mesure au cours du temps la pression $P$ du dioxygène gazeux formé dans un réacteur de volume constant $V_{\text{gaz}} = 0,250\text{ L}$, maintenu à une température constante $T = 298\text{ K}$.

Données :
- Constante des gaz parfaits : $R = 8,314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$
- On assimile le dioxygène $O_2$ à un gaz parfait : $P \cdot V_{\text{gaz}} = n(O_2) \cdot R \cdot T$
- Pression atmosphérique de référence : $P_{\text{atm}} = 1013\25\text{ Pa}$ (mais seule la surpression de $O_2$ est mesurée).

1. Établir le tableau d'avancement de la réaction en fonction de la quantité de matière initiale $n_0(H_2O_2)$ et de l'avancement $x(t)$.
2. Exprimer la quantité de matière de dioxygène formé à l'instant $t$, notée $n(O_2)_t$, en fonction de la pression $P(t)$ du gaz, du volume $V_{\text{gaz}}$, de $R$ et de $T$.
3. En déduire la relation liant l'avancement $x(t)$, la pression $P(t)$, $V_{\text{gaz}}$, $R$ et $T$.
4. Définir la vitesse volumique de réaction $v(t)$. Donner son expression en fonction de $\frac{dx}{dt}$ et du volume réactionnel $V$ de la solution.
5. Montrer que cette vitesse volumique peut s'exprimer sous la forme : 
   $$v(t) = \frac{1}{R \cdot T} \cdot \frac{V_{\text{gaz}}}{V} \cdot \frac{dP}{dt}$$
6. Le temps de demi-réaction $t_{1/2}$ est mesuré graphiquement à $t_{1/2} = 450\text{ s}$. 
   - Définir le temps de demi-réaction.
   - Expliquer qualitativement l'effet d'une augmentation de la température sur la vitesse de cette réaction et sur la valeur de $t_{1/2}$.

---

### EXERCICE 2 : Thermodynamique d'un chauffe-eau solaire et bilan énergétique (8 points)

Un chauffe-eau solaire individuel (CESI) utilise un panneau thermique pour chauffer un volume $V_0 = 200\text{ L}$ d'eau contenu dans un ballon de stockage. Le fluide caloporteur transfère l'énergie thermique captée du Soleil à l'eau du ballon.

Données et propriétés thermiques :
- Capacité thermique massique de l'eau : $c_{\text{eau}} = 4185\text{ J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$
- Masse volumique de l'eau : $\rho = 1,00\times 10^3\text{ kg}\cdot\text{m}^{-3}$
- Puissance solaire moyenne reçue par le panneau : $P_{\text{sol}} = 1,20\times 10^3\text{ W}$
- Surface utile du panneau solaire : $S = 2,50\text{ m}^2$

**Partie A : Étude du premier principe de la thermodynamique appliqué au ballon**

On suppose dans un premier temps que le ballon de stockage est parfaitement isolé thermiquement de l'extérieur. 

1. Calculer la masse $m$ d'eau contenue dans le ballon.
2. Exprimer, puis calculer l'énergie thermique $Q$ nécessaire pour élever la température de cette masse d'eau d'une température initiale $T_i = 15\text{ \textdegree C}$ à une température de consigne $T_f = 60\text{ \textdegree C}$.
3. Le rendement global du système panneau-échangeur est estimé à $\eta = 60\,\%$. Calculer la puissance thermique effective $P_{\text{eff}}$ transmise à l'eau du ballon.
4. En déduire la durée minimale $\Delta t$ (en heures et minutes) nécessaire pour chauffer l'eau de $15\text{ \textdegree C}$ à $60\text{ \textdegree C}$ sous un ensoleillement constant.

**Partie B : Prise en compte des pertes thermiques réelles**

En réalité, le ballon n'est pas parfaitement isolé. Il subit des transferts thermiques vers la pièce où il est installé (maintenue à une température constante $T_{\text{ext}} = 20\text{ \textdegree C}$). 

La puissance thermique perdue par le ballon s'exprime par la loi de refroidissement de Newton : 
$$P_{\text{perte}}(t) = G \cdot (T_{\text{eau}}(t) - T_{\text{ext}})$$
où $G = 1,50\text{ W}\cdot\text{K}^{-1}$ est le coefficient global de déperdition thermique du ballon.

5. Établir l'équation différentielle régissant l'évolution de la température $T_{\text{eau}}(t)$ de l'eau du ballon lorsque le panneau solaire fonctionne avec la puissance effective $P_{\text{eff}}$.
6. Vérifier que la température limite $T_{\text{lim}}$ atteinte par l'eau du ballon si le chauffage solaire est maintenu indéfiniment s'exprime par :
   $$T_{\text{lim}} = T_{\text{ext}} + \frac{P_{\text{eff}}}{G}$$
   Calculer cette température limite. Le résultat est-il compatible avec une utilisation domestique standard ?

---

### EXERCICE 3 : Exercice de Synthèse (5 points)

*Cet exercice prend la forme d'une restitution organisée de connaissances et d'application.*

L'industrie chimique cherche constamment à concilier des impératifs cinétiques et thermodynamiques lors de la synthèse de molécules à grande échelle (principe de la chimie verte). 

Dans un texte structuré et argumenté, illustré par des exemples du cours de terminale (notamment la cinétique chimique et les transferts thermiques/thermodynamique) :
- Expliquer pourquoi l'augmentation de la température a un effet bénéfique sur la cinétique d'une transformation chimique, mais peut s'avérer néfaste pour le rendement d'une transformation exothermique.
- Discuter du rôle d'un catalyseur dans un réacteur chimique industriel du point de vue de la cinétique et de la thermodynamique.

---

## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

### Conseils méthodologiques pour l'examinateur et le candidat :
1. **Unités et grandeurs :** Veillez à convertir systématiquement les volumes en mètres cubes ($m^3$) ou en litres selon la constante des gaz parfaits utilisée ($R = 8,314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$ impose $P$ en Pascals, $V$ en $m^3$, $n$ en mol, $T$ en Kelvin). Une erreur d'unité dans l'exercice 1 entraîne la perte de 2 points cumulés.
2. **Équations différentielles (Exercice 2) :** L'établissement de l'équation différentielle en thermodynamique (bilan d'énergie) obéit à la même rigueur mathématique qu'en cinétique ou en électricité. Il faut bien identifier le système, écrire le premier principe sous forme infinitésimale ($\frac{dU}{dt} = P_{\text{reçue}} - P_{\text{perdue}}$), puis remplacer $U$ par $m \cdot c \cdot T$.
3. **Rédaction de l'exercice 3 :** La clarté de l'argumentation scientifique, l'emploi de termes précis (énergie d'activation, facteur cinétique, équilibre thermodynamique, exothermique) sont impératifs pour obtenir la note maximale (5/5).

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### CORRIGÉ EXERCICE 1 (7 points)

1. **Tableau d'avancement ($1\text{ pt}$)** :
   Equation : $2\,H_2O_{2\text{(aq)}} \longrightarrow O_{2\text{(g)}} + 2\,H_2O_{\text{(l)}}$
   - État initial ($t = 0$) : $n_0(H_2O_2)$ | $0$ (en $O_2$) | Solvant en excès
   - État en cours ($t$) : $n_0(H_2O_2) - 2x(t)$ | $x(t)$ | Solvant en excès
   *Barème : $0,5\text{ pt}$ pour l'écriture correcte des quantités initiales, $0,5\text{ pt}$ pour l'expression en cours avec les stœchiométries.*

2. **Quantité de matière de $O_2$ ($1\text{ pt}$)** :
   D'après la loi des gaz parfaits : 
   $$P(t) \cdot V_{\text{gaz}} = n(O_2)_t \cdot R \cdot T$$
   Donc :
   $$n(O_2)_t = \frac{P(t) \cdot V_{\text{gaz}}}{R \cdot T}$$
   *Barème : $0,5\text{ pt}$ pour l'énoncé de la loi des gaz parfaits, $0,5\text{ pt}$ pour l'isolement correct de $n(O_2)_t$.*

3. **Relation liant $x(t)$ à $P(t)$ ($1\text{ pt}$)** :
   D'après le tableau d'avancement, la quantité de dioxygène formée à l'instant $t$ est égale à l'avancement $x(t)$ : $n(O_2)_t = x(t)$.
   Par conséquent :
   $$x(t) = \frac{P(t) \cdot V_{\text{gaz}}}{R \cdot T}$$
   *Barème : $1\text{ pt}$ (attribué si la correspondance entre $n(O_2)_t$ et $x(t)$ est explicitée).*

4. **Définition de la vitesse volumique ($1\text{ pt}$)** :
   La vitesse volumique de réaction $v(t)$ est définie par :
   $$v(t) = \frac{1}{V} \cdot \frac{dx}{dt}$$
   où $V$ est le volume de la solution réactionnelle et $x$ l'avancement en moles. Son unité est le $\text{mol}\cdot\text{m}^{-3}\cdot\text{s}^{-1}$ (ou $\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$).
   *Barème : $0,5\text{ pt}$ pour la formule littérale, $0,5\text{ pt}$ pour les unités.*

5. **Expression de $v(t)$ en fonction de $\frac{dP}{dt}$ ($1\text{ pt}$)** :
   En remplaçant $x(t)$ par son expression en fonction de $P(t)$ dans la formule de la vitesse :
   $$v(t) = \frac{1}{V} \cdot \frac{d}{dt}\left(\frac{P(t) \cdot V_{\text{gaz}}}{R \cdot T}\right)$$
   Puisque $V_{\text{gaz}}$, $R$ et $T$ sont constants :
   $$v(t) = \frac{1}{R \cdot T} \cdot \frac{V_{\text{gaz}}}{V} \cdot \frac{dP}{dt}$$
   *Barème : $0,5\text{ pt}$ pour la substitution, $0,5\text{ pt}$ pour la sortie des constantes de la dérivée.*

6. **Temps de demi-réaction et température ($2\text{ pts}$)** :
   - Définition : Le temps de demi-réaction $t_{1/2}$ est la durée au bout de laquelle l'avancement $x(t)$ atteint la moitié de sa valeur finale $x_{\text{max}}$ (ou valeur maximale si la réaction est totale). On a donc $x(t_{1/2}) = \frac{x_{\text{max}}}{2}$. ($1\text{ pt}$)
   - Effet de la température : Une augmentation de la température est une **élévation du facteur cinétique**. Les entités possèdent une agitation thermique plus importante, ce qui augmente la fréquence des chocs efficaces et l'énergie cinétique moyenne. La vitesse de réaction augmente, par conséquent **le temps de demi-réaction $t_{1/2}$ diminue**. ($1\text{ pt}$)

---

### CORRIGÉ EXERCICE 2 (8 points)

**Partie A : Étude du premier principe**

1. **Masse d'eau du ballon ($1\text{ pt}$)** :
   $$m = \rho \cdot V_0 = 1,00\times 10^3\text{ kg}\cdot\text{m}^{-3} \times 200 \times 10^{-3}\text{ m}^3 = 200\text{ kg}$$
   *Barème : $0,5\text{ pt}$ pour la conversion du volume, $0,5\text{ pt}$ pour le calcul final.*

2. **Énergie thermique $Q$ ($1,5\text{ pt}$)** :
   $$Q = m \cdot c_{\text{eau}} \cdot (T_f - T_i)$$
   $$Q = 200 \times 4185 \times (60 - 15) = 200 \times 4185 \times 45$$
   $$Q = 3,7665\times 10^7\text{ J} \approx 3,77\times 10^7\text{ J}$$
   *Barème : $0,5\text{ pt}$ pour la formule, $0,5\text{ pt}$ pour l'écart de température en Kelvin ou Celsius ($45\text{ K}$), $0,5\text{ pt}$ pour le résultat numérique avec le bon nombre de chiffres significatifs.*

3. **Puissance effective $P_{\text{eff}}$ ($1\text{ pt}$)** :
   $$P_{\text{eff}} = \eta \cdot P_{\text{sol\_totale}}$$
   La puissance solaire totale reçue est $P_{\text{sol\_totale}} = P_{\text{sol}} \cdot S = 1,20\times 10^3\text{ W}\cdot\text{m}^{-2} \times 2,50\text{ m}^2 = 3000\text{ W}$.
   $$P_{\text{eff}} = 0,60 \times 3000\text{ W} = 1800\text{ W}$$
   *(Alternative : $P_{\text{eff}} = \eta \cdot P_{\text{sol}} \cdot S$)*
   *Barème : $0,5\text{ pt}$ pour le calcul de la puissance reçue par la surface, $0,5\text{ pt}$ pour l'application du rendement.*

4. **Durée minimale $\Delta t$ ($1\text{ pt}$)** :
   La puissance moyenne est le rapport de l'énergie sur le temps : $P_{\text{eff}} = \frac{Q}{\Delta t}$ donc $\Delta t = \frac{Q}{P_{\text{eff}}}$.
   $$\Delta t = \frac{3,7665\times 10^7}{1800} \approx 20925\text{ s}$$
   En heures : $\Delta t = \frac{20925}{3600} \approx 5,81\text{ h}$, soit $5\text{ h}$ et $0,81 \times 60 \approx 49\text{ min}$ (soit $5\text{ h } 49\text{ min}$).
   *Barème : $0,5\text{ pt}$ pour la formule, $0,5\text{ pt}$ pour la conversion en heures/minutes.*

**Partie B : Pertes thermiques et régime permanent**

5. **Équation différentielle ($2\text{ pts}$)** :
   D'après le premier principe de la thermodynamique appliqué au système (l'eau du ballon) :
   $$\frac{dU}{dt} = P_{\text{reçue}} - P_{\text{perdue}}$$
   Où l'énergie interne s'exprime par $U = m \cdot c_{\text{eau}} \cdot T_{\text{eau}}(t) + \text{cte}$, ce qui donne $\frac{dU}{dt} = m \cdot c_{\text{eau}} \cdot \frac{dT_{\text{eau}}}{dt}$.
   En remplaçant par les puissances :
   $$m \cdot c_{\text{eau}} \cdot \frac{dT_{\text{eau}}}{dt} = P_{\text{eff}} - G \cdot (T_{\text{eau}}(t) - T_{\text{ext}})$$
   Sous forme canonique :
   $$\frac{dT_{\text{eau}}}{dt} + \frac{G}{m \cdot c_{\text{eau}}} \cdot T_{\text{eau}}(t) = \frac{P_{\text{eff}} + G \cdot T_{\text{ext}}}{m \cdot c_{\text{eau}}}$$
   *Barème : $1\text{ pt}$ pour le bilan de puissance, $1\text{ pt}$ pour l'obtention de l'équation différentielle finale.*

6. **Température limite $T_{\text{lim}}$ ($1,5\text{ pt}$)** :
   En régime permanent, la température ne varie plus au cours du temps, donc $\frac{dT_{\text{eau}}}{dt} = 0$.
   L'équation différentielle devient :
   $$0 = P_{\text{eff}} - G \cdot (T_{\text{lim}} - T_{\text{ext}})$$
   $$G \cdot (T_{\text{lim}} - T_{\text{ext}}) = P_{\text{eff}} \implies T_{\text{lim}} = T_{\text{ext}} + \frac{P_{\text{eff}}}{G}$$
   A.N. :
   $$T_{\text{lim}} = 20 + \frac{1800}{1,50} = 20 + 1200 = 1220\text{ \textdegree C}$$
   *Analyse critique :* Cette température est de $1220\text{ \textdegree C}$, ce qui est largement supérieur à la température d'ébullition de l'eau ($100\text{ \textdegree C}$). Ce résultat théorique montre que le ballon bouillirait et se vaporiserait rapidement. En pratique, le système est doté d'une régulation (soupape de sécurité, arrêt du circulateur) pour éviter une telle surchauffe.
   *Barème : $0,5\text{ pt}$ pour la condition de régime permanent $\frac{dT}{dt} = 0$, $0,5\text{ pt}$ pour le calcul numérique, $0,5\text{ pt}$ pour la critique physique pertinente.*

---

### CORRIGÉ EXERCICE 3 : Exercice de Synthèse (5 points)

*Structure de la correction type attendue pour l'évaluation :*

1. **Introduction (environ 5 lignes) :**
   Présentation de la problématique industrielle : concilier rapidité de fabrication (cinétique) et maximisation du produit souhaité à l'équilibre (thermodynamique). ($0,75\text{ pt}$)

2. **Le compromis cinétique / thermodynamique lié à la température ($2\text{ pts}$)** :
   - *Effet cinétique :* L'élévation de la température est un facteur cinétique majeur. Elle augmente la vitesse de réaction en accroissant l'agitation thermique et la proportion de molécules possédant l'énergie d'activation requise (loi d'Arrhenius).
   - *Effet thermodynamique :* Pour une réaction exothermique ($\Delta H < 0$), souvent favorisée par le refroidissement selon la loi de van 't Hoff ou les critères d'évolution, une élévation excessive de la température déplace l'état d'équilibre dans le sens endothermique (sens inverse). Le rendement final diminue donc, même si l'état d'équilibre est atteint plus rapidement. Il existe par conséquent une température optimale.

3. **Le rôle spécifique du catalyseur ($1,5\text{ pt}$)** :
   - Un catalyseur (homogène ou hétérogène) accélère la transformation chimique en modifiant le mécanisme réactionnel et en abaissant l'énergie d'activation globale.
   - Il n'apparaît pas dans le bilan stœchiométrique global et **ne modifie en aucun cas la constante d'équilibre** $K$ du système. Par conséquent, il n'a aucun effet sur le rendement thermodynamique final de la réaction, mais permet d'atteindre cet état d'équilibre beaucoup plus rapidement et à plus basse température, économisant ainsi de l'énergie.

4. **Conclusion (environ 3 lignes) :**
   Résumé mettant en avant les principes de la chimie verte (diminution des températures de procédés grâce aux catalyseurs, maîtrise des bilans thermiques). ($0,75\text{ pt}$)

*Barème global de la synthèse : Maîtrise des connaissances (2,5 pts), structure et rigueur de l'argumentation (1,5 pt), orthographe et vocabulaire scientifique (1 pt).*