---
title: "Exercice 1 : Être libre, est-ce faire tout ce qui nous plaît ?"
description: "Application pratique du chapitre La Liberté et le Devoir"
---

### 🌐 Contexte & Données scientifiques

En philosophie politique et morale, la question de la liberté se heurte immédiatement à la structure des interactions humaines et à la finitude des ressources. Contrairement à l'intuition spontanée qui assimile la liberté à l'absence totale de contraintes (le libre arbitre absolu ou le "faire tout ce qui nous plaît"), l'analyse scientifique des sociétés et la réflexion philosophique mettent en évidence des compromis structurels.

Considérons un modèle simplifié d'interaction sociale inspiré de la théorie des jeux et de la philosophie politique (Thomas Hobbes, Emmanuel Kant, John Stuart Mill). Soit $N$ le nombre d'individus dans une communauté, et $L_i cantonné$ l'espace d'exercice de la liberté pour l'individu $i$. 

Imaginons une métrique mesurant l'indice de satisfaction immédiate ou hédonique ($\text{IS}$) par rapport à l'assouvissement des désirs individuels, évaluée sur une échelle normalisée de $0$ à $100$. Soit $D$ l'ensemble des désirs non régulés et $R$ l'ensemble des règles coercitives (lois, devoirs moraux).

Les données sociologiques et comportementales (enquêtes de victimation, études sur la congestion urbaine ou l'utilisation des biens communs) montrent que lorsque l'indice d'action sans contrainte ($\text{IA}$) tend vers son maximum ($100 \text{ \%}$), l'indice de sécurité et de prévisibilité collective ($\text{SP}$) chute de manière non linéaire. 

Soit la fonction de coût social $\mathcal{C}$ liée à l'absence de régulation (loi du plus fort, incertitude généralisée) :
$$\mathcal{C}(x) = k \cdot x^2$$
où $x$ représente le taux de liberté négative absolue ($\text{exprimé en } \text{\%}$) et $k$ une constante positive de friction sociale. Inversement, le bénéfice individuel immédiat $B(x)$ obéit à une loi de rendement marginal décroissant :
$$B(x) = B_{\max} \cdot (1 - e^{-\lambda x})$$

La tension entre la volonté individuelle ("faire ce qui me plaît") et la condition de possibilité de la vie en société (le devoir, la loi) pose la question de l'optimisation rationnelle de la liberté par la contrainte légitime.

---

### ❓ Énoncé

1. **Analyse conceptuelle :** En vous appuyant sur la distinction entre le désir spontané et la volonté rationnelle, définissez les limites logiques de l'équation : $\text{Liberté} = \text{Action illimitée des désirs}$.
2. **Étude de modèle :** À l'aide de la fonction de bénéfice $B(x) = B_{\max} \cdot (1 - e^{-\lambda x})$ où $B_{\max} = 100 \text{ points}$ et $\lambda = 0{,}05$, calculez le gain marginal de satisfaction pour un passage de $x = 10 \text{ \%}$ à $x = 20 \text{ \%}$, puis de $x = 80 \text{ \%}$ à $x = 90 \text{ \%}$. Que révèle ce calcul quant à l'hypothèse selon laquelle "plus on fait ce qui nous plaît, plus on est libre" ?
3. **Dilemme et compromis :** Si l'on introduit la fonction de coût social $\mathcal{C}(x) = 0{,}01 \cdot x^2$, déterminez mathématiquement ou par approximations successives le point de compromis optimal maximisant l'utilité nette $U(x) = B(x) - \mathcal{C}(x)$ pour $x \in [0, 100]$.
4. **Dissertation critique :** Dans quelle mesure le passage d'une liberté d'indifférence (faire tout ce qui plaît) à une liberté morale ou politique (obéir à la loi qu'on s'est prescrite) constitue-t-il, selon la formule de Rousseau, une "liberté civile" supérieure ?

---

### 💡 Indice de méthode

* **Pour la question 1 :** Ne cédez pas à un jugement moral hâtif. Mobilisez la logique formelle : si l'action de l'individu $A$ (fondée sur ses désirs) entrave l'action de l'individu $B$, il y a contradiction logique dans l'universalisation de ce principe.
* **Pour la question 2 :** Calculez $B(20) - B(10)$ puis $B(90) - B(80)$. Rappelez-vous que $e^{-0{,}5} \approx 0{,}606$ et $e^{-1} \approx 0{,}368$ (ou utilisez une estimation rigoureuse des accroissements). Analysez la notion de rendement marginal décroissant.
* **Pour la question 3 :** Étudiez les variations de la fonction d'utilité nette $U(x)$. Un modèle scientifique montre que la liberté politique n'est pas l'annulation de toute contrainte, mais son agencement optimal pour préserver l'agent lui-même.
* **Pour la question 4 :** Structurez votre pensée en distinguant la liberté comme *puissance* (Hobbes) et la liberté comme *autonomie* (Kant, Rousseau).

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse conceptuelle des limites logiques
Si l'on définit la liberté comme le fait de faire tout ce qui nous plaît, on pose implicitement que le désir empirique est la boussole exclusive de l'action. Or, sur le plan logique, les désirs humains sont potentiellement infinis et souvent antagonistes. Si l'individu $A$ désire s'approprier un bien détenu par l'individu $B$, et que la liberté se résume à l'exécution immédiate de ce désir, la seule limite rencontrée est physique (le rapport de force). 
* **Limite logique :** L'exercice absolu de la liberté des uns détruit par définition la liberté des autres. Une liberté qui s'annule elle-même dans l'affrontement généralisé (l'"état de nature" hobbesien décrit comme une "guerre de tous contre tous") est un concept contradictoire. Faire tout ce qui nous plaît conduit logiquement à la tyrannie du plus fort, ce qui supprime la liberté de la majorité.

