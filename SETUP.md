# Configuration de foxarkit-types sur npm

## 1. Créer un compte npm (si pas déjà fait)

Aller sur [npmjs.com](https://www.npmjs.com/) et créer un compte.

## 2. Créer une organisation @foxar sur npm

1. Se connecter sur [npmjs.com](https://www.npmjs.com/)
2. Aller dans Settings → Organizations
3. Créer une nouvelle organisation nommée `foxar`

## 3. Générer un Access Token npm

1. Aller dans Account → Access Tokens
2. Generate New Token → Classic Token
3. Type: **Automation** (pour les CI/CD)
4. Copier le token

## 4. Ajouter le token aux secrets GitHub

Dans le repo `foxar/foxarkit-types` :
1. Settings → Secrets and variables → Actions
2. New repository secret:
   - Name: `NPM_TOKEN`
   - Value: [coller le token npm]

## 5. Initialiser le repo Git

```bash
cd /Users/z98/DEV_FOXAR/foxarkit-types

git init
git add .
git commit -m "chore: initial commit"

# Sur GitHub, créer le repo foxar/foxarkit-types
git remote add origin https://github.com/FoxarXR/foxarkit-types.git
git branch -M main
git push -u origin main
```

## 6. Configurer le secret dans FoxarKit

Dans le repo `FoxarKit` :
1. Settings → Secrets and variables → Actions
2. New repository secret:
   - Name: `FOXARKIT_TYPES_TOKEN`
   - Value: [Personal Access Token GitHub avec permissions `repo`]

## 7. Workflow automatique

Quand tu modifies `Sources/FoxarKit/FoxarKit.swift` dans FoxarKit :

1. **FoxarKit** GitHub Actions génère les types
2. Push vers **foxarkit-types** repo
3. **foxarkit-types** GitHub Actions publie sur npm
4. Version bump automatique

## 8. Utiliser dans fxr-app

```bash
cd fxr-app
pnpm add @foxar/foxarkit-types
```

Dans le code :

```typescript
import type { FoxarExports } from '@foxar/foxarkit-types'
```

## Test manuel (première fois)

Pour publier manuellement la première version :

```bash
cd /Users/z98/DEV_FOXAR/foxarkit-types

# Se connecter à npm
npm login

# Publier
npm publish --access public
```

Après ça, tout sera automatique ! ✅
