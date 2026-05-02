import { makeUser, renderWithProviders, screen } from "@smoothy-fe/test-utils";
import { describe, expect, it } from "vitest";
import { UserRow } from "./user-row";

describe("UserRow", () => {
  it("renders user name, email, and role", () => {
    const user = makeUser({ name: "Alice", email: "alice@example.com", role: "admin" });

    renderWithProviders(<UserRow name={user.name} email={user.email} role={user.role} />);

    expect(screen.getByText("Alice")).toBeDefined();
    expect(screen.getByText("alice@example.com")).toBeDefined();
    expect(screen.getByTestId("user-role").textContent).toBe("admin");
  });
});
