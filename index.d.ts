// Auto-generated from FoxarKit WASM exports
// DO NOT EDIT MANUALLY
// Generated: 2026-01-14T17:09:54Z

export type FoxarExports = {
  memory: WebAssembly.Memory
  get_build_info(): number
  asset_get_lights(assetNamePtr: number): number
  asset_register(assetNamePtr: number): number
  asset_is_registered(assetNamePtr: number): number
  foxarkit_set_platform(platformPtr: number): number
  foxarkit_get_platform(): number
  foxarkit_set_horizontal_size_class(valuePtr: number): number
  foxarkit_set_vertical_size_class(valuePtr: number): number
  foxarkit_get_horizontal_size_class(): number
  foxarkit_get_vertical_size_class(): number
  metadata_get(keyPtr: number, languagePtr: number): number
  metadata_get_translations(keyPtr: number): number
  metadata_get_all(languagePtr: number): number
  metadata_get_keys(): number
  metadata_exists(keyPtr: number): number
  get_observable_json(observableId: number): number
  get_observable_string_id(observableId: number): number
  observable_did_change(idPtr: number, jsonPtr: number): number
  observable_get_value(idPtr: number): number
  observable_get_all_ids(): number
  observable_get_all_values(): number
  observable_exists(idPtr: number): number
  observable_count(): number
  observable_flush_messages(): number
  observable_pending_message_count(): number
  execute_callback(callbackId: number): void
  scheduler_tick(deltaMs: number): number
  scheduler_active_count(): number
  scheduler_current_time(): number
  scheduler_cleanup(): void
  scheduler_reset(): void
  localization_get_string(keyPtr: number, languageCodePtr: number, defaultValuePtr: number): number
  getAvailableLanguages(): number
  getAllTranslations(keyPtr: number): number
  registerTranslation(keyPtr: number, languageCodePtr: number, valuePtr: number): void
  registerTranslationsFromJSON(keyPtr: number, translationsJSONPtr: number): void
  view_get_tree(): number
  view_get_version(): number
  view_action_triggered(actionIdPtr: number): number
  view_register_action(actionIdPtr: number): number
  view_invalidate(): void
  view_needs_update(): number
  view_flush(): void
  view_set_color_scheme(schemePtr: number): number
  view_set_locale(localePtr: number): number
  execute_ready_callback(callbackId: number): number
  view_flush_messages(): number
  write_byte(pointer: number, value: number): void
  malloc(size: number): number
  free(pointer: number): void
  fxr_add(lhs: number, rhs: number): number
  concatenate(s1Ptr: number, s2Ptr: number): number
}
