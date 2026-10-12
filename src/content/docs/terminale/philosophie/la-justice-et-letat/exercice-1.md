---
title: "Exercice 1 : Le droit, la loi et le sentiment de justice"
description: "Application pratique du chapitre La Justice et l'État"
---

### 🌐 Contexte & Données scientifiques

En philosophie politique et en philosophie du droit, la distinction entre la légalité (ce qui est conforme au droit positif) et la légitimité (ce qui est conforme à un idéal de justice) est fondamentale. Pour analyser cette tension, la sociologie du droit et l'économie institutionnelle mobilisent des modèles quantitatifs mesurant l'acceptabilité sociale des normes.

Considérons une étude empirique menée sur un échantillon représentatif de $N = 10\,000$ citoyens concernant l'instauration d'une nouvelle loi fiscale incitative. L'étude croise deux variables :
1. $L$ : Le degré de **légalité** formelle de la mesure (évalué sur une échelle de 0 à 10 par un comité constitutionnel).
2. $S$ : Le **sentiment de justice** subjectif des administrés (évalué par un indice de perception $I_s \in [0, 10]$).

Les données agrégées font apparaître un coefficient de corrélation de Pearson $r = 0,42$ entre $L$ et $S$. Toutefois, l'analyse par déciles de revenu révèle une disjonction significative : pour les 20 % les plus pauvres et les 20 % les plus riches, l'écart-type de la variable $S$ atteint $\sigma_s = 3,1$, traduisant une forte polarisation du sentiment d'injustice, malgré une application uniforme de la loi ($L = 8,5$). 

Ce paradoxe empirique illustre la formule de Gustav Radbruch (la "formule de Radbruch"), selon laquelle un droit positif injuste entre en contradiction avec l'idée même de justice lorsque l'iniquité franchit un certain seuil critique $\epsilon$.

---

### ❓ Énoncé

