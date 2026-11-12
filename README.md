# GOUF Republic — V1 Catalog

A responsive editorial streetwear catalog built with React, TypeScript and Vite. **No orders or payments are processed.**

## Start on Windows PowerShell

Install Node.js 20.19+ or 22.12+ first, then:

```powershell
cd gouf-republic
npm install
npm run dev
```

Open the local URL printed by Vite (typically http://localhost:5173).

## Build check

```powershell
npm run build
npm run preview
```

## Updating the catalog

Edit `src/data.ts` to add or change products. Use `price: null` until GOUF confirms a price; confirmed prices are numbers in Botswana pula, e.g. `price: 250`. Update images in `public/images` and the matching `image` property.

The current images were **cropped from supplied Instagram screenshots**, so they are for a prototype. Before public launch, obtain original photographs and permission from the brand, confirm product names, available sizes, pricing and stock, and replace the images. Some photographed items are editorial examples rather than confirmed stock.

## Architecture

- `src/App.tsx` — storefront pages, filtering and product details
- `src/data.ts` — typed product catalog and editorial content
- `src/style.css` — responsive editorial styling
- `public/images/` — prototype photographs

## Future milestones

- Admin dashboard and product inventory backed by FastAPI/PostgreSQL
- Shopping cart, order handling and secure checkout after payment-provider eligibility review

Instagram link in footer is based on the account visible in supplied screenshots; verify the official account before launch.


## V1.1 photo archive update

- Added cropped versions of user-supplied Instagram screenshots: Times Ahead campaign, two group/culture images, and Mmegi press cover and story. Original full images remain with the user.
- The home hero now uses the Times Ahead campaign, and the home page has an In the Press section. Magazine includes additional campaign, culture, and press entries.
- These are still screenshots and not full-quality licensed assets. Replace with high-resolution originals and confirm photography rights and press reuse permission before public release.
- Product inventory, pricing, sizing and descriptions are provisional. No online ordering has been implemented.

### Upgrade existing checkout locally
Back up your old project folder, then unzip this release over `C:\Projects\gouf-republic` and overwrite changed files. From PowerShell, run `npm install` then `npm run dev`.
