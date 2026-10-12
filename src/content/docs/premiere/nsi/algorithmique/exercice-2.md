---
title: "Exercice 2 : Recherche dichotomique dans une base de données"
description: "Application pratique du chapitre Algorithmique élémentaire"
---

### 🌐 Contexte concret

Imaginons que vous travaillez pour le service informatique d'une plateforme de streaming musical. La base de données contient le catalogue des morceaux disponibles. Pour des raisons d'efficacité, ce catalogue est **trié par ordre alphabétique** selon le titre des chansons. 

Pour retrouver rapidement un morceau parmi les millions de titres disponibles sans parcourir toute la liste un par un (ce qui serait trop lent), on utilise l'algorithme de **recherche dichotomique**. L'objectif est d'implémenter et de comprendre le fonctionnement de cet algorithme en Python.

---

### ❓ Énoncé

Soit une liste Python `catalogue` contenant des titres de chansons triés par ordre alphabétique :
```python
catalogue = ["Adele - Hello", "Beatles - Yesterday", "Coldplay - Yellow", 
             "Daft Punk - One More Time", "Eagles - Hotel California", 
             "Queen - Bohemian Rhapsody", "The Beatles - Let It Be"]
```

1. **Question 1 (Compréhension) :** Expliquez pourquoi la recherche dichotomique ne peut pas fonctionner si la liste des chansons n'est pas triée préalablement.
2. **Question 2 (Écriture de code) :** Écrire une fonction Python `recherche_dichotomique(element, liste)` qui prend en paramètre une chaîne de caractères `element` (le titre cherché) et une `liste` (le catalogue), et qui renvoie l'indice de l'élément s'il est présent, ou `None` s'il est absent.
3. **Question 3 (Complexité) :** Si la base de données contient $N = 1\,048\,576$ chansons ($2^{20}$), quel est le nombre *maximal* de comparaisons nécessaires pour trouver un titre (ou prouver son absence) en utilisant la recherche dichotomique ? Comparez avec la recherche linéaire.

---

### 💡 Indice

- Pour la **Question 2**, pensez à maintenir deux variables pour délimiter la zone de recherche : `debut` (initialisée à $0$) et `fin` (initialisée à `len(liste) - 1`). À chaque étape, calculez l'indice du milieu : 
  $$\text{milieu} = \lfloor \frac{\text{debut} + \text{fin}}{2} \rfloor$$
  Ensuite, comparez l'élément recherché avec `liste[milieu]` pour décider s'il faut chercher dans la moitié gauche ou la moitié droite.
- Pour la **Question 3**, rappelez-vous que la recherche dichotomique divise la taille du problème par $2$ à chaque étape.

---

### 📋 Correction détaillée pas à pas

#### Correction de la Question 1
La recherche dichotomique repose sur le principe "diviser pour régner". À chaque étape, on compare l'élément recherché avec la valeur située au milieu de l'intervalle de recherche. 
Si la liste n'est **pas triée**, il est impossible de savoir si l'élément cherché se trouve dans la moitié inférieure ou supérieure. La comparaison avec la valeur centrale ne nous donnerait aucune information logique pour éliminer la moitié des données. Le tri est donc une **pré-condition indispensable**.

#### Correction de la Question 2
Voici l'implémentation en Python de l'algorithme de recherche dichotomique :

```python
def recherche_dichotomique(element, liste):
    debut = 0
    fin = len(liste) - 1
    
    while debut <= fin:
        milieu = (debut + fin) // 2
        
        if liste[milieu] == element:
            return milieu  # Élément trouvé, on renvoie son indice
        elif liste[milieu] < element:
            debut = milieu + 1  # On cherche dans la moitié droite
        else:
            fin = milieu - 1    # On cherche dans la moitié gauche
            
    return None  # Élément absent de la liste
```
*Explication :* La boucle `while` continue tant que l'intervalle de recherche (`debut <= fin`) est valide. L'opérateur `//` permet d'obtenir une division entière (arrondie à l'inférieur).

#### Correction de la Question 3
- **Recherche dichotomique :** À chaque étape, la taille de la liste est divisée par $2$. Le nombre maximal de comparaisons correspond au nombre de fois que l'on peut diviser $1\,048\,576$ par $2$ jusqu'à obtenir $1$. 
  Mathématiquement, c'est $\log_2(1\,048\,576) = \log_2(2^{20}) = \mathbf{20\text{ comparaisons}}$.
- **Recherche linéaire (parcours séquentiel) :** Dans le pire des cas, il faudrait parcourir toute la base de données, soit $1\,048\,576$ comparaisons.

*Conclusion :* L'algorithme dichotomique est extrêmement plus efficace pour les grandes bases de données ($20$ opérations au lieu d'un million).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
