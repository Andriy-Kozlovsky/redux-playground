import {Card, List, Typography} from "@mui/material";

import CartItem from "./CartItem";

export default function Cart() {
  return (
    <Card sx={{maxWidth: 500, margin: "30px auto", p: 3}}>
      <Typography component="h2" variant="h5">
        Your Shopping Cart
      </Typography>
      <List>
        <CartItem />
      </List>
    </Card>
  );
}
