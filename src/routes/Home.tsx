import { createTheme } from "@mui/material/styles";
import { Footer } from "../componets";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, Grid } from "@mui/material";

import { StyledToolbar } from "../componets/StyledToolbar";

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
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      direction={"column"}
      spacing={0}
    >
      <Grid item xs={12}>
        <StyledToolbar currentSection={"Home"} />
      </Grid>
      <Grid
        container
        xs={12}
        direction={"row"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid item xs={12}>
          <AutoPlaySwipeableViews axis="x">
            {images.map((step) => (
              <Box
                component="img"
                sx={{
                  height: { xl: 800, md: 300 },
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  opacity: "100%",
                  objectFit: "contain",
                  justifyItems: "center",
                  alignItems: "center",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ))}
          </AutoPlaySwipeableViews>
        </Grid>
      </Grid>

      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};
