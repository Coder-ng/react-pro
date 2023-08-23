import { ReactElement } from "react";
import { createContext, useContext } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";

import noImage from "../assets/no-image.jpg";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  tittle: string;
  img?: string;
}

interface ProductContextProps {
  count: number;
  increasBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string | undefined;

  img
    ? (imgToShow = img)
    : product.img
    ? (imgToShow = product.img)
    : (imgToShow = noImage);
  return <img className={styles.productImg} src={imgToShow} alt="Coffe Mug" />;
};

export const TittleProduct = ({ tittle }: { tittle: string }) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>
      {tittle ? tittle : product.tittle}
    </span>
  );
};

export const ButtonsBottomProduct = () => {
  const { count, increasBy } = useContext(ProductContext);
  return (
    <div className={styles.buttonsContainer}>
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

export const ProductCard = ({ children, product }: Props) => {
  const { tittle, img } = product;
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

ProductCard.Title = TittleProduct;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ButtonsBottomProduct;
