<template>
 <div class="row1">
      <h2 class="display-2 pt-5">Vogue Vault</h2>
    </div>
  <div class="banner pt-4 pb-4 justify-content-center align-items-center">
      <img src="https://github.com/Kifaa26/images-js/blob/main/d-bags(1)(1).png?raw=true" alt="Fashion Banner" class="img-fluid banner-img " loading="lazy" />
      <div class="banner-text-box">
        <h1 class="display-1">Discover Luxury</h1>
        <p class="lead text-light">Exclusive designer bags at Vogue Vault</p>
      </div>
      <div class="border-line top"></div>
      <div class="border-line bottom"></div>
      </div>
      <div class="new-releases-section pt-5 pb-3">
    <h3 class="display-4 text-center">Check out our range of wallets</h3>
    <p class="lead text-center">Explore our latest collection of designer wallets. These exclusive pieces are a perfect blend of style and luxury, designed to elevate your fashion game. Discover the finest from YSL, Louis Vuitton, and Prada, now available in our New Releases section.</p>
    <div class="cards-container">
      <div class="card-item">
        <img src="https://github.com/Kifaa26/images-js/blob/main/YSL%20wallet.jpg?raw=true" class="card-img" alt="YSL Wallet">
        <div class="card-body">
          <h5 class="card-title">YSL Wallet</h5>
        </div>
      </div>
      <div class="card-item">
        <img src="https://github.com/Kifaa26/images-js/blob/main/louis%20vuitton%20wallet.jpg?raw=true" class="card-img" alt="Louis Vuitton Wallet">
        <div class="card-body">
          <h5 class="card-title">Louis Vuitton Wallet</h5>
        </div>
      </div>
      <div class="card-item">
        <img src="https://github.com/Kifaa26/images-js/blob/main/prada%20wallet.jpg?raw=true" class="card-img" alt="Prada Wallet">
        <div class="card-body">
          <h5 class="card-title">Prada Wallet</h5>
        </div>
      </div>
    </div>
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
  max-width: 300px;
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

.new-releases-section {
  text-align: center;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 30px; 
  padding: 20px 0;
}

.card-item {
  width: 400px; 
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.card-img {
  width: 100%;
  height: auto;
  display: block;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.2rem; 
  font-weight: bold;
  margin: 0;
  font-family: "Playfair Display", serif;
}

.new-releases-section {
  font-family: "Playfair Display", serif;
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .card-item {
    width: 100%; 
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .banner-text-box {
    left: 5%;
    top: 15%;
    max-width: 250px;
  }

  .banner-text-box h1 {
    font-size: 1.5rem;
  }

  .banner-text-box p {
    font-size: 0.9rem;
  }
}
@media (max-width: 768px) {
  .banner-text-box {
    max-width: 250px;
  }

  .banner-text-box h1 {
    font-size: 1.5rem;
  }

  .banner-text-box p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .banner-text-box {
    max-width: 200px;
  }

  .banner-text-box h1 {
    font-size: 1.2rem;
  }

  .banner-text-box p {
    font-size: 0.8rem;
  }
}
</style>