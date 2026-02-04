<template>
  <nav 
    :class="[
      'fixed w-full top-0 z-[100] transition-all duration-300 px-6 py-4 flex items-center justify-between border-b',
      isScrolled ? 'bg-white/90 backdrop-blur-md border-stone-100 py-2 shadow-sm' : 'bg-white border-transparent'
    ]"
  >
    <div class="flex-1">
      <a href="#" class="relative block w-32 h-12 md:w-40 md:h-14 perspective-1000">
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

    <div class="flex-1 flex justify-end items-center space-x-4 md:space-x-8">
      <a 
        href="https://wa.me/923352210993" 
        target="_blank"
        class="relative p-2 hover:bg-stone-50 rounded-full transition-colors group"
      >
        <svg class="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </a>
      
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-stone-900">
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <div v-if="mobileMenuOpen" class="fixed inset-0 top-[73px] bg-white z-[60] flex flex-col p-8 md:hidden">
        <div class="flex flex-col space-y-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.url" 
            @click="mobileMenuOpen = false" 
            class="text-sm uppercase tracking-[0.3em] font-bold text-stone-800 border-b border-stone-50 pb-4"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const currentLogo = ref(1);
let logoInterval = null;

const navLinks = [
  { name: 'Home', url: '#' },
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