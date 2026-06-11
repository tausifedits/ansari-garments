const initialProducts = [
  // Top Wear
  {
    id: 'beige-jacket',
    name: 'Beige Workwear Jacket',
    price: '₹2,899',
    fabric: 'Heavy Washed Premium Canvas Cotton',
    sizes: ['M', 'L', 'XL'],
    description: 'A structural, vintage-inspired work jacket crafted from heavy-gauge canvas. Features custom distressed metal hardware, double breast patch pockets, and a refined corduroy collar overlay.',
    type: 'top',
    img: 'Assets/TopWear/beige-workwear-jacket.png',
    stock: 15,
    visibility: true
  },
  {
    id: 'beige-plaid',
    name: 'Beige Plaid Overshirt',
    price: '₹1,999',
    fabric: 'Soft Brushed Flannel & Suede Details',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'An essential layering piece in neutral plaid tones. Tailored with a relaxed fit, drop shoulders, and premium tortoiseshell buttons, making it versatile for smart-casual wardrobes.',
    type: 'top',
    img: 'Assets/TopWear/beige-plaid-overshirt.png',
    stock: 10,
    visibility: true
  },
  {
    id: 'blue-plaid',
    name: 'Midnight Plaid Flannel',
    price: '₹1,999',
    fabric: 'Double-Weave Premium Cotton Flannel',
    sizes: ['M', 'L', 'XL'],
    description: 'Crafted from ultra-soft, premium long-staple cotton flannel, this check features deep indigo and black. Highly breathable yet structured, designed for optimal comfort.',
    type: 'top',
    img: 'Assets/TopWear/midnight-plaid-flannel.png',
    stock: 12,
    visibility: true
  },
  {
    id: 'green-knitwear',
    name: 'Forest Green Stripe Knitwear',
    price: '₹2,499',
    fabric: 'Fine-Gauge Linen & Cotton Knit Blend',
    sizes: ['M', 'L'],
    description: 'A luxury knitted stripe pullover featuring horizontal minimal ecru lines. Tailored with a clean crewneck, ribbed cuffs, and a lightweight linen-blend structure ideal for transitional layering.',
    type: 'top',
    img: 'Assets/TopWear/forest-green-stripe-knitwear.png',
    stock: 8,
    visibility: true
  },
  {
    id: 'grey-stripe',
    name: 'Slate Grey Stripe Shirt',
    price: '₹1,899',
    fabric: 'Pure Italian Cambric Linen',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Classic tailoring meets modern luxury. A light grey and white vertical striped linen shirt featuring a relaxed spread collar, tailored placket, and high-tensile stitching.',
    type: 'top',
    img: 'Assets/TopWear/slate-grey-stripe-shirt.png',
    stock: 14,
    visibility: true
  },
  {
    id: 'white-linen',
    name: 'Ivory Classic Linen Shirt',
    price: '₹1,899',
    fabric: 'Premium Italian Flax Linen',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'An essential warm-weather shirt woven from premium flax fibers. Features a soft band collar, breathable lightweight weave, and single-needle tailoring for a draped, relaxed fit.',
    type: 'top',
    img: 'Assets/TopWear/classic-white-linen-shirt.png',
    stock: 20,
    visibility: true
  },
  {
    id: 'olive-overshirt',
    name: 'Olive Utility Overshirt',
    price: '₹2,199',
    fabric: 'Heavyweight Durable Cotton Twill',
    sizes: ['M', 'L', 'XL'],
    description: 'A structural modern utility overshirt with double flap patch pockets and a clean squared hem. Woven in rugged army green cotton twill that breaks in beautifully over time.',
    type: 'top',
    img: 'Assets/TopWear/olive-utility-overshirt.png',
    stock: 11,
    visibility: true
  },
  {
    id: 'navy-polo',
    name: 'Navy Knit Polo Shirt',
    price: '₹1,699',
    fabric: 'Fine-Gauge Combed Pima Cotton',
    sizes: ['S', 'M', 'L'],
    description: 'A retro-modern knit polo featuring a soft open collar and flat-lock seams. Woven from luxury pima cotton with micro-ribbed cuffs and a relaxed drape.',
    type: 'top',
    img: 'Assets/TopWear/navy-knit-polo-shirt.png',
    stock: 9,
    visibility: true
  },
  {
    id: 'denim-jacket',
    name: 'Vintage Selvedge Denim Jacket',
    price: '₹3,199',
    fabric: '14oz Rigid Indigo Japanese Denim',
    sizes: ['M', 'L', 'XL'],
    description: 'A classic Type-III denim jacket featuring distinct red-line selvedge details, hand-distressed fades, custom metal hardware buttons, and side-adjuster tabs.',
    type: 'top',
    img: 'Assets/TopWear/vintage-denim-jacket.png',
    stock: 7,
    visibility: true
  },
  {
    id: 'black-sweatshirt',
    name: 'Onyx Heavyweight Sweatshirt',
    price: '₹2,299',
    fabric: '450gsm Heavy Loopback Terry Cotton',
    sizes: ['M', 'L', 'XL'],
    description: 'Designed for a modern architectural silhouette. Features dropped shoulders, extra-thick ribbed panels, and a dense loopback cotton build for maximum comfort.',
    type: 'top',
    img: 'Assets/TopWear/onyx-heavyweight-sweatshirt.png',
    stock: 18,
    visibility: true
  },
  {
    id: 'camel-blouson',
    name: 'Camel Wool Zip Blouson',
    price: '₹3,499',
    fabric: 'Luxury Brushed Camel Wool Blend',
    sizes: ['M', 'L'],
    description: 'A minimal zip blouson jacket crafted in rich brushed wool. Woven in a classic camel tone with satin-lined interior, custom silver zippers, and hidden slip hand pockets.',
    type: 'top',
    img: 'Assets/TopWear/camel-wool-blouson.png',
    stock: 5,
    visibility: true
  },
  // Bottom Wear
  {
    id: 'light-blue',
    name: 'Light Blue Wide Fit Jeans',
    price: '₹2,299',
    fabric: '13.5oz Rigid Japanese Denim',
    sizes: ['30', '32', '34', '36'],
    description: 'Designed with a classic mid-rise and straight, wide leg silhouette. Crafted from authentic raw Japanese denim and washed to a beautiful vintage light-indigo hue.',
    type: 'bottom',
    img: 'Assets/BottomWear/light-blue-wide-fit-jeans.png',
    stock: 12,
    visibility: true
  },
  {
    id: 'relaxed-wide',
    name: 'Relaxed Wide Fit Jeans',
    price: '₹2,299',
    fabric: '12oz Soft Cotton Denim',
    sizes: ['28', '30', '32', '34'],
    description: 'An effortless modern cut that sits relaxed on the waist, tapering down into a spacious, editorial wide leg format. Perfect for everyday luxury comfort.',
    type: 'bottom',
    img: 'Assets/BottomWear/relaxed-wide-fit-jeans.png',
    stock: 15,
    visibility: true
  },
  {
    id: 'black-wide',
    name: 'Ash Black Wide Fit Jeans',
    price: '₹2,499',
    fabric: '14oz Premium Ring-Spun Denim',
    sizes: ['30', '32', '34', '36'],
    description: 'A washed charcoal/ash black wash that brings grit and sophistication. Features custom metal rivets, clean double-stitching, and a heavy, premium drape.',
    type: 'bottom',
    img: 'Assets/BottomWear/ash-black-wide-fit-jeans.png',
    stock: 10,
    visibility: true
  },
  {
    id: 'grey-wide',
    name: 'Slate Grey Wide Fit Jeans',
    price: '₹2,399',
    fabric: '13oz Slub Selvedge Denim',
    sizes: ['30', '32', '34'],
    description: 'An architectural grey wash denim featuring a soft-brushed finish. Designed with clean minimal pocket details, structured wide hem, and high-durability stitching.',
    type: 'bottom',
    img: 'Assets/BottomWear/slate-grey-wide-fit-jeans.png',
    stock: 8,
    visibility: true
  },
  {
    id: 'ecru-wide',
    name: 'Ecru Wide Fit Jeans',
    price: '₹2,499',
    fabric: '13.5oz Organic Denim Cotton',
    sizes: ['30', '32', '34'],
    description: 'An elegant warm-white denim featuring a classic mid-rise waist and a relaxed straight wide leg. Ideal for pairing with clean earth-toned linen shirts and overshirts.',
    type: 'bottom',
    img: 'Assets/BottomWear/ecru-wide-fit-jeans.png',
    stock: 6,
    visibility: true
  }
];

async function seedDatabase(Product) {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      console.log('Seeding initial products into MongoDB...');
      await Product.insertMany(initialProducts);
      console.log('Database seeded successfully!');
    } else {
      console.log('Database already has product data. Skipping seeding.');
    }
  } catch (err) {
    console.error('Error seeding database:', err);
  }
}

module.exports = {
  initialProducts,
  seedDatabase
};
