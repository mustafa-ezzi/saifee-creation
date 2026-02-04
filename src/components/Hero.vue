<template>
  <section class="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden bg-[#F9F7F2]">
    
    <div class="flex-1 px-8 md:px-16 lg:px-24 pt-32 pb-12 md:py-0 z-10">
      <div class="hero-text-container">
        <h3 class="gold-text uppercase tracking-[0.4em] text-xs mb-4 block overflow-hidden">
          <span class="inline-block translate-y-full hero-reveal">Premium Stationery</span>
        </h3>
        
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-800 leading-tight mb-6 overflow-hidden">
          <span class="inline-block translate-y-full hero-reveal">The Art of the</span><br />
          <span class="inline-block translate-y-full hero-reveal italic">Perfect Invitation</span>
        </h1>
        
        <p class="text-stone-500 max-w-md mb-8 leading-relaxed overflow-hidden">
          <span class="inline-block translate-y-full hero-reveal">
            Handcrafted envelopes with gold foil finishes and bespoke textures designed to make every moment unforgettable.
          </span>
        </p>
        
        <div class="flex space-x-4 overflow-hidden">
          <button class="hero-reveal hero-btn bg-stone-800 text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-gold-leaf transition-colors duration-500">
            View Collections
          </button>
        </div>
      </div>
    </div>

    <div class="flex-1 relative w-full h-[50vh] md:h-screen">
      <div class="hero-image-wrapper h-full w-full scale-110 opacity-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=2000" 
          alt="Luxury Envelope" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-stone-900/10"></div>
      </div>
      
      <div class="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-6 shadow-2xl floating-card opacity-0">
        <p class="font-serif italic text-stone-400 text-sm">Finest Quality</p>
        <p class="text-xs uppercase tracking-widest text-stone-800 font-bold mt-1">350 GSM Matte Card</p>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
      <div class="w-[1px] h-12 bg-stone-300 mx-auto"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

  tl.to('.hero-reveal', {
    y: 0,
    stagger: 0.1,
  })
  .to('.hero-image-wrapper', {
    scale: 1,
    opacity: 1,
    duration: 2,
  }, "-=1")
  .to('.floating-card', {
    x: 24,
    opacity: 1,
    duration: 1.5
  }, "-=1.5");
});
</script>

<style scoped>
.gold-text {
  color: #C5A059;
}

.bg-gold-leaf {
  background-color: #C5A059;
}

/* For GSAP initial state visibility control */
.hero-reveal {
  display: inline-block;
}

/* Smooth floating animation for the decorative card */
.floating-card {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(-50%) translateX(24px); }
  50% { transform: translateY(-60%) translateX(24px); }
}
</style>