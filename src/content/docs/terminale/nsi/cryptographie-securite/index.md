---
title: "Cours : Cryptographie et sécurité des données"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

## 📌 1. Notions clés & Définitions

La sécurité des données repose sur des mécanismes cryptographiques permettant de garantir plusieurs propriétés fondamentales (la triade CIA) :
- **Confidentialité** : Assurer que seule la personne autorisee peut lire le message.
- **Integrité** : Garantir que les donnees n'ont pas ete modifiees lors de la transmission ou du stockage.
- **Authentification** : Verifier l'identite de l'emetteur ou de l'utilisateur.
- **Non-repudiation** : Empecher une partie de nier avoir envoye un message ou effectue une transaction.

On distingue deux grandes familles de systemes cryptographiques :
- **La cryptographie symetrique** : La meme cle secrete $K$ est utilisee pour le chiffrement et le dechiffrement. Le principal defi reside dans le partage securise de cette cle.
- **La cryptographie asymetrique** : Utilise une paire de cles liees mathematiquement : une **cle publique** $K_{\text{pub}}$ pour chiffrer (diffusee a tous) et une **cle privee** $K_{\text{priv}}$ pour dechiffrer (gardee secrete par le proprietaire).

## 📐 2. Formules et Propriétés fondamentales

### Chiffrement symetrique : Le chiffre de Vernam (ou Masque Jetable)
Le chiffre de Vernam est le seul systeme dont la securite est demontree comme parfaite (theoreme de Shannon). Il consiste a appliquer un operateur XOR ($\oplus$) entre le message clair $M$ et une cle $K$ de meme longueur :
$$C = M \oplus K$$
Pour le dechiffrement :
$$M = C \oplus K$$

### Cryptographie asymetrique : Le systeme RSA
Le chiffrement RSA repose sur la difficulte factoriser le produit de deux grands nombres premiers.

1. **Generation des cles** :
   - On choisit deux nombres premiers distincts $p$ et $q$.
   - On calcule le module $n = p \times q$.
   - On calcule l'indicatrice d'Euler : $\phi(n) = (p - 1)(q - 1)$.
   - On choisit un entier $e$ premier avec $\phi(n)$ ($1 < e < \phi(n)$).
   - On calcule l'exposant secret $d$ tel que $e \times d \equiv 1 \pmod{\phi(n)}$.
   - La cle publique est le couple $(n, e)$ et la cle privee est le couple $(n, d)$.

2. **Chiffrement et Dechiffrement** :
   - Pour chiffrer un message $M$ (represente sous forme d'entier tel que $0 \le M < n$) :
     $$C = M^e \pmod n$$
   - Pour dechiffrer le chifere $C$ :
     $$M = C^d \pmod n$$

### Fonctions de hachage
Une fonction de hachage $H$ associe une donnee de taille quelconque a une empreinte (ou resume) de taille fixe. Une fonction de hachage cryptographique doit verifier :
- **La resistance aux collisions** : il doit etre infaisable de trouver deux messages $M_1$ et $M_2$ tels que $H(M_1) = H(M_2)$.
- **L'effet avalanche** : modifier un seul bit du message d'entree doit modifier profondement environ la moitie des bits de la sortie.

## 💡 3. Exemple d'application résolu

**Enonce :**
On souhaite chiffrer le message $M$ avec le systeme RSA. On pose les parametres suivants :
- $p = 3$ et $q = 11$
- Cle publique : $e = 3$
Le message numerique est $M = 5$. Calculez le message chiffre $C$, puis verifiez le dechiffrement en sachant que l'exposant secret est $d = 7$.

**Resolution :**

1. **Calcul du module $n$ et de $\phi(n)$** :
   $$n = p \times q = 3 \times 11 = 33$$
   $$\phi(n) = (3 - 1) \times (11 - 1) = 2 \times 10 = 20$$
   *(Verification de l'exposant secret : $e \times d = 3 \times 7 = 21 \equiv 1 \pmod{20}$, ce qui est correct).*

2. **Chiffrement de $M$** :
   On applique la formule du chiffrement $C = M^e \pmod n$ :
   $$C = 5^3 \pmod{33}$$
   $$5^3 = 125$$
   On effectue la division euclidienne de $125$ par $33$ :
   $$125 = 3 \times 33 + 26$$
   Donc, $C = 26$.

3. **Dechiffrement de $C$** :
   On applique la formule du dechiffrement $M' = C^d \pmod n$ :
   $$M' = 26^7 \pmod{33}$$
   Pour eviter de manipuler des nombres trop grands directement, on peut utiliser l'exponentiation modulaire rapide. On obtient bien :
   $$M' = 5$$
   Le message initial est recupere avec succes.

## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation

- **Confusions entre les cles en RSA** : Ne jamais confondre l'utilisation de la cle publique et de la cle prive. Pour chiffrer un message confidentiel envoye a un destinataire, on utilise **sa cle publique**. Pour signer un message (authentification), on utilise **sa propre cle privee**.
- **Taille des cles** : En cryptographie moderne, la securite depend directement de la taille des cles (par exemple, 2048 bits ou plus pour RSA). Des valeurs faibles (comme $n = 33$ dans l'exemple ci-dessus) ne sont utilisees qu'a des fins pedagogiques car elles se factorisent trivialement.
- **Sens des operations** : Bien verifier l'ordre des operations lors des calculs modulo $n$. En NSI, les sujets d'evaluation peuvent demander d'implementer ces algorithmes en Python (utilisation de la fonction `pow(base, exp, mod)` pour une exponentiation modulaire efficace).

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
