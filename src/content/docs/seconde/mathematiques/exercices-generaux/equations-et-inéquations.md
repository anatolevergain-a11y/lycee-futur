---
title: "Exercice : Equations et inéquations"
description: "Démonstration appliquée : Rentabilité d'un panneau solaire individuel"
---

### 🌐 Contexte moderne & concret

Dans le cadre de la transition énergétique et de la hausse du coût des énergies fossiles, de nombreux foyers décident d'investir dans l'autoconsommation photovoltaïque. 

Un particulier souhaite installer un panneau solaire individuel d'une puissance nominale de $400\text{ Wc}$. L'installation complète (matériel et pose) lui coûte $800\text{ €}}$. 
Le panneau produit en moyenne $500\text{ kWh}$ par an. Le prix de rachat ou d'économie réalisé sur l'électricité est estimé à $0,20\text{ €}$ par $\text{kWh}$. 
Cependant, l'onduleur (boîtier de conversion du courant) nécessite une maintenance payante de $30\text{ €}$ par an.

Nous cherchons à déterminer au bout de combien de temps l'installation devient rentable, c'est-à-dire le moment où les économies cumulées dépassent l'investissement initial.

---

### ❓ Énoncé (3 à 4 questions progressives)

Soit $t$ le nombre d'années écoulées depuis l'installation du panneau solaire.

1. **Modélisation des gains nets :** Exprimez, en fonction de $t$, le montant total des économies nettes $E(t)$ réalisées grâce au panneau solaire (c'est-à-dire les gains de production d'électricité desquels on soustrait les frais de maintenance annuels).
2. **Seuil de rentabilité (Équation) :** Établissez une équation traduisant le moment exact où les économies nettes cumulées égalent le coût initial de l'installation. Résolvez cette équation.
3. **Période d'amortissement (Inéquation) :** Posez et résolvez une inéquation permettant de déterminer à partir de quelle année entière l'installation devient enfin rentable pour le particulier.
4. **Analyse critique :** Sachant que la durée de vie garantie du panneau est de $20$ ans, concluez sur la pertinence écologique et économique de cet investissement citoyen.

---

### 💡 Indice

- Pour la **question 1**, calculez d'abord le gain annuel brut généré par les $500\text{ kWh}$, puis retirez les frais de maintenance pour obtenir le gain net par an. Multipliez ensuite ce résultat par $t$.
- Pour la **question 3**, rappelez-vous qu'une inéquation se résout de la même manière qu'une équation, en faisant attention au sens du symbole ($<$ ou $>$) si l'on divise par un nombre négatif (ce qui n'est pas le cas ici). N'oubliez pas que $t$ représente un nombre d'années, donc la réponse finale doit être un nombre entier.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Modélisation des gains nets

Calculons d'abord le bénéfice net annuel réalisé par le panneau solaire :
- Gain brut annuel : $500\text{ kWh} \times 0,20\text{ €/kWh} = 100\text{ €}$ par an.
- Frais de maintenance : $30\text{ €}$ par an.

Le gain net annuel est donc de :
$$100 - 30 = 70\text{ € par an}$$

Ainsi, pour $t$ années, l'expression des économies nettes cumulées $E(t)$ (en euros) est :
$$E(t) = 70t$$

---

#### 2. Seuil de rentabilité (Équation)

L'investissement initial est de $800\text{ €}$. L'installation est à l'équilibre (le point mort) lorsque les économies nettes cumulées égalent l'investissement initial. Nous posons l'équation :
$$70t = 800$$

Résolvons cette équation :
$$t = \frac{800}{70}$$
$$t = \frac{80}{7} \approx 11,43\text{ ans}$$

---

#### 3. Période d'amortissement (Inéquation)

Le particulier veut savoir à partir de quand l'installation devient rentable, c'est-à-dire quand les économies nettes dépassent strictement le coût d'achat initial :
$$70t > 800$$

Résolvons cette inéquation :
$$t > \frac{800}{70}$$
$$t > 11,43$$

Puisque le temps s'écoule par années entières (et que l'on cherche la première année où l'inégalité est vraie), on arrondit à l'entier supérieur. 
L'installation devient rentable à partir de la **$12^{\text{e}}$ année**.

---

#### 4. Analyse critique

Le panneau solaire a une durée de vie garantie de $20$ ans. 
Puisque l'investissement est amorti au bout de $11,43$ ans (soit au cours de la $12^{\text{e}}$ année), le particulier profite de près de $8$ à $9$ années de production d'électricité entièrement gratuite et bénéfique pour l'environnement (réduction des émissions de $\text{CO}_2$). 

Cet investissement individuel est donc **économiquement rentable** sur le long terme et constitue un acte citoyen efficace pour la transition énergétique.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
