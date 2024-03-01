import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import NavigationIcon from "@mui/icons-material/Navigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

interface SectionList {
  title: string;
  url: string;
}

interface DrawerProps {
  setDrawerState: (DrawerState: Boolean) => void;
  sectionList: SectionList[];
}

export const DrawerFromTheLeft = ({
  setDrawerState,
  sectionList,
}: DrawerProps) => {
  const iconSwitch = (title: string) => {
    switch (title) {
      case "Home":
        return <HomeRoundedIcon />;
        break;

      case "Acerca de la propiedad":
        return <InfoRoundedIcon />;
        break;

      case "Como llegar":
        return <NavigationIcon />;
        break;

      case "Contactanos":
        return <SendRoundedIcon />;
        break;

      default:
        return <HomeRoundedIcon />;
        break;
    }
  };

  return (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={() => setDrawerState(false)}
      onKeyDown={() => setDrawerState(false)}
    >
      <Divider />
      <List>
        {sectionList.map(({ title, url }, index) => (
          <Link
            noWrap
            key={title}
            href={url}
            sx={{ alignItems: "center", justifyItems: "center" }}
          >
            <ListItem
              sx={{
                backgroundColor: "#FDF7E4",
                borderRadius: 2,
                paddingY: 1,
                marginY: 1,
                marginX: 1,
                paddingX: 2,
                width: "95%",
              }}
              key={title}
              disablePadding
            >
              <ListItemButton sx={{ textDecoration: "none" }}>
                <ListItemIcon>{iconSwitch(title)}</ListItemIcon>
                <Typography
                  sx={{
                    textDecoration: "none",
                    textDecorationColor: "#595342",
                    fontWeight: 900,
                    color: "#595342",
                  }}
                >
                  {title}
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};
