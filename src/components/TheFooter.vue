<template>
  <footer class="relative bg-[#0F0F0F] pt-24 pb-12 overflow-hidden border-t border-white/5">
    <div class="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.02]">
      <span class="text-[15vw] font-serif italic leading-none text-white">Saifee</span>
    </div>

    <div class="max-w-[1400px] mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
        
        <div class="md:col-span-5 space-y-8">
          <div class="relative h-16 w-48 overflow-hidden">
            <transition name="logo-fade">
              <img 
                v-if="currentLogo === 1" 
                key="f-logo1"
                src="/logo-1.png" 
                alt="Saifee Creations" 
                class="absolute inset-0 h-full object-contain brightness-0 invert"
              />
              <img 
                v-else 
                key="f-logo2"
                src="/logo-2.png" 
                alt="Saifee Creations" 
                class="absolute inset-0 h-full object-contain brightness-0 invert"
              />
            </transition>
          </div>

          <p class="text-stone-500 text-sm font-light leading-relaxed max-w-sm">
            Crafting the canvas for your most significant messages. From bespoke wedding suites to minimalist corporate Envelopes, we celebrate the tactile beauty of fine paper.
          </p>
          
          <div class="flex items-center space-x-6 pt-4">
            <a href="https://www.instagram.com/saifeecreationspak" target="_blank" class="group flex items-center space-x-3 text-stone-400 hover:text-brand-gold transition-all duration-500">
              <span class="text-[10px] uppercase tracking-[0.3em]">Instagram</span>
              <div class="w-8 h-px bg-stone-800 group-hover:w-12 group-hover:bg-brand-gold transition-all duration-500"></div>
            </a>
            <a href="https://wa.me/+923352210993" target="_blank" class="group flex items-center space-x-3 text-stone-400 hover:text-brand-gold transition-all duration-500">
              <span class="text-[10px] uppercase tracking-[0.3em]">WhatsApp</span>
              <div class="w-8 h-px bg-stone-800 group-hover:w-12 group-hover:bg-brand-gold transition-all duration-500"></div>
            </a>
          </div>
        </div>

        <div class="md:col-span-3 space-y-6">
          <h4 class="text-white text-[10px] uppercase tracking-[0.5em] font-bold">The Studio</h4>
          <ul class="space-y-4">
            <li v-for="link in navLinks" :key="link.name">
              <button 
                @click="handleNav(link.target)"
                class="text-stone-500 hover:text-white text-xs tracking-widest uppercase transition-colors duration-300 text-left"
              >
                {{ link.name }}
              </button>
            </li>
          </ul>
        </div>

        <div class="md:col-span-4 space-y-6 text-left">
          <h4 class="text-white text-[10px] uppercase tracking-[0.5em] font-bold">Location</h4>
          <p class="text-stone-500 text-xs tracking-[0.2em] leading-loose uppercase">
            Karachi, Sindh<br/>
            Pakistan
          </p>
          <div class="pt-4">
            <button @click="scrollToTop" class="group flex items-center space-x-4">
              <div class="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-brand-gold transition-colors duration-500">
                <svg class="w-4 h-4 text-stone-400 group-hover:text-brand-gold transform group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <span class="text-stone-500 group-hover:text-white text-[9px] uppercase tracking-[0.4em] transition-colors">Return to Top</span>
            </button>
          </div>
        </div>
      </div>

      <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[9px] uppercase tracking-[0.4em] text-stone-600">
          © {{ currentYear }} Saifee Creations • Custom Envelopes
        </p>
        <div class="flex items-center space-x-8 text-stone-600 text-[9px] uppercase tracking-[0.4em]">
          <a href="#" class="hover:text-stone-400 transition-colors">Privacy</a>
          <a href="#" class="hover:text-stone-400 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['nav-click']);
const currentYear = computed(() => new Date().getFullYear());

// Logo Logic
const currentLogo = ref(1);
let logoInterval = null;

const navLinks = [
  { name: 'Home', target: 'home' }, 
  { name: 'Collections', target: 'shop' }, 
  { name: 'Our Process', target: 'process' }, 
];

const handleNav = (target) => {
  emit('nav-click', target);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  logoInterval = setInterval(() => {
    currentLogo.value = currentLogo.value === 1 ? 2 : 1;
  }, 5000);
});

onUnmounted(() => {
  if (logoInterval) clearInterval(logoInterval);
});
</script>

<style scoped>
.text-brand-gold { color: #C9A961; }

/* Inverts logos for dark background if they are originally dark */
.brightness-0.invert {
  filter: brightness(0) invert(1);
}

/* Logo Animation */
.logo-fade-enter-active, .logo-fade-leave-active {
  transition: opacity 1.2s ease, transform 1.2s ease;
}
.logo-fade-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
.logo-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

button { background: none; border: none; cursor: pointer; padding: 0; }
li button { position: relative; }
li button::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -4px;
  left: 0;
  background-color: #C9A961;
  transition: width 0.4s ease;
}
li button:hover::after { width: 100%; }
</style>