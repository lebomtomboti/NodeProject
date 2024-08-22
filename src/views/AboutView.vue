<template>
  <section id="about-us" class="container my-5 pt-5">
    <div class="row">
      <div class="col-md-6">
        <h2 class="about-heading">About Us</h2>
        <p>
          Welcome to Vogue Vault, your ultimate destination for luxury designer bags. Since our inception in 2022, we have been committed to offering an exclusive collection of high-end bags that epitomize style and sophistication. Our curated selection features the finest designs from renowned brands, ensuring that each piece is a statement of elegance and craftsmanship.
        </p>
        <p>
          At Vogue Vault, we believe that a designer bag is more than just an accessory—it's a reflection of personal style and a symbol of quality. We strive to provide an exceptional shopping experience, blending a user-friendly online platform with top-notch customer service. Our team is dedicated to helping you find the perfect bag that complements your individuality and enhances your wardrobe.
        </p>
        <p>
          Our mission is to bring you the best of designer fashion, offering a seamless and enjoyable shopping experience. With a passion for excellence and an eye for detail, we are here to make luxury accessible and to ensure that every purchase is a gratifying experience. Discover the world of Vogue Vault, where luxury meets convenience and style knows no bounds.
        </p>
      </div>
      <div class="col-md-6">
        <img src="https://github.com/Kifaa26/images-js/blob/main/Versace.jpg?raw=true" alt="Versace Bag" class="img-fluid" loading="lazy">
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
#about-us {
  background-color: #f9f9f9;
  border: 2px solid black;
  padding: 10px;
  border-radius: 10px;
}


#about-us h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgb(255, 255, 255); 
  color: rgb(5, 5, 5),
}

#about-us p {
  font-size: 1.3rem;
  line-height: 1.6;
  text-shadow: 2px 2px 4px rgb(255, 255, 255); 
}

#about-us img {
  border-radius: 8px 8px;
}


</style>