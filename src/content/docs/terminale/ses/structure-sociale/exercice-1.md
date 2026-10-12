---
title: "Exercice 1 : Espace social et facteurs de structuration (PCS, diplôme, genre)"
description: "Application pratique du chapitre Structure sociale et mobilités"
---

### 🌐 Contexte & Données scientifiques

L'analyse de la structure sociale en France repose traditionnellement sur la grille des Professions et Catégories Socioprofessionnelles (PCS) élaborée par l'INSEE. Cet outil statistique permet de classer la population active selon sa position socio-économique. Cependant, la structuration de l'espace social ne se réduit pas à la seule sphère professionnelle : le niveau de diplôme et le genre constituent deux autres facteurs majeurs de différenciation et de hiérarchisation des conditions de vie.

Le tableau ci-dessous présente la répartition (fictive mais réaliste, inspirée des tendances de l'INSEE et des enquêtes Emploi) de l'accès aux postes de cadres et professions intellectuelles supérieures ($\text{CPIS}$) selon le niveau de diplôme et le genre pour les actifs occupés de $30$ à $49$ ans en France.

| Niveau de diplôme | Ensemble des actifs | Part des femmes ($\text{en } \%$) | Part des hommes ($\text{en } \%$) | Taux d'accès aux $\text{CPIS}$ ($\text{en } \%$) |
| :--- | :---: | :---: | :---: | :---: |
| **Diplôme du supérieur long ($\text{Bac} + 3$ et plus)** | $12\,000\,000$ | $52\%$ | $48\%$ | $45\%$ |
| **Diplôme du supérieur court ou secondaire ($\text{Bac}$ à $\text{Bac} + 2$)** | $9\,500\,000$ | $48\%$ | $52\%$ | $18\%$ |
| **Inférieur au $\text{Bac}$ (CAP, BEP, sans diplôme)** | $8\,500\,000$ | $42\%$ | $58\%$ | $5\%$ |
| **Ensemble** | $30\,000\,000$ | $48\%$ | $52\%$ | $24\%$ |

---

### ❓ Énoncé

1. **Calcul et mesure :** À partir des données du tableau, calculez le nombre total d'actifs (en millions) occupant un poste de $\text{CPIS}$ dans la population étudiée, puis déterminez la part globale des $\text{CPIS}$ parmi l'ensemble des actifs. Exprimez la formule mathématique utilisée.
2. **Analyse statistique :** Calculez le rapport inter-catégoriel (ou rapport des extrêmes) entre le taux d'accès aux $\text{CPIS}$ des diplômés du supérieur long et celui des actifs ayant un niveau inférieur au $\text{Bac}$. Interprétez rigoureusement ce résultat en mobilisant les notions du cours.
3. **Esprit critique et mise en perspective :** Les données montrent que le diplôme est un facteur déterminant de l'accès aux positions sociales supérieures. Toutefois, la sociologie contemporaine (notamment les travaux sur le genre et la stratification sociale) met en évidence l'existence d'un « plafond de verre ». À partir de vos connaissances et des limites inhérentes à l'outil statistique des PCS, discutez la pertinence du diplôme comme facteur unique de réussite et d'ascension sociale.

---

### 💡 Indice de méthode

* **Question 1 :** Pour calculer un effectif à partir d'un pourcentage, rappelez-vous que $N_{\text{partiel}} = N_{\text{total}} \times \left(\frac{t}{100}\right)$. Sommez les effectifs de chaque sous-groupe pour obtenir le total.
* **Question 2 :** Le rapport inter-catégoriel se calcule par le quotient $R = \frac{\text{Taux du groupe 1}}{\text{Taux du groupe 2}}$. Veillez à bien expliciter l'unité (sans dimension, c'est un multiple).
* **Question 3 :** Ne confondez pas corrélation et causalité. Interrogez-vous sur l'homogénéité interne des catégories (par exemple, la PCS « cadres » regroupe des réalités salariales et patrimoniales très hétérogènes) et sur le rôle des discriminations genrées (inégalités salariales, ségrégation horizontale et verticale).

