<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center mt-3 mb-3">
          <h2 class="contact-heading">Contact Us</h2>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <img src="https://github.com/Kifaa26/images-js/blob/main/burberry.jpg?raw=true" alt="image" class="img-fluid" loading="lazy">
        </div>
        <div class="contact-form-container">
    <div class="form-header">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below.</p>
    </div>
    <form class="contact-form" action="https://formspree.io/f/xqkrjaaa" method="POST">
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name">
      </div>
      <div class="form">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com" name="email">
      </div>
      <div class="form">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="5" placeholder="Enter your message" name="message"></textarea>
      </div>
      <button type="submit" class="btn custom-submit-button">Submit</button>
    </form>

            <div class="info mt-4 pt-5">
              <h4>Get in touch</h4>
              <p>If you have any questions or need help, feel free to contact :</p>
              <p>Email: <a href="info@voguevault.com">info@voguevault.com</a></p>
              <p>Phone: <a href="0215879652">021 587 9652</a></p>
            </div>

            <div class="row justify-content-center mt-4">
              <div class="col-auto">
                <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
              </div>
              <div class="col-auto">
                <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
              </div>
              <div class="col-auto">
                <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      formSubmitted: false
    };
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;
    }
  }
};
</script>

<style scoped>
.contact-form-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffffe2;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 20px;
}

.form-header h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.form-header p {
  font-size: 16px;
  color: rgb(5, 5, 5);
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form .form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.contact-form .form-control {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #00000053;
  font-size: 16px;
}

.contact-form .form-control:focus {
  outline: none;
  border-color: #000;
  box-shadow: 0 0 5px rgb(255, 255, 255);
}

.custom-submit-button {
  width: 100%;
  padding: 10px;

  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-submit-button:hover {
  background-color: #333;
}

@media (max-width: 768px) {
  .contact-form-container {
    padding: 15px;
  }
  .form-header h2 {
    font-size: 24px;
  }
  .custom-submit-button {
    font-size: 16px;
  }
}
/* .contact-heading {
  font-size: 2.5rem;
  padding: 60px;
  font-family: "Averia Serif Libre", serif;
}

.custom-submit-button {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
}


.custom-submit-button:hover {
  background-color: #515c65;
}


.container {
  max-width: 1200px;
  margin: 0 auto;
} */

.img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  padding-top: 1.2 rem;
}

.info {
  text-shadow: 2px 2px 4px rgb(228, 228, 228);
}




</style>


