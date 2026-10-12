---
title: "Exercice 4 : Prospection des ressources minières critiques"
description: "Application pratique du chapitre Le temps et les roches"
---

### 🌐 Contexte concret

La transition énergétique mondiale repose massivement sur les "métaux critiques" (lithium, cobalt, terres rares, cuivre). Le cuivre, par exemple, est indispensable pour les véhicules électriques et les réseaux électriques décarbonés. La recherche de nouveaux gisements porphyriques (associés à des intrusions magmatiques) nécessite une compréhension fine de la chronologie relative et absolue des événements géologiques. 

Dans la chaîne des Andes, les géologues étudient une intrusion granodioritique responsable de la minéralisation en cuivre, recoupée par des filons de dolérite et surmontée par des sédiments volcanoclastiques. Votre objectif est de dater ces événements pour cibler les zones d'enrichissement métallique en appliquant les principes de la chronologie et les méthodes de datation radiométrique.

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Question 1 (Restitution et application des principes) :** À l'aide d'une coupe géologique simplifiée de la région, on observe :
   - Une série sédimentaire $S_1$ plissée.
   - Un pluton granodioritique ($P$) qui recoupe la série $S_1$.
   - Des filons de dolérite ($F$) qui recoupent le pluton $P$.
   - Une coulée de lave basaltique ($L$) qui recouvre l'ensemble érodé.
   
   Établissez la chronologie relative de ces quatre formations géologiques en énonçant clairement les principes stratigraphiques et géologiques utilisés.

2. **Question 2 (Datation absolue) :** Pour dater précisément l'âge du pluton minéralisé $P$, on mesure les concentrations isotopiques dans les cristaux de zircon (minéral accessoire riche en uranium) extraits de la granodiorite. Le couple isotopique utilisé est l'uranium 238 ($^{238}\text{U}$) et le plomb 206 ($^{206}\text{Pb}$), sachant que la période radioactive (demi-vie) du $^{238}\text{U}$ est $T_{1/2} = 4,47 \times 10^9$ années. 
   L'analyse spectrométrique montre que le rapport massique actuel est de $\frac{^{206}\text{Pb}_{actuel}}{^{238}\text{U}_{actuel}} = 0,105$.
   En considérant que le système est clos et qu'il n'y avait pas de $^{206}\text{Pb}$ radiogénique initial, calculez l'âge du pluton $P$. *(Formule utile : $N(t) = N_0 e^{-\lambda t}$ ou $t = \frac{1}{\lambda} \ln\left(1 + \frac{^{206}\text{Pb}}{^{238}\text{U}}\right)$)*.

