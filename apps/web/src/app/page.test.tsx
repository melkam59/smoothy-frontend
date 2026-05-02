import { renderWithProviders, screen } from "@smoothy-fe/test-utils";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("shows the under-development notice", () => {
    renderWithProviders(<Home />);
    expect(screen.getByText(/this website is currently under development/i)).toBeDefined();
  });

  it("renders the API Status section", () => {
    renderWithProviders(<Home />);
    expect(screen.getByRole("heading", { name: /api status/i })).toBeDefined();
  });
});
