import EmailHeader from "@/components/Navbar/navbar";
import { render, screen } from "@testing-library/react";

describe("header", () => {
  it("renders the header correctly", () => {
    expect.hasAssertions();
    render(<EmailHeader />);

    expect(screen.getByText("Boilerplate.")).toBeInTheDocument();

    const dots = screen.getAllByTestId("dot");
    expect(dots).toHaveLength(4);
  });
});
