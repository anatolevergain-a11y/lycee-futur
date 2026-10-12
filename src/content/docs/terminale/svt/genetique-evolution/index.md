---
title: "Cours : Génétique et évolution des populations"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

La génétique des populations étudie la distribution et la dynamique des allèles au sein des populations au cours du temps. C'est le socle théorique de la biologie évolutive moderne (synthèse moderne de l'évolution).

*   **Population (au sens génétique) :** Groupe d'individus de la même espèce, vivant dans une zone géographique suffisamment proche pour qu'ils puissent se reproduire entre eux (interfécondité) et partager un pool génétique commun.
*   **Pool génétique (ou gene pool) :** Ensemble de tous les allèles de tous les gènes présents chez l'ensemble des individus d'une population donnée à une génération donnée.
*   **Fréquence allésque (ou génique) :** Proportion relative d'un allèle donné pour un locus donné au sein du pool génétique de la population. Elle est comprise entre $0$ et $1$ (ou $0\%$ et $100\%$).
*   **Fréquence génotypique :** Proportion d'individus présentant un génotype donné au sein de la population.
*   **Évolution (définition génétique) :** Modification des fréquences alléliques d'une population au cours des générations successives.

---

## 📐 2. Formules et Propriétés fondamentales

### A. Calcul des fréquences alléliques et génotypiques

Soit un gène possédant deux allèles $A$ et $a$. 
*   Notons $p$ la fréquence de l'allèle $A$.
*   Notons $q$ la fréquence de l'allèle $a$.

Puisqu'il n'y a que ces deux allèles pour ce locus dans la population :
$$p + q = 1$$

Pour les individus diploïdes, les génotypes possibles sont $AA$, $Aa$ (ou $aA$) et $aa$.
Soit :
*   $D$ la fréquence du génotype homozygote $AA$.
*   $H$ la fréquence du génotype hétérozygote $Aa$.
*   $R$ la fréquence du génotype homozygote $aa$.

La somme des fréquences génotypiques vaut toujours 1 :
$$D + H + R = 1$$

Les fréquences alléliques $p$ et $q$ se déduisent des fréquences génotypiques par les relations :
$$p = D + \frac{1}{2}H$$
$$q = R + \frac{1}{2}H$$

---

### B. Le modèle de Hardy-Weinberg (1908)

Le théorème de Hardy-Weinberg est un modèle null (ou modèle de référence) qui décrit une population idéale **en équilibre**, c’est-à-dire une population **qui n'évolue pas** pour le locus considéré.

#### Hypothèses du modèle :
1.  **Effectif infini** (ou très grand, pour éviter la dérive génétique).
2.  **Panmixie** (reproduction aléatoire au sein de la population).
3.  **Absence de sélection naturelle** (tous les génotypes ont la même valeur sélective / *fitness*).
4.  **Absence de mutation** (pas de création de nouveaux allèles).
5.  **Absence de flux migratoire** (pas d'immigration ni d'émigration).

#### Propriétés à l'équilibre :
Si ces conditions sont réunies, les fréquences génotypiques à la génération $N+1$ se déduisent directement des fréquences alléliques $p$ et $q$ de la génération $N$ via un développement binomial ($(p+q)^2 = 1$) :

*   Fréquence de $AA$ ($D$) = $p^2$
*   Fréquence de $Aa$ ($H$) = $2pq$
*   Fréquence de $aa$ ($R$) = $q^2$

$$p^2 + 2pq + q^2 = 1$$

> **Propriété fondamentale :** En l'absence de forces évolutives, les fréquences alléliques et génotypiques restent constantes d'une génération à l'autre (équilibre atteint dès la première génération de panmixie).

---

### C. Les forces évolutives (facteurs de modification des fréquences)

Lorsque les conditions de Hardy-Weinberg ne sont pas respectées, les fréquences alléliques varient. On distingue quatre forces évolutives majeures :

