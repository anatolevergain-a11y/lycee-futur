---
title: "Exercice 1 : Vitesse de réaction et facteurs cinétiques"
description: "Application pratique du chapitre Cinétique chimique"
---

### 🌐 Contexte & Données scientifiques

En cinétique chimique, la maîtrise de la vitesse d'évolution d'un système est un enjeu majeur, tant à l'échelle industrielle (optimisation des procédés, sécurité des installations) qu'environnementale. 

Considérons la réaction d'oxydation des ions iodure $I^-$ par les ions peroxodisulfate $S_2O_8^{2-}$ en milieu aqueux. L'équation de la réaction modélisant cette transformation totale est :

$$\mathrm{S_2O_8^{2-}(aq) + 2\,I^-(aq) \rightarrow 2\,SO_4^{2-}(aq) + I_2(aq)}$$

Dans le cadre d'une étude expérimentale menée en laboratoire, un binôme d'élèves réalise deux expériences à des températures différentes en mesurant l'évolution de la concentration effective en diiode formé, $[I_2]$, au cours du temps.

Les conditions initiales sont les suivantes :
* **Expérience 1** : Température $T_1 = 20\ ^\circ\mathrm{C}$, volume réactionnel $V = 100\ \mathrm{mL}$, concentrations effectives initiales $[\mathrm{S_2O_8^{2-}}]_0 = 0{,}020\ \mathrm{mol}\cdot\mathrm{L}^{-1}$ et $[\mathrm{I^-}]_0 = 0{,}10\ \mathrm{mol}\cdot\mathrm{L}^{-1}$.
* **Expérience 2** : Température $T_2 = 40\ ^\circ\mathrm{C}$, mêmes concentrations initiales et même volume.

Les incertitudes de mesure sur les concentrations en diiode sont estimées à $\pm 5\ \%$ en raison des imprécisions liées au protocole de dosage colorimétrique indirect (thiosulfate de sodium). Par ailleurs, les chimistes doivent souvent arbitrer entre une augmentation de température (qui accroît la vitesse mais peut induire des réactions secondaires indésirables ou augmenter les coûts énergétiques) et l'utilisation de catalyseurs.

---

### ❓ Énoncé

1. **Définition et suivi temporel :** Rappeler la définition de la vitesse volumique de formation du diiode. Expliquer comment cette grandeur peut être déterminée graphiquement à partir de la courbe représentant $[I_2] = f(t)$.
2. **Exploitation des données et facteurs cinétiques :** À partir des données de l'énoncé, identifier qualitatif et quantitatif le facteur cinétique mis en jeu entre l'expérience 1 et l'expérience 2. Justifier l'évolution observée à l'échelle microscopique en faisant référence à la théorie des collisions.
3. **Analyse critique et limites du modèle :** La vitesse initiale $v_i$ de la réaction est souvent proportionnelle à la concentration des réactifs selon une loi de vitesse de type $v = k \cdot [\mathrm{S_2O_8^{2-}}]^\alpha \cdot [\mathrm{I^-}]^\beta$. Discutez de l'impact des incertitudes expérimentales ($\pm 5\ \%$) sur la détermination rigoureuse des ordres partiels $\alpha$ et $\beta$, et montrez pourquoi un modèle mathématique ne saurait refléter la complexité absolue d'un mécanisme réactionnel (présence d'intermédiaires réactionnels non modélisés).

---

### 💡 Indice de méthode

* *Question 1 :* La vitesse volumique $v(t)$ d'apparition d'un produit est liée à sa dérivée par rapport au temps. Pensez au coefficient directeur de la tangente à la courbe.
* *Question 2 :* L'élévation de la température modifie l'énergie cinétique moyenne des entités chimiques. Reliez cela à la fréquence et à l'efficacité des chocs effectifs.
* *Question 3 :* Considérez la propagation des incertitudes : une erreur de lecture sur $[I_2]$ se répercute par quotient différentiel sur l'estimation de la vitesse, ce qui complique l'affirmation d'une loi de puissance stricte sans un grand nombre de points expérimentaux.

---

### 📋 Correction détaillée pas à pas

#### 1. Définition et suivi temporel
La vitesse volumique de formation du diiode $I_2$ à un instant $t$ est définie par la relation :

$$v(t) = \frac{1}{V} \frac{dx}{dt} = \frac{d[\mathrm{I_2}]}{dt}$$

Où $V$ est le volume du mélange réactionnel et $x$ l'avancement de la réaction. 
Graphiquement, la valeur de cette vitesse à un instant $t_0$ donné correspond au **coefficient directeur de la tangente** à la courbe représentant l'évolution de la concentration $[I_2]$ en fonction du temps au point d'abscisse $t_0$.

#### 2. Exploitation des données et facteurs cinétiques
* **Identification du facteur :** Le passage de $T_1 = 20\ ^\circ\mathrm{C}$ à $T_2 = 40\ ^\circ\mathrm{C}$ met en évidence le **facteur température**.
* **Interprétation microscopique :** 
  1. *Augmentation de la fréquence des chocs :* Lorsque la température augmente, l'agitabilité thermique s'accroît, augmentant la vitesse quadratique moyenne des ions $S_2O_8^{2-}$ et $I^-$. Les entités se rencontrent donc plus fréquemment.
  2. *Augmentation de l'efficacité des chocs :* Plus fondamentalement, une plus grande proportion de molécules possède une énergie cinétique supérieure ou égale à l'énergie d'activation $E_a$. Le nombre de chocs *efficaces* par unité de temps augmente drastiquement (loi d'Arrhenius).
* **Conséquence macroscopique :** La courbe de l'expérience 2 atteindra son palier (fin de réaction) plus rapidement que celle de l'expérience 1, et la pente à l'origine y sera plus forte ($v_{init, 2} > v_{init, 1}$).

#### 3. Analyse critique et limites du modèle
* **Impact des incertitudes :** L'incertitude de $\pm 5\%$ sur les concentrations se propage lors du calcul des dérivées numériques ($\frac{\Delta [I_2]}{\Delta t}$). Graphiquement, tracer la tangente induit une incertitude humaine et géométrique non négligeable. Par conséquent, l'ordre partiel déterminé graphiquement est entaché d'une erreur expérimentale (souvent de l'ordre de 10 à 15%), ce qui oblige les scientifiques à utiliser des méthodes intégrées ou différentielles rigoureuses (régression linéaire sur des échelles logarithmiques) pour valider une loi de vitesse.
* **Limites du modèle empirique :** La loi de vitesse $v = k \cdot [\mathrm{S_2O_8^{2-}}]^\alpha \cdot [\mathrm{I^-}]^\beta$ est une modélisation macroscopique globale. Elle ne préjuge en rien du **mécanisme réactionnel** microscopique (qui se fait vraisemblablement en plusieurs étapes élémentaires successives via des intermédiaires réactionnels). Le modèle omet les variations du milieu (force ionique, solvatation), démontrant ainsi qu'en science, un modèle mathématique n'est qu'une approximation validée dans un domaine de validité restreint.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
