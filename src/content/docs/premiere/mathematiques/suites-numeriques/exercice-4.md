---
title: "Exercice 4 : Consommation annuelle d'un data center"
description: "Application pratique du chapitre Suites numériques"
---

### 🌐 Contexte concret

Face à la transition numérique, la consommation énergétique des *data centers* (centres de données) est un enjeu écologique et économique majeur. 

On s'intéresse à la consommation électrique d'un nouveau *data center* écologique dont la consommation initiale lors de sa mise en service en 2023 est de $1200$ mégawattheures (MWh). 

Grâce à l'amélioration des technologies de refroidissement et des algorithmes, les gestionnaires prévoient de réduire cette consommation de $4\%$ chaque année. Cependant, l'activité du site grandit, et le *data center* doit intégrer chaque année de nouveaux serveurs, ce qui représente une consommation supplémentaire fixe de $50$ MWh par an.

---

### ❓ Énoncé

Pour tout entier naturel $n$, on note $u_n$ la consommation électrique du *data center* l'année $2023 + n$, en MWh. On a donc $u_0 = 1200$.

1. Calculer la consommation $u_1$ prévisible pour l'année 2024.
2. Justifier que, pour tout entier naturel $n$, la suite $(u_n)$ vérifie la relation de récurrence :
   $$u_{n+1} = 0{,}96u_n + 50$$
3. On pose, pour tout entier naturel $n$, $v_n = u_n - 1250$. 
   Démontrer que la suite $(v_n)$ est une suite géométrique dont on précisera le premier terme et la raison.
4. En déduire l'expression explicite de $v_n$, puis celle de $u_n$ en fonction de $n$.
5. Selon ce modèle, quelle sera la consommation du *data center* en 2033 ? *(Arrondir au MWh près)*

---

### 💡 Indice

* **Question 1 :** Traduisez en langage mathématique la baisse de $4\%$ (qui revient à multiplier par $1 - 0{,}04$) et l'ajout de $50$ MWh.
* **Question 3 :** Exprimez $v_{n+1}$ en fonction de $u_{n+1}$, puis remplacez $u_{n+1}$ par son expression en fonction de $u_n$. Essayez de factoriser par $0{,}96$ pour faire apparaître $v_n$.
* **Question 4 :** Utilisez le cours sur les suites géométriques pour $v_n$, puis revenez à $u_n$ grâce à la relation de la question 3.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la consommation $u_1$ pour l'année 2024
La consommation en 2024 ($u_1$) subit une baisse de $4\%$ par rapport à 2023 ($u_0$), soit une multiplication par $1 - \frac{4}{100} = 0{,}96$, à laquelle s'ajoutent les $50$ MWh supplémentaires.
$$u_1 = 0{,}96 \times u_0 + 50$$
$$u_1 = 0{,}96 \times 1200 + 50 = 1152 + 50 = 1202$$
La consommation prévisible pour l'année 2024 est de **$1202$ MWh**.

#### 2. Justification de la relation de récurrence
D'une année à l'autre (passant de l'année $n$ à l'année $n+1$), la consommation est constituée de :
* $96\%$ de la consommation de l'année précédente (puisqu'il y a une réduction de $4\%$), soit $0{,}96 u_n$.
* Une augmentation fixe de $50$ MWh due aux nouveaux serveurs.

On obtient donc bien pour tout entier naturel $n$ :
$$u_{n+1} = 0{,}96u_n + 50$$

#### 3. Nature de la suite $(v_n)$
Soit $n \in \mathbb{N}$. Exprimons $v_{n+1}$ :
$$v_{n+1} = u_{n+1} - 1250$$
On remplace $u_{n+1}$ par son expression en fonction de $u_n$ :
$$v_{n+1} = (0{,}96u_n + 50) - 1250$$
$$v_{n+1} = 0{,}96u_n - 1200$$
L'objectif est d'faire apparaître $v_n = u_n - 1250$, c'est-à-dire de factoriser par $0{,}96$ :
$$v_{n+1} = 0{,}96(u_n - \frac{1200}{0{,}96})$$
Or, $\frac{1200}{0{,}96} = 1250$. Donc :
$$v_{n+1} = 0{,}96(u_n - 1250)$$
Puisque $u_n - 1250 = v_n$, on a :
$$v_{n+1} = 0{,}96v_n$$

La suite $(v_n)$ est donc une **suite géométrique de raison $q = 0{,}96$**.
Son premier terme est :
$$v_0 = u_0 - 1250 = 1200 - 1250 = -50$$

#### 4. Expression explicite de $v_n$ et $u_n$
* **Pour la suite $(v_n)$ :**
  Comme $(v_n)$ est géométrique de premier terme $v_0 = -50$ et de raison $q = 0{,}96$, on a pour tout entier $n$ :
  $$v_n = v_0 \times q^n = -50 \times 0{,}96^n$$

* **Pour la suite $(u_n)$ :**
  Puisque $v_n = u_n - 1250$, on en déduit que $u_n = v_n + 1250$, soit :
  $$u_n = 1250 - 50 \times 0{,}96^n$$

#### 5. Consommation du *data center* en 2033
L'année 2033 correspond à $2023 + n$, soit $n = 2033 - 2023 = 10$.
Calculons $u_{10}$ :
$$u_{10} = 1250 - 50 \times 0{,}96^{10}$$
À l'aide d'une calculatrice :
$$0{,}96^{10} \approx 0{,}66483$$
$$u_{10} = 1250 - 50 \times 0{,}66483 \approx 1250 - 33{,}24 = 1216{,}76$$

En 2033, la consommation du *data center* sera d'environ **$1217$ MWh**.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
