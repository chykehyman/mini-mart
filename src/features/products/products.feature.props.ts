import { ProductModel } from "../../api/model";

export interface IProductsFeatureProps {
  cartItems: ProductModel[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductModel[]>>;
}
