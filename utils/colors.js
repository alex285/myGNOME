import colorPairsPicker from 'color-pairs-picker'
import chroma from 'chroma-js'

import { config } from 'config'


export const colors = colorPairsPicker(config.baseColor, {
  contrast: 0,
})

const darker = chroma(config.baseColor).darken(0).hex()
export const activeColors = colorPairsPicker(darker, {
  contrast: 0,
})
