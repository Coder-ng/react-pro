import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";


export interface Props {
  className?: string;
  style?: CSSProperties;

}

export const ButtonsBottomProduct = ({className,style}:Props) => {
  const { count, increasBy } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => increasBy(-1)} className={styles.buttonMinus}>
        -
      </button>

      <div className={styles.countLabel}>{count}</div>

      <button onClick={() => increasBy(1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};