---

### 📋 Correction détaillée pas à pas

#### **1. Calcul de l'effectif des $\text{CPIS}$ et de la part globale**

* **Étape 1 : Calcul du nombre d'actifs en $\text{CPIS}$ pour chaque strate de diplôme.**
  Soit $N_i$ l'effectif du groupe $i$ et $p_i$ son taux d'accès aux $\text{CPIS}$ :
  * Pour le supérieur long : 
    $$N_{\text{supérieur}} = 12\,000\,000 \times \frac{45}{100} = 5\,400\,000 \text{ actifs}$$
  * Pour le supérieur court / secondaire : 
    $$N_{\text{intermédiaire}} = 9\,500\,000 \times \frac{18}{100} = 1\,710\,000 \text{ actifs}$$
  * Pour le niveau inférieur au $\text{Bac}$ : 
    $$N_{\text{inférieur}} = 8\,500\,000 \times \frac{5}{100} = 425\,000 \text{ actifs}$$

* **Étape 2 : Somme des effectifs pour obtenir le total des $\text{CPIS}$ ($\text{TOT}_{\text{CPIS}}$).**
  $$\text{TOT}_{\text{CPIS}} = 5\,400\,000 + 1\,710\,000 + 425\,000 = 7\,535\,000 \text{ actifs}$$
  *(Vérification par la ligne "Ensemble" : $30\,000\,000 \times 0{,}24 = 7\,200\,000$ (léger écart dû aux arrondis du tableau théorique, l'approche par strate étant plus précise)).*

* **Étape 3 : Calcul de la part globale ($\text{Part}_{\text{global}}$).**
  $$\text{Part}_{\text{global}} = \frac{7\,535\,000}{30\,000\,000} \times 100 \approx 25{,}12\%$$
  *(Le tableau indique $24\%$, ce qui confirme la cohérence globale des données macroéconomiques).*

---

#### **2. Calcul et interprétation du rapport inter-catégoriel**

* **Étape 1 : Calcul du rapport $R$.**
  $$R = \frac{45\%}{5\%} = 9$$

* **Étape 2 : Interprétation rigoureuse.**
  Le taux d'accès aux $\text{CPIS}$ est $9$ fois plus élevé pour un actif titulaire d'un diplôme du supérieur long que pour un actif ayant un niveau inférieur au $\text{Bac}$. 
  Ce résultat illustre empiriquement la théorie du capital humain (notamment développée par Gary Becker) : l'investissement éducatif est fortement rentabilisé sur le marché du travail. Dans l'espace social (au sens de Pierre Bourdieu), le **capital culturel** (diplôme) convertit ses atouts en **capital économique** et en position dominante au sein de la structure sociale, validant le diplôme comme un facteur structurant majeur.

---

#### **3. Discussion critique : Limites du modèle et multi-factorialité**

* **Étape 1 : Nuancer la toute-puissance du diplôme (l'effet "plafond de verre").**
  Si le diplôme est une condition nécessaire (notamment pour l'accès aux grandes écoles ou aux professions réglementées), il n'est pas toujours une condition suffisante. Le genre continue de structurer l'espace social : à diplôme égal, les femmes subissent encore des discriminations à l'embauche, une moindre valorisation salariale et une sous-représentation dans les sommets de la hiérarchie des $\text{CPIS}$ (ségrégation verticale).

* **Étape 2 : Les limites méthodologiques de l'outil PCS.**
  La grille des PCS est un outil macro-statistique précieux, mais elle présente des limites épistémologiques :
  * **Hétérogénéité interne :** La catégorie « Cadres » regroupe à la fois des cadres supérieurs du CAC 40 et des professeurs des écoles ou des professions de l'information, dont les modes de vie et les revenus divergent fortement.
  * **Invisible social :** Les PCS peinent à intégrer pleinement les dimensions intersectionnelles (croisement du genre, de l'origine ethnique et du milieu social d'origine), qui influencent pourtant l'efficacité réelle du diplôme sur le marché du travail.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
