# TP 1 - Angular : Formulaires (ENSA Fès)

## Lancer le projet
```bash
npm install
npm start        # puis ouvrir http://localhost:4200
```
Angular Material est déjà configuré (équivalent de `ng add @angular/material`).

L'application affiche deux onglets :
- **Exercice 1** : `src/app/template-driven/` (approche Template-Driven uniquement)
- **Exercice 2** : `src/app/reactive/` (approche Reactive Forms uniquement)

## Règles de validation (identiques dans les 2 exercices)
| Champ | Règles |
|---|---|
| Nom complet | obligatoire, min. 3 caractères |
| Email | obligatoire, format valide |
| Âge | obligatoire, >= 18 |
| Pays | obligatoire (France, Belgique, Suisse, Canada) |

Le bouton « S'inscrire » est désactivé tant que le formulaire est invalide ;
après soumission valide, un récapitulatif JSON s'affiche sous le formulaire (et dans la console).

## Question de réflexion

**Principales différences**

- **Template-Driven** : le formulaire est défini dans le template HTML (`ngModel`,
  attributs `required`, `minlength`, `email`, `min`). Angular crée les `FormControl`
  en coulisses. C'est rapide à écrire, mais la logique de validation est dispersée dans le HTML,
  la création des contrôles est asynchrone, et c'est plus difficile à tester unitairement.
- **Reactive Forms** : le modèle du formulaire (`FormGroup`, `FormControl`, validateurs) est
  défini explicitement dans la classe TypeScript. Il est synchrone, typé, facile à tester,
  et offre un contrôle fin (`valueChanges`, `setValue`, `markAllAsTouched`, champs dynamiques
  avec `FormArray`, validateurs personnalisés ou asynchrones).

**Quand choisir l'une ou l'autre ?**

- Template-Driven : formulaires simples et petits (login, contact, recherche), prototypes rapides.
- Reactive Forms : formulaires complexes ou évolutifs (validations croisées, champs dynamiques,
  formulaires multi-étapes), besoin de tests unitaires, projets d'entreprise de grande taille.
  C'est généralement l'approche recommandée pour les applications professionnelles.
