<template>
  <div class="min-h-screen bg-white">
    <div v-if="view === 'home'" class="animate-fade-in">
      <TheHero />
      <AllProducts @select-product="goToCustomization" />
      <OurProcess />
    </div>

    <div v-else-if="view === 'customize'" class="animate-fade-in">
      <CustomizationPage 
        :product="selectedProduct" 
        :category="selectedCategory" 
        @back="view = 'home'" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheHero from '../components/Hero.vue'
import AllProducts from '../components/AllProducts.vue'
import OurProcess from '../components/OurProcess.vue'
import CustomizationPage from '../components/CustomizationPage.vue' // Adjust path if your 'App.vue' customization code is moved to a component

const view = ref('home') // Toggle between 'home' and 'customize'
const selectedProduct = ref(null)
const selectedCategory = ref(null)

// Function to switch pages and pass data
const goToCustomization = (product, category) => {
  selectedProduct.value = product
  selectedCategory.value = category
  view.value = 'customize'
  window.scrollTo(0, 0)
}

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id')
          history.replaceState(null, '', `#${sectionId}`)
        }
      })
    },
    { threshold: 0.3 }
  )
  sections.forEach(section => observer.observe(section))
})
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>