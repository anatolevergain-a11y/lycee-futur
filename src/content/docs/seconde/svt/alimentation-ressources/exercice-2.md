---
title: "Exercice 2 : Transformations chimiques et biologiques des aliments"
description: "Application pratique du chapitre Alimentation et digestion"
---

### 🌐 Contexte & Données scientifiques

Au cours de la digestion, les aliments ingérés subissent des transformations mécaniques (mastication, brassage) et biochimiques (actions enzymatiques). Le tube digestif humain abrite également un microbiote complexe composé de milliards de micro-organismes, contribuant à la transformation des nutriments non digestibles par les enzymes humaines.

Pour étudier l'efficacité de ces transformations, on s'intéresse à la digestion d'un pain blanc riche en amidon (polymère de glucose). L'amidon est hydrolysé en maltose (disaccharide) puis en glucose (monosaccharide) grâce à des enzymes spécifiques, les amylases (salivaires et pancréatiques) et les maltases.

Le tableau ci-dessous présente les résultats d'une expérimentation in vitro mesurant la concentration en glucose (en $\text{g}\cdot\text{L}^{-1}$) libéré au cours du temps à partir d'une solution d'amidon initialement dosée à $10 \text{ g}\cdot\text{L}^{-1}$, selon différentes conditions expérimentales à $37 \text{ }\textdegree\text{C}$ (température corporelle humaine) :

* **Expérience 1 :** Solution d'amidon + Amylase salivaire pure ($\text{pH} = 6{,}8$, conditions physiologiques buccales/intestinales).
* **Expérience 2 :** Solution d'amidon + Amylase salivaire pure chauffée préalablement à $100 \text{ }\textdegree\text{C}$.
* **Expérience 3 :** Solution d'amidon seule (témoin).

| Temps ($t$ en $\text{min}$) | Expérience 1 ($[\text{Glucose}] \text{ en } \text{g}\cdot\text{L}^{-1}$) | Expérience 2 ($[\text{Glucose}] \text{ en } \text{g}\cdot\text{L}^{-1}$) | Expérience 3 ($[\text{Glucose}] \text{ en } \text{g}\cdot\text{L}^{-1}$) |
| :---: | :---: | :---: | :---: |
| $0$ | $0{,}0$ | $0{,}0$ | $0{,}0$ |
| $10$ | $2{,}5$ | $0{,}0$ | $0{,}0$ |
| $20$ | $4{,}8$ | $0{,}0$ | $0{,}0$ |
| $30$ | $7{,}1$ | $0{,}0$ | $0{,}0$ |
| $45$ | $9{,}5$ | $0{,}0$ | $0{,}0$ |
| $60$ | $10{,}0$ | $0{,}0$ | $0{,}0$ |

*Donnée complémentaire :* La vitesse moyenne de réaction $v$ sur un intervalle de temps $[t_1 ; t_2]$ se calcule selon la relation :
$$v = \frac{[\text{Glucose}]_{t_2} - [\text{Glucose}]_{t_1}}{t_2 - t_1}$$

---

### ❓ Énoncé

1. **Analyser** l'évolution de la concentration en glucose au cours du temps pour l'expérience 1. Calculez la vitesse moyenne de production du glucose entre $t = 0 \text{ min}$ et $t = 30 \text{ min}$ en précisant l'unité.
2. **Interpréter** les résultats des expériences 2 et 3 en mobilisant vos connaissances sur la nature des enzymes. Qu'en concluez-vous quant aux conditions nécessaires au fonctionnement de la digestion chimique ?
3. **Discuter** de la validité de ce modèle *in vitro*. En quoi cette expérimentation simplifie-t-elle excessivement la complexité physiologique réelle observée dans l'organisme humain (milieu *in vivo*) ?

---

### 💡 Indice de méthode

* **Question 1 :** Veillez à bien identifier les valeurs dans le tableau correspondant aux instants $0 \text{ min}$ et $30 \text{ min}$. L'unité de la vitesse dépend directement de celle des grandeurs du numérateur et du dénominateur.
* **Question 2 :** Comparez chaque témoin ou condition modifiée (chaleur) à l'expérience référence (Expérience 1). Rappelez qu'une enzyme est une protéine dont la structure tridimensionnelle est thermosensible.
* **Question 3 :** Réfléchissez aux paramètres physico-chimiques du tube digestif (variations de $\text{pH}$ entre l'estomac et l'intestin, présence du microbiote, temps de transit, renouvellement des milieux) qui ne sont pas simulés ici.

---

### 📋 Correction détaillée pas à pas

1. **Analyse de l'expérience 1 et calcul de vitesse :**
   * *Analyse :* Dans l'expérience 1 (amidon + amylase à $\text{pH} = 6{,}8$ et $37 \text{ }\textdegree\text{C}$), la concentration en glucose augmente de manière continue, passant de $0{,}0 \text{ g}\cdot\text{L}^{-1}$ à $t = 0 \text{ min}$ pour atteindre un plateau à $10{,}0 \text{ g}\cdot\text{L}^{-1}$ à $t = 60 \text{ min}$. Cela montre que l'amidon a été intégralement hydrolysé en glucose (les produits intermédiaires comme le maltose étant également convertis).
   * *Calcul de la vitesse moyenne entre $0$ et $30 \text{ min}$ :*
     $$v = \frac{7{,}1 - 0{,}0}{30 - 0} = \frac{7{,}1}{30} \approx 0{,}237 \text{ g}\cdot\text{L}^{-1}\cdot\text{min}^{-1}$$
     *La vitesse moyenne de production du glucose est donc d'environ $0{,}24 \text{ g}\cdot\text{L}^{-1}\cdot\text{min}^{-1}$ sur cette période.*

2. **Interprétation des expériences 2 et 3 :**
   * *Expérience 3 (témoin sans enzyme) :* La concentration en glucose reste nulle ($0{,}0 \text{ g}\cdot\text{L}^{-1}$) pendant toute la durée de l'expérience. Cela démontre que l'hydrolyse spontanée de l'amidon en glucose à $37 \text{ }\textdegree\text{C}$ est nulle ou infiniment lente à l'échelle de temps de l'étude. L'enzyme est donc indispensable pour catalyser cette transformation chimique.
   * *Expérience 2 (enzyme chauffée à $100 \text{ }\textdegree\text{C}$ puis refroidie) :* Aucune production de glucose n'est observée ($0{,}0 \text{ g}\cdot\text{L}^{-1}$). La température élevée a détruit (dénaturé) la structure tridimensionnelle de l'enzyme, altérant son site actif et annulant définitivement son activité catalytique. Cela confirme la nature protéique et thermosensible des enzymes digestives.

3. **Discussion critique du modèle *in vitro* :**
   * *Limites du modèle :* Si cette expérimentation démontre avec rigueur le rôle catalytique et la spécificité des enzymes, elle constitue une simplification excessive de la physiologie humaine (*in vivo*). 
   * *Facteurs non pris en compte :* 
     * Le tube digestif est un système ouvert traversé par un flux continu d'aliments et soumis à des variations drastiques de $\text{pH}$ (milieu très acide de l'estomac, $\text{pH}$ neutre ou légèrement basique de l'intestin grêle).
     * Ce protocole omet l'action synergique des transformations mécaniques (péristaltisme, brassage) et l'intervention du microbiote intestinal qui métabolise les substrats échappant aux enzymes humaines. 
     * Enfin, la concentration initiale des réactifs et l'absence de système d'absorption des produits formés (qui, in vivo, déplace les équilibres biochimiques) limitent la transposition directe des résultats quantitatifs à l'organisme entier.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
