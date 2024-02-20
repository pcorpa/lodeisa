import {
  Box,
  Button,
  Drawer,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { DrawerFromTheLeft } from "./Drawer";
import { useEffect, useState } from "react";
import { Menu } from "@mui/icons-material";

export const sections = [
  { title: "Home", url: "#" },
  { title: "Acerca de la propiedad", url: "#/about" },
  { title: "Ubicacion", url: "#/areainfo" },
  { title: "Como llegar", url: "#/location" },
  { title: "Contactanos", url: "#/contact" },
];

interface Props {
  currentSection: string;
}

export const StyledToolbar = ({ currentSection }: Props) => {
  const [drawerState, setDrawerState] = useState<boolean>(false);

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
  };

  const viewPortSizeMobile = useWindowDimensions().width < 600;
  return (
    <Toolbar
      component="nav"
      variant="regular"
      sx={{
        justifyContent: "space-between",
        overflowX: "auto",
        boxShadow: "initial",
        backgroundColor: "#BBAB8C",
        textDecoration: "none",
        borderRadius: 1,
        marginBottom: 1,
      }}
    >
      {viewPortSizeMobile ? (
        <Grid
          container
          sx={{
            alignItems: "center",
          }}
        >
          <Grid item>
            <Button onClick={() => setDrawerState(true)}>
              <Menu sx={{ color: "white" }} />
            </Button>
          </Grid>
          <Grid item>
            <Typography
              color={"white"}
              fontWeight={800}
              alignItems={"center"}
              justifyItems={"center"}
              sx={{ backgroudColor: "red" }}
            >
              {currentSection}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <>
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
                fontSize: {
                  xs: 12,
                  md: 14,
                },
              }}
            >
              {section.title}
            </Link>
          ))}
        </>
      )}
      <Drawer
        anchor={"left"}
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        {DrawerFromTheLeft({
          setDrawerState: () => setDrawerState(false),
          sectionList: sections,
        })}
      </Drawer>
    </Toolbar>
  );
};
