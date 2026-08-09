import menu from "@/assets/work-menu.jpg";
import logo from "@/assets/work-logo.jpg";
import post from "@/assets/work-post.jpg";
import website from "@/assets/work-website.jpg";
import flyer from "@/assets/work-flyer.jpg";
import card from "@/assets/work-card.jpg";
import packaging from "@/assets/work-packaging.jpg";

export type WorkItem = {
  id: string;
  title: string;
  client: string;
  niche: string;
  category: string;
  image: string;
};

/** Niches shown as the top filter row. Restaurants is always first. */
export const niches = [
  "Restaurants",
  "Cafés",
  "Cloud Kitchens",
  "Bakery & Desserts",
  "Food Trucks",
  "Fine Dining",
  "Shisha Lounges",
  "Catering",
  "Juice & Smoothie Bars",
  "Hotels & Resorts",
] as const;

/** Sub-filters used inside a niche. */
export const categories = [
  "Menu Design",
  "Social Posts",
  "Logo & Branding",
  "Flyers",
  "Business Cards",
  "Packaging",
  "Website Design",
] as const;

const images: Record<string, string> = {
  "Menu Design": menu,
  "Social Posts": post,
  "Logo & Branding": logo,
  Flyers: flyer,
  "Business Cards": card,
  Packaging: packaging,
  "Website Design": website,
};

const clients: Record<string, string[]> = {
  Restaurants: ["Al Mandi House", "Rosso Kitchen", "Ryoku Dubai", "Spice Haus"],
  Cafés: ["Brew Lane", "Cafe Noor", "Third Cup"],
  "Cloud Kitchens": ["Ghost Grill", "Kitchen 24", "Boxd"],
  "Bakery & Desserts": ["Maison Sucre", "Knead", "Dolce Bake"],
  "Food Trucks": ["Smoke Street", "Burger Bus", "Taco Route"],
  "Fine Dining": ["Renaissance", "Aurum", "Le Sel"],
  "Shisha Lounges": ["Layali Lounge", "Oud & Ember", "Majlis 7"],
  Catering: ["Feast Co.", "Golden Tray", "Banquet Dubai"],
  "Juice & Smoothie Bars": ["Press & Pour", "Verde", "Citrus Lab"],
  "Hotels & Resorts": ["Palm Bay", "Marina Grand", "Dune Resort"],
};

/**
 * Add a new project by pushing an object here — image is picked automatically
 * from the category, so managing the portfolio stays easy.
 */
export const works: WorkItem[] = niches.flatMap((niche) =>
  categories.map((category, i) => ({
    id: `${niche}-${category}`,
    title: category,
    client: clients[niche]![i % clients[niche]!.length]!,
    niche,
    category,
    image: images[category]!,
  })),
);
