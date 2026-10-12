---
title: "Cours : Lunette astronomique et optique géométrique"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

* **Modèle de l'optique géométrique :** Modèle dans lequel la lumière est représentée par des rayons lumineux se propageant en ligne droite dans un milieu transparent, homogène et isotrope. Les lois de Snell-Descartes régissent la réfraction et la réflexion.
* **Lentille mince convergente :** Système optique transparent symétrique par rapport à son axe optique, plus épais en son centre que sur les bords. Elle converge les faisceaux lumineux incidents parallèles vers un point unique appelé foyer image.
* **Centre optique ($O$) :** Point de la lentille situé sur l'axe optique tel que tout rayon lumineux y passant $n$ 'est pas dévié.
* **Foyer objet ($F$) et Foyer image ($F'$) :** 
  * Le foyer objet $F$ est le point situé sur l'axe optique dont l'image par la lentille est rejetée à l'infini.
  * Le foyer image $F'$ est le point situé sur l'axe optique où convergent les rayons lumineux issus d'un faisceau incident parallèle à l'axe optique.
* **Distance focale ($f'$) :** Algébriquement notée $f' = \overline{OF'}$. Elle est positive pour une lentille convergente.
* **Vergence ($C$) :** Grandeur caractérisant le pouvoir de convergence d'une lentille, exprimée en dioptries ($\delta$ ou $\text{m}^{-1}$). Elle est définie par $C = \frac{1}{f'}$, avec $f'$ en mètres.
* **Lunette astronomique :** Instrument d'optique afocal destiné à l'observation des objets célestes lointains. Elle est constituée de deux systèmes convergents coaxiaux :
  * **L'objectif :** Lentille (ou association de lentilles) de grande distance focale $f'_{1}$, pointée vers l'objet.
  * **L'oculaire :** Lentille (ou association de lentilles) de plus petite distance focale $f'_{2}$, placée près de l'œil de l'observateur.
* **Système afocal :** Système optique pour lequel l'image d'un objet situé à l'infini est rejetée à l'infini. L'émergence d'un faisceau parallèle correspond à un faisceau incident parallèle.
* **Grossissement commercial ou Grosseur ($G$) :** Rapport entre le diamètre apparent de l'image vue à travers l'instrument ($\alpha'$) et le diamètre apparent de l'objet vu à l'œil nu depuis le centre optique de l'instrument ($\alpha$).

---

## 📐 2. Formules et Propriétés fondamentales

### 1. Relation de conjugaison des lentilles minces (avec origine au centre optique)
$$\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{f'}$$

### 2. Relation de grandissement transversal ($\gamma$)
$$\gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}}$$

### 3. Modélisation de la lunette astronomique afocale
Pour une lunette afocale, le foyer image de l'objectif ($F'_{1}$) est confondu avec le foyer objet de l'oculaire ($F_{2}$). L'intervalle optique est nul.

* **Position des foyers :**
  $$\overline{O_{1}F'_{1}} = f'_{1} \quad \text{et} \quad \overline{O_{2}F_{2}} = -f'_{2}$$
* **Condition d'afocalité :**
  $$F'_{1} \equiv F_{2}$$
* **Longueur (ou encombrement) de la lunette ($L$) :**
  $$L = O_{1}O_{2} = f'_{1} + f'_{2}$$

### 4. Diamètres apparents et Grosseur ($G$)
Soit $\alpha$ l'angle sous lequel l'objet (situé à l'infini) est vu à l'œil nu, et $\alpha'$ l'angle sous lequel l'image définitive est vue à travers l'oculaire. Les angles étant algébriques et petits, on utilise l'approximation des petits angles ($\tan(\theta) \approx \theta$ en radians).

* **Expression géométrique des angles :**
  $$\alpha \approx \tan(\alpha) = \frac{AB}{f'_{1}} \quad \text{et} \quad \alpha' \approx \tan(\alpha') = -\frac{AB}{f'_{2}}$$
* **Grosseur de la lunette ($G$) :**
  $$G = \left|\frac{\alpha'}{\alpha}\right| = \frac{f'_{1}}{f'_{2}}$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On considère une lunette astronomique afocale constituée de deux lentilles minces convergentes :
- L'objectif $L_{1}$ de centre $O_{1}$ et de distance focale $f'_{1} = 100 \text{ cm}$.
- L'oculaire $L_{2}$ de centre $O_{2}$ et de distance focale $f'_{2} = 5{,}0 \text{ cm}$.

1. Calculer la longueur $L$ de cette lunette lorsqu'elle est réglée afocale.
2. Exprimer et calculer la grosseure $G$ de cette lunette.
3. Un astre est observé sous un diamètre apparent $\alpha = 2{,}0 \times 10^{-3} \text{ rad}$ à l'œil nu. Calculer le diamètre apparent $\alpha'$ de l'image observée à travers la lunette.

**Résolution :**

1. **Longueur de la lunette afocale :**
   La lunette étant afocale, la distance entre les deux lentilles vaut :
   $$L = O_{1}O_{2} = f'_{1} + f'_{2}$$
   Application numérique :
   $$L = 100 + 5{,}0 = 105 \text{ cm} = 1{,}05 \text{ m}$$

2. **Calcul de la grosseur $G$ :**
   La formule de la grosseur d'une lunette afocale est :
   $$G = \frac{f'_{1}}{f'_{2}}$$
   Application numérique :
   $$G = \frac{100}{5{,}0} = 20$$
   *(La lunette grossit l'image apparente 20 fois).*

3. **Calcul du diamètre apparent $\alpha'$ :**
   Par définition de la grosseur :
   $$G = \left|\frac{\alpha'}{\alpha}\right| \implies \alpha' = G \times \alpha$$
   Application numérique :
   $$\alpha' = 20 \times 2{,}0 \times 10^{-3} = 4{,}0 \times 10^{-2} \text{ rad}$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention au sens des axes et aux grandeurs algébriques :** En optique, les distances sont algébriques. Veillez à bien respecter les signes (par exemple, $f'_{2} > 0$ pour une lentille convergente, mais la position de son foyer objet est $\overline{O_{2}F_{2}} = -f'_{2}$).
* **Ne pas confondre grandissement ($\gamma$) et grosseur ($G$) :** Le grandissement transversal s'applique à des objets et images matériels de tailles $AB$ et $A'B'$ (exprimés en mètres). Pour un objet situé à l'infini, ces grandeurs n'ont pas de sens direct ; on utilise donc le diamètre apparent ($\alpha$ et $\alpha'$) exprimé en radians, et la grandeur sans unité associée est la **grosseur** $G$.
* **Homogénéité des unités :** Pour le calcul de la vergence ou des distances focales, convertissez systématiquement toutes les longueurs en mètres ($\text{m}$) avant d'appliquer les formules numériques.
* **Conditions de Gauss :** Rappelez que les constructions géométriques et les formules usuelles ne sont valables que dans les conditions de Gauss (rayons paraxiaux, proches de l'axe optique et inclinés faiblement par rapport à celui-ci).
* **Rédaction rigoureuse :** Sur votre copie, citez toujours la condition d'afocalité ($F'_{1} \equiv F_{2}$) avant d'utiliser la relation $L = f'_{1} + f'_{2}$. Ne bâclez pas les schémas : flèches de sens de propagation, sens des axes et angles $\alpha$ et $\alpha'$ doivent être explicitement légendés.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
