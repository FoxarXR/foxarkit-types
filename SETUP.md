# Setting up foxarkit-types on npm

## 1. Create an npm account (if not already done)

Go to [npmjs.com](https://www.npmjs.com/) and create an account.

## 2. Create a @foxar organization on npm

1. Sign in to [npmjs.com](https://www.npmjs.com/)
2. Go to Settings → Organizations
3. Create a new organization named `foxar`

## 3. Generate an npm Access Token

1. Go to Account → Access Tokens
2. Generate New Token → Classic Token
3. Type: **Automation** (for CI/CD)
4. Copy the token

## 4. Add the token to GitHub secrets

In the `FoxarXR/foxarkit-types` repo:
1. Settings → Secrets and variables → Actions
2. New repository secret:
   - Name: `NPM_TOKEN`
   - Value: [paste the npm token]

## 5. Initialize the Git repo

```bash
cd /Users/z98/DEV_FOXAR/foxarkit-types

git init
git add .
git commit -m "chore: initial commit"

# On GitHub, create the repo FoxarXR/foxarkit-types
git remote add origin https://github.com/FoxarXR/foxarkit-types.git
git branch -M main
git push -u origin main
```

## 6. Configure the secret in FoxarKit

In the `FoxarKit` repo:
1. Settings → Secrets and variables → Actions
2. New repository secret:
   - Name: `FOXARKIT_TYPES_TOKEN`
   - Value: [GitHub Personal Access Token with `repo` permissions]

## 7. Automatic workflow

### Local (release.sh)
1. Run `./Scripts/release.sh` in FoxarKit
2. Types are generated in `generated/types/` and committed
3. FoxarKit is tagged and pushed

### Remote (GitHub Actions)
1. FoxarKit workflow detects the new tag
2. Copies types from `generated/types/` (already committed)
3. Bumps version and pushes to foxarkit-types
4. foxarkit-types workflow publishes to npm automatically

## 8. Usage in fxr-app

```bash
cd fxr-app
pnpm add @foxar/foxarkit-types
```

In your code:

```typescript
import type { FoxarExports } from '@foxar/foxarkit-types'
```

## Manual test (first time)

To manually publish the first version:

```bash
cd /Users/z98/DEV_FOXAR/foxarkit-types

# Login to npm
npm login

# Publish
npm publish --access public
```

After that, everything will be automatic! ✅
