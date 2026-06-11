
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

    let products = [];
    let currentFilter = 'all';

    function isOfflineMode() {
      return window.location.protocol === 'file:';
    }

    // Helper to fetch locally stored access key
    function getAdminKey() {
      return localStorage.getItem('admin_access_key') || '';
    }

    // 1. Establish WebSocket Connection for Real-Time Sync
    function connectWS() {
      if (isOfflineMode()) {
        const indicator = document.getElementById('sync-indicator');
        const text = document.getElementById('sync-text');
        indicator.className = 'w-2.5 h-2.5 rounded-full bg-amber-500 status-pulse';
        text.innerText = 'Mock Sync (Offline)';
        return;
      }

      const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${wsProtocol}//${window.location.host}`;
      const socket = new WebSocket(wsUrl);

      socket.onopen = () => {
        const indicator = document.getElementById('sync-indicator');
        const text = document.getElementById('sync-text');
        indicator.className = 'w-2.5 h-2.5 rounded-full bg-emerald-500 status-pulse';
        text.innerText = 'Sync Connected';
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'products_changed') {
            console.log('Database updated, synchronizing admin table...');
            fetchProducts();
          }
        } catch (err) {
          console.error('WS parse error:', err);
        }
      };

      socket.onclose = () => {
        const indicator = document.getElementById('sync-indicator');
        const text = document.getElementById('sync-text');
        indicator.className = 'w-2.5 h-2.5 rounded-full bg-red-500 status-pulse';
        text.innerText = 'Sync Offline';
        setTimeout(connectWS, 5000); // retry
      };
    }

    // 2. Fetch Products Catalog from Express (with auth)
    async function fetchProducts() {
      if (isOfflineMode()) {
        const localSaved = localStorage.getItem('fallback_products');
        if (!localSaved) {
          localStorage.setItem('fallback_products', JSON.stringify(FALLBACK_PRODUCTS));
          products = JSON.parse(JSON.stringify(FALLBACK_PRODUCTS));
        } else {
          try {
            products = JSON.parse(localSaved);
          } catch (e) {
            products = JSON.parse(JSON.stringify(FALLBACK_PRODUCTS));
          }
        }
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
        return;
      }

      try {
        const res = await fetch('/products', {
          headers: { 'x-admin-key': getAdminKey() }
        });
        if (res.status === 401) {
          logoutAdmin();
          return;
        }
        products = await res.json();
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
      } catch (err) {
        console.error('Error fetching inventory:', err);
      }
    }

    // 3. Render Table List
    function renderInventoryTable() {
      const tbody = document.getElementById('inventory-list');
      tbody.innerHTML = '';

      const filtered = products.filter(p => {
        if (currentFilter === 'top') return p.type === 'top';
        if (currentFilter === 'bottom') return p.type === 'bottom';
        return true;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="px-6 py-8 text-center text-brand-secondary">No products found matching filters.</td></tr>`;
        return;
      }

      filtered.forEach(p => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-brand-primary/5 transition border-b border-brand-primary/5 flex flex-col md:table-row p-4 md:p-0 mb-4 md:mb-0 bg-white md:bg-transparent rounded-lg md:rounded-none border border-brand-primary/5 md:border-none shadow-sm md:shadow-none';

        // Product info column
        const imgPath = p.img || 'Assets/TopWear/beige-workwear-jacket.png';
        const isTransparent = imgPath.toLowerCase().endsWith('.png');

        row.innerHTML = `
          <td class="px-4 md:px-6 py-3 md:py-4 flex items-center space-x-4 md:table-cell w-full md:w-auto">
            <div class="flex items-center space-x-4 w-full">
              <div class="w-12 h-12 bg-white border border-brand-primary/5 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="${imgPath}" alt="${p.name}" class="max-w-full max-h-full object-contain" style="mix-blend-mode: ${isTransparent ? 'normal' : 'multiply'}">
              </div>
              <div class="min-w-0">
                <p class="font-semibold text-brand-primary leading-tight truncate">${p.name}</p>
                <p class="text-2xs text-brand-secondary uppercase tracking-widest font-mono mt-1">${p.id}</p>
                <span class="text-3xs uppercase tracking-widest bg-brand-primary/5 text-brand-accent px-1.5 py-0.5 mt-1 inline-block">${p.type}wear</span>
              </div>
            </div>
          </td>
          <td class="px-4 py-2.5 md:py-4 flex justify-between items-center md:table-cell text-xs font-semibold text-brand-secondary border-t border-brand-primary/5 md:border-none w-full md:w-auto before:content-['Fabric'] before:md:content-none before:text-brand-secondary/55 before:uppercase before:tracking-wider before:text-[0.65rem] before:font-bold">
            <span class="md:max-w-[150px] md:truncate">${p.fabric || '—'}</span>
          </td>
          <td class="px-4 py-2.5 md:py-4 flex justify-between items-center md:table-cell font-semibold text-brand-primary border-t border-brand-primary/5 md:border-none w-full md:w-auto before:content-['Price'] before:md:content-none before:text-brand-secondary/55 before:uppercase before:tracking-wider before:text-[0.65rem] before:font-bold">
            <span>${p.price}</span>
          </td>
          <td class="px-4 py-2.5 md:py-4 flex justify-between items-center md:table-cell border-t border-brand-primary/5 md:border-none w-full md:w-auto before:content-['Stock'] before:md:content-none before:text-brand-secondary/55 before:uppercase before:tracking-wider before:text-[0.65rem] before:font-bold">
            <div class="flex items-center space-x-1.5">
              <button onclick="updateStock('${p.id}', ${p.stock - 1})" class="w-5 h-5 bg-brand-primary/5 border border-brand-primary/10 rounded flex items-center justify-center hover:bg-brand-primary/10 font-bold transition text-xs">-</button>
              <span class="font-semibold text-xs min-w-[20px] text-center ${p.stock <= 2 ? 'text-rose-700 font-bold' : ''}">${p.stock}</span>
              <button onclick="updateStock('${p.id}', ${p.stock + 1})" class="w-5 h-5 bg-brand-primary/5 border border-brand-primary/10 rounded flex items-center justify-center hover:bg-brand-primary/10 font-bold transition text-xs">+</button>
            </div>
          </td>
          <td class="px-4 py-2.5 md:py-4 flex justify-between items-center md:table-cell border-t border-brand-primary/5 md:border-none w-full md:w-auto before:content-['Visibility'] before:md:content-none before:text-brand-secondary/55 before:uppercase before:tracking-wider before:text-[0.65rem] before:font-bold">
            <button onclick="toggleVisibility('${p.id}', ${p.visibility})" class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${p.visibility ? 'bg-emerald-600' : 'bg-gray-300'}">
              <span class="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${p.visibility ? 'translate-x-5' : 'translate-x-0.5'}"></span>
            </button>
          </td>
          <td class="px-4 py-2.5 md:py-4 flex justify-between items-center md:table-cell border-t border-brand-primary/5 md:border-none w-full md:w-auto before:content-['Show_in_Dial'] before:md:content-none before:text-brand-secondary/55 before:uppercase before:tracking-wider before:text-[0.65rem] before:font-bold">
            <button onclick="toggleShowInDial('${p.id}', ${p.showInDial !== false})" class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${p.showInDial !== false ? 'bg-amber-600' : 'bg-gray-300'}">
              <span class="inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${p.showInDial !== false ? 'translate-x-5' : 'translate-x-0.5'}"></span>
            </button>
          </td>
          <td class="px-4 md:px-6 py-3 md:py-4 flex justify-end items-center md:table-cell border-t border-brand-primary/5 md:border-none w-full md:w-auto space-x-4 whitespace-nowrap">
            <button onclick="loadProductToForm('${p.id}')" class="text-xs text-brand-accent uppercase tracking-widest font-bold hover:underline">Edit</button>
            <button onclick="deleteProduct('${p.id}')" class="text-xs text-rose-700 uppercase tracking-widest font-bold hover:underline">Delete</button>
          </td>
        `;
        tbody.appendChild(row);
      });
    }

    // 4. Update Overview Stats
    function updateStats() {
      document.getElementById('stat-total').innerText = products.length + ' Items';
      
      const visible = products.filter(p => p.visibility).length;
      document.getElementById('stat-visible').innerText = visible + ' Visible';

      const warning = products.filter(p => p.stock <= 2).length;
      document.getElementById('stat-stock-warning').innerText = warning + ' Warning';
    }

    // 5. Catalog filter toggle
    function filterCatalog(type) {
      currentFilter = type;
      ['all', 'top', 'bottom'].forEach(t => {
        const btn = document.getElementById('filter-' + t);
        if (t === type) {
          btn.className = 'px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-brand-primary bg-brand-primary text-white transition';
        } else {
          btn.className = 'px-3 py-1 text-xs font-semibold tracking-wider uppercase border border-brand-primary/10 hover:border-brand-primary transition';
        }
      });
      renderInventoryTable();
    }

    // 6. Inline quick action APIs
    async function updateStock(id, newStock) {
      if (newStock < 0) return;
      if (isOfflineMode()) {
        const product = products.find(p => p.id === id);
        if (product) product.stock = newStock;
        localStorage.setItem('fallback_products', JSON.stringify(products));
        renderInventoryTable();
        updateStats();
        return;
      }
      try {
        const res = await fetch(`/products/${id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'x-admin-key': getAdminKey()
          },
          body: JSON.stringify({ stock: newStock })
        });
        if (res.status === 401) {
          logoutAdmin();
          return;
        }
        const product = products.find(p => p.id === id);
        if (product) product.stock = newStock;
        renderInventoryTable();
        updateStats();
      } catch (err) {
        console.error('Error updating stock:', err);
      }
    }

    async function toggleVisibility(id, currentVal) {
      const newVal = !currentVal;
      if (isOfflineMode()) {
        const product = products.find(p => p.id === id);
        if (product) product.visibility = newVal;
        localStorage.setItem('fallback_products', JSON.stringify(products));
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
        return;
      }
      try {
        const res = await fetch(`/products/${id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'x-admin-key': getAdminKey()
          },
          body: JSON.stringify({ visibility: newVal })
        });
        if (res.status === 401) {
          logoutAdmin();
          return;
        }
        const product = products.find(p => p.id === id);
        if (product) product.visibility = newVal;
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
      } catch (err) {
        console.error('Error toggling visibility:', err);
      }
    }

    async function toggleShowInDial(id, currentVal) {
      const newVal = !currentVal;
      if (isOfflineMode()) {
        const product = products.find(p => p.id === id);
        if (product) product.showInDial = newVal;
        localStorage.setItem('fallback_products', JSON.stringify(products));
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
        return;
      }
      try {
        const res = await fetch(`/products/${id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'x-admin-key': getAdminKey()
          },
          body: JSON.stringify({ showInDial: newVal })
        });
        if (res.status === 401) {
          logoutAdmin();
          return;
        }
        const product = products.find(p => p.id === id);
        if (product) product.showInDial = newVal;
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
      } catch (err) {
        console.error('Error toggling showInDial:', err);
      }
    }

    async function deleteProduct(id) {
      if (!confirm('Are you absolutely sure you want to delete this product? This action is permanent.')) return;
      if (isOfflineMode()) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('fallback_products', JSON.stringify(products));
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
        return;
      }
      try {
        const res = await fetch(`/products/${id}`, { 
          method: 'DELETE',
          headers: { 'x-admin-key': getAdminKey() }
        });
        if (res.status === 401) {
          logoutAdmin();
          return;
        }
        // WebSocket triggers table update
      } catch (err) {
        console.error('Error deleting product:', err);
      }
    }

    // 7. Form Operations (Add / Edit)
    function loadProductToForm(id) {
      const p = products.find(p => p.id === id);
      if (!p) return;

      document.getElementById('form-title').innerText = 'Edit Product';
      document.getElementById('form-db-id').value = p.id;
      document.getElementById('form-custom-id').value = p.id;
      document.getElementById('form-custom-id').disabled = true; // prevent editing ID directly
      document.getElementById('form-name').value = p.name;
      document.getElementById('form-price').value = p.price.replace('₹', '');
      document.getElementById('form-stock').value = p.stock;
      document.getElementById('form-category').value = p.type;
      document.getElementById('form-fabric').value = p.fabric || '';
      document.getElementById('form-sizes').value = p.sizes.join(', ');
      document.getElementById('form-description').value = p.description || '';
      document.getElementById('form-visibility').checked = p.visibility;
      document.getElementById('form-show-in-dial').checked = p.showInDial !== false;
      document.getElementById('form-img').value = p.img || '';

      if (p.img) {
        document.getElementById('upload-placeholder').classList.add('hidden');
        const container = document.getElementById('upload-preview-container');
        container.classList.remove('hidden');
        container.classList.add('flex');
        document.getElementById('upload-preview').src = p.img;
        document.getElementById('upload-filename').innerText = p.img.split('/').pop();
      } else {
        clearUploadedImage();
      }
    }

    function resetForm() {
      document.getElementById('form-title').innerText = 'Add New Product';
      document.getElementById('form-db-id').value = '';
      document.getElementById('form-custom-id').value = '';
      document.getElementById('form-custom-id').disabled = false;
      document.getElementById('product-form').reset();
      clearUploadedImage();
    }

    // 8. Image upload handlers
    async function handleImageUpload(e) {
      const file = e.target.files[0];
      if (!file) return;

      if (isOfflineMode()) {
        try {
          const localUrl = URL.createObjectURL(file);
          document.getElementById('form-img').value = localUrl;
          document.getElementById('upload-placeholder').classList.add('hidden');
          const container = document.getElementById('upload-preview-container');
          container.classList.remove('hidden');
          container.classList.add('flex');
          document.getElementById('upload-preview').src = localUrl;
          document.getElementById('upload-filename').innerText = file.name;
        } catch (localErr) {
          alert('Local preview failed: ' + localErr.message);
        }
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      try {
        document.getElementById('upload-filename').innerText = 'Uploading...';
        const res = await fetch('/upload', {
          method: 'POST',
          headers: { 'x-admin-key': getAdminKey() },
          body: formData
        });
        if (res.status === 401) {
          logoutAdmin();
          return;
        }
        const data = await res.json();
        
        if (data.filePath) {
          document.getElementById('form-img').value = data.filePath;
          document.getElementById('upload-placeholder').classList.add('hidden');
          const container = document.getElementById('upload-preview-container');
          container.classList.remove('hidden');
          container.classList.add('flex');
          document.getElementById('upload-preview').src = data.filePath;
          document.getElementById('upload-filename').innerText = file.name;
        } else {
          alert('Upload failed: ' + data.error);
          clearUploadedImage();
        }
      } catch (err) {
        alert('Error uploading image: ' + err.message);
        clearUploadedImage();
      }
    }

    function clearUploadedImage(e) {
      if (e) e.preventDefault();
      document.getElementById('form-img').value = '';
      document.getElementById('file-input').value = '';
      document.getElementById('upload-placeholder').classList.remove('hidden');
      document.getElementById('upload-preview-container').classList.add('hidden');
      document.getElementById('upload-preview-container').classList.remove('flex');
      document.getElementById('upload-preview').src = '';
      document.getElementById('upload-filename').innerText = '';
    }

    // 9. Save Product (POST / PUT)
    async function saveProduct(e) {
      e.preventDefault();

      const dbId = document.getElementById('form-db-id').value;
      const id = document.getElementById('form-custom-id').value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const name = document.getElementById('form-name').value.trim();
      const priceVal = document.getElementById('form-price').value.trim();
      const stock = parseInt(document.getElementById('form-stock').value, 10);
      const type = document.getElementById('form-category').value;
      const fabric = document.getElementById('form-fabric').value.trim();
      const sizes = document.getElementById('form-sizes').value.split(',').map(s => s.trim()).filter(s => s.length > 0);
      const description = document.getElementById('form-description').value.trim();
      const visibility = document.getElementById('form-visibility').checked;
      const showInDial = document.getElementById('form-show-in-dial').checked;
      const img = document.getElementById('form-img').value;

      // Ensure price has rupee symbol
      let formattedPrice = priceVal;
      if (!formattedPrice.startsWith('₹')) {
        formattedPrice = '₹' + formattedPrice;
      }

      const payload = { id, name, price: formattedPrice, stock, type, fabric, sizes, description, visibility, showInDial, img };

      if (isOfflineMode()) {
        if (dbId) {
          // Edit
          const idx = products.findIndex(p => p.id === dbId);
          if (idx !== -1) {
            products[idx] = payload;
          }
        } else {
          // Add
          if (products.some(p => p.id === id)) {
            alert('A product with this ID already exists. Please choose a different showroom ID.');
            return;
          }
          products.push(payload);
        }
        localStorage.setItem('fallback_products', JSON.stringify(products));
        resetForm();
        fetchProducts();
        return;
      }

      try {
        let res;
        if (dbId) {
          res = await fetch(`/products/${dbId}`, {
            method: 'PUT',
            headers: { 
              'Content-Type': 'application/json',
              'x-admin-key': getAdminKey()
            },
            body: JSON.stringify(payload)
          });
        } else {
          res = await fetch('/products', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'x-admin-key': getAdminKey()
            },
            body: JSON.stringify(payload)
          });
        }
        if (res.status === 401) {
          logoutAdmin();
          return;
        }

        const data = await res.json();
        if (data.error) {
          alert('Save failed: ' + data.error);
        } else {
          resetForm();
          fetchProducts();
        }
      } catch (err) {
        alert('Network error while saving product: ' + err.message);
      }
    }

    function renderScrollTriggerManager() {
      // 1. Filter products currently in dial vs not in dial (only visible ones can be in dial)
      const topInDial = products.filter(p => p.type === 'top' && p.visibility && p.showInDial !== false);
      const topNotInDial = products.filter(p => p.type === 'top' && p.visibility && p.showInDial === false);
      
      const bottomInDial = products.filter(p => p.type === 'bottom' && p.visibility && p.showInDial !== false);
      const bottomNotInDial = products.filter(p => p.type === 'bottom' && p.visibility && p.showInDial === false);

      // Update counts
      document.getElementById('dial-top-count').innerText = topInDial.length;
      document.getElementById('dial-bottom-count').innerText = bottomInDial.length;

      // 2. Render Topwear List
      const topList = document.getElementById('dial-top-list');
      topList.innerHTML = '';
      if (topInDial.length === 0) {
        topList.innerHTML = `<p class="text-xs text-brand-secondary py-4 text-center">No topwear garments featured in dial.</p>`;
      } else {
        topInDial.forEach(p => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'flex items-center justify-between p-2 border border-brand-primary/5 rounded bg-white/50 hover:bg-white transition';
          const imgPath = p.img || 'Assets/TopWear/beige-workwear-jacket.png';
          itemDiv.innerHTML = `
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-white border border-brand-primary/5 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="${imgPath}" alt="${p.name}" class="max-w-full max-h-full object-contain">
              </div>
              <div class="min-w-0">
                <p class="text-xs font-semibold text-brand-primary truncate leading-tight">${p.name}</p>
                <p class="text-3xs text-brand-secondary font-mono">${p.id}</p>
              </div>
            </div>
            <button onclick="removeFromDial('${p.id}')" class="text-2xs text-rose-700 font-bold uppercase hover:underline ml-2">Remove</button>
          `;
          topList.appendChild(itemDiv);
        });
      }

      // Render Topwear dropdown select options
      const topSelect = document.getElementById('dial-top-select');
      topSelect.innerHTML = '';
      if (topNotInDial.length === 0) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.innerText = 'No tops available';
        topSelect.appendChild(opt);
      } else {
        topNotInDial.forEach(p => {
          const opt = document.createElement('option');
          opt.value = p.id;
          opt.innerText = p.name;
          topSelect.appendChild(opt);
        });
      }

      // 3. Render Bottomwear List
      const bottomList = document.getElementById('dial-bottom-list');
      bottomList.innerHTML = '';
      if (bottomInDial.length === 0) {
        bottomList.innerHTML = `<p class="text-xs text-brand-secondary py-4 text-center">No bottomwear garments featured in dial.</p>`;
      } else {
        bottomInDial.forEach(p => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'flex items-center justify-between p-2 border border-brand-primary/5 rounded bg-white/50 hover:bg-white transition';
          const imgPath = p.img || 'Assets/BottomWear/light-blue-wide-fit-jeans.png';
          itemDiv.innerHTML = `
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-white border border-brand-primary/5 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="${imgPath}" alt="${p.name}" class="max-w-full max-h-full object-contain">
              </div>
              <div class="min-w-0">
                <p class="text-xs font-semibold text-brand-primary truncate leading-tight">${p.name}</p>
                <p class="text-3xs text-brand-secondary font-mono">${p.id}</p>
              </div>
            </div>
            <button onclick="removeFromDial('${p.id}')" class="text-2xs text-rose-700 font-bold uppercase hover:underline ml-2">Remove</button>
          `;
          bottomList.appendChild(itemDiv);
        });
      }

      // Render Bottomwear dropdown select options
      const bottomSelect = document.getElementById('dial-bottom-select');
      bottomSelect.innerHTML = '';
      if (bottomNotInDial.length === 0) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.innerText = 'No bottoms available';
        bottomSelect.appendChild(opt);
      } else {
        bottomNotInDial.forEach(p => {
          const opt = document.createElement('option');
          opt.value = p.id;
          opt.innerText = p.name;
          bottomSelect.appendChild(opt);
        });
      }
    }

    async function addSelectedToDial(category) {
      const select = document.getElementById(`dial-${category}-select`);
      const id = select.value;
      if (!id) {
        alert('Please select a valid product to add.');
        return;
      }

      // Verify max limit of 10 items
      const inDialCount = products.filter(p => p.type === category && p.visibility && p.showInDial !== false).length;
      if (inDialCount >= 10) {
        alert('Maximum of 10 items allowed in the dial. Please remove an existing item first.');
        return;
      }

      if (isOfflineMode()) {
        const product = products.find(p => p.id === id);
        if (product) product.showInDial = true;
        localStorage.setItem('fallback_products', JSON.stringify(products));
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
        return;
      }

      try {
        const res = await fetch(`/products/${id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'x-admin-key': getAdminKey()
          },
          body: JSON.stringify({ showInDial: true })
        });
        if (res.status === 401) {
          logoutAdmin();
          return;
        }
        const product = products.find(p => p.id === id);
        if (product) product.showInDial = true;
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
      } catch (err) {
        console.error('Error adding product to dial:', err);
      }
    }

    async function removeFromDial(id) {
      if (isOfflineMode()) {
        const product = products.find(p => p.id === id);
        if (product) product.showInDial = false;
        localStorage.setItem('fallback_products', JSON.stringify(products));
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
        return;
      }
      try {
        const res = await fetch(`/products/${id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            'x-admin-key': getAdminKey()
          },
          body: JSON.stringify({ showInDial: false })
        });
        if (res.status === 401) {
          logoutAdmin();
          return;
        }
        const product = products.find(p => p.id === id);
        if (product) product.showInDial = false;
        renderInventoryTable();
        renderScrollTriggerManager();
        updateStats();
      } catch (err) {
        console.error('Error removing product from dial:', err);
      }
    }

    // Authentication Handlers
    async function attemptAuthentication() {
      const key = document.getElementById('auth-key-input').value.trim();
      if (!key) {
        alert('Please enter an access key.');
        return;
      }
      
      const errorMsg = document.getElementById('auth-error-msg');
      errorMsg.classList.add('hidden');

      if (isOfflineMode()) {
        if (key === 'AnsariAdmin2026') {
          localStorage.setItem('admin_access_key', key);
          document.getElementById('auth-overlay').classList.add('hidden');
          connectWS();
          fetchProducts();
        } else {
          errorMsg.classList.remove('hidden');
        }
        return;
      }

      try {
        const res = await fetch('/products', {
          headers: { 'x-admin-key': key }
        });
        
        if (res.status === 200) {
          localStorage.setItem('admin_access_key', key);
          document.getElementById('auth-overlay').classList.add('hidden');
          connectWS();
          fetchProducts();
        } else {
          errorMsg.classList.remove('hidden');
        }
      } catch (err) {
        alert('Connection error: ' + err.message);
      }
    }

    function logoutAdmin() {
      localStorage.removeItem('admin_access_key');
      window.location.reload();
    }

    async function checkAuthOnStartup() {
      const key = getAdminKey();
      if (!key) {
        // Overlay remains visible for login
        return;
      }

      if (isOfflineMode()) {
        if (key === 'AnsariAdmin2026') {
          document.getElementById('auth-overlay').classList.add('hidden');
          connectWS();
          fetchProducts();
        } else {
          localStorage.removeItem('admin_access_key');
        }
        return;
      }

      try {
        const res = await fetch('/products', {
          headers: { 'x-admin-key': key }
        });
        
        if (res.status === 200) {
          document.getElementById('auth-overlay').classList.add('hidden');
          connectWS();
          fetchProducts();
        } else {
          localStorage.removeItem('admin_access_key');
        }
      } catch (err) {
        console.error('Startup auth check connection error:', err);
      }
    }

    // 10. Startup
    window.onload = () => {
      checkAuthOnStartup();
    };
  