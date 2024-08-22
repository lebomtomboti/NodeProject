<template>
 <div class="row1">
      <h2 class="display-2 pt-5">Vogue Vault</h2>
    </div>
  <div class="banner pt-4 pb-4 justify-content-center align-items-center">
      <img src="https://github.com/Kifaa26/images-js/blob/main/d-bags(1)(1).png?raw=true" alt="Fashion Banner" class="img-fluid banner-img " loading="lazy" />
      <div class="banner-text-box">
        <h1 class="display-1">Discover Luxury</h1>
        <p class="lead">Exclusive designer bags at Vogue Vault</p>
      </div>
      <div class="border-line top"></div>
      <div class="border-line bottom"></div>
    </div>
    

</template>
 
<script>

</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 70%; 
  overflow: hidden; 
  text-align: center;
}

.banner-img {
  width: 100%;
  height: 60%; 
  object-fit: cover; 
  object-position: center; 
}

.banner-text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.57);
  padding: 20px;
  color: white;
  text-align: center;
  width: fit-content;
  max-width: 90%;
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
  color: rgb(255, 255, 255); 
  text-align: center; 
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.578); 
}

.banner-text h1 {
  font-size: 5rem; 
  margin: 0;
}

.banner-text p {
  font-size: 1.5rem; 
  margin: 10px 0 0 0;
}

.border-line {
  position: absolute;
  height: 0.1rem;
  background-color: rgb(5, 5, 5);
  width: 100%;
  animation: slide 2s linear infinite;
}

.border-line.top {
  top: 0;
}

.border-line.bottom {
  bottom: 0;
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.row1 {
  text-align: center;
  font-family: "Playfair Display", serif;
  padding: 20px; 
}

.row2 {
  text-align: center;
  font-family: "Playfair Display", serif;
}

</style>