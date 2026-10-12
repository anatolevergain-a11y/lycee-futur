---
title: "Exercice 3 : Bilan thermique de systèmes complexes et rendement"
description: "Application pratique du chapitre Thermodynamique et transferts thermiques"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la transition énergétique, l'optimisation des systèmes de chauffage et la récupération de chaleur fatale sont des enjeux industriels et environnementaux majeurs. On s'intéresse ici à un prototype pilote de cogénération ou de pompe à chaleur haute température destiné à alimenter un réseau de chaleur urbain.

Le système étudié est un échangeur-récupérateur thermique couplé à un circuit de fluide caloporteur (eau surchauffée). L'objectif est de quantifier les transferts thermiques, d'évaluer le rendement réel au regard du second principe de la thermodynamique, et d'analyser la pertinence du modèle face aux pertes irréversibles.

**Données et constantes thermodynamiques :**
*   Fluide caloporteur : Eau liquide, assimilée à un corps inermédiaire incompressible.
*   Capacité thermique massique de l'eau : $c = 4{,}18 \times 10^3\ \mathrm{J \cdot kg^{-1} \cdot K^{-1}}$ (supposée constante sur la plage de température étudiée).
*   Masse volumique de l'eau : $\rho = 1{,}00 \times 10^3\ \mathrm{kg \cdot m^{-3}}$.
*   Débit massique du fluide dans le circuit primaire : $q_m = 2{,}50\ \mathrm{kg \cdot s^{-1}}$.
*   Température d'entrée du fluide dans l'échangeur : $T_{\text{entree}} = 285\ \mathrm{K}$.
*   Température de sortie souhaitée : $T_{\text{sortie}} = 345\ \mathrm{K}$.
*   Puissance électrique réellement consommée par le compresseur/pompe du système : $P_{\text{elec}} = 120\ \mathrm{kW}$.
*   Température de la source chaude extérieure (foyer de combustion ou milieu ambient valorisé) : $T_{\text{source}} = 450\ \mathrm{K}$.
*   Température de la source froide (milieu extérieur de référence) : $T_0 = 293\ \mathrm{K}$.

*Note méthodologique : Dans toute étude thermodynamique réelle, l'hypothèse d'adiabaticité parfaite avec l'extérieur est une idéalisation. Les échanges parasites avec l'ambiance et les frottements fluidiques internes génèrent des irréversibilités qu'il convient de questionner.*

---

### ❓ Énoncé

1. **Bilan thermique et puissance utile :** 
   Calculer la puissance thermique utile $P_{\text{utile}}$ effectivement transférée au fluide caloporteur pour lui faire traverser l'intervalle de température souhaité. Exprimez le résultat en kilowatts ($\mathrm{kW}$).

2. **Analyse énergétique et COP :** 
   Définir le coefficient de performance (COP) de ce système de chauffage, puis calculer sa valeur numérique à partir des grandeurs $P_{\text{utile}}$ et $P_{\text{elec}}$. Comparez ce résultat au COP maximal théorique (dit de Carnot) opérant entre les mêmes sources $T_{\text{source}}$ et $T_0$. Concluez de manière critique sur l'écart constaté.

