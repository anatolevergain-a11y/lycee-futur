import os
import time
from google import genai
from google.genai.errors import APIError

# Initialisation du client
client = genai.Client()

def generer_exercice(niveau: str, matiere: str, chapitre: str, theme_moderne: str, chemin_fichier: str):
    prompt = f"""
    Tu es un professeur expert du programme officiel du Lycée français (Éducation Nationale).
    Rédige une fiche d'exercice complète et motivante en Markdown.

    - Niveau : {niveau}
    - Matière : {matiere}
    - Chapitre : {chapitre}
    - Thème d'ancrage moderne : {theme_moderne}

    CONSIGNES DE FORMATAGE RIGOUREUSES :
    1. Le fichier DOIT COMMENCER OBLIGATOIREMENT par cet en-tête YAML :
---
title: "Titre de l'exercice"
description: "Description courte et captivante"
---

    2. Les équations mathématiques ou physiques doivent utiliser la syntaxe LaTeX :
       - $formule$ pour le texte en ligne
       - $$formule$$ pour les équations en bloc centré

    3. Structure de la fiche :
       - ### 🌐 Contexte moderne & concret (3-4 phrases d'introduction)
       - ### ❓ Énoncé (3 à 4 questions progressives)
       - ### 💡 Indice (Un conseil pour guider l'élève)
       - ### 📋 Correction détaillée (Pas à pas avec explications et calculs)
    """

    print(f"⏳ Génération de l'exercice pour {niveau} - {matiere} ({theme_moderne})...")

    # Modèles valides indiqués par l'API Google
    modeles_valides = ['gemini-3.8-flash', 'gemini-3.5-flash-lite']
    reponse_texte = None

    for model_name in modeles_valides:
        delai = 2  # Délai initial de pause en secondes
        for tentative in range(1, 4):
            try:
                response = client.models.generate_content(
                    model=model_name,
                    contents=prompt
                )
                reponse_texte = response.text
                print(f"   ► Généré avec succès via le modèle : {model_name}")
                break
            except APIError as e:
                # En cas de surcharge (503 / 429), on attend progressivement (2s, 4s, 8s)
                if getattr(e, 'code', None) in [503, 429] or "UNAVAILABLE" in str(e) or "high demand" in str(e):
                    print(f"⚠️ Serveur occupé pour {model_name} (tentative {tentative}/3). Pause de {delai}s...")
                    time.sleep(delai)
                    delai *= 2  # Augmente le temps d'attente
                else:
                    print(f"⚠️ Erreur avec {model_name}: {e}")
                    break
            except Exception as e:
                print(f"⚠️ Erreur : {e}")
                break
        
        if reponse_texte:
            break

    if not reponse_texte:
        print(f"❌ Impossible de générer la fiche : {chemin_fichier}\n")
        return

    # Création du dossier et enregistrement
    os.makedirs(os.path.dirname(chemin_fichier), exist_ok=True)
    with open(chemin_fichier, "w", encoding="utf-8") as f:
        f.write(reponse_texte)

    print(f"✅ Fichier sauvegardé dans : {chemin_fichier}\n")


if __name__ == "__main__":
    # Test 1 : Physique-Chimie Terminale
    generer_exercice(
        niveau="Terminale",
        matiere="Physique-Chimie",
        chapitre="Stockage et conversion d'énergie électrique",
        theme_moderne="Autonomie et rendement énergétique d'une voiture électrique",
        chemin_fichier="src/content/docs/terminale/physique-voiture-electrique.md"
    )

    # Test 2 : SVT Première
    generer_exercice(
        niveau="Premiere",
        matiere="SVT",
        chapitre="Nourrir l'humanité et gestion des sols",
        theme_moderne="Empreinte carbone et chimie des engrais en agriculture biologique vs conventionnelle",
        chemin_fichier="src/content/docs/premiere/svt-agriculture-durable.md"
    )