3. **Question 3 (Mise en perspective pour la prospection) :** Les analyses géochimiques montrent que la phase hydrothermale (à l'origine du dépôt de cuivre) est directement contemporaine de la mise en place de la dernière phase de refroidissement du pluton $P$. Les sédiments de la série sus-jacente non métamorphique $S_2$ qui recouvrent le tout sont datés de l'Éocène (environ $50\text{ Ma}$). 
   Encadrez l'intervalle de temps (âge absolu) durant lequel la minéralisation cuprifère a pu se mettre en place dans cette région.

---

### 💡 Indice

- **Question 1 :** Pensez à identifier les structures géométriques de recoupement et d'inclusion. Ce qui coupe est plus récent que ce qui est coupé.
- **Question 2 :** La désintégration radioactive suit une loi exponentielle. Exprimez $N_0$ en fonction de $N(t)$ et du plomb radiogénique formé, puis utilisez la constante radioactive $\lambda = \frac{\ln(2)}{T_{1/2}}$.
- **Question 3 :** Utilisez à la fois la datation absolue obtenue à la Q2 et l'âge de la couverture sédimentaire non altérée par le pluton pour définir un "fourchette" temporelle.

---

### 📋 Correction détaillée pas à pas

#### **Correction de la Question 1 : Chronologie relative**
Pour établir la chronologie, nous appliquons les principes fondamentaux de la géologie historique :
1. **Série $S_1$ (la plus ancienne) :** Elle est plissée, ce qui montre qu'elle a subi une déformation tectonique postérieure à son dépôt.
2. **Pluton granodioritique ($P$) :** Il recoupe la série $S_1$. D'après le **principe de recoupement**, le pluton est plus jeune que la série $S_1$ qu'il intersecte et métamorphise.
3. **Filons de dolérite ($F$) :** Ils recoupent le pluton $P$. D'après le **principe de recoupement**, les filons sont donc plus récents que le pluton $P$.
4. **Coulée de lave ($L$) :** Elle repose sur une surface d'érosion qui tronque les structures précédentes. D'après le **principe de superposition** (appliqué ici aux surfaces discontinues et discordantes) et de recoupement, la coulée est la structure la plus récente de la séquence observable.

*Ordre chronologique (du plus ancien au plus récent) :* 
$$\text{Série } S_1 \rightarrow \text{Pluton } P \rightarrow \text{Filons } F \rightarrow \text{Coulée } L$$

---

#### **Correction de la Question 2 : Datation absolue par le couple $^{238}\text{U} / ^{206}\text{Pb}$**
1. **Rappel de la loi de désintégration radioactive :**
   $$N(t) = N_0 e^{-\lambda t}$$
   Où $N(t)$ est le nombre d'atomes parents ($^{238}\text{U}$) restants à l'instant $t$, $N_0$ le nombre initial, et $\lambda$ la constante radioactive.

2. **Lien avec le radiogénique :**
   Le nombre d'atomes fils formés ($^{206}\text{Pb}$) correspond aux atomes parents désintégrés :
   $$\text{Pb}(t) = N_0 - N(t) \implies N_0 = N(t) + \text{Pb}(t)$$
   
   En substituant dans la loi de désintégration :
   $$N(t) = (N(t) + \text{Pb}(t)) e^{-\lambda t} \implies \frac{N(t) + \text{Pb}(t)}{N(t)} = e^{\lambda t} \implies 1 + \frac{\text{Pb}(t)}{N(t)} = e^{\lambda t}$$
   
   En appliquant le logarithme népérien ($\ln$) :
   $$t = \frac{1}{\lambda} \ln\left(1 + \frac{^{206}\text{Pb}}{^{238}\text{U}}\right)$$

3. **Calcul de la constante radioactive $\lambda$ :**
   $$\lambda = \frac{\ln(2)}{T_{1/2}} = \frac{0,693}{4,47 \times 10^9 \text{ ans}} \approx 1,55 \times 10^{-10} \text{ an}^{-1}$$

4. **Application numérique :**
   On a $\frac{^{206}\text{Pb}}{^{238}\text{U}} = 0,105$.
   $$t = \frac{1}{1,55 \times 10^{-10}} \ln(1 + 0,105)$$
   $$t = \frac{1}{1,55 \times 10^{-10}} \ln(1,105)$$
   $$t = \frac{0,0998}{1,55 \times 10^{-10}} \approx 6,44 \times 10^8 \text{ ans}$$

   *Le pluton $P$ a donc un âge absolu d'environ **$644\text{ Ma}$** (Néoprotérozoïque / Cambrien).*

---

#### **Correction de la Question 3 : Application à la prospection minière**
- La datation radiométrique nous donne l'âge de mise en place du pluton magmatique associé à la minéralisation : environ **$644\text{ Ma}$**.
- La couverture sédimentaire $S_2$ non métamorphique sus-jacente est datée de l'Éocène ($\approx 50\text{ Ma}$), ce qui signifie que l'érosion a mis à affleurement le gisement bien avant ce dépôt.
- **Intervalle temporel de prospection :** La fenêtre de formation du gisement de cuivre est donc étroitement liée à l'intrusion magmatique datée à ~644 Ma. Pour de futures campagnes de prospection dans des secteurs analogues de la chaîne andine, les géologues devront cibler en priorité les ceintures magmatiques dont l'âge radiométrique avoisine cette période géologique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
