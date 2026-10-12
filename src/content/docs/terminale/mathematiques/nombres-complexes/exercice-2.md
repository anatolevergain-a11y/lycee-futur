---
title: "Exercice 2 : Applications à la trigonométrie et au traitement du signal"
description: "Application pratique du chapitre Nombres complexes (Option Maths Expertes)"
---

### 🌐 Contexte & Données scientifiques

En traitement du signal, l'analyse harmonique repose sur la représentation des ondes sinusoïdales par des nombres complexes. Dans les systèmes de télécommunication modernes (comme la 5G ou le Wi-Fi), les données sont modulées sur des porteuses sinusoïdales. Cependant, les signaux réels subissent des dégradations lors de leur transmission : atténuation de l'amplitude, déphasage temporel et introduction de bruits parasites aléatoires.

Soit un signal sinusoïdal d'intérêt $s(t)$ modélisé par la partie réelle d'une grandeur complexe tournante :
$$\underline{s}(t) = S_0 \, e^{j(\omega t + \varphi)}$$
où :
- $S_0 > 0$ représente l'amplitude maximale du signal ($\text{en V}$).
- $\omega = 2\pi f$ est la pulsation, avec $f = 2{,}4 \times 10^9 \text{ Hz}$ (fréquence de la bande ISM utilisée en Wi-Fi).
- $\varphi$ est la phase à l'origine ($\text{en rad}$).
- $j$ est le nombre complexe tel que $j^2 = -1$.

Pour analyser l'efficacité d'un filtre passe-bande destiné à éliminer un bruit haute fréquence, on étudie la fonction de transfert complexe $\underline{H}(j\omega)$ du circuit, définie par le rapport entre le signal de sortie filtré $\underline{S}_{\text{sortie}}$ et le signal d'entrée $\underline{S}_{\text{entrée}}$ :
$$\underline{H}(j\omega) = \frac{1}{1 + jRC\omega}$$
où $R = 50 \ \Omega$ représente l'impédance caractéristique de la ligne et $C$ la capacité du condensateur correcteur. 

L'ingénieur doit faire face à un compromis technique : un filtrage trop agressif (réduction de la bande passante) altère la forme du signal utile (distorsion), tandis qu'un filtrage insuffisant laisse passer le bruit thermique, dégradant le rapport signal sur bruit (RSB).

---

### ❓ Énoncé

1. **Linéarisation et trigonométrie :**  
   À l'aide de la formule d'Euler, exprimer $\cos^4(\theta)$ en fonction de $\cos(4\theta)$, $\cos(2\theta)$ et d'une constante réelle, pour $\theta \in \mathbb{R}$. En déduire la valeur exacte de l'intégrale :
   $$I = \int_{0}^{\frac{\pi}{2}} \cos^4(\theta) \, d\theta$$

2. **Module et Argument de la fonction de transfert :**  
   On pose $\omega_0 = \frac{1}{RC}$ la pulsation de coupure du filtre. Exprimer le module $|\underline{H}(j\omega)|$ et un argument $\arg(\underline{H}(j\omega))$ en fonction du rapport $\alpha = \frac{\omega}{\omega_0}$.  
   *Interprétation critique :* Comment évoluent l'amplitude et la phase du signal lorsque la fréquence du signal parasite tend vers l'infini ($\alpha \to +\infty$) ? Quel est l'impact de ce comportement sur la fidélité de la transmission ?

3. **Application numérique et analyse des incertitudes :**  
   Pour un composant donné, on mesure $R = 50 \ \Omega$ avec une incertitude relative de $\pm 1\,\%$ et $C = 10 \text{ pF}$ avec une incertitude relative de $\pm 5\,\%$.  
   Calculer la fréquence de coupure $f_0 = \frac{\omega_0}{2\pi}$. En évaluant la propagation des incertitudes sur le produit $RC$, discuter de la fiabilité du modèle théorique face aux tolérances industrielles des composants.

---

### 💡 Indice de méthode

- **Question 1 :** Utilisez les relations d'Euler $\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}$ puis développez à l'aide de la formule du binôme de Newton. Pensez à regrouper les termes conjugués sous la forme $2\cos(k\theta)$.
- **Question 2 :** Pour une fraction complexe $\frac{z_1}{z_2}$, le module est le quotient des modules et l'argument est la différence des arguments : $\arg\left(\frac{z_1}{z_2}\right) \equiv \arg(z_1) - \arg(z_2) \pmod{2\pi}$.
- **Question 3 :** L'incertitude relative d'un produit $P = R \times C$ est majorée (en première approximation) par la somme des incertitudes relatives de chaque facteur : $\frac{\Delta P}{P} \approx \frac{\Delta R}{R} + \frac{\Delta C}{C}$.

---

### 📋 Correction détaillée pas à pas

