---
title: "Exercice : Nombres et calculs"
description: "Démonstration appliquée : Calcul de pourcentages et remises lors du Black Friday"
---

### 🌐 Contexte

À l'approche du *Black Friday*, les enseignes commerciales rivalisent d'ingéniosité pour attirer les consommateurs en affichant des offres promotionnelles spectaculaires. Entre « promotions flash » et « remises cumulées », il est fréquent que les clients interprètent mal les baisses réelles de prix. 

En tant que consommateur éclairé, les mathématiques — et particulièrement les outils de calcul d'évolutions (coefficients multiplicateurs, taux de variation, évolutions successives et réciproques) — permettent de déjouer les pièges marketing et d'évaluer précisément la réalité d'une offre.

---

### ❓ Énoncé

Un magasin d'électronique propose un smartphone reconditionné affiché au prix initial de $P_0 = 400\text{ \texteuro}$.

À l'occasion du *Black Friday*, le commerçant met en place l'opération suivante :
1. Une **première remise de $20\text{ \%}$** est appliquée sur le prix initial dès l'ouverture.
2. En fin de journée, pour écouler les stocks restants, une **remise supplémentaire de $15\text{ \%}$** est accordée sur le prix déjà réduit.

Une affiche publicitaire en vitrine annonce fièrement :  
> *« Super promo : cumulez nos remises pour un total exceptionnel de $35\text{ \%}$ de réduction immédiate ! »*

1. **Calcul du prix intermédiaire**  
   Déterminer le coefficient multiplicateur $CM_1$ associé à la première réduction de $20\text{ \%}$, puis calculer le prix intermédiaire $P_1$ du smartphone.

2. **Calcul du prix final**  
   Déterminer le coefficient multiplicateur $CM_2$ associé à la seconde réduction de $15\text{ \%}$, puis calculer le prix final $P_2$ payé par le client.

3. **Analyse de la campagne publicitaire**  
   a. Calculer le coefficient multiplicateur global $CM_{\text{global}}$, puis en déduire le taux d'évolution global $T_{\text{global}}$ sous forme de pourcentage.  
   b. Que penser de l'affirmation affichée en vitrine ? Expliquer rigoureusement pourquoi deux remises successives ne s'additionnent pas simplement.

4. **Évolution réciproque**  
   Après le week-end d'opérations promotionnelles, le commerçant souhaite réaugmenter le prix du téléphone pour qu'il revienne exactement à son prix de départ de $400\text{ \texteuro}$.  
   Quel pourcentage d'augmentation (arrondi au centième près) doit-il appliquer au prix final $P_2$ ?

---

### 💡 Indice

* Pour une évolution au taux $t$ (avec $t < 0$ pour une baisse) :  
  $$CM = 1 + t$$
* Lors d'évolutions successives, les coefficients multiplicateurs **se multiplient** entre eux :  
  $$CM_{\text{global}} = CM_1 \times CM_2$$
* Pour retrouver le taux d'évolution réciproque permettant de revenir à l'état initial, utilisez la formule :  
  $$CM_{\text{réciproque}} = \frac{1}{CM_{\text{global}}}$$  
  puis calculez $T_{\text{réciproque}} = CM_{\text{réciproque}} - 1$.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Calcul du prix intermédiaire $P_1$

Une diminution de $20\text{ \%}$ correspond à un taux d'évolution $t_1 = -0{,}20$.  
Le coefficient multiplicateur associé est :
$$CM_1 = 1 + t_1 = 1 - 0{,}20 = 0{,}80$$

Pour obtenir le prix intermédiaire $P_1$ :
$$P_1 = P_0 \times CM_1 = 400 \times 0{,}80 = 320\text{ \texteuro}$$

Après la première remise, le smartphone coûte donc **$320\text{ \texteuro}$**.

---

#### 2. Calcul du prix final $P_2$

La seconde remise de $15\text{ \%}$ correspond à un taux $t_2 = -0{,}15$.  
Le coefficient multiplicateur associé est :
$$CM_2 = 1 + t_2 = 1 - 0{,}15 = 0{,}85$$

Attention, cette réduction s'applique sur le prix déjà démarqué $P_1$ :
$$P_2 = P_1 \times CM_2 = 320 \times 0{,}85 = 272\text{ \texteuro}$$

Le prix final payé par le client est donc de **$272\text{ \texteuro}$**.

---

#### 3. Analyse de la campagne publicitaire

**a. Coefficient multiplicateur global et taux global :**  
Lors de variations successives, les coefficients multiplicateurs se multiplient :
$$CM_{\text{global}} = CM_1 \times CM_2 = 0{,}80 \times 0{,}85 = 0{,}68$$

Le taux d'évolution global $T_{\text{global}}$ s'obtient par la relation $T_{\text{global}} = CM_{\text{global}} - 1$ :
$$T_{\text{global}} = 0{,}68 - 1 = -0{,}32 = -32\text{ \%}$$

La réduction globale réelle est donc de **$32\text{ \%}$**.

**b. Critique de l'affiche publicitaire :**  
L'affirmation du commerçant est **trompeuse**. La remise réelle est de $32\text{ \%}$ et non de $35\text{ \%}$.  
*Explication citoyenne et mathématique :* Les pourcentages d'évolution successifs ne s'additionnent pas car ils ne s'appliquent pas à la même base de calcul (la même quantité de référence). La remise de $15\text{ \%}$ ne porte pas sur les $400\text{ \texteuro}$ initiaux, mais sur les $320\text{ \texteuro}$ restants. Le consommateur économise $15\text{ \%}$ de $320\text{ \texteuro}$ ($48\text{ \texteuro}$) et non $15\text{ \%}$ de $400\text{ \texteuro}$ ($60\text{ \texteuro}$).

---

#### 4. Calcul de l'évolution réciproque

Pour compenser une baisse globale caractérisée par $CM_{\text{global}} = 0{,}68$ et retrouver la valeur de départ, on cherche le coefficient multiplicateur réciproque $CM_{\text{réciproque}}$ tel que :
$$CM_{\text{global}} \times CM_{\text{réciproque}} = 1$$

Soit :
$$CM_{\text{réciproque}} = \frac{1}{CM_{\text{global}}} = \frac{1}{0{,}68} \approx 1{,}470588$$

On en déduit le taux d'augmentation réciproque $T_{\text{réciproque}}$ :
$$T_{\text{réciproque}} = CM_{\text{réciproque}} - 1 \approx 1{,}470588 - 1 = 0{,}470588 \approx +47{,}06\text{ \%}$$

*Vérification :*
$$272 \times \left(1 + \frac{47{,}06}{100}\right) \approx 272 \times 1{,}4706 \approx 400\text{ \texteuro}$$

Pour revenir au prix d'origine de $400\text{ \texteuro}$, le commerçant devra augmenter le prix soldé d'environ **$47{,}06\text{ \%}$**.  
On remarque qu'une baisse de $32\text{ \%}$ n'est pas compensée par une hausse de $32\text{ \%}$, car la hausse s'applique à un montant plus faible ($272\text{ \texteuro}$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
