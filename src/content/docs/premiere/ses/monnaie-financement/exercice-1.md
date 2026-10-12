---
title: "Exercice 1 : Création monétaire et rôle de la Banque Centrale"
description: "Application pratique du chapitre Monnaie et financement de l'économie"
---

### 🌐 Contexte & Données scientifiques

Dans les économies contemporaines, la masse monétaire (principalement l'agrégat $M1$ ou $M2$) ne se résume pas à la monnaie fiduciaire (billets et pièces) émise par l'autorité publique. La majeure partie de la monnaie en circulation est constituée de **monnaie scripturière**, créée par les institutions financières monétaires (les banques commerciales) à l'occasion de l'octroi de crédits non financés par des dépôts préalables (« les crédits font les dépôts »).

Toutefois, ce pouvoir de création monétaire illimité en apparence fait face à des contraintes structurelles et prudentielles. D'une part, les banques doivent faire face à la fuite d'une partie de leur monnaie scripturière vers d'autres banques ou sous forme de billets (fuite mesurée par le taux de détention de monnaie fiduciaire $c$). D'autre part, elles sont soumises à des exigences réglementaires (accords de Bâle) et doivent détenir des réserves obligatoires auprès de la Banque Centrale.

Soit les hypothèses simplificatrices suivantes pour une économie caractérisée par un système bancaire consolidé :
*   Soit $D$ le montant total des dépôts bancaires (monnaie scripturière).
*   Soit $C$ le montant de la monnaie fiduciaire détenue par les non-bancaires (ménages et entreprises).
*   La base monétaire (ou monnaie centrale, $H$) est définie par $H = C + R$, où $R$ représente les réserves obligatoires et excédentaires détenues par les banques auprès de la Banque Centrale.
*   On pose le taux de préférence pour la liquidité (fiduciaire) $c = \frac{C}{D}$ et le taux de réserves obligatoires $r = \frac{R}{D}$.

La masse monétaire globale est $M = C + D$. Le multiplicateur de crédit (ou multiplicateur de monnaie centrale) s'exprime par le rapport $k = \frac{M}{H}$.

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Formalisation et calcul du multiplicateur :** 
   En exprimant $M$ et $H$ en fonction de $D$, $c$ et $r$, démontrez algébriquement que le multiplicateur monétaire $k$ s'écrit sous la forme : 
   $$k = \frac{1 + c}{c + r}$$
   *Application numérique :* Calculez $k$ si le taux de préférence pour la liquidité est $c = 0{,}2$ et le taux de réserves obligatoires est $r = 0{,}05$. Interprétez économiquement le résultat obtenu.

2. **Mécanisme de la création monétaire décentralisée :** 
   Supposons qu'un agent économique obtienne un crédit nouveau de $100$ 000 € auprès de la banque A. La banque A constate une fuite de $20\ \%$ de cette somme vers d'autres banques (via l'utilisation de la monnaie fiduciaire ou des paiements vers des clients d'autres établissements). 
   En supposant un taux de réserves obligatoires de $r = 0{,}05$ et en négligeant temporairement les autres fuites, retracez l'impact comptable de la première étape sur le bilan de la banque A et expliquez comment s'amorce le processus multi-polaire de création monétaire.

3. **Le rôle de prêteur en dernier ressort et la politique monétaire :** 
   En période de crise systémique, les banques commerciales peuvent faire face à une crise de liquidité interbancaire. Expliquez par quel mécanisme la Banque Centrale (par exemple, la Banque Centrale Européenne - BCE) intervient pour stabiliser le système, et discutez de l'arbitrage complexe entre soutien à l'activité économique (via la création monétaire) et risque inflationniste ou aléa moral (*moral hazard*).

---

### 💡 Indice de méthode

*   **Pour la Q1 :** Exprimez $M$ en remplaçant $C$ par $c \cdot D$. Faites de même pour $H$ en remplaçant $C$ par $c \cdot D$ et $R$ par $r \cdot D$. Divisez ensuite $M$ par $H$ en factorisant par $D$.
*   **Pour la Q2 :** Rappelez qu'un crédit crée un dépôt. Distinguez l'actif (créance sur l'emprunteur) et le passif (nouveau dépôt) du bilan de la banque. Une « fuite » signifie qu'une partie de la monnaie scripturière quitte le circuit propre de la banque émettrice, réduisant sa capacité à refinancer de nouveaux crédits sans recourir au marché interbancaire.
*   **Pour la Q3 :** Mobilisez les notions d'opération d'open market, de taux directeurs et de refinancement bancaire. Veillez à nuancer l'efficacité de la politique monétaire non conventionnelle (quantitative easing) en évoquant la trappe à liquidité ou la frilosité du crédit bancaire en période incertaine.

---

### 📋 Correction détaillée pas à pas

#### **1. Démonstration du multiplicateur monétaire et application**
*   **Démonstration algébrique :**
    La masse monétaire s'écrit : 
    $$M = C + D$$
    En utilisant l'hypothèse $C = c \cdot D$, on a : 
    $$M = c \cdot D + D = D(1 + c)$$

    La base monétaire s'écrit : 
    $$H = C + R$$
    En utilisant $C = c \cdot D$ et $R = r \cdot D$, on a : 
    $$H = c \cdot D + r \cdot D = D(c + r)$$

    Le multiplicateur monétaire $k$ est le rapport $\frac{M}{H}$ :
    $$k = \frac{D(1 + c)}{D(c + r)} = \frac{1 + c}{c + r}$$

*   **Application numérique :**
    Pour $c = 0{,}2$ et $r = 0{,}05$ :
    $$k = \frac{1 + 0{,}2}{0{,}2 + 0{,}05} = \frac{1{,}2}{0{,}25} = 4{,}8$$

*   **Interprétation :** 
    Un multiplicateur de $4{,}8$ signifie que pour chaque euro de monnaie centrale ($H$) injecté ou contrôlé par la Banque Centrale, la masse monétaire globale ($M$) s'accroît de $4{,}8$ euros dans l'économie par le jeu cumulé des crédits octroyés par les banques commerciales.

---

#### **2. Analyse comptable et dynamique du crédit**
*   **Impact initial (Banque A) :** 
    À l'actif du bilan de la banque A, on observe une hausse des créances sur la clientèle (le prêt) de $100\ 000$ €. Au passif, on observe une hausse des dépôts de $100\ 000$ €. La monnaie a été créée ex nihilo.
*   **La fuite et la limite du processus :** 
    L'énoncé indique une fuite de $20\ \%$ (soit $20\ 000$ € sous forme de retraits de billets ou de virements vers une autre banque). La banque A doit donc honorer cette sortie en monnaie centrale. Il lui reste $80\ 000$ € de dépôts issus de cette opération. 
    En appliquant le taux de réserves obligatoires ($r = 0{,}05$), la banque doit immobiliser $5\ \%$ de $80\ 000$ €, soit $4\ 000$ €, auprès de la Banque Centrale. 
    Sa capacité à prêter à nouveau est donc rognée par ces fuites successives, démontrant que le pouvoir de création monétaire des banques n'est pas infini, mais borné par le comportement du public ($c$) et la réglementation ($r$).

---

#### **3. Rôle de la Banque Centrale, arbitrages et limites**
*   **Le mécanisme d'intervention :** 
    En cas de crise de liquidité, les banques ne se prêtent plus mutuellement sur le marché interbancaire par peur du risque de contrepartie. La Banque Centrale intervient alors comme **prêteur en dernier ressort** : elle fournit de la monnaie centrale en urgence aux banques en échange de garanties (collatéraux, souvent des titres financiers).
*   **Limites et complexité de la politique monétaire :**
    *   *Arbitrage inflation / récession :* Une injection massive de liquidités (assouplissement quantitatif) évite la faillite systémique mais comporte un risque d'alimenter des tensions inflationnistes à moyen terme si la création monétaire déconnecte de la croissance réelle de la production.
    *   *L'aléa moral (*moral hazard*) :* Sauver des banques in-extremis peut inciter ces dernières à adopter des comportements excessivement risqués, sachant qu'elles seront de toute façon secourues par la puissance publique.
    *   *La limite de la transmission :* Comme le démontre la théorie de la « trappe à liquidité », la Banque Centrale peut abaisser ses taux directeurs ou abonder la base monétaire, si les banques estiment que le risque de non-remboursement par les agents non financiers est trop élevé, le crédit ne repartira pas. *« On peut mener un cheval à l'abreuvoir, mais on ne peut pas le contraindre à boire »* : la création monétaire dépend in fine de la demande de crédit solvable et de la confiance des agents dans l'avenir économique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
