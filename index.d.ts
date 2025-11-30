// Auto-generated from FoxarKit WASM exports
// DO NOT EDIT MANUALLY
// Generated: 2025-11-30T10:30:33Z

export type FoxarExports = {
  memory: WebAssembly.Memory
  getLocalizedString(): void
  getAvailableLanguages(): unknown
  getAllTranslations(key: number): unknown
  registerLocalizedString(): void
  write_byte(pointer: number, value: number): void
  malloc(size: number): number
  free(pointer: number): void
  fxr_add(lhs: number, rhs: number): number
  concatenate(s1: number, s2: number): number
}
