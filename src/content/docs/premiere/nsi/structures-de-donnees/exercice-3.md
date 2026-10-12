---
title: "Exercice 3 : Complexité temporelle et spatiale des algorithmes"
description: "Application pratique du chapitre Structures de données linéaires"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du traitement de flux de données continus (par exemple, des capteurs IoT ou des historiques de transactions bancaires), le choix de la structure de données linéaire (tableau dynamique vs liste chaînée) et la nature des algorithmes associés ont un impact direct sur la scalabilité des systèmes. 

Considérons un ensemble de $N$ éléments stockés séquentiellement. Soit $T$ le temps d'exécution d'un algorithme et $S$ l'espace mémoire nécessaire. Les mesures empiriques montrent souvent un écart entre la théorie de la notation grand $O$ (qui s'intéresse au comportement asymptotique lorsque $N \to +\infty$) et la réalité matérielle (cache CPU, pagination mémoire).

L'analyse de complexité repose sur les hypothèses suivantes :
- Une opération élémentaire (affectation, comparaison, accès indicé de base) s'exécute en temps constant $O(1)$.
- Le coût spatial d'un pointeur dans une liste chaînée en architecture 64 bits est de $8$ octets, auxquels s'ajoutent $8$ octets pour la valeur stockée (dans le cas d'un entier de type `int`). Dans un tableau, les données sont contiguës, éliminant le surcoût lié aux pointeurs ($8$ octets par élément pour les données seules).

---

### ❓ Énoncé

Soit une structure de données linéaire devant stocker $N$ entiers. On souhaite implémenter une fonction de recherche et une fonction d'insertion en début de structure.

1. **Analyse temporelle théorique :** Exprimer, en notation grand $O$, la complexité temporelle au pire des cas ($\mathcal{O}$) pour l'insertion d'un élément au tout début d'un tableau dynamique (type `list` en Python) d'une part, et d'une liste chaînée d'autre part. Justifier rigoureusement en fonction de $N$.
2. **Modélisation et compromis spatial :** On considère $N = 10^6$ entiers. En prenant en compte l'hypothèse architecturale où un nœud de liste chaînée nécessite un espace total de $16$ octets (valeur + adresse du successeur) et un tableau contigu nécessite $8$ octets par entier, calculer l'empreinte spatiale maximale (en mébioctets, Mio) pour chaque structure. Quel compromis met-on en évidence entre complexité temporelle d'insertion et empreinte spatiale ?
3. **Étude expérimentale et limites du modèle :** Lors de benchmarks, on observe que l'accès à un élément par son indice est en réalité plus rapide dans un tableau que dans une liste chaînée, même si les deux structures peuvent présenter des complexités d'accès différentes selon les cas. En vous appuyant sur le fonctionnement matériel des processeurs (notamment la hiérarchie cache), expliquez pourquoi le modèle asymptotique théorique présente des limites pour prédire les performances absolues.
4. **Démonstration algorithmique :** Écrire en Python une fonction de recherche séquentielle d'un élément dans une liste chaînée. Déterminer son invariant de boucle et en déduire sa complexité temporelle au pire des cas.

---

### 💡 Indice de méthode

- **Pour la Q1 :** Sondez l'impact du déplacement des éléments contigus en mémoire lors d'une insertion en position 0 dans un tableau.
- **Pour la Q2 :** Rappelez qu' $1 \text{ Mio} = 2^{20} \text{ octets}$. Multipliez le nombre d'éléments par la taille unitaire en octets propre à chaque structure.
- **Pour la Q3 :** Pensez à la notion de *localité spatiale* et au préchargement des lignes de cache du processeur.
- **Pour la Q4 :** Un invariant de boucle doit être vrai avant l'entrée dans la boucle, conservé à chaque tour, et permettre de prouver la correction de l'algorithme à la sortie.

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse temporelle théorique
- **Tableau dynamique :** Pour insérer un élément à l'indice $0$, tous les $N$ éléments existants doivent être décalés d'un cran vers la droite pour libérer la première case. Le nombre d'opérations est proportionnel à $N$. La complexité temporelle au pire des cas est donc de $\mathcal{O}(N)$.
- **Liste chaînée :** L'insertion en tête (début) consiste simplement à créer un nouveau maillon et à faire pointer sa référence vers l'ancienne tête de liste. Cette opération ne dépend pas de $N$. La complexité temporelle au pire des cas est de $\mathcal{O}(1)$.

#### 2. Modélisation et compromis spatial
Pour $N = 10^6$ éléments :
- **Tableau contigu :** 
  $$\text{Espace}_{\text{tableau}} = 10^6 \times 8 \text{ octets} = 8 \times 10^6 \text{ octets}$$
  En convertissant en Mio ($8 \times 10^6 / (1024 \times 1024)$) : 
  $$\text{Espace}_{\text{tableau}} \approx 7{,}63 \text{ Mio}$$
- **Liste chaînée :** 
  $$\text{Espace}_{\text{liste}} = 10^6 \times 16 \text{ octets} = 16 \times 10^6 \text{ octets} \approx 15{,}26 \text{ Mio}$$

*Compromis :* La liste chaînée offre une excellente complexité temporelle pour l'insertion en tête ($\mathcal{O}(1)$ contre $\mathcal{O}(N)$), mais au détriment d'un coût spatial doublé dans ce modèle ($15{,}26 \text{ Mio}$ contre $7{,}63 \text{ Mio}$) en raison du stockage systématique des pointeurs.

#### 3. Étude expérimentale et limites du modèle
La notation grand $O$ néglige les constantes multiplicatives et l'architecture matérielle. Les tableaux bénéficient de la **localité spatiale** : lorsque le processeur charge une donnée en mémoire cache, les éléments contigus le sont également. L'accès séquentiel ou par indice profite ainsi des optimisations matérielles (préchargement ou *prefetching*). À l'inverse, les éléments d'une liste chaînée sont dispersés en mémoire vive (RAM), ce qui provoque de fréquents défauts de cache (*cache misses*), ralentissant considérablement l'exécution réelle malgré une complexité algorithmique formellement identique ou comparable.

#### 4. Démonstration algorithmique

```python
class Maillon:
    def __init__(self, valeur, suivant=None):
        self.valeur = valeur
        self.suivant = suivant

def recherche_liste(tete, cible):
    courant = tete
    while courant is not None:
        if courant.valeur == cible:
            return True
        courant = courant.suivant
    return False
```

- **Invariant de boucle :** À chaque début d'itération, la `cible` n'a pas été trouvée dans les maillons déjà parcourus depuis la `tete`.
- **Preuve & Complexité :** Si la cible est absente ou située en fin de liste, l'algorithme parcourt les $N$ maillons. Au pire des cas, le nombre d'itérations est égal à $N$. La complexité temporelle est donc de $\mathcal{O}(N)$.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
