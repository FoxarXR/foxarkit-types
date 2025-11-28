// Auto-generated from FoxarKit WASM exports
// DO NOT EDIT MANUALLY
// Generated: 2025-11-28T12:40:12Z

export type FoxarExports = {
  memory: WebAssembly.Memory
  fxr_add(lhs: number, rhs: number): number
  write_byte(pointer: number, value: number): void
  allocate(size: number): number
  deallocate(pointer: number, size: number): void
  concatenate(s1: number, s2: number): number
}
