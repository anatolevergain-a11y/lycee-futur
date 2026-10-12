---
title: "Exercice 2 : La beauté est-elle objective ou subjective ?"
description: "Application pratique du chapitre L'Art et la Création"
---

### 🌐 Contexte & Données scientifiques

En philosophie, la question de la beauté oscille traditionnellement entre deux pôles : le subjectivisme (formulé par David Hume : « La beauté n'est pas une qualité inhérente aux choses elles-mêmes : elle existe seulement dans l'esprit qui la contemple ») et l'objectivisme (hermétiquement lié à l'esthétique pythagoricienne ou kantienne du beau universel). 

Toutefois, les sciences cognitives, l'anthropologie culturelle et l'économie comportementale apportent des données empiriques mesurables qui complexifient cette opposition binaire.

1. **Étude psychométrique de la symétrie faciale (Données empiriques) :**
   Une méta-analyse menée sur $N = 1\,200$ sujets interculturels évaluant l'attractivité de visages générés par algorithme montre qu'un indice de symétrie bilatérale $\sigma$ (mesuré par le ratio de proportion des axes du visage, normalisé entre $0$ et $1$) corrèle positivement avec le score moyen d'attractivité $A$ attribué sur une échelle de Likert de $1$ à $10$. L'équation de régression linéaire obtenue est :
   $$A = 2{,}5 + 6{,}8 \times \sigma$$
   Cependant, le coefficient de détermination de ce modèle est de $R^2 = 0{,}42$, ce qui signifie que $58\,\%$ de la variance des jugements esthétiques ne s'explique pas par la seule symétrie géométrique.

2. **Variabilité interculturelle et exposition (Économie expérimentale) :**
   Dans une étude sur l'évaluation d'œuvres d'art abstrait menée auprès de deux groupes (Groupe $\text{A}$: $500$ étudiants en art occidentaux ; Groupe $\text{B}$: $500$ agriculteurs d'une zone rurale isolée sans exposition aux musées occidentaux), le taux de consensus sur la "qualité esthétique" d'une toile de Jackson Pollock chute de $78\,\%$ à $12\,\%$. 
   Soit $C$ le taux de consensus mesuré en pourcentage ($\text{en } \%$) et $E$ le nombre d'heures d'exposition annuelle aux canons artistiques dominants :
   $$C(E) = 15 + \frac{85 \times E}{E + 50}$$

---

### ❓ Énoncé

1. **Analyse logique et critique du modèle biométrique :** À partir de l'équation de régression linéaire $A = 2{,}5 + 6{,}8 \times \sigma$, calculez le score d'attractivité prédit $A$ pour un visage parfaitement asymétrique ($\sigma = 0$) puis pour un visage parfaitement symétrique ($\sigma = 1$). En exploitant la valeur du coefficient de détermination ($R^2 = 0{,}42$), démontrez pourquoi il est scientifiquement abusif de réduire la beauté objective à un simple calcul mathématique de proportions.

2. **Modélisation de l'acquisition culturelle du jugement :** En utilisant la fonction de consensus $C(E) = 15 + \frac{85 \times E}{E + 50}$, calculez le taux de consensus pour un individu dont l'exposition est nulle ($E = 0 \text{ h/an}$) et calculez la limite de $C(E)$ lorsque l'exposition tend vers l'infini ($E \to +\infty$). Quel paradoxe philosophique cela soulève-t-il quant à l'universalité du jugement de beauté ?

