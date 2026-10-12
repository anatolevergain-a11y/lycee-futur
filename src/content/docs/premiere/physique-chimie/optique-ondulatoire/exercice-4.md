---
title: "Exercice 4 : Filtres solaires et télescopes"
description: "Application pratique du chapitre Lumière et couleur"
---

### 🌐 Contexte concret

L'observation sécurisée du Soleil est une précaution indispensable pour tout amateur d'astronomie. Lorsqu'un télescope est utilisé, la lumière est fortement concentrée, ce qui rend l'observation directe mortelle pour la rétine sans protection adéquate. Pour observer les taches solaires, on utilise un filtre solaire à l'entrée du tube (à l'avant du télescope). 

Un filtre en polymère noir (type *Baader Planetarium*) ne laisse passer que $0,001\%$ de la lumière visible (soit une transmission de $10^{-5}$) et bloque efficacement les rayonnements ultraviolets (UV) et infrarouges (IR). De plus, ce filtre donne au Soleil une couleur naturelle jaune-orange.

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Question 1 :** Expliquer pourquoi le filtre doit impérativement être placé à l'entrée du télescope (devant l'objectif) et non à la sortie (au niveau de l'oculaire, près de l'œil).
2. **Question 2 :** La lumière blanche du Soleil est composée de toutes les radiations du spectre visible. Si le filtre laisse passer la lumière rouge et la lumière verte, tout en absorbant le bleu, quelle sera la couleur apparente du Soleil perçue par l'observateur ? Justifier à l'aide de la synthèse additive.
3. **Question 3 :** Un capteur CCD placé au foyer du télescope mesure une puissance lumineuse reçue du Soleil de $1000\text{ W/m}^2$ sans filtre. Calculez la puissance lumineuse reçue par le capteur si l'on intercale le filtre solaire sachant que sa transmission dans le domaine visible est de $10^{-5}$.
4. **Question 4 :** En plus de protéger des risques thermiques (UV et IR), pourquoi un bon filtre solaire doit-il atténuer uniformément toutes les radiations du spectre visible ?

---

### 💡 Indice

- **Q1 :** Pensez à l'effet d'une loupe qui concentre les rayons du Soleil sur une feuille de papier. Que se passerait-il pour un petit filtre placé au foyer ?
- **Q2 :** Rappelez-vous des couleurs primaires de la synthèse additive (RVB) et de leurs mélanges (jaune = rouge + vert).
- **Q3 :** La transmission $T$ s'exprime par le rapport $T = \frac{I_{\text{transmise}}}{I_{\text{incidente}}}$.
- **Q4 :** Si certaines couleurs étaient plus atténuées que d'autres, qu'adviendrait-il de la fidélité des images observées (notamment pour l'étude des taches solaires) ?

---

### 📋 Correction détaillée pas à pas

#### **Correction de la Question 1**
Le filtre doit impérativement être placé à l'entrée du télescope car il intercepte la lumière solaire avant qu'elle ne soit concentrée par les lentilles ou le miroir principal. 
* Si le filtre était placé à l'oculaire (à la sortie), toute la puissance lumineuse collectée par l'ensemble du télescope serait concentrée sur une petite surface, ce qui détruirait instantanément le filtre par surchauffe et traverserait l'œil avant d'être bloquée. Placé à l'avant, il réduit l'énergie dès son entrée dans l'instrument.

#### **Correction de la Question 2**
Selon le cours sur la synthèse additive des couleurs, la superposition de la lumière rouge et de la lumière verte produit la couleur **jaune**. 
$$\text{Rouge} + \text{Vert} = \text{Jaune}$$
Puisque le filtre transmet le rouge et le vert tout en absorbant le bleu, la lumière qui parvient à l'œil est composée de ces deux radiations, ce qui donne au Soleil sa couleur caractéristique jaune-orange.

#### **Correction de la Question 3**
La transmission $T$ du filtre est donnée par la formule :
$$T = \frac{P_{\text{transmise}}}{P_{\text{incidente}}}$$

On cherche la puissance transmise $P_{\text{transmise}}$ :
$$P_{\text{transmise}} = T \times P_{\text{incidente}}$$

A.N. : $T = 10^{-5}$ et $P_{\text{incidente}} = 1000\text{ W/m}^2 = 10^3\text{ W/m}^2$.
$$P_{\text{transmise}} = 10^{-5} \times 10^3 = 10^{-2}\text{ W/m}^2 = 0,01\text{ W/m}^2$$

La puissance lumineuse reçue est donc réduite à $0,01\text{ W/m}^2$, ce qui ne présente plus aucun danger pour l'observation.

#### **Correction de la Question 4**
Un bon filtre solaire doit posséder une densité optique neutre dans le domaine visible. S'il atténuait sélectivement certaines couleurs (par exemple, s'il laissait passer beaucoup plus de rouge que de vert), il créerait une **fausse colorisation** (dominante colorée non naturelle). Une atténuation uniforme garantit le respect de la restitution des couleurs réelles du Soleil et permet d'étudier fidèlement les contrastes des structures photosphériques (comme les taches solaires et les facules).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
