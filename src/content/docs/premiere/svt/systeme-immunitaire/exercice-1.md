---
title: "Exercice 1 : Mécanismes de la réponse immunitaire à médiation humorale et cellulaire"
description: "Application pratique du chapitre L'immunité adaptative et la vaccination"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude de la réponse immunitaire adaptative dirigée contre un virus à réplication intracellulaire obligatoire, des chercheurs mesurent les cinétiques cellulaires et sérologiques chez des souris de souche C57BL/6 infectées à $t = 0 \text{ jour}$ par une dose létale médiane de référence ($10^2 \text{ PFU}$, *Plaque Forming Units*) du virus de la chorioméningite lymphocytaire (LCMV, souche Armstrong).

Ce modèle permet d'explorer la complémentarité entre :
- la **réponse à médiation cellulaire**, caractérisée par la prolifération et la différenciation des lymphocytes T cytotoxiques ($LT\text{c}$ ou $LT\text{ }CD8^+$ effecteurs) capables de lyser les cellules hôtes infectées ;
- la **réponse à médiation humorale**, impliquant les plasmocytes issus de la différenciation des lymphocytes B ($LB$) et producteurs d'anticorps neutralisants spécifiques (immunoglobulines de classe G, $\text{IgG}$).

#### Document 1 : Cinétique de la réponse immunitaire post-infection chez la souris immunocompétente (valeurs moyennes $\pm \text{ incertitude-type}$)

Le suivi temporel de la charge virale hépatique, de la fréquence des $LT\text{ }CD8^+$ dirigés contre l'épitope viral dominant $\text{GP}_{33-41}$ (mesurée par marquage tétramère par cytométrie en flux) et de la concentration sérique en $\text{IgG}$ neutralisantes donne les résultats suivants :

| Temps post-infection ($t$ en $\text{jours}$) | Charge virale ($\log_{10}(\text{PFU} \cdot \text{g}^{-1} \text{ de tissu})$) | Fréquence des $LT\text{ }CD8^+$ spécifiques ($\text{\% des } LT\text{ }CD8^+ \text{ totaux}$) | Titre en $\text{IgG}$ neutralisantes ($\mu\text{g} \cdot \text{mL}^{-1}$) |
| :--- | :--- | :--- | :--- |
| $0$ | Non détectable ($< 1{,}0$) | $0{,}02 \pm 0{,}005$ | $< 0{,}1$ (seuil de détection) |
| $3$ | $6{,}4 \pm 0{,}3$ | $0{,}05 \pm 0{,}01$ | $< 0{,}1$ |
| $6$ | $7{,}8 \pm 0{,}2$ | $2{,}8 \pm 0{,}4$ | $0{,}4 \pm 0{,}1$ |
| $8$ | $3{,}1 \pm 0{,}4$ | $12{,}5 \pm 1{,}2$ | $1{,}8 \pm 0{,}3$ |
| $10$ | Non détectable ($< 1{,}0$) | $9{,}1 \pm 0{,}8$ | $8{,}5 \pm 1{,}1$ |
| $15$ | Non détectable ($< 1{,}0$) | $3{,}2 \pm 0{,}5$ | $45{,}0 \pm 4{,}2$ |
| $30$ | Non détectable ($< 1{,}0$) | $1{,}4 \pm 0{,}2$ | $82{,}0 \pm 6{,}5$ |

#### Document 2 : Évaluation expérimentale de la clairance virale chez des souris mutantes ou déplétées

Afin de déterminer la contribution respective des deux compartiments adaptatifs, l'infection virale ($10^2 \text{ PFU}$) est reproduite chez trois lots distincts :
- **Lot 1 (Témoin) :** Souris sauvages immunocompétentes.
- **Lot 2 (Déplétion cellulaire) :** Souris traitées par des anticorps monoclonaux anti-$CD8$ avant l'infection, éliminant $> 99 \text{ \%}$ des $LT\text{ }CD8^+$.
- **Lot 3 (Déficience humorale) :** Souris mutantes knock-out $\mu\text{MT}$, dépourvues de lymphocytes B matures et incapables de sécréter des immunoglobulines.

La clairance virale à $t = 10 \text{ jours}$ (fin de la phase aiguë) et la persistance virale à long terme ($t = 60 \text{ jours}$) sont quantifiées :

| Condition expérimentale | Charge virale à $t = 10 \text{ jours}$ ($\log_{10}(\text{PFU} \cdot \text{g}^{-1})$) | Charge virale à $t = 60 \text{ jours}$ ($\log_{10}(\text{PFU} \cdot \text{g}^{-1})$) | Survie à $t = 60 \text{ jours}$ ($\text{\%}$) |
| :--- | :--- | :--- | :--- |
| **Lot 1 : Témoin** | Indétectable ($< 1{,}0$) | Indétectable ($< 1{,}0$) | $100 \text{ \%}$ |
| **Lot 2 : Sans } LT\text{ }CD8^+$ | $7{,}5 \pm 0{,}4$ | $6{,}8 \pm 0{,}5$ (infection chronique) | $40 \text{ \%}$ |
| **Lot 3 : Sans } LB$ (souris $\mu\text{MT}$) | Indétectable ($< 1{,}0$) | $3{,}2 \pm 0{,}4$ (résurgence virale) | $85 \text{ \%}$ |

