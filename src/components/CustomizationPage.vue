<template>
  <nav
    class="fixed w-full top-0 left-0 z-[200] bg-white border-b border-stone-100 px-6 py-4 flex items-center justify-between shadow-sm">
    <div @click="$router.push('/')" class="flex-1 cursor-pointer">
      <div class="relative w-32 h-10 overflow-hidden">
        <transition name="logo-fade">
          <img v-if="currentLogo === 1" key="l1" src="/logo-1.png"
            class="absolute inset-0 w-full h-full object-contain" />
          <img v-else key="l2" src="/logo-2.png" class="absolute inset-0 w-full h-full object-contain" />
        </transition>
      </div>
    </div>
  </nav>

  <div class="bg-white min-h-screen pt-28 pb-20">
    <div v-if="product && category" class="max-w-5xl mx-auto px-6">
      <div class="bg-white border border-stone-100 mb-12 relative overflow-hidden shadow-sm rounded-sm">
        <div class="h-1 w-full bg-gradient-to-r from-[#C9A961]/20 via-rose-500/40 to-[#C9A961]/20"></div>
        <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div
            class="flex items-center mt-4 md:mt-0 gap-4 bg-rose-50/50 px-4 py-2 rounded-full border border-rose-100/50">
            <div class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </div>
            <p class="text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-black text-stone-800">
              High Demand: <span class="text-rose-600">{{ viewerCount }} others</span> viewing this design
            </p>
          </div>

          <div class="flex flex-col md:flex-row items-center gap-6">
            <p class="text-rose-600 text-[10px] uppercase tracking-[0.25em] font-black animate-pulse">
              Free Shipping <span class="text-stone-400 font-medium tracking-normal mx-1">on orders above</span> Rs.
              1,499
            </p>
            <div class="flex items-center gap-4 bg-stone-900 px-5 py-2.5 shadow-xl rounded-sm">
              <span
                class="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 border-r border-stone-700 pr-4">Offer
                Ends</span>
              <div class="flex gap-3 font-mono text-sm font-black text-white">
                <div class="flex flex-col items-center">
                  <span>00</span>
                  <span class="text-[6px] uppercase tracking-tighter text-[#C9A961]">hr</span>
                </div>
                <span class="text-stone-600">:</span>
                <div class="flex flex-col items-center">
                  <span>{{ minutes.toString().padStart(2, '0') }}</span>
                  <span class="text-[6px] uppercase tracking-tighter text-[#C9A961]">min</span>
                </div>
                <span class="text-stone-600">:</span>
                <div class="flex flex-col items-center">
                  <span>{{ seconds.toString().padStart(2, '0') }}</span>
                  <span class="text-[6px] uppercase tracking-tighter text-[#C9A961]">sec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center mb-12 border-b border-stone-100 pb-6">
        <div>
          <h1 class="text-2xl font-serif text-stone-900 italic">Personalize Your Envelope</h1>
          <p class="text-stone-400 text-[10px] uppercase tracking-widest mt-1 font-bold">Design Studio • Saifee
            Creations</p>
        </div>
        <button @click="$router.push('/')"
          class="text-[10px] uppercase tracking-widest font-bold border border-stone-200 px-6 py-2 hover:bg-stone-900 hover:text-white transition-all">
          Back to Shop
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div class="lg:col-span-5">
          <div class="sticky top-28">
            <div class="aspect-[4/5] bg-stone-50 border border-stone-100 overflow-hidden mb-6 shadow-sm">
              <img :src="product.images[0]"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>
            <h2 class="text-xl font-serif text-stone-900">{{ product.title }}</h2>
            <p class="text-[#C9A961] text-[10px] uppercase tracking-widest font-black mt-2">{{ category.name }}</p>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-12">

          <section>
            <h3 class="text-xs uppercase tracking-widest font-bold text-stone-900 mb-6 flex items-center gap-3">
              <span
                class="w-6 h-6 bg-stone-900 text-white rounded-full flex items-center justify-center text-[10px]">1</span>
              Select Quantity
            </h3>
            <div class="grid grid-cols-3 gap-4">
              <button v-for="(price, qty) in category.rates" :key="qty" @click="form.quantity = qty"
                :class="['p-4 border text-center transition-all relative', form.quantity === qty ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900' : 'border-stone-100 text-stone-400 hover:border-stone-300']">
                <div class="text-sm font-bold text-stone-900">{{ qty }}</div>
                <div class="text-[9px] uppercase tracking-tighter opacity-70">Envelopes</div>
                <div class="mt-2 text-[10px] font-black text-[#C9A961] pt-2 border-t border-stone-200">Rs. {{ price }}
                </div>
              </button>
            </div>
          </section>

          <section>
            <h3 class="text-xs uppercase tracking-widest font-bold text-stone-900 mb-6 flex items-center gap-3">
              <span
                class="w-6 h-6 bg-stone-900 text-white rounded-full flex items-center justify-center text-[10px]">2</span>
              Choose Opening Wish
            </h3>
            <div class="space-y-3">
              <div v-for="opt in wishOptions" :key="opt" @click="form.wish = opt"
                :class="['p-4 border text-sm cursor-pointer transition-all flex justify-between items-center', form.wish === opt ? 'border-stone-900 bg-stone-50 font-bold' : 'border-stone-100 text-stone-500 hover:border-stone-200']">
                <span>{{ opt }}</span>
                <div v-if="form.wish === opt" class="w-2 h-2 bg-stone-900 rounded-full"></div>
              </div>
              <div v-if="form.wish === 'Other'" class="mt-4">
                <input v-model="form.customWish" type="text" placeholder="Type your custom wording here..."
                  class="w-full border-b border-stone-900 py-3 text-sm focus:outline-none italic" />
              </div>
            </div>
          </section>

          <section>
            <h3 class="text-xs uppercase tracking-widest font-bold text-stone-900 mb-6 flex items-center gap-3">
              <span
                class="w-6 h-6 bg-stone-900 text-white rounded-full flex items-center justify-center text-[10px]">3</span>
              Full Name to Print
            </h3>
            <input v-model="form.printName" type="text" placeholder="e.g., Mr. & Mrs. Saifee"
              class="w-full border-b border-stone-200 py-4 text-lg font-serif italic focus:border-stone-900 focus:outline-none transition-all" />
          </section>

          <section class="space-y-6">
            <h3 class="text-xs uppercase tracking-widest font-bold text-stone-900 flex items-center gap-3">
              <span
                class="w-6 h-6 bg-stone-900 text-white rounded-full flex items-center justify-center text-[10px]">4</span>
              Choose Font Style
            </h3>

            <div class="bg-stone-50 border border-stone-100 p-4 rounded-sm">
              <p class="text-[9px] uppercase tracking-widest text-stone-400 mb-3 font-bold text-center">Reference
                Catalog</p>
              <div class="relative group cursor-zoom-in">
                <img src="/fonts.jpeg" alt="Font Style Catalog" class="w-full rounded-sm shadow-sm" />
                <div class="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors"></div>
              </div>
            </div>

            <div class="grid grid-cols-4 sm:grid-cols-8 gap-2">
              <button v-for="n in 8" :key="n" @click="form.fontCode = n" :class="[
                'h-12 border flex items-center justify-center text-sm font-bold transition-all',
                form.fontCode === n ? 'bg-stone-900 text-white border-stone-900 shadow-md' : 'bg-white text-stone-400 border-stone-100 hover:border-stone-300'
              ]">
                {{ n }}
              </button>
            </div>
            <p v-if="form.fontCode" class="text-center text-[10px] text-[#C9A961] uppercase tracking-widest font-black">
              Selected Style: Font Code 0{{ form.fontCode }}
            </p>
          </section>

          <section class="bg-stone-50 p-8 space-y-6 rounded-sm border border-stone-100">
            <h3 class="text-xs uppercase tracking-widest font-bold text-stone-900">Step 5: Delivery Details</h3>
            <div class="space-y-4">
              <textarea v-model="form.address" placeholder="Full Delivery Address (City, Area, Street)"
                class="w-full bg-white border border-stone-200 p-4 text-sm focus:border-stone-900 focus:outline-none"
                rows="3"></textarea>
              <input v-model="form.contact" type="tel" placeholder="WhatsApp Number"
                class="w-full bg-white border border-stone-200 p-4 text-sm focus:border-stone-900 focus:outline-none" />
              <input v-model="form.instructions" type="text" placeholder="Special Instructions (Optional)"
                class="w-full bg-white border border-stone-200 p-4 text-sm focus:border-stone-900 focus:outline-none" />
            </div>
          </section>

          <div class="bg-stone-900 text-white p-8 rounded-sm shadow-2xl space-y-6">
            <div class="flex justify-between items-center border-b border-white/10 pb-6">
              <div>
                <p class="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Items Selected</p>
                <p class="text-sm font-serif italic">{{ form.quantity }} x {{ product.title }}</p>
              </div>
              <div class="text-right">
                <p class="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Subtotal</p>
                <p class="text-2xl font-bold text-[#C9A961]">Rs. {{ currentPrice }}</p>
              </div>
            </div>

            <button @click="sendOrder"
              class="group w-full bg-[#C9A961] text-stone-900 py-6 text-[11px] uppercase tracking-[0.4em] font-black hover:bg-white transition-all flex items-center justify-center gap-4 active:scale-[0.98]">
              <span>Place Order via WhatsApp</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.284l-.548 2.003 2.051-.538c.954.524 1.939.814 3.241.815 3.179 0 5.766-2.587 5.767-5.766 0-3.18-2.587-5.764-5.768-5.764z" />
              </svg>
            </button>
            <p class="text-center text-[9px] text-stone-500 uppercase tracking-widest">Secure Checkout • Crafted with
              Precision</p>
          </div>
        </div>
      </div>

    </div>
    <div v-else class="min-h-screen flex items-center justify-center bg-white">
      <div class="flex flex-col items-center gap-4">
        <div class="w-8 h-8 border-2 border-stone-200 border-t-stone-900 rounded-full animate-spin"></div>
        <p class="text-stone-400 animate-pulse uppercase tracking-widest text-[10px] font-bold">
          Loading Studio...
        </p>
      </div>
    </div>
  </div>

