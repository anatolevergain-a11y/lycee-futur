---
title: "Exercice 1 : Moteurs de recherche et algorithmes de classement"
description: "Application pratique du chapitre Le Web, les Données et la Géolocalisation"
---

### 🌐 Contexte & Données scientifiques

Avec l'exponentielle croissance du volume d'informations sur le Web, l'accès à l'information pertinente ne dépend plus seulement de sa simple existence, mais de sa capacité à être indexée et classée par des algorithmes. On estime à plus de $1,9 \times 10^{9}$ le nombre de sites web actifs, dont seule une infime fraction est consultée régulièrement.

Un moteur de recherche moderne ne parcourt pas le Web en temps réel lorsqu'un utilisateur tape une requête. Il repose sur trois phases fondamentales :
1. **L'exploration (Crawl)** : Des robots logiciels (les *crawlers* ou *spiders*) parcourent l'hypertexte en suivant les URL.
2. **L'indexation** : Les données textuelles et sémantiques sont analysées, nettoyées et stockées dans des bases de données géantes inversées pour associer chaque mot aux documents qui le contiennent.
3. **Le classement (Ranking)** : Lorsqu'une requête est émise, un algorithme attribue un score de pertinence à chaque page indexée.

Historiquement, le calcul de la popularité d'une page a été révolutionné par des algorithmes de type *PageRank*, modélisant la navigation d'un internaute ("l'internaute aléatoire") par une chaîne de Markov. Soit $P$ une page web. Sa probabilité de visite à long terme $R(P)$ dépend du nombre de liens hypertextes (les *backlinks*) pointant vers elle, pondéré par la popularité des pages sources :

$$R(P) = (1 - d) + d \sum_{T \in B_P} \frac{R(T)}{C(T)}$$

*   $B_P$ est l'ensemble des pages qui font un lien vers $P$.
*   $C(T)$ est le nombre total de liens sortants sur la page $T$.
*   $d$ est un facteur d'amortissement (généralement fixé empiriquement à $d \approx 0,85$), représentant la probabilité qu'un utilisateur continue de cliquer sur un lien plutôt que de fermer le navigateur ou de taper une nouvelle URL.
*   $(1 - d)$ représente la probabilité initiale ou de téléportation vers n'importe quelle page.

---

### ❓ Énoncé

Soit un mini-web simplifié constitué de quatre pages seulement : $A$, $B$, $C$ et $D$. Les liens hypertextes unidirectionnels entre ces pages sont schématisés ainsi :
*   La page $A$ pointe vers $B$ et $C$.
*   La page $B$ pointe vers $C$.
*   La page $C$ pointe vers $A$.
*   La page $D$ pointe vers $C$.

On pose le facteur d'amortissement $d = 0,85$. Pour simplifier les calculs initiaux dans cet exercice, nous poserons une variante sans amortissement (ou $d=1$) pour la **Question 1**, avant d'introduire la complexité réelle aux questions suivantes.

1. **Modélisation par graphe et matrice** : Représentez ce mini-web par un système d'équations ou un graphe orienté. Calculez le nombre de liens sortants $C(T)$ pour chaque page du système.
2. **Analyse critique des critères de classement** : Expliquez pourquoi un algorithme basé uniquement sur le nombre de liens entrants (popularité brute) ou sur la simple occurrence des mots-clés (*Keyword Stuffing*) présente des limites scientifiques et éthiques majeures face à la complexité sémantique et aux tentatives de manipulation (fermes de liens).
3. **Résolution itérative simplifiée** : En l'absence d'amortissement ($d = 1$), si on pose les scores initiaux de popularité à $R_0(A) = R_0(B) = R_0(C) = R_0(D) = 1$, calculez les scores de popularité après une première itération (étape $1$).
4. **Limites et compromis des algorithmes actuels** : Les moteurs de recherche modernes ne se limitent plus à la structure des liens (PageRank historique) : ils intègrent le traitement automatique du langage naturel (NLP), la personnalisation géographique et l'historique de navigation. Discutez des compromis entre la pertinence algorithmique, la consommation énergétique des data centers nécessaires ($> 1\%$ de l'électricité mondiale) et la protection de la vie privée des utilisateurs (RGPD).

---

### 💡 Indice de méthode

