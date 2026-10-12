---
title: "Exercice 2 : Géothermie : principes, potentiel et contraintes géologiques"
description: "Application pratique du chapitre La dynamique interne de la Terre"
---

### 🌐 Contexte & Données scientifiques

La géothermie exploite l'énergie thermique stockée dans le sous-sol terrestre, issue principalement de la désintégration radioactive des isotopes (uranium, thorium, potassium) et de la chaleur résiduelle de l'accrétion planétaire. Le flux géothermique moyen à la surface de la Terre est estimé à environ $\Phi = 65\text{ mW}\cdot\text{m}^{-2}$, mais cette valeur varie considérablement selon le contexte tectonique (zones de subduction, rifts, bassins sédimentaires stables).

Pour évaluer la faisabilité de l'exploitation d'une ressource géothermique, on utilise le gradient géothermique $G$, défini par la variation de la température $T$ en fonction de la profondeur $z$ :

$$G = \frac{dT}{dz}$$

Dans les régions de socle continental stable, la conductivité thermique moyenne des roches est de l'ordre de $\lambda = 2,5\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$. Selon la loi de Fourier régissant les transferts conductifs, le flux thermique est lié au gradient par la relation :

$$\Phi = -\lambda \frac{dT}{dz}$$

On distingue classiquement :
- La **géothermie basse énergie** (< 90 °C), exploitée pour le chauffage urbain (pompes à chaleur).
- La **géothermie haute énergie** (> 150 °C), dédiée à la production d'électricité, nécessitant des anomalies thermiques positives souvent associées au magmatisme récent ou à une lithosphère amincie.

### ❓ Énoncé (3 à 4 questions progressives)

1. **Calcul et caractérisation du régime thermique :** À partir des données du texte, calculer le gradient géothermique théorique (en $\text{°C}\cdot\text{km}^{-1}$) dans une région stable de socle continental. Ce gradient permet-il d'envisager une exploitation directe pour la production d'électricité à 2000 mètres de profondeur ? Justifier à l'aide d'un calcul de température.
2. **Analyse d'une anomalie géologique :** Dans un fossé d'effondrement (rift continental), des mesures in situ révèlent un flux thermique de $\Phi = 120\text{ mW}\cdot\text{m}^{-2}$ pour une conductivité thermique inchangée. Calculer le nouveau gradient géothermique. Déduire la profondeur à laquelle la température de 150 °C est atteinte, en posant l'hypothèse d'une température de surface $T_0 = 15\text{ °C}$.
3. **Esprit critique et contraintes d'exploitation :** Un projet de centrale géothermique haute énergie est envisagé sur le site du rift décrit à la question 2. Cependant, l'analyse pétrographique montre que le réservoir est imperméable (roche saine sans porosité connectée). Expliquer la contrainte technique majeure qui s'impose aux ingénieurs et discuter des limites environnementales ou des risques associés à la solution technologique généralement mise en œuvre (systèmes géothermiques stimulés, ou *EGS*).

### 💡 Indice de méthode

- **Question 1 :** Réarrangez la formule de la loi de Fourier pour isoler $\frac{dT}{dz}$, en veillant à l'homogénéité des unités (convertissez les mW en W). Pour la température à $2000\text{ m}$, utilisez la relation linéaire $T(z) = T_0 + G \times z$.
- **Question 2 :** Appliquez la même démarche mathématique avec la nouvelle valeur du flux thermique. Attention à bien exprimer le résultat final en kilomètres pour la profondeur.
- **Question 3 :** Mobilisez vos connaissances sur les propriétés physiques des roches de la lithosphère (porosité, perméabilité) et songez aux méthodes de fracturation hydraulique artificielle ainsi qu'à leurs externalités négatives (microsismicité induite).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul et caractérisation du régime thermique
* **Calcul du gradient géothermique théorique :**
  D'après la loi de Fourier : $\Phi = \lambda \cdot G \implies G = \frac{\Phi}{\lambda}$
  En convertissant le flux thermique en $\text{W}\cdot\text{m}^{-2}$ : 
  $\Phi = 65\text{ mW}\cdot\text{m}^{-2} = 65 \times 10^{-3}\text{ W}\cdot\text{m}^{-2} = 0,065\text{ W}\cdot\text{m}^{-2}$
  
  $$G = \frac{0,065}{2,5} = 0,026\text{ K}\cdot\text{m}^{-1} = 26\text{ K}\cdot\text{km}^{-1}\text{ (soit } 26\text{ °C}\cdot\text{km}^{-1}\text{)}$$

* **Estimation de la température à 2000 mètres ($2\text{ km}$) :**
  En posant une température de surface de référence $T_0 = 15\text{ °C}$ :
  $$T(2000) = T_0 + (G \times z) = 15 + (26 \times 2) = 15 + 52 = 67\text{ °C}$$

* **Conclusion critique :**
  À $67\text{ °C}$, la ressource relève de la **basse énergie** (< 90 °C). Elle est parfaitement adaptée au chauffage urbain ou individuel, mais est **strictement insuffisante** pour vaporiser de l'eau et actionner des turbines destinées à la production d'électricité (qui requièrent généralement > 150 °C).

---

#### 2. Analyse d'une anomalie géologique
* **Calcul du nouveau gradient dans le rift :**
  $\Phi = 120\text{ mW}\cdot\text{m}^{-2} = 0,120\text{ W}\cdot\text{m}^{-2}$
  $$G_{\text{rift}} = \frac{0,120}{2,5} = 0,048\text{ K}\cdot\text{m}^{-1} = 48\text{ °C}\cdot\text{km}^{-1}$$

* **Calcul de la profondeur pour $T = 150\text{ °C}$ :**
  On cherche $z$ tel que $T(z) = 150\text{ °C}$ :
  $$150 = 15 + (48 \times z)$$
  $$48z = 150 - 15 = 135$$
  $$z = \frac{135}{48} \approx 2,81\text{ km}$$
  La température de 150 °C est donc atteinte à environ **$2810\u202fm$ de profondeur**. Cette anomalie thermique positive caractérise un contexte géodynamique distensif favorable à la géothermie haute énergie.

---

#### 3. Esprit critique et contraintes d'exploitation
* **Contrainte technique :**
  La présence d'une température élevée et d'une profondeur accessible ne suffit pas. Une ressource géothermique exploitable nécessite un **réservoir**, c'est-à-dire une roche à la fois poreuse et **perméable** pour permettre la circulation d'un fluide caloporteur (eau) capable de remonter la chaleur à la surface. Si la roche est imperméable, le transfert thermique par convection est impossible (seule la conduction opère, ce qui est inefficace pour un pompage industriel).

* **Limites et compromis des Systèmes Géothermiques Stimulés (EGS) :**
  Pour contourner cette limite, les ingénieurs recourent à la fracturation hydraulique artificielle (technologie EGS) en injectant de l'eau sous haute pression pour créer un réseau de fractures artificielles. 
  * *Avantages :* Permet d'exploiter la géothermie presque partout, sranchissant de la simple présence de nappes aquifères naturelles.
  * *Contraintes et risques :* Cette technique engendre des coûts financiers très élevés et comporte des incertitudes géologiques majeures (difficulté de modéliser précisément le réseau de fractures). Surtout, elle présente un **risque sismique induit** (déclenchement de séismes de faible à moyenne magnitude par lubrification des failles), ce qui pose un problème crucial d'acceptabilité sociale et de sécurité publique, illustrant le compromis permanent entre transition énergétique et gestion des risques locaux.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
