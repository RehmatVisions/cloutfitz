/**
 * 🎨 CloudFitz PORTFOLIO - CLOTHING BRAND DESIGNS
 * 
 * Monthly basis manufacturing cloth brand designs
 * T-shirts, Hoodies, Sweaters, Jerseys, etc.
 */

import resturantlogo from "@/assets/resturantlogo.jpg";
import restruantlog from "@/assets/restruantlog.jpg";
import restruantlog2 from "@/assets/restruantlog2.jpg";
import resturantlog1 from "@/assets/resturantlog1.jpg";
import restruanltlog from "@/assets/restruanltlog.jpg";

import resturantpost1 from "@/assets/resturantpost1.jpg";
import resturantpost3 from "@/assets/resturantpost3.jpg";
import restruantpost4 from "@/assets/restruantpost4.jpg";

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  niche: string;
  category: string;
  image: string;
  description?: string;
  colors?: string[];
  tools?: string[];
};

export const portfolioItems: PortfolioItem[] = [
  // ==========================================
  // CLOTHING BRAND - LOGO & BRANDING
  // ==========================================
  {
    id: "fashion-logo-1",
    title: "Logo & Branding",
    client: "Fashion House",
    niche: "Clothing Brand",
    category: "Logo & Branding",
    image: resturantlogo,
    description: "Professional clothing brand logo for apparel manufacturing",
  },
  {
    id: "urban-logo-2",
    title: "Logo & Branding",
    client: "Urban Wear",
    niche: "Clothing Brand",
    category: "Logo & Branding",
    image: restruantlog,
    description: "Casual wear brand identity design",
  },
  {
    id: "style-logo-3",
    title: "Logo & Branding",
    client: "Style Studio",
    niche: "Clothing Brand",
    category: "Logo & Branding",
    image: restruantlog2,
  },
  {
    id: "trend-logo-4",
    title: "Logo & Branding",
    client: "Trend Boutique",
    niche: "Clothing Brand",
    category: "Logo & Branding",
    image: resturantlog1,
  },
  {
    id: "modern-logo-5",
    title: "Logo & Branding",
    client: "Modern Threads",
    niche: "Clothing Brand",
    category: "Logo & Branding",
    image: restruanltlog,
  },

  // ==========================================
  // CLOTHING BRAND - SOCIAL POSTS
  // ==========================================
  {
    id: "fashion-post-1",
    title: "Social Posts",
    client: "Fashion House",
    niche: "Clothing Brand",
    category: "Social Posts",
    image: resturantpost1,
    description: "T-shirt design showcase post",
  },
  {
    id: "urban-post-2",
    title: "Social Posts",
    client: "Urban Wear",
    niche: "Clothing Brand",
    category: "Social Posts",
    image: resturantpost3,
    description: "Hoodie & sweater collection post",
  },
  {
    id: "style-post-3",
    title: "Social Posts",
    client: "Style Studio",
    niche: "Clothing Brand",
    category: "Social Posts",
    image: restruantpost4,
    description: "Jersey design campaign",
  },

  // ==========================================
  // CLOTHING BRAND - BUSINESS CARDS
  // ==========================================
  {
    id: "fashion-cards-1",
    title: "Business Cards",
    client: "Fashion House",
    niche: "Clothing Brand",
    category: "Business Cards",
    image: "work-card.jpg",
    description: "Premium business cards for brand representatives",
  },
  {
    id: "urban-cards-2",
    title: "Business Cards",
    client: "Urban Wear",
    niche: "Clothing Brand",
    category: "Business Cards",
    image: "work-card.jpg",
  },
  {
    id: "style-cards-3",
    title: "Business Cards",
    client: "Style Studio",
    niche: "Clothing Brand",
    category: "Business Cards",
    image: "work-card.jpg",
  },

  // ==========================================
  // CLOTHING BRAND - FLYERS
  // ==========================================
  {
    id: "fashion-flyer-1",
    title: "Flyers",
    client: "Fashion House",
    niche: "Clothing Brand",
    category: "Flyers",
    image: "work-flyer.jpg",
    description: "Product launch flyer for new collection",
  },
  {
    id: "urban-flyer-2",
    title: "Flyers",
    client: "Urban Wear",
    niche: "Clothing Brand",
    category: "Flyers",
    image: "work-flyer.jpg",
  },

  // ==========================================
  // CLOTHING BRAND - PACKAGING
  // ==========================================
  {
    id: "fashion-packaging-1",
    title: "Packaging",
    client: "Fashion House",
    niche: "Clothing Brand",
    category: "Packaging",
    image: "work-packaging.jpg",
    description: "Custom packaging design for apparel shipments",
  },
  {
    id: "urban-packaging-2",
    title: "Packaging",
    client: "Urban Wear",
    niche: "Clothing Brand",
    category: "Packaging",
    image: "work-packaging.jpg",
  },
];
