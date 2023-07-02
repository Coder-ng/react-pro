import React from "react";
import { ButtonsBottomProduct, ProductCard, ProductImage, TittleProduct } from "../components/ProductCard";


const product = {
    id:'1', 
    tittle:'producto 1',
    img:"./coffee-mug.png"
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard  product={product}>
        <ProductImage/>
        <TittleProduct tittle={product.tittle}/>
        <ButtonsBottomProduct state={0} functionNumeric={function (value: number): void {
          throw new Error("Function not implemented.");
        } } />
      </ProductCard>
    </div>
  );
};
