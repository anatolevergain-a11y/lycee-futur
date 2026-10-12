---
title: "Exercice 1 : Politiques budgétaires et monétaires au sein de l'Union Européenne"
description: "Application pratique du chapitre Action publique et politiques économiques"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'Union Économique et Monétaire (UEM), la zone euro se caractérise par une architecture institutionnelle originale : une politique monétaire unique confiée à un organisme supranational indépendant (la Banque Centrale Européenne - BCE) et des politiques budgétaires nationales décentralisées, bien que soumises à des règles de coordination (Pacte de stabilité et de croissance, réformé par le nouveau cadre de gouvernance économique entré en vigueur en 2024).

Face au ralentissement de la croissance économique et à la volatilité de l'inflation, la question du dosage des politiques économiques (*policy mix*) redevient centrale. 

Soit une économie fictive mais représentative de la zone euro, caractérisée par les données macroéconomiques suivantes (exprimées en milliards d'euros ou en pourcentage) :
* PIB potentiel ($\bar{Y}$) : $1000$ milliards d'euros.
* PIB effectif ($Y$) : $960$ milliards d'euros.
* Multiplicateur budgétaire keynésien de court terme ($k$) : estimé à $0{,}8$.
* Taux d'intérêt directeur nominal fixé par la BCE : $r = 3{,}5\%$.
* Taux d'inflation anticipé ($\pi^e$) : $2{,}0\%$.

Par ailleurs, le solde public effectif de cette économie est actuellement de $-4{,}5\%$ du PIB, dépassant le seuil conventionnel de $-3\%$ du Traité de Maastricht, tandis que la dette publique s'établit à $102\%$ du PIB.

---

### ❓ Énoncé

1. **Calcul et diagnostic :** À l'aide du PIB effectif et du PIB potentiel, calculez l'écart de production (*output gap*) en valeur absolue et en pourcentage. Qualifiez la situation macroéconomique de cette économie et déduisez-en la nature (expansionniste ou restrictive) de l'orientation souhaitable de la politique conjoncturelle.
2. **Mécanisme et simulation budgétaire :** Pour combler cet écart de production uniquement par la politique budgétaire, calculez le montant de variation des dépenses publiques ($\Delta G$) nécessaire. Discutez de la faisabilité de cette politique au regard des contraintes institutionnelles européennes actuelles (règles relatives aux déficits et à la dette publique).
3. **Articulation et contraintes du *policy mix* :** Expliquez par quel mécanisme de transmission la politique monétaire de la BCE interagit avec cette situation. En mobilisant la notion de *mix* de politiques économiques, mettez en évidence le risque potentiel de contracycliqueté ou de contradiction entre la décision budgétaire nationale et la décision monétaire européenne.
4. **Esprit critique et limites des modèles :** Les multiplicateurs budgétaires sont souvent estimés ex-post avec une forte incertitude et peuvent varier selon la phase du cycle économique. En quoi cette incertitude complexifie-t-elle la décision publique ? Argumentez sur les limites de l'usage exclusif de modèles macroéconomiques standardisés pour piloter l'action publique.

---

### 💡 Indice de méthode

* **Question 1 :** L'écart de production (*output gap*) se calcule par la formule $\frac{Y - \bar{Y}}{\bar{Y}} \times 100$. Un écart négatif caractérise une récession ou une sous-utilisation des capacités productives.
* **Question 2 :** Utilisez la formule du multiplicateur budgétaire : $\Delta Y = k \times \Delta G$. Vous devez isoler $\Delta G$ sachant que $\Delta Y$ correspond à l'écart en valeur absolue entre le PIB potentiel et le PIB effectif. Pour la contrainte européenne, pensez à convertir le montant de $\Delta G$ en pourcentage du PIB pour le comparer au critère de déficit.
* **Question 3 :** Intégrez la règle de Taylor implicite ou le canal du taux d'intérêt : une baisse du PIB réduit l'inflation, ce qui peut pousser la BCE à baisser ses taux, mais un déficit excessif peut accroître la prime de risque sur les obligations souveraines.
* **Question 4 :** Raisonnez sur les retards de mise en œuvre (*time lags*) et l'hypothèse d'autonomie des agents économiques (ex. : équivalence ricardienne).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul et diagnostic de l'écart de production
* **Calcul de l'écart de production (*output gap*) :**
  $$\text{Output Gap} = \frac{Y - \bar{Y}}{\bar{Y}} = \frac{960 - 1000}{1000} = \frac{-40}{1000} = -0{,}04 \text{ soit } -4\%$$
* **Diagnostic :** L'économie présente un écart de production négatif de $4\%$. Le PIB effectif est inférieur au PIB potentiel : l'économie est en situation de sous-emploi des facteurs de production (capacités de production inexploitées, chômage conjoncturel supérieur au taux structurel).
* **Orientation :** Pour résorber cet écart déflationniste ou récessionniste, la théorie économique préconise une **politique conjoncturelle de relance** (expansionniste) afin de stimuler la demande globale.

#### 2. Simulation budgétaire et contraintes institutionnelles
* **Calcul de la variation des dépenses publiques ($\Delta G$) :**
  L'objectif est d'accroître le PIB de $40$ milliards d'euros ($\Delta Y = 1000 - 960 = 40$).
  En utilisant le multiplicateur $k = 0{,}8$ :
  $$\Delta Y = k \times \Delta G \iff 40 = 0{,}8 \times \Delta G \iff \Delta G = \frac{40}{0{,}8} = 50 \text{ milliards d'euros}$$
  Il faut donc augmenter les dépenses publiques de $50$ milliards d'euros.
* **Analyse de la faisabilité institutionnelle :**
  Exprimons cette variation en pourcentage du PIB : $\frac{50}{1000} = 5\%$.
  Si cette relance est financée par l'emprunt (sans hausse immédiate des prélèvements obligatoires), le déficit public va s'accroître. Il était déjà de $-4\%$, il s'aggraverait théoriquement (en première approximation, sans compter les retours fiscaux induits par l'effet multiplicateur, dits "stabilisateurs automatiques"). 
  Or, les règles du Pacte de stabilité et de croissance encadrent le déficit nominal à $-3\%$ du PIB et la dette à $60\%$. Une telle politique se heurte donc directement aux contraintes supranationales européennes, illustrant la difficulté des politiques budgétaires nationales discrétionnaires au sein de l'UEM.

#### 3. Articulation du *policy mix* et contradictions potentielles
* **Le *policy mix* dans la zone euro** désigne la combinaison entre la politique monétaire unique (conduite par la BCE) et les politiques budgétaires nationales.
* **Mécanismes :** Face à un ralentissement économique, la baisse de la demande devrait théoriquement inciter la BCE à mener une politique monétaire expansionniste (baisse des taux d'intérêt directeurs) pour stimuler l'investissement privé et la consommation à crédit. 
* **Risque de contracycliqueté :** Si les États membres doivent simultanément mener des politiques de rigueur ou d'assainissement budgétaire pour respecter les règles européennes de réduction de la dette, la politique budgétaire devient restrictive alors même que l'économie a besoin d'une relance. Cela crée un **défaut de coordination** ou un *policy mix* inadapté, où la politique monétaire doit porter seule le poids du soutien à l'activité, ce qui peut s'avérer insuffisant (notamment en période de trappe à liquidité). De surcroît, un endettement public excessif peut induire une hausse des taux souverains, compliquant la tâche de la BCE.

#### 4. Esprit critique et limites des modèles macroéconomiques
* **L'incertitude empirique des multiplicateurs :** Le multiplicateur keynésien ($k = 0{,}8$ dans notre modèle) n'est pas une constante universelle. Il varie selon l'ouverture de l'économie, le niveau d'endettement des agents, ou la phase du cycle (il est souvent plus élevé en période de récession qu'en période de croissance).
* **Les limites de la prévision et les délais (*lags*) :** L'action publique souffre de retards de reconnaissance, de décision et d'exécution. Lorsque la mesure budgétaire produit ses effets, la conjoncture a pu changer, risquant de rendre la politique pro-cyclique au lieu d'être contre-cyclique.
* **Les réactions comportementales (ex. : équivalence ricardienne) :** Les modèles standard supposent des réactions stables des agents. Or, une hausse de la dette publique aujourd'hui peut inciter les ménages à épargner davantage en anticipation d'une hausse future des impôts, affaiblissant ainsi la valeur réelle du multiplicateur. 
* *Conclusion scientifique :* L'action publique ne relève pas d'une science exacte mais d'un arbitrage permanent sous incertitude, où les décideurs doivent composer avec des compromis complexes entre stabilité macroéconomique à court terme et soutenabilité des finances publiques à long terme.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
