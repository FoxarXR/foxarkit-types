// Auto-generated from FoxarKit WASM exports
// DO NOT EDIT MANUALLY
// Generated: 2025-12-11T08:37:37Z

export type FoxarExports = {
  memory: WebAssembly.Memory
  metadata_get(keyPtr: number, languagePtr: number): number
  metadata_get_translations(keyPtr: number): number
  metadata_get_all(languagePtr: number): number
  metadata_get_keys(): number
  metadata_exists(keyPtr: number): number
  observable_did_change(idPtr: number, jsonPtr: number): number
  observable_get_value(idPtr: number): number
  observable_get_all_ids(): number
  observable_get_all_values(): number
  observable_exists(idPtr: number): number
  observable_count(): number
  observable_flush_messages(): number
  observable_pending_message_count(): number
  scheduler_tick(deltaMs: number): number
  scheduler_active_count(): number
  scheduler_current_time(): number
  scheduler_cleanup(): void
  scheduler_reset(): void
  getLocalizedString(keyPtr: number, languageCodePtr: number, defaultValuePtr: number): number
  getAvailableLanguages(): number
  getAllTranslations(keyPtr: number): number
  registerTranslation(keyPtr: number, languageCodePtr: number, valuePtr: number): void
  registerTranslationsFromJSON(keyPtr: number, translationsJSONPtr: number): void
  view_get_tree(): number
  view_get_version(): number
  view_action_triggered(actionIdPtr: number): number
  view_register_action(actionIdPtr: number): number
  view_invalidate(): void
  view_set_color_scheme(schemePtr: number): number
  view_set_locale(localePtr: number): number
  view_flush_messages(): number
  write_byte(pointer: number, value: number): void
  malloc(size: number): number
  free(pointer: number): void
  fxr_add(lhs: number, rhs: number): number
  concatenate(s1Ptr: number, s2Ptr: number): number
}
