---
title: "Exercice : Physique quantique et effet photoélectrique"
description: "Démonstration appliquée : Rendement des capteurs solaires de dernière génération"
---

### 🌐 Contexte moderne & concret

La transition énergétique repose en grande partie sur l'amélioration des technologies photovoltaïques. Les cellules solaires traditionnelles en silicium atteignent aujourd'hui leurs limites physiques (rendement théorique maximal d'environ $33\,\%$, connu sous la limite de Shockley-Queisser). Pour repousser ces limites, les chercheurs développent des **cellules en tandem** (par exemple, silicium-pérovskite). 

Ces capteurs de dernière génération associent deux matériaux aux largeurs de bande interdite complémentaires : la couche supérieure absorbe les photons les plus énergétiques (bleu/violet), tandis que la couche inférieure capte les photons moins énergétiques (rouge/infrarouge). 

Pour comprendre et optimiser ces technologies, il est indispensable de faire appel à la physique quantique introduite par Albert Einstein en 1905 : **l'effet photoélectrique**.

---

### ❓ Énoncé

On considère une cellule photovoltaïque dont la cathode métallique est constituée d'un matériau dont le travail d'extraction (énergie seuil) est noté $W_0 = 2,14\,\text{eV}$.

1. Rappeler la définition de l'effet photoélectrique et exprimer l'énergie cinétique maximale $E_{c,\text{max}}$ d'un électron éjecté en fonction de la constante de Planck $h$, de la fréquence $v$ du rayonnement incident et de $W_0$. Calculer la longueur d'onde seuil $\lambda_s$ du matériau en nanomètres.
2. La cellule est éclairée par un rayonnement monochromatique de longueur d'onde $\lambda = 500\,\text{nm}$. 
   a. Déterminer l'énergie d'un photon incident en Joules, puis en électron-volts ($\text{eV}$).
   b. Les électrons sont-ils émis ? Si oui, calculer leur vitesse maximale $v_{\text{max}}$.
3. Dans des conditions d'ensoleillement standard, la puissance lumineuse reçue par le capteur est $P_{\text{lum}} = 1,00 \times 10^3\,\text{W}\cdot\text{m}^{-2}$ (pour une surface $S = 1,00\,\text{m}^2$). Le nombre de photons incidents par seconde est estimé à $N_{\text{photons}} = 2,50 \times 10^{21}\,\text{s}^{-1}$. Le capteur génère un courant électrique continu d'intensité $I = 9,65\,\text{A}$ sous une tension $U = 22,0\,\text{V}$.
   a. Calculer le rendement énergétique global $\eta$ de ce capteur solaire.
   b. Expliquer pourquoi ce rendement est inférieur à $100\,\%$, en citant deux pertes d'origine quantique ou thermique inhérentes aux cellules photovoltaïques.

*Données utiles :*
- Constante de Planck : $h = 6,626 \times 10^{-34}\,\text{J}\cdot\text{s}$
- Célérité de la lumière dans le vide : $c = 3,00 \times 10^8\,\text{m}\cdot\text{s}^{-1}$
- Charge élémentaire : $e = 1,60 \times 10^{-19}\,\text{C}$
- Masse de l'électron : $m_e = 9,11 \times 10^{-31}\,\text{kg}$
- $1\,\text{eV} = 1,60 \times 10^{-19}\,\text{J}$

---

### 💡 Indice

- **Question 1 :** Utilisez la conservation de l'énergie lors du choc photon-électron. À la limite du seuil photoélectrique, l'énergie cinétique est nulle. Pensez à la relation $c = \lambda \cdot v$.
- **Question 2 :** Comparez l'énergie du photon incident à l'énergie seuil $W_0$. Pour la vitesse, utilisez l'expression classique de l'énergie cinétique $E_c = \frac{1}{2} m_e v^2$.
- **Question 3 :** Le rendement d'un système se calcule par $\eta = \frac{P_{\text{utile}}}{P_{\text{recue}}}$. La puissance électrique utile s'obtient à partir des grandeurs macroscopiques $U$ et $I$.

---

### 📋 Correction détaillée (Pas à pas)

#### 1. Effet photoélectrique et longueur d'onde seuil
L'effet photoélectrique est l'émissions d'électrons par un matériau soumis à l'éclairage d'un rayonnement électromagnétique. D'après la relation d'Einstein, l'énergie d'un photon incident est transmise intégralement à un électron. L'équation de conservation de l'énergie s'écrit :
$$E_{c,\text{max}} = h \cdot v - W_0$$

La longueur d'onde seuil $\lambda_s$ correspond à la longueur d'onde maximale permettant d'extraire un électron (l'énergie cinétique est alors nulle, $E_{c,\text{max}} = 0$) :
$$h \cdot v_s = W_0 \implies \frac{h \cdot c}{\lambda_s} = W_0 \implies \lambda_s = \frac{h \cdot c}{W_0}$$

