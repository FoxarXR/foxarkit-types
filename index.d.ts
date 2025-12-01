// Auto-generated from FoxarKit WASM exports
// DO NOT EDIT MANUALLY
// Generated: 2025-12-01T07:33:59Z

export type FoxarExports = {
  memory: WebAssembly.Memory
  getLocalizedString(key: number, languageCode: number, defaultValue: number): number
  getAvailableLanguages(): number
  getAllTranslations(key: number): number
  registerTranslation(key: number, languageCode: number, value: number): void
  registerTranslationsFromJSON(key: number, translationsJSON: number): void
  write_byte(pointer: number, value: number): void
  malloc(size: number): number
  free(pointer: number): void
  fxr_add(lhs: number, rhs: number): number
  concatenate(s1: number, s2: number): number
}
