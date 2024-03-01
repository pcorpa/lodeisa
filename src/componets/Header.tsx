import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { Paper } from "@mui/material";

export const Header = () => {
  const sections = [
    { title: "Home", url: "#" },
    { title: "Acerca de la propiedad", url: "#/about" },
    { title: "Como llegar", url: "#/location" },
    { title: "Contactanos", url: "#/contact" },
  ];

  return (
    <Paper
      sx={{
        position: "relative",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "space-between",
          overflowX: "auto",
          boxShadow: "initial",
          backgroundColor: "#BBAB8C",
          textDecoration: "none",
        }}
      >
        {sections.map((section) => (
          <Link
            noWrap
            key={section.title}
            variant="h6"
            href={section.url}
            sx={{
              p: 1,
              flexShrink: 0,
              my: 2,
              color: "white",
              textDecoration: "none",
              fontWeight: 400,
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Paper>
  );
};
