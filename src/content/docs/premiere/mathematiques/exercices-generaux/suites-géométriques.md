---
title: "Exercice : Suites géométriques"
description: "Démonstration appliquée : Modélisation de la consommation d'énergie d'un data center"
---

### 🌐 Contexte moderne & concret

Avec l'explosion de l'intelligence artificielle et du cloud computing, les *data centers* (centres de données) sont au cœur des enjeux énergétiques et environnementaux du XXIe siècle. 

Imaginons un nouveau data center éco-responsable mis en service en 2024. Grâce à l'amélioration continue des algorithmes et au refroidissement par immersion, les ingénieurs estiment que la consommation électrique globale de ce site diminue chaque année de $4\%$ par rapport à l'année précédente. 

En 2024, lors de sa première année de mise en service, la consommation initiale est de $500$ mégawattheures (MWh). On cherche à modéliser cette consommation sur le long terme pour s'assurer qu'elle respecte les quotas écologiques fixés par l'Union Européenne.

---

### ❓ Énoncé

Pour tout entier naturel $n$, on note $u_n$ la consommation électrique du data center (en MWh) pour l'année $2024 + n$. Ainsi, $u_0 = 500$.

1. Calculer $u_1$, la consommation prévisionnelle pour l'année 2025.
2. Exprimer $u_{n+1}$ en fonction de $u_n$. En déduire la nature de la suite $(u_n)$ (préciser son premier terme et sa raison).
3. Exprimer le terme général $u_n$ en fonction de $n$.
4. Estimer la consommation d'énergie du data center pour l'année 2034.

---

### 💡 Indice

*   Pour la question 1 : Une diminution de $4\%$ revient à multiplier une quantité par $1 - \frac{4}{100}$.
*   Pour la question 2 : Pour passer d'une année à la suivante, on applique le même taux de variation. Quelle est la définition d'une suite géométrique ?
*   Pour la question 3 : Rappelez-vous la formule du terme général d'une suite géométrique de premier terme $u_0$ et de raison $q$ : $u_n = u_0 \times q^n$.
*   Pour la question 4 : À quel indice $n$ correspond l'année 2034 si 2024 correspond à $n = 0$ ?

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Calcul de $u_1$ (consommation en 2025)
La consommation en 2024 est de $u_0 = 500$ MWh. Elle diminue de $4\%$ pour l'année 2025. 
Calculons le montant de la baisse : 
$$500 \times \frac{4}{100} = 20 \text{ MWh}$$
La consommation pour l'année 2025 est donc :
$$u_1 = 500 - 20 = 480 \text{ MWh}$$
*Autre méthode (plus rapide) :* Appliquer un coefficient multiplicateur de $1 - 0{,}04 = 0{,}96$.
$$u_1 = 500 \times 0{,}96 = 480 \text{ MWh}$$

#### 2. Expression de $u_{n+1}$ en fonction de $u_n$ et nature de la suite
Dire que la consommation diminue de $4\%$ chaque année signifie que chaque année, on multiplie la consommation précédente par le coefficient multiplicateur $q = 1 - \frac{4}{100} = 0{,}96$.
On a donc la relation de récurrence :
$$u_{n+1} = 0{,}96 \times u_n$$

Cette relation montre que pour passer d'un terme au suivant, on multiplie toujours par le même nombre réel $q = 0{,}96$. 
Par conséquent, **$(u_n)$ est une suite géométrique** de premier terme $u_0 = 500$ et de raison $q = 0{,}96$.

#### 3. Expression du terme général $u_n$ en fonction de $n$
Le cours sur les suites géométriques nous indique que pour tout entier naturel $n$ :
$$u_n = u_0 \times q^n$$

En remplaçant $u_0$ par $500$ et $q$ par $0{,}96$, on obtient pour tout $n \in \mathbb{N}$ :
$$u_n = 500 \times (0{,}96)^n$$

#### 4. Estimation de la consommation pour l'année 2034
L'année 2024 correspond au rang $n = 0$. 
Pour trouver le rang $n$ correspondant à l'année 2034, on effectue la soustraction : 
$$2034 - 2024 = 10$$
Il s'agit donc de calculer $u_{10}$.

Utilisons la formule établie à la question précédente :
$$u_{10} = 500 \times (0{,}96)^{10}$$

À l'aide d'une calculatrice :
$$(0{,}96)^{10} \approx 0{,}66483$$
$$u_{10} \approx 500 \times 0{,}66483 \approx 332{,}42 \text{ MWh}$$

*Conclusion :* En 2034, la consommation d'énergie du data center sera d'environ **$332{,}42 \text{ MWh}$**.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
