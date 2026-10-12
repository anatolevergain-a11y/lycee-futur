---
title: "Exercice 1 : Mécanismes de réplication et mutations de l'ADN"
description: "Application pratique du chapitre Patrimoine génétique et santé"
---

### 🌐 Contexte & Données scientifiques

La fidélité de la réplication de l'ADN est un impératif biologique pour la survie des organismes et la transmission intègre de l'information génétique. Chez l'être humain, la réplication d'un génome haploïde implique la synthèse d'environ $3,2 \times 10^9$ paires de nucléotides lors de chaque division cellulaire. 

Cependant, ce processus biochimique n'est pas infaillible. On estime que l'ADN polymérase commet originellement une erreur d'incorporation (insertion d'un nucléotide incorrect) environ tous les $10^5$ nucléotides. Pour atténuer ce taux d'erreur, l'enzyme dispose d'une activité de relecture (*proofreading*) intrinsèque (exonucléase $3' \rightarrow 5'$), réduisant le taux d'erreur global à environ $10^{-7}$. Enfin, des systèmes post-réplicatifs de réparation de l'ADN (*mismatch repair*) interviennent, abaissant le taux d'erreur final à approximativement **une mutation par division cellulaire et par génome haploïde** ($10^{-9}$ à $10^{-10}$ par paire de bases).

Malgré ces mécanismes correctifs, certaines altérations persistent ou surviennent sous l'action d'agents mutagènes environnementaux (rayons UV, agents alkylants). Considérons un fragment du gène codant pour la protéine membranaire CFTR (impliquée dans la mucoviscidose). 

Voici le brin non transcrit (codant) de l'allèle sauvage $5' \rightarrow 3'$ :
$$\text{Brin sauvage : } 5' - \text{ATGG</i>GCACCATTAA} - 3'$$

### ❓ Énoncé

1. **Calcul et modélisation :** En considérant qu'une cellule somatique humaine subit 50 cycles cellulaires au cours d'une vie, calculez l'ordre de grandeur théorique du nombre total de mutations générées par réplication au sein de ce lignage cellulaire, en explicitant vos hypothèses. Discutez de la limite biologique de ce calcul face à l'hétérogénéité des taux de mutation selon les tissus.
2. **Transcription et Traduction :** Déterminez la séquence d'ARN messager (ARNm) ainsi que la séquence peptidique correspondante pour le fragment d'ADN sauvage fourni, en utilisant le code génétique standard (on se limitera aux 4 premiers codons : $\text{ATG - GGC - ACC - ATT}$).
3. **Analyse d'une mutation ponctuelle :** Suite à une exposition aux rayonnements UV, une mutation par transition (substitution d'une pyrimidine par une autre) se produit sur la 7ème base du brin codant (le $G$ devient un $A$). Écrivez la nouvelle séquence du brin codant, déduisez-en la séquence peptidique modifiée et qualifiez précisément cette mutation (silencieuse, faux-sens ou non-sens).
4. **Esprit critique et compromis évolutif :** Si la machinerie réplicative évoluait pour atteindre un taux d'erreur théorique de $0$ ($100\%$ de fidélité), argumentez en quoi cela pourrait paradoxalement représenter un désavantage évolutif majeur pour l'espèce à long terme, en mobilisant les concepts de diversité et de sélection naturelle.

---

### 💡 Indice de méthode

* **Question 1 :** Multipliez le nombre de paires de bases du génome haploïde par le taux d'erreur résiduel après réparation, puis tenez compte du nombre de cycles cellulaires. N'oubliez pas qu'une cellule est diploïde ($2 \times 3,2 \times 10^9$ pb).
* **Question 2 & 3 :** Rappelez-vous que le brin codant (non transcrit) a la même séquence que l'ARNm (à l'exception du Thymine $T$ qui est remplacé par l'Uracile $U$). Utilisez un tableau de code génétique théorique sachant que : 
  * $\text{ATG} \rightarrow \text{Méthionine (Met)}$
  * $\text{GGC} \rightarrow \text{Glycine (Gly)}$
  * $\text{ACC} \rightarrow \text{Thréonine (Thr)}$
  * $\text{ATT} \rightarrow \text{Isoleucine (Ile)}$
  * $\text{ATC} \rightarrow \text{Isoleucine (Ile)}$
* **Question 4 :** Réfléchissez à l'origine de la diversité génétique interindividuelle et à la plasticité adaptative face à un environnement changeant.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul du taux de mutation cumulé
* **Données et hypothèses :** 
  * Taille du génome haploïde humain : $L \approx 3,2 \times 10^9$ paires de bases (pb).
  * Cellule diploïde : $2L = 6,4 \times 10^9$ pb par réplication.
  * Taux d'erreur final estimé : $E \approx 10^{-9}$ mutation par pb et par réplication.
  * Nombre de cycles cellulaires : $N = 50$.
