<!-- <template>
 <div class="row1">
      <h2 class="display-2 pt-5">Vogue Vault</h2>
    </div>
  <div class="banner pt-5">
      <img src="https://blog.fashionphile.com/wp-content/uploads/2022/10/Hero-7.jpg" alt="Fashion Banner" class="img-fluid banner-img" />
      <div class="banner-text">
        <h1 class="display-1">Discover Luxury</h1>
        <p class="lead">Exclusive designer products at Vogue Vault</p>
      </div>
    </div>
    
    <div class="row">
      <h4 class="display-4 pt-5">Recent products</h4>
    </div>
    <div class="row gap-2 justify-content-center" v-if="recentProducts">

      <Card v-for="product in recentProducts" :key="product.productID">
        <!-- <template #cardHeader>
          {{ product.productURL }}
          <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
          <p class="lead">{{ product.prodDescription }}</p>
          <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
        </template> -->
      </Card>
    </div>
    <div v-else>
      <Spinner />
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
export default {
  name: 'HomeView',
  components: {
    Card,
    Spinner
  },
  // computed: {
  //   recentProducts() {
  //     return this.$store.state.recentProducts
  //   }
  // },
  // mounted() {
  //   this.$store.dispatch('recentProducts')
  // }
}
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 60vh; 
  overflow: hidden;
  margin-bottom: 20px; 
}

.banner-img {
  width: 100%;
  height: 90vh; 
  object-fit: cover; 
  object-position: center; 
}

.container {
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 15px; 
  box-sizing: border-box; 
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  color: rgb(0, 0, 0); 
  text-align: center; 
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.485); 
}

.banner-text h1 {
  font-size: 5rem; 
  margin: 0;
}

.banner-text p {
  font-size: 1.5rem; 
  margin: 10px 0 0 0;
}

.row1 {
  text-align: center;
  font-family: "Averia Serif Libre", serif;
}

</style> -->