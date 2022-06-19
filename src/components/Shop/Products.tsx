import {Box, List, Typography} from "@mui/material";

import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <Box>
      <Typography color="#fff" component="h2" textAlign="center" variant="h5">
        BUY YOUR FAVORITE PRODUCTS
      </Typography>
      <List>
        <ProductItem />
      </List>
    </Box>
  );
}
