---
title: "Exercice 1 : Systèmes d'équations appliqués aux réseaux de transport"
description: "Application pratique du chapitre Droites dans le plan"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre de l'optimisation des flux urbains d'une métropole, les services d'urbanisme étudient la mise en place d'une nouvelle ligne de transport en commun en site propre (TCSP). Deux tracés alternatifs sont modélisés sous forme de droites dans un repère orthonormé $(O, \vec{i}, \vec{j})$, où l'unité graphique représente $1 \text{ km}$ sur le terrain.

Le premier tracé, noté $(\mathcal{D}_1)$, correspond à une liaison express est-ouest. Son équation cartésienne, issue des relevés topographiques et des contraintes d'implantation foncière, est modélisée par :
$$(\mathcal{D}_1) : 2x - 3y + 6 = 0$$

Le second tracé, noté $(\mathcal{D}_2)$, correspond à une liaison tangentielle nord-sud destinée à croiser la première. Son équation est donnée par :
$$(\mathcal{D}_2) : x + 2y - 5 = 0$$

Les ingénieurs s'interrogent sur la pertinence d'implanter une station de correspondance à l'intersection de ces deux lignes. Cependant, les modèles mathématiques reposent sur des hypothèses simplificatrices (linéarité du terrain, absence de contraintes géologiques locales imprévues) et les coûts de raccordement varient selon la topographie réelle.

---

### ❓ Énoncé

1. **Étude géométrique des tracés :** Déterminer la pente (coefficient directeur) et l'ordonnée à l'origine de chacune des droites $(\mathcal{D}_1)$ et $(\mathcal{D}_2)$. En déduire si ces deux tracés sont sécants.
2. **Recherche de l'interconnexion :** Résoudre le système d'équations linéaires associé pour trouver les coordonnées exactes du point d'intersection $I$ des deux lignes de transport. Interpréter ce résultat dans le contexte du réseau.
3. **Analyse critique du modèle :** L'agence d'urbanisme préconise l'installation d'une station de correspondance si le point d'intersection se situe dans une zone urbanisée définie par la condition $x \in [0, 4]$ et $y \in [0, 3]$. Le point $I$ valide-t-il cette condition ?
4. **Optimisation économique (Modélisation) :** Pour des raisons de nuisances sonores, il est établi que la distance $d$ entre la station $I$ et une zone résidentielle sensible située au point $A(1, 1)$ ne doit pas être inférieure à un seuil critique. Calculer la distance $|| \overrightarrow{AI} ||$ en kilomètres, sachant que l'unité est de $1 \text{ km}$.

---

### 💡 Indice de méthode

