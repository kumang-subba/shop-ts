import { ReactNode, createContext, useContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartItem = {
  id: number;
  quantity: number;
};

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  getQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
  totalInCart: number;
  colorMode: () => void;
};
const CartContext = createContext({} as CartContext);

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totalInCart = cartItems.reduce(
    (total, item) => item.quantity + total,
    0
  );

  function getQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseQuantity(id: number) {
    setCartItems((curr) => {
      if (curr.find((item) => item.id === id) == null) {
        return [...curr, { id, quantity: 1 }];
      } else {
        return curr.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
    });
  }
  function decreaseQuantity(id: number) {
    setCartItems((curr) => {
      if (curr.find((item) => item.id === id)?.quantity === 1) {
        return curr.filter((item) => item.id !== id);
      } else {
        return curr.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((curr) => {
      return curr.filter((item) => item.id !== id);
    });
  }
  const [mode, setMode] = useLocalStorage<"light" | "dark">("light", "light");
  const colorMode = useMemo(() => toggleColorMode, []);

  function toggleColorMode() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <CartContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        openCart,
        closeCart,
        isOpen,
        cartItems,
        removeFromCart,
        totalInCart,
        colorMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CartContext.Provider>
  );
}
