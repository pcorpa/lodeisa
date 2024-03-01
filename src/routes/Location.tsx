import { Grid, Typography } from "@mui/material";

import { StyledToolbar } from "../componets/StyledToolbar";
import { Footer } from "../componets";
import { useWindowDimensions } from "../hooks/WindowDimentions";

export const Location = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      direction={"column"}
      spacing={0}
    >
      <Grid xs={12}>
        <StyledToolbar currentSection="Ubicación" />
      </Grid>
      <Grid
        container
        xs={12}
        direction={"row"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid item sx={{ alignContent: "center", justifyContent: "center" }}>
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ bgcolor: "white", paddingX: 5, paddingTop: 2 }}
          >
            Llegada y parking:
          </Typography>
          <Typography sx={{ bgcolor: "white", paddingY: 1, paddingX: 5 }}>
            A 5 cuadras de la playa, y a la misma distancia de la parada de bus.
            En caso de viajar en auto, la casa cuenta con un lugar para
            estacionar y también es posible dejar otro auto afuera. 
          </Typography>
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ bgcolor: "white", paddingX: 5, paddingTop: 2 }}
          >
            Alrededores:
          </Typography>
          <Typography sx={{ bgcolor: "white", paddingY: 1, paddingX: 5 }}>
            El vecindario en que se encuentra la casa es muy tranquilo. En
            temporada alta sé siente un poco más el movimiento, pero en general
            hay buena relación con vecinos que viven todo el año y nos gusta
            preservar la armonía con el entorno.
          </Typography>
          <Typography
            sx={{
              bgcolor: "white",
              paddingY: 1,
              paddingX: 5,
              paddingBottom: 5,
            }}
          >
            En general, sin irse muy lejos los servicios básicos de almacén,
            algún bar o restaurantes se puede acceder caminando. Recomendamos el
            súper “La Rumbita” el restaurante “Algo de Mi” en playa verde. En
            caso de necesitar farmacia es necesario llegar a Piriápolis.
          </Typography>
        </Grid>
        <Grid item sx={{ alignContent: "center", justifyContent: "center" }}>
          <iframe
            style={{
              alignSelf: "center",
              justifySelf: "center",
            }}
            width={useWindowDimensions().width - 20}
            height={
              useWindowDimensions().height > 250
                ? useWindowDimensions().height - 200
                : useWindowDimensions().height - 20
            }
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=869&amp;height=488&amp;hl=en&amp;q=Calle%2033%20Playa%20Hermosa+(lodeisa)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};
