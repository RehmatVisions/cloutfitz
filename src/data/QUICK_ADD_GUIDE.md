# 🚀 QUICK ADD GUIDE - DESIGNS ADD KARNA EASY!

## 3 Simple Steps:

### Step 1: Image Add Karo
```
src/assets/ folder me apna image add karo
Filename: work-clientname.jpg
(e.g., work-pizzahaven.jpg)
```

### Step 2: Import Karo (portfolio-template.ts)
```typescript
import pizzahaven from "@/assets/work-pizzahaven.jpg";
```

### Step 3: portfolioItems Array Me Add Karo
```typescript
{
  id: "pizzahaven-menu",
  title: "Menu Design",
  client: "Pizza Haven",
  niche: "Restaurants",
  category: "Menu Design",
  image: pizzahaven,
  description: "Modern pizza menu with vibrant colors",
  colors: ["#E63946", "#FFFFFF"],
  tools: ["Figma", "Photoshop"],
}
```

**DONE! ✅**

---

## 📋 Quick Checklist

- [ ] Image added to `src/assets/`
- [ ] Image imported in `portfolio-template.ts`
- [ ] Item added to `portfolioItems` array
- [ ] `id` is unique (no duplicates)
- [ ] `niche` matches VALID_NICHES list
- [ ] `category` matches VALID_CATEGORIES list
- [ ] `client` name spelled correctly
- [ ] `image` imported correctly

---

## ✨ Valid Values (Copy Paste!)

### NICHES (Pick one):
```
"Restaurants"
"Cafés"
"Cloud Kitchens"
"Bakery & Desserts"
"Food Trucks"
"Fine Dining"
"Shisha Lounges"
"Catering"
"Juice & Smoothie Bars"
"Hotels & Resorts"
```

### CATEGORIES (Pick one):
```
"Menu Design"
"Social Posts"
"Logo & Branding"
"Flyers"
"Business Cards"
"Packaging"
"Website Design"
```

### COLORS (Color Codes):
```
#E63946 - Red
#FFFFFF - White
#457B9D - Blue
#E8C547 - Gold
#2C3E50 - Black
#2A9D8F - Green
#E76F51 - Orange
#F1FAEE - Cream
```

### TOOLS (Common):
```
Design: Figma, Adobe XD, Sketch
Photo: Photoshop, Lightroom
Layout: InDesign, Illustrator
Web: Webflow, Framer
```

---

## 📝 Example - Copy This!

```typescript
{
  id: "spicehaus-packaging",
  title: "Packaging",
  client: "Spice Haus",
  niche: "Restaurants",
  category: "Packaging",
  image: spiceHausImage,
  description: "Premium packaging design with traditional spice blends branding and gold accents",
  colors: ["#C41E3A", "#FFD700", "#FFFFFF"],
  tools: ["Photoshop", "Illustrator"],
}
```

---

## 🎨 File Structure

```
src/data/
├── portfolio-template.ts    ← EDIT YEH (Add designs here!)
├── assets-config.ts         ← Categories, niches, clients
├── works.ts                 ← Auto-generated
├── QUICK_ADD_GUIDE.md       ← YEH FILE
└── PORTFOLIO_GUIDE.md       ← Detailed guide
```

---

## ⚡ Pro Tips

1. **ID Format**: `clientname-category` (lowercase, hyphen)
2. **Description**: 1-2 sentences about the design
3. **Colors**: HEX codes (#RRGGBB format)
4. **Tools**: 2-3 main tools used
5. **Optional Fields**: `description`, `colors`, `tools` can be left out

---

## 🚫 Common Mistakes

❌ Wrong niche spelling (copy-paste exact value!)
❌ Duplicate IDs
❌ Wrong category name
❌ Image not imported
❌ Image path incorrect

---

## 📱 Result

Portfolio automatically updates with your new design! 🎉

