import { ProductModel } from "../../api/model";

export interface ICartDrawerComponentProps {
  isOpen: boolean;
  toggleCartDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
  cartItems: ProductModel[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductModel[]>>;
  totalCredits: number;
  setTotalCredits: React.Dispatch<React.SetStateAction<number>>;
}
