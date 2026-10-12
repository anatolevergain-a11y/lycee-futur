---
title: "Exercice 2 : Rôle et limites de la puissance publique"
description: "Application pratique du chapitre La Justice et l'État"
---

### 🌐 Contexte & Données scientifiques

Dans les sociétés démocratiques contemporaines, l'action de la puissance publique se trouve fréquemment confrontée à un arbitrage complexe entre la recherche de l'efficacité socio-économique, la maximisation du bien-être collectif et le respect des libertés individuelles. 

Considérons un modèle théorique simplifié inspiré de l'économie publique et de la philosophie politique (notamment les travaux de John Rawls et de l'analyse coût-avantage). Soit $N$ la taille d'une population et $Gér$ le volume des dépenses publiques investies dans un service d'intérêt général (par exemple, la santé ou la sécurité sanitaire). 

L'utilité sociale collective $W$ (mesurée selon une fonction de bien-être) est modélisée par la fonction suivante :

$$W(G) = A \cdot G^{\alpha} - C(G)$$

Où :
*   $A > 0$ représente le coefficient d'efficacité institutionnelle de l'État.
*   $\alpha \in ]0, 1[$ traduit la loi des rendements décroissants de la dépense publique ($\alpha \approx 0,4$ selon les études empiriques sur l'élasticité des services publics).
*   $C(G)$ représente la fonction de coût global, incluant non seulement le coût financier direct (prélèvements obligatoires / fiscalité), mais également un coût induit par la contrainte étatique (mesure des restrictions des libertés individuelles ou des effets d'éviction économique), modélisé par $C(G) = c \cdot G + \beta G^2$, avec $c, \beta > 0$.

Cependant, l'évaluation empirique de $W(G)$ souffre d'incertitudes de mesure considérables : l'estimation de la valeur monétaire du bien-être subjectif ou de la sécurité est sujette à des biais cognitifs et méthodologiques. De plus, maximiser $W(G)$ de manière technocratique comporte le risque d'un **paternalisme étatique** attentatoire à l'autonomie du sujet, questionnant ainsi les limites légitimes de la souveraineté de l'État.

---

### ❓ Énoncé

1. **Formalisation et Analyse marginale :** Calculez la condition du premier ordre (dérivée première) permettant de déterminer le niveau optimal de dépenses publiques $G^*$ qui maximise le bien-être collectif $W(G)$, dans le cas particulier où $A = 100$, $\alpha = 0,5$, $c = 2$ et $\beta = 0,1$.
2. **Étude critique du modèle :** Le modèle mathématique suppose que l'État dispose d'une information parfaite et d'une rationalité absolue pour déterminer $G^*$. En vous appuyant sur la distinction philosophique entre *légalité* et *légitimité*, discutez des limites épistémologiques et politiques de cette approche technocratique de la justice.
3. **Le dilemme de l'arbitrage (Justice distributive vs Liberté) :** Si l'augmentation de $G$ au-delà d'un seuil $G_{seuil}$ réduit l'indice de liberté fondamentale $L(G) = L_0 - kG$ (avec $k > 0$), formalisez le conflit éthique entre l'utilitarisme d'État (maximisation de $W$) et le kantisme (principe d'autonomie). Comment la théorie de la justice de John Rawls (notamment le *principe de différence*) permet-elle de trancher ou non cette tension ?

---

### 💡 Indice de méthode

*   **Question 1 :** Pour trouver un maximum ou un minimum d'une fonction dérivable, rappelez-vous qu'il faut annuler sa dérivée première ($W'(G) = 0$). Veillez à bien vérifier le signe de la dérivée seconde pour attester qu'il s'agit bien d'un maximum.
*   **Question 2 :** Ne confondez pas l'efficacité (mesurable par des outils quantitatifs) et la justice (valeur normative). Mobilisez la notion de *rationalité limitée* (Herbert Simon) appliquée à l'action publique.
*   **Question 3 :** Définissez rigoureusement les concepts avant de les opposer. Pour Rawls, les libertés de base ont une priorité lexicographique : elles ne peuvent être compromises pour de simples gains socio-économiques globaux.

---

### 📋 Correction détaillée pas à pas

#### 1. Formalisation et Analyse marginale
La fonction de bien-être est définie par :
$$W(G) = 100 \cdot G^{0,5} - (2G + 0,1G^2)$$

Pour trouver le niveau optimal $G^*$, calculons la dérivée première de $W$ par rapport à $G$ (l'utilité marginale nette) :
$$W'(G) = 100 \cdot (0,5 \cdot G^{-0,5}) - (2 + 0,2G)$$
$$W'(G) = \frac{50}{\sqrt{G}} - 2 - 0,2G$$

À l'optimum, l'utilité marginale s'annule ($W'(G) = 0$) :
$$\frac{50}{\sqrt{G}} = 2 + 0,2G$$

*Résolution par approximation ou substitution :*
Testons une valeur intuitive, par exemple $G = 25$ :
*   Membre de gauche : $\frac{50}{\sqrt{25}} = \frac{50}{5} = 10$
*   Membre de droite : $2 + 0,2(25) = 2 + 5 = 7$ (Trop faible)

Testons $G = 100$ :
*   Membre de gauche : $\frac{50}{\sqrt{100}} = \frac{50}{10} = 5$
*   Membre de droite : $2 + 0,2(100) = 2 + 20 = 22$ (Trop élevé)

Par convergence numérique, le point d'équilibre se situe pour $G^* \approx 40$ (car $\frac{50}{\sqrt{40}} \approx \frac{50}{6,32} \approx 7,9$ et $2 + 0,2(40) = 10$). 
*Vérification de la concavité (dérivée seconde) :* 
$$W''(G) = 50 \cdot (-0,5) G^{-1,5} - 0,2 = -25 G^{-1,5} - 0,2 < 0$$
La fonction est strictement concave, il s'agit bien d'un maximum global unique pour les valeurs positives de $G$.

#### 2. Étude critique du modèle
L'utilisation d'une fonction de bien-être $W(G)$ présuppose une vision technocratique et quantitative de la puissance publique. Or, la **légalité** (le respect des procédures formelles et des lois en vigueur) ne se confond pas avec la **légitimité** (l'adhésion morale et politique des citoyens aux décisions). 

Les limites de ce modèle sont doubles :
1.  **Épistémologiques :** L'État souffre d'une *rationalité limitée* (concept forgé par Herbert Simon). Il est empiriquement impossible deagréger les préférences individuelles de manière parfaite sans biais (comme le démontre le théorème d'impossibilité d'Arrow). Les coûts de transaction et l'incertitude des données chiffrées (comment mesurer objectivement le « bien-être » ?) rendent l'optimisation mathématique illusoire.
2.  **Politiques :** Réduire la justice à un calcul coût-bénéfice risque de transformer le citoyen en simple usager ou "variable d'ajustement" statistique, niant sa liberté de choix et sa subjectivité.

#### 3. Le dilemme de l'arbitrage (Justice distributive vs Liberté)
Si l'accroissement de la puissance publique entraîne une diminution de la liberté fondamentale $L(G) = L_0 - kG$, le conflit philosophique devient irréductible entre deux grandes traditions :

*   **L'utilitarisme** (Bentham, Mill) tendrait à accepter une réduction marginale de la liberté si le gain global sur $W(G)$ bénéficie au plus grand nombre (maximisation du bonheur agrégé).
*   **Le kantisme** et la **thorie de la justice de John Rawls** s'y opposent radicalement. Rawls formule le *premier principe de justice* (priorité des libertés égales) ainsi que la règle de la **priorité lexicographique** : les libertés de base ne peuvent être restreintes que pour le sake de la liberté elle-même, jamais pour des considérations d'efficacité économique ou de bien-être matériel global. 

Ainsi, même si un État démontrait scientifiquement qu'un investissement massif ($G > G_{seuil}$) augmentait le bien-être moyen de la population, cet acte serait jugé *injuste* au sens rawlsien s'il porte atteinte à l'autonomie et aux droits fondamentaux inaliénables des individus minoritaires ou isolés. La puissance publique trouve donc sa limite indépassable non dans son inefficacité technique, mais dans le respect inconditionnel de la dignité humaine.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
