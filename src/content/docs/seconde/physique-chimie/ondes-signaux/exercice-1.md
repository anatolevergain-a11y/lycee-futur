---
title: "Exercice 1 : Propriétés de la lumière et dispersion"
description: "Application pratique du chapitre Ondes et signaux"
---

### 🌐 Contexte & Données scientifiques

La lumière blanche, telle que celle émise par le Soleil ou une lampe à incandescence, est une onde polychromatique. Lorsqu'elle traverse un milieu transparent non homogène ou un système dispersif (comme un prisme en verre ou une goutte d'eau), chaque radiation lumineuse constitutive est déviée selon son propre indice de réfraction $n$. 

Dans le cadre du modèle corpusculaire et ondulatoire enseigné au lycée, on relie la réfraction à la variation de la célérité de l'onde dans le milieu. Pour une radiation monochromatique de longueur d'onde dans le vide $\lambda$, l'indice de réfraction du verre Crown est donné par la relation empirique approchée de Cauchy :
$$n(\lambda) = A + \frac{B}{\lambda^2}$$
*Données et constantes expérimentales pour le verre Crown à $20\,^\circ\text{C}$ :*
- Constante $A = 1,50$
- Constante $B = 5,0 \times 10^{-15}\,\text{m}^2$
- Vitesse de la lumière dans le vide : $c = 3,00 \times 10^8\,\text{m}\cdot\text{s}^{-1}$
- Domaine visible : $\lambda_{\text{bleu}} = 400\,\text{nm}$ à $\lambda_{\text{rouge}} = 800\,\text{nm}$ ($1\,\text{nm} = 10^{-9}\,\text{m}$).

*Note critique sur le modèle :* La formule de Cauchy est une modélisation mathématique approchée, valable uniquement dans le domaine visible pour des milieux d'optique classique. Elle ne rend pas compte des phénomènes d'absorption intense aux UV ou aux IR, illustrant ainsi qu'en physique, tout modèle possède un domaine de valadité limité qu'il convient de questionner.

---

### ❓ Énoncé

1. **Calcul d'indice :** À l'aide de la formule de Cauchy, calculer l'indice de réfraction $n$ du verre Crown pour une radiation bleue ($\lambda_1 = 400\,\text{nm}$) et pour une radiation rouge ($\lambda_2 = 800\,\text{nm}$). Exprimez les longueurs d'onde en mètres avant le calcul.
2. **Analyse de la vitesse :** En déduire la vitesse de propagation $v$ de ces deux radiations au sein du prisme en verre Crown. Commentez la phrase suivante : *"La vitesse de la lumière est une constante universelle indérogeable, elle ne dépend donc pas du milieu traversé."*
3. **Dispersion et déviation :** La loi de Descartes de la réfraction s'écrit $n_1 \sin(i_1) = n_2 \sin(i_2)$. Un faisceau de lumière blanche arrive sur la face d'un prisme avec un angle d'incidence $i_1 = 45^\circ$ (dans l'air, avec $n_{\text{air}} \approx 1,00$). Calculez l'angle de réfraction $i_2$ pour le bleu et pour le rouge. Quel est l'impact de cette variation d'indice sur le phénomène de dispersion observé ?
4. **Esprit critique et limites :** Si l'on utilisait une source de lumière polychromatique très intense couvrant des longueurs d'onde bien au-delà du domaine visible (ultraviolets et infrarouges), pensez-vous que la formule de Cauchy permettrait de prédire rigoureusement le comportement optique du verre ? Justifiez en analysant la formulation mathématique de $n(\lambda)$.

---

### 💡 Indice de méthode

- **Question 1 :** Pensez à convertir systématiquement les nanomètres en mètres ($1\,\text{nm} = 10^{-9}\,\text{m}$) et à écrire vos calculs intermédiaires avec un nombre suffisant de chiffres significatifs.
- **Question 2 :** Rappelez la définition de l'indice de réfraction d'un milieu : $n = \frac{c}{v}$. Isolez $v$. Veillez à bien distinguer la célérité de la lumière dans le vide ($c$, qui est une constante fondamentale) de sa vitesse dans un milieu matériel ($v$, qui dépend des interactions électromagnétiques avec le milieu).
- **Question 3 :** Utilisez la calculatrice en mode "degrés" ($\deg$). Appliquez la fonction réciproque $\arcsin$ (ou $\sin^{-1}$) pour trouver l'angle $i_2$.
- **Question 4 :** Analysez ce qui se passe mathématiquement si $\lambda$ tend vers des valeurs très petites (UV) ou si l'on sort du domaine d'ajustement empirique de la loi.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul d'indice
Convertissons d'abord les longueurs d'onde dans le Système International (mètre) :
- $\lambda_1 = 400\,\text{nm} = 400 \times 10^{-9}\,\text{m} = 4,00 \times 10^{-7}\,\text{m}$
- $\lambda_2 = 800\,\text{nm} = 800 \times 10^{-9}\,\text{m} = 8,00 \times 10^{-7}\,\text{m}$

