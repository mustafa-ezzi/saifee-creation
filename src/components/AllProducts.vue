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
      { id: 101, title: "Royal Sand Matte", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/483723021_17953843763919940_980147031252856524_n.webp?_nc_cat=106&ig_cache_key=MzU4NzIxMTczMTQzMjIyNTc4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=33-BBY0wQAoQ7kNvwF284Ni&_nc_oc=AdkpNrmpZpg5izhwB6SfFkC2wx9y4_2U-dVKvDCUI_b6LGdFfvsTgjqrh4JlpTNNb_bbfBX9iTqV5vUG6RN9sfny&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AftStaePADPHOTrc71CNBXMlLERbro9r-H5V_JI9tst4Sg&oe=698A1C2F" },
      { id: 102, title: "Deep Forest Matte", image: "https://instagram.fkhi22-1.fna.fbcdn.net/v/t51.82787-15/540573158_17972706980919940_5995382558329972232_n.webp?_nc_cat=111&ig_cache_key=MzcxMTM0NzYwODEzNzc4ODE5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=6UCGebTQLAkQ7kNvwG31ooZ&_nc_oc=AdkHiBqVzw88rkG2e7vbb_-NpXZJrs3qd3ix545W3Dv0L_k94wEtGSYOxW6KCFu5Fw2nPFDSoAt5I8GBfhWLM7wP&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi22-1.fna&_nc_gid=5VTXEPyieP8CegYPA-S1-Q&oh=00_Afsgj4eMaE7JbrGwk-Nd5z0RDUr1ujz6uZOUJVTRIKAYsQ&oe=6989F987" },
      { id: 103, title: "Midnight Charcoal", image: "/charcoal.png" },
      { id: 103, title: "Midnight Charcoal", image: "/charcoal.png" },
      { id: 104, title: "Royal Sand Matte", image: "/charcoal.png" },
      { id: 105, title: "Deep Forest Matte", image: "/charcoal.png" }

    ]
  },
  {
    name: "Pearl / Glossy Paper Envelopes",
    description: "Designed to balance elegance and affordability for everyday and special use. Crafted from 140 GSM glossy paper, delivering a smooth, elegant, and refined finish.",
    specs: ["140 GSM Glossy", "7x3 Inches", "Sticky Back Tape"],
    rates: { 20: '1,000', 50: '1,300', 100: '2,000' },
    products: [
      { id: 201, title: "Golden Pearl Shimmer", image: "/eid-env.png" },
      { id: 202, title: "Silver Moon Gloss", image: "/eid2.png" }
    ]
  },
  {
    name: "Eid Envelopes",
    description: "Celebrate the joy of Eid with our special collection designed for Eidi and festive greetings.",
    specs: ["High Quality Print", "Festive Designs"],
    rates: { 20: '1,200', 50: '1,500', 100: '2,200' },
    products: [
      { id: 301, title: "Floral Chand Raat", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/482271976_17952784253919940_1033434239592993190_n.webp?_nc_cat=100&ig_cache_key=MzU4MDY0MTMxOTY3MjAwNzU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5e7KdOIvN4gQ7kNvwEBySvH&_nc_oc=Adm1Q8VfOKKPSIs7vD3meb5YfkkZxmgqYYj1YCtVevGbrGHboZo4LY-h9CQX_xKn84S27kji1BDrCob5ICDYXE1V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfuUOubteiluQEd2wJrLqd90GAhuwwk4Ywdi7P-kavFOag&oe=698A221B" },
      { id: 302, title: "Floral Chand Raat", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/482271976_17952784253919940_1033434239592993190_n.webp?_nc_cat=100&ig_cache_key=MzU4MDY0MTMxOTY3MjAwNzU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5e7KdOIvN4gQ7kNvwEBySvH&_nc_oc=Adm1Q8VfOKKPSIs7vD3meb5YfkkZxmgqYYj1YCtVevGbrGHboZo4LY-h9CQX_xKn84S27kji1BDrCob5ICDYXE1V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfuUOubteiluQEd2wJrLqd90GAhuwwk4Ywdi7P-kavFOag&oe=698A221B" },
      { id: 303, title: "Floral Chand Raat", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/482271976_17952784253919940_1033434239592993190_n.webp?_nc_cat=100&ig_cache_key=MzU4MDY0MTMxOTY3MjAwNzU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5e7KdOIvN4gQ7kNvwEBySvH&_nc_oc=Adm1Q8VfOKKPSIs7vD3meb5YfkkZxmgqYYj1YCtVevGbrGHboZo4LY-h9CQX_xKn84S27kji1BDrCob5ICDYXE1V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfuUOubteiluQEd2wJrLqd90GAhuwwk4Ywdi7P-kavFOag&oe=698A221B" },
      
    { id: 304, title: "Eid Special", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/484345382_17953843556919940_5719011624453021580_n.webp?_nc_cat=101&ig_cache_key=MzU4NzIxMDQzODQ3MDg2OTIzNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=MIaXc4xcXEQQ7kNvwEU-PIk&_nc_oc=AdnoHiRZPd_e3qH0dWEx-C_BX-ikfpJq6cmvHFgS1s5vg-pvE2jcJaEJGgm8WkVJHSzo5jLpnwGRo9RUX29DmvGX&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfvL7Igu_zPDVFY8zax17plKcLfhZYXEBIkhtBAdq7VHwQ&oe=698A1F31" }
    ]
  },
  {
    name: "Best Sellers",
    description: "", // No description as per your requirement
    products: [
      { id: 401, title: "Classic Ivory Matte", image: "/premium.png" },
      { id: 402, title: "Classic Ivory Matte", image: "/new.png" },
      { id: 403, title: "Classic Ivory Matte", image: "/premium.png" },
      { id: 404, title: "Classic Ivory Matte", image: "/fest.png" },
      { id: 405, title: "Classic Ivory Matte", image: "/premium.png" },
      { id: 405, title: "Classic Ivory Matte", image: "/premium.png" },

    ]
  },

  {
    name: "New Arrivals",
    description: "", // No description as per your requirement
    products: [
      { id: 401, title: "Classic Ivory Matte", image: "/new.png" },
      { id: 402, title: "Classic Ivory Matte", image: "/fest.png" },
      { id: 403, title: "Classic Ivory Matte", image: "/new.png" },
      { id: 404, title: "Classic Ivory Matte", image: "/premium.png" },
      { id: 405, title: "Classic Ivory Matte", image: "/new.png" },

    ]
  },
  {
    name: "Festive Collection",
    description: "", // No description as per your requirement
    products: [
      { id: 401, title: "Classic Ivory Matte", image: "/fest.png" },
      { id: 402, title: "Classic Ivory Matte", image: "/new.png" },
      { id: 403, title: "Classic Ivory Matte", image: "/fest.png" },
      { id: 404, title: "Classic Ivory Matte", image: "/premium.png" },
      { id: 405, title: "Classic Ivory Matte", image: "/fest.png" },
    ]
  },
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