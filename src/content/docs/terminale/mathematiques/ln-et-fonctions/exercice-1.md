---
title: "Exercice 1 : Calcul de temps de demi-vie et datation"
description: "Application pratique du chapitre Fonction logarithme népérien"
---

### 🌐 Contexte & Données scientifiques

La datation par le radiocarbone (carbone 14, noté $^{14}\text{C}$), développée par Willard Libby à la fin des années 1940, repose sur la désintégration radioactive spontanée de cet isotope instable présent dans les tissus organiques. 

Tant qu'un organisme est vivant, les échanges constants avec l'environnement (photosynthèse, respiration, alimentation) maintiennent la proportion de $^{14}\text{C}$ par rapport au carbone stable ($^{12}\text{C}$) à un niveau sensiblement constant. À sa mort, ces échanges cessent ($t = 0$), et le stock de $^{14}\text{C}$ décroît selon la loi de décroissance radioactive :
$$A(t) = A_0 \text{e}^{-\lambda t}$$
où :
- $t$ désigne le temps écoulé depuis la mort de l'organisme (exprimé en années, $\text{ans}$),
- $A(t)$ est l'activité radioactive à l'instant $t$ (exprimée en désintégrations par minute et par gramme de carbone, ou en $\text{Bq}\cdot\text{g}^{-1}$),
- $A_0$ est l'activité initiale de référence à la mort de l'organisme,
- $\lambda$ est la constante radioactive de désintégration (en $\text{an}^{-1}$), propre à l'isotope.

**Données du problème :**
- La période radioactive (ou demi-vie) du carbone 14 est notée $T_{1/2}$. La valeur conventionnelle de Cambridge est fixée à $T_{1/2} = 5730 \text{ ans}$.
- L'activité massique de référence d'un échantillon contemporain non pollué est estimée à $A_0 = 13{,}6 \text{ Bq}\cdot\text{kg}^{-1}$.

*Remarque épistémologique :* Ce modèle standard suppose que l'activité initiale $A_0$ a toujours été constante dans l'histoire terrestre. En réalité, les variations du champ magnétique terrestre et de l'activité solaire font fluctuer la production atmosphérique de $^{14}\text{C}$. Les âges ainsi calculés sont dits « âges radiocarbone conventionnels » et doivent être corrigés par dendrochronologie (courbes de calibration telles que *IntCal*).

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Constante radioactive et demi-vie :**
   Définir la demi-vie $T_{1/2}$ comme le temps au bout duquel $A(T_{1/2}) = \frac{A_0}{2}$. 
   Démontrer rigoureusement la relation $\lambda = \dfrac{\ln(2)}{T_{1/2}}$, puis donner la valeur approchée de $\lambda$ arrondie à $10^{-7} \text{ an}^{-1}$.

2. **Expression du temps de datation :**
   À l'aide des propriétés algébriques de la fonction logarithme népérien, exprimer le temps $t$ en fonction de $A(t)$, $A_0$ et $\lambda$. 
   Montrer que l'on peut également écrire cette relation sous la forme :
   $$t = \frac{T_{1/2} \cdot \ln\left(\frac{A_0}{A(t)}\right)}{\ln(2)}$$

3. **Application archéologique :**
   Lors de fouilles archéologiques dans une grotte, un fragment de charbon de bois issu d'un ancien foyer est prélevé. La spectrométrie de masse par accélérateur (SMA) mesure une activité résiduelle de $A(t) = 2{,}42 \text{ Bq}\cdot\text{kg}^{-1}$.
   Déterminer l'âge radiocarbone conventionnel de ce charbon de bois (arrondi à la décennie la plus proche).

4. **Analyse de sensibilité et limites méthodologiques :**
   a) La mesure de l'activité résiduelle comporte une incertitude instrumentale : $A(t) = 2{,}42 \pm 0{,}10 \text{ Bq}\cdot\text{kg}^{-1}$. Calculer l'encadrement de l'âge obtenu en tenant compte de cette incertitude de mesure.
   
   b) Pourquoi la méthode de datation au carbone 14 devient-elle inopérante pour des objets organiques supposés vieux de plus de $50\,000 \text{ ans}$ ? Justifier la réponse par un calcul de proportion résiduelle $\frac{A(t)}{A_0}$.

