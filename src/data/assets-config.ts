/**
 * ASSETS CONFIGURATION
 * 
 * Yaha se easily images import karo aur categories ko map karo.
 * Naya image add karna hai? Sirf yaha add karo, aur portfolio automatically update ho jayega!
 */

import menu from "@/assets/menu1.jpg";
import logo from "@/assets/resturantlogo.jpg";
import post from "@/assets/cafepost.jpg";
import website from "@/assets/work-website.jpg";
import flyer from "@/assets/work-flyer.jpg";
import card from "@/assets/work-card.jpg";
import packaging from "@/assets/work-packaging.jpg";

/**
 * Category ke hisaab se images map karo
 * 
 * HOW TO ADD NEW CATEGORY WITH IMAGE:
 * 1. Apna image import karo upar (e.g., import myImage from "@/assets/work-something.jpg")
 * 2. Yaha add karo: "Category Name": myImage
 * 3. Works.ts me category add karo
 * Done! ✅
 */
export const categoryImages: Record<string, string> = {
  "Menu Design": menu,
  "Social Posts": post,
  "Logo & Branding": logo,
  "Flyers": flyer,
  "Business Cards": card,
  "Packaging": packaging,
  "Website Design": website,
  // Naye categories yaha add karo:
  // "Brochure Design": brochureImage,
  // "Print Design": printImage,
};

/**
 * Niches (Industry/Business Types)
 * Yaha se main filter row create hoti hai
 */
export const niches = [
  "Clothing Brand",
] as const;

/**
 * Categories (Design Types)
 * Sub-filter row
 */
export const categories = [
  "Menu Design",
  "Social Posts",
  "Logo & Branding",
  "Flyers",
  "Business Cards",
  "Packaging",
  "Website Design",
] as const;

/**
 * CLIENT NAMES BY NICHE
 * 
 * HOW TO ADD NEW CLIENTS:
 * 1. Niche select karo (e.g., "Restaurants")
 * 2. Array me naya client naam add karo
 * 3. System automatically har category ke liye client assign karega
 */
export const clients: Record<string, string[]> = {
  "Clothing Brand": ["Fashion House", "Urban Wear", "Style Studio", "Trend Boutique", "Modern Threads", "Premium Collection", "Elite Fashion", "Couture"],
};
