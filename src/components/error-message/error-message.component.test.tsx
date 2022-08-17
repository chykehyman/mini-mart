import { cleanup, render, screen } from "@testing-library/react";

import { ErrorMessageComponent } from ".";

jest.mock("@mui/icons-material", () => ({
  ...jest.requireActual("@mui/icons-material"),
  ErrorOutline: () => "ErrorOutline-Icon",
}));

describe("ErrorMessageComponent", () => {
  const message = "Failed to load content";
  afterEach(cleanup);

  test('should render "ErrorMessageComponent" correctly', () => {
    const { container } = render(<ErrorMessageComponent message={message} />);

    expect(container).toBeDefined();
  });

  test("should display correct error contents", () => {
    render(<ErrorMessageComponent message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText("ErrorOutline-Icon")).toBeInTheDocument();
  });
});
