
import {AppBar, Button, Stack} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
interface topeBarProps{
  open: boolean, 
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const TopBar = ({open, setOpen}:topeBarProps) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Stack sx={{flexDirection: "row", justifyContent: "space-between", width:"100%"}}>
          <Typography variant="h3" component="div">
            Onotis
          </Typography>
          <Button sx={{}} onClick={()=>setOpen(!open)} variant="outlined">Create</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
