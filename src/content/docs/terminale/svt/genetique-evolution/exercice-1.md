---
title: "Exercice 1 : Modèle d'Hardy-Weinberg et écarts à l'équilibre"
description: "Application pratique du chapitre Génétique et évolution des populations"
---

### 🌐 Contexte & Données scientifiques

Le modèle d'Hardy-Weinberg constitue le null-modèle fondamental de la génétique des populations. Il permet de prédire les fréquences génotypiques attendues à l'équilibre dans une population idéale, c'est-à-dire une population infiniment grande, panmictique (reproduction aléatoire), sans flux migratoire, sans mutation et soumise à aucune pression de sélection.

On s'intéresse à une population naturelle de Phalènes du bouleau (*Biston betularia*) dans une région tempérée d'Europe centrale. Le locus étudié gouverne la pigmentation des ailes et présente deux allèles : 
- L'allèle $A$ (dominant, conférant le phénotype sombre *carbonaria*) de fréquence $p$.
- L'allèle $a$ (récessif, conférant le phénotype clair *typica*) de fréquence $q$.

Dans le cadre d'un suivi écologique à long terme, un échantillon représentatif de $N = 2500$ individus adultes a été capturé et phénotypé au printemps. Les comptages bruts révèlent :
- $N_{\text{carbonaria}} = 2175$ individus (phénotype sombre, génotypes $AA$ et $Aa$)
- $N_{\text{typica}} = 325$ individus (phénotype clair, génotype $aa$)

### ❓ Énoncé

1. En admettant que la population se trouve à l'équilibre d'Hardy-Weinberg, déterminez la fréquence $q$ de l'allèle récessif $a$ et la fréquence $p$ de l'allèle dominant $A$. Justifiez rigoureusement la démarche mathématique à partir des données phénotypiques.
2. Déduisez-en les fréquences génotypiques attendues sous l'hypothèse d'Hardy-Weinberg, puis calculez les effectifs théoriques correspondants pour les trois génotypes ($AA$, $Aa$ et $aa$) dans l'échantillon de 2500 individus.
3. Afin de tester statistiquement la validité du modèle, formulez l'hypothèse nulle ($H_0$) et l'hypothèse alternative ($H_1$). Expliquez pourquoi la constatation d'un écart entre effectifs observés et théoriques nécessite la mise en œuvre d'un test statistique (type $\chi^2$) plutôt qu'une simple comparaison numérique brute.
4. Dans l'hypothèse où un test statistique mettrait en évidence un déficit significatif en hétérozygotes ($Aa$) par rapport aux prédictions du modèle, discutez de deux forces évolutives susceptibles d'expliquer cet écart dans les conditions écologiques réelles de l'espèce.

### 💡 Indice de méthode

- **Rappel du modèle :** Pour un gène à deux allèles, les fréquences alléliques vérifient $p + q = 1$. Les fréquences génotypiques à l'équilibre sont données par le binôme de Newton :
  $$(p + q)^2 = p^2 + 2pq + q^2 = 1$$
- **Astuce de calcul :** Identifiez en premier lieu le génotype dont la fréquence phénotypique permet de déduire directement la fréquence génotypique, et par conséquent la fréquence allélique $q$.
- **Esprit critique :** Un modèle mathématique en biologie n'a pas vocation à "refléter" la réalité avec exactitude, mais à servir d'outil de référence (null-modèle) pour quantifier les forces évolutives à l'œuvre.

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Détermination des fréquences alléliques $p$ et $q$
Le phénotype récessif (*typica*) n'est exprimé que par les individus de génotype homozygote récessif $aa$. Par conséquent, la fréquence génotypique observée de $aa$ (notée $D_{aa}$) correspond directement à la fréquence du carré de l'allèle récessif $q^2$ sous l'hypothèse d'Hardy-Weinberg.

1. Calcul de la fréquence phénotypique observée du génotype $aa$ :
   $$q^2 = \frac{N_{aa}}{N} = \frac{325}{2500} = 0{,}13$$

2. Extraction de la fréquence de l'allèle $q$ :
   $$q = \sqrt{0{,}13} \approx 0{,}3606$$

