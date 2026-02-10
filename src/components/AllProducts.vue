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
          <p v-if="cat.description"
            class="text-stone-500 text-sm md:text-base leading-relaxed font-light italic border-l border-stone-200 pl-6">
            {{ cat.description }}
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
          <div v-for="product in cat.products" :key="product.id" class="group cursor-pointer"
            @click="navigateToCheckout(product, cat)">
            <div class="relative aspect-[4/5] bg-[#F9F8F6] mb-4 overflow-hidden border border-stone-50">
              <img :src="product.images[0]" :class="[
                'w-full h-full object-cover transition-all duration-700 absolute inset-0',
                product.images.length > 1 ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'
              ]" />

              <img v-if="product.images.length > 1" :src="product.images[1]"
                class="w-full h-full object-cover transition-all duration-700 absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105" />

              <div class="absolute bottom-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                <div
                  class="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-stone-100 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span class="text-rose-400 text-[10px]">⭐</span>
                  <span class="text-[8px] uppercase tracking-tighter font-black text-stone-800">High-Quality
                    Print</span>
                </div>
                <div
                  class="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm border border-stone-100 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <span class="text-rose-400 text-[10px]">👑</span>
                  <span class="text-[8px] uppercase tracking-tighter font-black text-stone-800">Premium Finish</span>
                </div>
              </div>
            </div>

            <h3 class="text-[11px] uppercase tracking-widest font-bold text-stone-900">{{ product.title }}</h3>
            <p class="text-stone-400 text-[10px] mt-1 italic">View Personalization Details</p>
          </div>
        </div>
      </div>

      <div class="mt-20 text-center border-t border-stone-100 pt-20">
        <h3 class="text-stone-400 text-[10px] uppercase tracking-[0.5em] mb-8">Can't find what you're looking for?</h3>
        <button @click="$emit('open-lookbook')"
          class="group relative inline-flex flex-col items-center gap-4 transition-all">
          <div
            class="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-500">
            <svg class="w-5 h-5 text-stone-900 group-hover:text-white transition-colors" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
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
import { useRouter } from 'vue-router';
import { catalogData } from '../data/catalog.js';

const router = useRouter();

const navigateToCheckout = (product, category) => {
  router.push({
    name: 'Checkout',
    params: { productId: product.id },
    query: { category: category.name }
  });
};

</script>

<style scoped>
.text-brand-gold {
  color: #C9A961;
}
</style>