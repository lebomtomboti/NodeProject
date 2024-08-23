<template>
  <div class="container">
      <div class="row">
          <h2 class="display-2 pt-5 pb-5">Products</h2>
      </div>
      <div class="row gap-2 justify-content-center my-2" v-if="products">
          <Card v-for="product in products" :key="product.prodID">
              <template #cardHeader>
                  {{ product.prodURL }}
                  <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
              </template>
              <template #cardBody>
                  <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                  <p class="lead"><span class="text-success fw-bold text-black">Amount</span>: R{{ product.prodAmount }}</p>
                  <div class="button-wrapper d-md-flex d-block justify-content-between">
                      <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                          <button class="btn btn-success">View</button>
                      </router-link>
                  </div>
              </template>
          </Card>
      </div>
      <div v-else>
          <Spinner />
      </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'

const store = useStore()
const products = computed(
  () => store.state.products
)
onMounted(() => {
  store.dispatch('fetchProducts')
}) 
</script>


<style>
.container {
  padding-top: 20px;
  padding-bottom: 20px;
}

h2 {
  text-align: center;
  color: #333;
}

.product-image {
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
}

.card-title {
  color: rgb(5, 5, 5);
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.lead {
  font-size: 1rem;
  color: #000000;
  
}

.button-wrapper {
  margin-top: 10px;
}

.btn-success {
  background-color: rgb(5, 5, 5);
  border-color: rgb(5, 5, 5);
  color: #fff;
}

.btn-success:hover {
  background-color: #333;
  border-color: r#333;
}
</style>