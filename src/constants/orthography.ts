import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  "hello",
  "world"
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
