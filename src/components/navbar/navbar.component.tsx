import "./navbar.component.scss";
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import { FC } from "react";
import { INavbarProps } from ".";

export const NavBarComponent: FC<INavbarProps> = ({
  numberOfCartItems,
  totalCredits,
  toggleCartDrawer,
}) => {
  return (
    <AppBar position="fixed" className="mart--navbar">
      <Toolbar>
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*R_9fxARs388FHxbffuKyTg.png"
          alt="Up42 logo"
          className="mart--logo"
          data-testid="site-logo"
        />
        <Box>
          Total Credits:{" "}
          <strong data-testid="total-credits-number">{totalCredits}</strong>
        </Box>
        <IconButton
          aria-label="cart"
          color="inherit"
          onClick={toggleCartDrawer}
        >
          <Badge
            badgeContent={numberOfCartItems}
            color="error"
            max={9}
            showZero
            data-testid="cart-items-badge"
          >
            <ShoppingCart className="custom-basket" />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
