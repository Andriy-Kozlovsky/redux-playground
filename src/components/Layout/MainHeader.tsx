import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CartButton from "../Cart/CartButton";

export default function MainHeader() {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{flexGrow: 1}} variant="h4">
            ReduxCart
          </Typography>
          <CartButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
