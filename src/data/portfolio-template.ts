/**
 * 🎨 PORTFOLIO TEMPLATE - EASY ADD KARKE!
 * 
 * Yaha se easily naye designs add karo.
 * Bas copy-paste karo aur fill karo!
 * 
 * HOW TO ADD NEW DESIGN:
 * 1. Apna image src/assets/ me add karo (e.g., work-pizzahaven.jpg)
 * 2. Yaha import karo: import pizzahaven from "@/assets/work-pizzahaven.jpg"
 * 3. portfolioItems array me add karo (template neeche diya hai)
 * Done! ✅
 */

// ==========================================
// STEP 1: YAHA IMAGES IMPORT KARO
// ==========================================
import menu1 from "@/assets/menu1.jpg";
import menu2 from "@/assets/menu2.jpg";
import menu3 from "@/assets/menu3.jpg";
import menu4 from "@/assets/menu4.jpg";
import menu5 from "@/assets/menu5.jpg";
import menu6 from "@/assets/menu6.jpg";
import menu7 from "@/assets/menu7.jpg";
import menu8 from "@/assets/menu8.jpg";

import cafepost from "@/assets/cafepost.jpg";
import cafepost1 from "@/assets/cafepost1.jpg";
import cafepost2 from "@/assets/cafepost2.jpg";
import cafepost3 from "@/assets/cafepost3.jpg";
import cafepostdesign from "@/assets/cafepostdesign.jpg";
import cafepost6 from "@/assets/cafepost6.jpg";

import cafelogo1 from "@/assets/cafelogo1.jpg";
import cafelogo2 from "@/assets/cafelogo2.jpg";
import cafelogo4 from "@/assets/cafelogo4.jpg";
import cafelogo5 from "@/assets/cafelogo5.jpg";

import resturantlogo from "@/assets/resturantlogo.jpg";
import restruantlog from "@/assets/restruantlog.jpg";
import restruantlog2 from "@/assets/restruantlog2.jpg";
import resturantlog1 from "@/assets/resturantlog1.jpg";
import restruanltlog from "@/assets/restruanltlog.jpg";

import resturantpost1 from "@/assets/resturantpost1.jpg";
import resturantpost3 from "@/assets/resturantpost3.jpg";
import restruantpost4 from "@/assets/restruantpost4.jpg";

import backerymenu from "@/assets/backerymenu.jpg";
import backerypost from "@/assets/backerypost.jpg";
import backrpost from "@/assets/backrpost.jpg";
import backrylog from "@/assets/backrylog.jpg";
import backrylogo from "@/assets/backrylogo.jpg";
import bakcyrelog from "@/assets/bakcyrelog.jpg";

// ==========================================
// STEP 2: PORTFOLIO ITEM STRUCTURE
// ==========================================
export type PortfolioItem = {
  id: string; // Unique ID (e.g., "pizzahaven-menu")
  title: string; // Design type (e.g., "Menu Design")
  client: string; // Client name (e.g., "Pizza Haven")
  niche: string; // Industry (e.g., "Restaurants")
  category: string; // Category (e.g., "Menu Design", "Logo & Branding")
  image: string; // Image path
  description?: string; // Short info about design (optional)
  colors?: string[]; // Colors used (optional)
  tools?: string[]; // Design tools used (optional)
};

// ==========================================
// STEP 3: PORTFOLIO ITEMS - YOUR ASSETS!
// ==========================================

