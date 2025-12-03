// Auto-generated from FoxarKit WASM exports
// DO NOT EDIT MANUALLY
// Generated: 2025-12-03T16:16:53Z

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
  getLocalizedString(keyPtr: number, languageCodePtr: number, defaultValuePtr: number): number
  getAvailableLanguages(): number
  getAllTranslations(keyPtr: number): number
  registerTranslation(keyPtr: number, languageCodePtr: number, valuePtr: number): void
  registerTranslationsFromJSON(keyPtr: number, translationsJSONPtr: number): void
  write_byte(pointer: number, value: number): void
  malloc(size: number): number
  free(pointer: number): void
  fxr_add(lhs: number, rhs: number): number
  concatenate(s1Ptr: number, s2Ptr: number): number
}
