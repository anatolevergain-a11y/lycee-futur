---
title: "Exercice 3 : Dynamique des populations et équilibres écosystémiques"
description: "Application pratique du chapitre Biodiversité, état et dynamique"
---

### 🌐 Contexte & Données scientifiques

La dynamique des populations étudie les variations de l'abondance des espèces au cours du temps et les facteurs qui les régulent. L'analyse de ces variations repose sur des modèles mathématiques et des suivis de terrain dont les incertitudes méthodologiques doivent être prises en compte.

Considérons un écosystème insulaire tempéré où interagissent une population de prédateurs (le renard roux, *Vulpes vulpes*) et une population de proies (le campagnol des champs, *Microtus arvalis*). Un suivi écologique a été mené sur 5 ans afin de modéliser leur relation trophique. 

La variation de la taille de la population de proies $N_{\text{proie}}$ en fonction du temps $t$ (exprimée en mois) peut être approchée par l'équation différentielle simplifiée suivante, intégrant un terme de croissance et un terme de prédation :

$$\frac{dN_{\text{proie}}}{dt} = r \cdot N_{\text{proie}} \left(1 - \frac{N_{\text{proie}}}{K}\right) - a \cdot N_{\text{proie}} \cdot N_{\text{prédateur}}$$

Avec les paramètres mesurés sur le terrain :
* $r = 0{,}15\text{ mois}^{-1}$ : taux intrinsèque de croissance de la population de proies.
* $K = 5000$ individus : capacité charge de l'environnement pour les proies (ressources limitantes).
* $a = 0{,}0002\text{ (individus})^{-1}\text{ mois}^{-1}$ : coefficient d'efficacité de la prédation.

Le tableau ci-dessous présente les effectifs moyens relevés par capture-marquage-recapture (CMR) au milieu de chaque printemps :

| Année ($t$ en années) | Effectif estimé des Proies ($N_{\text{proie}}$) | Intervalle de confiance à 95 % (Proies) | Effectif estimé des Prédateurs ($N_{\text{prédateur}}$) |
| :---: | :---: | :---: | :---: |
| 0 | 1200 | $\pm 150$ | 80 |
| 1 | 3100 | $\pm 320$ | 150 |
| 2 | 4500 | $\pm 480$ | 320 |
| 3 | 1800 | $\pm 210$ | 290 |
| 4 | 950 | $\pm 110$ | 120 |

*Note méthodologique : Les méthodes d'estimation par capture-marquage-recapture comportent des biais inhérents (ex. : "effet piège", hétérocédiscite, non-respect de l'hypothèse de fermeture de la population), ce qui explique la présence d'intervalles de confiance qu'il convient de ne pas négliger lors de toute interprétation rigoureuse.*

---

### ❓ Énoncé

1. **Analyser** l'évolution des effectifs des deux populations entre l'année 0 et l'année 2 en mettant en évidence le lien de cause à effet entre la ressource trophique et la dynamique du prédateur.
2. À partir de l'équation différentielle fournie, **calculer** la valeur instantanée de la variation de la population de proies ($\frac{dN_{\text{proie}}}{dt}$) pour l'année 2 ($N_{\text{proie}} = 4500$ et $N_{\text{prédateur}} = 320$). **Interpréter** le signe de ce résultat quant à l'évolution future de la population.
3. **Discuter** de la pertinence écologique à long terme de ce modèle mathématique. En vous appuyant sur vos connaissances et sur les limites des données de terrain, expliquez pourquoi un écosystème réel ne suit jamais une courbe théorique parfaite et stable indéfiniment.

---

### 💡 Indice de méthode

* **Question 1 :** Décrivez d'abord la phase de croissance des proies, puis observez l'effet de cette augmentation sur le nombre de prédateurs avec un léger décalage temporel (inertie démographique).
* **Question 2 :** Remplacez chaque variable par sa valeur numérique dans l'équation. Respectez les priorités opératoires : calculez d'abord le taux de croissance intrinsèque modulé par la capacité de charge, puis soustrayez la mortalité due à la prédation.
* **Question 3 :** Pensez aux facteurs stochastiques (aléatoires) non pris en compte par le modèle (aléas climatiques, maladies, migrations, variabilité génétique) ainsi qu'aux marges d'erreur statistiques inhérentes au terrain.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse de l'évolution des effectifs (Année 0 à Année 2)
* **Observation :** Entre l'année 0 et l'année 2, la population de proies augmente fortement, passant de $1200$ à $4500$ individus. Avec un décalage d'une année (ou concomitamment mais de manière amplifiée), la population de prédateurs augmente également, passant de $80$ à $320$ individus à l'année 2.
* **Relation trophique :** L'abondance des proies offre une ressource énergétique abondante permettant aux prédateurs de maximiser leur succès reproductif et leur survie. La dynamique du prédateur est donc directement dépendante de la disponibilité en proies (contrôle *bottom-up* dans un premier temps). Cependant, l'augmentation massive des prédateurs exerce en retour une pression de prédation accrue (contrôle *top-down*).

#### 2. Calcul et interprétation de la variation ($\frac{dN_{\text{proie}}{dt}$)
* **Application numérique pour l'année 2 :**
  $$\frac{dN_{\text{proie}}}{dt} = 0{,}15 \times 4500 \times \left(1 - \frac{4500}{5000}\right) - (0{,}0002 \times 4500 \times 320)$$

* **Étape par étape :**
  1. Calcul du terme lié à la capacité de charge : 
     $$1 - \frac{4500}{5000} = 1 - 0{,}9 = 0{,}1$$
  2. Calcul de la croissance naturelle des proies : 
     $$0{,}15 \times 4500 \times 0{,}1 = 67{,}5$$
  3. Calcul du terme de mortalité par prédation : 
     $$0{,}0002 \times 4500 \times 320 = 288$$
  4. Calcul final : 
     $$\frac{dN_{\text{proie}}}{dt} = 67{,}5 - 288 = -220{,}5\text{ individus/mois}$$

* **Interprétation scientifique :** 
  Le résultat est **négatif** ($-220{,}5$). Cela signifie que la population de proies n'est plus en croissance : le taux de mortalité engendré par la forte pression des prédateurs (et la rousseur relative des ressources proches de $K$) dépasse la natalité. Cela explique logiquement la chute observée des effectifs de proies à l'année 3 ($1800$ individus).

#### 3. Discussion critique du modèle et de la réalité écosystémique
* **Limites du modèle mathématique :** 
  Ce modèle déterministe pose des hypothèses simplificatrices fortes. Il suppose que les paramètres ($r$, $K$, $a$) sont constants, ce qui est biologiquement faux. Par exemple, la capacité de charge $K$ varie selon les conditions météorologiques annuelles (sécheresse, rigueur de l'hiver).
* **Incertitudes de terrain et stochasticité :** 
  Les données de terrain s'accompagnent d'intervalles de confiance (ex. $4500 \pm 480$). Toute conclusion absolue est donc statistiquement proscrite ; il s'agit de tendances. De plus, des facteurs stochastiques (épidémies décimant les campagnols indépendamment des renards, incendies, fragmentation de l'habitat par l'activité humaine) peuvent perturber brutalement les équilibres.
* **Conclusion nuancée :** 
  Les équilibres écosystémiques ne sont pas des états statiques figés, mais des dynamiques fluctuantes oscillantes autour d'équilibres instables ou dynamiques. Le concept d'équilibre doit être compris non pas comme une stabilité linéaire, mais comme une résilience globale du système face aux perturbations.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
