import { Grid, Box, Typography, Button, Avatar } from "@mui/material";
import { ShoppingBasket, TaskAlt } from "@mui/icons-material";
import { FC } from "react";
import { IProductComponentProps } from ".";

export const ProductComponent: FC<IProductComponentProps> = ({
  product,
  cartItems,
  handleAddToCart,
}) => {
  const { id, name, metadata, displayName } = product;
  const isItemInCart = () => Boolean(cartItems.find((item) => item.id === id));

  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={6}
      xs={12}
      style={{
        height: "340px",
      }}
    >
      <Box height={200} bgcolor="lightgray">
        <Avatar
          alt={name}
          src={metadata?.blockThumbnailUrl}
          variant="square"
          sx={{ width: "100%", height: "100%" }}
        >
          <img
            alt={name}
            style={{ width: "100%", height: "100%" }}
            src="/default-image.png"
          />
        </Avatar>
      </Box>
      <Box
        sx={{ pt: 1, pb: 2 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid transparent"
        boxShadow="3.4466px 3.4466px 8.6165px rgb(196 196 196 / 20%)"
        borderRadius="0.4rem"
        height="138px"
        bgcolor="#fff"
      >
        <Typography gutterBottom variant="body1">
          {displayName}
        </Typography>
        <Typography display="block" variant="caption" color="text.secondary">
          {metadata?.blockPricingStrategy?.credits} Credits
        </Typography>
        {isItemInCart() ? (
          <Button variant="contained" startIcon={<TaskAlt />}>
            Added to cart
          </Button>
        ) : (
          <Button
            variant="outlined"
            startIcon={<ShoppingBasket />}
            onClick={() => handleAddToCart(product)}
          >
            Add to cart
          </Button>
        )}
      </Box>
    </Grid>
  );
};

export default ProductComponent;
