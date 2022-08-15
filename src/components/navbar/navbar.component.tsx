import "./navbar.component.scss";
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import { FC } from "react";

type NavbarProps = {
  numberOfCartItems: number;
  totalCredits: number;
};

const NavBar: FC<NavbarProps> = ({ numberOfCartItems, totalCredits }) => {
  return (
    <AppBar position="fixed" className="mart--navbar">
      <Toolbar>
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*R_9fxARs388FHxbffuKyTg.png"
          alt="Up42 logo"
          className="mart--logo"
        />
        <Box>
          Total Credits: <strong>{totalCredits}</strong>
        </Box>
        <IconButton aria-label="cart" color="inherit">
          <Badge
            badgeContent={numberOfCartItems}
            color="error"
            max={9}
            showZero
          >
            <ShoppingCart className="custom-basket" />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
