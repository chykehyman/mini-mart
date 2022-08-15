import { ProductModel } from "../../api/model";

export interface IProductProps {
  product: ProductModel;
  cartItems: ProductModel[];
  handleAddToCart: (product: ProductModel) => void;
}
