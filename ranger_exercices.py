import os
import re
import shutil

DOCS_DIR = os.path.join("src", "content", "docs")

# Niveaux et matières valides
NIVEAUX_VALIDES = ["seconde", "premiere", "terminale"]

def analyser_et_ranger():
    print("🔍 Analyse de l'arborescence des cours et exercices...\n")
    
    fichiers_deplaces = 0
    fichiers_orphelins = []

    # Parcourir tous les fichiers du dossier src/content/docs
    for root, dirs, files in os.walk(DOCS_DIR):
        for file in files:
            if not file.endswith((".md", ".mdx")):
                continue
            
            # Ne pas toucher à la page d'accueil principale
            if file == "index.mdx" and root == DOCS_DIR:
                continue

            chemin_complet = os.path.join(root, file)
            rel_path = os.path.relpath(chemin_complet, DOCS_DIR)
            parts = rel_path.split(os.sep)

            # Vérifier la profondeur du fichier dans le dossier
            # Un fichier bien rangé doit suivre : [niveau] / [matiere] / [chapitre] / [fichier.md]
            if len(parts) < 4:
                print(f"⚠️ Fichier mal positionné (hors chapitre) : {rel_path}")
                fichiers_orphelins.append((chemin_complet, parts))

    print("\n--------------------------------------------------")
    if not fichiers_orphelins:
        print("✅ Tous les exercices et cours sont correctement rangés dans leurs chapitres respectifs !")
        return

    print(f"📌 {len(fichiers_orphelins)} fichier(s) nécessite(nt) un reclassement.\n")

    # Tenter de reclasser les fichiers orphelins en lisant leur en-tête
    for chemin_f, parts in fichiers_orphelins:
        niveau_trouve = None
        matiere_trouvee = None
        chapitre_trouve = None

        # 1. Tenter d'extraire des infos depuis le contenu du fichier
        try:
            with open(chemin_f, "r", encoding="utf-8") as f:
                contenu = f.read()
                
                # Chercher le niveau dans le contenu
                for niv in NIVEAUX_VALIDES:
                    if re.search(rf"\b{niv}\b", contenu, re.IGNORECASE):
                        niveau_trouve = niv
                        break
        except Exception as e:
            print(f"Impossible de lire {chemin_f}: {e}")
            continue

        # Si le niveau a été identifié et qu'il manque un dossier chapitre
        if len(parts) == 3: # Ex: seconde/mathematiques/exercice-1.md
            niveau_trouve = parts[0]
            matiere_trouvee = parts[1]
            # Assigner à un chapitre générique 'divers' si non spécifié
            chapitre_trouve = "exercices-generaux"

        elif len(parts) == 2: # Ex: seconde/exercice-1.md
            niveau_trouve = parts[0]
            matiere_trouvee = "general"
            chapitre_trouve = "exercices-generaux"

        if niveau_trouve and matiere_trouvee and chapitre_trouve:
            nouveau_dossier = os.path.join(DOCS_DIR, niveau_trouve, matiere_trouvee, chapitre_trouve)
            nouveau_chemin = os.path.join(nouveau_dossier, os.path.basename(chemin_f))

            os.makedirs(nouveau_dossier, exist_ok=True)
            shutil.move(chemin_f, nouveau_chemin)
            print(f"🚚 Déplacé : {parts[-1]} ➔ {niveau_trouve}/{matiere_trouvee}/{chapitre_trouve}/")
            fichiers_deplaces += 1

    print(f"\n🎉 Opération terminée ! {fichiers_deplaces} fichier(s) réorganisé(s).")

if __name__ == "__main__":
    analyser_et_ranger()