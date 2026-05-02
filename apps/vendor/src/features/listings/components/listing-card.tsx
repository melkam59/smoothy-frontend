export type ListingCardProps = {
  title: string;
  city: string;
  pricePerNight: number;
  currency?: string;
};

export function ListingCard({ title, city, pricePerNight, currency = "USD" }: ListingCardProps) {
  return (
    <article data-testid="listing-card" className="rounded-lg border p-4">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{city}</p>
      <p data-testid="listing-price" className="mt-2 font-semibold">
        {new Intl.NumberFormat(undefined, {
          style: "currency",
          currency,
        }).format(pricePerNight)}
        <span className="text-sm font-normal text-muted-foreground"> / night</span>
      </p>
    </article>
  );
}
