<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2 pt-5 pb-5">Product Details</h2>
      </div>
      <div class="row gap-2 justify-content-center my-2" v-if="product">
        <div class="col-md-6">
          <div class="card">
            <img :src="product.prodUrl" loading="lazy" class="card-img-top" :alt="product.prodName">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
              <p class="lead"><span class="text-success fw-bold text-black">Amount</span>: R{{ product.prodAmount }}</p>
              <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                <button class="btn btn-success w-100">View More</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import Spinner from '@/components/Spinner.vue'
  
  const store = useStore()
  const route = useRoute()
  const productId = route.params.id
  
  const product = computed(() => store.state.products.find(p => p.prodID === productId))
  
  onMounted(() => {
    store.dispatch('fetchProduct', productId)
  })
  </script>