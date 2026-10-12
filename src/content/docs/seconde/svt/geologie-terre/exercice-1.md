---
title: "Exercice 1 : Structure interne de la Terre et sismologie"
description: "Application pratique du chapitre La Terre, un objet géologique vivant"
---

### 🌐 Contexte & Données scientifiques

La sismologie moderne constitue l'outil principal d'investigation de la structure interne de la Terre. Lorsqu'un séisme se produit, il libère de l'énergie sous forme d'ondes mécaniques qui se propagent à travers le globe : les ondes $P$ (compressions) et les ondes $S$ (cisaillement). 

Les mesures de vitesse de propagation de ces ondes, combinées aux lois de la mécanique des milieux continus, permettent de modéliser l'intérieur de la Terre. Toutefois, ces modèles reposent sur des interprétations indirectes sujettes à des incertitudes expérimentales et théoriques.

Considérons un profil simplifié de propagation des ondes sismiques $P$ et $S$ dans les premiers 300 kilomètres de la lithosphère et de l'asthénosphère continentales. Soit $z$ la profondeur en kilomètres et $V_s$ la vitesse des ondes $S$ en $\text{km}\cdot\text{s}^{-1}$ :

*   À $z = 50\text{ km}$ : $V_s = 4,6\text{ km}\cdot\text{s}^{-1}$
*   À $z = 100\text{ km}$ : $V_s = 4,4\text{ km}\cdot\text{s}^{-1}$ (Zone de faible vitesse ou LVZ)
*   À $z = 200\text{ km}$ : $V_s = 4,7\text{ km}\cdot\text{s}^{-1}$

La variation de la vitesse des ondes avec la profondeur est régie par la relation théorique :
$$V_s = \sqrt{\frac{\mu}{\rho}}$$
où $\mu$ représente le module de cisaillement (rigidité du milieu) et $\rho$ la masse volumique des roches traversées.

---

### ❓ Énoncé

1. **Analyse de données :** À partir des valeurs de $V_s$ fournies entre 50 km et 100 km de profondeur, décrivez l'évolution de la vitesse des ondes $S$. En sachant que la température augmente avec la profondeur (géotherme), proposez une première hypothèse géologique sur l'état physique ou rhéologique des roches dans cette zone.
2. **Démonstration critique :** Les ondes $S$ (transversales) ne se propagent pas dans les fluides (car $\mu = 0$). Expliquez pourquoi l'observation de la propagation des ondes $S$ à 100 km de profondeur (bien que ralenties) permet de réfuter l'hypothèse d'une fusion totale (magma liquide continu) de l'asthénosphère à cette profondeur.
3. **Calcul et modélisation :** Entre $z = 100\text{ km}$ et $z = 200\text{ km}$, la vitesse passe de $4,4\text{ km}\cdot\text{s}^{-1}$ à $4,7\text{ km}\cdot\text{s}^{-1}$. Sachant que la masse volumique $\rho$ moyenne est estimée à $3,3 \times 10^{3}\text{ kg}\cdot\text{m}^{-3}$, calculez le module de cisaillement $\mu$ à $200\text{ km}$ de profondeur. Exprimez le résultat en Pascals ($\text{Pa}$). *Rappel : $1\text{ km}\cdot\text{s}^{-1} = 10^3\text{ m}\cdot\text{s}^{-1}$.*
4. **Esprit critique et limites du modèle :** Les sismologues construisent des modèles globaux de la Terre (comme le modèle PREM). Discutez d'une limite inhérente à l'utilisation des ondes sismiques pour cartographier précisément la composition chimique exacte du manteau profond, en tenant compte du fait que la vitesse des ondes dépend à la fois de la composition, de la pression et de la température.

---

### 💡 Indice de méthode

