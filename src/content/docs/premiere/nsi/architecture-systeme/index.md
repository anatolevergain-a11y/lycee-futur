---
title: "Cours : Architecture matérielle et Systèmes d'exploitation"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

*   **Architecture de von Neumann :** Modèle organisationnel d'un ordinateur reposant sur quatre composantes principales : 
    1. L'**unité arithmétique et logique (UAL)** (ou ALU), qui effectue les opérations de base (calculs, comparaisons).
    2. L'**unité de commande**, qui orchestre le déroulement des instructions.
    3. La **mémoire**, qui stocke à la fois les données et les instructions du programme.
    4. Les **dispositifs d'entrée-sortie**, qui permettent les interactions avec l'extérieur.
*   **Cycle d'exécution d'une instruction :** Séquence fondamentale réalisée par le processeur (CPU) pour chaque instruction :
    1. *Recherche (Fetch)* : Le processeur lit l'instruction pointée par le compteur ordinal (PC) en mémoire.
    2. *Décodage (Decode)* : L'unité de commande analyse l'instruction pour déterminer l'opération à effectuer.
    3. *Exécution (Execute)* : L'UAL réalise l'opération effective.
    4. *Stockage (Writeback)* : Le résultat est écrit en mémoire ou dans un registre.
*   **Système d'exploitation (SE) :** Logiciel (ou ensemble de logiciels) qui gère les ressources matérielles d'un ordinateur et offre des services communs aux logiciels applicatifs.
*   **Processus :** Programme en cours d'exécution. Il dispose de son propre espace mémoire et de ses propres ressources. Un SE gère l'alternance de ces processus via l'**ordonnancement**.
*   **Gestion des ressources et des droits :** Le système d'exploitation isole les processus entre eux (protection mémoire) et gère les permissions d'accès aux fichiers (lecture, écriture, exécution) pour garantir la sécurité et la stabilité du système.

---

## 📐 2. Formules et Propriétés fondamentales

*   **Capacité d'adressage mémoire :** Si un processeur utilise un bus d'adresses de $n$ bits, le nombre maximal de cellules mémoire adressables distinctes est donné par :
    $$N = 2^n$$

*   **Capacité de stockage :** Les multiples de l'octet (byte) en informatique suivent une progression binaire (norme IEC) ou décimale. En NSI, on utilise principalement les puissances de $2$ :
    *   $1 \text{ Kio (Kibibyte)} = 2^{10} \text{ octets} = 1024 \text{ octets}$
    *   $1 \text{ Mio (Mebibyte)} = 2^{20} \text{ octets} = 1024 \text{ Kio}$
    *   $1 \text{ Gio (Gibibyte)} = 2^{30} \text{ octets} = 1024 \text{ Mio}$

*   **Lien entre fréquence et temps d'horloge :** La fréquence $f$ d'un processeur (exprimée en Hertz, $\text{Hz}$) détermine le nombre de cycles par seconde. La durée d'un cycle d'horloge $T$ est l'inverse de la fréquence :
    $$T = \frac{1}{f}$$
    *(avec $f$ en $\text{Hz}$ et $T$ en secondes)*

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Un ordinateur dispose d'un bus d'adresses de $32$ bits. 
1. Quel est le nombre maximal d'adresses mémoire distinctes que le processeur peut manipuler ? Exprimez le résultat sous forme d'une puissance de $2$, puis sous forme d'une valeur décimale approchée.
2. Si chaque adresse mémoire permet de stocker un octet, quelle est la capacité maximale de mémoire vive (RAM) gérable par ce processeur, exprimée en Gio ?

**Résolution :**
1. D'après le cours, le nombre maximal d'adresses pour un bus de $n$ bits est $2^n$.
   Ici $n = 32$, donc le nombre d'adresses est $2^{32}$.
   Calculons la valeur décimale :
   $$2^{32} = 2^{30} \times 2^2 = 4 \times 2^{30} = 4\,294\,967\,296 \text{ adresses}$$

2. Si chaque adresse correspond à $1 \text{ octet}$, la capacité totale est de $4\,294\,967\,296 \text{ octets}$.
   Convertissons cette valeur en Gio sachant que $1 \text{ Gio} = 2^{30} \text{ octets}$ :
   $$\text{Capacité} = \frac{2^{32} \text{ octets}}{2^{30} \text{ octets/Gio}} = 2^2 \text{ Gio} = 4 \text{ Gio}$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Piège classique sur les unités :** Ne pas confondre les préfixes décimaux (kilo, méga, giga du système international, puissances de $10$) et les préfixes binaires (kibi, mébi, gibi, puissances de $2$). En NSI, soyez rigoureux sur l'utilisation des unités : $1 \text{ Ko} = 10^3 \text{ octets}$ tandis que $1 \text{ Kio} = 2^{10} \text{ octets}$.
*   **Confusion Architecture / Système d'exploitation :** Veillez à bien distinguer le matériel (le processeur exécute les instructions de von Neumann) du logiciel (le système d'exploitation gère les processus et les E/S). Un processeur seul ne sait pas gérer plusieurs utilisateurs ou la protection des fichiers.
*   **Attention aux notations en mathématiques LaTeX :** N'utilisez jamais d'accents ou de symboles non mathématiques directement dans les balises de formule $\$$ ou $\$$, et utilisez toujours la commande `\text{...}` pour insérer des unités (par exemple : $f = 2,5 \times 10^9 \text{ Hz}$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
