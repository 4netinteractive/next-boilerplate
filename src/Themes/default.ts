import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

export const defaultTheme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      light: '#7AAFB3',
      main: '#00727E',
      dark: '#187A80',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F9A932',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#4D4D4D',
      secondary: '#ffffff',
    },
  },
})