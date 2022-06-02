import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  "a",
  "b"
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
