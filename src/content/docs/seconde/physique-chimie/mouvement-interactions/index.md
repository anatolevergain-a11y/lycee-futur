---
title: "Cours : Mouvement et interactions"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Physique-Chimie - Classe de Seconde
## Chapitre : Mouvement et interactions

---

## 📌 1. Notions clés & Définitions

* **Référentiel :** Solide par rapport auquel on étudie le mouvement d'un système. Le choix du référentiel est indispensable avant toute description cinématique. Les référentiels les plus courants en classe de seconde sont :
  * Le *terrestre* (lié à la Terre, idéal pour les mouvements à sa surface).
  * Le *géocentrique* (centre sur la Terre, axes orientés vers des étoiles fixes, utilisé pour les satellites de la Terre).
  * L' *héliocentrique* (centre sur le Soleil, axes orientés vers des étoiles fixes, utilisé pour l'étude du système solaire).

* **Système :** Objet (ou ensemble d'objets) dont on étudie le mouvement.

* **Trajectoire :** Ensemble des positions successives occupées par le point du système au cours du temps. Selon la forme de la trajectoire, le mouvement est qualifié de *rectiligne* (droite), *circulaire* (cercle) ou *curviligne* (courbe quelconque).

* **Vitesse :** Grandeur caractérisant la rapidité du mouvement. Elle peut être *moyenne* sur un intervalle de temps ou *instantanée* à une date précise.

* **Interaction :** Action mutuelle exercée entre deux systèmes $A$ et $B$. Si $A$ agit sur $B$, alors $B$ agit simultanément sur $A$. Une interaction peut modifier l'état de mouvement d'un système ou déformer ce dernier.

* **Force :** Modélisation d'une action mécanique exercée sur un système. Elle est caractérisée par :
  * Son point d'application.
  * Sa direction (droite d'action).
  * Son sens.
  * Sa valeur (ou intensité), exprimée en Newtons ($\text{N}$).

---

## 📐 2. Formules et Propriétés fondamentales

### A. Vitesse instantanée
Pour un point $M$ dont on connaît les positions successives à intervalles de temps réguliers $\tau$ (tau), la vitesse instantanée $v_i$ à la date $t_i$ (correspondant au point $M_i$) se calcule par la relation :

$$v_i = \frac{M_{i-1}M_{i+1}}{2\tau}$$

* $M_{i-1}M_{i+1}$ : distance réelle (en mètres, $\text{m}$) entre la position précédente et la position suivante.
* $2\tau$ : durée correspondante (en secondes, $\text{s}$).
* $v_i$ : vitesse en mètres par seconde ($\text{m}\cdot\text{s}^{-1}$).

### B. Caractérisation du vecteur vitesse
Le vecteur vitesse $\vec{v}$ d'un point possède les caractéristiques suivantes :
* **Direction :** tangente à la trajectoire au point considéré.
* **Sens :** celui du mouvement.
* **Valeur (ou norme) :** $v$, exprimée en $\text{m}\cdot\text{s}^{-1}$.

### C. Principe des actions réciproques (Troisième loi de Newton)
Si un corps $A$ exerce une force $\vec{F}_{A/B}$ sur un corps $B$, alors le corps $B$ exerce simultanément une force $\vec{F}_{B/A}$ sur le corps $A$. Ces deux forces ont la même droite d'action, des sens opposés et la même intensité :

$$\vec{F}_{A/B} = -\vec{F}_{B/A}$$

### D. Poids et force gravitationnelle
* **Le poids $\vec{P}$** d'un objet de masse $m$ à la surface de la Terre est modélisé par :
  $$P = m \times g$$
  * $P$ : intensité du poids en Newtons ($\text{N}$).
  * $m$ : masse en kilogrammes ($\text{kg}$).
  * $g$ : intensité de la pesanteur (sur Terre, $g \approx 9,81 \, \text{N}\cdot\text{kg}^{-1}$).

* **La force d'interaction gravitationnelle** universelle exercée par un corps $A$ (de masse $m_A$) sur un corps $B$ (de masse $m_B$), séparés par une distance $d$, s'exprime par :
  $$F_{A/B} = F_{B/A} = G \times \frac{m_A \times m_B}{d^2}$$
  * $G$ : constante de gravitation universelle ($G \approx 6,67 \times 10^{-11} \, \text{N}\cdot\text{m}^2\cdot\text{kg}^{-2}$).
  * $m_A, m_B$ en $\text{kg}$.
  * $d$ en mètres ($\text{m}$).

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un ballon de masse $m = 450 \, \text{g}$ est immobile sur le sol. 
1. Identifier les forces exercées sur le ballon.
2. Calculer l'intensité du poids de ce ballon. On prendra $g = 9,8 \, \text{N}\cdot\text{kg}^{-1}$.

**Résolution :**
1. *Système étudié :* Le ballon.
   * *Bilan des forces :*
     * Le poids $\vec{P}$, force exercée par la Terre sur le ballon (verticale, vers le bas).
     * La force de contact exercée par le sol sur le ballon $\vec{R}$ (verticale, vers le haut).

2. *Calcul du poids :*
   * Attention à l'homogénéité des unités : la masse $m$ doit être convertie en kilogrammes.
     $$m = 450 \, \text{g} = 0,450 \, \text{kg}$$
   * Application de la formule du poids :
     $$P = m \times g$$
     $$P = 0,450 \times 9,8 = 4,41 \, \text{N}$$
   * *Conclusion :* L'intensité du poids du ballon est de $4,41 \, \text{N}$.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

1. **Ne pas confondre masse et poids :** La masse ($m$, en $\text{kg}$) est une grandeur intrinsèque à l'objet, invariable quel que soit l'endroit dans l'univers. Le poids ($P$, en $\text{N}$) est une force qui dépend du lieu (notamment de l'astre où l'on se trouve, via $g$).
2. **Oublier les conversions d'unités :** Dans les calculs de vitesse ou de gravitation, vérifiez systématiquement que les distances sont en mètres ($\text{m}$), les temps en secondes ($\text{s}$) et les masses en kilogrammes ($\text{kg}$).
3. **Négliger le référentiel :** Dire qu'un objet est "au repos" ou "en mouvement" n'a de sens que si l'on précise par rapport à quel référentiel. Précisez-le toujours en début de rédaction.
4. **Erreur de notation vectorielle :** Une force ou une vitesse est une grandeur vectorielle. Veillez à utiliser la flèche ($\vec{F}$ ou $\vec{v}$) lorsque vous parlez du vecteur, et l'absence de flèche ($F$ ou $v$) lorsque vous parlez de sa valeur (norme).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