---

### ❓ Énoncé

1. **Analyse quantitative de la cinétique primaire :**  
   À partir du Document 1, calculez le facteur d'amplification de la fréquence des $LT\text{ }CD8^+$ spécifiques entre $t = 0 \text{ jour}$ et le pic de la réponse cellulaire à $t = 8 \text{ jours}$. Décrivez la corrélation temporelle observée entre le pic d'expansion de ces cellules et l'évolution de la charge virale hépatique.

2. **Rôles respectifs des réponses humorale et cellulaire :**  
   À l'aide des données du Document 2, déterminez le compartiment effecteur strictement indispensable à la résolution de la phase aiguë ($t \le 10 \text{ jours}$) et celui requis pour le maintien de l'intégrité de l'organisme à long terme ($t = 60 \text{ jours}$). Justifiez précisément votre déduction.

3. **Intégration mécanistique et regard critique :**  
   - Présentez sous la forme d'un court texte explicatif la complémentarité d'action des $LT\text{c}$ et des anticorps circulants dans la neutralisation et l'élimination définitive d'un virus.
   - Discutez les limites de l'extrapolation directe de ces résultats murins à la vaccination humaine contre des virus hautement variables comme le VIH ou le virus de la grippe.

---

### 💡 Indice de méthode

- **Pour la question 1 :** Le facteur d'amplification correspond au rapport direct $\frac{\text{Fréquence}_{t=8}}{\text{Fréquence}_{t=0}}$. Veillez à bien lire l'échelle logarithmique pour la charge virale : une diminution de $1 \text{ unité log}_{10}$ correspond à une division par $10$ de la quantité physique de virus.
- **Pour la question 2 :** Raisonnez par comparaison méthodique : confrontez chaque lot déplété ou muté au lot témoin pour isoler la variable testée. Distinguez bien la clairance précoce (phase aiguë à $10 \text{ jours}$) de la protection durable (phase chronique à $60 \text{ jours}$).
- **Pour la question 3 :** Rappelez la cible biologique propre à chaque effecteur (antigènes intracellulaires présentés par les molécules du CMH-I pour les $LT\text{c}$ ; antigènes libres/extracellulaires natifs pour les anticorps). Considérez ensuite la capacité des virus à échapper à la reconnaissance immunitaire (mutation, latence).

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Analyse quantitative de la cinétique primaire

1. **Calcul du facteur d'amplification des $LT\text{ }CD8^+$ spécifiques :**
   - À $t = 0 \text{ jour}$, la fréquence initiale est $f_0 = 0{,}02 \text{ \%}$.
   - À $t = 8 \text{ jours}$, la fréquence atteint son maximum $f_8 = 12{,}5 \text{ \%}$.
   - Le facteur d'amplification $K$ est donné par :
     $$K = \frac{f_8}{f_0} = \frac{12{,}5}{0{,}02} = 625$$
   - Il y a donc une amplification clonale d'un facteur $625$ des lymphocytes T dirigés contre l'épitope $\text{GP}_{33-41}$ en l'espace de $8 \text{ jours}$.

2. **Corrélation temporelle avec la charge virale :**
   - Entre $t = 0$ et $t = 6 \text{ jours}$, la charge virale augmente rapidement pour culminer à $10^{7{,}8} \text{ PFU} \cdot \text{g}^{-1}$ (environ $6{,}3 \times 10^7 \text{ PFU} \cdot \text{g}^{-1}$), alors que la réponse cellulaire est encore en phase de prolifération précoce ($2{,}8 \text{ \%}$ à $J_6$) et que le taux d'anticorps est quasi négligeable ($0{,}4 \mu\text{g} \cdot \text{mL}^{-1}$).
   - Entre $t = 6$ et $t = 8 \text{ jours}$, l'explosion de la population de $LT\text{ }CD8^+$ spécifiques (qui passe de $2{,}8 \text{ \%}$ à $12{,}5 \text{ \%}$) coïncide avec un effondrement spectaculaire de la charge virale, qui passe de $10^{7{,}8}$ à $10^{3{,}1} \text{ PFU} \cdot \text{g}^{-1}$, soit une baisse de $4{,}7 \text{ unités log}_{10}$ (division de la charge virale par un facteur supérieur à $50\ 000$).
   - La charge virale devient indétectable dès $t = 10 \text{ jours}$, moment où la concentration en $\text{IgG}$ n'a pas encore atteint son maximum ($8{,}5 \mu\text{g} \cdot \text{mL}^{-1}$ à $J_{10}$ contre $82{,}0 \mu\text{g} \cdot \text{mL}^{-1}$ à $J_{30}$). Cela suggère une corrélation temporelle étroite entre l'activité des $LT\text{ }CD8^+$ et la clairance virale aiguë.

