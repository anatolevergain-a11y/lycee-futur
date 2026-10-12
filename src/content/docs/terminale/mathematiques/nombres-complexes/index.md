---
title: "Cours : Nombres complexes (Option Maths Expertes)"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

L'extension de l'ensemble des nombres réels $\mathbb{R}$ vers l'ensemble des nombres complexes $\mathbb{C}$ est motivée par la nécessité de résoudre des équations polynomiales qui n'admettent pas de solutions réelles, telles que $x^2 + 1 = 0$.

* **Nombre complexe :** Un nombre complexe $z$ est un nombre s'écrivant sous la forme algébrique :
  $$z = x + iy$$
  où $x$ et $y$ sont des nombres réels, et $i$ est un nombre imaginaire tel que $i^2 = -1$.
* **Partie réelle et partie imaginaire :** Pour $z = x + iy$ :
  * Le nombre réel $x$ est la partie réelle de $z$, notée $\text{Re}(z)$.
  * Le nombre réel $y$ est la partie imaginaire de $z$, notée $\text{Im}(z)$.
* **Conjugué :** Le conjugué d'un nombre complexe $z = x + iy$ est le nombre complexe noté $\overline{z}$ défini par :
  $$\overline{z} = x - iy$$
* **Module :** Le module d'un nombre complexe $z = x + iy$ est le nombre réel positif, noté $|z|$, défini par :
  $$|z| = \sqrt{x^2 + y^2}$$
* **Argument :** Pour tout nombre complexe non nul $z = x + iy$, un argument de $z$, noté $\arg(z)$, est une mesure (en radians) de l'angle orienté $(\vec{u}, \overrightarrow{OM})$ où $M$ est le point d'affixe $z$ dans un repère orthonormal direct. On a $\arg(z) \equiv \theta \pmod{2\pi}$.
* **Forme exponentielle :** Tout nombre complexe non nul $z$ de module $r$ et d'argument $\theta$ s'écrit sous forme exponentielle :
  $$z = re^{i\theta}$$

---

## 📐 2. Formules et Propriétés fondamentales

### Propriétés algébriques du conjugué et du module
Soient $z$ et $z'$ deux nombres complexes.
* $\overline{z + z'} = \overline{z} + \overline{z'}$ et $\overline{z \times z'} = \overline{z} \times \overline{z'}$
* $z + \overline{z} = 2\text{Re}(z)$ et $z - \overline{z} = 2i\text{Im}(z)$
* $z\overline{z} = |z|^2$
* $|zz'| = |z||z'|$
* $|z + z'| \le |z| + |z'|$ (inégalité triangulaire)

### Forme trigonométrique et exponentielle
Soient $\theta$ et $\theta'$ deux réels.
* $e^{i\theta} = \cos(\theta) + i\sin(\theta)$
* $e^{i\theta} \times e^{i\theta'} = e^{i(\theta + \theta')}$
* $\frac{1}{e^{i\theta}} = e^{-i\theta}$ et $\frac{e^{i\theta}}{e^{i\theta'}} = e^{i(\theta - \theta')}$

### Formules d'Euler et de Moivre
Pour tout réel $\theta$ et tout entier relatif $n$ :
* **Formules d'Euler :** 
  $$\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2} \quad \text{et} \quad \sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$
* **Formule de Moivre :** 
  $$\left(e^{i\theta}\right)^n = e^{in\theta} \implies (\cos(\theta) + i\sin(\theta))^n = \cos(n\theta) + i\sin(n\theta)$$

### Racine carrée et équations du second degré dans $\mathbb{C}$
* Toute équation du second degré $az^2 + bz + c = 0$ avec $(a, b, c) \in \mathbb{C}^* \times \mathbb{C} \times \mathbb{C}$ possède toujours des solutions dans $\mathbb{C}$.
* Le discriminant $\Delta = b^2 - 4ac$ permet de déterminer les solutions :
  * Si $\Delta \neq 0$, il y a deux solutions distinctes : $z_1 = \frac{-b - \delta}{2a}$ et $z_2 = \frac{-b + \delta}{2a}$ où $\delta$ est une racine carrée complexe de $\Delta$.

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
1. Mettre le nombre complexe $Z = 1 + i$ sous forme exponentielle.
2. En déduire la forme exponentielle de $Z^4$, puis calculer $(1 + i)^4$ sous forme algébrique.
3. Retrouver ainsi la valeur exacte de $\cos\left(\pi\right)$ et $\sin\left(\pi\right)$ induites, ou résoudre une application classique de linéarisation. *(Redirection vers une application de calcul direct)*.

**Résolution :**
1. **Module et argument de $Z$ :**
   * Le module de $Z = 1 + i$ est :
     $$|Z| = \sqrt{1^2 + 1^2} = \sqrt{2}$$
   * On factorise par le module pour trouver l'argument :
     $$Z = \sqrt{2}\left(\frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}}\right) = \sqrt{2}\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right)$$
   * On reconnait $\cos\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$ et $\sin\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$.
   * Ainsi, la forme exponentielle est :
     $$Z = \sqrt{2}e^{i\frac{\pi}{4}}$$

2. **Calcul de $Z^4$ :**
   * Par la formule de Moivre ou les propriétés de l'exponentielle :
     $$Z^4 = \left(\sqrt{2}e^{i\frac{\pi}{4}}\right)^4 = (\sqrt{2})^4 \left(e^{i\frac{\pi}{4}}\right)^4 = 4 e^{i\frac{4\pi}{4}} = 4e^{i\pi}$$
   * Sous forme algébrique, en utilisant $e^{i\pi} = -1$ :
     $$Z^4 = 4(-1) = -4$$
   * D'autre part, en développant $(1+i)^4$ par le binôme de Newton :
     $$(1+i)^4 = 1^4 + 4(1)^3(i) + 6(1)^2(i^2) + 4(1)(i^3) + i^4$$
     $$(1+i)^4 = 1 + 4i - 6 - 4i + 1 = -4$$
   * Le résultat est cohérent.

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention à la détermination principale de l'argument :** Lorsque vous calculez un argument, assurez-vous qu'il appartient bien à l'intervalle de référence $\left]-\pi, \pi\right]$ (sauf mention explicite contraire). Pensez à vérifier le quadrant du point dans le plan complexe.
* **Erreur fréquente avec le module d'une somme :** Retenez bien que $|z + z'| \neq |z| + |z'|$ en general (c'est une inégalité triangulaire). N'appliquez jamais la distributivité du module sur l'addition.
* **Radical dans le discriminant :** Lors de la résolution d'une équation du second degré à coefficients réels dont le discriminant $\Delta$ est strictement négatif, les solutions complexes conjuguées sont de la forme $z = \frac{-b \pm i\sqrt{|\Delta|}}{2a}$. Ne confondez pas avec le cas général à coefficients complexes où il faut déterminer une racine carrée complexe $\delta$ telle que $\delta^2 = \Delta$.
* **Rédaction rigoureuse :** En spécialité Maths Expertes, justifiez toujours l'existence d'un argument en précisant les valeurs du cosinus et du sinus avant d'écrire la forme trigonométrique ou exponentielle.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
