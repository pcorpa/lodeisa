import { Grid, Typography } from "@mui/material";

import { StyledToolbar } from "../componets/StyledToolbar";

export const AreaInfo = () => {
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
            align="center"
            justifySelf="center"
            sx={{ backgroundColor: "green" }}
            justifyItems="center"
            color={"blue"}
          >
            xs=4
          </Typography>
        </Grid>
        {/* </div> */}
      </Grid>
    </Grid>
  );
};
