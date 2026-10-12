---
title: "Exercice 1 : Codage d'information et nombres premiers"
description: "Application pratique du chapitre Arithmétique et multiples"
---

### 🌐 Contexte & Données scientifiques

Dans les systèmes modernes de transmission et de stockage numérique, l'information est représentée sous forme de séquences de bits ($0$ ou $1$). Pour s'assurer qu'un message transmis sur un canal bruité (par exemple, par satellite ou par fibre optique) n'a pas été altéré, on utilise des méthodes de contrôle d'intégrité basées sur l'arithmétique modulaire et les propriétés des nombres premiers.

Considérons un protocole simplifié de transmission d'un bloc de données de taille fixe. Le message initial est un nombre entier naturel $M$. Pour sécuriser ce message, on lui associe une clé de contrôle $C$ calculée à l'aide d'un nombre premier $p$ et d'un générateur $g$. 

Cependant, tout système de codage présente un compromis entre la **robuste détection des erreurs** (fiabilité) et le **surcoût informationnel** (vitesse de transmission et bande passante). Les modèles mathématiques utilisés doivent intégrer la probabilité d'apparition d'erreurs aléatoires, souvent modélisées par des lois statistiques, tout en tenant compte de la complexité algorithmique pour le calcul des nombres premiers de grande taille.

---

### ❓ Énoncé

Soit $p = 13$ un nombre premier utilisé comme paramètre de base dans un système de contrôle. On définit une fonction de hachage simplifiée attribuant à un message $M$ (représenté par un entier non nul) une valeur de contrôle $V$ telle que :
$$V \equiv M \times 17 \pmod{p}$$

1. **Restitution de propriétés arithmétiques :** 
   Déterminer l'ensemble des multiples strictement positifs de $13$ inférieurs à $50$. Rappeler la définition mathématique d'un nombre premier et justifier pourquoi $13$ satisfait cette définition.

2. **Analyse du système de codage :** 
   Un opérateur transmet un message dont la valeur numérique est $M = 29$. 
   Calculer la valeur de contrôle $V$ associée, comprise entre $0$ et $p-1$. Détailler les étapes de la division euclidienne utilisée.

3. **Étude des collisions et limites du modèle :** 
   Supposons qu'un second message $M'$ donne la même valeur de contrôle $V$. Mathématiquement, cela se traduit par la relation $M' \equiv M \pmod{p}$.
   Si $M' = 42$, ce message génère-t-il une collision avec le message $M = 29$ pour le paramètre $p = 13$ ? Conclure sur la capacité de ce système à détecter des modifications de données.

4. **Approche critique et compromis :** 
   Dans la pratique, pour sécuriser des données bancaires, on utilise des nombres premiers $p$ possédant plusieurs centaines de chiffres. Expliquer en argumentant quel est le principal compromis informatique et physique entre l'utilisation de très grands nombres premiers et les ressources de calcul disponibles.

---

### 💡 Indice de méthode

* **Question 1 :** Pour la liste des multiples, procédez par multiplication successive de $13$ par $1, 2, 3...$ Pour la primalité, testez la divisibilité par les nombres premiers inférieurs à $\sqrt{13}$.
* **Question 2 :** Simplifiez d'abord le produit $M \times 17$ en utilisant les congruences modulo $13$, ou effectuez la division euclidienne du résultat par $13$ pour trouver le reste.
* **Question 3 :** Deux nombres sont congrous modulo $13$ si leur différence est un multiple de $13$. Calculez $M' - M$ et analysez le résultat.
* **Question 4 :** Pensez en termes de complexité algorithmique : quel est l'impact sur le temps de calcul et l'énergie consommée par un processeur lorsque la taille des nombres manipulés augmente exponentiellement ?

---

### 📋 Correction détaillée pas à pas

1. **Restitution de propriétés arithmétiques :**
   * Les multiples strictement positifs de $13$ inférieurs à $50$ s'obtiennent en multipliant $13$ par les entiers $1, 2, 3$ et $4$ :
     * $13 \times 1 = 13$
     * $13 \times 2 = 26$
     * $13 \times 3 = 39$
     * $13 \times 4 = 52$ (supérieur à $50$, donc exclu).
     L'ensemble recherché est $\lbrace 13 \text{ ; } 26 \text{ ; } 39 \rbrace$.
   * Un nombre premier est un entier naturel qui admet exactement deux diviseurs distincts entiers et positifs : $1$ et lui-même. 
   * Le nombre $13$ n'est divisible que par $1$ et $13$ (car aucun nombre premier inférieur à $\sqrt{13} \approx 3,61$, c'est-à-dire $2$ et $3$, ne divise $13$). $13$ est donc bien un nombre premier.

2. **Analyse du système de codage :**
   * Pour $M = 29$, calculons le produit $M \times 17$ :
     $$29 \times 17 = 493$$
   * Cherchons le reste de la division euclidienne de $493$ par $p = 13$ :
     Effectuons la division : $493 \div 13 \approx 37,92$.
     Calculons $37 \times 13 = 481$.
     Par conséquent :
     $$493 = 37 \times 13 + 12$$
   * Le reste étant $12$, la valeur de contrôle est $V = 12$ (notons que $12 \in [0 \text{ ; } 12]$).

3. **Étude des collisions et limites du modèle :**
   * Testons si $M' = 42$ et $M = 29$ génèrent une collision, c'est-à-dire s'ils ont la même valeur de contrôle modulo $13$.
     Calculons $42 \times 17 \pmod{13}$ :
     Remarquons que $42 = 3 \times 13 + 3$, donc $42 \equiv 3 \pmod{13}$.
     De même, $17 = 1 \times 13 + 4$, donc $17 \equiv 4 \pmod{13}$.
     Ainsi, $42 \times 17 \equiv 3 \times 4 \equiv 12 \pmod{13}$.
   * La valeur de contrôle pour $M' = 42$ est également $12$. Il y a donc **collision** : deux messages différents ($29$ et $42$) produisent la même valeur de contrôle.
   * *Limite du modèle :* Ce système très simple montre que l'espace des valeurs de contrôle possibles est restreint à $13$ valeurs (de $0$ à $12$). Par le principe des tiroirs, une infinité de messages différents partagent la même valeur de contrôle, ce qui rend ce code inefficace pour une sécurité robuste face à des modifications malveillantes.

4. **Approche critique et compromis :**
   * L'utilisation de nombres premiers extrêmement grands renforce considérablement la sécurité mathématique en augmentant l'espace des clés et en rendant les attaques par force brute informatiquement infaisables (car le nombre d'opérations nécessaires dépasse les capacités des supercalculateurs actuels dans un temps raisonnable).
   * Néanmoins, ce modèle met en évidence un **compromis technologique majeur (coûts/bénéfices)** :
     * **En termes de calcul :** La manipulation d'entiers de grande taille nécessite des algorithmes complexes d'arithmétique multiprécision, augmentant la charge processeur (CPU).
     * **En termes énergétiques et temporels :** Cela engendre une latence plus élevée dans les transmissions de données et une consommation d'énergie accrue, ce qui peut être problématique pour des objets connectés aux ressources limitées (capteurs IoT, smartphones en fin de batterie). Le choix du modèle dépend donc toujours du niveau de risque accepté face aux contraintes matérielles.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
