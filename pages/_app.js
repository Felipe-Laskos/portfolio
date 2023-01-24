import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next {
    background-color: #524EB7;
  }

  .icon-header {
    font-size: 30px;
    margin-left: 30px;
    cursor: pointer;
    color: #F6F6F8;
    transition: color 0.25s;
  }

  .icon-header:hover {
    color: #E97B64;
  }

  a {
    text-decoration: none;
    cursor: auto;
  }

  body {
    scroll-behavior: smooth;
  }
`

const theme = {
  colors: {
    blue: "#524EB7",
    light_blue: "#96CAEF",
    dark_blue: "#3b36bf",
    orange: "#E97B64",
    black: "#070707",
    white: "#F6F6F8"
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
