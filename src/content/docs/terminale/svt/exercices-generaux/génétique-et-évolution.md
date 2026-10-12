---
title: "Exercice : Génétique et évolution"
description: "Démonstration appliquée : Résistance des cultures céréalières aux sécheresses extrêmes"
---

### 🌐 Contexte moderne & concret

Face au changement climatique global, les épisodes de sécheresse extrême se multiplient et menacent la sécurité alimentaire mondiale, en particulier la production de céréales comme le blé ($Triticum\ aestivum$) ou le maïs ($Zea\ mays$). Pour relever ce défi agronomique et évolutif, les chercheurs en génétique végétale s'intéressent aux mécanismes d'adaptation naturels. 

Certaines variétés sauvages ou paysannes possèdent des allèles spécifiques codant pour des facteurs de transcription (comme les protéines $DREB$) qui régulent l'expression de gènes impliqués dans la fermeture stomatique et la synthèse d'osmolytes compatibles. L'objectif de cet exercice est d'analyser comment la sélection naturelle et les biotechnologies permettent d'étudier et d'améliorer la résistance des cultures céréalières face au stress hydrique.

---

### ❓ Énoncé

1. **Rappel des mécanismes cellulaires :** Expliquer brièvement comment un stress hydrique perçu par les racines de la plante entraîne une réponse adaptative au niveau des feuilles (notamment via l'acide abscissique, $ABA$).
2. **Analyse génétique et sélection :** On étudie un gène $RSC1$ (Résistance Sécheresse Céréale) impliqué dans la tolérance au stress. Chez une variété sensible, l'allèle muté $rsc1$ code pour une protéine inactive. À l'aide de croisements dirigés, des agronomes souhaitent intrografer l'allèle fonctionnel $RSC1$ dans une lignée élite. Si l'on croise des individus hétérozygotes ($RSC1//rsc1$), quel est le pourcentage théorique de la descendance présentant un phénotype résistant à la sécheresse, sachant que l'allèle $RSC1$ est totalement dominant ?
3. **Approche évolutive :** Dans une population cultivée soumise à des sécheresses récurrentes et sévères sur 20 générations, décrivez l'évolution de la fréquence de l'allèle $RSC1$ dans la population, en mobilisant les concepts de la génétique des populations (pression de sélection, valeur sélective ou *fitness* $W$).
4. **Prospective biotechnologique :** Discutez de l'intérêt et des limites de l'utilisation d'organismes génétiquement modifiés (OGM) ou de techniques de mutagenesis dirigé (comme $CRISPR-Cas9$) comparativement à la sélection généalogique traditionnelle pour fixer rapidement l'allèle $RSC1$ dans les variétés cultivées.

---

### 💡 Indice

- *Pour la question 2*, pensez à réaliser un échiquier de croisement (tableau de Punnett) pour déterminer les génotypes de la descendance.
- *Pour la question 3*, rappelez-vous l'impact de la sélection naturelle sur les allèles conférant un avantage adaptatif dans un environnement donné.
- *Pour la question 4*, pensez à la notion de temps nécessaire pour obtenir une variété fixée et aux considérations réglementaires ou éthiques.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Mécanisme cellulaire de réponse au stress hydrique
Lorsque le sol s'assèche, la baisse du potentiel hydrique est détectée par les racines. Celles-ci synthétisent une phytohormone, l'acide abscissique ($ABA$), qui est transportée par la sève brute (xylème) jusqu'aux parties aériennes. 
Au niveau des feuilles, l'$ABA$ se fixe sur des récepteurs membranaires des cellules de garde des stomates. Cela provoque une sortie massive d'ions potassium ($K^+$) et d'anions, entraînant une fuite d'eau par osmose. Les cellules de garde se relâchent, ce qui provoque la **fermeture des stomates**. Cette réponse limite considérablement la transpiration et la perte d'eau, tout en maintenant la turgescence cellulaire minimale indispensable à la survie lors d'une sécheresse.

#### 2. Analyse génétique des croisements
Soit le gène $RSC1$ avec deux allèles :
- $RSC1$ : allèle conférant la résistance (dominant).
- $rsc1$ : allèle de sensibilité (récessif).

Le croisement de deux individus hétérozygotes se note : $(RSC1//rsc1) \times (RSC1//rsc1)$.

Faisons l'échiquier des gamètes :
| Gamètes | $RSC1$ (50%) | $rsc1$ (50%) |
| :---: | :---: | :---: |
| **$RSC1$ (50%)** | $RSC1//RSC1$ (25%) | $RSC1//rsc1$ (25%) |
| **$rsc1$ (50%)** | $RSC1//rsc1$ (25%) | $rsc1//rsc1$ (25%) |

- Génotypes de la descendance : $25\%\ [RSC1//RSC1]$, $50\%\ [RSC1//rsc1]$ et $25\%\ [rsc1//rsc1]$.
- Phénotypes : Comme l'allèle $RSC1$ est dominant, les individus $RSC1//RSC1$ et $RSC1//rsc1$ expriment le phénotype résistant.
- **Résultat :** $75\%$ de la descendance présentera un phénotype résistant à la sécheresse ($25\% + 50\%$), et $25\%$ sera sensible.

#### 3. Approche évolutive et génétique des populations
Sous l'effet de sécheresses récurrentes, les plantes possédant l'allèle sensible ($rsc1//rsc1$) subissent un taux de mortalité plus élevé ou une baisse drastique de leur fertilité avant d'avoir pu se reproduire. Leur valeur sélective (ou *fitness*, notée $W$) est donc très faible comparée à celle des individus porteurs de l'allèle $RSC1$ ($W_{RSC1} > W_{rsc1}$).

Au fil des générations :
- La **pression de sélection** exercée par le milieu élimine préférentiellement les individus sensibles.
- La fréquence de l'allèle $RSC1$ va **augmenter de manière significative** dans la population au détriment de l'allèle $rsc1$.
- Si la contrainte environnementale persiste, l'allèle favorable pourra tendre vers la fixation (fréquence proche de $1$ ou $100\%$), illustrant le mécanisme de l'**évolution par sélection naturelle**.

#### 4. Prospective biotechnologique
- **Sélection traditionnelle :** Elle repose sur des croisements successifs et la sélection phénotypique sur plusieurs générations. Ses avantages résident dans son acceptabilité sociétale et son coût en milieu ouvert. Ses limites sont la lenteur (plusieurs années/décennies) et le "linkage drag" (transfert accidentel de gènes délétères liés au gène d'intérêt).
- **Biotechnologies ($CRISPR-Cas9$ / OGM) :** Elles permettent d'introduire ou d'activer spécifiquement l'allèle $RSC1$ (ou son équivalent orthologue) en un temps record (quelques générations, voire directement sur la variété élite). 
- **Limites :** Les barrières réglementaires strictes dans certaines zones géographiques (comme l'Union Européenne) et le principe de précaution concernant les flux de gènes potentiels vers des espèces sauvages apparentées freinent leur déploiement massif.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
