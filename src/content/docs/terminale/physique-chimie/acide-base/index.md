---
title: "Cours : Transformations acide-base et pH"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

*   **Acide et base selon Bronsted :** 
    *   Un **acide** (notation générale $\text{AH}$) est une entité chimique susceptible de céder un ou plusieurs ions hydrogène $\text{H}^+.
    *   Une **base** (notation générale $\text{A}^-$) est une entité chimique susceptible de capter un ou plusieurs ions hydrogène $\text{H}^+.

*   **Couple acide-base :** 
    Un acide $\text{AH}$ et sa base conjuguée $\text{A}^-$ forment un couple acide-base noté $\text{AH/A}^-$. Ils sont reliés par la demi-équation acido-basique (ou équation de la réaction acido-basique) :
    $$\text{AH}_{(aq)} \rightleftarrows \text{A}^-_{(aq)} + \text{H}^+_{(aq)}$$

*   **Ampholyte (ou substance amphotère) :** 
    Espèce chimique qui peut se comporter soit comme un acide, soit comme une base selon le réactif auquel elle est confrontée. Exemple fondamental : la molécule d'eau $\text{H}_2\text{O}$ (qui appartient aux couples $\text{H}_3\text{O}^+/\text{H}_2\text{O}$ et $\text{H}_2\text{O}/\text{OH}^-$).

*   **Le pH (potentiel Hydrogène) :** 
    Grandeur sans dimension qui mesure l'acidité d'une solution aqueuse.

*   **Produit ionique de l'eau ($K_e$) :** 
    Constante d'équilibre associée à la réaction d'auto-protolyse de l'eau. À $25 \, ^\circ\text{C}$, $\text{pK}_e = 14$.

---

## 📐 2. Formules et Propriétés fondamentales

*   **Définition du pH :**
    Le pH d'une solution aqueuse est lié à la concentration molaire en ions oxonium $[\text{H}_3\text{O}^+]$ (exprimée en $\text{mol/L}$) par la relation :
    $$\text{pH} = -\log\left(\frac{[\text{H}_3\text{O}^+]}{c^\circ}\right)$$
    *(avec $c^\circ = 1 \text{ mol/L}$, souvent omis par simplification dans les expressions littérales).*
    
    *Formule inverse :*
    $$[\text{H}_3\text{O}^+] = 10^{-\text{pH}} \text{ mol/L}$$

*   **Échelle de pH (à $25 \, ^\circ\text{C}$) :**
    *   Solution acide : $\text{pH} < 7$ (soit $[\text{H}_3\text{O}^+] > 10^{-7} \text{ mol/L}$)
    *   Solution neutre : $\text{pH} = 7$ (soit $[\text{H}_3\text{O}^+] = 10^{-7} \text{ mol/L}$)
    *   Solution basique : $\text{pH} > 7$ (soit $[\text{H}_3\text{O}^+] < 10^{-7} \text{ mol/L}$)

*   **Produit ionique de l'eau ($K_e$) :**
    Dans toute solution aqueuse, le produit des concentrations effectives en ions oxonium et hydroxyde est constant à température fixée :
    $$K_e = [\text{H}_3\text{O}^+] \cdot [\text{OH}^-]$$
    À $25 \, ^\circ\text{C}$ : $K_e = 10^{-14}$.
    En appliquant la fonction $-\log$, on obtient la relation :
    $$\text{pH} + \text{pOH} = \text{pK}_e = 14 \quad (\text{à } 25 \, ^\circ\text{C})$$

*   **Constante d'acidité ($K_a$) et $\text{pK}_a$ :**
    Pour un couple $\text{AH/A}^-$ en solution aqueuse, la réaction avec l'eau est caractérisée par sa constante d'équilibre $K_a$ :
    $$K_a = \frac{[\text{A}^-]_{\text{eq}} \cdot [\text{H}_3\text{O}^+]_{\text{eq}}}{[\text{AH]_{\text{eq}} \cdot c^\circ}$$
    On définit le $\text{pK}_a$ par :
    $$\text{pK}_a = -\log(K_a) \iff K_a = 10^{-\text{pK}_a}$$

*   **Relation d'Henderson-Hasselbalch :**
    $$\text{pH} = \text{pK}_a + \log\left(\frac{[\text{A}^-]}{[\text{AH}]}\right)$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
On dispose d'une solution aqueuse d'acide chlorhydrique ($\text{HCl}$) de concentration molaire $c = 2{,}0 \times 10^{-3} \text{ mol/L}$. Le chlorure d'hydrogène est un acide fort, totalement dissocié dans l'eau.
1. Écrire l'équation de la réaction de mise en solution de $\text{HCl}$ dans l'eau.
2. Déterminer la concentration en ions oxonium $[\text{H}_3\text{O}^+]$ dans la solution.
3. Calculer le pH de cette solution.

**Résolution :**
1. L'acide chlorhydrique réagit totalement avec l'eau (réaction totale, notée avec une flèche simple $\rightarrow$) :
   $$\text{HCl}_{(g)} + \text{H}_2\text{O}_{(l)} \rightarrow \text{H}_3\text{O}^+_{(aq)} + \text{Cl}^-_{(aq)}$$

2. La transformation étant totale et $\text{HCl}$ étant le réactif limitant, la concentration finale en ions oxonium est égale à la concentration initiale en soluté apporté $c$ :
   $$[\text{H}_3\text{O}^+] = c = 2{,}0 \times 10^{-3} \text{ mol/L}$$

3. On applique la définition du pH :
   $$\text{pH} = -\log\left(\frac{[\text{H}_3\text{O}^+]}{c^\circ}\right)$$
   $$\text{pH} = -\log(2{,}0 \times 10^{-3}) \approx 2{,}7$$
   Le pH de la solution est donc de $2{,}7$ (le résultat est donné avec deux chiffres significatifs, en accord avec les deux chiffres significatifs de la concentration $2{,}0 \times 10^{-3}$).

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

*   **Attention aux chiffres significatifs pour le pH :** 
    Le nombre de chiffres significatifs de la concentration $[\text{H}_3\text{O}^+]$ (ex: $2{,}0 \times 10^{-3}$, soit **2** chiffres significatifs) correspond au nombre de chiffres situés **après la virgule** pour la valeur du pH ($\text{pH} = 2{,}\mathbf{70}$ ou $2{,}\mathbf{7}$). Ne pas respecter cette règle est une erreur fréquemment pénalisée aux épreuves du Baccalauréat.

*   **Confondre avancement et équilibre :** 
    *   Un **acide fort** (comme $\text{HCl}$) réagit *totalement* avec l'eau ($\rightarrow$).
    *   Un **acide faible** (comme l'acide éthanoïque $\text{CH}_3\text{COOH}$) réagit *partiellement* avec l'eau ($\rightleftarrows$). N'utilisez pas de $K_a$ ou de $\text{pK}_a$ pour un acide fort !

*   **Oubli de l'unité ou des dimensions :** 
    Dans les expressions de type $\log$, l'argument doit impérativement être sans dimension (divisé par $c^\circ = 1 \text{ mol/L}$). De même, n'oubliez pas d'indiquer l'unité ($\text{mol/L}$) pour les concentrations.

*   **Température et $K_e$ :** 
    Gardez à l'esprit que la valeur $\text{pK}_e = 14$ (et donc la neutralité à $\text{pH} = 7$) n'est strictement valable qu'à $25 \, ^\circ\text{C}$. Si la température change, $K_e$ change, et la valeur du pH de neutralité est modifiée (même si la solution reste chimiquement neutre car $[\text{H}_3\text{O}^+] = [\text{OH}^-]$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
