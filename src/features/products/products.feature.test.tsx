import { cleanup, render, screen } from "@testing-library/react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { ProductsFeature, IProductsFeatureProps } from ".";

jest.mock("../../components/skeletons", () => ({
  ProductsSkeleton: () => "ProductsSkeletonMock",
}));
jest.mock("../../components/product", () => ({
  ProductComponent: () => "ProductComponentMock",
}));
jest.mock("../../components/error-message", () => ({
  ErrorMessageComponent: () => "ErrorMessageComponentMock",
}));
jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

const queryClient = new QueryClient();
const props: IProductsFeatureProps = {
  cartItems: [],
  setCartItems: jest.fn(),
};
const apiResponse = { data: [{ id: 1 }], error: null, isLoading: false };
const getProductsFeature = () => (
  <QueryClientProvider client={queryClient}>
    <ProductsFeature {...props} />
  </QueryClientProvider>
);

describe("ProductsFeature", () => {
  afterEach(cleanup);
  const useQueryMock = useQuery as jest.Mock;
  test('should render "ProductsFeature" correctly', () => {
    useQueryMock.mockReturnValue(apiResponse);
    const { container } = render(getProductsFeature());

    expect(container).toBeDefined();
  });

  test("should render the skeleton loader when api request is still processing", () => {
    useQueryMock.mockReturnValue({ ...apiResponse, isLoading: true });
    render(getProductsFeature());

    expect(screen.getByText("ProductsSkeletonMock")).toBeInTheDocument();
  });

  test("should render ProductComponent when api request is done with NO errors", () => {
    useQueryMock.mockReturnValue(apiResponse);
    render(getProductsFeature());

    expect(screen.getByText("ProductComponentMock")).toBeInTheDocument();
  });

  test("should render ErrorMessageComponent when api request is done with errors", () => {
    useQueryMock.mockReturnValue({
      ...apiResponse,
      error: { message: "error" },
    });
    render(getProductsFeature());

    expect(screen.getByText("ErrorMessageComponentMock")).toBeInTheDocument();
  });
});