---

### 💡 Indice de méthode

* Pour la question 1, appliquer la fonction $\ln$ de part et d'autre de l'égalité obtenue en posant $A(T_{1/2}) = \frac{A_0}{2}$. Rappel : pour tout réel $X > 0$, $\ln(\text{e}^X) = X$ et $\ln\left(\frac{1}{b}\right) = -\ln(b)$.
* Pour la question 2, isoler le terme exponentiel avant d'appliquer le logarithme népérien. Utiliser la propriété $\ln\left(\frac{a}{b}\right) = -\ln\left(\frac{b}{a}\right)$.
* Pour la question 4a, observer le sens de variation de la fonction $x \mapsto \ln\left(\frac{A_0}{x}\right)$ sur $]0 ; +\infty[$ pour déterminer les bornes minimale et maximale de l'intervalle de temps.

---

### 📋 Correction détaillée pas à pas

#### Question 1 : Relation entre $\lambda$ et $T_{1/2}$

Par définition de la demi-vie $T_{1/2}$, l'activité est divisée par deux au bout de ce temps :
$$A(T_{1/2}) = \frac{A_0}{2}$$

En injectant la loi de décroissance exponentielle :
$$A_0 \text{e}^{-\lambda T_{1/2}} = \frac{A_0}{2}$$

Puisque $A_0 > 0$, on peut diviser chaque membre par $A_0$ :
$$\text{e}^{-\lambda T_{1/2}} = \frac{1}{2}$$

La fonction logarithme népérien $\ln$ est strictement croissante sur $]0 ; +\infty[$, on peut donc appliquer $\ln$ à chaque membre sans changer l'égalité :
$$\ln\left(\text{e}^{-\lambda T_{1/2}}\right) = \ln\left(\frac{1}{2}\right)$$

Par composition des fonctions inversement associées et propriétés du logarithme ($\ln(\text{e}^x) = x$ et $\ln(1/b) = -\ln(b)$) :
$$-\lambda T_{1/2} = -\ln(2) \iff \lambda T_{1/2} = \ln(2)$$

D'où :
$$\lambda = \frac{\ln(2)}{T_{1/2}}$$

**Application numérique :**
$$\lambda = \frac{\ln(2)}{5730} \approx 1{,}20968 \times 10^{-4} \text{ an}^{-1}$$
Arrondi à $10^{-7} \text{ an}^{-1}$, on obtient :
$$\lambda \approx 1{,}210 \times 10^{-4} \text{ an}^{-1} = 0{,}0001210 \text{ an}^{-1}$$

---

#### Question 2 : Expression de $t$

Partons de la relation $A(t) = A_0 \text{e}^{-\lambda t}$.
Puisque $A_0 \neq 0$ :
$$\frac{A(t)}{A_0} = \text{e}^{-\lambda t}$$

En appliquant le logarithme népérien de part et d'autre :
$$\ln\left(\frac{A(t)}{A_0}\right) = -\lambda t$$

On en déduit l'expression temporelle :
$$t = -\frac{1}{\lambda} \ln\left(\frac{A(t)}{A_0}\right)$$

En exploitant la propriété $-\ln(x) = \ln\left(\frac{1}{x}\right)$ pour $x > 0$ :
$$t = \frac{1}{\lambda} \ln\left(\frac{A_0}{A(t)}\right)$$

En remplaçant $\lambda$ par son expression $\dfrac{\ln(2)}{T_{1/2}}$ établie à la question 1 :
$$t = \frac{1}{\frac{\ln(2)}{T_{1/2}}} \ln\left(\frac{A_0}{A(t)}\right) = \frac{T_{1/2} \cdot \ln\left(\frac{A_0}{A(t)}\right)}{\ln(2)}$$

---

#### Question 3 : Calcul de l'âge conventionnel du charbon

On applique la formule avec :
- $T_{1/2} = 5730 \text{ ans}$,
- $A_0 = 13{,}6 \text{ Bq}\cdot\text{kg}^{-1}$,
- $A(t) = 2{,}42 \text{ Bq}\cdot\text{kg}^{-1}$.

$$t = \frac{5730 \cdot \ln\left(\frac{13{,}6}{2{,}42}\right)}{\ln(2)}$$

Calculons le rapport des activités :
$$\frac{13{,}6}{2{,}42} \approx 5{,}6198$$

Puis le logarithme népérien :
$$\ln(5{,}6198) \approx 1{,}7263$$

On en déduit la valeur de $t$ :
$$t \approx \frac{5730 \times 1{,}7263}{0{,}69315} \approx 14\,270 \text{ ans}$$

L'âge radiocarbone conventionnel du fragment est d'environ **$14\,270 \text{ ans}$** (ce qui situe l'occupation humaine au Paléolithique supérieur, vers le Magdalénien supérieur).

---

#### Question 4 : Analyse de sensibilité et limites méthodologiques

**a) Impact de l'incertitude de mesure :**

La fonction $f : x \mapsto \ln\left(\frac{A_0}{x}\right) = \ln(A_0) - \ln(x)$ est strictement décroissante sur $]0 ; +\infty[$.
Par conséquent :
- La borne inférieure de l'âge, notée $t_{\min}$, correspond à la borne supérieure de l'activité $A_{\max} = 2{,}42 + 0{,}10 = 2{,}52 \text{ Bq}\cdot\text{kg}^{-1}$.
- La borne supérieure de l'âge, notée $t_{\max}$, correspond à la borne inférieure de l'activité $A_{\min} = 2{,}42 - 0{,}10 = 2{,}32 \text{ Bq}\cdot\text{kg}^{-1}$.

Calculons ces deux bornes :
$$t_{\min} = \frac{5730 \cdot \ln\left(\frac{13{,}6}{2{,}52}\right)}{\ln(2)} \approx \frac{5730 \times 1{,}6858}{0{,}69315} \approx 13\,934 \text{ ans}$$

$$t_{\max} = \frac{5730 \cdot \ln\left(\frac{13{,}6}{2{,}32}\right)}{\ln(2)} \approx \frac{5730 \times 1{,}7685}{0{,}69315} \approx 14\,618 \text{ ans}$$

L'encadrement de l'âge, arrondi à la dizaine d'années, est donc :
$$13\,930 \text{ ans} \leqslant t \leqslant 14\,620 \text{ ans}$$
Une incertitude instrumentale d'environ $\pm 4{,}1\%$ sur l'activité résiduelle engendre une incertitude temporelle absolue d'environ $\pm 345 \text{ ans}$.

**b) Limite physique de détection au-delà de $50\,000 \text{ ans}$ :**