export const portfolioItems: PortfolioItem[] = [
  // ==========================================
  // RESTAURANTS - MENU DESIGNS
  // ==========================================
  {
    id: "rosso-menu-1",
    title: "Menu Design",
    client: "Rosso Kitchen",
    niche: "Restaurants",
    category: "Menu Design",
    image: menu1,
    description: "Modern restaurant menu with elegant typography and food photography",
    colors: ["#2C3E50", "#E74C3C"],
    tools: ["Photoshop", "InDesign"],
  },
  {
    id: "spice-menu-2",
    title: "Menu Design",
    client: "Spice Haus",
    niche: "Restaurants",
    category: "Menu Design",
    image: menu2,
    description: "Traditional spice menu with warm color palette",
  },
  {
    id: "table-menu-3",
    title: "Menu Design",
    client: "Table Talk",
    niche: "Restaurants",
    category: "Menu Design",
    image: menu3,
  },
  {
    id: "kebab-menu-4",
    title: "Menu Design",
    client: "Kebab Corner",
    niche: "Restaurants",
    category: "Menu Design",
    image: menu4,
  },
  {
    id: "pizza-menu-5",
    title: "Menu Design",
    client: "Pizza Haven",
    niche: "Restaurants",
    category: "Menu Design",
    image: menu5,
  },
  {
    id: "biryani-menu-6",
    title: "Menu Design",
    client: "Biryani House",
    niche: "Restaurants",
    category: "Menu Design",
    image: menu6,
  },
  {
    id: "grill-menu-7",
    title: "Menu Design",
    client: "Grill Master",
    niche: "Restaurants",
    category: "Menu Design",
    image: menu7,
  },
  {
    id: "curry-menu-8",
    title: "Menu Design",
    client: "Curry King",
    niche: "Restaurants",
    category: "Menu Design",
    image: menu8,
  },

  // ==========================================
  // RESTAURANTS - SOCIAL POSTS
  // ==========================================
  {
    id: "ryoku-post-1",
    title: "Social Posts",
    client: "Ryoku Dubai",
    niche: "Restaurants",
    category: "Social Posts",
    image: resturantpost1,
    description: "Engaging social media post for restaurant promotion",
  },
  {
    id: "almandi-post-2",
    title: "Social Posts",
    client: "Al Mandi House",
    niche: "Restaurants",
    category: "Social Posts",
    image: resturantpost3,
  },
  {
    id: "flavour-post-3",
    title: "Social Posts",
    client: "Flavour Junction",
    niche: "Restaurants",
    category: "Social Posts",
    image: restruantpost4,
  },

  // ==========================================
  // RESTAURANTS - LOGO & BRANDING
  // ==========================================
  {
    id: "rosso-logo",
    title: "Logo & Branding",
    client: "Rosso Kitchen",
    niche: "Restaurants",
    category: "Logo & Branding",
    image: resturantlogo,
    description: "Professional restaurant branding and logo design",
  },
  {
    id: "table-logo",
    title: "Logo & Branding",
    client: "Table Talk",
    niche: "Restaurants",
    category: "Logo & Branding",
    image: restruantlog,
  },
  {
    id: "pizza-logo",
    title: "Logo & Branding",
    client: "Pizza Haven",
    niche: "Restaurants",
    category: "Logo & Branding",
    image: restruantlog2,
  },
  {
    id: "curry-logo",
    title: "Logo & Branding",
    client: "Curry King",
    niche: "Restaurants",
    category: "Logo & Branding",
    image: resturantlog1,
  },
  {
    id: "grill-logo",
    title: "Logo & Branding",
    client: "Grill Master",
    niche: "Restaurants",
    category: "Logo & Branding",
    image: restruanltlog,
  },

  // ==========================================
  // CAFÉS - SOCIAL POSTS
  // ==========================================
  {
    id: "brew-post-1",
    title: "Social Posts",
    client: "Brew Lane",
    niche: "Cafés",
    category: "Social Posts",
    image: cafepost,
    description: "Coffee cafe social media content",
  },
  {
    id: "noor-post-2",
    title: "Social Posts",
    client: "Cafe Noor",
    niche: "Cafés",
    category: "Social Posts",
    image: cafepost1,
  },
  {
    id: "third-post-3",
    title: "Social Posts",
    client: "Third Cup",
    niche: "Cafés",
    category: "Social Posts",
    image: cafepost2,
  },
  {
    id: "espresso-post-4",
    title: "Social Posts",
    client: "Espresso Corner",
    niche: "Cafés",
    category: "Social Posts",
    image: cafepost3,
  },
  {
    id: "artisan-post-5",
    title: "Social Posts",
    client: "Artisan Brew",
    niche: "Cafés",
    category: "Social Posts",
    image: cafepostdesign,
  },
  {
    id: "blend-post-6",
    title: "Social Posts",
    client: "The Blend",
    niche: "Cafés",
    category: "Social Posts",
    image: cafepost6,
  },

  // ==========================================
  // CAFÉS - LOGO & BRANDING
  // ==========================================
  {
    id: "brew-logo",
    title: "Logo & Branding",
    client: "Brew Lane",
    niche: "Cafés",
    category: "Logo & Branding",
    image: cafelogo1,
    description: "Modern cafe branding identity",
  },
  {
    id: "noor-logo",
    title: "Logo & Branding",
    client: "Cafe Noor",
    niche: "Cafés",
    category: "Logo & Branding",
    image: cafelogo2,
  },
  {
    id: "daily-logo",
    title: "Logo & Branding",
    client: "The Daily Grind",
    niche: "Cafés",
    category: "Logo & Branding",
    image: cafelogo4,
  },
  {
    id: "coffee-logo",
    title: "Logo & Branding",
    client: "Coffee Bean",
    niche: "Cafés",
    category: "Logo & Branding",
    image: cafelogo5,
  },

  // ==========================================
  // BAKERY & DESSERTS - MENU DESIGNS
  // ==========================================
  {
    id: "bakery-menu-1",
    title: "Menu Design",
    client: "Maison Sucre",
    niche: "Bakery & Desserts",
    category: "Menu Design",
    image: backerymenu,
    description: "Sweet bakery menu with appetizing dessert imagery",
  },
  {
    id: "knead-menu-2",
    title: "Menu Design",
    client: "Knead",
    niche: "Bakery & Desserts",
    category: "Menu Design",
    image: backrpost,
  },

  // ==========================================
  // BAKERY & DESSERTS - SOCIAL POSTS
  // ==========================================
  {
    id: "bakery-post-1",
    title: "Social Posts",
    client: "Dolce Bake",
    niche: "Bakery & Desserts",
    category: "Social Posts",
    image: backerypost,
  },

  // ==========================================
  // BAKERY & DESSERTS - LOGO & BRANDING
  // ==========================================
  {
    id: "sucre-logo",
    title: "Logo & Branding",
    client: "Maison Sucre",
    niche: "Bakery & Desserts",
    category: "Logo & Branding",
    image: backrylog,
    description: "Elegant bakery branding design",
  },
  {
    id: "sweet-logo",
    title: "Logo & Branding",
    client: "Sweet Dreams",
    niche: "Bakery & Desserts",
    category: "Logo & Branding",
    image: backrylogo,
  },
  {
    id: "cake-logo",
    title: "Logo & Branding",
    client: "Cake Dreams",
    niche: "Bakery & Desserts",
    category: "Logo & Branding",
    image: bakcyrelog,
  },

  // ==========================================
  // RESTAURANTS - BUSINESS CARDS
  // ==========================================
  {
    id: "rosso-cards",
    title: "Business Cards",
    client: "Rosso Kitchen",
    niche: "Restaurants",
    category: "Business Cards",
    image: "work-card.jpg",
    description: "Premium business cards with elegant branding",
  },
  {
    id: "spice-cards",
    title: "Business Cards",
    client: "Spice Haus",
    niche: "Restaurants",
    category: "Business Cards",
    image: "work-card.jpg",
  },
  {
    id: "pizza-cards",
    title: "Business Cards",
    client: "Pizza Haven",
    niche: "Restaurants",
    category: "Business Cards",
    image: "work-card.jpg",
  },
  {
    id: "biryani-cards",
    title: "Business Cards",
    client: "Biryani House",
    niche: "Restaurants",
    category: "Business Cards",
    image: "work-card.jpg",
  },

  // ==========================================
  // CAFÉS - BUSINESS CARDS
  // ==========================================
  {
    id: "brew-cards",
    title: "Business Cards",
    client: "Brew Lane",
    niche: "Cafés",
    category: "Business Cards",
    image: "work-card.jpg",
    description: "Coffee shop business cards",
  },
  {
    id: "noor-cards",
    title: "Business Cards",
    client: "Cafe Noor",
    niche: "Cafés",
    category: "Business Cards",
    image: "work-card.jpg",
  },
  {
    id: "daily-cards",
    title: "Business Cards",
    client: "The Daily Grind",
    niche: "Cafés",
    category: "Business Cards",
    image: "work-card.jpg",
  },

  // ==========================================
  // BAKERY & DESSERTS - BUSINESS CARDS
  // ==========================================
  {
    id: "maison-cards",
    title: "Business Cards",
    client: "Maison Sucre",
    niche: "Bakery & Desserts",
    category: "Business Cards",
    image: "work-card.jpg",
    description: "Bakery business cards",
  },
  {
    id: "knead-cards",
    title: "Business Cards",
    client: "Knead",
    niche: "Bakery & Desserts",
    category: "Business Cards",
    image: "work-card.jpg",
  },
];

