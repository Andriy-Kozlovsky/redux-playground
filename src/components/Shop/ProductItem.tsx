import {Button, Card, Chip, ListItem, Typography} from "@mui/material";
import {Box} from "@mui/system";

const cardStyle = {
  margin: "0 auto",
  padding: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  minWidth: 600,
};

export default function ProductItem() {
  return (
    <ListItem>
      <Card sx={cardStyle}>
        <Box display="flex" justifyContent="space-between">
          <Typography component="h3" variant="h5">
            Titulo
          </Typography>
          <Chip label="$6.00" sx={{fontSize: 24}} variant="outlined" />
        </Box>
        <Typography>This is a first product - amazing!</Typography>
        <Button color="secondary" variant="contained">
          Add to Cart
        </Button>
      </Card>
    </ListItem>
  );
}
