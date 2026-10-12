---
title: "Exercice : Solutions aqueuses et concentration"
description: "Démonstration appliquée : Dosage et qualité de l'eau potable en milieu agricole"
---

### 🌐 Contexte moderne & concret

Dans de nombreuses régions rurales, l'activité agricole intensive (élevage et culture) peut entraîner la présence de nitrates ($\text{NO}_3^-$) dans les nappes phréatiques. L'eau pompée pour alimenter le réseau d'eau potable doit faire l'objet de contrôles rigoureux pour garantir la santé des consommateurs. 

Selon l'Organisation Mondiale de la Santé (OMS) et la législation française, la concentration maximale admissible en ions nitrate dans l'eau potable est de $50\text{ mg/L}$. 

Un laboratoire d'analyse environnementale prélève un échantillon de $250\text{ mL}$ d'eau dans un puits situé près d'une zone agricole. Par une méthode chimique adaptée, les chimistes du laboratoire extraient et quantifient les ions nitrate présents dans cet échantillon, trouvant une masse de $15\text{ mg}$ de nitrate de sodium ($\mathrm{NaNO_3}$) équivalent.

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Calcul de la concentration en masse :** Déterminer la concentration en masse $\gamma$ (exprimée en $\mathrm{mg/L}$) des ions nitrate dans l'échantillon d'eau prélevé.
2. **Conformité sanitaire :** L'eau de ce puits est-elle propre à la consommation humaine selon la norme fixée à $50\text{ mg/L}$ ? Justifier la réponse.
3. **Calcul de la concentration molaire :** Rappeler la formule liant la concentration en masse $\gamma$, la concentration molaire $C$ et la masse molaire $M$, puis calculer la concentration molaire $C$ en ions nitrate dans cette solution. 
   *(Données : $M(\mathrm{N}) = 14{,}0\text{ g/mol}$ ; $M(\mathrm{O}) = 16{,}0\text{ g/mol}$)*
4. **Protocole expérimental :** Pour valider leurs instruments, les techniciens du laboratoire souhaitent préparer un volume $V = 100\text{ mL}$ d'une solution fille de nitrate de sodium à la concentration molaire $C_f = 1{,}0 \times 10^{-3}\text{ mol/L}$ par dilution d'une solution mère $C_m = 1{,}0 \times 10^{-2}\text{ mol/L}$. Décrire brièvement les étapes clés et le matériel nécessaire pour réaliser cette dilution.

---

### 💡 Indice

* **Question 1 :** Pensez à la formule de la concentration en masse $\gamma = \frac{m}{V}$, en veillant bien à ce que le volume soit exprimé en litres.
* **Question 3 :** Calculez d'abord la masse molaire moléculaire du ion nitrate $\mathrm{NO}_3^-$ en additionnant les masses molaires de ses atomes constitutifs. La relation utile est $\gamma = C \times M$.
* **Question 4 :** Lors d'une dilution, la quantité de matière de soluté se conserve : $n_{\text{mère}} = n_{\text{fille}}$, soit $C_m \times V_m = C_f \times V_f$.

---

### 📋 Correction détaillée (Pas à pas)

1. **Calcul de la concentration en masse :**
   La formule de la concentration en masse $\gamma$ est :
   $$\gamma = \frac{m}{V}$$
   * $m = 15\text{ mg} = 15 \times 10^{-3}\text{ g}$ (ou on peut garder directement en $\mathrm{mg}$ si on exprime le volume en $\mathrm{L}$).
   * $V = 250\text{ mL} = 0{,}250\text{ L}$.
   
   Application numérique en $\mathrm{mg/L}$ :
   $$\gamma = \frac{15\text{ mg}}{0{,}250\text{ L}} = 60\text{ mg/L}$$
   La concentration en masse des nitrates dans l'eau est de $60\text{ mg/L}$.

2. **Conformité sanitaire :**
   La concentration trouvée est $\gamma = 60\text{ mg/L}$. La limite maximale autorisée pour l'eau potable est de $50\text{ mg/L}$. 
   Puisque $60 > 50$, **l'eau de ce puits n'est pas conforme** aux normes de potabilité et ne doit pas être consommée sans traitement préalable.

3. **Calcul de la concentration molaire :**
   * Tout d'abord, calculons la masse molaire $M$ de l'ion nitrate $\mathrm{NO}_3^-$ :
     $$M(\mathrm{NO}_3^-) = M(\mathrm{N}) + 3 \times M(\mathrm{O})$$
     $$M(\mathrm{NO}_3^-) = 14{,}0 + 3 \times 16{,}0 = 14{,}0 + 48{,}0 = 62{,}0\text{ g/mol}$$
   
   * La relation entre la concentration en masse $\gamma$ (en $\mathrm{g/L}$) et la concentration molaire $C$ (en $\mathrm{mol/L}$) est :
     $$\gamma = C \times M \implies C = \frac{\gamma}{M}$$
   
   * Convertissons $\gamma$ en $\mathrm{g/L}$ : $\gamma = 60\text{ mg/L} = 60 \times 10^{-3}\text{ g/L} = 0{,}060\text{ g/L}$.
   * Application numérique :
     $$C = \frac{0{,}060}{62{,}0} \approx 9{,}68 \times 10^{-4}\text{ mol/L}$$

4. **Protocole expérimental de dilution :**
   * *Calcul du volume de solution mère à prélever ($V_m$) :*
     Au cours d'une dilution, la quantité de matière se conserve :
     $$C_m \times V_m = C_f \times V_f \implies V_m = \frac{C_f \times V_f}{C_m}$$
     $$V_m = \frac{1{,}0 \times 10^{-3} \times 100}{1{,}0 \times 10^{-2}} = 10\text{ mL}$$
   
   * *Matériel nécessaire :*
     * Une pipette jaugée de $10\text{ mL}$ (surmontée d'une propipette).
     * Une fiole jaugée de $100\text{ mL}$.
     * Un bécher contenant la solution mère.
     * De l'eau distillée.
   
   * *Étapes du protocole :*
     1. Prélever précisément $10\text{ mL}$ de la solution mère à l'aide de la pipette jaugée.
     2. Verser ce prélèvement dans la fiole jaugée de $100\text{ mL}$ propre et rincée à l'eau distillée.
     3. Ajouter de l'eau distillée aux trois quarts, agiter pour homogénéiser, puis ajuster le trait de jauge avec de l'eau distillée en utilisant une pipette simple.
     4. Boucher et agiter de nouveau pour obtenir une solution homogène.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
