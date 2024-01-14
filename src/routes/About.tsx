import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Footer, Header } from "../componets";
import { defaultTheme } from "./Home";

export const About = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <Container maxWidth="xl">
          <Header />
        </Container>
        <Container maxWidth="md" sx={{ bgcolor: "white" }}>
          <Typography
            variant="h5"
            fontWeight={800}
            sx={{ bgcolor: "white", paddingX: 5, paddingTop: 5 }}
          >
            Informacion general:
          </Typography>
          <Typography sx={{ bgcolor: "white", paddingX: 5, paddingTop: 2 }}>
            Ambiente familiar con todas las necesidades cubiertas para a
            disfrutar, la distancia justa entre la tranquilidad de Playa Hermosa
            y con la opción de encontrar más actividades a solo 10 minutos en
            auto o bici de Piriápolis.
          </Typography>
          <Typography sx={{ bgcolor: "white", paddingY: 1, paddingX: 5 }}>
            Cuenta con SmartTV de 39” Panavox con Netflix y YouTube, wifi, ropa
            de cama, cocina completa. A 3 cuadras de la playa, 4 de la parada 11
            de la fuerza aérea para quienes vienen en bus. Almacenes a muy
            poquitas cuadras.
          </Typography>
          <Typography sx={{ bgcolor: "white", paddingY: 1, paddingX: 5 }}>
            A 3 cuadras de la playa, 4 de la parada 11 de la fuerza aérea para
            quienes vienen en bus.
          </Typography>
          <Typography sx={{ bgcolor: "white", paddingY: 1, paddingX: 5 }}>
            Almacenes a muy poquitas cuadras.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ bgcolor: "white", paddingX: 5, paddingTop: 2 }}
          >
            Espacio:
          </Typography>
          <Typography sx={{ bgcolor: "white", paddingY: 1, paddingX: 5 }}>
            Son dos ambientes. Al ingreso a la izquierda nos encontramos con una
            cocina equipada en L con todo lo indispensable para cocinar + un
            juego de comedor este espacio es abierto y conectado con el sector
            del living donde hay un sillón una mesa ratona un rack y una tv.
            Este sector cuenta con 3 ventanas dobles.
          </Typography>
          <Typography sx={{ bgcolor: "white", paddingY: 1, paddingX: 5 }}>
            El segundo sector es el dormitorio con baño completo en suite. Hay
            un pequeño ropero un ventanal al piso frente a la cama, que da al
            parrillero.
          </Typography>

          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ bgcolor: "white", paddingX: 5, paddingTop: 2 }}
          >
            Ingreso Huespedes:
          </Typography>
          <Typography
            sx={{
              bgcolor: "white",
              paddingY: 1,
              paddingX: 5,
              paddingBottom: 5,
            }}
          >
            Los huéspedes ingresan por la entrada de la Calle 17 en la esquina
            con una gran palmera, el espacio cuenta con entrada para 1 auto. El
            uso del parrillero o del horno de barro, si bien es compartido se
            puede utilizar libremente. Siempre nos comunicaremos antes, si
            alguien más piensa usarlo. El predio se comparte con la casa de la
            propietaria.
          </Typography>
        </Container>

        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </CssBaseline>
    </ThemeProvider>
  );
};
