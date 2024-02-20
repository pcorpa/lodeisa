import { Grid } from "@mui/material";
import { Footer } from "../componets";
import { StyledToolbar } from "../componets/StyledToolbar";

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
        <StyledToolbar currentSection="Como llegar" />
      </Grid>
      <Grid
        container
        xs={12}
        direction={"row"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid item sx={{ alignContent: "center", justifyContent: "center" }}>
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

          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
