---
title: "Cours : Structure sociale et mobilités"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

La structure sociale désigne la manière dont une société est organisée en groupes sociaux distincts, hiérarchisés et interdépendants. En sociologie, deux grandes approches théoriques permettent de penser cette stratification : celle de Karl Marx et celle de Max Weber.

- **Classes sociales (Marx) :** Groupes sociaux de grande taille définis par leur place dans le processus de production. Selon Marx, les classes se définissent par la **propriété ou la non-propriété des moyens de production** (bourgeoisie vs prolétariat) et se caractérisent par un antagonisme d'intérêts et une **conscience de classe** (le fait d'avoir conscience d'appartenir à un même groupe et de partager des intérêts communs).
- **Stratification sociale (Weber) :** Approche pluridimensionnelle de la hiérarchie sociale. Pour Weber, la société est divisée selon trois axes distincts mais liés :
  1. L'ordre économique (les classes sociales, fondées sur la situation de marché).
  2. L'ordre social (les groupes de statut, fondés sur le prestige ou l'honneur social).
  3. L'ordre politique (les partis, fondés sur l'exercice du pouvoir).
- **Structure socioprofessionnelle (CSP / PCS) :** Outil statistique élaboré par l'INSEE (les Professions et Catégories Socioprofessionnelles) qui regroupe les individus selon leur profession, leur statut (salarié ou non), leur qualification et leur position hiérarchique.
- **Mobilité sociale :** Changement de position sociale d'un individu ou d'un groupe d'individus. Elle peut être **intergénérationnelle** (comparaison de la position du fils ou de la fille par rapport à celle du père ou de la mère) ou **intragénérationnelle** (au cours de la vie active du même individu).
- **Mobilité observée (ou brute) :** Ensemble des mouvements effectivement constatés entre la position sociale des parents et celle des enfants. Elle se décompose en :
  - **Mobilité structurelle :** Mobilité contrainte par l'évolution de la structure de l'emploi (ex. : tertiarisation, augmentation des qualifications).
  - **Mobilité nette (ou fluidité sociale) :** Mobilité résiduelle qui ne s'explique pas par les changements structurels, mesurant l'égalité des chances.
- **Déclassement :** Situation de mobilité descendante où un individu se retrouve dans une position sociale inférieure à celle de ses parents ou à sa position antérieure.

---

## 📐 2. Formules et Propriétés fondamentales

L'analyse de la mobilité sociale repose sur l'utilisation d'outils statistiques rigoureux, principalement les tables de mobilité (tables de recrutement et tables de destinée).

### A. Table de destinée (Lecture en ligne)
La table de destinée répond à la question : *"Que deviennent les enfants de... ?"*
Soit $n_{ij}$ l'effectif des individus issus de l'origine sociale $i$ (ligne) et occupant la position sociale $j$ (colonne).
La proportion d'enfants d'origine $i$ qui appartiennent à la destinée $j$ se calcule ainsi :

$$T_{destinée}(i \rightarrow j) = \frac{n_{ij}}{N_{i\bullet}} \times 100$$

Où $N_{i\bullet} = \sum_{j} n_{ij}$ représente l'effectif total de la ligne $i$ (ensemble des enfants d'origine $i$).

### B. Table de recrutement (Lecture en colonne)
La table de recrutement répond à la question : *"D'où viennent les individus qui occupent la position... ?"*
La proportion d'individus de la position $j$ qui proviennent de l'origine $i$ se calcule ainsi :

$$T_{recrutement}(i \leftarrow j) = \frac{n_{ij}}{N_{\bullet j}} \times 100$$

Où $N_{\bullet j} = \sum_{i} n_{ij}$ représente l'effectif total de la colonne $j$ (ensemble des individus occupant la position $j$).

### C. Le taux de mobilité totale (ou observée) ($T_{obs}$)
Il mesure la part des individus dont la position sociale diffère de celle de leurs parents :

$$T_{obs} = \frac{\sum_{i \neq j} n_{ij}}{N} \times 100$$

Où $N$ est l'effectif total de la population étudiée.

### D. Le paradoxe d'Anderson
Mis en évidence par le sociologue Perry Anderson, ce paradoxe désigne une situation où le niveau de diplôme augmente globalement (mobilité structurelle ascendante du point de vue des qualifications), mais où le risque de **déclassement** pour les diplômés peut paradoxalement stagner ou augmenter en raison de la **dévaluation des diplômes** (inflation scolaire).

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Soit une population simplifiée de $1000$ fils dont on compare la position sociale à celle de leur père (données fictives).

- Nombre total de pères ouvriers : $400$ ($N_{ouvrier\bullet} = 400$).
- Parmi ces fils de pères ouvriers, $100$ sont devenus cadres ($n_{ouvrier \rightarrow cadre} = 100$).
- Nombre total de cadres parmi les fils : $250$ ($N_{\bullet cadre} = 250$).

1. Calculez la proportion de fils de cadres parmi l'ensemble des cadres (table de recrutement).
2. Calculez la proportion de fils d'ouvriers devenus cadres parmi l'ensemble des fils d'ouvriers (table de destinée).

**Correction :**

1. **Calcul pour la table de recrutement (lecture en colonne) :**
   Il s'agit de déterminer la part des cadres actuels qui sont issus de pères ouvriers :
   
   $$T_{recrutement} = \frac{n_{ouvrier \rightarrow cadre}}{N_{\bullet cadre}} \times 100$$
   
   $$T_{recrutement} = \frac{100}{250} \times 100 = 40 \text{ \%%}$$
   
   *Interprétation :* $40 \text{ \%%}$ des cadres de cette société sont d'origine ouvrière.

2. **Calcul pour la table de destinée (lecture en ligne) :**
   Il s'agit de déterminer ce que sont devenus les fils d'ouvriers :
   
   $$T_{destinée} = \frac{n_{ouvrier \rightarrow cadre}}{N_{ouvrier\bullet}} \times 100$$
   
   $$T_{destinée} = \frac{100}{400} \times 100 = 25 \text{ \%%}$$
   
   *Interprétation :* $25 \text{ \%%}$ des fils d'ouvriers occupent une position de cadre.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

- **Le sens de lecture des tables de mobilité (Le piège classique) :** C'est l'erreur la plus fréquente en évaluation. Ne confondez jamais *ligne* et *colonne*. Retenez la règle infaillible :
  - **Ligne** = Origine (Père/Mère) $\rightarrow$ *Destinée*.
  - **Colonne** = Position d'arrivée (Enfant) $\leftarrow$ *Recrutement*.
  - *Astuce mnémotechnique :* "On **recrute** par profil (colonne), on a un destin par trajectoire (ligne)."
- **Attention au vocabulaire statistique :** Ne dites jamais "la moitié des ouvriers sont devenus cadres" si vous lisez une table de recrutement. Respectez strictement le sujet de la phrase : le dénominateur change selon la table choisie.
- **Ne pas confondre mobilité observée et fluidité sociale :** La mobilité observée dépend de la structure de la société (les emplois disponibles). La fluidité sociale mesure les chances relatives d'accéder à une position selon son origine, indépendamment de la structure des emplois.
- **Maîtrise des auteurs :** En dissertation ou en épreuve composée, veillez à toujours associer un concept à son auteur de référence (Marx pour les classes sociales, Weber pour la stratification multidimensionnelle, Bourdieu pour la reproduction sociale via le capital culturel). N'utilisez pas ces termes comme des synonymes interchangeables.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
