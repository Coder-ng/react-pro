import { createContext } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";

import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { count, increasBy } = useProduct();

  return (
    <Provider value={{ count, increasBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={img} />

      <TittleProduct tittle={tittle} />
      
    <ButtonsBottomProduct state={count} functionNumeric={increasBy} /> */}
      </div>
    </Provider>
  );
};
