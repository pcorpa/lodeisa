import { Grid } from "@mui/material";
import { Footer } from "../componets";
import { StyledToolbar } from "../componets/StyledToolbar";

export const Contact = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      direction={"column"}
      spacing={0}
    >
      <Grid xs={12}>
        <StyledToolbar currentSection="Contactanos" />
      </Grid>
      <Grid
        container
        xs={12}
        direction={"row"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid item sx={{ alignContent: "center", justifyContent: "center" }}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
};
