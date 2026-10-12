---
title: "Exercice : Représentation des données"
description: "Démonstration appliquée : Compression des images d'un satellite d'observation"
---

### 🌐 Contexte moderne & concret

Les satellites d'observation de la Terre (comme la flotte européenne Sentinel) survolent notre planète en permanence pour cartographier les surfaces, surveiller le climat ou gérer les crises humanitaires. Pour cela, ils capturent des images à très haute résolution, souvent en niveaux de gris (codés sur $8$ bits par pixel, soit des valeurs allant de $0$ à $255$) ou en couleurs.

Cependant, ces satellites doivent envoyer ces masses de données gigantesques vers les stations terrestres via des liaisons radio aux débits limités. Pour optimiser les transmissions, les ingénieurs utilisent des algorithmes de compression. 

Nous allons étudier une méthode classique de compression sans perte appelée **le codage par plages (RLE - *Run-Length Encoding*)**. Cette méthode est particulièrement efficace lorsque l'image comporte de grandes zones unies (par exemple, des étendues nuageuses uniformes, de la neige ou l'océan).

---

### ❓ Énoncé (3 à 4 questions progressives)

Soit une ligne d'une image satellite réduite, représentée par un tableau de $16$ pixels en niveaux de gris. Les valeurs représentent l'intensité lumineuse (où $255$ est le blanc pur et $0$ le noir complet) :

$$I = [120, 120, 120, 120, 120, 255, 255, 255, 0, 0, 0, 0, 0, 0, 120, 120]$$

1. **Calcul du poids initial :** En supposant que chaque pixel est stocké sur un octet ($8$ bits), calculez la taille mémoire totale (en octets) nécessaire pour stocker cette ligne d'image brute.
2. **Application du RLE :** Appliquez l'algorithme de compression RLE sur cette ligne. Le principe consiste à remplacer une suite de valeurs identiques par un couple : `(nombre_d_occurrences, valeur)`. Donnez le tableau de couples résultant.
3. **Calcul du taux de compression :** En admettant qu'un couple $(nombre, valeur)$ occupe $2$ octets en mémoire ($1$ octet pour le compteur et $1$ octet pour la valeur du pixel), calculez la nouvelle taille mémoire de la ligne compressée. Déduisez-en le taux de compression exprimé en pourcentage, défini par la formule :
   $$\text{Taux} = \left(1 - \frac{\text{Taille compressée}}{\text{Taille initiale}}\right) \times 100$$
4. **Limite de la méthode :** Imaginez maintenant une ligne de pixels alternant parfaitement le noir et le blanc : `[0, 255, 0, 255, 0, 255, 0, 255]`. Quel serait l'effet du RLE sur cette ligne en termes de stockage ? Concluez sur la pertinence de ce codage.

---

### 💡 Indice

- **Question 1 :** Comptez simplement le nombre total de pixels dans le tableau $I$, sachant qu'un pixel équivaut à $1$ octet.
- **Question 2 :** Parcourez le tableau de gauche à droite. Regroupez les valeurs identiques consécutives et comptez-les. Par exemple, si vous voyez cinq fois la valeur $120$, cela se traduit par le couple $(5, 120)$.
- **Question 3 :** Multipliez le nombre total de couples obtenus par $2$ pour trouver la nouvelle taille en octets. Appliquez ensuite l'application numérique avec la formule fournie.
- **Question 4 :** Regardez la longueur des séquences de pixels identiques. Que se passe-t-il si chaque "séquence" ne contient qu'un seul pixel ?

---

### 📋 Correction détaillée (Pas à pas)

1. **Calcul du poids initial :**
   Le tableau $I$ contient $16$ éléments (pixels). 
   Puisque chaque pixel pèse $1$ octet, la taille initiale de l'image brute est de :
   $$\text{Taille initiale} = 16 \times 1 = 16 \text{ octets}$$

2. **Application du RLE :**
   Analysons les séquences successives dans le tableau $I$ :
   - Le nombre $120$ apparaît $5$ fois de suite $\rightarrow (5, 120)$
   - Le nombre $255$ apparaît $3$ fois de suite $\rightarrow (3, 255)$
   - Le nombre $0$ apparaît $6$ fois de suite $\rightarrow (6, 0)$
   - Le nombre $120$ apparaît $2$ fois de suite $\rightarrow (2, 120)$

   Le tableau compressé est donc :
   $$I_{\text{comp}} = [(5, 120), (3, 255), (6, 0), (2, 120)]$$

3. **Calcul du taux de compression :**
   Le résultat compressé contient $4$ couples. Chaque couple utilise $2$ octets ($1$ octet pour le compteur, $1$ octet pour la valeur).
   $$\text{Taille compressée} = 4 \times 2 = 8 \text{ octets}$$
   
   Appliquons maintenant la formule du taux de compression :
   $$\text{Taux} = \left(1 - \frac{8}{16}\right) \times 100 = (1 - 0.5) \times 100 = 50\%$$
   La taille des données à transmettre a été réduite de moitié.

4. **Limite de la méthode :**
   Pour la ligne alternative `[0, 255, 0, 255, 0, 255, 0, 255]`, chaque pixel est isolé. Le codage RLE produirait les couples suivants :
   $$[(1, 0), (1, 255), (1, 0), (1, 255), (1, 0), (1, 255), (1, 0), (1, 255)]$$
   Il y a $8$ couples, soit $8 \times 2 = 16$ octets. 
   Dans ce pire des cas, **la taille double** (si l'on compte un surcoût structurel) ou reste identique à la taille initiale (si l'on compare $16$ octets bruts à $16$ octets compressés), sans compter l'ajout potentiel de métadonnées. 
   **Conclusion :** Le RLE est inefficace (et même contre-productif) sur des données qui ne présentent pas de redondance spatiale (grandes zones homogènes). C'est pourquoi les satellites utilisent des techniques complémentaires (comme la compression JPEG ou des transformées en ondelettes) selon la nature des paysages observés.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
