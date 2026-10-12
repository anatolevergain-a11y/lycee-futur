---
title: "Exercice 3 : Reconstitution des paléoclimats"
description: "Application pratique du chapitre Chronologie géologique et ressources"
---

### 🌐 Contexte & Données scientifiques

La compréhension des variations climatiques passées (paléoclimats) repose sur l'exploitation d'indicateurs (les proxies) prélevés dans les archives géologiques. Parmi les plus performants figurent les carottes de glace prélevées dans les calottes polaires (Antarctique, Groenland) et les sédiments océaniques carbonatés (tests de foraminifères).

1. **Le thermomètre isotopique de l'oxygène ($\delta^{18}\text{O}$) :**
   L'eau de mer est composée de molécules d'eau contenant principalement l'isotope ${}^{16}\text{O}$ (léger) et, en plus faible quantité, l'isotope ${}^{18}\text{O}$ (lourd). Le rapport isotopique est exprimé en pourmil ($\,^0\!/\!_{00}$) par rapport à une norme internationale (VSMOW) :
   $$\delta^{18}\text{O} = \left( \frac{\left({}^{18}\text{O}/{}^{16}\text{O}\right)_{\text{échantillon}}}{\left({}^{18}\text{O}/{}^{16}\text{O}\right)_{\text{standard}}} - 1 \right) \times 1000$$

   * **Dans les glaces polaires :** L'évaporation de l'eau océanique discrimine les isotopes selon leur masse. L'eau légère (${}^{16}\text{O}$) s'évapore plus facilement que l'eau lourde (${}^{18}\text{O}$). Lors d'une période glaciaire, la température globale chute, ce qui appauvrit encore davantage la neige en ${}^{18}\text{O}$. Ainsi, **un $\delta^{18}\text{O}$ de la glace fortement négatif témoigne d'un climat froid**.
   * **Dans les sédiments marins (tests calcaires de foraminifères, $\text{CaCO}_3$) :** L'eau piégée dans la glace continentale étant appauvrie en ${}^{16}\text{O}$, l'océan global s'enrichit en ${}^{18}\text{O}$. De plus, l'incorporation de l'oxygène dans le carbonate de calcium dépend de la température de l'eau au moment de la précipitation. Ainsi, **un $\delta^{18}\text{O}$ des carbonates marins élevé témoigne d'une période glaciaire**.

2. **Données d'un carottage sédimentaire océanique (Site ODP 982) :**
   Une analyse isotopique menée sur des foraminifères bentiques (*Cibicidoides wuellerstorfi*) sur les derniers 800 000 ans montre des fluctuations cycliques du $\delta^{18}\text{O}$ marin oscillant entre $+3,0 \,^0\!/\!_{00}$ (interglaciaire) et $+5,0 \,^0\!/\!_{00}$ (maximum glaciaire). 
   *Relation empirique entre le $\delta^{18}\text{O}$ des foraminifères bentiques et la température des eaux profondes ($T$) :*
   $$T (°C) = 16,9 - 4,3 \times (\delta^{18}\text{O}_{\text{foraminifère}} - \delta^{18}\text{O}_{\text{eau}}) + 0,1 \times (\delta^{18}\text{O}_{\text{foraminifère}} - \delta^{18}\text{O}_{\text{eau}})^2$$
   *(Note : Pour simplifier, on pose souvent que les variations de $\delta^{18}\text{O}$ marin traduisent principalement le volume des glaces continentales, $\delta^{18}\text{O}_{\text{eau}}$ étant estimé constant à $-0,27 \,^0\!/\!_{00}$ lors des périodes de référence).*

---

### ❓ Énoncé (3 à 4 questions progressives)

1. **Restitution des connaissances et analyse critique des proxies :** 
   Expliquer pourquoi l'utilisation conjointe des isotopes de l'oxygène dans les glaces et dans les sédiments marins est nécessaire pour valider un modèle paléoclimatique, en soulignant les limites propres à chaque archive (notamment les biais diagenétiques et les taux de sédimentation).

2. **Traitement quantitatif et calcul thermique :** 
   À partir de la formule empirique fournie, calculer la température des eaux profondes pour deux échantillons sédimentaires :
   * Échantillon A (période actuelle/interglaciaire) : $\delta^{18}\text{O}_{\text{foraminifère}} = +3,2 \,^0\!/\!_{00}$
   * Échantillon B (dernier maximum glaciaire) : $\delta^{18}\text{O}_{\text{foraminifère}} = +4,8 \,^0\!/\!_{00}$
   *(On posera $\delta^{18}\text{O}_{\text{eau}} = -0,27 \,^0\!/\!_{00}$ pour les deux calculs).*

3. **Mise en perspective chronologique et limites du modèle :** 
   Le calcul précédent montre une variation de température des eaux profondes. Sachant que ces eaux profondes actuelles se forment principalement en Atlantique Nord et en Antarctique près de la surface, discutez de la représentativité de cette mesure à l'échelle du globe. En quoi l'hypothèse d'un $\delta^{18}\text{O}_{\text{eau}}$ constant constitue-t-elle une approximation scientifique critiquable ?

