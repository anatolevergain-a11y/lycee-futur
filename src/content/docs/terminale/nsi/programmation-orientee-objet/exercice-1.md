---
title: "Exercice 1 : Encapsulation, classes, attributs et méthodes"
description: "Application pratique du chapitre Programmation Orientée Objet (POO)"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre du développement de logiciels scientifiques et de simulations numériques, la gestion rigoureuse de l'état interne des objets est un enjeu critique. En Python, bien que le langage n'impose pas de contraintes strictes de visibilité par défaut (contrairement au C++ ou à Java), l'utilisation de conventions de nommage (comme l'indique le préfixe underscore `_` ou le `__mangling`) permet d'appliquer le principe d'**encapsulation**. 

L'encapsulation vise à regrouper les données (attributs) et les traitements (méthodes) au sein d'une même entité, tout en restreignant l'accès direct aux données pour garantir l'intégrité de l'objet. 

Considérons une station météorologique autonome mesurant la température ambiante. L'analyse thermodynamique montre qu'un capteur physique présente des limites de mesure et que l'introduction de valeurs aberrantes (par exemple, hors de l'intervalle physique $[-273,15\,^\circ\text{C}, +1000\,^\circ\text{C}]$) corrompt les calculs statistiques ultérieurs. 
Soit $T$ la température mesurée. Le modèle doit garantir que pour toute instance de la classe, l'invariant suivant est respecté :
$$\forall T \in \mathbb{R}, \quad T_{\min} \le T \le T_{\max}$$
avec $T_{\min} = -273.15$ (zéro absolu) et $T_{\max} = 100.0$ (pour une station météorologique standard en milieu terrestre).

---

### ❓ Énoncé

1. **Modélisation et écriture de la classe :** Écrire une classe en Python nommée `StationMeteo`. Cette classe comportera un attribut privé `__temperature` initialisé par défaut à $20.0$ et un attribut public `nom` (chaîne de caractères).
2. **Implantation des accesseurs et mutateurs :** Implémenter une méthode getter (`get_temperature`) et une méthode setter (`set_temperature(valeur)`). Cette dernière devra vérifier rigoureusement l'appartenance de la valeur à l'intervalle $[-273.15, 100.0]$. En cas de dépassement, la méthode lèvera une exception de type `ValueError` avec un message explicite, préservant ainsi l'intégrité de l'état de l'objet.
3. **Analyse critique des compromis d'implémentation :** En Python, l'utilisation des attributs privés (`__attribut`) repose sur un mécanisme de modification de nom (*name mangling* qui transforme `__temperature` en `_StationMeteo__temperature`) mais ne bloque pas totalement l'accès en lecture ou écriture pour un développeur déterminé. Expliquez par un calcul logique ou une démonstration de portée de noms pourquoi ce choix de conception a été fait par les concepteurs de Python, en le comparant au coût/bénéfice d'un verrouillage strict.
4. **Application numérique et méthode d'instance :** Ajouter une méthode `convertir_fahrenheit(self) -> float` qui retourne la température actuelle convertie selon la formule physique :
   $$T(^{\circ}\text{F}) = T(^{\circ}\text{C}) \times \frac{9}{5} + 32$$
   Instancier un objet `ma_station = StationMeteo("Paris-Montsouris")`, assigner la valeur $25.0$ via le setter, puis afficher sa conversion en Fahrenheit.

---

### 💡 Indice de méthode

* Pour déclarer un attribut privé en Python, utilisez la double underscore en préfixe (ex: `self.__attribut`).
* La levée d'exception se fait à l'aide du mot-clé `raise ValueError("Message")`.
* Rappelez-vous que la POO favorise le principe d'information cachée (*information hiding*), mais que la philosophie de Python (« *we are all consenting adults here* ») privilégie la pragmatie à la coercition stricte.

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Modélisation et écriture de la classe

```python
class StationMeteo:
    def __init__(self, nom: str):
        self.nom = nom  # Attribut public
        self.__temperature = 20.0  # Attribut privé (encapsulé)
```
*Commentaire pédagogique :* L'initialisation positionne un état valide par défaut ($20.0\,^\circ\text{C}$), respectant l'invariant $T_{\min} \le T \le T_{\max}$.

#### Question 2 : Implantation des accesseurs et mutateurs

```python
    def get_temperature(self) -> float:
        return self.__temperature

    def set_temperature(self, valeur: float):
        if -273.15 <= valeur <= 100.0:
            self.__temperature = valeur
        else:
            raise ValueError(f"Erreur : La température {valeur} °C viole les limites physiques du système.")
```
*Analyse scientifique :* Le mutateur agit comme une barrière de validation (*guard clause*). Si l'on note $\mathcal{V}$ l'ensemble des valeurs admissibles $\mathcal{V} = [-273.15, 100]$, alors :
$$\text{Si } val \notin \mathcal{V} \implies \nexists \text{ mise à jour}, \text{ levée de }\text{ValueError}$$
Cela garantit l'intégrité référentielle des données au sein de la structure de données.

#### Question 3 : Analyse critique des compromis d'implémentation

En Python, le *name mangling* renomme l'attribut `__temperature` en `_StationMeteo__temperature`. 
Sur le plan de l'efficacité et de la faisabilité, un verrouillage strict (comme en C++ avec les mots-clés `private`) nécessite des vérifications au niveau du compilateur et alourdit la structure du langage. Python choisit un compromis : il n'empêche pas l'accès par la force (il est possible d'écrire `ma_station._StationMeteo__temperature = 500`), mais rend cet accès explicite et non accidentel. 
*Bénéfice :* Flexibilité pour le test unitaires et le *debugging*. 
*Coût :* Responsabilité reportée sur le développeur, ce qui exige une rigueur méthodologique accrue par rapport à un encadrement purement syntaxique.

#### Question 4 : Application numérique et méthode d'instance

```python
    def convertir_fahrenheit(self) -> float:
        return self.__temperature * (9 / 5) + 32

# --- Code d'instanciation et test ---
if __name__ == "__main__":
    ma_station = StationMeteo("Paris-Montsouris")
    ma_station.set_temperature(25.0)
    
    print(f"Station : {ma_station.nom}")
    print(f"Température Celsius : {ma_station.get_temperature()} °C")
    print(f"Température Fahrenheit : {ma_station.convertir_fahrenheit()} °F")
```

*Vérification par le calcul :*
Pour $T = 25.0\,^\circ\text{C}$ :
$$T(^{\circ}\text{F}) = 25.0 \times 1.8 + 32 = 45.0 + 32 = 77.0\,^{\circ}\text{F}$$
Le résultat de la méthode est mathématiquement correct et conforme aux spécifications physiques.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
