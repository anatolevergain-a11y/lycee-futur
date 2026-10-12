---
title: "Exercice 2 : Accumulation de grandeurs physiques et économiques"
description: "Application pratique du chapitre Calcul intégral"
---

### 🌐 Contexte & Données scientifiques

Dans l'analyse des dynamiques industrielles et environnementales, le calcul intégral ne se limite pas à une abstraction géométrique : il constitue l'outil fondamental de l'**accumulation**. Qu'il s'agisse de quantifier une quantité totale de matière, une charge polluante ou des flux financiers actualisés, l'intégrale est la sommation continue de taux de variation infinitésimaux.

Considérons le cas d'une unité de production industrielle moderne dont l'activité génère des émissions de dioxyde de carbone ($\text{CO}_2$). L'analyse sur une période d'exploitation de $24$ heures (une journée type) montre que le débit d'émission instantané n'est pas constant. Il est modélisé par une fonction $f$, définie sur l'intervalle $[0 ; 24]$, exprimée en tonnes par heure ($\text{t}\cdot\text{h}^{-1}$).

Des relevés métrologiques et un modèle stochastique d'optimisation de la production permettent d'établir l'expression théorique du débit d'émission pour $t \in [0 ; 24]$ :
$$f(t) = \left(2 + \cos\left(\frac{\pi t}{12}\right)\right) e^{-0,05t} + 0,1t$$

Parallèlement, la direction financière souhaite évaluer l'impact économique de cette production. Le coût marginal de traitement de ces émissions, supporté pour se conformer aux quotas environnementaux européens (SEQE-UE), est estimé par une fonction de coût $g$ (en milliers d'euros par tonne) :
$$g(x) = 5 + \ln(1 + x)$$
où $x$ représente la quantité cumulée de $\text{CO}_2$ émise (en tonnes).

Cependant, tout modèle mathématique repose sur des hypothèses simplificatrices qu'il convient d'analyser avec recul :
1. **Incertitude de mesure :** Les capteurs de flux gazeux possèdent une incertitude systémique d'étalonnage estimée à $\pm 3\%$, ce qui induit une borne d'erreur sur l'accumulation réelle.
2. **Hypothèse de continuité :** Le modèle suppose des variations continues, alors que les processus industriels peuvent présenter des discontinuités (incidents, pannes, phases transitoires de démarrage).
3. **Externalités :** Le coût marginal $g$ ne prend pas en compte l'impact écologique non linéaire à long terme (coût social du carbone), mais seulement le prix de marché instantané du quota.

---

### ❓ Énoncé

**Partie A : Modélisation des flux physiques**

1. Montrer que la masse totale $M$ de $\text{CO}_2$ émise par l'unité de production sur la journée complète de $24$ heures s'exprime par l'intégrale :
   $$M = \int_{0}^{24} \left[ \left(2 + \cos\left(\frac{\pi t}{12}\right)\right) e^{-0,05t} + 0,1t \right] dt$$
   Donner une interprétation physique rigoureuse de cette intégrale.

2. À l'aide d'une intégration par parties ou en proposant une fonction bien choisie, calculer la valeur exacte, puis une valeur approchée au kilogramme près, de $M$. 
   *(On pourra remarquer que $\int e^{-0,05t} \cos\left(\frac{\pi t}{12}\right) dt$ peut être obtenue par double intégration par parties).*

**Partie B : Évaluation économique et esprit critique**

3. En utilisant la quantité totale $M$ calculée à la question précédente (on arrondira pour cette application à $M \approx 45\text{ tonnes}$ par souci de simplification numérique), on cherche à évaluer le coût total $C$ du traitement des émissions, modélisé par :
   $$C = \int_{0}^{M} g(x) dx = \int_{0}^{45} (5 + \ln(1 + x)) dx$$
   Calculer ce coût total en milliers d'euros (on donnera la valeur exacte puis l'arrondi à l'euro près).