---

### 💡 Indice de méthode

* **Question 1 :** Sondez la complémentarité spatiale (pôles vs océan global) et temporelle. Pensez aux phénomènes de bioturbation ou de fonte partielle qui altèrent le signal géologique.
* **Question 2 :** Posez $X = (\delta^{18}\text{O}_{\text{foraminifère}} - \delta^{18}\text{O}_{\text{eau}})$ avant d'injecter la valeur numérique dans l'équation du second degré simplifiée. Veillez à bien respecter l'ordre des opérations.
* **Question 3 :** Interrogez la dynamique océanique globale (thermohaline) et rappelez que le volume d'eau douce piégée dans les calottes glaciaires modifie mathématiquement la composition isotopique de référence de l'océan mondial ($\delta^{18}\text{O}_{\text{eau}}$ n'est donc pas rigoureusement invariant).

---

### 📋 Correction détaillée pas à pas

#### 1. Analyse critique des proxies isotopiques
* **Complémentarité :** Les glaces polaires enregistrent directement la composition isotopique des précipitations locales (liée à la température au-dessus de la calotte), tandis que les sédiments marins enregistrent une signature intégrée de l'océan mondial (volume des glaces + température de l'eau de fond).
* **Limites scientifiques :** 
  * *Pour les sédiments :* La bioturbation (brassage par les organismes fouisseurs) peut lisser le signal temporel haute fréquence. De plus, la dissolution post-dépôt (diagenèse) peut altérer les tests calcaires.
  * *Pour les glaces :* Le fluage de la glace en profondeur comprime les couches annuelles, rendant la datation délicate et incertaine dans les zones basales (nécessité de modélisation du flux glaciaire).

#### 2. Calculs thermiques
Posons le terme intermédiaire $X = \delta^{18}\text{O}_{\text{foraminifère}} - \delta^{18}\text{O}_{\text{eau}}$ avec $\delta^{18}\text{O}_{\text{eau}} = -0,27 \,^0\!/\!_{00}$.

* **Pour l'Échantillon A :**
  $$X_A = 3,2 - (-0,27) = 3,2 + 0,27 = 3,47 \,^0\!/\!_{00}$$
  Appliquons la formule :
  $$T_A = 16,9 - 4,3 \times (3,47) + 0,1 \times (3,47)^2$$
  $$T_A = 16,9 - 14,921 + 0,1 \times 12,0409$$
  $$T_A = 1,979 + 1,204 = 3,183 \,^\circ\text{C}$$
  *(La température des eaux profondes est estimée à environ $3,2 \,^\circ\text{C}$)*.

* **Pour l'Échantillon B :**
  $$X_B = 4,8 - (-0,27) = 4,8 + 0,27 = 5,07 \,^0\!/\!_{00}$$
  Appliquons la formule :
  $$T_B = 16,9 - 4,3 \*(5,07) + 0,1 \times (5,07)^2$$
  $$T_B = 16,9 - 21,801 + 0,1 \times 25,7049$$
  $$T_B = -4,901 + 2,570 = -2,331 \,^\circ\text{C}$$
  *(La température calculée est d'environ $-2,3 \,^\circ\text{C}$, ce qui est chimiquement/physiquement la limite de congélation de l'eau de mer salée, soulignant ici une limite du modèle empirique ou la nécessité de raffiner la valeur de $\delta^{18}\text{O}_{\text{eau}}$).*

#### 3. Représentativité et limites du modèle
* **Représentativité spatiale :** Les foraminifères bentiques vivent au fond des océans. La température calculée reflète donc les masses d'eau profondes et non la température de surface (qui varie beaucoup plus fortement selon les latitudes). Elle témoigne d'une réorganisation globale de la circulation thermohaline, mais ne permet pas de restituer finement les climats tropicaux ou continentaux sans modélisation complexe.
* **Critique de l'hypothèse de $\delta^{18}\text{O}_{\text{eau}}$ :** Durant une glaciation massive, une quantité considérable d'eau légère (${}^{16}\text{O}$) est immobilisée sur les continents sous forme de calottes glaciaires. Par conséquent, l'océan mondial s'enrichit globalement en ${}^{18}\text{O}$. Poser $\delta^{18}\text{O}_{\text{eau}}$ constant est une approximation méthodologique nécessaire mais fausse rigoureusement : l'oubli de cette variation induit une surestimation de la baisse réelle de température si l'on attribue tout le signal $\delta^{18}\text{O}$ de la coquille à la seule température. Les climatologues doivent donc coupler ces données avec d'autres proxies (ex: rapports $\text{Mg/Ca}$ dans les calcaires, insensibles au volume de glace) pour lever cette incertitude.

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
