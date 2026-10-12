---
title: "Exercice 1 : Chiffrement symétrique vs asymétrique (RSA)"
description: "Application pratique du chapitre Cryptographie et sécurité des données"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la sécurisation des communications sur les réseaux informatiques mondiaux, l'utilisation conjointe de la cryptographie symétrique et asymétrique est indispensable. Chacune de ces approches repose sur des paradigmes mathématiques et algorithmiques différents, impliquant des compromis complexes entre la **sécurité théorique**, la **charge de calcul** (complexité temporelle) et la **gestion des clés** (problème de distribution).

Considérons un système de communication sécurisée manipulant un message textuel représenté par un entier numérique $m$. 

1. **Le chiffrement symétrique (type AES)** utilise une clé secrète unique $k$ partagée entre l'émetteur et le récepteur. 
   - Complexité algorithmique : $\mathcal{O}(N)$ où $N$ est la taille du message.
   - Les opérations sur les blocs de données sont des substitutions et des permutations rapides, optimisées pour le matériel.

2. **Le chiffrement asymétrique (type RSA)** utilise une paire de clés : une clé publique $(e, n)$ pour le chiffrement et une clé privée $(d, n)$ pour le déchiffrement. 
   - Le paramètre $n$ est le produit de deux grands nombres premiers distincts $p$ et $q$ : $n = p \times q$.
   - La fonction de chiffrement d'un message $m$ ($0 \le m < n$) est définie par :
     $$c \equiv m^e \pmod{n}$$
   - La fonction de déchiffrement correspondante est :
     $$m \equiv c^d \pmod{n}$$
   - La sécurité repose sur la difficulté computationnelle du problème de la factorisation d'entiers en nombres premiers.

Pour une clé RSA de taille $|n| = 2048 \text{ bits}$, les estimations de puissance de calcul et les standards actuels (recommandations ANSSI / NIST) montrent que le coût temporel d'une opération modulaire exponentielle est environ $1000$ fois supérieur à celui d'un chiffrement AES-128 pour un même volume de données. C'est pourquoi les protocoles réels (comme TLS) emploient un mécanisme hybride : l'asymétrique sert à échanger de manière sécurisée une clé symétrique éphémère, et le symétrique chiffre le flux de données proprement dit.

---

### ❓ Énoncé

On souhaite étudier un cas jouet d'application du système RSA et analyser les compromis d'implémentation. Soit les nombres premiers $p = 61$ et $q = 53$.

1. **Calcul des paramètres initiaux et de l'indicatrice d'Euler** :
   Déterminer le module de chiffrement $n$ ainsi que la valeur de l'indicatrice d'Euler $\phi(n) = (p-1)(q-1)$. Expliciter le rôle de $n$ dans la structure du chiffrement RSA.

2. **Détermination des clés** :
   On choisit l'exposant public $e = 17$. 
   Vérifier que $e$ est premier avec $\phi(n)$. En utilisant l'algorithme d'Euclide étendu (ou par déduction logique guidée), déterminer l'exposant privé $d$ tel que $e \times d \equiv 1 \pmod{\phi(n)}$, avec $0 < d < \phi(n)$.