#### 1. Linéarisation et calcul d'intégrale
Soit $\theta \in \mathbb{R}$. D'après la formule d'Euler :
$$\cos(\theta) = \frac{e^{j\theta} + e^{-j\theta}}{2}$$
Élevons cette expression à la puissance 4 en utilisant le binôme de Newton :
$$\cos^4(\theta) = \left(\frac{e^{j\theta} + e^{-j\theta}}{2}\right)^4 = \frac{1}{16} \left( (e^{j\theta})^4 + 4(e^{j\theta})^3(e^{-j\theta}) + 6(e^{j\theta})^2(e^{-j\theta})^2 + 4(e^{j\theta})(e^{-j\theta})^3 + (e^{-j\theta})^4 \right)$$
En simplifiant les exposants :
$$\cos^4(\theta) = \frac{1}{16} \left( e^{j4\theta} + e^{-j4\theta} + 4(e^{j2\theta} + e^{-j2\theta}) + 6 \right)$$
En regroupant les termes exponentiels sous forme de cosinus ($e^{jk\theta} + e^{-jk\theta} = 2\cos(k\theta)$) :
$$\cos^4(\theta) = \frac{1}{16} \left( 2\cos(4\theta) + 4 \times 2\cos(2\theta) + 6 \right)$$
$$\cos^4(\theta) = \frac{2\cos(4\theta) + 8\cos(2\theta) + 6}{16} = \frac{1}{8}\cos(4\theta) + \frac{1}{2}\cos(2\theta) + \frac{3}{8}$$

Calculons ensuite l'intégrale $I$ :
$$I = \int_{0}^{\frac{\pi}{2}} \left( \frac{1}{8}\cos(4\theta) + \frac{1}{2}\cos(2\theta) + \frac{3}{8} \right) d\theta$$
$$\begin{aligned}
I &= \left[ \frac{1}{32}\sin(4\theta) + \frac{1}{4}\sin(2\theta) + \frac{3}{8}\theta \right]_{0}^{\frac{\pi}{2}} \\
&= \left( \frac{1}{32}\sin(2\pi) + \frac{1}{4}\sin(\pi) + \frac{3}{8}\frac{\pi}{2} \right) - (0 + 0 + 0) \\
&= 0 + 0 + \frac{3\pi}{16} = \frac{3\pi}{16}
\end{aligned}$$
*Valeur exacte :* $I = \frac{3\pi}{16}$.

#### 2. Module, argument et analyse critique du filtre
La fonction de transfert est $\underline{H}(j\omega) = \frac{1}{1 + j\alpha}$ avec $\alpha = \frac{\omega}{\omega_0} = RC\omega$.
- **Module :**
  $$|\underline{H}(j\omega)| = \frac{|1|}{|1 + j\alpha|} = \frac{1}{\sqrt{1^2 + \alpha^2}} = \frac{1}{\sqrt{1 + \left(\frac{\omega}{\omega_0}\right)^2}}$$
- **Argument :**
  $$\arg(\underline{H}(j\omega)) = \arg(1) - \arg(1 + j\alpha) = 0 - \arctan(\alpha) = -\arctan\left(\frac{\omega}{\omega_0}\right)$$

*Analyse critique :*
Lorsque la fréquence du signal parasite tend vers l'infini ($\omega \to +\infty$, soit $\alpha \to +\infty$), le module $|\underline{H}(j\omega)| \to 0$. Le filtre remplit donc sa fonction théorique d'atténuation des hautes fréquences. 
Cependant, l'argument tend vers $-\frac{\pi}{2}$ radians, ce qui signifie que le signal subit un déphasage asymptotique de $-90^\circ$. Si le signal utile contient des composantes à haute fréquence (transitions rapides des bits), ce déphasage non linéaire selon la fréquence provoque une **distorsion temporelle** (élargissement des impulsions), illustrant le compromis permanent entre réjection du bruit et intégrité du signal.

#### 3. Application numérique et propagation des incertitudes
Calculons la pulsation de coupure $\omega_0$ et la fréquence de coupure $f_0$ :
- $R = 50 \ \Omega$
- $C = 10 \text{ pF} = 10 \times 10^{-12} \text{ F} = 10^{-11} \text{ F}$

$$\omega_0 = \frac{1}{RC} = \frac{1}{50 \times 10^{-11}} = \frac{1}{5 \times 10^{-10}} = 2 \times 10^9 \text{ rad}\cdot\text{s}^{-1}$$
$$f_0 = \frac{\omega_0}{2\pi} = \frac{2 \times 10^9}{2\pi} = \frac{10^9}{\pi} \approx 3,18 \times 10^8 \text{ Hz} \approx 318 \text{ MHz}$$

*Évaluation des incertitudes :*
Les tolérances des composants imposent :
$$\frac{\Delta R}{R} = 1\,\% = 0{,}01 \quad \text{et} \quad \frac{\Delta C}{C} = 5\,\% = 0{,}05$$
L'incertitude relative sur le produit $PC = RC$ est donc :
$$\frac{\Delta(RC)}{RC} \approx \frac{\Delta R}{R} + \frac{\Delta C}{C} = 0{,}01 + 0{,}05 = 0{,}06 \text{ soit } 6\,\%$$
Puisque $f_0$ est inversement proportionnelle au produit $RC$ ($f_0 = \frac{1}{2\pi RC}$), l'incertitude relative sur la fréquence de coupure est également de l'ordre de $6\,\%$. 

*Conclusion scientifique :* Bien que le calcul mathématique donne une valeur précise de $318 \text{ MHz}$, la réalité industrielle impose une incertitude de $\pm 6\,\%$, soit une bande d'incertitude d'environ $\pm 19 \text{ MHz}$. Ce résultat montre qu'en ingénierie, un modèle mathématique rigoureux doit impérativement être couplé à une analyse statistique des tolérances matérielles pour garantir la robustesse du système réel.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