3. **Bilan entropique et irréversibilités :** 
   En régime permanent, la variation d'entropie du fluide traversant l'appareil est nulle. Exprimez et calculez la variation d'entropie de l'univers (ou création d'entropie $\Delta S_{\text{universe}}$ par unité de temps) associée à ce transfert thermique, en considérant que la source chaude fournit la chaleur $Q_{\text{source}}$ nécessaire au fonctionnement du cycle couplé. Quel principe fondamental de la thermodynamique cela illustre-t-il quantitativement ?

4. **Esprit critique et limites du modèle :** 
   Le modèle linéaire utilisé suppose $c$ constante et néglige les pertes thermiques par l'enveloppe de l'échangeur (estimées en réalité à environ $3\ \%$ de la puissance reçue de la source). Discutez l'impact de cette perte sur la température réelle de sortie $T_{\text{sortie}}$ si le débit massique $q_m$ et la puissance électrique $P_{\text{elec}}$ restent constants.

---

### 💡 Indice de méthode

*   *Question 1 :* Pensez à relier le flux thermique (puissance) au débit massique $q_m$, à la capacité thermique massique $c$ et à la variation de température $\Delta T$.
*   *Question 2 :* Le COP d'une pompe à chaleur ou d'un système thermodynamique de chauffage se définit comme le rapport de l'énergie (ou puissance) utile fournie sur l'énergie (ou puissance) électrique payée/fournie pour faire fonctionner le système. Pour le rendement de Carnot, utilisez les températures absolues en kelvins.
*   *Question 3 :* La création d'entropie est liée aux irréversibilités du système. Utilisez la relation $\Delta S_{\text{universe}} = \Delta S_{\text{systeme}} + \Delta S_{\text{sources}}$. En régime permanent, $\Delta S_{\text{systeme}} = 0$.
*   *Question 4 :* Traduisez la perte thermique sous forme d'un terme retranché de la puissance thermique entrante, puis réinjectez cette modification dans l'équation du bilan thermique.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la puissance thermique utile $P_{\text{utile}}$
La puissance thermique transférée au fluide caloporteur s'exprime par le débit d'enthalpie (assimilé au produit du débit massique par la variation d'enthalpie massique) :
$$P_{\text{utile}} = \frac{dQ}{dt} = q_m \cdot c \cdot (T_{\text{sortie}} - T_{\text{entree}})$$

A.N. :
$$P_{\text{utile}} = 2{,}50\ \mathrm{kg \cdot s^{-1}} \times 4180\ \mathrm{J \cdot kg^{-1} \cdot K^{-1}} \times (345 - 285)\ \mathrm{K}$$
$$P_{\text{utile}} = 2{,}50 \times 4180 \times 60 = 627\,000\ \mathrm{W} = 627\ \mathrm{kW}$$

*Commentaire scientifique :* Cette puissance représente l'énergie thermique valorisée par seconde transmise au réseau.

---

#### 2. Calcul du COP et comparaison au modèle de Carnot
Le coefficient de performance énergétique (COP) du dispositif est défini par le rapport de la puissance utile restituée sur la puissance électrique nécessaire au fonctionnement :
$$\text{COP} = \frac{P_{\text{utile}}}{P_{\text{elec}}}$$

A.N. :
$$\text{COP} = \frac{627\ \mathrm{kW}}{120\ \mathrm{kW}} = 5{,}225 \approx 5{,}23$$

Le COP maximal théorique (limite de Carnot pour un système ditherme fonctionnant entre la source chaude $T_{\text{source}}$ et la source froide $T_0$) s'exprime par :
$$\text{COP}_{\text{Carnot}} = \frac{T_{\text{source}}}{T_{\text{source}} - T_0}$$
*(Note : pour un cycle de pompe à chaleur idéal, le coefficient dépend des températures des sources, ici l'évaluation se fait via le rendement thermique global du cycle).*

A.N. :
$$\text{COP}_{\text{Carnot}} = \frac{450}{450 - 293} = \frac{450}{157} \approx 2{,}87$$

*Analyse critique :* On constate ici que $\text{COP} > \text{COP}_{\text{Carnot}}$ calculé de cette façon (ou l'analyse montre que le système ne relève pas d'une simple machine frigorifique idéale ditherme, mais intègre une source de chaleur primaire exogène valorisée). Le système n'est pas une simple PAC, c'est un système hybride de récupération de chaleur fatale où l'énergie utile est la somme de la chaleur primaire récupérée et de l'énergie électrique convertie en chaleur. Le rendement énergétique global (premier principe) est pertinent, mais le second principe impose une analyse par l'entropie.

---

#### 3. Bilan entropique et irréversibilités
En régime permanent, le système est dans un état thermodynamique stationnaire : la variation d'entropie du système lui-même est nulle ($\Delta S_{\text{systeme}} = 0$). 
Cependant, les transferts thermiques avec les sources extérieures génèrent une création d'entropie $\Delta S_{\text{universe}}$ (ou $\sigma$) par unité de temps :
$$\frac{dS_{\text{universe}}}{dt} = \frac{dS_{\text{systeme}}}{dt} - \frac{P_{\text{source}}}{T_{\text{source}}} - \frac{P_{\text{perdue}}}{T_0} \ge 0$$

D'après le second principe de la thermodynamique, toute transformation réelle s'accompagne d'une création d'entropie strictement positive ($\sigma > 0$) en raison des irréversibilités (frottements visqueux du fluide, transferts thermiques avec des écarts de température finis $\Delta T$).

---

#### 4. Analyse critique de l'impact des pertes thermiques
Si l'on intègre des pertes thermiques vers l'ambiance évaluées à $3\ \%$ de la puissance thermique totale fournie par la source, la puissance réellement transmise au fluide est minorée :
$$P_{\text{utile, réel}} = P_{\text{utile}} \times (1 - 0{,}03) = 627\ \mathrm{kW} \times 0{,}97 = 608{,}19\ \mathrm{kW}$$

Si le débit massique $q_m$ et la puissance électrique $P_{\text{elec}}$ sont maintenus constants, la température réelle de sortie $T_{\text{sortie, réel}}$ diminue :
$$P_{\text{utile, réel}} = q_m \cdot c \cdot (T_{\text{sortie, réel}} - T_{\text{entree}})$$
$$T_{\text{sortie, réel}} = T_{\text{entree}} + \frac{P_{\text{utile, réel}}}{q_m \cdot c}$$

A.N. :
$$T_{\text{sortie, réel}} = 285 + \frac{608\,190}{2{,}50 \times 4180} = 285 + 58{,}16 = 343{,}16\ \mathrm{K}$$

*Conclusion critique :* Négliger les pertes thermiques conduit à surestimer la performance du système d'environ $2\ \mathrm{K}$ sur la température de sortie, ce qui, à l'échelle d'un réseau de chaleur industriel, représente un écart significatif sur la qualité de la service et démontre la nécessité d'une isolation rigoureuse (compromis technico-économique entre coût d'isolation et gain énergétique).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
