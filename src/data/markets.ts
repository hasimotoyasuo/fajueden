export interface MarketEvent {
  id: string;
  title: string;
  dates: string;
  location: string;
  time?: string;
  admission: string;
  description?: string;
  highlights: string[];
  isUpcoming: boolean;
  category?: "market" | "training" | "workshop";
  partner?: string;
}

export const marketEvents: MarketEvent[] = [
  {
    id: "market-002",
    title: "Kakamega Farmers Market — 2nd Edition",
    dates: "December 4–5, 2026",
    time: "10:30 AM – 4:30 PM",
    location: "Naivas Parking (Cathedral Mall), Kakamega Town",
    admission: "Free Entry & Free Tasting",
    description:
      "Following the great response to our 1st edition, we're back for the 2nd Kakamega Farmers Market! Join us and local farmers from across Kakamega County to taste and buy fresh organic produce, mushrooms, honey, and herbal products directly from the growers.",
    highlights: [
      "Fresh & Dried Oyster Mushrooms",
      "Sweet Strawberries & Jam",
      "Organic Vegetables",
      "Moringa, Mukuna & Hibiscus",
      "100% Pure Honey",
    ],
    isUpcoming: true,
    category: "market",
  },
  {
    id: "training-mushroom-001",
    title: "Mushroom Cultivation Training",
    dates: "November 5, 2026",
    location: "Faju Eden Farm, Kakamega",
    admission: "Hosted by Faju Eden × RICO FARM",
    partner: "RICO FARM",
    description:
      "Faju Eden hosted a hands-on mushroom cultivation training session in collaboration with RICO FARM. We invited an expert trainer from RICO FARM to share practical knowledge on oyster mushroom production, substrate preparation, and mushroom hut management with local farmers.",
    highlights: [
      "Guest Trainer from RICO FARM",
      "Mushroom Production Lecture",
      "Hands-on Substrate Bag Demo",
      "Farmer Q&A & Knowledge Exchange",
    ],
    isUpcoming: false,
    category: "training",
  },
  {
    id: "market-001",
    title: "Kakamega Farmers Market — 1st Edition",
    dates: "October 16–17, 2026",
    location: "Naivas Parking, Kakamega Town",
    admission: "Free Entry & Free Tasting",
    description:
      "Our inaugural two-day farmers market in Kakamega Town welcomed around 140 visitors! Together with partner farms including RICO FARM, Myco Enterprise, and Holistic Centre, we connected directly with the local community through free tastings and farm-direct sales.",
    highlights: [
      "Fresh Oyster Mushrooms & Soup Tasting",
      "Strawberry Jam & Organic Greens",
      "Moringa, Mukuna & Hibiscus Powders",
      "100% Pure Honey & Beeswax Products",
    ],
    isUpcoming: false,
    category: "market",
  },
];
