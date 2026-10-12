---
title: "Exercice 3 : Biotechnologies et sélection variétale"
description: "Application pratique du chapitre Gestion des sols et agronomie"
---

### 🌐 Contexte & Données scientifiques

Face aux défis climatiques et à la nécessité de réduire l'impact environnemental des pratiques agricoles, la gestion des sols et l'agronomie moderne intègrent la sélection variétale. L'objectif est d'obtenir des variétés végétales adaptées à des régimes hydriques restreints et capables de maintenir des rendements stables sans surconsommation d'intrants azotés.

Considérons une expérimentation agronomique menée sur deux variétés de blé tendre (*Triticum aestivum*) cultivées sur un sol limoneux à faible réserve utile en eau :
*   **La variété $V_1$** (lignée issue de la sélection conventionnelle par croisements répétés).
*   **La variété $V_2$** (lignée issue de biotechnologies, intégrant un marqueur moléculaire accélérant l'introgression d'un allèle conférant une meilleure efficacité d'utilisation de l'azote - *WUE* et *NUE* accrues).

Les parcelles ont reçu deux traitements azotés : $T_0$ (0 kg N/ha) et $T_1$ (150 kg N/ha). Les mesures ont été réalisées sur trois parcelles témoins par modalité ($n=3$).

**Tableau 1 : Résultats agronomiques moyens (moyenne $\pm$ écart-type)**
| Variété | Traitement | Rendement grain ($q/ha$) | Concentration en protides (%) | Biomasse racinaire ($t/ha$ sec) |
| :--- | :--- | :--- | :--- | :--- |
| **$V_1$** | $T_0$ | $32,4 \ (\pm 2,1)$ | $10,1 \ (\pm 0,4)$ | $1,2 \ (\pm 0,1)$ |
| **$V_1$** | $T_1$ | $68,7 \ (\pm 3,5)$ | $12,8 \ (\pm 0,6)$ | $0,9 \ (\pm 0,1)$ |
| **$V_2$** | $T_0$ | $41,2 \ (\pm 1,8)$ | $11,5 \ (\pm 0,3)$ | $1,8 \ (\pm 0,2)$ |
| **$V_2$** | $T_1$ | $74,5 \ (\pm 2,9)$ | $13,1 \ (\pm 0,5)$ | $1,3 \ (\pm 0,2)$ |

