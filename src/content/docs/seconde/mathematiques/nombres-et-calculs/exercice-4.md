---
title: "Exercice 4 : Comparaison de tarifs de streaming"
description: "Application pratique du chapitre Nombres et calculs"
---

### 🌐 Contexte concret

Pour visionner ses films et séries préférés, Léa hésite entre trois abonnements sur une plateforme de streaming. Elle cherche à déterminer l'offre la plus avantageuse en fonction de sa consommation annuelle.

Voici les trois formules proposées par la plateforme pour une année :
*   **Formule A** : Un tarif fixe de $8\text{ \u20ac}$ par mois, sans condition.
*   **Formule B** : Un abonnement annuel de $40\text{ \u20ac}$ auquel s'ajoute un tarif préférentiel de $3\text{ \u20ac}$ par mois où un film est loué.
*   **Formule C** : Un paiement unique de $100\text{ \u20ac}$ pour un accès illimité pendant toute l'année, sans aucun frais supplémentaire.

### ❓ Énoncé (3 à 4 questions progressives)

1. **Calculs de base :** Calculer le coût annuel total pour chaque formule si Léa loue des films pendant $6$ mois dans l'année.
2. **Mise en équation / Expression littérale :** Soit $x$ le nombre de mois dans l'année où Léa loue des films ($0 \le x \le 12$). Exprimer en fonction de $x$ le coût annuel $A(x)$, $B(x)$ et $C(x)$ pour chacune des trois formules.
3. **Résolution d'inéquation :** À partir de combien de mois de location par an la Formule B devient-elle plus avantageuse que la Formule A ?
4. **Synthèse :** Quelle formule Léa doit-elle choisir si elle prévoit de louer des films exactement $4$ mois dans l'année ? Et si elle prévoit d'en louer $10$ mois ?

### 💡 Indice

*   *Pour la question 1 :* Pensez à convertir les durées (attention au passage des mois à l'année). Pour la formule A, l'abonnement court sur 12 mois.
*   *Pour la question 2 :* Le coût total est souvent la somme d'un abonnement fixe et d'un tarif proportionnel au nombre $x$ de mois.
*   *Pour la question 3 :* Traduisez la condition « la Formule B est plus avantageuse que la Formule A » par une inéquation mathématique du type $B(x) < A(x)$.

### 📋 Correction détaillée pas à pas

#### Question 1 : Coût pour $6$ mois de location
*   **Formule A** : L'abonnement est de $8\text{ \u20ac}$ par mois, appliqué sur toute l'année ($12$ mois).
    $$\text{Coût}_A = 8 \times 12 = 96\text{ \u20ac}$$
*   **Formule B** : Un forfait annuel de $40\text{ \u20ac}$ plus $3\text{ \u20ac}$ par mois pour les $6$ mois de location.
    $$\text{Coût}_B = 40 + (3 \times 6) = 40 + 18 = 58\text{ \u20ac}$$
*   **Formule C** : Un tarif unique illimité de $100\text{ \u20ac}$.
    $$\text{Coût}_C = 100\text{ \u20ac}$$

#### Question 2 : Expression des coûts en fonction de $x$
Soit $x$ le nombre de mois de location ($0 \le x \le 12$).
*   **Formule A** : Le coût ne dépend pas du nombre de mois de location, il est constant sur l'année :
    $$A(x) = 8 \times 12 = 96$$
*   **Formule B** : Le coût comprend l'abonnement fixe de $40\text{ \u20ac}$ et les frais variables de $3\text{ \u20ac}$ par mois de location $x$ :
    $$B(x) = 3x + 40$$
*   **Formule C** : Le coût est fixe, indépendant de $x$ :
    $$C(x) = 100$$

#### Question 3 : Comparaison des formules A et B
La Formule B est plus avantageuse (moins chère) que la Formule A si et seulement si :
$$B(x) < A(x)$$
$$\iff 3x + 40 < 96$$

Résolvons cette inéquation du premier degré :
$$3x < 96 - 40$$
$$3x < 56$$
$$x < \frac{56}{3}$$

Or, $\frac{56}{3} \approx 18,67$. Comme $x$ représente un nombre entier de mois compris entre $0$ et $12$, cette condition est vraie pour tous les entiers $x$ tels que $x \le 12$. 
*(Remarque : Pour tout nombre de mois de l'année, la formule B est donc toujours moins chère que la formule A, car $3(12) + 40 = 76\text{ \u20ac}$, ce qui reste inférieur à $96\text{ \u20ac}$.)*

#### Question 4 : Choix selon la consommation
Evaluons les coûts pour $x = 4$ et $x = 10$ :

*   **Si $x = 4$ mois :**
    *   $A(4) = 96\text{ \u20ac}$
    *   $B(4) = 3(4) + 40 = 12 + 40 = 52\text{ \u20ac}$
    *   $C(4) = 100\text{ \u20ac}$
    *   *Conclusion :* Pour $4$ mois, **la Formule B** est la plus avantageuse (la moins chère avec $52\text{ \u20ac}$).

*   **Si $x = 10$ mois :**
    *   $A(10) = 96\text{ \u20ac}$
    *   $B(10) = 3(10) + 40 = 30 + 40 = 70\text{ \u20ac}$
    *   $C(10) = 100\text{ \u20ac}$
    *   *Conclusion :* Pour $10$ mois, **la Formule B** reste également la plus avantageuse ($70\text{ \u20ac}$). *(La formule C ne devient intéressante que si l'on souhaite un accès illimité toute l'année, mais financièrement, la formule B reste ici sous le seuil des $100\text{ \u20ac}$).*

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
