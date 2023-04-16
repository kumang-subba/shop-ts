import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useCartContext } from "../context/CartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getQuantity, increaseQuantity, decreaseQuantity } = useCartContext();
  const quantity = getQuantity(id);
  return (
    <Card sx={{ width: 300, margin: "1rem", boxShadow: 5 }}>
      <CardMedia
        image={imgUrl}
        component="img"
        height="210px"
        sx={{ objectFit: "contain", backgroundColor: "#998b7d" }}
      />
      <CardContent>
        <Typography variant="h4" align="center">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", pt: "5px" }}>
          {price}$
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {quantity === 0 ? (
          <Button
            variant="contained"
            fullWidth
            onClick={() => increaseQuantity(id)}
          >
            Add to cart
          </Button>
        ) : (
          <>
            <Button variant="contained" onClick={() => decreaseQuantity(id)}>
              -
            </Button>
            <Typography variant="h6">{quantity}</Typography>
            <Button variant="contained" onClick={() => increaseQuantity(id)}>
              +
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default StoreItem;
