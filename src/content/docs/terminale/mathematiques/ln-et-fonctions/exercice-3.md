---
title: "Exercice 3 : Analyse d'échelles logarithmiques"
description: "Application pratique du chapitre Fonction logarithme népérien"
---

### 🌐 Contexte & Données scientifiques

En acoustique, la perception humaine du volume sonore ne suit pas une échelle linéaire, mais une échelle logarithmique. C'est l'objet du décibel ($\text{dB}$), qui mesure le niveau de pression acoustique $L$ par rapport à un seuil de référence audible. 

La formule mathématique reliant le niveau sonore $L$ (exprimé en décibels) à l'intensité acoustique $I$ (exprimée en $\text{W/m}^2$) est définie par :
$$L(I) = 10 \ln\left(\frac{I}{I_0}\right) \times \frac{1}{\ln(10)}$$
*(Note : en physique, on utilise le logarithme décimal $\log_{10}$, qui s'exprime mathématiquement à l'aide du logarithme népérien via la relation $\log_{10}(x) = \frac{\ln(x)}{\ln(10)}$).*

On pose $I_0 = 10^{-12} \text{ W/m}^2$, qui correspond au seuil d'audibilité humaine standard à une fréquence de $1000 \text{ Hz}$.

Cependant, l'utilisation de modèles logarithmiques présente des limites méthodologiques :
1. **L'idéalisation du seuil :** $I_0$ est une valeur statistique moyenne ; la sensibilité auditive réelle varie selon les individus, l'âge et la fréquence du son.
2. **La non-linéarité de la perception :** Une augmentation de $10 \text{ dB}$ est perçue par le cerveau humain comme un doublement du volume sonore, alors qu'elle correspond à une multiplication de l'intensité physique $I$ par un facteur $10$. Cette distorsion entre physique et physiologie complique l'évaluation objective des risques sanitaires liés au bruit (ex: exposition en milieu professionnel ou lors de concerts).

---

### ❓ Énoncé

1. **Étude de la fonction et limites du modèle :**
   Justifier que la fonction $L : ]0, +\infty[ \to \mathbb{R}$ est bien définie et strictement croissante. Calculer la limite de $L(I)$ lorsque $I tend vers 0$ par valeurs supérieures ($I \to 0^+$) et commenter cette limite au regard des incertitudes de mesure en acoustique expérimentale.

2. **Résolution d'équation et seuil de danger :**
   La législation française recommande de ne pas dépasser un niveau sonore en continu de $85 \text{ dB}$ sur une durée de $8 \text{ heures}$ pour préserver l'intégrité de l'appareil auditif. Déterminer l'intensité acoustique $I$ (en $\text{W/m}^2$) correspondant à ce seuil de $85 \text{ dB}$.

3. **Analyse d'un compromis (doublement d'intensité) :**
   Démontrer mathématiquement que lorsque l'intensité acoustique d'une source est multipliée par $2$, le niveau sonore $L$ augmente d'une valeur constante, indépendante de l'intensité initiale $I$. Calculer cette augmentation en décibels et discuter de la difficulté pour un auditeur non averti d'évaluer le danger réel d'une augmentation de l'intensité physique.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez les propriétés algébriques de la fonction $\ln$ (notamment $\ln(a/b) = \ln(a) - \ln(b)$) pour simplifier l'expression de $L(I)$ avant d'étudier ses variations et ses limites.
* **Question 2 :** Isolez le terme contenant l'inconnue $I$ en résolvant l'équation $L(I) = 85$, puis utilisez la fonction exponentielle pour "annuler" le logarithme népérien.
* **Question 3 :** Exprimez $L(2I)$ en fonction de $L(I)$ en utilisant les propriétés des logarithmes. Pour l'esprit critique, interrogez-vous sur la perception intuitive d'un doublement de l'effort ou de l'énergie par rapport à la réalité logarithmique.

---

### 📋 Correction détaillée pas à pas

#### 1. Étude de la fonction et limites du modèle

L'expression du niveau sonore est :
$$L(I) = \frac{10}{\ln(10)} \ln\left(\frac{I}{I_0}\right)$$

