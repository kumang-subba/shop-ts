import { AppBar, Container, Toolbar, MenuItem, Box } from "@mui/material";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useCartContext } from "../context/CartContext";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function Navbar() {
  const { openCart, totalInCart, colorMode } = useCartContext();
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" component="nav">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <MenuItem>
              <Link href="/" color="inherit" underline="none" variant="h6">
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/shop" color="inherit" underline="none" variant="h6">
                Shop
              </Link>
            </MenuItem>
          </Box>

          <IconButton sx={{ ml: 1 }} onClick={colorMode} color="inherit">
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>

          <IconButton onClick={openCart} size="large">
            <Badge
              color="secondary"
              badgeContent={totalInCart}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