Appliquons la formule de Cauchy $n(\lambda) = A + \frac{B}{\lambda^2}$ :
- **Pour le bleu ($\lambda_1$) :**
  $$n_{\text{bleu}} = 1,50 + \frac{5,0 \times 10^{-15}}{(4,00 \times 10^{-7})^2}$$
  $$n_{\text{bleu}} = 1,50 + \frac{5,0 \times 10^{-15}}{1,60 \times 10^{-13}} = 1,50 + 0,03125 = 1,53125$$
  En respectant les règles de chiffres significatifs (2 chiffres significatifs sur B, donc on arrondit prudemment ou on conserve les décimales intermédiaires) : $n_{\text{bleu}} \approx 1,53$.

- **Pour le rouge ($\lambda_2$) :**
  $$n_{\text{rouge}} = 1,50 + \frac{5,0 \times 10^{-15}}{(8,00 \times 10^{-7})^2}$$
  $$n_{\text{rouge}} = 1,50 + \frac{5,0 \times 10^{-15}}{6,40 \times 10^{-13}} = 1,50 + 0,0078125 \approx 1,51$$

#### 2. Analyse de la vitesse
La relation entre l'indice de réfraction du milieu $n$, la célérité de la lumière dans le vide $c$ et la vitesse de propagation $v$ dans le milieu est :
$$n = \frac{c}{v} \implies v = \frac{c}{n}$$

- **Pour la radiation bleue :**
  $$v_{\text{bleu}} = \frac{3,00 \times 10^8}{1,53125} \approx 1,96 \times 10^8\,\text{m}\cdot\text{s}^{-1}$$
- **Pour la radiation rouge :**
  $$v_{\text{rouge}} = \frac{3,00 \times 10^8}{1,5078} \approx 1,99 \times 10^8\,\text{m}\cdot\text{s}^{-1}$$

*Commentaire critique :* L'affirmation proposée est partiellement erronée et témoigne d'une confusion classique. **$c$** (la vitesse de la lumière dans le vide) est effectivement une constante universelle indérogeable ($\approx 3,00 \times 10^8\,\text{m}\cdot\text{s}^{-1}$). En revanche, la vitesse $v$ de la lumière *dans un milieu matériel* dépend de la nature du milieu et de la fréquence (ou longueur d'onde) de la radiation. C'est précisément cette variation de vitesse selon la longueur d'onde ($v_{\text{bleu}} < v_{\text{rouge}}$) qui cause la dispersion.

#### 3. Dispersion et déviation
Appliquons la loi de Descartes pour la réfraction ($n_{\text{air}} \approx 1,00$, $i_1 = 45^\circ$) :
$$1,00 \times \sin(45^\circ) = n_2 \times \sin(i_2) \implies \sin(i_2) = \frac{\sin(45^\circ)}{n_2}$$

- **Pour le bleu ($n_{\text{bleu}} \approx 1,531$) :**
  $$\sin(i_{2,\text{bleu}}) = \frac{\sin(45^\circ)}{1,531} \approx \frac{0,7071}{1,531} \approx 0,4618$$
  $$i_{2,\text{bleu}} = \arcsin(0,4618) \approx 27,5^\circ$$

- **Pour le rouge ($n_{\text{rouge}} \approx 1,508$) :**
  $$\sin(i_{2,\text{rouge}}) = \frac{\sin(45^\circ)}{1,508} \approx \frac{0,7071}{1,508} \approx 0,4689$$
  $$i_{2,\text{rouge}} = \arcsin(0,4689) \approx 27,9^\circ$$

*Impact sur la dispersion :* Les deux radiations ne sont pas réfractées avec le même angle ($27,5^\circ$ pour le bleu contre $27,9^\circ$ pour le rouge). Le milieu sépare les radiations spatialement : c'est le phénomène de **dispersion de la lumière**.

#### 4. Esprit critique et limites du modèle
Non, la formule de Cauchy $n(\lambda) = A + \frac{B}{\lambda^2}$ ne peut pas être extrapolée indéfiniment. 
- **Limite mathématique :** Si $\lambda$ tend vers $0$ (domaine des rayons X ou UV extrêmes), le terme $\frac{B}{\lambda^2}$ tend vers l'infini, ce qui donnerait un indice aberrant. De même, pour de grandes longueurs d'onde (infrarouge lointain), le modèle montre des écarts mesurables avec la réalité expérimentale.
- **Limite physique :** Cette formule est un développement limité empirique valable uniquement dans le domaine spectral visible pour lequel elle a été calibrée. En physique, un modèle mathématique n'est jamais "vrai" dans l'absolu ; il possède un **domaine de validité** strict qu'il faut respecter sous peine de formuler des prédictions erronées.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
