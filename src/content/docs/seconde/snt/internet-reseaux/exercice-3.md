---
title: "Exercice 3 : Modèle économique des données et souveraineté numérique"
description: "Application pratique du chapitre Internet et Réseaux sociaux"
---

### 🌐 Contexte & Données scientifiques

Dans l'économie numérique contemporaine, l'accès à de nombreux services dits « gratuits » (moteurs de recherche, réseaux sociaux, boîtes mail) repose sur un modèle économique fondé sur la collecte, l'analyse et la monétisation des données personnelles. 

Soit un réseau social comptant $N$ utilisateurs actifs quotidiens. Chaque utilisateur génère en moyenne $D$ méoctets de données par jour (historique de navigation, interactions, géolocalisation, métadonnées). Ces données sont stockées et traitées dans des centres de données (*datacenters*) dont le coût énergétique et matériel est supporté par l'opérateur de la plateforme.

Considérons les paramètres suivants, basés sur des moyennes sectorielles observées :
*   Nombre d'utilisateurs actifs quotidiens : $N = 500\,000\,000$
*   Volume de données générées par utilisateur et par jour : $D = 2{,}5\text{ Mo}$
*   Revenu publicitaire moyen généré par gigaooctet de données valorisées : $R = 0{,}04\text{ \euro / Go}$
*   Coût moyen de stockage et de traitement par gigaooctet : $C = 0{,}005\text{ \euro / Go}$

Par ailleurs, la question de la **souveraineté numérique** pose le problème de la dépendance des infrastructures critiques et des données citoyennes envers des entités extraterritoriales (notamment soumises au droit américain comme le *CLOUD Act* ou aux lois de régulation chinoises).

---

### ❓ Énoncé

1. **Calcul du volume global :** En considérant qu'un gigaooctet (Go) équivaut à $1\,000$ méoctets (Mo), calculez le volume total de données (en Go) généré par l'ensemble des utilisateurs du réseau social en une seule journée. Exprimez le résultat sous forme scientifique.
2. **Analyse de la valeur économique :** Déterminez le chiffre d'affaires publicitaire journalier total $CA$ généré par cette exploitation des données, ainsi que le coût total journalier $Ct$ lié au stockage et au traitement. Déduisez-en le bénéfice net journalier $B$ de l'entreprise.
3. **Modélisation et compromis (Esprit critique) :** Si l'entreprise décidait de proposer une alternative payante garantissant la non-collecte des données personnelles pour un tarif de $5\text{ \euro}$ par mois et par utilisateur, quel pourcentage d'utilisateurs devrait basculer vers cette offre pour que l'entreprise compense exactement la perte de son bénéfice publicitaire journalier (calculé sur 30 jours) ? Discutez la faisabilité réaliste d'un tel modèle économique au regard des observations sociologiques sur le consentement des utilisateurs.
4. **Souveraineté numérique :** Expliquez en quoi la centralisation de ces flux de données sur des serveurs situés hors de l'Union Européenne soulève une question de souveraineté, en distinguant l'aspect technique (infrastructure) de l'aspect juridique (législation applicable).

---

### 💡 Indice de méthode

*   **Question 1 :** Procédez par étapes. Calculez d'abord le volume journalier pour un utilisateur en Go, puis multipliez par le nombre total d'utilisateurs $N$. Utilisez l'écriture scientifique $a \times 10^n$ avec $1 \le a < 10$.
*   **Question 2 :** Multipliez le volume total en Go par les taux unitaires $R$ et $C$ respectifs. Le bénéfice net se calcule par la différence entre les produits (recettes) et les charges (coûts).
*   **Question 3 :** Calculez d'abord le bénéfice net mensuel total (sur la base de 30 jours). Exprimez ensuite le nombre d'utilisateurs payants $n_p$ nécessaire pour atteindre cette même somme mensuelle, puis rapportez ce nombre à $N$ pour obtenir un pourcentage.
*   **Question 4 :** Mobilisez les notions de dépendance technologique (où sont physiquement les machines ?) et de juridiction (quelles lois s'appliquent aux données en cas de réquisition judiciaire ?).

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul du volume global de données
*   Volume journalier par utilisateur en Go : 
    $$D_{\text{Go}} = \frac{2{,}5\text{ Mo}}{1\,000} = 0{,}0025\text{ Go} = 2{,}5 \times 10^{-3}\text{ Go}$$
*   Volume global journalier pour $N = 5 \times 10^8$ utilisateurs :
    $$V_{\text{total}} = N \times D_{\text{Go}} = (5 \times 10^8) \times (2{,}5 \times 10^{-3}\text{ Go})$$
    $$V_{\text{total}} = 12{,}5 \times 10^5\text{ Go} = 1{,}25 \times 10^6\text{ Go} = 1\,250\,000\text{ Go}$$
Le volume total généré est de $1{,}25 \times 10^6\text{ Go}$ par jour (soit $1{,}25\text{ Pétaoctets}$).

#### 2. Analyse de la valeur économique
*   **Chiffre d'affaires publicitaire journalier ($CA$) :**
    $$CA = V_{\text{total}} \times R = 1\,250\,000 \times 0{,}04 = 50\,000\text{ \euro}$$
*   **Coût total journalier ($Ct$) :**
    $$Ct = V_{\text{total}} \times C = 1\,250\,000 \times 0{,}005 = 6\,250\text{ \euro}$$
*   **Bénéfice net journalier ($B$) :**
    $$B = CA - Ct = 50\,000 - 6\,250 = 43\,750\text{ \euro / jour}$$

#### 3. Modélisation et compromis
*   **Bénéfice net mensuel (sur 30 jours) :**
    $$B_{\text{mensuel}} = 43\,750 \times 30 = 1\,312\,500\text{ \euro}$$
*   Soit $n_p$ le nombre d'utilisateurs payant l'abonnement de $5\text{ \euro}$ pour compenser ce manque à gagner :
    $$5 \times n_p = 1\,312\,500 \implies n_p = \frac{1\,312\,500}{5} = 262\,500\text{ utilisateurs}$$
*   **Pourcentage d'utilisateurs nécessaires :**
    $$\text{Pourcentage} = \left( \frac{262\,500}{500\,000\,000} \right) \times 100 = 0{,}0525\text{ \%}$$
*   *Discussion critique :* Bien que mathématiquement très faible ($0{,}0525\text{ \%}$), ce modèle se heurte à des limites comportementales documentées en économie comportementale (le « paradoxe de la vie privée »). En pratique, une écrasante majorité d'utilisateurs refuse de payer pour un service perçu comme gratuit, même pour une modique somme, car l'utilité immédiate l'emporte sur la perception abstraite du coût lié à l'exploitation des données personnelles.

#### 4. Souveraineté numérique
La souveraineté numérique désigne la capacité d'un État ou d'une union d'États à maîtriser ses propres technologies, données et infrastructures. 
*   **Aspect technique :** Si le stockage physique des données (les *datacenters*) et le routage des paquets dépendent d'entreprises étrangères, l'infrastructure critique échappe au contrôle direct des autorités nationales en cas de crise géopolitique ou de panne majeure.
*   **Aspect juridique :** Des lois extraterritoriales (comme le *CLOUD Act* américain) permettent à des gouvernements étrangers d'exiger des entreprises nationales qu'elles fournissent des données stockées sur des serveurs, y compris situés hors de leur territoire national. Cela crée une vulnérabilité juridique pour les citoyens et les entreprises européennes, dont les données peuvent être soumises à des législations ne garantissant pas le même niveau de protection que le RGPD.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
