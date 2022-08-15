export interface INavbarProps {
  numberOfCartItems: number;
  totalCredits: number;
  toggleCartDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
}
