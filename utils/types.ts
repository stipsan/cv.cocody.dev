import type { ColorHueConfig } from '@sanity/color'

export interface Hue extends Omit<ColorHueConfig, 'title' | 'midPoint'> {
  // @TODO convert ColorTintKey from @sanity/color into numbers and reuse
  midPoint: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
}

export interface Hues {
  default: Hue
  transparent: Hue
  primary: Hue
  positive: Hue
  caution: Hue
  critical: Hue
}