</template>

<script setup>
import { reactive, ref, onMounted, computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { catalogData } from '../data/catalog.js';

const route = useRoute();
const productId = route.params.productId;

const viewerCount = ref(58);
const totalSeconds = ref(628);
const minutes = ref(10);
const seconds = ref(28);

const wishOptions = ["With Best Wishes,", "With Regards,", "With Compliments,", "Other"];
const currentLogo = ref(1);
let logoInterval = null;

const product = ref(null);
const category = ref(null);

onMounted(() => {
  for (let cat of catalogData) {
    const foundProduct = cat.products.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      product.value = foundProduct;
      category.value = cat;
      break;
    }
  }

  logoInterval = setInterval(() => {
    currentLogo.value = currentLogo.value === 1 ? 2 : 1;
  }, 5000);

  viewerCount.value = Math.floor(Math.random() * (85 - 45 + 1)) + 45;
  const timer = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--;
      minutes.value = Math.floor(totalSeconds.value / 60);
      seconds.value = totalSeconds.value % 60;
    } else { clearInterval(timer); }
  }, 1000);
});

onUnmounted(() => {
  if (logoInterval) clearInterval(logoInterval);
});

const form = reactive({
  quantity: '20',
  wish: 'With Best Wishes,',
  customWish: '',
  printName: '',
  address: '',
  fontCode: 1,
  contact: '',
  instructions: ''
});

