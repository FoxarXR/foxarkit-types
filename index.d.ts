// Auto-generated from FoxarKit WASM exports
// DO NOT EDIT MANUALLY
// Generated: 2025-12-01T20:13:27Z

export type FoxarExports = {
  memory: WebAssembly.Memory
  observable_did_change(idPtr: number, jsonPtr: number): number
  observable_get_value(idPtr: number): number
  observable_get_all_ids(): number
  observable_get_all_values(): number
  observable_exists(idPtr: number): number
  observable_count(): number
  observable_flush_messages(): number
  observable_pending_message_count(): number
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
