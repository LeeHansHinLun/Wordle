import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  "a",
  "b",
  "h",
  "e",
  "l",
  "o"
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
