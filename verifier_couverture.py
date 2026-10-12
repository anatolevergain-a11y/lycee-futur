import os

DOCS_DIR = os.path.join("src", "content", "docs")

# Programme à vérifier (défini localement sans appeler l'API Gemini)
PROGRAMME_A_VERIFIER = {
    "seconde": ["mathematiques", "physique-chimie", "svt", "snt"],
    "premiere": ["mathematiques", "physique-chimie", "svt", "nsi", "ses"],
    "terminale": ["mathematiques", "physique-chimie", "svt", "nsi", "ses", "philosophie"]
}

def audit_site():
    print("🔎 VÉRIFICATION DE LA COUVERTURE DES FICHIERS DU SITE...\n")
    
    if not os.path.exists(DOCS_DIR):
        print(f"❌ Le dossier {DOCS_DIR} n'existe pas encore.")
        return

    total_fiches_cours = 0
    total_exercices = 0
    chapitres_decouverts = []

    # Parcourir les dossiers de cours
    for root, dirs, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith((".md", ".mdx")) and file != "index.mdx":
                rel_path = os.path.relpath(os.path.join(root, file), DOCS_DIR)
                parts = rel_path.split(os.sep)
                
                if file == "index.md":
                    total_fiches_cours += 1
                    if len(parts) >= 3:
                        chapitres_decouverts.append(f"{parts[0].upper()} > {parts[1]} > {parts[2]}")
                elif file.startswith("exercice-"):
                    total_exercices += 1

    print(f"📊 RÉSUMÉ DU SITES EN LOCAL :")
    print(f"   • {total_fiches_cours} fiches de cours (index.md) générées.")
    print(f"   • {total_exercices} exercices corrigés générés.")
    print(f"   • Total : {total_fiches_cours + total_exercices} fichiers Markdown prêts.\n")

    print("📚 CHAPITRES ET DOSSIERS TROUVÉS DANS LE SITE :")
    for chap in sorted(set(chapitres_decouverts)):
        print(f"   ✅ {chap}")

if __name__ == "__main__":
    audit_site()