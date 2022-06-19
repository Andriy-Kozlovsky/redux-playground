import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {Box, IconButton, ListItem, ListItemText, Stack, Typography} from "@mui/material";

export default function CartItem() {
  return (
    <ListItem>
      <Typography component="p" marginRight="auto" variant="h6">
        Test Item x3
      </Typography>
      <Stack>
        <ListItemText primary="$18.00" secondary="(6.00/item)" sx={{display: "flex", gap: 0.5}} />
        <Box sx={{display: "flex", justifyContent: "center", gap: 1}}>
          <IconButton>
            <RemoveCircleOutlineIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <AddCircleOutlineIcon fontSize="large" />
          </IconButton>
        </Box>
      </Stack>
    </ListItem>
  );
}
