---
title: "Exercice 3 : Modélisation UML simplifiée"
description: "Application pratique du chapitre Programmation Orientée Objet (POO)"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'optimisation des réseaux de capteurs environnementaux autonomes, on étudie le déploiement d'une station météorologique connectée. Les contraintes matérielles imposent une modélisation rigoureuse des données pour minimiser l'empreinte mémoire et la consommation énergétique liées aux transmissions radio.

La station gère différents types de capteurs (température, humidité, pression). Chaque capteur génère des mesures à intervalle régulier $T$. On pose $N$ le nombre de mesures stockées en mémoire tampon (buffer) avant l'écriture sur une carte SD. La mémoire disponible allouée au stockage d'une mesure est un paramètre critique : un entier codé sur $2$ octets (16 bits) ou un nombre flottant sur $4$ octets (32 bits).

Le diagramme de classes UML simplifié ci-dessous modélise l'architecture logicielle retenue :

```text
+---------------------------------------------------+
|                     Capteur                       |
+---------------------------------------------------+
| - identifiant : str                               |
| - intervalle : int                                |
| - mesures : list                                  |
+---------------------------------------------------+
| + __init__(identifiant: str, intervalle: int)     |
| + ajouter_mesure(valeur: float) : None            |
| + obtenir_moyenne() : float                       |
+---------------------------------------------------+
                         ▲
                         │
           +-------------┴-------------+
           |                           |
+-----------------------+   +-----------------------+
|   CapteurNumerique    |   |    CapteurBinaire     |
+-----------------------+   +-----------------------+
| - precision : int     |   | - etat_alerte : bool  |
+-----------------------+   +-----------------------+
| + obtenir_moyenne()   |   | + verifier_seuil()    |
+-----------------------+   +-----------------------+
```

Les choix de conception orientée objet reposent ici sur le principe de substitution de Liskov et la factorisation des attributs communs, tout en tenant compte des limites de complexité algorithmique en $O(N)$ pour le calcul des moyennes sur des listes de taille $N$.

---

### ❓ Énoncé

1. **Traduire** le diagramme de classes UML fourni en une implementation Python conforme aux conventions de nommage PEP 8. On veillera à définir la classe mère `Capteur` et sa classe fille `CapteurNumerique`, en incluant les constructeurs (`__init__`) et la gestion des attributs privés (encapsulation).
2. **Analyser** la méthode `obtenir_moyenne()` dans le cas où $N$ mesures sont stockées. Exprimez sa complexité temporelle en fonction de $N$ à l'aide de la notation grand $O$. Discutez des limites de cette approche si $N$ tend vers l'infini (par exemple, $N > 10^6$), et proposez une modification algorithmique ou structurelle pour maintenir une complexité en $O(1)$ pour l'obtention de la moyenne.
3. **Justifier** l'intérêt du mécanisme d'héritage et de la redéfinition de méthode (ovewriting) dans le contexte de la classe `CapteurNumerique` par rapport à une conception monolithique unique. Chiffrez le gain théorique en termes de duplication de code si le système passe de $1$ à $10$ types de capteurs spécialisés partageant 70% de code commun.
4. **Implémenter** le principe de polymorphisme en Python : écrire une fonction externe `traiter_station(capteurs: list)` qui prend une liste d'objets de types dérivés de `Capteur` et appelle leurs méthodes spécifiques de manière transparente, sans instruction conditionnelle de type `isinstance()`.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez le mot-clé `super()` dans le constructeur de la classe fille pour initialiser les attributs hérités de la classe mère. L'encapsulation en Python s'indique par convention avec un double underscore (ex: `__identifiant`) ou un simple underscore pour les membres protégés.
* **Question 2 :** Pour obtenir une complexité en $O(1)$, il faut éviter de reparcourir toute la liste à chaque appel. Considérez la possibilité de stocker des variables d'état incrémentielles (somme cumulée et nombre total de mesures) mises à jour directement lors de l'ajout d'une mesure.
* **Question 3 :** Le calcul du gain de duplication repose sur le ratio entre le code mutualisé dans la classe mère et le code spécifique aux classes filles. Exprimez la quantité de lignes de code (LOC) évitées.
* **Question 4 :** Le polymorphisme repose sur le concept du "duck typing" et de l'liaison dynamique (dynamic dispatch) : Python appelle automatiquement la méthode correspondant à l'instance réelle de l'objet au moment de l'exécution, pour peu que la signature de la méthode soit respectée.

