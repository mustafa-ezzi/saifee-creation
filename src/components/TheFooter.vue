<template>
  <footer class="relative bg-[#0F0F0F] py-12 overflow-hidden border-t border-white/5">
    <div class="max-w-[1400px] mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        
        <!-- Logo -->
        <div class="relative h-12 w-32 md:w-40">
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

        <!-- Center Content -->
        <div class="text-center flex-1">
          <p class="text-stone-400 text-xs tracking-[0.2em] uppercase">
            © {{ currentYear }} Saifee Creations
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex items-center space-x-6">
          <a href="https://www.instagram.com/saifeecreationspak" target="_blank" rel="noopener noreferrer" class="text-stone-500 hover:text-white transition-colors duration-300">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.203 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.001 2.881 1.44 1.44 0 01-.001-2.881z"/>
            </svg>
          </a>
          <a href="https://wa.me/+923352210993" target="_blank" rel="noopener noreferrer" class="text-stone-500 hover:text-white transition-colors duration-300">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.125 0-2.235.356-3.156 1.027l-.227.144-.235-.04c-.751-.127-1.522-.129-2.297.039l.463.607c.96-.763 2.286-1.223 3.652-1.223 3.035 0 5.5 2.466 5.5 5.5 0 1.366-.456 2.692-1.223 3.652l.607.463c.168-.775.166-1.546.039-2.297l-.04-.235.144-.227c.671-.921 1.027-2.031 1.027-3.156 0-3.035-2.466-5.5-5.5-5.5"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
        <p class="tracking-[0.2em] uppercase">Crafting Premium Envelopes</p>
        <p class="tracking-[0.2em] uppercase">
          Designed by <a href="https://5cube.io/" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:text-red-400 font-semibold transition-colors duration-300">5Cube</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

// Logo Logic
const currentLogo = ref(1);
let logoInterval = null;

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

/* Inverts logos for dark background if they are originally dark */
.brightness-0.invert {
  filter: brightness(0) invert(1);
}
</style>