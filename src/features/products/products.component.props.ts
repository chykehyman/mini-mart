import { ProductModel } from "../../api/model";

export interface IProductsProps {
  cartItems: ProductModel[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductModel[]>>;
}
