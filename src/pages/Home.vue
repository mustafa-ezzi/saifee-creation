<template>
  <div class="min-h-screen bg-white">
    <TheHero @open-lookbook="$router.push('/shop')" />
    <AllProducts 
      @select-product="openCheckout" 
      @open-lookbook="$router.push('/shop')" 
    />    
    <OurProcess />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import TheHero from '../components/Hero.vue'
import AllProducts from '../components/AllProducts.vue'
import OurProcess from '../components/OurProcess.vue'

const router = useRouter()

const openCheckout = (product, category) => {
  router.push({
    name: 'Checkout',
    params: { productId: product.id },
    query: { category: category.name }
  })
}
</script>