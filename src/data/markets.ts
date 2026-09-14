export interface MarketEvent {
  id: string;
  title: string;
  dates: string;
  location: string;
  time?: string;
  admission: string;
  highlights: string[];
  isUpcoming: boolean;
}

export const marketEvents: MarketEvent[] = [
  {
    id: "market-001",
    title: "Kakamega Farmers Market — 1st Edition",
    dates: "October 16–17, 2025",
    location: "Naivas Parking, Kakamega Town",
    admission: "Free Entry & Free Tasting",
    highlights: [
      "Fresh Oyster Mushrooms",
      "Sweet Strawberries",
      "Organic Vegetables",
    ],
    isUpcoming: true,
  },
];
