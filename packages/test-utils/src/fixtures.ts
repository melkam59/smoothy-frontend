export type UserFixture = {
  id: string;
  email: string;
  name: string;
  role: "customer" | "vendor" | "admin";
};

export type ListingFixture = {
  id: string;
  vendorId: string;
  title: string;
  pricePerNight: number;
  city: string;
};

export type BookingFixture = {
  id: string;
  listingId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  status: "pending" | "confirmed" | "cancelled";
};

export const makeUser = (overrides: Partial<UserFixture> = {}): UserFixture => ({
  id: "user_1",
  email: "user@example.com",
  name: "Test User",
  role: "customer",
  ...overrides,
});

export const makeListing = (overrides: Partial<ListingFixture> = {}): ListingFixture => ({
  id: "listing_1",
  vendorId: "vendor_1",
  title: "Cozy Loft",
  pricePerNight: 100,
  city: "Addis Ababa",
  ...overrides,
});

export const makeBooking = (overrides: Partial<BookingFixture> = {}): BookingFixture => ({
  id: "booking_1",
  listingId: "listing_1",
  userId: "user_1",
  checkIn: "2026-06-01",
  checkOut: "2026-06-05",
  status: "pending",
  ...overrides,
});
