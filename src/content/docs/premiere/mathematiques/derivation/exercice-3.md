---
title: "Exercice 3 : Vitesse et variation instantanée en physique"
description: "Application pratique du chapitre Dérivation et applications"
---

### 🌐 Contexte & Données scientifiques

En cinématique, l'étude du mouvement d'un mobile s'appuie sur la modélisation mathématique de sa position au cours du temps. Considérons les essais de freinage d'un prototype automobile électrique menés sur piste sèche. L'analyse des relevés de la boîte noire du véhicule fournit la position $s(t)$ (exprimée en mètres) en fonction du temps $t$ (exprimé en secondes) à partir de l'instant où le freinage est actionné ($t = 0$).

Le modèle mathématique validé par le laboratoire d'essais pour l'intervalle de temps $[0\,;\,4]$ est la fonction $s$ définie par :
$$s(t) = -1,5t^2 + 12t$$

Il est important de noter que ce modèle polynomial constitue une approximation idéalisée : il ne prend pas en compte des variables complexes telles que la variation du coefficient d'adhérence pneumatique-chaussée due à l'échauffement, ni la latence du système de freinage hydraulique. Les ingénieurs doivent constamment confronter ce modèle théorique aux incertitudes de mesure des capteurs embarqués (précision de $\pm 0,05\text{ m}$).

---

### ❓ Énoncé

1. **Calcul d'une vitesse moyenne :** 
   Calculer la vitesse moyenne du véhicule entre les instants $t_1 = 1\text{ s}$ et $t_2 = 3\text{ s}$. Exprimer le résultat en $\text{m}\cdot\text{s}^{-1}$, puis convertir cette valeur en $\text{km}\cdot\text{h}^{-1}$.

2. **Interprétation cinématique et dérivation :** 
   Justifier que la fonction $s$ est dérivable sur l'intervalle $[0\,;\,4]$ et déterminer sa fonction dérivée $s'$, qui modélise la vitesse instantanée $v(t)$ du véhicule. Calculer la vitesse instantanée aux instants $t = 1\text{ s}$ et $t = 3\text{ s}$.

3. **Étude du mouvement et esprit critique :** 
   Déterminer l'instant exact $t_s$ où le véhicule s'immobilise selon le modèle. Discuter la validité physique de ce modèle au voisinage de l'arrêt complet, sachant qu'à très basse vitesse, les frottements solides statiques diffèrent des frottements dynamiques modélisés ici.

4. **Problématique de sécurité routière :** 
   Calculer la distance totale de freinage parcourue par le véhicule entre l'instant $t = 0$ et l'immobilisation complète. Si le temps de réaction du conducteur est estimé à $1\text{ s}$ avant le début du freinage (pendant lequel le véhicule roule à vitesse constante de $12\text{ m}\cdot\text{s}^{-1}$), calculer la distance d'arrêt totale et analyser l'impact d'une augmentation de la vitesse initiale sur cette distance.

---

### 💡 Indice de méthode

* **Question 1 :** La vitesse moyenne sur un intervalle $[t_1\,;\,t_2$] correspond au taux de variation de la fonction position : $\frac{s(t_2) - s(t_1)}{t_2 - t_1}$.
* **Question 2 :** La vitesse instantanée à l'instant $t$ est par définition la dérivée de la position par rapport au temps : $v(t) = s'(t)$. Utilisez les formules usuelles de dérivation des fonctions polynômes.
* **Question 3 :** S'immobiliser signifie que la vitesse instantanée est nulle ($v(t) = 0$). Posez l'équation correspondante. Pour la critique du modèle, observez le comportement de l'accélération implicite.
* **Question 4 :** Séparez le problème en deux phases : la phase de perception-réaction (mouvement rectiligne uniforme) et la phase de freinage (mouvement étudié aux questions précédentes).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul de la vitesse moyenne entre $t_1 = 1\text{ s}$ et $t_2 = 3\text{ s}$
La vitesse moyenne $v_{\text{moy}}$ se calcule par le taux d'accroissement de la fonction $s$ :
$$v_{\text{moy}} = \frac{s(3) - s(1)}{3 - 1}$$

Calculons séparément les positions :
* Pour $t_1 = 1$ : $s(1) = -1,5(1)^2 + 12(1) = -1,5 + 12 = 10,5\text{ m}$
* Pour $t_2 = 3$ : $s(3) = -1,5(3)^2 + 12(3) = -1,5(9) + 36 = -13,5 + 36 = 22,5\text{ m}$

