---
title: "Exercice 2 : Étude des fluides et pression"
description: "Application pratique du chapitre Mouvement et forces en mécanique"
---

### 🌐 Contexte & Données scientifiques

L'étude de la statique des fluides trouve de nombreuses applications industrielles et environnementales, notamment dans la conception de systèmes de sécurité ou d'exploration sous-marine. Lors d'une plongée scientifique en apnée ou en submersible, la pression exercée par l'eau sur les structures ou les organismes augmente de manière linéaire avec la profondeur. 

Considérons un sous-marin d'exploration océanographique effectuant une mission de mesure dans la fosse méditerranéenne. Pour des raisons de sécurité, les ingénieurs doivent modéliser précisément les forces pressantes s'exerçant sur un hublot d'observation plan, circulaire, de diamètre $d = 30\text{ cm}$, situé à une profondeur $h = 500\text{ m}$.

Le modèle standard de l'hydrostatique relie la pression $P$ à une profondeur $h$ par la relation fondamentale :
$$P(h) = P_{\text{atm}} + \rho \cdot g \cdot h$$

**Données et incertitudes associées :**
* Pression atmosphérique de référence : $P_{\text{atm}} = 1,013 \times 10^5\text{ Pa}$
* Masse volumique de l'eau de mer (moyenne mesurée) : $\rho = 1,025 \times 10^3\text{ kg}\cdot\text{m}^{-3}$ (cette valeur varie selon la salinité et la température, induisant une incertitude relative estimée à $\pm 1\,\%$)
* Intensité de la pesanteur terrestre : $g = 9,81\text{ N}\cdot\text{kg}^{-1}$
* Surface d'un disque de diamètre $d$ : $S = \pi \cdot \left(\frac{d}{2}\right)^2$

*Note critique sur le modèle :* L'utilisation de la formule fondamentale de la statique des fluides repose sur l'hypothèse d'incompressibilité du fluide ($\rho = \text{cte}$). Si cette approximation est tout à fait acceptable à $500\text{ m}$ de profondeur ($\Delta\rho/\rho < 0,3\,\%$), elle s'avère insuffisante pour les fosses abyssales (> $5000\text{ m}$) où la compressibilité de l'eau de mer commence à modifier significativement la distribution des masses volumiques.

---

### ❓ Énoncé

1. **Analyse dimensionnelle et calcul de pression :** Rappeler l'unité légale (SI) de la pression et calculer la pression absolue $P$ subie par le hublot à $500\text{ m}$ de profondeur. Exprimez le résultat en pascal ($\text{Pa}$) puis en bar ($1\text{ bar} = 10^5\text{ Pa}$).
2. **Modélisation de la force pressante :** Calculer la surface $S$ du hublot en $\text{m}^2$. En déduire l'expression littérale, puis la valeur numérique de la force pressante exercée par l'eau de mer *uniquement* sur la face externe du hublot.
3. **Esprit critique et bilan des forces :** La force calculée à la question précédente représente-t-elle la force nette s'exerçant sur le hublot ? Justifiez votre réponse en précisant l'impact de la pression atmosphérique interne à la cabine sur l'intégrité mécanique du matériau.
4. **Analyse d'incertitude :** En tenant compte d'une variation possible de la masse volumique de l'eau de $\pm 1\,\%$ due aux courants thermiques locaux, calculez l'encadrement de la force pressante s'exerçant sur le hublot. Discutez de la nécessité de surdimensionner les matériaux en ingénierie face à ces incertitudes.

---

### 💡 Indice de méthode

* **Question 1 :** Veillez à bien additionner la pression atmosphérique et la pression hydrostatique. Attention aux unités : $h$ doit être en mètres, $\rho$ en $\text{kg}\cdot\text{m}^{-3}$ et $g$ en $\text{N}\cdot\text{kg}^{-1}$.
* **Question 2 :** La force pressante $\vec{F}$ exercée par un fluide sur une surface plane $S$ est perpendiculaire à cette surface. Sa norme s'exprime par $F = P_{\text{eff}} \cdot S$ ou $F = P \cdot S$ selon qu'on étudie la force totale ou la surpression. Ici, on étudie la force exercée par l'eau extérieure, donc on utilise la pression absolue $P$ (ou l'on comptabilise l'effet global).
* **Question 3 :** Pensez au principe des actions réciproques et à la présence d'air à l'intérieur du sous-marin qui exerce également une force de l'intérieur vers l'extérieur.
* **Question 4 :** L'incertitude sur $\rho$ se propage linéairement dans le calcul de $P$, puis de $F$. Exprimez $F(\rho_{\min})$ et $F(\rho_{\max})$.

