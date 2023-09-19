import {
  ProductCard,
} from "../components";
import styles from "../styles/styles.module.css";
import "../styles/custom-style.css";
import { Product } from "../interfaces/interfaces";
import { useShoppingCart } from "../hooks/useShoppingCart";

const products: Product[] = [
  {
    id: "1",
    title: "Coffe mug - Card",
    img: "./coffee-mug.png",
  },
  {
    id: "2",
    title: "Coffe mug - meme ",
    img: "./coffee-mug2.png",
  },
];

export const ShoppingPage = () => {
  const { onChangeValueCart, ShoppingCar } = useShoppingCart();

  return (
    <div className="content-page">
      <header className="headerTitle">
        <h1>
          <span className={styles.titleheadercomp}>Shopping Store</span>
        </h1>
      </header>

      <div className={styles.productContent}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="bg-dark text-white"
            onChange={onChangeValueCart}
            value={ShoppingCar[product.id]?.count || 0}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title
              className="text-white text-bold"
              activeClass="active"
            />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(ShoppingCar).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            value={product.count}
            onChange={onChangeValueCart}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      {/* {JSON.stringify(ShoppingCar, null, 5)} */}
    </div>
  );
};
export default ShoppingPage;
