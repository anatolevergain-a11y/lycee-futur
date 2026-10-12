---
title: "Exercice 1 : Interaction client-serveur"
description: "Application pratique du chapitre Interfaces Homme-Machine (IHM) Web"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de la modernisation du système d'information d'un établissement de santé, on étudie l'impact des choix architecturaux d'une Interface Homme-Machine (IHM) web sur la bande passante et le temps de latence. L'application permet au personnel médical de consulter et de mettre à jour le dossier pharmaceutique d'un patient.

L'interaction repose sur le protocole HTTP. Soit $N$ le nombre de requêtes émises par le navigateur client (le front-end) vers le serveur (le back-end) au cours d'une session de travail type d'une durée de $T = 300 \text{ s}$.

On relève les caractéristiques techniques suivantes lors d'une session standard :
* Taille moyenne d'une requête HTTP (envoi de formulaire ou de paramètres) : $S_{\text{requête}} = 1,2 \text{ ko}$.
* Taille moyenne d'une réponse HTTP (données brutes au format JSON ou pages HTML complètes) : $S_{\text{réponse}} = 45,0 \text{ ko}$.
* Débit nominal de la liaison réseau locale : $D = 100 \text{ Mbit/s}$ (mégabits par seconde).
* Temps de traitement moyen par le serveur pour une requête : $T_{\text{traitement}} = 15 \text{ ms}$.

Deux architectures sont comparées pour la mise à jour dynamique des données dans l'IHM :
1. **Architecture A (Rendu côté serveur - MPA / *Multi-Page Application*)** : Chaque action de l'utilisateur recharge entièrement la page web. Le volume moyen de données transférées par interaction est de $S_{\text{A}} = S_{\text{requête}} + S_{\text{réponse}}$.
2. **Architecture B (Application monopage asynchrone - SPA / *Single Page Application* via AJAX / `fetch`)** : Seules les données utiles sont échangées au format JSON. Le volume moyen par interaction est de $S_{\text{B}} = S_{\text{requête}} + 4,5 \text{ ko}$ (le rendu graphique étant géré localement par le navigateur via JavaScript).

On pose $N_{\text{A}} = 40$ le nombre d'interactions pour l'architecture A et $N_{\text{B}} = 120$ le nombre d'interactions (plus granulaire) pour l'architecture B sur la même période.

---

### ❓ Énoncé

1. **Calcul du volume de données** : 
   Calculer le volume total de données $V_{\text{A}}$ (en ko) échangées sur le réseau pour l'architecture A, puis le volume $V_{\text{B}}$ (en ko) pour l'architecture B. Exprimer ces volumes en kibioctets ($\text{Kio}$) sachant que $1 \text{ Kio} = 1024 \text{ o}$ et $1 \text{ ko} = 1000 \text{ o}$.

2. **Analyse de la transmission réseau** : 
   En considérant uniquement le temps de transmission théorique $T_{\text{trans}} = \frac{\text{Volume total (en bits)}}{\text{Débit } D}$, déterminer quelle architecture minimise le temps passé par les données sur le canal de communication. On exprimera les résultats en millisecondes ($\text{ms}$).

3. **Modélisation de la latence globale et compromis** : 
   Le temps de réponse perçu par l'utilisateur pour une interaction unique est modélisé par la somme du temps de transmission, du temps de traitement serveur, et d'un temps fixe d'affichage côté client $T_{\text{client}} = 20 \text{ ms}$. 
   Calculer le temps moyen d'une interaction pour l'architecture A et pour l'architecture B. Discuter des limites de ce modèle mathématique face à la complexité réelle des IHM web modernes (notamment la charge de calcul côté navigateur).

---

### 💡 Indice de méthode

* **Attention aux unités** : Veillez à bien convertir les débits (exprimés en bits par seconde) et les tailles de fichiers (exprimées en octets, ko ou Kio). Rappel : $1 \text{ octet} (\text{o}) = 8 \text{ bits}$.
* **Formule du débit** : Pour un volume $V$ en octets, la taille en bits est $V \times 8$. Le temps de transmission en secondes est donné par $\frac{V \times 8}{D}$, avec $D$ en bits par seconde ($\text{bit/s}$).
* **Esprit critique** : Un volume de données plus faible ne garantit pas nécessairement une meilleure expérience utilisateur si le traitement local (exécution de scripts JavaScript lourds) sature le processeur de la machine cliente.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul du volume de données échangées

