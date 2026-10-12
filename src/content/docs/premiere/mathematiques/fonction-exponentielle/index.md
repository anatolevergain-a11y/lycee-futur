---
title: "Cours : Fonction exponentielle"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

# Fiche de cours : La fonction exponentielle

## 📌 1. Notions clés & Définitions

En classe de première, l'étude de la croissance rapide et des phénomènes d'evolution proportionnelle conduit a generaliser la notion de suite geometrique vers le cas continu. C'est l'objet de la fonction exponentielle.

### Definition fondamentale
Il existe une unique fonction $f$ derivable sur $\mathbb{R}$ telle que $f' = f$ et $f(0) = 1$. Cette fonction est appelee **fonction exponentielle** et est notees $\exp$ ou, pour tout reel $x$, $e^x$.

### Consequences immediates de la definition
* Pour tout reel $x$, on a $\exp(x) > 0$. La fonction exponentielle ne s'annule jamais et est strictement positive sur $\mathbb{R}$.
* $\exp(0) = 1$ (ou $e^0 = 1$).
* Pour tout reel $x$, $e^x \neq 0$.

---

## 📐 2. Formules et Propriétés fondamentales

### Propriete algebrique fondamentale
La fonction exponentielle transforme les sommes en produits. Pour tous nombres reels $a$ et $b$ :
$$e^{a+b} = e^a \times e^b$$

### Consequences des proprietes algebriques
* Pour tout reel $a$ :
  $$e^{-a} = \frac{1}{e^a}$$
* Pour tous reels $a$ et $b$ :
  $$e^{a-b} = \frac{e^a}{e^b}$$
* Pour tout reel $a$ et pour tout entier relatif $n$ :
  $$(e^a)^n = e^{an}$$

### Sens de variation et limites
* **Derivation** : Pour tout reel $x$, $(\exp)'(x) = \exp(x)$. Comme $e^x > 0$ pour tout $x$, la fonction exponentielle est **strictement croissante** sur $\mathbb{R}$.
* **Limites fondamentales** :
  $$\lim_{x \to +\infty} e^x = +\infty$$
  $$\lim_{x \to -\infty} e^x = 0$$

---

## 💡 3. Exemple d'application résolu

**Énoncé :**
1. Resoudre dans $\mathbb{R}$ l'equation : $e^{2x-1} = e^{3}$
2. Resoudre dans $\mathbb{R}$ l'inequation : $e^{x^2} \leqslant e^{4x - 3}$
3. Soit $f$ la fonction definie sur $\mathbb{R}$ par $f(x) = x \cdot e^x$. Calculer sa derivee $f'$.

**Correction :**

1. Par injectivité de la fonction exponentielle, l'equation $e^A = e^B$ equivaut a $A = B$.
   $$2x - 1 = 3 \iff 2x = 4 \iff x = 2$$
   L'ensemble des solutions est $S = \{2\}$.

2. Par croissance stricte de la fonction exponentielle, l'inequation $e^A \leqslant e^B$ equivaut a $A \leqslant B$.
   $$x^2 \leqslant 4x - 3 \iff x^2 - 4x + 3 \leqslant 0$$
   On calcule le discriminant du trinome $x^2 - 4x + 3$ :
   $$\Delta = (-4)^2 - 4(1)(3) = 16 - 12 = 4$$
   Les racines sont :
   $$x_1 = \frac{4 - 2}{2} = 1 \quad \text{et} \quad x_2 = \frac{4 + 2}{2} = 3$$
   Le trinome est du signe de $a$ ($a = 1 > 0$) a l'exterieur des racines, donc negatif ou nul entre les racines.
   L'ensemble des solutions est l'intervalle $S = [1, 3]$.

3. La fonction $f$ est un produit de la forme $u \times v$ avec $u(x) = x$ et $v(x) = e^x$.
   On a $u'(x) = 1$ et $v'(x) = e^x$.
   La formule de derivation d'un produit $(u \times v)' = u'v + uv'$ donne :
   $$f'(x) = 1 \times e^x + x \times e^x = (1 + x)e^x$$

---

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

* **Attention a l'expansions des sommes :** Il ne faut jamais confondre $e^{a+b}$ et $e^a + e^b$. Rappelons que $e^{a+b} = e^a \times e^b$, alors que $e^a + e^b$ ne se simplifie pas generalement.
* **Ne pas confondre signe et variation :** Pour tout reel $x$, $e^x > 0$ (la fonction est strictement positive). En revanche, sa derivee est egale a elle-meme, donc $e^x$ peut etre croissante ($e^x$ grandit lorsque $x$ grandit), mais elle ne tend pas vers $0$ en $+\infty$.
* **Justification rigoureuse :** Lors de la resolution d'equations ou d'inequations, pensez a mentionner explicitement que la fonction exponentielle est **strictement croissante** ou **strictement positive** pour justifier vos equivalences.
* **Erreurs de notation :** Veillez a bien ecrire l'argument en exposant de maniere lisible (par exemple, ecrire $e^{2x}$ et non $e^2x$).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