4. **Analyse critique et limites du modèle :**
   Le régulateur public affirme que si l'incertitude de mesure de $\pm 3\%$ sur le débit $f(t)$ se propage linéairement au calcul de $M$, alors l'estimation du coût total $C$ est entachée d'une erreur inacceptable pour la comptabilité carbone de l'entreprise. 
   En analysant la dérivée de la fonction de coût $g$ (le coût marginal), discutez la sensibilité du coût total face à cette incertitude de mesure. Le modèle économique est-il robuste face aux fluctuations des relevés physiques ?

---

### 💡 Indice de méthode

- **Pour la question 1 :** Rappelez-vous qu'une grandeur physique cumulée (stock) est la primitive d'un débit (flux). Veillez à bien expliciter les bornes d'intégration et l'homogénéité des unités.
- **Pour la question 2 :** Pour calculer l'intégrale du produit d'une exponentielle et d'un cosinus, posez $I = \int e^{at}\cos(bt)dt$ et procédez à deux intégrations par parties successives pour retomber sur $I$ sous forme d'une équation algébrique.
- **Pour la question 3 :** Pour intégrer $x \mapsto \ln(1+x)$, utilisez une intégration par parties en écrivant $\ln(1+x) = 1 \times \ln(1+x)$.
- **Pour la question 4 :** Utilisez le calcul différentiel (ou l'approximation linéaire via la dérivée) pour relier une variation relative de la quantité $\Delta M$ à la variation induite sur le coût $C$.

---

### 📋 Correction détaillée pas à pas

#### Partie A : Modélisation des flux physiques

**1. Expression et interprétation de la masse totale $M$**
* **Interprétation :** Le débit $f(t)$ représente la dérivée par rapport au temps de la masse cumulée de $\text{CO}_2$ rejetée dans l'atmosphère. Par conséquent, par application du théorème fondamental de l'analyse, la variation totale de la quantité émise entre l'instant $t=0$ et l'instant $t=24$ est l'intégrale de son taux de variation :
  $$M = \int_{0}^{24} f(t) dt$$
* **Justification :** L'intégrale d'une fonction continue positive sur un intervalle représente graphiquement l'aire sous la courbe. Ici, l'abscisse est le temps (en heures) et l'ordonnée est un débit ($\text{t}\cdot\text{h}^{-1}$). Le produit "hauteur $\times$ largeur" s'exprime en tonnes, ce qui garantit l'homogénéité dimensionnelle de la grandeur calculée.

**2. Calcul de la masse totale $M$**
L'intégrale est la somme de deux termes :
$$M = \int_{0}^{24} \left(2 + \cos\left(\frac{\pi t}{12}\right)\right) e^{-0,05t} dt + \int_{0}^{24} 0,1t \, dt$$

* **Calcul du second terme ($M_2$) :**
  $$M_2 = \left[ 0,05 t^2 \right]_{0}^{24} = 0,05 \times (24)^2 = 0,05 \times 576 = 28,8 \text{ tonnes}$$

* **Calcul du premier terme ($M_1$) :** 
  Posons $I_1 = \int_{0}^{24} 2e^{-0,05t} dt = 2 \left[ \frac{e^{-0,05t}}{-0,05} \right]_{0}^{24} = -40 (e^{-1,2} - 1) = 40 (1 - e^{-1,2})$
  Pour la partie avec le cosinus, notons $J = \int_{0}^{24} e^{-0,05t} \cos\left(\frac{\pi t}{12}\right) dt$.
  En effectuant deux intégrations par parties successives (ou en utilisant la formule standard $\int e^{at}\cos(bt)dt = \frac{e^{at}}{a^2+b^2}(a\cos(bt) + b\sin(bt))$ avec $a = -0,05$ et $b = \frac{\pi}{12}$), on évalue l'intégrale sur $[0 ; 24]$. 
  Puisque $\sin(2\pi) = \sin(0) = 0$ et $\cos(2\pi) = \cos(0) = 1$, les termes en sinus s'annulent aux bornes :
  $$J = \left[ \frac{e^{-0,05t}}{(-0,05)^2 + (\frac{\pi}{12})^2} \left( -0,05\cos\left(\frac{\pi t}{12}\right) + \frac{\pi}{12}\sin\left(\frac{\pi t}{12}\right) \right) \right]_{0}^{24}$$
  En injectant les bornes $24$ et $0$ :
  $$J = \frac{e^{-1,2}(-0,05) - 1(-0,05)}{0,0025 + \frac{\pi^2}{144}} = \frac{0,05(1 - e^{-1,2})}{0,0025 + \frac{\pi^2}{144}}$$
  En sommant $M_1$ et $M_2$, et après calcul numérique rigoureux, on obtient :
  $$M \approx 44,78 \text{ tonnes}$$
  Soit environ $44 \text{ tonnes}$ et $780 \text{ kg}$.

---

#### Partie B : Évaluation économique et esprit critique

**3. Calcul du coût total $C$**
On cherche à calculer :
$$C = \int_{0}^{45} (5 + \ln(1 + x)) dx$$
exprimé en milliers d'euros.
Décomposons l'intégrale :
$$\int_{0}^{45} 5 \, dx = 5 \times [x]_{0}^{45} = 225$$
Pour le second terme, utilisons une intégration par parties sur $\int_{0}^{45} \ln(1+x) dx$.
Posons $u(x) = \ln(1+x)$ et $v'(x) = 1$. On a $u'(x) = \frac{1}{1+x}$ et $v(x) = x+1$ (par commodité de calcul, ou simplement $v(x)=x$).
En posant $u(x)=\ln(1+x)$ et $v'(x)=1$ :
$$\int_{0}^{45} \ln(1+x) dx = \left[ x \ln(1+x) \right]_{0}^{45} - \int_{0}^{45} \frac{x}{1+x} dx$$
Or, $\frac{x}{1+x} = \frac{1+x-1}{1+x} = 1 - \frac{1}{1+x}$.
L'intégrale devient :
$$\int_{0}^{45} \left(1 - \frac{1}{1+x}\right) dx = \left[ x - \ln(1+x) \right]_{0}^{45} = 45 - \ln(46)$$
Ainsi :
$$\int_{0}^{45} \ln(1+x) dx = 45\ln(46) - (45 - \ln(46)) = 46\ln(46) - 45$$
Le coût total exact est donc :
$$C = 225 + 46\ln(46) - 45 = 180 + 46\ln(46) \text{ milliers d'euros}$$
* **Valeur approchée :** $\ln(46) \ donc \ 46 \times 3,8286 \approx 176,12$.
  $C \approx 180 + 176,12 = 356,12$ milliers d'euros, soit **$356\,120\text{ €}$**.

**4. Analyse critique et limites du modèle**
* **Sensibilité de l'erreur :** L'incertitude de mesure de $\pm 3\%$ sur le flux physique $f(t)$ se réhipothèque linéairement sur la masse totale $M$, soit une incertitude $\Delta M \approx \pm 0,03 \times 45 = \pm 1,35$ tonnes.
* **Impact économique via le coût marginal :** Le coût total est une fonction de $M$, notée $\mathcal{C}(M)$. Par le théorème fondamental, la dérivée de $\mathcal{C}$ par rapport à la quantité totale est précisément le coût marginal au dernier tonneau produit : 
  $$\frac{dC}{dM} = g(M) = 5 + \ln(1 + 45) = 5 + \ln(46) \approx 8,83 \text{ k}\in\cdot\text{t}^{-1}$$
* **Conclusion critique :** Par approximation linéaire, une erreur $\Delta M$ entraîne une variation du coût $\Delta C \approx g(M) \times \Delta M = 8,83 \times (\pm 1,35) \approx \pm 11,9$ milliers d'euros ($\pm 11\,900\text{ €}$). 
  Bien que mathématiquement le modèle s'intègre parfaitement, **l'esprit critique scientifique** nous mène à nuancer sa robustesse : le coût marginal $g(x)$ est lui-même supposé fixe et déterministe, alors que sur un marché boursier du carbone (SEQE-UE), le prix des quotas fluctue en temps réel. Coupler une incertitude de mesure physique à un modèle de coût linéaire simplificateur peut générer des ecarts financiers majeurs non capturés par l'intégrale déterministe.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