3. Déduction de la fréquence de l'allèle dominant $p$ en utilisant la contrainte $p + q = 1$ :
   $$p = 1 - q = 1 - 0{,}3606 = 0{,}6394$$

*Conclusion partielle :* L'allèle $A$ a une fréquence estimée de $p \approx 0{,}639$ et l'allèle $a$ une fréquence de $q \approx 0{,}361$.

---

#### Question 2 : Calcul des fréquences génotypiques et des effectifs théoriques
À l'équilibre d'Hardy-Weinberg, les fréquences des trois génotypes sont modélisées par :
- Fréquence de $AA$ : $f(AA) = p^2$
- Fréquence de $Aa$ : $f(Aa) = 2pq$
- Fréquence de $aa$ : $f(aa) = q^2$

1. **Calcul des fréquences génotypiques théoriques :**
   - $f(AA) = (0{,}6394)^2 \approx 0{,}4088$
   - $f(Aa) = 2 \times 0{,}6394 \times 0{,}3606 \approx 0{,}4611$
   - $f(aa) = (0{,}3606)^2 \approx 0{,}1300$ *(vérification : $0{,}4088 + 0{,}4611 + 0{,}1300 = 0{,}9999 \approx 1$)*

2. **Calcul des effectifs théoriques ($N_{\text{théorique}} = f \times N$) pour $N = 2500$ :**
   - Effectif théorique $AA$ : $0{,}4088 \times 2500 \approx 1022$ individus
   - Effectif théorique $Aa$ : $0{,}4611 \times 2500 \approx 1153$ individus
   - Effectif théorique $aa$ : $0{,}1300 \times 2500 = 325$ individus

---

#### Question 3 : Formulation des hypothèses et justification du test statistique
- **Hypothèse nulle ($H_0$) :** La population est à l'équilibre d'Hardy-Weinberg pour ce locus ; les écarts constatés entre effectifs observés et théoriques relèvent de simples fluctuations d'échantillonnage aléatoires.
- **Hypothèse alternative ($H_1$) :** La population n'est pas à l'équilibre d'Hardy-Weinberg ; au moins une force évolutive perturbe les fréquences génotypiques.

**Justification méthodologique :** En biologie, la variabilité d'échantillonnage fait qu'il est statistiquement improbable d'observer une adéquation parfaite entre des données empiriques et un modèle mathématique, même si ce dernier est pertinent. Une simple comparaison numérique ne permet pas de statuer : seul un test d'adéquation (tel que le test du $\chi^2$ de Pearson) quantifie la probabilité que l'écart observé soit dû au seul hasard. Si la valeur calculée dépasse le seuil critique (généralement p < 0,05), $H_0$ est rejetée scientifiquement.

---

#### Question 4 : Discussion des forces évolutives en cas de déficit en hétérozygotes
Si un test statistique révèle un déficit significatif en hétérozygotes ($Aa$) par rapport aux prédictions d'Hardy-Weinberg, plusieurs hypothèses écologiques et évolutives non exclusives peuvent être discutées :

1. **La sélection naturelle (effet de la prédation différentielle - *melanism*) :** 
   Historiquement, la phalène du bouleau subit une pression de sélection liée à la pollution industrielle et au métamorphisme des troncs d'arbres (cryptisme face aux oiseaux insectivores). Si les hétérozygotes $Aa$ ne possèdent pas une valeur sélective (*fitness*) intermédiaire parfaite ou si la sélection varie selon l'environnement micro-spatial, cela modifie les proportions génotypiques attendues.
2. **La structure de population et l'effet Wahlund :** 
   Le modèle d'Hardy-Weinberg exige une panmixie stricte. Si l'échantillon global regroupe en réalité plusieurs sous-populations géographiquement ou écologiquement isolées (flux de gènes restreint), les croisements se font de manière préférentielle au sein de chaque sous-population (endogamie locale). Mathématiquement, le mélange de ces sous-populations de fréquences alléliques différentes entraîne mécaniquement un déficit global en hétérozygotes à l'échelle de l'échantillon total, c'est l'**effet Wahlund**.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