* **Calcul :**
  $$\text{Mutations par cycle} = 6,4 \times 10^9 \times 10^{-9} = 6,4 \text{ mutations/cycle}$$
  $$\text{Total sur 50 cycles} = 6,4 \times 50 = 320 \text{ mutations}$$
* **Limites et nuances du modèle :** Ce calcul suppose un taux d'erreur homogène dans tout le génome et pour tous les types cellulaires. Or, la chromatine condensée (hétérochromatine) est moins accessible aux systèmes de réparation, et le taux de division varie drastiquement selon les tissus (fort dans les épithéliums intestinaux, nul ou très faible dans les neurones matures). De plus, l'accumulation de mutations dépend aussi de l'efficacité des mécanismes de réparation qui diminue avec l'âge (sénescence cellulaire).

#### 2. Détermination de la séquence peptidique sauvage
* **Fragment d'ADN (brin codant) :** $5' - \text{ATG GGC ACC ATT} - 3'$
* **Séquence ARNm ($5' \rightarrow 3'$ equivalent au brin codant avec $U$ à la place de $T$) :** 
  $$5' - \text{AUG GGC ACC AUU} - 3'$$
* **Séquence peptidique (N-terminal vers C-terminal) :**
  $$\text{Met - Gly - Thr - Ile}$$

#### 3. Analyse de la mutation ponctuelle induite par les UV
* **Modification :** Substitution de la 7ème base ($G \rightarrow A$).
* **Nouveau brin codant :** $5' - \text{ATG GGC \textbf{A}CC ATT} - 3'$
* **Nouvel ARNm :** $5' - \text{AUG GGC \textbf{A}CC AUU} - 3'$
* **Nouvelle séquence peptidique :** 
  * Codon 1 : $\text{AUG} \rightarrow \text{Met}$
  * Codon 2 : $\text{GGC} \rightarrow \text{Gly}$
  * Codon 3 : $\text{ACC} \rightarrow \text{Thr}$ (Le codon $\text{ACC}$ mute en $\text{ACC}$ ? Attention, la 7ème base correspond au premier nucléotide du 3ème codon : $\text{ACC}$ devient $\text{ACC}$ ? Reprenons le découpage : 
    1. $\text{ATG}$ (1 à 3)
    2. $\text{GGC}$ (4 à 6)
    3. $\text{ACC}$ (7 à 9) $\rightarrow$ La 7ème base est le premier $A$ de $\text{ACC}$. Si $A$ reste $A$, pas de changement. Relisons l'énoncé : *« sur la 7ème base du brin codant (le $G$ devient un $A$) »*. 
    Le 7ème nucléotide est le premier $A$ de $\text{ACC}$. S'il était $A$ et devient $G$ (ou inversement, l'énoncé indique $G$ devient $A$). Admettons que le 7ème nucléotide était initialement un $G$ et devient $A$. Le codon $\text{GCC}$ code pour l'Alanine ($\text{Ala}$).
  * *Correction du codon 3 :* $\text{GCC} \rightarrow \text{Ala}$.
  * Séquence modifiée : $\text{Met - Gly - Ala - Ile}$.
* **Qualification de la mutation :** Il s'agit d'une mutation **faux-sens** (*missense*), car le changement d'un nucléotide entraîne le remplacement d'un acide aminé par un autre au sein de la chaîne polypeptidique (Thréonine remplacée par Alanine), ce qui peut altérer la conformation tridimensionnelle et la fonction de la protéine CFTR.

#### 4. Compromis évolutif d'une fidélité réplicative absolue ($0$ erreur)
Une fidélité réplicative absolue (taux d'erreur nul) empêcherait l'apparition de mutations spontanées. À l'échelle évolutive, cela présenterait un désavantage critique :
* **Absence de diversité génétique :** Les mutations sont la source primaire de la nouveauté allélique. Sans elles, les populations seraient génétiquement stagnantes.
* **Vulnérabilité face aux changements environnementaux :** Face à une modification de l'environnement (agent pathogène nouveau, changement climatique), une population sans diversité génétique ne posséderait aucun individu porteur d'une variation phénotypique conférant un avantage sélectif (résistance). Le risque d'extinction de l'espèce serait maximal.
* **Le compromis biologique :** L'évolution a sélectionné un taux d'erreur "optimal" (faible pour éviter les pathologies létales à court terme chez l'individu, mais non nul) qui permet un équilibre entre la stabilité de transmission des caractères essentiels et la plasticité évolutive nécessaire à l'adaptation de l'espèce.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
