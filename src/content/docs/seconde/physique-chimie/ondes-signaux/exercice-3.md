---
title: "Exercice 3 : Signal et information : capteurs et numérisation"
description: "Application pratique du chapitre Ondes et signaux"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la modernisation d'une station météorologique autonome isolée, on s'intéresse à l'acquisition et au traitement numérique d'un signal analogique issu d'un capteur de température. Le système doit convertir une grandeur physique continue du milieu extérieur en données exploitables par un microcontrôleur.

Le signal électrique délivré par le capteur est une tension $U(t)$ variant entre $0\text{ V}$ et $5\text{ V}$. 

La numérisation de ce signal repose sur deux étapes fondamentales :
1. **L'échantillonnage** : le signal est capturé à intervalles de temps réguliers, notés $T_e$, appelé période d'échantillonnage. La fréquence d'échantillonnage est définie par $f_e = \frac{1}{T_e}$.
2. **La quantification** : l'amplitude du signal continu est arrondie à l'une des valeurs discrètes permises par le convertisseur analogique-numérique (CAN). Un CAN de $n$ bits possède $N = 2^n$ états possibles.

**Données techniques du système :**
* Plage de tension mesurée : $[U_{\min} ; U_{\max}] = [0\text{ V} ; 5\text{ V}]$
* Nombre de bits du CAN : $n = 8\text{ bits}$
* Fréquence maximale du signal physique à mesurer : $f_{\max} = 50\text{ Hz}$

Le pas de quantification (ou résolution) $\q$ du convertisseur est donné par la relation :
$$q = \frac{U_{\max} - U_{\min}}{2^n - 1}$$

---

### ❓ Énoncé

1. **Calcul de la résolution :** Calculer la valeur du pas de quantification $q$ de ce convertisseur en volts ($\text{V}$). Exprimez le résultat avec un nombre adapté de chiffres significatifs.
2. **Analyse d'une mesure :** Lors d'une mesure, le capteur délivre une tension de $U = 2,15\text{ V}$. Déterminer le code décimal (comprends entre $0$ et $2^n - 1$) associé à cette tension après quantification.
3. **Contrainte d'échantillonnage :** Rappeler la condition théorique minimale (critère de Shannon-Nyquist) liant la fréquence d'échantillonnage $f_e$ à la fréquence maximale $f_{\max}$ du signal. Calculer la valeur minimale de $f_e$ pour ce système.
4. **Esprit critique et compromis technique :** Un technicien propose de multiplier par 10 la fréquence d'échantillonnage $f_e$ pour "améliorer la précision" des relevés de température. En analysant les limites des modèles et les contraintes réelles (stockage, énergie, traitement des données), discutez de la pertinence absolue de ce choix pour une station météo autonome.

---

### 💡 Indice de méthode

* *Question 1 :* Pensez à calculer d'abord le nombre total d'états $N = 2^n$ pour $n = 8$. Veillez à bien soustraire $1$ au dénominateur car le premier état correspond à la valeur $0\text{ V}$.
* *Question 2 :* Le code décimal $k$ correspond au nombre de "pas" $q$ contenus dans la tension mesurée. On arrondira à l'entier le plus proche puisque le convertisseur attribue un code entier.
* *Question 3 :* Le théorème de Shannon-Nyquist énonce que $f_e > 2 \cdot f_{\max}$.
* *Question 4 :* Ne confondez pas la *résolution en amplitude* (liée au nombre de bits) et la *résolution temporelle* (liée à l'échantillonnage). Pensez aux limites énergétiques d'une station autonome.

---

### 📋 Correction détaillée pas à pas

1. **Calcul de la résolution $q$ :**
   * Le convertisseur est un modèle à $n = 8\text{ bits}$. Le nombre d'états ou de quantifications possibles est :
     $$N = 2^8 = 256 \text{ états}$$
   * L'étendue de la mesure est $\Delta U = U_{\max} - U_{\min} = 5\text{ V} - 0\text{ V} = 5\text{ V}$.
   * Le pas de quantification $q$ vaut donc :
     $$q = \frac{5}{256 - 1} = \frac{5}{255} \approx 0,0196\text{ V}$$
   * La résolution de ce capteur est donc d'environ $19,6\text{ mV}$.

2. **Détermination du code décimal pour $U = 2,15\text{ V}$ :**
   * Le code décimal $k$ associé à une tension $U$ se calcule par la relation :
     $$k = \text{round}\left(\frac{U - U_{\min}}{q}\right)$$
   * Application numérique :
     $$k = \frac{2,15 - 0}{0,0196} \approx 109,69$$
   * En arrondissant à l'entier le plus proche (arrondi informatique standard), le code décimal transmis par le CAN est **$110$**.

3. **Fréquence d'échantillonnage minimale :**
   * Selon le critère de Shannon-Nyquist, pour qu'un signal de fréquence maximale $f_{\max}$ puisse être numérisé sans perte d'information (repliement de spectre), la fréquence d'échantillonnage $f_e$ doit satisfaire :
     $$f_e \ge 2 \cdot f_{\max}$$
   * Avec $f_{\max} = 50\text{ Hz}$ :
     $$f_{e,\min} = 2 \times 50 = 100\text{ Hz}$$
   * La fréquence d'échantillonnage doit donc être supérieure ou égale à $100\text{ Hz}$ (soit $100$ échantillons par seconde).

4. **Discussion critique de la proposition du technicien :**
   * *Analyse de la proposition :* Multiplier $f_e$ par 10 signifierait passer à une fréquence d' $1000\text{ Hz}$. 
   * *Confusion fréquente :* L'augmentation de la fréquence d'échantillonnage améliore la précision *temporelle* (on capture des variations plus rapides), mais elle **n'améliore en rien la résolution en amplitude** (qui dépend uniquement du nombre de bits $n$, ici 8 bits). Pour améliorer la précision de la mesure de température, il faudrait augmenter le nombre de bits du CAN (ex: passer à 12 ou 16 bits) ou utiliser un capteur plus précis.
   * *Contraintes et compromis :* Une station météorologique mesure des grandeurs physiques qui varient lentement (la température ne change pas de manière significative en quelques millisecondes). Suréchantillonner multiplierait par 10 le volume de données à stocker et à transmettre, augmentant proportionnellement la consommation énergétique du système. Pour une station autonome alimentée par batterie ou panneau solaire, ce coût énergétique élevé n'est pas compensé par un bénéfice scientifique mesurable, illustrant un compromis défavorable entre la rigueur du traitement du signal et la faisabilité énergétique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