* **Définition et variations :** 
  La fonction $I \mapsto \frac{I}{I_0}$ est une fonction affine strictement croissante à valeurs strictement positives sur $]0, +\infty[$. La fonction $\ln$ est définie et strictement croissante sur $]0, +\infty[$. Par composition, $L$ est définie et **strictement croissante** sur $]0, +\infty[$.
  *Interprétation physique :* Plus l'intensité physique de l'onde sonore est grande, plus le niveau sonore perçu est élevé.

* **Limite en $0^+$ :**
  On a $\lim_{I \to 0^+} \left(\frac{I}{I_0}\right) = 0^+$. 
  Or, $\lim_{X \to 0^+} \ln(X) = -\infty$. 
  Par conséquent :
  $$\lim_{I \to 0^+} L(I) = -\infty$$
  *Limite du modèle :* Mathématiquement, le modèle prédit un niveau sonore infiniment négatif lorsque l'intensité tend vers zéro. D'un point de vue expérimental, cette limite est absurde : aucun instrument de mesure ne peut enregistrer $-\infty \text{ dB}$, et le silence absolu n'existe pas en raison du bruit de fond thermique des molécules d'air. Cela illustre qu'un modèle mathématique idéalisé possède des frontières de validité qu'il convient de respecter.

---

#### 2. Résolution d'équation et seuil de danger

Recherchons l'intensité $I$ telle que $L(I) = 85$ :
$$\frac{10}{\ln(10)} \ln\left(\frac{I}{I_0}\right) = 85$$

Isolons $\ln\left(\frac{I}{I_0}\right)$ :
$$\ln\left(\frac{I}{I_0}\right) = \frac{85 \ln(10)}{10} = 8{,}5 \ln(10)$$

En utilisant la propriété $\ln(a^b) = b \ln(a)$, on obtient :
$$\ln\left(\frac{I}{I_0}\right) = \ln\left(10^{8{,}5}\right)$$

Par stricte croissance (et donc injectivité) de la fonction $\ln$ sur $]0, +\infty[$, on en déduit :
$$\frac{I}{I_0} = 10^{8{,}5}$$
$$I = I_0 \times 10^{8{,}5}$$

Sachant que $I_0 = 10^{-12} \text{ W/m}^2$ :
$$I = 10^{-12} \times 10^{8{,}5} = 10^{-3{,}5} \text{ W/m}^2$$

En valeur approchée :
$$I \approx 3{,}16 \times 10^{-4} \text{ W/m}^2$$

*Conclusion scientifique :* Le seuil de danger réglementaire correspond à une intensité physique de l'ordre de $3{,}16 \times 10^{-4} \text{ W/m}^2$.

---

#### 3. Analyse d'un compromis (doublement d'intensité)

Soit une intensité initiale $I > 0$. Si l'on double cette intensité, la nouvelle intensité est $2I$. Calculons le nouveau niveau sonore $L(2I)$ :
$$L(2I) = \frac{10}{\ln(10)} \ln\left(\frac{2I}{I_0}\right)$$

Utilisons la propriété algébrique du logarithme népérien ($\ln(ab) = \ln(a) + \ln(b)$) :
$$L(2I) = \frac{10}{\ln(10)} \left[ \ln(2) + \ln\left(\frac{I}{I_0}\right) \right]$$
$$L(2I) = \frac{10}{\ln(10)} \ln\left(\frac{I}{I_0}\right) + \frac{10 \ln(2)}{\ln(10)}$$
$$L(2I) = L(I) + \frac{10 \ln(2)}{\ln(10)}$$

L'augmentation du niveau sonore est donc constante et vaut :
$$\Delta L = L(2I) - L(I) = \frac{10 \ln(2)}{\ln(10)} \approx 10 \times 0{,}30103 \approx 3{,}01 \text{ dB}$$

*Esprit critique et analyse du modèle :* 
Lorsque l'énergie acoustique injectée dans l'environnement est **multipliée par $2$** (augmentation de $100\%$ de l'énergie physique), le niveau sonore n'augmente que d'environ **$3 \text{ dB}$**. 
Ce décalage entre la réalité physique linéaire et la perception logarithmique induit un biais cognitif important chez l'humain : une augmentation de quelques décibels semble bénigne, alors qu'elle cache une augmentation massive de l'énergie acoustique reçue par l'oreille, complexifiant l'évaluation intuitive des risques pour la santé auditive.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
