---
title: "Exercice 2 : Traitements algorithmiques automatisés en Python"
description: "Application pratique du chapitre Données structurées et traitement"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'étude de la transition énergétique et de l'optimisation des réseaux de distribution d'électricité, les gestionnaires de réseau (tels qu'Enedis en France) analysent quotidiennement des millions de données de consommation. Les données sont fréquemment stockées sous forme de listes de dictionnaires en Python, représentant des structures tabulaires.

Considérons un échantillon de mesures issues de capteurs connectés (compteurs intelligents) déployés dans un quartier résidentiel. Chaque entrée du jeu de données correspond à un foyer et contient les attributs suivants :
- `id_foyer` : Identifiant unique de l'abonné ($\text{int}$)
- `consommation_kWh` : Énergie consommée sur une période de référence ($\text{float}$)
- `type_chauffage` : Mode principal de chauffage ($\text{str}$, valeurs possibles : `"electrique"`, `"gaz"`, `"autre"`)
- `alerte_pic` : Indicateur booléen signalant si le foyer a contribué au pic de charge global ($\text{bool}$)

Le fichier de données brut présente certaines incertitudes de mesure et des valeurs aberrantes inhérentes aux capteurs (erreurs de transmission, dérive de calibration). Un traitement algorithmique automatisé est donc nécessaire pour filtrer, agréger et analyser ces données avant toute prise de décision politique ou industrielle.

Soit le jeu de données initial défini en Python :

```python
donnees_foyers = [
    {"id_foyer": 101, "consommation_kWh": 450.5, "type_chauffage": "electrique", "alerte_pic": True},
    {"id_foyer": 102, "consommation_kWh": 120.0, "type_chauffage": "gaz", "alerte_pic": False},
    {"id_foyer": 103, "consommation_kWh": 890.2, "type_chauffage": "electrique", "alerte_pic": True},
    {"id_foyer": 104, "consommation_kWh": -15.0, "type_chauffage": "gaz", "alerte_pic": False},  # Erreur de capteur
    {"id_foyer": 105, "consommation_kWh": 310.8, "type_chauffage": "autre", "alerte_pic": False}
]
```

---

### ❓ Énoncé

1. **Extraction et validation des données :** Écrire une fonction en Python prenant en argument la liste `donnees_foyers` et retournant une nouvelle liste de dictionnaires ne conservant que les foyers dont la consommation enregistrée est physiquement plausible ($\text{consommation\_kWh} \ge 0$). Discuter brièvement de la limite de cette méthode de filtrage automatique face à des erreurs de mesure non négatives.
2. **Traitement conditionnel et comptage :** À partir des données nettoyées, écrire un script ou une fonction Python qui calcule et affiche le nombre total de foyers équipés d'un chauffage de type `"electrique"` et ayant déclenché une alerte de pic ($\text{alerte\_pic} = \text{True}$).
3. **Calcul d'indicateurs statistiques :** Écrire un algorithme en Python permettant de calculer la consommation moyenne ($\overline{C}$) en kilowattheures ($\text{kWh}$) des foyers valides. On rappelle que la moyenne se calcule selon la formule mathématique :
   $$\overline{C} = \frac{1}{N} \sum_{i=1}^{N} C_i$$
   où $N$ représente le nombre total de foyers valides et $C_i$ la consommation du foyer $i$.
4. **Analyse critique et limites du modèle :** Supposons que le seuil d'alerte pour une surconsommation anormale soit fixé arbitrairement à $400 \text{ kWh}$. Un algorithme automatisé isole tous les foyers dépassant ce seuil pour leur envoyer une pénalité financière. D'un point de vue scientifique et sociétal, pourquoi un tel traitement automatisé sans analyse contextuelle (taille du foyer, isolation thermique du bâtiment, rigueur climatique de la saison) présente-t-il un biais méthodologique majeur ?

---

### 💡 Indice de méthode

