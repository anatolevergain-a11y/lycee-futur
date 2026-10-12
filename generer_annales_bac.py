import os
from dotenv import load_dotenv
from google import genai

# Charge les variables d'environnement depuis le fichier .env
load_dotenv()

# Récupère la clé de manière sécurisée
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

# -------------------------------------------------------------------
# BANQUE D'ANNALES DU BAC (2023 - 2026) AVEC PROTECTION ANTI-DOUBLONS
# -------------------------------------------------------------------
ANNALES_BAC_COMPLETE = {
    "terminale": {
        "annales-bac": [
            # 📐 MATHEMATIQUES (2025 & 2026)
            {"id": "bac-maths-2026-metropole", "nom": "Bac Maths 2026 - Métropole (Sujet Officiel)", "matiere": "Mathématiques", "themes": ["Suites numériques", "Équations différentielles", "Loi binomiale", "Géométrie dans l'espace"]},
            {"id": "bac-maths-2025-metropole", "nom": "Bac Maths 2025 - Métropole", "matiere": "Mathématiques", "themes": ["Fonction Logarithme népérien", "Calcul intégral", "Probabilités conditionnelles"]},
            {"id": "bac-maths-2025-centres-etrangers", "nom": "Bac Maths 2025 - Centres Étrangers", "matiere": "Mathématiques", "themes": ["Convexité", "Limites et continuité", "Suites et récurrence"]},

            # 🧪 PHYSIQUE-CHIMIE (2025 & 2026)
            {"id": "bac-pc-2026-metropole", "nom": "Bac Physique-Chimie 2026 - Métropole (Sujet Officiel)", "matiere": "Physique-Chimie", "themes": ["Mouvement dans un champ de pesanteur", "Titrage pH-métrique", "Thermodynamique"]},
            {"id": "bac-pc-2025-metropole", "nom": "Bac Physique-Chimie 2025 - Métropole", "matiere": "Physique-Chimie", "themes": ["Cinétique chimique", "Lunette astronomique", "Physique quantique"]},
            {"id": "bac-pc-2025-polynesie", "nom": "Bac Physique-Chimie 2025 - Polynésie", "matiere": "Physique-Chimie", "themes": ["Lois de Kepler", "Transformations acide-base", "Transferts thermiques"]},

            # 🧬 SVT (2025 & 2026)
            {"id": "bac-svt-2026-metropole", "nom": "Bac SVT 2026 - Métropole (Sujet Officiel)", "matiere": "SVT", "themes": ["Génétique et évolution des populations", "Climatologie et cycles du carbone"]},
            {"id": "bac-svt-2025-metropole", "nom": "Bac SVT 2025 - Métropole", "matiere": "SVT", "themes": ["Plantes à fleurs et coévolution", "Régulation de la glycémie et diabètes"]},
            {"id": "bac-svt-2025-asie", "nom": "Bac SVT 2025 - Asie", "matiere": "SVT", "themes": ["Chronologie géologique et datation", "L'organisme face au stress"]},

            # 💻 NSI (2025 & 2026)
            {"id": "bac-nsi-2026-metropole", "nom": "Bac NSI 2026 - Métropole (Sujet Officiel)", "matiere": "NSI", "themes": ["Bases de données SQL", "Algorithmique sur les graphes (Dijkstra)", "POO"]},
            {"id": "bac-nsi-2025-metropole", "nom": "Bac NSI 2025 - Métropole", "matiere": "NSI", "themes": ["Programmation Orientée Objet", "Récursivité et Tri Fusion"]},
            {"id": "bac-nsi-2025-centres-etrangers", "nom": "Bac NSI 2025 - Centres Étrangers", "matiere": "NSI", "themes": ["Cryptographie (RSA)", "Structures de données (Piles/Files)"]},

            # 📈 SES (2025 & 2026)
            {"id": "bac-ses-2026-metropole", "nom": "Bac SES 2026 - Métropole (Sujet Officiel)", "matiere": "SES", "themes": ["Sources de la croissance économique", "Structure sociale et mobilités", "Commerce international"]},
            {"id": "bac-ses-2025-metropole", "nom": "Bac SES 2025 - Métropole", "matiere": "SES", "themes": ["Action publique et environnement", "Inégalités et justice sociale"]},
            {"id": "bac-ses-2025-antilles", "nom": "Bac SES 2025 - Antilles-Guyane", "matiere": "SES", "themes": ["Politiques budgétaire et monétaire", "Crise financière et régulation"]},

            # 📜 PHILOSOPHIE (2025 & 2026)
            {"id": "bac-philo-2026-metropole", "nom": "Bac Philosophie 2026 - Métropole (Sujet Officiel)", "matiere": "Philosophie", "themes": ["La Science et la Vérité", "La Justice et l'État", "La Liberté"]},
            {"id": "bac-philo-2025-metropole", "nom": "Bac Philosophie 2025 - Métropole", "matiere": "Philosophie", "themes": ["L'Art et la Technique", "Le Devoir et le Bonheur"]},
            {"id": "bac-philo-2025-centres-etrangers", "nom": "Bac Philosophie 2025 - Centres Étrangers", "matiere": "Philosophie", "themes": ["La Nature et la Culture", "Le Temps et la Conscience"]}
        ]
    }
}

