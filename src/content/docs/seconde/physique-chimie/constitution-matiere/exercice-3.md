---
title: "Exercice 3 : Bilan de masse dans les réactions de synthèse"
description: "Application pratique du chapitre Constitution et transformations de la matière"
---

### 🌐 Contexte & Données scientifiques

En chimie de synthèse, l'optimisation des procédés industriels ou de laboratoire repose sur la conservation de la masse (loi de Lavoisier) et l'étude quantitative des réactifs et des produits. Considérons la synthèse industrielle de l'ammoniac ($\text{NH}_3$), un composé fondamental pour la fabrication d'engrais azotés et l'industrie chimique, via le procédé Haber-Bosch.

La réaction chimique modélisant cette synthèse s'écrit :
$$\text{N}_2\text{ (g)} + 3\text{ H}_2\text{ (g)} \rightarrow 2\text{ $\text{NH}_3$ (g)}$$

Dans le cadre d'une démarche expérimentale menée en laboratoire, un opérateur souhaite synthétiser de l'ammoniac à partir de $m(\text{N}_2) = 280\text{ g}$ de diazote et d'un excès de dihydrogène. Toutefois, les conditions thermodynamiques et cinétiques réelles font que la transformation n'est jamais totale. 

**Données et masses molaires atomiques :**
* $M(\text{N}) = 14,0\text{ g}\cdot\text{mol}^{-1}$
* $M(\text{H}) = 1,0\text{ g}\cdot\text{mol}^{-1}$
* Masse mesurée d'ammoniac réellement obtenue à la fin de l'expérience : $m_{\text{exp}}(\text{NH}_3) = 226,7\text{ g}$.

---

### ❓ Énoncé

1. **Étape préliminaire :** Calculer les masses molaires moléculaires du diazote ($\text{N}_2$), du dihydrogène ($\text{H}_2$) et de l'ammoniac ($\text{NH}_3$).
2. **Quantités de matière initiales :** Déterminer la quantité de matière initiale $n_i(\text{N}_2)$ introduite dans le réacteur. En déduire la quantité de matière théorique maximale de $\text{NH}_3$ que l'on pourrait obtenir si la transformation était totale.
3. **Bilan massique théorique :** Calculer la masse maximale théorique d'ammoniac $m_{\text{th}}(\text{NH}_3)$ que l'on obtiendrait dans ces conditions idéales. Vérifier si la loi de conservation de la masse est respectée à l'échelle globale du système (en considérant les réactifs consommés et les produits formés).
4. **Esprit critique et rendement :** Calculer le rendement de cette synthèse, défini par le rapport $r = \frac{m_{\text{exp}}(\text{NH}_3)}{m_{\text{th}}(\text{NH}_3)} \times 100$. Proposer deux hypothèses scientifiques permettant d'expliquer pourquoi ce rendement est inférieur à $100\text{ \%}$ dans la pratique industrielle ou expérimentale, tout en discutant des compromis inhérents à l'optimisation de ce procédé.

---

### 💡 Indice de méthode

* Pour passer d'une masse $m$ à une quantité de matière $n$, utilisez la relation : 
  $$n = \frac{m}{M}$$
* Servez-vous des nombres stœchiométriques de l'équation balancée pour établir les proportions entre réactifs consommés et produits formés.
* Le rendement quantifie l'écart entre la modélisation théorique idéale (transformation totale) et la réalité empirique mesurée.

---

### 📋 Correction détaillée pas à pas

1. **Calcul des masses molaires :**
   * Pour le diazote : 
     $$M(\text{N}_2) = 2 \times M(\text{N}) = 2 \times 14,0 = 28,0\text{ g}\cdot\text{mol}^{-1}$$
   * Pour le dihydrogène : 
     $$M(\text{H}_2) = 2 \times M(\text{H}) = 2 \times 1,0 = 2,0\text{ g}\cdot\text{mol}^{-1}$$
   * Pour l'ammoniac : 
     $$M(\text{NH}_3) = M(\text{N}) + 3 \times M(\text{H}) = 14,0 + (3 \times 1,0) = 17,0\text{ g}\cdot\text{mol}^{-1}$$

2. **Quantités de matière :**
   * Quantité initiale de diazote :
     $$n_i(\text{N}_2) = \frac{m(\text{N}_2)}{M(\text{N}_2)} = \frac{280}{28,0} = 10,0\text{ mol}$$
   * D'après l'équation stœchiométrique ($\text{N}_2 + 3\text{ H}_2 \rightarrow 2\text{ NH}_3$), une mole de $\text{N}_2$ consommée permet de former théoriquement deux moles de $\text{NH}_3$ (si le dihydrogène est en excès). 
   * La quantité maximale théorique de $\text{NH}_3$ est donc :
     $$n_{\text{th}}(\text{NH}_3) = 2 \times n_i(\text{N}_2) = 2 \times 10,0 = 20,0\text{ mol}$$

3. **Bilan massique théorique et conservation de la masse :**
   * La masse maximale théorique d'ammoniac est :
     $$m_{\text{th}}(\text{NH}_3) = n_{\text{th}}(\text{NH}_3) \times M(\text{NH}_3) = 20,0 \times 17,0 = 340\text{ g}$$
   * *Vérification de la loi de Lavoisier :* La masse ne disparaît pas. Pour consommer $10,0\text{ mol}$ de $\text{N}_2$ ($280\text{ g}$) et $30,0\text{ mol}$ de $\text{H}_2$ ($30 \times 2,0 = 60\text{ g}$), la masse totale initiale des réactifs engagés est de $280 + 60 = 340\text{ g}$. On retrouve exactement $340\text{ g}$ de produit formé. La masse se conserve rigoureusement à l'échelle microscopique et macroscopique.

4. **Calcul du rendement et analyse critique :**
   * Application numérique du rendement :
     $$r = \frac{226,7}{340} \times 100 \approx 66,7\text{ \%}$$
   * **Analyse critique et limites du modèle :** 
     Le rendement de $66,7\text{ \%}$ illustre le fait qu'une transformation chimique en phase gazeuse n'est pas toujours totale. 
     * *Première hypothèse (thermodynamique) :* La réaction est équilibrée. Une fois un certain avancement atteint, les produits se reforment en réactifs (réaction récurrente ou équilibre chimique), limitant la quantité maximale de $\text{NH}_3$ présente simultanément dans le réacteur.
     * *Deuxième hypothèse (expérimentale/cinétique) :* Des pertes matérielles lors des transferts, ou des conditions de température et de pression non optimales, ralentissent la cinétique ou empêchent l'achèvement de la transformation dans le temps imparti de l'expérience. 
     * *Compromis industriel :* Augmenter la pression favorise la formation d'ammoniac (loi de Le Chatelier), mais cela implique des coûts énergétiques et des contraintes de sécurité matérielle très élevés. L'ingénieur doit donc arbitrer entre rendement maximal et viabilité technico-économique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
