import { useRef } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

//TODO: convert to percentages list and retrieve from API
const TAX_RATE_PERCENTAGE = 7;

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
    taxRatePercentage: TAX_RATE_PERCENTAGE,
  });

  const isMounted = useRef(false);

  useEffect(() => {
    const savedState = JSON.parse(sessionStorage.getItem("cart"));
    if (savedState) {
      setCart(savedState);
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("cart", JSON.stringify(cart));
    } else {
      isMounted.current = true;
    }
  }, [cart]);

  const updateCartCounters = (prevCart) => {
    const items = prevCart.items.map((cartItem) => ({
      ...cartItem,
      subtotal: cartItem.price * cartItem.quantity,
    }));

    const totalPrice = items.reduce((sum, item) => (sum += item.subtotal), 0.0);

    return { ...prevCart, totalPrice: totalPrice, items: items };
  };

  const getCart = () => {
    return cart;
  };

  const getCartItems = () => {
    return cart.items;
  };

  const getCartItemByID = (id) => {
    return cart.items.find((item) => item.itemID === id);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const aux = {
        ...prevCart,
        items: [...prevCart.items, item],
        totalPrice: prevCart.items.map(
          (item) => (prevCart.totalPrice += item.price * item.quantity)
        ),
      };
      return updateCartCounters(aux);
    });
  };

  const existsInCart = (itemID) => {
    return cart.items.some((item) => item.itemID === itemID);
  };

  //When adding batch-size quantity from Detail into (Add to Cart)
  const addItemQuantity = (itemID, quantity) => {
    setCart((prevCart) => {
      const aux = {
        ...prevCart,
        items: prevCart.items.map((item) =>
          item.itemID === itemID
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      };
      return updateCartCounters(aux);
    });
  };

  const incrementItemQuantity = (itemID) => {
    setCart((prevCart) => {
      const aux = {
        ...prevCart,
        items: prevCart.items.map((item) =>
          item.itemID === itemID ? { ...item, quantity: item.quantity+=1 } : item
        ),
      };
      return updateCartCounters(aux);
    });
  };

  const decrementItemQuantity = (itemID) => {
    setCart((prevCart) => {
      const aux = {
        ...prevCart,
        items: prevCart.items.map((item) =>
          item.itemID === itemID? { ...item, quantity: item.quantity-=1 } : item
        ),
      };
      return updateCartCounters(aux);
    });
  };

  const alterItemQuantity = (itemID, quantity) => {
    setCart((prevCart) => {
      const aux = {
        ...prevCart,
        items: prevCart.items.map((item) =>
          item.itemID === itemID ? { ...item, quantity: quantity} : item
        ),
      };
      return updateCartCounters(aux);
    });
  };

  const removeFromCart = (itemID) => {
    setCart((prevCart) => {
      const aux = {
        ...prevCart,
        items: prevCart.items.filter((item) => item.itemID !== itemID),
      };
      return updateCartCounters(aux);
    });
  };

  const getItemQuantity = (itemID) =>{
    const aux = getCartItemByID(itemID)
    return aux
          
  }

  const countTotalItems = () => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  const countItems = () => {
    return cart.items.length;
  };

  const getTotalPrice = () => {
    return cart.totalPrice;
  };

  const getTaxRatePercentage = () => {
    return cart.taxRatePercentage;
  };

  const getTaxRate = ()=>{
    return (cart.totalPrice * cart.taxRatePercentage) / 100
  }

  const getFinalPrice = () => {
    return (cart.totalPrice +
      (cart.totalPrice * cart.taxRatePercentage) / 100);
  };

  let CartContextService = {
    getCart,
    addToCart,
    removeFromCart,
    countTotalItems,
    countItems,
    getFinalPrice,
    existsInCart,
    addItemQuantity,
    getCartItems,
    getCartItemByID,
    incrementItemQuantity,
    decrementItemQuantity,
    getTotalPrice,
    getTaxRatePercentage,
    getTaxRate,
    alterItemQuantity,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={CartContextService}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
