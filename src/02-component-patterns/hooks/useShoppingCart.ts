import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [ShoppingCar, setShoppingCar] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onChangeValueCart = ({
    product,
    count,
  }: {
    product: Product;
    count: number;
  }) => {
    setShoppingCar((oldShopinCar) => {
      
      if (count === 0) {

     // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShopinCar;
      return rest;
      }

      // agregar producto con cantidad actualizada
        return {
          ...oldShopinCar,
          [product.id]: {...product, count},
        };
  
    });
  };

  return {
    ShoppingCar,
    onChangeValueCart,
  };
};
