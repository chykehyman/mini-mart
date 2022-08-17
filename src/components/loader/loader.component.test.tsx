import { cleanup, render, screen } from "@testing-library/react";

import LoaderComponent from "./loader.component";

jest.mock("react-loader-spinner", () => ({
  ...jest.requireActual("react-loader-spinner"),
  Circles: () => "Circles-Icon",
}));

describe("LoaderComponent", () => {
  afterEach(cleanup);

  test('should render "LoaderComponent" correctly', () => {
    const { container } = render(<LoaderComponent />);
    expect(container).toBeDefined();
  });

  test("should display loader text and icon", () => {
    const message = "loading content";
    render(<LoaderComponent message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText("Circles-Icon")).toBeInTheDocument();
  });
});
