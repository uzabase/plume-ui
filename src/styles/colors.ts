const baseColors = {
  white00: '#fff',
  white10: '#fafafa',
  black10: '#161616',
  black20: '#2a2a2a',
  black30: '#333',
  gray30: '#f8f8f8',
  gray40: '#f1f1f1',
  gray50: '#e0e0e0',
  gray60: '#ccc',
  gray70: '#aaa',
  gray80: '#929292',
  gray90: '#6F6F6F',
  red50: '#E8442E',
  red60: '#DB351F',
  red70: '#C92812',
  brown30: '#ece8e7',
  blue50: '#2666BF',
  cyan10: '#f0f6f8',
  cyan20: '#d8ecf0',
  cyan30: '#c8e8ef',
  cyan40: '#a4dae6',
  cyan50: '#84cad9',
  cyan60: '#02B3C8',
  cyan70: '#0fa3b3',
  blueGray20: '#e7eeef',
  blueGray30: '#d2d6db',
  blueGray40: '#b5bbc4',
  blueGray50: '#9ca4b0',
  blueGray60: '#7c838f',

  // SNS
  facebook: '#1877F2',
  twitter: '#000',
  newspicks: '#222',
} as const

// Graduation
const gradColors = {}

const aliasColors = {
  // text
  text: baseColors.black30,
  textInvert: baseColors.white00,
  textStrong: baseColors.black10,
  textLight: baseColors.gray90,
  link: baseColors.blue50,
  linkInvert: baseColors.white00,

  // border
  border: baseColors.gray50,
  borderLight: baseColors.gray40,
  borderInvert: baseColors.white00,
  borderStrong: baseColors.black10,

  // background
  backgroundGray: baseColors.gray40,
} as const

export const colors = {
  ...baseColors,
  ...gradColors,
  ...aliasColors,
} as const
