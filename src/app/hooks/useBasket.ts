
import { useState, useEffect } from "react";
import { CartItem } from "../lib/types/search";

const useBasket = () => {
  // Initialize state from localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const cartJson = localStorage.getItem("cartData");
    return cartJson ? JSON.parse(cartJson) : [];
  });

  // Sync cartItems with localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to the cart or increase its quantity if it already exists
  const onAdd = (input: CartItem) => {
    const exist = cartItems.find((item) => item._id === input._id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item._id === input._id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...input, quantity: 1 }]);
    }
  };

  // Decrease the quantity of an item or remove it if the quantity is 1
  const onRemove = (input: CartItem) => {
    const exist = cartItems.find((item) => item._id === input._id);
    if (exist) {
      if (exist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item._id !== input._id));
      } else {
        setCartItems(
          cartItems.map((item) =>
            item._id === input._id
              ? { ...exist, quantity: exist.quantity - 1 }
              : item
          )
        );
      }
    }
  };

  // Remove a specific item from the cart
  const onDelete = (input: CartItem) => {
    setCartItems(cartItems.filter((item) => item._id !== input._id));
  };

  // Clear the entire cart and remove the localStorage entry
  const onDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem("cartData");
  };

  return {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};

export default useBasket;
