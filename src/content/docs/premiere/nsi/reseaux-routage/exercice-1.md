---
title: "Exercice 1 : Algorithmes de routage RIP et OSPF"
description: "Application pratique du chapitre Réseaux informatiques et routage"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'interconnexion des réseaux selon le modèle de l'Internet (suite des protocoles TCP/IP), le routage des paquets de données repose sur des protocoles dits « intérieurs » (IGP - *Interior Gateway Protocol*). Deux protocoles historiques et fondamentaux structurent l'apprentissage en classe de Première NSI : **RIP** (*Routing Information Protocol*) et **OSPF** (*Open Shortest Path First*).

Considérons un système autonome (AS) composé de $5$ routeurs interconnectés, notés $R_A$, $R_B$, $R_C$, $R_D$ et $R_E$. Les liens entre ces routeurs possèdent des caractéristiques techniques hétérogènes (débit, temps de propagation, charge). Le tableau suivant synthétise les métriques associées à chaque liaison directe :

| Liaison | Métrique RIP (Nombre de sauts) | Métripte OSPF (Coût lié au débit : $\frac{10^8}{\text{débit en b/s}}$) |
| :---: | :---: | :---: |
| $(R_A, R_B)$ | $1$ | $10$ |
| $(R_A, R_C)$ | $1$ | $20$ |
| $(R_B, R_C)$ | $1$ | $5$ |
| $(R_B, R_D)$ | $1$ | $50$ |
| $(R_C, R_D)$ | $1$ | $10$ |
| $(R_C, R_E)$ | $1$ | $40$ |
| $(R_D, R_E)$ | $1$ | $5$ |

*Note scientifique :* Le protocole RIP utilise l'algorithme de Bellman-Ford (basé sur la distance vectorielle) avec une métrique fixe appelée « nombre de sauts », plafonnée à $15$ pour éviter le bouclage persistant (le saut $16$ étant considéré comme l'infini). Le protocole OSPF utilise l'algorithme de Dijkstra (basé sur l'état des liens), où le coût est inversement proportionnel à la bande passante de la liaison, favorisant les liens à haut débit.

---

### ❓ Énoncé

1. **Formalisation et RIP :** En appliquant le protocole RIP (algorithme de Bellman-Ford), déterminez la table de routage finale du routeur $R_A$ vers tous les autres routeurs du réseau. Explicitez le chemin optimal et la métrique associée pour chaque destination.
2. **Formalisation et OSPF :** En appliquant le protocole OSPF (algorithme de Dijkstra), déterminez l'arbre des plus courts chemins ayant pour racine le routeur $R_A$. Donnez la table de routage résultante pour $R_A$.
3. **Analyse critique comparée :** Un flux de données massif doit être transféré de $R_A$ vers $R_E$. Les liaisons $(R_A, R_C)$, $(R_C, R_D)$ et $(R_D, R_E)$ disposent d'un débit très élevé, tandis que $(R_A, R_B)$, $(R_B, R_C)$ et $(R_B, R_D)$ utilisent une technologie vieillissante à bas débit. 
   Comparez les choix de routage effectués par RIP et par OSPF pour acheminer ce flux. Quel protocole offre la meilleure efficience dans ce scénario ? Justifiez votre réponse à partir des métriques.
4. **Limites des modèles :** Le protocole RIP actualise ses tables toutes les $30 \text{ secondes}$ par une diffusion globale (*broadcast*) de son vecteur de distances. Le protocole OSPF n'envoie des messages de mise à jour (*Link-State Advertisements*) qu'en cas de modification de la topologie. Discutez de l'impact de ces deux approches sur la bande passante disponible d'un grand réseau d'entreprise, en faisant apparaître un compromis technique.

---

### 💡 Indice de méthode

* **Pour RIP :** Listez les chemins possibles de $R_A$ vers chaque destination en comptant le nombre d'arêtes (sauts). Retenez celui qui minimise ce nombre, indépendamment du débit réel des liens.
* **Pour OSPF :** Utilisez l'algorithme de Dijkstra en partant de $R_A$. À chaque étape, sélectionnez le nœud non visité ayant le coût cumulé minimal, puis mettez à jour les coûts des voisins directs.
* **Pour l'analyse critique :** Mettez en regard la simplicité algorithmique et la neutralité topologique de RIP face à la complexité de calcul et l'optimisation par la bande passante d'OSPF.

---

### 📋 Correction détaillée pas à pas

#### 1. Table de routage RIP ($R_A$)
Le protocole RIP minimise le nombre de routeurs traversés (sauts). 
* Vers $R_B$ : $R_A \to R_B$ ($\text{Métrique} = 1$)
* Vers $R_C$ : $R_A \to R_C$ ($\text{Métrique} = 1$)
* Vers $R_D$ : Deux chemins à $2$ sauts s'offrent à lui : $R_A \to R_B \to R_D$ ou $R_A \to R_C \to R_D$. (On choisit l'un d'eux arbitrairement, par exemple via $R_B$, $\text{Métrique} = 2$).
* Vers $R_E$ : Chemin optimal en $3$ sauts : $R_A \to R_C \to R_D \to R_E$ (ou $R_A \to R_B \to R_D \to R_E$). $\text{Métrique} = 3$.

