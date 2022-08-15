import { Container, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { ProductModel } from "../../api/model";
import { getMartProducts } from "../../api/logic";
import ProductsSkeleton from "../skeletons/products.skeleton";
import Product from "../product/product.component";

type ProductsProps = {
  onAddToCart: (cartItem: ProductModel) => void;
  cartItems: ProductModel[];
};
const ProductsComponent: FC<ProductsProps> = ({ onAddToCart, cartItems }) => {
  const { data, isLoading, error } = useQuery<ProductModel[]>(
    ["products"],
    getMartProducts,
    {
      refetchOnWindowFocus: false,
      retry: 2,
    }
  );

  // if (error) return "An error has occurred: " + (error as {message: string}).message;
  return (
    <Container style={{ marginTop: "75px" }}>
      <Grid container rowGap={4} columnSpacing={2}>
        {isLoading && <ProductsSkeleton />}
        {!isLoading &&
          data &&
          data.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={onAddToCart}
              cartItems={cartItems}
            />
          ))}
      </Grid>
    </Container>
  );
};

export default ProductsComponent;
