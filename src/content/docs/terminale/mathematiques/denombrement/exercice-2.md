---
title: "Exercice 2 : Nombre de clés possibles en cryptographie"
description: "Application pratique du chapitre Dénombrement et combinaisons"
---

### 🌐 Contexte & Données scientifiques

En cryptographie moderne, la sécurité des communications repose souvent sur la difficulté algorithmique de retrouver une clé secrète. L'une des méthodes d'attaque les plus fondamentales est l'attaque par force brute, qui consiste à tester exhaustivement l'ensemble des combinaisons possibles de l'espace des clés.

Considérons un système de chiffrement symétrique utilisant une clé représentée sous la forme d'une chaîne de caractères. 
- L'alphabet $\mathcal{A}$ disponible pour construire cette clé est composé des 26 lettres minuscules de l'alphabet latin, des 26 lettres majuscules, des 10 chiffres arabes, et de 32 caractères spéciaux et symboles usuels. Soit un cardinal de l'alphabet de $|\mathcal{A}| = 26 + 26 + 10 + 32 = 94$ caractères distincts.
- La longueur d'une clé, notée $L$, correspond au nombre de caractères qui la composent.
- Dans le cadre d'une analyse comparative de performance, on suppose qu'un processeur cryptographique standard est capable de tester $10^{10}$ clés par seconde ($\text{clés} \cdot \text{s}^{-1}$).

L'évaluation de la robustesse d'un système cryptographique ne relève pas seulement d'une approche théorique mais nécessite d'analyser le compromis entre la complexité combinatoire et la faisabilité matérielle et temporelle de l'attaque.

---

### ❓ Énoncé

1. **Modélisation combinatoire :** 
   En supposant que les caractères peuvent être répétés au sein d'une même clé et que l'ordre des caractères importe, exprimer en fonction de la longueur $L$ et du cardinal $|\mathcal{A}|$ le nombre total de clés possibles $N(L)$, noté sous forme de puissance. Calculer ce nombre pour une longueur de clé classique $L = 8$ (arrondi à $10^2$ près en écriture scientifique).

2. **Évaluation temporelle :** 
   En utilisant le nombre de clés trouvé à la question précédente pour $L = 8$ et la vitesse de traitement de $10^{10} \text{ clés} \cdot \text{s}^{-1}$, calculer le temps moyen nécessaire pour tester l'intégralité de l'espace des clés par force brute. Exprimer ce résultat en secondes, puis convertir la durée obtenue en années (on retiendra qu'une année civile compte $365{,}25 \text{ jours}$).

3. **Complexité exponentielle et contraintes physiques :** 
   Si l'on impose désormais une contrainte de sécurité minimale exigeant que le temps d'attaque par force brute soit d'au moins $100 \text{ ans}$ avec la même machine de test, déterminer la longueur minimale $L_{\min}$ (exprimée sous forme d'un entier naturel) que doit posséder la clé. *On pourra utiliser la fonction logarithme décimal ($\log_{10}$).*

4. **Analyse critique et limites du modèle :** 
   Le raisonnement précédent repose sur l'hypothèse d'une recherche aléatoire ou séquentielle pure sans connaissance préalable de la structure des clés. Discutez de la pertinence de ce modèle mathématique face à des stratégies d'attaque alternatives (comme les attaques par dictionnaire ou l'utilisation de tables précalculées), en mettant en évidence l'écart entre complexité théorique et vulnérabilité pratique.

---

### 💡 Indice de méthode

- **Pour la Q1 :** Songez au principe fondamental du dénombrement pour un tirage avec remise et avec ordre.
- **Pour la Q2 :** Utilisez l'analyse dimensionnelle simple liant le nombre total de combinaisons, le débit de traitement et le temps ($\text{Temps} = \frac{\text{Nombre total de clés}}{\text{Débit}}$). Veillez à maîtriser les conversions d'unités temporelles.
- **Pour la Q3 :** Traduisez la condition temporelle en une inéquation portant sur le nombre total de clés $N(L)$, puis résolvez-la à l'aide des propriétés algébriques de la fonction logarithme.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation combinatoire

Chaque position dans la clé de longueur $L$ peut être occupée par n'importe quel caractère de l'alphabet $\mathcal{A}$, avec $|\mathcal{A}| = 94$. 
Puisque les caractères peuvent être répétés et que l'ordre est fondamental, le nombre total de clés distinctes de longueur $L$ est donné par les arrangements avec répétition, soit :
$$N(L) = |\mathcal{A}|^L = 94^L$$

Pour une longueur $L = 8$ :
$$N(8) = 94^8 \approx 6{,}09 \times 10^{15} \text{ clés}$$

#### 2. Évaluation temporelle

