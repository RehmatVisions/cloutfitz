/**
 * 🎨 CLOUTFITZ PORTFOLIO - APPAREL DESIGN SHOWCASE
 * 
 * Monthly apparel design portfolio
 * T-shirts, Hoodies, Sweaters, Social Posts, Branding, etc.
 */

import img1 from "@/assets/portfolio/file_000000000b6c8211a7fe14b6a5a54431.png";
import img2 from "@/assets/portfolio/file_000000006b648207b9dfcfca6633dc23.png";
import img3 from "@/assets/portfolio/file_00000000b95c82079f5abee66e41b5f5.png";
import img4 from "@/assets/portfolio/file_00000000dae4820799dae607055adbca.png";
import img5 from "@/assets/portfolio/first.png";

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  niche: string;
  category: string;
  image: string;
  description?: string;
};

const categories = ["Logo Design", "Brand Identity", "Apparel Graphics", "Product Mockups", "Social Media", "Packaging"] as const;
const clients = ["Fashion Brand", "Urban Wear", "Modern Threads", "Apparel Co", "Design Studio"] as const;

// Generate portfolio items from available images
export const portfolioItems: PortfolioItem[] = [
  {
    id: "portfolio-1",
    title: "Premium Logo Design",
    client: clients[0],
    niche: "Clothing Brand",
    category: categories[0],
    image: img1,
    description: "Bold, memorable logo design for modern apparel brand",
  },
  {
    id: "portfolio-2",
    title: "Complete Brand Identity",
    client: clients[1],
    niche: "Clothing Brand",
    category: categories[1],
    image: img2,
    description: "Full brand system with guidelines and variations",
  },
  {
    id: "portfolio-3",
    title: "Apparel Graphic Design",
    client: clients[2],
    niche: "Clothing Brand",
    category: categories[2],
    image: img3,
    description: "Custom T-shirt and hoodie graphics ready for print",
  },
  {
    id: "portfolio-4",
    title: "Product Mockup Series",
    client: clients[3],
    niche: "Clothing Brand",
    category: categories[3],
    image: img4,
    description: "Professional mockups on hoodies, T-shirts, and caps",
  },
  {
    id: "portfolio-5",
    title: "Social Media Campaign",
    client: clients[4],
    niche: "Clothing Brand",
    category: categories[4],
    image: img5,
    description: "Instagram-ready designs for product launches",
  },
  // Repeat items for more portfolio display
  {
    id: "portfolio-6",
    title: "Brand Logo Refresh",
    client: clients[1],
    niche: "Clothing Brand",
    category: categories[0],
    image: img1,
    description: "Modern logo redesign with strong visual identity",
  },
  {
    id: "portfolio-7",
    title: "Streetwear Brand System",
    client: clients[2],
    niche: "Clothing Brand",
    category: categories[1],
    image: img2,
    description: "Complete identity system for streetwear brand",
  },
  {
    id: "portfolio-8",
    title: "Hoodie Design Collection",
    client: clients[3],
    niche: "Clothing Brand",
    category: categories[2],
    image: img3,
    description: "Bold hoodie graphics with multiple colorways",
  },
  {
    id: "portfolio-9",
    title: "Packaging Design",
    client: clients[4],
    niche: "Clothing Brand",
    category: categories[3],
    image: img4,
    description: "Premium packaging and unboxing experience design",
  },
  {
    id: "portfolio-10",
    title: "Instagram Campaign",
    client: clients[0],
    niche: "Clothing Brand",
    category: categories[4],
    image: img5,
    description: "Professional social media content for monthly campaigns",
  },
  {
    id: "portfolio-11",
    title: "Corporate Logo Design",
    client: clients[3],
    niche: "Clothing Brand",
    category: categories[0],
    image: img1,
    description: "Professional branding for corporate apparel line",
  },
  {
    id: "portfolio-12",
    title: "Complete Design Package",
    client: clients[4],
    niche: "Clothing Brand",
    category: categories[1],
    image: img2,
    description: "Full brand identity with logos, guidelines, and mockups",
  },
];
