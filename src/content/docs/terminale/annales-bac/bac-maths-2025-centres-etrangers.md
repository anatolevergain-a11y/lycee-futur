---
title: "Bac Maths 2025 - Centres Étrangers"
description: "Sujet officiel type Bac Mathématiques entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel de l'Épreuve

**ÉPREUVE ECRITE DE MATHEMATIQUES**  
**Série :** Baccalaureat General  
**Session :** 2025 (Centres Etrangers)  
**Duree de l'epreuve :** 4 heures  
**Coefficient :** 16  
*L'utilisation de la calculatrice an mode examen est autorisee.*  

---

### Exercice 1 : QCM (5 points)
*Cet exercice est un questionnaire a choix multiples. Pour chacune des questions suivantes, une seule des quatre reponses proposees est exacte. Une reponse exacte rapporte $0{,}5$ point. Une reponse fausse, une absence de reponse ou une reponse multiple ne rapporte ni n'enleve de point. Indiquer sur la copie le numero de la question et la lettre correspondant a la reponse.*

**1.** Soit $f$ une fonction definie et derivable sur $\mathbb{R}$. On note $C_f$ sa courbe representative dans un repere orthonormal. On donne le tableau de signes de la derivee seconde $f''$ de la fonction $f$ :
* Pour $x \in ]-\infty, -1[$, $f''(x) > 0$.
* Pour $x \in ]-1, 3[$, $f''(x) < 0$.
* Pour $x \in ]3, +\infty[$, $f''(x) > 0$.

Que peut-on affirmer pour la courbe $C_f$ ?
* **A.** $C_f$ est convexe sur $\mathbb{R}$.
* **B.** $C_f$ admet exactement un point d'inflexion.
* **C.** $C_f$ admet exactement deux points d'inflexion, d'abscisses respectives $-1$ et $3$.
* **D.** $C_f$ est concave sur $[-1, 3]$.

**2.** Soit $(u_n)$ la suite definie par $u_0 = 2$ et, pour tout entier naturel $n$, $u_{n+1} = \frac{1}{2}u_n + 3$.  
La suite $(u_n)$ est :
* **A.** Majoree par $6$.
* **B.** Minoree par $6$.
* **C.** Croissante.
* **D.** Geometrique.

**3.** La limite en $+\infty$ de la fonction $f$ définie sur $]0, +\infty[$ par $f(x) = \frac{x^2 - e^x}{x}$ est :
* **A.** $+\infty$
* **B.** $-\infty$
* **C.** $0$
* **D.** $1$

**4.** Soit $g$ une fonction dont la courbe representative admet en un point d'abscisse $x_0$ une tangente horizontale et dont la derivee change de signe en $x_0$, passant de positive a negative. Alors :
* **A.** $g$ admet un minimum en $x_0$.
* **B.** $g$ admet un maximum en $x_0$.
* **C.** $g$ n'est pas derivable en $x_0$.
* **D.** Le point $(x_0, g(x_0))$ est un point d'inflexion.

**5.** On considere la suite $(v_n)$ definie pour tout $n \in \mathbb{N}$ par $v_n = n^2 - 10n$. On a :
* **A.** $\lim_{n \to +\infty} v_n = -\infty$
* **B.** $\lim_{n \to +\infty} v_n = +\infty$
* **C.** La suite $(v_n)$ n'a pas de limite.
* **D.** $\lim_{n \to +\infty} v_n = 0$

---

### Exercice 2 : Etude d'une fonction et convexite (7 points)

Soit $f$ la fonction definie sur l'intervalle $]0, +\infty[$ par :
$$f(x) = x \ln(x) - x$$

On note $C_f$ sa courbe representative dans un repere orthogonal $(O, \vec{i}, \vec{j})$.

**1.** Determiner la limite de la fonction $f$ en $0$. (On pourra rappeler un resultat de cours sur les croissances comparees).
**2.** Determiner la limite de la fonction $f$ en $+\infty$.
**3.** Etudier les variations de la fonction $f$ sur l'intervalle $]0, +\infty[$ et dresser son tableau de variations complet.
**4.** Montrer que l'equation $f(x) = 0$ admet une unique solution $\alpha$ sur l'intervalle $[1, +\infty[$, puis donner un encadrement de $\alpha$ d'amplitude $10^{-1}$.
**5.** Etudier la convexite de la fonction $f$ sur l'intervalle $]0, +\infty[$ et preciser les coordonnees du point d'inflexion de la courbe $C_f$.
**6.** Determiner l'equation de la tangente $T$ a la courbe $C_f$ au point d'abscisse $e$.

---

### Exercice 3 : Suite recurrente et demonstration par recurrence (8 points)

On considere la suite $(u_n)$ definie par $u_0 = 1$ et, pour tout entier naturel $n$ :
$$u_{n+1} = \sqrt{2u_n + 3}$$

**1.** Calculer $u_1$ et $u_2$ (on donnera les valeurs exactes).
**2.** Conjecturer le sens de variation et un encadrement de la suite $(u_n)$.
**3.** Demontrer par recurrence que, pour tout entier naturel $n$, on a :
$$1 \le u_n \le 3$$
**4.** Demontrer que la suite $(u_n)$ est croissante pour tout entier naturel $n$.
**5.** Deduire des questions precedentes que la suite $(u_n)$ est convergente.
**6.** On note $l$ la limite de la suite $(u_n)$. Determiner la valeur de $l$ en justifiant soigneusement.
**7.** On souhaite determiner a l'aide d'un algorithme le plus petit entier $n$ tel que la distance entre $u_n$ et $l$ soit inferieure a $10^{-3}$.  
Ecrire une fonction en langage Python nommee `seuil_limite()` qui renvoie cette valeur de $n$.

---

## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème

### Analyse de l'épreuve et attentes du jury
Ce sujet des Centres Etrangers 2025 couvre l'essentiel du programme de specialite mathematiques de terminale generale. Les trois grands axes evalues sont :
1. **L'analyse asymptotique et l'etude de fonctions** (limites, derivees, convexite).
2. **Le calcul algebrique et les demonstrations par recurrence** (indispensables pour les suites).
3. **Le raisonnement logique** (QCM et algorithmique de base).

### Pièges fréquents à éviter :
* **QCM (Exercice 1) :** Pour la question 3, attention a ne pas conclure trop vite a une forme indeterminee sans factoriser ou utiliser les croissances comparees convenablement. Pour la question 1, rappelez-vous qu'un point d'inflexion correspond a un *changement de signe* de la derivee seconde, et non simplement a son annulation.
* **Etude de fonction (Exercice 2) :** L'utilisation de la formule $\lim_{x \to 0} x \ln(x) = 0$ est un classique absolu du Bac. Ne l'omettez pas et citez le cours.
* **Recurrence (Exercice 3) :** Bien rediger les trois etapes (initialisation, heredite, conclusion). Pour l'heredite, veillez a bien expliciter la croissance de la fonction associee $x \mapsto \sqrt{2x+3}$ sur l'intervalle considere.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Correction de l'Exercice 1 (5 points)

* **Question 1 :** $f''(fx)$ s'annule en changeant de signe en $-1$ et en $3$. La courbe change donc de convexite en ces deux points. Ce sont les seuls points d'inflexion.  
  * **Reponse C ($0{,}5$ pt)**

* **Question 2 :** Etudions la fonction $f(x) = \frac{1}{2}x + 3$. Si $u_n = 6$, $u_{n+1} = 3 + 3 = 6$. Par recurrence immediate, si $u_0 = 2$, la suite est croissante et majoree par $6$.  
  * **Reponse A ($0{,}5$ pt)**

* **Question 3 :** $f(x) = \frac{x^2}{x} - \frac{e^x}{x} = x - \frac{e^x}{x}$. Par croissance comparee, $\lim_{x \to +\infty} \frac{e^x}{x} = +\infty$. Donc $\lim_{x \to +\infty} f(x) = -\infty$.  
  * **Reponse B ($0{,}5$ pt)**

* **Question 4 :** Si la derivee s'annule et passe de positive a negative, la fonction est croissante puis decroissante. Elle admet donc un maximum.  
  * **Reponse B ($0{,}5$ pt)**

* **Question 5 :** $v_n = n^2(1 - \frac{10}{n})$. Par produit des limites, $\lim_{n \to +\infty} v_n = +\infty$.  
  * **Reponse B ($0{,}5$ pt)**

---

### Correction de l'Exercice 2 (7 points)

**1.** On cherche $\lim_{x \to 0^+} f(x)$ avec $f(x) = x \ln(x) - x$.  
On sait par cours que $\lim_{x \to 0^+} x \ln(x) = 0$.  
De plus, $\lim_{x \to 0^+} (-x) = 0$.  
Par somme, **$\lim_{x \to 0^+} f(x) = 0$** ($1$ pt).

**2.** En $+\infty$ : $f(x) = x(\ln(x) - 1)$.  
On a $\lim_{x \to 0^+} x = +\infty$ et $\lim_{x \to +\infty} (\ln(x) - 1) = +\infty$.  
Par produit, **$\lim_{x \to +\infty} f(x) = +\infty$** ($1$ pt).

**3.** La fonction $f$ est derivable sur $]0, +\infty[$ comme produit et somme de fonctions derivables :
$$f'(x) = 1 \times \ln(x) + x \times \frac{1}{x} - 1 = \ln(x) + 1 - 1 = \ln(x)$$
Etudions le signe de $f'(x)$ :
* $f'(x) > 0 \iff \ln(x) > 0 \iff x > 1$
* $f'(x) < 0 \iff \ln(x) < 0 \iff 0 < x < 1$
* $f'(x) = 0 \iff x = 1$  
La fonction est donc decroissante sur $]0, 1]$ et croissante sur $[1, +\infty[$. Valeur minimale : $f(1) = 1 \times \ln(1) - 1 = -1$ ($1{,}5$ pt).

**4.** Sur l'intervalle $[1, +\infty[$, la fonction $f$ est continue et strictement croissante.  
$f(1) = -1$ et $\lim_{x \to +\infty} f(x) = +\infty$.  
Comme $0 \in [-1, +\infty[$, d'apres le **corollaire du theoreme des valeurs intermediaires**, l'equation $f(x) = 0$ admet une unique solution $\alpha$ sur $[1, +\infty[$ ($1$ pt).  
Par balayage a la calculatrice : $f(1{,}7) \approx -0{,}07$ et $f(1{,}8) \approx 0{,}1$, donc **$\alpha \in [1{,}7; 1{,}8]$** ($0{,}5$ pt).

**5.** Etudions la derivee seconde $f''$ :  
$f'(x) = \ln(x)$, donc $f''(x) = \frac{1}{x}$.  
Pour tout $x \in ]0, +\infty[$, $f''(x) > 0$.  
La fonction $f$ est donc **convexe** sur tout son intervalle de definition. La derivee seconde ne s'annule pas en changeant de signe, il n'y a **pas de point d'inflexion** ($1$ pt).

**6.** L'equation de la tangente en $e$ est donnee par :  
$y = f'(e)(x - e) + f(e)$  
* $f'(e) = \ln(e) = 1$  
* $f(e) = e \ln(e) - e = e - e = 0$  
L'equation reduite de la tangente $T$ est donc : **$y = x - e$** ($1$ pt).

---

### Correction de l'Exercice 3 (8 points)

**1.** Calculs des premiers termes :  
* $u_1 = \sqrt{2u_0 + 3} = \sqrt{2(1) + 3} = \sqrt{5}$ ($0{,}5$ pt)
* $u_2 = \sqrt{2\sqrt{5} + 3} \approx 2{,}47$ ($0{,}5$ pt)

**2.** Conjectures : La suite $(u_n)$ semble croissante et encadree par $1$ et $3$ ($0{,}5$ pt).

**3.** Demostration par recurrence de $P(n) : 1 \le u_n \le 3$ :  
* **Initialisation :** Pour $n = 0$, $u_0 = 1$. On a bien $1 \le 1 \le 3$. La propriete est vraie au rang $0$ ($0{,}5$ pt).
* **Heredite :** Supposons qu'au rang $n$, $1 \le u_n \le 3$ (hypothese de recurrence). Montrons que $1 \le u_{n+1} \le 3$.  
  $1 \le u_n \le 3 \implies 2 \le 2u_n \le 6 \implies 5 \le 2u_n + 3 \le 9$  
  La fonction racine carree etant strictement croissante sur $[0, +\infty[$ :  
  $\sqrt{5} \le \sqrt{2u_n + 3} \le \sqrt{9}$  
  Soit $\sqrt{5} \le u_{n+1} \le 3$. Comme $1 \le \sqrt{5}$, on a bien $1 \le u_{n+1} \le 3$.  
  La propriete est hereditaire ($1{,}5$ pt).
* **Conclusion :** Pour tout entier naturel $n$, $1 \le u_n \le 3$ ($0{,}5$ pt).

**4.** Etudions le signe de $u_{n+1} - u_n$ :  
$$u_{n+1} - u_n = \sqrt{2u_n + 3} - u_n = \frac{(\sqrt{2u_n + 3} - u_n)(\sqrt{2u_n + 3} + u_n)}{\sqrt{2u_n + 3} + u_n} = \frac{2u_n + 3 - u_n^2}{\sqrt{2u_n + 3} + u_n}$$
Etudions le numerateur $-u_n^2 + 2u_n + 3$. Le discriminant est $\Delta = 2^2 - 4(-1)(3) = 16$.  
Les racines sont $r_1 = \frac{-2 - 4}{-2} = 3$ et $r_2 = \frac{-2 + 4}{-2} = -1$.  
Le numerateur s'ecrit $-(u_n - 3)(u_n + 1)$.  
Or, d'apres la question 3, $1 \le u_n \le 3$, donc $u_n - 3 \le 0$ et $u_n + 1 > 0$.  
Le numerateur est donc positif ou nul. Le denominateur est strictement positif.  
Ainsi, $u_{n+1} - u_n \ge 0$. **La suite est croissante** ($1{,}5$ pt).

**5.** La suite $(u_n)$ est croissante et majoree par $3$. D'apres le theoreme de convergence monotone, **la suite $(u_n)$ converge** ($1$ pt).

**6.** Soit $l$ la limite de la suite. Par continuite de la fonction $x \mapsto \sqrt{2x+3}$ sur $[1, 3]$, $l$ verifie l'equation :
$$l = \sqrt{2l + 3} \iff l^2 = 2l + 3 \iff l^2 - 2l - 3 = 0$$
Les racines de cette equation sont $-1$ et $3$. Comme la suite est a termes positifs ($u_n \ge 1$), **$l = 3$** ($1$ pt).

**7.** Algorithme en Python :
```python
def seuil_limite():
    u = 1.0
    n = 0
    while abs(u - 3) >= 1e-3:
        u = (2 * u + 3) ** 0.5
        n = n + 1
    return n
```
*(Barème fonction Python : $1$ pt)*