*   *Question 1 :* Observez le sens de variation (augmentation ou diminution) de $V_s$ lorsque $z$ passe de 50 à 100 km. Reliez ensuite la chaleur (température) à la rigidité des matériaux silicatés.
*   *Question 2 :* Réfléchissez à la définition physique d'un liquide en termes de résistance au cisaillement ($\mu$). Si les ondes $S$ passent, que cela implique-t-il sur la présence d'une phase solide continue ?
*   *Question 3 :* Isolez le paramètre $\mu$ de la formule : $V_s = \sqrt{\frac{\mu}{\rho}} \implies \mu = V_s^2 \times \rho$. Veillez à convertir toutes les données dans le Système International (unités SI) avant d'effectuer l'application numérique.
*   *Question 4 :* C'est la question du "non-unicité" des modèles en géophysique : plusieurs combinaisons de paramètres (température, pression, composition) peuvent théoriquement donner une même vitesse d'onde sismique.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse de données et hypothèse rhéologique
*   **Observation :** Entre $z = 50\text{ km}$ et $z = 100\text{ km}$, la vitesse des ondes $S$ diminue, passant de $4,6\text{ km}\cdot\text{s}^{-1}$ à $4,4\text{ km}\cdot\text{s}^{-1}$.
*   **Interprétation :** D'après la formule $V_s = \sqrt{\frac{\mu}{\rho}}$, une baisse de la vitesse traduit soit une diminution de la rigidité $\mu$, soit une augmentation de la masse volumique $\rho$ (ou les deux). Or, la température augmentant avec la profondeur, les roches du manteau supérieur se rapprochent de leur solidus (seuil de fusion). 
*   **Hypothèse :** La baisse de vitesse met en évidence une zone de moindre rigidité (asthénosphère / LVZ), où les roches sont partiellement déformables (comportement ductile), potentiellement en présence d'un film liquidien infime aux joints de grains, sans pour autant être totalement fondues.

#### 2. Réfutation de la fusion totale par les ondes $S$
*   **Principe physique :** Les ondes $S$ (de cisaillement) nécessitent un milieu doué d'élasticité et de résistance au cisaillement pour se propager. Mathématiquement, le module de cisaillement $\mu$ est nul dans les fluides parfaits ($\mu = 0$), ce qui annulerait la vitesse $V_s$.
*   **Démonstration :** Si l'asthénosphère à 100 km était totalement fondue (magma liquide sur 100% du volume), les ondes $S$ y seraient totalement arrêtées (converties ou réfléchies). L'observation empirique de la persence d'ondes $S$ à cette profondeur (bien que ralenties) prouve que le milieu conserve une résistance au cisaillement globale : il s'agit donc d'un milieu partiellement fondu (matrice solide + infime pourcentage de liquide interstitiel), et non d'une poche de magma liquide continue.

#### 3. Calcul du module de cisaillement $\mu$ à 200 km
*   **Données converties en unités SI :**
    *   $V_s = 4,7\text{ km}\cdot\text{s}^{-1} = 4,7 \times 10^3\text{ m}\cdot\text{s}^{-1}$
    *   $\rho = 3,3 \times 10^{3}\text{ kg}\cdot\text{m}^{-3}$
*   **Transformation de la formule :**
    $$V_s = \sqrt{\frac{\mu}{\rho}} \iff V_s^2 = \frac{\mu}{\rho} \iff \mu = V_s^2 \times \rho$$
*   **Application numérique :**
    $$\mu = (4,7 \times 10^3)^2 \times (3,3 \times 10^{3})$$
    $$\mu = (22,09 \times 10^6) \times (3,3 \times 10^3)$$
    $$\mu = 72,897 \times 10^9\text{ Pa} \approx 7,3 \times 10^{10}\text{ Pa}$$
*   **Résultat :** Le module de cisaillement à 200 km de profondeur est d'environ $7,3 \times 10^{10}\text{ Pa}$ (ou $73\text{ GPa}$).

#### 4. Esprit critique et limites du modèle sismologique
*   **Problématique de la non-unicité :** La vitesse d'une onde sismique dépend de manière intriquée de trois facteurs majeurs : la composition minéralogique (chimie), la température et la pression. 
*   **Limite épistémologique :** Une même valeur de vitesse d'onde mesurée à une profondeur donnée peut théoriquement résulter de plusieurs combinaisons de ces paramètres (par exemple, une augmentation de température peut compenser l'effet d'une variation de composition). 
*   **Conclusion critique :** La sismologie fournit un modèle géométrique et rhéologique robuste de l'intérieur de la Terre, mais elle ne peut pas à elle seule déterminer la composition chimique exacte des enveloppes profondes. Elle doit obligatoirement être couplée à d'autres disciplines (pétrologie expérimentale haute pression, analyse des enclaves de roches mantelliques remontées par le volcanisme) pour valider les hypothèses géologiques.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
