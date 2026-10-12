---
title: "Exercice 3 : Évaluation d'échantillons et biais statistiques"
description: "Application pratique du chapitre Statistiques et probabilités"
---

### 🌐 Contexte & Données scientifiques

Dans le cadre d'une étude épidémiologique et de santé publique menée sur le territoire français, une agence sanitaire souhaite estimer la proportion $p$ de lycéens de seconde présentant des troubles du sommeil réguliers. 

Pour ce faire, deux protocoles d'échantillonnage distincts ont été conçus par le comité scientifique :

*   **Protocole A (Échantillonnage volontaire en ligne) :** Un questionnaire est diffusé via les réseaux sociaux et sur les forums de discussion de jeux vidéo. Sur $N_A = 1\,200$ répondants, $X_A = 684$ déclarent souffrir de troubles du sommeil.
*   **Protocole B (Échantillonnage aléatoire stratifié) :** Un tirage au sort rigoureux est opéré sur les listes d'inscription de l'Éducation Nationale, garantissant la représentativité des académies, du genre et du milieu socio-économique. Sur $N_B = 1\,000$ élèves contactés, $n_B = 950$ réponses exploitables sont obtenues, parmi lesquelles $X_B = 323$ élèves déclarent des troubles du sommeil.

Le modèle probabiliste de référence postule que l'intervalle de confiance à $95\,\%$ pour une fréquence observée $f$ obtenue sur un échantillon de taille $n$ s'écrit sous la forme :
$$I = \left[ f - \frac{1}{\sqrt{n}} \,;\, f + \frac{1}{\sqrt{n}} \right]$$

---

### ❓ Énoncé

1. **Calcul des fréquences observées :** Calculer la fréquence observée $f_A$ issue du protocole A et la fréquence observée $f_B$ issue du protocole B. Exprimer les résultats en pourcentage arrondi à $0{,}1\,\%$.
2. **Analyse de la représentativité et des biais :** En analysant les protocoles de collecte, identifier les sources potentielles de biais (notamment le *biais de volontariat* et le *biais de non-réponse*) et expliquer pourquoi la comparaison directe des fréquences $f_A$ et $f_B$ s'avère statistiquement problématique.
3. **Encadrement probabiliste :** À l'aide de la formule du modèle de référence, calculer l'intervalle d'estimation à $95\,\%$ pour chacun des deux échantillons ($n_A = 1\,200$ et $n_B = 950$). Que peut-on conclure sur la compatibilité des deux résultats ?
4. **Prise de décision et compromis :** Le protocole B est financièrement dix fois plus coûteux et logistiquement plus lourd à mettre en œuvre que le protocole A. En argumentant à partir des résultats mathématiques et des notions de fiabilité scientifique, justifier l'arbitrage nécessaire entre *faisabilité/coût* et *validité scientifique*.

---

### 💡 Indice de méthode

*   **Question 1 :** La fréquence observée $f$ se calcule par le rapport du nombre de cas favorables $X$ sur la taille effective de l'échantillon $n$ : $f = \frac{X}{n}$.
*   **Question 2 :** Interrogez-vous sur le profil des individus qui choisissent spontanément de répondre à un sondage en ligne par rapport à l'ensemble de la population cible. 
*   **Question 3 :** Veillez à bien substituer la taille de l'échantillon $n$ (et non la population totale) dans le calcul de l'incertitude $\frac{1}{\sqrt{n}}$.
*   **Question 4 :** Un échantillon de grande taille ne garantit pas la fiabilité d'une estimation si le protocole de sélection est entaché d'un biais systématique.

---

### 📋 Correction détaillée pas à pas

#### 1. Calcul des fréquences observées
*   Pour le protocole A :
    $$f_A = \frac{X_A}{N_A} = \frac{684}{1\,200} = 0{,}57$$
    Soit une fréquence de $57{,}0\,\%$.

*   Pour le protocole B :
    $$f_B = \frac{X_B}{n_B} = \frac{323}{950} \approx 0{,}3400$$
    Soit une fréquence d'environ $34{,}0\,\%$.

#### 2. Analyse de la représentativité et des biais
*   **Protocole A (Biais de volontariat / auto-sélection) :** Les élèves répondant spontanément via les réseaux sociaux ne constituent pas un échantillon aléatoire. Il existe un risque manifeste de *biais de positivité* (ou d'autosélection) : les adolescents concernés par les troubles du sommeil sont statistiquement plus motivés pour répondre à une telle enquête que ceux ne rencontrant aucun problème. Cela surestime la proportion réelle.
*   **Protocole B (Biais de non-réponse contrôlé) :** Le tirage aléatoire stratifié garantit l'équiprobabilité et la représentativité structurale de l'échantillon. Bien que $50$ élèves n'aient pas répondu ($1\,000 - 950$), le taux de réponse élevé ($95\,\%$ minimisant le biais de non-réponse) confère à cet échantillon une validité scientifique supérieure.
*   **Conclusion partielle :** La différence massive entre $57{,}0\,\%$ et $34{,}0\,\%$ ne reflète pas une simple fluctuation d'échantillonnage, mais met en évidence l'impact critique d'un biais méthodologique.

#### 3. Encadrement probabiliste
Appliquons la formule $I = \left[ f - \frac{1}{\sqrt{n}} \,;\, f + \frac{1}{\sqrt{n}} \right]$ :

*   Pour l'échantillon A ($f_A = 0{,}57$ et $n_A = 1\,200$) :
    $$\frac{1}{\sqrt{1\,200}} \approx \frac{1}{34{,}64} \approx 0{,}0289 \text{ (soit } 2{,}9\,\%\text{)}$$
    $$I_A = [0{,}57 - 0{,}029 \,;\, 0{,}57 + 0{,}029] = [0{,}541 \,;\, 0{,}599]$$
    L'intervalle est $[54{,}1\,\% \,;\, 59{,}9\,\%]$.

*   Pour l'échantillon B ($f_B = 0{,}34$ et $n_B = 950$) :
    $$\frac{1}{\sqrt{950}} \approx \frac{1}{30{,}82} \approx 0{,}0324 \text{ (soit } 3{,}2\,\%\text{)}$$
    $$I_B = [0{,}340 - 0{,}032 \,;\, 0{,}340 + 0{,}032] = [0{,}308 \,;\, 0{,}372]$$
    L'intervalle est $[30{,}8\,\% \,;\, 37{,}2\,\%]$.

*   **Comparaison :** Les deux intervalles d'estimation ne se recouvrent pas du tout. Les résultats sont statistiquement incompatibles, ce qui confirme que les deux protocoles ne mesurent pas la même réalité en raison du biais de sélection du protocole A.

#### 4. Prise de décision et compromis
*   **Analyse du compromis coût/efficacité :** Le protocole A est extrêmement économique et rapide, mais il conduit à un résultat scientriquement erroné (surestimation de plus de $23$ points de pourcentage). Une donnée fausse, bien que obtenue à bas coût, n'a aucune valeur décisionnelle en santé publique.
*   **Conclusion scientifique :** En statistique, la *validité interne* (absence de biais méthodologique) prime toujours sur la simple taille brute de l'échantillon. Le surcoût du protocole B est donc justifié par la nécessité d'obtenir des estimateurs non biaisés, indispensables pour orienter efficacement les politiques publiques de santé.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
