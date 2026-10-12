---
title: "Exercice 1 : Modélisation de phénomènes périodiques"
description: "Application pratique du chapitre Trigonométrie et fonctions associées"
---

### 🌐 Contexte & Données scientifiques

L'étude des marées présente un intérêt majeur pour la navigation côtière, l'exploitation des énergies marines renouvelables et la gestion du littoral. Le mouvement des marées est principalement gouverné par l'attraction gravitationnelle de la Lune et du Soleil sur les océans de la Terre. 

À des fins opérationnelles (comme l'optimisation des entrées de grands navires dans les ports), le service hydrographique et océanographique modélise la hauteur d'eau $h(t)$ (exprimée en mètres) en un lieu donné par une fonction trigonométrique de la forme :
$$h(t) = A \cos(\omega t + \varphi) + D$$

où :
- $t$ représente le temps écoulé en heures depuis minuit ($t \ge 0$) ;
- $A$ est l'amplitude du mouvement (liée au marnage) ;
- $\omega$ est la pulsation, liée à la période $T$ du phénomène par la relation $\omega = \frac{2\pi}{T}$ ;
- $\varphi$ est la phase à l'origine (liée aux horaires précis des pleines et basses mers) ;
- $D$ est la valeur moyenne, correspondant au niveau moyen de la mer (hauteur d'oubli ou niveau de référence hydrographique).

**Données d'observation pour le port de Saint-Malo lors d'un coefficient de marée moyen :**
- Le niveau moyen de la mer est estimé à $D = 6,5$ mètres.
- La hauteur d'eau maximale (pleine mer) atteinte au cours de la journée est de $12,0$ mètres, et la hauteur minimale (basse mer) est de $1,0$ mètre.
- La durée moyenne entre deux pleines mers consécutives (demi-période synodique de la marée semi-diurne) est de $12$ heures et $25$ minutes, soit $12,42$ heures.
- On choisit comme instant initial ($t = 0$) l'horaire de la première pleine mer observée, soit $02$h$00$ du matin.

*Note scientifique et limites du modèle :* Ce modèle sinusoïdal simple constitue une approximation harmonique de premier ordre. Il néglige les effets météorologiques (pression atmosphérique, surcote due au vent) ainsi que les interactions non-linéaires en eaux infranlittorales (bassins portuaires, estuaires), qui génèrent des asymétries entre la durée de la mer montante (flot) et celle de la mer descendante (jusant).

---

### ❓ Énoncé

1. **Détermination des paramètres du modèle :**
   En exploitant les données d'observation et les propriétés des fonctions cosinus, déterminer les valeurs exactes ou approchées (à $10^{-3}$ près) des paramètres $A$, $\omega$, $\varphi$ et $D$ de la fonction $h(t)$.

2. **Étude de la hauteur d'eau à un instant donné :**
   Calculer la hauteur d'eau prévue par le modèle à $t = 6$ heures (soit à $08$h$00$ du matin). Arrondir le résultat au centimètre près.

3. **Résolution d'une problématique de sécurité maritime :**
   Un navire de commerce à fort tirant d'eau nécessite une hauteur d'eau minimale de $8,0$ mètres pour franchir en sécurité le seuil du port. 
   Écrire l'inéquation traduisant cette condition, puis déterminer par le calcul les intervalles de temps $t$ (sur l'intervalle $[0 ; 12,42]$) durant lesquels le port est accessible à ce navire.

4. **Analyse critique et limites :**
   Le marin de quart constate à $t = 6$ heures une hauteur réelle mesurée par le marégraphe de $7,82$ mètres (soit un écart de $15$ centimètres par rapport à la prévision théorique). En mobilisant vos connaissances sur les hypothèses du modèle, citez deux facteurs physiques susceptibles d'expliquer cet écart et discutez de la pertinence d'utiliser un modèle purement déterministe pour la navigation de précision.

---

### 💡 Indice de méthode

- **Question 1 :** L'amplitude $A$ se déduit de la différence entre le maximum et le minimum divisée par 2. La pulsation $\omega$ se calcule à partir de la période $T$ par la formule $\omega = \frac{2\pi}{T}$. L'utilisation de la condition initiale en $t = 0$ (pleine mer, où le cosinus atteint son maximum) permet de déterminer facilement la phase $\varphi$.
- **Question 3 :** Ramenez l'inéquation à la résolution d'une inéquation trigonométrique fondamentale du type $\cos(X) \ge k$ sur un intervalle bien choisi, en vous aidant éventuellement du cercle trigonométrique.

---

### 📋 Correction détaillée pas à pas

#### 1. Détermination des paramètres du modèle
- **Amplitude $A$ et valeur moyenne $D$ :**
  La hauteur maximale est $h_{\max} = D + A = 12,0$ et la hauteur minimale est $h_{\min} = D - A = 1,0$.
  Par addition et soustraction :
  $$2D = 12,0 + 1,0 \implies D = 6,5 \text{ mètres}$$
  $$2A = 12,0 - 1,0 \implies A = 5,5 \text{ mètres}$$
  *(Le modèle donne bien un marnage $2A = 11$ mètres).*

- **Pulsation $\omega$ :**
  La période du phénomène est $T = 12,42$ heures. 
  $$\omega = \frac{2\pi}{T} = \frac{2\pi}{12,42} \approx 0,5058 \text{ rad}\cdot\text{h}^{-1}$$

- **Phase à l'origine $\varphi$ :**
  À $t = 0$ (pleine mer), la hauteur est maximale, donc $h(0) = 12,0$.
  $$h(0) = 5,5 \cos(0 + \varphi) + 6,5 = 12,0 \implies 5,5 \cos(\varphi) = 5,5 \implies \cos(\varphi) = 1$$
  Puisque la phase est généralement choisie dans l'intervalle $[-\pi ; \pi]$, on prend **$\varphi = 0$**.

  *Modèle validé :* $h(t) = 5,5 \cos(0,5058 t) + 6,5$.

---

#### 2. Calcul de la hauteur d'eau à $t = 6$ heures
On substitue $t = 6$ dans l'expression de $h(t)$ :
$$h(6) = 5,5 \cos\left(\frac{2\pi}{12,42} \times 6\right) + 6,5$$
$$h(6) = 5,5 \cos\left(\frac{12\pi}{12,42}\right) + 6,5$$
En calculant la valeur numérique (attention à bien paramétrer la calculatrice en **radians**) :
$$\frac{12\pi}{12,42} \approx 3,0347 \text{ rad}$$
$$\cos(3,0347) \approx -0,9991$$
$$h(6) = 5,5 \times (-0,9991) + 6,5 \approx -5,495 + 6,5 = 1,005 \text{ mètres}$$
**Interprétation :** À $08$h$00$, la mer est proche de sa basse mer ($1,0$ mètre).

---

#### 3. Résolution de l'inéquation d'accessibilité
On cherche les instants $t \in [0 ; 12,42]$ tels que $h(t) \ge 8,0$ :
$$5,5 \cos(\omega t) + 6,5 \ge 8,0$$
$$5,5 \cos(\omega t) \ge 1,5$$
$$\cos(\omega t) \ge \frac{1,5}{5,5} = \frac{3}{11} \approx 0,2727$$

Sur le cercle trigonométrique, posons $X = \omega t$. On cherche $X$ tel que $\cos(X) \ge \frac{3}{11}$.
La valeur seuil est $\alpha = \arccos\left(\frac{3}{11}\right) \approx 1,295$ rad.
Sur une période, l'inéquation est vérifiée pour $X \in [-\alpha ; \alpha]$. Puisque nous étudions la descente de la marée depuis $t = 0$ (où $X=0$), l'intervalle sur la première moitié de marée correspond à :
$$-\alpha \le \omega t \le \alpha$$
Comme $t \ge 0$, cela donne $0 \le t \le \frac{\alpha}{\omega}$.

Calculons la borne temporelle :
$$t \le \frac{1,295}{0,5058} \approx 2,56 \text{ heures}$$

Convertissons $0,56$ heure en minutes : $0,56 \times 60 \approx 34$ minutes.
**Conclusion :** Le port est accessible de $t = 0$ (pleine mer à $02$h$00$) jusqu'à $t \approx 2$h$34$ (soit $04$h$34$ du matin). Au-delà, la hauteur d'eau devient inférieure au seuil critique de sécurité de $8,0$ mètres.

---

#### 4. Analyse critique et limites du modèle
L'écart constaté ($15$ cm) entre la valeur théorique et la mesure marégraphique s'explique par plusieurs limites inhérentes au modèle mathématique :
1. **Les conditions météorologiques non prises en compte :** Une baisse de la pression atmosphérique (effet barométrique) ou un vent fort de secteur contraire peuvent provoquer une surcote ou une décote significative du niveau marin par rapport à la marée astronomique pure.
2. **L'hypothèse d'harmonicité simple :** Le profil réel de la marée n'est pas une sinusoïde parfaite (courbe de sine simple), en raison des harmonicité des eaux peu profondes qui déforment l'onde de marée lors de son approach des côtes.

**Esprit critique :** Un modèle purement déterministe offre une approximation statistique indispensable mais présente un risque résiduel. En milieu maritime, la décision opérationnelle ne peut reposer uniquement sur la théorie mathématique : elle doit être combinée à de la météo-océanographie en temps réel et à des mesures in situ (capteurs marégraphiques connectés).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
