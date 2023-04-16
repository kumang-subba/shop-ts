import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import data from "../data/veg.json";
import ClearIcon from "@mui/icons-material/Clear";
import { useCartContext } from "../context/CartContext";

type ItemsInCartProps = {
  id: number;
  quantity: number;
};
function ItemsInCart({ id, quantity }: ItemsInCartProps) {
  const { removeFromCart } = useCartContext();
  const item = data.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Card sx={{ display: "flex", width: 350 }}>
      <CardMedia
        component="img"
        image={item.imgUrl}
        sx={{
          width: "50%",

          objectFit: "contain",
          backgroundColor: "#998b7d",
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Box sx={{ justifyContent: "space-between", alignItems: "stretch" }}>
          <Typography variant="h5" gutterBottom>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Typography>
          <Typography variant="h6">{item.price}$</Typography>
          {quantity > 1 && <Typography variant="h6">X {quantity}</Typography>}
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            {(item.price * quantity).toFixed(2)}$
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ justifySelf: "flex-end" }}>
        <IconButton color="primary" onClick={() => removeFromCart(id)}>
          <ClearIcon color="error" />
        </IconButton>
      </Box>
    </Card>
  );
}

export default ItemsInCart;