3. **Synthèse argumentative :** Confrontez ces données quantitatives (biologie évolutive vs conditionnement sociologique) à la distinction kantienne entre le « agréable » (relatif au subjectif pur) et le « beau » (prétendant à l'universalité sans concept). Rédigez un paragraphe argumenté montrant en quoi la science moderne redéfinit le débat philosophique classique.

---

### 💡 Indice de méthode

* **Pour la question 1 :** Procédez par simple application numérique en remplaçant $\sigma$ par ses valeurs. Pour l'analyse critique, rappelez-vous qu'un $R^2$ de $0{,}42$ indique que plus de la moitié de la variance échappe au modèle : cela quantifie la part d'incertitude ou de subjectivité non mesurée par la biométrie.
* **Pour la question 2 :** Calculez $C(0)$. Pour la limite quand $E \to +\infty$, divisez le numérateur et le dénominateur par $E$ (ou observez le comportement du terme fractionnaire $\frac{85}{1 + 50/E}$). Interprétez le résultat : un consensus élevé prouve-t-il l'objectivité de la beauté, ou une uniformisation culturelle ?
* **Pour la question 3 :** Mobilisez rigoureusement les termes philosophiques. Ne prenez pas parti dogmatiquement pour l'objectivisme ou le subjectivisme, mais utilisez les données pour montrer que le jugement esthétique est un *compromis complexe* entre des invariants neurobiologiques et des variables socioculturelles.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse logique et critique du modèle biométrique
* **Calculs pour $\sigma = 0$ et $\sigma = 1$ :**
  Pour un visage asymétrique ($\sigma = 0$) :
  $$A = 2{,}5 + 6{,}8 \times 0 = 2{,}5 \text{ / 10}$$
  Pour un visage symétrique ($\sigma = 1$) :
  $$A = 2{,}5 + 6{,}8 \times 1 = 9{,}3 \text{ / 10}$$

* **Analyse critique via le coefficient $R^2$ :**
  Le coefficient de détermination est $R^2 = 0{,}42$, ce qui signifie que le modèle linéaire n'explique que $42\,\%$ de la variance des données observées. Par conséquent, $100\,\% - 42\,\% = 58\,\%$ de la variance totale des jugements esthétiques dépend de facteurs totalement extérieurs à la symétrie (contexte, émotions, histoire personnelle, codes culturels). Sur un plan strictement scientifique et logique, il est donc faux de réduire la beauté à un déterminisme géométrique strict : l'objectivité biométrique ne constitue qu'une condition partielle (et non suffisante) de l'expérience esthétique.

#### 2. Modélisation de l'acquisition culturelle du jugement
* **Calcul pour $E = 0 \text{ h/an}$ :**
  $$C(0) = 15 + \frac{85 \times 0}{0 + 50} = 15 + 0 = 15\,\%$$
  Un individu sans exposition aux canons artistiques partagés ne présente qu'un faible consensus ($15\,\%$).

* **Calcul de la limite lorsque $E \to +\infty$ :**
  $$\lim_{E \to +\infty} \left( 15 + \frac{85 \times E}{E + 50} \right) = 15 + \lim_{E \to +\infty} \left( \frac{85}{1 + \frac{50}{E}} \right) = 15 + \frac{85}{1 + 0} = 15 + 85 = 100\,\%$$
  Le taux de consensus tend asymptotiquement vers $100\,\%$. 

* **Paradoxe philosophique :**
  Cette modélisation mathématique démontre que ce que nous appelons "universalité du beau" peut être le produit d'un apprentissage social intensif et non d'une structure objective inhérente à l'objet. Cela met en péril l'idée d'un goût universel spontané, suggérant que l'accord des esprits est le fruit d'une normalisation culturelle plutôt que de la reconnaissance d'une objectivité ontologique.

#### 3. Synthèse argumentative (Mise en perspective philosophique)
Kantiens et universalistes soutiennent que le beau se distingue de l'agréable en ce qu'il revendique l'assentiment universel (« est beau ce qui plaît universellement sans concept »). Les données biométriques modernes semblent donner raison à Emmanuel Kant en révélant des invariants neurobiologiques universels (la sensibilité à la symétrie $\sigma$, ancrée dans l'évolution de l'espèce). 

Cependant, les données de l'économie expérimentale et sociologique introduisent un bémol décisif : le taux de consensus $C(E)$ varie drastiquement selon l'exposition culturelle $E$. Dès lors, la science contemporaine invite à dépasser le dualisme naïf. La beauté n'est ni une pure objectivité mathématique (le $R^2$ modeste l'invalide), ni un pur subjectivisme anarchique (les régularités statistiques l'infirment). Elle apparaît comme un **objet hybride** : une interaction complexe entre une disposition biologique universelle (le soubassement cognitif de la perception) et une construction historique et sociale (l'éducation du regard). Le jugement esthétique est donc une quête d'objectivité portée par un sujet irrémédiablement ancré dans une subjectivité culturelle.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
