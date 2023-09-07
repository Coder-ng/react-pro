import React from "react";
import {
  ButtonsBottomProduct,
  ProductCard,
  ProductImage,
  TittleProduct,
} from "../components";
import styles from "../styles/styles.module.css";
import "../styles/custom-style.css";

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <TittleProduct
            className="text-white text-bold"
            activeClass="active"
          />
          <ButtonsBottomProduct className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            title={"hola mundo"}
            className="text-white text-bold"
            activeClass="active"
          />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
         product={product} 
         className="bg-dark text-white"
         style={{background:"red"}}
         >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title
            title={"hola mundo"}
            className="text-white"
           style={{display:"flex", justifyContent:'center',fontWeight:'bold'}}

          />
          <ProductCard.Buttons className="custom-buttons" style={{display:"flex", justifyContent:'center'}}/>
        </ProductCard>
      </div>
    </div>
  );
};
export default ShoppingPage;
