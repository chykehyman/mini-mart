import "./App.scss";
import { FC, useState } from "react";
import {
  DEFAULT_CREDITS,
  PRODUCT_ITEMS,
  TOTAL_CREDITS,
} from "./shared/constants";
import { ProductModel } from "./api/model";
import { useLocalStorage } from "./shared/hooks";
import { NavBarComponent } from "./components/navbar";
import { ProductsFeature } from "./features/products";
import { CartDrawerComponent } from "./components/cart-drawer";

const App: FC<{}> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleCartDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsOpen(!isOpen);
  };

  const [cartItems, setCartItems] = useLocalStorage<ProductModel[]>(
    PRODUCT_ITEMS,
    []
  );
  const [totalCredits, setTotalCredits] = useLocalStorage<number>(
    TOTAL_CREDITS,
    DEFAULT_CREDITS
  );

  return (
    <div className="app-container">
      <NavBarComponent
        totalCredits={totalCredits}
        numberOfCartItems={cartItems.length}
        toggleCartDrawer={toggleCartDrawer}
      />
      <ProductsFeature cartItems={cartItems} setCartItems={setCartItems} />
      <CartDrawerComponent
        isOpen={isOpen}
        toggleCartDrawer={toggleCartDrawer}
        cartItems={cartItems}
        setCartItems={setCartItems}
        totalCredits={totalCredits}
        setTotalCredits={setTotalCredits}
      />
    </div>
  );
};

export default App;
