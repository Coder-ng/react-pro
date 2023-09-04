import { ProductCard as ProductCardComponentHOC } from "./ProductCard";
import { ButtonsBottomProduct } from "./ButtonsBottomProduct";
import { ProductImage } from "./ProductImage";
import { TittleProduct } from "./TittleProduct";
import { ProductCardComponentPros } from "../interfaces/interfaces";

export { ButtonsBottomProduct } from "./ButtonsBottomProduct";
export { ProductImage } from "./ProductImage";
export { TittleProduct } from "./TittleProduct";

export const ProductCard: ProductCardComponentPros = Object.assign(
  ProductCardComponentHOC,
  {
    Title: TittleProduct,
    Image: ProductImage,
    Buttons: ButtonsBottomProduct,
  }
);

export default ProductCard;
