# @foxar/foxarkit-types

TypeScript definitions for [FoxarKit](https://https://github.com/FoxarXR/FoxarKit) WASM exports.

## Installation

```bash
npm install @foxar/foxarkit-types
```

Or with pnpm:

```bash
pnpm add @foxar/foxarkit-types
```

## Usage

```typescript
import type { FoxarExports } from '@foxar/foxarkit-types'

async function loadFoxarKit() {
  const wasmModule = await WebAssembly.instantiateStreaming(
    fetch('/foxarkit.wasm'),
    { /* imports */ }
  )

  const exports = wasmModule.instance.exports as FoxarExports

  // Type-safe WASM calls
  const result = exports.fxr_add(2, 3)
  console.log(result) // 5
}
```

## Auto-generated

This package is automatically generated from the FoxarKit source code. Do not edit manually.

## License

Proprietary
All rights reserved
© Foxar