- **Pour la question 1 :** Parcourez la liste à l'aide d'une boucle `for` ou utilisez une *compréhension de liste*. Utilisez un test conditionnel `if` pour vérifier le signe de la clé `"consommation_kWh"`.
- **Pour la question 2 :** Cumulez un compteur (initialisé à $0$) en vérifiant simultanément deux conditions logiques grâce à l'opérateur `and`.
- **Pour la question 3 :** Additionnez les consommations dans une variable accumulateur au fil d'une boucle, puis divisez cette somme par la longueur de la liste des données filtrées. Veillez à traiter le cas où la liste serait vide pour éviter une division par zéro.

---

### 📋 Correction détaillée pas à pas

#### 1. Extraction et validation des données

```python
def nettoyer_donnees(donnees):
    donnees_valides = []
    for foyer in donnees:
        if foyer["consommation_kWh"] >= 0:
            donnees_valides.append(foyer)
    return donnees_valides

foyers_propres = nettoyer_donnees(donnees_foyers)
print(foyers_propres)
```
*Analyse critique :* Le filtre élimine efficacement les valeurs strictement négatives (aberrations physiques évidentes). Néanmoins, cette automatisation présente une limite : si un capteur est défectueux et surestime la consommation en affichant une valeur positive mais irréaliste (par exemple $5000 \text{ kWh}$ pour un petit appartement), l'algorithme la considérera à tort comme valide. Le traitement informatique ne se substitue pas à la validation physique.

#### 2. Traitement conditionnel et comptage

```python
compteur = 0
for foyer in foyers_propres:
    if foyer["type_chauffage"] == "electrique" and foyer["alerte_pic"] == True:
        compteur += 1

print(f"Nombre de foyers électriques en alerte : {compteur}")
```
*Résultat pour notre échantillon :* Le script parcourt les foyers valides (les foyers 101, 102, 103 et 105, le foyer 104 ayant été retiré). Les foyers 101 et 103 remplissent les deux conditions. Le programme affiche : `Nombre de foyers électriques en alerte : 2`.

#### 3. Calcul d'indicateurs statistiques

```python
somme_conso = 0
nb_foyers = len(foyers_propres)

for foyer in foyers_propres:
    somme_conso += foyer["consommation_kWh"]

if nb_foyers > 0:
    moyenne_conso = somme_conso / nb_foyers
    print(f"La consommation moyenne est de {moyenne_conso} \text{ kWh}")
else:
    print("Aucune donnée valide disponible.")
```
*Application numérique :*
- Somme des consommations valides : $450{,}5 + 120{,}0 + 890{,}2 + 310{,}8 = 1771{,}5 \text{ kWh}$
- Nombre de foyers valides : $N = 4$
- Moyenne : $\overline{C} = \frac{1771{,}5}{4} = 442{,}875 \text{ kWh}$

#### 4. Analyse critique et limites du modèle

Un traitement algorithmique automatisé applique des règles strictes sans discernement contextuel. Fixer un seuil unique à $400 \text{ kWh}$ induit plusieurs biais scientifiques et sociaux :
- **Biais de structure familiale :** Un foyer composé de cinq personnes consommera naturellement plus d'énergie qu'une personne seule, à équipement égal.
- **Biais thermique et géographique :** Le besoin énergétique dépend fortement de l'isolation du bâtiment (passoire thermique versus bâtiment basse consommation) et des conditions climatiques locales (hiver rigoureux).
- **Biais socio-économique :** Les foyers aux revenus modestes résidant dans des logements mal isolés risquent d'être pénalisés par un algorithme qui ne mesure que la consommation brute et non l'efficacité énergétique ou la précarité subie. 

*Conclusion scientifique :* L'algorithme est un outil d'aide à la décision puissant pour traiter de grands volumes de données (scalabilité), mais son output (résultat) doit nécessairement être croisé avec des variables qualitatives et sociologiques pour garantir l'équité et la pertinence de la mesure.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