---

### 📋 Correction détaillée pas à pas

1. **Calcul de la pression absolue à $500\text{ m}$ :**
   * L'unité légale de la pression dans le Système International (SI) est le pascal ($\text{Pa}$), équivalent à des $\text{N}\cdot\text{m}^{-2}$.
   * Application numérique :
     $$P(500) = 1,013 \times 10^5 + (1,025 \times 10^3) \times 9,81 \times 500$$
     $$P(500) = 1,013 \times 10^5 + 5.027,625 \times 10^3 = 1,013 \times 10^5 + 50,276 \times 10^5$$
     $$P(500) = 51,289 \times 10^5\text{ Pa} = 5,13 \times 10^6\text{ Pa}$$
   * Conversion en bar :
     $$P(500) = \frac{5,1289 \times 10^6}{10^5} \approx 51,3\text{ bar}$$

2. **Calcul de la surface et de la force pressante externe :**
   * Rayon du hublot : $r = \frac{d}{2} = 0,15\text{ m}$.
   * Surface $S$ :
     $$S = \pi \times (0,15)^2 \approx 7,069 \times 10^{-2}\text{ m}^2$$
   * La norme de la force pressante de l'eau sur la face externe est :
     $$F_{\text{ext}} = P(500) \times S$$
     $$F_{\text{ext}} = (5,1289 \times 10^6) \times (7,069 \times 10^{-2}) \approx 3,62 \times 10^5\text{ N}$$
     Soit environ $362\text{ kN}$ (l'équivalent du poids d'une masse d'environ $37\text{ tonnes}$).

3. **Bilan des forces et esprit critique :**
   * **Non**, cette force ne représente pas la force nette subie par le matériau du hublot. 
   * À l'intérieur du sous-marin, la cabine est pressurisée à une valeur proche de la pression atmosphérique (ou légèrement supérieure pour le confort de l'équipage, ex: $1\text{ bar}$). L'air intérieur exerce donc une force $F_{\text{int}} = P_{\text{atm}} \times S$ de l'intérieur vers l'extérieur.
   * La force nette $\vec{F}_{\text{net}}$ qui tend à contraindre mécaniquement le verre acrylique du hublot est due à la *surpression* effective : 
     $$F_{\text{net}} = (P(500) - P_{\text{atm}}) \times S = (\rho \cdot g \cdot h) \times S$$
     $$F_{\text{net}} \approx 5,028 \times 10^6 \times 7,069 \times 10^{-2} \approx 3,55 \times 10^5\text{ N}$$
   * Négliger la pression interne aurait conduit à une surestimation mineure ici (environ $2\,\%$), mais dans d'autres contextes (technologie du vide, aéronautique), l'oubli de la pression différentielle conduit à des erreurs de conception critiques.

4. **Analyse d'incertitude et compromis d'ingénierie :**
   * Si la masse volumique varie de $\pm 1\,\%$, soit $\rho_{\min} = 1014,75\text{ kg}\cdot\text{m}^{-3}$ et $\rho_{\max} = 1035,25\text{ kg}\cdot\text{m}^{-3}$ :
     * $P_{\min} = 1,013 \times 10^5 + 1014,75 \times 9,81 \times 500 = 5,078 \times 10^6\text{ Pa}$
     * $P_{\max} = 1,013 \times 10^5 + 1035,25 \times 9,81 \times 500 = 5,179 \times 10^6\text{ Pa}$
   * Encadrement de la force nette $F_{\text{net}}$ :
     * $F_{\min} = 5,078 \times 10^6 \times 7,069 \times 10^{-2} \approx 3,59 \times 10^5\text{ N}$
     * $F_{\max} = 5,179 \times 10^6 \times 7,069 \times 10^{-2} \approx 3,66 \times 10^5\text{ N}$
   * **Discussion :** L'incertitude environnementale génère une incertitude de près de $7\text{ kN}$ sur la force subie. En ingénierie, il est impossible de concevoir un système "juste assez" résistant. Les ingénieurs appliquent des **coefficients de sécurité** (souvent de l'ordre de 3 à 5 dans le domaine maritime) pour pallier non seulement les incertitudes de mesure du modèle, mais aussi les micro-défauts des matériaux et la fatigue mécanique liée aux cycles de plongée répétés.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
