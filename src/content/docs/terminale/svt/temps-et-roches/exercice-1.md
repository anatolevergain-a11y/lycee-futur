---
title: "Exercice 1 : Datation absolue (radiochronologie) et datation relative"
description: "Application pratique du chapitre Chronologie géologique et ressources"
---

### 🌐 Contexte & Données scientifiques

La reconstitution de l'histoire géologique repose sur l'association de méthodes de datation relative (principes stratigraphiques) et de datation absolue (radiochronologie). Cette complémentarité permet de dater des événements géologiques et d'estimer l'âge de formation des réservoirs de ressources (minerais, hydrocarbures).

Dans le cadre de l'exploitation minière d'un massif granitique, on cherche à dater la mise en place d'un pluton et l'âge d'un filon de pegmatite recoupant ce dernier. 

Le système radioactif utilisé est le couple **Rubidium-Strontium ($^{87}\text{Rb}$ / $^{87}\text{Sr}$)**. 
- $^{87}\text{Rb}$ se désintègre en $^{87}\text{Sr}$ selon une désintégration $\beta^-$ avec une demi-vie ($\lambda$) caractérisée par une période radioactive $t_{1/2} = 48{,}8 \times 10^9$ ans.
- La constante radioactive $\lambda$ est liée à la demi-vie par la relation : $\lambda = \frac{\ln(2)}{t_{1/2}}$.

La loi de la désintégration radioactive s'exprime par l'équation mathématique suivante :

$${}^{87}\text{Sr}_{(t)} = {}^{87}\text{Sr}_{(0)} + {}^{87}\text{Rb}_{(t)} \left( e^{\lambda t} - 1 \right)$$

Pour s'affranchir de la quantité initiale de strontium, on normalise les mesures par rapport à un isotope stable non radiogénique, le $^{86}\text{Sr}$. L'équation de la droite isochrone est alors :

$$\left( \frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}} \right)_{\text{mesuré}} = \left( \frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}} \right)_0 + \left( \frac{{}^{87}\text{Rb}}{{}^{86}\text{Sr}} \right) \left( e^{\lambda t} - 1 \right)$$

Cette équation est celle d'une droite d'équation $y = ax + b$, où :
- $y = \left( \frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}} \right)_{\text{mesuré}}$
- $b = \left( \frac{{}^{87}\text{Sr}}{{}^{86}\text{Sr}} \right)_0$ (ordonnée à l'origine)
- $x = \left( \frac{{}^{87}\text{Rb}}{{}^{86}\text{Sr}} \right)$
- $a = e^{\lambda t} - 1$ (pente de la droite)

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Mobilisation des connaissances et principes (Datation relative) :**
   À partir d'observations de terrain, le géologue note qu'un filon magmatique recoupe des strates sédimentaires carbonatées plissées et qu'il est surmonté en discordance par des grès. Rappeler le principe stratigraphique permettant de situer chronologiquement la mise en place du filon par rapport aux strates carbonatées, puis déduire la chronologie relative de ces trois formations.

2. **Exploitation d'un modèle mathématique (Datation absolue) :**
   Expliquer comment la pente ($a$) de la droite isochrone permet de déterminer l'âge $t$ d'un échantillon géologique. Établir la formule mathématique littérale permettant de calculer l'âge $t$ en fonction de la pente $a$ et de la constante radioactive $\lambda$.

3. **Application numérique et analyse critique :**
   L'analyse spectrométrique de minéraux isolés (biotites, feldspaths) du granite du pluton donne une droite isochrone dont la pente est $a = 0{,}0615$. 
   Calculer l'âge de mise en place de ce granite (en années). 
   *Donnée : $\ln(1{,}0615) \approx 0{,}0597$ et $\lambda \approx 1{,}42 \times 10^{-11}\text{ an}^{-1}$.*

4. **Limite méthodologique et rigueur scientifique :**
   La datation radiométrique repose sur l'hypothèse fondamentale d'un système clos (aucun échange de matière avec l'extérieur depuis la cristallisation). Discuter de la fiabilité de ce résultat si l'échantillon a subi un métamorphisme régional ultérieur modéré.

---

### 💡 Indice de méthode

- **Question 1 :** Pensez aux relations géométriques de recoupement et de superposition. Ce qui recoupe est plus récent que ce qui est recoupé.
- **Question 2 :** Partez de l'expression de la pente $a = e^{\lambda t} - 1$ et isolez l'inconnue $t$ en utilisant la fonction logarithme népérien ($\ln$).
- **Question 3 :** Veillez à bien appliquer la formule mathématique en respectant les unités des grandeurs fournies dans le texte.
- **Question 4 :** Interrogez-vous sur le devenir des isotopes parents ($^{87}\text{Rb}$) et fils ($^{87}\text{Sr}$) en cas de circulation de fluides hydrothermaux ou de recristallisation minérale.

---

### 📋 Correction détaillée pas à pas

1. **Correction Q1 :**
   - Le **principe de recoupement** indique qu'une structure géologique qui en recoupe une autre est plus récente que celle qu'elle affecte. Par conséquent, le filon magmatique est plus jeune que les strates carbonatées qu'il traverse.
   - Le **principe de superposition** (associé à la notion de discordance) indique que les grès sus-jacents sont plus récents que le socle granitique/filonien érodé sur lequel ils reposent.
   - **Chronologie relative :** 1) Dépôt des strates carbonatées $\rightarrow$ 2) Plissement $\rightarrow$ 3) Mise en place du filon magmatique $\rightarrow$ 4) Érosion / Surface de discordance $\rightarrow$ 5) Dépôt des grès.

2. **Correction Q2 :**
   - D'après l'équation de la droite isochrone, la pente $a$ est égale à :
     $$a = e^{\lambda t} - 1$$
   - Pour isoler $t$, on ajoute $1$ de chaque côté :
     $$e^{\lambda t} = a + 1$$
   - On applique le logarithme népérien ($\ln$) de part et d'autre de l'égalité :
     $$\ln\left(e^{\lambda t}\right) = \ln(a + 1)$$
     $$\lambda t = \ln(a + 1)$$
   - On isole enfin l'âge $t$ :
     $$t = \frac{\ln(a + 1)}{\lambda}$$

3. **Correction Q3 :**
   - Application numérique avec les données de l'énoncé ($a = 0{,}0615$ et $\lambda = 1{,}42 \times 10^{-11}\text{ an}^{-1}$) :
     $$t = \frac{\ln(0{,}0615 + 1)}{1{,}42 \times 10^{-11}}$$
     $$t = \frac{\ln(1{,}0615)}{1{,}42 \times 10^{-11}}$$
   - En utilisant la valeur approchée fournie ($\ln(1{,}0615) \approx 0{,}0597$) :
     $$t = \frac{0{,}0597}{1{,}42 \times 10^{-11}} \approx 4{,}20 \times 10^9 \text{ ans}$$
   - Le granite a donc environ **4,2 milliards d'années**.

4. **Correction Q4 :**
   - Si le système n'est plus clos (ouverture du système lors d'un métamorphisme ou d'altérations hydrothermales), des ions $^{87}\text{Rb}$ ou $^{87}\text{Sr}$ peuvent avoir été exportés ou importés. 
   - Les points expérimentaux ne s'alignent alors plus parfaitement sur une droite isochrone (dispersion des points), ou pire, la droite obtenue définit un « âge artéfact » qui correspond à la date de l'événement métamorphique métasomatique et non à l'âge de la cristallisation initiale. 
   - *Conclusion scientifique :* Toute datation absolue nécessite une validation pétrographique rigoureuse au microscope pour s'assurer de l'intégrité des minéraux analysés.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
