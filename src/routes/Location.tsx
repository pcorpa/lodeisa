import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Footer, Header } from "../componets";
import { defaultTheme } from "./Home";

export const Location = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <Container maxWidth="xl">
          <Header />
        </Container>
        <Container maxWidth="xl">
          <iframe
            style={{
              alignSelf: "center",
              justifySelf: "center",
            }}
            width="869"
            height="488"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=869&amp;height=488&amp;hl=en&amp;q=Calle%2033%20Playa%20Hermosa+(lodeisa)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Container>{" "}
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </CssBaseline>
    </ThemeProvider>
  );
};