---

### 📋 Correction détaillée pas à pas

#### 1. Traduction UML vers Python
```python
class Capteur:
    """Classe mère représentant un capteur générique."""
    
    def __init__(self, identifiant: str, intervalle: int):
        self._identifiant = identifiant  # Attribut protégé
        self._intervalle = intervalle
        self._mesures = []

    def ajouter_mesure(self, valeur: float) -> None:
        self._mesures.append(valeur)

    def obtenir_moyenne(self) -> float:
        if not self._mesures:
            return 0.0
        return sum(self._mesures) / len(self._mesures)


class CapteurNumerique(Capteur):
    """Classe fille représentant un capteur numérique à précision réglable."""
    
    def __init__(self, identifiant: str, intervalle: int, precision: int):
        super().__init__(identifiant, intervalle)
        self._precision = precision

    # Redéfinition (override) potentielle ou méthode spécifique
    def obtenir_moyenne(self) -> float:
        # On peut arrondir selon la précision du capteur
        moyenne_brute = super().obtenir_moyenne()
        return round(moyenne_brute, self._precision)
```

#### 2. Analyse de complexité et limites
* **Complexité actuelle :** La fonction `sum()` et `len()` parcourent l'intégralité de la liste des mesures. La complexité temporelle est donc de $\mathcal{O}(N)$, où $N$ est le nombre d'éléments dans `self._mesures`.
* **Limites :** Si $N$ devient très grand (par exemple, $10^6$ mesures accumulées avant vidage), chaque appel à `obtenir_moyenne()` consomme des ressources CPU significatives et bloque le thread principal sur des microcontrôleurs à faible, ce qui nuit à temps réel strict.
* **Optimisation $\mathcal{O}(1)$ :** Au lieu de stocker toutes les mesures ou de recalculer à chaque fois, on maintient deux attributs d'état supplémentaires : `self._somme_totale = 0.0` et `self._nombre_mesures = 0`. Lors de l'appel à `ajouter_mesure(valeur)`, on met à jour ces variables en $\mathcal{O}(1)$. La moyenne est alors calculée instantanément par $\frac{\text{somme\_totale}}{\text{nombre\_mesures}}$, ce qui résout le problème de scalabilité.

#### 3. Justification de l'héritage et estimation quantitative
L'héritage évite la redondance de code (principe DRY - *Don't Repeat Yourself*). 
Soit $L$ le nombre total de lignes de code nécessaires pour implémenter la logique de base d'un capteur. Si 70 % du code est commun et que l'on a $K = 10$ types de capteurs :
* **Sans héritage :** $K \times L$ lignes de code à maintenir.
* **Avec héritage :** $L$ lignes pour la classe mère + $K \times (0.3 \times L)$ lignes pour les classes filles.
* **Calcul du volume de code :** $1 + 10 \times 0.3 = 4$ unités de code au lieu de $10$, soit une réduction de 60% du volume de code source, diminuant mécaniquement la surface d'attaque des bugs et facilitant la maintenance évolutive.

#### 4. Implémentation du polymorphisme
```python
def traiter_station(capteurs: list[Capteur]) -> None:
    """Fonction polymorphe traitant n'importe quel type de capteur héritant de Capteur."""
    for c in capteurs:
        # Appel dynamique de la méthode obtenir_moyenne() 
        # en fonction du type réel de l'objet (Capteur ou CapteurNumerique)
        moyenne = c.obtenir_moyenne()
        print(f"Capteur {c._identifiant} - Moyenne mesurée : {moyenne}")
```

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
