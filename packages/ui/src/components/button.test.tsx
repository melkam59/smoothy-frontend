import { renderWithProviders, screen } from "@smoothy-fe/test-utils";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders children", () => {
    renderWithProviders(<Button>Book now</Button>);
    expect(screen.getByRole("button", { name: /book now/i })).toBeDefined();
  });

  it("applies the destructive variant class", () => {
    renderWithProviders(<Button variant="destructive">Cancel</Button>);
    const btn = screen.getByRole("button", { name: /cancel/i });
    expect(btn.className).toContain("bg-destructive");
  });
});
