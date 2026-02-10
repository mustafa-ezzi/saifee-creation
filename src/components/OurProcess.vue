<template>
  <section id="howitworks" class="py-24 bg-white overflow-hidden border-t border-stone-50">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-20">
        <h2 class="text-xs uppercase tracking-[0.5em] text-stone-400 font-bold mb-4">The Process</h2>
        <p class="text-4xl md:text-5xl font-serif italic text-stone-900">How It Works</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 relative">

        <div class="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-100 z-0"></div>

        <div v-for="(step, index) in steps" :key="index" class="relative z-10 group text-center">

          <div class="mb-10 flex justify-center">
            <div
              class="w-24 h-24 rounded-full bg-white border border-stone-100 flex items-center justify-center group-hover:border-stone-900 transition-all duration-700 shadow-sm relative overflow-hidden">
              <span class="text-stone-900 font-serif italic text-3xl relative z-10">0{{ index + 1 }}</span>
              <div
                class="absolute inset-0 bg-stone-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              </div>
            </div>
          </div>

          <div class="space-y-4 px-4">
            <h3 class="text-lg uppercase tracking-widest font-bold text-stone-900">
              {{ step.title }}
            </h3>
            <div class="w-8 h-px bg-brand-gold mx-auto group-hover:w-16 transition-all duration-500"></div>
            <p class="text-stone-500 text-sm leading-relaxed font-light">
              {{ step.description }}
            </p>
          </div>

          <div
            class="mt-10 opacity-20 group-hover:opacity-100 transition-all duration-1000 transform scale-95 group-hover:scale-100">
            <img :src="step.iconImg" class="w-20 h-20 mx-auto object-contain grayscale" :alt="step.title">
          </div>
        </div>

      </div>

      <div
        class="mt-24 p-8 md:p-12 bg-[#F9F8F6] flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
        <div class="flex items-center gap-6">
          <div class="hidden sm:block w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h4 class="font-serif text-xl text-stone-900 mb-1 italic">Fast-Track Production</h4>
            <p class="text-stone-500 text-[13px]">Printing begins within 24 hours of receiving your final confirmation.
            </p>
          </div>
        </div>

        <a href="#collections"
          class="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 border-b border-stone-900 pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
          Start Your Order
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Choose Your Design',
    description: 'Start by browsing our curated archive and selecting your preferred silhouette, material, and design style.',
    iconImg: 'https://cdn-icons-png.flaticon.com/512/3342/3342137.png' // Search/Browse Icon
  },
  {
    title: 'Personalize It',
    description: 'Once you’ve selected a design, customize it by adding your preferred text, names, and other bespoke options that suit your needs.',
    iconImg: 'https://cdn-icons-png.flaticon.com/512/2541/2541991.png' // Edit/Custom Icon
  },
  {
    title: 'Preview & Approve',
    description: 'We’ll create your personalized die and share a draft preview. Review fonts and layout, request changes, and give final approval.',
    iconImg: 'https://cdn-icons-png.flaticon.com/512/3503/3503825.png' // Check/Approval Icon
  }
];
</script>

<style scoped>
.text-brand-gold {
  color: #C9A961;
}

.bg-brand-gold {
  background-color: #C9A961;
}

/* Custom ease for the connecting line */
@media (min-width: 768px) {
  .grid>.relative:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 3rem;
    right: -20%;
    width: 40%;
    height: 1px;
    background: #f1f1f1;
    z-index: 0;
  }
}
</style>