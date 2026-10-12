---
title: "Exercice 2 : Mesure des niveaux sonores en décibels"
description: "Application pratique du chapitre Fonction logarithme népérien"
---

### 🌐 Contexte & Données scientifiques

En acoustique, la perception humaine du volume sonore ne suit pas une échelle linéaire, mais une échelle logarithmique. Le niveau sonore $L$, exprimé en décibels ($\text{dB}$), est défini par la relation mathématique suivante :

$$L(I) = 10 \log_{10}\left(\frac{I}{I_0}\right)$$

où :
- $I$ représente l'intensité acoustique de l'onde sonore, exprimée en watts par mètre carré ($\text{W}\cdot\text{m}^{-2}$).
- $I_0$ est l'intensité de référence, correspondant au seuil d'audibilité humaine moyenne, fixée conventionnellement à $I_0 = 10^{-12} \text{W}\cdot\text{m}^{-2}$.

Pour les besoins de l'analyse mathématique et physique, on utilise la propriété de changement de base du logarithme pour exprimer le niveau sonore à l'aide du logarithme népérien $\ln$ :
$$\log_{10}(x) = \frac{\ln(x)}{\ln(10)}$$

Dans le cadre de la prévention des risques auditifs au travail, la directive européenne fixe à $85 \text{ dB}$ le seuil d'exposition quotidienne déclenchant l'obligation de porter des protections auditives. Par ailleurs, en milieu urbain, l'addition de sources sonores obéit à des lois physiques strictes : doubler l'intensité acoustique d'un son n'ajoute pas un montant constant d'intensité, ce qui modifie le niveau perçu selon une dynamique non linéaire.

---

### ❓ Énoncé

1. **Étude de la fonction et seuil réglementaire :**
   À l'aide du logarithme népérien, exprimer $L(I)$ en fonction de $\ln(I)$ et de $\ln(I_0)$. Calculer l'intensité acoustique $I$ (en $\text{W}\cdot\text{m}^{-2}$) correspondant au seuil réglementaire de $85 \text{ dB}$.

2. **Modélisation de l'atténuation acoustique :**
   Lorsqu'un panneau isolant est traversé par une onde sonore d'intensité initiale $I_{\text{init}}$, l'intensité transmise $I_{\text{trans}}$ est modélisée par la fonction :
   $$I_{\text{trans}}(x) = I_{\text{init}} \cdot e^{-kx}$$
   où $x$ représente l'épaisseur du matériau en mètres ($\text{m}$) et $k$ un coefficient d'atténuation caractéristique du matériau (en $\text{m}^{-1}$).
   Exprimer le niveau sonore atténué $L(I_{\text{trans}})$ en fonction de $L(I_{\text{init}})$, de $x$, de $k$ et des constantes du problème.

3. **Analyse critique d'un compromis technologique :**
   Pour un matériau donné, on estime que $k = 23 \text{ m}^{-1}$. Un technicien affirme : *"Si l'on double l'épaisseur du panneau isolant, on divise le niveau sonore en décibels par deux"*. 
   À l'aide d'une démonstration mathématique rigoureuse, valider ou réfuter cette affirmation.

---

### 💡 Indice de méthode

- **Question 1 :** Utilisez la formule de changement de base $\log_{10}(A) = \frac{\ln(A)}{\ln(10)}$, puis isolez $I$ en utilisant la fonction exponentielle, qui est la bijection réciproque du logarithme népérien.
- **Question 2 :** Injectez l'expression de $I_{\text{trans}}(x)$ dans la formule générale du niveau sonore $L$, puis utilisez les propriétés algébriques de la fonction $\ln$ (notamment $\ln(A \times B) = \ln(A) + \ln(B)$ et $\ln(e^A) = A$).
- **Question 3 :** Traduisez mathématiquement l'hypothèse de l'énoncé (comparer $L(I_{\text{trans}}(2x))$ et $\frac{1}{2} L(I_{\text{trans}}(x))$ ou $L(I_{\text{trans}}(x))$) et concluez par un raisonnement par l'absurde ou un contre-exemple numérique.

---

### 📋 Correction détaillée pas à pas

#### 1. Expression avec le logarithme népérien et calcul du seuil
Par définition, on a :
$$L(I) = 10 \log_{10}\left(\frac{I}{I_0}\right)$$
En appliquant la formule de changement de base :
$$L(I) = 10 \frac{\ln\left(\frac{I}{I_0}\right)}{\ln(10)}$$

