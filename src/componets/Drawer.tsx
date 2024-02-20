import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

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
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerState(false)}
      onKeyDown={() => setDrawerState(false)}
    >
      <Divider />
      <List>
        {sectionList.map(({ title, url }, index) => (
          <Link noWrap key={title} href={url}>
            <ListItem key={title} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};
