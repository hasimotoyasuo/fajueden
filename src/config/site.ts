export const siteConfig = {
  name: "FAJU EDEN",
  tagline: "Healthy Soil, Healthy Products",
  description:
    "Organic farm in Kakamega, Kenya — growing vegetables, strawberries, mushrooms, and more with sustainable practices.",
  location: "Kakamega, Kenya",
  whatsapp: {
    number: "254707644247",
    displayNumber: "+254 707 644247",
    defaultMessage: "Hello! I'd like to know more about Faju Eden.",
    marketMessage:
      "Hello! I'd like to know more about Kakamega Farmers Market.",
  },
  social: {
    instagram: "https://www.instagram.com/fajueden.037",
    instagramHandle: "@fajueden.037",
    facebook: "https://www.facebook.com/share/19d7GFVZU4/",
  },
} as const;

export function getWhatsAppUrl(message?: string): string {
  const msg = message ?? siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(msg)}`;
}
