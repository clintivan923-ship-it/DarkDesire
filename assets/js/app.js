/* ===== STATE ===== */
let cart = JSON.parse(localStorage.getItem('eneba_cart') || '[]');
let currentFilter = 'all';
let selectedSize = {};

/* ===== RENDER PRODUCTS ===== */
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!list.length) {
    grid.innerHTML = '<p style="text-align:center;color:#9e6e88;padding:3rem;grid-column:1/-1">No products found.</p>';
    return;
  }
  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.06}s" onclick="openModal(${p.id})">
      ${p.badge ? `<div class="product-badge ${p.badge}">${p.badge === 'new' ? 'NEW' : 'SALE'}</div>` : ''}
      <div class="product-img-wrap">
        <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x280/f9d0e8/c2185b?text=Eneba'" />
        <div class="quick-add" onclick="event.stopPropagation(); addToCart(${p.id}, '${p.sizes[0]}')">+ Add to Cart</div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.categoryLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <div>
            <span class="product-price">$${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="product-price-old">$${p.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id}, '${p.sizes[0]}')">+ Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '★'.repeat(full);
  if (half) s += '½';
  s += '☆'.repeat(5 - full - (half ? 1 : 0));
  return s;
}

/* ===== FILTER ===== */
function filterCategory(cat, chipEl) {
  currentFilter = cat;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  if (chipEl) chipEl.classList.add('active');
  const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
  renderProducts(filtered);
  document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

/* ===== SEARCH ===== */
function searchProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q)
  );
  renderProducts(filtered);
}

function toggleSearch() {
  document.getElementById('searchBar').classList.toggle('open');
  if (document.getElementById('searchBar').classList.contains('open')) {
    document.getElementById('searchInput').focus();
  }
}

/* ===== MODAL ===== */
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  selectedSize[id] = p.sizes[0];

  const hasGallery = p.imgs && p.imgs.length > 1;
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-img-col">
      <img class="modal-img" id="modalMainImg" src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x400/f9d0e8/c2185b?text=Eneba'" />
      ${hasGallery ? `
        <div class="modal-thumbs">
          ${p.imgs.map((src, i) => `<img src="${src}" class="modal-thumb${i === 0 ? ' active' : ''}" onclick="switchModalImg('${src}', this)" alt="view ${i+1}" />`).join('')}
        </div>
      ` : ''}
    </div>
    <div class="modal-details">
      <div class="modal-cat">${p.categoryLabel}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-price">
        $${p.price.toFixed(2)}
        ${p.oldPrice ? `<span style="font-size:0.9rem;color:#9e6e88;text-decoration:line-through;margin-left:8px">$${p.oldPrice.toFixed(2)}</span>` : ''}
      </div>
      <p class="modal-desc">${p.description}</p>
      ${p.sizes.length > 1 ? `
        <div class="size-label">Size</div>
        <div class="size-options" id="sizeOptions_${id}">
          ${p.sizes.map(s => `<button class="size-btn${s === p.sizes[0] ? ' selected' : ''}" onclick="selectSize(${id},'${s}',this)">${s}</button>`).join('')}
        </div>
      ` : ''}
      <div class="product-rating" style="margin-bottom:1rem">
        <span class="stars">${renderStars(p.rating)}</span>
        <span class="rating-count">(${p.reviews} reviews)</span>
      </div>
      <div class="modal-actions">
        <button class="btn-primary" onclick="addToCart(${id}, selectedSize[${id}]); closeModal()">Add to Cart</button>
        <button class="btn-ghost" onclick="closeModal()">Cancel</button>
      </div>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  const modal = document.getElementById('productModal');
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('open'), 10);
  document.body.style.overflow = 'hidden';
}

function switchModalImg(src, el) {
  document.getElementById('modalMainImg').src = src;
  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectSize(id, size, el) {
  selectedSize[id] = size;
  const container = document.getElementById(`sizeOptions_${id}`);
  container.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  const modal = document.getElementById('productModal');
  modal.classList.remove('open');
  setTimeout(() => { modal.style.display = 'none'; }, 300);
  document.body.style.overflow = '';
}

/* ===== CART ===== */
function addToCart(id, size) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const key = `${id}_${size}`;
  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, id, name: p.name, price: p.price, img: p.img, size, qty: 1 });
  }
  saveCart();
  updateCartUI();
  flashCart();
}

function removeFromCart(key) {
  cart = cart.filter(item => item.key !== key);
  saveCart();
  updateCartUI();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(key);
  else { saveCart(); updateCartUI(); }
}

function saveCart() {
  localStorage.setItem('eneba_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (!cart.length) {
    container.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/70x80/f9d0e8/c2185b?text=LC'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div style="font-size:0.78rem;color:#9e6e88;margin-bottom:4px">Size: ${item.size}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.key}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.key}')">🗑</button>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
  footer.style.display = 'block';
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
  document.body.style.overflow =
    document.getElementById('cartSidebar').classList.contains('open') ? 'hidden' : '';
}

function flashCart() {
  const btn = document.querySelector('.cart-btn');
  btn.style.transform = 'scale(1.3)';
  setTimeout(() => { btn.style.transform = ''; }, 200);
}

/* ===== CHECKOUT ===== */
function goCheckout() {
  toggleCart();
  window.location.href = 'checkout.html';
}

/* ===== INIT ===== */
renderProducts(products);
updateCartUI();
