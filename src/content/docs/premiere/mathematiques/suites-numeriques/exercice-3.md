---
title: "Exercice 3 : Analyse de modèles démographiques"
description: "Application pratique du chapitre Suites numériques"
---

### 🌐 Contexte & Données scientifiques

L'étude de l'évolution des populations fait appel à la modélisation mathématique pour tenter d'anticiper les dynamiques démographiques. Toutefois, tout modèle repose sur des hypothèses simplificatrices qu'il convient de questionner.

Considérons une réserve naturelle insulaire abritant une espèce protégée. Un comptage rigoureux effectué en 2020 ($n = 0$) établit la population initiale à $u_0 = 1\,200$ individus. 

Pour modéliser l'évolution de cette population, deux hypothèses sont successivement envisagées par les écologues :
1. **Modèle de croissance linéaire (hypothèse simpliste d'un taux d'accroissement constant) :** Chaque année, la réserve accueille un solde net constant de $120$ individus (naissances et immigration moins décès et émigration).
2. **Modèle logistique ou à capacité limite (Verhulst) :** En raison de la raréfaction des ressources (nourriture, espace), le taux de croissance annuel diminue à mesure que la population s'approche d'une capacité d'accueil maximale de l'île, estimée à $K = 6\,000$ individus. 

Soit $u_n$ l'effectif de la population l'année $2020 + n$. Le second modèle est formalisé par la relation de récurrence :
$$u_{n+1} = u_n + 0{,}2 \cdot u_n \left(1 - \frac{u_n}{6\,000}\right)$$

---

### ❓ Énoncé

1. **Modélisation linéaire :** On note $(v_n)$ la suite définie par ce premier modèle, avec $v_0 = 1\,200$ et $v_{n+1} = v_n + 120$. 
   Exprimer $v_n$ en fonction de $n$. En déduire l'effectif de la population prédit par ce modèle pour l'année 2050. Ce modèle présente-t-il une limite écologique crédible sur le long terme ? Justifier.

2. **Étude du modèle non linéaire :** À l'aide de la relation du second modèle, calculer $u_1$ et $u_2$ (on arrondira les résultats à l'entier le plus proche). 

3. **Démonstration par récurrence :** Démontrer par récurrence que pour tout entier naturel $n$, on a : 
   $$0 < u_n \le 6\,000$$

4. **Analyse critique et confrontation des modèles :** 
   À l'aide d'une approche logique ou d'un calcul de la différence $u_{n+1} - u_n$, étudier le sens de variation de la suite $(u_n)$. 
   Discuter de l'intérêt d'utiliser un modèle non linéaire (Verhulst) plutôt qu'un modèle linéaire en biologie des populations, tout en soulignant la difficulté d'estimer précisément des paramètres tels que la capacité d'accueil $K$ en situation réelle.

---

### 💡 Indice de méthode

* **Question 1 :** Reconnaître la nature de la suite $(v_n)$ (arithmétique de raison $r = 120$). Utiliser le cours pour exprimer $v_n$ en fonction de $n$ et $v_0$. Pour l'esprit critique, interrogez-vous sur la ressource infinie induite par une telle suite.
* **Question 2 :** Appliquer simplement la formule de récurrence en remplaçant $u_n$ par $u_0$ puis par $u_1$.
* **Question 3 :** Pour la récurrence, formalisez bien l'hypothèse de récurrence $\mathcal{P}(n) : 0 < u_n \le 6\,000$. Factorisez l'expression de $u_{n+1}$ pour étudier son signe si nécessaire.
* **Question 4 :** Étudier le signe de $1 - \frac{u_n}{6\,000}$ sachant que $0 < u_n \le 6\,000$. Reliez cela à la vitesse de croissance de la population lorsque $u_n$ se rapproche de $6\,000$.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation linéaire
La suite $(v_n)$ est arithmétique de premier terme $v_0 = 1\,200$ et de raison $r = 120$. 
Le cours nous indique que le terme général d'une suite arithmétique s'exprime par :
$$v_n = v_0 + n \cdot r$$
Soit :
$$v_n = 1\,200 + 120n$$

L'année 2050 correspond à $n = 2050 - 2020 = 30$. 
Calculons $v_{30}$ :
$$v_{30} = 1\,200 + 120 \times 30 = 1\,200 + 3\,600 = 4\,800$$
Selon ce modèle, la population atteindra $4\,800$ individus en 2050.

* **Esprit critique et limites :** Ce modèle est mathématiquement simple mais biologiquement irrecevable sur le long terme. Il implique une croissance illimitée (la suite tend vers $+\infty$ lorsque $n$ tend vers $+\infty$), ce qui contredit la réalité biophysique d'un écosystème insulaire aux ressources finies (compétition pour la nourriture, maladies, espace).

---

#### 2. Calcul des premiers termes du modèle logistique
Appliquons la relation $u_{n+1} = u_n + 0{,}2 \cdot u_n \left(1 - \frac{u_n}{6\,000}\right)$ avec $u_0 = 1\,200$ :

