/**
 * DESIGNERS CONFIGURATION
 * 
 * Designer profile pictures, names, aur details yaha manage karo
 * Naya designer add karna? Sirf yaha add karo!
 */

import ahsanImage from "@/assets/designer-ahsan-ali.svg";
import ayeshaImage from "@/assets/designer-ayesha-rehman.svg";
import daniyalImage from "@/assets/designer-daniyal-karim.svg";
import mariamImage from "@/assets/designer-mariam-youssef.svg";
import hassanImage from "@/assets/designer-hassan-tariq.svg";

export type Designer = {
  name: string;
  role: string;
  tag: string;
  image?: string; // Optional - designer ka profile picture
  featured?: boolean; // First/featured designer
};

/**
 * Designer Profile Images
 * 
 * HOW TO ADD PROFILE PICTURE:
 * 1. Image ko src/assets/ me add karo (e.g., designer-ahsan.jpg)
 * 2. Import karo: import ahsanImage from "@/assets/designer-ahsan.jpg"
 * 3. Designers array me image field add karo
 */
export const designers: Designer[] = [
  {
    name: "Ahsan Ali",
    role: "Regional Design Specialist",
    tag: "UAE · Pakistan · GCC",
    image: ahsanImage,
    featured: true, // First/featured designer
  },
  {
    name: "Ayesha Rehman",
    role: "Brand & Identity Lead",
    tag: "Logos · Guidelines",
    image: ayeshaImage,
  },
  {
    name: "Daniyal Karim",
    role: "Print & Menu Designer",
    tag: "Menus · Flyers",
    image: daniyalImage,
  },
  {
    name: "Mariam Youssef",
    role: "Social Content Designer",
    tag: "Posts · Reels",
    image: mariamImage,
  },
  {
    name: "Hassan Tariq",
    role: "Web & UI Designer",
    tag: "Websites · Ordering",
    image: hassanImage,
  },
];

/**
 * NEW CLIENTS - ADD KARKE EASILY PORTFOLIO UPDATE HO
 * 
 * Format: "Niche": ["Client 1", "Client 2", ...]
 */
export const newClients = {
  Restaurants: [
    "Kebab Corner",
    "Pizza Haven",
    "Biryani House",
    "Grill Master",
    "Table Talk",
    "Curry King",
  ],
  Cafés: [
    "Espresso Corner",
    "Coffee Bean",
    "Chai House",
    "Artisan Brew",
    "The Blend",
  ],
  "Cloud Kitchens": [
    "Quick Eats",
    "Food Express",
    "Insta Bites",
    "Speed Kitchen",
  ],
  "Bakery & Desserts": [
    "Sugar Rush",
    "Bread & Joy",
    "Cake Dreams",
    "Pastry Paradise",
  ],
  "Food Trucks": [
    "Street Bites",
    "Mobile Feast",
    "Food on Wheels",
    "Roaming Kitchen",
  ],
  "Fine Dining": [
    "Elegance",
    "Culinary Art",
    "Prestige Table",
    "Luxury Taste",
  ],
  "Shisha Lounges": [
    "Lounge Paradise",
    "Luxury Hookah",
    "Arabian Nights",
    "Smoke & Relax",
  ],
  Catering: [
    "Event Feast",
    "Party Catering",
    "Celebration Co.",
    "Grand Events",
  ],
  "Juice & Smoothie Bars": [
    "Fresh Juice Bar",
    "Smoothie Paradise",
    "Juice Junction",
    "Health Blend",
  ],
  "Hotels & Resorts": [
    "Beachfront Resort",
    "Mountain Lodge",
    "Desert Oasis",
    "Skyline Hotel",
  ],
};
