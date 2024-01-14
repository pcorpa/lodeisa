import { Container, CssBaseline, ThemeProvider } from "@mui/material"
import { Footer, Header } from "../componets"
import { defaultTheme } from "./Home";

export const Contact = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <Container maxWidth="xl">
          <Header  />
        </Container>

        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </CssBaseline>
    </ThemeProvider>
  )
}
