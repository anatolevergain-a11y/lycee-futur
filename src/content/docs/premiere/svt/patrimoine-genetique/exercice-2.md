---
title: "Exercice 2 : Génétique médicale et thérapies géniques"
description: "Application pratique du chapitre Patrimoine génétique et santé"
---

### 🌐 Contexte & Données scientifiques

La thérapie génique somatique représente une approche thérapeutique majeure pour le traitement des monogénopathies, telles que la bêta-thalassémie ou l'immunodéficience combinée sévére (IDSC). Elle consiste à introduire un acide nucléique fonctionnel dans les cellules d'un patient pour corriger ou pallier l'anomalie responsable d'une pathologie.

Considérons un essai clinique de phase I/II visant à traiter une myopathie héréditaire rare. Le vecteur utilisé est un virus adéno-associé recombinant ($rAAV$) non pathogène, conçu pour acheminer le gène thérapeutique $G$ sous le contrôle d'un promoteur spécifique du tissu musculaire. 

Les données expérimentales et cinétiques recueillies lors du suivi de $N = 100$ patients traités se résument ainsi :
* **Efficacité transcriptionnelle** : La concentration moyenne d'ARNm thérapeutique mesurée par biopsie musculaire à $t = 6\text{ mois}$ est de $\overline{C}_{\text{ARNm}} = 45\text{ copies par cellule}$.
* **Seuil thérapeutique** : L'analyse statistique montre qu'un effet phénotypique correcteur n'est observé que si la concentration intracellulaire dépasse un seuil critique $S_t = 30\text{ copies par cellule}$.
* **Persistance vectorielle et dilution mitotique** : Contrairement aux vecteurs rétroviraux, le génome du $rAAV$ persiste principalement sous forme épisomale (non intégrée). Dans le tissu musculaire squelettique (constitué de fibres musculaires post-mitotiques mais comprenant un pool de cellules satellites souches en renouvellement), la quantité moyenne de vecteur par cellule diminue au cours du temps selon une cinétique approximée par une loi de décroissance apparente :
  $$\langle V(t) \rangle = V_0 \cdot e^{-\lambda t}$$
  où $V_0 = 80\text{ copies/cellule}$ à $t = 0$ (fin de l'administration), et $\lambda = 0,116\text{ an}^{-1}$.
* **Contrainte immunologique** : 30 % des patients de la cohorte développent une réponse humorale neutralisante dirigée contre la capside du $rAAV$, entraînant une clairance immunitaire rapide du vecteur et une perte d'efficacité thérapeutique dès la première année.

---

### ❓ Énoncé

1. **Calculer** la concentration moyenne estimée de vecteurs persistants $\langle V(t) \rangle$ par cellule à $t = 3\text{ ans}$ post-injection. Expliciter la formule mathématique utilisée et commenter la pertinence de ce modèle face à la biologie du tissu musculaire.
2. **Déterminer** graphiquement ou par le calcul la durée théorique (en années) pendant laquelle l'efficacité transcriptionnelle globale reste supérieure au seuil thérapeutique $S_t = 30\text{ copies/cellule}$, en faisant l'hypothèse d'une proportionnalité directe entre le nombre de copies de vecteurs et la concentration d'ARNm ($\text{ARNm}(t) = k \cdot \langle V(t) \rangle$).
3. **Discuter** de manière critique les limites de ce modèle déterministe au regard de la variabilité interindividuelle observée (notamment l'impact de la réponse immunitaire et la nature épisomale du vecteur). Quelle contradiction majeure cela soulève-t-il dans le traitement des tissus à forte cinétique de renouvellement cellulaire ?

---

### 💡 Indice de méthode

* *Question 1* : Utilisez la fonction exponentielle décroissante fournie en remplaçant $t$ par la valeur temporelle demandée. Veillez à bien analyser la nature post-mitotique des fibres musculaires adultes pour interpréter la valeur de $\lambda$.
* *Question 2* : Établissez d'abord la constante de proportionnalité $k$ à l'aide des données initiales ($t = 0$ ou $t = 6\text{ mois}$), puis résolvez l'inéquation $\langle V(t) \rangle \ge S_t$ (ou utilisez la relation sur l'ARNm).
* *Question 3* : Pour l'esprit critique, ne vous limitez pas aux mathématiques : intégrez les données biologiques qualitatives (réponse immunitaire, cellules souches, devenir des épisomes lors de la division cellulaire).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la concentration de vecteurs à $t = 3\text{ ans}$

* **Formule utilisée** : 
  $$\langle V(t) \rangle = V_0 \cdot e^{-\lambda t}$$
* **Application numérique** avec $V_0 = 80$, $\lambda = 0,116\text{ an}^{-1}$ et $t = 3\text{ ans}$ :
  $$\langle V(3) \rangle = 80 \cdot e^{-0,116 \times 3}$$
  $$\langle V(3) \rangle = 80 \cdot e^{-0,348}$$
  Sachant que $e^{-0,348} \approx 0,706$ :
  $$\langle V(3) \rangle \approx 80 \times 0,706 = 56,48\text{ copies par cellule}$$
* **Commentaire biologique** : Le tissu musculaire squelettique est principalement composé de syncitiums plurinucléés post-mitotiques (les fibres musculaires ne se divisent plus). Par conséquent, la diminution du nombre de copies virales ne provient pas d'une dilution mitotique classique (répartition inégale lors de la mitose), mais plutôt d'une dégradation progressive des épisomes viraux ou de phénomènes de turn-over moléculaire. Le modèle mathématique rend compte d'une décroissance lente, ce qui suggère une bonne persistance à moyen terme.

#### 2. Détermination de la durée d'efficacité thérapeutique

* **Étape A : Établissement de la relation**
  À $t = 0$, $V_0 = 80\text{ copies/cellule}$. À $t = 0,5\text{ an}$ ($6\text{ mois}$), la concentration d'ARNm est mesurée à $45\text{ copies/cellule}$.
  Calculons d'abord $V(0,5)$ par le modèle :
  $$V(0,5) = 80 \cdot e^{-0,116 \times 0,5} = 80 \cdot e^{-0,058} \approx 75,45\text{ copies/cellule}$$
  La proportionnalité $\text{ARNm}(t) = k \cdot \langle V(t) \rangle$ nous donne :
  $$45 = k \cdot 75,45 \implies k \approx \frac{45}{75,45} \approx 0,596\text{ ARNm par copie de vecteur}$$
  *(Alternative simplifiée admise : utiliser directement la décroissance du nombre de copies de vecteurs sachant que le seuil d'ARNm à 30 correspond à un seuil de copies vectorielles d'environ $30 / 0,596 \approx 50,3\text{ copies/cellule}$).*

* **Étape B : Résolution de l'inéquation pour atteindre le seuil $S_t$**
  Le seuil thérapeutique en ARNm est de $30\text{ copies/cellule}$. Avec le facteur $k$, cela correspond à un seuil de vecteurs $V_{\text{seuil}} = \frac{30}{k} \approx 50,3\text{ copies/cellule}$.
  Recherchons le temps $t$ pour lequel $\langle V(t) \rangle = 50,3$ :
  $$80 \cdot e^{-0,116 t} = 50,3$$
  $$e^{-0,116 t} = \frac{50,3}{80} \approx 0,629$$
  En appliquant le logarithme népérien ($\ln$) de chaque côté :
  $$-0,116 t = \ln(0,629) \approx -0,463$$
  $$t = \frac{-0,463}{-0,116} \approx 3,99\text{ ans}$$
* **Conclusion** : Le modèle théorique prédit que l'efficacité thérapeutique se maintient durant environ **4 ans** avant de repasser en deçà du seuil critique d'expression.

#### 3. Discussion critique des limites du modèle et compromis biologiques

* **Limites du modèle déterministe** : Le modèle suppose une décroissance homogène et exponentielle ($\lambda$ constant) pour l'ensemble de la cohorte. Or, la réalité clinique montre une forte variabilité interindividuelle :
  1. *La réponse immunitaire adaptative* : Les 30 % de patients développant des anticorps neutralisants subissent une élimination rapide du vecteur, invalidant l'hypothèse d'une cinétique lente ($\lambda$ est en réalité beaucoup plus élevé pour ce sous-groupe).
  2. *La compartimentation tissulaire* : La transduction par le $rAAV$ n'est pas uniforme dans tout le volume musculaire. Des zones de moindre diffusion présentent des concentrations initiales $V_0$ inférieures au seuil, constituant des "focal points" d'échec thérapeutique local.
* **Contradiction fondamentale dans les tissus à renouvellement** : 
  Si ce type de thérapie génique épisomale donne des résultats corrects dans le muscle (tissu peu mitotique), son application à des tissus à forte cinétique de renouvellement cellulaire (comme la moelle osseuse ou l'épithélium intestinal) est inopérante à long terme. En effet, lors de la mitose, les épisomes viraux non intégrés se répartissent de manière aléatoire dans les cellules filles et finissent par être dilués ou perdus. 
  *Compromis biomédical* : Cela oblige les chercheurs à utiliser des vecteurs intégratifs (lentivirus) ou des techniques d'édition génomique (CRISPR-Cas9), qui posent quant à eux des risques majeurs de **mutagenèse insertionnelle** (perturbation d'un oncogène ou d'un gène suppresseur de tumeur), illustrant le compromis permanent entre *durabilité de l'effet thérapeutique* et *sécurité génotoxique*.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
