---
title: "Exercice 1 : Croissance linéaire vs exponentielle"
description: "Application pratique du chapitre Suites numériques"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'analyse prospective de l'exploitation d'une ressource forestière ou de la gestion de la capacité de stockage d'une infrastructure numérique, les ingénieurs et scientifiques étudient l'évolution de grandeurs au cours du temps. On s'intéresse ici à deux stratégies d'expansion ou de production modélisées par des suites numériques, sur une période d'observation de plusieurs années ($n \in \mathbb{N}$).

Soit $n$ le rang de l'année, avec $n = 0$ pour l'année de référence 2024. 
- Le **Modèle A** (croissance linéaire) simule une politique de valorisation constante : chaque année, la quantité produite ou consommée augmente d'une valeur fixe.
- Le **Modèle B** (croissance exponentielle) simule une dynamique d'expansion proportionnelle à l'existant (par exemple, un taux de reproduction ou un effet de réseau) : chaque année, la quantité est multipliée par un facteur constant.

Les données initiales mesurées pour l'année 2024 ($n=0$) fixent les valeurs à $u_0 = 100$ (pour le modèle A) et $v_0 = 100$ (pour le modèle B). Les observations de terrain montrent qu'à l'horizon $n = 3$ (année 2027), les valeurs atteignent $u_3 = 160$ et $v_3 \approx 157{,}63$.

Toutefois, l'utilisation de ces modèles mathématiques nécessite de garder à l'esprit leurs limites épistémologiques : un modèle n'est qu'une approximation de la réalité, valable sous des hypothèses strictes qui tendent à s'effondrer sur le long terme (saturation des capacités physiques, résistance des milieux, contraintes économiques).

---

### ❓ Énoncé

1. **Caractérisation des suites :**
   Justifier que le modèle A correspond à une suite arithmétique $(u_n)$ dont on précisera la raison $r$, et que le modèle B correspond à une suite géométrique $(v_n)$ dont on précisera la raison $q$ (arrondie au millième). Expliciter l'expression de $u_n$ et de $v_n$ en fonction de $n$.

2. **Étude comparative à court et moyen terme :**
   Calculer les termes $u_5$ et $v_5$ (pour l'année 2029). Quel modèle présente la valeur la plus élevée à cette date ?

3. **Résolution d'inéquation et seuil critique :**
   À l'aide d'une résolution algébrique ou par balayage, déterminer à partir de quelle année $n$ le modèle exponentiel dépasse strictement le modèle linéaire pour la première fois.

4. **Analyse critique et limites du modèle :**
   D'un point de vue scientifique et économique, pourquoi l'extrapolation à long terme (par exemple à $n = 30$, soit en 2054) d'un modèle exponentiel sans contrainte externe est-elle généralement irréaliste dans l'étude des systèmes réels ? Argumenter en mobilisant les notions de ressources limitées ou de capacité biotique.

---

### 💡 Indice de méthode

- **Question 1 :** Pour une suite arithmétique, la relation entre deux termes distants de $k$ rangs est $u_n = u_0 + n \times r$. Pour une suite géométrique, $v_n = v_0 \times q^n$. Utilisez les valeurs de $u_3$ et $v_3$ pour isoler $r$ et $q$.
- **Question 3 :** Posez l'inéquation $v_n > u_n$. L'utilisation de la fonction logarithme népérien n'étant pas strictement exigée en classe de Première pour ce type d'inéquation (sauf si l'outil numérique est mobilisé), un tableau de valeurs ou un algorithme de type "seuil" (boucle `while` en Python) est tout à fait pertinent.
- **Question 4 :** Sondez les limites physiques des grandeurs étudiées (principe de conservation, saturation, rétroactions négatives).

---

### 📋 Correction détaillée pas à pas

1. **Caractérisation des suites :**
   * **Modèle A (arithmétique) :** 
     On a $u_0 = 100$ et $u_3 = 160$. 
     La formule explicite d'une suite arithmétique est $u_n = u_0 + nr$.
     En posant $n = 3$ :
     $$u_3 = u_0 + 3r \implies 160 = 100 + 3r \implies 3r = 60 \implies r = 20$$
     La raison est $r = 20$. L'expression explicite est :
     $$u_n = 100 + 20n$$

   * **Modèle B (géométrique) :**
     On a $v_0 = 100$ et $v_3 \approx 157{,}63$.
     La formule explicite d'une suite géométrique est $v_n = v_0 \times q^n$.
     En posant $n = 3$ :
     $$v_3 = v_0 \times q^3 \implies 157{,}63 = 100 \times q^3 \implies q^3 = 1{,}5763 \implies q = \sqrt[3]{1{,}5763} \approx 1{,}163$$
     La raison est $q \approx 1{,}163$ (ce qui correspond à un taux de croissance annuel d'environ $16{,}3\,\%$). L'expression explicite est :
     $$v_n = 100 \times (1{,}163)^n$$

2. **Calcul pour l'année 2029 ($n = 5$) :**
   * Pour le modèle A :
     $$u_5 = 100 + 20 \times 5 = 100 + 100 = 200$$
   * Pour le modèle B :
     $$v_5 = 100 \times (1{,}163)^5 \approx 100 \times 2{,}138 \approx 213{,}8$$
   À l'horizon 2029 ($n=5$), c'est le **Modèle B** (exponentiel) qui présente la valeur la plus élevée ($213{,}8$ contre $200$).

3. **Recherche du seuil critique :**
   Nous cherchons le plus petit entier $n$ tel que $v_n > u_n$, soit :
   $$100 \times (1{,}163)^n > 100 + 20n \implies (1{,}163)^n > 1 + 0{,}2n$$
   Testons par récurrence ou par calcul approché :
   - Pour $n = 5$ : $v_5 \approx 213{,}8$ et $u_5 = 200$ (le modèle B dépasse le modèle A dès $n=5$).
   Vérifions pour $n = 4$ :
   - $u_4 = 100 + 20(4) = 180$
   - $v_4 = 100 \times (1{,}163)^4 \approx 183{,}9$
   Dès $n = 4$ (année 2028), le modèle B dépasse le modèle A.

4. **Analyse critique et limites épistémologiques :**
   L'extrapolation à long terme (par exemple à $n = 30$, où $v_{30} = 100 \times (1{,}163)^{30} \approx 11\,360$ tandis que $u_{30} = 700$) met en évidence la nature explosive de la croissance exponentielle. 
   D'un point de vue scientifique, un tel modèle est **invalide à grande échelle** car il néglige les facteurs limitants de l'environnement (principe de carrying capacity ou capacité de charge). Dans un système réel, la raréfaction des ressources, les coûts marginaux croissants ou la résistance du système entraînent une saturation. Le modèle mathématique doit donc être amendé (par exemple via une suite logistique intégrant un frein à la croissance) pour refléter la complexité du monde réel.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
