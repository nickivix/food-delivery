import 'styled-components'
import { DefaultTheme } from 'styled-components'
import colors from './colors'
import {
  typeScale,
  lineHeight,
  primaryFont,
  secondaryFonts,
} from './typography'
import { borderRadius, shadow } from './visual'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryFont: typeof primaryFont
    secondaryFonts: typeof secondaryFonts
    colors: typeof colors
    typeScale: typeof typeScale
    lineHeight: typeof lineHeight
    borderRadius: typeof borderRadius
    shadow: typeof shadow
  }
}

export const theme: DefaultTheme = {
  primaryFont,
  secondaryFonts,
  colors,
  typeScale,
  lineHeight,
  borderRadius,
  shadow,
}
