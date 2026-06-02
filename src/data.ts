import { Product, StyleLook } from './types';

export const products: Product[] = [
  {
    id: 'greenwich-trench',
    category: 'Outerwear',
    name: 'The Greenwich Trench',
    description: 'A masterpiece of enduring silhouette and meticulous craftsmanship, double-breasted in water-repellent combed Italian twill.',
    details: [
      'Double-breasted silhouette with custom horn bi-color buttons',
      'Shoulder gun flaps, epaulets, and throat latch detailing',
      'Adjustable wrist straps and buckled self-belt',
      'Lined in custom vintage jacquard weave'
    ],
    materials: '100% Combed Italian Cotton Twill',
    origin: 'Crafted in Florence, Italy',
    price: 895,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'cashmere-knit',
    category: 'Knitwear',
    name: 'Cable-Knit Cashmere Crewneck',
    description: 'Spun from grade-A long-staple Mongolian cashmere, this classic heritage weave transitions effortlessly from country estates to metropolitan evenings.',
    details: [
      'Authentic Scottish-inspired dimensional cable stitch',
      'Finely ribbed crew collar, cuffs, and hem block',
      'Exceedingly soft, substantial 12-gauge knit weight',
      'Hand-finished linked seams for permanent shape retention'
    ],
    materials: '100% Organic Long-Staple Cashmere',
    origin: 'Spun and Finished in Inner Mongolia',
    price: 425,
    image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1000&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'monogram-oxford',
    category: 'Shirting',
    name: 'The Monogrammed Oxford',
    description: 'An immaculate tailored classic featuring a refined spread collar, mother-of-pearl closures, and hand-embroidered Kingsley & Vance heraldry at the chest.',
    details: [
      'Soft rolled button-down collar with interior stays',
      'Australian Mother-of-Pearl laser-etched buttons',
      'Signature crown monogram embroidery on left breast',
      'Split-back yoke with a box pleat ensures optimal movement'
    ],
    materials: '100% Extra-Long-Staple Pima Cotton',
    origin: 'Woven in cotton mill in Lancashire, England',
    price: 185,
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'savile-blazer',
    category: 'Tailoring',
    name: 'The Savile Blazer',
    description: 'Formality re-envisioned. Tailored with a natural soft shoulder, bespoke full-canvas construction, and custom gold-brass embossed lion buttons.',
    details: [
      'Full-canvas inner architecture for a custom-molded fit over time',
      'Brushed antique brass Kingsley & Vance crest buttons',
      'Slightly suppressed waist with double vents',
      'Genuine hand-rolled lapel margins and buttonholes'
    ],
    materials: '100% Loro Piana Merino Wool Outer, Bemberg Lining',
    origin: 'Tailored in Savile Row Workshops, London',
    price: 650,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'maverick-holdall',
    category: 'Accessories',
    name: 'The Maverick Leather Holdall',
    description: 'The ultimate weekend travel companion, crafted from vegetable-tanned French calfskin that develops an exquisite golden patina with every journey.',
    details: [
      'Reinforced hand-stitched rolled leather handles',
      'Removable padded shoulder strap with solid brass hardware',
      'Generous interior with pocket dividers and protective protective base studs',
      'Complies with supreme international cabin baggage standards'
    ],
    materials: 'Full-Grain French Calfskin, Solid Sand-Cast Brass',
    origin: 'Hand-assembled in Ubrique, Spain',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1000&auto=format&fit=crop'
  }
];

export const estateLook: StyleLook = {
  id: 'autumn-estate',
  title: 'Mist on the Moors',
  image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop',
  description: 'Layering for crisp mornings in Berkshire. Unstructured tailoring combines gracefully with our Grade-A cashmere and English-woven cotton.',
  items: [
    products[0], // Trench
    products[1], // Cashmere Knit
    products[3], // Savile Blazer
    products[4]  // Leather Holdall
  ]
};
