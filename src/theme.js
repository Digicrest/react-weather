import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#000000',
      secondary: '#FFFFFF'
    },
    primary: {
      main: '#864AC3'
    },
    secondary: {
      main: '#FFA654',
    },
  },
  typography: {
    fontFamily: 'Quicksand, sans-serif',
  },
  
  overrides: {
    MuiLink: {
      root: {
        color: '#f00',
        textTransform: 'uppercase',
        textDecoration: 'none',
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#FFFFFF'
      }
    },
    MuiCard: {
      root: {
        borderRadius: 0,
      }
    },
    MuiCardHeader: {
      title: {
        fontWeight: 'bolder'
      },
      subheader: {
        fontWeight: 'bold'
      }
    }
  }
});

export default theme;