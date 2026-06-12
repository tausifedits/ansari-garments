// Ansari Garments - digital Showroom UI Logic

// 1. Dynamic Showroom Data Stores
let UPPERWEAR_DB = {};
let BOTTOMWEAR_DB = {};
let topwearOrder = [];
let bottomwearOrder = [];
let currentHeroUpperwear = 'beige-jacket';
let currentShowcaseBottomwear = 'light-blue';

// Static product catalog fallback for offline preview (file:// protocol)
const FALLBACK_PRODUCTS = [
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
  },
  {
    id: 'relaxed-wide',
    name: 'Relaxed Wide Fit Jeans',
    price: '₹2,299',
    fabric: '12oz Soft Cotton Denim',
    sizes: ['28', '30', '32', '34'],
    description: 'An effort-less modern cut that sits relaxed on the waist, tapering down into a spacious, editorial wide leg format. Perfect for everyday luxury comfort.',
    type: 'bottom',
    img: 'Assets/BottomWear/relaxed-wide-fit-jeans.png',
    stock: 15,
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
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
    visibility: true,
    showInDial: true
  }
];




// Contact details
const WHATSAPP_NUMBER = '9044506599';

// 3. Helper Functions
function generateWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildEnquiryMessage(productName) {
  return `Hello Ansari Garments,

I am interested in:
${productName}

Can you please share:
- Availability
- Sizes
- Price
- Store details

Thank you.`;
}

function buildOutfitMessage(upperName, bottomName) {
  return `Hello Ansari Garments,

I am interested in the custom combination:
- Upperwear: ${upperName}
- Bottomwear: ${bottomName}

Can you please share availability, pricing, and sizing details for this outfit?

Thank you.`;
}