#### 2. Étude du modèle mathématique des rendements marginaux
Calculons les valeurs de $B(x) = 100 \cdot (1 - e^{-0{,}05 x})$ :
* Pour $x_1 = 10 \text{ \%}$ : 
  $$B(10) = 100 \cdot (1 - e^{-0{,}5}) \approx 100 \cdot (1 - 0{,}6065) = 100 \cdot 0{,}3935 = 39{,}35 \text{ points}$$
* Pour $x_2 = 20 \text{ \%}$ : 
  $$B(20) = 100 \cdot (1 - e^{-1}) \approx 100 \cdot (1 - 0{,}3679) = 100 \cdot 0{,}6321 = 63{,}21 \text{ points}$$
  * Gain marginal pour la première tranche : $\Delta B_1 = 63{,}21 - 39{,}35 = 23{,}86 \text{ points}$.

* Pour $x_3 = 80 \text{ \%}$ : 
  $$B(80) = 100 \cdot (1 - e^{-4}) \approx 100 \cdot (1 - 0{,}0183) = 98{,}17 \text{ points}$$
* Pour $x_4 = 90 \text{ \%}$ : 
  $$B(90) = 100 \cdot (1 - e^{-4{,}5}) \approx 100 \cdot (1 - 0{,}0111) = 98{,}89 \text{ points}$$
  * Gain marginal pour la seconde tranche : $\Delta B_2 = 98{,}89 - 98{,}17 = 0{,}72 \text{ point}$.

* **Analyse critique :** Le modèle met en évidence un **rendement marginal décroissant**. Plus l'espace de la liberté non régulée s'élargit, moins chaque pourcentage supplémentaire apporte de satisfaction réelle, tandis que les frictions augmentent de manière exponentielle.

#### 3. Optimisation de l'utilité nette (Dilemme et compromis)
Soit la fonction d'utilité nette :
$$U(x) = B(x) - \mathcal{C}(x) = 100 \cdot (1 - e^{-0{,}05 x}) - 0{,}01 \cdot x^2$$
Pour trouver le compromis optimal (le point où l'excès de liberté ne détruit pas le corps social par le coût qu'il engendre), cherchons la dérivée de $U(x)$ par rapport à $x$ :
$$U'(x) = B'(x) - \mathcal{C}'(x) = 100 \cdot (0{,}05 \cdot e^{-0{,}05 x}) - 2 \cdot 0{,}01 \cdot x$$
$$U'(x) = 5 e^{-0{,}05 x} - 0{,}02 x$$
Cherchons l'annulation de la dérivée ($U'(x) = 0$) pour trouver l'optimum :
$$5 e^{-0{,}05 x} = 0{,}02 x \implies e^{-0{,}05 x} = \frac{0{,}02 x}{5} = 0{,}004 x$$
Par approximation numérique :
* Si $x = 40 \text{ \%}$ : $5 \cdot e^{-2} \approx 5 \cdot 0{,}1353 = 0{,}676$, et $0{,}02 \cdot 40 = 0{,}8$. ($U'(40) < 0$)
* Si $x = 30 \text{ \%}$ : $5 \cdot e^{-1{,}5} \approx 5 \cdot 0{,}223 = 1{,}115$, et $0{,}02 \cdot 30 = 0{,}6$. ($U'(40) > 0$)
* Autour de $x \approx 35 \text{ \%}$, la dérivée s'annule.

* **Conclusion scientifique du modèle :** L'optimalité de la liberté humaine au sein d'une collectivité ne se situe pas à $100 \text{ \%}$ (faire tout ce qui plaît), mais en un point d'équilibre optimal (ici environ $35 \text{ \%}$ d'espace discrétionnaire non régulé), au-delà duquel les coûts sociaux (insécurité, conflits, destruction des biens communs) surpassent les bénéfices individuels.

#### 4. Synthèse philosophique (Dissertation)
Le modèle mathématique confirme l'intuition de Jean-Jacques Rousseau dans *Du Contrat social* : *"L'impulsion du seul appétit est esclavage, et l'obéissance à la loi qu'on s'est prescrite est liberté."* 
* Faire tout ce qui nous plaît relève d'une hétéronomie subie par nos pulsions immédiates. 
* La véritable liberté, dite politique ou morale, suppose l'instauration d'un devoir rationnel (la loi) qui protège l'individu contre l'arbitraire des autres et le sien propre. Par conséquent, renoncer à faire *tout* ce qui nous plaît est la condition sine qua non pour jouir d'une liberté effective, sécurisée et pérenne.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
