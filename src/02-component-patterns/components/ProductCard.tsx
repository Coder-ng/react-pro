import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { ReactElement } from "react";
import { createContext } from "vm";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  tittle: string;
  img?: string;
}

const ProductContext = createContext({});
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
  return (
    <img
      className={styles.productImg}
      src={img ? img : noImage}
      alt="Coffe Mug"
    />
  );
};

export const TittleProduct = ({ tittle }: { tittle: string }) => {
  return <span className={styles.productDescription}>{tittle}</span>;
};

interface ProductButtonsProps {
  state: number;
  functionNumeric: (value: number) => void;
}

export const ButtonsBottomProduct = ({
  state,
  functionNumeric,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button
        onClick={() => functionNumeric(-1)}
        className={styles.buttonMinus}
      >
        -
      </button>

      <div className={styles.countLabel}>{state}</div>

      <button onClick={() => functionNumeric(1)} className={styles.buttonAdd}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ children, product }: Props) => {
  const { tittle, img } = product;
  const { count, increasBy } = useProduct();

  return (
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={img} />

      <TittleProduct tittle={tittle} />

      <ButtonsBottomProduct state={count} functionNumeric={increasBy} /> */}
      </div>
  );
};

ProductCard.Title = TittleProduct;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ButtonsBottomProduct;
