import { Box, SwipeableDrawer, Typography } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import ItemsInCart from "./ItemsInCart";
import data from "../data/veg.json";

function Cart() {
  const { isOpen, openCart, closeCart, cartItems } = useCartContext();
  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onOpen={openCart}
      onClose={closeCart}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", width: 350 }}
        gap={1}
      >
        {!cartItems.length ? (
          <Typography align="center" sx={{ mt: "1rem" }} variant="h5">
            Please add items to cart
          </Typography>
        ) : (
          <>
            {cartItems.map((item) => (
              <ItemsInCart key={item.id} {...item} />
            ))}
            <Typography
              component="div"
              align="right"
              sx={{ pr: "10px", fontWeight: "bold" }}
              variant="h5"
            >
              Total:{" "}
              {cartItems
                .reduce((tot, item) => {
                  const store = data.find((i) => i.id === item.id);
                  return tot + (store?.price || 0) * item.quantity;
                }, 0)
                .toFixed(2)}
              $
            </Typography>
          </>
        )}
      </Box>
    </SwipeableDrawer>
  );
}

export default Cart;
