---
title: "Exercice : Ondes et signaux"
description: "Démonstration appliquée : Transmission de la fibre optique et internet haut débit"
---

### 🌐 Contexte

Aujourd'hui, près de 99 % des communications intercontinentales (données bancaires, vidéos en continu, pages web) ne transitent pas par satellite, mais par un immense réseau de câbles sous-marins en fibre optique posés au fond des océans. 

La fibre optique permet de guider un signal lumineux sur des milliers de kilomètres à très grande vitesse et avec de très faibles pertes. Dans le cadre du déploiement des infrastructures numériques et de la réduction des temps de latence (« ping »), les ingénieurs doivent calculer avec précision la vitesse de propagation de la lumière dans le verre afin d'optimiser le routage des données entre les continents.

---

### ❓ Énoncé

**Données utiles :**
* Vitesse de la lumière dans le vide : $c = 3,00 \times 10^8 \text{ m}\cdot\text{s}^{-1}$
* Indice de réfraction du cœur en silice de la fibre : $n = 1,48$
* Longueur du câble sous-marin reliant l'Europe à l'Amérique du Nord : $d = 6\,600 \text{ km}$

#### 1. Nature de l'onde et guidage
a) Préciser la nature de l'onde utilisée pour transmettre des données dans une fibre optique (mécanique ou électromagnétique).  
b) Nommer le phénomène optique fondamental intervenant à la surface de séparation entre le cœur et la gaine, qui permet à la lumière de rester confinée à l'intérieur de la fibre sans s'en échapper.

#### 2. Vitesse de propagation
Dans un milieu transparent d'indice de réfraction $n$, la vitesse $v$ de la lumière est ralentie par rapport à sa vitesse dans le vide selon la relation :
$$v = \frac{c}{n}$$

Calculer la vitesse $v$ de propagation du signal lumineux dans le cœur en silice de cette fibre optique. Exprimer le résultat en notation scientifique avec trois chiffres significatifs.

#### 3. Durée de transmission aller simple
Calculer la durée minimale théorique $\Delta t$ mise par une impulsion lumineuse pour parcourir la totalité du câble sous-marin de longueur $d = 6\,600 \text{ km}$.  
Exprimer le résultat en secondes ($\text{s}$), puis en millisecondes ($\text{ms}$).

#### 4. Analyse citoyenne : le « ping » dans les jeux vidéo en réseau
Lors d'une partie de jeu vidéo en ligne entre un joueur situé en France et un serveur situé aux États-Unis, le joueur relève une latence aller-retour (temps de transit complet aller-retour, appelé « ping ») d'environ $88 \text{ ms}$.

a) Déterminer le temps théorique aller-retour minimal lié uniquement au trajet dans le câble sous-marin.  
b) Proposer au moins deux explications techniques ou physiques justifiant l'écart entre le temps théorique calculé et le temps réel mesuré par le joueur.

---

### 💡 Indice

* **Pour la question 2 :** Veille à ce que les unités soient cohérentes : $c$ est en $\text{m}\cdot\text{s}^{-1}$, donc $v$ sera également en $\text{m}\cdot\text{s}^{-1}$. L'indice $n$ n'a pas d'unité.
* **Pour la question 3 :** Pense à convertir la distance $d$ en mètres ($\text{m}$) avant d'utiliser la relation reliant distance, vitesse et durée : 
$$v = \frac{d}{\Delta t} \iff \Delta t = \frac{d}{v}$$
Rappel : $1 \text{ km} = 10^3 \text{ m}$ et $1 \text{ s} = 10^3 \text{ ms}$.
* **Pour la question 4 :** Un aller-retour correspond à une distance double ($2 \times d$). Pense ensuite aux équipements intermédiaires traversés par l'information (box, routeurs, serveurs) et au parcours réel des câbles terrestres.

---

### 📋 Correction détaillée

#### 1. Nature de l'onde et guidage

a) La lumière utilisée dans la fibre optique (souvent du rayonnement proche infrarouge) est une **onde électromagnétique**. Contrairement aux ondes mécaniques (comme le son), elle peut se propager dans le vide et dans les milieux transparents sans nécessiter de support matériel pour exister.

b) Le phénomène qui maintient la lumière à l'intérieur du cœur est la **réflexion totale**. Lorsque le rayon lumineux arrive sur la surface de séparation entre le cœur (plus réfringent, d'indice plus élevé) et la gaine (d'indice plus faible) avec un angle d'incidence supérieur à l'angle limite, il est intégralement réfléchi vers l'intérieur du cœur sans aucune réfraction vers l'extérieur.

---

#### 2. Vitesse de propagation dans la fibre

* **Données :**
  * $c = 3,00 \times 10^8 \text{ m}\cdot\text{s}^{-1}$
  * $n = 1,48$

* **Formule :**
$$v = \frac{c}{n}$$

* **Application numérique :**
$$v = \frac{3,00 \times 10^8}{1,48} \approx 2,027 \times 10^8 \text{ m}\cdot\text{s}^{-1}$$

En conservant 3 chiffres significatifs, la vitesse de propagation est :
$$v = 2,03 \times 10^8 \text{ m}\cdot\text{s}^{-1}$$

> *Remarque pédagogique :* La vitesse de la lumière est réduite d'environ un tiers dans le verre par rapport au vide, mais reste extrêmement élevée (environ $203\,000 \text{ km}\cdot\text{s}^{-1}$).

---

#### 3. Durée de transmission aller simple

* **Conversion de la distance en mètres :**
$$d = 6\,600 \text{ km} = 6\,600 \times 10^3 \text{ m} = 6,60 \times 10^6 \text{ m}$$

* **Formule de la durée :**
$$\Delta t = \frac{d}{v}$$

* **Application numérique :**
$$\Delta t = \frac{6,60 \times 10^6}{2,03 \times 10^8} \approx 0,0325 \text{ s}$$

* **Conversion en millisecondes :**
$$\Delta t = 0,0325 \times 10^3 \text{ ms} = 32,5 \text{ ms}$$

Il faut donc environ **$32,5 \text{ ms}$** à l'impulsion lumineuse pour traverser l'océan Atlantique.

---

#### 4. Analyse citoyenne : le « ping »

a) **Temps théorique aller-retour :**
$$\Delta t_{\text{aller-retour}} = 2 \times \Delta t = 2 \times 32,5 \text{ ms} = 65,0 \text{ ms}$$

b) **Explications de l'écart ($88 \text{ ms} > 65 \text{ ms}$) :**
1. **Trajet supplémentaire sur la terre ferme :** La liaison ne se résume pas au câble sous-marin. Le signal doit cheminer depuis le domicile du joueur jusqu'à la côte, puis de la côte américaine jusqu'au centre de données hébergeant le jeu (câbles terrestres supplémentaires ajoutant des kilomètres).
2. **Temps de traitement électronique (latence des routeurs) :** À chaque intersection du réseau, des routeurs et commutateurs doivent lire l'en-tête des paquets de données pour les aiguiller. Cette conversion optique-électronique-optique et le calcul d'acheminement demandent quelques millisecondes.
3. **Trajectoire en zigzag :** Dans la fibre, les rayons lumineux progressent par réflexions successives (en zigzag) et non en ligne droite parfaite, ce qui allonge légèrement la distance réellement parcourue par la lumière.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
