---
title: "Exercice 3 : Échantillonnage et intervalles de confiance"
description: "Application pratique du chapitre Lois de probabilité et Loi Binomiale"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du contrôle de la qualité de la production de composants électroniques destinés à l'industrie spatiale, un équipementier produit des microcontrôleurs en grande quantité. La tolérance aux pannes est extrêmement stricte. D'après les données historiques de l'usine, la proportion $p$ de composants défectueux sur l'ensemble de la production est supposée constante, mais inconnue. 

Pour estimer cette proportion sans tester l'intégralité de la production — ce qui serait destructif et économiquement non viable —, le service qualité prélève un échantillon aléatoire de $n$ composants. 

Soit $X$ la variable aléatoire représentant le nombre de composants défectueux dans cet échantillon. Le processus de fabrication garantit que chaque composant est tiré de manière indépendante des autres, et la production est suffisamment vaste pour assimiler ce prélèvement à un tirage avec remise. Ainsi, $X$ suit une **loi binomiale** de paramètres $n$ et $p$.

Le cahier des charges impose de déterminer un intervalle de confiance au niveau de $95\ \%$ pour la proportion $p$ inconnue, tout en évaluant la pertinence de la taille de l'échantillon choisi face aux contraintes métrologiques et financières.

---

### ❓ Énoncé

1. **Modélisation et conditions de validité :** 
   On prélève un échantillon de taille $n = 400$. Rappeler les conditions mathématiques (portant sur $n$ et $p$) permettant d'approcher la loi de proportion par une loi normale, et vérifier si ces conditions sont requises pour la mise en place d'un intervalle de confiance asymptotique.

2. **Calcul de l'intervalle de confiance :** 
   Sur l'échantillon de $n = 400$ composants, le service qualité relève $16$ composants défectueux. Déterminer la fréquence observée $f$ de pièces défectueuses, puis calculer l'intervalle de confiance au niveau de confiance de $95\ \%$ pour la proportion $p$.

3. **Analyse critique et compromis coût/précision :** 
   L'amplitude de l'intervalle de confiance est directement liée à la taille de l'échantillon $n$. Le directeur de production souhaite réduire cette amplitude à un maximum de $\pm 1\,\%$ ($0{,}01$) tout en conservant le même niveau de confiance de $95\\%$, en se basant sur la fréquence observée $f$. 
   Déterminer la taille minimale d'échantillon $n$ nécessaire pour atteindre cet objectif et discuter des limites pratiques (coût, temps de test) de cette exigence.

---

### 💡 Indice de méthode

* **Question 1 :** Pour un échantillon de taille $n$ et une proportion $p$, l'approximation par une loi normale nécessite usuellement que $n \ge 30$, $np \ge 5$ et $n(1-p)Remarque : $p$ étant inconnu, on majore souvent la variance en utilisant $p(1-p) \le \frac{1}{4}$ ou on approxime par $f(1-f)$.
* **Question 2 :** La fréquence observée est $f = \frac{X}{n}$. L'intervalle de confiance asymptotique au niveau $95\ \%$ (pour lequel le seuil de risque $\alpha = 0{,}05$ correspond à $u_{0{,}975} \approx 1{,}96$) est donné par :
  $$I_{95} = \left[ f - 1{,}96\sqrt{\frac{f(1-f)}{n}} ; f + 1{,}96\sqrt{\frac{f(1-f)}{n}} \right]$$
* **Question 3 :** L'amplitude maximale de l'intervalle est liée au rayon $r = 1{,}96\sqrt{\frac{f(1-f)}{n}}$. Posez l'inéquation $1{,}96\sqrt{\frac{f(1-f)}{n}} \le 0{,}01$ pour isoler $n$.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation et conditions de validité

La variable aléatoire $X$ comptant le nombre de composants défectueux suit la loi binomiale $\mathcal{B}(n, p)$. 
Pour estimer la proportion $p$ à l'aide d'un intervalle de confiance asymptotique, on utilise le théorème de Moivre-Laplace. Les conditions d'application usuelles pour un échantillon de taille $n$ et une proportion théorique $p$ sont :
* $n \ge 30$
* $np \ge 5$
* $n(1-p) \ge 5$

