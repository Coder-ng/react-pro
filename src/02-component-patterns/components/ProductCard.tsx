import { CSSProperties, ReactElement, createContext } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";

import { Product, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style,}: ProductCardProps) => {
  const { count, increasBy } = useProduct();

  return (
    <Provider value={{ count, increasBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={img} />

      <TittleProduct tittle={tittle} />
      
    <ButtonsBottomProduct state={count} functionNumeric={increasBy} /> */}
      </div>
    </Provider>
  );
};