* Pour $n = 0$ :
  $$u_1 = 1\,200 + 0{,}2 \times 1\,200 \times \left(1 - \frac{1\,200}{6\,000}\right)$$
  $$u_1 = 1\,200 + 240 \times (1 - 0{,}2) = 1\,200 + 240 \times 0{,}8 = 1\,200 + 192 = 1\,392$$

* Pour $n = 1$ :
  $$u_2 = 1\,392 + 0{,}2 \times 1\,392 \times \left(1 - \frac{1\,392}{6\,000}\right)$$
  $$u_2 = 1\,392 + 278{,}4 \times (1 - 0{,}232) = 1\,392 + 278{,}4 \times 0{,}768 \approx 1\,392 + 213{,}8 = 1\,605{,}8$$
  En arrondissant à l'entier le plus proche, $u_2 \approx 1\,606$ individus.

---

#### 3. Démonstration par récurrence
Soit la propriété $\mathcal{P}(n) : 0 < u_n \le 6\,000$.

* **Initialisation :** Pour $n = 0$, $u_0 = 1\,200$. On a bien $0 < 1\,200 \le 6\,000$. La propriété est vraie au rang $0$.
* **Hérédité :** Supposons qu'il existe un entier $k \ge 0$ tel que $\mathcal{P}(k)$ soit vraie, c'est-à-dire $0 < u_k \le 6\,000$. Montrons que $\mathcal{P}(k+1)$ est vraie, soit $0 < u_{k+1} \le 6\,000$.

  Exprimons $u_{k+1}$ sous une forme factorisée :
  $$u_{k+1} = u_k \left(1 + 0{,}2 \left(1 - \frac{u_k}{6\,000}\right)\right) = u_k \left(1{,}2 - \frac{0{,}2 u_k}{6\,000}\right)$$

  Par hypothèse de récurrence, $u_k > 0$, donc $u_{k+1} > 0$ (le produit de termes strictement positifs est positif).
  De plus, comme $u_k \le 6\,000$ :
  $$\frac{u_k}{6\,000} \le 1 \implies 1 - \frac{u_k}{6\,000} \ge 0$$
  Puisque $u_k >0$, le terme $0{,}2 \cdot u_k \left(1 - \frac{u_k}{6\,000}\right)$ est supérieur ou égal à $0$. 
  Par conséquent :
  $$u_{k+1} = u_k + \text{[terme positif ou nul]} \ge u_k > 0$$
  
  Pour majorer $u_{k+1}$, étudions la fonction $f(x) = x + 0{,}2x\left(1 - \frac{x}{6\,000}\right)$ sur l'intervalle $]0, 6\,000]$. 
  Sa dérivée est $f'(x) = 1{,}2 - \frac{0{,}4x}{6\,000}$. Sur $[0, 6\,000]$, $f'(x) > 0$, donc la fonction $f$ est strictement croissante.
  Comme $u_k \le 6\,000$, on a :
  $$u_{k+1} = f(u_k) \le f(6\,000) = 6\,000 + 0{,}2 \times 6\,000 \times (1 - 1) = 6\,000$$
  
* **Conclusion :** Par le principe de récurrence, la propriété est vraie pour tout entier $n$. On a bien pour tout $n$, $0 < u_n \le 6\,000$.

---

#### 4. Analyse critique et confrontation des modèles
* **Sens de variation :** D'après la relation du modèle, $u_{n+1} - u_n = 0{,}2 \cdot u_n \left(1 - \frac{u_n}{6\,000}\right)$. 
  Comme $0 < u_n \le 6\,000$, on a $\left(1 - \frac{u_n}{6\,000}\right) \ge 0$ et $u_n > 0$. Ainsi, $u_{n+1} - u_n \ge 0$. 
  La suite $(u_n)$ est donc **croissante**.

* **Discussion scientifique :** 
  Le modèle logistique est scientifiquement plus robuste car il intègre une **rétroaction négative** : lorsque la population s'approche de la capacité d'accueil $K = 6\,000$, le terme $\left(1 - \frac{u_n}{6\,000}\right)$ tend vers $0$, ce qui freine naturellement la croissance démographique jusqu'à se stabiliser. 

  Cependant, ce modèle comporte des **limites épistémologiques et pratiques** majeures :
  1. *Incertitude des paramètres :* La capacité d'accueil $K$ n'est pas une constante universelle ; elle varie selon les aléas climatiques, les maladies ou les interventions anthropiques.
  2. *Déterminisme vs Aléa :* Ce modèle est purement déterministe et ne prend pas en compte les variations stochastiques (catastrophes naturelles, variations soudaines du ratio mâles/femelles sur de petits effectifs). 
  
  En conclusion, si le modèle logistique affine la pertinence biologique par rapport au modèle linéaire, il ne constitue qu'une approximation idéalisée d'un système complexe.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
