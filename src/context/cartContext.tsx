import { createContext, useContext, useState } from "react";

interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface ICartContext {
  cart: ICartItem[];
  addToCart: (product: ICartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider = ({children}:{children:React.ReactNode}) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (product: ICartItem) => {
    setCart((prevCart) => {
      const productExist = prevCart.find((item) => item.id === product.id);
      if (productExist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart =()=>{
    setCart([])
  }
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
        {children}
    </CartContext.Provider>
  )
};


export const useCart =()=>{
    const context = useContext(CartContext)
    if (!context){
        throw new Error('no such context')}
        return context;
}