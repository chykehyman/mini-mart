import { cleanup, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { NavBarComponent, INavbarProps } from ".";

const queryClient = new QueryClient();
const props: INavbarProps = {
  numberOfCartItems: 5,
  toggleCartDrawer: jest.fn(),
  totalCredits: 250,
};
const getNavBarComponent = () => (
  <QueryClientProvider client={queryClient}>
    <NavBarComponent {...props} />
  </QueryClientProvider>
);
describe("NavBarComponent", () => {
  afterEach(cleanup);

  test('should render "NavBarComponent" correctly', () => {
    const { container } = render(getNavBarComponent());

    expect(container).toBeDefined();
  });

  test('should render "site logo", "total credits" and "number of cart items"', () => {
    render(getNavBarComponent());
    const siteLogo = screen.queryByTestId("site-logo");
    const totalCreditsEl = screen.queryByTestId(
      "total-credits-number"
    )?.textContent;
    const cartItemsNumberEl = screen.queryByTestId("cart-items-badge");

    expect(siteLogo).toBeInTheDocument();
    expect(totalCreditsEl).toBe(String(props.totalCredits));
    expect(cartItemsNumberEl).toHaveTextContent(
      String(props.numberOfCartItems)
    );
  });
});
