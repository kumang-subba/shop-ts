import { Typography, Grid } from "@mui/material";
import data from "../data/veg.json";
import StoreItem from "../components/StoreItem";

function Shop() {
  return (
    <>
      <Typography variant="h3" align="center">
        Shop
      </Typography>
      <Grid container spacing={2} columns={4} justifyContent="center">
        {data.map((item) => (
          <Grid item key={item.id}>
            <StoreItem {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Shop;
