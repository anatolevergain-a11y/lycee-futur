---
title: "Cours : Chronologie géologique et ressources"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

La compréhension de l'histoire de la Terre repose sur la datation des événements géologiques et sur l'étude des enveloppes terrestres qui abritent ou génèrent les ressources nécessaires aux sociétés humaines.

*   **Chronologie relative :** Méthode qui permet de situer les événements géologiques les uns par rapport aux autres sans donner d'âge chiffré, en s'appuyant sur des principes géologiques fondamentaux (superposition, recoupement, inclusion, identité paléontologique).
*   **Chronologie absolue :** Méthode qui permet de déterminer l'âge numérique (en années) d'un minéral, d'une roche ou d'un événement géologique, principalement grâce à la géochronologie isotopique (radiochronologie).
*   **Stratotype :** Affleurement rocheux servant de référence pour une unité chronostratigraphique (étage, série, etc.) à l'échelle mondiale.
*   **Ressource géologique :** Concentration de matière minérale ou organique dans ou sur la croûte terrestre, dont l'extraction est techniquement et économiquement envisageable. On distingue les ressources non renouvelables (combustibles fossiles, minerais métalliques) et les ressources renouvelables à l'échelle humaine (eau souterraine, géothermie).
*   **Ressource non renouvelable :** Ressource dont le stock est fini et dont la vitesse de formation géologique est infiniment plus lente que sa vitesse de consommation par l'espèce humaine.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Principes de la chronologie relative
*   **Principe de superposition :** Toute couche sédimentaire sus-jacente est plus récente que la couche sous-jacente qu'elle recouvre, sauf bouleversement tectonique majeur.
*   **Principe de recoupement :** Une structure géologique (faille, filon, discordance) qui en recoupe une autre est plus récente que celle qu'elle affecte.
*   **Principe d'inclusion :** Un objet inclus dans une roche est plus ancien que la roche qui l'emprisonne.
*   **Principe d'actualisme (ou uniformitarisme) :** Les lois physiques et chimiques qui régissent les processus géologiques actuels s'appliquent également aux temps géologiques passés.

### B. Radiochronologie et datation absolue
La datation radiométrique repose sur la désintégration radioactive spontanée d'un isotope père instable ($P$) en un isotope fils stable ($F$). 

La loi de désintégration radioactive s'exprime par l'équation différentielle suivante :
$$\frac{dN(t)}{dt} = -\lambda N(t)$$

Où :
*   $N(t)$ est le nombre d'atomes radioactifs du père $P$ à l'instant $t$.
*   $\lambda$ est la constante radioactive (exprimée en $\text{an}^{-1}$), propre à chaque couple isotopique.

En intégrant cette équation, on obtient la formule fondamentale de la datation absolue :
$$N(t) = N_0 e^{-\lambda t}$$

Où $N_0$ est le nombre initial d'atomes père à l'instant $t = 0$ (fermeture du système géologique).

En introduisant l'isotope fils $F(t)$ (en supposant que $F(t) = F_0 + [N_0 - N(t)]$ où $F_0$ est la quantité initiale d'isotope fils), et en résolvant pour le temps $t$, on obtient :
$$t = \frac{1}{\lambda} \ln \left( 1 + \frac{F(t) - F_0}{N(t)} \right)$$

*   **Période radioactive (ou demi-vie, $T_{1/2}$) :** Temps nécessaire pour que la moitié des noyaux radioactifs d'un échantillon se désintègre. Elle est reliée à la constante radioactive par la relation :
    $$T_{1/2} = \frac{\ln(2)}{\lambda}$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On analyse un échantillon de roche magmatique contenant le couple isotopique Rubidium/Strontium ($^{87}\text{Rb} / ^{87}\text{Sr}$). 
On mesure les concentrations atomiques suivantes :
*   Nombre d'atomes du père radioactif $^{87}\text{Rb}$ : $N = 5,0 \times 10^{19}$ atomes.
*   Nombre d'atomes de l'isotope fils radiogénique $^{87}\text{Sr}$ : $F - F_0 = 1,5 \times 10^{18}$ atomes.
*   La demi-vie du $^{87}\text{Rb}$ est $T_{1/2} = 4,8 \times 10^{10}$ ans.

Déterminer l'âge $t$ de cette roche magmatique.

**Résolution :**

1.  **Calculer la constante radioactive $\lambda$ :**
    $$\lambda = \frac{\ln(2)}{T_{1/2}} = \frac{0,693}{4,8 \times 10^{10}} \approx 1,444 \times 10^{-11} \text{ an}^{-1}$$

2.  **Appliquer la formule de datation absolue :**
    $$t = \frac{1}{\lambda} \ln \left( 1 + \frac{F - F_0}{N} \right)$$

3.  **Effectuer l'application numérique :**
    *   Rapport radiogénique : $\frac{F - F_0}{N} = \frac{1,5 \times 10^{18}}{5,0 \times 10^{19}} = 0,03$
    *   Calcul du logarithme : $\ln(1 + 0,03) = \ln(1,03) \approx 0,029558$
    *   Calcul final de l'âge $t$ :
        $$t = \frac{0,029558}{1,444 \times 10^{-11}} \approx 2,047 \times 10^9 \text{ ans}$$

**Réponse :**
L'âge de la roche magmatique est d'environ **2,05 milliards d'années**.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Piège 1 (Chronologie relative) :** Oublier de vérifier l'orientation des couches (présence potentielle de plis couchés ou de renversements tectoniques). Le principe de superposition ne s'applique qu'aux séries sédimentaires non renversées.
*   **Piège 2 (Système clos) :** Considérer qu'une roche peut être datée par radiochronologie sans vérifier la condition de **fermeture du système**. Si la roche a subi un métamorphisme ultérieur ou une altération hydrothermale, les éléments ont pu migrer (fuite du père ou du fils), faussant totalement l'âge calculé.
*   **Piège 3 (Choix du chronomètre) :** Utiliser le couple Carbone 14 ($^{14}\text{C} / ^{14}\text{N}$, $T_{1/2} \approx 5730$ ans) pour dater des roches sédimentaires anciennes ou des fossiles d'âges géologiques profonds (ère primaire ou secondaire). Le carbone 14 n'est utilisable que pour la Préhistoire (jusqu'à environ 50 000 ans). Pour les roches anciennes, on utilise des couples à période longue ($^{87}\text{Rb} / ^{87}\text{Sr}$, $^{40}\text{K} / ^{40}\text{Ar}$, etc.).
*   **Conseil rédactionnel :** Lors de l'étude d'un document présentant un diagramme isochrone (Rb/Sr ou K/Ar), veillez à bien identifier ce que représentent les axes du graphique et à expliciter l'ordonnée à l'origine (qui correspond au rapport initial $F_0/F_{ref}$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