*Table de routage RIP pour $R_A$ :*
| Destination | Prochain saut | Métrique (Sauts) |
| :---: | :---: | :---: |
| $R_B$ | $R_B$ | $1$ |
| $R_C$ | $R_C$ | $1$ |
| $R_D$ | $R_B$ | $2$ |
| $R_E$ | $R_C$ | $3$ |

---

#### 2. Table de routage OSPF ($R_A$) via Dijkstra
Appliquons l'algorithme de Dijkstra avec $R_A$ comme racine (coût initial $0$) :
* **Étape initiale :** 
  * $D(R_A) = 0$
  * $D(R_B) = 10$ (via $R_A$)
  * $D(R_C) = 20$ (via $R_A$)
  * $D(R_D) = \infty$, $D(R_E) = \infty$
  * Nœuds visités : $\{R_A\}$

* **Étape 1 :** Le plus petit coût non visité est $R_B$ ($10$).
  * Voisins de $R_B$ : $R_C$ (coût $5$, total $10+5=15 < 20$, on met à jour $R_C$ via $R_B$), $R_D$ (coût $50$, total $10+50=60$).
  * Nœuds visités : $\{R_A, R_B\}$

* **Étape 2 :** Le plus petit coût non visité est $R_C$ ($15$ via $R_B$).
  * Voisins de $R_C$ : $R_D$ (coût $10$, total $15+10=25 < 60$, mise à jour de $R_D$), $R_E$ (coût $40$, total $15+40=55$).
  * Nœuds visités : $\{R_A, R_B, R_C\}$

* **Étape 3 :** Le plus petit coût non visité est $R_D$ ($25$ via $R_C$, soit $R_A \to R_B \to R_C \to R_D$).
  * Voisins de $R_D$ : $R_E$ (coût $5$, total $25+5=30 < 55$, mise à jour de $R_E$ via $R_D$).
  * Nœuds visités : $\{R_A, R_B, R_C, R_D\}$

* **Étape 4 :** Visite de $R_E$ (coût minimal $30$, chemin $R_A \to R_B \to R_C \to R_D \to R_E$).

*Table de routage OSPF pour $R_A$ :*
| Destination | Prochain saut | Coût OSPF total |
| :---: | :---: | :---: |
| $R_B$ | $R_B$ | $10$ |
| $R_C$ | $R_B$ | $15$ |
| $R_D$ | $R_B$ | $25$ |
| $R_E$ | $R_B$ | $30$ |

---

#### 3. Analyse critique comparée pour le transfert vers $R_E$
* **Choix de RIP :** RIP choisit le chemin $R_A \to R_C \to R_D \to R_E$ car il comporte $3$ sauts (contre $4$ par l'autre chemin). Or, l'énoncé indique que les liaisons $(R_A, R_C)$, $(R_C, R_D)$ et $(R_D, R_E)$ ont un débit très élevé. Dans ce cas précis, le choix de RIP coïncide par chance avec un chemin performant, mais uniquement parce que la topologie s'y prête, et non par analyse de la bande passante.
* **Choix d'OSPF :** OSPF évalue les coûts liés aux débits réels. Le chemin retenu est $R_A \to R_B \to R_C \to R_D \to R_E$ avec un coût cumulé de $30$. 
* **Conclusion sur l'efficience :** Bien qu'empruntant plus de sauts ($4$ au lieu de $3$), OSPF démontre une meilleure efficience si le lien $(R_A, R_B)$ et les suivants possèdent des caractéristiques de transmission supérieures ou si l'équilibrage de charge est requis. RIP montre ici sa limite intrinsèque : il ignore la qualité physique réelle du canal de transmission au profit d'une simple minimisation topologique.

---

#### 4. Discussion sur les limites et compromis des protocoles
* **Impact de RIP :** La diffusion périodique (toutes les $30 \text{ s}$) de tables complètes génère un trafic de contrôle proportionnel au nombre de routeurs dans le réseau, même en l'absence de changement topologique. Sur de grands réseaux, cela consomme inutilement une part non négligeable de la bande passante. De plus, sa convergence est lente, ce qui peut induire des boucles de routage temporaires.
* **Impact d'OSPF :** OSPF n'envoie des messages qu'en cas d'événement (*event-driven*), ce qui préserve la bande passante en régime stable. Cependant, l'algorithme de Dijkstra demande des calculs de plus anamorphose des graphes plus intensifs pour le processeur des routeurs lors des modifications topologiques, nécessitant des ressources matérielles plus importantes.
* **Compromis :** Simplicité de mise en œuvre et faible coût de calcul pour RIP (idéal pour les petits réseaux homogènes) versus haute complexité algorithmique, réactivité et optimisation fine de la bande passante pour OSPF (indispensable pour les réseaux d'entreprise étendus et hétérogènes).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
