import { createTheme } from '@mui/material/styles'
import { Theme, ThemeOptions } from '@mui/material'
import { CommonColors, Palette } from '@mui/material/styles/createPalette'

export const navMenuWidth = 220
export const navMenuCollapsedWidth = 60
export const navMenuTabHeight = 72
export const scrollBarSize = 5
export const assetCardWidth = 450
export const assetCardHeight = 200
export const iconButtonsWidth = 40
export const iconButtonsHeight = 40
export const iconLabelWidth = 18
export const iconLabelHeight = 18
export const pillShape = '100vw'
export const appbarIconSize = 16
export const graphIconSize = 12
export const closeIconSize = 10
export const avatarSize = 42
export const TOOLBAR_HEIGHT = 75

interface BorderRadius {
  xxxxs: number
  xxxs: number
  xxs: number
  xs: number
  s: number
  m: number
  l: number
  xl: number
}
export interface ITheme extends Theme {
  borderRadius: BorderRadius
  palette: IPalette
}

interface ICommonColors extends CommonColors {
  lightBlue: string
  purple: string
}

interface IPalette extends Palette {
  common: ICommonColors
}

interface IThemeOptions extends ThemeOptions {
  borderRadius: BorderRadius
  palette: IPalette
}

// TODO: naming for all colors will be changed in another task
export const colors = {
  secondaryCard: '#2F353D',
  lightGreen: '#48AC60',
  lightGrey: '#A5A5A5',
  lighterGrey: '#E4E7EB',
  primaryBlack: '#2D2D2D',
  black: '#1D1D1D',
  blackest: '#111111',
  darkGrey: '#9a9a9a',
  dialog: '#f0f2f5',
  main: '#FFFFFF',
  primaryWhite: '#FFFFFF',
  backgroundColor: '#F5F5F5',
  primaryBlue: '#3861FB',
  mainButtonHover: '#0e08c4',
  twitterSource: '#1DA1F2',
  redditSource: '#FF5700',
  audioSource: '#424983',
  lightRed: '#FF4348',
  lighterRed: '#F37373',
}

export const borderRadius = {
  xxxxs: 4,
  xxxs: 6,
  xxs: 8,
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
  xl: 20,
  xxl: 42,
}

export const lightPalette = {
  palette: {
    primary: { main: '#2620f6', dark: '#231AAF' },
    secondary: { main: '#1D99E2' },
    error: { main: '#FF4348' },
    success: { main: '#7CFC9A' },
    background: { default: '#FFFFFF', paper: '#F4F6F8' },
  },
} as ThemeOptions

export const darkPalette = {
  palette: {
    type: 'dark',
    primary: { main: '#1D99E2' },
    secondary: { main: '#1D99E2' },
    background: { default: '#1B2025', paper: '#272C34' },
    error: { main: '#FF4348' },
    success: { main: '#7CFC9A' },
  },
} as ThemeOptions

const theme = createTheme(({
  ...colors,
  ...lightPalette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100vw',
          textTransform: 'capitalize',
          border: '1px solid lightGrey',
          '&:hover': {
            background: 'white',
            border: '1px solid #2620f6',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: '1px solid lightGrey',
          padding: '.45em',
          '&:hover': {
            background: 'white',
            border: '1px solid #2620f6',
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: '0.8rem',
          marginTop: '0.5em',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          borderRadius: '100vw',
          paddingBlock: '0.45em',
          fontSize: '.9rem',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '100vw',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          paddingBlock: '0.5em',
          background: 'white',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontFamily: 'Roboto',
          fontSize: '0.9rem',
          background: 'white',
          '&::before': {
            content: '""',
            width: '1.1em',
            height: '1.1em',
            border: '0.1em solid currentColor',
            borderRadius: '50%',
            marginRight: '0.5em',
          },
          '&.Mui-selected': {
            background: 'white',
            '&::before': {
              border: `0.42em solid #2620f6`,
            },
            '&:hover': {
              background: 'white',
            },
            '&:focus': {
              background: 'white',
            },
          },
          '&:hover': {
            background: 'white',
          },
        },
      },
    },
  },

  typography: {
    fontFamily: 'Roboto, Sans-serif',
    h1: {
      fontSize: 19,
      lineHeight: 1.4,
      fontWeight: 700,
      color: colors.primaryBlack,
    },
    h2: {
      fontSize: 17,
      lineHeight: 1.4,
      fontWeight: 500,
      color: colors.black,
    },
    h3: {
      fontSize: 16,
      lineHeight: 1.4,
      fontWeight: 400,
      color: colors.black,
    },
    h4: {
      fontSize: 15,
      lineHeight: 1.4,
      fontWeight: 400,
      color: colors.black,
    },
    h5: {
      fontSize: 15,
      lineHeight: 1.2,
      fontWeight: 400,
      color: colors.black,
      opacity: 0.5,
    },
    subtitle1: {
      fontSize: 15,
      lineHeight: 1.2,
      fontWeight: 700,
      color: colors.primaryBlue,
    },
    subtitle2: {
      fontSize: 13,
      lineHeight: 1.4,
      fontWeight: 400,
      color: colors.black,
      opacity: 0.75,
    },
    body1: {
      fontSize: 15,
      lineHeight: 1.2,
      fontWeight: 400,
      color: colors.lightGreen,
    },
    body2: {
      fontSize: 15,
      lineHeight: 1.2,
      fontWeight: 400,
      color: colors.lightRed,
    },
    button: {
      fontSize: 15,
      lineHeight: 1.4,
      fontWeight: 400,
      color: colors.main,
    },
    caption: {
      fontSize: 15,
      lineHeight: 1.2,
      fontWeight: 400,
      color: colors.primaryBlue,
    },
  },
} as unknown) as IThemeOptions)

export default theme
