// Auto-generated from FoxarKit WASM exports
// DO NOT EDIT MANUALLY
// Generated: 2025-11-30T10:14:38Z

export type FoxarExports = {
  memory: WebAssembly.Memory
  getLocalizedString(): void
  getAvailableLanguages(): unknown
  getAllTranslations(key: number): unknown
  registerLocalizedString(): void
  write_byte(pointer: number, value: number): void
  allocate(size: number): number
  deallocate(pointer: number, size: number): void
  fxr_add(lhs: number, rhs: number): number
  concatenate(s1: number, s2: number): number
}
