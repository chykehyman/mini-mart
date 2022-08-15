import { FC, Fragment, useMemo } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DeleteForever as DeleteBinIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import { ICartDrawerComponentProps } from ".";
import { ErrorMessageComponent } from "../error-message";

export const CartDrawerComponent: FC<ICartDrawerComponentProps> = ({
  isOpen,
  toggleCartDrawer,
  cartItems,
  setCartItems,
  totalCredits,
  setTotalCredits,
}) => {
  const totalCartCredits = useMemo(() => {
    const total: number = cartItems.reduce((acc, currItem) => {
      acc += currItem.metadata.blockPricingStrategy.credits;
      return acc;
    }, 0);

    return total;
  }, [cartItems]);
  const handleRemoveItem = (id: string) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleBuyCartItems = () => {
    if (totalCredits > totalCartCredits) {
      setCartItems([]);
      setTotalCredits((prev: number) => prev - totalCartCredits);
      toggleCartDrawer({} as React.MouseEvent);
      toast.success("Item(s) have been purchased successfully", {
        toastId: "itemsPurchaseSuccess",
      });
    } else
      toast.warn("Sorry!!. You don't have enough credits", {
        toastId: "noCreditsError",
      });
  };

  const renderCartDrawerHeader = () => (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgb(10, 25, 41)",
        color: "#fff",
        zIndex: 10,
      }}
    >
      <Box sx={{ padding: "19px" }}>
        <Typography variant="body1">My Cart</Typography>
      </Box>
      <Divider />
    </Box>
  );

  const renderCartDrawerListItems = () => (
    <List sx={{ marginTop: "55px", minHeight: "80vh" }}>
      {cartItems.map(({ id, metadata, displayName }) => (
        <Fragment key={id}>
          <ListItem disablePadding>
            <ListItemButton sx={{ alignItems: "flex-start" }}>
              <ListItemText primary={displayName} />
              <ListItemText
                sx={{
                  width: "36%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  marginTop: 0,
                }}
                primary={
                  <IconButton onClick={() => handleRemoveItem(id)}>
                    <DeleteBinIcon color="error" />
                  </IconButton>
                }
                secondary={
                  <Typography
                    sx={{ display: "block", fontWeight: "600" }}
                    component="strong"
                    variant="body2"
                  >
                    {metadata.blockPricingStrategy.credits} credits
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );

  const renderCartDrawerItemTotalSection = () => (
    <Box sx={{ padding: "19px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "10px",
        }}
      >
        <Typography variant="body1">Total:</Typography>
        <Typography variant="body1" sx={{ fontWeight: "600" }}>
          {totalCartCredits} Credits
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        startIcon={<AddIcon />}
        onClick={handleBuyCartItems}
      >
        Buy Now
      </Button>
    </Box>
  );

  const renderDrawerContent = () => (
    <>
      {renderCartDrawerListItems()}
      {renderCartDrawerItemTotalSection()}
    </>
  );

  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleCartDrawer}>
      <Box sx={{ width: 310 }} role="presentation">
        {renderCartDrawerHeader()}
        {cartItems.length > 0 ? (
          renderDrawerContent()
        ) : (
          <ErrorMessageComponent message=" No items in your cart" />
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawerComponent;