*   **Pour la Question 1** : Listez rigoureusement pour chaque page $X$ l'ensemble de ses "parents" (les pages qui pointent vers $X$, soit $B_X$) et son nombre de liens sortants $C(X)$.
*   **Pour la Question 2** : Sondez la notion de "biais de confirmation" et de "manipulation algorithmique" (SEO abusif). Un lien a-t-il la même valeur s'il provient d'un site institutionnel reconnu ou d'un blog spammeur ?
*   **Pour la Question 3** : Appliquez la formule de récurrence pour chaque page en injectant les scores de l'étape précédente. Veillez à bien diviser par le nombre de liens sortants de la page source.
*   **Pour la Question 4** : Structurez votre réflexion en deux axes : d'une part l'impact environnemental (matériel, serveurs, refroidissement), d'autre part l'éthique des données personnelles (profilage).

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation par graphe et comptage des liens sortants
Analysons les connexions du mini-web :
*   **Page $A$** : pointe vers $B$ et $C$. Donc $C(A) = 2$. Ses backlinks (pages pointant vers $A$) proviennent de $C$. ($B_A = \{C\}$).
*   **Page $B$** : pointe vers $C$. Donc $C(B) = 1$. Ses backlinks proviennent de $A$. ($B_B = \{A\}$).
*   **Page $C$** : pointe vers $A$. Donc $C(C) = 1$. Ses backlinks proviennent de $A$, $B$ et $D$. ($B_C = \{A, B, D\}$).
*   **Page $D$** : pointe vers $C$. Donc $C(D) = 1$. Ses backlinks : aucun. ($B_D = \emptyset$).

#### 2. Analyse critique des critères de classement
*   *Limite du comptage des mots-clés* : Une technique historique consistait à répéter un mot-clé de manière invisible (même couleur que le fond) pour tromper le robot. C'est inefficace sémantiquement car le contexte échappe à un simple comptage (ex: la polysémie du mot "avocat").
*   *Limite de la popularité brute* : Compter uniquement les liens entrants favorise les structures anciennes au détriment de la fraîcheur de l'information et est vulnérable aux "fermes de liens" (réseaux de sites créés artificiellement pour se faire des liens mutuels et gonfler artificiellement leur score).

#### 3. Résolution itérative (itération 1, $d=1$)
En utilisant la formule simplifiée sans amortissement $R_{n+1}(P) = \sum_{T \in B_P} \frac{R_n(T)}{C(T)}$ avec $R_0 = 1$ pour toutes les pages :
*   $R_1(A) = \frac{R_0(C)}{C(C)} = \frac{1}{1} = 1$
*   $R_1(B) = \frac{R_0(A)}{C(A)} = \frac{1}{2} = 0,5$
*   $R_1(C) = \frac{R_0(A)}{C(A)} + \frac{R_0(B)}{C(B)} + \frac{R_0(D)}{C(D)} = \frac{1}{2} + \frac{1}{1} + \frac{1}{1} = 0,5 + 1 + 1 = 2,5$
*   $R_1(D) = 0$ (aucun lien entrant, sa popularité s'annule dans ce modèle strict sans facteur de téléportation $(1-d)$).

*Bilan à l'étape 1* : $C$ devient la page la plus populaire de ce sous-réseau, car elle accumule des flux de $A$, $B$ et $D$.

#### 4. Limites et compromis (Efficacité vs Éthique & Environnement)
*   **Compromis Énergétique** : L'indexation du Web mondial et l'exécution d'algorithmes complexes d'apprentissage profond (*Deep Learning*) sur des milliards de requêtes quotidiennes exigent des infrastructures de serveurs massives (Data Centers). Cela engendre une consommation électrique considérable et une empreinte carbone élevée, posant la question de la durabilité de la recherche d'information instantanée.
*   **Compromis Vie Privée / Personnalisation** : Pour affiner la pertinence (notamment géographique ou contextuelle), les moteurs collectent de vastes quantités de données personnelles (historique, géolocalisation IP ou GPS). Cela pose des risques d'atteinte à la vie privée et favorise l'apparition de "bulles de filtres", où l'algorithme enferme l'utilisateur dans ses biais cognitifs en ne lui montrant que ce qu'il est prédisposé à aimer ou croire.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