Convertissons $W_0$ en Joules :
$$W_0 = 2,14\,\text{eV} = 2,14 \times 1,60 \times 10^{-19}\,\text{J} = 3,424 \times 10^{-19}\,\text{J}$$

Application numérique pour $\lambda_s$ :
$$\lambda_s = \frac{6,626 \times 10^{-34} \times 3,00 \times 10^8}{3,424 \times 10^{-19}} \approx 5,81 \times 10^{-7}\,\text{m} = 581\,\text{nm}$$

---

#### 2. Étude de l'éclairage à $\lambda = 500\,\text{nm}$
**a.** L'énergie d'un photon de longueur d'onde $\lambda = 500\,\text{nm}$ est :
$$E_{\text{photon}} = \frac{h \cdot c}{\lambda} = \frac{6,626 \times 10^{-34} \times 3,00 \times 10^8}{500 \times 10^{-9}} = 3,975 \times 10^{-19}\,\text{J}$$

En électron-volts :
$$E_{\text{photon}} = \frac{3,975 \times 10^{-19}}{1,60 \times 10^{-19}} = 2,48\,\text{eV}$$

**b.** On constate que $E_{\text{photon}} (2,48\,\text{eV}) > W_0 (2,14\,\text{eV})$. **L'effet photoélectrique a donc lieu**, des électrons sont émis.

Calculons leur vitesse maximale $v_{\text{max}}$ :
$$E_{c,\text{max}} = E_{\text{photon}} - W_0 = 3,975 \times 10^{-19} - 3,424 \times 10^{-19} = 5,51 \times 10^{-20}\,\text{J}$$

Comme $E_{c,\text{max}} = \frac{1}{2} m_e v_{\text{max}}^2$, on isole la vitesse :
$$v_{\text{max}} = \sqrt{\frac{2 \cdot E_{c,\text{max}}}{m_e}} = \sqrt{\frac{2 \times 5,51 \times 10^{-20}}{9,11 \times 10^{-31}}}$$
$$v_{\text{max}} \approx 3,48 \times 10^5\,\text{m}\cdot\text{s}^{-1}$$

---

#### 3. Rendement du capteur solaire
**a.** La puissance électrique utile fournie par le capteur est :
$$P_{\text{util}} = U \cdot I = 22,0 \times 9,65 = 212,3\,\text{W}$$

La puissance lumineuse reçue pour $S = 1,00\,\text{m}^2$ est :
$$P_{\text{lum}} = 1,00 \times 10^3\,\text{W}$$

Le rendement énergétique $\eta$ du capteur est le rapport entre la puissance électrique utile et la puissance lumineuse reçue :
$$\eta = \frac{P_{\text{util}}}{P_{\text{lum}}} = \frac{212,3}{1,00 \times 10^3} = 0,2123$$
Soit un rendement de **$21,2\,\%$**.

**b.** Ce rendement est inférieur à $100\,\%$ pour plusieurs raisons fondamentales :
1. **Origine quantique (pertes par transmission) :** Les photons dont l'énergie est inférieure au travail d'extraction (ou à la bande interdite du semi-conducteur) ne sont pas absorbés et traversent le matériau sans interagir.
2. **Origine thermique (effet Joule et thermalisation) :** Les photons dont l'énergie est supérieure au seuil possèdent un excédent d'énergie ($E_{\text{photon}} - W_0$) qui est immédiatement dissipé sous forme de chaleur (vibration du réseau cristallin ou phonons), ce qui limite le rendement de conversion.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
