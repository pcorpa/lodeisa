import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const Footer = () => {
  return (
    <Grid
      container
      xs={12}
      direction="row"
      alignContent={"center"}
      justifyContent={"center"}
      sx={{
        py: 6,
        bottom: 0,
        width: "100%",
        justifySelf: "center",
      }}
    >
      <Grid container xs={10} justifyContent={"space-around"}>
        <Grid
          item
          sx={{
            justifyItems: "center",
            alignItems: "center",
          }}
          padding={1}
        >
          <Link href="https://www.airbnb.com/rooms/10474165?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-03-01&check_out=2024-03-06&source_impression_id=p3_1709304427_fYHXStmojLmkSmP1&previous_page_section_name=1000&federated_search_id=58633db4-1be5-469d-ad59-3c95e42a8c68&translate_ugc=false">
            <Box
              component="img"
              src={
                "https://ipfs.filebase.io/ipfs/QmfLd7EMwdiXc1L9b3rPYXxhr9VqQVTJmjzYDWDsjwGJzf/QmaxFg1KW99LiUBfZc27JChEuZe1i5zPGJVN48hECcZwhJ"
              }
              height={50}
              width={50}
              sx={{ opacity: 0.75 }}
            />
          </Link>
        </Grid>

        <Grid item padding={1}>
          <Link href="https://www.airbnb.com/rooms/10474165?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&check_in=2024-03-01&check_out=2024-03-06&source_impression_id=p3_1709304427_fYHXStmojLmkSmP1&previous_page_section_name=1000&federated_search_id=58633db4-1be5-469d-ad59-3c95e42a8c68&translate_ugc=false">
            <MailOutlineIcon
              sx={{
                height: 35,
                width: 35,
                color: "#BBAB8C",
                strokeWidth: 4,
                justifyItems: "center",
                alignContent: "center",
                paddingTop: "30%",
                opacity: 0.75,
              }}
            />
          </Link>
        </Grid>

        <Grid
          item
          padding={1}
          sx={{
            justifyItems: "center",
            alignContent: "center",
          }}
        >
          <Link href="//api.whatsapp.com/send?phone=+59898492408&text=¡Hola! Me interesa saber más de la casa en alquiler. ">
            <Box
              component="img"
              display={"block"}
              src={
                "https://ipfs.filebase.io/ipfs/QmaBC2c6C48T5TQFv2i76DG92HNm7j55qERdth2CeAQRDb/Qmej1KM7EuBgYo1KTbpKYhT7yqHqKXC5zkkJR21B2XhEt5"
              }
              height={30}
              width={30}
              paddingTop={"45%"}
              sx={{ opacity: 0.75 }}
            />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