Le temps $T$ (en secondes) nécessaire pour tester l'ensemble des $N(8)$ clés à une vitesse $v = 10^{10} \text{ clés} \cdot \text{s}^{-1}$ est le rapport entre le nombre total de clés et le débit :
$$T = \frac{N(8)}{v} = \frac{94^8}{10^{10}} \approx \frac{6{,}09 \times 10^{15}}{10^{10}} = 6{,}09 \times 10^{5} \text{ s}$$

Convertissons cette durée en années :
- Une minute $= 60 \text{ s}$
- Une heure $= 3600 \text{ s}$
- Un jour $= 24 \times 3600 = 86\,400 \text{ s}$
- Une année de $365{,}25 \text{ jours} = 365{,}25 \times 86\,400 = 31\,557\,600 \text{ s}$

Le temps en années est donc :
$$T_{\text{années}} = \frac{6{,}09 \times 10^{5}}{31\,557\,600} \approx 0{,}0193 \text{ ans}$$
Soit environ $7$ jours ($0{,}0193 \times 365 \approx 7{,}04 \text{ jours}$). Une clé de 8 caractères alphanumériques et symboliques offre donc une protection très faible face aux capacités de calcul actuelles.

#### 3. Complexité exponentielle et contraintes physiques

Exigeons que le temps d'attaque soit supérieur ou égal à $100 \text{ ans}$. 
Convertissons d'abord $100 \text{ ans}$ en secondes ($t_{\text{requis}}$) :
$$t_{\text{requis}} = 100 \times 31\,557\,600 = 3{,}15576 \times 10^{9} \text{ s}$$

Le nombre minimal de clés $N_{\min}$ que la machine doit pouvoir tester dans ce laps de temps à la vitesse $v = 10^{10} \text{ clés} \cdot \text{s}^{-1}$ est :
$$N_{\min} = t_{\text{requis}} \times v = (3{,}15576 \times 10^{9}) \times 10^{10} = 3{,}15576 \times 10^{19} \text{ clés}$$

On cherche donc la plus petite longueur entière $L_{\min}$ telle que :
$$94^{L_{\min}} \ge 3{,}15576 \times 10^{19}$$

Appliquons le logarithme décimal $\log_{10}$ des deux côtés (la fonction étant strictement croissante, l'inégalité est conservée) :
$$\log_{10}\left(94^{L_{\min}}\right) \ge \log_{10}\left(3{,}15576 \times 10^{19}\right)$$
$$L_{\min} \times \log_{10}(94) \ge \log_{10}(3{,}15576) + 19$$
$$L_{\min} \ge \frac{19 + \log_{10}(3{,}15576)}{\log_{10}(94)}$$

Calculons les valeurs numériques :
- $\log_{10}(94) \approx 1{,}9731$
- $\log_{10}(3{,}15576) \approx 0{,}4991$
- Numérateur $\approx 19 + 0{,}4991 = 19{,}4991$

Ainsi :
$$L_{\min} \ge \frac{19{,}4991}{19731} \approx 9{,}88$$

Puisque la longueur $L$ doit être un entier naturel, on conclut par arrondi supérieur :
$$L_{\min} = 10$$
Une longueur de $10$ caractères est donc nécessaire pour satisfaire cette condition de sécurité sous ces hypothèses.

#### 4. Analyse critique et limites du modèle

Le modèle combinatoire présenté évalue la complexité *dans le pire des cas* en supposant une répartition uniforme et aléatoire des clés dans l'espace $\mathcal{A}^L$. Toutefois, plusieurs limites scientifiques et pratiques nuancent cette sécurité :

1. **L'entropie humaine et les attaques par dictionnaire :** Les utilisateurs choisissent rarement des clés aléatoires uniformes ; ils privilégient des mots ou des séquences mémorisables. L'espace réel des clés testées est alors drastiquement réduit (réduction de l'entropie), rendant les attaques par dictionnaire (test d'un sous-ensemble fréquent de mots) beaucoup plus rapides que ne le prédit le calcul combinatoire pur.
2. **Le compromis temps-mémoire :** Des structures de données comme les *rainbow tables* permettent de précalculer des chaînes de hachage, échangeant de l'espace de stockage contre du temps de calcul, ce qui réduit l'efficacité apparente d'une augmentation linéaire de la longueur de la clé.
3. **L'évolution technologique :** La vitesse de calcul supposée ($10^{10} \text{ clés} \cdot \text{s}^{-1}$) est une variable dépendante du matériel (parallélisation massive sur GPU ou circuits ASIC). La sécurité informatique ne relève donc pas d'une garantie mathématique absolue, mais d'un rapport économique évolutif entre le coût de calcul pour l'attaquant et la valeur de la donnée protégée.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
