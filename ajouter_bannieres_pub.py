import os

DOCS_DIR = os.path.join("src", "content", "docs")

# HTML de la bannière publicitaire discrète et responsive
BANNIERE_HTML = """

---

<!-- 📢 Emplacement Publicitaire Discret (Google AdSense / Partenaires) -->
<div class="pub-container" style="margin: 2.5rem 0 1.5rem 0; padding: 1.2rem; border: 1px dashed var(--sl-color-gray-4); text-align: center; border-radius: 0.5rem; background-color: var(--sl-color-gray-6);">
  <span style="font-size: 0.7rem; color: var(--sl-color-gray-3); text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.5rem;">Sponsor / Publicité</span>
  <!-- Collez votre code d'annonce Google AdSense ou votre bannière ci-dessous -->
  <div class="pub-content" style="min-height: 90px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--sl-color-gray-3);">
    <em>Espace publicitaire réservé</em>
  </div>
</div>
"""

def inserer_bannieres():
    print("🚀 Insertion automatique des bannières publicitaires discrètes...\n")
    
    compteur = 0
    for root, dirs, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")) and file != "index.mdx":
                chemin_fichier = os.path.join(root, file)
                
                with open(chemin_fichier, "r", encoding="utf-8") as f:
                    contenu = f.read()

                # Éviter de doubler la bannière si elle est déjà présente
                if "pub-container" not in contenu:
                    contenu_modifie = contenu.strip() + BANNIERE_HTML
                    
                    with open(chemin_fichier, "w", encoding="utf-8") as f:
                        f.write(contenu_modifie)
                    
                    compteur += 1

    print(f"✅ Bannières intégrées avec succès dans {compteur} fiches de cours et d'exercices !")

if __name__ == "__main__":
    inserer_bannieres()