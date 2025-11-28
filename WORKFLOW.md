# TypeScript Types Workflow

## How it works

The TypeScript types for FoxarKit WASM exports are automatically generated and published during FoxarKit releases.

## Release Process

### Step 1: Local generation

When you run `./Scripts/release.sh` in FoxarKit:

1. **Generates TypeScript types** in `generated/types/index.d.ts`
2. **Commits types with the release** (versioned in git)
3. **Creates git tag** and pushes FoxarKit

### Step 2: Automatic publishing (GitHub Actions)

When the FoxarKit tag is pushed:

1. **GitHub Actions** detects the new tag
2. **Copies types** from `generated/types/index.d.ts` (no re-generation)
3. **Bumps version** in foxarkit-types package.json
4. **Commits and pushes** to FoxarXR/foxarkit-types
5. **foxarkit-types Actions** publishes to npm automatically

## Manual Generation (Development)

If you need to generate types manually without releasing:

```bash
cd /Users/z98/DEV_FOXAR/Foxar\ KIT/FoxarKit

swift Scripts/generate-wasm-types.swift \
  Sources/FoxarKit/FoxarKit.swift \
  generated/types/index.d.ts

# View generated types
cat generated/types/index.d.ts
```

## Repository Structure

```
FoxarKit/
├── Sources/FoxarKit/FoxarKit.swift           # WASM exports (source)
├── Scripts/
│   ├── generate-wasm-types.swift             # Generator script
│   └── release.sh                            # Release script (generates & commits types)
├── generated/types/
│   └── index.d.ts                            # Generated types (versioned in git)
└── .github/workflows/
    └── publish-types.yml                     # Auto-publish workflow

foxarkit-types/  (separate repo on GitHub)
├── index.d.ts                                # Published types
├── package.json                              # npm package
└── .github/workflows/
    └── publish-npm.yml                       # Auto-publish to npm
```

## Version Synchronization

- **FoxarKit**: Uses git tags (e.g., `v1.2.3`)
- **foxarkit-types**: Uses npm semver (e.g., `1.2.3`)
- **Automatic bump**: patch version on each FoxarKit release

## Troubleshooting

### Types not generated locally

Check that the script ran without errors:
```bash
cd /Users/z98/DEV_FOXAR/Foxar\ KIT/FoxarKit
ls -la generated/types/
cat generated/types/index.d.ts
```

### Types not published to npm

1. Check GitHub Actions logs in `FoxarXR/foxarkit-types`
2. Verify `NPM_TOKEN` secret is set correctly
3. Ensure npm org `@foxar` exists and you have access

### Manual publish

If automatic publish fails:

```bash
cd /Users/z98/DEV_FOXAR/foxarkit-types
npm version patch
npm publish --access public
git add .
git commit -m "chore: bump version"
git push
```
