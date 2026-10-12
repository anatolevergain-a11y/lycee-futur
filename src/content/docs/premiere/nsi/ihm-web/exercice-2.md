---
title: "Exercice 2 : Formulaires web et validation dynamique d'entrées"
description: "Application pratique du chapitre Interfaces Homme-Machine (IHM) sur le Web"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la conception d'une Interface Homme-Machine (IHM) web, l'ergonomie et la robustesse du traitement des données côté client sont des enjeux majeurs de sécurité et d'expérience utilisateur (UX). La validation dynamique des formulaires permet de guider l'utilisateur en temps réel et de réduire la charge computationnelle inutile sur le serveur.

Considérons un système d'inscription en ligne. L'analyse des métriques d'utilisation montre qu'un formulaire mal validé entraîne un taux d'abandon moyen de $\tau = 0{,}35$ (soit $35\,\%$ des utilisateurs). L'introduction d'une validation dynamique par script client (JavaScript) vise à réduire ce taux, tout en posant la question du compromis entre réactivité de l'IHM et consommation de ressources du navigateur.

Soit une base de données de $N = 10\,000$ soumissions de formulaires par heure. Le temps de traitement moyen d'une requête de validation côté serveur est de $t_{\text{serveur}} = 120 \text{ ms}$, tandis qu'une validation locale par expression rationnelle (regex) exécutée par le moteur JavaScript du client demande en moyenne $t_{\text{client}} = 2 \text{ ms}$. 

### ❓ Énoncé (3 à 4 questions progressives)

1. **Analyse structurelle et sémantique :** Rédiger un extrait de code HTML5 intégrant un champ de saisie (`<input>`) pour une adresse électronique, en utilisant les attributs natifs de validation (`required`, `pattern`). Justifier l'intérêt de coupler ces attributs HTML5 avec une gestion dynamique en JavaScript.
2. **Algorithmique et validation par expression rationnelle :** Écrire une fonction JavaScript `validerEmail(email)` qui prend en paramètre une chaîne de caractères et retourne un booléen. L'expression rationnelle utilisée devra s'assurer que la chaîne respecte la structure `identifiant@domaine.extension`, où l'extension comporte entre $2$ et $4$ caractères alphabétiques.
3. **Modélisation de charge et esprit critique :** Calculer le gain temporel cumulé (exprimé en secondes par heure) pour le serveur si $80\,\%$ des erreurs de saisie sont interceptées et corrigées côté client avant la tentative de soumission finale. Discuter des limites de cette approche « tout-client » en matière de sécurité informatique.
4. **Ergonomie de l'IHM :** Proposer une modification de l'interface visuelle (gestion des classes CSS et retour textuel) en fonction de l'état de validation du champ, en veillant à respecter les principes d'accessibilité (accessibilité numérique / RGAA) pour les utilisateurs malvoyants.

### 💡 Indice de méthode

* **Question 1 :** Pensez aux types natifs du HTML5 (`type="email"`) qui activent des comportements par défaut sur les agents utilisateurs mobiles et de bureau.
* **Question 2 en LaTeX :** Une expression rationnelle (regex) s'appuie sur des classes de caractères et des quantificateurs. Par exemple, pour les lettres minuscules et chiffres, on utilise l'intervalle $[a-z0-9]$. Le symbole `^` indique le début de la chaîne et `$` la fin.
* **Question 3 :** Procédez par analyse dimensionnelle. Calculez le nombre de requêtes évitées par heure sachant le volume total $N$ et le taux d'interception. Multipliez ce nombre par $t_{\text{serveur}}$.
* **Question 4 :** L'accessibilité (UX/UI) ne doit pas reposer uniquement sur la couleur (rouge/vert), car cela pénalise les utilisateurs présentant des troubles de la vision des couleurs (daltonisme).

### 📋 Correction détaillée pas à pas

#### 1. Analyse structurelle et sémantique
Le code HTML5 s'écrit de la manière suivante :

```html
<form id="formulaire-inscription">
    <label for="email">Adresse électronique :</label>
    <input type="email" id="email" name="email" required 
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
           aria-describedby="erreur-email">
    <span id="erreur-email" class="aide-saisie">Format attendu : nom@domaine.fr</span>
    <button type="submit">S'inscrire</button>
</form>
```
*Justification :* Les attributs natifs HTML5 offrent une première barrière déclarative légère et standardisée. Cependant, leur personnalisation visuelle est limitée et varie selon les navigateurs. Coupler ces attributs à JavaScript permet un retour d'information contextuel, immédiat et homogène, améliorant ainsi l'expérience utilisateur (IHM).

#### 2. Algorithmique et validation par expression rationnelle
Voici la fonction JavaScript associée :

```javascript
function validerEmail(email) {
    // Expression rationnelle conforme aux contraintes de l'énoncé
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return regex.test(email);
}

// Exemple d'utilisation :
let saisieUtilisateur = "test.eleve@lycee.fr";
let estValide = validerEmail(saisieUtilisateur);
console.log(estValide); // Affiche true
```

#### 3. Modélisation de charge et esprit critique
* **Calcul du gain temporel :**
  - Nombre total de soumissions par heure : $N = 10\,000$.
  - Nombre de soumissions erronées interceptées par le client : $N_{\text{intercepte}} = N \times 0{,}80 = 8\,000 \text{ requêtes}$.
  - Temps de traitement unitaire évité côté serveur : $t_{\text{serveur}} = 120 \text{ ms} = 0{,}120 \text{ s}$.
  - Gain temporel total par heure $T_{\text{gain}}$ :
    $$T_{\text{gain}} = N_{\text{intercepte}} \times t_{\text{serveur}} = 8\,000 \times 0{,}120 \text{ s} = 960 \text{ s}$$
    Soit un gain de $16 \text{ minutes}$ de calcul cumulé pour le serveur par heure.

* **Esprit critique et limites :** 
  La validation côté client améliore l'ergonomie et soulage le serveur, mais elle ne constitue **en aucun cas une mesure de sécurité**. Un utilisateur malveillant peut facilement désactiver JavaScript, contourner le navigateur ou envoyer des requêtes HTTP forgées directement vers le serveur (via des outils comme `cURL` ou Postman). Par conséquent, la règle fondamentale en architecture Web est de **toujours valider et assainir les données côté serveur**, indépendamment des contrôles effectués par l'IHM.

#### 4. Ergonomie de l'IHM et accessibilité
Pour répondre aux exigences d'accessibilité (RGAA), le changement d'état ne doit pas être uniquement chromatique.

```css
/* Styles CSS associés */
input:invalid:not(:placeholder-shown) {
    border: 2px solid #d9534f; /* Rouge */
    background-image: url('croix.svg'); /* Indicateur visuel explicite */
}

input:valid:not(:placeholder-shown) {
    border: 2px solid #5cb85c; /* Vert */
    background-image: url('coche.svg'); /* Indicateur visuel explicite */
}
```
*Remarque pédagogique :* L'utilisation conjointe d'icônes explicites (formes) et d'attributs ARIA (`aria-describedby`, `aria-invalid`) garantit que les utilisateurs malvoyants ou utilisant des technologies d'assistance (lecteurs d'écran) perçoivent l'état de validation du formulaire au même titre que les utilisateurs voyants.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