* **Architecture A (Rendu côté serveur)** :
  Le volume par interaction est :
  $$S_{\text{A}} = 1,2 + 45,0 = 46,2 \text{ ko}$$
  Pour $N_{\text{A}} = 40$ interactions :
  $$V_{\text{A}} = 40 \times 46,2 \text{ ko} = 1848,0 \text{ ko}$$
  En conversion octets ($1 \text{ ko} = 1000 \text{ o}$) : 
  $$1848 \times 1000 = 1\,848\,000 \text{ o}$$
  En kibioctets ($\text{Kio}$) :
  $$V_{\text{A, Kio}} = \frac{1\,848\,000}{1024} \approx 1804,69 \text{ Kio}$$

* **Architecture B (Application asynchrone SPA)** :
  Le volume par interaction est :
  $$S_{\text{B}} = 1,2 + 4,5 = 5,7 \text{ ko}$$
  Pour $N_{\text{B}} = 120$ interactions :
  $$V_{\text{B}} = 120 \times 5,7 \text{ ko} = 684,0 \text{ ko}$$
  En conversion octets :
  $$684 \times 1000 = 684\,000 \text{ o}$$
  En kibioctets ($\text{Kio}$) :
  $$V_{\text{B, Kio}} = \frac{684\,000}{1024} \approx 667,97 \text{ Kio}$$

* *Bilan partiel* : Bien que l'architecture B multiplie les requêtes par $3$, le volume total de données transférées est réduit d'un facteur $\frac{1848}{684} \approx 2,7$, illustrant l'efficacité du transfert de données minimales via JSON par rapport au rechargement de pages complètes.

---

#### 2. Analyse de la transmission réseau

Le débit est $D = 100 \text{ Mbit/s} = 100 \times 10^6 \text{ bit/s} = 12\,500 \text{ ko/s}$ (car $100 \times 10^6 / (8 \times 10^3)$).

* **Temps de transmission total pour l'architecture A** :
  $$T_{\text{trans, A}} = \frac{1848 \text{ ko}}{12500 \text{ ko/s}} = 0,14784 \text{ s} = 147,84 \text{ ms}$$

* **Temps de transmission total pour l'architecture B** :
  $$T_{\text{trans, B}} = \frac{684 \text{ ko}}{12500 \text{ ko/s}} = 0,05472 \text{ s} = 54,72 \text{ ms}$$

L'architecture B réduit significativement le temps cumulé passé sur le réseau, malgré un nombre d'allers-retours client-serveur plus élevé.

---

#### 3. Modélisation de la latence globale et esprit critique

* **Temps moyen par interaction** :
  * Pour l'architecture A ($N_{\text{A}} = 40$) :
    Le temps global est la somme du temps de transmission total, du traitement serveur cumulé ($N_{\text{A}} \times T_{\text{traitement}}$) et du temps client cumulé ($N_{\text{A}} \times T_{\text{client}}$) :
    $$\text{Temps}_{\text{total, A}} = 147,84 + (40 \times 15) + (40 \times 20) = 147,84 + 600 + 800 = 1547,84 \text{ ms}$$
    Le temps moyen par interaction est donc :
    $$\bar{t}_{\text{A}} = \frac{1547,84 \text{ ms}}{40} \approx 38,70 \text{ ms}$$

  * Pour l'architecture B ($N_{\text{B}} = 120$) :
    $$\text{Temps}_{\text{total, B}} = 54,72 + (120 \times 15) + (120 \times 20) = 54,72 + 1800 + 2400 = 4254,72 \text{ ms}$$
    Le temps moyen par interaction est donc :
    $$\bar{t}_{\text{B}} = \frac{4254,72 \text{ ms}}{120} \approx 35,46 \text{ ms}$$

* **Limites du modèle et analyse critique** :
  Si le temps moyen par interaction est légèrement inférieur pour l'architecture B ($35,46 \text{ ms}$ contre $38,70 \text{ ms}$), ce modèle omet des variables technologiques déterminantes :
  1. **Le coût de la latence réseau unitaire (*Round Trip Time* - RTT)** : Chaque requête HTTP subit une latence incompressible due à la distance physique et aux équipements réseaux (routeurs), indépendamment de la taille du paquet. Multiplier par $3$ le nombre de requêtes (Architecture B) multiplie d'autant les temps d'établissement de connexion, ce que notre modèle macroscopique linéaire masque.
  2. **La charge CPU côté client** : Dans une SPA (Arch. B), le navigateur doit exécuter des scripts complexes pour interpréter le JSON et reconstruire le DOM (Document Object Model). Sur des terminaux médicaux anciens ou mobiles, cela induit un blocage du thread principal, dégradant l'Ergonomie de l'IHM (ressenti de saccades).
  3. **Compromis global** : L'ingénieur en IHM doit donc arbitrer entre la bande passante consommée (faveur à l'arch. B) et la simplicité de traitement ainsi que la robustesse de l'architecture (faveur à l'arch. A).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
