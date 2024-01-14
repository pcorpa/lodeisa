import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Header, Footer } from "../componets";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#FDF7E4",
    },
    text: {
      primary: "black",
    },
  },
});

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Frente de la casa",
    imgPath:
      "https://ipfs.filebase.io/ipfs/QmRsUzZLxhThHZGsC5Zj5DMYej12ERkvaamDd2y9iEr3FP",
  },
  {
    label: "Frente de casa 2",
    imgPath:
      "https://ipfs.filebase.io/ipfs/QmWojsDzaXgAbMszZS3Edb2PMNLiouR88g7ftYFz3rvtm9/QmVtv9k1YaxgpWPD9YMvsphaW6FGBsuUfsSJshqoBtdzcX",
  },
  {
    label: "Cuarto",
    imgPath:
      "https://ipfs.filebase.io/ipfs/QmcTd55PvHqsWoEXhXbLW77s42ib4CxpeQ9vR6QQiJXuTC",
  },
  {
    label: "Parrillero",
    imgPath:
      "https://ipfs.filebase.io/ipfs/QmVpdwssjabGeqrXe9s7JuBzeqqgN5CMgUMvUQ5fy3AmUK",
  },
  {
    label: "Living",
    imgPath:
      "https://ipfs.filebase.io/ipfs/QmYz1QPwFPxGWPjg7CFtUSkehFF68iZQP8AvVvL74bXrb2",
  },
  {
    label: "Mesa comedor",
    imgPath:
      "https://ipfs.filebase.io/ipfs/QmTMK5TiLE8apXjixR2hp4nWpBDePTXmHcUTUmLNfbGoUM",
  },
  {
    label: "Estanteria cocina",
    imgPath:
      "https://ipfs.filebase.io/ipfs/QmTMK5TiLE8apXjixR2hp4nWpBDePTXmHcUTUmLNfbGoUM",
  },
];

export const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <Container maxWidth="xl">
          <Header />
          <AutoPlaySwipeableViews axis="x">
            {images.map((step) => (
              <div key={step.label}>
                <Box
                  component="img"
                  sx={{
                    height: 800,
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                    opacity: "80%",
                    objectFit: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Container>
        <Container
          maxWidth="xl"
          sx={{
            marginTop: 5,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <iframe
            style={{
              background: "#FDF7E4",
              border: 0,
              alignSelf: "center",
              justifySelf: "center",
            }}
            src="https://8b67005a8b4a41c2a2e2625bb7058e5f.elf.site"
            width="1400"
            height="700"
          ></iframe>
        </Container>

        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </CssBaseline>
    </ThemeProvider>
  );
};
