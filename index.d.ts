// Auto-generated from FoxarKit WASM exports
// DO NOT EDIT MANUALLY
// Generated: 2025-11-30T12:31:46Z

export type FoxarExports = {
  memory: WebAssembly.Memory
  getLocalizedString(key: number, languageCode: number, defaultValue: number): number
  getAvailableLanguages(): number
  getAllTranslations(key: number): number
  registerLocalizedString(key: number, defaultValue: number, frenchValue: number, spanishValue: number): void
  write_byte(pointer: number, value: number): void
  malloc(size: number): number
  free(pointer: number): void
  fxr_add(lhs: number, rhs: number): number
  concatenate(s1: number, s2: number): number
}
