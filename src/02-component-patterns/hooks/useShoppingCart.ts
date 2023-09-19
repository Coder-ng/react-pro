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
      const productInCar: ProductInCart = oldShopinCar[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCar.count + count, 0) > 0) {
        productInCar.count += count;
        return {
          ...oldShopinCar,
          [product.id]: productInCar,
        };
      }
      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShopinCar;
      return rest;
    });
  };

  return {
    ShoppingCar,
    onChangeValueCart,
  };
};
