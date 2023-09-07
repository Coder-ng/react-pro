import { createContext, useContext } from "react";
import { ProductContextProps } from "../interfaces/interfaces";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

const ProductContext = createContext({} as ProductContextProps);
export interface Props {
  img?: string;
  className?: string;
}
export const ProductImage = ({ img, className}: Props ) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product && product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  // img
  //   ? (imgToShow = img)
  //   : product.img
  //   ? (imgToShow = product.img)
  //   : (imgToShow = noImage);
  return (
    <img className={`${styles.productImg} ${className}`} src={img || imgToShow} alt="Coffe Mug" />
  );
};