const currentPrice = computed(() => {
  return category.value?.rates[form.quantity] || '0';
});

const generateOrderID = () => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const randomSerial = Math.floor(Math.random() * 900) + 100;
  return `SC-${year}${month}${day}-${randomSerial}`;
};

const sendOrder = () => {
  if (!product.value || !category.value) {
    alert('Product information not found');
    return;
  }

  const orderID = generateOrderID();
  const finalWish = form.wish === 'Other' ? form.customWish : form.wish;
  const waNumber = '923352210993';

  const text = `*New Order - Saifee Creations* 📩
*Order ID:* ${orderID}
--------------------------
*Product:* ${product.value.title}
*Category:* ${category.value.name}
*Quantity:* ${form.quantity} Envelopes
*Price:* Rs. ${currentPrice.value} 💰
--------------------------
*Selected Wish:* ${finalWish}
*Printing Name:* ${form.printName || 'Not Specified'}
*Font Style:* Style Code 0${form.fontCode} 🖋️
--------------------------
*Delivery Address:* ${form.address || 'Not Provided'}
*WhatsApp Number:* ${form.contact || 'Not Provided'}
*Special Notes:* ${form.instructions || 'None'}`;

  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
};
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }
}

.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: all 0.7s ease;
}

.logo-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.logo-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>