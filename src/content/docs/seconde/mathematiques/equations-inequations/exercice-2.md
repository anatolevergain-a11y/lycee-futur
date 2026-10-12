---
title: "Exercice 2 : Seuils de tolérance dans les normes de sécurité"
description: "Application pratique du chapitre Équations et inéquations"
---

### 🌐 Contexte & Données scientifiques

Dans le domaine de la santé publique et de la métrologie légale, l'établissement des normes de sécurité pour l'exposition aux substances chimiques ou aux rayonnements repose sur des modèles mathématiques et toxicologiques imparfaits. Les autorités sanitaires fixent des seuils d'exposition admissibles, souvent exprimés en milligrammes par mètre cube ($\text{mg}\cdot\text{m}^{-3}$) ou en parties par million ($\text{ppm}$).

Toutefois, toute mesure physique est entachée d'une incertitude instrumentale. Si un capteur mesure une concentration $x$ d'un polluant, la valeur réelle $X$ se situe dans un intervalle de confiance inhérent à la précision de l'appareil. De plus, la définition d'un seuil de tolérance soulève un arbitrage complexe entre le principe de précaution (protection absolue de la santé) et la faisabilité technico-économique (coût des technologies de dépollution et risque de faux positifs entraînant des arrêts d'activité injustifiés).

Considérons une usine chimique soumise à une directive européenne concernant le rejet d'un gaz spécifique. Le seuil réglementaire strict est fixé à $50 \text{ mg}\cdot\text{m}^{-3}$. Le système de surveillance automatisé de l'entreprise mesure une concentration $x$ (exprimée en $\text{mg}\cdot\text{m}^{-3}$). L'incertitude absolue du capteur utilisé est estimée à $\pm 3 \text{ mg}\cdot\text{m}^{-3}$, ce qui signifie que la concentration réelle $X$ dans l'air satisfait l'encadrement suivant :
$$x - 3 \le X \le x + 3$$

---

### ❓ Énoncé

1. **Modélisation de l'incertitude :** Si la concentration mesurée par le capteur est $x = 48 \text{ mg}\cdot\text{m}^{-3}$, déterminez l'intervalle dans lequel se trouve la concentration réelle $X$. Ce résultat permet-il de garantir avec certitude que la norme de $50 \text{ mg}\cdot\text{m}^{-3}$ n'est pas dépassée ? Justifiez rigoureusement.

2. **Résolution d'inéquation :** Pour des raisons de maintenance, le capteur subit une décalage d'étalonnage. On cherche à déterminer l'ensemble des valeurs mesurées $x$ pour lesquelles la borne supérieure de l'intervalle de la concentration réelle $X$ dépasse strictement le seuil réglementaire de $50 \text{ mg}\cdot\text{m}^{-3}$. Posez et résolvez l'inéquation correspondante.

3. **Approche critique et compromis :** L'exploitant propose d'intégrer une "marge de tolérance opérationnelle" en augmentant le seuil d'alerte à $55 \text{ mg}\cdot\text{m}^{-3}$ sous prétexte que l'incertitude du capteur rend les mesures ambiguës. En traduisant mathématiquement cette proposition par une inéquation portant sur la concentration mesurée $x$, discutez des limites de cet argument du point de vue de la santé publique.

---

### 💡 Indice de méthode

* **Question 1 :** Utilisez l'inégalité encadrant $X$ en remplaçant $x$ par sa valeur numérique, puis analysez si la valeur maximale possible de $X$ franchit le seuil critique.
* **Question 2 :** Traduisez la condition « la borne supérieure dépasse strictement $50$ » par une inéquation simple d'inconnue $x$, puis isolez $x$.
* **Question 3 :** Exprimez la condition pour que même avec la borne inférieure de l'incertitude, la norme réglementaire initiale de $50 \text{ mg}\cdot\text{m}^{-3}$ ne soit jamais violée. Comparez cette approche avec le principe de précaution.

---

### 📋 Correction détaillée pas à pas

#### 1. Modélisation de l'incertitude
Pour une mesure $x = 48 \text{ mg}\cdot\text{m}^{-3}$, l'incertitude de $\pm 3 \text{ mg}\cdot\text{m}^{-3}$ nous donne l'encadrement de la concentration réelle $X$ :
$$48 - 3 \le X \le 48 + 3$$
$$45 \le X \le 51$$
La concentration réelle $X$ appartient à l'intervalle $[45\,;\,51] \text{ mg}\cdot\text{m}^{-3}$. 
*Analyse critique :* Bien que la valeur mesurée ($48 \text{ mg}\cdot\text{m}^{-3}$) soit inférieure au seuil réglementaire de $50 \text{ mg}\cdot\text{m}^{-3}$, la concentration réelle peut atteindre $51 \text{ mg}\cdot\text{m}^{-3}$. Il est donc scientifiquement **impossible de garantir avec certitude** que la norme n'est pas dépassée. C'est la raison pour laquelle les décisions de sécurité ne peuvent reposer uniquement sur une valeur brute sans intégrer l'incertitude métrologique.

#### 2. Résolution d'inéquation
La borne supérieure de la concentration réelle est $X_{\text{max}} = x + 3$. 
On cherche les valeurs de $x$ pour lesquelles cette borne supérieure dépasse strictement le seuil de $50 \text{ mg}\cdot\text{m}^{-3}$ :
$$x + 3 > 50$$
Résolvons cette inéquation en soustrayant $3$ de chaque côté :
$$x > 50 - 3$$
$$x > 47$$
*Conclusion :* Dès que la concentration mesurée est strictement supérieure à $47 \text{ mg}\cdot\text{m}^{-3}$, le modèle indique que la concentration réelle *peut* dépasser la norme autorisée. 

#### 3. Approche critique et compromis
Si l'exploitant fixe le seuil d'alerte à $x = 55 \text{ mg}\cdot\text{m}^{-3}$, calculons la concentration réelle minimale $X_{\text{min}}$ associée à cette mesure :
$$X_{\text{min}} = 55 - 3 = 52 \text{ mg}\cdot\text{m}^{-3}$$
Même dans l'hypothèse la plus favorable où le capteur surexposerait la réalité, la concentration réelle minimale serait de $52 \text{ mg}\cdot\text{m}^{-3}$, ce qui est strictement supérieur au seuil réglementaire de $50 \text{ mg}\cdot\text{m}^{-3}$ ($52 > 50$). 
*Discussion critique :* Valider une telle tolérance opérationnelle reviendrait à accepter systématiquement une infraction aux normes sanitaires. Cet exemple illustre le compromis délicat entre la rigueur scientifique de la protection sanitaire et les contraintes industrielles : assouplir un seuil pour compenser l'incertitude instrumentale sans abaisser la limite réglementaire sous-jacente expose les populations à un risque avéré, démontrant que la gestion du risque nécessite d'améliorer la précision des capteurs plutôt que de modifier arbitrairement les normes.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
