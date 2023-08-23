import React from "react";
import {
  ButtonsBottomProduct,
  ProductCard,
  ProductImage,
  TittleProduct,
} from "../components/ProductCard";
import styles from "../styles/styles.module.css";

const product = {
  id: "1",
  tittle: "producto 1",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <header>
        <h1 className="titleheadercomp">Shopping Store</h1>
        <hr />
      </header>

      <div className={styles.productContent}>
        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <TittleProduct tittle="" />
          <ButtonsBottomProduct />
        </ProductCard>
      </div>
    </div>
  );
};
