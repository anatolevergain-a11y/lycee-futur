---
title: "Exercice 3 : Variations saisonnières et modèles mathématiques"
description: "Application pratique du chapitre Trigonométrie et fonctions associées"
---

### 🌐 Contexte & Données scientifiques

L'étude des flux énergétiques et de la consommation d'électricité met en évidence une forte cyclicité saisonnière, directement liée à la variation de la durée d'ensoleillement et aux températures extérieures. En France, la demande en électricité subit un pic hivernal marqué.

Pour modéliser cette consommation, les ingénieurs et analystes de données utilisent souvent des fonctions trigonométriques. Soit $t$ le temps écoulé en mois depuis le 1er janvier ($t = 0$ correspond au 1er janvier, $t = 1$ au 1er février, etc.). La puissance moyenne consommée $P(t)$, exprimée en gigawatts (GW), est approchée par le modèle mathématique suivant :

$$P(t) = A + B \cos\left(\frac{\pi}{6} t + \phi\right)$$

Des relevés statistiques pluriannuels permettent d'estimer les paramètres suivants pour un territoire donné :
- $A = 65$ (consommation moyenne de fond, en GW).
- $B = 15$ (amplitude des variations saisonnières, en GW).
- La période de cette fonction est de $12$ mois, ce qui traduit la périodicité annuelle des saisons.

Cependant, tout modèle mathématique repose sur des hypothèses simplificatrices : il lisse les variations météorologiques exceptionnelles (vagues de froid soudaines, hivers particulièrement doux) et ne prend pas en compte l'évolution à long terme des usages (sobriété énergétique, développement des pompes à chaleur, électrification du parc automobile). L'analyse critique d'un tel modèle consiste donc à confronter ses prédictions aux incertitudes de mesure et à sa capacité prédictive limitée.

---

### ❓ Énoncé

1. **Étude de la période et de l'ensemble de définition :** 
   Justifier mathématiquement que la fonction $P$ est périodique de période $T = 12$. En déduire l'intervalle d'étude pertinent pour analyser une année civile.

2. **Analyse des extrema et des saisons :** 
   Calculer la consommation théorique maximale $P_{\max}$ et minimale $P_{\min}$. Préciser pour quels mois de l'année ces extrema sont atteints dans ce modèle (en posant $\phi = 0$).

3. **Résolution d'équation et seuil critique :** 
   Un gestionnaire de réseau fixe un seuil d'alerte critique à $72,5\text{ GW}$ en raison des capacités de production et d'importation maximales. 
   Résoudre sur l'intervalle $[0 ; 12[$ l'inéquation $P(t) \ge 72,5$ (en supposant $\phi = 0$).

4. **Esprit critique et limites du modèle :** 
   En février, une vague de froid exceptionnelle fait augmenter la consommation réelle de $15\%$ par rapport à la prévision du modèle. 
   Discuter de l'intérêt d'un tel modèle sinusoïdal pour le pilotage à court terme du réseau électrique par rapport à une gestion au jour le jour.

---

### 💡 Indice de méthode

- **Pour la question 1 :** Rappelez-vous qu'une fonction $f$ est périodique de période $T$ si, pour tout $t$, $f(t + T) = f(t)$. Utilisez les propriétés de la fonction $\cos$.
- **Pour la question 2 :** Encadrez la fonction $\cos\left(\frac{\pi}{6} t\right)$ en sachant que le cosinus varie toujours entre $-1$ et $1$.
- **Pour la question 3 :** Isolez le terme en $\cos$, puis utilisez les valeurs remarquables du cercle trigonométrique pour déterminer les angles correspondants.
- **Pour la question 4 :** Interprétez la différence entre une tendance climatique lissée (le modèle) et la stochasticité météorologique (la réalité aléatoire).

---

### 📋 Correction détaillée pas à pas

