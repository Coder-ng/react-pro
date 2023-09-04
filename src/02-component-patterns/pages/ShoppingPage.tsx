import React from "react";
import {
  ButtonsBottomProduct,
  ProductCard,
  ProductImage,
  TittleProduct,
} from "../components";
import styles from "../styles/styles.module.css";

const product = {
  id: "1",
  title: "producto 1",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <header>
        <h1>
          <span className={styles.titleheadercomp}>Shopping Store</span>
        </h1>
      </header>

      <div className={styles.productContent}>
        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct />
          <ButtonsBottomProduct />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"hola mundo"} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"hola mundo"} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
