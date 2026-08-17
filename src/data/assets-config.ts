/**
 * ASSETS CONFIGURATION
 * 
 * Yaha se easily images import karo aur categories ko map karo.
 * Naya image add karna hai? Sirf yaha add karo, aur portfolio automatically update ho jayega!
 */

import img1 from "@/assets/portfolio/file_000000000b6c8211a7fe14b6a5a54431.png";
import img2 from "@/assets/portfolio/file_000000006b648207b9dfcfca6633dc23.png";
import img3 from "@/assets/portfolio/file_00000000b95c82079f5abee66e41b5f5.png";
import img4 from "@/assets/portfolio/file_00000000dae4820799dae607055adbca.png";
import img5 from "@/assets/portfolio/first.png";

/**
 * Category ke hisaab se images map karo
 * 
 * HOW TO ADD NEW CATEGORY WITH IMAGE:
 * 1. Apna image import karo upar (e.g., import myImage from "@/assets/portfolio/image.png")
 * 2. Yaha add karo: "Category Name": myImage
 * 3. Works.ts me category add karo
 * Done! ✅
 */
export const categoryImages: Record<string, string> = {
  "Logo Design": img1,
  "Social Posts": img2,
  "Brand Identity": img3,
  "Apparel Graphics": img4,
  "Product Mockups": img5,
  "Packaging": img1,
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
  "Logo Design",
  "Brand Identity",
  "Apparel Graphics",
  "Product Mockups",
  "Social Media",
  "Packaging",
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
