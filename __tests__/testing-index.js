/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages/index";

describe("App", () => {
  it("renders a clever header", () => {
    const { getByRole } = render(<Index />);

    const heading = getByRole("heading", {
      name: "Limited movies, TV shows, and more related to bees.",
    });

    expect(heading).toBeInTheDocument();
  });
});
