---
title: "Exercice 2 : Héritage et polymorphisme"
description: "Application pratique du chapitre Programmation Orientée Objet (POO)"
---

### 🌐 Contexte & Données scientifiques

En ingénierie logicielle, la modélisation de systèmes complexes nécessite souvent de représenter des hiérarchies d'entités partageant des caractéristiques communes tout en conservant des comportements spécialisés. La Programmation Orientée Objet (POO) répond à ce besoin grâce au mécanisme d'**héritage** et au **polymorphisme**.

Considérons le domaine de la simulation environnementale, et plus particulièrement le suivi de populations de capteurs autonomes déployés sur le terrain (stations météorologiques, balises océanographiques). L'analyse des performances algorithmiques montre que la duplication de code (redondance) augmente la surface d'attaque des bugs d'un facteur estimé à $\mathcal{O}(N)$ où $N$ est le nombre de types de capteurs, tandis qu'une architecture par héritage bien conçue tend à stabiliser la complexité de maintenance autour de $\mathcal{O}(\log N)$. 

Cependant, l'utilisation excessive de hiérarchies de classes profondes (supérieures à 3 niveaux) introduit un couplage fort et une surcharge en cycles CPU lors de la résolution dynamique des méthodes (liaison tardive ou *late binding*), estimée en moyenne à $O(M)$ où $M$ est la profondeur de l'arbre d'héritage. Le compromis entre réutilisabilité du code et performance d'exécution reste donc un sujet d'étude central en conception logicielle.

---

### ❓ Énoncé

On souhaite modéliser une flotte de capteurs en Python. Un capteur de base possède un identifiant unique (chaîne de caractères) et un niveau de batterie (exprimé en pourcentage, de $0$ à $100$). 

1. **Modélisation de la classe mère :** Écrire la classe `Capteur` possédant un constructeur `__init__` initialisant l'identifiant et la batterie à $100$. Ajouter une méthode `get_statut(self)` qui renvoie une chaîne de caractères indiquant l'identifiant et le niveau de batterie.

2. **Mise en œuvre de l'héritage :** Écrire une classe fille `CapteurTemperature` qui hérite de `Capteur`. Cette classe ajoute un attribut privé `_seuil_alerte` (flottant, fixé par défaut à $35.0$ °C) et redéfinit une méthode `mesurer(self, valeur: float)` qui décrémente la batterie de $2$ unités à chaque appel et lève une alerte (retourne un booléen `True`) si la `valeur` dépasse le `_seuil_alerte`.

3. **Application du polymorphisme :** Écrire une fonction externe `executer_campagne(liste_capteurs: list, valeurs: list)` qui prend en paramètre une liste hétérogène d'objets de type `Capteur` (ou dérivés) et simule une série de mesures. Cette fonction doit démontrer le polymorphisme en invoquant une méthode commune sur chaque élément sans se soucier de son type exact.

4. **Analyse critique :** En supposant que le coût temporel d'une liaison dynamique pour une méthode surchargée est de l'ordre de $12\text{ ns}$ par niveau d'héritage, calculez le surcoût temporel total pour une flotte de $10^5$ capteurs effectuant $50$ mesures chacun, sachant que la hiérarchie comporte $2$ niveaux. Discutez des limites de ce modèle face à des architectures alternatives (comme la composition d'objets).

---

### 💡 Indice de méthode

- **Héritage :** Utilisez la syntaxe `class Fille(Mere):` et pensez à appeler le constructeur de la classe mère via `super().__init__(...)` pour éviter la redondance d'initialisation.
- **Encapsulation :** Un attribut préfixé par un tiret bas (`_attribut`) est une convention en Python pour indiquer qu'il est protégé (accès interne ou via des accesseurs).
- **Polymorphisme :** Le principe repose sur le fait qu'une même interface (nom de méthode) produit des comportements différents selon l'instance qui l'exécute, évalué dynamiquement à l'exécution (*duck typing* ou liaison dynamique).

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Modélisation de la classe mère
```python
class Capteur:
    def __init__(self, identifiant: str):
        self.identifiant = identifiant
        self.batterie = 100.0  # en pourcentage

    def get_statut(self) -> str:
        return f"Capteur {self.identifiant} - Batterie : {self.batterie}%"
```

#### Question 2 : Mise en œuvre de l'héritage
```python
class CapteurTemperature(Capteur):
    def __init__(self, identifiant: str, seuil_alerte: float = 35.0):
        super().__init__(identifiant)
        self._seuil_alerte = seuil_alerte

    def mesurer(self, valeur: float) -> bool:
        # Décrémentation de la batterie avec contrainte de borne inférieure à 0
        self.batterie = max(0.0, self.batterie - 2.0)
        return valeur > self._seuil_alerte
```

#### Question 3 : Application du polymorphisme
```python
def executer_campagne(liste_capteurs: list, valeurs: list):
    resultats = []
    for capteur, valeur in zip(liste_capteurs, valeurs):
        # Polymorphisme : on appelle une méthode spécifique 
        # si elle existe, ou générique.
        if isinstance(capteur, CapteurTemperature):
            alerte = capteur.mesurer(valeur)
            resultats.append((capteur.identifiant, alerte))
    return resultats
```

#### Question 4 : Analyse critique et calculs
* **Données du problème :**
  - Nombre de capteurs : $N = 10^5$
  - Nombre de mesures par capteur : $M = 50$
  - Profondeur de l'arbre d'héritage : $P = 2$
  - Surcoût par niveau : $S = 12\text{ ns}$

* **Calcul du surcoût temporel total ($T_{total}$) :**
  Le nombre total d'appels de méthodes impactés par la liaison dynamique est le produit du nombre de capteurs par le nombre de mesures :
  $$\text{Total}_{\text{appels}} = 10^5 \times 50 = 5 \times 10^6 \text{ appels}$$

  Le surcoût unitaire par appel pour $P$ niveaux est de $P \times S$.
  $$T_{\text{total}} = 5 \times 10^6 \times (2 \times 12\text{ ns}) = 5 \times 10^6 \times 24\text{ ns}$$
  $$T_{\text{total}} = 1.2 \times 10^8\text{ ns} = 0.12\text{ secondes}$$

* **Discussion critique :**
  Bien que le surcoût calculé ($0.12\text{ s}$ sur l'ensemble de la simulation) soit négligeable pour des applications standard, il met en lumière un compromis. Dans des systèmes embarqués critiques à contraintes temporelles strictes (*hard real-time systems*), chaque cycle CPU compte. 
  De plus, l'héritage rigide crée un couplage fort : si l'on souhaite ajouter une capacité de géolocalisation à certains capteurs de température uniquement, l'héritage simple montre ses limites (explosion combinatoire des classes ou héritage multiple complexe). La **composition** (qui consiste à doter un objet d'attributs représentant d'autres objets, ex: un capteur *possède* un module GPS) est souvent privilégiée pour pallier ce défaut, bien qu'elle demande un code de délégation plus verbeux.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
