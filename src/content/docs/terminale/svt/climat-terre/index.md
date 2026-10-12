---
title: "Cours : Le système climatique terrestre"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Fiche de Cours : Le système climatique terrestre

## 📌 1. Notions clés & Définitions

Le système climatique terrestre est un système thermodynamique complexe et ouvert sur l'espace, caractérisé par des échanges constants de matière et d'énergie. Il est constitué de cinq grands réservoirs (ou enveloppes) en interaction dynamique :
1. **L'atmosphère** (enveloppe gazeuse) ;
2. **L'hydrosphère** (eau liquide) ;
3. **La cryosphère** (glaces et neiges) ;
4. **La lithosphère** (parties solides superficielles) ;
5. **La biosphère** (ensemble des êtres vivants).

### Définitions fondamentales :
* **Météo vs Climat :** La météo désigne l'état instantané de l'atmosphère en un lieu donné (caractérisé par la température, la pression, l'humidité, le vent). Le climat correspond à la synthèse statistique des conditions météorologiques sur une région donnée sur de longues périodes (généralement 30 ans selon l'Organisation Mondiale de la Météorologie).
* **Bilan radiatif terrestre :** Équilibre global entre l'énergie solaire incidente reçue par la Terre et l'énergie renvoyée vers l'espace sous forme de rayonnements infrarégraves.
* **Albédo ($A$) :** Grandeur sans dimension définie par le rapport entre le flux lumineux réfléchit par une surface et le flux lumineux incident. $A = \frac{\text{Flux réfléchi}}{\text{Flux incident}}$. Il varie de $0$ (corps noir parfait absorbant tout) à $1$ (corps réfléchissant totalement).
* **Effet de serre naturel :** Processus physique par lequel les gaz à effet de serre (GES : $\text{H}_2\text{O}, \text{CO}_2, \text{CH}_4, \text{N}_2\text{O}$) absorbent et réémettent vers la surface terrestre le rayonnement infrarouge thermique émis par la surface, augmentant ainsi la température moyenne de surface de la Terre d'environ $+15^\circ\text{C}$ (contre $-18^\circ\text{C}$ en son absence).

---

## 📐 2. Formules et Propriétés fondamentales

### 1. Constante solaire et flux reçu
La Terre reçoit l'essentiel de son énergie du Soleil. La puissance par unité de surface reçue au sommet de l'atmosphère perpendiculairement aux rayons solaires est la **constante solaire** ($E_0$) :
$$E_0 \approx 1361 \text{ W}\cdot\text{m}^{-2}$$

En raison de la sphéricité de la Terre (surface d'une sphère $4\pi R^2$) rapportée à sa section interceptant les rayons (disque de surface $\pi R^2$), le flux solaire moyen reçu par unité de surface terrestre est divisé par 4 :
$$\text{Flux reçu moyen} = \frac{E_0}{4} \approx 340 \text{ W}\cdot\text{m}^{-2}$$

### 2. Bilan radiatif et température d'équilibre
À l'équilibre radiatif, l'énergie absorbée par le système Terre-atmosphère est égale à l'énergie rayonnée vers l'espace.

* **Énergie absorbée :** 
$$\text{Flux}_{\text{absorbé}} = \frac{E_0}{4} (1 - A)$$
*(avec $A$ l'albédo moyen de la Terre, estimé à environ $0,30$).*

* **Loi de Stefan-Boltzmann :** Tout corps noir de température absolue $T$ (en Kelvin) émet un rayonnement thermique dont la densité de flux énergétique $F$ est proportionnelle à la puissance quatre de sa température :
$$F = \sigma T^4$$
*(où $\sigma \approx 5,67 \times 10^{-8} \text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-4}$ est la constante de Stefan-Boltzmann).*

Sans effet de serre, la température effective de surface $T_e$ se calcule en posant l'égalité entre le flux absorbé et le flux émis :
$$\sigma T_e^4 = \frac{E_0}{4} (1 - A)$$
Soit :
$$T_e = \left( \frac{E_0 (1 - A)}{4\sigma} \right)^{1/4}$$
*Application numérique :* $T_e \approx 255 \text{ K}$ (soit $-18^\circ\text{C}$). 

L'effet de serre additionnel retient une partie de ce rayonnement infrarouge, portant la température moyenne réelle mesurée à la surface à environ $288 \text{ K}$ ($+15^\circ\text{C}$).

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On considère un modèle simplifié de la planète X, dont l'atmosphère est absente (pas d'effet de serre). Sa constante solaire est $E_0 = 1000 \text{ W}\cdot\text{m}^{-2}$ et son albédo moyen est $A = 0,20$. On donne $\sigma = 5,67 \times 10^{-8} \text{ W}\cdot\text{m}^{-2}\cdot\text{K}^{-4}$.
Calculez la température moyenne de surface $T_s$ de cette planète en Kelvin, puis en degrés Celsius.

**Résolution :**
1. **Rappel de la formule du bilan radiatif à l'équilibre :**
$$\sigma T_s^4 = \frac{E_0}{4} (1 - A)$$

2. **Application numérique du flux absorbé :**
$$\text{Flux}_{\text{absorbé}} = \frac{1000}{4} \times (1 - 0,20) = 250 \times 0,80 = 200 \text{ W}\cdot\text{m}^{-2}$$

3. **Calcul de $T_s^4$ :**
$$T_s^4 = \frac{200}{\sigma} = \frac{200}{5,67 \times 10^{-8}} \approx 3,527 \times 10^9 \text{ K}^4$$

4. **Extraction de la racine quatrième ($T_s$) :**
$$T_s = (3,527 \times 10^9)^{1/4} \approx 243,9 \text{ K}$$

5. **Conversion en degrés Celsius :**
$$T_s (^\circ\text{C}) = 243,9 - 273,15 = -29,25^\circ\text{C}$$

**Réponse :** La température moyenne de surface de la planète X est d'environ $244 \text{ K}$ (soit $-29,3^\circ\text{C}$).

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention au facteur 4 dans le flux moyen :** C'est l'erreur classique numéro un en évaluation. Ne jamais oublier que la surface d'une sphère est $4\pi R^2$ alors que la surface du disque interceptant le rayonnement solaire est $\pi R^2$. Le rapport est bien de $1/4$.
* **Confusion albédo et effet de serre :** 
  * L'albédo concerne la **réflexion** du rayonnement solaire (principalement visible et court).
  * L'effet de serre concerne l'**absorption et la réémission** du rayonnement thermique terrestre (infrarouge long). Ce sont deux mécanismes distincts bien qu'interagissants.
* **Unités de température :** Les calculs impliquant la loi de Stefan-Boltzmann ($\sigma T^4$) exigent impérativement une température en **Kelvin (K)**. N'oubliez jamais d'ajouter ou de soustraire $273,15$ lors des conversions entre Kelvin et degrés Celsius.
* **Rigueur rédactionnelle :** Précisez toujours le système étudié (ex: « Bilan radiatif du système Terre-atmosphère ») et veillez à bien distinguer l'énergie reçue, absorbée et réfléchie dans vos schémas de bilans énergétiques.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
