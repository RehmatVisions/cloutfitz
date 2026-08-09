# 🎨 Portfolio Management Guide

## Struktur Overview

- **`assets-config.ts`** ← **EDIT YEH FILE** (Images, Categories, Clients)
- **`works.ts`** ← Automatically generated data (Don't edit)

---

## 🖼️ Naya Image/Category Add Karna

### Step 1: Asset Import Karo
```typescript
// assets-config.ts ke top me add karo
import myNewImage from "@/assets/work-something.jpg";
```

### Step 2: Category Images Map me Add Karo
```typescript
export const categoryImages: Record<string, string> = {
  "Menu Design": menu,
  // ... other categories
  "Brochure Design": myNewImage,  // ← ADD YEH
};
```

### Step 3: Categories Array me Add Karo
```typescript
export const categories = [
  "Menu Design",
  "Social Posts",
  // ... other categories
  "Brochure Design",  // ← ADD YEH
] as const;
```

**Done! ✅** Naya category automatically Work section me show hoga.

---

## 👥 Naye Clients Add Karna

```typescript
export const clients: Record<string, string[]> = {
  Restaurants: [
    "Al Mandi House",
    "Rosso Kitchen",
    "Naya Restaurant",  // ← ADD YEH
  ],
  // ... other niches
};
```

**Note:** Clients automatically har category ke liye use hote hain.

---

## 🏢 Niche (Business Type) Add Karna

### Step 1: Niches Array me Add Karo
```typescript
export const niches = [
  "Restaurants",
  "Cafés",
  "My New Niche",  // ← ADD YEH
] as const;
```

### Step 2: Clients Array me Add Karo
```typescript
export const clients: Record<string, string[]> = {
  // ... existing niches
  "My New Niche": ["Client 1", "Client 2", "Client 3"],  // ← ADD YEH
};
```

---

## ✨ Quick Examples

### Example 1: Printing Category Add Karna
```typescript
// 1. Asset import karo
import printImage from "@/assets/work-print.jpg";

// 2. categoryImages me add karo
"Printing": printImage,

// 3. categories array me add karo
"Printing"
```

### Example 2: Naya Niche (Gyms)
```typescript
// 1. niches array me add karo
"Gyms"

// 2. clients me add karo
"Gyms": ["Fit Hub", "Iron Paradise", "Wellness Center"]
```

---

## 📁 File Structure

```
src/data/
├── assets-config.ts    ← EDIT YEH (All configuration)
├── works.ts            ← Auto-generated (Don't edit)
└── PORTFOLIO_GUIDE.md  ← YEH FILE
```

---

## 🚀 Asal Me Kya Hota Hai?

Work section **automatically** update hota hai kyunke `works.ts` yeh formula use karta hai:

```
niches × categories = Total Projects
```

Har niche ke liye, har category ke liye 1 project banta hai.

Example:
- 10 niches × 7 categories = **70 projects** (automatically!)

---

## ⚠️ Important Notes

- `works.ts` MANUALLY edit mat karo — automatically generate hoti hai
- Image files MUST `src/assets/` folder me ho
- Category/Niche names EXACTLY same hone chahiye (case-sensitive!)
- Clients array har niche ke liye minimum 1 entry hona chahiye

---

## 🎯 Most Common Tasks

| Task | Where | How |
|------|-------|-----|
| Naya Image Add Karo | `assets-config.ts` | Import + `categoryImages` object |
| Naya Category Add Karo | `assets-config.ts` | `categories` array + `categoryImages` |
| Naya Niche Add Karo | `assets-config.ts` | `niches` array + `clients` object |
| Naya Client Add Karo | `assets-config.ts` | `clients` object |
| Work Portal Dekho | `Work.tsx` | Automatically updated |

---

**Happy designing! 🎨✨**