#### 1. Étude de la période
Soit $P(t) évalué en $t + 12$ :
$$P(t + 12) = 65 + 15 \cos\left(\frac{\pi}{6}(t + 12)\right) = 65 + 15 \cos\left(\frac{\pi}{6}t + \frac{12\pi}{6}\right)$$
$$P(t + 12) = 65 + 15 \cos\left(\frac{\pi}{6}t + 2\pi\right)$$
La fonction cosinus étant $2\pi$-périodique, on a $\cos(\alpha + 2\pi) = \cos(\alpha)$. Ainsi :
$$P(t + 12) = 65 + 15 \cos\left(\frac{\pi}{6}t\right) = P(t)$$
La fonction est bien périodique de période $T = 12$ mois. L'intervalle d'étude pertinent pour une année civile est $[0 ; 12[$.

#### 2. Analyse des extrema
Sachant que pour tout réel $X$, $-1 \le \cos(X) \le 1$, on a :
$-1 \le \cos\left(\frac{\pi}{6}t\right) \le 1$
En multipliant par $15$ (qui est positif, donc le sens de l'inégalité ne change pas) puis en ajoutant $65$ :
$$65 - 15 \le 65 + 15 \cos\left(\frac{\pi}{6}t\right) \le 65 + 15$$
$$50 \le P(t) \le 80$$
- La consommation maximale est $P_{\max} = 80\text{ GW}$. Elle est atteinte lorsque $\cos\left(\frac{\pi}{6}t\right) = 1$, soit $\frac{\pi}{6}t = 0 + 2k\pi$, ce qui donne $t = 0$ (1er janvier).
- La consommation minimale est $P_{\min} = 50\text{ GW}$. Elle est atteinte lorsque $\cos\left(\frac{\pi}{6}t\right) -1$, soit $\frac{\pi}{6}t = \pi + 2k\pi$, ce qui donne $t = 6$ (1er juillet, au cœur de l'été).

#### 3. Résolution de l'inéquation du seuil critique
On cherche à résoudre $P(t) \ge 72,5$ sur $[0 ; 12[$ :
$$65 + 15 \cos\left(\frac{\pi}{6}t\right) \ge 72,5$$
$$15 \cos\left(\frac{\pi}{6}t\right) \ge 7,5$$
$$\cos\left(\frac{\pi}{6}t\right) \ge \frac{7,5}{15}$$
$$\cos\left(\frac{\pi}{6}t\right) \ge 0,5$$

Sur le cercle trigonométrique, le cosinus est supérieur ou égal à $0,5$ ($\frac{1}{2}$) pour des angles compris entre $-\frac{\pi}{3}$ et $\frac{\pi}{3}$ (modulo $2\pi$). 
Posons X = $\frac{\pi}{6}t$. On cherche donc :
$$-\frac{\pi}{3} \le \frac{\pi}{6}t \le \frac{\pi}{3} \pmod{2\pi}$$
En multipliant par $\frac{6}{\pi}$ :
$$-2 \le t \le 2$$
Sur l'intervalle d'étude $[0 ; 12[$, la solution est $t \in [0 ; 2] \cup [10 ; 12[$.
*Interprétation :* Le réseau dépasse le seuil critique de $72,5\text{ GW}$ durant les deux premiers mois de l'année (janvier et février) et les deux derniers (novembre et décembre), ce qui correspond rigoureusement aux périodes de chauffe.

#### 4. Esprit critique et limites du modèle
Si en février ($t=1$), la consommation subit une hausse imprévue de $15$ % due à une vague de froid, la consommation réelle s'élève à :
$$P_{\text{réelle}}(1) = \left(65 + 15 \cos\left(\frac{\pi}{6}\right)\right) \times 1,15 = \left(65 + 15 \times \frac{\sqrt{3}}{2}\right) \times 1,15 \approx (65 + 12,99) \times 1,15 \approx 89,68\text{ GW}$$
Ce calcul montre les limites fondamentales du modèle déterministe :
- **Caractère lissé :** Le modèle n'intègre pas la stochasticité (l'aléa) météorologique à court terme. 
- **Compromis complexité/utilité :** Bien qu'inopérant pour gérer une crise de pointe à l'échelle de l'heure ou de la journée, ce modèle sinusoïdal reste un outil précieux pour la planification macroscopique à long terme (maintenance préventive des centrales nucléaires au printemps/été, dimensionnement des infrastructures de transport d'énergie). Pour le pilotage opérationnel, il doit impérativement être couplé à des modèles probabilistes et météorologiques actualisés en temps réel.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