// Scroll to sections
window.scrollToSection = function(id) {
  const element = document.getElementById(id);
  if (element) {
    // Determine scroll offset (subtracting headers)
    const offset = 120;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Set image source and handle fallback mix-blend transparency
function setGarmentImage(elementId, imgPath) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.src = imgPath || '';
  if (imgPath && imgPath.toLowerCase().endsWith('.png')) {
    el.style.mixBlendMode = 'normal';
  } else {
    // Blends white background seamlessly onto warm background #F7F5F2
    el.style.mixBlendMode = 'multiply';
  }
}

// Helper to populate application states from a product list
function populateShowroomState(products) {
  UPPERWEAR_DB = {};
  BOTTOMWEAR_DB = {};
  topwearOrder = [];
  bottomwearOrder = [];

  products.forEach(p => {
    if (p.type === 'top') {
      UPPERWEAR_DB[p.id] = p;
      topwearOrder.push(p.id);
    } else if (p.type === 'bottom') {
      BOTTOMWEAR_DB[p.id] = p;
      bottomwearOrder.push(p.id);
    }
  });

  if (topwearOrder.length > 0 && !topwearOrder.includes(currentHeroUpperwear)) {
    currentHeroUpperwear = topwearOrder[0];
  }
  if (bottomwearOrder.length > 0 && !bottomwearOrder.includes(currentShowcaseBottomwear)) {
    currentShowcaseBottomwear = bottomwearOrder[0];
  }

  if (topwearOrder.length > 0) {
    updateHeroPanel(currentHeroUpperwear);
  }
  if (bottomwearOrder.length > 0) {
    updateBottomwearShowcase(currentShowcaseBottomwear);
  }

  buildDials();
  renderProductGalleries();

  const slicedTop = topwearOrder.filter(id => UPPERWEAR_DB[id].showInDial !== false).slice(0, 10);
  const slicedBottom = bottomwearOrder.filter(id => BOTTOMWEAR_DB[id].showInDial !== false).slice(0, 10);
  startAutoRotation('topwear-dial', slicedTop, 360 / Math.max(1, slicedTop.length));
  startAutoRotation('bottomwear-dial', slicedBottom, 360 / Math.max(1, slicedBottom.length));
}

// 4. Dial Selectors Positioning & Animation
function populateDialElement(pivotEl, orderArray, database, dialId, selectCallback, timeoutVarName) {
  pivotEl.innerHTML = '';
  const spacing = 360 / orderArray.length;
  const middleIndex = (orderArray.length - 1) / 2;

  orderArray.forEach((id, index) => {
    const item = database[id];
    const el = document.createElement('div');
    el.className = 'dial-item';
    el.dataset.id = id;

    const angle = (index - middleIndex) * spacing;
    el.style.setProperty('--angle', `${angle}deg`);

    const img = document.createElement('img');
    img.src = item.img || '';
    img.className = 'w-full h-full object-contain p-2';
    if (item.img && !item.img.toLowerCase().endsWith('.png')) {
      img.style.mixBlendMode = 'multiply';
    }
    el.appendChild(img);

    el.addEventListener('click', () => {
      handleDialInteraction(dialId, id, orderArray, spacing, selectCallback, timeoutVarName);
    });
    pivotEl.appendChild(el);
  });
}

function buildDials() {
  const topPivot = document.getElementById('topwear-dial');
  if (topPivot) {
    const dialTop = topwearOrder.filter(id => UPPERWEAR_DB[id].showInDial !== false).slice(0, 10);
    populateDialElement(topPivot, dialTop, UPPERWEAR_DB, 'topwear-dial', updateHeroPanel, 'topwearTimeout');
  }

  const bottomPivot = document.getElementById('bottomwear-dial');
  if (bottomPivot) {
    const dialBottom = bottomwearOrder.filter(id => BOTTOMWEAR_DB[id].showInDial !== false).slice(0, 10);
    populateDialElement(bottomPivot, dialBottom, BOTTOMWEAR_DB, 'bottomwear-dial', updateBottomwearShowcase, 'bottomwearTimeout');
  }

  const builderTopPivot = document.getElementById('builder-topwear-dial');
  if (builderTopPivot) {
    const dialTop = topwearOrder.filter(id => UPPERWEAR_DB[id].showInDial !== false).slice(0, 10);
    populateDialElement(builderTopPivot, dialTop, UPPERWEAR_DB, 'builder-topwear-dial', (id) => updateBuilderSelection('upper', id), 'builderTopTimeout');
  }

  const builderBottomPivot = document.getElementById('builder-bottomwear-dial');
  if (builderBottomPivot) {
    const dialBottom = bottomwearOrder.filter(id => BOTTOMWEAR_DB[id].showInDial !== false).slice(0, 10);
    populateDialElement(builderBottomPivot, dialBottom, BOTTOMWEAR_DB, 'builder-bottomwear-dial', (id) => updateBuilderSelection('bottom', id), 'builderBottomTimeout');
  }
}

function startAutoRotation(dialId, orderArray, spacingDegrees) {
  const dial = document.getElementById(dialId);
  if (!dial) return;
  
  const items = dial.querySelectorAll('.dial-item');
  
  if (dial.autoRotator) {
    dial.autoRotator.kill();
  }
  
  // Slow continuous rotation loop
  dial.autoRotator = gsap.to(dial, {
    rotation: "+=360",
    duration: 45, // 45 seconds for a full loop
    repeat: -1,
    ease: "none",
    onUpdate: function() {
      const r = gsap.getProperty(dial, "rotation");
      dial.style.setProperty('--parent-rotation', `${r}deg`);
    }
  });
}

function rotateDial(dialId, activeId, orderArray, spacingDegrees) {
  const dial = document.getElementById(dialId);
  if (!dial) return;

  const activeIndex = orderArray.indexOf(activeId);
  if (activeIndex === -1) return;

  const middleIndex = (orderArray.length - 1) / 2;
  const targetAngle = -(activeIndex - middleIndex) * spacingDegrees;

  // Animate the rotation of the pivot
  gsap.to(dial, {
    rotation: targetAngle,
    duration: 0.8,
    ease: 'power2.out',
    onUpdate: function() {
      const r = gsap.getProperty(dial, "rotation");
      dial.style.setProperty('--parent-rotation', `${r}deg`);
    }
  });


  // Highlight active item
  const items = dial.querySelectorAll('.dial-item');
  items.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Global timeouts for auto-rotation resumption
let topwearTimeout;
let bottomwearTimeout;

function handleDialInteraction(dialId, activeId, orderArray, spacingDegrees, updatePanelCallback, timeoutVarName) {
  // Clear any pending auto-rotation resume timeout
  clearTimeout(window[timeoutVarName]);
  
  const dial = document.getElementById(dialId);
  if (dial && dial.autoRotator) {
    dial.autoRotator.kill();
    dial.autoRotator = null;
  }
  
  // Update the panel details (triggers rotateDial internally)
  updatePanelCallback(activeId);
  
  // Resume auto-rotation after 6 seconds of inactivity
  window[timeoutVarName] = setTimeout(() => {
    startAutoRotation(dialId, orderArray, spacingDegrees);
  }, 6000);
}



// 6. Sidebar Update handlers
function updateHeroPanel(productId) {
  const product = UPPERWEAR_DB[productId];
  if (!product) return;

  // Update text with transitions
  const title = document.getElementById('hero-title');
  const price = document.getElementById('hero-price');
  const fabric = document.getElementById('hero-fabric');
  const desc = document.getElementById('hero-desc');
  const sizesContainer = document.getElementById('hero-sizes');
  const enquireBtn = document.getElementById('hero-enquire-btn');
  const reserveBtn = document.getElementById('hero-reserve-btn');

  gsap.to([title, price, fabric, desc], { opacity: 0, y: -5, duration: 0.15, stagger: 0.04, onComplete: () => {
    title.innerText = product.name;
    price.innerText = product.price;
    fabric.innerText = product.fabric;
    desc.innerText = product.description;
    
    // Fill Sizes
    sizesContainer.innerHTML = '';
    product.sizes.forEach(size => {
      const span = document.createElement('span');
      span.className = 'px-3 py-1 border border-brand-primary text-xs font-semibold hover:bg-brand-primary hover:text-white cursor-pointer transition';
      span.innerText = size;
      span.onclick = () => openReservationModal(product.name, size);
      sizesContainer.appendChild(span);
    });

    enquireBtn.href = generateWhatsAppUrl(buildEnquiryMessage(product.name));
    reserveBtn.onclick = () => openReservationModal(product.name);

    gsap.to([title, price, fabric, desc], { opacity: 1, y: 0, duration: 0.3, stagger: 0.04 });
  }});

  currentHeroUpperwear = productId;
  setGarmentImage('active-shirt', product.img);
  const slicedTop = topwearOrder.filter(id => UPPERWEAR_DB[id].showInDial !== false).slice(0, 10);
  rotateDial('topwear-dial', productId, slicedTop, 360 / Math.max(1, slicedTop.length));


}

function updateBottomwearShowcase(productId) {
  const product = BOTTOMWEAR_DB[productId];
  if (!product) return;

  const title = document.getElementById('showcase-title');
  const price = document.getElementById('showcase-price');
  const fabric = document.getElementById('showcase-fabric');
  const desc = document.getElementById('showcase-desc');
  const sizesContainer = document.getElementById('showcase-sizes');
  const enquireBtn = document.getElementById('showcase-enquire-btn');
  const reserveBtn = document.getElementById('showcase-reserve-btn');

  gsap.to([title, price, fabric, desc], { opacity: 0, x: -10, duration: 0.15, stagger: 0.04, onComplete: () => {
    title.innerText = product.name;
    price.innerText = product.price;
    fabric.innerText = product.fabric;
    desc.innerText = product.description;

    sizesContainer.innerHTML = '';
    product.sizes.forEach(size => {
      const span = document.createElement('span');
      span.className = 'px-3 py-1 border border-brand-primary text-xs font-semibold hover:bg-brand-primary hover:text-white cursor-pointer transition';
      span.innerText = size;
      span.onclick = () => openReservationModal(product.name, size);
      sizesContainer.appendChild(span);
    });

    enquireBtn.href = generateWhatsAppUrl(buildEnquiryMessage(product.name));
    reserveBtn.onclick = () => openReservationModal(product.name);

    gsap.to([title, price, fabric, desc], { opacity: 1, x: 0, duration: 0.3, stagger: 0.04 });
  }});

  currentShowcaseBottomwear = productId;
  setGarmentImage('active-pant', product.img);
  const slicedBottom = bottomwearOrder.filter(id => BOTTOMWEAR_DB[id].showInDial !== false).slice(0, 10);
  rotateDial('bottomwear-dial', productId, slicedBottom, 360 / Math.max(1, slicedBottom.length));


}



// 8. Reservation Modal handlers
window.openReservationModal = function(productName, preSelectedSize = '') {
  const modal = document.getElementById('reservation-modal');
  document.getElementById('modal-product-name').value = productName;
  
  const sizeInput = document.getElementById('modal-size');
  sizeInput.value = preSelectedSize;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  gsap.fromTo(modal.querySelector('.modal-content'), 
    { scale: 0.9, opacity: 0 }, 
    { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }
  );
};

window.closeReservationModal = function() {
  const modal = document.getElementById('reservation-modal');
  gsap.to(modal.querySelector('.modal-content'), {
    scale: 0.9,
    opacity: 0,
    duration: 0.25,
    onComplete: () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
};

window.submitReservation = function() {
  const productName = document.getElementById('modal-product-name').value;
  const name = document.getElementById('modal-user-name').value;
  const size = document.getElementById('modal-size').value;

  if (!name || !size) {
    alert('Please fill in both Name and Size to reserve your item.');
    return;
  }

  const reservationMessage = `Hello Ansari Garments,

I would like to reserve the following item:
- Product: ${productName}
- Size: ${size}
- Name: ${name}

Please confirm when I can visit the store to collect or try it on.

Thank you.`;

  window.open(generateWhatsAppUrl(reservationMessage), '_blank');
  closeReservationModal();
};

// Dynamic product lists rendering to ensure all assets are fully displayed
function renderProductGalleries() {
  const upperGrid = document.getElementById('upperwear-grid');
  if (upperGrid) {
    upperGrid.innerHTML = '';
    topwearOrder.forEach(id => {
      const p = UPPERWEAR_DB[id];
      const card = document.createElement('div');
      card.className = "group flex flex-col justify-between border-[1px] border-brand-primary/5 p-4 bg-brand-bg rounded-lg transition shadow-sm hover:shadow-md animate-on-scroll";
      
      let displayImg = p.img;
      // Resolve clean search-validated editorial images
      if (id === 'beige-jacket') displayImg = 'Assets/vintage-washed-work-jacket.jpg';
      else if (id === 'beige-plaid') displayImg = 'Assets/beige-plaid-overshirt-editorial.jpg';
      else if (id === 'blue-plaid') displayImg = 'Assets/midnight-plaid-flannel-editorial.jpg';
      else if (id === 'green-knitwear') displayImg = 'Assets/stylish-green-stripe-shirt.jpg';
      else if (id === 'grey-stripe') displayImg = 'Assets/sandro-striped-shirt-editorial.jpg';
      else if (id === 'white-linen') displayImg = 'Assets/white-oxford-shirt-editorial.jpg';

      card.innerHTML = `
        <div class="w-full h-[380px] overflow-hidden bg-[#e0deda] rounded relative flex items-center justify-center">
          <img src="${displayImg}" alt="${p.name}" class="w-full h-full object-contain p-6 editorial-img" style="mix-blend-mode: ${displayImg.endsWith('.png') ? 'normal' : 'multiply'}">
        </div>
        <div class="mt-6 flex-grow flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-baseline">
              <h3 class="font-heading text-2xl font-light">${p.name}</h3>
              <span class="font-semibold text-brand-accent">${p.price}</span>
            </div>
            <p class="text-xs text-brand-secondary mt-2 leading-relaxed">
              ${p.description}
            </p>
          </div>
          <div class="mt-6 flex justify-between items-center text-xs">
            <span class="font-semibold text-brand-accent">${p.fabric}</span>
            <a href="https://wa.me/9044506599?text=${encodeURIComponent(buildEnquiryMessage(p.name))}" target="_blank" class="px-4 py-2 border border-brand-primary/10 hover:bg-brand-primary hover:text-white transition">Enquire</a>
          </div>
        </div>
      `;
      upperGrid.appendChild(card);
    });
  }

  const bottomGrid = document.getElementById('bottomwear-grid');
  if (bottomGrid) {
    bottomGrid.innerHTML = '';
    bottomwearOrder.forEach(id => {
      const p = BOTTOMWEAR_DB[id];
      const card = document.createElement('div');
      card.className = "bg-white p-4 border border-brand-primary/5 shadow-sm hover:shadow-lg transition duration-300 animate-on-scroll flex flex-col justify-between rounded-lg";
      
      let displayImg = p.img;
      if (id === 'light-blue') displayImg = 'Assets/look-03-classic-denim.jpg';
      else if (id === 'relaxed-wide') displayImg = 'Assets/relaxed-wide-fit-jeans-editorial.jpg';
      else if (id === 'black-wide') displayImg = 'Assets/mid-rise-wide-jeans-ash-black.jpg';
      else if (id === 'grey-wide') displayImg = 'Assets/look-02-minimalist-prep.jpg';
      else if (id === 'ecru-wide') displayImg = 'Assets/baggy-jeans-dark-blue-editorial.jpg';

      card.innerHTML = `
        <div class="w-full h-[280px] overflow-hidden bg-brand-bg relative group rounded flex items-center justify-center">
          <img src="${displayImg}" alt="${p.name}" class="w-full h-full object-contain p-6 editorial-img" style="mix-blend-mode: ${displayImg.endsWith('.png') ? 'normal' : 'multiply'}">
          <div class="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <button onclick="openReservationModal('${p.name}')" class="px-4 py-2 bg-white text-brand-primary text-xs font-semibold tracking-wider uppercase shadow-md hover:bg-brand-primary hover:text-white transition">Quick Reserve</button>
          </div>
        </div>
        <div class="mt-4 flex-grow flex flex-col justify-between">
          <div>
            <h4 class="font-heading text-xl font-light">${p.name}</h4>
            <p class="text-xs text-brand-secondary mt-1 leading-relaxed">
              ${p.description}
            </p>
          </div>
          <div class="flex justify-between items-center mt-3 text-xs pt-3 border-t border-brand-primary/5">
            <span class="text-brand-secondary">${p.fabric}</span>
            <span class="font-bold text-brand-primary">${p.price}</span>
          </div>
        </div>
      `;
      bottomGrid.appendChild(card);
    });
  }
}

// 9. Document Loading & Scroll Trigger Binding (Dynamic & Real-Time Sync)
async function loadShowroomData() {
  try {
    const response = await fetch('/products?visible=true');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.ok}`);
    }
    const products = await response.json();
    populateShowroomState(products);
  } catch (err) {
    console.warn('Error fetching dynamic showroom data, falling back to local static catalog:', err.message);
    const localSaved = localStorage.getItem('fallback_products');
    let localList = FALLBACK_PRODUCTS;
    if (localSaved) {
      try {
        localList = JSON.parse(localSaved);
      } catch (parseErr) {
        console.error('Error parsing localStorage products:', parseErr);
      }
    } else {
      localStorage.setItem('fallback_products', JSON.stringify(FALLBACK_PRODUCTS));
    }
    // storefront only displays visible products
    const visibleProducts = localList.filter(p => p.visibility);
    populateShowroomState(visibleProducts);
  }
}

function setupWebSocket() {
  // If loaded via file:// protocol directly, skip web sockets connection attempts
  if (window.location.protocol === 'file:') {
    console.log('Running from local file system. Skipping WebSocket connection.');
    return;
  }

  const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${wsProtocol}//${window.location.host}`;
  const socket = new WebSocket(wsUrl);

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      if (data.event === 'products_changed') {
        console.log('Real-time sync update triggered via WebSocket.');
        loadShowroomData();
      }
    } catch (err) {
      console.error('WS parse error:', err);
    }
  };

  socket.onclose = () => {
    console.log('WS connection lost. Reconnecting in 5s...');
    setTimeout(setupWebSocket, 5000);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  // Load initial product data and launch WebSockets
  loadShowroomData().then(() => {
    setupWebSocket();
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Initialize GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Initialize details panels starting state
  gsap.set('#bottomwear-section .showroom-right-col', { opacity: 0, y: 50 });

  // Section 1: Hero Experience Scroll triggers (0vh to 100vh)
  ScrollTrigger.create({
    trigger: '#hero-section',
    start: 'top 30%',
    end: 'bottom 30%',
    onEnter: () => {
      // Show only shirt
      gsap.to('#active-shirt', { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
      gsap.to('#active-pant', { opacity: 0, y: 150, scale: 0.9, duration: 0.5, ease: 'power2.out' });
      // Transition details cards
      gsap.to('#hero-section .showroom-right-col', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      gsap.to('#bottomwear-section .showroom-right-col', { opacity: 0, y: 50, duration: 0.4, ease: 'power2.out' });
    },
    onEnterBack: () => {
      gsap.to('#active-shirt', { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
      gsap.to('#active-pant', { opacity: 0, y: 150, scale: 0.9, duration: 0.5, ease: 'power2.out' });
      // Transition details cards
      gsap.to('#hero-section .showroom-right-col', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
      gsap.to('#bottomwear-section .showroom-right-col', { opacity: 0, y: 50, duration: 0.4, ease: 'power2.out' });
    }
  });

  // Section 2: Bottomwear Showcase Scroll triggers (100vh to 200vh)
  ScrollTrigger.create({
    trigger: '#bottomwear-section',
    start: 'top 30%',
    end: 'bottom 30%',
    onEnter: () => {
      // Show only pant
      gsap.to('#active-shirt', { opacity: 0, y: -150, scale: 0.9, duration: 0.5, ease: 'power2.out' });
      gsap.to('#active-pant', { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
      // Transition details cards
      gsap.to('#hero-section .showroom-right-col', { opacity: 0, y: -50, duration: 0.4, ease: 'power2.out' });
      gsap.to('#bottomwear-section .showroom-right-col', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
    },
    onEnterBack: () => {
      gsap.to('#active-shirt', { opacity: 0, y: -150, scale: 0.9, duration: 0.5, ease: 'power2.out' });
      gsap.to('#active-pant', { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
      // Transition details cards
      gsap.to('#hero-section .showroom-right-col', { opacity: 0, y: -50, duration: 0.4, ease: 'power2.out' });
      gsap.to('#bottomwear-section .showroom-right-col', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });
    }
  });

  // Editorial section Scroll reveals
  gsap.utils.toArray('.animate-on-scroll').forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 1.0,
      ease: 'power3.out'
    });
  });
});