* **Question 1 :** Réécrivez les équations cartésiennes sous la forme réduite $y = mx + p$ pour identifier facilement le coefficient directeur $m$ et l'ordonnée à l'origine $p$. Deux droites sont sécantes si leurs coefficients directeurs sont distincts.
* **Question 2 :** Utilisez la méthode par substitution ou par combinaison linéaire pour résoudre le système formé par les deux équations.
* **Question 3 :** Vérifiez simplement si les coordonnées $(x_I, y_I$ obtenues satisfont simultanément les deux inéquations d'appartenance à la zone.
* **Question 4 :** Rappelez la formule de la distance entre deux points $A(x_A, y_A)$ et $B(x_B, y_B)$ dans un repère orthonormal : 
  $$AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$

---

### 📋 Correction détaillée pas à pas

#### 1. Étude géométrique des tracés
Mettons l'équation de $(\mathcal{D}_1)$ sous forme réduite $y = m_1x + p_1$ :
$$2x - 3y + 6 = 0 \iff 3y = 2x + 6 \iff y = \frac{2}{3}x + 2$$
Le coefficient directeur est $m_1 = \frac{2}{3}$ et l'ordonnée à l'origine est $p_1 = 2 \text{ km}$.

Mettons l'équation de $(\mathcal{D}_2)$ sous forme réduite $y = m_2x + p_2$ :
$$x + 2y - 5 = 0 \iff 2y = -x + 5 \iff y = -\frac{1}{2}x + \frac{5}{2}$$
Le coefficient directeur est $m_2 = -\frac{1}{2}$ et l'ordonnée à l'origine est $p_2 = 2{,}5 \text{ km}$.

Puisque $m_1 \neq m_2$ ($\frac{2}{3} \neq -\frac{1}{2}$), les droites $(\mathcal{D}_1)$ et $(\mathcal{D}_2)$ ne sont pas parallèles : **elles sont sécantes**.

#### 2. Recherche de l'interconnexion
Nous devons résoudre le système d'équations :
$$\begin{cases} 2x - 3y + 6 = 0 \\ x + 2y - 5 = 0 \end{cases}$$

Exprimons $x$ en fonction de $y$ à partir de la deuxième équation :
$$x = 5 - 2y$$

Substituons cette expression dans la première équation :
$$2(5 - 2y) - 3y + 6 = 0$$
$$10 - 4y - 3y + 6 = 0$$
$$16 - 7y = 0 \iff 7y = 16 \iff y = \frac{16}{7}$$

Calculons maintenant $x$ :
$$x = 5 - 2\left(\frac{16}{7}\right) = \frac{35}{7} - \frac{32}{7} = \frac{3}{7}$$

Les coordonnées exactes du point d'intersection $I$ sont donc $\left(\frac{3}{7} ; \frac{16}{7}\right)$ (soit environ $(0{,}43 \text{ km} ; 2{,}29 \text{ km})$). 
Dans le contexte, cela signifie qu'un unique emplacement géographique permet l'intersection des deux lignes de transport sans nécessiter de coûteux ouvrages d'art dénivelés (type viaduc).

#### 3. Analyse critique du modèle
Testons l'appartenance du point $I$ à la zone urbanisée définie par $x \in [0, 4]$ et $y \in [0, 3]$ :
* Pour l'abscisse : $0 \le \frac{3}{7} \le 4$ (Vrai, car $\frac{3}{7} \approx 0{,}43$).
* Pour l'ordonnée : $0 \le \frac{16}{7} \le 3$ (Vrai, car $\frac{16}{7} \approx 2{,}29$ et $3 = \frac{21}{7}$).

Le point $I$ appartient bien à la zone urbanisée ciblée. Toutefois, ce modèle linéaire ne prend pas en compte la densité réelle du bâti ou la présence potentielle de réseaux souterrains existants, ce qui nécessitera des études d'impact complémentaires de terrain.

#### 4. Optimisation économique (Modélisation)
Calculons la distance $|| \overrightarrow{AI} ||$ entre la station $I\left(\frac{3}{7}, \frac{16}{7}\right)$ et la zone résidentielle $A(1, 1)$ :
$$AI = \sqrt{\left(\frac{3}{7} - 1\right)^2 + \left(\frac{16}{7} - 1\right)^2}$$
$$AI = \sqrt{\left(\frac{3}{7} - \frac{7}{7}\right)^2 + \left(\frac{16}{7} - \frac{7}{7}\right)^2}$$
$$AI = \sqrt{\left(-\frac{4}{7}\right)^2 + \left(\frac{9}{7}\right)^2}$$
$$AI = \sqrt{\frac{16}{49} + \frac{81}{49}} = \sqrt{\frac{97}{49}} = \frac{\sqrt{97}}{7}$$

En effectuant l'application numérique :
$$AI \approx \frac{9{,}85}{7} \approx 1{,}41 \text{ km}$$

La station se situe à environ $1{,}41 \text{ km}$ de la zone résidentielle $A$. Ce résultat quantitatif permet aux urbanistes de vérifier si le seuil minimal de tranquillité publique est respecté avant de valider définitivement le projet.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