On injecte ces valeurs dans le taux de variation :
$$v_{\text{moy}} = \frac{22,5 - 10,5}{3 - 1} = \frac{12}{2} = 6\text{ m}\cdot\text{s}^{-1}$$

Conversion en $\text{km}\cdot\text{h}^{-1}$ :
$$6\text{ m}\cdot\text{s}^{-1} = 6 \times 3,6\text{ km}\cdot\text{h}^{-1} = 21,6\text{ km}\cdot\text{h}^{-1}$$

---

#### 2. Dérivation et vitesse instantanée
La fonction $s$ est une fonction polynôme de degré 2. Elle est par conséquent dérivable sur tout $\mathbb{R}$, et en particulier sur l'intervalle $[0\,;\,4]$.

La dérivée $s'(t)$, qui représente la vitesse instantanée $v(t)$, s'obtient en appliquant les règles de dérivation :
$$v(t) = s'(t) = -1,5 \times (2t) + 12 = -3t + 12$$

Calculons la vitesse instantanée aux instants demandés :
* À $t = 1\text{ s}$ : $v(1) = -3(1) + 12 = 9\text{ m}\cdot\text{s}^{-1}$ (soit $32,4\text{ km}\cdot\text{h}^{-1}$).
* À $t = 3\text{ s}$ : $v(3) = -3(3) + 12 = -9 + 12 = 3\text{ m}\cdot\text{s}^{-1}$ (soit $10,8\text{ km}\cdot\text{h}^{-1}$).

---

#### 3. Détermination de l'instant d'immobilisation et esprit critique
Le véhicule est immobilisé lorsque sa vitesse instantanée est nulle, soit $v(t) = 0$ :
$$-3t + 12 = 0 \iff 3t = 12 \iff t = 4\text{ s}$$

* **Analyse critique du modèle :** 
  L'accélération du véhicule est constante et vaut $a(t) = v'(t) = -3\text{ m}\cdot\text{s}^{-2}$. 
  Si ce modèle mathématique est commode pour prédire l'arrêt à $t = 4\text{ s}$, il présente des limites physiques notables. En effet, un modèle à accélération constante implique une décélération abrupte et linéaire jusqu'à l'arrêt, sans transition asymptotique. Dans la réalité physique, l'efficacité des freins diminue souvent à très basse vitesse (phénomène de brouture, transition entre frottement cinétique et statique), ce qui tend à allonger légèrement le temps réel d'immobilisation par rapport à la prédiction du modèle.

---

#### 4. Distance d'arrêt totale et problématique de sécurité
* **Phase de freinage (entre $t = 0$ et $t = 4\text{ s}$) :**
  La distance de freinage $d_f$ est la position atteinte à l'arrêt complet :
  $$d_f = s(4) = -1,5(4)^2 + 12(4) = -1,5(16) + 48 = -24 + 48 = 24\text{ m}$$

* **Phase de réaction (temps de réaction $t_r = 1\text{ s}$) :**
  Pendant le temps de réaction, la vitesse initiale du véhicule au début du freinage est $v(0) = -3(0) + 12 = 12\text{ m}\cdot\text{s}^{-1}$.
  La distance parcourue pendant ce temps de réaction est un mouvement rectiligne uniforme :
  $$d_r = v(0) \times t_r = 12\text{ m}\cdot\text{s}^{-1} \times 1\text{ s} = 12\text{ m}$$

* **Distance d'arrêt totale ($D_a$) :**
  $$D_a = d_r + d_f = 12\text{ m} + 24\text{ m} = 36\text{ m}$$

* **Analyse de sensibilité :** 
  Si la vitesse initiale venait à doubler (passant de $12\text{ m}\cdot\text{s}^{-1}$ à $24\text{ m}\cdot\text{s}^{-1}$), la distance de réaction doublerait linéairement. En revanche, dans le cadre d'un modèle cinématique où l'accélération de freinage reste constante, la distance de freinage est proportionnelle au *carré* de la vitesse initiale ($d_f \propto v^2$). Par conséquent, doubler la vitesse quadruplerait la distance de freinage, illustrant ainsi la non-linéarité critique des enjeux de sécurité routière.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
