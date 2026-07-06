# 📁 Website Images Folder Structure

Drop your images into the correct folder below, and they will automatically appear in that section of the website.

---

## Folder → Section Mapping

| Folder | Website Section | What to put here |
|--------|----------------|------------------|
| `hero/` | Hero (landing) section | Main character/portrait image |
| `about/` | About Us section | Floating desk image |
| `services/` | Services section | Service card backgrounds, truck/car decoration |
| `works/` | Works carousel (homepage) + Project detail hero | Project thumbnail images |
| `priorities/` | Priorities section | Quality, Innovation, Impact background images |
| `contact/` | Contact section | Contact section illustration/image |
| `logos/` | Navbar, Service cards | Company logos and SVG icons |
| `projects/` | Project detail pages | Subfolders for each project's extra images |

---

## Current Files

### `hero/`
- `hello-removebg-preview.png` — Main character portrait in the hero section

### `about/`
- `floating-desk-final-transparent.png` — 3D floating desk illustration

### `services/`
- `imgggg.jpg` — Service card background image
- `carr.png` — Decorative truck image

### `works/`
- `neighbourfriendly.png` — NeighborFriendly project thumbnail
- `krishimitra.png` — KrishiMitra project thumbnail
- `clensifilters_sketch.png` — Clensifilters project thumbnail
- `wagyuprimeuae.png` — Wagyu Prime UAE project thumbnail
- `alfredai.png` — Alfred AI project thumbnail
- `qpro.png` — Q-Pro project thumbnail

### `priorities/`
- `quality.jpg` — Quality card background
- `brain.png` — Innovation card background
- `impact.jpg` — Impact card background

### `contact/`
- `neee1_nobg.png` — Contact section illustration

### `logos/`
- `log2.svg` — Logo (used in service cards)
- `log3.svg` — Logo (used in navbar, dark backgrounds)
- `mylogo.svg` — Main logo (used on light backgrounds)

### `projects/` (subfolders for project detail pages)
Each project has its own subfolder for additional assets:
- `projects/neighbourfriendly/`
- `projects/krishimitra/`
- `projects/clensifilters/`
- `projects/wagyuprimeuae/`
- `projects/alfredai/`
- `projects/qpro/`

---

## How to Add New Images

1. **Replace an existing image**: Simply replace the file with the same filename
2. **Add a new project image**: Place it in `works/` for the homepage carousel
3. **Add project detail images**: Place them in `projects/<project-name>/`
4. **Update section backgrounds**: Drop the new image into the correct section folder

> **Note**: After adding/changing images, you may need to update the corresponding component file in `src/components/` to reference the new filename.