1.  **La dérive génétique :** Variation aléatoire des fréquences alléliques, d'une génération à l'autre, due à l'échantillonnage aléatoire lors de la reproduction (effet d'autant plus marqué que l'effectif $N$ de la population est faible). Cas particuliers : *effet fondateur* et *goulot d'étranglement*.
2.  **La sélection naturelle :** Variation non aléatoire des fréquences alléliques due à des différences de survie et/ou de succès reproduire (valeur sélective ou *fitness*, notée $w$) entre les individus porteurs de génotypes différents.
3.  **Les mutations :** Apparition spontanée et aléatoire de nouveaux allèles. Source primaire de la diversité génétique, mais force évolutive faible à court terme sur les fréquences prises isolément.
4.  **Les flux migratoires (ou migrations) :** Échanges d'individus (et donc d'allèles) entre populations, tendant à homogénéiser les pools génétiques.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
Dans un échantillon représentatif d'une grande population humaine, on étudie une maladie récessive autosomique (déterminée par un allèle récessif $a$, l'allèle sain dominant étant $A$). On observe que la fréquence des individus atteints (phénotype [a], donc génotype $aa$) est de $1 sur 10000$, soit $0,0001$.
En supposant que la population est à l'équilibre de Hardy-Weinberg, calculez :
1. La fréquence de l'allèle $a$ ($q$).
2. La fréquence de l'allèle $A$ ($p$).
3. La fréquence des individus hétérozygotes porteurs sains dans cette population.

**Résolution :**

1. **Fréquence de l'allèle $a$ ($q$) :**
Les individus atteints ont le génotype $aa$. D'après Hardy-Weinberg, la fréquence de ce génotype est $q^2$.
On a donc :
$$q^2 = 0,0001$$
$$q = \sqrt{0,0001} = 0,01$$
La fréquence de l'allèle $a$ est donc de $0,01$ (soit $1\%$).

2. **Fréquence de l'allèle $A$ ($p$) :**
On sait que $p + q = 1$. Donc :
$$p = 1 - q = 1 - 0,01 = 0,99$$
La fréquence de l'allèle $A$ est de $0,99$ (soit $99\%$).

3. **Fréquence des hétérozygotes ($Aa$) :**
Les individus hétérozygotes ont pour fréquence $2pq$ selon le modèle de Hardy-Weinberg.
$$2pq = 2 \times 0,99 \times 0,01$$
$$2pq = 0,0198$$
La fréquence des individus hétérozygotes (porteurs sains) est donc de $0,0198$, soit environ $1,98\%$ de la population (soit près de 1 individu sur 50, ce qui est nettement supérieur au nombre de malades).

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Piège 1 : Confondre fréquence allélique et fréquence génotypique.** 
    *   $p$ et $q$ concernent les *allèles* (gamètes).
    *   $p^2$, $2pq$ et $q^2$ concernent les *génotypes* (individus). Ne jamais appliquer directement une fréquence génotypique comme s'il s'agissait d'une fréquence allélique sans passer par les formules de calcul.
*   **Piège 2 : Oublier de relier le phénotype au génotype.**
    *   Pour un allèle dominant, le phénotype dominant regroupe les homozygotes ($AA$) et les hétérozygotes ($Aa$). Il est donc **impossible** de déduire directement $p^2$ d'un phénotype dominant. 
    *   *Méthode :* Toujours commencer par identifier la fréquence du phénotype récessif, qui correspond obligatoirement au génotype homozygote récessif ($q^2$), car le phénotype permet de lever l'ambiguïté génotypique.
*   **Piège 3 : Utiliser Hardy-Weinberg à tort et à travers.**
    *   Le calcul via $p^2 + 2pq + q^2 = 1$ n'est valable **que** si l'énoncé précise explicitement que la population est à l'équilibre (ou si l'on cherche à tester cet équilibre en comparant des effectifs observés et théoriques par un test statistique du $\chi^2$).
*   **Conseil rédactionnel :** 
    *   Explicitez toujours vos hypothèses et définissez clairement vos variables ($p$, $q$, $D$, $H$, $R$) au brouillon ou sur votre copie avant de lancer les calculs. Veillez à exprimer clairement les unités (fréquences comprises entre 0 et 1, ou pourcentages).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
