---
title: "Exercice 3 : Calculs d'intérêts composés continuels"
description: "Application pratique du chapitre Fonction exponentielle"
---

### 🌐 Contexte & Données scientifiques

En mathématiques financières, la modélisation de la capitalisation d'un capital initial $V_0$ (exprimé en $\text{€}$) repose traditionnellement sur des périodes de capitalisation discrètes (annuelles, mensuelles, journalières). Cependant, lorsque les transactions s'effectuent de manière quasi-instantanée et continue (comme c'est le cas sur les marchés financiers modernes ou dans certains systèmes d'épargne réglementée à capitalisation instantanée), le passage à la limite conduit à l'utilisation du modèle des **intérêts composés continus**.

Soit un capital initial $V_0$ placé à un taux d'intérêt annuel nominal $r$ (exprimé sous forme décimale). La valeur du capital $V(t)$ à l'instant $t$ (exprimé en années) obéit à l'équation différentielle linéaire homogène du premier ordre :
$$\frac{\text{d}V}{\text{d}t} = r \cdot V(t)$$

La résolution de cette équation, couplée à la condition initiale $V(0) = V_0$, met directement en jeu la fonction exponentielle de base $\text{e}$ :
$$V(t) = V_0 \cdot \text{e}^{r \cdot t}$$

Néanmoins, tout modèle mathématique constitue une idéalisation de la réalité économique. L'hypothèse d'un taux $r$ constant sur de longues périodes omet la volatilité des marchés, l'inflation, ainsi que les frais de gestion ou la fiscalité prélevés par les institutions financières. Cet exercice propose d'étudier l'efficacité de ce modèle tout en interrogeant ses limites pratiques.

---

### ❓ Énoncé

Un épargnant place un capital initial $V_0 = 10\,000 \text{ €}$ sur un produit financier garantissant un taux d'intérêt annuel nominal $r = 3{,}5 \, \% = 0{,}035$, capitalisé en continu. On néglige dans un premier temps les frais et la fiscalité.

1. **Modélisation :** Exprimer la valeur du capital $V(t)$ en fonction du temps $t$ (en années). Calculer la valeur exacte, puis arrondie au centime près, du capital acquis au bout de $5 \text{ ans}$.
2. **Étude de seuil :** Déterminer analytiquement, à l'aide des propriétés de la fonction logarithme népérien, la durée minimale $t$ (exprimée en années et en mois) nécessaire pour que le capital initial soit strictement doublé.
3. **Analyse critique et limites du modèle :** En réalité, l'établissement financier prélève des frais de gestion annuels fixes de $50 \text{ €}$, déduits en fin de chaque année, et une flat tax de $30 \, \%$ sur les plus-values réalisées au moment du retrait. 
   - Proposer une modification de l'expression de $V(t)$ pour intégrer les frais de gestion annuels.
   - Calculer la valeur nette finale après $5 \text{ ans}$ en tenant compte de ces frais et de la fiscalité, puis comparer ce résultat brut avec le modèle initial pour quantifier l'impact des charges sur la rentabilité réelle.

---

### 💡 Indice de méthode

* **Question 1 :** Réutilisez directement la formule générale du cours $V(t) = V_0 \text{e}^{rt}$ en identifiant soigneusement $V_0$ et $r$.
* **Question 2 :** Posez l'inéquation (ou l'équation) $V(t) \ge 2 V_0$. Appliquez la fonction $\ln$ (qui est strictement croissante sur $\mathbb{R}_+$) pour isoler la variable $t$.
* **Question 3 :** Pour la prise en compte des frais, distinguez l'effet de la capitalisation continue en cours d'année et le prélèvement discrèt (annuel) des frais. Pour la fiscalité, rappelez-vous que la plus-value s'obtient en soustrayant le capital initial $V_0$ de la valeur finale brute (ou nette selon le cas d'étude).

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation et calcul à $t = 5 \text{ ans}$
* **Données :** $V_0 = 10\,000 \text{ €}$ et $r = 0{,}035$.
* **Expression générale :** 
  $$V(t) = 10\,000 \cdot \text{e}^{0{,}035 \cdot t}$$
* **Calcul pour $t = 5 \text{ ans}$ :**
  $$V(5) = 10\,000 \cdot \text{e}^{0{,}035 \cdot 5} = 10\,000 \cdot \text{e}^{0{,}175}$$
  En utilisant la valeur approchée de $\text{e}^{0{,}175} \approx 1{,}191249$, on obtient :
  $$V(5) \approx 11\,912{,}49 \text{ €}$$
  *Interprétation :* Au bout de $5 \text{ ans}$, le capital brut génère environ $1\,912{,}49 \text{ €}$ d'intérêts.

