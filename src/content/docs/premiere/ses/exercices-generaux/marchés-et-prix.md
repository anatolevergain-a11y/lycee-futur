---
title: "Exercice : Marchés et prix"
description: "Démonstration appliquée : Fixation des prix de l'électricité lors des pics de consommation"
---

### 🌐 Contexte moderne & concret

En hiver, lors des vagues de froid, la demande en électricité augmente considérablement (chauffage, éclairage). Le marché de l'électricité fonctionne selon la loi de l'offre et de la demande. Cependant, la production d'électricité ne peut pas toujours s'ajuster instantanément : lorsque les capacités de production renouvelable et nucléaire de base sont saturées, il faut faire appel à des centrales thermiques (gaz, fioul) souvent plus coûteuses et plus polluantes. 

Imaginons un marché fictif sur lequel la quantité d'électricité offerte $Q_o$ (en GWh) et la quantité demandée $Q_d$ (en GWh) dépendent du prix du mégawattheure $P$ (en euros) selon les fonctions suivantes :

$$Q_d = -2P + 1200$$

$$Q_o = 3P - 300$$

### ❓ Énoncé (3 à 4 questions progressives)

1. **Détermination de l'équilibre initial :** Calculez le prix d'équilibre $P^*$ et la quantité d'équilibre $Q^*$ sur ce marché de l'électricité en situation normale.
2. **Effet d'un pic de consommation :** Lors d'une vague de froid intense, la demande des ménages et des entreprises augmente. La nouvelle fonction de demande devient $Q_{d2} = -2P + 1500$. Déterminez le nouveau prix d'équilibre $P_2^*$ et la nouvelle quantité $Q_2^*$. Expliquez l'évolution du prix.
3. **Analyse économique :** Qu'arriverait-il sur le marché si, lors de ce pic de consommation, les régulateurs décidaient de bloquer (fixer un prix plafond) le prix de l'électricité au niveau de l'équilibre initial $P^*$ ? Quel problème économique majeur cela poserait-il ?

### 💡 Indice

* **Pour la question 1 et 2 :** L'équilibre sur un marché parfait est atteint lorsque la quantité offerte est égale à la quantité demandée ($Q_d = Q_o$). Il suffit de poser l'équation et de résoudre pour trouver $P$, puis de réinjecter $P$ dans l'une des fonctions pour trouver $Q$.
* **Pour la question 3 :** Comparez la quantité offerte et la quantité demandée au prix bloqué $P^*$. Si la demande est supérieure à l'offre, on parle d'une pénurie.

### 📋 Correction détaillée (Pas à pas)

#### 1. Détermination de l'équilibre initial
À l'équilibre, l'offre égale la demande : 
$$Q_d = Q_o$$

On remplace par les fonctions données :
$$-2P + 1200 = 3P - 300$$

On regroupe les termes en $P$ d'un côté et les constantes de l'autre :
$$1200 + 300 = 3P + 2P$$
$$1500 = 5P$$
$$P^* = \frac{1500}{5} = 300$$

Le prix d'équilibre initial est de $300$ € par MWh ($P^* = 300$).

Pour trouver la quantité d'équilibre $Q^*$, on remplace $P$ par $300$ dans la fonction de demande ou d'offre :
$$Q^* = 3(300) - 300 = 900 - 300 = 600$$

La quantité d'équilibre est de $600$ GWh ($Q^* = 600$).

---

#### 2. Effet d'un pic de consommation
Avec la nouvelle fonction de demande $Q_{d2}$, la condition d'équilibre devient $Q_{d2} = Q_o$ :
$$-2P + 1500 = 3P - 300$$

On résout l'équation :
$$1500 + 300 = 3P + 2P$$
$$1800 = 5P$$
$$P_2^* = \frac{1800}{5} = 360$$

Le nouveau prix d'équilibre s'établit à $360$ € par MWh. 

Calculons la nouvelle quantité échangée $Q_2^*$ :
$$Q_2^* = 3(360) - 300 = 1080 - 300 = 780$$
La quantité est de $780$ GWh.

**Explication économique :** Le déplacement vers la droite de la courbe de demande (provoqué par le besoin accru de chauffage) crée une tension sur le marché. Face à une offre qui ne s'accroît pas instantanément au même rythme, la confrontation entre l'offre et la demande pousse les prix à la hausse. C'est le signal prix qui reflète la rareté accrue de la ressource.

---

#### 3. Analyse économique d'un prix plafond
Si le régulateur bloque le prix au niveau initial ($P^* = 300$ €), regardons ce qui se passe sur le marché en période de pic de consommation :

* **La quantité offerte** sera de : 
  $$Q_o = 3(300) - 300 = 600 \text{ GWh}$$
* **La quantité demandée** (avec la nouvelle demande) sera de : 
  $$Q_{d2} = -2(300) + 1500 = -600 + 1500 = 900 \text{ GWh}$$

On constate que :
$$Q_{d2} (900) > Q_o (600)$$

**Problème économique :** Il y a un excès de demande (ou une pénurie) de $900 - 600 = 300$ GWh. 
Le prix ne pouvant pas jouer son rôle de régulateur (il est bloqué artificiellement), il ne peut pas inciter les consommateurs à réduire leur consommation, ni inciter les producteurs à produire davantage. Cela conduit à un risque majeur de **black-out** (coupures de courant) qu'il faudrait gérer par des délestages ou rationnements.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