---

#### Question 2 : Rôles respectifs des réponses humorale et cellulaire

1. **Rôle indispensable des $LT\text{ }CD8^+$ en phase aiguë ($t = 10 \text{ jours}$) :**
   - Chez les souris du lot 2 privées de $LT\text{ }CD8^+$, la charge virale à $t = 10 \text{ jours}$ reste massive ($10^{7{,}5} \text{ PFU} \cdot \text{g}^{-1}$), comparable au pic initial du témoin, et ne parvient pas à être éliminée, entraînant une mortalité élevée ($60 \text{ \%}$ de mortalité à $J_{60}$).
   - Inversement, chez les souris du lot 3 (sans lymphocytes B), la clairance à $t = 10 \text{ jours}$ est totale ($< 1{,}0 \log_{10}$), strictement identique à celle des souris témoins immunocompétentes.
   - **Déduction :** La médiation cellulaire ($LT\text{ }CD8^+$ / $LT\text{c}$) est donc la composante **nécessaire et suffisante** pour contrôler et éliminer la réplication virale primaire aiguë.

2. **Rôle des anticorps ($\text{IgG}$) dans le maintien de la stérilisation à long terme ($t = 60 \text{ jours}$) :**
   - À $t = 60 \text{ jours}$, les souris sans lymphocytes B (lot 3) subissent une résurgence virale ($10^{3{,}2} \text{ PFU} \cdot \text{g}^{-1}$) alors que le virus était indétectable à $J_{10}$.
   - Cela s'explique par la décroissance physiologique du pool effecteur de $LT\text{c}$ (contraction clonale par apoptose visible au document 1, où la fréquence passe de $12{,}5 \text{ \%}$ à $1{,}4 \text{ \%}$).
   - En l'absence d'anticorps neutralisants circulants capables d'intercepter les virions résiduels ou émergents, l'infection reprend à bas bruit.
   - **Déduction :** Les anticorps neutralisants issus de la réponse humorale sont **indispensables à la protection à long terme** et à la prévention des rechutes (maintien de la phase stérile).

---

#### Question 3 : Intégration mécanistique et regard critique

1. **Mécanismes complémentaires de coopération :**
   - **Phase précoce et intracellulaire (Action des $LT\text{c}$) :** Les cellules hôtes infectées dégradent les protéines virales cytosoliques et en présentent des fragments peptidiques à leur surface via les molécules du complexe majeur d'histocompatibilité de classe I ($\text{CMH-I}$). Les $LT\text{ }CD8^+$ spécifiques reconnaissent ce complexe par leur récepteur T ($\text{TCR}$). Cette interaction induit la libération orientée de perforine et de granzymes (ou l'activation de la voie Fas/FasL), provoquant l'apoptose des cellules infectées, ce qui détruit le réservoir de réplication du virus.
   - **Phase tardive et extracellulaire (Action des anticorps) :** Les virions libérés dans le milieu extracellulaire sont reconnus sous leur conformation native par les paratopes des anticorps circulants ($\text{IgG}$). Les anticorps se fixent sur les protéines de surface virales, bloquant stériquement la fixation du virus à ses récepteurs cellulaires : c'est la **neutralisation**. De plus, les complexes immuns formés facilitent l'opsonisation et la phagocytose par les macrophages via leurs récepteurs aux fragments constants ($Fc$).

2. **Limites de l'extrapolation aux infections humaines (esprit critique) :**
   - **Variabilité antigénique élevée (ex. VIH, Virus de la Grippe) :** Le modèle LCMV-Armstrong présente des épitopes stables et immunodominants. Chez des virus à fort taux de mutation (rétrovirus ou virus à ARN segmenté sans activité de relecture fidèle), des mutations d'échappement surviennent rapidement tant sur les épitopes reconnus par le $\text{TCR}$ que sur ceux ciblés par les anticorps neutralisants, rendant caduque la mémoire immunitaire à long terme.
   - **Latence et intégration génomique (ex. VIH) :** La réponse cellulaire ne peut éliminer que les cellules présentant des peptides antigéniques. Un virus capable d'intégrer son génome sous forme dormante (provirus non transcrit) échappe totalement à la surveillance des $LT\text{c}$ et des anticorps.
   - **Différences inter-espèces :** Les répertoires de récepteurs cellulaires et la diversité du complexe majeur d'histocompatibilité (système $\text{HLA}$ chez l'Humain, extrêmement polymorphe) introduisent une hétérogénéité de réponse bien plus complexe que celle observée au sein d'une lignée consanguine murine homozygote (C57BL/6).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