Calculons le rapport résiduel $\frac{A(t)}{A_0}$ pour $t = 50\,000 \text{ ans}$ :
$$\frac{A(50\,000)}{A_0} = \text{e}^{-\lambda \times 50\,000} = \text{e}^{-\frac{\ln(2)}{5730} \times 50\,000} = \text{e}^{-8{,}726 \times \ln(2)} = 2^{-\frac{50\,000}{5730}} \approx 2^{-8{,}726} \approx 0{,}00236$$

Soit moins de **$0{,}24\%$** de l'activité initiale (plus de $99{,}76\%$ des atomes de $^{14}\text{C}$ se sont désintégrés).

*Conclusion scientifique :* 
À ce niveau de résidu :
1. Le signal radioactif devient indiscernable du bruit de fond instrumental et du rayonnement cosmique ambiant.
2. Une pollution minime par du carbone moderne (quelques microgrammes lors du prélèvement ou de la préparation chimique) fausserait drastiquement le calcul, rajeunissant artificiellement l'échantillon de plusieurs milliers d'années. 
C'est pourquoi, au-delà d'environ $50\,000 \text{ ans}$ (soit 8 à 9 demi-vies), la datation au $^{14}\text{C}$ n'est plus fiable et les géochronologues emploient d'autres méthodes (Uranium-Thorium, Potassium-Argon).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