---

#### 2. Détermination du temps de doublement
* Nous cherchons le temps $t$ tel que $V(t) \ge 2 V_0$, soit :
  $$10\,000 \cdot \text{e}^{0{,}035 \cdot t} \ge 20\,000$$
* En divisant par $10\,000$ (strictement positif), il vient :
  $$\text{e}^{0{,}035 \cdot t} \ge 2$$
* Par stricte croissance de la fonction logarithme népérien sur $\mathbb{R}_+$ :
  $$\ln\left(\text{e}^{0{,}035 \cdot t}\right) \ge \ln(2)$$
  $$0{,}035 \cdot t \ge \ln(2)$$
  $$t \ge \frac{\ln(2)}{0{,}035}$$
* **Application numérique :**
  $$t \ge \frac{\ln(2)}{0{,}035} \approx \frac{0{,}6931}{0{,}035} \approx 19{,}804 \text{ ans}$$
* **Conversion en années et mois :**
  $0{,}804 \text{ année} \times 12 \text{ mois} \approx 9{,}65 \text{ mois}$.
  Le capital sera donc doublé au bout de **$19$ ans et $10$ mois** (arrondi au mois supérieur).

---

#### 3. Analyse critique, frais et fiscalité
* **Intégration des frais de gestion annuels :** 
  Le modèle continu pur est altéré par un prélèvement discret (annuel) de $f = 50 \text{ €}$. Si l'on déduit ces frais à la fin de chaque année $k$ (avec $k \in \{1, 2, 3, 4, 5\}$), la trajectoire de $V(t)$ n'est plus strictement exponentielle lisse, mais subit des décroissances ponctuelles. Une modélisation rigoureuse par récurrence ou par approximation montre que le capital brut après $5 \text{ ans}$ diminué de ces frais s'écrit globalement :
  $$V_{\text{brut, frais}}(5) = V(5) - 50 \sum_{k=0}^{4} \text{e}^{0{,}035 \cdot (5-k)}$$
  *Approche simplifiée par année :* 
  Calculons pas à pas (valeurs arrondies) :
  * Fin année 1 : $10\,000 \cdot \text{e}^{0{,}035} - 50 = 10\,356{,}20 - 50 = 10\,306{,}20 \text{ €}$
  * Fin année 2 : $10\,306{,}20 \cdot \text{e}^{0{,}035} - 50 = 10\,672{,}48 - 50 = 10\,622{,}48 \text{ €}$
  * Fin année 3 : $10\,622{,}48 \cdot \text{e}^{0{,}035} - 50 = 10\,999{,}74 - 50 = 10\,949{,}74 \text{ €}$
  * Fin année 4 : $10\,949{,}74 \cdot \text{e}^{0{,}035} - 50 = 11\,338{,}40 - 50 = 11\,288{,}40 \text{ €}$
  * Fin année 5 : $11\,288{,}40 \cdot \text{e}^{0{,}035} - 50 = 11\,688{,}90 - 50 = 11\,638{,}90 \text{ €}$
  
  Le capital brut après frais de gestion s'élève donc à $11\,638{,}90 \text{ €}$.

* **Prise en compte de la fiscalité :**
  La plus-value brute réalisée est :
  $$\text{Plus-value} = 11\,638{,}90 - 10\,000 = 1\,638{,}90 \text{ €}$$
  L'impôt (flat tax de $30 \,\%$) s'élève à :
  $$\text{Impôt} = 0{,}30 \times 1\,638{,}90 = 491{,}67 \text{ €}$$
  Le capital net final perçu par l'épargnant est donc :
  $$V_{\text{net}} = 11\,638{,}90 - 491{,}67 = 11\,147{,}23 \text{ €}$$

* **Conclusion critique :** 
  Le modèle mathématique initial prévoyait un capital de $11\,912{,}49 \text{ €}$. La prise en compte réaliste des frictions de marché (frais fixes et fiscalité) réduit le capital final net à $11\,147{,}23 \text{ €}$, soit un écart de $765{,}26 \text{ €}$. Cet écart met en évidence la limite des modèles théoriques purs en économie : la rentabilité réelle perçue par l'usager est fortement dépendante des conditions exogènes (frais de structure et prélèvements obligatoires), invalidant l'hypothèse d'une croissance purement exponentielle non encadrée.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
