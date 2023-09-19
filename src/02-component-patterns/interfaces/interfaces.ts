import { ProductCardProps } from "../components/ProductCard";
import { Props as TitleCardProps} from "../components/TittleProduct";
import { Props as ProductImageProps} from "../components/ProductImage";
import { Props as ProductButtonsProps} from "../components/ButtonsBottomProduct";


export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  count: number;
  className?: string;
  product: Product;
  increasBy: (value: number) => void;
}

export interface ProductCardComponentPros {
  ({ product, children }: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: TitleCardProps) => JSX.Element;
}


export interface onChangeArgs {
  count:number;
  product:Product;
}


export interface ProductInCart extends Product {
  count: number;
}