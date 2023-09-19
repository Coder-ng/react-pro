import { CSSProperties, ReactElement, createContext } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";

import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: ProductCardProps) => {
  const { count, increasBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ count, increasBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
