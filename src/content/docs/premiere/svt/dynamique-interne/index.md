---
title: "Cours : La dynamique interne de la Terre"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Fiche de Cours : La dynamique interne de la Terre

---

## 📌 1. Notions clés & Définitions

La Terre est un système géodynamique actif dont la structure interne et le moteur thermique régissent l'ensemble des grands mouvements de surface (tectonique des plaques, magmatisme, séismes).

*   **Structure interne de la Terre :** 
    L'étude de la propagation des ondes sismiques (sismologie) permet de subdiviser le globe terrestre selon deux modèles principaux :
    *   **Le modèle chimique (compositionnel) :** Distingue la *croûte* (continentale et océanique), le *manteau* (riche en silicates) et le *noyau* (composé essentiellement d'un alliage de fer et de nickel).
    *   **Le modèle rhéologique (mécanique) :** Distingue la **lithosphère** (enveloppe rigide externe, comprenant la croûte et la partie supérieure du manteau lithosphérique) et **l'asthénosphère** (zone du manteau plus ductile, située sous la lithosphère).

*   **Lithosphère :** 
    Enveloppe rigide terrestre d'épaisseur variable (environ 100 km, plus mince sous les dorsales océaniques, plus épaisse sous les cratons continentaux). Elle est découpée en **plaques lithosphériques** (ou plaques tectoniques) qui se déplacent les unes par rapport aux autres à la surface du globe.

*   **Asthénosphère :** 
    Partie du manteau supérieur située sous la lithosphère, caractérisée par des propriétés mécaniques ductiles (ou visco-élastiques) permettant les mouvements de convection mantellique.

*   **Flux thermique terrestre ($Q$) :** 
    Quantité de chaleur évacuée par unité de surface et par unité de temps depuis l'intérieur de la Terre vers la surface. Sa valeur moyenne est d'environ $65\text{ mW/m}^2$. Il traduit la dissipation de l'énergie thermique interne.

*   **Convection mantellique :** 
    Mode de transfert de la chaleur par mouvements de matière au sein du manteau. Les roches chaudes, moins denses, s'élancent lentement vers la surface, tandis que les roches froides et denses de la lithosphère plongeante s'enfoncent dans le manteau.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Le flux géothermique et la loi de Fourier
La conduction thermique au sein des enveloppes rigides (comme la lithosphère) est régie par la loi de Fourier, qui relie le flux thermique $Q$ au gradient de température :

$$Q = -\lambda \cdot \frac{dT}{dz}$$

*   $Q$ : Flux géothermique (en $\text{W}\cdot\text{m}^{-2}$)
*   $\lambda$ : Conductivité thermique des roches (en $\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$)
*   $\frac{dT}{dz}$ : Gradient géothermique vertical (en $\text{K}\cdot\text{m}^{-1}$)

### B. Bilan thermique de la Terre
L'énergie interne de la Terre provient de deux sources principales :
1.  **La chaleur résiduelle** accumulée lors de l'accrétion initiale et de la différenciation planétaire (formation du noyau).
2.  **La désintégration radioactive** des isotopes instables au sein de la Terre (notamment l'uranium 238 et 235, le thorium 232 et le potassium 40).

La puissance thermique totale $P_{\text{rad}}$ dégagée par désintégration radioactive dans un volume $V$ s'exprime par :

$$P_{\text{rad}} = \rho \cdot H \cdot V$$

*   $\rho$ : Masse volumique moyenne de la roche ($\text{kg}\cdot\text{m}^{-3}$)
*   $H$ : Radiogénicité massique ($\text{W}\cdot\text{kg}^{-1}$)
*   $V$ : Volume considéré ($\text{m}^3$)

### C. Vitesse de déplacement des plaques
La vitesse relative $v$ d'une plaque par rapport à une autre se calcule géométriquement par la distance parcourue $\Delta d$ durant un intervalle de temps géologique $\Delta t$ (souvent estimé par des anomalies magnétiques marines ou des points chauds) :

$$v = \frac{\Delta d}{\Delta t}$$

*Exprimée généralement en $\text{cm/an}$ ou $\text{mm/an}$.*

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un chercheur étudie une anomalie magnétique océanique de part et d'autre d'une dorsale. Il mesure une distance $\Delta d = 50\text{ km}$ entre l'axe de la dorsale et une isochrone datée de $2,5\text{ millions d'années (Ma)}$. 
Calculez la vitesse d'expansion semi-océanique (vitesse d'éloignement de la plaque par rapport à l'axe). Exprimez le résultat en $\text{cm/an}$.

**Résolution :**
1. **Rappel de la formule :**
   $$v = \frac{\Delta d}{\Delta t}$$

2. **Conversion des unités dans le système international ou adaptés :**
   *   $\Delta d = 50\text{ km} = 50 \times 10^3\text{ m} = 5 \times 10^6\text{ cm}$
   *   $\Delta t = 2,5\text{ Ma} = 2,5 \times 10^6\text{ années}$

3. **Application numérique :**
   $$v = \frac{5 \times 10^6\text{ cm}}{2,5 \times 10^6\text{ ans}} = 2\text{ cm/an}$$

**Conclusion :**
La vitesse d'expansion semi-océanique est de $2\text{ cm/an}$ (ce qui correspond à une vitesse d'ouverture totale de la dorsale de $4\text{ cm/an}$).

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention à la confusion entre les modèles :** Ne confondez jamais *croûte/manteau* (qui relève de la chimie/composition minéralogique) et *lithosphère/asthénosphère* (qui relève de la rhéologie/comportement mécanique). Par exemple, la lithosphère comprend la croûte *et* une partie du manteau supérieur.
*   **Ne pas oublier les unités dans les calculs :** Les vitesses d'expansion s'expriment usuellement en $\text{cm/an}$ ou $\text{mm/an}$, tandis que les données de terrain sont souvent en kilomètres et en millions d'années. Soyez rigoureux lors des conversions (1 Ma = $10^6$ ans ; $1\text{ km} = 10^5\text{ cm}$).
*   **Le moteur de la tectonique :** Évitez les raccourcis simplistes. La convection mantellique n'est pas le seul moteur actif ; la force de traction de la plaque plongeante (*slab pull*) dans les zones de subduction joue un rôle dynamique prépondérant dans le mouvement des plaques.
*   **Rédaction rigoureuse :** Utilisez un vocabulaire scientifique précis (flux thermique, subduction, accrétion, ductilité, isochrone) et justifiez toujours vos affirmations par des observations (ex. : séismes, tomographie sismique, flux de chaleur).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
