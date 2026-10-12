---
title: "Cours : Programmation Orientée Objet (POO)"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Cours de Numérique et Sciences Informatiques (NSI) - Terminale
## Chapitre : Programmation Orientée Objet (POO)

---

## 📌 1. Notions clés & Définitions

La **Programmation Orientée Objet** (POO) est un paradigme de programmation informatique qui consiste à regrouper au sein d'une même entité, appelée **objet**, les données associées (attributs) et les procédures permettant de manipuler ces données (méthodes).

* **Classe :** Un type abstrait défini par le programmeur qui sert de "plan de construction" ou de moule. Elle définit l'ensemble des attributs et des méthodes que posséderont les objets instanciés à partir d'elle.
* **Objet :** Une instance concrète d'une classe. En mémoire, un objet occupe un espace spécifique et possède ses propres valeurs pour les attributs définis par sa classe.
* **Attribut :** Une variable liée à un objet (ou à une classe), caractérisant son état à un instant donné.
* **Méthode :** Une fonction (ou procédure) associée à une classe, définissant les comportements et les actions que les objets de cette classe peuvent effectuer.
* **Encapsulation :** Le mécanisme consistant à regrouper les données et les traitements au sein d'un même objet, et à restreindre l'accès direct aux attributs internes (principe d'information cachée) afin de garantir l'intégrité de l'objet.
* **Héritage :** Un mécanisme permettant de créer une nouvelle classe (classe fille ou sous-classe) à partir d'une classe existante (classe mère ou super-classe), en héritant de ses attributs et de ses méthodes, tout en permettant d'en ajouter de nouveaux ou de redéfinir les existants.
* **Polymorphisme :** La capacité pour une méthode de se comporter différemment selon la classe de l'objet qui l'invoque (notamment via la redéfinition de méthodes).

---

## 📐 2. Formules et Propriétés fondamentales

En Python, la syntaxe fondamentale de la POO repose sur les mots-clés `class`, `def`, et la fonction d'initialisation `__init__`.

### Définition d'une classe et instanciation
Soit une classe générique définie par la structure mathématique et syntaxique suivante :

$$\text{Classe } C \implies \text{Attributs } \{a_1, a_2, \dots, a_n\} \text{ et Méthodes } \{m_1, m_2, \dots, m_p\}$$

En Python :
```python
class NomDeLaClasse:
    def __init__(self, parametre1, parametre2):
        self.attribut1 = parametre1  # Initialisation d'un attribut d'instance
        self.__attribut_prive = parametre2  # Attribut protégé/privé par convention

    def ma_methode(self):
        # Corps de la méthode
        return self.attribut1
```

### Instanciation
```python
# Création d'un objet (instance) de la classe
mon_objet = NomDeLaClasse(valeur1, valeur2)
```
L'argument `self` représente l'instance courante de l'objet. Lors de l'appel `mon_objet.ma_methode()`, Python traduit implicitement l'appel en `NomDeLaClasse.ma_methode(mon_objet)`.

### Syntaxe de l'Héritage
Soit une classe `Fille` héritant d'une classe `Mere` :
```python
class Mere:
    def __init__(self, x):
        self.x = x

class Fille(Mere):
    def __init__(self, x, y):
        super().__init__(x)  # Appel du constructeur de la classe mère
        self.y = y
```

---

## 💡 3. Exemple d'application résolu

**Problématique :** Modéliser un compte bancaire en Python en appliquant les principes de la POO. Le compte doit posséder un titulaire, un solde initial (avec encapsulation pour éviter les modifications directes non sécurisées), ainsi que des méthodes pour déposer et retirer de l'argent.

**Résolution :**

```python
class CompteBancaire:
    """Classe représentant un compte bancaire simple."""
    
    def __init__(self, titulaire: str, solde_initial: float = 0.0):
        self.titulaire = titulaire
        self.__solde = solde_initial  # Attribut privé (encapsulation)

    def obtenir_solde(S): # Utilisation d'un accesseur (getter)
        """Renvoie le solde actuel du compte."""
        return self.__solde

    def deposer(self, montant: float) -> None:
        """Permet d'ajouter un montant au solde."""
        if montant > 0:
            self.__solde += montant
        else:
            raise ValueError("Le montant du dépôt doit être strictement positif.")

    def retirer(self, montant: float) -> bool:
        """Permet de retirer un montant si le solde est suffisant."""
        if 0 < montant <= self.__solde:
            self.__solde -= montant
            return True
        return False

# --- Utilisation (Instanciation et appels) ---
if __name__ == "__main__":
    # Création d'une instance
    compte_alice = CompteBancaire("Alice", 150.0)
    
    # Utilisation des méthodes
    compte_alice.deposer(50.0)
    succes = compte_alice.retirer(100.0)
    
    print(f"Retrait réussi : {succes}")
    print(f"Solde final de {compte_alice.titulaire} : {compte_alice.obtenir_solde()} €")
```

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

1. **Oubli du paramètre `self` :** 
   * *Piège :* Oublier d'inclure `self` comme premier paramètre dans les méthodes d'une classe (y compris `__init__`).
   * *Correction :* `self` est obligatoire pour faire référence à l'instance en cours de manipulation. Ne pas le mettre génère une erreur du type `TypeError` lors de l'appel.

2. **Confusion entre attribut de classe et attribut d'instance :**
   * *Piège :* Déclarer une variable directement dans le corps de la classe (hors de toute méthode) en pensant qu'elle est propre à chaque objet, alors qu'elle est partagée par toutes les instances (attribut de classe).
   * *Correction :* Toujours initialiser les attributs propres à l'objet à l'intérieur de la méthode `__init__` en utilisant `self.nom_attribut`.

3. **Violation de l'encapsulation :**
   * *Piège :* Tenter d'accéder directement à un attribut privé (par exemple `mon_objet.__solde` en Python). 
   * *Correction :* En Python, la stricte privacité n'existe pas (name mangling), mais l'accès direct aux attributs précédés de double underscore (`__`) est fortement déconseillé. Utilisez des **accesseurs** (getters) et **mutateurs** (setters).

4. **Mauvaise utilisation de `super()` lors de l'héritage :**
   * *Piège :* Oublier d'appeler le constructeur de la classe mère dans la classe fille, ce qui laisse les attributs hérités non initialisés.
   * *Correction :* Toujours appeler `super().__init__(...)` au début du constructeur de la classe fille.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
