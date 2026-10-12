---
title: "Exercice 4 : Interface graphique d'application web"
description: "Application pratique du chapitre Programmation Orientée Objet (POO)"
---

### 🌐 Contexte concret

Dans le cadre du développement d'une application web moderne, on souhaite modéliser des composants d'interface graphique (GUI) réutilisables, inspirés des frameworks actuels (type React ou Vue.js). En Programmation Orientée Objet (POO), chaque élément affiché à l'écran (bouton, champ de texte, conteneur) est un objet doté d'attributs (dimensions, contenu textuel, état) et de méthodes (affichage, gestion des événements). 

Cet exercice propose de concevoir une classe générique pour un composant web, puis de spécialiser cette classe pour créer un bouton interactif.

---

### ❓ Énoncé

1. **Question 1 :** Créer une classe `ComposantWeb` représentant un élément générique de la page. Son constructeur (__init__) devra prendre en paramètres une chaîne de caractères `id_unique`, une largeur `largeur` (en pixels, ex: $150$) et une hauteur `hauteur` (en pixels, ex: $50$). Ces attributs seront initialisés comme attributs d'instance.
2. **Question 2 :** Ajouter à la classe `ComposantWeb` une méthode `generer_html(self)` qui retourne une chaîne de caractères représentant la balise HTML basique du composant sous la forme : `<div id="id_unique" style="width: largeurpx; height: hauteurpx;"></div>`.
3. **Question 3 :** Par héritage, créer une classe fille `Bouton` qui hérite de `ComposantWeb`. Le constructeur de `Bouton` prendra en plus un paramètre `texte` (le libellé du bouton) et un attribut booléen `actif` initialisé à `True`.
4. **Question 4 :** Redéfinir (ou surcharger) la méthode `generer_html(self)` dans la classe `Bouton` pour qu'elle produise une balise `<button>` interactive incluant l'ID, les dimensions, le texte, et un attribut HTML `disabled` si le bouton n'est pas actif.

---

### 💡 Indice

- Pour la **Question 2**, pensez à utiliser les f-strings de Python (les chaînes de caractères formatées avec des `f""`) pour insérer facilement les attributs de l'objet dans le code HTML.
- Pour la **Question 3**, rappelez-vous d'utiliser la fonction `super()` pour initialiser les attributs de la classe mère.
- Pour la **Question 4**, une condition ternaire en Python (ex: `valeur_si_vrai if condition else valeur_si_faux`) peut vous aider à insérer ou non le mot-clé `disabled`.

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Création de la classe mère `ComposantWeb`
Il s'agit de définir la structure de base avec le constructeur `__init__` :

```python
class ComposantWeb:
    def __init__(self, id_unique: str, largeur: int, hauteur: int):
        self.id_unique = id_unique
        self.largeur = largeur
        self.hauteur = hauteur
```

#### Question 2 : Génération du HTML générique
On utilise une f-string pour injecter les attributs de l'objet dans une structure de balise `<div>` :

```python
    def generer_html(self) -> str:
        return f'<div id="{self.id_unique}" style="width: {self.largeur}px; height: {self.hauteur}px;"></div>'
```

#### Question 3 : Création de la classe fille `Bouton` par héritage
La classe `Bouton` hérite de `ComposantWeb`. On appelle `super().__init__` pour récupérer la gestion de l'identifiant et des dimensions, puis on ajoute les spécificités du bouton (`texte` et `actif`) :

```python
class Bouton(ComposantWeb):
    def __init__(self, id_unique: str, largeur: int, hauteur: int, texte: str):
        super().__init__(id_unique, largeur, hauteur)
        self.texte = texte
        self.actif = True  # Par défaut, le bouton est actif
```

#### Question 4 : Redéfinition de la méthode `generer_html`
Pour le bouton, on souhaite une balise `<button>`. Si l'attribut `self.actif` est faux, on ajoute l'attribut HTML `disabled`. 

```python
    def generer_html(self) -> str:
        # Gestion de l'état actif/inactif en HTML
        etat_disabled = "" if self.actif else " disabled"
        
        return (
            f'<button id="{self.id_unique}" '
            f'style="width: {self.largeur}px; height: {self.hauteur}px;"'
            f'{etat_disabled}>'
            f'{self.texte}'
            f'</button>'
        )
```

**Exemple d'utilisation complète :**
```python
# Instanciation d'un bouton cliquable
mon_bouton = Bouton("btn-valider", 200, 40, "Valider le formulaire")
print(mon_bouton.generer_html())
# Résultat affiché : 
# <button id="btn-valider" style="width: 200px; height: 40px;">Valider le formulaire</button>

# Désactivation du bouton
mon_bouton.actif = False
print(mon_bouton.generer_html())
# Résultat affiché : 
# <button id="btn-valider" style="width: 200px; height: 40px;" disabled>Valider le formulaire</button>
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
