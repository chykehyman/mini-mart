import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

jest.mock("./components/navbar", () => ({
  NavBarComponent: () => "NavBarComponentMock",
}));
jest.mock("./features/products", () => ({
  ProductsFeature: () => "ProductsFeatureMock",
}));

const queryClient = new QueryClient();

test("renders App correctly", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
  const navBarComponentMock = screen.getByText(/NavBarComponentMock/);
  const productsFeatureMock = screen.getByText(/ProductsFeatureMock/);

  expect(navBarComponentMock).toBeInTheDocument();
  expect(productsFeatureMock).toBeInTheDocument();
});
