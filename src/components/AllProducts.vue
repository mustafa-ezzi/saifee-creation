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
            @click="navigateToCheckout(product, cat)" 
          >
            <div class="relative aspect-[4/5] bg-[#F9F8F6] mb-4 overflow-hidden border border-stone-50">
  <img 
    :src="product.image" 
    :class="[
      'w-full h-full object-cover transition-all duration-700 absolute inset-0',
      product.hoverImage ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'
    ]" 
  />
  
  <img 
    v-if="product.hoverImage"
    :src="product.hoverImage" 
    class="w-full h-full object-cover transition-all duration-700 absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105" 
  />

  <div class="absolute bottom-3 left-3 flex flex-col gap-1.5 pointer-events-none z-10">
    </div>
  
  <div class="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>

              
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
      
    <div class="mt-20 text-center border-t border-stone-100 pt-20">
        <h3 class="text-stone-400 text-[10px] uppercase tracking-[0.5em] mb-8">Can't find what you're looking for?</h3>
        <button 
          @click="$emit('open-lookbook')"
          class="group relative inline-flex flex-col items-center gap-4 transition-all"
        >
          <div class="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-500">
            <svg class="w-5 h-5 text-stone-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <span class="text-[11px] uppercase tracking-[0.3em] font-black text-stone-900">Explore Full Lookbook</span>
          <div class="w-8 h-px bg-brand-gold"></div>
        </button>
      </div>

    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedProduct = ref(null);
const selectedCategory = ref(null);

const navigateToCheckout = (product, category) => {
  router.push({
    name: 'Checkout',
    params: { productId: product.id },
    query: { category: category.name }
  });
};