*Note méthodologique :* L'indice d'efficience d'utilisation de l'azote ($\text{NUE}$, exprimé en kg de grain produit par kg d'azote apporté) se calcule selon la formule :
$$\text{NUE} = \frac{\text{Rendement}_{(\text{T1})} - \text{Rendement}_{(\text{T0})}}{\text{Quantité d'azote apportée}}$$

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Analyse des performances productives :** À partir des données du Tableau 1, calculez l'indice d'efficience d'utilisation de l'azote ($\text{NUE}$) pour les deux variétés $V_1$ et $V_2$. Commentez l'impact du mode de sélection sur la réponse de la plante aux apports d'engrais.
2. **Impact biophysique souterrain :** Mettez en relation les variations de la biomasse racinaire et les rendements en conditions de carence ($T_0$). En quoi ces données éclairent-elles les stratégies d'adaptation des sols cultivés face au stress hydrique et minéral ?
3. **Esprit critique et compromis agronomique :** L'utilisation de variétés issues de biotechnologies ($V_2$) est parfois présentée comme une solution miracle pour une agriculture durable. Discutez de cette affirmation en intégrant la notion d'écart-type, les limites méthodologiques de l'expérimentation en station, ainsi que les risques écologiques à long terme (ex : épuisement minéral des sols, dynamique des populations adventices).

---

### 💡 Indice de méthode

*   **Pour la Q1 :** Veillez à bien soustraire les valeurs moyennes de $T_0$ à celles de $T_1$ avant de diviser par la quantité d'azote (150 kg/ha). Exprimez le résultat avec l'unité appropriée.
*   **Pour la Q2 :** Pensez à l'interface sol-racine (rhizosphère). Un système racinaire plus développé modifie l'exploration du volume du sol et donc l'absorption des ions nitrates ($\text{NO}_3^-$) et de l'eau.
*   **Pour la Q3 :** Ne vous limitez pas aux chiffres bruts. Analysez la variabilité (écart-type $\pm$) pour évaluer la stabilité des performances. Interrogez-vous sur le transfert des résultats de parcelles expérimentales contrôlées vers des agrosystèmes réels complexes.

---

### 📋 Correction détaillée pas à pas

**1. Calcul et analyse de l'efficience ($\text{NUE}$)**
*   **Pour la variété $V_1$ (sélection conventionnelle) :**
    $$\text{NUE}_{V_1} = \frac{68,7 - 32,4}{150} = \frac{36,3}{150} = 0,242 \text{ kg de grain / kg d'azote}$$
*   **Pour la variété $V_2$ (biotechnologies) :**
    $$\text{NUE}_{V_2} = \frac{74,5 - 41,2}{150} = \frac{33,3}{150} = 0,222 \text{ kg de grain / kg d'azote}$$
*   *Analyse nuancée :* Contre toute attente apparente, la $\text{NUE}$ globale calculée ainsi est légèrement supérieure pour $V_1$. Cependant, si l'on analyse la performance absolue, $V_2$ produit significativement plus en condition de carence ($T_0$ : $41,2$ contre $32,4 \text{ q/ha}$), ce qui démontre une meilleure valorisation du reliquat azoté présent naturellement dans le sol. $V_2$ exprime un potentiel de rendement supérieur ou égal, mais l'écart de rendement entre $T_0$ et $T_1$ est plus resserré, traduisant une moindre dépendance relative aux intrants azotés additionnels.

**2. Relation entre biomasse racinaire et dynamique du sol**
En condition de carence ($T_0$), la variété $V_2$ développe une biomasse racinaire de $1,8 \text{ t/ha}$ contre $1,2 \text{ t/ha}$ pour $V_1$ (+50%). 
*   *Conséquence agronomique :* Un réseau racinaire étendu augmente le volume prospecté dans le profil cultural. Cela améliore l'interception des éléments nutritifs peu mobiles dans la solution du sol (comme les ions phosphates) et l'absorption de l'eau résiduelle. 
*   *Impact sur le sol :* Cette biomasse, en se dégradant après récolte, contribue à enrichir le sol en matière organique (restitution de carbone labile), favorisant la structuration du complexe argilo-humique et l'activité biologique de la rhizosphère. On observe toutefois un coût énergétique pour la plante : une plus grande part des assimilats carbonés (issus de la photosynthèse) est investie sous la terre au détriment de la partie aérienne, ce qui est un compromis évolutif classique (*trade-off*).

**3. Discussion critique et limites du modèle biotechnologique**
L'affirmation selon laquelle les biotechnologies résoudraient à elles seules les problématiques de durabilité doit être nuancée par plusieurs arguments scientifiques :
*   *Analyse de la variabilité :* Les écarts-types (ex: $\pm 3,5$ pour $V_1 T_1$) montrent qu'il existe une variabilité intraparcellaire non négligeable. Les performances mesurées en station expérimentale bénéficient d'un lissage des conditions pédoclimatiques qui ne reflètent pas la stochasticité (aléas climatiques, hétérogénéité spatiale du sol) d'une exploitation agricole réelle.
*   *Risques d'épuisement des sols :* Des variétés à haut rendement (comme $V_2$ à $T_1$, $74,5 \text{ q/ha}$) prélèvent des quantités accrues d'éléments minéraux (N, P, K, oligo-éléments) dans le sol. Sans restitution adéquate (matières organiques, rotations diversifiées), cela conduit à une minéralisation rapide et à une dégradation structurale du sol à moyen terme.
*   *Biais écologiques :* L'utilisation de variétés performantes sélectionnées pour des conditions intensives peut mener à une érosion de la agrobiodiversité cultivée (uniformisation génétique), rendant les agrosystèmes potentiellement plus vulnérables à l'émergence de nouveaux bio-agresseurs (phytopathogènes, adventices résistantes).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
