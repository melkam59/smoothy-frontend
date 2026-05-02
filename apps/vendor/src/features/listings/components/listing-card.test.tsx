import { makeListing, renderWithProviders, screen } from "@smoothy-fe/test-utils";
import { describe, expect, it } from "vitest";
import { ListingCard } from "./listing-card";

describe("ListingCard", () => {
  it("renders title, city, and formatted price", () => {
    const listing = makeListing({ title: "Lakeview Cabin", city: "Bishoftu", pricePerNight: 120 });

    renderWithProviders(
      <ListingCard
        title={listing.title}
        city={listing.city}
        pricePerNight={listing.pricePerNight}
        currency="USD"
      />,
    );

    expect(screen.getByText("Lakeview Cabin")).toBeDefined();
    expect(screen.getByText("Bishoftu")).toBeDefined();
    expect(screen.getByTestId("listing-price").textContent).toContain("120");
  });
});
