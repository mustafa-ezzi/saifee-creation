<template>
  <section id="collections" class="bg-white py-20">
    <div class="max-w-[1400px] mx-auto px-6">
      
      <div class="text-center mb-24">
        <h1 class="text-4xl md:text-5xl font-serif text-stone-900 mb-4 italic">Our Collections</h1>
        <div class="w-12 h-px bg-brand-gold mx-auto"></div>
      </div>

      <div v-for="(cat, index) in catalogData" :key="index" class="mb-32">
        <div class="max-w-3xl mb-12">
          <h2 class="text-2xl md:text-3xl font-serif text-stone-900 mb-4 capitalize">
            {{ cat.name }}
          </h2>
          <p v-if="cat.description" class="text-stone-500 text-sm md:text-base leading-relaxed font-light italic border-l border-stone-200 pl-6">
            {{ cat.description }}
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          <div 
            v-for="product in cat.products" 
            :key="product.id"
            class="group cursor-pointer"
            @click="$emit('select-product', product, cat)" 
          >
            <div class="relative aspect-[4/5] bg-[#F9F8F6] mb-4 overflow-hidden border border-stone-50">
              <img :src="product.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div class="absolute bottom-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                <div class="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-stone-100 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span class="text-rose-400 text-[10px]">⭐</span>
                  <span class="text-[8px] uppercase tracking-tighter font-black text-stone-800">High-Quality Print</span>
                </div>
                <div class="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-stone-100 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <span class="text-rose-400 text-[10px]">👑</span>
                  <span class="text-[8px] uppercase tracking-tighter font-black text-stone-800">Premium Finish</span>
                </div>
              </div>

              <div class="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
            </div>

            <h3 class="text-[11px] uppercase tracking-widest font-bold text-stone-900">{{ product.title }}</h3>
            <p class="text-stone-400 text-[10px] mt-1 italic">View Personalization Details</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';

const selectedProduct = ref(null);
const selectedCategory = ref(null);

const catalogData = [
  {
    name: "Premium Envelopes (Hard Matte Card)",
    description: "Our premium hard matte card envelope is designed with elegance. This envelope offers a luxurious feel and sturdy construction. Crafted from 180 gm matte card, providing a smooth, sophisticated touch.",
    specs: ["180 GM Matte Card", "7x3 Inches", "Sticky Back Tape"],
    rates: { 20: '1,200', 50: '1,500', 100: '2,200' },
    products: [
      { id: 101, title: "Royal Sand Matte", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800" },
      { id: 102, title: "Deep Forest Matte", image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800" },
      { id: 103, title: "Midnight Charcoal", image: "https://images.unsplash.com/photo-1516533037748-628d3f823e27?q=80&w=800" }
    ]
  },
  {
    name: "Pearl / Glossy Paper Envelopes",
    description: "Designed to balance elegance and affordability for everyday and special use. Crafted from 140 GSM glossy paper, delivering a smooth, elegant, and refined finish.",
    specs: ["140 GSM Glossy", "7x3 Inches", "Sticky Back Tape"],
    rates: { 20: '1,000', 50: '1,300', 100: '2,000' },
    products: [
      { id: 201, title: "Golden Pearl Shimmer", image: "https://images.unsplash.com/photo-1598914614611-6655c6978683?q=80&w=800" },
      { id: 202, title: "Silver Moon Gloss", image: "https://images.unsplash.com/photo-1614032126233-a3bc89110492?q=80&w=800" }
    ]
  },
  {
    name: "Eid Envelopes",
    description: "Celebrate the joy of Eid with our special collection designed for Eidi and festive greetings.",
    specs: ["High Quality Print", "Festive Designs"],
    rates: { 20: '1,200', 50: '1,500', 100: '2,200' },
    products: [
      { id: 301, title: "Floral Chand Raat", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=800" }
    ]
  },
  {
    name: "Best Sellers",
    description: "", // No description as per your requirement
    products: [
      { id: 401, title: "Classic Ivory Matte", image: "https://images.unsplash.com/photo-1603533400507-68040d85a153?q=80&w=800" }
    ]
  },

  {
    name: "New Arrivals",
    description: "", // No description as per your requirement
    products: [
      { id: 401, title: "Classic Ivory Matte", image: "https://images.unsplash.com/photo-1603533400507-68040d85a153?q=80&w=800" }
    ]
  },
  {
    name: "Festive Collection",
    description: "", // No description as per your requirement
    products: [
      { id: 401, title: "Classic Ivory Matte", image: "https://images.unsplash.com/photo-1603533400507-68040d85a153?q=80&w=800" }
    ]
  }
];

const openProduct = (product, category) => {
  selectedProduct.value = product;
  selectedCategory.value = category;
  document.body.style.overflow = 'hidden';
};

const closeProduct = () => {
  selectedProduct.value = null;
  selectedCategory.value = null;
  document.body.style.overflow = 'auto';
};

const generateWhatsAppLink = (product) => {
  const phoneNumber = '923352210993';
  const text = encodeURIComponent(`Assalamu Alaikum Saifee Creations, I want to inquire about: \nProduct: ${product.title} \nCategory: ${selectedCategory.value.name}`);
  return `https://wa.me/${phoneNumber}?text=${text}`;
};
</script>

<style scoped>
.text-brand-gold { color: #C9A961; }
.modal-fade-enter-active, .modal-fade-leave-active { transition: all 0.4s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; transform: scale(0.98); }
</style>