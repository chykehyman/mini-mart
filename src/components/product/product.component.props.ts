import { ProductModel } from "../../api/model";

export interface IProductComponentProps {
  product: ProductModel;
  cartItems: ProductModel[];
  handleAddToCart: (product: ProductModel) => void;
}
