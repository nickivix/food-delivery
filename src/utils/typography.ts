export type FontWeight = 'regular' | 'semibold' | 'bold'

export const primaryFont: Record<FontWeight, string> = {
  regular: 'SFProDisplay-Regular',
  semibold: 'SFProDisplay-Semibold',
  bold: 'SFProDisplay-Bold',
}

export type SecondaryFonts = 'Roboto'

export const secondaryFonts: Record<
  SecondaryFonts,
  Record<FontWeight, string>
> = {
  Roboto: {
    regular: 'Roboto-Regular',
    semibold: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  },
}

export const typeScale = {
  heading1: '18px',
  heading2: '17px',
  heading3: '16px',
  heading4: '15px',
  description: '14px',
  paragraph: '13px',
  details: '11px',
}

export const lineHeight = {
  heading1: '24px',
  heading2: '22px',
  heading3: '20px',
  heading4: '18px',
  description: '16px',
  paragraph: '14px',
  details: '12px',
}
