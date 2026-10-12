---
title: "Cours : Interfaces Homme-Machine (IHM) Web"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

L'interaction Homme-Machine sur le Web repose sur le modèle d'architecture **client-serveur**, dans lequel un navigateur web (le client) interagit avec une machine distante (le serveur) par l'intermédiaire du protocole de communication **HTTP** (*Hypertext Transfer Protocol*).

* **HTML (*HyperText Markup Language*)** : Langage de balisage normalisé permettant de structurer le contenu d'un document web (textes, images, conteneurs, formulaires). Il définit la sémantique de l'information.
* **CSS (*Cascading Style Sheets*)** : Langage de feuilles de style utilisé pour décrire la présentation visuelle d'un document HTML (couleurs, polices, mise en page, adaptations réactives).
* **JavaScript** : Langage de programmation impératif et interprété, exécuté côté client par le moteur d'exécution du navigateur. Il confère au document un comportement dynamique en réponse aux interactions de l'utilisateur.
* **DOM (*Document Object Model*)** : Représentation arborescente standardisée du document HTML en mémoire vive. Chaque balise, attribut ou nœud de texte devient un objet manipulable par des scripts clients :
  $$\text{Document} \longrightarrow \text{Nœud racine } (\texttt{<html>}) \longrightarrow \text{Nœuds enfants } (\texttt{<head>}, \texttt{<body>}, \dots)$$
* **Événement (*Event*)** : Signal émis par le système ou déclenché par l'action de l'utilisateur (clic, frappe au clavier, soumission de formulaire, survol de la souris).
* **Programmation événementielle** : Paradigme de programmation dans lequel l'ordre d'exécution du code est déterminé par l'occurrence d'événements extérieurs, captés par des écouteurs d'événements (*event listeners*).

---

## 📐 2. Formules et Propriétés fondamentales

### 2.1. Protocole HTTP et transmission de formulaires

Un formulaire HTML permet d'envoyer un ensemble de paires $\text{clé}=\text{valeur}$ au serveur. La méthode d'envoi conditionne l'acheminement des données :

* **Méthode $\text{GET}$** :
  * Les paramètres sont concaténés à l'URI via une chaîne de requête (*query string*) :
    $$\text{URL} = \text{base} + \text{"?"} + k_1 + \text{"="} + v_1 + \text{"\&"} + k_2 + \text{"="} + v_2 + \dots$$
  * La requête est **idempotente** : la répétition de l'opération produit le même état sur le serveur :
    $$f(f(x)) = f(x)$$
  * Les données sont visibles dans l'historique de navigation et limitées en taille (généralement environ $2048 \text{ octets}$).

* **Méthode $\text{POST}$** :
  * Les paramètres sont encapsulés dans le corps (*body*) de la requête HTTP, sans figurer dans l'URL.
  * La requête n'est pas supposée idempotente ; elle est adaptée aux modifications d'état du système (enregistrement en base de données, opérations critiques).
  * Absence de restriction stricte sur la taille des données transmises.

### 2.2. Algorithmique et complexité sur le DOM

Le DOM est un arbre n-aire composé de $n$ nœuds.

* **Recherche d'un élément unique par identifiant** :
  $$\texttt{document.getElementById("id")} \implies \mathcal{O}(1) \text{ en moyenne (via table de hachage interne)}$$
* **Parcours sélectif par classe ou sélecteur CSS** :
  $$\texttt{document.querySelectorAll(".classe")} \implies \mathcal{O}(n) \text{ dans le pire des cas (parcours d'arbre complet)}$$

### 2.3. Cycle de vie de l'interaction événementielle

Le modèle d'exécution JavaScript dans le navigateur est **mono-thread** et repose sur une file de messages gérée par une boucle d'événements (*Event Loop*) :

1. L'utilisateur déclenche une action physique.
2. Le navigateur génère un objet $\text{Event}$.
3. L'écouteur associé exécute sa fonction de rappel (*callback*) :
   $$f : \text{Event} \mapsto \text{Effet de bord sur le DOM / Calcul}$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On souhaite concevoir une interface web minimale permettant de calculer l'énergie cinétique d'un solide en mouvement :
$$E_c = \frac{1}{2} m v^2$$
où la masse $m$ est exprimée en $\text{kg}$, la vitesse $v$ en $\text{m/s}$, et l'énergie cinétique $E_c$ en $\text{J}$.
L'interface doit recueillir les valeurs saisies sans recharger la page, calculer $E_c$ et afficher le résultat directement dans le DOM.

### 1. Code HTML (structure)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Calculateur d'Énergie Cinétique</title>
</head>
<body>
    <h1>Calcul de l'énergie cinétique</h1>
    <form id="form-calcul">
        <label for="masse">Masse (kg) :</label>
        <input type="number" id="masse" step="any" required>
        <br>
        <label for="vitesse">Vitesse (m/s) :</label>
        <input type="number" id="vitesse" step="any" required>
        <br>
        <button type="submit" id="btn-calculer">Calculer</button>
    </form>
    <p id="affichage-resultat">Résultat : en attente de données.</p>

    <script src="script.js"></script>
</body>
</html>
```

### 2. Code JavaScript `script.js` (comportement)

```javascript
// Sélection des éléments dans l'arborescence DOM
const formulaire = document.getElementById("form-calcul");
const champMasse = document.getElementById("masse");
const champVitesse = document.getElementById("vitesse");
const paragrapheResultat = document.getElementById("affichage-resultat");

// Définition de l'écouteur d'événement sur la soumission
formulaire.addEventListener("submit", function(event) {
    // Interruption du rechargement automatique de la page
    event.preventDefault();

    // Extraction et conversion de type : les valeurs de champs sont des chaînes (string)
    const m = parseFloat(champMasse.value);
    const v = parseFloat(champVitesse.value);

    // Contrôle de validité des grandeurs physiques
    if (isNaN(m) || isNaN(v) || m < 0) {
        paragrapheResultat.textContent = "Erreur : saisie invalide.";
        return;
    }

    // Calcul de l'énergie cinétique : Ec = 0.5 * m * v^2
    const ec = 0.5 * m * Math.pow(v, 2);

    // Mise à jour ciblée du DOM
    paragrapheResultat.textContent = "Résultat : Ec = " + ec.toFixed(2) + " J";
});
```

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Typage implicite des champs de formulaires** :
  L'instruction `inputElement.value` renvoie **toujours** une chaîne de caractères (`string`), y compris pour les balises `<input type="number">`.
  * *Erreur type :* `"10" + "5"` produit `"105"` par concaténation.
  * *Correction :* Utiliser systématiquement la conversion explicite `parseFloat()` ou `Number()`.
* **Oubli de l'interruption du comportement par défaut** :
  Lors de la capture de l'événement `submit` sur un formulaire, l'absence de l'instruction `event.preventDefault()` provoque l'envoi immédiat d'une requête HTTP et le rechargement de la page, réinitialisant l'état du DOM.
* **Sécurité illusoire de la méthode $\text{POST}$** :
  La méthode $\text{POST}$ ne chiffre en aucun cas les données ; elle masque simplement les paramètres dans l'URI. En l'absence de chiffrement par protocole de transport (**HTTPS** / **TLS**), les données transitent en texte clair.
* **Confusion entre attribut et propriété du DOM** :
  Ne pas confondre la lecture de la valeur dynamique d'un champ (`champ.value`) avec la manipulation de son contenu textuel balisé (`noeud.textContent` ou `noeud.innerHTML`). Pour des raisons de sécurité contre les failles XSS (*Cross-Site Scripting*), privilégiez `textContent` à `innerHTML`.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
