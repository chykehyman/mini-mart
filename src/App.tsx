import { FC } from "react";
import "./App.scss";
import NavBar from "./components/navbar/navbar.component";
import Products from "./components/products/products.component";
import { PRODUCT_ITEMS, TOTAL_CREDITS } from "./constants";
import { ProductModel } from "./api/model";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App: FC<{}> = () => {
  const [cartItems, setCartItems] = useLocalStorage<ProductModel[]>(
    PRODUCT_ITEMS,
    []
  );
  const [totalCredits] = useLocalStorage<number>(TOTAL_CREDITS, 10000);

  const onAddToCart = (product: ProductModel) => {
    setCartItems((prev) => [...prev, { ...product }]);
  };
  return (
    <div className="app-container">
      <NavBar
        totalCredits={totalCredits}
        numberOfCartItems={cartItems.length}
      />
      <Products cartItems={cartItems} onAddToCart={onAddToCart} />
    </div>
  );
};

export default App;
