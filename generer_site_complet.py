import os
from dotenv import load_dotenv
from google import genai

# Charge les variables d'environnement depuis le fichier .env
load_dotenv()

# Récupère la clé de manière sécurisée
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

# -------------------------------------------------------------------
# CHAPITRES RESTANTS À GÉNÉRER POUR COUVRIR 100% DU PROGRAMME
# -------------------------------------------------------------------
PROGRAMME_LYCEE = {
    "premiere": {
        "svt": [
            {
                "id": "systeme-nerveux",
                "nom": "Système nerveux et mouvement",
                "themes": [
                    "Commande nerveuse du mouvement et reflexe myotatique",
                    "Transmission synaptique et mode d'action des molécules psychoactives",
                    "Plasticité cérébrale, apprentissage et récupération fonctionnelle"
                ]
            }
        ]
    }
}

# -------------------------------------------------------------------
# GENERATION ET PROTECTION DES FICHIERS EXISTANTS
# -------------------------------------------------------------------
def executer_prompt_gemini(prompt: str) -> str:
    """Appelle Gemini avec gestion des modèles valides et retries."""
    modeles_valides = ['gemini-3.8-flash', 'gemini-3.5-flash-lite']
    
    for model_name in modeles_valides:
        delai = 2
        for tentative in range(1, 4):
            try:
                response = client.models.generate_content(
                    model=model_name,
                    contents=prompt
                )
                return response.text
            except APIError as e:
                if getattr(e, 'code', None) in [503, 429] or "UNAVAILABLE" in str(e) or "high demand" in str(e):
                    time.sleep(delai)
                    delai *= 2
                else:
                    break
            except Exception:
                break
    return None

def generer_fiche_cours(niveau: str, matiere: str, chapitre_nom: str, chemin_fichier: str):
    if os.path.exists(chemin_fichier):
        print(f"⏩ [CONSERVÉ] Fiche de cours déjà présente : {chemin_fichier}")
        return

    prompt = f"""
    Tu es un professeur agrégé de l'Éducation Nationale française.
    Rédige une FICHE DE COURS complète, rigoureuse et parfaitement neutre scientifiquement en Markdown :
    - Niveau : {niveau.capitalize()}
    - Matière : {matiere.replace('-', ' ').capitalize()}
    - Chapitre : {chapitre_nom}

    CONSIGNES DE FORMATAGE RIGOUREUSES :
    1. En-tête YAML obligatoire :
---
title: "Cours : {chapitre_nom}"
description: "Synthèse officielle du cours, définitions et propriétés fondamentales."
---

    2. LaTeX IMPÉRATIF ($inline$ et $$bloc$$).
       - N'insère AUCUN accent (`é`, `è`, `à`) ni symbole `€` directement à l'intérieur des expressions mathématiques.
       - Pour écrire du texte ou des unités dans une formule, utilise exclusivement `\\text{{...}}` (exemple: `$x \\text{{ euros}}$` ou `$v = 10 \\text{{ m/s}}$`).

    3. Structure exacte du cours :
       - ## 📌 1. Notions clés & Définitions
       - ## 📐 2. Formules et Propriétés fondamentales
       - ## 💡 3. Exemple d'application résolu
       - ## ⚠️ 4. Pièges fréquents & Conseils pour l'évaluation
    """

    print(f"📘 [{niveau.upper()} > {matiere}] Génération du COURS : {chapitre_nom}...")
    contenu = executer_prompt_gemini(prompt)

    if contenu:
        os.makedirs(os.path.dirname(chemin_fichier), exist_ok=True)
        with open(chemin_fichier, "w", encoding="utf-8") as f:
            f.write(contenu)
        print(f"   ✅ NOUVEAU cours enregistré : {chemin_fichier}")

def generer_exercice(niveau: str, matiere: str, chapitre_nom: str, theme: str, numero_ex: int, chemin_fichier: str):
    if os.path.exists(chemin_fichier):
        print(f"⏩ [CONSERVÉ] Exercice {numero_ex} déjà présent : {chemin_fichier}")
        return

    prompt = f"""
    Tu es un professeur agrégé de l'Éducation Nationale française.
    Rédige une fiche d'exercice rigoureuse, scientifique et pédagogique en Markdown :
    - Niveau : {niveau.capitalize()}
    - Matière : {matiere.replace('-', ' ').capitalize()}
    - Chapitre : {chapitre_nom}
    - Thème d'application : {theme}

    CONSIGNES PEDAGOGIQUES ET ESPRIT CRITIQUE :
    1. En-tête YAML obligatoire :
---
title: "Exercice {numero_ex} : {theme}"
description: "Application pratique du chapitre {chapitre_nom}"
---

    2. RIGOUREUSEMENT NUANCÉ ET SCIENTIFIQUE : 
       - Évite les jugements de valeur ou affirmations dogmatiques.
       - Présente des données chiffrées réelles, des hypothèses explicites, et fait analyser les limites des modèles ou les compromis complexes (ex: coûts/bénéfices, efficacité/faisabilité, incertitudes de mesure).
       - Aide l'élève à développer son esprit critique par le calcul, la logique et la démonstration.

    3. LaTeX IMPÉRATIF ($inline$ et $$bloc$$) :
       - Utilise systématiquement `\\text{{...}}` pour le texte et les unités dans le mode mathématique (ex: `$100 \\text{{ €}}$`).

    4. Structure exacte :
       - ### 🌐 Contexte & Données scientifiques
       - ### ❓ Énoncé (3 à 4 questions progressives)
       - ### 💡 Indice de méthode
       - ### 📋 Correction détaillée pas à pas
    """

    print(f"✏️ [{niveau.upper()} > {matiere}] Génération EXERCICE {numero_ex} : {theme}...")
    contenu = executer_prompt_gemini(prompt)

    if contenu:
        os.makedirs(os.path.dirname(chemin_fichier), exist_ok=True)
        with open(chemin_fichier, "w", encoding="utf-8") as f:
            f.write(contenu)
        print(f"   ✅ NOUVEL exercice enregistré : {chemin_fichier}")

# -------------------------------------------------------------------
# EXÉCUTION DE LA GÉNÉRATION DE MASSE
# -------------------------------------------------------------------
if __name__ == "__main__":
    print("🚀 DÉMARRAGE DE LA GÉNÉRATION DES CHAPITRES RESTANTS...\n")

    total_nouveaux = 0
    for niveau, matieres in PROGRAMME_LYCEE.items():
        for dossier_matiere, chapitres in matieres.items():
            for chap in chapitres:
                chap_id = chap["id"]
                chap_nom = chap["nom"]
                
                # 1. Fiche de cours
                chemin_cours = f"src/content/docs/{niveau}/{dossier_matiere}/{chap_id}/index.md"
                if not os.path.exists(chemin_cours):
                    generer_fiche_cours(niveau, dossier_matiere, chap_nom, chemin_cours)
                    total_nouveaux += 1
                    time.sleep(1)

                # 2. Exercices
                for i, theme in enumerate(chap["themes"], start=1):
                    chemin_ex = f"src/content/docs/{niveau}/{dossier_matiere}/{chap_id}/exercice-{i}.md"
                    if not os.path.exists(chemin_ex):
                        generer_exercice(niveau, dossier_matiere, chap_nom, theme, i, chemin_ex)
                        total_nouveaux += 1
                        time.sleep(1)

    print(f"\n🎉 TOUS LES CHAPITRES SONT DÉSORMAIS ENREGISTRÉS ! COUVERTURE DU SITES : 100%.")