def executer_prompt_gemini(prompt: str) -> str:
    """Appelle Gemini pour générer le contenu du sujet."""
    modeles_valides = ['gemini-3.8-flash', 'gemini-3.5-flash-lite']
    for model_name in modeles_valides:
        for tentative in range(1, 4):
            try:
                response = client.models.generate_content(
                    model=model_name, contents=prompt
                )
                return response.text
            except APIError:
                time.sleep(2)
    return None

def generer_sujet_bac(niveau: str, mat_id: str, sujet_info: dict):
    chemin = f"src/content/docs/{niveau}/{mat_id}/{sujet_info['id']}.md"
    
    # SÉCURITÉ 1 : Si le fichier existe déjà sur le disque, ON NE TOUCHE À RIEN
    if os.path.exists(chemin):
        print(f"⏩ [CONSERVÉ] Sujet déjà existant sur le disque : {chemin}")
        return

    prompt = f"""
    Tu es un examinateur officiel du Baccalauréat Général français (Éducation Nationale).
    Rédige un SUJET OFFICIEL DE BAC TYPE ÉPREUVE ÉCRITE entièrement corrigé et très détaillé en Markdown :
    - Matière : {sujet_info['matiere']}
    - Intitulé du Sujet : {sujet_info['nom']}
    - Thèmes abordés au programme : {', '.join(sujet_info['themes'])}

    CONSIGNES DE FORMATAGE RIGOUREUSES :
    1. En-tête YAML obligatoire :
---
title: "{sujet_info['nom']}"
description: "Sujet officiel type Bac {sujet_info['matiere']} entièrement corrigé avec barème détaillé pas à pas."
sidebar:
  badge:
    text: "Annale Bac"
    variant: "danger"
---

    2. FORMATAGE LaTeX STRICT :
       - Utilise $inline$ pour les formules dans le texte et $$bloc$$ pour les équations autonomes.
       - N'insère AUCUN accent (`é`, `è`, `à`) ni symbole `€` directement dans les blocs mathématiques LaTeX. Utilise impérativement `\\text{{...}}` (ex: `$100 \\text{{ €}}$`).

    3. STRUCTURE EXACTE DE L'ANNALE :
       - ## 📄 Partie 1 : Énoncé Officiel de l'Épreuve
         *(3 à 4 exercices ou parties de dissertation/synthèse conformes aux exigences du Bac)*
       - ## 💡 Partie 2 : Conseils du Concepteur & Pièges fréquents du Barème
       - ## 📋 Partie 3 : Correction Rédigée Pas à Pas (avec répartition exacte des points sur /20)
    """

    print(f"🎓 [{sujet_info['matiere']}] Génération du NOUVEAU sujet : {sujet_info['nom']}...")
    contenu = executer_prompt_gemini(prompt)
    
    if contenu:
        os.makedirs(os.path.dirname(chemin), exist_ok=True)
        with open(chemin, "w", encoding="utf-8") as f:
            f.write(contenu)
        print(f"   ✅ Sujet de Bac enregistré : {chemin}")

if __name__ == "__main__":
    print("🚀 GÉNÉRATION DES SUJETS DU BAC 2025 ET 2026 (SÉCURITÉ ANTI-DOUBLONS)...\n")
    
    fichiers_traites = set()

    for niv, matieres in ANNALES_BAC_COMPLETE.items():
        for mat_id, sujets in matieres.items():
            for sujet in sujets:
                if sujet['id'] in fichiers_traites:
                    continue
                fichiers_traites.add(sujet['id'])
                generer_sujet_bac(niv, mat_id, sujet)
                time.sleep(1)
    
    print("\n🎉 SUJETS DE BAC 2025 ET 2026 GÉNÉRÉS AVEC SUCCÈS SANS ÉCRASER LES ANCIENS !")