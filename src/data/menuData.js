// ─── FEATURED SEASONAL SHOWCASE ───────────────────────────────────────────────
export const featuredItems = [
  {
    id: "f1",
    name: "Ethiopian Yirgacheffe Pour-Over",
    price: "₹560",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
    label: "Roaster Pick #44",
    badge: "Today's Special Brew",
    description:
      "Stone-fruit brightness extracted from the Gedeo commune. Hand-scored with a refined Kalita Wave for delicately floral acidity and silken finish full of terroir.",
    profile: "Jasmine · Apricot · Bergamot",
    roast: "Light",
    origin: "Sidama, Ethiopia",
    vegan: true,
    glutenFree: true,
  },
  {
    id: "f2",
    name: "Golden Hazelnut Praline Croissant",
    price: "₹540",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=80",
    label: "Today's Special Bake",
    badge: "",
    description:
      "Three-day laminated French butter pastry folded with house-stone-milled Dordogne hazelnuts, apple, dark chocolate shards, and toasted fleur de sel.",
    profile: "Hazelnut · Praline · 70% Ganache",
    roast: "Laminated · Fresh 7am",
    origin: "Sourced Périgord · 70% Ganache · Cultured Caramel",
    vegan: false,
    glutenFree: false,
  },
];

// ─── COFFEE & ESPRESSO ─────────────────────────────────────────────────────────
export const coffeeItems = [
  {
    id: "c1",
    name: "Cortado",
    tag: "New",
    price: "₹375",
    description:
      "A traditional small-cuvée espresso blended slightly textured milk, silky whole-milk served in a hand-crafted ceramic glass.",
    notes: "Tasting Notes: chocolate, caramel, stone",
    vegan: false,
    glutenFree: true,
    dairyFree: false,
  },
  {
    id: "c2",
    name: "Flat White",
    tag: "Hot",
    price: "₹415",
    description:
      "Doubled ristretto with micro-foamed and integrated dairy, providing a sweet textured finish with delicate sweet teas.",
    notes: "Tasting Notes: vanilla, caramel",
    vegan: false,
    glutenFree: true,
    dairyFree: false,
  },
  {
    id: "c3",
    name: "Bourbon Barrel Cold Brew",
    tag: "🌱",
    price: "₹460",
    description:
      "Single-origin Cold Brew balances a aged 20-hour cold American oak whiskey casks, steeped overnight.",
    notes: "Tasting Notes: chocolate, vanilla, toffee",
    vegan: true,
    glutenFree: true,
    dairyFree: true,
  },
  {
    id: "c4",
    name: "Spiced Cardamom Latte",
    tag: "House Favorite",
    price: "₹520",
    description:
      "Hand-ground cardamom and cane-infused handcrafted latte with a spiced brew mixed with house-made cardamom syrup and velvety steamed micro-blended milk.",
    notes: "Tasting Notes: spice, cinnamon, vanilla",
    vegan: false,
    glutenFree: true,
    dairyFree: false,
  },
];

// ─── SPECIALTY TEAS & TONICS ──────────────────────────────────────────────────
export const teaItems = [
  {
    id: "t1",
    name: "Matcha Strawberry Foam",
    tag: "Summertime",
    price: "₹540",
    description:
      "Ceremonial Japanese matcha gently dusted and dipped with slightly sweetened oat-milk foam and topped with house-made strawberry jelly.",
    notes: "Tasting Notes: green tea, citrus, cream",
    vegan: true,
    glutenFree: true,
    dairyFree: true,
  },
  {
    id: "t2",
    name: "Sparkling Yuzu Cascara Tonic",
    tag: "New",
    price: "₹480",
    description:
      "Naturally caffeinated coffee cherry tea steeped with ripe yuzu, spring water, aromatic elderflower, crisp cold sparkling water, citrus peel and rosemary.",
    notes: "Tasting Notes: hibiscus, citrus, cane",
    vegan: true,
    glutenFree: true,
    dairyFree: true,
  },
];

// ─── ARTISAN BAKERY & SWEETS ──────────────────────────────────────────────────
export const bakeryItems = [
  {
    id: "b1",
    name: "Brittany Kouign-Amann",
    price: "₹435",
    description:
      "Layers of folded slow-risen dough flakily caramelized with golden butter grains glazed on a glass-like shell.",
    notes: "Available: 7:30 AM – 3:00 PM",
    tag: "Vegetarian",
  },
  {
    id: "b2",
    name: "Cardamom Morning Bun",
    price: "₹395",
    description:
      "Ciabatta-sourdough baked rolled with a finely hand-spiced cardamom, ground cinnamon-buttered cassonade, and crunchy nib salt.",
    notes: "Available: 8 AM to 2 PM",
    tag: "Vegetarian",
  },
  {
    id: "b3",
    name: "Country Loaf & Cultured Butter",
    price: "₹580",
    description:
      "Thick sourdough of 36-hour wild fermented white flour served with delicate house cultured compound lemon and herb-salted butters.",
    notes: "GET IT FRESH 8:00 AM",
    tag: "Vegetarian",
  },
  {
    id: "b4",
    name: "Meyer Lemon Ricotta Pound Cake",
    price: "₹375",
    description:
      "Dense, ultra-moist whole milk ricotta pound cake with cream-on sponge and fresh Meyer lemon glaze full with buttery sucrose.",
    notes: "Available: 8 AM to 3 PM",
    tag: "Vegetarian",
  },
];

// ─── BREAKFAST & SAVORY KITCHEN ───────────────────────────────────────────────
export const breakfastItems = [
  {
    id: "br1",
    name: "Whipped Ricotta & Fig Toast",
    price: "₹955",
    description:
      "Stone-ground wheat sourdough toast with freshly whipped lemon ricotta, fresh figs, aged honeycomb, micro greens, and sliced pistachios.",
    notes: "Vegetarian",
    addOn: "Add Prosciutto +₹210",
    tag: "Vegetarian",
  },
  {
    id: "br2",
    name: "Avocado & Furikake Tartine",
    price: "₹1,080",
    description:
      "Heirloom-seed bread topped with avocado purée, furikake, soft-poached egg, sesame nori flake, and pickled mustard sauce.",
    notes: "Poached or fried egg",
    addOn: "",
    tag: "New",
  },
  {
    id: "br3",
    name: "Mushroom & Gruyere Quiche",
    price: "₹870",
    description:
      "Foraged chanterelle and spring onion slow-baked in silky custard crème with Gruyère, whole cream, butter, and herb seeds in a fresh gratinée crust.",
    notes: "Includes mixed greens",
    addOn: "",
    tag: "Vegetarian",
  },
];

const menuData = [...coffeeItems];
export default menuData;