1. **Analyse conceptuelle :** À partir des données fournies, définissez la distinction entre la légalité et le sentiment de justice ($S$). Expliquez pourquoi un coefficient de corrélation de $r = 0,42$ (qui indique une corrélation positive modérée mais non parfaite) démontre que la conformité à la loi n'implique pas mécaniquement l'adhésion morale des citoyens.
2. **Étude de cas et logique formelle :** Soit la fonction d'acceptabilité sociale $A(L, S) = \alpha L + \beta S$, où $\alpha$ et $\beta$ sont des coefficients de pondération respectifs. Si l'État cherche maximiser $A$ sous contrainte budgétaire, montrez par l'absurde qu'une politique maximisant uniquement la rigueur formelle ($L \to \max$) tout en négligeant la variance du sentiment de justice ($\sigma_s$ élevé) conduit à un risque d'instabilité institutionnelle.
3. **Démonstration critique :** Confrontez la position du positivisme juridique (ex: Hans Kelsen, pour qui la validité d'une norme ne dépend que de sa conformité procédurale) aux données de dispersion de l'indice $S$ ($\sigma_s = 3,1$). Quel est le coût épistémologique et démocratique de l'ignorance du "sentiment de justice" par le législateur ?

---

### 💡 Indice de méthode

* **Pour la question 1 :** Ne confondez pas le registre de la validité juridique (objectivable par les procédures de vote et de promulgation) et le registre de la phénoménologie morale (subjectif et variable). Utilisez le concept de *légitimité*.
* **Pour la question 2 :** Raisonnez en termes de compromis (*trade-off*). Si $S$ chute drastiquement pour une frange importante de la population ($\sigma_s$ élevé), le coût de transaction et de contrôle de l'application de la loi augmente, annulant les gains d'efficacité formelle.
* **Pour la question 3 :** Définissez d'abord rigoureusement le positivisme kelsénien (séparation absolue entre le *Droit* et la *Morale*). Analysez ensuite si un système juridique peut pérennelement s'affranchir du consentement tacite des gouvernés sans basculer dans la simple contrainte physique.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse conceptuelle de la corrélation entre légalité et sentiment de justice
* **Définitions :** La légalité relève de l'ordre normatif positif : elle désigne l'conformité d'un acte ou d'une règle aux textes en vigueur dans un État de droit donné. Le sentiment de justice ($S$), quant à lui, renvoie à une intuition morale, un jugement de valeur axiologique porté par les individus sur la répartition des charges et des avantages sociaux.
* **Interprétation statistique :** Un coefficient de corrélation $r = 0,42$ signifie qu'il existe une association statistique positive entre les deux variables, mais que cette association est modérée. Mathématiquement, le coefficient de détermination $r^2 \approx 0,176$ indique que seulement 17,6 % de la variance du sentiment de justice s'explique par la seule légalité formelle de la loi. 
* **Conclusion philosophique :** Cela prouve empiriquement que la stricte légalité ne garantit pas la légitimité. Une loi peut être parfaitement légale (adoptée selon les règles constitutionnelles, $L = 8,5$) tout en étant perçue comme inique par une partie de la population, invalidant l'idée d'une équivalence immédiate entre le Juste et le Légal.

#### 2. Étude de cas et logique formelle de l'acceptabilité sociale
* **Modélisation :** Soit la fonction d'acceptabilité $A(L, S) = \alpha L + \beta S$. Si l'État fixe $\beta \approx 0$ en considérant que seul compte le décret normatif ($L$), alors $A \approx \alpha L$. 
* **Démonstration par l'absurde :** Supposons que l'on puisse maximiser durablement l'ordre social par la seule augmentation de $L$, indépendamment de la dispersion du sentiment de justice ($\sigma_s = 3,1$). Or, les données montrent une forte polarisation (les extrêmes de revenus ressentent une injustice prononcée). Si l'écart-type $\sigma_s$ est élevé, cela signifie que $S$ prend des valeurs locales extrêmement basses pour une minorité critique ou des groupes sociaux importants. 
* Si le coût de la contestation ou de la désobéissance civile est fonction inverse de $S$ (plus $S$ est bas, plus la contestation est forte), alors la mise en application de la loi génère des coûts de transaction, de police et de contentieux qui surpassent les bénéfices escomptés. Par conséquent, l'hypothèse selon laquelle on peut faire abstraction du sentiment de justice est contredite par la réalité systémique : l'État s'expose à une crise de légitimité, menaçant la stabilité de la norme elle-même.

#### 3. Démonstration critique : Positivisme juridique vs Sentiment de justice
* **Thèse positiviste (Hans Kelsen) :** Pour le positivisme juridique, une norme est valide si et seulement si elle a été édictée conformément à la procédure fixée par la norme supérieure (la "Grundnorm" ou norme fondamentale). La science juridique doit être neutre et exclure tout jugement de valeur moral (le sentiment de justice est jugé "irrationnel" ou purement subjectif).
* **Confrontation aux données :** La persistance d'un $\sigma_s = 3,1$ aux extrêmes montre que la neutralité positiviste, si elle est tenable sur un plan purement formel, se heurte à une limite sociologique et politique majeure. Lorsque l'écart entre la légalité et le sentiment de justice devient béant, le droit perd son effectivité sociale. C'est précisément le cœur de la **formule de Radbruch** : *« La positivité du droit, assurée par la certitude, doit prévaloir même lorsque son contenu est injuste et inopportun, à moins que le conflit entre la loi positive et la justice n'atteigne une mesure tellement insupportable que la loi, en tant que "droit injuste", doive céder le pas à la justice »*.
* **Bilan épistémologique :** Ignorer le sentiment de justice présente un double coût. 
  1. *Épistémologique* : une science politique qui évacue la subjectivité normative des acteurs rate l'intelligibilité des dynamiques de révolte ou d'adhésion.
  2. *Démocratique* : un système qui dissocie totalement la loi de la justice risque de transformer l'État de droit en un simple légalisme autoritaire, ruinant le contrat social fondé sur la volonté générale et l'équité.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