// ==========================================
// VALID NICHES (Use exactly!)
// ==========================================
const VALID_NICHES = [
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
];

// ==========================================
// VALID CATEGORIES (Use exactly!)
// ==========================================
const VALID_CATEGORIES = [
  "Menu Design",
  "Social Posts",
  "Logo & Branding",
  "Flyers",
  "Business Cards",
  "Packaging",
  "Website Design",
];

// ==========================================
// QUICK REFERENCE - COLOR CODES
// ==========================================
const COLOR_PALETTE = {
  red: "#E63946",
  white: "#FFFFFF",
  blue: "#457B9D",
  gold: "#E8C547",
  black: "#2C3E50",
  green: "#2A9D8F",
  orange: "#E76F51",
  cream: "#F1FAEE",
};

// ==========================================
// DESIGN TOOLS REFERENCE
// ==========================================
const TOOLS = {
  design: ["Figma", "Adobe XD", "Sketch"],
  photo: ["Photoshop", "Lightroom", "Capture One"],
  layout: ["InDesign", "Illustrator", "CorelDRAW"],
  web: ["Webflow", "Framer", "WordPress"],
};

// ==========================================
// QUICK EXAMPLE - UNCOMMNET TO USE
// ==========================================
// YAHA UNCOMMENT KARO AUR APNA DATA FILL KARO:
/*

// Step 1: Import image
import spiceHausImage from "@/assets/work-spicehaus.jpg";

// Step 2: Add to portfolioItems array
{
  id: "spicehaus-flyer",
  title: "Flyers",
  client: "Spice Haus",
  niche: "Restaurants",
  category: "Flyers",
  image: spiceHausImage,
  description: "Eye-catching promotional flyer with mouth-watering food images and special offers",
  colors: ["#C41E3A", "#FFD700", "#FFFFFF"],
  tools: ["Photoshop", "Illustrator"],
}

*/

// ==========================================
// HOW TO USE IN COMPONENTS
// ==========================================
/*

import { portfolioItems } from "@/data/portfolio-template";

export function Portfolio() {
  return (
    <div>
      {portfolioItems.map((item) => (
        <div key={item.id}>
          <h3>{item.client}</h3>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
}

*/
