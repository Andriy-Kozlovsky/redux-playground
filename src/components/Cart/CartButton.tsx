import {Badge, Button} from "@mui/material";

export default function CartButton() {
  return (
    <Badge badgeContent={1} color="secondary">
      <Button color="secondary" variant="outlined">
        My Cart
      </Button>
    </Badge>
  );
}
