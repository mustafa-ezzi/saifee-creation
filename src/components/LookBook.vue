<template>
  <nav
    class="fixed inset-x-0 top-0 z-[200] bg-white/80 backdrop-blur-md border-b border-stone-100/70 px-5 sm:px-8 md:px-12 py-4 md:py-6 flex items-center justify-between shadow-sm"
    aria-label="Main navigation">
    <button @click="$router.push('/')"
      class="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]/50 rounded"
      aria-label="Back to gallery">
      <span class="text-xs uppercase tracking-[0.25em] font-medium">Back</span>
    </button>

    <div class="relative w-40 h-14 md:w-56 md:h-20 overflow-hidden transition-all duration-300">
      <transition name="logo-fade" mode="out-in">
        <img v-if="currentLogo === 1" key="logo1" src="/logo-1.png" alt="Brand logo variant 1"
          class="absolute inset-0 w-full h-full object-contain" loading="eager" />
        <img v-else key="logo2" src="/logo-2.png" alt="Brand logo variant 2"
          class="absolute inset-0 w-full h-full object-contain" loading="eager" />
      </transition>
    </div>

    <div class="w-12 md:w-16 hidden sm:block"></div>
  </nav>

  <main class="min-h-screen bg-[#FAF9F6] pt-28 md:pt-36 pb-24">
    <div class="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

      <button @click="$router.push('/')"
        class="text-[11px] md:text-xs uppercase tracking-[0.35em] text-stone-400 hover:text-stone-900 transition-colors flex items-center gap-2 mb-10 md:mb-16 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]/40 rounded"
        aria-label="Return to gallery view">
        <span class="group-hover:-translate-x-1 transition-transform inline-block">←</span>
        Back to Gallery
      </button>

      <nav
        class="sticky top-20 md:top-24 z-[100] mb-16 md:mb-24 py-4 bg-[#FAF9F6]/90 backdrop-blur-md border-y border-stone-200/60"
        aria-label="Product categories">
        <div class="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar whitespace-nowrap px-1">
          <a v-for="cat in catalogData" :key="cat.name" :href="'#' + slugify(cat.name)"
            class="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold text-stone-500 hover:text-stone-900 transition-colors duration-300"
            @click.prevent="smoothScrollTo(slugify(cat.name))">
            {{ cat.name }}
          </a>
        </div>
      </nav>

      <section v-for="(cat, index) in catalogData" :key="cat.name" :id="slugify(cat.name)"
        class="mb-32 md:mb-48 scroll-mt-32 md:scroll-mt-40">
        <header class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16 items-end">
          <div class="lg:col-span-5">
            <span class="text-[#C9A961] text-[11px] uppercase tracking-[0.55em] font-black block mb-4">
              Collection {{ (index + 1).toString().padStart(2, '0') }}
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
              {{ cat.name }}
            </h2>
          </div>
          <div class="lg:col-span-7">
            <p v-if="cat.description"
              class="text-stone-600 text-sm md:text-base leading-relaxed font-light italic border-l-2 border-[#C9A961]/70 pl-6 md:pl-10">
              {{ cat.description }}
            </p>
          </div>
        </header>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-5 sm:gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-16">
          <article v-for="product in cat.products" :key="product.id"
            class="group cursor-pointer focus-within:ring-2 focus-within:ring-[#C9A961]/40 focus-within:ring-offset-2 rounded outline-none"
            tabindex="0" @click="navigateToCheckout(product, cat)"
            @keydown.enter.space.prevent="navigateToCheckout(product, cat)" role="button"
            :aria-label="`View ${product.title}`">
            <div class="relative aspect-[4/5] bg-[#F9F8F6] mb-4 overflow-hidden border border-stone-50">
              <img :src="product.images[0]" :class="[
                'w-full h-full object-cover transition-all duration-700 absolute inset-0',
                product.images.length > 1 ? 'group-hover:opacity-0 group-hover:scale-105' : 'group-hover:scale-105'
              ]" />

              <img v-if="product.images.length > 1" :src="product.images[1]"
                class="w-full h-full object-cover transition-all duration-700 absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105" />

              <div
                class="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center pb-8 md:pb-10">
                <span
                  class="text-white text-[10px] md:text-[11px] uppercase tracking-[0.45em] font-black border-b border-white/50 pb-1.5 opacity-90 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  Personalize
                </span>
              </div>
            </div>

            <h3
              class="mt-4 md:mt-5 text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold text-stone-800 text-center">
              {{ product.title }}
            </h3>

            <div class="flex justify-center mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="h-px w-10 md:w-12 bg-[#C9A961]/70"></div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
import { catalogData } from '../data/catalog.js'
const currentLogo = ref(1)
let logoInterval = null

const navigateToCheckout = (product, category) => {
  router.push({
    name: 'Checkout',
    params: { productId: product.id },
    query: { category: category.name }
  })
}

onMounted(() => {
  logoInterval = setInterval(() => {
    currentLogo.value = currentLogo.value === 1 ? 2 : 1
  }, 6000)
})

onUnmounted(() => {
  if (logoInterval) clearInterval(logoInterval)
})

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

const smoothScrollTo = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: all 0.9s ease;
}

.logo-fade-enter-from,
.logo-fade-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.logo-fade-leave-active {
  position: absolute;
}
</style>