const catalogData = [
  {
    name: "Premium Envelopes (Hard Matte Card)",
    description: "Our premium hard matte card envelope is designed with elegance. This envelope offers a luxurious feel and sturdy construction. Crafted from 180 gm matte card, providing a smooth, sophisticated touch.",
    specs: ["180 GM Matte Card", "7x3 Inches", "Sticky Back Tape"],
    rates: { 20: '1,200', 50: '1,500', 100: '2,200' },
    products: [
      { id: 101, title: "CODE 01", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQzyNpianSUARlVdJPTkTmsOhAda82bAACGR4AAplwUFS2MAvXOK_xNzoE.jpeg" },
      { id: 105, title: "CODE 02", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQz3Zpia0XpAfcYThPixdiWB5pQc1LXwACeh4AAplwUFSN-Bcxxd3-IjoE.jpeg" },
      { id: 102, title: "CODE 03", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQz3dpia0Z7sUUA6xKrU3NyWmNiU6-VQACex4AAplwUFRc6bHwFHUBHjoE.jpeg", hoverImage: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQz3hpia0cYP-ev0Mh-FLc_AY6l3mqjQACfB4AAplwUFT6zgNfP6RiaDoE.jpeg" },
      { id: 103, title: "CODE 04", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQz3Vpia0TnFfkHLw3tV1uBKDbRvllzAACeR4AAplwUFQ1I4TCT2rIKzoE.jpeg" },
    ]
  },
  {
        name: "Pearl / Glossy Paper Envelopes",
        description: "Designed to balance elegance and affordability for everyday and special use. Crafted from 140 GSM glossy paper, delivering a smooth, elegant, and refined finish.",
        specs: ["140 GSM Glossy", "7x3 Inches", "Sticky Back Tape"],
        rates: { 20: '1,000', 50: '1,300', 100: '2,000' },
        products: [
            { id: 201, title: "PGPE 01", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1o9piwhYtflLPHUs1EH5fSU32ehPvwACiiAAAplwWFTlmCvm5-MpPjoE.jpeg" },
            { id: 202, title: "PGPE 02", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1pBpiwhaPicgEQ-F7teyz4I7K5dXGQACiyAAAplwWFQLyHAQg3JUYjoE.jpeg" },
            { id: 203, title: "PGPE 03", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1pJpiwhfp5uBUpLBTKlv_RtpZznuHgACjSAAAplwWFQvmYaD99CDkToE.jpeg" },
            { id: 204, title: "PGPE 04", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1pFpiwhds1kOWRmFY_OwiGjNPBJuvQACjCAAAplwWFSAahTOP98CpjoE.jpeg" },

        ]
  },
 {
        name: "Eid Envelopes",
        description: "Celebrate the joy of Eid with our special collection designed for Eidi and festive greetings.",
        specs: ["High Quality Print", "Festive Designs"],
        rates: { 20: '1,200', 50: '1,500', 100: '2,200' },
        products: [
            { id: 301, title: "EE 01", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1a1pivKbsM18I0h9Y6PknkCW0-tiVQACbB8AAplwWFRaKchEa3_4GToE.jpeg" },
            { id: 302, title: "EE 02", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1appivKRX7fa1uXtI6vyT8qkk32LAgACaR8AAplwWFSNvCi28sWaMzoE.jpeg" },
            { id: 303, title: "EE 03", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1aVpivKD7JSB2U0e73PWVDGlnVRQEAACZB8AAplwWFSlm-cR50rqOzoE.jpeg" },
            { id: 304, title: "EE 04", image: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEQ1aRpivKBHWUVPzRYY-upLfKub2rz2QACYx8AAplwWFQqMYFPqiqB5joE.jpeg" },
         
        ]
  },
  {
    name: "Best Sellers",
    description: "", // No description as per your requirement
    products: [
      { id: 401, title: "Classic Ivory Matte", image: "/01.jpeg" },
      { id: 402, title: "Classic Ivory Matte", image: "/01.jpeg" },
      { id: 404, title: "Classic Ivory Matte", image: "/01.jpeg" },
     
    ]
  },

  {
    name: "New Arrivals",   
    description: "", // No description as per your requirement
    products: [
      { id: 401, title: "Classic Ivory Matte", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/482271976_17952784253919940_1033434239592993190_n.webp?_nc_cat=100&ig_cache_key=MzU4MDY0MTMxOTY3MjAwNzU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5e7KdOIvN4gQ7kNvwEBySvH&_nc_oc=Adm1Q8VfOKKPSIs7vD3meb5YfkkZxmgqYYj1YCtVevGbrGHboZo4LY-h9CQX_xKn84S27kji1BDrCob5ICDYXE1V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfuUOubteiluQEd2wJrLqd90GAhuwwk4Ywdi7P-kavFOag&oe=698A221B" },
      { id: 402, title: "Classic Ivory Matte", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/482271976_17952784253919940_1033434239592993190_n.webp?_nc_cat=100&ig_cache_key=MzU4MDY0MTMxOTY3MjAwNzU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5e7KdOIvN4gQ7kNvwEBySvH&_nc_oc=Adm1Q8VfOKKPSIs7vD3meb5YfkkZxmgqYYj1YCtVevGbrGHboZo4LY-h9CQX_xKn84S27kji1BDrCob5ICDYXE1V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfuUOubteiluQEd2wJrLqd90GAhuwwk4Ywdi7P-kavFOag&oe=698A221B" },
      { id: 404, title: "Classic Ivory Matte", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/482271976_17952784253919940_1033434239592993190_n.webp?_nc_cat=100&ig_cache_key=MzU4MDY0MTMxOTY3MjAwNzU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5e7KdOIvN4gQ7kNvwEBySvH&_nc_oc=Adm1Q8VfOKKPSIs7vD3meb5YfkkZxmgqYYj1YCtVevGbrGHboZo4LY-h9CQX_xKn84S27kji1BDrCob5ICDYXE1V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfuUOubteiluQEd2wJrLqd90GAhuwwk4Ywdi7P-kavFOag&oe=698A221B" },

    ]
  },
  {
    name: "Festive Collection",
    description: "", // No description as per your requirement
    products: [
      { id: 401, title: "Classic Ivory Matte", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/482271976_17952784253919940_1033434239592993190_n.webp?_nc_cat=100&ig_cache_key=MzU4MDY0MTMxOTY3MjAwNzU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5e7KdOIvN4gQ7kNvwEBySvH&_nc_oc=Adm1Q8VfOKKPSIs7vD3meb5YfkkZxmgqYYj1YCtVevGbrGHboZo4LY-h9CQX_xKn84S27kji1BDrCob5ICDYXE1V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfuUOubteiluQEd2wJrLqd90GAhuwwk4Ywdi7P-kavFOag&oe=698A221B" },
      { id: 402, title: "Classic Ivory Matte", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/482271976_17952784253919940_1033434239592993190_n.webp?_nc_cat=100&ig_cache_key=MzU4MDY0MTMxOTY3MjAwNzU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5e7KdOIvN4gQ7kNvwEBySvH&_nc_oc=Adm1Q8VfOKKPSIs7vD3meb5YfkkZxmgqYYj1YCtVevGbrGHboZo4LY-h9CQX_xKn84S27kji1BDrCob5ICDYXE1V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfuUOubteiluQEd2wJrLqd90GAhuwwk4Ywdi7P-kavFOag&oe=698A221B" },
      { id: 404, title: "Classic Ivory Matte", image: "https://instagram.fkhi17-2.fna.fbcdn.net/v/t51.75761-15/482271976_17952784253919940_1033434239592993190_n.webp?_nc_cat=100&ig_cache_key=MzU4MDY0MTMxOTY3MjAwNzU4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=5e7KdOIvN4gQ7kNvwEBySvH&_nc_oc=Adm1Q8VfOKKPSIs7vD3meb5YfkkZxmgqYYj1YCtVevGbrGHboZo4LY-h9CQX_xKn84S27kji1BDrCob5ICDYXE1V&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkhi17-2.fna&_nc_gid=E9gtx8c8tGyrrbl-DSAPjg&oh=00_AfuUOubteiluQEd2wJrLqd90GAhuwwk4Ywdi7P-kavFOag&oe=698A221B" },
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