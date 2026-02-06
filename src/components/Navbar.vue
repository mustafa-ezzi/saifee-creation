<template>
  <nav 
    :class="[
      'fixed w-full top-0 z-[100] transition-all duration-300 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border-b',
      isScrolled && !mobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-stone-100 py-2 shadow-sm' : 'bg-white border-transparent'
    ]"
  >
    <div class="flex-1">
      <a href="#home" class="relative block w-28 h-10 md:w-40 md:h-14 perspective-1000">
        <transition name="logo-flip" mode="out-in">
          <img 
            v-if="currentLogo === 1" 
            key="logo1"
            src="/logo-1.png" 
            alt="Saifee Creations" 
            class="w-full h-full object-contain"
          />
          <img 
            v-else 
            key="logo2"
            src="/logo-2.png" 
            alt="Saifee Creations" 
            class="w-full h-full object-contain"
          />
        </transition>
      </a>
    </div>

    <ul class="hidden md:flex space-x-12 items-center flex-1 justify-center">
      <li v-for="link in navLinks" :key="link.name">
        <a 
          :href="link.url" 
          class="text-[10px] uppercase tracking-[0.25em] font-bold text-stone-600 hover:text-stone-900 transition-colors duration-300 relative group"
        >
          {{ link.name }}
          <span class="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    </ul>

    <div class="flex-1 flex justify-end items-center space-x-2 md:space-x-8">
      <a 
        href="https://wa.me/923352210993" 
        target="_blank"
        rel="noopener noreferrer"
        class="relative p-2 hover:bg-green-50 rounded-full transition-colors group"
        title="Contact on WhatsApp"
      >
        <svg class="w-5 h-5 md:w-6 md:h-6 text-green-600 hover:text-green-700" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.125 0-2.235.356-3.156 1.027l-.227.144-.235-.04c-.751-.127-1.522-.129-2.297.039l.463.607c.96-.763 2.286-1.223 3.652-1.223 3.035 0 5.5 2.466 5.5 5.5 0 1.366-.456 2.692-1.223 3.652l.607.463c.168-.775.166-1.546.039-2.297l-.04-.235.144-.227c.671-.921 1.027-2.031 1.027-3.156 0-3.035-2.466-5.5-5.5-5.5"/>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"/>
        </svg>
      </a>
      
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-stone-900 p-2 hover:bg-stone-100 rounded-lg transition-colors">
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <div v-if="mobileMenuOpen" class="fixed inset-0 top-[64px] md:top-[73px] bg-white/95 backdrop-blur-sm z-[60] flex flex-col p-6 md:hidden shadow-lg">
        <div class="flex flex-col space-y-4">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.url" 
            @click="mobileMenuOpen = false" 
            class="text-sm uppercase tracking-[0.3em] font-bold text-stone-800 border-b border-stone-100 pb-4 hover:text-green-600 transition-colors duration-300"
          >
            {{ link.name }}
          </a>
          <a 
            href="https://wa.me/923352210993"
            target="_blank"
            rel="noopener noreferrer"
            @click="mobileMenuOpen = false"
            class="text-sm uppercase tracking-[0.3em] font-bold text-green-600 flex items-center gap-2 pt-2 hover:text-green-700 transition-colors duration-300"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const currentLogo = ref(1);
let logoInterval = null;

const navLinks = [
  { name: 'Home', url: '#home' },
  { name: 'Shop', url: '#collections' },
  { name: 'Process', url: '#howitworks' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // LOGO SWITCHING LOGIC: Changes every 5 seconds
  logoInterval = setInterval(() => {
    currentLogo.value = currentLogo.value === 1 ? 2 : 1;
  }, 5000);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (logoInterval) clearInterval(logoInterval);
});

// Watch for mobile menu open/close to prevent scroll
watch(mobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>

<style scoped>
/* 3D Perspective Container */
.perspective-1000 {
  perspective: 1000px;
}

/* Flip Animation Logic */
.logo-flip-enter-active, 
.logo-flip-leave-active {
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s;
  backface-visibility: hidden;
}

/* Start of the entry (Flipped 90 degrees) */
.logo-flip-enter-from {
  opacity: 0;
  transform: rotateY(-90deg);
}

/* End of the exit (Flipped 90 degrees) */
.logo-flip-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}

/* Ensure images stay positioned correctly during transition */
.logo-flip-leave-active {
  position: absolute;
}

/* Standard Fade for Mobile Menu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>