*Analyse critique :* Dans une situation réelle, $p$ est précisément l'inconnue que l'on cherche à estimer. Par conséquent, il est impossible de vérifier $np \ge 5$ et $n(1-p) \ge 5$ de manière absolue avant l'expérience. On substitue donc $p$ par la fréquence observée $f$ dans les conditions de validité a posteriori, ce qui constitue une approximation méthodologique qu'il convient de garder à l'esprit.

#### 2. Calcul de l'intervalle de confiance

* **Fréquence observée :**
  Pour $n = 400$ et un nombre de cas favorables (défectueux) $x = 16$, la fréquence observée est :
  $$f = \frac{16}{400} = 0{,}04$$
  Soit $4\ \%$ de pièces défectueuses dans l'échantillon.

* **Vérification des conditions a posteriori :**
  - $n = 400 \ge 30$ (Vérifié)
  - $nf = 400 \times 0{,}04 = 16 \ge 5$ (Vérifié)
  - $n(1-f) = 400 \times 0{,}96 = 384 \ge 5$ (Vérifié)
  L'utilisation de l'intervalle asymptotique est donc mathématiquement valide.

* **Calcul de l'intervalle de confiance à $95\ \%$ :**
  Le rayon $r$ de l'intervalle de confiance au seuil de $95\ \%$ ($z = 1{,}96$) est :
  $$r = 1{,}96 \sqrt{\frac{f(1-f)}{n}} = 1{,}96 \sqrt{\frac{0{,}04 \times 0{,}96}{400}}$$
  $$r = 1{,}96 \sqrt{\frac{0{,}0384}{400}} = 1{,}96 \sqrt{0{,}000096} = 1{,}96 \times 0{,}0097979 \approx 0{,}0192$$

  L'intervalle de confiance est donc :
  $$I_{95} = [0{,}04 - 0{,}0192 ; 0{,}04 + 0{,}0192] = [0{,}0208 ; 0{,}0592]$$

  *Conclusion scientifique :* Avec un niveau de confiance de $95\\%$, la proportion réelle $p$ de pièces défectueuses dans toute la production se situe entre $2{,}08\ \%$ et $5{,}92\\%$.

#### 3. Analyse critique et compromis coût/précision

Le directeur souhaite une marge d'erreur (rayon de l'intervalle) ne dépassant pas $0{,}01$ (soit $1\,\%$) au niveau de confiance de $95\\%$. 
On cherche $n$ tel que :
$$1{,}96 \sqrt{\frac{f(1-f)}{n}} \le 0{,}01$$

En remplaçant $f$ par $0{,}04$ :
$$1{,}96 \sqrt{\frac{0{,}0384}{n}} \le 0{,}01$$
$$\sqrt{\frac{0{,}0384}{n}} \le \frac{0{,}01}{1{,}96}$$

En élevant au carré les deux membres (positifs) :
$$\frac{0{,}0384}{n} \le \left(\frac{0{,}01}{1{,}96}\right)^2$$
$$\frac{0{,}0384}{n} \le \frac{0{,}0001}{3{,}8416}$$

En isolant $n$ :
$$n \ge \frac{0{,}0384 \times 3{,}8416}{0{,}0001}$$
$$n \ge \frac{0{,}14751744}{0{,}0001}$$
$$n \ge 1475{,}1744$$

Puisque $n$ représente un nombre entier de composants, il faut arrondir à l'entier supérieur : **$n = 1476$**.

* *Limites et esprit critique :* Pour diviser l'incertitude par deux (passer d'un rayon de $\approx 1{,}92\ \%$ à $1\ \%$), il est nécessaire de tester **1476 composants** au lieu de **400**, soit une augmentation de la taille de l'échantillon d'environ $270\\%$. 
Dans les industries de haute technologie, les tests peuvent être destructifs, chronophages ou onéreux. Ce calcul met en évidence un compromis fondamental en ingénierie : **le coût marginal de la précision statistique croît de manière quadratique** face au gain de précision recherché. L'optimisation industrielle impose donc de trouver un équilibre entre la rigueur statistique exigée et la faisabilité économique et matérielle des prélèvements.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
