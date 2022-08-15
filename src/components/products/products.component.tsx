import { Container, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { ProductModel } from "../../api/model";
import { getMartProducts } from "../../api/logic";
import { ProductsSkeleton } from "../skeletons";
import { ProductComponent } from "../product";
import { ErrorMessageComponent } from "../error-message";
import { IProductsProps } from ".";

export const ProductsComponent: FC<IProductsProps> = ({
  cartItems,
  setCartItems,
}) => {
  const { data, isLoading, error } = useQuery<ProductModel[]>(
    ["products"],
    getMartProducts,
    {
      refetchOnWindowFocus: false,
      retry: 2,
    }
  );

  const onAddToCart = (product: ProductModel) => {
    setCartItems((prev) => [...prev, { ...product }]);
  };

  if (error)
    return (
      <ErrorMessageComponent message={(error as { message: string }).message} />
    );

  return (
    <Container style={{ marginTop: "75px" }}>
      <Grid container rowGap={4} columnSpacing={2}>
        {isLoading && <ProductsSkeleton />}
        {!isLoading &&
          data &&
          data.map((product) => (
            <ProductComponent
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