3. **Opération cryptographique (Chiffrement et Déchiffrement)** :
   Un utilisateur souhaite transmettre le message numérique $m = 65$.
   Calculer le texte chiffré $c$ (on posera les étapes de l'exponentiation modulaire). Vérifier ensuite que l'application de la clé privée restitue bien le message initial $m$.

4. **Analyse critique et compromis système** :
   En sachant que la factorisation de $n$ permet de retrouver $p$ et $q$, et donc de calculer $d$, discutez de l'impact de l'augmentation de la taille de $n$ (passant de $2048 \text{ bits}$ à $4096 \text{ bits}$) sur la sécurité face aux progrès algorithmiques, tout en évaluant la contrainte sur les performances des serveurs web à fort trafic.

---

### 💡 Indice de méthode

- **Indice 1 (Q1 & Q2)** : Rappelez-vous que $\phi(n)$ représente le nombre d'entiers strictement inférieurs à $n$ et premiers avec $n$. Pour trouver $d$, cherchez un entier $d$ tel que $17 \times d = k \times \phi(n) + 1$ pour un certain entier $k \ge 1$.
- **Indice 2 (Q3)** : Pour calculer $m^e \pmod{n}$ sans saturer la mémoire avec de grands nombres, utilisez la méthode de l'exponentiation rapide (ou binaire) en réduisant modulo $n$ à chaque étape multiplicative.
- **Indice 3 (Q4)** : Mettez en balance la complexité asymptotique des algorithmes de factorisation (comme le crible général du corps de nombres, GNFS) et la loi de Moore ou l'avènement potentiel du calcul quantique (algorithme de Shor).

---

### 📋 Correction détaillée pas à pas

1. **Calcul du module et de l'indicatrice d'Euler** :
   - Le module $n$ est le produit de $p$ et $q$ :
     $$n = 61 \times 53 = 3233$$
   - L'indicatrice d'Euler $\phi(n)$ se calcule ainsi :
     $$\phi(n) = (61 - 1) \times (53 - 1) = 60 \times 52 = 3120$$
   - *Rôle de $n$* : $n$ appartient à la fois à la clé publique et à la clé privée. Sa taille définit l'espace des messages possibles ($0 \le m < n$) et sa robustesse repose sur la difficulté de retrouver $p$ et $q$ à partir de sa seule connaissance.

2. **Détermination de l'exposant privé $d$** :
   - On vérifie que $\text{PGCD}(e, \phi(n)) = \text{PGCD}(17, 3120) = 1$. L'exposant $e$ est donc valide.
   - On cherche $d$ tel que :
     $$17 \times d \equiv 1 \pmod{3120}$$
     C'est-à-dire $17d = 3120k + 1$ pour $k \in \mathbb{N}$.
   - Par application de l'algorithme d'Euclide étendu :
     $$\begin{aligned}
     3120 &= 183 \times 17 + 9 \\
     17 &= 1 \times 9 + 8 \\
     9 &= 1 \times 8 + 1
     \end{aligned}$$
     En remontant les équations :
     $$\begin{aligned}
     1 &= 9 - 1 \times 8 \\
     &= 9 - 1 \times (17 - 1 \times 9) = 2 \times 9 - 1 \times 17 \\
     &= 2 \times (3120 - 183 \times 17) - 1 \times 17 \\
     &= 2 \times 3120 - 367 \times 17
     \end{aligned}$$
     On obtient $-367 \times 17 \equiv 1 \pmod{3120}$. 
     Pour obtenir un entier positif $d$ dans l'intervalle $[0, 3120[$ :
     $$d = -367 + 3120 = 2753$$
     L'exposant privé est donc $d = 2753$.

3. **Chiffrement et Déchiffrement** :
   - **Chiffrement de $m = 65$** :
     On calcule $c \equiv 65^{17} \pmod{3233}$.
     Par exponentiation rapide :
     - $65^1 \equiv 65 \pmod{3233}$
     - $65^2 = 4225 \equiv 992 \pmod{3233}$
     - $65^4 \equiv 992^2 = 984064 \equiv 1355 \pmod{3233}$
     - $65^8 \equiv 1355^2 = 1836025 \equiv 2057 \pmod{3233}$
     - $65^{16} \equiv 2057^2 = 4231249 \equiv 1475 \pmod{3233}$
     Ainsi, $65^{17} = 65^{16} \times 65^1 \equiv 1475 \times 65 = 95875 \equiv \mathbf{2705} \pmod{3233}$.
     Le texte chiffré est $c = 2705$.

   - **Déchiffrement de $c = 2705$** :
     On calcule $m' \equiv 2705^{2753} \pmod{3233}$.
     En appliquant la même méthode d'exponentiation modulaire rapide pour l'exposant $2753$ (dont la représentation binaire est $101011000001_2$), on trouve :
     $$m' \equiv \mathbf{65} \pmod{3233}$$
     Le message initial est correctement restitué.

4. **Analyse critique et compromis système** :
   - *Sécurité vs Performance* : Doubler la taille de la clé RSA (passer de $2048 \text{ bits}$ à $4096 \text{ bits}$) augmente de manière drastique la sécurité contre les attaques par factorisation classique (le coût du GNFS croît de manière sous-exponentielle). Cependant, les coûts de calcul pour l'exponentiation modulaire augmentent cubiquement ($\mathcal{O}(|n|^3)$), ce qui s'avère pénalisant pour des serveurs traitant des milliers de connexions simultanées (risque d'attaques par déni de service par saturation CPU).
   - *Modèle hybride* : C'est pourquoi la cryptographie moderne n'utilise jamais RSA pour chiffrer de longs flux de données, mais uniquement pour authentifier et échanger une clé symétrique (AES), combinant ainsi l'efficacité du symétrique et la sécurité de l'établissement de liaison asymétrique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