Pour déterminer l'intensité $I$ correspondant à $L = 85 \text{ dB}$, on résout l'équation d'inconnue $I$ :
$$85 = \frac{10}{\ln(10)} \ln\left(\frac{I}{I_0}\right)$$
$$\ln\left(\frac{I}{I_0}\right) = \frac{85 \ln(10)}{10}$$
En appliquant la fonction exponentielle de part et d'autre :
$$\frac{I}{I_0} = e^{\frac{8.5}{\ln(10)}}$$
Soit $I = I_0 \cdot e^{8.5 \ln(10)}$. Sachant que $e^{a \ln(b)} = b^a$ :
$$I = I_0 \cdot 10^{8.5}$$
En remplaçant $I_0$ par sa valeur $10^{-12} \text{ W}\cdot\text{m}^{-2}$ :
$$I = 10^{-12} \cdot 10^{8.5} = 10^{-3.5} \text{ W}\cdot\text{m}^{-2} \approx 3{,}16 \times 10^{-4} \text{ W}\cdot\text{m}^{-2}$$
*Interprétation scientifique :* L'intensité sonore tolérable est donc de l'ordre de $3{,}16 \times 10^{-4} \text{ W}\cdot\text{m}^{-2}$, ce qui illustre la très grande sensibilité de l'oreille humaine puisque cette valeur reste physiquement très faible.

---

#### 2. Modélisation de l'atténuation acoustique
Calculons le niveau sonore correspondant à l'intensité transmise $I_{\text{trans}}(x)$ :
$$L(I_{\text{trans}}) = \frac{10}{\ln(10)} \ln\left(\frac{I_{\text{init}} \cdot e^{-kx}}{I_0}\right)$$
En utilisant la propriété algébrique du logarithme népérien $\ln(A \times B) = \ln(A) + \ln(B)$ :
$$L(I_{\text{trans}}) = \frac{10}{\ln(10)} \left[ \ln\left(\frac{I_{\text{init}}}{I_0}\right) + \ln(e^{-kx}) \right]$$
Puisque $\ln(e^{-kx}) = -kx$ :
$$L(I_{\text{trans}}) = \frac{10}{\ln(10)} \ln\left(\frac{I_{\text{init}}}{I_0}\right) - \frac{10}{\ln(10)} kx$$
On reconnaît dans le premier terme l'expression du niveau sonore initial $L(I_{\text{init}})$. Ainsi :
$$L(I_{\text{trans}}(x)) = L(I_{\text{init}}) - \frac{10k}{\ln(10)} x$$
*Analyse du modèle :* Le niveau sonore décroît de manière **affine** (et non exponentielle) en fonction de l'épaisseur $x$ du matériau isolant, en raison de l'application de la fonction logarithme.

---

#### 3. Analyse critique du propos du technicien
Testons l'affirmation du technicien. D'après la question précédente, le niveau sonore pour une épaisseur $x$ est :
$$L(x) = L(I_{\text{init}}) - \frac{10k}{\ln(10)} x$$
Si l'on double l'épaisseur, le nouveau niveau sonore est :
$$L(2x) = L(I_{\text{init}}) - \frac{10k}{\ln(10)} (2x) = L(I_{\text{init}}) - 2 \left( \frac{10k}{\ln(10)} x \right)$$

L'affirmation du technicien suggère que $L(2x) = \frac{1}{2} L(x)$. 
Mathématiquement, soustraire une quantité (ce que fait l'atténuation linéaire en dB) n'est pas équivalent à diviser par deux. 

*Démonstration par l'absurde / Contre-exemple :*
Imaginons un son initial de $100 \text{ dB}$ et une atténuation telle que $\frac{10k}{\ln(10)} = 10 \text{ dB}\cdot\text{m}^{-1}$.
- Pour $x = 1 \text{ m}$ : $L(1) = 100 - 10(1) = 90 \text{ dB}$.
- Pour $2x = 2 \text{ m}$ : $L(2) = 100 - 10(2) = 80 \text{ dB}$.

Si l'affirmation du technicien était vraie, doubler l'épaisseur (passer de $1 \text{ m}$ à $2 \text{ m}$) aurait dû donner $\frac{90}{2} = 45 \text{ dB}$. Or, le calcul physique rigoureux donne $80 \text{ dB}$.

**Conclusion critique :** L'affirmation du technicien est **fausse**. Doubler l'épaisseur du matériau double l'atténuation *en décibels* (la réduction soustractive), mais ne divise en aucun cas le niveau sonore global par deux. Cela met en évidence la nécessité pour le scientifique et l'ingénieur de se méfier des intuitions relevant d'une arithmétique linéaire face à des phénomènes régis par des fonctions logarithmiques.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
